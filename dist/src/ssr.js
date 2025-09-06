import * as U from "react";
import { useState as I, useRef as V, useCallback as z, useEffect as O, createElement as G } from "react";
import { j as e, c as N } from "../SkipLink-CFQznirl.js";
import { S as xe } from "../SkipLink-CFQznirl.js";
const J = ({
  ariaLabel: n = "Account",
  items: a = [],
  className: t,
  variant: l = "default"
}) => {
  if (!a || a.length === 0)
    return null;
  const i = (s) => {
    const o = s.icon ? /* @__PURE__ */ e.jsx(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": s.icon === !0 ? "User" : void 0,
        children: /* @__PURE__ */ e.jsx("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
      }
    ) : null, _ = s.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: s.html } }) : s.text, g = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      o,
      _
    ] });
    return s.href ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-account__link nhsuk-header__account-link", href: s.href, children: g }) : s.action ? /* @__PURE__ */ e.jsx(
      "form",
      {
        className: "nhsuk-account__form",
        action: s.action,
        method: s.method || "post",
        children: /* @__PURE__ */ e.jsx(
          "button",
          {
            className: "nhsuk-account__button",
            type: "submit",
            role: "button",
            children: g
          }
        )
      }
    ) : /* @__PURE__ */ e.jsx("span", { children: g });
  };
  return /* @__PURE__ */ e.jsx(
    "nav",
    {
      className: N(
        "nhsuk-account",
        {
          "nhsuk-account--white": l === "white"
        },
        t
      ),
      "aria-label": n,
      children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-account__list", children: a.map((s, o) => s && /* @__PURE__ */ e.jsx(
        "li",
        {
          className: N("nhsuk-account__item nhsuk-header__account-item", s.className),
          children: i(s)
        },
        o
      )) })
    }
  );
}, X = ({
  mode: n = "form",
  action: a = "/search",
  method: t = "get",
  name: l = "q",
  value: i,
  placeholder: s = "Search",
  visuallyHiddenLabel: o = "Search the NHS website",
  visuallyHiddenButton: _ = "Search",
  className: g,
  disabled: v = !1,
  callbacks: d = {},
  isLoading: u = !1,
  showResults: k = !1,
  results: j = [],
  formAttributes: A = {},
  inputAttributes: P = {},
  buttonAttributes: x = {},
  preventDefaultSubmit: M = !1,
  debounceMs: L = 300,
  minQueryLength: p = 1
}) => {
  const [q, F] = I(""), [y, w] = I(!1), b = V(void 0), H = V(null), D = V(null), c = n === "controlled" && i !== void 0, m = c ? i : q, B = z((f) => {
    b.current && clearTimeout(b.current), b.current = setTimeout(() => {
      d.onChange && f.length >= p && d.onChange(f);
    }, L);
  }, [d.onChange, L, p]), C = z((f) => {
    const h = f.target.value;
    c || F(h), n !== "form" && B(h);
  }, [c, n, B]), R = z((f) => {
    const h = m.trim(), $ = {
      query: h,
      timestamp: Date.now(),
      formData: new FormData(f.currentTarget)
    };
    n === "controlled" || n === "hybrid" && M ? (f.preventDefault(), d.onSearch && h.length >= p && d.onSearch($)) : n === "hybrid" && d.onSearch && h.length >= p && d.onSearch($);
  }, [n, m, d.onSearch, M, p]), T = z(() => {
    w(!0), d.onFocus?.();
  }, [d.onFocus]), E = z(() => {
    w(!1), d.onBlur?.();
  }, [d.onBlur]), r = z(() => {
    c || F(""), d.onClear?.(), D.current?.focus();
  }, [c, d.onClear]);
  O(() => () => {
    b.current && clearTimeout(b.current);
  }, []);
  const S = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: N("nhsuk-icon nhsuk-icon__search", {
        "nhsuk-icon__search--loading": u
      }),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" })
    }
  ), W = () => /* @__PURE__ */ e.jsx(
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
  ), K = () => !m || n === "form" ? null : /* @__PURE__ */ e.jsx(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-clear",
      onClick: r,
      "aria-label": "Clear search",
      children: /* @__PURE__ */ e.jsx("svg", { className: "nhsuk-icon nhsuk-icon__close", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ e.jsx("path", { d: "M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 1.42 1.42l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42-1.42z" }) })
    }
  ), Z = () => !k || !j.length || !y ? null : /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-results", role: "listbox", children: j.map((f) => /* @__PURE__ */ e.jsx("div", { className: "nhsuk-header__search-result", role: "option", children: f.href ? /* @__PURE__ */ e.jsxs("a", { href: f.href, className: "nhsuk-header__search-result-link", children: [
    /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-title", children: f.title }),
    f.description && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-description", children: f.description })
  ] }) : /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: "button",
      className: "nhsuk-header__search-result-button",
      onClick: () => d.onSearch?.({ query: f.title, timestamp: Date.now() }),
      children: [
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-title", children: f.title }),
        f.description && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__search-result-description", children: f.description })
      ]
    }
  ) }, f.id)) });
  return /* @__PURE__ */ e.jsxs("div", { className: N("nhsuk-header__search", g, {
    "nhsuk-header__search--controlled": n === "controlled",
    "nhsuk-header__search--hybrid": n === "hybrid",
    "nhsuk-header__search--loading": u,
    "nhsuk-header__search--focused": y,
    "nhsuk-header__search--has-results": k && j.length > 0
  }), children: [
    /* @__PURE__ */ e.jsxs(
      "form",
      {
        ref: H,
        className: "nhsuk-header__search-form",
        id: "search",
        action: n !== "controlled" ? a : void 0,
        method: n !== "controlled" ? t : void 0,
        role: "search",
        onSubmit: R,
        ...A,
        children: [
          /* @__PURE__ */ e.jsx(
            "label",
            {
              className: "nhsuk-u-visually-hidden",
              htmlFor: "search-field",
              children: o
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__search-input-wrapper", children: [
            /* @__PURE__ */ e.jsx(
              "input",
              {
                ref: D,
                className: "nhsuk-header__search-input nhsuk-input",
                id: "search-field",
                name: n !== "controlled" ? l : void 0,
                type: "search",
                placeholder: s,
                autoComplete: "off",
                value: m,
                onChange: C,
                onFocus: T,
                onBlur: E,
                disabled: v || u,
                ...k && j.length > 0 ? { "aria-expanded": !0, "aria-haspopup": "listbox" } : {},
                ...P
              }
            ),
            K()
          ] }),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              className: "nhsuk-header__search-submit",
              type: "submit",
              disabled: v || u || n !== "form" && m.length < p,
              ...x,
              children: [
                u ? W() : S(),
                /* @__PURE__ */ e.jsx("span", { className: "nhsuk-u-visually-hidden", children: u ? "Searching..." : _ })
              ]
            }
          )
        ]
      }
    ),
    Z()
  ] });
};
function Y(n, {
  variant: a,
  isClient: t,
  menuOpen: l = !1,
  showMoreButton: i = !1,
  visibleItems: s,
  dropdownVisible: o,
  toggleMenu: _,
  navContainerRef: g,
  navListRef: v
}) {
  const {
    className: d,
    logo: u = {},
    service: k = {},
    organisation: j,
    search: A,
    account: P,
    navigation: x,
    containerClasses: M,
    variant: L = "default",
    attributes: p = {},
    maxVisibleItems: q,
    // deprecated (ignored)
    responsiveNavigation: F = !0,
    ...y
  } = n;
  "maxVisibleItems" in y && delete y.maxVisibleItems;
  const w = k.href && !u.href || k.href && k.href === u.href, b = w ? k.href : u.href, H = N(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": L === "organisation" || j,
      "nhsuk-header--white": L === "white"
    },
    d
  ), D = N(
    "nhsuk-header__container",
    M
  ), c = N(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": x?.white,
      "nhsuk-header__navigation--justified": x?.justified
    },
    x?.className
  ), m = () => /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": u.ariaLabel || "NHS",
      children: [
        /* @__PURE__ */ e.jsx("title", { children: u.ariaLabel || "NHS" }),
        /* @__PURE__ */ e.jsx(
          "path",
          {
            fill: "#fff",
            d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
          }
        )
      ]
    }
  ), B = () => u.src ? /* @__PURE__ */ e.jsx(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: u.src,
      width: "280",
      alt: u.ariaLabel || "NHS"
    }
  ) : m(), C = () => j ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name", children: [
      j.name,
      j.split && /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-header__organisation-name-split", children: [
        " ",
        j.split
      ] })
    ] }),
    j.descriptor && /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__organisation-name-descriptor", children: j.descriptor })
  ] }) : null, R = (r, S) => r ? S ? /* @__PURE__ */ e.jsx("a", { className: "nhsuk-header__service-name", href: S, children: r }) : /* @__PURE__ */ e.jsx("span", { className: "nhsuk-header__service-name", children: r }) : null, T = (r) => r.active || r.current ? /* @__PURE__ */ e.jsx("strong", { className: "nhsuk-header__navigation-item-current-fallback", children: r.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r.html } }) : r.text }) : r.html ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: r.html } }) : r.text, E = () => /* @__PURE__ */ e.jsx(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-down",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ e.jsx("path", { d: "M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z" })
    }
  );
  return x?.items, /* @__PURE__ */ e.jsxs(
    "header",
    {
      className: H,
      role: "banner",
      "data-module": "nhsuk-header",
      ...p,
      ...y,
      children: [
        /* @__PURE__ */ e.jsxs("div", { className: D, children: [
          /* @__PURE__ */ e.jsxs("div", { className: "nhsuk-header__service", children: [
            b ? /* @__PURE__ */ e.jsxs("a", { className: "nhsuk-header__service-logo", href: b, children: [
              B(),
              C(),
              w && R(k.text)
            ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
              B(),
              C(),
              w && R(k.text)
            ] }),
            k.text && !w && R(k.text, k.href)
          ] }),
          A && /* @__PURE__ */ e.jsx(X, { ...A }),
          /* @__PURE__ */ e.jsx(
            J,
            {
              ...P,
              variant: L === "white" ? "white" : "default"
            }
          )
        ] }),
        x && x.items && x.items.length > 0 && /* @__PURE__ */ e.jsx(
          "nav",
          {
            className: c,
            "aria-label": x.ariaLabel || "Menu",
            children: /* @__PURE__ */ e.jsx(
              "div",
              {
                className: N(
                  "nhsuk-header__navigation-container",
                  "nhsuk-width-container",
                  {
                    "nhsuk-header__navigation-container--initializing": t && a === "client",
                    "nhsuk-header__navigation-container--ssr": !t
                  },
                  M
                ),
                ref: g,
                children: /* @__PURE__ */ e.jsxs(
                  "ul",
                  {
                    className: "nhsuk-header__navigation-list",
                    ref: v,
                    children: [
                      (x?.items || []).map((r, S) => /* @__PURE__ */ e.jsx(
                        "li",
                        {
                          className: N(
                            "nhsuk-header__navigation-item",
                            {
                              "nhsuk-header__navigation-item--current": r.active || r.current,
                              "nhsuk-header__navigation-item--hidden": i && s !== void 0 && S >= (s ?? 0)
                            },
                            r.className
                          ),
                          ...r.attributes || {},
                          children: /* @__PURE__ */ e.jsx(
                            "a",
                            {
                              className: "nhsuk-header__navigation-link",
                              href: r.href,
                              ...r.active || r.current ? { "aria-current": r.current ? "page" : "true" } : {},
                              children: T(r)
                            }
                          )
                        },
                        S
                      )),
                      i && s !== void 0 && /* @__PURE__ */ e.jsx("li", { className: "nhsuk-header__navigation-item nhsuk-header__navigation-item--more", children: /* @__PURE__ */ e.jsxs(
                        "button",
                        {
                          className: "nhsuk-header__navigation-button",
                          id: "toggle-more-menu",
                          type: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": l ? "true" : "false",
                          "aria-controls": "nhsuk-header-more-menu",
                          onClick: _,
                          children: [
                            /* @__PURE__ */ e.jsx("span", { children: "More" }),
                            E()
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
        t && x && x.items && x.items.length > 0 && l && o && /* @__PURE__ */ e.jsx(
          "div",
          {
            className: "nhsuk-header__dropdown-menu",
            hidden: !o,
            id: "nhsuk-header-more-menu",
            children: /* @__PURE__ */ e.jsx("ul", { className: "nhsuk-header__dropdown-list", children: x.items.slice(s ?? 0).map((r, S) => /* @__PURE__ */ e.jsx(
              "li",
              {
                className: N("nhsuk-header__dropdown-item", {
                  "nhsuk-header__dropdown-item--current": r.active || r.current
                }),
                children: /* @__PURE__ */ e.jsx(
                  "a",
                  {
                    className: "nhsuk-header__dropdown-link",
                    href: r.href,
                    ...r.active || r.current ? { "aria-current": r.current ? "page" : "true" } : {},
                    onClick: () => {
                      _?.();
                    },
                    children: T(r)
                  }
                )
              },
              `overflow-${(s ?? 0) + S}`
            )) })
          }
        ),
        a === "server"
      ]
    }
  );
}
const ie = ({
  className: n,
  logo: a = {},
  service: t = {},
  organisation: l,
  search: i,
  account: s,
  navigation: o,
  containerClasses: _,
  variant: g = "default",
  attributes: v = {},
  ...d
}) => {
  const [u, k] = I(!1), [j, A] = I(!1), [P, x] = I(o?.items?.length || 0), [M, L] = I(!1), [p, q] = I(!1), F = V(null), y = V(null), w = V(!1);
  O(() => {
    typeof window > "u" || q(!0);
  }, []), O(() => {
    if (typeof document > "u") return;
    const c = (m) => {
      m.key === "Escape" && u && k(!1);
    };
    if (u)
      return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
  }, [u]);
  const b = V(null), H = z(() => {
    if (!p || !o?.items || o.items.length === 0 || w.current) return;
    const c = F.current, m = y.current;
    if (!c || !m) return;
    w.current = !0, c.classList.add("nhsuk-header__navigation-container--measuring");
    const B = c.clientWidth, C = Array.from(m.children);
    if (!C.length) {
      c.classList.remove("nhsuk-header__navigation-container--measuring"), w.current = !1;
      return;
    }
    if (b.current == null) {
      const h = document.createElement("button");
      h.type = "button", h.className = "nhsuk-header__navigation-button nhsuk-header__navigation-button--prototype", h.style.position = "absolute", h.style.visibility = "hidden", h.style.pointerEvents = "none", h.innerHTML = "<span>More</span>", c.appendChild(h), b.current = h.getBoundingClientRect().width || 104, c.removeChild(h);
    }
    const R = b.current + 16;
    let T = 0, E = 0;
    const r = window.getComputedStyle(c), S = parseFloat(r.paddingLeft) || 0, W = parseFloat(r.paddingRight) || 0;
    let K = S + W;
    for (const h of C) {
      const $ = h.getBoundingClientRect().width;
      if (T + $ + R + K > B) break;
      T += $, E += 1;
    }
    const Z = E < o.items.length, f = Z ? E : o.items.length;
    A((h) => h === Z ? h : Z), x((h) => h === f ? h : f), c.classList.remove("nhsuk-header__navigation-container--measuring"), w.current = !1;
  }, [p, o?.items]);
  O(() => {
    if (!p) return;
    const c = F.current;
    if (!c) return;
    let m = null;
    const B = () => {
      m == null && (m = window.requestAnimationFrame(() => {
        m = null, H();
      }));
    };
    H();
    const C = new ResizeObserver(() => B());
    return C.observe(c), y.current && C.observe(y.current), () => {
      m != null && window.cancelAnimationFrame(m), C.disconnect();
    };
  }, [p, H]), O(() => {
    p && H();
  }, [o?.items?.length, p, H]);
  const D = (c) => {
    c && (c.preventDefault(), c.stopPropagation());
    const m = !u;
    k(m), L(m);
  };
  return Y(
    {
      className: n,
      logo: a,
      service: t,
      organisation: l,
      search: i,
      account: s,
      navigation: o,
      containerClasses: _,
      variant: g,
      attributes: v,
      ...d
    },
    {
      variant: "client",
      isClient: p,
      menuOpen: u,
      showMoreButton: j,
      visibleItems: P,
      dropdownVisible: M,
      toggleMenu: D,
      navContainerRef: F,
      navListRef: y
    }
  );
}, ce = ({
  text: n,
  href: a,
  openInNewWindow: t = !1,
  className: l,
  ...i
}) => {
  const s = N(
    "nhsuk-action-link__link",
    l
  );
  return /* @__PURE__ */ e.jsx("div", { className: "nhsuk-action-link", children: /* @__PURE__ */ e.jsxs(
    "a",
    {
      className: s,
      href: a,
      target: t ? "_blank" : void 0,
      rel: t ? "noopener noreferrer" : void 0,
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
        /* @__PURE__ */ e.jsx("span", { className: "nhsuk-action-link__text", children: n })
      ]
    }
  ) });
}, Q = U.forwardRef(
  ({
    variant: n = "primary",
    size: a = "default",
    fullWidth: t = !1,
    className: l,
    children: i,
    disabled: s,
    type: o = "button",
    ..._
  }, g) => {
    const v = N(
      "nhs-aria-button",
      `nhs-aria-button--${n}`,
      {
        [`nhs-aria-button--${a}`]: a !== "default",
        "nhs-aria-button--full-width": t,
        "nhs-aria-button--disabled": s
      },
      l
    );
    return /* @__PURE__ */ e.jsx(
      "button",
      {
        ref: g,
        type: o,
        className: v,
        disabled: s,
        ..._,
        children: i
      }
    );
  }
);
Q.displayName = "ButtonSSR";
const he = ({
  text: n = "Back",
  html: a,
  href: t = "#",
  className: l,
  element: i = "a",
  onClick: s,
  ...o
}) => {
  const _ = N(
    "nhsuk-back-link",
    l
  ), g = N(
    "nhsuk-back-link__link"
  ), v = () => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
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
    a ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n
  ] });
  return /* @__PURE__ */ e.jsx("div", { className: _, children: i === "button" ? /* @__PURE__ */ e.jsx(
    "button",
    {
      className: g,
      onClick: s,
      type: "button",
      ...o,
      children: v()
    }
  ) : /* @__PURE__ */ e.jsx(
    "a",
    {
      className: g,
      href: t,
      ...o,
      children: v()
    }
  ) });
};
function ee(n) {
  const { color: a = "default", noBorder: t, closable: l, disabled: i, className: s } = n;
  return { classes: [
    "nhsuk-tag",
    a !== "default" ? `nhsuk-tag--${a}` : "",
    t ? "nhsuk-tag--no-border" : "",
    l ? "nhsuk-tag--closable" : "",
    i ? "nhsuk-tag--disabled" : "",
    s || ""
  ].filter(Boolean).join(" "), showClose: !!l, disabled: !!i };
}
const ue = ({
  text: n,
  html: a,
  children: t,
  color: l = "default",
  noBorder: i = !1,
  closable: s = !1,
  onClose: o,
  disabled: _ = !1,
  className: g,
  ...v
}) => {
  const d = ee({ color: l, noBorder: i, closable: s, disabled: _, className: g }), u = (k) => {
    k.preventDefault(), k.stopPropagation(), !_ && o && o();
  };
  return /* @__PURE__ */ e.jsxs("strong", { className: d.classes, ...v, children: [
    t || (a ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: a } }) : n),
    s && /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: u,
        disabled: _,
        "aria-label": "Remove",
        title: "Remove",
        children: "×"
      }
    )
  ] });
};
function ne(n) {
  const a = n.size || "m", t = [
    "nhsuk-label",
    a !== "m" ? `nhsuk-label--${a}` : "",
    n.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: n.isPageHeading ? "h1" : "label",
    classes: t,
    size: a,
    htmlFor: n.isPageHeading ? void 0 : n.htmlFor,
    isPageHeading: !!n.isPageHeading
  };
}
const de = ({
  htmlFor: n,
  className: a,
  isPageHeading: t = !1,
  size: l = "m",
  children: i,
  ...s
}) => {
  const o = ne({ size: l, isPageHeading: t, className: a, htmlFor: n }), _ = o.tag;
  return /* @__PURE__ */ e.jsx(_, { className: o.classes, htmlFor: o.htmlFor, ...s, children: t ? /* @__PURE__ */ e.jsx("label", { className: "nhsuk-label-wrapper", htmlFor: n, children: i }) : i });
};
function se(n) {
  switch (n) {
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
function ae(n) {
  const a = n.level ?? se(n.size), t = [
    "nhsuk-heading",
    n.size ? `nhsuk-heading--${n.size}` : "",
    n.className || ""
  ].filter(Boolean).join(" "), l = n.marginBottom ? { marginBottom: n.marginBottom } : void 0;
  return { tag: `h${a}`, classes: t, style: l };
}
const me = ({ level: n, className: a, text: t, html: l, children: i, size: s, marginBottom: o, ..._ }) => {
  const g = ae({ level: n, size: s, className: a, marginBottom: o }), v = i || (l ? /* @__PURE__ */ e.jsx("span", { dangerouslySetInnerHTML: { __html: l } }) : t);
  return G(g.tag, { className: g.classes, style: g.style, ..._ }, v);
};
function re(n) {
  return { classes: [
    "nhsuk-hint",
    n.className || ""
  ].filter(Boolean).join(" "), id: n.id };
}
const fe = ({ id: n, className: a, children: t, ...l }) => {
  const i = re({ id: n, className: a });
  return /* @__PURE__ */ e.jsx("div", { className: i.classes, id: i.id, ...l, children: t });
};
function te(n) {
  return {
    classes: ["nhsuk-error-message", n.className || ""].filter(Boolean).join(" "),
    id: n.id,
    visuallyHiddenText: n.visuallyHiddenText ?? "Error:"
  };
}
const _e = ({ id: n, className: a, visuallyHiddenText: t = "Error:", children: l, ...i }) => {
  const s = te({ id: n, className: a, visuallyHiddenText: t });
  return /* @__PURE__ */ e.jsxs("span", { className: s.classes, id: s.id, ...i, children: [
    /* @__PURE__ */ e.jsxs("span", { className: "nhsuk-u-visually-hidden", children: [
      s.visuallyHiddenText,
      " "
    ] }),
    l
  ] });
};
export {
  J as Account,
  ce as ActionLink,
  he as BackLink,
  Q as Button,
  _e as ErrorMessage,
  ie as Header,
  me as Heading,
  fe as Hint,
  de as Label,
  xe as SkipLink,
  ue as Tag
};
//# sourceMappingURL=ssr.js.map
