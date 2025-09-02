import * as G from "react";
import { useState as y, useRef as P, useCallback as M, useEffect as R, createElement as J } from "react";
import { j as e, c as x } from "../SkipLink-CFQznirl.js";
import { S as ge } from "../SkipLink-CFQznirl.js";
const W = ({
  ariaLabel: s = "Account",
  items: a = [],
  className: r,
  variant: l = "default"
}) => {
  if (!a || a.length === 0)
    return null;
  const o = (n) => {
    const i = n.icon ? /* @__PURE__ */ e.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": n.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ e.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, u = n.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: n.html } }) : n.text, m = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      i,
      u
    ] });
    return n.href ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: n.href, children: m }) : n.action ? /* @__PURE__ */ e.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: n.action,
        method: n.method || "post",
        children: /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "nhsuk-account__button",
            type: "submit",
            role: "button",
            children: m
          }
        )
      }
    ) : /* @__PURE__ */ e.jsx("span", { children: m });
  };
  return /* @__PURE__ */ e.jsx(
    "nav",
    {
      className: x(
        "nhsuk-account",
        {
          "nhsuk-account--white": l === "white"
        },
        r
      ),
      "aria-label": s,
      children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-account__list", children: a.map((n, i) => n && /* @__PURE__ */ e.jsx(
        "li",
        {
          className: x("nhsuk-account__item nhsuk-header__account-item", n.className),
          children: o(n)
        },
        i
      )) })
    }
  );
}, X = ({
  mode: s = "form",
  action: a = "/search",
  method: r = "get",
  name: l = "q",
  value: o,
  placeholder: n = "Search",
  visuallyHiddenLabel: i = "Search the NHS website",
  visuallyHiddenButton: u = "Search",
  className: m,
  disabled: h = !1,
  callbacks: c = {},
  isLoading: d = !1,
  showResults: g = !1,
  results: N = [],
  formAttributes: f = {},
  inputAttributes: H = {},
  buttonAttributes: C = {},
  preventDefaultSubmit: B = !1,
  debounceMs: F = 300,
  minQueryLength: p = 1
}) => {
  const [k, v] = y(""), [I, z] = y(!1), S = P(void 0), V = P(null), T = P(null), w = s === "controlled" && o !== void 0, j = w ? o : k, E = M((_) => {
    S.current && clearTimeout(S.current), S.current = setTimeout(() => {
      c.onChange && _.length >= p && c.onChange(_);
    }, F);
  }, [c.onChange, F, p]), D = M((_) => {
    const L = _.target.value;
    w || v(L), s !== "form" && E(L);
  }, [w, s, E]), t = M((_) => {
    const L = j.trim(), A = {
      query: L,
      timestamp: Date.now(),
      formData: new FormData(_.currentTarget)
    };
    s === "controlled" || s === "hybrid" && B ? (_.preventDefault(), c.onSearch && L.length >= p && c.onSearch(A)) : s === "hybrid" && c.onSearch && L.length >= p && c.onSearch(A);
  }, [s, j, c.onSearch, B, p]), b = M(() => {
    z(!0), c.onFocus?.();
  }, [c.onFocus]), Z = M(() => {
    z(!1), c.onBlur?.();
  }, [c.onBlur]), $ = M(() => {
    w || v(""), c.onClear?.(), T.current?.focus();
  }, [w, c.onClear]);
  R(() => () => {
    S.current && clearTimeout(S.current);
  }, []);
  const O = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: x("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": d
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), q = () => /* @__PURE__ */ e.jsx(
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
  ), K = () => !j || s === "form" ? null : /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: $,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ e.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ e.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), U = () => !g || !N.length || !I ? null : /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: N.map((_) => /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: _.href ? /* @__PURE__ */ e.jsxs("a", { href: _.href, className: "nhsuk-header__search-result-link", children: [
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
  return /* @__PURE__ */ e.jsxs("div", { className: x("nhsuk-header__search", m, {
    "nhsuk-header__search--controlled": s === "controlled",
    "nhsuk-header__search--hybrid": s === "hybrid",
    "nhsuk-header__search--loading": d,
    "nhsuk-header__search--focused": I,
    "nhsuk-header__search--has-results": g && N.length > 0
  }), children: [
    /* @__PURE__ */ e.jsxs(
      "form",
      {
        ref: V,
        className: "nhsuk-header__search-form",
        id: "search",
        action: s !== "controlled" ? a : void 0,
        method: s !== "controlled" ? r : void 0,
        role: "search",
        onSubmit: t,
        ...f,
        children: [
          /* @__PURE__ */ e.jsx(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: i
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: T,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: s !== "controlled" ? l : void 0,
                type: "search",
                placeholder: n,
                autoComplete: "off",
                value: j,
                onChange: D,
                onFocus: b,
                onBlur: Z,
                disabled: h || d,
                ...g && N.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...H
              }
            ),
            K()
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: h || d || s !== "form" && j.length < p,
              ...C,
              children: [
                d ? q() : O(),
                /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: d ? "Searching..." : u })
              ]
            }
          )
        ]
      }
    ),
    U()
  ] });
};
function Y(s, {
  variant: a,
  isClient: r,
  menuOpen: l = !1,
  showMoreButton: o = !1,
  visibleItems: n,
  dropdownVisible: i,
  toggleMenu: u
}) {
  const {
    className: m,
    logo: h = {},
    service: c = {},
    organisation: d,
    search: g,
    account: N,
    navigation: f,
    containerClasses: H,
    variant: C = "default",
    attributes: B = {},
    maxVisibleItems: F,
    ...p
  } = s;
  "maxVisibleItems" in p && delete p.maxVisibleItems;
  const k = c.href && !h.href || c.href && c.href === h.href, v = k ? c.href : h.href, I = x(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": C === "organisation" || d,
      "nhsuk-header--white": C === "white"
    },
    m
  ), z = x("nhsuk-header__container", "nhsuk-width-container", H), S = x(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": f?.white,
      "nhsuk-header__navigation--justified": f?.justified
    },
    f?.className
  ), V = () => /* @__PURE__ */ e.jsxs(
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
        /* @__PURE__ */ e.jsx("title", { children: h.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), T = () => h.src ? /* @__PURE__ */ e.jsx("img", { className: "nhsuk-header__organisation-logo", src: h.src, width: "280", alt: h.ariaLabel || "NHS" }) : V(), w = () => d ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      d.name,
      d.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        " ",
        d.split
      ] })
    ] }),
    d.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: d.descriptor })
  ] }) : null, j = (t, b) => t ? b ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: b, children: t }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: t }) : null, E = (t) => t.active || t.current ? /* @__PURE__ */ e.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: t.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t.text }) : t.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t.text, D = () => /* @__PURE__ */ e.jsx("svg", { className: "nhsuk-icon nhsuk-icon__chevron-down", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 12 7", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ e.jsx("path", { d: "M1.414 0 6 4.586 10.586 0 12 1.414 6 7 0 1.414 1.414 0Z" }) });
  return f?.items, /* @__PURE__ */ e.jsxs("header", { className: I, role: "banner", "data-module": "nhsuk-header", ...B, ...p, children: [
    /* @__PURE__ */ e.jsxs("div", { className: z, children: [
      /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
        v ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: v, children: [
          T(),
          w(),
          k && j(c.text)
        ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          T(),
          w(),
          k && j(c.text)
        ] }),
        c.text && !k && j(c.text, c.href)
      ] }),
      g && /* @__PURE__ */ e.jsx(X, { ...g }),
      /* @__PURE__ */ e.jsx(W, { ...N, variant: C === "white" ? "white" : "default" })
    ] }),
    f && f.items && f.items.length > 0 && /* @__PURE__ */ e.jsx("nav", { className: S, "aria-label": f.ariaLabel || "Menu", children: /* @__PURE__ */ e.jsx(
      "div",
      {
        className: x(
          "nhsuk-header__navigation-container",
          "nhsuk-width-container",
          {
            "nhsuk-header__navigation-container--initializing": r && a === "client",
            "nhsuk-header__navigation-container--ssr": !r
          },
          H
        ),
        children: /* @__PURE__ */ e.jsxs("ul", { className: "nhsuk-header__navigation-list", children: [
          (f?.items || []).slice(0, n ?? (f?.items?.length || 0)).map((t, b) => /* @__PURE__ */ e.jsx(
            "li",
            {
              className: x(
                "nhsuk-header__navigation-item",
                {
                  "nhsuk-header__navigation-item--current": t.active || t.current
                },
                t.className
              ),
              ...t.attributes || {},
              children: /* @__PURE__ */ e.jsx(
                "a",
                {
                  className: "nhsuk-header__navigation-link",
                  href: t.href,
                  ...t.active || t.current ? { "aria-current": t.current ? "page" : "true" } : {},
                  children: E(t)
                }
              )
            },
            b
          )),
          o && n !== void 0 && f?.items && n < f.items.length && /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__navigation-button", id: "toggle-more-menu", onClick: u, type: "button", children: [
            /* @__PURE__ */ e.jsx("span", { children: "More" }),
            D()
          ] }) })
        ] })
      }
    ) }),
    r && f && f.items && f.items.length > 0 && l && i && /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__dropdown-menu", hidden: !i, children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__dropdown-list", children: f.items.slice(n ?? 0).map((t, b) => /* @__PURE__ */ e.jsx(
      "li",
      {
        className: x("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": t.active || t.current
        }),
        children: /* @__PURE__ */ e.jsx(
          "a",
          {
            className: "nhsuk-header__dropdown-link",
            href: t.href,
            ...t.active || t.current ? { "aria-current": t.current ? "page" : "true" } : {},
            onClick: () => {
              u?.();
            },
            children: E(t)
          }
        )
      },
      `overflow-${(n ?? 0) + b}`
    )) }) }),
    a === "server"
  ] });
}
const ce = ({
  className: s,
  logo: a = {},
  service: r = {},
  organisation: l,
  search: o,
  account: n,
  navigation: i,
  containerClasses: u,
  variant: m = "default",
  attributes: h = {},
  ...c
}) => {
  const [d, g] = y(!1), [N] = y(!1), [f] = y(i?.items?.length || 0), [H, C] = y(!1), [B, F] = y(!1);
  R(() => {
    typeof window > "u" || F(!0);
  }, []), R(() => {
    if (typeof document > "u") return;
    const k = (v) => {
      v.key === "Escape" && d && g(!1);
    };
    if (d)
      return document.addEventListener("keydown", k), () => document.removeEventListener("keydown", k);
  }, [d]);
  const p = (k) => {
    k && (k.preventDefault(), k.stopPropagation());
    const v = !d;
    g(v), C(v);
  };
  return Y(
    { className: s, logo: a, service: r, organisation: l, search: o, account: n, navigation: i, containerClasses: u, variant: m, attributes: h, ...c },
    {
      variant: "client",
      isClient: B,
      menuOpen: d,
      showMoreButton: N,
      visibleItems: f,
      dropdownVisible: H,
      toggleMenu: p
    }
  );
}, ie = ({
  text: s,
  href: a,
  openInNewWindow: r = !1,
  className: l,
  ...o
}) => {
  const n = x(
    "nhsuk-action-link__link",
    l
  );
  return /* @__PURE__ */ e.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ e.jsxs(
    "a",
    {
      className: n,
      href: a,
      target: r ? "_blank" : void 0,
      rel: r ? "noopener noreferrer" : void 0,
      ...o,
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
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-action-link__text", children: s })
      ]
    }
  ) });
}, Q = G.forwardRef(
  ({
    variant: s = "primary",
    size: a = "default",
    fullWidth: r = !1,
    className: l,
    children: o,
    disabled: n,
    type: i = "button",
    ...u
  }, m) => {
    const h = x(
      "nhs-aria-button",
      `nhs-aria-button--${s}`,
      {
        [`nhs-aria-button--${a}`]: a !== "default",
        "nhs-aria-button--full-width": r,
        "nhs-aria-button--disabled": n
      },
      l
    );
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: m,
        type: i,
        className: h,
        disabled: n,
        ...u,
        children: o
      }
    );
  }
);
Q.displayName = "ButtonSSR";
const he = ({
  text: s = "Back",
  html: a,
  href: r = "#",
  className: l,
  element: o = "a",
  onClick: n,
  ...i
}) => {
  const u = x(
    "nhsuk-back-link",
    l
  ), m = x(
    "nhsuk-back-link__link"
  ), h = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
    a ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : s
  ] });
  return /* @__PURE__ */ e.jsx("div", { className: u, children: o === "button" ? /* @__PURE__ */ e.jsx(
    "button",
    {
      className: m,
      onClick: n,
      type: "button",
      ...i,
      children: h()
    }
  ) : /* @__PURE__ */ e.jsx(
    "a",
    {
      className: m,
      href: r,
      ...i,
      children: h()
    }
  ) });
};
function ee(s) {
  const { color: a = "default", noBorder: r, closable: l, disabled: o, className: n } = s;
  return { classes: [
    "nhsuk-tag",
    a !== "default" ? `nhsuk-tag--${a}` : "",
    r ? "nhsuk-tag--no-border" : "",
    l ? "nhsuk-tag--closable" : "",
    o ? "nhsuk-tag--disabled" : "",
    n || ""
  ].filter(Boolean).join(" "), showClose: !!l, disabled: !!o };
}
const de = ({
  text: s,
  html: a,
  children: r,
  color: l = "default",
  noBorder: o = !1,
  closable: n = !1,
  onClose: i,
  disabled: u = !1,
  className: m,
  ...h
}) => {
  const c = ee({ color: l, noBorder: o, closable: n, disabled: u, className: m }), d = (g) => {
    g.preventDefault(), g.stopPropagation(), !u && i && i();
  };
  return /* @__PURE__ */ e.jsxs("strong", { className: c.classes, ...h, children: [
    r || (a ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : s),
    n && /* @__PURE__ */ e.jsx(
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
};
function se(s) {
  const a = s.size || "m", r = [
    "nhsuk-label",
    a !== "m" ? `nhsuk-label--${a}` : "",
    s.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: s.isPageHeading ? "h1" : "label",
    classes: r,
    size: a,
    htmlFor: s.isPageHeading ? void 0 : s.htmlFor,
    isPageHeading: !!s.isPageHeading
  };
}
const ue = ({
  htmlFor: s,
  className: a,
  isPageHeading: r = !1,
  size: l = "m",
  children: o,
  ...n
}) => {
  const i = se({ size: l, isPageHeading: r, className: a, htmlFor: s }), u = i.tag;
  return /* @__PURE__ */ e.jsx(u, { className: i.classes, htmlFor: i.htmlFor, ...n, children: r ? /* @__PURE__ */ e.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: s, children: o }) : o });
};
function ne(s) {
  switch (s) {
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
function ae(s) {
  const a = s.level ?? ne(s.size), r = [
    "nhsuk-heading",
    s.size ? `nhsuk-heading--${s.size}` : "",
    s.className || ""
  ].filter(Boolean).join(" "), l = s.marginBottom ? { marginBottom: s.marginBottom } : void 0;
  return { tag: `h${a}`, classes: r, style: l };
}
const me = ({ level: s, className: a, text: r, html: l, children: o, size: n, marginBottom: i, ...u }) => {
  const m = ae({ level: s, size: n, className: a, marginBottom: i }), h = o || (l ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: l } }) : r);
  return J(m.tag, { className: m.classes, style: m.style, ...u }, h);
};
function re(s) {
  return { classes: [
    "nhsuk-hint",
    s.className || ""
  ].filter(Boolean).join(" "), id: s.id };
}
const fe = ({ id: s, className: a, children: r, ...l }) => {
  const o = re({ id: s, className: a });
  return /* @__PURE__ */ e.jsx("div", { className: o.classes, id: o.id, ...l, children: r });
};
function te(s) {
  return {
    classes: ["nhsuk-error-message", s.className || ""].filter(Boolean).join(" "),
    id: s.id,
    visuallyHiddenText: s.visuallyHiddenText ?? "Error:"
  };
}
const _e = ({ id: s, className: a, visuallyHiddenText: r = "Error:", children: l, ...o }) => {
  const n = te({ id: s, className: a, visuallyHiddenText: r });
  return /* @__PURE__ */ e.jsxs("span", { className: n.classes, id: n.id, ...o, children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      n.visuallyHiddenText,
      " "
    ] }),
    l
  ] });
};
export {
  W as Account,
  ie as ActionLink,
  he as BackLink,
  Q as Button,
  _e as ErrorMessage,
  ce as Header,
  me as Heading,
  fe as Hint,
  ue as Label,
  ge as SkipLink,
  de as Tag
};
//# sourceMappingURL=ssr.js.map
