import * as se from "react";
import ae, { createElement as te, useState as le, useEffect as X } from "react";
import k from "classnames";
var $ = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function ce() {
  if (Q) return I;
  Q = 1;
  var h = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function a(s, t, c) {
    var i = null;
    if (c !== void 0 && (i = "" + c), t.key !== void 0 && (i = "" + t.key), "key" in t) {
      c = {};
      for (var u in t)
        u !== "key" && (c[u] = t[u]);
    } else c = t;
    return t = c.ref, {
      $$typeof: h,
      type: s,
      key: i,
      ref: t !== void 0 ? t : null,
      props: c
    };
  }
  return I.Fragment = l, I.jsx = a, I.jsxs = a, I;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K;
function ie() {
  return K || (K = 1, process.env.NODE_ENV !== "production" && function() {
    function h(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === Y ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case y:
          return "Fragment";
        case C:
          return "Profiler";
        case P:
          return "StrictMode";
        case M:
          return "Suspense";
        case O:
          return "SuspenseList";
        case b:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case R:
            return "Portal";
          case S:
            return (r.displayName || "Context") + ".Provider";
          case T:
            return (r._context.displayName || "Context") + ".Consumer";
          case L:
            var o = r.render;
            return r = r.displayName, r || (r = o.displayName || o.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case v:
            return o = r.displayName || null, o !== null ? o : h(r.type) || "Memo";
          case n:
            o = r._payload, r = r._init;
            try {
              return h(r(o));
            } catch {
            }
        }
      return null;
    }
    function l(r) {
      return "" + r;
    }
    function a(r) {
      try {
        l(r);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var f = o.error, j = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return f.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), l(r);
      }
    }
    function s(r) {
      if (r === y) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === n)
        return "<...>";
      try {
        var o = h(r);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function t() {
      var r = A.A;
      return r === null ? null : r.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function i(r) {
      if (Z.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function u(r, o) {
      function f() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      f.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: f,
        configurable: !0
      });
    }
    function d() {
      var r = h(this.type);
      return U[r] || (U[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function m(r, o, f, j, E, g, D, q) {
      return f = g.ref, r = {
        $$typeof: w,
        type: r,
        key: o,
        props: g,
        _owner: E
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: d
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: q
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function x(r, o, f, j, E, g, D, q) {
      var N = o.children;
      if (N !== void 0)
        if (j)
          if (re(N)) {
            for (j = 0; j < N.length; j++)
              _(N[j]);
            Object.freeze && Object.freeze(N);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(N);
      if (Z.call(o, "key")) {
        N = h(r);
        var H = Object.keys(o).filter(function(ne) {
          return ne !== "key";
        });
        j = 0 < H.length ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}", G[N + j] || (H = 0 < H.length ? "{" + H.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          N,
          H,
          N
        ), G[N + j] = !0);
      }
      if (N = null, f !== void 0 && (a(f), N = "" + f), i(o) && (a(o.key), N = "" + o.key), "key" in o) {
        f = {};
        for (var z in o)
          z !== "key" && (f[z] = o[z]);
      } else f = o;
      return N && u(
        f,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), m(
        r,
        N,
        g,
        E,
        t(),
        f,
        D,
        q
      );
    }
    function _(r) {
      typeof r == "object" && r !== null && r.$$typeof === w && r._store && (r._store.validated = 1);
    }
    var p = ae, w = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.consumer"), S = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), n = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), Y = Symbol.for("react.client.reference"), A = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, re = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(r) {
        return r();
      }
    };
    var W, U = {}, J = p["react-stack-bottom-frame"].bind(
      p,
      c
    )(), V = B(s(c)), G = {};
    F.Fragment = y, F.jsx = function(r, o, f, j, E) {
      var g = 1e4 > A.recentlyCreatedOwnerStacks++;
      return x(
        r,
        o,
        f,
        !1,
        j,
        E,
        g ? Error("react-stack-top-frame") : J,
        g ? B(s(r)) : V
      );
    }, F.jsxs = function(r, o, f, j, E) {
      var g = 1e4 > A.recentlyCreatedOwnerStacks++;
      return x(
        r,
        o,
        f,
        !0,
        j,
        E,
        g ? Error("react-stack-top-frame") : J,
        g ? B(s(r)) : V
      );
    };
  }()), F;
}
var ee;
function oe() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? $.exports = ce() : $.exports = ie()), $.exports;
}
var e = oe();
const me = ({
  className: h,
  logo: l = {},
  service: a = {},
  organisation: s,
  search: t,
  account: c,
  navigation: i,
  containerClasses: u,
  variant: d = "default",
  attributes: m = {},
  ...x
}) => {
  const _ = a.href && !l.href || a.href && a.href === l.href, p = _ ? a.href : l.href, w = k(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || s,
      "nhsuk-header--white": d === "white"
    },
    h
  ), R = k(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), y = k(
    "nhsuk-header__navigation",
    i?.className
  ), P = () => /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": l.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ e.jsx("title", { children: l.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), C = () => l.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: l.src,
      width: "280",
      alt: l.ariaLabel || "NHS"
    }
  ) : P(), T = () => s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      s.name,
      s.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        s.split
      ] })
    ] }),
    s.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: s.descriptor })
  ] }) : null, S = (v, n) => v ? n ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: n, children: v }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: v }) : null, L = () => !i?.items || i.items.length === 0 ? null : i.items.map((v, n) => /* @__PURE__ */ e.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ e.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: v.href,
          ...v.attributes || {},
          children: v.text
        }
      )
    },
    v.href || n
  )), M = () => !c?.items || c.items.length === 0 ? null : c.items.map((v, n) => /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__account-item", children: /* @__PURE__ */ e.jsx(
    "a",
    {
      className: "nhsuk-header__account-link",
      href: v.href,
      children: v.text
    }
  ) }, v.href || n)), O = () => t ? /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search", children: /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-wrap", id: "wrap-search", children: /* @__PURE__ */ e.jsxs(
    "form",
    {
      className: "nhsuk-header__search-form",
      role: "search",
      action: t.action || "/search",
      method: "get",
      children: [
        /* @__PURE__ */ e.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: t.visuallyHiddenLabel || "Search the NHS website" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: "nhsuk-header__search-input nhsuk-input",
            id: "search-field",
            name: t.name || "q",
            type: "search",
            placeholder: t.placeholder || "Search",
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ e.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
          /* @__PURE__ */ e.jsx("svg", { className: "nhsuk-icon nhsuk-icon__search", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ e.jsx("path", { d: "m19.71 18.29-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" }) }),
          /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: t.visuallyHiddenButton || "Search" })
        ] })
      ]
    }
  ) }) }) : null;
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: w,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...m,
      ...x,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: R, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              C(),
              T(),
              _ && S(a.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              C(),
              T(),
              _ && S(a.text)
            ] }),
            a.text && !_ && S(a.text, a.href)
          ] }),
          (d === "organisation" || s) && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            s && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name", children: s.name }),
              s.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: s.descriptor })
            ] }),
            O()
          ] }),
          d !== "organisation" && !s && O(),
          c && /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__account", children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__account-list", children: M() }) })
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: y,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ e.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ e.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: L()
              }
            ) })
          }
        )
      ]
    }
  );
}, fe = ({
  className: h,
  logo: l = {},
  service: a = {},
  organisation: s,
  search: t,
  account: c,
  navigation: i,
  containerClasses: u,
  variant: d = "default",
  attributes: m = {},
  maxVisibleItems: x = 5,
  // New prop to control CSS-based overflow
  ..._
}) => {
  const p = a.href && !l.href || a.href && a.href === l.href, w = p ? a.href : l.href, R = k(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || s,
      "nhsuk-header--white": d === "white"
    },
    h
  ), y = k(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), P = k(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), C = () => /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": l.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ e.jsx("title", { children: l.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), T = () => l.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: l.src,
      alt: l.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : C(), S = () => s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      s.name,
      s.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        s.split
      ] })
    ] }),
    s.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: s.descriptor })
  ] }) : null, L = (n, b) => n ? b ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: b, children: n }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: n }) : null, M = (n) => {
    const b = n.icon ? /* @__PURE__ */ e.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ e.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, Y = n.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: n.html } }) : n.text, A = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      b,
      Y
    ] });
    return n.href ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__account-link", href: n.href, children: A }) : n.action ? /* @__PURE__ */ e.jsx(
      "form",
      {
        className: "nhsuk-header__account-form",
        action: n.action,
        method: n.method || "post",
        children: /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "nhsuk-header__account-button",
            type: "submit",
            role: "button",
            children: A
          }
        )
      }
    ) : A;
  }, O = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), v = (n) => {
    if (n.active || n.current) {
      const b = n.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: n.html } }) : n.text;
      return /* @__PURE__ */ e.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: b });
    }
    return n.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: n.html } }) : n.text;
  };
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: R,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...m,
      ..._,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: y, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            w ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: w, children: [
              T(),
              S(),
              p && L(a.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              T(),
              S(),
              p && L(a.text)
            ] }),
            a.text && !p && L(a.text, a.href)
          ] }),
          t && /* @__PURE__ */ e.jsx("search", { className: "nhsuk-header__search", children: /* @__PURE__ */ e.jsxs(
            "form",
            {
              className: "nhsuk-header__search-form",
              id: "search",
              action: t.action || "https://www.nhs.uk/search/",
              method: "get",
              children: [
                /* @__PURE__ */ e.jsx(
                  "label",
                  {
                    className: "nhsuk-u-visually-hidden",
                    htmlFor: "search-field",
                    children: t.visuallyHiddenLabel || "Search the NHS website"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: t.name || "q",
                    type: "search",
                    placeholder: t.placeholder || "Search",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ e.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
                  O(),
                  /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: t.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          c && c.items && c.items.length > 0 && /* @__PURE__ */ e.jsx(
            "nav",
            {
              className: k("nhsuk-header__account", c.className),
              "aria-label": c.ariaLabel || "Account",
              children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__account-list", children: c.items.map((n, b) => n && /* @__PURE__ */ e.jsx(
                "li",
                {
                  className: k("nhsuk-header__account-item", n.className),
                  children: M(n)
                },
                b
              )) })
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: P,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: k(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  u
                ),
                children: /* @__PURE__ */ e.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, x).map((n, b) => /* @__PURE__ */ e.jsx(
                    "li",
                    {
                      className: k(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": n.active || n.current
                        },
                        n.className
                      ),
                      ...n.attributes || {},
                      children: /* @__PURE__ */ e.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: n.href,
                          ...n.active || n.current ? {
                            "aria-current": n.current ? "page" : "true"
                          } : {},
                          children: v(n)
                        }
                      )
                    },
                    b
                  )),
                  i.items.length > x && /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ e.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
                    /* @__PURE__ */ e.jsxs("summary", { className: "nhsuk-header__navigation-summary", children: [
                      /* @__PURE__ */ e.jsx("span", { children: "More" }),
                      /* @__PURE__ */ e.jsx(
                        "svg",
                        {
                          className: "nhsuk-icon nhsuk-icon__chevron-down",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 24 24",
                          "aria-hidden": "true",
                          focusable: "false",
                          children: /* @__PURE__ */ e.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(x).map((n, b) => /* @__PURE__ */ e.jsx(
                      "li",
                      {
                        className: k(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": n.active || n.current
                          }
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: n.href,
                            ...n.active || n.current ? {
                              "aria-current": n.current ? "page" : "true"
                            } : {},
                            children: v(n)
                          }
                        )
                      },
                      `overflow-${x + b}`
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
}, _e = ({
  text: h,
  href: l,
  openInNewWindow: a = !1,
  className: s,
  ...t
}) => {
  const c = k(
    "nhsuk-action-link__link",
    s
  );
  return /* @__PURE__ */ e.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ e.jsxs(
    "a",
    {
      className: c,
      href: l,
      target: a ? "_blank" : void 0,
      rel: a ? "noopener noreferrer" : void 0,
      ...t,
      children: [
        /* @__PURE__ */ e.jsxs(
          "svg",
          {
            className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            width: "36",
            height: "36",
            children: [
              /* @__PURE__ */ e.jsx("path", { d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ e.jsx("path", { d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" })
            ]
          }
        ),
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-action-link__text", children: h })
      ]
    }
  ) });
}, he = se.forwardRef(
  ({
    variant: h = "primary",
    size: l = "default",
    isBlock: a = !1,
    className: s,
    children: t,
    disabled: c,
    type: i = "button",
    ...u
  }, d) => {
    const m = k(
      "nhsuk-button",
      {
        [`nhsuk-button--${h}`]: h !== "primary",
        [`nhsuk-button--${l}`]: l !== "default",
        "nhsuk-button--block": a,
        "nhsuk-button--disabled": c
      },
      s
    );
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: d,
        type: i,
        className: m,
        disabled: c,
        ...u,
        children: t
      }
    );
  }
);
he.displayName = "ButtonSSR";
const ke = ({
  text: h = "Back",
  html: l,
  href: a = "#",
  className: s,
  element: t = "a",
  onClick: c,
  ...i
}) => {
  const u = k(
    "nhsuk-back-link",
    s
  ), d = k(
    "nhsuk-back-link__link"
  ), m = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__chevron-left",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        height: "24",
        width: "24",
        children: /* @__PURE__ */ e.jsx("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
      }
    ),
    l ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: l } }) : h
  ] });
  return /* @__PURE__ */ e.jsx("div", { className: u, children: t === "button" ? /* @__PURE__ */ e.jsx(
    "button",
    {
      className: d,
      onClick: c,
      type: "button",
      ...i,
      children: m()
    }
  ) : /* @__PURE__ */ e.jsx(
    "a",
    {
      className: d,
      href: a,
      ...i,
      children: m()
    }
  ) });
}, xe = ({
  text: h,
  html: l,
  children: a,
  color: s = "default",
  noBorder: t = !1,
  closable: c = !1,
  onClose: i,
  disabled: u = !1,
  className: d,
  ...m
}) => {
  const x = k(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${s}`]: s !== "default",
      "nhsuk-tag--no-border": t,
      "nhsuk-tag--closable": c,
      "nhsuk-tag--disabled": u
    },
    d
  ), _ = (p) => {
    p.preventDefault(), p.stopPropagation(), !u && i && i();
  };
  return /* @__PURE__ */ e.jsxs("strong", { className: x, ...m, children: [
    a || (l ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: l } }) : h),
    c && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: _,
        disabled: u,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, pe = ({
  htmlFor: h,
  className: l,
  isPageHeading: a = !1,
  size: s = "m",
  children: t,
  ...c
}) => {
  const i = k(
    "nhsuk-label",
    {
      [`nhsuk-label--${s}`]: s !== "m"
    },
    l
  ), u = a ? "h1" : "label";
  return /* @__PURE__ */ e.jsx(
    u,
    {
      className: i,
      htmlFor: a ? void 0 : h,
      ...c,
      children: a ? /* @__PURE__ */ e.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: h, children: t }) : t
    }
  );
}, ve = ({
  level: h,
  className: l,
  text: a,
  html: s,
  children: t,
  size: c,
  marginBottom: i,
  ...u
}) => {
  const m = h ?? ((R) => {
    switch (R) {
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
  })(c), x = k(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${c}`]: c
    },
    l
  ), _ = t || (s ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: s } }) : a), p = `h${m}`, w = i ? { ...u.style, marginBottom: i } : u.style;
  return te(
    p,
    { className: x, ...u, style: w },
    _
  );
}, je = ({
  id: h,
  className: l,
  children: a,
  ...s
}) => {
  const t = k("nhsuk-hint", l);
  return /* @__PURE__ */ e.jsx("div", { className: t, id: h, ...s, children: a });
}, Ne = ({
  id: h,
  className: l,
  visuallyHiddenText: a = "Error:",
  children: s,
  ...t
}) => {
  const c = k("nhsuk-error-message", l);
  return /* @__PURE__ */ e.jsxs("span", { className: c, id: h, ...t, children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      a,
      " "
    ] }),
    s
  ] });
}, be = ({
  text: h = "Skip to main content",
  href: l = "#maincontent",
  classes: a,
  attributes: s = {}
}) => {
  const [t, c] = le(!1);
  X(() => {
    c(!0);
  }, []), X(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const u = (d) => {
      const m = d.target, x = m.getAttribute("href");
      if (x && x.startsWith("#")) {
        const _ = document.querySelector(x);
        if (_) {
          _.hasAttribute("tabindex") || _.setAttribute("tabindex", "-1"), _.focus(), _.classList.add("nhsuk-skip-link-focused-element");
          const p = window.setTimeout(() => {
            _.classList.remove("nhsuk-skip-link-focused-element"), _.getAttribute("tabindex") === "-1" && _.removeAttribute("tabindex");
          }, 3e3);
          m.__nhsSkipLinkTimeout = p;
        }
      }
    };
    try {
      const d = document.querySelectorAll(".nhsuk-skip-link");
      return d.forEach((m) => {
        m.addEventListener("click", u);
      }), () => {
        try {
          d.forEach((m) => {
            m.removeEventListener("click", u);
            const x = m.__nhsSkipLinkTimeout;
            x && window.clearTimeout && window.clearTimeout(x);
          });
        } catch (m) {
          console.warn("SkipLink cleanup error:", m);
        }
      };
    } catch (d) {
      return console.warn("SkipLink initialization error:", d), () => {
      };
    }
  }, [t]);
  const i = k("nhsuk-skip-link", a);
  return /* @__PURE__ */ e.jsx(
    "a",
    {
      className: i,
      href: l,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": t ? "true" : "false",
      ...s,
      children: h
    }
  );
};
export {
  _e as ActionLink,
  ke as BackLink,
  he as Button,
  Ne as ErrorMessage,
  me as HeaderSSR,
  fe as HeaderStatic,
  ve as Heading,
  je as Hint,
  pe as Label,
  be as SkipLink,
  xe as Tag
};
//# sourceMappingURL=ssr.js.map
