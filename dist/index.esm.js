import * as fe from "react";
import Ie, { useState as pe, useEffect as ye, useCallback as Q, createElement as ua, useRef as xe, useMemo as ve, useContext as Ks, createContext as Zs, forwardRef as ft, useImperativeHandle as ha, useReducer as fa } from "react";
function Js(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, bt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tr;
function Xs() {
  if (Tr) return bt;
  Tr = 1;
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
  return bt.Fragment = t, bt.jsx = r, bt.jsxs = r, bt;
}
var xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function Qs() {
  return Dr || (Dr = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === v ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case k:
          return "Fragment";
        case I:
          return "Profiler";
        case w:
          return "StrictMode";
        case H:
          return "Suspense";
        case g:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof j == "object")
        switch (typeof j.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), j.$$typeof) {
          case F:
            return "Portal";
          case L:
            return (j.displayName || "Context") + ".Provider";
          case R:
            return (j._context.displayName || "Context") + ".Consumer";
          case C:
            var te = j.render;
            return j = j.displayName, j || (j = te.displayName || te.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case $:
            return te = j.displayName || null, te !== null ? te : e(j.type) || "Memo";
          case B:
            te = j._payload, j = j._init;
            try {
              return e(j(te));
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
        var te = !1;
      } catch {
        te = !0;
      }
      if (te) {
        te = console;
        var A = te.error, O = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return A.call(
          te,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t(j);
      }
    }
    function a(j) {
      if (j === k) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === B)
        return "<...>";
      try {
        var te = e(j);
        return te ? "<" + te + ">" : "<...>";
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
      if (b.call(j, "key")) {
        var te = Object.getOwnPropertyDescriptor(j, "key").get;
        if (te && te.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function l(j, te) {
      function A() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          te
        ));
      }
      A.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: A,
        configurable: !0
      });
    }
    function c() {
      var j = e(this.type);
      return X[j] || (X[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function u(j, te, A, O, Y, ce, f, T) {
      return A = ce.ref, j = {
        $$typeof: _,
        type: j,
        key: te,
        props: ce,
        _owner: Y
      }, (A !== void 0 ? A : null) !== null ? Object.defineProperty(j, "ref", {
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
    function d(j, te, A, O, Y, ce, f, T) {
      var U = te.children;
      if (U !== void 0)
        if (O)
          if (W(U)) {
            for (O = 0; O < U.length; O++)
              m(U[O]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(U);
      if (b.call(te, "key")) {
        U = e(j);
        var E = Object.keys(te).filter(function(G) {
          return G !== "key";
        });
        O = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", le[U + O] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          U,
          E,
          U
        ), le[U + O] = !0);
      }
      if (U = null, A !== void 0 && (r(A), U = "" + A), i(te) && (r(te.key), U = "" + te.key), "key" in te) {
        A = {};
        for (var z in te)
          z !== "key" && (A[z] = te[z]);
      } else A = te;
      return U && l(
        A,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), u(
        j,
        U,
        ce,
        Y,
        o(),
        A,
        f,
        T
      );
    }
    function m(j) {
      typeof j == "object" && j !== null && j.$$typeof === _ && j._store && (j._store.validated = 1);
    }
    var p = Ie, _ = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), L = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, b = Object.prototype.hasOwnProperty, W = Array.isArray, oe = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var P, X = {}, ne = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), ie = oe(a(s)), le = {};
    xt.Fragment = k, xt.jsx = function(j, te, A, O, Y) {
      var ce = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        j,
        te,
        A,
        !1,
        O,
        Y,
        ce ? Error("react-stack-top-frame") : ne,
        ce ? oe(a(j)) : ie
      );
    }, xt.jsxs = function(j, te, A, O, Y) {
      var ce = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        j,
        te,
        A,
        !0,
        O,
        Y,
        ce ? Error("react-stack-top-frame") : ne,
        ce ? oe(a(j)) : ie
      );
    };
  })()), xt;
}
var Fr;
function eo() {
  return Fr || (Fr = 1, process.env.NODE_ENV === "production" ? Ft.exports = Xs() : Ft.exports = Qs()), Ft.exports;
}
var n = eo(), Sn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Ir;
function to() {
  return Ir || (Ir = 1, (function(e) {
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
  })(Sn)), Sn.exports;
}
var no = to();
const J = /* @__PURE__ */ Js(no), hf = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = J(
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
}, lr = ({
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
      className: J(
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
          className: J("nhsuk-account__item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: ro, useCallback: et, useState: Cn } = fe;
function ao(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = Cn(!1), [m, p] = Cn(!1), [_, F] = Cn(!1), k = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), w = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", I = {
    ...u && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ..._ && { "data-focused": "true" },
    ...w && { "data-disabled": "true" }
  }, R = et(() => !w && d(!0), [w]), L = et(() => d(!1), []), C = et(() => !w && p(!0), [w]), H = et(() => {
    p(!1), d(!1);
  }, []), g = et(() => F(!0), []), $ = et(() => F(!1), []), B = et((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), S = et((h) => {
    if (l) {
      const b = h.currentTarget;
      if (b.getAttribute("data-processing") === "true") {
        h.preventDefault();
        return;
      }
      b.setAttribute("data-processing", "true"), setTimeout(() => {
        b.removeAttribute("data-processing");
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
        className: k,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...I,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (b) => {
          h.onKeyDown?.(b), B(b);
        },
        onClick: (b) => {
          h.onClick?.(b), S(b);
        },
        onMouseDown: (b) => {
          h.onMouseDown?.(b), R();
        },
        onMouseUp: (b) => {
          h.onMouseUp?.(b), L();
        },
        onMouseEnter: (b) => {
          h.onMouseEnter?.(b), C();
        },
        onMouseLeave: (b) => {
          h.onMouseLeave?.(b), H();
        },
        onFocus: (b) => {
          h.onFocus?.(b), g();
        },
        onBlur: (b) => {
          h.onBlur?.(b), $();
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
  const v = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: v.type || "button",
      disabled: v.disabled,
      className: k,
      "data-module": "nhs-button",
      ...I,
      ...l && { "data-prevent-double-click": "true" },
      ...v.disabled && { "aria-disabled": "true" },
      onKeyDown: (h) => {
        v.onKeyDown?.(h), B(h);
      },
      onClick: (h) => {
        v.onClick?.(h), S(h);
      },
      onMouseDown: (h) => {
        v.onMouseDown?.(h), R();
      },
      onMouseUp: (h) => {
        v.onMouseUp?.(h), L();
      },
      onMouseEnter: (h) => {
        v.onMouseEnter?.(h), C();
      },
      onMouseLeave: (h) => {
        v.onMouseLeave?.(h), H();
      },
      onFocus: (h) => {
        v.onFocus?.(h), g();
      },
      onBlur: (h) => {
        v.onBlur?.(h), $();
      },
      id: v.id,
      style: v.style,
      title: v.title,
      "aria-label": v["aria-label"],
      "aria-describedby": v["aria-describedby"],
      "aria-labelledby": v["aria-labelledby"],
      tabIndex: v.tabIndex,
      name: v.name,
      value: v.value,
      form: v.form,
      formAction: v.formAction,
      formEncType: v.formEncType,
      formMethod: v.formMethod,
      formNoValidate: v.formNoValidate,
      formTarget: v.formTarget,
      autoFocus: v.autoFocus,
      children: r
    }
  );
}
const De = ro(ao);
De.displayName = "Button";
const Ln = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = J(
    "nhsuk-back-link",
    a
  ), c = J(
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
}, qe = ({
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
  const d = J(
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
}, so = ({
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
  attributes: _,
  ...F
}) => {
  const [k, w] = pe(a), I = r !== void 0, R = I ? r : k;
  ye(() => {
    I || w(a);
  }, [a, I]);
  const L = (B) => {
    const S = B.target.checked;
    I || w(S), d?.(S, B);
  }, C = i ? `${e}-hint` : void 0, H = l ? `${e}-error` : void 0, g = [C, H].filter(Boolean).join(" ") || void 0, $ = J(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: $, ...F, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
    /* @__PURE__ */ n.jsx(
      "input",
      {
        className: "nhsuk-checkboxes__input",
        id: e,
        name: t || e,
        type: "checkbox",
        value: s,
        checked: R,
        disabled: o,
        onChange: L,
        onBlur: m,
        onFocus: p,
        "aria-describedby": g,
        ..._
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: C, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: H, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
so.displayName = "Checkbox";
const cr = ({
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
  inputMode: _,
  autoComplete: F,
  maxLength: k,
  minLength: w,
  pattern: I,
  step: R,
  min: L,
  max: C,
  showValueLabels: H = !1,
  showCurrentValue: g = !1,
  valueLabels: $,
  onChange: B,
  onBlur: S,
  onFocus: v,
  onKeyDown: h,
  ...b
}) => {
  const [W, oe] = pe(a || o || (r === "range" ? L || "0" : ""));
  ye(() => {
    a !== void 0 && oe(a);
  }, [a]);
  const P = (le) => {
    oe(le.target.value), B?.(le);
  }, X = r === "range", ne = J(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": X,
      [`nhsuk-input--width-${p}`]: p !== "full" && !X
    },
    m
  ), ie = X ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    H && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: $?.min || L || "0" }),
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
          inputMode: _,
          autoComplete: F,
          maxLength: k,
          minLength: w,
          pattern: I,
          step: R,
          min: L,
          max: C,
          onChange: P,
          onBlur: S,
          onFocus: v,
          onKeyDown: h,
          ...b
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: $?.max || C || "100" })
    ] }),
    !H && /* @__PURE__ */ n.jsx(
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
        inputMode: _,
        autoComplete: F,
        maxLength: k,
        minLength: w,
        pattern: I,
        step: R,
        min: L,
        max: C,
        onChange: P,
        onBlur: S,
        onFocus: v,
        onKeyDown: h,
        ...b
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      $?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: W })
    ] }) })
  ] }) : null;
  return X ? ie : /* @__PURE__ */ n.jsx(
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
      inputMode: _,
      autoComplete: F,
      maxLength: k,
      minLength: w,
      pattern: I,
      step: R,
      min: L,
      max: C,
      onChange: B,
      onBlur: S,
      onFocus: v,
      onKeyDown: h,
      ...b
    }
  );
}, dr = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = J(
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
}, ur = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = J(
    "nhsuk-fieldset",
    r
  ), i = J(
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
}, oo = ({
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
  ..._
}) => {
  const [F, k] = pe(
    e.filter((B) => B.checked).map((B) => B.value)
  ), w = r || t, I = i ? `${w}-hint` : void 0, R = l ? `${w}-error` : void 0, L = [I, R].filter(Boolean).join(" ") || void 0, C = (B, S) => {
    let v;
    S ? v = [...F, B] : v = F.filter((h) => h !== B), k(v), d?.(v);
  }, H = () => e.map((B, S) => {
    const v = `${w}-${S + 1}`, h = `${v}-conditional`, b = F.includes(B.value), W = B.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: t,
          type: "checkbox",
          value: B.value,
          checked: b,
          disabled: W,
          onChange: (oe) => C(B.value, oe.target.checked),
          "aria-describedby": B.hint ? `${v}-hint` : L,
          ...B.conditional && {
            "aria-controls": h,
            "aria-expanded": b ? "true" : "false"
          },
          ...B.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: v, children: B.text }),
      B.hint && /* @__PURE__ */ n.jsx("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint", children: B.hint }),
      B.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: J("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !b
          }),
          id: h,
          children: typeof B.conditional == "object" && B.conditional !== null && "label" in B.conditional && "id" in B.conditional && "name" in B.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            B.conditional.label && /* @__PURE__ */ n.jsx(dr, { htmlFor: B.conditional.id, children: B.conditional.label }),
            /* @__PURE__ */ n.jsx(cr, { ...B.conditional })
          ] }) : B.conditional
        }
      )
    ] }, B.value);
  }), g = J(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), $ = J("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: $, ...p, ..._, children: /* @__PURE__ */ n.jsxs(
    ur,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: L,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: I, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: R, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: g, children: H() })
      ]
    }
  ) });
};
oo.displayName = "Checkboxes";
const io = ({
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
  maxLength: _,
  minLength: F,
  wrap: k = "soft",
  resize: w = "vertical",
  autoComplete: I,
  spellCheck: R,
  onChange: L,
  onBlur: C,
  onFocus: H,
  onKeyDown: g,
  ...$
}) => {
  const B = J(
    "nhsuk-textarea",
    {
      "nhsuk-textarea--error": c,
      [`nhsuk-textarea--resize-${w}`]: w !== "vertical"
    },
    d
  );
  return /* @__PURE__ */ n.jsx(
    "textarea",
    {
      className: B,
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
      maxLength: _,
      minLength: F,
      wrap: k,
      autoComplete: I,
      spellCheck: R,
      onChange: L,
      onBlur: C,
      onFocus: H,
      onKeyDown: g,
      ...$
    }
  );
}, ma = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = J("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, ff = ({
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
  const [p, _] = pe(s), [F, k] = pe(0), [w, I] = pe(!1), [R, L] = pe(!1), C = Q((v) => r ? v.trim() === "" ? 0 : v.trim().split(/\s+/).length : v.length, [r]);
  ye(() => {
    const v = C(p), h = t || r || 0, b = h - v, W = Math.floor(h * (a / 100));
    k(b), I(v > h), L(v >= W || v > h), u && u(v, b);
  }, [p, t, r, a, C, u]);
  const H = (v) => {
    const h = v.target.value;
    _(h), d && d(v);
  }, g = () => {
    const v = t || r || 0, h = r ? "word" : "character", b = r ? "words" : "characters";
    if (!R)
      return `You can enter up to ${v} ${v === 1 ? h : b}`;
    if (w) {
      const W = Math.abs(F);
      return `You have ${W} ${W === 1 ? h : b} too many`;
    } else
      return `You have ${F} ${F === 1 ? h : b} remaining`;
  }, $ = J(
    "nhsuk-character-count",
    l
  ), B = J(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !R,
      "nhsuk-error-message": w
    },
    c?.classes
  ), S = J(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": w
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: $,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          io,
          {
            id: e,
            name: o,
            value: p,
            rows: i,
            className: S,
            onChange: H,
            "aria-describedby": `${e}-info`,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          ma,
          {
            id: `${e}-info`,
            className: B,
            children: g()
          }
        )
      ]
    }
  );
}, lo = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: o,
  ...s
}) => {
  const i = J(
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
}, co = ({
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
  children: _,
  onChange: F,
  onBlur: k,
  onFocus: w,
  ...I
}) => {
  const R = J(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), L = () => p ? p.map((C, H) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: C.value,
      disabled: C.disabled,
      selected: C.selected,
      children: C.text
    },
    `${C.value}-${H}`
  )) : null;
  return /* @__PURE__ */ n.jsx(
    "select",
    {
      className: R,
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
      onChange: F,
      onBlur: k,
      onFocus: w,
      ...I,
      children: _ || L()
    }
  );
}, pa = co;
pa.Option = lo;
const mf = ({
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
  const [_, F] = pe(t || r || ""), k = J(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), w = (I) => {
    const R = I.target.value;
    F(R), u && u(I);
  };
  return /* @__PURE__ */ n.jsx(ur, { children: /* @__PURE__ */ n.jsx("div", { className: k, ...p, children: c.map((I, R) => {
    const L = `${e}-${R}`, C = I.conditional ? `${L}-conditional` : void 0, H = _ === I.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: L,
          name: e,
          type: "radio",
          value: I.value,
          disabled: I.disabled,
          checked: H,
          "aria-describedby": o,
          onChange: w,
          onBlur: d,
          onFocus: m
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: L, children: I.text }),
      I.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: I.hint }),
      I.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: J("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !H
          }),
          id: C,
          children: typeof I.conditional == "object" && I.conditional !== null && "label" in I.conditional && "id" in I.conditional && "name" in I.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            I.conditional.label && /* @__PURE__ */ n.jsx(dr, { htmlFor: I.conditional.id, children: I.conditional.label }),
            /* @__PURE__ */ n.jsx(cr, { ...I.conditional })
          ] }) : I.conditional
        }
      )
    ] }, I.value);
  }) }) });
}, ga = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = J(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: s, style: i, ...o, children: e });
}, Et = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = J("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, hr = ({
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
  const u = J(
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
}, uo = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = Ie.Children.toArray(e)[0], s = Ie.isValidElement(o) && (o.type === Et || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(ga, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(Et, { children: e }) });
}, ho = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), u = J(
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
}, fo = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = J("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, mo = ho;
mo.Item = fo;
const pf = ({
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
}, gf = {
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
}, bf = ({
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
}, xf = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, yf = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], ba = ({
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
}, Ke = ({
  level: e,
  className: t,
  text: r,
  html: a,
  children: o,
  size: s,
  marginBottom: i,
  ...l
}) => {
  const u = e ?? ((F) => {
    switch (F) {
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
  })(s), d = J(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), m = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), p = `h${u}`, _ = i ? { ...l.style, marginBottom: i } : l.style;
  return ua(
    p,
    { className: d, ...l, style: _ },
    m
  );
}, Br = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = J("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, vf = ({
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
  const u = J(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (_) => {
    const F = _.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text;
    return _.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: _.href,
        ..._.attributes,
        children: F
      }
    ) : F;
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((_, F) => /* @__PURE__ */ n.jsx("li", { children: p(_) }, F)) })
        ] })
      ]
    }
  );
}, _f = ({
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
  })), [p, _] = pe({}), F = (P) => P % 4 === 0 && P % 100 !== 0 || P % 400 === 0, k = (P, X) => {
    const ne = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return P === 2 && F(X) ? 29 : ne[P - 1];
  }, w = (P, X, ne) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Day must be a number";
    const ie = parseInt(P, 10);
    if (ie < 1 || ie > 31) return "Day must be between 1 and 31";
    if (X && ne) {
      const le = parseInt(X, 10), j = parseInt(ne, 10);
      if (!isNaN(le) && !isNaN(j) && le >= 1 && le <= 12) {
        const te = k(le, j);
        if (ie > te)
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
          ][le - 1]} ${j} only has ${te} days`;
      }
    }
  }, I = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Month must be a number";
    const X = parseInt(P, 10);
    if (X < 1 || X > 12) return "Month must be between 1 and 12";
  }, R = (P) => {
    if (!P) return;
    if (!/^\d+$/.test(P)) return "Year must be a number";
    const X = parseInt(P, 10), ne = (/* @__PURE__ */ new Date()).getFullYear();
    if (X < 1900 || X > ne + 10)
      return `Year must be between 1900 and ${ne + 10}`;
  }, L = (P, X, ne) => {
    if (!P || !X || !ne) return;
    const ie = parseInt(P, 10), le = parseInt(X, 10), j = parseInt(ne, 10);
    if (isNaN(ie) || isNaN(le) || isNaN(j) || le < 1 || le > 12 || j < 1900) return;
    const te = k(le, j);
    ie < 1 || ie > te;
  }, C = Q((P, X) => {
    const ne = {
      ...d,
      [P]: X
    };
    m(ne), c && c(ne);
  }, [d, c]), H = Q((P) => {
    const X = d[P];
    let ne;
    if (P === "day")
      ne = w(X, d.month, d.year);
    else if (P === "month") {
      if (ne = I(X), !ne && d.day) {
        const ie = w(d.day, X, d.year);
        _((le) => ({
          ...le,
          day: ie
        }));
      }
    } else if (P === "year" && (ne = R(X), !ne && d.day && d.month)) {
      const ie = w(d.day, d.month, X);
      _((le) => ({
        ...le,
        day: ie
      }));
    }
    if (_((ie) => ({
      ...ie,
      [P]: ne
    })), d.day && d.month && d.year) {
      const ie = L(
        P === "day" ? X : d.day,
        P === "month" ? X : d.month,
        P === "year" ? X : d.year
      );
      ie && _((le) => ({
        ...le,
        day: ie
      }));
    }
  }, [d, w, I, R, L]), g = ve(() => [
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
  ], []), $ = r || g;
  let B = s?.describedBy || "";
  const S = i ? `${e}-hint` : "", v = l ? `${e}-error` : "";
  S && (B = B ? `${B} ${S}` : S), v && (B = B ? `${B} ${v}` : v);
  const h = Object.values(p).some((P) => P), b = J(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), W = J(
    "nhsuk-date-input",
    t
  ), oe = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      ma,
      {
        id: S,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      Br,
      {
        id: v,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([P, X]) => X ? /* @__PURE__ */ n.jsxs(
        Br,
        {
          id: `${e}-${P}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            X
          ]
        },
        `${P}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: W, id: e, "data-testid": "date-input", ...u, children: $.map((P) => {
      const X = P.id || `${e}-${P.name}`, ne = a ? `${a}[${P.name}]` : P.name, ie = P.label || P.name.charAt(0).toUpperCase() + P.name.slice(1), le = p[P.name], j = d[P.name] || "";
      let te = B;
      if (le) {
        const A = `${e}-${P.name}-error`;
        te = te ? `${te} ${A}` : A;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          dr,
          {
            htmlFor: X,
            className: "nhsuk-date-input__label",
            children: ie
          }
        ),
        /* @__PURE__ */ n.jsx(
          cr,
          {
            id: X,
            name: ne,
            value: j,
            className: J("nhsuk-date-input__input", P.classes, {
              "nhsuk-input--error": le
            }),
            inputMode: P.inputmode,
            autoComplete: P.autocomplete,
            pattern: P.pattern,
            "aria-describedby": te || void 0,
            hasError: !!le,
            onChange: (A) => C(P.name, A.target.value),
            onBlur: () => H(P.name)
          }
        )
      ] }, P.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: b, children: s ? /* @__PURE__ */ n.jsx(
    ur,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: B || void 0,
      children: oe()
    }
  ) : oe() });
}, xa = {
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
}, ya = Zs(xa), po = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...xa, ...t };
  return /* @__PURE__ */ n.jsx(ya.Provider, { value: r, children: e });
}, kf = () => {
  const e = Ks(ya);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function go() {
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
function bo() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = go(), document.head.appendChild(e);
}
const wf = ({ children: e, theme: t }) => (ye(() => {
  bo();
}, []), /* @__PURE__ */ n.jsx(po, { theme: t, children: e })), va = ({
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
  results: _ = [],
  formAttributes: F = {},
  inputAttributes: k = {},
  buttonAttributes: w = {},
  preventDefaultSubmit: I = !1,
  debounceMs: R = 300,
  minQueryLength: L = 1
}) => {
  const [C, H] = pe(""), [g, $] = pe(!1), B = xe(void 0), S = xe(null), v = xe(null), h = e === "controlled" && o !== void 0, b = h ? o : C, W = Q((O) => {
    B.current && clearTimeout(B.current), B.current = setTimeout(() => {
      d.onChange && O.length >= L && d.onChange(O);
    }, R);
  }, [d.onChange, R, L]), oe = Q((O) => {
    const Y = O.target.value;
    h || H(Y), e !== "form" && W(Y);
  }, [h, e, W]), P = Q((O) => {
    const Y = b.trim(), ce = {
      query: Y,
      timestamp: Date.now(),
      formData: new FormData(O.currentTarget)
    };
    e === "controlled" || e === "hybrid" && I ? (O.preventDefault(), d.onSearch && Y.length >= L && d.onSearch(ce)) : e === "hybrid" && d.onSearch && Y.length >= L && d.onSearch(ce);
  }, [e, b, d.onSearch, I, L]), X = Q(() => {
    $(!0), d.onFocus?.();
  }, [d.onFocus]), ne = Q(() => {
    $(!1), d.onBlur?.();
  }, [d.onBlur]), ie = Q(() => {
    h || H(""), d.onClear?.(), v.current?.focus();
  }, [h, d.onClear]);
  ye(() => () => {
    B.current && clearTimeout(B.current);
  }, []);
  const le = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: J("nhsuk-icon nhsuk-icon__search", {
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
  ), te = () => !b || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: ie,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), A = () => !p || !_.length || !g ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: _.map((O) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: O.href ? /* @__PURE__ */ n.jsxs("a", { href: O.href, className: "nhsuk-header__search-result-link", children: [
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
  return /* @__PURE__ */ n.jsxs("search", { className: J("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": g,
    "nhsuk-header__search--has-results": p && _.length > 0
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
        ...F,
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
                ref: v,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: b,
                onChange: oe,
                onFocus: X,
                onBlur: ne,
                disabled: u || m,
                "aria-expanded": p && _.length > 0,
                "aria-haspopup": "listbox",
                ...k
              }
            ),
            te()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || m || e !== "form" && b.length < L,
              ...w,
              children: [
                m ? j() : le(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    A()
  ] });
}, _a = ({
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
  const [m, p] = pe(!1), [_, F] = pe(!1), [k, w] = pe(i?.items?.length || 0), [I, R] = pe(!1), [L, C] = pe(!1), [H, g] = pe(!1), $ = xe(null), B = xe(null), S = xe(!1), v = xe(null), h = xe([]), b = xe(null);
  ye(() => {
    typeof window > "u" || (g(!0), R(!0));
  }, []), ye(() => {
    if (!H || !i?.items?.length) return;
    h.current = i.items;
    const f = setTimeout(() => {
      $.current && B.current && ie();
    }, 100);
    return () => clearTimeout(f);
  }, [H, i?.items]);
  const W = r.href && !t.href || r.href && r.href === t.href, oe = W ? r.href : t.href, P = J(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), X = J(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), ne = J(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), ie = Q(() => {
    if (!(typeof window > "u" || S.current) && !(!$.current || !B.current || !h.current.length)) {
      S.current = !0;
      try {
        const f = B.current, T = $.current, U = f.offsetWidth, E = T.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (E.length === 0 || U === 0) {
          S.current = !1;
          return;
        }
        const z = window.innerWidth < 768, G = z ? 16 : 32, N = G * 2, ue = U - N, se = Array.from(E).map((y) => y.offsetWidth), re = se.reduce((y, D) => y + D, 0), q = z ? 80 : 100, x = b.current !== null && b.current !== z;
        if (b.current = z, console.log("Overflow check:", {
          containerWidth: U,
          availableContainerWidth: ue,
          totalGutters: N,
          gutterSize: G,
          totalWidth: re,
          mobile: z,
          breakpointChanged: x,
          itemCount: se.length,
          measurements: se
        }), re <= ue)
          F(!1), w(h.current.length);
        else {
          const y = ue - q;
          let D = 0, M = 0;
          for (let K = 0; K < se.length; K++) {
            const ee = M + se[K];
            if (ee <= y)
              M = ee, D = K + 1;
            else
              break;
          }
          D = Math.max(1, D);
          const V = D < se.length;
          F(V), w(D);
        }
        S.current = !1;
      } catch (f) {
        console.error("Overflow detection error:", f), F(!1), w(h.current.length), S.current = !1;
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
    if (typeof window > "u" || !H) return;
    const f = () => {
      m && (p(!1), C(!1)), v.current && clearTimeout(v.current), v.current = setTimeout(() => {
        h.current.length > 0 && ie();
      }, 250);
    };
    let T = null, U = null;
    return window.matchMedia && (T = window.matchMedia("(max-width: 767px)"), U = () => {
      h.current.length > 0 && setTimeout(() => ie(), 50);
    }, T.addEventListener ? T.addEventListener("change", U) : T.addListener(U)), window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f), T && U && (T.removeEventListener ? T.removeEventListener("change", U) : T.removeListener(U)), v.current && clearTimeout(v.current);
    };
  }, [H, m, ie]), ye(() => {
    if (typeof document > "u") return;
    const f = (T) => {
      const U = T.target, E = $.current?.contains(U);
      m && !E && p(!1);
    };
    if (m)
      return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [m]);
  const le = (f) => {
    f && (f.preventDefault(), f.stopPropagation());
    const T = !m;
    p(T), T ? setTimeout(() => {
      C(!0);
    }, 50) : C(!1);
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
  ), te = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : j(), A = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, O = (f, T) => f ? T ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: T, children: f }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: f }) : null, Y = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ n.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  ), ce = (f) => {
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
        /* @__PURE__ */ n.jsxs("div", { className: X, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            oe ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: oe, children: [
              te(),
              A(),
              W && O(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              te(),
              A(),
              W && O(r.text)
            ] }),
            r.text && !W && O(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(va, { ...o }),
          /* @__PURE__ */ n.jsx(
            lr,
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
                className: J(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !I && H,
                    "nhsuk-header__navigation-container--ssr": !H
                  },
                  l
                ),
                ref: B,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: $, children: [
                  (H ? i.items.slice(0, k) : i.items).map((f, T) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: J(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": f.active || f.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !H && T >= 4
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
                          children: ce(f)
                        }
                      )
                    },
                    T
                  )),
                  H && _ && k < i.items.length && /* @__PURE__ */ n.jsx(
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
                            Y()
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
        H && i && i.items && i.items.length > 0 && m && L && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !L,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(k).map((f, T) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: J(
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
                      p(!1), C(!1);
                    },
                    children: ce(f)
                  }
                )
              },
              `overflow-${k + T}`
            )) })
          }
        )
      ]
    }
  );
}, Sf = ({
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
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, _ = J(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), F = J(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), k = J(
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
  ), I = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : w(), R = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, L = (g, $) => g ? $ ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: $, children: g }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: g }) : null, C = () => !i?.items || i.items.length === 0 ? null : i.items.map((g, $) => /* @__PURE__ */ n.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ n.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: g.href,
          ...g.attributes || {},
          children: g.text
        }
      )
    },
    g.href || $
  )), H = () => o ? /* @__PURE__ */ n.jsx(va, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: _,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: F, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              I(),
              R(),
              m && L(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              I(),
              R(),
              m && L(r.text)
            ] }),
            r.text && !m && L(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            H()
          ] }),
          c !== "organisation" && !a && H(),
          /* @__PURE__ */ n.jsx(
            lr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: k,
            id: "header-navigation",
            role: "navigation",
            "aria-label": i.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: C()
              }
            ) })
          }
        )
      ]
    }
  );
}, Cf = ({
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
  const p = r.href && !t.href || r.href && r.href === t.href, _ = p ? r.href : t.href, F = J(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), k = J(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), w = J(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), I = () => /* @__PURE__ */ n.jsxs(
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
  ), R = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : I(), L = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, C = (g, $) => g ? $ ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: $, children: g }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: g }) : null, H = (g) => {
    if (g.active || g.current) {
      const $ = g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: $ });
    }
    return g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: F,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...m,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: k, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              R(),
              L(),
              p && C(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              R(),
              L(),
              p && C(r.text)
            ] }),
            r.text && !p && C(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            lr,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
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
                className: J(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((g, $) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: J(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": g.active || g.current
                        },
                        g.className
                      ),
                      ...g.attributes || {},
                      children: /* @__PURE__ */ n.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: g.href,
                          ...g.active || g.current ? {
                            "aria-current": g.current ? "page" : "true"
                          } : {},
                          children: H(g)
                        }
                      )
                    },
                    $
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((g, $) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: J(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": g.active || g.current
                          }
                        ),
                        children: /* @__PURE__ */ n.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: g.href,
                            ...g.active || g.current ? {
                              "aria-current": g.current ? "page" : "true"
                            } : {},
                            children: H(g)
                          }
                        )
                      },
                      `overflow-${d + $}`
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
}, xo = ({
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
  ].filter(Boolean).join(" "), _ = c || e || a || o, F = () => {
    if (!e) return null;
    const k = { className: p };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...k, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...k, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...k, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...k, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...k, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...k, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...k, children: e });
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
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: _ && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          F(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && _ && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          F(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
xo.displayName = "Hero";
const ka = ({
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
      className: J("nhsuk-footer__list-item", {
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
    /* @__PURE__ */ n.jsxs("div", { className: J("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: J("nhsuk-footer", e), children: u ? (
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
function Lt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function yo(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function fr(e) {
  let t, r, a;
  e.length !== 2 ? (t = Lt, r = (l, c) => Lt(e(l), c), a = (l, c) => e(l) - c) : (t = e === Lt || e === yo ? e : vo, r = e, a = e);
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
function vo() {
  return 0;
}
function _o(e) {
  return e === null ? NaN : +e;
}
const ko = fr(Lt), wo = ko.right;
fr(_o).center;
const So = Math.sqrt(50), Co = Math.sqrt(10), jo = Math.sqrt(2);
function wa(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= So ? 10 : s >= Co ? 5 : s >= jo ? 2 : 1;
  let l, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? wa(e, t, r * 2) : [l, c, u];
}
function Rr(e, t, r) {
  return t = +t, e = +e, r = +r, wa(e, t, r)[2];
}
function Lr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? Rr(t, e, r) : Rr(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function No(e, t) {
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
function mr(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Sa(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function Ct() {
}
var kt = 0.7, Mt = 1 / kt, dt = "\\s*([+-]?\\d+)\\s*", wt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Le = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", To = /^#([0-9a-f]{3,8})$/, Do = new RegExp(`^rgb\\(${dt},${dt},${dt}\\)$`), Fo = new RegExp(`^rgb\\(${Le},${Le},${Le}\\)$`), Io = new RegExp(`^rgba\\(${dt},${dt},${dt},${wt}\\)$`), Bo = new RegExp(`^rgba\\(${Le},${Le},${Le},${wt}\\)$`), Ro = new RegExp(`^hsl\\(${wt},${Le},${Le}\\)$`), Lo = new RegExp(`^hsla\\(${wt},${Le},${Le},${wt}\\)$`), Er = {
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
mr(Ct, St, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Mr,
  // Deprecated! Use color.formatHex.
  formatHex: Mr,
  formatHex8: Eo,
  formatHsl: Mo,
  formatRgb: $r,
  toString: $r
});
function Mr() {
  return this.rgb().formatHex();
}
function Eo() {
  return this.rgb().formatHex8();
}
function Mo() {
  return Ca(this).formatHsl();
}
function $r() {
  return this.rgb().formatRgb();
}
function St(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = To.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? Ar(t) : r === 3 ? new Te(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? It(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? It(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Do.exec(e)) ? new Te(t[1], t[2], t[3], 1) : (t = Fo.exec(e)) ? new Te(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Io.exec(e)) ? It(t[1], t[2], t[3], t[4]) : (t = Bo.exec(e)) ? It(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Ro.exec(e)) ? zr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Lo.exec(e)) ? zr(t[1], t[2] / 100, t[3] / 100, t[4]) : Er.hasOwnProperty(e) ? Ar(Er[e]) : e === "transparent" ? new Te(NaN, NaN, NaN, 0) : null;
}
function Ar(e) {
  return new Te(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function It(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new Te(e, t, r, a);
}
function $o(e) {
  return e instanceof Ct || (e = St(e)), e ? (e = e.rgb(), new Te(e.r, e.g, e.b, e.opacity)) : new Te();
}
function En(e, t, r, a) {
  return arguments.length === 1 ? $o(e) : new Te(e, t, r, a ?? 1);
}
function Te(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
mr(Te, En, Sa(Ct, {
  brighter(e) {
    return e = e == null ? Mt : Math.pow(Mt, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? kt : Math.pow(kt, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Te(nt(this.r), nt(this.g), nt(this.b), $t(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Hr,
  // Deprecated! Use color.formatHex.
  formatHex: Hr,
  formatHex8: Ao,
  formatRgb: Pr,
  toString: Pr
}));
function Hr() {
  return `#${tt(this.r)}${tt(this.g)}${tt(this.b)}`;
}
function Ao() {
  return `#${tt(this.r)}${tt(this.g)}${tt(this.b)}${tt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Pr() {
  const e = $t(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${nt(this.r)}, ${nt(this.g)}, ${nt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function $t(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function nt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function tt(e) {
  return e = nt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function zr(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Be(e, t, r, a);
}
function Ca(e) {
  if (e instanceof Be) return new Be(e.h, e.s, e.l, e.opacity);
  if (e instanceof Ct || (e = St(e)), !e) return new Be();
  if (e instanceof Be) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Be(i, l, c, e.opacity);
}
function Ho(e, t, r, a) {
  return arguments.length === 1 ? Ca(e) : new Be(e, t, r, a ?? 1);
}
function Be(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
mr(Be, Ho, Sa(Ct, {
  brighter(e) {
    return e = e == null ? Mt : Math.pow(Mt, e), new Be(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? kt : Math.pow(kt, e), new Be(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new Te(
      jn(e >= 240 ? e - 240 : e + 120, o, a),
      jn(e, o, a),
      jn(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Be(Wr(this.h), Bt(this.s), Bt(this.l), $t(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = $t(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Wr(this.h)}, ${Bt(this.s) * 100}%, ${Bt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Wr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Bt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function jn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const pr = (e) => () => e;
function Po(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function zo(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function Wo(e) {
  return (e = +e) == 1 ? ja : function(t, r) {
    return r - t ? zo(t, r, e) : pr(isNaN(t) ? r : t);
  };
}
function ja(e, t) {
  var r = t - e;
  return r ? Po(e, r) : pr(isNaN(e) ? t : e);
}
const Or = (function e(t) {
  var r = Wo(t);
  function a(o, s) {
    var i = r((o = En(o)).r, (s = En(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), u = ja(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return a.gamma = e, a;
})(1);
function Oo(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function Uo(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Go(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = gr(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function Vo(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function At(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function Yo(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = gr(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var Mn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Nn = new RegExp(Mn.source, "g");
function qo(e) {
  return function() {
    return e;
  };
}
function Ko(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Zo(e, t) {
  var r = Mn.lastIndex = Nn.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = Mn.exec(e)) && (o = Nn.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: At(a, o) })), r = Nn.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? Ko(c[0].x) : qo(t) : (t = c.length, function(u) {
    for (var d = 0, m; d < t; ++d) l[(m = c[d]).i] = m.x(u);
    return l.join("");
  });
}
function gr(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? pr(t) : (r === "number" ? At : r === "string" ? (a = St(t)) ? (t = a, Or) : Zo : t instanceof St ? Or : t instanceof Date ? Vo : Uo(t) ? Oo : Array.isArray(t) ? Go : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Yo : At)(e, t);
}
function Jo(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function Xo(e) {
  return function() {
    return e;
  };
}
function Qo(e) {
  return +e;
}
var Ur = [0, 1];
function lt(e) {
  return e;
}
function $n(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : Xo(isNaN(t) ? NaN : 0.5);
}
function ei(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function ti(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = $n(o, a), s = r(i, s)) : (a = $n(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function ni(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = $n(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = wo(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function ri(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function ai() {
  var e = Ur, t = Ur, r = gr, a, o, s, i = lt, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== lt && (i = ei(e[0], e[p - 1])), l = p > 2 ? ni : ti, c = u = null, m;
  }
  function m(p) {
    return p == null || isNaN(p = +p) ? s : (c || (c = l(e.map(a), t, r)))(a(i(p)));
  }
  return m.invert = function(p) {
    return i(o((u || (u = l(t, e.map(a), At)))(p)));
  }, m.domain = function(p) {
    return arguments.length ? (e = Array.from(p, Qo), d()) : e.slice();
  }, m.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, m.rangeRound = function(p) {
    return t = Array.from(p), r = Jo, d();
  }, m.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : lt, d()) : i !== lt;
  }, m.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, m.unknown = function(p) {
    return arguments.length ? (s = p, m) : s;
  }, function(p, _) {
    return a = p, o = _, d();
  };
}
function si() {
  return ai()(lt, lt);
}
function oi(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const Tn = /* @__PURE__ */ new Date(), Dn = /* @__PURE__ */ new Date();
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
  }), r && (o.count = (s, i) => (Tn.setTime(+s), Dn.setTime(+i), e(Tn), e(Dn), Math.floor(r(Tn, Dn))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const Ht = Se(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Ht.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Se((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Ht);
Ht.range;
const Ve = 1e3, Fe = Ve * 60, Ye = Fe * 60, Ze = Ye * 24, br = Ze * 7, Gr = Ze * 30, Fn = Ze * 365, ct = Se((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Ve);
}, (e, t) => (t - e) / Ve, (e) => e.getUTCSeconds());
ct.range;
const xr = Se((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ve);
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getMinutes());
xr.range;
const ii = Se((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Fe);
}, (e, t) => (t - e) / Fe, (e) => e.getUTCMinutes());
ii.range;
const yr = Se((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Ve - e.getMinutes() * Fe);
}, (e, t) => {
  e.setTime(+e + t * Ye);
}, (e, t) => (t - e) / Ye, (e) => e.getHours());
yr.range;
const li = Se((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ye);
}, (e, t) => (t - e) / Ye, (e) => e.getUTCHours());
li.range;
const jt = Se(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Fe) / Ze,
  (e) => e.getDate() - 1
);
jt.range;
const vr = Se((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ze, (e) => e.getUTCDate() - 1);
vr.range;
const ci = Se((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Ze, (e) => Math.floor(e / Ze));
ci.range;
function at(e) {
  return Se((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Fe) / br);
}
const bn = at(0), Pt = at(1), di = at(2), ui = at(3), ut = at(4), hi = at(5), fi = at(6);
bn.range;
Pt.range;
di.range;
ui.range;
ut.range;
hi.range;
fi.range;
function st(e) {
  return Se((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / br);
}
const Na = st(0), zt = st(1), mi = st(2), pi = st(3), ht = st(4), gi = st(5), bi = st(6);
Na.range;
zt.range;
mi.range;
pi.range;
ht.range;
gi.range;
bi.range;
const _r = Se((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
_r.range;
const xi = Se((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
xi.range;
const Je = Se((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Je.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Se((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Je.range;
const rt = Se((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
rt.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Se((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
rt.range;
function yi(e, t, r, a, o, s) {
  const i = [
    [ct, 1, Ve],
    [ct, 5, 5 * Ve],
    [ct, 15, 15 * Ve],
    [ct, 30, 30 * Ve],
    [s, 1, Fe],
    [s, 5, 5 * Fe],
    [s, 15, 15 * Fe],
    [s, 30, 30 * Fe],
    [o, 1, Ye],
    [o, 3, 3 * Ye],
    [o, 6, 6 * Ye],
    [o, 12, 12 * Ye],
    [a, 1, Ze],
    [a, 2, 2 * Ze],
    [r, 1, br],
    [t, 1, Gr],
    [t, 3, 3 * Gr],
    [e, 1, Fn]
  ];
  function l(u, d, m) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const _ = m && typeof m.range == "function" ? m : c(u, d, m), F = _ ? _.range(u, +d + 1) : [];
    return p ? F.reverse() : F;
  }
  function c(u, d, m) {
    const p = Math.abs(d - u) / m, _ = fr(([, , w]) => w).right(i, p);
    if (_ === i.length) return e.every(Lr(u / Fn, d / Fn, m));
    if (_ === 0) return Ht.every(Math.max(Lr(u, d, m), 1));
    const [F, k] = i[p / i[_ - 1][2] < i[_][2] / p ? _ - 1 : _];
    return F.every(k);
  }
  return [l, c];
}
const [vi, _i] = yi(Je, _r, bn, jt, yr, xr);
function In(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function Bn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function yt(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function ki(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = vt(o), d = _t(o), m = vt(s), p = _t(s), _ = vt(i), F = _t(i), k = vt(l), w = _t(l), I = vt(c), R = _t(c), L = {
    a: ne,
    A: ie,
    b: le,
    B: j,
    c: null,
    d: Jr,
    e: Jr,
    f: Gi,
    g: tl,
    G: rl,
    H: Wi,
    I: Oi,
    j: Ui,
    L: Ta,
    m: Vi,
    M: Yi,
    p: te,
    q: A,
    Q: ea,
    s: ta,
    S: qi,
    u: Ki,
    U: Zi,
    V: Ji,
    w: Xi,
    W: Qi,
    x: null,
    X: null,
    y: el,
    Y: nl,
    Z: al,
    "%": Qr
  }, C = {
    a: O,
    A: Y,
    b: ce,
    B: f,
    c: null,
    d: Xr,
    e: Xr,
    f: ll,
    g: xl,
    G: vl,
    H: sl,
    I: ol,
    j: il,
    L: Fa,
    m: cl,
    M: dl,
    p: T,
    q: U,
    Q: ea,
    s: ta,
    S: ul,
    u: hl,
    U: fl,
    V: ml,
    w: pl,
    W: gl,
    x: null,
    X: null,
    y: bl,
    Y: yl,
    Z: _l,
    "%": Qr
  }, H = {
    a: v,
    A: h,
    b,
    B: W,
    c: oe,
    d: Kr,
    e: Kr,
    f: Ai,
    g: qr,
    G: Yr,
    H: Zr,
    I: Zr,
    j: Li,
    L: $i,
    m: Ri,
    M: Ei,
    p: S,
    q: Bi,
    Q: Pi,
    s: zi,
    S: Mi,
    u: Ni,
    U: Ti,
    V: Di,
    w: ji,
    W: Fi,
    x: P,
    X,
    y: qr,
    Y: Yr,
    Z: Ii,
    "%": Hi
  };
  L.x = g(r, L), L.X = g(a, L), L.c = g(t, L), C.x = g(r, C), C.X = g(a, C), C.c = g(t, C);
  function g(E, z) {
    return function(G) {
      var N = [], ue = -1, se = 0, re = E.length, q, x, y;
      for (G instanceof Date || (G = /* @__PURE__ */ new Date(+G)); ++ue < re; )
        E.charCodeAt(ue) === 37 && (N.push(E.slice(se, ue)), (x = Vr[q = E.charAt(++ue)]) != null ? q = E.charAt(++ue) : x = q === "e" ? " " : "0", (y = z[q]) && (q = y(G, x)), N.push(q), se = ue + 1);
      return N.push(E.slice(se, ue)), N.join("");
    };
  }
  function $(E, z) {
    return function(G) {
      var N = yt(1900, void 0, 1), ue = B(N, E, G += "", 0), se, re;
      if (ue != G.length) return null;
      if ("Q" in N) return new Date(N.Q);
      if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
      if (z && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
        if (N.V < 1 || N.V > 53) return null;
        "w" in N || (N.w = 1), "Z" in N ? (se = Bn(yt(N.y, 0, 1)), re = se.getUTCDay(), se = re > 4 || re === 0 ? zt.ceil(se) : zt(se), se = vr.offset(se, (N.V - 1) * 7), N.y = se.getUTCFullYear(), N.m = se.getUTCMonth(), N.d = se.getUTCDate() + (N.w + 6) % 7) : (se = In(yt(N.y, 0, 1)), re = se.getDay(), se = re > 4 || re === 0 ? Pt.ceil(se) : Pt(se), se = jt.offset(se, (N.V - 1) * 7), N.y = se.getFullYear(), N.m = se.getMonth(), N.d = se.getDate() + (N.w + 6) % 7);
      } else ("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), re = "Z" in N ? Bn(yt(N.y, 0, 1)).getUTCDay() : In(yt(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (re + 5) % 7 : N.w + N.U * 7 - (re + 6) % 7);
      return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, Bn(N)) : In(N);
    };
  }
  function B(E, z, G, N) {
    for (var ue = 0, se = z.length, re = G.length, q, x; ue < se; ) {
      if (N >= re) return -1;
      if (q = z.charCodeAt(ue++), q === 37) {
        if (q = z.charAt(ue++), x = H[q in Vr ? z.charAt(ue++) : q], !x || (N = x(E, G, N)) < 0) return -1;
      } else if (q != G.charCodeAt(N++))
        return -1;
    }
    return N;
  }
  function S(E, z, G) {
    var N = u.exec(z.slice(G));
    return N ? (E.p = d.get(N[0].toLowerCase()), G + N[0].length) : -1;
  }
  function v(E, z, G) {
    var N = _.exec(z.slice(G));
    return N ? (E.w = F.get(N[0].toLowerCase()), G + N[0].length) : -1;
  }
  function h(E, z, G) {
    var N = m.exec(z.slice(G));
    return N ? (E.w = p.get(N[0].toLowerCase()), G + N[0].length) : -1;
  }
  function b(E, z, G) {
    var N = I.exec(z.slice(G));
    return N ? (E.m = R.get(N[0].toLowerCase()), G + N[0].length) : -1;
  }
  function W(E, z, G) {
    var N = k.exec(z.slice(G));
    return N ? (E.m = w.get(N[0].toLowerCase()), G + N[0].length) : -1;
  }
  function oe(E, z, G) {
    return B(E, t, z, G);
  }
  function P(E, z, G) {
    return B(E, r, z, G);
  }
  function X(E, z, G) {
    return B(E, a, z, G);
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
  function te(E) {
    return o[+(E.getHours() >= 12)];
  }
  function A(E) {
    return 1 + ~~(E.getMonth() / 3);
  }
  function O(E) {
    return i[E.getUTCDay()];
  }
  function Y(E) {
    return s[E.getUTCDay()];
  }
  function ce(E) {
    return c[E.getUTCMonth()];
  }
  function f(E) {
    return l[E.getUTCMonth()];
  }
  function T(E) {
    return o[+(E.getUTCHours() >= 12)];
  }
  function U(E) {
    return 1 + ~~(E.getUTCMonth() / 3);
  }
  return {
    format: function(E) {
      var z = g(E += "", L);
      return z.toString = function() {
        return E;
      }, z;
    },
    parse: function(E) {
      var z = $(E += "", !1);
      return z.toString = function() {
        return E;
      }, z;
    },
    utcFormat: function(E) {
      var z = g(E += "", C);
      return z.toString = function() {
        return E;
      }, z;
    },
    utcParse: function(E) {
      var z = $(E += "", !0);
      return z.toString = function() {
        return E;
      }, z;
    }
  };
}
var Vr = { "-": "", _: " ", 0: "0" }, Ce = /^\s*\d+/, wi = /^%/, Si = /[\\^$*+?|[\]().{}]/g;
function ge(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Ci(e) {
  return e.replace(Si, "\\$&");
}
function vt(e) {
  return new RegExp("^(?:" + e.map(Ci).join("|") + ")", "i");
}
function _t(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function ji(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Ni(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Ti(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Di(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function Fi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function Yr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function qr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Ii(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Bi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Ri(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function Kr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Li(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Zr(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Ei(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function Mi(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function $i(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function Ai(e, t, r) {
  var a = Ce.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function Hi(e, t, r) {
  var a = wi.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function Pi(e, t, r) {
  var a = Ce.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function zi(e, t, r) {
  var a = Ce.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Jr(e, t) {
  return ge(e.getDate(), t, 2);
}
function Wi(e, t) {
  return ge(e.getHours(), t, 2);
}
function Oi(e, t) {
  return ge(e.getHours() % 12 || 12, t, 2);
}
function Ui(e, t) {
  return ge(1 + jt.count(Je(e), e), t, 3);
}
function Ta(e, t) {
  return ge(e.getMilliseconds(), t, 3);
}
function Gi(e, t) {
  return Ta(e, t) + "000";
}
function Vi(e, t) {
  return ge(e.getMonth() + 1, t, 2);
}
function Yi(e, t) {
  return ge(e.getMinutes(), t, 2);
}
function qi(e, t) {
  return ge(e.getSeconds(), t, 2);
}
function Ki(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function Zi(e, t) {
  return ge(bn.count(Je(e) - 1, e), t, 2);
}
function Da(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? ut(e) : ut.ceil(e);
}
function Ji(e, t) {
  return e = Da(e), ge(ut.count(Je(e), e) + (Je(e).getDay() === 4), t, 2);
}
function Xi(e) {
  return e.getDay();
}
function Qi(e, t) {
  return ge(Pt.count(Je(e) - 1, e), t, 2);
}
function el(e, t) {
  return ge(e.getFullYear() % 100, t, 2);
}
function tl(e, t) {
  return e = Da(e), ge(e.getFullYear() % 100, t, 2);
}
function nl(e, t) {
  return ge(e.getFullYear() % 1e4, t, 4);
}
function rl(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? ut(e) : ut.ceil(e), ge(e.getFullYear() % 1e4, t, 4);
}
function al(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + ge(t / 60 | 0, "0", 2) + ge(t % 60, "0", 2);
}
function Xr(e, t) {
  return ge(e.getUTCDate(), t, 2);
}
function sl(e, t) {
  return ge(e.getUTCHours(), t, 2);
}
function ol(e, t) {
  return ge(e.getUTCHours() % 12 || 12, t, 2);
}
function il(e, t) {
  return ge(1 + vr.count(rt(e), e), t, 3);
}
function Fa(e, t) {
  return ge(e.getUTCMilliseconds(), t, 3);
}
function ll(e, t) {
  return Fa(e, t) + "000";
}
function cl(e, t) {
  return ge(e.getUTCMonth() + 1, t, 2);
}
function dl(e, t) {
  return ge(e.getUTCMinutes(), t, 2);
}
function ul(e, t) {
  return ge(e.getUTCSeconds(), t, 2);
}
function hl(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function fl(e, t) {
  return ge(Na.count(rt(e) - 1, e), t, 2);
}
function Ia(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? ht(e) : ht.ceil(e);
}
function ml(e, t) {
  return e = Ia(e), ge(ht.count(rt(e), e) + (rt(e).getUTCDay() === 4), t, 2);
}
function pl(e) {
  return e.getUTCDay();
}
function gl(e, t) {
  return ge(zt.count(rt(e) - 1, e), t, 2);
}
function bl(e, t) {
  return ge(e.getUTCFullYear() % 100, t, 2);
}
function xl(e, t) {
  return e = Ia(e), ge(e.getUTCFullYear() % 100, t, 2);
}
function yl(e, t) {
  return ge(e.getUTCFullYear() % 1e4, t, 4);
}
function vl(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? ht(e) : ht.ceil(e), ge(e.getUTCFullYear() % 1e4, t, 4);
}
function _l() {
  return "+0000";
}
function Qr() {
  return "%";
}
function ea(e) {
  return +e;
}
function ta(e) {
  return Math.floor(+e / 1e3);
}
var ot, Ba;
kl({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function kl(e) {
  return ot = ki(e), Ba = ot.format, ot.parse, ot.utcFormat, ot.utcParse, ot;
}
function wl(e) {
  return new Date(e);
}
function Sl(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function Ra(e, t, r, a, o, s, i, l, c, u) {
  var d = si(), m = d.invert, p = d.domain, _ = u(".%L"), F = u(":%S"), k = u("%I:%M"), w = u("%I %p"), I = u("%a %d"), R = u("%b %d"), L = u("%B"), C = u("%Y");
  function H(g) {
    return (c(g) < g ? _ : l(g) < g ? F : i(g) < g ? k : s(g) < g ? w : a(g) < g ? o(g) < g ? I : R : r(g) < g ? L : C)(g);
  }
  return d.invert = function(g) {
    return new Date(m(g));
  }, d.domain = function(g) {
    return arguments.length ? p(Array.from(g, Sl)) : p().map(wl);
  }, d.ticks = function(g) {
    var $ = p();
    return e($[0], $[$.length - 1], g ?? 10);
  }, d.tickFormat = function(g, $) {
    return $ == null ? H : u($);
  }, d.nice = function(g) {
    var $ = p();
    return (!g || typeof g.range != "function") && (g = t($[0], $[$.length - 1], g ?? 10)), g ? p(oi($, g)) : d;
  }, d.copy = function() {
    return ri(d, Ra(e, t, r, a, o, s, i, l, c, u));
  }, d;
}
function Cl() {
  return No.apply(Ra(vi, _i, Je, _r, bn, jt, yr, xr, ct, Ba).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function jl({
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
  const u = xe(null), [d, m] = pe(!1), [p, _] = pe(!1), F = t(e.start), k = t(e.end), w = Math.max(k - F, 20), I = () => {
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
  }, R = e.progress ? w * e.progress / 100 : 0, L = () => {
    r?.(e);
  }, C = () => {
    a?.(e);
  }, H = (b) => {
    b.key === "Enter" ? (b.preventDefault(), L()) : b.key === " " && (b.preventDefault(), C());
  }, g = () => {
    m(!0);
  }, $ = () => {
    m(!1);
  }, B = () => {
    _(!0), l?.();
  }, S = () => {
    _(!1);
  }, v = [
    "gantt-task-bar",
    d && "gantt-task-bar--pressed",
    (p || o) && "gantt-task-bar--focused",
    e.priority && `gantt-task-bar--priority-${e.priority}`,
    o && "gantt-task-bar--selected",
    // Add task type class if available for color variants
    e.type && `gantt-task-bar--type-${e.type}`
  ].filter(Boolean).join(" "), h = {
    "--task-left": `${F}px`,
    "--task-width": `${w}px`,
    "--task-color": I(),
    left: `${F}px`,
    width: `${w}px`,
    backgroundColor: I()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": s,
      className: v,
      style: h,
      onClick: L,
      onDoubleClick: C,
      onKeyDown: H,
      onMouseDown: g,
      onMouseUp: $,
      onFocus: B,
      onBlur: S,
      "aria-label": c || `${o ? "Selected: " : ""}${e.title}: ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.priority ? `, priority ${e.priority}` : ""}${e.progress ? `, ${e.progress}% complete` : ""}`,
      "aria-describedby": `task-${e.id}-details`,
      children: [
        /* @__PURE__ */ n.jsx("span", { className: "task-title", children: e.title }),
        e.progress !== void 0 && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "task-progress",
            style: { width: `${R}px` }
          }
        ),
        /* @__PURE__ */ n.jsx("span", { id: `task-${e.id}-details`, className: "sr-only", children: `Task: ${e.title}, from ${e.start.toLocaleDateString()} to ${e.end.toLocaleDateString()}${e.progress ? `, ${e.progress}% complete` : ""}${e.priority ? `, priority: ${e.priority}` : ""}` })
      ]
    }
  );
}
function Nl({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let _ = e.getTime(); _ <= t.getTime(); _ += 864e5)
    a.push(new Date(_));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = pe(-1), c = xe(null), u = (_) => {
    if (_.key === "ArrowLeft") {
      _.preventDefault();
      const F = Math.max(0, i === -1 ? 0 : i - 1);
      l(F), p(F);
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const F = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(F), p(F);
    } else if (_.key === "ArrowDown") {
      _.preventDefault();
      const F = document.querySelector(".gantt-row .timeline-container");
      F && F.focus();
    } else if (_.key === "Home")
      _.preventDefault(), l(0), p(0);
    else if (_.key === "End") {
      _.preventDefault();
      const F = a.length - 1;
      l(F), p(F);
    }
  }, d = (_) => {
    if (_.key === "ArrowDown") {
      _.preventDefault();
      const F = document.querySelector(".gantt-row .resource-label");
      F && F.focus();
    } else if (_.key === "ArrowRight") {
      _.preventDefault();
      const F = c.current;
      F && F.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (_) => {
    const F = c.current?.querySelector(`[data-date-index="${_}"]`);
    F && F.focus();
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
            children: a.map((_, F) => {
              const k = _.getTime() === s.getTime(), w = i === F;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": F,
                  className: `date-column ${k ? "today" : ""} ${w ? "focused" : ""}`,
                  tabIndex: w ? 0 : -1,
                  role: "button",
                  "aria-label": `${_.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${k ? " (Today)" : ""}`,
                  onFocus: () => l(F),
                  onKeyDown: u,
                  children: _.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short"
                  })
                },
                F
              );
            })
          }
        )
      ]
    }
  );
}
function Tl({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = pe(!1), [u, d] = pe(-1), m = xe(null);
  ye(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
  const p = (k) => {
    if (k.key === "ArrowLeft" && k.shiftKey) {
      k.preventDefault(), k.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (k.key === "ArrowRight" && k.shiftKey) {
      k.preventDefault(), k.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (k.key) {
        case "ArrowUp":
          k.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          k.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          k.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (k.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (k.key) {
      case "ArrowLeft":
        k.preventDefault();
        const w = Math.max(0, u - 1);
        d(w), m.current?.querySelector(`[data-task-index="${w}"]`)?.focus();
        break;
      case "ArrowRight":
        k.preventDefault();
        const R = Math.min(t.length - 1, u + 1);
        d(R), m.current?.querySelector(`[data-task-index="${R}"]`)?.focus();
        break;
      case "Enter":
        k.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        k.preventDefault(), u >= 0 && o?.(t[u]);
        break;
      case "Escape":
        k.preventDefault(), c(!1), d(-1), m.current?.focus();
        break;
    }
  }, _ = (k) => {
    switch (k.key) {
      case "ArrowUp":
        k.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        k.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        k.preventDefault(), m.current?.focus();
        break;
    }
  }, F = (k) => {
    l && d(k);
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
            onKeyDown: _,
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
            children: t.map((k, w) => /* @__PURE__ */ n.jsx(
              jl,
              {
                task: k,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && u === w,
                taskIndex: w,
                tabIndex: l && u === w ? 0 : -1,
                onFocus: () => F(w)
              },
              k.id
            ))
          }
        )
      ]
    }
  );
}
function jf({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = xe(null), [l, c] = pe(800), u = ve(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const k = new Date(r);
    return isNaN(k.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : k;
  }, [r]), d = ve(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const k = new Date(a);
    return isNaN(k.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : k;
  }, [a]), m = ve(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  ye(() => {
    if (!i.current) return;
    const k = new ResizeObserver((w) => {
      const I = w[0];
      I && c(Math.max(I.contentRect.width - 220, 400));
    });
    return k.observe(i.current), () => k.disconnect();
  }, []);
  const p = ve(
    () => Cl().domain([u, d]).range([0, l]),
    [u, d, l]
  ), _ = ve(() => {
    const k = /* @__PURE__ */ new Map();
    return t.forEach((w) => {
      const I = k.get(w.resourceId) || [];
      I.push(w), k.set(w.resourceId, I);
    }), k;
  }, [t]), F = (k) => {
    if (k.target === k.currentTarget)
      switch (k.key) {
        case "ArrowDown":
          k.preventDefault();
          const w = i.current?.querySelector(".gantt-row .resource-label");
          w && w.focus();
          break;
        case "Home":
          k.preventDefault();
          const I = i.current?.querySelector(".header-resource");
          I && I.focus();
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
      onKeyDown: F,
      children: [
        /* @__PURE__ */ n.jsx(Nl, { viewStart: u, viewEnd: d, dateCount: m }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (k) => {
              k.key === "ArrowLeft" && k.altKey ? (k.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : k.key === "ArrowRight" && k.altKey ? (k.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : k.key === "ArrowUp" && k.altKey ? (k.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : k.key === "ArrowDown" && k.altKey && (k.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((k, w) => /* @__PURE__ */ n.jsx(
              Tl,
              {
                resource: k,
                tasks: _.get(k.id) || [],
                scale: p,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: w,
                dateCount: m
              },
              k.id
            ))
          }
        )
      ]
    }
  );
}
const Wt = ({
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
) }), Dl = ({
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
    (I) => Ie.isValidElement(I) && (I.type === Wt || I.type?.displayName === "BreadcrumbItem")
  ).map((I) => ({
    text: typeof I.props.children == "string" ? I.props.children : String(I.props.children),
    href: I.props.href,
    active: I.props.active,
    attributes: I.props.attributes
  })) : [], u = () => t ? c() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const w = u();
    if (w && w.length > 0) {
      const I = w.slice().reverse().find((R) => R.href && !R.active);
      if (I)
        return { href: I.href, text: I.text };
    }
    return { text: "Home" };
  }, m = u(), p = d(), _ = J(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), k = m && m.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: _,
      "aria-label": k,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          Ie.Children.map(t, (w, I) => Ie.isValidElement(w) && (w.type === Wt || w.type?.displayName === "BreadcrumbItem") ? Ie.cloneElement(w, { key: I }) : null)
        ) : (
          // Render from items array
          m?.map((w, I) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: w.active ? /* @__PURE__ */ n.jsx(
            "span",
            {
              className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
              "aria-current": "page",
              role: "text",
              ...w.attributes || {},
              children: w.text
            }
          ) : /* @__PURE__ */ n.jsx(
            "a",
            {
              className: "nhsuk-breadcrumb__link",
              href: w.href,
              role: "link",
              ...w.attributes || {},
              children: w.text
            }
          ) }, I))
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
}, Fl = Dl;
Fl.Item = Wt;
Wt.displayName = "BreadcrumbItem";
const La = ({
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
  const i = J("nhsuk-skip-link", r);
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
}, Nf = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = J("nhsuk-pagination", o);
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
}, Tf = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = J("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, Ea = Ie.forwardRef(({
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
  ].filter(Boolean).join(" "), _ = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), F = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), k = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const R = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      Ke,
      {
        level: a,
        className: F,
        children: R()
      }
    );
  }, w = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, I = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsxs("div", { className: _, children: [
          k(),
          w(),
          I()
        ] })
      ]
    }
  );
});
Ea.displayName = "Card";
const Df = ({
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
}, Ff = ({
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
}, If = ({
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
  "aria-describedby": _
}) => {
  const F = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), k = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), w = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const R = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], L = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        R,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      Ke,
      {
        level: a,
        className: k,
        children: L
      }
    );
  }, I = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: F,
      "data-testid": u,
      id: d,
      "aria-label": m,
      "aria-labelledby": p,
      "aria-describedby": _,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          w(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: I() })
      ]
    }
  );
}, Il = ({
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
  const u = J(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    Ke,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    Ke,
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
}, Bf = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = J("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Rf = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = J(
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
}, Lf = ({
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
  "data-testid": _
}) => {
  const F = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), k = J(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), w = J(m), I = (C, H) => {
    const g = J("nhsuk-table__header", {
      [`nhsuk-table__header--${C.format}`]: C.format
    }, C.classes), $ = {
      scope: "col",
      ...C.colspan && { colSpan: C.colspan },
      ...C.rowspan && { rowSpan: C.rowspan },
      ...s && { role: "columnheader" },
      ...C.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: g, ...$, children: C.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: C.html } }) : C.text }, H);
  }, R = (C, H, g) => {
    const $ = o && g, B = J(
      $ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${$ ? "header" : "cell"}--${C.format}`]: C.format
      },
      C.classes
    ), S = {
      ...$ && { scope: "row" },
      ...C.colspan && { colSpan: C.colspan },
      ...C.rowspan && { rowSpan: C.rowspan },
      ...s && {
        role: $ ? "rowheader" : "cell",
        ...C.header && { "data-label": C.header }
      },
      ...C.attributes
    }, v = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && C.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        C.header,
        " "
      ] }),
      C.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: C.html } }) : C.text
    ] }), h = $ ? "th" : "td";
    return /* @__PURE__ */ n.jsx(h, { className: B, ...S, children: v }, H);
  }, L = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: k,
      ...s && { role: "table" },
      ...p,
      ..._ && { "data-testid": _ },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: F, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((C, H) => I(C, H)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((C, H) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: C.map(
              (g, $) => R(g, $, $ === 0)
            )
          },
          H
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Il, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(Ke, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    L()
  ] }) : w ? /* @__PURE__ */ n.jsx("div", { className: w, children: L() }) : L();
}, Ef = ft(({
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
  const _ = r !== void 0, [F, k] = pe(() => t || e[0]?.id || ""), w = _ ? r : F, I = xe(null), R = xe(/* @__PURE__ */ new Map()), L = Q((v) => {
    _ || k(v), a?.(v);
  }, [_, a]), C = Q((v) => {
    o?.(v), l && L(v);
  }, [o, l, L]), H = Q((v, h) => {
    const b = e.filter((P) => !P.disabled).map((P) => P.id), W = b.indexOf(h);
    let oe = null;
    switch (v.key) {
      case "ArrowLeft":
        oe = W > 0 ? W - 1 : b.length - 1;
        break;
      case "ArrowRight":
        oe = W < b.length - 1 ? W + 1 : 0;
        break;
      case "Home":
        oe = 0;
        break;
      case "End":
        oe = b.length - 1;
        break;
      case "Escape":
        v.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (oe !== null) {
      v.preventDefault();
      const P = b[oe], X = R.current.get(P);
      X && (X.focus(), C(P));
    }
  }, [e, C, i]), g = Q((v, h) => {
    h ? R.current.set(v, h) : R.current.delete(v);
  }, []), $ = Q((v) => {
    const h = R.current.get(v);
    h && h.focus();
  }, []);
  ha(p, () => ({
    focusTab: $,
    getActiveTab: () => w,
    getTabListElement: () => I.current
  }), [$, w]);
  const B = Q((v) => {
    const h = v.relatedTarget;
    I.current?.contains(h) || s?.();
  }, [s]), S = J("nhsuk-tabs", c);
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
            ref: I,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: B,
                children: e.map((v) => {
                  const h = v.id === w, b = v.disabled, W = J("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": b
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: W, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (oe) => g(v.id, oe),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${v.id}-panel`,
                      id: `${v.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: b,
                      onClick: () => !b && L(v.id),
                      onKeyDown: (oe) => !b && H(oe, v.id),
                      onFocus: () => !b && C(v.id),
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
          const h = v.id === w;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${v.id}-tab`,
              id: `${v.id}-panel`,
              hidden: !h,
              children: v.content
            },
            v.id
          );
        })
      ]
    }
  );
}), Bl = ft(
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
Bl.displayName = "Details";
const Rl = ft(
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
    ), m = (_) => t === "cross" && !a ? `do not ${_}` : _, p = () => /* @__PURE__ */ n.jsx(
      Ke,
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
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((_, F) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            m(_.item)
          ] }, F)) }) })
        ]
      }
    );
  }
);
Rl.displayName = "DoDontList";
const Ll = ft(
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
Ll.displayName = "Expander";
const El = ft(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, m = `${t}-${u}-status`, p = !!l.href, _ = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), F = [
        l.hint && d,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        Ml,
        {
          item: l,
          itemClasses: _,
          hasLink: p,
          hintId: d,
          statusId: m,
          ariaDescribedBy: F
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
), Ml = ({
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
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(qe, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: o, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
El.displayName = "TaskList";
const Mf = ({
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
        ua(
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
}, $f = ({
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
}, $l = ({
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
    /* @__PURE__ */ n.jsx(Ke, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Af = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(uo, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    hr,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx($l, { ...o })
    },
    s
  )) }) });
}, Al = Ie.forwardRef(
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
    bordered: _ = !1,
    striped: F = !1,
    responsive: k = !1,
    tableType: w = "default"
  }, I) => {
    const R = xe(null), L = xe(null), C = xe(null);
    Ie.useImperativeHandle(I, () => R.current, []);
    const [H, g] = pe(0), [$, B] = pe(0), [S, v] = pe("headers"), [h, b] = pe("browse"), W = t.length, oe = e.length, P = ve(() => !r || r.length === 0 ? e : [...e].sort((A, O) => {
      for (const { key: Y, direction: ce } of r) {
        const f = A[Y], T = O[Y];
        if (f == null && T == null) continue;
        if (f == null) return 1;
        if (T == null) return -1;
        let U = 0;
        if (typeof f == "number" && typeof T == "number" ? U = f - T : U = String(f).localeCompare(String(T)), U !== 0)
          return ce === "asc" ? U : -U;
      }
      return 0;
    }), [e, r]), X = Q((A, O) => {
      setTimeout(() => {
        const Y = R.current?.querySelector(
          `tbody tr:nth-child(${A + 1}) td:nth-child(${O + 1})`
        );
        Y && (Y.focus(), typeof Y.scrollIntoView == "function" && Y.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ne = Q((A) => {
      setTimeout(() => {
        const O = R.current?.querySelector(`th:nth-child(${A + 1})`);
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), ie = Q((A) => {
      a?.(A);
    }, [a]), le = Q((A) => {
      s?.(A);
    }, [s]), j = Q((A) => {
      const { key: O } = A;
      switch (O) {
        case "Enter":
          if (A.preventDefault(), S === "headers" && h === "browse")
            b("navigate"), ne($);
          else if (S === "headers" && h === "navigate") {
            const Y = t[$];
            Y && ie(Y.key);
          } else S === "cells" && h === "browse" ? (b("navigate"), X(H, $)) : S === "cells" && h === "navigate" && le(H);
          break;
        case "Escape":
          A.preventDefault(), (S === "headers" && h === "navigate" || S === "cells" && h === "navigate") && b("browse");
          break;
        case "ArrowLeft":
          if (A.preventDefault(), h === "navigate" || h === "browse" && S === "headers") {
            if (S === "headers") {
              const Y = Math.max(0, $ - 1);
              B(Y), ne(Y);
            } else if (S === "cells") {
              const Y = Math.max(0, $ - 1);
              B(Y), X(H, Y);
            }
          }
          break;
        case "ArrowRight":
          if (A.preventDefault(), h === "navigate" || h === "browse" && S === "headers") {
            if (S === "headers") {
              const Y = Math.min(W - 1, $ + 1);
              B(Y), ne(Y);
            } else if (S === "cells") {
              const Y = Math.min(W - 1, $ + 1);
              B(Y), X(H, Y);
            }
          }
          break;
        case "ArrowUp":
          if (A.preventDefault(), S === "cells") {
            if (h === "browse") {
              const Y = Math.max(0, H - 1);
              g(Y), X(Y, 0), B(0);
            } else if (h === "navigate")
              if (H > 0) {
                const Y = H - 1;
                g(Y), X(Y, $);
              } else
                v("headers"), b("browse"), ne($);
          }
          break;
        case "ArrowDown":
          if (A.preventDefault(), S === "headers" && h === "browse")
            v("cells"), g(0), B(0), X(0, 0);
          else if (S === "cells") {
            const Y = oe - 1;
            if (h === "browse") {
              const ce = Math.min(Y, H + 1);
              g(ce), X(ce, 0), B(0);
            } else if (h === "navigate" && H < Y) {
              const ce = H + 1;
              g(ce), X(ce, $);
            }
          }
          break;
        case "Home":
          A.preventDefault(), S === "headers" ? (B(0), ne(0)) : S === "cells" && (A.ctrlKey ? (g(0), B(0), X(0, 0)) : (B(0), X(H, 0)));
          break;
        case "End":
          if (A.preventDefault(), S === "headers") {
            const Y = W - 1;
            B(Y), ne(Y);
          } else if (S === "cells")
            if (A.ctrlKey) {
              const Y = oe - 1, ce = W - 1;
              g(Y), B(ce), X(Y, ce);
            } else {
              const Y = W - 1;
              B(Y), X(H, Y);
            }
          break;
        case " ":
          if (A.preventDefault(), S === "headers" && h === "navigate") {
            const Y = t[$];
            Y && ie(Y.key);
          } else S === "cells" && h === "navigate" && le(H);
          break;
      }
    }, [
      S,
      h,
      $,
      H,
      W,
      oe,
      t,
      X,
      ne,
      ie,
      le
    ]);
    ye(() => {
      const A = R.current;
      if (A)
        return A.addEventListener("keydown", j), () => A.removeEventListener("keydown", j);
    }, [j]);
    const te = J(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": k,
        "nhsuk-table--bordered": _,
        "nhsuk-table--striped": F,
        "nhsuk-table--compact": w === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: R,
        className: te,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: L, role: "row", children: t.map((A, O) => {
            const Y = r?.find((T) => T.key === A.key), ce = !!Y, f = S === "headers" && $ === O;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: J("sortable-header", {
                  "sortable-header--focused": f
                }),
                role: "columnheader",
                tabIndex: f ? 0 : -1,
                onClick: () => ie(A.key),
                onKeyDown: (T) => {
                  (T.key === "Enter" || T.key === " ") && (T.preventDefault(), ie(A.key));
                },
                "aria-sort": ce ? Y?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: A.label }),
                  ce && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((T) => T.key === A.key) + 1 }),
                    /* @__PURE__ */ n.jsx(
                      "svg",
                      {
                        width: "12",
                        height: "12",
                        viewBox: "0 0 12 12",
                        fill: "currentColor",
                        className: "sort-arrow",
                        children: Y?.direction === "asc" ? /* @__PURE__ */ n.jsx("path", { d: "M6 2L2 8h8L6 2z" }) : /* @__PURE__ */ n.jsx("path", { d: "M6 10L2 4h8L6 10z" })
                      }
                    )
                  ] })
                ] })
              },
              A.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: C, className: "nhsuk-table__body", role: "rowgroup", children: P.map((A, O) => {
            const Y = o === O, ce = S === "cells" && H === O;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: J("data-row", {
                  "data-row--selected": Y,
                  "data-row--focused": ce
                }),
                "aria-selected": Y,
                children: t.map((f, T) => {
                  const U = f.tableRenderer ? f.tableRenderer(A) : f.render ? f.render(A) : A[f.key], E = S === "cells" && H === O && $ === T, z = () => typeof U == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: U ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: U ? "Yes" : "No" })
                  ] }) : String(U ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: J("data-cell", {
                        "data-cell--focused": E
                      }),
                      tabIndex: E ? 0 : -1,
                      onClick: () => le(O),
                      children: z()
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
Al.displayName = "AriaDataGrid";
const Ma = ({
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
  const m = xe(null), p = xe(null), _ = xe(null), F = Q((S, v) => {
    c || (p.current = v, S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", v));
  }, [c]), k = Q((S, v) => {
    c || p.current === v || (S.preventDefault(), S.dataTransfer.dropEffect = "move", _.current = v);
  }, [c]), w = Q((S, v) => {
    if (c) return;
    S.preventDefault();
    const h = p.current;
    if (!h || h === v) return;
    const b = e.findIndex((oe) => oe.key === h), W = e.findIndex((oe) => oe.key === v);
    if (b !== -1 && W !== -1) {
      const oe = [...e], [P] = oe.splice(b, 1);
      oe.splice(W, 0, P), r(oe);
    }
    p.current = null, _.current = null;
  }, [c, e, r]), I = Q(() => {
    p.current = null, _.current = null;
  }, []), R = Q((S) => {
    const v = t.find((h) => h.key === S);
    return v ? v.label : S;
  }, [t]), L = Q((S) => ["red", "orange", "blue", "aqua-green", "grey"][S] || "grey", []), C = Q((S) => {
    if (c) return;
    const v = e.map(
      (h) => h.key === S ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(v);
  }, [e, r, c]), H = Q((S) => {
    if (c) return;
    const v = e.filter((h) => h.key !== S);
    r(v);
  }, [e, r, c]), g = Q(() => {
    c || r([]);
  }, [r, c]), $ = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const S = e.map((v, h) => {
      const b = v.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${R(v.key)} (${b})`;
    });
    if (S.length === 1)
      return `Sorted by: ${S[0]}`;
    if (S.length === 2)
      return `Sorted by: ${S.join(" and ")}`;
    {
      const v = S.pop();
      return `Sorted by: ${S.join(", ")}, and ${v}`;
    }
  }, B = ve(() => {
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
        children: $()
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
          "aria-describedby": B,
          children: e.map((S, v) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => F(h, S.key),
              onDragOver: (h) => k(h, S.key),
              onDrop: (h) => w(h, S.key),
              onDragEnd: I,
              onClick: () => C(S.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${S.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": S.key,
              children: /* @__PURE__ */ n.jsx(
                qe,
                {
                  color: L(v),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => H(S.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${v + 1}`, children: v + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R(S.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), C(S.key);
                        },
                        disabled: c,
                        "aria-label": `Toggle sort direction for ${R(S.key)}. Currently ${S.direction === "asc" ? "ascending" : "descending"}`,
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
        De,
        {
          variant: "secondary",
          onClick: g,
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
function Hl(e, t) {
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
const An = ft(
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
      id: _,
      isLoading: F = !1,
      loadingComponent: k,
      error: w = null,
      errorComponent: I,
      "data-testid": R
    } = t, {
      dataComparator: L = (f, T) => JSON.stringify(f) === JSON.stringify(T),
      filterFunction: C = (f) => f,
      booleanRenderer: H = (f) => f ? "✓" : "✗"
    } = a || {}, g = s !== void 0, $ = s ?? 0, [B, S] = pe({
      focusArea: "tabs",
      focusedTabIndex: $,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), v = ve(() => ({
      selectedIndex: $,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [$]), [h, b] = fa(Hl, v);
    ye(() => {
      const f = h.tabLoadingStates.length, T = o.length;
      f !== T && b({ type: "ADJUST_ARRAYS", payload: { newLength: T } });
    }, [o.length]), ye(() => {
      g && b({ type: "SET_SELECTED_INDEX", payload: $ });
    }, [$, g]), ye(() => {
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
    const W = Q((f, T) => L(f, T), [L]), oe = Q((f) => {
      f >= 0 && f < o.length && !o[f].disabled && (b({ type: "SET_SELECTED_INDEX", payload: f }), S((T) => ({
        ...T,
        focusedTabIndex: f,
        focusArea: "tabs"
      })), i?.(f));
    }, [o, i]), P = Q((f) => {
      setTimeout(() => {
        const T = ne.current[f], U = T?.parentElement;
        if (T && U) {
          const E = T.offsetLeft, z = T.offsetWidth, G = U.clientWidth, N = E - G / 2 + z / 2;
          try {
            U.scrollTo({
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
          console.log("Missing elements for scroll:", { tabElement: T, tabListElement: U });
      }, 50);
    }, []), X = Q((f, T) => {
      const { key: U } = f;
      switch (U) {
        case "ArrowLeft":
          f.preventDefault();
          const E = T > 0 ? T - 1 : o.length - 1;
          oe(E), P(E), ne.current[E]?.focus();
          break;
        case "ArrowRight":
          f.preventDefault();
          const z = T < o.length - 1 ? T + 1 : 0;
          oe(z), P(z), ne.current[z]?.focus();
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
          f.preventDefault(), oe(0), P(0), ne.current[0]?.focus();
          break;
        case "End":
          f.preventDefault();
          const G = o.length - 1;
          oe(G), P(G), ne.current[G]?.focus();
          break;
        case "Enter":
        case " ":
          f.preventDefault(), oe(T);
          break;
      }
    }, [o.length, oe, P]), ne = xe([]), ie = xe([]), le = Q((f, T) => {
      const U = h.sortConfig || [], E = U.find((N) => N.key === T);
      let z;
      E ? E.direction === "asc" ? z = U.map(
        (N) => N.key === T ? { ...N, direction: "desc" } : N
      ) : z = U.filter((N) => N.key !== T) : z = [...U, { key: T, direction: "asc" }], b({
        type: "SET_SORT",
        payload: z
      }), o[f].onSort?.(T);
    }, [h.sortConfig, o]), j = Q((f) => {
      setTimeout(() => {
        const T = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${f + 1})`
        );
        T && T.focus();
      }, 0);
    }, [h.selectedIndex]), te = Q((f) => H(f), [H]), A = Q((f, T) => {
      setTimeout(() => {
        const U = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${f + 1}) td:nth-child(${T + 1})`
        );
        U && U.focus();
      }, 0);
    }, [h.selectedIndex]);
    ye(() => {
      B.isGridActive && (B.focusArea === "headers" ? setTimeout(() => {
        j(B.focusedHeaderIndex);
      }, 0) : B.focusArea === "cells" && setTimeout(() => {
        A(B.focusedRowIndex, B.focusedColumnIndex);
      }, 0));
    }, [B.focusArea, B.isGridActive, B.focusedHeaderIndex, B.focusedRowIndex, B.focusedColumnIndex, j, A]), ye(() => {
      P(h.selectedIndex);
    }, [h.selectedIndex, P]);
    const O = Q((f, T) => {
      const { key: U } = f, E = o[h.selectedIndex], z = E?.columns.length || 0;
      switch (U) {
        case "ArrowLeft":
          f.preventDefault();
          const G = Math.max(0, T - 1);
          S((re) => ({ ...re, focusedHeaderIndex: G })), j(G);
          break;
        case "ArrowRight":
          f.preventDefault();
          const N = Math.min(z - 1, T + 1);
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
          const ue = z - 1;
          S((re) => ({ ...re, focusedHeaderIndex: ue })), j(ue);
          break;
        case "Enter":
        case " ":
          f.preventDefault();
          const se = E?.columns[T]?.key;
          se && le(h.selectedIndex, se);
          break;
      }
    }, [o, h.selectedIndex, le, S, j, A, ne]), Y = Q((f, T, U) => {
      const { key: E } = f, z = o[h.selectedIndex], G = z?.data.length || 0, N = z?.columns.length || 0;
      switch (E) {
        case "ArrowUp":
          if (f.preventDefault(), T === 0)
            S((q) => ({
              ...q,
              focusArea: "headers",
              focusedHeaderIndex: U,
              isGridActive: !1
            })), j(U);
          else {
            const q = T - 1;
            S((x) => ({ ...x, focusedRowIndex: q })), A(q, U);
          }
          break;
        case "ArrowDown":
          f.preventDefault();
          const ue = Math.min(G - 1, T + 1);
          S((q) => ({ ...q, focusedRowIndex: ue })), A(ue, U);
          break;
        case "ArrowLeft":
          f.preventDefault();
          const se = Math.max(0, U - 1);
          S((q) => ({ ...q, focusedColumnIndex: se })), A(T, se);
          break;
        case "ArrowRight":
          f.preventDefault();
          const re = Math.min(N - 1, U + 1);
          S((q) => ({ ...q, focusedColumnIndex: re })), A(T, re);
          break;
        case "Home":
          f.preventDefault(), f.ctrlKey ? (S((q) => ({ ...q, focusedRowIndex: 0, focusedColumnIndex: 0 })), A(0, 0)) : (S((q) => ({ ...q, focusedColumnIndex: 0 })), A(T, 0));
          break;
        case "End":
          if (f.preventDefault(), f.ctrlKey) {
            const q = G - 1, x = N - 1;
            S((y) => ({ ...y, focusedRowIndex: q, focusedColumnIndex: x })), A(q, x);
          } else {
            const q = N - 1;
            S((x) => ({ ...x, focusedColumnIndex: q })), A(T, q);
          }
          break;
        case "Enter":
        case " ":
          if (f.preventDefault(), z && z.data[T]) {
            const q = z.data.some((D) => "ews_data" in D) ? C(z.data, h.filters) : z.data, x = h.sortConfig;
            let y = q;
            if (x && x.length > 0 && (y = [...q].sort((D, M) => {
              for (const { key: V, direction: K } of x) {
                let ee = D[V], ae = M[V];
                const Z = z.columns.find((je) => je.key === V);
                if (Z?.tableRenderer ? (ee = Z.tableRenderer(D), ae = Z.tableRenderer(M)) : Z?.render && (ee = Z.render(D), ae = Z.render(M)), ee == null && ae == null) continue;
                if (ee == null) return K === "asc" ? -1 : 1;
                if (ae == null) return K === "asc" ? 1 : -1;
                let he = 0;
                if (typeof ee == "number" && typeof ae == "number" ? he = ee - ae : he = String(ee).localeCompare(String(ae), void 0, { numeric: !0, sensitivity: "base" }), he !== 0)
                  return K === "asc" ? he : -he;
              }
              return 0;
            })), y[T]) {
              const D = y[T], V = h.globalSelectedRowData && W(h.globalSelectedRowData, D) ? null : D;
              b({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: V
              });
            }
          }
          break;
      }
    }, [o, h.selectedIndex, h.filters, h.sortConfig, C, W, b, S, j, A]), ce = Q((f, T) => C(f, T), [C]);
    return ha(r, () => ({
      selectTab: (f) => {
        f >= 0 && f < o.length && (b({ type: "SET_SELECTED_INDEX", payload: f }), i?.(f));
      },
      refreshData: (f) => {
        console.log("Refreshing data for tab:", f ?? "all");
      },
      exportData: (f) => {
        const T = f ?? h.selectedIndex, U = o[T];
        return U ? U.data : [];
      },
      getSelectedRows: (f) => h.globalSelectedRowData ? [] : [],
      clearSelection: (f) => {
        b({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (f) => {
        b({ type: "SET_FILTERS", payload: f });
      }
    }), [h.selectedIndex, h.selectedRows, o, i]), F ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": R, children: k || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : w ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": R, children: I || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: w })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${d}`,
        id: _,
        "data-testid": R,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${_}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            Ma,
            {
              sortConfig: h.sortConfig || [],
              columns: o.flatMap(
                (f) => f.columns.map((T) => ({ key: T.key, label: T.label }))
              ).filter(
                (f, T, U) => U.findIndex((E) => E.key === f.key) === T
                // Remove duplicates
              ),
              onSortChange: (f) => {
                b({ type: "SET_SORT", payload: f });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${u || ""} ${_ ? `${_}-navigation-help` : ""}`.trim(),
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((f, T) => {
                const U = T === h.selectedIndex, E = f.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${f.id}`,
                    "aria-controls": `panel-${f.id}`,
                    "aria-selected": U,
                    "aria-disabled": E,
                    tabIndex: U ? 0 : -1,
                    ref: (z) => {
                      ne.current[T] = z;
                    },
                    onClick: () => oe(T),
                    onKeyDown: (z) => X(z, T),
                    disabled: E,
                    className: [
                      "aria-tabs-datagrid__tab",
                      U ? "aria-tabs-datagrid__tab--selected" : "",
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
            const U = T === h.selectedIndex;
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                role: "tabpanel",
                id: `panel-${f.id}`,
                "aria-labelledby": `tab-${f.id}`,
                tabIndex: 0,
                hidden: !U,
                ref: (E) => {
                  ie.current[T] = E;
                },
                className: `aria-tabs-datagrid__panel ${f.className || ""}`,
                "data-tab-panel": T,
                children: U && (() => {
                  const E = f.data.some((G) => "ews_data" in G) ? ce(f.data, h.filters) : f.data, z = ve(() => {
                    const G = h.sortConfig;
                    return !G || G.length === 0 ? E : [...E].sort((N, ue) => {
                      for (const { key: se, direction: re } of G) {
                        let q = N[se], x = ue[se];
                        const y = f.columns.find((M) => M.key === se);
                        if (y?.tableRenderer ? (q = y.tableRenderer(N), x = y.tableRenderer(ue)) : y?.render && (q = y.render(N), x = y.render(ue)), q == null && x == null) continue;
                        if (q == null) return 1;
                        if (x == null) return -1;
                        let D = 0;
                        if (typeof q == "number" && typeof x == "number" ? D = q - x : typeof q == "boolean" && typeof x == "boolean" ? D = q === x ? 0 : q ? 1 : -1 : D = String(q).localeCompare(String(x), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), D !== 0)
                          return re === "asc" ? D : -D;
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
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: f.columns.map((G, N) => {
                          const ue = h.sortConfig?.find((q) => q.key === G.key), se = !!ue, re = B.focusArea === "headers" && B.focusedHeaderIndex === N;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${re ? "sortable-header--focused" : ""} ${se ? "sortable-header--sorted" : ""}`,
                              role: "columnheader",
                              tabIndex: re ? 0 : -1,
                              onClick: () => le(T, G.key),
                              onKeyDown: (q) => O(q, N),
                              "aria-sort": se ? ue?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: G.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${se ? `sort-indicator--${ue?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((q) => q.key === G.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((q) => q.key === G.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((q) => q.key === G.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((q) => q.key === G.key) + 1}`,
                                      children: h.sortConfig.findIndex((q) => q.key === G.key) + 1
                                    }
                                  ),
                                  se && /* @__PURE__ */ n.jsx(
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
                            G.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: z.map((G, N) => {
                          const ue = h.globalSelectedRowData && W(h.globalSelectedRowData, G), se = B.focusArea === "cells" && B.focusedRowIndex === N;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${ue ? "data-row--selected" : ""} ${se ? "data-row--focused" : ""}`,
                              "aria-selected": ue,
                              children: f.columns.map((re, q) => {
                                const x = re.tableRenderer ? re.tableRenderer(G) : re.render ? re.render(G) : G[re.key], y = B.focusArea === "cells" && B.focusedRowIndex === N && B.focusedColumnIndex === q, D = () => typeof x == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  te(x),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: x ? "Yes" : "No" })
                                ] }) : String(x ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${y ? "data-cell--focused" : ""}`,
                                    tabIndex: y ? 0 : -1,
                                    onClick: () => {
                                      const V = h.globalSelectedRowData && W(h.globalSelectedRowData, G) ? null : G;
                                      b({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: V
                                      });
                                    },
                                    onKeyDown: (M) => Y(M, N, q),
                                    children: D()
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
), Rt = {
  asc: "↑",
  desc: "↓"
}, Pl = (e) => [...e].sort((t, r) => t.priority - r.priority);
function Rn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function zl(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function Wl(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function Ol(e, t) {
  const r = t.find((o) => o.id === e), a = zl(t);
  return r ? r.priority < a : !1;
}
const Hf = ({
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
  const d = ve(() => Pl(e), [e]), m = Q((R) => {
    if (l) return;
    const L = e.map(
      (C) => C.id === R ? { ...C, direction: C.direction === "asc" ? "desc" : "asc" } : C
    );
    t(L);
  }, [e, t, l]), p = Q((R) => {
    if (l) return;
    const L = e.findIndex((H) => H.id === R);
    if (L <= 0) return;
    const C = [...e];
    [C[L], C[L - 1]] = [C[L - 1], C[L]], t(Rn(C));
  }, [e, t, l]), _ = Q((R) => {
    if (l) return;
    const L = e.findIndex((H) => H.id === R);
    if (L >= e.length - 1 || L === -1) return;
    const C = [...e];
    [C[L], C[L + 1]] = [C[L + 1], C[L]], t(Rn(C));
  }, [e, t, l]), F = Q((R) => {
    if (l) return;
    const L = e.filter((C) => C.id !== R);
    t(Rn(L));
  }, [e, t, l]), k = Q(() => {
    l || t([]);
  }, [t, l]), w = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const R = d.map((L, C) => {
      const H = L.direction === "asc" ? "ascending" : "descending";
      return `${C + 1}. ${L.label} (${H})`;
    });
    if (R.length === 1)
      return `Sorted by: ${R[0]}`;
    if (R.length === 2)
      return `Sorted by: ${R.join(" and ")}`;
    {
      const L = R.pop();
      return `Sorted by: ${R.join(", ")}, and ${L}`;
    }
  }, I = ve(() => {
    const R = ["sort-description"];
    return i && R.push("sort-help"), u && R.push(u), R.join(" ");
  }, [i, u]);
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
        "aria-label": c,
        "aria-describedby": I,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((R) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                qe,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => F(R.id),
                  disabled: l,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-priority", children: R.priority + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R.label }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__tag-direction",
                        onClick: () => m(R.id),
                        disabled: l,
                        "aria-label": `Toggle sort direction for ${R.label}. Currently ${R.direction === "asc" ? "ascending" : "descending"}`,
                        title: "Click to toggle between ascending and descending",
                        children: R.direction === "asc" ? Rt.asc : Rt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(R.id),
                          disabled: l || !Wl(R.id, e),
                          "aria-label": `Move ${R.label} sort up in priority`,
                          title: "Move up in priority",
                          children: "▲"
                        }
                      ),
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => _(R.id),
                          disabled: l || !Ol(R.id, e),
                          "aria-label": `Move ${R.label} sort down in priority`,
                          title: "Move down in priority",
                          children: "▼"
                        }
                      )
                    ] })
                  ] })
                }
              )
            },
            R.id
          ))
        ]
      }
    ),
    s && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__actions", children: /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "secondary",
        onClick: k,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      Rt.asc,
      "/",
      Rt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, kr = (e, t) => t.map((r) => ({
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
})), Hn = [
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
], Ul = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), Gl = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, Vl = (e) => {
  if (typeof e == "boolean") {
    const r = Hn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = Hn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, Yl = (e) => `${e.name}-${e.bed_name}`, ql = () => ({
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
}), Pf = (e) => {
  const t = ql();
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
}, Kl = {
  dataComparator: Ul,
  filterFunction: Gl,
  booleanRenderer: Vl,
  getDataId: Yl
};
function na(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: u = {},
    classPrefix: d = "adaptive-card"
  } = r, m = t.find((L) => L.key === a), p = m?.cardRenderer ? m.cardRenderer(e) : m?.render ? m.render(e) : e[a || "name"] || "Untitled", _ = () => o.filter((C) => !i.includes(C) && e[C]).slice(0, 3).map((C) => {
    const H = t.find((S) => S.key === C), g = e[C], $ = u[C] ? u[C](g, e) : H?.cardRenderer ? H.cardRenderer(e) : H?.render ? H.render(e) : g;
    return `${H?.label || C}: ${$}`;
  }).join(" • "), F = () => s.length === 0 ? null : s.filter((L) => e[L.fieldKey] !== void 0).map((L) => {
    const C = e[L.fieldKey], H = L.render ? L.render(C, e) : C;
    return `<span class="nhsuk-tag ${Zl(L, C)}">${H}</span>`;
  }).join(""), k = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", w = F(), I = _(), R = w ? `${I}${w ? `<div class="adaptive-card__badges">${w}</div>` : ""}` : I;
  return {
    variant: k(),
    heading: String(p),
    descriptionHtml: R,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${p}`
  };
}
function Zl(e, t) {
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
const Jl = {
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
}, $a = ({
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
            qe,
            {
              color: Ql(za(d)),
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
            De,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            De,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (_) => {
                _.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, Aa = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        qe,
        {
          color: ec(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        qe,
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
      De,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), Ha = ({
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
        qe,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        qe,
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
      De,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      De,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), Pa = ({
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${Xl(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: m && /* @__PURE__ */ n.jsxs(
            qe,
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
            De,
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
            De,
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
function za(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function Xl(e) {
  return za(e);
}
function Ql(e) {
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
function ec(e) {
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
const tc = [
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
], Wa = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", nc = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, rc = (e) => Wa(e) === "high" || e.status === "urgent" ? "primary" : "default", ac = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, sc = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: tc,
  hiddenFields: [],
  getPriority: Wa,
  getStatus: nc,
  getVariant: rc,
  fieldRenderers: ac,
  classPrefix: "adaptive-card--healthcare"
}, oc = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      $a,
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
      Aa,
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
      Ha,
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
      Pa,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, ic = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, ra = {
  name: "healthcare",
  defaultCardConfig: sc,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: oc,
  fieldTypes: ic
};
function aa(e) {
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
function sa(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function lc(e, t) {
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
function cc(e, t) {
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
function dc(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function uc(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...Jl, ...r };
  if (a && a.cardTemplates) {
    const s = dc(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), na(e, t, o);
}
const zf = ({
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
  disabled: _ = !1,
  className: F,
  ...k
}) => {
  const w = cc(e, t), I = l !== void 0, R = l ?? 0, L = ve(() => {
    if (s.some(
      (y) => y.data && y.data.length > 0 && sa(y.data)
    )) {
      const y = aa(r);
      return {
        ...ra.defaultCardConfig,
        ...y
      };
    } else
      return aa(r);
  }, [r, s]), C = ve(() => s.some(
    (y) => y.data && y.data.length > 0 && sa(y.data)
  ) ? ra : void 0, [s]), H = ve(() => ({
    selectedIndex: R,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [R, s.length]), [g, $] = fa(lc, H), B = xe([]), S = xe([]), v = xe([]), h = xe(null), [b, W] = pe({
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
  }), oe = Q((x) => {
    if (!x.current)
      return { columns: 1, rows: 0 };
    const y = x.current, D = y.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (D.length === 0)
      return { columns: 1, rows: 0 };
    const M = y.offsetWidth, K = D[0].offsetWidth, ee = Math.floor(M / K) || 1, ae = Math.ceil(D.length / ee);
    return { columns: ee, rows: ae };
  }, []), P = Q((x, y) => ({
    row: Math.floor(x / y),
    col: x % y
  }), []), X = Q((x, y, D) => x * D + y, []), ne = Q((x, y, D, M) => {
    const { row: V, col: K } = P(x, M);
    let ee = V, ae = K;
    switch (y) {
      case "up":
        ee = Math.max(0, V - 1);
        break;
      case "down":
        ee = Math.min(Math.floor((D - 1) / M), V + 1);
        break;
      case "left":
        ae = Math.max(0, K - 1);
        break;
      case "right":
        ae = Math.min(M - 1, K + 1);
        break;
    }
    const Z = X(ee, ae, M);
    return Math.min(Z, D - 1);
  }, [P, X]);
  ye(() => {
    b.isCardNavigationActive && b.focusedCardElementIndex >= 0 && b.cardElements.length > 0 && setTimeout(() => {
      const x = b.cardElements[b.focusedCardElementIndex];
      x && (x.element.focus(), x.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [b.isCardNavigationActive, b.focusedCardElementIndex, b.cardElements.length]), ye(() => {
    const x = () => {
      if (w === "cards" && h.current) {
        const { columns: M, rows: V } = oe(h);
        W((K) => ({
          ...K,
          gridColumns: M,
          gridRows: V
        }));
      }
    }, y = setTimeout(x, 200), D = () => {
      setTimeout(x, 100);
    };
    return window.addEventListener("resize", D), () => {
      clearTimeout(y), window.removeEventListener("resize", D);
    };
  }, [w, s, oe]), ye(() => {
    const x = g.tabLoadingStates.length, y = s.length;
    x !== y && $({ type: "ADJUST_ARRAYS", payload: { newLength: y } });
  }, [s.length, g.tabLoadingStates.length]), ye(() => {
    I && l !== g.selectedIndex && $({ type: "SET_SELECTED_INDEX", payload: l });
  }, [I, l, g.selectedIndex]);
  const ie = Q((x) => {
    x >= 0 && x < s.length && !s[x].disabled && ($({ type: "SET_SELECTED_INDEX", payload: x }), c?.(x));
  }, [s, c]), le = Q((x) => {
    console.log("Card selected:", x), $({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: x
    });
  }, []), j = Q((x) => {
    const y = S.current[x];
    y && (y.focus(), y.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), te = Q((x) => {
    const y = S.current[x];
    if (!y) return [];
    const D = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), M = y.querySelectorAll(D);
    return Array.from(M).map((V, K) => ({
      id: V.id || `card-${x}-element-${K}`,
      element: V,
      label: V.getAttribute("aria-label") || V.textContent?.trim() || V.getAttribute("title") || `Element ${K + 1}`,
      type: V.tagName.toLowerCase() === "button" ? "button" : V.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(V.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), A = xe(null), O = Q((x) => {
    const y = A.current;
    if (!y) return;
    const D = document.createElement("div");
    D.setAttribute("aria-live", "polite"), D.setAttribute("aria-atomic", "true"), D.className = "sr-only", D.textContent = x, y.appendChild(D), setTimeout(() => {
      y.contains(D) && y.removeChild(D);
    }, 1e3);
  }, []), Y = Q((x) => {
    const y = x.filter((M) => M.sortable !== !1), D = [
      { value: "", label: "Sort by..." }
    ];
    return y.forEach((M) => {
      const V = M.label || M.key;
      M.key === "name" ? D.push(
        { value: `${M.key}-asc`, label: `${V} (A-Z)` },
        { value: `${M.key}-desc`, label: `${V} (Z-A)` }
      ) : M.key === "ews_score" || M.key.includes("score") ? D.push(
        { value: `${M.key}-desc`, label: `${V} (High-Low)` },
        { value: `${M.key}-asc`, label: `${V} (Low-High)` }
      ) : M.key === "age" || M.key.includes("date") || M.key.includes("time") ? D.push(
        { value: `${M.key}-desc`, label: `${V} (Oldest-Youngest)` },
        { value: `${M.key}-asc`, label: `${V} (Youngest-Oldest)` }
      ) : D.push(
        { value: `${M.key}-asc`, label: `${V} (A-Z)` },
        { value: `${M.key}-desc`, label: `${V} (Z-A)` }
      );
    }), D;
  }, []), ce = Q((x, y) => y ? [...x].sort((D, M) => {
    const V = D[y.key], K = M[y.key];
    if (V == null && K == null) return 0;
    if (V == null) return 1;
    if (K == null) return -1;
    const ee = Number(V), ae = Number(K);
    if (!isNaN(ee) && !isNaN(ae))
      return y.direction === "asc" ? ee - ae : ae - ee;
    const Z = String(V).toLowerCase(), he = String(K).toLowerCase(), je = Z.localeCompare(he);
    return y.direction === "asc" ? je : -je;
  }) : x, []), f = Q((x) => {
    if (!x) {
      W((Z) => ({ ...Z, cardSortConfig: null })), O("Card sorting cleared");
      return;
    }
    const [y, D] = x.split("-"), M = { key: y, direction: D };
    W((Z) => ({ ...Z, cardSortConfig: M }));
    const ee = s[g.selectedIndex]?.columns.find((Z) => Z.key === y)?.label || y;
    O(`Cards sorted by ${ee} in ${D === "asc" ? "ascending" : "descending"} order`);
  }, [s, g.selectedIndex, O]), T = Q((x) => {
    const M = s[g.selectedIndex]?.columns.find((K) => K.key === x.key)?.label || x.key, V = x.direction === "asc" ? "ascending" : "descending";
    return `${M} (${V})`;
  }, [s, g.selectedIndex]), U = Q((x) => {
    const y = s[g.selectedIndex];
    if (o) {
      const D = g.sortConfig;
      return !D || D.length === 0 ? x : [...x].sort((M, V) => {
        for (const { key: K, direction: ee } of D) {
          let ae = M[K], Z = V[K];
          const he = y?.columns.find((Ee) => Ee.key === K);
          if (he?.cardRenderer ? (ae = he.cardRenderer(M), Z = he.cardRenderer(V)) : he?.render && (ae = he.render(M), Z = he.render(V)), ae == null && Z == null) continue;
          if (ae == null) return ee === "asc" ? -1 : 1;
          if (Z == null) return ee === "asc" ? 1 : -1;
          const je = Number(ae), _e = Number(Z);
          if (!isNaN(je) && !isNaN(_e)) {
            const Ee = je - _e;
            if (Ee !== 0) return ee === "asc" ? Ee : -Ee;
            continue;
          }
          const we = String(ae).toLowerCase(), mt = String(Z).toLowerCase(), Nt = we.localeCompare(mt);
          if (Nt !== 0) return ee === "asc" ? Nt : -Nt;
        }
        return 0;
      });
    } else
      return ce(x, b.cardSortConfig);
  }, [o, g.sortConfig, b.cardSortConfig, ce, s, g.selectedIndex]), E = Q((x, y) => {
    const D = te(x), M = D[y];
    if (M) {
      M.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const V = `Focused on ${M.label}, ${M.type} ${y + 1} of ${D.length} within card`;
      O(V);
    }
  }, [te, O]), z = Q((x) => {
    B.current[x]?.focus();
  }, []), G = Q(() => {
    const x = v.current[0];
    if (!x) return [];
    const y = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), D = x.querySelectorAll(y);
    return Array.from(D);
  }, []), N = Q((x) => {
    if (x === 0) {
      const y = v.current[0];
      if (y) {
        y.focus();
        const M = `Sort controls region with ${G().length} interactive elements. Press Enter or Space to navigate between controls.`;
        O(M);
      }
    } else {
      const y = G(), D = x - 1, M = y[D];
      if (M) {
        M.focus();
        const V = M.tagName.toLowerCase() === "select", K = M.tagName.toLowerCase() === "button", ee = V ? "dropdown" : K ? "button" : "control", ae = V ? ". Use Space key to open dropdown" : "", Z = `${ee} ${D + 1} of ${y.length}${ae}`;
        O(Z);
      }
    }
  }, [G, O]), ue = Q((x, y) => {
    const { key: D } = x, M = s[g.selectedIndex], V = M?.data.length || 0;
    if (D === "ArrowLeft" && x.shiftKey) {
      x.preventDefault(), x.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (D === "ArrowRight" && x.shiftKey) {
      x.preventDefault(), x.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!b.isCardNavigationActive) {
      switch (D) {
        case "ArrowUp":
          if (x.preventDefault(), y === 0)
            W((Z) => ({ ...Z, focusArea: "tabs" })), z(g.selectedIndex);
          else {
            const Z = ne(y, "up", V, b.gridColumns);
            Z !== y && (W((he) => ({ ...he, focusedCardIndex: Z })), j(Z), O(`Moved to card ${Z + 1} of ${V}`));
          }
          break;
        case "ArrowDown":
          x.preventDefault();
          const K = ne(y, "down", V, b.gridColumns);
          K !== y && (W((Z) => ({ ...Z, focusedCardIndex: K })), j(K), O(`Moved to card ${K + 1} of ${V}`));
          break;
        case "ArrowLeft":
          x.preventDefault();
          const ee = ne(y, "left", V, b.gridColumns);
          ee !== y ? (W((Z) => ({ ...Z, focusedCardIndex: ee })), j(ee), O(`Moved to card ${ee + 1} of ${V}`)) : g.selectedIndex > 0 && ($({ type: "SET_SELECTED_INDEX", payload: g.selectedIndex - 1 }), W((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => z(g.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          x.preventDefault();
          const ae = ne(y, "right", V, b.gridColumns);
          ae !== y ? (W((Z) => ({ ...Z, focusedCardIndex: ae })), j(ae), O(`Moved to card ${ae + 1} of ${V}`)) : g.selectedIndex < s.length - 1 && ($({ type: "SET_SELECTED_INDEX", payload: g.selectedIndex + 1 }), W((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => z(g.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (M?.data[y]) {
            x.preventDefault(), W((he) => ({
              ...he,
              selectedCardIndex: y
            }));
            const Z = te(y);
            Z.length > 0 ? (W((he) => ({
              ...he,
              focusArea: "card",
              isCardNavigationActive: !0,
              focusedCardElementIndex: 0,
              cardElements: Z,
              selectedCardIndex: y
              // Ensure selection is maintained
            })), O(`Card ${y + 1} selected and navigation activated. ${Z.length} interactive elements available. Use arrow keys to navigate, Enter to activate, Escape to exit.`)) : O(`Card ${y + 1} selected.`);
          }
          break;
        case " ":
          if (M?.data[y]) {
            x.preventDefault(), W((he) => ({
              ...he,
              selectedCardIndex: he.selectedCardIndex === y ? -1 : y
            }));
            const Z = b.selectedCardIndex === y;
            O(`Card ${y + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (D) {
      case "ArrowUp":
      case "ArrowLeft":
        x.preventDefault();
        const K = Math.max(0, b.focusedCardElementIndex - 1);
        W((he) => ({ ...he, focusedCardElementIndex: K })), E(y, K);
        break;
      case "ArrowDown":
      case "ArrowRight":
        x.preventDefault();
        const ee = Math.min(b.cardElements.length - 1, b.focusedCardElementIndex + 1);
        W((he) => ({ ...he, focusedCardElementIndex: ee })), E(y, ee);
        break;
      case "Enter":
        x.preventDefault();
        const ae = b.cardElements[b.focusedCardElementIndex];
        ae && (ae.element.click(), O(`Activated ${ae.label}`));
        break;
      case " ":
        x.preventDefault();
        const Z = b.cardElements[b.focusedCardElementIndex];
        if (Z) {
          const he = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(he), O(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        x.preventDefault(), W((he) => ({
          ...he,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => j(y), 0), O("Exited card navigation, returned to card level");
        break;
      case "Home":
        x.preventDefault(), b.cardElements.length > 0 && (W((he) => ({ ...he, focusedCardElementIndex: 0 })), E(y, 0));
        break;
      case "End":
        if (x.preventDefault(), b.cardElements.length > 0) {
          const he = b.cardElements.length - 1;
          W((je) => ({ ...je, focusedCardElementIndex: he })), E(y, he);
        }
        break;
    }
  }, [b, g.selectedIndex, s, le, j, z, W, te, E, O]), se = Q((x) => {
    const y = B.current[x], D = y?.parentElement;
    if (!y || !D) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const M = y.getBoundingClientRect(), V = D.getBoundingClientRect();
    M.left >= V.left && M.right <= V.right || (console.log("Tab not visible, scrolling into view (mobile)"), y.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), re = Q((x, y) => {
    if (w !== "cards")
      return;
    const { key: D } = x;
    switch (D) {
      case "ArrowLeft":
        x.preventDefault();
        const M = y > 0 ? y - 1 : s.length - 1;
        ie(M), W((ae) => ({ ...ae, focusedTabIndex: M })), B.current[M]?.focus(), se(M);
        break;
      case "ArrowRight":
        x.preventDefault();
        const V = y < s.length - 1 ? y + 1 : 0;
        ie(V), W((ae) => ({ ...ae, focusedTabIndex: V })), B.current[V]?.focus(), se(V);
        break;
      case "ArrowDown":
        x.preventDefault();
        const K = s[g.selectedIndex];
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
        x.preventDefault(), ie(0), W((ae) => ({ ...ae, focusedTabIndex: 0 })), B.current[0]?.focus(), se(0);
        break;
      case "End":
        x.preventDefault();
        const ee = s.length - 1;
        ie(ee), W((ae) => ({ ...ae, focusedTabIndex: ee })), B.current[ee]?.focus(), se(ee);
        break;
      case "Enter":
      case " ":
        x.preventDefault(), ie(y);
        break;
    }
  }, [s.length, ie, w, j, W, se]), q = Q((x, y) => {
    if (w !== "cards")
      return;
    const { key: D } = x, M = s[g.selectedIndex];
    if (y === 0 && !b.isSortControlsActive) {
      switch (D) {
        case "ArrowUp":
          x.preventDefault(), W((K) => ({
            ...K,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), z(g.selectedIndex);
          break;
        case "ArrowDown":
          x.preventDefault(), M?.data && M.data.length > 0 && (W((K) => ({
            ...K,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), j(0));
          break;
        case "Enter":
        case " ":
          x.preventDefault();
          const V = G();
          if (V.length > 0) {
            W((ee) => ({
              ...ee,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), N(1);
            const K = `Entered sort controls navigation mode. ${V.length} controls available. Use arrow keys to navigate between controls.`;
            O(K);
          }
          break;
        case "Escape":
          x.preventDefault(), W((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), z(g.selectedIndex);
          break;
      }
      return;
    }
    if (b.isSortControlsActive) {
      const K = G().length;
      switch (D) {
        case "ArrowLeft":
          x.preventDefault();
          const ee = b.focusedSortControlIndex > 1 ? b.focusedSortControlIndex - 1 : K;
          W((Z) => ({ ...Z, focusedSortControlIndex: ee })), N(ee);
          break;
        case "ArrowRight":
          x.preventDefault();
          const ae = b.focusedSortControlIndex < K ? b.focusedSortControlIndex + 1 : 1;
          W((Z) => ({ ...Z, focusedSortControlIndex: ae })), N(ae);
          break;
        case "ArrowDown":
          if (x.preventDefault(), b.isSortControlsActive) {
            const Z = b.focusedSortControlIndex < K ? b.focusedSortControlIndex + 1 : 1;
            W((he) => ({ ...he, focusedSortControlIndex: Z })), N(Z);
          } else
            M?.data && M.data.length > 0 && (W((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), j(0));
          break;
        case "ArrowUp":
          x.preventDefault(), W((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), N(0);
          break;
        case "Escape":
          x.preventDefault(), W((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), z(g.selectedIndex);
          break;
      }
    }
  }, [w, s, g.selectedIndex, b.isSortControlsActive, b.focusedSortControlIndex, N, z, j, W, O]);
  if (w === "cards") {
    const x = s[g.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${F || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": u,
          "aria-describedby": `${d || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
          "aria-orientation": m,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((y, D) => {
            const M = D === g.selectedIndex, V = y.disabled || _;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${y.id}`,
                "aria-controls": `panel-${y.id}`,
                "aria-selected": M,
                "aria-disabled": V,
                tabIndex: M ? 0 : -1,
                ref: (K) => {
                  B.current[D] = K;
                },
                onClick: () => ie(D),
                onKeyDown: (K) => re(K, D),
                disabled: V,
                className: [
                  "aria-tabs-datagrid__tab",
                  M ? "aria-tabs-datagrid__tab--selected" : "",
                  V ? "aria-tabs-datagrid__tab--disabled" : ""
                ].filter(Boolean).join(" "),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: y.label }),
                  g.tabLoadingStates[D] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  g.tabErrors[D] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              y.id
            );
          })
        }
      ),
      x && x.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          Ma,
          {
            sortConfig: g.sortConfig || [],
            columns: x.columns.map((y) => ({ key: y.key, label: y.label })),
            onSortChange: (y) => {
              $({ type: "SET_SORT", payload: y });
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
            tabIndex: b.focusArea === "sort-controls" ? 0 : -1,
            ref: (y) => {
              v.current[0] = y;
            },
            onKeyDown: (y) => q(y, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${x.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  pa,
                  {
                    id: `card-sort-${x.id}`,
                    name: `card-sort-${x.id}`,
                    value: b.cardSortConfig ? `${b.cardSortConfig.key}-${b.cardSortConfig.direction}` : "",
                    onChange: (y) => f(y.target.value),
                    className: "sort-select",
                    children: Y(x.columns).map((y) => /* @__PURE__ */ n.jsx("option", { value: y.value, children: y.label }, y.value))
                  }
                )
              ] }),
              b.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  T(b.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  De,
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
          "aria-label": `${x?.label || "Data"} cards in ${b.gridRows} rows and ${b.gridColumns} columns`,
          "aria-rowcount": b.gridRows,
          "aria-colcount": b.gridColumns,
          id: `panel-${x?.id}`,
          "aria-labelledby": `tab-${x?.id}`,
          children: U(x?.data || []).map((y, D) => {
            const M = b.selectedCardIndex === D, V = b.focusedCardIndex === D && b.focusArea === "cards", K = b.focusedCardIndex === D && b.focusArea === "card" && b.isCardNavigationActive, ee = D === 0 && b.focusArea !== "cards", ae = V || ee, Z = P(D, b.gridColumns);
            if (r.cardTemplate) {
              const _e = r.cardTemplate(y, x.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (we) => {
                    S.current[D] = we;
                  },
                  className: [
                    "aria-tabs-datagrid-adaptive__card-wrapper",
                    M ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : "",
                    V ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : "",
                    K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""
                  ].filter(Boolean).join(" "),
                  role: "gridcell",
                  "aria-rowindex": Z.row + 1,
                  "aria-colindex": Z.col + 1,
                  "aria-selected": M,
                  "aria-expanded": K,
                  "aria-description": K ? `Card navigation active. ${b.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: ae ? 0 : -1,
                  onClick: () => {
                    W((we) => ({
                      ...we,
                      selectedCardIndex: we.selectedCardIndex === D ? -1 : D
                    })), le(y);
                  },
                  onKeyDown: (we) => ue(we, D),
                  onFocus: () => {
                    W((we) => we.focusedCardIndex !== D || we.focusArea !== "cards" ? {
                      ...we,
                      focusedCardIndex: D,
                      focusArea: "cards"
                    } : we);
                  },
                  children: _e
                },
                `card-${D}`
              );
            }
            const he = uc(y, x.columns, L, C), je = [
              he.className || "",
              M ? "aria-tabs-datagrid-adaptive__card--selected" : "",
              V ? "aria-tabs-datagrid-adaptive__card--focused" : "",
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
                  Ea,
                  {
                    ...he,
                    ref: (_e) => {
                      S.current[D] = _e;
                    },
                    className: je,
                    "aria-selected": M,
                    "aria-expanded": K,
                    "aria-label": `${he["aria-label"] || he.heading}. ${K ? `Card navigation active with ${b.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: ae ? 0 : -1,
                    onClick: () => {
                      W((_e) => ({
                        ..._e,
                        selectedCardIndex: _e.selectedCardIndex === D ? -1 : D
                      })), le(y);
                    },
                    onKeyDown: (_e) => ue(_e, D),
                    onFocus: () => {
                      b.isCardNavigationActive || W((_e) => _e.focusedCardIndex !== D || _e.focusArea !== "cards" ? {
                        ..._e,
                        focusedCardIndex: D,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : _e);
                    }
                  }
                )
              },
              `card-${D}`
            );
          })
        }
      ),
      /* @__PURE__ */ n.jsx(
        "div",
        {
          ref: A,
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
  return w === "hybrid" ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--hybrid ${F || ""}`, children: /* @__PURE__ */ n.jsx(
    An,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: _,
      selectedIndex: l,
      onTabChange: c,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...k
    }
  ) }) : /* @__PURE__ */ n.jsx(
    An,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: _,
      selectedIndex: l,
      onTabChange: c,
      ...k
    }
  );
}, Oa = (e) => {
  const t = Hn.find((r) => r.value === e);
  return t ? t.icon : null;
}, hc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => Oa(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, fc = (e) => kr(e, [
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
]), mc = {
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
  booleanRenderer: (e) => Oa(e),
  getDataId: (e) => `financial-${e.id}`
}, pc = (e) => kr(e, [
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
]), gc = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: hc,
    createTabs: fc
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: mc,
    createTabs: pc
  }
}, oa = (e, t) => {
  const r = gc[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, Ua = [
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
], bc = [
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
], xc = [
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
], yc = [
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
], ia = [
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
], la = [
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
], ca = [
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
], vc = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, _c = () => [
  {
    id: "patients",
    label: "Patients",
    data: Ua,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      $a,
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
    data: bc,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Aa,
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
    data: xc,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Ha,
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
    data: yc,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      Pa,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], kc = () => {
  const [e, t] = pe("healthcare"), r = ve(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: Kl,
      tabPanels: _c(),
      data: Ua
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...oa("ecommerce", ia),
      data: ia
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...oa("financial", la),
      data: la
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: vc,
      tabPanels: kr(ca, [
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
      data: ca
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
        De,
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
      An,
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
}, Wf = kc, Ga = (e) => /* @__PURE__ */ n.jsx(ga, { ...e }), Of = ({
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
  logo: _,
  className: F,
  ...k
}) => {
  const w = {
    service: c,
    navigation: u,
    search: d,
    account: m,
    organisation: p,
    logo: _,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(La, { ...s }),
    /* @__PURE__ */ n.jsx(_a, { ...w }),
    /* @__PURE__ */ n.jsx(Ga, { className: F, ...k, children: /* @__PURE__ */ n.jsx(ba, { size: o, children: /* @__PURE__ */ n.jsx(Et, { children: /* @__PURE__ */ n.jsxs(hr, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(Ke, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(ka, { ...l })
  ] });
}, Uf = ({
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
  ..._
}) => {
  const F = {
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
    /* @__PURE__ */ n.jsx(La, { ...s }),
    /* @__PURE__ */ n.jsx(_a, { ...F }),
    /* @__PURE__ */ n.jsxs(Ga, { className: p, ..._, children: [
      c && /* @__PURE__ */ n.jsx(Ln, { ...c }),
      /* @__PURE__ */ n.jsx(ba, { size: o, children: /* @__PURE__ */ n.jsx(Et, { children: /* @__PURE__ */ n.jsxs(hr, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(Ke, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(ka, { ...l })
  ] });
}, Va = ({
  text: e = "Next",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = J("nhsuk-back-link", a), c = J("nhsuk-back-link__link"), u = () => /* @__PURE__ */ n.jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
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
  return /* @__PURE__ */ n.jsx("div", { className: l, children: o === "button" ? /* @__PURE__ */ n.jsx("button", { className: c, type: "button", onClick: s, ...i, children: u() }) : /* @__PURE__ */ n.jsx("a", { className: c, href: r, ...i, children: u() }) });
};
Va.displayName = "ForwardLink";
const it = Object.freeze({
  small: 320,
  smallMax: 767,
  medium: 768,
  large: 1025,
  xlarge: 1200,
  xxlarge: 1440
});
function da() {
  return typeof window > "u" ? it.small : window.innerWidth || document.documentElement.clientWidth || 0;
}
function Ya() {
  const [e, t] = fe.useState(da());
  fe.useEffect(() => {
    if (typeof window > "u") return;
    const s = () => t(da());
    return window.addEventListener("resize", s), () => window.removeEventListener("resize", s);
  }, []);
  const r = fe.useCallback((s) => e >= it[s], [e]), a = fe.useCallback((s) => e < it[s], [e]), o = fe.useCallback((s, i) => e >= it[s] && e < it[i], [e]);
  return {
    width: e,
    up: r,
    down: a,
    between: o,
    /** Raw numeric values */
    values: it
  };
}
function Gf(e) {
  const { width: t, values: r } = Ya();
  let a = e.base;
  const o = ["small", "medium", "large", "xlarge", "xxlarge"];
  for (const s of o) {
    const i = r[s];
    t >= i && e[s] !== void 0 && (a = e[s]);
  }
  return a;
}
function wc(e = {}) {
  const { enabled: t = !0, paramSelected: r = "nsv", paramDrill: a = "nsvDrill" } = e, [o, s] = fe.useState(() => typeof window > "u" || !t ? void 0 : new URLSearchParams(window.location.search).get(r)), [i, l] = fe.useState(() => typeof window > "u" || !t ? !1 : new URLSearchParams(window.location.search).get(a) === "1");
  return fe.useEffect(() => {
    if (!t || typeof window > "u") return;
    const c = new URLSearchParams(window.location.search);
    o ? c.set(r, String(o)) : c.delete(r), c.set(a, i ? "1" : "0");
    const u = `${window.location.pathname}?${c.toString()}${window.location.hash}`;
    window.history.replaceState(null, "", u);
  }, [o, i, t, r, a]), { selectedId: o, setSelectedId: s, drilledIn: i, setDrilledIn: l };
}
const Sc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M10.7 3.3a1 1 0 0 1 0 1.4L7.41 8l3.3 3.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4l4-4a1 1 0 0 1 1.42 0Z" }) }), Cc = ({ className: e }) => /* @__PURE__ */ n.jsx("svg", { className: e, width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { fill: "currentColor", d: "M5.3 12.7a1 1 0 0 1 0-1.4L8.59 8l-3.3-3.3a1 1 0 0 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42 0Z" }) });
function jc(e) {
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
    nextLabel: m = "Next",
    isLoading: p = !1,
    emptyState: _,
    a11y: F,
    className: k,
    getId: w = (de) => de.id,
    orientation: I = "vertical",
    autoEnableThirdColumn: R = !0,
    onDrillChange: L,
    navigationInstructions: C = "Use arrow keys to navigate, Enter to open.",
    initialFocus: H = "first",
    skipFocusOnSelect: g = !1,
    skipAnnouncements: $ = !1,
    onFocusChange: B,
    syncUrl: S = !1,
    urlParamSelected: v = "nsv",
    urlParamDrill: h = "nsvDrill",
    urlSyncDebounceMs: b = 0,
    lazySecondary: W = !1,
    navFooter: oe,
    collapsibleNav: P = !1,
    navInitiallyCollapsed: X = !1,
    onNavCollapseChange: ne,
    collapseToggleLabelShow: ie = "Show navigation",
    collapseToggleLabelHide: le = "Hide navigation",
    collapseToggleIconShow: j,
    collapseToggleIconHide: te,
    persistNavCollapsed: A,
    navCollapsedStorageKey: O = "nsvCollapsed",
    navCollapsedUrlParam: Y = "nsvCollapsed",
    autoContentHeader: ce,
    contentHeaderLevel: f = 2,
    renderContentHeader: T,
    contentSubheader: U,
    secondarySubheader: E
  } = e, { up: z } = Ya(), [G, N] = fe.useState(!1);
  fe.useEffect(() => {
    N(!0);
  }, []);
  const ue = G && z("medium"), se = G && z("xlarge");
  let re;
  c ? re = c : ue ? re = "two-column" : re = "list", !c && R && l && se && (re = "three-column");
  const q = wc({
    enabled: S,
    paramSelected: v,
    paramDrill: h
  }), [x, y] = fe.useState(
    () => q.selectedId !== void 0 ? q.selectedId : a
  ), D = r !== void 0 ? r : x, M = t.find((de) => w(de) === D), V = fe.useRef(null), K = fe.useRef(null), ee = !!M && (re === "list" || re === "cards"), ae = fe.useMemo(() => ce === void 0 ? { mobile: !0, tablet: !1, desktop: !1 } : ce === !0 ? { mobile: !0, tablet: !0, desktop: !0 } : ce === !1 ? { mobile: !1, tablet: !1, desktop: !1 } : {
    mobile: ce.mobile !== void 0 ? ce.mobile : !0,
    tablet: ce.tablet || !1,
    desktop: ce.desktop || !1
  }, [ce]), Z = G && z("medium") && !z("xlarge"), he = G && z("xlarge"), je = !!l, _e = re === "three-column", [we, mt] = fe.useState(!1);
  fe.useEffect(() => {
    _e && we && mt(!1);
  }, [_e, we]);
  const Ee = !!M && (ee && ae.mobile || !ee && Z && ae.tablet || !ee && he && ae.desktop) || je && !_e, Hs = `h${f}`, xn = M ? fe.createElement(Hs, { style: { marginLeft: ee ? 32 : 0, marginRight: ee ? 32 : 0 } }, M.label) : null, wr = ee ? "mobile" : Z ? "tablet" : "desktop", Ps = je && !_e && !we, yn = ee && ae.mobile ? /* @__PURE__ */ n.jsx(
    Ln,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => pt(void 0, void 0)
    }
  ) : void 0, vn = Ps ? /* @__PURE__ */ n.jsx(
    Va,
    {
      element: "button",
      text: m,
      onClick: () => {
        mt(!0);
      }
    }
  ) : void 0, Sr = !_e && we ? /* @__PURE__ */ n.jsx(
    Ln,
    {
      element: "button",
      text: d,
      style: { marginRight: 16 },
      onClick: () => mt(!1)
    }
  ) : void 0, zs = fe.useMemo(() => {
    if (!Ee || !M) return null;
    if (T) return T({
      item: M,
      detailActive: ee,
      context: wr,
      backLink: yn,
      defaultHeading: xn
    });
    const de = M && U ? typeof U == "function" ? U(M) : U : null;
    return /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", width: "100%" }, children: [
      /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 0, flex: "1 1 auto", minWidth: 0 }, children: [
        Sr || yn,
        /* @__PURE__ */ n.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }, children: [
          xn,
          de && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__subheader", children: de })
        ] })
      ] }),
      vn && /* @__PURE__ */ n.jsx("div", { style: { marginLeft: "auto" }, children: vn })
    ] });
  }, [Ee, M, T, ee, wr, yn, Sr, xn, vn, U]);
  fe.useEffect(() => {
    if (!S) return;
    const de = re === "three-column";
    let ke = !1;
    const me = () => {
      ke || (q.selectedId !== D && q.setSelectedId(D), q.drilledIn !== de && q.setDrilledIn(de));
    };
    if (b && b > 0) {
      const be = setTimeout(me, b);
      return () => {
        ke = !0, clearTimeout(be);
      };
    } else
      me();
  }, [S, q, D, re, b]), fe.useEffect(() => {
    if (!S) return;
    const de = () => {
      const ke = new URLSearchParams(window.location.search), me = ke.get(v);
      ke.get(h), y(me === null ? void 0 : me);
    };
    return window.addEventListener("popstate", de), () => window.removeEventListener("popstate", de);
  }, [S, v, h, c, l]);
  const Cr = fe.useRef(0), pt = fe.useCallback((de, ke) => {
    r === void 0 && y(de), o?.(de, ke);
  }, [r, o]);
  fe.useEffect(() => {
    if (!g && ee && K.current) {
      const de = setTimeout(() => K.current?.focus(), 30);
      return () => clearTimeout(de);
    }
  }, [ee, D, g]);
  const gt = fe.useRef(null), [Xe, Tt] = fe.useState(() => H === "first" ? 0 : -1);
  fe.useEffect(() => {
    if (!gt.current) return;
    const de = Array.from(gt.current.querySelectorAll("button[data-nav-item]"));
    if (de.forEach((ke, me) => ke.tabIndex = (Xe === -1 ? me === 0 && H === "first" : me === Xe) ? 0 : -1), Xe >= 0) {
      de[Xe]?.focus();
      const me = t[Xe];
      B?.(me ? w(me) : void 0, me, Xe);
    }
  }, [Xe, t, H, B, w]);
  const Ws = (de) => {
    const ke = I === "vertical" ? "ArrowDown" : "ArrowRight", me = I === "vertical" ? "ArrowUp" : "ArrowLeft";
    if (de.key === ke)
      de.preventDefault(), Tt((be) => Math.min(t.length - 1, be + 1));
    else if (de.key === me)
      de.preventDefault(), Tt((be) => Math.max(0, be - 1));
    else if (de.key === "Home")
      de.preventDefault(), Tt(0);
    else if (de.key === "End")
      de.preventDefault(), Tt(t.length - 1);
    else if (de.key === "Enter" || de.key === " ") {
      de.preventDefault();
      const be = t[Xe];
      be && !be.disabled && pt(w(be), be);
    }
  }, Os = fe.useMemo(() => {
    if (A && (A === "url" || A === "both") && typeof window < "u") {
      const ke = new URLSearchParams(window.location.search).get(Y);
      if (ke === "1") return !0;
      if (ke === "0") return !1;
    }
    if (A && (A === "localStorage" || A === "both") && typeof window < "u")
      try {
        const de = window.localStorage.getItem(O);
        if (de === "1") return !0;
        if (de === "0") return !1;
      } catch {
      }
    return X;
  }, [A, X, O, Y]), [Re, Us] = fe.useState(Os);
  fe.useEffect(() => {
    ne?.(Re);
  }, [Re, ne]);
  const Gs = fe.useCallback(() => {
    ue && P && Us((de) => !de);
  }, [ue, P]);
  fe.useEffect(() => {
    if (A && !(typeof window > "u")) {
      if (A === "localStorage" || A === "both")
        try {
          window.localStorage.setItem(O, Re ? "1" : "0");
        } catch {
        }
      if (A === "url" || A === "both") {
        const de = new URLSearchParams(window.location.search);
        de.set(Y, Re ? "1" : "0");
        const ke = `${window.location.pathname}?${de.toString()}${window.location.hash}`;
        window.history.replaceState(null, "", ke);
      }
    }
  }, [Re, A, O, Y]);
  const Vs = [
    "nhs-navigation-split-view",
    u ? "nhs-navigation-split-view--animated" : "",
    ee ? "nhs-navigation-split-view--detail-active" : "",
    re === "three-column" ? "nhs-navigation-split-view--three-column" : "",
    P && ue && Re ? "nhs-navigation-split-view--nav-collapsed" : "",
    k
  ].filter(Boolean).join(" "), _n = fe.useRef(null);
  fe.useEffect(() => {
    if (!$ && _n.current) {
      const de = M ? `Selected ${M.label}` : "Selection cleared";
      _n.current.textContent = de;
    }
  }, [M, $]), fe.useEffect(() => {
    !ee && D == null && gt.current && gt.current.querySelectorAll("button[data-nav-item]")[Cr.current]?.focus();
  }, [ee, D]);
  const Qe = re === "three-column", [kn, Ys] = fe.useState(!1);
  fe.useEffect(() => {
    Qe && !kn && Ys(!0);
  }, [Qe, kn]);
  const jr = fe.useRef(Qe);
  fe.useEffect(() => {
    jr.current !== Qe && (L?.(Qe), jr.current = Qe);
  }, [Qe, L]);
  const qs = () => {
    if (re === "cards")
      return /* @__PURE__ */ n.jsxs("ul", { className: "nhs-navigation-split-view__cards", role: "listbox", "aria-activedescendant": D ? String(D) : void 0, children: [
        t.map((me) => {
          const be = w(me), Dt = be === D;
          return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", role: "option", "aria-selected": Dt, children: /* @__PURE__ */ n.jsxs(
            "button",
            {
              id: String(be),
              type: "button",
              className: "nhs-navigation-split-view__card",
              "data-selected": Dt || void 0,
              "data-disabled": me.disabled || void 0,
              disabled: me.disabled,
              onClick: () => !me.disabled && pt(be, me),
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
        t.length === 0 && !p && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__card-item", "aria-disabled": "true", children: _ || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
      ] });
    const de = "nsv-nav-instructions", ke = fe.useMemo(() => {
      const me = ({ item: be, idx: Dt, selected: wn }) => {
        const Nr = w(be);
        return /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", role: "option", "aria-selected": wn, children: /* @__PURE__ */ n.jsxs(
          "button",
          {
            id: String(Nr),
            "data-nav-item": !0,
            type: "button",
            className: "nhs-navigation-split-view__item-button",
            "data-selected": wn || void 0,
            "data-disabled": be.disabled || void 0,
            disabled: be.disabled,
            "aria-current": wn ? "true" : void 0,
            onClick: () => {
              be.disabled || (Cr.current = Dt, pt(Nr, be));
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
    }, [w, pt, s]);
    return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      /* @__PURE__ */ n.jsxs(
        "ul",
        {
          ref: gt,
          className: "nhs-navigation-split-view__list",
          onKeyDown: Ws,
          role: "listbox",
          "aria-describedby": de,
          "aria-activedescendant": D ? String(D) : void 0,
          children: [
            t.map((me, be) => /* @__PURE__ */ n.jsx(ke, { item: me, idx: be, selected: w(me) === D }, w(me))),
            t.length === 0 && !p && /* @__PURE__ */ n.jsx("li", { className: "nhs-navigation-split-view__list-item", "aria-disabled": "true", children: _ || /* @__PURE__ */ n.jsx("div", { style: { padding: 16 }, children: "No items" }) })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx("div", { id: de, style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: C })
    ] });
  };
  return /* @__PURE__ */ n.jsx(
    "div",
    {
      ref: V,
      className: Vs,
      "aria-label": F?.rootLabel,
      "data-layout": re,
      children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__body", children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__panes", "data-active-detail": ee || void 0, style: { transform: ee ? "translateX(-100%)" : void 0 }, children: [
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              className: "nhs-navigation-split-view__nav-pane",
              role: "navigation",
              "aria-label": F?.navigationLabel || "Items",
              "data-collapsed": Re || void 0,
              children: [
                P && ue && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-collapse", children: /* @__PURE__ */ n.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: Gs,
                    className: "nhs-navigation-split-view__nav-collapse-btn",
                    "aria-label": Re ? ie : le,
                    title: Re ? ie : le,
                    children: Re ? j || /* @__PURE__ */ n.jsx(Cc, {}) : te || /* @__PURE__ */ n.jsx(Sc, {})
                  }
                ) }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-scroll", children: qs() }),
                oe && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__nav-footer", role: "contentinfo", children: oe })
              ]
            }
          ),
          /* @__PURE__ */ n.jsxs(
            "div",
            {
              ref: K,
              className: "nhs-navigation-split-view__content-pane",
              role: "region",
              "aria-label": F?.contentLabel || "Content",
              "data-has-selection": !!M || void 0,
              tabIndex: -1,
              children: [
                Ee && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__header", children: zs }),
                /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__content-inner", style: { padding: 32, flex: 1 }, children: we && !_e ? l?.(M) : i(M) })
              ]
            }
          ),
          re === "three-column" && (!W || kn) && /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhs-navigation-split-view__secondary-pane",
              role: "region",
              "aria-label": F?.secondaryContentLabel || "Secondary",
              children: /* @__PURE__ */ n.jsxs("div", { className: "nhs-navigation-split-view__secondary-inner", style: { display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }, children: [
                M && E && /* @__PURE__ */ n.jsx("div", { className: "nhs-navigation-split-view__secondary-header", style: { padding: "16px 32px", borderBottom: "1px solid var(--nsplit-divider)" }, children: typeof E == "function" ? E(M) : E }),
                /* @__PURE__ */ n.jsx("div", { style: { padding: 32, flex: 1, minWidth: 0 }, children: l?.(M) })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ n.jsx("div", { ref: _n, "aria-live": "polite", "aria-atomic": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" } }),
        /* @__PURE__ */ n.jsx("div", { "aria-live": "polite", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }, children: Qe ? "Expanded to three column layout" : "In two column layout" })
      ] })
    }
  );
}
jc.displayName = "NavigationSplitView";
const Nc = "150ms", Tc = "300ms", Dc = "500ms", Fc = "cubic-bezier(0.4, 0, 1, 1)", Ic = "cubic-bezier(0, 0, 0.2, 1)", Bc = "cubic-bezier(0.4, 0, 0.2, 1)", Rc = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", Lc = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Ec = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Mc = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", $c = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Ac = "1px", Hc = "2px", Pc = "4px", zc = "4px", Wc = "4px", Oc = "2px", Uc = "1px", Gc = "0px", Vc = "4px", Yc = "8px", qc = "12px", qa = "#d8dde0", Ka = "#4c6272", Za = "#d8dde0", Ja = "#aeb7bd", Xa = "#d5281b", Qa = "#005eb8", es = "#ffffff", ts = "#212b32", ns = "#007f3b", rs = "#330072", as = "#7c2855", ss = "#d5281b", os = "#ffeb3b", is = "#fff9c4", ls = "#ffb81c", cs = "#ed8b00", ds = "#00a499", us = "#ae2573", hs = "#4c6272", fs = "#768692", ms = "#aeb7bd", ps = "#d8dde0", gs = "#f0f4f5", Kc = "#212b32", Zc = "#4c6272", Jc = "#ffffff", Xc = "#212b32", Qc = "#005eb8", ed = "#7c2855", td = "#003087", nd = "#330072", rd = "#ffeb3b", ad = "#212b32", sd = "#d8dde0", od = "#ffffff33", id = "#d5281b", ld = "#4c6272", cd = "#ffffff", dd = "#007f3b", ud = "#ffffff", hd = "#006530", fd = "#004021", md = "#004021", pd = "#00000000", gd = "#ffffff", bd = "#005eb8", xd = "#005eb8", yd = "#d9e5f2", vd = "#c7daf0", _d = "#005eb8", kd = "#ffffff", wd = "#212b32", Sd = "#d9dde0", Cd = "#b3bcc2", jd = "#b3bcc2", Nd = "#d5281b", Td = "#aa2016", Dd = "#6a140e", Fd = "#6a140e", Id = "#005eb8", Bd = "#004b93", Rd = "#002f5c", Ld = "#002f5c", Ed = "8px", Md = "16px", $d = "12px", Ad = "16px", Hd = "4px", Pd = "40px", zd = "4px", Wd = "40px", Od = "12px", Ud = "16px", Gd = "32px", Vd = "16px", Yd = "20px", qd = "28px", Kd = "9px", Zd = "2px", Jd = "16px", Xd = "24px", Qd = "8px", eu = "24px", tu = "16px", nu = "4px", ru = "4px", au = "4px", su = "8px", ou = "4px", iu = "16px", lu = "#007f3b", cu = "#006530", du = "#004021", uu = "#d8dde0", hu = "#ffffff", fu = "#768692", mu = "#00000000", pu = "#ffeb3b", gu = "#00000000", bu = "#ffffff", xu = "#d9e5f2", yu = "#c7daf0", vu = "#005eb8", _u = "#005eb8", bs = "8px", xs = "16px", ys = "12px", vs = "16px", ku = "2px", wu = "4px", Su = "4px", Cu = "600", ju = "#ffffff", Nu = "#d8dde0", Tu = "#aeb7bd", Du = "#f0f4f5", Fu = "#212b32", Iu = "#212b32", Bu = "#005eb8", _s = "16px", ks = "32px", ws = "16px", Ru = "1px", Lu = "4px", Eu = "none", Mu = "0 2px 4px rgba(0, 0, 0, 0.1)", $u = "#ffffff", Au = "#ffffff", Hu = "#d8dde0", Pu = "#ffffff", zu = "#4c6272", Wu = "#ffeb3b", Ou = "#d5281b", Uu = "#aeb7bd", Gu = "#212b32", Vu = "#4c6272", Yu = "#768692", qu = "#212b32", Ku = "#ffffff", Zu = "600", Ju = "#d5281b", Xu = "600", Qu = "#4c6272", Ss = "4px", Cs = "40px", js = "40px", Ns = "12px", eh = "2px", th = "4px", nh = "0px", rh = "16px", ah = "18px", sh = "24px", oh = "32px", ih = "34px", lh = "32px", ch = "40px", dh = "48px", uh = "5.4ex", hh = "7.2ex", fh = "9ex", mh = "10.8ex", ph = "20ex", gh = "38ex", bh = "56ex", xh = "44px", yh = "40px", vh = "1020px", _h = "100%", kh = "50%", wh = "33.333%", Sh = "25%", Ch = "20%", jh = "320px", Nh = "641px", Th = "1025px", Dh = "1280px", Fh = "960px", Ih = "32px", Bh = "16px", Rh = "#d5281b", Lh = "#d5281b", Eh = "#ffffff", Mh = "#007f3b", $h = "#007f3b", Ah = "#ffffff", Hh = "#ffeb3b", Ph = "#ffeb3b", zh = "#212b32", Wh = "#005eb8", Oh = "#005eb8", Uh = "#ffffff", Gh = "#d8dde0", Vh = "#aeb7bd", Yh = "#768692", qh = "0 4px 0 #004021", Kh = "0 4px 0 #005eb8", Zh = "0 4px 0 #6a140e", Jh = "0 4px 0 #ffeb3b", Xh = "none", Qh = "0 2px 4px rgba(0, 0, 0, 0.1)", ef = "4px", tf = "0px", nf = "solid", rf = "0 0 0 3px #ffeb3b", af = "0 0 0 3px #ffeb3b", sf = "none", of = "0 1px 3px rgba(0, 0, 0, 0.12)", lf = "0 2px 6px rgba(0, 0, 0, 0.16)", cf = "0 4px 12px rgba(0, 0, 0, 0.20)", Ts = "0", Ds = "4px", Fs = "8px", Is = "16px", Bs = "24px", Rs = "32px", Ls = "40px", Es = "48px", Ms = "56px", $s = "64px", Pn = "0", zn = "0", Wn = "4px", On = "4px", Un = "8px", Gn = "8px", Vn = "8px", Yn = "16px", qn = "16px", Kn = "24px", Zn = "24px", Jn = "32px", Xn = "32px", Qn = "40px", er = "40px", tr = "48px", nr = "48px", rr = "56px", ar = "56px", sr = "64px", Ot = "Frutiger W01", Ut = "Arial, Helvetica, sans-serif", Gt = "sans-serif", Vt = "400", Yt = "600", qt = "400", Kt = "12px", Zt = "14px", Jt = "12pt", Xt = "14px", Qt = "16px", en = "12pt", tn = "16px", nn = "19px", rn = "13pt", an = "19px", sn = "22px", on = "15pt", ln = "22px", cn = "26px", dn = "17pt", un = "27px", hn = "36px", fn = "20pt", mn = "33px", pn = "48px", gn = "24pt", or = "16px", ir = "24px", Me = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, $e = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ae = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, He = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Pe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, ze = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, We = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Oe = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ue = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ge = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: Nc,
  AnimationDurationNormal: Tc,
  AnimationDurationSlow: Dc,
  AnimationEasingBounce: Rc,
  AnimationEasingEaseIn: Fc,
  AnimationEasingEaseInOut: Bc,
  AnimationEasingEaseOut: Ic,
  BorderColorCard: Za,
  BorderColorCardHover: Ja,
  BorderColorDefault: qa,
  BorderColorError: Xa,
  BorderColorForm: Ka,
  BorderRadiusLarge: qc,
  BorderRadiusMedium: Yc,
  BorderRadiusNone: Gc,
  BorderRadiusSmall: Vc,
  BorderWidthCardBottom: zc,
  BorderWidthDefault: Ac,
  BorderWidthFormElement: Hc,
  BorderWidthFormElementError: Pc,
  BorderWidthPanel: Wc,
  BorderWidthTableCell: Uc,
  BorderWidthTableHeader: Oc,
  BreakpointDesktop: Th,
  BreakpointLargeDesktop: Dh,
  BreakpointMobile: jh,
  BreakpointTablet: Nh,
  ButtonBorderRadius: wu,
  ButtonBorderWidth: ku,
  ButtonPrimaryBackgroundActive: du,
  ButtonPrimaryBackgroundDefault: lu,
  ButtonPrimaryBackgroundDisabled: uu,
  ButtonPrimaryBackgroundHover: cu,
  ButtonPrimaryBorderDefault: mu,
  ButtonPrimaryBorderFocus: pu,
  ButtonPrimaryTextDefault: hu,
  ButtonPrimaryTextDisabled: fu,
  ButtonSecondaryBackgroundActive: yu,
  ButtonSecondaryBackgroundDefault: gu,
  ButtonSecondaryBackgroundHover: xu,
  ButtonSecondaryBackgroundSolid: bu,
  ButtonSecondaryBorderDefault: _u,
  ButtonSecondaryTextDefault: vu,
  ButtonShadowSize: Su,
  ButtonSpacingPaddingHorizontalDesktop: vs,
  ButtonSpacingPaddingHorizontalMobile: xs,
  ButtonSpacingPaddingVerticalDesktop: ys,
  ButtonSpacingPaddingVerticalMobile: bs,
  ButtonTypographyWeight: Cu,
  CardBackgroundDefault: ju,
  CardBorderBottom: Du,
  CardBorderDefault: Nu,
  CardBorderHover: Tu,
  CardBorderWidthBottom: Lu,
  CardBorderWidthDefault: Ru,
  CardShadowDefault: Eu,
  CardShadowHover: Mu,
  CardSpacingHeadingMargin: ws,
  CardSpacingPaddingDesktop: ks,
  CardSpacingPaddingMobile: _s,
  CardTextDescription: Iu,
  CardTextHeading: Fu,
  CardTextLink: Bu,
  ColorBorderDefault: sd,
  ColorBorderSecondary: od,
  ColorButtonLoginActive: Rd,
  ColorButtonLoginBackground: Id,
  ColorButtonLoginHover: Bd,
  ColorButtonLoginShadow: Ld,
  ColorButtonPrimaryActive: fd,
  ColorButtonPrimaryBackground: dd,
  ColorButtonPrimaryHover: hd,
  ColorButtonPrimaryShadow: md,
  ColorButtonPrimaryText: ud,
  ColorButtonReverseActive: Cd,
  ColorButtonReverseBackground: kd,
  ColorButtonReverseHover: Sd,
  ColorButtonReverseShadow: jd,
  ColorButtonReverseText: wd,
  ColorButtonSecondaryActive: vd,
  ColorButtonSecondaryBackground: pd,
  ColorButtonSecondaryBackgroundSolid: gd,
  ColorButtonSecondaryBorder: bd,
  ColorButtonSecondaryHover: yd,
  ColorButtonSecondaryShadow: _d,
  ColorButtonSecondaryText: xd,
  ColorButtonWarningActive: Dd,
  ColorButtonWarningBackground: Nd,
  ColorButtonWarningHover: Td,
  ColorButtonWarningShadow: Fd,
  ColorError: id,
  ColorFocusBackground: rd,
  ColorFocusText: ad,
  ColorFormBackground: cd,
  ColorFormBorder: ld,
  ColorGrey1: hs,
  ColorGrey2: fs,
  ColorGrey3: ms,
  ColorGrey4: ps,
  ColorGrey5: gs,
  ColorLinkActive: td,
  ColorLinkDefault: Qc,
  ColorLinkHover: ed,
  ColorLinkVisited: nd,
  ColorPrimaryBlack: ts,
  ColorPrimaryBlue: Qa,
  ColorPrimaryDarkPink: as,
  ColorPrimaryGreen: ns,
  ColorPrimaryPurple: rs,
  ColorPrimaryRed: ss,
  ColorPrimaryWhite: es,
  ColorPrimaryYellow: os,
  ColorSecondaryAquaGreen: ds,
  ColorSecondaryOrange: cs,
  ColorSecondaryPaleYellow: is,
  ColorSecondaryPink: us,
  ColorSecondaryWarmYellow: ls,
  ColorTextPrimary: Kc,
  ColorTextPrint: Xc,
  ColorTextReverse: Jc,
  ColorTextSecondary: Zc,
  ComponentBlur: ru,
  ComponentBreadcrumbChevronMarginLeft: Kd,
  ComponentBreadcrumbChevronMarginRight: Zd,
  ComponentBreadcrumbPaddingTopDesktop: Xd,
  ComponentBreadcrumbPaddingTopMobile: Jd,
  ComponentButtonPaddingDesktopHorizontal: Ad,
  ComponentButtonPaddingDesktopVertical: $d,
  ComponentButtonPaddingMobileHorizontal: Md,
  ComponentButtonPaddingMobileVertical: Ed,
  ComponentButtonShadowSize: Hd,
  ComponentCardHeadingMargin: Vd,
  ComponentCardPaddingDesktop: Gd,
  ComponentCardPaddingMobile: Ud,
  ComponentDetails: su,
  ComponentExpander: ou,
  ComponentFormCheckboxLabelPadding: Od,
  ComponentFormCheckboxSize: Wd,
  ComponentFormInputMinHeight: Pd,
  ComponentFormInputPadding: zd,
  ComponentLink: au,
  ComponentPagination: iu,
  ComponentPanelPaddingDesktop: qd,
  ComponentPanelPaddingMobile: Yd,
  ComponentSpread: nu,
  ComponentSummaryListCellPaddingHorizontal: eu,
  ComponentSummaryListCellPaddingVertical: Qd,
  ComponentSummaryListRowMargin: tu,
  ElevationHigh: cf,
  ElevationLow: of,
  ElevationMedium: lf,
  ElevationNone: sf,
  FocusOutlineOffset: tf,
  FocusOutlineStyle: nf,
  FocusOutlineWidth: ef,
  FocusShadowButton: af,
  FocusShadowInput: rf,
  FontFamilyBase: Ot,
  FontFamilyFallback: Ut,
  FontFamilyPrint: Gt,
  FontLineHeightBase: ir,
  FontSize14Mobile: Kt,
  FontSize14Print: Jt,
  FontSize14Tablet: Zt,
  FontSize16Mobile: Xt,
  FontSize16Print: en,
  FontSize16Tablet: Qt,
  FontSize19Mobile: tn,
  FontSize19Print: rn,
  FontSize19Tablet: nn,
  FontSize22Mobile: an,
  FontSize22Print: on,
  FontSize22Tablet: sn,
  FontSize26Mobile: ln,
  FontSize26Print: dn,
  FontSize26Tablet: cn,
  FontSize36Mobile: un,
  FontSize36Print: fn,
  FontSize36Tablet: hn,
  FontSize48Mobile: mn,
  FontSize48Print: gn,
  FontSize48Tablet: pn,
  FontSizeBase: or,
  FontWeightBold: Yt,
  FontWeightLight: qt,
  FontWeightNormal: Vt,
  FormBorderRadius: nh,
  FormBorderWidthDefault: eh,
  FormBorderWidthError: th,
  FormErrorTextDefault: Ju,
  FormErrorTypographyWeight: Xu,
  FormHintTextDefault: Qu,
  FormInputBackgroundDefault: $u,
  FormInputBackgroundDisabled: Hu,
  FormInputBackgroundError: Pu,
  FormInputBackgroundFocus: Au,
  FormInputBorderDefault: zu,
  FormInputBorderDisabled: Uu,
  FormInputBorderError: Ou,
  FormInputBorderFocus: Wu,
  FormInputTextDefault: Gu,
  FormInputTextDisabled: Yu,
  FormInputTextPlaceholder: Vu,
  FormLabelTextDefault: qu,
  FormLabelTextRequired: Ku,
  FormLabelTypographyWeight: Zu,
  FormSpacingCheckboxLabelPadding: Ns,
  FormSpacingCheckboxSize: js,
  FormSpacingInputMinHeight: Cs,
  FormSpacingInputPadding: Ss,
  GridGutter: Ih,
  GridGutterHalf: Bh,
  GridPageWidth: Fh,
  HeadingsNhsukHeadingL: $e,
  HeadingsNhsukHeadingM: Ae,
  HeadingsNhsukHeadingS: He,
  HeadingsNhsukHeadingXl: Me,
  HeadingsNhsukHeadingXs: Pe,
  LayoutColumnActions: Ch,
  LayoutColumnFull: _h,
  LayoutColumnHalf: kh,
  LayoutColumnQuarter: Sh,
  LayoutColumnThird: wh,
  LayoutContainerMaxWidth: vh,
  ParagraphsBody: ze,
  ParagraphsBodyLarge: We,
  ParagraphsBodySmall: Oe,
  ParagraphsLedeText: Ue,
  ParagraphsLedeTextSmall: Ge,
  ShadowButtonDefault: qh,
  ShadowButtonFocus: Jh,
  ShadowButtonSecondary: Kh,
  ShadowButtonWarning: Zh,
  ShadowCardDefault: Xh,
  ShadowCardHover: Qh,
  SizeButtonMinHeightDesktop: yh,
  SizeButtonMinHeightMobile: xh,
  SizeFormControlLarge: dh,
  SizeFormControlMedium: ch,
  SizeFormControlSmall: lh,
  SizeFormInputWidth2xl: gh,
  SizeFormInputWidth3xl: bh,
  SizeFormInputWidthLg: mh,
  SizeFormInputWidthMd: fh,
  SizeFormInputWidthSm: hh,
  SizeFormInputWidthXl: ph,
  SizeFormInputWidthXs: uh,
  SizeIconExtraLarge: oh,
  SizeIconLarge: sh,
  SizeIconMedium: ah,
  SizeIconNhsDefault: ih,
  SizeIconSmall: rh,
  Spacing0: Ts,
  Spacing1: Ds,
  Spacing2: Fs,
  Spacing3: Is,
  Spacing4: Bs,
  Spacing5: Rs,
  Spacing6: Ls,
  Spacing7: Es,
  Spacing8: Ms,
  Spacing9: $s,
  SpacingResponsive0Mobile: Pn,
  SpacingResponsive0Tablet: zn,
  SpacingResponsive1Mobile: Wn,
  SpacingResponsive1Tablet: On,
  SpacingResponsive2Mobile: Un,
  SpacingResponsive2Tablet: Gn,
  SpacingResponsive3Mobile: Vn,
  SpacingResponsive3Tablet: Yn,
  SpacingResponsive4Mobile: qn,
  SpacingResponsive4Tablet: Kn,
  SpacingResponsive5Mobile: Zn,
  SpacingResponsive5Tablet: Jn,
  SpacingResponsive6Mobile: Xn,
  SpacingResponsive6Tablet: Qn,
  SpacingResponsive7Mobile: er,
  SpacingResponsive7Tablet: tr,
  SpacingResponsive8Mobile: nr,
  SpacingResponsive8Tablet: rr,
  SpacingResponsive9Mobile: ar,
  SpacingResponsive9Tablet: sr,
  StateDisabledBackground: Gh,
  StateDisabledBorder: Vh,
  StateDisabledText: Yh,
  StateErrorBackground: Rh,
  StateErrorBorder: Lh,
  StateErrorText: Eh,
  StateInfoBackground: Wh,
  StateInfoBorder: Oh,
  StateInfoText: Uh,
  StateSuccessBackground: Mh,
  StateSuccessBorder: $h,
  StateSuccessText: Ah,
  StateWarningBackground: Hh,
  StateWarningBorder: Ph,
  StateWarningText: zh,
  TransitionButtonDefault: Lc,
  TransitionButtonShadow: Ec,
  TransitionCardHover: $c,
  TransitionInputFocus: Mc
}, Symbol.toStringTag, { value: "Module" })), Vf = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), Yf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: Me.fontFamily,
      fontWeight: Me.fontWeight,
      fontSize: Me.fontSize.mobile,
      lineHeight: Me.lineHeight,
      marginTop: Me.marginTop,
      marginBottom: Me.marginBottom.mobile,
      ...r
    },
    children: e
  }
), qf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
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
), Kf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), Zf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
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
), Jf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
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
), Xf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), Qf = ({
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
), em = ({
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
), tm = ({
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
), nm = ({
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
), rm = () => ve(() => df, []), am = () => ve(() => ({
  // Border colors
  BorderColorDefault: qa,
  BorderColorForm: Ka,
  BorderColorCard: Za,
  BorderColorCardHover: Ja,
  BorderColorError: Xa,
  // Primary colors
  ColorPrimaryBlue: Qa,
  ColorPrimaryWhite: es,
  ColorPrimaryBlack: ts,
  ColorPrimaryGreen: ns,
  ColorPrimaryPurple: rs,
  ColorPrimaryDarkPink: as,
  ColorPrimaryRed: ss,
  ColorPrimaryYellow: os,
  // Secondary colors
  ColorSecondaryPaleYellow: is,
  ColorSecondaryWarmYellow: ls,
  ColorSecondaryOrange: cs,
  ColorSecondaryAquaGreen: ds,
  ColorSecondaryPink: us,
  // Grey scale
  ColorGrey1: hs,
  ColorGrey2: fs,
  ColorGrey3: ms,
  ColorGrey4: ps,
  ColorGrey5: gs
}), []), sm = () => ve(() => ({
  Spacing0: Ts,
  Spacing1: Ds,
  Spacing2: Fs,
  Spacing3: Is,
  Spacing4: Bs,
  Spacing5: Rs,
  Spacing6: Ls,
  Spacing7: Es,
  Spacing8: Ms,
  Spacing9: $s
}), []), om = () => ve(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: Kt,
    Size16: Xt,
    Size19: tn,
    Size22: an,
    Size26: ln,
    Size36: un,
    Size48: mn
  },
  Tablet: {
    Size14: Zt,
    Size16: Qt,
    Size19: nn,
    Size22: sn,
    Size26: cn,
    Size36: hn,
    Size48: pn
  },
  Print: {
    Size14: Jt,
    Size16: en,
    Size19: rn,
    Size22: on,
    Size26: dn,
    Size36: fn,
    Size48: gn
  },
  Family: {
    Base: Ot,
    Fallback: Ut,
    Print: Gt
  },
  Weight: {
    Normal: Vt,
    Bold: Yt,
    Light: qt
  },
  Base: {
    Size: or,
    LineHeight: ir
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Ot,
  FontFamilyFallback: Ut,
  FontFamilyPrint: Gt,
  FontWeightNormal: Vt,
  FontWeightBold: Yt,
  FontWeightLight: qt,
  FontSize14Mobile: Kt,
  FontSize14Tablet: Zt,
  FontSize14Print: Jt,
  FontSize16Mobile: Xt,
  FontSize16Tablet: Qt,
  FontSize16Print: en,
  FontSize19Mobile: tn,
  FontSize19Tablet: nn,
  FontSize19Print: rn,
  FontSize22Mobile: an,
  FontSize22Tablet: sn,
  FontSize22Print: on,
  FontSize26Mobile: ln,
  FontSize26Tablet: cn,
  FontSize26Print: dn,
  FontSize36Mobile: un,
  FontSize36Tablet: hn,
  FontSize36Print: fn,
  FontSize48Mobile: mn,
  FontSize48Tablet: pn,
  FontSize48Print: gn,
  FontSizeBase: or,
  FontLineHeightBase: ir
}), []), im = () => ve(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: Pn,
    Size1: Wn,
    Size2: Un,
    Size3: Vn,
    Size4: qn,
    Size5: Zn,
    Size6: Xn,
    Size7: er,
    Size8: nr,
    Size9: ar
  },
  Tablet: {
    Size0: zn,
    Size1: On,
    Size2: Gn,
    Size3: Yn,
    Size4: Kn,
    Size5: Jn,
    Size6: Qn,
    Size7: tr,
    Size8: rr,
    Size9: sr
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: Pn,
  SpacingResponsive0Tablet: zn,
  SpacingResponsive1Mobile: Wn,
  SpacingResponsive1Tablet: On,
  SpacingResponsive2Mobile: Un,
  SpacingResponsive2Tablet: Gn,
  SpacingResponsive3Mobile: Vn,
  SpacingResponsive3Tablet: Yn,
  SpacingResponsive4Mobile: qn,
  SpacingResponsive4Tablet: Kn,
  SpacingResponsive5Mobile: Zn,
  SpacingResponsive5Tablet: Jn,
  SpacingResponsive6Mobile: Xn,
  SpacingResponsive6Tablet: Qn,
  SpacingResponsive7Mobile: er,
  SpacingResponsive7Tablet: tr,
  SpacingResponsive8Mobile: nr,
  SpacingResponsive8Tablet: rr,
  SpacingResponsive9Mobile: ar,
  SpacingResponsive9Tablet: sr
}), []), lm = () => ve(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: bs,
  ButtonSpacingPaddingHorizontalMobile: xs,
  ButtonSpacingPaddingVerticalDesktop: ys,
  ButtonSpacingPaddingHorizontalDesktop: vs,
  // Card spacing	
  CardSpacingPaddingMobile: _s,
  CardSpacingPaddingDesktop: ks,
  CardSpacingHeadingMargin: ws,
  // Form spacing
  FormSpacingInputPadding: Ss,
  FormSpacingInputMinHeight: Cs,
  FormSpacingCheckboxSize: js,
  FormSpacingCheckboxLabelPadding: Ns
}), []), cm = () => ve(() => ({
  xl: Me,
  l: $e,
  m: Ae,
  s: He,
  xs: Pe
}), []), dm = () => ve(() => ({
  body: ze,
  bodyLarge: We,
  bodySmall: Oe,
  ledeText: Ue,
  ledeTextSmall: Ge
}), []), um = () => ve(() => ({
  headings: {
    xl: Me,
    l: $e,
    m: Ae,
    s: He,
    xs: Pe
  },
  paragraphs: {
    body: ze,
    bodyLarge: We,
    bodySmall: Oe,
    ledeText: Ue,
    ledeTextSmall: Ge
  },
  fonts: {
    family: {
      base: Ot,
      fallback: Ut,
      print: Gt
    },
    weight: {
      normal: Vt,
      bold: Yt,
      light: qt
    },
    sizes: {
      mobile: {
        size14: Kt,
        size16: Xt,
        size19: tn,
        size22: an,
        size26: ln,
        size36: un,
        size48: mn
      },
      tablet: {
        size14: Zt,
        size16: Qt,
        size19: nn,
        size22: sn,
        size26: cn,
        size36: hn,
        size48: pn
      },
      print: {
        size14: Jt,
        size16: en,
        size19: rn,
        size22: on,
        size26: dn,
        size36: fn,
        size48: gn
      }
    }
  }
}), []);
function hm(e = {}) {
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
const As = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, Ne = {
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
function fm(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...As, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${Ne.normal.eot}?#iefix") format("eot"),
       url("${t}${Ne.normal.woff2}") format("woff2"),
       url("${t}${Ne.normal.woff}") format("woff"),
       url("${t}${Ne.normal.ttf}") format("truetype");
  src: url("${t}${Ne.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${Ne.bold.eot}?#iefix") format("eot"),
       url("${t}${Ne.bold.woff2}") format("woff2"),
       url("${t}${Ne.bold.woff}") format("woff"),
       url("${t}${Ne.bold.ttf}") format("truetype");
  src: url("${t}${Ne.bold.eot}");
}`), a.join(`
`);
}
function mm(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...As, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${Ne.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ne.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${Ne.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${Ne.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const pm = '"Frutiger W01", Arial, Helvetica, sans-serif', gm = "Arial, Helvetica, sans-serif";
async function bm() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  lr as Account,
  hf as ActionLink,
  zf as AdaptiveDataGrid,
  Nc as AnimationDurationFast,
  Tc as AnimationDurationNormal,
  Dc as AnimationDurationSlow,
  Rc as AnimationEasingBounce,
  Fc as AnimationEasingEaseIn,
  Bc as AnimationEasingEaseInOut,
  Ic as AnimationEasingEaseOut,
  Aa as AppointmentCard,
  Al as AriaDataGrid,
  An as AriaTabsDataGrid,
  zf as AriaTabsDataGridAdaptive,
  Ln as BackLink,
  Za as BorderColorCard,
  Ja as BorderColorCardHover,
  qa as BorderColorDefault,
  Xa as BorderColorError,
  Ka as BorderColorForm,
  qc as BorderRadiusLarge,
  Yc as BorderRadiusMedium,
  Gc as BorderRadiusNone,
  Vc as BorderRadiusSmall,
  zc as BorderWidthCardBottom,
  Ac as BorderWidthDefault,
  Hc as BorderWidthFormElement,
  Pc as BorderWidthFormElementError,
  Wc as BorderWidthPanel,
  Uc as BorderWidthTableCell,
  Oc as BorderWidthTableHeader,
  Fl as Breadcrumb,
  Th as BreakpointDesktop,
  Dh as BreakpointLargeDesktop,
  jh as BreakpointMobile,
  Nh as BreakpointTablet,
  De as Button,
  wu as ButtonBorderRadius,
  ku as ButtonBorderWidth,
  du as ButtonPrimaryBackgroundActive,
  lu as ButtonPrimaryBackgroundDefault,
  uu as ButtonPrimaryBackgroundDisabled,
  cu as ButtonPrimaryBackgroundHover,
  mu as ButtonPrimaryBorderDefault,
  pu as ButtonPrimaryBorderFocus,
  hu as ButtonPrimaryTextDefault,
  fu as ButtonPrimaryTextDisabled,
  yu as ButtonSecondaryBackgroundActive,
  gu as ButtonSecondaryBackgroundDefault,
  xu as ButtonSecondaryBackgroundHover,
  bu as ButtonSecondaryBackgroundSolid,
  _u as ButtonSecondaryBorderDefault,
  vu as ButtonSecondaryTextDefault,
  Su as ButtonShadowSize,
  vs as ButtonSpacingPaddingHorizontalDesktop,
  xs as ButtonSpacingPaddingHorizontalMobile,
  ys as ButtonSpacingPaddingVerticalDesktop,
  bs as ButtonSpacingPaddingVerticalMobile,
  Cu as ButtonTypographyWeight,
  Ea as Card,
  ju as CardBackgroundDefault,
  Du as CardBorderBottom,
  Nu as CardBorderDefault,
  Tu as CardBorderHover,
  Lu as CardBorderWidthBottom,
  Ru as CardBorderWidthDefault,
  Df as CardGroup,
  Ff as CardGroupItem,
  Eu as CardShadowDefault,
  Mu as CardShadowHover,
  ws as CardSpacingHeadingMargin,
  ks as CardSpacingPaddingDesktop,
  _s as CardSpacingPaddingMobile,
  Iu as CardTextDescription,
  Fu as CardTextHeading,
  Bu as CardTextLink,
  If as CareCard,
  ff as CharacterCount,
  so as Checkbox,
  oo as Checkboxes,
  sd as ColorBorderDefault,
  od as ColorBorderSecondary,
  Rd as ColorButtonLoginActive,
  Id as ColorButtonLoginBackground,
  Bd as ColorButtonLoginHover,
  Ld as ColorButtonLoginShadow,
  fd as ColorButtonPrimaryActive,
  dd as ColorButtonPrimaryBackground,
  hd as ColorButtonPrimaryHover,
  md as ColorButtonPrimaryShadow,
  ud as ColorButtonPrimaryText,
  Cd as ColorButtonReverseActive,
  kd as ColorButtonReverseBackground,
  Sd as ColorButtonReverseHover,
  jd as ColorButtonReverseShadow,
  wd as ColorButtonReverseText,
  vd as ColorButtonSecondaryActive,
  pd as ColorButtonSecondaryBackground,
  gd as ColorButtonSecondaryBackgroundSolid,
  bd as ColorButtonSecondaryBorder,
  yd as ColorButtonSecondaryHover,
  _d as ColorButtonSecondaryShadow,
  xd as ColorButtonSecondaryText,
  Dd as ColorButtonWarningActive,
  Nd as ColorButtonWarningBackground,
  Td as ColorButtonWarningHover,
  Fd as ColorButtonWarningShadow,
  id as ColorError,
  rd as ColorFocusBackground,
  ad as ColorFocusText,
  cd as ColorFormBackground,
  ld as ColorFormBorder,
  hs as ColorGrey1,
  fs as ColorGrey2,
  ms as ColorGrey3,
  ps as ColorGrey4,
  gs as ColorGrey5,
  td as ColorLinkActive,
  Qc as ColorLinkDefault,
  ed as ColorLinkHover,
  nd as ColorLinkVisited,
  ts as ColorPrimaryBlack,
  Qa as ColorPrimaryBlue,
  as as ColorPrimaryDarkPink,
  ns as ColorPrimaryGreen,
  rs as ColorPrimaryPurple,
  ss as ColorPrimaryRed,
  es as ColorPrimaryWhite,
  os as ColorPrimaryYellow,
  ds as ColorSecondaryAquaGreen,
  cs as ColorSecondaryOrange,
  is as ColorSecondaryPaleYellow,
  us as ColorSecondaryPink,
  ls as ColorSecondaryWarmYellow,
  Kc as ColorTextPrimary,
  Xc as ColorTextPrint,
  Jc as ColorTextReverse,
  Zc as ColorTextSecondary,
  hr as Column,
  ru as ComponentBlur,
  Kd as ComponentBreadcrumbChevronMarginLeft,
  Zd as ComponentBreadcrumbChevronMarginRight,
  Xd as ComponentBreadcrumbPaddingTopDesktop,
  Jd as ComponentBreadcrumbPaddingTopMobile,
  Ad as ComponentButtonPaddingDesktopHorizontal,
  $d as ComponentButtonPaddingDesktopVertical,
  Md as ComponentButtonPaddingMobileHorizontal,
  Ed as ComponentButtonPaddingMobileVertical,
  Hd as ComponentButtonShadowSize,
  Vd as ComponentCardHeadingMargin,
  Gd as ComponentCardPaddingDesktop,
  Ud as ComponentCardPaddingMobile,
  su as ComponentDetails,
  ou as ComponentExpander,
  Od as ComponentFormCheckboxLabelPadding,
  Wd as ComponentFormCheckboxSize,
  Pd as ComponentFormInputMinHeight,
  zd as ComponentFormInputPadding,
  au as ComponentLink,
  iu as ComponentPagination,
  qd as ComponentPanelPaddingDesktop,
  Yd as ComponentPanelPaddingMobile,
  nu as ComponentSpread,
  eu as ComponentSummaryListCellPaddingHorizontal,
  Qd as ComponentSummaryListCellPaddingVertical,
  tu as ComponentSummaryListRowMargin,
  ga as Container,
  Tf as ContentsList,
  As as DEFAULT_FONT_CONFIG,
  Af as DashboardSummaryGrid,
  _f as DateInput,
  Bl as Details,
  Rl as DoDontList,
  cf as ElevationHigh,
  of as ElevationLow,
  lf as ElevationMedium,
  sf as ElevationNone,
  Br as ErrorMessage,
  vf as ErrorSummary,
  Ll as Expander,
  Ne as FRUTIGER_FONT_FILES,
  ur as Fieldset,
  tf as FocusOutlineOffset,
  nf as FocusOutlineStyle,
  ef as FocusOutlineWidth,
  af as FocusShadowButton,
  rf as FocusShadowInput,
  Ot as FontFamilyBase,
  Ut as FontFamilyFallback,
  Gt as FontFamilyPrint,
  ir as FontLineHeightBase,
  Kt as FontSize14Mobile,
  Jt as FontSize14Print,
  Zt as FontSize14Tablet,
  Xt as FontSize16Mobile,
  en as FontSize16Print,
  Qt as FontSize16Tablet,
  tn as FontSize19Mobile,
  rn as FontSize19Print,
  nn as FontSize19Tablet,
  an as FontSize22Mobile,
  on as FontSize22Print,
  sn as FontSize22Tablet,
  ln as FontSize26Mobile,
  dn as FontSize26Print,
  cn as FontSize26Tablet,
  un as FontSize36Mobile,
  fn as FontSize36Print,
  hn as FontSize36Tablet,
  mn as FontSize48Mobile,
  gn as FontSize48Print,
  pn as FontSize48Tablet,
  or as FontSizeBase,
  Yt as FontWeightBold,
  qt as FontWeightLight,
  Vt as FontWeightNormal,
  ka as Footer,
  nh as FormBorderRadius,
  eh as FormBorderWidthDefault,
  th as FormBorderWidthError,
  Ju as FormErrorTextDefault,
  Xu as FormErrorTypographyWeight,
  Qu as FormHintTextDefault,
  $u as FormInputBackgroundDefault,
  Hu as FormInputBackgroundDisabled,
  Pu as FormInputBackgroundError,
  Au as FormInputBackgroundFocus,
  zu as FormInputBorderDefault,
  Uu as FormInputBorderDisabled,
  Ou as FormInputBorderError,
  Wu as FormInputBorderFocus,
  Gu as FormInputTextDefault,
  Yu as FormInputTextDisabled,
  Vu as FormInputTextPlaceholder,
  qu as FormLabelTextDefault,
  Ku as FormLabelTextRequired,
  Zu as FormLabelTypographyWeight,
  Ns as FormSpacingCheckboxLabelPadding,
  js as FormSpacingCheckboxSize,
  Cs as FormSpacingInputMinHeight,
  Ss as FormSpacingInputPadding,
  jf as GanttChart,
  uo as Grid,
  Ih as GridGutter,
  Bh as GridGutterHalf,
  Fh as GridPageWidth,
  _a as Header,
  Sf as HeaderSSR,
  va as HeaderSearch,
  Cf as HeaderStatic,
  Ke as Heading,
  $e as HeadingsNhsukHeadingL,
  Ae as HeadingsNhsukHeadingM,
  He as HeadingsNhsukHeadingS,
  Me as HeadingsNhsukHeadingXl,
  Pe as HeadingsNhsukHeadingXs,
  xo as Hero,
  ma as Hint,
  $f as Images,
  cr as Input,
  Bf as InsetText,
  dr as Label,
  Ch as LayoutColumnActions,
  _h as LayoutColumnFull,
  kh as LayoutColumnHalf,
  Sh as LayoutColumnQuarter,
  wh as LayoutColumnThird,
  vh as LayoutContainerMaxWidth,
  mo as List,
  ba as MainWrapper,
  Ha as MedicationCard,
  Xf as NHSBodyText,
  Qf as NHSBodyTextLarge,
  em as NHSBodyTextSmall,
  Yf as NHSHeading1,
  qf as NHSHeading2,
  Kf as NHSHeading3,
  Zf as NHSHeading4,
  Jf as NHSHeading5,
  tm as NHSLedeText,
  nm as NHSLedeTextSmall,
  wf as NHSThemeProvider,
  gm as NHS_FALLBACK_FONT_STACK,
  pm as NHS_FONT_STACK,
  jc as NavigationSplitView,
  Of as PageTemplate,
  Nf as Pagination,
  Il as Panel,
  ze as ParagraphsBody,
  We as ParagraphsBodyLarge,
  Oe as ParagraphsBodySmall,
  Ue as ParagraphsLedeText,
  Ge as ParagraphsLedeTextSmall,
  $a as PatientCard,
  mf as Radios,
  zf as ResponsiveDataGrid,
  Wf as ResponsiveDataGridDemo,
  Et as Row,
  pa as Select,
  lo as SelectOption,
  qh as ShadowButtonDefault,
  Jh as ShadowButtonFocus,
  Kh as ShadowButtonSecondary,
  Zh as ShadowButtonWarning,
  Xh as ShadowCardDefault,
  Qh as ShadowCardHover,
  yh as SizeButtonMinHeightDesktop,
  xh as SizeButtonMinHeightMobile,
  dh as SizeFormControlLarge,
  ch as SizeFormControlMedium,
  lh as SizeFormControlSmall,
  gh as SizeFormInputWidth2xl,
  bh as SizeFormInputWidth3xl,
  mh as SizeFormInputWidthLg,
  fh as SizeFormInputWidthMd,
  hh as SizeFormInputWidthSm,
  ph as SizeFormInputWidthXl,
  uh as SizeFormInputWidthXs,
  oh as SizeIconExtraLarge,
  sh as SizeIconLarge,
  ah as SizeIconMedium,
  ih as SizeIconNhsDefault,
  rh as SizeIconSmall,
  La as SkipLink,
  Hf as SortStatusControl,
  Ts as Spacing0,
  Ds as Spacing1,
  Fs as Spacing2,
  Is as Spacing3,
  Bs as Spacing4,
  Rs as Spacing5,
  Ls as Spacing6,
  Es as Spacing7,
  Ms as Spacing8,
  $s as Spacing9,
  Pn as SpacingResponsive0Mobile,
  zn as SpacingResponsive0Tablet,
  Wn as SpacingResponsive1Mobile,
  On as SpacingResponsive1Tablet,
  Un as SpacingResponsive2Mobile,
  Gn as SpacingResponsive2Tablet,
  Vn as SpacingResponsive3Mobile,
  Yn as SpacingResponsive3Tablet,
  qn as SpacingResponsive4Mobile,
  Kn as SpacingResponsive4Tablet,
  Zn as SpacingResponsive5Mobile,
  Jn as SpacingResponsive5Tablet,
  Xn as SpacingResponsive6Mobile,
  Qn as SpacingResponsive6Tablet,
  er as SpacingResponsive7Mobile,
  tr as SpacingResponsive7Tablet,
  nr as SpacingResponsive8Mobile,
  rr as SpacingResponsive8Tablet,
  ar as SpacingResponsive9Mobile,
  sr as SpacingResponsive9Tablet,
  pf as SpacingUtilities,
  Gh as StateDisabledBackground,
  Vh as StateDisabledBorder,
  Yh as StateDisabledText,
  Rh as StateErrorBackground,
  Lh as StateErrorBorder,
  Eh as StateErrorText,
  Wh as StateInfoBackground,
  Oh as StateInfoBorder,
  Uh as StateInfoText,
  Mh as StateSuccessBackground,
  $h as StateSuccessBorder,
  Ah as StateSuccessText,
  Hh as StateWarningBackground,
  Ph as StateWarningBorder,
  zh as StateWarningText,
  $l as SummaryCard,
  Rf as SummaryList,
  Lf as Table,
  Ef as Tabs,
  qe as Tag,
  El as TaskList,
  io as Textarea,
  Uf as TransactionalPageTemplate,
  Lc as TransitionButtonDefault,
  Ec as TransitionButtonShadow,
  $c as TransitionCardHover,
  Mc as TransitionInputFocus,
  Pa as VitalsCard,
  yf as WIDTH_FRACTIONS,
  Mf as WarningCallout,
  Ga as WidthContainer,
  bf as WidthUtilities,
  bm as checkFrutigerLoaded,
  kr as createGenericTabsConfig,
  Pf as createTCHTabsConfig,
  fm as generateFrutigerFontFace,
  Vf as getResponsiveStyles,
  gf as getSpacingClass,
  xf as getWidthClass,
  mm as preloadFrutigerFonts,
  Kl as tchDataConfig,
  am as useColors,
  lm as useComponentSpacing,
  cm as useNHSHeadings,
  dm as useNHSParagraphs,
  kf as useNHSTheme,
  um as useNHSTypographySystem,
  hm as useNavigationSplitDrill,
  wc as useNavigationSplitUrlSync,
  Ya as useNhsFdpBreakpoints,
  im as useResponsiveSpacing,
  Gf as useResponsiveValue,
  sm as useSpacing,
  rm as useTokens,
  om as useTypography
};
//# sourceMappingURL=index.esm.js.map
