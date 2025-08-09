import o from "classnames";
import * as E from "react";
import { createElement as T, useState as B, useEffect as y } from "react";
var H = { exports: {} }, w = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var C;
function F() {
  if (C) return w;
  C = 1;
  var u = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function s(n, l, a) {
    var t = null;
    if (a !== void 0 && (t = "" + a), l.key !== void 0 && (t = "" + l.key), "key" in l) {
      a = {};
      for (var c in l)
        c !== "key" && (a[c] = l[c]);
    } else a = l;
    return l = a.ref, {
      $$typeof: u,
      type: n,
      key: t,
      ref: l !== void 0 ? l : null,
      props: a
    };
  }
  return w.Fragment = r, w.jsx = s, w.jsxs = s, w;
}
var R;
function Z() {
  return R || (R = 1, H.exports = F()), H.exports;
}
var e = Z();
const M = ({
  ariaLabel: u = "Account",
  items: r = [],
  className: s,
  variant: n = "default"
}) => {
  if (!r || r.length === 0)
    return null;
  const l = (a) => {
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
    ) : null, c = a.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a.html } }) : a.text, i = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      t,
      c
    ] });
    return a.href ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-account__link", href: a.href, children: i }) : a.action ? /* @__PURE__ */ e.jsx(
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
            children: i
          }
        )
      }
    ) : /* @__PURE__ */ e.jsx("span", { children: i });
  };
  return /* @__PURE__ */ e.jsx(
    "nav",
    {
      className: o(
        "nhsuk-account",
        {
          "nhsuk-account--white": n === "white"
        },
        s
      ),
      "aria-label": u,
      children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-account__list", children: r.map((a, t) => a && /* @__PURE__ */ e.jsx(
        "li",
        {
          className: o("nhsuk-account__item", a.className),
          children: l(a)
        },
        t
      )) })
    }
  );
}, A = ({
  action: u = "https://www.nhs.uk/search/",
  name: r = "q",
  placeholder: s = "Search",
  visuallyHiddenLabel: n = "Search the NHS website",
  visuallyHiddenButton: l = "Search",
  className: a,
  formAttributes: t = {},
  inputAttributes: c = {},
  buttonAttributes: i = {}
}) => {
  const d = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__search",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  );
  return /* @__PURE__ */ e.jsx("search", { className: o("nhsuk-header__search", a), children: /* @__PURE__ */ e.jsxs(
    "form",
    {
      className: "nhsuk-header__search-form",
      id: "search",
      action: u,
      method: "get",
      ...t,
      children: [
        /* @__PURE__ */ e.jsx(
          "label",
          {
            className: "nhsuk-u-visually-hidden",
            htmlFor: "search-field",
            children: n
          }
        ),
        /* @__PURE__ */ e.jsx(
          "input",
          {
            className: "nhsuk-header__search-input nhsuk-input",
            id: "search-field",
            name: r,
            type: "search",
            placeholder: s,
            autoComplete: "off",
            ...c
          }
        ),
        /* @__PURE__ */ e.jsxs(
          "button",
          {
            className: "nhsuk-header__search-submit",
            type: "submit",
            ...i,
            children: [
              d(),
              /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: l })
            ]
          }
        )
      ]
    }
  ) });
}, z = ({
  className: u,
  logo: r = {},
  service: s = {},
  organisation: n,
  search: l,
  account: a,
  navigation: t,
  containerClasses: c,
  variant: i = "default",
  attributes: d = {},
  ...k
}) => {
  const m = s.href && !r.href || s.href && s.href === r.href, _ = m ? s.href : r.href, f = o(
    "nhsuk-header",
    "nhsuk-header--ssr",
    // SSR version identifier
    {
      "nhsuk-header--organisation": i === "organisation" || n,
      "nhsuk-header--white": i === "white"
    },
    u
  ), p = o(
    "nhsuk-header__container",
    "nhsuk-width-container",
    c
  ), L = o(
    "nhsuk-header__navigation",
    t?.className
  ), S = () => /* @__PURE__ */ e.jsxs(
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
  ), b = () => r.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: r.src,
      width: "280",
      alt: r.ariaLabel || "NHS"
    }
  ) : S(), N = () => n ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      n.name,
      n.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        n.split
      ] })
    ] }),
    n.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: n.descriptor })
  ] }) : null, j = (h, x) => h ? x ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: x, children: h }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: h }) : null, g = () => !t?.items || t.items.length === 0 ? null : t.items.map((h, x) => /* @__PURE__ */ e.jsx(
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
    h.href || x
  )), v = () => l ? /* @__PURE__ */ e.jsx(A, { ...l }) : null;
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: f,
      role: "banner",
      "data-progressive-enhancement": "true",
      "data-navigation-items-count": t?.items?.length || 0,
      ...d,
      ...k,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: p, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            _ ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: _, children: [
              b(),
              N(),
              m && j(s.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              b(),
              N(),
              m && j(s.text)
            ] }),
            s.text && !m && j(s.text, s.href)
          ] }),
          (i === "organisation" || n) && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__content", id: "content-header", children: [
            n && /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__organisation", children: [
              /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name", children: n.name }),
              n.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-descriptor", children: n.descriptor })
            ] }),
            v()
          ] }),
          i !== "organisation" && !n && v(),
          /* @__PURE__ */ e.jsx(
            M,
            {
              ...a,
              variant: i === "white" ? "white" : "default"
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
                children: g()
              }
            ) })
          }
        )
      ]
    }
  );
}, J = ({
  className: u,
  logo: r = {},
  service: s = {},
  organisation: n,
  search: l,
  account: a,
  navigation: t,
  containerClasses: c,
  variant: i = "default",
  attributes: d = {},
  maxVisibleItems: k = 5,
  // New prop to control CSS-based overflow
  ...m
}) => {
  const _ = s.href && !r.href || s.href && s.href === r.href, f = _ ? s.href : r.href, p = o(
    "nhsuk-header",
    "nhsuk-header--static",
    // Static version identifier
    {
      "nhsuk-header--organisation": i === "organisation" || n,
      "nhsuk-header--white": i === "white"
    },
    u
  ), L = o(
    "nhsuk-header__container",
    "nhsuk-width-container",
    c
  ), S = o(
    "nhsuk-header__navigation",
    "nhsuk-header__navigation--static",
    // Static navigation identifier
    {
      "nhsuk-header__navigation--white": t?.white,
      "nhsuk-header__navigation--justified": t?.justified
    },
    t?.className
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
  ) : b(), j = () => n ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      n.name,
      n.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        n.split
      ] })
    ] }),
    n.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: n.descriptor })
  ] }) : null, g = (h, x) => h ? x ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: x, children: h }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: h }) : null, v = (h) => {
    if (h.active || h.current) {
      const x = h.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
      return /* @__PURE__ */ e.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: x });
    }
    return h.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
  };
  return /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: p,
      role: "banner",
      "data-module": "nhsuk-header-static",
      ...d,
      ...m,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: L, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            f ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: f, children: [
              N(),
              j(),
              _ && g(s.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              N(),
              j(),
              _ && g(s.text)
            ] }),
            s.text && !_ && g(s.text, s.href)
          ] }),
          l && /* @__PURE__ */ e.jsx(A, { ...l }),
          /* @__PURE__ */ e.jsx(
            M,
            {
              ...a,
              variant: i === "white" ? "white" : "default"
            }
          )
        ] }),
        t && t.items && t.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: S,
            "aria-label": t.ariaLabel || "Menu",
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: o(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  "nhsuk-header__navigation-container--static",
                  c
                ),
                children: /* @__PURE__ */ e.jsxs("ul", { className: "nhsuk-header__navigation-list nhsuk-header__navigation-list--primary", children: [
                  t.items.slice(0, k).map((h, x) => /* @__PURE__ */ e.jsx(
                    "li",
                    {
                      className: o(
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
                    x
                  )),
                  t.items.length > k && /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more nhsuk-header__navigation-item--static", children: /* @__PURE__ */ e.jsxs("details", { className: "nhsuk-header__navigation-details", children: [
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
                    /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__navigation-dropdown", children: t.items.slice(k).map((h, x) => /* @__PURE__ */ e.jsx(
                      "li",
                      {
                        className: o(
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
                      `overflow-${k + x}`
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
}, D = ({
  text: u,
  href: r,
  openInNewWindow: s = !1,
  className: n,
  ...l
}) => {
  const a = o(
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
      ...l,
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
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-action-link__text", children: u })
      ]
    }
  ) });
}, q = E.forwardRef(
  ({
    variant: u = "primary",
    size: r = "default",
    fullWidth: s = !1,
    className: n,
    children: l,
    disabled: a,
    type: t = "button",
    ...c
  }, i) => {
    const d = o(
      "nhs-aria-button",
      `nhs-aria-button--${u}`,
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
        ref: i,
        type: t,
        className: d,
        disabled: a,
        ...c,
        children: l
      }
    );
  }
);
q.displayName = "ButtonSSR";
const P = ({
  text: u = "Back",
  html: r,
  href: s = "#",
  className: n,
  element: l = "a",
  onClick: a,
  ...t
}) => {
  const c = o(
    "nhsuk-back-link",
    n
  ), i = o(
    "nhsuk-back-link__link"
  ), d = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
    r ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : u
  ] });
  return /* @__PURE__ */ e.jsx("div", { className: c, children: l === "button" ? /* @__PURE__ */ e.jsx(
    "button",
    {
      className: i,
      onClick: a,
      type: "button",
      ...t,
      children: d()
    }
  ) : /* @__PURE__ */ e.jsx(
    "a",
    {
      className: i,
      href: s,
      ...t,
      children: d()
    }
  ) });
}, O = ({
  text: u,
  html: r,
  children: s,
  color: n = "default",
  noBorder: l = !1,
  closable: a = !1,
  onClose: t,
  disabled: c = !1,
  className: i,
  ...d
}) => {
  const k = o(
    "nhsuk-tag",
    {
      [`nhsuk-tag--${n}`]: n !== "default",
      "nhsuk-tag--no-border": l,
      "nhsuk-tag--closable": a,
      "nhsuk-tag--disabled": c
    },
    i
  ), m = (_) => {
    _.preventDefault(), _.stopPropagation(), !c && t && t();
  };
  return /* @__PURE__ */ e.jsxs("strong", { className: k, ...d, children: [
    s || (r ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r } }) : u),
    a && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: m,
        disabled: c,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
}, Y = ({
  htmlFor: u,
  className: r,
  isPageHeading: s = !1,
  size: n = "m",
  children: l,
  ...a
}) => {
  const t = o(
    "nhsuk-label",
    {
      [`nhsuk-label--${n}`]: n !== "m"
    },
    r
  ), c = s ? "h1" : "label";
  return /* @__PURE__ */ e.jsx(
    c,
    {
      className: t,
      htmlFor: s ? void 0 : u,
      ...a,
      children: s ? /* @__PURE__ */ e.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: u, children: l }) : l
    }
  );
}, G = ({
  level: u,
  className: r,
  text: s,
  html: n,
  children: l,
  size: a,
  marginBottom: t,
  ...c
}) => {
  const d = u ?? ((p) => {
    switch (p) {
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
  })(a), k = o(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${a}`]: a
    },
    r
  ), m = l || (n ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: n } }) : s), _ = `h${d}`, f = t ? { ...c.style, marginBottom: t } : c.style;
  return T(
    _,
    { className: k, ...c, style: f },
    m
  );
}, Q = ({
  id: u,
  className: r,
  children: s,
  ...n
}) => {
  const l = o("nhsuk-hint", r);
  return /* @__PURE__ */ e.jsx("div", { className: l, id: u, ...n, children: s });
}, U = ({
  id: u,
  className: r,
  visuallyHiddenText: s = "Error:",
  children: n,
  ...l
}) => {
  const a = o("nhsuk-error-message", r);
  return /* @__PURE__ */ e.jsxs("span", { className: a, id: u, ...l, children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s,
      " "
    ] }),
    n
  ] });
}, V = ({
  text: u = "Skip to main content",
  href: r = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const [l, a] = B(!1);
  y(() => {
    a(!0);
  }, []), y(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const c = (i) => {
      const d = i.target, k = d.getAttribute("href");
      if (k && k.startsWith("#")) {
        const m = document.querySelector(k);
        if (m) {
          m.hasAttribute("tabindex") || m.setAttribute("tabindex", "-1"), m.focus(), m.classList.add("nhsuk-skip-link-focused-element");
          const _ = window.setTimeout(() => {
            m.classList.remove("nhsuk-skip-link-focused-element"), m.getAttribute("tabindex") === "-1" && m.removeAttribute("tabindex");
          }, 3e3);
          d.__nhsSkipLinkTimeout = _;
        }
      }
    };
    try {
      const i = document.querySelectorAll(".nhsuk-skip-link");
      return i.forEach((d) => {
        d.addEventListener("click", c);
      }), () => {
        try {
          i.forEach((d) => {
            d.removeEventListener("click", c);
            const k = d.__nhsSkipLinkTimeout;
            k && window.clearTimeout && window.clearTimeout(k);
          });
        } catch (d) {
          console.warn("SkipLink cleanup error:", d);
        }
      };
    } catch (i) {
      return console.warn("SkipLink initialization error:", i), () => {
      };
    }
  }, [l]);
  const t = o("nhsuk-skip-link", s);
  return /* @__PURE__ */ e.jsx(
    "a",
    {
      className: t,
      href: r,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": l ? "true" : "false",
      ...n,
      children: u
    }
  );
};
export {
  M as Account,
  D as ActionLink,
  P as BackLink,
  q as Button,
  U as ErrorMessage,
  z as HeaderSSR,
  A as HeaderSearch,
  J as HeaderStatic,
  G as Heading,
  Q as Hint,
  Y as Label,
  V as SkipLink,
  O as Tag
};
//# sourceMappingURL=ssr.js.map
