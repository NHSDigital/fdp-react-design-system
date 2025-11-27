import * as J from "react";
import tt, { useState as Oe, useEffect as nt, useCallback as fe, useRef as Ze, createElement as Yi, useMemo as Re, useContext as Zi, createContext as qi, forwardRef as On, useImperativeHandle as Ji, useId as tr, useReducer as Xi, memo as wd } from "react";
import { createPortal as _d } from "react-dom";
function Sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _r = { exports: {} }, Un = {};
var Is;
function kd() {
  if (Is) return Un;
  Is = 1;
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
  return Un.Fragment = t, Un.jsx = n, Un.jsxs = n, Un;
}
var Wn = {};
var Ds;
function Nd() {
  return Ds || (Ds = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(B) {
      if (B == null) return null;
      if (typeof B == "function")
        return B.$$typeof === T ? null : B.displayName || B.name || null;
      if (typeof B == "string") return B;
      switch (B) {
        case g:
          return "Fragment";
        case N:
          return "Profiler";
        case S:
          return "StrictMode";
        case _:
          return "Suspense";
        case j:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof B == "object")
        switch (typeof B.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), B.$$typeof) {
          case m:
            return "Portal";
          case k:
            return B.displayName || "Context";
          case C:
            return (B._context.displayName || "Context") + ".Consumer";
          case v:
            var F = B.render;
            return B = B.displayName, B || (B = F.displayName || F.name || "", B = B !== "" ? "ForwardRef(" + B + ")" : "ForwardRef"), B;
          case b:
            return F = B.displayName || null, F !== null ? F : e(B.type) || "Memo";
          case y:
            F = B._payload, B = B._init;
            try {
              return e(B(F));
            } catch {
            }
        }
      return null;
    }
    function t(B) {
      return "" + B;
    }
    function n(B) {
      try {
        t(B);
        var F = !1;
      } catch {
        F = !0;
      }
      if (F) {
        F = console;
        var L = F.error, G = typeof Symbol == "function" && Symbol.toStringTag && B[Symbol.toStringTag] || B.constructor.name || "Object";
        return L.call(
          F,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(B);
      }
    }
    function a(B) {
      if (B === g) return "<>";
      if (typeof B == "object" && B !== null && B.$$typeof === y)
        return "<...>";
      try {
        var F = e(B);
        return F ? "<" + F + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var B = M.A;
      return B === null ? null : B.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(B) {
      if (A.call(B, "key")) {
        var F = Object.getOwnPropertyDescriptor(B, "key").get;
        if (F && F.isReactWarning) return !1;
      }
      return B.key !== void 0;
    }
    function l(B, F) {
      function L() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          F
        ));
      }
      L.isReactWarning = !0, Object.defineProperty(B, "key", {
        get: L,
        configurable: !0
      });
    }
    function c() {
      var B = e(this.type);
      return H[B] || (H[B] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), B = this.props.ref, B !== void 0 ? B : null;
    }
    function d(B, F, L, G, E, O) {
      var P = L.ref;
      return B = {
        $$typeof: x,
        type: B,
        key: F,
        props: L,
        _owner: G
      }, (P !== void 0 ? P : null) !== null ? Object.defineProperty(B, "ref", {
        enumerable: !1,
        get: c
      }) : Object.defineProperty(B, "ref", { enumerable: !1, value: null }), B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(B, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(B, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: E
      }), Object.defineProperty(B, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    }
    function u(B, F, L, G, E, O) {
      var P = F.children;
      if (P !== void 0)
        if (G)
          if (I(P)) {
            for (G = 0; G < P.length; G++)
              f(P[G]);
            Object.freeze && Object.freeze(P);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(P);
      if (A.call(F, "key")) {
        P = e(B);
        var X = Object.keys(F).filter(function(Q) {
          return Q !== "key";
        });
        G = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", ne[P + G] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          P,
          X,
          P
        ), ne[P + G] = !0);
      }
      if (P = null, L !== void 0 && (n(L), P = "" + L), i(F) && (n(F.key), P = "" + F.key), "key" in F) {
        L = {};
        for (var Y in F)
          Y !== "key" && (L[Y] = F[Y]);
      } else L = F;
      return P && l(
        L,
        typeof B == "function" ? B.displayName || B.name || "Unknown" : B
      ), d(
        B,
        P,
        L,
        o(),
        E,
        O
      );
    }
    function f(B) {
      h(B) ? B._store && (B._store.validated = 1) : typeof B == "object" && B !== null && B.$$typeof === y && (B._payload.status === "fulfilled" ? h(B._payload.value) && B._payload.value._store && (B._payload.value._store.validated = 1) : B._store && (B._store.validated = 1));
    }
    function h(B) {
      return typeof B == "object" && B !== null && B.$$typeof === x;
    }
    var p = tt, x = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), k = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), T = Symbol.for("react.client.reference"), M = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, I = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(B) {
        return B();
      }
    };
    var $, H = {}, Z = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), K = D(a(s)), ne = {};
    Wn.Fragment = g, Wn.jsx = function(B, F, L) {
      var G = 1e4 > M.recentlyCreatedOwnerStacks++;
      return u(
        B,
        F,
        L,
        !1,
        G ? Error("react-stack-top-frame") : Z,
        G ? D(a(B)) : K
      );
    }, Wn.jsxs = function(B, F, L) {
      var G = 1e4 > M.recentlyCreatedOwnerStacks++;
      return u(
        B,
        F,
        L,
        !0,
        G ? Error("react-stack-top-frame") : Z,
        G ? D(a(B)) : K
      );
    };
  })()), Wn;
}
var Ts;
function Cd() {
  return Ts || (Ts = 1, process.env.NODE_ENV === "production" ? _r.exports = kd() : _r.exports = Nd()), _r.exports;
}
var r = Cd(), Oa = { exports: {} };
var Ls;
function jd() {
  return Ls || (Ls = 1, (function(e) {
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
  })(Oa)), Oa.exports;
}
var Md = jd();
const ke = /* @__PURE__ */ Sd(Md), Vv = ({
  text: e,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...o
}) => {
  const s = ke(
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
}, Ki = ({
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
    ) : null, l = s.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, c = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i,
      l
    ] });
    return s.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: s.href,
        children: c
      }
    ) : s.action ? /* @__PURE__ */ r.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ r.jsx("button", { className: "nhsuk-account__button", type: "submit", role: "button", children: c })
      }
    ) : /* @__PURE__ */ r.jsx("span", { children: c });
  };
  return /* @__PURE__ */ r.jsx(
    "nav",
    {
      className: ke(
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
            className: ke(
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
var Qi = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Reverse = "reverse", e.Warning = "warning", e.Login = "login", e.Metric = "metric", e))(Qi || {}), el = /* @__PURE__ */ ((e) => (e.Small = "small", e.Default = "default", e.Large = "large", e))(el || {});
function Id(e) {
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
const { forwardRef: Dd, useCallback: an, useState: Ua } = J;
function Td(e, t) {
  const {
    children: n,
    variant: a = Qi.Primary,
    size: o = el.Default,
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [d, u] = Ua(!1), [f, h] = Ua(!1), [p, x] = Ua(!1), m = Id({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in c ? c.href : void 0
  }), g = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", S = {
    ...d && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...g && { "data-disabled": "true" }
  }, N = an(
    () => !g && u(!0),
    [g]
  ), C = an(() => u(!1), []), k = an(
    () => !g && h(!0),
    [g]
  ), v = an(() => {
    h(!1), u(!1);
  }, []), _ = an(() => x(!0), []), j = an(() => x(!1), []), b = an(
    (X) => {
      X.key === " " && ("href" in c || X.currentTarget.getAttribute("role") === "button") && (X.preventDefault(), X.currentTarget.click());
    },
    [c]
  ), y = an(
    (X) => {
      if (l) {
        const Y = X.currentTarget;
        if (Y.getAttribute("data-processing") === "true") {
          X.preventDefault();
          return;
        }
        Y.setAttribute("data-processing", "true"), setTimeout(() => {
          Y.removeAttribute("data-processing");
        }, 1e3);
      }
    },
    [l]
  );
  if ("href" in c && c.href) {
    const {
      id: X,
      style: Y,
      title: Q,
      ["aria-label"]: de,
      ["aria-describedby"]: V,
      ["aria-labelledby"]: ae,
      tabIndex: le,
      ...be
    } = c, pe = c;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: pe.href,
        target: pe.target,
        rel: pe.rel,
        className: m.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...S,
        ...l && { "data-prevent-double-click": "true" },
        ...be,
        onKeyDown: (Ie) => {
          pe.onKeyDown?.(Ie), b(Ie);
        },
        onClick: (Ie) => {
          pe.onClick?.(Ie), y(Ie);
        },
        onMouseDown: (Ie) => {
          pe.onMouseDown?.(Ie), N();
        },
        onMouseUp: (Ie) => {
          pe.onMouseUp?.(Ie), C();
        },
        onMouseEnter: (Ie) => {
          pe.onMouseEnter?.(Ie), k();
        },
        onMouseLeave: (Ie) => {
          pe.onMouseLeave?.(Ie), v();
        },
        onFocus: (Ie) => {
          pe.onFocus?.(Ie), _();
        },
        onBlur: (Ie) => {
          pe.onBlur?.(Ie), j();
        },
        "aria-disabled": pe["aria-disabled"],
        ...pe["aria-disabled"] === "true" && { tabIndex: -1 },
        id: X,
        style: Y,
        title: Q,
        "aria-label": de,
        "aria-describedby": V,
        "aria-labelledby": ae,
        tabIndex: le,
        children: n
      }
    );
  }
  const {
    id: w,
    style: T,
    title: M,
    ["aria-label"]: A,
    ["aria-describedby"]: I,
    ["aria-labelledby"]: D,
    tabIndex: $,
    name: H,
    value: Z,
    form: K,
    formAction: ne,
    formEncType: B,
    formMethod: F,
    formNoValidate: L,
    formTarget: G,
    autoFocus: E,
    ...O
  } = c, P = c;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: P.type || "button",
      disabled: P.disabled,
      className: m.classes,
      "data-module": "nhs-button",
      ...S,
      ...l && { "data-prevent-double-click": "true" },
      ...P.disabled && { "aria-disabled": "true" },
      ...O,
      onKeyDown: (X) => {
        P.onKeyDown?.(X), b(X);
      },
      onClick: (X) => {
        P.onClick?.(X), y(X);
      },
      onMouseDown: (X) => {
        P.onMouseDown?.(X), N();
      },
      onMouseUp: (X) => {
        P.onMouseUp?.(X), C();
      },
      onMouseEnter: (X) => {
        P.onMouseEnter?.(X), k();
      },
      onMouseLeave: (X) => {
        P.onMouseLeave?.(X), v();
      },
      onFocus: (X) => {
        P.onFocus?.(X), _();
      },
      onBlur: (X) => {
        P.onBlur?.(X), j();
      },
      id: w,
      style: T,
      title: M,
      "aria-label": A,
      "aria-describedby": I,
      "aria-labelledby": D,
      tabIndex: $,
      name: H,
      value: Z,
      form: K,
      formAction: ne,
      formEncType: B,
      formMethod: F,
      formNoValidate: L,
      formTarget: G,
      autoFocus: E,
      children: n
    }
  );
}
const xt = Dd(Td);
xt.displayName = "Button";
const nr = ({
  text: e = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ke(
    "nhsuk-back-link",
    a
  ), c = ke(
    "nhsuk-back-link__link"
  ), d = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
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
      className: c,
      onClick: s,
      type: "button",
      ...i,
      children: d()
    }
  ) : /* @__PURE__ */ r.jsx(
    "a",
    {
      className: c,
      href: n,
      ...i,
      children: d()
    }
  ) });
};
function Ld(e) {
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
const st = ({
  text: e,
  html: t,
  children: n,
  color: a = "default",
  noBorder: o = !1,
  closable: s = !1,
  onClose: i,
  disabled: l = !1,
  className: c,
  ...d
}) => {
  const u = Ld({ color: a, noBorder: o, closable: s, disabled: l, className: c }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ r.jsxs("strong", { className: u.classes, ...d, children: [
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
}, $d = ({
  id: e,
  name: t,
  checked: n,
  defaultChecked: a = !1,
  disabled: o = !1,
  value: s = "true",
  hint: i,
  errorMessage: l,
  className: c,
  children: d,
  onChange: u,
  onBlur: f,
  onFocus: h,
  attributes: p,
  ...x
}) => {
  const [m, g] = Oe(a), S = n !== void 0, N = S ? n : m;
  nt(() => {
    S || g(a);
  }, [a, S]);
  const C = (b) => {
    const y = b.target.checked;
    S || g(y), u?.(y, b);
  }, k = i ? `${e}-hint` : void 0, v = l ? `${e}-error` : void 0, _ = [k, v].filter(Boolean).join(" ") || void 0, j = ke(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ r.jsx("div", { className: j, ...x, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: N,
        disabled: o,
        onChange: C,
        onBlur: f,
        onFocus: h,
        "aria-describedby": _,
        ...p
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: d }),
    i && /* @__PURE__ */ r.jsx("div", { id: k, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: v, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
$d.displayName = "Checkbox";
function tl(e) {
  const n = (e.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    e.hasError ? "nhsuk-input--error" : "",
    n ? "nhsuk-input--range" : "",
    !n && e.width && e.width !== "full" ? `nhsuk-input--width-${e.width}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), isRange: n };
}
const Qo = ({
  id: e,
  name: t,
  type: n = "text",
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
  inputMode: p,
  autoComplete: x,
  maxLength: m,
  minLength: g,
  pattern: S,
  step: N,
  min: C,
  max: k,
  showValueLabels: v = !1,
  showCurrentValue: _ = !1,
  valueLabels: j,
  onChange: b,
  onBlur: y,
  onFocus: w,
  onKeyDown: T,
  ...M
}) => {
  const [A, I] = Oe(a || o || (n === "range" ? C || "0" : ""));
  nt(() => {
    a !== void 0 && I(a);
  }, [a]);
  const D = (G) => {
    const E = G.target;
    I(E.value), ("type" in G && G.nativeEvent || G.type === "keydown") && b?.(G);
  }, { classes: $, isRange: H } = tl({ type: n, hasError: d, width: h, className: f }), Z = a !== void 0, K = {
    id: e,
    name: t,
    type: n,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: c,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: x,
    maxLength: m,
    minLength: g,
    pattern: S,
    step: N,
    min: C,
    max: k,
    onChange: D,
    onBlur: y,
    onFocus: w,
    onKeyDown: (G) => {
      if (H && /[0-9]/.test(G.key)) {
        const E = (A?.toString() || "") + G.key;
        G.target.value = E, D(G);
      }
      T?.(G);
    },
    ...M
  }, ne = !Z && o !== void 0 ? { defaultValue: o } : {}, B = Z ? { value: a } : {}, F = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: $,
      ...B,
      ...ne,
      "data-current-value": A,
      ...K
    }
  ), L = H ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    v && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: j?.min || C || "0" }),
      F(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: j?.max || k || "100" })
    ] }),
    !v && F(),
    _ && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      j?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: A })
    ] }) })
  ] }) : null;
  return H ? L : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: $,
      id: e,
      name: t,
      type: n,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: c,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: x,
      maxLength: m,
      minLength: g,
      pattern: S,
      step: N,
      min: C,
      max: k,
      onChange: b,
      onBlur: y,
      onFocus: w,
      onKeyDown: T,
      ...M
    }
  );
};
function Ad(e) {
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
const es = ({
  htmlFor: e,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = Ad({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
};
function Ed(e) {
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
const ts = ({
  children: e,
  legend: t,
  className: n,
  describedBy: a,
  ...o
}) => {
  const s = Ed({
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
function Fd(e) {
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
const Pd = ({
  items: e,
  name: t,
  idPrefix: n,
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
  ...p
}) => {
  const [x, m] = Oe(
    e.filter((b) => b.checked).map((b) => b.value)
  ), g = n || t, S = i ? `${g}-hint` : void 0, N = l ? `${g}-error` : void 0, C = [S, N].filter(Boolean).join(" ") || void 0, k = (b, y) => {
    let w;
    y ? w = [...x, b] : w = x.filter((T) => T !== b), m(w), u?.(w);
  }, v = () => e.map((b, y) => {
    const w = `${g}-${y + 1}`, T = `${w}-conditional`, M = x.includes(b.value), A = b.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: w,
          name: t,
          type: "checkbox",
          value: b.value,
          checked: M,
          disabled: A,
          onChange: (I) => k(b.value, I.target.checked),
          "aria-describedby": b.hint ? `${w}-hint` : C,
          ...b.conditional && {
            "aria-controls": T,
            "aria-expanded": M ? "true" : "false"
          },
          ...b.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: w, children: b.text }),
      b.hint && /* @__PURE__ */ r.jsx("div", { id: `${w}-hint`, className: "nhsuk-checkboxes__hint", children: b.hint }),
      b.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ke("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !M
          }),
          id: T,
          children: typeof b.conditional == "object" && b.conditional !== null && "label" in b.conditional && "id" in b.conditional && "name" in b.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            b.conditional.label && /* @__PURE__ */ r.jsx(es, { htmlFor: b.conditional.id, children: b.conditional.label }),
            /* @__PURE__ */ r.jsx(Qo, { ...b.conditional })
          ] }) : b.conditional
        }
      )
    ] }, b.value);
  }), { classes: _, formGroupClasses: j } = Fd({ small: d, className: c, hasError: !!l });
  return /* @__PURE__ */ r.jsx("div", { className: j, ...h, ...p, children: /* @__PURE__ */ r.jsxs(
    ts,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: C,
      ...f,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: S, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: N, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: _, children: v() })
      ]
    }
  ) });
};
Pd.displayName = "Checkboxes";
function Rd(e) {
  const t = e.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    e.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
const Bd = ({
  id: e,
  name: t,
  value: n,
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
  maxLength: p,
  minLength: x,
  wrap: m = "soft",
  resize: g = "vertical",
  autoComplete: S,
  spellCheck: N,
  onChange: C,
  onBlur: k,
  onFocus: v,
  onKeyDown: _,
  ...j
}) => {
  const { classes: b, describedBy: y } = Rd({ hasError: c, resize: g, className: u, describedBy: d });
  return /* @__PURE__ */ r.jsx(
    "textarea",
    {
      className: b,
      id: e,
      name: t,
      value: n,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": y,
      rows: f,
      cols: h,
      maxLength: p,
      minLength: x,
      wrap: m,
      autoComplete: S,
      spellCheck: N,
      onChange: C,
      onBlur: k,
      onFocus: v,
      onKeyDown: _,
      ...j
    }
  );
};
function Hd(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const nl = ({
  id: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = Hd({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, Yv = ({
  id: e,
  maxLength: t,
  maxWords: n,
  threshold: a = 75,
  name: o,
  value: s,
  defaultValue: i,
  rows: l,
  className: c,
  countMessage: d,
  onCountChange: u,
  onChange: f,
  ...h
}) => {
  const p = s ?? i ?? "", [x, m] = Oe(p), [g, S] = Oe(0), [N, C] = Oe(!1), [k, v] = Oe(!1), _ = fe((M) => n ? M.trim() === "" ? 0 : M.trim().split(/\s+/).length : M.length, [n]);
  nt(() => {
    const M = _(x), A = t || n || 0, I = A - M, D = Math.floor(A * (a / 100));
    S(I), C(M > A), v(M >= D || M > A), u && u(M, I);
  }, [x, t, n, a, _, u]);
  const j = (M) => {
    const A = M.target.value;
    m(A), f && f(M);
  }, b = () => {
    const M = t || n || 0, A = n ? "word" : "character", I = n ? "words" : "characters";
    if (!k)
      return `You can enter up to ${M} ${M === 1 ? A : I}`;
    if (N) {
      const D = Math.abs(g);
      return `You have ${D} ${D === 1 ? A : I} too many`;
    } else
      return `You have ${g} ${g === 1 ? A : I} remaining`;
  }, y = ke(
    "nhsuk-character-count",
    c
  ), w = ke(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !k,
      "nhsuk-error-message": N
    },
    d?.classes
  ), T = ke(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": N
    }
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": n,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ r.jsx(
          Bd,
          {
            id: e,
            name: o,
            value: s !== void 0 ? x : void 0,
            defaultValue: s === void 0 ? i ?? x : void 0,
            rows: l,
            className: T,
            onChange: j,
            "aria-describedby": `${e}-info`,
            "aria-invalid": N || void 0,
            ...h
          }
        ),
        /* @__PURE__ */ r.jsx(
          nl,
          {
            id: `${e}-info`,
            className: w,
            role: "status",
            "aria-live": "polite",
            children: b()
          }
        )
      ]
    }
  );
};
function zd(e) {
  return { classes: [
    "nhsuk-select",
    e.hasError ? "nhsuk-select--error" : "",
    e.className || ""
  ].filter(Boolean).join(" ") };
}
const Od = ({
  value: e,
  disabled: t = !1,
  selected: n = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = ke(
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
}, Ud = ({
  id: e,
  name: t,
  ariaLabel: n,
  value: a,
  defaultValue: o,
  disabled: s = !1,
  required: i = !1,
  hasError: l = !1,
  describedBy: c,
  className: d,
  multiple: u = !1,
  size: f,
  autoComplete: h,
  options: p,
  children: x,
  onChange: m,
  onBlur: g,
  onFocus: S,
  ...N
}) => {
  const { classes: C } = zd({ hasError: l, className: d }), k = () => p ? p.map((_, j) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: _.value,
      disabled: _.disabled,
      "data-initial-selected": _.selected || void 0,
      children: _.text
    },
    `${_.value}-${j}`
  )) : null, v = o === void 0 && a === void 0 && p ? p.find((_) => _.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: C,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : v,
      disabled: s,
      required: i,
      "aria-describedby": c,
      multiple: u,
      size: f,
      autoComplete: h,
      onChange: m,
      onBlur: g,
      onFocus: S,
      ...N,
      children: x || k()
    }
  );
}, $r = Ud;
$r.Option = Od;
function Wd(e) {
  return { classes: [
    "nhsuk-radios",
    e.hasError ? "nhsuk-radios--error" : "",
    e.size === "small" ? "nhsuk-radios--small" : "",
    e.inline ? "nhsuk-radios--inline" : "",
    e.className || ""
  ].filter(Boolean).join(" "), describedBy: e.describedBy };
}
function rl(e, {
  variant: t,
  selectedValue: n,
  enableBehaviourAttr: a,
  handleChange: o,
  handleBlur: s,
  handleFocus: i,
  handleKeyDown: l,
  itemsRef: c,
  InputComponent: d
}) {
  const {
    onChange: u,
    onBlur: f,
    onFocus: h,
    ...p
  } = e, {
    name: x,
    hasError: m = !1,
    describedBy: g,
    className: S,
    size: N = "normal",
    inline: C = !1,
    options: k,
    ...v
  } = p, { classes: _, describedBy: j } = Wd({ hasError: m, size: N, inline: C, className: S, describedBy: g });
  return /* @__PURE__ */ r.jsx(ts, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: _,
      ...v,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: k.map((b, y) => {
        const w = `${x}-${y}`, T = b.conditional ? `${w}-conditional` : void 0, M = n === b.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: w,
              name: x,
              type: "radio",
              value: b.value,
              disabled: b.disabled,
              ...t === "client" ? {
                checked: M,
                onChange: o,
                onBlur: s,
                onFocus: i,
                onKeyDown: l,
                ref: (A) => {
                  A && c && (c.current[y] = A);
                }
              } : {
                defaultChecked: M,
                "data-nhs-radios-input": !0
              },
              "aria-describedby": j
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: w, children: b.text }),
          b.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: b.hint }),
          b.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ke("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !M
              }),
              id: T,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof b.conditional == "object" && b.conditional !== null && "label" in b.conditional && "id" in b.conditional && "name" in b.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                b.conditional.label && /* @__PURE__ */ r.jsx(
                  es,
                  {
                    htmlFor: b.conditional.id,
                    children: b.conditional.label
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  d,
                  {
                    ...b.conditional
                  }
                )
              ] }) : b.conditional
            }
          )
        ] }, b.value);
      })
    }
  ) });
}
const Zv = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = Oe(e || t || ""), c = Ze([]), d = Ze(i), u = (p) => {
    const x = p.target.value;
    x !== d.current && (d.current = x, l(x), n?.(p));
  }, f = (p) => {
    o?.(p);
  }, h = fe((p) => {
    const { key: x } = p;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(x)) return;
    p.preventDefault();
    const m = c.current.filter((C) => C && !C.disabled), g = m.indexOf(p.currentTarget);
    if (g === -1) return;
    let S = g;
    ["ArrowDown", "ArrowRight"].includes(x) ? S = (g + 1) % m.length : ["ArrowUp", "ArrowLeft"].includes(x) && (S = (g - 1 + m.length) % m.length);
    const N = m[S];
    N && (N.focus(), N.checked || N.click());
  }, []);
  return rl(
    { value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s },
    {
      variant: "client",
      selectedValue: i,
      enableBehaviourAttr: !1,
      handleChange: u,
      handleBlur: a,
      handleFocus: f,
      // wrapped to suppress duplicate focus calls
      handleKeyDown: h,
      itemsRef: c,
      InputComponent: Qo
    }
  );
};
function Gd(e) {
  const {
    id: t,
    name: n,
    type: a = "text",
    value: o,
    defaultValue: s,
    placeholder: i,
    disabled: l = !1,
    readOnly: c = !1,
    required: d = !1,
    hasError: u = !1,
    describedBy: f,
    className: h,
    width: p = "full",
    inputMode: x,
    autoComplete: m,
    maxLength: g,
    minLength: S,
    pattern: N,
    step: C,
    min: k,
    max: v,
    showValueLabels: _ = !1,
    showCurrentValue: j = !1,
    valueLabels: b,
    // Strip interactive handlers in server variant
    onChange: y,
    onBlur: w,
    onFocus: T,
    onKeyDown: M,
    ...A
  } = e, { classes: I, isRange: D } = tl({
    type: a,
    hasError: u,
    width: p,
    className: h
  }), $ = {
    id: t,
    name: n,
    type: a,
    placeholder: i,
    disabled: l,
    readOnly: c,
    required: d,
    "aria-describedby": f,
    inputMode: x,
    autoComplete: m,
    maxLength: g,
    minLength: S,
    pattern: N,
    step: C,
    min: k,
    max: v,
    ...A
  };
  if (D) {
    const H = o ?? s ?? (typeof k < "u" ? String(k) : "0"), Z = /* @__PURE__ */ r.jsx(
      "input",
      {
        className: I,
        ...o !== void 0 ? { value: o } : {},
        ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
        "data-current-value": H,
        ...$
      }
    );
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
      _ ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: b?.min || k || "0" }),
        Z,
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: b?.max || v || "100" })
      ] }) : Z,
      j && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
        b?.current || "Current value:",
        " ",
        /* @__PURE__ */ r.jsx("strong", { children: H })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ r.jsx(
    "input",
    {
      className: I,
      ...o !== void 0 ? { value: o } : {},
      ...o === void 0 && s !== void 0 ? { defaultValue: s } : {},
      ...$
    }
  );
}
const qv = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return rl(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0,
      InputComponent: Gd
    }
  );
};
var bn = /* @__PURE__ */ ((e) => (e.OneQuarter = "one-quarter", e.OneThird = "one-third", e.OneHalf = "one-half", e.TwoThirds = "two-thirds", e.ThreeQuarters = "three-quarters", e.Full = "full", e))(bn || {}), Vd = /* @__PURE__ */ ((e) => (e.Mobile = "mobile", e.Tablet = "tablet", e.Desktop = "desktop", e.LargeDesktop = "large-desktop", e))(Vd || {}), Yd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Right = "right", e))(Yd || {}), Zd = /* @__PURE__ */ ((e) => (e.Left = "left", e.Center = "center", e.Right = "right", e))(Zd || {});
const al = ({
  children: e,
  className: t,
  fluid: n = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = ke(
    {
      "nhsuk-width-container": !n,
      "nhsuk-width-container-fluid": n
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ r.jsx("div", { className: i, style: l, ...s, children: e });
}, ln = ({
  children: e,
  className: t,
  style: n,
  align: a,
  rowGap: o,
  ...s
}) => {
  const i = ke(
    "nhsuk-grid-row",
    // Row-specific alignment class to avoid column flex styles
    a ? `nhsuk-grid-row-align-${a}` : void 0,
    t
  );
  return /* @__PURE__ */ r.jsx("div", { className: i, style: n, ...s, children: e });
}, rr = ({
  children: e,
  width: t = bn.Full,
  mobileWidth: n,
  tabletWidth: a,
  desktopWidth: o,
  start: s,
  className: i,
  forceWidth: l = !1,
  style: c,
  align: d,
  ...u
}) => {
  const f = ke(
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
      ...d ? { [`nhsuk-grid-align-${d}`]: !0 } : {}
    },
    i
  );
  return /* @__PURE__ */ r.jsx("div", { className: f, style: c, ...u, children: e });
}, co = ({
  children: e,
  className: t,
  style: n,
  rowGap: a = 8,
  ...o
}) => {
  const s = tt.Children.toArray(e), i = s[0], l = tt.isValidElement(i) && (i.type === ln || typeof i.props == "object" && i.props && "className" in i.props && typeof i.props.className == "string" && i.props.className.includes("nhsuk-grid-row")), c = typeof a == "number" ? `${a}px` : a;
  let d = e;
  if (l)
    d = s.map((u, f) => {
      if (!tt.isValidElement(u)) return u;
      const h = u, p = h.props || {}, x = typeof p.className == "string" ? p.className : "";
      if (!(h.type === ln || x.includes("nhsuk-grid-row"))) return u;
      const g = p.rowGap, S = g !== void 0 ? typeof g == "number" ? `${g}px` : g : c, N = f === 0 ? void 0 : S;
      if (!N) return u;
      const C = { ...p.style || {}, marginTop: N };
      return tt.cloneElement(h, { style: C });
    });
  else {
    const u = { marginTop: void 0 };
    d = /* @__PURE__ */ r.jsx(ln, { style: u, children: e });
  }
  return /* @__PURE__ */ r.jsx(al, { className: t, style: n, ...o, children: d });
}, qd = ({
  children: e,
  type: t = "bullet",
  size: n = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), d = ke(
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
  return /* @__PURE__ */ r.jsx(c, { className: d, role: s, ...l, children: e });
}, Jd = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ke("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, Xd = qd;
Xd.Item = Jd;
const Jv = ({
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
}, Xv = {
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
}, Kv = ({
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
}, Qv = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, e1 = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ol = ({
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
function Kd(e) {
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
function Qd(e) {
  const t = e.level ?? Kd(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const Ht = ({
  level: e,
  className: t,
  text: n,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const c = Qd({ level: e, size: s, className: t, marginBottom: i }), d = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return Yi(
    c.tag,
    { className: c.classes, style: c.style, ...l },
    d
  );
};
function eu(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const $s = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = eu({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, t1 = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: n,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const c = Ze(null);
  nt(() => {
    c.current && c.current.focus();
  }, []);
  const d = ke(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, h = (p) => {
    const x = p.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
    return p.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: p.href,
        ...p.attributes,
        children: x
      }
    ) : x;
  };
  return /* @__PURE__ */ r.jsxs(
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
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (n || a) && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((p, x) => /* @__PURE__ */ r.jsx("li", { children: h(p) }, x)) })
        ] })
      ]
    }
  );
}, n1 = ({
  id: e,
  className: t,
  items: n,
  namePrefix: a,
  values: o = {},
  fieldset: s,
  hint: i,
  errorMessage: l,
  onChange: c,
  ...d
}) => {
  const [u, f] = Oe(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [h, p] = Oe({}), x = (D) => D % 4 === 0 && D % 100 !== 0 || D % 400 === 0, m = (D, $) => {
    const H = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return D === 2 && x($) ? 29 : H[D - 1];
  }, g = (D, $, H) => {
    if (!D) return;
    if (!/^\d+$/.test(D)) return "Day must be a number";
    const Z = parseInt(D, 10);
    if (Z < 1 || Z > 31) return "Day must be between 1 and 31";
    if ($ && H) {
      const K = parseInt($, 10), ne = parseInt(H, 10);
      if (!isNaN(K) && !isNaN(ne) && K >= 1 && K <= 12) {
        const B = m(K, ne);
        if (Z > B)
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
          ][K - 1]} ${ne} only has ${B} days`;
      }
    }
  }, S = (D) => {
    if (!D) return;
    if (!/^\d+$/.test(D)) return "Month must be a number";
    const $ = parseInt(D, 10);
    if ($ < 1 || $ > 12) return "Month must be between 1 and 12";
  }, N = (D) => {
    if (!D) return;
    if (!/^\d+$/.test(D)) return "Year must be a number";
    const $ = parseInt(D, 10), H = (/* @__PURE__ */ new Date()).getFullYear();
    if ($ < 1900 || $ > H + 10)
      return `Year must be between 1900 and ${H + 10}`;
  }, C = (D, $, H) => {
    if (!D || !$ || !H) return;
    const Z = parseInt(D, 10), K = parseInt($, 10), ne = parseInt(H, 10);
    if (isNaN(Z) || isNaN(K) || isNaN(ne) || K < 1 || K > 12 || ne < 1900) return;
    const B = m(K, ne);
    Z < 1 || Z > B;
  }, k = fe(
    (D, $) => {
      const H = {
        ...u,
        [D]: $
      };
      f(H), c && c(H);
    },
    [u, c]
  ), v = fe(
    (D) => {
      const $ = u[D];
      let H;
      if (D === "day")
        H = g(
          $,
          u.month,
          u.year
        );
      else if (D === "month") {
        if (H = S($), !H && u.day) {
          const Z = g(
            u.day,
            $,
            u.year
          );
          p((K) => ({
            ...K,
            day: Z
          }));
        }
      } else if (D === "year" && (H = N($), !H && u.day && u.month)) {
        const Z = g(
          u.day,
          u.month,
          $
        );
        p((K) => ({
          ...K,
          day: Z
        }));
      }
      if (p((Z) => ({
        ...Z,
        [D]: H
      })), u.day && u.month && u.year) {
        const Z = C(
          D === "day" ? $ : u.day,
          D === "month" ? $ : u.month,
          D === "year" ? $ : u.year
        );
        Z && p((K) => ({
          ...K,
          day: Z
        }));
      }
    },
    [u, g, S, N, C]
  ), _ = Re(
    () => [
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
    ],
    []
  ), j = n || _;
  let b = s?.describedBy || "";
  const y = i ? `${e}-hint` : "", w = l ? `${e}-error` : "";
  y && (b = b ? `${b} ${y}` : y), w && (b = b ? `${b} ${w}` : w);
  const T = Object.values(h).some((D) => D), M = ke("nhsuk-form-group", {
    "nhsuk-form-group--error": l || T
  }), A = ke("nhsuk-date-input", t), I = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(nl, { id: y, className: i.classes, children: i.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text }),
    l && /* @__PURE__ */ r.jsx($s, { id: w, className: l.classes, children: l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text }),
    Object.entries(h).map(
      ([D, $]) => $ ? /* @__PURE__ */ r.jsxs(
        $s,
        {
          id: `${e}-${D}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            $
          ]
        },
        `${D}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: A,
        id: e,
        "data-testid": "date-input",
        ...d,
        children: j.map((D) => {
          const $ = D.id || `${e}-${D.name}`, H = a ? `${a}[${D.name}]` : D.name, Z = D.label || D.name.charAt(0).toUpperCase() + D.name.slice(1), K = h[D.name], ne = u[D.name] || "";
          let B = b;
          if (K) {
            const F = `${e}-${D.name}-error`;
            B = B ? `${B} ${F}` : F;
          }
          return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
            /* @__PURE__ */ r.jsx(es, { htmlFor: $, className: "nhsuk-date-input__label", children: Z }),
            /* @__PURE__ */ r.jsx(
              Qo,
              {
                id: $,
                name: H,
                value: ne,
                className: ke("nhsuk-date-input__input", D.classes, {
                  "nhsuk-input--error": K
                }),
                inputMode: D.inputmode,
                autoComplete: D.autocomplete,
                pattern: D.pattern,
                "aria-describedby": B || void 0,
                hasError: !!K,
                onChange: (F) => k(D.name, F.target.value),
                onBlur: () => v(D.name)
              }
            )
          ] }, D.name);
        })
      }
    )
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: M, children: s ? /* @__PURE__ */ r.jsx(
    ts,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: b || void 0,
      children: I()
    }
  ) : I() });
}, sl = {
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
}, il = qi(sl), tu = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...sl, ...t };
  return /* @__PURE__ */ r.jsx(il.Provider, { value: n, children: e });
}, r1 = () => {
  const e = Zi(il);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function nu() {
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
function ru() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = nu(), document.head.appendChild(e);
}
const a1 = ({ children: e, theme: t }) => (nt(() => {
  ru();
}, []), /* @__PURE__ */ r.jsx(tu, { theme: t, children: e })), au = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", ou = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", su = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", iu = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", lu = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", cu = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", du = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var ns = /* @__PURE__ */ ((e) => (e.NHS = "nhs", e.FDP = "fdp", e))(ns || {}), rs = /* @__PURE__ */ ((e) => (e.Full = "full", e.Graphic = "graphic", e.Inverse = "inverse", e.TwoLine = "twoLine", e.TwoLineInverse = "twoLineInverse", e.Compact = "compact", e.CompactInverted = "compactInverted", e))(rs || {});
const uu = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: au,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: lu,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: iu,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: ou,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: su,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: cu,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: du,
      ariaLabel: "FDP"
    }
  }
};
function ll(e, t = "full") {
  return uu[e]?.[t];
}
function fu(e, {
  variant: t,
  isClient: n,
  menuOpen: a = !1,
  showMoreButton: o = !1,
  visibleItems: s,
  dropdownVisible: i,
  toggleMenu: l,
  navContainerRef: c,
  navListRef: d,
  searchNode: u,
  brand: f
}) {
  const {
    className: h,
    logo: p = {},
    service: x = {},
    serviceName: m,
    organisation: g,
    search: S,
    account: N,
    navigation: C,
    containerClasses: k,
    variant: v = "default",
    attributes: _ = {},
    fullWidth: j = !1,
    maxVisibleItems: b,
    // deprecated (ignored)
    responsiveNavigation: y = !0,
    logoVariant: w = rs.Full,
    // Prevent leaking to DOM when ...rest is spread
    logoVariant: T,
    ...M
  } = e, A = {
    ...x,
    text: x?.text ?? m
  };
  "maxVisibleItems" in M && delete M.maxVisibleItems;
  const I = A.href && !p.href || A.href && A.href === p.href, D = I ? A.href : p.href, H = f ?? (typeof document > "u" ? "nhs" : document.documentElement.getAttribute("data-brand") === "fdp" ? "fdp" : "nhs"), Z = ke(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": v === "organisation" || g,
      "nhsuk-header--white": v === "white"
    },
    h
  ), K = ke(
    "nhsuk-header__container",
    {
      "nhsuk-header__container--full-width": j && H === "nhs"
    },
    k
  ), ne = ke(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": C?.white,
      "nhsuk-header__navigation--justified": C?.justified
    },
    C?.className
  ), B = () => /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": p.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ r.jsx("title", { children: p.ariaLabel || "NHS" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), F = () => {
    if (p.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: p.src,
          width: "280",
          alt: p.ariaLabel || (H === "fdp" ? "FDP" : "NHS")
        }
      );
    if (H === "fdp") {
      const P = ll(ns.FDP, w);
      if (P?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: P.src,
            "data-logo-variant": w,
            width: "280",
            alt: P.ariaLabel || "FDP"
          }
        );
    }
    return B();
  }, L = () => g ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, G = (P, X) => P ? X ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: X, children: P }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: P }) : null, E = (P) => P.active || P.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: P.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: P.html } }) : P.text }) : P.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: P.html } }) : P.text, O = () => /* @__PURE__ */ r.jsx(
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
  return C?.items, /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: Z,
      role: "banner",
      "data-module": "nhsuk-header",
      ..._,
      ...M,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: K, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            D ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: D, children: [
              F(),
              L(),
              I && G(A.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              F(),
              L(),
              I && G(A.text)
            ] }),
            A.text && !I && G(A.text, A.href)
          ] }),
          u ?? null,
          /* @__PURE__ */ r.jsx(
            Ki,
            {
              ...N,
              variant: v === "white" ? "white" : "default"
            }
          )
        ] }),
        C && C.items && C.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: ne,
            "aria-label": C.ariaLabel || "Menu",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ke(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": n && t === "client",
                    "nhsuk-header__navigation-container--ssr": !n
                  },
                  k
                ),
                ref: c,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: d,
                    children: [
                      (C?.items || []).map((P, X) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ke(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": P.active || P.current,
                              "nhsuk-header__navigation-item--hidden": o && s !== void 0 && X >= (s ?? 0)
                            },
                            P.className
                          ),
                          ...P.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: P.href,
                              ...P.active || P.current ? { "aria-current": P.current ? "page" : "true" } : {},
                              children: E(P)
                            }
                          )
                        },
                        X
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
                            O()
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
        n && C && C.items && C.items.length > 0 && a && i && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !i,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: C.items.slice(s ?? 0).map((P, X) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ke("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": P.active || P.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: P.href,
                    ...P.active || P.current ? { "aria-current": P.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: E(P)
                  }
                )
              },
              `overflow-${(s ?? 0) + X}`
            )) })
          }
        ),
        t === "server"
      ]
    }
  );
}
const uo = qi(void 0);
function o1({ brand: e = "nhs", scope: t = "document", children: n }) {
  const [a, o] = Oe(e);
  nt(() => {
    o(e);
  }, [e]), nt(() => {
    if (t === "document")
      return document.documentElement.setAttribute("data-brand", a), () => {
      };
  }, [a, t]);
  const s = Re(() => ({ brand: a, setBrand: o }), [a]);
  return t === "local" ? /* @__PURE__ */ r.jsx(uo.Provider, { value: s, children: /* @__PURE__ */ r.jsx("div", { "data-brand": a, children: n }) }) : /* @__PURE__ */ r.jsx(uo.Provider, { value: s, children: n });
}
function hu() {
  const e = Zi(uo);
  if (!e) throw new Error("useBrand must be used within BrandThemeProvider");
  return e;
}
const pu = ({
  mode: e = "form",
  action: t = "/search",
  method: n = "get",
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
  results: p = [],
  formAttributes: x = {},
  inputAttributes: m = {},
  buttonAttributes: g = {},
  preventDefaultSubmit: S = !1,
  debounceMs: N = 300,
  minQueryLength: C = 1
}) => {
  const [k, v] = Oe(""), [_, j] = Oe(!1), b = Ze(void 0), y = Ze(null), w = Ze(null), T = e === "controlled" && o !== void 0, M = T ? o : k, A = fe(
    (L) => {
      b.current && clearTimeout(b.current), b.current = setTimeout(() => {
        u.onChange && L.length >= C && u.onChange(L);
      }, N);
    },
    [u.onChange, N, C]
  ), I = fe(
    (L) => {
      const G = L.target.value;
      T || v(G), e !== "form" && A(G);
    },
    [T, e, A]
  ), D = fe(
    (L) => {
      const G = M.trim(), E = {
        query: G,
        timestamp: Date.now(),
        formData: new FormData(L.currentTarget)
      };
      e === "controlled" || e === "hybrid" && S ? (L.preventDefault(), u.onSearch && G.length >= C && u.onSearch(E)) : e === "hybrid" && u.onSearch && G.length >= C && u.onSearch(E);
    },
    [
      e,
      M,
      u.onSearch,
      S,
      C
    ]
  ), $ = fe(() => {
    j(!0), u.onFocus?.();
  }, [u.onFocus]), H = fe(() => {
    j(!1), u.onBlur?.();
  }, [u.onBlur]), Z = fe(() => {
    T || v(""), u.onClear?.(), w.current?.focus();
  }, [T, u.onClear]);
  nt(() => () => {
    b.current && clearTimeout(b.current);
  }, []);
  const K = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: ke("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), ne = () => /* @__PURE__ */ r.jsx(
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
  ), B = () => !M || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: Z,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx(
        "svg",
        {
          className: "nhsuk-icon nhsuk-icon__close",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          focusable: "false",
          children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" })
        }
      )
    }
  ), F = () => !h || !p.length || !_ ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((L) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsuk-header__search-result",
      role: "option",
      children: L.href ? /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: L.href,
          className: "nhsuk-header__search-result-link",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: L.title }),
            L.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: L.description })
          ]
        }
      ) : /* @__PURE__ */ r.jsxs(
        "button",
        {
          type: "button",
          className: "nhsuk-header__search-result-button",
          onClick: () => u.onSearch?.({
            query: L.title,
            timestamp: Date.now()
          }),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: L.title }),
            L.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: L.description })
          ]
        }
      )
    },
    L.id
  )) });
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ke("nhsuk-header__search", c, {
        "nhsuk-header__search--controlled": e === "controlled",
        "nhsuk-header__search--hybrid": e === "hybrid",
        "nhsuk-header__search--loading": f,
        "nhsuk-header__search--focused": _,
        "nhsuk-header__search--has-results": h && p.length > 0
      }),
      children: [
        /* @__PURE__ */ r.jsxs(
          "form",
          {
            ref: y,
            className: "nhsuk-header__search-form",
            id: "search",
            action: e !== "controlled" ? t : void 0,
            method: e !== "controlled" ? n : void 0,
            role: "search",
            onSubmit: D,
            ...x,
            children: [
              /* @__PURE__ */ r.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: i }),
              /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
                /* @__PURE__ */ r.jsx(
                  "input",
                  {
                    ref: w,
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: e !== "controlled" ? a : void 0,
                    type: "search",
                    placeholder: s,
                    autoComplete: "off",
                    value: M,
                    onChange: I,
                    onFocus: $,
                    onBlur: H,
                    disabled: d || f,
                    ...h && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                    ...m
                  }
                ),
                B()
              ] }),
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  className: "nhsuk-header__search-submit",
                  type: "submit",
                  disabled: d || f || e !== "form" && M.length < C,
                  ...g,
                  children: [
                    f ? ne() : K(),
                    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
                  ]
                }
              )
            ]
          }
        ),
        F()
      ]
    }
  );
}, cl = ({
  className: e,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: o,
  account: s,
  navigation: i,
  containerClasses: l,
  variant: c = "default",
  attributes: d = {},
  ...u
}) => {
  const [f, h] = Oe(!1), [p, x] = Oe(!1), [m, g] = Oe(i?.items?.length || 0), [S, N] = Oe(!1), [C, k] = Oe(!1), v = Ze(null), _ = Ze(null), j = Ze(!1);
  nt(() => {
    typeof window > "u" || k(!0);
  }, []), nt(() => {
    if (typeof document > "u") return;
    const M = (A) => {
      A.key === "Escape" && f && h(!1);
    };
    if (f)
      return document.addEventListener("keydown", M), () => document.removeEventListener("keydown", M);
  }, [f]);
  const b = Ze(null), y = fe(() => {
    if (!C || !i?.items || i.items.length === 0 || j.current) return;
    const M = v.current, A = _.current;
    if (!M || !A) return;
    j.current = !0, M.classList.add("nhsuk-header__navigation-container--measuring");
    const I = M.clientWidth, D = Array.from(A.children);
    if (!D.length) {
      M.classList.remove("nhsuk-header__navigation-container--measuring"), j.current = !1;
      return;
    }
    if (b.current == null) {
      const E = document.createElement("button");
      E.type = "button", E.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", E.style.position = "absolute", E.style.visibility = "hidden", E.style.pointerEvents = "none", E.innerHTML = "<span>More</span>", M.appendChild(E), b.current = E.getBoundingClientRect().width || 104, M.removeChild(E);
    }
    const $ = b.current + 16;
    let H = 0, Z = 0;
    const K = window.getComputedStyle(M), ne = parseFloat(K.paddingLeft) || 0, B = parseFloat(K.paddingRight) || 0;
    let F = ne + B;
    for (const E of D) {
      const O = E.getBoundingClientRect().width;
      if (H + O + $ + F > I) break;
      H += O, Z += 1;
    }
    const L = Z < i.items.length, G = L ? Z : i.items.length;
    x((E) => E === L ? E : L), g((E) => E === G ? E : G), M.classList.remove("nhsuk-header__navigation-container--measuring"), j.current = !1;
  }, [C, i?.items]);
  nt(() => {
    if (!C) return;
    const M = v.current;
    if (!M) return;
    let A = null;
    const I = () => {
      A == null && (A = window.requestAnimationFrame(() => {
        A = null, y();
      }));
    };
    y();
    const D = new ResizeObserver(() => I());
    return D.observe(M), _.current && D.observe(_.current), () => {
      A != null && window.cancelAnimationFrame(A), D.disconnect();
    };
  }, [C, y]), nt(() => {
    C && y();
  }, [i?.items?.length, C, y]);
  const w = (M) => {
    M && (M.preventDefault(), M.stopPropagation());
    const A = !f;
    h(A), N(A);
  }, T = (() => {
    try {
      return hu();
    } catch {
      return;
    }
  })();
  return fu(
    {
      className: e,
      logo: t,
      service: n,
      organisation: a,
      search: o,
      account: s,
      navigation: i,
      containerClasses: l,
      variant: c,
      attributes: d,
      ...u
    },
    {
      variant: "client",
      isClient: C,
      menuOpen: f,
      showMoreButton: p,
      visibleItems: m,
      dropdownVisible: S,
      toggleMenu: w,
      navContainerRef: v,
      navListRef: _,
      // Provide interactive search node for client build only
      searchNode: o ? /* @__PURE__ */ r.jsx(pu, { ...o }) : null,
      brand: T?.brand
    }
  );
};
function mu(e, { isClient: t, brand: n }) {
  const {
    className: a,
    logo: o = {},
    service: s = {},
    serviceName: i,
    organisation: l,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: c,
    navigation: d,
    containerClasses: u,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: p,
    // deprecated (ignored)
    responsiveNavigation: x = !0,
    // Consume logoVariant for server-side logo selection while preventing DOM leakage via ...rest
    logoVariant: m = rs.Full,
    ...g
  } = e;
  "maxVisibleItems" in g && delete g.maxVisibleItems;
  const S = {
    ...s,
    text: s?.text ?? i
  }, N = S.href && !o.href || S.href && S.href === o.href, C = N ? S.href : o.href, k = ke(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || l,
      "nhsuk-header--white": f === "white"
    },
    a
  ), v = ke(
    "nhsuk-header__container",
    u
  ), _ = ke(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), j = n === "fdp" ? "fdp" : "nhs", b = () => /* @__PURE__ */ r.jsxs(
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
  ), y = () => {
    if (o.src)
      return /* @__PURE__ */ r.jsx(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: o.src,
          width: "280",
          alt: o.ariaLabel || (j === "fdp" ? "FDP" : "NHS")
        }
      );
    if (j === "fdp") {
      const I = ll(ns.FDP, m);
      if (I?.src)
        return /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: I.src,
            "data-logo-variant": m,
            width: "280",
            alt: I.ariaLabel || "FDP"
          }
        );
    }
    return b();
  }, w = () => l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      l.name,
      l.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        l.split
      ] })
    ] }),
    l.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: l.descriptor })
  ] }) : null, T = (I, D) => I ? D ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: D, children: I }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: I }) : null, M = (I) => I.active || I.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: I.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: I.html } }) : I.text }) : I.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: I.html } }) : I.text;
  return /* @__PURE__ */ r.jsx(r.Fragment, { children: /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: k,
      role: "banner",
      "data-module": "nhsuk-header",
      ...h,
      ...g,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: v, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            C ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: C, children: [
              y(),
              w(),
              N && T(S.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              y(),
              w(),
              N && T(S.text)
            ] }),
            S.text && !N && T(S.text, S.href)
          ] }),
          /* @__PURE__ */ r.jsx(
            Ki,
            {
              ...c,
              variant: f === "white" ? "white" : "default"
            }
          )
        ] }),
        d && d.items && d.items.length > 0 && /* @__PURE__ */ r.jsx(
          "nav",
          {
            className: _,
            "aria-label": d.ariaLabel || "Menu",
            "data-ssr-hydrating": "true",
            children: /* @__PURE__ */ r.jsx(
              "div",
              {
                className: ke(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--ssr": !t
                  },
                  u
                ),
                children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__navigation-list", children: d.items.map((I, D) => /* @__PURE__ */ r.jsx(
                  "li",
                  {
                    className: ke(
                      "nhsuk-header__navigation-item",
                      {
                        "nhsuk-header__navigation-item--current": I.active || I.current
                      },
                      I.className
                    ),
                    ...I.attributes || {},
                    children: /* @__PURE__ */ r.jsx(
                      "a",
                      {
                        className: "nhsuk-header__navigation-link",
                        href: I.href,
                        ...I.active || I.current ? { "aria-current": I.current ? "page" : "true" } : {},
                        children: M(I)
                      }
                    )
                  },
                  D
                )) })
              }
            )
          }
        ),
        !1
      ]
    }
  ) });
}
const s1 = (e) => {
  const t = e.attributes?.["data-brand"];
  return mu(e, {
    isClient: !1,
    brand: t === "fdp" || t === "nhs" ? t : void 0
  });
}, gu = ({
  heading: e,
  headingLevel: t = 1,
  headingClasses: n = "",
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
    n,
    !c && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = c || e || a || o, x = () => {
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
      className: u,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...d,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero-content", children: [
          x(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && p && /* @__PURE__ */ r.jsx("div", { className: f, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          x(),
          c || (o ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
gu.displayName = "Hero";
const dl = ({
  className: e,
  links: t = [],
  linksColumn2: n,
  linksColumn3: a,
  metaLinks: o,
  copyright: s = "© NHS England",
  containerClasses: i,
  attributes: l = {},
  style: c,
  footerStyle: d,
  containerStyle: u
}) => {
  const f = (p, x = !1) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: ke("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": x
      }),
      children: /* @__PURE__ */ r.jsx(
        "a",
        {
          className: "nhsuk-footer__list-item-link",
          href: p.URL,
          target: p.newWindow ? "_blank" : void 0,
          rel: p.newWindow ? "noopener noreferrer" : void 0,
          children: p.label
        }
      )
    },
    `${p.URL}-${p.label}`
  ), h = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...c }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: ke("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ke("nhsuk-footer", e), style: d, children: h ? (
            // Multi-column layout
            /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: t.map((p) => f(p)) }),
              n && n.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: n.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list", children: a.map((p) => f(p)) }),
              o && o.length > 0 && /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ r.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (n || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0)),
              (o || []).map((p) => f(p, !0))
            ] })
          ) }),
          !h && /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    h && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ r.jsx("div", { children: /* @__PURE__ */ r.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function Ir(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function xu(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function as(e) {
  let t, n, a;
  e.length !== 2 ? (t = Ir, n = (l, c) => Ir(e(l), c), a = (l, c) => e(l) - c) : (t = e === Ir || e === xu ? e : yu, n = e, a = e);
  function o(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(l[f], c) < 0 ? d = f + 1 : u = f;
      } while (d < u);
    }
    return d;
  }
  function s(l, c, d = 0, u = l.length) {
    if (d < u) {
      if (t(c, c) !== 0) return u;
      do {
        const f = d + u >>> 1;
        n(l[f], c) <= 0 ? d = f + 1 : u = f;
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
function yu() {
  return 0;
}
function bu(e) {
  return e === null ? NaN : +e;
}
const vu = as(Ir), wu = vu.right;
as(bu).center;
function ul(e, t) {
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
class As extends Map {
  constructor(t, n = ku) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(Es(this, t));
  }
  has(t) {
    return super.has(Es(this, t));
  }
  set(t, n) {
    return super.set(_u(this, t), n);
  }
  delete(t) {
    return super.delete(Su(this, t));
  }
}
function Es({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function _u({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function Su({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function ku(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Nu = Math.sqrt(50), Cu = Math.sqrt(10), ju = Math.sqrt(2);
function Ar(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Nu ? 10 : s >= Cu ? 5 : s >= ju ? 2 : 1;
  let l, c, d;
  return o < 0 ? (d = Math.pow(10, -o) / i, l = Math.round(e * d), c = Math.round(t * d), l / d < e && ++l, c / d > t && --c, d = -d) : (d = Math.pow(10, o) * i, l = Math.round(e / d), c = Math.round(t / d), l * d < e && ++l, c * d > t && --c), c < l && 0.5 <= n && n < 2 ? Ar(e, t, n * 2) : [l, c, d];
}
function Mu(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0)) return [];
  if (e === t) return [e];
  const a = t < e, [o, s, i] = a ? Ar(t, e, n) : Ar(e, t, n);
  if (!(s >= o)) return [];
  const l = s - o + 1, c = new Array(l);
  if (a)
    if (i < 0) for (let d = 0; d < l; ++d) c[d] = (s - d) / -i;
    else for (let d = 0; d < l; ++d) c[d] = (s - d) * i;
  else if (i < 0) for (let d = 0; d < l; ++d) c[d] = (o + d) / -i;
  else for (let d = 0; d < l; ++d) c[d] = (o + d) * i;
  return c;
}
function fo(e, t, n) {
  return t = +t, e = +e, n = +n, Ar(e, t, n)[2];
}
function ho(e, t, n) {
  t = +t, e = +e, n = +n;
  const a = t < e, o = a ? fo(t, e, n) : fo(e, t, n);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Iu(e, t, n) {
  e = +e, t = +t, n = (o = arguments.length) < 2 ? (t = e, e = 0, 1) : o < 3 ? 1 : +n;
  for (var a = -1, o = Math.max(0, Math.ceil((t - e) / n)) | 0, s = new Array(o); ++a < o; )
    s[a] = e + a * n;
  return s;
}
function ja(e, t) {
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
const Fs = Symbol("implicit");
function fl() {
  var e = new As(), t = [], n = [], a = Fs;
  function o(s) {
    let i = e.get(s);
    if (i === void 0) {
      if (a !== Fs) return a;
      e.set(s, i = t.push(s) - 1);
    }
    return n[i % n.length];
  }
  return o.domain = function(s) {
    if (!arguments.length) return t.slice();
    t = [], e = new As();
    for (const i of s)
      e.has(i) || e.set(i, t.push(i) - 1);
    return o;
  }, o.range = function(s) {
    return arguments.length ? (n = Array.from(s), o) : n.slice();
  }, o.unknown = function(s) {
    return arguments.length ? (a = s, o) : a;
  }, o.copy = function() {
    return fl(t, n).unknown(a);
  }, ja.apply(o, arguments), o;
}
function hl() {
  var e = fl().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, c = 0, d = 0, u = 0.5;
  delete e.unknown;
  function f() {
    var h = t().length, p = o < a, x = p ? o : a, m = p ? a : o;
    s = (m - x) / Math.max(1, h - c + d * 2), l && (s = Math.floor(s)), x += (m - x - s * (h - c)) * u, i = s * (1 - c), l && (x = Math.round(x), i = Math.round(i));
    var g = Iu(h).map(function(S) {
      return x + s * S;
    });
    return n(p ? g.reverse() : g);
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
    return arguments.length ? (c = Math.min(1, d = +h), f()) : c;
  }, e.paddingInner = function(h) {
    return arguments.length ? (c = Math.min(1, h), f()) : c;
  }, e.paddingOuter = function(h) {
    return arguments.length ? (d = +h, f()) : d;
  }, e.align = function(h) {
    return arguments.length ? (u = Math.max(0, Math.min(1, h)), f()) : u;
  }, e.copy = function() {
    return hl(t(), [a, o]).round(l).paddingInner(c).paddingOuter(d).align(u);
  }, ja.apply(f(), arguments);
}
function os(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function pl(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function pr() {
}
var ar = 0.7, Er = 1 / ar, Ln = "\\s*([+-]?\\d+)\\s*", or = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Rt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Du = /^#([0-9a-f]{3,8})$/, Tu = new RegExp(`^rgb\\(${Ln},${Ln},${Ln}\\)$`), Lu = new RegExp(`^rgb\\(${Rt},${Rt},${Rt}\\)$`), $u = new RegExp(`^rgba\\(${Ln},${Ln},${Ln},${or}\\)$`), Au = new RegExp(`^rgba\\(${Rt},${Rt},${Rt},${or}\\)$`), Eu = new RegExp(`^hsl\\(${or},${Rt},${Rt}\\)$`), Fu = new RegExp(`^hsla\\(${or},${Rt},${Rt},${or}\\)$`), Ps = {
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
os(pr, sr, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Rs,
  // Deprecated! Use color.formatHex.
  formatHex: Rs,
  formatHex8: Pu,
  formatHsl: Ru,
  formatRgb: Bs,
  toString: Bs
});
function Rs() {
  return this.rgb().formatHex();
}
function Pu() {
  return this.rgb().formatHex8();
}
function Ru() {
  return ml(this).formatHsl();
}
function Bs() {
  return this.rgb().formatRgb();
}
function sr(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Du.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Hs(t) : n === 3 ? new Ct(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? Sr(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? Sr(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Tu.exec(e)) ? new Ct(t[1], t[2], t[3], 1) : (t = Lu.exec(e)) ? new Ct(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = $u.exec(e)) ? Sr(t[1], t[2], t[3], t[4]) : (t = Au.exec(e)) ? Sr(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Eu.exec(e)) ? Us(t[1], t[2] / 100, t[3] / 100, 1) : (t = Fu.exec(e)) ? Us(t[1], t[2] / 100, t[3] / 100, t[4]) : Ps.hasOwnProperty(e) ? Hs(Ps[e]) : e === "transparent" ? new Ct(NaN, NaN, NaN, 0) : null;
}
function Hs(e) {
  return new Ct(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function Sr(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new Ct(e, t, n, a);
}
function Bu(e) {
  return e instanceof pr || (e = sr(e)), e ? (e = e.rgb(), new Ct(e.r, e.g, e.b, e.opacity)) : new Ct();
}
function po(e, t, n, a) {
  return arguments.length === 1 ? Bu(e) : new Ct(e, t, n, a ?? 1);
}
function Ct(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
os(Ct, po, pl(pr, {
  brighter(e) {
    return e = e == null ? Er : Math.pow(Er, e), new Ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ar : Math.pow(ar, e), new Ct(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ct(mn(this.r), mn(this.g), mn(this.b), Fr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: zs,
  // Deprecated! Use color.formatHex.
  formatHex: zs,
  formatHex8: Hu,
  formatRgb: Os,
  toString: Os
}));
function zs() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}`;
}
function Hu() {
  return `#${pn(this.r)}${pn(this.g)}${pn(this.b)}${pn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Os() {
  const e = Fr(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${mn(this.r)}, ${mn(this.g)}, ${mn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Fr(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function pn(e) {
  return e = mn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Us(e, t, n, a) {
  return a <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Tt(e, t, n, a);
}
function ml(e) {
  if (e instanceof Tt) return new Tt(e.h, e.s, e.l, e.opacity);
  if (e instanceof pr || (e = sr(e)), !e) return new Tt();
  if (e instanceof Tt) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Tt(i, l, c, e.opacity);
}
function zu(e, t, n, a) {
  return arguments.length === 1 ? ml(e) : new Tt(e, t, n, a ?? 1);
}
function Tt(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
os(Tt, zu, pl(pr, {
  brighter(e) {
    return e = e == null ? Er : Math.pow(Er, e), new Tt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? ar : Math.pow(ar, e), new Tt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, a = n + (n < 0.5 ? n : 1 - n) * t, o = 2 * n - a;
    return new Ct(
      Wa(e >= 240 ? e - 240 : e + 120, o, a),
      Wa(e, o, a),
      Wa(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Tt(Ws(this.h), kr(this.s), kr(this.l), Fr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Fr(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ws(this.h)}, ${kr(this.s) * 100}%, ${kr(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ws(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function kr(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Wa(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const ss = (e) => () => e;
function Ou(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Uu(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Wu(e) {
  return (e = +e) == 1 ? gl : function(t, n) {
    return n - t ? Uu(t, n, e) : ss(isNaN(t) ? n : t);
  };
}
function gl(e, t) {
  var n = t - e;
  return n ? Ou(e, n) : ss(isNaN(e) ? t : e);
}
const Gs = (function e(t) {
  var n = Wu(t);
  function a(o, s) {
    var i = n((o = po(o)).r, (s = po(s)).r), l = n(o.g, s.g), c = n(o.b, s.b), d = gl(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = c(u), o.opacity = d(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Gu(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Vu(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Yu(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = is(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Zu(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return n.setTime(e * (1 - a) + t * a), n;
  };
}
function Pr(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function qu(e, t) {
  var n = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? n[o] = is(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in n) a[o] = n[o](s);
    return a;
  };
}
var mo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ga = new RegExp(mo.source, "g");
function Ju(e) {
  return function() {
    return e;
  };
}
function Xu(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ku(e, t) {
  var n = mo.lastIndex = Ga.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = mo.exec(e)) && (o = Ga.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: Pr(a, o) })), n = Ga.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? Xu(c[0].x) : Ju(t) : (t = c.length, function(d) {
    for (var u = 0, f; u < t; ++u) l[(f = c[u]).i] = f.x(d);
    return l.join("");
  });
}
function is(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? ss(t) : (n === "number" ? Pr : n === "string" ? (a = sr(t)) ? (t = a, Gs) : Ku : t instanceof sr ? Gs : t instanceof Date ? Zu : Vu(t) ? Gu : Array.isArray(t) ? Yu : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? qu : Pr)(e, t);
}
function Qu(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function ef(e) {
  return function() {
    return e;
  };
}
function tf(e) {
  return +e;
}
var Vs = [0, 1];
function Mn(e) {
  return e;
}
function go(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : ef(isNaN(t) ? NaN : 0.5);
}
function nf(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function rf(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = go(o, a), s = n(i, s)) : (a = go(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function af(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = go(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var c = wu(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function xl(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function of() {
  var e = Vs, t = Vs, n = is, a, o, s, i = Mn, l, c, d;
  function u() {
    var h = Math.min(e.length, t.length);
    return i !== Mn && (i = nf(e[0], e[h - 1])), l = h > 2 ? af : rf, c = d = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? s : (c || (c = l(e.map(a), t, n)))(a(i(h)));
  }
  return f.invert = function(h) {
    return i(o((d || (d = l(t, e.map(a), Pr)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (e = Array.from(h, tf), u()) : e.slice();
  }, f.range = function(h) {
    return arguments.length ? (t = Array.from(h), u()) : t.slice();
  }, f.rangeRound = function(h) {
    return t = Array.from(h), n = Qu, u();
  }, f.clamp = function(h) {
    return arguments.length ? (i = h ? !0 : Mn, u()) : i !== Mn;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, u()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (s = h, f) : s;
  }, function(h, p) {
    return a = h, o = p, u();
  };
}
function yl() {
  return of()(Mn, Mn);
}
function sf(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Rr(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var n, a = e.slice(0, n);
  return [
    a.length > 1 ? a[0] + a.slice(2) : a,
    +e.slice(n + 1)
  ];
}
function Pn(e) {
  return e = Rr(Math.abs(e)), e ? e[1] : NaN;
}
function lf(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], c = 0; o > 0 && l > 0 && (c + l + 1 > a && (l = Math.max(1, a - c)), s.push(n.substring(o -= l, o + l)), !((c += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function cf(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var df = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Br(e) {
  if (!(t = df.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new ls({
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
Br.prototype = ls.prototype;
function ls(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
ls.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function uf(e) {
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
var bl;
function ff(e, t) {
  var n = Rr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (bl = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
  return s === i ? a : s > i ? a + new Array(s - i + 1).join("0") : s > 0 ? a.slice(0, s) + "." + a.slice(s) : "0." + new Array(1 - s).join("0") + Rr(e, Math.max(0, t + s - 1))[0];
}
function Ys(e, t) {
  var n = Rr(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1];
  return o < 0 ? "0." + new Array(-o).join("0") + a : a.length > o + 1 ? a.slice(0, o + 1) + "." + a.slice(o + 1) : a + new Array(o - a.length + 2).join("0");
}
const Zs = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: sf,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Ys(e * 100, t),
  r: Ys,
  s: ff,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function qs(e) {
  return e;
}
var Js = Array.prototype.map, Xs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function hf(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? qs : lf(Js.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? qs : cf(Js.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
  function d(f) {
    f = Br(f);
    var h = f.fill, p = f.align, x = f.sign, m = f.symbol, g = f.zero, S = f.width, N = f.comma, C = f.precision, k = f.trim, v = f.type;
    v === "n" ? (N = !0, v = "g") : Zs[v] || (C === void 0 && (C = 12), k = !0, v = "g"), (g || h === "0" && p === "=") && (g = !0, h = "0", p = "=");
    var _ = m === "$" ? n : m === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", j = m === "$" ? a : /[%p]/.test(v) ? i : "", b = Zs[v], y = /[defgprs%]/.test(v);
    C = C === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, C)) : Math.max(0, Math.min(20, C));
    function w(T) {
      var M = _, A = j, I, D, $;
      if (v === "c")
        A = b(T) + A, T = "";
      else {
        T = +T;
        var H = T < 0 || 1 / T < 0;
        if (T = isNaN(T) ? c : b(Math.abs(T), C), k && (T = uf(T)), H && +T == 0 && x !== "+" && (H = !1), M = (H ? x === "(" ? x : l : x === "-" || x === "(" ? "" : x) + M, A = (v === "s" ? Xs[8 + bl / 3] : "") + A + (H && x === "(" ? ")" : ""), y) {
          for (I = -1, D = T.length; ++I < D; )
            if ($ = T.charCodeAt(I), 48 > $ || $ > 57) {
              A = ($ === 46 ? o + T.slice(I + 1) : T.slice(I)) + A, T = T.slice(0, I);
              break;
            }
        }
      }
      N && !g && (T = t(T, 1 / 0));
      var Z = M.length + T.length + A.length, K = Z < S ? new Array(S - Z + 1).join(h) : "";
      switch (N && g && (T = t(K + T, K.length ? S - A.length : 1 / 0), K = ""), p) {
        case "<":
          T = M + T + A + K;
          break;
        case "=":
          T = M + K + T + A;
          break;
        case "^":
          T = K.slice(0, Z = K.length >> 1) + M + T + A + K.slice(Z);
          break;
        default:
          T = K + M + T + A;
          break;
      }
      return s(T);
    }
    return w.toString = function() {
      return f + "";
    }, w;
  }
  function u(f, h) {
    var p = d((f = Br(f), f.type = "f", f)), x = Math.max(-8, Math.min(8, Math.floor(Pn(h) / 3))) * 3, m = Math.pow(10, -x), g = Xs[8 + x / 3];
    return function(S) {
      return p(m * S) + g;
    };
  }
  return {
    format: d,
    formatPrefix: u
  };
}
var Nr, vl, wl;
pf({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function pf(e) {
  return Nr = hf(e), vl = Nr.format, wl = Nr.formatPrefix, Nr;
}
function mf(e) {
  return Math.max(0, -Pn(Math.abs(e)));
}
function gf(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Pn(t) / 3))) * 3 - Pn(Math.abs(e)));
}
function xf(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Pn(t) - Pn(e)) + 1;
}
function yf(e, t, n, a) {
  var o = ho(e, t, n), s;
  switch (a = Br(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = gf(o, i)) && (a.precision = s), wl(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = xf(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = mf(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return vl(a);
}
function bf(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return Mu(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return yf(o[0], o[o.length - 1], n ?? 10, a);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var a = t(), o = 0, s = a.length - 1, i = a[o], l = a[s], c, d, u = 10;
    for (l < i && (d = i, i = l, l = d, d = o, o = s, s = d); u-- > 0; ) {
      if (d = fo(i, l, n), d === c)
        return a[o] = i, a[s] = l, t(a);
      if (d > 0)
        i = Math.floor(i / d) * d, l = Math.ceil(l / d) * d;
      else if (d < 0)
        i = Math.ceil(i * d) / d, l = Math.floor(l * d) / d;
      else
        break;
      c = d;
    }
    return e;
  }, e;
}
function Hr() {
  var e = yl();
  return e.copy = function() {
    return xl(e, Hr());
  }, ja.apply(e, arguments), bf(e);
}
function vf(e, t) {
  e = e.slice();
  var n = 0, a = e.length - 1, o = e[n], s = e[a], i;
  return s < o && (i = n, n = a, a = i, i = o, o = s, s = i), e[n] = t.floor(o), e[a] = t.ceil(s), e;
}
const Va = /* @__PURE__ */ new Date(), Ya = /* @__PURE__ */ new Date();
function yt(e, t, n, a) {
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
  }, o.filter = (s) => yt((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), n && (o.count = (s, i) => (Va.setTime(+s), Ya.setTime(+i), e(Va), e(Ya), Math.floor(n(Va, Ya))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const zr = yt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
zr.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? yt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, n) => {
  t.setTime(+t + n * e);
}, (t, n) => (n - t) / e) : zr);
zr.range;
const Kt = 1e3, It = Kt * 60, Qt = It * 60, en = Qt * 24, cs = en * 7, Ks = en * 30, Za = en * 365, In = yt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Kt);
}, (e, t) => (t - e) / Kt, (e) => e.getUTCSeconds());
In.range;
const ds = yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Kt);
}, (e, t) => {
  e.setTime(+e + t * It);
}, (e, t) => (t - e) / It, (e) => e.getMinutes());
ds.range;
const wf = yt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * It);
}, (e, t) => (t - e) / It, (e) => e.getUTCMinutes());
wf.range;
const us = yt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Kt - e.getMinutes() * It);
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getHours());
us.range;
const _f = yt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Qt);
}, (e, t) => (t - e) / Qt, (e) => e.getUTCHours());
_f.range;
const mr = yt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * It) / en,
  (e) => e.getDate() - 1
);
mr.range;
const fs = yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / en, (e) => e.getUTCDate() - 1);
fs.range;
const Sf = yt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / en, (e) => Math.floor(e / en));
Sf.range;
function _n(e) {
  return yt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * It) / cs);
}
const Ma = _n(0), Or = _n(1), kf = _n(2), Nf = _n(3), Rn = _n(4), Cf = _n(5), jf = _n(6);
Ma.range;
Or.range;
kf.range;
Nf.range;
Rn.range;
Cf.range;
jf.range;
function Sn(e) {
  return yt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / cs);
}
const _l = Sn(0), Ur = Sn(1), Mf = Sn(2), If = Sn(3), Bn = Sn(4), Df = Sn(5), Tf = Sn(6);
_l.range;
Ur.range;
Mf.range;
If.range;
Bn.range;
Df.range;
Tf.range;
const ir = yt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
ir.range;
const Lf = yt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Lf.range;
const tn = yt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
tn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : yt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
tn.range;
const vn = yt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
vn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : yt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, n) => {
  t.setUTCFullYear(t.getUTCFullYear() + n * e);
});
vn.range;
function $f(e, t, n, a, o, s) {
  const i = [
    [In, 1, Kt],
    [In, 5, 5 * Kt],
    [In, 15, 15 * Kt],
    [In, 30, 30 * Kt],
    [s, 1, It],
    [s, 5, 5 * It],
    [s, 15, 15 * It],
    [s, 30, 30 * It],
    [o, 1, Qt],
    [o, 3, 3 * Qt],
    [o, 6, 6 * Qt],
    [o, 12, 12 * Qt],
    [a, 1, en],
    [a, 2, 2 * en],
    [n, 1, cs],
    [t, 1, Ks],
    [t, 3, 3 * Ks],
    [e, 1, Za]
  ];
  function l(d, u, f) {
    const h = u < d;
    h && ([d, u] = [u, d]);
    const p = f && typeof f.range == "function" ? f : c(d, u, f), x = p ? p.range(d, +u + 1) : [];
    return h ? x.reverse() : x;
  }
  function c(d, u, f) {
    const h = Math.abs(u - d) / f, p = as(([, , g]) => g).right(i, h);
    if (p === i.length) return e.every(ho(d / Za, u / Za, f));
    if (p === 0) return zr.every(Math.max(ho(d, u, f), 1));
    const [x, m] = i[h / i[p - 1][2] < i[p][2] / h ? p - 1 : p];
    return x.every(m);
  }
  return [l, c];
}
const [Af, Ef] = $f(tn, ir, Ma, mr, us, ds);
function qa(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Ja(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Gn(e, t, n) {
  return { y: e, m: t, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function Ff(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, d = Vn(o), u = Yn(o), f = Vn(s), h = Yn(s), p = Vn(i), x = Yn(i), m = Vn(l), g = Yn(l), S = Vn(c), N = Yn(c), C = {
    a: H,
    A: Z,
    b: K,
    B: ne,
    c: null,
    d: ai,
    e: ai,
    f: oh,
    g: mh,
    G: xh,
    H: nh,
    I: rh,
    j: ah,
    L: Sl,
    m: sh,
    M: ih,
    p: B,
    q: F,
    Q: ii,
    s: li,
    S: lh,
    u: ch,
    U: dh,
    V: uh,
    w: fh,
    W: hh,
    x: null,
    X: null,
    y: ph,
    Y: gh,
    Z: yh,
    "%": si
  }, k = {
    a: L,
    A: G,
    b: E,
    B: O,
    c: null,
    d: oi,
    e: oi,
    f: _h,
    g: Lh,
    G: Ah,
    H: bh,
    I: vh,
    j: wh,
    L: Nl,
    m: Sh,
    M: kh,
    p: P,
    q: X,
    Q: ii,
    s: li,
    S: Nh,
    u: Ch,
    U: jh,
    V: Mh,
    w: Ih,
    W: Dh,
    x: null,
    X: null,
    y: Th,
    Y: $h,
    Z: Eh,
    "%": si
  }, v = {
    a: w,
    A: T,
    b: M,
    B: A,
    c: I,
    d: ni,
    e: ni,
    f: Kf,
    g: ti,
    G: ei,
    H: ri,
    I: ri,
    j: Zf,
    L: Xf,
    m: Yf,
    M: qf,
    p: y,
    q: Vf,
    Q: eh,
    s: th,
    S: Jf,
    u: zf,
    U: Of,
    V: Uf,
    w: Hf,
    W: Wf,
    x: D,
    X: $,
    y: ti,
    Y: ei,
    Z: Gf,
    "%": Qf
  };
  C.x = _(n, C), C.X = _(a, C), C.c = _(t, C), k.x = _(n, k), k.X = _(a, k), k.c = _(t, k);
  function _(Y, Q) {
    return function(de) {
      var V = [], ae = -1, le = 0, be = Y.length, pe, Ie, Ve;
      for (de instanceof Date || (de = /* @__PURE__ */ new Date(+de)); ++ae < be; )
        Y.charCodeAt(ae) === 37 && (V.push(Y.slice(le, ae)), (Ie = Qs[pe = Y.charAt(++ae)]) != null ? pe = Y.charAt(++ae) : Ie = pe === "e" ? " " : "0", (Ve = Q[pe]) && (pe = Ve(de, Ie)), V.push(pe), le = ae + 1);
      return V.push(Y.slice(le, ae)), V.join("");
    };
  }
  function j(Y, Q) {
    return function(de) {
      var V = Gn(1900, void 0, 1), ae = b(V, Y, de += "", 0), le, be;
      if (ae != de.length) return null;
      if ("Q" in V) return new Date(V.Q);
      if ("s" in V) return new Date(V.s * 1e3 + ("L" in V ? V.L : 0));
      if (Q && !("Z" in V) && (V.Z = 0), "p" in V && (V.H = V.H % 12 + V.p * 12), V.m === void 0 && (V.m = "q" in V ? V.q : 0), "V" in V) {
        if (V.V < 1 || V.V > 53) return null;
        "w" in V || (V.w = 1), "Z" in V ? (le = Ja(Gn(V.y, 0, 1)), be = le.getUTCDay(), le = be > 4 || be === 0 ? Ur.ceil(le) : Ur(le), le = fs.offset(le, (V.V - 1) * 7), V.y = le.getUTCFullYear(), V.m = le.getUTCMonth(), V.d = le.getUTCDate() + (V.w + 6) % 7) : (le = qa(Gn(V.y, 0, 1)), be = le.getDay(), le = be > 4 || be === 0 ? Or.ceil(le) : Or(le), le = mr.offset(le, (V.V - 1) * 7), V.y = le.getFullYear(), V.m = le.getMonth(), V.d = le.getDate() + (V.w + 6) % 7);
      } else ("W" in V || "U" in V) && ("w" in V || (V.w = "u" in V ? V.u % 7 : "W" in V ? 1 : 0), be = "Z" in V ? Ja(Gn(V.y, 0, 1)).getUTCDay() : qa(Gn(V.y, 0, 1)).getDay(), V.m = 0, V.d = "W" in V ? (V.w + 6) % 7 + V.W * 7 - (be + 5) % 7 : V.w + V.U * 7 - (be + 6) % 7);
      return "Z" in V ? (V.H += V.Z / 100 | 0, V.M += V.Z % 100, Ja(V)) : qa(V);
    };
  }
  function b(Y, Q, de, V) {
    for (var ae = 0, le = Q.length, be = de.length, pe, Ie; ae < le; ) {
      if (V >= be) return -1;
      if (pe = Q.charCodeAt(ae++), pe === 37) {
        if (pe = Q.charAt(ae++), Ie = v[pe in Qs ? Q.charAt(ae++) : pe], !Ie || (V = Ie(Y, de, V)) < 0) return -1;
      } else if (pe != de.charCodeAt(V++))
        return -1;
    }
    return V;
  }
  function y(Y, Q, de) {
    var V = d.exec(Q.slice(de));
    return V ? (Y.p = u.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function w(Y, Q, de) {
    var V = p.exec(Q.slice(de));
    return V ? (Y.w = x.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function T(Y, Q, de) {
    var V = f.exec(Q.slice(de));
    return V ? (Y.w = h.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function M(Y, Q, de) {
    var V = S.exec(Q.slice(de));
    return V ? (Y.m = N.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function A(Y, Q, de) {
    var V = m.exec(Q.slice(de));
    return V ? (Y.m = g.get(V[0].toLowerCase()), de + V[0].length) : -1;
  }
  function I(Y, Q, de) {
    return b(Y, t, Q, de);
  }
  function D(Y, Q, de) {
    return b(Y, n, Q, de);
  }
  function $(Y, Q, de) {
    return b(Y, a, Q, de);
  }
  function H(Y) {
    return i[Y.getDay()];
  }
  function Z(Y) {
    return s[Y.getDay()];
  }
  function K(Y) {
    return c[Y.getMonth()];
  }
  function ne(Y) {
    return l[Y.getMonth()];
  }
  function B(Y) {
    return o[+(Y.getHours() >= 12)];
  }
  function F(Y) {
    return 1 + ~~(Y.getMonth() / 3);
  }
  function L(Y) {
    return i[Y.getUTCDay()];
  }
  function G(Y) {
    return s[Y.getUTCDay()];
  }
  function E(Y) {
    return c[Y.getUTCMonth()];
  }
  function O(Y) {
    return l[Y.getUTCMonth()];
  }
  function P(Y) {
    return o[+(Y.getUTCHours() >= 12)];
  }
  function X(Y) {
    return 1 + ~~(Y.getUTCMonth() / 3);
  }
  return {
    format: function(Y) {
      var Q = _(Y += "", C);
      return Q.toString = function() {
        return Y;
      }, Q;
    },
    parse: function(Y) {
      var Q = j(Y += "", !1);
      return Q.toString = function() {
        return Y;
      }, Q;
    },
    utcFormat: function(Y) {
      var Q = _(Y += "", k);
      return Q.toString = function() {
        return Y;
      }, Q;
    },
    utcParse: function(Y) {
      var Q = j(Y += "", !0);
      return Q.toString = function() {
        return Y;
      }, Q;
    }
  };
}
var Qs = { "-": "", _: " ", 0: "0" }, vt = /^\s*\d+/, Pf = /^%/, Rf = /[\\^$*+?|[\]().{}]/g;
function at(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function Bf(e) {
  return e.replace(Rf, "\\$&");
}
function Vn(e) {
  return new RegExp("^(?:" + e.map(Bf).join("|") + ")", "i");
}
function Yn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Hf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function zf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Of(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Uf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function Wf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.W = +a[0], n + a[0].length) : -1;
}
function ei(e, t, n) {
  var a = vt.exec(t.slice(n, n + 4));
  return a ? (e.y = +a[0], n + a[0].length) : -1;
}
function ti(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), n + a[0].length) : -1;
}
function Gf(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Vf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Yf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function ni(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Zf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function ri(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function qf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Jf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function Xf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Kf(e, t, n) {
  var a = vt.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Qf(e, t, n) {
  var a = Pf.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function eh(e, t, n) {
  var a = vt.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function th(e, t, n) {
  var a = vt.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function ai(e, t) {
  return at(e.getDate(), t, 2);
}
function nh(e, t) {
  return at(e.getHours(), t, 2);
}
function rh(e, t) {
  return at(e.getHours() % 12 || 12, t, 2);
}
function ah(e, t) {
  return at(1 + mr.count(tn(e), e), t, 3);
}
function Sl(e, t) {
  return at(e.getMilliseconds(), t, 3);
}
function oh(e, t) {
  return Sl(e, t) + "000";
}
function sh(e, t) {
  return at(e.getMonth() + 1, t, 2);
}
function ih(e, t) {
  return at(e.getMinutes(), t, 2);
}
function lh(e, t) {
  return at(e.getSeconds(), t, 2);
}
function ch(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function dh(e, t) {
  return at(Ma.count(tn(e) - 1, e), t, 2);
}
function kl(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? Rn(e) : Rn.ceil(e);
}
function uh(e, t) {
  return e = kl(e), at(Rn.count(tn(e), e) + (tn(e).getDay() === 4), t, 2);
}
function fh(e) {
  return e.getDay();
}
function hh(e, t) {
  return at(Or.count(tn(e) - 1, e), t, 2);
}
function ph(e, t) {
  return at(e.getFullYear() % 100, t, 2);
}
function mh(e, t) {
  return e = kl(e), at(e.getFullYear() % 100, t, 2);
}
function gh(e, t) {
  return at(e.getFullYear() % 1e4, t, 4);
}
function xh(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? Rn(e) : Rn.ceil(e), at(e.getFullYear() % 1e4, t, 4);
}
function yh(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + at(t / 60 | 0, "0", 2) + at(t % 60, "0", 2);
}
function oi(e, t) {
  return at(e.getUTCDate(), t, 2);
}
function bh(e, t) {
  return at(e.getUTCHours(), t, 2);
}
function vh(e, t) {
  return at(e.getUTCHours() % 12 || 12, t, 2);
}
function wh(e, t) {
  return at(1 + fs.count(vn(e), e), t, 3);
}
function Nl(e, t) {
  return at(e.getUTCMilliseconds(), t, 3);
}
function _h(e, t) {
  return Nl(e, t) + "000";
}
function Sh(e, t) {
  return at(e.getUTCMonth() + 1, t, 2);
}
function kh(e, t) {
  return at(e.getUTCMinutes(), t, 2);
}
function Nh(e, t) {
  return at(e.getUTCSeconds(), t, 2);
}
function Ch(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function jh(e, t) {
  return at(_l.count(vn(e) - 1, e), t, 2);
}
function Cl(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Bn(e) : Bn.ceil(e);
}
function Mh(e, t) {
  return e = Cl(e), at(Bn.count(vn(e), e) + (vn(e).getUTCDay() === 4), t, 2);
}
function Ih(e) {
  return e.getUTCDay();
}
function Dh(e, t) {
  return at(Ur.count(vn(e) - 1, e), t, 2);
}
function Th(e, t) {
  return at(e.getUTCFullYear() % 100, t, 2);
}
function Lh(e, t) {
  return e = Cl(e), at(e.getUTCFullYear() % 100, t, 2);
}
function $h(e, t) {
  return at(e.getUTCFullYear() % 1e4, t, 4);
}
function Ah(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? Bn(e) : Bn.ceil(e), at(e.getUTCFullYear() % 1e4, t, 4);
}
function Eh() {
  return "+0000";
}
function si() {
  return "%";
}
function ii(e) {
  return +e;
}
function li(e) {
  return Math.floor(+e / 1e3);
}
var Nn, jl;
Fh({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Fh(e) {
  return Nn = Ff(e), jl = Nn.format, Nn.parse, Nn.utcFormat, Nn.utcParse, Nn;
}
function Ph(e) {
  return new Date(e);
}
function Rh(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ml(e, t, n, a, o, s, i, l, c, d) {
  var u = yl(), f = u.invert, h = u.domain, p = d(".%L"), x = d(":%S"), m = d("%I:%M"), g = d("%I %p"), S = d("%a %d"), N = d("%b %d"), C = d("%B"), k = d("%Y");
  function v(_) {
    return (c(_) < _ ? p : l(_) < _ ? x : i(_) < _ ? m : s(_) < _ ? g : a(_) < _ ? o(_) < _ ? S : N : n(_) < _ ? C : k)(_);
  }
  return u.invert = function(_) {
    return new Date(f(_));
  }, u.domain = function(_) {
    return arguments.length ? h(Array.from(_, Rh)) : h().map(Ph);
  }, u.ticks = function(_) {
    var j = h();
    return e(j[0], j[j.length - 1], _ ?? 10);
  }, u.tickFormat = function(_, j) {
    return j == null ? v : d(j);
  }, u.nice = function(_) {
    var j = h();
    return (!_ || typeof _.range != "function") && (_ = t(j[0], j[j.length - 1], _ ?? 10)), _ ? h(vf(j, _)) : u;
  }, u.copy = function() {
    return xl(u, Ml(e, t, n, a, o, s, i, l, c, d));
  }, u;
}
function hs() {
  return ja.apply(Ml(Af, Ef, tn, ir, Ma, mr, us, ds, In, jl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Bh({
  task: e,
  scale: t,
  onTaskClick: n,
  onTaskDoubleClick: a,
  isSelected: o = !1,
  taskIndex: s,
  tabIndex: i = -1,
  onFocus: l,
  "aria-label": c
}) {
  const d = Ze(null), [u, f] = Oe(!1), [h, p] = Oe(!1), x = t(e.start), m = t(e.end), g = Math.max(m - x, 20), S = () => {
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
  }, N = e.progress ? g * e.progress / 100 : 0, C = () => {
    n?.(e);
  }, k = () => {
    a?.(e);
  }, v = (M) => {
    M.key === "Enter" ? (M.preventDefault(), C()) : M.key === " " && (M.preventDefault(), k());
  }, _ = () => {
    f(!0);
  }, j = () => {
    f(!1);
  }, b = () => {
    p(!0), l?.();
  }, y = () => {
    p(!1);
  }, w = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (h || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), T = {
    "--task-left": `${x}px`,
    "--task-width": `${g}px`,
    "--task-color": S(),
    left: `${x}px`,
    width: `${g}px`,
    backgroundColor: S()
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: d,
      "data-task-index": s,
      className: w,
      style: T,
      onClick: C,
      onDoubleClick: k,
      onKeyDown: v,
      onMouseDown: _,
      onMouseUp: j,
      onFocus: b,
      onBlur: y,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${N}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Hh({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = Oe(-1), c = Ze(null), d = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const x = Math.max(0, i === -1 ? 0 : i - 1);
      l(x), h(x);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const x = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(x), h(x);
    } else if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .timeline-container") : null)?.focus();
    else if (p.key === "Home")
      p.preventDefault(), l(0), h(0);
    else if (p.key === "End") {
      p.preventDefault();
      const x = a.length - 1;
      l(x), h(x);
    }
  }, u = (p) => {
    if (p.key === "ArrowDown")
      p.preventDefault(), typeof document < "u" && (typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(".gantt-row .resource-label") : null)?.focus();
    else if (p.key === "ArrowRight") {
      p.preventDefault();
      const x = c.current;
      x && x.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => h(0), 0));
  }, h = (p) => {
    const x = c.current?.querySelector(`[data-date-index="${p}"]`);
    x && x.focus();
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
            onKeyDown: u,
            children: "Resources"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            ref: c,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": n,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: d,
            onFocus: f,
            children: a.map((p, x) => {
              const m = p.getTime() === s.getTime(), g = i === x;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": x,
                  className: `date-column ${m ? "today" : ""} ${g ? "focused" : ""}`,
                  tabIndex: g ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${m ? " (Today)" : ""}`,
                  onFocus: () => l(x),
                  onKeyDown: d,
                  children: p.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                x
              );
            })
          }
        )
      ]
    }
  );
}
function zh({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = Oe(!1), [d, u] = Oe(-1), f = Ze(null);
  nt(() => {
    l && d >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${d}"]`)?.focus();
    }, 0);
  }, [l, d, t.length]);
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
          t.length > 0 && (m.preventDefault(), c(!0), u(0));
          break;
      }
      return;
    }
    switch (m.key) {
      case "ArrowLeft":
        m.preventDefault();
        const g = Math.max(0, d - 1);
        u(g), f.current?.querySelector(`[data-task-index="${g}"]`)?.focus();
        break;
      case "ArrowRight":
        m.preventDefault();
        const N = Math.min(t.length - 1, d + 1);
        u(N), f.current?.querySelector(`[data-task-index="${N}"]`)?.focus();
        break;
      case "Enter":
        m.preventDefault(), d >= 0 && a?.(t[d]);
        break;
      case " ":
        m.preventDefault(), d >= 0 && o?.(t[d]);
        break;
      case "Escape":
        m.preventDefault(), c(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (m) => {
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
  }, x = (m) => {
    l && u(m);
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
            onKeyDown: p,
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
              l || u(-1);
            },
            children: t.map((m, g) => /* @__PURE__ */ r.jsx(
              Bh,
              {
                task: m,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && d === g,
                taskIndex: g,
                tabIndex: l && d === g ? 0 : -1,
                onFocus: () => x(g)
              },
              m.id
            ))
          }
        )
      ]
    }
  );
}
function i1({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ze(null), [l, c] = Oe(800), d = Re(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const m = new Date(n);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : m;
  }, [n]), u = Re(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const m = new Date(a);
    return isNaN(m.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : m;
  }, [a]), f = Re(() => Math.ceil((u.getTime() - d.getTime()) / 864e5) + 1, [d, u]);
  nt(() => {
    if (!i.current || typeof window > "u") return;
    const m = typeof ResizeObserver < "u" ? ResizeObserver : void 0;
    if (!m) return;
    const g = new m((S) => {
      const N = S[0];
      N && c(Math.max(N.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const h = Re(
    () => hs().domain([d, u]).range([0, l]),
    [d, u, l]
  ), p = Re(() => {
    const m = /* @__PURE__ */ new Map();
    return t.forEach((g) => {
      const S = m.get(g.resourceId) || [];
      S.push(g), m.set(g.resourceId, S);
    }), m;
  }, [t]), x = (m) => {
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
      onKeyDown: x,
      children: [
        /* @__PURE__ */ r.jsx(Hh, { viewStart: d, viewEnd: u, dateCount: f }),
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
            children: e.map((m, g) => /* @__PURE__ */ r.jsx(
              zh,
              {
                resource: m,
                tasks: p.get(m.id) || [],
                scale: h,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: g,
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
const Wr = ({
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
) }), Oh = ({
  items: e = [],
  children: t,
  classes: n,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? tt.Children.toArray(t).filter(
    (g) => tt.isValidElement(g) && (g.type === Wr || g.type?.displayName === "BreadcrumbItem")
  ).map((g) => ({
    text: typeof g.props.children == "string" ? g.props.children : String(g.props.children),
    href: g.props.href,
    active: g.props.active,
    attributes: g.props.attributes
  })) : [], d = () => t ? c() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const m = d();
    if (m && m.length > 0) {
      const g = m.slice().reverse().find((S) => S.href && !S.active);
      if (g)
        return { href: g.href, text: g.text };
    }
    return { text: "Home" };
  }, f = d(), h = u(), p = ke(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    n
  ), x = a;
  return /* @__PURE__ */ r.jsxs(
    "nav",
    {
      className: p,
      "aria-label": x,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ r.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          tt.Children.map(t, (m, g) => tt.isValidElement(m) && (m.type === Wr || m.type?.displayName === "BreadcrumbItem") ? tt.cloneElement(m, { key: g }) : null)
        ) : (
          // Render from items array
          f?.filter((m) => m.active || !!m.href).map((m, g) => /* @__PURE__ */ r.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: m.active ? /* @__PURE__ */ r.jsx(
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
          ) }, g))
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
}, Il = Oh;
Il.Item = Wr;
Wr.displayName = "BreadcrumbItem";
const Dl = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const o = ke("nhsuk-skip-link", n);
  return /* @__PURE__ */ r.jsx(
    "a",
    {
      className: o,
      href: t,
      "data-module": "nhsuk-skip-link",
      ...a,
      children: e
    }
  );
}, l1 = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: n,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = ke("nhsuk-pagination", o);
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
}, c1 = ({
  items: e,
  classes: t,
  ariaLabel: n = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ke("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ r.jsx(
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
}, Tl = tt.forwardRef(({
  variant: e = "default",
  heading: t,
  headingHtml: n,
  headingLevel: a = 2,
  headingClasses: o,
  description: s,
  descriptionHtml: i,
  href: l,
  imgURL: c,
  imgAlt: d,
  ...u
}, f) => {
  const h = [
    "nhsuk-card",
    e === "clickable" && "nhsuk-card--clickable",
    e === "secondary" && "nhsuk-card--secondary",
    e === "feature" && "nhsuk-card--feature",
    u.className
  ].filter(Boolean).join(" "), p = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), x = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), m = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const N = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      Ht,
      {
        level: a,
        className: x,
        children: N()
      }
    );
  }, g = () => u.children ? u.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, S = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
      ...u,
      className: h,
      ref: f,
      children: [
        c && /* @__PURE__ */ r.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: c,
            alt: d || ""
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: p, children: [
          m(),
          g(),
          S()
        ] })
      ]
    }
  );
});
Tl.displayName = "Card";
const d1 = ({
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
}, u1 = ({
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
}, f1 = ({
  type: e,
  heading: t,
  headingHtml: n,
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
  "aria-describedby": p
}) => {
  const x = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), m = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), g = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const N = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], C = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        N,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      Ht,
      {
        level: a,
        className: m,
        children: C
      }
    );
  }, S = () => c || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: x,
      "data-testid": d,
      id: u,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          g(),
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: S() })
      ]
    }
  );
}, Uh = ({
  id: e,
  className: t,
  headingText: n,
  headingHtml: a,
  headingLevel: o = 2,
  bodyText: s,
  bodyHtml: i,
  children: l,
  ...c
}) => {
  const d = ke(
    "nhsuk-panel",
    t
  ), u = () => !n && !a && !l ? null : a ? /* @__PURE__ */ r.jsx(
    Ht,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : n ? /* @__PURE__ */ r.jsx(
    Ht,
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
  return /* @__PURE__ */ r.jsxs("div", { className: d, id: e, ...c, children: [
    u(),
    f()
  ] });
}, h1 = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = ke("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, p1 = ({
  items: e,
  noBorder: t = !1,
  className: n,
  ...a
}) => {
  const o = ke(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    n
  ), s = (l) => l.children ? l.children : l.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text ? l.text : null, i = (l) => !l || !l.items.length ? null : /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__actions", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-summary-list__actions-list", children: l.items.map((c, d) => /* @__PURE__ */ r.jsx(
    "li",
    {
      className: "nhsuk-summary-list__actions-list-item",
      children: /* @__PURE__ */ r.jsxs(
        "a",
        {
          href: c.href,
          className: "nhsuk-link",
          ...c.attributes,
          children: [
            s(c),
            c.visuallyHiddenText && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: c.visuallyHiddenText })
          ]
        }
      )
    },
    d
  )) }) });
  return /* @__PURE__ */ r.jsx("div", { className: "nhsuk-summary-list-container", children: /* @__PURE__ */ r.jsx("dl", { className: o, ...a, children: e.map((l, c) => /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-summary-list__row", children: [
    /* @__PURE__ */ r.jsx("dt", { className: "nhsuk-summary-list__key", children: s(l.key) }),
    /* @__PURE__ */ r.jsx("dd", { className: "nhsuk-summary-list__value", children: s(l.value) }),
    i(l.actions)
  ] }, c)) }) });
}, Zn = { current: null }, Wh = () => {
  if (Zn.current) return Zn.current;
  try {
    Zn.current = require("prismjs");
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
    Zn.current = null;
  }
  return Zn.current;
}, Gh = (e) => {
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
}, Gr = (e, t, n) => {
  if (n || !t) return e;
  const a = Wh();
  if (a && a.languages) {
    const o = a.languages[t] ? t : a.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : a.languages.json && t === "json" ? "json" : void 0;
    if (o)
      try {
        return a.highlight(e, a.languages[o], o);
      } catch {
      }
  }
  return Gh(e);
}, Vh = ({
  rows: e,
  head: t,
  caption: n,
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
  "data-testid": p,
  columns: x,
  data: m,
  visuallyHiddenCaption: g = !1
}) => {
  const S = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), N = ke(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), C = ke(f), k = (y, w) => {
    const T = ke(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${y.format}`]: y.format
      },
      y.classes
    ), M = {
      scope: "col",
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && { role: "columnheader" },
      ...y.attributes
    };
    let A;
    if (y.node != null)
      A = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      A = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const I = Array.isArray(y.code), D = I ? y.code.join(`
`) : y.code, $ = I || D.includes(`
`), H = {
        className: ke("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": $,
          "nhsuk-table__code--inline": !$
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, Z = Gr(D, y.codeLanguage);
      A = $ ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: Z }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...H,
          dangerouslySetInnerHTML: { __html: Z }
        }
      );
    } else
      A = y.text;
    return /* @__PURE__ */ r.jsx("th", { className: T, ...M, children: A }, w);
  }, v = (y, w, T) => {
    const M = o && T || y.rowHeader, A = ke(
      M ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${M ? "header" : "cell"}--${y.format}`]: y.format
      },
      y.classes
    ), I = {
      ...M && { scope: "row" },
      ...y.colspan && { colSpan: y.colspan },
      ...y.rowspan && { rowSpan: y.rowspan },
      ...s && {
        role: M ? "rowheader" : "cell",
        ...y.header && { "data-label": y.header }
      },
      ...y.attributes
    };
    let D;
    if (y.node != null)
      D = /* @__PURE__ */ r.jsx(r.Fragment, { children: y.node });
    else if (y.html)
      D = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: y.html } });
    else if (y.code != null) {
      const Z = Array.isArray(y.code), K = Z ? y.code.join(`
`) : y.code, ne = Z || K.includes(`
`), B = {
        className: ke("nhsuk-table__code", y.codeClassName, {
          "nhsuk-table__code--block": ne,
          "nhsuk-table__code--inline": !ne
        }),
        ...y.codeLanguage ? { "data-language": y.codeLanguage } : {}
      }, F = Gr(
        K,
        y.codeLanguage,
        y.disableHighlight
      );
      D = ne ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
        "code",
        {
          ...B,
          dangerouslySetInnerHTML: { __html: F }
        }
      ) }) : /* @__PURE__ */ r.jsx(
        "code",
        {
          ...B,
          dangerouslySetInnerHTML: { __html: F }
        }
      );
    } else
      D = y.text;
    const $ = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && y.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        y.header,
        " "
      ] }),
      D
    ] }), H = M ? "th" : "td";
    return /* @__PURE__ */ r.jsx(H, { className: A, ...I, children: $ }, w);
  };
  let _ = t, j = e;
  !_ && x && x.length && (_ = x.map((y) => ({
    text: y.title,
    format: y.format,
    classes: y.headerClasses,
    attributes: y.headerAttributes
  }))), !j && x && m && m.length && (j = m.map((y, w) => x.map((T) => {
    const M = T.accessor ? T.accessor(y, w) : y[T.key];
    let A = { format: T.format, classes: T.cellClasses, attributes: T.cellAttributes };
    if (T.rowHeader && (A.rowHeader = !0), T.render) {
      const I = T.render(M, y, w, T);
      return I == null || typeof I == "boolean" ? { ...A, text: "" } : typeof I == "string" || typeof I == "number" ? { ...A, text: String(I) } : { ...A, ...I };
    }
    return { ...A, text: M != null ? String(M) : "" };
  })));
  const b = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: N,
      ...s && { role: "table" },
      ...h,
      ...p && { "data-testid": p },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: ke(S, g && "nhsuk-u-visually-hidden"), children: n }),
        _ && _.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: _.map(
              (y, w) => k(y, w)
            ) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: j && j.map((y, w) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: y.map(
              (T, M) => v(T, M, M === 0)
            )
          },
          w
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ r.jsxs(Uh, { className: d, children: [
    i && /* @__PURE__ */ r.jsx(Ht, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    b()
  ] }) : C ? /* @__PURE__ */ r.jsx("div", { className: C, children: b() }) : b();
}, Yh = ({
  children: e,
  size: t,
  className: n
}) => {
  const a = ke(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    n
  );
  return /* @__PURE__ */ r.jsx("caption", { className: a, children: e });
}, Ll = ({
  responsive: e,
  className: t,
  children: n,
  ...a
}) => {
  const o = e ? { role: "row" } : {};
  return /* @__PURE__ */ r.jsx("tr", { className: t, ...o, ...a, children: n });
}, $l = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  as: p = "th"
}) => {
  const x = ke(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${l}`]: l },
    c
  ), m = {
    scope: "col",
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...h && { role: "columnheader" },
    ...f
  };
  let g;
  if (n != null) g = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) g = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const N = Array.isArray(a), C = N ? a.join(`
`) : a, k = N || C.includes(`
`), v = {
      className: ke("nhsuk-table__code", s, {
        "nhsuk-table__code--block": k,
        "nhsuk-table__code--inline": !k
      }),
      ...o ? { "data-language": o } : {}
    }, _ = Gr(
      C,
      o,
      i
    );
    g = k ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx(
      "code",
      {
        ...v,
        dangerouslySetInnerHTML: { __html: _ }
      }
    ) }) : /* @__PURE__ */ r.jsx("code", { ...v, dangerouslySetInnerHTML: { __html: _ } });
  } else g = e;
  const S = p;
  return /* @__PURE__ */ r.jsx(S, { className: x, ...m, children: g });
}, Zh = ({
  text: e,
  html: t,
  node: n,
  code: a,
  codeLanguage: o,
  codeClassName: s,
  disableHighlight: i,
  format: l,
  classes: c,
  colspan: d,
  rowspan: u,
  attributes: f,
  responsive: h,
  rowHeader: p
}) => {
  const x = !!p, m = x ? "th" : "td", g = ke(
    x ? "nhsuk-table__header" : "nhsuk-table__cell",
    l && `nhsuk-table__${x ? "header" : "cell"}--${l}`,
    c
  ), S = {
    ...d && { colSpan: d },
    ...u && { rowSpan: u },
    ...x && { scope: "row" },
    ...h && { role: x ? "rowheader" : "cell" },
    ...f
  };
  let N;
  if (n != null) N = /* @__PURE__ */ r.jsx(r.Fragment, { children: n });
  else if (t) N = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (a != null) {
    const C = Array.isArray(a), k = C ? a.join(`
`) : a, v = C || k.includes(`
`), _ = {
      className: ke("nhsuk-table__code", s, {
        "nhsuk-table__code--block": v,
        "nhsuk-table__code--inline": !v
      }),
      ...o ? { "data-language": o } : {}
    }, j = Gr(k, o, i);
    N = v ? /* @__PURE__ */ r.jsx("pre", { className: "nhsuk-table__pre", children: /* @__PURE__ */ r.jsx("code", { ..._, dangerouslySetInnerHTML: { __html: j } }) }) : /* @__PURE__ */ r.jsx("code", { ..._, dangerouslySetInnerHTML: { __html: j } });
  } else N = e;
  return /* @__PURE__ */ r.jsx(m, { className: g, ...S, children: N });
}, nn = Vh;
nn.Caption = Yh;
nn.BodyRow = Ll;
nn.HeaderCell = $l;
nn.Cell = Zh;
let ci = !1, di = !1;
Object.defineProperty(nn, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ci && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), ci = !0), Ll;
  }
});
Object.defineProperty(nn, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !di && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), di = !0), $l;
  }
});
const m1 = On(({
  items: e,
  defaultActiveTab: t,
  activeTab: n,
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
  const p = n !== void 0, [x, m] = Oe(() => t || e[0]?.id || ""), g = p ? n : x, S = Ze(null), N = Ze(/* @__PURE__ */ new Map()), C = fe((w) => {
    p || m(w), a?.(w);
  }, [p, a]), k = fe((w) => {
    o?.(w), l && C(w);
  }, [o, l, C]), v = fe((w, T) => {
    const M = e.filter((D) => !D.disabled).map((D) => D.id), A = M.indexOf(T);
    let I = null;
    switch (w.key) {
      case "ArrowLeft":
        I = A > 0 ? A - 1 : M.length - 1;
        break;
      case "ArrowRight":
        I = A < M.length - 1 ? A + 1 : 0;
        break;
      case "Home":
        I = 0;
        break;
      case "End":
        I = M.length - 1;
        break;
      case "Escape":
        w.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (I !== null) {
      w.preventDefault();
      const D = M[I], $ = N.current.get(D);
      $ && ($.focus(), k(D));
    }
  }, [e, k, i]), _ = fe((w, T) => {
    T ? N.current.set(w, T) : N.current.delete(w);
  }, []), j = fe((w) => {
    const T = N.current.get(w);
    T && T.focus();
  }, []);
  Ji(h, () => ({
    focusTab: j,
    getActiveTab: () => g,
    getTabListElement: () => S.current
  }), [j, g]);
  const b = fe((w) => {
    const T = w.relatedTarget;
    S.current?.contains(T) || s?.();
  }, [s]), y = ke("nhsuk-tabs", c);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: y,
      id: d,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: S,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: b,
                children: e.map((w) => {
                  const T = w.id === g, M = w.disabled, A = ke("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": T,
                    "nhsuk-tabs__list-item--disabled": M
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: A, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (I) => _(w.id, I),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": T,
                      "aria-controls": `${w.id}-panel`,
                      id: `${w.id}-tab`,
                      tabIndex: T ? 0 : -1,
                      disabled: M,
                      onClick: () => !M && C(w.id),
                      onKeyDown: (I) => !M && v(I, w.id),
                      onFocus: () => !M && k(w.id),
                      ...w.attributes,
                      children: w.label
                    }
                  ) }, w.id);
                })
              }
            )
          }
        ),
        e.map((w) => {
          const T = w.id === g;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${w.id}-tab`,
              id: `${w.id}-panel`,
              hidden: !T,
              children: w.content
            },
            w.id
          );
        })
      ]
    }
  );
}), qh = On(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
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
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
qh.displayName = "Details";
const Jh = On(
  ({
    title: e,
    type: t,
    items: n,
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
    ], u = () => t === "cross" ? /* @__PURE__ */ r.jsxs(
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
    ), f = (p) => t === "cross" && !a ? `do not ${p}` : p, h = () => /* @__PURE__ */ r.jsx(
      Ht,
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
        className: c.join(" "),
        ...i,
        children: [
          h(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: d.join(" "), role: "list", children: n.map((p, x) => /* @__PURE__ */ r.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, x)) }) })
        ]
      }
    );
  }
);
Jh.displayName = "DoDontList";
const Xh = On(
  ({
    summaryText: e,
    summaryHtml: t,
    text: n,
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
        ref: d,
        id: i,
        className: u,
        open: o,
        ...c,
        children: [
          /* @__PURE__ */ r.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-details__text", children: h })
        ]
      }
    );
  }
);
Xh.displayName = "Expander";
const Kh = On(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, c) => {
      const d = c + 1, u = `${t}-${d}-hint`, f = `${t}-${d}-status`, h = !!l.href, p = [
        "nhsuk-task-list__item",
        h && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), x = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Qh,
        {
          item: l,
          itemClasses: p,
          hasLink: h,
          hintId: u,
          statusId: f,
          ariaDescribedBy: x
        },
        c
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
), Qh = ({
  item: e,
  itemClasses: t,
  hasLink: n,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const d = e.title.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      n ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return n ? /* @__PURE__ */ r.jsx(
      "a",
      {
        className: u,
        href: e.href,
        "aria-describedby": s,
        children: d
      }
    ) : /* @__PURE__ */ r.jsx("div", { className: e.title.classes || "", children: d });
  }, l = () => e.hint ? e.hint.html ? /* @__PURE__ */ r.jsx(
    "div",
    {
      id: a,
      className: "nhsuk-task-list__hint",
      dangerouslySetInnerHTML: { __html: e.hint.html }
    }
  ) : /* @__PURE__ */ r.jsx("div", { id: a, className: "nhsuk-task-list__hint", children: e.hint.text }) : null, c = () => {
    const d = [
      "nhsuk-task-list__status",
      e.status.classes
    ].filter(Boolean).join(" ");
    let u;
    return e.status.tag ? u = /* @__PURE__ */ r.jsx(st, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ r.jsx("div", { className: d, id: o, children: u });
  };
  return /* @__PURE__ */ r.jsxs("li", { className: t, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Kh.displayName = "TaskList";
const g1 = ({
  heading: e,
  headingLevel: t = 3,
  text: n,
  html: a,
  children: o,
  className: s,
  ...i
}) => {
  const l = /important/i.test(e), c = () => o || (a ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : n ? /* @__PURE__ */ r.jsx("p", { children: n }) : null), d = [
    "nhsuk-warning-callout",
    s
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: d,
      ...i,
      children: [
        Yi(
          u,
          { className: "nhsuk-warning-callout__label" },
          l ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            e,
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: ":" })
          ] }) : /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Important: " }),
            e
          ] })
        ),
        c()
      ]
    }
  );
}, x1 = ({
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
}, ep = ({
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
    /* @__PURE__ */ r.jsx(xt, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ r.jsx(xt, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ r.jsx(xt, { variant: "secondary", size: "small", onClick: n, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ r.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ r.jsx(
      $r,
      {
        id: "slot-matrix-density-select",
        name: "slot-matrix-density",
        ariaLabel: "Change density",
        value: o,
        onChange: (c) => s?.(c.target.value),
        options: [
          { value: "comfortable", text: "Comfortable" },
          { value: "compact", text: "Compact" }
        ]
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-mode-select", children: "Mode" }),
    /* @__PURE__ */ r.jsx(
      $r,
      {
        id: "slot-matrix-mode-select",
        name: "slot-matrix-mode",
        ariaLabel: "Change accessibility mode",
        value: i,
        onChange: (c) => l?.(c.target.value),
        options: [
          { value: "grid", text: "Grid" },
          { value: "list", text: "List" }
        ]
      }
    )
  ] })
] }), tp = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(st, { color: np(n.status), text: n.label }) }, n.status)) });
function np(e) {
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
const y1 = ({
  slots: e,
  sessions: t,
  // dateRange reserved for future horizontal multi-day features
  value: n,
  defaultValue: a,
  onChange: o,
  selectionMode: s = "single",
  a11yMode: i,
  className: l,
  style: c,
  getSlotAriaLabel: d,
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: h,
  enableDefaultLegend: p = !0,
  legendPlacement: x = "bottom",
  onA11yModeChange: m
}) => {
  const [g, S] = Oe("grid"), N = i || g, [C, k] = Oe(a || []), v = n ?? C, _ = Re(() => {
    const I = /* @__PURE__ */ new Set();
    return e.forEach((D) => I.add(new Date(D.start).getTime())), Array.from(I).sort((D, $) => D - $);
  }, [e]), j = Re(() => {
    const I = {};
    return e.forEach((D) => {
      const $ = new Date(D.start).getTime();
      I[$] || (I[$] = {});
      const H = D.capacity - D.booked - (D.held || 0);
      I[$][D.sessionId] = { slot: D, remaining: H };
    }), I;
  }, [e]), b = fe((I) => {
    if (s === "single") {
      const D = [I.id];
      n || k(D), o?.(D, { lastAction: "select" });
    } else {
      const D = v.includes(I.id), $ = D ? v.filter((H) => H !== I.id) : [...v, I.id];
      n || k($), o?.($, { lastAction: D ? "deselect" : "select" });
    }
  }, [s, v, n, o]), y = Re(() => h || (p ? Array.from(new Set(e.map((D) => D.status))).map((D) => ({
    status: D,
    label: D.charAt(0).toUpperCase() + D.slice(1)
  })) : void 0), [h, p, e]), w = y ? /* @__PURE__ */ r.jsx(
    tp,
    {
      items: y,
      orientation: x === "left" || x === "right" ? "vertical" : "horizontal"
    }
  ) : null, T = (I) => {
    i || S(I), m?.(I);
  }, M = u || (f ? /* @__PURE__ */ r.jsx(
    ep,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: N,
      onA11yModeChange: T
    }
  ) : null), A = /* @__PURE__ */ r.jsx("div", { style: c, className: ke(l), children: /* @__PURE__ */ r.jsx(co, { className: ke("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(ln, { children: /* @__PURE__ */ r.jsx(rr, { width: bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    x === "top" && w,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((I) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => b(I), "aria-pressed": v.includes(I.id), children: [
      qn(new Date(I.start)),
      " – ",
      qn(new Date(I.end)),
      " (",
      I.status,
      ")"
    ] }) }, I.id)) }),
    x === "bottom" && w
  ] }) }) }) }) });
  return N === "list" ? A : /* @__PURE__ */ r.jsx("div", { style: c, className: ke(l), children: /* @__PURE__ */ r.jsx(co, { className: ke("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(ln, { children: /* @__PURE__ */ r.jsx(rr, { width: bn.Full, children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    M,
    x === "top" && w,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": _.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((I) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${I.specialty}`, className: "nhs-slot-matrix__session-header", children: I.specialty }, I.id))
      ] }),
      _.map((I) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": qn(new Date(I)), children: qn(new Date(I)) }),
        t.map((D) => {
          const $ = j[I]?.[D.id];
          if (!$)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, D.id);
          const { slot: H, remaining: Z } = $, K = v.includes(H.id), ne = d ? d(H) : `Slot ${qn(new Date(H.start))} ${H.status}${Z === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": H.status,
              className: ke("nhs-slot-matrix__cell", K && "nhs-slot-matrix__cell--selected"),
              "aria-label": ne,
              "aria-selected": K || void 0,
              onClick: () => b(H),
              children: Z > 0 ? `${Z} left` : "Full"
            },
            H.id
          );
        })
      ] }, I))
    ] }),
    x === "bottom" && w
  ] }) }) }) }) });
};
function ui(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function qn(e) {
  return `${ui(e.getHours())}:${ui(e.getMinutes())}`;
}
function Al(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Al(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Pt() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Al(e)) && (a && (a += " "), a += t);
  return a;
}
const rp = ({ level: e, children: t, className: n }) => {
  const a = `h${e}`;
  return tt.createElement(a, { className: n }, t);
}, ap = ({ href: e, children: t, className: n, ...a }) => /* @__PURE__ */ r.jsx("a", { href: e, className: n, ...a, children: t });
function Cr(e, t) {
  return /* @__PURE__ */ r.jsx("span", { className: Pt("nhs-step-nav__title", { "nhs-step-nav__title--current": t }), children: e.title });
}
const b1 = ({
  id: e,
  className: t,
  ariaLabel: n = "Step by step",
  heading: a,
  summary: o,
  headingLevel: s = 3,
  variant: i = "full-width",
  items: l,
  numbered: c = !0,
  currentStepId: d,
  renderLink: u,
  collapsible: f = !0,
  singleOpen: h = !1,
  defaultExpandedIds: p,
  expandedIds: x,
  onToggle: m,
  showAllControls: g = !1,
  autoFocusExpanded: S = !1
}) => {
  const N = u ?? ap, C = i === "sidebar" ? { as: "aside", className: "nhs-step-nav nhs-step-nav--sidebar" } : { as: "nav", className: "nhs-step-nav nhs-step-nav--full" }, k = C.as === "aside" ? "aside" : "nav", v = x === void 0, [_, j] = Oe(
    () => new Set(p ?? [])
  ), b = Re(() => v ? _ : new Set(x), [v, _, x]), y = Re(
    () => l.some((I) => I.description || I.items && I.items.length > 0),
    [l]
  ), w = fe((I) => b.has(I), [b]), T = fe((I, D) => {
    v && j(($) => {
      if (h)
        return D ? /* @__PURE__ */ new Set([I]) : /* @__PURE__ */ new Set();
      const H = new Set($);
      return D ? H.add(I) : H.delete(I), H;
    }), m?.(I, D);
  }, [v, m, h]), M = fe((I) => {
    const D = l.filter(($) => $.description || $.items && $.items.length > 0).map(($) => $.id);
    v && j(() => I ? h ? new Set(D.slice(0, 1)) : new Set(D) : /* @__PURE__ */ new Set()), D.forEach(($) => m?.($, I));
  }, [l, v, m, h]), A = fe((I, D) => {
    const $ = !w(I.id);
    if (T(I.id, $), $ && S) {
      const H = document.getElementById(`sbs-${I.id}-panel`);
      H && H.querySelector(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )?.focus();
    } else
      D?.focus();
  }, [S, w, T]);
  return tt.createElement(
    k,
    { id: e, "aria-label": n, className: Pt(C.className, t) },
    /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      i === "full-width" && (a || o) && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__intro", children: [
        a && /* @__PURE__ */ r.jsx(rp, { level: s, className: "nhs-step-nav__heading", children: a }),
        o && /* @__PURE__ */ r.jsx("p", { className: "nhs-step-nav__summary", children: o }),
        f && !h && g && y && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__controls", children: [
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => M(!0), children: "Show all" }),
          /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhs-step-nav__control", onClick: () => M(!1), children: "Hide all" })
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("ol", { className: Pt("nhs-step-nav__list", { "nhs-step-nav__list--numbered": c }), children: l.map((I, D) => {
        const $ = d === I.id, H = Pt(
          "nhs-step-nav__item",
          $ && "nhs-step-nav__item--current",
          I.status && `nhs-step-nav__item--${I.status}`
        ), Z = I.href ? /* @__PURE__ */ r.jsx(N, { href: I.href, className: "nhs-step-nav__link", "aria-current": $ ? "step" : void 0, children: Cr(I, $) }) : Cr(I, $), K = !!(I.description || I.items && I.items.length > 0), ne = f && K ? w(I.id) : !0, B = `sbs-${I.id}-header`, F = `sbs-${I.id}-panel`;
        return /* @__PURE__ */ r.jsxs("li", { className: H, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__header", children: [
            Z,
            (I.optional || I.duration || I.meta) && /* @__PURE__ */ r.jsxs("div", { className: "nhs-step-nav__meta", children: [
              I.optional && /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__optional", "aria-label": "Optional", children: "Optional" }),
              I.duration && /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__duration", children: I.duration }),
              I.meta
            ] }),
            f && K && /* @__PURE__ */ r.jsx(
              "button",
              {
                id: B,
                type: "button",
                className: "nhs-step-nav__toggle",
                "aria-expanded": ne,
                "aria-controls": F,
                onClick: (L) => A(I, L.currentTarget),
                "aria-label": (ne ? "Hide" : "Show") + ` details for ${typeof I.title == "string" ? I.title : "this step"}`,
                children: /* @__PURE__ */ r.jsx("span", { className: "nhs-step-nav__toggle-icon", "aria-hidden": "true" })
              }
            )
          ] }),
          K && (!f || ne) && /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: F,
              role: "region",
              "aria-labelledby": f ? B : void 0,
              className: Pt("nhs-step-nav__content"),
              children: [
                I.description && /* @__PURE__ */ r.jsx("p", { className: "nhs-step-nav__description", children: I.description }),
                I.items && I.items.length > 0 && /* @__PURE__ */ r.jsx("ol", { className: "nhs-step-nav__sublist", children: I.items.map((L) => {
                  const G = d === L.id, E = L.href ? /* @__PURE__ */ r.jsx(N, { href: L.href, className: "nhs-step-nav__sublink", "aria-current": G ? "step" : void 0, children: Cr(L, G) }) : Cr(L, G);
                  return /* @__PURE__ */ r.jsx("li", { className: Pt("nhs-step-nav__subitem", L.status && `nhs-step-nav__subitem--${L.status}`), children: E }, L.id);
                }) })
              ]
            }
          )
        ] }, I.id || D);
      }) })
    ] })
  );
}, op = ({
  title: e,
  value: t,
  subtitle: n,
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
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Ht, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
    /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__value", children: t }),
    n && /* @__PURE__ */ r.jsx("p", { className: "nhs-fdp-summary-card__subtitle", children: n })
  ] });
  return o ? /* @__PURE__ */ r.jsx(
    "a",
    {
      className: `${c} nhs-fdp-summary-card--clickable`,
      href: o,
      "aria-label": i || `${e}: ${t}`,
      ...l,
      children: d
    }
  ) : /* @__PURE__ */ r.jsx(
    "div",
    {
      className: c,
      "aria-label": i,
      ...l,
      children: d
    }
  );
}, v1 = ({
  cards: e,
  className: t = "",
  ...n
}) => {
  const a = ["nhs-fdp-dashboard-summary-grid", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { className: a, ...n, children: /* @__PURE__ */ r.jsx(co, { children: /* @__PURE__ */ r.jsx(ln, { children: e.map((o, s) => /* @__PURE__ */ r.jsx(
    rr,
    {
      width: bn.OneQuarter,
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ r.jsx(op, { ...o })
    },
    s
  )) }) }) });
};
var Dr = /* @__PURE__ */ ((e) => (e.String = "string", e.Number = "number", e.Boolean = "boolean", e.Date = "date", e.Custom = "custom", e))(Dr || {}), Hn = /* @__PURE__ */ ((e) => (e.First = "first", e.Last = "last", e))(Hn || {}), Xn = /* @__PURE__ */ ((e) => (e.TrueFirst = "trueFirst", e.FalseFirst = "falseFirst", e))(Xn || {});
function fi(e) {
  if (e == null) return null;
  const n = (e instanceof Date ? e : new Date(e)).getTime();
  return Number.isNaN(n) ? null : n;
}
const sp = new Intl.Collator(void 0, { numeric: !0, sensitivity: "base" });
function ip(e, t) {
  return sp.compare(String(e), String(t));
}
function hi(e, t) {
  if (t.sortAccessor) return t.sortAccessor(e);
  if (t.useRendererForSort) {
    if (t.tableRenderer) return t.tableRenderer(e);
    if (t.render) return t.render(e);
  }
  return e[t.key];
}
function lp(e, t, n, a) {
  if (n?.sortComparator)
    return n.sortComparator(e, t);
  const o = n?.sortType;
  if (o === Dr.Number) {
    const s = Number(e), i = Number(t), l = Number.isNaN(s), c = Number.isNaN(i);
    return l && c ? 0 : l ? 1 : c ? -1 : s - i;
  }
  if (o === Dr.Boolean) {
    const s = !!e, i = !!t, l = n?.booleanOrder ?? a?.booleanOrder ?? Xn.FalseFirst;
    return s === i ? 0 : l === Xn.TrueFirst ? s ? -1 : 1 : s ? 1 : -1;
  }
  if (o === Dr.Date) {
    const s = fi(e), i = fi(t);
    return s == null && i == null ? 0 : s == null ? 1 : i == null ? -1 : s - i;
  }
  if (typeof e == "number" && typeof t == "number") {
    const s = Number.isNaN(e), i = Number.isNaN(t);
    return s && i ? 0 : s ? 1 : i ? -1 : e - t;
  }
  if (typeof e == "boolean" && typeof t == "boolean") {
    const s = n?.booleanOrder ?? a?.booleanOrder ?? Xn.FalseFirst;
    return e === t ? 0 : s === Xn.TrueFirst ? e ? -1 : 1 : e ? 1 : -1;
  }
  return ip(e, t);
}
function xo(e, t, n = Hn.Last, a) {
  const o = new Map(e.map((i) => [i.key, i])), s = t ?? [];
  return (i, l) => {
    if (!s.length) return 0;
    for (const { key: c, direction: d } of s) {
      const u = o.get(c), f = u ? hi(i, u) : i[c], h = u ? hi(l, u) : l[c], p = f == null, x = h == null;
      if (p || x) {
        if (p && x) continue;
        return (u?.nullsPosition ?? a?.nullsPosition ?? n) === Hn.First ? p ? -1 : 1 : p ? 1 : -1;
      }
      let m = lp(f, h, u, a);
      if (m !== 0) return d === "asc" ? m : -m;
    }
    if (a?.stable) {
      const c = i.__originalIndex__ ?? i.originalIndex ?? void 0, d = l.__originalIndex__ ?? l.originalIndex ?? void 0;
      if (typeof c == "number" && typeof d == "number")
        return c - d;
    }
    return 0;
  };
}
const cp = tt.forwardRef(
  ({
    data: e,
    columns: t,
    sortConfig: n,
    onSort: a,
    sortingOptions: o,
    selectedRowIndex: s,
    onRowSelect: i,
    id: l,
    testId: c,
    ariaLabel: d,
    ariaLabelledby: u,
    ariaDescribedby: f,
    className: h,
    tableClassName: p,
    bordered: x = !1,
    striped: m = !1,
    responsive: g = !1,
    tableType: S = "default"
  }, N) => {
    const C = Ze(null), k = Ze(null), v = Ze(null);
    tt.useImperativeHandle(N, () => C.current, []);
    const [_, j] = Oe(0), [b, y] = Oe(0), [w, T] = Oe("headers"), [M, A] = Oe("browse"), I = t.length, D = e.length, $ = Re(() => {
      if (!n || n.length === 0) return e;
      const L = xo(
        t,
        n,
        Hn.Last,
        o
      );
      return [...e].sort(L);
    }, [e, n, t, o]), H = fe((L, G) => {
      setTimeout(() => {
        const E = C.current?.querySelector(
          `tbody tr:nth-child(${L + 1}) td:nth-child(${G + 1})`
        );
        E && (E.focus(), typeof E.scrollIntoView == "function" && E.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), Z = fe((L) => {
      setTimeout(() => {
        const G = C.current?.querySelector(
          `th:nth-child(${L + 1})`
        );
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), K = fe(
      (L) => {
        a?.(L);
      },
      [a]
    ), ne = fe(
      (L) => {
        i?.(L);
      },
      [i]
    ), B = fe(
      (L) => {
        const { key: G } = L;
        switch (G) {
          case "Enter":
            if (L.preventDefault(), w === "headers" && M === "browse")
              A("navigate"), Z(b);
            else if (w === "headers" && M === "navigate") {
              const E = t[b];
              E && K(E.key);
            } else w === "cells" && M === "browse" ? (A("navigate"), H(_, b)) : w === "cells" && M === "navigate" && ne(_);
            break;
          case "Escape":
            L.preventDefault(), (w === "headers" && M === "navigate" || w === "cells" && M === "navigate") && A("browse");
            break;
          case "ArrowLeft":
            if (L.preventDefault(), M === "navigate" || M === "browse" && w === "headers") {
              if (w === "headers") {
                const E = Math.max(0, b - 1);
                y(E), Z(E);
              } else if (w === "cells") {
                const E = Math.max(0, b - 1);
                y(E), H(_, E);
              }
            }
            break;
          case "ArrowRight":
            if (L.preventDefault(), M === "navigate" || M === "browse" && w === "headers") {
              if (w === "headers") {
                const E = Math.min(
                  I - 1,
                  b + 1
                );
                y(E), Z(E);
              } else if (w === "cells") {
                const E = Math.min(
                  I - 1,
                  b + 1
                );
                y(E), H(_, E);
              }
            }
            break;
          case "ArrowUp":
            if (L.preventDefault(), w === "cells") {
              if (M === "browse") {
                const E = Math.max(0, _ - 1);
                j(E), H(E, 0), y(0);
              } else if (M === "navigate")
                if (_ > 0) {
                  const E = _ - 1;
                  j(E), H(E, b);
                } else
                  T("headers"), A("browse"), Z(b);
            }
            break;
          case "ArrowDown":
            if (L.preventDefault(), w === "headers" && M === "browse")
              T("cells"), j(0), y(0), H(0, 0);
            else if (w === "cells") {
              const E = D - 1;
              if (M === "browse") {
                const O = Math.min(E, _ + 1);
                j(O), H(O, 0), y(0);
              } else if (M === "navigate" && _ < E) {
                const O = _ + 1;
                j(O), H(O, b);
              }
            }
            break;
          case "Home":
            L.preventDefault(), w === "headers" ? (y(0), Z(0)) : w === "cells" && (L.ctrlKey ? (j(0), y(0), H(0, 0)) : (y(0), H(_, 0)));
            break;
          case "End":
            if (L.preventDefault(), w === "headers") {
              const E = I - 1;
              y(E), Z(E);
            } else if (w === "cells")
              if (L.ctrlKey) {
                const E = D - 1, O = I - 1;
                j(E), y(O), H(E, O);
              } else {
                const E = I - 1;
                y(E), H(_, E);
              }
            break;
          case " ":
            if (L.preventDefault(), w === "headers" && M === "navigate") {
              const E = t[b];
              E && K(E.key);
            } else w === "cells" && M === "navigate" && ne(_);
            break;
        }
      },
      [
        w,
        M,
        b,
        _,
        I,
        D,
        t,
        H,
        Z,
        K,
        ne
      ]
    );
    nt(() => {
      const L = C.current;
      if (L)
        return L.addEventListener("keydown", B), () => L.removeEventListener("keydown", B);
    }, [B]);
    const F = ke(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": x,
        "nhsuk-table--striped": m,
        "nhsuk-table--compact": S === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: C,
        className: F,
        id: l,
        "data-testid": c,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": u,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: k, role: "row", children: t.map((L, G) => {
            const E = n?.find(
              (X) => X.key === L.key
            ), O = !!E, P = w === "headers" && b === G;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ke("sortable-header", {
                  "sortable-header--focused": P
                }),
                role: "columnheader",
                tabIndex: P ? 0 : -1,
                onClick: () => {
                  T("headers"), y(G), A("navigate"), Z(G), K(L.key);
                },
                onKeyDown: (X) => {
                  (X.key === "Enter" || X.key === " ") && (X.preventDefault(), K(L.key));
                },
                "aria-sort": O ? E?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: L.label }),
                  O && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex(
                      (X) => X.key === L.key
                    ) + 1 }),
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
              L.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: v, className: "nhsuk-table__body", role: "rowgroup", children: $.map((L, G) => {
            const E = s === G, O = w === "cells" && _ === G;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ke("data-row", {
                  "data-row--selected": E,
                  "data-row--focused": O
                }),
                "aria-selected": E,
                children: t.map((P, X) => {
                  const Y = P.tableRenderer ? P.tableRenderer(L) : P.render ? P.render(L) : L[P.key], Q = w === "cells" && _ === G && b === X, de = () => typeof Y == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: Y ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: Y ? "Yes" : "No" })
                  ] }) : String(Y ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ke("data-cell", {
                        "data-cell--focused": Q
                      }),
                      tabIndex: Q ? 0 : -1,
                      onClick: () => {
                        T("cells"), j(G), y(X), A("navigate"), H(G, X), ne(G);
                      },
                      children: de()
                    },
                    P.key
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
cp.displayName = "AriaDataGrid";
const er = ({
  sortConfig: e,
  columns: t,
  onSortChange: n,
  className: a = "",
  emptyDescription: o = "No sorting applied",
  activeDescription: s,
  showReset: i = !0,
  showHelp: l = !0,
  disabled: c = !1,
  ariaLabel: d = "Sort configuration",
  ariaDescribedBy: u
}) => {
  const f = Ze(null), h = Ze(null), p = Ze(null), x = fe((y, w) => {
    c || (h.current = w, y.dataTransfer.effectAllowed = "move", y.dataTransfer.setData("text/plain", w));
  }, [c]), m = fe((y, w) => {
    c || h.current === w || (y.preventDefault(), y.dataTransfer.dropEffect = "move", p.current = w);
  }, [c]), g = fe((y, w) => {
    if (c) return;
    y.preventDefault();
    const T = h.current;
    if (!T || T === w) return;
    const M = e.findIndex((I) => I.key === T), A = e.findIndex((I) => I.key === w);
    if (M !== -1 && A !== -1) {
      const I = [...e], [D] = I.splice(M, 1);
      I.splice(A, 0, D), n(I);
    }
    h.current = null, p.current = null;
  }, [c, e, n]), S = fe(() => {
    h.current = null, p.current = null;
  }, []), N = fe((y) => {
    const w = t.find((T) => T.key === y);
    return w ? w.label : y;
  }, [t]), C = fe((y) => ["red", "orange", "blue", "aqua-green", "grey"][y] || "grey", []), k = fe((y) => {
    if (c) return;
    const w = e.map(
      (T) => T.key === y ? { ...T, direction: T.direction === "asc" ? "desc" : "asc" } : T
    );
    n(w);
  }, [e, n, c]), v = fe((y) => {
    if (c) return;
    const w = e.filter((T) => T.key !== y);
    n(w);
  }, [e, n, c]), _ = fe(() => {
    c || n([]);
  }, [n, c]), j = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const y = e.map((w, T) => {
      const M = w.direction === "asc" ? "ascending" : "descending";
      return `${T + 1}. ${N(w.key)} (${M})`;
    });
    if (y.length === 1)
      return `Sorted by: ${y[0]}`;
    if (y.length === 2)
      return `Sorted by: ${y.join(" and ")}`;
    {
      const w = y.pop();
      return `Sorted by: ${y.join(", ")}, and ${w}`;
    }
  }, b = Re(() => {
    const y = ["sort-description"];
    return l && y.push("sort-help"), u && y.push(u), y.join(" ");
  }, [l, u]);
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
        children: j()
      }
    ),
    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": d,
          "aria-describedby": b,
          children: e.map((y, w) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (T) => x(T, y.key),
              onDragOver: (T) => m(T, y.key),
              onDrop: (T) => g(T, y.key),
              onDragEnd: S,
              onClick: () => k(y.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": y.key,
              children: /* @__PURE__ */ r.jsx(
                st,
                {
                  color: C(w),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => v(y.key),
                  disabled: c,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${w + 1}`, children: w + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: N(y.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (T) => {
                          T.stopPropagation(), k(y.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${N(y.key)}. Currently ${y.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ r.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${y.direction}`, children: /* @__PURE__ */ r.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${y.direction}`,
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
            y.key
          ))
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
        xt,
        {
          variant: "secondary",
          onClick: _,
          disabled: c,
          "aria-label": "Reset all sorting",
          className: "sort-status-control__reset-button",
          children: "Clear All Sorts"
        }
      ) })
    ] }),
    l && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ r.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function dp(e, t) {
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
const yo = On(function(t, n) {
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
    id: p,
    isLoading: x = !1,
    loadingComponent: m,
    error: g = null,
    errorComponent: S,
    "data-testid": N,
    actions: C,
    actionsMinGap: k = 16,
    forceActionsAbove: v = !1,
    hideTabsIfSingle: _ = !1,
    minColumnWidth: j,
    enableColumnCollapse: b = !1,
    minVisibleColumns: y = 2,
    showCollapsedColumnsIndicator: w = !0,
    sortStatusPlacement: T = "header"
  } = t, M = _ && o.length === 1, A = tr(), I = p ?? `aria-tabs-datagrid-${A}`, D = typeof d == "string" && d.trim() !== "" && !/\s/.test(d), $ = `${I}-description`, H = `${I}-navigation-help`, {
    dataComparator: Z = (U, te) => JSON.stringify(U) === JSON.stringify(te),
    filterFunction: K = (U) => U,
    booleanRenderer: ne = (U) => U ? "✓" : "✗"
  } = a || {}, B = s !== void 0, F = s ?? 0, [L, G] = Oe({
    focusArea: M ? "headers" : "tabs",
    focusedTabIndex: F,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), E = Re(() => ({
    selectedIndex: F,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [F]), [O, P] = Xi(dp, E);
  nt(() => {
    const U = O.tabLoadingStates.length, te = o.length;
    U !== te && P({ type: "ADJUST_ARRAYS", payload: { newLength: te } });
  }, [o.length]), nt(() => {
    B && P({ type: "SET_SELECTED_INDEX", payload: F });
  }, [F, B]), nt(() => {
    G((U) => ({
      ...U,
      focusArea: M ? "headers" : "tabs",
      focusedTabIndex: O.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [O.selectedIndex, M]);
  const X = Ze(null), Y = fe((U) => {
    U.shiftKey && (U.key === "ArrowLeft" ? (U.preventDefault(), X.current?.scrollBy({ left: -64, behavior: "smooth" })) : U.key === "ArrowRight" && (U.preventDefault(), X.current?.scrollBy({ left: 64, behavior: "smooth" })));
  }, []), [Q, de] = Oe({}), [V, ae] = Oe(!1), le = Ze(null), be = Ze(null), pe = fe((U) => {
    const te = o[U];
    if (!te) return [];
    const xe = Q[U] || /* @__PURE__ */ new Set();
    return te.columns.filter((ge) => !xe.has(ge.key));
  }, [o, Q]), Ie = fe((U) => {
    const te = o[U];
    if (!te) return /* @__PURE__ */ new Set();
    if (!b) return /* @__PURE__ */ new Set();
    const xe = X.current?.parentElement;
    if (!xe) return /* @__PURE__ */ new Set();
    const ge = typeof j == "number" ? `${j}px` : j || "160px", ye = te.columns.map((Fe, Ue) => ({
      key: Fe.key,
      min: Fe.minWidth !== void 0 ? typeof Fe.minWidth == "number" ? `${Fe.minWidth}px` : String(Fe.minWidth) : ge,
      priority: Fe.collapsePriority ?? Ue,
      lock: !!Fe.alwaysVisible,
      group: Fe.collapseGroup,
      groupPriority: Fe.collapseGroupPriority ?? 0
    })), Se = (Fe) => {
      if (Fe.endsWith("px")) return parseFloat(Fe);
      const Ue = document.createElement("div");
      Ue.style.width = Fe, xe.appendChild(Ue);
      const $t = Ue.getBoundingClientRect().width;
      return Ue.remove(), $t || 0;
    }, Be = ye.reduce((Fe, Ue) => Fe + Se(Ue.min), 0), Ce = xe.clientWidth;
    if (Be <= Ce || ye.length <= y) return /* @__PURE__ */ new Set();
    const Me = ye.map((Fe, Ue) => ({ ...Fe, idx: Ue })), we = /* @__PURE__ */ new Map();
    for (const Fe of Me)
      if (Fe.group) {
        const Ue = we.get(Fe.group) || { keys: [], width: 0, groupPriority: Fe.groupPriority, lock: !1, indices: [] };
        Ue.keys.push(Fe.key), Ue.width += Se(Fe.min), Ue.groupPriority = Math.max(Ue.groupPriority, Fe.groupPriority), Ue.lock = Ue.lock || Fe.lock, Ue.indices.push(Fe.idx), we.set(Fe.group, Ue);
      }
    const je = [];
    for (const [Fe, Ue] of we)
      Ue.lock || je.push({ type: "group", keys: Ue.keys, width: Ue.width, priority: Ue.groupPriority, rightmostIndex: Math.max(...Ue.indices) });
    for (const Fe of Me)
      !Fe.group && !Fe.lock && je.push({ type: "column", keys: [Fe.key], width: Se(Fe.min), priority: Fe.priority, rightmostIndex: Fe.idx });
    je.sort((Fe, Ue) => Fe.priority !== Ue.priority ? Ue.priority - Fe.priority : Ue.rightmostIndex - Fe.rightmostIndex);
    let Ke = /* @__PURE__ */ new Set(), ot = Be;
    const $e = ye.length;
    for (const Fe of je) {
      if ($e - Ke.size <= y) break;
      if (ot - Fe.width >= Ce) {
        for (const Ue of Fe.keys) Ke.add(Ue);
        ot -= Fe.width;
      } else
        continue;
    }
    return Ke;
  }, [o, b, j, y]);
  nt(() => {
    if (!b) return;
    const U = () => {
      const xe = Ie(O.selectedIndex);
      if (de((ge) => ({ ...ge, [O.selectedIndex]: xe })), w && be.current) {
        const ge = xe.size;
        be.current.textContent = ge > 0 ? `${ge} column${ge === 1 ? "" : "s"} collapsed` : "All columns visible";
      }
    };
    U();
    const te = new ResizeObserver(U);
    return re.current && te.observe(re.current), () => {
      te.disconnect();
    };
  }, [O.selectedIndex, o, b, Ie, w]), nt(() => {
    l && l(O.globalSelectedRowData);
  }, [O.globalSelectedRowData, l]);
  const Ve = fe(
    (U, te) => Z(U, te),
    [Z]
  ), Te = fe(
    (U) => {
      U >= 0 && U < o.length && !o[U].disabled && (P({ type: "SET_SELECTED_INDEX", payload: U }), G((te) => ({
        ...te,
        focusedTabIndex: U,
        focusArea: "tabs"
      })), i?.(U));
    },
    [o, i]
  ), Le = Ze(!1), _e = fe(
    (U, te) => {
      if (!te?.force && !Le.current && U === 0) {
        Le.current = !0;
        return;
      }
      Le.current = !0, setTimeout(() => {
        const xe = R.current[U], ge = xe?.parentElement;
        if (xe && ge) {
          const ye = xe.offsetLeft, Se = xe.offsetWidth, Be = ge.clientWidth, Ce = ye - Be / 2 + Se / 2;
          try {
            ge.scrollTo({
              left: Math.max(0, Ce),
              behavior: "smooth"
            });
          } catch {
            xe.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!xe,
          tabListElementExists: !!ge
        });
      }, 50);
    },
    []
  ), R = Ze([]), q = Ze([]), se = fe(
    (U, te) => {
      const xe = O.sortConfig || [], ge = xe.find(
        (Be) => Be.key === te
      );
      let ye;
      ge ? ge.direction === "asc" ? ye = xe.map(
        (Be) => Be.key === te ? { ...Be, direction: "desc" } : Be
      ) : ye = xe.filter(
        (Be) => Be.key !== te
      ) : ye = [...xe, { key: te, direction: "asc" }], P({
        type: "SET_SORT",
        payload: ye
      }), o[U].onSort?.(te);
    },
    [O.sortConfig, o]
  ), he = fe(
    (U) => {
      setTimeout(() => {
        const te = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] th:nth-child(${U + 1})`
        );
        te && te.focus();
      }, 0);
    },
    [O.selectedIndex]
  ), me = fe(
    (U) => ne(U),
    [ne]
  ), z = fe(
    (U, te) => {
      setTimeout(() => {
        const xe = document.querySelector(
          `[data-tab-panel="${O.selectedIndex}"] tbody tr:nth-child(${U + 1}) td:nth-child(${te + 1})`
        );
        xe && xe.focus();
      }, 0);
    },
    [O.selectedIndex]
  );
  nt(() => {
    L.isGridActive && (L.focusArea === "headers" ? setTimeout(() => {
      he(L.focusedHeaderIndex);
    }, 0) : L.focusArea === "cells" && setTimeout(() => {
      z(
        L.focusedRowIndex,
        L.focusedColumnIndex
      );
    }, 0));
  }, [
    L.focusArea,
    L.isGridActive,
    L.focusedHeaderIndex,
    L.focusedRowIndex,
    L.focusedColumnIndex,
    he,
    z
  ]), nt(() => {
    M || _e(O.selectedIndex);
  }, [O.selectedIndex, _e, M]);
  const W = fe(
    (U, te) => {
      const { key: xe } = U, ge = pe(O.selectedIndex).length || 0;
      switch (xe) {
        case "ArrowLeft":
          U.preventDefault();
          const ye = Math.max(0, te - 1);
          G((Me) => ({
            ...Me,
            focusedHeaderIndex: ye
          })), he(ye);
          break;
        case "ArrowRight":
          U.preventDefault();
          const Se = Math.min(ge - 1, te + 1);
          G((Me) => ({
            ...Me,
            focusedHeaderIndex: Se
          })), he(Se);
          break;
        case "ArrowUp":
          U.preventDefault(), M ? C && setTimeout(() => {
            const Me = ue.current;
            if (!Me) return;
            Me.querySelector(
              'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )?.focus();
          }, 0) : (G((Me) => ({
            ...Me,
            focusArea: "tabs",
            focusedTabIndex: O.selectedIndex
          })), _e(O.selectedIndex), R.current[O.selectedIndex]?.focus());
          break;
        case "ArrowDown":
          U.preventDefault(), G((Me) => ({
            ...Me,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: te,
            isGridActive: !0
          }));
          break;
        case "Home":
          U.preventDefault(), G((Me) => ({ ...Me, focusedHeaderIndex: 0 })), he(0);
          break;
        case "End":
          U.preventDefault();
          const Be = ge - 1;
          G((Me) => ({
            ...Me,
            focusedHeaderIndex: Be
          })), he(Be);
          break;
        case "Enter":
        case " ":
          U.preventDefault();
          const Ce = pe(O.selectedIndex)[te]?.key;
          Ce && se(O.selectedIndex, Ce);
          break;
      }
    },
    [
      o,
      O.selectedIndex,
      se,
      G,
      he,
      z,
      R,
      pe
    ]
  ), oe = fe(
    (U, te, xe) => {
      const { key: ge } = U, ye = o[O.selectedIndex], Se = ye?.data.length || 0, Be = pe(O.selectedIndex).length || 0;
      switch (ge) {
        case "ArrowUp":
          if (U.preventDefault(), te === 0)
            G((je) => ({
              ...je,
              focusArea: "headers",
              focusedHeaderIndex: xe,
              isGridActive: !1
            })), he(xe);
          else {
            const je = te - 1;
            G((Ke) => ({
              ...Ke,
              focusedRowIndex: je
            })), z(je, xe);
          }
          break;
        case "ArrowDown":
          U.preventDefault();
          const Ce = Math.min(Se - 1, te + 1);
          G((je) => ({
            ...je,
            focusedRowIndex: Ce
          })), z(Ce, xe);
          break;
        case "ArrowLeft":
          U.preventDefault();
          const Me = Math.max(0, xe - 1);
          G((je) => ({
            ...je,
            focusedColumnIndex: Me
          })), z(te, Me);
          break;
        case "ArrowRight":
          U.preventDefault();
          const we = Math.min(Be - 1, xe + 1);
          G((je) => ({
            ...je,
            focusedColumnIndex: we
          })), z(te, we);
          break;
        case "Home":
          U.preventDefault(), U.ctrlKey ? (G((je) => ({
            ...je,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), z(0, 0)) : (G((je) => ({ ...je, focusedColumnIndex: 0 })), z(te, 0));
          break;
        case "End":
          if (U.preventDefault(), U.ctrlKey) {
            const je = Se - 1, Ke = Be - 1;
            G((ot) => ({
              ...ot,
              focusedRowIndex: je,
              focusedColumnIndex: Ke
            })), z(je, Ke);
          } else {
            const je = Be - 1;
            G((Ke) => ({
              ...Ke,
              focusedColumnIndex: je
            })), z(te, je);
          }
          break;
        case "Enter":
        case " ":
          if (U.preventDefault(), ye && ye.data[te]) {
            const je = ye.data.some(
              ($e) => "ews_data" in $e
            ) ? K(ye.data, O.filters) : ye.data, Ke = O.sortConfig;
            let ot = je;
            if (Ke && Ke.length > 0) {
              const $e = xo(ye.columns, Ke, Hn.Last, a?.sortingOptions);
              ot = [...je].sort($e);
            }
            if (ot[te]) {
              const $e = ot[te], Ue = O.globalSelectedRowData && Ve(O.globalSelectedRowData, $e) ? null : $e;
              P({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: Ue
              });
            }
          }
          break;
      }
    },
    [
      o,
      O.selectedIndex,
      O.filters,
      O.sortConfig,
      K,
      Ve,
      P,
      G,
      he,
      z,
      pe
    ]
  ), ee = fe(
    (U, te) => K(U, te),
    [K]
  );
  if (Ji(
    n,
    () => ({
      selectTab: (U) => {
        U >= 0 && U < o.length && (P({ type: "SET_SELECTED_INDEX", payload: U }), i?.(U));
      },
      refreshData: (U) => {
        console.log("Refreshing data for tab:", U ?? "all");
      },
      exportData: (U) => {
        const te = U ?? O.selectedIndex, xe = o[te];
        return xe ? xe.data : [];
      },
      getSelectedRows: (U) => O.globalSelectedRowData ? [] : [],
      clearSelection: (U) => {
        P({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (U) => {
        P({ type: "SET_FILTERS", payload: U });
      }
    }),
    [O.selectedIndex, O.selectedRows, o, i]
  ), x)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
        "data-testid": N,
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
  if (g)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": N,
        children: S || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: g })
        ] })
      }
    );
  const re = Ze(null), ce = Ze(null), ue = Ze(null), [ve, Ne] = Oe(!0);
  nt(() => {
    if (!C) {
      Ne(!1);
      return;
    }
    if (M || v) {
      Ne(!1);
      return;
    }
    function U() {
      if (!re.current || !ce.current || !ue.current) return;
      const ge = re.current.clientWidth, ye = Array.from(
        ce.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), Se = ye.reduce((we, je) => we + je.offsetWidth, 0), Be = ue.current.offsetWidth, Ce = Math.max(8 * (ye.length - 1), 0), Me = Se + Ce + Be + k <= ge;
      Ne(Me);
    }
    const te = requestAnimationFrame(() => U()), xe = new ResizeObserver(() => U());
    return re.current && xe.observe(re.current), ce.current && xe.observe(ce.current), () => {
      cancelAnimationFrame(te), xe.disconnect();
    };
  }, [C, k, v, o.length, M]);
  const He = ue, Ye = fe(() => He.current ? Array.from(
    He.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((U) => !U.hasAttribute("disabled")) : [], []), lt = fe(
    (U) => {
      const te = Ye();
      if (!te.length) return;
      const xe = Math.max(0, Math.min(U, te.length - 1));
      te[xe].focus(), G((ge) => ({ ...ge, focusArea: "actions", focusedActionIndex: xe }));
    },
    [Ye]
  ), Qe = fe(() => lt(0), [lt]), ie = fe(
    (U, te) => {
      const { key: xe } = U, ge = o.length - 1;
      switch (xe) {
        case "ArrowUp": {
          C && !ve && (U.preventDefault(), Qe());
          break;
        }
        case "ArrowLeft": {
          U.preventDefault();
          const ye = te > 0 ? te - 1 : ge;
          Te(ye), _e(ye), R.current[ye]?.focus();
          break;
        }
        case "ArrowRight": {
          if (U.preventDefault(), te === ge && C && ve) {
            Qe();
            return;
          }
          const ye = te < ge ? te + 1 : 0;
          Te(ye), _e(ye), R.current[ye]?.focus();
          break;
        }
        case "ArrowDown": {
          U.preventDefault(), G((ye) => ({
            ...ye,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          U.preventDefault(), Te(0), _e(0), R.current[0]?.focus();
          break;
        }
        case "End": {
          U.preventDefault(), Te(ge), _e(ge), R.current[ge]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          U.preventDefault(), Te(te);
          break;
        }
        case "Tab": {
          !U.shiftKey && te === ge && C && ve && Qe();
          break;
        }
      }
    },
    [o.length, Te, _e, C, ve, Qe]
  ), Ae = fe((U) => {
    const { key: te } = U, xe = Ye();
    if (!xe.length) return;
    const ge = xe.findIndex((ye) => ye === document.activeElement);
    switch (te) {
      case "ArrowLeft": {
        if (ve)
          if (ge > 0)
            U.preventDefault(), lt(ge - 1);
          else {
            U.preventDefault();
            const ye = o.length - 1;
            Te(ye), _e(ye), R.current[ye]?.focus(), G((Se) => ({ ...Se, focusArea: "tabs", focusedTabIndex: ye }));
          }
        break;
      }
      case "ArrowRight": {
        ve && (ge < xe.length - 1 ? (U.preventDefault(), lt(ge + 1)) : (U.preventDefault(), Te(0), _e(0), R.current[0]?.focus(), G((ye) => ({ ...ye, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (ve)
          U.preventDefault(), G((ye) => ({ ...ye, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          U.preventDefault();
          const ye = O.selectedIndex;
          R.current[ye]?.focus(), G((Se) => ({ ...Se, focusArea: "tabs", focusedTabIndex: ye }));
        }
        break;
      }
    }
  }, [Ye, ve, lt, o.length, Te, _e, O.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${h} ${u}`,
      id: p,
      "data-testid": N,
      ref: re,
      children: [
        d && !D && /* @__PURE__ */ r.jsx("div", { id: $, className: "nhsuk-u-visually-hidden", children: d }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: H,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        T === "header" && /* @__PURE__ */ r.jsx(
          er,
          {
            sortConfig: O.sortConfig || [],
            columns: o.flatMap((U) => U.columns.map((te) => ({ key: te.key, label: te.label }))).filter((U, te, xe) => xe.findIndex((ge) => ge.key === U.key) === te),
            onSortChange: (U) => {
              P({ type: "SET_SORT", payload: U });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        C && (!ve || M) && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: ue,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Ae,
            children: C
          }
        ),
        !M && /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${ve ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": d ? D ? d : $ : H,
              "aria-orientation": h,
              className: "aria-tabs-datagrid__tabs",
              ref: ce,
              children: o.map((U, te) => {
                const xe = te === O.selectedIndex, ge = U.disabled || f;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${U.id}`,
                    "aria-controls": `panel-${U.id}`,
                    "aria-selected": xe,
                    "aria-disabled": ge,
                    tabIndex: xe ? 0 : -1,
                    ref: (ye) => {
                      R.current[te] = ye;
                    },
                    onClick: () => Te(te),
                    onKeyDown: (ye) => ie(ye, te),
                    disabled: ge,
                    className: [
                      "aria-tabs-datagrid__tab",
                      xe ? "aria-tabs-datagrid__tab--selected" : "",
                      ge ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: U.label }),
                      O.tabLoadingStates[te] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      O.tabErrors[te] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  U.id
                );
              })
            }
          ),
          C && ve && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: ue,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Ae,
              children: C
            }
          )
        ] }),
        b && w && (() => {
          const U = M ? 0 : O.selectedIndex, te = Q[U] || /* @__PURE__ */ new Set();
          if (te.size === 0) return null;
          const xe = o[U], ge = xe ? xe.columns.filter((ye) => te.has(ye.key)).map((ye) => ye.label) : [];
          return /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__collapsed-indicator", children: [
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "nhsuk-u-visually-hidden",
                "aria-live": "polite",
                ref: be
              }
            ),
            /* @__PURE__ */ r.jsxs("div", { className: "collapsed-chip-wrapper", children: [
              /* @__PURE__ */ r.jsxs(
                "button",
                {
                  ref: le,
                  type: "button",
                  className: "collapsed-chip",
                  title: `Collapsed columns: ${ge.join(", ")}`,
                  onClick: () => ae((ye) => !ye),
                  children: [
                    te.size,
                    " hidden column",
                    te.size === 1 ? "" : "s"
                  ]
                }
              ),
              V && /* @__PURE__ */ r.jsx("div", { className: "collapsed-popover", role: "dialog", "aria-label": "Collapsed columns", children: /* @__PURE__ */ r.jsx("ul", { children: ge.map((ye, Se) => /* @__PURE__ */ r.jsx("li", { children: ye }, Se)) }) })
            ] })
          ] });
        })(),
        T === "above" && /* @__PURE__ */ r.jsx(
          er,
          {
            sortConfig: O.sortConfig || [],
            columns: o.flatMap((U) => U.columns.map((te) => ({ key: te.key, label: te.label }))).filter((U, te, xe) => xe.findIndex((ge) => ge.key === U.key) === te),
            onSortChange: (U) => {
              P({ type: "SET_SORT", payload: U });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        o.map((U, te) => {
          const xe = M ? te === 0 : te === O.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: M ? void 0 : "tabpanel",
              id: M ? void 0 : `panel-${U.id}`,
              "aria-labelledby": M ? void 0 : `tab-${U.id}`,
              tabIndex: 0,
              hidden: !xe,
              ref: (ge) => {
                q.current[te] = ge;
              },
              className: `aria-tabs-datagrid__panel ${U.className || ""}`,
              "data-tab-panel": te,
              children: xe && (() => {
                const ge = U.data.some(
                  (Se) => "ews_data" in Se
                ) ? ee(U.data, O.filters) : U.data, ye = Re(() => {
                  const Se = O.sortConfig;
                  if (!Se || Se.length === 0) return ge;
                  const Be = xo(U.columns, Se, Hn.Last, a?.sortingOptions);
                  return [...ge].sort(Be);
                }, [ge, O.sortConfig, U.columns, a?.sortingOptions]);
                return /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    className: "aria-tabs-datagrid__scroll",
                    ref: X,
                    onKeyDown: Y,
                    style: {
                      // Expose CSS var to SCSS; inline for SSR safety
                      "--atd-min-col-w": typeof j == "number" ? `${j}px` : j || void 0
                    },
                    children: /* @__PURE__ */ r.jsxs(
                      "table",
                      {
                        className: "nhsuk-table aria-tabs-datagrid__grid",
                        role: "grid",
                        "aria-label": U.ariaLabel,
                        "aria-describedby": U.ariaDescription ? `panel-${U.id}-description` : void 0,
                        children: [
                          U.ariaDescription && /* @__PURE__ */ r.jsx(
                            "caption",
                            {
                              className: "nhsuk-u-visually-hidden",
                              id: `panel-${U.id}-description`,
                              children: U.ariaDescription
                            }
                          ),
                          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: pe(te).map((Se, Be) => {
                            const Ce = O.sortConfig?.find(
                              (je) => je.key === Se.key
                            ), Me = !!Ce, we = L.focusArea === "headers" && L.focusedHeaderIndex === Be;
                            return /* @__PURE__ */ r.jsx(
                              "th",
                              {
                                className: `sortable-header ${we ? "sortable-header--focused" : ""} ${Me ? "sortable-header--sorted" : ""}`,
                                role: "columnheader",
                                tabIndex: we ? 0 : -1,
                                onClick: () => se(te, Se.key),
                                onKeyDown: (je) => W(je, Be),
                                "aria-sort": Me ? Ce?.direction === "asc" ? "ascending" : "descending" : "none",
                                style: { minWidth: Se.minWidth !== void 0 ? typeof Se.minWidth == "number" ? `${Se.minWidth}px` : Se.minWidth : typeof j == "number" ? `${j}px` : j || void 0 },
                                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: Se.label }),
                                  /* @__PURE__ */ r.jsxs(
                                    "div",
                                    {
                                      className: `sort-indicator-container ${Me ? `sort-indicator--${Ce?.direction}` : ""}`,
                                      children: [
                                        O.sortConfig && O.sortConfig.length > 0 && O.sortConfig.findIndex(
                                          (je) => je.key === Se.key
                                        ) !== -1 && /* @__PURE__ */ r.jsx(
                                          "span",
                                          {
                                            className: `sort-priority sort-priority--priority-${O.sortConfig.findIndex((je) => je.key === Se.key) + 1}`,
                                            "data-priority": O.sortConfig.findIndex(
                                              (je) => je.key === Se.key
                                            ) + 1,
                                            title: `Sort priority: ${O.sortConfig.findIndex((je) => je.key === Se.key) + 1}`,
                                            children: O.sortConfig.findIndex(
                                              (je) => je.key === Se.key
                                            ) + 1
                                          }
                                        ),
                                        Me && /* @__PURE__ */ r.jsx(
                                          "svg",
                                          {
                                            className: `nhsuk-icon sort-arrow sort-arrow--${Ce?.direction}`,
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
                              Se.key
                            );
                          }) }) }),
                          /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: ye.map((Se, Be) => {
                            const Ce = O.globalSelectedRowData && Ve(O.globalSelectedRowData, Se), Me = L.focusArea === "cells" && L.focusedRowIndex === Be;
                            return /* @__PURE__ */ r.jsx(
                              "tr",
                              {
                                role: "row",
                                className: `data-row ${Ce ? "data-row--selected" : ""} ${Me ? "data-row--focused" : ""}`,
                                "aria-selected": Ce,
                                children: pe(te).map((we, je) => {
                                  const Ke = Se[we.key];
                                  let ot;
                                  we.tableRenderer ? ot = we.tableRenderer(Se) : we.render ? ot = we.render(Se) : ot = Ke;
                                  const $e = L.focusArea === "cells" && L.focusedRowIndex === Be && L.focusedColumnIndex === je, Fe = () => {
                                    if (we.customRenderer) {
                                      const Ue = we.customRenderer(
                                        Ke,
                                        Se
                                      );
                                      return /* @__PURE__ */ r.jsx(
                                        "span",
                                        {
                                          className: "data-cell__custom",
                                          "data-custom-rendered": "true",
                                          children: Ue
                                        }
                                      );
                                    }
                                    return typeof Ke == "boolean" && ot === Ke ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                      me(Ke),
                                      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Ke ? "Yes" : "No" })
                                    ] }) : tt.isValidElement(ot) || typeof ot != "object" ? ot ?? "" : ot;
                                  };
                                  return /* @__PURE__ */ r.jsx(
                                    "td",
                                    {
                                      role: "gridcell",
                                      className: `data-cell ${$e ? "data-cell--focused" : ""}`,
                                      tabIndex: $e ? 0 : -1,
                                      style: { minWidth: we.minWidth !== void 0 ? typeof we.minWidth == "number" ? `${we.minWidth}px` : we.minWidth : typeof j == "number" ? `${j}px` : j || void 0 },
                                      onClick: () => {
                                        const $t = O.globalSelectedRowData && Ve(
                                          O.globalSelectedRowData,
                                          Se
                                        ) ? null : Se;
                                        P({
                                          type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                          payload: $t
                                        });
                                      },
                                      onKeyDown: (Ue) => oe(Ue, Be, je),
                                      children: Fe()
                                    },
                                    we.key
                                  );
                                })
                              },
                              Be
                            );
                          }) })
                        ]
                      }
                    )
                  }
                );
              })()
            },
            U.id
          );
        }),
        T === "below" && /* @__PURE__ */ r.jsx(
          er,
          {
            sortConfig: O.sortConfig || [],
            columns: o.flatMap((U) => U.columns.map((te) => ({ key: te.key, label: te.label }))).filter((U, te, xe) => xe.findIndex((ge) => ge.key === U.key) === te),
            onSortChange: (U) => {
              P({ type: "SET_SORT", payload: U });
            },
            ariaLabel: "Data grid sort configuration"
          }
        )
      ]
    }
  );
}), jr = {
  asc: "↑",
  desc: "↓"
}, up = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Xa(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function fp(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function hp(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function pp(e, t) {
  const n = t.find((o) => o.id === e), a = fp(t);
  return n ? n.priority < a : !1;
}
const w1 = ({
  sortConfig: e,
  onSortChange: t,
  className: n = "",
  emptyDescription: a = "No sorting applied",
  activeDescription: o,
  showReset: s = !0,
  showHelp: i = !0,
  disabled: l = !1,
  ariaLabel: c = "Sort configuration",
  ariaDescribedBy: d
}) => {
  const u = Re(() => up(e), [e]), f = fe(
    (N) => {
      if (l) return;
      const C = e.map(
        (k) => k.id === N ? {
          ...k,
          direction: k.direction === "asc" ? "desc" : "asc"
        } : k
      );
      t(C);
    },
    [e, t, l]
  ), h = fe(
    (N) => {
      if (l) return;
      const C = e.findIndex((v) => v.id === N);
      if (C <= 0) return;
      const k = [...e];
      [k[C], k[C - 1]] = [
        k[C - 1],
        k[C]
      ], t(Xa(k));
    },
    [e, t, l]
  ), p = fe(
    (N) => {
      if (l) return;
      const C = e.findIndex((v) => v.id === N);
      if (C >= e.length - 1 || C === -1) return;
      const k = [...e];
      [k[C], k[C + 1]] = [
        k[C + 1],
        k[C]
      ], t(Xa(k));
    },
    [e, t, l]
  ), x = fe(
    (N) => {
      if (l) return;
      const C = e.filter(
        (k) => k.id !== N
      );
      t(Xa(C));
    },
    [e, t, l]
  ), m = fe(() => {
    l || t([]);
  }, [t, l]), g = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const N = u.map((C, k) => {
      const v = C.direction === "asc" ? "ascending" : "descending";
      return `${k + 1}. ${C.label} (${v})`;
    });
    if (N.length === 1)
      return `Sorted by: ${N[0]}`;
    if (N.length === 2)
      return `Sorted by: ${N.join(" and ")}`;
    {
      const C = N.pop();
      return `Sorted by: ${N.join(", ")}, and ${C}`;
    }
  }, S = Re(() => {
    const N = ["sort-description"];
    return i && N.push("sort-help"), d && N.push(d), N.join(" ");
  }, [i, d]);
  return e.length === 0 ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: `sort-status-control sort-status-control--empty ${n}`,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "sort-status-control__description",
          id: "sort-description",
          "aria-live": "polite",
          children: g()
        }
      )
    }
  ) : /* @__PURE__ */ r.jsxs("div", { className: `sort-status-control ${n}`, children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: g()
      }
    ),
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": c,
        "aria-describedby": S,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((N) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ r.jsx(
                st,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => x(N.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: N.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: N.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(N.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${N.label}. Currently ${N.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: N.direction === "asc" ? jr.asc : jr.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => h(N.id),
                          disabled: l || !hp(N.id, e),
                          "aria-label": `Move ${N.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(N.id),
                          disabled: l || !pp(N.id, e),
                          "aria-label": `Move ${N.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            N.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ r.jsx(
      xt,
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
      jr.asc,
      "/",
      jr.desc,
      " ",
      "to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, ps = (e, t) => t.map((n) => ({
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
})), bo = [
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
], mp = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), gp = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, xp = (e) => {
  if (typeof e == "boolean") {
    const n = bo.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = bo.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, yp = (e) => `${e.name}-${e.bed_name}`, bp = () => ({
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
}), _1 = (e) => {
  const t = bp();
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
}, vp = {
  dataComparator: mp,
  filterFunction: gp,
  booleanRenderer: xp,
  getDataId: yp
};
function pi(e, t, n) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: d = {},
    classPrefix: u = "adaptive-card"
  } = n, f = t.find((C) => C.key === a), h = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => o.filter((k) => !i.includes(k) && e[k]).slice(0, 3).map((k) => {
    const v = t.find((y) => y.key === k), _ = e[k], j = d[k] ? d[k](_, e) : v?.cardRenderer ? v.cardRenderer(e) : v?.render ? v.render(e) : _;
    return `${v?.label || k}: ${j}`;
  }).join(" • "), x = () => s.length === 0 ? null : s.filter((C) => e[C.fieldKey] !== void 0).map((C) => {
    const k = e[C.fieldKey], v = C.render ? C.render(k, e) : k;
    return `<span class="nhsuk-tag ${wp(C, k)}">${v}</span>`;
  }).join(""), m = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", g = x(), S = p(), N = g ? `${S}${g ? `<div class="adaptive-card__badges">${g}</div>` : ""}` : S;
  return {
    variant: m(),
    heading: String(h),
    descriptionHtml: N,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${h}`
  };
}
function wp(e, t) {
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
const _p = {
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
}, El = ({
  data: e,
  columns: t,
  onSelect: n,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, c = e.ward_name, d = e.bed_name, u = e.ews_score, f = e.speciality, h = e.consultant;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `healthcare-card healthcare-card--patient healthcare-card--${o} healthcare-card--${s}`,
      onClick: () => n?.(e),
      role: "button",
      tabIndex: 0,
      "aria-label": `Patient record for ${i}, Age ${l}, Ward ${c}, Bed ${d}`,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__identity", children: [
            /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__patient-name", children: i }),
            /* @__PURE__ */ r.jsxs("p", { className: "healthcare-card__age-info", children: [
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__label", children: "Age: " }),
              /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__value", children: l })
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: u !== void 0 && /* @__PURE__ */ r.jsxs(
            st,
            {
              color: kp(Bl(u)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                u
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__body", children: /* @__PURE__ */ r.jsxs("dl", { className: "healthcare-card__details", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Ward" }),
            /* @__PURE__ */ r.jsx("dd", { children: c })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__detail", children: [
            /* @__PURE__ */ r.jsx("dt", { children: "Bed" }),
            /* @__PURE__ */ r.jsx("dd", { children: d })
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
            xt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ r.jsx(
            xt,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ r.jsx(
            xt,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, Fl = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        st,
        {
          color: Np(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ r.jsxs(
        st,
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
      xt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      xt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Pl = ({
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
        st,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ r.jsxs(
        st,
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
      xt,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ r.jsx(
      xt,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Rl = ({
  data: e,
  onSelect: t,
  onAction: n,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, c = e.ews_data?.temperature, d = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Sp(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ r.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ r.jsxs(
            st,
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
          c !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Temperature" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              c,
              "°C"
            ] })
          ] }),
          d !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Systolic BP" }),
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-value", children: d })
          ] }),
          u !== void 0 && /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ r.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ r.jsxs("span", { className: "healthcare-card__vital-value", children: [
              u,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ r.jsx(
            xt,
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
            xt,
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
function Bl(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Sp(e) {
  return Bl(e);
}
function kp(e) {
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
function Np(e) {
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
const Cp = [
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
], Hl = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", jp = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Mp = (e) => Hl(e) === "high" || e.status === "urgent" ? "primary" : "default", Ip = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Dp = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Cp,
  hiddenFields: [],
  getPriority: Hl,
  getStatus: jp,
  getVariant: Mp,
  fieldRenderers: Ip,
  classPrefix: "adaptive-card--healthcare"
}, Tp = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      El,
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
      Fl,
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
      Pl,
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
      Rl,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Lp = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, mi = {
  name: "healthcare",
  defaultCardConfig: Dp,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Tp,
  fieldTypes: Lp
};
function gi(e) {
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
function xi(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function $p(e, t) {
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
function Ap(e, t) {
  const [n, a] = Oe("cards");
  return nt(() => {
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
function Ep(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Fp(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ..._p, ...n };
  if (a && a.cardTemplates) {
    const s = Ep(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](
        e,
        t,
        o
      );
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(
    e,
    t,
    o
  ), pi(e, t, o);
}
const S1 = ({
  // Responsive-specific props
  breakpoints: e = { mobile: 768, tablet: 1024, desktop: 1200 },
  forceLayout: t,
  cardConfig: n = {},
  experimental: a = {},
  enableAdvancedSorting: o = !1,
  topActions: s,
  bottomActions: i,
  gridActions: l,
  forceGridActionsAbove: c,
  hideTabsIfSingle: d,
  // Overflow/collapse props (typed from ResponsiveDataGridProps)
  minColumnWidth: u,
  enableColumnCollapse: f,
  minVisibleColumns: h,
  showCollapsedColumnsIndicator: p,
  // Additional grid options
  sortStatusPlacement: x,
  // Standard AriaTabsDataGrid props
  tabPanels: m,
  dataConfig: g,
  selectedIndex: S,
  onTabChange: N,
  ariaLabel: C = "Data grid",
  ariaDescription: k,
  orientation: v = "horizontal",
  id: _,
  disabled: j = !1,
  className: b,
  ...y
}) => {
  const w = Ap(e, t), T = S !== void 0, M = S ?? 0, A = Re(() => {
    if (m.some(
      (W) => W.data && W.data.length > 0 && xi(W.data)
    )) {
      const W = gi(n);
      return {
        ...mi.defaultCardConfig,
        ...W
      };
    } else
      return gi(n);
  }, [n, m]), I = Re(() => m.some(
    (W) => W.data && W.data.length > 0 && xi(W.data)
  ) ? mi : void 0, [m]), D = Re(() => ({
    selectedIndex: M,
    tabLoadingStates: new Array(m.length).fill(!1),
    tabErrors: new Array(m.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(m.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [M, m.length]), [$, H] = Xi($p, D), Z = Ze([]), K = Ze([]), ne = Ze([]), B = Ze(null), [F, L] = Oe({
    // If tabs are hidden (single panel), default focus to sort-controls; otherwise start at tabs
    focusArea: d && m.length === 1 ? "sort-controls" : "tabs",
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
  }), G = fe(
    (z) => {
      if (!z.current)
        return { columns: 1, rows: 0 };
      const W = z.current, oe = W.querySelectorAll(
        ".aria-tabs-datagrid-adaptive__card-wrapper"
      );
      if (oe.length === 0)
        return { columns: 1, rows: 0 };
      const ee = W.offsetWidth, ce = oe[0].offsetWidth, ue = Math.floor(ee / ce) || 1, ve = Math.ceil(oe.length / ue);
      return { columns: ue, rows: ve };
    },
    []
  ), E = fe((z, W) => ({
    row: Math.floor(z / W),
    col: z % W
  }), []), O = fe(
    (z, W, oe) => z * oe + W,
    []
  ), P = fe(
    (z, W, oe, ee) => {
      const { row: re, col: ce } = E(z, ee);
      let ue = re, ve = ce;
      switch (W) {
        case "up":
          ue = Math.max(0, re - 1);
          break;
        case "down":
          ue = Math.min(Math.floor((oe - 1) / ee), re + 1);
          break;
        case "left":
          ve = Math.max(0, ce - 1);
          break;
        case "right":
          ve = Math.min(ee - 1, ce + 1);
          break;
      }
      const Ne = O(ue, ve, ee);
      return Math.min(Ne, oe - 1);
    },
    [E, O]
  );
  nt(() => {
    F.isCardNavigationActive && F.focusedCardElementIndex >= 0 && F.cardElements.length > 0 && setTimeout(() => {
      const z = F.cardElements[F.focusedCardElementIndex];
      z && (z.element.focus(), z.element.scrollIntoView({
        block: "nearest",
        behavior: "smooth"
      }));
    }, 0);
  }, [
    F.isCardNavigationActive,
    F.focusedCardElementIndex,
    F.cardElements.length
  ]), nt(() => {
    const z = () => {
      if (w === "cards" && B.current) {
        const { columns: ee, rows: re } = G(B);
        L((ce) => ({
          ...ce,
          gridColumns: ee,
          gridRows: re
        }));
      }
    }, W = setTimeout(z, 200), oe = () => {
      setTimeout(z, 100);
    };
    return window.addEventListener("resize", oe), () => {
      clearTimeout(W), window.removeEventListener("resize", oe);
    };
  }, [w, m, G]), nt(() => {
    const z = $.tabLoadingStates.length, W = m.length;
    z !== W && H({ type: "ADJUST_ARRAYS", payload: { newLength: W } });
  }, [m.length, $.tabLoadingStates.length]), nt(() => {
    T && S !== $.selectedIndex && H({ type: "SET_SELECTED_INDEX", payload: S });
  }, [T, S, $.selectedIndex]);
  const X = fe(
    (z) => {
      z >= 0 && z < m.length && !m[z].disabled && (H({ type: "SET_SELECTED_INDEX", payload: z }), N?.(z));
    },
    [m, N]
  ), Y = fe((z) => {
    console.log("Card selected:", z), H({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: z
    });
  }, []), Q = fe((z) => {
    const W = K.current[z];
    W && (W.focus(), W.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), de = fe((z) => {
    const W = K.current[z];
    if (!W) return [];
    const oe = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), ee = W.querySelectorAll(
      oe
    );
    return Array.from(ee).map((re, ce) => ({
      id: re.id || `card-${z}-element-${ce}`,
      element: re,
      label: re.getAttribute("aria-label") || re.textContent?.trim() || re.getAttribute("title") || `Element ${ce + 1}`,
      type: re.tagName.toLowerCase() === "button" ? "button" : re.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(
        re.tagName.toLowerCase()
      ) ? "input" : "generic"
    }));
  }, []), V = Ze(null), ae = fe((z) => {
    const W = V.current;
    if (!W) return;
    const oe = document.createElement("div");
    oe.setAttribute("aria-live", "polite"), oe.setAttribute("aria-atomic", "true"), oe.className = "sr-only", oe.textContent = z, W.appendChild(oe), setTimeout(() => {
      W.contains(oe) && W.removeChild(oe);
    }, 1e3);
  }, []), le = fe((z) => {
    const W = z.filter((ee) => ee.sortable !== !1), oe = [
      { value: "", label: "Sort by..." }
    ];
    return W.forEach((ee) => {
      const re = ee.label || ee.key;
      ee.key === "name" ? oe.push(
        { value: `${ee.key}-asc`, label: `${re} (A-Z)` },
        { value: `${ee.key}-desc`, label: `${re} (Z-A)` }
      ) : ee.key === "ews_score" || ee.key.includes("score") ? oe.push(
        { value: `${ee.key}-desc`, label: `${re} (High-Low)` },
        { value: `${ee.key}-asc`, label: `${re} (Low-High)` }
      ) : ee.key === "age" || ee.key.includes("date") || ee.key.includes("time") ? oe.push(
        {
          value: `${ee.key}-desc`,
          label: `${re} (Oldest-Youngest)`
        },
        {
          value: `${ee.key}-asc`,
          label: `${re} (Youngest-Oldest)`
        }
      ) : oe.push(
        { value: `${ee.key}-asc`, label: `${re} (A-Z)` },
        { value: `${ee.key}-desc`, label: `${re} (Z-A)` }
      );
    }), oe;
  }, []), be = fe(
    (z, W) => W ? [...z].sort((oe, ee) => {
      const re = oe[W.key], ce = ee[W.key];
      if (re == null && ce == null) return 0;
      if (re == null) return 1;
      if (ce == null) return -1;
      const ue = Number(re), ve = Number(ce);
      if (!isNaN(ue) && !isNaN(ve))
        return W.direction === "asc" ? ue - ve : ve - ue;
      const Ne = String(re).toLowerCase(), He = String(ce).toLowerCase(), Ye = Ne.localeCompare(He);
      return W.direction === "asc" ? Ye : -Ye;
    }) : z,
    []
  ), pe = fe(
    (z) => {
      if (!z) {
        L((Ne) => ({ ...Ne, cardSortConfig: null })), ae("Card sorting cleared");
        return;
      }
      const [W, oe] = z.split("-"), ee = { key: W, direction: oe };
      L((Ne) => ({ ...Ne, cardSortConfig: ee }));
      const ue = m[$.selectedIndex]?.columns.find((Ne) => Ne.key === W)?.label || W;
      ae(
        `Cards sorted by ${ue} in ${oe === "asc" ? "ascending" : "descending"} order`
      );
    },
    [m, $.selectedIndex, ae]
  ), Ie = fe(
    (z) => {
      const ee = m[$.selectedIndex]?.columns.find(
        (ce) => ce.key === z.key
      )?.label || z.key, re = z.direction === "asc" ? "ascending" : "descending";
      return `${ee} (${re})`;
    },
    [m, $.selectedIndex]
  ), Ve = fe(
    (z) => {
      const W = m[$.selectedIndex];
      if (o) {
        const oe = $.sortConfig;
        return !oe || oe.length === 0 ? z : [...z].sort((ee, re) => {
          for (const { key: ce, direction: ue } of oe) {
            let ve = ee[ce], Ne = re[ce];
            const He = W?.columns.find(
              (U) => U.key === ce
            );
            if (He?.cardRenderer ? (ve = He.cardRenderer(ee), Ne = He.cardRenderer(re)) : He?.render && (ve = He.render(ee), Ne = He.render(re)), ve == null && Ne == null) continue;
            if (ve == null) return ue === "asc" ? -1 : 1;
            if (Ne == null) return ue === "asc" ? 1 : -1;
            const Ye = Number(ve), lt = Number(Ne);
            if (!isNaN(Ye) && !isNaN(lt)) {
              const U = Ye - lt;
              if (U !== 0) return ue === "asc" ? U : -U;
              continue;
            }
            const Qe = String(ve).toLowerCase(), ie = String(Ne).toLowerCase(), Ae = Qe.localeCompare(ie);
            if (Ae !== 0) return ue === "asc" ? Ae : -Ae;
          }
          return 0;
        });
      } else
        return be(z, F.cardSortConfig);
    },
    [
      o,
      $.sortConfig,
      F.cardSortConfig,
      be,
      m,
      $.selectedIndex
    ]
  ), Te = fe(
    (z, W) => {
      const oe = de(z), ee = oe[W];
      if (ee) {
        ee.element.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
        const re = `Focused on ${ee.label}, ${ee.type} ${W + 1} of ${oe.length} within card`;
        ae(re);
      }
    },
    [de, ae]
  ), Le = fe((z) => {
    Z.current[z]?.focus();
  }, []), _e = fe(() => {
    const z = ne.current[0];
    if (!z) return [];
    const W = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), oe = z.querySelectorAll(
      W
    );
    return Array.from(oe);
  }, []), R = fe(
    (z) => {
      if (z === 0) {
        const W = ne.current[0], oe = W?.querySelector(
          ".sort-controls-row"
        );
        if (oe) {
          oe.setAttribute("tabindex", "-1"), oe.focus();
          const re = `Sort controls group with ${_e().length} interactive elements. Press Enter or Space to begin navigating controls.`;
          ae(re);
        } else W && W.focus();
      } else {
        const W = _e(), oe = z - 1, ee = W[oe];
        if (ee) {
          ee.focus();
          const re = ee.tagName.toLowerCase() === "select", ce = ee.tagName.toLowerCase() === "button", ue = re ? "dropdown" : ce ? "button" : "control", ve = re ? ". Use Space key to open dropdown" : "", Ne = `${ue} ${oe + 1} of ${W.length}${ve}`;
          ae(Ne);
        }
      }
    },
    [_e, ae]
  ), q = fe(
    (z, W) => {
      const { key: oe } = z, ee = m[$.selectedIndex], re = ee?.data.length || 0;
      if (oe === "ArrowLeft" && z.shiftKey) {
        z.preventDefault(), z.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
        return;
      } else if (oe === "ArrowRight" && z.shiftKey) {
        z.preventDefault(), z.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
        return;
      }
      if (!F.isCardNavigationActive) {
        switch (oe) {
          case "ArrowUp":
            if (z.preventDefault(), W === 0)
              L((Ne) => ({
                ...Ne,
                focusArea: "sort-controls",
                focusedSortControlIndex: 0,
                isSortControlsActive: !1
              })), R(0);
            else {
              const Ne = P(
                W,
                "up",
                re,
                F.gridColumns
              );
              Ne !== W && (L((He) => ({
                ...He,
                focusedCardIndex: Ne
              })), Q(Ne), ae(
                `Moved to card ${Ne + 1} of ${re}`
              ));
            }
            break;
          case "ArrowDown":
            z.preventDefault();
            const ce = P(
              W,
              "down",
              re,
              F.gridColumns
            );
            ce !== W && (L((Ne) => ({
              ...Ne,
              focusedCardIndex: ce
            })), Q(ce), ae(
              `Moved to card ${ce + 1} of ${re}`
            ));
            break;
          case "ArrowLeft":
            z.preventDefault();
            const ue = P(
              W,
              "left",
              re,
              F.gridColumns
            );
            ue !== W ? (L((Ne) => ({
              ...Ne,
              focusedCardIndex: ue
            })), Q(ue), ae(
              `Moved to card ${ue + 1} of ${re}`
            )) : $.selectedIndex > 0 && (H({
              type: "SET_SELECTED_INDEX",
              payload: $.selectedIndex - 1
            }), L((Ne) => ({ ...Ne, focusArea: "tabs" })), setTimeout(() => Le($.selectedIndex - 1), 0));
            break;
          case "ArrowRight":
            z.preventDefault();
            const ve = P(
              W,
              "right",
              re,
              F.gridColumns
            );
            ve !== W ? (L((Ne) => ({
              ...Ne,
              focusedCardIndex: ve
            })), Q(ve), ae(
              `Moved to card ${ve + 1} of ${re}`
            )) : $.selectedIndex < m.length - 1 && (H({
              type: "SET_SELECTED_INDEX",
              payload: $.selectedIndex + 1
            }), L((Ne) => ({ ...Ne, focusArea: "tabs" })), setTimeout(() => Le($.selectedIndex + 1), 0));
            break;
          case "Enter":
            if (ee?.data[W]) {
              z.preventDefault(), L((He) => ({
                ...He,
                selectedCardIndex: W
              }));
              const Ne = de(W);
              Ne.length > 0 ? (L((He) => ({
                ...He,
                focusArea: "card",
                isCardNavigationActive: !0,
                focusedCardElementIndex: 0,
                cardElements: Ne,
                selectedCardIndex: W
                // Ensure selection is maintained
              })), ae(
                `Card ${W + 1} selected and navigation activated. ${Ne.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`
              )) : ae(`Card ${W + 1} selected.`);
            }
            break;
          case " ":
            if (ee?.data[W]) {
              z.preventDefault(), L((He) => ({
                ...He,
                selectedCardIndex: He.selectedCardIndex === W ? -1 : W
              }));
              const Ne = F.selectedCardIndex === W;
              ae(
                `Card ${W + 1} ${Ne ? "deselected" : "selected"}.`
              );
            }
            break;
        }
        return;
      }
      switch (oe) {
        case "ArrowUp":
        case "ArrowLeft":
          z.preventDefault();
          const ce = Math.max(
            0,
            F.focusedCardElementIndex - 1
          );
          L((He) => ({
            ...He,
            focusedCardElementIndex: ce
          })), Te(W, ce);
          break;
        case "ArrowDown":
        case "ArrowRight":
          z.preventDefault();
          const ue = Math.min(
            F.cardElements.length - 1,
            F.focusedCardElementIndex + 1
          );
          L((He) => ({
            ...He,
            focusedCardElementIndex: ue
          })), Te(W, ue);
          break;
        case "Enter":
          z.preventDefault();
          const ve = F.cardElements[F.focusedCardElementIndex];
          ve && (ve.element.click(), ae(`Activated ${ve.label}`));
          break;
        case " ":
          z.preventDefault();
          const Ne = F.cardElements[F.focusedCardElementIndex];
          if (Ne) {
            const He = new MouseEvent("dblclick", { bubbles: !0 });
            Ne.element.dispatchEvent(He), ae(
              `Double-clicked ${Ne.label}`
            );
          }
          break;
        case "Escape":
          z.preventDefault(), L((He) => ({
            ...He,
            focusArea: "cards",
            isCardNavigationActive: !1,
            focusedCardElementIndex: 0,
            cardElements: []
          })), setTimeout(() => Q(W), 0), ae(
            "Exited card navigation, returned to card level"
          );
          break;
        case "Home":
          z.preventDefault(), F.cardElements.length > 0 && (L((He) => ({
            ...He,
            focusedCardElementIndex: 0
          })), Te(W, 0));
          break;
        case "End":
          if (z.preventDefault(), F.cardElements.length > 0) {
            const He = F.cardElements.length - 1;
            L((Ye) => ({
              ...Ye,
              focusedCardElementIndex: He
            })), Te(W, He);
          }
          break;
      }
    },
    [
      F,
      $.selectedIndex,
      m,
      Y,
      Q,
      Le,
      L,
      de,
      Te,
      ae
    ]
  ), se = fe((z) => {
    const W = Z.current[z], oe = W?.parentElement;
    if (!W || !oe) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const ee = W.getBoundingClientRect(), re = oe.getBoundingClientRect();
    ee.left >= re.left && ee.right <= re.right || (console.log("Tab not visible, scrolling into view (mobile)"), W.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), he = fe(
    (z, W) => {
      if (w !== "cards")
        return;
      const { key: oe } = z;
      switch (oe) {
        case "ArrowLeft":
          z.preventDefault();
          const ee = W > 0 ? W - 1 : m.length - 1;
          X(ee), L((ve) => ({ ...ve, focusedTabIndex: ee })), Z.current[ee]?.focus(), se(ee);
          break;
        case "ArrowRight":
          z.preventDefault();
          const re = W < m.length - 1 ? W + 1 : 0;
          X(re), L((ve) => ({ ...ve, focusedTabIndex: re })), Z.current[re]?.focus(), se(re);
          break;
        case "ArrowDown":
          z.preventDefault();
          const ce = m[$.selectedIndex];
          ce && ce.columns && ce.columns.length > 0 ? (L((ve) => ({
            ...ve,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), R(0)) : (L((ve) => ({
            ...ve,
            focusArea: "cards",
            focusedCardIndex: 0
          })), Q(0));
          break;
        case "Home":
          z.preventDefault(), X(0), L((ve) => ({ ...ve, focusedTabIndex: 0 })), Z.current[0]?.focus(), se(0);
          break;
        case "End":
          z.preventDefault();
          const ue = m.length - 1;
          X(ue), L((ve) => ({ ...ve, focusedTabIndex: ue })), Z.current[ue]?.focus(), se(ue);
          break;
        case "Enter":
        case " ":
          z.preventDefault(), X(W);
          break;
      }
    },
    [
      m.length,
      X,
      w,
      Q,
      L,
      se
    ]
  ), me = fe(
    (z, W) => {
      if (w !== "cards")
        return;
      const { key: oe } = z, ee = m[$.selectedIndex];
      if (W === 0 && !F.isSortControlsActive) {
        switch (oe) {
          case "ArrowUp":
            z.preventDefault(), L((ce) => ({
              ...ce,
              focusArea: "tabs",
              isSortControlsActive: !1
            })), Le($.selectedIndex);
            break;
          case "ArrowDown":
            z.preventDefault(), ee?.data && ee.data.length > 0 && (L((ce) => ({
              ...ce,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), Q(0));
            break;
          case "Enter":
          case " ":
            z.preventDefault();
            const re = _e();
            if (re.length > 0) {
              L((ue) => ({
                ...ue,
                isSortControlsActive: !0,
                focusedSortControlIndex: 1
                // Start with the first actual control (skip container)
              })), R(1);
              const ce = `Entered sort controls navigation mode. ${re.length} controls available. Use arrow keys to navigate between controls.`;
              ae(ce);
            }
            break;
          case "Escape":
            z.preventDefault(), L((ce) => ({
              ...ce,
              isSortControlsActive: !1,
              focusArea: "tabs"
            })), Le($.selectedIndex);
            break;
        }
        return;
      }
      if (F.isSortControlsActive) {
        const ce = _e().length;
        switch (oe) {
          case "ArrowLeft":
            z.preventDefault();
            const ue = F.focusedSortControlIndex > 1 ? F.focusedSortControlIndex - 1 : ce;
            L((Ne) => ({
              ...Ne,
              focusedSortControlIndex: ue
            })), R(ue);
            break;
          case "ArrowRight":
            z.preventDefault();
            const ve = F.focusedSortControlIndex < ce ? F.focusedSortControlIndex + 1 : 1;
            L((Ne) => ({
              ...Ne,
              focusedSortControlIndex: ve
            })), R(ve);
            break;
          case "ArrowDown":
            if (z.preventDefault(), F.isSortControlsActive) {
              const Ne = F.focusedSortControlIndex < ce ? F.focusedSortControlIndex + 1 : 1;
              L((He) => ({
                ...He,
                focusedSortControlIndex: Ne
              })), R(Ne);
            } else
              ee?.data && ee.data.length > 0 && (L((Ne) => ({
                ...Ne,
                focusArea: "cards",
                focusedCardIndex: 0,
                isSortControlsActive: !1
              })), Q(0));
            break;
          case "ArrowUp":
            z.preventDefault(), L((Ne) => ({
              ...Ne,
              isSortControlsActive: !1,
              focusArea: "sort-controls"
            })), R(0);
            break;
          case "Escape":
            z.preventDefault(), L((Ne) => ({
              ...Ne,
              isSortControlsActive: !1,
              focusArea: "sort-controls",
              focusedSortControlIndex: 0
            })), R(0);
            break;
        }
      }
    },
    [
      w,
      m,
      $.selectedIndex,
      F.isSortControlsActive,
      F.focusedSortControlIndex,
      R,
      Le,
      Q,
      L,
      ae
    ]
  );
  if (w === "cards") {
    const z = !!d && m.length === 1, W = z ? m[0] : m[$.selectedIndex];
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${b || ""}`,
        children: [
          /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
            !z && /* @__PURE__ */ r.jsx(
              "div",
              {
                role: "tablist",
                "aria-label": C,
                "aria-describedby": `${k || ""} ${_ ? `${_}-navigation-help` : ""}`.trim(),
                "aria-orientation": v,
                className: "aria-tabs-datagrid__tabs",
                children: m.map((oe, ee) => {
                  const re = ee === $.selectedIndex, ce = oe.disabled || j;
                  return /* @__PURE__ */ r.jsxs(
                    "button",
                    {
                      role: "tab",
                      id: `tab-${oe.id}`,
                      "aria-controls": `panel-${oe.id}`,
                      "aria-selected": re,
                      "aria-disabled": ce,
                      tabIndex: re ? 0 : -1,
                      ref: (ue) => {
                        Z.current[ee] = ue;
                      },
                      onClick: () => X(ee),
                      onKeyDown: (ue) => he(ue, ee),
                      disabled: ce,
                      className: [
                        "aria-tabs-datagrid__tab",
                        re ? "aria-tabs-datagrid__tab--selected" : "",
                        ce ? "aria-tabs-datagrid__tab--disabled" : ""
                      ].filter(Boolean).join(" "),
                      children: [
                        /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: oe.label }),
                        $.tabLoadingStates[ee] && /* @__PURE__ */ r.jsx(
                          "span",
                          {
                            className: "aria-tabs-datagrid__tab-loading",
                            "aria-hidden": "true",
                            children: "⏳"
                          }
                        ),
                        $.tabErrors[ee] && /* @__PURE__ */ r.jsx(
                          "span",
                          {
                            className: "aria-tabs-datagrid__tab-error",
                            "aria-hidden": "true",
                            children: "⚠️"
                          }
                        )
                      ]
                    },
                    oe.id
                  );
                })
              }
            ),
            s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
          ] }),
          W && W.columns && /* @__PURE__ */ r.jsx(r.Fragment, { children: o ? (
            /* Advanced sorting with SortStatusControl: place above cards for 'header'/'above' (default), hide when 'none' */
            /* @__PURE__ */ r.jsx(r.Fragment, { children: (!x || x === "header" || x === "above") && /* @__PURE__ */ r.jsx(
              er,
              {
                sortConfig: $.sortConfig || [],
                columns: W.columns.map((oe) => ({ key: oe.key, label: oe.label })),
                onSortChange: (oe) => {
                  H({ type: "SET_SORT", payload: oe });
                },
                ariaLabel: "Card view sort configuration",
                className: "aria-tabs-datagrid-adaptive__advanced-sort-controls"
              }
            ) })
          ) : (
            /* Simple card sorting (unaffected by sortStatusPlacement) */
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "aria-tabs-datagrid-adaptive__sort-controls",
                role: "region",
                "aria-label": "Sort controls",
                tabIndex: F.focusArea === "sort-controls" ? 0 : -1,
                ref: (oe) => {
                  ne.current[0] = oe;
                },
                onKeyDown: (oe) => me(oe, 0),
                children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
                  /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                    /* @__PURE__ */ r.jsx(
                      "label",
                      {
                        htmlFor: `card-sort-${W.id}`,
                        className: "sort-label",
                        children: "Sort cards by"
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      $r,
                      {
                        id: `card-sort-${W.id}`,
                        name: `card-sort-${W.id}`,
                        value: F.cardSortConfig ? `${F.cardSortConfig.key}-${F.cardSortConfig.direction}` : "",
                        onChange: (oe) => pe(oe.target.value),
                        className: "sort-select",
                        children: le(W.columns).map((oe) => /* @__PURE__ */ r.jsx("option", { value: oe.value, children: oe.label }, oe.value))
                      }
                    )
                  ] }),
                  F.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                    /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                      "Sorted by ",
                      Ie(F.cardSortConfig)
                    ] }),
                    /* @__PURE__ */ r.jsx(
                      xt,
                      {
                        variant: "secondary",
                        size: "small",
                        onClick: () => pe(""),
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
              ref: B,
              className: "aria-tabs-datagrid-adaptive__cards",
              role: "grid",
              "aria-label": `${W?.label || "Data"} cards in ${F.gridRows} rows and ${F.gridColumns} columns`,
              "aria-rowcount": F.gridRows,
              "aria-colcount": F.gridColumns,
              id: `panel-${W?.id}`,
              "aria-labelledby": `tab-${W?.id}`,
              children: Ve(W?.data || []).map((oe, ee) => {
                const re = F.selectedCardIndex === ee, ce = F.focusedCardIndex === ee && F.focusArea === "cards", ue = F.focusedCardIndex === ee && F.focusArea === "card" && F.isCardNavigationActive, ve = ee === 0 && F.focusArea !== "cards", Ne = ce || ve, He = E(ee, F.gridColumns);
                if (n.cardTemplate) {
                  const Qe = n.cardTemplate(
                    oe,
                    W.columns
                  );
                  return /* @__PURE__ */ r.jsx(
                    "div",
                    {
                      role: "row",
                      "aria-rowindex": He.row + 1,
                      className: "aria-tabs-datagrid-adaptive__row",
                      children: /* @__PURE__ */ r.jsx(
                        "div",
                        {
                          ref: (ie) => {
                            K.current[ee] = ie;
                          },
                          className: [
                            "aria-tabs-datagrid-adaptive__card-wrapper",
                            re ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                            ce ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                            ue ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                          ].filter(Boolean).join(" "),
                          role: "gridcell",
                          "aria-colindex": He.col + 1,
                          "aria-selected": re,
                          "aria-expanded": ue,
                          "aria-description": ue ? `Card navigation active. ${F.cardElements.length} interactive elements available.` : void 0,
                          tabIndex: Ne ? 0 : -1,
                          onClick: () => {
                            L((ie) => ({
                              ...ie,
                              selectedCardIndex: ie.selectedCardIndex === ee ? -1 : ee
                            })), Y(oe);
                          },
                          onKeyDown: (ie) => q(ie, ee),
                          onFocus: () => {
                            L((ie) => ie.isCardNavigationActive ? ie : ie.focusedCardIndex !== ee || ie.focusArea !== "cards" ? {
                              ...ie,
                              focusedCardIndex: ee,
                              focusArea: "cards"
                            } : ie);
                          },
                          children: Qe
                        }
                      )
                    },
                    `card-${ee}`
                  );
                }
                const Ye = Fp(
                  oe,
                  W.columns,
                  A,
                  I
                ), lt = [
                  Ye.className || "",
                  re ? "aria-tabs-datagrid-adaptive__card--selected" : "",
                  ce ? "aria-tabs-datagrid-adaptive__card--focused" : "",
                  ue ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
                ].filter(Boolean).join(" ");
                return /* @__PURE__ */ r.jsx(
                  "div",
                  {
                    role: "row",
                    "aria-rowindex": He.row + 1,
                    className: "aria-tabs-datagrid-adaptive__row",
                    children: /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: [
                          "aria-tabs-datagrid-adaptive__card-wrapper",
                          re ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                          ce ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                          ue ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                        ].filter(Boolean).join(" "),
                        role: "gridcell",
                        "aria-colindex": He.col + 1,
                        "aria-selected": re,
                        "aria-expanded": ue,
                        onKeyDown: (Qe) => {
                          Qe.key === "Enter" && (Qe.preventDefault(), L((ie) => ({
                            ...ie,
                            selectedCardIndex: ee
                          }))), q(Qe, ee);
                        },
                        children: /* @__PURE__ */ r.jsx(
                          Tl,
                          {
                            ...Ye,
                            ref: (Qe) => {
                              K.current[ee] = Qe;
                            },
                            className: lt,
                            "aria-label": `${Ye["aria-label"] || Ye.heading}. ${ue ? `Card navigation active with ${F.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                            tabIndex: Ne ? 0 : -1,
                            onClick: () => {
                              L((Qe) => ({
                                ...Qe,
                                selectedCardIndex: Qe.selectedCardIndex === ee ? -1 : ee
                              })), Y(oe);
                            },
                            onKeyDown: (Qe) => q(Qe, ee),
                            onFocus: () => {
                              F.isCardNavigationActive || L((Qe) => Qe.focusedCardIndex !== ee || Qe.focusArea !== "cards" ? {
                                ...Qe,
                                focusedCardIndex: ee,
                                focusArea: "cards",
                                focusedCardElementIndex: 0,
                                cardElements: []
                              } : Qe);
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
          o && x === "below" && W && W.columns && /* @__PURE__ */ r.jsx(
            er,
            {
              sortConfig: $.sortConfig || [],
              columns: W.columns.map((oe) => ({ key: oe.key, label: oe.label })),
              onSortChange: (oe) => {
                H({ type: "SET_SORT", payload: oe });
              },
              ariaLabel: "Card view sort configuration",
              className: "aria-tabs-datagrid-adaptive__advanced-sort-controls aria-tabs-datagrid-adaptive__advanced-sort-controls--below"
            }
          ),
          i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
          /* @__PURE__ */ r.jsx(
            "div",
            {
              ref: V,
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
        ]
      }
    );
  }
  return w === "hybrid" ? /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${b || ""}`,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
        /* @__PURE__ */ r.jsx(
          yo,
          {
            tabPanels: m,
            dataConfig: g,
            ariaLabel: C,
            ariaDescription: k,
            orientation: v,
            id: _,
            disabled: j,
            selectedIndex: S,
            onTabChange: N,
            className: "aria-tabs-datagrid-adaptive__table--hybrid",
            actions: l,
            forceActionsAbove: c,
            hideTabsIfSingle: d,
            minColumnWidth: u,
            enableColumnCollapse: f,
            minVisibleColumns: h,
            showCollapsedColumnsIndicator: p,
            sortStatusPlacement: x,
            ...y
          }
        ),
        i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${b || ""}`,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
        /* @__PURE__ */ r.jsx(
          yo,
          {
            tabPanels: m,
            dataConfig: g,
            ariaLabel: C,
            ariaDescription: k,
            orientation: v,
            id: _,
            disabled: j,
            selectedIndex: S,
            onTabChange: N,
            actions: l,
            forceActionsAbove: c,
            hideTabsIfSingle: d,
            minColumnWidth: u,
            enableColumnCollapse: f,
            minVisibleColumns: h,
            showCollapsedColumnsIndicator: p,
            sortStatusPlacement: x,
            ...y
          }
        ),
        i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
      ]
    }
  );
}, zl = (e) => {
  const t = bo.find((n) => n.value === e);
  return t ? t.icon : null;
}, Pp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => zl(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Rp = (e) => ps(e, [
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
]), Bp = {
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
  booleanRenderer: (e) => zl(e),
  getDataId: (e) => `financial-${e.id}`
}, Hp = (e) => ps(e, [
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
]), zp = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Pp,
    createTabs: Rp
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Bp,
    createTabs: Hp
  }
}, yi = (e, t) => {
  const n = zp[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, Ol = [
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
], Op = [
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
], Up = [
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
], Wp = [
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
], bi = [
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
], vi = [
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
], wi = [
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
], Gp = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Vp = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ol,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      El,
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
    data: Op,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Fl,
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
    data: Up,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Pl,
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
    data: Wp,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Rl,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Yp = () => {
  const [e, t] = Oe("healthcare"), n = Re(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: vp,
      tabPanels: Vp(),
      data: Ol
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...yi("ecommerce", bi),
      data: bi
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...yi("financial", vi),
      data: vi
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Gp,
      tabPanels: ps(wi, [
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
      data: wi
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
        xt,
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
      yo,
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
}, k1 = Yp;
function Zp(e) {
  var t = 0, n = e.children, a = n && n.length;
  if (!a) t = 1;
  else for (; --a >= 0; ) t += n[a].value;
  e.value = t;
}
function qp() {
  return this.eachAfter(Zp);
}
function Jp(e, t) {
  let n = -1;
  for (const a of this)
    e.call(t, a, ++n, this);
  return this;
}
function Xp(e, t) {
  for (var n = this, a = [n], o, s, i = -1; n = a.pop(); )
    if (e.call(t, n, ++i, this), o = n.children)
      for (s = o.length - 1; s >= 0; --s)
        a.push(o[s]);
  return this;
}
function Kp(e, t) {
  for (var n = this, a = [n], o = [], s, i, l, c = -1; n = a.pop(); )
    if (o.push(n), s = n.children)
      for (i = 0, l = s.length; i < l; ++i)
        a.push(s[i]);
  for (; n = o.pop(); )
    e.call(t, n, ++c, this);
  return this;
}
function Qp(e, t) {
  let n = -1;
  for (const a of this)
    if (e.call(t, a, ++n, this))
      return a;
}
function em(e) {
  return this.eachAfter(function(t) {
    for (var n = +e(t.data) || 0, a = t.children, o = a && a.length; --o >= 0; ) n += a[o].value;
    t.value = n;
  });
}
function tm(e) {
  return this.eachBefore(function(t) {
    t.children && t.children.sort(e);
  });
}
function nm(e) {
  for (var t = this, n = rm(t, e), a = [t]; t !== n; )
    t = t.parent, a.push(t);
  for (var o = a.length; e !== n; )
    a.splice(o, 0, e), e = e.parent;
  return a;
}
function rm(e, t) {
  if (e === t) return e;
  var n = e.ancestors(), a = t.ancestors(), o = null;
  for (e = n.pop(), t = a.pop(); e === t; )
    o = e, e = n.pop(), t = a.pop();
  return o;
}
function am() {
  for (var e = this, t = [e]; e = e.parent; )
    t.push(e);
  return t;
}
function om() {
  return Array.from(this);
}
function sm() {
  var e = [];
  return this.eachBefore(function(t) {
    t.children || e.push(t);
  }), e;
}
function im() {
  var e = this, t = [];
  return e.each(function(n) {
    n !== e && t.push({ source: n.parent, target: n });
  }), t;
}
function* lm() {
  var e = this, t, n = [e], a, o, s;
  do
    for (t = n.reverse(), n = []; e = t.pop(); )
      if (yield e, a = e.children)
        for (o = 0, s = a.length; o < s; ++o)
          n.push(a[o]);
  while (n.length);
}
function ms(e, t) {
  e instanceof Map ? (e = [void 0, e], t === void 0 && (t = um)) : t === void 0 && (t = dm);
  for (var n = new Vr(e), a, o = [n], s, i, l, c; a = o.pop(); )
    if ((i = t(a.data)) && (c = (i = Array.from(i)).length))
      for (a.children = i, l = c - 1; l >= 0; --l)
        o.push(s = i[l] = new Vr(i[l])), s.parent = a, s.depth = a.depth + 1;
  return n.eachBefore(hm);
}
function cm() {
  return ms(this).eachBefore(fm);
}
function dm(e) {
  return e.children;
}
function um(e) {
  return Array.isArray(e) ? e[1] : null;
}
function fm(e) {
  e.data.value !== void 0 && (e.value = e.data.value), e.data = e.data.data;
}
function hm(e) {
  var t = 0;
  do
    e.height = t;
  while ((e = e.parent) && e.height < ++t);
}
function Vr(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
Vr.prototype = ms.prototype = {
  constructor: Vr,
  count: qp,
  each: Jp,
  eachAfter: Kp,
  eachBefore: Xp,
  find: Qp,
  sum: em,
  sort: tm,
  path: nm,
  ancestors: am,
  descendants: om,
  leaves: sm,
  links: im,
  copy: cm,
  [Symbol.iterator]: lm
};
function Ia(e) {
  return typeof e == "number" && !isNaN(e);
}
function pm(e, t) {
  return e.map((n) => {
    const a = t.split(".");
    let o = n;
    for (const s of a)
      if (o = o?.[s], o === void 0) break;
    return o;
  }).filter((n) => n != null);
}
function Ul(e) {
  const t = e.filter(Ia);
  return t.length === 0 ? 0 : t.reduce((n, a) => n + a, 0);
}
function mm(e) {
  const t = e.filter(Ia);
  return t.length === 0 ? 0 : Ul(t) / t.length;
}
function gm(e) {
  return e.length;
}
function xm(e) {
  return new Set(e).size;
}
function ym(e) {
  const t = e.filter(Ia);
  return t.length === 0 ? null : Math.min(...t);
}
function bm(e) {
  const t = e.filter(Ia);
  return t.length === 0 ? null : Math.max(...t);
}
function vm(e) {
  return e.length > 0 ? e[0] : null;
}
function wm(e) {
  return e.length > 0 ? e[e.length - 1] : null;
}
function _m(e) {
  return e.filter((n) => n != null).map((n) => String(n)).join(", ");
}
const Sm = {
  sum: Ul,
  avg: mm,
  count: gm,
  min: ym,
  max: bm,
  first: vm,
  last: wm,
  concat: _m,
  countUnique: xm
};
function km(e, t) {
  if (t.length === 0)
    return null;
  const n = pm(t, e.column);
  let a;
  if (e.type === "custom") {
    if (!e.customFn)
      throw new Error(`Custom aggregation for column "${e.column}" requires a customFn`);
    a = e.customFn(n, t);
  } else {
    const o = Sm[e.type];
    a = o(n, t);
  }
  return a;
}
function vo(e, t) {
  const n = {};
  for (const a of e) {
    const o = a.label || `${a.column}_${a.type}`;
    n[o] = km(a, t);
  }
  return n;
}
function Nm(e, t, n) {
  try {
    return e.calculate(t, n);
  } catch (a) {
    return console.error(`Error calculating field "${e.key}":`, a), null;
  }
}
function Cm(e, t) {
  return t.length === 0 ? e : e.map((n) => {
    const a = { ...n };
    for (const o of t)
      a[o.key] = Nm(o, n, e);
    return a;
  });
}
function jm(e, t) {
  const n = /* @__PURE__ */ new Map();
  for (const a of e) {
    const o = typeof t == "function" ? t(a) : a[t];
    n.has(o) || n.set(o, []), n.get(o).push(a);
  }
  return n;
}
function Mm(e, t) {
  return t.label ? `${t.label}: ${e}` : String(e);
}
function Im(e, t) {
  const { levels: n } = t;
  function a(i, l, c) {
    if (l >= n.length)
      return i.map((p, x) => ({
        id: `${c}-item-${x}`,
        type: "item",
        level: l,
        data: p,
        items: [p]
      }));
    const d = n[l], u = jm(i, d.groupBy), f = [];
    let h = Array.from(u.entries());
    d.sortDirection && h.sort((p, x) => (d.sortDirection === "asc" ? 1 : -1) * String(p[0]).localeCompare(String(x[0])));
    for (const [p, x] of h) {
      const m = `${c}-${l}-${p}`, g = a(x, l + 1, m), S = d.aggregations ? vo(d.aggregations, x) : {};
      f.push({
        id: m,
        type: "group",
        level: l,
        key: p,
        label: Mm(p, d),
        items: x,
        aggregations: S,
        children: g
      });
    }
    return f;
  }
  const o = a(e, 0, "root"), s = t.globalAggregations ? vo(t.globalAggregations, e) : {};
  return {
    id: "root",
    type: "root",
    level: -1,
    items: e,
    aggregations: s,
    children: o
  };
}
function Dm(e, t) {
  const { getId: n, getParentId: a, rootIds: o = [] } = t, s = /* @__PURE__ */ new Map();
  for (const u of e) {
    const f = n(u);
    s.set(f, u);
  }
  const i = /* @__PURE__ */ new Map();
  function l(u, f = 0) {
    const h = n(u);
    if (i.has(h))
      return i.get(h);
    const p = {
      id: h,
      type: "item",
      level: f,
      data: u,
      items: [u],
      children: []
    };
    i.set(h, p);
    const x = [];
    for (const m of e)
      a?.(m) === h && x.push(m);
    if (x.length > 0 && (p.children = x.map((m) => l(m, f + 1)), t.aggregations && t.showChildAggregations)) {
      const m = Wl(p);
      p.aggregations = vo(t.aggregations, m);
    }
    return p;
  }
  const c = [];
  for (const u of e) {
    const f = a?.(u);
    (!f || o.includes(f)) && c.push(u);
  }
  const d = c.map((u) => l(u, 0));
  return {
    id: "root",
    type: "root",
    level: -1,
    items: e,
    children: d
  };
}
function Wl(e) {
  const t = [...e.items || []];
  if (e.children)
    for (const n of e.children)
      t.push(...Wl(n));
  return t;
}
function Tm(e, t, n) {
  const a = [];
  function o(s) {
    const i = s.data;
    if (i.type === "root") {
      if (s.children)
        for (const d of s.children)
          o(d);
      return;
    }
    const l = t.has(i.id), c = (s.children?.length || 0) > 0;
    if (i.type === "group") {
      if (a.push({
        id: i.id,
        type: "group",
        level: i.level,
        isExpandable: c,
        isExpanded: l,
        groupMetadata: {
          key: i.key,
          label: i.label,
          aggregations: i.aggregations || {},
          itemCount: i.items?.length || 0
        },
        parentId: s.parent?.data.id !== "root" ? s.parent?.data.id : void 0,
        path: Ka(s)
      }), l && s.children)
        for (const d of s.children)
          o(d);
    } else if (i.type === "item")
      if (n === "tree" && c) {
        if (a.push({
          id: i.id,
          type: "tree-node",
          level: i.level,
          isExpandable: !0,
          isExpanded: l,
          data: i.data,
          parentId: s.parent?.data.id !== "root" ? s.parent?.data.id : void 0,
          path: Ka(s)
        }), l && s.children)
          for (const d of s.children)
            o(d);
      } else
        a.push({
          id: i.id,
          type: n === "tree" ? "tree-node" : "item",
          level: i.level,
          isExpandable: c,
          isExpanded: !1,
          data: i.data,
          parentId: s.parent?.data.id !== "root" ? s.parent?.data.id : void 0,
          path: Ka(s)
        });
  }
  return o(e), a;
}
function Ka(e) {
  const t = [];
  let n = e;
  for (; n && n.data.type !== "root"; )
    t.unshift(n.data.id), n = n.parent;
  return t;
}
class _i {
  hierarchyRoot;
  mode;
  constructor(t, n, a) {
    this.mode = n;
    const o = n === "grouped" ? Im(t, a) : Dm(t, a);
    this.hierarchyRoot = ms(o);
  }
  /**
   * Get the hierarchy root
   */
  getRoot() {
    return this.hierarchyRoot;
  }
  /**
   * Get flattened nodes for rendering
   */
  getFlattenedNodes(t) {
    return Tm(this.hierarchyRoot, t, this.mode);
  }
  /**
   * Find a node by ID
   */
  findNode(t) {
    return this.hierarchyRoot.find((n) => n.data.id === t);
  }
  /**
   * Get all descendant node IDs
   */
  getDescendantIds(t) {
    const n = this.findNode(t);
    if (!n) return [];
    const a = [];
    return n.each((o) => {
      o.data.id !== t && a.push(o.data.id);
    }), a;
  }
  /**
   * Get all ancestor node IDs
   */
  getAncestorIds(t) {
    const n = this.findNode(t);
    if (!n) return [];
    const a = [];
    let o = n.parent;
    for (; o && o.data.type !== "root"; )
      a.push(o.data.id), o = o.parent;
    return a;
  }
  /**
   * Get siblings of a node
   */
  getSiblingIds(t) {
    const n = this.findNode(t);
    return !n || !n.parent ? [] : (n.parent.children || []).filter((a) => a.data.id !== t).map((a) => a.data.id);
  }
  /**
   * Get total item count
   */
  getTotalCount() {
    return this.hierarchyRoot.data.items?.length || 0;
  }
  /**
   * Get maximum depth
   */
  getMaxDepth() {
    return this.hierarchyRoot.height;
  }
  /**
   * Get aggregations for a node
   */
  getAggregations(t) {
    return this.findNode(t)?.data.aggregations;
  }
  /**
   * Get global (root) aggregations
   */
  getGlobalAggregations() {
    return this.hierarchyRoot.data.aggregations || {};
  }
}
function Si(e, t, n) {
  if (e instanceof Set)
    return new Set(e);
  if (Array.isArray(e))
    return new Set(e);
  if (!t)
    return /* @__PURE__ */ new Set();
  if (e === "all") {
    const a = /* @__PURE__ */ new Set();
    return t.getRoot().each((o) => {
      o.data.type !== "root" && (!n || o.depth <= n) && a.add(o.data.id);
    }), a;
  }
  if (e === "first") {
    const a = /* @__PURE__ */ new Set(), o = t.getRoot();
    if (o.children)
      for (const s of o.children)
        a.add(s.data.id);
    return a;
  }
  return /* @__PURE__ */ new Set();
}
function Lm(e) {
  if (typeof window > "u")
    return null;
  try {
    const t = localStorage.getItem(e);
    if (t) {
      const n = JSON.parse(t);
      return new Set(n);
    }
  } catch (t) {
    console.warn("Failed to load persisted expansion state:", t);
  }
  return null;
}
function $m(e, t) {
  if (!(typeof window > "u"))
    try {
      const n = JSON.stringify(Array.from(t));
      localStorage.setItem(e, n);
    } catch (n) {
      console.warn("Failed to persist expansion state:", n);
    }
}
function Am(e = {}) {
  const {
    initialExpanded: t,
    expandedIds: n,
    onExpansionChange: a,
    hierarchyManager: o,
    maxAutoExpandDepth: s,
    persistKey: i
  } = e, l = n !== void 0, c = Re(() => i ? Lm(i) : null, [i]), [d, u] = Oe(() => c || Si(t, o, s)), f = l ? n : d, h = fe(
    (C) => {
      l || u(C), i && $m(i, C), a?.(C);
    },
    [l, i, a]
  ), p = fe(
    (C) => {
      const k = new Set(f);
      k.add(C), h(k);
    },
    [f, h]
  ), x = fe(
    (C) => {
      const k = new Set(f);
      k.delete(C), h(k);
    },
    [f, h]
  ), m = fe(
    (C) => {
      f.has(C) ? x(C) : p(C);
    },
    [f, p, x]
  ), g = fe(() => {
    if (!o) {
      console.warn("Cannot expand all: hierarchyManager not provided");
      return;
    }
    const C = /* @__PURE__ */ new Set();
    o.getRoot().each((k) => {
      k.data.type !== "root" && (!s || k.depth <= s) && C.add(k.data.id);
    }), h(C);
  }, [o, s, h]), S = fe(() => {
    h(/* @__PURE__ */ new Set());
  }, [h]), N = fe(
    (C) => {
      if (!o) {
        console.warn("Cannot expand to depth: hierarchyManager not provided");
        return;
      }
      const k = /* @__PURE__ */ new Set();
      o.getRoot().each((v) => {
        v.data.type !== "root" && v.depth <= C && k.add(v.data.id);
      }), h(k);
    },
    [o, h]
  );
  return nt(() => {
    if (!l && t) {
      const C = Si(
        t,
        o,
        s
      );
      u(C);
    }
  }, [t, o, s, l]), {
    expandedIds: f,
    expand: p,
    collapse: x,
    toggle: m,
    expandAll: g,
    collapseAll: S,
    expandToDepth: N
  };
}
function Em(e) {
  const {
    flattenedNodes: t,
    expansionState: n,
    hierarchyManager: a,
    columnCount: o,
    onFocusChange: s,
    onRowActivate: i,
    enableColumnNavigation: l = !1
  } = e, [c, d] = Oe(null), [u, f] = Oe(0), [h, p] = Oe(!1), x = Ze(!1);
  nt(() => {
    !x.current && t.length > 0 && !c && (d(t[0].id), x.current = !0);
  }, [t, c]);
  const m = fe(
    (A) => A ? t.findIndex((I) => I.id === A) : -1,
    [t]
  ), g = fe(() => c && t.find((A) => A.id === c) || null, [c, t]), S = fe(
    (A) => {
      d(A), f(0), s?.(A);
    },
    [s]
  ), N = fe(() => {
    const A = m(c);
    A < t.length - 1 && S(t[A + 1].id);
  }, [c, t, m, S]), C = fe(() => {
    const A = m(c);
    A > 0 && S(t[A - 1].id);
  }, [c, t, m, S]), k = fe(() => {
    t.length > 0 && S(t[0].id);
  }, [t, S]), v = fe(() => {
    t.length > 0 && S(t[t.length - 1].id);
  }, [t, S]), _ = fe(() => {
    const A = g();
    !A || !A.parentId || S(A.parentId);
  }, [g, S]), j = fe(() => {
    if (!c) return;
    const A = g();
    A && A.isExpandable && !A.isExpanded && n.expand(c);
  }, [c, g, n]), b = fe(() => {
    if (!c) return;
    const A = g();
    A && A.isExpandable && A.isExpanded ? n.collapse(c) : A && A.parentId && _();
  }, [c, g, n, _]), y = fe(() => {
    if (!c) return;
    const A = g();
    A && A.isExpandable && n.toggle(c);
  }, [c, g, n]), w = fe(() => {
    p(!0);
  }, []), T = fe(() => {
    p(!1);
  }, []), M = fe(
    (A) => {
      const { key: I, ctrlKey: D, metaKey: $ } = A, H = D || $;
      switch (I) {
        case "ArrowDown":
          A.preventDefault(), N();
          break;
        case "ArrowUp":
          A.preventDefault(), C();
          break;
        case "ArrowRight":
          A.preventDefault(), l && !H ? u < o - 1 && f((Z) => Z + 1) : j();
          break;
        case "ArrowLeft":
          A.preventDefault(), l && u > 0 ? f((Z) => Z - 1) : b();
          break;
        case "Home":
          A.preventDefault(), H ? k() : f(0);
          break;
        case "End":
          A.preventDefault(), H ? v() : f(o - 1);
          break;
        case "Enter":
          A.preventDefault(), c && (h ? i?.(c) : w());
          break;
        case " ":
          A.preventDefault(), y();
          break;
        case "Escape":
          A.preventDefault(), h ? T() : c && (d(null), s?.(null));
          break;
        case "*":
          A.preventDefault();
          {
            const Z = g();
            Z && Z.parentId && a.getSiblingIds(Z.id).forEach((ne) => {
              const B = t.find((F) => F.id === ne);
              B && B.isExpandable && n.expand(ne);
            });
          }
          break;
      }
    },
    [
      N,
      C,
      k,
      v,
      j,
      b,
      y,
      w,
      T,
      c,
      u,
      o,
      l,
      h,
      i,
      s,
      g,
      a,
      t,
      n
    ]
  );
  return {
    focusedNodeId: c,
    focusedColumnIndex: u,
    isNavigationActive: h,
    focusNode: S,
    handleKeyDown: M,
    focusNext: N,
    focusPrevious: C,
    focusFirst: k,
    focusLast: v,
    focusParent: _,
    expandFocused: j,
    collapseFocused: b,
    toggleFocused: y,
    activateNavigation: w,
    deactivateNavigation: T
  };
}
const Fm = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M7 5L12 10L7 15",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Gl = ({
  context: e,
  columnCount: t,
  customRenderer: n,
  isFocused: a = !1,
  onKeyDown: o,
  onClick: s,
  tabIndex: i = -1,
  "data-testid": l
}) => {
  const { node: c, level: d, isExpanded: u, toggleExpansion: f, aggregations: h, totalCount: p } = e;
  if (n)
    return /* @__PURE__ */ r.jsx(
      "tr",
      {
        className: ke("group-header", {
          "group-header--expanded": u,
          "group-header--focused": a,
          [`group-header--level-${d + 1}`]: !0
        }),
        role: "row",
        "aria-expanded": u,
        "aria-level": d + 1,
        tabIndex: i,
        onClick: s || f,
        onKeyDown: o,
        "data-testid": l,
        "data-node-id": c.id,
        children: /* @__PURE__ */ r.jsx("td", { colSpan: t, className: "group-header__cell group-header__cell--custom", children: n(e) })
      }
    );
  const x = Object.entries(h), m = x.length > 0;
  return /* @__PURE__ */ r.jsxs(
    "tr",
    {
      className: ke("group-header", {
        "group-header--expanded": u,
        "group-header--focused": a,
        [`group-header--level-${d + 1}`]: !0
      }),
      role: "row",
      "aria-expanded": u,
      "aria-level": d + 1,
      tabIndex: i,
      onClick: s || f,
      onKeyDown: o,
      "data-testid": l,
      "data-node-id": c.id,
      children: [
        /* @__PURE__ */ r.jsxs(
          "td",
          {
            className: ke(
              "group-header__cell",
              "group-header__cell--first",
              `group-header__cell--indent-${d}`
            ),
            children: [
              /* @__PURE__ */ r.jsx(
                "span",
                {
                  className: ke("group-header__icon", {
                    "group-header__icon--expanded": u
                  }),
                  children: /* @__PURE__ */ r.jsx(Fm, {})
                }
              ),
              /* @__PURE__ */ r.jsx("span", { className: "group-header__label", children: c.label }),
              /* @__PURE__ */ r.jsxs("span", { className: "group-header__count", children: [
                "(",
                p,
                " ",
                p === 1 ? "item" : "items",
                ")"
              ] })
            ]
          }
        ),
        t > 1 && m && /* @__PURE__ */ r.jsx(
          "td",
          {
            className: "group-header__cell group-header__cell--aggregations",
            colSpan: t - 1,
            children: /* @__PURE__ */ r.jsx("div", { className: "group-header__aggregations", children: x.map(([g, S], N) => {
              const C = typeof S == "object" && S !== null ? JSON.stringify(S) : String(S ?? "—");
              return /* @__PURE__ */ r.jsxs("div", { className: "group-header__aggregation", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "group-header__aggregation-label", children: [
                  g,
                  ":"
                ] }),
                /* @__PURE__ */ r.jsx("span", { className: "group-header__aggregation-value", children: C })
              ] }, `${g}-${N}`);
            }) })
          }
        ),
        t > 1 && !m && /* @__PURE__ */ r.jsx("td", { colSpan: t - 1, className: "group-header__cell" })
      ]
    }
  );
};
Gl.displayName = "GroupHeader";
const Pm = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M6 4L10 8L6 12",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
);
function Rm(e, t) {
  const n = e[t.key];
  return t.render ? t.render(e) : n == null ? "—" : String(n);
}
const Vl = ({
  context: e,
  columns: t,
  customRenderer: n,
  isFocused: a = !1,
  onKeyDown: o,
  onExpanderClick: s,
  tabIndex: i = -1,
  "data-testid": l
}) => {
  const { node: c, depth: d, isExpanded: u, toggleExpansion: f, hasChildren: h, aggregations: p } = e;
  return n ? /* @__PURE__ */ r.jsx(
    "tr",
    {
      className: ke("tree-node", {
        "tree-node--expanded": u,
        "tree-node--focused": a,
        "tree-node--has-children": h
      }),
      role: "row",
      "aria-expanded": h ? u : void 0,
      "aria-level": d + 1,
      tabIndex: i,
      onKeyDown: o,
      "data-testid": l,
      "data-node-id": c.id,
      children: /* @__PURE__ */ r.jsx("td", { colSpan: t.length, className: "tree-node__cell tree-node__cell--custom", children: n(e) })
    }
  ) : /* @__PURE__ */ r.jsx(
    "tr",
    {
      className: ke("tree-node", {
        "tree-node--expanded": u,
        "tree-node--focused": a,
        "tree-node--has-children": h
      }),
      role: "row",
      "aria-expanded": h ? u : void 0,
      "aria-level": d + 1,
      tabIndex: i,
      onKeyDown: o,
      "data-testid": l,
      "data-node-id": c.id,
      children: t.map((x, m) => {
        const g = m === 0;
        return /* @__PURE__ */ r.jsxs(
          "td",
          {
            className: ke("tree-node__cell", {
              "tree-node__cell--first": g,
              [`tree-node__cell--depth-${d}`]: g
            }),
            role: "gridcell",
            children: [
              g && /* @__PURE__ */ r.jsx(r.Fragment, { children: h ? /* @__PURE__ */ r.jsx(
                "button",
                {
                  type: "button",
                  className: ke("tree-node__expander", {
                    "tree-node__expander--expanded": u
                  }),
                  onClick: (S) => {
                    S.stopPropagation(), s ? s() : f();
                  },
                  "aria-label": u ? "Collapse node" : "Expand node",
                  tabIndex: -1,
                  children: /* @__PURE__ */ r.jsx(Pm, {})
                }
              ) : /* @__PURE__ */ r.jsx("span", { className: "tree-node__expander tree-node__expander--placeholder" }) }),
              /* @__PURE__ */ r.jsx("span", { className: "tree-node__content", children: Rm(c.data, x) }),
              g && p && Object.keys(p).length > 0 && /* @__PURE__ */ r.jsxs("span", { className: "tree-node__aggregation-hint", title: "Has aggregated data from children", children: [
                " ",
                "(",
                Object.keys(p).length,
                " agg)"
              ] })
            ]
          },
          x.key
        );
      })
    }
  );
};
Vl.displayName = "TreeNode";
const Bm = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M12 10L8 6L4 10",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), Hm = () => /* @__PURE__ */ r.jsx(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ r.jsx(
      "path",
      {
        d: "M4 6L8 10L12 6",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), zm = () => /* @__PURE__ */ r.jsxs(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: [
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M12 6L8 2L4 6",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ r.jsx(
        "path",
        {
          d: "M4 10L8 14L12 10",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ]
  }
);
function Om(e, t, n, a, o, s, i) {
  return e.data ? /* @__PURE__ */ r.jsx(
    "tr",
    {
      className: ke("groupable-datagrid__data-row", {
        "groupable-datagrid__data-row--focused": a,
        "groupable-datagrid__data-row--selected": o
      }),
      role: "row",
      "aria-selected": o,
      tabIndex: a ? 0 : -1,
      onKeyDown: s,
      onClick: i,
      "data-row-index": n,
      "data-node-id": e.id,
      style: { cursor: i ? "pointer" : void 0 },
      children: t.map((l) => {
        const c = e.data[l.key], d = l.customRenderer ? l.customRenderer(c, e.data) : l.render ? l.render(e.data) : c != null ? String(c) : "—";
        return /* @__PURE__ */ r.jsx(
          "td",
          {
            className: "groupable-datagrid__data-cell",
            role: "gridcell",
            children: d
          },
          l.key
        );
      })
    },
    e.id
  ) : null;
}
const Um = ({
  mode: e,
  data: t,
  columns: n,
  groupConfig: a,
  treeConfig: o,
  // pivotConfig, // Future use
  calculatedFields: s = [],
  initialExpanded: i,
  expandedIds: l,
  onExpansionChange: c,
  // enableVirtualization = false, // Future use
  // virtualizationConfig, // Future use
  // onDataChange, // Future use
  // enableInlineEditing = false, // Future use
  // onCellEditStart, // Future use
  // onCellEditComplete, // Future use
  selectedRow: d,
  onGlobalRowSelectionChange: u,
  onRowClick: f,
  sortConfig: h,
  onSortChange: p,
  enableMultiSort: x = !1,
  showControls: m = !0,
  controlsRenderer: g,
  isLoading: S = !1,
  error: N = null,
  ariaLabel: C,
  ariaDescription: k,
  className: v,
  "data-testid": _,
  mobileDisplay: j = "auto",
  mobileBreakpoint: b = 768
}) => {
  const y = Ze(null), [w, T] = tt.useState(!1);
  tt.useEffect(() => {
    const E = () => {
      T(window.innerWidth < b);
    };
    return E(), window.addEventListener("resize", E), () => window.removeEventListener("resize", E);
  }, [b]);
  const M = j === "cards" || j === "auto" && w, A = j === "scroll" || j === "auto" && !w, I = Re(() => {
    if (!h || h.length === 0) return t;
    const E = [...t];
    for (let O = h.length - 1; O >= 0; O--) {
      const P = h[O], X = n.find((Y) => Y.key === P.key);
      E.sort((Y, Q) => {
        let de = Y[P.key], V = Q[P.key];
        if (X?.render && (de = X.render(Y), V = X.render(Q)), de == null && V == null) return 0;
        if (de == null) return 1;
        if (V == null) return -1;
        if (typeof de == "number" && typeof V == "number")
          return P.direction === "asc" ? de - V : V - de;
        const ae = String(de), le = String(V), be = ae.localeCompare(le);
        return P.direction === "asc" ? be : -be;
      });
    }
    return E;
  }, [t, h, n]), D = fe(
    (E) => {
      if (!p) return;
      const O = h?.find((P) => P.key === E);
      if (x) {
        let P = [...h || []];
        O ? O.direction === "asc" ? P = P.map(
          (X) => X.key === E ? { ...X, direction: "desc" } : X
        ) : P = P.filter((X) => X.key !== E) : P.push({ key: E, direction: "asc" }), p(P);
      } else
        O ? O.direction === "asc" ? p([{ key: E, direction: "desc" }]) : p([]) : p([{ key: E, direction: "asc" }]);
    },
    [h, p, x]
  ), $ = fe(
    (E, O) => {
      f && f(E, O), u && u(d === E ? null : E);
    },
    [f, u, d]
  ), H = Re(() => {
    const E = I;
    return s.length === 0 ? E : Cm(E, s);
  }, [I, s]), Z = Re(() => e === "flat" || e === "pivot" ? null : e === "grouped" ? a ? new _i(H, "grouped", a) : (console.warn("GroupableDataGrid: grouped mode requires groupConfig"), null) : e === "tree" ? o ? new _i(H, "tree", o) : (console.warn("GroupableDataGrid: tree mode requires treeConfig"), null) : null, [e, H, a, o]), K = Am({
    initialExpanded: i,
    expandedIds: l,
    onExpansionChange: c,
    hierarchyManager: Z || void 0,
    maxAutoExpandDepth: a?.maxAutoExpandDepth || o?.maxAutoExpandDepth
  }), ne = Re(() => Z ? Z.getFlattenedNodes(K.expandedIds) : H.map((E, O) => ({
    id: `flat-${O}`,
    type: "item",
    level: 0,
    isExpandable: !1,
    isExpanded: !1,
    data: E,
    path: [`flat-${O}`]
  })), [Z, K.expandedIds, H]), B = Em({
    flattenedNodes: ne,
    expansionState: K,
    hierarchyManager: Z,
    columnCount: n.length,
    enableColumnNavigation: e === "tree"
  });
  nt(() => {
    if (B.focusedNodeId && y.current) {
      const E = y.current.querySelector(
        `[data-node-id="${B.focusedNodeId}"]`
      );
      E && document.activeElement !== E && (document.activeElement instanceof HTMLElement && document.activeElement !== document.body && y.current.contains(document.activeElement) && document.activeElement.blur(), E.focus());
    }
  }, [B.focusedNodeId]);
  const F = fe(
    (E, O) => {
      const P = B.focusedNodeId === E.id;
      if (E.type === "group") {
        if (!Z || !a) return null;
        const Q = Z.findNode(E.id);
        if (!Q) return null;
        const de = {
          node: {
            id: E.id,
            key: E.groupMetadata.key,
            label: E.groupMetadata.label,
            level: E.level,
            items: Q.data.items || [],
            aggregations: E.groupMetadata.aggregations,
            totalCount: E.groupMetadata.itemCount
          },
          level: E.level,
          isExpanded: E.isExpanded,
          toggleExpansion: () => K.toggle(E.id),
          aggregations: E.groupMetadata.aggregations,
          totalCount: E.groupMetadata.itemCount,
          childCount: Q.children?.length || 0
        }, ae = a.levels[E.level]?.headerRenderer;
        return /* @__PURE__ */ r.jsx(
          Gl,
          {
            context: de,
            columnCount: n.length,
            customRenderer: ae,
            isFocused: P,
            onKeyDown: B.handleKeyDown,
            tabIndex: P ? 0 : -1
          },
          E.id
        );
      }
      if (E.type === "tree-node") {
        if (!Z || !o) return null;
        const Q = Z.findNode(E.id);
        if (!Q) return null;
        const de = {
          node: {
            id: E.id,
            data: E.data,
            depth: E.level,
            children: Q.children?.map((ae) => ({
              id: ae.data.id,
              data: ae.data.data,
              depth: ae.depth
            })),
            aggregations: Q.data.aggregations
          },
          depth: E.level,
          isExpanded: E.isExpanded,
          toggleExpansion: () => K.toggle(E.id),
          hasChildren: E.isExpandable,
          aggregations: Q.data.aggregations,
          path: E.path.map((ae) => {
            const le = Z.findNode(ae);
            return le ? { id: ae, data: le.data.data, depth: le.depth } : { id: ae, data: {}, depth: 0 };
          })
        }, V = o.nodeRenderer;
        return /* @__PURE__ */ r.jsx(
          Vl,
          {
            context: de,
            columns: n,
            customRenderer: V,
            isFocused: P,
            onKeyDown: B.handleKeyDown,
            tabIndex: P ? 0 : -1
          },
          E.id
        );
      }
      const X = d === E.data, Y = u || f ? (Q) => $(E.data, Q) : void 0;
      return Om(
        E,
        n,
        O,
        P,
        X,
        B.handleKeyDown,
        Y
      );
    },
    [
      B,
      Z,
      a,
      o,
      n,
      K,
      d,
      $,
      u,
      f
    ]
  ), L = fe(() => {
    if (!m) return null;
    if (g) {
      const E = {
        mode: e,
        expansion: K,
        totalItems: H.length,
        visibleItems: ne.length,
        groupLevels: a?.levels
      };
      return /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__controls", children: g(E) });
    }
    return e === "flat" ? null : /* @__PURE__ */ r.jsxs("div", { className: "groupable-datagrid__controls", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "groupable-datagrid__controls-left", children: [
        /* @__PURE__ */ r.jsx(xt, { variant: "secondary", onClick: () => K.expandAll(), children: "Expand All" }),
        /* @__PURE__ */ r.jsx(xt, { variant: "secondary", onClick: () => K.collapseAll(), children: "Collapse All" })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__controls-right", children: /* @__PURE__ */ r.jsxs("span", { className: "groupable-datagrid__controls-info", children: [
        "Showing ",
        ne.filter((E) => E.type === "item").length,
        " of",
        " ",
        H.length,
        " items"
      ] }) })
    ] });
  }, [
    m,
    g,
    e,
    K,
    H.length,
    ne.length,
    a
  ]), G = fe(
    (E) => {
      if (E.type === "group") {
        const O = E.level || 0, P = E.isExpanded;
        return /* @__PURE__ */ r.jsx(
          "div",
          {
            className: ke(
              "groupable-datagrid__card",
              "groupable-datagrid__card--group",
              `groupable-datagrid__card--level-${O}`,
              {
                "groupable-datagrid__card--expanded": P
              }
            ),
            onClick: () => K.toggle(E.id),
            children: /* @__PURE__ */ r.jsxs("div", { className: "groupable-datagrid__card-group-header", children: [
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  className: "groupable-datagrid__card-group-toggle",
                  "aria-label": P ? "Collapse group" : "Expand group",
                  "aria-expanded": P,
                  children: /* @__PURE__ */ r.jsx(
                    "svg",
                    {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      className: ke(
                        "groupable-datagrid__card-group-chevron",
                        {
                          "groupable-datagrid__card-group-chevron--expanded": P
                        }
                      ),
                      children: /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          d: "M6 8L10 12L14 8",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ r.jsx("span", { className: "groupable-datagrid__card-group-label", children: E.groupMetadata?.label || "Group" }),
              E.groupMetadata?.itemCount !== void 0 && /* @__PURE__ */ r.jsxs("span", { className: "groupable-datagrid__card-group-count", children: [
                "(",
                E.groupMetadata.itemCount,
                ")"
              ] })
            ] })
          },
          E.id
        );
      }
      if (E.type === "item" && E.data) {
        const O = d === E.data, P = n.find(
          (Y) => Y.key === "metricName" || Y.key === "name" || Y.key === "title"
        ) || n[0], X = n.filter((Y) => Y.key !== P.key);
        return /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: ke("groupable-datagrid__card", {
              "groupable-datagrid__card--selected": O
            }),
            onClick: (Y) => {
              u && u(
                O ? null : E.data
              ), f && f(E.data, Y);
            },
            children: [
              (() => {
                const Y = E.data[P.key], Q = P.customRenderer ? P.customRenderer(Y, E.data) : P.render ? P.render(E.data) : Y != null ? String(Y) : "—";
                return /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__card-title", children: Q });
              })(),
              X.map((Y) => {
                const Q = E.data[Y.key], de = Y.customRenderer ? Y.customRenderer(Q, E.data) : Y.render ? Y.render(E.data) : Q != null ? String(Q) : "—";
                return /* @__PURE__ */ r.jsxs(
                  "div",
                  {
                    className: "groupable-datagrid__card-field",
                    children: [
                      /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__card-label", children: Y.label }),
                      /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__card-value", children: de })
                    ]
                  },
                  Y.key
                );
              })
            ]
          },
          E.id
        );
      }
      return null;
    },
    [
      n,
      K,
      a,
      d,
      u,
      f,
      Z
    ]
  );
  return S ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: ke(
        "groupable-datagrid",
        "groupable-datagrid--loading",
        v
      ),
      children: /* @__PURE__ */ r.jsx("p", { children: "Loading data..." })
    }
  ) : N ? /* @__PURE__ */ r.jsx(
    "div",
    {
      className: ke(
        "groupable-datagrid",
        "groupable-datagrid--error",
        v
      ),
      children: /* @__PURE__ */ r.jsxs("p", { children: [
        "Error: ",
        N
      ] })
    }
  ) : H.length === 0 ? /* @__PURE__ */ r.jsx("div", { className: ke("groupable-datagrid", v), children: /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__empty", children: "No data available" }) }) : /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: y,
      className: ke("groupable-datagrid", v, {
        "groupable-datagrid--mobile-cards": M,
        "groupable-datagrid--mobile-scroll": A
      }),
      "data-testid": _,
      "data-mode": e,
      children: [
        L(),
        M && /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__cards", children: ne.map((E) => G(E)) }),
        !M && /* @__PURE__ */ r.jsx("div", { className: "groupable-datagrid__table-wrapper", children: /* @__PURE__ */ r.jsxs(
          "table",
          {
            className: "groupable-datagrid__treegrid",
            role: e === "flat" ? "table" : "treegrid",
            "aria-label": C,
            "aria-describedby": k,
            children: [
              /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsx("tr", { className: "groupable-datagrid__header-row", role: "row", children: n.map((E) => {
                const O = h?.find(
                  (Y) => Y.key === E.key
                ), P = E.sortable !== !1 && p, X = h?.findIndex(
                  (Y) => Y.key === E.key
                );
                return /* @__PURE__ */ r.jsx(
                  "th",
                  {
                    role: "columnheader",
                    "aria-sort": O ? O.direction === "asc" ? "ascending" : "descending" : void 0,
                    className: ke("groupable-datagrid__header-cell", {
                      "groupable-datagrid__header-cell--sortable": P,
                      "groupable-datagrid__header-cell--sorted": !!O
                    }),
                    onClick: P ? () => D(E.key) : void 0,
                    style: { cursor: P ? "pointer" : void 0 },
                    children: /* @__PURE__ */ r.jsxs("div", { className: "groupable-datagrid__header-content", children: [
                      /* @__PURE__ */ r.jsx("span", { children: E.label }),
                      P && /* @__PURE__ */ r.jsxs("span", { className: "groupable-datagrid__sort-indicator", children: [
                        !O && /* @__PURE__ */ r.jsx(zm, {}),
                        O?.direction === "asc" && /* @__PURE__ */ r.jsx(Bm, {}),
                        O?.direction === "desc" && /* @__PURE__ */ r.jsx(Hm, {}),
                        x && O && X !== void 0 && X >= 0 && /* @__PURE__ */ r.jsx("span", { className: "groupable-datagrid__sort-order", children: X + 1 })
                      ] })
                    ] })
                  },
                  E.key
                );
              }) }) }),
              /* @__PURE__ */ r.jsx("tbody", { role: "rowgroup", children: ne.map((E, O) => F(E, O)) }),
              Z && a?.showSummaryFooter && /* @__PURE__ */ r.jsx("tfoot", { children: /* @__PURE__ */ r.jsx("tr", { className: "groupable-datagrid__summary-row", role: "row", children: /* @__PURE__ */ r.jsxs("td", { colSpan: n.length, children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Total:" }),
                " ",
                Z.getTotalCount(),
                " ",
                "items"
              ] }) }) })
            ]
          }
        ) })
      ]
    }
  );
};
Um.displayName = "GroupableDataGrid";
const Yl = (e) => /* @__PURE__ */ r.jsx(al, { ...e }), N1 = ({
  children: e,
  pageTitle: t,
  pageHeadingProps: n,
  columnWidth: a = bn.TwoThirds,
  mainWrapperSize: o,
  skipLinkProps: s,
  headerProps: i,
  footerProps: l,
  service: c,
  navigation: d,
  search: u,
  account: f,
  organisation: h,
  logo: p,
  className: x,
  ...m
}) => {
  const g = {
    service: c,
    navigation: d,
    search: u,
    account: f,
    organisation: h,
    logo: p,
    ...i
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Dl, { ...s }),
    /* @__PURE__ */ r.jsx(cl, { ...g }),
    /* @__PURE__ */ r.jsx(Yl, { className: x, ...m, children: /* @__PURE__ */ r.jsx(ol, { size: o, children: /* @__PURE__ */ r.jsx(ln, { children: /* @__PURE__ */ r.jsxs(rr, { width: a, children: [
      t && /* @__PURE__ */ r.jsx(Ht, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx(dl, { ...l })
  ] });
}, C1 = ({
  children: e,
  title: t,
  pageHeadingProps: n,
  columnWidth: a = bn.TwoThirds,
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
  ...p
}) => {
  const x = {
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
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(Dl, { ...s }),
    /* @__PURE__ */ r.jsx(cl, { ...x }),
    /* @__PURE__ */ r.jsxs(Yl, { className: h, ...p, children: [
      c && /* @__PURE__ */ r.jsx(nr, { ...c }),
      /* @__PURE__ */ r.jsx(ol, { size: o, children: /* @__PURE__ */ r.jsx(ln, { children: /* @__PURE__ */ r.jsxs(rr, { width: a, children: [
        t && /* @__PURE__ */ r.jsx(Ht, { style: { marginTop: "3rem" }, size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx(dl, { ...l })
  ] });
};
function Wm(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = J.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = J.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return J.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(n, String(o)) : c.delete(n), c.set(a, i ? "1" : "0");
    const d = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", d);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Gm = ({
  className: e
}) => /* @__PURE__ */ r.jsx(
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
), Vm = ({
  className: e
}) => /* @__PURE__ */ r.jsx(
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
), Yr = ({
  text: e = "Next",
  html: t,
  href: n = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ke("nhsuk-back-link", a), c = ke("nhsuk-back-link__link"), d = () => /* @__PURE__ */ r.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ r.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ r.jsx("button", { className: c, type: "button", onClick: s, ...i, children: d() }) : /* @__PURE__ */ r.jsx("a", { className: c, href: n, ...i, children: d() }) });
};
Yr.displayName = "ForwardLink";
const Ym = ({
  show: e,
  label: t,
  contentHeaderLevel: n,
  detailActive: a,
  headerContext: o,
  backLabel: s,
  nextLabel: i,
  onBack: l,
  onForward: c,
  renderContentHeader: d,
  item: u,
  contentSubheader: f,
  tertiaryInlineActive: h
}) => {
  if (!e || !u) return null;
  const p = `h${n}`, x = t ? J.createElement(
    p,
    {
      style: {
        marginLeft: a ? 32 : 0,
        marginRight: a ? 32 : 0
      }
    },
    t
  ) : null, m = a ? /* @__PURE__ */ r.jsx(
    nr,
    {
      element: "button",
      text: s,
      style: { marginRight: 16 },
      onClick: l
    }
  ) : void 0, g = h ? void 0 : /* @__PURE__ */ r.jsx(Yr, { element: "button", text: i, onClick: c });
  if (d)
    return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: d({
      item: u,
      detailActive: a,
      context: o,
      backLink: m,
      defaultHeading: x
    }) });
  const S = u && f ? typeof f == "function" ? f(u) : f : null;
  return /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
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
          m,
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
                x,
                S && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__subheader", children: S })
              ]
            }
          )
        ]
      }
    ),
    g && /* @__PURE__ */ r.jsx("div", { style: { marginLeft: "auto" }, children: g })
  ] }) });
};
function Zm({
  layout: e,
  items: t,
  getId: n,
  selectedId: a,
  isLoading: o,
  emptyState: s,
  renderItemContent: i,
  onSelect: l,
  orientation: c,
  initialFocus: d,
  onFocusChange: u,
  justSelectedId: f,
  listRef: h,
  onKeyDownList: p,
  navigationInstructions: x,
  controlledFocusedIndex: m
}) {
  const [g, S] = J.useState(
    () => d === "first" ? 0 : -1
  ), N = J.useRef(0);
  J.useEffect(() => {
    if (typeof m == "number" || g < 0 || !h?.current) return;
    const j = Array.from(
      h.current.querySelectorAll("[data-nav-item]")
    )[g];
    if (j) {
      document.activeElement !== j && j.focus(), N.current = g;
      const b = t[g];
      u?.(b ? n(b) : void 0, b, g);
    }
  }, [m, g, t, u, n, h]);
  const C = (_) => {
    if (p) return p(_);
    const j = c === "vertical" ? "ArrowDown" : "ArrowRight", b = c === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (_.key === j)
      _.preventDefault(), S((y) => Math.min(t.length - 1, y + 1));
    else if (_.key === b)
      _.preventDefault(), S((y) => Math.max(0, y - 1));
    else if (_.key === "Home")
      _.preventDefault(), S(0);
    else if (_.key === "End")
      _.preventDefault(), S(t.length - 1);
    else if (_.key === "Enter" || _.key === " ") {
      _.preventDefault();
      const y = t[g];
      y && !y.disabled && l(n(y), y, g);
    }
  };
  if (e === "cards")
    return /* @__PURE__ */ r.jsxs(
      "ul",
      {
        className: "nhs-navigation-split-view__cards",
        role: "listbox",
        "aria-activedescendant": a ? String(a) : void 0,
        children: [
          t.map((_, j) => {
            const b = n(_), y = b === a;
            return /* @__PURE__ */ r.jsx(
              "li",
              {
                className: "nhs-navigation-split-view__card-item",
                role: "option",
                "aria-selected": y,
                children: /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    id: String(b),
                    type: "button",
                    className: "nhs-navigation-split-view__card",
                    "data-selected": y || void 0,
                    "data-disabled": _.disabled || void 0,
                    disabled: _.disabled,
                    onClick: () => !_.disabled && l(b, _, j),
                    children: [
                      _.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: _.icon }),
                      /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: _.label }),
                      _.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: _.description }),
                      i?.(_),
                      _.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: _.badge })
                    ]
                  }
                )
              },
              String(b)
            );
          }),
          t.length === 0 && !o && /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__card-item",
              "aria-disabled": "true",
              children: s || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    );
  const k = "nsv-nav-instructions", v = J.useMemo(() => J.memo(
    ({
      item: _,
      idx: j,
      selected: b,
      focused: y
    }) => {
      const w = n(_), T = _.disabled ? { "aria-disabled": !0, tabIndex: -1 } : {
        tabIndex: y ? 0 : -1,
        onClick: () => {
          N.current = j, l(w, _, j);
        },
        onKeyDown: (M) => {
          (M.key === "Enter" || M.key === " ") && (M.preventDefault(), N.current = j, l(w, _, j));
        }
      };
      return /* @__PURE__ */ r.jsxs(
        "li",
        {
          id: String(w),
          "data-nav-item": !0,
          className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
          role: "option",
          "aria-selected": b,
          "aria-current": b ? "true" : void 0,
          "data-selected": b || void 0,
          "data-disabled": _.disabled || void 0,
          ...T,
          children: [
            _.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: _.icon }),
            /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
              /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: _.label }),
              _.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: _.description }),
              i?.(_)
            ] }),
            _.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: _.badge })
          ]
        }
      );
    }
  ), [n, l, i]);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "ul",
      {
        ref: h,
        className: "nhs-navigation-split-view__list",
        onKeyDown: C,
        role: "listbox",
        "aria-label": "Navigation items",
        "aria-describedby": k,
        "aria-activedescendant": a ? String(a) : void 0,
        children: [
          t.map((_, j) => /* @__PURE__ */ r.jsx(
            v,
            {
              item: _,
              idx: j,
              selected: n(_) === a,
              focused: /* @__PURE__ */ (() => {
                const b = typeof m == "number" ? m : g;
                return j === b || b === -1 && j === 0 && d === "first";
              })(),
              "data-just-selected": n(_) === f ? "true" : void 0
            },
            String(n(_))
          )),
          t.length === 0 && !o && /* @__PURE__ */ r.jsx(
            "li",
            {
              className: "nhs-navigation-split-view__list-item",
              "aria-disabled": "true",
              children: s || /* @__PURE__ */ r.jsx("div", { style: { padding: 16 }, children: "No items" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: k,
        style: {
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)"
        },
        children: x || "Use arrow keys to navigate, Enter to open."
      }
    )
  ] });
}
const Cn = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function ki() {
  return typeof window > "u" ? Cn.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function gs() {
  const [e, t] = J.useState(ki());
  J.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(ki());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const n = J.useCallback((s) => e >= Cn[s], [e]), a = J.useCallback((s) => e < Cn[s], [e]), o = J.useCallback((s, i) => e >= Cn[s] && e < Cn[i], [e]);
  return {
    width: e,
    up: n,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Cn
  };
}
function j1(e) {
  const { width: t, values: n } = gs();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function qm(e, t, n) {
  const { up: a } = gs(), [o, s] = J.useState(!1);
  J.useEffect(() => s(!0), []);
  const i = o && a("medium"), l = o && a("xlarge");
  let c;
  return e ? c = e : i ? c = "two-column" : c = "list", !e && t && n && l && (c = "three-column"), { effectiveLayout: c, hydrated: o, isAtLeastMedium: i, isAtLeastXlarge: l };
}
function Jm(e) {
  const {
    enabled: t,
    isAtLeastMedium: n,
    initiallyCollapsed: a,
    persist: o,
    storageKey: s,
    urlParam: i,
    onChange: l
  } = e, c = J.useMemo(() => {
    if (o && (o === "url" || o === "both") && typeof window < "u") {
      const p = new URLSearchParams(window.location.search).get(i);
      if (p === "1") return !0;
      if (p === "0") return !1;
    }
    if (o && (o === "localStorage" || o === "both") && typeof window < "u")
      try {
        const h = window.localStorage.getItem(s);
        if (h === "1") return !0;
        if (h === "0") return !1;
      } catch {
      }
    return a;
  }, [o, a, s, i]), [d, u] = J.useState(c);
  J.useEffect(() => {
    l?.(d);
  }, [d, l]);
  const f = J.useCallback(() => {
    t && n && u((h) => !h);
  }, [t, n]);
  return J.useEffect(() => {
    if (!(!o || typeof window > "u")) {
      if (o === "localStorage" || o === "both")
        try {
          window.localStorage.setItem(s, d ? "1" : "0");
        } catch {
        }
      if (o === "url" || o === "both") {
        const h = new URLSearchParams(window.location.search);
        h.set(i, d ? "1" : "0");
        const p = `${window.location.pathname}?${h.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", p);
      }
    }
  }, [d, o, s, i]), { collapsed: d, toggle: f };
}
function Xm(e) {
  const {
    items: t,
    selectedId: n,
    defaultSelectedId: a,
    onSelectionChange: o,
    renderItemContent: s,
    renderContent: i,
    renderSecondaryContent: l,
    forceLayout: c,
    animated: d = !0,
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: h = !1,
    emptyState: p,
    a11y: x,
    className: m,
    getId: g = (De) => De.id,
    orientation: S = "vertical",
    autoEnableThirdColumn: N = !0,
    onDrillChange: C,
    navigationInstructions: k = "Use arrow keys to navigate, Enter to open.",
    initialFocus: v = "first",
    skipFocusOnSelect: _ = !1,
    skipAnnouncements: j = !1,
    onFocusChange: b,
    syncUrl: y = !1,
    urlParamSelected: w = "nsv",
    urlParamDrill: T = "nsvDrill",
    urlSyncDebounceMs: M = 0,
    lazySecondary: A = !1,
    navFooter: I,
    collapsibleNav: D = !1,
    navInitiallyCollapsed: $ = !1,
    onNavCollapseChange: H,
    collapseToggleLabelShow: Z = "Show navigation",
    collapseToggleLabelHide: K = "Hide navigation",
    collapseToggleIconShow: ne,
    collapseToggleIconHide: B,
    persistNavCollapsed: F,
    navCollapsedStorageKey: L = "nsvCollapsed",
    navCollapsedUrlParam: G = "nsvCollapsed",
    autoContentHeader: E,
    contentHeaderLevel: O = 2,
    renderContentHeader: P,
    contentSubheader: X,
    secondarySubheader: Y
  } = e, { effectiveLayout: Q, hydrated: de, isAtLeastMedium: V } = qm(
    c,
    N,
    !!l
  ), ae = Wm({
    enabled: y,
    paramSelected: w,
    paramDrill: T
  }), [le, be] = J.useState(
    () => ae.selectedId !== void 0 ? ae.selectedId : a
  ), pe = n !== void 0 ? n : le, Ie = t.find((De) => g(De) === pe), [Ve, Te] = J.useState(
    void 0
  );
  J.useEffect(() => {
    if (pe === void 0) return;
    Te(pe);
    const De = setTimeout(() => Te(void 0), 220);
    return () => clearTimeout(De);
  }, [pe]);
  const Le = J.useRef(null), _e = J.useRef(null), R = J.useRef(null), q = J.useRef(null), [se, he] = J.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [me, z] = J.useState(() => "nav"), [W, oe] = J.useState(0), ee = () => [
    q.current,
    _e.current,
    R.current
  ].filter(Boolean), re = (De) => {
    const ze = ee(), Je = Math.max(0, Math.min(De, ze.length - 1));
    ue(ze[Je]), oe(Je);
  }, ce = J.useCallback(
    (De) => De ? Array.from(De.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (Je) => !Je.hasAttribute("disabled") && Je.tabIndex !== -1
    ) : [],
    []
  ), ue = J.useCallback((De) => {
    if (De)
      try {
        De.focus({ preventScroll: !0 });
      } catch {
        De.focus();
      }
  }, []), ve = J.useCallback(
    (De) => {
      const ze = ce(_e.current);
      if (!ze.length) {
        ue(_e.current);
        return;
      }
      const Je = Math.max(0, Math.min(De, ze.length - 1)), rt = ze[Je];
      rt.focus(), setTimeout(() => {
        document.activeElement !== rt && (rt.focus(), setTimeout(() => {
          document.activeElement !== rt && rt.click();
        }, 10));
      }, 10), he((dt) => ({ ...dt, contentIndex: Je }));
      const St = (dt) => {
        dt.key === "Escape" && (dt.preventDefault(), dt.stopPropagation(), ue(_e.current), rt.removeEventListener("keydown", St));
      };
      ze.forEach((dt) => {
        const pt = dt._escapeHandler;
        pt && dt.removeEventListener("keydown", pt);
      }), rt._escapeHandler = St, rt.addEventListener("keydown", St);
    },
    [ce]
  ), Ne = J.useCallback(
    (De) => {
      const ze = ce(R.current);
      if (!ze.length) {
        ue(R.current);
        return;
      }
      const Je = Math.max(0, Math.min(De, ze.length - 1)), rt = ze[Je];
      rt.focus(), setTimeout(() => {
        document.activeElement !== rt && (rt.focus(), setTimeout(() => {
          document.activeElement !== rt && rt.click();
        }, 10));
      }, 10), he((dt) => ({ ...dt, secondaryIndex: Je }));
      const St = (dt) => {
        dt.key === "Escape" && (dt.preventDefault(), dt.stopPropagation(), ue(R.current), rt.removeEventListener("keydown", St));
      };
      ze.forEach((dt) => {
        const pt = dt._escapeHandler;
        pt && dt.removeEventListener("keydown", pt);
      }), rt._escapeHandler = St, rt.addEventListener("keydown", St);
    },
    [ce]
  ), He = (De) => {
    if (De.defaultPrevented) return;
    const ze = De.key, Je = De.target, rt = !!we.current && we.current.contains(Je), St = !!_e.current && _e.current.contains(Je), dt = !!R.current && R.current.contains(Je), pt = !!R.current, vr = Je === q.current || Je === _e.current || Je === R.current, Ba = Ye && (Q === "list" || Q === "cards"), wr = St && !!Je.closest(".nhs-navigation-split-view__header");
    if (me === "containers" && vr) {
      if (ze === "ArrowRight") {
        De.preventDefault();
        const et = ee(), ut = Math.min(et.length - 1, W + 1);
        re(ut);
        return;
      }
      if (ze === "ArrowLeft") {
        De.preventDefault();
        const et = Math.max(0, W - 1);
        re(et);
        return;
      }
      if (ze === "Home") {
        De.preventDefault(), re(0);
        return;
      }
      if (ze === "End") {
        De.preventDefault(), re(ee().length - 1);
        return;
      }
      if (ze === "Enter" || ze === " ") {
        if (De.preventDefault(), Je === q.current) {
          if (z("nav"), we.current) {
            const et = Array.from(
              we.current.querySelectorAll("[data-nav-item]")
            );
            (et[je >= 0 ? je : 0] || et[0])?.focus();
          }
        } else Je === _e.current ? (z("content"), ve(se.contentIndex)) : Je === R.current && (z("secondary"), Ne(se.secondaryIndex));
        return;
      }
      return;
    }
    if (ze === "Escape") {
      if (me === "content" || me === "secondary") {
        if (St || dt) {
          if (De.preventDefault(), z("nav"), we.current) {
            const ut = Array.from(
              we.current.querySelectorAll("[data-nav-item]")
            )[je >= 0 ? je : 0];
            setTimeout(() => ut?.focus(), 10);
          }
        } else if ((Je === _e.current || Je === R.current) && (De.preventDefault(), z("nav"), we.current)) {
          const ut = Array.from(
            we.current.querySelectorAll("[data-nav-item]")
          )[je >= 0 ? je : 0];
          setTimeout(() => ut?.focus(), 10);
        }
      }
      return;
    }
    if (ze === "Enter" || ze === " ") {
      if (Je.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (Je === _e.current && me === "content") {
        De.preventDefault(), De.stopPropagation(), ce(_e.current).length > 0 && setTimeout(() => {
          ve(se.contentIndex);
        }, 50);
        return;
      }
      if (Je === R.current && me === "secondary") {
        De.preventDefault(), De.stopPropagation(), ce(
          R.current
        ).length > 0 && setTimeout(() => {
          Ne(se.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Ba && wr && !vr && (ze === "ArrowRight" || ze === "ArrowLeft")) {
      const et = ce(_e.current).filter(
        (ut) => ut.closest(".nhs-navigation-split-view__header")
      );
      if (et.length > 1) {
        const ut = et.indexOf(Je);
        if (ut >= 0) {
          const js = (ut + (ze === "ArrowRight" ? 1 : -1) + et.length) % et.length;
          De.preventDefault(), et[js].focus();
          return;
        }
      }
    }
    if (ze === "ArrowRight") {
      if (rt || me === "nav") {
        De.preventDefault(), z("content"), setTimeout(() => ue(_e.current), 10);
        return;
      }
      if (St || me === "content") {
        pt && (De.preventDefault(), z("secondary"), setTimeout(() => ue(R.current), 10));
        return;
      }
    }
    if (ze === "ArrowLeft") {
      if (dt || me === "secondary") {
        De.preventDefault(), z("content"), setTimeout(() => ue(_e.current), 10);
        return;
      }
      if (St || me === "content") {
        if (De.preventDefault(), z("nav"), we.current) {
          const ut = Array.from(
            we.current.querySelectorAll("[data-nav-item]")
          )[je >= 0 ? je : 0];
          setTimeout(() => ue(ut), 10);
        }
        return;
      }
    }
    if (ze === "Home" && !rt && (De.preventDefault(), z("nav"), we.current)) {
      const et = Array.from(
        we.current.querySelectorAll("[data-nav-item]")
      ), ut = et[je >= 0 ? je : 0] || et[0];
      setTimeout(() => ue(ut), 10);
    }
    if (ze === "End") {
      const et = pt ? R.current : _e.current;
      et && !et.contains(Je) && (De.preventDefault(), pt ? (z("secondary"), setTimeout(() => ue(R.current), 10)) : (z("content"), setTimeout(() => ue(_e.current), 10)));
    }
    if (ze === "ArrowDown" || ze === "ArrowUp") {
      if (Je === _e.current && ze === "ArrowDown") {
        De.preventDefault(), ce(_e.current).length > 0 && ve(0);
        return;
      }
      if (Je === R.current && ze === "ArrowDown") {
        De.preventDefault(), ce(
          R.current
        ).length > 0 && Ne(0);
        return;
      }
      if (St) {
        const et = ce(_e.current);
        if (et.length) {
          De.preventDefault();
          const ut = ze === "ArrowDown" ? 1 : -1, At = (se.contentIndex + ut + et.length) % et.length;
          ve(At);
        }
      } else if (dt) {
        const et = ce(R.current);
        if (et.length) {
          De.preventDefault();
          const ut = ze === "ArrowDown" ? 1 : -1, At = (se.secondaryIndex + ut + et.length) % et.length;
          Ne(At);
        }
      }
    }
  }, Ye = !!Ie && (Q === "list" || Q === "cards"), lt = J.useMemo(() => E === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : E === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : E === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: E.mobile !== void 0 ? E.mobile : !0,
    tablet: E.tablet || !1,
    desktop: E.desktop || !1
  }, [E]), Qe = de && V && Q !== "three-column", ie = de && Q === "three-column", Ae = !!l, U = Q === "three-column", [te, xe] = J.useState(!1);
  J.useEffect(() => {
    U && te && xe(!1);
  }, [U, te]), J.useEffect(() => {
    te && !U && (z("secondary"), oe(2), setTimeout(() => {
      ue(R.current);
    }, 50));
  }, [te, U]), J.useEffect(() => {
    !te && !U && me === "secondary" && (z("content"), oe(1), setTimeout(() => {
      ue(_e.current);
    }, 50));
  }, [te, U, me]);
  const ye = !!Ie && (Ye && lt.mobile || !Ye && Qe && lt.tablet || !Ye && ie && lt.desktop) || Ae && !U, Se = Ye ? "mobile" : Qe ? "tablet" : "desktop";
  J.useEffect(() => {
    if (!y) return;
    const De = Q === "three-column";
    let ze = !1;
    const Je = () => {
      ze || (ae.selectedId !== pe && ae.setSelectedId(pe), ae.drilledIn !== De && ae.setDrilledIn(De));
    };
    if (M && M > 0) {
      const rt = setTimeout(Je, M);
      return () => {
        ze = !0, clearTimeout(rt);
      };
    } else
      Je();
  }, [y, ae, pe, Q, M]), J.useEffect(() => {
    if (!y) return;
    const De = () => {
      const ze = new URLSearchParams(window.location.search), Je = ze.get(w);
      ze.get(T), be(Je === null ? void 0 : Je);
    };
    return window.addEventListener("popstate", De), () => window.removeEventListener("popstate", De);
  }, [
    y,
    w,
    T,
    c,
    l
  ]);
  const Be = J.useRef(0), Ce = J.useRef(
    null
  ), Me = J.useCallback(
    (De, ze) => {
      De !== pe && (n === void 0 && be(De), o?.(De, ze));
    },
    [n, o, pe]
  );
  J.useEffect(() => {
    if (!_ && Ye && _e.current) {
      const De = setTimeout(() => ue(_e.current), 30);
      return () => clearTimeout(De);
    }
  }, [Ye, pe, _]);
  const we = J.useRef(null), [je, Ke] = J.useState(
    () => v === "first" ? 0 : -1
  );
  J.useEffect(() => {
    if (je < 0 || !we.current) return;
    const ze = Array.from(
      we.current.querySelectorAll("[data-nav-item]")
    )[je];
    if (ze) {
      document.activeElement !== ze && ue(ze), Be.current = je;
      const Je = t[je];
      b?.(
        Je ? g(Je) : void 0,
        Je,
        je
      );
    }
  }, [je, t, b, g]);
  const ot = (De) => {
    const ze = S === "vertical" ? "ArrowDown" : "ArrowRight", Je = S === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (De.key === "ArrowRight" && S === "vertical") {
      De.preventDefault(), te ? (z("secondary"), setTimeout(() => {
        ue(R.current);
      }, 10)) : (z("content"), setTimeout(() => {
        ue(_e.current);
      }, 10));
      return;
    }
    if (De.key === ze)
      De.preventDefault(), Ke((rt) => Math.min(t.length - 1, rt + 1));
    else if (De.key === Je)
      De.preventDefault(), Ke((rt) => Math.max(0, rt - 1));
    else if (De.key === "Home")
      De.preventDefault(), Ke(0);
    else if (De.key === "End")
      De.preventDefault(), Ke(t.length - 1);
    else if (De.key === "Enter" || De.key === " ") {
      De.preventDefault();
      const rt = t[je];
      rt && !rt.disabled && Me(g(rt), rt);
    } else if (De.key.length === 1 && /[a-z0-9]/i.test(De.key)) {
      Ce.current || (Ce.current = { buffer: "", last: 0 });
      const rt = Date.now(), St = 700, dt = De.key.toLowerCase();
      rt - Ce.current.last > St ? Ce.current.buffer = dt : Ce.current.buffer += dt, Ce.current.last = rt;
      let pt = Ce.current.buffer;
      const vr = pt.split("").every((At) => At === pt[0]), Ba = t.map(
        (At) => String(At.label || "").toLowerCase()
      );
      let wr = 0;
      je >= 0 && (wr = (je + 1) % t.length);
      let et;
      const ut = (At, js) => {
        const Ms = t.length;
        for (let Ha = 0; Ha < Ms; Ha++) {
          const za = (wr + Ha) % Ms;
          if (!t[za].disabled && Ba[za].startsWith(At))
            return za;
        }
      };
      vr && pt.length > 1 ? et = ut(pt[0]) : (et = ut(pt), et === void 0 && pt.length > 1 && (et = ut(pt[pt.length - 1]), et !== void 0 && Ce.current && (Ce.current.buffer = pt[pt.length - 1]))), et !== void 0 && Ke(et);
    }
  }, { collapsed: $e, toggle: Fe } = Jm({
    enabled: D,
    isAtLeastMedium: V,
    initiallyCollapsed: $,
    persist: F,
    storageKey: L,
    urlParam: G,
    onChange: H
  }), Ue = [
    "nhs-navigation-split-view",
    d ? "nhs-navigation-split-view--animated" : "",
    Ye ? "nhs-navigation-split-view--detail-active" : "",
    Q === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    D && V && $e ? "nhs-navigation-split-view--nav-collapsed" : "",
    m
  ].filter(Boolean).join(" "), $t = J.useRef(null);
  J.useEffect(() => {
    if (!j && $t.current) {
      const De = Ie ? `Selected ${Ie.label}` : "Selection cleared";
      $t.current.textContent = De;
    }
  }, [Ie, j]), J.useEffect(() => {
    if (!Ye && pe == null && we.current) {
      const ze = we.current.querySelectorAll("[data-nav-item]")[Be.current];
      ue(ze);
    }
  }, [Ye, pe]);
  const Dt = Q === "three-column", [Ra, vd] = J.useState(!1);
  J.useEffect(() => {
    Dt && !Ra && vd(!0);
  }, [Dt, Ra]);
  const Cs = J.useRef(Dt);
  return J.useEffect(() => {
    Cs.current !== Dt && (C?.(Dt), Cs.current = Dt);
  }, [Dt, C]), /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: Le,
      className: Ue,
      "aria-label": x?.rootLabel,
      "data-layout": Q,
      onKeyDown: He,
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ r.jsxs(
          "div",
          {
            className: "nhs-navigation-split-view__panes",
            "data-active-detail": Ye || void 0,
            style: { transform: Ye ? "translateX(-100%)" : void 0 },
            children: [
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: q,
                  className: "nhs-navigation-split-view__nav-pane",
                  role: "navigation",
                  "aria-label": x?.navigationLabel || "Items",
                  "data-collapsed": $e || void 0,
                  tabIndex: 0,
                  children: [
                    D && V && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Fe,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": $e ? Z : K,
                        title: $e ? Z : K,
                        children: $e ? ne || /* @__PURE__ */ r.jsx(Vm, {}) : B || /* @__PURE__ */ r.jsx(Gm, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: /* @__PURE__ */ r.jsx(
                      Zm,
                      {
                        layout: Q === "cards" ? "cards" : "list",
                        items: t,
                        getId: g,
                        selectedId: pe,
                        isLoading: h,
                        emptyState: p,
                        renderItemContent: s,
                        onSelect: (De, ze, Je) => {
                          Be.current = Je, Me(De, ze);
                        },
                        orientation: S,
                        initialFocus: v,
                        onFocusChange: b,
                        justSelectedId: Ve,
                        listRef: we,
                        onKeyDownList: ot,
                        navigationInstructions: k,
                        controlledFocusedIndex: je
                      }
                    ) }),
                    I && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: I
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: _e,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": x?.contentLabel || "Content",
                  "data-has-selection": !!Ie || void 0,
                  tabIndex: 0,
                  style: {
                    display: te && !U ? "none" : void 0
                  },
                  children: [
                    ye && /* @__PURE__ */ r.jsx(
                      Ym,
                      {
                        show: ye,
                        label: Ie ? Ie.label : void 0,
                        contentHeaderLevel: O,
                        detailActive: Ye,
                        headerContext: Se,
                        backLabel: u,
                        nextLabel: f,
                        onBack: () => Me(void 0, void 0),
                        onForward: () => xe(!0),
                        renderContentHeader: P,
                        item: Ie,
                        contentSubheader: X,
                        tertiaryInlineActive: te
                      }
                    ),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Ie)
                      }
                    )
                  ]
                }
              ),
              Q === "three-column" && (!A || Ra) || te && !U ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: R,
                  className: "nhs-navigation-split-view__secondary-pane",
                  role: "region",
                  "aria-label": x?.secondaryContentLabel || "Secondary",
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
                        te && !U && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ r.jsx(
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
                                  /* @__PURE__ */ r.jsx(
                                    nr,
                                    {
                                      element: "button",
                                      text: u,
                                      style: { marginRight: 16 },
                                      onClick: () => xe(!1)
                                    }
                                  ),
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Ie && typeof Ie == "object" && "label" in Ie ? Ie.label : String(Ie) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Ie && Y && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof Y == "function" ? Y(Ie) : Y
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Ie) })
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
            ref: $t,
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
            children: Dt ? "Expanded to three column layout" : "In two column layout"
          }
        )
      ] })
    }
  );
}
Xm.displayName = "NavigationSplitView";
function Km({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderCard: a,
  className: o,
  ariaLabel: s = "Steps"
}) {
  const i = J.useRef(null), l = (c) => {
    if (e?.length)
      if (c.key === "ArrowLeft" || c.key === "ArrowUp") {
        c.preventDefault();
        const d = Math.max(0, t - 1);
        d !== t && n?.(d);
      } else if (c.key === "ArrowRight" || c.key === "ArrowDown") {
        c.preventDefault();
        const d = Math.min(e.length - 1, t + 1);
        d !== t && n?.(d);
      } else c.key === "Home" ? (c.preventDefault(), n?.(0)) : c.key === "End" && (c.preventDefault(), n?.(e.length - 1));
  };
  return /* @__PURE__ */ r.jsx("div", { className: o, "aria-label": s, role: "region", children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsfdp-cards-viewport",
      role: "group",
      "aria-roledescription": "steps",
      tabIndex: 0,
      onKeyDown: l,
      children: /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: i,
          className: "nhsfdp-cards-track",
          style: { transform: `translate3d(-${Math.max(0, t) * 100}%, 0, 0)` },
          children: e.map((c, d) => {
            const u = d === t;
            return /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "nhsfdp-pane mobile-pane" + (u ? " is-current" : ""),
                role: "group",
                "aria-roledescription": "step",
                "aria-label": (c.label ?? `Step ${d + 1}`).toString(),
                "aria-hidden": !u,
                onClick: (f) => {
                  if (f.defaultPrevented) return;
                  const h = f.target;
                  h && h.closest(
                    'button, a, input, select, textarea, [role="button"], [role="link"], [contenteditable="true"], [data-prevent-card-click]'
                  ) || n?.(d);
                },
                children: a(c, d, u)
              },
              d
            );
          })
        }
      )
    }
  ) });
}
function Qm({
  steps: e,
  currentIndex: t,
  onNavigate: n,
  renderLabel: a,
  ariaLabel: o = "Breadcrumbs",
  className: s,
  style: i
}) {
  const l = e.map((d, u) => {
    const f = u === t, h = u < t, p = a ? a(d, u) : d.label ?? `Step ${u + 1}`;
    return {
      text: String(p),
      href: h ? "#" : void 0,
      active: f,
      attributes: h ? { "data-index": String(u) } : void 0
    };
  }), c = (d) => {
    const f = d.target.closest("a.nhsuk-breadcrumb__link, a.nhsuk-breadcrumb__backlink");
    if (!f) return;
    if (f.classList.contains("nhsuk-breadcrumb__backlink")) {
      d.preventDefault();
      const p = Math.max(0, t - 1);
      p !== t && n?.(p);
      return;
    }
    const h = f.getAttribute("data-index");
    if (h != null) {
      d.preventDefault();
      const p = parseInt(h, 10);
      Number.isNaN(p) || n?.(p);
    }
  };
  return /* @__PURE__ */ r.jsx("div", { style: i, onClick: c, children: /* @__PURE__ */ r.jsx(Il, { labelText: o, classes: s, items: l }) });
}
function eg(e) {
  const { up: t } = gs(), [n, a] = J.useState(!1);
  J.useEffect(() => a(!0), []);
  const o = n && t("medium") && !t("xlarge"), s = n && t("xlarge"), i = s ? "desktop" : o ? "tablet" : "mobile", l = J.useMemo(() => {
    if (!e.step || !e.layoutForStep)
      return i === "mobile" ? { panes: 1, showPrimaryNav: !1, showSecondaryNav: !1 } : i === "tablet" ? { panes: 2, showPrimaryNav: !0, showSecondaryNav: !1 } : { panes: 3, showPrimaryNav: !0, showSecondaryNav: !0 };
    try {
      return e.layoutForStep({
        step: e.step,
        index: e.index,
        breakpoint: i
      }) || {};
    } catch {
      return {};
    }
  }, [e.step, e.index, e.layoutForStep, i]);
  return { hydrated: n, breakpoint: i, isTablet: o, isDesktop: s, paneConfig: l };
}
function M1(e) {
  const {
    steps: t,
    currentStepId: n,
    defaultStepId: a,
    onStepChange: o,
    layoutForStep: s,
    renderStepCard: i,
    renderStepContent: l,
    renderSecondaryContent: c,
    renderSecondaryNav: d,
    renderBreadcrumbs: u,
    className: f,
    getId: h = (ie) => ie.id,
    enableTabletGrid: p = !1,
    isStepComplete: x,
    showMobileControls: m,
    currentSectionId: g,
    defaultSectionIdForStep: S,
    onSectionChange: N
  } = e, C = typeof window < "u" && !!window.__WSV_DEBUG_FOCUS || !1, k = (...ie) => {
    C && console.log("[WorkflowSplitView]", ...ie);
  }, v = () => {
    if (typeof document > "u") return {};
    const ie = document.activeElement, Ae = ie?.getAttribute?.("role");
    return {
      activeTag: ie?.tagName,
      activeId: ie?.id,
      activeRole: Ae,
      activeClasses: ie?.className
    };
  }, [_, j] = Oe(
    a ?? (t[0] ? h(t[0]) : void 0)
  ), b = n ?? _, y = t.findIndex((ie) => h(ie) === b), w = y >= 0 ? t[y] : t[0], [T, M] = Oe({}), A = (ie) => ie ? String(h(ie)) : "", I = fe((ie) => {
    if (!ie) return;
    try {
      const U = S?.(ie);
      if (U !== void 0) return U;
    } catch {
    }
    const Ae = ie.sections && ie.sections[0];
    return Ae ? Ae.id : void 0;
  }, [S]), D = g ?? T[A(w)] ?? I(w), $ = w && w.sections ? w.sections : void 0, H = $?.find((ie) => ie.id === D), Z = (ie) => {
    if (w) {
      const Ae = A(w);
      g === void 0 && M((U) => ({ ...U, [Ae]: ie })), N?.(ie, $?.find((U) => U.id === ie), w);
    }
  }, K = (ie) => {
    k("navigateTo", String(ie)), n === void 0 && j(ie);
    const Ae = t.find((U) => h(U) === ie);
    Ae && o && o(ie, Ae);
  }, ne = u ? u({ steps: t, current: w, onNavigate: K }) : /* @__PURE__ */ r.jsx(
    Qm,
    {
      steps: t,
      currentIndex: Math.max(0, y),
      onNavigate: (ie) => {
        const Ae = t[ie];
        Ae && K(h(Ae));
      }
    }
  ), { hydrated: B, breakpoint: F, paneConfig: L } = eg({
    step: w,
    index: y,
    layoutForStep: s
  }), G = n !== void 0 || a !== void 0 && t.length > 0 && t[0] && a !== h(t[0]), E = Ze(null), O = Ze(null), P = Ze(null), X = Ze(null), Y = Ze(null), Q = Ze(0), de = Ze(!1), V = Ze(!1), ae = Ze(null), [le, be] = Oe("nav"), pe = Ze("nav");
  nt(() => {
    pe.current = le, le !== "nav" && R(!1), le !== "content" && se(!1), le !== "secondary" && me(!1);
  }, [le]);
  const [Ie, Ve] = Oe(0), [Te, Le] = Oe(
    () => Math.max(0, y)
  ), [_e, R] = Oe(!1), [q, se] = Oe(!1), [he, me] = Oe(!1), z = fe((ie) => {
    if (ie) {
      try {
        ie.focus({ preventScroll: !0 });
      } catch {
        ie.focus();
      }
      k("focusEl", { to: ie.tagName, id: ie.id, class: ie.className });
    }
  }, []), W = fe(() => {
    const ie = () => P.current;
    let Ae = 0;
    const U = () => {
      const te = ie();
      te && document.activeElement !== te && z(te), Ae += 1, Ae < 6 && document.activeElement !== ie() && setTimeout(U, 0);
    };
    k("focusContentSoon:start", { attempts: Ae }), U(), typeof queueMicrotask == "function" && queueMicrotask(U), requestAnimationFrame(U);
  }, [z]), oe = fe((ie) => ie ? Array.from(ie.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
    (U) => !U.hasAttribute("disabled") && U.tabIndex !== -1
  ) : [], []), ee = () => [
    O.current,
    P.current,
    X.current
  ].filter(Boolean), re = (ie, Ae) => {
    if (!ie) return;
    const U = typeof document < "u" ? document.activeElement : null;
    if (U && ie.contains(U))
      try {
        U.blur(), k("blurActiveIfInside", { label: Ae, root: ie.getAttribute("aria-label") || ie.tagName });
      } catch {
      }
  }, ce = () => {
    const ie = typeof document < "u" ? document.activeElement : null;
    if (ie && O.current && O.current.contains(ie))
      try {
        ie.blur(), k("blurActiveIfInNav: blurred active element inside nav");
      } catch {
      }
  }, ue = (ie) => {
    const Ae = ee(), U = Math.max(0, Math.min(ie, Ae.length - 1));
    k("focusContainerByIndex", { idx: ie, clamped: U }), z(Ae[U]), Ve(U);
  }, ve = fe(
    (ie) => {
      let Ae = 0;
      const U = ie ?? Te, te = () => {
        const ge = Y.current;
        if (!ge) return null;
        const ye = Array.from(ge.querySelectorAll("[data-nav-item]"));
        return ye[U] || ye[0] || null;
      }, xe = () => {
        if (pe.current !== "nav") {
          k("focusNavItemSoon: abort (mode changed)", { mode: pe.current });
          return;
        }
        const ge = te();
        ge && document.activeElement !== ge && z(ge), Ae += 1, Ae < 6 && document.activeElement !== ge && setTimeout(xe, 0);
      };
      k("focusNavItemSoon:start", { index: U, ...v() }), xe(), typeof queueMicrotask == "function" && queueMicrotask(xe), requestAnimationFrame(xe);
    },
    [z, Te]
  );
  nt(() => {
    if (!B) return;
    F === "desktop" || p && F === "tablet" ? G ? (be("nav"), Ve(0), k("init: grid preselected → mode=nav", { containerIndex: 0 })) : (be("containers"), Ve(0), k("init: grid default → mode=containers", { containerIndex: 0 })) : (be("nav"), k("init: non-grid → mode=nav"));
  }, [B, F, G, p]), nt(() => () => {
    ae.current != null && (clearTimeout(ae.current), ae.current = null, k("cleanup: cleared nav bootstrap timeout"));
  }, []), nt(() => {
    const ie = Math.max(0, y);
    Le(ie), k("sync navFocusedIndex with currentIndex", { currentIndex: y, navFocusedIndex: ie });
  }, [y]), nt(() => {
    k("paneFocusMode →", le, v());
  }, [le]);
  const Ne = (ie) => {
    if (!(B && (F === "desktop" || p && F === "tablet"))) return;
    const U = ie.key, te = ie.target, xe = te.tagName.toLowerCase(), ge = xe === "input" || xe === "textarea" || xe === "select", ye = te.getAttribute("role"), Se = ye === "textbox" || ye === "searchbox" || ye === "combobox", Be = te.getAttribute("contenteditable"), Ce = ge || Se || Be && Be !== "false";
    if (k("onRootKeyDown", { key: U, tag: xe, role: ye, isEditable: Ce, paneFocusMode: le, containerIndex: Ie, ...v() }), Ce && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(U))
      return;
    const Me = !!Y.current && Y.current.contains(te), we = !!P.current && P.current.contains(te), je = !!X.current && X.current.contains(te), Ke = te === O.current || te === P.current || te === X.current, ot = !!X.current;
    if (Ke) {
      if (U === "ArrowLeft" && te === P.current) {
        ie.preventDefault(), k("container: ArrowLeft on content container → nav item"), be("nav"), re(P.current, "from-content"), Q.current = Te, ve(Te);
        return;
      }
      if (U === "ArrowRight" && te === P.current && ot) {
        ie.preventDefault(), k("container: ArrowRight on content container → secondary"), be("secondary"), re(P.current, "from-content"), se(!1), setTimeout(() => z(X.current), 10);
        return;
      }
      if (U === "ArrowRight" && te === O.current) {
        ie.preventDefault(), k("container: ArrowRight on nav container → content"), be("content"), re(O.current, "from-nav"), R(!1), W();
        return;
      }
      if (U === "ArrowLeft" && te === X.current) {
        ie.preventDefault(), k("container: ArrowLeft on secondary container → content"), be("content"), re(X.current, "from-secondary"), me(!1), W();
        return;
      }
      if (U === "ArrowRight") {
        ie.preventDefault(), k("container: ArrowRight → next container"), re(te, "container-roving"), te === O.current && R(!1), te === P.current && se(!1), te === X.current && me(!1), ue(Ie + 1);
        return;
      }
      if (U === "ArrowLeft") {
        ie.preventDefault(), k("container: ArrowLeft → prev container"), re(te, "container-roving"), te === O.current && R(!1), te === P.current && se(!1), te === X.current && me(!1), ue(Ie - 1);
        return;
      }
      if (U === "Home") {
        ie.preventDefault(), k("container: Home → first container"), re(te, "container-roving"), te === O.current && R(!1), te === P.current && se(!1), te === X.current && me(!1), ue(0);
        return;
      }
      if (U === "End") {
        ie.preventDefault(), k("container: End → last container"), re(te, "container-roving"), te === O.current && R(!1), te === P.current && se(!1), te === X.current && me(!1), ue(ee().length - 1);
        return;
      }
      if (U === "Enter" || U === " ") {
        if (ie.preventDefault(), te === O.current)
          be("nav"), k("container: Enter/Space on nav → focus nav item", { navFocusedIndex: Te }), Q.current = Te, V.current = !0, ve(Te);
        else if (te === P.current) {
          be("content"), re(P.current, "descend-content"), se(!1);
          const $e = oe(P.current);
          k("container: Enter/Space on content → focus first focusable", { count: $e.length }), ($e[0] || P.current)?.focus();
        } else if (te === X.current) {
          be("secondary"), re(X.current, "descend-secondary"), me(!1);
          const $e = oe(X.current);
          k("container: Enter/Space on secondary → focus first focusable", { count: $e.length }), ($e[0] || X.current)?.focus();
        }
        return;
      }
    }
    if (U === "Escape") {
      if (we || je) {
        ie.preventDefault(), be("containers"), k("Escape: from", we ? "content" : "secondary", "→ containers (focus container)"), we && re(P.current, "escape-ascend"), je && re(X.current, "escape-ascend"), we && setTimeout(() => z(P.current), 10), je && setTimeout(() => z(X.current), 10);
        return;
      }
      if (Me) {
        ie.preventDefault(), be("containers"), k("Escape: from nav → containers (focus nav container)"), ce(), z(O.current);
        return;
      }
      if (Ke) {
        ie.preventDefault(), be("containers"), k("Escape: on container (stay in containers)");
        return;
      }
    }
    if (U === "Enter" || U === " ") {
      if (te === P.current && le === "content") {
        ie.preventDefault(), re(P.current, "descend-content");
        const $e = oe(P.current);
        k("Enter/Space on content container in content mode"), ($e[0] || P.current)?.focus();
        return;
      }
      if (te === X.current && le === "secondary") {
        ie.preventDefault(), re(X.current, "descend-secondary");
        const $e = oe(X.current);
        k("Enter/Space on secondary container in secondary mode"), ($e[0] || X.current)?.focus();
        return;
      }
    }
    if (U === "ArrowRight") {
      if (Me || le === "nav") {
        ie.preventDefault(), be("content"), k("ArrowRight: from nav → content (focus content)"), re(O.current, "from-nav"), R(!1), W();
        return;
      }
      if (we || le === "content") {
        ot && (ie.preventDefault(), be("secondary"), k("ArrowRight: from content → secondary (focus secondary)"), re(P.current, "from-content"), se(!1), setTimeout(() => z(X.current), 10));
        return;
      }
    }
    if (U === "ArrowLeft") {
      if (je || le === "secondary") {
        ie.preventDefault(), k("ArrowLeft: from secondary → content (focus content)"), re(X.current, "from-secondary"), me(!1), W();
        return;
      }
      if (we || le === "content") {
        ie.preventDefault(), be("nav"), k("ArrowLeft: from content → nav (focus nav item)", { navFocusedIndex: Te }), Q.current = Te, re(P.current, "from-content"), se(!1), ve(Te);
        return;
      }
    }
    if ((U === "Enter" || U === " ") && (Me || le === "nav")) {
      ie.preventDefault();
      const $e = Y.current, Fe = $e ? Array.from($e.querySelectorAll("[data-nav-item]")) : [];
      let Ue = Q.current ?? Te;
      if (Fe.length) {
        const $t = document.activeElement, Dt = $t ? Fe.indexOf($t) : -1;
        Dt >= 0 && (Ue = Dt);
      }
      Ue = Math.max(0, Math.min(Ue, Fe.length - 1)), Le(Ue), Q.current = Ue, k("Root: Enter/Space activate from nav context", { idx: Ue }), K(h(t[Ue])), be("content"), pe.current = "content", de.current = !0, ce(), W();
      return;
    }
  }, He = () => {
    const ie = () => {
      de.current = !1, V.current = !1;
    }, Ae = (ge) => {
      if (!Y.current) return;
      const ye = Array.from(Y.current.querySelectorAll("[data-nav-item]"));
      if (ye.length) {
        if (ge.key === "ArrowDown") {
          ge.preventDefault(), ge.stopPropagation(), V.current = !1, be("nav");
          const Se = Q.current ?? Te, Be = Math.min(ye.length - 1, Se + 1);
          Le(Be), Q.current = Be, ve(Be), k("PrimaryNav: ArrowDown", { from: Se, to: Be });
        } else if (ge.key === "ArrowUp") {
          ge.preventDefault(), ge.stopPropagation(), V.current = !1, be("nav");
          const Se = Q.current ?? Te, Be = Math.max(0, Se - 1);
          Le(Be), Q.current = Be, ve(Be), k("PrimaryNav: ArrowUp", { from: Se, to: Be });
        } else if (ge.key === "Home") {
          ge.preventDefault(), ge.stopPropagation(), V.current = !1;
          const Se = 0;
          Le(Se), Q.current = Se, ve(Se), k("PrimaryNav: Home", { to: Se });
        } else if (ge.key === "End") {
          ge.preventDefault(), ge.stopPropagation(), V.current = !1;
          const Se = ye.length - 1;
          Le(Se), Q.current = Se, ve(Se), k("PrimaryNav: End", { to: Se });
        }
      }
    }, U = (ge) => {
    }, te = (ge) => {
      if (ge.key !== "Enter" && ge.key !== " " || !Y.current) return;
      const ye = Array.from(Y.current.querySelectorAll("[data-nav-item]"));
      if (!ye.length) return;
      ge.preventDefault();
      let Se = -1;
      const Ce = ge.target?.closest?.("[data-nav-item]");
      Ce && (Se = ye.indexOf(Ce)), Se < 0 && (Se = Q.current ?? Te), Se = Math.max(0, Math.min(Se, ye.length - 1)), Le(Se), Q.current = Se, k("PrimaryNav: Enter/Space activate (capture)", { idx: Se }), K(h(t[Se])), be("content"), pe.current = "content", de.current = !0, ae.current != null && (clearTimeout(ae.current), ae.current = null), ce(), W();
    }, xe = (ge) => {
      if (ge.defaultPrevented) return;
      de.current = !1;
      const ye = ge.target;
      if (!ye) return;
      const Se = ye.closest("[data-nav-item]");
      if (!Se || !Y.current || !Y.current.contains(Se)) return;
      const Ce = Array.from(Y.current.querySelectorAll("[data-nav-item]")).indexOf(Se);
      Ce < 0 || (Le(Ce), Q.current = Ce, k("PrimaryNav: click delegate activate", { idx: Ce }), K(h(t[Ce])), be("content"), ce(), ae.current != null && (clearTimeout(ae.current), ae.current = null), W());
    };
    return /* @__PURE__ */ r.jsx(
      "ul",
      {
        ref: Y,
        className: "nhsfdp-primary-nav",
        role: "listbox",
        "aria-activedescendant": String(h(t[Math.max(0, Te)])),
        onKeyDownCapture: te,
        onKeyDown: Ae,
        onKeyUp: U,
        onPointerDown: ie,
        onMouseDown: ie,
        onClick: xe,
        children: t.map((ge, ye) => {
          const Se = h(ge), Be = ye === y, Ce = le === "nav" && ye === Te;
          return /* @__PURE__ */ r.jsx("li", { id: String(Se), role: "option", "aria-selected": Be, children: /* @__PURE__ */ r.jsx(
            "button",
            {
              "data-nav-item": !0,
              tabIndex: Ce ? 0 : -1,
              type: "button",
              className: "nhsfdp-primary-nav__item" + (Be ? " is-current" : "") + (Ce ? " is-focused" : ""),
              "aria-current": Be ? "step" : void 0,
              onPointerDown: ie,
              onMouseDown: ie,
              onKeyDown: (Me) => {
                if (Me.key === "Enter" || Me.key === " ") {
                  if (Me.preventDefault(), V.current) {
                    V.current = !1;
                    return;
                  }
                  Q.current = ye, de.current = !0, k("NavItem: onKeyDown activate", { i: ye, id: String(h(t[ye])) }), K(h(t[ye])), be("content"), pe.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), ce(), W();
                }
              },
              onKeyUp: (Me) => {
                if (Me.key === "Enter" || Me.key === " ") {
                  if (V.current) {
                    V.current = !1;
                    return;
                  }
                  Q.current = ye, k("NavItem: onKeyUp activate (fallback)", { i: ye, id: String(h(t[ye])) }), K(h(t[ye])), be("content"), pe.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), ce(), W();
                }
              },
              onClick: (Me) => {
                if (de.current) {
                  de.current = !1, Me.preventDefault(), Me.stopPropagation(), k("NavItem: ignored synthetic click after keyboard activation", { i: ye });
                  return;
                }
                Le(ye), Q.current = ye, k("NavItem: onClick select", { i: ye, id: String(Se) }), K(Se), be("content"), pe.current = "content", ae.current != null && (clearTimeout(ae.current), ae.current = null), ce(), W();
              },
              children: ge.label
            }
          ) }, String(Se));
        })
      }
    );
  }, Ye = () => {
    const ie = Math.max(0, y), Ae = ie > 0, U = ie < t.length - 1, te = m ? m(w) : x ? x(w) : !0;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-mobile", children: [
      F === "tablet" ? ne : null,
      te && /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-mobile-controls", "aria-label": "Step navigation", children: [
        Ae ? /* @__PURE__ */ r.jsx(
          nr,
          {
            element: "button",
            text: "Back",
            onClick: () => {
              const xe = t[ie - 1];
              xe && K(h(xe));
            }
          }
        ) : (
          // Keep space to avoid layout shift when back is not available
          /* @__PURE__ */ r.jsx(nr, { element: "button", text: "Back", "aria-hidden": "true", style: { visibility: "hidden" } })
        ),
        U ? /* @__PURE__ */ r.jsx(
          Yr,
          {
            element: "button",
            text: "Next",
            onClick: () => {
              const xe = t[ie + 1];
              xe && K(h(xe));
            }
          }
        ) : (
          // Keep space to avoid layout shift when next is not available
          /* @__PURE__ */ r.jsx(Yr, { element: "button", text: "Next", "aria-hidden": "true", style: { visibility: "hidden" } })
        )
      ] }),
      /* @__PURE__ */ r.jsx(
        Km,
        {
          steps: t,
          currentIndex: ie,
          onNavigate: (xe) => {
            const ge = t[xe];
            ge && K(h(ge));
          },
          renderCard: (xe, ge, ye) => i ? i(xe) : l(xe)
        }
      )
    ] });
  }, lt = (ie) => /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "nhsfdp-workflow-grid panes-" + (ie.panes ?? 2),
      onKeyDown: Ne,
      ref: E,
      role: "grid",
      "aria-rowcount": 1,
      "aria-colcount": (ie.showPrimaryNav ? 1 : 0) + 1 + (ie.showSecondaryNav ? 1 : 0),
      "aria-label": "Workflow layout",
      children: /* @__PURE__ */ r.jsxs("div", { className: "nhsfdp-workflow-body", role: "row", children: [
        ie.showPrimaryNav && /* @__PURE__ */ r.jsx(
          "aside",
          {
            ref: O,
            className: "nhsfdp-pane primary-nav" + (_e ? " is-active-pane" : ""),
            "aria-label": "Primary navigation",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (Ae) => {
              Ae.target === O.current && R(!0);
            },
            onBlur: (Ae) => {
              Ae.target === O.current && R(!1);
            },
            children: /* @__PURE__ */ r.jsx("section", { role: "complementary", "aria-label": "Primary navigation", children: /* @__PURE__ */ r.jsx(He, {}) })
          }
        ),
        /* @__PURE__ */ r.jsxs(
          "main",
          {
            ref: P,
            className: "nhsfdp-pane content" + (q ? " is-active-pane" : ""),
            "aria-live": "polite",
            role: "gridcell",
            tabIndex: 0,
            onFocus: (Ae) => {
              Ae.target === P.current && se(!0);
            },
            onBlur: (Ae) => {
              Ae.target === P.current && se(!1);
            },
            children: [
              ne,
              /* @__PURE__ */ r.jsx("div", { role: "main", children: l(w, H) })
            ]
          }
        ),
        (() => {
          const Ae = d ? d(w, $, H, (xe) => Z(xe)) : $ && $.length > 0 ? /* @__PURE__ */ r.jsx("ul", { className: "nhsfdp-secondary-nav", role: "listbox", "aria-label": "Sections", children: $.map((xe) => {
            const ge = D === xe.id;
            return /* @__PURE__ */ r.jsx("li", { role: "option", "aria-selected": ge, children: /* @__PURE__ */ r.jsx(
              "button",
              {
                type: "button",
                className: "nhsfdp-secondary-nav__item" + (ge ? " is-current" : ""),
                "data-sec-item": !0,
                onClick: () => Z(xe.id),
                children: xe.label
              }
            ) }, String(xe.id));
          }) }) : void 0, U = c?.(w, H);
          return ie.showSecondaryNav && (Ae || U) ? /* @__PURE__ */ r.jsx(
            "aside",
            {
              ref: X,
              className: "nhsfdp-pane secondary-nav" + (he ? " is-active-pane" : ""),
              "aria-label": "Secondary navigation",
              role: "gridcell",
              tabIndex: 0,
              onFocus: (xe) => {
                xe.target === X.current && me(!0);
              },
              onBlur: (xe) => {
                xe.target === X.current && me(!1);
              },
              children: /* @__PURE__ */ r.jsxs("section", { role: "complementary", "aria-label": "Secondary navigation", children: [
                Ae,
                U
              ] })
            }
          ) : null;
        })()
      ] })
    }
  );
  return B ? F === "mobile" || !p && F === "tablet" || (L.panes ?? 1) === 1 ? /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: Ye() }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: lt(L) }) : /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow " + (f ?? ""), children: /* @__PURE__ */ r.jsx("div", { className: "nhsfdp-workflow-body", children: /* @__PURE__ */ r.jsxs("main", { className: "nhsfdp-pane content", children: [
    u ? u({ steps: t, current: w, onNavigate: K }) : null,
    w ? l(w, w?.sections?.find((ie) => ie.id === (S?.(w) ?? w?.sections?.[0]?.id))) : null
  ] }) }) });
}
const tg = typeof window < "u" && window.document ? J.useLayoutEffect : J.useEffect, Ni = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), ng = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, c = `${e._pxWidth}px`, d = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, u = Math.floor(e._startFraction) + 2, f = Math.max(1, Math.round(e._spanColumns)), h = n && e.childItems && e.childItems.length > 0, p = (m) => {
    h && (m.preventDefault(), a?.(e));
  }, x = h ? {
    role: "button",
    tabIndex: 0,
    "aria-haspopup": "dialog",
    "aria-expanded": o || !1,
    onClick: p,
    onKeyDown: (m) => {
      (m.key === "Enter" || m.key === " ") && p(m), m.key === "Escape" && o && p(m);
    }
  } : {};
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: ke("nhsuk-product-roadmap__item", h && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
      style: { left: l, width: c, top: d, "--item-height": t },
      role: "gridcell",
      "aria-label": i,
      "aria-colindex": u,
      "aria-colspan": f,
      ...x,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__item-bg", "aria-hidden": "true" }),
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__item-content", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-product-roadmap__item-title", children: e.title }),
          h && /* @__PURE__ */ r.jsx("span", { className: ke("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, rg = wd(({
  dateHeadings: e,
  categories: t,
  columnWidthPx: n = 400,
  itemMaxLines: a = 2,
  className: o,
  ariaLabel: s = "Product roadmap",
  enableDrilldown: i = !1,
  onToggleItem: l,
  drilldownMode: c = "overlay",
  ...d
}) => {
  const [u, f] = Oe(() => /* @__PURE__ */ new Set()), [h, p] = Oe(() => /* @__PURE__ */ new Set()), x = Ze(/* @__PURE__ */ new Set()), m = fe((M) => u.has(M), [u]), g = fe((M) => {
    f((A) => {
      const I = new Set(A);
      return I.has(M.id) ? (I.delete(M.id), p((D) => {
        const $ = new Set(D);
        return $.add(M.id), $;
      }), setTimeout(() => p((D) => {
        const $ = new Set(D);
        return $.delete(M.id), $;
      }), 240), l?.(M.id, !1)) : (I.add(M.id), l?.(M.id, !0)), I;
    });
  }, [l]);
  tg(() => {
    if (c !== "inline" || !i || typeof document > "u") return;
    const M = [];
    if (u.forEach(($) => {
      x.current.has($) || M.push($);
    }), x.current = new Set(u), !M.length) return;
    const A = typeof window < "u" && typeof window.matchMedia == "function" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : !1, I = M.map(($) => `.nhsuk-product-roadmap__inline-children[data-parent="${$}"] .nhsuk-product-roadmap__inline-child`).join(","), D = Array.from(document.querySelectorAll(I));
    D.length && D.forEach(($, H) => {
      const Z = A ? 0 : H * 50;
      setTimeout(() => {
        $.style.transition = A ? "none" : "opacity 0.32s ease-out, transform 0.32s ease-out", $.style.opacity = "1", $.style.transform = "translateY(0)";
      }, Z);
    });
  }, [u, c, i]);
  const S = fe(() => {
    u.size && f(/* @__PURE__ */ new Set());
  }, [u]), N = ke("nhsuk-product-roadmap", o), C = Ni(n, 120, 1200, 400), k = Ni(a, 1, 6, 2), v = Re(() => e.map((M) => /* @__PURE__ */ new Date(M + " 01")), [e]), _ = Re(() => {
    if (v.length === 0) {
      const I = /* @__PURE__ */ new Date();
      return [I, I];
    }
    const M = new Date(v[0]), A = ir.offset(new Date(v[v.length - 1]), 1);
    return [M, A];
  }, [v]), j = Re(() => hs().domain(_).range([0, v.length * C]), [_, v.length, C]), b = fe((M) => {
    if (M.startDate) {
      const K = new Date(M.startDate), ne = new Date(M.endDate ?? M.startDate);
      ne < K && ne.setTime(K.getTime());
      const B = j(K), F = ir.offset(new Date(ne), 1);
      let L = j(F);
      Number.isFinite(L) || (L = B + C);
      const G = Math.max(C * 0.25, L - B), E = B / C, O = G / C;
      return { ...M, _pxLeft: B, _pxWidth: G, _startFraction: E, _spanColumns: O };
    }
    const A = M.date ?? 1, I = M.dateOffset ?? 0, D = M.length ?? 1, $ = M.partialLength ?? 1, H = A - 1 + I, Z = D - 1 + $;
    return { ...M, _pxLeft: H * C, _pxWidth: Z * C, _startFraction: H, _spanColumns: Z };
  }, [j, C]), y = Re(() => t.map((M) => {
    const I = M.roadmapItems.map(($) => {
      const H = !$.childItems && $.children ? { ...$, childItems: $.children } : { ...$ };
      return b(H);
    }).sort(($, H) => $._pxLeft !== H._pxLeft ? $._pxLeft - H._pxLeft : H._pxWidth - $._pxWidth), D = [];
    return I.forEach(($) => {
      const H = $._pxLeft, Z = $._pxLeft + $._pxWidth;
      let K = D.findIndex((ne) => ne <= H);
      K === -1 && (K = D.length, D.push(0)), D[K] = Z, $.verticalPosition = K + 1;
    }), { ...M, roadmapItems: I, _laneCount: D.length };
  }), [t, b]), w = Re(() => y.map((M) => M._laneCount || 1), [y]), T = Re(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: N,
      style: { "--column-width": `${C}px`, gridTemplateColumns: T },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": y.length + 1,
      ...d,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((M, A) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": A + 2, children: M }, `${M}-${A}`))
        ] }),
        y.map((M, A) => {
          const I = A + 2, D = w[A];
          let $, H = 0, Z = [];
          i && c === "inline" && (Z = M.roadmapItems.filter((F) => m(F.id) && F.childItems && F.childItems.length).map((F) => ({ id: F.id, lane: F.verticalPosition || 1, count: F.childItems.length })).sort((F, L) => F.lane - L.lane), H = Z.reduce((F, L) => F + L.count, 0));
          const K = D + H;
          $ = `calc((${K} * var(--roadmap-item-block-height)) + (max(0, ${K} - 1) * var(--roadmap-row-gap)))`;
          const ne = {};
          let B = 0;
          return Z.forEach((F) => {
            B += F.count, ne[F.lane + 1] = B;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": I, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: M.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: $ }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: M.roadmapItems.map((F, L) => {
              const G = (F.verticalPosition || 1) - 1, E = Z.filter((Y) => Y.lane - 1 < G).reduce((Y, Q) => Y + Q.count, 0), O = G + E, P = m(F.id), X = h.has(F.id);
              return /* @__PURE__ */ r.jsxs(tt.Fragment, { children: [
                /* @__PURE__ */ r.jsx(ng, { item: F, maxLines: k, enableDrilldown: i, onExpand: g, isActive: P, topLaneIndex: O, laneOffset: E }),
                i && c === "inline" && (P || X) && F.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": F.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${F.title} child tasks`, children: F.childItems.map((Y, Q) => {
                  const de = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let V = F._pxLeft, ae = F._pxWidth;
                  if (Y.startDate) {
                    const pe = new Date(Y.startDate);
                    let Ie = Y.endDate ? new Date(Y.endDate) : new Date(pe);
                    Ie < pe && (Ie = new Date(pe));
                    const Ve = new Date(Ie);
                    Ve.setDate(Ve.getDate() + 1);
                    const Te = j(pe);
                    let Le = j(Ve);
                    (!Number.isFinite(Le) || Le <= Te) && (Le = Te + 6), V = Te, ae = Math.max(6, Le - Te);
                  }
                  const be = O + 1 + Q;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ke("nhsuk-product-roadmap__inline-child", Y.status && `nhsuk-product-roadmap__inline-child--status-${Y.status}`, !P && X && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${V}px`, width: `${ae}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${be})`, height: de, opacity: P ? 0 : void 0, transform: P ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: Y.title })
                      ]
                    },
                    Y.id ?? Q
                  );
                }) })
              ] }, F.id ?? L);
            }) }) })
          ] }, `${M.heading}-${A}`);
        }),
        i && c === "overlay" && u.size === 1 && (() => {
          const M = Array.from(u)[0], A = t.flatMap((I) => I.roadmapItems).find((I) => I.id === M);
          return !A || !A.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${A.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: A.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: S, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: A.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: A.childItems.map((I, D) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: I.title }),
                I.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: I.content })
              ] }, I.id ?? D)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: S, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
rg.displayName = "ProductRoadmap";
function bt(e) {
  return function() {
    return e;
  };
}
const wo = Math.PI, _o = 2 * wo, fn = 1e-6, ag = _o - fn;
function Zl(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function og(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return Zl;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class sg {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? Zl : og(t);
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
    let i = this._x1, l = this._y1, c = a - t, d = o - n, u = i - t, f = l - n, h = u * u + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = n}`;
    else if (h > fn) if (!(Math.abs(f * c - d * u) > fn) || !s)
      this._append`L${this._x1 = t},${this._y1 = n}`;
    else {
      let p = a - i, x = o - l, m = c * c + d * d, g = p * p + x * x, S = Math.sqrt(m), N = Math.sqrt(h), C = s * Math.tan((wo - Math.acos((m + h - g) / (2 * S * N))) / 2), k = C / N, v = C / S;
      Math.abs(k - 1) > fn && this._append`L${t + k * u},${n + k * f}`, this._append`A${s},${s},0,0,${+(f * p > u * x)},${this._x1 = t + v * c},${this._y1 = n + v * d}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), c = a * Math.sin(o), d = t + l, u = n + c, f = 1 ^ i, h = i ? o - s : s - o;
    this._x1 === null ? this._append`M${d},${u}` : (Math.abs(this._x1 - d) > fn || Math.abs(this._y1 - u) > fn) && this._append`L${d},${u}`, a && (h < 0 && (h = h % _o + _o), h > ag ? this._append`A${a},${a},0,1,${f},${t - l},${n - c}A${a},${a},0,1,${f},${this._x1 = d},${this._y1 = u}` : h > fn && this._append`A${a},${a},0,${+(h >= wo)},${f},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function ql(e) {
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
  }, () => new sg(t);
}
function Jl(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Xl(e) {
  this._context = e;
}
Xl.prototype = {
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
function Kl(e) {
  return new Xl(e);
}
function Ql(e) {
  return e[0];
}
function ec(e) {
  return e[1];
}
function tc(e, t) {
  var n = bt(!0), a = null, o = Kl, s = null, i = ql(l);
  e = typeof e == "function" ? e : e === void 0 ? Ql : bt(e), t = typeof t == "function" ? t : t === void 0 ? ec : bt(t);
  function l(c) {
    var d, u = (c = Jl(c)).length, f, h = !1, p;
    for (a == null && (s = o(p = i())), d = 0; d <= u; ++d)
      !(d < u && n(f = c[d], d, c)) === h && ((h = !h) ? s.lineStart() : s.lineEnd()), h && s.point(+e(f, d, c), +t(f, d, c));
    if (p) return s = null, p + "" || null;
  }
  return l.x = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : bt(+c), l) : e;
  }, l.y = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : bt(+c), l) : t;
  }, l.defined = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : bt(!!c), l) : n;
  }, l.curve = function(c) {
    return arguments.length ? (o = c, a != null && (s = o(a)), l) : o;
  }, l.context = function(c) {
    return arguments.length ? (c == null ? a = s = null : s = o(a = c), l) : a;
  }, l;
}
function So(e, t, n) {
  var a = null, o = bt(!0), s = null, i = Kl, l = null, c = ql(d);
  e = typeof e == "function" ? e : e === void 0 ? Ql : bt(+e), t = typeof t == "function" ? t : bt(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? ec : bt(+n);
  function d(f) {
    var h, p, x, m = (f = Jl(f)).length, g, S = !1, N, C = new Array(m), k = new Array(m);
    for (s == null && (l = i(N = c())), h = 0; h <= m; ++h) {
      if (!(h < m && o(g = f[h], h, f)) === S)
        if (S = !S)
          p = h, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), x = h - 1; x >= p; --x)
            l.point(C[x], k[x]);
          l.lineEnd(), l.areaEnd();
        }
      S && (C[h] = +e(g, h, f), k[h] = +t(g, h, f), l.point(a ? +a(g, h, f) : C[h], n ? +n(g, h, f) : k[h]));
    }
    if (N) return l = null, N + "" || null;
  }
  function u() {
    return tc().defined(o).curve(i).context(s);
  }
  return d.x = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : bt(+f), a = null, d) : e;
  }, d.x0 = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : bt(+f), d) : e;
  }, d.x1 = function(f) {
    return arguments.length ? (a = f == null ? null : typeof f == "function" ? f : bt(+f), d) : a;
  }, d.y = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : bt(+f), n = null, d) : t;
  }, d.y0 = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : bt(+f), d) : t;
  }, d.y1 = function(f) {
    return arguments.length ? (n = f == null ? null : typeof f == "function" ? f : bt(+f), d) : n;
  }, d.lineX0 = d.lineY0 = function() {
    return u().x(e).y(t);
  }, d.lineY1 = function() {
    return u().x(e).y(n);
  }, d.lineX1 = function() {
    return u().x(a).y(t);
  }, d.defined = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : bt(!!f), d) : o;
  }, d.curve = function(f) {
    return arguments.length ? (i = f, s != null && (l = i(s)), d) : i;
  }, d.context = function(f) {
    return arguments.length ? (f == null ? s = l = null : l = i(s = f), d) : s;
  }, d;
}
function Ci(e) {
  return e < 0 ? -1 : 1;
}
function ji(e, t, n) {
  var a = e._x1 - e._x0, o = t - e._x1, s = (e._y1 - e._y0) / (a || o < 0 && -0), i = (n - e._y1) / (o || a < 0 && -0), l = (s * o + i * a) / (a + o);
  return (Ci(s) + Ci(i)) * Math.min(Math.abs(s), Math.abs(i), 0.5 * Math.abs(l)) || 0;
}
function Mi(e, t) {
  var n = e._x1 - e._x0;
  return n ? (3 * (e._y1 - e._y0) / n - t) / 2 : t;
}
function Qa(e, t, n) {
  var a = e._x0, o = e._y0, s = e._x1, i = e._y1, l = (s - a) / 3;
  e._context.bezierCurveTo(a + l, o + l * t, s - l, i - l * n, s, i);
}
function Zr(e) {
  this._context = e;
}
Zr.prototype = {
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
        Qa(this, this._t0, Mi(this, this._t0));
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
          this._point = 3, Qa(this, Mi(this, n = ji(this, e, t)), n);
          break;
        default:
          Qa(this, this._t0, n = ji(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
Object.create(Zr.prototype).point = function(e, t) {
  Zr.prototype.point.call(this, t, e);
};
function qr(e) {
  return new Zr(e);
}
function ig(e, t, n) {
  const a = ul(e, t);
  return hs().domain(a).range(n);
}
function Ii(e, t, n) {
  const [a, o] = ul(e, t);
  if (!(Number.isFinite(a) && Number.isFinite(o)))
    return Hr().domain([0, 0]).range(n);
  let i;
  if (a <= 0)
    i = Math.min(0, a);
  else {
    const c = o - a, d = (c > 0 ? c : a) * 0.1;
    i = Math.max(0, a - d), i === a && (i = Math.max(0, a * 0.9));
  }
  const l = o ?? 0;
  return Hr().domain([i, l]).nice().range(n);
}
function ko(e, t, n, a) {
  const o = tc().x(t).y(n);
  return a?.smooth !== !1 && o.curve(qr), o(e) ?? "";
}
function lg(e = {}) {
  const t = J.useRef(null), n = J.useMemo(() => ({
    top: e.top ?? 16,
    right: e.right ?? 16,
    bottom: e.bottom ?? 32,
    left: e.left ?? 48
  }), [e.bottom, e.left, e.right, e.top]), [a, o] = J.useState({ width: 0, height: 0 });
  J.useLayoutEffect(() => {
    if (!t.current) return;
    const l = new ResizeObserver((c) => {
      for (const d of c) {
        const { width: u, height: f } = d.contentRect;
        o({ width: u, height: f });
      }
    });
    return l.observe(t.current), () => l.disconnect();
  }, []);
  const s = Math.max(0, a.width - n.left - n.right), i = Math.max(0, a.height - n.top - n.bottom);
  return { width: a.width, height: a.height, innerWidth: s, innerHeight: i, margin: n, ref: t };
}
const nc = J.createContext(null);
function un() {
  return J.useContext(nc);
}
const cg = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = lg(t), c = { height: e, position: "relative" };
  return n !== void 0 && (c.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: c, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(nc.Provider, { value: l, children: o }) });
}, xs = J.createContext(null), kn = () => J.useContext(xs), dg = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  parseX: a,
  children: o,
  xTickCount: s = 6,
  yTickCount: i = 5,
  yDomain: l,
  xPadding: c,
  yPadding: d,
  yBottomGapPx: u
}) => {
  const f = un(), h = t ?? f?.innerWidth ?? 0, p = n ?? f?.innerHeight ?? 0, x = J.useMemo(() => e.flatMap((v) => v.data), [e]), m = J.useCallback(
    (v) => {
      if (a) return a(v);
      const _ = v.x;
      return _ instanceof Date ? _ : new Date(_);
    },
    [a]
  ), g = c ?? 6, S = d ?? 6, N = J.useMemo(
    () => ig(x, m, [
      g,
      Math.max(0, h - g)
    ]),
    [x, m, h, g]
  ), C = J.useMemo(() => {
    const v = Math.max(0, u ?? 0), _ = Math.max(0, p - (S + v));
    if (l) {
      const j = Ii([], (b) => b.y, [
        _,
        S
      ]);
      return j.domain(l), j;
    }
    return Ii(x, (j) => j.y, [_, S]);
  }, [x, p, l, S, u]), k = J.useMemo(
    () => ({
      xScale: N,
      yScale: C,
      getXTicks: (v = s) => N.ticks(v),
      getYTicks: (v = i) => C.ticks(v)
    }),
    [N, C, s, i]
  );
  return /* @__PURE__ */ r.jsx(xs.Provider, { value: k, children: o });
}, Tr = 16, Lr = 6, ug = 16, fg = 4, hg = 6, pg = 3, mg = void 0, Di = ({
  type: e,
  scale: t,
  tickCount: n,
  tickValues: a,
  formatTick: o,
  label: s,
  offset: i,
  className: l,
  minLabelSpacing: c,
  maxTickLabelLength: d,
  autoMinLabelSpacing: u = e === "x",
  labelAngle: f = 0,
  allowLabelWrap: h = !0,
  tickFormatPreset: p,
  yZeroBreak: x
}) => {
  const m = kn(), g = un(), S = t || (e === "x" ? m?.xScale : m?.yScale), N = n ?? (e === "x" ? 6 : 5), C = typeof o == "function", k = J.useMemo(() => {
    if (C || !p) return;
    const j = (b) => new Intl.DateTimeFormat(void 0, b);
    switch (p) {
      case "dayShortMonth":
        return (b) => {
          const y = b instanceof Date ? b : new Date(b);
          return `${y.getDate()}
${j({ month: "short" }).format(y)}`;
        };
      case "dayShortMonthYear":
        return (b) => {
          const y = b instanceof Date ? b : new Date(b);
          return `${y.getDate()}
${j({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "shortMonth":
        return (b) => {
          const y = b instanceof Date ? b : new Date(b);
          return j({ month: "short" }).format(y);
        };
      case "shortMonthYear":
        return (b) => {
          const y = b instanceof Date ? b : new Date(b);
          return `${j({ month: "short" }).format(y)} ${y.getFullYear()}`;
        };
      case "hourMinute":
        return (b) => {
          const y = b instanceof Date ? b : new Date(b);
          return j({ hour: "2-digit", minute: "2-digit" }).format(y);
        };
      default:
        return;
    }
  }, [C, p]);
  let v = C ? o : k || ((j) => String(j));
  const _ = J.useMemo(() => a && Array.isArray(a) ? a : S ? typeof S.ticks == "function" ? S.ticks(N) : S.domain ? S.domain() : [] : [], [S, N, a]);
  if (e === "x" && !C && !p && _.length && _.every((j) => j instanceof Date)) {
    const j = _[0], b = _[_.length - 1], y = b.getTime() - j.getTime(), w = 24 * 3600 * 1e3, T = 365 * w, M = j.getFullYear() === b.getFullYear(), A = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (y < 2 * w) {
      const I = new Intl.DateTimeFormat(void 0, {
        hour: "2-digit",
        minute: "2-digit"
      });
      v = (D) => I.format(D);
    } else if (y < 32 * w)
      v = (I) => {
        const D = I;
        return `${D.getDate()} ${A.format(D)}`;
      };
    else if (y < T && M)
      v = (I) => A.format(I);
    else if (y < 2 * T) {
      const I = /* @__PURE__ */ new Set();
      v = (D) => {
        const $ = D, H = $.getMonth();
        return I.has(H) || I.add(H), `${A.format($)} ${$.getFullYear()}`;
      };
    } else
      v = (I) => String(I.getFullYear());
  }
  if (!S || !g) return null;
  if (e === "x") {
    const j = i ?? g.innerHeight, b = typeof S.bandwidth == "function", y = b ? S.bandwidth() : 0, w = (A) => {
      const I = S(A);
      return b ? I + y / 2 : I;
    };
    let T = c ?? 0;
    if (u && c == null) {
      const A = _.map(
        (D) => v(D).replace(/\n.*/g, "")
      ), I = A.length ? A.reduce((D, $) => D + $.length, 0) / A.length : 0;
      T = Math.max(12, Math.round(I * 6 + 4));
    }
    const M = J.useMemo(() => {
      if (a && Array.isArray(a) || T <= 0) return _;
      const A = [];
      let I = -1 / 0;
      for (const D of _) {
        const $ = w(D);
        $ - I >= T && (A.push(D), I = $);
      }
      return A;
    }, [
      _,
      S,
      T,
      a,
      b,
      y
    ]);
    return /* @__PURE__ */ r.jsxs(
      "g",
      {
        className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "),
        transform: `translate(0,${j})`,
        fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
        children: [
          /* @__PURE__ */ r.jsx("line", { x1: 0, x2: g.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
          M.map((A, I) => {
            const D = v(A), $ = d && D.length > d ? D.slice(0, Math.max(1, d - 1)) + "…" : D, H = h ? $.split(/\n/) : [$.replace(/\n/g, " ")], Z = f < 0 ? "end" : f > 0 ? "start" : "middle";
            return /* @__PURE__ */ r.jsxs(
              "g",
              {
                transform: `translate(${w(A)},0)`,
                children: [
                  /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
                  /* @__PURE__ */ r.jsxs(
                    "text",
                    {
                      y: 9,
                      textAnchor: Z,
                      className: "fdp-axis__tick",
                      dominantBaseline: "hanging",
                      transform: f ? `rotate(${f})` : void 0,
                      fontFamily: "inherit",
                      children: [
                        H.map((K, ne) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: ne === 0 ? 0 : "1.1em", children: K }, ne)),
                        $ !== D && /* @__PURE__ */ r.jsx("title", { children: D })
                      ]
                    }
                  )
                ]
              },
              A?.toString?.() || I
            );
          })
        ]
      }
    );
  }
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "),
      fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))",
      children: [
        (() => {
          const j = !!x?.enabled, b = Math.max(Lr, x?.gapPx ?? Tr);
          if (!j)
            return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: g.innerHeight, stroke: "currentColor" });
          const y = Math.max(0, g.innerHeight - b);
          return /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: 0, y2: y, stroke: "currentColor" });
        })(),
        _.map((j, b) => {
          const y = v(j), w = d && y.length > d ? y.slice(0, Math.max(1, d - 1)) + "…" : y, T = h ? w.split(/\n/) : [w.replace(/\n/g, " ")];
          if (!!x?.enabled) {
            const A = Math.max(Lr, x?.gapPx ?? Tr), I = Math.max(0, g.innerHeight - A);
            if (S(j) > I - 1) return null;
          }
          return /* @__PURE__ */ r.jsxs(
            "g",
            {
              transform: `translate(0,${S(j)})`,
              children: [
                /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    x: -9,
                    dy: "0.32em",
                    textAnchor: "end",
                    className: "fdp-axis__tick",
                    fontFamily: "inherit",
                    children: [
                      T.map((A, I) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: I === 0 ? 0 : "1.1em", children: A }, I)),
                      w !== y && /* @__PURE__ */ r.jsx("title", { children: y })
                    ]
                  }
                )
              ]
            },
            j?.toString?.() || b
          );
        }),
        !!x?.enabled && (() => {
          const j = Math.max(Lr, x?.gapPx ?? Tr), b = g.innerHeight, w = Math.max(0, b - j), T = w, A = Math.max(4, b - T), I = fg, D = hg, $ = Math.max(1, Math.round(x?.zigZag?.amplitudePx ?? I)), H = Math.max(1, Math.round(x?.zigZag?.stepXPx ?? pg)), Z = x?.zigZag?.heightPx ?? mg, K = Math.max(4, Math.round(Z ?? 0));
          let ne, B;
          if (x?.zigZag?.heightPx && x.zigZag.heightPx > 0) {
            const X = Math.max(4, Math.min(A - 2, K));
            ne = Math.max(1, Math.floor(X / (2 * $))), B = Math.max(0, Math.min(X, ne * 2 * $));
          } else typeof x?.zigZag?.cycles == "number" && x?.zigZag?.cycles > 0 ? (ne = Math.max(1, Math.round(x.zigZag.cycles)), B = ne * 2 * $, B = Math.min(B, A - 2), ne = Math.max(1, Math.floor(B / (2 * $)))) : (ne = D, B = Math.min(A - 2, ne * 2 * $), ne = Math.max(1, Math.floor(B / (2 * $))));
          const F = T + (A - B) / 2, L = F + B;
          let G = "M0,0";
          const E = B > 0 ? Math.max(0, Math.floor((B - $) / (2 * $))) : 0, O = Math.max(0, (B - E * 2 * $) / 2), P = $ > 0 ? H * (O / $) : 0;
          O > 0 && (G += ` l${P},${O}`);
          for (let X = 0; X < E; X++)
            G += ` l-${H},${$} l${H},${$}`;
          return O > 0 && (G += ` l-${P},${O}`), /* @__PURE__ */ r.jsxs("g", { children: [
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: w, y2: F, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${F})`, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: G, stroke: "currentColor", fill: "none" }) }),
            /* @__PURE__ */ r.jsx("line", { x1: 0, x2: 0, y1: L, y2: b, stroke: "currentColor" }),
            /* @__PURE__ */ r.jsx("g", { transform: `translate(0,${b})`, children: /* @__PURE__ */ r.jsx("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: "0" }) })
          ] });
        })(),
        s && /* @__PURE__ */ r.jsx(
          "text",
          {
            transform: "rotate(-90)",
            x: -g.innerHeight / 2,
            y: -g.margin.left + 12,
            textAnchor: "middle",
            className: "fdp-axis__label",
            fontFamily: "inherit",
            children: s
          }
        )
      ]
    }
  );
}, gg = ({
  axis: e = "y",
  tickCount: t,
  stroke: n = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray: a = "2 4",
  className: o
}) => {
  const s = kn(), i = un();
  if (!s || !i) return null;
  const l = e === "y" ? s.getYTicks(t) : s.getXTicks(t);
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-grid", o].filter(Boolean).join(" "), children: [
    e === "y" && l.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: 0,
        x2: i.innerWidth,
        y1: s.yScale(c),
        y2: s.yScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    )),
    e === "x" && l.map((c, d) => /* @__PURE__ */ r.jsx(
      "line",
      {
        y1: 0,
        y2: i.innerHeight,
        x1: s.xScale(c),
        x2: s.xScale(c),
        stroke: n,
        strokeDasharray: a
      },
      d
    ))
  ] });
}, xg = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, gr = {
  color: xg
}, yg = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Da = {
  color: yg
}, bg = [
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
let eo = null, to = null, no = null, rc = "optimized";
function vg() {
  const e = { color: { ...Da.color, ...gr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
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
    return bg;
  }
}
function wg() {
  return eo || (eo = vg()), eo;
}
function _g(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ro(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function Sg(e, t, n) {
  const a = ro(e), o = ro(t), s = ro(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, c = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: c * 100 };
}
function kg(e, t, n) {
  let i = e / 95.047, l = t / 100, c = n / 108.883;
  const d = (u) => u > 8856e-6 ? Math.cbrt(u) : 7.787 * u + 16 / 116;
  return i = d(i), l = d(l), c = d(c), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - c) };
}
function ac(e) {
  const t = _g(e);
  if (!t) return null;
  const n = Sg(t.r, t.g, t.b);
  return kg(n.x, n.y, n.z);
}
function Ti(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function Ng() {
  const e = wg();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => ac(i));
  let n = 0, a = -1;
  for (let i = 0; i < e.length; i++) {
    const l = t[i];
    if (!l) continue;
    let c = 0, d = 0;
    for (let f = 0; f < e.length; f++) i !== f && t[f] && (c += Ti(l, t[f]), d++);
    const u = c / Math.max(1, d);
    u > a && (a = u, n = i);
  }
  const o = new Set(e.map((i, l) => l)), s = [];
  for (s.push(n), o.delete(n); o.size; ) {
    let i = Array.from(o)[0], l = -1;
    for (const c of o) {
      const d = t[c];
      if (!d) continue;
      let u = 1 / 0;
      for (const f of s) {
        const h = t[f];
        if (h) {
          const p = Ti(d, h);
          p < u && (u = p);
        }
      }
      u > l && (l = u, i = c);
    }
    s.push(i), o.delete(i);
  }
  return s.map((i) => e[i]);
}
function Cg() {
  return to || (to = Ng()), to;
}
function jg(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (u) => {
    const f = u * u * u;
    return f > 8856e-6 ? f : (u - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, c = i(a) * 100, d = i(s) * 108.883;
  return { X: l, Y: c, Z: d };
}
function Mg(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function Ig(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function Dg(e, t) {
  const n = ac(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = jg(a, n.a, n.b), l = Mg(o, s, i);
  return Ig(l.r, l.g, l.b);
}
function Tg() {
  const e = Cg(), n = [12, -12, 24, -24].map((o) => e.map((s) => Dg(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function Lg() {
  return (!no || $g()) && (no = Tg(), oc = rc), no;
}
let oc = null;
function $g() {
  return oc !== rc;
}
function Bt(e) {
  const t = Lg();
  return t[e % t.length];
}
let $n = null, lr = null, cr = null, dr = null;
function Ag() {
  const e = gr?.color?.["data-viz"]?.stroke;
  if (e) {
    const t = e.categorical || {};
    $n = [];
    for (let s = 1; s <= 12; s++) {
      const i = t[String(s)]?.$value || t[String(s)]?.value;
      $n.push(typeof i == "string" ? i : "#212b32");
    }
    const n = e.region || {};
    lr = {}, Object.keys(n).forEach((s) => {
      const i = n[s]?.$value || n[s]?.value;
      typeof i == "string" && (lr[s] = i);
    });
    const a = e.severity || {}, o = e["org-level"] || {};
    dr = {}, Object.keys(o).forEach((s) => {
      const i = o[s]?.$value || o[s]?.value;
      typeof i == "string" && (dr[s] = i);
    }), cr = {}, Object.keys(a).forEach((s) => {
      const i = a[s]?.$value || a[s]?.value;
      typeof i == "string" && (cr[s] = i);
    });
  }
}
function Ta() {
  (!$n || !lr || !cr || !dr) && Ag();
}
function wn(e) {
  return Ta(), $n ? $n[e % $n.length] : "#212b32";
}
function Eg(e) {
  return Ta(), lr ? lr[e] : void 0;
}
function Jr(e, t) {
  return Eg(e) || wn(t);
}
const No = ["low", "moderate", "high", "critical"];
let ao = null;
function Fg() {
  const e = { color: { ...Da.color, ...gr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return No.forEach((a) => {
    const o = t(`color.data-viz.severity.${a}`);
    o && (n[a] = o);
  }), n;
}
function sc() {
  return ao || (ao = Fg()), ao;
}
function Pg(e) {
  return sc()[e.toLowerCase()];
}
function Rg(e, t) {
  return Pg(e) || sc()[No[t % No.length]] || Bt(t);
}
function Bg(e) {
  return Ta(), cr ? cr[e] : void 0;
}
function Hg(e, t) {
  return Bg(e) || wn(t);
}
const Co = ["trust", "ambulance", "icb", "region"];
let oo = null;
function zg() {
  const e = { color: { ...Da.color, ...gr.color } }, t = (a, o = /* @__PURE__ */ new Set()) => {
    if (o.has(a)) return;
    o.add(a);
    const s = a.split(".").reduce((l, c) => l ? l[c] : void 0, e);
    if (!s) return;
    const i = s.$value || s.value;
    return typeof i == "string" && /^\{.+\}$/.test(i) ? t(i.slice(1, -1), o) : typeof i == "string" ? i : void 0;
  }, n = {};
  return Co.forEach((a) => {
    const o = t(`color.data-viz.org-level.${a}`);
    o && (n[a] = o);
  }), n;
}
function ic() {
  return oo || (oo = zg()), oo;
}
function Og(e) {
  return ic()[e.toLowerCase()];
}
function Ug(e, t) {
  return Og(e) || ic()[Co[t % Co.length]] || Bt(t);
}
function Wg(e) {
  return Ta(), dr ? dr[e] : void 0;
}
function Gg(e, t) {
  return Wg(e) || wn(t);
}
let so = null;
const Vg = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Yg(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Zg() {
  const e = { color: { ...Da.color, ...gr.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((c, d) => c ? c[d] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return Vg.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function qg() {
  return so || (so = Zg()), so;
}
function Jg(e) {
  return qg()[Yg(e)];
}
function An(e, t) {
  return Jg(e) || Bt(t);
}
const lc = J.createContext(null), xr = () => J.useContext(lc), I1 = ({
  initialHiddenIds: e = [],
  children: t,
  hiddenIds: n,
  onChange: a
}) => {
  const [o, s] = J.useState(() => new Set(e)), i = n !== void 0, l = J.useMemo(() => i ? new Set(n) : o, [i, n, o]), c = J.useCallback((u) => {
    i || s(new Set(u)), a?.(Array.from(u));
  }, [i, a]), d = J.useMemo(() => ({
    hiddenIds: l,
    isHidden: (u) => l.has(u),
    toggle: (u) => {
      const f = new Set(l);
      f.has(u) ? f.delete(u) : f.add(u), c(f);
    },
    showOnly: (u) => {
      c(/* @__PURE__ */ new Set());
    },
    showAll: () => c(/* @__PURE__ */ new Set()),
    setHidden: (u) => c(new Set(Array.isArray(u) ? u : Array.from(u)))
  }), [l, c]);
  return /* @__PURE__ */ r.jsx(lc.Provider, { value: d, children: t });
}, cc = J.createContext(null), rn = () => J.useContext(cc), Xg = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = kn(), o = xr(), [s, i] = J.useState(null), l = J.useRef(/* @__PURE__ */ new Map()), [c, d] = J.useState([]), u = J.useCallback(
    (j, b) => {
      l.current.set(j, b);
    },
    []
  ), f = J.useCallback((j) => {
    l.current.delete(j);
  }, []), h = J.useCallback(
    (j, b) => {
      if (!a) return;
      const { xScale: y, yScale: w } = a;
      let T = null, M = 1 / 0;
      l.current.forEach((A, I) => {
        A.forEach((D, $) => {
          const H = y(D.x), Z = w(D.y), K = H - j, ne = Z - b, B = Math.sqrt(K * K + ne * ne);
          B < M && (M = B, T = {
            seriesId: I,
            index: $,
            x: D.x,
            y: D.y,
            clientX: H,
            clientY: Z
          });
        });
      }), T && M <= t ? i(T) : i(null);
    },
    [a, t]
  ), p = J.useCallback(() => i(null), []);
  J.useEffect(() => {
    if (!s) {
      d([]);
      return;
    }
    if (!a) return;
    const { xScale: j, yScale: b } = a, y = [];
    l.current.forEach((w, T) => {
      w.forEach((M, A) => {
        (s.x instanceof Date && M.x instanceof Date ? M.x.getTime() === s.x.getTime() : M.x === s.x) && y.push({
          seriesId: T,
          index: A,
          x: M.x,
          y: M.y,
          clientX: j(M.x),
          clientY: b(M.y)
        });
      });
    }), y.sort((w, T) => w.seriesId.localeCompare(T.seriesId)), d(y);
  }, [s, a]);
  const x = J.useCallback(
    (j) => {
      if (!s) return;
      const b = l.current.get(s.seriesId);
      if (!b) return;
      let y = s.index + j;
      if (y < 0 || y >= b.length) {
        if (!n) return;
        y = (y + b.length) % b.length;
      }
      const w = b[y];
      if (!a) return;
      const { xScale: T, yScale: M } = a;
      i({
        seriesId: s.seriesId,
        index: y,
        x: w.x,
        y: w.y,
        clientX: T(w.x),
        clientY: M(w.y)
      });
    },
    [s, a, n]
  ), m = J.useCallback(
    (j) => {
      let b = Array.from(l.current.keys());
      if (o && (b = b.filter((H) => !o.isHidden(H))), b.length === 0) return;
      if (!s) {
        const H = b[0], Z = l.current.get(H);
        if (!Z || !a) return;
        const { xScale: K, yScale: ne } = a, B = Z[0];
        i({
          seriesId: H,
          index: 0,
          x: B.x,
          y: B.y,
          clientX: K(B.x),
          clientY: ne(B.y)
        });
        return;
      }
      const y = b.indexOf(s.seriesId);
      if (y === -1) return;
      let w = y + j;
      if (w < 0 || w >= b.length) {
        if (!n) return;
        w = (w + b.length) % b.length;
      }
      const T = b[w], M = l.current.get(T);
      if (!M || !a) return;
      const A = Math.min(s.index, M.length - 1), I = M[A], { xScale: D, yScale: $ } = a;
      i({
        seriesId: T,
        index: A,
        x: I.x,
        y: I.y,
        clientX: D(I.x),
        clientY: $(I.y)
      });
    },
    [s, a, n, o]
  ), g = J.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (o && (j = j.filter((A) => !o.isHidden(A))), j.length === 0) return;
    const b = s ? s.seriesId : j[0], y = l.current.get(b);
    if (!y || y.length === 0 || !a) return;
    const w = y[0], { xScale: T, yScale: M } = a;
    i({
      seriesId: b,
      index: 0,
      x: w.x,
      y: w.y,
      clientX: T(w.x),
      clientY: M(w.y)
    });
  }, [s, a, o]), S = J.useCallback(() => {
    let j = Array.from(l.current.keys());
    if (o && (j = j.filter((I) => !o.isHidden(I))), j.length === 0) return;
    const b = s ? s.seriesId : j[0], y = l.current.get(b);
    if (!y || y.length === 0 || !a) return;
    const w = y.length - 1, T = y[w], { xScale: M, yScale: A } = a;
    i({
      seriesId: b,
      index: w,
      x: T.x,
      y: T.y,
      clientX: M(T.x),
      clientY: A(T.y)
    });
  }, [s, a, o]), N = J.useCallback(
    () => x(1),
    [x]
  ), C = J.useCallback(
    () => x(-1),
    [x]
  ), k = J.useCallback(
    () => m(1),
    [m]
  ), v = J.useCallback(
    () => m(-1),
    [m]
  ), _ = J.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: c,
      focusNearest: h,
      clear: p,
      registerSeries: u,
      unregisterSeries: f,
      focusNextPoint: N,
      focusPrevPoint: C,
      focusNextSeries: k,
      focusPrevSeries: v,
      focusFirstPoint: g,
      focusLastPoint: S
    }),
    [
      s,
      c,
      h,
      p,
      u,
      f,
      N,
      C,
      k,
      v,
      g,
      S
    ]
  );
  return /* @__PURE__ */ r.jsx(cc.Provider, { value: _, children: e });
}, Kg = ({
  series: e,
  seriesIndex: t,
  palette: n,
  showPoints: a,
  focusablePoints: o,
  focusIndex: s,
  parseX: i,
  visibilityMode: l = "remove",
  strokeWidth: c = 1,
  smooth: d = !0,
  gradientFillId: u,
  colors: f
}) => {
  const h = kn();
  if (!h) return null;
  const { xScale: p, yScale: x } = h, g = xr()?.isHidden(e.id) ?? !1, S = g && l === "fade";
  if (g && l === "remove")
    return null;
  const N = rn();
  J.useEffect(() => {
    if (!N) return;
    const b = e.data.map((y) => ({ x: i(y), y: y.y }));
    return N.registerSeries(e.id, b), () => N.unregisterSeries(e.id);
  }, [N, e.id, e.data, i]);
  const C = J.useMemo(
    () => ko(
      e.data,
      (b) => p(i(b)),
      (b) => x(b.y),
      { smooth: d }
    ),
    [e.data, p, x, i, d]
  ), k = J.useMemo(() => {
    if (!e.data.length) return "";
    const [b] = x.domain(), y = So().x((w) => p(i(w))).y0(() => x(b)).y1((w) => x(w.y));
    return d && y.curve(qr), y(e.data) || "";
  }, [e.data, p, x, i, d]), v = f && f[t], _ = e.color || v || (n === "region" ? An(e.id, t) : Bt(t)), j = n === "region" ? Jr(e.id, t) : wn(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: S ? 0.25 : 1,
      "aria-hidden": S ? !0 : void 0,
      children: [
        u && /* @__PURE__ */ r.jsx(
          "path",
          {
            d: k,
            fill: `url(#${u})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: C,
            fill: "none",
            stroke: _,
            strokeWidth: c,
            role: "presentation"
          }
        ),
        a && e.data.map((b, y) => {
          const w = p(i(b)), T = x(b.y), M = o ? 0 : -1, A = !S && (o && y === s || N?.focused?.seriesId === e.id && N.focused.index === y), I = () => {
            N && !S && N.setFocused({
              seriesId: e.id,
              index: y,
              x: i(b),
              y: b.y,
              clientX: w,
              clientY: T
            });
          }, D = () => {
            N && N.focused?.seriesId === e.id && N.focused.index === y && N.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: w,
              cy: T,
              r: A ? 5 : 3.5,
              stroke: A ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : j,
              strokeWidth: A ? 2 : 1,
              fill: A ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : _,
              className: "fdp-line-point",
              tabIndex: S ? -1 : M,
              "aria-label": `${e.label || e.id} ${i(b).toDateString()} value ${b.y}`,
              "data-series": e.id,
              "data-index": y,
              onMouseEnter: I,
              onFocus: I,
              onMouseLeave: D,
              onBlur: D
            },
            y
          );
        })
      ]
    }
  );
}, Qg = ({ polite: e = !0, format: t }) => {
  const n = rn(), [a, o] = J.useState(""), s = J.useRef("");
  return J.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let c;
    if (l && l.length > 1) {
      const d = l.map((f) => `${f.seriesId} ${f.y}`).join("; ");
      c = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${d}`;
    } else
      c = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : e0(i.seriesId, i.x, i.y, i.index);
    if (c !== s.current) {
      s.current = c, o("");
      const d = setTimeout(() => o(c), 10);
      return () => clearTimeout(d);
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
function e0(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const D1 = () => {
  const e = rn(), t = un();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), c = i + 8, d = l - 8, u = a.length > 1, f = n.x instanceof Date ? n.x.toDateString() : String(n.x), h = u ? f : `${f} • ${n.y}`, p = /\d+$/.exec(n.seriesId || ""), x = p ? parseInt(p[0], 10) - 1 : 0, m = Bt(x >= 0 ? x : 0) || "#005eb8", g = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: g, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: g, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: m, stroke: "#fff", strokeWidth: 0.5 }),
    u ? (() => {
      const N = a.map((j) => `${j.seriesId}: ${j.y}`), C = [h, ...N], k = C.reduce((j, b) => Math.max(j, b.length), 0), v = Math.max(90, k * 6.2 + 16), _ = 16 * C.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: c, y: d - _, rx: 4, ry: 4, width: v, height: _, fill: "#212b32", opacity: 0.92 }),
        C.map((j, b) => /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - _ + 6 + 16 * (b + 0.7), fill: "#fff", fontSize: 12, children: j }, b))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: c, y: d - 24, rx: 4, ry: 4, width: Math.max(60, h.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: c + 8, y: d - 8, fill: "#fff", fontSize: 12, children: h })
    ] })
  ] });
}, T1 = ({
  items: e,
  palette: t = "categorical",
  direction: n = "row",
  interactive: a = !1,
  adjustStrokeForWhiteBackground: o = !0,
  hiddenIds: s,
  defaultHiddenIds: i = [],
  onVisibilityChange: l,
  formatAnnouncement: c
}) => {
  const d = xr(), u = !!(d && !a && !l && s === void 0), f = a || u, h = e || [], p = s !== void 0, [x, m] = J.useState(new Set(i)), g = p ? new Set(s) : x, [S, N] = J.useState(""), C = (k) => {
    if (u && d) {
      const M = d.isHidden(k);
      d.toggle(k);
      const I = h.find(($) => $.id === k)?.label || k, D = c ? c(k, M, I) : `${I} ${M ? "shown" : "hidden"}`;
      N(D);
      return;
    }
    if (!f) return;
    const v = new Set(g), _ = v.has(k);
    _ ? v.delete(k) : v.add(k), p || m(v);
    const j = h.filter((M) => !v.has(M.id)).map((M) => M.id), b = Array.from(v);
    l?.(j, b);
    const w = h.find((M) => M.id === k)?.label || k, T = c ? c(k, _, w) : `${w} ${_ ? "shown" : "hidden"}`;
    N(T);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: h.map((k, v) => {
      const _ = k.palette || t, j = k.color || (_ === "region" ? An(k.id, v) : _ === "severity" ? Rg(k.id, v) : _ === "org-level" ? Ug(k.id, v) : Bt(v));
      let b = k.stroke || (_ === "region" ? Jr(k.id, v) : _ === "severity" ? Hg(k.id, v) : _ === "org-level" ? Gg(k.id, v) : wn(v));
      if (o && b) {
        const T = b.trim().toLowerCase();
        (T === "#fff" || T === "#ffffff" || T === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(T)) && (b = "#212b32");
      }
      const y = u && d ? d.isHidden(k.id) : g.has(k.id), w = f ? {
        "aria-pressed": !y,
        "aria-label": `${k.label} (${y ? "show" : "hide"})`,
        onClick: () => C(k.id)
      } : { "aria-label": k.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${y ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: j,
              backgroundImage: k.patternDataUrl ? `url(${k.patternDataUrl})` : void 0,
              backgroundSize: k.patternDataUrl ? "auto" : void 0,
              borderColor: b
            },
            ...w
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: k.label })
      ] }, k.id);
    }) }),
    f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: S })
  ] });
}, L1 = ({
  series: e,
  seriesIndex: t,
  palette: n,
  parseX: a,
  areaOnly: o = !1,
  visibilityMode: s = "remove",
  baselineY: i = 0,
  smooth: l = !0,
  stacked: c,
  gradientFill: d = !0,
  colors: u
}) => {
  const f = kn();
  if (!f) return null;
  const { xScale: h, yScale: p } = f, m = xr()?.isHidden(e.id) ?? !1, g = m && s === "fade";
  if (m && s === "remove") return null;
  const S = rn();
  J.useEffect(() => {
    if (!S) return;
    const j = e.data.map((b) => ({ x: a(b), y: b.y }));
    return S.registerSeries(e.id, j), () => S.unregisterSeries(e.id);
  }, [S, e.id, e.data, a]);
  const N = u && u[t], C = e.color || N || (n === "region" ? An(e.id, t) : Bt(t)), k = J.useMemo(() => c && c.length === e.data.length ? ko(
    e.data,
    (j) => h(a(j)),
    (j) => {
      const b = e.data.indexOf(j);
      return p(c[b].y1);
    },
    { smooth: l }
  ) : ko(
    e.data,
    (j) => h(a(j)),
    (j) => p(j.y),
    { smooth: l }
  ), [e.data, c, h, p, a, l]), v = J.useMemo(() => {
    if (c && c.length === e.data.length) {
      const T = So().x((M) => h(a(M))).y0((M, A) => p(c[A].y0)).y1((M, A) => p(c[A].y1));
      return l && T.curve(qr), T(e.data) || "";
    }
    const [j, b] = p.domain();
    let y = i;
    y < j ? y = j : y > b && (y = b);
    const w = So().x((T) => h(a(T))).y0(() => p(y)).y1((T) => p(T.y));
    return l && w.curve(qr), w(e.data) || "";
  }, [e.data, c, h, p, a, i, l]), _ = J.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: g ? 0.25 : 1,
      "aria-hidden": g ? !0 : void 0,
      children: [
        d && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: _, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: C, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: C, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: v,
            fill: d ? `url(#${_})` : C,
            ...d ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: k, fill: "none", stroke: C, strokeWidth: 1 })
      ]
    }
  );
}, $1 = ({
  series: e,
  seriesIndex: t,
  seriesCount: n,
  palette: a,
  parseX: o,
  focusable: s = !0,
  widthFactor: i = 0.8,
  groupGap: l = 2,
  barWidth: c,
  adaptive: d = !1,
  adaptiveGroupOccupancy: u = 0.9,
  visibilityMode: f = "remove",
  colorMode: h = "series",
  allSeries: p,
  stacked: x,
  gapRatio: m = 0.15,
  minBarWidth: g,
  gradientFill: S = !1,
  gradientStrokeMatch: N = !0,
  opacity: C = 1,
  fadedOpacity: k = 0.25,
  flatFillOpacity: v = 1,
  colors: _
}) => {
  const j = Math.max(0, m), b = kn(), y = un();
  if (!b || !y) return null;
  const { xScale: w, yScale: T } = b, A = xr()?.isHidden(e.id) ?? !1, I = A && f === "fade";
  if (A && f === "remove") return null;
  const D = rn();
  J.useEffect(() => {
    if (!D) return;
    const Y = e.data.map((Q) => ({ x: o(Q), y: Q.y }));
    return D.registerSeries(e.id, Y), () => D.unregisterSeries(e.id);
  }, [D, e.id, e.data, o]);
  const $ = typeof w.bandwidth == "function", H = $ ? w.bandwidth() : void 0, Z = J.useMemo(() => {
    if (H != null) return H;
    const Y = p && p.length ? p : [e], Q = [];
    Y.forEach((le) => {
      le.data.forEach((be) => {
        const pe = w(o(be));
        Number.isFinite(pe) && Q.push(pe);
      });
    });
    const de = Q.sort((le, be) => le - be);
    if (de.length <= 1) return 40;
    const V = [];
    for (let le = 1; le < de.length; le++)
      V.push(de[le] - de[le - 1]);
    return V.sort((le, be) => le - be), (V[Math.floor(V.length / 2)] || 40) * i;
  }, [e.data, p, w, o, i, H]), { basePerBar: K } = J.useMemo(() => {
    if ($) {
      const de = Z, V = Math.max(
        1,
        (de - l * (n - 1)) / n
      ), ae = e.barWidth ?? c;
      let le = ae ? Math.min(ae, de) : V;
      if (d) {
        const be = de * Math.min(1, Math.max(0.05, u)), pe = Math.max(
          1,
          (be - l * (n - 1)) / n
        );
        le = ae ? Math.min(le, pe) : pe;
      }
      return { basePerBar: le };
    }
    const Y = e.barWidth ?? c, Q = Math.max(
      1,
      (Z - l * (n - 1)) / n
    );
    if (d) {
      const de = p && p.length ? p : [e], V = [];
      de.forEach(
        (Ve) => Ve.data.forEach((Te) => {
          const Le = w(o(Te));
          Number.isFinite(Le) && V.push(Le);
        })
      ), V.sort((Ve, Te) => Ve - Te);
      const ae = [];
      for (let Ve = 1; Ve < V.length; Ve++)
        ae.push(V[Ve] - V[Ve - 1]);
      ae.sort((Ve, Te) => Ve - Te);
      const be = (ae[Math.floor(ae.length / 2)] || Z) * Math.min(1, Math.max(0.05, u)), pe = Math.max(
        1,
        (be - l * (n - 1)) / n
      );
      return { basePerBar: Y ? Math.min(Y, pe) : pe };
    }
    return Y ? { basePerBar: Math.min(Y, Q) } : { basePerBar: Q };
  }, [
    $,
    Z,
    l,
    n,
    c,
    e.barWidth,
    d,
    u,
    p,
    w,
    o
  ]), ne = J.useMemo(() => {
    if ($) return [];
    const Y = [];
    return (p && p.length ? p : [e]).forEach(
      (de) => de.data.forEach((V) => {
        const ae = w(o(V));
        Number.isFinite(ae) && Y.push(ae);
      })
    ), Y.sort((de, V) => de - V), Array.from(new Set(Y));
  }, [$, p, e, w, o]), B = J.useMemo(() => {
    if ($)
      return [];
    if (!ne.length) return [];
    if (ne.length === 1)
      return [
        { center: ne[0], left: 0, right: y.innerWidth }
      ];
    const Y = [];
    for (let Q = 0; Q < ne.length; Q++) {
      const de = ne[Q], V = Q === 0 ? 0 : (ne[Q - 1] + de) / 2, ae = Q === ne.length - 1 ? y.innerWidth : (de + ne[Q + 1]) / 2;
      Y.push({
        center: de,
        left: Math.max(0, V),
        right: Math.min(y.innerWidth, ae)
      });
    }
    return Y;
  }, [$, ne, y.innerWidth]), F = J.useMemo(() => {
    if ($ || !B.length)
      return;
    const Y = Math.min(1, Math.max(0.05, i)), Q = B.map((be) => Math.max(2, be.right - be.left)), de = Q.map(
      (be) => Math.max(2, Math.min(be - 1, be * Y))
    );
    let V = Math.min(...de);
    if (g)
      if (n <= 1) {
        const be = Math.min(...Q.map((pe) => pe - 1));
        be >= g && V < g && (V = Math.min(be, g));
      } else {
        const be = Math.min(...Q.map((Ie) => Ie - 1)), pe = g * n + (n - 1) * (g * j);
        pe <= be && V < pe && (V = pe);
      }
    if (n <= 1)
      return g && V < g && Q.every((pe) => pe >= g) ? { groupWidth: g, barWidth: g } : { groupWidth: V, barWidth: V };
    let ae = V / (n + (n - 1) * j);
    return ae < 1 && (ae = 1), g && ae < g && g * n + (n - 1) * (g * j) <= V && (ae = g), { groupWidth: ae * n + (n - 1) * (ae * j), barWidth: ae };
  }, [
    $,
    B,
    i,
    n,
    j,
    g
  ]), L = _ && _[t] ? _[t] : void 0, G = e.color || L || (a === "region" ? An(e.id, t) : Bt(t)), E = a === "region" ? Jr(e.id, t) : wn(t), O = N && (e.color || L) ? G : E, P = Number.isFinite(T(0)) ? T(0) : T.range()[0], X = J.useId();
  return x && x.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: I ? k : C,
      "aria-hidden": I ? !0 : void 0,
      children: [
        S && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: X,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: G, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: G,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: G,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((Y, Q) => {
          const de = o(Y), V = w($ ? Y.x : de);
          let ae, le;
          if ($)
            ae = Z, le = V;
          else {
            const q = B.find(
              (se) => Math.abs(se.center - V) < 0.5
            );
            if (!q || !F)
              ae = K, le = V - K / 2;
            else {
              const { groupWidth: se } = F;
              ae = se;
              let he = V - se / 2;
              he < q.left && (he = q.left), he + se > q.right && (he = Math.max(q.left, q.right - se)), le = he;
            }
          }
          const be = x[Q], pe = T(be.y0), Ie = T(be.y1), Ve = Math.min(pe, Ie), Te = Math.abs(Ie - pe) || 1;
          if (!$ && g && ae < g) {
            const q = B.find(
              (se) => Math.abs(se.center - V) < 0.5
            );
            if (q) {
              const se = Math.max(2, q.right - q.left - 1), he = Math.min(se, g);
              he > ae && (ae = he, le = Math.max(
                q.left,
                Math.min(q.right - ae, V - ae / 2)
              ));
            }
          }
          const Le = !I && D?.focused?.seriesId === e.id && D.focused.index === Q, _e = () => {
            !D || I || D.setFocused({
              seriesId: e.id,
              index: Q,
              x: de,
              y: be.y1 - be.y0,
              clientX: le + ae / 2,
              clientY: Ve
            });
          }, R = () => {
            D?.focused?.seriesId === e.id && D.focused.index === Q && D.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: le,
              y: Ve,
              width: ae,
              height: Te,
              fill: S ? `url(#${X})` : G,
              ...S ? {} : { fillOpacity: v },
              stroke: Le ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : S && N ? G : void 0,
              strokeWidth: Le ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: I || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${be.y1 - be.y0}`,
              onMouseEnter: _e,
              onFocus: _e,
              onMouseLeave: R,
              onBlur: R
            },
            Q
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: I ? k : C,
      "aria-hidden": I ? !0 : void 0,
      children: [
        S && /* @__PURE__ */ r.jsxs("defs", { children: [
          h === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: X,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: G, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: G,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: G,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          h === "category" && e.data.map((Y, Q) => {
            const V = _ && _[Q] || (a === "region" ? An(String(Y.x), Q) : Bt(Q)), ae = `${X}-${Q}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: ae,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: V, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: V, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: V, stopOpacity: 0.06 })
                ]
              },
              ae
            );
          })
        ] }),
        e.data.map((Y, Q) => {
          const de = o(Y), V = w($ ? Y.x : de);
          let ae, le;
          if ($) {
            const z = Z;
            if (n <= 1)
              le = z, ae = V;
            else {
              le = Math.max(
                1,
                z / (n + (n - 1) * j)
              );
              const W = le * j, oe = le * n + W * (n - 1);
              ae = V + (z - oe) / 2 + t * (le + W);
            }
          } else {
            const z = B.find((W) => W.center === V);
            if (!z || !F)
              le = K, ae = V - K / 2, g && le < g && (le = g, ae = V - le / 2);
            else {
              const { barWidth: W } = F;
              le = W;
              const oe = n > 1 ? W * j : 0, ee = le * n + oe * (n - 1);
              let re = V - ee / 2;
              re < z.left && (re = z.left), re + ee > z.right && (re = Math.max(z.left, z.right - ee)), ae = re + t * (le + oe);
            }
            if (g && le < g) {
              const W = B.find(
                (oe) => Math.abs(oe.center - V) < 0.5
              );
              if (W) {
                const oe = Math.max(2, W.right - W.left - 1), ee = Math.min(oe, g);
                if (ee > le)
                  if (n <= 1)
                    le = ee, ae = Math.max(
                      W.left,
                      Math.min(W.right - le, V - le / 2)
                    );
                  else {
                    const re = ee * j, ce = ee * n + re * (n - 1);
                    if (ce <= W.right - W.left - 1) {
                      le = ee;
                      const ue = ce;
                      let ve = V - ue / 2;
                      ve < W.left && (ve = W.left), ve + ue > W.right && (ve = Math.max(
                        W.left,
                        W.right - ue
                      )), ae = ve + t * (le + re);
                    }
                  }
              }
            }
          }
          const be = ae + le / 2, pe = T(Y.y), Ie = Math.min(P, pe), Ve = Math.abs(P - pe), Te = !I && D?.focused?.seriesId === e.id && D.focused.index === Q, Le = () => {
            !D || I || D.setFocused({
              seriesId: e.id,
              index: Q,
              x: de,
              y: Y.y,
              clientX: be,
              clientY: pe
            });
          }, _e = () => {
            D?.focused?.seriesId === e.id && D.focused.index === Q && D.clear();
          }, R = h === "category" && _ ? _[Q] : void 0, q = h === "category" ? R || (a === "region" ? An(String(Y.x), Q) : Bt(Q)) : G, se = h === "category" ? `${X}-${Q}` : X, he = S && N ? q : h === "category" ? a === "region" ? Jr(String(Y.x), Q) : wn(Q) : O, me = Te ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : he || q;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ae,
              y: Ie,
              width: le,
              height: Ve || 1,
              fill: S ? `url(#${se})` : q,
              ...S ? {} : { fillOpacity: v },
              stroke: me,
              strokeWidth: Te ? 2 : 1,
              className: "fdp-bar",
              tabIndex: I || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${de instanceof Date ? de.toDateString() : de} value ${Y.y}`,
              onMouseEnter: Le,
              onFocus: Le,
              onMouseLeave: _e,
              onBlur: _e
            },
            Q
          );
        })
      ]
    }
  );
}, A1 = ({
  series: e,
  innerWidth: t,
  innerHeight: n,
  paddingInner: a = 0.1,
  paddingOuter: o = 0.05,
  children: s,
  yTickCount: i = 5
}) => {
  const l = un(), c = t ?? l?.innerWidth ?? 0, d = n ?? l?.innerHeight ?? 0, u = J.useMemo(() => e.flatMap((g) => g.data), [e]), f = J.useMemo(() => {
    const g = /* @__PURE__ */ new Set();
    return u.forEach((S) => g.add(S.x)), Array.from(g);
  }, [u]), h = J.useMemo(
    () => Math.max(0, ...u.map((g) => g.y)),
    [u]
  ), p = J.useMemo(
    () => hl().domain(f).range([0, c]).paddingInner(a).paddingOuter(o),
    [f, c, a, o]
  ), x = J.useMemo(
    () => Hr().domain([0, h]).nice().range([d, 0]),
    [h, d]
  ), m = J.useMemo(
    () => ({
      xScale: p,
      yScale: x,
      getXTicks: () => f,
      getYTicks: (g = i) => x.ticks(g)
    }),
    [p, x, f, i]
  );
  return /* @__PURE__ */ r.jsx(xs.Provider, { value: m, children: s });
}, E1 = ({
  title: e,
  description: t,
  source: n,
  table: a,
  className: o,
  id: s,
  message: i = "Interactive chart loading…",
  forceFallback: l = !1
}) => {
  const c = J.useId(), d = s || c, u = t ? `${d}-desc` : void 0, f = n ? `${d}-src` : void 0, h = typeof window < "u" && !l;
  return /* @__PURE__ */ r.jsxs(
    "figure",
    {
      id: d,
      className: Pt("fdp-chart fdp-chart--noscript", o),
      "aria-labelledby": `${d}-title`,
      "aria-describedby": Pt(u, f),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ r.jsx("header", { className: "fdp-chart__header", children: /* @__PURE__ */ r.jsx("h3", { id: `${d}-title`, className: "fdp-chart__title", children: e }) }),
        t && /* @__PURE__ */ r.jsx("p", { id: u, className: "fdp-chart__description", children: t }),
        !h && /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: i }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-chart__fallback", role: "group", "aria-label": e, children: [
          /* @__PURE__ */ r.jsx("noscript", { children: /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ r.jsx(nn, { ...a }) }) }),
          /* @__PURE__ */ r.jsx("div", { className: "fdp-chart__table", "data-fallback-table": !0, children: /* @__PURE__ */ r.jsx(nn, { ...a }) })
        ] }),
        n && /* @__PURE__ */ r.jsx("figcaption", { className: "fdp-chart__caption", children: n && /* @__PURE__ */ r.jsxs("small", { id: f, className: "fdp-chart__source", children: [
          "Source: ",
          n
        ] }) })
      ]
    }
  );
}, F1 = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
  const o = J.useRef(null);
  return J.useEffect(() => {
    const s = o.current;
    if (!s) return;
    const i = () => {
      const l = Array.from(s.querySelectorAll(e));
      if (l.length === 0) return;
      const c = [];
      l.forEach((d) => {
        d.classList.contains("fdp-chart--enhanced") || (d.classList.add("fdp-chart--enhanced"), c.push(d));
      }), c.length && t && t(c);
    };
    if (n > 0) {
      if (typeof window > "u") return;
      const l = window.setTimeout(i, n);
      return () => window.clearTimeout(l);
    }
    i();
  }, [e, t, n]), /* @__PURE__ */ r.jsx("div", { ref: o, children: a });
}, t0 = ({
  label: e,
  value: t,
  unit: n,
  delta: a,
  status: o = "neutral",
  variant: s = "default",
  subtitle: i,
  metadata: l,
  trendData: c,
  loading: d = !1,
  error: u,
  valueFormatter: f,
  className: h,
  style: p,
  id: x,
  announceDelta: m = !0,
  visual: g
}) => {
  const S = J.useId(), N = x || S, C = `${N}-label`, k = `${N}-value`, v = `${N}-delta`, _ = typeof t == "number" && !Number.isNaN(t), j = d ? "—" : u ? "" : _ ? f ? f(t) : t.toLocaleString() : t;
  let b, y = "", w = "";
  if (a && !d && !u) {
    b = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const T = Math.abs(a.value), M = b === "up" ? `+${T}` : b === "down" ? `-${T}` : "0", A = a.isPercent ? "%" : "";
    if (y = `${M}${A}`, a.ariaLabel)
      w = a.ariaLabel;
    else {
      const I = a.invert ? b === "down" : b === "up";
      w = `${b === "neutral" ? "no change" : b === "up" ? "up" : "down"} ${T}${A}${b === "neutral" ? "" : I ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Pt(
        "fdp-metric-card",
        s && `fdp-metric-card--${s}`,
        o && `fdp-metric-card--status-${o}`,
        d && "fdp-metric-card--loading",
        u && "fdp-metric-card--error",
        h
      ),
      style: p,
      role: "group",
      "aria-labelledby": C,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: C, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: k, className: "fdp-metric-card__value", children: d ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : u ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: u }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: j }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: v,
              "aria-label": w,
              className: Pt(
                "fdp-metric-card__delta",
                b && `fdp-metric-card__delta--${b}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: y }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          c && c.length > 0 && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        g && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__visual", "aria-hidden": "true", children: g }),
        m && a && !a.ariaLabel && !d && !u && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: w })
      ] })
    }
  );
};
var ht = /* @__PURE__ */ ((e) => (e.Xs = "xs", e.Sm = "sm", e.Md = "md", e.Lg = "lg", e.Xl = "xl", e.Full = "full", e))(ht || {}), dc = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(dc || {}), cn = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(cn || {}), qe = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.Suppressed = "suppressed", e))(qe || {});
const ys = [
  "single_point",
  "two_sigma",
  "shift",
  "trend"
  /* Trend */
];
ys.reduce(
  (e, t, n) => (e[t] = n + 1, e),
  {}
);
const n0 = {
  single_point: "Single point beyond process limit",
  two_sigma: "Two of three beyond 2σ on one side",
  shift: "Sustained shift (run)",
  trend: "Monotonic trend"
}, r0 = {
  single_point: "point",
  two_sigma: "cluster",
  shift: "sustained",
  trend: "sustained"
  /* Sustained */
}, uc = ys.reduce(
  (e, t, n) => (e[t] = {
    id: t,
    rank: n + 1,
    label: n0[t],
    category: r0[t],
    participatesInRanking: !0
  }, e),
  {}
);
ys.map(
  (e) => uc[e]
);
var ur = /* @__PURE__ */ ((e) => (e.SinglePointAbove = "single_above", e.SinglePointBelow = "single_below", e.TwoOfThreeAbove = "two_of_three_above", e.TwoOfThreeBelow = "two_of_three_below", e.FourOfFiveAbove = "four_of_five_above", e.FourOfFiveBelow = "four_of_five_below", e.ShiftHigh = "shift_high", e.ShiftLow = "shift_low", e.TrendIncreasing = "trend_inc", e.TrendDecreasing = "trend_dec", e.FifteenInnerThird = "fifteen_inner_third", e))(ur || {}), dn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(dn || {}), fc = /* @__PURE__ */ ((e) => (e.Shift = "shift", e.Trend = "trend", e.Point = "point", e))(fc || {});
const En = {
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
function La(e) {
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
function $a(e) {
  switch (e) {
    case qe.Improvement:
      return "Improvement signal";
    case qe.Concern:
      return "Concern signal";
    case qe.Neither:
      return "Common cause variation";
    case qe.Suppressed:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function hc(e) {
  switch (e) {
    case dn.Pass:
      return "Target met";
    case dn.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function a0(e, t, n) {
  if (e == null || !Number.isFinite(t) || t <= 0) return null;
  const a = Math.abs((n - e) / t);
  return a < 1 ? "Within 1σ" : a < 2 ? "Between 1–2σ" : a < 3 ? "Between 2–3σ" : "Beyond 3σ";
}
const Lt = {
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
function pc(e) {
  return e ? Lt[e]?.token ?? Lt.neither.token : Lt.neither.token;
}
function o0(e) {
  return e ? Lt[e]?.hex ?? Lt.neither.hex : Lt.neither.hex;
}
var gn = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.Uncertain = "uncertain", e))(gn || {});
const s0 = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, i0 = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var mt = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(mt || {}), Ge = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(Ge || {}), Nt = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Nt || {}), Pe = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Pe || {});
const l0 = (e) => {
  const t = e.replace("#", ""), n = parseInt(t.slice(0, 2), 16) / 255, a = parseInt(t.slice(2, 4), 16) / 255, o = parseInt(t.slice(4, 6), 16) / 255, s = [n, a, o].map(
    (l) => l <= 0.03928 ? l / 12.92 : Math.pow((l + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2] < 0.55 ? "#ffffff" : "#212b32";
}, Aa = {
  special_cause_deteriorating: {
    hex: Lt.concern.hex,
    judgement: "deteriorating",
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  special_cause_improving: {
    hex: Lt.improvement.hex,
    judgement: "improving",
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  common_cause: {
    hex: Lt.neither.hex,
    judgement: "none",
    label: "Common Cause",
    description: "Common cause variation only – no special cause detected."
  },
  special_cause_no_judgement: {
    hex: Lt.suppressed.hex,
    judgement: "no_judgement",
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(Aa).forEach((e) => {
  e.text || (e.text = l0(e.hex));
});
const mc = (e) => Aa[e], bs = (e) => Aa[e].judgement || "none", Li = {
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
function c0(e, t) {
  let n;
  return e === "common_cause" ? n = Li.common : n = Li.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
let jo = null;
try {
  jo = require("@nhsdigital/fdp-design-system/dist/js/tokens.json")?.color?.["data-viz"]?.spc || null;
} catch {
}
const _t = (e, t) => {
  if (!jo) return t;
  const n = e.split(".");
  let a = jo;
  for (const s of n) {
    if (a == null) break;
    a = a[s];
  }
  const o = a;
  return o == null ? t : typeof o == "string" || typeof o == "number" ? String(o) : o.$value != null ? String(o.$value) : o.value != null ? String(o.value) : t;
}, Ea = () => ({
  // Lightened defaults (previous 0.18 -> 0.12, 0.06 -> 0.03) to reduce intensity of wash.
  start: _t("gradient.stop.start-opacity", "0.12"),
  mid: _t("gradient.stop.mid-opacity", "0.03"),
  end: _t("gradient.stop.end-opacity", "0"),
  triStart: _t(
    "gradient.stop.triangle-start-opacity",
    _t("gradient.stop.start-opacity", "0.12")
  ),
  triMid: _t(
    "gradient.stop.triangle-mid-opacity",
    _t("gradient.stop.mid-opacity", "0.03")
  ),
  triEnd: _t(
    "gradient.stop.triangle-end-opacity",
    _t("gradient.stop.end-opacity", "0")
  )
}), Fa = {
  improvement: "improvement",
  concern: "concern",
  noJudgement: "no-judgement",
  common: "common-cause"
}, Pa = {
  improvement: "#00B0F0",
  concern: "#E46C0A",
  noJudgement: "#490092",
  common: "#A6A6A6"
}, gc = () => _t(Fa.improvement, Pa.improvement), xc = () => _t(Fa.concern, Pa.concern), d0 = () => _t(Fa.noJudgement, Pa.noJudgement), hn = () => _t(Fa.common, Pa.common);
function Mr(e) {
  switch (e) {
    case qe.Improvement:
      return gc();
    case qe.Concern:
      return xc();
    case qe.Neither:
    case qe.Suppressed:
    default:
      return hn();
  }
}
function yc(e) {
  switch (e) {
    case Pe.SpecialCauseImproving:
      return gc();
    case Pe.SpecialCauseDeteriorating:
      return xc();
    case Pe.SpecialCauseNoJudgement:
      return d0();
    case Pe.CommonCause:
    default:
      return hn();
  }
}
var Mt = /* @__PURE__ */ ((e) => (e.XmR = "XmR", e.T = "T", e.G = "G", e))(Mt || {}), Xe = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(Xe || {}), Ee = /* @__PURE__ */ ((e) => (e.ImprovementHigh = "ImprovementHigh", e.ImprovementLow = "ImprovementLow", e.ConcernHigh = "ConcernHigh", e.ConcernLow = "ConcernLow", e.NeitherHigh = "NeitherHigh", e.NeitherLow = "NeitherLow", e.CommonCause = "CommonCause", e))(Ee || {}), ct = /* @__PURE__ */ ((e) => (e.SinglePoint = "SinglePoint", e.TwoSigma = "TwoSigma", e.Shift = "Shift", e.Trend = "Trend", e))(ct || {}), xn = /* @__PURE__ */ ((e) => (e.Upwards = "Upwards", e.Downwards = "Downwards", e.Same = "Same", e))(xn || {}), Et = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Et || {}), Fn = /* @__PURE__ */ ((e) => (e.Improvement = "Improvement", e.Concern = "Concern", e))(Fn || {}), Dn = /* @__PURE__ */ ((e) => (e.SqlPrimeThenRule = "SqlPrimeThenRule", e.PreferImprovement = "PreferImprovement", e.RuleHierarchy = "RuleHierarchy", e))(Dn || {}), wt = /* @__PURE__ */ ((e) => (e.FavourableSide = "FavourableSide", e.CrossingAfterFavourable = "CrossingAfterFavourable", e.ExtremeFavourable = "ExtremeFavourable", e.FirstFavourable = "FirstFavourable", e.LongestFavourable = "LongestFavourable", e.LastFavourable = "LastFavourable", e.UnfavourableSide = "UnfavourableSide", e.CrossingAfterUnfavourable = "CrossingAfterUnfavourable", e.ExtremeUnfavourable = "ExtremeUnfavourable", e.FirstUnfavourable = "FirstUnfavourable", e.LongestUnfavourable = "LongestUnfavourable", e.LastUnfavourable = "LastUnfavourable", e))(wt || {}), zt = /* @__PURE__ */ ((e) => (e.Off = "Off", e.AutoWhenConflict = "AutoWhenConflict", e.Always = "Always", e))(zt || {}), Ft = /* @__PURE__ */ ((e) => (e.Info = "info", e.Warning = "warning", e.Error = "error", e))(Ft || {}), Xr = /* @__PURE__ */ ((e) => (e.Config = "config", e.Data = "data", e.Limits = "limits", e.SpecialCause = "special_cause", e.Baseline = "baseline", e.Logic = "logic", e.Target = "target", e.Ghost = "ghost", e.Partition = "partition", e))(Xr || {}), Kr = /* @__PURE__ */ ((e) => (e.UnknownChartType = "unknown_chart_type", e.InsufficientPointsGlobal = "insufficient_points_global", e.VariationConflictRow = "variation_conflict_row", e.NullValuesExcluded = "null_values_excluded", e.TargetIgnoredRareEvent = "target_ignored_rare_event", e.GhostRowsRareEvent = "ghost_rows_rare_event", e.InsufficientPointsPartition = "insufficient_points_partition", e.BaselineWithSpecialCause = "baseline_with_special_cause", e.PartitionCapApplied = "partition_cap_applied", e.GlobalCapApplied = "global_cap_applied", e))(Kr || {});
const on = {
  [ct.SinglePoint]: 1,
  [ct.TwoSigma]: 2,
  [ct.Shift]: 3,
  [ct.Trend]: 4
}, $i = 3.267, u0 = 2.66, Ai = 0.2777;
function We(e) {
  return typeof e == "number" && !Number.isNaN(e);
}
function Tn(e) {
  return e.reduce((t, n) => t + n, 0) / (e.length || 1);
}
function Ei(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!(t[o] || !We(s))) {
      if (a !== null) {
        const i = e[a];
        We(i) && (n[o] = Math.abs(s - i));
      }
      a = o;
    }
  }
  return n;
}
function Fi(e, t) {
  const n = e.filter(We);
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = n.slice();
  if (t) {
    const s = Tn(a), i = $i * s;
    a = a.filter((l) => l <= i);
  }
  const o = Tn(a);
  return { mrMean: o, mrUcl: $i * o };
}
function Pi(e, t) {
  if (!We(e) || !We(t))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const n = u0 * t, a = 2 / 3 * n, o = 1 / 3 * n;
  return {
    upperProcessLimit: e + n,
    lowerProcessLimit: e - n,
    upperTwoSigma: e + a,
    lowerTwoSigma: e - a,
    upperOneSigma: e + o,
    lowerOneSigma: e - o
  };
}
function f0(e, t, n, a) {
  if (e === Mt.T) {
    const f = t.map((b) => We(b) && b > 0 ? Math.pow(b, Ai) : null), h = Ei(f, n), p = Fi(h, a), x = f.filter((b, y) => !n[y] && We(b)), m = x.length ? Tn(x) : NaN, g = Pi(m, p.mrMean), S = (b) => We(b) && b > 0 ? Math.pow(b, 1 / Ai) : null, N = We(g.upperProcessLimit) ? S(g.upperProcessLimit) : null, C = We(g.lowerProcessLimit) && g.lowerProcessLimit > 0 ? S(g.lowerProcessLimit) : null, k = We(g.upperTwoSigma) ? S(g.upperTwoSigma) : null, v = We(g.lowerTwoSigma) && g.lowerTwoSigma > 0 ? S(g.lowerTwoSigma) : null, _ = We(g.upperOneSigma) ? S(g.upperOneSigma) : null, j = We(g.lowerOneSigma) && g.lowerOneSigma > 0 ? S(g.lowerOneSigma) : null;
    return {
      mean: We(m) && m > 0 ? S(m) : null,
      mr: h,
      mrMean: p.mrMean,
      mrUcl: p.mrUcl,
      upperProcessLimit: N,
      lowerProcessLimit: C,
      upperTwoSigma: k,
      lowerTwoSigma: v,
      upperOneSigma: _,
      lowerOneSigma: j
    };
  }
  if (e === Mt.G) {
    const f = t.filter((T, M) => !n[M] && We(T)), h = f.length ? Tn(f) : NaN, p = We(h) ? 1 / (h + 1) : NaN, x = (T) => {
      if (!We(p) || p <= 0 || p >= 1) return NaN;
      const M = Math.ceil(Math.log(1 - T) / Math.log(1 - p)) - 1;
      return Math.max(0, M);
    }, m = 135e-5, g = 1 - 135e-5, S = 0.02275, N = 1 - 0.02275, C = 0.158655, k = 1 - 0.158655, v = x(g), _ = x(m), j = x(N), b = x(S), y = x(k), w = x(C);
    return {
      mean: We(h) ? h : null,
      mr: new Array(t.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: We(v) ? v : null,
      lowerProcessLimit: We(_) ? _ : null,
      upperTwoSigma: We(j) ? j : null,
      lowerTwoSigma: We(b) ? b : null,
      upperOneSigma: We(y) ? y : null,
      lowerOneSigma: We(w) ? w : null
    };
  }
  if (e !== Mt.XmR)
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
  const o = Ei(t, n), s = o.filter(We), i = s.length ? Tn(s) : NaN, l = We(i) ? 3.267 * i : NaN;
  let c = NaN;
  {
    const f = t.reduce((h, p, x) => {
      if (n[x] || !We(p)) return h;
      if (!a)
        return h.push(p), h;
      const m = o[x];
      return (m === null || !We(l) || We(m) && m <= l) && h.push(p), h;
    }, []);
    c = f.length ? Tn(f) : NaN;
  }
  const d = Fi(o, a), u = Pi(c, d.mrMean);
  return {
    mean: c,
    mr: o,
    mrMean: d.mrMean,
    mrUcl: d.mrUcl,
    ...u
  };
}
function h0(e, t) {
  const n = e.map((c, d) => d).filter((c) => !e[c].ghost && We(e[c].value)), a = (c) => e[c], o = t.shiftPoints, s = t.trendPoints;
  let i = [], l = [];
  for (const c of n) {
    const d = a(c);
    if (!We(d.mean) || !We(d.value) ? (i = [], l = []) : d.value > d.mean ? (i.push(c), l = []) : d.value < d.mean ? (l.push(c), i = []) : (i = [], l = []), i.length >= o)
      for (const u of i) a(u).shiftUp = !0;
    if (l.length >= o)
      for (const u of l) a(u).shiftDown = !0;
  }
  for (let c = 0; c <= n.length - 3; c++) {
    const u = n.slice(c, c + 3).map(a);
    if (!u.every((k) => We(k.value) && We(k.mean)))
      continue;
    const f = u[0].mean, h = u.every((k) => k.value > f), p = u.every((k) => k.value < f);
    if (!h && !p)
      continue;
    const x = u[0].upperTwoSigma ?? 1 / 0, m = u[0].lowerTwoSigma ?? -1 / 0, g = u[0].upperProcessLimit ?? 1 / 0, S = u[0].lowerProcessLimit ?? -1 / 0, N = u.filter((k) => t.twoSigmaIncludeAboveThree ? k.value > x : k.value > x && k.value <= g), C = u.filter((k) => t.twoSigmaIncludeAboveThree ? k.value < m : k.value < m && k.value >= S);
    h && N.length >= 2 && N.forEach((k) => k.twoSigmaUp = !0), p && C.length >= 2 && C.forEach((k) => k.twoSigmaDown = !0);
  }
  if (t.enableFourOfFiveRule)
    for (let c = 0; c <= n.length - 5; c++) {
      const u = n.slice(c, c + 5).map(a);
      if (!u.every((N) => We(N.value) && We(N.mean)))
        continue;
      const f = u[0].mean, h = u.every((N) => N.value > f), p = u.every((N) => N.value < f);
      if (!h && !p)
        continue;
      const x = u[0].upperOneSigma ?? 1 / 0, m = u[0].lowerOneSigma ?? -1 / 0, g = u.filter((N) => N.value > x), S = u.filter((N) => N.value < m);
      h && g.length >= 4 && g.forEach((N) => N.fourOfFiveUp = !0), p && S.length >= 4 && S.forEach((N) => N.fourOfFiveDown = !0);
    }
  for (let c = 0; c <= n.length - s; c++) {
    const d = n.slice(c, c + s), u = d.map(a);
    if (!u.every((p) => We(p.value)))
      continue;
    let f = !0, h = !0;
    for (let p = 1; p < u.length && (u[p].value > u[p - 1].value || (f = !1), u[p].value < u[p - 1].value || (h = !1), !(!f && !h)); p++)
      ;
    f && d.forEach((p) => a(p).trendUp = !0), h && d.forEach((p) => a(p).trendDown = !0);
  }
}
function bc(e) {
  const t = [], n = [];
  e.singlePointUp && t.push({
    id: ct.SinglePoint,
    rank: on[ct.SinglePoint]
  }), e.singlePointDown && n.push({
    id: ct.SinglePoint,
    rank: on[ct.SinglePoint]
  }), e.twoSigmaUp && t.push({
    id: ct.TwoSigma,
    rank: on[ct.TwoSigma]
  }), e.twoSigmaDown && n.push({
    id: ct.TwoSigma,
    rank: on[ct.TwoSigma]
  }), e.shiftUp && t.push({ id: ct.Shift, rank: on[ct.Shift] }), e.shiftDown && n.push({ id: ct.Shift, rank: on[ct.Shift] }), e.trendUp && t.push({ id: ct.Trend, rank: on[ct.Trend] }), e.trendDown && n.push({ id: ct.Trend, rank: on[ct.Trend] });
  const a = t.reduce((i, l) => Math.max(i, l.rank), 0), o = n.reduce((i, l) => Math.max(i, l.rank), 0), s = a > o ? xn.Upwards : o > a ? xn.Downwards : xn.Same;
  return { up: t, dn: n, upMax: a, dnMax: o, primeDirection: s };
}
function Ri(e, t) {
  const n = t === Xe.Up ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : t === Xe.Down ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : !1, a = t === Xe.Up ? e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown : t === Xe.Down ? e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp : !1;
  return { aligned: n, opposite: a };
}
function Bi(e, t, n, a = !1, o, s, i = !1) {
  const { up: l, dn: c, upMax: d, dnMax: u, primeDirection: f } = bc(e);
  e.primeDirection = f;
  const h = e.specialCauseImprovementValue, p = e.specialCauseConcernValue;
  e.specialCauseImprovementValue !== null && e.specialCauseConcernValue !== null && p0({ row: e, metric: t, metricConflictRule: n, preferImprovementWhenConflict: a, preferTrendWhenConflict: i, primeDirection: f, conflictStrategy: o, ruleHierarchy: s }), t === Xe.Up ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementHigh : e.specialCauseConcernValue !== null ? Ee.ConcernLow : Ee.CommonCause : t === Xe.Down ? e.variationIcon = e.specialCauseImprovementValue !== null ? Ee.ImprovementLow : e.specialCauseConcernValue !== null ? Ee.ConcernHigh : Ee.CommonCause : e.variationIcon = Ee.CommonCause;
  const x = e.specialCauseImprovementValue !== null ? Et.Up : e.specialCauseConcernValue !== null ? Et.Down : void 0, m = x === Et.Up ? d : x === Et.Down ? u : Math.max(d, u);
  e.primeRank = m || void 0;
  const g = x === Et.Up ? l.find((S) => S.rank === m) : x === Et.Down ? c.find((S) => S.rank === m) : void 0;
  return e.primeRuleId = g?.id, { originalImprovement: h, originalConcern: p };
}
function p0(e) {
  const {
    row: t,
    metric: n,
    metricConflictRule: a,
    preferImprovementWhenConflict: o,
    preferTrendWhenConflict: s,
    primeDirection: i = t.primeDirection ?? xn.Same,
    conflictStrategy: l,
    ruleHierarchy: c
  } = e;
  if (s && t.specialCauseImprovementValue !== null && t.specialCauseConcernValue !== null) {
    const u = !!t.trendUp, f = !!t.trendDown;
    if (n === Xe.Up) {
      if (u && !f) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!u && f) {
        t.specialCauseImprovementValue = null;
        return;
      }
    } else if (n === Xe.Down) {
      if (f && !u) {
        t.specialCauseConcernValue = null;
        return;
      }
      if (!f && u) {
        t.specialCauseImprovementValue = null;
        return;
      }
    }
  }
  const d = o ? Dn.PreferImprovement : l ?? Dn.SqlPrimeThenRule;
  if (d === Dn.PreferImprovement) {
    n === Xe.Up ? t.specialCauseConcernValue = null : n === Xe.Down && (t.specialCauseImprovementValue = null);
    return;
  }
  if (d === Dn.RuleHierarchy) {
    const u = c ?? [ct.Trend, ct.Shift, ct.TwoSigma, ct.SinglePoint], { up: f, dn: h } = bc(t);
    for (const p of u) {
      const x = f.some((g) => g.id === p), m = h.some((g) => g.id === p);
      if (x && !m) {
        n === Xe.Up ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
        return;
      }
      if (m && !x) {
        n === Xe.Up ? t.specialCauseImprovementValue = null : t.specialCauseConcernValue = null;
        return;
      }
      if (x && m) {
        (n === Xe.Up || n === Xe.Down) && (a === Fn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null);
        return;
      }
    }
  }
  i === xn.Upwards ? n === Xe.Up ? t.specialCauseConcernValue = null : n === Xe.Down && (t.specialCauseImprovementValue = null) : i === xn.Downwards ? n === Xe.Up ? t.specialCauseImprovementValue = null : n === Xe.Down && (t.specialCauseConcernValue = null) : a === Fn.Improvement ? t.specialCauseConcernValue = null : t.specialCauseImprovementValue = null;
}
var Mo = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e))(Mo || {});
function m0(e) {
  return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function g0(e) {
  const t = m0(e);
  if (t > 0) return "Above";
  if (t < 0) return "Below";
}
function Hi(e) {
  const t = [], n = (i, l, c) => ({
    segStart: i,
    segSide: l,
    minV: c,
    maxV: c,
    maxAbsDelta: 0
    // caller sets initial delta immediately after
  }), a = (i, l, c, d, u) => ({
    minV: Math.min(c, i),
    maxV: Math.max(d, i),
    maxAbsDelta: Math.max(u, l)
  }), o = (i, l, c, d, u, f, h, p) => {
    i.push({
      trendDirection: p,
      start: l,
      end: c,
      side: d,
      minValue: u,
      maxValue: f,
      maxAbsDeltaFromMean: h
    });
  };
  let s = 0;
  for (; s < e.length; ) {
    const i = e[s];
    if (!i || i.value == null || i.ghost || !i.trendUp && !i.trendDown) {
      s++;
      continue;
    }
    const l = i.trendUp ? "Up" : i.trendDown ? "Down" : void 0;
    let c = s, d = s;
    for (; d < e.length; d++) {
      const S = e[d];
      if (!S || S.value == null || S.ghost || !(l === "Up" ? S.trendUp : S.trendDown)) break;
    }
    const u = d - 1, f = [];
    let h, p, x = 1 / 0, m = -1 / 0, g = 0;
    for (let S = c; S <= u; S++) {
      const N = e[S];
      if (N.value == null) continue;
      const C = N.value - (N.mean ?? 0), k = g0(C);
      if (!k) {
        h !== void 0 && (o(f, h, S - 1, p, x, m, g, l), h = void 0, p = void 0, x = 1 / 0, m = -1 / 0, g = 0);
        continue;
      }
      if (h === void 0)
        ({ segStart: h, segSide: p, minV: x, maxV: m, maxAbsDelta: g } = (() => {
          const v = n(S, k, N.value);
          return {
            segStart: v.segStart,
            segSide: v.segSide,
            minV: v.minV,
            maxV: v.maxV,
            maxAbsDelta: Math.abs(C)
          };
        })());
      else if (k !== p)
        o(f, h, S - 1, p, x, m, g, l), { segStart: h, segSide: p, minV: x, maxV: m, maxAbsDelta: g } = (() => {
          const v = n(S, k, N.value);
          return {
            segStart: v.segStart,
            segSide: v.segSide,
            minV: v.minV,
            maxV: v.maxV,
            maxAbsDelta: Math.abs(C)
          };
        })();
      else {
        const v = a(N.value, Math.abs(C), x, m, g);
        x = v.minV, m = v.maxV, g = v.maxAbsDelta;
      }
    }
    h !== void 0 && o(f, h, u, p, x, m, g, l), t.push({ trendDirection: l, start: c, end: u, segments: f }), s = u + 1;
  }
  return t;
}
function x0(e) {
  if (e === Xe.Up) return "Above";
  if (e === Xe.Down) return "Below";
}
function y0(e) {
  if (e)
    return e === "Above" ? "Below" : "Above";
}
function zi(e, t) {
  const n = t.strategy ?? wt.CrossingAfterFavourable, a = x0(t.metricImprovement), o = y0(a), s = [];
  for (const i of e) {
    if (!a) {
      if (n === wt.ExtremeFavourable || n === wt.CrossingAfterFavourable) {
        const l = i.segments;
        if (l.length === 0) continue;
        let c = l[0];
        for (const d of l)
          d.maxAbsDeltaFromMean > c.maxAbsDeltaFromMean && (c = d);
        s.push(c);
      }
      continue;
    }
    if (n === wt.FavourableSide) {
      s.push(...i.segments.filter((l) => l.side === a));
      continue;
    }
    if (n === wt.UnfavourableSide) {
      s.push(...i.segments.filter((l) => l.side === o));
      continue;
    }
    if (n === wt.CrossingAfterFavourable) {
      const l = i.segments;
      let c;
      for (let d = 0; d < l.length; d++) {
        const u = l[d];
        if (u.side === a && d > 0 && l[d - 1].side !== a) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = l.filter((u) => u.side === a);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === wt.CrossingAfterUnfavourable) {
      const l = i.segments;
      let c;
      for (let d = 0; d < l.length; d++) {
        const u = l[d];
        if (u.side === o && d > 0 && l[d - 1].side !== o) {
          c = u;
          break;
        }
      }
      if (!c) {
        const d = l.filter((u) => u.side === o);
        d.length > 0 && (c = d.reduce(
          (u, f) => f.end - f.start > u.end - u.start ? f : u,
          d[0]
        ));
      }
      c && s.push(c);
      continue;
    }
    if (n === wt.ExtremeFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === wt.ExtremeUnfavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.maxAbsDeltaFromMean > d.maxAbsDeltaFromMean ? u : d);
      s.push(c);
      continue;
    }
    if (n === wt.FirstFavourable) {
      const l = i.segments.find((c) => c.side === a);
      l && s.push(l);
      continue;
    }
    if (n === wt.FirstUnfavourable) {
      const l = i.segments.find((c) => c.side === o);
      l && s.push(l);
      continue;
    }
    if (n === wt.LongestFavourable) {
      const l = i.segments.filter((d) => d.side === a);
      if (l.length === 0) continue;
      const c = l.reduce(
        (d, u) => u.end - u.start > d.end - d.start ? u : d
      );
      s.push(c);
      continue;
    }
    if (n === wt.LongestUnfavourable) {
      const l = i.segments.filter((d) => d.side === o);
      if (l.length === 0) continue;
      const c = l.reduce((d, u) => u.end - u.start > d.end - d.start ? u : d);
      s.push(c);
      continue;
    }
    if (n === wt.LastFavourable) {
      const l = i.segments.filter((c) => c.side === a);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
    if (n === wt.LastUnfavourable) {
      const l = i.segments.filter((c) => c.side === o);
      if (l.length === 0) continue;
      s.push(l[l.length - 1]);
      continue;
    }
  }
  return s;
}
var it = /* @__PURE__ */ ((e) => (e.Common = "Common", e.Improvement = "Improvement", e.Concern = "Concern", e.NoJudgement = "NoJudgement", e))(it || {}), zn = /* @__PURE__ */ ((e) => (e.Ungated = "Ungated", e.Gated = "Gated", e))(zn || {});
function b0(e) {
  const t = !!(e.singlePointUp || e.twoSigmaUp || e.shiftUp || e.trendUp), n = !!(e.singlePointDown || e.twoSigmaDown || e.shiftDown || e.trendDown);
  return { upAny: t, downAny: n };
}
function yr(e, t) {
  const n = t.metricImprovement, a = t.trendVisualMode ?? "Ungated", o = t.enableNeutralNoJudgement ?? !0;
  return e.map((s) => {
    if (!s || s.value == null || s.ghost) return "Common";
    const { upAny: i, downAny: l } = b0(s);
    if (i && l) return "Improvement";
    switch (s.variationIcon) {
      case Ee.ImprovementHigh:
      case Ee.ImprovementLow:
        return "Improvement";
      case Ee.ConcernHigh:
      case Ee.ConcernLow:
        return "Concern";
      case Ee.NeitherHigh:
      case Ee.NeitherLow: {
        if (a === "Ungated" && n !== Xe.Neither) {
          if (i && !l)
            return n === Xe.Up ? "Improvement" : "Concern";
          if (l && !i)
            return n === Xe.Down ? "Improvement" : "Concern";
        }
        return o ? "NoJudgement" : "Common";
      }
      default:
        return "Common";
    }
  });
}
function v0(e, t, n) {
  const a = n?.mode ?? "Disabled";
  if (!e.length) return [];
  let o = yr(e, {
    metricImprovement: t,
    trendVisualMode: zn.Ungated,
    enableNeutralNoJudgement: !0
  });
  if (a !== "RecalcCrossing" || t === Xe.Neither) return o;
  const s = Math.max(0, n?.preWindow ?? 2), i = Math.max(0, n?.postWindow ?? 3), l = n?.prePolarity ?? "Opposite", c = (f, h) => {
    if (f < 0 || f >= o.length) return;
    const p = o[f];
    (p === it.Common || p === it.NoJudgement) && (o[f] = h);
  }, d = (f) => {
    if (f == null) return null;
    const h = e.reduce((x, m) => (m.partitionId === f && typeof m.value == "number" && !m.ghost && x.push(m.value), x), []);
    return h.length ? h.reduce((x, m) => x + m, 0) / h.length : null;
  }, u = Array.isArray(n?.boundaryIndices) && n.boundaryIndices.length ? n.boundaryIndices.slice().filter((f) => Number.isFinite(f)) : e.reduce((f, h, p) => {
    if (p === 0) return f;
    const x = e[p - 1];
    return x && h && h.partitionId !== x.partitionId && f.push(p), f;
  }, []);
  for (const f of u) {
    const h = e[f - 1], p = e[f];
    if (!h || !p)
      continue;
    let x = f - 1;
    for (; x - 1 >= 0 && e[x - 1] && e[x - 1].partitionId === h.partitionId; )
      x--;
    let m = f;
    for (; m + 1 < e.length && e[m + 1] && e[m + 1].partitionId === p.partitionId; )
      m++;
    let g = null;
    for (let _ = f - 1; _ >= 0; _--) {
      const j = e[_];
      if (j.partitionId !== h.partitionId) break;
      if (typeof j.mean == "number") {
        g = j.mean;
        break;
      }
    }
    let S = null;
    for (let _ = f; _ < e.length; _++) {
      const j = e[_];
      if (j.partitionId !== p.partitionId) break;
      if (typeof j.mean == "number") {
        S = j.mean;
        break;
      }
    }
    if (g == null && (g = d(h.partitionId ?? null)), S == null && (S = d(p.partitionId ?? null)), g == null || S == null)
      continue;
    const N = S - g, C = t === Xe.Up ? N > 0 : N < 0, k = C ? it.Improvement : it.Concern, v = l === "Same" ? k : C ? it.Concern : it.Improvement;
    for (let _ = 1; _ <= s; _++) {
      const j = f - _;
      if (j < x) break;
      c(j, v);
    }
    for (let _ = 0; _ < i; _++) {
      const j = f + _;
      if (j > m) break;
      c(j, k);
    }
  }
  return o;
}
function vc(e) {
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
function br(e) {
  const { chartType: t, metricImprovement: n, data: a } = e, o = vc(e.settings), s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: !1,
    metricConflictRule: Fn.Improvement,
    trendAcrossPartitions: !1,
    twoSigmaIncludeAboveThree: !1,
    enableFourOfFiveRule: !1,
    preferImprovementWhenConflict: !1,
    conflictStrategy: Dn.SqlPrimeThenRule,
    ruleHierarchy: void 0,
    chartLevelEligibility: !1,
    trendFavourableSegmentation: !1,
    trendSegmentationMode: zt.Off,
    trendSegmentationStrategy: wt.CrossingAfterUnfavourable,
    trendDominatesHighlightedWindow: !1,
    ...o
  }, i = o?.trendSegmentationMode || (o?.trendFavourableSegmentation === !0 ? zt.Always : o?.trendFavourableSegmentation === !1 ? zt.Off : s.trendSegmentationMode), l = a.map((m, g) => ({
    rowId: g + 1,
    x: m.x,
    value: We(m.value) ? m.value : null,
    ghost: !!m.ghost,
    baseline: !!m.baseline,
    target: We(m.target) ? m.target : null
  })), c = [];
  let d = [];
  for (const m of l)
    m.baseline && d.length && (c.push(d), d = []), d.push(m);
  d.length && c.push(d);
  const u = [], f = (s.trendFavourableSegmentation || i !== zt.Off) && !s.preferImprovementWhenConflict, h = l.filter((m) => !m.ghost && We(m.value)).length, p = !!s.chartLevelEligibility && h >= s.minimumPoints;
  let x = 0;
  for (const m of c) {
    x++;
    const g = m.map((v) => v.value), S = m.map((v) => v.ghost), N = f0(
      t,
      g,
      S,
      !!s.excludeMovingRangeOutliers
    ), C = m.map((v, _) => {
      const j = !v.ghost && We(v.value) ? g.slice(0, _ + 1).filter((y, w) => !S[w] && We(y)).length : 0, b = p ? !0 : j >= s.minimumPoints;
      return {
        rowId: v.rowId,
        x: v.x,
        value: We(v.value) ? v.value : null,
        ghost: v.ghost,
        partitionId: x,
        pointRank: j,
        mean: (b || p) && We(N.mean) ? N.mean : null,
        upperProcessLimit: b || p ? N.upperProcessLimit : null,
        lowerProcessLimit: b || p ? N.lowerProcessLimit : null,
        upperTwoSigma: b || p ? N.upperTwoSigma : null,
        lowerTwoSigma: b || p ? N.lowerTwoSigma : null,
        upperOneSigma: b || p ? N.upperOneSigma : null,
        lowerOneSigma: b || p ? N.lowerOneSigma : null,
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
        variationIcon: Ee.CommonCause
      };
    });
    for (const v of C)
      v.ghost || !We(v.value) || v.mean === null || (We(v.upperProcessLimit) && v.value > v.upperProcessLimit && (v.singlePointUp = !0), We(v.lowerProcessLimit) && v.value < v.lowerProcessLimit && (v.singlePointDown = !0));
    h0(C, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree,
      enableFourOfFiveRule: !!s.enableFourOfFiveRule
    }), f && ((v) => {
      const _ = v.some(
        (T) => (T.singlePointUp || T.twoSigmaUp || T.shiftUp || T.trendUp) && (T.singlePointDown || T.twoSigmaDown || T.shiftDown || T.trendDown)
      );
      if (i === zt.Off || i === zt.AutoWhenConflict && !_)
        return;
      const j = Hi(v), b = zi(j, {
        metricImprovement: n,
        strategy: s.trendSegmentationStrategy
      }), y = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set();
      for (const T of b)
        for (let M = T.start; M <= T.end; M++)
          T.trendDirection === Mo.Up ? y.add(M) : w.add(M);
      v.forEach((T, M) => {
        T.trendUp = y.has(M) ? T.trendUp : !1, T.trendDown = w.has(M) ? T.trendDown : !1, s.trendDominatesHighlightedWindow && (y.has(M) ? (T.singlePointDown = !1, T.twoSigmaDown = !1, T.shiftDown = !1) : w.has(M) && (T.singlePointUp = !1, T.twoSigmaUp = !1, T.shiftUp = !1));
      });
    })(C);
    for (const v of C) {
      if (v.ghost || !We(v.value) || v.mean === null) {
        u.push(v);
        continue;
      }
      const { aligned: _, opposite: j } = Ri(
        v,
        n
      );
      if (v.specialCauseImprovementValue = _ ? v.value : null, v.specialCauseConcernValue = j ? v.value : null, n === Xe.Neither) {
        const b = v.singlePointUp || v.twoSigmaUp || v.shiftUp || v.trendUp, y = v.singlePointDown || v.twoSigmaDown || v.shiftDown || v.trendDown;
        v.variationIcon = b ? Ee.NeitherHigh : y ? Ee.NeitherLow : Ee.CommonCause;
      } else
        Bi(v, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
      u.push(v);
    }
  }
  if (s.trendAcrossPartitions) {
    const m = u.map((g, S) => ({ idx: S, r: g })).filter(({ r: g }) => !g.ghost && We(g.value));
    if (m.length >= s.trendPoints)
      for (let g = 0; g <= m.length - s.trendPoints; g++) {
        const S = m.slice(g, g + s.trendPoints).map((v) => v.idx), N = S.map((v) => u[v]);
        if (!N.every((v) => We(v.value))) continue;
        let C = !0, k = !0;
        for (let v = 1; v < N.length && (N[v].value > N[v - 1].value || (C = !1), N[v].value < N[v - 1].value || (k = !1), !(!C && !k)); v++)
          ;
        C && S.forEach((v) => u[v].trendUp = !0), k && S.forEach((v) => u[v].trendDown = !0);
      }
  }
  if (s.trendAcrossPartitions) {
    if (f) {
      const m = u.some(
        (g) => (g.singlePointUp || g.twoSigmaUp || g.shiftUp || g.trendUp) && (g.singlePointDown || g.twoSigmaDown || g.shiftDown || g.trendDown)
      );
      if (i === zt.Always || i === zt.AutoWhenConflict && m) {
        const g = Hi(u), S = zi(g, { metricImprovement: n, strategy: s.trendSegmentationStrategy }), N = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
        for (const k of S)
          for (let v = k.start; v <= k.end; v++)
            k.trendDirection === Mo.Up ? N.add(v) : C.add(v);
        u.forEach((k, v) => {
          k.trendUp = N.has(v) ? k.trendUp : !1, k.trendDown = C.has(v) ? k.trendDown : !1, s.trendDominatesHighlightedWindow && (N.has(v) ? (k.singlePointDown = !1, k.twoSigmaDown = !1, k.shiftDown = !1) : C.has(v) && (k.singlePointUp = !1, k.twoSigmaUp = !1, k.shiftUp = !1));
        });
      }
    }
    for (const m of u) {
      if (m.ghost || !We(m.value) || m.mean === null || n === Xe.Neither) continue;
      const { aligned: g, opposite: S } = Ri(m, n);
      m.specialCauseImprovementValue = g ? m.value : null, m.specialCauseConcernValue = S ? m.value : null, Bi(m, n, s.metricConflictRule, s.preferImprovementWhenConflict === !0, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === !0);
    }
  }
  return { rows: u };
}
function vs(e, t) {
  const n = br(e), a = yr(n.rows, {
    metricImprovement: e.metricImprovement,
    trendVisualMode: t?.trendVisualMode ?? zn.Ungated,
    enableNeutralNoJudgement: t?.enableNeutralNoJudgement ?? !0
  }), o = t?.boundaryWindows;
  if (!o || o.mode !== "RecalcCrossing") return { rows: n.rows, visuals: a };
  const s = o.directionOverride ?? e.metricImprovement, i = v0(n.rows, s, o), l = a.map((c, d) => {
    const u = i[d];
    if (c === it.Common || c === it.NoJudgement) {
      if (u === it.Improvement) return it.Improvement;
      if (u === it.Concern) return it.Concern;
    }
    return c;
  });
  return { rows: n.rows, visuals: l };
}
var wc = /* @__PURE__ */ ((e) => (e.None = "none", e.RecalcCrossingShift = "recalc-crossing-shift", e.RecalcCrossingTrend = "recalc-crossing-trend", e.RecalcCrossingTwoSigma = "recalc-crossing-two-sigma", e.RecalculationsRecalculated = "recalculations-recalculated", e.BaselinesRecalculated = "baselines-recalculated", e))(wc || {});
function w0(e, t, n) {
  const a = n?.trendVisualMode ?? zn.Ungated, o = n?.enableNeutralNoJudgement ?? !0, s = Array.isArray(e.data) ? e.data.map((f, h) => f?.baseline ? h : -1).filter((f) => f >= 0) : [];
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
  const { rows: l, visuals: c } = vs(e, {
    trendVisualMode: a,
    enableNeutralNoJudgement: o,
    boundaryWindows: i
  });
  let d = c.slice(), u = s.length ? s[0] : -1;
  if (u < 0) {
    for (let f = 1; f < l.length; f++)
      if (l[f].partitionId !== l[f - 1].partitionId) {
        u = f;
        break;
      }
  }
  return (t === "recalculations-recalculated" || t === "baselines-recalculated") && u > 0 && (d[u - 1] = it.Common), { rows: l, visuals: d };
}
const _c = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: !1,
  metricConflictRule: Fn.Improvement,
  trendAcrossPartitions: !0,
  twoSigmaIncludeAboveThree: !0,
  chartLevelEligibility: !0
});
function _0(e) {
  return { ..._c, ...e ?? {} };
}
var gt = /* @__PURE__ */ ((e) => (e.Concern = "concern", e.Improvement = "improvement", e.NoJudgement = "noJudgement", e.Common = "common", e))(gt || {}), yn = /* @__PURE__ */ ((e) => (e.Classic = "classic", e.Triangle = "triangle", e.TriangleWithRun = "triangleWithRun", e))(yn || {}), fr = /* @__PURE__ */ ((e) => (e.Direction = "direction", e.Polarity = "polarity", e))(fr || {});
const Io = (e) => {
  const t = () => {
    globalThis.__spcIconDeprecationEmitted || (console.warn(
      "[SPCVariationIcon] Deprecated payload shape detected. Migrate to { variationIcon, improvementDirection, specialCauseNeutral?, trend? }."
    ), globalThis.__spcIconDeprecationEmitted = !0);
  };
  if (e.variationIcon !== void 0) {
    const i = e;
    let l;
    i.improvementDirection !== void 0 ? l = i.improvementDirection === Xe.Up ? mt.HigherIsBetter : i.improvementDirection === Xe.Down ? mt.LowerIsBetter : mt.ContextDependent : i.polarity && (l = i.polarity);
    let c;
    const d = i.variationIcon;
    if (d === qe.Improvement || d === qe.Concern || d === qe.Neither || d === qe.Suppressed)
      d === qe.Improvement ? c = Pe.SpecialCauseImproving : d === qe.Concern ? c = Pe.SpecialCauseDeteriorating : d === qe.Neither ? c = Pe.CommonCause : c = Pe.SpecialCauseNoJudgement;
    else
      switch (i.variationIcon) {
        case Ee.ImprovementHigh:
        case Ee.ImprovementLow:
          c = Pe.SpecialCauseImproving;
          break;
        case Ee.ConcernHigh:
        case Ee.ConcernLow:
          c = Pe.SpecialCauseDeteriorating;
          break;
        case Ee.NeitherHigh:
        case Ee.NeitherLow:
          c = i.specialCauseNeutral ? Pe.SpecialCauseNoJudgement : Pe.CommonCause;
          break;
        case Ee.CommonCause:
          c = Pe.CommonCause;
          break;
        default:
          c = Pe.SpecialCauseNoJudgement;
          break;
      }
    let u = i.trend;
    return u || (c === Pe.SpecialCauseImproving ? u = l === mt.LowerIsBetter ? Ge.Lower : Ge.Higher : c === Pe.SpecialCauseDeteriorating ? u = l === mt.LowerIsBetter ? Ge.Higher : Ge.Lower : c === Pe.SpecialCauseNoJudgement ? i.highSideSignal && !i.lowSideSignal ? u = Ge.Higher : i.lowSideSignal && !i.highSideSignal ? u = Ge.Lower : u = Ge.Higher : u = Ge.Higher), { state: c, direction: u, polarity: l ?? mt.ContextDependent };
  }
  if (e.state !== void 0) {
    t();
    const i = e;
    let l = i.trend;
    return !l && (i.state === Pe.SpecialCauseImproving || i.state === Pe.SpecialCauseDeteriorating) && i.polarity && (i.state === Pe.SpecialCauseImproving ? l = i.polarity === mt.LowerIsBetter ? Ge.Lower : Ge.Higher : l = i.polarity === mt.LowerIsBetter ? Ge.Higher : Ge.Lower), l || (i.state === Pe.SpecialCauseImproving ? l = Ge.Higher : i.state === Pe.SpecialCauseDeteriorating ? l = Ge.Lower : l = Ge.Higher), {
      state: i.state,
      direction: l,
      polarity: i.polarity ?? mt.ContextDependent
    };
  }
  const n = e;
  t();
  const o = {
    [Nt.Improving]: Pe.SpecialCauseImproving,
    [Nt.Deteriorating]: Pe.SpecialCauseDeteriorating,
    [Nt.No_Judgement]: Pe.SpecialCauseNoJudgement,
    [Nt.None]: Pe.CommonCause
  }[n.judgement];
  let s;
  return n.judgement === Nt.Improving ? s = n.polarity === mt.LowerIsBetter ? Ge.Lower : Ge.Higher : n.judgement === Nt.Deteriorating ? s = n.polarity === mt.LowerIsBetter ? Ge.Higher : Ge.Lower : s = n.trend ?? Ge.Higher, { state: o, direction: s, polarity: n.polarity };
};
function Sc(e, t) {
  const { state: n, direction: a, polarity: o } = Io(e), s = bs(n), i = a === Ge.Higher ? "above" : "below", l = a === Ge.Higher ? "upwards" : "downwards", c = (() => {
    switch (o) {
      case mt.HigherIsBetter:
        return "For this measure, higher values are better.";
      case mt.LowerIsBetter:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  return [
    (() => {
      switch (s) {
        case Nt.Improving:
          return `Special cause improvement: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Nt.Deteriorating:
          return `Special cause deterioration: recent data show a sustained run ${i} the mean (unlikely due to random variation).`;
        case Nt.No_Judgement:
          return `Special cause detected (no value judgement): recent data show a change in level, trending ${l}.`;
        case Nt.None:
        default:
          return "Common cause variation: points vary randomly around the mean; no special cause detected.";
      }
    })(),
    c,
    null,
    null,
    null,
    null,
    null
  ].filter(Boolean).join(" ");
}
const io = (e, t, n, a, o, s) => /* @__PURE__ */ r.jsxs("defs", { children: [
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
] }), ws = ({
  data: e,
  precomputed: t,
  improvementDirection: n,
  size: a = 44,
  ariaLabel: o,
  showLetter: s = !0,
  dropShadow: i = !0,
  gradientWash: l = !1,
  variant: c = yn.Classic,
  runLength: d = 0,
  // Default changed to 'polarity' so letters reflect desirable direction (H = Higher is better, L = Lower is better)
  letterMode: u = fr.Polarity,
  letterOverride: f,
  ...h
}) => {
  const p = tr(), x = tr(), {
    start: m,
    mid: g,
    end: S,
    triStart: N,
    triMid: C,
    triEnd: k
  } = Ea(), { state: v, direction: _, polarity: j, ariaInput: b } = Re(() => {
    if (t && t.lastVariationIcon !== void 0) {
      const G = {
        variationIcon: t.lastVariationIcon,
        improvementDirection: n ?? Xe.Neither,
        // Infer neutral special-cause when VariationState was mapped as Neither from engine NeitherHigh/Low
        specialCauseNeutral: t.latestState === Pe.SpecialCauseNoJudgement
        // Side hints not strictly needed for improvement/concern, only for neutral arrow orientation
      }, { state: E, direction: O, polarity: P } = Io(G);
      return { state: E, direction: O, polarity: P, ariaInput: G };
    }
    const { state: B, direction: F, polarity: L } = Io(e);
    return { state: B, direction: F, polarity: L, ariaInput: e };
  }, [e, t, n]), y = Re(() => mc(v), [v]), w = Re(() => bs(v), [v]), T = w === Nt.Improving || w === Nt.Deteriorating;
  let M = "";
  s && T && (u === fr.Polarity ? j === mt.HigherIsBetter ? M = "H" : j === mt.LowerIsBetter ? M = "L" : M = "" : M = _ === Ge.Higher ? "H" : "L"), f !== void 0 && (M = f);
  const A = v !== Pe.CommonCause, I = v === Pe.SpecialCauseNoJudgement, D = _t("common-cause", "#A6A6A6"), $ = A ? y.hex : D, H = Re(
    () => c0(v, _),
    [v, _]
  ), Z = o || `${y.label}${M ? _ === Ge.Higher ? " – Higher" : " – Lower" : ""}`, K = Sc(b);
  if (c === yn.TriangleWithRun) {
    const G = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], E = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let O = null;
    v === Pe.SpecialCauseImproving || v === Pe.SpecialCauseDeteriorating ? O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === Ge.Higher ? G : E).map((pe) => pe.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: _ === Ge.Higher ? "translate(0, -8)" : "translate(0, 15)"
      }
    ) : v === Pe.SpecialCauseNoJudgement && (O = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === Ge.Higher ? G.map((pe) => pe.join(",")).join(" ") : E.map((pe) => pe.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 6,
        transform: _ === Ge.Higher ? "translate(0,-7)" : "translate(0,14)"
      }
    ));
    const P = Math.max(0, Math.min(5, Math.floor(d || 0))), X = v === Pe.CommonCause ? 160 : _ === Ge.Higher ? 220 : 70, Y = 10, Q = 26, de = 150 - 2 * Q, V = v === Pe.CommonCause ? D : yc(v), ae = Array.from({ length: 5 }).map((pe, Ie) => {
      const Te = (v === Pe.SpecialCauseImproving || v === Pe.SpecialCauseDeteriorating) && Ie >= 5 - P ? V : D;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: de + Ie * Q,
          cy: X,
          r: Y,
          fill: Te,
          stroke: Te,
          strokeWidth: 1
        },
        Ie
      );
    }), le = io(
      y.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: N },
        { offset: "75%", opacity: C },
        { offset: "100%", opacity: k }
      ]
    ), be = v === Pe.CommonCause || _ === Ge.Higher ? "translate(0,-10)" : "translate(0,25)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": Z,
        "aria-description": K,
        ...h,
        children: [
          le,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${x})` : "#ffffff",
              ...i ? { filter: `url(#${p})` } : {},
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
          /* @__PURE__ */ r.jsxs("g", { transform: be, children: [
            O,
            M && /* @__PURE__ */ r.jsx(
              "text",
              {
                fill: "#fff",
                fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
                fontWeight: "bold",
                fontSize: 64,
                x: "150",
                y: _ === Ge.Higher ? 155 : 145,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: M
              }
            ),
            ae
          ] })
        ]
      }
    );
  }
  if (c === yn.Triangle) {
    const G = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], E = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], O = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let P = null;
    v === Pe.SpecialCauseImproving || v === Pe.SpecialCauseDeteriorating ? P = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === Ge.Higher ? G : E).map((Y) => Y.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: _ === Ge.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : v === Pe.SpecialCauseNoJudgement ? P = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === Ge.Higher ? G.map((Y) => Y.join(",")).join(" ") : E.map((Y) => Y.join(",")).join(" "),
        fill: y.hex,
        stroke: y.hex,
        strokeWidth: 8,
        transform: _ === Ge.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : v === Pe.CommonCause && (P = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: O[0][0],
        y1: O[0][1],
        x2: O[1][0],
        y2: O[1][1],
        stroke: y.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const X = io(
      y.hex,
      p,
      x,
      i,
      l,
      [
        { offset: "0%", opacity: N },
        { offset: "65%", opacity: C },
        { offset: "100%", opacity: k }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: a,
        height: a,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": Z,
        "aria-description": K,
        ...h,
        children: [
          X,
          /* @__PURE__ */ r.jsx(
            "circle",
            {
              stroke: "none",
              fill: l ? `url(#${x})` : "#ffffff",
              ...i ? { filter: `url(#${p})` } : {},
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
          P,
          M && (v === Pe.SpecialCauseImproving || v === Pe.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
            "text",
            {
              fill: "#fff",
              fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: 100,
              x: "150",
              y: _ === Ge.Higher ? "170" : "140",
              textAnchor: "middle",
              dominantBaseline: "middle",
              children: M
            }
          )
        ]
      }
    );
  }
  const ne = io(
    y.hex,
    p,
    x,
    i,
    l,
    [
      { offset: "0%", opacity: m },
      { offset: "65%", opacity: g },
      { offset: "100%", opacity: S }
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: a,
      height: a,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": Z,
      "aria-description": K,
      ...h,
      children: [
        ne,
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: l ? `url(#${x})` : "#ffffff",
            ...i ? { filter: `url(#${p})` } : {},
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
        M && /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: y.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ r.jsx("tspan", { x: "120", y: _ === Ge.Lower ? "340" : "155", children: M })
          }
        ),
        I ? /* @__PURE__ */ r.jsx(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: y.hex,
            ..._ === Ge.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          H.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: D,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${H.map((B) => `${B.cx} ${B.cy}`).join(" L ")}`
            }
          ),
          H.map((B, F) => {
            const G = F >= H.length - 2 && A ? $ : D, E = G;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: E,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: G,
                cx: B.cx,
                cy: B.cy,
                r: 16
              },
              F
            );
          })
        ] })
      ]
    }
  );
};
ws.displayName = "SPCVariationIcon";
const S0 = {
  [ht.Xs]: { height: 24, pointR: 2, stroke: 1 },
  [ht.Sm]: { height: 32, pointR: 3, stroke: 1 },
  [ht.Md]: { height: 44, pointR: 4, stroke: 1 },
  [ht.Lg]: { height: 56, pointR: 5, stroke: 1 },
  [ht.Xl]: { height: 72, pointR: 6, stroke: 1 },
  // Full: maintain aspect ratio at container width with smaller point radius for precision
  [ht.Full]: { height: 44, pointR: 2, stroke: 1 }
};
function k0(e, t) {
  return !t || e.length <= t ? e : e.slice(e.length - t);
}
function N0(e) {
  const t = e.filter((i) => typeof i.value == "number");
  if (!t.length)
    return { mean: null, latestValue: null, latestIndex: null };
  const n = t.reduce((i, l) => i + l.value, 0) / t.length, a = [...e].reverse().findIndex((i) => i.value != null), o = a >= 0 ? e.length - 1 - a : null, s = o != null ? e[o].value : null;
  return { mean: n, latestValue: s, latestIndex: o };
}
const C0 = (e) => yc(e), _s = ({
  data: e,
  windowSize: t,
  minPointsForSignals: n = 13,
  showMean: a = !0,
  showLimits: o = !0,
  showLimitBand: s = !0,
  showInnerBands: i = !1,
  showLatestMarker: l = !0,
  showStateGlyph: c = !0,
  variationState: d,
  metricImprovement: u,
  gradientWash: f = !1,
  size: h = ht.Sm,
  ariaLabel: p,
  className: x,
  onPointClick: m,
  maxPoints: g,
  thinningStrategy: S = "stride",
  colorPointsBySignal: N = !0,
  centerLine: C,
  controlLimits: k,
  sigmaBands: v,
  pointSignals: _,
  pointNeutralSpecialCause: j,
  visualCategories: b
}) => {
  const y = u, w = Re(
    () => k0(e, t),
    [e, t]
  ), T = Re(() => N0(w), [w]), M = (() => {
    if (typeof h == "string")
      switch (h) {
        case "xs":
          return ht.Xs;
        case "sm":
          return ht.Sm;
        case "md":
          return ht.Md;
        case "lg":
          return ht.Lg;
        case "xl":
          return ht.Xl;
        case "full":
          return ht.Full;
        default:
          return ht.Sm;
      }
    return h ?? ht.Sm;
  })(), A = S0[M], I = Math.max(w.length * 6, 60), D = I, $ = M === ht.Full ? "100%" : I, H = A.height, Z = Re(() => {
    if (M === ht.Full)
      return {
        width: "100%",
        height: "auto",
        // Maintain the internal viewBox aspect ratio as the element scales with container width
        aspectRatio: `${D} / ${H}`,
        display: "block"
      };
  }, [M, D, H]), K = Math.max(6, A.pointR + 3), ne = Math.max(4, A.pointR + 3), B = Re(() => (e?.length ?? 0) - (w?.length ?? 0), [e?.length, w?.length]), F = C ?? T.mean ?? null, L = Re(() => {
    if (!o) return null;
    if (k) return k;
    const _e = w.filter((he) => typeof he.value == "number");
    if (!_e.length || F == null) return null;
    const R = _e.map((he) => he.value), q = Math.min(...R), se = Math.max(...R);
    return { lower: q, upper: se };
  }, [o, k?.lower, k?.upper, w, F]), E = Re(() => ({
    state: d ?? Pe.CommonCause,
    firedRules: [],
    mean: F ?? null,
    stdDev: null,
    side: T.latestValue != null && F != null ? T.latestValue > F ? "above" : "below" : void 0
  }), [d, F, T.latestValue]).state, O = C0(E), P = (_e) => {
    const R = w.filter((me) => me.value != null);
    if (!R.length) return H / 2;
    const q = R.map((me) => me.value);
    L && (L.lower != null && q.push(L.lower), L.upper != null && q.push(L.upper));
    const se = Math.min(...q), he = Math.max(...q);
    return se === he ? H / 2 : H - (_e - se) / (he - se) * (H - ne * 2) - ne;
  }, X = Re(() => {
    if (!g || w.length <= g)
      return w.map((z, W) => W);
    if (S === "stride") {
      const z = Math.max(2, g), W = (w.length - 1) / (z - 1), oe = /* @__PURE__ */ new Set();
      for (let ee = 0; ee < z; ee++) oe.add(Math.round(ee * W));
      return oe.add(w.length - 1), Array.from(oe).sort((ee, re) => ee - re);
    }
    const _e = w.map((z, W) => ({ i: W, v: z.value }));
    function R(z, W, oe) {
      const ee = z.i, re = z.v ?? 0, ce = W.i, ue = W.v ?? 0, ve = oe.i, Ne = oe.v ?? 0, He = Math.abs((Ne - ue) * ee - (ve - ce) * re + ve * ue - Ne * ce), Ye = Math.hypot(Ne - ue, ve - ce);
      return Ye === 0 ? 0 : He / Ye;
    }
    function q(z, W) {
      if (z.length <= 2) return z;
      let oe = -1, ee = -1;
      for (let re = 1; re < z.length - 1; re++) {
        const ce = R(z[re], z[0], z[z.length - 1]);
        ce > oe && (oe = ce, ee = re);
      }
      if (oe > W) {
        const re = q(z.slice(0, ee + 1), W), ce = q(z.slice(ee), W);
        return [...re.slice(0, -1), ...ce];
      }
      return [z[0], z[z.length - 1]];
    }
    let se = 0.1, he = _e;
    for (let z = 0; z < 8 && (he = q(_e, se), !(he.length <= g)); z++)
      se *= 1.6;
    const me = new Set(he.map((z) => z.i));
    return me.add(0), me.add(w.length - 1), Array.from(me).sort((z, W) => z - W);
  }, [w, g, S]), Y = Re(
    () => X.map((_e) => w[_e]),
    [X, w]
  ), Q = Re(() => Math.max(1, D - K * 2), [D, K]), de = Re(() => {
    const _e = Math.max(1, Y.length - 1);
    return (R) => R / _e * Q + K;
  }, [Y.length, Q, K]), V = Re(() => {
    let _e = "";
    return Y.forEach((R, q) => {
      if (R.value == null) return;
      const se = P(R.value), he = de(q);
      _e += _e ? ` L ${he} ${se}` : `M ${he} ${se}`;
    }), _e;
  }, [Y, de]), ae = T.latestIndex ?? -1, le = L, be = Ea(), pe = Re(
    () => `spc-spark-wash-${Math.random().toString(36).slice(2)}`,
    [w.length, f]
  ), Ie = w.length >= (n || 0), Ve = p || "SPC sparkline", Te = (() => {
    if (!E) return;
    const _e = y === Xe.Up ? mt.HigherIsBetter : y === Xe.Down ? mt.LowerIsBetter : mt.ContextDependent, R = {
      variationIcon: E === Pe.SpecialCauseImproving ? qe.Improvement : E === Pe.SpecialCauseDeteriorating ? qe.Concern : E === Pe.SpecialCauseNoJudgement ? qe.Suppressed : qe.Neither,
      trend: y === Xe.Up ? Ge.Higher : Ge.Lower,
      polarity: _e
    };
    try {
      return Sc(R);
    } catch {
      return;
    }
  })(), Le = Re(() => {
    if (!Ie) return 10;
    const _e = [...w].reverse().filter((q) => q.value != null).slice(0, 6).map((q) => P(q.value));
    return _e.length && _e.reduce((q, se) => q + se, 0) / _e.length < H / 2 ? H : 10;
  }, [w, Ie, H]);
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      role: "img",
      "aria-label": Ve,
      "aria-description": Te,
      width: M === ht.Full ? void 0 : $,
      height: M === ht.Full ? void 0 : H,
      style: Z,
      className: x,
      viewBox: `0 0 ${D} ${H}`,
      children: [
        f && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: pe, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "0%",
                stopColor: O,
                stopOpacity: Number(be.start)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "60%",
                stopColor: O,
                stopOpacity: Number(be.mid)
              }
            ),
            /* @__PURE__ */ r.jsx(
              "stop",
              {
                offset: "100%",
                stopColor: O,
                stopOpacity: Number(be.end)
              }
            )
          ] }) }),
          /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: 0,
              width: D,
              height: H,
              fill: `url(#${pe})`
            }
          )
        ] }),
        le && le.lower != null && le.upper != null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          s && /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: 0,
              y: Math.min(
                P(le.upper),
                P(le.lower)
              ),
              width: D,
              height: Math.abs(
                P(le.upper) - P(le.lower)
              ),
              fill: O,
              fillOpacity: 0.08
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: D,
              y1: P(le.lower),
              y2: P(le.lower),
              stroke: O,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          /* @__PURE__ */ r.jsx(
            "line",
            {
              x1: 0,
              x2: D,
              y1: P(le.upper),
              y2: P(le.upper),
              stroke: O,
              strokeDasharray: "4,4",
              strokeOpacity: 0.3,
              strokeWidth: 1
            }
          ),
          v && i && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
            v.lowerTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: D,
                y1: P(v.lowerTwo),
                y2: P(v.lowerTwo),
                stroke: O,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            v.lowerOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: D,
                y1: P(v.lowerOne),
                y2: P(v.lowerOne),
                stroke: O,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            v.upperOne != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: D,
                y1: P(v.upperOne),
                y2: P(v.upperOne),
                stroke: O,
                strokeDasharray: "2,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            ),
            v.upperTwo != null && /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: 0,
                x2: D,
                y1: P(v.upperTwo),
                y2: P(v.upperTwo),
                stroke: O,
                strokeDasharray: "3,6",
                strokeOpacity: 0.2,
                strokeWidth: 1
              }
            )
          ] })
        ] }),
        a && F != null && /* @__PURE__ */ r.jsx(
          "line",
          {
            x1: 0,
            x2: D,
            y1: P(F),
            y2: P(F),
            stroke: hn(),
            strokeWidth: 1,
            strokeDasharray: "2,2"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: V,
            fill: "none",
            stroke: hn(),
            strokeWidth: A.stroke,
            strokeLinecap: "round"
          }
        ),
        X.map((_e, R) => {
          const q = w[_e];
          if (!q || q.value == null) return null;
          const se = P(q.value), he = de(R), z = (_e === ae && l ? A.pointR + 1 : A.pointR) - 0.5;
          let W = hn();
          if (N) {
            const oe = b?.[B + _e];
            if (oe != null)
              oe === it.Improvement ? W = Mr(qe.Improvement) : oe === it.Concern ? W = Mr(qe.Concern) : oe === it.NoJudgement ? W = _t("no-judgement", "#490092") : W = hn();
            else {
              const ee = _?.[B + _e];
              ee === qe.Improvement || ee === qe.Concern ? W = Mr(ee) : W = j?.[B + _e] ? _t("no-judgement", "#490092") : hn();
            }
          }
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: he,
              cy: se,
              r: z,
              fill: W,
              stroke: "none",
              strokeWidth: 0,
              onClick: m ? () => m(_e, q) : void 0,
              style: m ? { cursor: "pointer" } : void 0,
              "data-index": _e,
              "data-signal-colour": N ? W : void 0
            },
            _e
          );
        }),
        c && Ie && E && E !== Pe.CommonCause && y && /* @__PURE__ */ r.jsx(
          "text",
          {
            x: D - 4,
            y: Le,
            textAnchor: "end",
            fontSize: 12,
            fontWeight: "bold",
            fill: O,
            "data-glyph-pos": Le < H / 2 ? "top" : "bottom",
            children: y === Xe.Up ? "H" : "L"
          }
        )
      ]
    }
  );
};
_s.displayName = "SPCSpark";
function Qr(e) {
  switch (e) {
    case Ee.ImprovementHigh:
    case Ee.ImprovementLow:
      return Pe.SpecialCauseImproving;
    case Ee.ConcernHigh:
    case Ee.ConcernLow:
      return Pe.SpecialCauseDeteriorating;
    case Ee.NeitherHigh:
    case Ee.NeitherLow:
      return Pe.SpecialCauseNoJudgement;
    case Ee.CommonCause:
      return Pe.CommonCause;
    default:
      return null;
  }
}
function kc(e) {
  return e === Ee.ImprovementHigh || e === Ee.ImprovementLow || e === Ee.ConcernHigh || e === Ee.ConcernLow || e === Ee.NeitherHigh || e === Ee.NeitherLow;
}
function j0({
  warnings: e,
  show: t,
  formatWarningCategory: n,
  formatWarningCode: a
}) {
  const [o, s] = J.useState(""), i = J.useRef("");
  return J.useEffect(() => {
    if (!t) {
      i.current !== "" && (i.current = "", s(""));
      return;
    }
    const l = e.length;
    if (!l) {
      const f = "Diagnostics: no warnings.";
      f !== i.current && (i.current = f, s(f));
      return;
    }
    const c = {
      error: e.filter((f) => f.severity === Ft.Error).length,
      warning: e.filter((f) => f.severity === Ft.Warning).length,
      info: e.filter((f) => f.severity === Ft.Info).length
    }, d = [];
    c.error && d.push(`${c.error} error${c.error === 1 ? "" : "s"}`), c.warning && d.push(`${c.warning} warning${c.warning === 1 ? "" : "s"}`), c.info && d.push(`${c.info} info`);
    const u = `Diagnostics updated: ${l} warning${l === 1 ? "" : "s"} (${d.join(", ")}).`;
    u !== i.current && (i.current = u, s(u));
  }, [t, e]), t ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    o && /* @__PURE__ */ r.jsx(
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
        children: o
      }
    ),
    e.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warnings", role: "region", "aria-label": "SPC diagnostics", children: [
      /* @__PURE__ */ r.jsx("p", { className: "fdp-spc-chart__warnings-heading", children: "Diagnostics" }),
      /* @__PURE__ */ r.jsx(
        nn,
        {
          firstCellIsHeader: !1,
          panel: !1,
          responsive: !1,
          head: [{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }],
          rows: e.map((l) => {
            let c = "grey";
            return l.severity === Ft.Error ? c = "red" : l.severity === Ft.Warning ? c = "orange" : l.severity === Ft.Info && (c = "blue"), [
              {
                node: /* @__PURE__ */ r.jsx(st, { color: c, text: (l.severity ? String(l.severity) : "Info").replace(/^[a-z]/, (d) => d.toUpperCase()) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity"
              },
              {
                node: l.category ? /* @__PURE__ */ r.jsx(st, { color: "purple", text: n(l.category) }) : /* @__PURE__ */ r.jsx("span", { className: "fdp-spc-chart__warning-empty", children: "–" }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category"
              },
              {
                node: /* @__PURE__ */ r.jsx(st, { color: "grey", text: a(l.code) }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code"
              },
              {
                node: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__warning-message", children: [
                  /* @__PURE__ */ r.jsx("span", { children: l.message }),
                  l.context && Object.keys(l.context).length > 0 && /* @__PURE__ */ r.jsxs("details", { className: "fdp-spc-chart__warning-context", style: { marginTop: 4 }, children: [
                    /* @__PURE__ */ r.jsx("summary", { children: "context" }),
                    /* @__PURE__ */ r.jsx("pre", { children: JSON.stringify(l.context, null, 2) })
                  ] })
                ] }),
                classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message"
              }
            ];
          }),
          classes: "fdp-spc-chart__warnings-table-wrapper",
          tableClasses: "fdp-spc-chart__warnings-table"
        }
      )
    ] })
  ] }) : null;
}
function M0({
  variationNode: e,
  assuranceNode: t,
  show: n
}) {
  return n ? /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: [
    e,
    t
  ] }) : null;
}
const Ss = ({
  status: e,
  size: t = 44,
  ariaLabel: n,
  dropShadow: a = !0,
  colourOverride: o,
  gradientWash: s = !1,
  letterOverride: i,
  showTrendLines: l = !0,
  ...c
}) => {
  const d = tr(), u = tr(), { start: f, mid: h, end: p } = Ea(), x = o || s0[e], m = (i || i0[e]).slice(0, 2), g = n || `Assurance ${e}`;
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": g,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          a && /* @__PURE__ */ r.jsxs("filter", { id: d, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ r.jsx("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ r.jsx("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ r.jsx("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ r.jsx("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ r.jsx("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          s && /* @__PURE__ */ r.jsxs("linearGradient", { id: u, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: x, stopOpacity: parseFloat(f) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: x, stopOpacity: parseFloat(h) }),
            /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(p) })
          ] })
        ] }),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            stroke: "none",
            fill: s ? `url(#${u})` : "#ffffff",
            ...a ? { filter: `url(#${d})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ r.jsx(
          "text",
          {
            fill: x,
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
          e === gn.Fail ? /* @__PURE__ */ r.jsx(
            "path",
            {
              id: "fail-line",
              stroke: x,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : e === gn.Uncertain ? /* @__PURE__ */ r.jsx(
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
              stroke: x,
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
              stroke: x,
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
Ss.displayName = "SPCAssuranceIcon";
const I0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceResult: gn,
  Direction: Ge,
  MetricPolarity: mt,
  SPCAssuranceIcon: Ss,
  SPCVariationIcon: ws,
  VariationJudgement: Nt,
  VariationState: Pe,
  getVariationColour: mc,
  getVariationTrend: bs
}, Symbol.toStringTag, { value: "Module" }));
function D0(e) {
  const { show: t, rowsForUi: n, minPoints: a, metricImprovement: o, variant: s, runLength: i } = e;
  if (!t || !n?.length) return null;
  const l = n, c = typeof a == "number" && !isNaN(a) ? a : 13;
  if (l.filter(
    (v) => !v.data.ghost && v.data.value != null
  ).length < c) return null;
  let u = -1;
  for (let v = l.length - 1; v >= 0; v--) {
    const _ = l[v];
    if (_ && _.data.value != null && !_.data.ghost) {
      u = v;
      break;
    }
  }
  if (u === -1) return null;
  const f = l[u], h = f.classification?.variation, p = f.classification?.assurance, x = h === qe.Neither && !!f.classification?.neutralSpecialCauseValue, m = p === dn.Pass ? gn.Pass : p === dn.Fail ? gn.Fail : gn.Uncertain;
  let g;
  if (h === qe.Suppressed) {
    const v = !!f.rules.singlePoint.up, _ = !!f.rules.singlePoint.down;
    o === cn.Up ? v ? g = Ge.Higher : _ && (g = Ge.Lower) : o === cn.Down ? _ ? g = Ge.Lower : v && (g = Ge.Higher) : g = Ge.Higher;
  } else if (h === qe.Neither && x) {
    const v = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, _ = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
    v && !_ ? g = Ge.Higher : _ && !v ? g = Ge.Lower : g = Ge.Higher;
  }
  const S = 80, N = f.rules.singlePoint.up || f.rules.twoOfThree.up || f.rules.fourOfFive.up || f.rules.shift.up || f.rules.trend.up, C = f.rules.singlePoint.down || f.rules.twoOfThree.down || f.rules.fourOfFive.down || f.rules.shift.down || f.rules.trend.down;
  let k = Ee.CommonCause;
  return h === qe.Improvement ? k = Ee.ImprovementHigh : h === qe.Concern ? k = Ee.ConcernHigh : h === qe.Neither && (x ? g === Ge.Lower || C && !N ? k = Ee.NeitherLow : k = Ee.NeitherHigh : k = Ee.CommonCause), /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: { display: "flex", gap: 12, marginRight: 16 },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-icon",
            "data-variation": String(h),
            "data-trend": g ? String(g) : "none",
            style: { width: S, height: S },
            children: /* @__PURE__ */ r.jsx(
              ws,
              {
                dropShadow: !1,
                data: {
                  variationIcon: k,
                  improvementDirection: o,
                  specialCauseNeutral: x,
                  highSideSignal: N,
                  lowSideSignal: C,
                  ...g ? { trend: g } : {}
                },
                letterMode: o === cn.Neither ? fr.Direction : fr.Polarity,
                size: S,
                variant: s,
                runLength: s === yn.TriangleWithRun ? i : void 0
              }
            )
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "fdp-spc-chart__embedded-assurance-icon",
            "data-assurance": String(p),
            style: { width: S, height: S },
            children: /* @__PURE__ */ r.jsx(
              Ss,
              {
                status: m,
                size: S,
                dropShadow: !1
              }
            )
          }
        )
      ]
    },
    `embedded-icon-${u}`
  );
}
const Nc = ({
  engineRows: e,
  limits: t,
  pointDescriber: n,
  measureName: a,
  measureUnit: o,
  dateFormatter: s,
  enableNeutralNoJudgement: i = !0,
  showTrendGatingExplanation: l = !0
}) => {
  const c = rn(), d = un(), [u, f] = J.useState(null), [h, p] = J.useState(!1), x = J.useRef(null);
  J.useEffect(() => {
    if (c) {
      if (c.focused && (f(c.focused), x.current && (cancelAnimationFrame(x.current), x.current = null)), !c.focused && !h) {
        const Le = requestAnimationFrame(() => {
          f(null), x.current = null;
        });
        x.current = Le;
      }
      return () => {
        x.current && (cancelAnimationFrame(x.current), x.current = null);
      };
    }
  }, [c, c?.focused, h]);
  const m = c && (c.focused || (h ? u : null) || u), [g, S] = J.useState(!1);
  J.useEffect(() => {
    const Le = requestAnimationFrame(() => S(!0));
    return () => cancelAnimationFrame(Le);
  }, [m?.index]);
  const N = d?.innerWidth ?? 0, C = d?.innerHeight ?? 0, k = m ? Math.min(Math.max(m.clientX, 0), N) : 0, v = m ? Math.min(Math.max(m.clientY, 0), C) : 0, _ = d?.ref?.current || void 0;
  if (!m)
    return null;
  const j = e?.[m.index], y = La(
    j ? {
      specialCauseSinglePointUp: !!j.rules.singlePoint.up,
      specialCauseSinglePointDown: !!j.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!j.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!j.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!j.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!j.rules.fourOfFive.down,
      specialCauseShiftUp: !!j.rules.shift.up,
      specialCauseShiftDown: !!j.rules.shift.down,
      specialCauseTrendUp: !!j.rules.trend.up,
      specialCauseTrendDown: !!j.rules.trend.down
    } : null
  ).map((Le) => ({ id: Le, label: En[Le].tooltip })), w = m.x instanceof Date ? m.x : new Date(m.x), T = s ? s(w) : w.toDateString(), M = o ? `${o}` : "", A = a || M ? `${m.y}${M ? "" + M : " "}${a ? " " + a : ""}` : `${m.y}`, I = $a(j?.classification?.variation), D = hc(j?.classification?.assurance), $ = a0(
    t.mean ?? null,
    t.sigma,
    m.y
  ), H = n ? n(m.index, { x: m.x, y: m.y }) : void 0, Z = I || D || $, K = j?.rules.trend.up || j?.rules.trend.down, ne = j?.classification?.variation === qe.Neither && K, B = l && ne ? "Trend detected (monotonic run) – held neutral until values cross onto the favourable side of the mean." : null, F = y.length > 0, L = j && "primeDirection" in j ? j.primeDirection : void 0, G = j && "primeRuleId" in j ? j.primeRuleId : void 0, E = i && j?.classification?.variation === qe.Neither && F, O = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", P = pc(j?.classification?.variation), X = 6.2, Q = [
    H || "",
    `${T} • ${A}`
  ].filter(Boolean).reduce(
    (Le, _e) => Math.max(Le, _e.length * X + 32),
    0
  ), de = 200, V = 440, ae = Math.min(V, Math.max(de, Q));
  let le = k + 12, pe = (d.margin?.top ?? 0) + v + 16;
  le + ae > N && (le = k - -60 - ae), le < 0 && (le = Math.max(0, N - ae));
  const Ie = m ? `spc-tooltip-${m.index}` : "spc-tooltip", Ve = typeof m.index == "number" ? m.index : NaN, Te = _ ? _d(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: Ie,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (g ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: le,
          top: pe,
          width: ae,
          maxWidth: V,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": g ? "false" : "true",
        "data-floating": !0,
        "data-placement": le + ae + 12 > N ? "left" : "right",
        onPointerEnter: () => {
          p(!0), x.current && (cancelAnimationFrame(x.current), x.current = null);
        },
        onPointerLeave: () => {
          if (p(!1), !c?.focused) {
            const Le = requestAnimationFrame(() => {
              f(null), x.current = null;
            });
            x.current = Le;
          }
        },
        children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--point", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Point" }) }),
            /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__primary-line", children: [
              "Index: ",
              Ve
            ] })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Date" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: T })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Value" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__primary-line", children: A })
          ] }),
          Z && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Signals" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: I?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
              st,
              {
                text: I,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : I?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
              st,
              {
                text: I,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : E ? /* @__PURE__ */ r.jsx(
              st,
              {
                text: "No judgement",
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                "aria-label": "Neutral special cause (no directional judgement)"
              }
            ) : I ? /* @__PURE__ */ r.jsx(
              st,
              {
                text: I,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            ) : null })
          ] }),
          D && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Le = D.toLowerCase(), R = !(Le.includes("not met") || Le.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Le);
              return /* @__PURE__ */ r.jsx(
                st,
                {
                  text: D,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${R ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${D}`
                }
              );
            })() })
          ] }),
          $ && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              st,
              {
                text: (() => {
                  const Le = $.toLowerCase();
                  return Le.startsWith("within 1") ? "≤1σ" : Le.startsWith("1–2") ? "1–2σ" : Le.startsWith("2–3") ? "2–3σ" : Le.startsWith(">3") ? ">3σ" : $;
                })(),
                color: $.includes(">3") ? "orange" : $.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${$}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          B && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--gating", "data-gating": !0, children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Trend gating" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__explanation", "aria-live": "off", children: B })
          ] }),
          F && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ r.jsx(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: y.map(({ id: Le, label: _e }) => {
                  const R = String(Le), se = R === ur.TrendIncreasing || R === ur.TrendDecreasing ? "fdp-spc-tag--trend" : E ? "fdp-spc-tag--no-judgement" : I ? I.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : I.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common";
                  return /* @__PURE__ */ r.jsx(
                    st,
                    {
                      text: _e,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${se}`,
                      "data-rule-id": R
                    },
                    R
                  );
                })
              }
            ),
            L && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", style: { marginTop: 16 }, children: [
              /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", style: { marginBottom: 6 }, children: /* @__PURE__ */ r.jsx("strong", { children: "Prime Direction" }) }),
              (() => {
                const Le = E ? "fdp-spc-tag--no-judgement" : I ? I.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : I.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", _e = `${L}${G ? ` (${G})` : ""}`;
                return /* @__PURE__ */ r.jsx(
                  st,
                  {
                    text: _e,
                    color: "default",
                    className: `fdp-spc-tooltip__tag fdp-spc-tag ${Le}`,
                    "aria-label": `Prime direction ${L}${G ? ` via ${G}` : ""}`
                  }
                );
              })()
            ] })
          ] })
        ] })
      }
    ),
    _
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
            cx: k,
            cy: v,
            r: 7,
            fill: "none",
            stroke: O,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: k,
            cy: v,
            r: 5,
            fill: "#000",
            stroke: O,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: k,
            cy: v,
            r: 2.5,
            fill: P,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Te
      ]
    }
  );
}, T0 = ({
  engineRows: e,
  measureName: t,
  measureUnit: n,
  onSignalFocus: a
}) => {
  const o = rn(), s = o?.focused ?? null, i = s?.index ?? null, l = typeof i == "number" && e ? e[i] : null, c = J.useMemo(
    () => l ? La({
      specialCauseSinglePointUp: !!l.rules.singlePoint.up,
      specialCauseSinglePointDown: !!l.rules.singlePoint.down,
      specialCauseTwoOfThreeUp: !!l.rules.twoOfThree.up,
      specialCauseTwoOfThreeDown: !!l.rules.twoOfThree.down,
      specialCauseFourOfFiveUp: !!l.rules.fourOfFive.up,
      specialCauseFourOfFiveDown: !!l.rules.fourOfFive.down,
      specialCauseShiftUp: !!l.rules.shift.up,
      specialCauseShiftDown: !!l.rules.shift.down,
      specialCauseTrendUp: !!l.rules.trend.up,
      specialCauseTrendDown: !!l.rules.trend.down
    }) : [],
    [l]
  ), d = J.useMemo(
    () => Array.from(
      new Set(c.map((m) => En[m]?.narration).filter(Boolean))
    ),
    [c]
  ), u = l ? $a(l.classification?.variation) : null, f = l ? hc(l.classification?.assurance) : null, h = c.length > 0, p = l ? l.classification?.variation === qe.Neither && h : !1, x = J.useRef(null);
  return J.useEffect(() => {
    if (!a || !s || l == null) return;
    const m = `${s.seriesId}:${s.index}`;
    if (x.current !== m) {
      x.current = m;
      try {
        a({
          index: s.index,
          x: s.x,
          y: s.y,
          row: l,
          rules: c
        });
      } catch {
      }
    }
  }, [s?.seriesId, s?.index, s?.x, s?.y, l, c, a]), /* @__PURE__ */ r.jsxs(
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
          (u || p || f) && /* @__PURE__ */ r.jsx(
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
                    u?.toLowerCase().includes("concern") ? /* @__PURE__ */ r.jsx(
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
                      }
                    ) : u?.toLowerCase().includes("improvement") ? /* @__PURE__ */ r.jsx(
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
                      }
                    ) : p ? /* @__PURE__ */ r.jsx(
                      st,
                      {
                        text: "No judgement",
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--no-judgement",
                        "aria-label": "Neutral special cause (no directional judgement)"
                      }
                    ) : u ? /* @__PURE__ */ r.jsx(
                      st,
                      {
                        text: u,
                        color: "default",
                        className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
                      }
                    ) : null,
                    f && (() => {
                      const m = f.toLowerCase(), S = !(m.includes("not met") || m.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(m);
                      return /* @__PURE__ */ r.jsx(
                        st,
                        {
                          text: f,
                          color: "default",
                          className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${S ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
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
                children: c.length === 0 ? /* @__PURE__ */ r.jsx("span", { children: " None" }) : c.map((m) => {
                  const g = String(m), N = g === ur.TrendIncreasing || g === ur.TrendDecreasing ? "fdp-spc-tag--trend" : p ? "fdp-spc-tag--no-judgement" : u ? u.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : u.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--common" : "fdp-spc-tag--common", C = En[m]?.tooltip || g;
                  return /* @__PURE__ */ r.jsx(
                    st,
                    {
                      text: C,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${N}`,
                      "data-rule-id": g,
                      title: En[m]?.tooltip
                    },
                    g
                  );
                })
              }
            )
          ] }),
          d.length > 0 && /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "fdp-spc-inspector__narration",
              style: { marginTop: 8 },
              children: [
                /* @__PURE__ */ r.jsx("strong", { children: "Summary:" }),
                " ",
                d.join("; ")
              ]
            }
          )
        ] })
      ]
    }
  );
};
function L0(e, t = !0) {
  if (!e?.length) return [];
  const n = [...e];
  if (t) {
    for (let s = 1; s < n.length - 1; s++)
      n[s] === gt.Common && n[s - 1] === n[s + 1] && n[s - 1] !== gt.Common && (n[s] = n[s - 1]);
    let o = 0;
    for (; o < n.length; ) {
      const s = n[o];
      let i = o + 1;
      for (; i < n.length && n[i] === s; ) i++;
      i - o === 1 && s !== gt.Common && (n[o] = gt.Common), o = i;
    }
  }
  const a = [];
  if (n.length) {
    let o = 0;
    for (let s = 1; s <= n.length; s++)
      if (s === n.length || n[s] !== n[o]) {
        const i = n[o], l = s - 1, c = l - o + 1;
        (i === gt.Common || c >= 2) && a.push({ start: o, end: l, category: i }), o = s;
      }
  }
  return a;
}
var Kn = /* @__PURE__ */ ((e) => (e.Slope = "slope", e.Neutral = "neutral", e.Extend = "extend", e))(Kn || {}), Cc = /* @__PURE__ */ ((e) => (e.Ungated = "ungated", e.Gated = "gated", e))(Cc || {});
function $0(e) {
  const {
    ui: t,
    input: n,
    engine: a,
    container: o,
    a11y: s,
    visualsEngine: i,
    meta: l,
    data: c,
    ariaLabel: d,
    height: u,
    showZones: f,
    showPoints: h,
    announceFocus: p,
    className: x,
    unit: m,
    targets: g,
    baselines: S,
    ghosts: N,
    settings: C,
    chartType: k,
    metricImprovement: v,
    gradientSequences: _,
    sequenceTransition: j,
    processLineWidth: b,
    showPartitionMarkers: y,
    showWarningsPanel: w,
    warningsFilter: T,
    enableNeutralNoJudgement: M,
    showTrendGatingExplanation: A,
    trendVisualMode: I,
    alwaysShowZeroY: D,
    alwaysShowHundredY: $,
    percentScale: H,
    showTrendStartMarkers: Z,
    showFirstFavourableCrossMarkers: K,
    showTrendBridgeOverlay: ne,
    showSignalsInspector: B,
    onSignalFocus: F,
    showIcons: L,
    showEmbeddedIcon: G,
    embeddedIconVariant: E,
    embeddedIconRunLength: O,
    showFocusIndicator: P,
    visualsScenario: X,
    visualsEngineSettings: Y,
    source: Q,
    narrationContext: de,
    highlightOutOfControl: V,
    precomputed: ae
  } = e;
  process.env.NODE_ENV !== "production" && (!n && (g !== void 0 || S !== void 0 || N !== void 0) && console.warn(
    "SPCChart: Flat input props (targets/baselines/ghosts) are deprecated. Use input={{ data, targets, baselines, ghosts }} instead."
  ), !a && C !== void 0 && console.warn(
    "SPCChart: Flat engine prop 'settings' is deprecated. Use engine={{ chartType, metricImprovement, settings }}."
  ), !o && (u !== void 0 || x !== void 0) && console.warn(
    "SPCChart: Consider grouped container props. Use container={{ height, className }}."
  ), !s && (d !== void 0 || p !== void 0 || de !== void 0 || m !== void 0) && console.warn(
    "SPCChart: Consider grouped accessibility props. Use a11y={{ label, announceFocus, narrationContext, unit }}."
  ), !i && (X !== void 0 || Y !== void 0) && console.warn(
    "SPCChart: Consider grouped visuals engine props. Use visualsEngine={{ scenario, settings }}."
  ), t?.visuals === void 0 && (f !== void 0 || h !== void 0) && console.warn(
    "SPCChart: Visual toggles should be grouped. Use ui={{ visuals: { showZones, showPoints } }}."
  ), t?.visuals?.rules === void 0 && V !== void 0 && console.warn(
    "SPCChart: Prefer grouped rules toggle. Use ui={{ visuals: { rules: { highlightOutOfControl } } }}."
  ), !l && Q !== void 0 && console.warn(
    "SPCChart: Consider grouped meta. Use meta={{ source }}."
  ));
  const le = n?.data ?? c ?? [], be = n?.targets ?? g, pe = n?.baselines ?? S, Ie = n?.ghosts ?? N, Ve = a?.chartType ?? k ?? dc.XmR, Te = a?.metricImprovement ?? v ?? cn.Neither, Le = a?.settings ?? C, _e = a?.autoRecalc, R = t?.axes?.alwaysShowZeroY ?? D ?? !1, q = t?.axes?.alwaysShowHundredY ?? $ ?? !1, se = t?.axes?.percentScale ?? H ?? !1, he = t?.visuals?.gradientSequences ?? _ ?? !0, me = t?.visuals?.sequenceTransition ?? j ?? "slope", z = t?.visuals?.processLineWidth ?? b ?? 2, W = t?.visuals?.trend?.visualMode ?? I ?? "ungated", oe = t?.visuals?.trend?.showGatingExplanation ?? A ?? !0, ee = t?.visuals?.rules?.enableNeutralNoJudgement ?? M ?? !0, re = t?.visuals?.rules?.enableRules ?? e.enableRules ?? !0, ce = t?.visuals?.showZones, ue = t?.visuals?.showPoints, ve = t?.visuals?.rules?.highlightOutOfControl, Ne = o?.height, He = o?.className, Ye = s?.label, lt = s?.unit, Qe = s?.narrationContext, ie = i?.scenario, Ae = i?.settings, U = l?.source, te = t?.overlays?.partitionMarkers ?? y ?? !1, xe = t?.overlays?.trendStartMarkers ?? Z ?? !1, ge = t?.overlays?.firstFavourableCrossMarkers ?? K ?? !1, ye = t?.overlays?.trendBridge ?? ne ?? !1, Se = t?.inspector?.show ?? B ?? !1, Be = t?.inspector?.onFocus ?? F, Ce = t?.warnings?.show ?? w ?? !1, Me = t?.warnings?.filter ?? T, we = t?.icons?.show ?? L ?? !1, je = t?.icons?.embedded?.show ?? G ?? !0, Ke = t?.icons?.embedded?.variant ?? E ?? yn.Classic, ot = t?.icons?.embedded?.runLength ?? O, $e = t?.overlays?.focusIndicator ?? P ?? !0;
  return {
    effData: le,
    effTargets: be,
    effBaselines: pe,
    effGhosts: Ie,
    effChartTypeCore: Ve,
    effMetricImprovementCore: Te,
    effEngineSettings: Le,
    effEngineAutoRecalc: _e,
    effHeight: Ne,
    effClassName: He,
    effAriaLabel: Ye,
    effUnit: lt,
    effNarrationContext: Qe,
    effShowZones: ce,
    effShowPoints: ue,
    effHighlightOutOfControl: ve,
    effVisualsScenario: ie,
    effVisualsEngineSettings: Ae,
    effPrecomputedVisuals: ae,
    effSource: U,
    effAlwaysShowZeroY: R,
    effAlwaysShowHundredY: q,
    effPercentScale: se,
    effGradientSequences: he,
    effSequenceTransition: me,
    effProcessLineWidth: z,
    effTrendVisualMode: W,
    effShowTrendGatingExplanation: oe,
    effEnableNeutralNoJudgement: ee,
    effEnableRules: re,
    effShowPartitionMarkers: te,
    effShowTrendStartMarkers: xe,
    effShowFirstFavourableCrossMarkers: ge,
    effShowTrendBridgeOverlay: ye,
    effShowSignalsInspector: Se,
    effOnSignalFocus: Be,
    effShowWarningsPanel: Ce,
    effWarningsFilter: Me,
    effShowIcons: we,
    effShowEmbeddedIcon: je,
    effEmbeddedIconVariant: Ke,
    effEmbeddedIconRunLength: ot,
    effShowFocusIndicator: $e
  };
}
let A0 = 0;
const E0 = ({ data: e, targets: t, visuals: n, a11y: a, axis: o, compute: s }) => {
  const {
    series: i,
    engineRows: l,
    visualCategories: c,
    partitionMarkers: d
  } = e, { limits: u, uniformTarget: f } = t, {
    showPoints: h,
    showZones: p,
    highlightOutOfControl: x,
    gradientSequences: m,
    sequenceTransition: g,
    processLineWidth: S,
    showFocusIndicator: N = !1,
    enableRules: C,
    enableNeutralNoJudgement: k = !0,
    showTrendStartMarkers: v = !1,
    showFirstFavourableCrossMarkers: _ = !1,
    showTrendBridgeOverlay: j = !1
  } = n, {
    announceFocus: b,
    ariaLabel: y,
    narrationContext: w,
    showSignalsInspector: T = !1,
    onSignalFocus: M,
    showTrendGatingExplanation: A = !0
  } = a, { zeroBreakSlotGapPx: I } = o, { metricImprovement: D, effectiveUnit: $ } = s, H = kn(), Z = un();
  if (!H) return null;
  const { xScale: K, yScale: ne } = H, B = J.useRef(
    "spc-seq-" + ++A0
  ), F = rn(), L = i[0]?.data || [], G = J.useMemo(() => {
    if (!u.ucl && !u.lcl) return /* @__PURE__ */ new Set();
    const R = /* @__PURE__ */ new Set();
    return L.forEach((q, se) => {
      typeof u.ucl == "number" && q.y > u.ucl && R.add(se), typeof u.lcl == "number" && q.y < u.lcl && R.add(se);
    }), R;
  }, [u.ucl, u.lcl, L]), E = J.useMemo(() => {
    if (!l || !l.length) return null;
    const R = [];
    return l.forEach((q, se) => {
      const he = q.classification.variation === qe.Concern || q.classification.variation === qe.Improvement || !!q.classification.neutralSpecialCauseValue, me = !!q.rules.singlePoint.up || !!q.rules.twoOfThree.up || !!q.rules.fourOfFive.up || !!q.rules.shift.up || !!q.rules.trend.up, z = !!q.rules.singlePoint.down || !!q.rules.twoOfThree.down || !!q.rules.fourOfFive.down || !!q.rules.shift.down || !!q.rules.trend.down;
      R[se] = {
        variation: q.classification.variation,
        assurance: q.classification.assurance,
        special: he,
        concern: q.classification.variation === qe.Concern,
        improvement: q.classification.variation === qe.Improvement,
        trendUp: !!q.rules.trend.up,
        trendDown: !!q.rules.trend.down,
        upAny: me,
        downAny: z,
        neutralSpecial: !!q.classification.neutralSpecialCauseValue,
        shiftUp: !!q.rules.shift.up,
        shiftDown: !!q.rules.shift.down,
        twoOfThreeUp: !!q.rules.twoOfThree.up,
        twoOfThreeDown: !!q.rules.twoOfThree.down,
        fourOfFiveUp: !!q.rules.fourOfFive.up,
        fourOfFiveDown: !!q.rules.fourOfFive.down,
        partitionId: q.partition.id ?? null
      };
    }), R;
  }, [l]), O = J.useMemo(() => (c || []).map((R) => R === it.Improvement ? gt.Improvement : R === it.Concern ? gt.Concern : R === it.NoJudgement ? gt.NoJudgement : gt.Common), [c]), P = J.useMemo(() => !m || !O.length ? [] : L0(O, !0), [m, O, y]), X = J.useMemo(
    () => L.map((R) => K(R.x instanceof Date ? R.x : new Date(R.x))),
    [L, K]
  ), Y = K.range()[1], Q = K.range()[0], de = J.useMemo(() => {
    if (!l || !l.length)
      return null;
    let R = Number.POSITIVE_INFINITY, q = Number.POSITIVE_INFINITY;
    if (l.forEach((ee, re) => {
      ee.rules.trend.up && (R = Math.min(R, re)), ee.rules.trend.down && (q = Math.min(q, re));
    }), !Number.isFinite(R) && !Number.isFinite(q))
      return null;
    const se = R <= q, he = se ? Et.Up : Et.Down, me = se ? R : q, z = (ee) => D == null || D === cn.Neither || ee == null || typeof ee.data.value != "number" || typeof ee.limits.mean != "number" ? !1 : he === Et.Up ? D === cn.Up ? ee.data.value > ee.limits.mean : ee.data.value < ee.limits.mean : D === cn.Down ? ee.data.value < ee.limits.mean : ee.data.value > ee.limits.mean;
    let W = null;
    for (let ee = me; ee < l.length; ee++) {
      const re = l[ee];
      if (!(se ? !!re.rules.trend.up : !!re.rules.trend.down)) break;
      if (z(re)) {
        W = ee;
        break;
      }
    }
    let oe = !1;
    if (W != null) {
      let ee = 0;
      for (let re = W; re < l.length; re++) {
        const ce = l[re];
        if (!(se ? !!ce.rules.trend.up : !!ce.rules.trend.down)) break;
        z(ce) && ee++;
      }
      oe = ee >= 2;
    }
    return {
      direction: he,
      detectedAt: me,
      firstFavourableCrossAt: W,
      persistedAcrossMean: oe
    };
  }, [l, D]), V = J.useMemo(() => {
    if (!l || !l.length) return null;
    const R = (q) => {
      const se = [];
      let he = null, me = null;
      for (let z = 0; z < l.length; z++) {
        const W = l[z], oe = q(W), ee = typeof oe == "number" && !isNaN(oe) ? oe : null;
        if (ee == null) {
          he !== null && me != null && (se.push({
            x1: X[he],
            x2: X[z - 1],
            y: ne(me)
          }), he = null, me = null);
          continue;
        }
        if (he === null) {
          he = z, me = ee;
          continue;
        }
        me != null && Math.abs(ee - me) <= 1e-9 || (me != null && se.push({
          x1: X[he],
          x2: X[z - 1],
          y: ne(me)
        }), he = z, me = ee);
      }
      return he !== null && me != null && se.push({
        x1: X[he],
        x2: X[l.length - 1],
        y: ne(me)
      }), se;
    };
    return {
      mean: R((q) => q.limits.mean ?? null),
      ucl: R((q) => q.limits.ucl ?? null),
      lcl: R((q) => q.limits.lcl ?? null),
      onePos: R((q) => q.limits.oneSigma.upper ?? null),
      oneNeg: R((q) => q.limits.oneSigma.lower ?? null),
      twoPos: R((q) => q.limits.twoSigma.upper ?? null),
      twoNeg: R((q) => q.limits.twoSigma.lower ?? null)
    };
  }, [l, X, ne]), ae = J.useMemo(() => P.length ? /* @__PURE__ */ r.jsxs("defs", { children: [
    /* @__PURE__ */ r.jsxs(
      "linearGradient",
      {
        id: `${B.current}-grad-common`,
        x1: "0%",
        y1: "0%",
        x2: "0%",
        y2: "100%",
        children: [
          /* @__PURE__ */ r.jsx(
            "stop",
            {
              offset: "0%",
              stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
              stopOpacity: 0.28
            }
          ),
          /* @__PURE__ */ r.jsx(
            "stop",
            {
              offset: "70%",
              stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
              stopOpacity: 0.12
            }
          ),
          /* @__PURE__ */ r.jsx(
            "stop",
            {
              offset: "100%",
              stopColor: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
              stopOpacity: 0.045
            }
          )
        ]
      }
    ),
    P.map((R, q) => {
      const se = `${B.current}-grad-${q}`;
      let he, me = 0.28, z = 0.12, W = 0.045;
      switch (R.category) {
        case gt.Concern:
          he = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", me = 0.28, z = 0.12, W = 0.045;
          break;
        case gt.Improvement:
          he = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", me = 0.26, z = 0.11, W = 0.045;
          break;
        case gt.NoJudgement:
          he = "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", me = 0.26, z = 0.11, W = 0.045;
          break;
        default:
          he = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ r.jsxs("linearGradient", { id: se, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: he, stopOpacity: me }),
        /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: he, stopOpacity: z }),
        /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: he, stopOpacity: W })
      ] }, se);
    })
  ] }) : null, [P]), le = J.useMemo(() => {
    if (!P.length) return null;
    const [R] = ne.domain(), q = ne(R), se = P.map((he, me) => {
      const { start: z, end: W, category: oe } = he;
      if (z < 0 || W >= X.length || z > W)
        return null;
      const ee = X[z], re = X[W];
      let ce = "";
      if (oe === gt.Common) {
        const ue = me > 0 ? P[me - 1] : null, ve = me < P.length - 1 ? P[me + 1] : null, Ne = ue ? X[ue.end] : Q, He = ue ? ne(L[ue.end].y) : q, Ye = ve ? X[ve.start] : Y, lt = ve ? ne(L[ve.start].y) : q;
        ce = `M ${Ne} ${q}`, ce += ` L ${Ne} ${He}`;
        for (let Qe = z; Qe <= W; Qe++)
          ce += ` L ${X[Qe]} ${ne(L[Qe].y)}`;
        ce += ` L ${Ye} ${lt}`, ce += ` L ${Ye} ${q} Z`;
      } else {
        const ue = me > 0 ? P[me - 1] : null, ve = me < P.length - 1 ? P[me + 1] : null, Ne = ue && ue.category !== gt.Common, He = ve && ve.category !== gt.Common, Ye = ne(L[z].y), lt = ne(L[W].y);
        let Qe = ee, ie = re;
        if (Ne) {
          const Ae = X[ue.end], U = ne(L[ue.end].y), te = L[z].y - L[ue.end].y;
          g === Kn.Slope && te > 0 ? (ce = `M ${Ae} ${U} L ${ee} ${Ye}`, Qe = Ae) : (ce = `M ${ee} ${q} L ${ee} ${Ye}`, Qe = ee);
        } else
          ce = `M ${ee} ${q} L ${ee} ${Ye}`;
        for (let Ae = z + 1; Ae <= W; Ae++)
          ce += ` L ${X[Ae]} ${ne(L[Ae].y)}`;
        if (ce += ` L ${re} ${lt}`, He) {
          const Ae = X[ve.start], U = ne(L[ve.start].y), te = L[ve.start].y - L[W].y;
          (g === Kn.Slope && te <= 0 || g === Kn.Extend) && (ce += ` L ${Ae} ${U}`, ie = Ae);
        }
        if (ce += ` L ${ie} ${q}`, ce += ` L ${Qe} ${q} Z`, g === Kn.Neutral && Ne) {
          const Ae = X[ue.end], U = ne(L[ue.end].y), te = /* @__PURE__ */ r.jsx(
            "path",
            {
              d: `M ${Ae} ${q} L ${Ae} ${U} L ${ee} ${Ye} L ${ee} ${q} Z`,
              fill: `url(#${B.current}-grad-common)`,
              stroke: "none",
              className: "fdp-spc__sequence-bg",
              "aria-hidden": "true"
            },
            `seq-wedge-${me}`
          );
          return /* @__PURE__ */ r.jsxs("g", { children: [
            te,
            /* @__PURE__ */ r.jsx(
              "path",
              {
                d: ce,
                fill: `url(#${B.current}-grad-${me})`,
                stroke: "none",
                className: "fdp-spc__sequence-bg",
                "aria-hidden": "true"
              },
              `seq-area-${me}`
            )
          ] }, `seq-group-${me}`);
        }
      }
      return /* @__PURE__ */ r.jsx(
        "path",
        {
          d: ce,
          fill: `url(#${B.current}-grad-${me})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${me}`
      );
    }).filter(Boolean);
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: se });
  }, [P, X, Y, ne, L, g]), be = J.useMemo(() => {
    if (!w?.timeframe && L.length >= 2) {
      const R = L.map((W) => W.x instanceof Date ? W.x : new Date(W.x)), q = new Date(Math.min(...R.map((W) => W.getTime()))), se = new Date(Math.max(...R.map((W) => W.getTime()))), he = Math.round((se.getTime() - q.getTime()) / 864e5) || 0;
      if (he < 14)
        return `The chart shows a timeframe of ${he + 1} days`;
      const me = Math.round(he / 7);
      return me < 20 ? `The chart shows a timeframe of ${me} weeks` : `The chart shows a timeframe of ${(se.getFullYear() - q.getFullYear()) * 12 + (se.getMonth() - q.getMonth()) + 1} months`;
    }
    if (w?.timeframe)
      return `The chart shows a timeframe of ${w.timeframe}`;
  }, [w?.timeframe, L]), pe = (R) => {
    const q = R % 10, se = R % 100;
    return q === 1 && se !== 11 ? `${R}st` : q === 2 && se !== 12 ? `${R}nd` : q === 3 && se !== 13 ? `${R}rd` : `${R}th`;
  }, Ie = (R) => `${pe(R.getDate())} ${R.toLocaleString("en-GB", { month: "long" })}, ${R.getFullYear()}`, Ve = (R) => ({
    specialCauseSinglePointUp: !!R?.rules.singlePoint.up,
    specialCauseSinglePointDown: !!R?.rules.singlePoint.down,
    specialCauseTwoOfThreeUp: !!R?.rules.twoOfThree.up,
    specialCauseTwoOfThreeDown: !!R?.rules.twoOfThree.down,
    specialCauseFourOfFiveUp: !!R?.rules.fourOfFive.up,
    specialCauseFourOfFiveDown: !!R?.rules.fourOfFive.down,
    specialCauseShiftUp: !!R?.rules.shift.up,
    specialCauseShiftDown: !!R?.rules.shift.down,
    specialCauseTrendUp: !!R?.rules.trend.up,
    specialCauseTrendDown: !!R?.rules.trend.down
  }), Te = J.useCallback(
    ({
      index: R,
      x: q,
      y: se
    }) => {
      const he = l?.[R], me = q instanceof Date ? q : new Date(q), z = Ie(me), W = w?.measureUnit ? ` ${w.measureUnit}` : "", oe = w?.measureName ? ` ${w.measureName}` : "";
      if (!he)
        return `General summary is: ${be ? be + ". " : ""}Point ${R + 1}, ${z}, ${se}${W}${oe}`;
      const ee = $a(he.classification?.variation) || "Variation", re = La(Ve(he)), ce = re.length ? ` Rules: ${[...new Set(re.map((ve) => En[ve].narration))].join("; ")}.` : " No special cause rules.", ue = [];
      return w?.measureName && ue.push(`Measure: ${w.measureName}.`), w?.datasetContext && ue.push(`${w.datasetContext}.`), w?.organisation && ue.push(`Organisation: ${w.organisation}.`), w?.additionalNote && ue.push(w.additionalNote), [
        "General summary is:",
        ...ue,
        `Point ${R + 1} recorded on `,
        z + ",",
        `with a value of ${se} ${W}${oe}`,
        ee + ".",
        ce
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [l, w, be]
  ), Le = J.useCallback(
    (R, q) => l?.[R] ? Te({
      index: R,
      seriesId: "process",
      x: q.x instanceof Date ? q.x : new Date(q.x),
      y: q.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [l, Te]
  ), _e = J.useMemo(() => {
    try {
      const R = typeof ne?.domain == "function" ? ne.domain() : void 0;
      if (!R || !Array.isArray(R) || R.length < 2) return !1;
      const q = Math.min(R[0], R[1]), se = Math.max(R[0], R[1]);
      return !(0 >= q && 0 <= se);
    } catch {
      return !1;
    }
  }, [ne]);
  return /* @__PURE__ */ r.jsx(Xg, { children: /* @__PURE__ */ r.jsxs(
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
            width: H.xScale.range()[1] + 56 + 16,
            height: (Z?.innerHeight ?? H.yScale.range()[0]) + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ r.jsxs("g", { transform: "translate(56,12)", children: [
              /* @__PURE__ */ r.jsx(Di, { type: "x" }),
              /* @__PURE__ */ r.jsx(
                Di,
                {
                  type: "y",
                  yZeroBreak: {
                    enabled: _e,
                    gapPx: I,
                    zigZag: { heightPx: 64, amplitudePx: 4, cycles: 6, stepXPx: 3 }
                  }
                }
              ),
              /* @__PURE__ */ r.jsx(gg, { axis: "y" }),
              ae,
              le,
              d.map((R, q) => {
                const se = L[R];
                if (!se) return null;
                const he = K(se.x instanceof Date ? se.x : new Date(se.x));
                return /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: he,
                    x2: he,
                    y1: 0,
                    y2: ne.range()[0],
                    stroke: "#555",
                    strokeDasharray: "4 4",
                    strokeWidth: 1,
                    "aria-hidden": "true",
                    className: "fdp-spc__partition-marker"
                  },
                  `partition-marker-${q}`
                );
              }),
              V?.mean.length ? /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__cl-group", children: [
                V.mean.map((R, q) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__cl",
                    x1: R.x1,
                    x2: R.x2,
                    y1: R.y,
                    y2: R.y
                  },
                  `mean-${q}`
                )),
                V.mean.map((R, q) => {
                  if (q === V.mean.length - 1) return null;
                  const se = V.mean[q + 1];
                  if (!se || R.y === se.y) return null;
                  const me = Math.max(4, se.x1 - R.x2 || 0) * 0.5, z = `M ${R.x2},${R.y} C ${R.x2 + me},${R.y} ${se.x1 - me},${se.y} ${se.x1},${se.y}`;
                  return /* @__PURE__ */ r.jsx(
                    "path",
                    {
                      className: "fdp-spc__cl fdp-spc__cl-join",
                      d: z,
                      fill: "none"
                    },
                    `mean-join-${q}`
                  );
                })
              ] }) : null,
              f != null && /* @__PURE__ */ r.jsx(r.Fragment, {}),
              V?.ucl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--ucl",
                  children: [
                    V.ucl.map((R, q) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--ucl",
                        x1: R.x1,
                        x2: R.x2,
                        y1: R.y,
                        y2: R.y,
                        strokeWidth: 2
                      },
                      `ucl-${q}`
                    )),
                    V.ucl.map((R, q) => {
                      if (q === V.ucl.length - 1) return null;
                      const se = V.ucl[q + 1];
                      if (!se || R.y === se.y) return null;
                      const me = Math.max(4, se.x1 - R.x2 || 0) * 0.5, z = `M ${R.x2},${R.y} C ${R.x2 + me},${R.y} ${se.x1 - me},${se.y} ${se.x1},${se.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--ucl fdp-spc__limit-join",
                          d: z,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `ucl-join-${q}`
                      );
                    })
                  ]
                }
              ) : null,
              V?.lcl.length ? /* @__PURE__ */ r.jsxs(
                "g",
                {
                  "aria-hidden": "true",
                  className: "fdp-spc__limit-group fdp-spc__limit-group--lcl",
                  children: [
                    V.lcl.map((R, q) => /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        className: "fdp-spc__limit fdp-spc__limit--lcl",
                        x1: R.x1,
                        x2: R.x2,
                        y1: R.y,
                        y2: R.y,
                        strokeWidth: 2
                      },
                      `lcl-${q}`
                    )),
                    V.lcl.map((R, q) => {
                      if (q === V.lcl.length - 1) return null;
                      const se = V.lcl[q + 1];
                      if (!se || R.y === se.y) return null;
                      const me = Math.max(4, se.x1 - R.x2 || 0) * 0.5, z = `M ${R.x2},${R.y} C ${R.x2 + me},${R.y} ${se.x1 - me},${se.y} ${se.x1},${se.y}`;
                      return /* @__PURE__ */ r.jsx(
                        "path",
                        {
                          className: "fdp-spc__limit fdp-spc__limit--lcl fdp-spc__limit-join",
                          d: z,
                          fill: "none",
                          strokeWidth: 2
                        },
                        `lcl-join-${q}`
                      );
                    })
                  ]
                }
              ) : null,
              f != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: K.range()[1],
                    y1: ne(f),
                    y2: ne(f),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: K.range()[0] - 7,
                    y: ne(f) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      f,
                      " ",
                      $ || w?.measureUnit || ""
                    ]
                  }
                )
              ] }),
              p && V && V.mean.length > 0 && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                V.onePos.map((R, q) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: R.x1,
                    x2: R.x2,
                    y1: R.y,
                    y2: R.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `onePos-${q}`
                )),
                V.oneNeg.map((R, q) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: R.x1,
                    x2: R.x2,
                    y1: R.y,
                    y2: R.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `oneNeg-${q}`
                )),
                V.twoPos.map((R, q) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: R.x1,
                    x2: R.x2,
                    y1: R.y,
                    y2: R.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoPos-${q}`
                )),
                V.twoNeg.map((R, q) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: R.x1,
                    x2: R.x2,
                    y1: R.y,
                    y2: R.y,
                    "aria-hidden": "true",
                    strokeWidth: 2
                  },
                  `twoNeg-${q}`
                ))
              ] }),
              de && (v || _ || j) && (() => {
                const R = de.detectedAt, q = de.firstFavourableCrossAt, se = L[R] ? K(
                  L[R].x instanceof Date ? L[R].x : new Date(L[R].x)
                ) : null, he = L[R] ? ne(L[R].y) : null, me = q != null && L[q] ? K(
                  L[q].x instanceof Date ? L[q].x : new Date(L[q].x)
                ) : null, z = q != null && L[q] ? ne(L[q].y) : null;
                return /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__trend-overlays", children: [
                  j && se != null && he != null && me != null && z != null && /* @__PURE__ */ r.jsx(
                    "line",
                    {
                      x1: se,
                      y1: he,
                      x2: me,
                      y2: z,
                      stroke: "#888",
                      strokeDasharray: "4 4",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend bridge: start to first favourable-side point" })
                    }
                  ),
                  v && se != null && he != null && /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: se,
                      cy: he,
                      r: 6,
                      fill: "white",
                      stroke: "#555",
                      strokeWidth: 2,
                      children: /* @__PURE__ */ r.jsx("title", { children: "Trend start (run reached N)" })
                    }
                  ),
                  _ && me != null && z != null && /* @__PURE__ */ r.jsx("circle", { cx: me, cy: z, r: 5, fill: "#555", children: /* @__PURE__ */ r.jsx("title", { children: "First favourable-side inclusion" }) })
                ] });
              })(),
              /* @__PURE__ */ r.jsx(
                Kg,
                {
                  series: i[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: !1,
                  focusablePoints: !1,
                  focusIndex: -1,
                  parseX: (R) => R.x instanceof Date ? R.x : new Date(R.x),
                  smooth: !1,
                  strokeWidth: S
                }
              ),
              h && L.map((R, q) => {
                const se = K(R.x instanceof Date ? R.x : new Date(R.x)), he = ne(R.y), me = G.has(q), z = E?.[q], W = O[q], oe = W === gt.Improvement, ee = W === gt.Concern, re = W === gt.NoJudgement, ce = [
                  "fdp-spc__point",
                  me && x ? "fdp-spc__point--ooc" : null,
                  C && ee ? "fdp-spc__point--sc-concern" : null,
                  C && oe ? "fdp-spc__point--sc-improvement" : null,
                  C && k && re ? "fdp-spc__point--sc-no-judgement" : null,
                  z?.assurance === dn.Pass ? "fdp-spc__point--assurance-pass" : null,
                  z?.assurance === dn.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), ue = F?.focused?.index === q;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: se,
                    cy: he,
                    r: 5,
                    className: ce,
                    "data-variation": z?.variation,
                    "data-assurance": z?.assurance,
                    "aria-label": y,
                    ...ue ? { "aria-describedby": `spc-tooltip-${q}` } : {}
                  },
                  q
                );
              }),
              N && T && F?.focused && (() => {
                const R = F.focused, q = typeof R.index == "number" ? R.index : -1;
                if (q < 0 || !L[q]) return null;
                const se = K(
                  L[q].x instanceof Date ? L[q].x : new Date(L[q].x)
                ), he = ne(L[q].y), me = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
                return /* @__PURE__ */ r.jsxs("g", { className: "fdp-spc__focus-indicator", "aria-hidden": "true", children: [
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: se,
                      cy: he,
                      r: 7,
                      fill: "none",
                      stroke: me,
                      strokeWidth: 3
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: se,
                      cy: he,
                      r: 5,
                      fill: "#000",
                      stroke: me,
                      strokeWidth: 1.5
                    }
                  ),
                  /* @__PURE__ */ r.jsx(
                    "circle",
                    {
                      cx: se,
                      cy: he,
                      r: 2.5,
                      fill: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)",
                      stroke: "#fff",
                      strokeWidth: 0.5
                    }
                  )
                ] });
              })(),
              Z && /* @__PURE__ */ r.jsx(
                F0,
                {
                  width: K.range()[1],
                  height: ne.range()[0]
                }
              ),
              !T && /* @__PURE__ */ r.jsx(
                Nc,
                {
                  engineRows: l,
                  limits: { mean: u.mean, sigma: u.sigma },
                  pointDescriber: Le,
                  measureName: w?.measureName,
                  measureUnit: w?.measureUnit,
                  dateFormatter: (R) => Ie(R),
                  enableNeutralNoJudgement: k,
                  showTrendGatingExplanation: A
                }
              )
            ] })
          }
        ),
        T && /* @__PURE__ */ r.jsx("div", { style: { marginTop: 8 }, children: /* @__PURE__ */ r.jsx(
          T0,
          {
            engineRows: l,
            measureName: w?.measureName,
            measureUnit: $ || w?.measureUnit,
            onSignalFocus: M
          }
        ) }),
        b && /* @__PURE__ */ r.jsx(
          Qg,
          {
            format: (R) => Te({ ...R, x: R.x instanceof Date ? R.x : new Date(R.x) })
          }
        )
      ]
    }
  ) });
}, F0 = ({
  width: e,
  height: t
}) => {
  const n = rn();
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
};
function Oi(e) {
  if (e == null) return;
  const t = e instanceof Date ? e : new Date(e);
  return Number.isNaN(t.valueOf()) ? void 0 : t;
}
function P0(e, t, n) {
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
function R0(e, t) {
  const n = e.filter(Boolean);
  if (n.length < 2) return t;
  const a = [];
  for (let c = 1; c < n.length; c++)
    a.push(n[c].getTime() - n[c - 1].getTime());
  const o = a.sort((c, d) => c - d), s = o[Math.floor(o.length / 2)], i = 3600 * 1e3, l = 24 * i;
  return s <= 2 * i ? "hourly" : s <= 2 * l ? "daily" : s <= 10 * l ? "weekly" : s <= 45 * l ? "monthly" : s <= 120 * l ? "quarterly" : "annually";
}
function Ui(e, t) {
  if (e)
    try {
      switch (t) {
        case "hourly":
          return new Intl.DateTimeFormat(void 0, {
            hour: "2-digit",
            minute: "2-digit",
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
        case "daily":
          return new Intl.DateTimeFormat(void 0, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
        case "weekly":
          return `Week of ${new Intl.DateTimeFormat(void 0, { day: "2-digit", month: "short", year: "numeric" }).format(e)}`;
        case "monthly":
          return new Intl.DateTimeFormat(void 0, {
            month: "short",
            year: "numeric"
          }).format(e);
        case "quarterly":
          return `Q${Math.floor(e.getMonth() / 3) + 1} ${e.getFullYear()}`;
        case "annually":
          return `${e.getFullYear()}`;
        default:
          return new Intl.DateTimeFormat(void 0, {
            day: "2-digit",
            month: "short",
            year: "numeric"
          }).format(e);
      }
    } catch {
      return;
    }
}
function B0(e, t, n, a = "0-100") {
  if (t) return t;
  if (n) return n;
  const o = e.filter((l) => l != null);
  if (!o.length) return;
  const s = Math.min(...o), i = Math.max(...o);
  if (a === "0-1") {
    if (s >= 0 && i <= 1 && i > 0) return "%";
  } else if (s >= 0 && i <= 100 && i > 0) return "%";
}
function H0(e, t, n = 1) {
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
function jc(e) {
  const {
    values: t,
    dates: n,
    intervalHint: a,
    startDate: o,
    providedUnit: s,
    defaultUnit: i,
    autoValue: l = !0,
    autoDelta: c = !0,
    autoMetadata: d = !0,
    deltaConfig: u
  } = e, f = t.map(
    (y) => typeof y == "number" ? y : y == null ? null : Number(y)
  );
  let h = -1;
  for (let y = f.length - 1; y >= 0; y--)
    if (f[y] != null) {
      h = y;
      break;
    }
  let p = (n || []).map(Oi);
  if (!p.some(Boolean)) {
    const y = Oi(o);
    y && a ? p = P0(f.length, y, a) : p = new Array(f.length).fill(void 0);
  }
  const m = R0(p, a), g = B0(
    f,
    s,
    i,
    e.percentHeuristic
  ), S = l && h >= 0 && f[h] != null ? f[h] : void 0, N = {
    strategy: "previous",
    n: 1,
    absolute: !0,
    skipNulls: !0,
    ...u || {}
  };
  function C() {
    if (h < 0) return -1;
    if (N.strategy === "previous" || N.strategy === "n-points") {
      let A = h - (N.strategy === "previous" ? 1 : Math.max(1, N.n || 1));
      if (!N.skipNulls) return A;
      for (let I = A; I >= 0; I--) if (f[I] != null) return I;
      return -1;
    }
    const y = p[h];
    if (!y) return -1;
    const w = new Date(y);
    w.setFullYear(w.getFullYear() - 1);
    let T = -1, M = 1 / 0;
    for (let A = 0; A < p.length; A++) {
      const I = p[A];
      if (!I || f[A] == null) continue;
      const D = Math.abs(I.getTime() - w.getTime());
      D < M && (M = D, T = A);
    }
    return T;
  }
  const k = C(), v = k >= 0 ? f[k] : null;
  let _;
  if (c && S != null && v != null) {
    const y = S - v, w = N.absolute !== !1, T = w ? y : v === 0 ? 0 : y / Math.abs(v) * 100;
    _ = {
      value: Number.isFinite(T) ? Number(T.toFixed(2)) : 0,
      isPercent: w ? g === "%" : !0,
      period: `vs ${H0(m, a, N.strategy === "n-points" ? Math.max(1, N.n || 1) : 1)}`
    };
  }
  const j = h >= 0 ? p[h] : void 0, b = d && Ui(j, m) ? `Latest: ${Ui(j, m)}` : void 0;
  return { value: S, unit: g, delta: _, metadata: b, latestDate: j, frequency: m };
}
function z0(e) {
  const { rows: t } = br(e), n = vs(e);
  return { rows: t, visuals: n.visuals };
}
const ks = 13;
function Ns(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => {
      switch (t) {
        case it.Improvement:
          return qe.Improvement;
        case it.Concern:
          return qe.Concern;
        case it.NoJudgement:
          return qe.Neither;
        default:
          return null;
      }
    });
}
function Mc(e) {
  if (!(!e || e.length === 0))
    return e.map((t) => t === it.NoJudgement);
}
function Wi(e, t) {
  const n = e === Mt.G ? Mt.G : e === Mt.T ? Mt.T : Mt.XmR, a = t === Xe.Up ? Xe.Up : t === Xe.Down ? Xe.Down : Xe.Neither;
  return { chartType: n, metricImprovement: a };
}
function Gi(e, t, n) {
  const a = typeof e?.minimumPoints == "number" && !isNaN(e.minimumPoints) ? e.minimumPoints : ks, o = { minimumPoints: a };
  return t.filter(
    (i) => !i.ghost && typeof i.value == "number"
  ).length >= a && (o.chartLevelEligibility = !0), e?.enableFourOfFiveRule != null && (o.enableFourOfFiveRule = !!e.enableFourOfFiveRule), n && Object.assign(o, n), Object.keys(o).length ? o : void 0;
}
function O0(e, t, n) {
  const a = J.useMemo(() => {
    if (!e || e.length < 2) return !1;
    const i = Math.min(e[0], e[1]), l = Math.max(e[0], e[1]);
    return !(0 >= i && 0 <= l);
  }, [e]), { slotPx: o, totalReservedPx: s } = J.useMemo(() => {
    if (!a) return { slotPx: 0, totalReservedPx: 0 };
    const l = (t ?? 260) - 60, c = Tr, u = c + ug, f = n?.maxFraction, h = Math.max(
      Lr,
      Math.floor(l * f)
    ), p = Math.min(u, h);
    return { slotPx: Math.min(c, p), totalReservedPx: p };
  }, [a, t, n?.maxFraction]);
  return { show: a, slotPx: o, totalReservedPx: s };
}
function U0(e, t, n, a) {
  if (n.percentScale) {
    const c = e.map((f) => f.y), d = Math.max(100, ...c), u = Math.min(0, ...c);
    return [u < 0 ? u : 0, d > 100 ? d : 100];
  }
  const o = e.map((c) => c.y), s = (c) => {
    c != null && o.push(c);
  };
  if (s(t.mean), s(t.ucl), s(t.lcl), s(t.onePos), s(t.oneNeg), s(t.twoPos), s(t.twoNeg), a && a.length)
    for (const c of a)
      typeof c == "number" && !isNaN(c) && o.push(c);
  if (!o.length) return;
  let i = Math.min(...o), l = Math.max(...o);
  return n.alwaysShowZeroY && (i = Math.min(0, i)), n.alwaysShowHundredY && (l = Math.max(100, l)), [i, l];
}
function Do(e, t) {
  if (!e?.length || t.chartType !== Mt.XmR) return null;
  const n = Math.max(2, Math.floor(t.shiftLength ?? 6)), a = [];
  for (let p = 0; p < e.length; p++) {
    const x = e[p], m = x.value;
    x?.ghost || typeof m == "number" && Number.isFinite(m) && a.push({ idx: p, value: m });
  }
  if (a.length < n * 2) return null;
  let o = 0, s = 0;
  for (let p = 1; p < a.length; p++)
    o += Math.abs(a[p].value - a[p - 1].value), s++;
  if (s === 0) return null;
  const l = o / s * (2.66 / 3);
  if (!Number.isFinite(l) || l <= 0) return null;
  const c = Math.max(0, t.deltaSigma ?? 0.5), d = t.metricImprovement === Xe.Up, u = t.metricImprovement === Xe.Down, f = (() => {
    for (let p = e.length - 1; p >= 0; p--) if (e[p]?.baseline) return p;
    return -1;
  })();
  function h(p, x) {
    let m = 0, g = 0;
    for (let S = p; S < x; S++)
      m += a[S].value, g++;
    return g ? m / g : NaN;
  }
  for (let p = n; p <= a.length - n; p++) {
    const x = h(p - n, p), m = h(p, p + n);
    if (!Number.isFinite(x) || !Number.isFinite(m)) continue;
    const g = m - x, S = g / l;
    let N = !1, C = !1;
    if (d ? (N = S >= c, C = !0) : u ? (N = -S >= c, C = !1) : (N = Math.abs(S) >= c, C = g > 0), !N) continue;
    const k = (j) => C ? j > x : j < x;
    let v = !0;
    for (let j = p; j < p + n; j++)
      if (!k(a[j].value)) {
        v = !1;
        break;
      }
    if (!v) continue;
    const _ = a[p].idx;
    if (!(t.minGap && f >= 0 && _ - f < t.minGap))
      return _;
  }
  return null;
}
function W0(e, t) {
  const n = Do(e, t);
  return n == null ? e.slice() : e.map((a, o) => o === n ? { ...a, baseline: !0 } : a);
}
function G0(e, t) {
  const n = Math.max(1, Math.floor(t.maxInsertions ?? 1));
  if (n <= 1) return W0(e, t);
  let a = e.slice(), o = 0;
  const s = Math.max(1, t.minGap ?? 0);
  for (; o < n; ) {
    const i = Do(a, { ...t, minGap: s });
    if (i == null) break;
    if (a[i]?.baseline) {
      const l = Do(a, { ...t, minGap: s + 1 });
      if (l == null || l === i) break;
      a = a.map((c, d) => d === l ? { ...c, baseline: !0 } : c), o++;
      continue;
    }
    a = a.map((l, c) => c === i ? { ...l, baseline: !0 } : l), o++;
  }
  return a;
}
const V0 = (e) => {
  const t = J.useCallback(
    (Ce) => String(Ce).replace(/^spc_warning_code\.?/i, "").replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((we) => we.length ? we[0].toUpperCase() + we.slice(1) : we).join(" "),
    []
  ), n = J.useCallback(
    (Ce) => String(Ce).replace(/[_\-]+/g, " ").trim().split(" ").filter(Boolean).map((Me) => Me.length ? Me[0].toUpperCase() + Me.slice(1) : Me).join(" "),
    []
  );
  process.env.NODE_ENV !== "production" && e.disableTrendSideGating !== void 0 && console.warn(
    "SPCChart: 'disableTrendSideGating' prop is deprecated and ignored (trend side gating always enabled)."
  );
  const {
    effData: a,
    effTargets: o,
    effBaselines: s,
    effGhosts: i,
    effChartTypeCore: l,
    effMetricImprovementCore: c,
    effEngineSettings: d,
    effAlwaysShowZeroY: u,
    effAlwaysShowHundredY: f,
    effPercentScale: h,
    effGradientSequences: p,
    effSequenceTransition: x,
    effProcessLineWidth: m,
    effTrendVisualMode: g,
    effShowTrendGatingExplanation: S,
    effEnableNeutralNoJudgement: N,
    effEnableRules: C,
    effShowPartitionMarkers: k,
    effShowTrendStartMarkers: v,
    effShowFirstFavourableCrossMarkers: _,
    effShowTrendBridgeOverlay: j,
    effShowSignalsInspector: b,
    effOnSignalFocus: y,
    effShowWarningsPanel: w,
    effWarningsFilter: T,
    effShowEmbeddedIcon: M,
    effEmbeddedIconVariant: A,
    effEmbeddedIconRunLength: I,
    effShowFocusIndicator: D,
    effHeight: $,
    effClassName: H,
    effAriaLabel: Z,
    effUnit: K,
    effNarrationContext: ne,
    effShowZones: B,
    effShowPoints: F,
    effHighlightOutOfControl: L,
    effVisualsScenario: G,
    effVisualsEngineSettings: E,
    effSource: O,
    effPrecomputedVisuals: P,
    effEngineAutoRecalc: X
  } = $0(e), Y = Z ?? e.ariaLabel, Q = $ ?? e.height ?? 260, de = H ?? e.className, V = K ?? e.unit, ae = ne ?? e.narrationContext, le = B ?? e.showZones, be = F ?? e.showPoints, pe = L ?? e.highlightOutOfControl, Ie = G ?? e.visualsScenario ?? wc.None, Ve = E ?? e.visualsEngineSettings, Te = O ?? e.source, Le = e.a11y?.announceFocus ?? e.announceFocus ?? !1, _e = J.useMemo(() => a.map((Ce, Me) => ({
    x: Ce.x,
    value: Ce.y,
    target: o?.[Me] ?? void 0,
    baseline: s?.[Me] ?? void 0,
    ghost: i?.[Me] ?? void 0
  })), [a, o, s, i]), R = J.useMemo(() => {
    try {
      const Ce = X;
      return Ce?.enabled ? G0(_e, {
        chartType: l,
        metricImprovement: c,
        shiftLength: Ce.shiftLength,
        deltaSigma: Ce.deltaSigma,
        minGap: Ce.minGap,
        maxInsertions: Ce.maxInsertions
      }) : _e;
    } catch {
      return _e;
    }
  }, [_e, X, l, c]), q = J.useMemo(() => {
    if (P?.visuals) return P.visuals;
    try {
      const Ce = Gi(
        d,
        R,
        Ve
      ), { chartType: Me, metricImprovement: we } = Wi(
        l,
        c
      ), je = {
        chartType: Me,
        metricImprovement: we,
        data: R,
        settings: Ce
      }, { visuals: Ke } = w0(je, Ie, {
        trendVisualMode: g === Cc.Ungated ? zn.Ungated : zn.Gated,
        enableNeutralNoJudgement: N
      });
      return Ke || [];
    } catch {
      return [];
    }
  }, [
    P?.visuals?.length,
    R,
    l,
    c,
    g,
    N,
    d,
    Ie,
    Ve
  ]), he = J.useMemo(() => {
    if (P?.rows)
      try {
        const Ce = P.rows, Me = (we) => {
          switch (we) {
            case Ee.ImprovementHigh:
            case Ee.ImprovementLow:
              return qe.Improvement;
            case Ee.ConcernHigh:
            case Ee.ConcernLow:
              return qe.Concern;
            case Ee.NeitherHigh:
            case Ee.NeitherLow:
              return qe.Neither;
            case Ee.CommonCause:
            default:
              return qe.Neither;
          }
        };
        return Ce.map(
          (we, je) => ({
            data: {
              value: we.value,
              ghost: !!we.ghost
            },
            partition: { id: we.partitionId },
            limits: {
              mean: we.mean,
              ucl: we.upperProcessLimit,
              lcl: we.lowerProcessLimit,
              oneSigma: { upper: we.upperOneSigma, lower: we.lowerOneSigma },
              twoSigma: { upper: we.upperTwoSigma, lower: we.lowerTwoSigma }
            },
            rules: {
              singlePoint: { up: !!we.singlePointUp, down: !!we.singlePointDown },
              twoOfThree: { up: !!we.twoSigmaUp, down: !!we.twoSigmaDown },
              fourOfFive: { up: !!we.fourOfFiveUp, down: !!we.fourOfFiveDown },
              shift: { up: !!we.shiftUp, down: !!we.shiftDown },
              trend: { up: !!we.trendUp, down: !!we.trendDown }
            },
            classification: {
              variation: Me(we.variationIcon),
              neutralSpecialCauseValue: we.variationIcon === Ee.NeitherHigh || we.variationIcon === Ee.NeitherLow ? we.specialCauseImprovementValue ?? we.specialCauseConcernValue ?? 1 : null,
              assurance: void 0
            },
            target: R[je]?.target ?? null
          })
        );
      } catch {
        return null;
      }
    try {
      const Ce = Gi(
        d,
        R,
        Ve
      ), { chartType: Me, metricImprovement: we } = Wi(
        l,
        c
      ), je = {
        chartType: Me,
        metricImprovement: we,
        data: R,
        settings: Ce
      }, { rows: Ke } = z0(je), ot = ($e) => {
        switch ($e) {
          case Ee.ImprovementHigh:
          case Ee.ImprovementLow:
            return qe.Improvement;
          case Ee.ConcernHigh:
          case Ee.ConcernLow:
            return qe.Concern;
          case Ee.NeitherHigh:
          case Ee.NeitherLow:
            return qe.Neither;
          case Ee.CommonCause:
          default:
            return qe.Neither;
        }
      };
      return Ke.map(
        ($e, Fe) => ({
          data: {
            value: $e.value,
            ghost: !!$e.ghost
          },
          partition: { id: $e.partitionId },
          limits: {
            mean: $e.mean,
            ucl: $e.upperProcessLimit,
            lcl: $e.lowerProcessLimit,
            oneSigma: { upper: $e.upperOneSigma, lower: $e.lowerOneSigma },
            twoSigma: { upper: $e.upperTwoSigma, lower: $e.lowerTwoSigma }
          },
          rules: {
            singlePoint: { up: !!$e.singlePointUp, down: !!$e.singlePointDown },
            twoOfThree: { up: !!$e.twoSigmaUp, down: !!$e.twoSigmaDown },
            fourOfFive: { up: !!$e.fourOfFiveUp, down: !!$e.fourOfFiveDown },
            shift: { up: !!$e.shiftUp, down: !!$e.shiftDown },
            trend: { up: !!$e.trendUp, down: !!$e.trendDown }
          },
          classification: {
            variation: ot($e.variationIcon),
            neutralSpecialCauseValue: $e.variationIcon === Ee.NeitherHigh || $e.variationIcon === Ee.NeitherLow ? $e.specialCauseImprovementValue ?? $e.specialCauseConcernValue ?? 1 : null,
            assurance: void 0
          },
          target: R[Fe]?.target ?? null
        })
      );
    } catch {
      return null;
    }
  }, [
    P?.rows?.length,
    R,
    l,
    c,
    d,
    Ve
  ]) || null, me = (he || []).slice().reverse().find((Ce) => Ce.limits.mean != null), z = me?.limits.mean ?? null, W = J.useMemo(() => {
    const Ce = [];
    try {
      const Me = he, we = d?.minimumPoints ?? 13, je = d?.minimumPoints ?? 12;
      if (Me && Me.length) {
        const Ke = Me.filter(
          ($e) => !$e.data.ghost && $e.data.value != null
        ).length;
        Ke < we && Ce.push({
          code: Kr.InsufficientPointsGlobal,
          severity: Ft.Warning,
          category: Xr.Data,
          message: "Not enough non-ghost points to compute stable limits/icons.",
          context: { nonGhostCount: Ke, minimumPoints: we }
        });
        const ot = /* @__PURE__ */ new Map();
        for (const $e of Me) {
          const Fe = $e.partition.id ?? 0, Ue = ot.get(Fe) || { size: 0, nonGhost: 0 };
          Ue.size += 1, !$e.data.ghost && $e.data.value != null && (Ue.nonGhost += 1), ot.set(Fe, Ue);
        }
        for (const [$e, Fe] of ot)
          Fe.nonGhost > 0 && Fe.nonGhost < je && Ce.push({
            code: Kr.InsufficientPointsPartition,
            severity: Ft.Warning,
            category: Xr.Partition,
            message: "A partition/baseline segment has too few points for recommended stability.",
            context: {
              partitionId: $e,
              nonGhostCount: Fe.nonGhost,
              minimumPointsPartition: je
            }
          });
      }
    } catch {
    }
    return Ce;
  }, [he, d?.minimumPoints]), oe = J.useMemo(() => W.length ? T ? W.filter((Ce) => !(T.severities && Ce.severity && !T.severities.includes(Ce.severity) || T.categories && Ce.category && !T.categories.includes(Ce.category) || T.codes && !T.codes.includes(Ce.code))) : W : [], [W, T]), ee = me?.limits.ucl ?? null, re = me?.limits.lcl ?? null, ce = me?.limits.oneSigma.upper ?? null, ue = me?.limits.oneSigma.lower ?? null, ve = me?.limits.twoSigma.upper ?? null, Ne = me?.limits.twoSigma.lower ?? null, He = z != null && ce != null ? Math.abs(ce - z) : 0, Ye = J.useMemo(
    () => [{ id: "process", data: a, color: "#A6A6A6" }],
    [a]
  ), lt = J.useMemo(
    () => U0(
      a,
      { mean: z, ucl: ee, lcl: re, onePos: ce, oneNeg: ue, twoPos: ve, twoNeg: Ne },
      {
        alwaysShowZeroY: !!u,
        alwaysShowHundredY: !!f,
        percentScale: !!h
      },
      o ?? null
    ),
    [
      a,
      z,
      ee,
      re,
      ce,
      ue,
      ve,
      Ne,
      o,
      u,
      f,
      h
    ]
  ), Qe = J.useMemo(() => {
    const Ce = (Me) => {
      const we = Me.filter(
        (Ke) => typeof Ke == "number" && !isNaN(Ke)
      );
      if (!we.length) return null;
      const je = we[0];
      return we.every((Ke) => Ke === je) ? je : null;
    };
    if (he && he.length) {
      const Me = Ce(he.map((we) => we.target));
      if (Me != null) return Me;
    }
    return o && o.length ? Ce(o) : null;
  }, [he, o]), { show: ie, slotPx: Ae, totalReservedPx: U } = O0(
    lt,
    Q,
    { maxFraction: 0.35 }
  ), te = ie ? U : 0, xe = J.useMemo(() => {
    const Ce = a.map((Me) => Me.x);
    return jc({
      values: a.map((Me) => Me.y),
      dates: Ce,
      providedUnit: V || ae?.measureUnit,
      percentHeuristic: "0-1",
      autoValue: !1,
      autoDelta: !1,
      autoMetadata: !1
    });
  }, [a, V, ae?.measureUnit]), ge = V ?? ae?.measureUnit ?? xe.unit, ye = J.useMemo(() => ge ? { ...ae || {}, measureUnit: ge } : ae, [ae, ge]), Se = J.useMemo(() => {
    if (!he) return [];
    const Ce = [];
    for (let Me = 1; Me < he.length; Me++)
      he[Me].partition.id !== he[Me - 1].partition.id && Ce.push(Me);
    return Ce;
  }, [he]), Be = J.useMemo(
    () => D0({
      show: !!M,
      rowsForUi: he,
      minPoints: d?.minimumPoints ?? 13,
      metricImprovement: c,
      variant: A,
      runLength: I
    }),
    [
      M,
      he,
      d?.minimumPoints,
      c,
      A,
      I
    ]
  );
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: de ? `fdp-spc-chart-wrapper ${de}` : "fdp-spc-chart-wrapper",
      children: [
        /* @__PURE__ */ r.jsx(
          M0,
          {
            show: !!M,
            variationNode: Be,
            assuranceNode: null
          }
        ),
        /* @__PURE__ */ r.jsx(
          cg,
          {
            height: Q,
            ariaLabel: Y,
            margin: { bottom: 48, left: 56, right: 16, top: 12 },
            children: /* @__PURE__ */ r.jsx(dg, { series: Ye, yDomain: lt, yBottomGapPx: te, children: (() => {
              const Ce = {
                data: {
                  series: Ye,
                  engineRows: he,
                  visualCategories: q,
                  partitionMarkers: k ? Se : []
                },
                targets: {
                  limits: { mean: z, ucl: ee, lcl: re, sigma: He, onePos: ce, oneNeg: ue, twoPos: ve, twoNeg: Ne },
                  uniformTarget: Qe
                },
                visuals: {
                  showPoints: be,
                  showZones: le,
                  highlightOutOfControl: pe,
                  gradientSequences: p,
                  sequenceTransition: x,
                  processLineWidth: m,
                  showFocusIndicator: D,
                  enableRules: C,
                  enableNeutralNoJudgement: N,
                  showTrendStartMarkers: v,
                  showFirstFavourableCrossMarkers: _,
                  showTrendBridgeOverlay: j
                },
                a11y: {
                  announceFocus: Le,
                  ariaLabel: Y,
                  narrationContext: ye,
                  showSignalsInspector: b,
                  onSignalFocus: y,
                  showTrendGatingExplanation: S
                },
                axis: { zeroBreakSlotGapPx: Ae },
                compute: { effectiveUnit: ge, metricImprovement: c }
              };
              return /* @__PURE__ */ r.jsx(E0, { ...Ce });
            })() })
          }
        ),
        Te && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__source", "aria-label": "Chart data source", children: typeof Te == "string" ? /* @__PURE__ */ r.jsxs("small", { children: [
          "Source: ",
          Te
        ] }) : Te }),
        /* @__PURE__ */ r.jsx(
          j0,
          {
            show: !!w,
            warnings: oe,
            formatWarningCategory: n,
            formatWarningCode: t
          }
        )
      ]
    }
  );
};
function Y0(e, t) {
  const {
    chartType: n = Mt.XmR,
    metricImprovement: a,
    minimumPoints: o = ks,
    enableNeutralNoJudgement: s = !0,
    includeSignalFallbacks: i = !0
  } = t, l = e.map((C) => ({ x: C.x, value: C.value ?? C.y ?? null }));
  let c = null;
  try {
    const C = l.filter(
      (v) => typeof v.value == "number"
    ).length, k = { minimumPoints: o };
    C >= o && (k.chartLevelEligibility = !0), c = br({ chartType: n, metricImprovement: a, data: l, settings: k });
  } catch {
    c = null;
  }
  const d = c?.rows ?? [];
  let u = d[d.length - 1] ?? null;
  for (let C = d.length - 1; C >= 0; C--) {
    const k = d[C];
    if (k && k.value != null && !k.ghost) {
      u = k;
      break;
    }
  }
  let f = [];
  try {
    f = yr(d, {
      metricImprovement: a,
      enableNeutralNoJudgement: s
    });
  } catch {
    f = [];
  }
  const h = Qr(
    u?.variationIcon
  ), p = u?.variationIcon ?? null, x = u?.mean ?? null, m = u ? {
    lower: u?.lowerProcessLimit ?? null,
    upper: u?.upperProcessLimit ?? null
  } : null, g = u ? {
    upperOne: u?.upperOneSigma ?? null,
    upperTwo: u?.upperTwoSigma ?? null,
    lowerOne: u?.lowerOneSigma ?? null,
    lowerTwo: u?.lowerTwoSigma ?? null
  } : null;
  let S, N;
  return i && (S = Ns(f), N = Mc(f)), {
    rows: d,
    visuals: f,
    latestState: h,
    lastVariationIcon: p,
    centerLine: x,
    controlLimits: m,
    sigmaBands: g,
    pointSignals: S,
    pointNeutralSpecialCause: N
  };
}
const P1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: dn,
  BaselineSuggestionReason: fc,
  ChartType: Mt,
  DEFAULT_MIN_POINTS: ks,
  Icons: I0,
  ImprovementDirection: Xe,
  PARITY_V26: _c,
  RULE_METADATA: uc,
  SPCChart: V0,
  SPCSpark: _s,
  SPCTooltipOverlay: Nc,
  SparkSize: ht,
  SpcEmbeddedIconVariant: yn,
  SpcVisualCategory: it,
  SpcWarningCategory: Xr,
  SpcWarningCode: Kr,
  SpcWarningSeverity: Ft,
  VARIATION_COLOR_TOKENS: Lt,
  VariationIcon: Ee,
  buildSpcV26a: br,
  buildSpcV26aWithVisuals: vs,
  computeSpcPrecomputed: Y0,
  computeSpcVisualCategories: yr,
  extractRuleIds: La,
  getVariationColorHex: o0,
  getVariationColorToken: pc,
  isSpecialCauseIcon: kc,
  mapIconToVariation: Qr,
  normaliseSpcSettingsV2: vc,
  ruleGlossary: En,
  variationLabel: $a,
  visualsToNeutralFlags: Mc,
  visualsToPointSignals: Ns,
  withParityV26: _0
}, Symbol.toStringTag, { value: "Module" }));
function Z0(e) {
  const t = e.replace("#", "");
  return [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ];
}
function q0(e) {
  const {
    values: t,
    x: n,
    chartType: a = Mt.XmR,
    metricImprovement: o = Xe.Neither,
    showLimits: s = !0,
    showLimitBand: i = !1,
    showInnerBands: l = !1,
    showMean: c = !1
    // autoClassify = true,
  } = e, d = J.useMemo(() => {
    const v = [];
    for (let _ = 0; _ < t.length; _++)
      v.push({ x: n?.[_], value: t[_] });
    return v;
  }, [t, n]), u = J.useMemo(() => {
    try {
      const v = d.map((y, w) => ({ x: y.x ?? w, value: y.value })), _ = 13, j = v.filter((y) => typeof y.value == "number").length, b = { minimumPoints: _ };
      return j >= _ && (b.chartLevelEligibility = !0), br({ chartType: a, metricImprovement: o, data: v, settings: b });
    } catch {
      return null;
    }
  }, [d, a, o]), f = J.useMemo(() => {
    const v = u?.rows;
    if (!v || v.length === 0) return null;
    for (let _ = v.length - 1; _ >= 0; _--) {
      const j = v[_];
      if (j && j.value != null && !j.ghost) return j;
    }
    return v[v.length - 1] ?? null;
  }, [u]), h = J.useMemo(() => {
    const v = u?.rows;
    if (!v || v.length === 0) return null;
    let _ = v[v.length - 1];
    for (let j = v.length - 1; j >= 0; j--) {
      const b = v[j];
      if (b && b.value != null && !b.ghost) {
        _ = b;
        break;
      }
    }
    return Qr(_?.variationIcon);
  }, [u]), p = J.useMemo(() => f?.mean ?? null, [f]), x = J.useMemo(() => {
    if (!f) return null;
    const v = f?.lowerProcessLimit ?? null, _ = f?.upperProcessLimit ?? null;
    return v == null && _ == null ? null : { lower: v, upper: _ };
  }, [f]), m = J.useMemo(() => f ? {
    upperOne: f?.upperOneSigma ?? null,
    upperTwo: f?.upperTwoSigma ?? null,
    lowerOne: f?.lowerOneSigma ?? null,
    lowerTwo: f?.lowerTwoSigma ?? null
  } : null, [f]), g = J.useMemo(() => {
    const v = u?.rows;
    if (!(!v || v.length === 0))
      try {
        return yr(v, {
          metricImprovement: o,
          enableNeutralNoJudgement: !0
        });
      } catch {
        return;
      }
  }, [u, o]), S = J.useMemo(() => Ns(g), [g?.length]), N = J.useMemo(() => {
    if (!(!g || g.length === 0))
      return g.map((v) => v === it.NoJudgement);
  }, [g?.length]), C = J.useMemo(() => {
    let v = null;
    if (f && f.value != null && !f.ghost) {
      const A = f.variationIcon;
      h === Pe.SpecialCauseNoJudgement ? v = kc(A) ? Pe.SpecialCauseNoJudgement : Pe.CommonCause : v = Qr(A) ?? Pe.CommonCause;
    }
    const _ = v ?? Pe.CommonCause, j = Aa[_].hex, [b, y, w] = Z0(j), T = Ea();
    return {
      "--fdp-metric-card-bg": `linear-gradient(180deg, rgba(${b}, ${y}, ${w}, ${T.start}) 0%, rgba(${b}, ${y}, ${w}, ${T.mid}) 50%, rgba(${b}, ${y}, ${w}, ${T.end}) 100%)`,
      "--fdp-metric-card-accent": j
    };
  }, [f, h]);
  return { sparkProps: J.useMemo(() => ({
    data: d,
    showMean: c,
    showLimits: s,
    showLimitBand: i,
    showInnerBands: l,
    metricImprovement: o,
    centerLine: p,
    controlLimits: x,
    sigmaBands: m,
    pointSignals: S,
    pointNeutralSpecialCause: N,
    visualCategories: g,
    variationState: h ?? void 0
  }), [
    d,
    c,
    s,
    i,
    l,
    o,
    h,
    p,
    x?.lower,
    x?.upper,
    m?.upperTwo,
    m?.lowerOne,
    m?.lowerTwo,
    S?.length,
    N?.length,
    g?.length
  ]), metricCardStyle: C, latestState: h };
}
const R1 = ({
  sparkData: e,
  direction: t = Xe.Neither,
  showMean: n = !1,
  showLimits: a = !0,
  showLimitBand: o = !1,
  showInnerBands: s = !1,
  maxPoints: i,
  autoValue: l = !0,
  autoDelta: c = !0,
  autoMetadata: d = !0,
  defaultUnit: u,
  intervalHint: f,
  startDate: h,
  deltaConfig: p,
  ...x
}) => {
  const m = q0({
    values: e.map((_) => _.value ?? null),
    metricImprovement: t,
    showLimits: a,
    showLimitBand: o,
    showInnerBands: s,
    showMean: n
  }), g = /* @__PURE__ */ r.jsx(_s, { ...m.sparkProps, maxPoints: i }), S = J.useMemo(() => jc({
    values: e.map((_) => typeof _.value == "number" ? _.value : null),
    dates: e.map((_) => _.date),
    intervalHint: f,
    startDate: h,
    providedUnit: x.unit,
    defaultUnit: u,
    autoValue: l,
    autoDelta: c,
    autoMetadata: d,
    deltaConfig: p
  }), [e, f, h, x.unit, u, l, c, d, p]), N = l && S.value != null ? S.value : x.value, C = c && S.delta ? S.delta : x.delta, k = S.unit || x.unit, v = d && S.metadata ? S.metadata : x.metadata;
  return /* @__PURE__ */ r.jsx(
    t0,
    {
      ...x,
      value: N,
      unit: k,
      delta: C,
      metadata: v,
      visual: g,
      style: m.metricCardStyle
    }
  );
};
function J0(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function X0(e = "auto") {
  const [t, n] = tt.useState(
    !1
  );
  return tt.useEffect(() => {
    if (e !== "auto" || typeof window > "u" || !window.matchMedia) return;
    const a = window.matchMedia("(prefers-reduced-motion: reduce)"), o = () => n(a.matches);
    return o(), a.addEventListener?.("change", o), () => a.removeEventListener?.("change", o);
  }, [e]), e === "off" ? !1 : t;
}
function Vi(e, t) {
  return t[Math.floor(e() * t.length)];
}
function sn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function K0(e, t) {
  const n = e.seed ?? 1, a = J0(n), o = Math.max(6, Math.min(48, Math.round(e.density ?? 18))), s = ["circle", "hexagon", "rect"], i = [], l = e.gradients && e.gradients.length > 0 ? e.gradients : [
    "nhs-fdp-gradient-blue",
    "nhs-fdp-gradient-aqua",
    "nhs-fdp-gradient-green"
  ], d = (typeof e.callout.width == "number" ? e.callout.width : void 0) ?? Math.min(520, t * 0.7), u = (t - d) / 2, f = u + d, h = {
    left: u / t * 100,
    right: f / t * 100,
    top: 20,
    bottom: 80
  }, p = (m, g) => !(m > h.left - 6 && m < h.right + 6 && g > h.top - 10 && g < h.bottom + 10);
  let x = 0;
  for (; i.length < o && x < o * 50; ) {
    x++;
    const m = Vi(a, s), g = sn(a() * 1, 0.15, 0.95), S = 24 + a() * 72, N = a() * 100, C = a() * 100;
    if (!p(N, C)) continue;
    const k = Vi(a, l);
    if (m === "rect") {
      const v = 0.6 + a() * 0.8;
      i.push({
        kind: m,
        width: S * v,
        height: S,
        x: N,
        y: C,
        depth: g,
        fillToken: k,
        shadow: "soft"
      });
    } else
      i.push({
        kind: m,
        size: S,
        x: N,
        y: C,
        depth: g,
        fillToken: k,
        shadow: "soft"
      });
  }
  return i;
}
const B1 = (e) => {
  const {
    seed: t = 1,
    mode: n = "scroll",
    axis: a = "xy",
    height: o = 520,
    strength: s = 120,
    pin: i = !1,
    reducedMotion: l = "auto",
    callout: c,
    className: d,
    style: u
  } = e, f = tt.useRef(null), [h, p] = tt.useState({
    w: 1e3,
    h: 520
  }), x = X0(l), m = e.direction ?? "se", g = tt.useMemo(() => {
    switch (m) {
      case "ne":
        return { x: 1, y: -1 };
      case "nw":
        return { x: -1, y: -1 };
      case "sw":
        return { x: -1, y: 1 };
      case "se":
      default:
        return { x: 1, y: 1 };
    }
  }, [m]);
  tt.useLayoutEffect(() => {
    if (!f.current) return;
    const b = new ResizeObserver((y) => {
      for (const w of y) {
        const T = w.contentRect;
        p({ w: T.width, h: T.height });
      }
    });
    return b.observe(f.current), () => b.disconnect();
  }, []);
  const S = tt.useMemo(() => e.shapes && e.shapes.length ? e.shapes : K0(e, h.w), [t, h.w, h.h]), [N, C] = tt.useState(0), [k, v] = tt.useState(null);
  tt.useEffect(() => {
    if (n !== "scroll" || x || typeof window > "u") return;
    const b = f.current;
    if (!b) return;
    const y = () => {
      const w = b.getBoundingClientRect(), T = window.innerHeight || document.documentElement.clientHeight, M = w.height + T, A = T - w.top, I = sn(A / M, 0, 1);
      v((D) => D === null ? I : D), C(I);
    };
    return y(), window.addEventListener("scroll", y, { passive: !0 }), window.addEventListener("resize", y), () => {
      window.removeEventListener("scroll", y), window.removeEventListener("resize", y);
    };
  }, [n, x]), tt.useEffect(() => {
    if (n !== "timed" || x) return;
    let b = 0, y = performance.now();
    const w = 8e3, T = (M) => {
      const I = (M - y) % w / w;
      C(I), b = requestAnimationFrame(T);
    };
    return b = requestAnimationFrame(T), () => cancelAnimationFrame(b);
  }, [n, x]);
  const _ = (b) => 0.15 + (b ?? 0.5) * 0.6, j = {
    position: "absolute",
    left: "50%",
    top: "50%",
    bottom: void 0,
    right: void 0,
    transform: "translate(-50%, -50%)",
    width: typeof c.width == "number" ? `${c.width}px` : c.width || "min(520px, 70%)"
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: f,
      className: ["nhs-parallax-scene", d].filter(Boolean).join(" "),
      style: {
        position: "relative",
        height: typeof o == "number" ? `${o}px` : o,
        overflow: "hidden",
        ...u
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhs-parallax-canvas",
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ r.jsxs("defs", { children: [
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#2E61A5" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#1B3E73" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-aqua", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#1DC6D2" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#117E8A" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-green", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#2BC06A" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#1A874A" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-dark-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#003087" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-light-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#60b2e2" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-purple", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#ac98cb" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#d6cce3" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-green-palette", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#007f3b" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#63a691" })
                ] }),
                /* @__PURE__ */ r.jsxs("linearGradient", { id: "fdpgradient-grey", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: "#4c6272" }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: "#768692" })
                ] })
              ] }),
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-connectors", children: S.map((b, y) => {
                const w = b.x, T = b.y, M = (b.width ?? b.size ?? 40) / h.w * 100 * 1, A = (b.height ?? b.size ?? 40) / h.h * 100 * 1, I = b.kind === "circle" ? [
                  [w, T - A / 2],
                  [w + M / 2, T],
                  [w, T + A / 2],
                  [w - M / 2, T]
                ] : b.kind === "rect" || b.kind === "svg" ? [
                  [w - M / 2, T - A / 2],
                  [w + M / 2, T - A / 2],
                  [w + M / 2, T + A / 2],
                  [w - M / 2, T + A / 2]
                ] : (
                  // hexagon approx points
                  [
                    [w - M / 2, T],
                    [w - M / 4, T - A / 2],
                    [w + M / 4, T - A / 2],
                    [w + M / 2, T],
                    [w + M / 4, T + A / 2],
                    [w - M / 4, T + A / 2]
                  ]
                ), D = _(b.depth), Z = (i ? N : N - (k ?? 0.5)) * s * D, K = a === "x" ? Z : a === "xy" ? Z * g.x : 0, ne = a === "y" ? Z : a === "xy" ? Z * g.y : 0;
                return I.map((B, F) => /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    x1: sn(B[0] + K, 0, 100),
                    y1: sn(B[1] + ne, 0, 100),
                    x2: sn(50 + K * 0.2, 0, 100),
                    y2: sn(50 + ne * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${y}-${F}`
                ));
              }) }),
              /* @__PURE__ */ r.jsx("g", { className: "nhs-parallax-shapes", children: S.map((b, y) => {
                const w = _(b.depth), A = (i ? N : N - (k ?? 0.5)) * s * w, I = a === "x" ? A : a === "xy" ? A * g.x : 0, D = a === "y" ? A : a === "xy" ? A * g.y : 0, $ = sn(b.x + I, 0, 100), H = sn(b.y + D, 0, 100), Z = b.rotate ?? 0, K = [
                  "nhs-parallax-shape",
                  b.fillToken,
                  b.shadow && `nhs-parallax-shadow--${b.shadow}`
                ].filter(Boolean).join(" ");
                if (b.kind === "circle") {
                  const L = (b.size ?? 40) / h.w * 100 * 0.5;
                  return /* @__PURE__ */ r.jsx("circle", { cx: $, cy: H, r: L, className: K }, y);
                }
                if (b.kind === "rect") {
                  const L = (b.width ?? 48) / h.w * 100, G = (b.height ?? 36) / h.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: $ - L / 2,
                      y: H - G / 2,
                      width: L,
                      height: G,
                      transform: `rotate(${Z} ${$} ${H})`,
                      className: K
                    },
                    y
                  );
                }
                if (b.kind === "svg" && b.src) {
                  const L = (b.width ?? 48) / h.w * 100, G = (b.height ?? 48) / h.h * 100;
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: b.src,
                      x: $ - L / 2,
                      y: H - G / 2,
                      width: L,
                      height: G,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${Z} ${$} ${H})`,
                      className: K
                    },
                    y
                  );
                }
                const ne = (b.size ?? 40) / h.w * 100, B = ne * 0.866, F = [
                  [$ - ne / 2, H],
                  [$ - ne / 4, H - B / 2],
                  [$ + ne / 4, H - B / 2],
                  [$ + ne / 2, H],
                  [$ + ne / 4, H + B / 2],
                  [$ - ne / 4, H + B / 2]
                ].map((L) => L.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: F, className: K }, y);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-parallax-callout",
            style: j,
            "aria-hidden": !1,
            children: /* @__PURE__ */ r.jsxs(
              "div",
              {
                className: ["nhs-parallax-callout-inner", c.backgroundToken].filter(Boolean).join(" "),
                children: [
                  " ",
                  c.content,
                  " "
                ]
              }
            )
          }
        )
      ]
    }
  );
};
function Q0(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function ft(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ex(e, t, n, a, o, s, i, l, c, d, u, f) {
  const h = Q0(e), p = [], x = [], m = ["rect", "hex", "circle"], g = { x: 50, y: 50 }, S = a, N = 1200, C = 400, k = 1.2, v = {
    left: g.x - S.w / 2,
    right: g.x + S.w / 2,
    top: g.y - S.h / 2,
    bottom: g.y + S.h / 2
  }, _ = !c && !!u && u.r > 0, j = !c && !!f && (f.rx > 0 || f.ry > 0), b = ($, H) => {
    if (!_) return !1;
    const Z = $ - g.x, K = H - g.y;
    return Z * Z + K * K <= u.r * u.r;
  }, y = ($, H) => {
    if (!j) return !1;
    const Z = Math.max(1e-6, f.rx || 0), K = Math.max(1e-6, f.ry || 0), ne = ($ - g.x) / Z, B = (H - g.y) / K;
    return ne * ne + B * B <= 1;
  }, w = ($, H) => !($.right < H.left || $.left > H.right || $.bottom < H.top || $.top > H.bottom), T = ($) => $.left >= 0 && $.top >= 0 && $.right <= 100 && $.bottom <= 100, M = ($, H, Z, K, ne, B) => {
    let F = 0, L = 0;
    if ($ === "rect") {
      const G = K ?? 48, E = ne ?? 36;
      F = G / N * 100, L = E / C * 100;
    } else if ($ === "circle") {
      const G = B ?? 40;
      F = G / N * 100, L = G / C * 100;
    } else {
      const G = B ?? 40;
      F = G / N * 100, L = G * s / C * 100;
    }
    return {
      left: H - F / 2 - k,
      right: H + F / 2 + k,
      top: Z - L / 2 - k,
      bottom: Z + L / 2 + k
    };
  };
  let A = 0;
  const I = ft(Math.round(t), 4, 48);
  let D = null;
  if (d) {
    const $ = Math.ceil(Math.sqrt(I)), H = Math.ceil(I / $);
    D = [];
    for (let Z = 0; Z < H; Z++)
      for (let K = 0; K < $ && !(D.length >= I); K++) {
        const ne = (K + 0.5) / $ * 100, B = (Z + 0.5) / H * 100;
        D.push({ x: ne, y: B });
      }
  }
  for (; p.length < I && A < I * 120; ) {
    A++;
    const $ = m[Math.floor(h() * m.length)];
    let H, Z;
    if (d && D && D.length) {
      const F = p.length % D.length;
      H = D[F].x, Z = D[F].y;
    } else {
      const F = ft(o ?? 0, 0, 1), L = () => h() * 100, G = () => {
        const O = Math.max(h(), 1e-6), P = Math.max(h(), 1e-6), X = Math.sqrt(-2 * Math.log(O)), Y = 2 * Math.PI * P;
        return 50 + X * Math.cos(Y) * 12.5;
      }, E = (O, P, X) => O * (1 - X) + P * X;
      H = ft(E(L(), G(), F), 0, 100), Z = ft(E(L(), G(), F), 0, 100);
    }
    const K = M($, H, Z, 32, 24, 28);
    if (!T(K)) continue;
    const ne = ft(h(), 0.15, 0.95), B = 0;
    if ($ === "rect") {
      const F = 40 + h() * 80, L = 28 + h() * 64, G = M($, H, Z, F, L);
      if (!c && (w(G, v) || b(H, Z) || y(H, Z)))
        continue;
      if (!i) {
        let O = !1;
        for (let P = 0; P < x.length; P++)
          if (w(G, x[P])) {
            O = !0;
            break;
          }
        if (O) continue;
      }
      let E;
      if (i) {
        const O = /* @__PURE__ */ new Set();
        for (let X = 0; X < x.length; X++)
          if (w(G, x[X])) {
            const Y = p[X].fill;
            Y && O.add(Y);
          }
        const P = n.filter((X) => !O.has(X));
        if (P.length === 0) {
          if (l === "skip") continue;
          E = n[Math.floor(h() * n.length)];
        } else
          E = P[Math.floor(h() * P.length)];
      } else
        E = n[Math.floor(h() * n.length)];
      x.push(G), p.push({ kind: $, x: H, y: Z, width: F, height: L, rotate: B, depth: ne, fill: E, shadow: "soft" });
    } else if ($ === "circle") {
      const F = 24 + h() * 80, L = M($, H, Z, void 0, void 0, F);
      if (!c && (w(L, v) || b(H, Z) || y(H, Z)))
        continue;
      if (!i) {
        let E = !1;
        for (let O = 0; O < x.length; O++)
          if (w(L, x[O])) {
            E = !0;
            break;
          }
        if (E) continue;
      }
      let G;
      if (i) {
        const E = /* @__PURE__ */ new Set();
        for (let P = 0; P < x.length; P++)
          if (w(L, x[P])) {
            const X = p[P].fill;
            X && E.add(X);
          }
        const O = n.filter((P) => !E.has(P));
        if (O.length === 0) {
          if (l === "skip") continue;
          G = n[Math.floor(h() * n.length)];
        } else
          G = O[Math.floor(h() * O.length)];
      } else
        G = n[Math.floor(h() * n.length)];
      x.push(L), p.push({ kind: $, x: H, y: Z, size: F, rotate: B, depth: ne, fill: G, shadow: "soft" });
    } else {
      const F = 28 + h() * 72, L = M($, H, Z, void 0, void 0, F);
      if (!c && (w(L, v) || b(H, Z) || y(H, Z)))
        continue;
      if (!i) {
        let E = !1;
        for (let O = 0; O < x.length; O++)
          if (w(L, x[O])) {
            E = !0;
            break;
          }
        if (E) continue;
      }
      let G;
      if (i) {
        const E = /* @__PURE__ */ new Set();
        for (let P = 0; P < x.length; P++)
          if (w(L, x[P])) {
            const X = p[P].fill;
            X && E.add(X);
          }
        const O = n.filter((P) => !E.has(P));
        if (O.length === 0) {
          if (l === "skip") continue;
          G = n[Math.floor(h() * n.length)];
        } else
          G = O[Math.floor(h() * O.length)];
      } else
        G = n[Math.floor(h() * n.length)];
      x.push(L), p.push({ kind: $, x: H, y: Z, size: F, rotate: B, depth: ne, fill: G, shadow: "soft" });
    }
  }
  return p;
}
const H1 = ({
  seed: e = 1,
  width: t = "100%",
  height: n = 400,
  density: a = 16,
  centrality: o = 0,
  gradients: s = [
    "pb-grad-aqua-green",
    "pb-grad-purple",
    "pb-grad-blue",
    "pb-grad-grey",
    "pb-grad-azure"
  ],
  shapes: i,
  neighbors: l = 1,
  connectorColor: c,
  connectorWidth: d,
  connectorDasharray: u,
  hexAspectRatio: f = Math.sqrt(3) / 2,
  allowOverlaps: h = !1,
  overlapColorPolicy: p = "recolor",
  feature: x,
  featureWidth: m = "min(640px, 80%)",
  featureLayer: g = "over",
  excludeBoxPct: S = { w: 50, h: 36 },
  excludeCirclePct: N,
  excludeEllipsePct: C,
  uniformDistribution: k = !1,
  className: v,
  style: _
}) => {
  const j = tt.useRef(null), [b, y] = tt.useState({ w: 1200, h: 400 });
  tt.useLayoutEffect(() => {
    if (!j.current) return;
    const D = new ResizeObserver(($) => {
      for (const H of $) {
        const Z = H.contentRect;
        y({ w: Z.width, h: Z.height });
      }
    });
    return D.observe(j.current), () => D.disconnect();
  }, []);
  const w = tt.useMemo(() => i?.length ? i : ex(
    e,
    a,
    s,
    S,
    o,
    f,
    h,
    p,
    g === "over" || k,
    k,
    N,
    C
  ), [
    e,
    a,
    s.join(","),
    S.w,
    S.h,
    o,
    f,
    h,
    p,
    g,
    k,
    N?.r,
    C?.rx,
    C?.ry,
    i
  ]), T = 100, M = 100, A = Math.sqrt(3) / 2, I = (D, $, H) => {
    const Z = (H ?? 40) / 2, K = D / 100 * b.w, ne = $ / 100 * b.h, B = f / A;
    return [Math.PI, 2 * Math.PI / 3, Math.PI / 3, 0, -Math.PI / 3, -(2 * Math.PI) / 3].map((L) => {
      const G = K + Z * Math.cos(L), E = ne + Z * Math.sin(L) * B;
      return [ft(G / b.w * 100, 0, 100), ft(E / b.h * 100, 0, 100)];
    });
  };
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      ref: j,
      className: [
        "nhs-pattern-banner",
        g === "under" ? "nhs-pattern-banner--feature-under" : "nhs-pattern-banner--feature-over",
        v
      ].filter(Boolean).join(" "),
      style: {
        width: typeof t == "number" ? `${t}px` : t,
        height: typeof n == "number" ? `${n}px` : n,
        ..._
      },
      "aria-hidden": !0,
      children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: "nhs-pattern-banner__svg",
            viewBox: `0 0 ${T} ${M}`,
            preserveAspectRatio: "none",
            "aria-hidden": !0,
            children: [
              /* @__PURE__ */ r.jsxs("defs", { children: [
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-aqua-green",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-purple",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "0",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(214, 203, 226)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "0.72", stopColor: "rgb(192, 177, 213)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(171, 151, 199)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-blue",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(38, 58, 127)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(34, 94, 171)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-grey",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(66, 85, 101)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(112, 132, 147)" })
                    ]
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-azure",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(96, 178, 226)" }),
                      /* @__PURE__ */ r.jsx("stop", { offset: "0.51", stopColor: "rgb(34, 94, 172)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ r.jsx("g", { children: (() => {
                const D = (F) => F / b.w * 100, $ = (F) => F / b.h * 100, H = w.map((F) => {
                  const L = ft(F.x, 0, 100), G = ft(F.y, 0, 100);
                  if (F.kind === "circle") return [[L, G]];
                  if (F.kind === "rect") {
                    const E = D(F.width ?? 48), O = $(F.height ?? 36);
                    return [
                      [L - E / 2, G - O / 2],
                      [L + E / 2, G - O / 2],
                      [L + E / 2, G + O / 2],
                      [L - E / 2, G + O / 2]
                    ];
                  }
                  if (F.kind === "svg") {
                    const E = D(F.width ?? 48), O = $(F.height ?? 48);
                    return [
                      [L - E / 2, G - O / 2],
                      [L + E / 2, G - O / 2],
                      [L + E / 2, G + O / 2],
                      [L - E / 2, G + O / 2]
                    ];
                  }
                  return I(L, G, F.size ?? 40);
                }), Z = Math.max(1, Math.floor(l ?? 1)), K = /* @__PURE__ */ new Set(), ne = [];
                for (let F = 0; F < w.length; F++) {
                  const L = [];
                  for (let E = 0; E < w.length; E++) {
                    if (F === E) continue;
                    const O = w[F].x - w[E].x, P = w[F].y - w[E].y;
                    L.push({ j: E, d2: O * O + P * P });
                  }
                  L.sort((E, O) => E.d2 - O.d2);
                  const G = Math.min(Z, L.length);
                  for (let E = 0; E < G; E++) {
                    const O = L[E].j, P = Math.min(F, O), X = Math.max(F, O), Y = `${P}-${X}`;
                    K.has(Y) || (K.add(Y), ne.push([P, X]));
                  }
                }
                const B = [];
                for (const [F, L] of ne) {
                  const G = H[F], E = H[L];
                  let O = null;
                  for (const P of G)
                    for (const X of E) {
                      const Y = P[0] - X[0], Q = P[1] - X[1], de = Y * Y + Q * Q;
                      (!O || de < O.d2) && (O = { p: P, q: X, d2: de });
                    }
                  O && B.push(
                    /* @__PURE__ */ r.jsx(
                      "line",
                      {
                        x1: ft(O.p[0], 0, 100),
                        y1: ft(O.p[1], 0, 100),
                        x2: ft(O.q[0], 0, 100),
                        y2: ft(O.q[1], 0, 100),
                        className: "nhs-pattern-banner-connector",
                        style: {
                          stroke: c,
                          strokeWidth: d,
                          strokeDasharray: u
                        }
                      },
                      `nn-line-${F}-${L}`
                    )
                  );
                }
                return B;
              })() }),
              /* @__PURE__ */ r.jsx("g", { children: w.map((D, $) => {
                const H = ["nhs-pattern-banner-shape", D.fill].filter(Boolean).join(" ");
                if (D.kind === "circle") {
                  const F = (D.size ?? 40) / b.w * 100 * 0.5, L = b.w / b.h, G = F * L;
                  return /* @__PURE__ */ r.jsx(
                    "ellipse",
                    {
                      cx: ft(D.x, 0, 100),
                      cy: ft(D.y, 0, 100),
                      rx: F,
                      ry: G,
                      className: H
                    },
                    $
                  );
                }
                if (D.kind === "rect") {
                  const F = (D.width ?? 48) / b.w * 100, L = (D.height ?? 36) / b.h * 100, G = ft(D.x - F / 2, 0, 100), E = ft(D.y - L / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "rect",
                    {
                      x: G,
                      y: E,
                      width: F,
                      height: L,
                      className: H
                    },
                    $
                  );
                }
                if (D.kind === "svg" && D.src) {
                  const F = (D.width ?? 48) / b.w * 100, L = (D.height ?? 48) / b.h * 100, G = ft(D.x - F / 2, 0, 100), E = ft(D.y - L / 2, 0, 100);
                  return /* @__PURE__ */ r.jsx(
                    "image",
                    {
                      href: D.src,
                      x: G,
                      y: E,
                      width: F,
                      height: L,
                      preserveAspectRatio: "xMidYMid meet",
                      className: H
                    },
                    $
                  );
                }
                const Z = ft(D.x, 0, 100), K = ft(D.y, 0, 100), B = I(Z, K, D.size ?? 40).map((F) => F.join(",")).join(" ");
                return /* @__PURE__ */ r.jsx("polygon", { points: B, className: H }, $);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "nhs-pattern-banner__feature",
            style: {
              width: typeof m == "number" ? `${m}px` : m
            },
            children: x
          }
        )
      ]
    }
  );
};
var tx = /* @__PURE__ */ ((e) => (e.Photo = "photo", e.Graphic = "graphic", e))(tx || {}), Qn = /* @__PURE__ */ ((e) => (e.Vertical = "vertical", e.Horizontal = "horizontal", e.Portrait = "portrait", e.Landscape = "landscape", e))(Qn || {}), jn = /* @__PURE__ */ ((e) => (e.AquaGreen = "aqua-green", e.Purple = "purple", e.Blue = "blue", e.Grey = "grey", e.Azure = "azure", e))(jn || {}), jt = /* @__PURE__ */ ((e) => (e.Rect = "rect", e.Hex = "hex", e.Circle = "circle", e))(jt || {}), hr = /* @__PURE__ */ ((e) => (e.None = "none", e.Soft = "soft", e.Strong = "strong", e))(hr || {}), nx = /* @__PURE__ */ ((e) => (e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e))(nx || {});
function rx(e) {
  return function() {
    let t = e += 1831565813;
    return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const Jn = [
  jn.AquaGreen,
  jn.Purple,
  jn.Blue,
  jn.Grey,
  jn.Azure
];
function lo(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ax(e, t, n = 4) {
  const a = rx(e), o = [], s = [
    jt.Rect,
    jt.Hex,
    jt.Circle
  ], i = Jn.indexOf(t), l = [
    t,
    Jn[(i + 2) % Jn.length],
    Jn[(i + 3) % Jn.length]
  ], c = [], d = 1200, u = 400, f = 1.2, h = (S, N) => !(S.right < N.left || S.left > N.right || S.bottom < N.top || S.top > N.bottom), p = (S) => S.left >= 0 && S.top >= 0 && S.right <= 100 && S.bottom <= 100, x = (S, N, C, k, v, _) => {
    let j = 0, b = 0;
    if (S === jt.Rect) {
      const y = k ?? 48, w = v ?? 36;
      j = y / d * 100, b = w / u * 100;
    } else if (S === jt.Circle) {
      const y = _ ?? 40;
      j = y / d * 100, b = y / u * 100;
    } else {
      const y = _ ?? 40;
      j = y / d * 100, b = y * (Math.sqrt(3) / 2) / u * 100;
    }
    return {
      left: N - j / 2 - f,
      right: N + j / 2 + f,
      top: C - b / 2 - f,
      bottom: C + b / 2 + f
    };
  };
  let m = 0;
  const g = lo(Math.round(n), 4, 12);
  for (; o.length < g && m < g * 120; ) {
    m++;
    const S = s[Math.floor(a() * s.length)], N = lo(20 + a() * 60, 10, 90), C = lo(20 + a() * 60, 10, 90), k = l[Math.floor(a() * l.length)], v = o.length < 2 ? hr.Soft : hr.None;
    if (S === jt.Rect) {
      const _ = 40 + a() * 80, j = 28 + a() * 64, b = x(S, N, C, _, j);
      if (!p(b)) continue;
      let y = !1;
      for (let w = 0; w < c.length; w++)
        if (h(b, c[w])) {
          y = !0;
          break;
        }
      if (y) continue;
      c.push(b), o.push({ kind: S, x: N, y: C, width: _, height: j, gradient: k, rotate: 0, shadow: v });
    } else if (S === jt.Circle) {
      const _ = 24 + a() * 80, j = x(S, N, C, void 0, void 0, _);
      if (!p(j)) continue;
      let b = !1;
      for (let y = 0; y < c.length; y++)
        if (h(j, c[y])) {
          b = !0;
          break;
        }
      if (b) continue;
      c.push(j), o.push({ kind: S, x: N, y: C, size: _, gradient: k, rotate: 0, shadow: v });
    } else {
      const _ = 28 + a() * 72, j = a() * 360, b = x(S, N, C, void 0, void 0, _);
      if (!p(b)) continue;
      let y = !1;
      for (let w = 0; w < c.length; w++)
        if (h(b, c[w])) {
          y = !0;
          break;
        }
      if (y) continue;
      c.push(b), o.push({ kind: S, x: N, y: C, size: _, gradient: k, rotate: j, shadow: v });
    }
  }
  return o;
}
const ox = ({ shapes: e, aspectRatio: t }) => {
  const a = 600 * t, o = 600, s = (l) => l.toFixed(2), i = (l, c, d) => {
    const u = d / 2;
    return [0, 60, 120, 180, 240, 300].map((h) => {
      const p = h * Math.PI / 180, x = l + u * Math.cos(p), m = c + u * Math.sin(p);
      return `${s(x)},${s(m)}`;
    }).join(" ");
  };
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: "nhs-product-card__graphic",
      viewBox: `0 0 ${a} ${o}`,
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ r.jsxs("defs", { children: [
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-aqua-green",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-purple",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(176, 161, 201)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(198, 189, 216)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-blue",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 94, 184)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(65, 131, 196)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-grey",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(76, 98, 114)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(174, 184, 192)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: "pc-grad-azure",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0", stopColor: "rgb(0, 122, 204)" }),
                /* @__PURE__ */ r.jsx("stop", { offset: "1", stopColor: "rgb(103, 192, 229)" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "filter",
            {
              id: "pc-shadow-soft",
              x: "-50%",
              y: "-50%",
              width: "200%",
              height: "200%",
              children: [
                /* @__PURE__ */ r.jsx("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "2" }),
                /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "2", result: "offsetblur" }),
                /* @__PURE__ */ r.jsx("feComponentTransfer", { children: /* @__PURE__ */ r.jsx("feFuncA", { type: "linear", slope: "0.2" }) }),
                /* @__PURE__ */ r.jsxs("feMerge", { children: [
                  /* @__PURE__ */ r.jsx("feMergeNode", {}),
                  /* @__PURE__ */ r.jsx("feMergeNode", { in: "SourceGraphic" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "filter",
            {
              id: "pc-shadow-strong",
              x: "-50%",
              y: "-50%",
              width: "200%",
              height: "200%",
              children: [
                /* @__PURE__ */ r.jsx("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "4" }),
                /* @__PURE__ */ r.jsx("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                /* @__PURE__ */ r.jsx("feComponentTransfer", { children: /* @__PURE__ */ r.jsx("feFuncA", { type: "linear", slope: "0.3" }) }),
                /* @__PURE__ */ r.jsxs("feMerge", { children: [
                  /* @__PURE__ */ r.jsx("feMergeNode", {}),
                  /* @__PURE__ */ r.jsx("feMergeNode", { in: "SourceGraphic" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("g", { style: { mixBlendMode: "multiply" }, children: (() => {
          if (e.length < 2) return null;
          const l = e.map((f) => {
            const h = f.x / 100 * a, p = f.y / 100 * o;
            if (f.kind === jt.Circle) {
              const x = (f.size ?? 40) / 2;
              return [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
                const S = g * Math.PI / 180;
                return [h + x * Math.cos(S), p + x * Math.sin(S)];
              });
            } else if (f.kind === jt.Rect) {
              const x = f.width ?? 60, m = f.height ?? 40;
              return [
                [h - x / 2, p - m / 2],
                [h + x / 2, p - m / 2],
                [h + x / 2, p + m / 2],
                [h - x / 2, p + m / 2]
              ];
            } else {
              const m = (f.size ?? 40) / 2;
              return [0, 60, 120, 180, 240, 300].map((S) => {
                const N = S * Math.PI / 180;
                return [h + m * Math.cos(N), p + m * Math.sin(N)];
              });
            }
          }), c = 1, d = /* @__PURE__ */ new Set(), u = [];
          for (let f = 0; f < e.length; f++) {
            const h = [];
            for (let x = 0; x < e.length; x++) {
              if (f === x) continue;
              const m = e[f].x - e[x].x, g = e[f].y - e[x].y;
              h.push({ j: x, d2: m * m + g * g });
            }
            h.sort((x, m) => x.d2 - m.d2);
            const p = Math.min(c, h.length);
            for (let x = 0; x < p; x++) {
              const m = h[x].j, g = Math.min(f, m), S = Math.max(f, m), N = `${g}-${S}`;
              d.has(N) || (d.add(N), u.push([g, S]));
            }
          }
          return u.map(([f, h]) => {
            const p = l[f], x = l[h];
            let m = null;
            for (const g of p)
              for (const S of x) {
                const N = g[0] - S[0], C = g[1] - S[1], k = N * N + C * C;
                (!m || k < m.d2) && (m = { p: g, q: S, d2: k });
              }
            return m ? /* @__PURE__ */ r.jsx(
              "line",
              {
                x1: s(m.p[0]),
                y1: s(m.p[1]),
                x2: s(m.q[0]),
                y2: s(m.q[1]),
                stroke: "rgb(158, 171, 181)",
                strokeWidth: s(0.5),
                strokeMiterlimit: s(0.5)
              },
              `connector-${f}-${h}`
            ) : null;
          });
        })() }),
        e.map((l, c) => {
          const d = `pc-grad-${l.gradient}`, u = l.shadow === hr.Soft ? "url(#pc-shadow-soft)" : l.shadow === hr.Strong ? "url(#pc-shadow-strong)" : void 0, f = l.x / 100 * a, h = l.y / 100 * o, p = s(f), x = s(h);
          if (l.kind === jt.Rect) {
            const m = l.width || 60, g = l.height || 40;
            return /* @__PURE__ */ r.jsx(
              "rect",
              {
                className: d,
                x: s(f - m / 2),
                y: s(h - g / 2),
                width: s(m),
                height: s(g),
                transform: `rotate(${l.rotate || 0} ${p} ${x})`,
                filter: u
              },
              c
            );
          } else if (l.kind === jt.Circle) {
            const m = (l.size || 40) / 2;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                className: d,
                cx: p,
                cy: x,
                r: s(m),
                filter: u
              },
              c
            );
          } else if (l.kind === jt.Hex) {
            const m = l.size || 40;
            return /* @__PURE__ */ r.jsx(
              "polygon",
              {
                className: d,
                points: i(f, h, m),
                transform: `rotate(${l.rotate || 0} ${p} ${x})`,
                filter: u
              },
              c
            );
          }
          return null;
        })
      ]
    }
  );
}, z1 = ({
  title: e,
  description: t,
  image: n,
  layout: a = Qn.Vertical,
  buttons: o = [],
  badge: s,
  theme: i = "blue",
  className: l,
  style: c,
  onClick: d,
  href: u,
  headingLevel: f = 3,
  footer: h,
  elevated: p = !0,
  imageAspectRatio: x = 1.5
}) => {
  const m = tt.useMemo(() => a === Qn.Landscape ? "horizontal" : a === Qn.Portrait ? "vertical" : a === Qn.Horizontal ? "horizontal" : "vertical", [a]), g = tt.useMemo(() => {
    if (n?.type === "graphic") {
      if (n.shapes) return n.shapes;
      const _ = n.seed ?? 0, j = n.theme ?? i;
      return ax(_, j);
    }
    return [];
  }, [n, i]), S = [
    "nhs-product-card",
    `nhs-product-card--${m}`,
    `nhs-product-card--theme-${i}`,
    p && "nhs-product-card--elevated",
    (d || u) && "nhs-product-card--clickable",
    l
  ].filter(Boolean).join(" "), N = (_) => {
    d ? d(_) : u && !_.defaultPrevented && (window.location.href = u);
  }, C = (_) => {
    (d || u) && (_.key === "Enter" || _.key === " ") && (_.preventDefault(), d ? d(_) : u && (window.location.href = u));
  }, k = () => {
    if (!n) return null;
    const _ = [
      "nhs-product-card__image",
      n.type === "graphic" && "nhs-product-card__image--graphic"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: _,
        style: { aspectRatio: x.toString() },
        children: n.type === "photo" && n.src ? /* @__PURE__ */ r.jsx("img", { src: n.src, alt: n.alt || "" }) : n.type === "graphic" ? /* @__PURE__ */ r.jsx(ox, { shapes: g, aspectRatio: x }) : null
      }
    );
  }, v = () => o.length ? /* @__PURE__ */ r.jsx("div", { className: "nhs-product-card__actions", children: o.map((_, j) => {
    const b = [
      "nhs-product-card__button",
      `nhs-product-card__button--${_.variant || "primary"}`,
      _.disabled && "nhs-product-card__button--disabled"
    ].filter(Boolean).join(" ");
    return _.href ? /* @__PURE__ */ r.jsx(
      "a",
      {
        href: _.href,
        className: b,
        "aria-label": _.ariaLabel,
        onClick: (y) => {
          if (_.disabled) {
            y.preventDefault();
            return;
          }
          _.onClick && (y.stopPropagation(), _.onClick(y));
        },
        children: _.label
      },
      j
    ) : /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: b,
        disabled: _.disabled,
        "aria-label": _.ariaLabel,
        onClick: (y) => {
          _.onClick && (y.stopPropagation(), _.onClick(y));
        },
        children: _.label
      },
      j
    );
  }) }) : null;
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: S,
      style: c,
      onClick: d || u ? N : void 0,
      onKeyDown: d || u ? C : void 0,
      role: d || u ? "button" : void 0,
      tabIndex: d || u ? 0 : void 0,
      children: [
        s && /* @__PURE__ */ r.jsx("div", { className: "nhs-product-card__badge", children: s }),
        k(),
        /* @__PURE__ */ r.jsxs("div", { className: "nhs-product-card__content", children: [
          /* @__PURE__ */ r.jsx(Ht, { level: f, className: "nhs-product-card__title", children: e }),
          /* @__PURE__ */ r.jsx("p", { className: "nhs-product-card__description", children: t }),
          v(),
          h && /* @__PURE__ */ r.jsx("div", { className: "nhs-product-card__footer", children: h })
        ] })
      ]
    }
  );
}, sx = "150ms", ix = "300ms", lx = "500ms", cx = "cubic-bezier(0.4, 0, 1, 1)", dx = "cubic-bezier(0, 0, 0.2, 1)", ux = "cubic-bezier(0.4, 0, 0.2, 1)", fx = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", hx = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", px = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", mx = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", gx = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", xx = "1px", yx = "2px", bx = "4px", vx = "4px", wx = "4px", _x = "2px", Sx = "1px", kx = "0px", Nx = "4px", Cx = "8px", jx = "12px", Ic = "#d8dde0", Dc = "#4c6272", Tc = "#d8dde0", Lc = "#aeb7bd", $c = "#d5281b", Ac = "#005eb8", Ec = "#ffffff", Fc = "#212b32", Pc = "#007f3b", Rc = "#330072", Bc = "#7c2855", Hc = "#d5281b", zc = "#ffeb3b", Oc = "#fff9c4", Uc = "#ffb81c", Wc = "#ed8b00", Gc = "#00a499", Vc = "#ae2573", Yc = "#4c6272", Zc = "#768692", qc = "#aeb7bd", Jc = "#d8dde0", Xc = "#f0f4f5", Mx = "#212b32", Ix = "#4c6272", Dx = "#ffffff", Tx = "#212b32", Lx = "#005eb8", $x = "#7c2855", Ax = "#003087", Ex = "#330072", Fx = "#ffeb3b", Px = "#212b32", Rx = "#d8dde0", Bx = "#ffffff33", Hx = "#d5281b", zx = "#4c6272", Ox = "#ffffff", Ux = "#007f3b", Wx = "#ffffff", Gx = "#006530", Vx = "#004021", Yx = "#004021", Zx = "#00000000", qx = "#ffffff", Jx = "#005eb8", Xx = "#005eb8", Kx = "#d9e5f2", Qx = "#c7daf0", ey = "#005eb8", ty = "#ffffff", ny = "#212b32", ry = "#d9dde0", ay = "#b3bcc2", oy = "#b3bcc2", sy = "#d5281b", iy = "#aa2016", ly = "#6a140e", cy = "#6a140e", dy = "#005eb8", uy = "#004b93", fy = "#002f5c", hy = "#002f5c", py = "8px", my = "16px", gy = "12px", xy = "16px", yy = "4px", by = "40px", vy = "4px", wy = "40px", _y = "12px", Sy = "16px", ky = "32px", Ny = "16px", Cy = "20px", jy = "28px", My = "9px", Iy = "2px", Dy = "16px", Ty = "24px", Ly = "8px", $y = "24px", Ay = "16px", Ey = "4px", Fy = "4px", Py = "4px", Ry = "8px", By = "4px", Hy = "16px", zy = "#007f3b", Oy = "#006530", Uy = "#004021", Wy = "#d8dde0", Gy = "#ffffff", Vy = "#768692", Yy = "#00000000", Zy = "#ffeb3b", qy = "#00000000", Jy = "#ffffff", Xy = "#d9e5f2", Ky = "#c7daf0", Qy = "#005eb8", eb = "#005eb8", Kc = "8px", Qc = "16px", ed = "12px", td = "16px", tb = "2px", nb = "4px", rb = "4px", ab = "600", ob = "#ffffff", sb = "#d8dde0", ib = "#aeb7bd", lb = "#f0f4f5", cb = "#212b32", db = "#212b32", ub = "#005eb8", nd = "16px", rd = "32px", ad = "16px", fb = "1px", hb = "4px", pb = "none", mb = "0 2px 4px rgba(0, 0, 0, 0.1)", gb = "#ffffff", xb = "#ffffff", yb = "#d8dde0", bb = "#ffffff", vb = "#4c6272", wb = "#ffeb3b", _b = "#d5281b", Sb = "#aeb7bd", kb = "#212b32", Nb = "#4c6272", Cb = "#768692", jb = "#212b32", Mb = "#ffffff", Ib = "600", Db = "#d5281b", Tb = "600", Lb = "#4c6272", od = "4px", sd = "40px", id = "40px", ld = "12px", $b = "2px", Ab = "4px", Eb = "0px", Fb = "16px", Pb = "18px", Rb = "24px", Bb = "32px", Hb = "34px", zb = "32px", Ob = "40px", Ub = "48px", Wb = "5.4ex", Gb = "7.2ex", Vb = "9ex", Yb = "10.8ex", Zb = "20ex", qb = "38ex", Jb = "56ex", Xb = "44px", Kb = "40px", Qb = "1020px", ev = "100%", tv = "50%", nv = "33.333%", rv = "25%", av = "20%", ov = "320px", sv = "641px", iv = "1025px", lv = "1280px", cv = "960px", dv = "32px", uv = "16px", fv = "#d5281b", hv = "#d5281b", pv = "#ffffff", mv = "#007f3b", gv = "#007f3b", xv = "#ffffff", yv = "#ffeb3b", bv = "#ffeb3b", vv = "#212b32", wv = "#005eb8", _v = "#005eb8", Sv = "#ffffff", kv = "#d8dde0", Nv = "#aeb7bd", Cv = "#768692", jv = "0 4px 0 #004021", Mv = "0 4px 0 #005eb8", Iv = "0 4px 0 #6a140e", Dv = "0 4px 0 #ffeb3b", Tv = "none", Lv = "0 2px 4px rgba(0, 0, 0, 0.1)", $v = "4px", Av = "0px", Ev = "solid", Fv = "0 0 0 3px #ffeb3b", Pv = "0 0 0 3px #ffeb3b", Rv = "none", Bv = "0 1px 3px rgba(0, 0, 0, 0.12)", Hv = "0 2px 6px rgba(0, 0, 0, 0.16)", zv = "0 4px 12px rgba(0, 0, 0, 0.20)", cd = "0", dd = "4px", ud = "8px", fd = "16px", hd = "24px", pd = "32px", md = "40px", gd = "48px", xd = "56px", yd = "64px", To = "0", Lo = "0", $o = "4px", Ao = "4px", Eo = "8px", Fo = "8px", Po = "8px", Ro = "16px", Bo = "16px", Ho = "24px", zo = "24px", Oo = "32px", Uo = "32px", Wo = "40px", Go = "40px", Vo = "48px", Yo = "48px", Zo = "56px", qo = "56px", Jo = "64px", ea = "Frutiger W01", ta = "Arial, Helvetica, sans-serif", na = "sans-serif", ra = "400", aa = "600", oa = "400", sa = "12px", ia = "14px", la = "12pt", ca = "14px", da = "16px", ua = "12pt", fa = "16px", ha = "19px", pa = "13pt", ma = "19px", ga = "22px", xa = "15pt", ya = "22px", ba = "26px", va = "17pt", wa = "27px", _a = "36px", Sa = "20pt", ka = "33px", Na = "48px", Ca = "24pt", Xo = "16px", Ko = "24px", Ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Wt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Gt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Vt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Yt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Zt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, qt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Jt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Xt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: sx,
  AnimationDurationNormal: ix,
  AnimationDurationSlow: lx,
  AnimationEasingBounce: fx,
  AnimationEasingEaseIn: cx,
  AnimationEasingEaseInOut: ux,
  AnimationEasingEaseOut: dx,
  BorderColorCard: Tc,
  BorderColorCardHover: Lc,
  BorderColorDefault: Ic,
  BorderColorError: $c,
  BorderColorForm: Dc,
  BorderRadiusLarge: jx,
  BorderRadiusMedium: Cx,
  BorderRadiusNone: kx,
  BorderRadiusSmall: Nx,
  BorderWidthCardBottom: vx,
  BorderWidthDefault: xx,
  BorderWidthFormElement: yx,
  BorderWidthFormElementError: bx,
  BorderWidthPanel: wx,
  BorderWidthTableCell: Sx,
  BorderWidthTableHeader: _x,
  BreakpointDesktop: iv,
  BreakpointLargeDesktop: lv,
  BreakpointMobile: ov,
  BreakpointTablet: sv,
  ButtonBorderRadius: nb,
  ButtonBorderWidth: tb,
  ButtonPrimaryBackgroundActive: Uy,
  ButtonPrimaryBackgroundDefault: zy,
  ButtonPrimaryBackgroundDisabled: Wy,
  ButtonPrimaryBackgroundHover: Oy,
  ButtonPrimaryBorderDefault: Yy,
  ButtonPrimaryBorderFocus: Zy,
  ButtonPrimaryTextDefault: Gy,
  ButtonPrimaryTextDisabled: Vy,
  ButtonSecondaryBackgroundActive: Ky,
  ButtonSecondaryBackgroundDefault: qy,
  ButtonSecondaryBackgroundHover: Xy,
  ButtonSecondaryBackgroundSolid: Jy,
  ButtonSecondaryBorderDefault: eb,
  ButtonSecondaryTextDefault: Qy,
  ButtonShadowSize: rb,
  ButtonSpacingPaddingHorizontalDesktop: td,
  ButtonSpacingPaddingHorizontalMobile: Qc,
  ButtonSpacingPaddingVerticalDesktop: ed,
  ButtonSpacingPaddingVerticalMobile: Kc,
  ButtonTypographyWeight: ab,
  CardBackgroundDefault: ob,
  CardBorderBottom: lb,
  CardBorderDefault: sb,
  CardBorderHover: ib,
  CardBorderWidthBottom: hb,
  CardBorderWidthDefault: fb,
  CardShadowDefault: pb,
  CardShadowHover: mb,
  CardSpacingHeadingMargin: ad,
  CardSpacingPaddingDesktop: rd,
  CardSpacingPaddingMobile: nd,
  CardTextDescription: db,
  CardTextHeading: cb,
  CardTextLink: ub,
  ColorBorderDefault: Rx,
  ColorBorderSecondary: Bx,
  ColorButtonLoginActive: fy,
  ColorButtonLoginBackground: dy,
  ColorButtonLoginHover: uy,
  ColorButtonLoginShadow: hy,
  ColorButtonPrimaryActive: Vx,
  ColorButtonPrimaryBackground: Ux,
  ColorButtonPrimaryHover: Gx,
  ColorButtonPrimaryShadow: Yx,
  ColorButtonPrimaryText: Wx,
  ColorButtonReverseActive: ay,
  ColorButtonReverseBackground: ty,
  ColorButtonReverseHover: ry,
  ColorButtonReverseShadow: oy,
  ColorButtonReverseText: ny,
  ColorButtonSecondaryActive: Qx,
  ColorButtonSecondaryBackground: Zx,
  ColorButtonSecondaryBackgroundSolid: qx,
  ColorButtonSecondaryBorder: Jx,
  ColorButtonSecondaryHover: Kx,
  ColorButtonSecondaryShadow: ey,
  ColorButtonSecondaryText: Xx,
  ColorButtonWarningActive: ly,
  ColorButtonWarningBackground: sy,
  ColorButtonWarningHover: iy,
  ColorButtonWarningShadow: cy,
  ColorError: Hx,
  ColorFocusBackground: Fx,
  ColorFocusText: Px,
  ColorFormBackground: Ox,
  ColorFormBorder: zx,
  ColorGrey1: Yc,
  ColorGrey2: Zc,
  ColorGrey3: qc,
  ColorGrey4: Jc,
  ColorGrey5: Xc,
  ColorLinkActive: Ax,
  ColorLinkDefault: Lx,
  ColorLinkHover: $x,
  ColorLinkVisited: Ex,
  ColorPrimaryBlack: Fc,
  ColorPrimaryBlue: Ac,
  ColorPrimaryDarkPink: Bc,
  ColorPrimaryGreen: Pc,
  ColorPrimaryPurple: Rc,
  ColorPrimaryRed: Hc,
  ColorPrimaryWhite: Ec,
  ColorPrimaryYellow: zc,
  ColorSecondaryAquaGreen: Gc,
  ColorSecondaryOrange: Wc,
  ColorSecondaryPaleYellow: Oc,
  ColorSecondaryPink: Vc,
  ColorSecondaryWarmYellow: Uc,
  ColorTextPrimary: Mx,
  ColorTextPrint: Tx,
  ColorTextReverse: Dx,
  ColorTextSecondary: Ix,
  ComponentBlur: Fy,
  ComponentBreadcrumbChevronMarginLeft: My,
  ComponentBreadcrumbChevronMarginRight: Iy,
  ComponentBreadcrumbPaddingTopDesktop: Ty,
  ComponentBreadcrumbPaddingTopMobile: Dy,
  ComponentButtonPaddingDesktopHorizontal: xy,
  ComponentButtonPaddingDesktopVertical: gy,
  ComponentButtonPaddingMobileHorizontal: my,
  ComponentButtonPaddingMobileVertical: py,
  ComponentButtonShadowSize: yy,
  ComponentCardHeadingMargin: Ny,
  ComponentCardPaddingDesktop: ky,
  ComponentCardPaddingMobile: Sy,
  ComponentDetails: Ry,
  ComponentExpander: By,
  ComponentFormCheckboxLabelPadding: _y,
  ComponentFormCheckboxSize: wy,
  ComponentFormInputMinHeight: by,
  ComponentFormInputPadding: vy,
  ComponentLink: Py,
  ComponentPagination: Hy,
  ComponentPanelPaddingDesktop: jy,
  ComponentPanelPaddingMobile: Cy,
  ComponentSpread: Ey,
  ComponentSummaryListCellPaddingHorizontal: $y,
  ComponentSummaryListCellPaddingVertical: Ly,
  ComponentSummaryListRowMargin: Ay,
  ElevationHigh: zv,
  ElevationLow: Bv,
  ElevationMedium: Hv,
  ElevationNone: Rv,
  FocusOutlineOffset: Av,
  FocusOutlineStyle: Ev,
  FocusOutlineWidth: $v,
  FocusShadowButton: Pv,
  FocusShadowInput: Fv,
  FontFamilyBase: ea,
  FontFamilyFallback: ta,
  FontFamilyPrint: na,
  FontLineHeightBase: Ko,
  FontSize14Mobile: sa,
  FontSize14Print: la,
  FontSize14Tablet: ia,
  FontSize16Mobile: ca,
  FontSize16Print: ua,
  FontSize16Tablet: da,
  FontSize19Mobile: fa,
  FontSize19Print: pa,
  FontSize19Tablet: ha,
  FontSize22Mobile: ma,
  FontSize22Print: xa,
  FontSize22Tablet: ga,
  FontSize26Mobile: ya,
  FontSize26Print: va,
  FontSize26Tablet: ba,
  FontSize36Mobile: wa,
  FontSize36Print: Sa,
  FontSize36Tablet: _a,
  FontSize48Mobile: ka,
  FontSize48Print: Ca,
  FontSize48Tablet: Na,
  FontSizeBase: Xo,
  FontWeightBold: aa,
  FontWeightLight: oa,
  FontWeightNormal: ra,
  FormBorderRadius: Eb,
  FormBorderWidthDefault: $b,
  FormBorderWidthError: Ab,
  FormErrorTextDefault: Db,
  FormErrorTypographyWeight: Tb,
  FormHintTextDefault: Lb,
  FormInputBackgroundDefault: gb,
  FormInputBackgroundDisabled: yb,
  FormInputBackgroundError: bb,
  FormInputBackgroundFocus: xb,
  FormInputBorderDefault: vb,
  FormInputBorderDisabled: Sb,
  FormInputBorderError: _b,
  FormInputBorderFocus: wb,
  FormInputTextDefault: kb,
  FormInputTextDisabled: Cb,
  FormInputTextPlaceholder: Nb,
  FormLabelTextDefault: jb,
  FormLabelTextRequired: Mb,
  FormLabelTypographyWeight: Ib,
  FormSpacingCheckboxLabelPadding: ld,
  FormSpacingCheckboxSize: id,
  FormSpacingInputMinHeight: sd,
  FormSpacingInputPadding: od,
  GridGutter: dv,
  GridGutterHalf: uv,
  GridPageWidth: cv,
  HeadingsNhsukHeadingL: Ut,
  HeadingsNhsukHeadingM: Wt,
  HeadingsNhsukHeadingS: Gt,
  HeadingsNhsukHeadingXl: Ot,
  HeadingsNhsukHeadingXs: Vt,
  LayoutColumnActions: av,
  LayoutColumnFull: ev,
  LayoutColumnHalf: tv,
  LayoutColumnQuarter: rv,
  LayoutColumnThird: nv,
  LayoutContainerMaxWidth: Qb,
  ParagraphsBody: Yt,
  ParagraphsBodyLarge: Zt,
  ParagraphsBodySmall: qt,
  ParagraphsLedeText: Jt,
  ParagraphsLedeTextSmall: Xt,
  ShadowButtonDefault: jv,
  ShadowButtonFocus: Dv,
  ShadowButtonSecondary: Mv,
  ShadowButtonWarning: Iv,
  ShadowCardDefault: Tv,
  ShadowCardHover: Lv,
  SizeButtonMinHeightDesktop: Kb,
  SizeButtonMinHeightMobile: Xb,
  SizeFormControlLarge: Ub,
  SizeFormControlMedium: Ob,
  SizeFormControlSmall: zb,
  SizeFormInputWidth2xl: qb,
  SizeFormInputWidth3xl: Jb,
  SizeFormInputWidthLg: Yb,
  SizeFormInputWidthMd: Vb,
  SizeFormInputWidthSm: Gb,
  SizeFormInputWidthXl: Zb,
  SizeFormInputWidthXs: Wb,
  SizeIconExtraLarge: Bb,
  SizeIconLarge: Rb,
  SizeIconMedium: Pb,
  SizeIconNhsDefault: Hb,
  SizeIconSmall: Fb,
  Spacing0: cd,
  Spacing1: dd,
  Spacing2: ud,
  Spacing3: fd,
  Spacing4: hd,
  Spacing5: pd,
  Spacing6: md,
  Spacing7: gd,
  Spacing8: xd,
  Spacing9: yd,
  SpacingResponsive0Mobile: To,
  SpacingResponsive0Tablet: Lo,
  SpacingResponsive1Mobile: $o,
  SpacingResponsive1Tablet: Ao,
  SpacingResponsive2Mobile: Eo,
  SpacingResponsive2Tablet: Fo,
  SpacingResponsive3Mobile: Po,
  SpacingResponsive3Tablet: Ro,
  SpacingResponsive4Mobile: Bo,
  SpacingResponsive4Tablet: Ho,
  SpacingResponsive5Mobile: zo,
  SpacingResponsive5Tablet: Oo,
  SpacingResponsive6Mobile: Uo,
  SpacingResponsive6Tablet: Wo,
  SpacingResponsive7Mobile: Go,
  SpacingResponsive7Tablet: Vo,
  SpacingResponsive8Mobile: Yo,
  SpacingResponsive8Tablet: Zo,
  SpacingResponsive9Mobile: qo,
  SpacingResponsive9Tablet: Jo,
  StateDisabledBackground: kv,
  StateDisabledBorder: Nv,
  StateDisabledText: Cv,
  StateErrorBackground: fv,
  StateErrorBorder: hv,
  StateErrorText: pv,
  StateInfoBackground: wv,
  StateInfoBorder: _v,
  StateInfoText: Sv,
  StateSuccessBackground: mv,
  StateSuccessBorder: gv,
  StateSuccessText: xv,
  StateWarningBackground: yv,
  StateWarningBorder: bv,
  StateWarningText: vv,
  TransitionButtonDefault: hx,
  TransitionButtonShadow: px,
  TransitionCardHover: gx,
  TransitionInputFocus: mx
}, Symbol.toStringTag, { value: "Module" })), O1 = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), U1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h1",
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
), W1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h2",
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
), G1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h3",
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
), V1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Gt.fontFamily,
      fontWeight: Gt.fontWeight,
      fontSize: Gt.fontSize.mobile,
      lineHeight: Gt.lineHeight,
      marginTop: Gt.marginTop,
      marginBottom: Gt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Y1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Vt.fontFamily,
      fontWeight: Vt.fontWeight,
      fontSize: Vt.fontSize.mobile,
      lineHeight: Vt.lineHeight,
      marginTop: Vt.marginTop,
      marginBottom: Vt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Z1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Yt.fontFamily,
      fontWeight: Yt.fontWeight,
      fontSize: Yt.fontSize.mobile,
      lineHeight: Yt.lineHeight,
      marginTop: Yt.marginTop,
      marginBottom: Yt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), q1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Zt.fontFamily,
      fontWeight: Zt.fontWeight,
      fontSize: Zt.fontSize.mobile,
      lineHeight: Zt.lineHeight,
      marginTop: Zt.marginTop,
      marginBottom: Zt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), J1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: qt.fontFamily,
      fontWeight: qt.fontWeight,
      fontSize: qt.fontSize.mobile,
      lineHeight: qt.lineHeight,
      marginTop: qt.marginTop,
      marginBottom: qt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), X1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Jt.fontFamily,
      fontWeight: Jt.fontWeight,
      fontSize: Jt.fontSize.mobile,
      lineHeight: Jt.lineHeight,
      marginTop: Jt.marginTop,
      marginBottom: Jt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), K1 = ({
  children: e,
  className: t = "",
  style: n = {}
}) => /* @__PURE__ */ r.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Xt.fontFamily,
      fontWeight: Xt.fontWeight,
      fontSize: Xt.fontSize.mobile,
      lineHeight: Xt.lineHeight,
      marginTop: Xt.marginTop,
      marginBottom: Xt.marginBottom.mobile,
      ...n
    },
    children: e
  }
), Q1 = () => Re(() => Ov, []), e2 = () => Re(() => ({
  // Border colors
  BorderColorDefault: Ic,
  BorderColorForm: Dc,
  BorderColorCard: Tc,
  BorderColorCardHover: Lc,
  BorderColorError: $c,
  // Primary colors
  ColorPrimaryBlue: Ac,
  ColorPrimaryWhite: Ec,
  ColorPrimaryBlack: Fc,
  ColorPrimaryGreen: Pc,
  ColorPrimaryPurple: Rc,
  ColorPrimaryDarkPink: Bc,
  ColorPrimaryRed: Hc,
  ColorPrimaryYellow: zc,
  // Secondary colors
  ColorSecondaryPaleYellow: Oc,
  ColorSecondaryWarmYellow: Uc,
  ColorSecondaryOrange: Wc,
  ColorSecondaryAquaGreen: Gc,
  ColorSecondaryPink: Vc,
  // Grey scale
  ColorGrey1: Yc,
  ColorGrey2: Zc,
  ColorGrey3: qc,
  ColorGrey4: Jc,
  ColorGrey5: Xc
}), []), t2 = () => Re(() => ({
  Spacing0: cd,
  Spacing1: dd,
  Spacing2: ud,
  Spacing3: fd,
  Spacing4: hd,
  Spacing5: pd,
  Spacing6: md,
  Spacing7: gd,
  Spacing8: xd,
  Spacing9: yd
}), []), n2 = () => Re(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: sa,
    Size16: ca,
    Size19: fa,
    Size22: ma,
    Size26: ya,
    Size36: wa,
    Size48: ka
  },
  Tablet: {
    Size14: ia,
    Size16: da,
    Size19: ha,
    Size22: ga,
    Size26: ba,
    Size36: _a,
    Size48: Na
  },
  Print: {
    Size14: la,
    Size16: ua,
    Size19: pa,
    Size22: xa,
    Size26: va,
    Size36: Sa,
    Size48: Ca
  },
  Family: {
    Base: ea,
    Fallback: ta,
    Print: na
  },
  Weight: {
    Normal: ra,
    Bold: aa,
    Light: oa
  },
  Base: {
    Size: Xo,
    LineHeight: Ko
  },
  // Backward compatibility - individual exports
  FontFamilyBase: ea,
  FontFamilyFallback: ta,
  FontFamilyPrint: na,
  FontWeightNormal: ra,
  FontWeightBold: aa,
  FontWeightLight: oa,
  FontSize14Mobile: sa,
  FontSize14Tablet: ia,
  FontSize14Print: la,
  FontSize16Mobile: ca,
  FontSize16Tablet: da,
  FontSize16Print: ua,
  FontSize19Mobile: fa,
  FontSize19Tablet: ha,
  FontSize19Print: pa,
  FontSize22Mobile: ma,
  FontSize22Tablet: ga,
  FontSize22Print: xa,
  FontSize26Mobile: ya,
  FontSize26Tablet: ba,
  FontSize26Print: va,
  FontSize36Mobile: wa,
  FontSize36Tablet: _a,
  FontSize36Print: Sa,
  FontSize48Mobile: ka,
  FontSize48Tablet: Na,
  FontSize48Print: Ca,
  FontSizeBase: Xo,
  FontLineHeightBase: Ko
}), []), r2 = () => Re(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: To,
    Size1: $o,
    Size2: Eo,
    Size3: Po,
    Size4: Bo,
    Size5: zo,
    Size6: Uo,
    Size7: Go,
    Size8: Yo,
    Size9: qo
  },
  Tablet: {
    Size0: Lo,
    Size1: Ao,
    Size2: Fo,
    Size3: Ro,
    Size4: Ho,
    Size5: Oo,
    Size6: Wo,
    Size7: Vo,
    Size8: Zo,
    Size9: Jo
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: To,
  SpacingResponsive0Tablet: Lo,
  SpacingResponsive1Mobile: $o,
  SpacingResponsive1Tablet: Ao,
  SpacingResponsive2Mobile: Eo,
  SpacingResponsive2Tablet: Fo,
  SpacingResponsive3Mobile: Po,
  SpacingResponsive3Tablet: Ro,
  SpacingResponsive4Mobile: Bo,
  SpacingResponsive4Tablet: Ho,
  SpacingResponsive5Mobile: zo,
  SpacingResponsive5Tablet: Oo,
  SpacingResponsive6Mobile: Uo,
  SpacingResponsive6Tablet: Wo,
  SpacingResponsive7Mobile: Go,
  SpacingResponsive7Tablet: Vo,
  SpacingResponsive8Mobile: Yo,
  SpacingResponsive8Tablet: Zo,
  SpacingResponsive9Mobile: qo,
  SpacingResponsive9Tablet: Jo
}), []), a2 = () => Re(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Kc,
  ButtonSpacingPaddingHorizontalMobile: Qc,
  ButtonSpacingPaddingVerticalDesktop: ed,
  ButtonSpacingPaddingHorizontalDesktop: td,
  // Card spacing	
  CardSpacingPaddingMobile: nd,
  CardSpacingPaddingDesktop: rd,
  CardSpacingHeadingMargin: ad,
  // Form spacing
  FormSpacingInputPadding: od,
  FormSpacingInputMinHeight: sd,
  FormSpacingCheckboxSize: id,
  FormSpacingCheckboxLabelPadding: ld
}), []), o2 = () => Re(() => ({
  xl: Ot,
  l: Ut,
  m: Wt,
  s: Gt,
  xs: Vt
}), []), s2 = () => Re(() => ({
  body: Yt,
  bodyLarge: Zt,
  bodySmall: qt,
  ledeText: Jt,
  ledeTextSmall: Xt
}), []), i2 = () => Re(() => ({
  headings: {
    xl: Ot,
    l: Ut,
    m: Wt,
    s: Gt,
    xs: Vt
  },
  paragraphs: {
    body: Yt,
    bodyLarge: Zt,
    bodySmall: qt,
    ledeText: Jt,
    ledeTextSmall: Xt
  },
  fonts: {
    family: {
      base: ea,
      fallback: ta,
      print: na
    },
    weight: {
      normal: ra,
      bold: aa,
      light: oa
    },
    sizes: {
      mobile: {
        size14: sa,
        size16: ca,
        size19: fa,
        size22: ma,
        size26: ya,
        size36: wa,
        size48: ka
      },
      tablet: {
        size14: ia,
        size16: da,
        size19: ha,
        size22: ga,
        size26: ba,
        size36: _a,
        size48: Na
      },
      print: {
        size14: la,
        size16: ua,
        size19: pa,
        size22: xa,
        size26: va,
        size36: Sa,
        size48: Ca
      }
    }
  }
}), []);
function l2(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: n = "two-column" } = e, [a, o] = J.useState(t), s = J.useCallback(() => o("three-column"), []), i = J.useCallback(() => o((c) => c === "three-column" ? n : c), [n]), l = J.useCallback(() => o((c) => c === "three-column" ? n : "three-column"), [n]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const bd = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, kt = {
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
function c2(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...bd, ...e }, a = [];
  return n?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${kt.normal.eot}?#iefix") format("eot"),
       url("${t}${kt.normal.woff2}") format("woff2"),
       url("${t}${kt.normal.woff}") format("woff"),
       url("${t}${kt.normal.ttf}") format("truetype");
  src: url("${t}${kt.normal.eot}");
}`), n?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${kt.bold.eot}?#iefix") format("eot"),
       url("${t}${kt.bold.woff2}") format("woff2"),
       url("${t}${kt.bold.woff}") format("woff"),
       url("${t}${kt.bold.ttf}") format("truetype");
  src: url("${t}${kt.bold.eot}");
}`), a.join(`
`);
}
function d2(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...bd, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...n?.includes(400) ? [
      { href: `${t}${kt.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${kt.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...n?.includes(600) ? [
      { href: `${t}${kt.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${kt.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const u2 = '"Frutiger W01", Arial, Helvetica, sans-serif', f2 = "Arial, Helvetica, sans-serif";
async function h2() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  ug as AXIS_Y_ZERO_BREAK_DEFAULT_EXTRA_CLEARANCE_PX,
  Tr as AXIS_Y_ZERO_BREAK_DEFAULT_GAP_PX,
  Lr as AXIS_Y_ZERO_BREAK_MIN_GAP_PX,
  fg as AXIS_ZIGZAG_DEFAULT_AMPLITUDE_PX,
  hg as AXIS_ZIGZAG_DEFAULT_CYCLES,
  mg as AXIS_ZIGZAG_DEFAULT_HEIGHT_PX,
  pg as AXIS_ZIGZAG_DEFAULT_STEP_X_PX,
  Ki as Account,
  Vv as ActionLink,
  S1 as AdaptiveDataGrid,
  sx as AnimationDurationFast,
  ix as AnimationDurationNormal,
  lx as AnimationDurationSlow,
  fx as AnimationEasingBounce,
  cx as AnimationEasingEaseIn,
  ux as AnimationEasingEaseInOut,
  dx as AnimationEasingEaseOut,
  Fl as AppointmentCard,
  L1 as AreaSeriesPrimitive,
  cp as AriaDataGrid,
  yo as AriaTabsDataGrid,
  S1 as AriaTabsDataGridAdaptive,
  Di as Axis,
  nr as BackLink,
  A1 as BandScalesProvider,
  $1 as BarSeriesPrimitive,
  Tc as BorderColorCard,
  Lc as BorderColorCardHover,
  Ic as BorderColorDefault,
  $c as BorderColorError,
  Dc as BorderColorForm,
  jx as BorderRadiusLarge,
  Cx as BorderRadiusMedium,
  kx as BorderRadiusNone,
  Nx as BorderRadiusSmall,
  vx as BorderWidthCardBottom,
  xx as BorderWidthDefault,
  yx as BorderWidthFormElement,
  bx as BorderWidthFormElementError,
  wx as BorderWidthPanel,
  Sx as BorderWidthTableCell,
  _x as BorderWidthTableHeader,
  ns as BrandKey,
  o1 as BrandThemeProvider,
  Il as Breadcrumb,
  Vd as Breakpoint,
  iv as BreakpointDesktop,
  lv as BreakpointLargeDesktop,
  ov as BreakpointMobile,
  sv as BreakpointTablet,
  xt as Button,
  nb as ButtonBorderRadius,
  tb as ButtonBorderWidth,
  Uy as ButtonPrimaryBackgroundActive,
  zy as ButtonPrimaryBackgroundDefault,
  Wy as ButtonPrimaryBackgroundDisabled,
  Oy as ButtonPrimaryBackgroundHover,
  Yy as ButtonPrimaryBorderDefault,
  Zy as ButtonPrimaryBorderFocus,
  Gy as ButtonPrimaryTextDefault,
  Vy as ButtonPrimaryTextDisabled,
  Ky as ButtonSecondaryBackgroundActive,
  qy as ButtonSecondaryBackgroundDefault,
  Xy as ButtonSecondaryBackgroundHover,
  Jy as ButtonSecondaryBackgroundSolid,
  eb as ButtonSecondaryBorderDefault,
  Qy as ButtonSecondaryTextDefault,
  rb as ButtonShadowSize,
  el as ButtonSize,
  td as ButtonSpacingPaddingHorizontalDesktop,
  Qc as ButtonSpacingPaddingHorizontalMobile,
  ed as ButtonSpacingPaddingVerticalDesktop,
  Kc as ButtonSpacingPaddingVerticalMobile,
  ab as ButtonTypographyWeight,
  Qi as ButtonVariant,
  Tl as Card,
  ob as CardBackgroundDefault,
  lb as CardBorderBottom,
  sb as CardBorderDefault,
  ib as CardBorderHover,
  hb as CardBorderWidthBottom,
  fb as CardBorderWidthDefault,
  d1 as CardGroup,
  u1 as CardGroupItem,
  pb as CardShadowDefault,
  mb as CardShadowHover,
  ad as CardSpacingHeadingMargin,
  rd as CardSpacingPaddingDesktop,
  nd as CardSpacingPaddingMobile,
  db as CardTextDescription,
  cb as CardTextHeading,
  ub as CardTextLink,
  f1 as CareCard,
  Yv as CharacterCount,
  F1 as ChartEnhancer,
  E1 as ChartNoScript,
  cg as ChartRoot,
  $d as Checkbox,
  Pd as Checkboxes,
  Rx as ColorBorderDefault,
  Bx as ColorBorderSecondary,
  fy as ColorButtonLoginActive,
  dy as ColorButtonLoginBackground,
  uy as ColorButtonLoginHover,
  hy as ColorButtonLoginShadow,
  Vx as ColorButtonPrimaryActive,
  Ux as ColorButtonPrimaryBackground,
  Gx as ColorButtonPrimaryHover,
  Yx as ColorButtonPrimaryShadow,
  Wx as ColorButtonPrimaryText,
  ay as ColorButtonReverseActive,
  ty as ColorButtonReverseBackground,
  ry as ColorButtonReverseHover,
  oy as ColorButtonReverseShadow,
  ny as ColorButtonReverseText,
  Qx as ColorButtonSecondaryActive,
  Zx as ColorButtonSecondaryBackground,
  qx as ColorButtonSecondaryBackgroundSolid,
  Jx as ColorButtonSecondaryBorder,
  Kx as ColorButtonSecondaryHover,
  ey as ColorButtonSecondaryShadow,
  Xx as ColorButtonSecondaryText,
  ly as ColorButtonWarningActive,
  sy as ColorButtonWarningBackground,
  iy as ColorButtonWarningHover,
  cy as ColorButtonWarningShadow,
  Hx as ColorError,
  Fx as ColorFocusBackground,
  Px as ColorFocusText,
  Ox as ColorFormBackground,
  zx as ColorFormBorder,
  Yc as ColorGrey1,
  Zc as ColorGrey2,
  qc as ColorGrey3,
  Jc as ColorGrey4,
  Xc as ColorGrey5,
  Ax as ColorLinkActive,
  Lx as ColorLinkDefault,
  $x as ColorLinkHover,
  Ex as ColorLinkVisited,
  Fc as ColorPrimaryBlack,
  Ac as ColorPrimaryBlue,
  Bc as ColorPrimaryDarkPink,
  Pc as ColorPrimaryGreen,
  Rc as ColorPrimaryPurple,
  Hc as ColorPrimaryRed,
  Ec as ColorPrimaryWhite,
  zc as ColorPrimaryYellow,
  Gc as ColorSecondaryAquaGreen,
  Wc as ColorSecondaryOrange,
  Oc as ColorSecondaryPaleYellow,
  Vc as ColorSecondaryPink,
  Uc as ColorSecondaryWarmYellow,
  Mx as ColorTextPrimary,
  Tx as ColorTextPrint,
  Dx as ColorTextReverse,
  Ix as ColorTextSecondary,
  rr as Column,
  Zd as ColumnAlign,
  Fy as ComponentBlur,
  My as ComponentBreadcrumbChevronMarginLeft,
  Iy as ComponentBreadcrumbChevronMarginRight,
  Ty as ComponentBreadcrumbPaddingTopDesktop,
  Dy as ComponentBreadcrumbPaddingTopMobile,
  xy as ComponentButtonPaddingDesktopHorizontal,
  gy as ComponentButtonPaddingDesktopVertical,
  my as ComponentButtonPaddingMobileHorizontal,
  py as ComponentButtonPaddingMobileVertical,
  yy as ComponentButtonShadowSize,
  Ny as ComponentCardHeadingMargin,
  ky as ComponentCardPaddingDesktop,
  Sy as ComponentCardPaddingMobile,
  Ry as ComponentDetails,
  By as ComponentExpander,
  _y as ComponentFormCheckboxLabelPadding,
  wy as ComponentFormCheckboxSize,
  by as ComponentFormInputMinHeight,
  vy as ComponentFormInputPadding,
  Py as ComponentLink,
  Hy as ComponentPagination,
  jy as ComponentPanelPaddingDesktop,
  Cy as ComponentPanelPaddingMobile,
  Ey as ComponentSpread,
  $y as ComponentSummaryListCellPaddingHorizontal,
  Ly as ComponentSummaryListCellPaddingVertical,
  Ay as ComponentSummaryListRowMargin,
  al as Container,
  c1 as ContentsList,
  bd as DEFAULT_FONT_CONFIG,
  v1 as DashboardSummaryGrid,
  n1 as DateInput,
  qh as Details,
  Jh as DoDontList,
  zv as ElevationHigh,
  Bv as ElevationLow,
  Hv as ElevationMedium,
  Rv as ElevationNone,
  $s as ErrorMessage,
  t1 as ErrorSummary,
  Xh as Expander,
  kt as FRUTIGER_FONT_FILES,
  ts as Fieldset,
  Yd as Float,
  Av as FocusOutlineOffset,
  Ev as FocusOutlineStyle,
  $v as FocusOutlineWidth,
  Pv as FocusShadowButton,
  Fv as FocusShadowInput,
  ea as FontFamilyBase,
  ta as FontFamilyFallback,
  na as FontFamilyPrint,
  Ko as FontLineHeightBase,
  sa as FontSize14Mobile,
  la as FontSize14Print,
  ia as FontSize14Tablet,
  ca as FontSize16Mobile,
  ua as FontSize16Print,
  da as FontSize16Tablet,
  fa as FontSize19Mobile,
  pa as FontSize19Print,
  ha as FontSize19Tablet,
  ma as FontSize22Mobile,
  xa as FontSize22Print,
  ga as FontSize22Tablet,
  ya as FontSize26Mobile,
  va as FontSize26Print,
  ba as FontSize26Tablet,
  wa as FontSize36Mobile,
  Sa as FontSize36Print,
  _a as FontSize36Tablet,
  ka as FontSize48Mobile,
  Ca as FontSize48Print,
  Na as FontSize48Tablet,
  Xo as FontSizeBase,
  aa as FontWeightBold,
  oa as FontWeightLight,
  ra as FontWeightNormal,
  dl as Footer,
  Eb as FormBorderRadius,
  $b as FormBorderWidthDefault,
  Ab as FormBorderWidthError,
  Db as FormErrorTextDefault,
  Tb as FormErrorTypographyWeight,
  Lb as FormHintTextDefault,
  gb as FormInputBackgroundDefault,
  yb as FormInputBackgroundDisabled,
  bb as FormInputBackgroundError,
  xb as FormInputBackgroundFocus,
  vb as FormInputBorderDefault,
  Sb as FormInputBorderDisabled,
  _b as FormInputBorderError,
  wb as FormInputBorderFocus,
  kb as FormInputTextDefault,
  Cb as FormInputTextDisabled,
  Nb as FormInputTextPlaceholder,
  jb as FormLabelTextDefault,
  Mb as FormLabelTextRequired,
  Ib as FormLabelTypographyWeight,
  ld as FormSpacingCheckboxLabelPadding,
  id as FormSpacingCheckboxSize,
  sd as FormSpacingInputMinHeight,
  od as FormSpacingInputPadding,
  i1 as GanttChart,
  co as Grid,
  dv as GridGutter,
  uv as GridGutterHalf,
  gg as GridLines,
  cv as GridPageWidth,
  bn as GridWidth,
  Gl as GroupHeader,
  Um as GroupableDataGrid,
  cl as Header,
  s1 as HeaderSSR,
  pu as HeaderSearch,
  cl as HeaderStatic,
  Ht as Heading,
  Ut as HeadingsNhsukHeadingL,
  Wt as HeadingsNhsukHeadingM,
  Gt as HeadingsNhsukHeadingS,
  Ot as HeadingsNhsukHeadingXl,
  Vt as HeadingsNhsukHeadingXs,
  gu as Hero,
  _i as HierarchyDataManager,
  nl as Hint,
  x1 as Images,
  Qo as Input,
  h1 as InsetText,
  es as Label,
  av as LayoutColumnActions,
  ev as LayoutColumnFull,
  tv as LayoutColumnHalf,
  rv as LayoutColumnQuarter,
  nv as LayoutColumnThird,
  Qb as LayoutContainerMaxWidth,
  T1 as Legend,
  dg as LineScalesProvider,
  Kg as LineSeriesPrimitive,
  Xd as List,
  rs as LogoVariant,
  ol as MainWrapper,
  Pl as MedicationCard,
  t0 as MetricCard,
  Z1 as NHSBodyText,
  q1 as NHSBodyTextLarge,
  J1 as NHSBodyTextSmall,
  U1 as NHSHeading1,
  W1 as NHSHeading2,
  G1 as NHSHeading3,
  V1 as NHSHeading4,
  Y1 as NHSHeading5,
  X1 as NHSLedeText,
  K1 as NHSLedeTextSmall,
  a1 as NHSThemeProvider,
  f2 as NHS_FALLBACK_FONT_STACK,
  u2 as NHS_FONT_STACK,
  Xm as NavigationSplitView,
  N1 as PageTemplate,
  l1 as Pagination,
  Uh as Panel,
  Yt as ParagraphsBody,
  Zt as ParagraphsBodyLarge,
  qt as ParagraphsBodySmall,
  Jt as ParagraphsLedeText,
  Xt as ParagraphsLedeTextSmall,
  B1 as ParallaxScene,
  El as PatientCard,
  H1 as PatternBanner,
  z1 as ProductCard,
  nx as ProductCardButtonVariantEnum,
  tx as ProductCardImageTypeEnum,
  Qn as ProductCardLayoutEnum,
  jn as ProductCardThemeEnum,
  rg as ProductRoadmap,
  Zv as Radios,
  qv as RadiosServer,
  S1 as ResponsiveDataGrid,
  k1 as ResponsiveDataGridDemo,
  ln as Row,
  P1 as SPC,
  V0 as SPCChart,
  R1 as SPCMetricCard,
  $r as Select,
  Od as SelectOption,
  jv as ShadowButtonDefault,
  Dv as ShadowButtonFocus,
  Mv as ShadowButtonSecondary,
  Iv as ShadowButtonWarning,
  Tv as ShadowCardDefault,
  Lv as ShadowCardHover,
  Kb as SizeButtonMinHeightDesktop,
  Xb as SizeButtonMinHeightMobile,
  Ub as SizeFormControlLarge,
  Ob as SizeFormControlMedium,
  zb as SizeFormControlSmall,
  qb as SizeFormInputWidth2xl,
  Jb as SizeFormInputWidth3xl,
  Yb as SizeFormInputWidthLg,
  Vb as SizeFormInputWidthMd,
  Gb as SizeFormInputWidthSm,
  Zb as SizeFormInputWidthXl,
  Wb as SizeFormInputWidthXs,
  Bb as SizeIconExtraLarge,
  Rb as SizeIconLarge,
  Pb as SizeIconMedium,
  Hb as SizeIconNhsDefault,
  Fb as SizeIconSmall,
  Dl as SkipLink,
  y1 as SlotMatrix,
  w1 as SortStatusControl,
  cd as Spacing0,
  dd as Spacing1,
  ud as Spacing2,
  fd as Spacing3,
  hd as Spacing4,
  pd as Spacing5,
  md as Spacing6,
  gd as Spacing7,
  xd as Spacing8,
  yd as Spacing9,
  To as SpacingResponsive0Mobile,
  Lo as SpacingResponsive0Tablet,
  $o as SpacingResponsive1Mobile,
  Ao as SpacingResponsive1Tablet,
  Eo as SpacingResponsive2Mobile,
  Fo as SpacingResponsive2Tablet,
  Po as SpacingResponsive3Mobile,
  Ro as SpacingResponsive3Tablet,
  Bo as SpacingResponsive4Mobile,
  Ho as SpacingResponsive4Tablet,
  zo as SpacingResponsive5Mobile,
  Oo as SpacingResponsive5Tablet,
  Uo as SpacingResponsive6Mobile,
  Wo as SpacingResponsive6Tablet,
  Go as SpacingResponsive7Mobile,
  Vo as SpacingResponsive7Tablet,
  Yo as SpacingResponsive8Mobile,
  Zo as SpacingResponsive8Tablet,
  qo as SpacingResponsive9Mobile,
  Jo as SpacingResponsive9Tablet,
  Jv as SpacingUtilities,
  kv as StateDisabledBackground,
  Nv as StateDisabledBorder,
  Cv as StateDisabledText,
  fv as StateErrorBackground,
  hv as StateErrorBorder,
  pv as StateErrorText,
  wv as StateInfoBackground,
  _v as StateInfoBorder,
  Sv as StateInfoText,
  mv as StateSuccessBackground,
  gv as StateSuccessBorder,
  xv as StateSuccessText,
  yv as StateWarningBackground,
  bv as StateWarningBorder,
  vv as StateWarningText,
  b1 as StepByStepNavigation,
  op as SummaryCard,
  p1 as SummaryList,
  nn as Table,
  m1 as Tabs,
  st as Tag,
  Kh as TaskList,
  Bd as Textarea,
  D1 as TooltipOverlay,
  Xg as TooltipProvider,
  C1 as TransactionalPageTemplate,
  hx as TransitionButtonDefault,
  px as TransitionButtonShadow,
  gx as TransitionCardHover,
  mx as TransitionInputFocus,
  Vl as TreeNodeComponent,
  jt as VectorGraphicKindEnum,
  hr as VectorGraphicShadowEnum,
  I1 as VisibilityProvider,
  Rl as VitalsCard,
  e1 as WIDTH_FRACTIONS,
  g1 as WarningCallout,
  Yl as WidthContainer,
  Kv as WidthUtilities,
  M1 as WorkflowSplitView,
  km as applyAggregation,
  vo as applyAggregations,
  uu as brandLogos,
  h2 as checkFrutigerLoaded,
  ps as createGenericTabsConfig,
  _1 as createTCHTabsConfig,
  Cm as enhanceDataWithCalculatedFields,
  c2 as generateFrutigerFontFace,
  ll as getBrandLogo,
  O1 as getResponsiveStyles,
  Xv as getSpacingClass,
  Qv as getWidthClass,
  d2 as preloadFrutigerFonts,
  vp as tchDataConfig,
  hu as useBrand,
  e2 as useColors,
  a2 as useComponentSpacing,
  o2 as useNHSHeadings,
  s2 as useNHSParagraphs,
  r1 as useNHSTheme,
  i2 as useNHSTypographySystem,
  l2 as useNavigationSplitDrill,
  Wm as useNavigationSplitUrlSync,
  gs as useNhsFdpBreakpoints,
  r2 as useResponsiveSpacing,
  j1 as useResponsiveValue,
  t2 as useSpacing,
  q0 as useSpc,
  Q1 as useTokens,
  n2 as useTypography
};
//# sourceMappingURL=index.esm.js.map
