import * as H from "react";
import e, { createElement as se, forwardRef as re } from "react";
import { c as y, C as de, b as q, R as he, a as K, d as J } from "../SkipLink-BE-cc-Aq.js";
import { B as wa, F as Ca, G as xa, S as Ia, g as Ba } from "../SkipLink-BE-cc-Aq.js";
const _e = ({
  ariaLabel: a = "Account",
  items: t = [],
  className: s,
  variant: n = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const r = (l) => {
    const o = l.icon ? /* @__PURE__ */ e.createElement(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": l.icon === !0 ? "User" : void 0
      },
      /* @__PURE__ */ e.createElement("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
    ) : null, c = l.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text, i = /* @__PURE__ */ e.createElement(e.Fragment, null, o, c);
    return l.href ? /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: l.href
      },
      i
    ) : l.action ? /* @__PURE__ */ e.createElement(
      "form",
      {
        className: "nhsuk-account__form",
        action: l.action,
        method: l.method || "post"
      },
      /* @__PURE__ */ e.createElement("button", { className: "nhsuk-account__button", type: "submit", role: "button" }, i)
    ) : /* @__PURE__ */ e.createElement("span", null, i);
  };
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: y(
        "nhsuk-account",
        {
          "nhsuk-account--white": n === "white"
        },
        s
      ),
      "aria-label": a
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-account__list" }, t.map(
      (l, o) => l && /* @__PURE__ */ e.createElement(
        "li",
        {
          key: o,
          className: y(
            "nhsuk-account__item nhsuk-header__account-item",
            l.className
          )
        },
        r(l)
      )
    ))
  );
};
function fe(a, { variant: t, isClient: s }) {
  const {
    className: n,
    logo: r = {},
    service: l = {},
    serviceName: o,
    organisation: c,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: i,
    navigation: m,
    containerClasses: h,
    variant: p = "default",
    attributes: _ = {},
    maxVisibleItems: d,
    // deprecated (ignored)
    responsiveNavigation: E = !0,
    ...f
  } = a;
  "maxVisibleItems" in f && delete f.maxVisibleItems;
  const k = {
    ...l,
    text: l?.text ?? o
  }, w = k.href && !r.href || k.href && k.href === r.href, g = w ? k.href : r.href, x = y(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": p === "organisation" || c,
      "nhsuk-header--white": p === "white"
    },
    n
  ), I = y("nhsuk-header__container", h), v = y(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": m?.white,
      "nhsuk-header__navigation--justified": m?.justified
    },
    m?.className
  ), C = () => /* @__PURE__ */ e.createElement(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": r.ariaLabel || "NHS"
    },
    /* @__PURE__ */ e.createElement("title", null, r.ariaLabel || "NHS"),
    /* @__PURE__ */ e.createElement(
      "path",
      {
        fill: "#fff",
        d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
      }
    )
  ), S = () => r.src ? /* @__PURE__ */ e.createElement(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: r.src,
      width: "280",
      alt: r.ariaLabel || "NHS"
    }
  ) : C(), N = () => c ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, c.name, c.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", c.split)), c.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, c.descriptor)) : null, u = (b, M) => b ? M ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: M }, b) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, b) : null, L = (b) => b.active || b.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, b.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text) : b.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: b.html } }) : b.text, B = m?.items && !E, T = B ? [] : m?.items, $ = B ? m.items : [];
  return /* @__PURE__ */ e.createElement("header", { className: x, role: "banner", "data-module": "nhsuk-header", ..._, ...f }, /* @__PURE__ */ e.createElement("div", { className: I }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, g ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: g }, S(), N(), w && u(k.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, S(), N(), w && u(k.text)), k.text && !w && u(k.text, k.href)), /* @__PURE__ */ e.createElement(_e, { ...i, variant: p === "white" ? "white" : "default" })), m && m.items && m.items.length > 0 && /* @__PURE__ */ e.createElement("nav", { className: v, "aria-label": m.ariaLabel || "Menu" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: y(
        "nhsuk-header_navigation-container",
        "nhsuk-width-container",
        {
          "nhsuk-header__navigation-container--ssr": !s
        },
        h
      )
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, (T || []).map((b, M) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: M,
        className: y("nhsuk-header__navigation-item", {
          "nhsuk-header__navigation-item--current": b.active || b.current
        }, b.className),
        ...b.attributes || {}
      },
      /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: b.href,
          ...b.active || b.current ? { "aria-current": b.current ? "page" : "true" } : {}
        },
        L(b)
      )
    )))
  )), B && $.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__dropdown-list" }, $.map((b, M) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `overflow-server-${M}`,
      className: y("nhsuk-header__dropdown-item", {
        "nhsuk-header__dropdown-item--current": b.active || b.current
      })
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-header__dropdown-link",
        href: b.href,
        ...b.active || b.current ? { "aria-current": b.current ? "page" : "true" } : {}
      },
      L(b)
    )
  )))));
}
const Ye = (a) => fe(a, {
  variant: "server",
  isClient: !1
}), Ue = ({
  text: a,
  href: t,
  openInNewWindow: s = !1,
  className: n,
  ...r
}) => {
  const l = y(
    "nhsuk-action-link__link",
    n
  );
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-action-link" }, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: l,
      href: t,
      target: s ? "_blank" : void 0,
      rel: s ? "noopener noreferrer" : void 0,
      ...r
    },
    /* @__PURE__ */ e.createElement(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__arrow-right-circle",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "36",
        height: "36"
      },
      /* @__PURE__ */ e.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
      /* @__PURE__ */ e.createElement("path", { d: "M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z" })
    ),
    /* @__PURE__ */ e.createElement("span", { className: "nhsuk-action-link__text" }, a)
  ));
};
function ke(a) {
  const t = a.variant || "primary", s = a.size || "default", n = !!a.fullWidth, r = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    n ? "nhs-aria-button--full-width" : "",
    a.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: a.href ? "a" : "button",
    classes: r,
    data: { module: "nhs-button" },
    attrs: a.href ? { href: a.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!a.preventDoubleClick
  };
}
var le = /* @__PURE__ */ ((a) => (a.Primary = "primary", a.Secondary = "secondary", a.Reverse = "reverse", a.Warning = "warning", a.Login = "login", a.Metric = "metric", a))(le || {}), ce = /* @__PURE__ */ ((a) => (a.Small = "small", a.Default = "default", a.Large = "large", a))(ce || {});
const X = H.forwardRef(function(t, s) {
  const {
    children: n,
    variant: r = le.Primary,
    size: l = ce.Default,
    fullWidth: o = !1,
    className: c = "",
    preventDoubleClick: i = !1,
    ...m
  } = t, h = ke({
    variant: r,
    size: l,
    fullWidth: o,
    className: c,
    href: "href" in m ? m.href : void 0,
    preventDoubleClick: i
  });
  if ("href" in m && m.href) {
    const M = m, {
      id: P,
      style: F,
      title: j,
      ["aria-label"]: O,
      ["aria-describedby"]: R,
      ["aria-labelledby"]: V,
      tabIndex: W,
      ...ue
    } = M;
    return /* @__PURE__ */ H.createElement(
      "a",
      {
        ref: s,
        href: M.href,
        target: M.target,
        rel: M.rel,
        className: h.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...i && { "data-prevent-double-click": "true" },
        id: P,
        style: F,
        title: j,
        "aria-label": O,
        "aria-describedby": R,
        "aria-labelledby": V,
        tabIndex: W,
        ...ue
      },
      n
    );
  }
  const p = m, {
    id: _,
    style: d,
    title: E,
    ["aria-label"]: f,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: w,
    tabIndex: g,
    name: x,
    value: I,
    form: v,
    formAction: C,
    formEncType: S,
    formMethod: N,
    formNoValidate: u,
    formTarget: L,
    autoFocus: B,
    type: T,
    disabled: $,
    ...b
  } = p;
  return /* @__PURE__ */ H.createElement(
    "button",
    {
      ref: s,
      type: T || "button",
      disabled: $,
      className: h.classes,
      "data-module": "nhs-button",
      ...i && { "data-prevent-double-click": "true" },
      id: _,
      style: d,
      title: E,
      "aria-label": f,
      "aria-describedby": k,
      "aria-labelledby": w,
      tabIndex: g,
      name: x,
      value: I,
      form: v,
      formAction: C,
      formEncType: S,
      formMethod: N,
      formNoValidate: u,
      formTarget: L,
      autoFocus: B,
      ...b
    },
    n
  );
});
X.displayName = "ButtonServer";
const ea = ({
  text: a = "Back",
  html: t,
  href: s = "#",
  className: n,
  element: r = "a",
  onClick: l,
  ...o
}) => {
  const c = y(
    "nhsuk-back-link",
    n
  ), i = y(
    "nhsuk-back-link__link"
  ), m = () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "svg",
    {
      className: "nhsuk-icon nhsuk-icon__chevron-left",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      height: "24",
      width: "24"
    },
    /* @__PURE__ */ e.createElement("path", { d: "M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z" })
  ), t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a);
  return /* @__PURE__ */ e.createElement("div", { className: c }, r === "button" ? /* @__PURE__ */ e.createElement(
    "button",
    {
      className: i,
      onClick: l,
      type: "button",
      ...o
    },
    m()
  ) : /* @__PURE__ */ e.createElement(
    "a",
    {
      className: i,
      href: s,
      ...o
    },
    m()
  ));
};
function pe(a) {
  const { color: t = "default", noBorder: s, closable: n, disabled: r, className: l } = a;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    s ? "nhsuk-tag--no-border" : "",
    n ? "nhsuk-tag--closable" : "",
    r ? "nhsuk-tag--disabled" : "",
    l || ""
  ].filter(Boolean).join(" "), showClose: !!n, disabled: !!r };
}
const aa = ({
  text: a,
  html: t,
  children: s,
  color: n = "default",
  noBorder: r = !1,
  closable: l = !1,
  onClose: o,
  disabled: c = !1,
  className: i,
  ...m
}) => {
  const h = pe({ color: n, noBorder: r, closable: l, disabled: c, className: i }), p = (_) => {
    _.preventDefault(), _.stopPropagation(), !c && o && o();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: h.classes, ...m }, s || (t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a), l && /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "nhsuk-tag__close",
      onClick: p,
      disabled: c,
      "aria-label": "Remove",
      title: "Remove"
    },
    "×"
  ));
};
function be(a) {
  const t = a.size || "m", s = [
    "nhsuk-label",
    t !== "m" ? `nhsuk-label--${t}` : "",
    a.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: a.isPageHeading ? "h1" : "label",
    classes: s,
    size: t,
    htmlFor: a.isPageHeading ? void 0 : a.htmlFor,
    isPageHeading: !!a.isPageHeading
  };
}
const Y = ({
  htmlFor: a,
  className: t,
  isPageHeading: s = !1,
  size: n = "m",
  children: r,
  ...l
}) => {
  const o = be({ size: n, isPageHeading: s, className: t, htmlFor: a }), c = o.tag;
  return /* @__PURE__ */ e.createElement(c, { className: o.classes, htmlFor: o.htmlFor, ...l }, s ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: a }, r) : r);
};
function Ee(a) {
  switch (a) {
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
function ge(a) {
  const t = a.level ?? Ee(a.size), s = [
    "nhsuk-heading",
    a.size ? `nhsuk-heading--${a.size}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), n = a.marginBottom ? { marginBottom: a.marginBottom } : void 0;
  return { tag: `h${t}`, classes: s, style: n };
}
const A = ({ level: a, className: t, text: s, html: n, children: r, size: l, marginBottom: o, ...c }) => {
  const i = ge({ level: a, size: l, className: t, marginBottom: o }), m = r || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s);
  return se(i.tag, { className: i.classes, style: i.style, ...c }, m);
};
function Ne(a) {
  return { classes: [
    "nhsuk-hint",
    a.className || ""
  ].filter(Boolean).join(" "), id: a.id };
}
const ve = ({
  id: a,
  className: t,
  children: s,
  ...n
}) => {
  const r = Ne({ id: a, className: t });
  return /* @__PURE__ */ e.createElement("div", { className: r.classes, id: r.id, ...n }, s);
};
function ye(a) {
  return {
    classes: ["nhsuk-error-message", a.className || ""].filter(Boolean).join(" "),
    id: a.id,
    visuallyHiddenText: a.visuallyHiddenText ?? "Error:"
  };
}
const we = ({ id: a, className: t, visuallyHiddenText: s = "Error:", children: n, ...r }) => {
  const l = ye({ id: a, className: t, visuallyHiddenText: s });
  return /* @__PURE__ */ e.createElement("span", { className: l.classes, id: l.id, ...r }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, l.visuallyHiddenText, " "), n);
};
function Ce(a) {
  const t = ["nhsuk-fieldset", a.className || ""].filter(Boolean).join(" "), s = a.legend ? [
    "nhsuk-fieldset__legend",
    a.legend.size ? `nhsuk-fieldset__legend--${a.legend.size}` : "",
    a.legend.className || ""
  ].filter(Boolean).join(" ") : void 0;
  return {
    fieldsetClasses: t,
    legendClasses: s,
    legendIsPageHeading: !!a.legend?.isPageHeading,
    describedBy: a.describedBy
  };
}
const U = ({
  children: a,
  legend: t,
  className: s,
  describedBy: n,
  ...r
}) => {
  const l = Ce({
    className: s,
    describedBy: n,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), o = () => {
    const c = t?.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return l.legendIsPageHeading ? /* @__PURE__ */ e.createElement("h1", { className: "nhsuk-fieldset__heading" }, c) : c;
  };
  return /* @__PURE__ */ e.createElement(
    "fieldset",
    {
      className: l.fieldsetClasses,
      "aria-describedby": l.describedBy,
      ...r
    },
    t && (t.text || t.html) && /* @__PURE__ */ e.createElement("legend", { className: l.legendClasses }, o()),
    a
  );
}, ta = ({
  text: a = "Skip to main content",
  href: t = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const r = y("nhsuk-skip-link", s);
  return /* @__PURE__ */ e.createElement(
    "a",
    {
      className: r,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": "false",
      ...n
    },
    a
  );
}, xe = re(
  ({
    summaryText: a,
    summaryHtml: t,
    text: s,
    html: n,
    open: r = !1,
    className: l = "",
    id: o,
    children: c,
    ...i
  }, m) => {
    const h = [
      "nhsuk-details",
      l
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-details__summary-text" }, a);
    let _;
    return c ? _ = c : n ? _ = /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s && (_ = s), /* @__PURE__ */ e.createElement(
      "details",
      {
        ref: m,
        id: o,
        className: h,
        open: r,
        ...i
      },
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, p),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, _)
    );
  }
);
xe.displayName = "Details";
const na = ({
  text: a,
  html: t,
  children: s,
  className: n,
  ...r
}) => {
  const l = y("nhsuk-inset-text", n), o = () => s || (t ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t } }) : a ? /* @__PURE__ */ e.createElement("p", null, a) : null);
  return /* @__PURE__ */ e.createElement("div", { className: l, ...r }, o());
}, Ie = ({
  id: a,
  className: t,
  headingText: s,
  headingHtml: n,
  headingLevel: r = 2,
  bodyText: l,
  bodyHtml: o,
  children: c,
  ...i
}) => {
  const m = y(
    "nhsuk-panel",
    t
  ), h = () => !s && !n && !c ? null : n ? /* @__PURE__ */ e.createElement(
    A,
    {
      level: r,
      className: "nhsuk-panel__heading",
      html: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : s ? /* @__PURE__ */ e.createElement(
    A,
    {
      level: r,
      className: "nhsuk-panel__heading",
      text: s,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, p = () => c ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, c) : o ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: o }
    }
  ) : l ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ e.createElement("p", null, l)) : null;
  return /* @__PURE__ */ e.createElement("div", { className: m, id: a, ...i }, h(), p());
}, G = ({
  children: a,
  href: t,
  active: s = !1,
  attributes: n = {}
}) => /* @__PURE__ */ e.createElement("li", { className: "nhsuk-breadcrumb__item" }, s ? /* @__PURE__ */ e.createElement(
  "span",
  {
    className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
    "aria-current": "page",
    ...n
  },
  a
) : /* @__PURE__ */ e.createElement(
  "a",
  {
    className: "nhsuk-breadcrumb__link",
    href: t,
    ...n
  },
  a
)), Be = ({
  items: a = [],
  children: t,
  classes: s,
  labelText: n = "Breadcrumb",
  href: r,
  text: l,
  reverse: o = !1,
  attributes: c = {}
}) => {
  const i = () => t ? e.Children.toArray(t).filter(
    (k) => e.isValidElement(k) && (k.type === G || k.type?.displayName === "BreadcrumbItem")
  ).map((k) => ({
    text: typeof k.props.children == "string" ? k.props.children : String(k.props.children),
    href: k.props.href,
    active: k.props.active,
    attributes: k.props.attributes
  })) : [], m = () => t ? i() : r && l ? [{ href: r, text: l }] : a, h = () => {
    const f = m();
    if (f && f.length > 0) {
      const k = f.slice().reverse().find((w) => w.href && !w.active);
      if (k)
        return { href: k.href, text: k.text };
    }
    return { text: "Home" };
  }, p = m(), _ = h(), d = y(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": o
    },
    s
  ), E = n;
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: d,
      "aria-label": E,
      role: "navigation",
      ...c
    },
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-breadcrumb__list", role: "list" }, t ? (
      // Render children directly if using compound component pattern
      e.Children.map(t, (f, k) => e.isValidElement(f) && (f.type === G || f.type?.displayName === "BreadcrumbItem") ? e.cloneElement(f, { key: k }) : null)
    ) : (
      // Render from items array
      p?.filter((f) => f.active || !!f.href).map((f, k) => /* @__PURE__ */ e.createElement("li", { key: k, className: "nhsuk-breadcrumb__item", role: "listitem" }, f.active ? /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
          "aria-current": "page",
          role: "text",
          ...f.attributes || {}
        },
        f.text
      ) : /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-breadcrumb__link",
          href: f.href,
          role: "link",
          ...f.attributes || {}
        },
        f.text
      )))
    )),
    _.href && /* @__PURE__ */ e.createElement("p", { className: "nhsuk-breadcrumb__back" }, /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-breadcrumb__backlink",
        href: _.href,
        role: "link",
        "aria-label": `Back to ${_.text}`,
        ...a.length > 0 ? a[a.length - 1]?.attributes || {} : {}
      },
      /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Back to  "),
      _.text
    ))
  );
}, Se = Be;
Se.Item = G;
G.displayName = "BreadcrumbItem";
const Le = ({
  children: a,
  type: t = "bullet",
  size: s = "medium",
  border: n = !1,
  className: r,
  role: l,
  as: o,
  ...c
}) => {
  const i = o || (t === "number" ? "ol" : "ul"), m = y(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": n,
      [`nhsuk-list--${s}`]: s !== "medium"
    },
    r
  );
  return /* @__PURE__ */ e.createElement(i, { className: m, role: l, ...c }, a);
}, He = ({
  children: a,
  className: t,
  ...s
}) => {
  const n = y("nhsuk-list__item", t);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...s }, a);
}, Te = Le;
Te.Item = He;
const sa = ({
  className: a,
  links: t = [],
  linksColumn2: s,
  linksColumn3: n,
  metaLinks: r,
  copyright: l = "© NHS England",
  containerClasses: o,
  attributes: c = {},
  style: i,
  footerStyle: m,
  containerStyle: h
}) => {
  const p = (d, E = !1) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `${d.URL}-${d.label}`,
      className: y("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": E
      })
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-footer__list-item-link",
        href: d.URL,
        target: d.newWindow ? "_blank" : void 0,
        rel: d.newWindow ? "noopener noreferrer" : void 0
      },
      d.label
    )
  ), _ = !!(s || n);
  return /* @__PURE__ */ e.createElement("footer", { role: "contentinfo", ...c, style: { ...c?.style, ...i } }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-footer-container" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: y("nhsuk-width-container", o),
      style: h
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Support links"),
    /* @__PURE__ */ e.createElement("div", { className: y("nhsuk-footer", a), style: m }, _ ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, t.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((d) => p(d))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, s.map((d) => p(d))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((d) => p(d))), r && r.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, r.map((d) => p(d))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((d) => p(d, !0)), (s || []).map((d) => p(d, !0)), (n || []).map((d) => p(d, !0)), (r || []).map((d) => p(d, !0)))
    )),
    !_ && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l))
  ), _ && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l)))));
}, ra = ({
  heading: a,
  headingLevel: t = 3,
  text: s,
  html: n,
  children: r,
  className: l,
  ...o
}) => {
  const c = /important/i.test(a), i = () => r || (n ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s ? /* @__PURE__ */ e.createElement("p", null, s) : null), m = [
    "nhsuk-warning-callout",
    l
  ].filter(Boolean).join(" "), h = `h${t}`;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: m,
      ...o
    },
    se(
      h,
      { className: "nhsuk-warning-callout__label" },
      c ? /* @__PURE__ */ e.createElement(e.Fragment, null, a, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), a)
    ),
    i()
  );
}, la = (a) => /* @__PURE__ */ e.createElement(de, { ...a }), ca = ({
  items: a,
  classes: t,
  ariaLabel: s = "Pages in this guide",
  attributes: n = {}
}) => {
  const r = y("nhsuk-contents-list", t), l = (o, c) => o.current ? /* @__PURE__ */ e.createElement(
    "li",
    {
      key: c,
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...o.attributes || {}
    },
    /* @__PURE__ */ e.createElement("span", { className: "nhsuk-contents-list__current" }, o.text)
  ) : /* @__PURE__ */ e.createElement(
    "li",
    {
      key: c,
      className: "nhsuk-contents-list__item"
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-contents-list__link",
        href: o.href,
        ...o.attributes || {}
      },
      o.text
    )
  );
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: r,
      role: "navigation",
      "aria-label": s,
      ...n
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Contents"),
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-contents-list__list" }, a.map((o, c) => l(o, c)))
  );
}, $e = re(
  ({
    title: a,
    type: t,
    items: s,
    hidePrefix: n = !1,
    headingLevel: r = 3,
    className: l,
    ...o
  }, c) => {
    const i = ["nhsuk-do-dont-list"];
    l && i.push(l);
    const m = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], h = () => t === "cross" ? /* @__PURE__ */ e.createElement(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__cross",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "34",
        height: "34"
      },
      /* @__PURE__ */ e.createElement(
        "path",
        {
          d: "M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",
          fill: "#d5281b"
        }
      ),
      /* @__PURE__ */ e.createElement(
        "path",
        {
          d: "M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",
          fill: "#d5281b"
        }
      )
    ) : /* @__PURE__ */ e.createElement(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__tick",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        width: "34",
        height: "34"
      },
      /* @__PURE__ */ e.createElement(
        "path",
        {
          strokeWidth: "4",
          strokeLinecap: "round",
          d: "M18.4 7.8l-8.5 8.4L5.6 12",
          stroke: "#007f3b"
        }
      )
    ), p = (d) => t === "cross" && !n ? `do not ${d}` : d, _ = () => /* @__PURE__ */ e.createElement(
      A,
      {
        level: r,
        className: "nhsuk-do-dont-list__label",
        text: a
      }
    );
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: c,
        className: i.join(" "),
        ...o
      },
      _(),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: m.join(" "), role: "list" }, s.map((d, E) => /* @__PURE__ */ e.createElement("li", { key: E }, h(), p(d.item)))))
    );
  }
);
$e.displayName = "DoDontList";
const oa = ({
  src: a,
  alt: t,
  caption: s,
  sizes: n,
  srcset: r,
  className: l,
  ...o
}) => {
  const c = [
    "nhsuk-image",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "figure",
    {
      className: c,
      ...o
    },
    /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-image__img",
        src: a,
        alt: t,
        ...n && r ? { sizes: n, srcSet: r } : {}
      }
    ),
    s && /* @__PURE__ */ e.createElement(
      "figcaption",
      {
        className: "nhsuk-image__caption",
        dangerouslySetInnerHTML: { __html: s }
      }
    )
  );
}, ia = ({
  previousUrl: a,
  previousPage: t,
  nextUrl: s,
  nextPage: n,
  classes: r,
  attributes: l = {}
}) => {
  const o = y("nhsuk-pagination", r);
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: o,
      role: "navigation",
      "aria-label": "Pagination",
      ...l
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-pagination__list" }, a && t && /* @__PURE__ */ e.createElement("li", { className: "nhsuk-pagination-item--previous" }, /* @__PURE__ */ e.createElement("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--prev", href: a }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-pagination__title" }, "Previous"), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":"), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-pagination__page" }, t), /* @__PURE__ */ e.createElement(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__arrow-left",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "34",
        height: "34"
      },
      /* @__PURE__ */ e.createElement("path", { d: "M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z" })
    ))), s && n && /* @__PURE__ */ e.createElement("li", { className: "nhsuk-pagination-item--next" }, /* @__PURE__ */ e.createElement("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: s }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-pagination__title" }, "Next"), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":"), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-pagination__page" }, n), /* @__PURE__ */ e.createElement(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__arrow-right",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        width: "34",
        height: "34"
      },
      /* @__PURE__ */ e.createElement("path", { d: "M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" })
    ))))
  );
}, ma = ({
  items: a,
  noBorder: t = !1,
  className: s,
  ...n
}) => {
  const r = y(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    s
  ), l = (c) => c.children ? c.children : c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text ? c.text : null, o = (c) => !c || !c.items.length ? null : /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__actions" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-summary-list__actions-list" }, c.items.map((i, m) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: m,
      className: "nhsuk-summary-list__actions-list-item"
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        href: i.href,
        className: "nhsuk-link",
        ...i.attributes
      },
      l(i),
      i.visuallyHiddenText && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, i.visuallyHiddenText)
    )
  ))));
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-summary-list-container" }, /* @__PURE__ */ e.createElement("dl", { className: r, ...n }, a.map((c, i) => /* @__PURE__ */ e.createElement("div", { key: i, className: "nhsuk-summary-list__row" }, /* @__PURE__ */ e.createElement("dt", { className: "nhsuk-summary-list__key" }, l(c.key)), /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__value" }, l(c.value)), o(c.actions)))));
}, ua = ({
  title: a,
  value: t,
  subtitle: s,
  variant: n = "default",
  href: r,
  className: l = "",
  ariaLabel: o,
  ...c
}) => {
  const i = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${n}`,
    l
  ].filter(Boolean).join(" "), m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(A, { level: 3, className: "nhs-fdp-summary-card__title" }, a), /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__value" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__subtitle" }, s));
  return r ? /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `${i} nhs-fdp-summary-card--clickable`,
      href: r,
      "aria-label": o || `${a}: ${t}`,
      ...c
    },
    m
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: i,
      "aria-label": o,
      ...c
    },
    m
  );
};
function oe(a) {
  var t, s, n = "";
  if (typeof a == "string" || typeof a == "number") n += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var r = a.length;
    for (t = 0; t < r; t++) a[t] && (s = oe(a[t])) && (n && (n += " "), n += s);
  } else for (s in a) a[s] && (n && (n += " "), n += s);
  return n;
}
function ae() {
  for (var a, t, s = 0, n = "", r = arguments.length; s < r; s++) (a = arguments[s]) && (t = oe(a)) && (n && (n += " "), n += t);
  return n;
}
const da = ({
  label: a,
  value: t,
  unit: s,
  delta: n,
  status: r = "neutral",
  variant: l = "default",
  subtitle: o,
  metadata: c,
  trendData: i,
  loading: m = !1,
  error: h,
  valueFormatter: p,
  className: _,
  style: d,
  id: E,
  announceDelta: f = !0,
  visual: k
}) => {
  const w = H.useId(), g = E || w, x = `${g}-label`, I = `${g}-value`, v = `${g}-delta`, C = typeof t == "number" && !Number.isNaN(t), S = m ? "—" : h ? "" : C ? p ? p(t) : t.toLocaleString() : t;
  let N, u = "", L = "";
  if (n && !m && !h) {
    N = n.direction || (n.value > 0 ? "up" : n.value < 0 ? "down" : "neutral");
    const B = Math.abs(n.value), T = N === "up" ? `+${B}` : N === "down" ? `-${B}` : "0", $ = n.isPercent ? "%" : "";
    if (u = `${T}${$}`, n.ariaLabel)
      L = n.ariaLabel;
    else {
      const b = n.invert ? N === "down" : N === "up";
      L = `${N === "neutral" ? "no change" : N === "up" ? "up" : "down"} ${B}${$}${N === "neutral" ? "" : b ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ H.createElement(
    "div",
    {
      className: ae(
        "fdp-metric-card",
        l && `fdp-metric-card--${l}`,
        r && `fdp-metric-card--status-${r}`,
        m && "fdp-metric-card--loading",
        h && "fdp-metric-card--error",
        _
      ),
      style: d,
      role: "group",
      "aria-labelledby": x,
      "data-component": "MetricCard"
    },
    /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__inner" }, /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__header" }, /* @__PURE__ */ H.createElement("h3", { id: x, className: "fdp-metric-card__label" }, a), c && /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__metadata" }, c)), /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__content" }, /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__value-section" }, /* @__PURE__ */ H.createElement("div", { id: I, className: "fdp-metric-card__value" }, m ? /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true" }, /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" })) : h ? /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__error", role: "alert" }, h) : /* @__PURE__ */ H.createElement(H.Fragment, null, /* @__PURE__ */ H.createElement("span", { className: "fdp-metric-card__number" }, S), s && /* @__PURE__ */ H.createElement("span", { className: "fdp-metric-card__unit" }, s))), o && !m && !h && /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__subtitle" }, o)), n && !m && !h && /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__delta-section" }, /* @__PURE__ */ H.createElement(
      "div",
      {
        id: v,
        "aria-label": L,
        className: ae(
          "fdp-metric-card__delta",
          N && `fdp-metric-card__delta--${N}`
        )
      },
      /* @__PURE__ */ H.createElement("span", { className: "fdp-metric-card__delta-value" }, u),
      n.period && /* @__PURE__ */ H.createElement("span", { className: "fdp-metric-card__delta-period" }, n.period)
    )), i && i.length > 0 && !m && !h && /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })), k && !h && /* @__PURE__ */ H.createElement("div", { className: "fdp-metric-card__visual", "aria-hidden": "true" }, k), f && n && !n.ariaLabel && !m && !h && /* @__PURE__ */ H.createElement("div", { className: "fdp-visually-hidden", "aria-live": "polite" }, L))
  );
}, z = { current: null }, Me = () => {
  if (z.current) return z.current;
  try {
    z.current = require("prismjs");
    try {
      require("prismjs/components/prism-typescript");
    } catch {
    }
    try {
      require("prismjs/components/prism-tsx");
    } catch {
    }
    try {
      require("prismjs/components/prism-json");
    } catch {
    }
  } catch {
    z.current = null;
  }
  return z.current;
}, Pe = (a) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let s = a;
  return t.forEach((n) => {
    s = s.replace(n.regex, (r) => `<span class="nhsuk-code-${n.cls}">${r}</span>`);
  }), s;
}, Z = (a, t, s) => {
  if (s || !t) return a;
  const n = Me();
  if (n && n.languages) {
    const r = n.languages[t] ? t : n.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : n.languages.json && t === "json" ? "json" : void 0;
    if (r)
      try {
        return n.highlight(a, n.languages[r], r);
      } catch {
      }
  }
  return Pe(a);
}, je = ({
  rows: a,
  head: t,
  caption: s,
  captionSize: n,
  firstCellIsHeader: r = !1,
  responsive: l = !1,
  heading: o,
  headingLevel: c = 3,
  panel: i = !1,
  panelClasses: m,
  tableClasses: h,
  classes: p,
  attributes: _,
  "data-testid": d,
  columns: E,
  data: f,
  visuallyHiddenCaption: k = !1
}) => {
  const w = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), g = y(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": l
    },
    h
  ), x = y(p), I = (u, L) => {
    const B = y(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${u.format}`]: u.format
      },
      u.classes
    ), T = {
      scope: "col",
      ...u.colspan && { colSpan: u.colspan },
      ...u.rowspan && { rowSpan: u.rowspan },
      ...l && { role: "columnheader" },
      ...u.attributes
    };
    let $;
    if (u.node != null)
      $ = /* @__PURE__ */ e.createElement(e.Fragment, null, u.node);
    else if (u.html)
      $ = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: u.html } });
    else if (u.code != null) {
      const b = Array.isArray(u.code), M = b ? u.code.join(`
`) : u.code, P = b || M.includes(`
`), F = {
        className: y("nhsuk-table__code", u.codeClassName, {
          "nhsuk-table__code--block": P,
          "nhsuk-table__code--inline": !P
        }),
        ...u.codeLanguage ? { "data-language": u.codeLanguage } : {}
      }, j = Z(M, u.codeLanguage);
      $ = P ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...F,
          dangerouslySetInnerHTML: { __html: j }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...F,
          dangerouslySetInnerHTML: { __html: j }
        }
      );
    } else
      $ = u.text;
    return /* @__PURE__ */ e.createElement("th", { key: L, className: B, ...T }, $);
  }, v = (u, L, B) => {
    const T = r && B || u.rowHeader, $ = y(
      T ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${T ? "header" : "cell"}--${u.format}`]: u.format
      },
      u.classes
    ), b = {
      ...T && { scope: "row" },
      ...u.colspan && { colSpan: u.colspan },
      ...u.rowspan && { rowSpan: u.rowspan },
      ...l && {
        role: T ? "rowheader" : "cell",
        ...u.header && { "data-label": u.header }
      },
      ...u.attributes
    };
    let M;
    if (u.node != null)
      M = /* @__PURE__ */ e.createElement(e.Fragment, null, u.node);
    else if (u.html)
      M = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: u.html } });
    else if (u.code != null) {
      const j = Array.isArray(u.code), O = j ? u.code.join(`
`) : u.code, R = j || O.includes(`
`), V = {
        className: y("nhsuk-table__code", u.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...u.codeLanguage ? { "data-language": u.codeLanguage } : {}
      }, W = Z(
        O,
        u.codeLanguage,
        u.disableHighlight
      );
      M = R ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...V,
          dangerouslySetInnerHTML: { __html: W }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...V,
          dangerouslySetInnerHTML: { __html: W }
        }
      );
    } else
      M = u.text;
    const P = /* @__PURE__ */ e.createElement(e.Fragment, null, l && u.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, u.header, " "), M), F = T ? "th" : "td";
    return /* @__PURE__ */ e.createElement(F, { key: L, className: $, ...b }, P);
  };
  let C = t, S = a;
  !C && E && E.length && (C = E.map((u) => ({
    text: u.title,
    format: u.format,
    classes: u.headerClasses,
    attributes: u.headerAttributes
  }))), !S && E && f && f.length && (S = f.map((u, L) => E.map((B) => {
    const T = B.accessor ? B.accessor(u, L) : u[B.key];
    let $ = { format: B.format, classes: B.cellClasses, attributes: B.cellAttributes };
    if (B.rowHeader && ($.rowHeader = !0), B.render) {
      const b = B.render(T, u, L, B);
      return b == null || typeof b == "boolean" ? { ...$, text: "" } : typeof b == "string" || typeof b == "number" ? { ...$, text: String(b) } : { ...$, ...b };
    }
    return { ...$, text: T != null ? String(T) : "" };
  })));
  const N = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: g,
      ...l && { role: "table" },
      ..._,
      ...d && { "data-testid": d }
    },
    s && /* @__PURE__ */ e.createElement("caption", { className: y(w, k && "nhsuk-u-visually-hidden") }, s),
    C && C.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...l && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...l && { role: "row" } }, C.map(
        (u, L) => I(u, L)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, S && S.map((u, L) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: L,
        className: "nhsuk-table__row",
        ...l && { role: "row" }
      },
      u.map(
        (B, T) => v(B, T, T === 0)
      )
    )))
  );
  return i ? /* @__PURE__ */ e.createElement(Ie, { className: m }, o && /* @__PURE__ */ e.createElement(A, { level: c, className: "nhsuk-table__heading-tab" }, o), N()) : x ? /* @__PURE__ */ e.createElement("div", { className: x }, N()) : N();
}, Fe = ({
  children: a,
  size: t,
  className: s
}) => {
  const n = y(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    s
  );
  return /* @__PURE__ */ e.createElement("caption", { className: n }, a);
}, ie = ({
  responsive: a,
  className: t,
  children: s,
  ...n
}) => {
  const r = a ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: t, ...r, ...n }, s);
}, me = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: r,
  codeClassName: l,
  disableHighlight: o,
  format: c,
  classes: i,
  colspan: m,
  rowspan: h,
  attributes: p,
  responsive: _,
  as: d = "th"
}) => {
  const E = y(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${c}`]: c },
    i
  ), f = {
    scope: "col",
    ...m && { colSpan: m },
    ...h && { rowSpan: h },
    ..._ && { role: "columnheader" },
    ...p
  };
  let k;
  if (s != null) k = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) k = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const g = Array.isArray(n), x = g ? n.join(`
`) : n, I = g || x.includes(`
`), v = {
      className: y("nhsuk-table__code", l, {
        "nhsuk-table__code--block": I,
        "nhsuk-table__code--inline": !I
      }),
      ...r ? { "data-language": r } : {}
    }, C = Z(
      x,
      r,
      o
    );
    k = I ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...v,
        dangerouslySetInnerHTML: { __html: C }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...v, dangerouslySetInnerHTML: { __html: C } });
  } else k = a;
  const w = d;
  return /* @__PURE__ */ e.createElement(w, { className: E, ...f }, k);
}, Ae = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: r,
  codeClassName: l,
  disableHighlight: o,
  format: c,
  classes: i,
  colspan: m,
  rowspan: h,
  attributes: p,
  responsive: _,
  rowHeader: d
}) => {
  const E = !!d, f = E ? "th" : "td", k = y(
    E ? "nhsuk-table__header" : "nhsuk-table__cell",
    c && `nhsuk-table__${E ? "header" : "cell"}--${c}`,
    i
  ), w = {
    ...m && { colSpan: m },
    ...h && { rowSpan: h },
    ...E && { scope: "row" },
    ..._ && { role: E ? "rowheader" : "cell" },
    ...p
  };
  let g;
  if (s != null) g = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) g = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const x = Array.isArray(n), I = x ? n.join(`
`) : n, v = x || I.includes(`
`), C = {
      className: y("nhsuk-table__code", l, {
        "nhsuk-table__code--block": v,
        "nhsuk-table__code--inline": !v
      }),
      ...r ? { "data-language": r } : {}
    }, S = Z(I, r, o);
    g = v ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ...C, dangerouslySetInnerHTML: { __html: S } })) : /* @__PURE__ */ e.createElement("code", { ...C, dangerouslySetInnerHTML: { __html: S } });
  } else g = a;
  return /* @__PURE__ */ e.createElement(f, { className: k, ...w }, g);
}, D = je;
D.Caption = Fe;
D.BodyRow = ie;
D.HeaderCell = me;
D.Cell = Ae;
let te = !1, ne = !1;
Object.defineProperty(D, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !te && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), te = !0), ie;
  }
});
Object.defineProperty(D, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ne && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), ne = !0), me;
  }
});
const De = ({
  heading: a,
  headingLevel: t = 1,
  headingClasses: s = "",
  text: n,
  html: r,
  imageURL: l,
  containerClasses: o = "",
  classes: c = "",
  children: i,
  ...m
}) => {
  const h = [
    "nhsuk-hero",
    l && a ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    l && !a ? "nhsuk-hero--image" : "",
    c
  ].filter(Boolean).join(" "), p = [
    "nhsuk-width-container",
    o,
    l ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), _ = [
    "nhsuk-hero__heading",
    s,
    !i && !n && !r ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), d = i || a || n || r, E = () => {
    if (!a) return null;
    const f = { className: _ };
    switch (t) {
      case 1:
        return /* @__PURE__ */ e.createElement("h1", { ...f }, a);
      case 2:
        return /* @__PURE__ */ e.createElement("h2", { ...f }, a);
      case 3:
        return /* @__PURE__ */ e.createElement("h3", { ...f }, a);
      case 4:
        return /* @__PURE__ */ e.createElement("h4", { ...f }, a);
      case 5:
        return /* @__PURE__ */ e.createElement("h5", { ...f }, a);
      case 6:
        return /* @__PURE__ */ e.createElement("h6", { ...f }, a);
      default:
        return /* @__PURE__ */ e.createElement("h1", { ...f }, a);
    }
  };
  return /* @__PURE__ */ e.createElement(
    "section",
    {
      className: h,
      style: l ? { backgroundImage: `url('${l}')` } : void 0,
      role: "banner",
      ...m
    },
    l && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, d && /* @__PURE__ */ e.createElement("div", { className: p }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, E(), i || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !l && d && /* @__PURE__ */ e.createElement("div", { className: p }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, E(), i || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
De.displayName = "Hero";
const Re = e.forwardRef(({
  variant: a = "default",
  heading: t,
  headingHtml: s,
  headingLevel: n = 2,
  headingClasses: r,
  description: l,
  descriptionHtml: o,
  href: c,
  imgURL: i,
  imgAlt: m,
  ...h
}, p) => {
  const _ = [
    "nhsuk-card",
    a === "clickable" && "nhsuk-card--clickable",
    a === "secondary" && "nhsuk-card--secondary",
    a === "feature" && "nhsuk-card--feature",
    h.className
  ].filter(Boolean).join(" "), d = [
    "nhsuk-card__content",
    a === "feature" && "nhsuk-card__content--feature",
    a === "primary" && "nhsuk-card__content--primary",
    a === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), E = [
    "nhsuk-card__heading",
    a === "feature" && "nhsuk-card__heading--feature",
    r
  ].filter(Boolean).join(" "), f = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const g = () => c && a !== "feature" ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-card__link", href: c }, t) : t;
    return /* @__PURE__ */ e.createElement(
      A,
      {
        level: n,
        className: E
      },
      g()
    );
  }, k = () => h.children ? h.children : o ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: o } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, l) : null, w = () => a !== "primary" ? null : /* @__PURE__ */ e.createElement(
    "svg",
    {
      className: "nhsuk-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "27",
      height: "27",
      "aria-hidden": "true",
      focusable: "false"
    },
    /* @__PURE__ */ e.createElement("circle", { cx: "13.333", cy: "13.333", r: "13.333", fill: "" }),
    /* @__PURE__ */ e.createElement("g", { fill: "none", stroke: "#fff", strokeLinecap: "round", strokeMiterlimit: "10", strokeWidth: "2.667" }, /* @__PURE__ */ e.createElement("path", { d: "M15.438 13l-3.771 3.771" }), /* @__PURE__ */ e.createElement("path", { d: "M11.667 9.229L15.438 13" }))
  );
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      ...h,
      className: _,
      ref: p
    },
    i && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: i,
        alt: m || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: d }, f(), k(), w())
  );
});
Re.displayName = "Card";
const ha = ({
  className: a,
  children: t,
  "data-testid": s,
  id: n
}) => {
  const r = ["nhsuk-card-group", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "ul",
    {
      className: r,
      "data-testid": s,
      id: n
    },
    t
  );
}, _a = ({
  className: a,
  children: t,
  "data-testid": s
}) => {
  const n = ["nhsuk-card-group__item", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "li",
    {
      className: n,
      "data-testid": s
    },
    t
  );
}, fa = ({
  type: a,
  heading: t,
  headingHtml: s,
  headingLevel: n = 3,
  headingClasses: r,
  description: l,
  descriptionHtml: o,
  className: c,
  children: i,
  "data-testid": m,
  id: h,
  "aria-label": p,
  "aria-labelledby": _,
  "aria-describedby": d
}) => {
  const E = [
    "nhsuk-care-card",
    `nhsuk-care-card--${a}`,
    c
  ].filter(Boolean).join(" "), f = [
    "nhsuk-care-card__heading",
    r
  ].filter(Boolean).join(" "), k = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const g = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[a], x = /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, g, " "), t);
    return /* @__PURE__ */ e.createElement(
      A,
      {
        level: n,
        className: f
      },
      x
    );
  }, w = () => i || (o ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: o } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, l) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: E,
      "data-testid": m,
      id: h,
      "aria-label": p,
      "aria-labelledby": _,
      "aria-describedby": d
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, k(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, w())
  );
};
function ze(a) {
  const s = (a.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    a.hasError ? "nhsuk-input--error" : "",
    s ? "nhsuk-input--range" : "",
    !s && a.width && a.width !== "full" ? `nhsuk-input--width-${a.width}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), isRange: s };
}
function ee(a) {
  const {
    id: t,
    name: s,
    type: n = "text",
    value: r,
    defaultValue: l,
    placeholder: o,
    disabled: c = !1,
    readOnly: i = !1,
    required: m = !1,
    hasError: h = !1,
    describedBy: p,
    className: _,
    width: d = "full",
    inputMode: E,
    autoComplete: f,
    maxLength: k,
    minLength: w,
    pattern: g,
    step: x,
    min: I,
    max: v,
    showValueLabels: C = !1,
    showCurrentValue: S = !1,
    valueLabels: N,
    // Strip interactive handlers in server variant
    onChange: u,
    onBlur: L,
    onFocus: B,
    onKeyDown: T,
    ...$
  } = a, { classes: b, isRange: M } = ze({
    type: n,
    hasError: h,
    width: d,
    className: _
  }), P = {
    id: t,
    name: s,
    type: n,
    placeholder: o,
    disabled: c,
    readOnly: i,
    required: m,
    "aria-describedby": p,
    inputMode: E,
    autoComplete: f,
    maxLength: k,
    minLength: w,
    pattern: g,
    step: x,
    min: I,
    max: v,
    ...$
  };
  if (M) {
    const F = r ?? l ?? (typeof I < "u" ? String(I) : "0"), j = /* @__PURE__ */ e.createElement(
      "input",
      {
        className: b,
        ...r !== void 0 ? { value: r } : {},
        ...r === void 0 && l !== void 0 ? { defaultValue: l } : {},
        "data-current-value": F,
        ...P
      }
    );
    return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-wrapper" }, C ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-labels" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min" }, N?.min || I || "0"), j, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max" }, N?.max || v || "100")) : j, S && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-current-value" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-current-label" }, N?.current || "Current value:", " ", /* @__PURE__ */ e.createElement("strong", null, F))));
  }
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: b,
      ...r !== void 0 ? { value: r } : {},
      ...r === void 0 && l !== void 0 ? { defaultValue: l } : {},
      ...P
    }
  );
}
function Oe(a) {
  const t = a.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    a.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
const ka = ({
  id: a,
  name: t,
  value: s,
  defaultValue: n,
  placeholder: r,
  disabled: l = !1,
  readOnly: o = !1,
  required: c = !1,
  hasError: i = !1,
  describedBy: m,
  className: h,
  rows: p = 5,
  cols: _,
  maxLength: d,
  minLength: E,
  wrap: f = "soft",
  resize: k = "vertical",
  autoComplete: w,
  spellCheck: g,
  onChange: x,
  onBlur: I,
  onFocus: v,
  onKeyDown: C,
  ...S
}) => {
  const { classes: N, describedBy: u } = Oe({ hasError: i, resize: k, className: h, describedBy: m });
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: N,
      id: a,
      name: t,
      value: s,
      defaultValue: n,
      placeholder: r,
      disabled: l,
      readOnly: o,
      required: c,
      "aria-describedby": u,
      rows: p,
      cols: _,
      maxLength: d,
      minLength: E,
      wrap: f,
      autoComplete: w,
      spellCheck: g,
      onChange: x,
      onBlur: I,
      onFocus: v,
      onKeyDown: C,
      ...S
    }
  );
};
function Ve(a) {
  return { classes: [
    "nhsuk-select",
    a.hasError ? "nhsuk-select--error" : "",
    a.className || ""
  ].filter(Boolean).join(" ") };
}
const We = ({
  value: a,
  disabled: t = !1,
  selected: s = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: n,
  children: r,
  ...l
}) => {
  const o = y(
    "nhsuk-select__option",
    n
  );
  return /* @__PURE__ */ e.createElement(
    "option",
    {
      className: o,
      value: a,
      disabled: t,
      ...l
    },
    r
  );
}, Ge = ({
  id: a,
  name: t,
  ariaLabel: s,
  value: n,
  defaultValue: r,
  disabled: l = !1,
  required: o = !1,
  hasError: c = !1,
  describedBy: i,
  className: m,
  multiple: h = !1,
  size: p,
  autoComplete: _,
  options: d,
  children: E,
  onChange: f,
  onBlur: k,
  onFocus: w,
  ...g
}) => {
  const { classes: x } = Ve({ hasError: c, className: m }), I = () => d ? d.map((C, S) => /* @__PURE__ */ e.createElement(
    "option",
    {
      key: `${C.value}-${S}`,
      value: C.value,
      disabled: C.disabled,
      "data-initial-selected": C.selected || void 0
    },
    C.text
  )) : null, v = r === void 0 && n === void 0 && d ? d.find((C) => C.selected)?.value : void 0;
  return /* @__PURE__ */ e.createElement(
    "select",
    {
      className: x,
      id: a,
      name: t,
      "aria-label": s,
      value: n,
      defaultValue: r !== void 0 ? r : v,
      disabled: l,
      required: o,
      "aria-describedby": i,
      multiple: h,
      size: p,
      autoComplete: _,
      onChange: f,
      onBlur: k,
      onFocus: w,
      ...g
    },
    E || I()
  );
}, Ze = Ge;
Ze.Option = We;
function pa({
  id: a,
  className: t,
  items: s,
  namePrefix: n,
  values: r = {},
  fieldset: l,
  hint: o,
  errorMessage: c,
  // strip interactive props
  onChange: i,
  ...m
}) {
  const p = s || [
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
  ];
  let _ = l?.describedBy || "";
  const d = o ? `${a}-hint` : "", E = c ? `${a}-error` : "";
  d && (_ = _ ? `${_} ${d}` : d), E && (_ = _ ? `${_} ${E}` : E);
  const f = y("nhsuk-form-group", {
    "nhsuk-form-group--error": !!c
  }), k = y("nhsuk-date-input", t), w = () => /* @__PURE__ */ e.createElement(e.Fragment, null, o && /* @__PURE__ */ e.createElement(ve, { id: d, className: o.classes }, o.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text), c && /* @__PURE__ */ e.createElement(we, { id: E, className: c.classes }, c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: k,
      id: a,
      "data-testid": "date-input",
      ...m
    },
    p.map((g) => {
      const x = g.id || `${a}-${g.name}`, I = n ? `${n}[${g.name}]` : g.name, v = g.label || g.name.charAt(0).toUpperCase() + g.name.slice(1), C = r[g.name];
      return /* @__PURE__ */ e.createElement("div", { key: g.name, className: "nhsuk-date-input__item" }, /* @__PURE__ */ e.createElement(Y, { htmlFor: x, className: "nhsuk-date-input__label" }, v), /* @__PURE__ */ e.createElement(
        ee,
        {
          id: x,
          name: I,
          defaultValue: C,
          className: y("nhsuk-date-input__input", g.classes),
          inputMode: g.inputmode,
          autoComplete: g.autocomplete,
          pattern: g.pattern,
          "aria-describedby": _ || void 0
        }
      ));
    })
  ));
  return /* @__PURE__ */ e.createElement("div", { className: f }, l ? /* @__PURE__ */ e.createElement(
    U,
    {
      className: l.classes,
      legend: l.legend ? { text: l.legend } : void 0,
      describedBy: _ || void 0
    },
    w()
  ) : w());
}
function ba({
  titleText: a = "There is a problem",
  titleHtml: t,
  descriptionText: s,
  descriptionHtml: n,
  errorList: r,
  className: l,
  children: o,
  ...c
}) {
  const i = y("nhsuk-error-summary", l), m = () => t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a, h = () => n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s, p = (_) => {
    const d = _.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: _.html } }) : _.text;
    return _.href ? /* @__PURE__ */ e.createElement("a", { href: _.href, ..._.attributes }, d) : d;
  };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: i,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...c
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title" }, m()),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__body" }, o && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, o), !o && (s || n) && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, h()), /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list" }, r.map((_, d) => /* @__PURE__ */ e.createElement("li", { key: d }, p(_)))))
  );
}
function qe(a) {
  return { classes: [
    "nhsuk-radios",
    a.hasError ? "nhsuk-radios--error" : "",
    a.size === "small" ? "nhsuk-radios--small" : "",
    a.inline ? "nhsuk-radios--inline" : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
function Ke(a, {
  variant: t,
  selectedValue: s,
  enableBehaviourAttr: n,
  handleChange: r,
  handleBlur: l,
  handleFocus: o,
  handleKeyDown: c,
  itemsRef: i,
  InputComponent: m
}) {
  const {
    onChange: h,
    onBlur: p,
    onFocus: _,
    ...d
  } = a, {
    name: E,
    hasError: f = !1,
    describedBy: k,
    className: w,
    size: g = "normal",
    inline: x = !1,
    options: I,
    ...v
  } = d, { classes: C, describedBy: S } = qe({ hasError: f, size: g, inline: x, className: w, describedBy: k });
  return /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: C,
      ...v,
      "data-nhs-behaviour": "radios"
    },
    I.map((N, u) => {
      const L = `${E}-${u}`, B = N.conditional ? `${L}-conditional` : void 0, T = s === N.value;
      return /* @__PURE__ */ e.createElement("div", { key: N.value, className: "nhsuk-radios__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-radios__input",
          id: L,
          name: E,
          type: "radio",
          value: N.value,
          disabled: N.disabled,
          defaultChecked: T,
          "data-nhs-radios-input": !0,
          "aria-describedby": S
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-radios__label", htmlFor: L }, N.text), N.hint && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-radios__hint" }, N.hint), N.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: y("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !T
          }),
          id: B,
          "data-nhs-radios-conditional": !0
        },
        typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, N.conditional.label && /* @__PURE__ */ e.createElement(
          Y,
          {
            htmlFor: N.conditional.id
          },
          N.conditional.label
        ), /* @__PURE__ */ e.createElement(
          m,
          {
            ...N.conditional
          }
        )) : N.conditional
      ));
    })
  ));
}
const Ea = ({ value: a, defaultValue: t, ...s }) => {
  const n = a || t || "";
  return Ke(
    { value: a, defaultValue: t, ...s },
    {
      variant: "server",
      selectedValue: n,
      enableBehaviourAttr: !0,
      InputComponent: ee
    }
  );
};
function Je(a) {
  const t = [
    "nhsuk-checkboxes",
    a.small ? "nhsuk-checkboxes--small" : "",
    a.className || ""
  ].filter(Boolean).join(" "), s = [
    "nhsuk-form-group",
    a.hasError ? "nhsuk-form-group--error" : ""
  ].filter(Boolean).join(" ");
  return { classes: t, formGroupClasses: s };
}
function ga(a) {
  const {
    items: t,
    name: s,
    idPrefix: n,
    legend: r,
    isPageHeading: l = !1,
    legendSize: o = "l",
    hint: c,
    errorMessage: i,
    className: m = "",
    small: h = !1,
    // Strip interactive handler in server variant
    onChange: p,
    fieldsetAttributes: _,
    attributes: d,
    ...E
  } = a, f = n || s, k = c ? `${f}-hint` : void 0, w = i ? `${f}-error` : void 0, g = [k, w].filter(Boolean).join(" ") || void 0, { classes: x, formGroupClasses: I } = Je({ small: h, className: m, hasError: !!i });
  return /* @__PURE__ */ e.createElement("div", { className: I, ...d, ...E }, /* @__PURE__ */ e.createElement(
    U,
    {
      legend: r ? { text: r, isPageHeading: l, size: o } : void 0,
      describedBy: g,
      ..._
    },
    c && /* @__PURE__ */ e.createElement("div", { id: k, className: "nhsuk-hint" }, c),
    i && /* @__PURE__ */ e.createElement("div", { id: w, className: "nhsuk-error-message" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Error:"), " ", i),
    /* @__PURE__ */ e.createElement("div", { className: x, "data-nhs-behaviour": "checkboxes" }, t.map((v, C) => {
      const S = `${f}-${C + 1}`, N = `${S}-conditional`, u = !!v.checked, L = !!v.disabled;
      return /* @__PURE__ */ e.createElement("div", { key: v.value, className: "nhsuk-checkboxes__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: S,
          name: s,
          type: "checkbox",
          value: v.value,
          ...u ? { defaultChecked: !0 } : {},
          disabled: L,
          "aria-describedby": v.hint ? `${S}-hint` : g,
          ...v.conditional && {
            "aria-controls": N,
            "aria-expanded": u ? "true" : "false"
          },
          ...v.attributes
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-checkboxes__label", htmlFor: S }, v.text), v.hint && /* @__PURE__ */ e.createElement("div", { id: `${S}-hint`, className: "nhsuk-checkboxes__hint" }, v.hint), v.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: y("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !u
          }),
          id: N,
          "data-nhs-checkboxes-conditional": !0
        },
        typeof v.conditional == "object" && v.conditional !== null && "label" in v.conditional && "id" in v.conditional && "name" in v.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, v.conditional.label && /* @__PURE__ */ e.createElement(Y, { htmlFor: v.conditional.id }, v.conditional.label), /* @__PURE__ */ e.createElement(ee, { ...v.conditional })) : v.conditional
      ));
    }))
  ));
}
function Q(a, t) {
  if (!a || a.hidden) return null;
  const { href: s, label: n, variant: r, disabled: l, type: o } = a, c = { variant: r, disabled: l };
  return s ? /* @__PURE__ */ e.createElement(X, { href: s, ...c }, n || t) : /* @__PURE__ */ e.createElement(X, { type: o === "button" ? "button" : "submit", ...c }, n || t);
}
const Na = ({
  back: a,
  startAgain: t,
  next: s,
  flipOrderOnMobile: n = !0,
  className: r
}) => {
  const l = !!a && !a.hidden, o = !!t && !t.hidden, c = !!s && !s.hidden, i = [l, o, c].filter(Boolean).length, m = q.OneHalf, h = q.OneThird;
  return /* @__PURE__ */ e.createElement(
    he,
    {
      className: y("nhs-form-nav", r, {
        "nhs-form-nav--flip-mobile": n
      })
    },
    l && /* @__PURE__ */ e.createElement(K, { width: i === 2 ? m : h, className: "nhs-form-nav__back" }, Q(a, "Back")),
    o && /* @__PURE__ */ e.createElement(
      K,
      {
        width: i === 2 ? m : h,
        align: i === 2 ? J.Right : J.Center,
        className: "nhs-form-nav__start-again"
      },
      Q(t, "Start again")
    ),
    c && /* @__PURE__ */ e.createElement(
      K,
      {
        width: !l && !o ? q.Full : i === 2 ? m : h,
        align: J.Right,
        className: "nhs-form-nav__next"
      },
      Q(s, "Next")
    )
  );
};
export {
  Ue as ActionLink,
  ea as BackLink,
  Se as Breadcrumb,
  wa as Breakpoint,
  X as ButtonServer,
  ce as ButtonSize,
  le as ButtonVariant,
  Re as Card,
  ha as CardGroup,
  _a as CardGroupItem,
  fa as CareCard,
  ga as Checkboxes,
  K as Column,
  J as ColumnAlign,
  de as Container,
  ca as ContentsList,
  pa as DateInput,
  xe as Details,
  $e as DoDontList,
  we as ErrorMessage,
  ba as ErrorSummary,
  U as Fieldset,
  Ca as Float,
  sa as Footer,
  Na as FormNavButtonBar,
  xa as Grid,
  q as GridWidth,
  Ye as Header,
  A as Heading,
  De as Hero,
  ve as Hint,
  oa as Images,
  ee as Input,
  na as InsetText,
  Y as Label,
  Te as List,
  da as MetricCard,
  ia as Pagination,
  Ie as Panel,
  Ea as Radios,
  he as Row,
  Ze as Select,
  We as SelectOption,
  ta as SkipLink,
  Ia as SpacingUtilities,
  ua as SummaryCard,
  ma as SummaryList,
  D as Table,
  ie as TableBodyRow,
  Fe as TableCaption,
  Ae as TableCell,
  me as TableHeaderCell,
  aa as Tag,
  ka as Textarea,
  ra as WarningCallout,
  la as WidthContainer,
  Ba as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
