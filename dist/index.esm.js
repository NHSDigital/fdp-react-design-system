import * as ce from "react";
import Ke, { useState as we, useEffect as Ie, useCallback as ne, useRef as Ce, createElement as Ha, useMemo as Re, useContext as wo, createContext as So, forwardRef as $t, useImperativeHandle as Pa, useReducer as za } from "react";
function Co(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var nn = { exports: {} }, Ot = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function jo() {
  if (ta) return Ot;
  ta = 1;
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
  return Ot.Fragment = t, Ot.jsx = r, Ot.jsxs = r, Ot;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var na;
function No() {
  return na || (na = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === x ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case g:
          return "Fragment";
        case V:
          return "Profiler";
        case w:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
        case D:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case C:
            return "Portal";
          case k:
            return (j.displayName || "Context") + ".Provider";
          case L:
            return (j._context.displayName || "Context") + ".Consumer";
          case v:
            var re = j.render;
            return j = j.displayName, j || (j = re.displayName || re.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case H:
            return re = j.displayName || null, re !== null ? re : e(j.type) || "Memo";
          case M:
            re = j._payload, j = j._init;
            try {
              return e(j(re));
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
        var re = !1;
      } catch {
        re = !0;
      }
      if (re) {
        re = console;
        var $ = re.error, te = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return $.call(
          re,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          te
        ), t(j);
      }
    }
    function a(j) {
      if (j === g) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === M)
        return "<...>";
      try {
        var re = e(j);
        return re ? "<" + re + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var j = R.A;
      return j === null ? null : j.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function i(j) {
      if (J.call(j, "key")) {
        var re = Object.getOwnPropertyDescriptor(j, "key").get;
        if (re && re.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function l(j, re) {
      function $() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          re
        ));
      }
      $.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: $,
        configurable: !0
      });
    }
    function d() {
      var j = e(this.type);
      return y[j] || (y[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function c(j, re, $, te, A, oe, X, G) {
      return $ = oe.ref, j = {
        $$typeof: p,
        type: j,
        key: re,
        props: oe,
        _owner: A
      }, ($ !== void 0 ? $ : null) !== null ? Object.defineProperty(j, "ref", {
        enumerable: !1,
        get: d
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
        value: X
      }), Object.defineProperty(j, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    }
    function u(j, re, $, te, A, oe, X, G) {
      var Y = re.children;
      if (Y !== void 0)
        if (te)
          if (de(Y)) {
            for (te = 0; te < Y.length; te++)
              f(Y[te]);
            Object.freeze && Object.freeze(Y);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Y);
      if (J.call(re, "key")) {
        Y = e(j);
        var U = Object.keys(re).filter(function(pe) {
          return pe !== "key";
        });
        te = 0 < U.length ? "{key: someKey, " + U.join(": ..., ") + ": ...}" : "{key: someKey}", z[Y + te] || (U = 0 < U.length ? "{" + U.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          te,
          Y,
          U,
          Y
        ), z[Y + te] = !0);
      }
      if (Y = null, $ !== void 0 && (r($), Y = "" + $), i(re) && (r(re.key), Y = "" + re.key), "key" in re) {
        $ = {};
        for (var ae in re)
          ae !== "key" && ($[ae] = re[ae]);
      } else $ = re;
      return Y && l(
        $,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), c(
        j,
        Y,
        oe,
        A,
        o(),
        $,
        X,
        G
      );
    }
    function f(j) {
      typeof j == "object" && j !== null && j.$$typeof === p && j._store && (j._store.validated = 1);
    }
    var m = Ke, p = Symbol.for("react.transitional.element"), C = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), k = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), x = Symbol.for("react.client.reference"), R = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = Object.prototype.hasOwnProperty, de = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var I, y = {}, N = m.react_stack_bottom_frame.bind(
      m,
      s
    )(), ue = q(a(s)), z = {};
    Ut.Fragment = g, Ut.jsx = function(j, re, $, te, A) {
      var oe = 1e4 > R.recentlyCreatedOwnerStacks++;
      return u(
        j,
        re,
        $,
        !1,
        te,
        A,
        oe ? Error("react-stack-top-frame") : N,
        oe ? q(a(j)) : ue
      );
    }, Ut.jsxs = function(j, re, $, te, A) {
      var oe = 1e4 > R.recentlyCreatedOwnerStacks++;
      return u(
        j,
        re,
        $,
        !0,
        te,
        A,
        oe ? Error("react-stack-top-frame") : N,
        oe ? q(a(j)) : ue
      );
    };
  })()), Ut;
}
var ra;
function To() {
  return ra || (ra = 1, process.env.NODE_ENV === "production" ? nn.exports = jo() : nn.exports = No()), nn.exports;
}
var n = To(), Qn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var aa;
function Do() {
  return aa || (aa = 1, (function(e) {
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
  })(Qn)), Qn.exports;
}
var Io = Do();
const ee = /* @__PURE__ */ Co(Io), Of = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = ee(
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
}, $r = ({
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
      className: ee(
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
          className: ee("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: Ro, useCallback: kt, useState: er } = ce;
function Fo(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...d
  } = e, [c, u] = er(!1), [f, m] = er(!1), [p, C] = er(!1), g = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), w = "disabled" in d ? d.disabled : d["aria-disabled"] === "true", V = {
    ...c && { "data-pressed": "true" },
    ...f && { "data-hovered": "true" },
    ...p && { "data-focused": "true" },
    ...w && { "data-disabled": "true" }
  }, L = kt(() => !w && u(!0), [w]), k = kt(() => u(!1), []), v = kt(() => !w && m(!0), [w]), E = kt(() => {
    m(!1), u(!1);
  }, []), _ = kt(() => C(!0), []), H = kt(() => C(!1), []), M = kt((Y) => {
    Y.key === " " && ("href" in d || Y.currentTarget.getAttribute("role") === "button") && (Y.preventDefault(), Y.currentTarget.click());
  }, [d]), D = kt((Y) => {
    if (l) {
      const U = Y.currentTarget;
      if (U.getAttribute("data-processing") === "true") {
        Y.preventDefault();
        return;
      }
      U.setAttribute("data-processing", "true"), setTimeout(() => {
        U.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [l]);
  if ("href" in d && d.href) {
    const { id: Y, style: U, title: ae, ["aria-label"]: pe, ["aria-describedby"]: W, ["aria-labelledby"]: je, tabIndex: fe, ...be } = d, he = d;
    return /* @__PURE__ */ n.jsx(
      "a",
      {
        ref: t,
        href: he.href,
        target: he.target,
        rel: he.rel,
        className: g,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...V,
        ...l && { "data-prevent-double-click": "true" },
        ...be,
        onKeyDown: (xe) => {
          he.onKeyDown?.(xe), M(xe);
        },
        onClick: (xe) => {
          he.onClick?.(xe), D(xe);
        },
        onMouseDown: (xe) => {
          he.onMouseDown?.(xe), L();
        },
        onMouseUp: (xe) => {
          he.onMouseUp?.(xe), k();
        },
        onMouseEnter: (xe) => {
          he.onMouseEnter?.(xe), v();
        },
        onMouseLeave: (xe) => {
          he.onMouseLeave?.(xe), E();
        },
        onFocus: (xe) => {
          he.onFocus?.(xe), _();
        },
        onBlur: (xe) => {
          he.onBlur?.(xe), H();
        },
        "aria-disabled": he["aria-disabled"],
        ...he["aria-disabled"] === "true" && { tabIndex: -1 },
        id: Y,
        style: U,
        title: ae,
        "aria-label": pe,
        "aria-describedby": W,
        "aria-labelledby": je,
        tabIndex: fe,
        children: r
      }
    );
  }
  const { id: x, style: R, title: J, ["aria-label"]: de, ["aria-describedby"]: q, ["aria-labelledby"]: I, tabIndex: y, name: N, value: ue, form: z, formAction: j, formEncType: re, formMethod: $, formNoValidate: te, formTarget: A, autoFocus: oe, ...X } = d, G = d;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: G.type || "button",
      disabled: G.disabled,
      className: g,
      "data-module": "nhs-button",
      ...V,
      ...l && { "data-prevent-double-click": "true" },
      ...G.disabled && { "aria-disabled": "true" },
      ...X,
      onKeyDown: (Y) => {
        G.onKeyDown?.(Y), M(Y);
      },
      onClick: (Y) => {
        G.onClick?.(Y), D(Y);
      },
      onMouseDown: (Y) => {
        G.onMouseDown?.(Y), L();
      },
      onMouseUp: (Y) => {
        G.onMouseUp?.(Y), k();
      },
      onMouseEnter: (Y) => {
        G.onMouseEnter?.(Y), v();
      },
      onMouseLeave: (Y) => {
        G.onMouseLeave?.(Y), E();
      },
      onFocus: (Y) => {
        G.onFocus?.(Y), _();
      },
      onBlur: (Y) => {
        G.onBlur?.(Y), H();
      },
      id: x,
      style: R,
      title: J,
      "aria-label": de,
      "aria-describedby": q,
      "aria-labelledby": I,
      tabIndex: y,
      name: N,
      value: ue,
      form: z,
      formAction: j,
      formEncType: re,
      formMethod: $,
      formNoValidate: te,
      formTarget: A,
      autoFocus: oe,
      children: r
    }
  );
}
const Ge = Ro(Fo);
Ge.displayName = "Button";
const cr = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ee(
    "nhsuk-back-link",
    a
  ), d = ee(
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
}, rt = ({
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
  const u = ee(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": o,
      "nhsuk-tag--closable": s,
      "nhsuk-tag--disabled": l
    },
    d
  ), f = (m) => {
    m.preventDefault(), m.stopPropagation(), !l && i && i();
  };
  return /* @__PURE__ */ n.jsxs("strong", { className: u, ...c, children: [
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
}, Bo = ({
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
  onChange: u,
  onBlur: f,
  onFocus: m,
  attributes: p,
  ...C
}) => {
  const [g, w] = we(a), V = r !== void 0, L = V ? r : g;
  Ie(() => {
    V || w(a);
  }, [a, V]);
  const k = (M) => {
    const D = M.target.checked;
    V || w(D), u?.(D, M);
  }, v = i ? `${e}-hint` : void 0, E = l ? `${e}-error` : void 0, _ = [v, E].filter(Boolean).join(" ") || void 0, H = ee(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    d
  );
  return /* @__PURE__ */ n.jsx("div", { className: H, ...C, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
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
        onChange: k,
        onBlur: f,
        onFocus: m,
        "aria-describedby": _,
        ...p
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: c }),
    i && /* @__PURE__ */ n.jsx("div", { id: v, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: E, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
Bo.displayName = "Checkbox";
const Hr = ({
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
  describedBy: u,
  className: f,
  width: m = "full",
  inputMode: p,
  autoComplete: C,
  maxLength: g,
  minLength: w,
  pattern: V,
  step: L,
  min: k,
  max: v,
  showValueLabels: E = !1,
  showCurrentValue: _ = !1,
  valueLabels: H,
  onChange: M,
  onBlur: D,
  onFocus: x,
  onKeyDown: R,
  ...J
}) => {
  const [de, q] = we(a || o || (r === "range" ? k || "0" : ""));
  Ie(() => {
    a !== void 0 && q(a);
  }, [a]);
  const I = (A) => {
    const oe = A.target;
    q(oe.value), ("type" in A && A.nativeEvent || A.type === "keydown") && M?.(A);
  }, y = r === "range", N = ee(
    "nhsuk-input",
    {
      "nhsuk-input--error": c,
      "nhsuk-input--range": y,
      [`nhsuk-input--width-${m}`]: m !== "full" && !y
    },
    f
  ), ue = a !== void 0, z = {
    id: e,
    name: t,
    type: r,
    placeholder: s,
    disabled: i,
    readOnly: l,
    required: d,
    "aria-describedby": u,
    inputMode: p,
    autoComplete: C,
    maxLength: g,
    minLength: w,
    pattern: V,
    step: L,
    min: k,
    max: v,
    onChange: I,
    onBlur: D,
    onFocus: x,
    onKeyDown: (A) => {
      if (y && /[0-9]/.test(A.key)) {
        const oe = (de?.toString() || "") + A.key;
        A.target.value = oe, I(A);
      }
      R?.(A);
    },
    ...J
  }, j = !ue && o !== void 0 ? { defaultValue: o } : {}, re = ue ? { value: a } : {}, $ = () => /* @__PURE__ */ n.jsx(
    "input",
    {
      className: N,
      ...re,
      ...j,
      "data-current-value": de,
      ...z
    }
  ), te = y ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    E && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: H?.min || k || "0" }),
      $(),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: H?.max || v || "100" })
    ] }),
    !E && $(),
    _ && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      H?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: de })
    ] }) })
  ] }) : null;
  return y ? te : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: N,
      id: e,
      name: t,
      type: r,
      value: a,
      ...a === void 0 && o !== void 0 ? { defaultValue: o } : {},
      placeholder: s,
      disabled: i,
      readOnly: l,
      required: d,
      "aria-describedby": u,
      inputMode: p,
      autoComplete: C,
      maxLength: g,
      minLength: w,
      pattern: V,
      step: L,
      min: k,
      max: v,
      onChange: M,
      onBlur: D,
      onFocus: x,
      onKeyDown: R,
      ...J
    }
  );
}, Pr = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = ee(
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
}, zr = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = ee(
    "nhsuk-fieldset",
    r
  ), i = ee(
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
}, Lo = ({
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
  onChange: u,
  fieldsetAttributes: f,
  attributes: m,
  ...p
}) => {
  const [C, g] = we(
    e.filter((M) => M.checked).map((M) => M.value)
  ), w = r || t, V = i ? `${w}-hint` : void 0, L = l ? `${w}-error` : void 0, k = [V, L].filter(Boolean).join(" ") || void 0, v = (M, D) => {
    let x;
    D ? x = [...C, M] : x = C.filter((R) => R !== M), g(x), u?.(x);
  }, E = () => e.map((M, D) => {
    const x = `${w}-${D + 1}`, R = `${x}-conditional`, J = C.includes(M.value), de = M.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: x,
          name: t,
          type: "checkbox",
          value: M.value,
          checked: J,
          disabled: de,
          onChange: (q) => v(M.value, q.target.checked),
          "aria-describedby": M.hint ? `${x}-hint` : k,
          ...M.conditional && {
            "aria-controls": R,
            "aria-expanded": J ? "true" : "false"
          },
          ...M.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: x, children: M.text }),
      M.hint && /* @__PURE__ */ n.jsx("div", { id: `${x}-hint`, className: "nhsuk-checkboxes__hint", children: M.hint }),
      M.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: ee("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !J
          }),
          id: R,
          children: typeof M.conditional == "object" && M.conditional !== null && "label" in M.conditional && "id" in M.conditional && "name" in M.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            M.conditional.label && /* @__PURE__ */ n.jsx(Pr, { htmlFor: M.conditional.id, children: M.conditional.label }),
            /* @__PURE__ */ n.jsx(Hr, { ...M.conditional })
          ] }) : M.conditional
        }
      )
    ] }, M.value);
  }), _ = ee(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": c
    },
    d
  ), H = ee("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: H, ...m, ...p, children: /* @__PURE__ */ n.jsxs(
    zr,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: k,
      ...f,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: V, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: L, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: _, children: E() })
      ]
    }
  ) });
};
Lo.displayName = "Checkboxes";
const Eo = ({
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
  className: u,
  rows: f = 5,
  cols: m,
  maxLength: p,
  minLength: C,
  wrap: g = "soft",
  resize: w = "vertical",
  autoComplete: V,
  spellCheck: L,
  onChange: k,
  onBlur: v,
  onFocus: E,
  onKeyDown: _,
  ...H
}) => {
  const M = ee(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": d,
      [`nhsuk-textarea--resize-${w}`]: w !== "vertical"
    },
    u
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: M,
      id: e,
      name: t,
      value: r,
      defaultValue: a,
      placeholder: o,
      disabled: s,
      readOnly: i,
      required: l,
      "aria-describedby": c,
      rows: f,
      cols: m,
      maxLength: p,
      minLength: C,
      wrap: g,
      autoComplete: V,
      spellCheck: L,
      onChange: k,
      onBlur: v,
      onFocus: E,
      onKeyDown: _,
      ...H
    }
  );
}, Wa = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = ee("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, Uf = ({
  id: e,
  maxLength: t,
  maxWords: r,
  threshold: a = 75,
  name: o,
  value: s = "",
  rows: i,
  className: l,
  countMessage: d,
  onCountChange: c,
  onChange: u,
  ...f
}) => {
  const [m, p] = we(s), [C, g] = we(0), [w, V] = we(!1), [L, k] = we(!1), v = ne((x) => r ? x.trim() === "" ? 0 : x.trim().split(/\s+/).length : x.length, [r]);
  Ie(() => {
    const x = v(m), R = t || r || 0, J = R - x, de = Math.floor(R * (a / 100));
    g(J), V(x > R), k(x >= de || x > R), c && c(x, J);
  }, [m, t, r, a, v, c]);
  const E = (x) => {
    const R = x.target.value;
    p(R), u && u(x);
  }, _ = () => {
    const x = t || r || 0, R = r ? "word" : "character", J = r ? "words" : "characters";
    if (!L)
      return `You can enter up to ${x} ${x === 1 ? R : J}`;
    if (w) {
      const de = Math.abs(C);
      return `You have ${de} ${de === 1 ? R : J} too many`;
    } else
      return `You have ${C} ${C === 1 ? R : J} remaining`;
  }, H = ee(
    "nhsuk-character-count",
    l
  ), M = ee(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !L,
      "nhsuk-error-message": w
    },
    d?.classes
  ), D = ee(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": w
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: H,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          Eo,
          {
            id: e,
            name: o,
            value: m,
            rows: i,
            className: D,
            onChange: E,
            "aria-describedby": `${e}-info`,
            "aria-invalid": w || void 0,
            ...f
          }
        ),
        /* @__PURE__ */ n.jsx(
          Wa,
          {
            id: `${e}-info`,
            className: M,
            role: "status",
            "aria-live": "polite",
            children: _()
          }
        )
      ]
    }
  );
}, Ao = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: a,
  children: o,
  ...s
}) => {
  const i = ee(
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
}, Mo = ({
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
  multiple: u = !1,
  size: f,
  autoComplete: m,
  options: p,
  children: C,
  onChange: g,
  onBlur: w,
  onFocus: V,
  ...L
}) => {
  const k = ee(
    "nhsuk-select",
    {
      "nhsuk-select--error": l
    },
    c
  ), v = () => p ? p.map((_, H) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: _.value,
      disabled: _.disabled,
      "data-initial-selected": _.selected || void 0,
      children: _.text
    },
    `${_.value}-${H}`
  )) : null, E = o === void 0 && a === void 0 && p ? p.find((_) => _.selected)?.value : void 0;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: k,
      id: e,
      name: t,
      "aria-label": r,
      value: a,
      defaultValue: o !== void 0 ? o : E,
      disabled: s,
      required: i,
      "aria-describedby": d,
      multiple: u,
      size: f,
      autoComplete: m,
      onChange: g,
      onBlur: w,
      onFocus: V,
      ...L,
      children: C || v()
    }
  );
}, ln = Mo;
ln.Option = Ao;
const Gf = ({
  name: e,
  value: t,
  defaultValue: r,
  hasError: a = !1,
  describedBy: o,
  className: s,
  size: i = "normal",
  inline: l = !1,
  options: d,
  onChange: c,
  onBlur: u,
  onFocus: f,
  ...m
}) => {
  const [p, C] = we(t || r || ""), g = Ce([]), w = ee(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), V = (k) => {
    const v = k.target.value;
    C(v), c && c(k);
  }, L = ne((k) => {
    const { key: v } = k;
    if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(v)) return;
    k.preventDefault();
    const E = g.current.filter((D) => D && !D.disabled), _ = E.indexOf(k.currentTarget);
    if (_ === -1) return;
    let H = _;
    v === "ArrowDown" || v === "ArrowRight" ? H = (_ + 1) % E.length : (v === "ArrowUp" || v === "ArrowLeft") && (H = (_ - 1 + E.length) % E.length);
    const M = E[H];
    M && (M.focus(), M.checked || M.click());
  }, []);
  return /* @__PURE__ */ n.jsx(zr, { children: /* @__PURE__ */ n.jsx("div", { className: w, ...m, children: d.map((k, v) => {
    const E = `${e}-${v}`, _ = k.conditional ? `${E}-conditional` : void 0, H = p === k.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: E,
          name: e,
          type: "radio",
          value: k.value,
          disabled: k.disabled,
          checked: H,
          "aria-describedby": o,
          onChange: V,
          onBlur: u,
          onFocus: f,
          onKeyDown: L,
          ref: (M) => {
            M && (g.current[v] = M);
          }
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: E, children: k.text }),
      k.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: k.hint }),
      k.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: ee("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !H
          }),
          id: _,
          children: typeof k.conditional == "object" && k.conditional !== null && "label" in k.conditional && "id" in k.conditional && "name" in k.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            k.conditional.label && /* @__PURE__ */ n.jsx(Pr, { htmlFor: k.conditional.id, children: k.conditional.label }),
            /* @__PURE__ */ n.jsx(Hr, { ...k.conditional })
          ] }) : k.conditional
        }
      )
    ] }, k.value);
  }) }) });
}, Oa = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  style: o,
  ...s
}) => {
  const i = ee(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), l = a ? { maxWidth: a, ...o || {} } : o;
  return /* @__PURE__ */ n.jsx("div", { className: i, style: l, ...s, children: e });
}, Ct = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const o = ee("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, style: r, ...a, children: e });
}, Kt = ({
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
  const u = ee(
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
  return /* @__PURE__ */ n.jsx("div", { className: u, style: d, ...c, children: e });
}, dr = ({
  children: e,
  className: t,
  style: r,
  ...a
}) => {
  const s = Ke.Children.toArray(e)[0], i = Ke.isValidElement(s) && (s.type === Ct || typeof s.props == "object" && s.props && "className" in s.props && typeof s.props.className == "string" && s.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Oa, { className: t, style: r, ...a, children: i ? e : /* @__PURE__ */ n.jsx(Ct, { children: e }) });
}, $o = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const d = i || (t === "number" ? "ol" : "ul"), c = ee(
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
}, Ho = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = ee("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Po = $o;
Po.Item = Ho;
const Vf = ({
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
}, Yf = {
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
}, qf = ({
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
}, Kf = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Zf = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ua = ({
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
}, bt = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const c = e ?? ((C) => {
    switch (C) {
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
  })(s), u = ee(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), f = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), m = `h${c}`, p = i ? { ...l.style, marginBottom: i } : l.style;
  return Ha(
    m,
    { className: u, ...l, style: p },
    f
  );
}, sa = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = ee("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, Jf = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const d = Ce(null);
  Ie(() => {
    d.current && d.current.focus();
  }, []);
  const c = ee(
    "nhsuk-error-summary",
    s
  ), u = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, f = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, m = (p) => {
    const C = p.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: p.html } }) : p.text;
    return p.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: p.href,
        ...p.attributes,
        children: C
      }
    ) : C;
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
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title", children: u() }),
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-error-summary__body", children: [
          i && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: i }),
          !i && (r || a) && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-error-summary__description", "data-role": "description", children: f() }),
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((p, C) => /* @__PURE__ */ n.jsx("li", { children: m(p) }, C)) })
        ] })
      ]
    }
  );
}, Xf = ({
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
  const [u, f] = we(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [m, p] = we({}), C = (I) => I % 4 === 0 && I % 100 !== 0 || I % 400 === 0, g = (I, y) => {
    const N = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return I === 2 && C(y) ? 29 : N[I - 1];
  }, w = (I, y, N) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Day must be a number";
    const ue = parseInt(I, 10);
    if (ue < 1 || ue > 31) return "Day must be between 1 and 31";
    if (y && N) {
      const z = parseInt(y, 10), j = parseInt(N, 10);
      if (!isNaN(z) && !isNaN(j) && z >= 1 && z <= 12) {
        const re = g(z, j);
        if (ue > re)
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
          ][z - 1]} ${j} only has ${re} days`;
      }
    }
  }, V = (I) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Month must be a number";
    const y = parseInt(I, 10);
    if (y < 1 || y > 12) return "Month must be between 1 and 12";
  }, L = (I) => {
    if (!I) return;
    if (!/^\d+$/.test(I)) return "Year must be a number";
    const y = parseInt(I, 10), N = (/* @__PURE__ */ new Date()).getFullYear();
    if (y < 1900 || y > N + 10)
      return `Year must be between 1900 and ${N + 10}`;
  }, k = (I, y, N) => {
    if (!I || !y || !N) return;
    const ue = parseInt(I, 10), z = parseInt(y, 10), j = parseInt(N, 10);
    if (isNaN(ue) || isNaN(z) || isNaN(j) || z < 1 || z > 12 || j < 1900) return;
    const re = g(z, j);
    ue < 1 || ue > re;
  }, v = ne((I, y) => {
    const N = {
      ...u,
      [I]: y
    };
    f(N), d && d(N);
  }, [u, d]), E = ne((I) => {
    const y = u[I];
    let N;
    if (I === "day")
      N = w(y, u.month, u.year);
    else if (I === "month") {
      if (N = V(y), !N && u.day) {
        const ue = w(u.day, y, u.year);
        p((z) => ({
          ...z,
          day: ue
        }));
      }
    } else if (I === "year" && (N = L(y), !N && u.day && u.month)) {
      const ue = w(u.day, u.month, y);
      p((z) => ({
        ...z,
        day: ue
      }));
    }
    if (p((ue) => ({
      ...ue,
      [I]: N
    })), u.day && u.month && u.year) {
      const ue = k(
        I === "day" ? y : u.day,
        I === "month" ? y : u.month,
        I === "year" ? y : u.year
      );
      ue && p((z) => ({
        ...z,
        day: ue
      }));
    }
  }, [u, w, V, L, k]), _ = Re(() => [
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
  ], []), H = r || _;
  let M = s?.describedBy || "";
  const D = i ? `${e}-hint` : "", x = l ? `${e}-error` : "";
  D && (M = M ? `${M} ${D}` : D), x && (M = M ? `${M} ${x}` : x);
  const R = Object.values(m).some((I) => I), J = ee(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || R
    }
  ), de = ee(
    "nhsuk-date-input",
    t
  ), q = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      Wa,
      {
        id: D,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      sa,
      {
        id: x,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(m).map(
      ([I, y]) => y ? /* @__PURE__ */ n.jsxs(
        sa,
        {
          id: `${e}-${I}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            y
          ]
        },
        `${I}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: de, id: e, "data-testid": "date-input", ...c, children: H.map((I) => {
      const y = I.id || `${e}-${I.name}`, N = a ? `${a}[${I.name}]` : I.name, ue = I.label || I.name.charAt(0).toUpperCase() + I.name.slice(1), z = m[I.name], j = u[I.name] || "";
      let re = M;
      if (z) {
        const $ = `${e}-${I.name}-error`;
        re = re ? `${re} ${$}` : $;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          Pr,
          {
            htmlFor: y,
            className: "nhsuk-date-input__label",
            children: ue
          }
        ),
        /* @__PURE__ */ n.jsx(
          Hr,
          {
            id: y,
            name: N,
            value: j,
            className: ee("nhsuk-date-input__input", I.classes, {
              "nhsuk-input--error": z
            }),
            inputMode: I.inputmode,
            autoComplete: I.autocomplete,
            pattern: I.pattern,
            "aria-describedby": re || void 0,
            hasError: !!z,
            onChange: ($) => v(I.name, $.target.value),
            onBlur: () => E(I.name)
          }
        )
      ] }, I.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: J, children: s ? /* @__PURE__ */ n.jsx(
    zr,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: M || void 0,
      children: q()
    }
  ) : q() });
}, Ga = {
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
}, Va = So(Ga), zo = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Ga, ...t };
  return /* @__PURE__ */ n.jsx(Va.Provider, { value: r, children: e });
}, Qf = () => {
  const e = wo(Va);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Wo() {
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
function Oo() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Wo(), document.head.appendChild(e);
}
const em = ({ children: e, theme: t }) => (Ie(() => {
  Oo();
}, []), /* @__PURE__ */ n.jsx(zo, { theme: t, children: e })), Ya = ({
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
  callbacks: u = {},
  isLoading: f = !1,
  showResults: m = !1,
  results: p = [],
  formAttributes: C = {},
  inputAttributes: g = {},
  buttonAttributes: w = {},
  preventDefaultSubmit: V = !1,
  debounceMs: L = 300,
  minQueryLength: k = 1
}) => {
  const [v, E] = we(""), [_, H] = we(!1), M = Ce(void 0), D = Ce(null), x = Ce(null), R = e === "controlled" && o !== void 0, J = R ? o : v, de = ne((te) => {
    M.current && clearTimeout(M.current), M.current = setTimeout(() => {
      u.onChange && te.length >= k && u.onChange(te);
    }, L);
  }, [u.onChange, L, k]), q = ne((te) => {
    const A = te.target.value;
    R || E(A), e !== "form" && de(A);
  }, [R, e, de]), I = ne((te) => {
    const A = J.trim(), oe = {
      query: A,
      timestamp: Date.now(),
      formData: new FormData(te.currentTarget)
    };
    e === "controlled" || e === "hybrid" && V ? (te.preventDefault(), u.onSearch && A.length >= k && u.onSearch(oe)) : e === "hybrid" && u.onSearch && A.length >= k && u.onSearch(oe);
  }, [e, J, u.onSearch, V, k]), y = ne(() => {
    H(!0), u.onFocus?.();
  }, [u.onFocus]), N = ne(() => {
    H(!1), u.onBlur?.();
  }, [u.onBlur]), ue = ne(() => {
    R || E(""), u.onClear?.(), x.current?.focus();
  }, [R, u.onClear]);
  Ie(() => () => {
    M.current && clearTimeout(M.current);
  }, []);
  const z = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: ee("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": f
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
  ), re = () => !J || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ue,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), $ = () => !m || !p.length || !_ ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((te) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: te.href ? /* @__PURE__ */ n.jsxs("a", { href: te.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: te.title }),
    te.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: te.description })
  ] }) : /* @__PURE__ */ n.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => u.onSearch?.({ query: te.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-title", children: te.title }),
        te.description && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__search-result-description", children: te.description })
      ]
    }
  ) }, te.id)) });
  return /* @__PURE__ */ n.jsxs("div", { className: ee("nhsuk-header__search", d, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": f,
    "nhsuk-header__search--focused": _,
    "nhsuk-header__search--has-results": m && p.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: D,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: I,
        ...C,
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
                ref: x,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: J,
                onChange: q,
                onFocus: y,
                onBlur: N,
                disabled: c || f,
                ...m && p.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...g
              }
            ),
            re()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: c || f || e !== "form" && J.length < k,
              ...w,
              children: [
                f ? j() : z(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: f ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    $()
  ] });
}, qa = ({
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
  ...u
}) => {
  const [f, m] = we(!1), [p, C] = we(!1), [g, w] = we(i?.items?.length || 0), [V, L] = we(!1), [k, v] = we(!1), [E, _] = we(!1), H = Ce(null), M = Ce(null), D = Ce(!1), x = Ce(null), R = Ce([]), J = Ce(null);
  Ie(() => {
    typeof window > "u" || (_(!0), L(!0));
  }, []), Ie(() => {
    if (!E || !i?.items?.length) return;
    R.current = i.items;
    const X = setTimeout(() => {
      H.current && M.current && ue();
    }, 100);
    return () => clearTimeout(X);
  }, [E, i?.items]);
  const de = r.href && !t.href || r.href && r.href === t.href, q = de ? r.href : t.href, I = ee(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), y = ee(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), N = ee(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), ue = ne(() => {
    if (!(typeof window > "u" || D.current) && !(!H.current || !M.current || !R.current.length)) {
      D.current = !0;
      try {
        const X = M.current, G = H.current, Y = X.offsetWidth, U = G.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (U.length === 0 || Y === 0) {
          D.current = !1;
          return;
        }
        const ae = window.innerWidth < 768, pe = ae ? 16 : 32, W = pe * 2, je = Y - W, fe = Array.from(U).map((Ee) => Ee.offsetWidth), be = fe.reduce((Ee, Fe) => Ee + Fe, 0), he = ae ? 80 : 100, xe = J.current !== null && J.current !== ae;
        if (J.current = ae, console.log("Overflow check:", {
          containerWidth: Y,
          availableContainerWidth: je,
          totalGutters: W,
          gutterSize: pe,
          totalWidth: be,
          mobile: ae,
          breakpointChanged: xe,
          itemCount: fe.length,
          measurements: fe
        }), be <= je)
          C(!1), w(R.current.length);
        else {
          const Ee = je - he;
          let Fe = 0, Ne = 0;
          for (let b = 0; b < fe.length; b++) {
            const F = Ne + fe[b];
            if (F <= Ee)
              Ne = F, Fe = b + 1;
            else
              break;
          }
          Fe = Math.max(1, Fe);
          const T = Fe < fe.length;
          C(T), w(Fe);
        }
        D.current = !1;
      } catch (X) {
        console.error("Overflow detection error:", X), C(!1), w(R.current.length), D.current = !1;
      }
    }
  }, []);
  Ie(() => {
    if (typeof document > "u") return;
    const X = (G) => {
      G.key === "Escape" && f && m(!1);
    };
    if (f)
      return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [f]), Ie(() => {
    if (typeof window > "u" || !E) return;
    const X = () => {
      f && (m(!1), v(!1)), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
        R.current.length > 0 && ue();
      }, 250);
    };
    let G = null, Y = null;
    return window.matchMedia && (G = window.matchMedia("(max-width: 767px)"), Y = () => {
      R.current.length > 0 && setTimeout(() => ue(), 50);
    }, G.addEventListener ? G.addEventListener("change", Y) : G.addListener(Y)), window.addEventListener("resize", X), () => {
      window.removeEventListener("resize", X), G && Y && (G.removeEventListener ? G.removeEventListener("change", Y) : G.removeListener(Y)), x.current && clearTimeout(x.current);
    };
  }, [E, f, ue]), Ie(() => {
    if (typeof document > "u") return;
    const X = (G) => {
      const Y = G.target, U = H.current?.contains(Y);
      f && !U && m(!1);
    };
    if (f)
      return document.addEventListener("mousedown", X), () => document.removeEventListener("mousedown", X);
  }, [f]);
  const z = (X) => {
    X && (X.preventDefault(), X.stopPropagation());
    const G = !f;
    m(G), G ? setTimeout(() => {
      v(!0);
    }, 50) : v(!1);
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
  ), re = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : j(), $ = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, te = (X, G) => X ? G ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: G, children: X }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: X }) : null, A = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), oe = (X) => {
    if (X.active || X.current) {
      const G = X.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: X.html } }) : X.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: G });
    }
    return X.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: X.html } }) : X.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: I,
      role: "banner",
      "data-module": "nhsuk-header",
      ...c,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: y, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            q ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: q, children: [
              re(),
              $(),
              de && te(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              re(),
              $(),
              de && te(r.text)
            ] }),
            r.text && !de && te(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(Ya, { ...o }),
          /* @__PURE__ */ n.jsx(
            $r,
            {
              ...s,
              variant: d === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: N,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: ee(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !V && E,
                    "nhsuk-header__navigation-container--ssr": !E
                  },
                  l
                ),
                ref: M,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: H, children: [
                  (E ? i.items.slice(0, g) : i.items).map((X, G) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: ee(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": X.active || X.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !E && G >= 4
                          // Mark items that would be hidden on client
                        },
                        X.className
                      ),
                      ...X.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: X.href,
                          ...X.active || X.current ? {
                            "aria-current": X.current ? "page" : "true"
                          } : {},
                          children: oe(X)
                        }
                      )
                    },
                    G
                  )),
                  E && p && g < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: z,
                          type: "button",
                          children: [
                            /* @__PURE__ */ n.jsx("span", { children: "More" }),
                            A()
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
        E && i && i.items && i.items.length > 0 && f && k && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !k,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(g).map((X, G) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: ee(
                  "nhsuk-header__dropdown-item",
                  {
                    "nhsuk-header__dropdown-item--current": X.active || X.current
                  }
                ),
                children: /* @__PURE__ */ n.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: X.href,
                    ...X.active || X.current ? {
                      "aria-current": X.current ? "page" : "true"
                    } : {},
                    onClick: () => {
                      m(!1), v(!1);
                    },
                    children: oe(X)
                  }
                )
              },
              `overflow-${g + G}`
            )) })
          }
        )
      ]
    }
  );
}, tm = ({
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
  ...u
}) => {
  const f = r.href && !t.href || r.href && r.href === t.href, m = f ? r.href : t.href, p = ee(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), C = ee(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), g = ee(
    "nhsuk-header__navigation",
    i?.className
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
  ), V = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS",
      role: "img",
      "aria-label": t.ariaLabel || "NHS"
    }
  ) : w(), L = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, k = (_, H) => _ ? H ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: H, children: _ }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: _ }) : null, v = () => !i?.items || i.items.length === 0 ? null : i.items.map((_, H) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: _.href,
          ..._.attributes || {},
          children: _.text
        }
      )
    },
    _.href || H
  )), E = () => o ? /* @__PURE__ */ n.jsx(Ya, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: p,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...c,
      ...u,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: C, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            m ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: m, children: [
              V(),
              L(),
              f && k(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              V(),
              L(),
              f && k(r.text)
            ] }),
            r.text && !f && k(r.text, r.href)
          ] }),
          (d === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            E()
          ] }),
          d !== "organisation" && !a && E(),
          /* @__PURE__ */ n.jsx(
            $r,
            {
              ...s,
              variant: d === "white" ? "white" : "default"
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
                children: v()
              }
            ) })
          }
        )
      ]
    }
  );
}, nm = ({
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
  maxVisibleItems: u = 5,
  // New prop to control CSS-based overflow
  ...f
}) => {
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, C = ee(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    e
  ), g = ee(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), w = ee(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), V = () => /* @__PURE__ */ n.jsxs(
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
  ), L = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : V(), k = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, v = (_, H) => _ ? H ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: H, children: _ }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: _ }) : null, E = (_) => {
    if (_.active || _.current) {
      const H = _.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: H });
    }
    return _.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: C,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...c,
      ...f,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: g, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              L(),
              k(),
              m && v(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              L(),
              k(),
              m && v(r.text)
            ] }),
            r.text && !m && v(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            $r,
            {
              ...s,
              variant: d === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: w,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: ee(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, u).map((_, H) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: ee(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": _.active || _.current
                        },
                        _.className
                      ),
                      ..._.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: _.href,
                          ..._.active || _.current ? {
                            "aria-current": _.current ? "page" : "true"
                          } : {},
                          children: E(_)
                        }
                      )
                    },
                    H
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(u).map((_, H) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: ee(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": _.active || _.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: _.href,
                            ..._.active || _.current ? {
                              "aria-current": _.current ? "page" : "true"
                            } : {},
                            children: E(_)
                          }
                        )
                      },
                      `overflow-${u + H}`
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
}, Uo = ({
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
  const u = [
    "nhsuk-hero",
    s && e ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    s && !e ? "nhsuk-hero--image" : "",
    l
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    s ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), m = [
    "nhsuk-hero__heading",
    r,
    !d && !a && !o ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), p = d || e || a || o, C = () => {
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
      className: u,
      style: s ? { backgroundImage: `url('${s}')` } : void 0,
      role: "banner",
      ...c,
      children: [
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: p && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          C(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && p && /* @__PURE__ */ n.jsx("div", { className: f, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          C(),
          d || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Uo.displayName = "Hero";
const Ka = ({
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
  containerStyle: u
}) => {
  const f = (p, C = !1) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: ee("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": C
      }),
      children: /* @__PURE__ */ n.jsx(
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
  ), m = !!(r || a);
  return /* @__PURE__ */ n.jsx("footer", { role: "contentinfo", ...l, style: { ...l?.style, ...d }, children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-footer-container", children: [
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: ee("nhsuk-width-container", i),
        style: u,
        children: [
          /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
          /* @__PURE__ */ n.jsx("div", { className: ee("nhsuk-footer", e), style: c, children: m ? (
            // Multi-column layout
            /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              t.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: t.map((p) => f(p)) }),
              r && r.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: r.map((p) => f(p)) }),
              a && a.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list", children: a.map((p) => f(p)) }),
              o && o.length > 0 && /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-footer__list nhsuk-footer__meta", children: o.map((p) => f(p)) })
            ] })
          ) : (
            // Single column layout (default)
            /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-footer__list", children: [
              t.map((p) => f(p, !0)),
              (r || []).map((p) => f(p, !0)),
              (a || []).map((p) => f(p, !0)),
              (o || []).map((p) => f(p, !0))
            ] })
          ) }),
          !m && /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) })
        ]
      }
    ),
    m && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx("div", { children: /* @__PURE__ */ n.jsx("p", { className: "nhsuk-footer__copyright", children: s }) }) })
  ] }) });
};
function on(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Go(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wr(e) {
  let t, r, a;
  e.length !== 2 ? (t = on, r = (l, d) => on(e(l), d), a = (l, d) => e(l) - d) : (t = e === on || e === Go ? e : Vo, r = e, a = e);
  function o(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], d) < 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function s(l, d, c = 0, u = l.length) {
    if (c < u) {
      if (t(d, d) !== 0) return u;
      do {
        const f = c + u >>> 1;
        r(l[f], d) <= 0 ? c = f + 1 : u = f;
      } while (c < u);
    }
    return c;
  }
  function i(l, d, c = 0, u = l.length) {
    const f = o(l, d, c, u - 1);
    return f > c && a(l[f - 1], d) > -a(l[f], d) ? f - 1 : f;
  }
  return { left: o, center: i, right: s };
}
function Vo() {
  return 0;
}
function Yo(e) {
  return e === null ? NaN : +e;
}
const qo = Wr(on), Ko = qo.right;
Wr(Yo).center;
const Zo = Math.sqrt(50), Jo = Math.sqrt(10), Xo = Math.sqrt(2);
function Za(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= Zo ? 10 : s >= Jo ? 5 : s >= Xo ? 2 : 1;
  let l, d, c;
  return o < 0 ? (c = Math.pow(10, -o) / i, l = Math.round(e * c), d = Math.round(t * c), l / c < e && ++l, d / c > t && --d, c = -c) : (c = Math.pow(10, o) * i, l = Math.round(e / c), d = Math.round(t / c), l * c < e && ++l, d * c > t && --d), d < l && 0.5 <= r && r < 2 ? Za(e, t, r * 2) : [l, d, c];
}
function oa(e, t, r) {
  return t = +t, e = +e, r = +r, Za(e, t, r)[2];
}
function ia(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? oa(t, e, r) : oa(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Qo(e, t) {
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
function Or(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Ja(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Qt() {
}
var Zt = 0.7, cn = 1 / Zt, Et = "\\s*([+-]?\\d+)\\s*", Jt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ei = /^#([0-9a-f]{3,8})$/, ti = new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`), ni = new RegExp(`^rgb\\(${nt},${nt},${nt}\\)$`), ri = new RegExp(`^rgba\\(${Et},${Et},${Et},${Jt}\\)$`), ai = new RegExp(`^rgba\\(${nt},${nt},${nt},${Jt}\\)$`), si = new RegExp(`^hsl\\(${Jt},${nt},${nt}\\)$`), oi = new RegExp(`^hsla\\(${Jt},${nt},${nt},${Jt}\\)$`), la = {
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
Or(Qt, Xt, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ca,
  // Deprecated! Use color.formatHex.
  formatHex: ca,
  formatHex8: ii,
  formatHsl: li,
  formatRgb: da,
  toString: da
});
function ca() {
  return this.rgb().formatHex();
}
function ii() {
  return this.rgb().formatHex8();
}
function li() {
  return Xa(this).formatHsl();
}
function da() {
  return this.rgb().formatRgb();
}
function Xt(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = ei.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? ua(t) : r === 3 ? new Ye(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? rn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? rn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ti.exec(e)) ? new Ye(t[1], t[2], t[3], 1) : (t = ni.exec(e)) ? new Ye(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = ri.exec(e)) ? rn(t[1], t[2], t[3], t[4]) : (t = ai.exec(e)) ? rn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = si.exec(e)) ? ma(t[1], t[2] / 100, t[3] / 100, 1) : (t = oi.exec(e)) ? ma(t[1], t[2] / 100, t[3] / 100, t[4]) : la.hasOwnProperty(e) ? ua(la[e]) : e === "transparent" ? new Ye(NaN, NaN, NaN, 0) : null;
}
function ua(e) {
  return new Ye(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function rn(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Ye(e, t, r, a);
}
function ci(e) {
  return e instanceof Qt || (e = Xt(e)), e ? (e = e.rgb(), new Ye(e.r, e.g, e.b, e.opacity)) : new Ye();
}
function ur(e, t, r, a) {
  return arguments.length === 1 ? ci(e) : new Ye(e, t, r, a ?? 1);
}
function Ye(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Or(Ye, ur, Ja(Qt, {
  brighter(e) {
    return e = e == null ? cn : Math.pow(cn, e), new Ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Zt : Math.pow(Zt, e), new Ye(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ye(St(this.r), St(this.g), St(this.b), dn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ha,
  // Deprecated! Use color.formatHex.
  formatHex: ha,
  formatHex8: di,
  formatRgb: fa,
  toString: fa
}));
function ha() {
  return `#${wt(this.r)}${wt(this.g)}${wt(this.b)}`;
}
function di() {
  return `#${wt(this.r)}${wt(this.g)}${wt(this.b)}${wt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function fa() {
  const e = dn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${St(this.r)}, ${St(this.g)}, ${St(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function dn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function St(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function wt(e) {
  return e = St(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ma(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Qe(e, t, r, a);
}
function Xa(e) {
  if (e instanceof Qe) return new Qe(e.h, e.s, e.l, e.opacity);
  if (e instanceof Qt || (e = Xt(e)), !e) return new Qe();
  if (e instanceof Qe) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, d = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= d < 0.5 ? s + o : 2 - s - o, i *= 60) : l = d > 0 && d < 1 ? 0 : i, new Qe(i, l, d, e.opacity);
}
function ui(e, t, r, a) {
  return arguments.length === 1 ? Xa(e) : new Qe(e, t, r, a ?? 1);
}
function Qe(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Or(Qe, ui, Ja(Qt, {
  brighter(e) {
    return e = e == null ? cn : Math.pow(cn, e), new Qe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Zt : Math.pow(Zt, e), new Qe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new Ye(
      tr(e >= 240 ? e - 240 : e + 120, o, a),
      tr(e, o, a),
      tr(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Qe(pa(this.h), an(this.s), an(this.l), dn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = dn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${pa(this.h)}, ${an(this.s) * 100}%, ${an(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function pa(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function an(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function tr(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Ur = (e) => () => e;
function hi(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function fi(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function mi(e) {
  return (e = +e) == 1 ? Qa : function(t, r) {
    return r - t ? fi(t, r, e) : Ur(isNaN(t) ? r : t);
  };
}
function Qa(e, t) {
  var r = t - e;
  return r ? hi(e, r) : Ur(isNaN(e) ? t : e);
}
const ga = (function e(t) {
  var r = mi(t);
  function a(o, s) {
    var i = r((o = ur(o)).r, (s = ur(s)).r), l = r(o.g, s.g), d = r(o.b, s.b), c = Qa(o.opacity, s.opacity);
    return function(u) {
      return o.r = i(u), o.g = l(u), o.b = d(u), o.opacity = c(u), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function pi(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function gi(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function bi(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = Gr(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function xi(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function un(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function yi(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = Gr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var hr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, nr = new RegExp(hr.source, "g");
function vi(e) {
  return function() {
    return e;
  };
}
function _i(e) {
  return function(t) {
    return e(t) + "";
  };
}
function ki(e, t) {
  var r = hr.lastIndex = nr.lastIndex = 0, a, o, s, i = -1, l = [], d = [];
  for (e = e + "", t = t + ""; (a = hr.exec(e)) && (o = nr.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, d.push({ i, x: un(a, o) })), r = nr.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? d[0] ? _i(d[0].x) : vi(t) : (t = d.length, function(c) {
    for (var u = 0, f; u < t; ++u) l[(f = d[u]).i] = f.x(c);
    return l.join("");
  });
}
function Gr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? Ur(t) : (r === "number" ? un : r === "string" ? (a = Xt(t)) ? (t = a, ga) : ki : t instanceof Xt ? ga : t instanceof Date ? xi : gi(t) ? pi : Array.isArray(t) ? bi : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? yi : un)(e, t);
}
function wi(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Si(e) {
  return function() {
    return e;
  };
}
function Ci(e) {
  return +e;
}
var ba = [0, 1];
function Bt(e) {
  return e;
}
function fr(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Si(isNaN(t) ? NaN : 0.5);
}
function ji(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function Ni(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = fr(o, a), s = r(i, s)) : (a = fr(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function Ti(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = fr(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var d = Ko(e, l, 1, a) - 1;
    return s[d](o[d](l));
  };
}
function Di(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ii() {
  var e = ba, t = ba, r = Gr, a, o, s, i = Bt, l, d, c;
  function u() {
    var m = Math.min(e.length, t.length);
    return i !== Bt && (i = ji(e[0], e[m - 1])), l = m > 2 ? Ti : Ni, d = c = null, f;
  }
  function f(m) {
    return m == null || isNaN(m = +m) ? s : (d || (d = l(e.map(a), t, r)))(a(i(m)));
  }
  return f.invert = function(m) {
    return i(o((c || (c = l(t, e.map(a), un)))(m)));
  }, f.domain = function(m) {
    return arguments.length ? (e = Array.from(m, Ci), u()) : e.slice();
  }, f.range = function(m) {
    return arguments.length ? (t = Array.from(m), u()) : t.slice();
  }, f.rangeRound = function(m) {
    return t = Array.from(m), r = wi, u();
  }, f.clamp = function(m) {
    return arguments.length ? (i = m ? !0 : Bt, u()) : i !== Bt;
  }, f.interpolate = function(m) {
    return arguments.length ? (r = m, u()) : r;
  }, f.unknown = function(m) {
    return arguments.length ? (s = m, f) : s;
  }, function(m, p) {
    return a = m, o = p, u();
  };
}
function Ri() {
  return Ii()(Bt, Bt);
}
function Fi(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const rr = /* @__PURE__ */ new Date(), ar = /* @__PURE__ */ new Date();
function ze(e, t, r, a) {
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
  }, o.filter = (s) => ze((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (rr.setTime(+s), ar.setTime(+i), e(rr), e(ar), Math.floor(r(rr, ar))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const hn = ze(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
hn.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? ze((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : hn);
hn.range;
const pt = 1e3, Ze = pt * 60, gt = Ze * 60, xt = gt * 24, Vr = xt * 7, xa = xt * 30, sr = xt * 365, Lt = ze((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * pt);
}, (e, t) => (t - e) / pt, (e) => e.getUTCSeconds());
Lt.range;
const Yr = ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pt);
}, (e, t) => {
  e.setTime(+e + t * Ze);
}, (e, t) => (t - e) / Ze, (e) => e.getMinutes());
Yr.range;
const Bi = ze((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ze);
}, (e, t) => (t - e) / Ze, (e) => e.getUTCMinutes());
Bi.range;
const qr = ze((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * pt - e.getMinutes() * Ze);
}, (e, t) => {
  e.setTime(+e + t * gt);
}, (e, t) => (t - e) / gt, (e) => e.getHours());
qr.range;
const Li = ze((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * gt);
}, (e, t) => (t - e) / gt, (e) => e.getUTCHours());
Li.range;
const en = ze(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ze) / xt,
  (e) => e.getDate() - 1
);
en.range;
const Kr = ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / xt, (e) => e.getUTCDate() - 1);
Kr.range;
const Ei = ze((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / xt, (e) => Math.floor(e / xt));
Ei.range;
function Nt(e) {
  return ze((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ze) / Vr);
}
const On = Nt(0), fn = Nt(1), Ai = Nt(2), Mi = Nt(3), At = Nt(4), $i = Nt(5), Hi = Nt(6);
On.range;
fn.range;
Ai.range;
Mi.range;
At.range;
$i.range;
Hi.range;
function Tt(e) {
  return ze((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Vr);
}
const es = Tt(0), mn = Tt(1), Pi = Tt(2), zi = Tt(3), Mt = Tt(4), Wi = Tt(5), Oi = Tt(6);
es.range;
mn.range;
Pi.range;
zi.range;
Mt.range;
Wi.range;
Oi.range;
const Zr = ze((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
Zr.range;
const Ui = ze((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Ui.range;
const yt = ze((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
yt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ze((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
yt.range;
const jt = ze((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
jt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : ze((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
jt.range;
function Gi(e, t, r, a, o, s) {
  const i = [
    [Lt, 1, pt],
    [Lt, 5, 5 * pt],
    [Lt, 15, 15 * pt],
    [Lt, 30, 30 * pt],
    [s, 1, Ze],
    [s, 5, 5 * Ze],
    [s, 15, 15 * Ze],
    [s, 30, 30 * Ze],
    [o, 1, gt],
    [o, 3, 3 * gt],
    [o, 6, 6 * gt],
    [o, 12, 12 * gt],
    [a, 1, xt],
    [a, 2, 2 * xt],
    [r, 1, Vr],
    [t, 1, xa],
    [t, 3, 3 * xa],
    [e, 1, sr]
  ];
  function l(c, u, f) {
    const m = u < c;
    m && ([c, u] = [u, c]);
    const p = f && typeof f.range == "function" ? f : d(c, u, f), C = p ? p.range(c, +u + 1) : [];
    return m ? C.reverse() : C;
  }
  function d(c, u, f) {
    const m = Math.abs(u - c) / f, p = Wr(([, , w]) => w).right(i, m);
    if (p === i.length) return e.every(ia(c / sr, u / sr, f));
    if (p === 0) return hn.every(Math.max(ia(c, u, f), 1));
    const [C, g] = i[m / i[p - 1][2] < i[p][2] / m ? p - 1 : p];
    return C.every(g);
  }
  return [l, d];
}
const [Vi, Yi] = Gi(yt, Zr, On, en, qr, Yr);
function or(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ir(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function Gt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function qi(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, d = e.shortMonths, c = Vt(o), u = Yt(o), f = Vt(s), m = Yt(s), p = Vt(i), C = Yt(i), g = Vt(l), w = Yt(l), V = Vt(d), L = Yt(d), k = {
    a: N,
    A: ue,
    b: z,
    B: j,
    c: null,
    d: Sa,
    e: Sa,
    f: bl,
    g: Nl,
    G: Dl,
    H: ml,
    I: pl,
    j: gl,
    L: ts,
    m: xl,
    M: yl,
    p: re,
    q: $,
    Q: Na,
    s: Ta,
    S: vl,
    u: _l,
    U: kl,
    V: wl,
    w: Sl,
    W: Cl,
    x: null,
    X: null,
    y: jl,
    Y: Tl,
    Z: Il,
    "%": ja
  }, v = {
    a: te,
    A,
    b: oe,
    B: X,
    c: null,
    d: Ca,
    e: Ca,
    f: Ll,
    g: Ul,
    G: Vl,
    H: Rl,
    I: Fl,
    j: Bl,
    L: rs,
    m: El,
    M: Al,
    p: G,
    q: Y,
    Q: Na,
    s: Ta,
    S: Ml,
    u: $l,
    U: Hl,
    V: Pl,
    w: zl,
    W: Wl,
    x: null,
    X: null,
    y: Ol,
    Y: Gl,
    Z: Yl,
    "%": ja
  }, E = {
    a: x,
    A: R,
    b: J,
    B: de,
    c: q,
    d: ka,
    e: ka,
    f: dl,
    g: _a,
    G: va,
    H: wa,
    I: wa,
    j: ol,
    L: cl,
    m: sl,
    M: il,
    p: D,
    q: al,
    Q: hl,
    s: fl,
    S: ll,
    u: Qi,
    U: el,
    V: tl,
    w: Xi,
    W: nl,
    x: I,
    X: y,
    y: _a,
    Y: va,
    Z: rl,
    "%": ul
  };
  k.x = _(r, k), k.X = _(a, k), k.c = _(t, k), v.x = _(r, v), v.X = _(a, v), v.c = _(t, v);
  function _(U, ae) {
    return function(pe) {
      var W = [], je = -1, fe = 0, be = U.length, he, xe, Ee;
      for (pe instanceof Date || (pe = /* @__PURE__ */ new Date(+pe)); ++je < be; )
        U.charCodeAt(je) === 37 && (W.push(U.slice(fe, je)), (xe = ya[he = U.charAt(++je)]) != null ? he = U.charAt(++je) : xe = he === "e" ? " " : "0", (Ee = ae[he]) && (he = Ee(pe, xe)), W.push(he), fe = je + 1);
      return W.push(U.slice(fe, je)), W.join("");
    };
  }
  function H(U, ae) {
    return function(pe) {
      var W = Gt(1900, void 0, 1), je = M(W, U, pe += "", 0), fe, be;
      if (je != pe.length) return null;
      if ("Q" in W) return new Date(W.Q);
      if ("s" in W) return new Date(W.s * 1e3 + ("L" in W ? W.L : 0));
      if (ae && !("Z" in W) && (W.Z = 0), "p" in W && (W.H = W.H % 12 + W.p * 12), W.m === void 0 && (W.m = "q" in W ? W.q : 0), "V" in W) {
        if (W.V < 1 || W.V > 53) return null;
        "w" in W || (W.w = 1), "Z" in W ? (fe = ir(Gt(W.y, 0, 1)), be = fe.getUTCDay(), fe = be > 4 || be === 0 ? mn.ceil(fe) : mn(fe), fe = Kr.offset(fe, (W.V - 1) * 7), W.y = fe.getUTCFullYear(), W.m = fe.getUTCMonth(), W.d = fe.getUTCDate() + (W.w + 6) % 7) : (fe = or(Gt(W.y, 0, 1)), be = fe.getDay(), fe = be > 4 || be === 0 ? fn.ceil(fe) : fn(fe), fe = en.offset(fe, (W.V - 1) * 7), W.y = fe.getFullYear(), W.m = fe.getMonth(), W.d = fe.getDate() + (W.w + 6) % 7);
      } else ("W" in W || "U" in W) && ("w" in W || (W.w = "u" in W ? W.u % 7 : "W" in W ? 1 : 0), be = "Z" in W ? ir(Gt(W.y, 0, 1)).getUTCDay() : or(Gt(W.y, 0, 1)).getDay(), W.m = 0, W.d = "W" in W ? (W.w + 6) % 7 + W.W * 7 - (be + 5) % 7 : W.w + W.U * 7 - (be + 6) % 7);
      return "Z" in W ? (W.H += W.Z / 100 | 0, W.M += W.Z % 100, ir(W)) : or(W);
    };
  }
  function M(U, ae, pe, W) {
    for (var je = 0, fe = ae.length, be = pe.length, he, xe; je < fe; ) {
      if (W >= be) return -1;
      if (he = ae.charCodeAt(je++), he === 37) {
        if (he = ae.charAt(je++), xe = E[he in ya ? ae.charAt(je++) : he], !xe || (W = xe(U, pe, W)) < 0) return -1;
      } else if (he != pe.charCodeAt(W++))
        return -1;
    }
    return W;
  }
  function D(U, ae, pe) {
    var W = c.exec(ae.slice(pe));
    return W ? (U.p = u.get(W[0].toLowerCase()), pe + W[0].length) : -1;
  }
  function x(U, ae, pe) {
    var W = p.exec(ae.slice(pe));
    return W ? (U.w = C.get(W[0].toLowerCase()), pe + W[0].length) : -1;
  }
  function R(U, ae, pe) {
    var W = f.exec(ae.slice(pe));
    return W ? (U.w = m.get(W[0].toLowerCase()), pe + W[0].length) : -1;
  }
  function J(U, ae, pe) {
    var W = V.exec(ae.slice(pe));
    return W ? (U.m = L.get(W[0].toLowerCase()), pe + W[0].length) : -1;
  }
  function de(U, ae, pe) {
    var W = g.exec(ae.slice(pe));
    return W ? (U.m = w.get(W[0].toLowerCase()), pe + W[0].length) : -1;
  }
  function q(U, ae, pe) {
    return M(U, t, ae, pe);
  }
  function I(U, ae, pe) {
    return M(U, r, ae, pe);
  }
  function y(U, ae, pe) {
    return M(U, a, ae, pe);
  }
  function N(U) {
    return i[U.getDay()];
  }
  function ue(U) {
    return s[U.getDay()];
  }
  function z(U) {
    return d[U.getMonth()];
  }
  function j(U) {
    return l[U.getMonth()];
  }
  function re(U) {
    return o[+(U.getHours() >= 12)];
  }
  function $(U) {
    return 1 + ~~(U.getMonth() / 3);
  }
  function te(U) {
    return i[U.getUTCDay()];
  }
  function A(U) {
    return s[U.getUTCDay()];
  }
  function oe(U) {
    return d[U.getUTCMonth()];
  }
  function X(U) {
    return l[U.getUTCMonth()];
  }
  function G(U) {
    return o[+(U.getUTCHours() >= 12)];
  }
  function Y(U) {
    return 1 + ~~(U.getUTCMonth() / 3);
  }
  return {
    format: function(U) {
      var ae = _(U += "", k);
      return ae.toString = function() {
        return U;
      }, ae;
    },
    parse: function(U) {
      var ae = H(U += "", !1);
      return ae.toString = function() {
        return U;
      }, ae;
    },
    utcFormat: function(U) {
      var ae = _(U += "", v);
      return ae.toString = function() {
        return U;
      }, ae;
    },
    utcParse: function(U) {
      var ae = H(U += "", !0);
      return ae.toString = function() {
        return U;
      }, ae;
    }
  };
}
var ya = { "-": "", _: " ", 0: "0" }, Oe = /^\s*\d+/, Ki = /^%/, Zi = /[\\^$*+?|[\]().{}]/g;
function De(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Ji(e) {
  return e.replace(Zi, "\\$&");
}
function Vt(e) {
  return new RegExp("^(?:" + e.map(Ji).join("|") + ")", "i");
}
function Yt(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Xi(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Qi(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function el(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function tl(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function nl(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function va(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function _a(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function rl(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function al(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function sl(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function ka(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function ol(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function wa(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function il(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function ll(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function cl(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function dl(e, t, r) {
  var a = Oe.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function ul(e, t, r) {
  var a = Ki.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function hl(e, t, r) {
  var a = Oe.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function fl(e, t, r) {
  var a = Oe.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Sa(e, t) {
  return De(e.getDate(), t, 2);
}
function ml(e, t) {
  return De(e.getHours(), t, 2);
}
function pl(e, t) {
  return De(e.getHours() % 12 || 12, t, 2);
}
function gl(e, t) {
  return De(1 + en.count(yt(e), e), t, 3);
}
function ts(e, t) {
  return De(e.getMilliseconds(), t, 3);
}
function bl(e, t) {
  return ts(e, t) + "000";
}
function xl(e, t) {
  return De(e.getMonth() + 1, t, 2);
}
function yl(e, t) {
  return De(e.getMinutes(), t, 2);
}
function vl(e, t) {
  return De(e.getSeconds(), t, 2);
}
function _l(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function kl(e, t) {
  return De(On.count(yt(e) - 1, e), t, 2);
}
function ns(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? At(e) : At.ceil(e);
}
function wl(e, t) {
  return e = ns(e), De(At.count(yt(e), e) + (yt(e).getDay() === 4), t, 2);
}
function Sl(e) {
  return e.getDay();
}
function Cl(e, t) {
  return De(fn.count(yt(e) - 1, e), t, 2);
}
function jl(e, t) {
  return De(e.getFullYear() % 100, t, 2);
}
function Nl(e, t) {
  return e = ns(e), De(e.getFullYear() % 100, t, 2);
}
function Tl(e, t) {
  return De(e.getFullYear() % 1e4, t, 4);
}
function Dl(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? At(e) : At.ceil(e), De(e.getFullYear() % 1e4, t, 4);
}
function Il(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + De(t / 60 | 0, "0", 2) + De(t % 60, "0", 2);
}
function Ca(e, t) {
  return De(e.getUTCDate(), t, 2);
}
function Rl(e, t) {
  return De(e.getUTCHours(), t, 2);
}
function Fl(e, t) {
  return De(e.getUTCHours() % 12 || 12, t, 2);
}
function Bl(e, t) {
  return De(1 + Kr.count(jt(e), e), t, 3);
}
function rs(e, t) {
  return De(e.getUTCMilliseconds(), t, 3);
}
function Ll(e, t) {
  return rs(e, t) + "000";
}
function El(e, t) {
  return De(e.getUTCMonth() + 1, t, 2);
}
function Al(e, t) {
  return De(e.getUTCMinutes(), t, 2);
}
function Ml(e, t) {
  return De(e.getUTCSeconds(), t, 2);
}
function $l(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Hl(e, t) {
  return De(es.count(jt(e) - 1, e), t, 2);
}
function as(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Mt(e) : Mt.ceil(e);
}
function Pl(e, t) {
  return e = as(e), De(Mt.count(jt(e), e) + (jt(e).getUTCDay() === 4), t, 2);
}
function zl(e) {
  return e.getUTCDay();
}
function Wl(e, t) {
  return De(mn.count(jt(e) - 1, e), t, 2);
}
function Ol(e, t) {
  return De(e.getUTCFullYear() % 100, t, 2);
}
function Ul(e, t) {
  return e = as(e), De(e.getUTCFullYear() % 100, t, 2);
}
function Gl(e, t) {
  return De(e.getUTCFullYear() % 1e4, t, 4);
}
function Vl(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Mt(e) : Mt.ceil(e), De(e.getUTCFullYear() % 1e4, t, 4);
}
function Yl() {
  return "+0000";
}
function ja() {
  return "%";
}
function Na(e) {
  return +e;
}
function Ta(e) {
  return Math.floor(+e / 1e3);
}
var Rt, ss;
ql({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function ql(e) {
  return Rt = qi(e), ss = Rt.format, Rt.parse, Rt.utcFormat, Rt.utcParse, Rt;
}
function Kl(e) {
  return new Date(e);
}
function Zl(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function os(e, t, r, a, o, s, i, l, d, c) {
  var u = Ri(), f = u.invert, m = u.domain, p = c(".%L"), C = c(":%S"), g = c("%I:%M"), w = c("%I %p"), V = c("%a %d"), L = c("%b %d"), k = c("%B"), v = c("%Y");
  function E(_) {
    return (d(_) < _ ? p : l(_) < _ ? C : i(_) < _ ? g : s(_) < _ ? w : a(_) < _ ? o(_) < _ ? V : L : r(_) < _ ? k : v)(_);
  }
  return u.invert = function(_) {
    return new Date(f(_));
  }, u.domain = function(_) {
    return arguments.length ? m(Array.from(_, Zl)) : m().map(Kl);
  }, u.ticks = function(_) {
    var H = m();
    return e(H[0], H[H.length - 1], _ ?? 10);
  }, u.tickFormat = function(_, H) {
    return H == null ? E : c(H);
  }, u.nice = function(_) {
    var H = m();
    return (!_ || typeof _.range != "function") && (_ = t(H[0], H[H.length - 1], _ ?? 10)), _ ? m(Fi(H, _)) : u;
  }, u.copy = function() {
    return Di(u, os(e, t, r, a, o, s, i, l, d, c));
  }, u;
}
function Jl() {
  return Qo.apply(os(Vi, Yi, yt, Zr, On, en, qr, Yr, Lt, ss).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Xl({
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
  const c = Ce(null), [u, f] = we(!1), [m, p] = we(!1), C = t(e.start), g = t(e.end), w = Math.max(g - C, 20), V = () => {
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
  }, L = e.progress ? w * e.progress / 100 : 0, k = () => {
    r?.(e);
  }, v = () => {
    a?.(e);
  }, E = (J) => {
    J.key === "Enter" ? (J.preventDefault(), k()) : J.key === " " && (J.preventDefault(), v());
  }, _ = () => {
    f(!0);
  }, H = () => {
    f(!1);
  }, M = () => {
    p(!0), l?.();
  }, D = () => {
    p(!1);
  }, x = [
    "gantt-task-bar",
    u && "gantt-task-bar--pressed",
    (m || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), R = {
    "--task-left": `${C}px`,
    "--task-width": `${w}px`,
    "--task-color": V(),
    left: `${C}px`,
    width: `${w}px`,
    backgroundColor: V()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: c,
      "data-task-index": s,
      className: x,
      style: R,
      onClick: k,
      onDoubleClick: v,
      onKeyDown: E,
      onMouseDown: _,
      onMouseUp: H,
      onFocus: M,
      onBlur: D,
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
function Ql({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let p = e.getTime(); p <= t.getTime(); p += 864e5)
    a.push(new Date(p));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = we(-1), d = Ce(null), c = (p) => {
    if (p.key === "ArrowLeft") {
      p.preventDefault();
      const C = Math.max(0, i === -1 ? 0 : i - 1);
      l(C), m(C);
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const C = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(C), m(C);
    } else if (p.key === "ArrowDown") {
      p.preventDefault();
      const C = document.querySelector(".gantt-row .timeline-container");
      C && C.focus();
    } else if (p.key === "Home")
      p.preventDefault(), l(0), m(0);
    else if (p.key === "End") {
      p.preventDefault();
      const C = a.length - 1;
      l(C), m(C);
    }
  }, u = (p) => {
    if (p.key === "ArrowDown") {
      p.preventDefault();
      const C = document.querySelector(".gantt-row .resource-label");
      C && C.focus();
    } else if (p.key === "ArrowRight") {
      p.preventDefault();
      const C = d.current;
      C && C.focus();
    }
  }, f = () => {
    i === -1 && (l(0), setTimeout(() => m(0), 0));
  }, m = (p) => {
    const C = d.current?.querySelector(`[data-date-index="${p}"]`);
    C && C.focus();
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
            ref: d,
            className: "header-timeline",
            role: "columnheader",
            "aria-colindex": 2,
            "aria-colspan": r,
            "aria-label": `Timeline from ${e.toLocaleDateString()} to ${t.toLocaleDateString()}. Use arrow keys to navigate between dates`,
            tabIndex: 0,
            onKeyDown: c,
            onFocus: f,
            children: a.map((p, C) => {
              const g = p.getTime() === s.getTime(), w = i === C;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": C,
                  className: `date-column ${g ? "today" : ""} ${w ? "focused" : ""}`,
                  tabIndex: w ? 0 : -1,
                  role: "button",
                  "aria-label": `${p.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${g ? " (Today)" : ""}`,
                  onFocus: () => l(C),
                  onKeyDown: c,
                  children: p.toLocaleDateString("en-GB", {
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
function ec({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, d] = we(!1), [c, u] = we(-1), f = Ce(null);
  Ie(() => {
    l && c >= 0 && t.length > 0 && setTimeout(() => {
      f.current?.querySelector(`[data-task-index="${c}"]`)?.focus();
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
          g.preventDefault(), f.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (g.preventDefault(), d(!0), u(0));
          break;
      }
      return;
    }
    switch (g.key) {
      case "ArrowLeft":
        g.preventDefault();
        const w = Math.max(0, c - 1);
        u(w), f.current?.querySelector(`[data-task-index="${w}"]`)?.focus();
        break;
      case "ArrowRight":
        g.preventDefault();
        const L = Math.min(t.length - 1, c + 1);
        u(L), f.current?.querySelector(`[data-task-index="${L}"]`)?.focus();
        break;
      case "Enter":
        g.preventDefault(), c >= 0 && a?.(t[c]);
        break;
      case " ":
        g.preventDefault(), c >= 0 && o?.(t[c]);
        break;
      case "Escape":
        g.preventDefault(), d(!1), u(-1), f.current?.focus();
        break;
    }
  }, p = (g) => {
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
  }, C = (g) => {
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
            onKeyDown: p,
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
            onKeyDown: m,
            onFocus: () => {
              l || u(-1);
            },
            children: t.map((g, w) => /* @__PURE__ */ n.jsx(
              Xl,
              {
                task: g,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && c === w,
                taskIndex: w,
                tabIndex: l && c === w ? 0 : -1,
                onFocus: () => C(w)
              },
              g.id
            ))
          }
        )
      ]
    }
  );
}
function rm({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = Ce(null), [l, d] = we(800), c = Re(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const g = new Date(r);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : g;
  }, [r]), u = Re(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const g = new Date(a);
    return isNaN(g.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : g;
  }, [a]), f = Re(() => Math.ceil((u.getTime() - c.getTime()) / 864e5) + 1, [c, u]);
  Ie(() => {
    if (!i.current) return;
    const g = new ResizeObserver((w) => {
      const V = w[0];
      V && d(Math.max(V.contentRect.width - 220, 400));
    });
    return g.observe(i.current), () => g.disconnect();
  }, []);
  const m = Re(
    () => Jl().domain([c, u]).range([0, l]),
    [c, u, l]
  ), p = Re(() => {
    const g = /* @__PURE__ */ new Map();
    return t.forEach((w) => {
      const V = g.get(w.resourceId) || [];
      V.push(w), g.set(w.resourceId, V);
    }), g;
  }, [t]), C = (g) => {
    if (g.target === g.currentTarget)
      switch (g.key) {
        case "ArrowDown":
          g.preventDefault();
          const w = i.current?.querySelector(".gantt-row .resource-label");
          w && w.focus();
          break;
        case "Home":
          g.preventDefault();
          const V = i.current?.querySelector(".header-resource");
          V && V.focus();
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
      onKeyDown: C,
      children: [
        /* @__PURE__ */ n.jsx(Ql, { viewStart: c, viewEnd: u, dateCount: f }),
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
            children: e.map((g, w) => /* @__PURE__ */ n.jsx(
              ec,
              {
                resource: g,
                tasks: p.get(g.id) || [],
                scale: m,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: w,
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
const pn = ({
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
) }), tc = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const d = () => t ? Ke.Children.toArray(t).filter(
    (w) => Ke.isValidElement(w) && (w.type === pn || w.type?.displayName === "BreadcrumbItem")
  ).map((w) => ({
    text: typeof w.props.children == "string" ? w.props.children : String(w.props.children),
    href: w.props.href,
    active: w.props.active,
    attributes: w.props.attributes
  })) : [], c = () => t ? d() : o && s ? [{ href: o, text: s }] : e, u = () => {
    const g = c();
    if (g && g.length > 0) {
      const w = g.slice().reverse().find((V) => V.href && !V.active);
      if (w)
        return { href: w.href, text: w.text };
    }
    return { text: "Home" };
  }, f = c(), m = u(), p = ee(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), C = a;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: p,
      "aria-label": C,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Ke.Children.map(t, (g, w) => Ke.isValidElement(g) && (g.type === pn || g.type?.displayName === "BreadcrumbItem") ? Ke.cloneElement(g, { key: w }) : null)
        ) : (
          // Render from items array
          f?.filter((g) => g.active || !!g.href).map((g, w) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: g.active ? /* @__PURE__ */ n.jsx(
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
          ) }, w))
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
}, nc = tc;
nc.Item = pn;
pn.displayName = "BreadcrumbItem";
const is = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = we(!1);
  Ie(() => {
    s(!0);
  }, []), Ie(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const l = (d) => {
      const c = d.target, u = c.getAttribute("href");
      if (u && u.startsWith("#")) {
        const f = document.querySelector(u);
        if (f) {
          f.hasAttribute("tabindex") || f.setAttribute("tabindex", "-1"), f.focus(), f.classList.add("nhsuk-skip-link-focused-element");
          const m = window.setTimeout(() => {
            f.classList.remove("nhsuk-skip-link-focused-element"), f.getAttribute("tabindex") === "-1" && f.removeAttribute("tabindex");
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
            const u = c.__nhsSkipLinkTimeout;
            u && window.clearTimeout && window.clearTimeout(u);
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
  const i = ee("nhsuk-skip-link", r);
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
}, am = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = ee("nhsuk-pagination", o);
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
}, sm = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = ee("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, ls = Ke.forwardRef(({
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
  ...u
}, f) => {
  const m = [
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
  ].filter(Boolean).join(" "), C = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), g = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const L = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      bt,
      {
        level: a,
        className: C,
        children: L()
      }
    );
  }, w = () => u.children ? u.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, V = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
      ...u,
      className: m,
      ref: f,
      children: [
        d && /* @__PURE__ */ n.jsx(
          "img",
          {
            className: "nhsuk-card__img",
            src: d,
            alt: c || ""
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: p, children: [
          g(),
          w(),
          V()
        ] })
      ]
    }
  );
});
ls.displayName = "Card";
const om = ({
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
}, im = ({
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
}, lm = ({
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
  id: u,
  "aria-label": f,
  "aria-labelledby": m,
  "aria-describedby": p
}) => {
  const C = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), g = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), w = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const L = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], k = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        L,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      bt,
      {
        level: a,
        className: g,
        children: k
      }
    );
  }, V = () => d || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: C,
      "data-testid": c,
      id: u,
      "aria-label": f,
      "aria-labelledby": m,
      "aria-describedby": p,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          w(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: V() })
      ]
    }
  );
}, rc = ({
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
  const c = ee(
    "nhsuk-panel",
    t
  ), u = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    bt,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    bt,
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
  return /* @__PURE__ */ n.jsxs("div", { className: c, id: e, ...d, children: [
    u(),
    f()
  ] });
}, cm = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = ee("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, dm = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = ee(
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
}, um = ({
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
  tableClasses: u,
  classes: f,
  attributes: m,
  "data-testid": p
}) => {
  const C = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), g = ee(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    u
  ), w = ee(f), V = (v, E) => {
    const _ = ee("nhsuk-table__header", {
      [`nhsuk-table__header--${v.format}`]: v.format
    }, v.classes), H = {
      scope: "col",
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...s && { role: "columnheader" },
      ...v.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: _, ...H, children: v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text }, E);
  }, L = (v, E, _) => {
    const H = o && _, M = ee(
      H ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${H ? "header" : "cell"}--${v.format}`]: v.format
      },
      v.classes
    ), D = {
      ...H && { scope: "row" },
      ...v.colspan && { colSpan: v.colspan },
      ...v.rowspan && { rowSpan: v.rowspan },
      ...s && {
        role: H ? "rowheader" : "cell",
        ...v.header && { "data-label": v.header }
      },
      ...v.attributes
    }, x = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && v.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        v.header,
        " "
      ] }),
      v.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text
    ] }), R = H ? "th" : "td";
    return /* @__PURE__ */ n.jsx(R, { className: M, ...D, children: x }, E);
  }, k = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: g,
      ...s && { role: "table" },
      ...m,
      ...p && { "data-testid": p },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: C, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((v, E) => V(v, E)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((v, E) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: v.map(
              (_, H) => L(_, H, H === 0)
            )
          },
          E
        )) })
      ]
    }
  );
  return d ? /* @__PURE__ */ n.jsxs(rc, { className: c, children: [
    i && /* @__PURE__ */ n.jsx(bt, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    k()
  ] }) : w ? /* @__PURE__ */ n.jsx("div", { className: w, children: k() }) : k();
}, hm = $t(({
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
  "data-testid": u,
  ...f
}, m) => {
  const p = r !== void 0, [C, g] = we(() => t || e[0]?.id || ""), w = p ? r : C, V = Ce(null), L = Ce(/* @__PURE__ */ new Map()), k = ne((x) => {
    p || g(x), a?.(x);
  }, [p, a]), v = ne((x) => {
    o?.(x), l && k(x);
  }, [o, l, k]), E = ne((x, R) => {
    const J = e.filter((I) => !I.disabled).map((I) => I.id), de = J.indexOf(R);
    let q = null;
    switch (x.key) {
      case "ArrowLeft":
        q = de > 0 ? de - 1 : J.length - 1;
        break;
      case "ArrowRight":
        q = de < J.length - 1 ? de + 1 : 0;
        break;
      case "Home":
        q = 0;
        break;
      case "End":
        q = J.length - 1;
        break;
      case "Escape":
        x.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (q !== null) {
      x.preventDefault();
      const I = J[q], y = L.current.get(I);
      y && (y.focus(), v(I));
    }
  }, [e, v, i]), _ = ne((x, R) => {
    R ? L.current.set(x, R) : L.current.delete(x);
  }, []), H = ne((x) => {
    const R = L.current.get(x);
    R && R.focus();
  }, []);
  Pa(m, () => ({
    focusTab: H,
    getActiveTab: () => w,
    getTabListElement: () => V.current
  }), [H, w]);
  const M = ne((x) => {
    const R = x.relatedTarget;
    V.current?.contains(R) || s?.();
  }, [s]), D = ee("nhsuk-tabs", d);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: D,
      id: c,
      "data-testid": u,
      ...f,
      children: [
        /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: V,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: M,
                children: e.map((x) => {
                  const R = x.id === w, J = x.disabled, de = ee("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": R,
                    "nhsuk-tabs__list-item--disabled": J
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: de, role: "presentation", children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (q) => _(x.id, q),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": R,
                      "aria-controls": `${x.id}-panel`,
                      id: `${x.id}-tab`,
                      tabIndex: R ? 0 : -1,
                      disabled: J,
                      onClick: () => !J && k(x.id),
                      onKeyDown: (q) => !J && E(q, x.id),
                      onFocus: () => !J && v(x.id),
                      ...x.attributes,
                      children: x.label
                    }
                  ) }, x.id);
                })
              }
            )
          }
        ),
        e.map((x) => {
          const R = x.id === w;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${x.id}-tab`,
              id: `${x.id}-panel`,
              hidden: !R,
              children: x.content
            },
            x.id
          );
        })
      ]
    }
  );
}), ac = $t(
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
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (m = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", tabIndex: 0, children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
ac.displayName = "Details";
const sc = $t(
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
    ), f = (p) => t === "cross" && !a ? `do not ${p}` : p, m = () => /* @__PURE__ */ n.jsx(
      bt,
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
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: c.join(" "), role: "list", children: r.map((p, C) => /* @__PURE__ */ n.jsxs("li", { children: [
            u(),
            f(p.item)
          ] }, C)) }) })
        ]
      }
    );
  }
);
sc.displayName = "DoDontList";
const oc = $t(
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
    let m;
    return l ? m = l : a ? m = /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: a } }) : r && (m = r), /* @__PURE__ */ n.jsxs(
      "details",
      {
        ref: c,
        id: i,
        className: u,
        open: o,
        ...d,
        children: [
          /* @__PURE__ */ n.jsx("summary", { className: "nhsuk-details__summary", children: f }),
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-details__text", children: m })
        ]
      }
    );
  }
);
oc.displayName = "Expander";
const ic = $t(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, d) => {
      const c = d + 1, u = `${t}-${c}-hint`, f = `${t}-${c}-status`, m = !!l.href, p = [
        "nhsuk-task-list__item",
        m && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), C = [
        l.hint && u,
        f
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        lc,
        {
          item: l,
          itemClasses: p,
          hasLink: m,
          hintId: u,
          statusId: f,
          ariaDescribedBy: C
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
), lc = ({
  item: e,
  itemClasses: t,
  hasLink: r,
  hintId: a,
  statusId: o,
  ariaDescribedBy: s
}) => {
  const i = () => {
    const c = e.title.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.title.html } }) : e.title.text, u = [
      r ? "nhsuk-task-list__link" : "",
      e.title.classes
    ].filter(Boolean).join(" ");
    return r ? /* @__PURE__ */ n.jsx(
      "a",
      {
        className: u,
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
    let u;
    return e.status.tag ? u = /* @__PURE__ */ n.jsx(rt, { ...e.status.tag }) : e.status.html ? u = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : u = e.status.text, /* @__PURE__ */ n.jsx("div", { className: c, id: o, children: u });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    d()
  ] });
};
ic.displayName = "TaskList";
const fm = ({
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
  ].filter(Boolean).join(" "), u = `h${t}`;
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: c,
      ...i,
      children: [
        Ha(
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
        d()
      ]
    }
  );
}, mm = ({
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
}, cc = ({
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
    /* @__PURE__ */ n.jsx(Ge, { variant: "secondary", size: "small", onClick: t, "aria-label": "Previous date range", children: "Prev" }),
    /* @__PURE__ */ n.jsx(Ge, { variant: "secondary", size: "small", onClick: a, "aria-label": "Jump to today", children: "Today" }),
    /* @__PURE__ */ n.jsx(Ge, { variant: "secondary", size: "small", onClick: r, "aria-label": "Next date range", children: "Next" }),
    /* @__PURE__ */ n.jsxs("span", { className: "nhs-slot-matrix__toolbar-daterange", "aria-live": "polite", children: [
      e.start.toDateString(),
      " – ",
      e.end.toDateString()
    ] })
  ] }),
  /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix__toolbar-section", children: [
    /* @__PURE__ */ n.jsx("label", { className: "nhs-slot-matrix__toolbar-label", htmlFor: "slot-matrix-density-select", children: "Density" }),
    /* @__PURE__ */ n.jsx(
      ln,
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
      ln,
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
] }), dc = ({ items: e, orientation: t = "horizontal" }) => /* @__PURE__ */ n.jsx("div", { className: `nhs-slot-matrix__legend nhs-slot-matrix__legend--${t}`, role: "list", "aria-label": "Slot legend", children: e.map((r) => /* @__PURE__ */ n.jsx("div", { role: "listitem", className: "nhs-slot-matrix__legend-item", children: /* @__PURE__ */ n.jsx(rt, { color: uc(r.status), text: r.label }) }, r.status)) });
function uc(e) {
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
const pm = ({
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
  toolbar: u,
  enableDefaultToolbar: f = !0,
  legendItems: m,
  enableDefaultLegend: p = !0,
  legendPlacement: C = "bottom",
  onA11yModeChange: g
}) => {
  const [w, V] = we("grid"), L = i || w, [k, v] = we(a || []), E = r ?? k, _ = Re(() => {
    const q = /* @__PURE__ */ new Set();
    return e.forEach((I) => q.add(new Date(I.start).getTime())), Array.from(q).sort((I, y) => I - y);
  }, [e]), H = Re(() => {
    const q = {};
    return e.forEach((I) => {
      const y = new Date(I.start).getTime();
      q[y] || (q[y] = {});
      const N = I.capacity - I.booked - (I.held || 0);
      q[y][I.sessionId] = { slot: I, remaining: N };
    }), q;
  }, [e]), M = ne((q) => {
    if (s === "single") {
      const I = [q.id];
      r || v(I), o?.(I, { lastAction: "select" });
    } else {
      const I = E.includes(q.id), y = I ? E.filter((N) => N !== q.id) : [...E, q.id];
      r || v(y), o?.(y, { lastAction: I ? "deselect" : "select" });
    }
  }, [s, E, r, o]), D = Re(() => m || (p ? Array.from(new Set(e.map((I) => I.status))).map((I) => ({
    status: I,
    label: I.charAt(0).toUpperCase() + I.slice(1)
  })) : void 0), [m, p, e]), x = D ? /* @__PURE__ */ n.jsx(
    dc,
    {
      items: D,
      orientation: C === "left" || C === "right" ? "vertical" : "horizontal"
    }
  ) : null, R = (q) => {
    i || V(q), g?.(q);
  }, J = u || (f ? /* @__PURE__ */ n.jsx(
    cc,
    {
      dateRange: { start: /* @__PURE__ */ new Date(), end: /* @__PURE__ */ new Date() },
      density: "comfortable",
      a11yMode: L,
      onA11yModeChange: R
    }
  ) : null), de = /* @__PURE__ */ n.jsx("div", { style: d, className: ee(l), children: /* @__PURE__ */ n.jsx(dr, { className: ee("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Ct, { children: /* @__PURE__ */ n.jsx(Kt, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    J,
    C === "top" && x,
    /* @__PURE__ */ n.jsx("ul", { "aria-label": "Appointment slots list", children: e.map((q) => /* @__PURE__ */ n.jsx("li", { children: /* @__PURE__ */ n.jsxs("button", { type: "button", onClick: () => M(q), "aria-pressed": E.includes(q.id), children: [
      qt(new Date(q.start)),
      " – ",
      qt(new Date(q.end)),
      " (",
      q.status,
      ")"
    ] }) }, q.id)) }),
    C === "bottom" && x
  ] }) }) }) }) });
  return L === "list" ? de : /* @__PURE__ */ n.jsx("div", { style: d, className: ee(l), children: /* @__PURE__ */ n.jsx(dr, { className: ee("nhs-slot-matrix-grid-wrapper"), children: /* @__PURE__ */ n.jsx(Ct, { children: /* @__PURE__ */ n.jsx(Kt, { width: "full", children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-slot-matrix", children: [
    J,
    C === "top" && x,
    /* @__PURE__ */ n.jsxs("div", { role: "grid", "aria-rowcount": _.length + 1, "aria-colcount": t.length + 1, children: [
      /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": "Timebands", className: "nhs-slot-matrix__timeband-header" }),
        t.map((q) => /* @__PURE__ */ n.jsx("div", { role: "columnheader", "aria-label": `Session ${q.specialty}`, className: "nhs-slot-matrix__session-header", children: q.specialty }, q.id))
      ] }),
      _.map((q) => /* @__PURE__ */ n.jsxs("div", { role: "row", className: "nhs-slot-matrix__row", children: [
        /* @__PURE__ */ n.jsx("div", { role: "rowheader", className: "nhs-slot-matrix__timeband-header", "aria-label": qt(new Date(q)), children: qt(new Date(q)) }),
        t.map((I) => {
          const y = H[q]?.[I.id];
          if (!y)
            return /* @__PURE__ */ n.jsx("div", { role: "gridcell", className: "nhs-slot-matrix__cell", "aria-disabled": "true" }, I.id);
          const { slot: N, remaining: ue } = y, z = E.includes(N.id), j = c ? c(N) : `Slot ${qt(new Date(N.start))} ${N.status}${ue === 0 ? " full" : ""}`;
          return /* @__PURE__ */ n.jsx(
            "button",
            {
              type: "button",
              role: "gridcell",
              "data-status": N.status,
              className: ee("nhs-slot-matrix__cell", z && "nhs-slot-matrix__cell--selected"),
              "aria-label": j,
              "aria-selected": z || void 0,
              onClick: () => M(N),
              children: ue > 0 ? `${ue} left` : "Full"
            },
            N.id
          );
        })
      ] }, q))
    ] }),
    C === "bottom" && x
  ] }) }) }) }) });
};
function Da(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
function qt(e) {
  return `${Da(e.getHours())}:${Da(e.getMinutes())}`;
}
const hc = ({
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
    /* @__PURE__ */ n.jsx(bt, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, gm = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(dr, { children: /* @__PURE__ */ n.jsx(Ct, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    Kt,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      "data-card-index": s,
      children: /* @__PURE__ */ n.jsx(hc, { ...o })
    },
    s
  )) }) }) });
}, fc = Ke.forwardRef(
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
    ariaDescribedby: u,
    className: f,
    tableClassName: m,
    bordered: p = !1,
    striped: C = !1,
    responsive: g = !1,
    tableType: w = "default"
  }, V) => {
    const L = Ce(null), k = Ce(null), v = Ce(null);
    Ke.useImperativeHandle(V, () => L.current, []);
    const [E, _] = we(0), [H, M] = we(0), [D, x] = we("headers"), [R, J] = we("browse"), de = t.length, q = e.length, I = Re(() => !r || r.length === 0 ? e : [...e].sort(($, te) => {
      for (const { key: A, direction: oe } of r) {
        const X = $[A], G = te[A];
        if (X == null && G == null) continue;
        if (X == null) return 1;
        if (G == null) return -1;
        let Y = 0;
        if (typeof X == "number" && typeof G == "number" ? Y = X - G : Y = String(X).localeCompare(String(G)), Y !== 0)
          return oe === "asc" ? Y : -Y;
      }
      return 0;
    }), [e, r]), y = ne(($, te) => {
      setTimeout(() => {
        const A = L.current?.querySelector(
          `tbody tr:nth-child(${$ + 1}) td:nth-child(${te + 1})`
        );
        A && (A.focus(), typeof A.scrollIntoView == "function" && A.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), N = ne(($) => {
      setTimeout(() => {
        const te = L.current?.querySelector(`th:nth-child(${$ + 1})`);
        te && (te.focus(), typeof te.scrollIntoView == "function" && te.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ue = ne(($) => {
      a?.($);
    }, [a]), z = ne(($) => {
      s?.($);
    }, [s]), j = ne(($) => {
      const { key: te } = $;
      switch (te) {
        case "Enter":
          if ($.preventDefault(), D === "headers" && R === "browse")
            J("navigate"), N(H);
          else if (D === "headers" && R === "navigate") {
            const A = t[H];
            A && ue(A.key);
          } else D === "cells" && R === "browse" ? (J("navigate"), y(E, H)) : D === "cells" && R === "navigate" && z(E);
          break;
        case "Escape":
          $.preventDefault(), (D === "headers" && R === "navigate" || D === "cells" && R === "navigate") && J("browse");
          break;
        case "ArrowLeft":
          if ($.preventDefault(), R === "navigate" || R === "browse" && D === "headers") {
            if (D === "headers") {
              const A = Math.max(0, H - 1);
              M(A), N(A);
            } else if (D === "cells") {
              const A = Math.max(0, H - 1);
              M(A), y(E, A);
            }
          }
          break;
        case "ArrowRight":
          if ($.preventDefault(), R === "navigate" || R === "browse" && D === "headers") {
            if (D === "headers") {
              const A = Math.min(de - 1, H + 1);
              M(A), N(A);
            } else if (D === "cells") {
              const A = Math.min(de - 1, H + 1);
              M(A), y(E, A);
            }
          }
          break;
        case "ArrowUp":
          if ($.preventDefault(), D === "cells") {
            if (R === "browse") {
              const A = Math.max(0, E - 1);
              _(A), y(A, 0), M(0);
            } else if (R === "navigate")
              if (E > 0) {
                const A = E - 1;
                _(A), y(A, H);
              } else
                x("headers"), J("browse"), N(H);
          }
          break;
        case "ArrowDown":
          if ($.preventDefault(), D === "headers" && R === "browse")
            x("cells"), _(0), M(0), y(0, 0);
          else if (D === "cells") {
            const A = q - 1;
            if (R === "browse") {
              const oe = Math.min(A, E + 1);
              _(oe), y(oe, 0), M(0);
            } else if (R === "navigate" && E < A) {
              const oe = E + 1;
              _(oe), y(oe, H);
            }
          }
          break;
        case "Home":
          $.preventDefault(), D === "headers" ? (M(0), N(0)) : D === "cells" && ($.ctrlKey ? (_(0), M(0), y(0, 0)) : (M(0), y(E, 0)));
          break;
        case "End":
          if ($.preventDefault(), D === "headers") {
            const A = de - 1;
            M(A), N(A);
          } else if (D === "cells")
            if ($.ctrlKey) {
              const A = q - 1, oe = de - 1;
              _(A), M(oe), y(A, oe);
            } else {
              const A = de - 1;
              M(A), y(E, A);
            }
          break;
        case " ":
          if ($.preventDefault(), D === "headers" && R === "navigate") {
            const A = t[H];
            A && ue(A.key);
          } else D === "cells" && R === "navigate" && z(E);
          break;
      }
    }, [
      D,
      R,
      H,
      E,
      de,
      q,
      t,
      y,
      N,
      ue,
      z
    ]);
    Ie(() => {
      const $ = L.current;
      if ($)
        return $.addEventListener("keydown", j), () => $.removeEventListener("keydown", j);
    }, [j]);
    const re = ee(
      "nhsuk-table",
      m,
      {
        "nhsuk-table--responsive": g,
        "nhsuk-table--bordered": p,
        "nhsuk-table--striped": C,
        "nhsuk-table--compact": w === "compact"
      },
      f
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: L,
        className: re,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": d,
        "aria-labelledby": c,
        "aria-describedby": u,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: k, role: "row", children: t.map(($, te) => {
            const A = r?.find((G) => G.key === $.key), oe = !!A, X = D === "headers" && H === te;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: ee("sortable-header", {
                  "sortable-header--focused": X
                }),
                role: "columnheader",
                tabIndex: X ? 0 : -1,
                onClick: () => ue($.key),
                onKeyDown: (G) => {
                  (G.key === "Enter" || G.key === " ") && (G.preventDefault(), ue($.key));
                },
                "aria-sort": oe ? A?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: $.label }),
                  oe && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((G) => G.key === $.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: A?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              $.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: v, className: "nhsuk-table__body", role: "rowgroup", children: I.map(($, te) => {
            const A = o === te, oe = D === "cells" && E === te;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: ee("data-row", {
                  "data-row--selected": A,
                  "data-row--focused": oe
                }),
                "aria-selected": A,
                children: t.map((X, G) => {
                  const Y = X.tableRenderer ? X.tableRenderer($) : X.render ? X.render($) : $[X.key], U = D === "cells" && E === te && H === G, ae = () => typeof Y == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: Y ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: Y ? "Yes" : "No" })
                  ] }) : String(Y ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: ee("data-cell", {
                        "data-cell--focused": U
                      }),
                      tabIndex: U ? 0 : -1,
                      onClick: () => z(te),
                      children: ae()
                    },
                    X.key
                  );
                })
              },
              te
            );
          }) })
        ]
      }
    );
  }
);
fc.displayName = "AriaDataGrid";
const cs = ({
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
  ariaDescribedBy: u
}) => {
  const f = Ce(null), m = Ce(null), p = Ce(null), C = ne((D, x) => {
    d || (m.current = x, D.dataTransfer.effectAllowed = "move", D.dataTransfer.setData("text/plain", x));
  }, [d]), g = ne((D, x) => {
    d || m.current === x || (D.preventDefault(), D.dataTransfer.dropEffect = "move", p.current = x);
  }, [d]), w = ne((D, x) => {
    if (d) return;
    D.preventDefault();
    const R = m.current;
    if (!R || R === x) return;
    const J = e.findIndex((q) => q.key === R), de = e.findIndex((q) => q.key === x);
    if (J !== -1 && de !== -1) {
      const q = [...e], [I] = q.splice(J, 1);
      q.splice(de, 0, I), r(q);
    }
    m.current = null, p.current = null;
  }, [d, e, r]), V = ne(() => {
    m.current = null, p.current = null;
  }, []), L = ne((D) => {
    const x = t.find((R) => R.key === D);
    return x ? x.label : D;
  }, [t]), k = ne((D) => ["red", "orange", "blue", "aqua-green", "grey"][D] || "grey", []), v = ne((D) => {
    if (d) return;
    const x = e.map(
      (R) => R.key === D ? { ...R, direction: R.direction === "asc" ? "desc" : "asc" } : R
    );
    r(x);
  }, [e, r, d]), E = ne((D) => {
    if (d) return;
    const x = e.filter((R) => R.key !== D);
    r(x);
  }, [e, r, d]), _ = ne(() => {
    d || r([]);
  }, [r, d]), H = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const D = e.map((x, R) => {
      const J = x.direction === "asc" ? "ascending" : "descending";
      return `${R + 1}. ${L(x.key)} (${J})`;
    });
    if (D.length === 1)
      return `Sorted by: ${D[0]}`;
    if (D.length === 2)
      return `Sorted by: ${D.join(" and ")}`;
    {
      const x = D.pop();
      return `Sorted by: ${D.join(", ")}, and ${x}`;
    }
  }, M = Re(() => {
    const D = ["sort-description"];
    return l && D.push("sort-help"), u && D.push(u), D.join(" ");
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
        children: H()
      }
    ),
    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-container", children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: f,
          className: "sort-status-control__tags",
          role: "list",
          "aria-label": c,
          "aria-describedby": M,
          children: e.map((D, x) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !d,
              onDragStart: (R) => C(R, D.key),
              onDragOver: (R) => g(R, D.key),
              onDrop: (R) => w(R, D.key),
              onDragEnd: V,
              onClick: () => v(D.key),
              style: { cursor: d ? "default" : "pointer" },
              title: d ? "" : `Click to toggle sort direction. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": D.key,
              children: /* @__PURE__ */ n.jsx(
                rt,
                {
                  color: k(x),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => E(D.key),
                  disabled: d,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${x + 1}`, children: x + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: L(D.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (R) => {
                          R.stopPropagation(), v(D.key);
                        },
                        disabled: d,
                        "aria-label": `Toggle sort direction for ${L(D.key)}. Currently ${D.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: /* @__PURE__ */ n.jsx("span", { className: `sort-status-control__direction-icon sort-status-control__direction-icon--${D.direction}`, children: /* @__PURE__ */ n.jsx(
                          "svg",
                          {
                            className: `nhsuk-icon sort-status-control__chevron sort-status-control__chevron--${D.direction}`,
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
            D.key
          ))
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
        Ge,
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
    l && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsx("small", { children: "Drag tags to reorder priority. Click tags or ↑/↓ buttons to toggle ascending/descending. Click × to remove a sort." }) })
  ] });
};
function mc(e, t) {
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
const mr = $t(function(t, r) {
  const {
    dataConfig: a = {},
    tabPanels: o,
    selectedIndex: s,
    onTabChange: i,
    onGlobalRowSelectionChange: l,
    ariaLabel: d,
    ariaDescription: c,
    className: u = "",
    disabled: f = !1,
    orientation: m = "horizontal",
    id: p,
    isLoading: C = !1,
    loadingComponent: g,
    error: w = null,
    errorComponent: V,
    "data-testid": L,
    actions: k,
    actionsMinGap: v = 16,
    forceActionsAbove: E = !1
  } = t, H = Ce(
    p || `aria-tabs-datagrid-${Math.random().toString(36).slice(2, 9)}`
  ).current, M = typeof c == "string" && c.trim() !== "" && !/\s/.test(c), D = `${H}-description`, x = `${H}-navigation-help`, {
    dataComparator: R = (h, S) => JSON.stringify(h) === JSON.stringify(S),
    filterFunction: J = (h) => h,
    booleanRenderer: de = (h) => h ? "✓" : "✗"
  } = a || {}, q = s !== void 0, I = s ?? 0, [y, N] = we({
    focusArea: "tabs",
    focusedTabIndex: I,
    focusedHeaderIndex: 0,
    focusedRowIndex: 0,
    focusedColumnIndex: 0,
    focusedActionIndex: 0,
    isGridActive: !1
  }), ue = Re(() => ({
    selectedIndex: I,
    tabLoadingStates: new Array(o.length).fill(!1),
    tabErrors: new Array(o.length).fill(null),
    sortConfig: [],
    // Start with empty sort config
    selectedRows: new Array(o.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [I]), [z, j] = za(mc, ue);
  Ie(() => {
    const h = z.tabLoadingStates.length, S = o.length;
    h !== S && j({ type: "ADJUST_ARRAYS", payload: { newLength: S } });
  }, [o.length]), Ie(() => {
    q && j({ type: "SET_SELECTED_INDEX", payload: I });
  }, [I, q]), Ie(() => {
    N((h) => ({
      ...h,
      focusArea: "tabs",
      focusedTabIndex: z.selectedIndex,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      focusedActionIndex: 0,
      isGridActive: !1
    }));
  }, [z.selectedIndex]), Ie(() => {
    l && l(z.globalSelectedRowData);
  }, [z.globalSelectedRowData, l]);
  const re = ne(
    (h, S) => R(h, S),
    [R]
  ), $ = ne(
    (h) => {
      h >= 0 && h < o.length && !o[h].disabled && (j({ type: "SET_SELECTED_INDEX", payload: h }), N((S) => ({
        ...S,
        focusedTabIndex: h,
        focusArea: "tabs"
      })), i?.(h));
    },
    [o, i]
  ), te = Ce(!1), A = ne(
    (h, S) => {
      if (!S?.force && !te.current && h === 0) {
        te.current = !0;
        return;
      }
      te.current = !0, setTimeout(() => {
        const O = oe.current[h], P = O?.parentElement;
        if (O && P) {
          const B = O.offsetLeft, Q = O.offsetWidth, ve = P.clientWidth, ge = B - ve / 2 + Q / 2;
          try {
            P.scrollTo({
              left: Math.max(0, ge),
              behavior: "smooth"
            });
          } catch {
            O.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            });
          }
        } else process.env.SILENCE_SCROLL_DEBUG || console.debug("[AriaTabsDataGrid] Missing elements for scroll", {
          tabElementExists: !!O,
          tabListElementExists: !!P
        });
      }, 50);
    },
    []
  ), oe = Ce([]), X = Ce([]), G = ne(
    (h, S) => {
      const O = z.sortConfig || [], P = O.find(
        (ve) => ve.key === S
      );
      let B;
      P ? P.direction === "asc" ? B = O.map(
        (ve) => ve.key === S ? { ...ve, direction: "desc" } : ve
      ) : B = O.filter(
        (ve) => ve.key !== S
      ) : B = [...O, { key: S, direction: "asc" }], j({
        type: "SET_SORT",
        payload: B
      }), o[h].onSort?.(S);
    },
    [z.sortConfig, o]
  ), Y = ne(
    (h) => {
      setTimeout(() => {
        const S = document.querySelector(
          `[data-tab-panel="${z.selectedIndex}"] th:nth-child(${h + 1})`
        );
        S && S.focus();
      }, 0);
    },
    [z.selectedIndex]
  ), U = ne(
    (h) => de(h),
    [de]
  ), ae = ne(
    (h, S) => {
      setTimeout(() => {
        const O = document.querySelector(
          `[data-tab-panel="${z.selectedIndex}"] tbody tr:nth-child(${h + 1}) td:nth-child(${S + 1})`
        );
        O && O.focus();
      }, 0);
    },
    [z.selectedIndex]
  );
  Ie(() => {
    y.isGridActive && (y.focusArea === "headers" ? setTimeout(() => {
      Y(y.focusedHeaderIndex);
    }, 0) : y.focusArea === "cells" && setTimeout(() => {
      ae(
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
    Y,
    ae
  ]), Ie(() => {
    A(z.selectedIndex);
  }, [z.selectedIndex, A]);
  const pe = ne(
    (h, S) => {
      const { key: O } = h, P = o[z.selectedIndex], B = P?.columns.length || 0;
      switch (O) {
        case "ArrowLeft":
          h.preventDefault();
          const Q = Math.max(0, S - 1);
          N((ke) => ({
            ...ke,
            focusedHeaderIndex: Q
          })), Y(Q);
          break;
        case "ArrowRight":
          h.preventDefault();
          const ve = Math.min(B - 1, S + 1);
          N((ke) => ({
            ...ke,
            focusedHeaderIndex: ve
          })), Y(ve);
          break;
        case "ArrowUp":
          h.preventDefault(), N((ke) => ({
            ...ke,
            focusArea: "tabs",
            focusedTabIndex: z.selectedIndex
          })), A(z.selectedIndex), oe.current[z.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          h.preventDefault(), N((ke) => ({
            ...ke,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: S,
            isGridActive: !0
          }));
          break;
        case "Home":
          h.preventDefault(), N((ke) => ({ ...ke, focusedHeaderIndex: 0 })), Y(0);
          break;
        case "End":
          h.preventDefault();
          const ge = B - 1;
          N((ke) => ({
            ...ke,
            focusedHeaderIndex: ge
          })), Y(ge);
          break;
        case "Enter":
        case " ":
          h.preventDefault();
          const ye = P?.columns[S]?.key;
          ye && G(z.selectedIndex, ye);
          break;
      }
    },
    [
      o,
      z.selectedIndex,
      G,
      N,
      Y,
      ae,
      oe
    ]
  ), W = ne(
    (h, S, O) => {
      const { key: P } = h, B = o[z.selectedIndex], Q = B?.data.length || 0, ve = B?.columns.length || 0;
      switch (P) {
        case "ArrowUp":
          if (h.preventDefault(), S === 0)
            N((ie) => ({
              ...ie,
              focusArea: "headers",
              focusedHeaderIndex: O,
              isGridActive: !1
            })), Y(O);
          else {
            const ie = S - 1;
            N((Se) => ({
              ...Se,
              focusedRowIndex: ie
            })), ae(ie, O);
          }
          break;
        case "ArrowDown":
          h.preventDefault();
          const ge = Math.min(Q - 1, S + 1);
          N((ie) => ({
            ...ie,
            focusedRowIndex: ge
          })), ae(ge, O);
          break;
        case "ArrowLeft":
          h.preventDefault();
          const ye = Math.max(0, O - 1);
          N((ie) => ({
            ...ie,
            focusedColumnIndex: ye
          })), ae(S, ye);
          break;
        case "ArrowRight":
          h.preventDefault();
          const ke = Math.min(ve - 1, O + 1);
          N((ie) => ({
            ...ie,
            focusedColumnIndex: ke
          })), ae(S, ke);
          break;
        case "Home":
          h.preventDefault(), h.ctrlKey ? (N((ie) => ({
            ...ie,
            focusedRowIndex: 0,
            focusedColumnIndex: 0
          })), ae(0, 0)) : (N((ie) => ({ ...ie, focusedColumnIndex: 0 })), ae(S, 0));
          break;
        case "End":
          if (h.preventDefault(), h.ctrlKey) {
            const ie = Q - 1, Se = ve - 1;
            N((_e) => ({
              ..._e,
              focusedRowIndex: ie,
              focusedColumnIndex: Se
            })), ae(ie, Se);
          } else {
            const ie = ve - 1;
            N((Se) => ({
              ...Se,
              focusedColumnIndex: ie
            })), ae(S, ie);
          }
          break;
        case "Enter":
        case " ":
          if (h.preventDefault(), B && B.data[S]) {
            const ie = B.data.some(
              (Le) => "ews_data" in Le
            ) ? J(B.data, z.filters) : B.data, Se = z.sortConfig;
            let _e = ie;
            if (Se && Se.length > 0 && (_e = [...ie].sort((Le, Je) => {
              for (const { key: qe, direction: vt } of Se) {
                let $e = Le[qe], He = Je[qe];
                const et = B.columns.find(
                  (Ht) => Ht.key === qe
                );
                if (et?.tableRenderer ? ($e = et.tableRenderer(Le), He = et.tableRenderer(Je)) : et?.render && ($e = et.render(Le), He = et.render(Je)), $e == null && He == null) continue;
                if ($e == null) return vt === "asc" ? -1 : 1;
                if (He == null) return vt === "asc" ? 1 : -1;
                let Dt = 0;
                if (typeof $e == "number" && typeof He == "number" ? Dt = $e - He : Dt = String($e).localeCompare(
                  String(He),
                  void 0,
                  { numeric: !0, sensitivity: "base" }
                ), Dt !== 0)
                  return vt === "asc" ? Dt : -Dt;
              }
              return 0;
            })), _e[S]) {
              const Le = _e[S], qe = z.globalSelectedRowData && re(z.globalSelectedRowData, Le) ? null : Le;
              j({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: qe
              });
            }
          }
          break;
      }
    },
    [
      o,
      z.selectedIndex,
      z.filters,
      z.sortConfig,
      J,
      re,
      j,
      N,
      Y,
      ae
    ]
  ), je = ne(
    (h, S) => J(h, S),
    [J]
  );
  if (Pa(
    r,
    () => ({
      selectTab: (h) => {
        h >= 0 && h < o.length && (j({ type: "SET_SELECTED_INDEX", payload: h }), i?.(h));
      },
      refreshData: (h) => {
        console.log("Refreshing data for tab:", h ?? "all");
      },
      exportData: (h) => {
        const S = h ?? z.selectedIndex, O = o[S];
        return O ? O.data : [];
      },
      getSelectedRows: (h) => z.globalSelectedRowData ? [] : [],
      clearSelection: (h) => {
        j({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (h) => {
        j({ type: "SET_FILTERS", payload: h });
      }
    }),
    [z.selectedIndex, z.selectedRows, o, i]
  ), C)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${u}`,
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
  if (w)
    return /* @__PURE__ */ n.jsx(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--error ${u}`,
        "data-testid": L,
        children: V || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
          /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
          /* @__PURE__ */ n.jsx("p", { children: w })
        ] })
      }
    );
  const fe = Ce(null), be = Ce(null), he = Ce(null), [xe, Ee] = we(!0);
  Ie(() => {
    if (!k) {
      Ee(!1);
      return;
    }
    if (E) {
      Ee(!1);
      return;
    }
    function h() {
      if (!fe.current || !be.current || !he.current) return;
      const P = fe.current.clientWidth, B = Array.from(
        be.current.querySelectorAll(":scope > .aria-tabs-datagrid__tab")
      ), Q = B.reduce((ke, ie) => ke + ie.offsetWidth, 0), ve = he.current.offsetWidth, ge = Math.max(8 * (B.length - 1), 0), ye = Q + ge + ve + v <= P;
      Ee(ye);
    }
    const S = requestAnimationFrame(() => h()), O = new ResizeObserver(() => h());
    return fe.current && O.observe(fe.current), be.current && O.observe(be.current), () => {
      cancelAnimationFrame(S), O.disconnect();
    };
  }, [k, v, E, o.length]);
  const Fe = he, Ne = ne(() => Fe.current ? Array.from(
    Fe.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((h) => !h.hasAttribute("disabled")) : [], []), T = ne(
    (h) => {
      const S = Ne();
      if (!S.length) return;
      const O = Math.max(0, Math.min(h, S.length - 1));
      S[O].focus(), N((P) => ({ ...P, focusArea: "actions", focusedActionIndex: O }));
    },
    [Ne]
  ), b = ne(() => T(0), [T]), F = ne(
    (h, S) => {
      const { key: O } = h, P = o.length - 1;
      switch (O) {
        case "ArrowUp": {
          k && !xe && (h.preventDefault(), b());
          break;
        }
        case "ArrowLeft": {
          h.preventDefault();
          const B = S > 0 ? S - 1 : P;
          $(B), A(B), oe.current[B]?.focus();
          break;
        }
        case "ArrowRight": {
          if (h.preventDefault(), S === P && k && xe) {
            b();
            return;
          }
          const B = S < P ? S + 1 : 0;
          $(B), A(B), oe.current[B]?.focus();
          break;
        }
        case "ArrowDown": {
          h.preventDefault(), N((B) => ({
            ...B,
            focusArea: "headers",
            focusedHeaderIndex: 0,
            isGridActive: !0
          }));
          break;
        }
        case "Home": {
          h.preventDefault(), $(0), A(0), oe.current[0]?.focus();
          break;
        }
        case "End": {
          h.preventDefault(), $(P), A(P), oe.current[P]?.focus();
          break;
        }
        case "Enter":
        case " ": {
          h.preventDefault(), $(S);
          break;
        }
        case "Tab": {
          !h.shiftKey && S === P && k && xe && b();
          break;
        }
      }
    },
    [o.length, $, A, k, xe, b]
  ), Z = ne((h) => {
    const { key: S } = h, O = Ne();
    if (!O.length) return;
    const P = O.findIndex((B) => B === document.activeElement);
    switch (S) {
      case "ArrowLeft": {
        if (xe)
          if (P > 0)
            h.preventDefault(), T(P - 1);
          else {
            h.preventDefault();
            const B = o.length - 1;
            $(B), A(B), oe.current[B]?.focus(), N((Q) => ({ ...Q, focusArea: "tabs", focusedTabIndex: B }));
          }
        break;
      }
      case "ArrowRight": {
        xe && (P < O.length - 1 ? (h.preventDefault(), T(P + 1)) : (h.preventDefault(), $(0), A(0), oe.current[0]?.focus(), N((B) => ({ ...B, focusArea: "tabs", focusedTabIndex: 0 }))));
        break;
      }
      case "ArrowDown": {
        if (xe)
          h.preventDefault(), N((B) => ({ ...B, focusArea: "headers", focusedHeaderIndex: 0, isGridActive: !0 }));
        else {
          h.preventDefault();
          const B = z.selectedIndex;
          oe.current[B]?.focus(), N((Q) => ({ ...Q, focusArea: "tabs", focusedTabIndex: B }));
        }
        break;
      }
    }
  }, [Ne, xe, T, o.length, $, A, z.selectedIndex]);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: `aria-tabs-datagrid aria-tabs-datagrid--${m} ${u}`,
      id: p,
      "data-testid": L,
      ref: fe,
      children: [
        c && !M && /* @__PURE__ */ n.jsx("div", { id: D, className: "nhsuk-u-visually-hidden", children: c }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__navigation-help sr-only",
            id: x,
            children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells."
          }
        ),
        /* @__PURE__ */ n.jsx(
          cs,
          {
            sortConfig: z.sortConfig || [],
            columns: o.flatMap(
              (h) => h.columns.map((S) => ({ key: S.key, label: S.label }))
            ).filter(
              (h, S, O) => O.findIndex((P) => P.key === h.key) === S
              // Remove duplicates
            ),
            onSortChange: (h) => {
              j({ type: "SET_SORT", payload: h });
            },
            ariaLabel: "Data grid sort configuration"
          }
        ),
        k && !xe && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--above",
            ref: he,
            role: "toolbar",
            "aria-label": "Additional actions",
            onKeyDown: Z,
            children: k
          }
        ),
        /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid__tabs-wrapper ${xe ? "aria-tabs-datagrid__tabs-wrapper--inline-actions" : ""}`, children: [
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": d,
              "aria-describedby": c ? M ? c : D : x,
              "aria-orientation": m,
              className: "aria-tabs-datagrid__tabs",
              ref: be,
              children: o.map((h, S) => {
                const O = S === z.selectedIndex, P = h.disabled || f;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${h.id}`,
                    "aria-controls": `panel-${h.id}`,
                    "aria-selected": O,
                    "aria-disabled": P,
                    tabIndex: O ? 0 : -1,
                    ref: (B) => {
                      oe.current[S] = B;
                    },
                    onClick: () => $(S),
                    onKeyDown: (B) => F(B, S),
                    disabled: P,
                    className: [
                      "aria-tabs-datagrid__tab",
                      O ? "aria-tabs-datagrid__tab--selected" : "",
                      P ? "aria-tabs-datagrid__tab--disabled" : ""
                    ].filter(Boolean).join(" "),
                    children: [
                      /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: h.label }),
                      z.tabLoadingStates[S] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                      z.tabErrors[S] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                    ]
                  },
                  h.id
                );
              })
            }
          ),
          k && xe && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "aria-tabs-datagrid__actions aria-tabs-datagrid__actions--inline",
              ref: he,
              role: "toolbar",
              "aria-label": "Additional actions",
              onKeyDown: Z,
              children: k
            }
          )
        ] }),
        o.map((h, S) => {
          const O = S === z.selectedIndex;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tabpanel",
              id: `panel-${h.id}`,
              "aria-labelledby": `tab-${h.id}`,
              tabIndex: 0,
              hidden: !O,
              ref: (P) => {
                X.current[S] = P;
              },
              className: `aria-tabs-datagrid__panel ${h.className || ""}`,
              "data-tab-panel": S,
              children: O && (() => {
                const P = h.data.some(
                  (Q) => "ews_data" in Q
                ) ? je(h.data, z.filters) : h.data, B = Re(() => {
                  const Q = z.sortConfig;
                  return !Q || Q.length === 0 ? P : [...P].sort((ve, ge) => {
                    for (const { key: ye, direction: ke } of Q) {
                      let ie = ve[ye], Se = ge[ye];
                      const _e = h.columns.find(
                        (Je) => Je.key === ye
                      );
                      if (_e?.tableRenderer ? (ie = _e.tableRenderer(ve), Se = _e.tableRenderer(ge)) : _e?.render && (ie = _e.render(ve), Se = _e.render(ge)), ie == null && Se == null) continue;
                      if (ie == null) return 1;
                      if (Se == null) return -1;
                      let Le = 0;
                      if (typeof ie == "number" && typeof Se == "number" ? Le = ie - Se : typeof ie == "boolean" && typeof Se == "boolean" ? Le = ie === Se ? 0 : ie ? 1 : -1 : Le = String(ie).localeCompare(
                        String(Se),
                        void 0,
                        {
                          numeric: !0,
                          sensitivity: "base"
                        }
                      ), Le !== 0)
                        return ke === "asc" ? Le : -Le;
                    }
                    return 0;
                  });
                }, [P, z.sortConfig, h.columns]);
                return /* @__PURE__ */ n.jsxs(
                  "table",
                  {
                    className: "nhsuk-table aria-tabs-datagrid__grid",
                    role: "grid",
                    "aria-label": h.ariaLabel,
                    "aria-describedby": h.ariaDescription ? `panel-${h.id}-description` : void 0,
                    children: [
                      h.ariaDescription && /* @__PURE__ */ n.jsx(
                        "caption",
                        {
                          className: "nhsuk-u-visually-hidden",
                          id: `panel-${h.id}-description`,
                          children: h.ariaDescription
                        }
                      ),
                      /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: h.columns.map((Q, ve) => {
                        const ge = z.sortConfig?.find(
                          (ie) => ie.key === Q.key
                        ), ye = !!ge, ke = y.focusArea === "headers" && y.focusedHeaderIndex === ve;
                        return /* @__PURE__ */ n.jsx(
                          "th",
                          {
                            className: `sortable-header ${ke ? "sortable-header--focused" : ""} ${ye ? "sortable-header--sorted" : ""}`,
                            role: "columnheader",
                            tabIndex: ke ? 0 : -1,
                            onClick: () => G(S, Q.key),
                            onKeyDown: (ie) => pe(ie, ve),
                            "aria-sort": ye ? ge?.direction === "asc" ? "ascending" : "descending" : "none",
                            children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                              /* @__PURE__ */ n.jsx("span", { className: "header-label", children: Q.label }),
                              /* @__PURE__ */ n.jsxs(
                                "div",
                                {
                                  className: `sort-indicator-container ${ye ? `sort-indicator--${ge?.direction}` : ""}`,
                                  children: [
                                    z.sortConfig && z.sortConfig.length > 0 && z.sortConfig.findIndex(
                                      (ie) => ie.key === Q.key
                                    ) !== -1 && /* @__PURE__ */ n.jsx(
                                      "span",
                                      {
                                        className: `sort-priority sort-priority--priority-${z.sortConfig.findIndex((ie) => ie.key === Q.key) + 1}`,
                                        "data-priority": z.sortConfig.findIndex(
                                          (ie) => ie.key === Q.key
                                        ) + 1,
                                        title: `Sort priority: ${z.sortConfig.findIndex((ie) => ie.key === Q.key) + 1}`,
                                        children: z.sortConfig.findIndex(
                                          (ie) => ie.key === Q.key
                                        ) + 1
                                      }
                                    ),
                                    ye && /* @__PURE__ */ n.jsx(
                                      "svg",
                                      {
                                        className: `nhsuk-icon sort-arrow sort-arrow--${ge?.direction}`,
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
                          Q.key
                        );
                      }) }) }),
                      /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: B.map((Q, ve) => {
                        const ge = z.globalSelectedRowData && re(z.globalSelectedRowData, Q), ye = y.focusArea === "cells" && y.focusedRowIndex === ve;
                        return /* @__PURE__ */ n.jsx(
                          "tr",
                          {
                            role: "row",
                            className: `data-row ${ge ? "data-row--selected" : ""} ${ye ? "data-row--focused" : ""}`,
                            "aria-selected": ge,
                            children: h.columns.map((ke, ie) => {
                              const Se = Q[ke.key];
                              let _e;
                              ke.tableRenderer ? _e = ke.tableRenderer(Q) : ke.render ? _e = ke.render(Q) : _e = Se;
                              const Le = y.focusArea === "cells" && y.focusedRowIndex === ve && y.focusedColumnIndex === ie, Je = () => {
                                if (ke.customRenderer) {
                                  const qe = ke.customRenderer(
                                    Se,
                                    Q
                                  );
                                  return /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: "data-cell__custom",
                                      "data-custom-rendered": "true",
                                      children: qe
                                    }
                                  );
                                }
                                return typeof Se == "boolean" && _e === Se ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  U(Se),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: Se ? "Yes" : "No" })
                                ] }) : Ke.isValidElement(_e) || typeof _e != "object" ? _e ?? "" : _e;
                              };
                              return /* @__PURE__ */ n.jsx(
                                "td",
                                {
                                  role: "gridcell",
                                  className: `data-cell ${Le ? "data-cell--focused" : ""}`,
                                  tabIndex: Le ? 0 : -1,
                                  onClick: () => {
                                    const vt = z.globalSelectedRowData && re(
                                      z.globalSelectedRowData,
                                      Q
                                    ) ? null : Q;
                                    j({
                                      type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                      payload: vt
                                    });
                                  },
                                  onKeyDown: (qe) => W(qe, ve, ie),
                                  children: Je()
                                },
                                ke.key
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
            h.id
          );
        })
      ]
    }
  );
}), sn = {
  asc: "↑",
  desc: "↓"
}, pc = (e) => [...e].sort((t, r) => t.priority - r.priority);
function lr(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function gc(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function bc(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function xc(e, t) {
  const r = t.find((o) => o.id === e), a = gc(t);
  return r ? r.priority < a : !1;
}
const bm = ({
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
  const u = Re(() => pc(e), [e]), f = ne((L) => {
    if (l) return;
    const k = e.map(
      (v) => v.id === L ? { ...v, direction: v.direction === "asc" ? "desc" : "asc" } : v
    );
    t(k);
  }, [e, t, l]), m = ne((L) => {
    if (l) return;
    const k = e.findIndex((E) => E.id === L);
    if (k <= 0) return;
    const v = [...e];
    [v[k], v[k - 1]] = [v[k - 1], v[k]], t(lr(v));
  }, [e, t, l]), p = ne((L) => {
    if (l) return;
    const k = e.findIndex((E) => E.id === L);
    if (k >= e.length - 1 || k === -1) return;
    const v = [...e];
    [v[k], v[k + 1]] = [v[k + 1], v[k]], t(lr(v));
  }, [e, t, l]), C = ne((L) => {
    if (l) return;
    const k = e.filter((v) => v.id !== L);
    t(lr(k));
  }, [e, t, l]), g = ne(() => {
    l || t([]);
  }, [t, l]), w = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const L = u.map((k, v) => {
      const E = k.direction === "asc" ? "ascending" : "descending";
      return `${v + 1}. ${k.label} (${E})`;
    });
    if (L.length === 1)
      return `Sorted by: ${L[0]}`;
    if (L.length === 2)
      return `Sorted by: ${L.join(" and ")}`;
    {
      const k = L.pop();
      return `Sorted by: ${L.join(", ")}, and ${k}`;
    }
  }, V = Re(() => {
    const L = ["sort-description"];
    return i && L.push("sort-help"), c && L.push(c), L.join(" ");
  }, [i, c]);
  return e.length === 0 ? /* @__PURE__ */ n.jsx("div", { className: `sort-status-control sort-status-control--empty ${r}`, children: /* @__PURE__ */ n.jsx(
    "div",
    {
      className: "sort-status-control__description",
      id: "sort-description",
      "aria-live": "polite",
      children: w()
    }
  ) }) : /* @__PURE__ */ n.jsxs("div", { className: `sort-status-control ${r}`, children: [
    /* @__PURE__ */ n.jsx(
      "div",
      {
        className: "sort-status-control__description sort-status-control__description--active",
        id: "sort-description",
        "aria-live": "polite",
        children: w()
      }
    ),
    /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: "sort-status-control__tags",
        role: "list",
        "aria-label": d,
        "aria-describedby": V,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          u.map((L) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                rt,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => C(L.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: L.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: L.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => f(L.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${L.label}. Currently ${L.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: L.direction === "asc" ? sn.asc : sn.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => m(L.id),
                          disabled: l || !bc(L.id, e),
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
                          onClick: () => p(L.id),
                          disabled: l || !xc(L.id, e),
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
      Ge,
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
      sn.asc,
      "/",
      sn.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, Jr = (e, t) => t.map((r) => ({
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
})), pr = [
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
], yc = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), vc = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, _c = (e) => {
  if (typeof e == "boolean") {
    const r = pr.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = pr.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, kc = (e) => `${e.name}-${e.bed_name}`, wc = () => ({
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
}), xm = (e) => {
  const t = wc();
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
}, Sc = {
  dataComparator: yc,
  filterFunction: vc,
  booleanRenderer: _c,
  getDataId: kc
};
function Ia(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: d,
    fieldRenderers: c = {},
    classPrefix: u = "adaptive-card"
  } = r, f = t.find((k) => k.key === a), m = f?.cardRenderer ? f.cardRenderer(e) : f?.render ? f.render(e) : e[a || "name"] || "Untitled", p = () => o.filter((v) => !i.includes(v) && e[v]).slice(0, 3).map((v) => {
    const E = t.find((D) => D.key === v), _ = e[v], H = c[v] ? c[v](_, e) : E?.cardRenderer ? E.cardRenderer(e) : E?.render ? E.render(e) : _;
    return `${E?.label || v}: ${H}`;
  }).join(" • "), C = () => s.length === 0 ? null : s.filter((k) => e[k.fieldKey] !== void 0).map((k) => {
    const v = e[k.fieldKey], E = k.render ? k.render(v, e) : v;
    return `<span class="nhsuk-tag ${Cc(k, v)}">${E}</span>`;
  }).join(""), g = () => d ? d(e) : l?.(e) === "high" ? "primary" : "default", w = C(), V = p(), L = w ? `${V}${w ? `<div class="adaptive-card__badges">${w}</div>` : ""}` : V;
  return {
    variant: g(),
    heading: String(m),
    descriptionHtml: L,
    className: `adaptive-card ${u}`,
    "aria-label": `Record for ${m}`
  };
}
function Cc(e, t) {
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
const jc = {
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
}, ds = ({
  data: e,
  columns: t,
  onSelect: r,
  onAction: a,
  priority: o = "medium",
  status: s = "active"
}) => {
  const i = e.name, l = e.age, d = e.ward_name, c = e.bed_name, u = e.ews_score, f = e.speciality, m = e.consultant;
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
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: u !== void 0 && /* @__PURE__ */ n.jsxs(
            rt,
            {
              color: Tc(ms(u)),
              className: "healthcare-card__alert",
              children: [
                "EWS: ",
                u
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
            /* @__PURE__ */ n.jsx("dd", { children: f })
          ] }),
          /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__detail healthcare-card__detail--prominent", children: [
            /* @__PURE__ */ n.jsx("dt", { children: "Consultant" }),
            /* @__PURE__ */ n.jsx("dd", { children: m })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Ge,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ge,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (p) => {
                p.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            Ge,
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
}, us = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        rt,
        {
          color: Dc(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        rt,
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
      Ge,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ge,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), hs = ({
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
        rt,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        rt,
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
      Ge,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ge,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), fs = ({
  data: e,
  onSelect: t,
  onAction: r,
  priority: a = "medium"
}) => {
  const o = e.name, s = e.ews_score, i = e.ews_data?.respiratory_rate_bpm, l = e.ews_data?.sp02, d = e.ews_data?.temperature, c = e.ews_data?.systolic_bp, u = e.ews_data?.heart_rate, f = e.ews_data?.avpu;
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Nc(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: f && /* @__PURE__ */ n.jsxs(
            rt,
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
          u !== void 0 && /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__vital", children: [
            /* @__PURE__ */ n.jsx("span", { className: "healthcare-card__vital-label", children: "Heart Rate" }),
            /* @__PURE__ */ n.jsxs("span", { className: "healthcare-card__vital-value", children: [
              u,
              " bpm"
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__actions", children: [
          /* @__PURE__ */ n.jsx(
            Ge,
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
            Ge,
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
function ms(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Nc(e) {
  return ms(e);
}
function Tc(e) {
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
function Dc(e) {
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
const Ic = [
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
], ps = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", Rc = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, Fc = (e) => ps(e) === "high" || e.status === "urgent" ? "primary" : "default", Bc = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, Lc = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: Ic,
  hiddenFields: [],
  getPriority: ps,
  getStatus: Rc,
  getVariant: Fc,
  fieldRenderers: Bc,
  classPrefix: "adaptive-card--healthcare"
}, Ec = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      ds,
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
      us,
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
      hs,
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
      fs,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Ac = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Ra = {
  name: "healthcare",
  defaultCardConfig: Lc,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Ec,
  fieldTypes: Ac
};
function Fa(e) {
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
function Ba(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function Mc(e, t) {
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
function $c(e, t) {
  const [r, a] = we("cards");
  return Ie(() => {
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
function Hc(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Pc(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...jc, ...r };
  if (a && a.cardTemplates) {
    const s = Hc(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Ia(e, t, o);
}
const ym = ({
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
  dataConfig: u,
  selectedIndex: f,
  onTabChange: m,
  ariaLabel: p = "Data grid",
  ariaDescription: C,
  orientation: g = "horizontal",
  id: w,
  disabled: V = !1,
  className: L,
  ...k
}) => {
  const v = $c(e, t), E = f !== void 0, _ = f ?? 0, H = Re(() => {
    if (c.some(
      (b) => b.data && b.data.length > 0 && Ba(b.data)
    )) {
      const b = Fa(r);
      return {
        ...Ra.defaultCardConfig,
        ...b
      };
    } else
      return Fa(r);
  }, [r, c]), M = Re(() => c.some(
    (b) => b.data && b.data.length > 0 && Ba(b.data)
  ) ? Ra : void 0, [c]), D = Re(() => ({
    selectedIndex: _,
    tabLoadingStates: new Array(c.length).fill(!1),
    tabErrors: new Array(c.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(c.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [_, c.length]), [x, R] = za(Mc, D), J = Ce([]), de = Ce([]), q = Ce([]), I = Ce(null), [y, N] = we({
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
  }), ue = ne((T) => {
    if (!T.current)
      return { columns: 1, rows: 0 };
    const b = T.current, F = b.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (F.length === 0)
      return { columns: 1, rows: 0 };
    const Z = b.offsetWidth, S = F[0].offsetWidth, O = Math.floor(Z / S) || 1, P = Math.ceil(F.length / O);
    return { columns: O, rows: P };
  }, []), z = ne((T, b) => ({
    row: Math.floor(T / b),
    col: T % b
  }), []), j = ne((T, b, F) => T * F + b, []), re = ne((T, b, F, Z) => {
    const { row: h, col: S } = z(T, Z);
    let O = h, P = S;
    switch (b) {
      case "up":
        O = Math.max(0, h - 1);
        break;
      case "down":
        O = Math.min(Math.floor((F - 1) / Z), h + 1);
        break;
      case "left":
        P = Math.max(0, S - 1);
        break;
      case "right":
        P = Math.min(Z - 1, S + 1);
        break;
    }
    const B = j(O, P, Z);
    return Math.min(B, F - 1);
  }, [z, j]);
  Ie(() => {
    y.isCardNavigationActive && y.focusedCardElementIndex >= 0 && y.cardElements.length > 0 && setTimeout(() => {
      const T = y.cardElements[y.focusedCardElementIndex];
      T && (T.element.focus(), T.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [y.isCardNavigationActive, y.focusedCardElementIndex, y.cardElements.length]), Ie(() => {
    const T = () => {
      if (v === "cards" && I.current) {
        const { columns: Z, rows: h } = ue(I);
        N((S) => ({
          ...S,
          gridColumns: Z,
          gridRows: h
        }));
      }
    }, b = setTimeout(T, 200), F = () => {
      setTimeout(T, 100);
    };
    return window.addEventListener("resize", F), () => {
      clearTimeout(b), window.removeEventListener("resize", F);
    };
  }, [v, c, ue]), Ie(() => {
    const T = x.tabLoadingStates.length, b = c.length;
    T !== b && R({ type: "ADJUST_ARRAYS", payload: { newLength: b } });
  }, [c.length, x.tabLoadingStates.length]), Ie(() => {
    E && f !== x.selectedIndex && R({ type: "SET_SELECTED_INDEX", payload: f });
  }, [E, f, x.selectedIndex]);
  const $ = ne((T) => {
    T >= 0 && T < c.length && !c[T].disabled && (R({ type: "SET_SELECTED_INDEX", payload: T }), m?.(T));
  }, [c, m]), te = ne((T) => {
    console.log("Card selected:", T), R({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: T
    });
  }, []), A = ne((T) => {
    const b = de.current[T];
    b && (b.focus(), b.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), oe = ne((T) => {
    const b = de.current[T];
    if (!b) return [];
    const F = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), Z = b.querySelectorAll(F);
    return Array.from(Z).map((h, S) => ({
      id: h.id || `card-${T}-element-${S}`,
      element: h,
      label: h.getAttribute("aria-label") || h.textContent?.trim() || h.getAttribute("title") || `Element ${S + 1}`,
      type: h.tagName.toLowerCase() === "button" ? "button" : h.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(h.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), X = Ce(null), G = ne((T) => {
    const b = X.current;
    if (!b) return;
    const F = document.createElement("div");
    F.setAttribute("aria-live", "polite"), F.setAttribute("aria-atomic", "true"), F.className = "sr-only", F.textContent = T, b.appendChild(F), setTimeout(() => {
      b.contains(F) && b.removeChild(F);
    }, 1e3);
  }, []), Y = ne((T) => {
    const b = T.filter((Z) => Z.sortable !== !1), F = [
      { value: "", label: "Sort by..." }
    ];
    return b.forEach((Z) => {
      const h = Z.label || Z.key;
      Z.key === "name" ? F.push(
        { value: `${Z.key}-asc`, label: `${h} (A-Z)` },
        { value: `${Z.key}-desc`, label: `${h} (Z-A)` }
      ) : Z.key === "ews_score" || Z.key.includes("score") ? F.push(
        { value: `${Z.key}-desc`, label: `${h} (High-Low)` },
        { value: `${Z.key}-asc`, label: `${h} (Low-High)` }
      ) : Z.key === "age" || Z.key.includes("date") || Z.key.includes("time") ? F.push(
        { value: `${Z.key}-desc`, label: `${h} (Oldest-Youngest)` },
        { value: `${Z.key}-asc`, label: `${h} (Youngest-Oldest)` }
      ) : F.push(
        { value: `${Z.key}-asc`, label: `${h} (A-Z)` },
        { value: `${Z.key}-desc`, label: `${h} (Z-A)` }
      );
    }), F;
  }, []), U = ne((T, b) => b ? [...T].sort((F, Z) => {
    const h = F[b.key], S = Z[b.key];
    if (h == null && S == null) return 0;
    if (h == null) return 1;
    if (S == null) return -1;
    const O = Number(h), P = Number(S);
    if (!isNaN(O) && !isNaN(P))
      return b.direction === "asc" ? O - P : P - O;
    const B = String(h).toLowerCase(), Q = String(S).toLowerCase(), ve = B.localeCompare(Q);
    return b.direction === "asc" ? ve : -ve;
  }) : T, []), ae = ne((T) => {
    if (!T) {
      N((B) => ({ ...B, cardSortConfig: null })), G("Card sorting cleared");
      return;
    }
    const [b, F] = T.split("-"), Z = { key: b, direction: F };
    N((B) => ({ ...B, cardSortConfig: Z }));
    const O = c[x.selectedIndex]?.columns.find((B) => B.key === b)?.label || b;
    G(`Cards sorted by ${O} in ${F === "asc" ? "ascending" : "descending"} order`);
  }, [c, x.selectedIndex, G]), pe = ne((T) => {
    const Z = c[x.selectedIndex]?.columns.find((S) => S.key === T.key)?.label || T.key, h = T.direction === "asc" ? "ascending" : "descending";
    return `${Z} (${h})`;
  }, [c, x.selectedIndex]), W = ne((T) => {
    const b = c[x.selectedIndex];
    if (o) {
      const F = x.sortConfig;
      return !F || F.length === 0 ? T : [...T].sort((Z, h) => {
        for (const { key: S, direction: O } of F) {
          let P = Z[S], B = h[S];
          const Q = b?.columns.find((Se) => Se.key === S);
          if (Q?.cardRenderer ? (P = Q.cardRenderer(Z), B = Q.cardRenderer(h)) : Q?.render && (P = Q.render(Z), B = Q.render(h)), P == null && B == null) continue;
          if (P == null) return O === "asc" ? -1 : 1;
          if (B == null) return O === "asc" ? 1 : -1;
          const ve = Number(P), ge = Number(B);
          if (!isNaN(ve) && !isNaN(ge)) {
            const Se = ve - ge;
            if (Se !== 0) return O === "asc" ? Se : -Se;
            continue;
          }
          const ye = String(P).toLowerCase(), ke = String(B).toLowerCase(), ie = ye.localeCompare(ke);
          if (ie !== 0) return O === "asc" ? ie : -ie;
        }
        return 0;
      });
    } else
      return U(T, y.cardSortConfig);
  }, [o, x.sortConfig, y.cardSortConfig, U, c, x.selectedIndex]), je = ne((T, b) => {
    const F = oe(T), Z = F[b];
    if (Z) {
      Z.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const h = `Focused on ${Z.label}, ${Z.type} ${b + 1} of ${F.length} within card`;
      G(h);
    }
  }, [oe, G]), fe = ne((T) => {
    J.current[T]?.focus();
  }, []), be = ne(() => {
    const T = q.current[0];
    if (!T) return [];
    const b = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), F = T.querySelectorAll(b);
    return Array.from(F);
  }, []), he = ne((T) => {
    if (T === 0) {
      const b = q.current[0], F = b?.querySelector(".sort-controls-row");
      if (F) {
        F.setAttribute("tabindex", "-1"), F.focus();
        const h = `Sort controls group with ${be().length} interactive elements. Press Enter or Space to begin navigating controls.`;
        G(h);
      } else b && b.focus();
    } else {
      const b = be(), F = T - 1, Z = b[F];
      if (Z) {
        Z.focus();
        const h = Z.tagName.toLowerCase() === "select", S = Z.tagName.toLowerCase() === "button", O = h ? "dropdown" : S ? "button" : "control", P = h ? ". Use Space key to open dropdown" : "", B = `${O} ${F + 1} of ${b.length}${P}`;
        G(B);
      }
    }
  }, [be, G]), xe = ne((T, b) => {
    const { key: F } = T, Z = c[x.selectedIndex], h = Z?.data.length || 0;
    if (F === "ArrowLeft" && T.shiftKey) {
      T.preventDefault(), T.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (F === "ArrowRight" && T.shiftKey) {
      T.preventDefault(), T.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!y.isCardNavigationActive) {
      switch (F) {
        case "ArrowUp":
          if (T.preventDefault(), b === 0)
            N((B) => ({ ...B, focusArea: "sort-controls", focusedSortControlIndex: 0, isSortControlsActive: !1 })), he(0);
          else {
            const B = re(b, "up", h, y.gridColumns);
            B !== b && (N((Q) => ({ ...Q, focusedCardIndex: B })), A(B), G(`Moved to card ${B + 1} of ${h}`));
          }
          break;
        case "ArrowDown":
          T.preventDefault();
          const S = re(b, "down", h, y.gridColumns);
          S !== b && (N((B) => ({ ...B, focusedCardIndex: S })), A(S), G(`Moved to card ${S + 1} of ${h}`));
          break;
        case "ArrowLeft":
          T.preventDefault();
          const O = re(b, "left", h, y.gridColumns);
          O !== b ? (N((B) => ({ ...B, focusedCardIndex: O })), A(O), G(`Moved to card ${O + 1} of ${h}`)) : x.selectedIndex > 0 && (R({ type: "SET_SELECTED_INDEX", payload: x.selectedIndex - 1 }), N((B) => ({ ...B, focusArea: "tabs" })), setTimeout(() => fe(x.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          T.preventDefault();
          const P = re(b, "right", h, y.gridColumns);
          P !== b ? (N((B) => ({ ...B, focusedCardIndex: P })), A(P), G(`Moved to card ${P + 1} of ${h}`)) : x.selectedIndex < c.length - 1 && (R({ type: "SET_SELECTED_INDEX", payload: x.selectedIndex + 1 }), N((B) => ({ ...B, focusArea: "tabs" })), setTimeout(() => fe(x.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (Z?.data[b]) {
            T.preventDefault(), N((Q) => ({
              ...Q,
              selectedCardIndex: b
            }));
            const B = oe(b);
            B.length > 0 ? (N((Q) => ({
              ...Q,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: B,
              selectedCardIndex: b
              // Ensure selection is maintained
            })), G(`Card ${b + 1} selected and navigation activated. ${B.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : G(`Card ${b + 1} selected.`);
          }
          break;
        case " ":
          if (Z?.data[b]) {
            T.preventDefault(), N((Q) => ({
              ...Q,
              selectedCardIndex: Q.selectedCardIndex === b ? -1 : b
            }));
            const B = y.selectedCardIndex === b;
            G(`Card ${b + 1} ${B ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (F) {
      case "ArrowUp":
      case "ArrowLeft":
        T.preventDefault();
        const S = Math.max(0, y.focusedCardElementIndex - 1);
        N((Q) => ({ ...Q, focusedCardElementIndex: S })), je(b, S);
        break;
      case "ArrowDown":
      case "ArrowRight":
        T.preventDefault();
        const O = Math.min(y.cardElements.length - 1, y.focusedCardElementIndex + 1);
        N((Q) => ({ ...Q, focusedCardElementIndex: O })), je(b, O);
        break;
      case "Enter":
        T.preventDefault();
        const P = y.cardElements[y.focusedCardElementIndex];
        P && (P.element.click(), G(`Activated ${P.label}`));
        break;
      case " ":
        T.preventDefault();
        const B = y.cardElements[y.focusedCardElementIndex];
        if (B) {
          const Q = new MouseEvent("dblclick", { bubbles: !0 });
          B.element.dispatchEvent(Q), G(`Double-clicked ${B.label}`);
        }
        break;
      case "Escape":
        T.preventDefault(), N((Q) => ({
          ...Q,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => A(b), 0), G("Exited card navigation, returned to card level");
        break;
      case "Home":
        T.preventDefault(), y.cardElements.length > 0 && (N((Q) => ({ ...Q, focusedCardElementIndex: 0 })), je(b, 0));
        break;
      case "End":
        if (T.preventDefault(), y.cardElements.length > 0) {
          const Q = y.cardElements.length - 1;
          N((ve) => ({ ...ve, focusedCardElementIndex: Q })), je(b, Q);
        }
        break;
    }
  }, [y, x.selectedIndex, c, te, A, fe, N, oe, je, G]), Ee = ne((T) => {
    const b = J.current[T], F = b?.parentElement;
    if (!b || !F) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const Z = b.getBoundingClientRect(), h = F.getBoundingClientRect();
    Z.left >= h.left && Z.right <= h.right || (console.log("Tab not visible, scrolling into view (mobile)"), b.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), Fe = ne((T, b) => {
    if (v !== "cards")
      return;
    const { key: F } = T;
    switch (F) {
      case "ArrowLeft":
        T.preventDefault();
        const Z = b > 0 ? b - 1 : c.length - 1;
        $(Z), N((P) => ({ ...P, focusedTabIndex: Z })), J.current[Z]?.focus(), Ee(Z);
        break;
      case "ArrowRight":
        T.preventDefault();
        const h = b < c.length - 1 ? b + 1 : 0;
        $(h), N((P) => ({ ...P, focusedTabIndex: h })), J.current[h]?.focus(), Ee(h);
        break;
      case "ArrowDown":
        T.preventDefault();
        const S = c[x.selectedIndex];
        S && S.columns && S.columns.length > 0 ? (N((P) => ({
          ...P,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), he(0)) : (N((P) => ({
          ...P,
          focusArea: "cards",
          focusedCardIndex: 0
        })), A(0));
        break;
      case "Home":
        T.preventDefault(), $(0), N((P) => ({ ...P, focusedTabIndex: 0 })), J.current[0]?.focus(), Ee(0);
        break;
      case "End":
        T.preventDefault();
        const O = c.length - 1;
        $(O), N((P) => ({ ...P, focusedTabIndex: O })), J.current[O]?.focus(), Ee(O);
        break;
      case "Enter":
      case " ":
        T.preventDefault(), $(b);
        break;
    }
  }, [c.length, $, v, A, N, Ee]), Ne = ne((T, b) => {
    if (v !== "cards")
      return;
    const { key: F } = T, Z = c[x.selectedIndex];
    if (b === 0 && !y.isSortControlsActive) {
      switch (F) {
        case "ArrowUp":
          T.preventDefault(), N((S) => ({
            ...S,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), fe(x.selectedIndex);
          break;
        case "ArrowDown":
          T.preventDefault(), Z?.data && Z.data.length > 0 && (N((S) => ({
            ...S,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), A(0));
          break;
        case "Enter":
        case " ":
          T.preventDefault();
          const h = be();
          if (h.length > 0) {
            N((O) => ({
              ...O,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), he(1);
            const S = `Entered sort controls navigation mode. ${h.length} controls available. Use arrow keys to navigate between controls.`;
            G(S);
          }
          break;
        case "Escape":
          T.preventDefault(), N((S) => ({
            ...S,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), fe(x.selectedIndex);
          break;
      }
      return;
    }
    if (y.isSortControlsActive) {
      const S = be().length;
      switch (F) {
        case "ArrowLeft":
          T.preventDefault();
          const O = y.focusedSortControlIndex > 1 ? y.focusedSortControlIndex - 1 : S;
          N((B) => ({ ...B, focusedSortControlIndex: O })), he(O);
          break;
        case "ArrowRight":
          T.preventDefault();
          const P = y.focusedSortControlIndex < S ? y.focusedSortControlIndex + 1 : 1;
          N((B) => ({ ...B, focusedSortControlIndex: P })), he(P);
          break;
        case "ArrowDown":
          if (T.preventDefault(), y.isSortControlsActive) {
            const B = y.focusedSortControlIndex < S ? y.focusedSortControlIndex + 1 : 1;
            N((Q) => ({ ...Q, focusedSortControlIndex: B })), he(B);
          } else
            Z?.data && Z.data.length > 0 && (N((B) => ({
              ...B,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), A(0));
          break;
        case "ArrowUp":
          T.preventDefault(), N((B) => ({
            ...B,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), he(0);
          break;
        case "Escape":
          T.preventDefault(), N((B) => ({
            ...B,
            isSortControlsActive: !1,
            focusArea: "sort-controls",
            focusedSortControlIndex: 0
          })), he(0);
          break;
      }
    }
  }, [v, c, x.selectedIndex, y.isSortControlsActive, y.focusedSortControlIndex, he, fe, A, N, G]);
  if (v === "cards") {
    const T = c[x.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${L || ""}`, children: [
      /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid-adaptive__header", children: [
        /* @__PURE__ */ n.jsx(
          "div",
          {
            role: "tablist",
            "aria-label": p,
            "aria-describedby": `${C || ""} ${w ? `${w}-navigation-help` : ""}`.trim(),
            "aria-orientation": g,
            className: "aria-tabs-datagrid__tabs",
            children: c.map((b, F) => {
              const Z = F === x.selectedIndex, h = b.disabled || V;
              return /* @__PURE__ */ n.jsxs(
                "button",
                {
                  role: "tab",
                  id: `tab-${b.id}`,
                  "aria-controls": `panel-${b.id}`,
                  "aria-selected": Z,
                  "aria-disabled": h,
                  tabIndex: Z ? 0 : -1,
                  ref: (S) => {
                    J.current[F] = S;
                  },
                  onClick: () => $(F),
                  onKeyDown: (S) => Fe(S, F),
                  disabled: h,
                  className: [
                    "aria-tabs-datagrid__tab",
                    Z ? "aria-tabs-datagrid__tab--selected" : "",
                    h ? "aria-tabs-datagrid__tab--disabled" : ""
                  ].filter(Boolean).join(" "),
                  children: [
                    /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: b.label }),
                    x.tabLoadingStates[F] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                    x.tabErrors[F] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                  ]
                },
                b.id
              );
            })
          }
        ),
        s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions", children: s })
      ] }),
      T && T.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          cs,
          {
            sortConfig: x.sortConfig || [],
            columns: T.columns.map((b) => ({ key: b.key, label: b.label })),
            onSortChange: (b) => {
              R({ type: "SET_SORT", payload: b });
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
            ref: (b) => {
              q.current[0] = b;
            },
            onKeyDown: (b) => Ne(b, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${T.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  ln,
                  {
                    id: `card-sort-${T.id}`,
                    name: `card-sort-${T.id}`,
                    value: y.cardSortConfig ? `${y.cardSortConfig.key}-${y.cardSortConfig.direction}` : "",
                    onChange: (b) => ae(b.target.value),
                    className: "sort-select",
                    children: Y(T.columns).map((b) => /* @__PURE__ */ n.jsx("option", { value: b.value, children: b.label }, b.value))
                  }
                )
              ] }),
              y.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  pe(y.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  Ge,
                  {
                    variant: "secondary",
                    size: "small",
                    onClick: () => ae(""),
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
          ref: I,
          className: "aria-tabs-datagrid-adaptive__cards",
          role: "grid",
          "aria-label": `${T?.label || "Data"} cards in ${y.gridRows} rows and ${y.gridColumns} columns`,
          "aria-rowcount": y.gridRows,
          "aria-colcount": y.gridColumns,
          id: `panel-${T?.id}`,
          "aria-labelledby": `tab-${T?.id}`,
          children: W(T?.data || []).map((b, F) => {
            const Z = y.selectedCardIndex === F, h = y.focusedCardIndex === F && y.focusArea === "cards", S = y.focusedCardIndex === F && y.focusArea === "card" && y.isCardNavigationActive, O = F === 0 && y.focusArea !== "cards", P = h || O, B = z(F, y.gridColumns);
            if (r.cardTemplate) {
              const ge = r.cardTemplate(b, T.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  role: "row",
                  "aria-rowindex": B.row + 1,
                  className: "aria-tabs-datagrid-adaptive__row",
                  children: /* @__PURE__ */ n.jsx(
                    "div",
                    {
                      ref: (ye) => {
                        de.current[F] = ye;
                      },
                      className: [
                        "aria-tabs-datagrid-adaptive__card-wrapper",
                        Z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                        h ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                        S ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                      ].filter(Boolean).join(" "),
                      role: "gridcell",
                      "aria-colindex": B.col + 1,
                      "aria-selected": Z,
                      "aria-expanded": S,
                      "aria-description": S ? `Card navigation active. ${y.cardElements.length} interactive elements available.` : void 0,
                      tabIndex: P ? 0 : -1,
                      onClick: () => {
                        N((ye) => ({
                          ...ye,
                          selectedCardIndex: ye.selectedCardIndex === F ? -1 : F
                        })), te(b);
                      },
                      onKeyDown: (ye) => xe(ye, F),
                      onFocus: () => {
                        N((ye) => ye.focusedCardIndex !== F || ye.focusArea !== "cards" ? {
                          ...ye,
                          focusedCardIndex: F,
                          focusArea: "cards"
                        } : ye);
                      },
                      children: ge
                    }
                  )
                },
                `card-${F}`
              );
            }
            const Q = Pc(b, T.columns, H, M), ve = [
              Q.className || "",
              Z ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              h ? "aria-tabs-datagrid-adaptive__card--focused" : "",
              S ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""
            ].filter(Boolean).join(" ");
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "row",
                "aria-rowindex": B.row + 1,
                className: "aria-tabs-datagrid-adaptive__row",
                children: /* @__PURE__ */ n.jsx(
                  "div",
                  {
                    className: [
                      "aria-tabs-datagrid-adaptive__card-wrapper",
                      Z ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                      h ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                      S ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                    ].filter(Boolean).join(" "),
                    role: "gridcell",
                    "aria-colindex": B.col + 1,
                    "aria-selected": Z,
                    "aria-expanded": S,
                    onKeyDown: (ge) => {
                      ge.key === "Enter" && (ge.preventDefault(), N((ye) => ({
                        ...ye,
                        selectedCardIndex: F
                      }))), xe(ge, F);
                    },
                    children: /* @__PURE__ */ n.jsx(
                      ls,
                      {
                        ...Q,
                        ref: (ge) => {
                          de.current[F] = ge;
                        },
                        className: ve,
                        "aria-label": `${Q["aria-label"] || Q.heading}. ${S ? `Card navigation active with ${y.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                        tabIndex: P ? 0 : -1,
                        onClick: () => {
                          N((ge) => ({
                            ...ge,
                            selectedCardIndex: ge.selectedCardIndex === F ? -1 : F
                          })), te(b);
                        },
                        onKeyDown: (ge) => xe(ge, F),
                        onFocus: () => {
                          y.isCardNavigationActive || N((ge) => ge.focusedCardIndex !== F || ge.focusArea !== "cards" ? {
                            ...ge,
                            focusedCardIndex: F,
                            focusArea: "cards",
                            focusedCardElementIndex: 0,
                            cardElements: []
                          } : ge);
                        }
                      }
                    )
                  }
                )
              },
              `card-${F}`
            );
          })
        }
      ),
      i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i }),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: X,
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
  return v === "hybrid" ? /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${L || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      mr,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: C,
        orientation: g,
        id: w,
        disabled: V,
        selectedIndex: f,
        onTabChange: m,
        className: "aria-tabs-datagrid-adaptive__table--hybrid",
        actions: l,
        forceActionsAbove: d,
        ...k
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] }) : /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--table ${L || ""}`, children: [
    s && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__top-actions aria-tabs-datagrid-adaptive__top-actions--above-table", children: s }),
    /* @__PURE__ */ n.jsx(
      mr,
      {
        tabPanels: c,
        dataConfig: u,
        ariaLabel: p,
        ariaDescription: C,
        orientation: g,
        id: w,
        disabled: V,
        selectedIndex: f,
        onTabChange: m,
        actions: l,
        forceActionsAbove: d,
        ...k
      }
    ),
    i && /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid-adaptive__bottom-actions", children: i })
  ] });
}, gs = (e) => {
  const t = pr.find((r) => r.value === e);
  return t ? t.icon : null;
}, zc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => gs(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Wc = (e) => Jr(e, [
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
]), Oc = {
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
  booleanRenderer: (e) => gs(e),
  getDataId: (e) => `financial-${e.id}`
}, Uc = (e) => Jr(e, [
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
]), Gc = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: zc,
    createTabs: Wc
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Oc,
    createTabs: Uc
  }
}, La = (e, t) => {
  const r = Gc[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, bs = [
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
], Vc = [
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
], Yc = [
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
], qc = [
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
], Ea = [
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
], Aa = [
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
], Ma = [
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
], Kc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Zc = () => [
  {
    id: "patients",
    label: "Patients",
    data: bs,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ds,
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
    data: Vc,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      us,
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
    data: Yc,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      hs,
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
    data: qc,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      fs,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Jc = () => {
  const [e, t] = we("healthcare"), r = Re(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Sc,
      tabPanels: Zc(),
      data: bs
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...La("ecommerce", Ea),
      data: Ea
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...La("financial", Aa),
      data: Aa
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Kc,
      tabPanels: Jr(Ma, [
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
      data: Ma
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
        Ge,
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
      mr,
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
}, vm = Jc, xs = (e) => /* @__PURE__ */ n.jsx(Oa, { ...e }), _m = ({
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
  search: u,
  account: f,
  organisation: m,
  logo: p,
  className: C,
  ...g
}) => {
  const w = {
    service: d,
    navigation: c,
    search: u,
    account: f,
    organisation: m,
    logo: p,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(is, { ...s }),
    /* @__PURE__ */ n.jsx(qa, { ...w }),
    /* @__PURE__ */ n.jsx(xs, { className: C, ...g, children: /* @__PURE__ */ n.jsx(Ua, { size: o, children: /* @__PURE__ */ n.jsx(Ct, { children: /* @__PURE__ */ n.jsxs(Kt, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(bt, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Ka, { ...l })
  ] });
}, km = ({
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
  serviceHref: u,
  logo: f,
  className: m,
  ...p
}) => {
  const C = {
    service: {
      text: c,
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
    /* @__PURE__ */ n.jsx(is, { ...s }),
    /* @__PURE__ */ n.jsx(qa, { ...C }),
    /* @__PURE__ */ n.jsxs(xs, { className: m, ...p, children: [
      d && /* @__PURE__ */ n.jsx(cr, { ...d }),
      /* @__PURE__ */ n.jsx(Ua, { size: o, children: /* @__PURE__ */ n.jsx(Ct, { children: /* @__PURE__ */ n.jsxs(Kt, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(bt, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Ka, { ...l })
  ] });
}, ys = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = ee("nhsuk-back-link", a), d = ee("nhsuk-back-link__link"), c = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
ys.displayName = "ForwardLink";
const Ft = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function $a() {
  return typeof window > "u" ? Ft.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function vs() {
  const [e, t] = ce.useState($a());
  ce.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t($a());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = ce.useCallback((s) => e >= Ft[s], [e]), a = ce.useCallback((s) => e < Ft[s], [e]), o = ce.useCallback((s, i) => e >= Ft[s] && e < Ft[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: Ft
  };
}
function wm(e) {
  const { width: t, values: r } = vs();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function Xc(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = ce.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = ce.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return ce.useEffect(() => {
    if (!t || typeof window > "u") return;
    const d = new URLSearchParams(window.location.search);
    o ? d.set(r, String(o)) : d.delete(r), d.set(a, i ? "1" : "0");
    const c = `${window.location.pathname}?${d.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", c);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Qc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" }) }), ed = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" }) });
function td(e) {
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
    backLabel: u = "Back",
    nextLabel: f = "Next",
    isLoading: m = !1,
    emptyState: p,
    a11y: C,
    className: g,
    getId: w = (K) => K.id,
    orientation: V = "vertical",
    autoEnableThirdColumn: L = !0,
    onDrillChange: k,
    navigationInstructions: v = "Use arrow keys to navigate, Enter to open.",
    initialFocus: E = "first",
    skipFocusOnSelect: _ = !1,
    skipAnnouncements: H = !1,
    onFocusChange: M,
    syncUrl: D = !1,
    urlParamSelected: x = "nsv",
    urlParamDrill: R = "nsvDrill",
    urlSyncDebounceMs: J = 0,
    lazySecondary: de = !1,
    navFooter: q,
    collapsibleNav: I = !1,
    navInitiallyCollapsed: y = !1,
    onNavCollapseChange: N,
    collapseToggleLabelShow: ue = "Show navigation",
    collapseToggleLabelHide: z = "Hide navigation",
    collapseToggleIconShow: j,
    collapseToggleIconHide: re,
    persistNavCollapsed: $,
    navCollapsedStorageKey: te = "nsvCollapsed",
    navCollapsedUrlParam: A = "nsvCollapsed",
    autoContentHeader: oe,
    contentHeaderLevel: X = 2,
    renderContentHeader: G,
    contentSubheader: Y,
    secondarySubheader: U
  } = e, { up: ae } = vs(), [pe, W] = ce.useState(!1);
  ce.useEffect(() => {
    W(!0);
  }, []);
  const je = pe && ae("medium"), fe = pe && ae("xlarge");
  let be;
  d ? be = d : je ? be = "two-column" : be = "list", !d && L && l && fe && (be = "three-column");
  const he = Xc({
    enabled: D,
    paramSelected: x,
    paramDrill: R
  }), [xe, Ee] = ce.useState(
    () => he.selectedId !== void 0 ? he.selectedId : a
  ), Fe = r !== void 0 ? r : xe, Ne = t.find((K) => w(K) === Fe), T = ce.useRef(null), b = ce.useRef(null), F = ce.useRef(null), Z = ce.useRef(null), [h, S] = ce.useState(() => ({ contentIndex: 0, secondaryIndex: 0 })), [O, P] = ce.useState(() => "nav"), [B, Q] = ce.useState(0), ve = () => [Z.current, b.current, F.current].filter(Boolean), ge = (K) => {
    const le = ve(), se = Math.max(0, Math.min(K, le.length - 1));
    le[se]?.focus(), Q(se);
  }, ye = ce.useCallback((K) => K ? Array.from(K.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((se) => !se.hasAttribute("disabled") && se.tabIndex !== -1 && se.offsetParent !== null) : [], []), ke = ce.useCallback((K) => {
    const le = ye(b.current);
    if (!le.length) {
      b.current?.focus();
      return;
    }
    const se = Math.max(0, Math.min(K, le.length - 1)), me = le[se];
    me.focus(), setTimeout(() => {
      document.activeElement !== me && (me.focus(), setTimeout(() => {
        document.activeElement !== me && me.click();
      }, 10));
    }, 10), S((Pe) => ({ ...Pe, contentIndex: se }));
    const Be = (Pe) => {
      Pe.key === "Escape" && (Pe.preventDefault(), Pe.stopPropagation(), b.current?.focus(), me.removeEventListener("keydown", Be));
    };
    le.forEach((Pe) => {
      const Me = Pe._escapeHandler;
      Me && Pe.removeEventListener("keydown", Me);
    }), me._escapeHandler = Be, me.addEventListener("keydown", Be);
  }, [ye]), ie = ce.useCallback((K) => {
    const le = ye(F.current);
    if (!le.length) {
      F.current?.focus();
      return;
    }
    const se = Math.max(0, Math.min(K, le.length - 1));
    le[se].focus(), S((Be) => ({ ...Be, secondaryIndex: se }));
    const me = (Be) => {
      Be.key === "Escape" && (Be.preventDefault(), Be.stopPropagation(), F.current?.focus(), le[se].removeEventListener("keydown", me));
    };
    le.forEach((Be) => Be.removeEventListener("keydown", me)), le[se].addEventListener("keydown", me);
  }, [ye]), Se = (K) => {
    if (K.defaultPrevented) return;
    const le = K.key, se = K.target, me = !!Ue.current && Ue.current.contains(se), Be = !!b.current && b.current.contains(se), Pe = !!F.current && F.current.contains(se), Me = !!F.current, zt = se === Z.current || se === b.current || se === F.current;
    if (O === "containers" && zt) {
      if (le === "ArrowRight") {
        K.preventDefault();
        const Te = ve(), We = Math.min(Te.length - 1, B + 1);
        ge(We);
        return;
      }
      if (le === "ArrowLeft") {
        K.preventDefault();
        const Te = Math.max(0, B - 1);
        ge(Te);
        return;
      }
      if (le === "Home") {
        K.preventDefault(), ge(0);
        return;
      }
      if (le === "End") {
        K.preventDefault(), ge(ve().length - 1);
        return;
      }
      if (le === "Enter" || le === " ") {
        if (K.preventDefault(), se === Z.current) {
          if (P("nav"), Ue.current) {
            const Te = Array.from(Ue.current.querySelectorAll("[data-nav-item]"));
            (Te[Ae >= 0 ? Ae : 0] || Te[0])?.focus();
          }
        } else se === b.current ? (P("content"), ke(h.contentIndex)) : se === F.current && (P("secondary"), ie(h.secondaryIndex));
        return;
      }
      return;
    }
    if (le === "Escape") {
      if (O === "content" || O === "secondary") {
        if (Be || Pe) {
          if (K.preventDefault(), P("nav"), Ue.current) {
            const We = Array.from(Ue.current.querySelectorAll("[data-nav-item]"))[Ae >= 0 ? Ae : 0];
            setTimeout(() => We?.focus(), 10);
          }
        } else if ((se === b.current || se === F.current) && (K.preventDefault(), P("nav"), Ue.current)) {
          const We = Array.from(Ue.current.querySelectorAll("[data-nav-item]"))[Ae >= 0 ? Ae : 0];
          setTimeout(() => We?.focus(), 10);
        }
      }
      return;
    }
    if (le === "Enter" || le === " ") {
      if (se.matches('button, a, input, select, textarea, [role="button"], [role="link"], [role="tab"]'))
        return;
      if (se === b.current && O === "content") {
        K.preventDefault(), K.stopPropagation(), ye(b.current).length > 0 && setTimeout(() => {
          ke(h.contentIndex);
        }, 50);
        return;
      }
      if (se === F.current && O === "secondary") {
        K.preventDefault(), K.stopPropagation(), ye(F.current).length > 0 && setTimeout(() => {
          ie(h.secondaryIndex);
        }, 50);
        return;
      }
    }
    if (le === "ArrowRight") {
      if (me || O === "nav") {
        K.preventDefault(), P("content"), setTimeout(() => b.current?.focus(), 10);
        return;
      }
      if (Be || O === "content") {
        Me && (K.preventDefault(), P("secondary"), setTimeout(() => F.current?.focus(), 10));
        return;
      }
    }
    if (le === "ArrowLeft") {
      if (Pe || O === "secondary") {
        K.preventDefault(), P("content"), setTimeout(() => b.current?.focus(), 10);
        return;
      }
      if (Be || O === "content") {
        if (K.preventDefault(), P("nav"), Ue.current) {
          const We = Array.from(Ue.current.querySelectorAll("[data-nav-item]"))[Ae >= 0 ? Ae : 0];
          setTimeout(() => We?.focus(), 10);
        }
        return;
      }
    }
    if (le === "Home" && !me && (K.preventDefault(), P("nav"), Ue.current)) {
      const Te = Array.from(Ue.current.querySelectorAll("[data-nav-item]")), We = Te[Ae >= 0 ? Ae : 0] || Te[0];
      setTimeout(() => We?.focus(), 10);
    }
    if (le === "End") {
      const Te = Me ? F.current : b.current;
      Te && !Te.contains(se) && (K.preventDefault(), Me ? (P("secondary"), setTimeout(() => F.current?.focus(), 10)) : (P("content"), setTimeout(() => b.current?.focus(), 10)));
    }
    if (le === "ArrowDown" || le === "ArrowUp") {
      if (se === b.current && le === "ArrowDown") {
        K.preventDefault(), ye(b.current).length > 0 && ke(0);
        return;
      }
      if (se === F.current && le === "ArrowDown") {
        K.preventDefault(), ye(F.current).length > 0 && ie(0);
        return;
      }
      if (Be) {
        const Te = ye(b.current);
        if (Te.length) {
          K.preventDefault();
          const We = le === "ArrowDown" ? 1 : -1, Xe = (h.contentIndex + We + Te.length) % Te.length;
          ke(Xe);
        }
      } else if (Pe) {
        const Te = ye(F.current);
        if (Te.length) {
          K.preventDefault();
          const We = le === "ArrowDown" ? 1 : -1, Xe = (h.secondaryIndex + We + Te.length) % Te.length;
          ie(Xe);
        }
      }
    }
  }, _e = !!Ne && (be === "list" || be === "cards"), Le = ce.useMemo(() => oe === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : oe === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : oe === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: oe.mobile !== void 0 ? oe.mobile : !0,
    tablet: oe.tablet || !1,
    desktop: oe.desktop || !1
  }, [oe]), Je = pe && ae("medium") && !ae("xlarge"), qe = pe && ae("xlarge"), vt = !!l, $e = be === "three-column", [He, et] = ce.useState(!1);
  ce.useEffect(() => {
    $e && He && et(!1);
  }, [$e, He]), ce.useEffect(() => {
    He && !$e && (P("secondary"), Q(2), setTimeout(() => {
      F.current?.focus();
    }, 50));
  }, [He, $e]), ce.useEffect(() => {
    !He && !$e && O === "secondary" && (P("content"), Q(1), setTimeout(() => {
      b.current?.focus();
    }, 50));
  }, [He, $e, O]);
  const Ht = !!Ne && (_e && Le.mobile || !_e && Je && Le.tablet || !_e && qe && Le.desktop) || vt && !$e, fo = `h${X}`, Un = Ne ? ce.createElement(fo, { style: { marginLeft: _e ? 32 : 0, marginRight: _e ? 32 : 0 } }, Ne.label) : null, Xr = _e ? "mobile" : Je ? "tablet" : "desktop", mo = vt && !$e && !He, Gn = _e && Le.mobile ? /* @__PURE__ */ n.jsx(
    cr,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => It(void 0, void 0)
    }
  ) : void 0, Vn = mo ? /* @__PURE__ */ n.jsx(
    ys,
    {
      element: "button",
      text: f,
      onClick: () => {
        et(!0);
      }
    }
  ) : void 0, Yn = !$e && He ? /* @__PURE__ */ n.jsx(
    cr,
    {
      element: "button",
      text: u,
      style: { marginRight: 16 },
      onClick: () => et(!1)
    }
  ) : void 0, po = ce.useMemo(() => {
    if (!Ht || !Ne) return null;
    if (G) return G({
      item: Ne,
      detailActive: _e,
      context: Xr,
      backLink: Gn,
      defaultHeading: Un
    });
    const K = Ne && Y ? typeof Y == "function" ? Y(Ne) : Y : null;
    return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 0, flex: "1 1 auto", minWidth: 0 }, children: [
        Yn || Gn,
        /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }, children: [
          Un,
          K && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: K })
        ] })
      ] }),
      Vn && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: Vn })
    ] });
  }, [Ht, Ne, G, _e, Xr, Gn, Yn, Un, Vn, Y]);
  ce.useEffect(() => {
    if (!D) return;
    const K = be === "three-column";
    let le = !1;
    const se = () => {
      le || (he.selectedId !== Fe && he.setSelectedId(Fe), he.drilledIn !== K && he.setDrilledIn(K));
    };
    if (J && J > 0) {
      const me = setTimeout(se, J);
      return () => {
        le = !0, clearTimeout(me);
      };
    } else
      se();
  }, [D, he, Fe, be, J]), ce.useEffect(() => {
    if (!D) return;
    const K = () => {
      const le = new URLSearchParams(window.location.search), se = le.get(x);
      le.get(R), Ee(se === null ? void 0 : se);
    };
    return window.addEventListener("popstate", K), () => window.removeEventListener("popstate", K);
  }, [D, x, R, d, l]);
  const tn = ce.useRef(0), at = ce.useRef(null), It = ce.useCallback((K, le) => {
    r === void 0 && Ee(K), o?.(K, le);
  }, [r, o]);
  ce.useEffect(() => {
    if (!_ && _e && b.current) {
      const K = setTimeout(() => b.current?.focus(), 30);
      return () => clearTimeout(K);
    }
  }, [_e, Fe, _]);
  const Ue = ce.useRef(null), [Ae, Pt] = ce.useState(() => E === "first" ? 0 : -1);
  ce.useEffect(() => {
    if (!Ue.current) return;
    const K = Array.from(Ue.current.querySelectorAll("[data-nav-item]"));
    if (K.forEach((le, se) => {
      le.tabIndex = (Ae === -1 ? se === 0 && E === "first" : se === Ae) ? 0 : -1;
    }), Ae >= 0) {
      K[Ae]?.focus(), tn.current = Ae;
      const se = t[Ae];
      M?.(se ? w(se) : void 0, se, Ae);
    }
  }, [Ae, t, E, M, w]);
  const go = (K) => {
    const le = V === "vertical" ? "ArrowDown" : "ArrowRight", se = V === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (K.key === "ArrowRight" && V === "vertical") {
      K.preventDefault(), He ? (P("secondary"), setTimeout(() => {
        F.current?.focus();
      }, 10)) : (P("content"), setTimeout(() => {
        b.current?.focus();
      }, 10));
      return;
    }
    if (K.key === le)
      K.preventDefault(), Pt((me) => Math.min(t.length - 1, me + 1));
    else if (K.key === se)
      K.preventDefault(), Pt((me) => Math.max(0, me - 1));
    else if (K.key === "Home")
      K.preventDefault(), Pt(0);
    else if (K.key === "End")
      K.preventDefault(), Pt(t.length - 1);
    else if (K.key === "Enter" || K.key === " ") {
      K.preventDefault();
      const me = t[Ae];
      me && !me.disabled && It(w(me), me);
    } else if (K.key.length === 1 && /[a-z0-9]/i.test(K.key)) {
      at.current || (at.current = { buffer: "", last: 0 });
      const me = Date.now(), Be = 700, Pe = K.key.toLowerCase();
      me - at.current.last > Be ? at.current.buffer = Pe : at.current.buffer += Pe, at.current.last = me;
      let Me = at.current.buffer;
      const zt = Me.split("").every((Wt) => Wt === Me[0]), Te = t.map((Wt) => String(Wt.label || "").toLowerCase());
      let We = 0;
      Ae >= 0 && (We = (Ae + 1) % t.length);
      let Xe;
      const Zn = (Wt, Pf) => {
        const ea = t.length;
        for (let Jn = 0; Jn < ea; Jn++) {
          const Xn = (We + Jn) % ea;
          if (!t[Xn].disabled && Te[Xn].startsWith(Wt))
            return Xn;
        }
      };
      zt && Me.length > 1 ? Xe = Zn(Me[0]) : (Xe = Zn(Me), Xe === void 0 && Me.length > 1 && (Xe = Zn(Me[Me.length - 1]), Xe !== void 0 && at.current && (at.current.buffer = Me[Me.length - 1]))), Xe !== void 0 && Pt(Xe);
    }
  }, bo = ce.useMemo(() => {
    if ($ && ($ === "url" || $ === "both") && typeof window < "u") {
      const le = new URLSearchParams(window.location.search).get(A);
      if (le === "1") return !0;
      if (le === "0") return !1;
    }
    if ($ && ($ === "localStorage" || $ === "both") && typeof window < "u")
      try {
        const K = window.localStorage.getItem(te);
        if (K === "1") return !0;
        if (K === "0") return !1;
      } catch {
      }
    return y;
  }, [$, y, te, A]), [tt, xo] = ce.useState(bo);
  ce.useEffect(() => {
    N?.(tt);
  }, [tt, N]);
  const yo = ce.useCallback(() => {
    je && I && xo((K) => !K);
  }, [je, I]);
  ce.useEffect(() => {
    if ($ && !(typeof window > "u")) {
      if ($ === "localStorage" || $ === "both")
        try {
          window.localStorage.setItem(te, tt ? "1" : "0");
        } catch {
        }
      if ($ === "url" || $ === "both") {
        const K = new URLSearchParams(window.location.search);
        K.set(A, tt ? "1" : "0");
        const le = `${window.location.pathname}?${K.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", le);
      }
    }
  }, [tt, $, te, A]);
  const vo = [
    "nhs-navigation-split-view",
    c ? "nhs-navigation-split-view--animated" : "",
    _e ? "nhs-navigation-split-view--detail-active" : "",
    be === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    I && je && tt ? "nhs-navigation-split-view--nav-collapsed" : "",
    g
  ].filter(Boolean).join(" "), qn = ce.useRef(null);
  ce.useEffect(() => {
    if (!H && qn.current) {
      const K = Ne ? `Selected ${Ne.label}` : "Selection cleared";
      qn.current.textContent = K;
    }
  }, [Ne, H]), ce.useEffect(() => {
    !_e && Fe == null && Ue.current && Ue.current.querySelectorAll("[data-nav-item]")[tn.current]?.focus();
  }, [_e, Fe]);
  const _t = be === "three-column", [Kn, _o] = ce.useState(!1);
  ce.useEffect(() => {
    _t && !Kn && _o(!0);
  }, [_t, Kn]);
  const Qr = ce.useRef(_t);
  ce.useEffect(() => {
    Qr.current !== _t && (k?.(_t), Qr.current = _t);
  }, [_t, k]);
  const ko = () => {
    if (be === "cards")
      return /* @__PURE__ */ n.jsxs("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": Fe ? String(Fe) : void 0, children: [
        t.map((se) => {
          const me = w(se), Be = me === Fe;
          return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": Be, children: /* @__PURE__ */ n.jsxs(
            "button",
            {
              id: String(me),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": Be || void 0,
              "data-disabled": se.disabled || void 0,
              disabled: se.disabled,
              onClick: () => !se.disabled && It(me, se),
              children: [
                se.icon && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-icon", children: se.icon }),
                /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-label", children: se.label }),
                se.description && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__item-description", children: se.description }),
                s?.(se),
                se.badge !== void 0 && /* @__PURE__ */ n.jsx("span", { className: "nhs-navigation-split-view__badge", children: se.badge })
              ]
            }
          ) }, me);
        }),
        t.length === 0 && !m && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    const K = "nsv-nav-instructions", le = ce.useMemo(() => {
      const se = ({ item: me, idx: Be, selected: Pe }) => {
        const Me = w(me), zt = me.disabled ? {
          "aria-disabled": !0,
          tabIndex: -1
        } : {
          tabIndex: Pe ? 0 : -1,
          onClick: () => {
            tn.current = Be, It(Me, me);
          },
          onKeyDown: (Te) => {
            (Te.key === "Enter" || Te.key === " ") && (Te.preventDefault(), tn.current = Be, It(Me, me));
          }
        };
        return /* @__PURE__ */ n.jsxs(
          "li",
          {
            id: String(Me),
            "data-nav-item": !0,
            className: "nhs-navigation-split-view__list-item nhs-navigation-split-view__item-button",
            role: "option",
            "aria-selected": Pe,
            "aria-current": Pe ? "true" : void 0,
            "data-selected": Pe || void 0,
            "data-disabled": me.disabled || void 0,
            ...zt,
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
      };
      return ce.memo(se);
    }, [w, It, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: Ue,
          className: "nhs-navigation-split-view__list",
          onKeyDown: go,
          role: "listbox",
          "aria-label": "Navigation items",
          "aria-describedby": K,
          "aria-activedescendant": Fe ? String(Fe) : void 0,
          children: [
            t.map((se, me) => /* @__PURE__ */ n.jsx(le, { item: se, idx: me, selected: w(se) === Fe }, w(se))),
            t.length === 0 && !m && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: p || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx("div", { id: K, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: v })
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: T,
      className: vo,
      "aria-label": C?.rootLabel,
      "data-layout": be,
      onKeyDown: Se,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": _e || void 0, style: { transform: _e ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: Z,
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": C?.navigationLabel || "Items",
              "data-collapsed": tt || void 0,
              tabIndex: 0,
              children: [
                I && je && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: yo,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": tt ? ue : z,
                    title: tt ? ue : z,
                    children: tt ? j || /* @__PURE__ */ n.jsx(ed, {}) : re || /* @__PURE__ */ n.jsx(Qc, {})
                  }
                ) }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: ko() }),
                q && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: q })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: b,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": C?.contentLabel || "Content",
              "data-has-selection": !!Ne || void 0,
              tabIndex: 0,
              style: { display: He && !$e ? "none" : void 0 },
              children: [
                Ht && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: po }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1 }, children: i(Ne) })
              ]
            }
          ),
          be === "three-column" && (!de || Kn) || He && !$e ? /* @__PURE__ */ n.jsx(
            "div",
            {
              ref: F,
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": C?.secondaryContentLabel || "Secondary",
              tabIndex: 0,
              children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__secondary-inner", style: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }, children: [
                He && !$e && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: /* @__PURE__ */ n.jsx("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 0, flex: "1 1 auto", minWidth: 0 }, children: [
                  Yn,
                  /* @__PURE__ */ n.jsx("div", { style: { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }, children: /* @__PURE__ */ n.jsx("h2", { style: { marginLeft: 0, marginRight: 0 }, children: Ne && typeof Ne == "object" && "label" in Ne ? Ne.label : String(Ne) }) })
                ] }) }) }),
                Ne && U && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__secondary-header", style: { padding: "16px 32px", borderBottom: "1px solid var(--nsplit-divider)" }, children: typeof U == "function" ? U(Ne) : U }),
                /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(Ne) })
              ] })
            }
          ) : null
        ] }),
        /* @__PURE__ */ n.jsx("div", { ref: qn, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ n.jsx("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: _t ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
td.displayName = "NavigationSplitView";
const nd = "150ms", rd = "300ms", ad = "500ms", sd = "cubic-bezier(0.4, 0, 1, 1)", od = "cubic-bezier(0, 0, 0.2, 1)", id = "cubic-bezier(0.4, 0, 0.2, 1)", ld = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", cd = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", dd = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", ud = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", hd = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", fd = "1px", md = "2px", pd = "4px", gd = "4px", bd = "4px", xd = "2px", yd = "1px", vd = "0px", _d = "4px", kd = "8px", wd = "12px", _s = "#d8dde0", ks = "#4c6272", ws = "#d8dde0", Ss = "#aeb7bd", Cs = "#d5281b", js = "#005eb8", Ns = "#ffffff", Ts = "#212b32", Ds = "#007f3b", Is = "#330072", Rs = "#7c2855", Fs = "#d5281b", Bs = "#ffeb3b", Ls = "#fff9c4", Es = "#ffb81c", As = "#ed8b00", Ms = "#00a499", $s = "#ae2573", Hs = "#4c6272", Ps = "#768692", zs = "#aeb7bd", Ws = "#d8dde0", Os = "#f0f4f5", Sd = "#212b32", Cd = "#4c6272", jd = "#ffffff", Nd = "#212b32", Td = "#005eb8", Dd = "#7c2855", Id = "#003087", Rd = "#330072", Fd = "#ffeb3b", Bd = "#212b32", Ld = "#d8dde0", Ed = "#ffffff33", Ad = "#d5281b", Md = "#4c6272", $d = "#ffffff", Hd = "#007f3b", Pd = "#ffffff", zd = "#006530", Wd = "#004021", Od = "#004021", Ud = "#00000000", Gd = "#ffffff", Vd = "#005eb8", Yd = "#005eb8", qd = "#d9e5f2", Kd = "#c7daf0", Zd = "#005eb8", Jd = "#ffffff", Xd = "#212b32", Qd = "#d9dde0", eu = "#b3bcc2", tu = "#b3bcc2", nu = "#d5281b", ru = "#aa2016", au = "#6a140e", su = "#6a140e", ou = "#005eb8", iu = "#004b93", lu = "#002f5c", cu = "#002f5c", du = "8px", uu = "16px", hu = "12px", fu = "16px", mu = "4px", pu = "40px", gu = "4px", bu = "40px", xu = "12px", yu = "16px", vu = "32px", _u = "16px", ku = "20px", wu = "28px", Su = "9px", Cu = "2px", ju = "16px", Nu = "24px", Tu = "8px", Du = "24px", Iu = "16px", Ru = "4px", Fu = "4px", Bu = "4px", Lu = "8px", Eu = "4px", Au = "16px", Mu = "#007f3b", $u = "#006530", Hu = "#004021", Pu = "#d8dde0", zu = "#ffffff", Wu = "#768692", Ou = "#00000000", Uu = "#ffeb3b", Gu = "#00000000", Vu = "#ffffff", Yu = "#d9e5f2", qu = "#c7daf0", Ku = "#005eb8", Zu = "#005eb8", Us = "8px", Gs = "16px", Vs = "12px", Ys = "16px", Ju = "2px", Xu = "4px", Qu = "4px", eh = "600", th = "#ffffff", nh = "#d8dde0", rh = "#aeb7bd", ah = "#f0f4f5", sh = "#212b32", oh = "#212b32", ih = "#005eb8", qs = "16px", Ks = "32px", Zs = "16px", lh = "1px", ch = "4px", dh = "none", uh = "0 2px 4px rgba(0, 0, 0, 0.1)", hh = "#ffffff", fh = "#ffffff", mh = "#d8dde0", ph = "#ffffff", gh = "#4c6272", bh = "#ffeb3b", xh = "#d5281b", yh = "#aeb7bd", vh = "#212b32", _h = "#4c6272", kh = "#768692", wh = "#212b32", Sh = "#ffffff", Ch = "600", jh = "#d5281b", Nh = "600", Th = "#4c6272", Js = "4px", Xs = "40px", Qs = "40px", eo = "12px", Dh = "2px", Ih = "4px", Rh = "0px", Fh = "16px", Bh = "18px", Lh = "24px", Eh = "32px", Ah = "34px", Mh = "32px", $h = "40px", Hh = "48px", Ph = "5.4ex", zh = "7.2ex", Wh = "9ex", Oh = "10.8ex", Uh = "20ex", Gh = "38ex", Vh = "56ex", Yh = "44px", qh = "40px", Kh = "1020px", Zh = "100%", Jh = "50%", Xh = "33.333%", Qh = "25%", ef = "20%", tf = "320px", nf = "641px", rf = "1025px", af = "1280px", sf = "960px", of = "32px", lf = "16px", cf = "#d5281b", df = "#d5281b", uf = "#ffffff", hf = "#007f3b", ff = "#007f3b", mf = "#ffffff", pf = "#ffeb3b", gf = "#ffeb3b", bf = "#212b32", xf = "#005eb8", yf = "#005eb8", vf = "#ffffff", _f = "#d8dde0", kf = "#aeb7bd", wf = "#768692", Sf = "0 4px 0 #004021", Cf = "0 4px 0 #005eb8", jf = "0 4px 0 #6a140e", Nf = "0 4px 0 #ffeb3b", Tf = "none", Df = "0 2px 4px rgba(0, 0, 0, 0.1)", If = "4px", Rf = "0px", Ff = "solid", Bf = "0 0 0 3px #ffeb3b", Lf = "0 0 0 3px #ffeb3b", Ef = "none", Af = "0 1px 3px rgba(0, 0, 0, 0.12)", Mf = "0 2px 6px rgba(0, 0, 0, 0.16)", $f = "0 4px 12px rgba(0, 0, 0, 0.20)", to = "0", no = "4px", ro = "8px", ao = "16px", so = "24px", oo = "32px", io = "40px", lo = "48px", co = "56px", uo = "64px", gr = "0", br = "0", xr = "4px", yr = "4px", vr = "8px", _r = "8px", kr = "8px", wr = "16px", Sr = "16px", Cr = "24px", jr = "24px", Nr = "32px", Tr = "32px", Dr = "40px", Ir = "40px", Rr = "48px", Fr = "48px", Br = "56px", Lr = "56px", Er = "64px", gn = "Frutiger W01", bn = "Arial, Helvetica, sans-serif", xn = "sans-serif", yn = "400", vn = "600", _n = "400", kn = "12px", wn = "14px", Sn = "12pt", Cn = "14px", jn = "16px", Nn = "12pt", Tn = "16px", Dn = "19px", In = "13pt", Rn = "19px", Fn = "22px", Bn = "15pt", Ln = "22px", En = "26px", An = "17pt", Mn = "27px", $n = "36px", Hn = "20pt", Pn = "33px", zn = "48px", Wn = "24pt", Ar = "16px", Mr = "24px", st = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, ot = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, it = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, lt = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ct = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, dt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ut = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, ht = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ft = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, mt = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: nd,
  AnimationDurationNormal: rd,
  AnimationDurationSlow: ad,
  AnimationEasingBounce: ld,
  AnimationEasingEaseIn: sd,
  AnimationEasingEaseInOut: id,
  AnimationEasingEaseOut: od,
  BorderColorCard: ws,
  BorderColorCardHover: Ss,
  BorderColorDefault: _s,
  BorderColorError: Cs,
  BorderColorForm: ks,
  BorderRadiusLarge: wd,
  BorderRadiusMedium: kd,
  BorderRadiusNone: vd,
  BorderRadiusSmall: _d,
  BorderWidthCardBottom: gd,
  BorderWidthDefault: fd,
  BorderWidthFormElement: md,
  BorderWidthFormElementError: pd,
  BorderWidthPanel: bd,
  BorderWidthTableCell: yd,
  BorderWidthTableHeader: xd,
  BreakpointDesktop: rf,
  BreakpointLargeDesktop: af,
  BreakpointMobile: tf,
  BreakpointTablet: nf,
  ButtonBorderRadius: Xu,
  ButtonBorderWidth: Ju,
  ButtonPrimaryBackgroundActive: Hu,
  ButtonPrimaryBackgroundDefault: Mu,
  ButtonPrimaryBackgroundDisabled: Pu,
  ButtonPrimaryBackgroundHover: $u,
  ButtonPrimaryBorderDefault: Ou,
  ButtonPrimaryBorderFocus: Uu,
  ButtonPrimaryTextDefault: zu,
  ButtonPrimaryTextDisabled: Wu,
  ButtonSecondaryBackgroundActive: qu,
  ButtonSecondaryBackgroundDefault: Gu,
  ButtonSecondaryBackgroundHover: Yu,
  ButtonSecondaryBackgroundSolid: Vu,
  ButtonSecondaryBorderDefault: Zu,
  ButtonSecondaryTextDefault: Ku,
  ButtonShadowSize: Qu,
  ButtonSpacingPaddingHorizontalDesktop: Ys,
  ButtonSpacingPaddingHorizontalMobile: Gs,
  ButtonSpacingPaddingVerticalDesktop: Vs,
  ButtonSpacingPaddingVerticalMobile: Us,
  ButtonTypographyWeight: eh,
  CardBackgroundDefault: th,
  CardBorderBottom: ah,
  CardBorderDefault: nh,
  CardBorderHover: rh,
  CardBorderWidthBottom: ch,
  CardBorderWidthDefault: lh,
  CardShadowDefault: dh,
  CardShadowHover: uh,
  CardSpacingHeadingMargin: Zs,
  CardSpacingPaddingDesktop: Ks,
  CardSpacingPaddingMobile: qs,
  CardTextDescription: oh,
  CardTextHeading: sh,
  CardTextLink: ih,
  ColorBorderDefault: Ld,
  ColorBorderSecondary: Ed,
  ColorButtonLoginActive: lu,
  ColorButtonLoginBackground: ou,
  ColorButtonLoginHover: iu,
  ColorButtonLoginShadow: cu,
  ColorButtonPrimaryActive: Wd,
  ColorButtonPrimaryBackground: Hd,
  ColorButtonPrimaryHover: zd,
  ColorButtonPrimaryShadow: Od,
  ColorButtonPrimaryText: Pd,
  ColorButtonReverseActive: eu,
  ColorButtonReverseBackground: Jd,
  ColorButtonReverseHover: Qd,
  ColorButtonReverseShadow: tu,
  ColorButtonReverseText: Xd,
  ColorButtonSecondaryActive: Kd,
  ColorButtonSecondaryBackground: Ud,
  ColorButtonSecondaryBackgroundSolid: Gd,
  ColorButtonSecondaryBorder: Vd,
  ColorButtonSecondaryHover: qd,
  ColorButtonSecondaryShadow: Zd,
  ColorButtonSecondaryText: Yd,
  ColorButtonWarningActive: au,
  ColorButtonWarningBackground: nu,
  ColorButtonWarningHover: ru,
  ColorButtonWarningShadow: su,
  ColorError: Ad,
  ColorFocusBackground: Fd,
  ColorFocusText: Bd,
  ColorFormBackground: $d,
  ColorFormBorder: Md,
  ColorGrey1: Hs,
  ColorGrey2: Ps,
  ColorGrey3: zs,
  ColorGrey4: Ws,
  ColorGrey5: Os,
  ColorLinkActive: Id,
  ColorLinkDefault: Td,
  ColorLinkHover: Dd,
  ColorLinkVisited: Rd,
  ColorPrimaryBlack: Ts,
  ColorPrimaryBlue: js,
  ColorPrimaryDarkPink: Rs,
  ColorPrimaryGreen: Ds,
  ColorPrimaryPurple: Is,
  ColorPrimaryRed: Fs,
  ColorPrimaryWhite: Ns,
  ColorPrimaryYellow: Bs,
  ColorSecondaryAquaGreen: Ms,
  ColorSecondaryOrange: As,
  ColorSecondaryPaleYellow: Ls,
  ColorSecondaryPink: $s,
  ColorSecondaryWarmYellow: Es,
  ColorTextPrimary: Sd,
  ColorTextPrint: Nd,
  ColorTextReverse: jd,
  ColorTextSecondary: Cd,
  ComponentBlur: Fu,
  ComponentBreadcrumbChevronMarginLeft: Su,
  ComponentBreadcrumbChevronMarginRight: Cu,
  ComponentBreadcrumbPaddingTopDesktop: Nu,
  ComponentBreadcrumbPaddingTopMobile: ju,
  ComponentButtonPaddingDesktopHorizontal: fu,
  ComponentButtonPaddingDesktopVertical: hu,
  ComponentButtonPaddingMobileHorizontal: uu,
  ComponentButtonPaddingMobileVertical: du,
  ComponentButtonShadowSize: mu,
  ComponentCardHeadingMargin: _u,
  ComponentCardPaddingDesktop: vu,
  ComponentCardPaddingMobile: yu,
  ComponentDetails: Lu,
  ComponentExpander: Eu,
  ComponentFormCheckboxLabelPadding: xu,
  ComponentFormCheckboxSize: bu,
  ComponentFormInputMinHeight: pu,
  ComponentFormInputPadding: gu,
  ComponentLink: Bu,
  ComponentPagination: Au,
  ComponentPanelPaddingDesktop: wu,
  ComponentPanelPaddingMobile: ku,
  ComponentSpread: Ru,
  ComponentSummaryListCellPaddingHorizontal: Du,
  ComponentSummaryListCellPaddingVertical: Tu,
  ComponentSummaryListRowMargin: Iu,
  ElevationHigh: $f,
  ElevationLow: Af,
  ElevationMedium: Mf,
  ElevationNone: Ef,
  FocusOutlineOffset: Rf,
  FocusOutlineStyle: Ff,
  FocusOutlineWidth: If,
  FocusShadowButton: Lf,
  FocusShadowInput: Bf,
  FontFamilyBase: gn,
  FontFamilyFallback: bn,
  FontFamilyPrint: xn,
  FontLineHeightBase: Mr,
  FontSize14Mobile: kn,
  FontSize14Print: Sn,
  FontSize14Tablet: wn,
  FontSize16Mobile: Cn,
  FontSize16Print: Nn,
  FontSize16Tablet: jn,
  FontSize19Mobile: Tn,
  FontSize19Print: In,
  FontSize19Tablet: Dn,
  FontSize22Mobile: Rn,
  FontSize22Print: Bn,
  FontSize22Tablet: Fn,
  FontSize26Mobile: Ln,
  FontSize26Print: An,
  FontSize26Tablet: En,
  FontSize36Mobile: Mn,
  FontSize36Print: Hn,
  FontSize36Tablet: $n,
  FontSize48Mobile: Pn,
  FontSize48Print: Wn,
  FontSize48Tablet: zn,
  FontSizeBase: Ar,
  FontWeightBold: vn,
  FontWeightLight: _n,
  FontWeightNormal: yn,
  FormBorderRadius: Rh,
  FormBorderWidthDefault: Dh,
  FormBorderWidthError: Ih,
  FormErrorTextDefault: jh,
  FormErrorTypographyWeight: Nh,
  FormHintTextDefault: Th,
  FormInputBackgroundDefault: hh,
  FormInputBackgroundDisabled: mh,
  FormInputBackgroundError: ph,
  FormInputBackgroundFocus: fh,
  FormInputBorderDefault: gh,
  FormInputBorderDisabled: yh,
  FormInputBorderError: xh,
  FormInputBorderFocus: bh,
  FormInputTextDefault: vh,
  FormInputTextDisabled: kh,
  FormInputTextPlaceholder: _h,
  FormLabelTextDefault: wh,
  FormLabelTextRequired: Sh,
  FormLabelTypographyWeight: Ch,
  FormSpacingCheckboxLabelPadding: eo,
  FormSpacingCheckboxSize: Qs,
  FormSpacingInputMinHeight: Xs,
  FormSpacingInputPadding: Js,
  GridGutter: of,
  GridGutterHalf: lf,
  GridPageWidth: sf,
  HeadingsNhsukHeadingL: ot,
  HeadingsNhsukHeadingM: it,
  HeadingsNhsukHeadingS: lt,
  HeadingsNhsukHeadingXl: st,
  HeadingsNhsukHeadingXs: ct,
  LayoutColumnActions: ef,
  LayoutColumnFull: Zh,
  LayoutColumnHalf: Jh,
  LayoutColumnQuarter: Qh,
  LayoutColumnThird: Xh,
  LayoutContainerMaxWidth: Kh,
  ParagraphsBody: dt,
  ParagraphsBodyLarge: ut,
  ParagraphsBodySmall: ht,
  ParagraphsLedeText: ft,
  ParagraphsLedeTextSmall: mt,
  ShadowButtonDefault: Sf,
  ShadowButtonFocus: Nf,
  ShadowButtonSecondary: Cf,
  ShadowButtonWarning: jf,
  ShadowCardDefault: Tf,
  ShadowCardHover: Df,
  SizeButtonMinHeightDesktop: qh,
  SizeButtonMinHeightMobile: Yh,
  SizeFormControlLarge: Hh,
  SizeFormControlMedium: $h,
  SizeFormControlSmall: Mh,
  SizeFormInputWidth2xl: Gh,
  SizeFormInputWidth3xl: Vh,
  SizeFormInputWidthLg: Oh,
  SizeFormInputWidthMd: Wh,
  SizeFormInputWidthSm: zh,
  SizeFormInputWidthXl: Uh,
  SizeFormInputWidthXs: Ph,
  SizeIconExtraLarge: Eh,
  SizeIconLarge: Lh,
  SizeIconMedium: Bh,
  SizeIconNhsDefault: Ah,
  SizeIconSmall: Fh,
  Spacing0: to,
  Spacing1: no,
  Spacing2: ro,
  Spacing3: ao,
  Spacing4: so,
  Spacing5: oo,
  Spacing6: io,
  Spacing7: lo,
  Spacing8: co,
  Spacing9: uo,
  SpacingResponsive0Mobile: gr,
  SpacingResponsive0Tablet: br,
  SpacingResponsive1Mobile: xr,
  SpacingResponsive1Tablet: yr,
  SpacingResponsive2Mobile: vr,
  SpacingResponsive2Tablet: _r,
  SpacingResponsive3Mobile: kr,
  SpacingResponsive3Tablet: wr,
  SpacingResponsive4Mobile: Sr,
  SpacingResponsive4Tablet: Cr,
  SpacingResponsive5Mobile: jr,
  SpacingResponsive5Tablet: Nr,
  SpacingResponsive6Mobile: Tr,
  SpacingResponsive6Tablet: Dr,
  SpacingResponsive7Mobile: Ir,
  SpacingResponsive7Tablet: Rr,
  SpacingResponsive8Mobile: Fr,
  SpacingResponsive8Tablet: Br,
  SpacingResponsive9Mobile: Lr,
  SpacingResponsive9Tablet: Er,
  StateDisabledBackground: _f,
  StateDisabledBorder: kf,
  StateDisabledText: wf,
  StateErrorBackground: cf,
  StateErrorBorder: df,
  StateErrorText: uf,
  StateInfoBackground: xf,
  StateInfoBorder: yf,
  StateInfoText: vf,
  StateSuccessBackground: hf,
  StateSuccessBorder: ff,
  StateSuccessText: mf,
  StateWarningBackground: pf,
  StateWarningBorder: gf,
  StateWarningText: bf,
  TransitionButtonDefault: cd,
  TransitionButtonShadow: dd,
  TransitionCardHover: hd,
  TransitionInputFocus: ud
}, Symbol.toStringTag, { value: "Module" })), Sm = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Cm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: st.fontFamily,
      fontWeight: st.fontWeight,
      fontSize: st.fontSize.mobile,
      lineHeight: st.lineHeight,
      marginTop: st.marginTop,
      marginBottom: st.marginBottom.mobile,
      ...r
    },
    children: e
  }
), jm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: ot.fontFamily,
      fontWeight: ot.fontWeight,
      fontSize: ot.fontSize.mobile,
      lineHeight: ot.lineHeight,
      marginTop: ot.marginTop,
      marginBottom: ot.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Nm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
  {
    className: t,
    style: {
      fontFamily: it.fontFamily,
      fontWeight: it.fontWeight,
      fontSize: it.fontSize.mobile,
      lineHeight: it.lineHeight,
      marginTop: it.marginTop,
      marginBottom: it.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Tm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: lt.fontFamily,
      fontWeight: lt.fontWeight,
      fontSize: lt.fontSize.mobile,
      lineHeight: lt.lineHeight,
      marginTop: lt.marginTop,
      marginBottom: lt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Dm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: ct.fontFamily,
      fontWeight: ct.fontWeight,
      fontSize: ct.fontSize.mobile,
      lineHeight: ct.lineHeight,
      marginTop: ct.marginTop,
      marginBottom: ct.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Im = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: dt.fontFamily,
      fontWeight: dt.fontWeight,
      fontSize: dt.fontSize.mobile,
      lineHeight: dt.lineHeight,
      marginTop: dt.marginTop,
      marginBottom: dt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Rm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ut.fontFamily,
      fontWeight: ut.fontWeight,
      fontSize: ut.fontSize.mobile,
      lineHeight: ut.lineHeight,
      marginTop: ut.marginTop,
      marginBottom: ut.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Fm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ht.fontFamily,
      fontWeight: ht.fontWeight,
      fontSize: ht.fontSize.mobile,
      lineHeight: ht.lineHeight,
      marginTop: ht.marginTop,
      marginBottom: ht.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Bm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: ft.fontFamily,
      fontWeight: ft.fontWeight,
      fontSize: ft.fontSize.mobile,
      lineHeight: ft.lineHeight,
      marginTop: ft.marginTop,
      marginBottom: ft.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Lm = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: mt.fontFamily,
      fontWeight: mt.fontWeight,
      fontSize: mt.fontSize.mobile,
      lineHeight: mt.lineHeight,
      marginTop: mt.marginTop,
      marginBottom: mt.marginBottom.mobile,
      ...r
    },
    children: e
  }
), Em = () => Re(() => Hf, []), Am = () => Re(() => ({
  // Border colors
  BorderColorDefault: _s,
  BorderColorForm: ks,
  BorderColorCard: ws,
  BorderColorCardHover: Ss,
  BorderColorError: Cs,
  // Primary colors
  ColorPrimaryBlue: js,
  ColorPrimaryWhite: Ns,
  ColorPrimaryBlack: Ts,
  ColorPrimaryGreen: Ds,
  ColorPrimaryPurple: Is,
  ColorPrimaryDarkPink: Rs,
  ColorPrimaryRed: Fs,
  ColorPrimaryYellow: Bs,
  // Secondary colors
  ColorSecondaryPaleYellow: Ls,
  ColorSecondaryWarmYellow: Es,
  ColorSecondaryOrange: As,
  ColorSecondaryAquaGreen: Ms,
  ColorSecondaryPink: $s,
  // Grey scale
  ColorGrey1: Hs,
  ColorGrey2: Ps,
  ColorGrey3: zs,
  ColorGrey4: Ws,
  ColorGrey5: Os
}), []), Mm = () => Re(() => ({
  Spacing0: to,
  Spacing1: no,
  Spacing2: ro,
  Spacing3: ao,
  Spacing4: so,
  Spacing5: oo,
  Spacing6: io,
  Spacing7: lo,
  Spacing8: co,
  Spacing9: uo
}), []), $m = () => Re(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: kn,
    Size16: Cn,
    Size19: Tn,
    Size22: Rn,
    Size26: Ln,
    Size36: Mn,
    Size48: Pn
  },
  Tablet: {
    Size14: wn,
    Size16: jn,
    Size19: Dn,
    Size22: Fn,
    Size26: En,
    Size36: $n,
    Size48: zn
  },
  Print: {
    Size14: Sn,
    Size16: Nn,
    Size19: In,
    Size22: Bn,
    Size26: An,
    Size36: Hn,
    Size48: Wn
  },
  Family: {
    Base: gn,
    Fallback: bn,
    Print: xn
  },
  Weight: {
    Normal: yn,
    Bold: vn,
    Light: _n
  },
  Base: {
    Size: Ar,
    LineHeight: Mr
  },
  // Backward compatibility - individual exports
  FontFamilyBase: gn,
  FontFamilyFallback: bn,
  FontFamilyPrint: xn,
  FontWeightNormal: yn,
  FontWeightBold: vn,
  FontWeightLight: _n,
  FontSize14Mobile: kn,
  FontSize14Tablet: wn,
  FontSize14Print: Sn,
  FontSize16Mobile: Cn,
  FontSize16Tablet: jn,
  FontSize16Print: Nn,
  FontSize19Mobile: Tn,
  FontSize19Tablet: Dn,
  FontSize19Print: In,
  FontSize22Mobile: Rn,
  FontSize22Tablet: Fn,
  FontSize22Print: Bn,
  FontSize26Mobile: Ln,
  FontSize26Tablet: En,
  FontSize26Print: An,
  FontSize36Mobile: Mn,
  FontSize36Tablet: $n,
  FontSize36Print: Hn,
  FontSize48Mobile: Pn,
  FontSize48Tablet: zn,
  FontSize48Print: Wn,
  FontSizeBase: Ar,
  FontLineHeightBase: Mr
}), []), Hm = () => Re(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: gr,
    Size1: xr,
    Size2: vr,
    Size3: kr,
    Size4: Sr,
    Size5: jr,
    Size6: Tr,
    Size7: Ir,
    Size8: Fr,
    Size9: Lr
  },
  Tablet: {
    Size0: br,
    Size1: yr,
    Size2: _r,
    Size3: wr,
    Size4: Cr,
    Size5: Nr,
    Size6: Dr,
    Size7: Rr,
    Size8: Br,
    Size9: Er
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: gr,
  SpacingResponsive0Tablet: br,
  SpacingResponsive1Mobile: xr,
  SpacingResponsive1Tablet: yr,
  SpacingResponsive2Mobile: vr,
  SpacingResponsive2Tablet: _r,
  SpacingResponsive3Mobile: kr,
  SpacingResponsive3Tablet: wr,
  SpacingResponsive4Mobile: Sr,
  SpacingResponsive4Tablet: Cr,
  SpacingResponsive5Mobile: jr,
  SpacingResponsive5Tablet: Nr,
  SpacingResponsive6Mobile: Tr,
  SpacingResponsive6Tablet: Dr,
  SpacingResponsive7Mobile: Ir,
  SpacingResponsive7Tablet: Rr,
  SpacingResponsive8Mobile: Fr,
  SpacingResponsive8Tablet: Br,
  SpacingResponsive9Mobile: Lr,
  SpacingResponsive9Tablet: Er
}), []), Pm = () => Re(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Us,
  ButtonSpacingPaddingHorizontalMobile: Gs,
  ButtonSpacingPaddingVerticalDesktop: Vs,
  ButtonSpacingPaddingHorizontalDesktop: Ys,
  // Card spacing	
  CardSpacingPaddingMobile: qs,
  CardSpacingPaddingDesktop: Ks,
  CardSpacingHeadingMargin: Zs,
  // Form spacing
  FormSpacingInputPadding: Js,
  FormSpacingInputMinHeight: Xs,
  FormSpacingCheckboxSize: Qs,
  FormSpacingCheckboxLabelPadding: eo
}), []), zm = () => Re(() => ({
  xl: st,
  l: ot,
  m: it,
  s: lt,
  xs: ct
}), []), Wm = () => Re(() => ({
  body: dt,
  bodyLarge: ut,
  bodySmall: ht,
  ledeText: ft,
  ledeTextSmall: mt
}), []), Om = () => Re(() => ({
  headings: {
    xl: st,
    l: ot,
    m: it,
    s: lt,
    xs: ct
  },
  paragraphs: {
    body: dt,
    bodyLarge: ut,
    bodySmall: ht,
    ledeText: ft,
    ledeTextSmall: mt
  },
  fonts: {
    family: {
      base: gn,
      fallback: bn,
      print: xn
    },
    weight: {
      normal: yn,
      bold: vn,
      light: _n
    },
    sizes: {
      mobile: {
        size14: kn,
        size16: Cn,
        size19: Tn,
        size22: Rn,
        size26: Ln,
        size36: Mn,
        size48: Pn
      },
      tablet: {
        size14: wn,
        size16: jn,
        size19: Dn,
        size22: Fn,
        size26: En,
        size36: $n,
        size48: zn
      },
      print: {
        size14: Sn,
        size16: Nn,
        size19: In,
        size22: Bn,
        size26: An,
        size36: Hn,
        size48: Wn
      }
    }
  }
}), []);
function Um(e = {}) {
  const { initialLayout: t = void 0, fallbackLayout: r = "two-column" } = e, [a, o] = ce.useState(t), s = ce.useCallback(() => o("three-column"), []), i = ce.useCallback(() => o((d) => d === "three-column" ? r : d), [r]), l = ce.useCallback(() => o((d) => d === "three-column" ? r : "three-column"), [r]);
  return {
    forceLayout: a,
    setLayout: o,
    drillIn: s,
    drillOut: i,
    toggle: l,
    isDrilledIn: a === "three-column"
  };
}
const ho = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, Ve = {
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
function Gm(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...ho, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${Ve.normal.eot}?#iefix") format("eot"),
       url("${t}${Ve.normal.woff2}") format("woff2"),
       url("${t}${Ve.normal.woff}") format("woff"),
       url("${t}${Ve.normal.ttf}") format("truetype");
  src: url("${t}${Ve.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${Ve.bold.eot}?#iefix") format("eot"),
       url("${t}${Ve.bold.woff2}") format("woff2"),
       url("${t}${Ve.bold.woff}") format("woff"),
       url("${t}${Ve.bold.ttf}") format("truetype");
  src: url("${t}${Ve.bold.eot}");
}`), a.join(`
`);
}
function Vm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...ho, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${Ve.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ve.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${Ve.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ve.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Ym = '"Frutiger W01", Arial, Helvetica, sans-serif', qm = "Arial, Helvetica, sans-serif";
async function Km() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  $r as Account,
  Of as ActionLink,
  ym as AdaptiveDataGrid,
  nd as AnimationDurationFast,
  rd as AnimationDurationNormal,
  ad as AnimationDurationSlow,
  ld as AnimationEasingBounce,
  sd as AnimationEasingEaseIn,
  id as AnimationEasingEaseInOut,
  od as AnimationEasingEaseOut,
  us as AppointmentCard,
  fc as AriaDataGrid,
  mr as AriaTabsDataGrid,
  ym as AriaTabsDataGridAdaptive,
  cr as BackLink,
  ws as BorderColorCard,
  Ss as BorderColorCardHover,
  _s as BorderColorDefault,
  Cs as BorderColorError,
  ks as BorderColorForm,
  wd as BorderRadiusLarge,
  kd as BorderRadiusMedium,
  vd as BorderRadiusNone,
  _d as BorderRadiusSmall,
  gd as BorderWidthCardBottom,
  fd as BorderWidthDefault,
  md as BorderWidthFormElement,
  pd as BorderWidthFormElementError,
  bd as BorderWidthPanel,
  yd as BorderWidthTableCell,
  xd as BorderWidthTableHeader,
  nc as Breadcrumb,
  rf as BreakpointDesktop,
  af as BreakpointLargeDesktop,
  tf as BreakpointMobile,
  nf as BreakpointTablet,
  Ge as Button,
  Xu as ButtonBorderRadius,
  Ju as ButtonBorderWidth,
  Hu as ButtonPrimaryBackgroundActive,
  Mu as ButtonPrimaryBackgroundDefault,
  Pu as ButtonPrimaryBackgroundDisabled,
  $u as ButtonPrimaryBackgroundHover,
  Ou as ButtonPrimaryBorderDefault,
  Uu as ButtonPrimaryBorderFocus,
  zu as ButtonPrimaryTextDefault,
  Wu as ButtonPrimaryTextDisabled,
  qu as ButtonSecondaryBackgroundActive,
  Gu as ButtonSecondaryBackgroundDefault,
  Yu as ButtonSecondaryBackgroundHover,
  Vu as ButtonSecondaryBackgroundSolid,
  Zu as ButtonSecondaryBorderDefault,
  Ku as ButtonSecondaryTextDefault,
  Qu as ButtonShadowSize,
  Ys as ButtonSpacingPaddingHorizontalDesktop,
  Gs as ButtonSpacingPaddingHorizontalMobile,
  Vs as ButtonSpacingPaddingVerticalDesktop,
  Us as ButtonSpacingPaddingVerticalMobile,
  eh as ButtonTypographyWeight,
  ls as Card,
  th as CardBackgroundDefault,
  ah as CardBorderBottom,
  nh as CardBorderDefault,
  rh as CardBorderHover,
  ch as CardBorderWidthBottom,
  lh as CardBorderWidthDefault,
  om as CardGroup,
  im as CardGroupItem,
  dh as CardShadowDefault,
  uh as CardShadowHover,
  Zs as CardSpacingHeadingMargin,
  Ks as CardSpacingPaddingDesktop,
  qs as CardSpacingPaddingMobile,
  oh as CardTextDescription,
  sh as CardTextHeading,
  ih as CardTextLink,
  lm as CareCard,
  Uf as CharacterCount,
  Bo as Checkbox,
  Lo as Checkboxes,
  Ld as ColorBorderDefault,
  Ed as ColorBorderSecondary,
  lu as ColorButtonLoginActive,
  ou as ColorButtonLoginBackground,
  iu as ColorButtonLoginHover,
  cu as ColorButtonLoginShadow,
  Wd as ColorButtonPrimaryActive,
  Hd as ColorButtonPrimaryBackground,
  zd as ColorButtonPrimaryHover,
  Od as ColorButtonPrimaryShadow,
  Pd as ColorButtonPrimaryText,
  eu as ColorButtonReverseActive,
  Jd as ColorButtonReverseBackground,
  Qd as ColorButtonReverseHover,
  tu as ColorButtonReverseShadow,
  Xd as ColorButtonReverseText,
  Kd as ColorButtonSecondaryActive,
  Ud as ColorButtonSecondaryBackground,
  Gd as ColorButtonSecondaryBackgroundSolid,
  Vd as ColorButtonSecondaryBorder,
  qd as ColorButtonSecondaryHover,
  Zd as ColorButtonSecondaryShadow,
  Yd as ColorButtonSecondaryText,
  au as ColorButtonWarningActive,
  nu as ColorButtonWarningBackground,
  ru as ColorButtonWarningHover,
  su as ColorButtonWarningShadow,
  Ad as ColorError,
  Fd as ColorFocusBackground,
  Bd as ColorFocusText,
  $d as ColorFormBackground,
  Md as ColorFormBorder,
  Hs as ColorGrey1,
  Ps as ColorGrey2,
  zs as ColorGrey3,
  Ws as ColorGrey4,
  Os as ColorGrey5,
  Id as ColorLinkActive,
  Td as ColorLinkDefault,
  Dd as ColorLinkHover,
  Rd as ColorLinkVisited,
  Ts as ColorPrimaryBlack,
  js as ColorPrimaryBlue,
  Rs as ColorPrimaryDarkPink,
  Ds as ColorPrimaryGreen,
  Is as ColorPrimaryPurple,
  Fs as ColorPrimaryRed,
  Ns as ColorPrimaryWhite,
  Bs as ColorPrimaryYellow,
  Ms as ColorSecondaryAquaGreen,
  As as ColorSecondaryOrange,
  Ls as ColorSecondaryPaleYellow,
  $s as ColorSecondaryPink,
  Es as ColorSecondaryWarmYellow,
  Sd as ColorTextPrimary,
  Nd as ColorTextPrint,
  jd as ColorTextReverse,
  Cd as ColorTextSecondary,
  Kt as Column,
  Fu as ComponentBlur,
  Su as ComponentBreadcrumbChevronMarginLeft,
  Cu as ComponentBreadcrumbChevronMarginRight,
  Nu as ComponentBreadcrumbPaddingTopDesktop,
  ju as ComponentBreadcrumbPaddingTopMobile,
  fu as ComponentButtonPaddingDesktopHorizontal,
  hu as ComponentButtonPaddingDesktopVertical,
  uu as ComponentButtonPaddingMobileHorizontal,
  du as ComponentButtonPaddingMobileVertical,
  mu as ComponentButtonShadowSize,
  _u as ComponentCardHeadingMargin,
  vu as ComponentCardPaddingDesktop,
  yu as ComponentCardPaddingMobile,
  Lu as ComponentDetails,
  Eu as ComponentExpander,
  xu as ComponentFormCheckboxLabelPadding,
  bu as ComponentFormCheckboxSize,
  pu as ComponentFormInputMinHeight,
  gu as ComponentFormInputPadding,
  Bu as ComponentLink,
  Au as ComponentPagination,
  wu as ComponentPanelPaddingDesktop,
  ku as ComponentPanelPaddingMobile,
  Ru as ComponentSpread,
  Du as ComponentSummaryListCellPaddingHorizontal,
  Tu as ComponentSummaryListCellPaddingVertical,
  Iu as ComponentSummaryListRowMargin,
  Oa as Container,
  sm as ContentsList,
  ho as DEFAULT_FONT_CONFIG,
  gm as DashboardSummaryGrid,
  Xf as DateInput,
  ac as Details,
  sc as DoDontList,
  $f as ElevationHigh,
  Af as ElevationLow,
  Mf as ElevationMedium,
  Ef as ElevationNone,
  sa as ErrorMessage,
  Jf as ErrorSummary,
  oc as Expander,
  Ve as FRUTIGER_FONT_FILES,
  zr as Fieldset,
  Rf as FocusOutlineOffset,
  Ff as FocusOutlineStyle,
  If as FocusOutlineWidth,
  Lf as FocusShadowButton,
  Bf as FocusShadowInput,
  gn as FontFamilyBase,
  bn as FontFamilyFallback,
  xn as FontFamilyPrint,
  Mr as FontLineHeightBase,
  kn as FontSize14Mobile,
  Sn as FontSize14Print,
  wn as FontSize14Tablet,
  Cn as FontSize16Mobile,
  Nn as FontSize16Print,
  jn as FontSize16Tablet,
  Tn as FontSize19Mobile,
  In as FontSize19Print,
  Dn as FontSize19Tablet,
  Rn as FontSize22Mobile,
  Bn as FontSize22Print,
  Fn as FontSize22Tablet,
  Ln as FontSize26Mobile,
  An as FontSize26Print,
  En as FontSize26Tablet,
  Mn as FontSize36Mobile,
  Hn as FontSize36Print,
  $n as FontSize36Tablet,
  Pn as FontSize48Mobile,
  Wn as FontSize48Print,
  zn as FontSize48Tablet,
  Ar as FontSizeBase,
  vn as FontWeightBold,
  _n as FontWeightLight,
  yn as FontWeightNormal,
  Ka as Footer,
  Rh as FormBorderRadius,
  Dh as FormBorderWidthDefault,
  Ih as FormBorderWidthError,
  jh as FormErrorTextDefault,
  Nh as FormErrorTypographyWeight,
  Th as FormHintTextDefault,
  hh as FormInputBackgroundDefault,
  mh as FormInputBackgroundDisabled,
  ph as FormInputBackgroundError,
  fh as FormInputBackgroundFocus,
  gh as FormInputBorderDefault,
  yh as FormInputBorderDisabled,
  xh as FormInputBorderError,
  bh as FormInputBorderFocus,
  vh as FormInputTextDefault,
  kh as FormInputTextDisabled,
  _h as FormInputTextPlaceholder,
  wh as FormLabelTextDefault,
  Sh as FormLabelTextRequired,
  Ch as FormLabelTypographyWeight,
  eo as FormSpacingCheckboxLabelPadding,
  Qs as FormSpacingCheckboxSize,
  Xs as FormSpacingInputMinHeight,
  Js as FormSpacingInputPadding,
  rm as GanttChart,
  dr as Grid,
  of as GridGutter,
  lf as GridGutterHalf,
  sf as GridPageWidth,
  qa as Header,
  tm as HeaderSSR,
  Ya as HeaderSearch,
  nm as HeaderStatic,
  bt as Heading,
  ot as HeadingsNhsukHeadingL,
  it as HeadingsNhsukHeadingM,
  lt as HeadingsNhsukHeadingS,
  st as HeadingsNhsukHeadingXl,
  ct as HeadingsNhsukHeadingXs,
  Uo as Hero,
  Wa as Hint,
  mm as Images,
  Hr as Input,
  cm as InsetText,
  Pr as Label,
  ef as LayoutColumnActions,
  Zh as LayoutColumnFull,
  Jh as LayoutColumnHalf,
  Qh as LayoutColumnQuarter,
  Xh as LayoutColumnThird,
  Kh as LayoutContainerMaxWidth,
  Po as List,
  Ua as MainWrapper,
  hs as MedicationCard,
  Im as NHSBodyText,
  Rm as NHSBodyTextLarge,
  Fm as NHSBodyTextSmall,
  Cm as NHSHeading1,
  jm as NHSHeading2,
  Nm as NHSHeading3,
  Tm as NHSHeading4,
  Dm as NHSHeading5,
  Bm as NHSLedeText,
  Lm as NHSLedeTextSmall,
  em as NHSThemeProvider,
  qm as NHS_FALLBACK_FONT_STACK,
  Ym as NHS_FONT_STACK,
  td as NavigationSplitView,
  _m as PageTemplate,
  am as Pagination,
  rc as Panel,
  dt as ParagraphsBody,
  ut as ParagraphsBodyLarge,
  ht as ParagraphsBodySmall,
  ft as ParagraphsLedeText,
  mt as ParagraphsLedeTextSmall,
  ds as PatientCard,
  Gf as Radios,
  ym as ResponsiveDataGrid,
  vm as ResponsiveDataGridDemo,
  Ct as Row,
  ln as Select,
  Ao as SelectOption,
  Sf as ShadowButtonDefault,
  Nf as ShadowButtonFocus,
  Cf as ShadowButtonSecondary,
  jf as ShadowButtonWarning,
  Tf as ShadowCardDefault,
  Df as ShadowCardHover,
  qh as SizeButtonMinHeightDesktop,
  Yh as SizeButtonMinHeightMobile,
  Hh as SizeFormControlLarge,
  $h as SizeFormControlMedium,
  Mh as SizeFormControlSmall,
  Gh as SizeFormInputWidth2xl,
  Vh as SizeFormInputWidth3xl,
  Oh as SizeFormInputWidthLg,
  Wh as SizeFormInputWidthMd,
  zh as SizeFormInputWidthSm,
  Uh as SizeFormInputWidthXl,
  Ph as SizeFormInputWidthXs,
  Eh as SizeIconExtraLarge,
  Lh as SizeIconLarge,
  Bh as SizeIconMedium,
  Ah as SizeIconNhsDefault,
  Fh as SizeIconSmall,
  is as SkipLink,
  pm as SlotMatrix,
  bm as SortStatusControl,
  to as Spacing0,
  no as Spacing1,
  ro as Spacing2,
  ao as Spacing3,
  so as Spacing4,
  oo as Spacing5,
  io as Spacing6,
  lo as Spacing7,
  co as Spacing8,
  uo as Spacing9,
  gr as SpacingResponsive0Mobile,
  br as SpacingResponsive0Tablet,
  xr as SpacingResponsive1Mobile,
  yr as SpacingResponsive1Tablet,
  vr as SpacingResponsive2Mobile,
  _r as SpacingResponsive2Tablet,
  kr as SpacingResponsive3Mobile,
  wr as SpacingResponsive3Tablet,
  Sr as SpacingResponsive4Mobile,
  Cr as SpacingResponsive4Tablet,
  jr as SpacingResponsive5Mobile,
  Nr as SpacingResponsive5Tablet,
  Tr as SpacingResponsive6Mobile,
  Dr as SpacingResponsive6Tablet,
  Ir as SpacingResponsive7Mobile,
  Rr as SpacingResponsive7Tablet,
  Fr as SpacingResponsive8Mobile,
  Br as SpacingResponsive8Tablet,
  Lr as SpacingResponsive9Mobile,
  Er as SpacingResponsive9Tablet,
  Vf as SpacingUtilities,
  _f as StateDisabledBackground,
  kf as StateDisabledBorder,
  wf as StateDisabledText,
  cf as StateErrorBackground,
  df as StateErrorBorder,
  uf as StateErrorText,
  xf as StateInfoBackground,
  yf as StateInfoBorder,
  vf as StateInfoText,
  hf as StateSuccessBackground,
  ff as StateSuccessBorder,
  mf as StateSuccessText,
  pf as StateWarningBackground,
  gf as StateWarningBorder,
  bf as StateWarningText,
  hc as SummaryCard,
  dm as SummaryList,
  um as Table,
  hm as Tabs,
  rt as Tag,
  ic as TaskList,
  Eo as Textarea,
  km as TransactionalPageTemplate,
  cd as TransitionButtonDefault,
  dd as TransitionButtonShadow,
  hd as TransitionCardHover,
  ud as TransitionInputFocus,
  fs as VitalsCard,
  Zf as WIDTH_FRACTIONS,
  fm as WarningCallout,
  xs as WidthContainer,
  qf as WidthUtilities,
  Km as checkFrutigerLoaded,
  Jr as createGenericTabsConfig,
  xm as createTCHTabsConfig,
  Gm as generateFrutigerFontFace,
  Sm as getResponsiveStyles,
  Yf as getSpacingClass,
  Kf as getWidthClass,
  Vm as preloadFrutigerFonts,
  Sc as tchDataConfig,
  Am as useColors,
  Pm as useComponentSpacing,
  zm as useNHSHeadings,
  Wm as useNHSParagraphs,
  Qf as useNHSTheme,
  Om as useNHSTypographySystem,
  Um as useNavigationSplitDrill,
  Xc as useNavigationSplitUrlSync,
  vs as useNhsFdpBreakpoints,
  Hm as useResponsiveSpacing,
  wm as useResponsiveValue,
  Mm as useSpacing,
  Em as useTokens,
  $m as useTypography
};
//# sourceMappingURL=index.esm.js.map
