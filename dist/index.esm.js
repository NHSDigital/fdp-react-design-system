import * as Y from "react";
import xt, { useState as Ee, useEffect as ze, useCallback as ye, useRef as Be, createElement as gi, useMemo as Me, useContext as qc, createContext as Xc, forwardRef as En, useImperativeHandle as xi, useReducer as bi, memo as Kc, useId as xr } from "react";
import { createPortal as Jc } from "react-dom";
function Zc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cr = { exports: {} }, Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ro;
function Qc() {
  if (ro) return Hn;
  ro = 1;
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
  return Hn.Fragment = t, Hn.jsx = n, Hn.jsxs = n, Hn;
}
var On = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function eu() {
  return ao || (ao = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === T ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case m:
          return "Fragment";
        case x:
          return "Profiler";
        case p:
          return "StrictMode";
        case y:
          return "Suspense";
        case M:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case v:
            return "Portal";
          case I:
            return (E.displayName || "Context") + ".Provider";
          case D:
            return (E._context.displayName || "Context") + ".Consumer";
          case _:
            var H = E.render;
            return E = E.displayName, E || (E = H.displayName || H.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case P:
            return H = E.displayName || null, H !== null ? H : e(E.type) || "Memo";
          case j:
            H = E._payload, E = E._init;
            try {
              return e(E(H));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function n(E) {
      try {
        t(E);
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var z = H.error, ae = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return z.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ae
        ), t(E);
      }
    }
    function a(E) {
      if (E === m) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === j)
        return "<...>";
      try {
        var H = e(E);
        return H ? "<" + H + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var E = k.A;
      return E === null ? null : E.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(E) {
      if (b.call(E, "key")) {
        var H = Object.getOwnPropertyDescriptor(E, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function l(E, H) {
      function z() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: z,
        configurable: !0
      });
    }
    function u() {
      var E = e(this.type);
      return S[E] || (S[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function c(E, H, z, ae, O, pe, Se, ce) {
      return z = pe.ref, E = {
        $$typeof: g,
        type: E,
        key: H,
        props: pe,
        _owner: O
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Se
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function d(E, H, z, ae, O, pe, Se, ce) {
      var de = H.children;
      if (de !== void 0)
        if (ae)
          if (L(de)) {
            for (ae = 0; ae < de.length; ae++)
              f(de[ae]);
            Object.freeze && Object.freeze(de);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(de);
      if (b.call(H, "key")) {
        de = e(E);
        var K = Object.keys(H).filter(function(ue) {
          return ue !== "key";
        });
        ae = 0 < K.length ? "{key: someKey, " + K.join(": ..., ") + ": ...}" : "{key: someKey}", V[de + ae] || (K = 0 < K.length ? "{" + K.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ae,
          de,
          K,
          de
        ), V[de + ae] = !0);
      }
      if (de = null, z !== void 0 && (n(z), de = "" + z), i(H) && (n(H.key), de = "" + H.key), "key" in H) {
        z = {};
        for (var ee in H)
          ee !== "key" && (z[ee] = H[ee]);
      } else z = H;
      return de && l(
        z,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), c(
        E,
        de,
        pe,
        O,
        o(),
        z,
        Se,
        ce
      );
    }
    function f(E) {
      typeof E == "object" && E !== null && E.$$typeof === g && E._store && (E._store.validated = 1);
    }
    var h = xt, g = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), D = Symbol.for("react.consumer"), I = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), k = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, L = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var $, S = {}, A = h.react_stack_bottom_frame.bind(
      h,
      s
    )(), re = N(a(s)), V = {};
    On.Fragment = m, On.jsx = function(E, H, z, ae, O) {
      var pe = 1e4 > k.recentlyCreatedOwnerStacks++;
      return d(
        E,
        H,
        z,
        !1,
        ae,
        O,
        pe ? Error("react-stack-top-frame") : A,
        pe ? N(a(E)) : re
      );
    }, On.jsxs = function(E, H, z, ae, O) {
      var pe = 1e4 > k.recentlyCreatedOwnerStacks++;
      return d(
        E,
        H,
        z,
        !0,
        ae,
        O,
        pe ? Error("react-stack-top-frame") : A,
        pe ? N(a(E)) : re
      );
    };
  })()), On;
}
var so;
function tu() {
  return so || (so = 1, process.env.NODE_ENV === "production" ? cr.exports = Qc() : cr.exports = eu()), cr.exports;
}
var r = tu(), Da = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var oo;
function nu() {
  return oo || (oo = 1, (function(e) {
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
  })(Da)), Da.exports;
}
var ru = nu();
const _e = /* @__PURE__ */ Zc(ru), Yb = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = _e(
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
}, vi = ({
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
    ) : null, l = s.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, u = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: s.href,
        children: u
      }
    ) : s.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ r.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: u })
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: u });
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: _e(
        "nhsuk-account",
        {
          "nhsuk-account--white": a === "white"
        },
        n
      ),
      "aria-label": e,
      children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-account__list", children: t.map(
        (s, i) => s && /* @__PURE__ */ r.jsx(
          "li",
          {
            className: _e(
              "nhsuk-account__item nhsuk-header__account-item",
              s.className
            ),
            children: o(s)
          },
          i
        )
      ) })
    }
  );
};
var yi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(yi || {}), wi = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(wi || {});
function au(e) {
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
const { forwardRef: su, useCallback: Qt, useState: Ta } = Y;
function ou(e, t) {
  const {
    children: n,
    variant: a = yi.Primary,
    size: o = wi.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...u
  } = e, [c, d] = Ta(!1), [f, h] = Ta(!1), [g, v] = Ta(!1), m = au({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in u ? u.href : void 0
  }), p = "disabled" in u ? u.disabled : u["aria-disabled"] === "true", x = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...p && { "data-disabled": "true" }
  }, D = Qt(
    () => !p && d(!0),
    [p]
  ), I = Qt(() => d(!1), []), _ = Qt(
    () => !p && h(!0),
    [p]
  ), y = Qt(() => {
    h(!1), d(!1);
  }, []), M = Qt(() => v(!0), []), P = Qt(() => v(!1), []), j = Qt(
    (de) => {
      de.key === " " && ("href" in u || de.currentTarget.getAttribute("role") === "button") && (de.preventDefault(), de.currentTarget.click());
    },
    [u]
  ), w = Qt(
    (de) => {
      if (l) {
        const K = de.currentTarget;
        if (K.getAttribute("data-processing") === "true") {
          de.preventDefault();
          return;
        }
        K.setAttribute("data-processing", "true"), setTimeout(() => {
          K.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in u && u.href) {
    const {
      id: de,
      style: K,
      title: ee,
      ["aria-label"]: ue,
      ["aria-describedby"]: C,
      ["aria-labelledby"]: B,
      tabIndex: W,
      ...ne
    } = u, Z = u;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: Z.href,
        target: Z.target,
        rel: Z.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...x,
        ...l && { "data-prevent-double-click": "true" },
        ...ne,
        onKeyDown: (ie) => {
          Z.onKeyDown?.(ie), j(ie);
        },
        onClick: (ie) => {
          Z.onClick?.(ie), w(ie);
        },
        onMouseDown: (ie) => {
          Z.onMouseDown?.(ie), D();
        },
        onMouseUp: (ie) => {
          Z.onMouseUp?.(ie), I();
        },
        onMouseEnter: (ie) => {
          Z.onMouseEnter?.(ie), _();
        },
        onMouseLeave: (ie) => {
          Z.onMouseLeave?.(ie), y();
        },
        onFocus: (ie) => {
          Z.onFocus?.(ie), M();
        },
        onBlur: (ie) => {
          Z.onBlur?.(ie), P();
        },
        "aria-disabled": Z["aria-disabled"],
        ...Z["aria-disabled"] === "true" && { tabIndex: -1 },
        id: de,
        style: K,
        title: ee,
        "aria-label": ue,
        "aria-describedby": C,
        "aria-labelledby": B,
        tabIndex: W,
        children: n
      }
    );
  }
  const {
    id: T,
    style: k,
    title: b,
    ["aria-label"]: L,
    ["aria-describedby"]: N,
    ["aria-labelledby"]: $,
    tabIndex: S,
    name: A,
    value: re,
    form: V,
    formAction: E,
    formEncType: H,
    formMethod: z,
    formNoValidate: ae,
    formTarget: O,
    autoFocus: pe,
    ...Se
  } = u, ce = u;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: ce.type || "button",
      disabled: ce.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...x,
      ...l && { "data-prevent-double-click": "true" },
      ...ce.disabled && { "aria-disabled": "true" },
      ...Se,
      onKeyDown: (de) => {
        ce.onKeyDown?.(de), j(de);
      },
      onClick: (de) => {
        ce.onClick?.(de), w(de);
      },
      onMouseDown: (de) => {
        ce.onMouseDown?.(de), D();
      },
      onMouseUp: (de) => {
        ce.onMouseUp?.(de), I();
      },
      onMouseEnter: (de) => {
        ce.onMouseEnter?.(de), _();
      },
      onMouseLeave: (de) => {
        ce.onMouseLeave?.(de), y();
      },
      onFocus: (de) => {
        ce.onFocus?.(de), M();
      },
      onBlur: (de) => {
        ce.onBlur?.(de), P();
      },
      id: T,
      style: k,
      title: b,
      "aria-label": L,
      "aria-describedby": N,
      "aria-labelledby": $,
      tabIndex: S,
      name: A,
      value: re,
      form: V,
      formAction: E,
      formEncType: H,
      formMethod: z,
      formNoValidate: ae,
      formTarget: O,
      autoFocus: pe,
      children: n
    }
  );
}
const ft = su(ou);
ft.displayName = "Button";
const qa = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = _e(
    "nhsuk-back-link",
    a
  ), u = _e(
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
      className: u,
      onClick: s,
      type: "button",
      ...i,
      children: c()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: u,
      href: n,
      ...i,
      children: c()
    }
  ) });
};
function iu(e) {
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
const We = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: u,
  ...c
}) => {
  const d = iu({ color: a, noBorder: o, closable: s, disabled: l, className: u }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: d.classes, ...c, children: [
    n || (t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    s && /* @__PURE__ */ r.jsx(
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
}, lu = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: u,
  children: c,
  onChange: d,
  onBlur: f,
  onFocus: h,
  attributes: g,
  ...v
}) => {
  const [m, p] = Ee(a), x = n !== void 0, D = x ? n : m;
  ze(() => {
    x || p(a);
  }, [a, x]);
  const I = (j) => {
    const w = j.target.checked;
    x || p(w), d?.(w, j);
  }, _ = i ? `${e}-hint` : void 0, y = l ? `${e}-error` : void 0, M = [_, y].filter(Boolean).join(" ") || void 0, P = _e(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    u
  );
  return /* @__PURE__ */ r.jsx("div", { className: P, ...v, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: D,
        disabled: o,
        onChange: I,
        onBlur: f,
        onFocus: h,
        "aria-describedby": M,
        ...g
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: _, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: y, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
lu.displayName = "Checkbox";
function _i(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Ms = ({
  id: e,
  name: t,
  type: n = "text",
  value: a,
  defaultValue: o,
  placeholder: s,
  disabled: i = !1,
  readOnly: l = !1,
  required: u = !1,
  hasError: c = !1,
  describedBy: d,
  className: f,
  width: h = "full",
  inputMode: g,
  autoComplete: v,
  maxLength: m,
  minLength: p,
  pattern: x,
  step: D,
  min: I,
  max: _,
  showValueLabels: y = !1,
  showCurrentValue: M = !1,
  valueLabels: P,
  onChange: j,
  onBlur: w,
  onFocus: T,
  onKeyDown: k,
  ...b
}) => {
  const [L, N] = Ee(a || o || (n === "range" ? I || "0" : ""));
  ze(() => {
    a !== void 0 && N(a);
  }, [a]);
  const $ = (O) => {
    const pe = O.target;
    N(pe.value), ("type" in O && O.nativeEvent || O.type === "keydown") && j?.(O);
  }, { classes: S, isRange: A } = _i({ type: n, hasError: c, width: h, className: f }), re = a !== void 0, V = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: u,
    "aria-describedby": d,
    inputMode: g,
    autoComplete: v,
    maxLength: m,
    minLength: p,
    pattern: x,
    step: D,
    min: I,
    max: _,
    onChange: $,
    onBlur: w,
    onFocus: T,
    onKeyDown: (O) => {
      if (A && /[0-9]/.test(O.key)) {
        const pe = (L?.toString() || "") + O.key;
        O.target.value = pe, $(O);
      }
      k?.(O);
    },
    ...b
  }, E = !re && o !== void 0 ? { defaultValue: o } : {}, H = re ? { value: a } : {}, z = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: S,
      ...H,
      ...E,
      "data-current-value": L,
      ...V
    }
  ), ae = A ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    y && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: P?.min || I || "0" }),
      z(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: P?.max || _ || "100" })
    ] }),
    !y && z(),
    M && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      P?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: L })
    ] }) })
  ] }) : null;
  return A ? ae : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: S,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: u,
      "aria-describedby": d,
      inputMode: g,
      autoComplete: v,
      maxLength: m,
      minLength: p,
      pattern: x,
      step: D,
      min: I,
      max: _,
      onChange: j,
      onBlur: w,
      onFocus: T,
      onKeyDown: k,
      ...b
    }
  );
};
function cu(e) {
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
const Ls = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = cu({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function uu(e) {
  const t = ["nhsuk-fieldset", e.className || ""].filter(Boolean).join(" "), n = e.legend ? [
    "nhsuk-fieldset__legend",
    e.legend.size ? `nhsuk-fieldset__legend--${e.legend.size}` : "",
    e.legend.className || ""
  ].filter(Boolean).join(" ") : void 0;
  return {
    fieldsetClasses: t,
    legendClasses: n,
    legendIsPageHeading: !!e.legend?.isPageHeading,
    describedBy: e.describedBy
  };
}
const Ps = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = uu({
    className: n,
    describedBy: a,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
    const l = t?.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return s.legendIsPageHeading ? /* @__PURE__ */ r.jsx("h1", { className: "nhsuk-fieldset__heading", children: l }) : l;
  };
  return /* @__PURE__ */ r.jsxs(
    "fieldset",
    {
      className: s.fieldsetClasses,
      "aria-describedby": s.describedBy,
      ...o,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ r.jsx("legend", { className: s.legendClasses, children: i() }),
        e
      ]
    }
  );
};
function du(e) {
  const t = [
    "nhsuk-checkboxes",
    e.small ? "nhsuk-checkboxes--small" : "",
    e.className || ""
  ].filter(Boolean).join(" "), n = [
    "nhsuk-form-group",
    e.hasError ? "nhsuk-form-group--error" : ""
  ].filter(Boolean).join(" ");
  return { classes: t, formGroupClasses: n };
}
const fu = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: a,
  isPageHeading: o = !1,
  legendSize: s = "l",
  hint: i,
  errorMessage: l,
  className: u = "",
  small: c = !1,
  onChange: d,
  fieldsetAttributes: f,
  attributes: h,
  ...g
}) => {
  const [v, m] = Ee(
    e.filter((j) => j.checked).map((j) => j.value)
  ), p = n || t, x = i ? `${p}-hint` : void 0, D = l ? `${p}-error` : void 0, I = [x, D].filter(Boolean).join(" ") || void 0, _ = (j, w) => {
    let T;
    w ? T = [...v, j] : T = v.filter((k) => k !== j), m(T), d?.(T);
  }, y = () => e.map((j, w) => {
    const T = `${p}-${w + 1}`, k = `${T}-conditional`, b = v.includes(j.value), L = j.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: T,
          name: t,
          type: "checkbox",
          value: j.value,
          checked: b,
          disabled: L,
          onChange: (N) => _(j.value, N.target.checked),
          "aria-describedby": j.hint ? `${T}-hint` : I,
          ...j.conditional && {
            "aria-controls": k,
            "aria-expanded": b ? "true" : "false"
          },
          ...j.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: T, children: j.text }),
      j.hint && /* @__PURE__ */ r.jsx("div", { id: `${T}-hint`, className: "nhsuk-checkboxes__hint", children: j.hint }),
      j.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: _e("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !b
          }),
          id: k,
          children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            j.conditional.label && /* @__PURE__ */ r.jsx(Ls, { htmlFor: j.conditional.id, children: j.conditional.label }),
            /* @__PURE__ */ r.jsx(Ms, { ...j.conditional })
          ] }) : j.conditional
        }
      )
    ] }, j.value);
  }), { classes: M, formGroupClasses: P } = du({ small: c, className: u, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: P, ...h, ...g, children: /* @__PURE__ */ r.jsxs(
    Ps,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: I,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: x, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: D, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: M, children: y() })
      ]
    }
  ) });
};
fu.displayName = "Checkboxes";
function pu(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const hu = ({
  id: e,
  name: t,
  value: n,
  defaultValue: a,
  placeholder: o,
  disabled: s = !1,
  readOnly: i = !1,
  required: l = !1,
  hasError: u = !1,
  describedBy: c,
  className: d,
  rows: f = 5,
  cols: h,
  maxLength: g,
  minLength: v,
  wrap: m = "soft",
  resize: p = "vertical",
  autoComplete: x,
  spellCheck: D,
  onChange: I,
  onBlur: _,
  onFocus: y,
  onKeyDown: M,
  ...P
}) => {
  const { classes: j, describedBy: w } = pu({ hasError: u, resize: p, className: d, describedBy: c });
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
      "aria-describedby": w,
      rows: f,
      cols: h,
      maxLength: g,
      minLength: v,
      wrap: m,
      autoComplete: x,
      spellCheck: D,
      onChange: I,
      onBlur: _,
      onFocus: y,
      onKeyDown: M,
      ...P
    }
  );
};
function mu(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const Si = ({ id: e, className: t, children: n, ...a }) => {
  const o = mu({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, qb = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: u,
  countMessage: c,
  onCountChange: d,
  onChange: f,
  ...h
}) => {
  const g = s ?? i ?? "", [v, m] = Ee(g), [p, x] = Ee(0), [D, I] = Ee(!1), [_, y] = Ee(!1), M = ye((b) => n ? b.trim() === "" ? 0 : b.trim().split(/\s+/).length : b.length, [n]);
  ze(() => {
    const b = M(v), L = t || n || 0, N = L - b, $ = Math.floor(L * (a / 100));
    x(N), I(b > L), y(b >= $ || b > L), d && d(b, N);
  }, [v, t, n, a, M, d]);
  const P = (b) => {
    const L = b.target.value;
    m(L), f && f(b);
  }, j = () => {
    const b = t || n || 0, L = n ? "word" : "character", N = n ? "words" : "characters";
    if (!_)
      return `You can enter up to ${b} ${b === 1 ? L : N}`;
    if (D) {
      const $ = Math.abs(p);
      return `You have ${$} ${$ === 1 ? L : N} too many`;
    } else
      return `You have ${p} ${p === 1 ? L : N} remaining`;
  }, w = _e(
    "nhsuk-character-count",
    u
  ), T = _e(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !_,
      "nhsuk-error-message": D
    },
    c?.classes
  ), k = _e(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": D
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: w,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          hu,
          {
            id: e,
            name: o,
            value: s !== void 0 ? v : void 0,
            defaultValue: s === void 0 ? i ?? v : void 0,
            rows: l,
            className: k,
            onChange: P,
            "aria-describedby": `${e}-info`,
            "aria-invalid": D || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          Si,
          {
            id: `${e}-info`,
            className: T,
            role: "status",
            "aria-live": "polite",
            children: j()
          }
        )
      ]
    }
  );
};
function gu(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const xu = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = _e(
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
}, bu = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: u,
  className: c,
  multiple: d = !1,
  size: f,
  autoComplete: h,
  options: g,
  children: v,
  onChange: m,
  onBlur: p,
  onFocus: x,
  ...D
}) => {
  const { classes: I } = gu({ hasError: l, className: c }), _ = () => g ? g.map((M, P) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: M.value,
      disabled: M.disabled,
      "data-initial-selected": M.selected || void 0,
      children: M.text
    },
    `${M.value}-${P}`
  )) : null, y = o === void 0 && a === void 0 && g ? g.find((M) => M.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: I,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : y,
      disabled: s,
      required: i,
      "aria-describedby": u,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: m,
      onBlur: p,
      onFocus: x,
      ...D,
      children: v || _()
    }
  );
}, br = bu;
br.Option = xu;
function vu(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function ki(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: u,
  InputComponent: c
}) {
  const {
    onChange: d,
    onBlur: f,
    onFocus: h,
    ...g
  } = e, {
    name: v,
    hasError: m = !1,
    describedBy: p,
    className: x,
    size: D = "normal",
    inline: I = !1,
    options: _,
    ...y
  } = g, { classes: M, describedBy: P } = vu({ hasError: m, size: D, inline: I, className: x, describedBy: p });
  return /* @__PURE__ */ r.jsx(Ps, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: M,
      ...y,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: _.map((j, w) => {
        const T = `${v}-${w}`, k = j.conditional ? `${T}-conditional` : void 0, b = n === j.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: T,
              name: v,
              type: "radio",
              value: j.value,
              disabled: j.disabled,
              ...t === "client" ? {
                checked: b,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (L) => {
                  L && u && (u.current[w] = L);
                }
              } : {
                defaultChecked: b,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": P
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: T, children: j.text }),
          j.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: j.hint }),
          j.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: _e("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !b
              }),
              id: k,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof j.conditional == "object" && j.conditional !== null && "label" in j.conditional && "id" in j.conditional && "name" in j.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                j.conditional.label && /* @__PURE__ */ r.jsx(
                  Ls,
                  {
                    htmlFor: j.conditional.id,
                    children: j.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  c,
                  {
                    ...j.conditional
                  }
                )
              ] }) : j.conditional
            }
          )
        ] }, j.value);
      })
    }
  ) });
}
const Xb = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Ee(e || t || ""), u = Be([]), c = Be(i), d = (g) => {
    const v = g.target.value;
    v !== c.current && (c.current = v, l(v), n?.(g));
  }, f = (g) => {
    o?.(g);
  }, h = ye((g) => {
    const { key: v } = g;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(v)) return;
    g.preventDefault();
    const m = u.current.filter((I) => I && !I.disabled), p = m.indexOf(g.currentTarget);
    if (p === -1) return;
    let x = p;
    ["ArrowDown", "ArrowRight"].includes(v) ? x = (p + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(v) && (x = (p - 1 + m.length) % m.length);
    const D = m[x];
    D && (D.focus(), D.checked || D.click());
  }, []);
  return ki(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: d,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: h,
      itemsRef: u,
      InputComponent: Ms
    }
  );
};
function yu(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: o,
    defaultValue: s,
    placeholder: i,
    disabled: l = !1,
    readOnly: u = !1,
    required: c = !1,
    hasError: d = !1,
    describedBy: f,
    className: h,
    width: g = "full",
    inputMode: v,
    autoComplete: m,
    maxLength: p,
    minLength: x,
    pattern: D,
    step: I,
    min: _,
    max: y,
    showValueLabels: M = !1,
    showCurrentValue: P = !1,
    valueLabels: j,
    // Strip interactive handlers in server variant
    onChange: w,
    onBlur: T,
    onFocus: k,
    onKeyDown: b,
    ...L
  } = e, { classes: N, isRange: $ } = _i({
    type: a,
    hasError: d,
    width: g,
    className: h
  }), S = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: u,
    required: c,
    "aria-describedby": f,
    inputMode: v,
    autoComplete: m,
    maxLength: p,
    minLength: x,
    pattern: D,
    step: I,
    min: _,
    max: y,
    ...L
  };
  if ($) {
    const A = o ?? s ?? (typeof _ < "u" ? String(_) : "0"), re = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: N,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": A,
        ...S
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      M ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: j?.min || _ || "0" }),
        re,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: j?.max || y || "100" })
      ] }) : re,
      P && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        j?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: A })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: N,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...S
    }
  );
}
const Kb = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return ki(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: yu
    }
  );
};
var pn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(pn || {}), wu = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(wu || {}), _u = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(_u || {}), Su = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Su || {});
const Ci = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = _e(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, hn = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const o = _e("nhsuk-grid-row", t);
  return /* @__PURE__ */ r.jsx("div", { className: o, style: n, ...a, children: e });
}, qn = ({
  children: e,
  width: t = pn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: u,
  align: c,
  ...d
}) => {
  const f = _e(
    {
      // Standard responsive grid columns
      [`nhsuk-grid-column-${t}`]: !l,
      // Utility classes that force width on all screen sizes
      [`nhsuk-u-${t}`]: l,
      // Responsive width overrides
      [`nhsuk-u-${n}-mobile`]: !!n,
      [`nhsuk-u-${a}-tablet`]: !!a,
      [`nhsuk-u-${o}-desktop`]: !!o,
      // Grid positioning
      [`nhsuk-grid-column-start-${s}`]: s && s >= 1 && s <= 7,
      // Alignment (robust string-based class to avoid enum identity issues)
      ...c ? { [`nhsuk-grid-align-${c}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: u, ...d, children: e });
}, Xa = ({
  children: e,
  className: t,
  style: n,
  ...a
}) => {
  const s = xt.Children.toArray(e)[0], i = xt.isValidElement(s) && (s.type === hn || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ r.jsx(Ci, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(hn, { children: e }) });
}, ku = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const u = i || (t === "number" ? "ol" : "ul"), c = _e(
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
  return /* @__PURE__ */ r.jsx(u, { className: c, role: s, ...l, children: e });
}, Cu = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = _e("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Nu = ku;
Nu.Item = Cu;
const Jb = ({
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
}, Zb = {
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
}, Qb = ({
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
}, ev = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, tv = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ni = ({
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
function ju(e) {
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
function Du(e) {
  const t = e.level ?? ju(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Yt = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const u = Du({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return gi(u.tag, { className: u.classes, style: u.style, ...l }, c);
};
function Tu(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const io = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = Tu({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, nv = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const u = Be(null);
  ze(() => {
    u.current && u.current.focus();
  }, []);
  const c = _e(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (g) => {
    const v = g.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
    return g.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: g.href,
        ...g.attributes,
        children: v
      }
    ) : v;
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: u,
      className: c,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: d() }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (n || a) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((g, v) => /* @__PURE__ */ r.jsx("li", { children: h(g) }, v)) })
        ] })
      ]
    }
  );
}, rv = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: u,
  ...c
}) => {
  const [d, f] = Ee(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, g] = Ee({}), v = ($) => $ % 4 === 0 && $ % 100 !== 0 || $ % 400 === 0, m = ($, S) => {
    const A = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return $ === 2 && v(S) ? 29 : A[$ - 1];
  }, p = ($, S, A) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Day must be a number";
    const re = parseInt($, 10);
    if (re < 1 || re > 31) return "Day must be between 1 and 31";
    if (S && A) {
      const V = parseInt(S, 10), E = parseInt(A, 10);
      if (!isNaN(V) && !isNaN(E) && V >= 1 && V <= 12) {
        const H = m(V, E);
        if (re > H)
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
          ][V - 1]} ${E} only has ${H} days`;
      }
    }
  }, x = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Month must be a number";
    const S = parseInt($, 10);
    if (S < 1 || S > 12) return "Month must be between 1 and 12";
  }, D = ($) => {
    if (!$) return;
    if (!/^\d+$/.test($)) return "Year must be a number";
    const S = parseInt($, 10), A = (/* @__PURE__ */ new Date()).getFullYear();
    if (S < 1900 || S > A + 10)
      return `Year must be between 1900 and ${A + 10}`;
  }, I = ($, S, A) => {
    if (!$ || !S || !A) return;
    const re = parseInt($, 10), V = parseInt(S, 10), E = parseInt(A, 10);
    if (isNaN(re) || isNaN(V) || isNaN(E) || V < 1 || V > 12 || E < 1900) return;
    const H = m(V, E);
    re < 1 || re > H;
  }, _ = ye(($, S) => {
    const A = {
      ...d,
      [$]: S
    };
    f(A), u && u(A);
  }, [d, u]), y = ye(($) => {
    const S = d[$];
    let A;
    if ($ === "day")
      A = p(S, d.month, d.year);
    else if ($ === "month") {
      if (A = x(S), !A && d.day) {
        const re = p(d.day, S, d.year);
        g((V) => ({
          ...V,
          day: re
        }));
      }
    } else if ($ === "year" && (A = D(S), !A && d.day && d.month)) {
      const re = p(d.day, d.month, S);
      g((V) => ({
        ...V,
        day: re
      }));
    }
    if (g((re) => ({
      ...re,
      [$]: A
    })), d.day && d.month && d.year) {
      const re = I(
        $ === "day" ? S : d.day,
        $ === "month" ? S : d.month,
        $ === "year" ? S : d.year
      );
      re && g((V) => ({
        ...V,
        day: re
      }));
    }
  }, [d, p, x, D, I]), M = Me(() => [
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
  ], []), P = n || M;
  let j = s?.describedBy || "";
  const w = i ? `${e}-hint` : "", T = l ? `${e}-error` : "";
  w && (j = j ? `${j} ${w}` : w), T && (j = j ? `${j} ${T}` : T);
  const k = Object.values(h).some(($) => $), b = _e(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || k
    }
  ), L = _e(
    "nhsuk-date-input",
    t
  ), N = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      Si,
      {
        id: w,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ r.jsx(
      io,
      {
        id: T,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(h).map(
      ([$, S]) => S ? /* @__PURE__ */ r.jsxs(
        io,
        {
          id: `${e}-${$}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            S
          ]
        },
        `${$}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: L, id: e, "data-testid": "date-input", ...c, children: P.map(($) => {
      const S = $.id || `${e}-${$.name}`, A = a ? `${a}[${$.name}]` : $.name, re = $.label || $.name.charAt(0).toUpperCase() + $.name.slice(1), V = h[$.name], E = d[$.name] || "";
      let H = j;
      if (V) {
        const z = `${e}-${$.name}-error`;
        H = H ? `${H} ${z}` : z;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          Ls,
          {
            htmlFor: S,
            className: "nhsuk-date-input__label",
            children: re
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ms,
          {
            id: S,
            name: A,
            value: E,
            className: _e("nhsuk-date-input__input", $.classes, {
              "nhsuk-input--error": V
            }),
            inputMode: $.inputmode,
            autoComplete: $.autocomplete,
            pattern: $.pattern,
            "aria-describedby": H || void 0,
            hasError: !!V,
            onChange: (z) => _($.name, z.target.value),
            onBlur: () => y($.name)
          }
        )
      ] }, $.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: b, children: s ? /* @__PURE__ */ r.jsx(
    Ps,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: j || void 0,
      children: N()
    }
  ) : N() });
}, ji = {
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
}, Di = Xc(ji), $u = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...ji, ...t };
  return /* @__PURE__ */ r.jsx(Di.Provider, { value: n, children: e });
}, av = () => {
  const e = qc(Di);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Iu() {
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
function Mu() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Iu(), document.head.appendChild(e);
}
const sv = ({ children: e, theme: t }) => (ze(() => {
  Mu();
}, []), /* @__PURE__ */ r.jsx($u, { theme: t, children: e }));
function Lu(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: u,
  navListRef: c,
  searchNode: d
}) {
  const {
    className: f,
    logo: h = {},
    service: g = {},
    serviceName: v,
    organisation: m,
    search: p,
    account: x,
    navigation: D,
    containerClasses: I,
    variant: _ = "default",
    attributes: y = {},
    maxVisibleItems: M,
    // deprecated (ignored)
    responsiveNavigation: P = !0,
    ...j
  } = e, w = {
    ...g,
    text: g?.text ?? v
  };
  "maxVisibleItems" in j && delete j.maxVisibleItems;
  const T = w.href && !h.href || w.href && w.href === h.href, k = T ? w.href : h.href, b = _e(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": _ === "organisation" || m,
      "nhsuk-header--white": _ === "white"
    },
    f
  ), L = _e(
    "nhsuk-header__container",
    I
  ), N = _e(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": D?.white,
      "nhsuk-header__navigation--justified": D?.justified
    },
    D?.className
  ), $ = () => /* @__PURE__ */ r.jsxs(
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
  ), S = () => h.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: h.src,
      width: "280",
      alt: h.ariaLabel || "NHS"
    }
  ) : $(), A = () => m ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      m.name,
      m.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        m.split
      ] })
    ] }),
    m.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: m.descriptor })
  ] }) : null, re = (H, z) => H ? z ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: z, children: H }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: H }) : null, V = (H) => H.active || H.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: H.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text }) : H.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: H.html } }) : H.text, E = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  );
  return D?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: b,
      role: "banner",
      "data-module": "nhsuk-header",
      ...y,
      ...j,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: L, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            k ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
              S(),
              A(),
              T && re(w.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              S(),
              A(),
              T && re(w.text)
            ] }),
            w.text && !T && re(w.text, w.href)
          ] }),
          d ?? null,
          /* @__PURE__ */ r.jsx(
            vi,
            {
              ...x,
              variant: _ === "white" ? "white" : "default"
            }
          )
        ] }),
        D && D.items && D.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: N,
            "aria-label": D.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: _e(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  I
                ),
                ref: u,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: c,
                    children: [
                      (D?.items || []).map((H, z) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: _e(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": H.active || H.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && z >= (s ?? 0)
                            },
                            H.className
                          ),
                          ...H.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: H.href,
                              ...H.active || H.current ? { "aria-current": H.current ? "page" : "true" } : {},
                              children: V(H)
                            }
                          )
                        },
                        z
                      )),
                      o && s !== void 0 && /* @__PURE__ */ r.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ r.jsxs(
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
        n && D && D.items && D.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: D.items.slice(s ?? 0).map((H, z) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: _e("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": H.active || H.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: H.href,
                    ...H.active || H.current ? { "aria-current": H.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: V(H)
                  }
                )
              },
              `overflow-${(s ?? 0) + z}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const Pu = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
  name: a = "q",
  value: o,
  placeholder: s = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: u,
  disabled: c = !1,
  callbacks: d = {},
  isLoading: f = !1,
  showResults: h = !1,
  results: g = [],
  formAttributes: v = {},
  inputAttributes: m = {},
  buttonAttributes: p = {},
  preventDefaultSubmit: x = !1,
  debounceMs: D = 300,
  minQueryLength: I = 1
}) => {
  const [_, y] = Ee(""), [M, P] = Ee(!1), j = Be(void 0), w = Be(null), T = Be(null), k = e === "controlled" && o !== void 0, b = k ? o : _, L = ye((ae) => {
    j.current && clearTimeout(j.current), j.current = setTimeout(() => {
      d.onChange && ae.length >= I && d.onChange(ae);
    }, D);
  }, [d.onChange, D, I]), N = ye((ae) => {
    const O = ae.target.value;
    k || y(O), e !== "form" && L(O);
  }, [k, e, L]), $ = ye((ae) => {
    const O = b.trim(), pe = {
      query: O,
      timestamp: Date.now(),
      formData: new FormData(ae.currentTarget)
    };
    e === "controlled" || e === "hybrid" && x ? (ae.preventDefault(), d.onSearch && O.length >= I && d.onSearch(pe)) : e === "hybrid" && d.onSearch && O.length >= I && d.onSearch(pe);
  }, [e, b, d.onSearch, x, I]), S = ye(() => {
    P(!0), d.onFocus?.();
  }, [d.onFocus]), A = ye(() => {
    P(!1), d.onBlur?.();
  }, [d.onBlur]), re = ye(() => {
    k || y(""), d.onClear?.(), T.current?.focus();
  }, [k, d.onClear]);
  ze(() => () => {
    j.current && clearTimeout(j.current);
  }, []);
  const V = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: _e("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), E = () => /* @__PURE__ */ r.jsx(
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
  ), H = () => !b || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: re,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), z = () => !h || !g.length || !M ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((ae) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: ae.href ? /* @__PURE__ */ r.jsxs("a", { href: ae.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: ae.title }),
    ae.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: ae.description })
  ] }) : /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: ae.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: ae.title }),
        ae.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: ae.description })
      ]
    }
  ) }, ae.id)) });
  return /* @__PURE__ */ r.jsxs("div", { className: _e("nhsuk-header__search", u, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": M,
    "nhsuk-header__search--has-results": h && g.length > 0
  }), children: [
    /* @__PURE__ */ r.jsxs(
      "form",
      {
        ref: w,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? n : void 0,
        role: "search",
        onSubmit: $,
        ...v,
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
                ref: T,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: b,
                onChange: N,
                onFocus: S,
                onBlur: A,
                disabled: c || f,
                ...h && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...m
              }
            ),
            H()
          ] }),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && b.length < I,
              ...p,
              children: [
                f ? E() : V(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    z()
  ] });
}, Ti = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: u = "default",
  attributes: c = {},
  ...d
}) => {
  const [f, h] = Ee(!1), [g, v] = Ee(!1), [m, p] = Ee(i?.items?.length || 0), [x, D] = Ee(!1), [I, _] = Ee(!1), y = Be(null), M = Be(null), P = Be(!1);
  ze(() => {
    typeof window > "u" || _(!0);
  }, []), ze(() => {
    if (typeof document > "u") return;
    const k = (b) => {
      b.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [f]);
  const j = Be(null), w = ye(() => {
    if (!I || !i?.items || i.items.length === 0 || P.current) return;
    const k = y.current, b = M.current;
    if (!k || !b) return;
    P.current = !0, k.classList.add("nhsuk-header__navigation-container--measuring");
    const L = k.clientWidth, N = Array.from(b.children);
    if (!N.length) {
      k.classList.remove("nhsuk-header__navigation-container--measuring"), P.current = !1;
      return;
    }
    if (j.current == null) {
      const O = document.createElement("button");
      O.type = "button", O.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", O.style.position = "absolute", O.style.visibility = "hidden", O.style.pointerEvents = "none", O.innerHTML = "<span>More</span>", k.appendChild(O), j.current = O.getBoundingClientRect().width || 104, k.removeChild(O);
    }
    const $ = j.current + 16;
    let S = 0, A = 0;
    const re = window.getComputedStyle(k), V = parseFloat(re.paddingLeft) || 0, E = parseFloat(re.paddingRight) || 0;
    let H = V + E;
    for (const O of N) {
      const pe = O.getBoundingClientRect().width;
      if (S + pe + $ + H > L) break;
      S += pe, A += 1;
    }
    const z = A < i.items.length, ae = z ? A : i.items.length;
    v((O) => O === z ? O : z), p((O) => O === ae ? O : ae), k.classList.remove("nhsuk-header__navigation-container--measuring"), P.current = !1;
  }, [I, i?.items]);
  ze(() => {
    if (!I) return;
    const k = y.current;
    if (!k) return;
    let b = null;
    const L = () => {
      b == null && (b = window.requestAnimationFrame(() => {
        b = null, w();
      }));
    };
    w();
    const N = new ResizeObserver(() => L());
    return N.observe(k), M.current && N.observe(M.current), () => {
      b != null && window.cancelAnimationFrame(b), N.disconnect();
    };
  }, [I, w]), ze(() => {
    I && w();
  }, [i?.items?.length, I, w]);
  const T = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const b = !f;
    h(b), D(b);
  };
  return Lu(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: o,
      account: s,
      navigation: i,
      containerClasses: l,
      variant: u,
      attributes: c,
      ...d
    },
    {
      variant: "client",
      isClient: I,
      menuOpen: f,
      showMoreButton: g,
      visibleItems: m,
      dropdownVisible: x,
      toggleMenu: T,
      navContainerRef: y,
      navListRef: M,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(Pu, { ...o }) : null
    }
  );
};
function Fu(e, { variant: t, isClient: n }) {
  const {
    className: a,
    logo: o = {},
    service: s = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: u,
    navigation: c,
    containerClasses: d,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: g,
    // deprecated (ignored)
    responsiveNavigation: v = !0,
    ...m
  } = e;
  "maxVisibleItems" in m && delete m.maxVisibleItems;
  const p = {
    ...s,
    text: s?.text ?? i
  }, x = p.href && !o.href || p.href && p.href === o.href, D = x ? p.href : o.href, I = _e(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), _ = _e("nhsuk-header__container", d), y = _e(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": c?.white,
      "nhsuk-header__navigation--justified": c?.justified
    },
    c?.className
  ), M = () => /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": o.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: o.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), P = () => o.src ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: o.src,
      width: "280",
      alt: o.ariaLabel || "NHS"
    }
  ) : M(), j = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, w = (N, $) => N ? $ ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: $, children: N }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: N }) : null, T = (N) => N.active || N.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: N.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text }) : N.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: N.html } }) : N.text, k = c?.items && !v, b = k ? [] : c?.items, L = k ? c.items : [];
  return /* @__PURE__ */ r.jsxs("header", { className: I, role: "banner", "data-module": "nhsuk-header", ...h, ...m, children: [
    /* @__PURE__ */ r.jsxs("div", { className: _, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
        D ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: D, children: [
          P(),
          j(),
          x && w(p.text)
        ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          P(),
          j(),
          x && w(p.text)
        ] }),
        p.text && !x && w(p.text, p.href)
      ] }),
      /* @__PURE__ */ r.jsx(vi, { ...u, variant: f === "white" ? "white" : "default" })
    ] }),
    c && c.items && c.items.length > 0 && /* @__PURE__ */ r.jsx("nav", { className: y, "aria-label": c.ariaLabel || "Menu", children: /* @__PURE__ */ r.jsx(
      "div",
      {
        className: _e(
          "nhsuk-header_navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--ssr": !n
          },
          d
        ),
        children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: (b || []).map((N, $) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: _e("nhsuk-header__navigation-item", {
              "nhsuk-header__navigation-item--current": N.active || N.current
            }, N.className),
            ...N.attributes || {},
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__navigation-link",
                href: N.href,
                ...N.active || N.current ? { "aria-current": N.current ? "page" : "true" } : {},
                children: T(N)
              }
            )
          },
          $
        )) })
      }
    ) }),
    k && L.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: L.map((N, $) => /* @__PURE__ */ r.jsx(
      "li",
      {
        className: _e("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": N.active || N.current
        }),
        children: /* @__PURE__ */ r.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: N.href,
            ...N.active || N.current ? { "aria-current": N.current ? "page" : "true" } : {},
            children: T(N)
          }
        )
      },
      `overflow-server-${$}`
    )) }) })
  ] });
}
const ov = (e) => Fu(e, {
  variant: "server",
  isClient: !1
}), Au = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
  text: a,
  html: o,
  imageURL: s,
  containerClasses: i = "",
  classes: l = "",
  children: u,
  ...c
}) => {
  const d = [
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
    n,
    !u && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), g = u || e || a || o, v = () => {
    if (!e) return null;
    const m = { className: h };
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
      className: d,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: g && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          v(),
          u || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && g && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          v(),
          u || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Au.displayName = "Hero";
const $i = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: u,
  footerStyle: c,
  containerStyle: d
}) => {
  const f = (g, v = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: _e("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": v
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
  ), h = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...u }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: _e("nhsuk-width-container", i),
        style: d,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: _e("nhsuk-footer", e), style: c, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((g) => f(g)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((g) => f(g)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((g) => f(g)) }),
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((g) => f(g)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((g) => f(g, !0)),
              (n || []).map((g) => f(g, !0)),
              (a || []).map((g) => f(g, !0)),
              (o || []).map((g) => f(g, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function hr(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ru(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fs(e) {
  let t, n, a;
  e.length !== 2 ? (t = hr, n = (l, u) => hr(e(l), u), a = (l, u) => e(l) - u) : (t = e === hr || e === Ru ? e : Eu, n = e, a = e);
  function o(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(l[f], u) < 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function s(l, u, c = 0, d = l.length) {
    if (c < d) {
      if (t(u, u) !== 0) return d;
      do {
        const f = c + d >>> 1;
        n(l[f], u) <= 0 ? c = f + 1 : d = f;
      } while (c < d);
    }
    return c;
  }
  function i(l, u, c = 0, d = l.length) {
    const f = o(l, u, c, d - 1);
    return f > c && a(l[f - 1], u) > -a(l[f], u) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function Eu() {
  return 0;
}
function Bu(e) {
  return e === null ? NaN : +e;
}
const Hu = Fs(hr), Ou = Hu.right;
Fs(Bu).center;
function Ii(e, t) {
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
class lo extends Map {
  constructor(t, n = zu) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(co(this, t));
  }
  has(t) {
    return super.has(co(this, t));
  }
  set(t, n) {
    return super.set(Uu(this, t), n);
  }
  delete(t) {
    return super.delete(Wu(this, t));
  }
}
function co({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function Uu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Wu({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function zu(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Vu = Math.sqrt(50), Gu = Math.sqrt(10), Yu = Math.sqrt(2);
function vr(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Vu ? 10 : s >= Gu ? 5 : s >= Yu ? 2 : 1;
  let l, u, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), u = Math.round(t * c), l / c < e && ++l, u / c > t && --u, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), u = Math.round(t / c), l * c < e && ++l, u * c > t && --u), u < l && 0.5 <= n && n < 2 ? vr(e, t, n * 2) : [l, u, c];
}
function qu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? vr(t, e, n) : vr(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, u = new Array(l);
  if (a)
    if (i < 0) for (let c = 0; c < l; ++c) u[c] = (s - c) / -i;
    else for (let c = 0; c < l; ++c) u[c] = (s - c) * i;
  else if (i < 0) for (let c = 0; c < l; ++c) u[c] = (o + c) / -i;
  else for (let c = 0; c < l; ++c) u[c] = (o + c) * i;
  return u;
}
function Ka(e, t, n) {
  return t = +t, e = +e, n = +n, vr(e, t, n)[2];
}
function Ja(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? Ka(t, e, n) : Ka(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Xu(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function la(e, t) {
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
const uo = Symbol("implicit");
function Mi() {
  var e = new lo(), t = [], n = [], a = uo;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== uo) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new lo();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return Mi(t, n).unknown(a);
  }, la.apply(o, arguments), o;
}
function Li() {
  var e = Mi().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, u = 0, c = 0, d = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, g = o < a, v = g ? o : a, m = g ? a : o;
    s = (m - v) / Math.max(1, h - u + c * 2), l && (s = Math.floor(s)), v += (m - v - s * (h - u)) * d, i = s * (1 - u), l && (v = Math.round(v), i = Math.round(i));
    var p = Xu(h).map(function(x) {
      return v + s * x;
    });
    return n(g ? p.reverse() : p);
  }
  return e.domain = function(h) {
    return arguments.length ? (t(h), f()) : t();
  }, e.range = function(h) {
    return arguments.length ? ([a, o] = h, a = +a, o = +o, f()) : [a, o];
  }, e.rangeRound = function(h) {
    return [a, o] = h, a = +a, o = +o, l = !0, f();
  }, e.bandwidth = function() {
    return i;
  }, e.step = function() {
    return s;
  }, e.round = function(h) {
    return arguments.length ? (l = !!h, f()) : l;
  }, e.padding = function(h) {
    return arguments.length ? (u = Math.min(1, c = +h), f()) : u;
  }, e.paddingInner = function(h) {
    return arguments.length ? (u = Math.min(1, h), f()) : u;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (c = +h, f()) : c;
  }, e.align = function(h) {
    return arguments.length ? (d = Math.max(0, Math.min(1, h)), f()) : d;
  }, e.copy = function() {
    return Li(t(), [a, o]).round(l).paddingInner(u).paddingOuter(c).align(d);
  }, la.apply(f(), arguments);
}
function As(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Pi(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function rr() {
}
var Xn = 0.7, yr = 1 / Xn, $n = "\\s*([+-]?\\d+)\\s*", Kn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ku = /^#([0-9a-f]{3,8})$/, Ju = new RegExp(`^rgb\\(${$n},${$n},${$n}\\)$`), Zu = new RegExp(`^rgb\\(${Tt},${Tt},${Tt}\\)$`), Qu = new RegExp(`^rgba\\(${$n},${$n},${$n},${Kn}\\)$`), ed = new RegExp(`^rgba\\(${Tt},${Tt},${Tt},${Kn}\\)$`), td = new RegExp(`^hsl\\(${Kn},${Tt},${Tt}\\)$`), nd = new RegExp(`^hsla\\(${Kn},${Tt},${Tt},${Kn}\\)$`), fo = {
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
As(rr, Jn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: po,
  // Deprecated! Use color.formatHex.
  formatHex: po,
  formatHex8: rd,
  formatHsl: ad,
  formatRgb: ho,
  toString: ho
});
function po() {
  return this.rgb().formatHex();
}
function rd() {
  return this.rgb().formatHex8();
}
function ad() {
  return Fi(this).formatHsl();
}
function ho() {
  return this.rgb().formatRgb();
}
function Jn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Ku.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? mo(t) : n === 3 ? new bt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ur(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ur(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Ju.exec(e)) ? new bt(t[1], t[2], t[3], 1) : (t = Zu.exec(e)) ? new bt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Qu.exec(e)) ? ur(t[1], t[2], t[3], t[4]) : (t = ed.exec(e)) ? ur(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = td.exec(e)) ? bo(t[1], t[2] / 100, t[3] / 100, 1) : (t = nd.exec(e)) ? bo(t[1], t[2] / 100, t[3] / 100, t[4]) : fo.hasOwnProperty(e) ? mo(fo[e]) : e === "transparent" ? new bt(NaN, NaN, NaN, 0) : null;
}
function mo(e) {
  return new bt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ur(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new bt(e, t, n, a);
}
function sd(e) {
  return e instanceof rr || (e = Jn(e)), e ? (e = e.rgb(), new bt(e.r, e.g, e.b, e.opacity)) : new bt();
}
function Za(e, t, n, a) {
  return arguments.length === 1 ? sd(e) : new bt(e, t, n, a ?? 1);
}
function bt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
As(bt, Za, Pi(rr, {
  brighter(e) {
    return e = e == null ? yr : Math.pow(yr, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new bt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new bt(un(this.r), un(this.g), un(this.b), wr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: go,
  // Deprecated! Use color.formatHex.
  formatHex: go,
  formatHex8: od,
  formatRgb: xo,
  toString: xo
}));
function go() {
  return `#${cn(this.r)}${cn(this.g)}${cn(this.b)}`;
}
function od() {
  return `#${cn(this.r)}${cn(this.g)}${cn(this.b)}${cn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function xo() {
  const e = wr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${un(this.r)}, ${un(this.g)}, ${un(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function wr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function un(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function cn(e) {
  return e = un(e), (e < 16 ? "0" : "") + e.toString(16);
}
function bo(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new St(e, t, n, a);
}
function Fi(e) {
  if (e instanceof St) return new St(e.h, e.s, e.l, e.opacity);
  if (e instanceof rr || (e = Jn(e)), !e) return new St();
  if (e instanceof St) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, u = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= u < 0.5 ? s + o : 2 - s - o, i *= 60) : l = u > 0 && u < 1 ? 0 : i, new St(i, l, u, e.opacity);
}
function id(e, t, n, a) {
  return arguments.length === 1 ? Fi(e) : new St(e, t, n, a ?? 1);
}
function St(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
As(St, id, Pi(rr, {
  brighter(e) {
    return e = e == null ? yr : Math.pow(yr, e), new St(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Xn : Math.pow(Xn, e), new St(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new bt(
      $a(e >= 240 ? e - 240 : e + 120, o, a),
      $a(e, o, a),
      $a(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new St(vo(this.h), dr(this.s), dr(this.l), wr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = wr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${vo(this.h)}, ${dr(this.s) * 100}%, ${dr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function vo(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function dr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function $a(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Rs = (e) => () => e;
function ld(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function cd(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function ud(e) {
  return (e = +e) == 1 ? Ai : function(t, n) {
    return n - t ? cd(t, n, e) : Rs(isNaN(t) ? n : t);
  };
}
function Ai(e, t) {
  var n = t - e;
  return n ? ld(e, n) : Rs(isNaN(e) ? t : e);
}
const yo = (function e(t) {
  var n = ud(t);
  function a(o, s) {
    var i = n((o = Za(o)).r, (s = Za(s)).r), l = n(o.g, s.g), u = n(o.b, s.b), c = Ai(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = u(d), o.opacity = c(d), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function dd(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function fd(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function pd(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = Es(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function hd(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function _r(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function md(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = Es(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var Qa = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ia = new RegExp(Qa.source, "g");
function gd(e) {
  return function() {
    return e;
  };
}
function xd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function bd(e, t) {
  var n = Qa.lastIndex = Ia.lastIndex = 0, a, o, s, i = -1, l = [], u = [];
  for (e = e + "", t = t + ""; (a = Qa.exec(e)) && (o = Ia.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, u.push({ i, x: _r(a, o) })), n = Ia.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? u[0] ? xd(u[0].x) : gd(t) : (t = u.length, function(c) {
    for (var d = 0, f; d < t; ++d) l[(f = u[d]).i] = f.x(c);
    return l.join("");
  });
}
function Es(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Rs(t) : (n === "number" ? _r : n === "string" ? (a = Jn(t)) ? (t = a, yo) : bd : t instanceof Jn ? yo : t instanceof Date ? hd : fd(t) ? dd : Array.isArray(t) ? pd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? md : _r)(e, t);
}
function vd(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function yd(e) {
  return function() {
    return e;
  };
}
function wd(e) {
  return +e;
}
var wo = [0, 1];
function Nn(e) {
  return e;
}
function es(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : yd(isNaN(t) ? NaN : 0.5);
}
function _d(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Sd(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = es(o, a), s = n(i, s)) : (a = es(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function kd(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = es(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var u = Ou(e, l, 1, a) - 1;
    return s[u](o[u](l));
  };
}
function Ri(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Cd() {
  var e = wo, t = wo, n = Es, a, o, s, i = Nn, l, u, c;
  function d() {
    var h = Math.min(e.length, t.length);
    return i !== Nn && (i = _d(e[0], e[h - 1])), l = h > 2 ? kd : Sd, u = c = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (u || (u = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((c || (c = l(t, e.map(a), _r)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, wd), d()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), d()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = vd, d();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Nn, d()) : i !== Nn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, d()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, g) {
    return a = h, o = g, d();
  };
}
function Ei() {
  return Cd()(Nn, Nn);
}
function Nd(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Sr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Fn(e) {
  return e = Sr(Math.abs(e)), e ? e[1] : NaN;
}
function jd(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], u = 0; o > 0 && l > 0 && (u + l + 1 > a && (l = Math.max(1, a - u)), s.push(n.substring(o -= l, o + l)), !((u += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function Dd(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var Td = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function kr(e) {
  if (!(t = Td.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Bs({
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
kr.prototype = Bs.prototype;
function Bs(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Bs.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function $d(e) {
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
var Bi;
function Id(e, t) {
  var n = Sr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (Bi = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Sr(e, Math.max(0, t + s - 1))[0];
}
function _o(e, t) {
  var n = Sr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const So = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: Nd,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => _o(e * 100, t),
  r: _o,
  s: Id,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ko(e) {
  return e;
}
var Co = Array.prototype.map, No = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Md(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ko : jd(Co.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? ko : Dd(Co.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", u = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(f) {
    f = kr(f);
    var h = f.fill, g = f.align, v = f.sign, m = f.symbol, p = f.zero, x = f.width, D = f.comma, I = f.precision, _ = f.trim, y = f.type;
    y === "n" ? (D = !0, y = "g") : So[y] || (I === void 0 && (I = 12), _ = !0, y = "g"), (p || h === "0" && g === "=") && (p = !0, h = "0", g = "=");
    var M = m === "$" ? n : m === "#" && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "", P = m === "$" ? a : /[%p]/.test(y) ? i : "", j = So[y], w = /[defgprs%]/.test(y);
    I = I === void 0 ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function T(k) {
      var b = M, L = P, N, $, S;
      if (y === "c")
        L = j(k) + L, k = "";
      else {
        k = +k;
        var A = k < 0 || 1 / k < 0;
        if (k = isNaN(k) ? u : j(Math.abs(k), I), _ && (k = $d(k)), A && +k == 0 && v !== "+" && (A = !1), b = (A ? v === "(" ? v : l : v === "-" || v === "(" ? "" : v) + b, L = (y === "s" ? No[8 + Bi / 3] : "") + L + (A && v === "(" ? ")" : ""), w) {
          for (N = -1, $ = k.length; ++N < $; )
            if (S = k.charCodeAt(N), 48 > S || S > 57) {
              L = (S === 46 ? o + k.slice(N + 1) : k.slice(N)) + L, k = k.slice(0, N);
              break;
            }
        }
      }
      D && !p && (k = t(k, 1 / 0));
      var re = b.length + k.length + L.length, V = re < x ? new Array(x - re + 1).join(h) : "";
      switch (D && p && (k = t(V + k, V.length ? x - L.length : 1 / 0), V = ""), g) {
        case "<":
          k = b + k + L + V;
          break;
        case "=":
          k = b + V + k + L;
          break;
        case "^":
          k = V.slice(0, re = V.length >> 1) + b + k + L + V.slice(re);
          break;
        default:
          k = V + b + k + L;
          break;
      }
      return s(k);
    }
    return T.toString = function() {
      return f + "";
    }, T;
  }
  function d(f, h) {
    var g = c((f = kr(f), f.type = "f", f)), v = Math.max(-8, Math.min(8, Math.floor(Fn(h) / 3))) * 3, m = Math.pow(10, -v), p = No[8 + v / 3];
    return function(x) {
      return g(m * x) + p;
    };
  }
  return {
    format: c,
    formatPrefix: d
  };
}
var fr, Hi, Oi;
Ld({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Ld(e) {
  return fr = Md(e), Hi = fr.format, Oi = fr.formatPrefix, fr;
}
function Pd(e) {
  return Math.max(0, -Fn(Math.abs(e)));
}
function Fd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Fn(t) / 3))) * 3 - Fn(Math.abs(e)));
}
function Ad(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Fn(t) - Fn(e)) + 1;
}
function Rd(e, t, n, a) {
  var o = Ja(e, t, n), s;
  switch (a = kr(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = Fd(o, i)) && (a.precision = s), Oi(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = Ad(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = Pd(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return Hi(a);
}
function Ed(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return qu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return Rd(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], u, c, d = 10;
    for (l < i && (c = i, i = l, l = c, c = o, o = s, s = c); d-- > 0; ) {
      if (c = Ka(i, l, n), c === u)
        return a[o] = i, a[s] = l, t(a);
      if (c > 0)
        i = Math.floor(i / c) * c, l = Math.ceil(l / c) * c;
      else if (c < 0)
        i = Math.ceil(i * c) / c, l = Math.floor(l * c) / c;
      else
        break;
      u = c;
    }
    return e;
  }, e;
}
function Cr() {
  var e = Ei();
  return e.copy = function() {
    return Ri(e, Cr());
  }, la.apply(e, arguments), Ed(e);
}
function Bd(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Ma = /* @__PURE__ */ new Date(), La = /* @__PURE__ */ new Date();
function st(e, t, n, a) {
  function o(s) {
    return e(s = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+s)), s;
  }
  return o.floor = (s) => (e(s = /* @__PURE__ */ new Date(+s)), s), o.ceil = (s) => (e(s = new Date(s - 1)), t(s, 1), e(s), s), o.round = (s) => {
    const i = o(s), l = o.ceil(s);
    return s - i < l - s ? i : l;
  }, o.offset = (s, i) => (t(s = /* @__PURE__ */ new Date(+s), i == null ? 1 : Math.floor(i)), s), o.range = (s, i, l) => {
    const u = [];
    if (s = o.ceil(s), l = l == null ? 1 : Math.floor(l), !(s < i) || !(l > 0)) return u;
    let c;
    do
      u.push(c = /* @__PURE__ */ new Date(+s)), t(s, l), e(s);
    while (c < s && s < i);
    return u;
  }, o.filter = (s) => st((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), n && (o.count = (s, i) => (Ma.setTime(+s), La.setTime(+i), e(Ma), e(La), Math.floor(n(Ma, La))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Nr = st(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Nr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? st((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : Nr);
Nr.range;
const Vt = 1e3, yt = Vt * 60, Gt = yt * 60, qt = Gt * 24, Hs = qt * 7, jo = qt * 30, Pa = qt * 365, jn = st((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Vt);
}, (e, t) => (t - e) / Vt, (e) => e.getUTCSeconds());
jn.range;
const Os = st((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Vt);
}, (e, t) => {
  e.setTime(+e + t * yt);
}, (e, t) => (t - e) / yt, (e) => e.getMinutes());
Os.range;
const Hd = st((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * yt);
}, (e, t) => (t - e) / yt, (e) => e.getUTCMinutes());
Hd.range;
const Us = st((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Vt - e.getMinutes() * yt);
}, (e, t) => {
  e.setTime(+e + t * Gt);
}, (e, t) => (t - e) / Gt, (e) => e.getHours());
Us.range;
const Od = st((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Gt);
}, (e, t) => (t - e) / Gt, (e) => e.getUTCHours());
Od.range;
const ar = st(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * yt) / qt,
  (e) => e.getDate() - 1
);
ar.range;
const Ws = st((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / qt, (e) => e.getUTCDate() - 1);
Ws.range;
const Ud = st((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / qt, (e) => Math.floor(e / qt));
Ud.range;
function xn(e) {
  return st((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * yt) / Hs);
}
const ca = xn(0), jr = xn(1), Wd = xn(2), zd = xn(3), An = xn(4), Vd = xn(5), Gd = xn(6);
ca.range;
jr.range;
Wd.range;
zd.range;
An.range;
Vd.range;
Gd.range;
function bn(e) {
  return st((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / Hs);
}
const Ui = bn(0), Dr = bn(1), Yd = bn(2), qd = bn(3), Rn = bn(4), Xd = bn(5), Kd = bn(6);
Ui.range;
Dr.range;
Yd.range;
qd.range;
Rn.range;
Xd.range;
Kd.range;
const Zn = st((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Zn.range;
const Jd = st((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Jd.range;
const Xt = st((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Xt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : st((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
Xt.range;
const mn = st((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
mn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : st((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
mn.range;
function Zd(e, t, n, a, o, s) {
  const i = [
    [jn, 1, Vt],
    [jn, 5, 5 * Vt],
    [jn, 15, 15 * Vt],
    [jn, 30, 30 * Vt],
    [s, 1, yt],
    [s, 5, 5 * yt],
    [s, 15, 15 * yt],
    [s, 30, 30 * yt],
    [o, 1, Gt],
    [o, 3, 3 * Gt],
    [o, 6, 6 * Gt],
    [o, 12, 12 * Gt],
    [a, 1, qt],
    [a, 2, 2 * qt],
    [n, 1, Hs],
    [t, 1, jo],
    [t, 3, 3 * jo],
    [e, 1, Pa]
  ];
  function l(c, d, f) {
    const h = d < c;
    h && ([c, d] = [d, c]);
    const g = f && typeof f.range == "function" ? f : u(c, d, f), v = g ? g.range(c, +d + 1) : [];
    return h ? v.reverse() : v;
  }
  function u(c, d, f) {
    const h = Math.abs(d - c) / f, g = Fs(([, , p]) => p).right(i, h);
    if (g === i.length) return e.every(Ja(c / Pa, d / Pa, f));
    if (g === 0) return Nr.every(Math.max(Ja(c, d, f), 1));
    const [v, m] = i[h / i[g - 1][2] < i[g][2] / h ? g - 1 : g];
    return v.every(m);
  }
  return [l, u];
}
const [Qd, ef] = Zd(Xt, Zn, ca, ar, Us, Os);
function Fa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Aa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Un(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function tf(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, u = e.shortMonths, c = Wn(o), d = zn(o), f = Wn(s), h = zn(s), g = Wn(i), v = zn(i), m = Wn(l), p = zn(l), x = Wn(u), D = zn(u), I = {
    a: A,
    A: re,
    b: V,
    B: E,
    c: null,
    d: Lo,
    e: Lo,
    f: Cf,
    g: Ff,
    G: Rf,
    H: _f,
    I: Sf,
    j: kf,
    L: Wi,
    m: Nf,
    M: jf,
    p: H,
    q: z,
    Q: Ao,
    s: Ro,
    S: Df,
    u: Tf,
    U: $f,
    V: If,
    w: Mf,
    W: Lf,
    x: null,
    X: null,
    y: Pf,
    Y: Af,
    Z: Ef,
    "%": Fo
  }, _ = {
    a: ae,
    A: O,
    b: pe,
    B: Se,
    c: null,
    d: Po,
    e: Po,
    f: Uf,
    g: Zf,
    G: ep,
    H: Bf,
    I: Hf,
    j: Of,
    L: Vi,
    m: Wf,
    M: zf,
    p: ce,
    q: de,
    Q: Ao,
    s: Ro,
    S: Vf,
    u: Gf,
    U: Yf,
    V: qf,
    w: Xf,
    W: Kf,
    x: null,
    X: null,
    y: Jf,
    Y: Qf,
    Z: tp,
    "%": Fo
  }, y = {
    a: T,
    A: k,
    b,
    B: L,
    c: N,
    d: Io,
    e: Io,
    f: bf,
    g: $o,
    G: To,
    H: Mo,
    I: Mo,
    j: hf,
    L: xf,
    m: pf,
    M: mf,
    p: w,
    q: ff,
    Q: yf,
    s: wf,
    S: gf,
    u: of,
    U: lf,
    V: cf,
    w: sf,
    W: uf,
    x: $,
    X: S,
    y: $o,
    Y: To,
    Z: df,
    "%": vf
  };
  I.x = M(n, I), I.X = M(a, I), I.c = M(t, I), _.x = M(n, _), _.X = M(a, _), _.c = M(t, _);
  function M(K, ee) {
    return function(ue) {
      var C = [], B = -1, W = 0, ne = K.length, Z, ie, be;
      for (ue instanceof Date || (ue = /* @__PURE__ */ new Date(+ue)); ++B < ne; )
        K.charCodeAt(B) === 37 && (C.push(K.slice(W, B)), (ie = Do[Z = K.charAt(++B)]) != null ? Z = K.charAt(++B) : ie = Z === "e" ? " " : "0", (be = ee[Z]) && (Z = be(ue, ie)), C.push(Z), W = B + 1);
      return C.push(K.slice(W, B)), C.join("");
    };
  }
  function P(K, ee) {
    return function(ue) {
      var C = Un(1900, void 0, 1), B = j(C, K, ue += "", 0), W, ne;
      if (B != ue.length) return null;
      if ("Q" in C) return new Date(C.Q);
      if ("s" in C) return new Date(C.s * 1e3 + ("L" in C ? C.L : 0));
      if (ee && !("Z" in C) && (C.Z = 0), "p" in C && (C.H = C.H % 12 + C.p * 12), C.m === void 0 && (C.m = "q" in C ? C.q : 0), "V" in C) {
        if (C.V < 1 || C.V > 53) return null;
        "w" in C || (C.w = 1), "Z" in C ? (W = Aa(Un(C.y, 0, 1)), ne = W.getUTCDay(), W = ne > 4 || ne === 0 ? Dr.ceil(W) : Dr(W), W = Ws.offset(W, (C.V - 1) * 7), C.y = W.getUTCFullYear(), C.m = W.getUTCMonth(), C.d = W.getUTCDate() + (C.w + 6) % 7) : (W = Fa(Un(C.y, 0, 1)), ne = W.getDay(), W = ne > 4 || ne === 0 ? jr.ceil(W) : jr(W), W = ar.offset(W, (C.V - 1) * 7), C.y = W.getFullYear(), C.m = W.getMonth(), C.d = W.getDate() + (C.w + 6) % 7);
      } else ("W" in C || "U" in C) && ("w" in C || (C.w = "u" in C ? C.u % 7 : "W" in C ? 1 : 0), ne = "Z" in C ? Aa(Un(C.y, 0, 1)).getUTCDay() : Fa(Un(C.y, 0, 1)).getDay(), C.m = 0, C.d = "W" in C ? (C.w + 6) % 7 + C.W * 7 - (ne + 5) % 7 : C.w + C.U * 7 - (ne + 6) % 7);
      return "Z" in C ? (C.H += C.Z / 100 | 0, C.M += C.Z % 100, Aa(C)) : Fa(C);
    };
  }
  function j(K, ee, ue, C) {
    for (var B = 0, W = ee.length, ne = ue.length, Z, ie; B < W; ) {
      if (C >= ne) return -1;
      if (Z = ee.charCodeAt(B++), Z === 37) {
        if (Z = ee.charAt(B++), ie = y[Z in Do ? ee.charAt(B++) : Z], !ie || (C = ie(K, ue, C)) < 0) return -1;
      } else if (Z != ue.charCodeAt(C++))
        return -1;
    }
    return C;
  }
  function w(K, ee, ue) {
    var C = c.exec(ee.slice(ue));
    return C ? (K.p = d.get(C[0].toLowerCase()), ue + C[0].length) : -1;
  }
  function T(K, ee, ue) {
    var C = g.exec(ee.slice(ue));
    return C ? (K.w = v.get(C[0].toLowerCase()), ue + C[0].length) : -1;
  }
  function k(K, ee, ue) {
    var C = f.exec(ee.slice(ue));
    return C ? (K.w = h.get(C[0].toLowerCase()), ue + C[0].length) : -1;
  }
  function b(K, ee, ue) {
    var C = x.exec(ee.slice(ue));
    return C ? (K.m = D.get(C[0].toLowerCase()), ue + C[0].length) : -1;
  }
  function L(K, ee, ue) {
    var C = m.exec(ee.slice(ue));
    return C ? (K.m = p.get(C[0].toLowerCase()), ue + C[0].length) : -1;
  }
  function N(K, ee, ue) {
    return j(K, t, ee, ue);
  }
  function $(K, ee, ue) {
    return j(K, n, ee, ue);
  }
  function S(K, ee, ue) {
    return j(K, a, ee, ue);
  }
  function A(K) {
    return i[K.getDay()];
  }
  function re(K) {
    return s[K.getDay()];
  }
  function V(K) {
    return u[K.getMonth()];
  }
  function E(K) {
    return l[K.getMonth()];
  }
  function H(K) {
    return o[+(K.getHours() >= 12)];
  }
  function z(K) {
    return 1 + ~~(K.getMonth() / 3);
  }
  function ae(K) {
    return i[K.getUTCDay()];
  }
  function O(K) {
    return s[K.getUTCDay()];
  }
  function pe(K) {
    return u[K.getUTCMonth()];
  }
  function Se(K) {
    return l[K.getUTCMonth()];
  }
  function ce(K) {
    return o[+(K.getUTCHours() >= 12)];
  }
  function de(K) {
    return 1 + ~~(K.getUTCMonth() / 3);
  }
  return {
    format: function(K) {
      var ee = M(K += "", I);
      return ee.toString = function() {
        return K;
      }, ee;
    },
    parse: function(K) {
      var ee = P(K += "", !1);
      return ee.toString = function() {
        return K;
      }, ee;
    },
    utcFormat: function(K) {
      var ee = M(K += "", _);
      return ee.toString = function() {
        return K;
      }, ee;
    },
    utcParse: function(K) {
      var ee = P(K += "", !0);
      return ee.toString = function() {
        return K;
      }, ee;
    }
  };
}
var Do = { "-": "", _: " ", 0: "0" }, ct = /^\s*\d+/, nf = /^%/, rf = /[\\^$*+?|[\]().{}]/g;
function He(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function af(e) {
  return e.replace(rf, "\\$&");
}
function Wn(e) {
  return new RegExp("^(?:" + e.map(af).join("|") + ")", "i");
}
function zn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function sf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function of(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function lf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function cf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function uf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function To(e, t, n) {
  var a = ct.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function $o(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function df(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function ff(e, t, n) {
  var a = ct.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function pf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Io(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function hf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Mo(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function mf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function gf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function xf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function bf(e, t, n) {
  var a = ct.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function vf(e, t, n) {
  var a = nf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function yf(e, t, n) {
  var a = ct.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function wf(e, t, n) {
  var a = ct.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Lo(e, t) {
  return He(e.getDate(), t, 2);
}
function _f(e, t) {
  return He(e.getHours(), t, 2);
}
function Sf(e, t) {
  return He(e.getHours() % 12 || 12, t, 2);
}
function kf(e, t) {
  return He(1 + ar.count(Xt(e), e), t, 3);
}
function Wi(e, t) {
  return He(e.getMilliseconds(), t, 3);
}
function Cf(e, t) {
  return Wi(e, t) + "000";
}
function Nf(e, t) {
  return He(e.getMonth() + 1, t, 2);
}
function jf(e, t) {
  return He(e.getMinutes(), t, 2);
}
function Df(e, t) {
  return He(e.getSeconds(), t, 2);
}
function Tf(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function $f(e, t) {
  return He(ca.count(Xt(e) - 1, e), t, 2);
}
function zi(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? An(e) : An.ceil(e);
}
function If(e, t) {
  return e = zi(e), He(An.count(Xt(e), e) + (Xt(e).getDay() === 4), t, 2);
}
function Mf(e) {
  return e.getDay();
}
function Lf(e, t) {
  return He(jr.count(Xt(e) - 1, e), t, 2);
}
function Pf(e, t) {
  return He(e.getFullYear() % 100, t, 2);
}
function Ff(e, t) {
  return e = zi(e), He(e.getFullYear() % 100, t, 2);
}
function Af(e, t) {
  return He(e.getFullYear() % 1e4, t, 4);
}
function Rf(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? An(e) : An.ceil(e), He(e.getFullYear() % 1e4, t, 4);
}
function Ef(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + He(t / 60 | 0, "0", 2) + He(t % 60, "0", 2);
}
function Po(e, t) {
  return He(e.getUTCDate(), t, 2);
}
function Bf(e, t) {
  return He(e.getUTCHours(), t, 2);
}
function Hf(e, t) {
  return He(e.getUTCHours() % 12 || 12, t, 2);
}
function Of(e, t) {
  return He(1 + Ws.count(mn(e), e), t, 3);
}
function Vi(e, t) {
  return He(e.getUTCMilliseconds(), t, 3);
}
function Uf(e, t) {
  return Vi(e, t) + "000";
}
function Wf(e, t) {
  return He(e.getUTCMonth() + 1, t, 2);
}
function zf(e, t) {
  return He(e.getUTCMinutes(), t, 2);
}
function Vf(e, t) {
  return He(e.getUTCSeconds(), t, 2);
}
function Gf(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Yf(e, t) {
  return He(Ui.count(mn(e) - 1, e), t, 2);
}
function Gi(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function qf(e, t) {
  return e = Gi(e), He(Rn.count(mn(e), e) + (mn(e).getUTCDay() === 4), t, 2);
}
function Xf(e) {
  return e.getUTCDay();
}
function Kf(e, t) {
  return He(Dr.count(mn(e) - 1, e), t, 2);
}
function Jf(e, t) {
  return He(e.getUTCFullYear() % 100, t, 2);
}
function Zf(e, t) {
  return e = Gi(e), He(e.getUTCFullYear() % 100, t, 2);
}
function Qf(e, t) {
  return He(e.getUTCFullYear() % 1e4, t, 4);
}
function ep(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Rn(e) : Rn.ceil(e), He(e.getUTCFullYear() % 1e4, t, 4);
}
function tp() {
  return "+0000";
}
function Fo() {
  return "%";
}
function Ao(e) {
  return +e;
}
function Ro(e) {
  return Math.floor(+e / 1e3);
}
var _n, Yi;
np({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function np(e) {
  return _n = tf(e), Yi = _n.format, _n.parse, _n.utcFormat, _n.utcParse, _n;
}
function rp(e) {
  return new Date(e);
}
function ap(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function qi(e, t, n, a, o, s, i, l, u, c) {
  var d = Ei(), f = d.invert, h = d.domain, g = c(".%L"), v = c(":%S"), m = c("%I:%M"), p = c("%I %p"), x = c("%a %d"), D = c("%b %d"), I = c("%B"), _ = c("%Y");
  function y(M) {
    return (u(M) < M ? g : l(M) < M ? v : i(M) < M ? m : s(M) < M ? p : a(M) < M ? o(M) < M ? x : D : n(M) < M ? I : _)(M);
  }
  return d.invert = function(M) {
    return new Date(f(M));
  }, d.domain = function(M) {
    return arguments.length ? h(Array.from(M, ap)) : h().map(rp);
  }, d.ticks = function(M) {
    var P = h();
    return e(P[0], P[P.length - 1], M ?? 10);
  }, d.tickFormat = function(M, P) {
    return P == null ? y : c(P);
  }, d.nice = function(M) {
    var P = h();
    return (!M || typeof M.range != "function") && (M = t(P[0], P[P.length - 1], M ?? 10)), M ? h(Bd(P, M)) : d;
  }, d.copy = function() {
    return Ri(d, qi(e, t, n, a, o, s, i, l, u, c));
  }, d;
}
function zs() {
  return la.apply(qi(Qd, ef, Xt, Zn, ca, ar, Us, Os, jn, Yi).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function sp({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": u
}) {
  const c = Be(null), [d, f] = Ee(!1), [h, g] = Ee(!1), v = t(e.start), m = t(e.end), p = Math.max(m - v, 20), x = () => {
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
  }, D = e.progress ? p * e.progress / 100 : 0, I = () => {
    n?.(e);
  }, _ = () => {
    a?.(e);
  }, y = (b) => {
    b.key === "Enter" ? (b.preventDefault(), I()) : b.key === " " && (b.preventDefault(), _());
  }, M = () => {
    f(!0);
  }, P = () => {
    f(!1);
  }, j = () => {
    g(!0), l?.();
  }, w = () => {
    g(!1);
  }, T = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), k = {
    "--task-left": `${v}px`,
    "--task-width": `${p}px`,
    "--task-color": x(),
    left: `${v}px`,
    width: `${p}px`,
    backgroundColor: x()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: T,
      style: k,
      onClick: I,
      onDoubleClick: _,
      onKeyDown: y,
      onMouseDown: M,
      onMouseUp: P,
      onFocus: j,
      onBlur: w,
      "aria-label": u || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${D}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function op({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let g = e.getTime(); g <= t.getTime(); g += 864e5)
    a.push(new Date(g));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Ee(-1), u = Be(null), c = (g) => {
    if (g.key === "ArrowLeft") {
      g.preventDefault();
      const v = Math.max(0, i === -1 ? 0 : i - 1);
      l(v), h(v);
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const v = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(v), h(v);
    } else if (g.key === "ArrowDown")
      g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (g.key === "Home")
      g.preventDefault(), l(0), h(0);
    else if (g.key === "End") {
      g.preventDefault();
      const v = a.length - 1;
      l(v), h(v);
    }
  }, d = (g) => {
    if (g.key === "ArrowDown")
      g.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (g.key === "ArrowRight") {
      g.preventDefault();
      const v = u.current;
      v && v.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (g) => {
    const v = u.current?.querySelector(`[data-date-index="${g}"]`);
    v && v.focus();
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
            onKeyDown: d,
            children: "Resources"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: u,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: f,
            children: a.map((g, v) => {
              const m = g.getTime() === s.getTime(), p = i === v;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": v,
                  className: `date-column ${m ? "today" : ""} ${p ? "focused" : ""}`,
                  tabIndex: p ? 0 : -1,
                  role: "button",
                  "aria-label": `${g.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(v),
                  onKeyDown: c,
                  children: g.toLocaleDateString("en-GB", {
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
function ip({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, u] = Ee(!1), [c, d] = Ee(-1), f = Be(null);
  ze(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
    }, 0);
  }, [l, c, t.length]);
  const h = (m) => {
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
          m.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-timeline") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowDown":
          m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`) : null)?.focus();
          break;
        case "ArrowLeft":
          m.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (m.preventDefault(), u(!0), d(0));
          break;
      }
      return;
    }
    switch (m.key) {
      case "ArrowLeft":
        m.preventDefault();
        const p = Math.max(0, c - 1);
        d(p), f.current?.querySelector(`[data-task-index="${p}"]`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault();
        const D = Math.min(t.length - 1, c + 1);
        d(D), f.current?.querySelector(`[data-task-index="${D}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        m.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        m.preventDefault(), u(!1), d(-1), f.current?.focus();
        break;
    }
  }, g = (m) => {
    switch (m.key) {
      case "ArrowUp":
        m.preventDefault(), s === 0 ? typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".header-resource") : null)?.focus() : typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowDown":
        m.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`) : null)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault(), f.current?.focus();
        break;
    }
  }, v = (m) => {
    l && d(m);
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
            ref: f,
            className: `timeline-container ${l ? "timeline-active" : ""}`,
            role: "gridcell",
            "aria-colindex": 2,
            "aria-colspan": i,
            tabIndex: 0,
            "aria-label": `Timeline for ${e.label} with ${t.length} task${t.length !== 1 ? "s" : ""}. Press Enter to activate task navigation, then use arrow keys to navigate, Enter to select, Space to activate, Escape to exit`,
            onKeyDown: h,
            onFocus: () => {
              l || d(-1);
            },
            children: t.map((m, p) => /* @__PURE__ */ r.jsx(
              sp,
              {
                task: m,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === p,
                taskIndex: p,
                tabIndex: l && c === p ? 0 : -1,
                onFocus: () => v(p)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function iv({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Be(null), [l, u] = Ee(800), c = Me(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), d = Me(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const m = new Date(a);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [a]), f = Me(() => Math.ceil((d.getTime() - c.getTime()) / 864e5) + 1, [c, d]);
  ze(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const p = new m((x) => {
      const D = x[0];
      D && u(Math.max(D.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const h = Me(
    () => zs().domain([c, d]).range([0, l]),
    [c, d, l]
  ), g = Me(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((p) => {
      const x = m.get(p.resourceId) || [];
      x.push(p), m.set(p.resourceId, x);
    }), m;
  }, [t]), v = (m) => {
    if (m.target === m.currentTarget)
      switch (m.key) {
        case "ArrowDown":
          m.preventDefault(), typeof document < "u" && i.current?.querySelector(".gantt-row .resource-label")?.focus();
          break;
        case "Home":
          m.preventDefault(), typeof document < "u" && i.current?.querySelector(".header-resource")?.focus();
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
      "aria-colcount": f + 1,
      "aria-description": "Use arrow keys to navigate cells, Tab to cycle through tasks in timeline rows or dates in header, Enter to select task, Space to activate task, Alt+arrows to scroll the grid, Shift+arrows to scroll timeline rows",
      tabIndex: 0,
      onKeyDown: v,
      children: [
        /* @__PURE__ */ r.jsx(op, { viewStart: c, viewEnd: d, dateCount: f }),
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
            children: e.map((m, p) => /* @__PURE__ */ r.jsx(
              ip,
              {
                resource: m,
                tasks: g.get(m.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: p,
                dateCount: f
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
const Tr = ({
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
) }), lp = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const u = () => t ? xt.Children.toArray(t).filter(
    (p) => xt.isValidElement(p) && (p.type === Tr || p.type?.displayName === "BreadcrumbItem")
  ).map((p) => ({
    text: typeof p.props.children == "string" ? p.props.children : String(p.props.children),
    href: p.props.href,
    active: p.props.active,
    attributes: p.props.attributes
  })) : [], c = () => t ? u() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const m = c();
    if (m && m.length > 0) {
      const p = m.slice().reverse().find((x) => x.href && !x.active);
      if (p)
        return { href: p.href, text: p.text };
    }
    return { text: "Home" };
  }, f = c(), h = d(), g = _e(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), v = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: g,
      "aria-label": v,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          xt.Children.map(t, (m, p) => xt.isValidElement(m) && (m.type === Tr || m.type?.displayName === "BreadcrumbItem") ? xt.cloneElement(m, { key: p }) : null)
        ) : (
          // Render from items array
          f?.filter((m) => m.active || !!m.href).map((m, p) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: m.active ? /* @__PURE__ */ r.jsx(
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
          ) }, p))
        ) }),
        h.href && /* @__PURE__ */ r.jsx("p", { className: "nhsuk-breadcrumb__back", children: /* @__PURE__ */ r.jsxs(
          "a",
          {
            className: "nhsuk-breadcrumb__backlink",
            href: h.href,
            role: "link",
            "aria-label": `Back to ${h.text}`,
            ...e.length > 0 ? e[e.length - 1]?.attributes || {} : {},
            children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Back to  " }),
              h.text
            ]
          }
        ) })
      ]
    }
  );
}, cp = lp;
cp.Item = Tr;
Tr.displayName = "BreadcrumbItem";
const Xi = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = Ee(!1);
  ze(() => {
    s(!0);
  }, []), ze(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (u) => {
      const c = u.target, d = c.getAttribute("href");
      if (d && d.startsWith("#")) {
        const f = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(d) : null;
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const h = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
          }, 3e3);
          c.__nhsSkipLinkTimeout = h;
        }
      }
    };
    try {
      const u = document.querySelectorAll(".nhsuk-skip-link");
      return u.forEach((c) => {
        c.addEventListener("click", l);
      }), () => {
        try {
          u.forEach((c) => {
            c.removeEventListener("click", l);
            const d = c.__nhsSkipLinkTimeout;
            d && window.clearTimeout && window.clearTimeout(d);
          });
        } catch (c) {
          console.warn("SkipLink cleanup error:", c);
        }
      };
    } catch (u) {
      return console.warn("SkipLink initialization error:", u), () => {
      };
    }
  }, [o]);
  const i = _e("nhsuk-skip-link", n);
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
}, lv = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = _e("nhsuk-pagination", o);
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
}, cv = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = _e("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, Ki = xt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: u,
  imgAlt: c,
  ...d
}, f) => {
  const h = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), g = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), v = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const D = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Yt,
      {
        level: a,
        className: v,
        children: D()
      }
    );
  }, p = () => d.children ? d.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, x = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
      ...d,
      className: h,
      ref: f,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: u,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: g, children: [
          m(),
          p(),
          x()
        ] })
      ]
    }
  );
});
Ki.displayName = "Card";
const uv = ({
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
}, dv = ({
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
}, fv = ({
  type: e,
  heading: t,
  headingHtml: n,
  headingLevel: a = 3,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  className: l,
  children: u,
  "data-testid": c,
  id: d,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": g
}) => {
  const v = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), p = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const D = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], I = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        D,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Yt,
      {
        level: a,
        className: m,
        children: I
      }
    );
  }, x = () => u || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: v,
      "data-testid": c,
      id: d,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": g,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          p(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: x() })
      ]
    }
  );
}, up = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...u
}) => {
  const c = _e(
    "nhsuk-panel",
    t
  ), d = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Yt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Yt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      text: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, f = () => l ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: l }) : i ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : s ? /* @__PURE__ */ r.jsx("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ r.jsx("p", { children: s }) }) : null;
  return /* @__PURE__ */ r.jsxs("div", { className: c, id: e, ...u, children: [
    d(),
    f()
  ] });
}, pv = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = _e("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, hv = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = _e(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((u, c) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: u.href,
          className: "nhsuk-link",
          ...u.attributes,
          children: [
            s(u),
            u.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: u.visuallyHiddenText })
          ]
        }
      )
    },
    c
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: o, ...a, children: e.map((l, u) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, u)) }) });
}, Vn = { current: null }, dp = () => {
  if (Vn.current) return Vn.current;
  try {
    Vn.current = require("prismjs");
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
    Vn.current = null;
  }
  return Vn.current;
}, fp = (e) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let n = e;
  return t.forEach((a) => {
    n = n.replace(a.regex, (o) => `<span class="nhsuk-code-${a.cls}">${o}</span>`);
  }), n;
}, $r = (e, t, n) => {
  if (n || !t) return e;
  const a = dp();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return fp(e);
}, pp = ({
  rows: e,
  head: t,
  caption: n,
  captionSize: a,
  firstCellIsHeader: o = !1,
  responsive: s = !1,
  heading: i,
  headingLevel: l = 3,
  panel: u = !1,
  panelClasses: c,
  tableClasses: d,
  classes: f,
  attributes: h,
  "data-testid": g,
  columns: v,
  data: m,
  visuallyHiddenCaption: p = !1
}) => {
  const x = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), D = _e(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), I = _e(f), _ = (w, T) => {
    const k = _e(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${w.format}`]: w.format
      },
      w.classes
    ), b = {
      scope: "col",
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && { role: "columnheader" },
      ...w.attributes
    };
    let L;
    if (w.node != null)
      L = /* @__PURE__ */ r.jsx(r.Fragment, { children: w.node });
    else if (w.html)
      L = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } });
    else if (w.code != null) {
      const N = Array.isArray(w.code), $ = N ? w.code.join(`
`) : w.code, S = N || $.includes(`
`), A = {
        className: _e("nhsuk-table__code", w.codeClassName, {
          "nhsuk-table__code--block": S,
          "nhsuk-table__code--inline": !S
        }),
        ...w.codeLanguage ? { "data-language": w.codeLanguage } : {}
      }, re = $r($, w.codeLanguage);
      L = S ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: re }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: re }
        }
      );
    } else
      L = w.text;
    return /* @__PURE__ */ r.jsx("th", { className: k, ...b, children: L }, T);
  }, y = (w, T, k) => {
    const b = o && k || w.rowHeader, L = _e(
      b ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${b ? "header" : "cell"}--${w.format}`]: w.format
      },
      w.classes
    ), N = {
      ...b && { scope: "row" },
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && {
        role: b ? "rowheader" : "cell",
        ...w.header && { "data-label": w.header }
      },
      ...w.attributes
    };
    let $;
    if (w.node != null)
      $ = /* @__PURE__ */ r.jsx(r.Fragment, { children: w.node });
    else if (w.html)
      $ = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } });
    else if (w.code != null) {
      const re = Array.isArray(w.code), V = re ? w.code.join(`
`) : w.code, E = re || V.includes(`
`), H = {
        className: _e("nhsuk-table__code", w.codeClassName, {
          "nhsuk-table__code--block": E,
          "nhsuk-table__code--inline": !E
        }),
        ...w.codeLanguage ? { "data-language": w.codeLanguage } : {}
      }, z = $r(
        V,
        w.codeLanguage,
        w.disableHighlight
      );
      $ = E ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: z }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: z }
        }
      );
    } else
      $ = w.text;
    const S = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && w.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        w.header,
        " "
      ] }),
      $
    ] }), A = b ? "th" : "td";
    return /* @__PURE__ */ r.jsx(A, { className: L, ...N, children: S }, T);
  };
  let M = t, P = e;
  !M && v && v.length && (M = v.map((w) => ({
    text: w.title,
    format: w.format,
    classes: w.headerClasses,
    attributes: w.headerAttributes
  }))), !P && v && m && m.length && (P = m.map((w, T) => v.map((k) => {
    const b = k.accessor ? k.accessor(w, T) : w[k.key];
    let L = { format: k.format, classes: k.cellClasses, attributes: k.cellAttributes };
    if (k.rowHeader && (L.rowHeader = !0), k.render) {
      const N = k.render(b, w, T, k);
      return N == null || typeof N == "boolean" ? { ...L, text: "" } : typeof N == "string" || typeof N == "number" ? { ...L, text: String(N) } : { ...L, ...N };
    }
    return { ...L, text: b != null ? String(b) : "" };
  })));
  const j = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: D,
      ...s && { role: "table" },
      ...h,
      ...g && { "data-testid": g },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: _e(x, p && "nhsuk-u-visually-hidden"), children: n }),
        M && M.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: M.map(
              (w, T) => _(w, T)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: P && P.map((w, T) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: w.map(
              (k, b) => y(k, b, b === 0)
            )
          },
          T
        )) })
      ]
    }
  );
  return u ? /* @__PURE__ */ r.jsxs(up, { className: c, children: [
    i && /* @__PURE__ */ r.jsx(Yt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    j()
  ] }) : I ? /* @__PURE__ */ r.jsx("div", { className: I, children: j() }) : j();
}, hp = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = _e(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, Ji = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, Zi = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: h,
  as: g = "th"
}) => {
  const v = _e(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    u
  ), m = {
    scope: "col",
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...h && { role: "columnheader" },
    ...f
  };
  let p;
  if (n != null) p = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) p = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const D = Array.isArray(a), I = D ? a.join(`
`) : a, _ = D || I.includes(`
`), y = {
      className: _e("nhsuk-table__code", s, {
        "nhsuk-table__code--block": _,
        "nhsuk-table__code--inline": !_
      }),
      ...o ? { "data-language": o } : {}
    }, M = $r(
      I,
      o,
      i
    );
    p = _ ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...y,
        dangerouslySetInnerHTML: { __html: M }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...y, dangerouslySetInnerHTML: { __html: M } });
  } else p = e;
  const x = g;
  return /* @__PURE__ */ r.jsx(x, { className: v, ...m, children: p });
}, mp = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: u,
  colspan: c,
  rowspan: d,
  attributes: f,
  responsive: h,
  rowHeader: g
}) => {
  const v = !!g, m = v ? "th" : "td", p = _e(
    v ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${v ? "header" : "cell"}--${l}`,
    u
  ), x = {
    ...c && { colSpan: c },
    ...d && { rowSpan: d },
    ...v && { scope: "row" },
    ...h && { role: v ? "rowheader" : "cell" },
    ...f
  };
  let D;
  if (n != null) D = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) D = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const I = Array.isArray(a), _ = I ? a.join(`
`) : a, y = I || _.includes(`
`), M = {
      className: _e("nhsuk-table__code", s, {
        "nhsuk-table__code--block": y,
        "nhsuk-table__code--inline": !y
      }),
      ...o ? { "data-language": o } : {}
    }, P = $r(_, o, i);
    D = y ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: P } }) }) : /* @__PURE__ */ r.jsx("code", { ...M, dangerouslySetInnerHTML: { __html: P } });
  } else D = e;
  return /* @__PURE__ */ r.jsx(m, { className: p, ...x, children: D });
}, Kt = pp;
Kt.Caption = hp;
Kt.BodyRow = Ji;
Kt.HeaderCell = Zi;
Kt.Cell = mp;
let Eo = !1, Bo = !1;
Object.defineProperty(Kt, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Eo && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Eo = !0), Ji;
  }
});
Object.defineProperty(Kt, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Bo && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Bo = !0), Zi;
  }
});
const mv = En(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
  onTabChange: a,
  onTabFocus: o,
  onTabListBlur: s,
  onEscape: i,
  autoActivate: l = !0,
  className: u,
  id: c,
  "data-testid": d,
  ...f
}, h) => {
  const g = n !== void 0, [v, m] = Ee(() => t || e[0]?.id || ""), p = g ? n : v, x = Be(null), D = Be(/* @__PURE__ */ new Map()), I = ye((T) => {
    g || m(T), a?.(T);
  }, [g, a]), _ = ye((T) => {
    o?.(T), l && I(T);
  }, [o, l, I]), y = ye((T, k) => {
    const b = e.filter(($) => !$.disabled).map(($) => $.id), L = b.indexOf(k);
    let N = null;
    switch (T.key) {
      case "ArrowLeft":
        N = L > 0 ? L - 1 : b.length - 1;
        break;
      case "ArrowRight":
        N = L < b.length - 1 ? L + 1 : 0;
        break;
      case "Home":
        N = 0;
        break;
      case "End":
        N = b.length - 1;
        break;
      case "Escape":
        T.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (N !== null) {
      T.preventDefault();
      const $ = b[N], S = D.current.get($);
      S && (S.focus(), _($));
    }
  }, [e, _, i]), M = ye((T, k) => {
    k ? D.current.set(T, k) : D.current.delete(T);
  }, []), P = ye((T) => {
    const k = D.current.get(T);
    k && k.focus();
  }, []);
  xi(h, () => ({
    focusTab: P,
    getActiveTab: () => p,
    getTabListElement: () => x.current
  }), [P, p]);
  const j = ye((T) => {
    const k = T.relatedTarget;
    x.current?.contains(k) || s?.();
  }, [s]), w = _e("nhsuk-tabs", u);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: w,
      id: c,
      "data-testid": d,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: x,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: j,
                children: e.map((T) => {
                  const k = T.id === p, b = T.disabled, L = _e("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": k,
                    "nhsuk-tabs__list-item--disabled": b
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: L, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (N) => M(T.id, N),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": k,
                      "aria-controls": `${T.id}-panel`,
                      id: `${T.id}-tab`,
                      tabIndex: k ? 0 : -1,
                      disabled: b,
                      onClick: () => !b && I(T.id),
                      onKeyDown: (N) => !b && y(N, T.id),
                      onFocus: () => !b && _(T.id),
                      ...T.attributes,
                      children: T.label
                    }
                  ) }, T.id);
                })
              }
            )
          }
        ),
        e.map((T) => {
          const k = T.id === p;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${T.id}-tab`,
              id: `${T.id}-panel`,
              hidden: !k,
              children: T.content
            },
            T.id
          );
        })
      ]
    }
  );
}), gp = En(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...u
  }, c) => {
    const d = [
      "nhsuk-details",
      s
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let h;
    return l ? h = l : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: d,
        open: o,
        ...u,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
gp.displayName = "Details";
const xp = En(
  ({
    title: e,
    type: t,
    items: n,
    hidePrefix: a = !1,
    headingLevel: o = 3,
    className: s,
    ...i
  }, l) => {
    const u = ["nhsuk-do-dont-list"];
    s && u.push(s);
    const c = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], d = () => t === "cross" ? /* @__PURE__ */ r.jsxs(
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
    ), f = (g) => t === "cross" && !a ? `do not ${g}` : g, h = () => /* @__PURE__ */ r.jsx(
      Yt,
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
        className: u.join(" "),
        ...i,
        children: [
          h(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((g, v) => /* @__PURE__ */ r.jsxs("li", { children: [
            d(),
            f(g.item)
          ] }, v)) }) })
        ]
      }
    );
  }
);
xp.displayName = "DoDontList";
const bp = En(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
    html: a,
    open: o = !1,
    className: s = "",
    id: i,
    children: l,
    ...u
  }, c) => {
    const d = [
      "nhsuk-expander",
      s
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ r.jsx(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-details__summary-text", children: e });
    let h;
    return l ? h = l : a ? h = /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n && (h = n), /* @__PURE__ */ r.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: d,
        open: o,
        ...u,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
bp.displayName = "Expander";
const vp = En(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, u) => {
      const c = u + 1, d = `${t}-${c}-hint`, f = `${t}-${c}-status`, h = !!l.href, g = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), v = [
        l.hint && d,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        yp,
        {
          item: l,
          itemClasses: g,
          hasLink: h,
          hintId: d,
          statusId: f,
          ariaDescribedBy: v
        },
        u
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
), yp = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, d = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: d,
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
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, u = () => {
    const c = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let d;
    return e.status.tag ? d = /* @__PURE__ */ r.jsx(We, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ r.jsx("div", { className: c, id: o, children: d });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    u()
  ] });
};
vp.displayName = "TaskList";
const gv = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), u = () => o || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), c = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), d = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        gi(
          d,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            e,
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        u()
      ]
    }
  );
}, xv = ({
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
}, wp = ({
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
    /* @__PURE__ */ r.jsx(ft, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(ft, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(ft, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      br,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: o,
        onChange: (u) => s?.(u.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      br,
      {
        id: "slot-matrix-mode-select",
        name: "slot-matrix-mode",
        ariaLabel: "Change accessibility mode",
        value: i,
        onChange: (u) => l?.(u.target.value),
        options: [
          { value: "grid", text: "Grid" },
          { value: "list", text: "List" }
        ]
      }
    )
  ] })
] }), _p = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(We, { color: Sp(n.status), text: n.label }) }, n.status)) });
function Sp(e) {
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
const bv = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: o,
  selectionMode: s = "single",
  a11yMode: i,
  className: l,
  style: u,
  getSlotAriaLabel: c,
  toolbar: d,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: g = !0,
  legendPlacement: v = "bottom",
  onA11yModeChange: m
}) => {
  const [p, x] = Ee("grid"), D = i || p, [I, _] = Ee(a || []), y = n ?? I, M = Me(() => {
    const N = /* @__PURE__ */ new Set();
    return e.forEach(($) => N.add(new Date($.start).getTime())), Array.from(N).sort(($, S) => $ - S);
  }, [e]), P = Me(() => {
    const N = {};
    return e.forEach(($) => {
      const S = new Date($.start).getTime();
      N[S] || (N[S] = {});
      const A = $.capacity - $.booked - ($.held || 0);
      N[S][$.sessionId] = { slot: $, remaining: A };
    }), N;
  }, [e]), j = ye((N) => {
    if (s === "single") {
      const $ = [N.id];
      n || _($), o?.($, { lastAction: "select" });
    } else {
      const $ = y.includes(N.id), S = $ ? y.filter((A) => A !== N.id) : [...y, N.id];
      n || _(S), o?.(S, { lastAction: $ ? "deselect" : "select" });
    }
  }, [s, y, n, o]), w = Me(() => h || (g ? Array.from(new Set(e.map(($) => $.status))).map(($) => ({
    status: $,
    label: $.charAt(0).toUpperCase() + $.slice(1)
  })) : void 0), [h, g, e]), T = w ? /* @__PURE__ */ r.jsx(
    _p,
    {
      items: w,
      orientation: v === "left" || v === "right" ? "vertical" : "horizontal"
    }
  ) : null, k = (N) => {
    i || x(N), m?.(N);
  }, b = d || (f ? /* @__PURE__ */ r.jsx(
    wp,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: D,
      onA11yModeChange: k
    }
  ) : null), L = /* @__PURE__ */ r.jsx("div", { style: u, className: _e(l), children: /* @__PURE__ */ r.jsx(Xa, { className: _e("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(hn, { children: /* @__PURE__ */ r.jsx(qn, { width: pn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    b,
    v === "top" && T,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((N) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => j(N), "aria-pressed": y.includes(N.id), children: [
      Gn(new Date(N.start)),
      " – ",
      Gn(new Date(N.end)),
      " (",
      N.status,
      ")"
    ] }) }, N.id)) }),
    v === "bottom" && T
  ] }) }) }) }) });
  return D === "list" ? L : /* @__PURE__ */ r.jsx("div", { style: u, className: _e(l), children: /* @__PURE__ */ r.jsx(Xa, { className: _e("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(hn, { children: /* @__PURE__ */ r.jsx(qn, { width: pn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    b,
    v === "top" && T,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": M.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((N) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${N.specialty}`, className: "nhs-slot-matrix__session-header", children: N.specialty }, N.id))
      ] }),
      M.map((N) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": Gn(new Date(N)), children: Gn(new Date(N)) }),
        t.map(($) => {
          const S = P[N]?.[$.id];
          if (!S)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, $.id);
          const { slot: A, remaining: re } = S, V = y.includes(A.id), E = c ? c(A) : `Slot ${Gn(new Date(A.start))} ${A.status}${re === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": A.status,
              className: _e("nhs-slot-matrix__cell", V && "nhs-slot-matrix__cell--selected"),
              "aria-label": E,
              "aria-selected": V || void 0,
              onClick: () => j(A),
              children: re > 0 ? `${re} left` : "Full"
            },
            A.id
          );
        })
      ] }, N))
    ] }),
    v === "bottom" && T
  ] }) }) }) }) });
};
function Ho(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function Gn(e) {
  return `${Ho(e.getHours())}:${Ho(e.getMinutes())}`;
}
const kp = ({
  title: e,
  value: t,
  subtitle: n,
  variant: a = "default",
  href: o,
  className: s = "",
  ariaLabel: i,
  ...l
}) => {
  const u = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${a}`,
    s
  ].filter(Boolean).join(" "), c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Yt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return o ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${u} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: c
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: u,
      "aria-label": i,
      ...l,
      children: c
    }
  );
}, vv = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(Xa, { children: /* @__PURE__ */ r.jsx(hn, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    qn,
    {
      width: pn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(kp, { ...o })
    },
    s
  )) }) }) });
}, Cp = xt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    selectedRowIndex: o,
    onRowSelect: s,
    id: i,
    testId: l,
    ariaLabel: u,
    ariaLabelledby: c,
    ariaDescribedby: d,
    className: f,
    tableClassName: h,
    bordered: g = !1,
    striped: v = !1,
    responsive: m = !1,
    tableType: p = "default"
  }, x) => {
    const D = Be(null), I = Be(null), _ = Be(null);
    xt.useImperativeHandle(x, () => D.current, []);
    const [y, M] = Ee(0), [P, j] = Ee(0), [w, T] = Ee("headers"), [k, b] = Ee("browse"), L = t.length, N = e.length, $ = Me(() => !n || n.length === 0 ? e : [...e].sort((z, ae) => {
      for (const { key: O, direction: pe } of n) {
        const Se = z[O], ce = ae[O];
        if (Se == null && ce == null) continue;
        if (Se == null) return 1;
        if (ce == null) return -1;
        let de = 0;
        if (typeof Se == "number" && typeof ce == "number" ? de = Se - ce : de = String(Se).localeCompare(String(ce)), de !== 0)
          return pe === "asc" ? de : -de;
      }
      return 0;
    }), [e, n]), S = ye((z, ae) => {
      setTimeout(() => {
        const O = D.current?.querySelector(
          `tbody tr:nth-child(${z + 1}) td:nth-child(${ae + 1})`
        );
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), A = ye((z) => {
      setTimeout(() => {
        const ae = D.current?.querySelector(`th:nth-child(${z + 1})`);
        ae && (ae.focus(), typeof ae.scrollIntoView == "function" && ae.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), re = ye((z) => {
      a?.(z);
    }, [a]), V = ye((z) => {
      s?.(z);
    }, [s]), E = ye((z) => {
      const { key: ae } = z;
      switch (ae) {
        case "Enter":
          if (z.preventDefault(), w === "headers" && k === "browse")
            b("navigate"), A(P);
          else if (w === "headers" && k === "navigate") {
            const O = t[P];
            O && re(O.key);
          } else w === "cells" && k === "browse" ? (b("navigate"), S(y, P)) : w === "cells" && k === "navigate" && V(y);
          break;
        case "Escape":
          z.preventDefault(), (w === "headers" && k === "navigate" || w === "cells" && k === "navigate") && b("browse");
          break;
        case "ArrowLeft":
          if (z.preventDefault(), k === "navigate" || k === "browse" && w === "headers") {
            if (w === "headers") {
              const O = Math.max(0, P - 1);
              j(O), A(O);
            } else if (w === "cells") {
              const O = Math.max(0, P - 1);
              j(O), S(y, O);
            }
          }
          break;
        case "ArrowRight":
          if (z.preventDefault(), k === "navigate" || k === "browse" && w === "headers") {
            if (w === "headers") {
              const O = Math.min(L - 1, P + 1);
              j(O), A(O);
            } else if (w === "cells") {
              const O = Math.min(L - 1, P + 1);
              j(O), S(y, O);
            }
          }
          break;
        case "ArrowUp":
          if (z.preventDefault(), w === "cells") {
            if (k === "browse") {
              const O = Math.max(0, y - 1);
              M(O), S(O, 0), j(0);
            } else if (k === "navigate")
              if (y > 0) {
                const O = y - 1;
                M(O), S(O, P);
              } else
                T("headers"), b("browse"), A(P);
          }
          break;
        case "ArrowDown":
          if (z.preventDefault(), w === "headers" && k === "browse")
            T("cells"), M(0), j(0), S(0, 0);
          else if (w === "cells") {
            const O = N - 1;
            if (k === "browse") {
              const pe = Math.min(O, y + 1);
              M(pe), S(pe, 0), j(0);
            } else if (k === "navigate" && y < O) {
              const pe = y + 1;
              M(pe), S(pe, P);
            }
          }
          break;
        case "Home":
          z.preventDefault(), w === "headers" ? (j(0), A(0)) : w === "cells" && (z.ctrlKey ? (M(0), j(0), S(0, 0)) : (j(0), S(y, 0)));
          break;
        case "End":
          if (z.preventDefault(), w === "headers") {
            const O = L - 1;
            j(O), A(O);
          } else if (w === "cells")
            if (z.ctrlKey) {
              const O = N - 1, pe = L - 1;
              M(O), j(pe), S(O, pe);
            } else {
              const O = L - 1;
              j(O), S(y, O);
            }
          break;
        case " ":
          if (z.preventDefault(), w === "headers" && k === "navigate") {
            const O = t[P];
            O && re(O.key);
          } else w === "cells" && k === "navigate" && V(y);
          break;
      }
    }, [
      w,
      k,
      P,
      y,
      L,
      N,
      t,
      S,
      A,
      re,
      V
    ]);
    ze(() => {
      const z = D.current;
      if (z)
        return z.addEventListener("keydown", E), () => z.removeEventListener("keydown", E);
    }, [E]);
    const H = _e(
      "nhsuk-table",
      h,
      {
        "nhsuk-table--responsive": m,
        "nhsuk-table--bordered": g,
        "nhsuk-table--striped": v,
        "nhsuk-table--compact": p === "compact"
      },
      f
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: D,
        className: H,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": u,
        "aria-labelledby": c,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: I, role: "row", children: t.map((z, ae) => {
            const O = n?.find((ce) => ce.key === z.key), pe = !!O, Se = w === "headers" && P === ae;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: _e("sortable-header", {
                  "sortable-header--focused": Se
                }),
                role: "columnheader",
                tabIndex: Se ? 0 : -1,
                onClick: () => re(z.key),
                onKeyDown: (ce) => {
                  (ce.key === "Enter" || ce.key === " ") && (ce.preventDefault(), re(z.key));
                },
                "aria-sort": pe ? O?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: z.label }),
                  pe && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((ce) => ce.key === z.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: O?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              z.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: _, className: "nhsuk-table__body", role: "rowgroup", children: $.map((z, ae) => {
            const O = o === ae, pe = w === "cells" && y === ae;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: _e("data-row", {
                  "data-row--selected": O,
                  "data-row--focused": pe
                }),
                "aria-selected": O,
                children: t.map((Se, ce) => {
                  const de = Se.tableRenderer ? Se.tableRenderer(z) : Se.render ? Se.render(z) : z[Se.key], K = w === "cells" && y === ae && P === ce, ee = () => typeof de == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: de ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: de ? "Yes" : "No" })
                  ] }) : String(de ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: _e("data-cell", {
                        "data-cell--focused": K
                      }),
                      tabIndex: K ? 0 : -1,
                      onClick: () => V(ae),
                      children: ee()
                    },
                    Se.key
                  );
                })
              },
              ae
            );
          }) })
        ]
      }
    );
  }
);
Cp.displayName = "AriaDataGrid";
const Qi = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: u = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const f = Be(null), h = Be(null), g = Be(null), v = ye((w, T) => {
    u || (h.current = T, w.dataTransfer.effectAllowed = "move", w.dataTransfer.setData("text/plain", T));
  }, [u]), m = ye((w, T) => {
    u || h.current === T || (w.preventDefault(), w.dataTransfer.dropEffect = "move", g.current = T);
  }, [u]), p = ye((w, T) => {
    if (u) return;
    w.preventDefault();
    const k = h.current;
    if (!k || k === T) return;
    const b = e.findIndex((N) => N.key === k), L = e.findIndex((N) => N.key === T);
    if (b !== -1 && L !== -1) {
      const N = [...e], [$] = N.splice(b, 1);
      N.splice(L, 0, $), n(N);
    }
    h.current = null, g.current = null;
  }, [u, e, n]), x = ye(() => {
    h.current = null, g.current = null;
  }, []), D = ye((w) => {
    const T = t.find((k) => k.key === w);
    return T ? T.label : w;
  }, [t]), I = ye((w) => ["red", "orange", "blue", "aqua-green", "grey"][w] || "grey", []), _ = ye((w) => {
    if (u) return;
    const T = e.map(
      (k) => k.key === w ? { ...k, direction: k.direction === "asc" ? "desc" : "asc" } : k
    );
    n(T);
  }, [e, n, u]), y = ye((w) => {
    if (u) return;
    const T = e.filter((k) => k.key !== w);
    n(T);
  }, [e, n, u]), M = ye(() => {
    u || n([]);
  }, [n, u]), P = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const w = e.map((T, k) => {
      const b = T.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${D(T.key)} (${b})`;
    });
    if (w.length === 1)
      return `Sorted by: ${w[0]}`;
    if (w.length === 2)
      return `Sorted by: ${w.join(" and ")}`;
    {
      const T = w.pop();
      return `Sorted by: ${w.join(", ")}, and ${T}`;
    }
  }, j = Me(() => {
    const w = ["sort-description"];
    return l && w.push("sort-help"), d && w.push(d), w.join(" ");
  }, [l, d]);
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
        children: P()
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": j,
          children: e.map((w, T) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !u,
              onDragStart: (k) => v(k, w.key),
              onDragOver: (k) => m(k, w.key),
              onDrop: (k) => p(k, w.key),
              onDragEnd: x,
              onClick: () => _(w.key),
              style: { cursor: u ? "default" : "pointer" },
              title: u ? "" : `Click to toggle sort direction. Currently ${w.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": w.key,
              children: /* @__PURE__ */ r.jsx(
                We,
                {
                  color: I(T),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => y(w.key),
                  disabled: u,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${T + 1}`, children: T + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: D(w.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (k) => {
                          k.stopPropagation(), _(w.key);
                        },
                        disabled: u,
                        "aria-label": `Toggle sort direction for ${D(w.key)}. Currently ${w.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${w.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${w.direction}`,
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
            w.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        ft,
        {
          variant: "secondary",
          onClick: M,
          disabled: u,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function Np(e, t) {
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), u = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
        i[c] = e.tabLoadingStates[c], l[c] = e.tabErrors[c], u[c] = e.selectedRows[c];
      return {
        ...e,
        tabLoadingStates: i,
        tabErrors: l,
        selectedRows: u
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
const ts = En(function(t, n) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: u,
    ariaDescription: c,
    className: d = "",
    disabled: f = !1,
    orientation: h = "horizontal",
    id: g,
    isLoading: v = !1,
    loadingComponent: m,
    error: p = null,
    errorComponent: x,
    "data-testid": D,
    actions: I,
    actionsMinGap: _ = 16,
    forceActionsAbove: y = !1
  } = t, P = Be(
    g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, j = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), w = `${P}-description`, T = `${P}-navigation-help`, {
    dataComparator: k = (F, X) => JSON.stringify(F) === JSON.stringify(X),
    filterFunction: b = (F) => F,
    booleanRenderer: L = (F) => F ? "✓" : "✗"
  } = a || {}, N = s !== void 0, $ = s ?? 0, [S, A] = Ee({
    focusArea: "tabs",
    focusedTabIndex: $,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), re = Me(() => ({
    selectedIndex: $,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [$]), [V, E] = bi(Np, re);
  ze(() => {
    const F = V.tabLoadingStates.length, X = o.length;
    F !== X && E({ type: "ADJUST_ARRAYS", payload: { newLength: X } });
  }, [o.length]), ze(() => {
    N && E({ type: "SET_SELECTED_INDEX", payload: $ });
  }, [$, N]), ze(() => {
    A((F) => ({
      ...F,
      focusArea: "tabs",
      focusedTabIndex: V.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [V.selectedIndex]), ze(() => {
    l && l(V.globalSelectedRowData);
  }, [V.globalSelectedRowData, l]);
  const H = ye(
    (F, X) => k(F, X),
    [k]
  ), z = ye(
    (F) => {
      F >= 0 && F < o.length && !o[F].disabled && (E({ type: "SET_SELECTED_INDEX", payload: F }), A((X) => ({
        ...X,
        focusedTabIndex: F,
        focusArea: "tabs"
      })), i?.(F));
    },
    [o, i]
  ), ae = Be(!1), O = ye(
    (F, X) => {
      if (!X?.force && !ae.current && F === 0) {
        ae.current = !0;
        return;
      }
      ae.current = !0, setTimeout(() => {
        const Q = pe.current[F], te = Q?.parentElement;
        if (Q && te) {
          const q = Q.offsetLeft, se = Q.offsetWidth, me = te.clientWidth, ve = q - me / 2 + se / 2;
          try {
            te.scrollTo({
              left: Math.max(0, ve),
              behavior: "smooth"
            });
          } catch {
            Q.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!Q,
          tabListElementExists: !!te
        });
      }, 50);
    },
    []
  ), pe = Be([]), Se = Be([]), ce = ye(
    (F, X) => {
      const Q = V.sortConfig || [], te = Q.find(
        (me) => me.key === X
      );
      let q;
      te ? te.direction === "asc" ? q = Q.map(
        (me) => me.key === X ? { ...me, direction: "desc" } : me
      ) : q = Q.filter(
        (me) => me.key !== X
      ) : q = [...Q, { key: X, direction: "asc" }], E({
        type: "SET_SORT",
        payload: q
      }), o[F].onSort?.(X);
    },
    [V.sortConfig, o]
  ), de = ye(
    (F) => {
      setTimeout(() => {
        const X = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] th:nth-child(${F + 1})`
        );
        X && X.focus();
      }, 0);
    },
    [V.selectedIndex]
  ), K = ye(
    (F) => L(F),
    [L]
  ), ee = ye(
    (F, X) => {
      setTimeout(() => {
        const Q = document.querySelector(
          `[data-tab-panel="${V.selectedIndex}"] tbody tr:nth-child(${F + 1}) td:nth-child(${X + 1})`
        );
        Q && Q.focus();
      }, 0);
    },
    [V.selectedIndex]
  );
  ze(() => {
    S.isGridActive && (S.focusArea === "headers" ? setTimeout(() => {
      de(S.focusedHeaderIndex);
    }, 0) : S.focusArea === "cells" && setTimeout(() => {
      ee(
        S.focusedRowIndex,
        S.focusedColumnIndex
      );
    }, 0));
  }, [
    S.focusArea,
    S.isGridActive,
    S.focusedHeaderIndex,
    S.focusedRowIndex,
    S.focusedColumnIndex,
    de,
    ee
  ]), ze(() => {
    O(V.selectedIndex);
  }, [V.selectedIndex, O]);
  const ue = ye(
    (F, X) => {
      const { key: Q } = F, te = o[V.selectedIndex], q = te?.columns.length || 0;
      switch (Q) {
        case "ArrowLeft":
          F.preventDefault();
          const se = Math.max(0, X - 1);
          A((le) => ({
            ...le,
            focusedHeaderIndex: se
          })), de(se);
          break;
        case "ArrowRight":
          F.preventDefault();
          const me = Math.min(q - 1, X + 1);
          A((le) => ({
            ...le,
            focusedHeaderIndex: me
          })), de(me);
          break;
        case "ArrowUp":
          F.preventDefault(), A((le) => ({
            ...le,
            focusArea: "tabs",
            focusedTabIndex: V.selectedIndex
          })), O(V.selectedIndex), pe.current[V.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          F.preventDefault(), A((le) => ({
            ...le,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: X,
            isGridActive: !0
          }));
          break;
        case "Home":
          F.preventDefault(), A((le) => ({ ...le, focusedHeaderIndex: 0 })), de(0);
          break;
        case "End":
          F.preventDefault();
          const ve = q - 1;
          A((le) => ({
            ...le,
            focusedHeaderIndex: ve
          })), de(ve);
          break;
        case "Enter":
        case " ":
          F.preventDefault();
          const oe = te?.columns[X]?.key;
          oe && ce(V.selectedIndex, oe);
          break;
      }
    },
    [
      o,
      V.selectedIndex,
      ce,
      A,
      de,
      ee,
      pe
    ]
  ), C = ye(
    (F, X, Q) => {
      const { key: te } = F, q = o[V.selectedIndex], se = q?.data.length || 0, me = q?.columns.length || 0;
      switch (te) {
        case "ArrowUp":
          if (F.preventDefault(), X === 0)
            A((fe) => ({
              ...fe,
              focusArea: "headers",
              focusedHeaderIndex: Q,
              isGridActive: !1
            })), de(Q);
          else {
            const fe = X - 1;
            A((De) => ({
              ...De,
              focusedRowIndex: fe
            })), ee(fe, Q);
          }
          break;
        case "ArrowDown":
          F.preventDefault();
          const ve = Math.min(se - 1, X + 1);
          A((fe) => ({
            ...fe,
            focusedRowIndex: ve
          })), ee(ve, Q);
          break;
        case "ArrowLeft":
          F.preventDefault();
          const oe = Math.max(0, Q - 1);
          A((fe) => ({
            ...fe,
            focusedColumnIndex: oe
          })), ee(X, oe);
          break;
        case "ArrowRight":
          F.preventDefault();
          const le = Math.min(me - 1, Q + 1);
          A((fe) => ({
            ...fe,
            focusedColumnIndex: le
          })), ee(X, le);
          break;
        case "Home":
          F.preventDefault(), F.ctrlKey ? (A((fe) => ({
            ...fe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ee(0, 0)) : (A((fe) => ({ ...fe, focusedColumnIndex: 0 })), ee(X, 0));
          break;
        case "End":
          if (F.preventDefault(), F.ctrlKey) {
            const fe = se - 1, De = me - 1;
            A((xe) => ({
              ...xe,
              focusedRowIndex: fe,
              focusedColumnIndex: De
            })), ee(fe, De);
          } else {
            const fe = me - 1;
            A((De) => ({
              ...De,
              focusedColumnIndex: fe
            })), ee(X, fe);
          }
          break;
        case "Enter":
        case " ":
          if (F.preventDefault(), q && q.data[X]) {
            const fe = q.data.some(
              (je) => "ews_data" in je
            ) ? b(q.data, V.filters) : q.data, De = V.sortConfig;
            let xe = fe;
            if (De && De.length > 0 && (xe = [...fe].sort((je, Ae) => {
              for (const { key: tt, direction: wt } of De) {
                let _t = je[tt], Ge = Ae[tt];
                const Ye = q.columns.find(
                  (rt) => rt.key === tt
                );
                if (Ye?.tableRenderer ? (_t = Ye.tableRenderer(je), Ge = Ye.tableRenderer(Ae)) : Ye?.render && (_t = Ye.render(je), Ge = Ye.render(Ae)), _t == null && Ge == null) continue;
                if (_t == null) return wt === "asc" ? -1 : 1;
                if (Ge == null) return wt === "asc" ? 1 : -1;
                let qe = 0;
                if (typeof _t == "number" && typeof Ge == "number" ? qe = _t - Ge : qe = String(_t).localeCompare(
                  String(Ge),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), qe !== 0)
                  return wt === "asc" ? qe : -qe;
              }
              return 0;
            })), xe[X]) {
              const je = xe[X], tt = V.globalSelectedRowData && H(V.globalSelectedRowData, je) ? null : je;
              E({
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
      V.selectedIndex,
      V.filters,
      V.sortConfig,
      b,
      H,
      E,
      A,
      de,
      ee
    ]
  ), B = ye(
    (F, X) => b(F, X),
    [b]
  );
  if (xi(
    n,
    () => ({
      selectTab: (F) => {
        F >= 0 && F < o.length && (E({ type: "SET_SELECTED_INDEX", payload: F }), i?.(F));
      },
      refreshData: (F) => {
        console.log("Refreshing data for tab:", F ?? "all");
      },
      exportData: (F) => {
        const X = F ?? V.selectedIndex, Q = o[X];
        return Q ? Q.data : [];
      },
      getSelectedRows: (F) => V.globalSelectedRowData ? [] : [],
      clearSelection: (F) => {
        E({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (F) => {
        E({ type: "SET_FILTERS", payload: F });
      }
    }),
    [V.selectedIndex, V.selectedRows, o, i]
  ), v)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`,
        "data-testid": D,
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
  if (p)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`,
        "data-testid": D,
        children: x || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: p })
        ] })
      }
    );
  const W = Be(null), ne = Be(null), Z = Be(null), [ie, be] = Ee(!0);
  ze(() => {
    if (!I) {
      be(!1);
      return;
    }
    if (y) {
      be(!1);
      return;
    }
    function F() {
      if (!W.current || !ne.current || !Z.current) return;
      const te = W.current.clientWidth, q = Array.from(
        ne.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), se = q.reduce((le, fe) => le + fe.offsetWidth, 0), me = Z.current.offsetWidth, ve = Math.max(8 * (q.length - 1), 0), oe = se + ve + me + _ <= te;
      be(oe);
    }
    const X = requestAnimationFrame(() => F()), Q = new ResizeObserver(() => F());
    return W.current && Q.observe(W.current), ne.current && Q.observe(ne.current), () => {
      cancelAnimationFrame(X), Q.disconnect();
    };
  }, [I, _, y, o.length]);
  const Ce = Z, he = ye(() => Ce.current ? Array.from(
    Ce.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((F) => !F.hasAttribute("disabled")) : [], []), R = ye(
    (F) => {
      const X = he();
      if (!X.length) return;
      const Q = Math.max(0, Math.min(F, X.length - 1));
      X[Q].focus(), A((te) => ({ ...te, focusArea: "actions", focusedActionIndex: Q }));
    },
    [he]
  ), U = ye(() => R(0), [R]), G = ye(
    (F, X) => {
      const { key: Q } = F, te = o.length - 1;
      switch (Q) {
        case "ArrowUp": {
          I && !ie && (F.preventDefault(), U());
          break;
        }
        case "ArrowLeft": {
          F.preventDefault();
          const q = X > 0 ? X - 1 : te;
          z(q), O(q), pe.current[q]?.focus();
          break;
        }
        case "ArrowRight": {
          if (F.preventDefault(), X === te && I && ie) {
            U();
            return;
          }
          const q = X < te ? X + 1 : 0;
          z(q), O(q), pe.current[q]?.focus();
          break;
        }
        case "ArrowDown": {
          F.preventDefault(), A((q) => ({
            ...q,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          F.preventDefault(), z(0), O(0), pe.current[0]?.focus();
          break;
        }
        case "End": {
          F.preventDefault(), z(te), O(te), pe.current[te]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          F.preventDefault(), z(X);
          break;
        }
        case "Tab": {
          !F.shiftKey && X === te && I && ie && U();
          break;
        }
      }
    },
    [o.length, z, O, I, ie, U]
  ), J = ye((F) => {
    const { key: X } = F, Q = he();
    if (!Q.length) return;
    const te = Q.findIndex((q) => q === document.activeElement);
    switch (X) {
      case "ArrowLeft": {
        if (ie)
          if (te > 0)
            F.preventDefault(), R(te - 1);
          else {
            F.preventDefault();
            const q = o.length - 1;
            z(q), O(q), pe.current[q]?.focus(), A((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: q }));
          }
        break;
      }
      case "ArrowRight": {
        ie && (te < Q.length - 1 ? (F.preventDefault(), R(te + 1)) : (F.preventDefault(), z(0), O(0), pe.current[0]?.focus(), A((q) => ({ ...q, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ie)
          F.preventDefault(), A((q) => ({ ...q, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          F.preventDefault();
          const q = V.selectedIndex;
          pe.current[q]?.focus(), A((se) => ({ ...se, focusArea: "tabs", focusedTabIndex: q }));
        }
        break;
      }
    }
  }, [he, ie, R, o.length, z, O, V.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${d}`,
      id: g,
      "data-testid": D,
      ref: W,
      children: [
        c && !j && /* @__PURE__ */ r.jsx("div", { id: w, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: T,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          Qi,
          {
            sortConfig: V.sortConfig || [],
            columns: o.flatMap(
              (F) => F.columns.map((X) => ({ key: X.key, label: X.label }))
            ).filter(
              (F, X, Q) => Q.findIndex((te) => te.key === F.key) === X
              // Remove duplicates
            ),
            onSortChange: (F) => {
              E({ type: "SET_SORT", payload: F });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        I && !ie && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: Z,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: J,
            children: I
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ie ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": u,
              "aria-describedby": c ? j ? c : w : T,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: ne,
              children: o.map((F, X) => {
                const Q = X === V.selectedIndex, te = F.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${F.id}`,
                    "aria-controls": `panel-${F.id}`,
                    "aria-selected": Q,
                    "aria-disabled": te,
                    tabIndex: Q ? 0 : -1,
                    ref: (q) => {
                      pe.current[X] = q;
                    },
                    onClick: () => z(X),
                    onKeyDown: (q) => G(q, X),
                    disabled: te,
                    className: [
                      "aria-tabs-datagrid__tab",
                      Q ? "aria-tabs-datagrid__tab--selected" : "",
                      te ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: F.label }),
                      V.tabLoadingStates[X] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      V.tabErrors[X] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  F.id
                );
              })
            }
          ),
          I && ie && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: Z,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: J,
              children: I
            }
          )
        ] }),
        o.map((F, X) => {
          const Q = X === V.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${F.id}`,
              "aria-labelledby": `tab-${F.id}`,
              tabIndex: 0,
              hidden: !Q,
              ref: (te) => {
                Se.current[X] = te;
              },
              className: `aria-tabs-datagrid__panel ${F.className || ""}`,
              "data-tab-panel": X,
              children: Q && (() => {
                const te = F.data.some(
                  (se) => "ews_data" in se
                ) ? B(F.data, V.filters) : F.data, q = Me(() => {
                  const se = V.sortConfig;
                  return !se || se.length === 0 ? te : [...te].sort((me, ve) => {
                    for (const { key: oe, direction: le } of se) {
                      let fe = me[oe], De = ve[oe];
                      const xe = F.columns.find(
                        (Ae) => Ae.key === oe
                      );
                      if (xe?.tableRenderer ? (fe = xe.tableRenderer(me), De = xe.tableRenderer(ve)) : xe?.render && (fe = xe.render(me), De = xe.render(ve)), fe == null && De == null) continue;
                      if (fe == null) return 1;
                      if (De == null) return -1;
                      let je = 0;
                      if (typeof fe == "number" && typeof De == "number" ? je = fe - De : typeof fe == "boolean" && typeof De == "boolean" ? je = fe === De ? 0 : fe ? 1 : -1 : je = String(fe).localeCompare(
                        String(De),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), je !== 0)
                        return le === "asc" ? je : -je;
                    }
                    return 0;
                  });
                }, [te, V.sortConfig, F.columns]);
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
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: F.columns.map((se, me) => {
                        const ve = V.sortConfig?.find(
                          (fe) => fe.key === se.key
                        ), oe = !!ve, le = S.focusArea === "headers" && S.focusedHeaderIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${le ? "sortable-header--focused" : ""} ${oe ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: le ? 0 : -1,
                            onClick: () => ce(X, se.key),
                            onKeyDown: (fe) => ue(fe, me),
                            "aria-sort": oe ? ve?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: se.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${oe ? `sort-indicator--${ve?.direction}` : ""}`,
                                  children: [
                                    V.sortConfig && V.sortConfig.length > 0 && V.sortConfig.findIndex(
                                      (fe) => fe.key === se.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${V.sortConfig.findIndex((fe) => fe.key === se.key) + 1}`,
                                        "data-priority": V.sortConfig.findIndex(
                                          (fe) => fe.key === se.key
                                        ) + 1,
                                        title: `Sort priority: ${V.sortConfig.findIndex((fe) => fe.key === se.key) + 1}`,
                                        children: V.sortConfig.findIndex(
                                          (fe) => fe.key === se.key
                                        ) + 1
                                      }
                                    ),
                                    oe && /* @__PURE__ */ r.jsx(
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
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: q.map((se, me) => {
                        const ve = V.globalSelectedRowData && H(V.globalSelectedRowData, se), oe = S.focusArea === "cells" && S.focusedRowIndex === me;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ve ? "data-row--selected" : ""} ${oe ? "data-row--focused" : ""}`,
                            "aria-selected": ve,
                            children: F.columns.map((le, fe) => {
                              const De = se[le.key];
                              let xe;
                              le.tableRenderer ? xe = le.tableRenderer(se) : le.render ? xe = le.render(se) : xe = De;
                              const je = S.focusArea === "cells" && S.focusedRowIndex === me && S.focusedColumnIndex === fe, Ae = () => {
                                if (le.customRenderer) {
                                  const tt = le.customRenderer(
                                    De,
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
                                return typeof De == "boolean" && xe === De ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  K(De),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: De ? "Yes" : "No" })
                                ] }) : xt.isValidElement(xe) || typeof xe != "object" ? xe ?? "" : xe;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${je ? "data-cell--focused" : ""}`,
                                  tabIndex: je ? 0 : -1,
                                  onClick: () => {
                                    const wt = V.globalSelectedRowData && H(
                                      V.globalSelectedRowData,
                                      se
                                    ) ? null : se;
                                    E({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: wt
                                    });
                                  },
                                  onKeyDown: (tt) => C(tt, me, fe),
                                  children: Ae()
                                },
                                le.key
                              );
                            })
                          },
                          me
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
}), pr = {
  asc: "↑",
  desc: "↓"
}, jp = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Ra(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function Dp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Tp(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function $p(e, t) {
  const n = t.find((o) => o.id === e), a = Dp(t);
  return n ? n.priority < a : !1;
}
const yv = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: u = "Sort configuration",
  ariaDescribedBy: c
}) => {
  const d = Me(() => jp(e), [e]), f = ye((D) => {
    if (l) return;
    const I = e.map(
      (_) => _.id === D ? { ..._, direction: _.direction === "asc" ? "desc" : "asc" } : _
    );
    t(I);
  }, [e, t, l]), h = ye((D) => {
    if (l) return;
    const I = e.findIndex((y) => y.id === D);
    if (I <= 0) return;
    const _ = [...e];
    [_[I], _[I - 1]] = [_[I - 1], _[I]], t(Ra(_));
  }, [e, t, l]), g = ye((D) => {
    if (l) return;
    const I = e.findIndex((y) => y.id === D);
    if (I >= e.length - 1 || I === -1) return;
    const _ = [...e];
    [_[I], _[I + 1]] = [_[I + 1], _[I]], t(Ra(_));
  }, [e, t, l]), v = ye((D) => {
    if (l) return;
    const I = e.filter((_) => _.id !== D);
    t(Ra(I));
  }, [e, t, l]), m = ye(() => {
    l || t([]);
  }, [t, l]), p = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const D = d.map((I, _) => {
      const y = I.direction === "asc" ? "ascending" : "descending";
      return `${_ + 1}. ${I.label} (${y})`;
    });
    if (D.length === 1)
      return `Sorted by: ${D[0]}`;
    if (D.length === 2)
      return `Sorted by: ${D.join(" and ")}`;
    {
      const I = D.pop();
      return `Sorted by: ${D.join(", ")}, and ${I}`;
    }
  }, x = Me(() => {
    const D = ["sort-description"];
    return i && D.push("sort-help"), c && D.push(c), D.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: `sort-status-control sort-status-control--empty ${n}`, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: p()
    }
  ) }) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: p()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": u,
        "aria-describedby": x,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((D) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                We,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(D.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: D.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: D.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(D.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${D.label}. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: D.direction === "asc" ? pr.asc : pr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(D.id),
                          disabled: l || !Tp(D.id, e),
                          "aria-label": `Move ${D.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g(D.id),
                          disabled: l || !$p(D.id, e),
                          "aria-label": `Move ${D.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            D.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      ft,
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
      pr.asc,
      "/",
      pr.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Vs = (e, t) => t.map((n) => ({
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
})), ns = [
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
], Ip = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Mp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, Lp = (e) => {
  if (typeof e == "boolean") {
    const n = ns.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ns.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, Pp = (e) => `${e.name}-${e.bed_name}`, Fp = () => ({
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
}), wv = (e) => {
  const t = Fp();
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
}, Ap = {
  dataComparator: Ip,
  filterFunction: Mp,
  booleanRenderer: Lp,
  getDataId: Pp
};
function Oo(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: u,
    fieldRenderers: c = {},
    classPrefix: d = "adaptive-card"
  } = n, f = t.find((I) => I.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", g = () => o.filter((_) => !i.includes(_) && e[_]).slice(0, 3).map((_) => {
    const y = t.find((w) => w.key === _), M = e[_], P = c[_] ? c[_](M, e) : y?.cardRenderer ? y.cardRenderer(e) : y?.render ? y.render(e) : M;
    return `${y?.label || _}: ${P}`;
  }).join(" • "), v = () => s.length === 0 ? null : s.filter((I) => e[I.fieldKey] !== void 0).map((I) => {
    const _ = e[I.fieldKey], y = I.render ? I.render(_, e) : _;
    return `<span class="nhsuk-tag ${Rp(I, _)}">${y}</span>`;
  }).join(""), m = () => u ? u(e) : l?.(e) === "high" ? "primary" : "default", p = v(), x = g(), D = p ? `${x}${p ? `<div class="adaptive-card__badges">${p}</div>` : ""}` : x;
  return {
    variant: m(),
    heading: String(h),
    descriptionHtml: D,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${h}`
  };
}
function Rp(e, t) {
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
const Ep = {
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
}, el = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, u = e.ward_name, c = e.bed_name, d = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${u}, Bed ${c}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ r.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: d !== void 0 && /* @__PURE__ */ r.jsxs(
            We,
            {
              color: Hp(al(d)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                d
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ r.jsx("dd", { children: u })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ r.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Specialty" }),
            /* @__PURE__ */ r.jsx("dd", { children: f })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ r.jsx("dd", { children: h })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            ft,
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
            ft,
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
            ft,
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
}, tl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        We,
        {
          color: Op(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        We,
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
      ft,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      ft,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), nl = ({
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
        We,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        We,
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
      ft,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      ft,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), rl = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, u = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, d = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Bp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            We,
            {
              color: "blue",
              className: "healthcare-card__avpu",
              children: [
                "AVPU: ",
                f.toUpperCase()
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
          u !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              u,
              "°C"
            ] })
          ] }),
          c !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-value", children: c })
          ] }),
          d !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              d,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            ft,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (h) => {
                h.stopPropagation(), n?.("view-trend", e);
              },
              children: "Trend"
            }
          ),
          /* @__PURE__ */ r.jsx(
            ft,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (h) => {
                h.stopPropagation(), n?.("record-new", e);
              },
              children: "Record New"
            }
          )
        ] })
      ]
    }
  );
};
function al(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Bp(e) {
  return al(e);
}
function Hp(e) {
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
function Op(e) {
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
const Up = [
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
], sl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Wp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, zp = (e) => sl(e) === "high" || e.status === "urgent" ? "primary" : "default", Vp = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Gp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Up,
  hiddenFields: [],
  getPriority: sl,
  getStatus: Wp,
  getVariant: zp,
  fieldRenderers: Vp,
  classPrefix: "adaptive-card--healthcare"
}, Yp = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      el,
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
      tl,
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
      nl,
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
      rl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, qp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Uo = {
  name: "healthcare",
  defaultCardConfig: Gp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Yp,
  fieldTypes: qp
};
function Wo(e) {
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
function zo(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Xp(e, t) {
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
      const { newLength: s } = t.payload, i = new Array(s).fill(!1), l = new Array(s).fill(null), u = new Array(s).fill([]);
      for (let c = 0; c < Math.min(e.tabLoadingStates.length, s); c++)
        i[c] = e.tabLoadingStates[c], l[c] = e.tabErrors[c], u[c] = e.selectedRows[c];
      return {
        ...e,
        tabLoadingStates: i,
        tabErrors: l,
        selectedRows: u
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
function Kp(e, t) {
  const [n, a] = Ee("cards");
  return ze(() => {
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
function Jp(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Zp(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...Ep, ...n };
  if (a && a.cardTemplates) {
    const s = Jp(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Oo(e, t, o);
}
const _v = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  topActions: s,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: u,
  // Standard AriaTabsDataGrid props
  tabPanels: c,
  dataConfig: d,
  selectedIndex: f,
  onTabChange: h,
  ariaLabel: g = "Data grid",
  ariaDescription: v,
  orientation: m = "horizontal",
  id: p,
  disabled: x = !1,
  className: D,
  ...I
}) => {
  const _ = Kp(e, t), y = f !== void 0, M = f ?? 0, P = Me(() => {
    if (c.some(
      (U) => U.data && U.data.length > 0 && zo(U.data)
    )) {
      const U = Wo(n);
      return {
        ...Uo.defaultCardConfig,
        ...U
      };
    } else
      return Wo(n);
  }, [n, c]), j = Me(() => c.some(
    (U) => U.data && U.data.length > 0 && zo(U.data)
  ) ? Uo : void 0, [c]), w = Me(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, c.length]), [T, k] = bi(Xp, w), b = Be([]), L = Be([]), N = Be([]), $ = Be(null), [S, A] = Ee({
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
  }), re = ye((R) => {
    if (!R.current)
      return { columns: 1, rows: 0 };
    const U = R.current, G = U.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (G.length === 0)
      return { columns: 1, rows: 0 };
    const J = U.offsetWidth, X = G[0].offsetWidth, Q = Math.floor(J / X) || 1, te = Math.ceil(G.length / Q);
    return { columns: Q, rows: te };
  }, []), V = ye((R, U) => ({
    row: Math.floor(R / U),
    col: R % U
  }), []), E = ye((R, U, G) => R * G + U, []), H = ye((R, U, G, J) => {
    const { row: F, col: X } = V(R, J);
    let Q = F, te = X;
    switch (U) {
      case "up":
        Q = Math.max(0, F - 1);
        break;
      case "down":
        Q = Math.min(Math.floor((G - 1) / J), F + 1);
        break;
      case "left":
        te = Math.max(0, X - 1);
        break;
      case "right":
        te = Math.min(J - 1, X + 1);
        break;
    }
    const q = E(Q, te, J);
    return Math.min(q, G - 1);
  }, [V, E]);
  ze(() => {
    S.isCardNavigationActive && S.focusedCardElementIndex >= 0 && S.cardElements.length > 0 && setTimeout(() => {
      const R = S.cardElements[S.focusedCardElementIndex];
      R && (R.element.focus(), R.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [S.isCardNavigationActive, S.focusedCardElementIndex, S.cardElements.length]), ze(() => {
    const R = () => {
      if (_ === "cards" && $.current) {
        const { columns: J, rows: F } = re($);
        A((X) => ({
          ...X,
          gridColumns: J,
          gridRows: F
        }));
      }
    }, U = setTimeout(R, 200), G = () => {
      setTimeout(R, 100);
    };
    return window.addEventListener("resize", G), () => {
      clearTimeout(U), window.removeEventListener("resize", G);
    };
  }, [_, c, re]), ze(() => {
    const R = T.tabLoadingStates.length, U = c.length;
    R !== U && k({ type: "ADJUST_ARRAYS", payload: { newLength: U } });
  }, [c.length, T.tabLoadingStates.length]), ze(() => {
    y && f !== T.selectedIndex && k({ type: "SET_SELECTED_INDEX", payload: f });
  }, [y, f, T.selectedIndex]);
  const z = ye((R) => {
    R >= 0 && R < c.length && !c[R].disabled && (k({ type: "SET_SELECTED_INDEX", payload: R }), h?.(R));
  }, [c, h]), ae = ye((R) => {
    console.log("Card selected:", R), k({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: R
    });
  }, []), O = ye((R) => {
    const U = L.current[R];
    U && (U.focus(), U.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), pe = ye((R) => {
    const U = L.current[R];
    if (!U) return [];
    const G = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), J = U.querySelectorAll(G);
    return Array.from(J).map((F, X) => ({
      id: F.id || `card-${R}-element-${X}`,
      element: F,
      label: F.getAttribute("aria-label") || F.textContent?.trim() || F.getAttribute("title") || `Element ${X + 1}`,
      type: F.tagName.toLowerCase() === "button" ? "button" : F.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(F.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), Se = Be(null), ce = ye((R) => {
    const U = Se.current;
    if (!U) return;
    const G = document.createElement("div");
    G.setAttribute("aria-live", "polite"), G.setAttribute("aria-atomic", "true"), G.className = "sr-only", G.textContent = R, U.appendChild(G), setTimeout(() => {
      U.contains(G) && U.removeChild(G);
    }, 1e3);
  }, []), de = ye((R) => {
    const U = R.filter((J) => J.sortable !== !1), G = [
      { value: "", label: "Sort by..." }
    ];
    return U.forEach((J) => {
      const F = J.label || J.key;
      J.key === "name" ? G.push(
        { value: `${J.key}-asc`, label: `${F} (A-Z)` },
        { value: `${J.key}-desc`, label: `${F} (Z-A)` }
      ) : J.key === "ews_score" || J.key.includes("score") ? G.push(
        { value: `${J.key}-desc`, label: `${F} (High-Low)` },
        { value: `${J.key}-asc`, label: `${F} (Low-High)` }
      ) : J.key === "age" || J.key.includes("date") || J.key.includes("time") ? G.push(
        { value: `${J.key}-desc`, label: `${F} (Oldest-Youngest)` },
        { value: `${J.key}-asc`, label: `${F} (Youngest-Oldest)` }
      ) : G.push(
        { value: `${J.key}-asc`, label: `${F} (A-Z)` },
        { value: `${J.key}-desc`, label: `${F} (Z-A)` }
      );
    }), G;
  }, []), K = ye((R, U) => U ? [...R].sort((G, J) => {
    const F = G[U.key], X = J[U.key];
    if (F == null && X == null) return 0;
    if (F == null) return 1;
    if (X == null) return -1;
    const Q = Number(F), te = Number(X);
    if (!isNaN(Q) && !isNaN(te))
      return U.direction === "asc" ? Q - te : te - Q;
    const q = String(F).toLowerCase(), se = String(X).toLowerCase(), me = q.localeCompare(se);
    return U.direction === "asc" ? me : -me;
  }) : R, []), ee = ye((R) => {
    if (!R) {
      A((q) => ({ ...q, cardSortConfig: null })), ce("Card sorting cleared");
      return;
    }
    const [U, G] = R.split("-"), J = { key: U, direction: G };
    A((q) => ({ ...q, cardSortConfig: J }));
    const Q = c[T.selectedIndex]?.columns.find((q) => q.key === U)?.label || U;
    ce(`Cards sorted by ${Q} in ${G === "asc" ? "ascending" : "descending"} order`);
  }, [c, T.selectedIndex, ce]), ue = ye((R) => {
    const J = c[T.selectedIndex]?.columns.find((X) => X.key === R.key)?.label || R.key, F = R.direction === "asc" ? "ascending" : "descending";
    return `${J} (${F})`;
  }, [c, T.selectedIndex]), C = ye((R) => {
    const U = c[T.selectedIndex];
    if (o) {
      const G = T.sortConfig;
      return !G || G.length === 0 ? R : [...R].sort((J, F) => {
        for (const { key: X, direction: Q } of G) {
          let te = J[X], q = F[X];
          const se = U?.columns.find((De) => De.key === X);
          if (se?.cardRenderer ? (te = se.cardRenderer(J), q = se.cardRenderer(F)) : se?.render && (te = se.render(J), q = se.render(F)), te == null && q == null) continue;
          if (te == null) return Q === "asc" ? -1 : 1;
          if (q == null) return Q === "asc" ? 1 : -1;
          const me = Number(te), ve = Number(q);
          if (!isNaN(me) && !isNaN(ve)) {
            const De = me - ve;
            if (De !== 0) return Q === "asc" ? De : -De;
            continue;
          }
          const oe = String(te).toLowerCase(), le = String(q).toLowerCase(), fe = oe.localeCompare(le);
          if (fe !== 0) return Q === "asc" ? fe : -fe;
        }
        return 0;
      });
    } else
      return K(R, S.cardSortConfig);
  }, [o, T.sortConfig, S.cardSortConfig, K, c, T.selectedIndex]), B = ye((R, U) => {
    const G = pe(R), J = G[U];
    if (J) {
      J.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const F = `Focused on ${J.label}, ${J.type} ${U + 1} of ${G.length} within card`;
      ce(F);
    }
  }, [pe, ce]), W = ye((R) => {
    b.current[R]?.focus();
  }, []), ne = ye(() => {
    const R = N.current[0];
    if (!R) return [];
    const U = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), G = R.querySelectorAll(U);
    return Array.from(G);
  }, []), Z = ye((R) => {
    if (R === 0) {
      const U = N.current[0], G = U?.querySelector(".sort-controls-row");
      if (G) {
        G.setAttribute("tabindex", "-1"), G.focus();
        const F = `Sort controls group with ${ne().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        ce(F);
      } else U && U.focus();
    } else {
      const U = ne(), G = R - 1, J = U[G];
      if (J) {
        J.focus();
        const F = J.tagName.toLowerCase() === "select", X = J.tagName.toLowerCase() === "button", Q = F ? "dropdown" : X ? "button" : "control", te = F ? ". Use Space key to open dropdown" : "", q = `${Q} ${G + 1} of ${U.length}${te}`;
        ce(q);
      }
    }
  }, [ne, ce]), ie = ye((R, U) => {
    const { key: G } = R, J = c[T.selectedIndex], F = J?.data.length || 0;
    if (G === "ArrowLeft" && R.shiftKey) {
      R.preventDefault(), R.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (G === "ArrowRight" && R.shiftKey) {
      R.preventDefault(), R.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!S.isCardNavigationActive) {
      switch (G) {
        case "ArrowUp":
          if (R.preventDefault(), U === 0)
            A((q) => ({ ...q, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), Z(0);
          else {
            const q = H(U, "up", F, S.gridColumns);
            q !== U && (A((se) => ({ ...se, focusedCardIndex: q })), O(q), ce(`Moved to card ${q + 1} of ${F}`));
          }
          break;
        case "ArrowDown":
          R.preventDefault();
          const X = H(U, "down", F, S.gridColumns);
          X !== U && (A((q) => ({ ...q, focusedCardIndex: X })), O(X), ce(`Moved to card ${X + 1} of ${F}`));
          break;
        case "ArrowLeft":
          R.preventDefault();
          const Q = H(U, "left", F, S.gridColumns);
          Q !== U ? (A((q) => ({ ...q, focusedCardIndex: Q })), O(Q), ce(`Moved to card ${Q + 1} of ${F}`)) : T.selectedIndex > 0 && (k({ type: "SET_SELECTED_INDEX", payload: T.selectedIndex - 1 }), A((q) => ({ ...q, focusArea: "tabs" })), setTimeout(() => W(T.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          R.preventDefault();
          const te = H(U, "right", F, S.gridColumns);
          te !== U ? (A((q) => ({ ...q, focusedCardIndex: te })), O(te), ce(`Moved to card ${te + 1} of ${F}`)) : T.selectedIndex < c.length - 1 && (k({ type: "SET_SELECTED_INDEX", payload: T.selectedIndex + 1 }), A((q) => ({ ...q, focusArea: "tabs" })), setTimeout(() => W(T.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (J?.data[U]) {
            R.preventDefault(), A((se) => ({
              ...se,
              selectedCardIndex: U
            }));
            const q = pe(U);
            q.length > 0 ? (A((se) => ({
              ...se,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: q,
              selectedCardIndex: U
              // Ensure selection is maintained
            })), ce(`Card ${U + 1} selected and navigation activated. ${q.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : ce(`Card ${U + 1} selected.`);
          }
          break;
        case " ":
          if (J?.data[U]) {
            R.preventDefault(), A((se) => ({
              ...se,
              selectedCardIndex: se.selectedCardIndex === U ? -1 : U
            }));
            const q = S.selectedCardIndex === U;
            ce(`Card ${U + 1} ${q ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (G) {
      case "ArrowUp":
      case "ArrowLeft":
        R.preventDefault();
        const X = Math.max(0, S.focusedCardElementIndex - 1);
        A((se) => ({ ...se, focusedCardElementIndex: X })), B(U, X);
        break;
      case "ArrowDown":
      case "ArrowRight":
        R.preventDefault();
        const Q = Math.min(S.cardElements.length - 1, S.focusedCardElementIndex + 1);
        A((se) => ({ ...se, focusedCardElementIndex: Q })), B(U, Q);
        break;
      case "Enter":
        R.preventDefault();
        const te = S.cardElements[S.focusedCardElementIndex];
        te && (te.element.click(), ce(`Activated ${te.label}`));
        break;
      case " ":
        R.preventDefault();
        const q = S.cardElements[S.focusedCardElementIndex];
        if (q) {
          const se = new MouseEvent("dblclick", { bubbles: !0 });
          q.element.dispatchEvent(se), ce(`Double-clicked ${q.label}`);
        }
        break;
      case "Escape":
        R.preventDefault(), A((se) => ({
          ...se,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => O(U), 0), ce("Exited card navigation, returned to card level");
        break;
      case "Home":
        R.preventDefault(), S.cardElements.length > 0 && (A((se) => ({ ...se, focusedCardElementIndex: 0 })), B(U, 0));
        break;
      case "End":
        if (R.preventDefault(), S.cardElements.length > 0) {
          const se = S.cardElements.length - 1;
          A((me) => ({ ...me, focusedCardElementIndex: se })), B(U, se);
        }
        break;
    }
  }, [S, T.selectedIndex, c, ae, O, W, A, pe, B, ce]), be = ye((R) => {
    const U = b.current[R], G = U?.parentElement;
    if (!U || !G) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const J = U.getBoundingClientRect(), F = G.getBoundingClientRect();
    J.left >= F.left && J.right <= F.right || (console.log("Tab not visible, scrolling into view (mobile)"), U.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Ce = ye((R, U) => {
    if (_ !== "cards")
      return;
    const { key: G } = R;
    switch (G) {
      case "ArrowLeft":
        R.preventDefault();
        const J = U > 0 ? U - 1 : c.length - 1;
        z(J), A((te) => ({ ...te, focusedTabIndex: J })), b.current[J]?.focus(), be(J);
        break;
      case "ArrowRight":
        R.preventDefault();
        const F = U < c.length - 1 ? U + 1 : 0;
        z(F), A((te) => ({ ...te, focusedTabIndex: F })), b.current[F]?.focus(), be(F);
        break;
      case "ArrowDown":
        R.preventDefault();
        const X = c[T.selectedIndex];
        X && X.columns && X.columns.length > 0 ? (A((te) => ({
          ...te,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), Z(0)) : (A((te) => ({
          ...te,
          focusArea: "cards",
          focusedCardIndex: 0
        })), O(0));
        break;
      case "Home":
        R.preventDefault(), z(0), A((te) => ({ ...te, focusedTabIndex: 0 })), b.current[0]?.focus(), be(0);
        break;
      case "End":
        R.preventDefault();
        const Q = c.length - 1;
        z(Q), A((te) => ({ ...te, focusedTabIndex: Q })), b.current[Q]?.focus(), be(Q);
        break;
      case "Enter":
      case " ":
        R.preventDefault(), z(U);
        break;
    }
  }, [c.length, z, _, O, A, be]), he = ye((R, U) => {
    if (_ !== "cards")
      return;
    const { key: G } = R, J = c[T.selectedIndex];
    if (U === 0 && !S.isSortControlsActive) {
      switch (G) {
        case "ArrowUp":
          R.preventDefault(), A((X) => ({
            ...X,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), W(T.selectedIndex);
          break;
        case "ArrowDown":
          R.preventDefault(), J?.data && J.data.length > 0 && (A((X) => ({
            ...X,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), O(0));
          break;
        case "Enter":
        case " ":
          R.preventDefault();
          const F = ne();
          if (F.length > 0) {
            A((Q) => ({
              ...Q,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), Z(1);
            const X = `Entered sort controls navigation mode. ${F.length} controls available. Use arrow keys to navigate between controls.`;
            ce(X);
          }
          break;
        case "Escape":
          R.preventDefault(), A((X) => ({
            ...X,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(T.selectedIndex);
          break;
      }
      return;
    }
    if (S.isSortControlsActive) {
      const X = ne().length;
      switch (G) {
        case "ArrowLeft":
          R.preventDefault();
          const Q = S.focusedSortControlIndex > 1 ? S.focusedSortControlIndex - 1 : X;
          A((q) => ({ ...q, focusedSortControlIndex: Q })), Z(Q);
          break;
        case "ArrowRight":
          R.preventDefault();
          const te = S.focusedSortControlIndex < X ? S.focusedSortControlIndex + 1 : 1;
          A((q) => ({ ...q, focusedSortControlIndex: te })), Z(te);
          break;
        case "ArrowDown":
          if (R.preventDefault(), S.isSortControlsActive) {
            const q = S.focusedSortControlIndex < X ? S.focusedSortControlIndex + 1 : 1;
            A((se) => ({ ...se, focusedSortControlIndex: q })), Z(q);
          } else
            J?.data && J.data.length > 0 && (A((q) => ({
              ...q,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), O(0));
          break;
        case "ArrowUp":
          R.preventDefault(), A((q) => ({
            ...q,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), Z(0);
          break;
        case "Escape":
          R.preventDefault(), A((q) => ({
            ...q,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), Z(0);
          break;
      }
    }
  }, [_, c, T.selectedIndex, S.isSortControlsActive, S.focusedSortControlIndex, Z, W, O, A, ce]);
  if (_ === "cards") {
    const R = c[T.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${D || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": g,
            "aria-describedby": `${v || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
            "aria-orientation": m,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((U, G) => {
              const J = G === T.selectedIndex, F = U.disabled || x;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${U.id}`,
                  "aria-controls": `panel-${U.id}`,
                  "aria-selected": J,
                  "aria-disabled": F,
                  tabIndex: J ? 0 : -1,
                  ref: (X) => {
                    b.current[G] = X;
                  },
                  onClick: () => z(G),
                  onKeyDown: (X) => Ce(X, G),
                  disabled: F,
                  className: [
                    "aria-tabs-datagrid__tab",
                    J ? "aria-tabs-datagrid__tab--selected" : "",
                    F ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: U.label }),
                    T.tabLoadingStates[G] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    T.tabErrors[G] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                U.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      R && R.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ r.jsx(
          Qi,
          {
            sortConfig: T.sortConfig || [],
            columns: R.columns.map((U) => ({ key: U.key, label: U.label })),
            onSortChange: (U) => {
              k({ type: "SET_SORT", payload: U });
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
            tabIndex: S.focusArea === "sort-controls" ? 0 : -1,
            ref: (U) => {
              N.current[0] = U;
            },
            onKeyDown: (U) => he(U, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${R.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  br,
                  {
                    id: `card-sort-${R.id}`,
                    name: `card-sort-${R.id}`,
                    value: S.cardSortConfig ? `${S.cardSortConfig.key}-${S.cardSortConfig.direction}` : "",
                    onChange: (U) => ee(U.target.value),
                    className: "sort-select",
                    children: de(R.columns).map((U) => /* @__PURE__ */ r.jsx("option", { value: U.value, children: U.label }, U.value))
                  }
                )
              ] }),
              S.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  ue(S.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
                  ft,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => ee(""),
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
          "aria-label": `${R?.label || "Data"} cards in ${S.gridRows} rows and ${S.gridColumns} columns`,
          "aria-rowcount": S.gridRows,
          "aria-colcount": S.gridColumns,
          id: `panel-${R?.id}`,
          "aria-labelledby": `tab-${R?.id}`,
          children: C(R?.data || []).map((U, G) => {
            const J = S.selectedCardIndex === G, F = S.focusedCardIndex === G && S.focusArea === "cards", X = S.focusedCardIndex === G && S.focusArea === "card" && S.isCardNavigationActive, Q = G === 0 && S.focusArea !== "cards", te = F || Q, q = V(G, S.gridColumns);
            if (n.cardTemplate) {
              const ve = n.cardTemplate(U, R.columns);
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": q.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      ref: (oe) => {
                        L.current[G] = oe;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        J ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        X ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": q.col + 1,
                      "aria-selected": J,
                      "aria-expanded": X,
                      "aria-description": X ? `Card navigation active. ${S.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: te ? 0 : -1,
                      onClick: () => {
                        A((oe) => ({
                          ...oe,
                          selectedCardIndex: oe.selectedCardIndex === G ? -1 : G
                        })), ae(U);
                      },
                      onKeyDown: (oe) => ie(oe, G),
                      onFocus: () => {
                        A((oe) => oe.isCardNavigationActive ? oe : oe.focusedCardIndex !== G || oe.focusArea !== "cards" ? {
                          ...oe,
                          focusedCardIndex: G,
                          focusArea: "cards"
                        } : oe);
                      },
                      children: ve
                    }
                  )
                },
                `card-${G}`
              );
            }
            const se = Zp(U, R.columns, P, j), me = [
              se.className || "",
              J ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              F ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              X ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": q.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      J ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      F ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      X ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": q.col + 1,
                    "aria-selected": J,
                    "aria-expanded": X,
                    onKeyDown: (ve) => {
                      ve.key === "Enter" && (ve.preventDefault(), A((oe) => ({
                        ...oe,
                        selectedCardIndex: G
                      }))), ie(ve, G);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      Ki,
                      {
                        ...se,
                        ref: (ve) => {
                          L.current[G] = ve;
                        },
                        className: me,
                        "aria-label": `${se["aria-label"] || se.heading}. ${X ? `Card navigation active with ${S.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: te ? 0 : -1,
                        onClick: () => {
                          A((ve) => ({
                            ...ve,
                            selectedCardIndex: ve.selectedCardIndex === G ? -1 : G
                          })), ae(U);
                        },
                        onKeyDown: (ve) => ie(ve, G),
                        onFocus: () => {
                          S.isCardNavigationActive || A((ve) => ve.focusedCardIndex !== G || ve.focusArea !== "cards" ? {
                            ...ve,
                            focusedCardIndex: G,
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
              `card-${G}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: Se,
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
  return _ === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${D || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ts,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: g,
        ariaDescription: v,
        orientation: m,
        id: p,
        disabled: x,
        selectedIndex: f,
        onTabChange: h,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: u,
        ...I
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${D || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ts,
      {
        tabPanels: c,
        dataConfig: d,
        ariaLabel: g,
        ariaDescription: v,
        orientation: m,
        id: p,
        disabled: x,
        selectedIndex: f,
        onTabChange: h,
        actions: l,
        forceActionsAbove: u,
        ...I
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, ol = (e) => {
  const t = ns.find((n) => n.value === e);
  return t ? t.icon : null;
}, Qp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => ol(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, eh = (e) => Vs(e, [
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
]), th = {
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
  booleanRenderer: (e) => ol(e),
  getDataId: (e) => `financial-${e.id}`
}, nh = (e) => Vs(e, [
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
]), rh = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Qp,
    createTabs: eh
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: th,
    createTabs: nh
  }
}, Vo = (e, t) => {
  const n = rh[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, il = [
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
], ah = [
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
], sh = [
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
], oh = [
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
], Go = [
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
], Yo = [
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
], qo = [
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
], ih = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, lh = () => [
  {
    id: "patients",
    label: "Patients",
    data: il,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      el,
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
    data: ah,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      tl,
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
    data: sh,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      nl,
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
    data: oh,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      rl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], ch = () => {
  const [e, t] = Ee("healthcare"), n = Me(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Ap,
      tabPanels: lh(),
      data: il
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...Vo("ecommerce", Go),
      data: Go
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...Vo("financial", Yo),
      data: Yo
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: ih,
      tabPanels: Vs(qo, [
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
      data: qo
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
        ft,
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
      ts,
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
}, Sv = ch, ll = (e) => /* @__PURE__ */ r.jsx(Ci, { ...e }), kv = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = pn.TwoThirds,
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: u,
  navigation: c,
  search: d,
  account: f,
  organisation: h,
  logo: g,
  className: v,
  ...m
}) => {
  const p = {
    service: u,
    navigation: c,
    search: d,
    account: f,
    organisation: h,
    logo: g,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Xi, { ...s }),
    /* @__PURE__ */ r.jsx(Ti, { ...p }),
    /* @__PURE__ */ r.jsx(ll, { className: v, ...m, children: /* @__PURE__ */ r.jsx(Ni, { size: o, children: /* @__PURE__ */ r.jsx(hn, { children: /* @__PURE__ */ r.jsxs(qn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Yt, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx($i, { ...l })
  ] });
}, Cv = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = pn.TwoThirds,
  mainWrapperSize: o = "small",
  // Default to small size for transactional forms
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  backLinkProps: u,
  serviceName: c,
  serviceHref: d,
  logo: f,
  className: h,
  ...g
}) => {
  const v = {
    service: {
      text: c,
      href: d
    },
    logo: f,
    // No navigation, search, or account for transactional pages
    navigation: void 0,
    search: void 0,
    account: void 0,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Xi, { ...s }),
    /* @__PURE__ */ r.jsx(Ti, { ...v }),
    /* @__PURE__ */ r.jsxs(ll, { className: h, ...g, children: [
      u && /* @__PURE__ */ r.jsx(qa, { ...u }),
      /* @__PURE__ */ r.jsx(Ni, { size: o, children: /* @__PURE__ */ r.jsx(hn, { children: /* @__PURE__ */ r.jsxs(qn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Yt, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx($i, { ...l })
  ] });
}, cl = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = _e("nhsuk-back-link", a), u = _e("nhsuk-back-link__link"), c = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx("button", { className: u, type: "button", onClick: s, ...i, children: c() }) : /* @__PURE__ */ r.jsx("a", { className: u, href: n, ...i, children: c() }) });
};
cl.displayName = "ForwardLink";
const kn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function Xo() {
  return typeof window > "u" ? kn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function ul() {
  const [e, t] = Y.useState(Xo());
  Y.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(Xo());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = Y.useCallback((s) => e >= kn[s], [e]), a = Y.useCallback((s) => e < kn[s], [e]), o = Y.useCallback((s, i) => e >= kn[s] && e < kn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: kn
  };
}
function Nv(e) {
  const { width: t, values: n } = ul();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function uh(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = Y.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = Y.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return Y.useEffect(() => {
    if (!t || typeof window > "u") return;
    const u = new URLSearchParams(window.location.search);
    o ? u.set(n, String(o)) : u.delete(n), u.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${u.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const dh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), fh = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function ph(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: u,
    animated: c = !0,
    backLabel: d = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: g,
    a11y: v,
    className: m,
    getId: p = (ge) => ge.id,
    orientation: x = "vertical",
    autoEnableThirdColumn: D = !0,
    onDrillChange: I,
    navigationInstructions: _ = "Use arrow keys to navigate, Enter to open.",
    initialFocus: y = "first",
    skipFocusOnSelect: M = !1,
    skipAnnouncements: P = !1,
    onFocusChange: j,
    syncUrl: w = !1,
    urlParamSelected: T = "nsv",
    urlParamDrill: k = "nsvDrill",
    urlSyncDebounceMs: b = 0,
    lazySecondary: L = !1,
    navFooter: N,
    collapsibleNav: $ = !1,
    navInitiallyCollapsed: S = !1,
    onNavCollapseChange: A,
    collapseToggleLabelShow: re = "Show navigation",
    collapseToggleLabelHide: V = "Hide navigation",
    collapseToggleIconShow: E,
    collapseToggleIconHide: H,
    persistNavCollapsed: z,
    navCollapsedStorageKey: ae = "nsvCollapsed",
    navCollapsedUrlParam: O = "nsvCollapsed",
    autoContentHeader: pe,
    contentHeaderLevel: Se = 2,
    renderContentHeader: ce,
    contentSubheader: de,
    secondarySubheader: K
  } = e, { up: ee } = ul(), [ue, C] = Y.useState(!1);
  Y.useEffect(() => {
    C(!0);
  }, []);
  const B = ue && ee("medium"), W = ue && ee("xlarge");
  let ne;
  u ? ne = u : B ? ne = "two-column" : ne = "list", !u && D && l && W && (ne = "three-column");
  const Z = uh({
    enabled: w,
    paramSelected: T,
    paramDrill: k
  }), [ie, be] = Y.useState(
    () => Z.selectedId !== void 0 ? Z.selectedId : a
  ), Ce = n !== void 0 ? n : ie, he = t.find((ge) => p(ge) === Ce), [R, U] = Y.useState(
    void 0
  );
  Y.useEffect(() => {
    if (Ce === void 0) return;
    U(Ce);
    const ge = setTimeout(() => U(void 0), 220);
    return () => clearTimeout(ge);
  }, [Ce]);
  const G = Y.useRef(null), J = Y.useRef(null), F = Y.useRef(null), X = Y.useRef(null), [Q, te] = Y.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [q, se] = Y.useState(() => "nav"), [me, ve] = Y.useState(0), oe = () => [
    X.current,
    J.current,
    F.current
  ].filter(Boolean), le = (ge) => {
    const Te = oe(), we = Math.max(0, Math.min(ge, Te.length - 1));
    Te[we]?.focus(), ve(we);
  }, fe = Y.useCallback(
    (ge) => ge ? Array.from(ge.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (we) => !we.hasAttribute("disabled") && we.tabIndex !== -1
    ) : [],
    []
  ), De = Y.useCallback(
    (ge) => {
      const Te = fe(J.current);
      if (!Te.length) {
        J.current?.focus();
        return;
      }
      const we = Math.max(0, Math.min(ge, Te.length - 1)), Pe = Te[we];
      Pe.focus(), setTimeout(() => {
        document.activeElement !== Pe && (Pe.focus(), setTimeout(() => {
          document.activeElement !== Pe && Pe.click();
        }, 10));
      }, 10), te((Ve) => ({ ...Ve, contentIndex: we }));
      const Qe = (Ve) => {
        Ve.key === "Escape" && (Ve.preventDefault(), Ve.stopPropagation(), J.current?.focus(), Pe.removeEventListener("keydown", Qe));
      };
      Te.forEach((Ve) => {
        const Ke = Ve._escapeHandler;
        Ke && Ve.removeEventListener("keydown", Ke);
      }), Pe._escapeHandler = Qe, Pe.addEventListener("keydown", Qe);
    },
    [fe]
  ), xe = Y.useCallback(
    (ge) => {
      const Te = fe(F.current);
      if (!Te.length) {
        F.current?.focus();
        return;
      }
      const we = Math.max(0, Math.min(ge, Te.length - 1)), Pe = Te[we];
      Pe.focus(), setTimeout(() => {
        document.activeElement !== Pe && (Pe.focus(), setTimeout(() => {
          document.activeElement !== Pe && Pe.click();
        }, 10));
      }, 10), te((Ve) => ({ ...Ve, secondaryIndex: we }));
      const Qe = (Ve) => {
        Ve.key === "Escape" && (Ve.preventDefault(), Ve.stopPropagation(), F.current?.focus(), Pe.removeEventListener("keydown", Qe));
      };
      Te.forEach((Ve) => {
        const Ke = Ve._escapeHandler;
        Ke && Ve.removeEventListener("keydown", Ke);
      }), Pe._escapeHandler = Qe, Pe.addEventListener("keydown", Qe);
    },
    [fe]
  ), je = (ge) => {
    if (ge.defaultPrevented) return;
    const Te = ge.key, we = ge.target, Pe = !!ut.current && ut.current.contains(we), Qe = !!J.current && J.current.contains(we), Ve = !!F.current && F.current.contains(we), Ke = !!F.current, wn = we === X.current || we === J.current || we === F.current, an = Ae && (ne === "list" || ne === "cards"), lr = Qe && !!we.closest(".nhs-navigation-split-view__header");
    if (q === "containers" && wn) {
      if (Te === "ArrowRight") {
        ge.preventDefault();
        const Re = oe(), Je = Math.min(Re.length - 1, me + 1);
        le(Je);
        return;
      }
      if (Te === "ArrowLeft") {
        ge.preventDefault();
        const Re = Math.max(0, me - 1);
        le(Re);
        return;
      }
      if (Te === "Home") {
        ge.preventDefault(), le(0);
        return;
      }
      if (Te === "End") {
        ge.preventDefault(), le(oe().length - 1);
        return;
      }
      if (Te === "Enter" || Te === " ") {
        if (ge.preventDefault(), we === X.current) {
          if (se("nav"), ut.current) {
            const Re = Array.from(
              ut.current.querySelectorAll("[data-nav-item]")
            );
            (Re[nt >= 0 ? nt : 0] || Re[0])?.focus();
          }
        } else we === J.current ? (se("content"), De(Q.contentIndex)) : we === F.current && (se("secondary"), xe(Q.secondaryIndex));
        return;
      }
      return;
    }
    if (Te === "Escape") {
      if (q === "content" || q === "secondary") {
        if (Qe || Ve) {
          if (ge.preventDefault(), se("nav"), ut.current) {
            const Je = Array.from(
              ut.current.querySelectorAll("[data-nav-item]")
            )[nt >= 0 ? nt : 0];
            setTimeout(() => Je?.focus(), 10);
          }
        } else if ((we === J.current || we === F.current) && (ge.preventDefault(), se("nav"), ut.current)) {
          const Je = Array.from(
            ut.current.querySelectorAll("[data-nav-item]")
          )[nt >= 0 ? nt : 0];
          setTimeout(() => Je?.focus(), 10);
        }
      }
      return;
    }
    if (Te === "Enter" || Te === " ") {
      if (we.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (we === J.current && q === "content") {
        ge.preventDefault(), ge.stopPropagation(), fe(J.current).length > 0 && setTimeout(() => {
          De(Q.contentIndex);
        }, 50);
        return;
      }
      if (we === F.current && q === "secondary") {
        ge.preventDefault(), ge.stopPropagation(), fe(
          F.current
        ).length > 0 && setTimeout(() => {
          xe(Q.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (an && lr && !wn && (Te === "ArrowRight" || Te === "ArrowLeft")) {
      const Re = fe(J.current).filter(
        (Je) => Je.closest(".nhs-navigation-split-view__header")
      );
      if (Re.length > 1) {
        const Je = Re.indexOf(we);
        if (Je >= 0) {
          const to = (Je + (Te === "ArrowRight" ? 1 : -1) + Re.length) % Re.length;
          ge.preventDefault(), Re[to].focus();
          return;
        }
      }
    }
    if (Te === "ArrowRight") {
      if (Pe || q === "nav") {
        ge.preventDefault(), se("content"), setTimeout(() => J.current?.focus(), 10);
        return;
      }
      if (Qe || q === "content") {
        Ke && (ge.preventDefault(), se("secondary"), setTimeout(() => F.current?.focus(), 10));
        return;
      }
    }
    if (Te === "ArrowLeft") {
      if (Ve || q === "secondary") {
        ge.preventDefault(), se("content"), setTimeout(() => J.current?.focus(), 10);
        return;
      }
      if (Qe || q === "content") {
        if (ge.preventDefault(), se("nav"), ut.current) {
          const Je = Array.from(
            ut.current.querySelectorAll("[data-nav-item]")
          )[nt >= 0 ? nt : 0];
          setTimeout(() => Je?.focus(), 10);
        }
        return;
      }
    }
    if (Te === "Home" && !Pe && (ge.preventDefault(), se("nav"), ut.current)) {
      const Re = Array.from(
        ut.current.querySelectorAll("[data-nav-item]")
      ), Je = Re[nt >= 0 ? nt : 0] || Re[0];
      setTimeout(() => Je?.focus(), 10);
    }
    if (Te === "End") {
      const Re = Ke ? F.current : J.current;
      Re && !Re.contains(we) && (ge.preventDefault(), Ke ? (se("secondary"), setTimeout(() => F.current?.focus(), 10)) : (se("content"), setTimeout(() => J.current?.focus(), 10)));
    }
    if (Te === "ArrowDown" || Te === "ArrowUp") {
      if (we === J.current && Te === "ArrowDown") {
        ge.preventDefault(), fe(J.current).length > 0 && De(0);
        return;
      }
      if (we === F.current && Te === "ArrowDown") {
        ge.preventDefault(), fe(
          F.current
        ).length > 0 && xe(0);
        return;
      }
      if (Qe) {
        const Re = fe(J.current);
        if (Re.length) {
          ge.preventDefault();
          const Je = Te === "ArrowDown" ? 1 : -1, jt = (Q.contentIndex + Je + Re.length) % Re.length;
          De(jt);
        }
      } else if (Ve) {
        const Re = fe(F.current);
        if (Re.length) {
          ge.preventDefault();
          const Je = Te === "ArrowDown" ? 1 : -1, jt = (Q.secondaryIndex + Je + Re.length) % Re.length;
          xe(jt);
        }
      }
    }
  }, Ae = !!he && (ne === "list" || ne === "cards"), tt = Y.useMemo(() => pe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : pe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : pe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: pe.mobile !== void 0 ? pe.mobile : !0,
    tablet: pe.tablet || !1,
    desktop: pe.desktop || !1
  }, [pe]), wt = ue && ee("medium") && !ee("xlarge"), _t = ue && ee("xlarge"), Ge = !!l, Ye = ne === "three-column", [qe, rt] = Y.useState(!1);
  Y.useEffect(() => {
    Ye && qe && rt(!1);
  }, [Ye, qe]), Y.useEffect(() => {
    qe && !Ye && (se("secondary"), ve(2), setTimeout(() => {
      F.current?.focus();
    }, 50));
  }, [qe, Ye]), Y.useEffect(() => {
    !qe && !Ye && q === "secondary" && (se("content"), ve(1), setTimeout(() => {
      J.current?.focus();
    }, 50));
  }, [qe, Ye, q]);
  const va = !!he && (Ae && tt.mobile || !Ae && wt && tt.tablet || !Ae && _t && tt.desktop) || Ge && !Ye, Ec = `h${Se}`, ya = he ? Y.createElement(
    Ec,
    {
      style: {
        marginLeft: Ae ? 32 : 0,
        marginRight: Ae ? 32 : 0
      }
    },
    he.label
  ) : null, Qs = Ae ? "mobile" : wt ? "tablet" : "desktop", Bc = Ge && !Ye && !qe, wa = Ae && tt.mobile ? /* @__PURE__ */ r.jsx(
    qa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => yn(void 0, void 0)
    }
  ) : void 0, _a = Bc ? /* @__PURE__ */ r.jsx(
    cl,
    {
      element: "button",
      text: f,
      onClick: () => {
        rt(!0);
      }
    }
  ) : void 0, Sa = !Ye && qe ? /* @__PURE__ */ r.jsx(
    qa,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => rt(!1)
    }
  ) : void 0, Hc = Y.useMemo(() => {
    if (!va || !he) return null;
    if (ce)
      return ce({
        item: he,
        detailActive: Ae,
        context: Qs,
        backLink: wa,
        defaultHeading: ya
      });
    const ge = he && de ? typeof de == "function" ? de(he) : de : null;
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
            Sa || wa,
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
                  ya,
                  ge && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: ge })
                ]
              }
            )
          ]
        }
      ),
      _a && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: _a })
    ] });
  }, [
    va,
    he,
    ce,
    Ae,
    Qs,
    wa,
    Sa,
    ya,
    _a,
    de
  ]);
  Y.useEffect(() => {
    if (!w) return;
    const ge = ne === "three-column";
    let Te = !1;
    const we = () => {
      Te || (Z.selectedId !== Ce && Z.setSelectedId(Ce), Z.drilledIn !== ge && Z.setDrilledIn(ge));
    };
    if (b && b > 0) {
      const Pe = setTimeout(we, b);
      return () => {
        Te = !0, clearTimeout(Pe);
      };
    } else
      we();
  }, [w, Z, Ce, ne, b]), Y.useEffect(() => {
    if (!w) return;
    const ge = () => {
      const Te = new URLSearchParams(window.location.search), we = Te.get(T);
      Te.get(k), be(we === null ? void 0 : we);
    };
    return window.addEventListener("popstate", ge), () => window.removeEventListener("popstate", ge);
  }, [
    w,
    T,
    k,
    u,
    l
  ]);
  const ir = Y.useRef(0), Mt = Y.useRef(
    null
  ), yn = Y.useCallback(
    (ge, Te) => {
      ge !== Ce && (n === void 0 && be(ge), o?.(ge, Te));
    },
    [n, o, Ce]
  );
  Y.useEffect(() => {
    if (!M && Ae && J.current) {
      const ge = setTimeout(() => J.current?.focus(), 30);
      return () => clearTimeout(ge);
    }
  }, [Ae, Ce, M]);
  const ut = Y.useRef(null), [nt, Bn] = Y.useState(
    () => y === "first" ? 0 : -1
  );
  Y.useEffect(() => {
    if (nt < 0 || !ut.current) return;
    const Te = Array.from(
      ut.current.querySelectorAll("[data-nav-item]")
    )[nt];
    if (Te) {
      document.activeElement !== Te && Te.focus(), ir.current = nt;
      const we = t[nt];
      j?.(
        we ? p(we) : void 0,
        we,
        nt
      );
    }
  }, [nt, t, j, p]);
  const Oc = (ge) => {
    const Te = x === "vertical" ? "ArrowDown" : "ArrowRight", we = x === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ge.key === "ArrowRight" && x === "vertical") {
      ge.preventDefault(), qe ? (se("secondary"), setTimeout(() => {
        F.current?.focus();
      }, 10)) : (se("content"), setTimeout(() => {
        J.current?.focus();
      }, 10));
      return;
    }
    if (ge.key === Te)
      ge.preventDefault(), Bn((Pe) => Math.min(t.length - 1, Pe + 1));
    else if (ge.key === we)
      ge.preventDefault(), Bn((Pe) => Math.max(0, Pe - 1));
    else if (ge.key === "Home")
      ge.preventDefault(), Bn(0);
    else if (ge.key === "End")
      ge.preventDefault(), Bn(t.length - 1);
    else if (ge.key === "Enter" || ge.key === " ") {
      ge.preventDefault();
      const Pe = t[nt];
      Pe && !Pe.disabled && yn(p(Pe), Pe);
    } else if (ge.key.length === 1 && /[a-z0-9]/i.test(ge.key)) {
      Mt.current || (Mt.current = { buffer: "", last: 0 });
      const Pe = Date.now(), Qe = 700, Ve = ge.key.toLowerCase();
      Pe - Mt.current.last > Qe ? Mt.current.buffer = Ve : Mt.current.buffer += Ve, Mt.current.last = Pe;
      let Ke = Mt.current.buffer;
      const wn = Ke.split("").every((jt) => jt === Ke[0]), an = t.map(
        (jt) => String(jt.label || "").toLowerCase()
      );
      let lr = 0;
      nt >= 0 && (lr = (nt + 1) % t.length);
      let Re;
      const Je = (jt, to) => {
        const no = t.length;
        for (let Na = 0; Na < no; Na++) {
          const ja = (lr + Na) % no;
          if (!t[ja].disabled && an[ja].startsWith(jt))
            return ja;
        }
      };
      wn && Ke.length > 1 ? Re = Je(Ke[0]) : (Re = Je(Ke), Re === void 0 && Ke.length > 1 && (Re = Je(Ke[Ke.length - 1]), Re !== void 0 && Mt.current && (Mt.current.buffer = Ke[Ke.length - 1]))), Re !== void 0 && Bn(Re);
    }
  }, Uc = Y.useMemo(() => {
    if (z && (z === "url" || z === "both") && typeof window < "u") {
      const Te = new URLSearchParams(window.location.search).get(O);
      if (Te === "1") return !0;
      if (Te === "0") return !1;
    }
    if (z && (z === "localStorage" || z === "both") && typeof window < "u")
      try {
        const ge = window.localStorage.getItem(ae);
        if (ge === "1") return !0;
        if (ge === "0") return !1;
      } catch {
      }
    return S;
  }, [
    z,
    S,
    ae,
    O
  ]), [Nt, Wc] = Y.useState(Uc);
  Y.useEffect(() => {
    A?.(Nt);
  }, [Nt, A]);
  const zc = Y.useCallback(() => {
    B && $ && Wc((ge) => !ge);
  }, [B, $]);
  Y.useEffect(() => {
    if (z && !(typeof window > "u")) {
      if (z === "localStorage" || z === "both")
        try {
          window.localStorage.setItem(
            ae,
            Nt ? "1" : "0"
          );
        } catch {
        }
      if (z === "url" || z === "both") {
        const ge = new URLSearchParams(window.location.search);
        ge.set(O, Nt ? "1" : "0");
        const Te = `${window.location.pathname}?${ge.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", Te);
      }
    }
  }, [
    Nt,
    z,
    ae,
    O
  ]);
  const Vc = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ae ? "nhs-navigation-split-view--detail-active" : "",
    ne === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    $ && B && Nt ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), ka = Y.useRef(null);
  Y.useEffect(() => {
    if (!P && ka.current) {
      const ge = he ? `Selected ${he.label}` : "Selection cleared";
      ka.current.textContent = ge;
    }
  }, [he, P]), Y.useEffect(() => {
    !Ae && Ce == null && ut.current && ut.current.querySelectorAll("[data-nav-item]")[ir.current]?.focus();
  }, [Ae, Ce]);
  const Zt = ne === "three-column", [Ca, Gc] = Y.useState(!1);
  Y.useEffect(() => {
    Zt && !Ca && Gc(!0);
  }, [Zt, Ca]);
  const eo = Y.useRef(Zt);
  Y.useEffect(() => {
    eo.current !== Zt && (I?.(Zt), eo.current = Zt);
  }, [Zt, I]);
  const Yc = () => {
    if (ne === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": Ce ? String(Ce) : void 0,
          children: [
            t.map((we) => {
              const Pe = p(we), Qe = Pe === Ce;
              return /* @__PURE__ */ r.jsx(
                "li",
                {
                  className: "nhs-navigation-split-view__card-item",
                  role: "option",
                  "aria-selected": Qe,
                  children: /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      id: String(Pe),
                      type: "button",
                      className: "nhs-navigation-split-view__card",
                      "data-selected": Qe || void 0,
                      "data-disabled": we.disabled || void 0,
                      disabled: we.disabled,
                      onClick: () => !we.disabled && yn(Pe, we),
                      children: [
                        we.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: we.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: we.label }),
                        we.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: we.description }),
                        s?.(we),
                        we.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: we.badge })
                      ]
                    }
                  )
                },
                Pe
              );
            }),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
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
    const ge = "nsv-nav-instructions", Te = Y.useMemo(() => Y.memo(
      ({
        item: we,
        idx: Pe,
        selected: Qe,
        focused: Ve
      }) => {
        const Ke = p(we), wn = we.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Ve ? 0 : -1,
          onClick: () => {
            ir.current = Pe, yn(Ke, we);
          },
          onKeyDown: (an) => {
            (an.key === "Enter" || an.key === " ") && (an.preventDefault(), ir.current = Pe, yn(Ke, we));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Ke),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Qe,
            "aria-current": Qe ? "true" : void 0,
            "data-selected": Qe || void 0,
            "data-disabled": we.disabled || void 0,
            ...wn,
            children: [
              we.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: we.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: we.label }),
                we.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: we.description }),
                s?.(we)
              ] }),
              we.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: we.badge })
            ]
          }
        );
      }
    ), [p, yn, s]);
    return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsxs(
        "ul",
        {
          ref: ut,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Oc,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ge,
          "aria-activedescendant": Ce ? String(Ce) : void 0,
          children: [
            t.map((we, Pe) => /* @__PURE__ */ r.jsx(
              Te,
              {
                item: we,
                idx: Pe,
                selected: p(we) === Ce,
                focused: Pe === nt || nt === -1 && Pe === 0 && y === "first",
                "data-just-selected": p(we) === R ? "true" : void 0
              },
              p(we)
            )),
            t.length === 0 && !h && /* @__PURE__ */ r.jsx(
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
          id: ge,
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
      ref: G,
      className: Vc,
      "aria-label": v?.rootLabel,
      "data-layout": ne,
      onKeyDown: je,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ae || void 0,
            style: { transform: Ae ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: X,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": v?.navigationLabel || "Items",
                  "data-collapsed": Nt || void 0,
                  tabIndex: 0,
                  children: [
                    $ && B && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: zc,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": Nt ? re : V,
                        title: Nt ? re : V,
                        children: Nt ? E || /* @__PURE__ */ r.jsx(fh, {}) : H || /* @__PURE__ */ r.jsx(dh, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Yc() }),
                    N && /* @__PURE__ */ r.jsx(
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
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: J,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": v?.contentLabel || "Content",
                  "data-has-selection": !!he || void 0,
                  tabIndex: 0,
                  style: {
                    display: qe && !Ye ? "none" : void 0
                  },
                  children: [
                    va && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: Hc }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(he)
                      }
                    )
                  ]
                }
              ),
              ne === "three-column" && (!L || Ca) || qe && !Ye ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: F,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": v?.secondaryContentLabel || "Secondary",
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
                        qe && !Ye && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  Sa,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: he && typeof he == "object" && "label" in he ? he.label : String(he) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        he && K && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof K == "function" ? K(he) : K
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(he) })
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
            ref: ka,
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
            children: Zt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
ph.displayName = "NavigationSplitView";
const hh = typeof window < "u" && window.document ? Y.useLayoutEffect : Y.useEffect, Ko = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), mh = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, u = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, d = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, g = (m) => {
    h && (m.preventDefault(), a?.(e));
  }, v = h ? {
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
      className: _e("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: u, top: c, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": d,
      "aria-colspan": f,
      ...v,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: _e("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, gh = Kc(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: u = "overlay",
  ...c
}) => {
  const [d, f] = Ee(() => /* @__PURE__ */ new Set()), [h, g] = Ee(() => /* @__PURE__ */ new Set()), v = Be(/* @__PURE__ */ new Set()), m = ye((b) => d.has(b), [d]), p = ye((b) => {
    f((L) => {
      const N = new Set(L);
      return N.has(b.id) ? (N.delete(b.id), g(($) => {
        const S = new Set($);
        return S.add(b.id), S;
      }), setTimeout(() => g(($) => {
        const S = new Set($);
        return S.delete(b.id), S;
      }), 240), l?.(b.id, !1)) : (N.add(b.id), l?.(b.id, !0)), N;
    });
  }, [l]);
  hh(() => {
    if (u !== "inline" || !i || typeof document > "u") return;
    const b = [];
    if (d.forEach((S) => {
      v.current.has(S) || b.push(S);
    }), v.current = new Set(d), !b.length) return;
    const L = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, N = b.map((S) => `.nhsuk-product-roadmap__inline-children[data-parent="${S}"] .nhsuk-product-roadmap__inline-child`).join(","), $ = Array.from(document.querySelectorAll(N));
    if ($.length) {
      if (L) {
        $.forEach((S) => {
          S.style.opacity = "1", S.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((S) => {
        (S.gsap || S.default || S).to($, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        $.forEach((S) => {
          S.style.opacity = "1", S.style.transform = "translateY(0)";
        });
      });
    }
  }, [d, u, i]);
  const x = ye(() => {
    d.size && f(/* @__PURE__ */ new Set());
  }, [d]), D = _e("nhsuk-product-roadmap", o), I = Ko(n, 120, 1200, 400), _ = Ko(a, 1, 6, 2), y = Me(() => e.map((b) => /* @__PURE__ */ new Date(b + " 01")), [e]), M = Me(() => {
    if (y.length === 0) {
      const N = /* @__PURE__ */ new Date();
      return [N, N];
    }
    const b = new Date(y[0]), L = Zn.offset(new Date(y[y.length - 1]), 1);
    return [b, L];
  }, [y]), P = Me(() => zs().domain(M).range([0, y.length * I]), [M, y.length, I]), j = ye((b) => {
    if (b.startDate) {
      const V = new Date(b.startDate), E = new Date(b.endDate ?? b.startDate);
      E < V && E.setTime(V.getTime());
      const H = P(V), z = Zn.offset(new Date(E), 1);
      let ae = P(z);
      Number.isFinite(ae) || (ae = H + I);
      const O = Math.max(I * 0.25, ae - H), pe = H / I, Se = O / I;
      return { ...b, _pxLeft: H, _pxWidth: O, _startFraction: pe, _spanColumns: Se };
    }
    const L = b.date ?? 1, N = b.dateOffset ?? 0, $ = b.length ?? 1, S = b.partialLength ?? 1, A = L - 1 + N, re = $ - 1 + S;
    return { ...b, _pxLeft: A * I, _pxWidth: re * I, _startFraction: A, _spanColumns: re };
  }, [P, I]), w = Me(() => t.map((b) => {
    const N = b.roadmapItems.map((S) => {
      const A = !S.childItems && S.children ? { ...S, childItems: S.children } : { ...S };
      return j(A);
    }).sort((S, A) => S._pxLeft !== A._pxLeft ? S._pxLeft - A._pxLeft : A._pxWidth - S._pxWidth), $ = [];
    return N.forEach((S) => {
      const A = S._pxLeft, re = S._pxLeft + S._pxWidth;
      let V = $.findIndex((E) => E <= A);
      V === -1 && (V = $.length, $.push(0)), $[V] = re, S.verticalPosition = V + 1;
    }), { ...b, roadmapItems: N, _laneCount: $.length };
  }), [t, j]), T = Me(() => w.map((b) => b._laneCount || 1), [w]), k = Me(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: D,
      style: { "--column-width": `${I}px`, gridTemplateColumns: k },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": w.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((b, L) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": L + 2, children: b }, `${b}-${L}`))
        ] }),
        w.map((b, L) => {
          const N = L + 2, $ = T[L];
          let S, A = 0, re = [];
          i && u === "inline" && (re = b.roadmapItems.filter((z) => m(z.id) && z.childItems && z.childItems.length).map((z) => ({ id: z.id, lane: z.verticalPosition || 1, count: z.childItems.length })).sort((z, ae) => z.lane - ae.lane), A = re.reduce((z, ae) => z + ae.count, 0));
          const V = $ + A;
          S = `calc((${V} * var(--roadmap-item-block-height)) + (max(0, ${V} - 1) * var(--roadmap-row-gap)))`;
          const E = {};
          let H = 0;
          return re.forEach((z) => {
            H += z.count, E[z.lane + 1] = H;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": N, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: b.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: S }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: b.roadmapItems.map((z, ae) => {
              const O = (z.verticalPosition || 1) - 1, pe = re.filter((K) => K.lane - 1 < O).reduce((K, ee) => K + ee.count, 0), Se = O + pe, ce = m(z.id), de = h.has(z.id);
              return /* @__PURE__ */ r.jsxs(xt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(mh, { item: z, maxLines: _, enableDrilldown: i, onExpand: p, isActive: ce, topLaneIndex: Se, laneOffset: pe }),
                i && u === "inline" && (ce || de) && z.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": z.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${z.title} child tasks`, children: z.childItems.map((K, ee) => {
                  const ue = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let C = z._pxLeft, B = z._pxWidth;
                  if (K.startDate) {
                    const Z = new Date(K.startDate);
                    let ie = K.endDate ? new Date(K.endDate) : new Date(Z);
                    ie < Z && (ie = new Date(Z));
                    const be = new Date(ie);
                    be.setDate(be.getDate() + 1);
                    const Ce = P(Z);
                    let he = P(be);
                    (!Number.isFinite(he) || he <= Ce) && (he = Ce + 6), C = Ce, B = Math.max(6, he - Ce);
                  }
                  const ne = Se + 1 + ee;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: _e("nhsuk-product-roadmap__inline-child", K.status && `nhsuk-product-roadmap__inline-child--status-${K.status}`, !ce && de && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${C}px`, width: `${B}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${ne})`, height: ue, opacity: ce ? 0 : void 0, transform: ce ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: K.title })
                      ]
                    },
                    K.id ?? ee
                  );
                }) })
              ] }, z.id ?? ae);
            }) }) })
          ] }, `${b.heading}-${L}`);
        }),
        i && u === "overlay" && d.size === 1 && (() => {
          const b = Array.from(d)[0], L = t.flatMap((N) => N.roadmapItems).find((N) => N.id === b);
          return !L || !L.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${L.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: L.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: x, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: L.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: L.childItems.map((N, $) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: N.title }),
                N.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: N.content })
              ] }, N.id ?? $)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: x, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
gh.displayName = "ProductRoadmap";
function dl(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = dl(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Ir() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = dl(e)) && (a && (a += " "), a += t);
  return a;
}
function ot(e) {
  return function() {
    return e;
  };
}
const rs = Math.PI, as = 2 * rs, on = 1e-6, xh = as - on;
function fl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function bh(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return fl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class vh {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? fl : bh(t);
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
    let i = this._x1, l = this._y1, u = a - t, c = o - n, d = i - t, f = l - n, h = d * d + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > on) if (!(Math.abs(f * u - c * d) > on) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let g = a - i, v = o - l, m = u * u + c * c, p = g * g + v * v, x = Math.sqrt(m), D = Math.sqrt(h), I = s * Math.tan((rs - Math.acos((m + h - p) / (2 * x * D))) / 2), _ = I / D, y = I / x;
      Math.abs(_ - 1) > on && this._append`L${t + _ * d},${n + _ * f}`, this._append`A${s},${s},0,0,${+(f * g > d * v)},${this._x1 = t + y * u},${this._y1 = n + y * c}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), u = a * Math.sin(o), c = t + l, d = n + u, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${d}` : (Math.abs(this._x1 - c) > on || Math.abs(this._y1 - d) > on) && this._append`L${c},${d}`, a && (h < 0 && (h = h % as + as), h > xh ? this._append`A${a},${a},0,1,${f},${t - l},${n - u}A${a},${a},0,1,${f},${this._x1 = c},${this._y1 = d}` : h > on && this._append`A${a},${a},0,${+(h >= rs)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function pl(e) {
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
  }, () => new vh(t);
}
function hl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ml(e) {
  this._context = e;
}
ml.prototype = {
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
function gl(e) {
  return new ml(e);
}
function xl(e) {
  return e[0];
}
function bl(e) {
  return e[1];
}
function vl(e, t) {
  var n = ot(!0), a = null, o = gl, s = null, i = pl(l);
  e = typeof e == "function" ? e : e === void 0 ? xl : ot(e), t = typeof t == "function" ? t : t === void 0 ? bl : ot(t);
  function l(u) {
    var c, d = (u = hl(u)).length, f, h = !1, g;
    for (a == null && (s = o(g = i())), c = 0; c <= d; ++c)
      !(c < d && n(f = u[c], c, u)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, c, u), +t(f, c, u));
    if (g) return s = null, g + "" || null;
  }
  return l.x = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : ot(+u), l) : e;
  }, l.y = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : ot(+u), l) : t;
  }, l.defined = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : ot(!!u), l) : n;
  }, l.curve = function(u) {
    return arguments.length ? (o = u, a != null && (s = o(a)), l) : o;
  }, l.context = function(u) {
    return arguments.length ? (u == null ? a = s = null : s = o(a = u), l) : a;
  }, l;
}
function ss(e, t, n) {
  var a = null, o = ot(!0), s = null, i = gl, l = null, u = pl(c);
  e = typeof e == "function" ? e : e === void 0 ? xl : ot(+e), t = typeof t == "function" ? t : ot(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? bl : ot(+n);
  function c(f) {
    var h, g, v, m = (f = hl(f)).length, p, x = !1, D, I = new Array(m), _ = new Array(m);
    for (s == null && (l = i(D = u())), h = 0; h <= m; ++h) {
      if (!(h < m && o(p = f[h], h, f)) === x)
        if (x = !x)
          g = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), v = h - 1; v >= g; --v)
            l.point(I[v], _[v]);
          l.lineEnd(), l.areaEnd();
        }
      x && (I[h] = +e(p, h, f), _[h] = +t(p, h, f), l.point(a ? +a(p, h, f) : I[h], n ? +n(p, h, f) : _[h]));
    }
    if (D) return l = null, D + "" || null;
  }
  function d() {
    return vl().defined(o).curve(i).context(s);
  }
  return c.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ot(+f), a = null, c) : e;
  }, c.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : ot(+f), c) : e;
  }, c.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : ot(+f), c) : a;
  }, c.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ot(+f), n = null, c) : t;
  }, c.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : ot(+f), c) : t;
  }, c.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : ot(+f), c) : n;
  }, c.lineX0 = c.lineY0 = function() {
    return d().x(e).y(t);
  }, c.lineY1 = function() {
    return d().x(e).y(n);
  }, c.lineX1 = function() {
    return d().x(a).y(t);
  }, c.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : ot(!!f), c) : o;
  }, c.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), c) : i;
  }, c.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), c) : s;
  }, c;
}
function Jo(e) {
  return e < 0 ? -1 : 1;
}
function Zo(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (Jo(s) + Jo(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Qo(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Ea(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * n, s, i);
}
function Mr(e) {
  this._context = e;
}
Mr.prototype = {
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
        Ea(this, this._t0, Qo(this, this._t0));
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
          this._point = 3, Ea(this, Qo(this, n = Zo(this, e, t)), n);
          break;
        default:
          Ea(this, this._t0, n = Zo(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Mr.prototype).point = function(e, t) {
  Mr.prototype.point.call(this, t, e);
};
function Lr(e) {
  return new Mr(e);
}
function yh(e, t, n) {
  const a = Ii(e, t);
  return zs().domain(a).range(n);
}
function ei(e, t, n) {
  const [a, o] = Ii(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Cr().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const u = o - a, c = (u > 0 ? u : a) * 0.1;
    i = Math.max(0, a - c), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Cr().domain([i, l]).nice().range(n);
}
function os(e, t, n, a) {
  const o = vl().x(t).y(n);
  return a?.smooth !== !1 && o.curve(Lr), o(e) ?? "";
}
function wh(e = {}) {
  const t = Y.useRef(null), n = Y.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = Y.useState({ width: 0, height: 0 });
  Y.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((u) => {
      for (const c of u) {
        const { width: d, height: f } = c.contentRect;
        o({ width: d, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: n, ref: t };
}
const yl = Y.createContext(null);
function rn() {
  return Y.useContext(yl);
}
const _h = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = wh(t), u = { height: e, position: "relative" };
  return n !== void 0 && (u.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: u, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(yl.Provider, { value: l, children: o }) });
}, Gs = Y.createContext(null), vn = () => Y.useContext(Gs), Sh = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: u,
  yPadding: c
}) => {
  const d = rn(), f = t ?? d?.innerWidth ?? 0, h = n ?? d?.innerHeight ?? 0, g = Y.useMemo(() => e.flatMap((_) => _.data), [e]), v = Y.useCallback((_) => {
    if (a) return a(_);
    const y = _.x;
    return y instanceof Date ? y : new Date(y);
  }, [a]), m = u ?? 6, p = c ?? 6, x = Y.useMemo(() => yh(g, v, [m, Math.max(0, f - m)]), [g, v, f, m]), D = Y.useMemo(() => {
    if (l) {
      const _ = ei([], (y) => y.y, [Math.max(0, h - p), p]);
      return _.domain(l), _;
    }
    return ei(g, (_) => _.y, [Math.max(0, h - p), p]);
  }, [g, h, l]), I = Y.useMemo(() => ({
    xScale: x,
    yScale: D,
    getXTicks: (_ = s) => x.ticks(_),
    getYTicks: (_ = i) => D.ticks(_)
  }), [x, D, s, i]);
  return /* @__PURE__ */ r.jsx(Gs.Provider, { value: I, children: o });
}, ti = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: u,
  maxTickLabelLength: c,
  autoMinLabelSpacing: d = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: g
}) => {
  const v = vn(), m = rn(), p = t || (e === "x" ? v?.xScale : v?.yScale), x = n ?? (e === "x" ? 6 : 5), D = typeof o == "function", I = Y.useMemo(() => {
    if (D || !g) return;
    const M = (P) => new Intl.DateTimeFormat(void 0, P);
    switch (g) {
      case "dayShortMonth":
        return (P) => {
          const j = P instanceof Date ? P : new Date(P);
          return `${j.getDate()}
${M({ month: "short" }).format(j)}`;
        };
      case "dayShortMonthYear":
        return (P) => {
          const j = P instanceof Date ? P : new Date(P);
          return `${j.getDate()}
${M({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "shortMonth":
        return (P) => {
          const j = P instanceof Date ? P : new Date(P);
          return M({ month: "short" }).format(j);
        };
      case "shortMonthYear":
        return (P) => {
          const j = P instanceof Date ? P : new Date(P);
          return `${M({ month: "short" }).format(j)} ${j.getFullYear()}`;
        };
      case "hourMinute":
        return (P) => {
          const j = P instanceof Date ? P : new Date(P);
          return M({ hour: "2-digit", minute: "2-digit" }).format(j);
        };
      default:
        return;
    }
  }, [D, g]);
  let _ = D ? o : I || ((M) => String(M));
  const y = Y.useMemo(() => a && Array.isArray(a) ? a : p ? typeof p.ticks == "function" ? p.ticks(x) : p.domain ? p.domain() : [] : [], [p, x, a]);
  if (e === "x" && !D && !g && y.length && y.every((M) => M instanceof Date)) {
    const M = y[0], P = y[y.length - 1], j = P.getTime() - M.getTime(), w = 24 * 3600 * 1e3, T = 365 * w, k = M.getFullYear() === P.getFullYear(), b = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (j < 2 * w) {
      const L = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      _ = (N) => L.format(N);
    } else if (j < 32 * w)
      _ = (L) => {
        const N = L;
        return `${N.getDate()} ${b.format(N)}`;
      };
    else if (j < T && k)
      _ = (L) => b.format(L);
    else if (j < 2 * T) {
      const L = /* @__PURE__ */ new Set();
      _ = (N) => {
        const $ = N, S = $.getMonth();
        return L.has(S) || L.add(S), `${b.format($)} ${$.getFullYear()}`;
      };
    } else
      _ = (L) => String(L.getFullYear());
  }
  if (!p || !m) return null;
  if (e === "x") {
    const M = i ?? m.innerHeight, P = typeof p.bandwidth == "function", j = P ? p.bandwidth() : 0, w = (b) => {
      const L = p(b);
      return P ? L + j / 2 : L;
    };
    let T = u ?? 0;
    if (d && u == null) {
      const b = y.map((N) => _(N).replace(/\n.*/g, "")), L = b.length ? b.reduce((N, $) => N + $.length, 0) / b.length : 0;
      T = Math.max(12, Math.round(L * 6 + 4));
    }
    const k = Y.useMemo(() => {
      if (a && Array.isArray(a) || T <= 0) return y;
      const b = [];
      let L = -1 / 0;
      for (const N of y) {
        const $ = w(N);
        $ - L >= T && (b.push(N), L = $);
      }
      return b;
    }, [y, p, T, a, P, j]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${M})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: m.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      k.map((b, L) => {
        const N = _(b), $ = c && N.length > c ? N.slice(0, Math.max(1, c - 1)) + "…" : N, S = h ? $.split(/\n/) : [$.replace(/\n/g, " ")], A = f < 0 ? "end" : f > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${w(b)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: A, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: f ? `rotate(${f})` : void 0, fontFamily: "inherit", children: [
            S.map((re, V) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: V === 0 ? 0 : "1.1em", children: re }, V)),
            $ !== N && /* @__PURE__ */ r.jsx("title", { children: N })
          ] })
        ] }, b?.toString?.() || L);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    y.map((M, P) => {
      const j = _(M), w = c && j.length > c ? j.slice(0, Math.max(1, c - 1)) + "…" : j, T = h ? w.split(/\n/) : [w.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${p(M)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          T.map((k, b) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: b === 0 ? 0 : "1.1em", children: k }, b)),
          w !== j && /* @__PURE__ */ r.jsx("title", { children: j })
        ] })
      ] }, M?.toString?.() || P);
    }),
    s && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -m.innerHeight / 2, y: -m.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, kh = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = vn(), i = rn();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((u, c) => /* @__PURE__ */ r.jsx("line", { x1: 0, x2: i.innerWidth, y1: s.yScale(u), y2: s.yScale(u), stroke: n, strokeDasharray: a }, c)),
    e === "x" && l.map((u, c) => /* @__PURE__ */ r.jsx("line", { y1: 0, y2: i.innerHeight, x1: s.xScale(u), x2: s.xScale(u), stroke: n, strokeDasharray: a }, c))
  ] });
}, Ch = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, sr = {
  color: Ch
}, Nh = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, ua = {
  color: Nh
}, jh = [
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
let Ba = null, Ha = null, Oa = null, wl = "optimized";
function Dh() {
  const e = { color: { ...ua.color, ...sr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
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
    return jh;
  }
}
function Th() {
  return Ba || (Ba = Dh()), Ba;
}
function $h(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function Ua(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Ih(e, t, n) {
  const a = Ua(e), o = Ua(t), s = Ua(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, u = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: u * 100 };
}
function Mh(e, t, n) {
  let i = e / 95.047, l = t / 100, u = n / 108.883;
  const c = (d) => d > 8856e-6 ? Math.cbrt(d) : 7.787 * d + 16 / 116;
  return i = c(i), l = c(l), u = c(u), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - u) };
}
function _l(e) {
  const t = $h(e);
  if (!t) return null;
  const n = Ih(t.r, t.g, t.b);
  return Mh(n.x, n.y, n.z);
}
function ni(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function Lh() {
  const e = Th();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => _l(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let u = 0, c = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (u += ni(l, t[f]), c++);
    const d = u / Math.max(1, c);
    d > a && (a = d, n = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(n), o.delete(n); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const u of o) {
      const c = t[u];
      if (!c) continue;
      let d = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const g = ni(c, h);
          g < d && (d = g);
        }
      }
      d > l && (l = d, i = u);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function Ph() {
  return Ha || (Ha = Lh()), Ha;
}
function Fh(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (d) => {
    const f = d * d * d;
    return f > 8856e-6 ? f : (d - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, u = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: u, Z: c };
}
function Ah(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function Rh(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Eh(e, t) {
  const n = _l(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = Fh(a, n.a, n.b), l = Ah(o, s, i);
  return Rh(l.r, l.g, l.b);
}
function Bh() {
  const e = Ph(), n = [12, -12, 24, -24].map((o) => e.map((s) => Eh(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function Hh() {
  return (!Oa || Oh()) && (Oa = Bh(), Sl = wl), Oa;
}
let Sl = null;
function Oh() {
  return Sl !== wl;
}
function $t(e) {
  const t = Hh();
  return t[e % t.length];
}
let In = null, Qn = null, er = null, tr = null;
function Uh() {
  const e = sr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    In = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      In.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    Qn = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (Qn[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    tr = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (tr[s] = i);
    }), er = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (er[s] = i);
    });
  }
}
function da() {
  (!In || !Qn || !er || !tr) && Uh();
}
function gn(e) {
  return da(), In ? In[e % In.length] : "#212b32";
}
function Wh(e) {
  return da(), Qn ? Qn[e] : void 0;
}
function Pr(e, t) {
  return Wh(e) || gn(t);
}
const is = ["low", "moderate", "high", "critical"];
let Wa = null;
function zh() {
  const e = { color: { ...ua.color, ...sr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return is.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function kl() {
  return Wa || (Wa = zh()), Wa;
}
function Vh(e) {
  return kl()[e.toLowerCase()];
}
function Gh(e, t) {
  return Vh(e) || kl()[is[t % is.length]] || $t(t);
}
function Yh(e) {
  return da(), er ? er[e] : void 0;
}
function qh(e, t) {
  return Yh(e) || gn(t);
}
const ls = ["trust", "ambulance", "icb", "region"];
let za = null;
function Xh() {
  const e = { color: { ...ua.color, ...sr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, u) => l ? l[u] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return ls.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function Cl() {
  return za || (za = Xh()), za;
}
function Kh(e) {
  return Cl()[e.toLowerCase()];
}
function Jh(e, t) {
  return Kh(e) || Cl()[ls[t % ls.length]] || $t(t);
}
function Zh(e) {
  return da(), tr ? tr[e] : void 0;
}
function Qh(e, t) {
  return Zh(e) || gn(t);
}
let Va = null;
const em = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function tm(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function nm() {
  const e = { color: { ...ua.color, ...sr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((u, c) => u ? u[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return em.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function rm() {
  return Va || (Va = nm()), Va;
}
function am(e) {
  return rm()[tm(e)];
}
function Mn(e, t) {
  return am(e) || $t(t);
}
const Nl = Y.createContext(null), or = () => Y.useContext(Nl), jv = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = Y.useState(() => new Set(e)), i = n !== void 0, l = Y.useMemo(() => i ? new Set(n) : o, [i, n, o]), u = Y.useCallback((d) => {
    i || s(new Set(d)), a?.(Array.from(d));
  }, [i, a]), c = Y.useMemo(() => ({
    hiddenIds: l,
    isHidden: (d) => l.has(d),
    toggle: (d) => {
      const f = new Set(l);
      f.has(d) ? f.delete(d) : f.add(d), u(f);
    },
    showOnly: (d) => {
      u(/* @__PURE__ */ new Set());
    },
    showAll: () => u(/* @__PURE__ */ new Set()),
    setHidden: (d) => u(new Set(Array.isArray(d) ? d : Array.from(d)))
  }), [l, u]);
  return /* @__PURE__ */ r.jsx(Nl.Provider, { value: c, children: t });
}, jl = Y.createContext(null), Jt = () => Y.useContext(jl), sm = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = vn(), o = or(), [s, i] = Y.useState(null), l = Y.useRef(/* @__PURE__ */ new Map()), [u, c] = Y.useState([]), d = Y.useCallback(
    (P, j) => {
      l.current.set(P, j);
    },
    []
  ), f = Y.useCallback((P) => {
    l.current.delete(P);
  }, []), h = Y.useCallback(
    (P, j) => {
      if (!a) return;
      const { xScale: w, yScale: T } = a;
      let k = null, b = 1 / 0;
      l.current.forEach((L, N) => {
        L.forEach(($, S) => {
          const A = w($.x), re = T($.y), V = A - P, E = re - j, H = Math.sqrt(V * V + E * E);
          H < b && (b = H, k = {
            seriesId: N,
            index: S,
            x: $.x,
            y: $.y,
            clientX: A,
            clientY: re
          });
        });
      }), k && b <= t ? i(k) : i(null);
    },
    [a, t]
  ), g = Y.useCallback(() => i(null), []);
  Y.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: P, yScale: j } = a, w = [];
    l.current.forEach((T, k) => {
      T.forEach((b, L) => {
        (s.x instanceof Date && b.x instanceof Date ? b.x.getTime() === s.x.getTime() : b.x === s.x) && w.push({
          seriesId: k,
          index: L,
          x: b.x,
          y: b.y,
          clientX: P(b.x),
          clientY: j(b.y)
        });
      });
    }), w.sort((T, k) => T.seriesId.localeCompare(k.seriesId)), c(w);
  }, [s, a]);
  const v = Y.useCallback(
    (P) => {
      if (!s) return;
      const j = l.current.get(s.seriesId);
      if (!j) return;
      let w = s.index + P;
      if (w < 0 || w >= j.length) {
        if (!n) return;
        w = (w + j.length) % j.length;
      }
      const T = j[w];
      if (!a) return;
      const { xScale: k, yScale: b } = a;
      i({
        seriesId: s.seriesId,
        index: w,
        x: T.x,
        y: T.y,
        clientX: k(T.x),
        clientY: b(T.y)
      });
    },
    [s, a, n]
  ), m = Y.useCallback(
    (P) => {
      let j = Array.from(l.current.keys());
      if (o && (j = j.filter((A) => !o.isHidden(A))), j.length === 0) return;
      if (!s) {
        const A = j[0], re = l.current.get(A);
        if (!re || !a) return;
        const { xScale: V, yScale: E } = a, H = re[0];
        i({
          seriesId: A,
          index: 0,
          x: H.x,
          y: H.y,
          clientX: V(H.x),
          clientY: E(H.y)
        });
        return;
      }
      const w = j.indexOf(s.seriesId);
      if (w === -1) return;
      let T = w + P;
      if (T < 0 || T >= j.length) {
        if (!n) return;
        T = (T + j.length) % j.length;
      }
      const k = j[T], b = l.current.get(k);
      if (!b || !a) return;
      const L = Math.min(s.index, b.length - 1), N = b[L], { xScale: $, yScale: S } = a;
      i({
        seriesId: k,
        index: L,
        x: N.x,
        y: N.y,
        clientX: $(N.x),
        clientY: S(N.y)
      });
    },
    [s, a, n, o]
  ), p = Y.useCallback(() => {
    let P = Array.from(l.current.keys());
    if (o && (P = P.filter((L) => !o.isHidden(L))), P.length === 0) return;
    const j = s ? s.seriesId : P[0], w = l.current.get(j);
    if (!w || w.length === 0 || !a) return;
    const T = w[0], { xScale: k, yScale: b } = a;
    i({
      seriesId: j,
      index: 0,
      x: T.x,
      y: T.y,
      clientX: k(T.x),
      clientY: b(T.y)
    });
  }, [s, a, o]), x = Y.useCallback(() => {
    let P = Array.from(l.current.keys());
    if (o && (P = P.filter((N) => !o.isHidden(N))), P.length === 0) return;
    const j = s ? s.seriesId : P[0], w = l.current.get(j);
    if (!w || w.length === 0 || !a) return;
    const T = w.length - 1, k = w[T], { xScale: b, yScale: L } = a;
    i({
      seriesId: j,
      index: T,
      x: k.x,
      y: k.y,
      clientX: b(k.x),
      clientY: L(k.y)
    });
  }, [s, a, o]), D = Y.useCallback(
    () => v(1),
    [v]
  ), I = Y.useCallback(
    () => v(-1),
    [v]
  ), _ = Y.useCallback(
    () => m(1),
    [m]
  ), y = Y.useCallback(
    () => m(-1),
    [m]
  ), M = Y.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: u,
      focusNearest: h,
      clear: g,
      registerSeries: d,
      unregisterSeries: f,
      focusNextPoint: D,
      focusPrevPoint: I,
      focusNextSeries: _,
      focusPrevSeries: y,
      focusFirstPoint: p,
      focusLastPoint: x
    }),
    [
      s,
      u,
      h,
      g,
      d,
      f,
      D,
      I,
      _,
      y,
      p,
      x
    ]
  );
  return /* @__PURE__ */ r.jsx(jl.Provider, { value: M, children: e });
}, om = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: u = 1,
  smooth: c = !0,
  gradientFillId: d,
  colors: f
}) => {
  const h = vn();
  if (!h) return null;
  const { xScale: g, yScale: v } = h, p = or()?.isHidden(e.id) ?? !1, x = p && l === "fade";
  if (p && l === "remove")
    return null;
  const D = Jt();
  Y.useEffect(() => {
    if (!D) return;
    const j = e.data.map((w) => ({ x: i(w), y: w.y }));
    return D.registerSeries(e.id, j), () => D.unregisterSeries(e.id);
  }, [D, e.id, e.data, i]);
  const I = Y.useMemo(
    () => os(
      e.data,
      (j) => g(i(j)),
      (j) => v(j.y),
      { smooth: c }
    ),
    [e.data, g, v, i, c]
  ), _ = Y.useMemo(() => {
    if (!e.data.length) return "";
    const [j] = v.domain(), w = ss().x((T) => g(i(T))).y0(() => v(j)).y1((T) => v(T.y));
    return c && w.curve(Lr), w(e.data) || "";
  }, [e.data, g, v, i, c]), y = f && f[t], M = e.color || y || (n === "region" ? Mn(e.id, t) : $t(t)), P = n === "region" ? Pr(e.id, t) : gn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: x ? 0.25 : 1,
      "aria-hidden": x ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: _,
            fill: `url(#${d})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: I,
            fill: "none",
            stroke: M,
            strokeWidth: u,
            role: "presentation"
          }
        ),
        a && e.data.map((j, w) => {
          const T = g(i(j)), k = v(j.y), b = o ? 0 : -1, L = !x && (o && w === s || D?.focused?.seriesId === e.id && D.focused.index === w), N = () => {
            D && !x && D.setFocused({
              seriesId: e.id,
              index: w,
              x: i(j),
              y: j.y,
              clientX: T,
              clientY: k
            });
          }, $ = () => {
            D && D.focused?.seriesId === e.id && D.focused.index === w && D.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: T,
              cy: k,
              r: L ? 5 : 3.5,
              stroke: L ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : P,
              strokeWidth: L ? 2 : 1,
              fill: L ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : M,
              className: "fdp-line-point",
              tabIndex: x ? -1 : b,
              "aria-label": `${e.label || e.id} ${i(j).toDateString()} value ${j.y}`,
              "data-series": e.id,
              "data-index": w,
              onMouseEnter: N,
              onFocus: N,
              onMouseLeave: $,
              onBlur: $
            },
            w
          );
        })
      ]
    }
  );
}, im = ({ polite: e = !0, format: t }) => {
  const n = Jt(), [a, o] = Y.useState(""), s = Y.useRef("");
  return Y.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let u;
    if (l && l.length > 1) {
      const c = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      u = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      u = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : lm(i.seriesId, i.x, i.y, i.index);
    if (u !== s.current) {
      s.current = u, o("");
      const c = setTimeout(() => o(u), 10);
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
function lm(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const Dv = () => {
  const e = Jt(), t = rn();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), u = i + 8, c = l - 8, d = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = d ? f : `${f} • ${n.y}`, g = /\d+$/.exec(n.seriesId || ""), v = g ? parseInt(g[0], 10) - 1 : 0, m = $t(v >= 0 ? v : 0) || "#005eb8", p = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: p, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: p, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    d ? (() => {
      const D = a.map((P) => `${P.seriesId}: ${P.y}`), I = [h, ...D], _ = I.reduce((P, j) => Math.max(P, j.length), 0), y = Math.max(90, _ * 6.2 + 16), M = 16 * I.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: u, y: c - M, rx: 4, ry: 4, width: y, height: M, fill: "#212b32", opacity: 0.92 }),
        I.map((P, j) => /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - M + 6 + 16 * (j + 0.7), fill: "#fff", fontSize: 12, children: P }, j))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: u, y: c - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: u + 8, y: c - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, Tv = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: u
}) => {
  const c = or(), d = !!(c && !a && !l && s === void 0), f = a || d, h = e || [], g = s !== void 0, [v, m] = Y.useState(new Set(i)), p = g ? new Set(s) : v, [x, D] = Y.useState(""), I = (_) => {
    if (d && c) {
      const b = c.isHidden(_);
      c.toggle(_);
      const N = h.find((S) => S.id === _)?.label || _, $ = u ? u(_, b, N) : `${N} ${b ? "shown" : "hidden"}`;
      D($);
      return;
    }
    if (!f) return;
    const y = new Set(p), M = y.has(_);
    M ? y.delete(_) : y.add(_), g || m(y);
    const P = h.filter((b) => !y.has(b.id)).map((b) => b.id), j = Array.from(y);
    l?.(P, j);
    const T = h.find((b) => b.id === _)?.label || _, k = u ? u(_, M, T) : `${T} ${M ? "shown" : "hidden"}`;
    D(k);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((_, y) => {
      const M = _.palette || t, P = _.color || (M === "region" ? Mn(_.id, y) : M === "severity" ? Gh(_.id, y) : M === "org-level" ? Jh(_.id, y) : $t(y));
      let j = _.stroke || (M === "region" ? Pr(_.id, y) : M === "severity" ? qh(_.id, y) : M === "org-level" ? Qh(_.id, y) : gn(y));
      if (o && j) {
        const k = j.trim().toLowerCase();
        (k === "#fff" || k === "#ffffff" || k === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(k)) && (j = "#212b32");
      }
      const w = d && c ? c.isHidden(_.id) : p.has(_.id), T = f ? {
        "aria-pressed": !w,
        "aria-label": `${_.label} (${w ? "show" : "hide"})`,
        onClick: () => I(_.id)
      } : { "aria-label": _.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${w ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: P,
              backgroundImage: _.patternDataUrl ? `url(${_.patternDataUrl})` : void 0,
              backgroundSize: _.patternDataUrl ? "auto" : void 0,
              borderColor: j
            },
            ...T
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: _.label })
      ] }, _.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: x })
  ] });
}, $v = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: u,
  gradientFill: c = !0,
  colors: d
}) => {
  const f = vn();
  if (!f) return null;
  const { xScale: h, yScale: g } = f, m = or()?.isHidden(e.id) ?? !1, p = m && s === "fade";
  if (m && s === "remove") return null;
  const x = Jt();
  Y.useEffect(() => {
    if (!x) return;
    const P = e.data.map((j) => ({ x: a(j), y: j.y }));
    return x.registerSeries(e.id, P), () => x.unregisterSeries(e.id);
  }, [x, e.id, e.data, a]);
  const D = d && d[t], I = e.color || D || (n === "region" ? Mn(e.id, t) : $t(t)), _ = Y.useMemo(() => u && u.length === e.data.length ? os(
    e.data,
    (P) => h(a(P)),
    (P) => {
      const j = e.data.indexOf(P);
      return g(u[j].y1);
    },
    { smooth: l }
  ) : os(
    e.data,
    (P) => h(a(P)),
    (P) => g(P.y),
    { smooth: l }
  ), [e.data, u, h, g, a, l]), y = Y.useMemo(() => {
    if (u && u.length === e.data.length) {
      const k = ss().x((b) => h(a(b))).y0((b, L) => g(u[L].y0)).y1((b, L) => g(u[L].y1));
      return l && k.curve(Lr), k(e.data) || "";
    }
    const [P, j] = g.domain();
    let w = i;
    w < P ? w = P : w > j && (w = j);
    const T = ss().x((k) => h(a(k))).y0(() => g(w)).y1((k) => g(k.y));
    return l && T.curve(Lr), T(e.data) || "";
  }, [e.data, u, h, g, a, i, l]), M = Y.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: p ? 0.25 : 1,
      "aria-hidden": p ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: M, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: I, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: I, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: y,
            fill: c ? `url(#${M})` : I,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: _, fill: "none", stroke: I, strokeWidth: 1 })
      ]
    }
  );
}, Iv = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: u,
  adaptive: c = !1,
  adaptiveGroupOccupancy: d = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: g,
  stacked: v,
  gapRatio: m = 0.15,
  minBarWidth: p,
  gradientFill: x = !0,
  gradientStrokeMatch: D = !0,
  opacity: I = 1,
  fadedOpacity: _ = 0.25,
  flatFillOpacity: y = 1,
  colors: M
}) => {
  const P = Math.max(0, m), j = vn(), w = rn();
  if (!j || !w) return null;
  const { xScale: T, yScale: k } = j, L = or()?.isHidden(e.id) ?? !1, N = L && f === "fade";
  if (L && f === "remove") return null;
  const $ = Jt();
  Y.useEffect(() => {
    if (!$) return;
    const K = e.data.map((ee) => ({ x: o(ee), y: ee.y }));
    return $.registerSeries(e.id, K), () => $.unregisterSeries(e.id);
  }, [$, e.id, e.data, o]);
  const S = typeof T.bandwidth == "function", A = S ? T.bandwidth() : void 0, re = Y.useMemo(() => {
    if (A != null) return A;
    const K = g && g.length ? g : [e], ee = [];
    K.forEach((W) => {
      W.data.forEach((ne) => {
        const Z = T(o(ne));
        Number.isFinite(Z) && ee.push(Z);
      });
    });
    const ue = ee.sort((W, ne) => W - ne);
    if (ue.length <= 1) return 40;
    const C = [];
    for (let W = 1; W < ue.length; W++)
      C.push(ue[W] - ue[W - 1]);
    return C.sort((W, ne) => W - ne), (C[Math.floor(C.length / 2)] || 40) * i;
  }, [e.data, g, T, o, i, A]), { basePerBar: V } = Y.useMemo(() => {
    if (S) {
      const ue = re, C = Math.max(
        1,
        (ue - l * (n - 1)) / n
      ), B = e.barWidth ?? u;
      let W = B ? Math.min(B, ue) : C;
      if (c) {
        const ne = ue * Math.min(1, Math.max(0.05, d)), Z = Math.max(
          1,
          (ne - l * (n - 1)) / n
        );
        W = B ? Math.min(W, Z) : Z;
      }
      return { basePerBar: W };
    }
    const K = e.barWidth ?? u, ee = Math.max(
      1,
      (re - l * (n - 1)) / n
    );
    if (c) {
      const ue = g && g.length ? g : [e], C = [];
      ue.forEach(
        (be) => be.data.forEach((Ce) => {
          const he = T(o(Ce));
          Number.isFinite(he) && C.push(he);
        })
      ), C.sort((be, Ce) => be - Ce);
      const B = [];
      for (let be = 1; be < C.length; be++)
        B.push(C[be] - C[be - 1]);
      B.sort((be, Ce) => be - Ce);
      const ne = (B[Math.floor(B.length / 2)] || re) * Math.min(1, Math.max(0.05, d)), Z = Math.max(
        1,
        (ne - l * (n - 1)) / n
      );
      return { basePerBar: K ? Math.min(K, Z) : Z };
    }
    return K ? { basePerBar: Math.min(K, ee) } : { basePerBar: ee };
  }, [
    S,
    re,
    l,
    n,
    u,
    e.barWidth,
    c,
    d,
    g,
    T,
    o
  ]), E = Y.useMemo(() => {
    if (S) return [];
    const K = [];
    return (g && g.length ? g : [e]).forEach(
      (ue) => ue.data.forEach((C) => {
        const B = T(o(C));
        Number.isFinite(B) && K.push(B);
      })
    ), K.sort((ue, C) => ue - C), Array.from(new Set(K));
  }, [S, g, e, T, o]), H = Y.useMemo(() => {
    if (S)
      return [];
    if (!E.length) return [];
    if (E.length === 1)
      return [
        { center: E[0], left: 0, right: w.innerWidth }
      ];
    const K = [];
    for (let ee = 0; ee < E.length; ee++) {
      const ue = E[ee], C = ee === 0 ? 0 : (E[ee - 1] + ue) / 2, B = ee === E.length - 1 ? w.innerWidth : (ue + E[ee + 1]) / 2;
      K.push({
        center: ue,
        left: Math.max(0, C),
        right: Math.min(w.innerWidth, B)
      });
    }
    return K;
  }, [S, E, w.innerWidth]), z = Y.useMemo(() => {
    if (S || !H.length)
      return;
    const K = Math.min(1, Math.max(0.05, i)), ee = H.map((ne) => Math.max(2, ne.right - ne.left)), ue = ee.map(
      (ne) => Math.max(2, Math.min(ne - 1, ne * K))
    );
    let C = Math.min(...ue);
    if (p)
      if (n <= 1) {
        const ne = Math.min(...ee.map((Z) => Z - 1));
        ne >= p && C < p && (C = Math.min(ne, p));
      } else {
        const ne = Math.min(...ee.map((ie) => ie - 1)), Z = p * n + (n - 1) * (p * P);
        Z <= ne && C < Z && (C = Z);
      }
    if (n <= 1)
      return p && C < p && ee.every((Z) => Z >= p) ? { groupWidth: p, barWidth: p } : { groupWidth: C, barWidth: C };
    let B = C / (n + (n - 1) * P);
    return B < 1 && (B = 1), p && B < p && p * n + (n - 1) * (p * P) <= C && (B = p), { groupWidth: B * n + (n - 1) * (B * P), barWidth: B };
  }, [
    S,
    H,
    i,
    n,
    P,
    p
  ]), ae = M && M[t] ? M[t] : void 0, O = e.color || ae || (a === "region" ? Mn(e.id, t) : $t(t)), pe = a === "region" ? Pr(e.id, t) : gn(t), Se = D && (e.color || ae) ? O : pe, ce = Number.isFinite(k(0)) ? k(0) : k.range()[0], de = Y.useId();
  return v && v.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: N ? _ : I,
      "aria-hidden": N ? !0 : void 0,
      children: [
        x && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: de,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: O, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: O,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: O,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((K, ee) => {
          const ue = o(K), C = T(S ? K.x : ue);
          let B, W;
          if (S)
            B = re, W = C;
          else {
            const G = H.find(
              (J) => Math.abs(J.center - C) < 0.5
            );
            if (!G || !z)
              B = V, W = C - V / 2;
            else {
              const { groupWidth: J } = z;
              B = J;
              let F = C - J / 2;
              F < G.left && (F = G.left), F + J > G.right && (F = Math.max(G.left, G.right - J)), W = F;
            }
          }
          const ne = v[ee], Z = k(ne.y0), ie = k(ne.y1), be = Math.min(Z, ie), Ce = Math.abs(ie - Z) || 1;
          if (!S && p && B < p) {
            const G = H.find(
              (J) => Math.abs(J.center - C) < 0.5
            );
            if (G) {
              const J = Math.max(2, G.right - G.left - 1), F = Math.min(J, p);
              F > B && (B = F, W = Math.max(
                G.left,
                Math.min(G.right - B, C - B / 2)
              ));
            }
          }
          const he = !N && $?.focused?.seriesId === e.id && $.focused.index === ee, R = () => {
            !$ || N || $.setFocused({
              seriesId: e.id,
              index: ee,
              x: ue,
              y: ne.y1 - ne.y0,
              clientX: W + B / 2,
              clientY: be
            });
          }, U = () => {
            $?.focused?.seriesId === e.id && $.focused.index === ee && $.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: W,
              y: be,
              width: B,
              height: Ce,
              fill: x ? `url(#${de})` : O,
              ...x ? {} : { fillOpacity: y },
              stroke: he ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : x && D ? O : void 0,
              strokeWidth: he ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: N || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${ne.y1 - ne.y0}`,
              onMouseEnter: R,
              onFocus: R,
              onMouseLeave: U,
              onBlur: U
            },
            ee
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: N ? _ : I,
      "aria-hidden": N ? !0 : void 0,
      children: [
        x && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: de,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: O, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: O,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: O,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((K, ee) => {
            const C = M && M[ee] || (a === "region" ? Mn(String(K.x), ee) : $t(ee)), B = `${de}-${ee}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: B,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: C, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: C, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: C, stopOpacity: 0.06 })
                ]
              },
              B
            );
          })
        ] }),
        e.data.map((K, ee) => {
          const ue = o(K), C = T(S ? K.x : ue);
          let B, W;
          if (S) {
            const Q = re;
            if (n <= 1)
              W = Q, B = C;
            else {
              W = Math.max(
                1,
                Q / (n + (n - 1) * P)
              );
              const te = W * P, q = W * n + te * (n - 1);
              B = C + (Q - q) / 2 + t * (W + te);
            }
          } else {
            const Q = H.find((te) => te.center === C);
            if (!Q || !z)
              W = V, B = C - V / 2, p && W < p && (W = p, B = C - W / 2);
            else {
              const { barWidth: te } = z;
              W = te;
              const q = n > 1 ? te * P : 0, se = W * n + q * (n - 1);
              let me = C - se / 2;
              me < Q.left && (me = Q.left), me + se > Q.right && (me = Math.max(Q.left, Q.right - se)), B = me + t * (W + q);
            }
            if (p && W < p) {
              const te = H.find(
                (q) => Math.abs(q.center - C) < 0.5
              );
              if (te) {
                const q = Math.max(2, te.right - te.left - 1), se = Math.min(q, p);
                if (se > W)
                  if (n <= 1)
                    W = se, B = Math.max(
                      te.left,
                      Math.min(te.right - W, C - W / 2)
                    );
                  else {
                    const me = se * P, ve = se * n + me * (n - 1);
                    if (ve <= te.right - te.left - 1) {
                      W = se;
                      const oe = ve;
                      let le = C - oe / 2;
                      le < te.left && (le = te.left), le + oe > te.right && (le = Math.max(
                        te.left,
                        te.right - oe
                      )), B = le + t * (W + me);
                    }
                  }
              }
            }
          }
          const ne = B + W / 2, Z = k(K.y), ie = Math.min(ce, Z), be = Math.abs(ce - Z), Ce = !N && $?.focused?.seriesId === e.id && $.focused.index === ee, he = () => {
            !$ || N || $.setFocused({
              seriesId: e.id,
              index: ee,
              x: ue,
              y: K.y,
              clientX: ne,
              clientY: Z
            });
          }, R = () => {
            $?.focused?.seriesId === e.id && $.focused.index === ee && $.clear();
          }, U = h === "category" && M ? M[ee] : void 0, G = h === "category" ? U || (a === "region" ? Mn(String(K.x), ee) : $t(ee)) : O, J = h === "category" ? `${de}-${ee}` : de, F = x && D ? G : h === "category" ? a === "region" ? Pr(String(K.x), ee) : gn(ee) : Se, X = Ce ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : F || G;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: B,
              y: ie,
              width: W,
              height: be || 1,
              fill: x ? `url(#${J})` : G,
              ...x ? {} : { fillOpacity: y },
              stroke: X,
              strokeWidth: Ce ? 2 : 1,
              className: "fdp-bar",
              tabIndex: N || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${ue instanceof Date ? ue.toDateString() : ue} value ${K.y}`,
              onMouseEnter: he,
              onFocus: he,
              onMouseLeave: R,
              onBlur: R
            },
            ee
          );
        })
      ]
    }
  );
}, Mv = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = rn(), u = t ?? l?.innerWidth ?? 0, c = n ?? l?.innerHeight ?? 0, d = Y.useMemo(() => e.flatMap((p) => p.data), [e]), f = Y.useMemo(() => {
    const p = /* @__PURE__ */ new Set();
    return d.forEach((x) => p.add(x.x)), Array.from(p);
  }, [d]), h = Y.useMemo(
    () => Math.max(0, ...d.map((p) => p.y)),
    [d]
  ), g = Y.useMemo(
    () => Li().domain(f).range([0, u]).paddingInner(a).paddingOuter(o),
    [f, u, a, o]
  ), v = Y.useMemo(
    () => Cr().domain([0, h]).nice().range([c, 0]),
    [h, c]
  ), m = Y.useMemo(
    () => ({
      xScale: g,
      yScale: v,
      getXTicks: () => f,
      getYTicks: (p = i) => v.ticks(p)
    }),
    [g, v, f, i]
  );
  return /* @__PURE__ */ r.jsx(Gs.Provider, { value: m, children: s });
}, Lv = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const u = Y.useId(), c = s || u, d = t ? `${c}-desc` : void 0, f = n ? `${c}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: c,
      className: Ir("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${c}-title`,
      "aria-describedby": Ir(d, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${c}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: d, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(Kt, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(Kt, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, Pv = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = Y.useRef(null);
  return Y.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
      if (l.length === 0) return;
      const u = [];
      l.forEach((c) => {
        c.classList.contains("fdp-chart--enhanced") || (c.classList.add("fdp-chart--enhanced"), u.push(c));
      }), u.length && t && t(u);
    };
    if (n > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: o, children: a });
}, cm = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: u,
  loading: c = !1,
  error: d,
  valueFormatter: f,
  className: h,
  style: g,
  id: v,
  announceDelta: m = !0,
  visual: p
}) => {
  const x = Y.useId(), D = v || x, I = `${D}-label`, _ = `${D}-value`, y = `${D}-delta`, M = typeof t == "number" && !Number.isNaN(t), P = c ? "—" : d ? "" : M ? f ? f(t) : t.toLocaleString() : t;
  let j, w = "", T = "";
  if (a && !c && !d) {
    j = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const k = Math.abs(a.value), b = j === "up" ? `+${k}` : j === "down" ? `-${k}` : "0", L = a.isPercent ? "%" : "";
    if (w = `${b}${L}`, a.ariaLabel)
      T = a.ariaLabel;
    else {
      const N = a.invert ? j === "down" : j === "up";
      T = `${j === "neutral" ? "no change" : j === "up" ? "up" : "down"} ${k}${L}${j === "neutral" ? "" : N ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Ir(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        c && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        h
      ),
      style: g,
      role: "group",
      "aria-labelledby": I,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: I, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: _, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: d }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: P }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: y,
              "aria-label": T,
              className: Ir(
                "fdp-metric-card__delta",
                j && `fdp-metric-card__delta--${j}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: w }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          u && u.length > 0 && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        p && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: p }),
        m && a && !a.ariaLabel && !c && !d && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: T })
      ] })
    }
  );
};
let cs = null;
try {
  cs = require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const Ue = (e, t) => {
  if (!cs) return t;
  const n = e.split(".");
  let a = cs;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, fa = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: Ue("gradient.stop.start-opacity", "0.12"),
  mid: Ue("gradient.stop.mid-opacity", "0.03"),
  end: Ue("gradient.stop.end-opacity", "0"),
  triStart: Ue(
    "gradient.stop.triangle-start-opacity",
    Ue("gradient.stop.start-opacity", "0.12")
  ),
  triMid: Ue(
    "gradient.stop.triangle-mid-opacity",
    Ue("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: Ue(
    "gradient.stop.triangle-end-opacity",
    Ue("gradient.stop.end-opacity", "0")
  )
});
var Dt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Dt || {}), Fe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Fe || {}), Le = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(Le || {}), Lt = /* @__PURE__ */ ((e) => (e.SinglePoint = "single_point", e.TwoSigma = "two_sigma", e.Shift = "shift", e.Trend = "trend", e))(Lt || {});
const Ys = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
Ys.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const um = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, dm = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, Dl = Ys.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: um[t],
    category: dm[t],
    participatesInRanking: !0
  }, e),
  {}
);
Ys.map(
  (e) => Dl[e]
);
var ht = /* @__PURE__ */ ((e) => (e.Up = "up", e.Down = "down", e))(ht || {}), pt = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(pt || {}), et = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(et || {}), vt = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(vt || {}), mr = /* @__PURE__ */ ((e) => (e.Legacy = "legacy", e.DirectionalFirst = "directional_first", e))(mr || {}), Tl = /* @__PURE__ */ ((e) => (e.None = "none", e.SqlRankingV26a = "sql_ranking_v2_6a", e))(Tl || {}), Cn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(Cn || {}), $l = /* @__PURE__ */ ((e) => (e.Sql = "sql", e.Conflict = "conflict", e))($l || {}), Yn = /* @__PURE__ */ ((e) => (e.ImprovementValueBeforePruning = "improvementValueBeforePruning", e.ConcernValueBeforePruning = "concernValueBeforePruning", e))(Yn || {});
const Ln = {
  singlePointUp: {
    tooltip: "Single point above upper control limit",
    narration: "Single point beyond a control limit"
  },
  singlePointDown: {
    tooltip: "Single point below lower control limit",
    narration: "Single point beyond a control limit"
  },
  twoOfThreeUp: {
    tooltip: "Two of three points beyond +2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  twoOfThreeDown: {
    tooltip: "Two of three points beyond -2σ",
    narration: "Two of three points beyond two sigma (same side)"
  },
  fourOfFiveUp: {
    tooltip: "Four of five points beyond +1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  fourOfFiveDown: {
    tooltip: "Four of five points beyond -1σ",
    narration: "Four of five points beyond one sigma (same side)"
  },
  shiftUp: {
    tooltip: "Shift: run of points above centre line",
    narration: "Shift (run on one side of mean)"
  },
  shiftDown: {
    tooltip: "Shift: run of points below centre line",
    narration: "Shift (run on one side of mean)"
  },
  trendUp: {
    tooltip: "Trend: consecutive increasing points",
    narration: "Trend (consecutive increases)"
  },
  trendDown: {
    tooltip: "Trend: consecutive decreasing points",
    narration: "Trend (consecutive decreases)"
  }
};
function pa(e) {
  if (!e) return [];
  const t = [];
  return e.specialCauseSinglePointUp && t.push(
    "singlePointUp"
    /* SinglePointUp */
  ), e.specialCauseSinglePointDown && t.push(
    "singlePointDown"
    /* SinglePointDown */
  ), e.specialCauseTwoOfThreeUp && t.push(
    "twoOfThreeUp"
    /* TwoOfThreeUp */
  ), e.specialCauseTwoOfThreeDown && t.push(
    "twoOfThreeDown"
    /* TwoOfThreeDown */
  ), e.specialCauseFourOfFiveUp && t.push(
    "fourOfFiveUp"
    /* FourOfFiveUp */
  ), e.specialCauseFourOfFiveDown && t.push(
    "fourOfFiveDown"
    /* FourOfFiveDown */
  ), e.specialCauseShiftUp && t.push(
    "shiftUp"
    /* ShiftUp */
  ), e.specialCauseShiftDown && t.push(
    "shiftDown"
    /* ShiftDown */
  ), e.specialCauseTrendUp && t.push(
    "trendUp"
    /* TrendUp */
  ), e.specialCauseTrendDown && t.push(
    "trendDown"
    /* TrendDown */
  ), t;
}
function ha(e) {
  switch (e) {
    case Le.Improvement:
      return "Improvement signal";
    case Le.Concern:
      return "Concern signal";
    case Le.Neither:
      return "Common cause variation";
    case Le.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function Il(e) {
  switch (e) {
    case et.Pass:
      return "Target met";
    case et.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function fm(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const kt = {
  improvement: {
    token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)",
    hex: "#00B0F0"
  },
  concern: {
    token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)",
    hex: "#E46C0A"
  },
  neither: {
    token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
    hex: "#A6A6A6"
  },
  suppressed: {
    token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)",
    hex: "#490092"
  }
};
function Ml(e) {
  return e ? kt[e]?.token ?? kt.neither.token : kt.neither.token;
}
function pm(e) {
  return e ? kt[e]?.hex ?? kt.neither.hex : kt.neither.hex;
}
var nn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(nn || {});
const hm = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, mm = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Ze = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Ze || {}), Ie = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Ie || {}), mt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(mt || {}), Ne = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ne || {});
const gm = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, ma = {
  special_cause_deteriorating: {
    hex: kt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: kt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: kt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: kt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(ma).forEach((e) => {
  e.text || (e.text = gm(e.hex));
});
const qs = (e) => ma[e], ga = (e) => ma[e].judgement || "none", ri = {
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
function xm(e, t) {
  let n;
  return e === "common_cause" ? n = ri.common : n = ri.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
var at = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(at || {}), dn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(dn || {}), nr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(nr || {});
const Ll = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Fe.Up ? Ze.HigherIsBetter : i.improvementDirection === Fe.Down ? Ze.LowerIsBetter : Ze.ContextDependent : i.polarity && (l = i.polarity);
    let u;
    switch (i.variationIcon) {
      case Le.Improvement:
        u = Ne.SpecialCauseImproving;
        break;
      case Le.Concern:
        u = Ne.SpecialCauseDeteriorating;
        break;
      case Le.Neither:
        u = i.specialCauseNeutral ? Ne.SpecialCauseNoJudgement : Ne.CommonCause;
        break;
      case Le.Suppressed:
      default:
        u = Ne.SpecialCauseNoJudgement;
        break;
    }
    let c = i.trend;
    return c || (u === Ne.SpecialCauseImproving ? c = l === Ze.LowerIsBetter ? Ie.Lower : Ie.Higher : u === Ne.SpecialCauseDeteriorating ? c = l === Ze.LowerIsBetter ? Ie.Higher : Ie.Lower : u === Ne.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? c = Ie.Higher : i.lowSideSignal && !i.highSideSignal ? c = Ie.Lower : c = Ie.Higher : c = Ie.Higher), { state: u, direction: c, polarity: l ?? Ze.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Ne.SpecialCauseImproving || i.state === Ne.SpecialCauseDeteriorating) && i.polarity && (i.state === Ne.SpecialCauseImproving ? l = i.polarity === Ze.LowerIsBetter ? Ie.Lower : Ie.Higher : l = i.polarity === Ze.LowerIsBetter ? Ie.Higher : Ie.Lower), l || (i.state === Ne.SpecialCauseImproving ? l = Ie.Higher : i.state === Ne.SpecialCauseDeteriorating ? l = Ie.Lower : l = Ie.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? Ze.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [mt.Improving]: Ne.SpecialCauseImproving,
    [mt.Deteriorating]: Ne.SpecialCauseDeteriorating,
    [mt.No_Judgement]: Ne.SpecialCauseNoJudgement,
    [mt.None]: Ne.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === mt.Improving ? s = n.polarity === Ze.LowerIsBetter ? Ie.Lower : Ie.Higher : n.judgement === mt.Deteriorating ? s = n.polarity === Ze.LowerIsBetter ? Ie.Higher : Ie.Lower : s = n.trend ?? Ie.Higher, { state: o, direction: s, polarity: n.polarity };
};
function Pl(e, t) {
  const { state: n, direction: a, polarity: o } = Ll(e), s = ga(n), i = a === Ie.Higher ? "above" : "below", l = a === Ie.Higher ? "upwards" : "downwards", u = (() => {
    switch (o) {
      case Ze.HigherIsBetter:
        return "For this measure, higher values are better.";
      case Ze.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case mt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case mt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case mt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case mt.None:
        default:
          return "Common cause variation: points vary randomly around the mean; no special cause detected.";
      }
    })(),
    u,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const Ga = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), xa = ({
  data: e,
  size: t = 44,
  ariaLabel: n,
  showLetter: a = !0,
  dropShadow: o = !0,
  gradientWash: s = !1,
  variant: i = dn.Classic,
  runLength: l = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = nr.Polarity,
  letterOverride: c,
  ...d
}) => {
  const f = xr(), h = xr(), {
    start: g,
    mid: v,
    end: m,
    triStart: p,
    triMid: x,
    triEnd: D
  } = fa(), { state: I, direction: _, polarity: y } = Me(
    () => Ll(e),
    [e]
  ), M = Me(() => qs(I), [I]), P = Me(() => ga(I), [I]), j = P === mt.Improving || P === mt.Deteriorating;
  let w = "";
  a && j && (u === nr.Polarity ? y === Ze.HigherIsBetter ? w = "H" : y === Ze.LowerIsBetter ? w = "L" : w = "" : w = _ === Ie.Higher ? "H" : "L"), c !== void 0 && (w = c);
  const T = I !== Ne.CommonCause, k = I === Ne.SpecialCauseNoJudgement, b = Ue("common-cause", "#A6A6A6"), L = T ? M.hex : b, N = Me(
    () => xm(I, _),
    [I, _]
  ), $ = n || `${M.label}${w ? _ === Ie.Higher ? " – Higher" : " – Lower" : ""}`, S = Pl(
    e
  );
  if (i === dn.TriangleWithRun) {
    const H = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], z = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let ae = null;
    I === Ne.SpecialCauseImproving || I === Ne.SpecialCauseDeteriorating ? ae = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === Ie.Higher ? H : z).map((B) => B.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: _ === Ie.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : I === Ne.SpecialCauseNoJudgement && (ae = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === Ie.Higher ? H.map((B) => B.join(",")).join(" ") : z.map((B) => B.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 6,
        transform: _ === Ie.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const O = Math.max(0, Math.min(5, Math.floor(l || 0))), pe = I === Ne.CommonCause ? 160 : _ === Ie.Higher ? 220 : 70, Se = 10, ce = 26, de = 150 - 2 * ce, K = I === Ne.SpecialCauseImproving ? Ue("improvement", "#00B0F0") : I === Ne.SpecialCauseDeteriorating ? Ue("concern", "#E46C0A") : b, ee = Array.from({ length: 5 }).map((B, W) => {
      const Z = (I === Ne.SpecialCauseImproving || I === Ne.SpecialCauseDeteriorating) && W >= 5 - O ? K : b;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: de + W * ce,
          cy: pe,
          r: Se,
          fill: Z,
          stroke: Z,
          strokeWidth: 1
        },
        W
      );
    }), ue = Ga(
      M.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "75%", opacity: x },
        { offset: "100%", opacity: D }
      ]
    ), C = I === Ne.CommonCause || _ === Ie.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": $,
        "aria-description": S,
        ...d,
        children: [
          ue,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${h})` : "#ffffff",
              ...o ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: M.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: C, children: [
            ae,
            w && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: _ === Ie.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: w
              }
            ),
            ee
          ] })
        ]
      }
    );
  }
  if (i === dn.Triangle) {
    const H = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], z = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], ae = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let O = null;
    I === Ne.SpecialCauseImproving || I === Ne.SpecialCauseDeteriorating ? O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === Ie.Higher ? H : z).map((Se) => Se.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: _ === Ie.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : I === Ne.SpecialCauseNoJudgement ? O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === Ie.Higher ? H.map((Se) => Se.join(",")).join(" ") : z.map((Se) => Se.join(",")).join(" "),
        fill: M.hex,
        stroke: M.hex,
        strokeWidth: 8,
        transform: _ === Ie.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : I === Ne.CommonCause && (O = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: ae[0][0],
        y1: ae[0][1],
        x2: ae[1][0],
        y2: ae[1][1],
        stroke: M.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const pe = Ga(
      M.hex,
      f,
      h,
      o,
      s,
      [
        { offset: "0%", opacity: p },
        { offset: "65%", opacity: x },
        { offset: "100%", opacity: D }
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
        "aria-description": S,
        ...d,
        children: [
          pe,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: s ? `url(#${h})` : "#ffffff",
              ...o ? { filter: `url(#${f})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: M.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          O,
          w && (I === Ne.SpecialCauseImproving || I === Ne.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: _ === Ie.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: w
            }
          )
        ]
      }
    );
  }
  const A = Ga(
    M.hex,
    f,
    h,
    o,
    s,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: v },
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
      "aria-description": S,
      ...d,
      children: [
        A,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${h})` : "#ffffff",
            ...o ? { filter: `url(#${f})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: M.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        w && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: M.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: _ === Ie.Lower ? "340" : "155", children: w })
          }
        ),
        k ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: M.hex,
            ..._ === Ie.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          N.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: b,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${N.map((re) => `${re.cx} ${re.cy}`).join(" L ")}`
            }
          ),
          N.map((re, V) => {
            const H = V >= N.length - 2 && T ? L : b, z = H;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: z,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: H,
                cx: re.cx,
                cy: re.cy,
                r: 16
              },
              V
            );
          })
        ] })
      ]
    }
  );
};
xa.displayName = "SPCVariationIcon";
const bm = {
  xs: { height: 24, pointR: 2, stroke: 1 },
  sm: { height: 32, pointR: 3, stroke: 1 },
  md: { height: 44, pointR: 4, stroke: 1 }
};
function vm(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function ym(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
function wm(e) {
  switch (e) {
    case Ne.SpecialCauseImproving:
      return Ue("improvement", "#00B0F0");
    case Ne.SpecialCauseDeteriorating:
      return Ue("concern", "#E46C0A");
    case Ne.SpecialCauseNoJudgement:
      return Ue("no-judgement", "#490092");
    case Ne.CommonCause:
      return Ue("common-cause", "#A6A6A6");
    default:
      return Ue("common-cause", "#A6A6A6");
  }
}
const Fl = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: o = !0,
  showLimitBand: s = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: u = !0,
  variationState: c,
  autoClassify: d = !1,
  metricImprovement: f,
  gradientWash: h = !1,
  size: g = "sm",
  ariaLabel: v,
  className: m,
  onPointClick: p,
  onClassification: x,
  maxPoints: D,
  thinningStrategy: I = "stride",
  colorPointsBySignal: _ = !0,
  centerLine: y,
  controlLimits: M,
  sigmaBands: P,
  pointSignals: j,
  pointNeutralSpecialCause: w
}) => {
  const T = f, k = Me(
    () => vm(e, t),
    [e, t]
  ), b = Me(() => ym(k), [k]), L = bm[g], N = Math.max(k.length * 6, 60), $ = L.height, S = 4, A = 2, re = Me(() => (e?.length ?? 0) - (k?.length ?? 0), [e?.length, k?.length]), E = k.filter((R) => R.value != null).map((R) => R.value), H = y ?? b.mean, z = Me(() => {
    if (H == null) return null;
    const R = [];
    if (P?.upperOne != null && R.push(Math.abs(P.upperOne - H)), P?.lowerOne != null && R.push(Math.abs(H - P.lowerOne)), R.length) return R.reduce((G, J) => G + J, 0) / R.length;
    const U = [];
    return M?.upper != null && U.push(Math.abs(M.upper - H) / 3), M?.lower != null && U.push(Math.abs(H - M.lower) / 3), U.length ? U.reduce((G, J) => G + J, 0) / U.length : null;
  }, [P?.upperOne, P?.lowerOne, M?.upper, M?.lower, H]), ae = Me(() => {
    if (z != null || !E.length || H == null || E.length < 2) return null;
    const R = [];
    for (let G = 1; G < E.length; G++) {
      const J = E[G - 1], F = E[G];
      J != null && F != null && R.push(Math.abs(F - J));
    }
    return R.length ? R.reduce((G, J) => G + J, 0) / R.length / 1.128 : null;
  }, [z, E.join(","), H]), O = z ?? ae, pe = Me(() => {
    if (!o) return null;
    if (M) return M;
    if (H == null || O == null) return null;
    const R = 3 * O;
    return { lower: H - R, upper: H + R };
  }, [o, H, O, M?.lower, M?.upper]), Se = Me(() => {
    if (c)
      return {
        state: c,
        firedRules: [],
        mean: b.mean,
        stdDev: O
      };
    if (!d || !O || O === 0 || H == null || b.latestValue == null)
      return {
        state: Ne.CommonCause,
        firedRules: [],
        mean: b.mean,
        stdDev: O
      };
    const R = [], U = b.latestValue, G = M?.upper ?? (O != null && H != null ? H + 3 * O : null), J = M?.lower ?? (O != null && H != null ? H - 3 * O : null);
    G != null && J != null && (U > G || U < J) && R.push("point-beyond-3sigma");
    const F = E.slice(-8);
    if (F.length === 8) {
      const q = F.every((me) => me > H), se = F.every((me) => me < H);
      (q || se) && R.push("eight-point-run");
    }
    const X = E.slice(-5);
    if (X.length === 5) {
      const q = X.every((oe, le, fe) => le === 0 || oe >= fe[le - 1]), se = X.every((oe, le, fe) => le === 0 || oe <= fe[le - 1]), me = P?.upperOne ?? (O != null && H != null ? H + O : null), ve = P?.lowerOne ?? (O != null && H != null ? H - O : null);
      q && me != null && X[X.length - 1] > me && R.push("five-point-trend"), se && ve != null && X[X.length - 1] < ve && R.push("five-point-trend");
    }
    const Q = E.slice(-3);
    if (Q.length === 3 && (O != null || P)) {
      const q = P?.upperTwo ?? (H != null && O != null ? H + 2 * O : null), se = P?.lowerTwo ?? (H != null && O != null ? H - 2 * O : null);
      if (q != null && se != null) {
        const me = Q.filter((oe) => oe > q).length, ve = Q.filter((oe) => oe < se).length;
        me >= 2 && R.push("two-of-three-near-limit"), ve >= 2 && R.push("two-of-three-near-limit");
      }
    }
    let te = Ne.CommonCause;
    if (R.includes("point-beyond-3sigma") ? te = U > H ? Ne.SpecialCauseImproving : Ne.SpecialCauseDeteriorating : (R.includes("eight-point-run") || R.includes("five-point-trend") || R.includes("two-of-three-near-limit")) && (te = E[E.length - 1] > H ? Ne.SpecialCauseImproving : Ne.SpecialCauseDeteriorating), d && !c && R.length === 1 && R[0] === "point-beyond-3sigma") {
      const q = E.slice(-9, -1);
      if (q.length >= 5) {
        const se = q.filter((ve) => ve > H).length, me = q.filter((ve) => ve < H).length;
        se > 0 && me > 0 && (te = Ne.SpecialCauseNoJudgement);
      }
    }
    return {
      state: te,
      firedRules: R,
      mean: H,
      stdDev: O,
      side: b.latestValue != null && H != null ? b.latestValue > H ? "above" : "below" : void 0
    };
  }, [
    c,
    d,
    O,
    H,
    b.latestValue,
    E.join(",")
  ]);
  xt.useEffect(() => {
    d && !c && x && x(Se);
  }, [Se, d, c, x]);
  const ce = Se.state, de = wm(ce), K = (R) => {
    const U = k.filter((X) => X.value != null);
    if (!U.length) return $ / 2;
    const G = U.map((X) => X.value);
    pe && (pe.lower != null && G.push(pe.lower), pe.upper != null && G.push(pe.upper));
    const J = Math.min(...G), F = Math.max(...G);
    return J === F ? $ / 2 : $ - (R - J) / (F - J) * ($ - A * 2) - A;
  }, ee = Me(() => {
    if (!D || k.length <= D)
      return k.map((Q, te) => te);
    if (I === "stride") {
      const Q = Math.max(2, D), te = (k.length - 1) / (Q - 1), q = /* @__PURE__ */ new Set();
      for (let se = 0; se < Q; se++) q.add(Math.round(se * te));
      return q.add(k.length - 1), Array.from(q).sort((se, me) => se - me);
    }
    const R = k.map((Q, te) => ({ i: te, v: Q.value }));
    function U(Q, te, q) {
      const se = Q.i, me = Q.v ?? 0, ve = te.i, oe = te.v ?? 0, le = q.i, fe = q.v ?? 0, De = Math.abs((fe - oe) * se - (le - ve) * me + le * oe - fe * ve), xe = Math.hypot(fe - oe, le - ve);
      return xe === 0 ? 0 : De / xe;
    }
    function G(Q, te) {
      if (Q.length <= 2) return Q;
      let q = -1, se = -1;
      for (let me = 1; me < Q.length - 1; me++) {
        const ve = U(Q[me], Q[0], Q[Q.length - 1]);
        ve > q && (q = ve, se = me);
      }
      if (q > te) {
        const me = G(Q.slice(0, se + 1), te), ve = G(Q.slice(se), te);
        return [...me.slice(0, -1), ...ve];
      }
      return [Q[0], Q[Q.length - 1]];
    }
    let J = 0.1, F = R;
    for (let Q = 0; Q < 8 && (F = G(R, J), !(F.length <= D)); Q++)
      J *= 1.6;
    const X = new Set(F.map((Q) => Q.i));
    return X.add(0), X.add(k.length - 1), Array.from(X).sort((Q, te) => Q - te);
  }, [k, D, I]), ue = Me(
    () => ee.map((R) => k[R]),
    [ee, k]
  ), C = Me(() => {
    let R = "";
    return ue.forEach((U, G) => {
      if (U.value == null) return;
      const J = K(U.value), F = G / (ue.length - 1 || 1) * (N - S * 2) + S;
      R += R ? ` L ${F} ${J}` : `M ${F} ${J}`;
    }), R;
  }, [ue, N]), B = b.latestIndex ?? -1, W = pe, ne = fa(), Z = Me(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [k.length, h]
  ), ie = k.length >= (n || 0), be = v || "SPC sparkline", Ce = (() => {
    if (!ce) return;
    const R = T === Fe.Up ? Ze.HigherIsBetter : T === Fe.Down ? Ze.LowerIsBetter : Ze.ContextDependent, U = {
      variationIcon: ce === Ne.SpecialCauseImproving ? "improvement" : ce === Ne.SpecialCauseDeteriorating ? "concern" : ce === Ne.SpecialCauseNoJudgement ? "none" : "neither",
      trend: T === Fe.Up ? Ie.Higher : Ie.Lower,
      polarity: R
    };
    try {
      return Pl(U);
    } catch {
      return;
    }
  })(), he = Me(() => {
    if (!ie) return 10;
    const R = [...k].reverse().filter((G) => G.value != null).slice(0, 6).map((G) => K(G.value));
    return R.length && R.reduce((G, J) => G + J, 0) / R.length < $ / 2 ? $ : 10;
  }, [k, ie, $]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": be,
      "aria-description": Ce,
      width: N,
      height: $,
      className: m,
      viewBox: `0 0 ${N} ${$}`,
      children: [
        h && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: Z, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: de,
                stopOpacity: Number(ne.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: de,
                stopOpacity: Number(ne.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: de,
                stopOpacity: Number(ne.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: N,
              height: $,
              fill: `url(#${Z})`
            }
          )
        ] }),
        W && W.lower != null && W.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                K(W.upper),
                K(W.lower)
              ),
              width: N,
              height: Math.abs(
                K(W.upper) - K(W.lower)
              ),
              fill: de,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: N,
              y1: K(W.lower),
              y2: K(W.lower),
              stroke: de,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: N,
              y1: K(W.upper),
              y2: K(W.upper),
              stroke: de,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          P && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            P.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: K(P.lowerTwo),
                y2: K(P.lowerTwo),
                stroke: de,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            P.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: K(P.lowerOne),
                y2: K(P.lowerOne),
                stroke: de,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            P.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: K(P.upperOne),
                y2: K(P.upperOne),
                stroke: de,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            P.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: N,
                y1: K(P.upperTwo),
                y2: K(P.upperTwo),
                stroke: de,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && b.mean != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: N,
            y1: K(b.mean),
            y2: K(b.mean),
            stroke: Ue("common-cause", "#A6A6A6"),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: C,
            fill: "none",
            stroke: Ue("common-cause", "#A6A6A6"),
            strokeWidth: L.stroke,
            strokeLinecap: "round"
          }
        ),
        ee.map((R, U) => {
          const G = k[R];
          if (!G || G.value == null) return null;
          const J = K(G.value), F = U / (ue.length - 1 || 1) * (N - S * 2) + S, Q = (R === B && l ? L.pointR + 1 : L.pointR) - 0.5;
          let te = Ue("common-cause", "#A6A6A6");
          if (_) {
            const q = j?.[re + R];
            if (q === "improvement")
              te = Ue("improvement", "#00B0F0");
            else if (q === "concern")
              te = Ue("concern", "#E46C0A");
            else if (w?.[re + R])
              te = Ue("no-judgement", "#490092");
            else if (H != null) {
              const me = G.value, ve = M?.upper ?? (O != null ? H + 3 * O : null), oe = M?.lower ?? (O != null ? H - 3 * O : null);
              ve != null && me > ve ? te = Ue("improvement", "#00B0F0") : oe != null && me < oe ? te = Ue("concern", "#E46C0A") : te = Ue("common-cause", "#A6A6A6");
            } else
              te = Ue("common-cause", "#A6A6A6");
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: F,
              cy: J,
              r: Q,
              fill: te,
              stroke: "none",
              strokeWidth: 0,
              onClick: p ? () => p(R, G) : void 0,
              style: p ? { cursor: "pointer" } : void 0,
              "data-index": R,
              "data-signal-colour": _ ? te : void 0
            },
            R
          );
        }),
        u && ie && ce && ce !== Ne.CommonCause && T && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: N - 4,
            y: he,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: de,
            "data-glyph-pos": he < $ / 2 ? "top" : "bottom",
            children: T === Fe.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
Fl.displayName = "SPCSpark";
const ke = (e) => typeof e == "number" && Number.isFinite(e), _m = (e) => e.reduce((t, n) => t + n, 0), It = (e) => e.length ? _m(e) / e.length : NaN;
function Al(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && ke(s)) {
      if (a !== null) {
        const i = e[a];
        n[o] = ke(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return n;
}
function Rl(e, t) {
  const n = e.filter((s) => ke(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = It(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = It(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function Sm(e, t) {
  if (!ke(e) || !ke(t))
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
const km = 0.2777, Cm = 3.6, Nm = (e) => ke(e) && e >= 0 ? Math.pow(e, km) : null, sn = (e) => ke(e) && e >= 0 ? Math.pow(e, Cm) : null;
function jm(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
const Sn = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function Dm(e) {
  if (!ke(e) || e < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const t = 1 / (e + 1), n = (d) => jm(d, t) - 1, a = n(0.5), o = Math.max(0, n(Sn.three.low)), s = n(Sn.three.high), i = Math.max(0, n(Sn.one.low)), l = n(Sn.one.high), u = Math.max(0, n(Sn.two.low)), c = n(Sn.two.high);
  return { cl: a, lcl: o, ucl: s, oneLow: i, oneHigh: l, twoLow: u, twoHigh: c };
}
function Tm(e, t, n) {
  const a = e.map((j) => ke(j) ? Nm(j) : null), o = Al(a, t), { mrMean: s } = Rl(o, !!n), i = a.filter((j, w) => !t[w] && ke(j)), l = i.length ? It(i) : NaN;
  if (!ke(l) || !ke(s))
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
  const u = 2.66, c = 2 / 3 * u, d = 1 / 3 * u, f = l + u * s, h = l - u * s, g = l + c * s, v = l - c * s, m = l + d * s, p = l - d * s, x = sn(l), D = sn(f), I = h <= 0 ? null : sn(h), _ = sn(m), y = p <= 0 ? null : sn(p), M = sn(g), P = v <= 0 ? null : sn(v);
  return {
    center: x ?? null,
    upperProcessLimit: D ?? null,
    lowerProcessLimit: I ?? null,
    upperTwoSigma: M ?? null,
    lowerTwoSigma: P ?? null,
    upperOneSigma: _ ?? null,
    lowerOneSigma: y ?? null,
    mr: o,
    mrMean: s,
    mrUcl: ke(s) ? 3.267 * s : null
  };
}
function $m(e) {
  const {
    metricImprovement: t,
    capabilityMode: n,
    value: a,
    mean: o,
    upperProcessLimit: s,
    lowerProcessLimit: i,
    target: l
  } = e, u = (c) => typeof c == "number" && Number.isFinite(c);
  return !u(a) || o === null || !u(l) ? et.None : n && u(s) && u(i) ? t === Fe.Up ? u(i) && i > l ? et.Pass : u(s) && s < l ? et.Fail : et.None : t === Fe.Down ? u(s) && s < l ? et.Pass : u(i) && i > l ? et.Fail : et.None : et.None : t === Fe.Down ? a <= l ? et.Pass : et.Fail : t === Fe.Up ? a >= l ? et.Pass : et.Fail : et.None;
}
function Im(e, t) {
  const {
    W: n,
    minGap: a,
    minDeltaSigma: o,
    scoreThreshold: s,
    isShiftUpAt: i,
    isShiftDownAt: l,
    isTrendUpAt: u,
    isTrendDownAt: c,
    isSingleUpAt: d,
    isSingleDownAt: f
  } = t, h = [];
  let g = 0;
  for (let v = 0; v < e.length; v++) {
    const m = e[v];
    v > 0 && e[v - 1].partitionId !== m.partitionId && (g = v);
    const p = v > 0 && i(v - 1), x = v > 0 && l(v - 1), D = v > 0 && u(v - 1), I = v > 0 && c(v - 1), _ = v > 0 && d(v - 1), y = v > 0 && f(v - 1), M = i(v), P = l(v), j = u(v), w = c(v), T = d(v), k = f(v), b = [];
    M && !p && b.push({ reason: vt.Shift, index: v }), P && !x && b.push({ reason: vt.Shift, index: v }), j && !D && b.push({ reason: vt.Trend, index: v }), w && !I && b.push({ reason: vt.Trend, index: v }), T && !_ && b.push({ reason: vt.Point, index: v }), k && !y && b.push({ reason: vt.Point, index: v });
    for (const L of b) {
      if (L.index - g < a) continue;
      const N = Math.max(0, L.index - n), $ = L.index - 1;
      if ($ - N + 1 < n) continue;
      const S = L.index, A = L.index + n - 1;
      if (A >= e.length) continue;
      const re = e.slice(N, $ + 1).map((C) => C.value).filter(
        (C) => typeof C == "number" && Number.isFinite(C)
      ), V = e.slice(S, A + 1).map((C) => C.value).filter(
        (C) => typeof C == "number" && Number.isFinite(C)
      );
      if (re.length < n || V.length < n) continue;
      const E = e[L.index];
      let H = null;
      if (typeof E.upperProcessLimit == "number" && typeof E.mean == "number") {
        const C = E.upperProcessLimit - E.mean;
        C > 0 && (H = C / 3);
      }
      if (!H || H <= 0) continue;
      const z = It(re), ae = It(V), O = ae - z;
      if (Math.abs(O) < o * H) continue;
      const Se = e.slice(S, A + 1).filter(
        (C) => C.variationIcon === Le.Concern
      ).length;
      if (Se > 1) continue;
      const ce = (C) => {
        const B = It(C);
        return C.length ? C.reduce((W, ne) => W + (ne - B) * (ne - B), 0) / C.length : 0;
      }, de = ce(re), K = ce(V);
      let ee = L.reason === vt.Shift ? 90 : L.reason === vt.Trend ? 70 : 60;
      if (K < de && (ee += 10), ee -= Se * 15, ee < s) continue;
      const ue = h.find((C) => C.index === L.index);
      if (ue) {
        const C = (B) => B === vt.Shift ? 3 : B === vt.Trend ? 2 : 1;
        (C(L.reason) > C(ue.reason) || ee > ue.score) && (ue.reason = L.reason, ue.score = ee, ue.deltaMean = O, ue.oldMean = z, ue.newMean = ae, ue.window = [S, A]);
      } else
        h.push({
          index: L.index,
          reason: L.reason,
          score: ee,
          deltaMean: O,
          oldMean: z,
          newMean: ae,
          window: [S, A]
        });
    }
  }
  return h.sort((v, m) => v.index - m.index), h;
}
function Ya() {
  const e = globalThis;
  if (typeof e.__SPC_PHASE4_STRICT < "u") return !!e.__SPC_PHASE4_STRICT;
  if (typeof process < "u") {
    const t = process?.env?.SPC_PHASE4_STRICT;
    if (typeof t < "u") {
      const n = String(t).toLowerCase();
      if (n === "1" || n === "true") return !0;
      if (n === "0" || n === "false") return !1;
    }
  }
  return !0;
}
var tn = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(tn || {}), El = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(El || {}), Bl = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Bl || {});
function Mm(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function Lm(e, t, n) {
  const a = t.autoRecalculateShiftLength || t.specialCauseShiftPoints || 6;
  if (e.length < a * 2) return;
  const o = e.map((d, f) => ({ idx: f, value: d.value })).filter((d) => ke(d.value));
  if (o.length < a * 2) return;
  const s = n === Fe.Up || n === Fe.Neither, i = n === Fe.Down;
  function l(d, f) {
    const h = o.slice(d, f).map((g) => g.value);
    return h.length ? It(h) : NaN;
  }
  let u = null;
  if (o.length > 1) {
    const d = [];
    for (let h = 1; h < o.length; h++) d.push(Math.abs(o[h].value - o[h - 1].value));
    const f = It(d);
    ke(f) && f > 0 && (u = f * (2.66 / 3));
  }
  if (!u || u <= 0) return;
  const c = t.autoRecalculateDeltaSigma ?? 0.5;
  for (let d = a; d <= o.length - a; d++) {
    const f = d - a, h = l(f, d), g = l(d, d + a);
    if (!ke(h) || !ke(g)) continue;
    const m = (g - h) / u;
    if (!(s ? m >= c : i ? -m >= c : Math.abs(m) >= c)) continue;
    const x = o.slice(d, d + a).map((_) => _.value);
    if (!(s ? x.every((_) => _ > h) : i ? x.every((_) => _ < h) : x.every((_) => s ? _ > h : _ < h))) continue;
    const I = o[d].idx;
    e[I].baseline || (e[I].baseline = !0);
    return;
  }
}
function Hl(e) {
  if (!e) return {};
  const t = e, n = e, a = n.rules ?? {}, o = n.precedence ?? {}, s = n.thresholds ?? {}, i = n.warnings ?? {}, l = n.rareEvent ?? {}, u = n.capability ?? {}, c = n.grace ?? {}, d = n.baselineSuggest ?? {}, f = n.autoRecalc ?? {}, h = c.emergingEnabled ?? n.emergingGraceEnabled ?? t.emergingGraceEnabled ?? t.emergingDirectionGrace, g = a.collapseWeakerClusterRules ?? n.collapseWeakerClusterRules ?? t.collapseWeakerClusterRules ?? t.collapseClusterRules;
  if (Ya()) {
    if (t.emergingDirectionGrace !== void 0)
      throw new Error("[spc][phase4] emergingDirectionGrace is no longer supported. Use settings.grace.emergingEnabled.");
    if (t.collapseClusterRules !== void 0)
      throw new Error("[spc][phase4] collapseClusterRules is no longer supported. Use settings.rules.collapseWeakerClusterRules.");
  }
  const v = globalThis;
  !Ya() && t.emergingDirectionGrace !== void 0 && n.emergingGraceEnabled === void 0 && c.emergingEnabled === void 0 && !v.__spc_warn_emergingDirectionGrace && (v.__spc_warn_emergingDirectionGrace = !0, console.warn("[spc] emergingDirectionGrace is deprecated; use grace.emergingEnabled")), !Ya() && t.collapseClusterRules !== void 0 && a.collapseWeakerClusterRules === void 0 && n.collapseWeakerClusterRules === void 0 && !v.__spc_warn_collapseClusterRules && (v.__spc_warn_collapseClusterRules = !0, console.warn("[spc] collapseClusterRules is deprecated; use rules.collapseWeakerClusterRules"));
  const m = (D) => {
    const I = {};
    for (const _ of Object.keys(D)) {
      const y = D[_];
      y !== void 0 && (I[_] = y);
    }
    return I;
  }, p = m({
    // Rare event / MR
    excludeMovingRangeOutliers: l.excludeMovingRangeOutliers ?? t.excludeMovingRangeOutliers,
    // Rules
    specialCauseShiftPoints: a.shiftPoints ?? t.specialCauseShiftPoints,
    specialCauseTrendPoints: a.trendPoints ?? t.specialCauseTrendPoints,
    enableFourOfFiveRule: a.fourOfFiveEnabled ?? t.enableFourOfFiveRule,
    enableFifteenInInnerThirdRule: a.fifteenInnerThirdEnabled ?? t.enableFifteenInInnerThirdRule,
    collapseWeakerClusterRules: g ?? t.collapseWeakerClusterRules,
    // Precedence
    precedenceStrategy: o.strategy ?? t.precedenceStrategy,
    conflictPrecedenceMode: o.conflictMode ?? t.conflictPrecedenceMode,
    // Thresholds
    minimumPoints: s.minimumPoints ?? t.minimumPoints,
    minimumPointsPartition: s.minimumPointsPartition ?? t.minimumPointsPartition,
    maximumPointsPartition: s.maximumPointsPartition ?? t.maximumPointsPartition,
    maximumPoints: s.maximumPoints ?? t.maximumPoints,
    transitionBufferPoints: s.transitionBufferPoints ?? t.transitionBufferPoints,
    // Warnings
    minimumPointsWarning: i.minimumPointsWarning ?? t.minimumPointsWarning,
    pointConflictWarning: i.pointConflictWarning ?? t.pointConflictWarning,
    variationIconConflictWarning: i.variationIconConflictWarning ?? t.variationIconConflictWarning,
    nullValueWarning: i.nullValueWarning ?? t.nullValueWarning,
    targetSuppressedWarning: i.targetSuppressedWarning ?? t.targetSuppressedWarning,
    ghostOnRareEventWarning: i.ghostOnRareEventWarning ?? t.ghostOnRareEventWarning,
    partitionSizeWarnings: i.partitionSizeWarnings ?? t.partitionSizeWarnings,
    baselineSpecialCauseWarning: i.baselineSpecialCauseWarning ?? t.baselineSpecialCauseWarning,
    maximumPointsWarnings: i.maximumPointsWarnings ?? t.maximumPointsWarnings,
    // Capability
    assuranceCapabilityMode: u.assuranceCapabilityMode ?? t.assuranceCapabilityMode,
    // Grace
    emergingGraceEnabled: h,
    emergingDirectionGrace: h,
    // Baseline suggestions
    baselineSuggest: d.enabled ?? t.baselineSuggest,
    baselineSuggestMinDeltaSigma: d.minDeltaSigma ?? t.baselineSuggestMinDeltaSigma,
    baselineSuggestStabilityPoints: d.stabilityPoints ?? t.baselineSuggestStabilityPoints,
    baselineSuggestMinGap: d.minGap ?? t.baselineSuggestMinGap,
    baselineSuggestScoreThreshold: d.scoreThreshold ?? t.baselineSuggestScoreThreshold,
    // Auto recalculation
    autoRecalculateAfterShift: f.enabled ?? t.autoRecalculateAfterShift,
    autoRecalculateShiftLength: f.shiftLength ?? t.autoRecalculateShiftLength,
    autoRecalculateDeltaSigma: f.deltaSigma ?? t.autoRecalculateDeltaSigma
  }), x = { ...p, ...m(t) };
  if (h !== void 0 && (x.emergingGraceEnabled = h, x.grace = { ...x.grace, emergingEnabled: h }), p.collapseWeakerClusterRules !== void 0) {
    const D = p.collapseWeakerClusterRules;
    x.collapseWeakerClusterRules = D, x.rules = { ...x.rules, collapseWeakerClusterRules: D };
  }
  return m(x);
}
function Xs(e) {
  const {
    chartType: t,
    metricImprovement: n,
    data: a,
    settings: o = {}
  } = e, s = Hl(o), i = {
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
    baselineSuggest: !1,
    baselineSuggestMinDeltaSigma: 0.5,
    baselineSuggestStabilityPoints: 5,
    baselineSuggestMinGap: 12,
    baselineSuggestScoreThreshold: 50,
    precedenceStrategy: mr.DirectionalFirst,
    emergingDirectionGrace: !1,
    rules: {},
    grace: {},
    ...s
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const l = a.map((p, x) => ({
    rowId: x + 1,
    x: p.x,
    value: ke(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: ke(p.target) ? p.target : null
  }));
  if (s?.autoRecalculateAfterShift)
    try {
      Lm(l, s, n);
    } catch {
    }
  const u = Mm(l), c = [], d = [], h = l.filter(
    (p) => !p.ghost && ke(p.value)
  ).length >= (i.minimumPoints ?? 13);
  let g = 0;
  const v = {};
  for (const p of u) {
    g++;
    const x = p.map((b) => b.value), D = p.map((b) => b.ghost);
    let I = new Array(x.length).fill(null), _ = NaN, y = NaN, M = NaN, P = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      I = Al(x, D);
      const b = x.filter(
        (N, $) => !D[$] && ke(N)
      );
      _ = b.length ? It(b) : NaN;
      const L = Rl(
        I,
        !!i.excludeMovingRangeOutliers
      );
      y = L.mrMean, M = L.mrUcl, P = Sm(_, y);
    } else if (t === "T") {
      const b = Tm(
        x,
        D,
        !!i.excludeMovingRangeOutliers
      );
      I = b.mr, y = b.mrMean ?? NaN, M = b.mrUcl ?? NaN, _ = b.center ?? NaN, P = {
        upperProcessLimit: b.upperProcessLimit,
        lowerProcessLimit: b.lowerProcessLimit,
        upperTwoSigma: b.upperTwoSigma,
        lowerTwoSigma: b.lowerTwoSigma,
        upperOneSigma: b.upperOneSigma,
        lowerOneSigma: b.lowerOneSigma
      };
    } else if (t === "G") {
      const b = x.filter(
        ($, S) => !D[S] && ke($)
      ), L = b.length ? It(b) : NaN, N = Dm(L);
      _ = N.cl ?? NaN, P = {
        upperProcessLimit: N.ucl,
        lowerProcessLimit: N.lcl,
        upperTwoSigma: N.twoHigh,
        lowerTwoSigma: N.twoLow,
        upperOneSigma: N.oneHigh,
        lowerOneSigma: N.oneLow
      }, I = new Array(x.length).fill(null), y = NaN, M = NaN;
    } else
      d.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const j = p.map((b, L) => {
      const N = !b.ghost && ke(b.value) ? x.slice(0, L + 1).filter((re, V) => !D[V] && ke(re)).length : 0, $ = h, S = $ ? P : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      return {
        rowId: b.rowId,
        x: b.x,
        value: ke(b.value) ? b.value : null,
        ghost: b.ghost,
        partitionId: g,
        pointRank: N,
        mean: $ && ke(_) ? _ : null,
        mr: ke(I[L]) ? I[L] : null,
        mrMean: $ && ke(y) ? y : null,
        mrUcl: $ && ke(M) ? M : null,
        upperProcessLimit: ke(S.upperProcessLimit) ? S.upperProcessLimit : null,
        lowerProcessLimit: ke(S.lowerProcessLimit) ? S.lowerProcessLimit : null,
        upperTwoSigma: ke(S.upperTwoSigma) ? S.upperTwoSigma : null,
        lowerTwoSigma: ke(S.lowerTwoSigma) ? S.lowerTwoSigma : null,
        upperOneSigma: ke(S.upperOneSigma) ? S.upperOneSigma : null,
        lowerOneSigma: ke(S.lowerOneSigma) ? S.lowerOneSigma : null,
        target: ke(b.target) ? b.target : null,
        specialCauseFifteenInnerThird: !1,
        // Unified directional alias initialisers (kept in sync post-detection)
        specialCauseSinglePointUp: !1,
        specialCauseSinglePointDown: !1,
        specialCauseTwoOfThreeUp: !1,
        specialCauseTwoOfThreeDown: !1,
        specialCauseFourOfFiveUp: !1,
        specialCauseFourOfFiveDown: !1,
        specialCauseShiftUp: !1,
        specialCauseShiftDown: !1,
        specialCauseTrendUp: !1,
        specialCauseTrendDown: !1,
        variationIcon: Le.Suppressed,
        assuranceIcon: et.None,
        upperBaseline: $ && ke(_) ? _ : null,
        lowerBaseline: $ && ke(_) ? _ : null,
        movingRangeHighPointValue: $ && ke(M) ? M : null,
        ghostValue: b.ghost && ke(b.value) ? b.value : null,
        ghostFlag: !!b.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null,
        ruleTags: []
      };
    });
    v[g] = j.filter(
      (b) => !b.ghost && ke(b.value)
    ).length;
    const w = i.specialCauseShiftPoints ?? 6, T = i.specialCauseTrendPoints ?? 6, k = [];
    for (let b = 0; b < j.length; b++) {
      const L = j[b], N = L.value;
      if (!L.ghost && ke(N) && k.push(b), !(ke(L.mean) && ke(L.upperProcessLimit) && ke(L.lowerProcessLimit)) || L.ghost || !ke(N)) {
        c.push(L);
        continue;
      }
      L.specialCauseSinglePointUp = ke(L.upperProcessLimit) ? N > L.upperProcessLimit : !1, L.specialCauseSinglePointDown = ke(L.lowerProcessLimit) ? N < L.lowerProcessLimit : !1, c.push(L);
    }
    if (k.length) {
      const b = ($) => j[$];
      let L = [], N = [];
      for (const $ of k) {
        const S = b($);
        if (!ke(S.mean) || !ke(S.value)) {
          L = [], N = [];
          continue;
        }
        if (S.value > S.mean ? (L.push($), N = []) : S.value < S.mean ? (N.push($), L = []) : (L = [], N = []), L.length >= w)
          for (const A of L) {
            const re = b(A);
            re.specialCauseShiftUp = !0;
          }
        if (N.length >= w)
          for (const A of N) {
            const re = b(A);
            re.specialCauseShiftDown = !0;
          }
      }
      for (let $ = 0; $ <= k.length - 3; $++) {
        const A = k.slice($, $ + 3).map(b);
        if (!A.every((ce) => ke(ce.mean) && ke(ce.value))) continue;
        const re = A[0].mean, V = A.every((ce) => ce.value > re), E = A.every((ce) => ce.value < re);
        if (!V && !E) continue;
        const H = A[0].upperTwoSigma ?? 1 / 0, z = A[0].lowerTwoSigma ?? -1 / 0, ae = A[0].upperProcessLimit ?? 1 / 0, O = A[0].lowerProcessLimit ?? -1 / 0, pe = A.filter((ce) => ce.value > H && ce.value <= ae), Se = A.filter((ce) => ce.value < z && ce.value >= O);
        if (V && pe.length >= 2)
          for (const ce of pe)
            ce.specialCauseTwoOfThreeUp = !0;
        if (E && Se.length >= 2)
          for (const ce of Se)
            ce.specialCauseTwoOfThreeDown = !0;
      }
      if (i.enableFourOfFiveRule)
        for (let $ = 0; $ <= k.length - 5; $++) {
          const A = k.slice($, $ + 5).map(b);
          if (!A.every((ae) => ke(ae.mean) && ke(ae.value))) continue;
          const re = A[0].mean;
          if (!A.every((ae) => ae.value > re) && !A.every((ae) => ae.value < re)) continue;
          const V = A[0].upperOneSigma ?? 1 / 0, E = A[0].lowerOneSigma ?? -1 / 0, H = A.filter((ae) => ae.value > V), z = A.filter((ae) => ae.value < E);
          if (A.every((ae) => ae.value > re) && H.length >= 4)
            for (const ae of H)
              ae.specialCauseFourOfFiveUp = !0;
          if (A.every((ae) => ae.value < re) && z.length >= 4)
            for (const ae of z)
              ae.specialCauseFourOfFiveDown = !0;
        }
      for (let $ = 0; $ <= k.length - T; $++) {
        const S = k.slice($, $ + T), A = S.map(b);
        if (!A.every((E) => ke(E.value))) continue;
        let re = !0, V = !0;
        for (let E = 1; E < A.length && (A[E].value > A[E - 1].value || (re = !1), A[E].value < A[E - 1].value || (V = !1), !(!re && !V)); E++)
          ;
        if (re) for (const E of S) {
          const H = b(E);
          H.specialCauseTrendUp = !0;
        }
        if (V) for (const E of S) {
          const H = b(E);
          H.specialCauseTrendDown = !0;
        }
      }
      if (i.enableFifteenInInnerThirdRule) {
        let $ = [];
        for (const S of k) {
          const A = b(S);
          if (!ke(A.value) || !ke(A.mean) || !ke(A.upperOneSigma) || !ke(A.lowerOneSigma)) {
            $ = [];
            continue;
          }
          if (!(A.value < A.upperOneSigma && A.value > A.lowerOneSigma)) {
            $ = [];
            continue;
          }
          if ($.push(S), $.length >= 15) {
            const V = $.map(b), E = V.some((z) => z.value > z.mean), H = V.some((z) => z.value < z.mean);
            if (E && H)
              for (const z of $) b(z).specialCauseFifteenInnerThird = !0;
          }
        }
      }
    }
    if (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition)) {
      const b = i.maximumPointsPartition;
      let L = 0;
      for (const N of c.filter(($) => $.partitionId === g))
        !N.ghost && ke(N.value) && L++, L > b && (N.mean = N.upperProcessLimit = N.lowerProcessLimit = null, N.upperTwoSigma = N.lowerTwoSigma = N.upperOneSigma = N.lowerOneSigma = null);
    }
  }
  for (const p of c) {
    if (p.ruleTags && p.ruleTags.length) continue;
    const x = [];
    p.specialCauseShiftUp && x.push(pt.ShiftHigh), p.specialCauseShiftDown && x.push(pt.ShiftLow), p.specialCauseTrendUp && x.push(pt.TrendIncreasing), p.specialCauseTrendDown && x.push(pt.TrendDecreasing), p.specialCauseSinglePointUp && x.push(pt.SinglePointAbove), p.specialCauseSinglePointDown && x.push(pt.SinglePointBelow), p.specialCauseTwoOfThreeUp && x.push(pt.TwoOfThreeAbove), p.specialCauseTwoOfThreeDown && x.push(pt.TwoOfThreeBelow), p.specialCauseFourOfFiveUp && x.push(pt.FourOfFiveAbove), p.specialCauseFourOfFiveDown && x.push(pt.FourOfFiveBelow), p.specialCauseFifteenInnerThird && x.push(pt.FifteenInnerThird), x.length && (p.ruleTags = x);
  }
  for (let p = 0; p < c.length; p++) {
    const x = c[p];
    if (Object.prototype.hasOwnProperty.call(x, Yn.ImprovementValueBeforePruning) || Object.defineProperty(x, Yn.ImprovementValueBeforePruning, {
      get() {
        return x.originalSpecialCauseImprovementValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.prototype.hasOwnProperty.call(x, Yn.ConcernValueBeforePruning) || Object.defineProperty(x, Yn.ConcernValueBeforePruning, {
      get() {
        return x.originalSpecialCauseConcernValue ?? null;
      },
      enumerable: !1,
      configurable: !0
    }), x.ghost || !ke(x.value) || x.mean === null) {
      x.variationIcon = Le.Suppressed;
      continue;
    }
    const D = x.value > x.mean, I = x.value < x.mean;
    i.rules?.collapseWeakerClusterRules && (x.specialCauseTwoOfThreeUp && x.specialCauseFourOfFiveUp && (x.specialCauseTwoOfThreeUp = !1), x.specialCauseTwoOfThreeDown && x.specialCauseFourOfFiveDown && (x.specialCauseTwoOfThreeDown = !1));
    const _ = x.specialCauseTrendUp && D, y = x.specialCauseTrendDown && I, M = x.specialCauseSinglePointUp || x.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && x.specialCauseFourOfFiveUp || x.specialCauseShiftUp || _, P = x.specialCauseSinglePointDown || x.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && x.specialCauseFourOfFiveDown || x.specialCauseShiftDown || y;
    let j = !1;
    if (i.precedenceStrategy === mr.DirectionalFirst && (i.grace?.emergingEnabled || i.emergingGraceEnabled || i.emergingDirectionGrace)) {
      const T = i.specialCauseTrendPoints || 6;
      if (T > 1 && !(x.specialCauseTrendUp || x.specialCauseTrendDown)) {
        const k = T - 1, b = [];
        for (let L = p; L >= 0 && b.length < k; L--) {
          const N = c[L];
          !N.ghost && ke(N.value) && N.mean !== null && b.unshift(N);
        }
        if (b.length === k) {
          let L = !0;
          for (let N = 1; N < b.length && L; N++)
            n === Fe.Up ? b[N].value > b[N - 1].value || (L = !1) : n === Fe.Down && b[N].value < b[N - 1].value || (L = !1);
          j = L;
        }
      }
    }
    if (i.precedenceStrategy === mr.DirectionalFirst) {
      const k = n === Fe.Up ? M : n === Fe.Down ? P : !1, b = n === Fe.Up ? P : n === Fe.Down ? M : !1;
      k && !b ? x.variationIcon = Le.Improvement : b && !k ? x.variationIcon = j ? Le.Neither : Le.Concern : k && b ? x.variationIcon = j || x.specialCauseTrendUp || x.specialCauseTrendDown ? Le.Improvement : Le.Neither : x.variationIcon = Le.Neither;
    } else
      n === Fe.Up ? x.variationIcon = M ? Le.Improvement : P ? Le.Concern : Le.Neither : n === Fe.Down ? x.variationIcon = P ? Le.Improvement : M ? Le.Concern : Le.Neither : x.variationIcon = Le.Neither;
    const w = M || P;
    if (x.specialCauseImprovementValue = w && x.variationIcon === Le.Improvement ? x.value : null, x.specialCauseConcernValue = w && x.variationIcon === Le.Concern ? x.value : null, x.specialCauseNeitherValue = w && x.variationIcon === Le.Neither ? x.value : null, i.conflictPrecedenceMode === Tl.SqlRankingV26a && x.specialCauseImprovementValue !== null && x.specialCauseConcernValue !== null) {
      const T = [];
      x.specialCauseSinglePointUp && T.push({ id: Lt.SinglePoint, rank: 1, side: ht.Up }), x.specialCauseSinglePointDown && T.push({ id: Lt.SinglePoint, rank: 1, side: ht.Down }), x.specialCauseTwoOfThreeUp && T.push({ id: Lt.TwoSigma, rank: 2, side: ht.Up }), x.specialCauseTwoOfThreeDown && T.push({ id: Lt.TwoSigma, rank: 2, side: ht.Down }), x.specialCauseShiftUp && T.push({ id: Lt.Shift, rank: 3, side: ht.Up }), x.specialCauseShiftDown && T.push({ id: Lt.Shift, rank: 3, side: ht.Down }), x.specialCauseTrendUp && T.push({ id: Lt.Trend, rank: 4, side: ht.Up }), x.specialCauseTrendDown && T.push({ id: Lt.Trend, rank: 4, side: ht.Down });
      const k = T.filter((V) => V.side === ht.Up).reduce((V, E) => Math.max(V, E.rank), 0), b = T.filter((V) => V.side === ht.Down).reduce((V, E) => Math.max(V, E.rank), 0);
      let L;
      k > b ? L = Cn.Upwards : b > k ? L = Cn.Downwards : L = Cn.Same;
      const N = x.specialCauseImprovementValue, $ = x.specialCauseConcernValue;
      L === Cn.Upwards ? n === Fe.Up ? x.specialCauseConcernValue = null : n === Fe.Down && (x.specialCauseImprovementValue = null) : L === Cn.Downwards ? n === Fe.Up ? x.specialCauseImprovementValue = null : n === Fe.Down && (x.specialCauseConcernValue = null) : x.variationIcon === Le.Improvement ? x.specialCauseConcernValue = null : x.variationIcon === Le.Concern ? x.specialCauseImprovementValue = null : x.specialCauseConcernValue = null, x.specialCauseImprovementValue !== null && x.specialCauseConcernValue === null ? x.variationIcon = Le.Improvement : x.specialCauseConcernValue !== null && x.specialCauseImprovementValue === null ? x.variationIcon = Le.Concern : x.specialCauseImprovementValue === null && x.specialCauseConcernValue === null && (x.variationIcon = Le.Neither);
      const S = x.specialCauseImprovementValue !== null ? ht.Up : x.specialCauseConcernValue !== null ? ht.Down : void 0, A = S === ht.Up ? k : S === ht.Down ? b : Math.max(k, b), re = T.find((V) => V.rank === A && (!S || V.side === S));
      x.conflictPrimeDirection = L, x.conflictResolved = !0, x.conflictResolvedRank = A || void 0, re && (x.conflictResolvedByRuleId = re.id), x.pruningMode = $l.Conflict, x.originalSpecialCauseImprovementValue = N, x.originalSpecialCauseConcernValue = $;
    }
    {
      const T = l[x.rowId - 1], k = $m({
        metricImprovement: n,
        capabilityMode: i.assuranceCapabilityMode,
        value: x.value,
        mean: x.mean,
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        target: ke(T?.target) ? T.target : null
      });
      x.assuranceIcon = k;
    }
  }
  if ((i.minimumPointsWarning ?? !1) && !h) {
    const p = l.filter(
      (x) => !x.ghost && ke(x.value)
    ).length;
    d.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${p} non-ghost points available; minimum required is ${i.minimumPoints}. Limits and icons suppressed.`,
      context: { available: p, minimumRequired: i.minimumPoints }
    });
  }
  if (i.variationIconConflictWarning)
    for (const p of c)
      p.variationIcon === Le.Improvement && (p.specialCauseSinglePointUp || p.specialCauseTwoOfThreeUp || i.enableFourOfFiveRule && p.specialCauseFourOfFiveUp || p.specialCauseShiftUp || p.specialCauseTrendUp) && (p.specialCauseSinglePointDown || p.specialCauseTwoOfThreeDown || i.enableFourOfFiveRule && p.specialCauseFourOfFiveDown || p.specialCauseShiftDown || p.specialCauseTrendDown) && d.push({
        code: "variation_conflict_row",
        category: "logic",
        severity: "warning",
        message: `Row ${p.rowId}: simultaneous high/low special-cause signals – variation icon may be ambiguous.`,
        context: { rowId: p.rowId }
      });
  if (i.maximumPoints && Number.isFinite(i.maximumPoints)) {
    const p = i.maximumPoints;
    let x = 0;
    for (const D of c)
      !D.ghost && ke(D.value) && x++, x > p && (D.mean = D.upperProcessLimit = D.lowerProcessLimit = null, D.upperTwoSigma = D.lowerTwoSigma = D.upperOneSigma = D.lowerOneSigma = null);
  }
  if (i.nullValueWarning && (t === Dt.XmR || t === Dt.G)) {
    const p = l.filter(
      (x) => !x.ghost && (x.value === null || x.value === void 0 || !ke(x.value))
    ).length;
    p && d.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (i.targetSuppressedWarning && (t === Dt.T || t === Dt.G) && l.some((x) => ke(x.target)) && d.push({
    code: "target_ignored_rare_event",
    category: "target",
    severity: "info",
    message: `Targets provided are ignored for ${t} charts in this port.`,
    context: { chartType: t }
  }), i.ghostOnRareEventWarning && (t === Dt.T || t === Dt.G)) {
    const p = l.filter((x) => x.ghost).length;
    p && d.push({
      code: "ghost_rows_rare_event",
      category: "ghost",
      severity: "info",
      message: `${p} ghost row(s) supplied for rare-event chart (${t}); verify intent.`,
      context: { chartType: t, ghostCount: p }
    });
  }
  if (i.partitionSizeWarnings && Object.entries(v).forEach(([p, x]) => {
    x < i.minimumPointsPartition && d.push({
      code: "insufficient_points_partition",
      category: "partition",
      severity: "warning",
      message: `Partition ${p} has only ${x} non-ghost point(s); below recommended ${i.minimumPointsPartition}.`,
      context: {
        partitionId: Number(p),
        count: x,
        minimum: i.minimumPointsPartition
      }
    });
  }), i.baselineSpecialCauseWarning) {
    const p = [];
    c.forEach((x) => {
      l[x.rowId - 1].baseline && (x.specialCauseSinglePointUp || x.specialCauseSinglePointDown || x.specialCauseTwoOfThreeUp || x.specialCauseTwoOfThreeDown || x.specialCauseFourOfFiveUp || x.specialCauseFourOfFiveDown || x.specialCauseShiftUp || x.specialCauseShiftDown || x.specialCauseTrendUp || x.specialCauseTrendDown) && p.push(x.rowId);
    }), p.length && d.push({
      code: "baseline_with_special_cause",
      category: "baseline",
      severity: "warning",
      message: `Baseline set with special-cause present at row(s): ${p.join(", ")}.`,
      context: { rows: p }
    });
  }
  i.maximumPointsWarnings && (i.maximumPointsPartition && Number.isFinite(i.maximumPointsPartition) && d.push({
    code: "partition_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after ${i.maximumPointsPartition} non-ghost points per partition.`,
    context: { cap: i.maximumPointsPartition }
  }), i.maximumPoints && Number.isFinite(i.maximumPoints) && d.push({
    code: "global_cap_applied",
    category: "limits",
    severity: "info",
    message: `Limits suppressed after global cap of ${i.maximumPoints} non-ghost points.`,
    context: { cap: i.maximumPoints }
  }));
  let m;
  if (i.baselineSuggest) {
    const p = i.baselineSuggestStabilityPoints, x = i.baselineSuggestMinGap, D = i.baselineSuggestMinDeltaSigma, I = i.baselineSuggestScoreThreshold;
    m = Im(
      c.map((y) => ({
        value: y.value,
        partitionId: y.partitionId,
        variationIcon: y.variationIcon,
        mean: y.mean,
        upperProcessLimit: y.upperProcessLimit
      })),
      {
        W: p,
        minGap: x,
        minDeltaSigma: D,
        scoreThreshold: I,
        isShiftUpAt: (y) => !!c[y].specialCauseShiftUp,
        isShiftDownAt: (y) => !!c[y].specialCauseShiftDown,
        isTrendUpAt: (y) => !!c[y].specialCauseTrendUp,
        isTrendDownAt: (y) => !!c[y].specialCauseTrendDown,
        isSingleUpAt: (y) => !!c[y].specialCauseSinglePointUp,
        isSingleDownAt: (y) => !!c[y].specialCauseSinglePointDown
      }
    ).map((y) => ({
      index: y.index,
      reason: y.reason,
      score: y.score,
      deltaMean: y.deltaMean,
      oldMean: y.oldMean,
      newMean: y.newMean,
      window: y.window
    }));
  }
  return { rows: c, warnings: d, ...m ? { suggestedBaselines: m } : {} };
}
function ai(e, t) {
  return e === "improvement" ? Ne.SpecialCauseImproving : e === "concern" ? Ne.SpecialCauseDeteriorating : e === "suppressed" || e === "neither" && t ? Ne.SpecialCauseNoJudgement : e === "neither" ? Ne.CommonCause : null;
}
function Pm(e, t) {
  return e === "improvement" || e === "concern" || e === "suppressed" || e === "neither" && !!t;
}
function Fm(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function Am(e) {
  const {
    values: t,
    x: n,
    chartType: a = Dt.XmR,
    metricImprovement: o = Fe.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: u = !1,
    autoClassify: c = !0
  } = e, d = Y.useMemo(() => {
    const y = [];
    for (let M = 0; M < t.length; M++)
      y.push({ x: n?.[M], value: t[M] });
    return y;
  }, [t, n]), f = Y.useMemo(() => {
    try {
      const y = d.map((M, P) => ({ x: M.x ?? P, value: M.value }));
      return Xs({ chartType: a, metricImprovement: o, data: y, settings: {} });
    } catch {
      return null;
    }
  }, [d, a, o]), h = Y.useMemo(() => {
    const y = f?.rows;
    if (!y || y.length === 0) return null;
    for (let M = y.length - 1; M >= 0; M--) {
      const P = y[M];
      if (P && P.value != null && !P.ghost) return P;
    }
    return y[y.length - 1] ?? null;
  }, [f]), g = Y.useMemo(() => {
    const y = f?.rowsRepresentative ?? f?.rows;
    if (!y || !Array.isArray(y) || y.length === 0) return null;
    const M = y[y.length - 1];
    return ai(
      M?.variationIcon,
      (M?.specialCauseNeitherValue ?? null) != null
    );
  }, [f]), v = Y.useMemo(() => h?.mean ?? null, [h]), m = Y.useMemo(() => {
    if (!h) return null;
    const y = h?.lowerProcessLimit ?? null, M = h?.upperProcessLimit ?? null;
    return y == null && M == null ? null : { lower: y, upper: M };
  }, [h]), p = Y.useMemo(() => h ? {
    upperOne: h?.upperOneSigma ?? null,
    upperTwo: h?.upperTwoSigma ?? null,
    lowerOne: h?.lowerOneSigma ?? null,
    lowerTwo: h?.lowerTwoSigma ?? null
  } : null, [h]), x = Y.useMemo(() => {
    const y = f?.rows;
    if (!(!y || y.length === 0))
      return y.map((M) => {
        const P = !!M?.specialCauseSinglePointUp || !!M?.specialCauseTwoOfThreeUp || !!M?.specialCauseFourOfFiveUp || !!M?.specialCauseShiftUp || !!M?.specialCauseTrendUp, j = !!M?.specialCauseSinglePointDown || !!M?.specialCauseTwoOfThreeDown || !!M?.specialCauseFourOfFiveDown || !!M?.specialCauseShiftDown || !!M?.specialCauseTrendDown;
        switch (o) {
          case Fe.Up:
            return P ? "improvement" : j ? "concern" : "neither";
          case Fe.Down:
            return j ? "improvement" : P ? "concern" : "neither";
          case Fe.Neither:
          default:
            return "neither";
        }
      });
  }, [f, o]), D = Y.useMemo(() => {
    const y = f?.rows;
    if (!(!y || y.length === 0))
      return y.map((M) => !!M?.specialCauseNeitherValue);
  }, [f]), I = Y.useMemo(() => {
    let y = null;
    if (h && h.value != null && !h.ghost) {
      const L = h.variationIcon, N = (h?.specialCauseNeitherValue ?? null) != null;
      g === Ne.SpecialCauseNoJudgement ? y = Pm(L, N) ? Ne.SpecialCauseNoJudgement : Ne.CommonCause : y = ai(L, N) ?? Ne.CommonCause;
    }
    const M = y ?? Ne.CommonCause, P = ma[M].hex, [j, w, T] = Fm(P), k = fa();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${j}, ${w}, ${T}, ${k.start}) 0%, rgba(${j}, ${w}, ${T}, ${k.mid}) 50%, rgba(${j}, ${w}, ${T}, ${k.end}) 100%)`,
      "--fdp-metric-card-accent": P
    };
  }, [h, g]);
  return { sparkProps: Y.useMemo(() => ({
    data: d,
    showMean: u,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: v,
    controlLimits: m,
    sigmaBands: p,
    pointSignals: x,
    pointNeutralSpecialCause: D,
    variationState: g ?? void 0,
    autoClassify: !!(c && !g),
    onClassification: () => {
    }
  }), [
    d,
    u,
    s,
    i,
    l,
    o,
    c,
    g,
    v,
    m?.lower,
    m?.upper,
    p?.upperOne,
    p?.upperTwo,
    p?.lowerOne,
    p?.lowerTwo,
    x?.length,
    D?.length
  ]), metricCardStyle: I, latestState: g };
}
function si(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function Rm(e, t, n) {
  const a = new Array(e), o = new Date(t);
  for (let s = 0; s < e; s++)
    switch (a[s] = new Date(o), n) {
      case "hourly":
        o.setHours(o.getHours() + 1);
        break;
      case "daily":
        o.setDate(o.getDate() + 1);
        break;
      case "weekly":
        o.setDate(o.getDate() + 7);
        break;
      case "monthly":
        o.setMonth(o.getMonth() + 1);
        break;
      case "quarterly":
        o.setMonth(o.getMonth() + 3);
        break;
      case "annually":
        o.setFullYear(o.getFullYear() + 1);
        break;
    }
  return a;
}
function Em(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let u = 1; u < n.length; u++) a.push(n[u].getTime() - n[u - 1].getTime());
  const o = a.sort((u, c) => u - c), s = o[Math.floor(o.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function oi(e, t) {
  if (e)
    try {
      switch (t) {
        case "hourly":
          return new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short", year: "numeric" }).format(e);
        case "daily":
          return new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e);
        case "weekly":
          return `Week of ${new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e)}`;
        case "monthly":
          return new Intl.DateTimeFormat(void 0, { month: "short", year: "numeric" }).format(e);
        case "quarterly":
          return `Q${Math.floor(e.getMonth() / 3) + 1} ${e.getFullYear()}`;
        case "annually":
          return `${e.getFullYear()}`;
        default:
          return new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e);
      }
    } catch {
      return;
    }
}
function Bm(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function Hm(e, t, n = 1) {
  switch (e || t) {
    case "hourly":
      return n === 1 ? "last hour" : `last ${n} hours`;
    case "daily":
      return n === 1 ? "last day" : `last ${n} days`;
    case "weekly":
      return n === 1 ? "last week" : `last ${n} weeks`;
    case "monthly":
      return n === 1 ? "last month" : `last ${n} months`;
    case "quarterly":
      return n === 1 ? "last quarter" : `last ${n} quarters`;
    case "annually":
      return n === 1 ? "last year" : `last ${n} years`;
    default:
      return "previous";
  }
}
function Ol(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: o,
    providedUnit: s,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: u = !0,
    autoMetadata: c = !0,
    deltaConfig: d
  } = e, f = t.map((w) => typeof w == "number" ? w : w == null ? null : Number(w));
  let h = -1;
  for (let w = f.length - 1; w >= 0; w--)
    if (f[w] != null) {
      h = w;
      break;
    }
  let g = (n || []).map(si);
  if (!g.some(Boolean)) {
    const w = si(o);
    w && a ? g = Rm(f.length, w, a) : g = new Array(f.length).fill(void 0);
  }
  const m = Em(g, a), p = Bm(f, s, i, e.percentHeuristic), x = l && h >= 0 && f[h] != null ? f[h] : void 0, D = { strategy: "previous", n: 1, absolute: !0, skipNulls: !0, ...d || {} };
  function I() {
    if (h < 0) return -1;
    if (D.strategy === "previous" || D.strategy === "n-points") {
      let L = h - (D.strategy === "previous" ? 1 : Math.max(1, D.n || 1));
      if (!D.skipNulls) return L;
      for (let N = L; N >= 0; N--) if (f[N] != null) return N;
      return -1;
    }
    const w = g[h];
    if (!w) return -1;
    const T = new Date(w);
    T.setFullYear(T.getFullYear() - 1);
    let k = -1, b = 1 / 0;
    for (let L = 0; L < g.length; L++) {
      const N = g[L];
      if (!N || f[L] == null) continue;
      const $ = Math.abs(N.getTime() - T.getTime());
      $ < b && (b = $, k = L);
    }
    return k;
  }
  const _ = I(), y = _ >= 0 ? f[_] : null;
  let M;
  if (u && x != null && y != null) {
    const w = x - y, T = D.absolute !== !1, k = T ? w : y === 0 ? 0 : w / Math.abs(y) * 100;
    M = {
      value: Number.isFinite(k) ? Number(k.toFixed(2)) : 0,
      isPercent: T ? p === "%" : !0,
      period: `vs ${Hm(m, a, D.strategy === "n-points" ? Math.max(1, D.n || 1) : 1)}`
    };
  }
  const P = h >= 0 ? g[h] : void 0, j = c && oi(P, m) ? `Latest: ${oi(P, m)}` : void 0;
  return { value: x, unit: p, delta: M, metadata: j, latestDate: P, frequency: m };
}
const Fv = ({
  sparkData: e,
  direction: t = Fe.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: o = !1,
  showInnerBands: s = !1,
  autoClassify: i = !0,
  maxPoints: l,
  autoValue: u = !0,
  autoDelta: c = !0,
  autoMetadata: d = !0,
  defaultUnit: f,
  intervalHint: h,
  startDate: g,
  deltaConfig: v,
  ...m
}) => {
  const p = Am({
    values: e.map((P) => P.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n,
    autoClassify: i
  }), x = /* @__PURE__ */ r.jsx(Fl, { ...p.sparkProps, maxPoints: l }), D = Y.useMemo(() => Ol({
    values: e.map((P) => typeof P.value == "number" ? P.value : null),
    dates: e.map((P) => P.date),
    intervalHint: h,
    startDate: g,
    providedUnit: m.unit,
    defaultUnit: f,
    autoValue: u,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: v
  }), [e, h, g, m.unit, f, u, c, d, v]), I = u && D.value != null ? D.value : m.value, _ = c && D.delta ? D.delta : m.delta, y = D.unit || m.unit, M = d && D.metadata ? D.metadata : m.metadata;
  return /* @__PURE__ */ r.jsx(
    cm,
    {
      ...m,
      value: I,
      unit: y,
      delta: _,
      metadata: M,
      visual: x,
      style: p.metricCardStyle
    }
  );
}, Ul = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const u = Jt(), c = rn(), [d, f] = Y.useState(null), [h, g] = Y.useState(!1), v = Y.useRef(null);
  Y.useEffect(() => {
    if (u) {
      if (u.focused && (f(u.focused), v.current && (cancelAnimationFrame(v.current), v.current = null)), !u.focused && !h) {
        const R = requestAnimationFrame(() => {
          f(null), v.current = null;
        });
        v.current = R;
      }
      return () => {
        v.current && (cancelAnimationFrame(v.current), v.current = null);
      };
    }
  }, [u, u?.focused, h]);
  const m = u && (u.focused || (h ? d : null) || d), [p, x] = Y.useState(!1);
  Y.useEffect(() => {
    const R = requestAnimationFrame(() => x(!0));
    return () => cancelAnimationFrame(R);
  }, [m?.index]);
  const D = c?.innerWidth ?? 0, I = c?.innerHeight ?? 0, _ = m ? Math.min(Math.max(m.clientX, 0), D) : 0, y = m ? Math.min(Math.max(m.clientY, 0), I) : 0, P = c.ref?.current;
  if (!m)
    return null;
  const j = e?.[m.index], T = pa(j).map((R) => ({ id: R, label: Ln[R].tooltip })), k = m.x instanceof Date ? m.x : new Date(m.x), b = s ? s(k) : k.toDateString(), L = o ? `${o}` : "", N = a || L ? `${m.y}${L ? "" + L : " "}${a ? " " + a : ""}` : `${m.y}`, $ = ha(j?.variationIcon), S = Il(j?.assuranceIcon), A = fm(
    t.mean ?? null,
    t.sigma,
    m.y
  ), re = n ? n(m.index, { x: m.x, y: m.y }) : void 0, V = $ || S || A, E = j?.specialCauseTrendUp || j?.specialCauseTrendDown, H = j?.variationIcon === Le.Neither && E, z = l && H ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, ae = T.length > 0, O = j?.primeDirection, pe = j?.primeRuleId, Se = i && j?.variationIcon === Le.Neither && ae, ce = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", de = Ml(j?.variationIcon), K = 6.2, ue = [
    re || "",
    `${b} • ${N}`
  ].filter(Boolean).reduce(
    (R, U) => Math.max(R, U.length * K + 32),
    0
  ), C = 200, B = 440, W = Math.min(B, Math.max(C, ue));
  let ne = _ + 12, ie = (c.margin?.top ?? 0) + y + 16;
  ne + W > D && (ne = _ - -60 - W), ne < 0 && (ne = Math.max(0, D - W));
  const be = m ? `spc-tooltip-${m.index}` : "spc-tooltip", Ce = typeof m.index == "number" ? m.index : NaN, he = P ? Jc(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: be,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (p ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: ne,
          top: ie,
          width: W,
          maxWidth: B,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": p ? "false" : "true",
        "data-floating": !0,
        "data-placement": ne + W + 12 > D ? "left" : "right",
        onPointerEnter: () => {
          g(!0), v.current && (cancelAnimationFrame(v.current), v.current = null);
        },
        onPointerLeave: () => {
          if (g(!1), !u?.focused) {
            const R = requestAnimationFrame(() => {
              f(null), v.current = null;
            });
            v.current = R;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              Ce
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: b })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: N })
          ] }),
          V && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: $?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              We,
              {
                text: $,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : $?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              We,
              {
                text: $,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : Se ? /* @__PURE__ */ r.jsx(
              We,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : $ ? /* @__PURE__ */ r.jsx(
              We,
              {
                text: $,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          S && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const R = S.toLowerCase(), G = !(R.includes("not met") || R.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(R);
              return /* @__PURE__ */ r.jsx(
                We,
                {
                  text: S,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${G ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${S}`
                }
              );
            })() })
          ] }),
          A && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              We,
              {
                text: (() => {
                  const R = A.toLowerCase();
                  return R.startsWith("within 1") ? "≤1σ" : R.startsWith("1–2") ? "1–2σ" : R.startsWith("2–3") ? "2–3σ" : R.startsWith(">3") ? ">3σ" : A;
                })(),
                color: A.includes(">3") ? "orange" : A.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${A}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          z && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: z })
          ] }),
          ae && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: T.map(({ id: R, label: U }) => {
                  const G = String(R), F = G === pt.TrendIncreasing || G === pt.TrendDecreasing ? "fdp-spc-tag--trend" : Se ? "fdp-spc-tag--no-judgement" : $ ? $.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : $.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    We,
                    {
                      text: U,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${F}`,
                      "data-rule-id": G
                    },
                    G
                  );
                })
              }
            ),
            O && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const R = Se ? "fdp-spc-tag--no-judgement" : $ ? $.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : $.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", U = `${O}${pe ? ` (${pe})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  We,
                  {
                    text: U,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${R}`,
                    "aria-label": `Prime direction ${O}${pe ? ` via ${pe}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    P
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
            cx: _,
            cy: y,
            r: 7,
            fill: "none",
            stroke: ce,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: _,
            cy: y,
            r: 5,
            fill: "#000",
            stroke: ce,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: _,
            cy: y,
            r: 2.5,
            fill: de,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        he
      ]
    }
  );
}, ba = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...u
}) => {
  const c = xr(), d = xr(), { start: f, mid: h, end: g } = fa(), v = o || hm[e], m = (i || mm[e]).slice(0, 2), p = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": p,
      ...u,
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          a && /* @__PURE__ */ r.jsxs("filter", { id: c, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ r.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ r.jsxs("linearGradient", { id: d, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: v, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: v, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(g) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${d})` : "#ffffff",
            ...a ? { filter: `url(#${c})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: v,
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
          e === nn.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: v,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === nn.Uncertain ? /* @__PURE__ */ r.jsx(
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
              stroke: v,
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
              stroke: v,
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
ba.displayName = "SPCAssuranceIcon";
function Om(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === at.Common && n[s - 1] === n[s + 1] && n[s - 1] !== at.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let i = o + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - o === 1 && s !== at.Common && (n[o] = at.Common), o = i;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const i = n[o], l = s - 1, u = l - o + 1;
        (i === at.Common || u >= 2) && a.push({ start: o, end: l, category: i }), o = s;
      }
  }
  return a;
}
const Um = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = Jt(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, u = Y.useMemo(() => l ? pa(l) : [], [l]), c = Y.useMemo(
    () => Array.from(
      new Set(u.map((m) => Ln[m]?.narration).filter(Boolean))
    ),
    [u]
  ), d = l ? ha(l.variationIcon) : null, f = l ? Il(l.assuranceIcon) : null, h = u.length > 0, g = l ? l.variationIcon === Le.Neither && h : !1, v = Y.useRef(null);
  return Y.useEffect(() => {
    if (!a || !s || l == null) return;
    const m = `${s.seriesId}:${s.index}`;
    if (v.current !== m) {
      v.current = m;
      try {
        a({
          index: s.index,
          x: s.x,
          y: s.y,
          row: l,
          rules: u
        });
      } catch {
      }
    }
  }, [s?.seriesId, s?.index, s?.x, s?.y, l, u, a]), /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: "fdp-spc-inspector",
      role: "region",
      "aria-label": "Signals inspector",
      "data-testid": "spc-signals-inspector",
      children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "fdp-spc-inspector__header",
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ r.jsx("strong", { children: "Signals inspector" }),
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-inspector__nav", "aria-hidden": !o, children: o && /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      o.focused ? o.focusPrevPoint() : o.focusFirstPoint();
                    },
                    "aria-label": "Previous point",
                    children: "◀"
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "button",
                  {
                    type: "button",
                    className: "fdp-button fdp-button--secondary",
                    onClick: () => {
                      o.focused ? o.focusNextPoint() : o.focusFirstPoint();
                    },
                    "aria-label": "Next point",
                    children: "▶"
                  }
                )
              ] }) })
            ]
          }
        ),
        !l || !s ? /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-inspector__empty", children: "No point selected." }) : /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-inspector__body", children: [
          /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__summary",
              style: { display: "flex", gap: 16, flexWrap: "wrap" },
              children: [
                /* @__PURE__ */ r.jsxs("span", { children: [
                  /* @__PURE__ */ r.jsx("strong", { children: "Point:" }),
                  " ",
                  s.index + 1
                ] }),
                /* @__PURE__ */ r.jsxs("span", { children: [
                  /* @__PURE__ */ r.jsx("strong", { children: "Value:" }),
                  " ",
                  s.y,
                  n ? ` ${n}` : "",
                  t ? ` ${t}` : ""
                ] })
              ]
            }
          ),
          (d || g || f) && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-inspector__signals",
              style: { marginTop: 8 },
              children: /* @__PURE__ */ r.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    alignItems: "center"
                  },
                  children: [
                    d?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
                      We,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : d?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      We,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : g ? /* @__PURE__ */ r.jsx(
                      We,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : d ? /* @__PURE__ */ r.jsx(
                      We,
                      {
                        text: d,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), x = !(m.includes("not met") || m.includes("not achieved")) && /^|\b(met|achieved)\b|$/.test(m);
                      return /* @__PURE__ */ r.jsx(
                        We,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${x ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                          "aria-label": `Assurance: ${f}`
                        }
                      );
                    })()
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-inspector__rules", style: { marginTop: 8 }, children: [
            /* @__PURE__ */ r.jsx("strong", { children: "Special cause:" }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                style: {
                  display: "flex",
                  gap: 6,
                  flexWrap: "wrap",
                  marginTop: 4
                },
                children: u.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : u.map((m) => {
                  const p = String(m), D = p === pt.TrendIncreasing || p === pt.TrendDecreasing ? "fdp-spc-tag--trend" : g ? "fdp-spc-tag--no-judgement" : d ? d.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : d.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", I = Ln[m]?.tooltip || p;
                  return /* @__PURE__ */ r.jsx(
                    We,
                    {
                      text: I,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${D}`,
                      "data-rule-id": p,
                      title: Ln[m]?.tooltip
                    },
                    p
                  );
                })
              }
            )
          ] }),
          c.length > 0 && /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Summary:" }),
                " ",
                c.join("; ")
              ]
            }
          )
        ] })
      ]
    }
  );
};
var gr = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(gr || {}), Oe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Oe || {}), it = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(it || {}), Xe = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(Xe || {}), fn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(fn || {}), ln = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(ln || {}), Pn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Pn || {}), Dn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Dn || {}), dt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(dt || {}), Pt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(Pt || {});
const en = {
  [Xe.SinglePoint]: 1,
  [Xe.TwoSigma]: 2,
  [Xe.Shift]: 3,
  [Xe.Trend]: 4
}, ii = 3.267, Wm = 2.66, li = 0.2777;
function $e(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Tn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function ci(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!(t[o] || !$e(s))) {
      if (a !== null) {
        const i = e[a];
        $e(i) && (n[o] = Math.abs(s - i));
      }
      a = o;
    }
  }
  return n;
}
function ui(e, t) {
  const n = e.filter($e);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = Tn(a), i = ii * s;
    a = a.filter((l) => l <= i);
  }
  const o = Tn(a);
  return { mrMean: o, mrUcl: ii * o };
}
function di(e, t) {
  if (!$e(e) || !$e(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = Wm * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function zm(e, t, n, a) {
  if (e === gr.T) {
    const f = t.map((j) => $e(j) && j > 0 ? Math.pow(j, li) : null), h = ci(f, n), g = ui(h, a), v = f.filter((j, w) => !n[w] && $e(j)), m = v.length ? Tn(v) : NaN, p = di(m, g.mrMean), x = (j) => $e(j) && j > 0 ? Math.pow(j, 1 / li) : null, D = $e(p.upperProcessLimit) ? x(p.upperProcessLimit) : null, I = $e(p.lowerProcessLimit) && p.lowerProcessLimit > 0 ? x(p.lowerProcessLimit) : null, _ = $e(p.upperTwoSigma) ? x(p.upperTwoSigma) : null, y = $e(p.lowerTwoSigma) && p.lowerTwoSigma > 0 ? x(p.lowerTwoSigma) : null, M = $e(p.upperOneSigma) ? x(p.upperOneSigma) : null, P = $e(p.lowerOneSigma) && p.lowerOneSigma > 0 ? x(p.lowerOneSigma) : null;
    return {
      mean: $e(m) && m > 0 ? x(m) : null,
      mr: h,
      mrMean: g.mrMean,
      mrUcl: g.mrUcl,
      upperProcessLimit: D,
      lowerProcessLimit: I,
      upperTwoSigma: _,
      lowerTwoSigma: y,
      upperOneSigma: M,
      lowerOneSigma: P
    };
  }
  if (e === gr.G) {
    const f = t.filter((k, b) => !n[b] && $e(k)), h = f.length ? Tn(f) : NaN, g = $e(h) ? 1 / (h + 1) : NaN, v = (k) => {
      if (!$e(g) || g <= 0 || g >= 1) return NaN;
      const b = Math.ceil(Math.log(1 - k) / Math.log(1 - g)) - 1;
      return Math.max(0, b);
    }, m = 135e-5, p = 1 - 135e-5, x = 0.02275, D = 1 - 0.02275, I = 0.158655, _ = 1 - 0.158655, y = v(p), M = v(m), P = v(D), j = v(x), w = v(_), T = v(I);
    return {
      mean: $e(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: $e(y) ? y : null,
      lowerProcessLimit: $e(M) ? M : null,
      upperTwoSigma: $e(P) ? P : null,
      lowerTwoSigma: $e(j) ? j : null,
      upperOneSigma: $e(w) ? w : null,
      lowerOneSigma: $e(T) ? T : null
    };
  }
  if (e !== gr.XmR)
    return {
      mean: NaN,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const o = ci(t, n), s = o.filter($e), i = s.length ? Tn(s) : NaN, l = $e(i) ? 3.267 * i : NaN;
  let u = NaN;
  {
    const f = [];
    for (let h = 0; h < t.length; h++) {
      const g = t[h];
      if (n[h] || !$e(g)) continue;
      if (!a) {
        f.push(g);
        continue;
      }
      const v = o[h];
      (v === null || !$e(l) || $e(v) && v <= l) && f.push(g);
    }
    u = f.length ? Tn(f) : NaN;
  }
  const c = ui(o, a), d = di(u, c.mrMean);
  return {
    mean: u,
    mr: o,
    mrMean: c.mrMean,
    mrUcl: c.mrUcl,
    ...d
  };
}
function Vm(e, t) {
  const n = e.map((u, c) => c).filter((u) => !e[u].ghost && $e(e[u].value)), a = (u) => e[u], o = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const u of n) {
    const c = a(u);
    if (!$e(c.mean) || !$e(c.value)) {
      i = [], l = [];
      continue;
    }
    if (c.value > c.mean ? (i.push(u), l = []) : c.value < c.mean ? (l.push(u), i = []) : (i = [], l = []), i.length >= o)
      for (const d of i) a(d).shiftUp = !0;
    if (l.length >= o)
      for (const d of l) a(d).shiftDown = !0;
  }
  for (let u = 0; u <= n.length - 3; u++) {
    const d = n.slice(u, u + 3).map(a);
    if (!d.every((_) => $e(_.value) && $e(_.mean))) continue;
    const f = d[0].mean, h = d.every((_) => _.value > f), g = d.every((_) => _.value < f);
    if (!h && !g) continue;
    const v = d[0].upperTwoSigma ?? 1 / 0, m = d[0].lowerTwoSigma ?? -1 / 0, p = d[0].upperProcessLimit ?? 1 / 0, x = d[0].lowerProcessLimit ?? -1 / 0, D = d.filter((_) => t.twoSigmaIncludeAboveThree ? _.value > v : _.value > v && _.value <= p), I = d.filter((_) => t.twoSigmaIncludeAboveThree ? _.value < m : _.value < m && _.value >= x);
    h && D.length >= 2 && D.forEach((_) => _.twoSigmaUp = !0), g && I.length >= 2 && I.forEach((_) => _.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let u = 0; u <= n.length - 5; u++) {
      const d = n.slice(u, u + 5).map(a);
      if (!d.every((D) => $e(D.value) && $e(D.mean))) continue;
      const f = d[0].mean, h = d.every((D) => D.value > f), g = d.every((D) => D.value < f);
      if (!h && !g) continue;
      const v = d[0].upperOneSigma ?? 1 / 0, m = d[0].lowerOneSigma ?? -1 / 0, p = d.filter((D) => D.value > v), x = d.filter((D) => D.value < m);
      h && p.length >= 4 && p.forEach((D) => D.fourOfFiveUp = !0), g && x.length >= 4 && x.forEach((D) => D.fourOfFiveDown = !0);
    }
  for (let u = 0; u <= n.length - s; u++) {
    const c = n.slice(u, u + s), d = c.map(a);
    if (!d.every((g) => $e(g.value))) continue;
    let f = !0, h = !0;
    for (let g = 1; g < d.length && (d[g].value > d[g - 1].value || (f = !1), d[g].value < d[g - 1].value || (h = !1), !(!f && !h)); g++)
      ;
    f && c.forEach((g) => a(g).trendUp = !0), h && c.forEach((g) => a(g).trendDown = !0);
  }
}
function Wl(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: Xe.SinglePoint,
    rank: en[Xe.SinglePoint]
  }), e.singlePointDown && n.push({
    id: Xe.SinglePoint,
    rank: en[Xe.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: Xe.TwoSigma,
    rank: en[Xe.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: Xe.TwoSigma,
    rank: en[Xe.TwoSigma]
  }), e.shiftUp && t.push({ id: Xe.Shift, rank: en[Xe.Shift] }), e.shiftDown && n.push({ id: Xe.Shift, rank: en[Xe.Shift] }), e.trendUp && t.push({ id: Xe.Trend, rank: en[Xe.Trend] }), e.trendDown && n.push({ id: Xe.Trend, rank: en[Xe.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), o = n.reduce((i, l) => Math.max(i, l.rank), 0), s = a > o ? fn.Upwards : o > a ? fn.Downwards : fn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function fi(e, t) {
  const n = t === Oe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Oe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Oe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Oe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function pi(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: u, upMax: c, dnMax: d, primeDirection: f } = Wl(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, g = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && Gm({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === Oe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? it.ImprovementHigh : e.specialCauseConcernValue !== null ? it.ConcernLow : it.CommonCause : t === Oe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? it.ImprovementLow : e.specialCauseConcernValue !== null ? it.ConcernHigh : it.CommonCause : e.variationIcon = it.CommonCause;
  const v = e.specialCauseImprovementValue !== null ? ln.Up : e.specialCauseConcernValue !== null ? ln.Down : void 0, m = v === ln.Up ? c : v === ln.Down ? d : Math.max(c, d);
  e.primeRank = m || void 0;
  const p = v === ln.Up ? l.find((x) => x.rank === m) : v === ln.Down ? u.find((x) => x.rank === m) : void 0;
  return e.primeRuleId = p?.id, { originalImprovement: h, originalConcern: g };
}
function Gm(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? fn.Same,
    conflictStrategy: l,
    ruleHierarchy: u
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const d = !!t.trendUp, f = !!t.trendDown;
    if (n === Oe.Up) {
      if (d && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!d && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Oe.Down) {
      if (f && !d) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!f && d) {
        t.specialCauseImprovementValue = null;
        return;
      }
    }
  }
  const c = o ? Dn.PreferImprovement : l ?? Dn.SqlPrimeThenRule;
  if (c === Dn.PreferImprovement) {
    n === Oe.Up ? t.specialCauseConcernValue = null : n === Oe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (c === Dn.RuleHierarchy) {
    const d = u ?? [Xe.Trend, Xe.Shift, Xe.TwoSigma, Xe.SinglePoint], { up: f, dn: h } = Wl(t);
    for (const g of d) {
      const v = f.some((p) => p.id === g), m = h.some((p) => p.id === g);
      if (v && !m) {
        n === Oe.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !v) {
        n === Oe.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (v && m) {
        (n === Oe.Up || n === Oe.Down) && (a === Pn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === fn.Upwards ? n === Oe.Up ? t.specialCauseConcernValue = null : n === Oe.Down && (t.specialCauseImprovementValue = null) : i === fn.Downwards ? n === Oe.Up ? t.specialCauseImprovementValue = null : n === Oe.Down && (t.specialCauseConcernValue = null) : a === Pn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
function Ym(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function qm(e) {
  const t = Ym(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function hi(e) {
  const t = [];
  let n = 0;
  for (; n < e.length; ) {
    const a = e[n];
    if (!a || a.value == null || a.ghost || !a.trendUp && !a.trendDown) {
      n++;
      continue;
    }
    const o = a.trendUp ? "Up" : a.trendDown ? "Down" : void 0;
    let s = n, i = n;
    for (; i < e.length; i++) {
      const v = e[i];
      if (!v || v.value == null || v.ghost || !(o === "Up" ? v.trendUp : v.trendDown)) break;
    }
    const l = i - 1, u = [];
    let c, d, f = 1 / 0, h = -1 / 0, g = 0;
    for (let v = s; v <= l; v++) {
      const m = e[v];
      if (m.value == null) continue;
      const p = m.value - (m.mean ?? 0), x = qm(p);
      if (!x) {
        c !== void 0 && (u.push({
          trendDirection: o,
          start: c,
          end: v - 1,
          side: d,
          minValue: f,
          maxValue: h,
          maxAbsDeltaFromMean: g
        }), c = void 0, d = void 0, f = 1 / 0, h = -1 / 0, g = 0);
        continue;
      }
      if (c === void 0)
        c = v, d = x, f = m.value, h = m.value, g = Math.abs(p);
      else if (x !== d)
        u.push({
          trendDirection: o,
          start: c,
          end: v - 1,
          side: d,
          minValue: f,
          maxValue: h,
          maxAbsDeltaFromMean: g
        }), c = v, d = x, f = m.value, h = m.value, g = Math.abs(p);
      else {
        m.value < f && (f = m.value), m.value > h && (h = m.value);
        const D = Math.abs(p);
        D > g && (g = D);
      }
    }
    c !== void 0 && u.push({
      trendDirection: o,
      start: c,
      end: l,
      side: d,
      minValue: f,
      maxValue: h,
      maxAbsDeltaFromMean: g
    }), t.push({ trendDirection: o, start: s, end: l, segments: u }), n = l + 1;
  }
  return t;
}
function Xm(e) {
  if (e === Oe.Up) return "Above";
  if (e === Oe.Down) return "Below";
}
function Km(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function mi(e, t) {
  const n = t.strategy ?? dt.CrossingAfterFavourable, a = Xm(t.metricImprovement), o = Km(a), s = [];
  for (const i of e) {
    if (!a) {
      if (n === dt.ExtremeFavourable || n === dt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let u = l[0];
        for (const c of l)
          c.maxAbsDeltaFromMean > u.maxAbsDeltaFromMean && (u = c);
        s.push(u);
      }
      continue;
    }
    if (n === dt.FavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === dt.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (n === dt.CrossingAfterFavourable) {
      const l = i.segments;
      let u;
      for (let c = 0; c < l.length; c++) {
        const d = l[c];
        if (d.side === a && c > 0 && l[c - 1].side !== a) {
          u = d;
          break;
        }
      }
      if (!u) {
        const c = l.filter((d) => d.side === a);
        c.length > 0 && (u = c.reduce(
          (d, f) => f.end - f.start > d.end - d.start ? f : d,
          c[0]
        ));
      }
      u && s.push(u);
      continue;
    }
    if (n === dt.CrossingAfterUnfavourable) {
      const l = i.segments;
      let u;
      for (let c = 0; c < l.length; c++) {
        const d = l[c];
        if (d.side === o && c > 0 && l[c - 1].side !== o) {
          u = d;
          break;
        }
      }
      if (!u) {
        const c = l.filter((d) => d.side === o);
        c.length > 0 && (u = c.reduce(
          (d, f) => f.end - f.start > d.end - d.start ? f : d,
          c[0]
        ));
      }
      u && s.push(u);
      continue;
    }
    if (n === dt.ExtremeFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c
      );
      s.push(u);
      continue;
    }
    if (n === dt.ExtremeUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean ? d : c);
      s.push(u);
      continue;
    }
    if (n === dt.FirstFavourable) {
      const l = i.segments.find((u) => u.side === a);
      l && s.push(l);
      continue;
    }
    if (n === dt.FirstUnfavourable) {
      const l = i.segments.find((u) => u.side === o);
      l && s.push(l);
      continue;
    }
    if (n === dt.LongestFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      const u = l.reduce(
        (c, d) => d.end - d.start > c.end - c.start ? d : c
      );
      s.push(u);
      continue;
    }
    if (n === dt.LongestUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      const u = l.reduce((c, d) => d.end - d.start > c.end - c.start ? d : c);
      s.push(u);
      continue;
    }
    if (n === dt.LastFavourable) {
      const l = i.segments.filter((u) => u.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === dt.LastUnfavourable) {
      const l = i.segments.filter((u) => u.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var lt = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(lt || {});
function Jm(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function Ks(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = Jm(s);
    if (i && l) return "Improvement";
    switch (s.variationIcon) {
      case it.ImprovementHigh:
      case it.ImprovementLow:
        return "Improvement";
      case it.ConcernHigh:
      case it.ConcernLow:
        return "Concern";
      case it.NeitherHigh:
      case it.NeitherLow: {
        if (a === "Ungated" && n !== Oe.Neither) {
          if (i && !l)
            return n === Oe.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Oe.Down ? "Improvement" : "Concern";
        }
        return o ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function Zm(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = Ks(e, {
    metricImprovement: t,
    trendVisualMode: "Ungated",
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Oe.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", u = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const g = o[f];
    (g === lt.Common || g === lt.NoJudgement) && (o[f] = h);
  }, c = (f) => {
    if (f == null) return null;
    const h = [];
    for (const v of e)
      v.partitionId === f && typeof v.value == "number" && !v.ghost && h.push(v.value);
    return h.length ? h.reduce((v, m) => v + m, 0) / h.length : null;
  }, d = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : (() => {
    const f = [];
    for (let h = 1; h < e.length; h++) {
      const g = e[h - 1], v = e[h];
      !g || !v || v.partitionId !== g.partitionId && f.push(h);
    }
    return f;
  })();
  for (const f of d) {
    const h = e[f - 1], g = e[f];
    if (!h || !g) continue;
    let v = null;
    for (let _ = f - 1; _ >= 0; _--) {
      const y = e[_];
      if (y.partitionId !== h.partitionId) break;
      if (typeof y.mean == "number") {
        v = y.mean;
        break;
      }
    }
    let m = null;
    for (let _ = f; _ < e.length; _++) {
      const y = e[_];
      if (y.partitionId !== g.partitionId) break;
      if (typeof y.mean == "number") {
        m = y.mean;
        break;
      }
    }
    if (v == null && (v = c(h.partitionId ?? null)), m == null && (m = c(g.partitionId ?? null)), v == null || m == null) continue;
    const p = m - v, x = t === Oe.Up ? p > 0 : p < 0, D = x ? lt.Improvement : lt.Concern, I = l === "Same" ? D : x ? lt.Concern : lt.Improvement;
    for (let _ = 1; _ <= s; _++) u(f - _, I);
    for (let _ = 0; _ < i; _++) u(f + _, D);
  }
  return o;
}
function zl(e) {
  if (!e) return {};
  if (typeof e == "object" && ("minimumPoints" in e || "shiftPoints" in e || "trendPoints" in e))
    return e;
  const t = e, n = {};
  if (t.thresholds) {
    const a = t.thresholds;
    a.minimumPoints != null && (n.minimumPoints = a.minimumPoints), a.shiftPoints != null && (n.shiftPoints = a.shiftPoints), a.trendPoints != null && (n.trendPoints = a.trendPoints), a.excludeMovingRangeOutliers != null && (n.excludeMovingRangeOutliers = a.excludeMovingRangeOutliers);
  }
  if (t.eligibility && t.eligibility.chartLevel != null && (n.chartLevelEligibility = t.eligibility.chartLevel), t.parity && (t.parity.trendAcrossPartitions != null && (n.trendAcrossPartitions = t.parity.trendAcrossPartitions), t.parity.twoSigmaIncludeAboveThree != null && (n.twoSigmaIncludeAboveThree = t.parity.twoSigmaIncludeAboveThree), t.parity.enableFourOfFiveRule != null && (n.enableFourOfFiveRule = t.parity.enableFourOfFiveRule)), t.conflict && (t.conflict.preferImprovementWhenConflict != null && (n.preferImprovementWhenConflict = t.conflict.preferImprovementWhenConflict), t.conflict.preferTrendWhenConflict != null && (n.preferTrendWhenConflict = t.conflict.preferTrendWhenConflict), t.conflict.strategy != null && (n.conflictStrategy = t.conflict.strategy), t.conflict.ruleHierarchy != null && (n.ruleHierarchy = t.conflict.ruleHierarchy), t.conflict.metricRuleOnTie != null && (n.metricConflictRule = t.conflict.metricRuleOnTie)), t.trend?.segmentation) {
    const a = t.trend.segmentation;
    a.mode != null && (n.trendSegmentationMode = a.mode), a.favourableSegmentation != null && (n.trendFavourableSegmentation = a.favourableSegmentation), a.strategy != null && (n.trendSegmentationStrategy = a.strategy), a.dominatesHighlightedWindow != null && (n.trendDominatesHighlightedWindow = a.dominatesHighlightedWindow);
  }
  return n;
}
function Js(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, o = zl(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Pn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Dn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: Pt.Off,
    trendSegmentationStrategy: dt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? Pt.Always : o?.trendFavourableSegmentation === !1 ? Pt.Off : s.trendSegmentationMode), l = a.map((m, p) => ({
    rowId: p + 1,
    x: m.x,
    value: $e(m.value) ? m.value : null,
    ghost: !!m.ghost,
    baseline: !!m.baseline,
    target: $e(m.target) ? m.target : null
  })), u = [];
  let c = [];
  for (const m of l)
    m.baseline && c.length && (u.push(c), c = []), c.push(m);
  c.length && u.push(c);
  const d = [], f = (s.trendFavourableSegmentation || i !== Pt.Off) && !s.preferImprovementWhenConflict, h = l.filter((m) => !m.ghost && $e(m.value)).length, g = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let v = 0;
  for (const m of u) {
    v++;
    const p = m.map((y) => y.value), x = m.map((y) => y.ghost), D = zm(
      t,
      p,
      x,
      !!s.excludeMovingRangeOutliers
    ), I = m.map((y, M) => {
      const P = !y.ghost && $e(y.value) ? p.slice(0, M + 1).filter((w, T) => !x[T] && $e(w)).length : 0, j = g ? !0 : P >= s.minimumPoints;
      return {
        rowId: y.rowId,
        x: y.x,
        value: $e(y.value) ? y.value : null,
        ghost: y.ghost,
        partitionId: v,
        pointRank: P,
        mean: (j || g) && $e(D.mean) ? D.mean : null,
        upperProcessLimit: j || g ? D.upperProcessLimit : null,
        lowerProcessLimit: j || g ? D.lowerProcessLimit : null,
        upperTwoSigma: j || g ? D.upperTwoSigma : null,
        lowerTwoSigma: j || g ? D.lowerTwoSigma : null,
        upperOneSigma: j || g ? D.upperOneSigma : null,
        lowerOneSigma: j || g ? D.lowerOneSigma : null,
        // rules
        singlePointUp: !1,
        singlePointDown: !1,
        twoSigmaUp: !1,
        twoSigmaDown: !1,
        fourOfFiveUp: !1,
        fourOfFiveDown: !1,
        shiftUp: !1,
        shiftDown: !1,
        trendUp: !1,
        trendDown: !1,
        // candidates
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        variationIcon: it.CommonCause
      };
    });
    for (const y of I)
      y.ghost || !$e(y.value) || y.mean === null || ($e(y.upperProcessLimit) && y.value > y.upperProcessLimit && (y.singlePointUp = !0), $e(y.lowerProcessLimit) && y.value < y.lowerProcessLimit && (y.singlePointDown = !0));
    Vm(I, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((y) => {
      const M = y.some(
        (k) => (k.singlePointUp || k.twoSigmaUp || k.shiftUp || k.trendUp) && (k.singlePointDown || k.twoSigmaDown || k.shiftDown || k.trendDown)
      );
      if (i === Pt.Off || i === Pt.AutoWhenConflict && !M)
        return;
      const P = hi(y), j = mi(P, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), w = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
      for (const k of j)
        for (let b = k.start; b <= k.end; b++)
          k.trendDirection === "Up" ? w.add(b) : T.add(b);
      y.forEach((k, b) => {
        k.trendUp = w.has(b) ? k.trendUp : !1, k.trendDown = T.has(b) ? k.trendDown : !1, s.trendDominatesHighlightedWindow && (w.has(b) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : T.has(b) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
      });
    })(I);
    for (const y of I) {
      if (y.ghost || !$e(y.value) || y.mean === null) {
        d.push(y);
        continue;
      }
      const { aligned: M, opposite: P } = fi(
        y,
        n
      );
      if (y.specialCauseImprovementValue = M ? y.value : null, y.specialCauseConcernValue = P ? y.value : null, n === Oe.Neither) {
        const j = y.singlePointUp || y.twoSigmaUp || y.shiftUp || y.trendUp, w = y.singlePointDown || y.twoSigmaDown || y.shiftDown || y.trendDown;
        y.variationIcon = j ? it.NeitherHigh : w ? it.NeitherLow : it.CommonCause;
      } else
        pi(y, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      d.push(y);
    }
  }
  if (s.trendAcrossPartitions) {
    const m = d.map((p, x) => ({ idx: x, r: p })).filter(({ r: p }) => !p.ghost && $e(p.value));
    if (m.length >= s.trendPoints)
      for (let p = 0; p <= m.length - s.trendPoints; p++) {
        const x = m.slice(p, p + s.trendPoints).map((y) => y.idx), D = x.map((y) => d[y]);
        if (!D.every((y) => $e(y.value))) continue;
        let I = !0, _ = !0;
        for (let y = 1; y < D.length && (D[y].value > D[y - 1].value || (I = !1), D[y].value < D[y - 1].value || (_ = !1), !(!I && !_)); y++)
          ;
        I && x.forEach((y) => d[y].trendUp = !0), _ && x.forEach((y) => d[y].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const m = d.some(
        (p) => (p.singlePointUp || p.twoSigmaUp || p.shiftUp || p.trendUp) && (p.singlePointDown || p.twoSigmaDown || p.shiftDown || p.trendDown)
      );
      if (i === Pt.Always || i === Pt.AutoWhenConflict && m) {
        const p = hi(d), x = mi(p, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), D = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set();
        for (const _ of x)
          for (let y = _.start; y <= _.end; y++)
            _.trendDirection === "Up" ? D.add(y) : I.add(y);
        d.forEach((_, y) => {
          _.trendUp = D.has(y) ? _.trendUp : !1, _.trendDown = I.has(y) ? _.trendDown : !1, s.trendDominatesHighlightedWindow && (D.has(y) ? (_.singlePointDown = !1, _.twoSigmaDown = !1, _.shiftDown = !1) : I.has(y) && (_.singlePointUp = !1, _.twoSigmaUp = !1, _.shiftUp = !1));
        });
      }
    }
    for (const m of d) {
      if (m.ghost || !$e(m.value) || m.mean === null || n === Oe.Neither) continue;
      const { aligned: p, opposite: x } = fi(m, n);
      m.specialCauseImprovementValue = p ? m.value : null, m.specialCauseConcernValue = x ? m.value : null, pi(m, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: d };
}
function Zs(e, t) {
  const n = Js(e), a = Ks(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? "Ungated",
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = Zm(n.rows, s, o), l = a.map((u, c) => {
    const d = i[c];
    if (u === lt.Common || u === lt.NoJudgement) {
      if (d === lt.Improvement) return lt.Improvement;
      if (d === lt.Concern) return lt.Concern;
    }
    return u;
  });
  return { rows: n.rows, visuals: l };
}
var Vl = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(Vl || {});
function Qm(e, t, n) {
  const a = n?.trendVisualMode, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
  let i;
  switch (t) {
    case "recalc-crossing-shift": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        boundaryIndices: s
      };
      break;
    }
    case "recalc-crossing-trend": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 5,
        prePolarity: "Same",
        boundaryIndices: s
      };
      break;
    }
    case "recalc-crossing-two-sigma": {
      i = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 1,
        prePolarity: "Same",
        boundaryIndices: s
      };
      break;
    }
    case "baselines-recalculated":
      i = {
        mode: "RecalcCrossing",
        preWindow: 0,
        postWindow: 0,
        prePolarity: "Same",
        directionOverride: e.metricImprovement,
        boundaryIndices: s
      };
      break;
    case "recalculations-recalculated":
    case "none":
    default:
      i = void 0;
  }
  const { rows: l, visuals: u } = Zs(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: o,
    boundaryWindows: i
  });
  let c = u.slice(), d = s.length ? s[0] : -1;
  if (d < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        d = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && d > 0 && (c[d - 1] = lt.Common), { rows: l, visuals: c };
}
const Gl = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: Pn.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function eg(e) {
  return { ...Gl, ...e ?? {} };
}
function tg(e) {
  const { rows: t } = Js(e), n = Zs(e);
  return { rows: t, visuals: n.visuals };
}
let ng = 0;
const rg = ({
  data: e,
  ariaLabel: t = "SPC chart",
  height: n = 260,
  showZones: a = !0,
  showPoints: o = !0,
  announceFocus: s = !1,
  className: i,
  unit: l,
  highlightOutOfControl: u = !0,
  chartType: c = Dt.XmR,
  metricImprovement: d = Fe.Neither,
  enableRules: f = !0,
  showIcons: h = !1,
  showEmbeddedIcon: g = !0,
  embeddedIconVariant: v = dn.Classic,
  embeddedIconRunLength: m,
  targets: p,
  baselines: x,
  ghosts: D,
  settings: I,
  narrationContext: _,
  gradientSequences: y = !1,
  sequenceTransition: M = "slope",
  processLineWidth: P = 2,
  showWarningsPanel: j = !1,
  warningsFilter: w,
  enableNeutralNoJudgement: T = !0,
  showTrendGatingExplanation: k = !0,
  trendVisualMode: b = "ungated",
  disableTrendSideGating: L,
  source: N,
  alwaysShowZeroY: $ = !0,
  alwaysShowHundredY: S = !1,
  percentScale: A = !1,
  showTrendStartMarkers: re = !1,
  showFirstFavourableCrossMarkers: V = !1,
  showTrendBridgeOverlay: E = !1,
  showSignalsInspector: H = !1,
  onSignalFocus: z,
  visualsScenario: ae = Vl.None
}) => {
  const O = Y.useCallback(
    (oe) => String(oe).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((fe) => fe.length ? fe[0].toUpperCase() + fe.slice(1) : fe).join(" "),
    []
  ), pe = Y.useCallback(
    (oe) => String(oe).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((le) => le.length ? le[0].toUpperCase() + le.slice(1) : le).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && L !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const Se = Y.useMemo(() => e.map((oe, le) => ({
    x: oe.x,
    value: oe.y,
    target: p?.[le] ?? void 0,
    baseline: x?.[le] ?? void 0,
    ghost: D?.[le] ?? void 0
  })), [e, p, x, D]), ce = Y.useMemo(() => {
    try {
      const oe = I ? { ...I } : void 0;
      return Xs({ chartType: c, metricImprovement: d, data: Se, settings: oe });
    } catch {
      return null;
    }
  }, [Se, c, d, I]), de = Y.useMemo(() => {
    try {
      const oe = I?.minimumPointsPartition ?? I?.minimumPoints, le = {};
      typeof oe == "number" && !isNaN(oe) && (le.minimumPoints = oe, Se.filter((Ae) => !Ae.ghost && typeof Ae.value == "number").length >= oe && (le.chartLevelEligibility = !0)), I?.twoSigmaIncludeAboveThree != null && (le.twoSigmaIncludeAboveThree = !!I.twoSigmaIncludeAboveThree), I?.enableFourOfFiveRule != null && (le.enableFourOfFiveRule = !!I.enableFourOfFiveRule);
      const fe = {
        chartType: c ?? "XmR",
        metricImprovement: d ?? "Neither",
        data: Se,
        settings: Object.keys(le).length ? le : void 0
      }, De = ae, { visuals: xe } = Qm(fe, De, {
        trendVisualMode: b === "ungated" ? "Ungated" : "Gated",
        enableNeutralNoJudgement: T
      });
      return xe || [];
    } catch {
      return [];
    }
  }, [Se, c, d, b, T, I, ae]), ee = Y.useMemo(() => {
    try {
      const oe = I?.minimumPointsPartition ?? I?.minimumPoints, le = {};
      typeof oe == "number" && !isNaN(oe) && (le.minimumPoints = oe, Se.filter((Ae) => !Ae.ghost && typeof Ae.value == "number").length >= oe && (le.chartLevelEligibility = !0)), I?.twoSigmaIncludeAboveThree != null && (le.twoSigmaIncludeAboveThree = !!I.twoSigmaIncludeAboveThree);
      const fe = {
        chartType: c ?? "XmR",
        metricImprovement: d ?? "Neither",
        data: Se,
        settings: Object.keys(le).length ? le : void 0
      }, { rows: De } = tg(fe), xe = (je) => je === "ImprovementHigh" || je === "ImprovementLow" ? Le.Improvement : je === "ConcernHigh" || je === "ConcernLow" ? Le.Concern : Le.Neither;
      return De.map((je) => ({
        value: je.value,
        ghost: !!je.ghost,
        partitionId: je.partitionId,
        mean: je.mean,
        upperProcessLimit: je.upperProcessLimit,
        lowerProcessLimit: je.lowerProcessLimit,
        upperTwoSigma: je.upperTwoSigma,
        lowerTwoSigma: je.lowerTwoSigma,
        upperOneSigma: je.upperOneSigma,
        lowerOneSigma: je.lowerOneSigma,
        // Rule flags mapping (v2 -> UI keys expected by overlay/inspector)
        specialCauseSinglePointUp: !!je.singlePointUp,
        specialCauseSinglePointDown: !!je.singlePointDown,
        specialCauseTwoOfThreeUp: !!je.twoSigmaUp,
        specialCauseTwoOfThreeDown: !!je.twoSigmaDown,
        specialCauseFourOfFiveUp: !!je.fourOfFiveUp,
        specialCauseFourOfFiveDown: !!je.fourOfFiveDown,
        specialCauseShiftUp: !!je.shiftUp,
        specialCauseShiftDown: !!je.shiftDown,
        specialCauseTrendUp: !!je.trendUp,
        specialCauseTrendDown: !!je.trendDown,
        // Classification mapped to v1 enum
        variationIcon: xe(je.variationIcon),
        // Neutral special-cause hint for purple orientation
        specialCauseNeitherValue: je.variationIcon === "NeitherHigh" || je.variationIcon === "NeitherLow" ? je.specialCauseImprovementValue ?? je.specialCauseConcernValue ?? 1 : null,
        // Target/assurance may be absent in v2 rows; leave undefined for UI fallbacks
        target: je.target,
        assuranceIcon: void 0
      }));
    } catch {
      return null;
    }
  }, [Se, c, d, I]) || null, ue = (ee || []).slice().reverse().find((oe) => oe.mean != null), C = ue?.mean ?? null, B = [], W = Y.useMemo(() => B.length ? w ? B.filter((oe) => !(w.severities && oe.severity && !w.severities.includes(oe.severity) || w.categories && oe.category && !w.categories.includes(oe.category) || w.codes && !w.codes.includes(oe.code))) : B : [], [B, w]), [ne, Z] = Y.useState(""), ie = Y.useRef("");
  Y.useEffect(() => {
    if (!j) {
      ie.current !== "" && (ie.current = "", Z(""));
      return;
    }
    const oe = W.length;
    if (!oe) {
      const xe = "Diagnostics: no warnings.";
      xe !== ie.current && (ie.current = xe, Z(xe));
      return;
    }
    const le = {
      error: W.filter(
        (xe) => xe.severity === tn.Error
      ).length,
      warning: W.filter(
        (xe) => xe.severity === tn.Warning
      ).length,
      info: W.filter(
        (xe) => xe.severity === tn.Info
      ).length
    }, fe = [];
    le.error && fe.push(
      `${le.error} error${le.error === 1 ? "" : "s"}`
    ), le.warning && fe.push(
      `${le.warning} warning${le.warning === 1 ? "" : "s"}`
    ), le.info && fe.push(`${le.info} info`);
    const De = `Diagnostics updated: ${oe} warning${oe === 1 ? "" : "s"} (${fe.join(", ")}).`;
    De !== ie.current && (ie.current = De, Z(De));
  }, [j, W]);
  const be = ue?.upperProcessLimit ?? null, Ce = ue?.lowerProcessLimit ?? null, he = ue?.upperOneSigma ?? null, R = ue?.lowerOneSigma ?? null, U = ue?.upperTwoSigma ?? null, G = ue?.lowerTwoSigma ?? null, J = C != null && he != null ? Math.abs(he - C) : 0, F = Y.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), X = Y.useMemo(() => {
    if (A) {
      const xe = e.map((tt) => tt.y), je = Math.max(100, ...xe), Ae = Math.min(0, ...xe);
      return [Ae < 0 ? Ae : 0, je > 100 ? je : 100];
    }
    const le = [...e.map((xe) => xe.y)];
    if ([C, be, Ce, he, R, U, G].forEach((xe) => {
      xe != null && le.push(xe);
    }), p && p.forEach((xe) => {
      typeof xe == "number" && !isNaN(xe) && le.push(xe);
    }), !le.length) return;
    let fe = Math.min(...le), De = Math.max(...le);
    return $ && (fe = Math.min(0, fe)), S && (De = Math.max(100, De)), [fe, De];
  }, [e, C, be, Ce, he, R, U, G, p, $, S, A]), Q = Y.useMemo(() => {
    const oe = (le) => {
      const fe = le.filter((xe) => typeof xe == "number" && !isNaN(xe));
      if (!fe.length) return null;
      const De = fe[0];
      return fe.every((xe) => xe === De) ? De : null;
    };
    if (ee && ee.length) {
      const le = oe(ee.map((fe) => fe.target));
      if (le != null) return le;
    }
    return p && p.length ? oe(p) : null;
  }, [ee, p]), te = Y.useMemo(() => {
    const oe = e.map((le) => le.x instanceof Date || typeof le.x == "string" || typeof le.x == "number" ? le.x : void 0);
    return Ol({
      values: e.map((le) => le.y),
      dates: oe,
      providedUnit: l || _?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [e, l, _?.measureUnit]), q = l ?? _?.measureUnit ?? te.unit, se = Y.useMemo(() => q ? { ..._ || {}, measureUnit: q } : _, [_, q]), me = Y.useMemo(() => {
    if (!ee) return [];
    const oe = [];
    for (let le = 1; le < ee.length; le++)
      ee[le].partitionId !== ee[le - 1].partitionId && oe.push(le);
    return oe;
  }, [ee]), ve = Y.useMemo(() => {
    if (!g || !ee?.length) return null;
    const oe = ee, le = I?.minimumPoints ?? 13;
    if (oe.filter(
      (rt) => !rt.ghost && rt.value != null
    ).length < le) return null;
    let De = -1;
    for (let rt = oe.length - 1; rt >= 0; rt--) {
      const Ct = oe[rt];
      if (Ct && Ct.value != null && !Ct.ghost) {
        De = rt;
        break;
      }
    }
    if (De === -1) return null;
    const xe = oe[De], je = xe.variationIcon, Ae = je, tt = xe.assuranceIcon, wt = Ae === Le.Neither && !!xe.specialCauseNeitherValue, _t = tt === et.Pass ? nn.Pass : tt === et.Fail ? nn.Fail : nn.Uncertain;
    let Ge;
    if (Ae === Le.Suppressed) {
      const rt = xe.specialCauseSinglePointUp, Ct = xe.specialCauseSinglePointDown;
      d === Fe.Up ? rt ? Ge = Ie.Higher : Ct && (Ge = Ie.Lower) : d === Fe.Down ? Ct ? Ge = Ie.Lower : rt && (Ge = Ie.Higher) : Ge = Ie.Higher;
    } else if (Ae === Le.Neither && wt) {
      const rt = xe.specialCauseSinglePointUp || xe.specialCauseTwoOfThreeUp || xe.specialCauseFourOfFiveUp || xe.specialCauseShiftUp || xe.specialCauseTrendUp, Ct = xe.specialCauseSinglePointDown || xe.specialCauseTwoOfThreeDown || xe.specialCauseFourOfFiveDown || xe.specialCauseShiftDown || xe.specialCauseTrendDown;
      rt && !Ct ? Ge = Ie.Higher : Ct && !rt ? Ge = Ie.Lower : Ge = Ie.Higher;
    }
    let Ye;
    d === Fe.Up ? Ye = Ze.HigherIsBetter : d === Fe.Down ? Ye = Ze.LowerIsBetter : Ye = Ze.ContextDependent;
    const qe = 80;
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: { display: "flex", gap: 12, marginRight: 16 },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-icon",
              "data-variation": String(Ae),
              "data-trend-raw": Ge ? String(Ge) : "none",
              "data-trend": Ge ? String(Ge) : "none",
              "data-polarity": String(Ye ?? "unknown"),
              style: { width: qe, height: qe },
              children: /* @__PURE__ */ r.jsx(
                xa,
                {
                  dropShadow: !1,
                  data: {
                    variationIcon: je,
                    improvementDirection: d,
                    polarity: Ye,
                    specialCauseNeutral: wt,
                    highSideSignal: xe.specialCauseSinglePointUp || xe.specialCauseTwoOfThreeUp || xe.specialCauseFourOfFiveUp || xe.specialCauseShiftUp || xe.specialCauseTrendUp,
                    lowSideSignal: xe.specialCauseSinglePointDown || xe.specialCauseTwoOfThreeDown || xe.specialCauseFourOfFiveDown || xe.specialCauseShiftDown || xe.specialCauseTrendDown,
                    ...Ge ? { trend: Ge } : {}
                  },
                  letterMode: d === Fe.Neither ? nr.Direction : nr.Polarity,
                  size: qe,
                  variant: v,
                  runLength: v === dn.TriangleWithRun ? m : void 0
                }
              )
            }
          ),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "fdp-spc-chart__embedded-assurance-icon",
              "data-assurance": String(tt),
              style: { width: qe, height: qe },
              children: /* @__PURE__ */ r.jsx(
                ba,
                {
                  status: _t,
                  size: qe,
                  dropShadow: !1
                }
              )
            }
          )
        ]
      },
      `embedded-icon-${De}`
    );
  }, [
    g,
    ce?.rows,
    d,
    I?.minimumPoints,
    p,
    v,
    m
  ]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper",
      children: [
        g && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__top-row",
            style: {
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: 4
            },
            children: ve
          }
        ),
        /* @__PURE__ */ r.jsx(
          _h,
          {
            height: n,
            ariaLabel: t,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            className: void 0,
            children: /* @__PURE__ */ r.jsx(Sh, { series: F, yDomain: X, children: /* @__PURE__ */ r.jsx(
              ag,
              {
                series: F,
                showPoints: o,
                announceFocus: s,
                limits: { mean: C, ucl: be, lcl: Ce, sigma: J, onePos: he, oneNeg: R, twoPos: U, twoNeg: G },
                showZones: a,
                highlightOutOfControl: u,
                engineRows: ee,
                uniformTarget: Q,
                visualCategories: de,
                enableRules: f,
                showIcons: h,
                narrationContext: se,
                gradientSequences: y,
                sequenceTransition: M,
                processLineWidth: P,
                effectiveUnit: q,
                partitionMarkers: me,
                ariaLabel: t,
                enableNeutralNoJudgement: T,
                showTrendGatingExplanation: k,
                metricImprovement: d,
                showTrendStartMarkers: re,
                showFirstFavourableCrossMarkers: V,
                showTrendBridgeOverlay: E,
                showSignalsInspector: H,
                onSignalFocus: z
              }
            ) })
          }
        ),
        N && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof N == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          N
        ] }) : N }),
        j && ne && /* @__PURE__ */ r.jsx(
          "div",
          {
            "data-testid": "spc-diagnostics-live",
            "aria-live": "polite",
            style: {
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: 0,
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
              whiteSpace: "nowrap",
              border: 0
            },
            children: ne
          }
        ),
        j && W.length > 0 && /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "fdp-spc-chart__warnings",
            role: "region",
            "aria-label": "SPC diagnostics",
            children: [
              /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
              /* @__PURE__ */ r.jsx(
                Kt,
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
                  rows: W.map((oe) => {
                    let le = "grey";
                    return oe.severity === tn.Error ? le = "red" : oe.severity === tn.Warning ? le = "orange" : oe.severity === tn.Info && (le = "blue"), [
                      {
                        node: /* @__PURE__ */ r.jsx(
                          We,
                          {
                            color: le,
                            text: (oe.severity ? String(oe.severity) : "Info").replace(
                              /^[a-z]/,
                              (fe) => fe.toUpperCase()
                            )
                          }
                        ),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
                      },
                      {
                        node: oe.category ? /* @__PURE__ */ r.jsx(
                          We,
                          {
                            color: "purple",
                            text: pe(oe.category)
                          }
                        ) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
                      },
                      {
                        node: /* @__PURE__ */ r.jsx(We, { color: "grey", text: O(oe.code) }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
                      },
                      {
                        node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                          /* @__PURE__ */ r.jsx("span", { children: oe.message }),
                          oe.context && Object.keys(oe.context).length > 0 && /* @__PURE__ */ r.jsxs(
                            "details",
                            {
                              className: "fdp-spc-chart__warning-context",
                              style: { marginTop: 4 },
                              children: [
                                /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                                /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(oe.context, null, 2) })
                              ]
                            }
                          )
                        ] }),
                        classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message"
                      }
                    ];
                  }),
                  classes: "fdp-spc-chart__warnings-table-wrapper",
                  tableClasses: "fdp-spc-chart__warnings-table"
                }
              )
            ]
          }
        )
      ]
    }
  );
}, ag = ({
  series: e,
  showPoints: t,
  announceFocus: n,
  limits: a,
  showZones: o,
  highlightOutOfControl: s,
  engineRows: i,
  enableRules: l,
  showIcons: u,
  narrationContext: c,
  gradientSequences: d,
  sequenceTransition: f,
  processLineWidth: h,
  effectiveUnit: g,
  partitionMarkers: v,
  ariaLabel: m,
  metricImprovement: p,
  enableNeutralNoJudgement: x = !0,
  showTrendGatingExplanation: D = !0,
  showTrendStartMarkers: I = !1,
  showFirstFavourableCrossMarkers: _ = !1,
  showTrendBridgeOverlay: y = !1,
  showSignalsInspector: M = !1,
  onSignalFocus: P,
  visualCategories: j,
  uniformTarget: w
}) => {
  const T = vn(), k = rn();
  if (!T) return null;
  const { xScale: b, yScale: L } = T, N = Y.useRef(
    "spc-seq-" + ++ng
  ), $ = Jt(), S = e[0]?.data || [], A = Y.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const C = /* @__PURE__ */ new Set();
    return S.forEach((B, W) => {
      typeof a.ucl == "number" && B.y > a.ucl && C.add(W), typeof a.lcl == "number" && B.y < a.lcl && C.add(W);
    }), C;
  }, [a.ucl, a.lcl, S]), re = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const C = [];
    return i.forEach((B, W) => {
      const ne = !!(B.variationIcon === Le.Concern || B.variationIcon === Le.Improvement || B.specialCauseNeitherValue), Z = !!(B.specialCauseSinglePointUp || B.specialCauseTwoOfThreeUp || B.specialCauseFourOfFiveUp || B.specialCauseShiftUp || B.specialCauseTrendUp), ie = !!(B.specialCauseSinglePointDown || B.specialCauseTwoOfThreeDown || B.specialCauseFourOfFiveDown || B.specialCauseShiftDown || B.specialCauseTrendDown);
      C[W] = {
        variation: B.variationIcon,
        assurance: B.assuranceIcon,
        special: ne,
        concern: B.variationIcon === Le.Concern,
        improvement: B.variationIcon === Le.Improvement,
        trendUp: !!B.specialCauseTrendUp,
        trendDown: !!B.specialCauseTrendDown,
        upAny: Z,
        downAny: ie,
        neutralSpecial: !!B.specialCauseNeitherValue,
        shiftUp: !!B.specialCauseShiftUp,
        shiftDown: !!B.specialCauseShiftDown,
        twoOfThreeUp: !!B.specialCauseTwoOfThreeUp,
        twoOfThreeDown: !!B.specialCauseTwoOfThreeDown,
        fourOfFiveUp: !!B.specialCauseFourOfFiveUp,
        fourOfFiveDown: !!B.specialCauseFourOfFiveDown,
        partitionId: B.partitionId ?? null
      };
    }), C;
  }, [i]), V = Y.useMemo(() => (j || []).map((C) => C === lt.Improvement ? at.Improvement : C === lt.Concern ? at.Concern : C === lt.NoJudgement ? at.NoJudgement : at.Common), [j]), E = Y.useMemo(() => !d || !V.length ? [] : Om(V, !0), [d, V, m]), H = Y.useMemo(
    () => S.map((C) => b(C.x instanceof Date ? C.x : new Date(C.x))),
    [S, b]
  ), z = b.range()[1], ae = Y.useMemo(() => {
    if (!i || !i.length) return null;
    let C = Number.POSITIVE_INFINITY, B = Number.POSITIVE_INFINITY;
    if (i.forEach((he, R) => {
      he.specialCauseTrendUp && (C = Math.min(C, R)), he.specialCauseTrendDown && (B = Math.min(B, R));
    }), !Number.isFinite(C) && !Number.isFinite(B)) return null;
    const W = C <= B, ne = W ? "up" : "down", Z = W ? C : B, ie = (he) => p == null || p === Fe.Neither || he == null || typeof he.value != "number" || typeof he.mean != "number" ? !1 : ne === "up" ? p === Fe.Up ? he.value > he.mean : he.value < he.mean : p === Fe.Down ? he.value < he.mean : he.value > he.mean;
    let be = null;
    for (let he = Z; he < i.length; he++) {
      const R = i[he];
      if (!(W ? !!R.specialCauseTrendUp : !!R.specialCauseTrendDown)) break;
      if (ie(R)) {
        be = he;
        break;
      }
    }
    let Ce = !1;
    if (be != null) {
      let he = 0;
      for (let R = be; R < i.length; R++) {
        const U = i[R];
        if (!(W ? !!U.specialCauseTrendUp : !!U.specialCauseTrendDown)) break;
        ie(U) && he++;
      }
      Ce = he >= 2;
    }
    return { direction: ne, detectedAt: Z, firstFavourableCrossAt: be, persistedAcrossMean: Ce };
  }, [i, p]), O = Y.useMemo(() => {
    if (!i || !i.length) return null;
    const C = (B) => {
      const W = [];
      let ne = null, Z = null;
      for (let ie = 0; ie < i.length; ie++) {
        const be = i[ie], Ce = typeof be[B] == "number" ? be[B] : null;
        if (Ce == null || isNaN(Ce)) {
          ne !== null && Z != null && (W.push({
            x1: H[ne],
            x2: H[ie - 1],
            y: L(Z)
          }), ne = null, Z = null);
          continue;
        }
        if (ne === null) {
          ne = ie, Z = Ce;
          continue;
        }
        Z != null && Math.abs(Ce - Z) <= 1e-9 || (Z != null && W.push({
          x1: H[ne],
          x2: H[ie - 1],
          y: L(Z)
        }), ne = ie, Z = Ce);
      }
      return ne !== null && Z != null && W.push({
        x1: H[ne],
        x2: H[i.length - 1],
        y: L(Z)
      }), W;
    };
    return {
      mean: C("mean"),
      ucl: C("upperProcessLimit"),
      lcl: C("lowerProcessLimit"),
      onePos: C("upperOneSigma"),
      oneNeg: C("lowerOneSigma"),
      twoPos: C("upperTwoSigma"),
      twoNeg: C("lowerTwoSigma")
    };
  }, [i, H, L]), pe = Y.useMemo(() => E.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs("linearGradient", { id: `${N.current}-grad-common`, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.28 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.12 }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", stopOpacity: 0.045 })
    ] }),
    E.map((C, B) => {
      const W = `${N.current}-grad-${B}`;
      let ne, Z = 0.28, ie = 0.12, be = 0.045;
      switch (C.category) {
        case at.Concern:
          ne = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", Z = 0.28, ie = 0.12, be = 0.045;
          break;
        case at.Improvement:
          ne = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", Z = 0.26, ie = 0.11, be = 0.045;
          break;
        case at.NoJudgement:
          ne = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", Z = 0.26, ie = 0.11, be = 0.045;
          break;
        default:
          ne = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: W, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: ne, stopOpacity: Z }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: ne, stopOpacity: ie }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: ne, stopOpacity: be })
      ] }, W);
    })
  ] }) : null, [E]), Se = Y.useMemo(() => {
    if (!E.length) return null;
    const [C] = L.domain(), B = L(C), W = E.map((ne, Z) => {
      const { start: ie, end: be, category: Ce } = ne;
      if (ie < 0 || be >= H.length || ie > be)
        return null;
      const he = H[ie], R = H[be];
      let U = "";
      if (Ce === at.Common) {
        const G = Z > 0 ? E[Z - 1] : null, J = Z < E.length - 1 ? E[Z + 1] : null, F = G ? H[G.end] : 0, X = G ? L(S[G.end].y) : B, Q = J ? H[J.start] : z, te = J ? L(S[J.start].y) : B;
        U = `M ${F} ${B}`, U += ` L ${F} ${X}`;
        for (let q = ie; q <= be; q++)
          U += ` L ${H[q]} ${L(S[q].y)}`;
        U += ` L ${Q} ${te}`, U += ` L ${Q} ${B} Z`;
      } else {
        const G = Z > 0 ? E[Z - 1] : null, J = Z < E.length - 1 ? E[Z + 1] : null, F = G && G.category !== at.Common, X = J && J.category !== at.Common, Q = L(S[ie].y), te = L(S[be].y);
        let q = he, se = R;
        if (F) {
          const me = H[G.end], ve = L(S[G.end].y), oe = S[ie].y - S[G.end].y;
          f === "slope" && oe > 0 ? (U = `M ${me} ${ve} L ${he} ${Q}`, q = me) : (U = `M ${he} ${B} L ${he} ${Q}`, q = he);
        } else
          U = `M ${he} ${B} L ${he} ${Q}`;
        for (let me = ie + 1; me <= be; me++)
          U += ` L ${H[me]} ${L(S[me].y)}`;
        if (U += ` L ${R} ${te}`, X) {
          const me = H[J.start], ve = L(S[J.start].y), oe = S[J.start].y - S[be].y;
          (f === "slope" && oe <= 0 || f === "extend") && (U += ` L ${me} ${ve}`, se = me);
        }
        if (U += ` L ${se} ${B}`, U += ` L ${q} ${B} Z`, f === "neutral" && F) {
          const me = H[G.end], ve = L(S[G.end].y), oe = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${me} ${B} L ${me} ${ve} L ${he} ${Q} L ${he} ${B} Z`,
              fill: `url(#${N.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${Z}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            oe,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: U,
                fill: `url(#${N.current}-grad-${Z})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${Z}`
            )
          ] }, `seq-group-${Z}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: U,
          fill: `url(#${N.current}-grad-${Z})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${Z}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: W });
  }, [E, H, z, L, S, f]), ce = Y.useMemo(() => {
    if (!c?.timeframe && S.length >= 2) {
      const C = S.map((be) => be.x instanceof Date ? be.x : new Date(be.x)), B = new Date(Math.min(...C.map((be) => be.getTime()))), W = new Date(Math.max(...C.map((be) => be.getTime()))), ne = Math.round((W.getTime() - B.getTime()) / 864e5) || 0;
      if (ne < 14)
        return `The chart shows a timeframe of ${ne + 1} days`;
      const Z = Math.round(ne / 7);
      return Z < 20 ? `The chart shows a timeframe of ${Z} weeks` : `The chart shows a timeframe of ${(W.getFullYear() - B.getFullYear()) * 12 + (W.getMonth() - B.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, S]), de = (C) => {
    const B = C % 10, W = C % 100;
    return B === 1 && W !== 11 ? `${C}st` : B === 2 && W !== 12 ? `${C}nd` : B === 3 && W !== 13 ? `${C}rd` : `${C}th`;
  }, K = (C) => `${de(C.getDate())} ${C.toLocaleString("en-GB", { month: "long" })}, ${C.getFullYear()}`, ee = Y.useCallback(
    ({
      index: C,
      x: B,
      y: W
    }) => {
      const ne = i?.[C], Z = B instanceof Date ? B : new Date(B), ie = K(Z), be = c?.measureUnit ? ` ${c.measureUnit}` : "", Ce = c?.measureName ? ` ${c.measureName}` : "";
      if (!ne)
        return `General summary is: ${ce ? ce + ". " : ""}Point ${C + 1}, ${ie}, ${W}${be}${Ce}`;
      const he = ha(ne.variationIcon) || "Variation", R = pa(ne), U = R.length ? ` Rules: ${[...new Set(R.map((J) => Ln[J].narration))].join("; ")}.` : " No special cause rules.", G = [];
      return c?.measureName && G.push(`Measure: ${c.measureName}.`), c?.datasetContext && G.push(`${c.datasetContext}.`), c?.organisation && G.push(`Organisation: ${c.organisation}.`), c?.additionalNote && G.push(c.additionalNote), [
        "General summary is:",
        ...G,
        `Point ${C + 1} recorded on `,
        ie + ",",
        `with a value of ${W} ${be}${Ce}`,
        he + ".",
        U
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, ce]
  ), ue = Y.useCallback(
    (C, B) => i?.[C] ? ee({
      index: C,
      seriesId: "process",
      x: B.x instanceof Date ? B.x : new Date(B.x),
      y: B.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, ee]
  );
  return /* @__PURE__ */ r.jsx(sm, { children: /* @__PURE__ */ r.jsxs(
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
            width: T.xScale.range()[1] + 56 + 16,
            height: T.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(ti, { type: "x" }),
              /* @__PURE__ */ r.jsx(ti, { type: "y" }),
              /* @__PURE__ */ r.jsx(kh, { axis: "y" }),
              pe,
              Se,
              v.map((C, B) => {
                const W = S[C];
                if (!W) return null;
                const ne = b(W.x instanceof Date ? W.x : new Date(W.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: ne,
                    x2: ne,
                    y1: 0,
                    y2: L.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${B}`
                );
              }),
              O?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                O.mean.map((C, B) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__cl", x1: C.x1, x2: C.x2, y1: C.y, y2: C.y }, `mean-${B}`)),
                O.mean.map((C, B) => {
                  if (B === O.mean.length - 1) return null;
                  const W = O.mean[B + 1];
                  if (!W || C.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - C.x2 || 0) * 0.5, ie = `M ${C.x2},${C.y} C ${C.x2 + Z},${C.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__cl fdp-spc__cl-join", d: ie, fill: "none" }, `mean-join-${B}`);
                })
              ] }) : null,
              w != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ r.jsx(r.Fragment, {}),
              O?.ucl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--ucl", children: [
                O.ucl.map((C, B) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--ucl", x1: C.x1, x2: C.x2, y1: C.y, y2: C.y, strokeWidth: 2 }, `ucl-${B}`)),
                O.ucl.map((C, B) => {
                  if (B === O.ucl.length - 1) return null;
                  const W = O.ucl[B + 1];
                  if (!W || C.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - C.x2 || 0) * 0.5, ie = `M ${C.x2},${C.y} C ${C.x2 + Z},${C.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join", d: ie, fill: "none", strokeWidth: 2 }, `ucl-join-${B}`);
                })
              ] }) : null,
              O?.lcl.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__limit-group fdp-spc__limit-group--lcl", children: [
                O.lcl.map((C, B) => /* @__PURE__ */ r.jsx("line", { className: "fdp-spc__limit fdp-spc__limit--lcl", x1: C.x1, x2: C.x2, y1: C.y, y2: C.y, strokeWidth: 2 }, `lcl-${B}`)),
                O.lcl.map((C, B) => {
                  if (B === O.lcl.length - 1) return null;
                  const W = O.lcl[B + 1];
                  if (!W || C.y === W.y) return null;
                  const Z = Math.max(4, W.x1 - C.x2 || 0) * 0.5, ie = `M ${C.x2},${C.y} C ${C.x2 + Z},${C.y} ${W.x1 - Z},${W.y} ${W.x1},${W.y}`;
                  return /* @__PURE__ */ r.jsx("path", { className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join", d: ie, fill: "none", strokeWidth: 2 }, `lcl-join-${B}`);
                })
              ] }) : null,
              w != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: b.range()[1],
                    y1: L(w),
                    y2: L(w),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: b.range()[0] - 7,
                    y: L(w) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      w,
                      " ",
                      g || c?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              o && O && O.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                O.onePos.map((C, B) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${B}`
                )),
                O.oneNeg.map((C, B) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${B}`
                )),
                O.twoPos.map((C, B) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${B}`
                )),
                O.twoNeg.map((C, B) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: C.x1,
                    x2: C.x2,
                    y1: C.y,
                    y2: C.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${B}`
                ))
              ] }),
              ae && (I || _ || y) && (() => {
                const C = ae.detectedAt, B = ae.firstFavourableCrossAt, W = S[C] ? b(S[C].x instanceof Date ? S[C].x : new Date(S[C].x)) : null, ne = S[C] ? L(S[C].y) : null, Z = B != null && S[B] ? b(S[B].x instanceof Date ? S[B].x : new Date(S[B].x)) : null, ie = B != null && S[B] ? L(S[B].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  y && W != null && ne != null && Z != null && ie != null && /* @__PURE__ */ r.jsx("line", { x1: W, y1: ne, x2: Z, y2: ie, stroke: "#888", strokeDasharray: "4 4", strokeWidth: 2, children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" }) }),
                  I && W != null && ne != null && /* @__PURE__ */ r.jsx("circle", { cx: W, cy: ne, r: 6, fill: "white", stroke: "#555", strokeWidth: 2, children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" }) }),
                  _ && Z != null && ie != null && /* @__PURE__ */ r.jsx("circle", { cx: Z, cy: ie, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                om,
                {
                  series: e[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (C) => C.x instanceof Date ? C.x : new Date(C.x),
                  smooth: !1,
                  strokeWidth: h
                }
              ),
              t && S.map((C, B) => {
                const W = b(C.x instanceof Date ? C.x : new Date(C.x)), ne = L(C.y), Z = A.has(B), ie = re?.[B], be = V[B], Ce = be === at.Improvement, he = be === at.Concern, R = be === at.NoJudgement, U = [
                  "fdp-spc__point",
                  Z && s ? "fdp-spc__point--ooc" : null,
                  l && he ? "fdp-spc__point--sc-concern" : null,
                  l && Ce ? "fdp-spc__point--sc-improvement" : null,
                  // Neutral special-cause (no-judgement) from category, when enabled
                  l && x && R ? "fdp-spc__point--sc-no-judgement" : null,
                  ie?.assurance === et.Pass ? "fdp-spc__point--assurance-pass" : null,
                  ie?.assurance === et.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), G = $?.focused?.index === B;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: W,
                    cy: ne,
                    r: 5,
                    className: U,
                    "data-variation": ie?.variation,
                    "data-assurance": ie?.assurance,
                    "aria-label": m,
                    ...G ? { "aria-describedby": `spc-tooltip-${B}` } : {}
                  },
                  B
                );
              }),
              u && l && re && S.map((C, B) => {
                const W = re[B];
                if (!W || !(W.concern || W.improvement)) return null;
                const ne = b(C.x instanceof Date ? C.x : new Date(C.x)), Z = L(C.y);
                let ie = Z - 10;
                const be = 12, Ce = L.range()[0] - 4;
                ie < be && (ie = Math.min(Z + 16, Ce));
                const he = b.range()[1], R = Math.min(Math.max(ne, 0), he - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: R,
                    y: ie,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${W.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: W.concern ? "!" : "★"
                  },
                  `icon-${B}`
                );
              }),
              k && /* @__PURE__ */ r.jsx(
                sg,
                {
                  width: b.range()[1],
                  height: L.range()[0]
                }
              ),
              !M && /* @__PURE__ */ r.jsx(
                Ul,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: ue,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (C) => K(C),
                  enableNeutralNoJudgement: x,
                  showTrendGatingExplanation: D
                }
              )
            ] })
          }
        ),
        M && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          Um,
          {
            engineRows: i,
            measureName: c?.measureName,
            measureUnit: g || c?.measureUnit,
            onSignalFocus: P
          }
        ) }),
        n && /* @__PURE__ */ r.jsx(
          im,
          {
            format: (C) => ee({ ...C, x: C.x instanceof Date ? C.x : new Date(C.x) })
          }
        )
      ]
    }
  ) });
}, sg = ({
  width: e,
  height: t
}) => {
  const n = Jt();
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
}, og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: nn,
  Direction: Ie,
  MetricPolarity: Ze,
  SPCAssuranceIcon: ba,
  SPCVariationIcon: xa,
  VariationJudgement: mt,
  VariationState: Ne,
  getVariationColour: qs,
  getVariationTrend: ga
}, Symbol.toStringTag, { value: "Module" })), Av = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: et,
  AssuranceResult: nn,
  BaselineSuggestionReason: vt,
  ChartType: Dt,
  Direction: Ie,
  Icons: og,
  ImprovementDirection: Fe,
  MetricPolarity: Ze,
  PARITY_V26: Gl,
  RULE_METADATA: Dl,
  SPCAssuranceIcon: ba,
  SPCChart: rg,
  SPCTooltipOverlay: Ul,
  SPCVariationIcon: xa,
  SpcEmbeddedIconVariant: dn,
  SpcVisualCategory: lt,
  SpcWarningCategory: El,
  SpcWarningCode: Bl,
  SpcWarningSeverity: tn,
  VARIATION_COLOR_TOKENS: kt,
  VariationIcon: Le,
  VariationJudgement: mt,
  VariationState: Ne,
  buildSpc: Xs,
  buildSpcV26a: Js,
  buildSpcV26aWithVisuals: Zs,
  computeSpcVisualCategories: Ks,
  extractRuleIds: pa,
  getVariationColorHex: pm,
  getVariationColorToken: Ml,
  getVariationColour: qs,
  getVariationTrend: ga,
  normaliseSpcSettings: Hl,
  normaliseSpcSettingsV2: zl,
  ruleGlossary: Ln,
  variationLabel: ha,
  withParityV26: eg
}, Symbol.toStringTag, { value: "Module" })), ig = "150ms", lg = "300ms", cg = "500ms", ug = "cubic-bezier(0.4, 0, 1, 1)", dg = "cubic-bezier(0, 0, 0.2, 1)", fg = "cubic-bezier(0.4, 0, 0.2, 1)", pg = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", hg = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", mg = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", gg = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", xg = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", bg = "1px", vg = "2px", yg = "4px", wg = "4px", _g = "4px", Sg = "2px", kg = "1px", Cg = "0px", Ng = "4px", jg = "8px", Dg = "12px", Yl = "#d8dde0", ql = "#4c6272", Xl = "#d8dde0", Kl = "#aeb7bd", Jl = "#d5281b", Zl = "#005eb8", Ql = "#ffffff", ec = "#212b32", tc = "#007f3b", nc = "#330072", rc = "#7c2855", ac = "#d5281b", sc = "#ffeb3b", oc = "#fff9c4", ic = "#ffb81c", lc = "#ed8b00", cc = "#00a499", uc = "#ae2573", dc = "#4c6272", fc = "#768692", pc = "#aeb7bd", hc = "#d8dde0", mc = "#f0f4f5", Tg = "#212b32", $g = "#4c6272", Ig = "#ffffff", Mg = "#212b32", Lg = "#005eb8", Pg = "#7c2855", Fg = "#003087", Ag = "#330072", Rg = "#ffeb3b", Eg = "#212b32", Bg = "#d8dde0", Hg = "#ffffff33", Og = "#d5281b", Ug = "#4c6272", Wg = "#ffffff", zg = "#007f3b", Vg = "#ffffff", Gg = "#006530", Yg = "#004021", qg = "#004021", Xg = "#00000000", Kg = "#ffffff", Jg = "#005eb8", Zg = "#005eb8", Qg = "#d9e5f2", e0 = "#c7daf0", t0 = "#005eb8", n0 = "#ffffff", r0 = "#212b32", a0 = "#d9dde0", s0 = "#b3bcc2", o0 = "#b3bcc2", i0 = "#d5281b", l0 = "#aa2016", c0 = "#6a140e", u0 = "#6a140e", d0 = "#005eb8", f0 = "#004b93", p0 = "#002f5c", h0 = "#002f5c", m0 = "8px", g0 = "16px", x0 = "12px", b0 = "16px", v0 = "4px", y0 = "40px", w0 = "4px", _0 = "40px", S0 = "12px", k0 = "16px", C0 = "32px", N0 = "16px", j0 = "20px", D0 = "28px", T0 = "9px", $0 = "2px", I0 = "16px", M0 = "24px", L0 = "8px", P0 = "24px", F0 = "16px", A0 = "4px", R0 = "4px", E0 = "4px", B0 = "8px", H0 = "4px", O0 = "16px", U0 = "#007f3b", W0 = "#006530", z0 = "#004021", V0 = "#d8dde0", G0 = "#ffffff", Y0 = "#768692", q0 = "#00000000", X0 = "#ffeb3b", K0 = "#00000000", J0 = "#ffffff", Z0 = "#d9e5f2", Q0 = "#c7daf0", ex = "#005eb8", tx = "#005eb8", gc = "8px", xc = "16px", bc = "12px", vc = "16px", nx = "2px", rx = "4px", ax = "4px", sx = "600", ox = "#ffffff", ix = "#d8dde0", lx = "#aeb7bd", cx = "#f0f4f5", ux = "#212b32", dx = "#212b32", fx = "#005eb8", yc = "16px", wc = "32px", _c = "16px", px = "1px", hx = "4px", mx = "none", gx = "0 2px 4px rgba(0, 0, 0, 0.1)", xx = "#ffffff", bx = "#ffffff", vx = "#d8dde0", yx = "#ffffff", wx = "#4c6272", _x = "#ffeb3b", Sx = "#d5281b", kx = "#aeb7bd", Cx = "#212b32", Nx = "#4c6272", jx = "#768692", Dx = "#212b32", Tx = "#ffffff", $x = "600", Ix = "#d5281b", Mx = "600", Lx = "#4c6272", Sc = "4px", kc = "40px", Cc = "40px", Nc = "12px", Px = "2px", Fx = "4px", Ax = "0px", Rx = "16px", Ex = "18px", Bx = "24px", Hx = "32px", Ox = "34px", Ux = "32px", Wx = "40px", zx = "48px", Vx = "5.4ex", Gx = "7.2ex", Yx = "9ex", qx = "10.8ex", Xx = "20ex", Kx = "38ex", Jx = "56ex", Zx = "44px", Qx = "40px", eb = "1020px", tb = "100%", nb = "50%", rb = "33.333%", ab = "25%", sb = "20%", ob = "320px", ib = "641px", lb = "1025px", cb = "1280px", ub = "960px", db = "32px", fb = "16px", pb = "#d5281b", hb = "#d5281b", mb = "#ffffff", gb = "#007f3b", xb = "#007f3b", bb = "#ffffff", vb = "#ffeb3b", yb = "#ffeb3b", wb = "#212b32", _b = "#005eb8", Sb = "#005eb8", kb = "#ffffff", Cb = "#d8dde0", Nb = "#aeb7bd", jb = "#768692", Db = "0 4px 0 #004021", Tb = "0 4px 0 #005eb8", $b = "0 4px 0 #6a140e", Ib = "0 4px 0 #ffeb3b", Mb = "none", Lb = "0 2px 4px rgba(0, 0, 0, 0.1)", Pb = "4px", Fb = "0px", Ab = "solid", Rb = "0 0 0 3px #ffeb3b", Eb = "0 0 0 3px #ffeb3b", Bb = "none", Hb = "0 1px 3px rgba(0, 0, 0, 0.12)", Ob = "0 2px 6px rgba(0, 0, 0, 0.16)", Ub = "0 4px 12px rgba(0, 0, 0, 0.20)", jc = "0", Dc = "4px", Tc = "8px", $c = "16px", Ic = "24px", Mc = "32px", Lc = "40px", Pc = "48px", Fc = "56px", Ac = "64px", us = "0", ds = "0", fs = "4px", ps = "4px", hs = "8px", ms = "8px", gs = "8px", xs = "16px", bs = "16px", vs = "24px", ys = "24px", ws = "32px", _s = "32px", Ss = "40px", ks = "40px", Cs = "48px", Ns = "48px", js = "56px", Ds = "56px", Ts = "64px", Fr = "Frutiger W01", Ar = "Arial, Helvetica, sans-serif", Rr = "sans-serif", Er = "400", Br = "600", Hr = "400", Or = "12px", Ur = "14px", Wr = "12pt", zr = "14px", Vr = "16px", Gr = "12pt", Yr = "16px", qr = "19px", Xr = "13pt", Kr = "19px", Jr = "22px", Zr = "15pt", Qr = "22px", ea = "26px", ta = "17pt", na = "27px", ra = "36px", aa = "20pt", sa = "33px", oa = "48px", ia = "24pt", $s = "16px", Is = "24px", Ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, At = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Rt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Et = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Bt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Wb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: ig,
  AnimationDurationNormal: lg,
  AnimationDurationSlow: cg,
  AnimationEasingBounce: pg,
  AnimationEasingEaseIn: ug,
  AnimationEasingEaseInOut: fg,
  AnimationEasingEaseOut: dg,
  BorderColorCard: Xl,
  BorderColorCardHover: Kl,
  BorderColorDefault: Yl,
  BorderColorError: Jl,
  BorderColorForm: ql,
  BorderRadiusLarge: Dg,
  BorderRadiusMedium: jg,
  BorderRadiusNone: Cg,
  BorderRadiusSmall: Ng,
  BorderWidthCardBottom: wg,
  BorderWidthDefault: bg,
  BorderWidthFormElement: vg,
  BorderWidthFormElementError: yg,
  BorderWidthPanel: _g,
  BorderWidthTableCell: kg,
  BorderWidthTableHeader: Sg,
  BreakpointDesktop: lb,
  BreakpointLargeDesktop: cb,
  BreakpointMobile: ob,
  BreakpointTablet: ib,
  ButtonBorderRadius: rx,
  ButtonBorderWidth: nx,
  ButtonPrimaryBackgroundActive: z0,
  ButtonPrimaryBackgroundDefault: U0,
  ButtonPrimaryBackgroundDisabled: V0,
  ButtonPrimaryBackgroundHover: W0,
  ButtonPrimaryBorderDefault: q0,
  ButtonPrimaryBorderFocus: X0,
  ButtonPrimaryTextDefault: G0,
  ButtonPrimaryTextDisabled: Y0,
  ButtonSecondaryBackgroundActive: Q0,
  ButtonSecondaryBackgroundDefault: K0,
  ButtonSecondaryBackgroundHover: Z0,
  ButtonSecondaryBackgroundSolid: J0,
  ButtonSecondaryBorderDefault: tx,
  ButtonSecondaryTextDefault: ex,
  ButtonShadowSize: ax,
  ButtonSpacingPaddingHorizontalDesktop: vc,
  ButtonSpacingPaddingHorizontalMobile: xc,
  ButtonSpacingPaddingVerticalDesktop: bc,
  ButtonSpacingPaddingVerticalMobile: gc,
  ButtonTypographyWeight: sx,
  CardBackgroundDefault: ox,
  CardBorderBottom: cx,
  CardBorderDefault: ix,
  CardBorderHover: lx,
  CardBorderWidthBottom: hx,
  CardBorderWidthDefault: px,
  CardShadowDefault: mx,
  CardShadowHover: gx,
  CardSpacingHeadingMargin: _c,
  CardSpacingPaddingDesktop: wc,
  CardSpacingPaddingMobile: yc,
  CardTextDescription: dx,
  CardTextHeading: ux,
  CardTextLink: fx,
  ColorBorderDefault: Bg,
  ColorBorderSecondary: Hg,
  ColorButtonLoginActive: p0,
  ColorButtonLoginBackground: d0,
  ColorButtonLoginHover: f0,
  ColorButtonLoginShadow: h0,
  ColorButtonPrimaryActive: Yg,
  ColorButtonPrimaryBackground: zg,
  ColorButtonPrimaryHover: Gg,
  ColorButtonPrimaryShadow: qg,
  ColorButtonPrimaryText: Vg,
  ColorButtonReverseActive: s0,
  ColorButtonReverseBackground: n0,
  ColorButtonReverseHover: a0,
  ColorButtonReverseShadow: o0,
  ColorButtonReverseText: r0,
  ColorButtonSecondaryActive: e0,
  ColorButtonSecondaryBackground: Xg,
  ColorButtonSecondaryBackgroundSolid: Kg,
  ColorButtonSecondaryBorder: Jg,
  ColorButtonSecondaryHover: Qg,
  ColorButtonSecondaryShadow: t0,
  ColorButtonSecondaryText: Zg,
  ColorButtonWarningActive: c0,
  ColorButtonWarningBackground: i0,
  ColorButtonWarningHover: l0,
  ColorButtonWarningShadow: u0,
  ColorError: Og,
  ColorFocusBackground: Rg,
  ColorFocusText: Eg,
  ColorFormBackground: Wg,
  ColorFormBorder: Ug,
  ColorGrey1: dc,
  ColorGrey2: fc,
  ColorGrey3: pc,
  ColorGrey4: hc,
  ColorGrey5: mc,
  ColorLinkActive: Fg,
  ColorLinkDefault: Lg,
  ColorLinkHover: Pg,
  ColorLinkVisited: Ag,
  ColorPrimaryBlack: ec,
  ColorPrimaryBlue: Zl,
  ColorPrimaryDarkPink: rc,
  ColorPrimaryGreen: tc,
  ColorPrimaryPurple: nc,
  ColorPrimaryRed: ac,
  ColorPrimaryWhite: Ql,
  ColorPrimaryYellow: sc,
  ColorSecondaryAquaGreen: cc,
  ColorSecondaryOrange: lc,
  ColorSecondaryPaleYellow: oc,
  ColorSecondaryPink: uc,
  ColorSecondaryWarmYellow: ic,
  ColorTextPrimary: Tg,
  ColorTextPrint: Mg,
  ColorTextReverse: Ig,
  ColorTextSecondary: $g,
  ComponentBlur: R0,
  ComponentBreadcrumbChevronMarginLeft: T0,
  ComponentBreadcrumbChevronMarginRight: $0,
  ComponentBreadcrumbPaddingTopDesktop: M0,
  ComponentBreadcrumbPaddingTopMobile: I0,
  ComponentButtonPaddingDesktopHorizontal: b0,
  ComponentButtonPaddingDesktopVertical: x0,
  ComponentButtonPaddingMobileHorizontal: g0,
  ComponentButtonPaddingMobileVertical: m0,
  ComponentButtonShadowSize: v0,
  ComponentCardHeadingMargin: N0,
  ComponentCardPaddingDesktop: C0,
  ComponentCardPaddingMobile: k0,
  ComponentDetails: B0,
  ComponentExpander: H0,
  ComponentFormCheckboxLabelPadding: S0,
  ComponentFormCheckboxSize: _0,
  ComponentFormInputMinHeight: y0,
  ComponentFormInputPadding: w0,
  ComponentLink: E0,
  ComponentPagination: O0,
  ComponentPanelPaddingDesktop: D0,
  ComponentPanelPaddingMobile: j0,
  ComponentSpread: A0,
  ComponentSummaryListCellPaddingHorizontal: P0,
  ComponentSummaryListCellPaddingVertical: L0,
  ComponentSummaryListRowMargin: F0,
  ElevationHigh: Ub,
  ElevationLow: Hb,
  ElevationMedium: Ob,
  ElevationNone: Bb,
  FocusOutlineOffset: Fb,
  FocusOutlineStyle: Ab,
  FocusOutlineWidth: Pb,
  FocusShadowButton: Eb,
  FocusShadowInput: Rb,
  FontFamilyBase: Fr,
  FontFamilyFallback: Ar,
  FontFamilyPrint: Rr,
  FontLineHeightBase: Is,
  FontSize14Mobile: Or,
  FontSize14Print: Wr,
  FontSize14Tablet: Ur,
  FontSize16Mobile: zr,
  FontSize16Print: Gr,
  FontSize16Tablet: Vr,
  FontSize19Mobile: Yr,
  FontSize19Print: Xr,
  FontSize19Tablet: qr,
  FontSize22Mobile: Kr,
  FontSize22Print: Zr,
  FontSize22Tablet: Jr,
  FontSize26Mobile: Qr,
  FontSize26Print: ta,
  FontSize26Tablet: ea,
  FontSize36Mobile: na,
  FontSize36Print: aa,
  FontSize36Tablet: ra,
  FontSize48Mobile: sa,
  FontSize48Print: ia,
  FontSize48Tablet: oa,
  FontSizeBase: $s,
  FontWeightBold: Br,
  FontWeightLight: Hr,
  FontWeightNormal: Er,
  FormBorderRadius: Ax,
  FormBorderWidthDefault: Px,
  FormBorderWidthError: Fx,
  FormErrorTextDefault: Ix,
  FormErrorTypographyWeight: Mx,
  FormHintTextDefault: Lx,
  FormInputBackgroundDefault: xx,
  FormInputBackgroundDisabled: vx,
  FormInputBackgroundError: yx,
  FormInputBackgroundFocus: bx,
  FormInputBorderDefault: wx,
  FormInputBorderDisabled: kx,
  FormInputBorderError: Sx,
  FormInputBorderFocus: _x,
  FormInputTextDefault: Cx,
  FormInputTextDisabled: jx,
  FormInputTextPlaceholder: Nx,
  FormLabelTextDefault: Dx,
  FormLabelTextRequired: Tx,
  FormLabelTypographyWeight: $x,
  FormSpacingCheckboxLabelPadding: Nc,
  FormSpacingCheckboxSize: Cc,
  FormSpacingInputMinHeight: kc,
  FormSpacingInputPadding: Sc,
  GridGutter: db,
  GridGutterHalf: fb,
  GridPageWidth: ub,
  HeadingsNhsukHeadingL: At,
  HeadingsNhsukHeadingM: Rt,
  HeadingsNhsukHeadingS: Et,
  HeadingsNhsukHeadingXl: Ft,
  HeadingsNhsukHeadingXs: Bt,
  LayoutColumnActions: sb,
  LayoutColumnFull: tb,
  LayoutColumnHalf: nb,
  LayoutColumnQuarter: ab,
  LayoutColumnThird: rb,
  LayoutContainerMaxWidth: eb,
  ParagraphsBody: Ht,
  ParagraphsBodyLarge: Ot,
  ParagraphsBodySmall: Ut,
  ParagraphsLedeText: Wt,
  ParagraphsLedeTextSmall: zt,
  ShadowButtonDefault: Db,
  ShadowButtonFocus: Ib,
  ShadowButtonSecondary: Tb,
  ShadowButtonWarning: $b,
  ShadowCardDefault: Mb,
  ShadowCardHover: Lb,
  SizeButtonMinHeightDesktop: Qx,
  SizeButtonMinHeightMobile: Zx,
  SizeFormControlLarge: zx,
  SizeFormControlMedium: Wx,
  SizeFormControlSmall: Ux,
  SizeFormInputWidth2xl: Kx,
  SizeFormInputWidth3xl: Jx,
  SizeFormInputWidthLg: qx,
  SizeFormInputWidthMd: Yx,
  SizeFormInputWidthSm: Gx,
  SizeFormInputWidthXl: Xx,
  SizeFormInputWidthXs: Vx,
  SizeIconExtraLarge: Hx,
  SizeIconLarge: Bx,
  SizeIconMedium: Ex,
  SizeIconNhsDefault: Ox,
  SizeIconSmall: Rx,
  Spacing0: jc,
  Spacing1: Dc,
  Spacing2: Tc,
  Spacing3: $c,
  Spacing4: Ic,
  Spacing5: Mc,
  Spacing6: Lc,
  Spacing7: Pc,
  Spacing8: Fc,
  Spacing9: Ac,
  SpacingResponsive0Mobile: us,
  SpacingResponsive0Tablet: ds,
  SpacingResponsive1Mobile: fs,
  SpacingResponsive1Tablet: ps,
  SpacingResponsive2Mobile: hs,
  SpacingResponsive2Tablet: ms,
  SpacingResponsive3Mobile: gs,
  SpacingResponsive3Tablet: xs,
  SpacingResponsive4Mobile: bs,
  SpacingResponsive4Tablet: vs,
  SpacingResponsive5Mobile: ys,
  SpacingResponsive5Tablet: ws,
  SpacingResponsive6Mobile: _s,
  SpacingResponsive6Tablet: Ss,
  SpacingResponsive7Mobile: ks,
  SpacingResponsive7Tablet: Cs,
  SpacingResponsive8Mobile: Ns,
  SpacingResponsive8Tablet: js,
  SpacingResponsive9Mobile: Ds,
  SpacingResponsive9Tablet: Ts,
  StateDisabledBackground: Cb,
  StateDisabledBorder: Nb,
  StateDisabledText: jb,
  StateErrorBackground: pb,
  StateErrorBorder: hb,
  StateErrorText: mb,
  StateInfoBackground: _b,
  StateInfoBorder: Sb,
  StateInfoText: kb,
  StateSuccessBackground: gb,
  StateSuccessBorder: xb,
  StateSuccessText: bb,
  StateWarningBackground: vb,
  StateWarningBorder: yb,
  StateWarningText: wb,
  TransitionButtonDefault: hg,
  TransitionButtonShadow: mg,
  TransitionCardHover: xg,
  TransitionInputFocus: gg
}, Symbol.toStringTag, { value: "Module" })), Rv = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Ev = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Ft.fontFamily,
      fontWeight: Ft.fontWeight,
      fontSize: Ft.fontSize.mobile,
      lineHeight: Ft.lineHeight,
      marginTop: Ft.marginTop,
      marginBottom: Ft.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Bv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: At.fontFamily,
      fontWeight: At.fontWeight,
      fontSize: At.fontSize.mobile,
      lineHeight: At.lineHeight,
      marginTop: At.marginTop,
      marginBottom: At.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Hv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: Rt.fontFamily,
      fontWeight: Rt.fontWeight,
      fontSize: Rt.fontSize.mobile,
      lineHeight: Rt.lineHeight,
      marginTop: Rt.marginTop,
      marginBottom: Rt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Ov = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Et.fontFamily,
      fontWeight: Et.fontWeight,
      fontSize: Et.fontSize.mobile,
      lineHeight: Et.lineHeight,
      marginTop: Et.marginTop,
      marginBottom: Et.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Uv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Bt.fontFamily,
      fontWeight: Bt.fontWeight,
      fontSize: Bt.fontSize.mobile,
      lineHeight: Bt.lineHeight,
      marginTop: Bt.marginTop,
      marginBottom: Bt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Wv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ht.fontFamily,
      fontWeight: Ht.fontWeight,
      fontSize: Ht.fontSize.mobile,
      lineHeight: Ht.lineHeight,
      marginTop: Ht.marginTop,
      marginBottom: Ht.marginBottom.mobile,
      ...n
    },
    children: e
  }
), zv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ot.fontFamily,
      fontWeight: Ot.fontWeight,
      fontSize: Ot.fontSize.mobile,
      lineHeight: Ot.lineHeight,
      marginTop: Ot.marginTop,
      marginBottom: Ot.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Vv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ut.fontFamily,
      fontWeight: Ut.fontWeight,
      fontSize: Ut.fontSize.mobile,
      lineHeight: Ut.lineHeight,
      marginTop: Ut.marginTop,
      marginBottom: Ut.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Gv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Wt.fontFamily,
      fontWeight: Wt.fontWeight,
      fontSize: Wt.fontSize.mobile,
      lineHeight: Wt.lineHeight,
      marginTop: Wt.marginTop,
      marginBottom: Wt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Yv = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: zt.fontFamily,
      fontWeight: zt.fontWeight,
      fontSize: zt.fontSize.mobile,
      lineHeight: zt.lineHeight,
      marginTop: zt.marginTop,
      marginBottom: zt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), qv = () => Me(() => Wb, []), Xv = () => Me(() => ({
  // Border colors
  BorderColorDefault: Yl,
  BorderColorForm: ql,
  BorderColorCard: Xl,
  BorderColorCardHover: Kl,
  BorderColorError: Jl,
  // Primary colors
  ColorPrimaryBlue: Zl,
  ColorPrimaryWhite: Ql,
  ColorPrimaryBlack: ec,
  ColorPrimaryGreen: tc,
  ColorPrimaryPurple: nc,
  ColorPrimaryDarkPink: rc,
  ColorPrimaryRed: ac,
  ColorPrimaryYellow: sc,
  // Secondary colors
  ColorSecondaryPaleYellow: oc,
  ColorSecondaryWarmYellow: ic,
  ColorSecondaryOrange: lc,
  ColorSecondaryAquaGreen: cc,
  ColorSecondaryPink: uc,
  // Grey scale
  ColorGrey1: dc,
  ColorGrey2: fc,
  ColorGrey3: pc,
  ColorGrey4: hc,
  ColorGrey5: mc
}), []), Kv = () => Me(() => ({
  Spacing0: jc,
  Spacing1: Dc,
  Spacing2: Tc,
  Spacing3: $c,
  Spacing4: Ic,
  Spacing5: Mc,
  Spacing6: Lc,
  Spacing7: Pc,
  Spacing8: Fc,
  Spacing9: Ac
}), []), Jv = () => Me(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Or,
    Size16: zr,
    Size19: Yr,
    Size22: Kr,
    Size26: Qr,
    Size36: na,
    Size48: sa
  },
  Tablet: {
    Size14: Ur,
    Size16: Vr,
    Size19: qr,
    Size22: Jr,
    Size26: ea,
    Size36: ra,
    Size48: oa
  },
  Print: {
    Size14: Wr,
    Size16: Gr,
    Size19: Xr,
    Size22: Zr,
    Size26: ta,
    Size36: aa,
    Size48: ia
  },
  Family: {
    Base: Fr,
    Fallback: Ar,
    Print: Rr
  },
  Weight: {
    Normal: Er,
    Bold: Br,
    Light: Hr
  },
  Base: {
    Size: $s,
    LineHeight: Is
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Fr,
  FontFamilyFallback: Ar,
  FontFamilyPrint: Rr,
  FontWeightNormal: Er,
  FontWeightBold: Br,
  FontWeightLight: Hr,
  FontSize14Mobile: Or,
  FontSize14Tablet: Ur,
  FontSize14Print: Wr,
  FontSize16Mobile: zr,
  FontSize16Tablet: Vr,
  FontSize16Print: Gr,
  FontSize19Mobile: Yr,
  FontSize19Tablet: qr,
  FontSize19Print: Xr,
  FontSize22Mobile: Kr,
  FontSize22Tablet: Jr,
  FontSize22Print: Zr,
  FontSize26Mobile: Qr,
  FontSize26Tablet: ea,
  FontSize26Print: ta,
  FontSize36Mobile: na,
  FontSize36Tablet: ra,
  FontSize36Print: aa,
  FontSize48Mobile: sa,
  FontSize48Tablet: oa,
  FontSize48Print: ia,
  FontSizeBase: $s,
  FontLineHeightBase: Is
}), []), Zv = () => Me(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: us,
    Size1: fs,
    Size2: hs,
    Size3: gs,
    Size4: bs,
    Size5: ys,
    Size6: _s,
    Size7: ks,
    Size8: Ns,
    Size9: Ds
  },
  Tablet: {
    Size0: ds,
    Size1: ps,
    Size2: ms,
    Size3: xs,
    Size4: vs,
    Size5: ws,
    Size6: Ss,
    Size7: Cs,
    Size8: js,
    Size9: Ts
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: us,
  SpacingResponsive0Tablet: ds,
  SpacingResponsive1Mobile: fs,
  SpacingResponsive1Tablet: ps,
  SpacingResponsive2Mobile: hs,
  SpacingResponsive2Tablet: ms,
  SpacingResponsive3Mobile: gs,
  SpacingResponsive3Tablet: xs,
  SpacingResponsive4Mobile: bs,
  SpacingResponsive4Tablet: vs,
  SpacingResponsive5Mobile: ys,
  SpacingResponsive5Tablet: ws,
  SpacingResponsive6Mobile: _s,
  SpacingResponsive6Tablet: Ss,
  SpacingResponsive7Mobile: ks,
  SpacingResponsive7Tablet: Cs,
  SpacingResponsive8Mobile: Ns,
  SpacingResponsive8Tablet: js,
  SpacingResponsive9Mobile: Ds,
  SpacingResponsive9Tablet: Ts
}), []), Qv = () => Me(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: gc,
  ButtonSpacingPaddingHorizontalMobile: xc,
  ButtonSpacingPaddingVerticalDesktop: bc,
  ButtonSpacingPaddingHorizontalDesktop: vc,
  // Card spacing	
  CardSpacingPaddingMobile: yc,
  CardSpacingPaddingDesktop: wc,
  CardSpacingHeadingMargin: _c,
  // Form spacing
  FormSpacingInputPadding: Sc,
  FormSpacingInputMinHeight: kc,
  FormSpacingCheckboxSize: Cc,
  FormSpacingCheckboxLabelPadding: Nc
}), []), ey = () => Me(() => ({
  xl: Ft,
  l: At,
  m: Rt,
  s: Et,
  xs: Bt
}), []), ty = () => Me(() => ({
  body: Ht,
  bodyLarge: Ot,
  bodySmall: Ut,
  ledeText: Wt,
  ledeTextSmall: zt
}), []), ny = () => Me(() => ({
  headings: {
    xl: Ft,
    l: At,
    m: Rt,
    s: Et,
    xs: Bt
  },
  paragraphs: {
    body: Ht,
    bodyLarge: Ot,
    bodySmall: Ut,
    ledeText: Wt,
    ledeTextSmall: zt
  },
  fonts: {
    family: {
      base: Fr,
      fallback: Ar,
      print: Rr
    },
    weight: {
      normal: Er,
      bold: Br,
      light: Hr
    },
    sizes: {
      mobile: {
        size14: Or,
        size16: zr,
        size19: Yr,
        size22: Kr,
        size26: Qr,
        size36: na,
        size48: sa
      },
      tablet: {
        size14: Ur,
        size16: Vr,
        size19: qr,
        size22: Jr,
        size26: ea,
        size36: ra,
        size48: oa
      },
      print: {
        size14: Wr,
        size16: Gr,
        size19: Xr,
        size22: Zr,
        size26: ta,
        size36: aa,
        size48: ia
      }
    }
  }
}), []);
function ry(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = Y.useState(t), s = Y.useCallback(() => o("three-column"), []), i = Y.useCallback(() => o((u) => u === "three-column" ? n : u), [n]), l = Y.useCallback(() => o((u) => u === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const Rc = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, gt = {
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
function ay(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Rc, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${gt.normal.eot}?#iefix") format("eot"),
       url("${t}${gt.normal.woff2}") format("woff2"),
       url("${t}${gt.normal.woff}") format("woff"),
       url("${t}${gt.normal.ttf}") format("truetype");
  src: url("${t}${gt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${gt.bold.eot}?#iefix") format("eot"),
       url("${t}${gt.bold.woff2}") format("woff2"),
       url("${t}${gt.bold.woff}") format("woff"),
       url("${t}${gt.bold.ttf}") format("truetype");
  src: url("${t}${gt.bold.eot}");
}`), a.join(`
`);
}
function sy(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Rc, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${gt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${gt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${gt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${gt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const oy = '"Frutiger W01", Arial, Helvetica, sans-serif', iy = "Arial, Helvetica, sans-serif";
async function ly() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  vi as Account,
  Yb as ActionLink,
  _v as AdaptiveDataGrid,
  ig as AnimationDurationFast,
  lg as AnimationDurationNormal,
  cg as AnimationDurationSlow,
  pg as AnimationEasingBounce,
  ug as AnimationEasingEaseIn,
  fg as AnimationEasingEaseInOut,
  dg as AnimationEasingEaseOut,
  tl as AppointmentCard,
  $v as AreaSeriesPrimitive,
  Cp as AriaDataGrid,
  ts as AriaTabsDataGrid,
  _v as AriaTabsDataGridAdaptive,
  ti as Axis,
  qa as BackLink,
  Mv as BandScalesProvider,
  Iv as BarSeriesPrimitive,
  Xl as BorderColorCard,
  Kl as BorderColorCardHover,
  Yl as BorderColorDefault,
  Jl as BorderColorError,
  ql as BorderColorForm,
  Dg as BorderRadiusLarge,
  jg as BorderRadiusMedium,
  Cg as BorderRadiusNone,
  Ng as BorderRadiusSmall,
  wg as BorderWidthCardBottom,
  bg as BorderWidthDefault,
  vg as BorderWidthFormElement,
  yg as BorderWidthFormElementError,
  _g as BorderWidthPanel,
  kg as BorderWidthTableCell,
  Sg as BorderWidthTableHeader,
  cp as Breadcrumb,
  wu as Breakpoint,
  lb as BreakpointDesktop,
  cb as BreakpointLargeDesktop,
  ob as BreakpointMobile,
  ib as BreakpointTablet,
  ft as Button,
  rx as ButtonBorderRadius,
  nx as ButtonBorderWidth,
  z0 as ButtonPrimaryBackgroundActive,
  U0 as ButtonPrimaryBackgroundDefault,
  V0 as ButtonPrimaryBackgroundDisabled,
  W0 as ButtonPrimaryBackgroundHover,
  q0 as ButtonPrimaryBorderDefault,
  X0 as ButtonPrimaryBorderFocus,
  G0 as ButtonPrimaryTextDefault,
  Y0 as ButtonPrimaryTextDisabled,
  Q0 as ButtonSecondaryBackgroundActive,
  K0 as ButtonSecondaryBackgroundDefault,
  Z0 as ButtonSecondaryBackgroundHover,
  J0 as ButtonSecondaryBackgroundSolid,
  tx as ButtonSecondaryBorderDefault,
  ex as ButtonSecondaryTextDefault,
  ax as ButtonShadowSize,
  wi as ButtonSize,
  vc as ButtonSpacingPaddingHorizontalDesktop,
  xc as ButtonSpacingPaddingHorizontalMobile,
  bc as ButtonSpacingPaddingVerticalDesktop,
  gc as ButtonSpacingPaddingVerticalMobile,
  sx as ButtonTypographyWeight,
  yi as ButtonVariant,
  Ki as Card,
  ox as CardBackgroundDefault,
  cx as CardBorderBottom,
  ix as CardBorderDefault,
  lx as CardBorderHover,
  hx as CardBorderWidthBottom,
  px as CardBorderWidthDefault,
  uv as CardGroup,
  dv as CardGroupItem,
  mx as CardShadowDefault,
  gx as CardShadowHover,
  _c as CardSpacingHeadingMargin,
  wc as CardSpacingPaddingDesktop,
  yc as CardSpacingPaddingMobile,
  dx as CardTextDescription,
  ux as CardTextHeading,
  fx as CardTextLink,
  fv as CareCard,
  qb as CharacterCount,
  Pv as ChartEnhancer,
  Lv as ChartNoScript,
  _h as ChartRoot,
  lu as Checkbox,
  fu as Checkboxes,
  Bg as ColorBorderDefault,
  Hg as ColorBorderSecondary,
  p0 as ColorButtonLoginActive,
  d0 as ColorButtonLoginBackground,
  f0 as ColorButtonLoginHover,
  h0 as ColorButtonLoginShadow,
  Yg as ColorButtonPrimaryActive,
  zg as ColorButtonPrimaryBackground,
  Gg as ColorButtonPrimaryHover,
  qg as ColorButtonPrimaryShadow,
  Vg as ColorButtonPrimaryText,
  s0 as ColorButtonReverseActive,
  n0 as ColorButtonReverseBackground,
  a0 as ColorButtonReverseHover,
  o0 as ColorButtonReverseShadow,
  r0 as ColorButtonReverseText,
  e0 as ColorButtonSecondaryActive,
  Xg as ColorButtonSecondaryBackground,
  Kg as ColorButtonSecondaryBackgroundSolid,
  Jg as ColorButtonSecondaryBorder,
  Qg as ColorButtonSecondaryHover,
  t0 as ColorButtonSecondaryShadow,
  Zg as ColorButtonSecondaryText,
  c0 as ColorButtonWarningActive,
  i0 as ColorButtonWarningBackground,
  l0 as ColorButtonWarningHover,
  u0 as ColorButtonWarningShadow,
  Og as ColorError,
  Rg as ColorFocusBackground,
  Eg as ColorFocusText,
  Wg as ColorFormBackground,
  Ug as ColorFormBorder,
  dc as ColorGrey1,
  fc as ColorGrey2,
  pc as ColorGrey3,
  hc as ColorGrey4,
  mc as ColorGrey5,
  Fg as ColorLinkActive,
  Lg as ColorLinkDefault,
  Pg as ColorLinkHover,
  Ag as ColorLinkVisited,
  ec as ColorPrimaryBlack,
  Zl as ColorPrimaryBlue,
  rc as ColorPrimaryDarkPink,
  tc as ColorPrimaryGreen,
  nc as ColorPrimaryPurple,
  ac as ColorPrimaryRed,
  Ql as ColorPrimaryWhite,
  sc as ColorPrimaryYellow,
  cc as ColorSecondaryAquaGreen,
  lc as ColorSecondaryOrange,
  oc as ColorSecondaryPaleYellow,
  uc as ColorSecondaryPink,
  ic as ColorSecondaryWarmYellow,
  Tg as ColorTextPrimary,
  Mg as ColorTextPrint,
  Ig as ColorTextReverse,
  $g as ColorTextSecondary,
  qn as Column,
  Su as ColumnAlign,
  R0 as ComponentBlur,
  T0 as ComponentBreadcrumbChevronMarginLeft,
  $0 as ComponentBreadcrumbChevronMarginRight,
  M0 as ComponentBreadcrumbPaddingTopDesktop,
  I0 as ComponentBreadcrumbPaddingTopMobile,
  b0 as ComponentButtonPaddingDesktopHorizontal,
  x0 as ComponentButtonPaddingDesktopVertical,
  g0 as ComponentButtonPaddingMobileHorizontal,
  m0 as ComponentButtonPaddingMobileVertical,
  v0 as ComponentButtonShadowSize,
  N0 as ComponentCardHeadingMargin,
  C0 as ComponentCardPaddingDesktop,
  k0 as ComponentCardPaddingMobile,
  B0 as ComponentDetails,
  H0 as ComponentExpander,
  S0 as ComponentFormCheckboxLabelPadding,
  _0 as ComponentFormCheckboxSize,
  y0 as ComponentFormInputMinHeight,
  w0 as ComponentFormInputPadding,
  E0 as ComponentLink,
  O0 as ComponentPagination,
  D0 as ComponentPanelPaddingDesktop,
  j0 as ComponentPanelPaddingMobile,
  A0 as ComponentSpread,
  P0 as ComponentSummaryListCellPaddingHorizontal,
  L0 as ComponentSummaryListCellPaddingVertical,
  F0 as ComponentSummaryListRowMargin,
  Ci as Container,
  cv as ContentsList,
  Rc as DEFAULT_FONT_CONFIG,
  vv as DashboardSummaryGrid,
  rv as DateInput,
  gp as Details,
  xp as DoDontList,
  Ub as ElevationHigh,
  Hb as ElevationLow,
  Ob as ElevationMedium,
  Bb as ElevationNone,
  io as ErrorMessage,
  nv as ErrorSummary,
  bp as Expander,
  gt as FRUTIGER_FONT_FILES,
  Ps as Fieldset,
  _u as Float,
  Fb as FocusOutlineOffset,
  Ab as FocusOutlineStyle,
  Pb as FocusOutlineWidth,
  Eb as FocusShadowButton,
  Rb as FocusShadowInput,
  Fr as FontFamilyBase,
  Ar as FontFamilyFallback,
  Rr as FontFamilyPrint,
  Is as FontLineHeightBase,
  Or as FontSize14Mobile,
  Wr as FontSize14Print,
  Ur as FontSize14Tablet,
  zr as FontSize16Mobile,
  Gr as FontSize16Print,
  Vr as FontSize16Tablet,
  Yr as FontSize19Mobile,
  Xr as FontSize19Print,
  qr as FontSize19Tablet,
  Kr as FontSize22Mobile,
  Zr as FontSize22Print,
  Jr as FontSize22Tablet,
  Qr as FontSize26Mobile,
  ta as FontSize26Print,
  ea as FontSize26Tablet,
  na as FontSize36Mobile,
  aa as FontSize36Print,
  ra as FontSize36Tablet,
  sa as FontSize48Mobile,
  ia as FontSize48Print,
  oa as FontSize48Tablet,
  $s as FontSizeBase,
  Br as FontWeightBold,
  Hr as FontWeightLight,
  Er as FontWeightNormal,
  $i as Footer,
  Ax as FormBorderRadius,
  Px as FormBorderWidthDefault,
  Fx as FormBorderWidthError,
  Ix as FormErrorTextDefault,
  Mx as FormErrorTypographyWeight,
  Lx as FormHintTextDefault,
  xx as FormInputBackgroundDefault,
  vx as FormInputBackgroundDisabled,
  yx as FormInputBackgroundError,
  bx as FormInputBackgroundFocus,
  wx as FormInputBorderDefault,
  kx as FormInputBorderDisabled,
  Sx as FormInputBorderError,
  _x as FormInputBorderFocus,
  Cx as FormInputTextDefault,
  jx as FormInputTextDisabled,
  Nx as FormInputTextPlaceholder,
  Dx as FormLabelTextDefault,
  Tx as FormLabelTextRequired,
  $x as FormLabelTypographyWeight,
  Nc as FormSpacingCheckboxLabelPadding,
  Cc as FormSpacingCheckboxSize,
  kc as FormSpacingInputMinHeight,
  Sc as FormSpacingInputPadding,
  iv as GanttChart,
  Xa as Grid,
  db as GridGutter,
  fb as GridGutterHalf,
  kh as GridLines,
  ub as GridPageWidth,
  pn as GridWidth,
  Ti as Header,
  ov as HeaderSSR,
  Pu as HeaderSearch,
  Ti as HeaderStatic,
  Yt as Heading,
  At as HeadingsNhsukHeadingL,
  Rt as HeadingsNhsukHeadingM,
  Et as HeadingsNhsukHeadingS,
  Ft as HeadingsNhsukHeadingXl,
  Bt as HeadingsNhsukHeadingXs,
  Au as Hero,
  Si as Hint,
  xv as Images,
  Ms as Input,
  pv as InsetText,
  Ls as Label,
  sb as LayoutColumnActions,
  tb as LayoutColumnFull,
  nb as LayoutColumnHalf,
  ab as LayoutColumnQuarter,
  rb as LayoutColumnThird,
  eb as LayoutContainerMaxWidth,
  Tv as Legend,
  Sh as LineScalesProvider,
  om as LineSeriesPrimitive,
  Nu as List,
  Ni as MainWrapper,
  nl as MedicationCard,
  cm as MetricCard,
  Wv as NHSBodyText,
  zv as NHSBodyTextLarge,
  Vv as NHSBodyTextSmall,
  Ev as NHSHeading1,
  Bv as NHSHeading2,
  Hv as NHSHeading3,
  Ov as NHSHeading4,
  Uv as NHSHeading5,
  Gv as NHSLedeText,
  Yv as NHSLedeTextSmall,
  sv as NHSThemeProvider,
  iy as NHS_FALLBACK_FONT_STACK,
  oy as NHS_FONT_STACK,
  ph as NavigationSplitView,
  kv as PageTemplate,
  lv as Pagination,
  up as Panel,
  Ht as ParagraphsBody,
  Ot as ParagraphsBodyLarge,
  Ut as ParagraphsBodySmall,
  Wt as ParagraphsLedeText,
  zt as ParagraphsLedeTextSmall,
  el as PatientCard,
  gh as ProductRoadmap,
  Xb as Radios,
  Kb as RadiosServer,
  _v as ResponsiveDataGrid,
  Sv as ResponsiveDataGridDemo,
  hn as Row,
  Av as SPC,
  rg as SPCChart,
  Fv as SPCMetricCard,
  br as Select,
  xu as SelectOption,
  Db as ShadowButtonDefault,
  Ib as ShadowButtonFocus,
  Tb as ShadowButtonSecondary,
  $b as ShadowButtonWarning,
  Mb as ShadowCardDefault,
  Lb as ShadowCardHover,
  Qx as SizeButtonMinHeightDesktop,
  Zx as SizeButtonMinHeightMobile,
  zx as SizeFormControlLarge,
  Wx as SizeFormControlMedium,
  Ux as SizeFormControlSmall,
  Kx as SizeFormInputWidth2xl,
  Jx as SizeFormInputWidth3xl,
  qx as SizeFormInputWidthLg,
  Yx as SizeFormInputWidthMd,
  Gx as SizeFormInputWidthSm,
  Xx as SizeFormInputWidthXl,
  Vx as SizeFormInputWidthXs,
  Hx as SizeIconExtraLarge,
  Bx as SizeIconLarge,
  Ex as SizeIconMedium,
  Ox as SizeIconNhsDefault,
  Rx as SizeIconSmall,
  Xi as SkipLink,
  bv as SlotMatrix,
  yv as SortStatusControl,
  jc as Spacing0,
  Dc as Spacing1,
  Tc as Spacing2,
  $c as Spacing3,
  Ic as Spacing4,
  Mc as Spacing5,
  Lc as Spacing6,
  Pc as Spacing7,
  Fc as Spacing8,
  Ac as Spacing9,
  us as SpacingResponsive0Mobile,
  ds as SpacingResponsive0Tablet,
  fs as SpacingResponsive1Mobile,
  ps as SpacingResponsive1Tablet,
  hs as SpacingResponsive2Mobile,
  ms as SpacingResponsive2Tablet,
  gs as SpacingResponsive3Mobile,
  xs as SpacingResponsive3Tablet,
  bs as SpacingResponsive4Mobile,
  vs as SpacingResponsive4Tablet,
  ys as SpacingResponsive5Mobile,
  ws as SpacingResponsive5Tablet,
  _s as SpacingResponsive6Mobile,
  Ss as SpacingResponsive6Tablet,
  ks as SpacingResponsive7Mobile,
  Cs as SpacingResponsive7Tablet,
  Ns as SpacingResponsive8Mobile,
  js as SpacingResponsive8Tablet,
  Ds as SpacingResponsive9Mobile,
  Ts as SpacingResponsive9Tablet,
  Jb as SpacingUtilities,
  Cb as StateDisabledBackground,
  Nb as StateDisabledBorder,
  jb as StateDisabledText,
  pb as StateErrorBackground,
  hb as StateErrorBorder,
  mb as StateErrorText,
  _b as StateInfoBackground,
  Sb as StateInfoBorder,
  kb as StateInfoText,
  gb as StateSuccessBackground,
  xb as StateSuccessBorder,
  bb as StateSuccessText,
  vb as StateWarningBackground,
  yb as StateWarningBorder,
  wb as StateWarningText,
  kp as SummaryCard,
  hv as SummaryList,
  Kt as Table,
  mv as Tabs,
  We as Tag,
  vp as TaskList,
  hu as Textarea,
  Dv as TooltipOverlay,
  sm as TooltipProvider,
  Cv as TransactionalPageTemplate,
  hg as TransitionButtonDefault,
  mg as TransitionButtonShadow,
  xg as TransitionCardHover,
  gg as TransitionInputFocus,
  jv as VisibilityProvider,
  rl as VitalsCard,
  tv as WIDTH_FRACTIONS,
  gv as WarningCallout,
  ll as WidthContainer,
  Qb as WidthUtilities,
  ly as checkFrutigerLoaded,
  Vs as createGenericTabsConfig,
  wv as createTCHTabsConfig,
  ay as generateFrutigerFontFace,
  Rv as getResponsiveStyles,
  Zb as getSpacingClass,
  ev as getWidthClass,
  sy as preloadFrutigerFonts,
  Ap as tchDataConfig,
  Xv as useColors,
  Qv as useComponentSpacing,
  ey as useNHSHeadings,
  ty as useNHSParagraphs,
  av as useNHSTheme,
  ny as useNHSTypographySystem,
  ry as useNavigationSplitDrill,
  uh as useNavigationSplitUrlSync,
  ul as useNhsFdpBreakpoints,
  Zv as useResponsiveSpacing,
  Nv as useResponsiveValue,
  Kv as useSpacing,
  Am as useSpc,
  qv as useTokens,
  Jv as useTypography
};
//# sourceMappingURL=index.esm.js.map
