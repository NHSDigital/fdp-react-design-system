import c, { useState as h, useEffect as k } from "react";
import { c as p } from "./SkipLink-Bpun0E2L.js";
const b = ({
  as: e = "main",
  size: i = "default",
  className: s,
  children: u,
  ...r
}) => {
  const l = [
    "nhsuk-main-wrapper",
    i === "large" && "nhsuk-main-wrapper--l",
    i === "small" && "nhsuk-main-wrapper--s",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c.createElement(e, { className: l, ...r }, u);
}, y = ({
  debug: e = !1,
  className: i,
  children: s,
  ...u
}) => {
  if (!s)
    return null;
  const r = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c.createElement("div", { className: r, ...u }, s);
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
  attributes: u = {}
}) => {
  const [r, l] = h(!1);
  k(() => {
    l(!0);
  }, []), k(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const d = (a) => {
      const t = a.target, o = t.getAttribute("href");
      if (o && o.startsWith("#")) {
        const n = typeof document < "u" && typeof document < "u" && typeof document < "u" && typeof document < "u" ? document.querySelector(o) : null;
        if (n) {
          n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus(), n.classList.add("nhsuk-skip-link-focused-element");
          const f = window.setTimeout(() => {
            n.classList.remove("nhsuk-skip-link-focused-element"), n.getAttribute("tabindex") === "-1" && n.removeAttribute("tabindex");
          }, 3e3);
          t.__nhsSkipLinkTimeout = f;
        }
      }
    };
    try {
      const a = document.querySelectorAll(".nhsuk-skip-link");
      return a.forEach((t) => {
        t.addEventListener("click", d);
      }), () => {
        try {
          a.forEach((t) => {
            t.removeEventListener("click", d);
            const o = t.__nhsSkipLinkTimeout;
            o && window.clearTimeout && window.clearTimeout(o);
          });
        } catch (t) {
          console.warn("SkipLink cleanup error:", t);
        }
      };
    } catch (a) {
      return console.warn("SkipLink initialization error:", a), () => {
      };
    }
  }, [r]);
  const m = p("nhsuk-skip-link", s);
  return /* @__PURE__ */ c.createElement(
    "a",
    {
      className: m,
      href: i,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": r ? "true" : "false",
      ...u
    },
    e
  );
};
export {
  b as M,
  E as S,
  y as W,
  g as a,
  L as g
};
//# sourceMappingURL=SkipLink-DifuaRi3.js.map
