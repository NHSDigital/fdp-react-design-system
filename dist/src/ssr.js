import * as zt from "react";
import W, { useRef as G, useCallback as q, useState as ee, useContext as ce, useEffect as Z, useMemo as xe, forwardRef as Xt, createContext as Xe, createElement as qt } from "react";
import N from "classnames";
import { flushSync as Zt } from "react-dom";
var ke = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function Jt() {
  if (rt) return be;
  rt = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, a, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), a.key !== void 0 && (o = "" + a.key), "key" in a) {
      i = {};
      for (var u in a)
        u !== "key" && (i[u] = a[u]);
    } else i = a;
    return a = i.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: a !== void 0 ? a : null,
      props: i
    };
  }
  return be.Fragment = t, be.jsx = n, be.jsxs = n, be;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function Qt() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && function() {
    function e(h) {
      if (h == null) return null;
      if (typeof h == "function")
        return h.$$typeof === K ? null : h.displayName || h.name || null;
      if (typeof h == "string") return h;
      switch (h) {
        case y:
          return "Fragment";
        case g:
          return "Profiler";
        case x:
          return "StrictMode";
        case I:
          return "Suspense";
        case A:
          return "SuspenseList";
        case F:
          return "Activity";
      }
      if (typeof h == "object")
        switch (typeof h.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), h.$$typeof) {
          case T:
            return "Portal";
          case _:
            return (h.displayName || "Context") + ".Provider";
          case w:
            return (h._context.displayName || "Context") + ".Consumer";
          case j:
            var S = h.render;
            return h = h.displayName, h || (h = S.displayName || S.name || "", h = h !== "" ? "ForwardRef(" + h + ")" : "ForwardRef"), h;
          case C:
            return S = h.displayName || null, S !== null ? S : e(h.type) || "Memo";
          case f:
            S = h._payload, h = h._init;
            try {
              return e(h(S));
            } catch {
            }
        }
      return null;
    }
    function t(h) {
      return "" + h;
    }
    function n(h) {
      try {
        t(h);
        var S = !1;
      } catch {
        S = !0;
      }
      if (S) {
        S = console;
        var H = S.error, V = typeof Symbol == "function" && Symbol.toStringTag && h[Symbol.toStringTag] || h.constructor.name || "Object";
        return H.call(
          S,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          V
        ), t(h);
      }
    }
    function r(h) {
      if (h === y) return "<>";
      if (typeof h == "object" && h !== null && h.$$typeof === f)
        return "<...>";
      try {
        var S = e(h);
        return S ? "<" + S + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var h = s.A;
      return h === null ? null : h.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(h) {
      if ($.call(h, "key")) {
        var S = Object.getOwnPropertyDescriptor(h, "key").get;
        if (S && S.isReactWarning) return !1;
      }
      return h.key !== void 0;
    }
    function u(h, S) {
      function H() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          S
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(h, "key", {
        get: H,
        configurable: !0
      });
    }
    function d() {
      var h = e(this.type);
      return c[h] || (c[h] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), h = this.props.ref, h !== void 0 ? h : null;
    }
    function p(h, S, H, V, ne, J, Ae, Fe) {
      return H = J.ref, h = {
        $$typeof: k,
        type: h,
        key: S,
        props: J,
        _owner: ne
      }, (H !== void 0 ? H : null) !== null ? Object.defineProperty(h, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(h, "ref", { enumerable: !1, value: null }), h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(h, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(h, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ae
      }), Object.defineProperty(h, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Fe
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    }
    function b(h, S, H, V, ne, J, Ae, Fe) {
      var U = S.children;
      if (U !== void 0)
        if (V)
          if (R(U)) {
            for (V = 0; V < U.length; V++)
              m(U[V]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(U);
      if ($.call(S, "key")) {
        U = e(h);
        var ue = Object.keys(S).filter(function(Yt) {
          return Yt !== "key";
        });
        V = 0 < ue.length ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}", Y[U + V] || (ue = 0 < ue.length ? "{" + ue.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          V,
          U,
          ue,
          U
        ), Y[U + V] = !0);
      }
      if (U = null, H !== void 0 && (n(H), U = "" + H), o(S) && (n(S.key), U = "" + S.key), "key" in S) {
        H = {};
        for (var He in S)
          He !== "key" && (H[He] = S[He]);
      } else H = S;
      return U && u(
        H,
        typeof h == "function" ? h.displayName || h.name || "Unknown" : h
      ), p(
        h,
        U,
        J,
        ne,
        a(),
        H,
        Ae,
        Fe
      );
    }
    function m(h) {
      typeof h == "object" && h !== null && h.$$typeof === k && h._store && (h._store.validated = 1);
    }
    var E = W, k = Symbol.for("react.transitional.element"), T = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), w = Symbol.for("react.consumer"), _ = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), s = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, R = Array.isArray, v = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      "react-stack-bottom-frame": function(h) {
        return h();
      }
    };
    var M, c = {}, P = E["react-stack-bottom-frame"].bind(
      E,
      i
    )(), L = v(r(i)), Y = {};
    me.Fragment = y, me.jsx = function(h, S, H, V, ne) {
      var J = 1e4 > s.recentlyCreatedOwnerStacks++;
      return b(
        h,
        S,
        H,
        !1,
        V,
        ne,
        J ? Error("react-stack-top-frame") : P,
        J ? v(r(h)) : L
      );
    }, me.jsxs = function(h, S, H, V, ne) {
      var J = 1e4 > s.recentlyCreatedOwnerStacks++;
      return b(
        h,
        S,
        H,
        !0,
        V,
        ne,
        J ? Error("react-stack-top-frame") : P,
        J ? v(r(h)) : L
      );
    };
  }()), me;
}
var st;
function en() {
  return st || (st = 1, process.env.NODE_ENV === "production" ? ke.exports = Jt() : ke.exports = Qt()), ke.exports;
}
var l = en();
const Mr = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: a,
  account: i,
  navigation: o,
  containerClasses: u,
  variant: d = "default",
  attributes: p = {},
  ...b
}) => {
  const m = n.href && !t.href || n.href && n.href === t.href, E = m ? n.href : t.href, k = N(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || r,
      "nhsuk-header--white": d === "white"
    },
    e
  ), T = N(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), y = N(
    "nhsuk-header__navigation",
    o?.className
  ), x = () => /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), g = () => t.src ? /* @__PURE__ */ l.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : x(), w = () => r ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ l.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ l.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, _ = (C, f) => C ? f ? /* @__PURE__ */ l.jsx("a", { className: "nhsuk-header__service-name", href: f, children: C }) : /* @__PURE__ */ l.jsx("span", { className: "nhsuk-header__service-name", children: C }) : null, j = () => !o?.items || o.items.length === 0 ? null : o.items.map((C, f) => /* @__PURE__ */ l.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ l.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: C.href,
          ...C.attributes || {},
          children: C.text
        }
      )
    },
    C.href || f
  )), I = () => !i?.items || i.items.length === 0 ? null : i.items.map((C, f) => /* @__PURE__ */ l.jsx("li", { className: "nhsuk-header__account-item", children: /* @__PURE__ */ l.jsx(
    "a",
    {
      className: "nhsuk-header__account-link",
      href: C.href,
      children: C.text
    }
  ) }, C.href || f)), A = () => a ? /* @__PURE__ */ l.jsx("div", { className: "nhsuk-header__search", children: /* @__PURE__ */ l.jsx("div", { className: "nhsuk-header__search-wrap", id: "wrap-search", children: /* @__PURE__ */ l.jsxs(
    "form",
    {
      className: "nhsuk-header__search-form",
      role: "search",
      action: a.action || "/search",
      method: "get",
      children: [
        /* @__PURE__ */ l.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: a.visuallyHiddenLabel || "Search the NHS website" }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            className: "nhsuk-header__search-input nhsuk-input",
            id: "search-field",
            name: a.name || "q",
            type: "search",
            placeholder: a.placeholder || "Search",
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ l.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
          /* @__PURE__ */ l.jsx("svg", { className: "nhsuk-icon nhsuk-icon__search", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ l.jsx("path", { d: "m19.71 18.29-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" }) }),
          /* @__PURE__ */ l.jsx("span", { className: "nhsuk-u-visually-hidden", children: a.visuallyHiddenButton || "Search" })
        ] })
      ]
    }
  ) }) }) : null;
  return /* @__PURE__ */ l.jsxs(
    "header",
    {
      className: k,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": o?.items?.length || 0,
      ...p,
      ...b,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: T, children: [
          /* @__PURE__ */ l.jsxs("div", { className: "nhsuk-header__service", children: [
            E ? /* @__PURE__ */ l.jsxs("a", { className: "nhsuk-header__service-logo", href: E, children: [
              g(),
              w(),
              m && _(n.text)
            ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
              g(),
              w(),
              m && _(n.text)
            ] }),
            n.text && !m && _(n.text, n.href)
          ] }),
          (d === "organisation" || r) && /* @__PURE__ */ l.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            r && /* @__PURE__ */ l.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ l.jsx("span", { className: "nhsuk-header__organisation-name", children: r.name }),
              r.descriptor && /* @__PURE__ */ l.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: r.descriptor })
            ] }),
            A()
          ] }),
          d !== "organisation" && !r && A(),
          i && /* @__PURE__ */ l.jsx("div", { className: "nhsuk-header__account", children: /* @__PURE__ */ l.jsx("ul", { className: "nhsuk-header__account-list", children: I() }) })
        ] }),
        o && o.items && o.items.length > 0 && /* @__PURE__ */ l.jsx(
          "nav",
          {
            className: y,
            id: "header-navigation",
            role: "navigation",
            "aria-label": o.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ l.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ l.jsx(
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
}, Or = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: r,
  search: a,
  account: i,
  navigation: o,
  containerClasses: u,
  variant: d = "default",
  attributes: p = {},
  maxVisibleItems: b = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const E = n.href && !t.href || n.href && n.href === t.href, k = E ? n.href : t.href, T = N(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || r,
      "nhsuk-header--white": d === "white"
    },
    e
  ), y = N(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), x = N(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": o?.white,
      "nhsuk-header__navigation--justified": o?.justified
    },
    o?.className
  ), g = () => /* @__PURE__ */ l.jsxs(
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
        /* @__PURE__ */ l.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ l.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), w = () => t.src ? /* @__PURE__ */ l.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : g(), _ = () => r ? /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      r.name,
      r.split && /* @__PURE__ */ l.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        r.split
      ] })
    ] }),
    r.descriptor && /* @__PURE__ */ l.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: r.descriptor })
  ] }) : null, j = (f, F) => f ? F ? /* @__PURE__ */ l.jsx("a", { className: "nhsuk-header__service-name", href: F, children: f }) : /* @__PURE__ */ l.jsx("span", { className: "nhsuk-header__service-name", children: f }) : null, I = (f) => {
    const F = f.icon ? /* @__PURE__ */ l.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ l.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, K = f.html ? /* @__PURE__ */ l.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text, s = /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      F,
      K
    ] });
    return f.href ? /* @__PURE__ */ l.jsx("a", { className: "nhsuk-header__account-link", href: f.href, children: s }) : f.action ? /* @__PURE__ */ l.jsx(
      "form",
      {
        className: "nhsuk-header__account-form",
        action: f.action,
        method: f.method || "post",
        children: /* @__PURE__ */ l.jsx(
          "button",
          {
            className: "nhsuk-header__account-button",
            type: "submit",
            role: "button",
            children: s
          }
        )
      }
    ) : s;
  }, A = () => /* @__PURE__ */ l.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ l.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), C = (f) => {
    if (f.active || f.current) {
      const F = f.html ? /* @__PURE__ */ l.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
      return /* @__PURE__ */ l.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: F });
    }
    return f.html ? /* @__PURE__ */ l.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
  };
  return /* @__PURE__ */ l.jsxs(
    "header",
    {
      className: T,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...p,
      ...m,
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: y, children: [
          /* @__PURE__ */ l.jsxs("div", { className: "nhsuk-header__service", children: [
            k ? /* @__PURE__ */ l.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
              w(),
              _(),
              E && j(n.text)
            ] }) : /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
              w(),
              _(),
              E && j(n.text)
            ] }),
            n.text && !E && j(n.text, n.href)
          ] }),
          a && /* @__PURE__ */ l.jsx("search", { className: "nhsuk-header__search", children: /* @__PURE__ */ l.jsxs(
            "form",
            {
              className: "nhsuk-header__search-form",
              id: "search",
              action: a.action || "https://www.nhs.uk/search/",
              method: "get",
              children: [
                /* @__PURE__ */ l.jsx(
                  "label",
                  {
                    className: "nhsuk-u-visually-hidden",
                    htmlFor: "search-field",
                    children: a.visuallyHiddenLabel || "Search the NHS website"
                  }
                ),
                /* @__PURE__ */ l.jsx(
                  "input",
                  {
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: a.name || "q",
                    type: "search",
                    placeholder: a.placeholder || "Search",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ l.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
                  A(),
                  /* @__PURE__ */ l.jsx("span", { className: "nhsuk-u-visually-hidden", children: a.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          i && i.items && i.items.length > 0 && /* @__PURE__ */ l.jsx(
            "nav",
            {
              className: N("nhsuk-header__account", i.className),
              "aria-label": i.ariaLabel || "Account",
              children: /* @__PURE__ */ l.jsx("ul", { className: "nhsuk-header__account-list", children: i.items.map((f, F) => f && /* @__PURE__ */ l.jsx(
                "li",
                {
                  className: N("nhsuk-header__account-item", f.className),
                  children: I(f)
                },
                F
              )) })
            }
          )
        ] }),
        o && o.items && o.items.length > 0 && /* @__PURE__ */ l.jsx(
          "nav",
          {
            className: x,
            "aria-label": o.ariaLabel || "Menu",
            children: /* @__PURE__ */ l.jsx(
              "div",
              {
                className: N(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  u
                ),
                children: /* @__PURE__ */ l.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  o.items.slice(0, b).map((f, F) => /* @__PURE__ */ l.jsx(
                    "li",
                    {
                      className: N(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": f.active || f.current
                        },
                        f.className
                      ),
                      ...f.attributes || {},
                      children: /* @__PURE__ */ l.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: f.href,
                          ...f.active || f.current ? {
                            "aria-current": f.current ? "page" : "true"
                          } : {},
                          children: C(f)
                        }
                      )
                    },
                    F
                  )),
                  o.items.length > b && /* @__PURE__ */ l.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ l.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
                    /* @__PURE__ */ l.jsxs("summary", { className: "nhsuk-header__navigation-summary", children: [
                      /* @__PURE__ */ l.jsx("span", { children: "More" }),
                      /* @__PURE__ */ l.jsx(
                        "svg",
                        {
                          className: "nhsuk-icon nhsuk-icon__chevron-down",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: /* @__PURE__ */ l.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ l.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: o.items.slice(b).map((f, F) => /* @__PURE__ */ l.jsx(
                      "li",
                      {
                        className: N(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": f.active || f.current
                          }
                        ),
                        children: /* @__PURE__ */ l.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: f.href,
                            ...f.active || f.current ? {
                              "aria-current": f.current ? "page" : "true"
                            } : {},
                            children: C(f)
                          }
                        )
                      },
                      `overflow-${b + F}`
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
}, Ar = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: r,
  ...a
}) => {
  const i = N(
    "nhsuk-action-link__link",
    r
  );
  return /* @__PURE__ */ l.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ l.jsxs(
    "a",
    {
      className: i,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...a,
      children: [
        /* @__PURE__ */ l.jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "36",
            height: "36",
            children: [
              /* @__PURE__ */ l.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ l.jsx("path", { d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" })
            ]
          }
        ),
        /* @__PURE__ */ l.jsx("span", { className: "nhsuk-action-link__text", children: e })
      ]
    }
  ) });
}, Me = typeof document < "u" ? W.useLayoutEffect : () => {
};
var Ie;
const tn = (Ie = W.useInsertionEffect) !== null && Ie !== void 0 ? Ie : Me;
function ae(e) {
  const t = G(null);
  return tn(() => {
    t.current = e;
  }, [
    e
  ]), q((...n) => {
    const r = t.current;
    return r?.(...n);
  }, []);
}
const Ne = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
}, xt = /* @__PURE__ */ W.createContext(Ne), nn = /* @__PURE__ */ W.createContext(!1);
let rn = !!(typeof window < "u" && window.document && window.document.createElement), Re = /* @__PURE__ */ new WeakMap();
function an(e = !1) {
  let t = ce(xt), n = G(null);
  if (n.current === null && !e) {
    var r, a;
    let i = (a = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || a === void 0 || (r = a.ReactCurrentOwner) === null || r === void 0 ? void 0 : r.current;
    if (i) {
      let o = Re.get(i);
      o == null ? Re.set(i, {
        id: t.current,
        state: i.memoizedState
      }) : i.memoizedState !== o.state && (t.current = o.id, Re.delete(i));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function sn(e) {
  let t = ce(xt);
  t === Ne && !rn && process.env.NODE_ENV !== "production" && console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let n = an(!!e), r = t === Ne && process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function on(e) {
  let t = W.useId(), [n] = ee(fn()), r = n || process.env.NODE_ENV === "test" ? "react-aria" : `react-aria${Ne.prefix}`;
  return e || `${r}-${t}`;
}
const ln = typeof W.useId == "function" ? on : sn;
function cn() {
  return !1;
}
function un() {
  return !0;
}
function dn(e) {
  return () => {
  };
}
function fn() {
  return typeof W.useSyncExternalStore == "function" ? W.useSyncExternalStore(dn, cn, un) : ce(nn);
}
let hn = !!(typeof window < "u" && window.document && window.document.createElement), fe = /* @__PURE__ */ new Map(), ge;
typeof FinalizationRegistry < "u" && (ge = new FinalizationRegistry((e) => {
  fe.delete(e);
}));
function it(e) {
  let [t, n] = ee(e), r = G(null), a = ln(t), i = G(null);
  if (ge && ge.register(i, a), hn) {
    const o = fe.get(a);
    o && !o.includes(r) ? o.push(r) : fe.set(a, [
      r
    ]);
  }
  return Me(() => {
    let o = a;
    return () => {
      ge && ge.unregister(i), fe.delete(o);
    };
  }, [
    a
  ]), Z(() => {
    let o = r.current;
    return o && n(o), () => {
      o && (r.current = null);
    };
  }), a;
}
function pn(e, t) {
  if (e === t) return e;
  let n = fe.get(e);
  if (n)
    return n.forEach((a) => a.current = t), t;
  let r = fe.get(t);
  return r ? (r.forEach((a) => a.current = e), e) : t;
}
function kt(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
const B = (e) => {
  var t;
  return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document;
}, X = (e) => e && "window" in e && e.window === e ? e : B(e).defaultView || window;
function vn(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function bn(e) {
  return vn(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let mn = !1;
function qe() {
  return mn;
}
function D(e, t) {
  if (!qe()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : bn(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const ye = (e = document) => {
  var t;
  if (!qe()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function O(e) {
  return qe() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Tt(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (n = Tt(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function gn() {
  for (var e, t, n = 0, r = "", a = arguments.length; n < a; n++) (e = arguments[n]) && (t = Tt(e)) && (r && (r += " "), r += t);
  return r;
}
function ie(...e) {
  let t = {
    ...e[0]
  };
  for (let n = 1; n < e.length; n++) {
    let r = e[n];
    for (let a in r) {
      let i = t[a], o = r[a];
      typeof i == "function" && typeof o == "function" && // This is a lot faster than a regex.
      a[0] === "o" && a[1] === "n" && a.charCodeAt(2) >= /* 'A' */
      65 && a.charCodeAt(2) <= /* 'Z' */
      90 ? t[a] = kt(i, o) : (a === "className" || a === "UNSAFE_className") && typeof i == "string" && typeof o == "string" ? t[a] = gn(i, o) : a === "id" && i && o ? t.id = pn(i, o) : t[a] = o !== void 0 ? o : i;
    }
  }
  return t;
}
function $n(...e) {
  return e.length === 1 && e[0] ? e[0] : (t) => {
    let n = !1;
    const r = e.map((a) => {
      const i = ot(a, t);
      return n || (n = typeof i == "function"), i;
    });
    if (n) return () => {
      r.forEach((a, i) => {
        typeof a == "function" ? a() : ot(e[i], null);
      });
    };
  };
}
function ot(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
const yn = /* @__PURE__ */ new Set([
  "id"
]), En = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]), xn = /* @__PURE__ */ new Set([
  "href",
  "hrefLang",
  "target",
  "rel",
  "download",
  "ping",
  "referrerPolicy"
]), kn = /* @__PURE__ */ new Set([
  "dir",
  "lang",
  "hidden",
  "inert",
  "translate"
]), lt = /* @__PURE__ */ new Set([
  "onClick",
  "onAuxClick",
  "onContextMenu",
  "onDoubleClick",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onPointerDown",
  "onPointerMove",
  "onPointerUp",
  "onPointerCancel",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerOver",
  "onPointerOut",
  "onGotPointerCapture",
  "onLostPointerCapture",
  "onScroll",
  "onWheel",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionCancel",
  "onTransitionEnd",
  "onTransitionRun",
  "onTransitionStart"
]), Tn = /^(data-.*)$/;
function wt(e, t = {}) {
  let { labelable: n, isLink: r, global: a, events: i = a, propNames: o } = t, u = {};
  for (const d in e) Object.prototype.hasOwnProperty.call(e, d) && (yn.has(d) || n && En.has(d) || r && xn.has(d) || a && kn.has(d) || i && lt.has(d) || d.endsWith("Capture") && lt.has(d.slice(0, -7)) || o?.has(d) || Tn.test(d)) && (u[d] = e[d]);
  return u;
}
function he(e) {
  if (wn()) e.focus({
    preventScroll: !0
  });
  else {
    let t = _n(e);
    e.focus(), Pn(t);
  }
}
let Te = null;
function wn() {
  if (Te == null) {
    Te = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Te = !0, !0;
        }
      });
    } catch {
    }
  }
  return Te;
}
function _n(e) {
  let t = e.parentNode, n = [], r = document.scrollingElement || document.documentElement;
  for (; t instanceof HTMLElement && t !== r; )
    (t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
      element: t,
      scrollTop: t.scrollTop,
      scrollLeft: t.scrollLeft
    }), t = t.parentNode;
  return r instanceof HTMLElement && n.push({
    element: r,
    scrollTop: r.scrollTop,
    scrollLeft: r.scrollLeft
  }), n;
}
function Pn(e) {
  for (let { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
function Oe(e) {
  var t;
  if (typeof window > "u" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function Ze(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function te(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const pe = te(function() {
  return Ze(/^Mac/i);
}), Sn = te(function() {
  return Ze(/^iPhone/i);
}), _t = te(function() {
  return Ze(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  pe() && navigator.maxTouchPoints > 1;
}), Je = te(function() {
  return Sn() || _t();
});
te(function() {
  return pe() || Je();
});
const Nn = te(function() {
  return Oe(/AppleWebKit/i) && !Ln();
}), Ln = te(function() {
  return Oe(/Chrome/i);
}), Pt = te(function() {
  return Oe(/Android/i);
}), jn = te(function() {
  return Oe(/Firefox/i);
});
function Ee(e, t, n = !0) {
  var r, a;
  let { metaKey: i, ctrlKey: o, altKey: u, shiftKey: d } = t;
  jn() && (!((a = window.event) === null || a === void 0 || (r = a.type) === null || r === void 0) && r.startsWith("key")) && e.target === "_blank" && (pe() ? i = !0 : o = !0);
  let p = Nn() && pe() && !_t() && process.env.NODE_ENV !== "test" ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey: i,
    ctrlKey: o,
    altKey: u,
    shiftKey: d
  }) : new MouseEvent("click", {
    metaKey: i,
    ctrlKey: o,
    altKey: u,
    shiftKey: d,
    bubbles: !0,
    cancelable: !0
  });
  Ee.isOpening = n, he(e), e.dispatchEvent(p), Ee.isOpening = !1;
}
Ee.isOpening = !1;
let se = /* @__PURE__ */ new Map(), Ve = /* @__PURE__ */ new Set();
function ct() {
  if (typeof window > "u") return;
  function e(r) {
    return "propertyName" in r;
  }
  let t = (r) => {
    if (!e(r) || !r.target) return;
    let a = se.get(r.target);
    a || (a = /* @__PURE__ */ new Set(), se.set(r.target, a), r.target.addEventListener("transitioncancel", n, {
      once: !0
    })), a.add(r.propertyName);
  }, n = (r) => {
    if (!e(r) || !r.target) return;
    let a = se.get(r.target);
    if (a && (a.delete(r.propertyName), a.size === 0 && (r.target.removeEventListener("transitioncancel", n), se.delete(r.target)), se.size === 0)) {
      for (let i of Ve) i();
      Ve.clear();
    }
  };
  document.body.addEventListener("transitionrun", t), document.body.addEventListener("transitionend", n);
}
typeof document < "u" && (document.readyState !== "loading" ? ct() : document.addEventListener("DOMContentLoaded", ct));
function Cn() {
  for (const [e] of se)
    "isConnected" in e && !e.isConnected && se.delete(e);
}
function St(e) {
  requestAnimationFrame(() => {
    Cn(), se.size === 0 ? e() : Ve.add(e);
  });
}
function Qe() {
  let e = G(/* @__PURE__ */ new Map()), t = q((a, i, o, u) => {
    let d = u?.once ? (...p) => {
      e.current.delete(o), o(...p);
    } : o;
    e.current.set(o, {
      type: i,
      eventTarget: a,
      fn: d,
      options: u
    }), a.addEventListener(i, d, u);
  }, []), n = q((a, i, o, u) => {
    var d;
    let p = ((d = e.current.get(o)) === null || d === void 0 ? void 0 : d.fn) || o;
    a.removeEventListener(i, p, u), e.current.delete(o);
  }, []), r = q(() => {
    e.current.forEach((a, i) => {
      n(a.eventTarget, a.type, i, a.options);
    });
  }, [
    n
  ]);
  return Z(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Mn(e) {
  const t = G(null), n = G(void 0), r = q((a) => {
    if (typeof e == "function") {
      const i = e, o = i(a);
      return () => {
        typeof o == "function" ? o() : i(null);
      };
    } else if (e)
      return e.current = a, () => {
        e.current = null;
      };
  }, [
    e
  ]);
  return xe(() => ({
    get current() {
      return t.current;
    },
    set current(a) {
      t.current = a, n.current && (n.current(), n.current = void 0), a != null && (n.current = r(a));
    }
  }), [
    r
  ]);
}
function Nt(e, t) {
  Me(() => {
    if (e && e.ref && t)
      return e.ref.current = t.current, () => {
        e.ref && (e.ref.current = null);
      };
  });
}
function Ue(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : Pt() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function On(e) {
  return !Pt() && e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType === "mouse";
}
const An = typeof Element < "u" && "checkVisibility" in Element.prototype;
function Fn(e) {
  const t = X(e);
  if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
  let { display: n, visibility: r } = e.style, a = n !== "none" && r !== "hidden" && r !== "collapse";
  if (a) {
    const { getComputedStyle: i } = e.ownerDocument.defaultView;
    let { display: o, visibility: u } = i(e);
    a = o !== "none" && u !== "hidden" && u !== "collapse";
  }
  return a;
}
function Hn(e, t) {
  return !e.hasAttribute("hidden") && // Ignore HiddenSelect when tree walking.
  !e.hasAttribute("data-react-aria-prevent-focus") && (e.nodeName === "DETAILS" && t && t.nodeName !== "SUMMARY" ? e.hasAttribute("open") : !0);
}
function Lt(e, t) {
  return An ? e.checkVisibility() : e.nodeName !== "#comment" && Fn(e) && Hn(e, t) && (!e.parentElement || Lt(e.parentElement, e));
}
const jt = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  '[contenteditable]:not([contenteditable^="false"])',
  "permission"
], In = jt.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
jt.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
function Rn(e) {
  return e.matches(In) && Lt(e) && !Dn(e);
}
function Dn(e) {
  let t = e;
  for (; t != null; ) {
    if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
    t = t.parentElement;
  }
  return !1;
}
const Kn = Symbol("default");
function Vn(e) {
  let { className: t, style: n, children: r, defaultClassName: a, defaultChildren: i, defaultStyle: o, values: u } = e;
  return xe(() => {
    let d, p, b;
    return typeof t == "function" ? d = t({
      ...u,
      defaultClassName: a
    }) : d = t, typeof n == "function" ? p = n({
      ...u,
      defaultStyle: o || {}
    }) : p = n, typeof r == "function" ? b = r({
      ...u,
      defaultChildren: i
    }) : r == null ? b = i : b = r, {
      className: d ?? a,
      style: p || o ? {
        ...o,
        ...p
      } : void 0,
      children: b ?? i,
      "data-rac": ""
    };
  }, [
    t,
    n,
    r,
    a,
    i,
    o,
    u
  ]);
}
function Un(e, t) {
  let n = ce(e);
  if (t === null)
    return null;
  if (n && typeof n == "object" && "slots" in n && n.slots) {
    let r = t || Kn;
    if (!n.slots[r]) {
      let a = new Intl.ListFormat().format(Object.keys(n.slots).map((o) => `"${o}"`)), i = t ? `Invalid slot "${t}".` : "A slot prop is required.";
      throw new Error(`${i} Valid slot names are ${a}.`);
    }
    return n.slots[r];
  }
  return n;
}
function Bn(e, t, n) {
  let r = Un(n, e.slot) || {}, { ref: a, ...i } = r, o = Mn(xe(() => $n(t, a), [
    t,
    a
  ])), u = ie(i, e);
  return "style" in i && i.style && "style" in e && e.style && (typeof i.style == "function" || typeof e.style == "function" ? u.style = (d) => {
    let p = typeof i.style == "function" ? i.style(d) : i.style, b = {
      ...d.defaultStyle,
      ...p
    }, m = typeof e.style == "function" ? e.style({
      ...d,
      defaultStyle: b
    }) : e.style;
    return {
      ...b,
      ...m
    };
  } : u.style = {
    ...i.style,
    ...e.style
  }), [
    u,
    o
  ];
}
if (typeof HTMLTemplateElement < "u") {
  const e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
  Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.dataset.reactAriaHidden ? this.content.firstChild : e.call(this);
    }
  });
}
const Wn = /* @__PURE__ */ Xe(!1);
function Gn(e) {
  let t = (n, r) => ce(Wn) ? null : e(n, r);
  return t.displayName = e.displayName || e.name, Xt(t);
}
function et(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Ct(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function Mt(e) {
  let t = G({
    isFocused: !1,
    observer: null
  });
  Me(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = ae((r) => {
    e?.(r);
  });
  return q((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let a = r.target, i = (o) => {
        if (t.current.isFocused = !1, a.disabled) {
          let u = et(o);
          n(u);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      a.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && a.disabled) {
          var o;
          (o = t.current.observer) === null || o === void 0 || o.disconnect();
          let u = a === document.activeElement ? null : document.activeElement;
          a.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: u
          })), a.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: u
          }));
        }
      }), t.current.observer.observe(a, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let Le = !1;
function ut(e) {
  for (; e && !Rn(e); ) e = e.parentElement;
  let t = X(e), n = t.document.activeElement;
  if (!n || n === e) return;
  Le = !0;
  let r = !1, a = (b) => {
    (b.target === n || r) && b.stopImmediatePropagation();
  }, i = (b) => {
    (b.target === n || r) && (b.stopImmediatePropagation(), !e && !r && (r = !0, he(n), d()));
  }, o = (b) => {
    (b.target === e || r) && b.stopImmediatePropagation();
  }, u = (b) => {
    (b.target === e || r) && (b.stopImmediatePropagation(), r || (r = !0, he(n), d()));
  };
  t.addEventListener("blur", a, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", u, !0), t.addEventListener("focus", o, !0);
  let d = () => {
    cancelAnimationFrame(p), t.removeEventListener("blur", a, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", u, !0), t.removeEventListener("focus", o, !0), Le = !1, r = !1;
  }, p = requestAnimationFrame(d);
  return d;
}
let de = "default", Be = "", Se = /* @__PURE__ */ new WeakMap();
function dt(e) {
  if (Je()) {
    if (de === "default") {
      const t = B(e);
      Be = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none";
    }
    de = "disabled";
  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    Se.set(e, e.style[t]), e.style[t] = "none";
  }
}
function De(e) {
  if (Je()) {
    if (de !== "disabled") return;
    de = "restoring", setTimeout(() => {
      St(() => {
        if (de === "restoring") {
          const t = B(e);
          t.documentElement.style.webkitUserSelect === "none" && (t.documentElement.style.webkitUserSelect = Be || ""), Be = "", de = "default";
        }
      });
    }, 300);
  } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Se.has(e)) {
    let t = Se.get(e), n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
    e.style[n] === "none" && (e.style[n] = t), e.getAttribute("style") === "" && e.removeAttribute("style"), Se.delete(e);
  }
}
const Ot = W.createContext({
  register: () => {
  }
});
Ot.displayName = "PressResponderContext";
function Yn(e, t) {
  return t.get ? t.get.call(e) : t.value;
}
function At(e, t, n) {
  if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
  return t.get(e);
}
function zn(e, t) {
  var n = At(e, t, "get");
  return Yn(e, n);
}
function Xn(e, t) {
  if (t.has(e))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function qn(e, t, n) {
  Xn(e, t), t.set(e, n);
}
function Zn(e, t, n) {
  if (t.set) t.set.call(e, n);
  else {
    if (!t.writable)
      throw new TypeError("attempted to set read only private field");
    t.value = n;
  }
}
function ft(e, t, n) {
  var r = At(e, t, "set");
  return Zn(e, r, n), n;
}
function Jn(e) {
  let t = ce(Ot);
  if (t) {
    let { register: n, ...r } = t;
    e = ie(r, e), n();
  }
  return Nt(t, e.ref), e;
}
var we = /* @__PURE__ */ new WeakMap();
class _e {
  continuePropagation() {
    ft(this, we, !1);
  }
  get shouldStopPropagation() {
    return zn(this, we);
  }
  constructor(t, n, r, a) {
    qn(this, we, {
      writable: !0,
      value: void 0
    }), ft(this, we, !0);
    var i;
    let o = (i = a?.target) !== null && i !== void 0 ? i : r.currentTarget;
    const u = o?.getBoundingClientRect();
    let d, p = 0, b, m = null;
    r.clientX != null && r.clientY != null && (b = r.clientX, m = r.clientY), u && (b != null && m != null ? (d = b - u.left, p = m - u.top) : (d = u.width / 2, p = u.height / 2)), this.type = t, this.pointerType = n, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = d, this.y = p;
  }
}
const ht = Symbol("linkClicked"), pt = "react-aria-pressable-style", vt = "data-react-aria-pressable";
function Qn(e) {
  let { onPress: t, onPressChange: n, onPressStart: r, onPressEnd: a, onPressUp: i, onClick: o, isDisabled: u, isPressed: d, preventFocusOnPress: p, shouldCancelOnPointerExit: b, allowTextSelectionOnPress: m, ref: E, ...k } = Jn(e), [T, y] = ee(!1), x = G({
    isPressed: !1,
    ignoreEmulatedMouseEvents: !1,
    didFirePressStart: !1,
    isTriggeringEvent: !1,
    activePointerId: null,
    target: null,
    isOverTarget: !1,
    pointerType: null,
    disposables: []
  }), { addGlobalListener: g, removeAllGlobalListeners: w } = Qe(), _ = ae((s, $) => {
    let R = x.current;
    if (u || R.didFirePressStart) return !1;
    let v = !0;
    if (R.isTriggeringEvent = !0, r) {
      let M = new _e("pressstart", $, s);
      r(M), v = M.shouldStopPropagation;
    }
    return n && n(!0), R.isTriggeringEvent = !1, R.didFirePressStart = !0, y(!0), v;
  }), j = ae((s, $, R = !0) => {
    let v = x.current;
    if (!v.didFirePressStart) return !1;
    v.didFirePressStart = !1, v.isTriggeringEvent = !0;
    let M = !0;
    if (a) {
      let c = new _e("pressend", $, s);
      a(c), M = c.shouldStopPropagation;
    }
    if (n && n(!1), y(!1), t && R && !u) {
      let c = new _e("press", $, s);
      t(c), M && (M = c.shouldStopPropagation);
    }
    return v.isTriggeringEvent = !1, M;
  }), I = ae((s, $) => {
    let R = x.current;
    if (u) return !1;
    if (i) {
      R.isTriggeringEvent = !0;
      let v = new _e("pressup", $, s);
      return i(v), R.isTriggeringEvent = !1, v.shouldStopPropagation;
    }
    return !0;
  }), A = ae((s) => {
    let $ = x.current;
    if ($.isPressed && $.target) {
      $.didFirePressStart && $.pointerType != null && j(oe($.target, s), $.pointerType, !1), $.isPressed = !1, $.isOverTarget = !1, $.activePointerId = null, $.pointerType = null, w(), m || De($.target);
      for (let R of $.disposables) R();
      $.disposables = [];
    }
  }), C = ae((s) => {
    b && A(s);
  }), f = ae((s) => {
    o?.(s);
  }), F = ae((s, $) => {
    if (o) {
      let R = new MouseEvent("click", s);
      Ct(R, $), o(et(R));
    }
  }), K = xe(() => {
    let s = x.current, $ = {
      onKeyDown(v) {
        if (Ke(v.nativeEvent, v.currentTarget) && D(v.currentTarget, O(v.nativeEvent))) {
          var M;
          gt(O(v.nativeEvent), v.key) && v.preventDefault();
          let c = !0;
          if (!s.isPressed && !v.repeat) {
            s.target = v.currentTarget, s.isPressed = !0, s.pointerType = "keyboard", c = _(v, "keyboard");
            let P = v.currentTarget, L = (Y) => {
              Ke(Y, P) && !Y.repeat && D(P, O(Y)) && s.target && I(oe(s.target, Y), "keyboard");
            };
            g(B(v.currentTarget), "keyup", kt(L, R), !0);
          }
          c && v.stopPropagation(), v.metaKey && pe() && ((M = s.metaKeyEvents) === null || M === void 0 || M.set(v.key, v.nativeEvent));
        } else v.key === "Meta" && (s.metaKeyEvents = /* @__PURE__ */ new Map());
      },
      onClick(v) {
        if (!(v && !D(v.currentTarget, O(v.nativeEvent))) && v && v.button === 0 && !s.isTriggeringEvent && !Ee.isOpening) {
          let M = !0;
          if (u && v.preventDefault(), !s.ignoreEmulatedMouseEvents && !s.isPressed && (s.pointerType === "virtual" || Ue(v.nativeEvent))) {
            let c = _(v, "virtual"), P = I(v, "virtual"), L = j(v, "virtual");
            f(v), M = c && P && L;
          } else if (s.isPressed && s.pointerType !== "keyboard") {
            let c = s.pointerType || v.nativeEvent.pointerType || "virtual", P = I(oe(v.currentTarget, v), c), L = j(oe(v.currentTarget, v), c, !0);
            M = P && L, s.isOverTarget = !1, f(v), A(v);
          }
          s.ignoreEmulatedMouseEvents = !1, M && v.stopPropagation();
        }
      }
    }, R = (v) => {
      var M;
      if (s.isPressed && s.target && Ke(v, s.target)) {
        var c;
        gt(O(v), v.key) && v.preventDefault();
        let L = O(v), Y = D(s.target, O(v));
        j(oe(s.target, v), "keyboard", Y), Y && F(v, s.target), w(), v.key !== "Enter" && tt(s.target) && D(s.target, L) && !v[ht] && (v[ht] = !0, Ee(s.target, v, !1)), s.isPressed = !1, (c = s.metaKeyEvents) === null || c === void 0 || c.delete(v.key);
      } else if (v.key === "Meta" && (!((M = s.metaKeyEvents) === null || M === void 0) && M.size)) {
        var P;
        let L = s.metaKeyEvents;
        s.metaKeyEvents = void 0;
        for (let Y of L.values()) (P = s.target) === null || P === void 0 || P.dispatchEvent(new KeyboardEvent("keyup", Y));
      }
    };
    if (typeof PointerEvent < "u") {
      $.onPointerDown = (c) => {
        if (c.button !== 0 || !D(c.currentTarget, O(c.nativeEvent))) return;
        if (On(c.nativeEvent)) {
          s.pointerType = "virtual";
          return;
        }
        s.pointerType = c.pointerType;
        let P = !0;
        if (!s.isPressed) {
          s.isPressed = !0, s.isOverTarget = !0, s.activePointerId = c.pointerId, s.target = c.currentTarget, m || dt(s.target), P = _(c, s.pointerType);
          let L = O(c.nativeEvent);
          "releasePointerCapture" in L && L.releasePointerCapture(c.pointerId), g(B(c.currentTarget), "pointerup", v, !1), g(B(c.currentTarget), "pointercancel", M, !1);
        }
        P && c.stopPropagation();
      }, $.onMouseDown = (c) => {
        if (D(c.currentTarget, O(c.nativeEvent)) && c.button === 0) {
          if (p) {
            let P = ut(c.target);
            P && s.disposables.push(P);
          }
          c.stopPropagation();
        }
      }, $.onPointerUp = (c) => {
        !D(c.currentTarget, O(c.nativeEvent)) || s.pointerType === "virtual" || c.button === 0 && !s.isPressed && I(c, s.pointerType || c.pointerType);
      }, $.onPointerEnter = (c) => {
        c.pointerId === s.activePointerId && s.target && !s.isOverTarget && s.pointerType != null && (s.isOverTarget = !0, _(oe(s.target, c), s.pointerType));
      }, $.onPointerLeave = (c) => {
        c.pointerId === s.activePointerId && s.target && s.isOverTarget && s.pointerType != null && (s.isOverTarget = !1, j(oe(s.target, c), s.pointerType, !1), C(c));
      };
      let v = (c) => {
        if (c.pointerId === s.activePointerId && s.isPressed && c.button === 0 && s.target) {
          if (D(s.target, O(c)) && s.pointerType != null) {
            let P = !1, L = setTimeout(() => {
              s.isPressed && s.target instanceof HTMLElement && (P ? A(c) : (he(s.target), s.target.click()));
            }, 80);
            g(c.currentTarget, "click", () => P = !0, !0), s.disposables.push(() => clearTimeout(L));
          } else A(c);
          s.isOverTarget = !1;
        }
      }, M = (c) => {
        A(c);
      };
      $.onDragStart = (c) => {
        D(c.currentTarget, O(c.nativeEvent)) && A(c);
      };
    } else if (process.env.NODE_ENV === "test") {
      $.onMouseDown = (c) => {
        if (c.button !== 0 || !D(c.currentTarget, O(c.nativeEvent))) return;
        if (s.ignoreEmulatedMouseEvents) {
          c.stopPropagation();
          return;
        }
        if (s.isPressed = !0, s.isOverTarget = !0, s.target = c.currentTarget, s.pointerType = Ue(c.nativeEvent) ? "virtual" : "mouse", Zt(() => _(c, s.pointerType)) && c.stopPropagation(), p) {
          let L = ut(c.target);
          L && s.disposables.push(L);
        }
        g(B(c.currentTarget), "mouseup", v, !1);
      }, $.onMouseEnter = (c) => {
        if (!D(c.currentTarget, O(c.nativeEvent))) return;
        let P = !0;
        s.isPressed && !s.ignoreEmulatedMouseEvents && s.pointerType != null && (s.isOverTarget = !0, P = _(c, s.pointerType)), P && c.stopPropagation();
      }, $.onMouseLeave = (c) => {
        if (!D(c.currentTarget, O(c.nativeEvent))) return;
        let P = !0;
        s.isPressed && !s.ignoreEmulatedMouseEvents && s.pointerType != null && (s.isOverTarget = !1, P = j(c, s.pointerType, !1), C(c)), P && c.stopPropagation();
      }, $.onMouseUp = (c) => {
        D(c.currentTarget, O(c.nativeEvent)) && !s.ignoreEmulatedMouseEvents && c.button === 0 && !s.isPressed && I(c, s.pointerType || "mouse");
      };
      let v = (c) => {
        if (c.button === 0) {
          if (s.ignoreEmulatedMouseEvents) {
            s.ignoreEmulatedMouseEvents = !1;
            return;
          }
          s.target && s.target.contains(c.target) && s.pointerType != null || A(c), s.isOverTarget = !1;
        }
      };
      $.onTouchStart = (c) => {
        if (!D(c.currentTarget, O(c.nativeEvent))) return;
        let P = er(c.nativeEvent);
        if (!P) return;
        s.activePointerId = P.identifier, s.ignoreEmulatedMouseEvents = !0, s.isOverTarget = !0, s.isPressed = !0, s.target = c.currentTarget, s.pointerType = "touch", m || dt(s.target), _(re(s.target, c), s.pointerType) && c.stopPropagation(), g(X(c.currentTarget), "scroll", M, !0);
      }, $.onTouchMove = (c) => {
        if (!D(c.currentTarget, O(c.nativeEvent))) return;
        if (!s.isPressed) {
          c.stopPropagation();
          return;
        }
        let P = bt(c.nativeEvent, s.activePointerId), L = !0;
        P && mt(P, c.currentTarget) ? !s.isOverTarget && s.pointerType != null && (s.isOverTarget = !0, L = _(re(s.target, c), s.pointerType)) : s.isOverTarget && s.pointerType != null && (s.isOverTarget = !1, L = j(re(s.target, c), s.pointerType, !1), C(re(s.target, c))), L && c.stopPropagation();
      }, $.onTouchEnd = (c) => {
        if (!D(c.currentTarget, O(c.nativeEvent))) return;
        if (!s.isPressed) {
          c.stopPropagation();
          return;
        }
        let P = bt(c.nativeEvent, s.activePointerId), L = !0;
        P && mt(P, c.currentTarget) && s.pointerType != null ? (I(re(s.target, c), s.pointerType), L = j(re(s.target, c), s.pointerType), F(c.nativeEvent, s.target)) : s.isOverTarget && s.pointerType != null && (L = j(re(s.target, c), s.pointerType, !1)), L && c.stopPropagation(), s.isPressed = !1, s.activePointerId = null, s.isOverTarget = !1, s.ignoreEmulatedMouseEvents = !0, s.target && !m && De(s.target), w();
      }, $.onTouchCancel = (c) => {
        D(c.currentTarget, O(c.nativeEvent)) && (c.stopPropagation(), s.isPressed && A(re(s.target, c)));
      };
      let M = (c) => {
        s.isPressed && D(O(c), s.target) && A({
          currentTarget: s.target,
          shiftKey: !1,
          ctrlKey: !1,
          metaKey: !1,
          altKey: !1
        });
      };
      $.onDragStart = (c) => {
        D(c.currentTarget, O(c.nativeEvent)) && A(c);
      };
    }
    return $;
  }, [
    g,
    u,
    p,
    w,
    m,
    A,
    C,
    j,
    _,
    I,
    f,
    F
  ]);
  return Z(() => {
    if (!E || process.env.NODE_ENV === "test") return;
    const s = B(E.current);
    if (!s || !s.head || s.getElementById(pt)) return;
    const $ = s.createElement("style");
    $.id = pt, $.textContent = `
@layer {
  [${vt}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), s.head.prepend($);
  }, [
    E
  ]), Z(() => {
    let s = x.current;
    return () => {
      var $;
      m || De(($ = s.target) !== null && $ !== void 0 ? $ : void 0);
      for (let R of s.disposables) R();
      s.disposables = [];
    };
  }, [
    m
  ]), {
    isPressed: d || T,
    pressProps: ie(k, K, {
      [vt]: !0
    })
  };
}
function tt(e) {
  return e.tagName === "A" && e.hasAttribute("href");
}
function Ke(e, t) {
  const { key: n, code: r } = e, a = t, i = a.getAttribute("role");
  return (n === "Enter" || n === " " || n === "Spacebar" || r === "Space") && !(a instanceof X(a).HTMLInputElement && !Ft(a, n) || a instanceof X(a).HTMLTextAreaElement || a.isContentEditable) && // Links should only trigger with Enter key
  !((i === "link" || !i && tt(a)) && n !== "Enter");
}
function er(e) {
  const { targetTouches: t } = e;
  return t.length > 0 ? t[0] : null;
}
function bt(e, t) {
  const n = e.changedTouches;
  for (let r = 0; r < n.length; r++) {
    const a = n[r];
    if (a.identifier === t) return a;
  }
  return null;
}
function re(e, t) {
  let n = 0, r = 0;
  return t.targetTouches && t.targetTouches.length === 1 && (n = t.targetTouches[0].clientX, r = t.targetTouches[0].clientY), {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: r
  };
}
function oe(e, t) {
  let n = t.clientX, r = t.clientY;
  return {
    currentTarget: e,
    shiftKey: t.shiftKey,
    ctrlKey: t.ctrlKey,
    metaKey: t.metaKey,
    altKey: t.altKey,
    clientX: n,
    clientY: r
  };
}
function tr(e) {
  let t = 0, n = 0;
  return e.width !== void 0 ? t = e.width / 2 : e.radiusX !== void 0 && (t = e.radiusX), e.height !== void 0 ? n = e.height / 2 : e.radiusY !== void 0 && (n = e.radiusY), {
    top: e.clientY - n,
    right: e.clientX + t,
    bottom: e.clientY + n,
    left: e.clientX - t
  };
}
function nr(e, t) {
  return !(e.left > t.right || t.left > e.right || e.top > t.bottom || t.top > e.bottom);
}
function mt(e, t) {
  let n = t.getBoundingClientRect(), r = tr(e);
  return nr(n, r);
}
function rr(e) {
  return e instanceof HTMLInputElement ? !1 : e instanceof HTMLButtonElement ? e.type !== "submit" && e.type !== "reset" : !tt(e);
}
function gt(e, t) {
  return e instanceof HTMLInputElement ? !Ft(e, t) : rr(e);
}
const ar = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function Ft(e, t) {
  return e.type === "checkbox" || e.type === "radio" ? t === " " : ar.has(e.type);
}
let ve = null, We = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map(), le = !1, Ge = !1;
const sr = {
  Tab: !0,
  Escape: !0
};
function nt(e, t) {
  for (let n of We) n(e, t);
}
function ir(e) {
  return !(e.metaKey || !pe() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function je(e) {
  le = !0, ir(e) && (ve = "keyboard", nt("keyboard", e));
}
function z(e) {
  ve = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (le = !0, nt("pointer", e));
}
function Ht(e) {
  Ue(e) && (le = !0, ve = "virtual");
}
function It(e) {
  e.target === window || e.target === document || Le || !e.isTrusted || (!le && !Ge && (ve = "virtual", nt("virtual", e)), le = !1, Ge = !1);
}
function Rt() {
  Le || (le = !1, Ge = !0);
}
function Ye(e) {
  if (typeof window > "u" || typeof document > "u" || $e.get(X(e))) return;
  const t = X(e), n = B(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    le = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", je, !0), n.addEventListener("keyup", je, !0), n.addEventListener("click", Ht, !0), t.addEventListener("focus", It, !0), t.addEventListener("blur", Rt, !1), typeof PointerEvent < "u" ? (n.addEventListener("pointerdown", z, !0), n.addEventListener("pointermove", z, !0), n.addEventListener("pointerup", z, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", z, !0), n.addEventListener("mousemove", z, !0), n.addEventListener("mouseup", z, !0)), t.addEventListener("beforeunload", () => {
    Dt(e);
  }, {
    once: !0
  }), $e.set(t, {
    focus: r
  });
}
const Dt = (e, t) => {
  const n = X(e), r = B(e);
  t && r.removeEventListener("DOMContentLoaded", t), $e.has(n) && (n.HTMLElement.prototype.focus = $e.get(n).focus, r.removeEventListener("keydown", je, !0), r.removeEventListener("keyup", je, !0), r.removeEventListener("click", Ht, !0), n.removeEventListener("focus", It, !0), n.removeEventListener("blur", Rt, !1), typeof PointerEvent < "u" ? (r.removeEventListener("pointerdown", z, !0), r.removeEventListener("pointermove", z, !0), r.removeEventListener("pointerup", z, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", z, !0), r.removeEventListener("mousemove", z, !0), r.removeEventListener("mouseup", z, !0)), $e.delete(n));
};
function or(e) {
  const t = B(e);
  let n;
  return t.readyState !== "loading" ? Ye(e) : (n = () => {
    Ye(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => Dt(e, n);
}
typeof document < "u" && or();
function Kt() {
  return ve !== "pointer";
}
function lr() {
  return ve;
}
const cr = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function ur(e, t, n) {
  let r = B(n?.target);
  const a = typeof window < "u" ? X(n?.target).HTMLInputElement : HTMLInputElement, i = typeof window < "u" ? X(n?.target).HTMLTextAreaElement : HTMLTextAreaElement, o = typeof window < "u" ? X(n?.target).HTMLElement : HTMLElement, u = typeof window < "u" ? X(n?.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof a && !cr.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof o && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof u && !sr[n.key]);
}
function dr(e, t, n) {
  Ye(), Z(() => {
    let r = (a, i) => {
      ur(!!n?.isTextInput, a, i) && e(Kt());
    };
    return We.add(r), () => {
      We.delete(r);
    };
  }, t);
}
function fr(e) {
  const t = B(e), n = ye(t);
  if (lr() === "virtual") {
    let r = n;
    St(() => {
      ye(t) === r && e.isConnected && he(e);
    });
  } else he(e);
}
function Vt(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: a } = e;
  const i = q((d) => {
    if (d.target === d.currentTarget)
      return r && r(d), a && a(!1), !0;
  }, [
    r,
    a
  ]), o = Mt(i), u = q((d) => {
    const p = B(d.target), b = p ? ye(p) : ye();
    d.target === d.currentTarget && b === O(d.nativeEvent) && (n && n(d), a && a(!0), o(d));
  }, [
    a,
    n,
    o
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || a || r) ? u : void 0,
      onBlur: !t && (r || a) ? i : void 0
    }
  };
}
function $t(e) {
  if (!e) return;
  let t = !0;
  return (n) => {
    let r = {
      ...n,
      preventDefault() {
        n.preventDefault();
      },
      isDefaultPrevented() {
        return n.isDefaultPrevented();
      },
      stopPropagation() {
        t && process.env.NODE_ENV !== "production" ? console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.") : t = !0;
      },
      continuePropagation() {
        t = !1;
      },
      isPropagationStopped() {
        return t;
      }
    };
    e(r), t && n.stopPropagation();
  };
}
function hr(e) {
  return {
    keyboardProps: e.isDisabled ? {} : {
      onKeyDown: $t(e.onKeyDown),
      onKeyUp: $t(e.onKeyUp)
    }
  };
}
let pr = /* @__PURE__ */ W.createContext(null);
function vr(e) {
  let t = ce(pr) || {};
  Nt(t, e);
  let { ref: n, ...r } = t;
  return r;
}
function br(e, t) {
  let { focusProps: n } = Vt(e), { keyboardProps: r } = hr(e), a = ie(n, r), i = vr(t), o = e.isDisabled ? {} : i, u = G(e.autoFocus);
  Z(() => {
    u.current && t.current && fr(t.current), u.current = !1;
  }, [
    t
  ]);
  let d = e.excludeFromTabOrder ? -1 : 0;
  return e.isDisabled && (d = void 0), {
    focusableProps: ie({
      ...a,
      tabIndex: d
    }, o)
  };
}
function mr(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: a } = e, i = G({
    isFocusWithin: !1
  }), { addGlobalListener: o, removeAllGlobalListeners: u } = Qe(), d = q((m) => {
    m.currentTarget.contains(m.target) && i.current.isFocusWithin && !m.currentTarget.contains(m.relatedTarget) && (i.current.isFocusWithin = !1, u(), n && n(m), a && a(!1));
  }, [
    n,
    a,
    i,
    u
  ]), p = Mt(d), b = q((m) => {
    if (!m.currentTarget.contains(m.target)) return;
    const E = B(m.target), k = ye(E);
    if (!i.current.isFocusWithin && k === O(m.nativeEvent)) {
      r && r(m), a && a(!0), i.current.isFocusWithin = !0, p(m);
      let T = m.currentTarget;
      o(E, "focus", (y) => {
        if (i.current.isFocusWithin && !D(T, y.target)) {
          let x = new E.defaultView.FocusEvent("blur", {
            relatedTarget: y.target
          });
          Ct(x, T);
          let g = et(x);
          d(g);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    a,
    p,
    o,
    d
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: b,
      onBlur: d
    }
  };
}
let Ce = !1, Pe = 0;
function ze() {
  Ce = !0, setTimeout(() => {
    Ce = !1;
  }, 50);
}
function yt(e) {
  e.pointerType === "touch" && ze();
}
function gr() {
  if (!(typeof document > "u"))
    return Pe === 0 && (typeof PointerEvent < "u" ? document.addEventListener("pointerup", yt) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", ze)), Pe++, () => {
      Pe--, !(Pe > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", yt) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", ze));
    };
}
function $r(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: a } = e, [i, o] = ee(!1), u = G({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  Z(gr, []);
  let { addGlobalListener: d, removeAllGlobalListeners: p } = Qe(), { hoverProps: b, triggerHoverEnd: m } = xe(() => {
    let E = (y, x) => {
      if (u.pointerType = x, a || x === "touch" || u.isHovered || !y.currentTarget.contains(y.target)) return;
      u.isHovered = !0;
      let g = y.currentTarget;
      u.target = g, d(B(y.target), "pointerover", (w) => {
        u.isHovered && u.target && !D(u.target, w.target) && k(w, w.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: g,
        pointerType: x
      }), n && n(!0), o(!0);
    }, k = (y, x) => {
      let g = u.target;
      u.pointerType = "", u.target = null, !(x === "touch" || !u.isHovered || !g) && (u.isHovered = !1, p(), r && r({
        type: "hoverend",
        target: g,
        pointerType: x
      }), n && n(!1), o(!1));
    }, T = {};
    return typeof PointerEvent < "u" ? (T.onPointerEnter = (y) => {
      Ce && y.pointerType === "mouse" || E(y, y.pointerType);
    }, T.onPointerLeave = (y) => {
      !a && y.currentTarget.contains(y.target) && k(y, y.pointerType);
    }) : process.env.NODE_ENV === "test" && (T.onTouchStart = () => {
      u.ignoreEmulatedMouseEvents = !0;
    }, T.onMouseEnter = (y) => {
      !u.ignoreEmulatedMouseEvents && !Ce && E(y, "mouse"), u.ignoreEmulatedMouseEvents = !1;
    }, T.onMouseLeave = (y) => {
      !a && y.currentTarget.contains(y.target) && k(y, "mouse");
    }), {
      hoverProps: T,
      triggerHoverEnd: k
    };
  }, [
    t,
    n,
    r,
    a,
    u,
    d,
    p
  ]);
  return Z(() => {
    a && m({
      currentTarget: u.target
    }, u.pointerType);
  }, [
    a
  ]), {
    hoverProps: b,
    isHovered: i
  };
}
function yr(e, t) {
  let { elementType: n = "button", isDisabled: r, onPress: a, onPressStart: i, onPressEnd: o, onPressUp: u, onPressChange: d, preventFocusOnPress: p, allowFocusWhenDisabled: b, onClick: m, href: E, target: k, rel: T, type: y = "button" } = e, x;
  n === "button" ? x = {
    type: y,
    disabled: r,
    form: e.form,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formMethod: e.formMethod,
    formNoValidate: e.formNoValidate,
    formTarget: e.formTarget,
    name: e.name,
    value: e.value
  } : x = {
    role: "button",
    href: n === "a" && !r ? E : void 0,
    target: n === "a" ? k : void 0,
    type: n === "input" ? y : void 0,
    disabled: n === "input" ? r : void 0,
    "aria-disabled": !r || n === "input" ? void 0 : r,
    rel: n === "a" ? T : void 0
  };
  let { pressProps: g, isPressed: w } = Qn({
    onPressStart: i,
    onPressEnd: o,
    onPressChange: d,
    onPress: a,
    onPressUp: u,
    onClick: m,
    isDisabled: r,
    preventFocusOnPress: p,
    ref: t
  }), { focusableProps: _ } = br(e, t);
  b && (_.tabIndex = r ? -1 : _.tabIndex);
  let j = ie(_, g, wt(e, {
    labelable: !0
  }));
  return {
    isPressed: w,
    buttonProps: ie(x, j, {
      "aria-haspopup": e["aria-haspopup"],
      "aria-expanded": e["aria-expanded"],
      "aria-controls": e["aria-controls"],
      "aria-pressed": e["aria-pressed"],
      "aria-current": e["aria-current"]
    })
  };
}
function Er(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, a = G({
    isFocused: !1,
    isFocusVisible: t || Kt()
  }), [i, o] = ee(!1), [u, d] = ee(() => a.current.isFocused && a.current.isFocusVisible), p = q(() => d(a.current.isFocused && a.current.isFocusVisible), []), b = q((k) => {
    a.current.isFocused = k, o(k), p();
  }, [
    p
  ]);
  dr((k) => {
    a.current.isFocusVisible = k, p();
  }, [], {
    isTextInput: n
  });
  let { focusProps: m } = Vt({
    isDisabled: r,
    onFocusChange: b
  }), { focusWithinProps: E } = mr({
    isDisabled: !r,
    onFocusWithinChange: b
  });
  return {
    isFocused: i,
    isFocusVisible: u,
    focusProps: r ? E : m
  };
}
const Ut = 7e3;
let Q = null;
function Et(e, t = "assertive", n = Ut) {
  Q ? Q.announce(e, t, n) : (Q = new xr(), (typeof IS_REACT_ACT_ENVIRONMENT == "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest < "u") ? Q.announce(e, t, n) : setTimeout(() => {
    Q?.isAttached() && Q?.announce(e, t, n);
  }, 100));
}
class xr {
  isAttached() {
    var t;
    return (t = this.node) === null || t === void 0 ? void 0 : t.isConnected;
  }
  createLog(t) {
    let n = document.createElement("div");
    return n.setAttribute("role", "log"), n.setAttribute("aria-live", t), n.setAttribute("aria-relevant", "additions"), n;
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null);
  }
  announce(t, n = "assertive", r = Ut) {
    var a, i;
    if (!this.node) return;
    let o = document.createElement("div");
    typeof t == "object" ? (o.setAttribute("role", "img"), o.setAttribute("aria-labelledby", t["aria-labelledby"])) : o.textContent = t, n === "assertive" ? (a = this.assertiveLog) === null || a === void 0 || a.appendChild(o) : (i = this.politeLog) === null || i === void 0 || i.appendChild(o), t !== "" && setTimeout(() => {
      o.remove();
    }, r);
  }
  clear(t) {
    this.node && ((!t || t === "assertive") && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!t || t === "polite") && this.politeLog && (this.politeLog.innerHTML = ""));
  }
  constructor() {
    this.node = null, this.assertiveLog = null, this.politeLog = null, typeof document < "u" && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: "1px",
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node));
  }
}
const kr = /* @__PURE__ */ Xe(null), Tr = /* @__PURE__ */ Xe({}), wr = /* @__PURE__ */ Gn(function(t, n) {
  [t, n] = Bn(t, n, Tr), t = _r(t);
  let r = t, { isPending: a } = r, { buttonProps: i, isPressed: o } = yr(t, n), { focusProps: u, isFocused: d, isFocusVisible: p } = Er(t), { hoverProps: b, isHovered: m } = $r({
    ...t,
    isDisabled: t.isDisabled || a
  }), E = {
    isHovered: m,
    isPressed: (r.isPressed || o) && !a,
    isFocused: d,
    isFocusVisible: p,
    isDisabled: t.isDisabled || !1,
    isPending: a ?? !1
  }, k = Vn({
    ...t,
    values: E,
    defaultClassName: "react-aria-Button"
  }), T = it(i.id), y = it(), x = i["aria-labelledby"];
  a && (x ? x = `${x} ${y}` : i["aria-label"] && (x = `${T} ${y}`));
  let g = G(a);
  Z(() => {
    let _ = {
      "aria-labelledby": x || T
    };
    (!g.current && d && a || g.current && d && !a) && Et(_, "assertive"), g.current = a;
  }, [
    a,
    d,
    x,
    T
  ]);
  let w = wt(t, {
    global: !0
  });
  return delete w.onClick, /* @__PURE__ */ W.createElement("button", {
    ...ie(w, k, i, u, b),
    // When the button is in a pending state, we want to stop implicit form submission (ie. when the user presses enter on a text input).
    // We do this by changing the button's type to button.
    type: i.type === "submit" && a ? "button" : i.type,
    id: T,
    ref: n,
    "aria-labelledby": x,
    slot: t.slot || void 0,
    "aria-disabled": a ? "true" : i["aria-disabled"],
    "data-disabled": t.isDisabled || void 0,
    "data-pressed": E.isPressed || void 0,
    "data-hovered": m || void 0,
    "data-focused": d || void 0,
    "data-pending": a || void 0,
    "data-focus-visible": p || void 0
  }, /* @__PURE__ */ W.createElement(kr.Provider, {
    value: {
      id: y
    }
  }, k.children));
});
function _r(e) {
  return e.isPending && (e.onPress = void 0, e.onPressStart = void 0, e.onPressEnd = void 0, e.onPressChange = void 0, e.onPressUp = void 0, e.onKeyDown = void 0, e.onKeyUp = void 0, e.onClick = void 0, e.href = void 0), e;
}
const { forwardRef: Pr } = zt, Sr = Pr(
  ({
    children: e,
    variant: t = "primary",
    size: n = "default",
    fullWidth: r = !1,
    className: a = "",
    ...i
  }, o) => {
    const u = [
      "nhs-aria-button",
      `nhs-aria-button--${t}`,
      n !== "default" ? `nhs-aria-button--${n}` : "",
      r ? "nhs-aria-button--full-width" : "",
      a
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l.jsx(
      wr,
      {
        ref: o,
        className: u,
        ...i,
        children: e
      }
    );
  }
);
Sr.displayName = "Button";
const Fr = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: r,
  element: a = "a",
  onClick: i,
  ...o
}) => {
  const u = N(
    "nhsuk-back-link",
    r
  ), d = N(
    "nhsuk-back-link__link"
  ), p = () => /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-left",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ l.jsx("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
      }
    ),
    t ? /* @__PURE__ */ l.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e
  ] });
  return /* @__PURE__ */ l.jsx("div", { className: u, children: a === "button" ? /* @__PURE__ */ l.jsx(
    "button",
    {
      className: d,
      onClick: i,
      type: "button",
      ...o,
      children: p()
    }
  ) : /* @__PURE__ */ l.jsx(
    "a",
    {
      className: d,
      href: n,
      ...o,
      children: p()
    }
  ) });
}, Hr = ({
  text: e,
  html: t,
  children: n,
  color: r = "default",
  noBorder: a = !1,
  closable: i = !1,
  onClose: o,
  disabled: u = !1,
  className: d,
  ...p
}) => {
  const b = N(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${r}`]: r !== "default",
      "nhsuk-tag--no-border": a,
      "nhsuk-tag--closable": i,
      "nhsuk-tag--disabled": u
    },
    d
  ), m = (E) => {
    E.preventDefault(), E.stopPropagation(), !u && o && o();
  };
  return /* @__PURE__ */ l.jsxs("strong", { className: b, ...p, children: [
    n || (t ? /* @__PURE__ */ l.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e),
    i && /* @__PURE__ */ l.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: m,
        disabled: u,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, Bt = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: r = "m",
  children: a,
  ...i
}) => {
  const o = N(
    "nhsuk-label",
    {
      [`nhsuk-label--${r}`]: r !== "m"
    },
    t
  ), u = n ? "h1" : "label";
  return /* @__PURE__ */ l.jsx(
    u,
    {
      className: o,
      htmlFor: n ? void 0 : e,
      ...i,
      children: n ? /* @__PURE__ */ l.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: a }) : a
    }
  );
}, Ir = ({
  level: e,
  className: t,
  text: n,
  html: r,
  children: a,
  size: i,
  marginBottom: o,
  ...u
}) => {
  const p = e ?? ((T) => {
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
  })(i), b = N(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${i}`]: i
    },
    t
  ), m = a || (r ? /* @__PURE__ */ l.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : n), E = `h${p}`, k = o ? { ...u.style, marginBottom: o } : u.style;
  return qt(
    E,
    { className: b, ...u, style: k },
    m
  );
}, Rr = ({
  id: e,
  className: t,
  children: n,
  ...r
}) => {
  const a = N("nhsuk-hint", t);
  return /* @__PURE__ */ l.jsx("div", { className: a, id: e, ...r, children: n });
}, Dr = ({
  id: e,
  className: t,
  visuallyHiddenText: n = "Error:",
  children: r,
  ...a
}) => {
  const i = N("nhsuk-error-message", t);
  return /* @__PURE__ */ l.jsxs("span", { className: i, id: e, ...a, children: [
    /* @__PURE__ */ l.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      n,
      " "
    ] }),
    r
  ] });
}, Kr = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: r = {}
}) => {
  const [a, i] = ee(!1);
  Z(() => {
    i(!0);
  }, []), Z(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const u = (d) => {
      const p = d.target, b = p.getAttribute("href");
      if (b && b.startsWith("#")) {
        const m = document.querySelector(b);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const E = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
          }, 3e3);
          p.__nhsSkipLinkTimeout = E;
        }
      }
    };
    try {
      const d = document.querySelectorAll(".nhsuk-skip-link");
      return d.forEach((p) => {
        p.addEventListener("click", u);
      }), () => {
        try {
          d.forEach((p) => {
            p.removeEventListener("click", u);
            const b = p.__nhsSkipLinkTimeout;
            b && window.clearTimeout && window.clearTimeout(b);
          });
        } catch (p) {
          console.warn("SkipLink cleanup error:", p);
        }
      };
    } catch (d) {
      return console.warn("SkipLink initialization error:", d), () => {
      };
    }
  }, [a]);
  const o = N("nhsuk-skip-link", n);
  return /* @__PURE__ */ l.jsx(
    "a",
    {
      className: o,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": a ? "true" : "false",
      ...r,
      children: e
    }
  );
}, Wt = ({
  id: e,
  name: t,
  type: n = "text",
  value: r,
  defaultValue: a,
  placeholder: i,
  disabled: o = !1,
  readOnly: u = !1,
  required: d = !1,
  hasError: p = !1,
  describedBy: b,
  className: m,
  width: E = "full",
  inputMode: k,
  autoComplete: T,
  maxLength: y,
  minLength: x,
  pattern: g,
  step: w,
  min: _,
  max: j,
  onChange: I,
  onBlur: A,
  onFocus: C,
  onKeyDown: f,
  ...F
}) => {
  const K = N(
    "nhsuk-input",
    {
      "nhsuk-input--error": p,
      [`nhsuk-input--width-${E}`]: E !== "full"
    },
    m
  );
  return /* @__PURE__ */ l.jsx(
    "input",
    {
      className: K,
      id: e,
      name: t,
      type: n,
      value: r,
      defaultValue: a,
      placeholder: i,
      disabled: o,
      readOnly: u,
      required: d,
      "aria-describedby": b,
      inputMode: k,
      autoComplete: T,
      maxLength: y,
      minLength: x,
      pattern: g,
      step: w,
      min: _,
      max: j,
      onChange: I,
      onBlur: A,
      onFocus: C,
      onKeyDown: f,
      ...F
    }
  );
}, Vr = ({
  id: e,
  name: t,
  value: n,
  defaultValue: r,
  placeholder: a,
  disabled: i = !1,
  readOnly: o = !1,
  required: u = !1,
  hasError: d = !1,
  describedBy: p,
  className: b,
  rows: m = 5,
  cols: E,
  maxLength: k,
  minLength: T,
  wrap: y = "soft",
  resize: x = "vertical",
  autoComplete: g,
  spellCheck: w,
  onChange: _,
  onBlur: j,
  onFocus: I,
  onKeyDown: A,
  ...C
}) => {
  const f = N(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${x}`]: x !== "vertical"
    },
    b
  );
  return /* @__PURE__ */ l.jsx(
    "textarea",
    {
      className: f,
      id: e,
      name: t,
      value: n,
      defaultValue: r,
      placeholder: a,
      disabled: i,
      readOnly: o,
      required: u,
      "aria-describedby": p,
      rows: m,
      cols: E,
      maxLength: k,
      minLength: T,
      wrap: y,
      autoComplete: g,
      spellCheck: w,
      onChange: _,
      onBlur: j,
      onFocus: I,
      onKeyDown: A,
      ...C
    }
  );
}, Ur = ({
  id: e,
  name: t,
  value: n,
  defaultValue: r,
  disabled: a = !1,
  required: i = !1,
  hasError: o = !1,
  describedBy: u,
  className: d,
  multiple: p = !1,
  size: b,
  autoComplete: m,
  options: E,
  onChange: k,
  onBlur: T,
  onFocus: y,
  ...x
}) => {
  const g = N(
    "nhsuk-select",
    {
      "nhsuk-select--error": o
    },
    d
  );
  return /* @__PURE__ */ l.jsx(
    "select",
    {
      className: g,
      id: e,
      name: t,
      value: n,
      defaultValue: r,
      disabled: a,
      required: i,
      "aria-describedby": u,
      multiple: p,
      size: b,
      autoComplete: m,
      onChange: k,
      onBlur: T,
      onFocus: y,
      ...x,
      children: E.map((w, _) => /* @__PURE__ */ l.jsx(
        "option",
        {
          value: w.value,
          disabled: w.disabled,
          selected: w.selected,
          children: w.text
        },
        `${w.value}-${_}`
      ))
    }
  );
}, Gt = ({
  children: e,
  legend: t,
  className: n,
  describedBy: r,
  ...a
}) => {
  const i = N(
    "nhsuk-fieldset",
    n
  ), o = N(
    "nhsuk-fieldset__legend",
    {
      [`nhsuk-fieldset__legend--${t?.size}`]: t?.size
    },
    t?.className
  ), u = () => {
    const d = t?.html ? /* @__PURE__ */ l.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return t?.isPageHeading ? /* @__PURE__ */ l.jsx("h1", { className: "nhsuk-fieldset__heading", children: d }) : d;
  };
  return /* @__PURE__ */ l.jsxs(
    "fieldset",
    {
      className: i,
      "aria-describedby": r,
      ...a,
      children: [
        t && (t.text || t.html) && /* @__PURE__ */ l.jsx("legend", { className: o, children: u() }),
        e
      ]
    }
  );
}, Nr = ({
  items: e,
  name: t,
  idPrefix: n,
  legend: r,
  isPageHeading: a = !1,
  legendSize: i = "l",
  hint: o,
  errorMessage: u,
  className: d = "",
  small: p = !1,
  onChange: b,
  fieldsetAttributes: m,
  attributes: E,
  ...k
}) => {
  const [T, y] = ee(
    e.filter((f) => f.checked).map((f) => f.value)
  ), x = n || t, g = o ? `${x}-hint` : void 0, w = u ? `${x}-error` : void 0, _ = [g, w].filter(Boolean).join(" ") || void 0, j = (f, F) => {
    let K;
    F ? K = [...T, f] : K = T.filter((s) => s !== f), y(K), b?.(K);
  }, I = () => e.map((f, F) => {
    const K = `${x}-${F + 1}`, s = `${K}-conditional`, $ = T.includes(f.value), R = f.disabled || !1;
    return /* @__PURE__ */ l.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: K,
          name: t,
          type: "checkbox",
          value: f.value,
          checked: $,
          disabled: R,
          onChange: (v) => j(f.value, v.target.checked),
          "aria-describedby": f.hint ? `${K}-hint` : _,
          ...f.conditional && {
            "aria-controls": s,
            "aria-expanded": $ ? "true" : "false"
          },
          ...f.attributes
        }
      ),
      /* @__PURE__ */ l.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: K, children: f.text }),
      f.hint && /* @__PURE__ */ l.jsx("div", { id: `${K}-hint`, className: "nhsuk-checkboxes__hint", children: f.hint }),
      f.conditional && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: N("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !$
          }),
          id: s,
          children: typeof f.conditional == "object" && f.conditional !== null && "label" in f.conditional && "id" in f.conditional && "name" in f.conditional ? /* @__PURE__ */ l.jsxs("div", { style: { marginTop: "16px" }, children: [
            f.conditional.label && /* @__PURE__ */ l.jsx(Bt, { htmlFor: f.conditional.id, children: f.conditional.label }),
            /* @__PURE__ */ l.jsx(Wt, { ...f.conditional })
          ] }) : f.conditional
        }
      )
    ] }, f.value);
  }), A = N(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": p
    },
    d
  ), C = N("nhsuk-form-group", {
    "nhsuk-form-group--error": !!u
  });
  return /* @__PURE__ */ l.jsx("div", { className: C, ...E, ...k, children: /* @__PURE__ */ l.jsxs(
    Gt,
    {
      legend: r ? {
        text: r,
        isPageHeading: a,
        size: i
      } : void 0,
      describedBy: _,
      ...m,
      children: [
        o && /* @__PURE__ */ l.jsx("div", { id: g, className: "nhsuk-hint", children: o }),
        u && /* @__PURE__ */ l.jsxs("div", { id: w, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ l.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          u
        ] }),
        /* @__PURE__ */ l.jsx("div", { className: A, children: I() })
      ]
    }
  ) });
};
Nr.displayName = "Checkboxes";
const Br = ({
  name: e,
  value: t,
  defaultValue: n,
  hasError: r = !1,
  describedBy: a,
  className: i,
  size: o = "normal",
  inline: u = !1,
  options: d,
  onChange: p,
  onBlur: b,
  onFocus: m,
  ...E
}) => {
  const [k, T] = ee(t || n || ""), y = N(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": r,
      "nhsuk-radios--small": o === "small",
      "nhsuk-radios--inline": u
    },
    i
  ), x = (g) => {
    const w = g.target.value;
    T(w), p && p(g);
  };
  return /* @__PURE__ */ l.jsx(Gt, { children: /* @__PURE__ */ l.jsx("div", { className: y, ...E, children: d.map((g, w) => {
    const _ = `${e}-${w}`, j = g.conditional ? `${_}-conditional` : void 0, I = k === g.value;
    return /* @__PURE__ */ l.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ l.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: _,
          name: e,
          type: "radio",
          value: g.value,
          disabled: g.disabled,
          checked: I,
          "aria-describedby": a,
          onChange: x,
          onBlur: b,
          onFocus: m
        }
      ),
      /* @__PURE__ */ l.jsx("label", { className: "nhsuk-radios__label", htmlFor: _, children: g.text }),
      g.hint && /* @__PURE__ */ l.jsx("div", { className: "nhsuk-radios__hint", children: g.hint }),
      g.conditional && /* @__PURE__ */ l.jsx(
        "div",
        {
          className: N("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !I
          }),
          id: j,
          children: typeof g.conditional == "object" && g.conditional !== null && "label" in g.conditional && "id" in g.conditional && "name" in g.conditional ? /* @__PURE__ */ l.jsxs("div", { style: { marginTop: "16px" }, children: [
            g.conditional.label && /* @__PURE__ */ l.jsx(Bt, { htmlFor: g.conditional.id, children: g.conditional.label }),
            /* @__PURE__ */ l.jsx(Wt, { ...g.conditional })
          ] }) : g.conditional
        }
      )
    ] }, g.value);
  }) }) });
};
export {
  Ar as ActionLink,
  Fr as BackLink,
  Sr as Button,
  Nr as Checkboxes,
  Dr as ErrorMessage,
  Mr as HeaderSSR,
  Or as HeaderStatic,
  Ir as Heading,
  Rr as Hint,
  Wt as Input,
  Bt as Label,
  Br as Radios,
  Ur as Select,
  Kr as SkipLink,
  Hr as Tag,
  Vr as Textarea
};
//# sourceMappingURL=ssr.js.map
