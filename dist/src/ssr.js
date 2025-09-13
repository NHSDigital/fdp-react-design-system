import * as Z from "react";
import e, { createElement as Y, forwardRef as U } from "react";
import { c as v, C as re } from "../SkipLink-Bpun0E2L.js";
import { B as ka, a as fa, d as ba, F as ga, G as pa, b as Ea, R as Na, S as va, g as ya } from "../SkipLink-Bpun0E2L.js";
const le = ({
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
      className: v(
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
          className: v(
            "nhsuk-account__item nhsuk-header__account-item",
            l.className
          )
        },
        r(l)
      )
    ))
  );
};
function ce(a, { variant: t, isClient: s }) {
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
    containerClasses: b,
    variant: f = "default",
    attributes: h = {},
    maxVisibleItems: d,
    // deprecated (ignored)
    responsiveNavigation: p = !0,
    ..._
  } = a;
  "maxVisibleItems" in _ && delete _.maxVisibleItems;
  const k = {
    ...l,
    text: l?.text ?? o
  }, w = k.href && !r.href || k.href && k.href === r.href, N = w ? k.href : r.href, x = v(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || c,
      "nhsuk-header--white": f === "white"
    },
    n
  ), I = v("nhsuk-header__container", b), E = v(
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
  ), B = () => r.src ? /* @__PURE__ */ e.createElement(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: r.src,
      width: "280",
      alt: r.ariaLabel || "NHS"
    }
  ) : C(), y = () => c ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, c.name, c.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", c.split)), c.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, c.descriptor)) : null, u = (g, T) => g ? T ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: T }, g) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, g) : null, H = (g) => g.active || g.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, g.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text) : g.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text, S = m?.items && !p, L = S ? [] : m?.items, M = S ? m.items : [];
  return /* @__PURE__ */ e.createElement("header", { className: x, role: "banner", "data-module": "nhsuk-header", ...h, ..._ }, /* @__PURE__ */ e.createElement("div", { className: I }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, N ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: N }, B(), y(), w && u(k.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, B(), y(), w && u(k.text)), k.text && !w && u(k.text, k.href)), /* @__PURE__ */ e.createElement(le, { ...i, variant: f === "white" ? "white" : "default" })), m && m.items && m.items.length > 0 && /* @__PURE__ */ e.createElement("nav", { className: E, "aria-label": m.ariaLabel || "Menu" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: v(
        "nhsuk-header_navigation-container",
        "nhsuk-width-container",
        {
          "nhsuk-header__navigation-container--ssr": !s
        },
        b
      )
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, (L || []).map((g, T) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: T,
        className: v("nhsuk-header__navigation-item", {
          "nhsuk-header__navigation-item--current": g.active || g.current
        }, g.className),
        ...g.attributes || {}
      },
      /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-header__navigation-link",
          href: g.href,
          ...g.active || g.current ? { "aria-current": g.current ? "page" : "true" } : {}
        },
        H(g)
      )
    )))
  )), S && M.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__dropdown-list" }, M.map((g, T) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `overflow-server-${T}`,
      className: v("nhsuk-header__dropdown-item", {
        "nhsuk-header__dropdown-item--current": g.active || g.current
      })
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-header__dropdown-link",
        href: g.href,
        ...g.active || g.current ? { "aria-current": g.current ? "page" : "true" } : {}
      },
      H(g)
    )
  )))));
}
const We = (a) => ce(a, {
  variant: "server",
  isClient: !1
}), Ze = ({
  text: a,
  href: t,
  openInNewWindow: s = !1,
  className: n,
  ...r
}) => {
  const l = v(
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
function oe(a) {
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
var ee = /* @__PURE__ */ ((a) => (a.Primary = "primary", a.Secondary = "secondary", a.Reverse = "reverse", a.Warning = "warning", a.Login = "login", a))(ee || {}), ae = /* @__PURE__ */ ((a) => (a.Small = "small", a.Default = "default", a.Large = "large", a))(ae || {});
const ie = Z.forwardRef(function(t, s) {
  const {
    children: n,
    variant: r = ee.Primary,
    size: l = ae.Default,
    fullWidth: o = !1,
    className: c = "",
    preventDoubleClick: i = !1,
    ...m
  } = t, b = oe({
    variant: r,
    size: l,
    fullWidth: o,
    className: c,
    href: "href" in m ? m.href : void 0,
    preventDoubleClick: i
  });
  if ("href" in m && m.href) {
    const T = m, {
      id: $,
      style: j,
      title: P,
      ["aria-label"]: z,
      ["aria-describedby"]: D,
      ["aria-labelledby"]: V,
      tabIndex: O,
      ...se
    } = T;
    return /* @__PURE__ */ Z.createElement(
      "a",
      {
        ref: s,
        href: T.href,
        target: T.target,
        rel: T.rel,
        className: b.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...i && { "data-prevent-double-click": "true" },
        id: $,
        style: j,
        title: P,
        "aria-label": z,
        "aria-describedby": D,
        "aria-labelledby": V,
        tabIndex: O,
        ...se
      },
      n
    );
  }
  const f = m, {
    id: h,
    style: d,
    title: p,
    ["aria-label"]: _,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: w,
    tabIndex: N,
    name: x,
    value: I,
    form: E,
    formAction: C,
    formEncType: B,
    formMethod: y,
    formNoValidate: u,
    formTarget: H,
    autoFocus: S,
    type: L,
    disabled: M,
    ...g
  } = f;
  return /* @__PURE__ */ Z.createElement(
    "button",
    {
      ref: s,
      type: L || "button",
      disabled: M,
      className: b.classes,
      "data-module": "nhs-button",
      ...i && { "data-prevent-double-click": "true" },
      id: h,
      style: d,
      title: p,
      "aria-label": _,
      "aria-describedby": k,
      "aria-labelledby": w,
      tabIndex: N,
      name: x,
      value: I,
      form: E,
      formAction: C,
      formEncType: B,
      formMethod: y,
      formNoValidate: u,
      formTarget: H,
      autoFocus: S,
      ...g
    },
    n
  );
});
ie.displayName = "ButtonServer";
const qe = ({
  text: a = "Back",
  html: t,
  href: s = "#",
  className: n,
  element: r = "a",
  onClick: l,
  ...o
}) => {
  const c = v(
    "nhsuk-back-link",
    n
  ), i = v(
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
function ue(a) {
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
const Ke = ({
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
  const b = ue({ color: n, noBorder: r, closable: l, disabled: c, className: i }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !c && o && o();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: b.classes, ...m }, s || (t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a), l && /* @__PURE__ */ e.createElement(
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
function me(a) {
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
const q = ({
  htmlFor: a,
  className: t,
  isPageHeading: s = !1,
  size: n = "m",
  children: r,
  ...l
}) => {
  const o = me({ size: n, isPageHeading: s, className: t, htmlFor: a }), c = o.tag;
  return /* @__PURE__ */ e.createElement(c, { className: o.classes, htmlFor: o.htmlFor, ...l }, s ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: a }, r) : r);
};
function de(a) {
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
function he(a) {
  const t = a.level ?? de(a.size), s = [
    "nhsuk-heading",
    a.size ? `nhsuk-heading--${a.size}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), n = a.marginBottom ? { marginBottom: a.marginBottom } : void 0;
  return { tag: `h${t}`, classes: s, style: n };
}
const F = ({ level: a, className: t, text: s, html: n, children: r, size: l, marginBottom: o, ...c }) => {
  const i = he({ level: a, size: l, className: t, marginBottom: o }), m = r || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s);
  return Y(i.tag, { className: i.classes, style: i.style, ...c }, m);
};
function _e(a) {
  return { classes: [
    "nhsuk-hint",
    a.className || ""
  ].filter(Boolean).join(" "), id: a.id };
}
const ke = ({ id: a, className: t, children: s, ...n }) => {
  const r = _e({ id: a, className: t });
  return /* @__PURE__ */ e.createElement("div", { className: r.classes, id: r.id, ...n }, s);
};
function fe(a) {
  return {
    classes: ["nhsuk-error-message", a.className || ""].filter(Boolean).join(" "),
    id: a.id,
    visuallyHiddenText: a.visuallyHiddenText ?? "Error:"
  };
}
const be = ({ id: a, className: t, visuallyHiddenText: s = "Error:", children: n, ...r }) => {
  const l = fe({ id: a, className: t, visuallyHiddenText: s });
  return /* @__PURE__ */ e.createElement("span", { className: l.classes, id: l.id, ...r }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, l.visuallyHiddenText, " "), n);
};
function ge(a) {
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
const K = ({
  children: a,
  legend: t,
  className: s,
  describedBy: n,
  ...r
}) => {
  const l = ge({
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
}, Je = ({
  text: a = "Skip to main content",
  href: t = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const r = v("nhsuk-skip-link", s);
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
}, pe = U(
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
    const b = [
      "nhsuk-details",
      l
    ].filter(Boolean).join(" "), f = t ? /* @__PURE__ */ e.createElement(
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
        ref: m,
        id: o,
        className: b,
        open: r,
        ...i
      },
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, f),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, h)
    );
  }
);
pe.displayName = "Details";
const Qe = ({
  text: a,
  html: t,
  children: s,
  className: n,
  ...r
}) => {
  const l = v("nhsuk-inset-text", n), o = () => s || (t ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t } }) : a ? /* @__PURE__ */ e.createElement("p", null, a) : null);
  return /* @__PURE__ */ e.createElement("div", { className: l, ...r }, o());
}, Ee = ({
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
  const m = v(
    "nhsuk-panel",
    t
  ), b = () => !s && !n && !c ? null : n ? /* @__PURE__ */ e.createElement(
    F,
    {
      level: r,
      className: "nhsuk-panel__heading",
      html: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : s ? /* @__PURE__ */ e.createElement(
    F,
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
  return /* @__PURE__ */ e.createElement("div", { className: m, id: a, ...i }, b(), f());
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
)), Ne = ({
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
  })) : [], m = () => t ? i() : r && l ? [{ href: r, text: l }] : a, b = () => {
    const _ = m();
    if (_ && _.length > 0) {
      const k = _.slice().reverse().find((w) => w.href && !w.active);
      if (k)
        return { href: k.href, text: k.text };
    }
    return { text: "Home" };
  }, f = m(), h = b(), d = v(
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
      e.Children.map(t, (_, k) => e.isValidElement(_) && (_.type === G || _.type?.displayName === "BreadcrumbItem") ? e.cloneElement(_, { key: k }) : null)
    ) : (
      // Render from items array
      f?.filter((_) => _.active || !!_.href).map((_, k) => /* @__PURE__ */ e.createElement("li", { key: k, className: "nhsuk-breadcrumb__item", role: "listitem" }, _.active ? /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
          "aria-current": "page",
          role: "text",
          ..._.attributes || {}
        },
        _.text
      ) : /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-breadcrumb__link",
          href: _.href,
          role: "link",
          ..._.attributes || {}
        },
        _.text
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
}, ve = Ne;
ve.Item = G;
G.displayName = "BreadcrumbItem";
const ye = ({
  children: a,
  type: t = "bullet",
  size: s = "medium",
  border: n = !1,
  className: r,
  role: l,
  as: o,
  ...c
}) => {
  const i = o || (t === "number" ? "ol" : "ul"), m = v(
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
}, we = ({
  children: a,
  className: t,
  ...s
}) => {
  const n = v("nhsuk-list__item", t);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...s }, a);
}, Ce = ye;
Ce.Item = we;
const Xe = ({
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
  containerStyle: b
}) => {
  const f = (d, p = !1) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `${d.URL}-${d.label}`,
      className: v("nhsuk-footer__list-item", {
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
  ), h = !!(s || n);
  return /* @__PURE__ */ e.createElement("footer", { role: "contentinfo", ...c, style: { ...c?.style, ...i } }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-footer-container" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: v("nhsuk-width-container", o),
      style: b
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Support links"),
    /* @__PURE__ */ e.createElement("div", { className: v("nhsuk-footer", a), style: m }, h ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, t.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((d) => f(d))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, s.map((d) => f(d))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((d) => f(d))), r && r.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, r.map((d) => f(d))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((d) => f(d, !0)), (s || []).map((d) => f(d, !0)), (n || []).map((d) => f(d, !0)), (r || []).map((d) => f(d, !0)))
    )),
    !h && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l))
  ), h && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l)))));
}, Ye = ({
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
  ].filter(Boolean).join(" "), b = `h${t}`;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: m,
      ...o
    },
    Y(
      b,
      { className: "nhsuk-warning-callout__label" },
      c ? /* @__PURE__ */ e.createElement(e.Fragment, null, a, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), a)
    ),
    i()
  );
}, Ue = (a) => /* @__PURE__ */ e.createElement(re, { ...a }), ea = ({
  items: a,
  classes: t,
  ariaLabel: s = "Pages in this guide",
  attributes: n = {}
}) => {
  const r = v("nhsuk-contents-list", t), l = (o, c) => o.current ? /* @__PURE__ */ e.createElement(
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
}, xe = U(
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
    ], b = () => t === "cross" ? /* @__PURE__ */ e.createElement(
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
    ), f = (d) => t === "cross" && !n ? `do not ${d}` : d, h = () => /* @__PURE__ */ e.createElement(
      F,
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
      h(),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: m.join(" "), role: "list" }, s.map((d, p) => /* @__PURE__ */ e.createElement("li", { key: p }, b(), f(d.item)))))
    );
  }
);
xe.displayName = "DoDontList";
const aa = ({
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
}, ta = ({
  previousUrl: a,
  previousPage: t,
  nextUrl: s,
  nextPage: n,
  classes: r,
  attributes: l = {}
}) => {
  const o = v("nhsuk-pagination", r);
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
}, na = ({
  items: a,
  noBorder: t = !1,
  className: s,
  ...n
}) => {
  const r = v(
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
}, sa = ({
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
  ].filter(Boolean).join(" "), m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(F, { level: 3, className: "nhs-fdp-summary-card__title" }, a), /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__value" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__subtitle" }, s));
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
}, R = { current: null }, Ie = () => {
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
}, Be = (a) => {
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
  const n = Ie();
  if (n && n.languages) {
    const r = n.languages[t] ? t : n.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : n.languages.json && t === "json" ? "json" : void 0;
    if (r)
      try {
        return n.highlight(a, n.languages[r], r);
      } catch {
      }
  }
  return Be(a);
}, Se = ({
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
  tableClasses: b,
  classes: f,
  attributes: h,
  "data-testid": d,
  columns: p,
  data: _,
  visuallyHiddenCaption: k = !1
}) => {
  const w = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), N = v(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": l
    },
    b
  ), x = v(f), I = (u, H) => {
    const S = v(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${u.format}`]: u.format
      },
      u.classes
    ), L = {
      scope: "col",
      ...u.colspan && { colSpan: u.colspan },
      ...u.rowspan && { rowSpan: u.rowspan },
      ...l && { role: "columnheader" },
      ...u.attributes
    };
    let M;
    if (u.node != null)
      M = /* @__PURE__ */ e.createElement(e.Fragment, null, u.node);
    else if (u.html)
      M = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: u.html } });
    else if (u.code != null) {
      const g = Array.isArray(u.code), T = g ? u.code.join(`
`) : u.code, $ = g || T.includes(`
`), j = {
        className: v("nhsuk-table__code", u.codeClassName, {
          "nhsuk-table__code--block": $,
          "nhsuk-table__code--inline": !$
        }),
        ...u.codeLanguage ? { "data-language": u.codeLanguage } : {}
      }, P = W(T, u.codeLanguage);
      M = $ ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...j,
          dangerouslySetInnerHTML: { __html: P }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...j,
          dangerouslySetInnerHTML: { __html: P }
        }
      );
    } else
      M = u.text;
    return /* @__PURE__ */ e.createElement("th", { key: H, className: S, ...L }, M);
  }, E = (u, H, S) => {
    const L = r && S || u.rowHeader, M = v(
      L ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${L ? "header" : "cell"}--${u.format}`]: u.format
      },
      u.classes
    ), g = {
      ...L && { scope: "row" },
      ...u.colspan && { colSpan: u.colspan },
      ...u.rowspan && { rowSpan: u.rowspan },
      ...l && {
        role: L ? "rowheader" : "cell",
        ...u.header && { "data-label": u.header }
      },
      ...u.attributes
    };
    let T;
    if (u.node != null)
      T = /* @__PURE__ */ e.createElement(e.Fragment, null, u.node);
    else if (u.html)
      T = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: u.html } });
    else if (u.code != null) {
      const P = Array.isArray(u.code), z = P ? u.code.join(`
`) : u.code, D = P || z.includes(`
`), V = {
        className: v("nhsuk-table__code", u.codeClassName, {
          "nhsuk-table__code--block": D,
          "nhsuk-table__code--inline": !D
        }),
        ...u.codeLanguage ? { "data-language": u.codeLanguage } : {}
      }, O = W(
        z,
        u.codeLanguage,
        u.disableHighlight
      );
      T = D ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...V,
          dangerouslySetInnerHTML: { __html: O }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...V,
          dangerouslySetInnerHTML: { __html: O }
        }
      );
    } else
      T = u.text;
    const $ = /* @__PURE__ */ e.createElement(e.Fragment, null, l && u.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, u.header, " "), T), j = L ? "th" : "td";
    return /* @__PURE__ */ e.createElement(j, { key: H, className: M, ...g }, $);
  };
  let C = t, B = a;
  !C && p && p.length && (C = p.map((u) => ({
    text: u.title,
    format: u.format,
    classes: u.headerClasses,
    attributes: u.headerAttributes
  }))), !B && p && _ && _.length && (B = _.map((u, H) => p.map((S) => {
    const L = S.accessor ? S.accessor(u, H) : u[S.key];
    let M = { format: S.format, classes: S.cellClasses, attributes: S.cellAttributes };
    if (S.rowHeader && (M.rowHeader = !0), S.render) {
      const g = S.render(L, u, H, S);
      return g == null || typeof g == "boolean" ? { ...M, text: "" } : typeof g == "string" || typeof g == "number" ? { ...M, text: String(g) } : { ...M, ...g };
    }
    return { ...M, text: L != null ? String(L) : "" };
  })));
  const y = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: N,
      ...l && { role: "table" },
      ...h,
      ...d && { "data-testid": d }
    },
    s && /* @__PURE__ */ e.createElement("caption", { className: v(w, k && "nhsuk-u-visually-hidden") }, s),
    C && C.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...l && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...l && { role: "row" } }, C.map(
        (u, H) => I(u, H)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, B && B.map((u, H) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: H,
        className: "nhsuk-table__row",
        ...l && { role: "row" }
      },
      u.map(
        (S, L) => E(S, L, L === 0)
      )
    )))
  );
  return i ? /* @__PURE__ */ e.createElement(Ee, { className: m }, o && /* @__PURE__ */ e.createElement(F, { level: c, className: "nhsuk-table__heading-tab" }, o), y()) : x ? /* @__PURE__ */ e.createElement("div", { className: x }, y()) : y();
}, He = ({
  children: a,
  size: t,
  className: s
}) => {
  const n = v(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    s
  );
  return /* @__PURE__ */ e.createElement("caption", { className: n }, a);
}, te = ({
  responsive: a,
  className: t,
  children: s,
  ...n
}) => {
  const r = a ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: t, ...r, ...n }, s);
}, ne = ({
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
  rowspan: b,
  attributes: f,
  responsive: h,
  as: d = "th"
}) => {
  const p = v(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${c}`]: c },
    i
  ), _ = {
    scope: "col",
    ...m && { colSpan: m },
    ...b && { rowSpan: b },
    ...h && { role: "columnheader" },
    ...f
  };
  let k;
  if (s != null) k = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) k = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const N = Array.isArray(n), x = N ? n.join(`
`) : n, I = N || x.includes(`
`), E = {
      className: v("nhsuk-table__code", l, {
        "nhsuk-table__code--block": I,
        "nhsuk-table__code--inline": !I
      }),
      ...r ? { "data-language": r } : {}
    }, C = W(
      x,
      r,
      o
    );
    k = I ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...E,
        dangerouslySetInnerHTML: { __html: C }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...E, dangerouslySetInnerHTML: { __html: C } });
  } else k = a;
  const w = d;
  return /* @__PURE__ */ e.createElement(w, { className: p, ..._ }, k);
}, Le = ({
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
  rowspan: b,
  attributes: f,
  responsive: h,
  rowHeader: d
}) => {
  const p = !!d, _ = p ? "th" : "td", k = v(
    p ? "nhsuk-table__header" : "nhsuk-table__cell",
    c && `nhsuk-table__${p ? "header" : "cell"}--${c}`,
    i
  ), w = {
    ...m && { colSpan: m },
    ...b && { rowSpan: b },
    ...p && { scope: "row" },
    ...h && { role: p ? "rowheader" : "cell" },
    ...f
  };
  let N;
  if (s != null) N = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) N = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const x = Array.isArray(n), I = x ? n.join(`
`) : n, E = x || I.includes(`
`), C = {
      className: v("nhsuk-table__code", l, {
        "nhsuk-table__code--block": E,
        "nhsuk-table__code--inline": !E
      }),
      ...r ? { "data-language": r } : {}
    }, B = W(I, r, o);
    N = E ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ...C, dangerouslySetInnerHTML: { __html: B } })) : /* @__PURE__ */ e.createElement("code", { ...C, dangerouslySetInnerHTML: { __html: B } });
  } else N = a;
  return /* @__PURE__ */ e.createElement(_, { className: k, ...w }, N);
}, A = Se;
A.Caption = He;
A.BodyRow = te;
A.HeaderCell = ne;
A.Cell = Le;
let Q = !1, X = !1;
Object.defineProperty(A, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Q && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), Q = !0), te;
  }
});
Object.defineProperty(A, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !X && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), X = !0), ne;
  }
});
const Te = ({
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
  const b = [
    "nhsuk-hero",
    l && a ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    l && !a ? "nhsuk-hero--image" : "",
    c
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    o,
    l ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    s,
    !i && !n && !r ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), d = i || a || n || r, p = () => {
    if (!a) return null;
    const _ = { className: h };
    switch (t) {
      case 1:
        return /* @__PURE__ */ e.createElement("h1", { ..._ }, a);
      case 2:
        return /* @__PURE__ */ e.createElement("h2", { ..._ }, a);
      case 3:
        return /* @__PURE__ */ e.createElement("h3", { ..._ }, a);
      case 4:
        return /* @__PURE__ */ e.createElement("h4", { ..._ }, a);
      case 5:
        return /* @__PURE__ */ e.createElement("h5", { ..._ }, a);
      case 6:
        return /* @__PURE__ */ e.createElement("h6", { ..._ }, a);
      default:
        return /* @__PURE__ */ e.createElement("h1", { ..._ }, a);
    }
  };
  return /* @__PURE__ */ e.createElement(
    "section",
    {
      className: b,
      style: l ? { backgroundImage: `url('${l}')` } : void 0,
      role: "banner",
      ...m
    },
    l && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, d && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, p(), i || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !l && d && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, p(), i || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
Te.displayName = "Hero";
const Me = e.forwardRef(({
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
  ...b
}, f) => {
  const h = [
    "nhsuk-card",
    a === "clickable" && "nhsuk-card--clickable",
    a === "secondary" && "nhsuk-card--secondary",
    a === "feature" && "nhsuk-card--feature",
    b.className
  ].filter(Boolean).join(" "), d = [
    "nhsuk-card__content",
    a === "feature" && "nhsuk-card__content--feature",
    a === "primary" && "nhsuk-card__content--primary",
    a === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-card__heading",
    a === "feature" && "nhsuk-card__heading--feature",
    r
  ].filter(Boolean).join(" "), _ = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const N = () => c && a !== "feature" ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-card__link", href: c }, t) : t;
    return /* @__PURE__ */ e.createElement(
      F,
      {
        level: n,
        className: p
      },
      N()
    );
  }, k = () => b.children ? b.children : o ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: o } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, l) : null, w = () => a !== "primary" ? null : /* @__PURE__ */ e.createElement(
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
      ...b,
      className: h,
      ref: f
    },
    i && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: i,
        alt: m || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: d }, _(), k(), w())
  );
});
Me.displayName = "Card";
const ra = ({
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
}, la = ({
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
}, ca = ({
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
  id: b,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": d
}) => {
  const p = [
    "nhsuk-care-card",
    `nhsuk-care-card--${a}`,
    c
  ].filter(Boolean).join(" "), _ = [
    "nhsuk-care-card__heading",
    r
  ].filter(Boolean).join(" "), k = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const N = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[a], x = /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, N, " "), t);
    return /* @__PURE__ */ e.createElement(
      F,
      {
        level: n,
        className: _
      },
      x
    );
  }, w = () => i || (o ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: o } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, l) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: p,
      "data-testid": m,
      id: b,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": d
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, k(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, w())
  );
};
function $e(a) {
  const s = (a.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    a.hasError ? "nhsuk-input--error" : "",
    s ? "nhsuk-input--range" : "",
    !s && a.width && a.width !== "full" ? `nhsuk-input--width-${a.width}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), isRange: s };
}
function J(a) {
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
    hasError: b = !1,
    describedBy: f,
    className: h,
    width: d = "full",
    inputMode: p,
    autoComplete: _,
    maxLength: k,
    minLength: w,
    pattern: N,
    step: x,
    min: I,
    max: E,
    showValueLabels: C = !1,
    showCurrentValue: B = !1,
    valueLabels: y,
    // Strip interactive handlers in server variant
    onChange: u,
    onBlur: H,
    onFocus: S,
    onKeyDown: L,
    ...M
  } = a, { classes: g, isRange: T } = $e({
    type: n,
    hasError: b,
    width: d,
    className: h
  }), $ = {
    id: t,
    name: s,
    type: n,
    placeholder: o,
    disabled: c,
    readOnly: i,
    required: m,
    "aria-describedby": f,
    inputMode: p,
    autoComplete: _,
    maxLength: k,
    minLength: w,
    pattern: N,
    step: x,
    min: I,
    max: E,
    ...M
  };
  if (T) {
    const j = r ?? l ?? (typeof I < "u" ? String(I) : "0"), P = /* @__PURE__ */ e.createElement(
      "input",
      {
        className: g,
        ...r !== void 0 ? { value: r } : {},
        ...r === void 0 && l !== void 0 ? { defaultValue: l } : {},
        "data-current-value": j,
        ...$
      }
    );
    return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-wrapper" }, C ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-labels" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min" }, y?.min || I || "0"), P, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max" }, y?.max || E || "100")) : P, B && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-current-value" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-current-label" }, y?.current || "Current value:", " ", /* @__PURE__ */ e.createElement("strong", null, j))));
  }
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: g,
      ...r !== void 0 ? { value: r } : {},
      ...r === void 0 && l !== void 0 ? { defaultValue: l } : {},
      ...$
    }
  );
}
function Pe(a) {
  const t = a.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    a.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
const oa = ({
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
  className: b,
  rows: f = 5,
  cols: h,
  maxLength: d,
  minLength: p,
  wrap: _ = "soft",
  resize: k = "vertical",
  autoComplete: w,
  spellCheck: N,
  onChange: x,
  onBlur: I,
  onFocus: E,
  onKeyDown: C,
  ...B
}) => {
  const { classes: y, describedBy: u } = Pe({ hasError: i, resize: k, className: b, describedBy: m });
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: y,
      id: a,
      name: t,
      value: s,
      defaultValue: n,
      placeholder: r,
      disabled: l,
      readOnly: o,
      required: c,
      "aria-describedby": u,
      rows: f,
      cols: h,
      maxLength: d,
      minLength: p,
      wrap: _,
      autoComplete: w,
      spellCheck: N,
      onChange: x,
      onBlur: I,
      onFocus: E,
      onKeyDown: C,
      ...B
    }
  );
};
function je(a) {
  return { classes: [
    "nhsuk-select",
    a.hasError ? "nhsuk-select--error" : "",
    a.className || ""
  ].filter(Boolean).join(" ") };
}
const Fe = ({
  value: a,
  disabled: t = !1,
  selected: s = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: n,
  children: r,
  ...l
}) => {
  const o = v(
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
}, Ae = ({
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
  multiple: b = !1,
  size: f,
  autoComplete: h,
  options: d,
  children: p,
  onChange: _,
  onBlur: k,
  onFocus: w,
  ...N
}) => {
  const { classes: x } = je({ hasError: c, className: m }), I = () => d ? d.map((C, B) => /* @__PURE__ */ e.createElement(
    "option",
    {
      key: `${C.value}-${B}`,
      value: C.value,
      disabled: C.disabled,
      "data-initial-selected": C.selected || void 0
    },
    C.text
  )) : null, E = r === void 0 && n === void 0 && d ? d.find((C) => C.selected)?.value : void 0;
  return /* @__PURE__ */ e.createElement(
    "select",
    {
      className: x,
      id: a,
      name: t,
      "aria-label": s,
      value: n,
      defaultValue: r !== void 0 ? r : E,
      disabled: l,
      required: o,
      "aria-describedby": i,
      multiple: b,
      size: f,
      autoComplete: h,
      onChange: _,
      onBlur: k,
      onFocus: w,
      ...N
    },
    p || I()
  );
}, De = Ae;
De.Option = Fe;
function ia({
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
  const f = s || [
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
  const d = o ? `${a}-hint` : "", p = c ? `${a}-error` : "";
  d && (h = h ? `${h} ${d}` : d), p && (h = h ? `${h} ${p}` : p);
  const _ = v("nhsuk-form-group", {
    "nhsuk-form-group--error": !!c
  }), k = v("nhsuk-date-input", t), w = () => /* @__PURE__ */ e.createElement(e.Fragment, null, o && /* @__PURE__ */ e.createElement(ke, { id: d, className: o.classes }, o.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text), c && /* @__PURE__ */ e.createElement(be, { id: p, className: c.classes }, c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: k,
      id: a,
      "data-testid": "date-input",
      ...m
    },
    f.map((N) => {
      const x = N.id || `${a}-${N.name}`, I = n ? `${n}[${N.name}]` : N.name, E = N.label || N.name.charAt(0).toUpperCase() + N.name.slice(1), C = r[N.name];
      return /* @__PURE__ */ e.createElement("div", { key: N.name, className: "nhsuk-date-input__item" }, /* @__PURE__ */ e.createElement(q, { htmlFor: x, className: "nhsuk-date-input__label" }, E), /* @__PURE__ */ e.createElement(
        J,
        {
          id: x,
          name: I,
          defaultValue: C,
          className: v("nhsuk-date-input__input", N.classes),
          inputMode: N.inputmode,
          autoComplete: N.autocomplete,
          pattern: N.pattern,
          "aria-describedby": h || void 0
        }
      ));
    })
  ));
  return /* @__PURE__ */ e.createElement("div", { className: _ }, l ? /* @__PURE__ */ e.createElement(
    K,
    {
      className: l.classes,
      legend: l.legend ? { text: l.legend } : void 0,
      describedBy: h || void 0
    },
    w()
  ) : w());
}
function ua({
  titleText: a = "There is a problem",
  titleHtml: t,
  descriptionText: s,
  descriptionHtml: n,
  errorList: r,
  className: l,
  children: o,
  ...c
}) {
  const i = v("nhsuk-error-summary", l), m = () => t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a, b = () => n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s, f = (h) => {
    const d = h.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
    return h.href ? /* @__PURE__ */ e.createElement("a", { href: h.href, ...h.attributes }, d) : d;
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
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__body" }, o && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, o), !o && (s || n) && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, b()), /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list" }, r.map((h, d) => /* @__PURE__ */ e.createElement("li", { key: d }, f(h)))))
  );
}
function Re(a) {
  return { classes: [
    "nhsuk-radios",
    a.hasError ? "nhsuk-radios--error" : "",
    a.size === "small" ? "nhsuk-radios--small" : "",
    a.inline ? "nhsuk-radios--inline" : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
function ze(a, {
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
    onChange: b,
    onBlur: f,
    onFocus: h,
    ...d
  } = a, {
    name: p,
    hasError: _ = !1,
    describedBy: k,
    className: w,
    size: N = "normal",
    inline: x = !1,
    options: I,
    ...E
  } = d, { classes: C, describedBy: B } = Re({ hasError: _, size: N, inline: x, className: w, describedBy: k });
  return /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: C,
      ...E,
      "data-nhs-behaviour": "radios"
    },
    I.map((y, u) => {
      const H = `${p}-${u}`, S = y.conditional ? `${H}-conditional` : void 0, L = s === y.value;
      return /* @__PURE__ */ e.createElement("div", { key: y.value, className: "nhsuk-radios__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-radios__input",
          id: H,
          name: p,
          type: "radio",
          value: y.value,
          disabled: y.disabled,
          defaultChecked: L,
          "data-nhs-radios-input": !0,
          "aria-describedby": B
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-radios__label", htmlFor: H }, y.text), y.hint && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-radios__hint" }, y.hint), y.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: v("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !L
          }),
          id: S,
          "data-nhs-radios-conditional": !0
        },
        typeof y.conditional == "object" && y.conditional !== null && "label" in y.conditional && "id" in y.conditional && "name" in y.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, y.conditional.label && /* @__PURE__ */ e.createElement(
          q,
          {
            htmlFor: y.conditional.id
          },
          y.conditional.label
        ), /* @__PURE__ */ e.createElement(
          m,
          {
            ...y.conditional
          }
        )) : y.conditional
      ));
    })
  ));
}
const ma = ({ value: a, defaultValue: t, ...s }) => {
  const n = a || t || "";
  return ze(
    { value: a, defaultValue: t, ...s },
    {
      variant: "server",
      selectedValue: n,
      enableBehaviourAttr: !0,
      InputComponent: J
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
function da(a) {
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
    small: b = !1,
    // Strip interactive handler in server variant
    onChange: f,
    fieldsetAttributes: h,
    attributes: d,
    ...p
  } = a, _ = n || s, k = c ? `${_}-hint` : void 0, w = i ? `${_}-error` : void 0, N = [k, w].filter(Boolean).join(" ") || void 0, { classes: x, formGroupClasses: I } = Ve({ small: b, className: m, hasError: !!i });
  return /* @__PURE__ */ e.createElement("div", { className: I, ...d, ...p }, /* @__PURE__ */ e.createElement(
    K,
    {
      legend: r ? { text: r, isPageHeading: l, size: o } : void 0,
      describedBy: N,
      ...h
    },
    c && /* @__PURE__ */ e.createElement("div", { id: k, className: "nhsuk-hint" }, c),
    i && /* @__PURE__ */ e.createElement("div", { id: w, className: "nhsuk-error-message" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Error:"), " ", i),
    /* @__PURE__ */ e.createElement("div", { className: x, "data-nhs-behaviour": "checkboxes" }, t.map((E, C) => {
      const B = `${_}-${C + 1}`, y = `${B}-conditional`, u = !!E.checked, H = !!E.disabled;
      return /* @__PURE__ */ e.createElement("div", { key: E.value, className: "nhsuk-checkboxes__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: B,
          name: s,
          type: "checkbox",
          value: E.value,
          ...u ? { defaultChecked: !0 } : {},
          disabled: H,
          "aria-describedby": E.hint ? `${B}-hint` : N,
          ...E.conditional && {
            "aria-controls": y,
            "aria-expanded": u ? "true" : "false"
          },
          ...E.attributes
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-checkboxes__label", htmlFor: B }, E.text), E.hint && /* @__PURE__ */ e.createElement("div", { id: `${B}-hint`, className: "nhsuk-checkboxes__hint" }, E.hint), E.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: v("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !u
          }),
          id: y,
          "data-nhs-checkboxes-conditional": !0
        },
        typeof E.conditional == "object" && E.conditional !== null && "label" in E.conditional && "id" in E.conditional && "name" in E.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, E.conditional.label && /* @__PURE__ */ e.createElement(q, { htmlFor: E.conditional.id }, E.conditional.label), /* @__PURE__ */ e.createElement(J, { ...E.conditional })) : E.conditional
      ));
    }))
  ));
}
export {
  Ze as ActionLink,
  qe as BackLink,
  ve as Breadcrumb,
  ka as Breakpoint,
  ie as ButtonServer,
  Me as Card,
  ra as CardGroup,
  la as CardGroupItem,
  ca as CareCard,
  da as Checkboxes,
  fa as Column,
  ba as ColumnAlign,
  re as Container,
  ea as ContentsList,
  ia as DateInput,
  pe as Details,
  xe as DoDontList,
  be as ErrorMessage,
  ua as ErrorSummary,
  K as Fieldset,
  ga as Float,
  Xe as Footer,
  pa as Grid,
  Ea as GridWidth,
  We as Header,
  F as Heading,
  Te as Hero,
  ke as Hint,
  aa as Images,
  J as Input,
  Qe as InsetText,
  q as Label,
  Ce as List,
  ta as Pagination,
  Ee as Panel,
  ma as Radios,
  Na as Row,
  De as Select,
  Fe as SelectOption,
  Je as SkipLink,
  va as SpacingUtilities,
  sa as SummaryCard,
  na as SummaryList,
  A as Table,
  te as TableBodyRow,
  He as TableCaption,
  Le as TableCell,
  ne as TableHeaderCell,
  Ke as Tag,
  oa as Textarea,
  Ye as WarningCallout,
  Ue as WidthContainer,
  ya as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
