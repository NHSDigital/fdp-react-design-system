import o from "classnames";
import * as B from "react";
import { createElement as F, useState as Z, useEffect as R } from "react";
var M = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A;
function q() {
  if (A) return w;
  A = 1;
  var c = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(a, r, l) {
    var h = null;
    if (l !== void 0 && (h = "" + l), r.key !== void 0 && (h = "" + r.key), "key" in r) {
      l = {};
      for (var i in r)
        i !== "key" && (l[i] = r[i]);
    } else l = r;
    return r = l.ref, {
      $$typeof: c,
      type: a,
      key: h,
      ref: r !== void 0 ? r : null,
      props: l
    };
  }
  return w.Fragment = t, w.jsx = n, w.jsxs = n, w;
}
var E;
function I() {
  return E || (E = 1, M.exports = q()), M.exports;
}
var e = I();
const D = ({
  className: c,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: r,
  account: l,
  navigation: h,
  containerClasses: i,
  variant: d = "default",
  attributes: u = {},
  ...k
}) => {
  const m = n.href && !t.href || n.href && n.href === t.href, x = m ? n.href : t.href, p = o(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    c
  ), N = o(
    "nhsuk-header__container",
    "nhsuk-width-container",
    i
  ), S = o(
    "nhsuk-header__navigation",
    h?.className
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
  ), b = () => t.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: t.src,
      width: "280",
      alt: t.ariaLabel || "NHS"
    }
  ) : y(), v = () => a ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, j = (_, s) => _ ? s ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: s, children: _ }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: _ }) : null, g = () => !h?.items || h.items.length === 0 ? null : h.items.map((_, s) => /* @__PURE__ */ e.jsx(
    "li",
    {
      className: "nhsuk-header__navigation-item",
      "data-navigation-item": "true",
      children: /* @__PURE__ */ e.jsx(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: _.href,
          ..._.attributes || {},
          children: _.text
        }
      )
    },
    _.href || s
  )), H = () => !l?.items || l.items.length === 0 ? null : l.items.map((_, s) => /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__account-item", children: /* @__PURE__ */ e.jsx(
    "a",
    {
      className: "nhsuk-header__account-link",
      href: _.href,
      children: _.text
    }
  ) }, _.href || s)), L = () => r ? /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search", children: /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-wrap", id: "wrap-search", children: /* @__PURE__ */ e.jsxs(
    "form",
    {
      className: "nhsuk-header__search-form",
      role: "search",
      action: r.action || "/search",
      method: "get",
      children: [
        /* @__PURE__ */ e.jsx("label", { className: "nhsuk-u-visually-hidden", htmlFor: "search-field", children: r.visuallyHiddenLabel || "Search the NHS website" }),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: "nhsuk-header__search-input nhsuk-input",
            id: "search-field",
            name: r.name || "q",
            type: "search",
            placeholder: r.placeholder || "Search",
            autoComplete: "off"
          }
        ),
        /* @__PURE__ */ e.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
          /* @__PURE__ */ e.jsx("svg", { className: "nhsuk-icon nhsuk-icon__search", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ e.jsx("path", { d: "m19.71 18.29-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" }) }),
          /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: r.visuallyHiddenButton || "Search" })
        ] })
      ]
    }
  ) }) }) : null;
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: p,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": h?.items?.length || 0,
      ...u,
      ...k,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: N, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            x ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: x, children: [
              b(),
              v(),
              m && j(n.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              b(),
              v(),
              m && j(n.text)
            ] }),
            n.text && !m && j(n.text, n.href)
          ] }),
          (d === "organisation" || a) && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            a && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name", children: a.name }),
              a.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: a.descriptor })
            ] }),
            L()
          ] }),
          d !== "organisation" && !a && L(),
          l && /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__account", children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__account-list", children: H() }) })
        ] }),
        h && h.items && h.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: S,
            id: "header-navigation",
            role: "navigation",
            "aria-label": h.ariaLabel || "Primary navigation",
            "data-navigation-enhanced": "false",
            children: /* @__PURE__ */ e.jsx("div", { className: "nhsuk-width-container", children: /* @__PURE__ */ e.jsx(
              "ul",
              {
                className: "nhsuk-header__navigation-list",
                "data-navigation-list": "true",
                children: g()
              }
            ) })
          }
        )
      ]
    }
  );
}, P = ({
  className: c,
  logo: t = {},
  service: n = {},
  organisation: a,
  search: r,
  account: l,
  navigation: h,
  containerClasses: i,
  variant: d = "default",
  attributes: u = {},
  maxVisibleItems: k = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const x = n.href && !t.href || n.href && n.href === t.href, p = x ? n.href : t.href, N = o(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": d === "organisation" || a,
      "nhsuk-header--white": d === "white"
    },
    c
  ), S = o(
    "nhsuk-header__container",
    "nhsuk-width-container",
    i
  ), y = o(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": h?.white,
      "nhsuk-header__navigation--justified": h?.justified
    },
    h?.className
  ), b = () => /* @__PURE__ */ e.jsxs(
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
  ), v = () => t.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__logo",
      src: t.src,
      alt: t.ariaLabel || "",
      width: "100",
      height: "40"
    }
  ) : b(), j = () => a ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      a.name,
      a.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        a.split
      ] })
    ] }),
    a.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: a.descriptor })
  ] }) : null, g = (s, f) => s ? f ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: f, children: s }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: s }) : null, H = (s) => {
    const f = s.icon ? /* @__PURE__ */ e.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: /* @__PURE__ */ e.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, T = s.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, C = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      f,
      T
    ] });
    return s.href ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__account-link", href: s.href, children: C }) : s.action ? /* @__PURE__ */ e.jsx(
      "form",
      {
        className: "nhsuk-header__account-form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "nhsuk-header__account-button",
            type: "submit",
            role: "button",
            children: C
          }
        )
      }
    ) : C;
  }, L = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), _ = (s) => {
    if (s.active || s.current) {
      const f = s.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text;
      return /* @__PURE__ */ e.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: f });
    }
    return s.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text;
  };
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: N,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...u,
      ...m,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: S, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            p ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: p, children: [
              v(),
              j(),
              x && g(n.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              v(),
              j(),
              x && g(n.text)
            ] }),
            n.text && !x && g(n.text, n.href)
          ] }),
          r && /* @__PURE__ */ e.jsx("search", { className: "nhsuk-header__search", children: /* @__PURE__ */ e.jsxs(
            "form",
            {
              className: "nhsuk-header__search-form",
              id: "search",
              action: r.action || "https://www.nhs.uk/search/",
              method: "get",
              children: [
                /* @__PURE__ */ e.jsx(
                  "label",
                  {
                    className: "nhsuk-u-visually-hidden",
                    htmlFor: "search-field",
                    children: r.visuallyHiddenLabel || "Search the NHS website"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  "input",
                  {
                    className: "nhsuk-header__search-input nhsuk-input",
                    id: "search-field",
                    name: r.name || "q",
                    type: "search",
                    placeholder: r.placeholder || "Search",
                    autoComplete: "off"
                  }
                ),
                /* @__PURE__ */ e.jsxs("button", { className: "nhsuk-header__search-submit", type: "submit", children: [
                  L(),
                  /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: r.visuallyHiddenButton || "Search" })
                ] })
              ]
            }
          ) }),
          l && l.items && l.items.length > 0 && /* @__PURE__ */ e.jsx(
            "nav",
            {
              className: o("nhsuk-header__account", l.className),
              "aria-label": l.ariaLabel || "Account",
              children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__account-list", children: l.items.map((s, f) => s && /* @__PURE__ */ e.jsx(
                "li",
                {
                  className: o("nhsuk-header__account-item", s.className),
                  children: H(s)
                },
                f
              )) })
            }
          )
        ] }),
        h && h.items && h.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: y,
            "aria-label": h.ariaLabel || "Menu",
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: o(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  i
                ),
                children: /* @__PURE__ */ e.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  h.items.slice(0, k).map((s, f) => /* @__PURE__ */ e.jsx(
                    "li",
                    {
                      className: o(
                        "nhsuk-header__navigation-item",
                        "nhsuk-header__navigation-item--primary",
                        {
                          "nhsuk-header__navigation-item--current": s.active || s.current
                        },
                        s.className
                      ),
                      ...s.attributes || {},
                      children: /* @__PURE__ */ e.jsx(
                        "a",
                        {
                          className: "nhsuk-header__navigation-link",
                          href: s.href,
                          ...s.active || s.current ? {
                            "aria-current": s.current ? "page" : "true"
                          } : {},
                          children: _(s)
                        }
                      )
                    },
                    f
                  )),
                  h.items.length > k && /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ e.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
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
                    /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: h.items.slice(k).map((s, f) => /* @__PURE__ */ e.jsx(
                      "li",
                      {
                        className: o(
                          "nhsuk-header__navigation-dropdown-item",
                          {
                            "nhsuk-header__navigation-dropdown-item--current": s.active || s.current
                          }
                        ),
                        children: /* @__PURE__ */ e.jsx(
                          "a",
                          {
                            className: "nhsuk-header__navigation-dropdown-link",
                            href: s.href,
                            ...s.active || s.current ? {
                              "aria-current": s.current ? "page" : "true"
                            } : {},
                            children: _(s)
                          }
                        )
                      },
                      `overflow-${k + f}`
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
}, O = ({
  text: c,
  href: t,
  openInNewWindow: n = !1,
  className: a,
  ...r
}) => {
  const l = o(
    "nhsuk-action-link__link",
    a
  );
  return /* @__PURE__ */ e.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ e.jsxs(
    "a",
    {
      className: l,
      href: t,
      target: n ? "_blank" : void 0,
      rel: n ? "noopener noreferrer" : void 0,
      ...r,
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
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-action-link__text", children: c })
      ]
    }
  ) });
}, $ = B.forwardRef(
  ({
    variant: c = "primary",
    size: t = "default",
    fullWidth: n = !1,
    className: a,
    children: r,
    disabled: l,
    type: h = "button",
    ...i
  }, d) => {
    const u = o(
      "nhs-aria-button",
      `nhs-aria-button--${c}`,
      {
        [`nhs-aria-button--${t}`]: t !== "default",
        "nhs-aria-button--full-width": n,
        "nhs-aria-button--disabled": l
      },
      a
    );
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: d,
        type: h,
        className: u,
        disabled: l,
        ...i,
        children: r
      }
    );
  }
);
$.displayName = "ButtonSSR";
const Y = ({
  text: c = "Back",
  html: t,
  href: n = "#",
  className: a,
  element: r = "a",
  onClick: l,
  ...h
}) => {
  const i = o(
    "nhsuk-back-link",
    a
  ), d = o(
    "nhsuk-back-link__link"
  ), u = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
    t ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : c
  ] });
  return /* @__PURE__ */ e.jsx("div", { className: i, children: r === "button" ? /* @__PURE__ */ e.jsx(
    "button",
    {
      className: d,
      onClick: l,
      type: "button",
      ...h,
      children: u()
    }
  ) : /* @__PURE__ */ e.jsx(
    "a",
    {
      className: d,
      href: n,
      ...h,
      children: u()
    }
  ) });
}, G = ({
  text: c,
  html: t,
  children: n,
  color: a = "default",
  noBorder: r = !1,
  closable: l = !1,
  onClose: h,
  disabled: i = !1,
  className: d,
  ...u
}) => {
  const k = o(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${a}`]: a !== "default",
      "nhsuk-tag--no-border": r,
      "nhsuk-tag--closable": l,
      "nhsuk-tag--disabled": i
    },
    d
  ), m = (x) => {
    x.preventDefault(), x.stopPropagation(), !i && h && h();
  };
  return /* @__PURE__ */ e.jsxs("strong", { className: k, ...u, children: [
    n || (t ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: t } }) : c),
    l && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: m,
        disabled: i,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, Q = ({
  htmlFor: c,
  className: t,
  isPageHeading: n = !1,
  size: a = "m",
  children: r,
  ...l
}) => {
  const h = o(
    "nhsuk-label",
    {
      [`nhsuk-label--${a}`]: a !== "m"
    },
    t
  ), i = n ? "h1" : "label";
  return /* @__PURE__ */ e.jsx(
    i,
    {
      className: h,
      htmlFor: n ? void 0 : c,
      ...l,
      children: n ? /* @__PURE__ */ e.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: c, children: r }) : r
    }
  );
}, U = ({
  level: c,
  className: t,
  text: n,
  html: a,
  children: r,
  size: l,
  marginBottom: h,
  ...i
}) => {
  const u = c ?? ((N) => {
    switch (N) {
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
  })(l), k = o(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${l}`]: l
    },
    t
  ), m = r || (a ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n), x = `h${u}`, p = h ? { ...i.style, marginBottom: h } : i.style;
  return F(
    x,
    { className: k, ...i, style: p },
    m
  );
}, V = ({
  id: c,
  className: t,
  children: n,
  ...a
}) => {
  const r = o("nhsuk-hint", t);
  return /* @__PURE__ */ e.jsx("div", { className: r, id: c, ...a, children: n });
}, W = ({
  id: c,
  className: t,
  visuallyHiddenText: n = "Error:",
  children: a,
  ...r
}) => {
  const l = o("nhsuk-error-message", t);
  return /* @__PURE__ */ e.jsxs("span", { className: l, id: c, ...r, children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      n,
      " "
    ] }),
    a
  ] });
}, X = ({
  text: c = "Skip to main content",
  href: t = "#maincontent",
  classes: n,
  attributes: a = {}
}) => {
  const [r, l] = Z(!1);
  R(() => {
    l(!0);
  }, []), R(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const i = (d) => {
      const u = d.target, k = u.getAttribute("href");
      if (k && k.startsWith("#")) {
        const m = document.querySelector(k);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const x = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
          }, 3e3);
          u.__nhsSkipLinkTimeout = x;
        }
      }
    };
    try {
      const d = document.querySelectorAll(".nhsuk-skip-link");
      return d.forEach((u) => {
        u.addEventListener("click", i);
      }), () => {
        try {
          d.forEach((u) => {
            u.removeEventListener("click", i);
            const k = u.__nhsSkipLinkTimeout;
            k && window.clearTimeout && window.clearTimeout(k);
          });
        } catch (u) {
          console.warn("SkipLink cleanup error:", u);
        }
      };
    } catch (d) {
      return console.warn("SkipLink initialization error:", d), () => {
      };
    }
  }, [r]);
  const h = o("nhsuk-skip-link", n);
  return /* @__PURE__ */ e.jsx(
    "a",
    {
      className: h,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": r ? "true" : "false",
      ...a,
      children: c
    }
  );
};
export {
  O as ActionLink,
  Y as BackLink,
  $ as Button,
  W as ErrorMessage,
  D as HeaderSSR,
  P as HeaderStatic,
  U as Heading,
  V as Hint,
  Q as Label,
  X as SkipLink,
  G as Tag
};
//# sourceMappingURL=ssr.js.map
