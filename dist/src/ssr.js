import * as S from "react";
import e, { createElement as se, forwardRef as re } from "react";
import { c as E, C as me, b as F, R as ge, a as Y, d as V } from "../SkipLink-BE-cc-Aq.js";
import { B as za, F as Za, G as Ba, S as Ha, g as Pa } from "../SkipLink-BE-cc-Aq.js";
const he = ({
  ariaLabel: a = "Account",
  items: t = [],
  className: s,
  variant: n = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const r = (l) => {
    const i = l.icon ? /* @__PURE__ */ e.createElement(
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
    ) : null, c = l.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text, o = /* @__PURE__ */ e.createElement(e.Fragment, null, i, c);
    return l.href ? /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: l.href
      },
      o
    ) : l.action ? /* @__PURE__ */ e.createElement(
      "form",
      {
        className: "nhsuk-account__form",
        action: l.action,
        method: l.method || "post"
      },
      /* @__PURE__ */ e.createElement("button", { className: "nhsuk-account__button", type: "submit", role: "button" }, o)
    ) : /* @__PURE__ */ e.createElement("span", null, o);
  };
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: E(
        "nhsuk-account",
        {
          "nhsuk-account--white": n === "white"
        },
        s
      ),
      "aria-label": a
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-account__list" }, t.map(
      (l, i) => l && /* @__PURE__ */ e.createElement(
        "li",
        {
          key: i,
          className: E(
            "nhsuk-account__item nhsuk-header__account-item",
            l.className
          )
        },
        r(l)
      )
    ))
  );
};
function pe(a, { variant: t, isClient: s }) {
  const {
    className: n,
    logo: r = {},
    service: l = {},
    serviceName: i,
    organisation: c,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: o,
    navigation: d,
    containerClasses: g,
    variant: k = "default",
    attributes: h = {},
    maxVisibleItems: m,
    // deprecated (ignored)
    responsiveNavigation: I = !0,
    ...p
  } = a;
  "maxVisibleItems" in p && delete p.maxVisibleItems;
  const N = {
    ...l,
    text: l?.text ?? i
  }, _ = N.href && !r.href || N.href && N.href === r.href, b = _ ? N.href : r.href, L = E(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": k === "organisation" || c,
      "nhsuk-header--white": k === "white"
    },
    n
  ), w = E("nhsuk-header__container", g), y = E(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), v = () => /* @__PURE__ */ e.createElement(
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
  ), D = () => r.src ? /* @__PURE__ */ e.createElement(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: r.src,
      width: "280",
      alt: r.ariaLabel || "NHS"
    }
  ) : v(), M = () => c ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, c.name, c.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", c.split)), c.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, c.descriptor)) : null, u = (f, A) => f ? A ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: A }, f) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, f) : null, x = (f) => f.active || f.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, f.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text) : f.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: f.html } }) : f.text, C = d?.items && !I, T = C ? [] : d?.items, j = C ? d.items : [];
  return /* @__PURE__ */ e.createElement("header", { className: L, role: "banner", "data-module": "nhsuk-header", ...h, ...p }, /* @__PURE__ */ e.createElement("div", { className: w }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, b ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: b }, D(), M(), _ && u(N.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, D(), M(), _ && u(N.text)), N.text && !_ && u(N.text, N.href)), /* @__PURE__ */ e.createElement(he, { ...o, variant: k === "white" ? "white" : "default" })), d && d.items && d.items.length > 0 && /* @__PURE__ */ e.createElement("nav", { className: y, "aria-label": d.ariaLabel || "Menu" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: E(
        "nhsuk-header_navigation-container",
        "nhsuk-width-container",
        {
          "nhsuk-header__navigation-container--ssr": !s
        },
        g
      )
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, (T || []).map((f, A) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: A,
        className: E("nhsuk-header__navigation-item", {
          "nhsuk-header__navigation-item--current": f.active || f.current
        }, f.className),
        ...f.attributes || {}
      },
      /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: f.href,
          ...f.active || f.current ? { "aria-current": f.current ? "page" : "true" } : {}
        },
        x(f)
      )
    )))
  )), C && j.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__dropdown-list" }, j.map((f, A) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `overflow-server-${A}`,
      className: E("nhsuk-header__dropdown-item", {
        "nhsuk-header__dropdown-item--current": f.active || f.current
      })
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-header__dropdown-link",
        href: f.href,
        ...f.active || f.current ? { "aria-current": f.current ? "page" : "true" } : {}
      },
      x(f)
    )
  )))));
}
const ia = (a) => pe(a, {
  variant: "server",
  isClient: !1
}), oa = ({
  text: a,
  href: t,
  openInNewWindow: s = !1,
  className: n,
  ...r
}) => {
  const l = E(
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
function Ne(a) {
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
const X = S.forwardRef(function(t, s) {
  const {
    children: n,
    variant: r = le.Primary,
    size: l = ce.Default,
    fullWidth: i = !1,
    className: c = "",
    preventDoubleClick: o = !1,
    ...d
  } = t, g = Ne({
    variant: r,
    size: l,
    fullWidth: i,
    className: c,
    href: "href" in d ? d.href : void 0,
    preventDoubleClick: o
  });
  if ("href" in d && d.href) {
    const A = d, {
      id: z,
      style: B,
      title: Z,
      ["aria-label"]: U,
      ["aria-describedby"]: O,
      ["aria-labelledby"]: Q,
      tabIndex: R,
      ...ue
    } = A;
    return /* @__PURE__ */ S.createElement(
      "a",
      {
        ref: s,
        href: A.href,
        target: A.target,
        rel: A.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...o && { "data-prevent-double-click": "true" },
        id: z,
        style: B,
        title: Z,
        "aria-label": U,
        "aria-describedby": O,
        "aria-labelledby": Q,
        tabIndex: R,
        ...ue
      },
      n
    );
  }
  const k = d, {
    id: h,
    style: m,
    title: I,
    ["aria-label"]: p,
    ["aria-describedby"]: N,
    ["aria-labelledby"]: _,
    tabIndex: b,
    name: L,
    value: w,
    form: y,
    formAction: v,
    formEncType: D,
    formMethod: M,
    formNoValidate: u,
    formTarget: x,
    autoFocus: C,
    type: T,
    disabled: j,
    ...f
  } = k;
  return /* @__PURE__ */ S.createElement(
    "button",
    {
      ref: s,
      type: T || "button",
      disabled: j,
      className: g.classes,
      "data-module": "nhs-button",
      ...o && { "data-prevent-double-click": "true" },
      id: h,
      style: m,
      title: I,
      "aria-label": p,
      "aria-describedby": N,
      "aria-labelledby": _,
      tabIndex: b,
      name: L,
      value: w,
      form: y,
      formAction: v,
      formEncType: D,
      formMethod: M,
      formNoValidate: u,
      formTarget: x,
      autoFocus: C,
      ...f
    },
    n
  );
});
X.displayName = "ButtonServer";
const da = ({
  text: a = "Back",
  html: t,
  href: s = "#",
  className: n,
  element: r = "a",
  onClick: l,
  ...i
}) => {
  const c = E(
    "nhsuk-back-link",
    n
  ), o = E(
    "nhsuk-back-link__link"
  ), d = () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
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
      className: o,
      onClick: l,
      type: "button",
      ...i
    },
    d()
  ) : /* @__PURE__ */ e.createElement(
    "a",
    {
      className: o,
      href: s,
      ...i
    },
    d()
  ));
};
function ke(a) {
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
const ua = ({
  text: a,
  html: t,
  children: s,
  color: n = "default",
  noBorder: r = !1,
  closable: l = !1,
  onClose: i,
  disabled: c = !1,
  className: o,
  ...d
}) => {
  const g = ke({ color: n, noBorder: r, closable: l, disabled: c, className: o }), k = (h) => {
    h.preventDefault(), h.stopPropagation(), !c && i && i();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: g.classes, ...d }, s || (t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a), l && /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "nhsuk-tag__close",
      onClick: k,
      disabled: c,
      "aria-label": "Remove",
      title: "Remove"
    },
    "×"
  ));
};
function fe(a) {
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
const K = ({
  htmlFor: a,
  className: t,
  isPageHeading: s = !1,
  size: n = "m",
  children: r,
  ...l
}) => {
  const i = fe({ size: n, isPageHeading: s, className: t, htmlFor: a }), c = i.tag;
  return /* @__PURE__ */ e.createElement(c, { className: i.classes, htmlFor: i.htmlFor, ...l }, s ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: a }, r) : r);
};
function Ie(a) {
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
function be(a) {
  const t = a.level ?? Ie(a.size), s = [
    "nhsuk-heading",
    a.size ? `nhsuk-heading--${a.size}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), n = a.marginBottom ? { marginBottom: a.marginBottom } : void 0;
  return { tag: `h${t}`, classes: s, style: n };
}
const H = ({ level: a, className: t, text: s, html: n, children: r, size: l, marginBottom: i, ...c }) => {
  const o = be({ level: a, size: l, className: t, marginBottom: i }), d = r || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s);
  return se(o.tag, { className: o.classes, style: o.style, ...c }, d);
};
function Me(a) {
  return { classes: [
    "nhsuk-hint",
    a.className || ""
  ].filter(Boolean).join(" "), id: a.id };
}
const ye = ({
  id: a,
  className: t,
  children: s,
  ...n
}) => {
  const r = Me({ id: a, className: t });
  return /* @__PURE__ */ e.createElement("div", { className: r.classes, id: r.id, ...n }, s);
};
function Ee(a) {
  return {
    classes: ["nhsuk-error-message", a.className || ""].filter(Boolean).join(" "),
    id: a.id,
    visuallyHiddenText: a.visuallyHiddenText ?? "Error:"
  };
}
const _e = ({ id: a, className: t, visuallyHiddenText: s = "Error:", children: n, ...r }) => {
  const l = Ee({ id: a, className: t, visuallyHiddenText: s });
  return /* @__PURE__ */ e.createElement("span", { className: l.classes, id: l.id, ...r }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, l.visuallyHiddenText, " "), n);
};
function ve(a) {
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
const q = ({
  children: a,
  legend: t,
  className: s,
  describedBy: n,
  ...r
}) => {
  const l = ve({
    className: s,
    describedBy: n,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
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
    t && (t.text || t.html) && /* @__PURE__ */ e.createElement("legend", { className: l.legendClasses }, i()),
    a
  );
}, ma = ({
  text: a = "Skip to main content",
  href: t = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const r = E("nhsuk-skip-link", s);
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
}, Le = re(
  ({
    summaryText: a,
    summaryHtml: t,
    text: s,
    html: n,
    open: r = !1,
    className: l = "",
    id: i,
    children: c,
    ...o
  }, d) => {
    const g = [
      "nhsuk-details",
      l
    ].filter(Boolean).join(" "), k = t ? /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: t }
      }
    ) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-details__summary-text" }, a);
    let h;
    return c ? h = c : n ? h = /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s && (h = s), /* @__PURE__ */ e.createElement(
      "details",
      {
        ref: d,
        id: i,
        className: g,
        open: r,
        ...o
      },
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, k),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, h)
    );
  }
);
Le.displayName = "Details";
const ga = ({
  text: a,
  html: t,
  children: s,
  className: n,
  ...r
}) => {
  const l = E("nhsuk-inset-text", n), i = () => s || (t ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t } }) : a ? /* @__PURE__ */ e.createElement("p", null, a) : null);
  return /* @__PURE__ */ e.createElement("div", { className: l, ...r }, i());
}, we = ({
  id: a,
  className: t,
  headingText: s,
  headingHtml: n,
  headingLevel: r = 2,
  bodyText: l,
  bodyHtml: i,
  children: c,
  ...o
}) => {
  const d = E(
    "nhsuk-panel",
    t
  ), g = () => !s && !n && !c ? null : n ? /* @__PURE__ */ e.createElement(
    H,
    {
      level: r,
      className: "nhsuk-panel__heading",
      html: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : s ? /* @__PURE__ */ e.createElement(
    H,
    {
      level: r,
      className: "nhsuk-panel__heading",
      text: s,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, k = () => c ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, c) : i ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : l ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ e.createElement("p", null, l)) : null;
  return /* @__PURE__ */ e.createElement("div", { className: d, id: a, ...o }, g(), k());
}, J = ({
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
)), Ce = ({
  items: a = [],
  children: t,
  classes: s,
  labelText: n = "Breadcrumb",
  href: r,
  text: l,
  reverse: i = !1,
  attributes: c = {}
}) => {
  const o = () => t ? e.Children.toArray(t).filter(
    (N) => e.isValidElement(N) && (N.type === J || N.type?.displayName === "BreadcrumbItem")
  ).map((N) => ({
    text: typeof N.props.children == "string" ? N.props.children : String(N.props.children),
    href: N.props.href,
    active: N.props.active,
    attributes: N.props.attributes
  })) : [], d = () => t ? o() : r && l ? [{ href: r, text: l }] : a, g = () => {
    const p = d();
    if (p && p.length > 0) {
      const N = p.slice().reverse().find((_) => _.href && !_.active);
      if (N)
        return { href: N.href, text: N.text };
    }
    return { text: "Home" };
  }, k = d(), h = g(), m = E(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": i
    },
    s
  ), I = n;
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: m,
      "aria-label": I,
      role: "navigation",
      ...c
    },
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-breadcrumb__list", role: "list" }, t ? (
      // Render children directly if using compound component pattern
      e.Children.map(t, (p, N) => e.isValidElement(p) && (p.type === J || p.type?.displayName === "BreadcrumbItem") ? e.cloneElement(p, { key: N }) : null)
    ) : (
      // Render from items array
      k?.filter((p) => p.active || !!p.href).map((p, N) => /* @__PURE__ */ e.createElement("li", { key: N, className: "nhsuk-breadcrumb__item", role: "listitem" }, p.active ? /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
          "aria-current": "page",
          role: "text",
          ...p.attributes || {}
        },
        p.text
      ) : /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-breadcrumb__link",
          href: p.href,
          role: "link",
          ...p.attributes || {}
        },
        p.text
      )))
    )),
    h.href && /* @__PURE__ */ e.createElement("p", { className: "nhsuk-breadcrumb__back" }, /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-breadcrumb__backlink",
        href: h.href,
        role: "link",
        "aria-label": `Back to ${h.text}`,
        ...a.length > 0 ? a[a.length - 1]?.attributes || {} : {}
      },
      /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Back to  "),
      h.text
    ))
  );
}, De = Ce;
De.Item = J;
J.displayName = "BreadcrumbItem";
const xe = ({
  children: a,
  type: t = "bullet",
  size: s = "medium",
  border: n = !1,
  className: r,
  role: l,
  as: i,
  ...c
}) => {
  const o = i || (t === "number" ? "ol" : "ul"), d = E(
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
  return /* @__PURE__ */ e.createElement(o, { className: d, role: l, ...c }, a);
}, Se = ({
  children: a,
  className: t,
  ...s
}) => {
  const n = E("nhsuk-list__item", t);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...s }, a);
}, Te = xe;
Te.Item = Se;
const ha = ({
  className: a,
  links: t = [],
  linksColumn2: s,
  linksColumn3: n,
  metaLinks: r,
  copyright: l = "© NHS England",
  containerClasses: i,
  attributes: c = {},
  style: o,
  footerStyle: d,
  containerStyle: g
}) => {
  const k = (m, I = !1) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `${m.URL}-${m.label}`,
      className: E("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": I
      })
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-footer__list-item-link",
        href: m.URL,
        target: m.newWindow ? "_blank" : void 0,
        rel: m.newWindow ? "noopener noreferrer" : void 0
      },
      m.label
    )
  ), h = !!(s || n);
  return /* @__PURE__ */ e.createElement("footer", { role: "contentinfo", ...c, style: { ...c?.style, ...o } }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-footer-container" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: E("nhsuk-width-container", i),
      style: g
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Support links"),
    /* @__PURE__ */ e.createElement("div", { className: E("nhsuk-footer", a), style: d }, h ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, t.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((m) => k(m))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, s.map((m) => k(m))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((m) => k(m))), r && r.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, r.map((m) => k(m))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((m) => k(m, !0)), (s || []).map((m) => k(m, !0)), (n || []).map((m) => k(m, !0)), (r || []).map((m) => k(m, !0)))
    )),
    !h && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l))
  ), h && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l)))));
}, pa = ({
  heading: a,
  headingLevel: t = 3,
  text: s,
  html: n,
  children: r,
  className: l,
  ...i
}) => {
  const c = /important/i.test(a), o = () => r || (n ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s ? /* @__PURE__ */ e.createElement("p", null, s) : null), d = [
    "nhsuk-warning-callout",
    l
  ].filter(Boolean).join(" "), g = `h${t}`;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: d,
      ...i
    },
    se(
      g,
      { className: "nhsuk-warning-callout__label" },
      c ? /* @__PURE__ */ e.createElement(e.Fragment, null, a, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), a)
    ),
    o()
  );
}, Na = (a) => /* @__PURE__ */ e.createElement(me, { ...a }), ka = ({
  items: a,
  classes: t,
  ariaLabel: s = "Pages in this guide",
  attributes: n = {}
}) => {
  const r = E("nhsuk-contents-list", t), l = (i, c) => i.current ? /* @__PURE__ */ e.createElement(
    "li",
    {
      key: c,
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...i.attributes || {}
    },
    /* @__PURE__ */ e.createElement("span", { className: "nhsuk-contents-list__current" }, i.text)
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
        href: i.href,
        ...i.attributes || {}
      },
      i.text
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
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-contents-list__list" }, a.map((i, c) => l(i, c)))
  );
}, je = re(
  ({
    title: a,
    type: t,
    items: s,
    hidePrefix: n = !1,
    headingLevel: r = 3,
    className: l,
    ...i
  }, c) => {
    const o = ["nhsuk-do-dont-list"];
    l && o.push(l);
    const d = [
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
    ), k = (m) => t === "cross" && !n ? `do not ${m}` : m, h = () => /* @__PURE__ */ e.createElement(
      H,
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
        className: o.join(" "),
        ...i
      },
      h(),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: d.join(" "), role: "list" }, s.map((m, I) => /* @__PURE__ */ e.createElement("li", { key: I }, g(), k(m.item)))))
    );
  }
);
je.displayName = "DoDontList";
const fa = ({
  src: a,
  alt: t,
  caption: s,
  sizes: n,
  srcset: r,
  className: l,
  ...i
}) => {
  const c = [
    "nhsuk-image",
    l
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "figure",
    {
      className: c,
      ...i
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
}, Ia = ({
  previousUrl: a,
  previousPage: t,
  nextUrl: s,
  nextPage: n,
  classes: r,
  attributes: l = {}
}) => {
  const i = E("nhsuk-pagination", r);
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: i,
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
}, ba = ({
  items: a,
  noBorder: t = !1,
  className: s,
  ...n
}) => {
  const r = E(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    s
  ), l = (c) => c.children ? c.children : c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text ? c.text : null, i = (c) => !c || !c.items.length ? null : /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__actions" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-summary-list__actions-list" }, c.items.map((o, d) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: d,
      className: "nhsuk-summary-list__actions-list-item"
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        href: o.href,
        className: "nhsuk-link",
        ...o.attributes
      },
      l(o),
      o.visuallyHiddenText && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, o.visuallyHiddenText)
    )
  ))));
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-summary-list-container" }, /* @__PURE__ */ e.createElement("dl", { className: r, ...n }, a.map((c, o) => /* @__PURE__ */ e.createElement("div", { key: o, className: "nhsuk-summary-list__row" }, /* @__PURE__ */ e.createElement("dt", { className: "nhsuk-summary-list__key" }, l(c.key)), /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__value" }, l(c.value)), i(c.actions)))));
}, Ma = ({
  title: a,
  value: t,
  subtitle: s,
  variant: n = "default",
  href: r,
  className: l = "",
  ariaLabel: i,
  ...c
}) => {
  const o = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${n}`,
    l
  ].filter(Boolean).join(" "), d = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(H, { level: 3, className: "nhs-fdp-summary-card__title" }, a), /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__value" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__subtitle" }, s));
  return r ? /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `${o} nhs-fdp-summary-card--clickable`,
      href: r,
      "aria-label": i || `${a}: ${t}`,
      ...c
    },
    d
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: o,
      "aria-label": i,
      ...c
    },
    d
  );
};
function ie(a) {
  var t, s, n = "";
  if (typeof a == "string" || typeof a == "number") n += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var r = a.length;
    for (t = 0; t < r; t++) a[t] && (s = ie(a[t])) && (n && (n += " "), n += s);
  } else for (s in a) a[s] && (n && (n += " "), n += s);
  return n;
}
function ae() {
  for (var a, t, s = 0, n = "", r = arguments.length; s < r; s++) (a = arguments[s]) && (t = ie(a)) && (n && (n += " "), n += t);
  return n;
}
const ya = ({
  label: a,
  value: t,
  unit: s,
  delta: n,
  status: r = "neutral",
  variant: l = "default",
  subtitle: i,
  metadata: c,
  trendData: o,
  loading: d = !1,
  error: g,
  valueFormatter: k,
  className: h,
  style: m,
  id: I,
  announceDelta: p = !0,
  visual: N
}) => {
  const _ = S.useId(), b = I || _, L = `${b}-label`, w = `${b}-value`, y = `${b}-delta`, v = typeof t == "number" && !Number.isNaN(t), D = d ? "—" : g ? "" : v ? k ? k(t) : t.toLocaleString() : t;
  let M, u = "", x = "";
  if (n && !d && !g) {
    M = n.direction || (n.value > 0 ? "up" : n.value < 0 ? "down" : "neutral");
    const C = Math.abs(n.value), T = M === "up" ? `+${C}` : M === "down" ? `-${C}` : "0", j = n.isPercent ? "%" : "";
    if (u = `${T}${j}`, n.ariaLabel)
      x = n.ariaLabel;
    else {
      const f = n.invert ? M === "down" : M === "up";
      x = `${M === "neutral" ? "no change" : M === "up" ? "up" : "down"} ${C}${j}${M === "neutral" ? "" : f ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: ae(
        "fdp-metric-card",
        l && `fdp-metric-card--${l}`,
        r && `fdp-metric-card--status-${r}`,
        d && "fdp-metric-card--loading",
        g && "fdp-metric-card--error",
        h
      ),
      style: m,
      role: "group",
      "aria-labelledby": L,
      "data-component": "MetricCard"
    },
    /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__inner" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__header" }, /* @__PURE__ */ S.createElement("h3", { id: L, className: "fdp-metric-card__label" }, a), c && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__metadata" }, c)), /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__content" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__value-section" }, /* @__PURE__ */ S.createElement("div", { id: w, className: "fdp-metric-card__value" }, d ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" })) : g ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__error", role: "alert" }, g) : /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__number" }, D), s && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__unit" }, s))), i && !d && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__subtitle" }, i)), n && !d && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__delta-section" }, /* @__PURE__ */ S.createElement(
      "div",
      {
        id: y,
        "aria-label": x,
        className: ae(
          "fdp-metric-card__delta",
          M && `fdp-metric-card__delta--${M}`
        )
      },
      /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-value" }, u),
      n.period && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-period" }, n.period)
    )), o && o.length > 0 && !d && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })), N && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__visual", "aria-hidden": "true" }, N), p && n && !n.ariaLabel && !d && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-visually-hidden", "aria-live": "polite" }, x))
  );
}, G = { current: null }, Ae = () => {
  if (G.current) return G.current;
  try {
    G.current = require("prismjs");
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
    G.current = null;
  }
  return G.current;
}, ze = (a) => {
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
}, W = (a, t, s) => {
  if (s || !t) return a;
  const n = Ae();
  if (n && n.languages) {
    const r = n.languages[t] ? t : n.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : n.languages.json && t === "json" ? "json" : void 0;
    if (r)
      try {
        return n.highlight(a, n.languages[r], r);
      } catch {
      }
  }
  return ze(a);
}, Ze = ({
  rows: a,
  head: t,
  caption: s,
  captionSize: n,
  firstCellIsHeader: r = !1,
  responsive: l = !1,
  heading: i,
  headingLevel: c = 3,
  panel: o = !1,
  panelClasses: d,
  tableClasses: g,
  classes: k,
  attributes: h,
  "data-testid": m,
  columns: I,
  data: p,
  visuallyHiddenCaption: N = !1
}) => {
  const _ = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), b = E(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": l
    },
    g
  ), L = E(k), w = (u, x) => {
    const C = E(
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
    let j;
    if (u.node != null)
      j = /* @__PURE__ */ e.createElement(e.Fragment, null, u.node);
    else if (u.html)
      j = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: u.html } });
    else if (u.code != null) {
      const f = Array.isArray(u.code), A = f ? u.code.join(`
`) : u.code, z = f || A.includes(`
`), B = {
        className: E("nhsuk-table__code", u.codeClassName, {
          "nhsuk-table__code--block": z,
          "nhsuk-table__code--inline": !z
        }),
        ...u.codeLanguage ? { "data-language": u.codeLanguage } : {}
      }, Z = W(A, u.codeLanguage);
      j = z ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...B,
          dangerouslySetInnerHTML: { __html: Z }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...B,
          dangerouslySetInnerHTML: { __html: Z }
        }
      );
    } else
      j = u.text;
    return /* @__PURE__ */ e.createElement("th", { key: x, className: C, ...T }, j);
  }, y = (u, x, C) => {
    const T = r && C || u.rowHeader, j = E(
      T ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${T ? "header" : "cell"}--${u.format}`]: u.format
      },
      u.classes
    ), f = {
      ...T && { scope: "row" },
      ...u.colspan && { colSpan: u.colspan },
      ...u.rowspan && { rowSpan: u.rowspan },
      ...l && {
        role: T ? "rowheader" : "cell",
        ...u.header && { "data-label": u.header }
      },
      ...u.attributes
    };
    let A;
    if (u.node != null)
      A = /* @__PURE__ */ e.createElement(e.Fragment, null, u.node);
    else if (u.html)
      A = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: u.html } });
    else if (u.code != null) {
      const Z = Array.isArray(u.code), U = Z ? u.code.join(`
`) : u.code, O = Z || U.includes(`
`), Q = {
        className: E("nhsuk-table__code", u.codeClassName, {
          "nhsuk-table__code--block": O,
          "nhsuk-table__code--inline": !O
        }),
        ...u.codeLanguage ? { "data-language": u.codeLanguage } : {}
      }, R = W(
        U,
        u.codeLanguage,
        u.disableHighlight
      );
      A = O ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...Q,
          dangerouslySetInnerHTML: { __html: R }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...Q,
          dangerouslySetInnerHTML: { __html: R }
        }
      );
    } else
      A = u.text;
    const z = /* @__PURE__ */ e.createElement(e.Fragment, null, l && u.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, u.header, " "), A), B = T ? "th" : "td";
    return /* @__PURE__ */ e.createElement(B, { key: x, className: j, ...f }, z);
  };
  let v = t, D = a;
  !v && I && I.length && (v = I.map((u) => ({
    text: u.title,
    format: u.format,
    classes: u.headerClasses,
    attributes: u.headerAttributes
  }))), !D && I && p && p.length && (D = p.map((u, x) => I.map((C) => {
    const T = C.accessor ? C.accessor(u, x) : u[C.key];
    let j = { format: C.format, classes: C.cellClasses, attributes: C.cellAttributes };
    if (C.rowHeader && (j.rowHeader = !0), C.render) {
      const f = C.render(T, u, x, C);
      return f == null || typeof f == "boolean" ? { ...j, text: "" } : typeof f == "string" || typeof f == "number" ? { ...j, text: String(f) } : { ...j, ...f };
    }
    return { ...j, text: T != null ? String(T) : "" };
  })));
  const M = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: b,
      ...l && { role: "table" },
      ...h,
      ...m && { "data-testid": m }
    },
    s && /* @__PURE__ */ e.createElement("caption", { className: E(_, N && "nhsuk-u-visually-hidden") }, s),
    v && v.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...l && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...l && { role: "row" } }, v.map(
        (u, x) => w(u, x)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, D && D.map((u, x) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: x,
        className: "nhsuk-table__row",
        ...l && { role: "row" }
      },
      u.map(
        (C, T) => y(C, T, T === 0)
      )
    )))
  );
  return o ? /* @__PURE__ */ e.createElement(we, { className: d }, i && /* @__PURE__ */ e.createElement(H, { level: c, className: "nhsuk-table__heading-tab" }, i), M()) : L ? /* @__PURE__ */ e.createElement("div", { className: L }, M()) : M();
}, Be = ({
  children: a,
  size: t,
  className: s
}) => {
  const n = E(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    s
  );
  return /* @__PURE__ */ e.createElement("caption", { className: n }, a);
}, oe = ({
  responsive: a,
  className: t,
  children: s,
  ...n
}) => {
  const r = a ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: t, ...r, ...n }, s);
}, de = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: r,
  codeClassName: l,
  disableHighlight: i,
  format: c,
  classes: o,
  colspan: d,
  rowspan: g,
  attributes: k,
  responsive: h,
  as: m = "th"
}) => {
  const I = E(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${c}`]: c },
    o
  ), p = {
    scope: "col",
    ...d && { colSpan: d },
    ...g && { rowSpan: g },
    ...h && { role: "columnheader" },
    ...k
  };
  let N;
  if (s != null) N = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) N = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const b = Array.isArray(n), L = b ? n.join(`
`) : n, w = b || L.includes(`
`), y = {
      className: E("nhsuk-table__code", l, {
        "nhsuk-table__code--block": w,
        "nhsuk-table__code--inline": !w
      }),
      ...r ? { "data-language": r } : {}
    }, v = W(
      L,
      r,
      i
    );
    N = w ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...y,
        dangerouslySetInnerHTML: { __html: v }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...y, dangerouslySetInnerHTML: { __html: v } });
  } else N = a;
  const _ = m;
  return /* @__PURE__ */ e.createElement(_, { className: I, ...p }, N);
}, He = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: r,
  codeClassName: l,
  disableHighlight: i,
  format: c,
  classes: o,
  colspan: d,
  rowspan: g,
  attributes: k,
  responsive: h,
  rowHeader: m
}) => {
  const I = !!m, p = I ? "th" : "td", N = E(
    I ? "nhsuk-table__header" : "nhsuk-table__cell",
    c && `nhsuk-table__${I ? "header" : "cell"}--${c}`,
    o
  ), _ = {
    ...d && { colSpan: d },
    ...g && { rowSpan: g },
    ...I && { scope: "row" },
    ...h && { role: I ? "rowheader" : "cell" },
    ...k
  };
  let b;
  if (s != null) b = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) b = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const L = Array.isArray(n), w = L ? n.join(`
`) : n, y = L || w.includes(`
`), v = {
      className: E("nhsuk-table__code", l, {
        "nhsuk-table__code--block": y,
        "nhsuk-table__code--inline": !y
      }),
      ...r ? { "data-language": r } : {}
    }, D = W(w, r, i);
    b = y ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ...v, dangerouslySetInnerHTML: { __html: D } })) : /* @__PURE__ */ e.createElement("code", { ...v, dangerouslySetInnerHTML: { __html: D } });
  } else b = a;
  return /* @__PURE__ */ e.createElement(p, { className: N, ..._ }, b);
}, P = Ze;
P.Caption = Be;
P.BodyRow = oe;
P.HeaderCell = de;
P.Cell = He;
let te = !1, ne = !1;
Object.defineProperty(P, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !te && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), te = !0), oe;
  }
});
Object.defineProperty(P, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ne && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), ne = !0), de;
  }
});
const Pe = ({
  heading: a,
  headingLevel: t = 1,
  headingClasses: s = "",
  text: n,
  html: r,
  imageURL: l,
  containerClasses: i = "",
  classes: c = "",
  children: o,
  ...d
}) => {
  const g = [
    "nhsuk-hero",
    l && a ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    l && !a ? "nhsuk-hero--image" : "",
    c
  ].filter(Boolean).join(" "), k = [
    "nhsuk-width-container",
    i,
    l ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    s,
    !o && !n && !r ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), m = o || a || n || r, I = () => {
    if (!a) return null;
    const p = { className: h };
    switch (t) {
      case 1:
        return /* @__PURE__ */ e.createElement("h1", { ...p }, a);
      case 2:
        return /* @__PURE__ */ e.createElement("h2", { ...p }, a);
      case 3:
        return /* @__PURE__ */ e.createElement("h3", { ...p }, a);
      case 4:
        return /* @__PURE__ */ e.createElement("h4", { ...p }, a);
      case 5:
        return /* @__PURE__ */ e.createElement("h5", { ...p }, a);
      case 6:
        return /* @__PURE__ */ e.createElement("h6", { ...p }, a);
      default:
        return /* @__PURE__ */ e.createElement("h1", { ...p }, a);
    }
  };
  return /* @__PURE__ */ e.createElement(
    "section",
    {
      className: g,
      style: l ? { backgroundImage: `url('${l}')` } : void 0,
      role: "banner",
      ...d
    },
    l && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, m && /* @__PURE__ */ e.createElement("div", { className: k }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, I(), o || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !l && m && /* @__PURE__ */ e.createElement("div", { className: k }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, I(), o || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
Pe.displayName = "Hero";
const Oe = e.forwardRef(({
  variant: a = "default",
  heading: t,
  headingHtml: s,
  headingLevel: n = 2,
  headingClasses: r,
  description: l,
  descriptionHtml: i,
  href: c,
  imgURL: o,
  imgAlt: d,
  ...g
}, k) => {
  const h = [
    "nhsuk-card",
    a === "clickable" && "nhsuk-card--clickable",
    a === "secondary" && "nhsuk-card--secondary",
    a === "feature" && "nhsuk-card--feature",
    g.className
  ].filter(Boolean).join(" "), m = [
    "nhsuk-card__content",
    a === "feature" && "nhsuk-card__content--feature",
    a === "primary" && "nhsuk-card__content--primary",
    a === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), I = [
    "nhsuk-card__heading",
    a === "feature" && "nhsuk-card__heading--feature",
    r
  ].filter(Boolean).join(" "), p = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const b = () => c && a !== "feature" ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-card__link", href: c }, t) : t;
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: I
      },
      b()
    );
  }, N = () => g.children ? g.children : i ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: i } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, l) : null, _ = () => a !== "primary" ? null : /* @__PURE__ */ e.createElement(
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
      className: h,
      ref: k
    },
    o && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: o,
        alt: d || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: m }, p(), N(), _())
  );
});
Oe.displayName = "Card";
const Ea = ({
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
}, va = ({
  type: a,
  heading: t,
  headingHtml: s,
  headingLevel: n = 3,
  headingClasses: r,
  description: l,
  descriptionHtml: i,
  className: c,
  children: o,
  "data-testid": d,
  id: g,
  "aria-label": k,
  "aria-labelledby": h,
  "aria-describedby": m
}) => {
  const I = [
    "nhsuk-care-card",
    `nhsuk-care-card--${a}`,
    c
  ].filter(Boolean).join(" "), p = [
    "nhsuk-care-card__heading",
    r
  ].filter(Boolean).join(" "), N = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const b = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[a], L = /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, b, " "), t);
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: p
      },
      L
    );
  }, _ = () => o || (i ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: i } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, l) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: I,
      "data-testid": d,
      id: g,
      "aria-label": k,
      "aria-labelledby": h,
      "aria-describedby": m
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, N(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, _())
  );
};
function Ge(a) {
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
    placeholder: i,
    disabled: c = !1,
    readOnly: o = !1,
    required: d = !1,
    hasError: g = !1,
    describedBy: k,
    className: h,
    width: m = "full",
    inputMode: I,
    autoComplete: p,
    maxLength: N,
    minLength: _,
    pattern: b,
    step: L,
    min: w,
    max: y,
    showValueLabels: v = !1,
    showCurrentValue: D = !1,
    valueLabels: M,
    // Strip interactive handlers in server variant
    onChange: u,
    onBlur: x,
    onFocus: C,
    onKeyDown: T,
    ...j
  } = a, { classes: f, isRange: A } = Ge({
    type: n,
    hasError: g,
    width: m,
    className: h
  }), z = {
    id: t,
    name: s,
    type: n,
    placeholder: i,
    disabled: c,
    readOnly: o,
    required: d,
    "aria-describedby": k,
    inputMode: I,
    autoComplete: p,
    maxLength: N,
    minLength: _,
    pattern: b,
    step: L,
    min: w,
    max: y,
    ...j
  };
  if (A) {
    const B = r ?? l ?? (typeof w < "u" ? String(w) : "0"), Z = /* @__PURE__ */ e.createElement(
      "input",
      {
        className: f,
        ...r !== void 0 ? { value: r } : {},
        ...r === void 0 && l !== void 0 ? { defaultValue: l } : {},
        "data-current-value": B,
        ...z
      }
    );
    return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-wrapper" }, v ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-labels" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min" }, M?.min || w || "0"), Z, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max" }, M?.max || y || "100")) : Z, D && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-current-value" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-current-label" }, M?.current || "Current value:", " ", /* @__PURE__ */ e.createElement("strong", null, B))));
  }
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: f,
      ...r !== void 0 ? { value: r } : {},
      ...r === void 0 && l !== void 0 ? { defaultValue: l } : {},
      ...z
    }
  );
}
function Ue(a) {
  const t = a.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    a.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
const La = ({
  id: a,
  name: t,
  value: s,
  defaultValue: n,
  placeholder: r,
  disabled: l = !1,
  readOnly: i = !1,
  required: c = !1,
  hasError: o = !1,
  describedBy: d,
  className: g,
  rows: k = 5,
  cols: h,
  maxLength: m,
  minLength: I,
  wrap: p = "soft",
  resize: N = "vertical",
  autoComplete: _,
  spellCheck: b,
  onChange: L,
  onBlur: w,
  onFocus: y,
  onKeyDown: v,
  ...D
}) => {
  const { classes: M, describedBy: u } = Ue({ hasError: o, resize: N, className: g, describedBy: d });
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: M,
      id: a,
      name: t,
      value: s,
      defaultValue: n,
      placeholder: r,
      disabled: l,
      readOnly: i,
      required: c,
      "aria-describedby": u,
      rows: k,
      cols: h,
      maxLength: m,
      minLength: I,
      wrap: p,
      autoComplete: _,
      spellCheck: b,
      onChange: L,
      onBlur: w,
      onFocus: y,
      onKeyDown: v,
      ...D
    }
  );
};
function Qe(a) {
  return { classes: [
    "nhsuk-select",
    a.hasError ? "nhsuk-select--error" : "",
    a.className || ""
  ].filter(Boolean).join(" ") };
}
const Re = ({
  value: a,
  disabled: t = !1,
  selected: s = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: n,
  children: r,
  ...l
}) => {
  const i = E(
    "nhsuk-select__option",
    n
  );
  return /* @__PURE__ */ e.createElement(
    "option",
    {
      className: i,
      value: a,
      disabled: t,
      ...l
    },
    r
  );
}, Je = ({
  id: a,
  name: t,
  ariaLabel: s,
  value: n,
  defaultValue: r,
  disabled: l = !1,
  required: i = !1,
  hasError: c = !1,
  describedBy: o,
  className: d,
  multiple: g = !1,
  size: k,
  autoComplete: h,
  options: m,
  children: I,
  onChange: p,
  onBlur: N,
  onFocus: _,
  ...b
}) => {
  const { classes: L } = Qe({ hasError: c, className: d }), w = () => m ? m.map((v, D) => /* @__PURE__ */ e.createElement(
    "option",
    {
      key: `${v.value}-${D}`,
      value: v.value,
      disabled: v.disabled,
      "data-initial-selected": v.selected || void 0
    },
    v.text
  )) : null, y = r === void 0 && n === void 0 && m ? m.find((v) => v.selected)?.value : void 0;
  return /* @__PURE__ */ e.createElement(
    "select",
    {
      className: L,
      id: a,
      name: t,
      "aria-label": s,
      value: n,
      defaultValue: r !== void 0 ? r : y,
      disabled: l,
      required: i,
      "aria-describedby": o,
      multiple: g,
      size: k,
      autoComplete: h,
      onChange: p,
      onBlur: N,
      onFocus: _,
      ...b
    },
    I || w()
  );
}, We = Je;
We.Option = Re;
function wa({
  id: a,
  className: t,
  items: s,
  namePrefix: n,
  values: r = {},
  fieldset: l,
  hint: i,
  errorMessage: c,
  // strip interactive props
  onChange: o,
  ...d
}) {
  const k = s || [
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
  let h = l?.describedBy || "";
  const m = i ? `${a}-hint` : "", I = c ? `${a}-error` : "";
  m && (h = h ? `${h} ${m}` : m), I && (h = h ? `${h} ${I}` : I);
  const p = E("nhsuk-form-group", {
    "nhsuk-form-group--error": !!c
  }), N = E("nhsuk-date-input", t), _ = () => /* @__PURE__ */ e.createElement(e.Fragment, null, i && /* @__PURE__ */ e.createElement(ye, { id: m, className: i.classes }, i.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text), c && /* @__PURE__ */ e.createElement(_e, { id: I, className: c.classes }, c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: N,
      id: a,
      "data-testid": "date-input",
      ...d
    },
    k.map((b) => {
      const L = b.id || `${a}-${b.name}`, w = n ? `${n}[${b.name}]` : b.name, y = b.label || b.name.charAt(0).toUpperCase() + b.name.slice(1), v = r[b.name];
      return /* @__PURE__ */ e.createElement("div", { key: b.name, className: "nhsuk-date-input__item" }, /* @__PURE__ */ e.createElement(K, { htmlFor: L, className: "nhsuk-date-input__label" }, y), /* @__PURE__ */ e.createElement(
        ee,
        {
          id: L,
          name: w,
          defaultValue: v,
          className: E("nhsuk-date-input__input", b.classes),
          inputMode: b.inputmode,
          autoComplete: b.autocomplete,
          pattern: b.pattern,
          "aria-describedby": h || void 0
        }
      ));
    })
  ));
  return /* @__PURE__ */ e.createElement("div", { className: p }, l ? /* @__PURE__ */ e.createElement(
    q,
    {
      className: l.classes,
      legend: l.legend ? { text: l.legend } : void 0,
      describedBy: h || void 0
    },
    _()
  ) : _());
}
function Ca({
  titleText: a = "There is a problem",
  titleHtml: t,
  descriptionText: s,
  descriptionHtml: n,
  errorList: r,
  className: l,
  children: i,
  ...c
}) {
  const o = E("nhsuk-error-summary", l), d = () => t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a, g = () => n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s, k = (h) => {
    const m = h.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
    return h.href ? /* @__PURE__ */ e.createElement("a", { href: h.href, ...h.attributes }, m) : m;
  };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: o,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...c
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title" }, d()),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__body" }, i && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, i), !i && (s || n) && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, g()), /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list" }, r.map((h, m) => /* @__PURE__ */ e.createElement("li", { key: m }, k(h)))))
  );
}
function Fe(a) {
  return { classes: [
    "nhsuk-radios",
    a.hasError ? "nhsuk-radios--error" : "",
    a.size === "small" ? "nhsuk-radios--small" : "",
    a.inline ? "nhsuk-radios--inline" : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
function Ye(a, {
  variant: t,
  selectedValue: s,
  enableBehaviourAttr: n,
  handleChange: r,
  handleBlur: l,
  handleFocus: i,
  handleKeyDown: c,
  itemsRef: o,
  InputComponent: d
}) {
  const {
    onChange: g,
    onBlur: k,
    onFocus: h,
    ...m
  } = a, {
    name: I,
    hasError: p = !1,
    describedBy: N,
    className: _,
    size: b = "normal",
    inline: L = !1,
    options: w,
    ...y
  } = m, { classes: v, describedBy: D } = Fe({ hasError: p, size: b, inline: L, className: _, describedBy: N });
  return /* @__PURE__ */ e.createElement(q, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: v,
      ...y,
      "data-nhs-behaviour": "radios"
    },
    w.map((M, u) => {
      const x = `${I}-${u}`, C = M.conditional ? `${x}-conditional` : void 0, T = s === M.value;
      return /* @__PURE__ */ e.createElement("div", { key: M.value, className: "nhsuk-radios__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-radios__input",
          id: x,
          name: I,
          type: "radio",
          value: M.value,
          disabled: M.disabled,
          defaultChecked: T,
          "data-nhs-radios-input": !0,
          "aria-describedby": D
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-radios__label", htmlFor: x }, M.text), M.hint && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-radios__hint" }, M.hint), M.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: E("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !T
          }),
          id: C,
          "data-nhs-radios-conditional": !0
        },
        typeof M.conditional == "object" && M.conditional !== null && "label" in M.conditional && "id" in M.conditional && "name" in M.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, M.conditional.label && /* @__PURE__ */ e.createElement(
          K,
          {
            htmlFor: M.conditional.id
          },
          M.conditional.label
        ), /* @__PURE__ */ e.createElement(
          d,
          {
            ...M.conditional
          }
        )) : M.conditional
      ));
    })
  ));
}
const Da = ({ value: a, defaultValue: t, ...s }) => {
  const n = a || t || "";
  return Ye(
    { value: a, defaultValue: t, ...s },
    {
      variant: "server",
      selectedValue: n,
      enableBehaviourAttr: !0,
      InputComponent: ee
    }
  );
};
function Ve(a) {
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
function xa(a) {
  const {
    items: t,
    name: s,
    idPrefix: n,
    legend: r,
    isPageHeading: l = !1,
    legendSize: i = "l",
    hint: c,
    errorMessage: o,
    className: d = "",
    small: g = !1,
    // Strip interactive handler in server variant
    onChange: k,
    fieldsetAttributes: h,
    attributes: m,
    ...I
  } = a, p = n || s, N = c ? `${p}-hint` : void 0, _ = o ? `${p}-error` : void 0, b = [N, _].filter(Boolean).join(" ") || void 0, { classes: L, formGroupClasses: w } = Ve({ small: g, className: d, hasError: !!o });
  return /* @__PURE__ */ e.createElement("div", { className: w, ...m, ...I }, /* @__PURE__ */ e.createElement(
    q,
    {
      legend: r ? { text: r, isPageHeading: l, size: i } : void 0,
      describedBy: b,
      ...h
    },
    c && /* @__PURE__ */ e.createElement("div", { id: N, className: "nhsuk-hint" }, c),
    o && /* @__PURE__ */ e.createElement("div", { id: _, className: "nhsuk-error-message" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Error:"), " ", o),
    /* @__PURE__ */ e.createElement("div", { className: L, "data-nhs-behaviour": "checkboxes" }, t.map((y, v) => {
      const D = `${p}-${v + 1}`, M = `${D}-conditional`, u = !!y.checked, x = !!y.disabled;
      return /* @__PURE__ */ e.createElement("div", { key: y.value, className: "nhsuk-checkboxes__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: D,
          name: s,
          type: "checkbox",
          value: y.value,
          ...u ? { defaultChecked: !0 } : {},
          disabled: x,
          "aria-describedby": y.hint ? `${D}-hint` : b,
          ...y.conditional && {
            "aria-controls": M,
            "aria-expanded": u ? "true" : "false"
          },
          ...y.attributes
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-checkboxes__label", htmlFor: D }, y.text), y.hint && /* @__PURE__ */ e.createElement("div", { id: `${D}-hint`, className: "nhsuk-checkboxes__hint" }, y.hint), y.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: E("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !u
          }),
          id: M,
          "data-nhs-checkboxes-conditional": !0
        },
        typeof y.conditional == "object" && y.conditional !== null && "label" in y.conditional && "id" in y.conditional && "name" in y.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, y.conditional.label && /* @__PURE__ */ e.createElement(K, { htmlFor: y.conditional.id }, y.conditional.label), /* @__PURE__ */ e.createElement(ee, { ...y.conditional })) : y.conditional
      ));
    }))
  ));
}
function $(a, t) {
  if (!a || a.hidden) return null;
  const { href: s, label: n, variant: r, disabled: l, type: i } = a, c = { variant: r, disabled: l };
  return s ? /* @__PURE__ */ e.createElement(X, { href: s, ...c }, n || t) : /* @__PURE__ */ e.createElement(X, { type: i === "button" ? "button" : "submit", ...c }, n || t);
}
const Sa = ({
  back: a,
  startAgain: t,
  next: s,
  flipOrderOnMobile: n = !0,
  className: r
}) => {
  const l = !!a && !a.hidden, i = !!t && !t.hidden, c = !!s && !s.hidden, o = [l, i, c].filter(Boolean).length, d = F.OneHalf, g = F.OneThird;
  return /* @__PURE__ */ e.createElement(
    ge,
    {
      className: E("nhs-form-nav", r, {
        "nhs-form-nav--flip-mobile": n
      })
    },
    l && /* @__PURE__ */ e.createElement(Y, { width: o === 2 ? d : g, className: "nhs-form-nav__back" }, $(a, "Back")),
    i && /* @__PURE__ */ e.createElement(
      Y,
      {
        width: o === 2 ? d : g,
        align: o === 2 ? V.Right : V.Center,
        className: "nhs-form-nav__start-again"
      },
      $(t, "Start again")
    ),
    c && /* @__PURE__ */ e.createElement(
      Y,
      {
        width: !l && !i ? F.Full : o === 2 ? d : g,
        align: V.Right,
        className: "nhs-form-nav__next"
      },
      $(s, "Next")
    )
  );
}, $e = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", Xe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Ke = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", qe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", ea = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", aa = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", ta = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var na = /* @__PURE__ */ ((a) => (a.NHS = "nhs", a.FDP = "fdp", a))(na || {}), sa = /* @__PURE__ */ ((a) => (a.Full = "full", a.Graphic = "graphic", a.Inverse = "inverse", a.TwoLine = "twoLine", a.TwoLineInverse = "twoLineInverse", a.Compact = "compact", a.CompactInverted = "compactInverted", a))(sa || {});
const ra = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: $e,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: ea,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: qe,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: Xe,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Ke,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: aa,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: ta,
      ariaLabel: "FDP"
    }
  }
};
function Ta(a, t = "full") {
  return ra[a]?.[t];
}
export {
  oa as ActionLink,
  da as BackLink,
  na as BrandKey,
  De as Breadcrumb,
  za as Breakpoint,
  X as ButtonServer,
  ce as ButtonSize,
  le as ButtonVariant,
  Oe as Card,
  Ea as CardGroup,
  _a as CardGroupItem,
  va as CareCard,
  xa as Checkboxes,
  Y as Column,
  V as ColumnAlign,
  me as Container,
  ka as ContentsList,
  wa as DateInput,
  Le as Details,
  je as DoDontList,
  _e as ErrorMessage,
  Ca as ErrorSummary,
  q as Fieldset,
  Za as Float,
  ha as Footer,
  Sa as FormNavButtonBar,
  Ba as Grid,
  F as GridWidth,
  ia as Header,
  H as Heading,
  Pe as Hero,
  ye as Hint,
  fa as Images,
  ee as Input,
  ga as InsetText,
  K as Label,
  Te as List,
  sa as LogoVariant,
  ya as MetricCard,
  Ia as Pagination,
  we as Panel,
  Da as Radios,
  ge as Row,
  We as Select,
  Re as SelectOption,
  ma as SkipLink,
  Ha as SpacingUtilities,
  Ma as SummaryCard,
  ba as SummaryList,
  P as Table,
  oe as TableBodyRow,
  Be as TableCaption,
  He as TableCell,
  de as TableHeaderCell,
  ua as Tag,
  La as Textarea,
  pa as WarningCallout,
  Na as WidthContainer,
  ra as brandLogos,
  Ta as getBrandLogo,
  Pa as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
