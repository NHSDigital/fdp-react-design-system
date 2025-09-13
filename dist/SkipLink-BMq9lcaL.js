import c, { useState as f, useEffect as k } from "react";
import { c as p } from "./SkipLink-Bpun0E2L.js";
const b = ({
  as: e = "main",
  size: i = "default",
  className: s,
  children: l,
  ...r
}) => {
  const u = [
    "nhsuk-main-wrapper",
    i === "large" && "nhsuk-main-wrapper--l",
    i === "small" && "nhsuk-main-wrapper--s",
    s
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c.createElement(e, { className: u, ...r }, l);
}, L = ({
  debug: e = !1,
  className: i,
  children: s,
  ...l
}) => {
  if (!s)
    return null;
  const r = [
    "nhsuk-width-utilities",
    e && "nhsuk-width-utilities--debug",
    i
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ c.createElement("div", { className: r, ...l }, s);
}, g = {
  width: (e) => `nhsuk-u-width-${e}`,
  widthTablet: (e) => `nhsuk-u-width-${e}-tablet`
}, E = [
  "full",
  "three-quarters",
  "two-thirds",
  "one-half",
  "one-third",
  "one-quarter"
], y = ({
  text: e = "Skip to main content",
  href: i = "#maincontent",
  classes: s,
  attributes: l = {}
}) => {
  const [r, u] = f(!1);
  k(() => {
    u(!0);
  }, []), k(() => {
    if (typeof window > "u" || typeof document > "u" || !document.querySelector || !document.querySelectorAll)
      return;
    const d = (a) => {
      const t = a.target, o = t.getAttribute("href");
      if (o && o.startsWith("#")) {
        const n = document.querySelector(o);
        if (n) {
          n.hasAttribute("tabindex") || n.setAttribute("tabindex", "-1"), n.focus(), n.classList.add("nhsuk-skip-link-focused-element");
          const h = window.setTimeout(() => {
            n.classList.remove("nhsuk-skip-link-focused-element"), n.getAttribute("tabindex") === "-1" && n.removeAttribute("tabindex");
          }, 3e3);
          t.__nhsSkipLinkTimeout = h;
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
      ...l
    },
    e
  );
};
export {
  b as M,
  y as S,
  L as W,
  E as a,
  g
};
//# sourceMappingURL=SkipLink-BMq9lcaL.js.map
