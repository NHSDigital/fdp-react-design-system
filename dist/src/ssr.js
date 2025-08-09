import _ from "classnames";
import * as K from "react";
import { useState as A, useRef as B, useCallback as C, useEffect as E, createElement as ee } from "react";
var F = { exports: {} }, M = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function se() {
  if (D) return M;
  D = 1;
  var i = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function s(n, a, r) {
    var l = null;
    if (r !== void 0 && (l = "" + r), a.key !== void 0 && (l = "" + a.key), "key" in a) {
      r = {};
      for (var u in a)
        u !== "key" && (r[u] = a[u]);
    } else r = a;
    return a = r.ref, {
      $$typeof: i,
      type: n,
      key: l,
      ref: a !== void 0 ? a : null,
      props: r
    };
  }
  return M.Fragment = t, M.jsx = s, M.jsxs = s, M;
}
var $;
function ne() {
  return $ || ($ = 1, F.exports = se()), F.exports;
}
var e = ne();
const z = ({
  ariaLabel: i = "Account",
  items: t = [],
  className: s,
  variant: n = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const a = (r) => {
    const l = r.icon ? /* @__PURE__ */ e.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ e.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, u = r.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r.html } }) : r.text, o = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      l,
      u
    ] });
    return r.href ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-account__link", href: r.href, children: o }) : r.action ? /* @__PURE__ */ e.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: r.action,
        method: r.method || "post",
        children: /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "nhsuk-account__button",
            type: "submit",
            role: "button",
            children: o
          }
        )
      }
    ) : /* @__PURE__ */ e.jsx("span", { children: o });
  };
  return /* @__PURE__ */ e.jsx(
    "nav",
    {
      className: _(
        "nhsuk-account",
        {
          "nhsuk-account--white": n === "white"
        },
        s
      ),
      "aria-label": i,
      children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-account__list", children: t.map((r, l) => r && /* @__PURE__ */ e.jsx(
        "li",
        {
          className: _("nhsuk-account__item", r.className),
          children: a(r)
        },
        l
      )) })
    }
  );
}, he = ({
  className: i,
  logo: t = {},
  service: s = {},
  organisation: n,
  search: a,
  account: r,
  navigation: l,
  containerClasses: u,
  variant: o = "default",
  attributes: m = {},
  ...c
}) => {
  const d = s.href && !t.href || s.href && s.href === t.href, k = d ? s.href : t.href, j = _(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": o === "organisation" || n,
      "nhsuk-header--white": o === "white"
    },
    i
  ), g = _(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), L = _(
    "nhsuk-header__navigation",
    l?.className
  ), y = () => /* @__PURE__ */ e.jsxs(
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
        /* @__PURE__ */ e.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), w = () => t.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : y(), N = () => n ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      n.name,
      n.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        n.split
      ] })
    ] }),
    n.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: n.descriptor })
  ] }) : null, p = (h, f) => h ? f ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: f, children: h }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: h }) : null, b = () => !l?.items || l.items.length === 0 ? null : l.items.map((h, f) => /* @__PURE__ */ e.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ e.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: h.href,
          ...h.attributes || {},
          children: h.text
        }
      )
    },
    h.href || f
  )), v = () => a ? /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search", children: /* @__PURE__ */ e.jsxs(
    "form",
    {
      className: "nhsuk-header__search-form",
      action: a.action || "https://www.nhs.uk/search/",
      method: a.method || "get",
      role: "search",
      children: [
        /* @__PURE__ */ e.jsx(
          "label",
          {
            className: "nhsuk-visually-hidden",
            htmlFor: "header-search-ssr",
            children: a.visuallyHiddenLabel || "Search the NHS website"
          }
        ),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: "nhsuk-header__search-input",
            id: "header-search-ssr",
            name: a.name || "q",
            type: "search",
            placeholder: a.placeholder || "Search",
            autoComplete: "off",
            defaultValue: a.value || "",
            disabled: a.disabled
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            className: "nhsuk-header__search-submit",
            type: "submit",
            children: [
              /* @__PURE__ */ e.jsx("span", { className: "nhsuk-visually-hidden", children: a.visuallyHiddenButton || "Search" }),
              /* @__PURE__ */ e.jsx(
                "svg",
                {
                  className: "nhsuk-icon nhsuk-icon__search",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24",
                  "aria-hidden": "true",
                  focusable: "false",
                  children: /* @__PURE__ */ e.jsx("path", { d: "m19.71 18.29-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
                }
              )
            ]
          }
        )
      ]
    }
  ) }) : null;
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: j,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": l?.items?.length || 0,
      ...m,
      ...c,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: g, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            k ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: k, children: [
              w(),
              N(),
              d && p(s.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              w(),
              N(),
              d && p(s.text)
            ] }),
            s.text && !d && p(s.text, s.href)
          ] }),
          (o === "organisation" || n) && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            n && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name", children: n.name }),
              n.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: n.descriptor })
            ] }),
            v()
          ] }),
          o !== "organisation" && !n && v(),
          /* @__PURE__ */ e.jsx(
            z,
            {
              ...r,
              variant: o === "white" ? "white" : "default"
            }
          )
        ] }),
        l && l.items && l.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: L,
            id: "header-navigation",
            role: "navigation",
            "aria-label": l.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ e.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ e.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: b()
              }
            ) })
          }
        )
      ]
    }
  );
}, ae = ({
  mode: i = "form",
  action: t = "https://www.nhs.uk/search/",
  method: s = "get",
  name: n = "q",
  value: a,
  placeholder: r = "Search",
  visuallyHiddenLabel: l = "Search the NHS website",
  visuallyHiddenButton: u = "Search",
  className: o,
  disabled: m = !1,
  callbacks: c = {},
  isLoading: d = !1,
  showResults: k = !1,
  results: j = [],
  formAttributes: g = {},
  inputAttributes: L = {},
  buttonAttributes: y = {},
  preventDefaultSubmit: w = !1,
  debounceMs: N = 300,
  minQueryLength: p = 1
}) => {
  const [b, v] = A(""), [h, f] = A(!1), H = B(void 0), J = B(null), I = B(null), R = i === "controlled" && a !== void 0, T = R ? a : b, q = C((x) => {
    H.current && clearTimeout(H.current), H.current = setTimeout(() => {
      c.onChange && x.length >= p && c.onChange(x);
    }, N);
  }, [c.onChange, N, p]), V = C((x) => {
    const S = x.target.value;
    R || v(S), i !== "form" && q(S);
  }, [R, i, q]), O = C((x) => {
    const S = T.trim(), Z = {
      query: S,
      timestamp: Date.now(),
      formData: new FormData(x.currentTarget)
    };
    i === "controlled" || i === "hybrid" && w ? (x.preventDefault(), c.onSearch && S.length >= p && c.onSearch(Z)) : i === "hybrid" && c.onSearch && S.length >= p && c.onSearch(Z);
  }, [i, T, c.onSearch, w, p]), P = C(() => {
    f(!0), c.onFocus?.();
  }, [c.onFocus]), Y = C(() => {
    f(!1), c.onBlur?.();
  }, [c.onBlur]), G = C(() => {
    R || v(""), c.onClear?.(), I.current?.focus();
  }, [R, c.onClear]);
  E(() => () => {
    H.current && clearTimeout(H.current);
  }, []);
  const W = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: _("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": d
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), U = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__spinner",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsxs(
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
            /* @__PURE__ */ e.jsx(
              "animate",
              {
                attributeName: "stroke-dasharray",
                dur: "2s",
                values: "0 31.416;15.708 15.708;0 31.416",
                repeatCount: "indefinite"
              }
            ),
            /* @__PURE__ */ e.jsx(
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
  ), X = () => !T || i === "form" ? null : /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: G,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ e.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ e.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), Q = () => !k || !j.length || !h ? null : /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: j.map((x) => /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: x.href ? /* @__PURE__ */ e.jsxs("a", { href: x.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-title", children: x.title }),
    x.description && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-description", children: x.description })
  ] }) : /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => c.onSearch?.({ query: x.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-title", children: x.title }),
        x.description && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-description", children: x.description })
      ]
    }
  ) }, x.id)) });
  return /* @__PURE__ */ e.jsxs("search", { className: _("nhsuk-header__search", o, {
    "nhsuk-header__search--controlled": i === "controlled",
    "nhsuk-header__search--hybrid": i === "hybrid",
    "nhsuk-header__search--loading": d,
    "nhsuk-header__search--focused": h,
    "nhsuk-header__search--has-results": k && j.length > 0
  }), children: [
    /* @__PURE__ */ e.jsxs(
      "form",
      {
        ref: J,
        className: "nhsuk-header__search-form",
        id: "search",
        action: i !== "controlled" ? t : void 0,
        method: i !== "controlled" ? s : void 0,
        onSubmit: O,
        ...g,
        children: [
          /* @__PURE__ */ e.jsx(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: l
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: I,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: i !== "controlled" ? n : void 0,
                type: "search",
                placeholder: r,
                autoComplete: "off",
                value: T,
                onChange: V,
                onFocus: P,
                onBlur: Y,
                disabled: m || d,
                "aria-expanded": k && j.length > 0,
                "aria-haspopup": "listbox",
                ...L
              }
            ),
            X()
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: m || d || i !== "form" && T.length < p,
              ...y,
              children: [
                d ? U() : W(),
                /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: d ? "Searching..." : u })
              ]
            }
          )
        ]
      }
    ),
    Q()
  ] });
}, ie = ({
  className: i,
  logo: t = {},
  service: s = {},
  organisation: n,
  search: a,
  account: r,
  navigation: l,
  containerClasses: u,
  variant: o = "default",
  attributes: m = {},
  maxVisibleItems: c = 5,
  // New prop to control CSS-based overflow
  ...d
}) => {
  const k = s.href && !t.href || s.href && s.href === t.href, j = k ? s.href : t.href, g = _(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": o === "organisation" || n,
      "nhsuk-header--white": o === "white"
    },
    i
  ), L = _(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), y = _(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": l?.white,
      "nhsuk-header__navigation--justified": l?.justified
    },
    l?.className
  ), w = () => /* @__PURE__ */ e.jsxs(
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
        /* @__PURE__ */ e.jsx("title", { children: t.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), N = () => t.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : w(), p = () => n ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      n.name,
      n.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        n.split
      ] })
    ] }),
    n.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: n.descriptor })
  ] }) : null, b = (h, f) => h ? f ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: f, children: h }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: h }) : null, v = (h) => {
    if (h.active || h.current) {
      const f = h.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
      return /* @__PURE__ */ e.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: f });
    }
    return h.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
  };
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: g,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...m,
      ...d,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: L, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            j ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: j, children: [
              N(),
              p(),
              k && b(s.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              N(),
              p(),
              k && b(s.text)
            ] }),
            s.text && !k && b(s.text, s.href)
          ] }),
          a && /* @__PURE__ */ e.jsx(ae, { ...a }),
          /* @__PURE__ */ e.jsx(
            z,
            {
              ...r,
              variant: o === "white" ? "white" : "default"
            }
          )
        ] }),
        l && l.items && l.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: y,
            "aria-label": l.ariaLabel || "Menu",
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: _(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  u
                ),
                children: /* @__PURE__ */ e.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  l.items.slice(0, c).map((h, f) => /* @__PURE__ */ e.jsx(
                    "li",
                    {
                      className: _(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": h.active || h.current
                        },
                        h.className
                      ),
                      ...h.attributes || {},
                      children: /* @__PURE__ */ e.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: h.href,
                          ...h.active || h.current ? {
                            "aria-current": h.current ? "page" : "true"
                          } : {},
                          children: v(h)
                        }
                      )
                    },
                    f
                  )),
                  l.items.length > c && /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ e.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
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
                    /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: l.items.slice(c).map((h, f) => /* @__PURE__ */ e.jsx(
                      "li",
                      {
                        className: _(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": h.active || h.current
                          }
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: h.href,
                            ...h.active || h.current ? {
                              "aria-current": h.current ? "page" : "true"
                            } : {},
                            children: v(h)
                          }
                        )
                      },
                      `overflow-${c + f}`
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
}, ce = ({
  text: i,
  href: t,
  openInNewWindow: s = !1,
  className: n,
  ...a
}) => {
  const r = _(
    "nhsuk-action-link__link",
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ e.jsxs(
    "a",
    {
      className: r,
      href: t,
      target: s ? "_blank" : void 0,
      rel: s ? "noopener noreferrer" : void 0,
      ...a,
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
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-action-link__text", children: i })
      ]
    }
  ) });
}, re = K.forwardRef(
  ({
    variant: i = "primary",
    size: t = "default",
    fullWidth: s = !1,
    className: n,
    children: a,
    disabled: r,
    type: l = "button",
    ...u
  }, o) => {
    const m = _(
      "nhs-aria-button",
      `nhs-aria-button--${i}`,
      {
        [`nhs-aria-button--${t}`]: t !== "default",
        "nhs-aria-button--full-width": s,
        "nhs-aria-button--disabled": r
      },
      n
    );
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: o,
        type: l,
        className: m,
        disabled: r,
        ...u,
        children: a
      }
    );
  }
);
re.displayName = "ButtonSSR";
const oe = ({
  text: i = "Back",
  html: t,
  href: s = "#",
  className: n,
  element: a = "a",
  onClick: r,
  ...l
}) => {
  const u = _(
    "nhsuk-back-link",
    n
  ), o = _(
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
    t ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : i
  ] });
  return /* @__PURE__ */ e.jsx("div", { className: u, children: a === "button" ? /* @__PURE__ */ e.jsx(
    "button",
    {
      className: o,
      onClick: r,
      type: "button",
      ...l,
      children: m()
    }
  ) : /* @__PURE__ */ e.jsx(
    "a",
    {
      className: o,
      href: s,
      ...l,
      children: m()
    }
  ) });
}, ue = ({
  text: i,
  html: t,
  children: s,
  color: n = "default",
  noBorder: a = !1,
  closable: r = !1,
  onClose: l,
  disabled: u = !1,
  className: o,
  ...m
}) => {
  const c = _(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${n}`]: n !== "default",
      "nhsuk-tag--no-border": a,
      "nhsuk-tag--closable": r,
      "nhsuk-tag--disabled": u
    },
    o
  ), d = (k) => {
    k.preventDefault(), k.stopPropagation(), !u && l && l();
  };
  return /* @__PURE__ */ e.jsxs("strong", { className: c, ...m, children: [
    s || (t ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : i),
    r && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: d,
        disabled: u,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, de = ({
  htmlFor: i,
  className: t,
  isPageHeading: s = !1,
  size: n = "m",
  children: a,
  ...r
}) => {
  const l = _(
    "nhsuk-label",
    {
      [`nhsuk-label--${n}`]: n !== "m"
    },
    t
  ), u = s ? "h1" : "label";
  return /* @__PURE__ */ e.jsx(
    u,
    {
      className: l,
      htmlFor: s ? void 0 : i,
      ...r,
      children: s ? /* @__PURE__ */ e.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: i, children: a }) : a
    }
  );
}, me = ({
  level: i,
  className: t,
  text: s,
  html: n,
  children: a,
  size: r,
  marginBottom: l,
  ...u
}) => {
  const m = i ?? ((g) => {
    switch (g) {
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
  })(r), c = _(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${r}`]: r
    },
    t
  ), d = a || (n ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: n } }) : s), k = `h${m}`, j = l ? { ...u.style, marginBottom: l } : u.style;
  return ee(
    k,
    { className: c, ...u, style: j },
    d
  );
}, _e = ({
  id: i,
  className: t,
  children: s,
  ...n
}) => {
  const a = _("nhsuk-hint", t);
  return /* @__PURE__ */ e.jsx("div", { className: a, id: i, ...n, children: s });
}, ke = ({
  id: i,
  className: t,
  visuallyHiddenText: s = "Error:",
  children: n,
  ...a
}) => {
  const r = _("nhsuk-error-message", t);
  return /* @__PURE__ */ e.jsxs("span", { className: r, id: i, ...a, children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s,
      " "
    ] }),
    n
  ] });
}, xe = ({
  text: i = "Skip to main content",
  href: t = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const [a, r] = A(!1);
  E(() => {
    r(!0);
  }, []), E(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const u = (o) => {
      const m = o.target, c = m.getAttribute("href");
      if (c && c.startsWith("#")) {
        const d = document.querySelector(c);
        if (d) {
          d.hasAttribute("tabindex") || d.setAttribute("tabindex", "-1"), d.focus(), d.classList.add("nhsuk-skip-link-focused-element");
          const k = window.setTimeout(() => {
            d.classList.remove("nhsuk-skip-link-focused-element"), d.getAttribute("tabindex") === "-1" && d.removeAttribute("tabindex");
          }, 3e3);
          m.__nhsSkipLinkTimeout = k;
        }
      }
    };
    try {
      const o = document.querySelectorAll(".nhsuk-skip-link");
      return o.forEach((m) => {
        m.addEventListener("click", u);
      }), () => {
        try {
          o.forEach((m) => {
            m.removeEventListener("click", u);
            const c = m.__nhsSkipLinkTimeout;
            c && window.clearTimeout && window.clearTimeout(c);
          });
        } catch (m) {
          console.warn("SkipLink cleanup error:", m);
        }
      };
    } catch (o) {
      return console.warn("SkipLink initialization error:", o), () => {
      };
    }
  }, [a]);
  const l = _("nhsuk-skip-link", s);
  return /* @__PURE__ */ e.jsx(
    "a",
    {
      className: l,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": a ? "true" : "false",
      ...n,
      children: i
    }
  );
};
export {
  z as Account,
  ce as ActionLink,
  oe as BackLink,
  re as Button,
  ke as ErrorMessage,
  he as HeaderSSR,
  ae as HeaderSearch,
  ie as HeaderStatic,
  me as Heading,
  _e as Hint,
  de as Label,
  xe as SkipLink,
  ue as Tag
};
//# sourceMappingURL=ssr.js.map
