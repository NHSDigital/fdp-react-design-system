import * as L from "react";
import e, { createElement as U, forwardRef as ee } from "react";
import { c as w, C as ce } from "../SkipLink-Bpun0E2L.js";
import { B as ba, a as Ea, d as ga, F as Na, G as va, b as ya, R as wa, S as Ca, g as xa } from "../SkipLink-Bpun0E2L.js";
const oe = ({
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
      className: w(
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
          className: w(
            "nhsuk-account__item nhsuk-header__account-item",
            l.className
          )
        },
        r(l)
      )
    ))
  );
};
function ie(a, { variant: t, isClient: s }) {
  const {
    className: n,
    logo: r = {},
    service: l = {},
    serviceName: o,
    organisation: c,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: i,
    navigation: u,
    containerClasses: f,
    variant: p = "default",
    attributes: h = {},
    maxVisibleItems: d,
    // deprecated (ignored)
    responsiveNavigation: b = !0,
    ..._
  } = a;
  "maxVisibleItems" in _ && delete _.maxVisibleItems;
  const k = {
    ...l,
    text: l?.text ?? o
  }, C = k.href && !r.href || k.href && k.href === r.href, N = C ? k.href : r.href, x = w(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": p === "organisation" || c,
      "nhsuk-header--white": p === "white"
    },
    n
  ), I = w("nhsuk-header__container", f), E = w(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": u?.white,
      "nhsuk-header__navigation--justified": u?.justified
    },
    u?.className
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
  ), S = () => r.src ? /* @__PURE__ */ e.createElement(
    "img",
    {
      className: "nhsuk-header__organisation-logo",
      src: r.src,
      width: "280",
      alt: r.ariaLabel || "NHS"
    }
  ) : v(), y = () => c ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, c.name, c.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", c.split)), c.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, c.descriptor)) : null, m = (g, T) => g ? T ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: T }, g) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, g) : null, H = (g) => g.active || g.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, g.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text) : g.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text, B = u?.items && !b, $ = B ? [] : u?.items, M = B ? u.items : [];
  return /* @__PURE__ */ e.createElement("header", { className: x, role: "banner", "data-module": "nhsuk-header", ...h, ..._ }, /* @__PURE__ */ e.createElement("div", { className: I }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, N ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: N }, S(), y(), C && m(k.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, S(), y(), C && m(k.text)), k.text && !C && m(k.text, k.href)), /* @__PURE__ */ e.createElement(oe, { ...i, variant: p === "white" ? "white" : "default" })), u && u.items && u.items.length > 0 && /* @__PURE__ */ e.createElement("nav", { className: E, "aria-label": u.ariaLabel || "Menu" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: w(
        "nhsuk-header_navigation-container",
        "nhsuk-width-container",
        {
          "nhsuk-header__navigation-container--ssr": !s
        },
        f
      )
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, ($ || []).map((g, T) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: T,
        className: w("nhsuk-header__navigation-item", {
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
  )), B && M.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__dropdown-list" }, M.map((g, T) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `overflow-server-${T}`,
      className: w("nhsuk-header__dropdown-item", {
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
const qe = (a) => ie(a, {
  variant: "server",
  isClient: !1
}), Ke = ({
  text: a,
  href: t,
  openInNewWindow: s = !1,
  className: n,
  ...r
}) => {
  const l = w(
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
function ue(a) {
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
var ae = /* @__PURE__ */ ((a) => (a.Primary = "primary", a.Secondary = "secondary", a.Reverse = "reverse", a.Warning = "warning", a.Login = "login", a.Metric = "metric", a))(ae || {}), te = /* @__PURE__ */ ((a) => (a.Small = "small", a.Default = "default", a.Large = "large", a))(te || {});
const me = L.forwardRef(function(t, s) {
  const {
    children: n,
    variant: r = ae.Primary,
    size: l = te.Default,
    fullWidth: o = !1,
    className: c = "",
    preventDoubleClick: i = !1,
    ...u
  } = t, f = ue({
    variant: r,
    size: l,
    fullWidth: o,
    className: c,
    href: "href" in u ? u.href : void 0,
    preventDoubleClick: i
  });
  if ("href" in u && u.href) {
    const T = u, {
      id: P,
      style: A,
      title: j,
      ["aria-label"]: V,
      ["aria-describedby"]: R,
      ["aria-labelledby"]: O,
      tabIndex: W,
      ...le
    } = T;
    return /* @__PURE__ */ L.createElement(
      "a",
      {
        ref: s,
        href: T.href,
        target: T.target,
        rel: T.rel,
        className: f.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...i && { "data-prevent-double-click": "true" },
        id: P,
        style: A,
        title: j,
        "aria-label": V,
        "aria-describedby": R,
        "aria-labelledby": O,
        tabIndex: W,
        ...le
      },
      n
    );
  }
  const p = u, {
    id: h,
    style: d,
    title: b,
    ["aria-label"]: _,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: C,
    tabIndex: N,
    name: x,
    value: I,
    form: E,
    formAction: v,
    formEncType: S,
    formMethod: y,
    formNoValidate: m,
    formTarget: H,
    autoFocus: B,
    type: $,
    disabled: M,
    ...g
  } = p;
  return /* @__PURE__ */ L.createElement(
    "button",
    {
      ref: s,
      type: $ || "button",
      disabled: M,
      className: f.classes,
      "data-module": "nhs-button",
      ...i && { "data-prevent-double-click": "true" },
      id: h,
      style: d,
      title: b,
      "aria-label": _,
      "aria-describedby": k,
      "aria-labelledby": C,
      tabIndex: N,
      name: x,
      value: I,
      form: E,
      formAction: v,
      formEncType: S,
      formMethod: y,
      formNoValidate: m,
      formTarget: H,
      autoFocus: B,
      ...g
    },
    n
  );
});
me.displayName = "ButtonServer";
const Je = ({
  text: a = "Back",
  html: t,
  href: s = "#",
  className: n,
  element: r = "a",
  onClick: l,
  ...o
}) => {
  const c = w(
    "nhsuk-back-link",
    n
  ), i = w(
    "nhsuk-back-link__link"
  ), u = () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
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
    u()
  ) : /* @__PURE__ */ e.createElement(
    "a",
    {
      className: i,
      href: s,
      ...o
    },
    u()
  ));
};
function de(a) {
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
const Qe = ({
  text: a,
  html: t,
  children: s,
  color: n = "default",
  noBorder: r = !1,
  closable: l = !1,
  onClose: o,
  disabled: c = !1,
  className: i,
  ...u
}) => {
  const f = de({ color: n, noBorder: r, closable: l, disabled: c, className: i }), p = (h) => {
    h.preventDefault(), h.stopPropagation(), !c && o && o();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: f.classes, ...u }, s || (t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a), l && /* @__PURE__ */ e.createElement(
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
function he(a) {
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
  const o = he({ size: n, isPageHeading: s, className: t, htmlFor: a }), c = o.tag;
  return /* @__PURE__ */ e.createElement(c, { className: o.classes, htmlFor: o.htmlFor, ...l }, s ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: a }, r) : r);
};
function _e(a) {
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
function ke(a) {
  const t = a.level ?? _e(a.size), s = [
    "nhsuk-heading",
    a.size ? `nhsuk-heading--${a.size}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), n = a.marginBottom ? { marginBottom: a.marginBottom } : void 0;
  return { tag: `h${t}`, classes: s, style: n };
}
const F = ({ level: a, className: t, text: s, html: n, children: r, size: l, marginBottom: o, ...c }) => {
  const i = ke({ level: a, size: l, className: t, marginBottom: o }), u = r || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s);
  return U(i.tag, { className: i.classes, style: i.style, ...c }, u);
};
function fe(a) {
  return { classes: [
    "nhsuk-hint",
    a.className || ""
  ].filter(Boolean).join(" "), id: a.id };
}
const pe = ({ id: a, className: t, children: s, ...n }) => {
  const r = fe({ id: a, className: t });
  return /* @__PURE__ */ e.createElement("div", { className: r.classes, id: r.id, ...n }, s);
};
function be(a) {
  return {
    classes: ["nhsuk-error-message", a.className || ""].filter(Boolean).join(" "),
    id: a.id,
    visuallyHiddenText: a.visuallyHiddenText ?? "Error:"
  };
}
const Ee = ({ id: a, className: t, visuallyHiddenText: s = "Error:", children: n, ...r }) => {
  const l = be({ id: a, className: t, visuallyHiddenText: s });
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
}, Xe = ({
  text: a = "Skip to main content",
  href: t = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const r = w("nhsuk-skip-link", s);
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
}, Ne = ee(
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
  }, u) => {
    const f = [
      "nhsuk-details",
      l
    ].filter(Boolean).join(" "), p = t ? /* @__PURE__ */ e.createElement(
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
        ref: u,
        id: o,
        className: f,
        open: r,
        ...i
      },
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, p),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, h)
    );
  }
);
Ne.displayName = "Details";
const Ye = ({
  text: a,
  html: t,
  children: s,
  className: n,
  ...r
}) => {
  const l = w("nhsuk-inset-text", n), o = () => s || (t ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t } }) : a ? /* @__PURE__ */ e.createElement("p", null, a) : null);
  return /* @__PURE__ */ e.createElement("div", { className: l, ...r }, o());
}, ve = ({
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
  const u = w(
    "nhsuk-panel",
    t
  ), f = () => !s && !n && !c ? null : n ? /* @__PURE__ */ e.createElement(
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
  ) : null, p = () => c ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, c) : o ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: o }
    }
  ) : l ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ e.createElement("p", null, l)) : null;
  return /* @__PURE__ */ e.createElement("div", { className: u, id: a, ...i }, f(), p());
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
)), ye = ({
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
  })) : [], u = () => t ? i() : r && l ? [{ href: r, text: l }] : a, f = () => {
    const _ = u();
    if (_ && _.length > 0) {
      const k = _.slice().reverse().find((C) => C.href && !C.active);
      if (k)
        return { href: k.href, text: k.text };
    }
    return { text: "Home" };
  }, p = u(), h = f(), d = w(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": o
    },
    s
  ), b = n;
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: d,
      "aria-label": b,
      role: "navigation",
      ...c
    },
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-breadcrumb__list", role: "list" }, t ? (
      // Render children directly if using compound component pattern
      e.Children.map(t, (_, k) => e.isValidElement(_) && (_.type === G || _.type?.displayName === "BreadcrumbItem") ? e.cloneElement(_, { key: k }) : null)
    ) : (
      // Render from items array
      p?.filter((_) => _.active || !!_.href).map((_, k) => /* @__PURE__ */ e.createElement("li", { key: k, className: "nhsuk-breadcrumb__item", role: "listitem" }, _.active ? /* @__PURE__ */ e.createElement(
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
}, we = ye;
we.Item = G;
G.displayName = "BreadcrumbItem";
const Ce = ({
  children: a,
  type: t = "bullet",
  size: s = "medium",
  border: n = !1,
  className: r,
  role: l,
  as: o,
  ...c
}) => {
  const i = o || (t === "number" ? "ol" : "ul"), u = w(
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
  return /* @__PURE__ */ e.createElement(i, { className: u, role: l, ...c }, a);
}, xe = ({
  children: a,
  className: t,
  ...s
}) => {
  const n = w("nhsuk-list__item", t);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...s }, a);
}, Ie = Ce;
Ie.Item = xe;
const Ue = ({
  className: a,
  links: t = [],
  linksColumn2: s,
  linksColumn3: n,
  metaLinks: r,
  copyright: l = "© NHS England",
  containerClasses: o,
  attributes: c = {},
  style: i,
  footerStyle: u,
  containerStyle: f
}) => {
  const p = (d, b = !1) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `${d.URL}-${d.label}`,
      className: w("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": b
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
      className: w("nhsuk-width-container", o),
      style: f
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Support links"),
    /* @__PURE__ */ e.createElement("div", { className: w("nhsuk-footer", a), style: u }, h ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, t.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((d) => p(d))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, s.map((d) => p(d))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((d) => p(d))), r && r.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, r.map((d) => p(d))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((d) => p(d, !0)), (s || []).map((d) => p(d, !0)), (n || []).map((d) => p(d, !0)), (r || []).map((d) => p(d, !0)))
    )),
    !h && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l))
  ), h && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l)))));
}, ea = ({
  heading: a,
  headingLevel: t = 3,
  text: s,
  html: n,
  children: r,
  className: l,
  ...o
}) => {
  const c = /important/i.test(a), i = () => r || (n ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s ? /* @__PURE__ */ e.createElement("p", null, s) : null), u = [
    "nhsuk-warning-callout",
    l
  ].filter(Boolean).join(" "), f = `h${t}`;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: u,
      ...o
    },
    U(
      f,
      { className: "nhsuk-warning-callout__label" },
      c ? /* @__PURE__ */ e.createElement(e.Fragment, null, a, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), a)
    ),
    i()
  );
}, aa = (a) => /* @__PURE__ */ e.createElement(ce, { ...a }), ta = ({
  items: a,
  classes: t,
  ariaLabel: s = "Pages in this guide",
  attributes: n = {}
}) => {
  const r = w("nhsuk-contents-list", t), l = (o, c) => o.current ? /* @__PURE__ */ e.createElement(
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
}, Se = ee(
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
    const u = [
      "nhsuk-list",
      t === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], f = () => t === "cross" ? /* @__PURE__ */ e.createElement(
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
    ), p = (d) => t === "cross" && !n ? `do not ${d}` : d, h = () => /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: u.join(" "), role: "list" }, s.map((d, b) => /* @__PURE__ */ e.createElement("li", { key: b }, f(), p(d.item)))))
    );
  }
);
Se.displayName = "DoDontList";
const na = ({
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
}, sa = ({
  previousUrl: a,
  previousPage: t,
  nextUrl: s,
  nextPage: n,
  classes: r,
  attributes: l = {}
}) => {
  const o = w("nhsuk-pagination", r);
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
}, ra = ({
  items: a,
  noBorder: t = !1,
  className: s,
  ...n
}) => {
  const r = w(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    s
  ), l = (c) => c.children ? c.children : c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text ? c.text : null, o = (c) => !c || !c.items.length ? null : /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__actions" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-summary-list__actions-list" }, c.items.map((i, u) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: u,
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
}, la = ({
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
  ].filter(Boolean).join(" "), u = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(F, { level: 3, className: "nhs-fdp-summary-card__title" }, a), /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__value" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__subtitle" }, s));
  return r ? /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `${i} nhs-fdp-summary-card--clickable`,
      href: r,
      "aria-label": o || `${a}: ${t}`,
      ...c
    },
    u
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: i,
      "aria-label": o,
      ...c
    },
    u
  );
};
function ne(a) {
  var t, s, n = "";
  if (typeof a == "string" || typeof a == "number") n += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var r = a.length;
    for (t = 0; t < r; t++) a[t] && (s = ne(a[t])) && (n && (n += " "), n += s);
  } else for (s in a) a[s] && (n && (n += " "), n += s);
  return n;
}
function Q() {
  for (var a, t, s = 0, n = "", r = arguments.length; s < r; s++) (a = arguments[s]) && (t = ne(a)) && (n && (n += " "), n += t);
  return n;
}
const ca = ({
  label: a,
  value: t,
  unit: s,
  delta: n,
  status: r = "neutral",
  variant: l = "default",
  subtitle: o,
  metadata: c,
  trendData: i,
  loading: u = !1,
  error: f,
  valueFormatter: p,
  className: h,
  id: d,
  announceDelta: b = !0
}) => {
  const _ = L.useId(), k = d || _, C = `${k}-label`, N = `${k}-value`, x = `${k}-delta`, I = typeof t == "number" && !Number.isNaN(t), E = u ? "—" : f ? "" : I ? p ? p(t) : t.toLocaleString() : t;
  let v, S = "", y = "";
  if (n && !u && !f) {
    v = n.direction || (n.value > 0 ? "up" : n.value < 0 ? "down" : "neutral");
    const m = Math.abs(n.value), H = v === "up" ? `+${m}` : v === "down" ? `-${m}` : "0", B = n.isPercent ? "%" : "";
    if (S = `${H}${B}`, n.ariaLabel)
      y = n.ariaLabel;
    else {
      const $ = n.invert ? v === "down" : v === "up";
      y = `${v === "neutral" ? "no change" : v === "up" ? "up" : "down"} ${m}${B}${v === "neutral" ? "" : $ ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ L.createElement(
    "div",
    {
      className: Q(
        "fdp-metric-card",
        l && `fdp-metric-card--${l}`,
        r && `fdp-metric-card--status-${r}`,
        u && "fdp-metric-card--loading",
        f && "fdp-metric-card--error",
        h
      ),
      role: "group",
      "aria-labelledby": C,
      "data-component": "MetricCard"
    },
    /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__inner" }, /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__header" }, /* @__PURE__ */ L.createElement("h3", { id: C, className: "fdp-metric-card__label" }, a), c && /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__metadata" }, c)), /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__content" }, /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__value-section" }, /* @__PURE__ */ L.createElement("div", { id: N, className: "fdp-metric-card__value" }, u ? /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true" }, /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" })) : f ? /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__error", role: "alert" }, f) : /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement("span", { className: "fdp-metric-card__number" }, E), s && /* @__PURE__ */ L.createElement("span", { className: "fdp-metric-card__unit" }, s))), o && !u && !f && /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__subtitle" }, o)), n && !u && !f && /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__delta-section" }, /* @__PURE__ */ L.createElement(
      "div",
      {
        id: x,
        "aria-label": y,
        className: Q(
          "fdp-metric-card__delta",
          v && `fdp-metric-card__delta--${v}`
        )
      },
      /* @__PURE__ */ L.createElement("span", { className: "fdp-metric-card__delta-value" }, S),
      n.period && /* @__PURE__ */ L.createElement("span", { className: "fdp-metric-card__delta-period" }, n.period)
    )), i && i.length > 0 && !u && !f && /* @__PURE__ */ L.createElement("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })), b && n && !n.ariaLabel && !u && !f && /* @__PURE__ */ L.createElement("div", { className: "fdp-visually-hidden", "aria-live": "polite" }, y))
  );
}, z = { current: null }, Be = () => {
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
}, Le = (a) => {
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
  const n = Be();
  if (n && n.languages) {
    const r = n.languages[t] ? t : n.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : n.languages.json && t === "json" ? "json" : void 0;
    if (r)
      try {
        return n.highlight(a, n.languages[r], r);
      } catch {
      }
  }
  return Le(a);
}, He = ({
  rows: a,
  head: t,
  caption: s,
  captionSize: n,
  firstCellIsHeader: r = !1,
  responsive: l = !1,
  heading: o,
  headingLevel: c = 3,
  panel: i = !1,
  panelClasses: u,
  tableClasses: f,
  classes: p,
  attributes: h,
  "data-testid": d,
  columns: b,
  data: _,
  visuallyHiddenCaption: k = !1
}) => {
  const C = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), N = w(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": l
    },
    f
  ), x = w(p), I = (m, H) => {
    const B = w(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${m.format}`]: m.format
      },
      m.classes
    ), $ = {
      scope: "col",
      ...m.colspan && { colSpan: m.colspan },
      ...m.rowspan && { rowSpan: m.rowspan },
      ...l && { role: "columnheader" },
      ...m.attributes
    };
    let M;
    if (m.node != null)
      M = /* @__PURE__ */ e.createElement(e.Fragment, null, m.node);
    else if (m.html)
      M = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: m.html } });
    else if (m.code != null) {
      const g = Array.isArray(m.code), T = g ? m.code.join(`
`) : m.code, P = g || T.includes(`
`), A = {
        className: w("nhsuk-table__code", m.codeClassName, {
          "nhsuk-table__code--block": P,
          "nhsuk-table__code--inline": !P
        }),
        ...m.codeLanguage ? { "data-language": m.codeLanguage } : {}
      }, j = Z(T, m.codeLanguage);
      M = P ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
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
      M = m.text;
    return /* @__PURE__ */ e.createElement("th", { key: H, className: B, ...$ }, M);
  }, E = (m, H, B) => {
    const $ = r && B || m.rowHeader, M = w(
      $ ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${$ ? "header" : "cell"}--${m.format}`]: m.format
      },
      m.classes
    ), g = {
      ...$ && { scope: "row" },
      ...m.colspan && { colSpan: m.colspan },
      ...m.rowspan && { rowSpan: m.rowspan },
      ...l && {
        role: $ ? "rowheader" : "cell",
        ...m.header && { "data-label": m.header }
      },
      ...m.attributes
    };
    let T;
    if (m.node != null)
      T = /* @__PURE__ */ e.createElement(e.Fragment, null, m.node);
    else if (m.html)
      T = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: m.html } });
    else if (m.code != null) {
      const j = Array.isArray(m.code), V = j ? m.code.join(`
`) : m.code, R = j || V.includes(`
`), O = {
        className: w("nhsuk-table__code", m.codeClassName, {
          "nhsuk-table__code--block": R,
          "nhsuk-table__code--inline": !R
        }),
        ...m.codeLanguage ? { "data-language": m.codeLanguage } : {}
      }, W = Z(
        V,
        m.codeLanguage,
        m.disableHighlight
      );
      T = R ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...O,
          dangerouslySetInnerHTML: { __html: W }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...O,
          dangerouslySetInnerHTML: { __html: W }
        }
      );
    } else
      T = m.text;
    const P = /* @__PURE__ */ e.createElement(e.Fragment, null, l && m.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, m.header, " "), T), A = $ ? "th" : "td";
    return /* @__PURE__ */ e.createElement(A, { key: H, className: M, ...g }, P);
  };
  let v = t, S = a;
  !v && b && b.length && (v = b.map((m) => ({
    text: m.title,
    format: m.format,
    classes: m.headerClasses,
    attributes: m.headerAttributes
  }))), !S && b && _ && _.length && (S = _.map((m, H) => b.map((B) => {
    const $ = B.accessor ? B.accessor(m, H) : m[B.key];
    let M = { format: B.format, classes: B.cellClasses, attributes: B.cellAttributes };
    if (B.rowHeader && (M.rowHeader = !0), B.render) {
      const g = B.render($, m, H, B);
      return g == null || typeof g == "boolean" ? { ...M, text: "" } : typeof g == "string" || typeof g == "number" ? { ...M, text: String(g) } : { ...M, ...g };
    }
    return { ...M, text: $ != null ? String($) : "" };
  })));
  const y = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: N,
      ...l && { role: "table" },
      ...h,
      ...d && { "data-testid": d }
    },
    s && /* @__PURE__ */ e.createElement("caption", { className: w(C, k && "nhsuk-u-visually-hidden") }, s),
    v && v.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...l && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...l && { role: "row" } }, v.map(
        (m, H) => I(m, H)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, S && S.map((m, H) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: H,
        className: "nhsuk-table__row",
        ...l && { role: "row" }
      },
      m.map(
        (B, $) => E(B, $, $ === 0)
      )
    )))
  );
  return i ? /* @__PURE__ */ e.createElement(ve, { className: u }, o && /* @__PURE__ */ e.createElement(F, { level: c, className: "nhsuk-table__heading-tab" }, o), y()) : x ? /* @__PURE__ */ e.createElement("div", { className: x }, y()) : y();
}, $e = ({
  children: a,
  size: t,
  className: s
}) => {
  const n = w(
    "nhsuk-table__caption",
    t && `nhsuk-table__caption--${t}`,
    s
  );
  return /* @__PURE__ */ e.createElement("caption", { className: n }, a);
}, se = ({
  responsive: a,
  className: t,
  children: s,
  ...n
}) => {
  const r = a ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: t, ...r, ...n }, s);
}, re = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: r,
  codeClassName: l,
  disableHighlight: o,
  format: c,
  classes: i,
  colspan: u,
  rowspan: f,
  attributes: p,
  responsive: h,
  as: d = "th"
}) => {
  const b = w(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${c}`]: c },
    i
  ), _ = {
    scope: "col",
    ...u && { colSpan: u },
    ...f && { rowSpan: f },
    ...h && { role: "columnheader" },
    ...p
  };
  let k;
  if (s != null) k = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) k = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const N = Array.isArray(n), x = N ? n.join(`
`) : n, I = N || x.includes(`
`), E = {
      className: w("nhsuk-table__code", l, {
        "nhsuk-table__code--block": I,
        "nhsuk-table__code--inline": !I
      }),
      ...r ? { "data-language": r } : {}
    }, v = Z(
      x,
      r,
      o
    );
    k = I ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...E,
        dangerouslySetInnerHTML: { __html: v }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...E, dangerouslySetInnerHTML: { __html: v } });
  } else k = a;
  const C = d;
  return /* @__PURE__ */ e.createElement(C, { className: b, ..._ }, k);
}, Te = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: r,
  codeClassName: l,
  disableHighlight: o,
  format: c,
  classes: i,
  colspan: u,
  rowspan: f,
  attributes: p,
  responsive: h,
  rowHeader: d
}) => {
  const b = !!d, _ = b ? "th" : "td", k = w(
    b ? "nhsuk-table__header" : "nhsuk-table__cell",
    c && `nhsuk-table__${b ? "header" : "cell"}--${c}`,
    i
  ), C = {
    ...u && { colSpan: u },
    ...f && { rowSpan: f },
    ...b && { scope: "row" },
    ...h && { role: b ? "rowheader" : "cell" },
    ...p
  };
  let N;
  if (s != null) N = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) N = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const x = Array.isArray(n), I = x ? n.join(`
`) : n, E = x || I.includes(`
`), v = {
      className: w("nhsuk-table__code", l, {
        "nhsuk-table__code--block": E,
        "nhsuk-table__code--inline": !E
      }),
      ...r ? { "data-language": r } : {}
    }, S = Z(I, r, o);
    N = E ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ...v, dangerouslySetInnerHTML: { __html: S } })) : /* @__PURE__ */ e.createElement("code", { ...v, dangerouslySetInnerHTML: { __html: S } });
  } else N = a;
  return /* @__PURE__ */ e.createElement(_, { className: k, ...C }, N);
}, D = He;
D.Caption = $e;
D.BodyRow = se;
D.HeaderCell = re;
D.Cell = Te;
let X = !1, Y = !1;
Object.defineProperty(D, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !X && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), X = !0), se;
  }
});
Object.defineProperty(D, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !Y && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), Y = !0), re;
  }
});
const Me = ({
  heading: a,
  headingLevel: t = 1,
  headingClasses: s = "",
  text: n,
  html: r,
  imageURL: l,
  containerClasses: o = "",
  classes: c = "",
  children: i,
  ...u
}) => {
  const f = [
    "nhsuk-hero",
    l && a ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    l && !a ? "nhsuk-hero--image" : "",
    c
  ].filter(Boolean).join(" "), p = [
    "nhsuk-width-container",
    o,
    l ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    s,
    !i && !n && !r ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), d = i || a || n || r, b = () => {
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
      className: f,
      style: l ? { backgroundImage: `url('${l}')` } : void 0,
      role: "banner",
      ...u
    },
    l && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, d && /* @__PURE__ */ e.createElement("div", { className: p }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, b(), i || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !l && d && /* @__PURE__ */ e.createElement("div", { className: p }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, b(), i || (r ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
Me.displayName = "Hero";
const Pe = e.forwardRef(({
  variant: a = "default",
  heading: t,
  headingHtml: s,
  headingLevel: n = 2,
  headingClasses: r,
  description: l,
  descriptionHtml: o,
  href: c,
  imgURL: i,
  imgAlt: u,
  ...f
}, p) => {
  const h = [
    "nhsuk-card",
    a === "clickable" && "nhsuk-card--clickable",
    a === "secondary" && "nhsuk-card--secondary",
    a === "feature" && "nhsuk-card--feature",
    f.className
  ].filter(Boolean).join(" "), d = [
    "nhsuk-card__content",
    a === "feature" && "nhsuk-card__content--feature",
    a === "primary" && "nhsuk-card__content--primary",
    a === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), b = [
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
        className: b
      },
      N()
    );
  }, k = () => f.children ? f.children : o ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: o } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, l) : null, C = () => a !== "primary" ? null : /* @__PURE__ */ e.createElement(
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
      ...f,
      className: h,
      ref: p
    },
    i && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: i,
        alt: u || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: d }, _(), k(), C())
  );
});
Pe.displayName = "Card";
const oa = ({
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
}, ia = ({
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
}, ua = ({
  type: a,
  heading: t,
  headingHtml: s,
  headingLevel: n = 3,
  headingClasses: r,
  description: l,
  descriptionHtml: o,
  className: c,
  children: i,
  "data-testid": u,
  id: f,
  "aria-label": p,
  "aria-labelledby": h,
  "aria-describedby": d
}) => {
  const b = [
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
  }, C = () => i || (o ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: o } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, l) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: b,
      "data-testid": u,
      id: f,
      "aria-label": p,
      "aria-labelledby": h,
      "aria-describedby": d
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, k(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, C())
  );
};
function je(a) {
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
    required: u = !1,
    hasError: f = !1,
    describedBy: p,
    className: h,
    width: d = "full",
    inputMode: b,
    autoComplete: _,
    maxLength: k,
    minLength: C,
    pattern: N,
    step: x,
    min: I,
    max: E,
    showValueLabels: v = !1,
    showCurrentValue: S = !1,
    valueLabels: y,
    // Strip interactive handlers in server variant
    onChange: m,
    onBlur: H,
    onFocus: B,
    onKeyDown: $,
    ...M
  } = a, { classes: g, isRange: T } = je({
    type: n,
    hasError: f,
    width: d,
    className: h
  }), P = {
    id: t,
    name: s,
    type: n,
    placeholder: o,
    disabled: c,
    readOnly: i,
    required: u,
    "aria-describedby": p,
    inputMode: b,
    autoComplete: _,
    maxLength: k,
    minLength: C,
    pattern: N,
    step: x,
    min: I,
    max: E,
    ...M
  };
  if (T) {
    const A = r ?? l ?? (typeof I < "u" ? String(I) : "0"), j = /* @__PURE__ */ e.createElement(
      "input",
      {
        className: g,
        ...r !== void 0 ? { value: r } : {},
        ...r === void 0 && l !== void 0 ? { defaultValue: l } : {},
        "data-current-value": A,
        ...P
      }
    );
    return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-wrapper" }, v ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-labels" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min" }, y?.min || I || "0"), j, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max" }, y?.max || E || "100")) : j, S && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-current-value" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-current-label" }, y?.current || "Current value:", " ", /* @__PURE__ */ e.createElement("strong", null, A))));
  }
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: g,
      ...r !== void 0 ? { value: r } : {},
      ...r === void 0 && l !== void 0 ? { defaultValue: l } : {},
      ...P
    }
  );
}
function Ae(a) {
  const t = a.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    a.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
const ma = ({
  id: a,
  name: t,
  value: s,
  defaultValue: n,
  placeholder: r,
  disabled: l = !1,
  readOnly: o = !1,
  required: c = !1,
  hasError: i = !1,
  describedBy: u,
  className: f,
  rows: p = 5,
  cols: h,
  maxLength: d,
  minLength: b,
  wrap: _ = "soft",
  resize: k = "vertical",
  autoComplete: C,
  spellCheck: N,
  onChange: x,
  onBlur: I,
  onFocus: E,
  onKeyDown: v,
  ...S
}) => {
  const { classes: y, describedBy: m } = Ae({ hasError: i, resize: k, className: f, describedBy: u });
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
      "aria-describedby": m,
      rows: p,
      cols: h,
      maxLength: d,
      minLength: b,
      wrap: _,
      autoComplete: C,
      spellCheck: N,
      onChange: x,
      onBlur: I,
      onFocus: E,
      onKeyDown: v,
      ...S
    }
  );
};
function Fe(a) {
  return { classes: [
    "nhsuk-select",
    a.hasError ? "nhsuk-select--error" : "",
    a.className || ""
  ].filter(Boolean).join(" ") };
}
const De = ({
  value: a,
  disabled: t = !1,
  selected: s = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: n,
  children: r,
  ...l
}) => {
  const o = w(
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
}, Re = ({
  id: a,
  name: t,
  ariaLabel: s,
  value: n,
  defaultValue: r,
  disabled: l = !1,
  required: o = !1,
  hasError: c = !1,
  describedBy: i,
  className: u,
  multiple: f = !1,
  size: p,
  autoComplete: h,
  options: d,
  children: b,
  onChange: _,
  onBlur: k,
  onFocus: C,
  ...N
}) => {
  const { classes: x } = Fe({ hasError: c, className: u }), I = () => d ? d.map((v, S) => /* @__PURE__ */ e.createElement(
    "option",
    {
      key: `${v.value}-${S}`,
      value: v.value,
      disabled: v.disabled,
      "data-initial-selected": v.selected || void 0
    },
    v.text
  )) : null, E = r === void 0 && n === void 0 && d ? d.find((v) => v.selected)?.value : void 0;
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
      multiple: f,
      size: p,
      autoComplete: h,
      onChange: _,
      onBlur: k,
      onFocus: C,
      ...N
    },
    b || I()
  );
}, ze = Re;
ze.Option = De;
function da({
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
  ...u
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
  let h = l?.describedBy || "";
  const d = o ? `${a}-hint` : "", b = c ? `${a}-error` : "";
  d && (h = h ? `${h} ${d}` : d), b && (h = h ? `${h} ${b}` : b);
  const _ = w("nhsuk-form-group", {
    "nhsuk-form-group--error": !!c
  }), k = w("nhsuk-date-input", t), C = () => /* @__PURE__ */ e.createElement(e.Fragment, null, o && /* @__PURE__ */ e.createElement(pe, { id: d, className: o.classes }, o.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: o.html } }) : o.text), c && /* @__PURE__ */ e.createElement(Ee, { id: b, className: c.classes }, c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: k,
      id: a,
      "data-testid": "date-input",
      ...u
    },
    p.map((N) => {
      const x = N.id || `${a}-${N.name}`, I = n ? `${n}[${N.name}]` : N.name, E = N.label || N.name.charAt(0).toUpperCase() + N.name.slice(1), v = r[N.name];
      return /* @__PURE__ */ e.createElement("div", { key: N.name, className: "nhsuk-date-input__item" }, /* @__PURE__ */ e.createElement(q, { htmlFor: x, className: "nhsuk-date-input__label" }, E), /* @__PURE__ */ e.createElement(
        J,
        {
          id: x,
          name: I,
          defaultValue: v,
          className: w("nhsuk-date-input__input", N.classes),
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
    C()
  ) : C());
}
function ha({
  titleText: a = "There is a problem",
  titleHtml: t,
  descriptionText: s,
  descriptionHtml: n,
  errorList: r,
  className: l,
  children: o,
  ...c
}) {
  const i = w("nhsuk-error-summary", l), u = () => t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a, f = () => n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s, p = (h) => {
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
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title" }, u()),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__body" }, o && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, o), !o && (s || n) && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, f()), /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list" }, r.map((h, d) => /* @__PURE__ */ e.createElement("li", { key: d }, p(h)))))
  );
}
function Ve(a) {
  return { classes: [
    "nhsuk-radios",
    a.hasError ? "nhsuk-radios--error" : "",
    a.size === "small" ? "nhsuk-radios--small" : "",
    a.inline ? "nhsuk-radios--inline" : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
function Oe(a, {
  variant: t,
  selectedValue: s,
  enableBehaviourAttr: n,
  handleChange: r,
  handleBlur: l,
  handleFocus: o,
  handleKeyDown: c,
  itemsRef: i,
  InputComponent: u
}) {
  const {
    onChange: f,
    onBlur: p,
    onFocus: h,
    ...d
  } = a, {
    name: b,
    hasError: _ = !1,
    describedBy: k,
    className: C,
    size: N = "normal",
    inline: x = !1,
    options: I,
    ...E
  } = d, { classes: v, describedBy: S } = Ve({ hasError: _, size: N, inline: x, className: C, describedBy: k });
  return /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: v,
      ...E,
      "data-nhs-behaviour": "radios"
    },
    I.map((y, m) => {
      const H = `${b}-${m}`, B = y.conditional ? `${H}-conditional` : void 0, $ = s === y.value;
      return /* @__PURE__ */ e.createElement("div", { key: y.value, className: "nhsuk-radios__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-radios__input",
          id: H,
          name: b,
          type: "radio",
          value: y.value,
          disabled: y.disabled,
          defaultChecked: $,
          "data-nhs-radios-input": !0,
          "aria-describedby": S
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-radios__label", htmlFor: H }, y.text), y.hint && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-radios__hint" }, y.hint), y.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: w("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !$
          }),
          id: B,
          "data-nhs-radios-conditional": !0
        },
        typeof y.conditional == "object" && y.conditional !== null && "label" in y.conditional && "id" in y.conditional && "name" in y.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, y.conditional.label && /* @__PURE__ */ e.createElement(
          q,
          {
            htmlFor: y.conditional.id
          },
          y.conditional.label
        ), /* @__PURE__ */ e.createElement(
          u,
          {
            ...y.conditional
          }
        )) : y.conditional
      ));
    })
  ));
}
const _a = ({ value: a, defaultValue: t, ...s }) => {
  const n = a || t || "";
  return Oe(
    { value: a, defaultValue: t, ...s },
    {
      variant: "server",
      selectedValue: n,
      enableBehaviourAttr: !0,
      InputComponent: J
    }
  );
};
function We(a) {
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
function ka(a) {
  const {
    items: t,
    name: s,
    idPrefix: n,
    legend: r,
    isPageHeading: l = !1,
    legendSize: o = "l",
    hint: c,
    errorMessage: i,
    className: u = "",
    small: f = !1,
    // Strip interactive handler in server variant
    onChange: p,
    fieldsetAttributes: h,
    attributes: d,
    ...b
  } = a, _ = n || s, k = c ? `${_}-hint` : void 0, C = i ? `${_}-error` : void 0, N = [k, C].filter(Boolean).join(" ") || void 0, { classes: x, formGroupClasses: I } = We({ small: f, className: u, hasError: !!i });
  return /* @__PURE__ */ e.createElement("div", { className: I, ...d, ...b }, /* @__PURE__ */ e.createElement(
    K,
    {
      legend: r ? { text: r, isPageHeading: l, size: o } : void 0,
      describedBy: N,
      ...h
    },
    c && /* @__PURE__ */ e.createElement("div", { id: k, className: "nhsuk-hint" }, c),
    i && /* @__PURE__ */ e.createElement("div", { id: C, className: "nhsuk-error-message" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Error:"), " ", i),
    /* @__PURE__ */ e.createElement("div", { className: x, "data-nhs-behaviour": "checkboxes" }, t.map((E, v) => {
      const S = `${_}-${v + 1}`, y = `${S}-conditional`, m = !!E.checked, H = !!E.disabled;
      return /* @__PURE__ */ e.createElement("div", { key: E.value, className: "nhsuk-checkboxes__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: S,
          name: s,
          type: "checkbox",
          value: E.value,
          ...m ? { defaultChecked: !0 } : {},
          disabled: H,
          "aria-describedby": E.hint ? `${S}-hint` : N,
          ...E.conditional && {
            "aria-controls": y,
            "aria-expanded": m ? "true" : "false"
          },
          ...E.attributes
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-checkboxes__label", htmlFor: S }, E.text), E.hint && /* @__PURE__ */ e.createElement("div", { id: `${S}-hint`, className: "nhsuk-checkboxes__hint" }, E.hint), E.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: w("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !m
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
  Ke as ActionLink,
  Je as BackLink,
  we as Breadcrumb,
  ba as Breakpoint,
  me as ButtonServer,
  Pe as Card,
  oa as CardGroup,
  ia as CardGroupItem,
  ua as CareCard,
  ka as Checkboxes,
  Ea as Column,
  ga as ColumnAlign,
  ce as Container,
  ta as ContentsList,
  da as DateInput,
  Ne as Details,
  Se as DoDontList,
  Ee as ErrorMessage,
  ha as ErrorSummary,
  K as Fieldset,
  Na as Float,
  Ue as Footer,
  va as Grid,
  ya as GridWidth,
  qe as Header,
  F as Heading,
  Me as Hero,
  pe as Hint,
  na as Images,
  J as Input,
  Ye as InsetText,
  q as Label,
  Ie as List,
  ca as MetricCard,
  sa as Pagination,
  ve as Panel,
  _a as Radios,
  wa as Row,
  ze as Select,
  De as SelectOption,
  Xe as SkipLink,
  Ca as SpacingUtilities,
  la as SummaryCard,
  ra as SummaryList,
  D as Table,
  se as TableBodyRow,
  $e as TableCaption,
  Te as TableCell,
  re as TableHeaderCell,
  Qe as Tag,
  ma as Textarea,
  ea as WarningCallout,
  aa as WidthContainer,
  xa as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
