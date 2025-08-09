import _ from "classnames";
import * as K from "react";
import { useState as F, useRef as A, useCallback as C, useEffect as B, createElement as ee } from "react";
var E = { exports: {} }, M = {};
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
  var l = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(n, c, a) {
    var t = null;
    if (a !== void 0 && (t = "" + a), c.key !== void 0 && (t = "" + c.key), "key" in c) {
      a = {};
      for (var u in c)
        u !== "key" && (a[u] = c[u]);
    } else a = c;
    return c = a.ref, {
      $$typeof: l,
      type: n,
      key: t,
      ref: c !== void 0 ? c : null,
      props: a
    };
  }
  return M.Fragment = r, M.jsx = s, M.jsxs = s, M;
}
var $;
function ne() {
  return $ || ($ = 1, E.exports = se()), E.exports;
}
var e = ne();
const z = ({
  ariaLabel: l = "Account",
  items: r = [],
  className: s,
  variant: n = "default"
}) => {
  if (!r || r.length === 0)
    return null;
  const c = (a) => {
    const t = a.icon ? /* @__PURE__ */ e.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ e.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, u = a.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a.html } }) : a.text, o = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      t,
      u
    ] });
    return a.href ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-account__link", href: a.href, children: o }) : a.action ? /* @__PURE__ */ e.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: a.action,
        method: a.method || "post",
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
      "aria-label": l,
      children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-account__list", children: r.map((a, t) => a && /* @__PURE__ */ e.jsx(
        "li",
        {
          className: _("nhsuk-account__item", a.className),
          children: c(a)
        },
        t
      )) })
    }
  );
}, he = ({
  className: l,
  logo: r = {},
  service: s = {},
  organisation: n,
  search: c,
  account: a,
  navigation: t,
  containerClasses: u,
  variant: o = "default",
  attributes: m = {},
  ...i
}) => {
  const d = s.href && !r.href || s.href && s.href === r.href, k = d ? s.href : r.href, j = _(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": o === "organisation" || n,
      "nhsuk-header--white": o === "white"
    },
    l
  ), g = _(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), L = _(
    "nhsuk-header__navigation",
    t?.className
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
      "aria-label": r.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ e.jsx("title", { children: r.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), w = () => r.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: r.src,
      width: "280",
      alt: r.ariaLabel || "NHS"
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
  ] }) : null, p = (h, f) => h ? f ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: f, children: h }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: h }) : null, b = () => !t?.items || t.items.length === 0 ? null : t.items.map((h, f) => /* @__PURE__ */ e.jsx(
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
  )), v = () => c ? /* @__PURE__ */ e.jsx(HeaderSearch, { ...c }) : null;
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: j,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": t?.items?.length || 0,
      ...m,
      ...i,
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
              ...a,
              variant: o === "white" ? "white" : "default"
            }
          )
        ] }),
        t && t.items && t.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: L,
            id: "header-navigation",
            role: "navigation",
            "aria-label": t.ariaLabel || "Primary navigation",
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
}, le = ({
  className: l,
  logo: r = {},
  service: s = {},
  organisation: n,
  search: c,
  account: a,
  navigation: t,
  containerClasses: u,
  variant: o = "default",
  attributes: m = {},
  maxVisibleItems: i = 5,
  // New prop to control CSS-based overflow
  ...d
}) => {
  const k = s.href && !r.href || s.href && s.href === r.href, j = k ? s.href : r.href, g = _(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": o === "organisation" || n,
      "nhsuk-header--white": o === "white"
    },
    l
  ), L = _(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), y = _(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": t?.white,
      "nhsuk-header__navigation--justified": t?.justified
    },
    t?.className
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
      "aria-label": r.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ e.jsx("title", { children: r.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), N = () => r.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: r.src,
      alt: r.ariaLabel || "",
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
          /* @__PURE__ */ e.jsx(
            z,
            {
              ...a,
              variant: o === "white" ? "white" : "default"
            }
          )
        ] }),
        t && t.items && t.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: y,
            "aria-label": t.ariaLabel || "Menu",
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
                  t.items.slice(0, i).map((h, f) => /* @__PURE__ */ e.jsx(
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
                  t.items.length > i && /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ e.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
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
                    /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: t.items.slice(i).map((h, f) => /* @__PURE__ */ e.jsx(
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
                      `overflow-${i + f}`
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
  mode: l = "form",
  action: r = "https://www.nhs.uk/search/",
  method: s = "get",
  name: n = "q",
  value: c,
  placeholder: a = "Search",
  visuallyHiddenLabel: t = "Search the NHS website",
  visuallyHiddenButton: u = "Search",
  className: o,
  disabled: m = !1,
  callbacks: i = {},
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
  const [b, v] = F(""), [h, f] = F(!1), H = A(void 0), J = A(null), I = A(null), R = l === "controlled" && c !== void 0, T = R ? c : b, Z = C((x) => {
    H.current && clearTimeout(H.current), H.current = setTimeout(() => {
      i.onChange && x.length >= p && i.onChange(x);
    }, N);
  }, [i.onChange, N, p]), V = C((x) => {
    const S = x.target.value;
    R || v(S), l !== "form" && Z(S);
  }, [R, l, Z]), O = C((x) => {
    const S = T.trim(), q = {
      query: S,
      timestamp: Date.now(),
      formData: new FormData(x.currentTarget)
    };
    l === "controlled" || l === "hybrid" && w ? (x.preventDefault(), i.onSearch && S.length >= p && i.onSearch(q)) : l === "hybrid" && i.onSearch && S.length >= p && i.onSearch(q);
  }, [l, T, i.onSearch, w, p]), P = C(() => {
    f(!0), i.onFocus?.();
  }, [i.onFocus]), Y = C(() => {
    f(!1), i.onBlur?.();
  }, [i.onBlur]), G = C(() => {
    R || v(""), i.onClear?.(), I.current?.focus();
  }, [R, i.onClear]);
  B(() => () => {
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
  ), X = () => !T || l === "form" ? null : /* @__PURE__ */ e.jsx(
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
      onClick: () => i.onSearch?.({ query: x.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-title", children: x.title }),
        x.description && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-description", children: x.description })
      ]
    }
  ) }, x.id)) });
  return /* @__PURE__ */ e.jsxs("search", { className: _("nhsuk-header__search", o, {
    "nhsuk-header__search--controlled": l === "controlled",
    "nhsuk-header__search--hybrid": l === "hybrid",
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
        action: l !== "controlled" ? r : void 0,
        method: l !== "controlled" ? s : void 0,
        onSubmit: O,
        ...g,
        children: [
          /* @__PURE__ */ e.jsx(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: t
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: I,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: l !== "controlled" ? n : void 0,
                type: "search",
                placeholder: a,
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
              disabled: m || d || l !== "form" && T.length < p,
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
  text: l,
  href: r,
  openInNewWindow: s = !1,
  className: n,
  ...c
}) => {
  const a = _(
    "nhsuk-action-link__link",
    n
  );
  return /* @__PURE__ */ e.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ e.jsxs(
    "a",
    {
      className: a,
      href: r,
      target: s ? "_blank" : void 0,
      rel: s ? "noopener noreferrer" : void 0,
      ...c,
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
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-action-link__text", children: l })
      ]
    }
  ) });
}, ae = K.forwardRef(
  ({
    variant: l = "primary",
    size: r = "default",
    fullWidth: s = !1,
    className: n,
    children: c,
    disabled: a,
    type: t = "button",
    ...u
  }, o) => {
    const m = _(
      "nhs-aria-button",
      `nhs-aria-button--${l}`,
      {
        [`nhs-aria-button--${r}`]: r !== "default",
        "nhs-aria-button--full-width": s,
        "nhs-aria-button--disabled": a
      },
      n
    );
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: o,
        type: t,
        className: m,
        disabled: a,
        ...u,
        children: c
      }
    );
  }
);
ae.displayName = "ButtonSSR";
const oe = ({
  text: l = "Back",
  html: r,
  href: s = "#",
  className: n,
  element: c = "a",
  onClick: a,
  ...t
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
    r ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : l
  ] });
  return /* @__PURE__ */ e.jsx("div", { className: u, children: c === "button" ? /* @__PURE__ */ e.jsx(
    "button",
    {
      className: o,
      onClick: a,
      type: "button",
      ...t,
      children: m()
    }
  ) : /* @__PURE__ */ e.jsx(
    "a",
    {
      className: o,
      href: s,
      ...t,
      children: m()
    }
  ) });
}, ue = ({
  text: l,
  html: r,
  children: s,
  color: n = "default",
  noBorder: c = !1,
  closable: a = !1,
  onClose: t,
  disabled: u = !1,
  className: o,
  ...m
}) => {
  const i = _(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${n}`]: n !== "default",
      "nhsuk-tag--no-border": c,
      "nhsuk-tag--closable": a,
      "nhsuk-tag--disabled": u
    },
    o
  ), d = (k) => {
    k.preventDefault(), k.stopPropagation(), !u && t && t();
  };
  return /* @__PURE__ */ e.jsxs("strong", { className: i, ...m, children: [
    s || (r ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : l),
    a && /* @__PURE__ */ e.jsx(
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
  htmlFor: l,
  className: r,
  isPageHeading: s = !1,
  size: n = "m",
  children: c,
  ...a
}) => {
  const t = _(
    "nhsuk-label",
    {
      [`nhsuk-label--${n}`]: n !== "m"
    },
    r
  ), u = s ? "h1" : "label";
  return /* @__PURE__ */ e.jsx(
    u,
    {
      className: t,
      htmlFor: s ? void 0 : l,
      ...a,
      children: s ? /* @__PURE__ */ e.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: l, children: c }) : c
    }
  );
}, me = ({
  level: l,
  className: r,
  text: s,
  html: n,
  children: c,
  size: a,
  marginBottom: t,
  ...u
}) => {
  const m = l ?? ((g) => {
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
  })(a), i = _(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${a}`]: a
    },
    r
  ), d = c || (n ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: n } }) : s), k = `h${m}`, j = t ? { ...u.style, marginBottom: t } : u.style;
  return ee(
    k,
    { className: i, ...u, style: j },
    d
  );
}, _e = ({
  id: l,
  className: r,
  children: s,
  ...n
}) => {
  const c = _("nhsuk-hint", r);
  return /* @__PURE__ */ e.jsx("div", { className: c, id: l, ...n, children: s });
}, ke = ({
  id: l,
  className: r,
  visuallyHiddenText: s = "Error:",
  children: n,
  ...c
}) => {
  const a = _("nhsuk-error-message", r);
  return /* @__PURE__ */ e.jsxs("span", { className: a, id: l, ...c, children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s,
      " "
    ] }),
    n
  ] });
}, xe = ({
  text: l = "Skip to main content",
  href: r = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const [c, a] = F(!1);
  B(() => {
    a(!0);
  }, []), B(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const u = (o) => {
      const m = o.target, i = m.getAttribute("href");
      if (i && i.startsWith("#")) {
        const d = document.querySelector(i);
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
            const i = m.__nhsSkipLinkTimeout;
            i && window.clearTimeout && window.clearTimeout(i);
          });
        } catch (m) {
          console.warn("SkipLink cleanup error:", m);
        }
      };
    } catch (o) {
      return console.warn("SkipLink initialization error:", o), () => {
      };
    }
  }, [c]);
  const t = _("nhsuk-skip-link", s);
  return /* @__PURE__ */ e.jsx(
    "a",
    {
      className: t,
      href: r,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": c ? "true" : "false",
      ...n,
      children: l
    }
  );
};
export {
  z as Account,
  ie as ActionLink,
  oe as BackLink,
  ae as Button,
  ke as ErrorMessage,
  he as HeaderSSR,
  ce as HeaderSearch,
  le as HeaderStatic,
  me as Heading,
  _e as Hint,
  de as Label,
  xe as SkipLink,
  ue as Tag
};
//# sourceMappingURL=ssr.js.map
