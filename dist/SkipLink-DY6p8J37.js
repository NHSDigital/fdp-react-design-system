import c, { useState as p, useEffect as f } from "react";
import { c as h } from "./SkipLink-BE-cc-Aq.js";
const S = ({
  as: e = "main",
  size: i = "default",
  className: s,
  children: a,
  ...o
}) => {
  const l = [
    "nhsuk-main-wrapper",
    i === "large" && "nhsuk-main-wrapper--l",
    i === "small" && "nhsuk-main-wrapper--s",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c.createElement(e, { className: l, ...o }, a);
}, b = ({
  debug: e = !1,
  className: i,
  children: s,
  ...a
}) => {
  if (!s)
    return null;
  const o = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c.createElement("div", { className: o, ...a }, s);
}, L = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, g = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], E = ({
  text: e = "Skip to main content",
  href: i = "#maincontent",
  classes: s,
  attributes: a = {}
}) => {
  const [o, l] = p(!1);
  f(() => {
    l(!0);
  }, []), f(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const d = (u) => {
      const t = u.target, r = t.getAttribute("href");
      if (r && r.startsWith("#")) {
        const n = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(r) : null;
        if (n) {
          n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus(), n.classList.add("nhsuk-skip-link-focused-element");
          const k = window.setTimeout(() => {
            n.classList.remove("nhsuk-skip-link-focused-element"), n.getAttribute("tabindex") === "-1" && n.removeAttribute("tabindex");
          }, 3e3);
          t.__nhsSkipLinkTimeout = k;
        }
      }
    };
    try {
      const u = document.querySelectorAll(".nhsuk-skip-link");
      return u.forEach((t) => {
        t.addEventListener("click", d);
      }), () => {
        try {
          u.forEach((t) => {
            t.removeEventListener("click", d);
            const r = t.__nhsSkipLinkTimeout;
            r && window.clearTimeout && window.clearTimeout(r);
          });
        } catch (t) {
          console.warn("SkipLink cleanup error:", t);
        }
      };
    } catch (u) {
      return console.warn("SkipLink initialization error:", u), () => {
      };
    }
  }, [o]);
  const m = h("nhsuk-skip-link", s);
  return /* @__PURE__ */ c.createElement(
    "a",
    {
      className: m,
      href: i,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": o ? "true" : "false",
      ...a
    },
    e
  );
};
export {
  S as M,
  E as S,
  b as W,
  g as a,
  L as g
};
//# sourceMappingURL=SkipLink-DY6p8J37.js.map
