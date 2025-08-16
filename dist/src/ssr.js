import { j as e, c as d } from "../SkipLink-D92eaicu.js";
import { S as de } from "../SkipLink-D92eaicu.js";
import * as P from "react";
import { useState as R, useRef as F, useCallback as C, useEffect as U, createElement as W } from "react";
const A = ({
  ariaLabel: h = "Account",
  items: a = [],
  className: n,
  variant: s = "default"
}) => {
  if (!a || a.length === 0)
    return null;
  const i = (l) => {
    const t = l.icon ? /* @__PURE__ */ e.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ e.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, u = l.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text, o = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      t,
      u
    ] });
    return l.href ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-account__link", href: l.href, children: o }) : l.action ? /* @__PURE__ */ e.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: l.action,
        method: l.method || "post",
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
      className: d(
        "nhsuk-account",
        {
          "nhsuk-account--white": s === "white"
        },
        n
      ),
      "aria-label": h,
      children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-account__list", children: a.map((l, t) => l && /* @__PURE__ */ e.jsx(
        "li",
        {
          className: d("nhsuk-account__item", l.className),
          children: i(l)
        },
        t
      )) })
    }
  );
}, X = ({
  mode: h = "form",
  action: a = "https://www.nhs.uk/search/",
  method: n = "get",
  name: s = "q",
  value: i,
  placeholder: l = "Search",
  visuallyHiddenLabel: t = "Search the NHS website",
  visuallyHiddenButton: u = "Search",
  className: o,
  disabled: f = !1,
  callbacks: c = {},
  isLoading: m = !1,
  showResults: x = !1,
  results: p = [],
  formAttributes: v = {},
  inputAttributes: H = {},
  buttonAttributes: L = {},
  preventDefaultSubmit: w = !1,
  debounceMs: N = 300,
  minQueryLength: j = 1
}) => {
  const [b, g] = R(""), [r, k] = R(!1), y = F(void 0), $ = F(null), T = F(null), B = h === "controlled" && i !== void 0, M = B ? i : b, Z = C((_) => {
    y.current && clearTimeout(y.current), y.current = setTimeout(() => {
      c.onChange && _.length >= j && c.onChange(_);
    }, N);
  }, [c.onChange, N, j]), I = C((_) => {
    const S = _.target.value;
    B || g(S), h !== "form" && Z(S);
  }, [B, h, Z]), E = C((_) => {
    const S = M.trim(), D = {
      query: S,
      timestamp: Date.now(),
      formData: new FormData(_.currentTarget)
    };
    h === "controlled" || h === "hybrid" && w ? (_.preventDefault(), c.onSearch && S.length >= j && c.onSearch(D)) : h === "hybrid" && c.onSearch && S.length >= j && c.onSearch(D);
  }, [h, M, c.onSearch, w, j]), z = C(() => {
    k(!0), c.onFocus?.();
  }, [c.onFocus]), V = C(() => {
    k(!1), c.onBlur?.();
  }, [c.onBlur]), q = C(() => {
    B || g(""), c.onClear?.(), T.current?.focus();
  }, [B, c.onClear]);
  U(() => () => {
    y.current && clearTimeout(y.current);
  }, []);
  const O = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: d("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": m
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), G = () => /* @__PURE__ */ e.jsx(
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
  ), J = () => !M || h === "form" ? null : /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: q,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ e.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ e.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), K = () => !x || !p.length || !r ? null : /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: p.map((_) => /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: _.href ? /* @__PURE__ */ e.jsxs("a", { href: _.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-title", children: _.title }),
    _.description && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-description", children: _.description })
  ] }) : /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => c.onSearch?.({ query: _.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-title", children: _.title }),
        _.description && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-description", children: _.description })
      ]
    }
  ) }, _.id)) });
  return /* @__PURE__ */ e.jsxs("search", { className: d("nhsuk-header__search", o, {
    "nhsuk-header__search--controlled": h === "controlled",
    "nhsuk-header__search--hybrid": h === "hybrid",
    "nhsuk-header__search--loading": m,
    "nhsuk-header__search--focused": r,
    "nhsuk-header__search--has-results": x && p.length > 0
  }), children: [
    /* @__PURE__ */ e.jsxs(
      "form",
      {
        ref: $,
        className: "nhsuk-header__search-form",
        id: "search",
        action: h !== "controlled" ? a : void 0,
        method: h !== "controlled" ? n : void 0,
        onSubmit: E,
        ...v,
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
                ref: T,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: h !== "controlled" ? s : void 0,
                type: "search",
                placeholder: l,
                autoComplete: "off",
                value: M,
                onChange: I,
                onFocus: z,
                onBlur: V,
                disabled: f || m,
                "aria-expanded": x && p.length > 0,
                "aria-haspopup": "listbox",
                ...H
              }
            ),
            J()
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: f || m || h !== "form" && M.length < j,
              ...L,
              children: [
                m ? G() : O(),
                /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: m ? "Searching..." : u })
              ]
            }
          )
        ]
      }
    ),
    K()
  ] });
}, se = ({
  className: h,
  logo: a = {},
  service: n = {},
  organisation: s,
  search: i,
  account: l,
  navigation: t,
  containerClasses: u,
  variant: o = "default",
  attributes: f = {},
  ...c
}) => {
  const m = n.href && !a.href || n.href && n.href === a.href, x = m ? n.href : a.href, p = d(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": o === "organisation" || s,
      "nhsuk-header--white": o === "white"
    },
    h
  ), v = d(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), H = d(
    "nhsuk-header__navigation",
    t?.className
  ), L = () => /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": a.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ e.jsx("title", { children: a.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), w = () => a.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: a.src,
      width: "280",
      alt: a.ariaLabel || "NHS"
    }
  ) : L(), N = () => s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      s.name,
      s.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        s.split
      ] })
    ] }),
    s.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: s.descriptor })
  ] }) : null, j = (r, k) => r ? k ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: k, children: r }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: r }) : null, b = () => !t?.items || t.items.length === 0 ? null : t.items.map((r, k) => /* @__PURE__ */ e.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ e.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: r.href,
          ...r.attributes || {},
          children: r.text
        }
      )
    },
    r.href || k
  )), g = () => i ? /* @__PURE__ */ e.jsx(X, { ...i }) : null;
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: p,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": t?.items?.length || 0,
      ...f,
      ...c,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: v, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              w(),
              N(),
              m && j(n.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              w(),
              N(),
              m && j(n.text)
            ] }),
            n.text && !m && j(n.text, n.href)
          ] }),
          (o === "organisation" || s) && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            s && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name", children: s.name }),
              s.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: s.descriptor })
            ] }),
            g()
          ] }),
          o !== "organisation" && !s && g(),
          /* @__PURE__ */ e.jsx(
            A,
            {
              ...l,
              variant: o === "white" ? "white" : "default"
            }
          )
        ] }),
        t && t.items && t.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: H,
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
}, ne = ({
  className: h,
  logo: a = {},
  service: n = {},
  organisation: s,
  search: i,
  account: l,
  navigation: t,
  containerClasses: u,
  variant: o = "default",
  attributes: f = {},
  maxVisibleItems: c = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const x = n.href && !a.href || n.href && n.href === a.href, p = x ? n.href : a.href, v = d(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": o === "organisation" || s,
      "nhsuk-header--white": o === "white"
    },
    h
  ), H = d(
    "nhsuk-header__container",
    "nhsuk-width-container",
    u
  ), L = d(
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
      "aria-label": a.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ e.jsx("title", { children: a.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "currentcolor",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), N = () => a.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: a.src,
      alt: a.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : w(), j = () => s ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      s.name,
      s.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        s.split
      ] })
    ] }),
    s.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: s.descriptor })
  ] }) : null, b = (r, k) => r ? k ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: k, children: r }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: r }) : null, g = (r) => {
    if (r.active || r.current) {
      const k = r.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r.html } }) : r.text;
      return /* @__PURE__ */ e.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: k });
    }
    return r.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r.html } }) : r.text;
  };
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: v,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...f,
      ...m,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: H, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              N(),
              j(),
              x && b(n.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              N(),
              j(),
              x && b(n.text)
            ] }),
            n.text && !x && b(n.text, n.href)
          ] }),
          /* @__PURE__ */ e.jsx(
            A,
            {
              ...l,
              variant: o === "white" ? "white" : "default"
            }
          )
        ] }),
        t && t.items && t.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: L,
            "aria-label": t.ariaLabel || "Menu",
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: d(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  u
                ),
                children: /* @__PURE__ */ e.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  t.items.slice(0, c).map((r, k) => /* @__PURE__ */ e.jsx(
                    "li",
                    {
                      className: d(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": r.active || r.current
                        },
                        r.className
                      ),
                      ...r.attributes || {},
                      children: /* @__PURE__ */ e.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: r.href,
                          ...r.active || r.current ? {
                            "aria-current": r.current ? "page" : "true"
                          } : {},
                          children: g(r)
                        }
                      )
                    },
                    k
                  )),
                  t.items.length > c && /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ e.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
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
                    /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: t.items.slice(c).map((r, k) => /* @__PURE__ */ e.jsx(
                      "li",
                      {
                        className: d(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": r.active || r.current
                          }
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: r.href,
                            ...r.active || r.current ? {
                              "aria-current": r.current ? "page" : "true"
                            } : {},
                            children: g(r)
                          }
                        )
                      },
                      `overflow-${c + k}`
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
}, ae = ({
  text: h,
  href: a,
  openInNewWindow: n = !1,
  className: s,
  ...i
}) => {
  const l = d(
    "nhsuk-action-link__link",
    s
  );
  return /* @__PURE__ */ e.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ e.jsxs(
    "a",
    {
      className: l,
      href: a,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...i,
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
}, Y = P.forwardRef(
  ({
    variant: h = "primary",
    size: a = "default",
    fullWidth: n = !1,
    className: s,
    children: i,
    disabled: l,
    type: t = "button",
    ...u
  }, o) => {
    const f = d(
      "nhs-aria-button",
      `nhs-aria-button--${h}`,
      {
        [`nhs-aria-button--${a}`]: a !== "default",
        "nhs-aria-button--full-width": n,
        "nhs-aria-button--disabled": l
      },
      s
    );
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: o,
        type: t,
        className: f,
        disabled: l,
        ...u,
        children: i
      }
    );
  }
);
Y.displayName = "ButtonSSR";
const re = ({
  text: h = "Back",
  html: a,
  href: n = "#",
  className: s,
  element: i = "a",
  onClick: l,
  ...t
}) => {
  const u = d(
    "nhsuk-back-link",
    s
  ), o = d(
    "nhsuk-back-link__link"
  ), f = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
    a ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : h
  ] });
  return /* @__PURE__ */ e.jsx("div", { className: u, children: i === "button" ? /* @__PURE__ */ e.jsx(
    "button",
    {
      className: o,
      onClick: l,
      type: "button",
      ...t,
      children: f()
    }
  ) : /* @__PURE__ */ e.jsx(
    "a",
    {
      className: o,
      href: n,
      ...t,
      children: f()
    }
  ) });
}, te = ({
  text: h,
  html: a,
  children: n,
  color: s = "default",
  noBorder: i = !1,
  closable: l = !1,
  onClose: t,
  disabled: u = !1,
  className: o,
  ...f
}) => {
  const c = d(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${s}`]: s !== "default",
      "nhsuk-tag--no-border": i,
      "nhsuk-tag--closable": l,
      "nhsuk-tag--disabled": u
    },
    o
  ), m = (x) => {
    x.preventDefault(), x.stopPropagation(), !u && t && t();
  };
  return /* @__PURE__ */ e.jsxs("strong", { className: c, ...f, children: [
    n || (a ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : h),
    l && /* @__PURE__ */ e.jsx(
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
}, he = ({
  htmlFor: h,
  className: a,
  isPageHeading: n = !1,
  size: s = "m",
  children: i,
  ...l
}) => {
  const t = d(
    "nhsuk-label",
    {
      [`nhsuk-label--${s}`]: s !== "m"
    },
    a
  ), u = n ? "h1" : "label";
  return /* @__PURE__ */ e.jsx(
    u,
    {
      className: t,
      htmlFor: n ? void 0 : h,
      ...l,
      children: n ? /* @__PURE__ */ e.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: h, children: i }) : i
    }
  );
}, le = ({
  level: h,
  className: a,
  text: n,
  html: s,
  children: i,
  size: l,
  marginBottom: t,
  ...u
}) => {
  const f = h ?? ((v) => {
    switch (v) {
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
  })(l), c = d(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${l}`]: l
    },
    a
  ), m = i || (s ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: s } }) : n), x = `h${f}`, p = t ? { ...u.style, marginBottom: t } : u.style;
  return W(
    x,
    { className: c, ...u, style: p },
    m
  );
}, ce = ({
  id: h,
  className: a,
  children: n,
  ...s
}) => {
  const i = d("nhsuk-hint", a);
  return /* @__PURE__ */ e.jsx("div", { className: i, id: h, ...s, children: n });
}, ie = ({
  id: h,
  className: a,
  visuallyHiddenText: n = "Error:",
  children: s,
  ...i
}) => {
  const l = d("nhsuk-error-message", a);
  return /* @__PURE__ */ e.jsxs("span", { className: l, id: h, ...i, children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      n,
      " "
    ] }),
    s
  ] });
};
export {
  A as Account,
  ae as ActionLink,
  re as BackLink,
  Y as Button,
  ie as ErrorMessage,
  se as HeaderSSR,
  X as HeaderSearch,
  ne as HeaderStatic,
  le as Heading,
  ce as Hint,
  he as Label,
  de as SkipLink,
  te as Tag
};
//# sourceMappingURL=ssr.js.map
