import * as us from "react";
import je, { useState as he, useEffect as pe, useCallback as X, createElement as Ar, useRef as me, useMemo as ge, createContext as hs, useContext as fs, forwardRef as rt, useImperativeHandle as Hr, useReducer as Pr } from "react";
function ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var pt = { exports: {} }, st = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nr;
function ps() {
  if (nr) return st;
  nr = 1;
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
  return st.Fragment = t, st.jsx = r, st.jsxs = r, st;
}
var ot = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function gs() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    function e(j) {
      if (j == null) return null;
      if (typeof j == "function")
        return j.$$typeof === _ ? null : j.displayName || j.name || null;
      if (typeof j == "string") return j;
      switch (j) {
        case v:
          return "Fragment";
        case D:
          return "Profiler";
        case C:
          return "StrictMode";
        case E:
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
          case B:
            return "Portal";
          case $:
            return (j.displayName || "Context") + ".Provider";
          case R:
            return (j._context.displayName || "Context") + ".Consumer";
          case w:
            var ee = j.render;
            return j = j.displayName, j || (j = ee.displayName || ee.name || "", j = j !== "" ? "ForwardRef(" + j + ")" : "ForwardRef"), j;
          case L:
            return ee = j.displayName || null, ee !== null ? ee : e(j.type) || "Memo";
          case F:
            ee = j._payload, j = j._init;
            try {
              return e(j(ee));
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
        var ee = !1;
      } catch {
        ee = !0;
      }
      if (ee) {
        ee = console;
        var H = ee.error, O = typeof Symbol == "function" && Symbol.toStringTag && j[Symbol.toStringTag] || j.constructor.name || "Object";
        return H.call(
          ee,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          O
        ), t(j);
      }
    }
    function a(j) {
      if (j === v) return "<>";
      if (typeof j == "object" && j !== null && j.$$typeof === F)
        return "<...>";
      try {
        var ee = e(j);
        return ee ? "<" + ee + ">" : "<...>";
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
      if (x.call(j, "key")) {
        var ee = Object.getOwnPropertyDescriptor(j, "key").get;
        if (ee && ee.isReactWarning) return !1;
      }
      return j.key !== void 0;
    }
    function l(j, ee) {
      function H() {
        A || (A = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          ee
        ));
      }
      H.isReactWarning = !0, Object.defineProperty(j, "key", {
        get: H,
        configurable: !0
      });
    }
    function c() {
      var j = e(this.type);
      return Q[j] || (Q[j] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), j = this.props.ref, j !== void 0 ? j : null;
    }
    function u(j, ee, H, O, Y, ue, f, T) {
      return H = ue.ref, j = {
        $$typeof: k,
        type: j,
        key: ee,
        props: ue,
        _owner: Y
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
    function d(j, ee, H, O, Y, ue, f, T) {
      var U = ee.children;
      if (U !== void 0)
        if (O)
          if (z(U)) {
            for (O = 0; O < U.length; O++)
              m(U[O]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else m(U);
      if (x.call(ee, "key")) {
        U = e(j);
        var M = Object.keys(ee).filter(function(V) {
          return V !== "key";
        });
        O = 0 < M.length ? "{key: someKey, " + M.join(": ..., ") + ": ...}" : "{key: someKey}", ie[U + O] || (M = 0 < M.length ? "{" + M.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          O,
          U,
          M,
          U
        ), ie[U + O] = !0);
      }
      if (U = null, H !== void 0 && (r(H), U = "" + H), i(ee) && (r(ee.key), U = "" + ee.key), "key" in ee) {
        H = {};
        for (var W in ee)
          W !== "key" && (H[W] = ee[W]);
      } else H = ee;
      return U && l(
        H,
        typeof j == "function" ? j.displayName || j.name || "Unknown" : j
      ), u(
        j,
        U,
        ue,
        Y,
        o(),
        H,
        f,
        T
      );
    }
    function m(j) {
      typeof j == "object" && j !== null && j.$$typeof === k && j._store && (j._store.validated = 1);
    }
    var p = je, k = Symbol.for("react.transitional.element"), B = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), R = Symbol.for("react.consumer"), $ = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), _ = Symbol.for("react.client.reference"), h = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, x = Object.prototype.hasOwnProperty, z = Array.isArray, ae = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(j) {
        return j();
      }
    };
    var A, Q = {}, te = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), oe = ae(a(s)), ie = {};
    ot.Fragment = v, ot.jsx = function(j, ee, H, O, Y) {
      var ue = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        j,
        ee,
        H,
        !1,
        O,
        Y,
        ue ? Error("react-stack-top-frame") : te,
        ue ? ae(a(j)) : oe
      );
    }, ot.jsxs = function(j, ee, H, O, Y) {
      var ue = 1e4 > h.recentlyCreatedOwnerStacks++;
      return d(
        j,
        ee,
        H,
        !0,
        O,
        Y,
        ue ? Error("react-stack-top-frame") : te,
        ue ? ae(a(j)) : oe
      );
    };
  }()), ot;
}
var ar;
function bs() {
  return ar || (ar = 1, process.env.NODE_ENV === "production" ? pt.exports = ps() : pt.exports = gs()), pt.exports;
}
var n = bs(), rn = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var sr;
function xs() {
  return sr || (sr = 1, function(e) {
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
  }(rn)), rn.exports;
}
var ys = xs();
const q = /* @__PURE__ */ ms(ys), Ch = ({
  text: e,
  href: t,
  openInNewWindow: r = !1,
  className: a,
  ...o
}) => {
  const s = q(
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
}, zn = ({
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
      className: q(
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
          className: q("nhsuk-account__item", s.className),
          children: o(s)
        },
        i
      )) })
    }
  );
}, { forwardRef: _s, useCallback: Ge, useState: an } = us;
function ks(e, t) {
  const {
    children: r,
    variant: a = "primary",
    size: o = "default",
    fullWidth: s = !1,
    className: i = "",
    preventDoubleClick: l = !1,
    ...c
  } = e, [u, d] = an(!1), [m, p] = an(!1), [k, B] = an(!1), v = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    o !== "default" ? `nhs-aria-button--${o}` : "",
    s ? "nhs-aria-button--full-width" : "",
    i
  ].filter(Boolean).join(" "), C = "disabled" in c ? c.disabled : c["aria-disabled"] === "true", D = {
    ...u && { "data-pressed": "true" },
    ...m && { "data-hovered": "true" },
    ...k && { "data-focused": "true" },
    ...C && { "data-disabled": "true" }
  }, R = Ge(() => !C && d(!0), [C]), $ = Ge(() => d(!1), []), w = Ge(() => !C && p(!0), [C]), E = Ge(() => {
    p(!1), d(!1);
  }, []), g = Ge(() => B(!0), []), L = Ge(() => B(!1), []), F = Ge((h) => {
    h.key === " " && ("href" in c || h.currentTarget.getAttribute("role") === "button") && (h.preventDefault(), h.currentTarget.click());
  }, [c]), S = Ge((h) => {
    if (l) {
      const x = h.currentTarget;
      if (x.getAttribute("data-processing") === "true") {
        h.preventDefault();
        return;
      }
      x.setAttribute("data-processing", "true"), setTimeout(() => {
        x.removeAttribute("data-processing");
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
        className: v,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...D,
        ...l && { "data-prevent-double-click": "true" },
        onKeyDown: (x) => {
          h.onKeyDown?.(x), F(x);
        },
        onClick: (x) => {
          h.onClick?.(x), S(x);
        },
        onMouseDown: (x) => {
          h.onMouseDown?.(x), R();
        },
        onMouseUp: (x) => {
          h.onMouseUp?.(x), $();
        },
        onMouseEnter: (x) => {
          h.onMouseEnter?.(x), w();
        },
        onMouseLeave: (x) => {
          h.onMouseLeave?.(x), E();
        },
        onFocus: (x) => {
          h.onFocus?.(x), g();
        },
        onBlur: (x) => {
          h.onBlur?.(x), L();
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
  const _ = c;
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      ref: t,
      type: _.type || "button",
      disabled: _.disabled,
      className: v,
      "data-module": "nhs-button",
      ...D,
      ...l && { "data-prevent-double-click": "true" },
      ..._.disabled && { "aria-disabled": "true" },
      onKeyDown: (h) => {
        _.onKeyDown?.(h), F(h);
      },
      onClick: (h) => {
        _.onClick?.(h), S(h);
      },
      onMouseDown: (h) => {
        _.onMouseDown?.(h), R();
      },
      onMouseUp: (h) => {
        _.onMouseUp?.(h), $();
      },
      onMouseEnter: (h) => {
        _.onMouseEnter?.(h), w();
      },
      onMouseLeave: (h) => {
        _.onMouseLeave?.(h), E();
      },
      onFocus: (h) => {
        _.onFocus?.(h), g();
      },
      onBlur: (h) => {
        _.onBlur?.(h), L();
      },
      id: _.id,
      style: _.style,
      title: _.title,
      "aria-label": _["aria-label"],
      "aria-describedby": _["aria-describedby"],
      "aria-labelledby": _["aria-labelledby"],
      tabIndex: _.tabIndex,
      name: _.name,
      value: _.value,
      form: _.form,
      formAction: _.formAction,
      formEncType: _.formEncType,
      formMethod: _.formMethod,
      formNoValidate: _.formNoValidate,
      formTarget: _.formTarget,
      autoFocus: _.autoFocus,
      children: r
    }
  );
}
const ve = _s(ks);
ve.displayName = "Button";
const vs = ({
  text: e = "Back",
  html: t,
  href: r = "#",
  className: a,
  element: o = "a",
  onClick: s,
  ...i
}) => {
  const l = q(
    "nhsuk-back-link",
    a
  ), c = q(
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
}, ze = ({
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
  const d = q(
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
}, ws = ({
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
  attributes: k,
  ...B
}) => {
  const [v, C] = he(a), D = r !== void 0, R = D ? r : v;
  pe(() => {
    D || C(a);
  }, [a, D]);
  const $ = (F) => {
    const S = F.target.checked;
    D || C(S), d?.(S, F);
  }, w = i ? `${e}-hint` : void 0, E = l ? `${e}-error` : void 0, g = [w, E].filter(Boolean).join(" ") || void 0, L = q(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": !!l
    },
    c
  );
  return /* @__PURE__ */ n.jsx("div", { className: L, ...B, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-checkboxes", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
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
        onChange: $,
        onBlur: m,
        onFocus: p,
        "aria-describedby": g,
        ...k
      }
    ),
    /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: e, children: u }),
    i && /* @__PURE__ */ n.jsx("div", { id: w, className: "nhsuk-checkboxes__hint", children: i }),
    l && /* @__PURE__ */ n.jsxs("div", { id: E, className: "nhsuk-error-message nhsuk-checkboxes__error", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
      " ",
      l
    ] })
  ] }) }) });
};
ws.displayName = "Checkbox";
const Wn = ({
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
  inputMode: k,
  autoComplete: B,
  maxLength: v,
  minLength: C,
  pattern: D,
  step: R,
  min: $,
  max: w,
  showValueLabels: E = !1,
  showCurrentValue: g = !1,
  valueLabels: L,
  onChange: F,
  onBlur: S,
  onFocus: _,
  onKeyDown: h,
  ...x
}) => {
  const [z, ae] = he(a || o || (r === "range" ? $ || "0" : ""));
  pe(() => {
    a !== void 0 && ae(a);
  }, [a]);
  const A = (ie) => {
    ae(ie.target.value), F?.(ie);
  }, Q = r === "range", te = q(
    "nhsuk-input",
    {
      "nhsuk-input--error": u,
      "nhsuk-input--range": Q,
      [`nhsuk-input--width-${p}`]: p !== "full" && !Q
    },
    m
  ), oe = Q ? /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-wrapper", children: [
    E && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-input-range-labels", children: [
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min", children: L?.min || $ || "0" }),
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: te,
          id: e,
          name: t,
          type: r,
          value: z,
          defaultValue: o,
          placeholder: s,
          disabled: i,
          readOnly: l,
          required: c,
          "aria-describedby": d,
          inputMode: k,
          autoComplete: B,
          maxLength: v,
          minLength: C,
          pattern: D,
          step: R,
          min: $,
          max: w,
          onChange: A,
          onBlur: S,
          onFocus: _,
          onKeyDown: h,
          ...x
        }
      ),
      /* @__PURE__ */ n.jsx("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max", children: L?.max || w || "100" })
    ] }),
    !E && /* @__PURE__ */ n.jsx(
      "input",
      {
        className: te,
        id: e,
        name: t,
        type: r,
        value: z,
        defaultValue: o,
        placeholder: s,
        disabled: i,
        readOnly: l,
        required: c,
        "aria-describedby": d,
        inputMode: k,
        autoComplete: B,
        maxLength: v,
        minLength: C,
        pattern: D,
        step: R,
        min: $,
        max: w,
        onChange: A,
        onBlur: S,
        onFocus: _,
        onKeyDown: h,
        ...x
      }
    ),
    g && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-input-range-current-value", children: /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-input-range-current-label", children: [
      L?.current || "Current value:",
      " ",
      /* @__PURE__ */ n.jsx("strong", { children: z })
    ] }) })
  ] }) : null;
  return Q ? oe : /* @__PURE__ */ n.jsx(
    "input",
    {
      className: te,
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
      inputMode: k,
      autoComplete: B,
      maxLength: v,
      minLength: C,
      pattern: D,
      step: R,
      min: $,
      max: w,
      onChange: F,
      onBlur: S,
      onFocus: _,
      onKeyDown: h,
      ...x
    }
  );
}, On = ({
  htmlFor: e,
  className: t,
  isPageHeading: r = !1,
  size: a = "m",
  children: o,
  ...s
}) => {
  const i = q(
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
}, Un = ({
  children: e,
  legend: t,
  className: r,
  describedBy: a,
  ...o
}) => {
  const s = q(
    "nhsuk-fieldset",
    r
  ), i = q(
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
}, Ss = ({
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
  ...k
}) => {
  const [B, v] = he(
    e.filter((F) => F.checked).map((F) => F.value)
  ), C = r || t, D = i ? `${C}-hint` : void 0, R = l ? `${C}-error` : void 0, $ = [D, R].filter(Boolean).join(" ") || void 0, w = (F, S) => {
    let _;
    S ? _ = [...B, F] : _ = B.filter((h) => h !== F), v(_), d?.(_);
  }, E = () => e.map((F, S) => {
    const _ = `${C}-${S + 1}`, h = `${_}-conditional`, x = B.includes(F.value), z = F.disabled || !1;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-checkboxes__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: _,
          name: t,
          type: "checkbox",
          value: F.value,
          checked: x,
          disabled: z,
          onChange: (ae) => w(F.value, ae.target.checked),
          "aria-describedby": F.hint ? `${_}-hint` : $,
          ...F.conditional && {
            "aria-controls": h,
            "aria-expanded": x ? "true" : "false"
          },
          ...F.attributes
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-checkboxes__label", htmlFor: _, children: F.text }),
      F.hint && /* @__PURE__ */ n.jsx("div", { id: `${_}-hint`, className: "nhsuk-checkboxes__hint", children: F.hint }),
      F.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: q("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !x
          }),
          id: h,
          children: typeof F.conditional == "object" && F.conditional !== null && "label" in F.conditional && "id" in F.conditional && "name" in F.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            F.conditional.label && /* @__PURE__ */ n.jsx(On, { htmlFor: F.conditional.id, children: F.conditional.label }),
            /* @__PURE__ */ n.jsx(Wn, { ...F.conditional })
          ] }) : F.conditional
        }
      )
    ] }, F.value);
  }), g = q(
    "nhsuk-checkboxes",
    {
      "nhsuk-checkboxes--small": u
    },
    c
  ), L = q("nhsuk-form-group", {
    "nhsuk-form-group--error": !!l
  });
  return /* @__PURE__ */ n.jsx("div", { className: L, ...p, ...k, children: /* @__PURE__ */ n.jsxs(
    Un,
    {
      legend: a ? {
        text: a,
        isPageHeading: o,
        size: s
      } : void 0,
      describedBy: $,
      ...m,
      children: [
        i && /* @__PURE__ */ n.jsx("div", { id: D, className: "nhsuk-hint", children: i }),
        l && /* @__PURE__ */ n.jsxs("div", { id: R, className: "nhsuk-error-message", children: [
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
          " ",
          l
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: g, children: E() })
      ]
    }
  ) });
};
Ss.displayName = "Checkboxes";
const Cs = ({
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
  maxLength: k,
  minLength: B,
  wrap: v = "soft",
  resize: C = "vertical",
  autoComplete: D,
  spellCheck: R,
  onChange: $,
  onBlur: w,
  onFocus: E,
  onKeyDown: g,
  ...L
}) => {
  const F = q(
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
      className: F,
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
      maxLength: k,
      minLength: B,
      wrap: v,
      autoComplete: D,
      spellCheck: R,
      onChange: $,
      onBlur: w,
      onFocus: E,
      onKeyDown: g,
      ...L
    }
  );
}, zr = ({
  id: e,
  className: t,
  children: r,
  ...a
}) => {
  const o = q("nhsuk-hint", t);
  return /* @__PURE__ */ n.jsx("div", { className: o, id: e, ...a, children: r });
}, jh = ({
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
  const [p, k] = he(s), [B, v] = he(0), [C, D] = he(!1), [R, $] = he(!1), w = X((_) => r ? _.trim() === "" ? 0 : _.trim().split(/\s+/).length : _.length, [r]);
  pe(() => {
    const _ = w(p), h = t || r || 0, x = h - _, z = Math.floor(h * (a / 100));
    v(x), D(_ > h), $(_ >= z || _ > h), u && u(_, x);
  }, [p, t, r, a, w, u]);
  const E = (_) => {
    const h = _.target.value;
    k(h), d && d(_);
  }, g = () => {
    const _ = t || r || 0, h = r ? "word" : "character", x = r ? "words" : "characters";
    if (!R)
      return `You can enter up to ${_} ${_ === 1 ? h : x}`;
    if (C) {
      const z = Math.abs(B);
      return `You have ${z} ${z === 1 ? h : x} too many`;
    } else
      return `You have ${B} ${B === 1 ? h : x} remaining`;
  }, L = q(
    "nhsuk-character-count",
    l
  ), F = q(
    "nhsuk-character-count__message",
    {
      "nhsuk-character-count__message--disabled": !R,
      "nhsuk-error-message": C
    },
    c?.classes
  ), S = q(
    "nhsuk-js-character-count",
    {
      "nhsuk-textarea--error": C
    }
  );
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: L,
      "data-module": "nhsuk-character-count",
      "data-maxlength": t,
      "data-maxwords": r,
      "data-threshold": a,
      "data-testid": "character-count",
      children: [
        /* @__PURE__ */ n.jsx(
          Cs,
          {
            id: e,
            name: o,
            value: p,
            rows: i,
            className: S,
            onChange: E,
            "aria-describedby": `${e}-info`,
            ...m
          }
        ),
        /* @__PURE__ */ n.jsx(
          zr,
          {
            id: `${e}-info`,
            className: F,
            children: g()
          }
        )
      ]
    }
  );
}, js = ({
  value: e,
  disabled: t = !1,
  selected: r = !1,
  className: a,
  children: o,
  ...s
}) => {
  const i = q(
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
}, Ns = ({
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
  children: k,
  onChange: B,
  onBlur: v,
  onFocus: C,
  ...D
}) => {
  const R = q(
    "nhsuk-select",
    {
      "nhsuk-select--error": i
    },
    c
  ), $ = () => p ? p.map((w, E) => /* @__PURE__ */ n.jsx(
    "option",
    {
      value: w.value,
      disabled: w.disabled,
      selected: w.selected,
      children: w.text
    },
    `${w.value}-${E}`
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
      onChange: B,
      onBlur: v,
      onFocus: C,
      ...D,
      children: k || $()
    }
  );
}, Wr = Ns;
Wr.Option = js;
const Nh = ({
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
  const [k, B] = he(t || r || ""), v = q(
    "nhsuk-radios",
    {
      "nhsuk-radios--error": a,
      "nhsuk-radios--small": i === "small",
      "nhsuk-radios--inline": l
    },
    s
  ), C = (D) => {
    const R = D.target.value;
    B(R), u && u(D);
  };
  return /* @__PURE__ */ n.jsx(Un, { children: /* @__PURE__ */ n.jsx("div", { className: v, ...p, children: c.map((D, R) => {
    const $ = `${e}-${R}`, w = D.conditional ? `${$}-conditional` : void 0, E = k === D.value;
    return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-radios__item", children: [
      /* @__PURE__ */ n.jsx(
        "input",
        {
          className: "nhsuk-radios__input",
          id: $,
          name: e,
          type: "radio",
          value: D.value,
          disabled: D.disabled,
          checked: E,
          "aria-describedby": o,
          onChange: C,
          onBlur: d,
          onFocus: m
        }
      ),
      /* @__PURE__ */ n.jsx("label", { className: "nhsuk-radios__label", htmlFor: $, children: D.text }),
      D.hint && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-radios__hint", children: D.hint }),
      D.conditional && /* @__PURE__ */ n.jsx(
        "div",
        {
          className: q("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !E
          }),
          id: w,
          children: typeof D.conditional == "object" && D.conditional !== null && "label" in D.conditional && "id" in D.conditional && "name" in D.conditional ? /* @__PURE__ */ n.jsxs("div", { style: { marginTop: "16px" }, children: [
            D.conditional.label && /* @__PURE__ */ n.jsx(On, { htmlFor: D.conditional.id, children: D.conditional.label }),
            /* @__PURE__ */ n.jsx(Wn, { ...D.conditional })
          ] }) : D.conditional
        }
      )
    ] }, D.value);
  }) }) });
}, Or = ({
  children: e,
  className: t,
  fluid: r = !1,
  maxWidth: a,
  ...o
}) => {
  const s = q(
    {
      "nhsuk-width-container": !r,
      "nhsuk-width-container-fluid": r
    },
    t
  ), i = a ? { maxWidth: a } : void 0;
  return /* @__PURE__ */ n.jsx("div", { className: s, style: i, ...o, children: e });
}, _t = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = q("nhsuk-grid-row", t);
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: e });
}, Gn = ({
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
  const u = q(
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
}, Ts = ({
  children: e,
  className: t,
  ...r
}) => {
  const o = je.Children.toArray(e)[0], s = je.isValidElement(o) && (o.type === _t || typeof o.props == "object" && o.props && "className" in o.props && typeof o.props.className == "string" && o.props.className.includes("nhsuk-grid-row"));
  return /* @__PURE__ */ n.jsx(Or, { className: t, ...r, children: s ? e : /* @__PURE__ */ n.jsx(_t, { children: e }) });
}, Ds = ({
  children: e,
  type: t = "bullet",
  size: r = "medium",
  border: a = !1,
  className: o,
  role: s,
  as: i,
  ...l
}) => {
  const c = i || (t === "number" ? "ol" : "ul"), u = q(
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
}, Fs = ({
  children: e,
  className: t,
  ...r
}) => {
  const a = q("nhsuk-list__item", t);
  return /* @__PURE__ */ n.jsx("li", { className: a, ...r, children: e });
}, Bs = Ds;
Bs.Item = Fs;
const Th = ({
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
}, Dh = {
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
}, Fh = ({
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
}, Bh = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, Rh = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], Ur = ({
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
}, We = ({
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
  })(s), d = q(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${s}`]: s
    },
    t
  ), m = o || (a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r), p = `h${u}`, k = i ? { ...l.style, marginBottom: i } : l.style;
  return Ar(
    p,
    { className: d, ...l, style: k },
    m
  );
}, or = ({
  id: e,
  className: t,
  visuallyHiddenText: r = "Error:",
  children: a,
  ...o
}) => {
  const s = q("nhsuk-error-message", t);
  return /* @__PURE__ */ n.jsxs("span", { className: s, id: e, ...o, children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      r,
      " "
    ] }),
    a
  ] });
}, Ih = ({
  titleText: e = "There is a problem",
  titleHtml: t,
  descriptionText: r,
  descriptionHtml: a,
  errorList: o,
  className: s,
  children: i,
  ...l
}) => {
  const c = me(null);
  pe(() => {
    c.current && c.current.focus();
  }, []);
  const u = q(
    "nhsuk-error-summary",
    s
  ), d = () => t ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : e, m = () => a ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : r, p = (k) => {
    const B = k.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text;
    return k.href ? /* @__PURE__ */ n.jsx(
      "a",
      {
        href: k.href,
        ...k.attributes,
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
          /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list", children: o.map((k, B) => /* @__PURE__ */ n.jsx("li", { children: p(k) }, B)) })
        ] })
      ]
    }
  );
}, $h = ({
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
  const [d, m] = he(() => ({
    day: o.day || "",
    month: o.month || "",
    year: o.year || ""
  })), [p, k] = he({}), B = (A) => A % 4 === 0 && A % 100 !== 0 || A % 400 === 0, v = (A, Q) => {
    const te = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return A === 2 && B(Q) ? 29 : te[A - 1];
  }, C = (A, Q, te) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Day must be a number";
    const oe = parseInt(A, 10);
    if (oe < 1 || oe > 31) return "Day must be between 1 and 31";
    if (Q && te) {
      const ie = parseInt(Q, 10), j = parseInt(te, 10);
      if (!isNaN(ie) && !isNaN(j) && ie >= 1 && ie <= 12) {
        const ee = v(ie, j);
        if (oe > ee)
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
          ][ie - 1]} ${j} only has ${ee} days`;
      }
    }
  }, D = (A) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Month must be a number";
    const Q = parseInt(A, 10);
    if (Q < 1 || Q > 12) return "Month must be between 1 and 12";
  }, R = (A) => {
    if (!A) return;
    if (!/^\d+$/.test(A)) return "Year must be a number";
    const Q = parseInt(A, 10), te = (/* @__PURE__ */ new Date()).getFullYear();
    if (Q < 1900 || Q > te + 10)
      return `Year must be between 1900 and ${te + 10}`;
  }, $ = (A, Q, te) => {
    if (!A || !Q || !te) return;
    const oe = parseInt(A, 10), ie = parseInt(Q, 10), j = parseInt(te, 10);
    if (isNaN(oe) || isNaN(ie) || isNaN(j) || ie < 1 || ie > 12 || j < 1900) return;
    const ee = v(ie, j);
    oe < 1 || oe > ee;
  }, w = X((A, Q) => {
    const te = {
      ...d,
      [A]: Q
    };
    m(te), c && c(te);
  }, [d, c]), E = X((A) => {
    const Q = d[A];
    let te;
    if (A === "day")
      te = C(Q, d.month, d.year);
    else if (A === "month") {
      if (te = D(Q), !te && d.day) {
        const oe = C(d.day, Q, d.year);
        k((ie) => ({
          ...ie,
          day: oe
        }));
      }
    } else if (A === "year" && (te = R(Q), !te && d.day && d.month)) {
      const oe = C(d.day, d.month, Q);
      k((ie) => ({
        ...ie,
        day: oe
      }));
    }
    if (k((oe) => ({
      ...oe,
      [A]: te
    })), d.day && d.month && d.year) {
      const oe = $(
        A === "day" ? Q : d.day,
        A === "month" ? Q : d.month,
        A === "year" ? Q : d.year
      );
      oe && k((ie) => ({
        ...ie,
        day: oe
      }));
    }
  }, [d, C, D, R, $]), g = ge(() => [
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
  ], []), L = r || g;
  let F = s?.describedBy || "";
  const S = i ? `${e}-hint` : "", _ = l ? `${e}-error` : "";
  S && (F = F ? `${F} ${S}` : S), _ && (F = F ? `${F} ${_}` : _);
  const h = Object.values(p).some((A) => A), x = q(
    "nhsuk-form-group",
    {
      "nhsuk-form-group--error": l || h
    }
  ), z = q(
    "nhsuk-date-input",
    t
  ), ae = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    i && /* @__PURE__ */ n.jsx(
      zr,
      {
        id: S,
        className: i.classes,
        children: i.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text
      }
    ),
    l && /* @__PURE__ */ n.jsx(
      or,
      {
        id: _,
        className: l.classes,
        children: l.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text
      }
    ),
    Object.entries(p).map(
      ([A, Q]) => Q ? /* @__PURE__ */ n.jsxs(
        or,
        {
          id: `${e}-${A}-error`,
          className: "nhsuk-error-message",
          children: [
            /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Error:" }),
            " ",
            Q
          ]
        },
        `${A}-error`
      ) : null
    ),
    /* @__PURE__ */ n.jsx("div", { className: z, id: e, "data-testid": "date-input", ...u, children: L.map((A) => {
      const Q = A.id || `${e}-${A.name}`, te = a ? `${a}[${A.name}]` : A.name, oe = A.label || A.name.charAt(0).toUpperCase() + A.name.slice(1), ie = p[A.name], j = d[A.name] || "";
      let ee = F;
      if (ie) {
        const H = `${e}-${A.name}-error`;
        ee = ee ? `${ee} ${H}` : H;
      }
      return /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-date-input__item", children: [
        /* @__PURE__ */ n.jsx(
          On,
          {
            htmlFor: Q,
            className: "nhsuk-date-input__label",
            children: oe
          }
        ),
        /* @__PURE__ */ n.jsx(
          Wn,
          {
            id: Q,
            name: te,
            value: j,
            className: q("nhsuk-date-input__input", A.classes, {
              "nhsuk-input--error": ie
            }),
            inputMode: A.inputmode,
            autoComplete: A.autocomplete,
            pattern: A.pattern,
            "aria-describedby": ee || void 0,
            hasError: !!ie,
            onChange: (H) => w(A.name, H.target.value),
            onBlur: () => E(A.name)
          }
        )
      ] }, A.name);
    }) })
  ] });
  return /* @__PURE__ */ n.jsx("div", { className: x, children: s ? /* @__PURE__ */ n.jsx(
    Un,
    {
      className: s.classes,
      legend: s.legend ? { text: s.legend } : void 0,
      describedBy: F || void 0,
      children: ae()
    }
  ) : ae() });
}, Gr = {
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
}, Vr = hs(Gr), Rs = ({
  children: e,
  theme: t = {}
}) => {
  const r = { ...Gr, ...t };
  return /* @__PURE__ */ n.jsx(Vr.Provider, { value: r, children: e });
}, Mh = () => {
  const e = fs(Vr);
  if (!e)
    throw new Error("useNHSTheme must be used within an NHSThemeProvider");
  return e;
};
function Is() {
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
function $s() {
  if (typeof document > "u" || document.getElementById("nhs-fonts")) return;
  const e = document.createElement("style");
  e.id = "nhs-fonts", e.textContent = Is(), document.head.appendChild(e);
}
const Lh = ({ children: e, theme: t }) => (pe(() => {
  $s();
}, []), /* @__PURE__ */ n.jsx(Rs, { theme: t, children: e })), Yr = ({
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
  results: k = [],
  formAttributes: B = {},
  inputAttributes: v = {},
  buttonAttributes: C = {},
  preventDefaultSubmit: D = !1,
  debounceMs: R = 300,
  minQueryLength: $ = 1
}) => {
  const [w, E] = he(""), [g, L] = he(!1), F = me(void 0), S = me(null), _ = me(null), h = e === "controlled" && o !== void 0, x = h ? o : w, z = X((O) => {
    F.current && clearTimeout(F.current), F.current = setTimeout(() => {
      d.onChange && O.length >= $ && d.onChange(O);
    }, R);
  }, [d.onChange, R, $]), ae = X((O) => {
    const Y = O.target.value;
    h || E(Y), e !== "form" && z(Y);
  }, [h, e, z]), A = X((O) => {
    const Y = x.trim(), ue = {
      query: Y,
      timestamp: Date.now(),
      formData: new FormData(O.currentTarget)
    };
    e === "controlled" || e === "hybrid" && D ? (O.preventDefault(), d.onSearch && Y.length >= $ && d.onSearch(ue)) : e === "hybrid" && d.onSearch && Y.length >= $ && d.onSearch(ue);
  }, [e, x, d.onSearch, D, $]), Q = X(() => {
    L(!0), d.onFocus?.();
  }, [d.onFocus]), te = X(() => {
    L(!1), d.onBlur?.();
  }, [d.onBlur]), oe = X(() => {
    h || E(""), d.onClear?.(), _.current?.focus();
  }, [h, d.onClear]);
  pe(() => () => {
    F.current && clearTimeout(F.current);
  }, []);
  const ie = () => /* @__PURE__ */ n.jsx(
    "svg",
    {
      className: q("nhsuk-icon nhsuk-icon__search", {
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
  ), ee = () => !x || e === "form" ? null : /* @__PURE__ */ n.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: oe,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ n.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ n.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), H = () => !p || !k.length || !g ? null : /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: k.map((O) => /* @__PURE__ */ n.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: O.href ? /* @__PURE__ */ n.jsxs("a", { href: O.href, className: "nhsuk-header__search-result-link", children: [
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
  return /* @__PURE__ */ n.jsxs("search", { className: q("nhsuk-header__search", c, {
    "nhsuk-header__search--controlled": e === "controlled",
    "nhsuk-header__search--hybrid": e === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": g,
    "nhsuk-header__search--has-results": p && k.length > 0
  }), children: [
    /* @__PURE__ */ n.jsxs(
      "form",
      {
        ref: S,
        className: "nhsuk-header__search-form",
        id: "search",
        action: e !== "controlled" ? t : void 0,
        method: e !== "controlled" ? r : void 0,
        onSubmit: A,
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
                ref: _,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: e !== "controlled" ? a : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: x,
                onChange: ae,
                onFocus: Q,
                onBlur: te,
                disabled: u || m,
                "aria-expanded": p && k.length > 0,
                "aria-haspopup": "listbox",
                ...v
              }
            ),
            ee()
          ] }),
          /* @__PURE__ */ n.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: u || m || e !== "form" && x.length < $,
              ...C,
              children: [
                m ? j() : ie(),
                /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : l })
              ]
            }
          )
        ]
      }
    ),
    H()
  ] });
}, qr = ({
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
  const [m, p] = he(!1), [k, B] = he(!1), [v, C] = he(i?.items?.length || 0), [D, R] = he(!1), [$, w] = he(!1), [E, g] = he(!1), L = me(null), F = me(null), S = me(!1), _ = me(null), h = me([]), x = me(null);
  pe(() => {
    typeof window > "u" || (g(!0), R(!0));
  }, []), pe(() => {
    if (!E || !i?.items?.length) return;
    h.current = i.items;
    const f = setTimeout(() => {
      L.current && F.current && oe();
    }, 100);
    return () => clearTimeout(f);
  }, [E, i?.items]);
  const z = r.href && !t.href || r.href && r.href === t.href, ae = z ? r.href : t.href, A = q(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), Q = q(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), te = q(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), oe = X(() => {
    if (!(typeof window > "u" || S.current) && !(!L.current || !F.current || !h.current.length)) {
      S.current = !0;
      try {
        const f = F.current, T = L.current, U = f.offsetWidth, M = T.querySelectorAll(".nhsuk-header__navigation-item:not(.nhsuk-header__navigation-item--more)");
        if (M.length === 0 || U === 0) {
          S.current = !1;
          return;
        }
        const W = window.innerWidth < 768, V = W ? 16 : 32, N = V * 2, de = U - N, ne = Array.from(M).map((y) => y.offsetWidth), le = ne.reduce((y, I) => y + I, 0), J = W ? 80 : 100, b = x.current !== null && x.current !== W;
        if (x.current = W, console.log("Overflow check:", {
          containerWidth: U,
          availableContainerWidth: de,
          totalGutters: N,
          gutterSize: V,
          totalWidth: le,
          mobile: W,
          breakpointChanged: b,
          itemCount: ne.length,
          measurements: ne
        }), le <= de)
          B(!1), C(h.current.length);
        else {
          const y = de - J;
          let I = 0, P = 0;
          for (let K = 0; K < ne.length; K++) {
            const se = P + ne[K];
            if (se <= y)
              P = se, I = K + 1;
            else
              break;
          }
          I = Math.max(1, I);
          const G = I < ne.length;
          B(G), C(I);
        }
        S.current = !1;
      } catch (f) {
        console.error("Overflow detection error:", f), B(!1), C(h.current.length), S.current = !1;
      }
    }
  }, []);
  pe(() => {
    if (typeof document > "u") return;
    const f = (T) => {
      T.key === "Escape" && m && p(!1);
    };
    if (m)
      return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, [m]), pe(() => {
    if (typeof window > "u" || !E) return;
    const f = () => {
      m && (p(!1), w(!1)), _.current && clearTimeout(_.current), _.current = setTimeout(() => {
        h.current.length > 0 && oe();
      }, 250);
    };
    let T = null, U = null;
    return window.matchMedia && (T = window.matchMedia("(max-width: 767px)"), U = () => {
      console.log("Breakpoint changed:", T?.matches ? "mobile" : "desktop"), h.current.length > 0 && setTimeout(() => oe(), 50);
    }, T.addEventListener ? T.addEventListener("change", U) : T.addListener(U)), window.addEventListener("resize", f), () => {
      window.removeEventListener("resize", f), T && U && (T.removeEventListener ? T.removeEventListener("change", U) : T.removeListener(U)), _.current && clearTimeout(_.current);
    };
  }, [E, m, oe]), pe(() => {
    if (typeof document > "u") return;
    const f = (T) => {
      const U = T.target, M = L.current?.contains(U);
      m && !M && p(!1);
    };
    if (m)
      return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
  }, [m]);
  const ie = (f) => {
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
  ), ee = () => t.src ? /* @__PURE__ */ n.jsx(
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
  ), ue = (f) => {
    if (f.active || f.current) {
      const T = f.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: T });
    }
    return f.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text;
  };
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: A,
      role: "banner",
      "data-module": "nhsuk-header",
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: Q, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            ae ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: ae, children: [
              ee(),
              H(),
              z && O(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              ee(),
              H(),
              z && O(r.text)
            ] }),
            r.text && !z && O(r.text, r.href)
          ] }),
          o && /* @__PURE__ */ n.jsx(Yr, { ...o }),
          /* @__PURE__ */ n.jsx(
            zn,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: te,
            "aria-label": i.ariaLabel || "Menu",
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                className: q(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": !D && E,
                    "nhsuk-header__navigation-container--ssr": !E
                  },
                  l
                ),
                ref: F,
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list", ref: L, children: [
                  (E ? i.items.slice(0, v) : i.items).map((f, T) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: q(
                        "nhsuk-header__navigation-item",
                        {
                          "nhsuk-header__navigation-item--current": f.active || f.current,
                          "nhsuk-header__navigation-item--ssr-fallback": !E && T >= 4
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
                          children: ue(f)
                        }
                      )
                    },
                    T
                  )),
                  E && k && v < i.items.length && /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more",
                      children: /* @__PURE__ */ n.jsxs(
                        "a",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          onClick: ie,
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
        E && i && i.items && i.items.length > 0 && m && $ && /* @__PURE__ */ n.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !$,
            children: /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__dropdown-list", children: i.items.slice(v).map((f, T) => /* @__PURE__ */ n.jsx(
              "li",
              {
                className: q(
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
                    children: ue(f)
                  }
                )
              },
              `overflow-${v + T}`
            )) })
          }
        )
      ]
    }
  );
}, Eh = ({
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
  const m = r.href && !t.href || r.href && r.href === t.href, p = m ? r.href : t.href, k = q(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), B = q(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), v = q(
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
  ), D = () => t.src ? /* @__PURE__ */ n.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : C(), R = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, $ = (g, L) => g ? L ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: L, children: g }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: g }) : null, w = () => !i?.items || i.items.length === 0 ? null : i.items.map((g, L) => /* @__PURE__ */ n.jsx(
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
    g.href || L
  )), E = () => o ? /* @__PURE__ */ n.jsx(Yr, { ...o }) : null;
  return /* @__PURE__ */ n.jsxs(
    "header",
    {
      className: k,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": i?.items?.length || 0,
      ...u,
      ...d,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: B, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              D(),
              R(),
              m && $(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              D(),
              R(),
              m && $(r.text)
            ] }),
            r.text && !m && $(r.text, r.href)
          ] }),
          (c === "organisation" || a) && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            E()
          ] }),
          c !== "organisation" && !a && E(),
          /* @__PURE__ */ n.jsx(
            zn,
            {
              ...s,
              variant: c === "white" ? "white" : "default"
            }
          )
        ] }),
        i && i.items && i.items.length > 0 && /* @__PURE__ */ n.jsx(
          "nav",
          {
            className: v,
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
}, Ah = ({
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
  const p = r.href && !t.href || r.href && r.href === t.href, k = p ? r.href : t.href, B = q(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": c === "organisation" || a,
      "nhsuk-header--white": c === "white"
    },
    e
  ), v = q(
    "nhsuk-header__container",
    "nhsuk-width-container",
    l
  ), C = q(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": i?.white,
      "nhsuk-header__navigation--justified": i?.justified
    },
    i?.className
  ), D = () => /* @__PURE__ */ n.jsxs(
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
  ) : D(), $ = () => a ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, w = (g, L) => g ? L ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-header__service-name", href: L, children: g }) : /* @__PURE__ */ n.jsx("span", { className: "nhsuk-header__service-name", children: g }) : null, E = (g) => {
    if (g.active || g.current) {
      const L = g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
      return /* @__PURE__ */ n.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: L });
    }
    return g.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
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
        /* @__PURE__ */ n.jsxs("div", { className: v, children: [
          /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-header__service", children: [
            k ? /* @__PURE__ */ n.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
              R(),
              $(),
              p && w(r.text)
            ] }) : /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
              R(),
              $(),
              p && w(r.text)
            ] }),
            r.text && !p && w(r.text, r.href)
          ] }),
          /* @__PURE__ */ n.jsx(
            zn,
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
                className: q(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  l
                ),
                children: /* @__PURE__ */ n.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  i.items.slice(0, d).map((g, L) => /* @__PURE__ */ n.jsx(
                    "li",
                    {
                      className: q(
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
                          children: E(g)
                        }
                      )
                    },
                    L
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
                    /* @__PURE__ */ n.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: i.items.slice(d).map((g, L) => /* @__PURE__ */ n.jsx(
                      "li",
                      {
                        className: q(
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
                            children: E(g)
                          }
                        )
                      },
                      `overflow-${d + L}`
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
}, Ms = ({
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
  ].filter(Boolean).join(" "), k = c || e || a || o, B = () => {
    if (!e) return null;
    const v = { className: p };
    switch (t) {
      case 1:
        return /* @__PURE__ */ n.jsx("h1", { ...v, children: e });
      case 2:
        return /* @__PURE__ */ n.jsx("h2", { ...v, children: e });
      case 3:
        return /* @__PURE__ */ n.jsx("h3", { ...v, children: e });
      case 4:
        return /* @__PURE__ */ n.jsx("h4", { ...v, children: e });
      case 5:
        return /* @__PURE__ */ n.jsx("h5", { ...v, children: e });
      case 6:
        return /* @__PURE__ */ n.jsx("h6", { ...v, children: e });
      default:
        return /* @__PURE__ */ n.jsx("h1", { ...v, children: e });
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
        s && /* @__PURE__ */ n.jsx("div", { className: "nhsuk-hero__overlay", children: k && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero-content", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })
        ] }) }) }) }) }),
        !s && k && /* @__PURE__ */ n.jsx("div", { className: m, children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-row", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-grid-column-two-thirds", children: /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-hero__wrapper", children: [
          B(),
          c || (o ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: o } }) : a ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0", children: a }) : null)
        ] }) }) }) })
      ]
    }
  );
};
Ms.displayName = "Hero";
const Kr = ({
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
      className: q("nhsuk-footer__list-item", {
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
    /* @__PURE__ */ n.jsxs("div", { className: q("nhsuk-width-container", i), children: [
      /* @__PURE__ */ n.jsx("h2", { className: "nhsuk-u-visually-hidden", children: "Support links" }),
      /* @__PURE__ */ n.jsx("div", { className: q("nhsuk-footer", e), children: u ? (
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
function yt(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ls(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Vn(e) {
  let t, r, a;
  e.length !== 2 ? (t = yt, r = (l, c) => yt(e(l), c), a = (l, c) => e(l) - c) : (t = e === yt || e === Ls ? e : Es, r = e, a = e);
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
function Es() {
  return 0;
}
function As(e) {
  return e === null ? NaN : +e;
}
const Hs = Vn(yt), Ps = Hs.right;
Vn(As).center;
const zs = Math.sqrt(50), Ws = Math.sqrt(10), Os = Math.sqrt(2);
function Zr(e, t, r) {
  const a = (t - e) / Math.max(0, r), o = Math.floor(Math.log10(a)), s = a / Math.pow(10, o), i = s >= zs ? 10 : s >= Ws ? 5 : s >= Os ? 2 : 1;
  let l, c, u;
  return o < 0 ? (u = Math.pow(10, -o) / i, l = Math.round(e * u), c = Math.round(t * u), l / u < e && ++l, c / u > t && --c, u = -u) : (u = Math.pow(10, o) * i, l = Math.round(e / u), c = Math.round(t / u), l * u < e && ++l, c * u > t && --c), c < l && 0.5 <= r && r < 2 ? Zr(e, t, r * 2) : [l, c, u];
}
function ir(e, t, r) {
  return t = +t, e = +e, r = +r, Zr(e, t, r)[2];
}
function lr(e, t, r) {
  t = +t, e = +e, r = +r;
  const a = t < e, o = a ? ir(t, e, r) : ir(e, t, r);
  return (a ? -1 : 1) * (o < 0 ? 1 / -o : o);
}
function Us(e, t) {
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
function Yn(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function Jr(e, t) {
  var r = Object.create(e.prototype);
  for (var a in t) r[a] = t[a];
  return r;
}
function ft() {
}
var dt = 0.7, kt = 1 / dt, et = "\\s*([+-]?\\d+)\\s*", ut = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Te = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Gs = /^#([0-9a-f]{3,8})$/, Vs = new RegExp(`^rgb\\(${et},${et},${et}\\)$`), Ys = new RegExp(`^rgb\\(${Te},${Te},${Te}\\)$`), qs = new RegExp(`^rgba\\(${et},${et},${et},${ut}\\)$`), Ks = new RegExp(`^rgba\\(${Te},${Te},${Te},${ut}\\)$`), Zs = new RegExp(`^hsl\\(${ut},${Te},${Te}\\)$`), Js = new RegExp(`^hsla\\(${ut},${Te},${Te},${ut}\\)$`), cr = {
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
Yn(ft, ht, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: dr,
  // Deprecated! Use color.formatHex.
  formatHex: dr,
  formatHex8: Xs,
  formatHsl: Qs,
  formatRgb: ur,
  toString: ur
});
function dr() {
  return this.rgb().formatHex();
}
function Xs() {
  return this.rgb().formatHex8();
}
function Qs() {
  return Xr(this).formatHsl();
}
function ur() {
  return this.rgb().formatRgb();
}
function ht(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = Gs.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? hr(t) : r === 3 ? new ke(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? gt(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? gt(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Vs.exec(e)) ? new ke(t[1], t[2], t[3], 1) : (t = Ys.exec(e)) ? new ke(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = qs.exec(e)) ? gt(t[1], t[2], t[3], t[4]) : (t = Ks.exec(e)) ? gt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Zs.exec(e)) ? pr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Js.exec(e)) ? pr(t[1], t[2] / 100, t[3] / 100, t[4]) : cr.hasOwnProperty(e) ? hr(cr[e]) : e === "transparent" ? new ke(NaN, NaN, NaN, 0) : null;
}
function hr(e) {
  return new ke(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function gt(e, t, r, a) {
  return a <= 0 && (e = t = r = NaN), new ke(e, t, r, a);
}
function eo(e) {
  return e instanceof ft || (e = ht(e)), e ? (e = e.rgb(), new ke(e.r, e.g, e.b, e.opacity)) : new ke();
}
function mn(e, t, r, a) {
  return arguments.length === 1 ? eo(e) : new ke(e, t, r, a ?? 1);
}
function ke(e, t, r, a) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +a;
}
Yn(ke, mn, Jr(ft, {
  brighter(e) {
    return e = e == null ? kt : Math.pow(kt, e), new ke(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? dt : Math.pow(dt, e), new ke(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ke(Ye(this.r), Ye(this.g), Ye(this.b), vt(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: fr,
  // Deprecated! Use color.formatHex.
  formatHex: fr,
  formatHex8: to,
  formatRgb: mr,
  toString: mr
}));
function fr() {
  return `#${Ve(this.r)}${Ve(this.g)}${Ve(this.b)}`;
}
function to() {
  return `#${Ve(this.r)}${Ve(this.g)}${Ve(this.b)}${Ve((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function mr() {
  const e = vt(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${Ye(this.r)}, ${Ye(this.g)}, ${Ye(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function vt(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function Ye(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Ve(e) {
  return e = Ye(e), (e < 16 ? "0" : "") + e.toString(16);
}
function pr(e, t, r, a) {
  return a <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Ne(e, t, r, a);
}
function Xr(e) {
  if (e instanceof Ne) return new Ne(e.h, e.s, e.l, e.opacity);
  if (e instanceof ft || (e = ht(e)), !e) return new Ne();
  if (e instanceof Ne) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, a = e.b / 255, o = Math.min(t, r, a), s = Math.max(t, r, a), i = NaN, l = s - o, c = (s + o) / 2;
  return l ? (t === s ? i = (r - a) / l + (r < a) * 6 : r === s ? i = (a - t) / l + 2 : i = (t - r) / l + 4, l /= c < 0.5 ? s + o : 2 - s - o, i *= 60) : l = c > 0 && c < 1 ? 0 : i, new Ne(i, l, c, e.opacity);
}
function no(e, t, r, a) {
  return arguments.length === 1 ? Xr(e) : new Ne(e, t, r, a ?? 1);
}
function Ne(e, t, r, a) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +a;
}
Yn(Ne, no, Jr(ft, {
  brighter(e) {
    return e = e == null ? kt : Math.pow(kt, e), new Ne(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? dt : Math.pow(dt, e), new Ne(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, a = r + (r < 0.5 ? r : 1 - r) * t, o = 2 * r - a;
    return new ke(
      sn(e >= 240 ? e - 240 : e + 120, o, a),
      sn(e, o, a),
      sn(e < 120 ? e + 240 : e - 120, o, a),
      this.opacity
    );
  },
  clamp() {
    return new Ne(gr(this.h), bt(this.s), bt(this.l), vt(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = vt(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${gr(this.h)}, ${bt(this.s) * 100}%, ${bt(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function gr(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function bt(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function sn(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const qn = (e) => () => e;
function ro(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function ao(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(a) {
    return Math.pow(e + a * t, r);
  };
}
function so(e) {
  return (e = +e) == 1 ? Qr : function(t, r) {
    return r - t ? ao(t, r, e) : qn(isNaN(t) ? r : t);
  };
}
function Qr(e, t) {
  var r = t - e;
  return r ? ro(e, r) : qn(isNaN(e) ? t : e);
}
const br = function e(t) {
  var r = so(t);
  function a(o, s) {
    var i = r((o = mn(o)).r, (s = mn(s)).r), l = r(o.g, s.g), c = r(o.b, s.b), u = Qr(o.opacity, s.opacity);
    return function(d) {
      return o.r = i(d), o.g = l(d), o.b = c(d), o.opacity = u(d), o + "";
    };
  }
  return a.gamma = e, a;
}(1);
function oo(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, a = t.slice(), o;
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = e[o] * (1 - s) + t[o] * s;
    return a;
  };
}
function io(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function lo(e, t) {
  var r = t ? t.length : 0, a = e ? Math.min(r, e.length) : 0, o = new Array(a), s = new Array(r), i;
  for (i = 0; i < a; ++i) o[i] = Kn(e[i], t[i]);
  for (; i < r; ++i) s[i] = t[i];
  return function(l) {
    for (i = 0; i < a; ++i) s[i] = o[i](l);
    return s;
  };
}
function co(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(a) {
    return r.setTime(e * (1 - a) + t * a), r;
  };
}
function wt(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function uo(e, t) {
  var r = {}, a = {}, o;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (o in t)
    o in e ? r[o] = Kn(e[o], t[o]) : a[o] = t[o];
  return function(s) {
    for (o in r) a[o] = r[o](s);
    return a;
  };
}
var pn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, on = new RegExp(pn.source, "g");
function ho(e) {
  return function() {
    return e;
  };
}
function fo(e) {
  return function(t) {
    return e(t) + "";
  };
}
function mo(e, t) {
  var r = pn.lastIndex = on.lastIndex = 0, a, o, s, i = -1, l = [], c = [];
  for (e = e + "", t = t + ""; (a = pn.exec(e)) && (o = on.exec(t)); )
    (s = o.index) > r && (s = t.slice(r, s), l[i] ? l[i] += s : l[++i] = s), (a = a[0]) === (o = o[0]) ? l[i] ? l[i] += o : l[++i] = o : (l[++i] = null, c.push({ i, x: wt(a, o) })), r = on.lastIndex;
  return r < t.length && (s = t.slice(r), l[i] ? l[i] += s : l[++i] = s), l.length < 2 ? c[0] ? fo(c[0].x) : ho(t) : (t = c.length, function(u) {
    for (var d = 0, m; d < t; ++d) l[(m = c[d]).i] = m.x(u);
    return l.join("");
  });
}
function Kn(e, t) {
  var r = typeof t, a;
  return t == null || r === "boolean" ? qn(t) : (r === "number" ? wt : r === "string" ? (a = ht(t)) ? (t = a, br) : mo : t instanceof ht ? br : t instanceof Date ? co : io(t) ? oo : Array.isArray(t) ? lo : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? uo : wt)(e, t);
}
function po(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function go(e) {
  return function() {
    return e;
  };
}
function bo(e) {
  return +e;
}
var xr = [0, 1];
function Xe(e) {
  return e;
}
function gn(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : go(isNaN(t) ? NaN : 0.5);
}
function xo(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(a) {
    return Math.max(e, Math.min(t, a));
  };
}
function yo(e, t, r) {
  var a = e[0], o = e[1], s = t[0], i = t[1];
  return o < a ? (a = gn(o, a), s = r(i, s)) : (a = gn(a, o), s = r(s, i)), function(l) {
    return s(a(l));
  };
}
function _o(e, t, r) {
  var a = Math.min(e.length, t.length) - 1, o = new Array(a), s = new Array(a), i = -1;
  for (e[a] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++i < a; )
    o[i] = gn(e[i], e[i + 1]), s[i] = r(t[i], t[i + 1]);
  return function(l) {
    var c = Ps(e, l, 1, a) - 1;
    return s[c](o[c](l));
  };
}
function ko(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function vo() {
  var e = xr, t = xr, r = Kn, a, o, s, i = Xe, l, c, u;
  function d() {
    var p = Math.min(e.length, t.length);
    return i !== Xe && (i = xo(e[0], e[p - 1])), l = p > 2 ? _o : yo, c = u = null, m;
  }
  function m(p) {
    return p == null || isNaN(p = +p) ? s : (c || (c = l(e.map(a), t, r)))(a(i(p)));
  }
  return m.invert = function(p) {
    return i(o((u || (u = l(t, e.map(a), wt)))(p)));
  }, m.domain = function(p) {
    return arguments.length ? (e = Array.from(p, bo), d()) : e.slice();
  }, m.range = function(p) {
    return arguments.length ? (t = Array.from(p), d()) : t.slice();
  }, m.rangeRound = function(p) {
    return t = Array.from(p), r = po, d();
  }, m.clamp = function(p) {
    return arguments.length ? (i = p ? !0 : Xe, d()) : i !== Xe;
  }, m.interpolate = function(p) {
    return arguments.length ? (r = p, d()) : r;
  }, m.unknown = function(p) {
    return arguments.length ? (s = p, m) : s;
  }, function(p, k) {
    return a = p, o = k, d();
  };
}
function wo() {
  return vo()(Xe, Xe);
}
function So(e, t) {
  e = e.slice();
  var r = 0, a = e.length - 1, o = e[r], s = e[a], i;
  return s < o && (i = r, r = a, a = i, i = o, o = s, s = i), e[r] = t.floor(o), e[a] = t.ceil(s), e;
}
const ln = /* @__PURE__ */ new Date(), cn = /* @__PURE__ */ new Date();
function be(e, t, r, a) {
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
  }, o.filter = (s) => be((i) => {
    if (i >= i) for (; e(i), !s(i); ) i.setTime(i - 1);
  }, (i, l) => {
    if (i >= i)
      if (l < 0) for (; ++l <= 0; )
        for (; t(i, -1), !s(i); )
          ;
      else for (; --l >= 0; )
        for (; t(i, 1), !s(i); )
          ;
  }), r && (o.count = (s, i) => (ln.setTime(+s), cn.setTime(+i), e(ln), e(cn), Math.floor(r(ln, cn))), o.every = (s) => (s = Math.floor(s), !isFinite(s) || !(s > 0) ? null : s > 1 ? o.filter(a ? (i) => a(i) % s === 0 : (i) => o.count(0, i) % s === 0) : o)), o;
}
const St = be(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
St.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? be((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : St);
St.range;
const He = 1e3, Se = He * 60, Pe = Se * 60, Oe = Pe * 24, Zn = Oe * 7, yr = Oe * 30, dn = Oe * 365, Qe = be((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * He);
}, (e, t) => (t - e) / He, (e) => e.getUTCSeconds());
Qe.range;
const Jn = be((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * He);
}, (e, t) => {
  e.setTime(+e + t * Se);
}, (e, t) => (t - e) / Se, (e) => e.getMinutes());
Jn.range;
const Co = be((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Se);
}, (e, t) => (t - e) / Se, (e) => e.getUTCMinutes());
Co.range;
const Xn = be((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * He - e.getMinutes() * Se);
}, (e, t) => {
  e.setTime(+e + t * Pe);
}, (e, t) => (t - e) / Pe, (e) => e.getHours());
Xn.range;
const jo = be((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * Pe);
}, (e, t) => (t - e) / Pe, (e) => e.getUTCHours());
jo.range;
const mt = be(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Se) / Oe,
  (e) => e.getDate() - 1
);
mt.range;
const Qn = be((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Oe, (e) => e.getUTCDate() - 1);
Qn.range;
const No = be((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Oe, (e) => Math.floor(e / Oe));
No.range;
function Ke(e) {
  return be((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Se) / Zn);
}
const tn = Ke(0), Ct = Ke(1), To = Ke(2), Do = Ke(3), tt = Ke(4), Fo = Ke(5), Bo = Ke(6);
tn.range;
Ct.range;
To.range;
Do.range;
tt.range;
Fo.range;
Bo.range;
function Ze(e) {
  return be((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Zn);
}
const ea = Ze(0), jt = Ze(1), Ro = Ze(2), Io = Ze(3), nt = Ze(4), $o = Ze(5), Mo = Ze(6);
ea.range;
jt.range;
Ro.range;
Io.range;
nt.range;
$o.range;
Mo.range;
const er = be((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
er.range;
const Lo = be((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
Lo.range;
const Ue = be((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Ue.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : be((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Ue.range;
const qe = be((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
qe.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : be((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
qe.range;
function Eo(e, t, r, a, o, s) {
  const i = [
    [Qe, 1, He],
    [Qe, 5, 5 * He],
    [Qe, 15, 15 * He],
    [Qe, 30, 30 * He],
    [s, 1, Se],
    [s, 5, 5 * Se],
    [s, 15, 15 * Se],
    [s, 30, 30 * Se],
    [o, 1, Pe],
    [o, 3, 3 * Pe],
    [o, 6, 6 * Pe],
    [o, 12, 12 * Pe],
    [a, 1, Oe],
    [a, 2, 2 * Oe],
    [r, 1, Zn],
    [t, 1, yr],
    [t, 3, 3 * yr],
    [e, 1, dn]
  ];
  function l(u, d, m) {
    const p = d < u;
    p && ([u, d] = [d, u]);
    const k = m && typeof m.range == "function" ? m : c(u, d, m), B = k ? k.range(u, +d + 1) : [];
    return p ? B.reverse() : B;
  }
  function c(u, d, m) {
    const p = Math.abs(d - u) / m, k = Vn(([, , C]) => C).right(i, p);
    if (k === i.length) return e.every(lr(u / dn, d / dn, m));
    if (k === 0) return St.every(Math.max(lr(u, d, m), 1));
    const [B, v] = i[p / i[k - 1][2] < i[k][2] / p ? k - 1 : k];
    return B.every(v);
  }
  return [l, c];
}
const [Ao, Ho] = Eo(Ue, er, tn, mt, Xn, Jn);
function un(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function hn(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function it(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function Po(e) {
  var t = e.dateTime, r = e.date, a = e.time, o = e.periods, s = e.days, i = e.shortDays, l = e.months, c = e.shortMonths, u = lt(o), d = ct(o), m = lt(s), p = ct(s), k = lt(i), B = ct(i), v = lt(l), C = ct(l), D = lt(c), R = ct(c), $ = {
    a: te,
    A: oe,
    b: ie,
    B: j,
    c: null,
    d: Cr,
    e: Cr,
    f: ci,
    g: yi,
    G: ki,
    H: oi,
    I: ii,
    j: li,
    L: ta,
    m: di,
    M: ui,
    p: ee,
    q: H,
    Q: Tr,
    s: Dr,
    S: hi,
    u: fi,
    U: mi,
    V: pi,
    w: gi,
    W: bi,
    x: null,
    X: null,
    y: xi,
    Y: _i,
    Z: vi,
    "%": Nr
  }, w = {
    a: O,
    A: Y,
    b: ue,
    B: f,
    c: null,
    d: jr,
    e: jr,
    f: ji,
    g: Li,
    G: Ai,
    H: wi,
    I: Si,
    j: Ci,
    L: ra,
    m: Ni,
    M: Ti,
    p: T,
    q: U,
    Q: Tr,
    s: Dr,
    S: Di,
    u: Fi,
    U: Bi,
    V: Ri,
    w: Ii,
    W: $i,
    x: null,
    X: null,
    y: Mi,
    Y: Ei,
    Z: Hi,
    "%": Nr
  }, E = {
    a: _,
    A: h,
    b: x,
    B: z,
    c: ae,
    d: wr,
    e: wr,
    f: ni,
    g: vr,
    G: kr,
    H: Sr,
    I: Sr,
    j: Xo,
    L: ti,
    m: Jo,
    M: Qo,
    p: S,
    q: Zo,
    Q: ai,
    s: si,
    S: ei,
    u: Go,
    U: Vo,
    V: Yo,
    w: Uo,
    W: qo,
    x: A,
    X: Q,
    y: vr,
    Y: kr,
    Z: Ko,
    "%": ri
  };
  $.x = g(r, $), $.X = g(a, $), $.c = g(t, $), w.x = g(r, w), w.X = g(a, w), w.c = g(t, w);
  function g(M, W) {
    return function(V) {
      var N = [], de = -1, ne = 0, le = M.length, J, b, y;
      for (V instanceof Date || (V = /* @__PURE__ */ new Date(+V)); ++de < le; )
        M.charCodeAt(de) === 37 && (N.push(M.slice(ne, de)), (b = _r[J = M.charAt(++de)]) != null ? J = M.charAt(++de) : b = J === "e" ? " " : "0", (y = W[J]) && (J = y(V, b)), N.push(J), ne = de + 1);
      return N.push(M.slice(ne, de)), N.join("");
    };
  }
  function L(M, W) {
    return function(V) {
      var N = it(1900, void 0, 1), de = F(N, M, V += "", 0), ne, le;
      if (de != V.length) return null;
      if ("Q" in N) return new Date(N.Q);
      if ("s" in N) return new Date(N.s * 1e3 + ("L" in N ? N.L : 0));
      if (W && !("Z" in N) && (N.Z = 0), "p" in N && (N.H = N.H % 12 + N.p * 12), N.m === void 0 && (N.m = "q" in N ? N.q : 0), "V" in N) {
        if (N.V < 1 || N.V > 53) return null;
        "w" in N || (N.w = 1), "Z" in N ? (ne = hn(it(N.y, 0, 1)), le = ne.getUTCDay(), ne = le > 4 || le === 0 ? jt.ceil(ne) : jt(ne), ne = Qn.offset(ne, (N.V - 1) * 7), N.y = ne.getUTCFullYear(), N.m = ne.getUTCMonth(), N.d = ne.getUTCDate() + (N.w + 6) % 7) : (ne = un(it(N.y, 0, 1)), le = ne.getDay(), ne = le > 4 || le === 0 ? Ct.ceil(ne) : Ct(ne), ne = mt.offset(ne, (N.V - 1) * 7), N.y = ne.getFullYear(), N.m = ne.getMonth(), N.d = ne.getDate() + (N.w + 6) % 7);
      } else ("W" in N || "U" in N) && ("w" in N || (N.w = "u" in N ? N.u % 7 : "W" in N ? 1 : 0), le = "Z" in N ? hn(it(N.y, 0, 1)).getUTCDay() : un(it(N.y, 0, 1)).getDay(), N.m = 0, N.d = "W" in N ? (N.w + 6) % 7 + N.W * 7 - (le + 5) % 7 : N.w + N.U * 7 - (le + 6) % 7);
      return "Z" in N ? (N.H += N.Z / 100 | 0, N.M += N.Z % 100, hn(N)) : un(N);
    };
  }
  function F(M, W, V, N) {
    for (var de = 0, ne = W.length, le = V.length, J, b; de < ne; ) {
      if (N >= le) return -1;
      if (J = W.charCodeAt(de++), J === 37) {
        if (J = W.charAt(de++), b = E[J in _r ? W.charAt(de++) : J], !b || (N = b(M, V, N)) < 0) return -1;
      } else if (J != V.charCodeAt(N++))
        return -1;
    }
    return N;
  }
  function S(M, W, V) {
    var N = u.exec(W.slice(V));
    return N ? (M.p = d.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function _(M, W, V) {
    var N = k.exec(W.slice(V));
    return N ? (M.w = B.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function h(M, W, V) {
    var N = m.exec(W.slice(V));
    return N ? (M.w = p.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function x(M, W, V) {
    var N = D.exec(W.slice(V));
    return N ? (M.m = R.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function z(M, W, V) {
    var N = v.exec(W.slice(V));
    return N ? (M.m = C.get(N[0].toLowerCase()), V + N[0].length) : -1;
  }
  function ae(M, W, V) {
    return F(M, t, W, V);
  }
  function A(M, W, V) {
    return F(M, r, W, V);
  }
  function Q(M, W, V) {
    return F(M, a, W, V);
  }
  function te(M) {
    return i[M.getDay()];
  }
  function oe(M) {
    return s[M.getDay()];
  }
  function ie(M) {
    return c[M.getMonth()];
  }
  function j(M) {
    return l[M.getMonth()];
  }
  function ee(M) {
    return o[+(M.getHours() >= 12)];
  }
  function H(M) {
    return 1 + ~~(M.getMonth() / 3);
  }
  function O(M) {
    return i[M.getUTCDay()];
  }
  function Y(M) {
    return s[M.getUTCDay()];
  }
  function ue(M) {
    return c[M.getUTCMonth()];
  }
  function f(M) {
    return l[M.getUTCMonth()];
  }
  function T(M) {
    return o[+(M.getUTCHours() >= 12)];
  }
  function U(M) {
    return 1 + ~~(M.getUTCMonth() / 3);
  }
  return {
    format: function(M) {
      var W = g(M += "", $);
      return W.toString = function() {
        return M;
      }, W;
    },
    parse: function(M) {
      var W = L(M += "", !1);
      return W.toString = function() {
        return M;
      }, W;
    },
    utcFormat: function(M) {
      var W = g(M += "", w);
      return W.toString = function() {
        return M;
      }, W;
    },
    utcParse: function(M) {
      var W = L(M += "", !0);
      return W.toString = function() {
        return M;
      }, W;
    }
  };
}
var _r = { "-": "", _: " ", 0: "0" }, xe = /^\s*\d+/, zo = /^%/, Wo = /[\\^$*+?|[\]().{}]/g;
function fe(e, t, r) {
  var a = e < 0 ? "-" : "", o = (a ? -e : e) + "", s = o.length;
  return a + (s < r ? new Array(r - s + 1).join(t) + o : o);
}
function Oo(e) {
  return e.replace(Wo, "\\$&");
}
function lt(e) {
  return new RegExp("^(?:" + e.map(Oo).join("|") + ")", "i");
}
function ct(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function Uo(e, t, r) {
  var a = xe.exec(t.slice(r, r + 1));
  return a ? (e.w = +a[0], r + a[0].length) : -1;
}
function Go(e, t, r) {
  var a = xe.exec(t.slice(r, r + 1));
  return a ? (e.u = +a[0], r + a[0].length) : -1;
}
function Vo(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.U = +a[0], r + a[0].length) : -1;
}
function Yo(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.V = +a[0], r + a[0].length) : -1;
}
function qo(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.W = +a[0], r + a[0].length) : -1;
}
function kr(e, t, r) {
  var a = xe.exec(t.slice(r, r + 4));
  return a ? (e.y = +a[0], r + a[0].length) : -1;
}
function vr(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.y = +a[0] + (+a[0] > 68 ? 1900 : 2e3), r + a[0].length) : -1;
}
function Ko(e, t, r) {
  var a = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return a ? (e.Z = a[1] ? 0 : -(a[2] + (a[3] || "00")), r + a[0].length) : -1;
}
function Zo(e, t, r) {
  var a = xe.exec(t.slice(r, r + 1));
  return a ? (e.q = a[0] * 3 - 3, r + a[0].length) : -1;
}
function Jo(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.m = a[0] - 1, r + a[0].length) : -1;
}
function wr(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.d = +a[0], r + a[0].length) : -1;
}
function Xo(e, t, r) {
  var a = xe.exec(t.slice(r, r + 3));
  return a ? (e.m = 0, e.d = +a[0], r + a[0].length) : -1;
}
function Sr(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.H = +a[0], r + a[0].length) : -1;
}
function Qo(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.M = +a[0], r + a[0].length) : -1;
}
function ei(e, t, r) {
  var a = xe.exec(t.slice(r, r + 2));
  return a ? (e.S = +a[0], r + a[0].length) : -1;
}
function ti(e, t, r) {
  var a = xe.exec(t.slice(r, r + 3));
  return a ? (e.L = +a[0], r + a[0].length) : -1;
}
function ni(e, t, r) {
  var a = xe.exec(t.slice(r, r + 6));
  return a ? (e.L = Math.floor(a[0] / 1e3), r + a[0].length) : -1;
}
function ri(e, t, r) {
  var a = zo.exec(t.slice(r, r + 1));
  return a ? r + a[0].length : -1;
}
function ai(e, t, r) {
  var a = xe.exec(t.slice(r));
  return a ? (e.Q = +a[0], r + a[0].length) : -1;
}
function si(e, t, r) {
  var a = xe.exec(t.slice(r));
  return a ? (e.s = +a[0], r + a[0].length) : -1;
}
function Cr(e, t) {
  return fe(e.getDate(), t, 2);
}
function oi(e, t) {
  return fe(e.getHours(), t, 2);
}
function ii(e, t) {
  return fe(e.getHours() % 12 || 12, t, 2);
}
function li(e, t) {
  return fe(1 + mt.count(Ue(e), e), t, 3);
}
function ta(e, t) {
  return fe(e.getMilliseconds(), t, 3);
}
function ci(e, t) {
  return ta(e, t) + "000";
}
function di(e, t) {
  return fe(e.getMonth() + 1, t, 2);
}
function ui(e, t) {
  return fe(e.getMinutes(), t, 2);
}
function hi(e, t) {
  return fe(e.getSeconds(), t, 2);
}
function fi(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function mi(e, t) {
  return fe(tn.count(Ue(e) - 1, e), t, 2);
}
function na(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? tt(e) : tt.ceil(e);
}
function pi(e, t) {
  return e = na(e), fe(tt.count(Ue(e), e) + (Ue(e).getDay() === 4), t, 2);
}
function gi(e) {
  return e.getDay();
}
function bi(e, t) {
  return fe(Ct.count(Ue(e) - 1, e), t, 2);
}
function xi(e, t) {
  return fe(e.getFullYear() % 100, t, 2);
}
function yi(e, t) {
  return e = na(e), fe(e.getFullYear() % 100, t, 2);
}
function _i(e, t) {
  return fe(e.getFullYear() % 1e4, t, 4);
}
function ki(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? tt(e) : tt.ceil(e), fe(e.getFullYear() % 1e4, t, 4);
}
function vi(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + fe(t / 60 | 0, "0", 2) + fe(t % 60, "0", 2);
}
function jr(e, t) {
  return fe(e.getUTCDate(), t, 2);
}
function wi(e, t) {
  return fe(e.getUTCHours(), t, 2);
}
function Si(e, t) {
  return fe(e.getUTCHours() % 12 || 12, t, 2);
}
function Ci(e, t) {
  return fe(1 + Qn.count(qe(e), e), t, 3);
}
function ra(e, t) {
  return fe(e.getUTCMilliseconds(), t, 3);
}
function ji(e, t) {
  return ra(e, t) + "000";
}
function Ni(e, t) {
  return fe(e.getUTCMonth() + 1, t, 2);
}
function Ti(e, t) {
  return fe(e.getUTCMinutes(), t, 2);
}
function Di(e, t) {
  return fe(e.getUTCSeconds(), t, 2);
}
function Fi(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Bi(e, t) {
  return fe(ea.count(qe(e) - 1, e), t, 2);
}
function aa(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? nt(e) : nt.ceil(e);
}
function Ri(e, t) {
  return e = aa(e), fe(nt.count(qe(e), e) + (qe(e).getUTCDay() === 4), t, 2);
}
function Ii(e) {
  return e.getUTCDay();
}
function $i(e, t) {
  return fe(jt.count(qe(e) - 1, e), t, 2);
}
function Mi(e, t) {
  return fe(e.getUTCFullYear() % 100, t, 2);
}
function Li(e, t) {
  return e = aa(e), fe(e.getUTCFullYear() % 100, t, 2);
}
function Ei(e, t) {
  return fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Ai(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? nt(e) : nt.ceil(e), fe(e.getUTCFullYear() % 1e4, t, 4);
}
function Hi() {
  return "+0000";
}
function Nr() {
  return "%";
}
function Tr(e) {
  return +e;
}
function Dr(e) {
  return Math.floor(+e / 1e3);
}
var Je, sa;
Pi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Pi(e) {
  return Je = Po(e), sa = Je.format, Je.parse, Je.utcFormat, Je.utcParse, Je;
}
function zi(e) {
  return new Date(e);
}
function Wi(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function oa(e, t, r, a, o, s, i, l, c, u) {
  var d = wo(), m = d.invert, p = d.domain, k = u(".%L"), B = u(":%S"), v = u("%I:%M"), C = u("%I %p"), D = u("%a %d"), R = u("%b %d"), $ = u("%B"), w = u("%Y");
  function E(g) {
    return (c(g) < g ? k : l(g) < g ? B : i(g) < g ? v : s(g) < g ? C : a(g) < g ? o(g) < g ? D : R : r(g) < g ? $ : w)(g);
  }
  return d.invert = function(g) {
    return new Date(m(g));
  }, d.domain = function(g) {
    return arguments.length ? p(Array.from(g, Wi)) : p().map(zi);
  }, d.ticks = function(g) {
    var L = p();
    return e(L[0], L[L.length - 1], g ?? 10);
  }, d.tickFormat = function(g, L) {
    return L == null ? E : u(L);
  }, d.nice = function(g) {
    var L = p();
    return (!g || typeof g.range != "function") && (g = t(L[0], L[L.length - 1], g ?? 10)), g ? p(So(L, g)) : d;
  }, d.copy = function() {
    return ko(d, oa(e, t, r, a, o, s, i, l, c, u));
  }, d;
}
function Oi() {
  return Us.apply(oa(Ao, Ho, Ue, er, tn, mt, Xn, Jn, Qe, sa).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Ui({
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
  const u = me(null), [d, m] = he(!1), [p, k] = he(!1), B = t(e.start), v = t(e.end), C = Math.max(v - B, 20), D = () => {
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
  }, R = e.progress ? C * e.progress / 100 : 0, $ = () => {
    r?.(e);
  }, w = () => {
    a?.(e);
  }, E = (x) => {
    x.key === "Enter" ? (x.preventDefault(), $()) : x.key === " " && (x.preventDefault(), w());
  }, g = () => {
    m(!0);
  }, L = () => {
    m(!1);
  }, F = () => {
    k(!0), l?.();
  }, S = () => {
    k(!1);
  }, _ = [
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
    "--task-color": D(),
    left: `${B}px`,
    width: `${C}px`,
    backgroundColor: D()
  };
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      role: "button",
      tabIndex: i,
      ref: u,
      "data-task-index": s,
      className: _,
      style: h,
      onClick: $,
      onDoubleClick: w,
      onKeyDown: E,
      onMouseDown: g,
      onMouseUp: L,
      onFocus: F,
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
function Gi({ viewStart: e, viewEnd: t, dateCount: r }) {
  const a = [];
  for (let k = e.getTime(); k <= t.getTime(); k += 864e5)
    a.push(new Date(k));
  const s = /* @__PURE__ */ new Date();
  s.setHours(0, 0, 0, 0);
  const [i, l] = he(-1), c = me(null), u = (k) => {
    if (k.key === "ArrowLeft") {
      k.preventDefault();
      const B = Math.max(0, i === -1 ? 0 : i - 1);
      l(B), p(B);
    } else if (k.key === "ArrowRight") {
      k.preventDefault();
      const B = Math.min(a.length - 1, i === -1 ? 0 : i + 1);
      l(B), p(B);
    } else if (k.key === "ArrowDown") {
      k.preventDefault();
      const B = document.querySelector(".gantt-row .timeline-container");
      B && B.focus();
    } else if (k.key === "Home")
      k.preventDefault(), l(0), p(0);
    else if (k.key === "End") {
      k.preventDefault();
      const B = a.length - 1;
      l(B), p(B);
    }
  }, d = (k) => {
    if (k.key === "ArrowDown") {
      k.preventDefault();
      const B = document.querySelector(".gantt-row .resource-label");
      B && B.focus();
    } else if (k.key === "ArrowRight") {
      k.preventDefault();
      const B = c.current;
      B && B.focus();
    }
  }, m = () => {
    i === -1 && (l(0), setTimeout(() => p(0), 0));
  }, p = (k) => {
    const B = c.current?.querySelector(`[data-date-index="${k}"]`);
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
            children: a.map((k, B) => {
              const v = k.getTime() === s.getTime(), C = i === B;
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  "data-date-index": B,
                  className: `date-column ${v ? "today" : ""} ${C ? "focused" : ""}`,
                  tabIndex: C ? 0 : -1,
                  role: "button",
                  "aria-label": `${k.toLocaleDateString("en-GB", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                  })}${v ? " (Today)" : ""}`,
                  onFocus: () => l(B),
                  onKeyDown: u,
                  children: k.toLocaleDateString("en-GB", {
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
function Vi({ resource: e, tasks: t, scale: r, onTaskClick: a, onTaskDoubleClick: o, rowIndex: s, dateCount: i }) {
  const [l, c] = he(!1), [u, d] = he(-1), m = me(null);
  pe(() => {
    l && u >= 0 && t.length > 0 && setTimeout(() => {
      m.current?.querySelector(`[data-task-index="${u}"]`)?.focus();
    }, 0);
  }, [l, u, t.length]);
  const p = (v) => {
    if (v.key === "ArrowLeft" && v.shiftKey) {
      v.preventDefault(), v.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (v.key === "ArrowRight" && v.shiftKey) {
      v.preventDefault(), v.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!l) {
      switch (v.key) {
        case "ArrowUp":
          v.preventDefault(), s === 0 ? document.querySelector(".header-timeline")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .timeline-container`)?.focus();
          break;
        case "ArrowDown":
          v.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .timeline-container`)?.focus();
          break;
        case "ArrowLeft":
          v.preventDefault(), m.current?.closest(".gantt-row")?.querySelector(".resource-label")?.focus();
          break;
        case "Enter":
          t.length > 0 && (v.preventDefault(), c(!0), d(0));
          break;
      }
      return;
    }
    switch (v.key) {
      case "ArrowLeft":
        v.preventDefault();
        const C = Math.max(0, u - 1);
        d(C), m.current?.querySelector(`[data-task-index="${C}"]`)?.focus();
        break;
      case "ArrowRight":
        v.preventDefault();
        const R = Math.min(t.length - 1, u + 1);
        d(R), m.current?.querySelector(`[data-task-index="${R}"]`)?.focus();
        break;
      case "Enter":
        v.preventDefault(), u >= 0 && a?.(t[u]);
        break;
      case " ":
        v.preventDefault(), u >= 0 && o?.(t[u]);
        break;
      case "Escape":
        v.preventDefault(), c(!1), d(-1), m.current?.focus();
        break;
    }
  }, k = (v) => {
    switch (v.key) {
      case "ArrowUp":
        v.preventDefault(), s === 0 ? document.querySelector(".header-resource")?.focus() : document.querySelector(`[aria-rowindex="${s + 1}"] .resource-label`)?.focus();
        break;
      case "ArrowDown":
        v.preventDefault(), document.querySelector(`[aria-rowindex="${s + 3}"] .resource-label`)?.focus();
        break;
      case "ArrowRight":
        v.preventDefault(), m.current?.focus();
        break;
    }
  }, B = (v) => {
    l && d(v);
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
            onKeyDown: k,
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
            children: t.map((v, C) => /* @__PURE__ */ n.jsx(
              Ui,
              {
                task: v,
                scale: r,
                onTaskClick: a,
                onTaskDoubleClick: o,
                isSelected: l && u === C,
                taskIndex: C,
                tabIndex: l && u === C ? 0 : -1,
                onFocus: () => B(C)
              },
              v.id
            ))
          }
        )
      ]
    }
  );
}
function Hh({
  resources: e,
  tasks: t = [],
  viewStart: r,
  viewEnd: a,
  onTaskClick: o,
  onTaskDoubleClick: s
}) {
  const i = me(null), [l, c] = he(800), u = ge(() => {
    if (r instanceof Date)
      return isNaN(r.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : r;
    const v = new Date(r);
    return isNaN(v.getTime()) ? (console.warn("GanttChart: Invalid viewStart date provided, using current date"), /* @__PURE__ */ new Date()) : v;
  }, [r]), d = ge(() => {
    if (a instanceof Date)
      return isNaN(a.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : a;
    const v = new Date(a);
    return isNaN(v.getTime()) ? (console.warn("GanttChart: Invalid viewEnd date provided, using date 7 days from now"), new Date(Date.now() + 10080 * 60 * 1e3)) : v;
  }, [a]), m = ge(() => Math.ceil((d.getTime() - u.getTime()) / 864e5) + 1, [u, d]);
  pe(() => {
    if (!i.current) return;
    const v = new ResizeObserver((C) => {
      const D = C[0];
      D && c(Math.max(D.contentRect.width - 220, 400));
    });
    return v.observe(i.current), () => v.disconnect();
  }, []);
  const p = ge(
    () => Oi().domain([u, d]).range([0, l]),
    [u, d, l]
  ), k = ge(() => {
    const v = /* @__PURE__ */ new Map();
    return t.forEach((C) => {
      const D = v.get(C.resourceId) || [];
      D.push(C), v.set(C.resourceId, D);
    }), v;
  }, [t]), B = (v) => {
    if (v.target === v.currentTarget)
      switch (v.key) {
        case "ArrowDown":
          v.preventDefault();
          const C = i.current?.querySelector(".gantt-row .resource-label");
          C && C.focus();
          break;
        case "Home":
          v.preventDefault();
          const D = i.current?.querySelector(".header-resource");
          D && D.focus();
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
        /* @__PURE__ */ n.jsx(Gi, { viewStart: u, viewEnd: d, dateCount: m }),
        /* @__PURE__ */ n.jsx(
          "div",
          {
            ref: i,
            className: "gantt-grid",
            role: "rowgroup",
            "aria-label": "Gantt chart data rows",
            tabIndex: 0,
            onKeyDown: (v) => {
              v.key === "ArrowLeft" && v.altKey ? (v.preventDefault(), i.current?.scrollBy({ left: -50, behavior: "smooth" })) : v.key === "ArrowRight" && v.altKey ? (v.preventDefault(), i.current?.scrollBy({ left: 50, behavior: "smooth" })) : v.key === "ArrowUp" && v.altKey ? (v.preventDefault(), i.current?.scrollBy({ top: -50, behavior: "smooth" })) : v.key === "ArrowDown" && v.altKey && (v.preventDefault(), i.current?.scrollBy({ top: 50, behavior: "smooth" }));
            },
            children: e.map((v, C) => /* @__PURE__ */ n.jsx(
              Vi,
              {
                resource: v,
                tasks: k.get(v.id) || [],
                scale: p,
                onTaskClick: o,
                onTaskDoubleClick: s,
                rowIndex: C,
                dateCount: m
              },
              v.id
            ))
          }
        )
      ]
    }
  );
}
const Nt = ({
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
) }), Yi = ({
  items: e = [],
  children: t,
  classes: r,
  labelText: a = "Breadcrumb",
  href: o,
  text: s,
  reverse: i = !1,
  attributes: l = {}
}) => {
  const c = () => t ? je.Children.toArray(t).filter(
    (D) => je.isValidElement(D) && (D.type === Nt || D.type?.displayName === "BreadcrumbItem")
  ).map((D) => ({
    text: typeof D.props.children == "string" ? D.props.children : String(D.props.children),
    href: D.props.href,
    active: D.props.active,
    attributes: D.props.attributes
  })) : [], u = () => t ? c() : o && s ? [{ href: o, text: s }] : e, d = () => {
    const C = u();
    if (C && C.length > 0) {
      const D = C.slice().reverse().find((R) => R.href && !R.active);
      if (D)
        return { href: D.href, text: D.text };
    }
    return { text: "Home" };
  }, m = u(), p = d(), k = q(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    r
  ), v = m && m.length > 1 ? a : void 0;
  return /* @__PURE__ */ n.jsxs(
    "nav",
    {
      className: k,
      "aria-label": v,
      role: "navigation",
      ...l,
      children: [
        /* @__PURE__ */ n.jsx("ol", { className: "nhsuk-breadcrumb__list", role: "list", children: t ? (
          // Render children directly if using compound component pattern
          je.Children.map(t, (C, D) => je.isValidElement(C) && (C.type === Nt || C.type?.displayName === "BreadcrumbItem") ? je.cloneElement(C, { key: D }) : null)
        ) : (
          // Render from items array
          m?.map((C, D) => /* @__PURE__ */ n.jsx("li", { className: "nhsuk-breadcrumb__item", role: "listitem", children: C.active ? /* @__PURE__ */ n.jsx(
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
          ) }, D))
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
}, qi = Yi;
qi.Item = Nt;
Nt.displayName = "BreadcrumbItem";
const ia = ({
  text: e = "Skip to main content",
  href: t = "#maincontent",
  classes: r,
  attributes: a = {}
}) => {
  const [o, s] = he(!1);
  pe(() => {
    s(!0);
  }, []), pe(() => {
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
  const i = q("nhsuk-skip-link", r);
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
}, Ph = ({
  previousUrl: e,
  previousPage: t,
  nextUrl: r,
  nextPage: a,
  classes: o,
  attributes: s = {}
}) => {
  const i = q("nhsuk-pagination", o);
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
}, zh = ({
  items: e,
  classes: t,
  ariaLabel: r = "Pages in this guide",
  attributes: a = {}
}) => {
  const o = q("nhsuk-contents-list", t), s = (i, l) => i.current ? /* @__PURE__ */ n.jsx(
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
}, la = je.forwardRef(({
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
  ].filter(Boolean).join(" "), k = [
    "nhsuk-card__content",
    e === "feature" && "nhsuk-card__content--feature",
    e === "primary" && "nhsuk-card__content--primary",
    e === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), B = [
    "nhsuk-card__heading",
    e === "feature" && "nhsuk-card__heading--feature",
    o
  ].filter(Boolean).join(" "), v = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const R = () => l && e !== "feature" ? /* @__PURE__ */ n.jsx("a", { className: "nhsuk-card__link", href: l, children: t }) : t;
    return /* @__PURE__ */ n.jsx(
      We,
      {
        level: a,
        className: B,
        children: R()
      }
    );
  }, C = () => d.children ? d.children : i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-card__description", children: s }) : null, D = () => e !== "primary" ? null : /* @__PURE__ */ n.jsxs(
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
        /* @__PURE__ */ n.jsxs("div", { className: k, children: [
          v(),
          C(),
          D()
        ] })
      ]
    }
  );
});
la.displayName = "Card";
const Wh = ({
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
}, Oh = ({
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
}, Uh = ({
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
  "aria-describedby": k
}) => {
  const B = [
    "nhsuk-care-card",
    `nhsuk-care-card--${e}`,
    l
  ].filter(Boolean).join(" "), v = [
    "nhsuk-care-card__heading",
    o
  ].filter(Boolean).join(" "), C = () => {
    if (r)
      return /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!t) return null;
    const R = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[e], $ = /* @__PURE__ */ n.jsxs("span", { role: "text", children: [
      /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
        R,
        " "
      ] }),
      t
    ] });
    return /* @__PURE__ */ n.jsx(
      We,
      {
        level: a,
        className: v,
        children: $
      }
    );
  }, D = () => c || (i ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: i } }) : s ? /* @__PURE__ */ n.jsx("p", { className: "nhsuk-care-card__text", children: s }) : null);
  return /* @__PURE__ */ n.jsxs(
    "div",
    {
      className: B,
      "data-testid": u,
      id: d,
      "aria-label": m,
      "aria-labelledby": p,
      "aria-describedby": k,
      children: [
        /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-care-card__heading-container", children: [
          C(),
          /* @__PURE__ */ n.jsx("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ n.jsx("div", { className: "nhsuk-care-card__content", children: D() })
      ]
    }
  );
}, Ki = ({
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
  const u = q(
    "nhsuk-panel",
    t
  ), d = () => !r && !a && !l ? null : a ? /* @__PURE__ */ n.jsx(
    We,
    {
      level: o,
      className: "nhsuk-panel__heading",
      html: a,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ n.jsx(
    We,
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
}, Gh = ({
  text: e,
  html: t,
  children: r,
  className: a,
  ...o
}) => {
  const s = q("nhsuk-inset-text", a), i = () => r || (t ? /* @__PURE__ */ n.jsx("div", { dangerouslySetInnerHTML: { __html: t } }) : e ? /* @__PURE__ */ n.jsx("p", { children: e }) : null);
  return /* @__PURE__ */ n.jsx("div", { className: s, ...o, children: i() });
}, Vh = ({
  items: e,
  noBorder: t = !1,
  className: r,
  ...a
}) => {
  const o = q(
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
}, Yh = ({
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
  "data-testid": k
}) => {
  const B = `nhsuk-table__caption ${a ? `nhsuk-table__caption--${a}` : ""}`.trim(), v = q(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": s
    },
    d
  ), C = q(m), D = (w, E) => {
    const g = q("nhsuk-table__header", {
      [`nhsuk-table__header--${w.format}`]: w.format
    }, w.classes), L = {
      scope: "col",
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && { role: "columnheader" },
      ...w.attributes
    };
    return /* @__PURE__ */ n.jsx("th", { className: g, ...L, children: w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text }, E);
  }, R = (w, E, g) => {
    const L = o && g, F = q(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${w.format}`]: w.format
      },
      w.classes
    ), S = {
      ...L && { scope: "row" },
      ...w.colspan && { colSpan: w.colspan },
      ...w.rowspan && { rowSpan: w.rowspan },
      ...s && {
        role: L ? "rowheader" : "cell",
        ...w.header && { "data-label": w.header }
      },
      ...w.attributes
    }, _ = /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
      s && w.header && /* @__PURE__ */ n.jsxs("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        w.header,
        " "
      ] }),
      w.html ? /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: w.html } }) : w.text
    ] }), h = L ? "th" : "td";
    return /* @__PURE__ */ n.jsx(h, { className: F, ...S, children: _ }, E);
  }, $ = () => /* @__PURE__ */ n.jsxs(
    "table",
    {
      className: v,
      ...s && { role: "table" },
      ...p,
      ...k && { "data-testid": k },
      children: [
        r && /* @__PURE__ */ n.jsx("caption", { className: B, children: r }),
        t && t.length > 0 && /* @__PURE__ */ n.jsx(
          "thead",
          {
            className: "nhsuk-table__head",
            ...s && { role: "rowgroup" },
            children: /* @__PURE__ */ n.jsx("tr", { ...s && { role: "row" }, children: t.map((w, E) => D(w, E)) })
          }
        ),
        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", children: e && e.map((w, E) => /* @__PURE__ */ n.jsx(
          "tr",
          {
            className: "nhsuk-table__row",
            ...s && { role: "row" },
            children: w.map(
              (g, L) => R(g, L, L === 0)
            )
          },
          E
        )) })
      ]
    }
  );
  return c ? /* @__PURE__ */ n.jsxs(Ki, { className: u, children: [
    i && /* @__PURE__ */ n.jsx(We, { level: l, className: "nhsuk-table__heading-tab", children: i }),
    $()
  ] }) : C ? /* @__PURE__ */ n.jsx("div", { className: C, children: $() }) : $();
}, qh = rt(({
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
  const k = r !== void 0, [B, v] = he(() => t || e[0]?.id || ""), C = k ? r : B, D = me(null), R = me(/* @__PURE__ */ new Map()), $ = X((_) => {
    k || v(_), a?.(_);
  }, [k, a]), w = X((_) => {
    o?.(_), l && $(_);
  }, [o, l, $]), E = X((_, h) => {
    const x = e.filter((A) => !A.disabled).map((A) => A.id), z = x.indexOf(h);
    let ae = null;
    switch (_.key) {
      case "ArrowLeft":
        ae = z > 0 ? z - 1 : x.length - 1;
        break;
      case "ArrowRight":
        ae = z < x.length - 1 ? z + 1 : 0;
        break;
      case "Home":
        ae = 0;
        break;
      case "End":
        ae = x.length - 1;
        break;
      case "Escape":
        _.preventDefault(), i?.();
        return;
      default:
        return;
    }
    if (ae !== null) {
      _.preventDefault();
      const A = x[ae], Q = R.current.get(A);
      Q && (Q.focus(), w(A));
    }
  }, [e, w, i]), g = X((_, h) => {
    h ? R.current.set(_, h) : R.current.delete(_);
  }, []), L = X((_) => {
    const h = R.current.get(_);
    h && h.focus();
  }, []);
  Hr(p, () => ({
    focusTab: L,
    getActiveTab: () => C,
    getTabListElement: () => D.current
  }), [L, C]);
  const F = X((_) => {
    const h = _.relatedTarget;
    D.current?.contains(h) || s?.();
  }, [s]), S = q("nhsuk-tabs", c);
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
            ref: D,
            children: /* @__PURE__ */ n.jsx(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: F,
                children: e.map((_) => {
                  const h = _.id === C, x = _.disabled, z = q("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": h,
                    "nhsuk-tabs__list-item--disabled": x
                  });
                  return /* @__PURE__ */ n.jsx("li", { className: z, children: /* @__PURE__ */ n.jsx(
                    "button",
                    {
                      ref: (ae) => g(_.id, ae),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": h,
                      "aria-controls": `${_.id}-panel`,
                      id: `${_.id}-tab`,
                      tabIndex: h ? 0 : -1,
                      disabled: x,
                      onClick: () => !x && $(_.id),
                      onKeyDown: (ae) => !x && E(ae, _.id),
                      onFocus: () => !x && w(_.id),
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
          const h = _.id === C;
          return /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${_.id}-tab`,
              id: `${_.id}-panel`,
              hidden: !h,
              children: _.content
            },
            _.id
          );
        })
      ]
    }
  );
}), Zi = rt(
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
Zi.displayName = "Details";
const Ji = rt(
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
    ), m = (k) => t === "cross" && !a ? `do not ${k}` : k, p = () => /* @__PURE__ */ n.jsx(
      We,
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
          /* @__PURE__ */ n.jsx("div", { className: "nhsuk-do-dont-list__content--feature", children: /* @__PURE__ */ n.jsx("ul", { className: u.join(" "), role: "list", children: r.map((k, B) => /* @__PURE__ */ n.jsxs("li", { children: [
            d(),
            m(k.item)
          ] }, B)) }) })
        ]
      }
    );
  }
);
Ji.displayName = "DoDontList";
const Xi = rt(
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
Xi.displayName = "Expander";
const Qi = rt(
  ({ items: e, idPrefix: t = "task-list", className: r, ...a }, o) => {
    const s = [
      "nhsuk-task-list",
      r
    ].filter(Boolean).join(" "), i = (l, c) => {
      const u = c + 1, d = `${t}-${u}-hint`, m = `${t}-${u}-status`, p = !!l.href, k = [
        "nhsuk-task-list__item",
        p && "nhsuk-task-list__item--with-link",
        l.classes
      ].filter(Boolean).join(" "), B = [
        l.hint && d,
        m
      ].filter(Boolean).join(" ");
      return /* @__PURE__ */ n.jsx(
        el,
        {
          item: l,
          itemClasses: k,
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
), el = ({
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
    return e.status.tag ? d = /* @__PURE__ */ n.jsx(ze, { ...e.status.tag }) : e.status.html ? d = /* @__PURE__ */ n.jsx("span", { dangerouslySetInnerHTML: { __html: e.status.html } }) : d = e.status.text, /* @__PURE__ */ n.jsx("div", { className: u, id: o, children: d });
  };
  return /* @__PURE__ */ n.jsxs("li", { className: t, children: [
    /* @__PURE__ */ n.jsxs("div", { className: "nhsuk-task-list__name-and-hint", children: [
      i(),
      l()
    ] }),
    c()
  ] });
};
Qi.displayName = "TaskList";
const Kh = ({
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
        Ar(
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
}, Zh = ({
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
}, tl = ({
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
    /* @__PURE__ */ n.jsx(We, { level: 3, className: "nhs-fdp-summary-card__title", children: e }),
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
}, Jh = ({
  cards: e,
  className: t = "",
  ...r
}) => {
  const a = [
    "nhs-fdp-dashboard-summary-grid",
    t
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ n.jsx("div", { className: a, ...r, children: /* @__PURE__ */ n.jsx(Ts, { children: e.map((o, s) => /* @__PURE__ */ n.jsx(
    Gn,
    {
      width: "one-quarter",
      className: "nhs-fdp-dashboard-summary-grid__column",
      children: /* @__PURE__ */ n.jsx(tl, { ...o })
    },
    s
  )) }) });
}, nl = je.forwardRef(
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
    bordered: k = !1,
    striped: B = !1,
    responsive: v = !1,
    tableType: C = "default"
  }, D) => {
    const R = me(null), $ = me(null), w = me(null);
    je.useImperativeHandle(D, () => R.current, []);
    const [E, g] = he(0), [L, F] = he(0), [S, _] = he("headers"), [h, x] = he("browse"), z = t.length, ae = e.length, A = ge(() => !r || r.length === 0 ? e : [...e].sort((H, O) => {
      for (const { key: Y, direction: ue } of r) {
        const f = H[Y], T = O[Y];
        if (f == null && T == null) continue;
        if (f == null) return 1;
        if (T == null) return -1;
        let U = 0;
        if (typeof f == "number" && typeof T == "number" ? U = f - T : U = String(f).localeCompare(String(T)), U !== 0)
          return ue === "asc" ? U : -U;
      }
      return 0;
    }), [e, r]), Q = X((H, O) => {
      setTimeout(() => {
        const Y = R.current?.querySelector(
          `tbody tr:nth-child(${H + 1}) td:nth-child(${O + 1})`
        );
        Y && (Y.focus(), typeof Y.scrollIntoView == "function" && Y.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), te = X((H) => {
      setTimeout(() => {
        const O = R.current?.querySelector(`th:nth-child(${H + 1})`);
        O && (O.focus(), typeof O.scrollIntoView == "function" && O.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }));
      }, 0);
    }, []), oe = X((H) => {
      a?.(H);
    }, [a]), ie = X((H) => {
      s?.(H);
    }, [s]), j = X((H) => {
      const { key: O } = H;
      switch (O) {
        case "Enter":
          if (H.preventDefault(), S === "headers" && h === "browse")
            x("navigate"), te(L);
          else if (S === "headers" && h === "navigate") {
            const Y = t[L];
            Y && oe(Y.key);
          } else S === "cells" && h === "browse" ? (x("navigate"), Q(E, L)) : S === "cells" && h === "navigate" && ie(E);
          break;
        case "Escape":
          H.preventDefault(), (S === "headers" && h === "navigate" || S === "cells" && h === "navigate") && x("browse");
          break;
        case "ArrowLeft":
          if (H.preventDefault(), h === "navigate" || h === "browse" && S === "headers") {
            if (S === "headers") {
              const Y = Math.max(0, L - 1);
              F(Y), te(Y);
            } else if (S === "cells") {
              const Y = Math.max(0, L - 1);
              F(Y), Q(E, Y);
            }
          }
          break;
        case "ArrowRight":
          if (H.preventDefault(), h === "navigate" || h === "browse" && S === "headers") {
            if (S === "headers") {
              const Y = Math.min(z - 1, L + 1);
              F(Y), te(Y);
            } else if (S === "cells") {
              const Y = Math.min(z - 1, L + 1);
              F(Y), Q(E, Y);
            }
          }
          break;
        case "ArrowUp":
          if (H.preventDefault(), S === "cells") {
            if (h === "browse") {
              const Y = Math.max(0, E - 1);
              g(Y), Q(Y, 0), F(0);
            } else if (h === "navigate")
              if (E > 0) {
                const Y = E - 1;
                g(Y), Q(Y, L);
              } else
                _("headers"), x("browse"), te(L);
          }
          break;
        case "ArrowDown":
          if (H.preventDefault(), S === "headers" && h === "browse")
            _("cells"), g(0), F(0), Q(0, 0);
          else if (S === "cells") {
            const Y = ae - 1;
            if (h === "browse") {
              const ue = Math.min(Y, E + 1);
              g(ue), Q(ue, 0), F(0);
            } else if (h === "navigate" && E < Y) {
              const ue = E + 1;
              g(ue), Q(ue, L);
            }
          }
          break;
        case "Home":
          H.preventDefault(), S === "headers" ? (F(0), te(0)) : S === "cells" && (H.ctrlKey ? (g(0), F(0), Q(0, 0)) : (F(0), Q(E, 0)));
          break;
        case "End":
          if (H.preventDefault(), S === "headers") {
            const Y = z - 1;
            F(Y), te(Y);
          } else if (S === "cells")
            if (H.ctrlKey) {
              const Y = ae - 1, ue = z - 1;
              g(Y), F(ue), Q(Y, ue);
            } else {
              const Y = z - 1;
              F(Y), Q(E, Y);
            }
          break;
        case " ":
          if (H.preventDefault(), S === "headers" && h === "navigate") {
            const Y = t[L];
            Y && oe(Y.key);
          } else S === "cells" && h === "navigate" && ie(E);
          break;
      }
    }, [
      S,
      h,
      L,
      E,
      z,
      ae,
      t,
      Q,
      te,
      oe,
      ie
    ]);
    pe(() => {
      const H = R.current;
      if (H)
        return H.addEventListener("keydown", j), () => H.removeEventListener("keydown", j);
    }, [j]);
    const ee = q(
      "nhsuk-table",
      p,
      {
        "nhsuk-table--responsive": v,
        "nhsuk-table--bordered": k,
        "nhsuk-table--striped": B,
        "nhsuk-table--compact": C === "compact"
      },
      m
    );
    return /* @__PURE__ */ n.jsxs(
      "table",
      {
        ref: R,
        className: ee,
        id: i,
        "data-testid": l,
        role: "grid",
        "aria-label": c,
        "aria-labelledby": u,
        "aria-describedby": d,
        tabIndex: 0,
        children: [
          /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { ref: $, role: "row", children: t.map((H, O) => {
            const Y = r?.find((T) => T.key === H.key), ue = !!Y, f = S === "headers" && L === O;
            return /* @__PURE__ */ n.jsx(
              "th",
              {
                className: q("sortable-header", {
                  "sortable-header--focused": f
                }),
                role: "columnheader",
                tabIndex: f ? 0 : -1,
                onClick: () => oe(H.key),
                onKeyDown: (T) => {
                  (T.key === "Enter" || T.key === " ") && (T.preventDefault(), oe(H.key));
                },
                "aria-sort": ue ? Y?.direction === "asc" ? "ascending" : "descending" : "none",
                children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                  /* @__PURE__ */ n.jsx("span", { className: "header-label", children: H.label }),
                  ue && /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator", "aria-hidden": "true", children: [
                    r && r.length > 1 && /* @__PURE__ */ n.jsx("span", { className: "sort-priority", children: r.findIndex((T) => T.key === H.key) + 1 }),
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
              H.key
            );
          }) }) }),
          /* @__PURE__ */ n.jsx("tbody", { ref: w, className: "nhsuk-table__body", role: "rowgroup", children: A.map((H, O) => {
            const Y = o === O, ue = S === "cells" && E === O;
            return /* @__PURE__ */ n.jsx(
              "tr",
              {
                role: "row",
                className: q("data-row", {
                  "data-row--selected": Y,
                  "data-row--focused": ue
                }),
                "aria-selected": Y,
                children: t.map((f, T) => {
                  const U = f.tableRenderer ? f.tableRenderer(H) : f.render ? f.render(H) : H[f.key], M = S === "cells" && E === O && L === T, W = () => typeof U == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                    /* @__PURE__ */ n.jsx("span", { "aria-hidden": "true", children: U ? "✓" : "✗" }),
                    /* @__PURE__ */ n.jsx("span", { className: "sr-only", children: U ? "Yes" : "No" })
                  ] }) : String(U ?? "");
                  return /* @__PURE__ */ n.jsx(
                    "td",
                    {
                      role: "gridcell",
                      className: q("data-cell", {
                        "data-cell--focused": M
                      }),
                      tabIndex: M ? 0 : -1,
                      onClick: () => ie(O),
                      children: W()
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
nl.displayName = "AriaDataGrid";
const ca = ({
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
  const m = me(null), p = me(null), k = me(null), B = X((S, _) => {
    c || (p.current = _, S.dataTransfer.effectAllowed = "move", S.dataTransfer.setData("text/plain", _));
  }, [c]), v = X((S, _) => {
    c || p.current === _ || (S.preventDefault(), S.dataTransfer.dropEffect = "move", k.current = _);
  }, [c]), C = X((S, _) => {
    if (c) return;
    S.preventDefault();
    const h = p.current;
    if (!h || h === _) return;
    const x = e.findIndex((ae) => ae.key === h), z = e.findIndex((ae) => ae.key === _);
    if (x !== -1 && z !== -1) {
      const ae = [...e], [A] = ae.splice(x, 1);
      ae.splice(z, 0, A), r(ae);
    }
    p.current = null, k.current = null;
  }, [c, e, r]), D = X(() => {
    p.current = null, k.current = null;
  }, []), R = X((S) => {
    const _ = t.find((h) => h.key === S);
    return _ ? _.label : S;
  }, [t]), $ = X((S) => ["red", "orange", "blue", "aqua-green", "grey"][S] || "grey", []), w = X((S) => {
    if (c) return;
    const _ = e.map(
      (h) => h.key === S ? { ...h, direction: h.direction === "asc" ? "desc" : "asc" } : h
    );
    r(_);
  }, [e, r, c]), E = X((S) => {
    if (c) return;
    const _ = e.filter((h) => h.key !== S);
    r(_);
  }, [e, r, c]), g = X(() => {
    c || r([]);
  }, [r, c]), L = () => {
    if (e.length === 0)
      return o;
    if (s)
      return s;
    const S = e.map((_, h) => {
      const x = _.direction === "asc" ? "ascending" : "descending";
      return `${h + 1}. ${R(_.key)} (${x})`;
    });
    if (S.length === 1)
      return `Sorted by: ${S[0]}`;
    if (S.length === 2)
      return `Sorted by: ${S.join(" and ")}`;
    {
      const _ = S.pop();
      return `Sorted by: ${S.join(", ")}, and ${_}`;
    }
  }, F = ge(() => {
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
        children: L()
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
          "aria-describedby": F,
          children: e.map((S, _) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              draggable: !c,
              onDragStart: (h) => B(h, S.key),
              onDragOver: (h) => v(h, S.key),
              onDrop: (h) => C(h, S.key),
              onDragEnd: D,
              onClick: () => w(S.key),
              style: { cursor: c ? "default" : "pointer" },
              title: c ? "" : `Click to toggle sort direction. Currently ${S.direction === "asc" ? "ascending" : "descending"}`,
              "data-key": S.key,
              children: /* @__PURE__ */ n.jsx(
                ze,
                {
                  color: $(_),
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => E(S.key),
                  disabled: c,
                  children: /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-content", children: [
                    /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__drag-handle", title: "Drag to reorder", children: "⋮⋮" }),
                    /* @__PURE__ */ n.jsx("div", { className: `sort-status-control__priority-badge sort-priority sort-priority--priority-${_ + 1}`, children: _ + 1 }),
                    /* @__PURE__ */ n.jsx("span", { className: "sort-status-control__tag-label", children: R(S.key) }),
                    /* @__PURE__ */ n.jsx(
                      "button",
                      {
                        type: "button",
                        className: "sort-status-control__direction-button",
                        onClick: (h) => {
                          h.stopPropagation(), w(S.key);
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
        ve,
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
function rl(e, t) {
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
const bn = rt(
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
      id: k,
      isLoading: B = !1,
      loadingComponent: v,
      error: C = null,
      errorComponent: D,
      "data-testid": R
    } = t, {
      dataComparator: $ = (f, T) => JSON.stringify(f) === JSON.stringify(T),
      filterFunction: w = (f) => f,
      booleanRenderer: E = (f) => f ? "✓" : "✗"
    } = a || {}, g = s !== void 0, L = s ?? 0, [F, S] = he({
      focusArea: "tabs",
      focusedTabIndex: L,
      focusedHeaderIndex: 0,
      focusedRowIndex: 0,
      focusedColumnIndex: 0,
      isGridActive: !1
    }), _ = ge(() => ({
      selectedIndex: L,
      tabLoadingStates: new Array(o.length).fill(!1),
      tabErrors: new Array(o.length).fill(null),
      sortConfig: [],
      // Start with empty sort config
      selectedRows: new Array(o.length).fill([]),
      globalSelectedRowData: null,
      filters: void 0
    }), [L]), [h, x] = Pr(rl, _);
    pe(() => {
      const f = h.tabLoadingStates.length, T = o.length;
      f !== T && x({ type: "ADJUST_ARRAYS", payload: { newLength: T } });
    }, [o.length]), pe(() => {
      g && x({ type: "SET_SELECTED_INDEX", payload: L });
    }, [L, g]), pe(() => {
      S((f) => ({
        ...f,
        focusArea: "tabs",
        focusedTabIndex: h.selectedIndex,
        focusedHeaderIndex: 0,
        focusedRowIndex: 0,
        focusedColumnIndex: 0,
        isGridActive: !1
      }));
    }, [h.selectedIndex]), pe(() => {
      l && l(h.globalSelectedRowData);
    }, [h.globalSelectedRowData, l]);
    const z = X((f, T) => $(f, T), [$]), ae = X((f) => {
      f >= 0 && f < o.length && !o[f].disabled && (x({ type: "SET_SELECTED_INDEX", payload: f }), S((T) => ({
        ...T,
        focusedTabIndex: f,
        focusArea: "tabs"
      })), i?.(f));
    }, [o, i]), A = X((f) => {
      setTimeout(() => {
        const T = te.current[f], U = T?.parentElement;
        if (T && U) {
          const M = T.offsetLeft, W = T.offsetWidth, V = U.clientWidth, N = M - V / 2 + W / 2;
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
    }, []), Q = X((f, T) => {
      const { key: U } = f;
      switch (U) {
        case "ArrowLeft":
          f.preventDefault();
          const M = T > 0 ? T - 1 : o.length - 1;
          ae(M), A(M), te.current[M]?.focus();
          break;
        case "ArrowRight":
          f.preventDefault();
          const W = T < o.length - 1 ? T + 1 : 0;
          ae(W), A(W), te.current[W]?.focus();
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
          f.preventDefault(), ae(0), A(0), te.current[0]?.focus();
          break;
        case "End":
          f.preventDefault();
          const V = o.length - 1;
          ae(V), A(V), te.current[V]?.focus();
          break;
        case "Enter":
        case " ":
          f.preventDefault(), ae(T);
          break;
      }
    }, [o.length, ae, A]), te = me([]), oe = me([]), ie = X((f, T) => {
      const U = h.sortConfig || [], M = U.find((N) => N.key === T);
      let W;
      M ? M.direction === "asc" ? W = U.map(
        (N) => N.key === T ? { ...N, direction: "desc" } : N
      ) : W = U.filter((N) => N.key !== T) : W = [...U, { key: T, direction: "asc" }], x({
        type: "SET_SORT",
        payload: W
      }), o[f].onSort?.(T);
    }, [h.sortConfig, o]), j = X((f) => {
      setTimeout(() => {
        const T = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] th:nth-child(${f + 1})`
        );
        T && T.focus();
      }, 0);
    }, [h.selectedIndex]), ee = X((f) => E(f), [E]), H = X((f, T) => {
      setTimeout(() => {
        const U = document.querySelector(
          `[data-tab-panel="${h.selectedIndex}"] tbody tr:nth-child(${f + 1}) td:nth-child(${T + 1})`
        );
        U && U.focus();
      }, 0);
    }, [h.selectedIndex]);
    pe(() => {
      F.isGridActive && (F.focusArea === "headers" ? setTimeout(() => {
        j(F.focusedHeaderIndex);
      }, 0) : F.focusArea === "cells" && setTimeout(() => {
        H(F.focusedRowIndex, F.focusedColumnIndex);
      }, 0));
    }, [F.focusArea, F.isGridActive, F.focusedHeaderIndex, F.focusedRowIndex, F.focusedColumnIndex, j, H]), pe(() => {
      A(h.selectedIndex);
    }, [h.selectedIndex, A]);
    const O = X((f, T) => {
      const { key: U } = f, M = o[h.selectedIndex], W = M?.columns.length || 0;
      switch (U) {
        case "ArrowLeft":
          f.preventDefault();
          const V = Math.max(0, T - 1);
          S((le) => ({ ...le, focusedHeaderIndex: V })), j(V);
          break;
        case "ArrowRight":
          f.preventDefault();
          const N = Math.min(W - 1, T + 1);
          S((le) => ({ ...le, focusedHeaderIndex: N })), j(N);
          break;
        case "ArrowUp":
          f.preventDefault(), S((le) => ({
            ...le,
            focusArea: "tabs",
            focusedTabIndex: h.selectedIndex
          })), A(h.selectedIndex), te.current[h.selectedIndex]?.focus();
          break;
        case "ArrowDown":
          f.preventDefault(), S((le) => ({
            ...le,
            focusArea: "cells",
            focusedRowIndex: 0,
            focusedColumnIndex: T,
            isGridActive: !0
          }));
          break;
        case "Home":
          f.preventDefault(), S((le) => ({ ...le, focusedHeaderIndex: 0 })), j(0);
          break;
        case "End":
          f.preventDefault();
          const de = W - 1;
          S((le) => ({ ...le, focusedHeaderIndex: de })), j(de);
          break;
        case "Enter":
        case " ":
          f.preventDefault();
          const ne = M?.columns[T]?.key;
          ne && ie(h.selectedIndex, ne);
          break;
      }
    }, [o, h.selectedIndex, ie, S, j, H, te]), Y = X((f, T, U) => {
      const { key: M } = f, W = o[h.selectedIndex], V = W?.data.length || 0, N = W?.columns.length || 0;
      switch (M) {
        case "ArrowUp":
          if (f.preventDefault(), T === 0)
            S((J) => ({
              ...J,
              focusArea: "headers",
              focusedHeaderIndex: U,
              isGridActive: !1
            })), j(U);
          else {
            const J = T - 1;
            S((b) => ({ ...b, focusedRowIndex: J })), H(J, U);
          }
          break;
        case "ArrowDown":
          f.preventDefault();
          const de = Math.min(V - 1, T + 1);
          S((J) => ({ ...J, focusedRowIndex: de })), H(de, U);
          break;
        case "ArrowLeft":
          f.preventDefault();
          const ne = Math.max(0, U - 1);
          S((J) => ({ ...J, focusedColumnIndex: ne })), H(T, ne);
          break;
        case "ArrowRight":
          f.preventDefault();
          const le = Math.min(N - 1, U + 1);
          S((J) => ({ ...J, focusedColumnIndex: le })), H(T, le);
          break;
        case "Home":
          f.preventDefault(), f.ctrlKey ? (S((J) => ({ ...J, focusedRowIndex: 0, focusedColumnIndex: 0 })), H(0, 0)) : (S((J) => ({ ...J, focusedColumnIndex: 0 })), H(T, 0));
          break;
        case "End":
          if (f.preventDefault(), f.ctrlKey) {
            const J = V - 1, b = N - 1;
            S((y) => ({ ...y, focusedRowIndex: J, focusedColumnIndex: b })), H(J, b);
          } else {
            const J = N - 1;
            S((b) => ({ ...b, focusedColumnIndex: J })), H(T, J);
          }
          break;
        case "Enter":
        case " ":
          if (f.preventDefault(), W && W.data[T]) {
            const J = W.data.some((I) => "ews_data" in I) ? w(W.data, h.filters) : W.data, b = h.sortConfig;
            let y = J;
            if (b && b.length > 0 && (y = [...J].sort((I, P) => {
              for (const { key: G, direction: K } of b) {
                let se = I[G], re = P[G];
                const Z = W.columns.find((Ce) => Ce.key === G);
                if (Z?.tableRenderer ? (se = Z.tableRenderer(I), re = Z.tableRenderer(P)) : Z?.render && (se = Z.render(I), re = Z.render(P)), se == null && re == null) continue;
                if (se == null) return K === "asc" ? -1 : 1;
                if (re == null) return K === "asc" ? 1 : -1;
                let ce = 0;
                if (typeof se == "number" && typeof re == "number" ? ce = se - re : ce = String(se).localeCompare(String(re), void 0, { numeric: !0, sensitivity: "base" }), ce !== 0)
                  return K === "asc" ? ce : -ce;
              }
              return 0;
            })), y[T]) {
              const I = y[T], G = h.globalSelectedRowData && z(h.globalSelectedRowData, I) ? null : I;
              x({
                type: "SET_GLOBAL_SELECTED_ROW_DATA",
                payload: G
              });
            }
          }
          break;
      }
    }, [o, h.selectedIndex, h.filters, h.sortConfig, w, z, x, S, j, H]), ue = X((f, T) => w(f, T), [w]);
    return Hr(r, () => ({
      selectTab: (f) => {
        f >= 0 && f < o.length && (x({ type: "SET_SELECTED_INDEX", payload: f }), i?.(f));
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
        x({
          type: "SET_GLOBAL_SELECTED_ROW_DATA",
          payload: null
        });
      },
      applyFilters: (f) => {
        x({ type: "SET_FILTERS", payload: f });
      }
    }), [h.selectedIndex, h.selectedRows, o, i]), B ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--loading ${d}`, "data-testid": R, children: v || /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__loading", children: /* @__PURE__ */ n.jsx("div", { className: "nhsuk-spinner", role: "status", "aria-label": "Loading data", children: /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: "Loading..." }) }) }) }) : C ? /* @__PURE__ */ n.jsx("div", { className: `aria-tabs-datagrid aria-tabs-datagrid--error ${d}`, "data-testid": R, children: D || /* @__PURE__ */ n.jsxs("div", { className: "aria-tabs-datagrid__error", role: "alert", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "nhsuk-error-summary__title", children: "Error loading data" }),
      /* @__PURE__ */ n.jsx("p", { children: C })
    ] }) }) : /* @__PURE__ */ n.jsxs(
      "div",
      {
        className: `aria-tabs-datagrid aria-tabs-datagrid--${p} ${d}`,
        id: k,
        "data-testid": R,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "aria-tabs-datagrid__navigation-help sr-only", id: `${k}-navigation-help`, children: "Keyboard navigation: Use Tab to move between tabs and grid. Arrow keys navigate within tabs and grid cells. Enter activates tabs and sorts columns. Arrow Down from tabs moves to table headers. Arrow Down from headers moves to table cells. Use Arrow keys to navigate between cells." }),
          /* @__PURE__ */ n.jsx(
            ca,
            {
              sortConfig: h.sortConfig || [],
              columns: o.flatMap(
                (f) => f.columns.map((T) => ({ key: T.key, label: T.label }))
              ).filter(
                (f, T, U) => U.findIndex((M) => M.key === f.key) === T
                // Remove duplicates
              ),
              onSortChange: (f) => {
                x({ type: "SET_SORT", payload: f });
              },
              ariaLabel: "Data grid sort configuration"
            }
          ),
          /* @__PURE__ */ n.jsx(
            "div",
            {
              role: "tablist",
              "aria-label": c,
              "aria-describedby": `${u || ""} ${k ? `${k}-navigation-help` : ""}`.trim(),
              "aria-orientation": p,
              className: "aria-tabs-datagrid__tabs",
              children: o.map((f, T) => {
                const U = T === h.selectedIndex, M = f.disabled || m;
                return /* @__PURE__ */ n.jsxs(
                  "button",
                  {
                    role: "tab",
                    id: `tab-${f.id}`,
                    "aria-controls": `panel-${f.id}`,
                    "aria-selected": U,
                    "aria-disabled": M,
                    tabIndex: U ? 0 : -1,
                    ref: (W) => {
                      te.current[T] = W;
                    },
                    onClick: () => ae(T),
                    onKeyDown: (W) => Q(W, T),
                    disabled: M,
                    className: `
				  aria-tabs-datagrid__tab
				  ${U ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${M ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
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
                ref: (M) => {
                  oe.current[T] = M;
                },
                className: `aria-tabs-datagrid__panel ${f.className || ""}`,
                "data-tab-panel": T,
                children: U && (() => {
                  const M = f.data.some((V) => "ews_data" in V) ? ue(f.data, h.filters) : f.data, W = ge(() => {
                    const V = h.sortConfig;
                    return !V || V.length === 0 ? M : [...M].sort((N, de) => {
                      for (const { key: ne, direction: le } of V) {
                        let J = N[ne], b = de[ne];
                        const y = f.columns.find((P) => P.key === ne);
                        if (y?.tableRenderer ? (J = y.tableRenderer(N), b = y.tableRenderer(de)) : y?.render && (J = y.render(N), b = y.render(de)), J == null && b == null) continue;
                        if (J == null) return 1;
                        if (b == null) return -1;
                        let I = 0;
                        if (typeof J == "number" && typeof b == "number" ? I = J - b : typeof J == "boolean" && typeof b == "boolean" ? I = J === b ? 0 : J ? 1 : -1 : I = String(J).localeCompare(String(b), void 0, {
                          numeric: !0,
                          sensitivity: "base"
                        }), I !== 0)
                          return le === "asc" ? I : -I;
                      }
                      return 0;
                    });
                  }, [M, h.sortConfig, f.columns]);
                  return /* @__PURE__ */ n.jsxs(
                    "table",
                    {
                      className: "nhsuk-table aria-tabs-datagrid__grid",
                      role: "grid",
                      "aria-label": f.ariaLabel,
                      "aria-describedby": f.ariaDescription,
                      children: [
                        /* @__PURE__ */ n.jsx("thead", { className: "nhsuk-table__head", role: "rowgroup", children: /* @__PURE__ */ n.jsx("tr", { role: "row", children: f.columns.map((V, N) => {
                          const de = h.sortConfig?.find((J) => J.key === V.key), ne = !!de, le = F.focusArea === "headers" && F.focusedHeaderIndex === N;
                          return /* @__PURE__ */ n.jsx(
                            "th",
                            {
                              className: `sortable-header ${le ? "sortable-header--focused" : ""}`,
                              role: "columnheader",
                              tabIndex: le ? 0 : -1,
                              onClick: () => ie(T, V.key),
                              onKeyDown: (J) => O(J, N),
                              "aria-sort": ne ? de?.direction === "asc" ? "ascending" : "descending" : "none",
                              children: /* @__PURE__ */ n.jsxs("div", { className: "header-content", children: [
                                /* @__PURE__ */ n.jsx("span", { className: "header-label", children: V.label }),
                                /* @__PURE__ */ n.jsxs("div", { className: `sort-indicator-container ${ne ? `sort-indicator--${de?.direction}` : ""}`, children: [
                                  h.sortConfig && h.sortConfig.length > 0 && h.sortConfig.findIndex((J) => J.key === V.key) !== -1 && /* @__PURE__ */ n.jsx(
                                    "span",
                                    {
                                      className: `sort-priority sort-priority--priority-${h.sortConfig.findIndex((J) => J.key === V.key) + 1}`,
                                      "data-priority": h.sortConfig.findIndex((J) => J.key === V.key) + 1,
                                      title: `Sort priority: ${h.sortConfig.findIndex((J) => J.key === V.key) + 1}`,
                                      children: h.sortConfig.findIndex((J) => J.key === V.key) + 1
                                    }
                                  ),
                                  ne && /* @__PURE__ */ n.jsx(
                                    "svg",
                                    {
                                      className: `nhsuk-icon sort-arrow sort-arrow--${de?.direction}`,
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
                            V.key
                          );
                        }) }) }),
                        /* @__PURE__ */ n.jsx("tbody", { className: "nhsuk-table__body", role: "rowgroup", children: W.map((V, N) => {
                          const de = h.globalSelectedRowData && z(h.globalSelectedRowData, V), ne = F.focusArea === "cells" && F.focusedRowIndex === N;
                          return /* @__PURE__ */ n.jsx(
                            "tr",
                            {
                              role: "row",
                              className: `data-row ${de ? "data-row--selected" : ""} ${ne ? "data-row--focused" : ""}`,
                              "aria-selected": de,
                              children: f.columns.map((le, J) => {
                                const b = le.tableRenderer ? le.tableRenderer(V) : le.render ? le.render(V) : V[le.key], y = F.focusArea === "cells" && F.focusedRowIndex === N && F.focusedColumnIndex === J, I = () => typeof b == "boolean" ? /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
                                  ee(b),
                                  /* @__PURE__ */ n.jsx("span", { className: "nhsuk-u-visually-hidden", children: b ? "Yes" : "No" })
                                ] }) : String(b ?? "");
                                return /* @__PURE__ */ n.jsx(
                                  "td",
                                  {
                                    role: "gridcell",
                                    className: `data-cell ${y ? "data-cell--focused" : ""}`,
                                    tabIndex: y ? 0 : -1,
                                    onClick: () => {
                                      const G = h.globalSelectedRowData && z(h.globalSelectedRowData, V) ? null : V;
                                      x({
                                        type: "SET_GLOBAL_SELECTED_ROW_DATA",
                                        payload: G
                                      });
                                    },
                                    onKeyDown: (P) => Y(P, N, J),
                                    children: I()
                                  },
                                  le.key
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
), xt = {
  asc: "↑",
  desc: "↓"
}, al = (e) => [...e].sort((t, r) => t.priority - r.priority);
function fn(e) {
  return e.map((t, r) => ({
    ...t,
    priority: r
  }));
}
function sl(e) {
  return e.length > 0 ? Math.max(...e.map((t) => t.priority)) : -1;
}
function ol(e, t) {
  const r = t.find((a) => a.id === e);
  return r ? r.priority > 0 : !1;
}
function il(e, t) {
  const r = t.find((o) => o.id === e), a = sl(t);
  return r ? r.priority < a : !1;
}
const Xh = ({
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
  const d = ge(() => al(e), [e]), m = X((R) => {
    if (l) return;
    const $ = e.map(
      (w) => w.id === R ? { ...w, direction: w.direction === "asc" ? "desc" : "asc" } : w
    );
    t($);
  }, [e, t, l]), p = X((R) => {
    if (l) return;
    const $ = e.findIndex((E) => E.id === R);
    if ($ <= 0) return;
    const w = [...e];
    [w[$], w[$ - 1]] = [w[$ - 1], w[$]], t(fn(w));
  }, [e, t, l]), k = X((R) => {
    if (l) return;
    const $ = e.findIndex((E) => E.id === R);
    if ($ >= e.length - 1 || $ === -1) return;
    const w = [...e];
    [w[$], w[$ + 1]] = [w[$ + 1], w[$]], t(fn(w));
  }, [e, t, l]), B = X((R) => {
    if (l) return;
    const $ = e.filter((w) => w.id !== R);
    t(fn($));
  }, [e, t, l]), v = X(() => {
    l || t([]);
  }, [t, l]), C = () => {
    if (e.length === 0)
      return a;
    if (o)
      return o;
    const R = d.map(($, w) => {
      const E = $.direction === "asc" ? "ascending" : "descending";
      return `${w + 1}. ${$.label} (${E})`;
    });
    if (R.length === 1)
      return `Sorted by: ${R[0]}`;
    if (R.length === 2)
      return `Sorted by: ${R.join(" and ")}`;
    {
      const $ = R.pop();
      return `Sorted by: ${R.join(", ")}, and ${$}`;
    }
  }, D = ge(() => {
    const R = ["sort-description"];
    return i && R.push("sort-help"), u && R.push(u), R.join(" ");
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
        "aria-describedby": D,
        children: [
          /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__tags-label", children: "Current sorting:" }),
          d.map((R) => /* @__PURE__ */ n.jsx(
            "div",
            {
              className: "sort-status-control__tag-container",
              role: "listitem",
              children: /* @__PURE__ */ n.jsx(
                ze,
                {
                  text: "",
                  color: "blue",
                  className: "sort-status-control__tag",
                  closable: !0,
                  onClose: () => B(R.id),
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
                        children: R.direction === "asc" ? xt.asc : xt.desc
                      }
                    ),
                    /* @__PURE__ */ n.jsxs("div", { className: "sort-status-control__tag-actions", children: [
                      /* @__PURE__ */ n.jsx(
                        "button",
                        {
                          type: "button",
                          className: "sort-status-control__move-button",
                          onClick: () => p(R.id),
                          disabled: l || !ol(R.id, e),
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
                          onClick: () => k(R.id),
                          disabled: l || !il(R.id, e),
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
      ve,
      {
        variant: "secondary",
        onClick: v,
        disabled: l,
        "aria-label": "Reset all sorting",
        className: "sort-status-control__reset-button",
        children: "Clear All Sorts"
      }
    ) }),
    i && /* @__PURE__ */ n.jsx("div", { className: "sort-status-control__help", id: "sort-help", children: /* @__PURE__ */ n.jsxs("small", { children: [
      "Click ",
      xt.asc,
      "/",
      xt.desc,
      " to toggle ascending/descending. Use ▲/▼ to change sort priority. Click × to remove a sort."
    ] }) })
  ] });
}, tr = (e, t) => t.map((r) => ({
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
})), xn = [
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
], ll = (e, t) => !e || !t ? e === t : e.name && e.bed_name && t.name && t.bed_name ? e.name === t.name && e.bed_name === t.bed_name : JSON.stringify(e) === JSON.stringify(t), cl = (e, t) => t ? e.filter((r) => {
  if (t.ewsScoreRange) {
    const [a, o] = t.ewsScoreRange;
    if (r.ews_score < a || r.ews_score > o) return !1;
  }
  return !(t.wards && t.wards.length > 0 && !t.wards.includes(r.ward_name) || t.specialties && t.specialties.length > 0 && !t.specialties.includes(r.speciality) || t.dischargeStatuses && t.dischargeStatuses.length > 0 && !t.dischargeStatuses.includes(r.early_discharge_notification) || t.avpuLevels && t.avpuLevels.length > 0 && !t.avpuLevels.includes(r.ews_data.avpu) || t.medicallyOptimised !== null && t.medicallyOptimised !== void 0 && r.medically_optimised !== t.medicallyOptimised || t.fastTrack !== null && t.fastTrack !== void 0 && r.fast_track !== t.fastTrack);
}) : e, dl = (e) => {
  if (typeof e == "boolean") {
    const r = xn.find((a) => a.value === e);
    return r ? r.icon : null;
  }
  const t = xn.find((r) => r.value === e);
  return t ? t.icon : String(e);
}, ul = (e) => `${e.name}-${e.bed_name}`, hl = () => ({
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
}), Qh = (e) => {
  const t = hl();
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
}, fl = {
  dataComparator: ll,
  filterFunction: cl,
  booleanRenderer: dl,
  getDataId: ul
};
function Fr(e, t, r) {
  const {
    primaryField: a,
    secondaryFields: o = [],
    badges: s = [],
    hiddenFields: i = [],
    getPriority: l,
    getVariant: c,
    fieldRenderers: u = {},
    classPrefix: d = "adaptive-card"
  } = r, m = t.find(($) => $.key === a), p = m?.cardRenderer ? m.cardRenderer(e) : m?.render ? m.render(e) : e[a || "name"] || "Untitled", k = () => o.filter((w) => !i.includes(w) && e[w]).slice(0, 3).map((w) => {
    const E = t.find((S) => S.key === w), g = e[w], L = u[w] ? u[w](g, e) : E?.cardRenderer ? E.cardRenderer(e) : E?.render ? E.render(e) : g;
    return `${E?.label || w}: ${L}`;
  }).join(" • "), B = () => s.length === 0 ? null : s.filter(($) => e[$.fieldKey] !== void 0).map(($) => {
    const w = e[$.fieldKey], E = $.render ? $.render(w, e) : w;
    return `<span class="nhsuk-tag ${ml($, w)}">${E}</span>`;
  }).join(""), v = () => c ? c(e) : l?.(e) === "high" ? "primary" : "default", C = B(), D = k(), R = C ? `${D}${C ? `<div class="adaptive-card__badges">${C}</div>` : ""}` : D;
  return {
    variant: v(),
    heading: String(p),
    descriptionHtml: R,
    className: `adaptive-card ${d}`,
    "aria-label": `Record for ${p}`
  };
}
function ml(e, t) {
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
const pl = {
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
}, da = ({
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
            ze,
            {
              color: bl(ma(d)),
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
            ve,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (k) => {
                k.stopPropagation(), a?.("view-notes", e);
              },
              children: "Notes"
            }
          ),
          /* @__PURE__ */ n.jsx(
            ve,
            {
              variant: "secondary",
              className: "healthcare-card__action",
              onClick: (k) => {
                k.stopPropagation(), a?.("view-vitals", e);
              },
              children: "Vitals"
            }
          ),
          /* @__PURE__ */ n.jsx(
            ve,
            {
              variant: "primary",
              className: "healthcare-card__action healthcare-card__action--primary",
              onClick: (k) => {
                k.stopPropagation(), a?.("view-full", e);
              },
              children: "View Full Record"
            }
          )
        ] })
      ]
    }
  );
}, ua = ({ data: e, onAction: t }) => /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card healthcare-card--appointment healthcare-card--medium healthcare-card--active", role: "article", tabIndex: 0, children: [
  /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__header", children: [
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__time-info", children: [
      /* @__PURE__ */ n.jsx("h3", { className: "healthcare-card__time", children: new Date(e.appointment_time).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) }),
      /* @__PURE__ */ n.jsx("p", { className: "healthcare-card__type", children: e.appointment_type })
    ] }),
    /* @__PURE__ */ n.jsxs("div", { className: "healthcare-card__badges", children: [
      /* @__PURE__ */ n.jsx(
        ze,
        {
          color: xl(e.status || "active"),
          className: "healthcare-card__status",
          children: (e.status || "active").charAt(0).toUpperCase() + (e.status || "active").slice(1)
        }
      ),
      /* @__PURE__ */ n.jsxs(
        ze,
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
      ve,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      ve,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Reschedule"
      }
    )
  ] })
] }), ha = ({
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
        ze,
        {
          color: "blue",
          className: "healthcare-card__route",
          children: e.route
        }
      ),
      e.next_due && /* @__PURE__ */ n.jsxs(
        ze,
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
      ve,
      {
        variant: "secondary",
        size: "small",
        onClick: () => t?.("view", e),
        children: "View Details"
      }
    ),
    /* @__PURE__ */ n.jsx(
      ve,
      {
        variant: "primary",
        size: "small",
        onClick: () => t?.("edit", e),
        children: "Adjust Dose"
      }
    )
  ] })
] }), fa = ({
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
            s !== void 0 && /* @__PURE__ */ n.jsxs("p", { className: `healthcare-card__ews-score healthcare-card__ews-score--${gl(s)}`, children: [
              "EWS: ",
              s
            ] })
          ] }),
          /* @__PURE__ */ n.jsx("div", { className: "healthcare-card__badges", children: m && /* @__PURE__ */ n.jsxs(
            ze,
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
            ve,
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
            ve,
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
function ma(e) {
  const t = typeof e == "string" ? parseInt(e, 10) : e;
  return t >= 7 ? "critical" : t >= 5 ? "high" : t >= 3 ? "medium" : "low";
}
function gl(e) {
  return ma(e);
}
function bl(e) {
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
function xl(e) {
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
const yl = [
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
], pa = (e) => e.ews_score && Number(e.ews_score) >= 7 ? "high" : e.ews_score && Number(e.ews_score) >= 3 ? "medium" : e.priority === "high" || e.status === "urgent" ? "high" : e.priority === "low" ? "low" : "medium", _l = (e) => {
  if (e.status) {
    const t = e.status.toLowerCase();
    if (["active", "pending", "completed", "cancelled", "urgent"].includes(t))
      return t;
  }
  return "active";
}, kl = (e) => pa(e) === "high" || e.status === "urgent" ? "primary" : "default", vl = {
  nhs_number: (e) => e ? `NHS: ${e}` : "",
  ews_score: (e) => {
    const t = Number(e), r = t >= 7 ? "HIGH" : t >= 3 ? "MEDIUM" : "LOW";
    return `EWS: ${e} (${r})`;
  },
  age: (e, t) => t.dob ? `${(/* @__PURE__ */ new Date()).getFullYear() - new Date(t.dob).getFullYear()}y` : e ? `${e}y` : ""
}, wl = {
  primaryField: "name",
  secondaryFields: ["nhs_number", "ward", "condition", "consultant"],
  badges: yl,
  hiddenFields: [],
  getPriority: pa,
  getStatus: _l,
  getVariant: kl,
  fieldRenderers: vl,
  classPrefix: "adaptive-card--healthcare"
}, Sl = {
  patient: (e, t, r) => {
    const a = r.getPriority?.(e) || "medium", o = r.getStatus?.(e) || "active", s = o === "urgent" ? "active" : o;
    return /* @__PURE__ */ n.jsx(
      da,
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
      ua,
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
      ha,
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
      fa,
      {
        data: e,
        columns: t,
        priority: a,
        onSelect: (o) => console.log("Vitals selected:", o),
        onAction: (o, s) => console.log("Vitals action:", o, s)
      }
    );
  }
}, Cl = {
  isNHSNumber: (e) => typeof e == "string" && /^\d{3}\s?\d{3}\s?\d{4}$/.test(e.replace(/\s/g, "")),
  isEWSScore: (e) => typeof e == "number" && e >= 0 && e <= 20,
  isMedicalDate: (e) => typeof e == "string" && !isNaN(Date.parse(e))
}, Br = {
  name: "healthcare",
  defaultCardConfig: wl,
  cssImport: "./HealthcareCardTemplates.scss",
  cardTemplates: Sl,
  fieldTypes: Cl
};
function Rr(e) {
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
function Ir(e) {
  if (!e || e.length === 0) return !1;
  const t = e[0];
  return t.ews_score !== void 0 || t.nhs_number !== void 0 || t.patient_name !== void 0 || t.ward !== void 0 || t.consultant !== void 0;
}
function jl(e, t) {
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
function Nl(e, t) {
  const [r, a] = he("cards");
  return pe(() => {
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
function Tl(e) {
  return !e || typeof e != "object" ? null : e.appointment_type || e.appointment_time || e.clinic ? "appointment" : e.medication_name || e.medication || e.dose || e.frequency ? "medication" : e.ews_score !== void 0 || e.respiratory_rate !== void 0 || e.spo2 !== void 0 || e.temperature !== void 0 || e.systolic_bp !== void 0 || e.heart_rate !== void 0 ? "vitals" : e.name || e.patient_name || e.nhs_number || e.ward || e.bed ? "patient" : null;
}
function Dl(e, t, r, a) {
  const o = a ? { ...a.defaultCardConfig, ...r } : { ...pl, ...r };
  if (a && a.cardTemplates) {
    const s = Tl(e);
    if (s && a.cardTemplates[s]) {
      const i = a.cardTemplates[s](e, t, o);
      if (i)
        return {
          variant: "default",
          children: i
        };
    }
  }
  return o.cardTemplate && o.cardTemplate(e, t, o), Fr(e, t, o);
}
const ef = ({
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
  disabled: k = !1,
  className: B,
  ...v
}) => {
  const C = Nl(e, t), D = l !== void 0, R = l ?? 0, $ = ge(() => {
    if (s.some(
      (y) => y.data && y.data.length > 0 && Ir(y.data)
    )) {
      const y = Rr(r);
      return {
        ...Br.defaultCardConfig,
        ...y
      };
    } else
      return Rr(r);
  }, [r, s]), w = ge(() => s.some(
    (y) => y.data && y.data.length > 0 && Ir(y.data)
  ) ? Br : void 0, [s]), E = ge(() => ({
    selectedIndex: R,
    tabLoadingStates: new Array(s.length).fill(!1),
    tabErrors: new Array(s.length).fill(null),
    sortConfig: [],
    selectedRows: new Array(s.length).fill([]),
    globalSelectedRowData: null,
    filters: void 0
  }), [R, s.length]), [g, L] = Pr(jl, E), F = me([]), S = me([]), _ = me([]), h = me(null), [x, z] = he({
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
  }), ae = X((b) => {
    if (!b.current)
      return { columns: 1, rows: 0 };
    const y = b.current, I = y.querySelectorAll(".aria-tabs-datagrid-adaptive__card-wrapper");
    if (I.length === 0)
      return { columns: 1, rows: 0 };
    const P = y.offsetWidth, K = I[0].offsetWidth, se = Math.floor(P / K) || 1, re = Math.ceil(I.length / se);
    return { columns: se, rows: re };
  }, []), A = X((b, y) => ({
    row: Math.floor(b / y),
    col: b % y
  }), []), Q = X((b, y, I) => b * I + y, []), te = X((b, y, I, P) => {
    const { row: G, col: K } = A(b, P);
    let se = G, re = K;
    switch (y) {
      case "up":
        se = Math.max(0, G - 1);
        break;
      case "down":
        se = Math.min(Math.floor((I - 1) / P), G + 1);
        break;
      case "left":
        re = Math.max(0, K - 1);
        break;
      case "right":
        re = Math.min(P - 1, K + 1);
        break;
    }
    const Z = Q(se, re, P);
    return Math.min(Z, I - 1);
  }, [A, Q]);
  pe(() => {
    x.isCardNavigationActive && x.focusedCardElementIndex >= 0 && x.cardElements.length > 0 && setTimeout(() => {
      const b = x.cardElements[x.focusedCardElementIndex];
      b && (b.element.focus(), b.element.scrollIntoView({ block: "nearest", behavior: "smooth" }));
    }, 0);
  }, [x.isCardNavigationActive, x.focusedCardElementIndex, x.cardElements.length]), pe(() => {
    const b = () => {
      if (C === "cards" && h.current) {
        const { columns: P, rows: G } = ae(h);
        z((K) => ({
          ...K,
          gridColumns: P,
          gridRows: G
        }));
      }
    }, y = setTimeout(b, 200), I = () => {
      setTimeout(b, 100);
    };
    return window.addEventListener("resize", I), () => {
      clearTimeout(y), window.removeEventListener("resize", I);
    };
  }, [C, s, ae]), pe(() => {
    const b = g.tabLoadingStates.length, y = s.length;
    b !== y && L({ type: "ADJUST_ARRAYS", payload: { newLength: y } });
  }, [s.length, g.tabLoadingStates.length]), pe(() => {
    D && l !== g.selectedIndex && L({ type: "SET_SELECTED_INDEX", payload: l });
  }, [D, l, g.selectedIndex]);
  const oe = X((b) => {
    b >= 0 && b < s.length && !s[b].disabled && (L({ type: "SET_SELECTED_INDEX", payload: b }), c?.(b));
  }, [s, c]), ie = X((b) => {
    console.log("Card selected:", b), L({
      type: "SET_GLOBAL_SELECTED_ROW_DATA",
      payload: b
    });
  }, []), j = X((b) => {
    const y = S.current[b];
    y && (y.focus(), y.scrollIntoView({ block: "nearest", behavior: "smooth" }));
  }, []), ee = X((b) => {
    const y = S.current[b];
    if (!y) return [];
    const I = [
      'button:not([disabled]):not([aria-hidden="true"])',
      'a[href]:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      'select:not([disabled]):not([aria-hidden="true"])',
      'textarea:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])',
      '.healthcare-card__detail[tabindex]:not([tabindex="-1"])',
      ".healthcare-card__action:not([disabled])",
      ".tag:not([disabled])"
    ].join(", "), P = y.querySelectorAll(I);
    return Array.from(P).map((G, K) => ({
      id: G.id || `card-${b}-element-${K}`,
      element: G,
      label: G.getAttribute("aria-label") || G.textContent?.trim() || G.getAttribute("title") || `Element ${K + 1}`,
      type: G.tagName.toLowerCase() === "button" ? "button" : G.tagName.toLowerCase() === "a" ? "link" : ["input", "select", "textarea"].includes(G.tagName.toLowerCase()) ? "input" : "generic"
    }));
  }, []), H = me(null), O = X((b) => {
    const y = H.current;
    if (!y) return;
    const I = document.createElement("div");
    I.setAttribute("aria-live", "polite"), I.setAttribute("aria-atomic", "true"), I.className = "sr-only", I.textContent = b, y.appendChild(I), setTimeout(() => {
      y.contains(I) && y.removeChild(I);
    }, 1e3);
  }, []), Y = X((b) => {
    const y = b.filter((P) => P.sortable !== !1), I = [
      { value: "", label: "Sort by..." }
    ];
    return y.forEach((P) => {
      const G = P.label || P.key;
      P.key === "name" ? I.push(
        { value: `${P.key}-asc`, label: `${G} (A-Z)` },
        { value: `${P.key}-desc`, label: `${G} (Z-A)` }
      ) : P.key === "ews_score" || P.key.includes("score") ? I.push(
        { value: `${P.key}-desc`, label: `${G} (High-Low)` },
        { value: `${P.key}-asc`, label: `${G} (Low-High)` }
      ) : P.key === "age" || P.key.includes("date") || P.key.includes("time") ? I.push(
        { value: `${P.key}-desc`, label: `${G} (Oldest-Youngest)` },
        { value: `${P.key}-asc`, label: `${G} (Youngest-Oldest)` }
      ) : I.push(
        { value: `${P.key}-asc`, label: `${G} (A-Z)` },
        { value: `${P.key}-desc`, label: `${G} (Z-A)` }
      );
    }), I;
  }, []), ue = X((b, y) => y ? [...b].sort((I, P) => {
    const G = I[y.key], K = P[y.key];
    if (G == null && K == null) return 0;
    if (G == null) return 1;
    if (K == null) return -1;
    const se = Number(G), re = Number(K);
    if (!isNaN(se) && !isNaN(re))
      return y.direction === "asc" ? se - re : re - se;
    const Z = String(G).toLowerCase(), ce = String(K).toLowerCase(), Ce = Z.localeCompare(ce);
    return y.direction === "asc" ? Ce : -Ce;
  }) : b, []), f = X((b) => {
    if (!b) {
      z((Z) => ({ ...Z, cardSortConfig: null })), O("Card sorting cleared");
      return;
    }
    const [y, I] = b.split("-"), P = { key: y, direction: I };
    z((Z) => ({ ...Z, cardSortConfig: P }));
    const se = s[g.selectedIndex]?.columns.find((Z) => Z.key === y)?.label || y;
    O(`Cards sorted by ${se} in ${I === "asc" ? "ascending" : "descending"} order`);
  }, [s, g.selectedIndex, O]), T = X((b) => {
    const P = s[g.selectedIndex]?.columns.find((K) => K.key === b.key)?.label || b.key, G = b.direction === "asc" ? "ascending" : "descending";
    return `${P} (${G})`;
  }, [s, g.selectedIndex]), U = X((b) => {
    const y = s[g.selectedIndex];
    if (o) {
      const I = g.sortConfig;
      return !I || I.length === 0 ? b : [...b].sort((P, G) => {
        for (const { key: K, direction: se } of I) {
          let re = P[K], Z = G[K];
          const ce = y?.columns.find((at) => at.key === K);
          if (ce?.cardRenderer ? (re = ce.cardRenderer(P), Z = ce.cardRenderer(G)) : ce?.render && (re = ce.render(P), Z = ce.render(G)), re == null && Z == null) continue;
          if (re == null) return se === "asc" ? -1 : 1;
          if (Z == null) return se === "asc" ? 1 : -1;
          const Ce = Number(re), ye = Number(Z);
          if (!isNaN(Ce) && !isNaN(ye)) {
            const at = Ce - ye;
            if (at !== 0) return se === "asc" ? at : -at;
            continue;
          }
          const we = String(re).toLowerCase(), ds = String(Z).toLowerCase(), nn = we.localeCompare(ds);
          if (nn !== 0) return se === "asc" ? nn : -nn;
        }
        return 0;
      });
    } else
      return ue(b, x.cardSortConfig);
  }, [o, g.sortConfig, x.cardSortConfig, ue, s, g.selectedIndex]), M = X((b, y) => {
    const I = ee(b), P = I[y];
    if (P) {
      P.element.scrollIntoView({ block: "nearest", behavior: "smooth" });
      const G = `Focused on ${P.label}, ${P.type} ${y + 1} of ${I.length} within card`;
      O(G);
    }
  }, [ee, O]), W = X((b) => {
    F.current[b]?.focus();
  }, []), V = X(() => {
    const b = _.current[0];
    if (!b) return [];
    const y = [
      'select:not([disabled]):not([aria-hidden="true"])',
      'button:not([disabled]):not([aria-hidden="true"])',
      'input:not([disabled]):not([aria-hidden="true"])',
      '[tabindex]:not([tabindex="-1"]):not([disabled]):not([aria-hidden="true"])'
    ].join(", "), I = b.querySelectorAll(y);
    return Array.from(I);
  }, []), N = X((b) => {
    if (b === 0) {
      const y = _.current[0];
      if (y) {
        y.focus();
        const P = `Sort controls region with ${V().length} interactive elements. Press Enter or Space to navigate between controls.`;
        O(P);
      }
    } else {
      const y = V(), I = b - 1, P = y[I];
      if (P) {
        P.focus();
        const G = P.tagName.toLowerCase() === "select", K = P.tagName.toLowerCase() === "button", se = G ? "dropdown" : K ? "button" : "control", re = G ? ". Use Space key to open dropdown" : "", Z = `${se} ${I + 1} of ${y.length}${re}`;
        O(Z);
      }
    }
  }, [V, O]), de = X((b, y) => {
    const { key: I } = b, P = s[g.selectedIndex], G = P?.data.length || 0;
    if (I === "ArrowLeft" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: -30, behavior: "smooth" });
      return;
    } else if (I === "ArrowRight" && b.shiftKey) {
      b.preventDefault(), b.currentTarget.scrollBy({ left: 30, behavior: "smooth" });
      return;
    }
    if (!x.isCardNavigationActive) {
      switch (I) {
        case "ArrowUp":
          if (b.preventDefault(), y === 0)
            z((Z) => ({ ...Z, focusArea: "tabs" })), W(g.selectedIndex);
          else {
            const Z = te(y, "up", G, x.gridColumns);
            Z !== y && (z((ce) => ({ ...ce, focusedCardIndex: Z })), j(Z), O(`Moved to card ${Z + 1} of ${G}`));
          }
          break;
        case "ArrowDown":
          b.preventDefault();
          const K = te(y, "down", G, x.gridColumns);
          K !== y && (z((Z) => ({ ...Z, focusedCardIndex: K })), j(K), O(`Moved to card ${K + 1} of ${G}`));
          break;
        case "ArrowLeft":
          b.preventDefault();
          const se = te(y, "left", G, x.gridColumns);
          se !== y ? (z((Z) => ({ ...Z, focusedCardIndex: se })), j(se), O(`Moved to card ${se + 1} of ${G}`)) : g.selectedIndex > 0 && (L({ type: "SET_SELECTED_INDEX", payload: g.selectedIndex - 1 }), z((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => W(g.selectedIndex - 1), 0));
          break;
        case "ArrowRight":
          b.preventDefault();
          const re = te(y, "right", G, x.gridColumns);
          re !== y ? (z((Z) => ({ ...Z, focusedCardIndex: re })), j(re), O(`Moved to card ${re + 1} of ${G}`)) : g.selectedIndex < s.length - 1 && (L({ type: "SET_SELECTED_INDEX", payload: g.selectedIndex + 1 }), z((Z) => ({ ...Z, focusArea: "tabs" })), setTimeout(() => W(g.selectedIndex + 1), 0));
          break;
        case "Enter":
          if (P?.data[y]) {
            b.preventDefault(), z((ce) => ({
              ...ce,
              selectedCardIndex: y
            }));
            const Z = ee(y);
            Z.length > 0 ? (z((ce) => ({
              ...ce,
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
          if (P?.data[y]) {
            b.preventDefault(), z((ce) => ({
              ...ce,
              selectedCardIndex: ce.selectedCardIndex === y ? -1 : y
            }));
            const Z = x.selectedCardIndex === y;
            O(`Card ${y + 1} ${Z ? "deselected" : "selected"}.`);
          }
          break;
      }
      return;
    }
    switch (I) {
      case "ArrowUp":
      case "ArrowLeft":
        b.preventDefault();
        const K = Math.max(0, x.focusedCardElementIndex - 1);
        z((ce) => ({ ...ce, focusedCardElementIndex: K })), M(y, K);
        break;
      case "ArrowDown":
      case "ArrowRight":
        b.preventDefault();
        const se = Math.min(x.cardElements.length - 1, x.focusedCardElementIndex + 1);
        z((ce) => ({ ...ce, focusedCardElementIndex: se })), M(y, se);
        break;
      case "Enter":
        b.preventDefault();
        const re = x.cardElements[x.focusedCardElementIndex];
        re && (re.element.click(), O(`Activated ${re.label}`));
        break;
      case " ":
        b.preventDefault();
        const Z = x.cardElements[x.focusedCardElementIndex];
        if (Z) {
          const ce = new MouseEvent("dblclick", { bubbles: !0 });
          Z.element.dispatchEvent(ce), O(`Double-clicked ${Z.label}`);
        }
        break;
      case "Escape":
        b.preventDefault(), z((ce) => ({
          ...ce,
          focusArea: "cards",
          isCardNavigationActive: !1,
          focusedCardElementIndex: 0,
          cardElements: []
        })), setTimeout(() => j(y), 0), O("Exited card navigation, returned to card level");
        break;
      case "Home":
        b.preventDefault(), x.cardElements.length > 0 && (z((ce) => ({ ...ce, focusedCardElementIndex: 0 })), M(y, 0));
        break;
      case "End":
        if (b.preventDefault(), x.cardElements.length > 0) {
          const ce = x.cardElements.length - 1;
          z((Ce) => ({ ...Ce, focusedCardElementIndex: ce })), M(y, ce);
        }
        break;
    }
  }, [x, g.selectedIndex, s, ie, j, W, z, ee, M, O]), ne = X((b) => {
    const y = F.current[b], I = y?.parentElement;
    if (!y || !I) {
      console.log("Tab or container not found for mobile scroll");
      return;
    }
    const P = y.getBoundingClientRect(), G = I.getBoundingClientRect();
    P.left >= G.left && P.right <= G.right || (console.log("Tab not visible, scrolling into view (mobile)"), y.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    }));
  }, []), le = X((b, y) => {
    if (C !== "cards")
      return;
    const { key: I } = b;
    switch (I) {
      case "ArrowLeft":
        b.preventDefault();
        const P = y > 0 ? y - 1 : s.length - 1;
        oe(P), z((re) => ({ ...re, focusedTabIndex: P })), F.current[P]?.focus(), ne(P);
        break;
      case "ArrowRight":
        b.preventDefault();
        const G = y < s.length - 1 ? y + 1 : 0;
        oe(G), z((re) => ({ ...re, focusedTabIndex: G })), F.current[G]?.focus(), ne(G);
        break;
      case "ArrowDown":
        b.preventDefault();
        const K = s[g.selectedIndex];
        K && K.columns && K.columns.length > 0 ? (z((re) => ({
          ...re,
          focusArea: "sort-controls",
          focusedSortControlIndex: 0
        })), N(0)) : (z((re) => ({
          ...re,
          focusArea: "cards",
          focusedCardIndex: 0
        })), j(0));
        break;
      case "Home":
        b.preventDefault(), oe(0), z((re) => ({ ...re, focusedTabIndex: 0 })), F.current[0]?.focus(), ne(0);
        break;
      case "End":
        b.preventDefault();
        const se = s.length - 1;
        oe(se), z((re) => ({ ...re, focusedTabIndex: se })), F.current[se]?.focus(), ne(se);
        break;
      case "Enter":
      case " ":
        b.preventDefault(), oe(y);
        break;
    }
  }, [s.length, oe, C, j, z, ne]), J = X((b, y) => {
    if (C !== "cards")
      return;
    const { key: I } = b, P = s[g.selectedIndex];
    if (y === 0 && !x.isSortControlsActive) {
      switch (I) {
        case "ArrowUp":
          b.preventDefault(), z((K) => ({
            ...K,
            focusArea: "tabs",
            isSortControlsActive: !1
          })), W(g.selectedIndex);
          break;
        case "ArrowDown":
          b.preventDefault(), P?.data && P.data.length > 0 && (z((K) => ({
            ...K,
            focusArea: "cards",
            focusedCardIndex: 0,
            isSortControlsActive: !1
          })), j(0));
          break;
        case "Enter":
        case " ":
          b.preventDefault();
          const G = V();
          if (G.length > 0) {
            z((se) => ({
              ...se,
              isSortControlsActive: !0,
              focusedSortControlIndex: 1
              // Start with the first actual control (skip container)
            })), N(1);
            const K = `Entered sort controls navigation mode. ${G.length} controls available. Use arrow keys to navigate between controls.`;
            O(K);
          }
          break;
        case "Escape":
          b.preventDefault(), z((K) => ({
            ...K,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(g.selectedIndex);
          break;
      }
      return;
    }
    if (x.isSortControlsActive) {
      const K = V().length;
      switch (I) {
        case "ArrowLeft":
          b.preventDefault();
          const se = x.focusedSortControlIndex > 1 ? x.focusedSortControlIndex - 1 : K;
          z((Z) => ({ ...Z, focusedSortControlIndex: se })), N(se);
          break;
        case "ArrowRight":
          b.preventDefault();
          const re = x.focusedSortControlIndex < K ? x.focusedSortControlIndex + 1 : 1;
          z((Z) => ({ ...Z, focusedSortControlIndex: re })), N(re);
          break;
        case "ArrowDown":
          if (b.preventDefault(), x.isSortControlsActive) {
            const Z = x.focusedSortControlIndex < K ? x.focusedSortControlIndex + 1 : 1;
            z((ce) => ({ ...ce, focusedSortControlIndex: Z })), N(Z);
          } else
            P?.data && P.data.length > 0 && (z((Z) => ({
              ...Z,
              focusArea: "cards",
              focusedCardIndex: 0,
              isSortControlsActive: !1
            })), j(0));
          break;
        case "ArrowUp":
          b.preventDefault(), z((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "sort-controls"
          })), N(0);
          break;
        case "Escape":
          b.preventDefault(), z((Z) => ({
            ...Z,
            isSortControlsActive: !1,
            focusArea: "tabs"
          })), W(g.selectedIndex);
          break;
      }
    }
  }, [C, s, g.selectedIndex, x.isSortControlsActive, x.focusedSortControlIndex, N, W, j, z, O]);
  if (C === "cards") {
    const b = s[g.selectedIndex];
    return /* @__PURE__ */ n.jsxs("div", { className: `aria-tabs-datagrid-adaptive aria-tabs-datagrid-adaptive--cards ${B || ""}`, children: [
      /* @__PURE__ */ n.jsx(
        "div",
        {
          role: "tablist",
          "aria-label": u,
          "aria-describedby": `${d || ""} ${p ? `${p}-navigation-help` : ""}`.trim(),
          "aria-orientation": m,
          className: "aria-tabs-datagrid__tabs",
          children: s.map((y, I) => {
            const P = I === g.selectedIndex, G = y.disabled || k;
            return /* @__PURE__ */ n.jsxs(
              "button",
              {
                role: "tab",
                id: `tab-${y.id}`,
                "aria-controls": `panel-${y.id}`,
                "aria-selected": P,
                "aria-disabled": G,
                tabIndex: P ? 0 : -1,
                ref: (K) => {
                  F.current[I] = K;
                },
                onClick: () => oe(I),
                onKeyDown: (K) => le(K, I),
                disabled: G,
                className: `
				  aria-tabs-datagrid__tab
				  ${P ? "aria-tabs-datagrid__tab--selected" : ""}
				  ${G ? "aria-tabs-datagrid__tab--disabled" : ""}
				`.trim(),
                children: [
                  /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-label", children: y.label }),
                  g.tabLoadingStates[I] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-loading", "aria-hidden": "true", children: "⏳" }),
                  g.tabErrors[I] && /* @__PURE__ */ n.jsx("span", { className: "aria-tabs-datagrid__tab-error", "aria-hidden": "true", children: "⚠️" })
                ]
              },
              y.id
            );
          })
        }
      ),
      b && b.columns && /* @__PURE__ */ n.jsx(n.Fragment, { children: o ? (
        /* Advanced sorting with SortStatusControl */
        /* @__PURE__ */ n.jsx(
          ca,
          {
            sortConfig: g.sortConfig || [],
            columns: b.columns.map((y) => ({ key: y.key, label: y.label })),
            onSortChange: (y) => {
              L({ type: "SET_SORT", payload: y });
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
            tabIndex: x.focusArea === "sort-controls" ? 0 : -1,
            ref: (y) => {
              _.current[0] = y;
            },
            onKeyDown: (y) => J(y, 0),
            children: /* @__PURE__ */ n.jsxs("div", { className: "sort-controls-row", children: [
              /* @__PURE__ */ n.jsxs("div", { className: "sort-select-container", children: [
                /* @__PURE__ */ n.jsx("label", { htmlFor: `card-sort-${b.id}`, className: "sort-label", children: "Sort cards by" }),
                /* @__PURE__ */ n.jsx(
                  Wr,
                  {
                    id: `card-sort-${b.id}`,
                    name: `card-sort-${b.id}`,
                    value: x.cardSortConfig ? `${x.cardSortConfig.key}-${x.cardSortConfig.direction}` : "",
                    onChange: (y) => f(y.target.value),
                    className: "sort-select",
                    children: Y(b.columns).map((y) => /* @__PURE__ */ n.jsx("option", { value: y.value, children: y.label }, y.value))
                  }
                )
              ] }),
              x.cardSortConfig && /* @__PURE__ */ n.jsxs("div", { className: "sort-indicator", role: "status", "aria-live": "polite", children: [
                /* @__PURE__ */ n.jsxs("span", { className: "sort-indicator-text", children: [
                  "Sorted by ",
                  T(x.cardSortConfig)
                ] }),
                /* @__PURE__ */ n.jsx(
                  ve,
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
          "aria-label": `${b?.label || "Data"} cards in ${x.gridRows} rows and ${x.gridColumns} columns`,
          "aria-rowcount": x.gridRows,
          "aria-colcount": x.gridColumns,
          id: `panel-${b?.id}`,
          "aria-labelledby": `tab-${b?.id}`,
          children: U(b?.data || []).map((y, I) => {
            const P = x.selectedCardIndex === I, G = x.focusedCardIndex === I && x.focusArea === "cards", K = x.focusedCardIndex === I && x.focusArea === "card" && x.isCardNavigationActive, se = I === 0 && x.focusArea !== "cards", re = G || se, Z = A(I, x.gridColumns);
            if (r.cardTemplate) {
              const ye = r.cardTemplate(y, b.columns);
              return /* @__PURE__ */ n.jsx(
                "div",
                {
                  ref: (we) => {
                    S.current[I] = we;
                  },
                  className: `
					aria-tabs-datagrid-adaptive__card-wrapper
					${P ? "aria-tabs-datagrid-adaptive__card-wrapper--selected" : ""}
					${G ? "aria-tabs-datagrid-adaptive__card-wrapper--focused" : ""}
					${K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				  `.trim(),
                  role: "gridcell",
                  "aria-rowindex": Z.row + 1,
                  "aria-colindex": Z.col + 1,
                  "aria-selected": P,
                  "aria-expanded": K,
                  "aria-description": K ? `Card navigation active. ${x.cardElements.length} interactive elements available.` : void 0,
                  tabIndex: re ? 0 : -1,
                  onClick: () => {
                    z((we) => ({
                      ...we,
                      selectedCardIndex: we.selectedCardIndex === I ? -1 : I
                    })), ie(y);
                  },
                  onKeyDown: (we) => de(we, I),
                  onFocus: () => {
                    z((we) => we.focusedCardIndex !== I || we.focusArea !== "cards" ? {
                      ...we,
                      focusedCardIndex: I,
                      focusArea: "cards"
                    } : we);
                  },
                  children: ye
                },
                `card-${I}`
              );
            }
            const ce = Dl(y, b.columns, $, w), Ce = `
			  ${ce.className || ""}
			  ${P ? "aria-tabs-datagrid-adaptive__card--selected" : ""}
			  ${G ? "aria-tabs-datagrid-adaptive__card--focused" : ""}
			  ${K ? "aria-tabs-datagrid-adaptive__card--card-navigation" : ""}
			`.trim();
            return /* @__PURE__ */ n.jsx(
              "div",
              {
                className: `
				  aria-tabs-datagrid-adaptive__card-wrapper
				  ${K ? "aria-tabs-datagrid-adaptive__card-wrapper--card-navigation" : ""}
				`.trim(),
                role: "gridcell",
                "aria-rowindex": Z.row + 1,
                "aria-colindex": Z.col + 1,
                children: /* @__PURE__ */ n.jsx(
                  la,
                  {
                    ...ce,
                    ref: (ye) => {
                      S.current[I] = ye;
                    },
                    className: Ce,
                    "aria-selected": P,
                    "aria-expanded": K,
                    "aria-label": `${ce["aria-label"] || ce.heading}. ${K ? `Card navigation active with ${x.cardElements.length} interactive elements. Use arrow keys to navigate, Enter to activate, Escape to exit.` : "Press Enter to navigate within card elements."}`,
                    tabIndex: re ? 0 : -1,
                    onClick: () => {
                      z((ye) => ({
                        ...ye,
                        selectedCardIndex: ye.selectedCardIndex === I ? -1 : I
                      })), ie(y);
                    },
                    onKeyDown: (ye) => de(ye, I),
                    onFocus: () => {
                      x.isCardNavigationActive || z((ye) => ye.focusedCardIndex !== I || ye.focusArea !== "cards" ? {
                        ...ye,
                        focusedCardIndex: I,
                        focusArea: "cards",
                        // Reset card navigation state when switching cards
                        focusedCardElementIndex: 0,
                        cardElements: []
                      } : ye);
                    }
                  }
                )
              },
              `card-${I}`
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
    bn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: k,
      selectedIndex: l,
      onTabChange: c,
      className: "aria-tabs-datagrid-adaptive__table--hybrid",
      ...v
    }
  ) }) : /* @__PURE__ */ n.jsx(
    bn,
    {
      tabPanels: s,
      dataConfig: i,
      ariaLabel: u,
      ariaDescription: d,
      orientation: m,
      id: p,
      disabled: k,
      selectedIndex: l,
      onTabChange: c,
      ...v
    }
  );
}, ga = (e) => {
  const t = xn.find((r) => r.value === e);
  return t ? t.icon : null;
}, Fl = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => {
    if (t.priceRange) {
      const [a, o] = t.priceRange, s = r.discountedPrice || r.price;
      if (s < a || s > o) return !1;
    }
    return !(t.categories && t.categories.length > 0 && !t.categories.includes(r.category) || t.inStock !== void 0 && r.inStock !== t.inStock || t.minRating !== void 0 && r.rating < t.minRating || t.tags && t.tags.length > 0 && !t.tags.some((a) => r.tags.includes(a)));
  }) : e,
  booleanRenderer: (e) => ga(e),
  getDataId: (e) => `ecommerce-${e.id}`
}, Bl = (e) => tr(e, [
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
]), Rl = {
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
  booleanRenderer: (e) => ga(e),
  getDataId: (e) => `financial-${e.id}`
}, Il = (e) => tr(e, [
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
]), $l = {
  ecommerce: {
    name: "E-commerce",
    description: "Product catalogs with pricing, inventory, and ratings",
    dataConfig: Fl,
    createTabs: Bl
  },
  financial: {
    name: "Financial",
    description: "Transaction data with amounts, categories, and statuses",
    dataConfig: Rl,
    createTabs: Il
  }
}, $r = (e, t) => {
  const r = $l[e];
  return {
    dataConfig: r.dataConfig,
    tabPanels: r.createTabs(t)
  };
}, ba = [
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
], Ml = [
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
], Ll = [
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
], El = [
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
], Mr = [
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
], Lr = [
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
], Er = [
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
], Al = {
  dataComparator: (e, t) => e.id === t.id,
  filterFunction: (e, t) => t ? e.filter((r) => !(t.status && !t.status.includes(r.status) || t.minValue && r.value < t.minValue || t.hotLeadsOnly && !r.isHotLead)) : e,
  booleanRenderer: (e) => /* @__PURE__ */ n.jsx("span", { style: {
    color: e ? "#dc2626" : "#6b7280",
    fontWeight: e ? "bold" : "normal"
  }, children: e ? "🔥 Hot Lead" : "📋 Standard" }),
  getDataId: (e) => `business-${e.id}`
}, Hl = () => [
  {
    id: "patients",
    label: "Patients",
    data: ba,
    columns: [
      { key: "name", label: "Patient Name" },
      { key: "age", label: "Age" },
      { key: "ward_name", label: "Ward" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Records",
    ariaDescription: "Healthcare patient management with EWS monitoring",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      da,
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
    data: Ml,
    columns: [
      { key: "appointment_time", label: "Time" },
      { key: "patient_name", label: "Patient" },
      { key: "appointment_type", label: "Type" },
      { key: "consultant", label: "Consultant" }
    ],
    ariaLabel: "Patient Appointments",
    ariaDescription: "Scheduled appointments and consultations",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ua,
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
    data: Ll,
    columns: [
      { key: "medication", label: "Medication" },
      { key: "dose", label: "Dose" },
      { key: "frequency", label: "Frequency" },
      { key: "next_due", label: "Next Due" }
    ],
    ariaLabel: "Patient Medications",
    ariaDescription: "Medication administration and scheduling",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      ha,
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
    data: El,
    columns: [
      { key: "patient_name", label: "Patient" },
      { key: "recorded_time", label: "Time" },
      { key: "temperature", label: "Temperature" },
      { key: "ews_score", label: "EWS Score" }
    ],
    ariaLabel: "Patient Vital Signs",
    ariaDescription: "Patient vital signs monitoring and EWS scores",
    cardTemplate: (e, t) => /* @__PURE__ */ n.jsx(
      fa,
      {
        data: e,
        columns: t,
        onSelect: (r) => console.log("Selected vitals:", r),
        onAction: (r, a) => console.log("Vitals action:", r, a),
        priority: e.ews_score >= 7 ? "high" : e.ews_score >= 3 ? "medium" : "low"
      }
    )
  }
], Pl = () => {
  const [e, t] = he("healthcare"), r = ge(() => ({
    healthcare: {
      title: "Healthcare Workflow Management",
      description: "Comprehensive healthcare workflow with patient cards, appointments, medications, and vitals",
      dataConfig: fl,
      tabPanels: Hl(),
      data: ba
    },
    ecommerce: {
      title: "E-commerce Product Catalog",
      description: "Product management with pricing and inventory",
      ...$r("ecommerce", Mr),
      data: Mr
    },
    financial: {
      title: "Financial Transaction Dashboard",
      description: "Banking and financial data management",
      ...$r("financial", Lr),
      data: Lr
    },
    business: {
      title: "Sales Lead Management",
      description: "Custom CRM configuration with business logic",
      dataConfig: Al,
      tabPanels: tr(Er, [
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
      data: Er
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
        ve,
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
      bn,
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
}, tf = Pl, xa = (e) => /* @__PURE__ */ n.jsx(Or, { ...e }), nf = ({
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
  logo: k,
  className: B,
  ...v
}) => {
  const C = {
    service: c,
    navigation: u,
    search: d,
    account: m,
    organisation: p,
    logo: k,
    ...i
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(ia, { ...s }),
    /* @__PURE__ */ n.jsx(qr, { ...C }),
    /* @__PURE__ */ n.jsx(xa, { className: B, ...v, children: /* @__PURE__ */ n.jsx(Ur, { size: o, children: /* @__PURE__ */ n.jsx(_t, { children: /* @__PURE__ */ n.jsxs(Gn, { width: a, children: [
      t && /* @__PURE__ */ n.jsx(We, { size: "l", ...r, children: t }),
      e
    ] }) }) }) }),
    /* @__PURE__ */ n.jsx(Kr, { ...l })
  ] });
}, rf = ({
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
  ...k
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
    /* @__PURE__ */ n.jsx(ia, { ...s }),
    /* @__PURE__ */ n.jsx(qr, { ...B }),
    /* @__PURE__ */ n.jsxs(xa, { className: p, ...k, children: [
      c && /* @__PURE__ */ n.jsx(vs, { ...c }),
      /* @__PURE__ */ n.jsx(Ur, { size: o, children: /* @__PURE__ */ n.jsx(_t, { children: /* @__PURE__ */ n.jsxs(Gn, { width: a, children: [
        t && /* @__PURE__ */ n.jsx(We, { size: "l", ...r, children: t }),
        e
      ] }) }) })
    ] }),
    /* @__PURE__ */ n.jsx(Kr, { ...l })
  ] });
}, zl = "150ms", Wl = "300ms", Ol = "500ms", Ul = "cubic-bezier(0.4, 0, 1, 1)", Gl = "cubic-bezier(0, 0, 0.2, 1)", Vl = "cubic-bezier(0.4, 0, 0.2, 1)", Yl = "cubic-bezier(0.68, -0.55, 0.265, 1.55)", ql = "background-color 300ms cubic-bezier(0, 0, 0.2, 1)", Kl = "box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Zl = "border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)", Jl = "border-color 300ms cubic-bezier(0, 0, 0.2, 1)", Xl = "1px", Ql = "2px", ec = "4px", tc = "4px", nc = "4px", rc = "2px", ac = "1px", sc = "0px", oc = "4px", ic = "8px", lc = "12px", ya = "#d8dde0", _a = "#4c6272", ka = "#d8dde0", va = "#aeb7bd", wa = "#d5281b", Sa = "#005eb8", Ca = "#ffffff", ja = "#212b32", Na = "#007f3b", Ta = "#330072", Da = "#7c2855", Fa = "#d5281b", Ba = "#ffeb3b", Ra = "#fff9c4", Ia = "#ffb81c", $a = "#ed8b00", Ma = "#00a499", La = "#ae2573", Ea = "#4c6272", Aa = "#768692", Ha = "#aeb7bd", Pa = "#d8dde0", za = "#f0f4f5", cc = "#212b32", dc = "#4c6272", uc = "#ffffff", hc = "#212b32", fc = "#005eb8", mc = "#7c2855", pc = "#003087", gc = "#330072", bc = "#ffeb3b", xc = "#212b32", yc = "#d8dde0", _c = "#ffffff33", kc = "#d5281b", vc = "#4c6272", wc = "#ffffff", Sc = "#007f3b", Cc = "#ffffff", jc = "#006530", Nc = "#004021", Tc = "#004021", Dc = "#00000000", Fc = "#ffffff", Bc = "#005eb8", Rc = "#005eb8", Ic = "#d9e5f2", $c = "#c7daf0", Mc = "#005eb8", Lc = "#ffffff", Ec = "#212b32", Ac = "#d9dde0", Hc = "#b3bcc2", Pc = "#b3bcc2", zc = "#d5281b", Wc = "#aa2016", Oc = "#6a140e", Uc = "#6a140e", Gc = "#005eb8", Vc = "#004b93", Yc = "#002f5c", qc = "#002f5c", Kc = "8px", Zc = "16px", Jc = "12px", Xc = "16px", Qc = "4px", ed = "40px", td = "4px", nd = "40px", rd = "12px", ad = "16px", sd = "32px", od = "16px", id = "20px", ld = "28px", cd = "9px", dd = "2px", ud = "16px", hd = "24px", fd = "8px", md = "24px", pd = "16px", gd = "4px", bd = "4px", xd = "4px", yd = "8px", _d = "4px", kd = "16px", vd = "#007f3b", wd = "#006530", Sd = "#004021", Cd = "#d8dde0", jd = "#ffffff", Nd = "#768692", Td = "#00000000", Dd = "#ffeb3b", Fd = "#00000000", Bd = "#ffffff", Rd = "#d9e5f2", Id = "#c7daf0", $d = "#005eb8", Md = "#005eb8", Wa = "8px", Oa = "16px", Ua = "12px", Ga = "16px", Ld = "2px", Ed = "4px", Ad = "4px", Hd = "600", Pd = "#ffffff", zd = "#d8dde0", Wd = "#aeb7bd", Od = "#f0f4f5", Ud = "#212b32", Gd = "#212b32", Vd = "#005eb8", Va = "16px", Ya = "32px", qa = "16px", Yd = "1px", qd = "4px", Kd = "none", Zd = "0 2px 4px rgba(0, 0, 0, 0.1)", Jd = "#ffffff", Xd = "#ffffff", Qd = "#d8dde0", eu = "#ffffff", tu = "#4c6272", nu = "#ffeb3b", ru = "#d5281b", au = "#aeb7bd", su = "#212b32", ou = "#4c6272", iu = "#768692", lu = "#212b32", cu = "#ffffff", du = "600", uu = "#d5281b", hu = "600", fu = "#4c6272", Ka = "4px", Za = "40px", Ja = "40px", Xa = "12px", mu = "2px", pu = "4px", gu = "0px", bu = "16px", xu = "18px", yu = "24px", _u = "32px", ku = "34px", vu = "32px", wu = "40px", Su = "48px", Cu = "5.4ex", ju = "7.2ex", Nu = "9ex", Tu = "10.8ex", Du = "20ex", Fu = "38ex", Bu = "56ex", Ru = "44px", Iu = "40px", $u = "1020px", Mu = "100%", Lu = "50%", Eu = "33.333%", Au = "25%", Hu = "20%", Pu = "320px", zu = "641px", Wu = "1025px", Ou = "1280px", Uu = "960px", Gu = "32px", Vu = "16px", Yu = "#d5281b", qu = "#d5281b", Ku = "#ffffff", Zu = "#007f3b", Ju = "#007f3b", Xu = "#ffffff", Qu = "#ffeb3b", eh = "#ffeb3b", th = "#212b32", nh = "#005eb8", rh = "#005eb8", ah = "#ffffff", sh = "#d8dde0", oh = "#aeb7bd", ih = "#768692", lh = "0 4px 0 #004021", ch = "0 4px 0 #005eb8", dh = "0 4px 0 #6a140e", uh = "0 4px 0 #ffeb3b", hh = "none", fh = "0 2px 4px rgba(0, 0, 0, 0.1)", mh = "4px", ph = "0px", gh = "solid", bh = "0 0 0 3px #ffeb3b", xh = "0 0 0 3px #ffeb3b", yh = "none", _h = "0 1px 3px rgba(0, 0, 0, 0.12)", kh = "0 2px 6px rgba(0, 0, 0, 0.16)", vh = "0 4px 12px rgba(0, 0, 0, 0.20)", Qa = "0", es = "4px", ts = "8px", ns = "16px", rs = "24px", as = "32px", ss = "40px", os = "48px", is = "56px", ls = "64px", yn = "0", _n = "0", kn = "4px", vn = "4px", wn = "8px", Sn = "8px", Cn = "8px", jn = "16px", Nn = "16px", Tn = "24px", Dn = "24px", Fn = "32px", Bn = "32px", Rn = "40px", In = "40px", $n = "48px", Mn = "48px", Ln = "56px", En = "56px", An = "64px", Tt = "Frutiger W01", Dt = "Arial, Helvetica, sans-serif", Ft = "sans-serif", Bt = "400", Rt = "600", It = "400", $t = "12px", Mt = "14px", Lt = "12pt", Et = "14px", At = "16px", Ht = "12pt", Pt = "16px", zt = "19px", Wt = "13pt", Ot = "19px", Ut = "22px", Gt = "15pt", Vt = "22px", Yt = "26px", qt = "17pt", Kt = "27px", Zt = "36px", Jt = "20pt", Xt = "33px", Qt = "48px", en = "24pt", Hn = "16px", Pn = "24px", De = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
  lineHeight: "1.09",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Fe = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
  lineHeight: "1.11",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Be = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.15",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Re = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
  lineHeight: "1.18",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ie = {
  fontFamily: "Frutiger W01",
  fontWeight: "600",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.26",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, $e = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Me = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, Le = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
  lineHeight: "1.5",
  marginTop: "0",
  marginBottom: { mobile: "16px", tablet: "24px" }
}, Ee = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
  lineHeight: "1.38",
  marginTop: "0",
  marginBottom: { mobile: "40px", tablet: "48px" }
}, Ae = {
  fontFamily: "Frutiger W01",
  fontWeight: "400",
  fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
  lineHeight: "1.47",
  marginTop: "0",
  marginBottom: { mobile: "24px", tablet: "32px" }
}, wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AnimationDurationFast: zl,
  AnimationDurationNormal: Wl,
  AnimationDurationSlow: Ol,
  AnimationEasingBounce: Yl,
  AnimationEasingEaseIn: Ul,
  AnimationEasingEaseInOut: Vl,
  AnimationEasingEaseOut: Gl,
  BorderColorCard: ka,
  BorderColorCardHover: va,
  BorderColorDefault: ya,
  BorderColorError: wa,
  BorderColorForm: _a,
  BorderRadiusLarge: lc,
  BorderRadiusMedium: ic,
  BorderRadiusNone: sc,
  BorderRadiusSmall: oc,
  BorderWidthCardBottom: tc,
  BorderWidthDefault: Xl,
  BorderWidthFormElement: Ql,
  BorderWidthFormElementError: ec,
  BorderWidthPanel: nc,
  BorderWidthTableCell: ac,
  BorderWidthTableHeader: rc,
  BreakpointDesktop: Wu,
  BreakpointLargeDesktop: Ou,
  BreakpointMobile: Pu,
  BreakpointTablet: zu,
  ButtonBorderRadius: Ed,
  ButtonBorderWidth: Ld,
  ButtonPrimaryBackgroundActive: Sd,
  ButtonPrimaryBackgroundDefault: vd,
  ButtonPrimaryBackgroundDisabled: Cd,
  ButtonPrimaryBackgroundHover: wd,
  ButtonPrimaryBorderDefault: Td,
  ButtonPrimaryBorderFocus: Dd,
  ButtonPrimaryTextDefault: jd,
  ButtonPrimaryTextDisabled: Nd,
  ButtonSecondaryBackgroundActive: Id,
  ButtonSecondaryBackgroundDefault: Fd,
  ButtonSecondaryBackgroundHover: Rd,
  ButtonSecondaryBackgroundSolid: Bd,
  ButtonSecondaryBorderDefault: Md,
  ButtonSecondaryTextDefault: $d,
  ButtonShadowSize: Ad,
  ButtonSpacingPaddingHorizontalDesktop: Ga,
  ButtonSpacingPaddingHorizontalMobile: Oa,
  ButtonSpacingPaddingVerticalDesktop: Ua,
  ButtonSpacingPaddingVerticalMobile: Wa,
  ButtonTypographyWeight: Hd,
  CardBackgroundDefault: Pd,
  CardBorderBottom: Od,
  CardBorderDefault: zd,
  CardBorderHover: Wd,
  CardBorderWidthBottom: qd,
  CardBorderWidthDefault: Yd,
  CardShadowDefault: Kd,
  CardShadowHover: Zd,
  CardSpacingHeadingMargin: qa,
  CardSpacingPaddingDesktop: Ya,
  CardSpacingPaddingMobile: Va,
  CardTextDescription: Gd,
  CardTextHeading: Ud,
  CardTextLink: Vd,
  ColorBorderDefault: yc,
  ColorBorderSecondary: _c,
  ColorButtonLoginActive: Yc,
  ColorButtonLoginBackground: Gc,
  ColorButtonLoginHover: Vc,
  ColorButtonLoginShadow: qc,
  ColorButtonPrimaryActive: Nc,
  ColorButtonPrimaryBackground: Sc,
  ColorButtonPrimaryHover: jc,
  ColorButtonPrimaryShadow: Tc,
  ColorButtonPrimaryText: Cc,
  ColorButtonReverseActive: Hc,
  ColorButtonReverseBackground: Lc,
  ColorButtonReverseHover: Ac,
  ColorButtonReverseShadow: Pc,
  ColorButtonReverseText: Ec,
  ColorButtonSecondaryActive: $c,
  ColorButtonSecondaryBackground: Dc,
  ColorButtonSecondaryBackgroundSolid: Fc,
  ColorButtonSecondaryBorder: Bc,
  ColorButtonSecondaryHover: Ic,
  ColorButtonSecondaryShadow: Mc,
  ColorButtonSecondaryText: Rc,
  ColorButtonWarningActive: Oc,
  ColorButtonWarningBackground: zc,
  ColorButtonWarningHover: Wc,
  ColorButtonWarningShadow: Uc,
  ColorError: kc,
  ColorFocusBackground: bc,
  ColorFocusText: xc,
  ColorFormBackground: wc,
  ColorFormBorder: vc,
  ColorGrey1: Ea,
  ColorGrey2: Aa,
  ColorGrey3: Ha,
  ColorGrey4: Pa,
  ColorGrey5: za,
  ColorLinkActive: pc,
  ColorLinkDefault: fc,
  ColorLinkHover: mc,
  ColorLinkVisited: gc,
  ColorPrimaryBlack: ja,
  ColorPrimaryBlue: Sa,
  ColorPrimaryDarkPink: Da,
  ColorPrimaryGreen: Na,
  ColorPrimaryPurple: Ta,
  ColorPrimaryRed: Fa,
  ColorPrimaryWhite: Ca,
  ColorPrimaryYellow: Ba,
  ColorSecondaryAquaGreen: Ma,
  ColorSecondaryOrange: $a,
  ColorSecondaryPaleYellow: Ra,
  ColorSecondaryPink: La,
  ColorSecondaryWarmYellow: Ia,
  ColorTextPrimary: cc,
  ColorTextPrint: hc,
  ColorTextReverse: uc,
  ColorTextSecondary: dc,
  ComponentBlur: bd,
  ComponentBreadcrumbChevronMarginLeft: cd,
  ComponentBreadcrumbChevronMarginRight: dd,
  ComponentBreadcrumbPaddingTopDesktop: hd,
  ComponentBreadcrumbPaddingTopMobile: ud,
  ComponentButtonPaddingDesktopHorizontal: Xc,
  ComponentButtonPaddingDesktopVertical: Jc,
  ComponentButtonPaddingMobileHorizontal: Zc,
  ComponentButtonPaddingMobileVertical: Kc,
  ComponentButtonShadowSize: Qc,
  ComponentCardHeadingMargin: od,
  ComponentCardPaddingDesktop: sd,
  ComponentCardPaddingMobile: ad,
  ComponentDetails: yd,
  ComponentExpander: _d,
  ComponentFormCheckboxLabelPadding: rd,
  ComponentFormCheckboxSize: nd,
  ComponentFormInputMinHeight: ed,
  ComponentFormInputPadding: td,
  ComponentLink: xd,
  ComponentPagination: kd,
  ComponentPanelPaddingDesktop: ld,
  ComponentPanelPaddingMobile: id,
  ComponentSpread: gd,
  ComponentSummaryListCellPaddingHorizontal: md,
  ComponentSummaryListCellPaddingVertical: fd,
  ComponentSummaryListRowMargin: pd,
  ElevationHigh: vh,
  ElevationLow: _h,
  ElevationMedium: kh,
  ElevationNone: yh,
  FocusOutlineOffset: ph,
  FocusOutlineStyle: gh,
  FocusOutlineWidth: mh,
  FocusShadowButton: xh,
  FocusShadowInput: bh,
  FontFamilyBase: Tt,
  FontFamilyFallback: Dt,
  FontFamilyPrint: Ft,
  FontLineHeightBase: Pn,
  FontSize14Mobile: $t,
  FontSize14Print: Lt,
  FontSize14Tablet: Mt,
  FontSize16Mobile: Et,
  FontSize16Print: Ht,
  FontSize16Tablet: At,
  FontSize19Mobile: Pt,
  FontSize19Print: Wt,
  FontSize19Tablet: zt,
  FontSize22Mobile: Ot,
  FontSize22Print: Gt,
  FontSize22Tablet: Ut,
  FontSize26Mobile: Vt,
  FontSize26Print: qt,
  FontSize26Tablet: Yt,
  FontSize36Mobile: Kt,
  FontSize36Print: Jt,
  FontSize36Tablet: Zt,
  FontSize48Mobile: Xt,
  FontSize48Print: en,
  FontSize48Tablet: Qt,
  FontSizeBase: Hn,
  FontWeightBold: Rt,
  FontWeightLight: It,
  FontWeightNormal: Bt,
  FormBorderRadius: gu,
  FormBorderWidthDefault: mu,
  FormBorderWidthError: pu,
  FormErrorTextDefault: uu,
  FormErrorTypographyWeight: hu,
  FormHintTextDefault: fu,
  FormInputBackgroundDefault: Jd,
  FormInputBackgroundDisabled: Qd,
  FormInputBackgroundError: eu,
  FormInputBackgroundFocus: Xd,
  FormInputBorderDefault: tu,
  FormInputBorderDisabled: au,
  FormInputBorderError: ru,
  FormInputBorderFocus: nu,
  FormInputTextDefault: su,
  FormInputTextDisabled: iu,
  FormInputTextPlaceholder: ou,
  FormLabelTextDefault: lu,
  FormLabelTextRequired: cu,
  FormLabelTypographyWeight: du,
  FormSpacingCheckboxLabelPadding: Xa,
  FormSpacingCheckboxSize: Ja,
  FormSpacingInputMinHeight: Za,
  FormSpacingInputPadding: Ka,
  GridGutter: Gu,
  GridGutterHalf: Vu,
  GridPageWidth: Uu,
  HeadingsNhsukHeadingL: Fe,
  HeadingsNhsukHeadingM: Be,
  HeadingsNhsukHeadingS: Re,
  HeadingsNhsukHeadingXl: De,
  HeadingsNhsukHeadingXs: Ie,
  LayoutColumnActions: Hu,
  LayoutColumnFull: Mu,
  LayoutColumnHalf: Lu,
  LayoutColumnQuarter: Au,
  LayoutColumnThird: Eu,
  LayoutContainerMaxWidth: $u,
  ParagraphsBody: $e,
  ParagraphsBodyLarge: Me,
  ParagraphsBodySmall: Le,
  ParagraphsLedeText: Ee,
  ParagraphsLedeTextSmall: Ae,
  ShadowButtonDefault: lh,
  ShadowButtonFocus: uh,
  ShadowButtonSecondary: ch,
  ShadowButtonWarning: dh,
  ShadowCardDefault: hh,
  ShadowCardHover: fh,
  SizeButtonMinHeightDesktop: Iu,
  SizeButtonMinHeightMobile: Ru,
  SizeFormControlLarge: Su,
  SizeFormControlMedium: wu,
  SizeFormControlSmall: vu,
  SizeFormInputWidth2xl: Fu,
  SizeFormInputWidth3xl: Bu,
  SizeFormInputWidthLg: Tu,
  SizeFormInputWidthMd: Nu,
  SizeFormInputWidthSm: ju,
  SizeFormInputWidthXl: Du,
  SizeFormInputWidthXs: Cu,
  SizeIconExtraLarge: _u,
  SizeIconLarge: yu,
  SizeIconMedium: xu,
  SizeIconNhsDefault: ku,
  SizeIconSmall: bu,
  Spacing0: Qa,
  Spacing1: es,
  Spacing2: ts,
  Spacing3: ns,
  Spacing4: rs,
  Spacing5: as,
  Spacing6: ss,
  Spacing7: os,
  Spacing8: is,
  Spacing9: ls,
  SpacingResponsive0Mobile: yn,
  SpacingResponsive0Tablet: _n,
  SpacingResponsive1Mobile: kn,
  SpacingResponsive1Tablet: vn,
  SpacingResponsive2Mobile: wn,
  SpacingResponsive2Tablet: Sn,
  SpacingResponsive3Mobile: Cn,
  SpacingResponsive3Tablet: jn,
  SpacingResponsive4Mobile: Nn,
  SpacingResponsive4Tablet: Tn,
  SpacingResponsive5Mobile: Dn,
  SpacingResponsive5Tablet: Fn,
  SpacingResponsive6Mobile: Bn,
  SpacingResponsive6Tablet: Rn,
  SpacingResponsive7Mobile: In,
  SpacingResponsive7Tablet: $n,
  SpacingResponsive8Mobile: Mn,
  SpacingResponsive8Tablet: Ln,
  SpacingResponsive9Mobile: En,
  SpacingResponsive9Tablet: An,
  StateDisabledBackground: sh,
  StateDisabledBorder: oh,
  StateDisabledText: ih,
  StateErrorBackground: Yu,
  StateErrorBorder: qu,
  StateErrorText: Ku,
  StateInfoBackground: nh,
  StateInfoBorder: rh,
  StateInfoText: ah,
  StateSuccessBackground: Zu,
  StateSuccessBorder: Ju,
  StateSuccessText: Xu,
  StateWarningBackground: Qu,
  StateWarningBorder: eh,
  StateWarningText: th,
  TransitionButtonDefault: ql,
  TransitionButtonShadow: Kl,
  TransitionCardHover: Jl,
  TransitionInputFocus: Zl
}, Symbol.toStringTag, { value: "Module" })), af = (e, t) => ({
  fontSize: e.mobile,
  marginBottom: t.mobile,
  "@media (min-width: 768px)": {
    fontSize: e.tablet,
    marginBottom: t.tablet
  },
  "@media print": {
    fontSize: e.print || e.tablet
  }
}), sf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h1",
  {
    className: t,
    style: {
      fontFamily: De.fontFamily,
      fontWeight: De.fontWeight,
      fontSize: De.fontSize.mobile,
      lineHeight: De.lineHeight,
      marginTop: De.marginTop,
      marginBottom: De.marginBottom.mobile,
      ...r
    },
    children: e
  }
), of = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h2",
  {
    className: t,
    style: {
      fontFamily: Fe.fontFamily,
      fontWeight: Fe.fontWeight,
      fontSize: Fe.fontSize.mobile,
      lineHeight: Fe.lineHeight,
      marginTop: Fe.marginTop,
      marginBottom: Fe.marginBottom.mobile,
      ...r
    },
    children: e
  }
), lf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h3",
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
), cf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h4",
  {
    className: t,
    style: {
      fontFamily: Re.fontFamily,
      fontWeight: Re.fontWeight,
      fontSize: Re.fontSize.mobile,
      lineHeight: Re.lineHeight,
      marginTop: Re.marginTop,
      marginBottom: Re.marginBottom.mobile,
      ...r
    },
    children: e
  }
), df = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "h5",
  {
    className: t,
    style: {
      fontFamily: Ie.fontFamily,
      fontWeight: Ie.fontWeight,
      fontSize: Ie.fontSize.mobile,
      lineHeight: Ie.lineHeight,
      marginTop: Ie.marginTop,
      marginBottom: Ie.marginBottom.mobile,
      ...r
    },
    children: e
  }
), uf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), hf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), ff = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Le.fontFamily,
      fontWeight: Le.fontWeight,
      fontSize: Le.fontSize.mobile,
      lineHeight: Le.lineHeight,
      marginTop: Le.marginTop,
      marginBottom: Le.marginBottom.mobile,
      ...r
    },
    children: e
  }
), mf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
  {
    className: t,
    style: {
      fontFamily: Ee.fontFamily,
      fontWeight: Ee.fontWeight,
      fontSize: Ee.fontSize.mobile,
      lineHeight: Ee.lineHeight,
      marginTop: Ee.marginTop,
      marginBottom: Ee.marginBottom.mobile,
      ...r
    },
    children: e
  }
), pf = ({
  children: e,
  className: t = "",
  style: r = {}
}) => /* @__PURE__ */ n.jsx(
  "p",
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
), gf = () => ge(() => wh, []), bf = () => ge(() => ({
  // Border colors
  BorderColorDefault: ya,
  BorderColorForm: _a,
  BorderColorCard: ka,
  BorderColorCardHover: va,
  BorderColorError: wa,
  // Primary colors
  ColorPrimaryBlue: Sa,
  ColorPrimaryWhite: Ca,
  ColorPrimaryBlack: ja,
  ColorPrimaryGreen: Na,
  ColorPrimaryPurple: Ta,
  ColorPrimaryDarkPink: Da,
  ColorPrimaryRed: Fa,
  ColorPrimaryYellow: Ba,
  // Secondary colors
  ColorSecondaryPaleYellow: Ra,
  ColorSecondaryWarmYellow: Ia,
  ColorSecondaryOrange: $a,
  ColorSecondaryAquaGreen: Ma,
  ColorSecondaryPink: La,
  // Grey scale
  ColorGrey1: Ea,
  ColorGrey2: Aa,
  ColorGrey3: Ha,
  ColorGrey4: Pa,
  ColorGrey5: za
}), []), xf = () => ge(() => ({
  Spacing0: Qa,
  Spacing1: es,
  Spacing2: ts,
  Spacing3: ns,
  Spacing4: rs,
  Spacing5: as,
  Spacing6: ss,
  Spacing7: os,
  Spacing8: is,
  Spacing9: ls
}), []), yf = () => ge(() => ({
  // Semantic device-grouped typography
  Mobile: {
    Size14: $t,
    Size16: Et,
    Size19: Pt,
    Size22: Ot,
    Size26: Vt,
    Size36: Kt,
    Size48: Xt
  },
  Tablet: {
    Size14: Mt,
    Size16: At,
    Size19: zt,
    Size22: Ut,
    Size26: Yt,
    Size36: Zt,
    Size48: Qt
  },
  Print: {
    Size14: Lt,
    Size16: Ht,
    Size19: Wt,
    Size22: Gt,
    Size26: qt,
    Size36: Jt,
    Size48: en
  },
  Family: {
    Base: Tt,
    Fallback: Dt,
    Print: Ft
  },
  Weight: {
    Normal: Bt,
    Bold: Rt,
    Light: It
  },
  Base: {
    Size: Hn,
    LineHeight: Pn
  },
  // Backward compatibility - individual exports
  FontFamilyBase: Tt,
  FontFamilyFallback: Dt,
  FontFamilyPrint: Ft,
  FontWeightNormal: Bt,
  FontWeightBold: Rt,
  FontWeightLight: It,
  FontSize14Mobile: $t,
  FontSize14Tablet: Mt,
  FontSize14Print: Lt,
  FontSize16Mobile: Et,
  FontSize16Tablet: At,
  FontSize16Print: Ht,
  FontSize19Mobile: Pt,
  FontSize19Tablet: zt,
  FontSize19Print: Wt,
  FontSize22Mobile: Ot,
  FontSize22Tablet: Ut,
  FontSize22Print: Gt,
  FontSize26Mobile: Vt,
  FontSize26Tablet: Yt,
  FontSize26Print: qt,
  FontSize36Mobile: Kt,
  FontSize36Tablet: Zt,
  FontSize36Print: Jt,
  FontSize48Mobile: Xt,
  FontSize48Tablet: Qt,
  FontSize48Print: en,
  FontSizeBase: Hn,
  FontLineHeightBase: Pn
}), []), _f = () => ge(() => ({
  // Semantic device-grouped responsive spacing
  Mobile: {
    Size0: yn,
    Size1: kn,
    Size2: wn,
    Size3: Cn,
    Size4: Nn,
    Size5: Dn,
    Size6: Bn,
    Size7: In,
    Size8: Mn,
    Size9: En
  },
  Tablet: {
    Size0: _n,
    Size1: vn,
    Size2: Sn,
    Size3: jn,
    Size4: Tn,
    Size5: Fn,
    Size6: Rn,
    Size7: $n,
    Size8: Ln,
    Size9: An
  },
  // Backward compatibility - individual exports
  SpacingResponsive0Mobile: yn,
  SpacingResponsive0Tablet: _n,
  SpacingResponsive1Mobile: kn,
  SpacingResponsive1Tablet: vn,
  SpacingResponsive2Mobile: wn,
  SpacingResponsive2Tablet: Sn,
  SpacingResponsive3Mobile: Cn,
  SpacingResponsive3Tablet: jn,
  SpacingResponsive4Mobile: Nn,
  SpacingResponsive4Tablet: Tn,
  SpacingResponsive5Mobile: Dn,
  SpacingResponsive5Tablet: Fn,
  SpacingResponsive6Mobile: Bn,
  SpacingResponsive6Tablet: Rn,
  SpacingResponsive7Mobile: In,
  SpacingResponsive7Tablet: $n,
  SpacingResponsive8Mobile: Mn,
  SpacingResponsive8Tablet: Ln,
  SpacingResponsive9Mobile: En,
  SpacingResponsive9Tablet: An
}), []), kf = () => ge(() => ({
  // Button spacing
  ButtonSpacingPaddingVerticalMobile: Wa,
  ButtonSpacingPaddingHorizontalMobile: Oa,
  ButtonSpacingPaddingVerticalDesktop: Ua,
  ButtonSpacingPaddingHorizontalDesktop: Ga,
  // Card spacing	
  CardSpacingPaddingMobile: Va,
  CardSpacingPaddingDesktop: Ya,
  CardSpacingHeadingMargin: qa,
  // Form spacing
  FormSpacingInputPadding: Ka,
  FormSpacingInputMinHeight: Za,
  FormSpacingCheckboxSize: Ja,
  FormSpacingCheckboxLabelPadding: Xa
}), []), vf = () => ge(() => ({
  xl: De,
  l: Fe,
  m: Be,
  s: Re,
  xs: Ie
}), []), wf = () => ge(() => ({
  body: $e,
  bodyLarge: Me,
  bodySmall: Le,
  ledeText: Ee,
  ledeTextSmall: Ae
}), []), Sf = () => ge(() => ({
  headings: {
    xl: De,
    l: Fe,
    m: Be,
    s: Re,
    xs: Ie
  },
  paragraphs: {
    body: $e,
    bodyLarge: Me,
    bodySmall: Le,
    ledeText: Ee,
    ledeTextSmall: Ae
  },
  fonts: {
    family: {
      base: Tt,
      fallback: Dt,
      print: Ft
    },
    weight: {
      normal: Bt,
      bold: Rt,
      light: It
    },
    sizes: {
      mobile: {
        size14: $t,
        size16: Et,
        size19: Pt,
        size22: Ot,
        size26: Vt,
        size36: Kt,
        size48: Xt
      },
      tablet: {
        size14: Mt,
        size16: At,
        size19: zt,
        size22: Ut,
        size26: Yt,
        size36: Zt,
        size48: Qt
      },
      print: {
        size14: Lt,
        size16: Ht,
        size19: Wt,
        size22: Gt,
        size26: qt,
        size36: Jt,
        size48: en
      }
    }
  }
}), []), cs = {
  fontPath: "https://assets.nhs.uk/fonts/",
  includeFontFace: !0,
  useFallbacks: !0,
  fontWeights: [400, 600]
}, _e = {
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
function Cf(e = {}) {
  const { fontPath: t, fontWeights: r } = { ...cs, ...e }, a = [];
  return r?.includes(400) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 400;
  src: url("${t}${_e.normal.eot}?#iefix") format("eot"),
       url("${t}${_e.normal.woff2}") format("woff2"),
       url("${t}${_e.normal.woff}") format("woff"),
       url("${t}${_e.normal.ttf}") format("truetype");
  src: url("${t}${_e.normal.eot}");
}`), r?.includes(600) && a.push(`
@font-face {
  font-display: swap;
  font-family: "Frutiger W01";
  font-style: normal;
  font-weight: 600;
  src: url("${t}${_e.bold.eot}?#iefix") format("eot"),
       url("${t}${_e.bold.woff2}") format("woff2"),
       url("${t}${_e.bold.woff}") format("woff"),
       url("${t}${_e.bold.ttf}") format("truetype");
  src: url("${t}${_e.bold.eot}");
}`), a.join(`
`);
}
function jf(e = {}) {
  if (typeof document > "u") return;
  const { fontPath: t, fontWeights: r } = { ...cs, ...e };
  [
    // Preload the most important formats (woff2 first, then woff)
    ...r?.includes(400) ? [
      { href: `${t}${_e.normal.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${_e.normal.woff}`, as: "font", type: "font/woff" }
    ] : [],
    ...r?.includes(600) ? [
      { href: `${t}${_e.bold.woff2}`, as: "font", type: "font/woff2" },
      { href: `${t}${_e.bold.woff}`, as: "font", type: "font/woff" }
    ] : []
  ].forEach((o) => {
    const s = document.createElement("link");
    s.rel = "preload", s.href = o.href, s.as = o.as, s.type = o.type, s.crossOrigin = "anonymous", document.head.appendChild(s);
  });
}
const Nf = '"Frutiger W01", Arial, Helvetica, sans-serif', Tf = "Arial, Helvetica, sans-serif";
async function Df() {
  if (typeof document > "u" || !document.fonts) return !1;
  try {
    return await document.fonts.load('1em "Frutiger W01"'), document.fonts.check('1em "Frutiger W01"');
  } catch {
    return !1;
  }
}
export {
  zn as Account,
  Ch as ActionLink,
  ef as AdaptiveDataGrid,
  zl as AnimationDurationFast,
  Wl as AnimationDurationNormal,
  Ol as AnimationDurationSlow,
  Yl as AnimationEasingBounce,
  Ul as AnimationEasingEaseIn,
  Vl as AnimationEasingEaseInOut,
  Gl as AnimationEasingEaseOut,
  ua as AppointmentCard,
  nl as AriaDataGrid,
  bn as AriaTabsDataGrid,
  ef as AriaTabsDataGridAdaptive,
  vs as BackLink,
  ka as BorderColorCard,
  va as BorderColorCardHover,
  ya as BorderColorDefault,
  wa as BorderColorError,
  _a as BorderColorForm,
  lc as BorderRadiusLarge,
  ic as BorderRadiusMedium,
  sc as BorderRadiusNone,
  oc as BorderRadiusSmall,
  tc as BorderWidthCardBottom,
  Xl as BorderWidthDefault,
  Ql as BorderWidthFormElement,
  ec as BorderWidthFormElementError,
  nc as BorderWidthPanel,
  ac as BorderWidthTableCell,
  rc as BorderWidthTableHeader,
  qi as Breadcrumb,
  Wu as BreakpointDesktop,
  Ou as BreakpointLargeDesktop,
  Pu as BreakpointMobile,
  zu as BreakpointTablet,
  ve as Button,
  Ed as ButtonBorderRadius,
  Ld as ButtonBorderWidth,
  Sd as ButtonPrimaryBackgroundActive,
  vd as ButtonPrimaryBackgroundDefault,
  Cd as ButtonPrimaryBackgroundDisabled,
  wd as ButtonPrimaryBackgroundHover,
  Td as ButtonPrimaryBorderDefault,
  Dd as ButtonPrimaryBorderFocus,
  jd as ButtonPrimaryTextDefault,
  Nd as ButtonPrimaryTextDisabled,
  Id as ButtonSecondaryBackgroundActive,
  Fd as ButtonSecondaryBackgroundDefault,
  Rd as ButtonSecondaryBackgroundHover,
  Bd as ButtonSecondaryBackgroundSolid,
  Md as ButtonSecondaryBorderDefault,
  $d as ButtonSecondaryTextDefault,
  Ad as ButtonShadowSize,
  Ga as ButtonSpacingPaddingHorizontalDesktop,
  Oa as ButtonSpacingPaddingHorizontalMobile,
  Ua as ButtonSpacingPaddingVerticalDesktop,
  Wa as ButtonSpacingPaddingVerticalMobile,
  Hd as ButtonTypographyWeight,
  la as Card,
  Pd as CardBackgroundDefault,
  Od as CardBorderBottom,
  zd as CardBorderDefault,
  Wd as CardBorderHover,
  qd as CardBorderWidthBottom,
  Yd as CardBorderWidthDefault,
  Wh as CardGroup,
  Oh as CardGroupItem,
  Kd as CardShadowDefault,
  Zd as CardShadowHover,
  qa as CardSpacingHeadingMargin,
  Ya as CardSpacingPaddingDesktop,
  Va as CardSpacingPaddingMobile,
  Gd as CardTextDescription,
  Ud as CardTextHeading,
  Vd as CardTextLink,
  Uh as CareCard,
  jh as CharacterCount,
  ws as Checkbox,
  Ss as Checkboxes,
  yc as ColorBorderDefault,
  _c as ColorBorderSecondary,
  Yc as ColorButtonLoginActive,
  Gc as ColorButtonLoginBackground,
  Vc as ColorButtonLoginHover,
  qc as ColorButtonLoginShadow,
  Nc as ColorButtonPrimaryActive,
  Sc as ColorButtonPrimaryBackground,
  jc as ColorButtonPrimaryHover,
  Tc as ColorButtonPrimaryShadow,
  Cc as ColorButtonPrimaryText,
  Hc as ColorButtonReverseActive,
  Lc as ColorButtonReverseBackground,
  Ac as ColorButtonReverseHover,
  Pc as ColorButtonReverseShadow,
  Ec as ColorButtonReverseText,
  $c as ColorButtonSecondaryActive,
  Dc as ColorButtonSecondaryBackground,
  Fc as ColorButtonSecondaryBackgroundSolid,
  Bc as ColorButtonSecondaryBorder,
  Ic as ColorButtonSecondaryHover,
  Mc as ColorButtonSecondaryShadow,
  Rc as ColorButtonSecondaryText,
  Oc as ColorButtonWarningActive,
  zc as ColorButtonWarningBackground,
  Wc as ColorButtonWarningHover,
  Uc as ColorButtonWarningShadow,
  kc as ColorError,
  bc as ColorFocusBackground,
  xc as ColorFocusText,
  wc as ColorFormBackground,
  vc as ColorFormBorder,
  Ea as ColorGrey1,
  Aa as ColorGrey2,
  Ha as ColorGrey3,
  Pa as ColorGrey4,
  za as ColorGrey5,
  pc as ColorLinkActive,
  fc as ColorLinkDefault,
  mc as ColorLinkHover,
  gc as ColorLinkVisited,
  ja as ColorPrimaryBlack,
  Sa as ColorPrimaryBlue,
  Da as ColorPrimaryDarkPink,
  Na as ColorPrimaryGreen,
  Ta as ColorPrimaryPurple,
  Fa as ColorPrimaryRed,
  Ca as ColorPrimaryWhite,
  Ba as ColorPrimaryYellow,
  Ma as ColorSecondaryAquaGreen,
  $a as ColorSecondaryOrange,
  Ra as ColorSecondaryPaleYellow,
  La as ColorSecondaryPink,
  Ia as ColorSecondaryWarmYellow,
  cc as ColorTextPrimary,
  hc as ColorTextPrint,
  uc as ColorTextReverse,
  dc as ColorTextSecondary,
  Gn as Column,
  bd as ComponentBlur,
  cd as ComponentBreadcrumbChevronMarginLeft,
  dd as ComponentBreadcrumbChevronMarginRight,
  hd as ComponentBreadcrumbPaddingTopDesktop,
  ud as ComponentBreadcrumbPaddingTopMobile,
  Xc as ComponentButtonPaddingDesktopHorizontal,
  Jc as ComponentButtonPaddingDesktopVertical,
  Zc as ComponentButtonPaddingMobileHorizontal,
  Kc as ComponentButtonPaddingMobileVertical,
  Qc as ComponentButtonShadowSize,
  od as ComponentCardHeadingMargin,
  sd as ComponentCardPaddingDesktop,
  ad as ComponentCardPaddingMobile,
  yd as ComponentDetails,
  _d as ComponentExpander,
  rd as ComponentFormCheckboxLabelPadding,
  nd as ComponentFormCheckboxSize,
  ed as ComponentFormInputMinHeight,
  td as ComponentFormInputPadding,
  xd as ComponentLink,
  kd as ComponentPagination,
  ld as ComponentPanelPaddingDesktop,
  id as ComponentPanelPaddingMobile,
  gd as ComponentSpread,
  md as ComponentSummaryListCellPaddingHorizontal,
  fd as ComponentSummaryListCellPaddingVertical,
  pd as ComponentSummaryListRowMargin,
  Or as Container,
  zh as ContentsList,
  cs as DEFAULT_FONT_CONFIG,
  Jh as DashboardSummaryGrid,
  $h as DateInput,
  Zi as Details,
  Ji as DoDontList,
  vh as ElevationHigh,
  _h as ElevationLow,
  kh as ElevationMedium,
  yh as ElevationNone,
  or as ErrorMessage,
  Ih as ErrorSummary,
  Xi as Expander,
  _e as FRUTIGER_FONT_FILES,
  Un as Fieldset,
  ph as FocusOutlineOffset,
  gh as FocusOutlineStyle,
  mh as FocusOutlineWidth,
  xh as FocusShadowButton,
  bh as FocusShadowInput,
  Tt as FontFamilyBase,
  Dt as FontFamilyFallback,
  Ft as FontFamilyPrint,
  Pn as FontLineHeightBase,
  $t as FontSize14Mobile,
  Lt as FontSize14Print,
  Mt as FontSize14Tablet,
  Et as FontSize16Mobile,
  Ht as FontSize16Print,
  At as FontSize16Tablet,
  Pt as FontSize19Mobile,
  Wt as FontSize19Print,
  zt as FontSize19Tablet,
  Ot as FontSize22Mobile,
  Gt as FontSize22Print,
  Ut as FontSize22Tablet,
  Vt as FontSize26Mobile,
  qt as FontSize26Print,
  Yt as FontSize26Tablet,
  Kt as FontSize36Mobile,
  Jt as FontSize36Print,
  Zt as FontSize36Tablet,
  Xt as FontSize48Mobile,
  en as FontSize48Print,
  Qt as FontSize48Tablet,
  Hn as FontSizeBase,
  Rt as FontWeightBold,
  It as FontWeightLight,
  Bt as FontWeightNormal,
  Kr as Footer,
  gu as FormBorderRadius,
  mu as FormBorderWidthDefault,
  pu as FormBorderWidthError,
  uu as FormErrorTextDefault,
  hu as FormErrorTypographyWeight,
  fu as FormHintTextDefault,
  Jd as FormInputBackgroundDefault,
  Qd as FormInputBackgroundDisabled,
  eu as FormInputBackgroundError,
  Xd as FormInputBackgroundFocus,
  tu as FormInputBorderDefault,
  au as FormInputBorderDisabled,
  ru as FormInputBorderError,
  nu as FormInputBorderFocus,
  su as FormInputTextDefault,
  iu as FormInputTextDisabled,
  ou as FormInputTextPlaceholder,
  lu as FormLabelTextDefault,
  cu as FormLabelTextRequired,
  du as FormLabelTypographyWeight,
  Xa as FormSpacingCheckboxLabelPadding,
  Ja as FormSpacingCheckboxSize,
  Za as FormSpacingInputMinHeight,
  Ka as FormSpacingInputPadding,
  Hh as GanttChart,
  Ts as Grid,
  Gu as GridGutter,
  Vu as GridGutterHalf,
  Uu as GridPageWidth,
  qr as Header,
  Eh as HeaderSSR,
  Yr as HeaderSearch,
  Ah as HeaderStatic,
  We as Heading,
  Fe as HeadingsNhsukHeadingL,
  Be as HeadingsNhsukHeadingM,
  Re as HeadingsNhsukHeadingS,
  De as HeadingsNhsukHeadingXl,
  Ie as HeadingsNhsukHeadingXs,
  Ms as Hero,
  zr as Hint,
  Zh as Images,
  Wn as Input,
  Gh as InsetText,
  On as Label,
  Hu as LayoutColumnActions,
  Mu as LayoutColumnFull,
  Lu as LayoutColumnHalf,
  Au as LayoutColumnQuarter,
  Eu as LayoutColumnThird,
  $u as LayoutContainerMaxWidth,
  Bs as List,
  Ur as MainWrapper,
  ha as MedicationCard,
  uf as NHSBodyText,
  hf as NHSBodyTextLarge,
  ff as NHSBodyTextSmall,
  sf as NHSHeading1,
  of as NHSHeading2,
  lf as NHSHeading3,
  cf as NHSHeading4,
  df as NHSHeading5,
  mf as NHSLedeText,
  pf as NHSLedeTextSmall,
  Lh as NHSThemeProvider,
  Tf as NHS_FALLBACK_FONT_STACK,
  Nf as NHS_FONT_STACK,
  nf as PageTemplate,
  Ph as Pagination,
  Ki as Panel,
  $e as ParagraphsBody,
  Me as ParagraphsBodyLarge,
  Le as ParagraphsBodySmall,
  Ee as ParagraphsLedeText,
  Ae as ParagraphsLedeTextSmall,
  da as PatientCard,
  Nh as Radios,
  ef as ResponsiveDataGrid,
  tf as ResponsiveDataGridDemo,
  _t as Row,
  Wr as Select,
  js as SelectOption,
  lh as ShadowButtonDefault,
  uh as ShadowButtonFocus,
  ch as ShadowButtonSecondary,
  dh as ShadowButtonWarning,
  hh as ShadowCardDefault,
  fh as ShadowCardHover,
  Iu as SizeButtonMinHeightDesktop,
  Ru as SizeButtonMinHeightMobile,
  Su as SizeFormControlLarge,
  wu as SizeFormControlMedium,
  vu as SizeFormControlSmall,
  Fu as SizeFormInputWidth2xl,
  Bu as SizeFormInputWidth3xl,
  Tu as SizeFormInputWidthLg,
  Nu as SizeFormInputWidthMd,
  ju as SizeFormInputWidthSm,
  Du as SizeFormInputWidthXl,
  Cu as SizeFormInputWidthXs,
  _u as SizeIconExtraLarge,
  yu as SizeIconLarge,
  xu as SizeIconMedium,
  ku as SizeIconNhsDefault,
  bu as SizeIconSmall,
  ia as SkipLink,
  Xh as SortStatusControl,
  Qa as Spacing0,
  es as Spacing1,
  ts as Spacing2,
  ns as Spacing3,
  rs as Spacing4,
  as as Spacing5,
  ss as Spacing6,
  os as Spacing7,
  is as Spacing8,
  ls as Spacing9,
  yn as SpacingResponsive0Mobile,
  _n as SpacingResponsive0Tablet,
  kn as SpacingResponsive1Mobile,
  vn as SpacingResponsive1Tablet,
  wn as SpacingResponsive2Mobile,
  Sn as SpacingResponsive2Tablet,
  Cn as SpacingResponsive3Mobile,
  jn as SpacingResponsive3Tablet,
  Nn as SpacingResponsive4Mobile,
  Tn as SpacingResponsive4Tablet,
  Dn as SpacingResponsive5Mobile,
  Fn as SpacingResponsive5Tablet,
  Bn as SpacingResponsive6Mobile,
  Rn as SpacingResponsive6Tablet,
  In as SpacingResponsive7Mobile,
  $n as SpacingResponsive7Tablet,
  Mn as SpacingResponsive8Mobile,
  Ln as SpacingResponsive8Tablet,
  En as SpacingResponsive9Mobile,
  An as SpacingResponsive9Tablet,
  Th as SpacingUtilities,
  sh as StateDisabledBackground,
  oh as StateDisabledBorder,
  ih as StateDisabledText,
  Yu as StateErrorBackground,
  qu as StateErrorBorder,
  Ku as StateErrorText,
  nh as StateInfoBackground,
  rh as StateInfoBorder,
  ah as StateInfoText,
  Zu as StateSuccessBackground,
  Ju as StateSuccessBorder,
  Xu as StateSuccessText,
  Qu as StateWarningBackground,
  eh as StateWarningBorder,
  th as StateWarningText,
  tl as SummaryCard,
  Vh as SummaryList,
  Yh as Table,
  qh as Tabs,
  ze as Tag,
  Qi as TaskList,
  Cs as Textarea,
  rf as TransactionalPageTemplate,
  ql as TransitionButtonDefault,
  Kl as TransitionButtonShadow,
  Jl as TransitionCardHover,
  Zl as TransitionInputFocus,
  fa as VitalsCard,
  Rh as WIDTH_FRACTIONS,
  Kh as WarningCallout,
  xa as WidthContainer,
  Fh as WidthUtilities,
  Df as checkFrutigerLoaded,
  tr as createGenericTabsConfig,
  Qh as createTCHTabsConfig,
  Cf as generateFrutigerFontFace,
  af as getResponsiveStyles,
  Dh as getSpacingClass,
  Bh as getWidthClass,
  jf as preloadFrutigerFonts,
  fl as tchDataConfig,
  bf as useColors,
  kf as useComponentSpacing,
  vf as useNHSHeadings,
  wf as useNHSParagraphs,
  Mh as useNHSTheme,
  Sf as useNHSTypographySystem,
  _f as useResponsiveSpacing,
  xf as useSpacing,
  gf as useTokens,
  yf as useTypography
};
//# sourceMappingURL=index.esm.js.map
