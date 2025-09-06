import * as U from "react";
import at, { useState as De, useEffect as Ae, useCallback as ue, useRef as Le, createElement as bo, useMemo as $e, useContext as Fl, createContext as Al, forwardRef as un, useImperativeHandle as yo, useReducer as vo, memo as Bl, useLayoutEffect as El, useId as Hn } from "react";
import { createPortal as Rl } from "react-dom";
function Pl(e) {
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
function Hl() {
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
function zl() {
  return ys || (ys = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === S ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case p:
          return "Fragment";
        case H:
          return "Profiler";
        case u:
          return "StrictMode";
        case F:
          return "Suspense";
        case w:
          return "SuspenseList";
        case C:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case M:
            return "Portal";
          case I:
            return (E.displayName || "Context") + ".Provider";
          case $:
            return (E._context.displayName || "Context") + ".Consumer";
          case _:
            var z = E.render;
            return E = E.displayName, E || (E = z.displayName || z.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case D:
            return z = E.displayName || null, z !== null ? z : e(E.type) || "Memo";
          case k:
            z = E._payload, E = E._init;
            try {
              return e(E(z));
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
        var z = !1;
      } catch {
        z = !0;
      }
      if (z) {
        z = console;
        var N = z.error, G = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return N.call(
          z,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(E);
      }
    }
    function a(E) {
      if (E === p) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === k)
        return "<...>";
      try {
        var z = e(E);
        return z ? "<" + z + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var E = x.A;
      return E === null ? null : E.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(E) {
      if (y.call(E, "key")) {
        var z = Object.getOwnPropertyDescriptor(E, "key").get;
        if (z && z.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function l(E, z) {
      function N() {
        j || (j = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          z
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: N,
        configurable: !0
      });
    }
    function d() {
      var E = e(this.type);
      return v[E] || (v[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function c(E, z, N, G, P, se, me, de) {
      return N = se.ref, E = {
        $$typeof: g,
        type: E,
        key: z,
        props: se,
        _owner: P
      }, (N !== void 0 ? N : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: d
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
        value: me
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: de
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function f(E, z, N, G, P, se, me, de) {
      var J = z.children;
      if (J !== void 0)
        if (G)
          if (R(J)) {
            for (G = 0; G < J.length; G++)
              h(J[G]);
            Object.freeze && Object.freeze(J);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(J);
      if (y.call(z, "key")) {
        J = e(E);
        var O = Object.keys(z).filter(function(Z) {
          return Z !== "key";
        });
        G = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", A[J + G] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          J,
          O,
          J
        ), A[J + G] = !0);
      }
      if (J = null, N !== void 0 && (n(N), J = "" + N), i(z) && (n(z.key), J = "" + z.key), "key" in z) {
        N = {};
        for (var Y in z)
          Y !== "key" && (N[Y] = z[Y]);
      } else N = z;
      return J && l(
        N,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), c(
        E,
        J,
        se,
        P,
        o(),
        N,
        me,
        de
      );
    }
    function h(E) {
      typeof E == "object" && E !== null && E.$$typeof === g && E._store && (E._store.validated = 1);
    }
    var m = at, g = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), u = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), $ = Symbol.for("react.consumer"), I = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), S = Symbol.for("react.client.reference"), x = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, R = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var j, v = {}, b = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), B = T(a(s)), A = {};
    mn.Fragment = p, mn.jsx = function(E, z, N, G, P) {
      var se = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        E,
        z,
        N,
        !1,
        G,
        P,
        se ? Error("react-stack-top-frame") : b,
        se ? T(a(E)) : B
      );
    }, mn.jsxs = function(E, z, N, G, P) {
      var se = 1e4 > x.recentlyCreatedOwnerStacks++;
      return f(
        E,
        z,
        N,
        !0,
        G,
        P,
        se ? Error("react-stack-top-frame") : b,
        se ? T(a(E)) : B
      );
    };
  })()), mn;
}
var vs;
function Wl() {
  return vs || (vs = 1, process.env.NODE_ENV === "production" ? Fn.exports = Hl() : Fn.exports = zl()), Fn.exports;
}
var r = Wl(), Or = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ws;
function Ol() {
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
var Ul = Ol();
const ge = /* @__PURE__ */ Pl(Ul), W0 = ({
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
}, Gl = ({
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
function Yl(e) {
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
const { forwardRef: Vl, useCallback: Ft, useState: Ur } = U;
function ql(e, t) {
  const {
    children: n,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, f] = Ur(!1), [h, m] = Ur(!1), [g, M] = Ur(!1), p = Yl({
    variant: a,
    size: o,
    fullWidth: s,
    className: i,
    preventDoubleClick: l,
    href: "href" in d ? d.href : void 0
  }), u = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", H = {
    ...c && { "data-pressed": "true" },
    ...h && { "data-hovered": "true" },
    ...g && { "data-focused": "true" },
    ...u && { "data-disabled": "true" }
  }, $ = Ft(
    () => !u && f(!0),
    [u]
  ), I = Ft(() => f(!1), []), _ = Ft(
    () => !u && m(!0),
    [u]
  ), F = Ft(() => {
    m(!1), f(!1);
  }, []), w = Ft(() => M(!0), []), D = Ft(() => M(!1), []), k = Ft(
    (J) => {
      J.key === " " && ("href" in d || J.currentTarget.getAttribute("role") === "button") && (J.preventDefault(), J.currentTarget.click());
    },
    [d]
  ), C = Ft(
    (J) => {
      if (l) {
        const O = J.currentTarget;
        if (O.getAttribute("data-processing") === "true") {
          J.preventDefault();
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
      id: J,
      style: O,
      title: Y,
      ["aria-label"]: Z,
      ["aria-describedby"]: W,
      ["aria-labelledby"]: ae,
      tabIndex: ne,
      ...le
    } = d, ce = d;
    return /* @__PURE__ */ r.jsx(
      "a",
      {
        ref: t,
        href: ce.href,
        target: ce.target,
        rel: ce.rel,
        className: p.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...H,
        ...l && { "data-prevent-double-click": "true" },
        ...le,
        onKeyDown: (be) => {
          ce.onKeyDown?.(be), k(be);
        },
        onClick: (be) => {
          ce.onClick?.(be), C(be);
        },
        onMouseDown: (be) => {
          ce.onMouseDown?.(be), $();
        },
        onMouseUp: (be) => {
          ce.onMouseUp?.(be), I();
        },
        onMouseEnter: (be) => {
          ce.onMouseEnter?.(be), _();
        },
        onMouseLeave: (be) => {
          ce.onMouseLeave?.(be), F();
        },
        onFocus: (be) => {
          ce.onFocus?.(be), w();
        },
        onBlur: (be) => {
          ce.onBlur?.(be), D();
        },
        "aria-disabled": ce["aria-disabled"],
        ...ce["aria-disabled"] === "true" && { tabIndex: -1 },
        id: J,
        style: O,
        title: Y,
        "aria-label": Z,
        "aria-describedby": W,
        "aria-labelledby": ae,
        tabIndex: ne,
        children: n
      }
    );
  }
  const {
    id: S,
    style: x,
    title: y,
    ["aria-label"]: R,
    ["aria-describedby"]: T,
    ["aria-labelledby"]: j,
    tabIndex: v,
    name: b,
    value: B,
    form: A,
    formAction: E,
    formEncType: z,
    formMethod: N,
    formNoValidate: G,
    formTarget: P,
    autoFocus: se,
    ...me
  } = d, de = d;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      ref: t,
      type: de.type || "button",
      disabled: de.disabled,
      className: p.classes,
      "data-module": "nhs-button",
      ...H,
      ...l && { "data-prevent-double-click": "true" },
      ...de.disabled && { "aria-disabled": "true" },
      ...me,
      onKeyDown: (J) => {
        de.onKeyDown?.(J), k(J);
      },
      onClick: (J) => {
        de.onClick?.(J), C(J);
      },
      onMouseDown: (J) => {
        de.onMouseDown?.(J), $();
      },
      onMouseUp: (J) => {
        de.onMouseUp?.(J), I();
      },
      onMouseEnter: (J) => {
        de.onMouseEnter?.(J), _();
      },
      onMouseLeave: (J) => {
        de.onMouseLeave?.(J), F();
      },
      onFocus: (J) => {
        de.onFocus?.(J), w();
      },
      onBlur: (J) => {
        de.onBlur?.(J), D();
      },
      id: S,
      style: x,
      title: y,
      "aria-label": R,
      "aria-describedby": T,
      "aria-labelledby": j,
      tabIndex: v,
      name: b,
      value: B,
      form: A,
      formAction: E,
      formEncType: z,
      formMethod: N,
      formNoValidate: G,
      formTarget: P,
      autoFocus: se,
      children: n
    }
  );
}
const Qe = Vl(ql);
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
function Kl(e) {
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
  const f = Kl({ color: a, noBorder: o, closable: s, disabled: l, className: d }), h = (m) => {
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
}, Xl = ({
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
  ...M
}) => {
  const [p, u] = De(a), H = n !== void 0, $ = H ? n : p;
  Ae(() => {
    H || u(a);
  }, [a, H]);
  const I = (k) => {
    const C = k.target.checked;
    H || u(C), f?.(C, k);
  }, _ = i ? `${e}-hint` : void 0, F = l ? `${e}-error` : void 0, w = [_, F].filter(Boolean).join(" ") || void 0, D = ge(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ r.jsx("div", { className: D, ...M, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ r.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: $,
        disabled: o,
        onChange: I,
        onBlur: h,
        onFocus: m,
        "aria-describedby": w,
        ...g
      }
    ),
    /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ r.jsx("div", { id: _, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ r.jsxs("div", { id: F, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Xl.displayName = "Checkbox";
function Zl(e) {
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
  autoComplete: M,
  maxLength: p,
  minLength: u,
  pattern: H,
  step: $,
  min: I,
  max: _,
  showValueLabels: F = !1,
  showCurrentValue: w = !1,
  valueLabels: D,
  onChange: k,
  onBlur: C,
  onFocus: S,
  onKeyDown: x,
  ...y
}) => {
  const [R, T] = De(a || o || (n === "range" ? I || "0" : ""));
  Ae(() => {
    a !== void 0 && T(a);
  }, [a]);
  const j = (P) => {
    const se = P.target;
    T(se.value), ("type" in P && P.nativeEvent || P.type === "keydown") && k?.(P);
  }, { classes: v, isRange: b } = Zl({ type: n, hasError: c, width: m, className: h }), B = a !== void 0, A = {
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
    maxLength: p,
    minLength: u,
    pattern: H,
    step: $,
    min: I,
    max: _,
    onChange: j,
    onBlur: C,
    onFocus: S,
    onKeyDown: (P) => {
      if (b && /[0-9]/.test(P.key)) {
        const se = (R?.toString() || "") + P.key;
        P.target.value = se, j(P);
      }
      x?.(P);
    },
    ...y
  }, E = !B && o !== void 0 ? { defaultValue: o } : {}, z = B ? { value: a } : {}, N = () => /* @__PURE__ */ r.jsx(
    "input",
    {
      className: v,
      ...z,
      ...E,
      "data-current-value": R,
      ...A
    }
  ), G = b ? /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    F && /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: D?.min || I || "0" }),
      N(),
      /* @__PURE__ */ r.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: D?.max || _ || "100" })
    ] }),
    !F && N(),
    w && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      D?.current || "Current value:",
      " ",
      /* @__PURE__ */ r.jsx("strong", { children: R })
    ] }) })
  ] }) : null;
  return b ? G : /* @__PURE__ */ r.jsx(
    "input",
    {
      className: v,
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
      maxLength: p,
      minLength: u,
      pattern: H,
      step: $,
      min: I,
      max: _,
      onChange: k,
      onBlur: C,
      onFocus: S,
      onKeyDown: x,
      ...y
    }
  );
};
function Jl(e) {
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
  const i = Jl({ size: a, isPageHeading: n, className: t, htmlFor: e }), l = i.tag;
  return /* @__PURE__ */ r.jsx(l, { className: i.classes, htmlFor: i.htmlFor, ...s, children: n ? /* @__PURE__ */ r.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: e, children: o }) : o });
}, qa = ({
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
}, Ql = ({
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
  const [M, p] = De(
    e.filter((k) => k.checked).map((k) => k.value)
  ), u = n || t, H = i ? `${u}-hint` : void 0, $ = l ? `${u}-error` : void 0, I = [H, $].filter(Boolean).join(" ") || void 0, _ = (k, C) => {
    let S;
    C ? S = [...M, k] : S = M.filter((x) => x !== k), p(S), f?.(S);
  }, F = () => e.map((k, C) => {
    const S = `${u}-${C + 1}`, x = `${S}-conditional`, y = M.includes(k.value), R = k.disabled || !1;
    return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: S,
          name: t,
          type: "checkbox",
          value: k.value,
          checked: y,
          disabled: R,
          onChange: (T) => _(k.value, T.target.checked),
          "aria-describedby": k.hint ? `${S}-hint` : I,
          ...k.conditional && {
            "aria-controls": x,
            "aria-expanded": y ? "true" : "false"
          },
          ...k.attributes
        }
      ),
      /* @__PURE__ */ r.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: S, children: k.text }),
      k.hint && /* @__PURE__ */ r.jsx("div", { id: `${S}-hint`, className: "nhsuk-checkboxes__hint", children: k.hint }),
      k.conditional && /* @__PURE__ */ r.jsx(
        "div",
        {
          className: ge("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !y
          }),
          id: x,
          children: typeof k.conditional == "object" && k.conditional !== null && "label" in k.conditional && "id" in k.conditional && "name" in k.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
            k.conditional.label && /* @__PURE__ */ r.jsx(Va, { htmlFor: k.conditional.id, children: k.conditional.label }),
            /* @__PURE__ */ r.jsx(Ya, { ...k.conditional })
          ] }) : k.conditional
        }
      )
    ] }, k.value);
  }), w = ge(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), D = ge("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ r.jsx("div", { className: D, ...m, ...g, children: /* @__PURE__ */ r.jsxs(
    qa,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: I,
      ...h,
      children: [
        i && /* @__PURE__ */ r.jsx("div", { id: H, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ r.jsxs("div", { id: $, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: w, children: F() })
      ]
    }
  ) });
};
Ql.displayName = "Checkboxes";
const ec = ({
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
  minLength: M,
  wrap: p = "soft",
  resize: u = "vertical",
  autoComplete: H,
  spellCheck: $,
  onChange: I,
  onBlur: _,
  onFocus: F,
  onKeyDown: w,
  ...D
}) => {
  const k = ge(
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
      className: k,
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
      minLength: M,
      wrap: p,
      autoComplete: H,
      spellCheck: $,
      onChange: I,
      onBlur: _,
      onFocus: F,
      onKeyDown: w,
      ...D
    }
  );
};
function tc(e) {
  return { classes: [
    "nhsuk-hint",
    e.className || ""
  ].filter(Boolean).join(" "), id: e.id };
}
const wo = ({ id: e, className: t, children: n, ...a }) => {
  const o = tc({ id: e, className: t });
  return /* @__PURE__ */ r.jsx("div", { className: o.classes, id: o.id, ...a, children: n });
}, O0 = ({
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
  const g = s ?? i ?? "", [M, p] = De(g), [u, H] = De(0), [$, I] = De(!1), [_, F] = De(!1), w = ue((y) => n ? y.trim() === "" ? 0 : y.trim().split(/\s+/).length : y.length, [n]);
  Ae(() => {
    const y = w(M), R = t || n || 0, T = R - y, j = Math.floor(R * (a / 100));
    H(T), I(y > R), F(y >= j || y > R), f && f(y, T);
  }, [M, t, n, a, w, f]);
  const D = (y) => {
    const R = y.target.value;
    p(R), h && h(y);
  }, k = () => {
    const y = t || n || 0, R = n ? "word" : "character", T = n ? "words" : "characters";
    if (!_)
      return `You can enter up to ${y} ${y === 1 ? R : T}`;
    if ($) {
      const j = Math.abs(u);
      return `You have ${j} ${j === 1 ? R : T} too many`;
    } else
      return `You have ${u} ${u === 1 ? R : T} remaining`;
  }, C = ge(
    "nhsuk-character-count",
    d
  ), S = ge(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !_,
      "nhsuk-error-message": $
    },
    c?.classes
  ), x = ge(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": $
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
          ec,
          {
            id: e,
            name: o,
            value: s !== void 0 ? M : void 0,
            defaultValue: s === void 0 ? i ?? M : void 0,
            rows: l,
            className: x,
            onChange: D,
            "aria-describedby": `${e}-info`,
            "aria-invalid": $ || void 0,
            ...m
          }
        ),
        /* @__PURE__ */ r.jsx(
          wo,
          {
            id: `${e}-info`,
            className: S,
            role: "status",
            "aria-live": "polite",
            children: k()
          }
        )
      ]
    }
  );
}, nc = ({
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
}, rc = ({
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
  children: M,
  onChange: p,
  onBlur: u,
  onFocus: H,
  ...$
}) => {
  const I = ge(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), _ = () => g ? g.map((w, D) => /* @__PURE__ */ r.jsx(
    "option",
    {
      value: w.value,
      disabled: w.disabled,
      "data-initial-selected": w.selected || void 0,
      children: w.text
    },
    `${w.value}-${D}`
  )) : null, F = o === void 0 && a === void 0 && g ? g.find((w) => w.selected)?.value : void 0;
  return /* @__PURE__ */ r.jsx(
    "select",
    {
      className: I,
      id: e,
      name: t,
      "aria-label": n,
      value: a,
      defaultValue: o !== void 0 ? o : F,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: f,
      size: h,
      autoComplete: m,
      onChange: p,
      onBlur: u,
      onFocus: H,
      ...$,
      children: M || _()
    }
  );
}, zn = rc;
zn.Option = nc;
function _o(e, {
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
    hasError: M = !1,
    describedBy: p,
    className: u,
    size: H = "normal",
    inline: $ = !1,
    options: I,
    ..._
  } = m, F = ge(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": M,
      "nhsuk-radios--small": H === "small",
      "nhsuk-radios--inline": $
    },
    u
  );
  return /* @__PURE__ */ r.jsx(qa, { children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: F,
      ..._,
      ...a ? { "data-nhs-behaviour": "radios" } : {},
      children: I.map((w, D) => {
        const k = `${g}-${D}`, C = w.conditional ? `${k}-conditional` : void 0, S = n === w.value;
        return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-radios__item", children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              className: "nhsuk-radios__input",
              id: k,
              name: g,
              type: "radio",
              value: w.value,
              disabled: w.disabled,
              ...t === "client" ? { checked: S, onChange: o, onBlur: s, onFocus: i, onKeyDown: l, ref: (x) => {
                x && d && (d.current[D] = x);
              } } : { defaultChecked: S, "data-nhs-radios-input": !0 },
              "aria-describedby": p
            }
          ),
          /* @__PURE__ */ r.jsx("label", { className: "nhsuk-radios__label", htmlFor: k, children: w.text }),
          w.hint && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-radios__hint", children: w.hint }),
          w.conditional && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: ge("nhsuk-radios__conditional", {
                "nhsuk-radios__conditional--hidden": !S
              }),
              id: C,
              ...t === "server" ? { "data-nhs-radios-conditional": !0 } : {},
              children: typeof w.conditional == "object" && w.conditional !== null && "label" in w.conditional && "id" in w.conditional && "name" in w.conditional ? /* @__PURE__ */ r.jsxs("div", { style: { marginTop: "16px" }, children: [
                w.conditional.label && /* @__PURE__ */ r.jsx(Va, { htmlFor: w.conditional.id, children: w.conditional.label }),
                /* @__PURE__ */ r.jsx(Ya, { ...w.conditional })
              ] }) : w.conditional
            }
          )
        ] }, w.value);
      })
    }
  ) });
}
const U0 = ({ value: e, defaultValue: t, onChange: n, onBlur: a, onFocus: o, ...s }) => {
  const [i, l] = De(e || t || ""), d = Le([]), c = Le(i), f = (g) => {
    const M = g.target.value;
    M !== c.current && (c.current = M, l(M), n?.(g));
  }, h = (g) => {
    o?.(g);
  }, m = ue((g) => {
    const { key: M } = g;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(M)) return;
    g.preventDefault();
    const p = d.current.filter((I) => I && !I.disabled), u = p.indexOf(g.currentTarget);
    if (u === -1) return;
    let H = u;
    ["ArrowDown", "ArrowRight"].includes(M) ? H = (u + 1) % p.length : ["ArrowUp", "ArrowLeft"].includes(M) && (H = (u - 1 + p.length) % p.length);
    const $ = p[H];
    $ && ($.focus(), $.checked || $.click());
  }, []);
  return _o(
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
}, G0 = ({ value: e, defaultValue: t, ...n }) => {
  const a = e || t || "";
  return _o(
    { value: e, defaultValue: t, ...n },
    {
      variant: "server",
      selectedValue: a,
      enableBehaviourAttr: !0
    }
  );
}, So = ({
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
  return /* @__PURE__ */ r.jsx(So, { className: t, style: n, ...a, children: i ? e : /* @__PURE__ */ r.jsx(Gt, { children: e }) });
}, ac = ({
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
}, sc = ({
  children: e,
  className: t,
  ...n
}) => {
  const a = ge("nhsuk-list__item", t);
  return /* @__PURE__ */ r.jsx("li", { className: a, ...n, children: e });
}, oc = ac;
oc.Item = sc;
const Y0 = ({
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
}, V0 = {
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
}, q0 = ({
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
}, K0 = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, X0 = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ko = ({
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
function ic(e) {
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
function lc(e) {
  const t = e.level ?? ic(e.size), n = [
    "nhsuk-heading",
    e.size ? `nhsuk-heading--${e.size}` : "",
    e.className || ""
  ].filter(Boolean).join(" "), a = e.marginBottom ? { marginBottom: e.marginBottom } : void 0;
  return { tag: `h${t}`, classes: n, style: a };
}
const $t = ({ level: e, className: t, text: n, html: a, children: o, size: s, marginBottom: i, ...l }) => {
  const d = lc({ level: e, size: s, className: t, marginBottom: i }), c = o || (a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n);
  return bo(d.tag, { className: d.classes, style: d.style, ...l }, c);
};
function cc(e) {
  return {
    classes: ["nhsuk-error-message", e.className || ""].filter(Boolean).join(" "),
    id: e.id,
    visuallyHiddenText: e.visuallyHiddenText ?? "Error:"
  };
}
const _s = ({ id: e, className: t, visuallyHiddenText: n = "Error:", children: a, ...o }) => {
  const s = cc({ id: e, className: t, visuallyHiddenText: n });
  return /* @__PURE__ */ r.jsxs("span", { className: s.classes, id: s.id, ...o, children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    a
  ] });
}, Z0 = ({
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
  ), f = () => t ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, h = () => a ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n, m = (g) => {
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
          /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((g, M) => /* @__PURE__ */ r.jsx("li", { children: m(g) }, M)) })
        ] })
      ]
    }
  );
}, J0 = ({
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
  const [f, h] = De(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, g] = De({}), M = (j) => j % 4 === 0 && j % 100 !== 0 || j % 400 === 0, p = (j, v) => {
    const b = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return j === 2 && M(v) ? 29 : b[j - 1];
  }, u = (j, v, b) => {
    if (!j) return;
    if (!/^\d+$/.test(j)) return "Day must be a number";
    const B = parseInt(j, 10);
    if (B < 1 || B > 31) return "Day must be between 1 and 31";
    if (v && b) {
      const A = parseInt(v, 10), E = parseInt(b, 10);
      if (!isNaN(A) && !isNaN(E) && A >= 1 && A <= 12) {
        const z = p(A, E);
        if (B > z)
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
          ][A - 1]} ${E} only has ${z} days`;
      }
    }
  }, H = (j) => {
    if (!j) return;
    if (!/^\d+$/.test(j)) return "Month must be a number";
    const v = parseInt(j, 10);
    if (v < 1 || v > 12) return "Month must be between 1 and 12";
  }, $ = (j) => {
    if (!j) return;
    if (!/^\d+$/.test(j)) return "Year must be a number";
    const v = parseInt(j, 10), b = (/* @__PURE__ */ new Date()).getFullYear();
    if (v < 1900 || v > b + 10)
      return `Year must be between 1900 and ${b + 10}`;
  }, I = (j, v, b) => {
    if (!j || !v || !b) return;
    const B = parseInt(j, 10), A = parseInt(v, 10), E = parseInt(b, 10);
    if (isNaN(B) || isNaN(A) || isNaN(E) || A < 1 || A > 12 || E < 1900) return;
    const z = p(A, E);
    B < 1 || B > z;
  }, _ = ue((j, v) => {
    const b = {
      ...f,
      [j]: v
    };
    h(b), d && d(b);
  }, [f, d]), F = ue((j) => {
    const v = f[j];
    let b;
    if (j === "day")
      b = u(v, f.month, f.year);
    else if (j === "month") {
      if (b = H(v), !b && f.day) {
        const B = u(f.day, v, f.year);
        g((A) => ({
          ...A,
          day: B
        }));
      }
    } else if (j === "year" && (b = $(v), !b && f.day && f.month)) {
      const B = u(f.day, f.month, v);
      g((A) => ({
        ...A,
        day: B
      }));
    }
    if (g((B) => ({
      ...B,
      [j]: b
    })), f.day && f.month && f.year) {
      const B = I(
        j === "day" ? v : f.day,
        j === "month" ? v : f.month,
        j === "year" ? v : f.year
      );
      B && g((A) => ({
        ...A,
        day: B
      }));
    }
  }, [f, u, H, $, I]), w = $e(() => [
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
  ], []), D = n || w;
  let k = s?.describedBy || "";
  const C = i ? `${e}-hint` : "", S = l ? `${e}-error` : "";
  C && (k = k ? `${k} ${C}` : C), S && (k = k ? `${k} ${S}` : S);
  const x = Object.values(m).some((j) => j), y = ge(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || x
    }
  ), R = ge(
    "nhsuk-date-input",
    t
  ), T = () => /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    i && /* @__PURE__ */ r.jsx(
      wo,
      {
        id: C,
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
      ([j, v]) => v ? /* @__PURE__ */ r.jsxs(
        _s,
        {
          id: `${e}-${j}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            v
          ]
        },
        `${j}-error`
      ) : null
    ),
    /* @__PURE__ */ r.jsx("div", { className: R, id: e, "data-testid": "date-input", ...c, children: D.map((j) => {
      const v = j.id || `${e}-${j.name}`, b = a ? `${a}[${j.name}]` : j.name, B = j.label || j.name.charAt(0).toUpperCase() + j.name.slice(1), A = m[j.name], E = f[j.name] || "";
      let z = k;
      if (A) {
        const N = `${e}-${j.name}-error`;
        z = z ? `${z} ${N}` : N;
      }
      return /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ r.jsx(
          Va,
          {
            htmlFor: v,
            className: "nhsuk-date-input__label",
            children: B
          }
        ),
        /* @__PURE__ */ r.jsx(
          Ya,
          {
            id: v,
            name: b,
            value: E,
            className: ge("nhsuk-date-input__input", j.classes, {
              "nhsuk-input--error": A
            }),
            inputMode: j.inputmode,
            autoComplete: j.autocomplete,
            pattern: j.pattern,
            "aria-describedby": z || void 0,
            hasError: !!A,
            onChange: (N) => _(j.name, N.target.value),
            onBlur: () => F(j.name)
          }
        )
      ] }, j.name);
    }) })
  ] });
  return /* @__PURE__ */ r.jsx("div", { className: y, children: s ? /* @__PURE__ */ r.jsx(
    qa,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: k || void 0,
      children: T()
    }
  ) : T() });
}, Co = {
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
}, jo = Al(Co), dc = ({
  children: e,
  theme: t = {}
}) => {
  const n = { ...Co, ...t };
  return /* @__PURE__ */ r.jsx(jo.Provider, { value: n, children: e });
}, Q0 = () => {
  const e = Fl(jo);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function uc() {
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
function fc() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = uc(), document.head.appendChild(e);
}
const ex = ({ children: e, theme: t }) => (Ae(() => {
  fc();
}, []), /* @__PURE__ */ r.jsx(dc, { theme: t, children: e })), hc = ({
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
  formAttributes: M = {},
  inputAttributes: p = {},
  buttonAttributes: u = {},
  preventDefaultSubmit: H = !1,
  debounceMs: $ = 300,
  minQueryLength: I = 1
}) => {
  const [_, F] = De(""), [w, D] = De(!1), k = Le(void 0), C = Le(null), S = Le(null), x = e === "controlled" && o !== void 0, y = x ? o : _, R = ue((G) => {
    k.current && clearTimeout(k.current), k.current = setTimeout(() => {
      f.onChange && G.length >= I && f.onChange(G);
    }, $);
  }, [f.onChange, $, I]), T = ue((G) => {
    const P = G.target.value;
    x || F(P), e !== "form" && R(P);
  }, [x, e, R]), j = ue((G) => {
    const P = y.trim(), se = {
      query: P,
      timestamp: Date.now(),
      formData: new FormData(G.currentTarget)
    };
    e === "controlled" || e === "hybrid" && H ? (G.preventDefault(), f.onSearch && P.length >= I && f.onSearch(se)) : e === "hybrid" && f.onSearch && P.length >= I && f.onSearch(se);
  }, [e, y, f.onSearch, H, I]), v = ue(() => {
    D(!0), f.onFocus?.();
  }, [f.onFocus]), b = ue(() => {
    D(!1), f.onBlur?.();
  }, [f.onBlur]), B = ue(() => {
    x || F(""), f.onClear?.(), S.current?.focus();
  }, [x, f.onClear]);
  Ae(() => () => {
    k.current && clearTimeout(k.current);
  }, []);
  const A = () => /* @__PURE__ */ r.jsx(
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
  ), z = () => !y || e === "form" ? null : /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: B,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ r.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ r.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), N = () => !m || !g.length || !w ? null : /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: g.map((G) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: G.href ? /* @__PURE__ */ r.jsxs("a", { href: G.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: G.title }),
    G.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: G.description })
  ] }) : /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => f.onSearch?.({ query: G.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-title", children: G.title }),
        G.description && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__search-result-description", children: G.description })
      ]
    }
  ) }, G.id)) });
  return /* @__PURE__ */ r.jsxs("div", { className: ge("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": h,
    "nhsuk-header__search--focused": w,
    "nhsuk-header__search--has-results": m && g.length > 0
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
        onSubmit: j,
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
                ref: S,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: y,
                onChange: T,
                onFocus: v,
                onBlur: b,
                disabled: c || h,
                ...m && g.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...p
              }
            ),
            z()
          ] }),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || h || e !== "form" && y.length < I,
              ...u,
              children: [
                h ? E() : A(),
                /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: h ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    N()
  ] });
};
function No(e, {
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
    service: m = {},
    organisation: g,
    search: M,
    account: p,
    navigation: u,
    containerClasses: H,
    variant: $ = "default",
    attributes: I = {},
    maxVisibleItems: _,
    // deprecated (ignored)
    responsiveNavigation: F = !0,
    ...w
  } = e;
  "maxVisibleItems" in w && delete w.maxVisibleItems;
  const D = m.href && !h.href || m.href && m.href === h.href, k = D ? m.href : h.href, C = ge(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": $ === "organisation" || g,
      "nhsuk-header--white": $ === "white"
    },
    f
  ), S = ge(
    "nhsuk-header__container",
    H
  ), x = ge(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": u?.white,
      "nhsuk-header__navigation--justified": u?.justified
    },
    u?.className
  ), y = () => /* @__PURE__ */ r.jsxs(
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
  ) : y(), T = () => g ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      g.name,
      g.split && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        g.split
      ] })
    ] }),
    g.descriptor && /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: g.descriptor })
  ] }) : null, j = (z, N) => z ? N ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-header__service-name", href: N, children: z }) : /* @__PURE__ */ r.jsx("span", { className: "nhsuk-header__service-name", children: z }) : null, v = (z) => z.active || z.current ? /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: z.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: z.html } }) : z.text }) : z.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: z.html } }) : z.text, b = () => /* @__PURE__ */ r.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ r.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), B = t === "server" && u?.items && !F, A = B ? [] : u?.items, E = B ? u.items : [];
  return /* @__PURE__ */ r.jsxs(
    "header",
    {
      className: C,
      role: "banner",
      "data-module": "nhsuk-header",
      ...I,
      ...w,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: S, children: [
          /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-header__service", children: [
            k ? /* @__PURE__ */ r.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
              R(),
              T(),
              D && j(m.text)
            ] }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              R(),
              T(),
              D && j(m.text)
            ] }),
            m.text && !D && j(m.text, m.href)
          ] }),
          M && /* @__PURE__ */ r.jsx(hc, { ...M }),
          /* @__PURE__ */ r.jsx(
            Gl,
            {
              ...p,
              variant: $ === "white" ? "white" : "default"
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
                  H
                ),
                ref: t === "client" ? d : void 0,
                children: /* @__PURE__ */ r.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: t === "client" ? c : void 0,
                    children: [
                      (t === "server" ? A || [] : u?.items || []).map((z, N) => /* @__PURE__ */ r.jsx(
                        "li",
                        {
                          className: ge(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": z.active || z.current,
                              "nhsuk-header__navigation-item--hidden": t === "client" && o && s !== void 0 && N >= (s ?? 0)
                            },
                            z.className
                          ),
                          ...z.attributes || {},
                          children: /* @__PURE__ */ r.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: z.href,
                              ...z.active || z.current ? { "aria-current": z.current ? "page" : "true" } : {},
                              children: v(z)
                            }
                          )
                        },
                        N
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
                            b()
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
            children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: u.items.slice(s ?? 0).map((z, N) => /* @__PURE__ */ r.jsx(
              "li",
              {
                className: ge("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": z.active || z.current
                }),
                children: /* @__PURE__ */ r.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: z.href,
                    ...z.active || z.current ? { "aria-current": z.current ? "page" : "true" } : {},
                    onClick: () => {
                      l?.();
                    },
                    children: v(z)
                  }
                )
              },
              `overflow-${(s ?? 0) + N}`
            )) })
          }
        ),
        t === "server" && B && E.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true", children: /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-header__dropdown-list", children: E.map((z, N) => /* @__PURE__ */ r.jsx(
          "li",
          {
            className: ge("nhsuk-header__dropdown-item", {
              "nhsuk-header__dropdown-item--current": z.active || z.current
            }),
            children: /* @__PURE__ */ r.jsx(
              "a",
              {
                className: "nhsuk-header__dropdown-link",
                href: z.href,
                ...z.active || z.current ? { "aria-current": z.current ? "page" : "true" } : {},
                children: v(z)
              }
            )
          },
          `overflow-server-${N}`
        )) }) })
      ]
    }
  );
}
const To = ({
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
  const [h, m] = De(!1), [g, M] = De(!1), [p, u] = De(i?.items?.length || 0), [H, $] = De(!1), [I, _] = De(!1), F = Le(null), w = Le(null), D = Le(!1);
  Ae(() => {
    typeof window > "u" || _(!0);
  }, []), Ae(() => {
    if (typeof document > "u") return;
    const x = (y) => {
      y.key === "Escape" && h && m(!1);
    };
    if (h)
      return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [h]);
  const k = Le(null), C = ue(() => {
    if (!I || !i?.items || i.items.length === 0 || D.current) return;
    const x = F.current, y = w.current;
    if (!x || !y) return;
    D.current = !0, x.classList.add("nhsuk-header__navigation-container--measuring");
    const R = x.clientWidth, T = Array.from(y.children);
    if (!T.length) {
      x.classList.remove("nhsuk-header__navigation-container--measuring"), D.current = !1;
      return;
    }
    if (k.current == null) {
      const P = document.createElement("button");
      P.type = "button", P.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", P.style.position = "absolute", P.style.visibility = "hidden", P.style.pointerEvents = "none", P.innerHTML = "<span>More</span>", x.appendChild(P), k.current = P.getBoundingClientRect().width || 104, x.removeChild(P);
    }
    const j = k.current + 16;
    let v = 0, b = 0;
    const B = window.getComputedStyle(x), A = parseFloat(B.paddingLeft) || 0, E = parseFloat(B.paddingRight) || 0;
    let z = A + E;
    for (const P of T) {
      const se = P.getBoundingClientRect().width;
      if (v + se + j + z > R) break;
      v += se, b += 1;
    }
    const N = b < i.items.length, G = N ? b : i.items.length;
    M((P) => P === N ? P : N), u((P) => P === G ? P : G), x.classList.remove("nhsuk-header__navigation-container--measuring"), D.current = !1;
  }, [I, i?.items]);
  Ae(() => {
    if (!I) return;
    const x = F.current;
    if (!x) return;
    let y = null;
    const R = () => {
      y == null && (y = window.requestAnimationFrame(() => {
        y = null, C();
      }));
    };
    C();
    const T = new ResizeObserver(() => R());
    return T.observe(x), w.current && T.observe(w.current), () => {
      y != null && window.cancelAnimationFrame(y), T.disconnect();
    };
  }, [I, C]), Ae(() => {
    I && C();
  }, [i?.items?.length, I, C]);
  const S = (x) => {
    x && (x.preventDefault(), x.stopPropagation());
    const y = !h;
    m(y), $(y);
  };
  return No(
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
      isClient: I,
      menuOpen: h,
      showMoreButton: g,
      visibleItems: p,
      dropdownVisible: H,
      toggleMenu: S,
      navContainerRef: F,
      navListRef: w
    }
  );
}, tx = (e) => No(e, {
  variant: "server",
  isClient: !1
}), pc = ({
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
  ].filter(Boolean).join(" "), g = d || e || a || o, M = () => {
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
pc.displayName = "Hero";
const $o = ({
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
  ), m = !!(n || a);
  return /* @__PURE__ */ r.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ r.jsxs(
      "div",
      {
        className: ge("nhsuk-width-container", i),
        style: f,
        children: [
          /* @__PURE__ */ r.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ r.jsx("div", { className: ge("nhsuk-footer", e), style: c, children: m ? (
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
function Pn(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function mc(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ka(e) {
  let t, n, a;
  e.length !== 2 ? (t = Pn, n = (l, d) => Pn(e(l), d), a = (l, d) => e(l) - d) : (t = e === Pn || e === mc ? e : gc, n = e, a = e);
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
function gc() {
  return 0;
}
function xc(e) {
  return e === null ? NaN : +e;
}
const bc = Ka(Pn), yc = bc.right;
Ka(xc).center;
function Do(e, t) {
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
  constructor(t, n = _c) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null) for (const [a, o] of t) this.set(a, o);
  }
  get(t) {
    return super.get(ks(this, t));
  }
  has(t) {
    return super.has(ks(this, t));
  }
  set(t, n) {
    return super.set(vc(this, t), n);
  }
  delete(t) {
    return super.delete(wc(this, t));
  }
}
function ks({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : n;
}
function vc({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) ? e.get(a) : (e.set(a, n), n);
}
function wc({ _intern: e, _key: t }, n) {
  const a = t(n);
  return e.has(a) && (n = e.get(a), e.delete(a)), n;
}
function _c(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const Sc = Math.sqrt(50), kc = Math.sqrt(10), Cc = Math.sqrt(2);
function Wn(e, t, n) {
  const a = (t - e) / Math.max(0, n), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Sc ? 10 : s >= kc ? 5 : s >= Cc ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= n && n < 2 ? Wn(e, t, n * 2) : [l, d, c];
}
function jc(e, t, n) {
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
function Nc(e, t, n) {
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
function Io() {
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
    return Io(t, n).unknown(a);
  }, Dr.apply(o, arguments), o;
}
function Mo() {
  var e = Io().unknown(void 0), t = e.domain, n = e.range, a = 0, o = 1, s, i, l = !1, d = 0, c = 0, f = 0.5;
  delete e.unknown;
  function h() {
    var m = t().length, g = o < a, M = g ? o : a, p = g ? a : o;
    s = (p - M) / Math.max(1, m - d + c * 2), l && (s = Math.floor(s)), M += (p - M - s * (m - d)) * f, i = s * (1 - d), l && (M = Math.round(M), i = Math.round(i));
    var u = Nc(m).map(function(H) {
      return M + s * H;
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
    return Mo(t(), [a, o]).round(l).paddingInner(d).paddingOuter(c).align(f);
  }, Dr.apply(h(), arguments);
}
function Xa(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Lo(e, t) {
  var n = Object.create(e.prototype);
  for (var a in t) n[a] = t[a];
  return n;
}
function Tn() {
}
var wn = 0.7, On = 1 / wn, an = "\\s*([+-]?\\d+)\\s*", _n = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", ht = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Tc = /^#([0-9a-f]{3,8})$/, $c = new RegExp(`^rgb\\(${an},${an},${an}\\)$`), Dc = new RegExp(`^rgb\\(${ht},${ht},${ht}\\)$`), Ic = new RegExp(`^rgba\\(${an},${an},${an},${_n}\\)$`), Mc = new RegExp(`^rgba\\(${ht},${ht},${ht},${_n}\\)$`), Lc = new RegExp(`^hsl\\(${_n},${ht},${ht}\\)$`), Fc = new RegExp(`^hsla\\(${_n},${ht},${ht},${_n}\\)$`), js = {
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
  formatHex8: Ac,
  formatHsl: Bc,
  formatRgb: Ts,
  toString: Ts
});
function Ns() {
  return this.rgb().formatHex();
}
function Ac() {
  return this.rgb().formatHex8();
}
function Bc() {
  return Fo(this).formatHsl();
}
function Ts() {
  return this.rgb().formatRgb();
}
function Sn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Tc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? $s(t) : n === 3 ? new rt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? An(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? An(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = $c.exec(e)) ? new rt(t[1], t[2], t[3], 1) : (t = Dc.exec(e)) ? new rt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Ic.exec(e)) ? An(t[1], t[2], t[3], t[4]) : (t = Mc.exec(e)) ? An(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Lc.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, 1) : (t = Fc.exec(e)) ? Ms(t[1], t[2] / 100, t[3] / 100, t[4]) : js.hasOwnProperty(e) ? $s(js[e]) : e === "transparent" ? new rt(NaN, NaN, NaN, 0) : null;
}
function $s(e) {
  return new rt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function An(e, t, n, a) {
  return a <= 0 && (e = t = n = NaN), new rt(e, t, n, a);
}
function Ec(e) {
  return e instanceof Tn || (e = Sn(e)), e ? (e = e.rgb(), new rt(e.r, e.g, e.b, e.opacity)) : new rt();
}
function fa(e, t, n, a) {
  return arguments.length === 1 ? Ec(e) : new rt(e, t, n, a ?? 1);
}
function rt(e, t, n, a) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +a;
}
Xa(rt, fa, Lo(Tn, {
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
  formatHex8: Rc,
  formatRgb: Is,
  toString: Is
}));
function Ds() {
  return `#${Wt(this.r)}${Wt(this.g)}${Wt(this.b)}`;
}
function Rc() {
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
function Fo(e) {
  if (e instanceof it) return new it(e.h, e.s, e.l, e.opacity);
  if (e instanceof Tn || (e = Sn(e)), !e) return new it();
  if (e instanceof it) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, a = e.b / 255, o = Math.min(t, n, a), s = Math.max(t, n, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (n - a) / l + (n < a) * 6 : n === s ? i = (a - t) / l + 2 : i = (t - n) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new it(i, l, d, e.opacity);
}
function Pc(e, t, n, a) {
  return arguments.length === 1 ? Fo(e) : new it(e, t, n, a ?? 1);
}
function it(e, t, n, a) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +a;
}
Xa(it, Pc, Lo(Tn, {
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
function Hc(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function zc(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(a) {
    return Math.pow(e + a * t, n);
  };
}
function Wc(e) {
  return (e = +e) == 1 ? Ao : function(t, n) {
    return n - t ? zc(t, n, e) : Za(isNaN(t) ? n : t);
  };
}
function Ao(e, t) {
  var n = t - e;
  return n ? Hc(e, n) : Za(isNaN(e) ? t : e);
}
const Fs = (function e(t) {
  var n = Wc(t);
  function a(o, s) {
    var i = n((o = fa(o)).r, (s = fa(s)).r), l = n(o.g, s.g), d = n(o.b, s.b), c = Ao(o.opacity, s.opacity);
    return function(f) {
      return o.r = i(f), o.g = l(f), o.b = d(f), o.opacity = c(f), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Oc(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < n; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Uc(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Gc(e, t) {
  var n = t ? t.length : 0, a = e ? Math.min(n, e.length) : 0, o = new Array(a), s = new Array(n), i;
  for (i = 0; i < a; ++i) o[i] = Ja(e[i], t[i]);
  for (; i < n; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Yc(e, t) {
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
function Vc(e, t) {
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
function qc(e) {
  return function() {
    return e;
  };
}
function Kc(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Xc(e, t) {
  var n = ha.lastIndex = Yr.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = ha.exec(e)) && (o = Yr.exec(t)); )
    (s = o.index) > n && (s = t.slice(n, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: Gn(a, o) })), n = Yr.lastIndex;
  return n < t.length && (s = t.slice(n), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? Kc(d[0].x) : qc(t) : (t = d.length, function(c) {
    for (var f = 0, h; f < t; ++f) l[(h = d[f]).i] = h.x(c);
    return l.join("");
  });
}
function Ja(e, t) {
  var n = typeof t, a;
  return t == null || n === "boolean" ? Za(t) : (n === "number" ? Gn : n === "string" ? (a = Sn(t)) ? (t = a, Fs) : Xc : t instanceof Sn ? Fs : t instanceof Date ? Yc : Uc(t) ? Oc : Array.isArray(t) ? Gc : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Vc : Gn)(e, t);
}
function Zc(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
function Jc(e) {
  return function() {
    return e;
  };
}
function Qc(e) {
  return +e;
}
var As = [0, 1];
function nn(e) {
  return e;
}
function pa(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Jc(isNaN(t) ? NaN : 0.5);
}
function ed(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function td(e, t, n) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = pa(o, a), s = n(i, s)) : (a = pa(a, o), s = n(s, i)), function(l) {
    return s(a(l));
  };
}
function nd(e, t, n) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = pa(e[i], e[i + 1]), s[i] = n(t[i], t[i + 1]);
  return function(l) {
    var d = yc(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function Bo(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function rd() {
  var e = As, t = As, n = Ja, a, o, s, i = nn, l, d, c;
  function f() {
    var m = Math.min(e.length, t.length);
    return i !== nn && (i = ed(e[0], e[m - 1])), l = m > 2 ? nd : td, d = c = null, h;
  }
  function h(m) {
    return m == null || isNaN(m = +m) ? s : (d || (d = l(e.map(a), t, n)))(a(i(m)));
  }
  return h.invert = function(m) {
    return i(o((c || (c = l(t, e.map(a), Gn)))(m)));
  }, h.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Qc), f()) : e.slice();
  }, h.range = function(m) {
    return arguments.length ? (t = Array.from(m), f()) : t.slice();
  }, h.rangeRound = function(m) {
    return t = Array.from(m), n = Zc, f();
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
function Eo() {
  return rd()(nn, nn);
}
function ad(e) {
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
function sd(e, t) {
  return function(n, a) {
    for (var o = n.length, s = [], i = 0, l = e[0], d = 0; o > 0 && l > 0 && (d + l + 1 > a && (l = Math.max(1, a - d)), s.push(n.substring(o -= l, o + l)), !((d += l + 1) > a)); )
      l = e[i = (i + 1) % e.length];
    return s.reverse().join(t);
  };
}
function od(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var id = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Vn(e) {
  if (!(t = id.exec(e))) throw new Error("invalid format: " + e);
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
function ld(e) {
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
var Ro;
function cd(e, t) {
  var n = Yn(e, t);
  if (!n) return e + "";
  var a = n[0], o = n[1], s = o - (Ro = Math.max(-8, Math.min(8, Math.floor(o / 3))) * 3) + 1, i = a.length;
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
  d: ad,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => Bs(e * 100, t),
  r: Bs,
  s: cd,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function Rs(e) {
  return e;
}
var Ps = Array.prototype.map, Hs = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function dd(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? Rs : sd(Ps.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", a = e.currency === void 0 ? "" : e.currency[1] + "", o = e.decimal === void 0 ? "." : e.decimal + "", s = e.numerals === void 0 ? Rs : od(Ps.call(e.numerals, String)), i = e.percent === void 0 ? "%" : e.percent + "", l = e.minus === void 0 ? "−" : e.minus + "", d = e.nan === void 0 ? "NaN" : e.nan + "";
  function c(h) {
    h = Vn(h);
    var m = h.fill, g = h.align, M = h.sign, p = h.symbol, u = h.zero, H = h.width, $ = h.comma, I = h.precision, _ = h.trim, F = h.type;
    F === "n" ? ($ = !0, F = "g") : Es[F] || (I === void 0 && (I = 12), _ = !0, F = "g"), (u || m === "0" && g === "=") && (u = !0, m = "0", g = "=");
    var w = p === "$" ? n : p === "#" && /[boxX]/.test(F) ? "0" + F.toLowerCase() : "", D = p === "$" ? a : /[%p]/.test(F) ? i : "", k = Es[F], C = /[defgprs%]/.test(F);
    I = I === void 0 ? 6 : /[gprs]/.test(F) ? Math.max(1, Math.min(21, I)) : Math.max(0, Math.min(20, I));
    function S(x) {
      var y = w, R = D, T, j, v;
      if (F === "c")
        R = k(x) + R, x = "";
      else {
        x = +x;
        var b = x < 0 || 1 / x < 0;
        if (x = isNaN(x) ? d : k(Math.abs(x), I), _ && (x = ld(x)), b && +x == 0 && M !== "+" && (b = !1), y = (b ? M === "(" ? M : l : M === "-" || M === "(" ? "" : M) + y, R = (F === "s" ? Hs[8 + Ro / 3] : "") + R + (b && M === "(" ? ")" : ""), C) {
          for (T = -1, j = x.length; ++T < j; )
            if (v = x.charCodeAt(T), 48 > v || v > 57) {
              R = (v === 46 ? o + x.slice(T + 1) : x.slice(T)) + R, x = x.slice(0, T);
              break;
            }
        }
      }
      $ && !u && (x = t(x, 1 / 0));
      var B = y.length + x.length + R.length, A = B < H ? new Array(H - B + 1).join(m) : "";
      switch ($ && u && (x = t(A + x, A.length ? H - R.length : 1 / 0), A = ""), g) {
        case "<":
          x = y + x + R + A;
          break;
        case "=":
          x = y + A + x + R;
          break;
        case "^":
          x = A.slice(0, B = A.length >> 1) + y + x + R + A.slice(B);
          break;
        default:
          x = A + y + x + R;
          break;
      }
      return s(x);
    }
    return S.toString = function() {
      return h + "";
    }, S;
  }
  function f(h, m) {
    var g = c((h = Vn(h), h.type = "f", h)), M = Math.max(-8, Math.min(8, Math.floor(ln(m) / 3))) * 3, p = Math.pow(10, -M), u = Hs[8 + M / 3];
    return function(H) {
      return g(p * H) + u;
    };
  }
  return {
    format: c,
    formatPrefix: f
  };
}
var En, Po, Ho;
ud({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function ud(e) {
  return En = dd(e), Po = En.format, Ho = En.formatPrefix, En;
}
function fd(e) {
  return Math.max(0, -ln(Math.abs(e)));
}
function hd(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ln(t) / 3))) * 3 - ln(Math.abs(e)));
}
function pd(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, ln(t) - ln(e)) + 1;
}
function md(e, t, n, a) {
  var o = ua(e, t, n), s;
  switch (a = Vn(a ?? ",f"), a.type) {
    case "s": {
      var i = Math.max(Math.abs(e), Math.abs(t));
      return a.precision == null && !isNaN(s = hd(o, i)) && (a.precision = s), Ho(a, i);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      a.precision == null && !isNaN(s = pd(o, Math.max(Math.abs(e), Math.abs(t)))) && (a.precision = s - (a.type === "e"));
      break;
    }
    case "f":
    case "%": {
      a.precision == null && !isNaN(s = fd(o)) && (a.precision = s - (a.type === "%") * 2);
      break;
    }
  }
  return Po(a);
}
function gd(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var a = t();
    return jc(a[0], a[a.length - 1], n ?? 10);
  }, e.tickFormat = function(n, a) {
    var o = t();
    return md(o[0], o[o.length - 1], n ?? 10, a);
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
  var e = Eo();
  return e.copy = function() {
    return Bo(e, qn());
  }, Dr.apply(e, arguments), gd(e);
}
function xd(e, t) {
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
const Nt = 1e3, ot = Nt * 60, Tt = ot * 60, Dt = Tt * 24, es = Dt * 7, zs = Dt * 30, Kr = Dt * 365, rn = Ye((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Nt);
}, (e, t) => (t - e) / Nt, (e) => e.getUTCSeconds());
rn.range;
const ts = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Nt);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getMinutes());
ts.range;
const bd = Ye((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * ot);
}, (e, t) => (t - e) / ot, (e) => e.getUTCMinutes());
bd.range;
const ns = Ye((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Nt - e.getMinutes() * ot);
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getHours());
ns.range;
const yd = Ye((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Tt);
}, (e, t) => (t - e) / Tt, (e) => e.getUTCHours());
yd.range;
const $n = Ye(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * ot) / Dt,
  (e) => e.getDate() - 1
);
$n.range;
const rs = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dt, (e) => e.getUTCDate() - 1);
rs.range;
const vd = Ye((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Dt, (e) => Math.floor(e / Dt));
vd.range;
function qt(e) {
  return Ye((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setDate(t.getDate() + n * 7);
  }, (t, n) => (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ot) / es);
}
const Ir = qt(0), Xn = qt(1), wd = qt(2), _d = qt(3), cn = qt(4), Sd = qt(5), kd = qt(6);
Ir.range;
Xn.range;
wd.range;
_d.range;
cn.range;
Sd.range;
kd.range;
function Kt(e) {
  return Ye((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, n) => {
    t.setUTCDate(t.getUTCDate() + n * 7);
  }, (t, n) => (n - t) / es);
}
const zo = Kt(0), Zn = Kt(1), Cd = Kt(2), jd = Kt(3), dn = Kt(4), Nd = Kt(5), Td = Kt(6);
zo.range;
Zn.range;
Cd.range;
jd.range;
dn.range;
Nd.range;
Td.range;
const kn = Ye((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
kn.range;
const $d = Ye((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
$d.range;
const It = Ye((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
It.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Ye((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, n) => {
  t.setFullYear(t.getFullYear() + n * e);
});
It.range;
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
function Dd(e, t, n, a, o, s) {
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
    [n, 1, es],
    [t, 1, zs],
    [t, 3, 3 * zs],
    [e, 1, Kr]
  ];
  function l(c, f, h) {
    const m = f < c;
    m && ([c, f] = [f, c]);
    const g = h && typeof h.range == "function" ? h : d(c, f, h), M = g ? g.range(c, +f + 1) : [];
    return m ? M.reverse() : M;
  }
  function d(c, f, h) {
    const m = Math.abs(f - c) / h, g = Ka(([, , u]) => u).right(i, m);
    if (g === i.length) return e.every(ua(c / Kr, f / Kr, h));
    if (g === 0) return Kn.every(Math.max(ua(c, f, h), 1));
    const [M, p] = i[m / i[g - 1][2] < i[g][2] / m ? g - 1 : g];
    return M.every(p);
  }
  return [l, d];
}
const [Id, Md] = Dd(It, kn, Ir, $n, ns, ts);
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
function Ld(e) {
  var t = e.dateTime, n = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = xn(o), f = bn(o), h = xn(s), m = bn(s), g = xn(i), M = bn(i), p = xn(l), u = bn(l), H = xn(d), $ = bn(d), I = {
    a: b,
    A: B,
    b: A,
    B: E,
    c: null,
    d: Vs,
    e: Vs,
    f: nu,
    g: fu,
    G: pu,
    H: Qd,
    I: eu,
    j: tu,
    L: Wo,
    m: ru,
    M: au,
    p: z,
    q: N,
    Q: Xs,
    s: Zs,
    S: su,
    u: ou,
    U: iu,
    V: lu,
    w: cu,
    W: du,
    x: null,
    X: null,
    y: uu,
    Y: hu,
    Z: mu,
    "%": Ks
  }, _ = {
    a: G,
    A: P,
    b: se,
    B: me,
    c: null,
    d: qs,
    e: qs,
    f: yu,
    g: $u,
    G: Iu,
    H: gu,
    I: xu,
    j: bu,
    L: Uo,
    m: vu,
    M: wu,
    p: de,
    q: J,
    Q: Xs,
    s: Zs,
    S: _u,
    u: Su,
    U: ku,
    V: Cu,
    w: ju,
    W: Nu,
    x: null,
    X: null,
    y: Tu,
    Y: Du,
    Z: Mu,
    "%": Ks
  }, F = {
    a: S,
    A: x,
    b: y,
    B: R,
    c: T,
    d: Gs,
    e: Gs,
    f: Kd,
    g: Us,
    G: Os,
    H: Ys,
    I: Ys,
    j: Gd,
    L: qd,
    m: Ud,
    M: Yd,
    p: C,
    q: Od,
    Q: Zd,
    s: Jd,
    S: Vd,
    u: Rd,
    U: Pd,
    V: Hd,
    w: Ed,
    W: zd,
    x: j,
    X: v,
    y: Us,
    Y: Os,
    Z: Wd,
    "%": Xd
  };
  I.x = w(n, I), I.X = w(a, I), I.c = w(t, I), _.x = w(n, _), _.X = w(a, _), _.c = w(t, _);
  function w(O, Y) {
    return function(Z) {
      var W = [], ae = -1, ne = 0, le = O.length, ce, be, Me;
      for (Z instanceof Date || (Z = /* @__PURE__ */ new Date(+Z)); ++ae < le; )
        O.charCodeAt(ae) === 37 && (W.push(O.slice(ne, ae)), (be = Ws[ce = O.charAt(++ae)]) != null ? ce = O.charAt(++ae) : be = ce === "e" ? " " : "0", (Me = Y[ce]) && (ce = Me(Z, be)), W.push(ce), ne = ae + 1);
      return W.push(O.slice(ne, ae)), W.join("");
    };
  }
  function D(O, Y) {
    return function(Z) {
      var W = gn(1900, void 0, 1), ae = k(W, O, Z += "", 0), ne, le;
      if (ae != Z.length) return null;
      if ("Q" in W) return new Date(W.Q);
      if ("s" in W) return new Date(W.s * 1e3 + ("L" in W ? W.L : 0));
      if (Y && !("Z" in W) && (W.Z = 0), "p" in W && (W.H = W.H % 12 + W.p * 12), W.m === void 0 && (W.m = "q" in W ? W.q : 0), "V" in W) {
        if (W.V < 1 || W.V > 53) return null;
        "w" in W || (W.w = 1), "Z" in W ? (ne = Zr(gn(W.y, 0, 1)), le = ne.getUTCDay(), ne = le > 4 || le === 0 ? Zn.ceil(ne) : Zn(ne), ne = rs.offset(ne, (W.V - 1) * 7), W.y = ne.getUTCFullYear(), W.m = ne.getUTCMonth(), W.d = ne.getUTCDate() + (W.w + 6) % 7) : (ne = Xr(gn(W.y, 0, 1)), le = ne.getDay(), ne = le > 4 || le === 0 ? Xn.ceil(ne) : Xn(ne), ne = $n.offset(ne, (W.V - 1) * 7), W.y = ne.getFullYear(), W.m = ne.getMonth(), W.d = ne.getDate() + (W.w + 6) % 7);
      } else ("W" in W || "U" in W) && ("w" in W || (W.w = "u" in W ? W.u % 7 : "W" in W ? 1 : 0), le = "Z" in W ? Zr(gn(W.y, 0, 1)).getUTCDay() : Xr(gn(W.y, 0, 1)).getDay(), W.m = 0, W.d = "W" in W ? (W.w + 6) % 7 + W.W * 7 - (le + 5) % 7 : W.w + W.U * 7 - (le + 6) % 7);
      return "Z" in W ? (W.H += W.Z / 100 | 0, W.M += W.Z % 100, Zr(W)) : Xr(W);
    };
  }
  function k(O, Y, Z, W) {
    for (var ae = 0, ne = Y.length, le = Z.length, ce, be; ae < ne; ) {
      if (W >= le) return -1;
      if (ce = Y.charCodeAt(ae++), ce === 37) {
        if (ce = Y.charAt(ae++), be = F[ce in Ws ? Y.charAt(ae++) : ce], !be || (W = be(O, Z, W)) < 0) return -1;
      } else if (ce != Z.charCodeAt(W++))
        return -1;
    }
    return W;
  }
  function C(O, Y, Z) {
    var W = c.exec(Y.slice(Z));
    return W ? (O.p = f.get(W[0].toLowerCase()), Z + W[0].length) : -1;
  }
  function S(O, Y, Z) {
    var W = g.exec(Y.slice(Z));
    return W ? (O.w = M.get(W[0].toLowerCase()), Z + W[0].length) : -1;
  }
  function x(O, Y, Z) {
    var W = h.exec(Y.slice(Z));
    return W ? (O.w = m.get(W[0].toLowerCase()), Z + W[0].length) : -1;
  }
  function y(O, Y, Z) {
    var W = H.exec(Y.slice(Z));
    return W ? (O.m = $.get(W[0].toLowerCase()), Z + W[0].length) : -1;
  }
  function R(O, Y, Z) {
    var W = p.exec(Y.slice(Z));
    return W ? (O.m = u.get(W[0].toLowerCase()), Z + W[0].length) : -1;
  }
  function T(O, Y, Z) {
    return k(O, t, Y, Z);
  }
  function j(O, Y, Z) {
    return k(O, n, Y, Z);
  }
  function v(O, Y, Z) {
    return k(O, a, Y, Z);
  }
  function b(O) {
    return i[O.getDay()];
  }
  function B(O) {
    return s[O.getDay()];
  }
  function A(O) {
    return d[O.getMonth()];
  }
  function E(O) {
    return l[O.getMonth()];
  }
  function z(O) {
    return o[+(O.getHours() >= 12)];
  }
  function N(O) {
    return 1 + ~~(O.getMonth() / 3);
  }
  function G(O) {
    return i[O.getUTCDay()];
  }
  function P(O) {
    return s[O.getUTCDay()];
  }
  function se(O) {
    return d[O.getUTCMonth()];
  }
  function me(O) {
    return l[O.getUTCMonth()];
  }
  function de(O) {
    return o[+(O.getUTCHours() >= 12)];
  }
  function J(O) {
    return 1 + ~~(O.getUTCMonth() / 3);
  }
  return {
    format: function(O) {
      var Y = w(O += "", I);
      return Y.toString = function() {
        return O;
      }, Y;
    },
    parse: function(O) {
      var Y = D(O += "", !1);
      return Y.toString = function() {
        return O;
      }, Y;
    },
    utcFormat: function(O) {
      var Y = w(O += "", _);
      return Y.toString = function() {
        return O;
      }, Y;
    },
    utcParse: function(O) {
      var Y = D(O += "", !0);
      return Y.toString = function() {
        return O;
      }, Y;
    }
  };
}
var Ws = { "-": "", _: " ", 0: "0" }, Xe = /^\s*\d+/, Fd = /^%/, Ad = /[\\^$*+?|[\]().{}]/g;
function Fe(e, t, n) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < n ? new Array(n - s + 1).join(t) + o : o);
}
function Bd(e) {
  return e.replace(Ad, "\\$&");
}
function xn(e) {
  return new RegExp("^(?:" + e.map(Bd).join("|") + ")", "i");
}
function bn(e) {
  return new Map(e.map((t, n) => [t.toLowerCase(), n]));
}
function Ed(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.w = +a[0], n + a[0].length) : -1;
}
function Rd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.u = +a[0], n + a[0].length) : -1;
}
function Pd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.U = +a[0], n + a[0].length) : -1;
}
function Hd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.V = +a[0], n + a[0].length) : -1;
}
function zd(e, t, n) {
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
function Wd(e, t, n) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(n, n + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), n + a[0].length) : -1;
}
function Od(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 1));
  return a ? (e.q = a[0] * 3 - 3, n + a[0].length) : -1;
}
function Ud(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.m = a[0] - 1, n + a[0].length) : -1;
}
function Gs(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.d = +a[0], n + a[0].length) : -1;
}
function Gd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 3));
  return a ? (e.m = 0, e.d = +a[0], n + a[0].length) : -1;
}
function Ys(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.H = +a[0], n + a[0].length) : -1;
}
function Yd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.M = +a[0], n + a[0].length) : -1;
}
function Vd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 2));
  return a ? (e.S = +a[0], n + a[0].length) : -1;
}
function qd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 3));
  return a ? (e.L = +a[0], n + a[0].length) : -1;
}
function Kd(e, t, n) {
  var a = Xe.exec(t.slice(n, n + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), n + a[0].length) : -1;
}
function Xd(e, t, n) {
  var a = Fd.exec(t.slice(n, n + 1));
  return a ? n + a[0].length : -1;
}
function Zd(e, t, n) {
  var a = Xe.exec(t.slice(n));
  return a ? (e.Q = +a[0], n + a[0].length) : -1;
}
function Jd(e, t, n) {
  var a = Xe.exec(t.slice(n));
  return a ? (e.s = +a[0], n + a[0].length) : -1;
}
function Vs(e, t) {
  return Fe(e.getDate(), t, 2);
}
function Qd(e, t) {
  return Fe(e.getHours(), t, 2);
}
function eu(e, t) {
  return Fe(e.getHours() % 12 || 12, t, 2);
}
function tu(e, t) {
  return Fe(1 + $n.count(It(e), e), t, 3);
}
function Wo(e, t) {
  return Fe(e.getMilliseconds(), t, 3);
}
function nu(e, t) {
  return Wo(e, t) + "000";
}
function ru(e, t) {
  return Fe(e.getMonth() + 1, t, 2);
}
function au(e, t) {
  return Fe(e.getMinutes(), t, 2);
}
function su(e, t) {
  return Fe(e.getSeconds(), t, 2);
}
function ou(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function iu(e, t) {
  return Fe(Ir.count(It(e) - 1, e), t, 2);
}
function Oo(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? cn(e) : cn.ceil(e);
}
function lu(e, t) {
  return e = Oo(e), Fe(cn.count(It(e), e) + (It(e).getDay() === 4), t, 2);
}
function cu(e) {
  return e.getDay();
}
function du(e, t) {
  return Fe(Xn.count(It(e) - 1, e), t, 2);
}
function uu(e, t) {
  return Fe(e.getFullYear() % 100, t, 2);
}
function fu(e, t) {
  return e = Oo(e), Fe(e.getFullYear() % 100, t, 2);
}
function hu(e, t) {
  return Fe(e.getFullYear() % 1e4, t, 4);
}
function pu(e, t) {
  var n = e.getDay();
  return e = n >= 4 || n === 0 ? cn(e) : cn.ceil(e), Fe(e.getFullYear() % 1e4, t, 4);
}
function mu(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Fe(t / 60 | 0, "0", 2) + Fe(t % 60, "0", 2);
}
function qs(e, t) {
  return Fe(e.getUTCDate(), t, 2);
}
function gu(e, t) {
  return Fe(e.getUTCHours(), t, 2);
}
function xu(e, t) {
  return Fe(e.getUTCHours() % 12 || 12, t, 2);
}
function bu(e, t) {
  return Fe(1 + rs.count(Yt(e), e), t, 3);
}
function Uo(e, t) {
  return Fe(e.getUTCMilliseconds(), t, 3);
}
function yu(e, t) {
  return Uo(e, t) + "000";
}
function vu(e, t) {
  return Fe(e.getUTCMonth() + 1, t, 2);
}
function wu(e, t) {
  return Fe(e.getUTCMinutes(), t, 2);
}
function _u(e, t) {
  return Fe(e.getUTCSeconds(), t, 2);
}
function Su(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function ku(e, t) {
  return Fe(zo.count(Yt(e) - 1, e), t, 2);
}
function Go(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? dn(e) : dn.ceil(e);
}
function Cu(e, t) {
  return e = Go(e), Fe(dn.count(Yt(e), e) + (Yt(e).getUTCDay() === 4), t, 2);
}
function ju(e) {
  return e.getUTCDay();
}
function Nu(e, t) {
  return Fe(Zn.count(Yt(e) - 1, e), t, 2);
}
function Tu(e, t) {
  return Fe(e.getUTCFullYear() % 100, t, 2);
}
function $u(e, t) {
  return e = Go(e), Fe(e.getUTCFullYear() % 100, t, 2);
}
function Du(e, t) {
  return Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Iu(e, t) {
  var n = e.getUTCDay();
  return e = n >= 4 || n === 0 ? dn(e) : dn.ceil(e), Fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Mu() {
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
var Qt, Yo;
Lu({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Lu(e) {
  return Qt = Ld(e), Yo = Qt.format, Qt.parse, Qt.utcFormat, Qt.utcParse, Qt;
}
function Fu(e) {
  return new Date(e);
}
function Au(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Vo(e, t, n, a, o, s, i, l, d, c) {
  var f = Eo(), h = f.invert, m = f.domain, g = c(".%L"), M = c(":%S"), p = c("%I:%M"), u = c("%I %p"), H = c("%a %d"), $ = c("%b %d"), I = c("%B"), _ = c("%Y");
  function F(w) {
    return (d(w) < w ? g : l(w) < w ? M : i(w) < w ? p : s(w) < w ? u : a(w) < w ? o(w) < w ? H : $ : n(w) < w ? I : _)(w);
  }
  return f.invert = function(w) {
    return new Date(h(w));
  }, f.domain = function(w) {
    return arguments.length ? m(Array.from(w, Au)) : m().map(Fu);
  }, f.ticks = function(w) {
    var D = m();
    return e(D[0], D[D.length - 1], w ?? 10);
  }, f.tickFormat = function(w, D) {
    return D == null ? F : c(D);
  }, f.nice = function(w) {
    var D = m();
    return (!w || typeof w.range != "function") && (w = t(D[0], D[D.length - 1], w ?? 10)), w ? m(xd(D, w)) : f;
  }, f.copy = function() {
    return Bo(f, Vo(e, t, n, a, o, s, i, l, d, c));
  }, f;
}
function as() {
  return Dr.apply(Vo(Id, Md, It, kn, Ir, $n, ns, ts, rn, Yo).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Bu({
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
  const c = Le(null), [f, h] = De(!1), [m, g] = De(!1), M = t(e.start), p = t(e.end), u = Math.max(p - M, 20), H = () => {
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
  }, $ = e.progress ? u * e.progress / 100 : 0, I = () => {
    n?.(e);
  }, _ = () => {
    a?.(e);
  }, F = (y) => {
    y.key === "Enter" ? (y.preventDefault(), I()) : y.key === " " && (y.preventDefault(), _());
  }, w = () => {
    h(!0);
  }, D = () => {
    h(!1);
  }, k = () => {
    g(!0), l?.();
  }, C = () => {
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
    "--task-left": `${M}px`,
    "--task-width": `${u}px`,
    "--task-color": H(),
    left: `${M}px`,
    width: `${u}px`,
    backgroundColor: H()
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
      onClick: I,
      onDoubleClick: _,
      onKeyDown: F,
      onMouseDown: w,
      onMouseUp: D,
      onFocus: k,
      onBlur: C,
      "aria-label": d || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ r.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${$}px` }
          }
        ),
        /* @__PURE__ */ r.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Eu({ viewStart: e, viewEnd: t, dateCount: n }) {
  const a = [];
  for (let g = e.getTime(); g <= t.getTime(); g += 864e5)
    a.push(new Date(g));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = De(-1), d = Le(null), c = (g) => {
    if (g.key === "ArrowLeft") {
      g.preventDefault();
      const M = Math.max(0, i === -1 ? 0 : i - 1);
      l(M), m(M);
    } else if (g.key === "ArrowRight") {
      g.preventDefault();
      const M = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(M), m(M);
    } else if (g.key === "ArrowDown") {
      g.preventDefault();
      const M = document.querySelector(".gantt-row .timeline-container");
      M && M.focus();
    } else if (g.key === "Home")
      g.preventDefault(), l(0), m(0);
    else if (g.key === "End") {
      g.preventDefault();
      const M = a.length - 1;
      l(M), m(M);
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
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (g) => {
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
              const p = g.getTime() === s.getTime(), u = i === M;
              return /* @__PURE__ */ r.jsx(
                "div",
                {
                  "data-date-index": M,
                  className: `date-column ${p ? "today" : ""} ${u ? "focused" : ""}`,
                  tabIndex: u ? 0 : -1,
                  role: "button",
                  "aria-label": `${g.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${p ? " (Today)" : ""}`,
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
function Ru({ resource: e, tasks: t, scale: n, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = De(!1), [c, f] = De(-1), h = Le(null);
  Ae(() => {
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
        const $ = Math.min(t.length - 1, c + 1);
        f($), h.current?.querySelector(`[data-task-index="${$}"]`)?.focus();
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
  }, M = (p) => {
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
              Bu,
              {
                task: p,
                scale: n,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === u,
                taskIndex: u,
                tabIndex: l && c === u ? 0 : -1,
                onFocus: () => M(u)
              },
              p.id
            ))
          }
        )
      ]
    }
  );
}
function nx({
  resources: e,
  tasks: t = [],
  viewStart: n,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Le(null), [l, d] = De(800), c = $e(() => {
    if (n instanceof Date)
      return isNaN(n.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : n;
    const p = new Date(n);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : p;
  }, [n]), f = $e(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const p = new Date(a);
    return isNaN(p.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : p;
  }, [a]), h = $e(() => Math.ceil((f.getTime() - c.getTime()) / 864e5) + 1, [c, f]);
  Ae(() => {
    if (!i.current) return;
    const p = new ResizeObserver((u) => {
      const H = u[0];
      H && d(Math.max(H.contentRect.width - 220, 400));
    });
    return p.observe(i.current), () => p.disconnect();
  }, []);
  const m = $e(
    () => as().domain([c, f]).range([0, l]),
    [c, f, l]
  ), g = $e(() => {
    const p = /* @__PURE__ */ new Map();
    return t.forEach((u) => {
      const H = p.get(u.resourceId) || [];
      H.push(u), p.set(u.resourceId, H);
    }), p;
  }, [t]), M = (p) => {
    if (p.target === p.currentTarget)
      switch (p.key) {
        case "ArrowDown":
          p.preventDefault();
          const u = i.current?.querySelector(".gantt-row .resource-label");
          u && u.focus();
          break;
        case "Home":
          p.preventDefault();
          const H = i.current?.querySelector(".header-resource");
          H && H.focus();
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
        /* @__PURE__ */ r.jsx(Eu, { viewStart: c, viewEnd: f, dateCount: h }),
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
              Ru,
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
) }), Pu = ({
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
      const u = p.slice().reverse().find((H) => H.href && !H.active);
      if (u)
        return { href: u.href, text: u.text };
    }
    return { text: "Home" };
  }, h = c(), m = f(), g = ge(
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
}, Hu = Pu;
Hu.Item = Jn;
Jn.displayName = "BreadcrumbItem";
const qo = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [o, s] = De(!1);
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
}, rx = ({
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
}, ax = ({
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
}, Ko = at.forwardRef(({
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
  ].filter(Boolean).join(" "), M = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), p = () => {
    if (n)
      return /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: n } });
    if (!t) return null;
    const $ = () => l && e !== "feature" ? /* @__PURE__ */ r.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ r.jsx(
      $t,
      {
        level: a,
        className: M,
        children: $()
      }
    );
  }, u = () => f.children ? f.children : i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-card__description", children: s }) : null, H = () => e !== "primary" ? null : /* @__PURE__ */ r.jsxs(
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
          H()
        ] })
      ]
    }
  );
});
Ko.displayName = "Card";
const sx = ({
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
}, ox = ({
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
}, ix = ({
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
  const M = [
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
    const $ = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], I = /* @__PURE__ */ r.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        $,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ r.jsx(
      $t,
      {
        level: a,
        className: p,
        children: I
      }
    );
  }, H = () => d || (i ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ r.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: M,
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
        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-care-card__content", children: H() })
      ]
    }
  );
}, zu = ({
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
}, lx = ({
  text: e,
  html: t,
  children: n,
  className: a,
  ...o
}) => {
  const s = ge("nhsuk-inset-text", a), i = () => n || (t ? /* @__PURE__ */ r.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ r.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ r.jsx("div", { className: s, ...o, children: i() });
}, cx = ({
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
  const M = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), p = ge(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    f
  ), u = ge(h), H = (_, F) => {
    const w = ge("nhsuk-table__header", {
      [`nhsuk-table__header--${_.format}`]: _.format
    }, _.classes), D = {
      scope: "col",
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && { role: "columnheader" },
      ..._.attributes
    };
    return /* @__PURE__ */ r.jsx("th", { className: w, ...D, children: _.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text }, F);
  }, $ = (_, F, w) => {
    const D = o && w, k = ge(
      D ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${D ? "header" : "cell"}--${_.format}`]: _.format
      },
      _.classes
    ), C = {
      ...D && { scope: "row" },
      ..._.colspan && { colSpan: _.colspan },
      ..._.rowspan && { rowSpan: _.rowspan },
      ...s && {
        role: D ? "rowheader" : "cell",
        ..._.header && { "data-label": _.header }
      },
      ..._.attributes
    }, S = /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      s && _.header && /* @__PURE__ */ r.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        _.header,
        " "
      ] }),
      _.html ? /* @__PURE__ */ r.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text
    ] }), x = D ? "th" : "td";
    return /* @__PURE__ */ r.jsx(x, { className: k, ...C, children: S }, F);
  }, I = () => /* @__PURE__ */ r.jsxs(
    "table",
    {
      className: p,
      ...s && { role: "table" },
      ...m,
      ...g && { "data-testid": g },
      children: [
        n && /* @__PURE__ */ r.jsx("caption", { className: M, children: n }),
        t && t.length > 0 && /* @__PURE__ */ r.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ r.jsx("tr", { ...s && { role: "row" }, children: t.map((_, F) => H(_, F)) })
          }
        ),
        /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((_, F) => /* @__PURE__ */ r.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: _.map(
              (w, D) => $(w, D, D === 0)
            )
          },
          F
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ r.jsxs(zu, { className: c, children: [
    i && /* @__PURE__ */ r.jsx($t, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    I()
  ] }) : u ? /* @__PURE__ */ r.jsx("div", { className: u, children: I() }) : I();
}, dx = un(({
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
  const g = n !== void 0, [M, p] = De(() => t || e[0]?.id || ""), u = g ? n : M, H = Le(null), $ = Le(/* @__PURE__ */ new Map()), I = ue((S) => {
    g || p(S), a?.(S);
  }, [g, a]), _ = ue((S) => {
    o?.(S), l && I(S);
  }, [o, l, I]), F = ue((S, x) => {
    const y = e.filter((j) => !j.disabled).map((j) => j.id), R = y.indexOf(x);
    let T = null;
    switch (S.key) {
      case "ArrowLeft":
        T = R > 0 ? R - 1 : y.length - 1;
        break;
      case "ArrowRight":
        T = R < y.length - 1 ? R + 1 : 0;
        break;
      case "Home":
        T = 0;
        break;
      case "End":
        T = y.length - 1;
        break;
      case "Escape":
        S.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (T !== null) {
      S.preventDefault();
      const j = y[T], v = $.current.get(j);
      v && (v.focus(), _(j));
    }
  }, [e, _, i]), w = ue((S, x) => {
    x ? $.current.set(S, x) : $.current.delete(S);
  }, []), D = ue((S) => {
    const x = $.current.get(S);
    x && x.focus();
  }, []);
  yo(m, () => ({
    focusTab: D,
    getActiveTab: () => u,
    getTabListElement: () => H.current
  }), [D, u]);
  const k = ue((S) => {
    const x = S.relatedTarget;
    H.current?.contains(x) || s?.();
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
            ref: H,
            children: /* @__PURE__ */ r.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: k,
                children: e.map((S) => {
                  const x = S.id === u, y = S.disabled, R = ge("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": x,
                    "nhsuk-tabs__list-item--disabled": y
                  });
                  return /* @__PURE__ */ r.jsx("li", { className: R, role: "presentation", children: /* @__PURE__ */ r.jsx(
                    "button",
                    {
                      ref: (T) => w(S.id, T),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": x,
                      "aria-controls": `${S.id}-panel`,
                      id: `${S.id}-tab`,
                      tabIndex: x ? 0 : -1,
                      disabled: y,
                      onClick: () => !y && I(S.id),
                      onKeyDown: (T) => !y && F(T, S.id),
                      onFocus: () => !y && _(S.id),
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
}), Wu = un(
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
Wu.displayName = "Details";
const Ou = un(
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
          m(),
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ r.jsx("ul", { className: c.join(" "), role: "list", children: n.map((g, M) => /* @__PURE__ */ r.jsxs("li", { children: [
            f(),
            h(g.item)
          ] }, M)) }) })
        ]
      }
    );
  }
);
Ou.displayName = "DoDontList";
const Uu = un(
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
Uu.displayName = "Expander";
const Gu = un(
  ({ items: e, idPrefix: t = "task-list", className: n, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      n
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, f = `${t}-${c}-hint`, h = `${t}-${c}-status`, m = !!l.href, g = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), M = [
        l.hint && f,
        h
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ r.jsx(
        Yu,
        {
          item: l,
          itemClasses: g,
          hasLink: m,
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
), Yu = ({
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
Gu.displayName = "TaskList";
const ux = ({
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
        bo(
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
}, fx = ({
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
}, Vu = ({
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
] }), qu = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ r.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((n) => /* @__PURE__ */ r.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ r.jsx(et, { color: Ku(n.status), text: n.label }) }, n.status)) });
function Ku(e) {
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
const hx = ({
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
  legendPlacement: M = "bottom",
  onA11yModeChange: p
}) => {
  const [u, H] = De("grid"), $ = i || u, [I, _] = De(a || []), F = n ?? I, w = $e(() => {
    const T = /* @__PURE__ */ new Set();
    return e.forEach((j) => T.add(new Date(j.start).getTime())), Array.from(T).sort((j, v) => j - v);
  }, [e]), D = $e(() => {
    const T = {};
    return e.forEach((j) => {
      const v = new Date(j.start).getTime();
      T[v] || (T[v] = {});
      const b = j.capacity - j.booked - (j.held || 0);
      T[v][j.sessionId] = { slot: j, remaining: b };
    }), T;
  }, [e]), k = ue((T) => {
    if (s === "single") {
      const j = [T.id];
      n || _(j), o?.(j, { lastAction: "select" });
    } else {
      const j = F.includes(T.id), v = j ? F.filter((b) => b !== T.id) : [...F, T.id];
      n || _(v), o?.(v, { lastAction: j ? "deselect" : "select" });
    }
  }, [s, F, n, o]), C = $e(() => m || (g ? Array.from(new Set(e.map((j) => j.status))).map((j) => ({
    status: j,
    label: j.charAt(0).toUpperCase() + j.slice(1)
  })) : void 0), [m, g, e]), S = C ? /* @__PURE__ */ r.jsx(
    qu,
    {
      items: C,
      orientation: M === "left" || M === "right" ? "vertical" : "horizontal"
    }
  ) : null, x = (T) => {
    i || H(T), p?.(T);
  }, y = f || (h ? /* @__PURE__ */ r.jsx(
    Vu,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: $,
      onA11yModeChange: x
    }
  ) : null), R = /* @__PURE__ */ r.jsx("div", { style: d, className: ge(l), children: /* @__PURE__ */ r.jsx(ca, { className: ge("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsx(vn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    y,
    M === "top" && S,
    /* @__PURE__ */ r.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((T) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsxs("button", { type: "button", onClick: () => k(T), "aria-pressed": F.includes(T.id), children: [
      yn(new Date(T.start)),
      " – ",
      yn(new Date(T.end)),
      " (",
      T.status,
      ")"
    ] }) }, T.id)) }),
    M === "bottom" && S
  ] }) }) }) }) });
  return $ === "list" ? R : /* @__PURE__ */ r.jsx("div", { style: d, className: ge(l), children: /* @__PURE__ */ r.jsx(ca, { className: ge("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsx(vn, { width: "full", children: /* @__PURE__ */ r.jsxs("div", { className: "nhs-slot-matrix", children: [
    y,
    M === "top" && S,
    /* @__PURE__ */ r.jsxs("div", { role: "grid", "aria-rowcount": w.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((T) => /* @__PURE__ */ r.jsx("div", { role: "columnheader", "aria-label": `Session ${T.specialty}`, className: "nhs-slot-matrix__session-header", children: T.specialty }, T.id))
      ] }),
      w.map((T) => /* @__PURE__ */ r.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ r.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": yn(new Date(T)), children: yn(new Date(T)) }),
        t.map((j) => {
          const v = D[T]?.[j.id];
          if (!v)
            return /* @__PURE__ */ r.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, j.id);
          const { slot: b, remaining: B } = v, A = F.includes(b.id), E = c ? c(b) : `Slot ${yn(new Date(b.start))} ${b.status}${B === 0 ? " full" : ""}`;
          return /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": b.status,
              className: ge("nhs-slot-matrix__cell", A && "nhs-slot-matrix__cell--selected"),
              "aria-label": E,
              "aria-selected": A || void 0,
              onClick: () => k(b),
              children: B > 0 ? `${B} left` : "Full"
            },
            b.id
          );
        })
      ] }, T))
    ] }),
    M === "bottom" && S
  ] }) }) }) }) });
};
function Qs(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function yn(e) {
  return `${Qs(e.getHours())}:${Qs(e.getMinutes())}`;
}
const Xu = ({
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
}, px = ({
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
      children: /* @__PURE__ */ r.jsx(Xu, { ...o })
    },
    s
  )) }) }) });
}, Zu = at.forwardRef(
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
    striped: M = !1,
    responsive: p = !1,
    tableType: u = "default"
  }, H) => {
    const $ = Le(null), I = Le(null), _ = Le(null);
    at.useImperativeHandle(H, () => $.current, []);
    const [F, w] = De(0), [D, k] = De(0), [C, S] = De("headers"), [x, y] = De("browse"), R = t.length, T = e.length, j = $e(() => !n || n.length === 0 ? e : [...e].sort((N, G) => {
      for (const { key: P, direction: se } of n) {
        const me = N[P], de = G[P];
        if (me == null && de == null) continue;
        if (me == null) return 1;
        if (de == null) return -1;
        let J = 0;
        if (typeof me == "number" && typeof de == "number" ? J = me - de : J = String(me).localeCompare(String(de)), J !== 0)
          return se === "asc" ? J : -J;
      }
      return 0;
    }), [e, n]), v = ue((N, G) => {
      setTimeout(() => {
        const P = $.current?.querySelector(
          `tbody tr:nth-child(${N + 1}) td:nth-child(${G + 1})`
        );
        P && (P.focus(), typeof P.scrollIntoView == "function" && P.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), b = ue((N) => {
      setTimeout(() => {
        const G = $.current?.querySelector(`th:nth-child(${N + 1})`);
        G && (G.focus(), typeof G.scrollIntoView == "function" && G.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), B = ue((N) => {
      a?.(N);
    }, [a]), A = ue((N) => {
      s?.(N);
    }, [s]), E = ue((N) => {
      const { key: G } = N;
      switch (G) {
        case "Enter":
          if (N.preventDefault(), C === "headers" && x === "browse")
            y("navigate"), b(D);
          else if (C === "headers" && x === "navigate") {
            const P = t[D];
            P && B(P.key);
          } else C === "cells" && x === "browse" ? (y("navigate"), v(F, D)) : C === "cells" && x === "navigate" && A(F);
          break;
        case "Escape":
          N.preventDefault(), (C === "headers" && x === "navigate" || C === "cells" && x === "navigate") && y("browse");
          break;
        case "ArrowLeft":
          if (N.preventDefault(), x === "navigate" || x === "browse" && C === "headers") {
            if (C === "headers") {
              const P = Math.max(0, D - 1);
              k(P), b(P);
            } else if (C === "cells") {
              const P = Math.max(0, D - 1);
              k(P), v(F, P);
            }
          }
          break;
        case "ArrowRight":
          if (N.preventDefault(), x === "navigate" || x === "browse" && C === "headers") {
            if (C === "headers") {
              const P = Math.min(R - 1, D + 1);
              k(P), b(P);
            } else if (C === "cells") {
              const P = Math.min(R - 1, D + 1);
              k(P), v(F, P);
            }
          }
          break;
        case "ArrowUp":
          if (N.preventDefault(), C === "cells") {
            if (x === "browse") {
              const P = Math.max(0, F - 1);
              w(P), v(P, 0), k(0);
            } else if (x === "navigate")
              if (F > 0) {
                const P = F - 1;
                w(P), v(P, D);
              } else
                S("headers"), y("browse"), b(D);
          }
          break;
        case "ArrowDown":
          if (N.preventDefault(), C === "headers" && x === "browse")
            S("cells"), w(0), k(0), v(0, 0);
          else if (C === "cells") {
            const P = T - 1;
            if (x === "browse") {
              const se = Math.min(P, F + 1);
              w(se), v(se, 0), k(0);
            } else if (x === "navigate" && F < P) {
              const se = F + 1;
              w(se), v(se, D);
            }
          }
          break;
        case "Home":
          N.preventDefault(), C === "headers" ? (k(0), b(0)) : C === "cells" && (N.ctrlKey ? (w(0), k(0), v(0, 0)) : (k(0), v(F, 0)));
          break;
        case "End":
          if (N.preventDefault(), C === "headers") {
            const P = R - 1;
            k(P), b(P);
          } else if (C === "cells")
            if (N.ctrlKey) {
              const P = T - 1, se = R - 1;
              w(P), k(se), v(P, se);
            } else {
              const P = R - 1;
              k(P), v(F, P);
            }
          break;
        case " ":
          if (N.preventDefault(), C === "headers" && x === "navigate") {
            const P = t[D];
            P && B(P.key);
          } else C === "cells" && x === "navigate" && A(F);
          break;
      }
    }, [
      C,
      x,
      D,
      F,
      R,
      T,
      t,
      v,
      b,
      B,
      A
    ]);
    Ae(() => {
      const N = $.current;
      if (N)
        return N.addEventListener("keydown", E), () => N.removeEventListener("keydown", E);
    }, [E]);
    const z = ge(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": p,
        "nhsuk-table--bordered": g,
        "nhsuk-table--striped": M,
        "nhsuk-table--compact": u === "compact"
      },
      h
    );
    return /* @__PURE__ */ r.jsxs(
      "table",
      {
        ref: $,
        className: z,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": f,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { ref: I, role: "row", children: t.map((N, G) => {
            const P = n?.find((de) => de.key === N.key), se = !!P, me = C === "headers" && D === G;
            return /* @__PURE__ */ r.jsx(
              "th",
              {
                className: ge("sortable-header", {
                  "sortable-header--focused": me
                }),
                role: "columnheader",
                tabIndex: me ? 0 : -1,
                onClick: () => B(N.key),
                onKeyDown: (de) => {
                  (de.key === "Enter" || de.key === " ") && (de.preventDefault(), B(N.key));
                },
                "aria-sort": se ? P?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ r.jsx("span", { className: "header-label", children: N.label }),
                  se && /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    n && n.length > 1 && /* @__PURE__ */ r.jsx("span", { className: "sort-priority", children: n.findIndex((de) => de.key === N.key) + 1 }),
                    /* @__PURE__ */ r.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: P?.direction === "asc" ? /* @__PURE__ */ r.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ r.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              N.key
            );
          }) }) }),
          /* @__PURE__ */ r.jsx("tbody", { ref: _, className: "nhsuk-table__body", role: "rowgroup", children: j.map((N, G) => {
            const P = o === G, se = C === "cells" && F === G;
            return /* @__PURE__ */ r.jsx(
              "tr",
              {
                role: "row",
                className: ge("data-row", {
                  "data-row--selected": P,
                  "data-row--focused": se
                }),
                "aria-selected": P,
                children: t.map((me, de) => {
                  const J = me.tableRenderer ? me.tableRenderer(N) : me.render ? me.render(N) : N[me.key], O = C === "cells" && F === G && D === de, Y = () => typeof J == "boolean" ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                    /* @__PURE__ */ r.jsx("span", { "aria-hidden": "true", children: J ? "✓" : "✗" }),
                    /* @__PURE__ */ r.jsx("span", { className: "sr-only", children: J ? "Yes" : "No" })
                  ] }) : String(J ?? "");
                  return /* @__PURE__ */ r.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ge("data-cell", {
                        "data-cell--focused": O
                      }),
                      tabIndex: O ? 0 : -1,
                      onClick: () => A(G),
                      children: Y()
                    },
                    me.key
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
Zu.displayName = "AriaDataGrid";
const Xo = ({
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
  const h = Le(null), m = Le(null), g = Le(null), M = ue((C, S) => {
    d || (m.current = S, C.dataTransfer.effectAllowed = "move", C.dataTransfer.setData("text/plain", S));
  }, [d]), p = ue((C, S) => {
    d || m.current === S || (C.preventDefault(), C.dataTransfer.dropEffect = "move", g.current = S);
  }, [d]), u = ue((C, S) => {
    if (d) return;
    C.preventDefault();
    const x = m.current;
    if (!x || x === S) return;
    const y = e.findIndex((T) => T.key === x), R = e.findIndex((T) => T.key === S);
    if (y !== -1 && R !== -1) {
      const T = [...e], [j] = T.splice(y, 1);
      T.splice(R, 0, j), n(T);
    }
    m.current = null, g.current = null;
  }, [d, e, n]), H = ue(() => {
    m.current = null, g.current = null;
  }, []), $ = ue((C) => {
    const S = t.find((x) => x.key === C);
    return S ? S.label : C;
  }, [t]), I = ue((C) => ["red", "orange", "blue", "aqua-green", "grey"][C] || "grey", []), _ = ue((C) => {
    if (d) return;
    const S = e.map(
      (x) => x.key === C ? { ...x, direction: x.direction === "asc" ? "desc" : "asc" } : x
    );
    n(S);
  }, [e, n, d]), F = ue((C) => {
    if (d) return;
    const S = e.filter((x) => x.key !== C);
    n(S);
  }, [e, n, d]), w = ue(() => {
    d || n([]);
  }, [n, d]), D = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const C = e.map((S, x) => {
      const y = S.direction === "asc" ? "ascending" : "descending";
      return `${x + 1}. ${$(S.key)} (${y})`;
    });
    if (C.length === 1)
      return `Sorted by: ${C[0]}`;
    if (C.length === 2)
      return `Sorted by: ${C.join(" and ")}`;
    {
      const S = C.pop();
      return `Sorted by: ${C.join(", ")}, and ${S}`;
    }
  }, k = $e(() => {
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
        children: D()
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
          "aria-describedby": k,
          children: e.map((C, S) => /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (x) => M(x, C.key),
              onDragOver: (x) => p(x, C.key),
              onDrop: (x) => u(x, C.key),
              onDragEnd: H,
              onClick: () => _(C.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": C.key,
              children: /* @__PURE__ */ r.jsx(
                et,
                {
                  color: I(S),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => F(C.key),
                  disabled: d,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ r.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${S + 1}`, children: S + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: $(C.key) }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (x) => {
                          x.stopPropagation(), _(C.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${$(C.key)}. Currently ${C.direction === "asc" ? "ascending" : "descending"}`,
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
        Qe,
        {
          variant: "secondary",
          onClick: w,
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
function Ju(e, t) {
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
    isLoading: M = !1,
    loadingComponent: p,
    error: u = null,
    errorComponent: H,
    "data-testid": $,
    actions: I,
    actionsMinGap: _ = 16,
    forceActionsAbove: F = !1
  } = t, D = Le(
    g || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, k = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), C = `${D}-description`, S = `${D}-navigation-help`, {
    dataComparator: x = (L, V) => JSON.stringify(L) === JSON.stringify(V),
    filterFunction: y = (L) => L,
    booleanRenderer: R = (L) => L ? "✓" : "✗"
  } = a || {}, T = s !== void 0, j = s ?? 0, [v, b] = De({
    focusArea: "tabs",
    focusedTabIndex: j,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), B = $e(() => ({
    selectedIndex: j,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [j]), [A, E] = vo(Ju, B);
  Ae(() => {
    const L = A.tabLoadingStates.length, V = o.length;
    L !== V && E({ type: "ADJUST_ARRAYS", payload: { newLength: V } });
  }, [o.length]), Ae(() => {
    T && E({ type: "SET_SELECTED_INDEX", payload: j });
  }, [j, T]), Ae(() => {
    b((L) => ({
      ...L,
      focusArea: "tabs",
      focusedTabIndex: A.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [A.selectedIndex]), Ae(() => {
    l && l(A.globalSelectedRowData);
  }, [A.globalSelectedRowData, l]);
  const z = ue(
    (L, V) => x(L, V),
    [x]
  ), N = ue(
    (L) => {
      L >= 0 && L < o.length && !o[L].disabled && (E({ type: "SET_SELECTED_INDEX", payload: L }), b((V) => ({
        ...V,
        focusedTabIndex: L,
        focusArea: "tabs"
      })), i?.(L));
    },
    [o, i]
  ), G = Le(!1), P = ue(
    (L, V) => {
      if (!V?.force && !G.current && L === 0) {
        G.current = !0;
        return;
      }
      G.current = !0, setTimeout(() => {
        const re = se.current[L], te = re?.parentElement;
        if (re && te) {
          const K = re.offsetLeft, oe = re.offsetWidth, ye = te.clientWidth, ve = K - ye / 2 + oe / 2;
          try {
            te.scrollTo({
              left: Math.max(0, ve),
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
          tabListElementExists: !!te
        });
      }, 50);
    },
    []
  ), se = Le([]), me = Le([]), de = ue(
    (L, V) => {
      const re = A.sortConfig || [], te = re.find(
        (ye) => ye.key === V
      );
      let K;
      te ? te.direction === "asc" ? K = re.map(
        (ye) => ye.key === V ? { ...ye, direction: "desc" } : ye
      ) : K = re.filter(
        (ye) => ye.key !== V
      ) : K = [...re, { key: V, direction: "asc" }], E({
        type: "SET_SORT",
        payload: K
      }), o[L].onSort?.(V);
    },
    [A.sortConfig, o]
  ), J = ue(
    (L) => {
      setTimeout(() => {
        const V = document.querySelector(
          `[data-tab-panel="${A.selectedIndex}"] th:nth-child(${L + 1})`
        );
        V && V.focus();
      }, 0);
    },
    [A.selectedIndex]
  ), O = ue(
    (L) => R(L),
    [R]
  ), Y = ue(
    (L, V) => {
      setTimeout(() => {
        const re = document.querySelector(
          `[data-tab-panel="${A.selectedIndex}"] tbody tr:nth-child(${L + 1}) td:nth-child(${V + 1})`
        );
        re && re.focus();
      }, 0);
    },
    [A.selectedIndex]
  );
  Ae(() => {
    v.isGridActive && (v.focusArea === "headers" ? setTimeout(() => {
      J(v.focusedHeaderIndex);
    }, 0) : v.focusArea === "cells" && setTimeout(() => {
      Y(
        v.focusedRowIndex,
        v.focusedColumnIndex
      );
    }, 0));
  }, [
    v.focusArea,
    v.isGridActive,
    v.focusedHeaderIndex,
    v.focusedRowIndex,
    v.focusedColumnIndex,
    J,
    Y
  ]), Ae(() => {
    P(A.selectedIndex);
  }, [A.selectedIndex, P]);
  const Z = ue(
    (L, V) => {
      const { key: re } = L, te = o[A.selectedIndex], K = te?.columns.length || 0;
      switch (re) {
        case "ArrowLeft":
          L.preventDefault();
          const oe = Math.max(0, V - 1);
          b((Se) => ({
            ...Se,
            focusedHeaderIndex: oe
          })), J(oe);
          break;
        case "ArrowRight":
          L.preventDefault();
          const ye = Math.min(K - 1, V + 1);
          b((Se) => ({
            ...Se,
            focusedHeaderIndex: ye
          })), J(ye);
          break;
        case "ArrowUp":
          L.preventDefault(), b((Se) => ({
            ...Se,
            focusArea: "tabs",
            focusedTabIndex: A.selectedIndex
          })), P(A.selectedIndex), se.current[A.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          L.preventDefault(), b((Se) => ({
            ...Se,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: V,
            isGridActive: !0
          }));
          break;
        case "Home":
          L.preventDefault(), b((Se) => ({ ...Se, focusedHeaderIndex: 0 })), J(0);
          break;
        case "End":
          L.preventDefault();
          const ve = K - 1;
          b((Se) => ({
            ...Se,
            focusedHeaderIndex: ve
          })), J(ve);
          break;
        case "Enter":
        case " ":
          L.preventDefault();
          const ke = te?.columns[V]?.key;
          ke && de(A.selectedIndex, ke);
          break;
      }
    },
    [
      o,
      A.selectedIndex,
      de,
      b,
      J,
      Y,
      se
    ]
  ), W = ue(
    (L, V, re) => {
      const { key: te } = L, K = o[A.selectedIndex], oe = K?.data.length || 0, ye = K?.columns.length || 0;
      switch (te) {
        case "ArrowUp":
          if (L.preventDefault(), V === 0)
            b((pe) => ({
              ...pe,
              focusArea: "headers",
              focusedHeaderIndex: re,
              isGridActive: !1
            })), J(re);
          else {
            const pe = V - 1;
            b((Te) => ({
              ...Te,
              focusedRowIndex: pe
            })), Y(pe, re);
          }
          break;
        case "ArrowDown":
          L.preventDefault();
          const ve = Math.min(oe - 1, V + 1);
          b((pe) => ({
            ...pe,
            focusedRowIndex: ve
          })), Y(ve, re);
          break;
        case "ArrowLeft":
          L.preventDefault();
          const ke = Math.max(0, re - 1);
          b((pe) => ({
            ...pe,
            focusedColumnIndex: ke
          })), Y(V, ke);
          break;
        case "ArrowRight":
          L.preventDefault();
          const Se = Math.min(ye - 1, re + 1);
          b((pe) => ({
            ...pe,
            focusedColumnIndex: Se
          })), Y(V, Se);
          break;
        case "Home":
          L.preventDefault(), L.ctrlKey ? (b((pe) => ({
            ...pe,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), Y(0, 0)) : (b((pe) => ({ ...pe, focusedColumnIndex: 0 })), Y(V, 0));
          break;
        case "End":
          if (L.preventDefault(), L.ctrlKey) {
            const pe = oe - 1, Te = ye - 1;
            b((Be) => ({
              ...Be,
              focusedRowIndex: pe,
              focusedColumnIndex: Te
            })), Y(pe, Te);
          } else {
            const pe = ye - 1;
            b((Te) => ({
              ...Te,
              focusedColumnIndex: pe
            })), Y(V, pe);
          }
          break;
        case "Enter":
        case " ":
          if (L.preventDefault(), K && K.data[V]) {
            const pe = K.data.some(
              (Oe) => "ews_data" in Oe
            ) ? y(K.data, A.filters) : K.data, Te = A.sortConfig;
            let Be = pe;
            if (Te && Te.length > 0 && (Be = [...pe].sort((Oe, Ee) => {
              for (const { key: tt, direction: Mt } of Te) {
                let mt = Oe[tt], ct = Ee[tt];
                const Ue = K.columns.find(
                  (fn) => fn.key === tt
                );
                if (Ue?.tableRenderer ? (mt = Ue.tableRenderer(Oe), ct = Ue.tableRenderer(Ee)) : Ue?.render && (mt = Ue.render(Oe), ct = Ue.render(Ee)), mt == null && ct == null) continue;
                if (mt == null) return Mt === "asc" ? -1 : 1;
                if (ct == null) return Mt === "asc" ? 1 : -1;
                let Ve = 0;
                if (typeof mt == "number" && typeof ct == "number" ? Ve = mt - ct : Ve = String(mt).localeCompare(
                  String(ct),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Ve !== 0)
                  return Mt === "asc" ? Ve : -Ve;
              }
              return 0;
            })), Be[V]) {
              const Oe = Be[V], tt = A.globalSelectedRowData && z(A.globalSelectedRowData, Oe) ? null : Oe;
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
      A.selectedIndex,
      A.filters,
      A.sortConfig,
      y,
      z,
      E,
      b,
      J,
      Y
    ]
  ), ae = ue(
    (L, V) => y(L, V),
    [y]
  );
  if (yo(
    n,
    () => ({
      selectTab: (L) => {
        L >= 0 && L < o.length && (E({ type: "SET_SELECTED_INDEX", payload: L }), i?.(L));
      },
      refreshData: (L) => {
        console.log("Refreshing data for tab:", L ?? "all");
      },
      exportData: (L) => {
        const V = L ?? A.selectedIndex, re = o[V];
        return re ? re.data : [];
      },
      getSelectedRows: (L) => A.globalSelectedRowData ? [] : [],
      clearSelection: (L) => {
        E({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (L) => {
        E({ type: "SET_FILTERS", payload: L });
      }
    }),
    [A.selectedIndex, A.selectedRows, o, i]
  ), M)
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${f}`,
        "data-testid": $,
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
        "data-testid": $,
        children: H || /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ r.jsx("p", { children: u })
        ] })
      }
    );
  const ne = Le(null), le = Le(null), ce = Le(null), [be, Me] = De(!0);
  Ae(() => {
    if (!I) {
      Me(!1);
      return;
    }
    if (F) {
      Me(!1);
      return;
    }
    function L() {
      if (!ne.current || !le.current || !ce.current) return;
      const te = ne.current.clientWidth, K = Array.from(
        le.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), oe = K.reduce((Se, pe) => Se + pe.offsetWidth, 0), ye = ce.current.offsetWidth, ve = Math.max(8 * (K.length - 1), 0), ke = oe + ve + ye + _ <= te;
      Me(ke);
    }
    const V = requestAnimationFrame(() => L()), re = new ResizeObserver(() => L());
    return ne.current && re.observe(ne.current), le.current && re.observe(le.current), () => {
      cancelAnimationFrame(V), re.disconnect();
    };
  }, [I, _, F, o.length]);
  const je = ce, Ne = ue(() => je.current ? Array.from(
    je.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((L) => !L.hasAttribute("disabled")) : [], []), X = ue(
    (L) => {
      const V = Ne();
      if (!V.length) return;
      const re = Math.max(0, Math.min(L, V.length - 1));
      V[re].focus(), b((te) => ({ ...te, focusArea: "actions", focusedActionIndex: re }));
    },
    [Ne]
  ), q = ue(() => X(0), [X]), ee = ue(
    (L, V) => {
      const { key: re } = L, te = o.length - 1;
      switch (re) {
        case "ArrowUp": {
          I && !be && (L.preventDefault(), q());
          break;
        }
        case "ArrowLeft": {
          L.preventDefault();
          const K = V > 0 ? V - 1 : te;
          N(K), P(K), se.current[K]?.focus();
          break;
        }
        case "ArrowRight": {
          if (L.preventDefault(), V === te && I && be) {
            q();
            return;
          }
          const K = V < te ? V + 1 : 0;
          N(K), P(K), se.current[K]?.focus();
          break;
        }
        case "ArrowDown": {
          L.preventDefault(), b((K) => ({
            ...K,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          L.preventDefault(), N(0), P(0), se.current[0]?.focus();
          break;
        }
        case "End": {
          L.preventDefault(), N(te), P(te), se.current[te]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          L.preventDefault(), N(V);
          break;
        }
        case "Tab": {
          !L.shiftKey && V === te && I && be && q();
          break;
        }
      }
    },
    [o.length, N, P, I, be, q]
  ), Q = ue((L) => {
    const { key: V } = L, re = Ne();
    if (!re.length) return;
    const te = re.findIndex((K) => K === document.activeElement);
    switch (V) {
      case "ArrowLeft": {
        if (be)
          if (te > 0)
            L.preventDefault(), X(te - 1);
          else {
            L.preventDefault();
            const K = o.length - 1;
            N(K), P(K), se.current[K]?.focus(), b((oe) => ({ ...oe, focusArea: "tabs", focusedTabIndex: K }));
          }
        break;
      }
      case "ArrowRight": {
        be && (te < re.length - 1 ? (L.preventDefault(), X(te + 1)) : (L.preventDefault(), N(0), P(0), se.current[0]?.focus(), b((K) => ({ ...K, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (be)
          L.preventDefault(), b((K) => ({ ...K, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          L.preventDefault();
          const K = A.selectedIndex;
          se.current[K]?.focus(), b((oe) => ({ ...oe, focusArea: "tabs", focusedTabIndex: K }));
        }
        break;
      }
    }
  }, [Ne, be, X, o.length, N, P, A.selectedIndex]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${f}`,
      id: g,
      "data-testid": $,
      ref: ne,
      children: [
        c && !k && /* @__PURE__ */ r.jsx("div", { id: C, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: S,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ r.jsx(
          Xo,
          {
            sortConfig: A.sortConfig || [],
            columns: o.flatMap(
              (L) => L.columns.map((V) => ({ key: V.key, label: V.label }))
            ).filter(
              (L, V, re) => re.findIndex((te) => te.key === L.key) === V
              // Remove duplicates
            ),
            onSortChange: (L) => {
              E({ type: "SET_SORT", payload: L });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        I && !be && /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: ce,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Q,
            children: I
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${be ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? k ? c : C : S,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: le,
              children: o.map((L, V) => {
                const re = V === A.selectedIndex, te = L.disabled || h;
                return /* @__PURE__ */ r.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${L.id}`,
                    "aria-controls": `panel-${L.id}`,
                    "aria-selected": re,
                    "aria-disabled": te,
                    tabIndex: re ? 0 : -1,
                    ref: (K) => {
                      se.current[V] = K;
                    },
                    onClick: () => N(V),
                    onKeyDown: (K) => ee(K, V),
                    disabled: te,
                    className: [
                      "aria-tabs-datagrid__tab",
                      re ? "aria-tabs-datagrid__tab--selected" : "",
                      te ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: L.label }),
                      A.tabLoadingStates[V] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      A.tabErrors[V] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  L.id
                );
              })
            }
          ),
          I && be && /* @__PURE__ */ r.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: ce,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Q,
              children: I
            }
          )
        ] }),
        o.map((L, V) => {
          const re = V === A.selectedIndex;
          return /* @__PURE__ */ r.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${L.id}`,
              "aria-labelledby": `tab-${L.id}`,
              tabIndex: 0,
              hidden: !re,
              ref: (te) => {
                me.current[V] = te;
              },
              className: `aria-tabs-datagrid__panel ${L.className || ""}`,
              "data-tab-panel": V,
              children: re && (() => {
                const te = L.data.some(
                  (oe) => "ews_data" in oe
                ) ? ae(L.data, A.filters) : L.data, K = $e(() => {
                  const oe = A.sortConfig;
                  return !oe || oe.length === 0 ? te : [...te].sort((ye, ve) => {
                    for (const { key: ke, direction: Se } of oe) {
                      let pe = ye[ke], Te = ve[ke];
                      const Be = L.columns.find(
                        (Ee) => Ee.key === ke
                      );
                      if (Be?.tableRenderer ? (pe = Be.tableRenderer(ye), Te = Be.tableRenderer(ve)) : Be?.render && (pe = Be.render(ye), Te = Be.render(ve)), pe == null && Te == null) continue;
                      if (pe == null) return 1;
                      if (Te == null) return -1;
                      let Oe = 0;
                      if (typeof pe == "number" && typeof Te == "number" ? Oe = pe - Te : typeof pe == "boolean" && typeof Te == "boolean" ? Oe = pe === Te ? 0 : pe ? 1 : -1 : Oe = String(pe).localeCompare(
                        String(Te),
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
                }, [te, A.sortConfig, L.columns]);
                return /* @__PURE__ */ r.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": L.ariaLabel,
                    "aria-describedby": L.ariaDescription ? `panel-${L.id}-description` : void 0,
                    children: [
                      L.ariaDescription && /* @__PURE__ */ r.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${L.id}-description`,
                          children: L.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ r.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ r.jsx("tr", { role: "row", children: L.columns.map((oe, ye) => {
                        const ve = A.sortConfig?.find(
                          (pe) => pe.key === oe.key
                        ), ke = !!ve, Se = v.focusArea === "headers" && v.focusedHeaderIndex === ye;
                        return /* @__PURE__ */ r.jsx(
                          "th",
                          {
                            className: `sortable-header ${Se ? "sortable-header--focused" : ""} ${ke ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: Se ? 0 : -1,
                            onClick: () => de(V, oe.key),
                            onKeyDown: (pe) => Z(pe, ye),
                            "aria-sort": ke ? ve?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ r.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ r.jsx("span", { className: "header-label", children: oe.label }),
                              /* @__PURE__ */ r.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ke ? `sort-indicator--${ve?.direction}` : ""}`,
                                  children: [
                                    A.sortConfig && A.sortConfig.length > 0 && A.sortConfig.findIndex(
                                      (pe) => pe.key === oe.key
                                    ) !== -1 && /* @__PURE__ */ r.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${A.sortConfig.findIndex((pe) => pe.key === oe.key) + 1}`,
                                        "data-priority": A.sortConfig.findIndex(
                                          (pe) => pe.key === oe.key
                                        ) + 1,
                                        title: `Sort priority: ${A.sortConfig.findIndex((pe) => pe.key === oe.key) + 1}`,
                                        children: A.sortConfig.findIndex(
                                          (pe) => pe.key === oe.key
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
                          oe.key
                        );
                      }) }) }),
                      /* @__PURE__ */ r.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: K.map((oe, ye) => {
                        const ve = A.globalSelectedRowData && z(A.globalSelectedRowData, oe), ke = v.focusArea === "cells" && v.focusedRowIndex === ye;
                        return /* @__PURE__ */ r.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ve ? "data-row--selected" : ""} ${ke ? "data-row--focused" : ""}`,
                            "aria-selected": ve,
                            children: L.columns.map((Se, pe) => {
                              const Te = oe[Se.key];
                              let Be;
                              Se.tableRenderer ? Be = Se.tableRenderer(oe) : Se.render ? Be = Se.render(oe) : Be = Te;
                              const Oe = v.focusArea === "cells" && v.focusedRowIndex === ye && v.focusedColumnIndex === pe, Ee = () => {
                                if (Se.customRenderer) {
                                  const tt = Se.customRenderer(
                                    Te,
                                    oe
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
                                return typeof Te == "boolean" && Be === Te ? /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
                                  O(Te),
                                  /* @__PURE__ */ r.jsx("span", { className: "nhsuk-u-visually-hidden", children: Te ? "Yes" : "No" })
                                ] }) : at.isValidElement(Be) || typeof Be != "object" ? Be ?? "" : Be;
                              };
                              return /* @__PURE__ */ r.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Oe ? "data-cell--focused" : ""}`,
                                  tabIndex: Oe ? 0 : -1,
                                  onClick: () => {
                                    const Mt = A.globalSelectedRowData && z(
                                      A.globalSelectedRowData,
                                      oe
                                    ) ? null : oe;
                                    E({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: Mt
                                    });
                                  },
                                  onKeyDown: (tt) => W(tt, ye, pe),
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
            L.id
          );
        })
      ]
    }
  );
}), Rn = {
  asc: "↑",
  desc: "↓"
}, Qu = (e) => [...e].sort((t, n) => t.priority - n.priority);
function Jr(e) {
  return e.map((t, n) => ({
    ...t,
    priority: n
  }));
}
function ef(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function tf(e, t) {
  const n = t.find((a) => a.id === e);
  return n ? n.priority > 0 : !1;
}
function nf(e, t) {
  const n = t.find((o) => o.id === e), a = ef(t);
  return n ? n.priority < a : !1;
}
const mx = ({
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
  const f = $e(() => Qu(e), [e]), h = ue(($) => {
    if (l) return;
    const I = e.map(
      (_) => _.id === $ ? { ..._, direction: _.direction === "asc" ? "desc" : "asc" } : _
    );
    t(I);
  }, [e, t, l]), m = ue(($) => {
    if (l) return;
    const I = e.findIndex((F) => F.id === $);
    if (I <= 0) return;
    const _ = [...e];
    [_[I], _[I - 1]] = [_[I - 1], _[I]], t(Jr(_));
  }, [e, t, l]), g = ue(($) => {
    if (l) return;
    const I = e.findIndex((F) => F.id === $);
    if (I >= e.length - 1 || I === -1) return;
    const _ = [...e];
    [_[I], _[I + 1]] = [_[I + 1], _[I]], t(Jr(_));
  }, [e, t, l]), M = ue(($) => {
    if (l) return;
    const I = e.filter((_) => _.id !== $);
    t(Jr(I));
  }, [e, t, l]), p = ue(() => {
    l || t([]);
  }, [t, l]), u = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const $ = f.map((I, _) => {
      const F = I.direction === "asc" ? "ascending" : "descending";
      return `${_ + 1}. ${I.label} (${F})`;
    });
    if ($.length === 1)
      return `Sorted by: ${$[0]}`;
    if ($.length === 2)
      return `Sorted by: ${$.join(" and ")}`;
    {
      const I = $.pop();
      return `Sorted by: ${$.join(", ")}, and ${I}`;
    }
  }, H = $e(() => {
    const $ = ["sort-description"];
    return i && $.push("sort-help"), c && $.push(c), $.join(" ");
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
        "aria-describedby": H,
        children: [
          /* @__PURE__ */ r.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          f.map(($) => /* @__PURE__ */ r.jsx(
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
                  onClose: () => M($.id),
                  disabled: l,
                  children: /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-priority", children: $.priority + 1 }),
                    /* @__PURE__ */ r.jsx("span", { className: "sort-status-control__tag-label", children: $.label }),
                    /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => h($.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${$.label}. Currently ${$.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: $.direction === "asc" ? Rn.asc : Rn.desc
                      }
                    ),
                    /* @__PURE__ */ r.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m($.id),
                          disabled: l || !tf($.id, e),
                          "aria-label": `Move ${$.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ r.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => g($.id),
                          disabled: l || !nf($.id, e),
                          "aria-label": `Move ${$.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            $.id
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
      Rn.asc,
      "/",
      Rn.desc,
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
], rf = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), af = (e, t) => t ? e.filter((n) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (n.ews_score < a || n.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(n.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(n.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(n.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(n.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && n.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && n.fast_track !== t.fastTrack);
}) : e, sf = (e) => {
  if (typeof e == "boolean") {
    const n = ga.find((a) => a.value === e);
    return n ? n.icon : null;
  }
  const t = ga.find((n) => n.value === e);
  return t ? t.icon : String(e);
}, of = (e) => `${e.name}-${e.bed_name}`, lf = () => ({
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
}), gx = (e) => {
  const t = lf();
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
}, cf = {
  dataComparator: rf,
  filterFunction: af,
  booleanRenderer: sf,
  getDataId: of
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
  } = n, h = t.find((I) => I.key === a), m = h?.cardRenderer ? h.cardRenderer(e) : h?.render ? h.render(e) : e[a || "name"] || "Untitled", g = () => o.filter((_) => !i.includes(_) && e[_]).slice(0, 3).map((_) => {
    const F = t.find((C) => C.key === _), w = e[_], D = c[_] ? c[_](w, e) : F?.cardRenderer ? F.cardRenderer(e) : F?.render ? F.render(e) : w;
    return `${F?.label || _}: ${D}`;
  }).join(" • "), M = () => s.length === 0 ? null : s.filter((I) => e[I.fieldKey] !== void 0).map((I) => {
    const _ = e[I.fieldKey], F = I.render ? I.render(_, e) : _;
    return `<span class="nhsuk-tag ${df(I, _)}">${F}</span>`;
  }).join(""), p = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", u = M(), H = g(), $ = u ? `${H}${u ? `<div class="adaptive-card__badges">${u}</div>` : ""}` : H;
  return {
    variant: p(),
    heading: String(m),
    descriptionHtml: $,
    className: `adaptive-card ${f}`,
    "aria-label": `Record for ${m}`
  };
}
function df(e, t) {
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
const uf = {
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
}, Zo = ({
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
              color: hf(ti(f)),
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
}, Jo = ({ data: e, onAction: t }) => /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ r.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ r.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ r.jsx(
        et,
        {
          color: pf(e.status || "active"),
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
] }), Qo = ({
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
] }), ei = ({
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
            s !== void 0 && /* @__PURE__ */ r.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${ff(s)}`, children: [
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
function ti(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function ff(e) {
  return ti(e);
}
function hf(e) {
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
function pf(e) {
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
const mf = [
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
], ni = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", gf = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, xf = (e) => ni(e) === "high" || e.status === "urgent" ? "primary" : "default", bf = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), n = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${n})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, yf = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: mf,
  hiddenFields: [],
  getPriority: ni,
  getStatus: gf,
  getVariant: xf,
  fieldRenderers: bf,
  classPrefix: "adaptive-card--healthcare"
}, vf = {
  patient: (e, t, n) => {
    const a = n.getPriority?.(e) || "medium", o = n.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ r.jsx(
      Zo,
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
      Jo,
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
      Qo,
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
      ei,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, wf = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, to = {
  name: "healthcare",
  defaultCardConfig: yf,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: vf,
  fieldTypes: wf
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
function _f(e, t) {
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
function Sf(e, t) {
  const [n, a] = De("cards");
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
function kf(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Cf(e, t, n, a) {
  const o = a ? { ...a.defaultCardConfig, ...n } : { ...uf, ...n };
  if (a && a.cardTemplates) {
    const s = kf(e);
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
const xx = ({
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
  ariaDescription: M,
  orientation: p = "horizontal",
  id: u,
  disabled: H = !1,
  className: $,
  ...I
}) => {
  const _ = Sf(e, t), F = h !== void 0, w = h ?? 0, D = $e(() => {
    if (c.some(
      (q) => q.data && q.data.length > 0 && ro(q.data)
    )) {
      const q = no(n);
      return {
        ...to.defaultCardConfig,
        ...q
      };
    } else
      return no(n);
  }, [n, c]), k = $e(() => c.some(
    (q) => q.data && q.data.length > 0 && ro(q.data)
  ) ? to : void 0, [c]), C = $e(() => ({
    selectedIndex: w,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [w, c.length]), [S, x] = vo(_f, C), y = Le([]), R = Le([]), T = Le([]), j = Le(null), [v, b] = De({
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
  }), B = ue((X) => {
    if (!X.current)
      return { columns: 1, rows: 0 };
    const q = X.current, ee = q.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (ee.length === 0)
      return { columns: 1, rows: 0 };
    const Q = q.offsetWidth, V = ee[0].offsetWidth, re = Math.floor(Q / V) || 1, te = Math.ceil(ee.length / re);
    return { columns: re, rows: te };
  }, []), A = ue((X, q) => ({
    row: Math.floor(X / q),
    col: X % q
  }), []), E = ue((X, q, ee) => X * ee + q, []), z = ue((X, q, ee, Q) => {
    const { row: L, col: V } = A(X, Q);
    let re = L, te = V;
    switch (q) {
      case "up":
        re = Math.max(0, L - 1);
        break;
      case "down":
        re = Math.min(Math.floor((ee - 1) / Q), L + 1);
        break;
      case "left":
        te = Math.max(0, V - 1);
        break;
      case "right":
        te = Math.min(Q - 1, V + 1);
        break;
    }
    const K = E(re, te, Q);
    return Math.min(K, ee - 1);
  }, [A, E]);
  Ae(() => {
    v.isCardNavigationActive && v.focusedCardElementIndex >= 0 && v.cardElements.length > 0 && setTimeout(() => {
      const X = v.cardElements[v.focusedCardElementIndex];
      X && (X.element.focus(), X.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [v.isCardNavigationActive, v.focusedCardElementIndex, v.cardElements.length]), Ae(() => {
    const X = () => {
      if (_ === "cards" && j.current) {
        const { columns: Q, rows: L } = B(j);
        b((V) => ({
          ...V,
          gridColumns: Q,
          gridRows: L
        }));
      }
    }, q = setTimeout(X, 200), ee = () => {
      setTimeout(X, 100);
    };
    return window.addEventListener("resize", ee), () => {
      clearTimeout(q), window.removeEventListener("resize", ee);
    };
  }, [_, c, B]), Ae(() => {
    const X = S.tabLoadingStates.length, q = c.length;
    X !== q && x({ type: "ADJUST_ARRAYS", payload: { newLength: q } });
  }, [c.length, S.tabLoadingStates.length]), Ae(() => {
    F && h !== S.selectedIndex && x({ type: "SET_SELECTED_INDEX", payload: h });
  }, [F, h, S.selectedIndex]);
  const N = ue((X) => {
    X >= 0 && X < c.length && !c[X].disabled && (x({ type: "SET_SELECTED_INDEX", payload: X }), m?.(X));
  }, [c, m]), G = ue((X) => {
    console.log("Card selected:", X), x({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: X
    });
  }, []), P = ue((X) => {
    const q = R.current[X];
    q && (q.focus(), q.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), se = ue((X) => {
    const q = R.current[X];
    if (!q) return [];
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
    ].join(", "), Q = q.querySelectorAll(ee);
    return Array.from(Q).map((L, V) => ({
      id: L.id || `card-${X}-element-${V}`,
      element: L,
      label: L.getAttribute("aria-label") || L.textContent?.trim() || L.getAttribute("title") || `Element ${V + 1}`,
      type: L.tagName.toLowerCase() === "button" ? "button" : L.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(L.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), me = Le(null), de = ue((X) => {
    const q = me.current;
    if (!q) return;
    const ee = document.createElement("div");
    ee.setAttribute("aria-live", "polite"), ee.setAttribute("aria-atomic", "true"), ee.className = "sr-only", ee.textContent = X, q.appendChild(ee), setTimeout(() => {
      q.contains(ee) && q.removeChild(ee);
    }, 1e3);
  }, []), J = ue((X) => {
    const q = X.filter((Q) => Q.sortable !== !1), ee = [
      { value: "", label: "Sort by..." }
    ];
    return q.forEach((Q) => {
      const L = Q.label || Q.key;
      Q.key === "name" ? ee.push(
        { value: `${Q.key}-asc`, label: `${L} (A-Z)` },
        { value: `${Q.key}-desc`, label: `${L} (Z-A)` }
      ) : Q.key === "ews_score" || Q.key.includes("score") ? ee.push(
        { value: `${Q.key}-desc`, label: `${L} (High-Low)` },
        { value: `${Q.key}-asc`, label: `${L} (Low-High)` }
      ) : Q.key === "age" || Q.key.includes("date") || Q.key.includes("time") ? ee.push(
        { value: `${Q.key}-desc`, label: `${L} (Oldest-Youngest)` },
        { value: `${Q.key}-asc`, label: `${L} (Youngest-Oldest)` }
      ) : ee.push(
        { value: `${Q.key}-asc`, label: `${L} (A-Z)` },
        { value: `${Q.key}-desc`, label: `${L} (Z-A)` }
      );
    }), ee;
  }, []), O = ue((X, q) => q ? [...X].sort((ee, Q) => {
    const L = ee[q.key], V = Q[q.key];
    if (L == null && V == null) return 0;
    if (L == null) return 1;
    if (V == null) return -1;
    const re = Number(L), te = Number(V);
    if (!isNaN(re) && !isNaN(te))
      return q.direction === "asc" ? re - te : te - re;
    const K = String(L).toLowerCase(), oe = String(V).toLowerCase(), ye = K.localeCompare(oe);
    return q.direction === "asc" ? ye : -ye;
  }) : X, []), Y = ue((X) => {
    if (!X) {
      b((K) => ({ ...K, cardSortConfig: null })), de("Card sorting cleared");
      return;
    }
    const [q, ee] = X.split("-"), Q = { key: q, direction: ee };
    b((K) => ({ ...K, cardSortConfig: Q }));
    const re = c[S.selectedIndex]?.columns.find((K) => K.key === q)?.label || q;
    de(`Cards sorted by ${re} in ${ee === "asc" ? "ascending" : "descending"} order`);
  }, [c, S.selectedIndex, de]), Z = ue((X) => {
    const Q = c[S.selectedIndex]?.columns.find((V) => V.key === X.key)?.label || X.key, L = X.direction === "asc" ? "ascending" : "descending";
    return `${Q} (${L})`;
  }, [c, S.selectedIndex]), W = ue((X) => {
    const q = c[S.selectedIndex];
    if (o) {
      const ee = S.sortConfig;
      return !ee || ee.length === 0 ? X : [...X].sort((Q, L) => {
        for (const { key: V, direction: re } of ee) {
          let te = Q[V], K = L[V];
          const oe = q?.columns.find((Te) => Te.key === V);
          if (oe?.cardRenderer ? (te = oe.cardRenderer(Q), K = oe.cardRenderer(L)) : oe?.render && (te = oe.render(Q), K = oe.render(L)), te == null && K == null) continue;
          if (te == null) return re === "asc" ? -1 : 1;
          if (K == null) return re === "asc" ? 1 : -1;
          const ye = Number(te), ve = Number(K);
          if (!isNaN(ye) && !isNaN(ve)) {
            const Te = ye - ve;
            if (Te !== 0) return re === "asc" ? Te : -Te;
            continue;
          }
          const ke = String(te).toLowerCase(), Se = String(K).toLowerCase(), pe = ke.localeCompare(Se);
          if (pe !== 0) return re === "asc" ? pe : -pe;
        }
        return 0;
      });
    } else
      return O(X, v.cardSortConfig);
  }, [o, S.sortConfig, v.cardSortConfig, O, c, S.selectedIndex]), ae = ue((X, q) => {
    const ee = se(X), Q = ee[q];
    if (Q) {
      Q.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const L = `Focused on ${Q.label}, ${Q.type} ${q + 1} of ${ee.length} within card`;
      de(L);
    }
  }, [se, de]), ne = ue((X) => {
    y.current[X]?.focus();
  }, []), le = ue(() => {
    const X = T.current[0];
    if (!X) return [];
    const q = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), ee = X.querySelectorAll(q);
    return Array.from(ee);
  }, []), ce = ue((X) => {
    if (X === 0) {
      const q = T.current[0], ee = q?.querySelector(".sort-controls-row");
      if (ee) {
        ee.setAttribute("tabindex", "-1"), ee.focus();
        const L = `Sort controls group with ${le().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        de(L);
      } else q && q.focus();
    } else {
      const q = le(), ee = X - 1, Q = q[ee];
      if (Q) {
        Q.focus();
        const L = Q.tagName.toLowerCase() === "select", V = Q.tagName.toLowerCase() === "button", re = L ? "dropdown" : V ? "button" : "control", te = L ? ". Use Space key to open dropdown" : "", K = `${re} ${ee + 1} of ${q.length}${te}`;
        de(K);
      }
    }
  }, [le, de]), be = ue((X, q) => {
    const { key: ee } = X, Q = c[S.selectedIndex], L = Q?.data.length || 0;
    if (ee === "ArrowLeft" && X.shiftKey) {
      X.preventDefault(), X.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (ee === "ArrowRight" && X.shiftKey) {
      X.preventDefault(), X.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!v.isCardNavigationActive) {
      switch (ee) {
        case "ArrowUp":
          if (X.preventDefault(), q === 0)
            b((K) => ({ ...K, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), ce(0);
          else {
            const K = z(q, "up", L, v.gridColumns);
            K !== q && (b((oe) => ({ ...oe, focusedCardIndex: K })), P(K), de(`Moved to card ${K + 1} of ${L}`));
          }
          break;
        case "ArrowDown":
          X.preventDefault();
          const V = z(q, "down", L, v.gridColumns);
          V !== q && (b((K) => ({ ...K, focusedCardIndex: V })), P(V), de(`Moved to card ${V + 1} of ${L}`));
          break;
        case "ArrowLeft":
          X.preventDefault();
          const re = z(q, "left", L, v.gridColumns);
          re !== q ? (b((K) => ({ ...K, focusedCardIndex: re })), P(re), de(`Moved to card ${re + 1} of ${L}`)) : S.selectedIndex > 0 && (x({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex - 1 }), b((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => ne(S.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          X.preventDefault();
          const te = z(q, "right", L, v.gridColumns);
          te !== q ? (b((K) => ({ ...K, focusedCardIndex: te })), P(te), de(`Moved to card ${te + 1} of ${L}`)) : S.selectedIndex < c.length - 1 && (x({ type: "SET_SELECTED_INDEX", payload: S.selectedIndex + 1 }), b((K) => ({ ...K, focusArea: "tabs" })), setTimeout(() => ne(S.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (Q?.data[q]) {
            X.preventDefault(), b((oe) => ({
              ...oe,
              selectedCardIndex: q
            }));
            const K = se(q);
            K.length > 0 ? (b((oe) => ({
              ...oe,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: K,
              selectedCardIndex: q
              // Ensure selection is maintained
            })), de(`Card ${q + 1} selected and navigation activated. ${K.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : de(`Card ${q + 1} selected.`);
          }
          break;
        case " ":
          if (Q?.data[q]) {
            X.preventDefault(), b((oe) => ({
              ...oe,
              selectedCardIndex: oe.selectedCardIndex === q ? -1 : q
            }));
            const K = v.selectedCardIndex === q;
            de(`Card ${q + 1} ${K ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (ee) {
      case "ArrowUp":
      case "ArrowLeft":
        X.preventDefault();
        const V = Math.max(0, v.focusedCardElementIndex - 1);
        b((oe) => ({ ...oe, focusedCardElementIndex: V })), ae(q, V);
        break;
      case "ArrowDown":
      case "ArrowRight":
        X.preventDefault();
        const re = Math.min(v.cardElements.length - 1, v.focusedCardElementIndex + 1);
        b((oe) => ({ ...oe, focusedCardElementIndex: re })), ae(q, re);
        break;
      case "Enter":
        X.preventDefault();
        const te = v.cardElements[v.focusedCardElementIndex];
        te && (te.element.click(), de(`Activated ${te.label}`));
        break;
      case " ":
        X.preventDefault();
        const K = v.cardElements[v.focusedCardElementIndex];
        if (K) {
          const oe = new MouseEvent("dblclick", { bubbles: !0 });
          K.element.dispatchEvent(oe), de(`Double-clicked ${K.label}`);
        }
        break;
      case "Escape":
        X.preventDefault(), b((oe) => ({
          ...oe,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => P(q), 0), de("Exited card navigation, returned to card level");
        break;
      case "Home":
        X.preventDefault(), v.cardElements.length > 0 && (b((oe) => ({ ...oe, focusedCardElementIndex: 0 })), ae(q, 0));
        break;
      case "End":
        if (X.preventDefault(), v.cardElements.length > 0) {
          const oe = v.cardElements.length - 1;
          b((ye) => ({ ...ye, focusedCardElementIndex: oe })), ae(q, oe);
        }
        break;
    }
  }, [v, S.selectedIndex, c, G, P, ne, b, se, ae, de]), Me = ue((X) => {
    const q = y.current[X], ee = q?.parentElement;
    if (!q || !ee) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const Q = q.getBoundingClientRect(), L = ee.getBoundingClientRect();
    Q.left >= L.left && Q.right <= L.right || (console.log("Tab not visible, scrolling into view (mobile)"), q.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), je = ue((X, q) => {
    if (_ !== "cards")
      return;
    const { key: ee } = X;
    switch (ee) {
      case "ArrowLeft":
        X.preventDefault();
        const Q = q > 0 ? q - 1 : c.length - 1;
        N(Q), b((te) => ({ ...te, focusedTabIndex: Q })), y.current[Q]?.focus(), Me(Q);
        break;
      case "ArrowRight":
        X.preventDefault();
        const L = q < c.length - 1 ? q + 1 : 0;
        N(L), b((te) => ({ ...te, focusedTabIndex: L })), y.current[L]?.focus(), Me(L);
        break;
      case "ArrowDown":
        X.preventDefault();
        const V = c[S.selectedIndex];
        V && V.columns && V.columns.length > 0 ? (b((te) => ({
          ...te,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), ce(0)) : (b((te) => ({
          ...te,
          focusArea: "cards",
          focusedCardIndex: 0
        })), P(0));
        break;
      case "Home":
        X.preventDefault(), N(0), b((te) => ({ ...te, focusedTabIndex: 0 })), y.current[0]?.focus(), Me(0);
        break;
      case "End":
        X.preventDefault();
        const re = c.length - 1;
        N(re), b((te) => ({ ...te, focusedTabIndex: re })), y.current[re]?.focus(), Me(re);
        break;
      case "Enter":
      case " ":
        X.preventDefault(), N(q);
        break;
    }
  }, [c.length, N, _, P, b, Me]), Ne = ue((X, q) => {
    if (_ !== "cards")
      return;
    const { key: ee } = X, Q = c[S.selectedIndex];
    if (q === 0 && !v.isSortControlsActive) {
      switch (ee) {
        case "ArrowUp":
          X.preventDefault(), b((V) => ({
            ...V,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), ne(S.selectedIndex);
          break;
        case "ArrowDown":
          X.preventDefault(), Q?.data && Q.data.length > 0 && (b((V) => ({
            ...V,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), P(0));
          break;
        case "Enter":
        case " ":
          X.preventDefault();
          const L = le();
          if (L.length > 0) {
            b((re) => ({
              ...re,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), ce(1);
            const V = `Entered sort controls navigation mode. ${L.length} controls available. Use arrow keys to navigate between controls.`;
            de(V);
          }
          break;
        case "Escape":
          X.preventDefault(), b((V) => ({
            ...V,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), ne(S.selectedIndex);
          break;
      }
      return;
    }
    if (v.isSortControlsActive) {
      const V = le().length;
      switch (ee) {
        case "ArrowLeft":
          X.preventDefault();
          const re = v.focusedSortControlIndex > 1 ? v.focusedSortControlIndex - 1 : V;
          b((K) => ({ ...K, focusedSortControlIndex: re })), ce(re);
          break;
        case "ArrowRight":
          X.preventDefault();
          const te = v.focusedSortControlIndex < V ? v.focusedSortControlIndex + 1 : 1;
          b((K) => ({ ...K, focusedSortControlIndex: te })), ce(te);
          break;
        case "ArrowDown":
          if (X.preventDefault(), v.isSortControlsActive) {
            const K = v.focusedSortControlIndex < V ? v.focusedSortControlIndex + 1 : 1;
            b((oe) => ({ ...oe, focusedSortControlIndex: K })), ce(K);
          } else
            Q?.data && Q.data.length > 0 && (b((K) => ({
              ...K,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), P(0));
          break;
        case "ArrowUp":
          X.preventDefault(), b((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), ce(0);
          break;
        case "Escape":
          X.preventDefault(), b((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), ce(0);
          break;
      }
    }
  }, [_, c, S.selectedIndex, v.isSortControlsActive, v.focusedSortControlIndex, ce, ne, P, b, de]);
  if (_ === "cards") {
    const X = c[S.selectedIndex];
    return /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${$ || ""}`, children: [
      /* @__PURE__ */ r.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": g,
            "aria-describedby": `${M || ""} ${u ? `${u}-navigation-help` : ""}`.trim(),
            "aria-orientation": p,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((q, ee) => {
              const Q = ee === S.selectedIndex, L = q.disabled || H;
              return /* @__PURE__ */ r.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${q.id}`,
                  "aria-controls": `panel-${q.id}`,
                  "aria-selected": Q,
                  "aria-disabled": L,
                  tabIndex: Q ? 0 : -1,
                  ref: (V) => {
                    y.current[ee] = V;
                  },
                  onClick: () => N(ee),
                  onKeyDown: (V) => je(V, ee),
                  disabled: L,
                  className: [
                    "aria-tabs-datagrid__tab",
                    Q ? "aria-tabs-datagrid__tab--selected" : "",
                    L ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: q.label }),
                    S.tabLoadingStates[ee] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    S.tabErrors[ee] && /* @__PURE__ */ r.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
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
          Xo,
          {
            sortConfig: S.sortConfig || [],
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
            tabIndex: v.focusArea === "sort-controls" ? 0 : -1,
            ref: (q) => {
              T.current[0] = q;
            },
            onKeyDown: (q) => Ne(q, 0),
            children: /* @__PURE__ */ r.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ r.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ r.jsx("label", { htmlFor: `card-sort-${X.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ r.jsx(
                  zn,
                  {
                    id: `card-sort-${X.id}`,
                    name: `card-sort-${X.id}`,
                    value: v.cardSortConfig ? `${v.cardSortConfig.key}-${v.cardSortConfig.direction}` : "",
                    onChange: (q) => Y(q.target.value),
                    className: "sort-select",
                    children: J(X.columns).map((q) => /* @__PURE__ */ r.jsx("option", { value: q.value, children: q.label }, q.value))
                  }
                )
              ] }),
              v.cardSortConfig && /* @__PURE__ */ r.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ r.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  Z(v.cardSortConfig)
                ] }),
                /* @__PURE__ */ r.jsx(
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
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: j,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${X?.label || "Data"} cards in ${v.gridRows} rows and ${v.gridColumns} columns`,
          "aria-rowcount": v.gridRows,
          "aria-colcount": v.gridColumns,
          id: `panel-${X?.id}`,
          "aria-labelledby": `tab-${X?.id}`,
          children: W(X?.data || []).map((q, ee) => {
            const Q = v.selectedCardIndex === ee, L = v.focusedCardIndex === ee && v.focusArea === "cards", V = v.focusedCardIndex === ee && v.focusArea === "card" && v.isCardNavigationActive, re = ee === 0 && v.focusArea !== "cards", te = L || re, K = A(ee, v.gridColumns);
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
                        R.current[ee] = ke;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        Q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        V ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": K.col + 1,
                      "aria-selected": Q,
                      "aria-expanded": V,
                      "aria-description": V ? `Card navigation active. ${v.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: te ? 0 : -1,
                      onClick: () => {
                        b((ke) => ({
                          ...ke,
                          selectedCardIndex: ke.selectedCardIndex === ee ? -1 : ee
                        })), G(q);
                      },
                      onKeyDown: (ke) => be(ke, ee),
                      onFocus: () => {
                        b((ke) => ke.focusedCardIndex !== ee || ke.focusArea !== "cards" ? {
                          ...ke,
                          focusedCardIndex: ee,
                          focusArea: "cards"
                        } : ke);
                      },
                      children: ve
                    }
                  )
                },
                `card-${ee}`
              );
            }
            const oe = Cf(q, X.columns, D, k), ye = [
              oe.className || "",
              Q ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              L ? "aria-tabs-datagrid-adaptive__card--focused" : "",
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
                      Q ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      L ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      V ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": K.col + 1,
                    "aria-selected": Q,
                    "aria-expanded": V,
                    onKeyDown: (ve) => {
                      ve.key === "Enter" && (ve.preventDefault(), b((ke) => ({
                        ...ke,
                        selectedCardIndex: ee
                      }))), be(ve, ee);
                    },
                    children: /* @__PURE__ */ r.jsx(
                      Ko,
                      {
                        ...oe,
                        ref: (ve) => {
                          R.current[ee] = ve;
                        },
                        className: ye,
                        "aria-label": `${oe["aria-label"] || oe.heading}. ${V ? `Card navigation active with ${v.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: te ? 0 : -1,
                        onClick: () => {
                          b((ve) => ({
                            ...ve,
                            selectedCardIndex: ve.selectedCardIndex === ee ? -1 : ee
                          })), G(q);
                        },
                        onKeyDown: (ve) => be(ve, ee),
                        onFocus: () => {
                          v.isCardNavigationActive || b((ve) => ve.focusedCardIndex !== ee || ve.focusArea !== "cards" ? {
                            ...ve,
                            focusedCardIndex: ee,
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
              `card-${ee}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          ref: me,
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
  return _ === "hybrid" ? /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${$ || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ma,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: g,
        ariaDescription: M,
        orientation: p,
        id: u,
        disabled: H,
        selectedIndex: h,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ r.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${$ || ""}`, children: [
    s && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ r.jsx(
      ma,
      {
        tabPanels: c,
        dataConfig: f,
        ariaLabel: g,
        ariaDescription: M,
        orientation: p,
        id: u,
        disabled: H,
        selectedIndex: h,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...I
      }
    ),
    i && /* @__PURE__ */ r.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, ri = (e) => {
  const t = ga.find((n) => n.value === e);
  return t ? t.icon : null;
}, jf = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = n.discountedPrice || n.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(n.category) || t.inStock !== void 0 && n.inStock !== t.inStock || t.minRating !== void 0 && n.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => n.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => ri(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Nf = (e) => ss(e, [
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
]), Tf = {
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
  booleanRenderer: (e) => ri(e),
  getDataId: (e) => `financial-${e.id}`
}, $f = (e) => ss(e, [
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
]), Df = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: jf,
    createTabs: Nf
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Tf,
    createTabs: $f
  }
}, ao = (e, t) => {
  const n = Df[e];
  return {
    dataConfig: n.dataConfig,
    tabPanels: n.createTabs(t)
  };
}, ai = [
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
], If = [
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
], Mf = [
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
], Lf = [
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
], Ff = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((n) => !(t.status && !t.status.includes(n.status) || t.minValue && n.value < t.minValue || t.hotLeadsOnly && !n.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ r.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Af = () => [
  {
    id: "patients",
    label: "Patients",
    data: ai,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Zo,
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
    data: If,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Jo,
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
    data: Mf,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      Qo,
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
    data: Lf,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ r.jsx(
      ei,
      {
        data: e,
        columns: t,
        onSelect: (n) => console.log("Selected vitals:", n),
        onAction: (n, a) => console.log("Vitals action:", n, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Bf = () => {
  const [e, t] = De("healthcare"), n = $e(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: cf,
      tabPanels: Af(),
      data: ai
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
      dataConfig: Ff,
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
}, bx = Bf, si = (e) => /* @__PURE__ */ r.jsx(So, { ...e }), yx = ({
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
  className: M,
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
    /* @__PURE__ */ r.jsx(qo, { ...s }),
    /* @__PURE__ */ r.jsx(To, { ...u }),
    /* @__PURE__ */ r.jsx(si, { className: M, ...p, children: /* @__PURE__ */ r.jsx(ko, { size: o, children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsxs(vn, { width: a, children: [
      t && /* @__PURE__ */ r.jsx($t, { size: "l", ...n, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ r.jsx($o, { ...l })
  ] });
}, vx = ({
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
    /* @__PURE__ */ r.jsx(qo, { ...s }),
    /* @__PURE__ */ r.jsx(To, { ...M }),
    /* @__PURE__ */ r.jsxs(si, { className: m, ...g, children: [
      d && /* @__PURE__ */ r.jsx(la, { ...d }),
      /* @__PURE__ */ r.jsx(ko, { size: o, children: /* @__PURE__ */ r.jsx(Gt, { children: /* @__PURE__ */ r.jsxs(vn, { width: a, children: [
        t && /* @__PURE__ */ r.jsx($t, { size: "l", ...n, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ r.jsx($o, { ...l })
  ] });
}, oi = ({
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
oi.displayName = "ForwardLink";
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
function ii() {
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
function wx(e) {
  const { width: t, values: n } = ii();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = n[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Ef(e = {}) {
  const { enabled: t = !0, paramSelected: n = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = U.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(n)), [i, l] = U.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return U.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(n, String(o)) : d.delete(n), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, n, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Rf = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
), Pf = ({ className: e }) => /* @__PURE__ */ r.jsx(
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
function Hf(e) {
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
    a11y: M,
    className: p,
    getId: u = (ie) => ie.id,
    orientation: H = "vertical",
    autoEnableThirdColumn: $ = !0,
    onDrillChange: I,
    navigationInstructions: _ = "Use arrow keys to navigate, Enter to open.",
    initialFocus: F = "first",
    skipFocusOnSelect: w = !1,
    skipAnnouncements: D = !1,
    onFocusChange: k,
    syncUrl: C = !1,
    urlParamSelected: S = "nsv",
    urlParamDrill: x = "nsvDrill",
    urlSyncDebounceMs: y = 0,
    lazySecondary: R = !1,
    navFooter: T,
    collapsibleNav: j = !1,
    navInitiallyCollapsed: v = !1,
    onNavCollapseChange: b,
    collapseToggleLabelShow: B = "Show navigation",
    collapseToggleLabelHide: A = "Hide navigation",
    collapseToggleIconShow: E,
    collapseToggleIconHide: z,
    persistNavCollapsed: N,
    navCollapsedStorageKey: G = "nsvCollapsed",
    navCollapsedUrlParam: P = "nsvCollapsed",
    autoContentHeader: se,
    contentHeaderLevel: me = 2,
    renderContentHeader: de,
    contentSubheader: J,
    secondarySubheader: O
  } = e, { up: Y } = ii(), [Z, W] = U.useState(!1);
  U.useEffect(() => {
    W(!0);
  }, []);
  const ae = Z && Y("medium"), ne = Z && Y("xlarge");
  let le;
  d ? le = d : ae ? le = "two-column" : le = "list", !d && $ && l && ne && (le = "three-column");
  const ce = Ef({
    enabled: C,
    paramSelected: S,
    paramDrill: x
  }), [be, Me] = U.useState(
    () => ce.selectedId !== void 0 ? ce.selectedId : a
  ), je = n !== void 0 ? n : be, Ne = t.find((ie) => u(ie) === je), [X, q] = U.useState(
    void 0
  );
  U.useEffect(() => {
    if (je === void 0) return;
    q(je);
    const ie = setTimeout(() => q(void 0), 220);
    return () => clearTimeout(ie);
  }, [je]);
  const ee = U.useRef(null), Q = U.useRef(null), L = U.useRef(null), V = U.useRef(null), [re, te] = U.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [K, oe] = U.useState(() => "nav"), [ye, ve] = U.useState(0), ke = () => [
    V.current,
    Q.current,
    L.current
  ].filter(Boolean), Se = (ie) => {
    const xe = ke(), fe = Math.max(0, Math.min(ie, xe.length - 1));
    xe[fe]?.focus(), ve(fe);
  }, pe = U.useCallback(
    (ie) => ie ? Array.from(ie.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(
      (fe) => !fe.hasAttribute("disabled") && fe.tabIndex !== -1
    ) : [],
    []
  ), Te = U.useCallback(
    (ie) => {
      const xe = pe(Q.current);
      if (!xe.length) {
        Q.current?.focus();
        return;
      }
      const fe = Math.max(0, Math.min(ie, xe.length - 1)), we = xe[fe];
      we.focus(), setTimeout(() => {
        document.activeElement !== we && (we.focus(), setTimeout(() => {
          document.activeElement !== we && we.click();
        }, 10));
      }, 10), te((Re) => ({ ...Re, contentIndex: fe }));
      const ze = (Re) => {
        Re.key === "Escape" && (Re.preventDefault(), Re.stopPropagation(), Q.current?.focus(), we.removeEventListener("keydown", ze));
      };
      xe.forEach((Re) => {
        const Pe = Re._escapeHandler;
        Pe && Re.removeEventListener("keydown", Pe);
      }), we._escapeHandler = ze, we.addEventListener("keydown", ze);
    },
    [pe]
  ), Be = U.useCallback(
    (ie) => {
      const xe = pe(L.current);
      if (!xe.length) {
        L.current?.focus();
        return;
      }
      const fe = Math.max(0, Math.min(ie, xe.length - 1)), we = xe[fe];
      we.focus(), setTimeout(() => {
        document.activeElement !== we && (we.focus(), setTimeout(() => {
          document.activeElement !== we && we.click();
        }, 10));
      }, 10), te((Re) => ({ ...Re, secondaryIndex: fe }));
      const ze = (Re) => {
        Re.key === "Escape" && (Re.preventDefault(), Re.stopPropagation(), L.current?.focus(), we.removeEventListener("keydown", ze));
      };
      xe.forEach((Re) => {
        const Pe = Re._escapeHandler;
        Pe && Re.removeEventListener("keydown", Pe);
      }), we._escapeHandler = ze, we.addEventListener("keydown", ze);
    },
    [pe]
  ), Oe = (ie) => {
    if (ie.defaultPrevented) return;
    const xe = ie.key, fe = ie.target, we = !!Ze.current && Ze.current.contains(fe), ze = !!Q.current && Q.current.contains(fe), Re = !!L.current && L.current.contains(fe), Pe = !!L.current, Jt = fe === V.current || fe === Q.current || fe === L.current, Rt = Ee && (le === "list" || le === "cards"), Ln = ze && !!fe.closest(".nhs-navigation-split-view__header");
    if (K === "containers" && Jt) {
      if (xe === "ArrowRight") {
        ie.preventDefault();
        const Ce = ke(), He = Math.min(Ce.length - 1, ye + 1);
        Se(He);
        return;
      }
      if (xe === "ArrowLeft") {
        ie.preventDefault();
        const Ce = Math.max(0, ye - 1);
        Se(Ce);
        return;
      }
      if (xe === "Home") {
        ie.preventDefault(), Se(0);
        return;
      }
      if (xe === "End") {
        ie.preventDefault(), Se(ke().length - 1);
        return;
      }
      if (xe === "Enter" || xe === " ") {
        if (ie.preventDefault(), fe === V.current) {
          if (oe("nav"), Ze.current) {
            const Ce = Array.from(
              Ze.current.querySelectorAll("[data-nav-item]")
            );
            (Ce[We >= 0 ? We : 0] || Ce[0])?.focus();
          }
        } else fe === Q.current ? (oe("content"), Te(re.contentIndex)) : fe === L.current && (oe("secondary"), Be(re.secondaryIndex));
        return;
      }
      return;
    }
    if (xe === "Escape") {
      if (K === "content" || K === "secondary") {
        if (ze || Re) {
          if (ie.preventDefault(), oe("nav"), Ze.current) {
            const He = Array.from(
              Ze.current.querySelectorAll("[data-nav-item]")
            )[We >= 0 ? We : 0];
            setTimeout(() => He?.focus(), 10);
          }
        } else if ((fe === Q.current || fe === L.current) && (ie.preventDefault(), oe("nav"), Ze.current)) {
          const He = Array.from(
            Ze.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
      }
      return;
    }
    if (xe === "Enter" || xe === " ") {
      if (fe.matches(
        'button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'
      ))
        return;
      if (fe === Q.current && K === "content") {
        ie.preventDefault(), ie.stopPropagation(), pe(Q.current).length > 0 && setTimeout(() => {
          Te(re.contentIndex);
        }, 50);
        return;
      }
      if (fe === L.current && K === "secondary") {
        ie.preventDefault(), ie.stopPropagation(), pe(
          L.current
        ).length > 0 && setTimeout(() => {
          Be(re.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (Rt && Ln && !Jt && (xe === "ArrowRight" || xe === "ArrowLeft")) {
      const Ce = pe(Q.current).filter(
        (He) => He.closest(".nhs-navigation-split-view__header")
      );
      if (Ce.length > 1) {
        const He = Ce.indexOf(fe);
        if (He >= 0) {
          const gs = (He + (xe === "ArrowRight" ? 1 : -1) + Ce.length) % Ce.length;
          ie.preventDefault(), Ce[gs].focus();
          return;
        }
      }
    }
    if (xe === "ArrowRight") {
      if (we || K === "nav") {
        ie.preventDefault(), oe("content"), setTimeout(() => Q.current?.focus(), 10);
        return;
      }
      if (ze || K === "content") {
        Pe && (ie.preventDefault(), oe("secondary"), setTimeout(() => L.current?.focus(), 10));
        return;
      }
    }
    if (xe === "ArrowLeft") {
      if (Re || K === "secondary") {
        ie.preventDefault(), oe("content"), setTimeout(() => Q.current?.focus(), 10);
        return;
      }
      if (ze || K === "content") {
        if (ie.preventDefault(), oe("nav"), Ze.current) {
          const He = Array.from(
            Ze.current.querySelectorAll("[data-nav-item]")
          )[We >= 0 ? We : 0];
          setTimeout(() => He?.focus(), 10);
        }
        return;
      }
    }
    if (xe === "Home" && !we && (ie.preventDefault(), oe("nav"), Ze.current)) {
      const Ce = Array.from(
        Ze.current.querySelectorAll("[data-nav-item]")
      ), He = Ce[We >= 0 ? We : 0] || Ce[0];
      setTimeout(() => He?.focus(), 10);
    }
    if (xe === "End") {
      const Ce = Pe ? L.current : Q.current;
      Ce && !Ce.contains(fe) && (ie.preventDefault(), Pe ? (oe("secondary"), setTimeout(() => L.current?.focus(), 10)) : (oe("content"), setTimeout(() => Q.current?.focus(), 10)));
    }
    if (xe === "ArrowDown" || xe === "ArrowUp") {
      if (fe === Q.current && xe === "ArrowDown") {
        ie.preventDefault(), pe(Q.current).length > 0 && Te(0);
        return;
      }
      if (fe === L.current && xe === "ArrowDown") {
        ie.preventDefault(), pe(
          L.current
        ).length > 0 && Be(0);
        return;
      }
      if (ze) {
        const Ce = pe(Q.current);
        if (Ce.length) {
          ie.preventDefault();
          const He = xe === "ArrowDown" ? 1 : -1, ut = (re.contentIndex + He + Ce.length) % Ce.length;
          Te(ut);
        }
      } else if (Re) {
        const Ce = pe(L.current);
        if (Ce.length) {
          ie.preventDefault();
          const He = xe === "ArrowDown" ? 1 : -1, ut = (re.secondaryIndex + He + Ce.length) % Ce.length;
          Be(ut);
        }
      }
    }
  }, Ee = !!Ne && (le === "list" || le === "cards"), tt = U.useMemo(() => se === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : se === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : se === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: se.mobile !== void 0 ? se.mobile : !0,
    tablet: se.tablet || !1,
    desktop: se.desktop || !1
  }, [se]), Mt = Z && Y("medium") && !Y("xlarge"), mt = Z && Y("xlarge"), ct = !!l, Ue = le === "three-column", [Ve, fn] = U.useState(!1);
  U.useEffect(() => {
    Ue && Ve && fn(!1);
  }, [Ue, Ve]), U.useEffect(() => {
    Ve && !Ue && (oe("secondary"), ve(2), setTimeout(() => {
      L.current?.focus();
    }, 50));
  }, [Ve, Ue]), U.useEffect(() => {
    !Ve && !Ue && K === "secondary" && (oe("content"), ve(1), setTimeout(() => {
      Q.current?.focus();
    }, 50));
  }, [Ve, Ue, K]);
  const Fr = !!Ne && (Ee && tt.mobile || !Ee && Mt && tt.tablet || !Ee && mt && tt.desktop) || ct && !Ue, kl = `h${me}`, Ar = Ne ? U.createElement(
    kl,
    {
      style: {
        marginLeft: Ee ? 32 : 0,
        marginRight: Ee ? 32 : 0
      }
    },
    Ne.label
  ) : null, ps = Ee ? "mobile" : Mt ? "tablet" : "desktop", Cl = ct && !Ue && !Ve, Br = Ee && tt.mobile ? /* @__PURE__ */ r.jsx(
    la,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => Zt(void 0, void 0)
    }
  ) : void 0, Er = Cl ? /* @__PURE__ */ r.jsx(
    oi,
    {
      element: "button",
      text: h,
      onClick: () => {
        fn(!0);
      }
    }
  ) : void 0, Rr = !Ue && Ve ? /* @__PURE__ */ r.jsx(
    la,
    {
      element: "button",
      text: f,
      style: { marginRight: 16 },
      onClick: () => fn(!1)
    }
  ) : void 0, jl = U.useMemo(() => {
    if (!Fr || !Ne) return null;
    if (de)
      return de({
        item: Ne,
        detailActive: Ee,
        context: ps,
        backLink: Br,
        defaultHeading: Ar
      });
    const ie = Ne && J ? typeof J == "function" ? J(Ne) : J : null;
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
            Rr || Br,
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
    Ne,
    de,
    Ee,
    ps,
    Br,
    Rr,
    Ar,
    Er,
    J
  ]);
  U.useEffect(() => {
    if (!C) return;
    const ie = le === "three-column";
    let xe = !1;
    const fe = () => {
      xe || (ce.selectedId !== je && ce.setSelectedId(je), ce.drilledIn !== ie && ce.setDrilledIn(ie));
    };
    if (y && y > 0) {
      const we = setTimeout(fe, y);
      return () => {
        xe = !0, clearTimeout(we);
      };
    } else
      fe();
  }, [C, ce, je, le, y]), U.useEffect(() => {
    if (!C) return;
    const ie = () => {
      const xe = new URLSearchParams(window.location.search), fe = xe.get(S);
      xe.get(x), Me(fe === null ? void 0 : fe);
    };
    return window.addEventListener("popstate", ie), () => window.removeEventListener("popstate", ie);
  }, [
    C,
    S,
    x,
    d,
    l
  ]);
  const Mn = U.useRef(0), gt = U.useRef(
    null
  ), Zt = U.useCallback(
    (ie, xe) => {
      ie !== je && (n === void 0 && Me(ie), o?.(ie, xe));
    },
    [n, o, je]
  );
  U.useEffect(() => {
    if (!w && Ee && Q.current) {
      const ie = setTimeout(() => Q.current?.focus(), 30);
      return () => clearTimeout(ie);
    }
  }, [Ee, je, w]);
  const Ze = U.useRef(null), [We, hn] = U.useState(
    () => F === "first" ? 0 : -1
  );
  U.useEffect(() => {
    if (We < 0 || !Ze.current) return;
    const xe = Array.from(
      Ze.current.querySelectorAll("[data-nav-item]")
    )[We];
    if (xe) {
      document.activeElement !== xe && xe.focus(), Mn.current = We;
      const fe = t[We];
      k?.(
        fe ? u(fe) : void 0,
        fe,
        We
      );
    }
  }, [We, t, k, u]);
  const Nl = (ie) => {
    const xe = H === "vertical" ? "ArrowDown" : "ArrowRight", fe = H === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (ie.key === "ArrowRight" && H === "vertical") {
      ie.preventDefault(), Ve ? (oe("secondary"), setTimeout(() => {
        L.current?.focus();
      }, 10)) : (oe("content"), setTimeout(() => {
        Q.current?.focus();
      }, 10));
      return;
    }
    if (ie.key === xe)
      ie.preventDefault(), hn((we) => Math.min(t.length - 1, we + 1));
    else if (ie.key === fe)
      ie.preventDefault(), hn((we) => Math.max(0, we - 1));
    else if (ie.key === "Home")
      ie.preventDefault(), hn(0);
    else if (ie.key === "End")
      ie.preventDefault(), hn(t.length - 1);
    else if (ie.key === "Enter" || ie.key === " ") {
      ie.preventDefault();
      const we = t[We];
      we && !we.disabled && Zt(u(we), we);
    } else if (ie.key.length === 1 && /[a-z0-9]/i.test(ie.key)) {
      gt.current || (gt.current = { buffer: "", last: 0 });
      const we = Date.now(), ze = 700, Re = ie.key.toLowerCase();
      we - gt.current.last > ze ? gt.current.buffer = Re : gt.current.buffer += Re, gt.current.last = we;
      let Pe = gt.current.buffer;
      const Jt = Pe.split("").every((ut) => ut === Pe[0]), Rt = t.map(
        (ut) => String(ut.label || "").toLowerCase()
      );
      let Ln = 0;
      We >= 0 && (Ln = (We + 1) % t.length);
      let Ce;
      const He = (ut, gs) => {
        const xs = t.length;
        for (let zr = 0; zr < xs; zr++) {
          const Wr = (Ln + zr) % xs;
          if (!t[Wr].disabled && Rt[Wr].startsWith(ut))
            return Wr;
        }
      };
      Jt && Pe.length > 1 ? Ce = He(Pe[0]) : (Ce = He(Pe), Ce === void 0 && Pe.length > 1 && (Ce = He(Pe[Pe.length - 1]), Ce !== void 0 && gt.current && (gt.current.buffer = Pe[Pe.length - 1]))), Ce !== void 0 && hn(Ce);
    }
  }, Tl = U.useMemo(() => {
    if (N && (N === "url" || N === "both") && typeof window < "u") {
      const xe = new URLSearchParams(window.location.search).get(P);
      if (xe === "1") return !0;
      if (xe === "0") return !1;
    }
    if (N && (N === "localStorage" || N === "both") && typeof window < "u")
      try {
        const ie = window.localStorage.getItem(G);
        if (ie === "1") return !0;
        if (ie === "0") return !1;
      } catch {
      }
    return v;
  }, [
    N,
    v,
    G,
    P
  ]), [dt, $l] = U.useState(Tl);
  U.useEffect(() => {
    b?.(dt);
  }, [dt, b]);
  const Dl = U.useCallback(() => {
    ae && j && $l((ie) => !ie);
  }, [ae, j]);
  U.useEffect(() => {
    if (N && !(typeof window > "u")) {
      if (N === "localStorage" || N === "both")
        try {
          window.localStorage.setItem(
            G,
            dt ? "1" : "0"
          );
        } catch {
        }
      if (N === "url" || N === "both") {
        const ie = new URLSearchParams(window.location.search);
        ie.set(P, dt ? "1" : "0");
        const xe = `${window.location.pathname}?${ie.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", xe);
      }
    }
  }, [
    dt,
    N,
    G,
    P
  ]);
  const Il = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    Ee ? "nhs-navigation-split-view--detail-active" : "",
    le === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    j && ae && dt ? "nhs-navigation-split-view--nav-collapsed" : "",
    p
  ].filter(Boolean).join(" "), Pr = U.useRef(null);
  U.useEffect(() => {
    if (!D && Pr.current) {
      const ie = Ne ? `Selected ${Ne.label}` : "Selection cleared";
      Pr.current.textContent = ie;
    }
  }, [Ne, D]), U.useEffect(() => {
    !Ee && je == null && Ze.current && Ze.current.querySelectorAll("[data-nav-item]")[Mn.current]?.focus();
  }, [Ee, je]);
  const Lt = le === "three-column", [Hr, Ml] = U.useState(!1);
  U.useEffect(() => {
    Lt && !Hr && Ml(!0);
  }, [Lt, Hr]);
  const ms = U.useRef(Lt);
  U.useEffect(() => {
    ms.current !== Lt && (I?.(Lt), ms.current = Lt);
  }, [Lt, I]);
  const Ll = () => {
    if (le === "cards")
      return /* @__PURE__ */ r.jsxs(
        "ul",
        {
          className: "nhs-navigation-split-view__cards",
          role: "listbox",
          "aria-activedescendant": je ? String(je) : void 0,
          children: [
            t.map((fe) => {
              const we = u(fe), ze = we === je;
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
                      "data-disabled": fe.disabled || void 0,
                      disabled: fe.disabled,
                      onClick: () => !fe.disabled && Zt(we, fe),
                      children: [
                        fe.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: fe.icon }),
                        /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: fe.label }),
                        fe.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: fe.description }),
                        s?.(fe),
                        fe.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: fe.badge })
                      ]
                    }
                  )
                },
                we
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
    const ie = "nsv-nav-instructions", xe = U.useMemo(() => U.memo(
      ({
        item: fe,
        idx: we,
        selected: ze,
        focused: Re
      }) => {
        const Pe = u(fe), Jt = fe.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Re ? 0 : -1,
          onClick: () => {
            Mn.current = we, Zt(Pe, fe);
          },
          onKeyDown: (Rt) => {
            (Rt.key === "Enter" || Rt.key === " ") && (Rt.preventDefault(), Mn.current = we, Zt(Pe, fe));
          }
        };
        return /* @__PURE__ */ r.jsxs(
          "li",
          {
            id: String(Pe),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": ze,
            "aria-current": ze ? "true" : void 0,
            "data-selected": ze || void 0,
            "data-disabled": fe.disabled || void 0,
            ...Jt,
            children: [
              fe.icon && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: fe.icon }),
              /* @__PURE__ */ r.jsxs("span", { className: "nhs-navigation-split-view__item-content", children: [
                /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-label", children: fe.label }),
                fe.description && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__item-description", children: fe.description }),
                s?.(fe)
              ] }),
              fe.badge !== void 0 && /* @__PURE__ */ r.jsx("span", { className: "nhs-navigation-split-view__badge", children: fe.badge })
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
          onKeyDown: Nl,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": ie,
          "aria-activedescendant": je ? String(je) : void 0,
          children: [
            t.map((fe, we) => /* @__PURE__ */ r.jsx(
              xe,
              {
                item: fe,
                idx: we,
                selected: u(fe) === je,
                focused: we === We || We === -1 && we === 0 && F === "first",
                "data-just-selected": u(fe) === X ? "true" : void 0
              },
              u(fe)
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
          children: _
        }
      )
    ] });
  };
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      ref: ee,
      className: Il,
      "aria-label": M?.rootLabel,
      "data-layout": le,
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
                    j && ae && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ r.jsx(
                      "button",
                      {
                        type: "button",
                        onClick: Dl,
                        className: "nhs-navigation-split-view__nav-collapse-btn",
                        "aria-label": dt ? B : A,
                        title: dt ? B : A,
                        children: dt ? E || /* @__PURE__ */ r.jsx(Pf, {}) : z || /* @__PURE__ */ r.jsx(Rf, {})
                      }
                    ) }),
                    /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: Ll() }),
                    T && /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__nav-footer",
                        role: "contentinfo",
                        children: T
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ r.jsxs(
                "div",
                {
                  ref: Q,
                  className: "nhs-navigation-split-view__content-pane",
                  role: "region",
                  "aria-label": M?.contentLabel || "Content",
                  "data-has-selection": !!Ne || void 0,
                  tabIndex: 0,
                  style: {
                    display: Ve && !Ue ? "none" : void 0
                  },
                  children: [
                    Fr && /* @__PURE__ */ r.jsx("div", { className: "nhs-navigation-split-view__header", children: jl }),
                    /* @__PURE__ */ r.jsx(
                      "div",
                      {
                        className: "nhs-navigation-split-view__content-inner",
                        style: { padding: 32, flex: 1 },
                        children: i(Ne)
                      }
                    )
                  ]
                }
              ),
              le === "three-column" && (!R || Hr) || Ve && !Ue ? /* @__PURE__ */ r.jsx(
                "div",
                {
                  ref: L,
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
                                  Rr,
                                  /* @__PURE__ */ r.jsx(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 4,
                                        minWidth: 0
                                      },
                                      children: /* @__PURE__ */ r.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Ne && typeof Ne == "object" && "label" in Ne ? Ne.label : String(Ne) })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        Ne && O && /* @__PURE__ */ r.jsx(
                          "div",
                          {
                            className: "nhs-navigation-split-view__secondary-header",
                            style: {
                              padding: "16px 32px",
                              borderBottom: "1px solid var(--nsplit-divider)"
                            },
                            children: typeof O == "function" ? O(Ne) : O
                          }
                        ),
                        /* @__PURE__ */ r.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Ne) })
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
            ref: Pr,
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
Hf.displayName = "NavigationSplitView";
const co = (e, t, n, a) => e == null || Number.isNaN(e) ? a : Math.min(n, Math.max(t, e)), zf = ({ item: e, maxLines: t, enableDrilldown: n, onExpand: a, isActive: o, topLaneIndex: s }) => {
  const { ariaLabel: i } = e, l = `${e._pxLeft}px`, d = `${e._pxWidth}px`, c = `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${s})`, f = Math.floor(e._startFraction) + 2, h = Math.max(1, Math.round(e._spanColumns)), m = n && e.childItems && e.childItems.length > 0, g = (p) => {
    m && (p.preventDefault(), a?.(e));
  }, M = m ? {
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
      className: ge("nhsuk-product-roadmap__item", m && "nhsuk-product-roadmap__item--expandable", o && "nhsuk-product-roadmap__item--active"),
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
          m && /* @__PURE__ */ r.jsx("span", { className: ge("nhsuk-product-roadmap__item-expander", o && "nhsuk-product-roadmap__item-expander--open"), "aria-hidden": "true" })
        ] })
      ]
    }
  );
}, Wf = Bl(({
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
  const [f, h] = De(() => /* @__PURE__ */ new Set()), [m, g] = De(() => /* @__PURE__ */ new Set()), M = Le(/* @__PURE__ */ new Set()), p = ue((y) => f.has(y), [f]), u = ue((y) => {
    h((R) => {
      const T = new Set(R);
      return T.has(y.id) ? (T.delete(y.id), g((j) => {
        const v = new Set(j);
        return v.add(y.id), v;
      }), setTimeout(() => g((j) => {
        const v = new Set(j);
        return v.delete(y.id), v;
      }), 240), l?.(y.id, !1)) : (T.add(y.id), l?.(y.id, !0)), T;
    });
  }, [l]);
  El(() => {
    if (d !== "inline" || !i) return;
    const y = [];
    if (f.forEach((v) => {
      M.current.has(v) || y.push(v);
    }), M.current = new Set(f), !y.length) return;
    const R = typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches, T = y.map((v) => `.nhsuk-product-roadmap__inline-children[data-parent="${v}"] .nhsuk-product-roadmap__inline-child`).join(","), j = Array.from(document.querySelectorAll(T));
    if (j.length) {
      if (R) {
        j.forEach((v) => {
          v.style.opacity = "1", v.style.transform = "translateY(0)";
        });
        return;
      }
      import("./index-C_MjGuuK.js").then((v) => {
        (v.gsap || v.default || v).to(j, { opacity: 1, y: 0, duration: 0.32, ease: "power2.out", stagger: 0.05 });
      }).catch(() => {
        j.forEach((v) => {
          v.style.opacity = "1", v.style.transform = "translateY(0)";
        });
      });
    }
  }, [f, d, i]);
  const H = ue(() => {
    f.size && h(/* @__PURE__ */ new Set());
  }, [f]), $ = ge("nhsuk-product-roadmap", o), I = co(n, 120, 1200, 400), _ = co(a, 1, 6, 2), F = $e(() => e.map((y) => /* @__PURE__ */ new Date(y + " 01")), [e]), w = $e(() => {
    if (F.length === 0) {
      const T = /* @__PURE__ */ new Date();
      return [T, T];
    }
    const y = new Date(F[0]), R = kn.offset(new Date(F[F.length - 1]), 1);
    return [y, R];
  }, [F]), D = $e(() => as().domain(w).range([0, F.length * I]), [w, F.length, I]), k = ue((y) => {
    if (y.startDate) {
      const A = new Date(y.startDate), E = new Date(y.endDate ?? y.startDate);
      E < A && E.setTime(A.getTime());
      const z = D(A), N = kn.offset(new Date(E), 1);
      let G = D(N);
      Number.isFinite(G) || (G = z + I);
      const P = Math.max(I * 0.25, G - z), se = z / I, me = P / I;
      return { ...y, _pxLeft: z, _pxWidth: P, _startFraction: se, _spanColumns: me };
    }
    const R = y.date ?? 1, T = y.dateOffset ?? 0, j = y.length ?? 1, v = y.partialLength ?? 1, b = R - 1 + T, B = j - 1 + v;
    return { ...y, _pxLeft: b * I, _pxWidth: B * I, _startFraction: b, _spanColumns: B };
  }, [D, I]), C = $e(() => t.map((y) => {
    const T = y.roadmapItems.map((v) => {
      const b = !v.childItems && v.children ? { ...v, childItems: v.children } : { ...v };
      return k(b);
    }).sort((v, b) => v._pxLeft !== b._pxLeft ? v._pxLeft - b._pxLeft : b._pxWidth - v._pxWidth), j = [];
    return T.forEach((v) => {
      const b = v._pxLeft, B = v._pxLeft + v._pxWidth;
      let A = j.findIndex((E) => E <= b);
      A === -1 && (A = j.length, j.push(0)), j[A] = B, v.verticalPosition = A + 1;
    }), { ...y, roadmapItems: T, _laneCount: j.length };
  }), [t, k]), S = $e(() => C.map((y) => y._laneCount || 1), [C]), x = $e(() => `var(--category-width) ${e.map(() => "var(--column-width)").join(" ")}`, [e]);
  return /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: $,
      style: { "--column-width": `${I}px`, gridTemplateColumns: x },
      role: "grid",
      "aria-label": s,
      "aria-colcount": e.length + 1,
      "aria-rowcount": C.length + 1,
      ...c,
      children: [
        /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__header-row", role: "row", "aria-rowindex": 1, children: [
          /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__header-cell", role: "columnheader", "aria-colindex": 1, children: /* @__PURE__ */ r.jsx("span", { className: "nhsuk-visually-hidden", children: "Category" }) }),
          e.map((y, R) => /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__date-heading", role: "columnheader", "aria-colindex": R + 2, children: y }, y + R))
        ] }),
        C.map((y, R) => {
          const T = R + 2, j = S[R];
          let v, b = 0, B = [];
          i && d === "inline" && (B = y.roadmapItems.filter((N) => p(N.id) && N.childItems && N.childItems.length).map((N) => ({ id: N.id, lane: N.verticalPosition || 1, count: N.childItems.length })).sort((N, G) => N.lane - G.lane), b = B.reduce((N, G) => N + G.count, 0));
          const A = j + b;
          v = `calc((${A} * var(--roadmap-item-block-height)) + (max(0, ${A} - 1) * var(--roadmap-row-gap)))`;
          const E = {};
          let z = 0;
          return B.forEach((N) => {
            z += N.count, E[N.lane + 1] = z;
          }), /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__row", role: "row", "aria-rowindex": T, children: [
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__category-cell", role: "rowheader", "aria-colindex": 1, children: y.heading }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-row", style: { gridColumn: `2 / span ${e.length}`, height: v }, children: /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__items-layer", children: y.roadmapItems.map((N) => {
              const G = (N.verticalPosition || 1) - 1, P = B.filter((J) => J.lane - 1 < G).reduce((J, O) => J + O.count, 0), se = G + P, me = p(N.id), de = m.has(N.id);
              return /* @__PURE__ */ r.jsxs(at.Fragment, { children: [
                /* @__PURE__ */ r.jsx(zf, { item: N, maxLines: _, enableDrilldown: i, onExpand: u, isActive: me, topLaneIndex: se, laneOffset: P }),
                i && d === "inline" && (me || de) && N.childItems && /* @__PURE__ */ r.jsx("div", { "data-parent": N.id, className: "nhsuk-product-roadmap__inline-children", "aria-label": `${N.title} child tasks`, children: N.childItems.map((J, O) => {
                  const Y = "calc(var(--roadmap-item-block-height) * 0.75)";
                  let Z = N._pxLeft, W = N._pxWidth;
                  if (J.startDate) {
                    const le = new Date(J.startDate);
                    let ce = J.endDate ? new Date(J.endDate) : new Date(le);
                    ce < le && (ce = new Date(le));
                    const be = new Date(ce);
                    be.setDate(be.getDate() + 1);
                    const Me = D(le);
                    let je = D(be);
                    (!Number.isFinite(je) || je <= Me) && (je = Me + 6), Z = Me, W = Math.max(6, je - Me);
                  }
                  const ne = se + 1 + O;
                  return /* @__PURE__ */ r.jsxs(
                    "div",
                    {
                      className: ge("nhsuk-product-roadmap__inline-child", J.status && `nhsuk-product-roadmap__inline-child--status-${J.status}`, !me && de && "nhsuk-product-roadmap__inline-child--collapsing"),
                      style: { left: `${Z}px`, width: `${W}px`, top: `calc((var(--roadmap-item-block-height) + var(--roadmap-row-gap)) * ${ne})`, height: Y, opacity: me ? 0 : void 0, transform: me ? "translateY(-6px)" : void 0 },
                      children: [
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-bg" }),
                        /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__inline-child-content", children: J.title })
                      ]
                    },
                    J.id
                  );
                }) })
              ] }, N.id);
            }) }) })
          ] }, y.heading + R);
        }),
        i && d === "overlay" && f.size === 1 && (() => {
          const y = Array.from(f)[0], R = t.flatMap((T) => T.roadmapItems).find((T) => T.id === y);
          return !R || !R.childItems ? null : /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-overlay", role: "dialog", "aria-modal": "true", "aria-label": `${R.title} details`, children: [
            /* @__PURE__ */ r.jsxs("div", { className: "nhsuk-product-roadmap__drilldown-panel", children: [
              /* @__PURE__ */ r.jsxs("header", { className: "nhsuk-product-roadmap__drilldown-header", children: [
                /* @__PURE__ */ r.jsx("h3", { className: "nhsuk-product-roadmap__drilldown-title", children: R.title }),
                /* @__PURE__ */ r.jsx("button", { type: "button", className: "nhsuk-product-roadmap__drilldown-close", onClick: H, "aria-label": "Close details", children: "×" })
              ] }),
              /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-content", children: R.content }),
              /* @__PURE__ */ r.jsx("ul", { className: "nhsuk-product-roadmap__drilldown-children", children: R.childItems.map((T) => /* @__PURE__ */ r.jsxs("li", { className: "nhsuk-product-roadmap__drilldown-child", children: [
                /* @__PURE__ */ r.jsx("strong", { className: "nhsuk-product-roadmap__drilldown-child-title", children: T.title }),
                T.content && /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-child-content", children: T.content })
              ] }, T.id)) })
            ] }),
            /* @__PURE__ */ r.jsx("div", { className: "nhsuk-product-roadmap__drilldown-backdrop", onClick: H, "aria-hidden": "true" })
          ] });
        })()
      ]
    }
  );
});
Wf.displayName = "ProductRoadmap";
function li(e) {
  var t, n, a = "";
  if (typeof e == "string" || typeof e == "number") a += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = li(e[t])) && (a && (a += " "), a += n);
  } else for (n in e) e[n] && (a && (a += " "), a += n);
  return a;
}
function Qn() {
  for (var e, t, n = 0, a = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = li(e)) && (a && (a += " "), a += t);
  return a;
}
function qe(e) {
  return function() {
    return e;
  };
}
const xa = Math.PI, ba = 2 * xa, Ht = 1e-6, Of = ba - Ht;
function ci(e) {
  this._ += e[0];
  for (let t = 1, n = e.length; t < n; ++t)
    this._ += arguments[t] + e[t];
}
function Uf(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return ci;
  const n = 10 ** t;
  return function(a) {
    this._ += a[0];
    for (let o = 1, s = a.length; o < s; ++o)
      this._ += Math.round(arguments[o] * n) / n + a[o];
  };
}
class Gf {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? ci : Uf(t);
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
      let g = a - i, M = o - l, p = d * d + c * c, u = g * g + M * M, H = Math.sqrt(p), $ = Math.sqrt(m), I = s * Math.tan((xa - Math.acos((p + m - u) / (2 * H * $))) / 2), _ = I / $, F = I / H;
      Math.abs(_ - 1) > Ht && this._append`L${t + _ * f},${n + _ * h}`, this._append`A${s},${s},0,0,${+(h * g > f * M)},${this._x1 = t + F * d},${this._y1 = n + F * c}`;
    }
  }
  arc(t, n, a, o, s, i) {
    if (t = +t, n = +n, a = +a, i = !!i, a < 0) throw new Error(`negative radius: ${a}`);
    let l = a * Math.cos(o), d = a * Math.sin(o), c = t + l, f = n + d, h = 1 ^ i, m = i ? o - s : s - o;
    this._x1 === null ? this._append`M${c},${f}` : (Math.abs(this._x1 - c) > Ht || Math.abs(this._y1 - f) > Ht) && this._append`L${c},${f}`, a && (m < 0 && (m = m % ba + ba), m > Of ? this._append`A${a},${a},0,1,${h},${t - l},${n - d}A${a},${a},0,1,${h},${this._x1 = c},${this._y1 = f}` : m > Ht && this._append`A${a},${a},0,${+(m >= xa)},${h},${this._x1 = t + a * Math.cos(s)},${this._y1 = n + a * Math.sin(s)}`);
  }
  rect(t, n, a, o) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +n}h${a = +a}v${+o}h${-a}Z`;
  }
  toString() {
    return this._;
  }
}
function di(e) {
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
  }, () => new Gf(t);
}
function ui(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function fi(e) {
  this._context = e;
}
fi.prototype = {
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
function hi(e) {
  return new fi(e);
}
function pi(e) {
  return e[0];
}
function mi(e) {
  return e[1];
}
function gi(e, t) {
  var n = qe(!0), a = null, o = hi, s = null, i = di(l);
  e = typeof e == "function" ? e : e === void 0 ? pi : qe(e), t = typeof t == "function" ? t : t === void 0 ? mi : qe(t);
  function l(d) {
    var c, f = (d = ui(d)).length, h, m = !1, g;
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
  var a = null, o = qe(!0), s = null, i = hi, l = null, d = di(c);
  e = typeof e == "function" ? e : e === void 0 ? pi : qe(+e), t = typeof t == "function" ? t : qe(t === void 0 ? 0 : +t), n = typeof n == "function" ? n : n === void 0 ? mi : qe(+n);
  function c(h) {
    var m, g, M, p = (h = ui(h)).length, u, H = !1, $, I = new Array(p), _ = new Array(p);
    for (s == null && (l = i($ = d())), m = 0; m <= p; ++m) {
      if (!(m < p && o(u = h[m], m, h)) === H)
        if (H = !H)
          g = m, l.areaStart(), l.lineStart();
        else {
          for (l.lineEnd(), l.lineStart(), M = m - 1; M >= g; --M)
            l.point(I[M], _[M]);
          l.lineEnd(), l.areaEnd();
        }
      H && (I[m] = +e(u, m, h), _[m] = +t(u, m, h), l.point(a ? +a(u, m, h) : I[m], n ? +n(u, m, h) : _[m]));
    }
    if ($) return l = null, $ + "" || null;
  }
  function f() {
    return gi().defined(o).curve(i).context(s);
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
function Yf(e, t, n) {
  const a = Do(e, t);
  return as().domain(a).range(n);
}
function po(e, t, n) {
  const [a, o] = Do(e, t);
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
  const o = gi().x(t).y(n);
  return a?.smooth !== !1 && o.curve(tr), o(e) ?? "";
}
function Vf(e = {}) {
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
const xi = U.createContext(null);
function Bt() {
  return U.useContext(xi);
}
const qf = ({
  height: e = 240,
  margin: t,
  width: n,
  className: a = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children: o,
  role: s = "group",
  ariaLabel: i
}) => {
  const l = Vf(t), d = { height: e, position: "relative" };
  return n !== void 0 && (d.width = typeof n == "number" ? `${n}px` : n), /* @__PURE__ */ r.jsx("div", { ref: l.ref, className: a, style: d, role: s, "aria-label": i, children: /* @__PURE__ */ r.jsx(xi.Provider, { value: l, children: o }) });
}, os = U.createContext(null), Xt = () => U.useContext(os), Kf = ({
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
  const f = Bt(), h = t ?? f?.innerWidth ?? 0, m = n ?? f?.innerHeight ?? 0, g = U.useMemo(() => e.flatMap((_) => _.data), [e]), M = U.useCallback((_) => {
    if (a) return a(_);
    const F = _.x;
    return F instanceof Date ? F : new Date(F);
  }, [a]), p = d ?? 6, u = c ?? 6, H = U.useMemo(() => Yf(g, M, [p, Math.max(0, h - p)]), [g, M, h, p]), $ = U.useMemo(() => {
    if (l) {
      const _ = po([], (F) => F.y, [Math.max(0, m - u), u]);
      return _.domain(l), _;
    }
    return po(g, (_) => _.y, [Math.max(0, m - u), u]);
  }, [g, m, l]), I = U.useMemo(() => ({
    xScale: H,
    yScale: $,
    getXTicks: (_ = s) => H.ticks(_),
    getYTicks: (_ = i) => $.ticks(_)
  }), [H, $, s, i]);
  return /* @__PURE__ */ r.jsx(os.Provider, { value: I, children: o });
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
  const M = Xt(), p = Bt(), u = t || (e === "x" ? M?.xScale : M?.yScale), H = n ?? (e === "x" ? 6 : 5), $ = typeof o == "function", I = U.useMemo(() => {
    if ($ || !g) return;
    const w = (D) => new Intl.DateTimeFormat(void 0, D);
    switch (g) {
      case "dayShortMonth":
        return (D) => {
          const k = D instanceof Date ? D : new Date(D);
          return `${k.getDate()}
${w({ month: "short" }).format(k)}`;
        };
      case "dayShortMonthYear":
        return (D) => {
          const k = D instanceof Date ? D : new Date(D);
          return `${k.getDate()}
${w({ month: "short" }).format(k)} ${k.getFullYear()}`;
        };
      case "shortMonth":
        return (D) => {
          const k = D instanceof Date ? D : new Date(D);
          return w({ month: "short" }).format(k);
        };
      case "shortMonthYear":
        return (D) => {
          const k = D instanceof Date ? D : new Date(D);
          return `${w({ month: "short" }).format(k)} ${k.getFullYear()}`;
        };
      case "hourMinute":
        return (D) => {
          const k = D instanceof Date ? D : new Date(D);
          return w({ hour: "2-digit", minute: "2-digit" }).format(k);
        };
      default:
        return;
    }
  }, [$, g]);
  let _ = $ ? o : I || ((w) => String(w));
  const F = U.useMemo(() => a && Array.isArray(a) ? a : u ? typeof u.ticks == "function" ? u.ticks(H) : u.domain ? u.domain() : [] : [], [u, H, a]);
  if (e === "x" && !$ && !g && F.length && F.every((w) => w instanceof Date)) {
    const w = F[0], D = F[F.length - 1], k = D.getTime() - w.getTime(), C = 24 * 3600 * 1e3, S = 365 * C, x = w.getFullYear() === D.getFullYear(), y = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (k < 2 * C) {
      const R = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      _ = (T) => R.format(T);
    } else if (k < 32 * C)
      _ = (R) => {
        const T = R;
        return `${T.getDate()} ${y.format(T)}`;
      };
    else if (k < S && x)
      _ = (R) => y.format(R);
    else if (k < 2 * S) {
      const R = /* @__PURE__ */ new Set();
      _ = (T) => {
        const j = T, v = j.getMonth();
        return R.has(v) || R.add(v), `${y.format(j)} ${j.getFullYear()}`;
      };
    } else
      _ = (R) => String(R.getFullYear());
  }
  if (!u || !p) return null;
  if (e === "x") {
    const w = i ?? p.innerHeight, D = typeof u.bandwidth == "function", k = D ? u.bandwidth() : 0, C = (y) => {
      const R = u(y);
      return D ? R + k / 2 : R;
    };
    let S = d ?? 0;
    if (f && d == null) {
      const y = F.map((T) => _(T).replace(/\n.*/g, "")), R = y.length ? y.reduce((T, j) => T + j.length, 0) / y.length : 0;
      S = Math.max(12, Math.round(R * 6 + 4));
    }
    const x = U.useMemo(() => {
      if (a && Array.isArray(a) || S <= 0) return F;
      const y = [];
      let R = -1 / 0;
      for (const T of F) {
        const j = C(T);
        j - R >= S && (y.push(T), R = j);
      }
      return y;
    }, [F, u, S, a, D, k]);
    return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--x", l].filter(Boolean).join(" "), transform: `translate(0,${w})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ r.jsx("line", { x1: 0, x2: p.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      x.map((y, R) => {
        const T = _(y), j = c && T.length > c ? T.slice(0, Math.max(1, c - 1)) + "…" : T, v = m ? j.split(/\n/) : [j.replace(/\n/g, " ")], b = h < 0 ? "end" : h > 0 ? "start" : "middle";
        return /* @__PURE__ */ r.jsxs("g", { transform: `translate(${C(y)},0)`, children: [
          /* @__PURE__ */ r.jsx("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ r.jsxs("text", { y: 9, textAnchor: b, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: h ? `rotate(${h})` : void 0, fontFamily: "inherit", children: [
            v.map((B, A) => /* @__PURE__ */ r.jsx("tspan", { x: 0, dy: A === 0 ? 0 : "1.1em", children: B }, A)),
            j !== T && /* @__PURE__ */ r.jsx("title", { children: T })
          ] })
        ] }, y?.toString?.() || R);
      })
    ] });
  }
  return /* @__PURE__ */ r.jsxs("g", { className: ["fdp-axis", "fdp-axis--y", l].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    F.map((w, D) => {
      const k = _(w), C = c && k.length > c ? k.slice(0, Math.max(1, c - 1)) + "…" : k, S = m ? C.split(/\n/) : [C.replace(/\n/g, " ")];
      return /* @__PURE__ */ r.jsxs("g", { transform: `translate(0,${u(w)})`, children: [
        /* @__PURE__ */ r.jsx("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ r.jsxs("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          S.map((x, y) => /* @__PURE__ */ r.jsx("tspan", { x: -9, dy: y === 0 ? 0 : "1.1em", children: x }, y)),
          C !== k && /* @__PURE__ */ r.jsx("title", { children: k })
        ] })
      ] }, w?.toString?.() || D);
    }),
    s && /* @__PURE__ */ r.jsx("text", { transform: "rotate(-90)", x: -p.innerHeight / 2, y: -p.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: s })
  ] });
}, Xf = ({
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
}, Zf = { "data-viz": { $type: "color", categorical: { 1: { $value: "{color.primary.blue}", $description: "Series 1 – NHS Blue (brand core)" }, 2: { $value: "#41B6E6", $description: "Series 2 – NHS Light Blue (new)" }, 3: { $value: "{color.secondary.aqua-green}", $description: "Series 3 – NHS Aqua Green (existing)" }, 4: { $value: "#78BE20", $description: "Series 4 – NHS Light Green (new)" }, 5: { $value: "{color.primary.green}", $description: "Series 5 – NHS Green (existing)" }, 6: { $value: "{color.secondary.warm-yellow}", $description: "Series 6 – NHS Warm Yellow (existing; distinct from focus yellow)" }, 7: { $value: "#ED4F00", $description: "Series 7 – NHS Tangerine (new; warmer/deeper than existing orange)" }, 8: { $value: "{color.secondary.pink}", $description: "Series 8 – NHS Pink (existing)" }, 9: { $value: "#E317AA", $description: "Series 9 – NHS Bright Pink (new vivid accent)" }, 10: { $value: "#880FB8", $description: "Series 10 – NHS Light Purple (new mid purple)" }, 11: { $value: "{color.primary.purple}", $description: "Series 11 – NHS Purple (existing dark purple)" }, 12: { $value: "#9A6324", $description: "Series 12 – NHS Brown (new; earth neutral)" } }, neutral: { comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" } }, region: { $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 – light green).", "north-east": { $value: "{color.primary.blue}", $description: "North East – NHS Blue" }, "north-west": { $value: "#41B6E6", $description: "North West – NHS Light Blue" }, "east-of-england": { $value: "{color.primary.purple}", $description: "East of England – NHS Purple" }, midlands: { $value: "{color.secondary.pink}", $description: "Midlands – NHS Pink" }, london: { $value: "#78BE21", $description: "London – NHS Light Green (new)" }, "south-west": { $value: "#FAE100", $description: "South West – NHS Yellow variant (new)" }, "south-east": { $value: "#ed8b00", $description: "South East – NHS Orange (existing base orange)" } }, severity: { $comment: "Semantic severity / alert colours (light background ramp → critical).", low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity – pale yellow background" }, moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity – warm yellow" }, high: { $value: "{color.secondary.orange}", $description: "High severity – orange" }, critical: { $value: "{color.primary.red}", $description: "Critical severity – red" } }, "org-level": { $comment: "Organisational level semantic colours (stable NHS brand mappings).", trust: { $value: "{color.primary.blue}", $description: "Trust – NHS Blue" }, ambulance: { $value: "{color.primary.green}", $description: "Ambulance – NHS Green" }, icb: { $value: "{color.primary.dark-pink}", $description: "ICB – NHS Dark Pink" }, region: { $value: "{color.primary.purple}", $description: "Region – NHS Purple" } }, stroke: { $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.", categorical: { 1: { $value: "#ffffff", $description: "Stroke for series 1 (blue)" }, 2: { $value: "#212b32", $description: "Stroke for series 2 (light blue)" }, 3: { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" }, 4: { $value: "#212b32", $description: "Stroke for series 4 (light green)" }, 5: { $value: "#ffffff", $description: "Stroke for series 5 (green)" }, 6: { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" }, 7: { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" }, 8: { $value: "#ffffff", $description: "Stroke for series 8 (pink)" }, 9: { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" }, 10: { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" }, 11: { $value: "#ffffff", $description: "Stroke for series 11 (purple)" }, 12: { $value: "#ffffff", $description: "Stroke for series 12 (brown)" } }, region: { $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.", "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" }, "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" }, "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" }, midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" }, london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" }, "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" }, "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" } }, severity: { $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).", low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" }, moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" }, high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" }, critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" } }, "org-level": { $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).", trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" }, ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" }, icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" }, region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" } } }, spc: { $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.", improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" }, concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" }, "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" }, "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" }, "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" }, "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" }, gradient: { $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.", stop: { "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" }, "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" }, "end-opacity": { $value: "0", $description: "End stop opacity (100%)" }, "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" }, "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" }, "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" } } }, stroke: { $comment: "Contrast stroke colours for SPC variation fills.", improvement: { $value: "#000000", $description: "Stroke for improvement points" }, concern: { $value: "#000000", $description: "Stroke for concern points" }, "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" }, "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" }, "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" }, "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" } } } } }, Dn = {
  color: Zf
}, Jf = { primary: { $type: "color", blue: { $value: "#005eb8", $description: "NHS Blue - Primary brand color" }, "blue-active": { $value: "#002f5c", $description: "NHS Active Blue (50% shade) – alias of button/login active; promoted for general reuse" }, white: { $value: "#ffffff", $description: "NHS White" }, black: { $value: "#212b32", $description: "NHS Black" }, green: { $value: "#007f3b", $description: "NHS Green" }, purple: { $value: "#330072", $description: "NHS Purple" }, "dark-pink": { $value: "#7c2855", $description: "NHS Dark Pink" }, red: { $value: "#d5281b", $description: "NHS Red" }, "light-purple": { $value: "#880FB8", $description: "NHS Light Purple (data viz promoted)" }, yellow: { $value: "#ffeb3b", $description: "NHS Yellow" } }, secondary: { $type: "color", "pale-yellow": { $value: "#fff9c4", $description: "NHS Pale Yellow" }, "warm-yellow": { $value: "#ffb81c", $description: "NHS Warm Yellow" }, "region-yellow": { $value: "#FAE100", $description: "NHS Region Yellow (maps)" }, orange: { $value: "#ed8b00", $description: "NHS Orange" }, tangerine: { $value: "#ED4F00", $description: "NHS Tangerine (data viz promoted)" }, "aqua-green": { $value: "#00a499", $description: "NHS Aqua Green" }, "light-blue": { $value: "#41B6E6", $description: "NHS Light Blue (data viz promoted)" }, pink: { $value: "#ae2573", $description: "NHS Pink" }, "bright-pink": { $value: "#E317AA", $description: "NHS Bright Pink (data viz promoted)" }, "light-green": { $value: "#78BE20", $description: "NHS Light Green (data viz promoted)" }, brown: { $value: "#9A6324", $description: "NHS Brown (data viz promoted neutral)" } }, grey: { 1: { $value: "#4c6272", $description: "NHS Grey 1 - Darkest grey" }, 2: { $value: "#768692", $description: "NHS Grey 2 - Darker grey" }, 3: { $value: "#aeb7bd", $description: "NHS Grey 3 - Medium grey" }, 4: { $value: "#d8dde0", $description: "NHS Grey 4 - Light grey" }, 5: { $value: "#f0f4f5", $description: "NHS Grey 5 - Lightest grey" }, $type: "color" }, accessibility: { $type: "color", $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe–Ito colors. Use these for positive/negative semantics and colour-blind–friendly defaults.", "okabe-ito": { green: { $value: "#009E73", $description: "Okabe–Ito green (CVD-safe) – recommended positive" }, vermillion: { $value: "#D55E00", $description: "Okabe–Ito vermillion / red–orange (CVD-safe) – recommended negative" } }, "cvd-safe": { blue: { $value: "#1f77b4", $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets" }, orange: { $value: "#ff7f0e", $description: "CVD-safe orange (pairs with blue)" } }, positive: { $value: "{color.accessibility.okabe-ito.green}", $description: "Accessibility semantic alias – positive" }, negative: { $value: "{color.accessibility.okabe-ito.vermillion}", $description: "Accessibility semantic alias – negative" } } }, Mr = {
  color: Jf
}, Qf = [
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
let ea = null, ta = null, na = null, bi = "optimized";
function eh() {
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
    return Qf;
  }
}
function th() {
  return ea || (ea = eh()), ea;
}
function nh(e) {
  const t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.trim());
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function ra(e) {
  return e /= 255, e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4);
}
function rh(e, t, n) {
  const a = ra(e), o = ra(t), s = ra(n), i = a * 0.4124 + o * 0.3576 + s * 0.1805, l = a * 0.2126 + o * 0.7152 + s * 0.0722, d = a * 0.0193 + o * 0.1192 + s * 0.9505;
  return { x: i * 100, y: l * 100, z: d * 100 };
}
function ah(e, t, n) {
  let i = e / 95.047, l = t / 100, d = n / 108.883;
  const c = (f) => f > 8856e-6 ? Math.cbrt(f) : 7.787 * f + 16 / 116;
  return i = c(i), l = c(l), d = c(d), { L: 116 * l - 16, a: 500 * (i - l), b: 200 * (l - d) };
}
function yi(e) {
  const t = nh(e);
  if (!t) return null;
  const n = rh(t.r, t.g, t.b);
  return ah(n.x, n.y, n.z);
}
function go(e, t) {
  const n = e.L - t.L, a = e.a - t.a, o = e.b - t.b;
  return Math.sqrt(n * n + a * a + o * o);
}
function sh() {
  const e = th();
  if (e.length <= 2) return e.slice();
  const t = e.map((i) => yi(i));
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
function oh() {
  return ta || (ta = sh()), ta;
}
function ih(e, t, n) {
  const a = (e + 16) / 116, o = t / 500 + a, s = a - n / 200, i = (f) => {
    const h = f * f * f;
    return h > 8856e-6 ? h : (f - 16 / 116) / 7.787;
  }, l = i(o) * 95.047, d = i(a) * 100, c = i(s) * 108.883;
  return { X: l, Y: d, Z: c };
}
function lh(e, t, n) {
  e /= 100, t /= 100, n /= 100;
  let a = e * 3.2406 + t * -1.5372 + n * -0.4986, o = e * -0.9689 + t * 1.8758 + n * 0.0415, s = e * 0.0557 + t * -0.204 + n * 1.057;
  const i = (l) => l <= 31308e-7 ? 12.92 * l : 1.055 * Math.pow(l, 1 / 2.4) - 0.055;
  return a = Math.min(1, Math.max(0, i(a))), o = Math.min(1, Math.max(0, i(o))), s = Math.min(1, Math.max(0, i(s))), { r: Math.round(a * 255), g: Math.round(o * 255), b: Math.round(s * 255) };
}
function ch(e, t, n) {
  return `#${[e, t, n].map((a) => a.toString(16).padStart(2, "0")).join("")}`;
}
function dh(e, t) {
  const n = yi(e);
  if (!n) return e;
  const a = Math.min(100, Math.max(0, n.L + t)), { X: o, Y: s, Z: i } = ih(a, n.a, n.b), l = lh(o, s, i);
  return ch(l.r, l.g, l.b);
}
function uh() {
  const e = oh(), n = [12, -12, 24, -24].map((o) => e.map((s) => dh(s, o))), a = [...e];
  return n.forEach((o) => a.push(...o)), a;
}
function fh() {
  return (!na || hh()) && (na = uh(), vi = bi), na;
}
let vi = null;
function hh() {
  return vi !== bi;
}
function pt(e) {
  const t = fh();
  return t[e % t.length];
}
let sn = null, Cn = null, jn = null, Nn = null;
function ph() {
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
  (!sn || !Cn || !jn || !Nn) && ph();
}
function Vt(e) {
  return Lr(), sn ? sn[e % sn.length] : "#212b32";
}
function mh(e) {
  return Lr(), Cn ? Cn[e] : void 0;
}
function nr(e, t) {
  return mh(e) || Vt(t);
}
const wa = ["low", "moderate", "high", "critical"];
let aa = null;
function gh() {
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
function wi() {
  return aa || (aa = gh()), aa;
}
function xh(e) {
  return wi()[e.toLowerCase()];
}
function bh(e, t) {
  return xh(e) || wi()[wa[t % wa.length]] || pt(t);
}
function yh(e) {
  return Lr(), jn ? jn[e] : void 0;
}
function vh(e, t) {
  return yh(e) || Vt(t);
}
const _a = ["trust", "ambulance", "icb", "region"];
let sa = null;
function wh() {
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
function _i() {
  return sa || (sa = wh()), sa;
}
function _h(e) {
  return _i()[e.toLowerCase()];
}
function Sh(e, t) {
  return _h(e) || _i()[_a[t % _a.length]] || pt(t);
}
function kh(e) {
  return Lr(), Nn ? Nn[e] : void 0;
}
function Ch(e, t) {
  return kh(e) || Vt(t);
}
let oa = null;
const jh = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function Nh(e) {
  return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function Th() {
  const e = { color: { ...Mr.color, ...Dn.color } }, t = (o, s = /* @__PURE__ */ new Set()) => {
    if (s.has(o)) return;
    s.add(o);
    const i = o.split(".").reduce((d, c) => d ? d[c] : void 0, e);
    if (!i) return;
    const l = i.$value || i.value;
    return typeof l == "string" && /^\{.+\}$/.test(l) ? t(l.slice(1, -1), s) : typeof l == "string" ? l : void 0;
  }, n = {}, a = [];
  return jh.forEach((o) => {
    const s = t(`color.data-viz.region.${o}`);
    s ? n[o] = s : a.push(o);
  }), process.env.NODE_ENV !== "production" && (Object.keys(n).length === 0 ? console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.") : a.length && console.warn(`[DataViz] Missing region colour tokens: ${a.join(", ")}.`)), n;
}
function $h() {
  return oa || (oa = Th()), oa;
}
function Dh(e) {
  return $h()[Nh(e)];
}
function on(e, t) {
  return Dh(e) || pt(t);
}
const Si = U.createContext(null), In = () => U.useContext(Si), _x = ({
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
  return /* @__PURE__ */ r.jsx(Si.Provider, { value: c, children: t });
}, ki = U.createContext(null), Et = () => U.useContext(ki), Ih = ({
  children: e,
  maxDistance: t = 40,
  wrapAround: n = !1
}) => {
  const a = Xt(), o = In(), [s, i] = U.useState(null), l = U.useRef(/* @__PURE__ */ new Map()), [d, c] = U.useState([]), f = U.useCallback(
    (D, k) => {
      l.current.set(D, k);
    },
    []
  ), h = U.useCallback((D) => {
    l.current.delete(D);
  }, []), m = U.useCallback(
    (D, k) => {
      if (!a) return;
      const { xScale: C, yScale: S } = a;
      let x = null, y = 1 / 0;
      l.current.forEach((R, T) => {
        R.forEach((j, v) => {
          const b = C(j.x), B = S(j.y), A = b - D, E = B - k, z = Math.sqrt(A * A + E * E);
          z < y && (y = z, x = {
            seriesId: T,
            index: v,
            x: j.x,
            y: j.y,
            clientX: b,
            clientY: B
          });
        });
      }), x && y <= t ? i(x) : i(null);
    },
    [a, t]
  ), g = U.useCallback(() => i(null), []);
  U.useEffect(() => {
    if (!s) {
      c([]);
      return;
    }
    if (!a) return;
    const { xScale: D, yScale: k } = a, C = [];
    l.current.forEach((S, x) => {
      S.forEach((y, R) => {
        (s.x instanceof Date && y.x instanceof Date ? y.x.getTime() === s.x.getTime() : y.x === s.x) && C.push({
          seriesId: x,
          index: R,
          x: y.x,
          y: y.y,
          clientX: D(y.x),
          clientY: k(y.y)
        });
      });
    }), C.sort((S, x) => S.seriesId.localeCompare(x.seriesId)), c(C);
  }, [s, a]);
  const M = U.useCallback(
    (D) => {
      if (!s) return;
      const k = l.current.get(s.seriesId);
      if (!k) return;
      let C = s.index + D;
      if (C < 0 || C >= k.length) {
        if (!n) return;
        C = (C + k.length) % k.length;
      }
      const S = k[C];
      if (!a) return;
      const { xScale: x, yScale: y } = a;
      i({
        seriesId: s.seriesId,
        index: C,
        x: S.x,
        y: S.y,
        clientX: x(S.x),
        clientY: y(S.y)
      });
    },
    [s, a, n]
  ), p = U.useCallback(
    (D) => {
      let k = Array.from(l.current.keys());
      if (o && (k = k.filter((b) => !o.isHidden(b))), k.length === 0) return;
      if (!s) {
        const b = k[0], B = l.current.get(b);
        if (!B || !a) return;
        const { xScale: A, yScale: E } = a, z = B[0];
        i({
          seriesId: b,
          index: 0,
          x: z.x,
          y: z.y,
          clientX: A(z.x),
          clientY: E(z.y)
        });
        return;
      }
      const C = k.indexOf(s.seriesId);
      if (C === -1) return;
      let S = C + D;
      if (S < 0 || S >= k.length) {
        if (!n) return;
        S = (S + k.length) % k.length;
      }
      const x = k[S], y = l.current.get(x);
      if (!y || !a) return;
      const R = Math.min(s.index, y.length - 1), T = y[R], { xScale: j, yScale: v } = a;
      i({
        seriesId: x,
        index: R,
        x: T.x,
        y: T.y,
        clientX: j(T.x),
        clientY: v(T.y)
      });
    },
    [s, a, n, o]
  ), u = U.useCallback(() => {
    let D = Array.from(l.current.keys());
    if (o && (D = D.filter((R) => !o.isHidden(R))), D.length === 0) return;
    const k = s ? s.seriesId : D[0], C = l.current.get(k);
    if (!C || C.length === 0 || !a) return;
    const S = C[0], { xScale: x, yScale: y } = a;
    i({
      seriesId: k,
      index: 0,
      x: S.x,
      y: S.y,
      clientX: x(S.x),
      clientY: y(S.y)
    });
  }, [s, a, o]), H = U.useCallback(() => {
    let D = Array.from(l.current.keys());
    if (o && (D = D.filter((T) => !o.isHidden(T))), D.length === 0) return;
    const k = s ? s.seriesId : D[0], C = l.current.get(k);
    if (!C || C.length === 0 || !a) return;
    const S = C.length - 1, x = C[S], { xScale: y, yScale: R } = a;
    i({
      seriesId: k,
      index: S,
      x: x.x,
      y: x.y,
      clientX: y(x.x),
      clientY: R(x.y)
    });
  }, [s, a, o]), $ = U.useCallback(
    () => M(1),
    [M]
  ), I = U.useCallback(
    () => M(-1),
    [M]
  ), _ = U.useCallback(
    () => p(1),
    [p]
  ), F = U.useCallback(
    () => p(-1),
    [p]
  ), w = U.useMemo(
    () => ({
      focused: s,
      setFocused: i,
      aggregated: d,
      focusNearest: m,
      clear: g,
      registerSeries: f,
      unregisterSeries: h,
      focusNextPoint: $,
      focusPrevPoint: I,
      focusNextSeries: _,
      focusPrevSeries: F,
      focusFirstPoint: u,
      focusLastPoint: H
    }),
    [
      s,
      d,
      m,
      g,
      f,
      h,
      $,
      I,
      _,
      F,
      u,
      H
    ]
  );
  return /* @__PURE__ */ r.jsx(ki.Provider, { value: w, children: e });
}, Mh = ({
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
  const m = Xt();
  if (!m) return null;
  const { xScale: g, yScale: M } = m, u = In()?.isHidden(e.id) ?? !1, H = u && l === "fade";
  if (u && l === "remove")
    return null;
  const $ = Et();
  U.useEffect(() => {
    if (!$) return;
    const k = e.data.map((C) => ({ x: i(C), y: C.y }));
    return $.registerSeries(e.id, k), () => $.unregisterSeries(e.id);
  }, [$, e.id, e.data, i]);
  const I = U.useMemo(
    () => va(
      e.data,
      (k) => g(i(k)),
      (k) => M(k.y),
      { smooth: c }
    ),
    [e.data, g, M, i, c]
  ), _ = U.useMemo(() => {
    if (!e.data.length) return "";
    const [k] = M.domain(), C = ya().x((S) => g(i(S))).y0(() => M(k)).y1((S) => M(S.y));
    return c && C.curve(tr), C(e.data) || "";
  }, [e.data, g, M, i, c]), F = h && h[t], w = e.color || F || (n === "region" ? on(e.id, t) : pt(t)), D = n === "region" ? nr(e.id, t) : Vt(t);
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-line-series",
      "data-series": e.id,
      opacity: H ? 0.25 : 1,
      "aria-hidden": H ? !0 : void 0,
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
            d: I,
            fill: "none",
            stroke: w,
            strokeWidth: d,
            role: "presentation"
          }
        ),
        a && e.data.map((k, C) => {
          const S = g(i(k)), x = M(k.y), y = o ? 0 : -1, R = !H && (o && C === s || $?.focused?.seriesId === e.id && $.focused.index === C), T = () => {
            $ && !H && $.setFocused({
              seriesId: e.id,
              index: C,
              x: i(k),
              y: k.y,
              clientX: S,
              clientY: x
            });
          }, j = () => {
            $ && $.focused?.seriesId === e.id && $.focused.index === C && $.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "circle",
            {
              cx: S,
              cy: x,
              r: R ? 5 : 3.5,
              stroke: R ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : D,
              strokeWidth: R ? 2 : 1,
              fill: R ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : w,
              className: "fdp-line-point",
              tabIndex: H ? -1 : y,
              "aria-label": `${e.label || e.id} ${i(k).toDateString()} value ${k.y}`,
              "data-series": e.id,
              "data-index": C,
              onMouseEnter: T,
              onFocus: T,
              onMouseLeave: j,
              onBlur: j
            },
            C
          );
        })
      ]
    }
  );
}, Lh = ({ polite: e = !0, format: t }) => {
  const n = Et(), [a, o] = U.useState(""), s = U.useRef("");
  return U.useEffect(() => {
    if (!n?.focused) return;
    const { focused: i, aggregated: l } = n;
    let d;
    if (l && l.length > 1) {
      const c = l.map((h) => `${h.seriesId} ${h.y}`).join("; ");
      d = `${i.x instanceof Date ? i.x.toDateString() : String(i.x)} – ${c}`;
    } else
      d = t ? t({ seriesId: i.seriesId, x: i.x, y: i.y, index: i.index }) : Fh(i.seriesId, i.x, i.y, i.index);
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
function Fh(e, t, n, a) {
  const o = t instanceof Date ? t.toDateString() : String(t);
  return `Series ${e}, point ${a + 1}, ${o}, value ${n}`;
}
const Sx = () => {
  const e = Et(), t = Bt();
  if (!e || !t || !e.focused) return null;
  const { focused: n, aggregated: a } = e, { innerWidth: o, innerHeight: s } = t, i = Math.min(Math.max(n.clientX, 0), o), l = Math.min(Math.max(n.clientY, 0), s), d = i + 8, c = l - 8, f = a.length > 1, h = n.x instanceof Date ? n.x.toDateString() : String(n.x), m = f ? h : `${h} • ${n.y}`, g = /\d+$/.exec(n.seriesId || ""), M = g ? parseInt(g[0], 10) - 1 : 0, p = pt(M >= 0 ? M : 0) || "#005eb8", u = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ r.jsxs("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 7, fill: "none", stroke: u, strokeWidth: 3 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 5, fill: "#000", stroke: u, strokeWidth: 1.5 }),
    /* @__PURE__ */ r.jsx("circle", { cx: i, cy: l, r: 2.5, fill: p, stroke: "#fff", strokeWidth: 0.5 }),
    f ? (() => {
      const $ = a.map((D) => `${D.seriesId}: ${D.y}`), I = [m, ...$], _ = I.reduce((D, k) => Math.max(D, k.length), 0), F = Math.max(90, _ * 6.2 + 16), w = 16 * I.length + 8;
      return /* @__PURE__ */ r.jsxs("g", { children: [
        /* @__PURE__ */ r.jsx("rect", { x: d, y: c - w, rx: 4, ry: 4, width: F, height: w, fill: "#212b32", opacity: 0.92 }),
        I.map((D, k) => /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - w + 6 + 16 * (k + 0.7), fill: "#fff", fontSize: 12, children: D }, k))
      ] });
    })() : /* @__PURE__ */ r.jsxs("g", { children: [
      /* @__PURE__ */ r.jsx("rect", { x: d, y: c - 24, rx: 4, ry: 4, width: Math.max(60, m.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ r.jsx("text", { x: d + 8, y: c - 8, fill: "#fff", fontSize: 12, children: m })
    ] })
  ] });
}, kx = ({
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
  const c = In(), f = !!(c && !a && !l && s === void 0), h = a || f, m = e || [], g = s !== void 0, [M, p] = U.useState(new Set(i)), u = g ? new Set(s) : M, [H, $] = U.useState(""), I = (_) => {
    if (f && c) {
      const y = c.isHidden(_);
      c.toggle(_);
      const T = m.find((v) => v.id === _)?.label || _, j = d ? d(_, y, T) : `${T} ${y ? "shown" : "hidden"}`;
      $(j);
      return;
    }
    if (!h) return;
    const F = new Set(u), w = F.has(_);
    w ? F.delete(_) : F.add(_), g || p(F);
    const D = m.filter((y) => !F.has(y.id)).map((y) => y.id), k = Array.from(F);
    l?.(D, k);
    const S = m.find((y) => y.id === _)?.label || _, x = d ? d(_, w, S) : `${S} ${w ? "shown" : "hidden"}`;
    $(x);
  };
  return /* @__PURE__ */ r.jsxs("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ r.jsx("ul", { className: `fdp-legend fdp-legend--${n}`, children: m.map((_, F) => {
      const w = _.palette || t, D = _.color || (w === "region" ? on(_.id, F) : w === "severity" ? bh(_.id, F) : w === "org-level" ? Sh(_.id, F) : pt(F));
      let k = _.stroke || (w === "region" ? nr(_.id, F) : w === "severity" ? vh(_.id, F) : w === "org-level" ? Ch(_.id, F) : Vt(F));
      if (o && k) {
        const x = k.trim().toLowerCase();
        (x === "#fff" || x === "#ffffff" || x === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(x)) && (k = "#212b32");
      }
      const C = f && c ? c.isHidden(_.id) : u.has(_.id), S = h ? {
        "aria-pressed": !C,
        "aria-label": `${_.label} (${C ? "show" : "hide"})`,
        onClick: () => I(_.id)
      } : { "aria-label": _.label };
      return /* @__PURE__ */ r.jsxs("li", { className: `fdp-legend__item${C ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: {
              backgroundColor: D,
              backgroundImage: _.patternDataUrl ? `url(${_.patternDataUrl})` : void 0,
              backgroundSize: _.patternDataUrl ? "auto" : void 0,
              borderColor: k
            },
            ...S
          }
        ),
        /* @__PURE__ */ r.jsx("span", { className: "fdp-legend__label", children: _.label })
      ] }, _.id);
    }) }),
    h && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: H })
  ] });
}, Cx = ({
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
  const { xScale: m, yScale: g } = h, p = In()?.isHidden(e.id) ?? !1, u = p && s === "fade";
  if (p && s === "remove") return null;
  const H = Et();
  U.useEffect(() => {
    if (!H) return;
    const D = e.data.map((k) => ({ x: a(k), y: k.y }));
    return H.registerSeries(e.id, D), () => H.unregisterSeries(e.id);
  }, [H, e.id, e.data, a]);
  const $ = f && f[t], I = e.color || $ || (n === "region" ? on(e.id, t) : pt(t)), _ = U.useMemo(() => d && d.length === e.data.length ? va(
    e.data,
    (D) => m(a(D)),
    (D) => {
      const k = e.data.indexOf(D);
      return g(d[k].y1);
    },
    { smooth: l }
  ) : va(
    e.data,
    (D) => m(a(D)),
    (D) => g(D.y),
    { smooth: l }
  ), [e.data, d, m, g, a, l]), F = U.useMemo(() => {
    if (d && d.length === e.data.length) {
      const x = ya().x((y) => m(a(y))).y0((y, R) => g(d[R].y0)).y1((y, R) => g(d[R].y1));
      return l && x.curve(tr), x(e.data) || "";
    }
    const [D, k] = g.domain();
    let C = i;
    C < D ? C = D : C > k && (C = k);
    const S = ya().x((x) => m(a(x))).y0(() => g(C)).y1((x) => g(x.y));
    return l && S.curve(tr), S(e.data) || "";
  }, [e.data, d, m, g, a, i, l]), w = U.useId();
  return /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-area-series",
      "data-series": e.id,
      opacity: u ? 0.25 : 1,
      "aria-hidden": u ? !0 : void 0,
      children: [
        c && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs("linearGradient", { id: w, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: I, stopOpacity: 0.25 }),
          /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: I, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: "fdp-area-series__fill",
            d: F,
            fill: c ? `url(#${w})` : I,
            ...c ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !o && /* @__PURE__ */ r.jsx("path", { d: _, fill: "none", stroke: I, strokeWidth: 1 })
      ]
    }
  );
}, jx = ({
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
  stacked: M,
  gapRatio: p = 0.15,
  minBarWidth: u,
  gradientFill: H = !0,
  gradientStrokeMatch: $ = !0,
  opacity: I = 1,
  fadedOpacity: _ = 0.25,
  flatFillOpacity: F = 1,
  colors: w
}) => {
  const D = Math.max(0, p), k = Xt(), C = Bt();
  if (!k || !C) return null;
  const { xScale: S, yScale: x } = k, R = In()?.isHidden(e.id) ?? !1, T = R && h === "fade";
  if (R && h === "remove") return null;
  const j = Et();
  U.useEffect(() => {
    if (!j) return;
    const O = e.data.map((Y) => ({ x: o(Y), y: Y.y }));
    return j.registerSeries(e.id, O), () => j.unregisterSeries(e.id);
  }, [j, e.id, e.data, o]);
  const v = typeof S.bandwidth == "function", b = v ? S.bandwidth() : void 0, B = U.useMemo(() => {
    if (b != null) return b;
    const O = g && g.length ? g : [e], Y = [];
    O.forEach((ne) => {
      ne.data.forEach((le) => {
        const ce = S(o(le));
        Number.isFinite(ce) && Y.push(ce);
      });
    });
    const Z = Y.sort((ne, le) => ne - le);
    if (Z.length <= 1) return 40;
    const W = [];
    for (let ne = 1; ne < Z.length; ne++)
      W.push(Z[ne] - Z[ne - 1]);
    return W.sort((ne, le) => ne - le), (W[Math.floor(W.length / 2)] || 40) * i;
  }, [e.data, g, S, o, i, b]), { basePerBar: A } = U.useMemo(() => {
    if (v) {
      const Z = B, W = Math.max(
        1,
        (Z - l * (n - 1)) / n
      ), ae = e.barWidth ?? d;
      let ne = ae ? Math.min(ae, Z) : W;
      if (c) {
        const le = Z * Math.min(1, Math.max(0.05, f)), ce = Math.max(
          1,
          (le - l * (n - 1)) / n
        );
        ne = ae ? Math.min(ne, ce) : ce;
      }
      return { basePerBar: ne };
    }
    const O = e.barWidth ?? d, Y = Math.max(
      1,
      (B - l * (n - 1)) / n
    );
    if (c) {
      const Z = g && g.length ? g : [e], W = [];
      Z.forEach(
        (Me) => Me.data.forEach((je) => {
          const Ne = S(o(je));
          Number.isFinite(Ne) && W.push(Ne);
        })
      ), W.sort((Me, je) => Me - je);
      const ae = [];
      for (let Me = 1; Me < W.length; Me++)
        ae.push(W[Me] - W[Me - 1]);
      ae.sort((Me, je) => Me - je);
      const le = (ae[Math.floor(ae.length / 2)] || B) * Math.min(1, Math.max(0.05, f)), ce = Math.max(
        1,
        (le - l * (n - 1)) / n
      );
      return { basePerBar: O ? Math.min(O, ce) : ce };
    }
    return O ? { basePerBar: Math.min(O, Y) } : { basePerBar: Y };
  }, [
    v,
    B,
    l,
    n,
    d,
    e.barWidth,
    c,
    f,
    g,
    S,
    o
  ]), E = U.useMemo(() => {
    if (v) return [];
    const O = [];
    return (g && g.length ? g : [e]).forEach(
      (Z) => Z.data.forEach((W) => {
        const ae = S(o(W));
        Number.isFinite(ae) && O.push(ae);
      })
    ), O.sort((Z, W) => Z - W), Array.from(new Set(O));
  }, [v, g, e, S, o]), z = U.useMemo(() => {
    if (v)
      return [];
    if (!E.length) return [];
    if (E.length === 1)
      return [
        { center: E[0], left: 0, right: C.innerWidth }
      ];
    const O = [];
    for (let Y = 0; Y < E.length; Y++) {
      const Z = E[Y], W = Y === 0 ? 0 : (E[Y - 1] + Z) / 2, ae = Y === E.length - 1 ? C.innerWidth : (Z + E[Y + 1]) / 2;
      O.push({
        center: Z,
        left: Math.max(0, W),
        right: Math.min(C.innerWidth, ae)
      });
    }
    return O;
  }, [v, E, C.innerWidth]), N = U.useMemo(() => {
    if (v || !z.length)
      return;
    const O = Math.min(1, Math.max(0.05, i)), Y = z.map((le) => Math.max(2, le.right - le.left)), Z = Y.map(
      (le) => Math.max(2, Math.min(le - 1, le * O))
    );
    let W = Math.min(...Z);
    if (u)
      if (n <= 1) {
        const le = Math.min(...Y.map((ce) => ce - 1));
        le >= u && W < u && (W = Math.min(le, u));
      } else {
        const le = Math.min(...Y.map((be) => be - 1)), ce = u * n + (n - 1) * (u * D);
        ce <= le && W < ce && (W = ce);
      }
    if (n <= 1)
      return u && W < u && Y.every((ce) => ce >= u) ? { groupWidth: u, barWidth: u } : { groupWidth: W, barWidth: W };
    let ae = W / (n + (n - 1) * D);
    return ae < 1 && (ae = 1), u && ae < u && u * n + (n - 1) * (u * D) <= W && (ae = u), { groupWidth: ae * n + (n - 1) * (ae * D), barWidth: ae };
  }, [
    v,
    z,
    i,
    n,
    D,
    u
  ]), G = w && w[t] ? w[t] : void 0, P = e.color || G || (a === "region" ? on(e.id, t) : pt(t)), se = a === "region" ? nr(e.id, t) : Vt(t), me = $ && (e.color || G) ? P : se, de = Number.isFinite(x(0)) ? x(0) : x.range()[0], J = U.useId();
  return M && M.length === e.data.length ? /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series fdp-bar-series--stacked",
      "data-series": e.id,
      opacity: T ? _ : I,
      "aria-hidden": T ? !0 : void 0,
      children: [
        H && /* @__PURE__ */ r.jsx("defs", { children: /* @__PURE__ */ r.jsxs(
          "linearGradient",
          {
            id: J,
            x1: "0%",
            y1: "0%",
            x2: "0%",
            y2: "100%",
            children: [
              /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: P, stopOpacity: 0.3 }),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "60%",
                  stopColor: P,
                  stopOpacity: 0.14
                }
              ),
              /* @__PURE__ */ r.jsx(
                "stop",
                {
                  offset: "100%",
                  stopColor: P,
                  stopOpacity: 0.06
                }
              )
            ]
          }
        ) }),
        e.data.map((O, Y) => {
          const Z = o(O), W = S(v ? O.x : Z);
          let ae, ne;
          if (v)
            ae = B, ne = W;
          else {
            const ee = z.find(
              (Q) => Math.abs(Q.center - W) < 0.5
            );
            if (!ee || !N)
              ae = A, ne = W - A / 2;
            else {
              const { groupWidth: Q } = N;
              ae = Q;
              let L = W - Q / 2;
              L < ee.left && (L = ee.left), L + Q > ee.right && (L = Math.max(ee.left, ee.right - Q)), ne = L;
            }
          }
          const le = M[Y], ce = x(le.y0), be = x(le.y1), Me = Math.min(ce, be), je = Math.abs(be - ce) || 1;
          if (!v && u && ae < u) {
            const ee = z.find(
              (Q) => Math.abs(Q.center - W) < 0.5
            );
            if (ee) {
              const Q = Math.max(2, ee.right - ee.left - 1), L = Math.min(Q, u);
              L > ae && (ae = L, ne = Math.max(
                ee.left,
                Math.min(ee.right - ae, W - ae / 2)
              ));
            }
          }
          const Ne = !T && j?.focused?.seriesId === e.id && j.focused.index === Y, X = () => {
            !j || T || j.setFocused({
              seriesId: e.id,
              index: Y,
              x: Z,
              y: le.y1 - le.y0,
              clientX: ne + ae / 2,
              clientY: Me
            });
          }, q = () => {
            j?.focused?.seriesId === e.id && j.focused.index === Y && j.clear();
          };
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ne,
              y: Me,
              width: ae,
              height: je,
              fill: H ? `url(#${J})` : P,
              ...H ? {} : { fillOpacity: F },
              stroke: Ne ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : H && $ ? P : void 0,
              strokeWidth: Ne ? 2 : 1,
              className: "fdp-bar fdp-bar--stacked",
              tabIndex: T || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${Z instanceof Date ? Z.toDateString() : Z} value ${le.y1 - le.y0}`,
              onMouseEnter: X,
              onFocus: X,
              onMouseLeave: q,
              onBlur: q
            },
            Y
          );
        })
      ]
    }
  ) : /* @__PURE__ */ r.jsxs(
    "g",
    {
      className: "fdp-bar-series",
      "data-series": e.id,
      opacity: T ? _ : I,
      "aria-hidden": T ? !0 : void 0,
      children: [
        H && /* @__PURE__ */ r.jsxs("defs", { children: [
          m === "series" && /* @__PURE__ */ r.jsxs(
            "linearGradient",
            {
              id: J,
              x1: "0%",
              y1: "0%",
              x2: "0%",
              y2: "100%",
              children: [
                /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: P, stopOpacity: 0.3 }),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "60%",
                    stopColor: P,
                    stopOpacity: 0.14
                  }
                ),
                /* @__PURE__ */ r.jsx(
                  "stop",
                  {
                    offset: "100%",
                    stopColor: P,
                    stopOpacity: 0.06
                  }
                )
              ]
            }
          ),
          m === "category" && e.data.map((O, Y) => {
            const W = w && w[Y] || (a === "region" ? on(String(O.x), Y) : pt(Y)), ae = `${J}-${Y}`;
            return /* @__PURE__ */ r.jsxs(
              "linearGradient",
              {
                id: ae,
                x1: "0%",
                y1: "0%",
                x2: "0%",
                y2: "100%",
                children: [
                  /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: W, stopOpacity: 0.3 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "60%", stopColor: W, stopOpacity: 0.14 }),
                  /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: W, stopOpacity: 0.06 })
                ]
              },
              ae
            );
          })
        ] }),
        e.data.map((O, Y) => {
          const Z = o(O), W = S(v ? O.x : Z);
          let ae, ne;
          if (v) {
            const re = B;
            if (n <= 1)
              ne = re, ae = W;
            else {
              ne = Math.max(
                1,
                re / (n + (n - 1) * D)
              );
              const te = ne * D, K = ne * n + te * (n - 1);
              ae = W + (re - K) / 2 + t * (ne + te);
            }
          } else {
            const re = z.find((te) => te.center === W);
            if (!re || !N)
              ne = A, ae = W - A / 2, u && ne < u && (ne = u, ae = W - ne / 2);
            else {
              const { barWidth: te } = N;
              ne = te;
              const K = n > 1 ? te * D : 0, oe = ne * n + K * (n - 1);
              let ye = W - oe / 2;
              ye < re.left && (ye = re.left), ye + oe > re.right && (ye = Math.max(re.left, re.right - oe)), ae = ye + t * (ne + K);
            }
            if (u && ne < u) {
              const te = z.find(
                (K) => Math.abs(K.center - W) < 0.5
              );
              if (te) {
                const K = Math.max(2, te.right - te.left - 1), oe = Math.min(K, u);
                if (oe > ne)
                  if (n <= 1)
                    ne = oe, ae = Math.max(
                      te.left,
                      Math.min(te.right - ne, W - ne / 2)
                    );
                  else {
                    const ye = oe * D, ve = oe * n + ye * (n - 1);
                    if (ve <= te.right - te.left - 1) {
                      ne = oe;
                      const ke = ve;
                      let Se = W - ke / 2;
                      Se < te.left && (Se = te.left), Se + ke > te.right && (Se = Math.max(
                        te.left,
                        te.right - ke
                      )), ae = Se + t * (ne + ye);
                    }
                  }
              }
            }
          }
          const le = ae + ne / 2, ce = x(O.y), be = Math.min(de, ce), Me = Math.abs(de - ce), je = !T && j?.focused?.seriesId === e.id && j.focused.index === Y, Ne = () => {
            !j || T || j.setFocused({
              seriesId: e.id,
              index: Y,
              x: Z,
              y: O.y,
              clientX: le,
              clientY: ce
            });
          }, X = () => {
            j?.focused?.seriesId === e.id && j.focused.index === Y && j.clear();
          }, q = m === "category" && w ? w[Y] : void 0, ee = m === "category" ? q || (a === "region" ? on(String(O.x), Y) : pt(Y)) : P, Q = m === "category" ? `${J}-${Y}` : J, L = H && $ ? ee : m === "category" ? a === "region" ? nr(String(O.x), Y) : Vt(Y) : me, V = je ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : L || ee;
          return /* @__PURE__ */ r.jsx(
            "rect",
            {
              x: ae,
              y: be,
              width: ne,
              height: Me || 1,
              fill: H ? `url(#${Q})` : ee,
              ...H ? {} : { fillOpacity: F },
              stroke: V,
              strokeWidth: je ? 2 : 1,
              className: "fdp-bar",
              tabIndex: T || !s ? -1 : 0,
              role: "graphics-symbol",
              "aria-label": `${e.label || e.id} ${Z instanceof Date ? Z.toDateString() : Z} value ${O.y}`,
              onMouseEnter: Ne,
              onFocus: Ne,
              onMouseLeave: X,
              onBlur: X
            },
            Y
          );
        })
      ]
    }
  );
}, Nx = ({
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
    return f.forEach((H) => u.add(H.x)), Array.from(u);
  }, [f]), m = U.useMemo(
    () => Math.max(0, ...f.map((u) => u.y)),
    [f]
  ), g = U.useMemo(
    () => Mo().domain(h).range([0, d]).paddingInner(a).paddingOuter(o),
    [h, d, a, o]
  ), M = U.useMemo(
    () => qn().domain([0, m]).nice().range([c, 0]),
    [m, c]
  ), p = U.useMemo(
    () => ({
      xScale: g,
      yScale: M,
      getXTicks: () => h,
      getYTicks: (u = i) => M.ticks(u)
    }),
    [g, M, h, i]
  );
  return /* @__PURE__ */ r.jsx(os.Provider, { value: p, children: s });
}, Tx = ({
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
}, $x = ({ selector: e = "figure.fdp-chart", onEnhanced: t, delay: n = 0, children: a }) => {
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
}, Dx = ({
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
  announceDelta: M = !0
}) => {
  const p = U.useId(), u = g || p, H = `${u}-label`, $ = `${u}-value`, I = `${u}-delta`, _ = typeof t == "number" && !Number.isNaN(t), F = c ? "—" : f ? "" : _ ? h ? h(t) : t.toLocaleString() : t;
  let w, D = "", k = "";
  if (a && !c && !f) {
    w = a.direction || (a.value > 0 ? "up" : a.value < 0 ? "down" : "neutral");
    const C = Math.abs(a.value), S = w === "up" ? `+${C}` : w === "down" ? `-${C}` : "0", x = a.isPercent ? "%" : "";
    if (D = `${S}${x}`, a.ariaLabel)
      k = a.ariaLabel;
    else {
      const y = a.invert ? w === "down" : w === "up";
      k = `${w === "neutral" ? "no change" : w === "up" ? "up" : "down"} ${C}${x}${w === "neutral" ? "" : y ? " (improvement)" : " (worse)"}`;
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
      "aria-labelledby": H,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ r.jsx("h3", { id: H, className: "fdp-metric-card__label", children: e }),
          l && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__metadata", children: l })
        ] }),
        /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ r.jsxs("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ r.jsx("div", { id: $, className: "fdp-metric-card__value", children: c ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : f ? /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__error", role: "alert", children: f }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
              /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__number", children: F }),
              n && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__unit", children: n })
            ] }) }),
            i && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__subtitle", children: i })
          ] }),
          a && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ r.jsxs(
            "div",
            {
              id: I,
              "aria-label": k,
              className: Qn(
                "fdp-metric-card__delta",
                w && `fdp-metric-card__delta--${w}`
              ),
              children: [
                /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-value", children: D }),
                a.period && /* @__PURE__ */ r.jsx("span", { className: "fdp-metric-card__delta-period", children: a.period })
              ]
            }
          ) }),
          d && d.length > 0 && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        M && a && !a.ariaLabel && !c && !f && /* @__PURE__ */ r.jsx("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: k })
      ] })
    }
  );
};
var zt = /* @__PURE__ */ ((e) => (e.Up = "Up", e.Down = "Down", e.Neither = "Neither", e))(zt || {}), Ge = /* @__PURE__ */ ((e) => (e.Improvement = "improvement", e.Concern = "concern", e.Neither = "neither", e.None = "none", e))(Ge || {}), At = /* @__PURE__ */ ((e) => (e.Pass = "pass", e.Fail = "fail", e.None = "none", e))(At || {});
const he = (e) => typeof e == "number" && Number.isFinite(e), Ah = (e) => e.reduce((t, n) => t + n, 0), ft = (e) => e.length ? Ah(e) / e.length : NaN;
function Bh(e) {
  const t = [];
  let n = [];
  for (const a of e)
    a.baseline && n.length && (t.push(n), n = []), n.push(a);
  return n.length && t.push(n), t;
}
function Ci(e, t) {
  const n = new Array(e.length).fill(null);
  let a = null;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (!t[o] && he(s)) {
      if (a !== null) {
        const i = e[a];
        n[o] = he(i) ? Math.abs(s - i) : null;
      }
      a = o;
    }
  }
  return n;
}
function ji(e, t) {
  const n = e.filter((s) => he(s));
  if (!n.length) return { mrMean: NaN, mrUcl: NaN };
  let a = ft(n), o = 3.267 * a;
  if (t) {
    const s = n.filter((i) => i <= o);
    s.length && s.length !== n.length && (a = ft(s), o = 3.267 * a);
  }
  return { mrMean: a, mrUcl: o };
}
function Eh(e, t) {
  if (!he(e) || !he(t))
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
const Rh = 0.2777, Ph = 3.6, Hh = (e) => he(e) && e >= 0 ? Math.pow(e, Rh) : null, Pt = (e) => he(e) && e >= 0 ? Math.pow(e, Ph) : null, en = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function zh(e, t) {
  return !(e > 0 && e < 1) || !(t > 0 && t < 1) ? NaN : Math.log(1 - e) / Math.log(1 - t);
}
function Wh(e) {
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
  const t = 1 / (e + 1), n = (f) => zh(f, t) - 1, a = n(0.5), o = Math.max(0, n(en.three.low)), s = n(en.three.high), i = Math.max(0, n(en.one.low)), l = n(en.one.high), d = Math.max(0, n(en.two.low)), c = n(en.two.high);
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
function Oh(e, t, n) {
  const a = e.map((k) => he(k) ? Hh(k) : null), o = Ci(a, t), {
    mrMean: s
    /*, mrUcl: _mrUclY_raw*/
  } = ji(o, !!n), i = a.filter((k, C) => !t[C] && he(k)), l = i.length ? ft(i) : NaN;
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
  const d = 2.66, c = 2 / 3 * d, f = 1 / 3 * d, h = l + d * s, m = l - d * s, g = l + c * s, M = l - c * s, p = l + f * s, u = l - f * s, H = Pt(l), $ = Pt(h), I = m <= 0 ? null : Pt(m), _ = Pt(p), F = u <= 0 ? null : Pt(u), w = Pt(g), D = M <= 0 ? null : Pt(M);
  return {
    center: H ?? null,
    upperProcessLimit: $ ?? null,
    lowerProcessLimit: I ?? null,
    upperTwoSigma: w ?? null,
    lowerTwoSigma: D ?? null,
    upperOneSigma: _ ?? null,
    lowerOneSigma: F ?? null,
    mr: o,
    mrMean: s,
    mrUcl: he(s) ? 3.267 * s : null
  };
}
function Ni(e) {
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
    retroactiveOppositeShiftNeutralisation: !1,
    retroactiveShiftDeltaSigmaThreshold: 0.5,
    ...o
  };
  if (!Array.isArray(a)) throw new Error("data must be an array of rows");
  const i = a.map((p, u) => ({
    rowId: u + 1,
    x: p.x,
    value: he(p.value) ? p.value : null,
    ghost: !!p.ghost,
    baseline: !!p.baseline,
    target: he(p.target) ? p.target : null
  })), l = Bh(i), d = [], c = [], h = i.filter(
    (p) => !p.ghost && he(p.value)
  ).length >= (s.minimumPoints ?? 13);
  let m = 0;
  const g = {};
  for (const p of l) {
    m++;
    const u = p.map((x) => x.value), H = p.map((x) => x.ghost);
    let $ = new Array(u.length).fill(null), I = NaN, _ = NaN, F = NaN, w = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (t === "XmR") {
      $ = Ci(u, H);
      const x = u.filter(
        (R, T) => !H[T] && he(R)
      );
      I = x.length ? ft(x) : NaN;
      const y = ji(
        $,
        !!s.excludeMovingRangeOutliers
      );
      _ = y.mrMean, F = y.mrUcl, w = Eh(I, _);
    } else if (t === "T") {
      const x = Oh(
        u,
        H,
        !!s.excludeMovingRangeOutliers
      );
      $ = x.mr, _ = x.mrMean ?? NaN, F = x.mrUcl ?? NaN, I = x.center ?? NaN, w = {
        upperProcessLimit: x.upperProcessLimit,
        lowerProcessLimit: x.lowerProcessLimit,
        upperTwoSigma: x.upperTwoSigma,
        lowerTwoSigma: x.lowerTwoSigma,
        upperOneSigma: x.upperOneSigma,
        lowerOneSigma: x.lowerOneSigma
      };
    } else if (t === "G") {
      const x = u.filter(
        (T, j) => !H[j] && he(T)
      ), y = x.length ? ft(x) : NaN, R = Wh(y);
      I = R.cl ?? NaN, w = {
        upperProcessLimit: R.ucl,
        lowerProcessLimit: R.lcl,
        upperTwoSigma: R.twoHigh,
        lowerTwoSigma: R.twoLow,
        upperOneSigma: R.oneHigh,
        lowerOneSigma: R.oneLow
      }, $ = new Array(u.length).fill(null), _ = NaN, F = NaN;
    } else
      c.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${t}' – supported: XmR, T, G.`,
        context: { chartType: t }
      });
    const D = p.map((x, y) => {
      const R = !x.ghost && he(x.value) ? u.slice(0, y + 1).filter((b, B) => !H[B] && he(b)).length : 0, T = h, j = T ? w : {
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
        value: he(x.value) ? x.value : null,
        ghost: x.ghost,
        partitionId: m,
        pointRank: R,
        mean: T && he(I) ? I : null,
        mr: he($[y]) ? $[y] : null,
        mrMean: T && he(_) ? _ : null,
        mrUcl: T && he(F) ? F : null,
        upperProcessLimit: he(j.upperProcessLimit) ? j.upperProcessLimit : null,
        lowerProcessLimit: he(j.lowerProcessLimit) ? j.lowerProcessLimit : null,
        upperTwoSigma: he(j.upperTwoSigma) ? j.upperTwoSigma : null,
        lowerTwoSigma: he(j.lowerTwoSigma) ? j.lowerTwoSigma : null,
        upperOneSigma: he(j.upperOneSigma) ? j.upperOneSigma : null,
        lowerOneSigma: he(j.lowerOneSigma) ? j.lowerOneSigma : null,
        target: he(x.target) ? x.target : null,
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
        upperBaseline: T && he(I) ? I : null,
        lowerBaseline: T && he(I) ? I : null,
        movingRangeHighPointValue: T && he(F) ? F : null,
        ghostValue: x.ghost && he(x.value) ? x.value : null,
        ghostFlag: !!x.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null
      };
    });
    g[m] = D.filter(
      (x) => !x.ghost && he(x.value)
    ).length;
    const k = s.specialCauseShiftPoints ?? 6, C = s.specialCauseTrendPoints ?? 6, S = [];
    for (let x = 0; x < D.length; x++) {
      const y = D[x], R = y.value;
      if (!y.ghost && he(R) && S.push(x), !(he(y.mean) && he(y.upperProcessLimit) && he(y.lowerProcessLimit)) || y.ghost || !he(R)) {
        d.push(y);
        continue;
      }
      y.specialCauseSinglePointAbove = he(y.upperProcessLimit) ? R > y.upperProcessLimit : !1, y.specialCauseSinglePointBelow = he(y.lowerProcessLimit) ? R < y.lowerProcessLimit : !1, d.push(y);
    }
    if (S.length) {
      const x = (T) => D[T];
      let y = [], R = [];
      for (const T of S) {
        const j = x(T);
        if (!he(j.mean) || !he(j.value)) {
          y = [], R = [];
          continue;
        }
        if (j.value > j.mean ? (y.push(T), R = []) : j.value < j.mean ? (R.push(T), y = []) : (y = [], R = []), y.length >= k)
          for (const v of y) x(v).specialCauseShiftHigh = !0;
        if (R.length >= k)
          for (const v of R) x(v).specialCauseShiftLow = !0;
      }
      for (let T = 0; T <= S.length - 3; T++) {
        const v = S.slice(T, T + 3).map(x);
        if (!v.every((P) => he(P.mean) && he(P.value))) continue;
        const b = v[0].mean, B = v.every((P) => P.value > b), A = v.every((P) => P.value < b);
        if (!B && !A) continue;
        const E = v[0].upperTwoSigma ?? 1 / 0, z = v[0].lowerTwoSigma ?? -1 / 0, N = v.filter((P) => P.value > E), G = v.filter((P) => P.value < z);
        if (B && N.length >= 2)
          for (const P of N) P.specialCauseTwoOfThreeAbove = !0;
        if (A && G.length >= 2)
          for (const P of G) P.specialCauseTwoOfThreeBelow = !0;
      }
      if (s.enableFourOfFiveRule)
        for (let T = 0; T <= S.length - 5; T++) {
          const v = S.slice(T, T + 5).map(x);
          if (!v.every((N) => he(N.mean) && he(N.value))) continue;
          const b = v[0].mean;
          if (!v.every((N) => N.value > b) && !v.every((N) => N.value < b)) continue;
          const B = v[0].upperOneSigma ?? 1 / 0, A = v[0].lowerOneSigma ?? -1 / 0, E = v.filter((N) => N.value > B), z = v.filter((N) => N.value < A);
          if (v.every((N) => N.value > b) && E.length >= 4)
            for (const N of E) N.specialCauseFourOfFiveAbove = !0;
          if (v.every((N) => N.value < b) && z.length >= 4)
            for (const N of z) N.specialCauseFourOfFiveBelow = !0;
        }
      for (let T = 0; T <= S.length - C; T++) {
        const j = S.slice(T, T + C), v = j.map(x);
        if (!v.every((A) => he(A.value))) continue;
        let b = !0, B = !0;
        for (let A = 1; A < v.length && (v[A].value > v[A - 1].value || (b = !1), v[A].value < v[A - 1].value || (B = !1), !(!b && !B)); A++)
          ;
        if (b) for (const A of j) x(A).specialCauseTrendIncreasing = !0;
        if (B) for (const A of j) x(A).specialCauseTrendDecreasing = !0;
      }
    }
    if (s.maximumPointsPartition && Number.isFinite(s.maximumPointsPartition)) {
      const x = s.maximumPointsPartition;
      let y = 0;
      for (const R of d.filter((T) => T.partitionId === m))
        !R.ghost && he(R.value) && y++, y > x && (R.mean = R.upperProcessLimit = R.lowerProcessLimit = null, R.upperTwoSigma = R.lowerTwoSigma = R.upperOneSigma = R.lowerOneSigma = null);
    }
  }
  if (s.retroactiveOppositeShiftNeutralisation) {
    const p = s.specialCauseShiftPoints ?? 6, u = Array.from(new Set(d.map((H) => H.partitionId)));
    for (const H of u) {
      const $ = d.filter((b) => b.partitionId === H);
      if (!$.length) continue;
      let I = null, _ = null;
      for (let b = 0; b < $.length && ($[b].specialCauseShiftHigh && I === null && (I = b), $[b].specialCauseShiftLow && _ === null && (_ = b), !(I !== null && _ !== null)); b++)
        ;
      if (I === null || _ === null) continue;
      const F = n === "Up", w = F ? I : _;
      if ((F ? _ : I) >= w) continue;
      const k = F ? "specialCauseShiftHigh" : "specialCauseShiftLow", C = $.map((b, B) => ({ r: b, idx: B })).filter((b) => b.r[k]).map((b) => b.idx);
      if (C.length < p) continue;
      let S = null;
      for (const b of $)
        if (he(b.upperProcessLimit) && he(b.mean)) {
          const B = b.upperProcessLimit - b.mean;
          if (B > 0) {
            S = B / 3;
            break;
          }
        }
      if (!S || S <= 0) continue;
      const x = w, y = [];
      for (let b = x - 1; b >= 0 && y.length < p; b--) {
        const B = $[b].value;
        he(B) && !$[b].ghost && y.unshift(B);
      }
      if (y.length < p) continue;
      const R = C.map((b) => $[b].value).filter(he);
      if (!R.length) continue;
      const T = ft(y), j = ft(R);
      if (!((F ? (j - T) / S : (T - j) / S) < s.retroactiveShiftDeltaSigmaThreshold))
        for (let b = 0; b < w; b++) {
          const B = $[b];
          F ? (B.specialCauseShiftLow = !1, B.specialCauseTwoOfThreeBelow = !1, B.specialCauseFourOfFiveBelow = !1) : (B.specialCauseShiftHigh = !1, B.specialCauseTwoOfThreeAbove = !1, B.specialCauseFourOfFiveAbove = !1);
        }
    }
  }
  for (let p = 0; p < d.length; p++) {
    const u = d[p];
    if (u.ghost || !he(u.value) || u.mean === null) {
      u.variationIcon = "none";
      continue;
    }
    const H = u.specialCauseSinglePointAbove || u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || u.specialCauseTrendIncreasing, $ = u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || u.specialCauseTrendDecreasing;
    if (s.collapseClusterRules && (u.specialCauseTwoOfThreeAbove && u.specialCauseFourOfFiveAbove && (u.specialCauseTwoOfThreeAbove = !1), u.specialCauseTwoOfThreeBelow && u.specialCauseFourOfFiveBelow && (u.specialCauseTwoOfThreeBelow = !1)), s.precedenceStrategy === "directional_first") {
      const F = (s.specialCauseTrendPoints ?? 6) - 1;
      let w = !1;
      if (F >= 3 && he(u.value)) {
        const C = [];
        for (let S = p; S >= 0 && C.length < F; S--) {
          const x = d[S].value;
          d[S].ghost || !he(x) || C.unshift(x);
        }
        if (C.length === F) {
          let S = 0;
          for (let x = 1; x < C.length; x++)
            n === "Down" ? C[x] <= C[x - 1] && S++ : n === "Up" && C[x] >= C[x - 1] && S++;
          w = S >= F - 2;
        }
      }
      const D = n === "Up" ? H : $, k = n === "Up" ? $ : H;
      if (D && !k)
        u.variationIcon = "improvement";
      else if (!D && k) {
        const C = u.specialCauseSinglePointAbove || u.specialCauseSinglePointBelow || u.specialCauseTwoOfThreeAbove || u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && (u.specialCauseFourOfFiveAbove || u.specialCauseFourOfFiveBelow) || u.specialCauseShiftHigh || u.specialCauseShiftLow;
        s.emergingDirectionGrace && w && !C ? u.variationIcon = "neither" : u.variationIcon = "concern";
      } else D && k && s.emergingDirectionGrace && (w || u.specialCauseTrendIncreasing || u.specialCauseTrendDecreasing) ? u.variationIcon = "improvement" : u.variationIcon = "neither";
    } else
      n === "Up" ? u.variationIcon = H ? "improvement" : $ ? "concern" : "neither" : n === "Down" ? u.variationIcon = $ ? "improvement" : H ? "concern" : "neither" : u.variationIcon = "neither";
    if (s.suppressIsolatedFavourablePoint && u.variationIcon === "improvement" && p > 0 && p < d.length - 1) {
      const _ = n === "Up" && u.specialCauseSinglePointAbove, F = n === "Down" && u.specialCauseSinglePointBelow, w = n === "Up" && (u.specialCauseTwoOfThreeAbove || s.enableFourOfFiveRule && u.specialCauseFourOfFiveAbove || u.specialCauseShiftHigh || u.specialCauseTrendIncreasing) || n === "Down" && (u.specialCauseTwoOfThreeBelow || s.enableFourOfFiveRule && u.specialCauseFourOfFiveBelow || u.specialCauseShiftLow || u.specialCauseTrendDecreasing);
      (_ || F) && !w && (u.variationIcon = "none", u.specialCauseImprovementValue = null);
    }
    const I = H || $;
    if (u.specialCauseImprovementValue = I && u.variationIcon === "improvement" ? u.value : null, u.specialCauseConcernValue = I && u.variationIcon === "concern" ? u.value : null, u.specialCauseNeitherValue = I && u.variationIcon === "neither" ? u.value : null, he(u.value) && u.mean !== null) {
      u.assuranceIcon = "none";
      const _ = i[u.rowId - 1];
      if (he(_.target)) {
        const F = _.target;
        s.assuranceCapabilityMode && he(u.upperProcessLimit) && he(u.lowerProcessLimit) ? n === "Up" ? u.lowerProcessLimit !== null && u.lowerProcessLimit > F ? u.assuranceIcon = "pass" : u.upperProcessLimit !== null && u.upperProcessLimit < F ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : n === "Down" ? u.upperProcessLimit !== null && u.upperProcessLimit < F ? u.assuranceIcon = "pass" : u.lowerProcessLimit !== null && u.lowerProcessLimit > F ? u.assuranceIcon = "fail" : u.assuranceIcon = "none" : u.assuranceIcon = "none" : n === "Down" ? u.assuranceIcon = u.value <= F ? "pass" : "fail" : n === "Up" ? u.assuranceIcon = u.value >= F ? "pass" : "fail" : u.assuranceIcon = "none";
      }
    }
  }
  if ((s.minimumPointsWarning ?? !1) && !h) {
    const p = i.filter(
      (u) => !u.ghost && he(u.value)
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
    for (const H of d)
      !H.ghost && he(H.value) && u++, u > p && (H.mean = H.upperProcessLimit = H.lowerProcessLimit = null, H.upperTwoSigma = H.lowerTwoSigma = H.upperOneSigma = H.lowerOneSigma = null);
  }
  if (s.nullValueWarning && (t === "XmR" || t === "G")) {
    const p = i.filter(
      (u) => !u.ghost && (u.value === null || u.value === void 0 || !he(u.value))
    ).length;
    p && c.push({
      code: "null_values_excluded",
      category: "data",
      severity: "info",
      message: `${p} null/missing value(s) excluded from calculations.`,
      context: { nullCount: p }
    });
  }
  if (s.targetSuppressedWarning && (t === "T" || t === "G") && i.some((u) => he(u.target)) && c.push({
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
  let M;
  if (s.baselineSuggest) {
    const p = d, u = s.baselineSuggestStabilityPoints, H = s.baselineSuggestMinGap, $ = s.baselineSuggestMinDeltaSigma, I = s.baselineSuggestScoreThreshold, _ = [];
    let F = 0;
    for (let w = 0; w < p.length; w++) {
      let D = function(x) {
        return !!k[x] && !C?.[x];
      };
      const k = p[w];
      w > 0 && p[w - 1].partitionId !== k.partitionId && (F = w);
      const C = p[w - 1], S = [];
      (D("specialCauseShiftHigh") || D("specialCauseShiftLow")) && S.push({ reason: "shift", index: w }), (D("specialCauseTrendIncreasing") || D("specialCauseTrendDecreasing")) && S.push({ reason: "trend", index: w }), (D("specialCauseSinglePointAbove") || D("specialCauseSinglePointBelow")) && S.push({ reason: "point", index: w });
      for (const x of S) {
        if (x.index - F < H) continue;
        const y = Math.max(0, x.index - u), R = x.index - 1;
        if (R - y + 1 < u) continue;
        const T = x.index, j = x.index + u - 1;
        if (j >= p.length) continue;
        const v = p.slice(y, R + 1).map((Y) => Y.value).filter(he), b = p.slice(T, j + 1).map((Y) => Y.value).filter(he);
        if (v.length < u || b.length < u) continue;
        const B = p[x.index];
        let A = null;
        if (he(B.upperProcessLimit) && he(B.mean)) {
          const Y = B.upperProcessLimit - B.mean;
          Y > 0 && (A = Y / 3);
        }
        if (!A || A <= 0) continue;
        const E = ft(v), z = ft(b), N = z - E;
        if (Math.abs(N) < $ * A) continue;
        const P = p.slice(T, j + 1).filter(
          (Y) => Y.variationIcon === "concern"
          /* Concern */
        ).length;
        if (P > 1) continue;
        const se = (Y) => {
          const Z = ft(Y);
          return Y.length ? Y.reduce((W, ae) => W + (ae - Z) * (ae - Z), 0) / Y.length : 0;
        }, me = se(v), de = se(b);
        let J = x.reason === "shift" ? 90 : x.reason === "trend" ? 70 : 60;
        if (de < me && (J += 10), J -= P * 15, J < I) continue;
        const O = _.find((Y) => Y.index === x.index);
        if (O) {
          const Y = (Z) => Z === "shift" ? 3 : Z === "trend" ? 2 : 1;
          (Y(x.reason) > Y(O.reason) || J > O.score) && (O.reason = x.reason, O.score = J, O.deltaMean = N, O.oldMean = E, O.newMean = z, O.window = [T, j]);
        } else
          _.push({
            index: x.index,
            reason: x.reason,
            score: J,
            deltaMean: N,
            oldMean: E,
            newMean: z,
            window: [T, j]
          });
      }
      w > 0 && p[w - 1].partitionId !== p[w].partitionId && (F = w);
    }
    _.sort((w, D) => w.index - D.index), M = _;
  }
  return { rows: d, warnings: c, ...M ? { suggestedBaselines: M } : {} };
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
function Uh(e) {
  switch (e) {
    case At.Pass:
      return "Target met";
    case At.Fail:
      return "Target not met";
    default:
      return null;
  }
}
function Gh(e, t, n) {
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
function Ti(e) {
  return e ? lt[e]?.token ?? lt.neither.token : lt.neither.token;
}
function Yh(e) {
  return e ? lt[e]?.hex ?? lt.neither.hex : lt.neither.hex;
}
const $i = ({
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
        const Z = requestAnimationFrame(() => {
          c(null), m.current = null;
        });
        m.current = Z;
      }
      return () => {
        m.current && (cancelAnimationFrame(m.current), m.current = null);
      };
    }
  }, [i, i?.focused, f]);
  const g = i && (i.focused || (f ? d : null) || d), [M, p] = U.useState(!1);
  U.useEffect(() => {
    const Z = requestAnimationFrame(() => p(!0));
    return () => cancelAnimationFrame(Z);
  }, [g?.index]);
  const u = l?.innerWidth ?? 0, H = l?.innerHeight ?? 0, $ = g ? Math.min(Math.max(g.clientX, 0), u) : 0, I = g ? Math.min(Math.max(g.clientY, 0), H) : 0, F = l.ref?.current;
  if (!g)
    return null;
  const w = e?.[g.index], D = ls(w).map((Z) => is[Z].tooltip), k = g.x instanceof Date ? g.x : new Date(g.x), C = s ? s(k) : k.toDateString(), S = o ? `${o}` : "", x = a || S ? `${g.y}${S ? "" + S : " "}${a ? " " + a : ""}` : `${g.y}`, y = cs(w?.variationIcon), R = Uh(w?.assuranceIcon), T = Gh(
    t.mean ?? null,
    t.sigma,
    g.y
  ), j = n ? n(g.index, { x: g.x, y: g.y }) : void 0, v = y || R || T, b = D.length > 0, B = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)", A = Ti(w?.variationIcon), E = 6.2, N = [
    j || "",
    `${C} • ${x}`
  ].filter(Boolean).reduce(
    (Z, W) => Math.max(Z, W.length * E + 32),
    0
  ), G = 200, P = 440, se = Math.min(P, Math.max(G, N));
  let me = $ + 12, J = (l.margin?.top ?? 0) + I + 16;
  me + se > u && (me = $ - -60 - se), me < 0 && (me = Math.max(0, u - se));
  const O = g ? `spc-tooltip-${g.index}` : "spc-tooltip", Y = F ? Rl(
    /* @__PURE__ */ r.jsx(
      "div",
      {
        id: O,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (M ? " is-visible" : ""),
        style: {
          position: "absolute",
          left: me,
          top: J,
          width: se,
          maxWidth: P,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": M ? "false" : "true",
        "data-floating": !0,
        "data-placement": me + se + 12 > u ? "left" : "right",
        onPointerEnter: () => {
          h(!0), m.current && (cancelAnimationFrame(m.current), m.current = null);
        },
        onPointerLeave: () => {
          if (h(!1), !i?.focused) {
            const Z = requestAnimationFrame(() => {
              c(null), m.current = null;
            });
            m.current = Z;
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
          v && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
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
          R && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const Z = R.toLowerCase(), ae = !(Z.includes("not met") || Z.includes("not achieved")) && /(^|\b)(met|achieved)(\b|$)/.test(Z);
              return /* @__PURE__ */ r.jsx(
                et,
                {
                  text: R,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${ae ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${R}`
                }
              );
            })() })
          ] }),
          T && /* @__PURE__ */ r.jsxs("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ r.jsx("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ r.jsx(
              et,
              {
                text: (() => {
                  const Z = T.toLowerCase();
                  return Z.startsWith("within 1") ? "≤1σ" : Z.startsWith("1–2") ? "1–2σ" : Z.startsWith("2–3") ? "2–3σ" : Z.startsWith(">3") ? ">3σ" : T;
                })(),
                color: T.includes(">3") ? "orange" : T.includes("2–3") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${T}`,
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
                children: D.map((Z) => {
                  const W = y ? y.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : y.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--rule" : "fdp-spc-tag--rule";
                  return /* @__PURE__ */ r.jsx(
                    et,
                    {
                      text: Z,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${W}`
                    },
                    Z
                  );
                })
              }
            )
          ] })
        ] })
      }
    ),
    F
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
            cx: $,
            cy: I,
            r: 7,
            fill: "none",
            stroke: B,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: $,
            cy: I,
            r: 5,
            fill: "#000",
            stroke: B,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ r.jsx(
          "circle",
          {
            cx: $,
            cy: I,
            r: 2.5,
            fill: A,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        Y
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
}, Di = () => ({
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
const Vh = {
  pass: "#00B0F0",
  // blue
  fail: "#E46C0A",
  // orange
  uncertain: "#A6A6A6"
  // grey
}, qh = {
  pass: "P",
  fail: "F",
  uncertain: "?"
};
var Je = /* @__PURE__ */ ((e) => (e.HigherIsBetter = "higher_is_better", e.LowerIsBetter = "lower_is_better", e.ContextDependent = "context_dependent", e))(Je || {}), _e = /* @__PURE__ */ ((e) => (e.Higher = "higher", e.Lower = "lower", e))(_e || {}), Ke = /* @__PURE__ */ ((e) => (e.Improving = "improving", e.Deteriorating = "deteriorating", e.No_Judgement = "no_judgement", e.None = "none", e))(Ke || {}), Ie = /* @__PURE__ */ ((e) => (e.SpecialCauseImproving = "special_cause_improving", e.SpecialCauseDeteriorating = "special_cause_deteriorating", e.CommonCause = "common_cause", e.SpecialCauseNoJudgement = "special_cause_no_judgement", e))(Ie || {});
const Kh = (e) => {
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
  e.text || (e.text = Kh(e.hex));
});
const Ii = (e) => ds[e], us = (e) => ds[e].judgement || "none", xo = {
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
function Xh(e, t) {
  let n;
  return e === "common_cause" ? n = xo.common : n = xo.special[t === "lower" ? "lower" : "higher"], n.map((a) => ({ ...a }));
}
const Mi = (e) => {
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
function Zh(e, t) {
  const { state: n, direction: a, polarity: o } = Mi(e), s = us(n), i = a === _e.Higher ? "above" : "below", l = a === _e.Higher ? "upwards" : "downwards", d = (() => {
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
    mid: M,
    end: p,
    triStart: u,
    triMid: H,
    triEnd: $
  } = Di(), { state: I, direction: _, polarity: F } = $e(
    () => Mi(e),
    [e]
  ), w = $e(() => Ii(I), [I]), D = $e(() => us(I), [I]), k = D === Ke.Improving || D === Ke.Deteriorating;
  let C = "";
  a && k && (d === "polarity" ? F === Je.HigherIsBetter ? C = "H" : F === Je.LowerIsBetter ? C = "L" : C = "" : C = _ === _e.Higher ? "H" : "L"), c !== void 0 && (C = c);
  const S = I !== Ie.CommonCause, x = I === Ie.SpecialCauseNoJudgement, y = st("common-cause", "#A6A6A6"), R = S ? w.hex : y, T = $e(
    () => Xh(I, _),
    [I, _]
  ), j = n || `${w.label}${C ? _ === _e.Higher ? " – Higher" : " – Lower" : ""}`, v = Zh(
    e
  );
  if (i === "triangleWithRun") {
    const z = [
      [150, 90],
      [100, 190],
      [200, 190]
    ], N = [
      [150, 140 + 100 / 2],
      [150 - 100 / 2, 140 - 100 / 2],
      [150 + 100 / 2, 140 - 100 / 2]
    ];
    let G = null;
    I === Ie.SpecialCauseImproving || I === Ie.SpecialCauseDeteriorating ? G = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === _e.Higher ? z : N).map((ae) => ae.join(",")).join(" "),
        fill: w.hex,
        stroke: w.hex,
        strokeWidth: 6,
        transform: _ === _e.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : I === Ie.SpecialCauseNoJudgement && (G = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === _e.Higher ? z.map((ae) => ae.join(",")).join(" ") : N.map((ae) => ae.join(",")).join(" "),
        fill: w.hex,
        stroke: w.hex,
        strokeWidth: 6,
        transform: _ === _e.Higher ? "translate(0,-6)" : "translate(0,6)"
      }
    ));
    const P = Math.max(0, Math.min(5, Math.floor(l || 0))), se = I === Ie.CommonCause ? 160 : _ === _e.Higher ? 210 : 70, me = 10, de = 26, J = 150 - 2 * de, O = I === Ie.SpecialCauseImproving ? st("improvement", "#00B0F0") : I === Ie.SpecialCauseDeteriorating ? st("concern", "#E46C0A") : y, Y = Array.from({ length: 5 }).map((ae, ne) => {
      const ce = (I === Ie.SpecialCauseImproving || I === Ie.SpecialCauseDeteriorating) && ne >= 5 - P ? O : y;
      return /* @__PURE__ */ r.jsx(
        "circle",
        {
          cx: J + ne * de,
          cy: se,
          r: me,
          fill: ce,
          stroke: ce,
          strokeWidth: 1
        },
        ne
      );
    }), Z = ia(
      w.hex,
      h,
      m,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "75%", opacity: H },
        { offset: "100%", opacity: $ }
      ]
    ), W = I === Ie.CommonCause || _ === _e.Higher ? "translate(0,-10)" : "translate(0,20)";
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": j,
        "aria-description": v,
        ...f,
        children: [
          Z,
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
              stroke: w.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ r.jsxs("g", { transform: W, children: [
            G,
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
            Y
          ] })
        ]
      }
    );
  }
  if (i === "triangle") {
    const z = [
      [150, 75],
      [75, 225],
      [225, 225]
    ], N = [
      [150, 150 + 150 / 2],
      [150 - 150 / 2, 150 - 150 / 2],
      [150 + 150 / 2, 150 - 150 / 2]
    ], G = [
      [150 - 150 / 2, 150 + 150 / 2],
      [150 + 150 / 2, 150 + 150 / 2]
    ];
    let P = null;
    I === Ie.SpecialCauseImproving || I === Ie.SpecialCauseDeteriorating ? P = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: (_ === _e.Higher ? z : N).map((me) => me.join(",")).join(" "),
        fill: w.hex,
        stroke: w.hex,
        strokeWidth: 8,
        transform: _ === _e.Higher ? "translate(0, -10)" : "translate(0, 10)"
      }
    ) : I === Ie.SpecialCauseNoJudgement ? P = /* @__PURE__ */ r.jsx(
      "polygon",
      {
        points: _ === _e.Higher ? z.map((me) => me.join(",")).join(" ") : N.map((me) => me.join(",")).join(" "),
        fill: w.hex,
        stroke: w.hex,
        strokeWidth: 8,
        transform: _ === _e.Higher ? "translate(0, -15)" : "translate(0, 15)"
      }
    ) : I === Ie.CommonCause && (P = /* @__PURE__ */ r.jsx(
      "line",
      {
        x1: G[0][0],
        y1: G[0][1],
        x2: G[1][0],
        y2: G[1][1],
        stroke: w.hex,
        strokeWidth: 32,
        strokeLinecap: "square",
        transform: "translate(0, -75)"
      }
    ));
    const se = ia(
      w.hex,
      h,
      m,
      o,
      s,
      [
        { offset: "0%", opacity: u },
        { offset: "65%", opacity: H },
        { offset: "100%", opacity: $ }
      ]
    );
    return /* @__PURE__ */ r.jsxs(
      "svg",
      {
        width: t,
        height: t,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": j,
        "aria-description": v,
        ...f,
        children: [
          se,
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
              stroke: w.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          P,
          C && (I === Ie.SpecialCauseImproving || I === Ie.SpecialCauseDeteriorating) && /* @__PURE__ */ r.jsx(
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
  const b = ia(
    w.hex,
    h,
    m,
    o,
    s,
    [
      { offset: "0%", opacity: g },
      { offset: "65%", opacity: M },
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
      "aria-label": j,
      "aria-description": v,
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
            stroke: w.hex,
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
            fill: w.hex,
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
            fill: w.hex,
            ..._ === _e.Lower ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
          T.length === 5 && /* @__PURE__ */ r.jsx(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: y,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${T.map((B) => `${B.cx} ${B.cy}`).join(" L ")}`
            }
          ),
          T.map((B, A) => {
            const z = A >= T.length - 2 && S ? R : y, N = z;
            return /* @__PURE__ */ r.jsx(
              "circle",
              {
                stroke: N,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill: z,
                cx: B.cx,
                cy: B.cy,
                r: 16
              },
              A
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
  const c = Hn(), f = Hn(), { start: h, mid: m, end: g } = Di(), M = o || Vh[e], p = (i || qh[e]).slice(0, 2), u = n || `Assurance ${e}`;
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
            /* @__PURE__ */ r.jsx("stop", { offset: "65%", stopColor: M, stopOpacity: parseFloat(m) }),
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
            children: /* @__PURE__ */ r.jsx("tspan", { x: 60, y: 184, children: p })
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
hs.displayName = "SPCAssuranceIcon";
const Jh = ({
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
  targets: M,
  baselines: p,
  ghosts: u,
  settings: H,
  narrationContext: $,
  gradientSequences: I = !1,
  processLineWidth: _ = 2
}) => {
  const F = U.useMemo(() => {
    const z = e.map((N, G) => ({
      x: N.x,
      value: N.y,
      target: M?.[G] ?? void 0,
      baseline: p?.[G] ?? void 0,
      ghost: u?.[G] ?? void 0
    }));
    try {
      return Ni({
        chartType: c,
        metricImprovement: f,
        data: z,
        settings: H
      });
    } catch {
      return null;
    }
  }, [
    e,
    M,
    p,
    u,
    c,
    f,
    H
  ]), w = F?.rows.slice().reverse().find((z) => z.mean != null), D = w?.mean ?? null, k = w?.upperProcessLimit ?? null, C = w?.lowerProcessLimit ?? null, S = w?.upperOneSigma ?? null, x = w?.lowerOneSigma ?? null, y = w?.upperTwoSigma ?? null, R = w?.lowerTwoSigma ?? null, T = D != null && S != null ? Math.abs(S - D) : 0, j = U.useMemo(
    () => [{ id: "process", data: e, color: "#A6A6A6" }],
    [e]
  ), v = U.useMemo(() => {
    const N = [...e.map((G) => G.y)];
    if ([D, k, C, S, x, y, R].forEach((G) => {
      G != null && N.push(G);
    }), M && M.forEach((G) => {
      typeof G == "number" && !isNaN(G) && N.push(G);
    }), !!N.length)
      return [Math.min(...N), Math.max(...N)];
  }, [e, D, k, C, S, x, y, R, M]), b = U.useMemo(() => {
    if (!(l || $?.measureUnit) && e.length)
      return e.every((z) => z.y >= 0 && z.y <= 1) ? "%" : void 0;
  }, [l, $?.measureUnit, e]), B = l ?? $?.measureUnit ?? b, A = U.useMemo(() => B ? { ...$ || {}, measureUnit: B } : $, [$, B]), E = U.useMemo(() => {
    if (!g || !F?.rows?.length) return null;
    const z = F.rows, N = H?.minimumPoints ?? 13;
    if (z.filter((ae) => !ae.ghost && ae.value != null).length < N) return null;
    let P = -1;
    for (let ae = z.length - 1; ae >= 0; ae--) {
      const ne = z[ae];
      if (ne && ne.value != null && !ne.ghost) {
        P = ae;
        break;
      }
    }
    if (P === -1) return null;
    const se = z[P], me = se.variationIcon, de = se.assuranceIcon, J = de === At.Pass ? Ut.Pass : de === At.Fail ? Ut.Fail : Ut.Uncertain;
    let O;
    if (me === Ge.None) {
      const ae = se.specialCauseSinglePointAbove, ne = se.specialCauseSinglePointBelow;
      f === zt.Up ? ae ? O = _e.Higher : ne && (O = _e.Lower) : f === zt.Down ? ne ? O = _e.Lower : ae && (O = _e.Higher) : O = _e.Higher;
    }
    let Y;
    switch (me) {
      case Ge.Improvement:
        Y = Ke.Improving;
        break;
      case Ge.Concern:
        Y = Ke.Deteriorating;
        break;
      case Ge.None:
        Y = Ke.No_Judgement;
        break;
      case Ge.Neither:
      default:
        Y = Ke.None;
    }
    let Z;
    f === zt.Up ? Z = Je.HigherIsBetter : f === zt.Down ? Z = Je.LowerIsBetter : Z = Je.ContextDependent;
    const W = 80;
    return /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: 12, marginRight: 16 }, children: [
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-icon",
          "data-variation": String(me),
          "data-variation-judgement": String(Y),
          "data-trend-raw": O ? String(O) : "none",
          "data-trend": O ? String(O) : "none",
          "data-polarity": String(Z ?? "unknown"),
          style: { width: W, height: W },
          children: /* @__PURE__ */ r.jsx(
            fs,
            {
              dropShadow: !1,
              data: { judgement: Y, polarity: Z, ...O ? { trend: O } : {} },
              letterMode: "direction",
              size: W
            }
          )
        }
      ),
      /* @__PURE__ */ r.jsx(
        "div",
        {
          className: "fdp-spc-chart__embedded-assurance-icon",
          "data-assurance": String(de),
          style: { width: W, height: W },
          children: /* @__PURE__ */ r.jsx(hs, { status: J, size: W, dropShadow: !1 })
        }
      )
    ] }, `embedded-icon-${P}`);
  }, [g, F?.rows, f, H?.minimumPoints, M]);
  return /* @__PURE__ */ r.jsxs("div", { className: i ? `fdp-spc-chart-wrapper ${i}` : "fdp-spc-chart-wrapper", children: [
    g && /* @__PURE__ */ r.jsx("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: E }),
    /* @__PURE__ */ r.jsx(
      qf,
      {
        height: n,
        ariaLabel: t,
        margin: { bottom: 48, left: 56, right: 16, top: 12 },
        className: void 0,
        children: /* @__PURE__ */ r.jsx(Kf, { series: j, yDomain: v, children: /* @__PURE__ */ r.jsx(
          Qh,
          {
            series: j,
            showPoints: o,
            announceFocus: s,
            limits: { mean: D, ucl: k, lcl: C, sigma: T, onePos: S, oneNeg: x, twoPos: y, twoNeg: R },
            showZones: a,
            highlightOutOfControl: d,
            engineRows: F?.rows || null,
            enableRules: h,
            showIcons: m,
            narrationContext: A,
            metricImprovement: f,
            gradientSequences: I,
            processLineWidth: _,
            effectiveUnit: B
          }
        ) })
      }
    )
  ] });
}, Qh = ({
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
  const g = Xt(), M = Bt();
  if (!g) return null;
  const { xScale: p, yScale: u } = g, H = Et(), $ = e[0]?.data || [], I = U.useMemo(() => {
    if (!a.ucl && !a.lcl) return /* @__PURE__ */ new Set();
    const b = /* @__PURE__ */ new Set();
    return $.forEach((B, A) => {
      (a.ucl != null && B.y > a.ucl || a.lcl != null && B.y < a.lcl) && b.add(A);
    }), b;
  }, [$, a.ucl, a.lcl]), _ = U.useMemo(() => {
    if (!i) return null;
    const b = {};
    return i.forEach((B, A) => {
      if (B.value == null || B.ghost) return;
      const E = B.specialCauseSinglePointAbove || B.specialCauseSinglePointBelow || B.specialCauseTwoOfThreeAbove || B.specialCauseTwoOfThreeBelow || B.specialCauseFourOfFiveAbove || B.specialCauseFourOfFiveBelow || B.specialCauseShiftHigh || B.specialCauseShiftLow || B.specialCauseTrendIncreasing || B.specialCauseTrendDecreasing;
      b[A] = {
        variation: B.variationIcon,
        assurance: B.assuranceIcon,
        special: E,
        concern: B.variationIcon === Ge.Concern,
        improvement: B.variationIcon === Ge.Improvement
      };
    }), b;
  }, [i]), F = U.useMemo(() => {
    if (!i || !i.length) return null;
    const b = [];
    for (const A of i)
      typeof A.target == "number" && !isNaN(A.target) && b.push(A.target);
    if (!b.length) return null;
    const B = b[0];
    return b.every((A) => A === B) ? B : null;
  }, [i]), w = U.useMemo(() => {
    if (!_) return [];
    const b = $.map((B, A) => {
      const E = _?.[A];
      return E?.concern ? "concern" : E?.improvement ? "improvement" : "common";
    });
    for (let B = 1; B < b.length - 1; B++)
      (b[B] === "concern" || b[B] === "improvement") && b[B - 1] === "common" && b[B + 1] === "common" && (b[B] = "common");
    for (let B = 1; B < b.length - 1; B++) {
      const A = b[B - 1], E = b[B], z = b[B + 1];
      E !== "common" && A !== "common" && z !== "common" && A === z && E !== A && (b[B] = "common");
    }
    return b;
  }, [_, $]), D = U.useMemo(() => {
    if (!f || !w.length) return [];
    const b = [];
    let B = 0;
    for (let A = 1; A <= w.length; A++)
      if (A === w.length || w[A] !== w[B]) {
        const z = w[B], N = A - 1, G = N - B + 1;
        z === "common" ? b.push({ start: B, end: N, category: "common" }) : G > 1 && b.push({ start: B, end: N, category: z }), B = A;
      }
    return b;
  }, [f, w]), k = U.useMemo(() => $.map((b) => p(b.x instanceof Date ? b.x : new Date(b.x))), [$, p]), C = p.range()[1], S = U.useMemo(() => D.length ? /* @__PURE__ */ r.jsx("defs", { children: D.map((b, B) => {
    const A = `spc-seq-grad-${B}`;
    let E, z = 0.28, N = 0.12, G = 0.045;
    switch (b.category) {
      case "concern":
        E = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", z = 0.28, N = 0.12, G = 0.045;
        break;
      case "improvement":
        E = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", z = 0.26, N = 0.11, G = 0.045;
        break;
      default:
        E = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
    }
    return /* @__PURE__ */ r.jsxs("linearGradient", { id: A, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
      /* @__PURE__ */ r.jsx("stop", { offset: "0%", stopColor: E, stopOpacity: z }),
      /* @__PURE__ */ r.jsx("stop", { offset: "70%", stopColor: E, stopOpacity: N }),
      /* @__PURE__ */ r.jsx("stop", { offset: "100%", stopColor: E, stopOpacity: G })
    ] }, A);
  }) }) : null, [D]), x = U.useMemo(() => {
    if (!D.length) return null;
    const [b] = u.domain(), B = u(b), A = D.map((E, z) => {
      const N = E.start, G = E.end, P = k[N], se = k[G], me = N > 0 ? k[N - 1] : P, de = G < k.length - 1 ? k[G + 1] : se;
      let J = N === 0 ? Math.max(0, P - (k.length > 1 ? (k[1] - P) / 2 : 10)) : (me + P) / 2, O = G === k.length - 1 ? Math.min(C, se + (k.length > 1 ? (se - k[k.length - 2]) / 2 : 10)) : (se + de) / 2, Y = null, Z = null;
      if (E.category === "common")
        N > 0 && (J = k[N - 1], Y = u($[N - 1].y)), G < $.length - 1 && (O = k[G + 1], Z = u($[G + 1].y));
      else if (J = P, N > 0) {
        const ne = w[N - 1];
        ne !== "common" && ne !== E.category && (J = k[N - 1], Y = u($[N - 1].y));
      }
      let W = `M ${J} ${B}`;
      const ae = u($[N].y);
      Y != null ? (W += ` L ${J} ${Y}`, P !== J && (W += ` L ${P} ${ae}`)) : (W += ` L ${J} ${ae}`, P !== J && (W += ` L ${P} ${ae}`));
      for (let ne = N; ne <= G; ne++) {
        const le = k[ne], ce = u($[ne].y);
        W += ` L ${le} ${ce}`;
      }
      return E.category === "common" && Z != null ? (O !== se && (W += ` L ${O} ${Z}`), W += ` L ${O} ${B} Z`) : W += ` L ${se} ${B} L ${O} ${B} Z`, /* @__PURE__ */ r.jsx(
        "path",
        {
          d: W,
          fill: `url(#spc-seq-grad-${z})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${z}`
      );
    });
    return /* @__PURE__ */ r.jsx("g", { className: "fdp-spc__sequence-bgs", children: A });
  }, [D, k, C, u, $]), y = U.useMemo(() => {
    if (!c?.timeframe && $.length >= 2) {
      const b = $.map((G) => G.x instanceof Date ? G.x : new Date(G.x)), B = new Date(Math.min(...b.map((G) => G.getTime()))), A = new Date(Math.max(...b.map((G) => G.getTime()))), E = Math.round((A.getTime() - B.getTime()) / 864e5) || 0;
      if (E < 14)
        return `The chart shows a timeframe of ${E + 1} days`;
      const z = Math.round(E / 7);
      return z < 20 ? `The chart shows a timeframe of ${z} weeks` : `The chart shows a timeframe of ${(A.getFullYear() - B.getFullYear()) * 12 + (A.getMonth() - B.getMonth()) + 1} months`;
    }
    if (c?.timeframe)
      return `The chart shows a timeframe of ${c.timeframe}`;
  }, [c?.timeframe, $]), R = (b) => {
    const B = b % 10, A = b % 100;
    return B === 1 && A !== 11 ? `${b}st` : B === 2 && A !== 12 ? `${b}nd` : B === 3 && A !== 13 ? `${b}rd` : `${b}th`;
  }, T = (b) => `${R(b.getDate())} ${b.toLocaleString("en-GB", { month: "long" })}, ${b.getFullYear()}`, j = U.useCallback(
    ({ index: b, x: B, y: A }) => {
      const E = i?.[b], z = B instanceof Date ? B : new Date(B), N = T(z), G = c?.measureUnit ? ` ${c.measureUnit}` : "", P = c?.measureName ? ` ${c.measureName}` : "";
      if (!E)
        return `General summary is: ${y ? y + ". " : ""}Point ${b + 1}, ${N}, ${A}${G}${P}`;
      const se = cs(E.variationIcon) || "Variation", me = ls(E), de = me.length ? ` Rules: ${[...new Set(me.map((O) => is[O].narration))].join("; ")}.` : " No special cause rules.", J = [];
      return c?.measureName && J.push(`Measure: ${c.measureName}.`), c?.datasetContext && J.push(`${c.datasetContext}.`), c?.organisation && J.push(`Organisation: ${c.organisation}.`), c?.additionalNote && J.push(c.additionalNote), [
        "General summary is:",
        ...J,
        `Point ${b + 1} recorded on `,
        N + ",",
        `with a value of ${A} ${G}${P}`,
        se + ".",
        de
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [i, c, y]
  ), v = U.useCallback(
    (b, B) => i?.[b] ? j({
      index: b,
      seriesId: "process",
      x: B.x instanceof Date ? B.x : new Date(B.x),
      y: B.y
    }).replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "") : void 0,
    [i, j]
  );
  return /* @__PURE__ */ r.jsx(Ih, { children: /* @__PURE__ */ r.jsxs(
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
              /* @__PURE__ */ r.jsx(Xf, { axis: "y" }),
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
              F != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
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
              F != null && /* @__PURE__ */ r.jsxs("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ r.jsx(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: p.range()[1],
                    y1: u(F),
                    y2: u(F),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ r.jsxs(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: p.range()[0] - 7,
                    y: u(F) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      F,
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
                Mh,
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
              t && $.map((b, B) => {
                const A = p(b.x instanceof Date ? b.x : new Date(b.x)), E = u(b.y), z = I.has(B), N = _?.[B], G = [
                  "fdp-spc__point",
                  z && s ? "fdp-spc__point--ooc" : null,
                  l && N?.special && N.concern ? "fdp-spc__point--sc-concern" : null,
                  l && N?.special && N.improvement ? "fdp-spc__point--sc-improvement" : null,
                  N?.assurance === At.Pass ? "fdp-spc__point--assurance-pass" : null,
                  N?.assurance === At.Fail ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" "), P = `Point ${B + 1} value ${b.y}` + (N?.special ? " special cause" : "") + (N?.variation === Ge.Improvement ? " improving" : N?.variation === Ge.Concern ? " concern" : ""), se = H?.focused?.index === B;
                return /* @__PURE__ */ r.jsx(
                  "circle",
                  {
                    cx: A,
                    cy: E,
                    r: 5,
                    className: G,
                    "data-variation": N?.variation,
                    "data-assurance": N?.assurance,
                    "aria-label": P,
                    ...se ? { "aria-describedby": `spc-tooltip-${B}` } : {}
                  },
                  B
                );
              }),
              d && l && _ && $.map((b, B) => {
                const A = _[B];
                if (!A || !(A.concern || A.improvement)) return null;
                const E = p(b.x instanceof Date ? b.x : new Date(b.x)), z = u(b.y);
                let N = z - 10;
                const G = 12, P = u.range()[0] - 4;
                N < G && (N = Math.min(z + 16, P));
                const se = p.range()[1], me = Math.min(Math.max(E, 0), se - 0);
                return /* @__PURE__ */ r.jsx(
                  "text",
                  {
                    x: me,
                    y: N,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${A.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: A.concern ? "!" : "★"
                  },
                  `icon-${B}`
                );
              }),
              M && /* @__PURE__ */ r.jsx(
                ep,
                {
                  width: p.range()[1],
                  height: u.range()[0]
                }
              ),
              /* @__PURE__ */ r.jsx(
                $i,
                {
                  engineRows: i,
                  limits: { mean: a.mean, sigma: a.sigma },
                  pointDescriber: v,
                  measureName: c?.measureName,
                  measureUnit: c?.measureUnit,
                  dateFormatter: (b) => T(b)
                }
              )
            ] })
          }
        ),
        n && /* @__PURE__ */ r.jsx(
          Lh,
          {
            format: (b) => j({ ...b, x: b.x instanceof Date ? b.x : new Date(b.x) })
          }
        )
      ]
    }
  ) });
}, ep = ({
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
}, Ix = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AssuranceIcon: At,
  AssuranceResult: Ut,
  Direction: _e,
  ImprovementDirection: zt,
  MetricPolarity: Je,
  SPCAssuranceIcon: hs,
  SPCChart: Jh,
  SPCTooltipOverlay: $i,
  SPCVariationIcon: fs,
  VARIATION_COLOR_TOKENS: lt,
  VariationIcon: Ge,
  VariationJudgement: Ke,
  VariationState: Ie,
  buildSpc: Ni,
  extractRuleIds: ls,
  getVariationColorHex: Yh,
  getVariationColorToken: Ti,
  getVariationColour: Ii,
  getVariationTrend: us,
  ruleGlossary: is,
  variationLabel: cs
}, Symbol.toStringTag, { value: "Module" })), tp = "150ms", np = "300ms", rp = "500ms", ap = "cubic-bezier(0.4, 0, 1, 1)", sp = "cubic-bezier(0, 0, 0.2, 1)", op = "cubic-bezier(0.4, 0, 0.2, 1)", ip = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", lp = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", cp = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", dp = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", up = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", fp = "1px", hp = "2px", pp = "4px", mp = "4px", gp = "4px", xp = "2px", bp = "1px", yp = "0px", vp = "4px", wp = "8px", _p = "12px", Li = "#d8dde0", Fi = "#4c6272", Ai = "#d8dde0", Bi = "#aeb7bd", Ei = "#d5281b", Ri = "#005eb8", Pi = "#ffffff", Hi = "#212b32", zi = "#007f3b", Wi = "#330072", Oi = "#7c2855", Ui = "#d5281b", Gi = "#ffeb3b", Yi = "#fff9c4", Vi = "#ffb81c", qi = "#ed8b00", Ki = "#00a499", Xi = "#ae2573", Zi = "#4c6272", Ji = "#768692", Qi = "#aeb7bd", el = "#d8dde0", tl = "#f0f4f5", Sp = "#212b32", kp = "#4c6272", Cp = "#ffffff", jp = "#212b32", Np = "#005eb8", Tp = "#7c2855", $p = "#003087", Dp = "#330072", Ip = "#ffeb3b", Mp = "#212b32", Lp = "#d8dde0", Fp = "#ffffff33", Ap = "#d5281b", Bp = "#4c6272", Ep = "#ffffff", Rp = "#007f3b", Pp = "#ffffff", Hp = "#006530", zp = "#004021", Wp = "#004021", Op = "#00000000", Up = "#ffffff", Gp = "#005eb8", Yp = "#005eb8", Vp = "#d9e5f2", qp = "#c7daf0", Kp = "#005eb8", Xp = "#ffffff", Zp = "#212b32", Jp = "#d9dde0", Qp = "#b3bcc2", em = "#b3bcc2", tm = "#d5281b", nm = "#aa2016", rm = "#6a140e", am = "#6a140e", sm = "#005eb8", om = "#004b93", im = "#002f5c", lm = "#002f5c", cm = "8px", dm = "16px", um = "12px", fm = "16px", hm = "4px", pm = "40px", mm = "4px", gm = "40px", xm = "12px", bm = "16px", ym = "32px", vm = "16px", wm = "20px", _m = "28px", Sm = "9px", km = "2px", Cm = "16px", jm = "24px", Nm = "8px", Tm = "24px", $m = "16px", Dm = "4px", Im = "4px", Mm = "4px", Lm = "8px", Fm = "4px", Am = "16px", Bm = "#007f3b", Em = "#006530", Rm = "#004021", Pm = "#d8dde0", Hm = "#ffffff", zm = "#768692", Wm = "#00000000", Om = "#ffeb3b", Um = "#00000000", Gm = "#ffffff", Ym = "#d9e5f2", Vm = "#c7daf0", qm = "#005eb8", Km = "#005eb8", nl = "8px", rl = "16px", al = "12px", sl = "16px", Xm = "2px", Zm = "4px", Jm = "4px", Qm = "600", eg = "#ffffff", tg = "#d8dde0", ng = "#aeb7bd", rg = "#f0f4f5", ag = "#212b32", sg = "#212b32", og = "#005eb8", ol = "16px", il = "32px", ll = "16px", ig = "1px", lg = "4px", cg = "none", dg = "0 2px 4px rgba(0, 0, 0, 0.1)", ug = "#ffffff", fg = "#ffffff", hg = "#d8dde0", pg = "#ffffff", mg = "#4c6272", gg = "#ffeb3b", xg = "#d5281b", bg = "#aeb7bd", yg = "#212b32", vg = "#4c6272", wg = "#768692", _g = "#212b32", Sg = "#ffffff", kg = "600", Cg = "#d5281b", jg = "600", Ng = "#4c6272", cl = "4px", dl = "40px", ul = "40px", fl = "12px", Tg = "2px", $g = "4px", Dg = "0px", Ig = "16px", Mg = "18px", Lg = "24px", Fg = "32px", Ag = "34px", Bg = "32px", Eg = "40px", Rg = "48px", Pg = "5.4ex", Hg = "7.2ex", zg = "9ex", Wg = "10.8ex", Og = "20ex", Ug = "38ex", Gg = "56ex", Yg = "44px", Vg = "40px", qg = "1020px", Kg = "100%", Xg = "50%", Zg = "33.333%", Jg = "25%", Qg = "20%", e0 = "320px", t0 = "641px", n0 = "1025px", r0 = "1280px", a0 = "960px", s0 = "32px", o0 = "16px", i0 = "#d5281b", l0 = "#d5281b", c0 = "#ffffff", d0 = "#007f3b", u0 = "#007f3b", f0 = "#ffffff", h0 = "#ffeb3b", p0 = "#ffeb3b", m0 = "#212b32", g0 = "#005eb8", x0 = "#005eb8", b0 = "#ffffff", y0 = "#d8dde0", v0 = "#aeb7bd", w0 = "#768692", _0 = "0 4px 0 #004021", S0 = "0 4px 0 #005eb8", k0 = "0 4px 0 #6a140e", C0 = "0 4px 0 #ffeb3b", j0 = "none", N0 = "0 2px 4px rgba(0, 0, 0, 0.1)", T0 = "4px", $0 = "0px", D0 = "solid", I0 = "0 0 0 3px #ffeb3b", M0 = "0 0 0 3px #ffeb3b", L0 = "none", F0 = "0 1px 3px rgba(0, 0, 0, 0.12)", A0 = "0 2px 6px rgba(0, 0, 0, 0.16)", B0 = "0 4px 12px rgba(0, 0, 0, 0.20)", hl = "0", pl = "4px", ml = "8px", gl = "16px", xl = "24px", bl = "32px", yl = "40px", vl = "48px", wl = "56px", _l = "64px", ka = "0", Ca = "0", ja = "4px", Na = "4px", Ta = "8px", $a = "8px", Da = "8px", Ia = "16px", Ma = "16px", La = "24px", Fa = "24px", Aa = "32px", Ba = "32px", Ea = "40px", Ra = "40px", Pa = "48px", Ha = "48px", za = "56px", Wa = "56px", Oa = "64px", rr = "Frutiger W01", ar = "Arial, Helvetica, sans-serif", sr = "sans-serif", or = "400", ir = "600", lr = "400", cr = "12px", dr = "14px", ur = "12pt", fr = "14px", hr = "16px", pr = "12pt", mr = "16px", gr = "19px", xr = "13pt", br = "19px", yr = "22px", vr = "15pt", wr = "22px", _r = "26px", Sr = "17pt", kr = "27px", Cr = "36px", jr = "20pt", Nr = "33px", Tr = "48px", $r = "24pt", Ua = "16px", Ga = "24px", xt = {
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
}, E0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: tp,
  AnimationDurationNormal: np,
  AnimationDurationSlow: rp,
  AnimationEasingBounce: ip,
  AnimationEasingEaseIn: ap,
  AnimationEasingEaseInOut: op,
  AnimationEasingEaseOut: sp,
  BorderColorCard: Ai,
  BorderColorCardHover: Bi,
  BorderColorDefault: Li,
  BorderColorError: Ei,
  BorderColorForm: Fi,
  BorderRadiusLarge: _p,
  BorderRadiusMedium: wp,
  BorderRadiusNone: yp,
  BorderRadiusSmall: vp,
  BorderWidthCardBottom: mp,
  BorderWidthDefault: fp,
  BorderWidthFormElement: hp,
  BorderWidthFormElementError: pp,
  BorderWidthPanel: gp,
  BorderWidthTableCell: bp,
  BorderWidthTableHeader: xp,
  BreakpointDesktop: n0,
  BreakpointLargeDesktop: r0,
  BreakpointMobile: e0,
  BreakpointTablet: t0,
  ButtonBorderRadius: Zm,
  ButtonBorderWidth: Xm,
  ButtonPrimaryBackgroundActive: Rm,
  ButtonPrimaryBackgroundDefault: Bm,
  ButtonPrimaryBackgroundDisabled: Pm,
  ButtonPrimaryBackgroundHover: Em,
  ButtonPrimaryBorderDefault: Wm,
  ButtonPrimaryBorderFocus: Om,
  ButtonPrimaryTextDefault: Hm,
  ButtonPrimaryTextDisabled: zm,
  ButtonSecondaryBackgroundActive: Vm,
  ButtonSecondaryBackgroundDefault: Um,
  ButtonSecondaryBackgroundHover: Ym,
  ButtonSecondaryBackgroundSolid: Gm,
  ButtonSecondaryBorderDefault: Km,
  ButtonSecondaryTextDefault: qm,
  ButtonShadowSize: Jm,
  ButtonSpacingPaddingHorizontalDesktop: sl,
  ButtonSpacingPaddingHorizontalMobile: rl,
  ButtonSpacingPaddingVerticalDesktop: al,
  ButtonSpacingPaddingVerticalMobile: nl,
  ButtonTypographyWeight: Qm,
  CardBackgroundDefault: eg,
  CardBorderBottom: rg,
  CardBorderDefault: tg,
  CardBorderHover: ng,
  CardBorderWidthBottom: lg,
  CardBorderWidthDefault: ig,
  CardShadowDefault: cg,
  CardShadowHover: dg,
  CardSpacingHeadingMargin: ll,
  CardSpacingPaddingDesktop: il,
  CardSpacingPaddingMobile: ol,
  CardTextDescription: sg,
  CardTextHeading: ag,
  CardTextLink: og,
  ColorBorderDefault: Lp,
  ColorBorderSecondary: Fp,
  ColorButtonLoginActive: im,
  ColorButtonLoginBackground: sm,
  ColorButtonLoginHover: om,
  ColorButtonLoginShadow: lm,
  ColorButtonPrimaryActive: zp,
  ColorButtonPrimaryBackground: Rp,
  ColorButtonPrimaryHover: Hp,
  ColorButtonPrimaryShadow: Wp,
  ColorButtonPrimaryText: Pp,
  ColorButtonReverseActive: Qp,
  ColorButtonReverseBackground: Xp,
  ColorButtonReverseHover: Jp,
  ColorButtonReverseShadow: em,
  ColorButtonReverseText: Zp,
  ColorButtonSecondaryActive: qp,
  ColorButtonSecondaryBackground: Op,
  ColorButtonSecondaryBackgroundSolid: Up,
  ColorButtonSecondaryBorder: Gp,
  ColorButtonSecondaryHover: Vp,
  ColorButtonSecondaryShadow: Kp,
  ColorButtonSecondaryText: Yp,
  ColorButtonWarningActive: rm,
  ColorButtonWarningBackground: tm,
  ColorButtonWarningHover: nm,
  ColorButtonWarningShadow: am,
  ColorError: Ap,
  ColorFocusBackground: Ip,
  ColorFocusText: Mp,
  ColorFormBackground: Ep,
  ColorFormBorder: Bp,
  ColorGrey1: Zi,
  ColorGrey2: Ji,
  ColorGrey3: Qi,
  ColorGrey4: el,
  ColorGrey5: tl,
  ColorLinkActive: $p,
  ColorLinkDefault: Np,
  ColorLinkHover: Tp,
  ColorLinkVisited: Dp,
  ColorPrimaryBlack: Hi,
  ColorPrimaryBlue: Ri,
  ColorPrimaryDarkPink: Oi,
  ColorPrimaryGreen: zi,
  ColorPrimaryPurple: Wi,
  ColorPrimaryRed: Ui,
  ColorPrimaryWhite: Pi,
  ColorPrimaryYellow: Gi,
  ColorSecondaryAquaGreen: Ki,
  ColorSecondaryOrange: qi,
  ColorSecondaryPaleYellow: Yi,
  ColorSecondaryPink: Xi,
  ColorSecondaryWarmYellow: Vi,
  ColorTextPrimary: Sp,
  ColorTextPrint: jp,
  ColorTextReverse: Cp,
  ColorTextSecondary: kp,
  ComponentBlur: Im,
  ComponentBreadcrumbChevronMarginLeft: Sm,
  ComponentBreadcrumbChevronMarginRight: km,
  ComponentBreadcrumbPaddingTopDesktop: jm,
  ComponentBreadcrumbPaddingTopMobile: Cm,
  ComponentButtonPaddingDesktopHorizontal: fm,
  ComponentButtonPaddingDesktopVertical: um,
  ComponentButtonPaddingMobileHorizontal: dm,
  ComponentButtonPaddingMobileVertical: cm,
  ComponentButtonShadowSize: hm,
  ComponentCardHeadingMargin: vm,
  ComponentCardPaddingDesktop: ym,
  ComponentCardPaddingMobile: bm,
  ComponentDetails: Lm,
  ComponentExpander: Fm,
  ComponentFormCheckboxLabelPadding: xm,
  ComponentFormCheckboxSize: gm,
  ComponentFormInputMinHeight: pm,
  ComponentFormInputPadding: mm,
  ComponentLink: Mm,
  ComponentPagination: Am,
  ComponentPanelPaddingDesktop: _m,
  ComponentPanelPaddingMobile: wm,
  ComponentSpread: Dm,
  ComponentSummaryListCellPaddingHorizontal: Tm,
  ComponentSummaryListCellPaddingVertical: Nm,
  ComponentSummaryListRowMargin: $m,
  ElevationHigh: B0,
  ElevationLow: F0,
  ElevationMedium: A0,
  ElevationNone: L0,
  FocusOutlineOffset: $0,
  FocusOutlineStyle: D0,
  FocusOutlineWidth: T0,
  FocusShadowButton: M0,
  FocusShadowInput: I0,
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
  FormBorderRadius: Dg,
  FormBorderWidthDefault: Tg,
  FormBorderWidthError: $g,
  FormErrorTextDefault: Cg,
  FormErrorTypographyWeight: jg,
  FormHintTextDefault: Ng,
  FormInputBackgroundDefault: ug,
  FormInputBackgroundDisabled: hg,
  FormInputBackgroundError: pg,
  FormInputBackgroundFocus: fg,
  FormInputBorderDefault: mg,
  FormInputBorderDisabled: bg,
  FormInputBorderError: xg,
  FormInputBorderFocus: gg,
  FormInputTextDefault: yg,
  FormInputTextDisabled: wg,
  FormInputTextPlaceholder: vg,
  FormLabelTextDefault: _g,
  FormLabelTextRequired: Sg,
  FormLabelTypographyWeight: kg,
  FormSpacingCheckboxLabelPadding: fl,
  FormSpacingCheckboxSize: ul,
  FormSpacingInputMinHeight: dl,
  FormSpacingInputPadding: cl,
  GridGutter: s0,
  GridGutterHalf: o0,
  GridPageWidth: a0,
  HeadingsNhsukHeadingL: bt,
  HeadingsNhsukHeadingM: yt,
  HeadingsNhsukHeadingS: vt,
  HeadingsNhsukHeadingXl: xt,
  HeadingsNhsukHeadingXs: wt,
  LayoutColumnActions: Qg,
  LayoutColumnFull: Kg,
  LayoutColumnHalf: Xg,
  LayoutColumnQuarter: Jg,
  LayoutColumnThird: Zg,
  LayoutContainerMaxWidth: qg,
  ParagraphsBody: _t,
  ParagraphsBodyLarge: St,
  ParagraphsBodySmall: kt,
  ParagraphsLedeText: Ct,
  ParagraphsLedeTextSmall: jt,
  ShadowButtonDefault: _0,
  ShadowButtonFocus: C0,
  ShadowButtonSecondary: S0,
  ShadowButtonWarning: k0,
  ShadowCardDefault: j0,
  ShadowCardHover: N0,
  SizeButtonMinHeightDesktop: Vg,
  SizeButtonMinHeightMobile: Yg,
  SizeFormControlLarge: Rg,
  SizeFormControlMedium: Eg,
  SizeFormControlSmall: Bg,
  SizeFormInputWidth2xl: Ug,
  SizeFormInputWidth3xl: Gg,
  SizeFormInputWidthLg: Wg,
  SizeFormInputWidthMd: zg,
  SizeFormInputWidthSm: Hg,
  SizeFormInputWidthXl: Og,
  SizeFormInputWidthXs: Pg,
  SizeIconExtraLarge: Fg,
  SizeIconLarge: Lg,
  SizeIconMedium: Mg,
  SizeIconNhsDefault: Ag,
  SizeIconSmall: Ig,
  Spacing0: hl,
  Spacing1: pl,
  Spacing2: ml,
  Spacing3: gl,
  Spacing4: xl,
  Spacing5: bl,
  Spacing6: yl,
  Spacing7: vl,
  Spacing8: wl,
  Spacing9: _l,
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
  SpacingResponsive7Mobile: Ra,
  SpacingResponsive7Tablet: Pa,
  SpacingResponsive8Mobile: Ha,
  SpacingResponsive8Tablet: za,
  SpacingResponsive9Mobile: Wa,
  SpacingResponsive9Tablet: Oa,
  StateDisabledBackground: y0,
  StateDisabledBorder: v0,
  StateDisabledText: w0,
  StateErrorBackground: i0,
  StateErrorBorder: l0,
  StateErrorText: c0,
  StateInfoBackground: g0,
  StateInfoBorder: x0,
  StateInfoText: b0,
  StateSuccessBackground: d0,
  StateSuccessBorder: u0,
  StateSuccessText: f0,
  StateWarningBackground: h0,
  StateWarningBorder: p0,
  StateWarningText: m0,
  TransitionButtonDefault: lp,
  TransitionButtonShadow: cp,
  TransitionCardHover: up,
  TransitionInputFocus: dp
}, Symbol.toStringTag, { value: "Module" })), Mx = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Lx = ({
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
), Fx = ({
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
), Ax = ({
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
), Bx = ({
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
), Ex = ({
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
), Rx = ({
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
), Px = ({
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
), Hx = ({
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
), zx = ({
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
), Wx = ({
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
), Ox = () => $e(() => E0, []), Ux = () => $e(() => ({
  // Border colors
  BorderColorDefault: Li,
  BorderColorForm: Fi,
  BorderColorCard: Ai,
  BorderColorCardHover: Bi,
  BorderColorError: Ei,
  // Primary colors
  ColorPrimaryBlue: Ri,
  ColorPrimaryWhite: Pi,
  ColorPrimaryBlack: Hi,
  ColorPrimaryGreen: zi,
  ColorPrimaryPurple: Wi,
  ColorPrimaryDarkPink: Oi,
  ColorPrimaryRed: Ui,
  ColorPrimaryYellow: Gi,
  // Secondary colors
  ColorSecondaryPaleYellow: Yi,
  ColorSecondaryWarmYellow: Vi,
  ColorSecondaryOrange: qi,
  ColorSecondaryAquaGreen: Ki,
  ColorSecondaryPink: Xi,
  // Grey scale
  ColorGrey1: Zi,
  ColorGrey2: Ji,
  ColorGrey3: Qi,
  ColorGrey4: el,
  ColorGrey5: tl
}), []), Gx = () => $e(() => ({
  Spacing0: hl,
  Spacing1: pl,
  Spacing2: ml,
  Spacing3: gl,
  Spacing4: xl,
  Spacing5: bl,
  Spacing6: yl,
  Spacing7: vl,
  Spacing8: wl,
  Spacing9: _l
}), []), Yx = () => $e(() => ({
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
}), []), Vx = () => $e(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: ka,
    Size1: ja,
    Size2: Ta,
    Size3: Da,
    Size4: Ma,
    Size5: Fa,
    Size6: Ba,
    Size7: Ra,
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
    Size7: Pa,
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
  SpacingResponsive7Mobile: Ra,
  SpacingResponsive7Tablet: Pa,
  SpacingResponsive8Mobile: Ha,
  SpacingResponsive8Tablet: za,
  SpacingResponsive9Mobile: Wa,
  SpacingResponsive9Tablet: Oa
}), []), qx = () => $e(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: nl,
  ButtonSpacingPaddingHorizontalMobile: rl,
  ButtonSpacingPaddingVerticalDesktop: al,
  ButtonSpacingPaddingHorizontalDesktop: sl,
  // Card spacing	
  CardSpacingPaddingMobile: ol,
  CardSpacingPaddingDesktop: il,
  CardSpacingHeadingMargin: ll,
  // Form spacing
  FormSpacingInputPadding: cl,
  FormSpacingInputMinHeight: dl,
  FormSpacingCheckboxSize: ul,
  FormSpacingCheckboxLabelPadding: fl
}), []), Kx = () => $e(() => ({
  xl: xt,
  l: bt,
  m: yt,
  s: vt,
  xs: wt
}), []), Xx = () => $e(() => ({
  body: _t,
  bodyLarge: St,
  bodySmall: kt,
  ledeText: Ct,
  ledeTextSmall: jt
}), []), Zx = () => $e(() => ({
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
function Jx(e = {}) {
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
const Sl = {
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
function Qx(e = {}) {
  const { fontPath: t, fontWeights: n } = { ...Sl, ...e }, a = [];
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
function eb(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: n } = { ...Sl, ...e };
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
const tb = '"Frutiger W01", Arial, Helvetica, sans-serif', nb = "Arial, Helvetica, sans-serif";
async function rb() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  Gl as Account,
  W0 as ActionLink,
  xx as AdaptiveDataGrid,
  tp as AnimationDurationFast,
  np as AnimationDurationNormal,
  rp as AnimationDurationSlow,
  ip as AnimationEasingBounce,
  ap as AnimationEasingEaseIn,
  op as AnimationEasingEaseInOut,
  sp as AnimationEasingEaseOut,
  Jo as AppointmentCard,
  Cx as AreaSeriesPrimitive,
  Zu as AriaDataGrid,
  ma as AriaTabsDataGrid,
  xx as AriaTabsDataGridAdaptive,
  mo as Axis,
  la as BackLink,
  Nx as BandScalesProvider,
  jx as BarSeriesPrimitive,
  Ai as BorderColorCard,
  Bi as BorderColorCardHover,
  Li as BorderColorDefault,
  Ei as BorderColorError,
  Fi as BorderColorForm,
  _p as BorderRadiusLarge,
  wp as BorderRadiusMedium,
  yp as BorderRadiusNone,
  vp as BorderRadiusSmall,
  mp as BorderWidthCardBottom,
  fp as BorderWidthDefault,
  hp as BorderWidthFormElement,
  pp as BorderWidthFormElementError,
  gp as BorderWidthPanel,
  bp as BorderWidthTableCell,
  xp as BorderWidthTableHeader,
  Hu as Breadcrumb,
  n0 as BreakpointDesktop,
  r0 as BreakpointLargeDesktop,
  e0 as BreakpointMobile,
  t0 as BreakpointTablet,
  Qe as Button,
  Zm as ButtonBorderRadius,
  Xm as ButtonBorderWidth,
  Rm as ButtonPrimaryBackgroundActive,
  Bm as ButtonPrimaryBackgroundDefault,
  Pm as ButtonPrimaryBackgroundDisabled,
  Em as ButtonPrimaryBackgroundHover,
  Wm as ButtonPrimaryBorderDefault,
  Om as ButtonPrimaryBorderFocus,
  Hm as ButtonPrimaryTextDefault,
  zm as ButtonPrimaryTextDisabled,
  Vm as ButtonSecondaryBackgroundActive,
  Um as ButtonSecondaryBackgroundDefault,
  Ym as ButtonSecondaryBackgroundHover,
  Gm as ButtonSecondaryBackgroundSolid,
  Km as ButtonSecondaryBorderDefault,
  qm as ButtonSecondaryTextDefault,
  Jm as ButtonShadowSize,
  sl as ButtonSpacingPaddingHorizontalDesktop,
  rl as ButtonSpacingPaddingHorizontalMobile,
  al as ButtonSpacingPaddingVerticalDesktop,
  nl as ButtonSpacingPaddingVerticalMobile,
  Qm as ButtonTypographyWeight,
  Ko as Card,
  eg as CardBackgroundDefault,
  rg as CardBorderBottom,
  tg as CardBorderDefault,
  ng as CardBorderHover,
  lg as CardBorderWidthBottom,
  ig as CardBorderWidthDefault,
  sx as CardGroup,
  ox as CardGroupItem,
  cg as CardShadowDefault,
  dg as CardShadowHover,
  ll as CardSpacingHeadingMargin,
  il as CardSpacingPaddingDesktop,
  ol as CardSpacingPaddingMobile,
  sg as CardTextDescription,
  ag as CardTextHeading,
  og as CardTextLink,
  ix as CareCard,
  O0 as CharacterCount,
  $x as ChartEnhancer,
  Tx as ChartNoScript,
  qf as ChartRoot,
  Xl as Checkbox,
  Ql as Checkboxes,
  Lp as ColorBorderDefault,
  Fp as ColorBorderSecondary,
  im as ColorButtonLoginActive,
  sm as ColorButtonLoginBackground,
  om as ColorButtonLoginHover,
  lm as ColorButtonLoginShadow,
  zp as ColorButtonPrimaryActive,
  Rp as ColorButtonPrimaryBackground,
  Hp as ColorButtonPrimaryHover,
  Wp as ColorButtonPrimaryShadow,
  Pp as ColorButtonPrimaryText,
  Qp as ColorButtonReverseActive,
  Xp as ColorButtonReverseBackground,
  Jp as ColorButtonReverseHover,
  em as ColorButtonReverseShadow,
  Zp as ColorButtonReverseText,
  qp as ColorButtonSecondaryActive,
  Op as ColorButtonSecondaryBackground,
  Up as ColorButtonSecondaryBackgroundSolid,
  Gp as ColorButtonSecondaryBorder,
  Vp as ColorButtonSecondaryHover,
  Kp as ColorButtonSecondaryShadow,
  Yp as ColorButtonSecondaryText,
  rm as ColorButtonWarningActive,
  tm as ColorButtonWarningBackground,
  nm as ColorButtonWarningHover,
  am as ColorButtonWarningShadow,
  Ap as ColorError,
  Ip as ColorFocusBackground,
  Mp as ColorFocusText,
  Ep as ColorFormBackground,
  Bp as ColorFormBorder,
  Zi as ColorGrey1,
  Ji as ColorGrey2,
  Qi as ColorGrey3,
  el as ColorGrey4,
  tl as ColorGrey5,
  $p as ColorLinkActive,
  Np as ColorLinkDefault,
  Tp as ColorLinkHover,
  Dp as ColorLinkVisited,
  Hi as ColorPrimaryBlack,
  Ri as ColorPrimaryBlue,
  Oi as ColorPrimaryDarkPink,
  zi as ColorPrimaryGreen,
  Wi as ColorPrimaryPurple,
  Ui as ColorPrimaryRed,
  Pi as ColorPrimaryWhite,
  Gi as ColorPrimaryYellow,
  Ki as ColorSecondaryAquaGreen,
  qi as ColorSecondaryOrange,
  Yi as ColorSecondaryPaleYellow,
  Xi as ColorSecondaryPink,
  Vi as ColorSecondaryWarmYellow,
  Sp as ColorTextPrimary,
  jp as ColorTextPrint,
  Cp as ColorTextReverse,
  kp as ColorTextSecondary,
  vn as Column,
  Im as ComponentBlur,
  Sm as ComponentBreadcrumbChevronMarginLeft,
  km as ComponentBreadcrumbChevronMarginRight,
  jm as ComponentBreadcrumbPaddingTopDesktop,
  Cm as ComponentBreadcrumbPaddingTopMobile,
  fm as ComponentButtonPaddingDesktopHorizontal,
  um as ComponentButtonPaddingDesktopVertical,
  dm as ComponentButtonPaddingMobileHorizontal,
  cm as ComponentButtonPaddingMobileVertical,
  hm as ComponentButtonShadowSize,
  vm as ComponentCardHeadingMargin,
  ym as ComponentCardPaddingDesktop,
  bm as ComponentCardPaddingMobile,
  Lm as ComponentDetails,
  Fm as ComponentExpander,
  xm as ComponentFormCheckboxLabelPadding,
  gm as ComponentFormCheckboxSize,
  pm as ComponentFormInputMinHeight,
  mm as ComponentFormInputPadding,
  Mm as ComponentLink,
  Am as ComponentPagination,
  _m as ComponentPanelPaddingDesktop,
  wm as ComponentPanelPaddingMobile,
  Dm as ComponentSpread,
  Tm as ComponentSummaryListCellPaddingHorizontal,
  Nm as ComponentSummaryListCellPaddingVertical,
  $m as ComponentSummaryListRowMargin,
  So as Container,
  ax as ContentsList,
  Sl as DEFAULT_FONT_CONFIG,
  px as DashboardSummaryGrid,
  J0 as DateInput,
  Wu as Details,
  Ou as DoDontList,
  B0 as ElevationHigh,
  F0 as ElevationLow,
  A0 as ElevationMedium,
  L0 as ElevationNone,
  _s as ErrorMessage,
  Z0 as ErrorSummary,
  Uu as Expander,
  nt as FRUTIGER_FONT_FILES,
  qa as Fieldset,
  $0 as FocusOutlineOffset,
  D0 as FocusOutlineStyle,
  T0 as FocusOutlineWidth,
  M0 as FocusShadowButton,
  I0 as FocusShadowInput,
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
  $o as Footer,
  Dg as FormBorderRadius,
  Tg as FormBorderWidthDefault,
  $g as FormBorderWidthError,
  Cg as FormErrorTextDefault,
  jg as FormErrorTypographyWeight,
  Ng as FormHintTextDefault,
  ug as FormInputBackgroundDefault,
  hg as FormInputBackgroundDisabled,
  pg as FormInputBackgroundError,
  fg as FormInputBackgroundFocus,
  mg as FormInputBorderDefault,
  bg as FormInputBorderDisabled,
  xg as FormInputBorderError,
  gg as FormInputBorderFocus,
  yg as FormInputTextDefault,
  wg as FormInputTextDisabled,
  vg as FormInputTextPlaceholder,
  _g as FormLabelTextDefault,
  Sg as FormLabelTextRequired,
  kg as FormLabelTypographyWeight,
  fl as FormSpacingCheckboxLabelPadding,
  ul as FormSpacingCheckboxSize,
  dl as FormSpacingInputMinHeight,
  cl as FormSpacingInputPadding,
  nx as GanttChart,
  ca as Grid,
  s0 as GridGutter,
  o0 as GridGutterHalf,
  Xf as GridLines,
  a0 as GridPageWidth,
  To as Header,
  tx as HeaderSSR,
  hc as HeaderSearch,
  To as HeaderStatic,
  $t as Heading,
  bt as HeadingsNhsukHeadingL,
  yt as HeadingsNhsukHeadingM,
  vt as HeadingsNhsukHeadingS,
  xt as HeadingsNhsukHeadingXl,
  wt as HeadingsNhsukHeadingXs,
  pc as Hero,
  wo as Hint,
  fx as Images,
  Ya as Input,
  lx as InsetText,
  Va as Label,
  Qg as LayoutColumnActions,
  Kg as LayoutColumnFull,
  Xg as LayoutColumnHalf,
  Jg as LayoutColumnQuarter,
  Zg as LayoutColumnThird,
  qg as LayoutContainerMaxWidth,
  kx as Legend,
  Kf as LineScalesProvider,
  Mh as LineSeriesPrimitive,
  oc as List,
  ko as MainWrapper,
  Qo as MedicationCard,
  Dx as MetricCard,
  Rx as NHSBodyText,
  Px as NHSBodyTextLarge,
  Hx as NHSBodyTextSmall,
  Lx as NHSHeading1,
  Fx as NHSHeading2,
  Ax as NHSHeading3,
  Bx as NHSHeading4,
  Ex as NHSHeading5,
  zx as NHSLedeText,
  Wx as NHSLedeTextSmall,
  ex as NHSThemeProvider,
  nb as NHS_FALLBACK_FONT_STACK,
  tb as NHS_FONT_STACK,
  Hf as NavigationSplitView,
  yx as PageTemplate,
  rx as Pagination,
  zu as Panel,
  _t as ParagraphsBody,
  St as ParagraphsBodyLarge,
  kt as ParagraphsBodySmall,
  Ct as ParagraphsLedeText,
  jt as ParagraphsLedeTextSmall,
  Zo as PatientCard,
  Wf as ProductRoadmap,
  U0 as Radios,
  G0 as RadiosServer,
  xx as ResponsiveDataGrid,
  bx as ResponsiveDataGridDemo,
  Gt as Row,
  Ix as SPC,
  Jh as SPCChart,
  zn as Select,
  nc as SelectOption,
  _0 as ShadowButtonDefault,
  C0 as ShadowButtonFocus,
  S0 as ShadowButtonSecondary,
  k0 as ShadowButtonWarning,
  j0 as ShadowCardDefault,
  N0 as ShadowCardHover,
  Vg as SizeButtonMinHeightDesktop,
  Yg as SizeButtonMinHeightMobile,
  Rg as SizeFormControlLarge,
  Eg as SizeFormControlMedium,
  Bg as SizeFormControlSmall,
  Ug as SizeFormInputWidth2xl,
  Gg as SizeFormInputWidth3xl,
  Wg as SizeFormInputWidthLg,
  zg as SizeFormInputWidthMd,
  Hg as SizeFormInputWidthSm,
  Og as SizeFormInputWidthXl,
  Pg as SizeFormInputWidthXs,
  Fg as SizeIconExtraLarge,
  Lg as SizeIconLarge,
  Mg as SizeIconMedium,
  Ag as SizeIconNhsDefault,
  Ig as SizeIconSmall,
  qo as SkipLink,
  hx as SlotMatrix,
  mx as SortStatusControl,
  hl as Spacing0,
  pl as Spacing1,
  ml as Spacing2,
  gl as Spacing3,
  xl as Spacing4,
  bl as Spacing5,
  yl as Spacing6,
  vl as Spacing7,
  wl as Spacing8,
  _l as Spacing9,
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
  Ra as SpacingResponsive7Mobile,
  Pa as SpacingResponsive7Tablet,
  Ha as SpacingResponsive8Mobile,
  za as SpacingResponsive8Tablet,
  Wa as SpacingResponsive9Mobile,
  Oa as SpacingResponsive9Tablet,
  Y0 as SpacingUtilities,
  y0 as StateDisabledBackground,
  v0 as StateDisabledBorder,
  w0 as StateDisabledText,
  i0 as StateErrorBackground,
  l0 as StateErrorBorder,
  c0 as StateErrorText,
  g0 as StateInfoBackground,
  x0 as StateInfoBorder,
  b0 as StateInfoText,
  d0 as StateSuccessBackground,
  u0 as StateSuccessBorder,
  f0 as StateSuccessText,
  h0 as StateWarningBackground,
  p0 as StateWarningBorder,
  m0 as StateWarningText,
  Xu as SummaryCard,
  cx as SummaryList,
  Js as Table,
  dx as Tabs,
  et as Tag,
  Gu as TaskList,
  ec as Textarea,
  Sx as TooltipOverlay,
  Ih as TooltipProvider,
  vx as TransactionalPageTemplate,
  lp as TransitionButtonDefault,
  cp as TransitionButtonShadow,
  up as TransitionCardHover,
  dp as TransitionInputFocus,
  _x as VisibilityProvider,
  ei as VitalsCard,
  X0 as WIDTH_FRACTIONS,
  ux as WarningCallout,
  si as WidthContainer,
  q0 as WidthUtilities,
  rb as checkFrutigerLoaded,
  ss as createGenericTabsConfig,
  gx as createTCHTabsConfig,
  Qx as generateFrutigerFontFace,
  Mx as getResponsiveStyles,
  V0 as getSpacingClass,
  K0 as getWidthClass,
  eb as preloadFrutigerFonts,
  cf as tchDataConfig,
  Ux as useColors,
  qx as useComponentSpacing,
  Kx as useNHSHeadings,
  Xx as useNHSParagraphs,
  Q0 as useNHSTheme,
  Zx as useNHSTypographySystem,
  Jx as useNavigationSplitDrill,
  Ef as useNavigationSplitUrlSync,
  ii as useNhsFdpBreakpoints,
  Vx as useResponsiveSpacing,
  wx as useResponsiveValue,
  Gx as useSpacing,
  Ox as useTokens,
  Yx as useTypography
};
//# sourceMappingURL=index.esm.js.map
