import * as q from "react";
import e, { createElement as K, forwardRef as Q } from "react";
import { c as b } from "../SkipLink-Bpun0E2L.js";
import { B as Ye, a as Ue, d as ea, C as aa, F as ta, G as na, b as sa, R as ra, S as la, g as ca } from "../SkipLink-Bpun0E2L.js";
const te = ({
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
    ) : null, c = l.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text, u = /* @__PURE__ */ e.createElement(e.Fragment, null, o, c);
    return l.href ? /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: l.href
      },
      u
    ) : l.action ? /* @__PURE__ */ e.createElement(
      "form",
      {
        className: "nhsuk-account__form",
        action: l.action,
        method: l.method || "post"
      },
      /* @__PURE__ */ e.createElement("button", { className: "nhsuk-account__button", type: "submit", role: "button" }, u)
    ) : /* @__PURE__ */ e.createElement("span", null, u);
  };
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: b(
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
          className: b(
            "nhsuk-account__item nhsuk-header__account-item",
            l.className
          )
        },
        r(l)
      )
    ))
  );
};
function ne(a, { variant: t, isClient: s }) {
  const {
    className: n,
    logo: r = {},
    service: l = {},
    serviceName: o,
    organisation: c,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: u,
    navigation: m,
    containerClasses: g,
    variant: f = "default",
    attributes: E = {},
    maxVisibleItems: d,
    // deprecated (ignored)
    responsiveNavigation: p = !0,
    ...h
  } = a;
  "maxVisibleItems" in h && delete h.maxVisibleItems;
  const _ = {
    ...l,
    text: l?.text ?? o
  }, y = _.href && !r.href || _.href && _.href === r.href, w = y ? _.href : r.href, S = b(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || c,
      "nhsuk-header--white": f === "white"
    },
    n
  ), I = b("nhsuk-header__container", g), B = b(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": m?.white,
      "nhsuk-header__navigation--justified": m?.justified
    },
    m?.className
  ), L = () => /* @__PURE__ */ e.createElement(
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
  ), T = () => r.src ? /* @__PURE__ */ e.createElement(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: r.src,
      width: "280",
      alt: r.ariaLabel || "NHS"
    }
  ) : L(), M = () => c ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, c.name, c.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", c.split)), c.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, c.descriptor)) : null, i = (k, v) => k ? v ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: v }, k) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, k) : null, x = (k) => k.active || k.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, k.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text) : k.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: k.html } }) : k.text, N = m?.items && !p, C = N ? [] : m?.items, H = N ? m.items : [];
  return /* @__PURE__ */ e.createElement("header", { className: S, role: "banner", "data-module": "nhsuk-header", ...E, ...h }, /* @__PURE__ */ e.createElement("div", { className: I }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, w ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: w }, T(), M(), y && i(_.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, T(), M(), y && i(_.text)), _.text && !y && i(_.text, _.href)), /* @__PURE__ */ e.createElement(te, { ...u, variant: f === "white" ? "white" : "default" })), m && m.items && m.items.length > 0 && /* @__PURE__ */ e.createElement("nav", { className: B, "aria-label": m.ariaLabel || "Menu" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: b(
        "nhsuk-header_navigation-container",
        "nhsuk-width-container",
        {
          "nhsuk-header__navigation-container--ssr": !s
        },
        g
      )
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, (C || []).map((k, v) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: v,
        className: b("nhsuk-header__navigation-item", {
          "nhsuk-header__navigation-item--current": k.active || k.current
        }, k.className),
        ...k.attributes || {}
      },
      /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: k.href,
          ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {}
        },
        x(k)
      )
    )))
  )), N && H.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__dropdown-list" }, H.map((k, v) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `overflow-server-${v}`,
      className: b("nhsuk-header__dropdown-item", {
        "nhsuk-header__dropdown-item--current": k.active || k.current
      })
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-header__dropdown-link",
        href: k.href,
        ...k.active || k.current ? { "aria-current": k.current ? "page" : "true" } : {}
      },
      x(k)
    )
  )))));
}
const Ie = (a) => ne(a, {
  variant: "server",
  isClient: !1
}), Be = ({
  text: a,
  href: t,
  openInNewWindow: s = !1,
  className: n,
  ...r
}) => {
  const l = b(
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
var X = /* @__PURE__ */ ((a) => (a.Primary = "primary", a.Secondary = "secondary", a.Reverse = "reverse", a.Warning = "warning", a.Login = "login", a))(X || {}), Y = /* @__PURE__ */ ((a) => (a.Small = "small", a.Default = "default", a.Large = "large", a))(Y || {});
function se(a) {
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
const re = q.forwardRef(function(t, s) {
  const {
    children: n,
    variant: r = X.Primary,
    size: l = Y.Default,
    fullWidth: o = !1,
    className: c = "",
    preventDoubleClick: u = !1,
    ...m
  } = t, g = se({
    variant: r,
    size: l,
    fullWidth: o,
    className: c,
    href: "href" in m ? m.href : void 0,
    preventDoubleClick: u
  });
  if ("href" in m && m.href) {
    const v = m, {
      id: P,
      style: A,
      title: j,
      ["aria-label"]: z,
      ["aria-describedby"]: D,
      ["aria-labelledby"]: V,
      tabIndex: W,
      ...ae
    } = v;
    return /* @__PURE__ */ q.createElement(
      "a",
      {
        ref: s,
        href: v.href,
        target: v.target,
        rel: v.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...u && { "data-prevent-double-click": "true" },
        id: P,
        style: A,
        title: j,
        "aria-label": z,
        "aria-describedby": D,
        "aria-labelledby": V,
        tabIndex: W,
        ...ae
      },
      n
    );
  }
  const f = m, {
    id: E,
    style: d,
    title: p,
    ["aria-label"]: h,
    ["aria-describedby"]: _,
    ["aria-labelledby"]: y,
    tabIndex: w,
    name: S,
    value: I,
    form: B,
    formAction: L,
    formEncType: T,
    formMethod: M,
    formNoValidate: i,
    formTarget: x,
    autoFocus: N,
    type: C,
    disabled: H,
    ...k
  } = f;
  return /* @__PURE__ */ q.createElement(
    "button",
    {
      ref: s,
      type: C || "button",
      disabled: H,
      className: g.classes,
      "data-module": "nhs-button",
      ...u && { "data-prevent-double-click": "true" },
      id: E,
      style: d,
      title: p,
      "aria-label": h,
      "aria-describedby": _,
      "aria-labelledby": y,
      tabIndex: w,
      name: S,
      value: I,
      form: B,
      formAction: L,
      formEncType: T,
      formMethod: M,
      formNoValidate: i,
      formTarget: x,
      autoFocus: N,
      ...k
    },
    n
  );
});
re.displayName = "ButtonServer";
const Te = ({
  text: a = "Back",
  html: t,
  href: s = "#",
  className: n,
  element: r = "a",
  onClick: l,
  ...o
}) => {
  const c = b(
    "nhsuk-back-link",
    n
  ), u = b(
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
      className: u,
      onClick: l,
      type: "button",
      ...o
    },
    m()
  ) : /* @__PURE__ */ e.createElement(
    "a",
    {
      className: u,
      href: s,
      ...o
    },
    m()
  ));
};
function le(a) {
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
const Me = ({
  text: a,
  html: t,
  children: s,
  color: n = "default",
  noBorder: r = !1,
  closable: l = !1,
  onClose: o,
  disabled: c = !1,
  className: u,
  ...m
}) => {
  const g = le({ color: n, noBorder: r, closable: l, disabled: c, className: u }), f = (E) => {
    E.preventDefault(), E.stopPropagation(), !c && o && o();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: g.classes, ...m }, s || (t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a), l && /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "nhsuk-tag__close",
      onClick: f,
      disabled: c,
      "aria-label": "Remove",
      title: "Remove"
    },
    "×"
  ));
};
function ce(a) {
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
const Pe = ({
  htmlFor: a,
  className: t,
  isPageHeading: s = !1,
  size: n = "m",
  children: r,
  ...l
}) => {
  const o = ce({ size: n, isPageHeading: s, className: t, htmlFor: a }), c = o.tag;
  return /* @__PURE__ */ e.createElement(c, { className: o.classes, htmlFor: o.htmlFor, ...l }, s ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: a }, r) : r);
};
function oe(a) {
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
function ie(a) {
  const t = a.level ?? oe(a.size), s = [
    "nhsuk-heading",
    a.size ? `nhsuk-heading--${a.size}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), n = a.marginBottom ? { marginBottom: a.marginBottom } : void 0;
  return { tag: `h${t}`, classes: s, style: n };
}
const $ = ({ level: a, className: t, text: s, html: n, children: r, size: l, marginBottom: o, ...c }) => {
  const u = ie({ level: a, size: l, className: t, marginBottom: o }), m = r || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s);
  return K(u.tag, { className: u.classes, style: u.style, ...c }, m);
};
function ue(a) {
  return { classes: [
    "nhsuk-hint",
    a.className || ""
  ].filter(Boolean).join(" "), id: a.id };
}
const je = ({ id: a, className: t, children: s, ...n }) => {
  const r = ue({ id: a, className: t });
  return /* @__PURE__ */ e.createElement("div", { className: r.classes, id: r.id, ...n }, s);
};
function me(a) {
  return {
    classes: ["nhsuk-error-message", a.className || ""].filter(Boolean).join(" "),
    id: a.id,
    visuallyHiddenText: a.visuallyHiddenText ?? "Error:"
  };
}
const $e = ({ id: a, className: t, visuallyHiddenText: s = "Error:", children: n, ...r }) => {
  const l = me({ id: a, className: t, visuallyHiddenText: s });
  return /* @__PURE__ */ e.createElement("span", { className: l.classes, id: l.id, ...r }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, l.visuallyHiddenText, " "), n);
};
function de(a) {
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
const Ae = ({
  children: a,
  legend: t,
  className: s,
  describedBy: n,
  ...r
}) => {
  const l = de({
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
}, Fe = ({
  text: a = "Skip to main content",
  href: t = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const r = b("nhsuk-skip-link", s);
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
}, he = Q(
  ({
    summaryText: a,
    summaryHtml: t,
    text: s,
    html: n,
    open: r = !1,
    className: l = "",
    id: o,
    children: c,
    ...u
  }, m) => {
    const g = [
      "nhsuk-details",
      l
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-details__summary-text" }, a);
    let E;
    return c ? E = c : n ? E = /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s && (E = s), /* @__PURE__ */ e.createElement(
      "details",
      {
        ref: m,
        id: o,
        className: g,
        open: r,
        ...u
      },
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, f),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, E)
    );
  }
);
he.displayName = "Details";
const De = ({
  text: a,
  html: t,
  children: s,
  className: n,
  ...r
}) => {
  const l = b("nhsuk-inset-text", n), o = () => s || (t ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t } }) : a ? /* @__PURE__ */ e.createElement("p", null, a) : null);
  return /* @__PURE__ */ e.createElement("div", { className: l, ...r }, o());
}, _e = ({
  id: a,
  className: t,
  headingText: s,
  headingHtml: n,
  headingLevel: r = 2,
  bodyText: l,
  bodyHtml: o,
  children: c,
  ...u
}) => {
  const m = b(
    "nhsuk-panel",
    t
  ), g = () => !s && !n && !c ? null : n ? /* @__PURE__ */ e.createElement(
    $,
    {
      level: r,
      className: "nhsuk-panel__heading",
      html: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : s ? /* @__PURE__ */ e.createElement(
    $,
    {
      level: r,
      className: "nhsuk-panel__heading",
      text: s,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, f = () => c ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, c) : o ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: o }
    }
  ) : l ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ e.createElement("p", null, l)) : null;
  return /* @__PURE__ */ e.createElement("div", { className: m, id: a, ...u }, g(), f());
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
)), ke = ({
  items: a = [],
  children: t,
  classes: s,
  labelText: n = "Breadcrumb",
  href: r,
  text: l,
  reverse: o = !1,
  attributes: c = {}
}) => {
  const u = () => t ? e.Children.toArray(t).filter(
    (_) => e.isValidElement(_) && (_.type === G || _.type?.displayName === "BreadcrumbItem")
  ).map((_) => ({
    text: typeof _.props.children == "string" ? _.props.children : String(_.props.children),
    href: _.props.href,
    active: _.props.active,
    attributes: _.props.attributes
  })) : [], m = () => t ? u() : r && l ? [{ href: r, text: l }] : a, g = () => {
    const h = m();
    if (h && h.length > 0) {
      const _ = h.slice().reverse().find((y) => y.href && !y.active);
      if (_)
        return { href: _.href, text: _.text };
    }
    return { text: "Home" };
  }, f = m(), E = g(), d = b(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": o
    },
    s
  ), p = n;
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: d,
      "aria-label": p,
      role: "navigation",
      ...c
    },
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-breadcrumb__list", role: "list" }, t ? (
      // Render children directly if using compound component pattern
      e.Children.map(t, (h, _) => e.isValidElement(h) && (h.type === G || h.type?.displayName === "BreadcrumbItem") ? e.cloneElement(h, { key: _ }) : null)
    ) : (
      // Render from items array
      f?.filter((h) => h.active || !!h.href).map((h, _) => /* @__PURE__ */ e.createElement("li", { key: _, className: "nhsuk-breadcrumb__item", role: "listitem" }, h.active ? /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
          "aria-current": "page",
          role: "text",
          ...h.attributes || {}
        },
        h.text
      ) : /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-breadcrumb__link",
          href: h.href,
          role: "link",
          ...h.attributes || {}
        },
        h.text
      )))
    )),
    E.href && /* @__PURE__ */ e.createElement("p", { className: "nhsuk-breadcrumb__back" }, /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-breadcrumb__backlink",
        href: E.href,
        role: "link",
        "aria-label": `Back to ${E.text}`,
        ...a.length > 0 ? a[a.length - 1]?.attributes || {} : {}
      },
      /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Back to  "),
      E.text
    ))
  );
}, fe = ke;
fe.Item = G;
G.displayName = "BreadcrumbItem";
const ge = ({
  children: a,
  type: t = "bullet",
  size: s = "medium",
  border: n = !1,
  className: r,
  role: l,
  as: o,
  ...c
}) => {
  const u = o || (t === "number" ? "ol" : "ul"), m = b(
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
  return /* @__PURE__ */ e.createElement(u, { className: m, role: l, ...c }, a);
}, be = ({
  children: a,
  className: t,
  ...s
}) => {
  const n = b("nhsuk-list__item", t);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...s }, a);
}, Ee = ge;
Ee.Item = be;
const Re = ({
  className: a,
  links: t = [],
  linksColumn2: s,
  linksColumn3: n,
  metaLinks: r,
  copyright: l = "© NHS England",
  containerClasses: o,
  attributes: c = {},
  style: u,
  footerStyle: m,
  containerStyle: g
}) => {
  const f = (d, p = !1) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `${d.URL}-${d.label}`,
      className: b("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": p
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
  ), E = !!(s || n);
  return /* @__PURE__ */ e.createElement("footer", { role: "contentinfo", ...c, style: { ...c?.style, ...u } }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-footer-container" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: b("nhsuk-width-container", o),
      style: g
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Support links"),
    /* @__PURE__ */ e.createElement("div", { className: b("nhsuk-footer", a), style: m }, E ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, t.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((d) => f(d))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, s.map((d) => f(d))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((d) => f(d))), r && r.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, r.map((d) => f(d))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((d) => f(d, !0)), (s || []).map((d) => f(d, !0)), (n || []).map((d) => f(d, !0)), (r || []).map((d) => f(d, !0)))
    )),
    !E && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l))
  ), E && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l)))));
}, ze = ({
  heading: a,
  headingLevel: t = 3,
  text: s,
  html: n,
  children: r,
  className: l,
  ...o
}) => {
  const c = /important/i.test(a), u = () => r || (n ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s ? /* @__PURE__ */ e.createElement("p", null, s) : null), m = [
    "nhsuk-warning-callout",
    l
  ].filter(Boolean).join(" "), g = `h${t}`;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: m,
      ...o
    },
    K(
      g,
      { className: "nhsuk-warning-callout__label" },
      c ? /* @__PURE__ */ e.createElement(e.Fragment, null, a, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), a)
    ),
    u()
  );
}, Ve = ({
  items: a,
  classes: t,
  ariaLabel: s = "Pages in this guide",
  attributes: n = {}
}) => {
  const r = b("nhsuk-contents-list", t), l = (o, c) => o.current ? /* @__PURE__ */ e.createElement(
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
}, pe = Q(
  ({
    title: a,
    type: t,
    items: s,
    hidePrefix: n = !1,
    headingLevel: r = 3,
    className: l,
    ...o
  }, c) => {
    const u = ["nhsuk-do-dont-list"];
    l && u.push(l);
    const m = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], g = () => t === "cross" ? /* @__PURE__ */ e.createElement(
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
    ), f = (d) => t === "cross" && !n ? `do not ${d}` : d, E = () => /* @__PURE__ */ e.createElement(
      $,
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
        className: u.join(" "),
        ...o
      },
      E(),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: m.join(" "), role: "list" }, s.map((d, p) => /* @__PURE__ */ e.createElement("li", { key: p }, g(), f(d.item)))))
    );
  }
);
pe.displayName = "DoDontList";
const We = ({
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
}, Ge = ({
  previousUrl: a,
  previousPage: t,
  nextUrl: s,
  nextPage: n,
  classes: r,
  attributes: l = {}
}) => {
  const o = b("nhsuk-pagination", r);
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
}, Ze = ({
  items: a,
  noBorder: t = !1,
  className: s,
  ...n
}) => {
  const r = b(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    s
  ), l = (c) => c.children ? c.children : c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text ? c.text : null, o = (c) => !c || !c.items.length ? null : /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__actions" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-summary-list__actions-list" }, c.items.map((u, m) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: m,
      className: "nhsuk-summary-list__actions-list-item"
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        href: u.href,
        className: "nhsuk-link",
        ...u.attributes
      },
      l(u),
      u.visuallyHiddenText && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, u.visuallyHiddenText)
    )
  ))));
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-summary-list-container" }, /* @__PURE__ */ e.createElement("dl", { className: r, ...n }, a.map((c, u) => /* @__PURE__ */ e.createElement("div", { key: u, className: "nhsuk-summary-list__row" }, /* @__PURE__ */ e.createElement("dt", { className: "nhsuk-summary-list__key" }, l(c.key)), /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__value" }, l(c.value)), o(c.actions)))));
}, qe = ({
  title: a,
  value: t,
  subtitle: s,
  variant: n = "default",
  href: r,
  className: l = "",
  ariaLabel: o,
  ...c
}) => {
  const u = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${n}`,
    l
  ].filter(Boolean).join(" "), m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement($, { level: 3, className: "nhs-fdp-summary-card__title" }, a), /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__value" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__subtitle" }, s));
  return r ? /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `${u} nhs-fdp-summary-card--clickable`,
      href: r,
      "aria-label": o || `${a}: ${t}`,
      ...c
    },
    m
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: u,
      "aria-label": o,
      ...c
    },
    m
  );
}, R = { current: null }, Ne = () => {
  if (R.current) return R.current;
  try {
    R.current = require("prismjs");
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
    R.current = null;
  }
  return R.current;
}, ve = (a) => {
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
  const n = Ne();
  if (n && n.languages) {
    const r = n.languages[t] ? t : n.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : n.languages.json && t === "json" ? "json" : void 0;
    if (r)
      try {
        return n.highlight(a, n.languages[r], r);
      } catch {
      }
  }
  return ve(a);
}, ye = ({
  rows: a,
  head: t,
  caption: s,
  captionSize: n,
  firstCellIsHeader: r = !1,
  responsive: l = !1,
  heading: o,
  headingLevel: c = 3,
  panel: u = !1,
  panelClasses: m,
  tableClasses: g,
  classes: f,
  attributes: E,
  "data-testid": d,
  columns: p,
  data: h,
  visuallyHiddenCaption: _ = !1
}) => {
  const y = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), w = b(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": l
    },
    g
  ), S = b(f), I = (i, x) => {
    const N = b(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${i.format}`]: i.format
      },
      i.classes
    ), C = {
      scope: "col",
      ...i.colspan && { colSpan: i.colspan },
      ...i.rowspan && { rowSpan: i.rowspan },
      ...l && { role: "columnheader" },
      ...i.attributes
    };
    let H;
    if (i.node != null)
      H = /* @__PURE__ */ e.createElement(e.Fragment, null, i.node);
    else if (i.html)
      H = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } });
    else if (i.code != null) {
      const k = Array.isArray(i.code), v = k ? i.code.join(`
`) : i.code, P = k || v.includes(`
`), A = {
        className: b("nhsuk-table__code", i.codeClassName, {
          "nhsuk-table__code--block": P,
          "nhsuk-table__code--inline": !P
        }),
        ...i.codeLanguage ? { "data-language": i.codeLanguage } : {}
      }, j = Z(v, i.codeLanguage);
      H = P ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: j }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...A,
          dangerouslySetInnerHTML: { __html: j }
        }
      );
    } else
      H = i.text;
    return /* @__PURE__ */ e.createElement("th", { key: x, className: N, ...C }, H);
  }, B = (i, x, N) => {
    const C = r && N || i.rowHeader, H = b(
      C ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${C ? "header" : "cell"}--${i.format}`]: i.format
      },
      i.classes
    ), k = {
      ...C && { scope: "row" },
      ...i.colspan && { colSpan: i.colspan },
      ...i.rowspan && { rowSpan: i.rowspan },
      ...l && {
        role: C ? "rowheader" : "cell",
        ...i.header && { "data-label": i.header }
      },
      ...i.attributes
    };
    let v;
    if (i.node != null)
      v = /* @__PURE__ */ e.createElement(e.Fragment, null, i.node);
    else if (i.html)
      v = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } });
    else if (i.code != null) {
      const j = Array.isArray(i.code), z = j ? i.code.join(`
`) : i.code, D = j || z.includes(`
`), V = {
        className: b("nhsuk-table__code", i.codeClassName, {
          "nhsuk-table__code--block": D,
          "nhsuk-table__code--inline": !D
        }),
        ...i.codeLanguage ? { "data-language": i.codeLanguage } : {}
      }, W = Z(
        z,
        i.codeLanguage,
        i.disableHighlight
      );
      v = D ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
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
      v = i.text;
    const P = /* @__PURE__ */ e.createElement(e.Fragment, null, l && i.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, i.header, " "), v), A = C ? "th" : "td";
    return /* @__PURE__ */ e.createElement(A, { key: x, className: H, ...k }, P);
  };
  let L = t, T = a;
  !L && p && p.length && (L = p.map((i) => ({
    text: i.title,
    format: i.format,
    classes: i.headerClasses,
    attributes: i.headerAttributes
  }))), !T && p && h && h.length && (T = h.map((i, x) => p.map((N) => {
    const C = N.accessor ? N.accessor(i, x) : i[N.key];
    let H = { format: N.format, classes: N.cellClasses, attributes: N.cellAttributes };
    if (N.rowHeader && (H.rowHeader = !0), N.render) {
      const k = N.render(C, i, x, N);
      return k == null || typeof k == "boolean" ? { ...H, text: "" } : typeof k == "string" || typeof k == "number" ? { ...H, text: String(k) } : { ...H, ...k };
    }
    return { ...H, text: C != null ? String(C) : "" };
  })));
  const M = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: w,
      ...l && { role: "table" },
      ...E,
      ...d && { "data-testid": d }
    },
    s && /* @__PURE__ */ e.createElement("caption", { className: b(y, _ && "nhsuk-u-visually-hidden") }, s),
    L && L.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...l && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...l && { role: "row" } }, L.map(
        (i, x) => I(i, x)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, T && T.map((i, x) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: x,
        className: "nhsuk-table__row",
        ...l && { role: "row" }
      },
      i.map(
        (N, C) => B(N, C, C === 0)
      )
    )))
  );
  return u ? /* @__PURE__ */ e.createElement(_e, { className: m }, o && /* @__PURE__ */ e.createElement($, { level: c, className: "nhsuk-table__heading-tab" }, o), M()) : S ? /* @__PURE__ */ e.createElement("div", { className: S }, M()) : M();
}, we = ({
  children: a,
  size: t,
  className: s
}) => {
  const n = b(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    s
  );
  return /* @__PURE__ */ e.createElement("caption", { className: n }, a);
}, U = ({
  responsive: a,
  className: t,
  children: s,
  ...n
}) => {
  const r = a ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: t, ...r, ...n }, s);
}, ee = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: r,
  codeClassName: l,
  disableHighlight: o,
  format: c,
  classes: u,
  colspan: m,
  rowspan: g,
  attributes: f,
  responsive: E,
  as: d = "th"
}) => {
  const p = b(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${c}`]: c },
    u
  ), h = {
    scope: "col",
    ...m && { colSpan: m },
    ...g && { rowSpan: g },
    ...E && { role: "columnheader" },
    ...f
  };
  let _;
  if (s != null) _ = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) _ = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const w = Array.isArray(n), S = w ? n.join(`
`) : n, I = w || S.includes(`
`), B = {
      className: b("nhsuk-table__code", l, {
        "nhsuk-table__code--block": I,
        "nhsuk-table__code--inline": !I
      }),
      ...r ? { "data-language": r } : {}
    }, L = Z(
      S,
      r,
      o
    );
    _ = I ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...B,
        dangerouslySetInnerHTML: { __html: L }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...B, dangerouslySetInnerHTML: { __html: L } });
  } else _ = a;
  const y = d;
  return /* @__PURE__ */ e.createElement(y, { className: p, ...h }, _);
}, Ce = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: r,
  codeClassName: l,
  disableHighlight: o,
  format: c,
  classes: u,
  colspan: m,
  rowspan: g,
  attributes: f,
  responsive: E,
  rowHeader: d
}) => {
  const p = !!d, h = p ? "th" : "td", _ = b(
    p ? "nhsuk-table__header" : "nhsuk-table__cell",
    c && `nhsuk-table__${p ? "header" : "cell"}--${c}`,
    u
  ), y = {
    ...m && { colSpan: m },
    ...g && { rowSpan: g },
    ...p && { scope: "row" },
    ...E && { role: p ? "rowheader" : "cell" },
    ...f
  };
  let w;
  if (s != null) w = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) w = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const S = Array.isArray(n), I = S ? n.join(`
`) : n, B = S || I.includes(`
`), L = {
      className: b("nhsuk-table__code", l, {
        "nhsuk-table__code--block": B,
        "nhsuk-table__code--inline": !B
      }),
      ...r ? { "data-language": r } : {}
    }, T = Z(I, r, o);
    w = B ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ...L, dangerouslySetInnerHTML: { __html: T } })) : /* @__PURE__ */ e.createElement("code", { ...L, dangerouslySetInnerHTML: { __html: T } });
  } else w = a;
  return /* @__PURE__ */ e.createElement(h, { className: _, ...y }, w);
}, F = ye;
F.Caption = we;
F.BodyRow = U;
F.HeaderCell = ee;
F.Cell = Ce;
let O = !1, J = !1;
Object.defineProperty(F, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !O && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), O = !0), U;
  }
});
Object.defineProperty(F, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !J && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), J = !0), ee;
  }
});
const He = ({
  heading: a,
  headingLevel: t = 1,
  headingClasses: s = "",
  text: n,
  html: r,
  imageURL: l,
  containerClasses: o = "",
  classes: c = "",
  children: u,
  ...m
}) => {
  const g = [
    "nhsuk-hero",
    l && a ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    l && !a ? "nhsuk-hero--image" : "",
    c
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    o,
    l ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), E = [
    "nhsuk-hero__heading",
    s,
    !u && !n && !r ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), d = u || a || n || r, p = () => {
    if (!a) return null;
    const h = { className: E };
    switch (t) {
      case 1:
        return /* @__PURE__ */ e.createElement("h1", { ...h }, a);
      case 2:
        return /* @__PURE__ */ e.createElement("h2", { ...h }, a);
      case 3:
        return /* @__PURE__ */ e.createElement("h3", { ...h }, a);
      case 4:
        return /* @__PURE__ */ e.createElement("h4", { ...h }, a);
      case 5:
        return /* @__PURE__ */ e.createElement("h5", { ...h }, a);
      case 6:
        return /* @__PURE__ */ e.createElement("h6", { ...h }, a);
      default:
        return /* @__PURE__ */ e.createElement("h1", { ...h }, a);
    }
  };
  return /* @__PURE__ */ e.createElement(
    "section",
    {
      className: g,
      style: l ? { backgroundImage: `url('${l}')` } : void 0,
      role: "banner",
      ...m
    },
    l && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, d && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, p(), u || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !l && d && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, p(), u || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
He.displayName = "Hero";
const Le = e.forwardRef(({
  variant: a = "default",
  heading: t,
  headingHtml: s,
  headingLevel: n = 2,
  headingClasses: r,
  description: l,
  descriptionHtml: o,
  href: c,
  imgURL: u,
  imgAlt: m,
  ...g
}, f) => {
  const E = [
    "nhsuk-card",
    a === "clickable" && "nhsuk-card--clickable",
    a === "secondary" && "nhsuk-card--secondary",
    a === "feature" && "nhsuk-card--feature",
    g.className
  ].filter(Boolean).join(" "), d = [
    "nhsuk-card__content",
    a === "feature" && "nhsuk-card__content--feature",
    a === "primary" && "nhsuk-card__content--primary",
    a === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-card__heading",
    a === "feature" && "nhsuk-card__heading--feature",
    r
  ].filter(Boolean).join(" "), h = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const w = () => c && a !== "feature" ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-card__link", href: c }, t) : t;
    return /* @__PURE__ */ e.createElement(
      $,
      {
        level: n,
        className: p
      },
      w()
    );
  }, _ = () => g.children ? g.children : o ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: o } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, l) : null, y = () => a !== "primary" ? null : /* @__PURE__ */ e.createElement(
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
      ...g,
      className: E,
      ref: f
    },
    u && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: u,
        alt: m || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: d }, h(), _(), y())
  );
});
Le.displayName = "Card";
const Oe = ({
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
}, Je = ({
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
}, Ke = ({
  type: a,
  heading: t,
  headingHtml: s,
  headingLevel: n = 3,
  headingClasses: r,
  description: l,
  descriptionHtml: o,
  className: c,
  children: u,
  "data-testid": m,
  id: g,
  "aria-label": f,
  "aria-labelledby": E,
  "aria-describedby": d
}) => {
  const p = [
    "nhsuk-care-card",
    `nhsuk-care-card--${a}`,
    c
  ].filter(Boolean).join(" "), h = [
    "nhsuk-care-card__heading",
    r
  ].filter(Boolean).join(" "), _ = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const w = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[a], S = /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, w, " "), t);
    return /* @__PURE__ */ e.createElement(
      $,
      {
        level: n,
        className: h
      },
      S
    );
  }, y = () => u || (o ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: o } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, l) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: p,
      "data-testid": m,
      id: g,
      "aria-label": f,
      "aria-labelledby": E,
      "aria-describedby": d
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, _(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, y())
  );
};
export {
  Be as ActionLink,
  Te as BackLink,
  fe as Breadcrumb,
  Ye as Breakpoint,
  re as ButtonServer,
  Le as Card,
  Oe as CardGroup,
  Je as CardGroupItem,
  Ke as CareCard,
  Ue as Column,
  ea as ColumnAlign,
  aa as Container,
  Ve as ContentsList,
  he as Details,
  pe as DoDontList,
  $e as ErrorMessage,
  Ae as Fieldset,
  ta as Float,
  Re as Footer,
  na as Grid,
  sa as GridWidth,
  Ie as Header,
  $ as Heading,
  He as Hero,
  je as Hint,
  We as Images,
  De as InsetText,
  Pe as Label,
  Ee as List,
  Ge as Pagination,
  _e as Panel,
  ra as Row,
  Fe as SkipLink,
  la as SpacingUtilities,
  qe as SummaryCard,
  Ze as SummaryList,
  F as Table,
  U as TableBodyRow,
  we as TableCaption,
  Ce as TableCell,
  ee as TableHeaderCell,
  Me as Tag,
  ze as WarningCallout,
  ca as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
