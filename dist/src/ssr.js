import * as S from "react";
import e, { createElement as se, forwardRef as re } from "react";
import { c as E, C as he, b as F, R as pe, a as Y, d as V } from "../SkipLink-BE-cc-Aq.js";
import { B as za, F as Za, G as Ba, S as Ha, g as Pa } from "../SkipLink-BE-cc-Aq.js";
const Ne = ({
  ariaLabel: a = "Account",
  items: t = [],
  className: s,
  variant: n = "default"
}) => {
  if (!t || t.length === 0)
    return null;
  const l = (r) => {
    const i = r.icon ? /* @__PURE__ */ e.createElement(
      "svg",
      {
        className: "nhsuk-icon nhsuk-icon__user",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        role: "img",
        "aria-label": r.icon === !0 ? "User" : void 0
      },
      /* @__PURE__ */ e.createElement("path", { d: "M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22Zm0 2a9 9 0 0 0-5 16.5V18a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1.5A9 9 0 0 0 12 3Zm0 3a3.5 3.5 0 1 1-3.5 3.5A3.4 3.4 0 0 1 12 6Z" })
    ) : null, c = r.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: r.html } }) : r.text, o = /* @__PURE__ */ e.createElement(e.Fragment, null, i, c);
    return r.href ? /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: r.href
      },
      o
    ) : r.action ? /* @__PURE__ */ e.createElement(
      "form",
      {
        className: "nhsuk-account__form",
        action: r.action,
        method: r.method || "post"
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
      (r, i) => r && /* @__PURE__ */ e.createElement(
        "li",
        {
          key: i,
          className: E(
            "nhsuk-account__item nhsuk-header__account-item",
            r.className
          )
        },
        l(r)
      )
    ))
  );
}, ke = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", fe = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", be = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Ie = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", Me = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", ye = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Ee = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var le = /* @__PURE__ */ ((a) => (a.NHS = "nhs", a.FDP = "fdp", a))(le || {}), ce = /* @__PURE__ */ ((a) => (a.Full = "full", a.Graphic = "graphic", a.Inverse = "inverse", a.TwoLine = "twoLine", a.TwoLineInverse = "twoLineInverse", a.Compact = "compact", a.CompactInverted = "compactInverted", a))(ce || {});
const _e = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: ke,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: Me,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Ie,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: fe,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: be,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: ye,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Ee,
      ariaLabel: "FDP"
    }
  }
};
function ve(a, t = "full") {
  return _e[a]?.[t];
}
function Le(a, { variant: t, isClient: s, brand: n }) {
  const {
    className: l,
    logo: r = {},
    service: i = {},
    serviceName: c,
    organisation: o,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: u,
    navigation: g,
    containerClasses: f,
    variant: h = "default",
    attributes: m = {},
    maxVisibleItems: I,
    // deprecated (ignored)
    responsiveNavigation: p = !0,
    // Consume logoVariant for server-side logo selection while preventing DOM leakage via ...rest
    logoVariant: k = ce.Full,
    ...v
  } = a;
  "maxVisibleItems" in v && delete v.maxVisibleItems;
  const N = {
    ...i,
    text: i?.text ?? c
  }, L = N.href && !r.href || N.href && N.href === r.href, w = L ? N.href : r.href, M = E(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": h === "organisation" || o,
      "nhsuk-header--white": h === "white"
    },
    l
  ), _ = E(
    "nhsuk-header__container",
    f
  ), D = E(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": g?.white,
      "nhsuk-header__navigation--justified": g?.justified
    },
    g?.className
  ), b = n === "fdp" ? "fdp" : "nhs", d = () => /* @__PURE__ */ e.createElement(
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
  ), x = () => {
    if (r.src)
      return /* @__PURE__ */ e.createElement(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: r.src,
          width: "280",
          alt: r.ariaLabel || (b === "fdp" ? "FDP" : "NHS")
        }
      );
    if (b === "fdp") {
      const y = ve(le.FDP, k);
      if (y?.src)
        return /* @__PURE__ */ e.createElement(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: y.src,
            "data-logo-variant": k,
            width: "280",
            alt: y.ariaLabel || "FDP"
          }
        );
    }
    return d();
  }, C = () => o ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, o.name, o.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", o.split)), o.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, o.descriptor)) : null, T = (y, Z) => y ? Z ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: Z }, y) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, y) : null, j = (y) => y.active || y.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, y.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text) : y.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: y.html } }) : y.text, A = g?.items && !p, z = A ? [] : g?.items, B = A ? g.items : [];
  return /* @__PURE__ */ e.createElement(
    "header",
    {
      className: M,
      role: "banner",
      "data-module": "nhsuk-header",
      ...m,
      ...v
    },
    /* @__PURE__ */ e.createElement("div", { className: _ }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, w ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: w }, x(), C(), L && T(N.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, x(), C(), L && T(N.text)), N.text && !L && T(N.text, N.href)), /* @__PURE__ */ e.createElement(
      Ne,
      {
        ...u,
        variant: h === "white" ? "white" : "default"
      }
    )),
    g && g.items && g.items.length > 0 && /* @__PURE__ */ e.createElement(
      "nav",
      {
        className: D,
        "aria-label": g.ariaLabel || "Menu"
      },
      /* @__PURE__ */ e.createElement(
        "div",
        {
          className: E(
            "nhsuk-header_navigation-container",
            "nhsuk-width-container",
            {
              "nhsuk-header__navigation-container--ssr": !s
            },
            f
          )
        },
        /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, (z || []).map((y, Z) => /* @__PURE__ */ e.createElement(
          "li",
          {
            key: Z,
            className: E(
              "nhsuk-header__navigation-item",
              {
                "nhsuk-header__navigation-item--current": y.active || y.current
              },
              y.className
            ),
            ...y.attributes || {}
          },
          /* @__PURE__ */ e.createElement(
            "a",
            {
              className: "nhsuk-header__navigation-link",
              href: y.href,
              ...y.active || y.current ? { "aria-current": y.current ? "page" : "true" } : {}
            },
            j(y)
          )
        )))
      )
    ),
    A && B.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__dropdown-list" }, B.map((y, Z) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: `overflow-server-${Z}`,
        className: E("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": y.active || y.current
        })
      },
      /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-header__dropdown-link",
          href: y.href,
          ...y.active || y.current ? { "aria-current": y.current ? "page" : "true" } : {}
        },
        j(y)
      )
    ))))
  );
}
const oa = (a) => {
  const t = a.attributes?.["data-brand"];
  return Le(a, {
    variant: "server",
    isClient: !1,
    brand: t === "fdp" || t === "nhs" ? t : void 0
  });
}, da = ({
  text: a,
  href: t,
  openInNewWindow: s = !1,
  className: n,
  ...l
}) => {
  const r = E(
    "nhsuk-action-link__link",
    n
  );
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-action-link" }, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: r,
      href: t,
      target: s ? "_blank" : void 0,
      rel: s ? "noopener noreferrer" : void 0,
      ...l
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
function we(a) {
  const t = a.variant || "primary", s = a.size || "default", n = !!a.fullWidth, l = [
    "nhs-aria-button",
    `nhs-aria-button--${t}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    n ? "nhs-aria-button--full-width" : "",
    a.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: a.href ? "a" : "button",
    classes: l,
    data: { module: "nhs-button" },
    attrs: a.href ? { href: a.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!a.preventDoubleClick
  };
}
var ie = /* @__PURE__ */ ((a) => (a.Primary = "primary", a.Secondary = "secondary", a.Reverse = "reverse", a.Warning = "warning", a.Login = "login", a.Metric = "metric", a))(ie || {}), oe = /* @__PURE__ */ ((a) => (a.Small = "small", a.Default = "default", a.Large = "large", a))(oe || {});
const X = S.forwardRef(function(t, s) {
  const {
    children: n,
    variant: l = ie.Primary,
    size: r = oe.Default,
    fullWidth: i = !1,
    className: c = "",
    preventDoubleClick: o = !1,
    ...u
  } = t, g = we({
    variant: l,
    size: r,
    fullWidth: i,
    className: c,
    href: "href" in u ? u.href : void 0,
    preventDoubleClick: o
  });
  if ("href" in u && u.href) {
    const z = u, {
      id: B,
      style: y,
      title: Z,
      ["aria-label"]: U,
      ["aria-describedby"]: O,
      ["aria-labelledby"]: Q,
      tabIndex: R,
      ...ge
    } = z;
    return /* @__PURE__ */ S.createElement(
      "a",
      {
        ref: s,
        href: z.href,
        target: z.target,
        rel: z.rel,
        className: g.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...o && { "data-prevent-double-click": "true" },
        id: B,
        style: y,
        title: Z,
        "aria-label": U,
        "aria-describedby": O,
        "aria-labelledby": Q,
        tabIndex: R,
        ...ge
      },
      n
    );
  }
  const f = u, {
    id: h,
    style: m,
    title: I,
    ["aria-label"]: p,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: v,
    tabIndex: N,
    name: L,
    value: w,
    form: M,
    formAction: _,
    formEncType: D,
    formMethod: b,
    formNoValidate: d,
    formTarget: x,
    autoFocus: C,
    type: T,
    disabled: j,
    ...A
  } = f;
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
      "aria-describedby": k,
      "aria-labelledby": v,
      tabIndex: N,
      name: L,
      value: w,
      form: M,
      formAction: _,
      formEncType: D,
      formMethod: b,
      formNoValidate: d,
      formTarget: x,
      autoFocus: C,
      ...A
    },
    n
  );
});
X.displayName = "ButtonServer";
const ua = ({
  text: a = "Back",
  html: t,
  href: s = "#",
  className: n,
  element: l = "a",
  onClick: r,
  ...i
}) => {
  const c = E(
    "nhsuk-back-link",
    n
  ), o = E(
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
  return /* @__PURE__ */ e.createElement("div", { className: c }, l === "button" ? /* @__PURE__ */ e.createElement(
    "button",
    {
      className: o,
      onClick: r,
      type: "button",
      ...i
    },
    u()
  ) : /* @__PURE__ */ e.createElement(
    "a",
    {
      className: o,
      href: s,
      ...i
    },
    u()
  ));
};
function Ce(a) {
  const { color: t = "default", noBorder: s, closable: n, disabled: l, className: r } = a;
  return { classes: [
    "nhsuk-tag",
    t !== "default" ? `nhsuk-tag--${t}` : "",
    s ? "nhsuk-tag--no-border" : "",
    n ? "nhsuk-tag--closable" : "",
    l ? "nhsuk-tag--disabled" : "",
    r || ""
  ].filter(Boolean).join(" "), showClose: !!n, disabled: !!l };
}
const ma = ({
  text: a,
  html: t,
  children: s,
  color: n = "default",
  noBorder: l = !1,
  closable: r = !1,
  onClose: i,
  disabled: c = !1,
  className: o,
  ...u
}) => {
  const g = Ce({ color: n, noBorder: l, closable: r, disabled: c, className: o }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !c && i && i();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: g.classes, ...u }, s || (t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a), r && /* @__PURE__ */ e.createElement(
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
function De(a) {
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
  children: l,
  ...r
}) => {
  const i = De({ size: n, isPageHeading: s, className: t, htmlFor: a }), c = i.tag;
  return /* @__PURE__ */ e.createElement(c, { className: i.classes, htmlFor: i.htmlFor, ...r }, s ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: a }, l) : l);
};
function xe(a) {
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
function Se(a) {
  const t = a.level ?? xe(a.size), s = [
    "nhsuk-heading",
    a.size ? `nhsuk-heading--${a.size}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), n = a.marginBottom ? { marginBottom: a.marginBottom } : void 0;
  return { tag: `h${t}`, classes: s, style: n };
}
const H = ({ level: a, className: t, text: s, html: n, children: l, size: r, marginBottom: i, ...c }) => {
  const o = Se({ level: a, size: r, className: t, marginBottom: i }), u = l || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s);
  return se(o.tag, { className: o.classes, style: o.style, ...c }, u);
};
function Te(a) {
  return { classes: [
    "nhsuk-hint",
    a.className || ""
  ].filter(Boolean).join(" "), id: a.id };
}
const je = ({
  id: a,
  className: t,
  children: s,
  ...n
}) => {
  const l = Te({ id: a, className: t });
  return /* @__PURE__ */ e.createElement("div", { className: l.classes, id: l.id, ...n }, s);
};
function Ae(a) {
  return {
    classes: ["nhsuk-error-message", a.className || ""].filter(Boolean).join(" "),
    id: a.id,
    visuallyHiddenText: a.visuallyHiddenText ?? "Error:"
  };
}
const ze = ({ id: a, className: t, visuallyHiddenText: s = "Error:", children: n, ...l }) => {
  const r = Ae({ id: a, className: t, visuallyHiddenText: s });
  return /* @__PURE__ */ e.createElement("span", { className: r.classes, id: r.id, ...l }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, r.visuallyHiddenText, " "), n);
};
function Ze(a) {
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
  ...l
}) => {
  const r = Ze({
    className: s,
    describedBy: n,
    legend: t ? {
      size: t.size,
      className: t.className,
      isPageHeading: t.isPageHeading
    } : void 0
  }), i = () => {
    const c = t?.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t.html } }) : t?.text;
    return r.legendIsPageHeading ? /* @__PURE__ */ e.createElement("h1", { className: "nhsuk-fieldset__heading" }, c) : c;
  };
  return /* @__PURE__ */ e.createElement(
    "fieldset",
    {
      className: r.fieldsetClasses,
      "aria-describedby": r.describedBy,
      ...l
    },
    t && (t.text || t.html) && /* @__PURE__ */ e.createElement("legend", { className: r.legendClasses }, i()),
    a
  );
}, ga = ({
  text: a = "Skip to main content",
  href: t = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const l = E("nhsuk-skip-link", s);
  return /* @__PURE__ */ e.createElement(
    "a",
    {
      className: l,
      href: t,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": "false",
      ...n
    },
    a
  );
}, Be = re(
  ({
    summaryText: a,
    summaryHtml: t,
    text: s,
    html: n,
    open: l = !1,
    className: r = "",
    id: i,
    children: c,
    ...o
  }, u) => {
    const g = [
      "nhsuk-details",
      r
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
        ref: u,
        id: i,
        className: g,
        open: l,
        ...o
      },
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, f),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, h)
    );
  }
);
Be.displayName = "Details";
const ha = ({
  text: a,
  html: t,
  children: s,
  className: n,
  ...l
}) => {
  const r = E("nhsuk-inset-text", n), i = () => s || (t ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: t } }) : a ? /* @__PURE__ */ e.createElement("p", null, a) : null);
  return /* @__PURE__ */ e.createElement("div", { className: r, ...l }, i());
}, He = ({
  id: a,
  className: t,
  headingText: s,
  headingHtml: n,
  headingLevel: l = 2,
  bodyText: r,
  bodyHtml: i,
  children: c,
  ...o
}) => {
  const u = E(
    "nhsuk-panel",
    t
  ), g = () => !s && !n && !c ? null : n ? /* @__PURE__ */ e.createElement(
    H,
    {
      level: l,
      className: "nhsuk-panel__heading",
      html: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : s ? /* @__PURE__ */ e.createElement(
    H,
    {
      level: l,
      className: "nhsuk-panel__heading",
      text: s,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, f = () => c ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, c) : i ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: i }
    }
  ) : r ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ e.createElement("p", null, r)) : null;
  return /* @__PURE__ */ e.createElement("div", { className: u, id: a, ...o }, g(), f());
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
)), Pe = ({
  items: a = [],
  children: t,
  classes: s,
  labelText: n = "Breadcrumb",
  href: l,
  text: r,
  reverse: i = !1,
  attributes: c = {}
}) => {
  const o = () => t ? e.Children.toArray(t).filter(
    (k) => e.isValidElement(k) && (k.type === J || k.type?.displayName === "BreadcrumbItem")
  ).map((k) => ({
    text: typeof k.props.children == "string" ? k.props.children : String(k.props.children),
    href: k.props.href,
    active: k.props.active,
    attributes: k.props.attributes
  })) : [], u = () => t ? o() : l && r ? [{ href: l, text: r }] : a, g = () => {
    const p = u();
    if (p && p.length > 0) {
      const k = p.slice().reverse().find((v) => v.href && !v.active);
      if (k)
        return { href: k.href, text: k.text };
    }
    return { text: "Home" };
  }, f = u(), h = g(), m = E(
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
      e.Children.map(t, (p, k) => e.isValidElement(p) && (p.type === J || p.type?.displayName === "BreadcrumbItem") ? e.cloneElement(p, { key: k }) : null)
    ) : (
      // Render from items array
      f?.filter((p) => p.active || !!p.href).map((p, k) => /* @__PURE__ */ e.createElement("li", { key: k, className: "nhsuk-breadcrumb__item", role: "listitem" }, p.active ? /* @__PURE__ */ e.createElement(
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
}, Oe = Pe;
Oe.Item = J;
J.displayName = "BreadcrumbItem";
const Ge = ({
  children: a,
  type: t = "bullet",
  size: s = "medium",
  border: n = !1,
  className: l,
  role: r,
  as: i,
  ...c
}) => {
  const o = i || (t === "number" ? "ol" : "ul"), u = E(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": t === "bullet",
      "nhsuk-list--number": t === "number",
      "nhsuk-list--none": t === "none",
      "nhsuk-list--border": n,
      [`nhsuk-list--${s}`]: s !== "medium"
    },
    l
  );
  return /* @__PURE__ */ e.createElement(o, { className: u, role: r, ...c }, a);
}, Ue = ({
  children: a,
  className: t,
  ...s
}) => {
  const n = E("nhsuk-list__item", t);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...s }, a);
}, Qe = Ge;
Qe.Item = Ue;
const pa = ({
  className: a,
  links: t = [],
  linksColumn2: s,
  linksColumn3: n,
  metaLinks: l,
  copyright: r = "© NHS England",
  containerClasses: i,
  attributes: c = {},
  style: o,
  footerStyle: u,
  containerStyle: g
}) => {
  const f = (m, I = !1) => /* @__PURE__ */ e.createElement(
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
    /* @__PURE__ */ e.createElement("div", { className: E("nhsuk-footer", a), style: u }, h ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, t.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((m) => f(m))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, s.map((m) => f(m))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((m) => f(m))), l && l.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, l.map((m) => f(m))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, t.map((m) => f(m, !0)), (s || []).map((m) => f(m, !0)), (n || []).map((m) => f(m, !0)), (l || []).map((m) => f(m, !0)))
    )),
    !h && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, r))
  ), h && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, r)))));
}, Na = ({
  heading: a,
  headingLevel: t = 3,
  text: s,
  html: n,
  children: l,
  className: r,
  ...i
}) => {
  const c = /important/i.test(a), o = () => l || (n ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s ? /* @__PURE__ */ e.createElement("p", null, s) : null), u = [
    "nhsuk-warning-callout",
    r
  ].filter(Boolean).join(" "), g = `h${t}`;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: u,
      ...i
    },
    se(
      g,
      { className: "nhsuk-warning-callout__label" },
      c ? /* @__PURE__ */ e.createElement(e.Fragment, null, a, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), a)
    ),
    o()
  );
}, ka = (a) => /* @__PURE__ */ e.createElement(he, { ...a }), fa = ({
  items: a,
  classes: t,
  ariaLabel: s = "Pages in this guide",
  attributes: n = {}
}) => {
  const l = E("nhsuk-contents-list", t), r = (i, c) => i.current ? /* @__PURE__ */ e.createElement(
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
      className: l,
      role: "navigation",
      "aria-label": s,
      ...n
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Contents"),
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-contents-list__list" }, a.map((i, c) => r(i, c)))
  );
}, Re = re(
  ({
    title: a,
    type: t,
    items: s,
    hidePrefix: n = !1,
    headingLevel: l = 3,
    className: r,
    ...i
  }, c) => {
    const o = ["nhsuk-do-dont-list"];
    r && o.push(r);
    const u = [
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
    ), f = (m) => t === "cross" && !n ? `do not ${m}` : m, h = () => /* @__PURE__ */ e.createElement(
      H,
      {
        level: l,
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
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: u.join(" "), role: "list" }, s.map((m, I) => /* @__PURE__ */ e.createElement("li", { key: I }, g(), f(m.item)))))
    );
  }
);
Re.displayName = "DoDontList";
const ba = ({
  src: a,
  alt: t,
  caption: s,
  sizes: n,
  srcset: l,
  className: r,
  ...i
}) => {
  const c = [
    "nhsuk-image",
    r
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
        ...n && l ? { sizes: n, srcSet: l } : {}
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
  classes: l,
  attributes: r = {}
}) => {
  const i = E("nhsuk-pagination", l);
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: i,
      role: "navigation",
      "aria-label": "Pagination",
      ...r
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
}, Ma = ({
  items: a,
  noBorder: t = !1,
  className: s,
  ...n
}) => {
  const l = E(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": t
    },
    s
  ), r = (c) => c.children ? c.children : c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text ? c.text : null, i = (c) => !c || !c.items.length ? null : /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__actions" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-summary-list__actions-list" }, c.items.map((o, u) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: u,
      className: "nhsuk-summary-list__actions-list-item"
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        href: o.href,
        className: "nhsuk-link",
        ...o.attributes
      },
      r(o),
      o.visuallyHiddenText && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, o.visuallyHiddenText)
    )
  ))));
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-summary-list-container" }, /* @__PURE__ */ e.createElement("dl", { className: l, ...n }, a.map((c, o) => /* @__PURE__ */ e.createElement("div", { key: o, className: "nhsuk-summary-list__row" }, /* @__PURE__ */ e.createElement("dt", { className: "nhsuk-summary-list__key" }, r(c.key)), /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__value" }, r(c.value)), i(c.actions)))));
}, ya = ({
  title: a,
  value: t,
  subtitle: s,
  variant: n = "default",
  href: l,
  className: r = "",
  ariaLabel: i,
  ...c
}) => {
  const o = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${n}`,
    r
  ].filter(Boolean).join(" "), u = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(H, { level: 3, className: "nhs-fdp-summary-card__title" }, a), /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__value" }, t), s && /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__subtitle" }, s));
  return l ? /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `${o} nhs-fdp-summary-card--clickable`,
      href: l,
      "aria-label": i || `${a}: ${t}`,
      ...c
    },
    u
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: o,
      "aria-label": i,
      ...c
    },
    u
  );
};
function de(a) {
  var t, s, n = "";
  if (typeof a == "string" || typeof a == "number") n += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var l = a.length;
    for (t = 0; t < l; t++) a[t] && (s = de(a[t])) && (n && (n += " "), n += s);
  } else for (s in a) a[s] && (n && (n += " "), n += s);
  return n;
}
function ae() {
  for (var a, t, s = 0, n = "", l = arguments.length; s < l; s++) (a = arguments[s]) && (t = de(a)) && (n && (n += " "), n += t);
  return n;
}
const Ea = ({
  label: a,
  value: t,
  unit: s,
  delta: n,
  status: l = "neutral",
  variant: r = "default",
  subtitle: i,
  metadata: c,
  trendData: o,
  loading: u = !1,
  error: g,
  valueFormatter: f,
  className: h,
  style: m,
  id: I,
  announceDelta: p = !0,
  visual: k
}) => {
  const v = S.useId(), N = I || v, L = `${N}-label`, w = `${N}-value`, M = `${N}-delta`, _ = typeof t == "number" && !Number.isNaN(t), D = u ? "—" : g ? "" : _ ? f ? f(t) : t.toLocaleString() : t;
  let b, d = "", x = "";
  if (n && !u && !g) {
    b = n.direction || (n.value > 0 ? "up" : n.value < 0 ? "down" : "neutral");
    const C = Math.abs(n.value), T = b === "up" ? `+${C}` : b === "down" ? `-${C}` : "0", j = n.isPercent ? "%" : "";
    if (d = `${T}${j}`, n.ariaLabel)
      x = n.ariaLabel;
    else {
      const A = n.invert ? b === "down" : b === "up";
      x = `${b === "neutral" ? "no change" : b === "up" ? "up" : "down"} ${C}${j}${b === "neutral" ? "" : A ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: ae(
        "fdp-metric-card",
        r && `fdp-metric-card--${r}`,
        l && `fdp-metric-card--status-${l}`,
        u && "fdp-metric-card--loading",
        g && "fdp-metric-card--error",
        h
      ),
      style: m,
      role: "group",
      "aria-labelledby": L,
      "data-component": "MetricCard"
    },
    /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__inner" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__header" }, /* @__PURE__ */ S.createElement("h3", { id: L, className: "fdp-metric-card__label" }, a), c && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__metadata" }, c)), /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__content" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__value-section" }, /* @__PURE__ */ S.createElement("div", { id: w, className: "fdp-metric-card__value" }, u ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" })) : g ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__error", role: "alert" }, g) : /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__number" }, D), s && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__unit" }, s))), i && !u && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__subtitle" }, i)), n && !u && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__delta-section" }, /* @__PURE__ */ S.createElement(
      "div",
      {
        id: M,
        "aria-label": x,
        className: ae(
          "fdp-metric-card__delta",
          b && `fdp-metric-card__delta--${b}`
        )
      },
      /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-value" }, d),
      n.period && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-period" }, n.period)
    )), o && o.length > 0 && !u && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })), k && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__visual", "aria-hidden": "true" }, k), p && n && !n.ariaLabel && !u && !g && /* @__PURE__ */ S.createElement("div", { className: "fdp-visually-hidden", "aria-live": "polite" }, x))
  );
}, G = { current: null }, Je = () => {
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
}, We = (a) => {
  const t = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let s = a;
  return t.forEach((n) => {
    s = s.replace(n.regex, (l) => `<span class="nhsuk-code-${n.cls}">${l}</span>`);
  }), s;
}, W = (a, t, s) => {
  if (s || !t) return a;
  const n = Je();
  if (n && n.languages) {
    const l = n.languages[t] ? t : n.languages.typescript && (t === "ts" || t === "tsx" || t === "typescript") ? "typescript" : n.languages.json && t === "json" ? "json" : void 0;
    if (l)
      try {
        return n.highlight(a, n.languages[l], l);
      } catch {
      }
  }
  return We(a);
}, Fe = ({
  rows: a,
  head: t,
  caption: s,
  captionSize: n,
  firstCellIsHeader: l = !1,
  responsive: r = !1,
  heading: i,
  headingLevel: c = 3,
  panel: o = !1,
  panelClasses: u,
  tableClasses: g,
  classes: f,
  attributes: h,
  "data-testid": m,
  columns: I,
  data: p,
  visuallyHiddenCaption: k = !1
}) => {
  const v = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), N = E(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": r
    },
    g
  ), L = E(f), w = (d, x) => {
    const C = E(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${d.format}`]: d.format
      },
      d.classes
    ), T = {
      scope: "col",
      ...d.colspan && { colSpan: d.colspan },
      ...d.rowspan && { rowSpan: d.rowspan },
      ...r && { role: "columnheader" },
      ...d.attributes
    };
    let j;
    if (d.node != null)
      j = /* @__PURE__ */ e.createElement(e.Fragment, null, d.node);
    else if (d.html)
      j = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: d.html } });
    else if (d.code != null) {
      const A = Array.isArray(d.code), z = A ? d.code.join(`
`) : d.code, B = A || z.includes(`
`), y = {
        className: E("nhsuk-table__code", d.codeClassName, {
          "nhsuk-table__code--block": B,
          "nhsuk-table__code--inline": !B
        }),
        ...d.codeLanguage ? { "data-language": d.codeLanguage } : {}
      }, Z = W(z, d.codeLanguage);
      j = B ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...y,
          dangerouslySetInnerHTML: { __html: Z }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...y,
          dangerouslySetInnerHTML: { __html: Z }
        }
      );
    } else
      j = d.text;
    return /* @__PURE__ */ e.createElement("th", { key: x, className: C, ...T }, j);
  }, M = (d, x, C) => {
    const T = l && C || d.rowHeader, j = E(
      T ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${T ? "header" : "cell"}--${d.format}`]: d.format
      },
      d.classes
    ), A = {
      ...T && { scope: "row" },
      ...d.colspan && { colSpan: d.colspan },
      ...d.rowspan && { rowSpan: d.rowspan },
      ...r && {
        role: T ? "rowheader" : "cell",
        ...d.header && { "data-label": d.header }
      },
      ...d.attributes
    };
    let z;
    if (d.node != null)
      z = /* @__PURE__ */ e.createElement(e.Fragment, null, d.node);
    else if (d.html)
      z = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: d.html } });
    else if (d.code != null) {
      const Z = Array.isArray(d.code), U = Z ? d.code.join(`
`) : d.code, O = Z || U.includes(`
`), Q = {
        className: E("nhsuk-table__code", d.codeClassName, {
          "nhsuk-table__code--block": O,
          "nhsuk-table__code--inline": !O
        }),
        ...d.codeLanguage ? { "data-language": d.codeLanguage } : {}
      }, R = W(
        U,
        d.codeLanguage,
        d.disableHighlight
      );
      z = O ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
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
      z = d.text;
    const B = /* @__PURE__ */ e.createElement(e.Fragment, null, r && d.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, d.header, " "), z), y = T ? "th" : "td";
    return /* @__PURE__ */ e.createElement(y, { key: x, className: j, ...A }, B);
  };
  let _ = t, D = a;
  !_ && I && I.length && (_ = I.map((d) => ({
    text: d.title,
    format: d.format,
    classes: d.headerClasses,
    attributes: d.headerAttributes
  }))), !D && I && p && p.length && (D = p.map((d, x) => I.map((C) => {
    const T = C.accessor ? C.accessor(d, x) : d[C.key];
    let j = { format: C.format, classes: C.cellClasses, attributes: C.cellAttributes };
    if (C.rowHeader && (j.rowHeader = !0), C.render) {
      const A = C.render(T, d, x, C);
      return A == null || typeof A == "boolean" ? { ...j, text: "" } : typeof A == "string" || typeof A == "number" ? { ...j, text: String(A) } : { ...j, ...A };
    }
    return { ...j, text: T != null ? String(T) : "" };
  })));
  const b = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: N,
      ...r && { role: "table" },
      ...h,
      ...m && { "data-testid": m }
    },
    s && /* @__PURE__ */ e.createElement("caption", { className: E(v, k && "nhsuk-u-visually-hidden") }, s),
    _ && _.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...r && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...r && { role: "row" } }, _.map(
        (d, x) => w(d, x)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, D && D.map((d, x) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: x,
        className: "nhsuk-table__row",
        ...r && { role: "row" }
      },
      d.map(
        (C, T) => M(C, T, T === 0)
      )
    )))
  );
  return o ? /* @__PURE__ */ e.createElement(He, { className: u }, i && /* @__PURE__ */ e.createElement(H, { level: c, className: "nhsuk-table__heading-tab" }, i), b()) : L ? /* @__PURE__ */ e.createElement("div", { className: L }, b()) : b();
}, Ye = ({
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
}, ue = ({
  responsive: a,
  className: t,
  children: s,
  ...n
}) => {
  const l = a ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: t, ...l, ...n }, s);
}, me = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: l,
  codeClassName: r,
  disableHighlight: i,
  format: c,
  classes: o,
  colspan: u,
  rowspan: g,
  attributes: f,
  responsive: h,
  as: m = "th"
}) => {
  const I = E(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${c}`]: c },
    o
  ), p = {
    scope: "col",
    ...u && { colSpan: u },
    ...g && { rowSpan: g },
    ...h && { role: "columnheader" },
    ...f
  };
  let k;
  if (s != null) k = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) k = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const N = Array.isArray(n), L = N ? n.join(`
`) : n, w = N || L.includes(`
`), M = {
      className: E("nhsuk-table__code", r, {
        "nhsuk-table__code--block": w,
        "nhsuk-table__code--inline": !w
      }),
      ...l ? { "data-language": l } : {}
    }, _ = W(
      L,
      l,
      i
    );
    k = w ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...M,
        dangerouslySetInnerHTML: { __html: _ }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...M, dangerouslySetInnerHTML: { __html: _ } });
  } else k = a;
  const v = m;
  return /* @__PURE__ */ e.createElement(v, { className: I, ...p }, k);
}, Ve = ({
  text: a,
  html: t,
  node: s,
  code: n,
  codeLanguage: l,
  codeClassName: r,
  disableHighlight: i,
  format: c,
  classes: o,
  colspan: u,
  rowspan: g,
  attributes: f,
  responsive: h,
  rowHeader: m
}) => {
  const I = !!m, p = I ? "th" : "td", k = E(
    I ? "nhsuk-table__header" : "nhsuk-table__cell",
    c && `nhsuk-table__${I ? "header" : "cell"}--${c}`,
    o
  ), v = {
    ...u && { colSpan: u },
    ...g && { rowSpan: g },
    ...I && { scope: "row" },
    ...h && { role: I ? "rowheader" : "cell" },
    ...f
  };
  let N;
  if (s != null) N = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (t) N = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } });
  else if (n != null) {
    const L = Array.isArray(n), w = L ? n.join(`
`) : n, M = L || w.includes(`
`), _ = {
      className: E("nhsuk-table__code", r, {
        "nhsuk-table__code--block": M,
        "nhsuk-table__code--inline": !M
      }),
      ...l ? { "data-language": l } : {}
    }, D = W(w, l, i);
    N = M ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ..._, dangerouslySetInnerHTML: { __html: D } })) : /* @__PURE__ */ e.createElement("code", { ..._, dangerouslySetInnerHTML: { __html: D } });
  } else N = a;
  return /* @__PURE__ */ e.createElement(p, { className: k, ...v }, N);
}, P = Fe;
P.Caption = Ye;
P.BodyRow = ue;
P.HeaderCell = me;
P.Cell = Ve;
let te = !1, ne = !1;
Object.defineProperty(P, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !te && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), te = !0), ue;
  }
});
Object.defineProperty(P, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ne && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), ne = !0), me;
  }
});
const $e = ({
  heading: a,
  headingLevel: t = 1,
  headingClasses: s = "",
  text: n,
  html: l,
  imageURL: r,
  containerClasses: i = "",
  classes: c = "",
  children: o,
  ...u
}) => {
  const g = [
    "nhsuk-hero",
    r && a ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    r && !a ? "nhsuk-hero--image" : "",
    c
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    i,
    r ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    s,
    !o && !n && !l ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), m = o || a || n || l, I = () => {
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
      style: r ? { backgroundImage: `url('${r}')` } : void 0,
      role: "banner",
      ...u
    },
    r && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, m && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, I(), o || (l ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: l } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !r && m && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, I(), o || (l ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: l } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
$e.displayName = "Hero";
const Xe = e.forwardRef(({
  variant: a = "default",
  heading: t,
  headingHtml: s,
  headingLevel: n = 2,
  headingClasses: l,
  description: r,
  descriptionHtml: i,
  href: c,
  imgURL: o,
  imgAlt: u,
  ...g
}, f) => {
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
    l
  ].filter(Boolean).join(" "), p = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const N = () => c && a !== "feature" ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-card__link", href: c }, t) : t;
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: I
      },
      N()
    );
  }, k = () => g.children ? g.children : i ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: i } }) : r ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, r) : null, v = () => a !== "primary" ? null : /* @__PURE__ */ e.createElement(
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
      ref: f
    },
    o && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: o,
        alt: u || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: m }, p(), k(), v())
  );
});
Xe.displayName = "Card";
const _a = ({
  className: a,
  children: t,
  "data-testid": s,
  id: n
}) => {
  const l = ["nhsuk-card-group", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "ul",
    {
      className: l,
      "data-testid": s,
      id: n
    },
    t
  );
}, va = ({
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
}, La = ({
  type: a,
  heading: t,
  headingHtml: s,
  headingLevel: n = 3,
  headingClasses: l,
  description: r,
  descriptionHtml: i,
  className: c,
  children: o,
  "data-testid": u,
  id: g,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": m
}) => {
  const I = [
    "nhsuk-care-card",
    `nhsuk-care-card--${a}`,
    c
  ].filter(Boolean).join(" "), p = [
    "nhsuk-care-card__heading",
    l
  ].filter(Boolean).join(" "), k = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!t) return null;
    const N = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[a], L = /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, N, " "), t);
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: p
      },
      L
    );
  }, v = () => o || (i ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: i } }) : r ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, r) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: I,
      "data-testid": u,
      id: g,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": m
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, k(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, v())
  );
};
function Ke(a) {
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
    value: l,
    defaultValue: r,
    placeholder: i,
    disabled: c = !1,
    readOnly: o = !1,
    required: u = !1,
    hasError: g = !1,
    describedBy: f,
    className: h,
    width: m = "full",
    inputMode: I,
    autoComplete: p,
    maxLength: k,
    minLength: v,
    pattern: N,
    step: L,
    min: w,
    max: M,
    showValueLabels: _ = !1,
    showCurrentValue: D = !1,
    valueLabels: b,
    // Strip interactive handlers in server variant
    onChange: d,
    onBlur: x,
    onFocus: C,
    onKeyDown: T,
    ...j
  } = a, { classes: A, isRange: z } = Ke({
    type: n,
    hasError: g,
    width: m,
    className: h
  }), B = {
    id: t,
    name: s,
    type: n,
    placeholder: i,
    disabled: c,
    readOnly: o,
    required: u,
    "aria-describedby": f,
    inputMode: I,
    autoComplete: p,
    maxLength: k,
    minLength: v,
    pattern: N,
    step: L,
    min: w,
    max: M,
    ...j
  };
  if (z) {
    const y = l ?? r ?? (typeof w < "u" ? String(w) : "0"), Z = /* @__PURE__ */ e.createElement(
      "input",
      {
        className: A,
        ...l !== void 0 ? { value: l } : {},
        ...l === void 0 && r !== void 0 ? { defaultValue: r } : {},
        "data-current-value": y,
        ...B
      }
    );
    return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-wrapper" }, _ ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-labels" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min" }, b?.min || w || "0"), Z, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max" }, b?.max || M || "100")) : Z, D && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-current-value" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-current-label" }, b?.current || "Current value:", " ", /* @__PURE__ */ e.createElement("strong", null, y))));
  }
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: A,
      ...l !== void 0 ? { value: l } : {},
      ...l === void 0 && r !== void 0 ? { defaultValue: r } : {},
      ...B
    }
  );
}
function qe(a) {
  const t = a.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    a.hasError ? "nhsuk-textarea--error" : "",
    t !== "vertical" ? `nhsuk-textarea--resize-${t}` : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
const wa = ({
  id: a,
  name: t,
  value: s,
  defaultValue: n,
  placeholder: l,
  disabled: r = !1,
  readOnly: i = !1,
  required: c = !1,
  hasError: o = !1,
  describedBy: u,
  className: g,
  rows: f = 5,
  cols: h,
  maxLength: m,
  minLength: I,
  wrap: p = "soft",
  resize: k = "vertical",
  autoComplete: v,
  spellCheck: N,
  onChange: L,
  onBlur: w,
  onFocus: M,
  onKeyDown: _,
  ...D
}) => {
  const { classes: b, describedBy: d } = qe({ hasError: o, resize: k, className: g, describedBy: u });
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: b,
      id: a,
      name: t,
      value: s,
      defaultValue: n,
      placeholder: l,
      disabled: r,
      readOnly: i,
      required: c,
      "aria-describedby": d,
      rows: f,
      cols: h,
      maxLength: m,
      minLength: I,
      wrap: p,
      autoComplete: v,
      spellCheck: N,
      onChange: L,
      onBlur: w,
      onFocus: M,
      onKeyDown: _,
      ...D
    }
  );
};
function ea(a) {
  return { classes: [
    "nhsuk-select",
    a.hasError ? "nhsuk-select--error" : "",
    a.className || ""
  ].filter(Boolean).join(" ") };
}
const aa = ({
  value: a,
  disabled: t = !1,
  selected: s = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: n,
  children: l,
  ...r
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
      ...r
    },
    l
  );
}, ta = ({
  id: a,
  name: t,
  ariaLabel: s,
  value: n,
  defaultValue: l,
  disabled: r = !1,
  required: i = !1,
  hasError: c = !1,
  describedBy: o,
  className: u,
  multiple: g = !1,
  size: f,
  autoComplete: h,
  options: m,
  children: I,
  onChange: p,
  onBlur: k,
  onFocus: v,
  ...N
}) => {
  const { classes: L } = ea({ hasError: c, className: u }), w = () => m ? m.map((_, D) => /* @__PURE__ */ e.createElement(
    "option",
    {
      key: `${_.value}-${D}`,
      value: _.value,
      disabled: _.disabled,
      "data-initial-selected": _.selected || void 0
    },
    _.text
  )) : null, M = l === void 0 && n === void 0 && m ? m.find((_) => _.selected)?.value : void 0;
  return /* @__PURE__ */ e.createElement(
    "select",
    {
      className: L,
      id: a,
      name: t,
      "aria-label": s,
      value: n,
      defaultValue: l !== void 0 ? l : M,
      disabled: r,
      required: i,
      "aria-describedby": o,
      multiple: g,
      size: f,
      autoComplete: h,
      onChange: p,
      onBlur: k,
      onFocus: v,
      ...N
    },
    I || w()
  );
}, na = ta;
na.Option = aa;
function Ca({
  id: a,
  className: t,
  items: s,
  namePrefix: n,
  values: l = {},
  fieldset: r,
  hint: i,
  errorMessage: c,
  // strip interactive props
  onChange: o,
  ...u
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
  let h = r?.describedBy || "";
  const m = i ? `${a}-hint` : "", I = c ? `${a}-error` : "";
  m && (h = h ? `${h} ${m}` : m), I && (h = h ? `${h} ${I}` : I);
  const p = E("nhsuk-form-group", {
    "nhsuk-form-group--error": !!c
  }), k = E("nhsuk-date-input", t), v = () => /* @__PURE__ */ e.createElement(e.Fragment, null, i && /* @__PURE__ */ e.createElement(je, { id: m, className: i.classes }, i.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text), c && /* @__PURE__ */ e.createElement(ze, { id: I, className: c.classes }, c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: k,
      id: a,
      "data-testid": "date-input",
      ...u
    },
    f.map((N) => {
      const L = N.id || `${a}-${N.name}`, w = n ? `${n}[${N.name}]` : N.name, M = N.label || N.name.charAt(0).toUpperCase() + N.name.slice(1), _ = l[N.name];
      return /* @__PURE__ */ e.createElement("div", { key: N.name, className: "nhsuk-date-input__item" }, /* @__PURE__ */ e.createElement(K, { htmlFor: L, className: "nhsuk-date-input__label" }, M), /* @__PURE__ */ e.createElement(
        ee,
        {
          id: L,
          name: w,
          defaultValue: _,
          className: E("nhsuk-date-input__input", N.classes),
          inputMode: N.inputmode,
          autoComplete: N.autocomplete,
          pattern: N.pattern,
          "aria-describedby": h || void 0
        }
      ));
    })
  ));
  return /* @__PURE__ */ e.createElement("div", { className: p }, r ? /* @__PURE__ */ e.createElement(
    q,
    {
      className: r.classes,
      legend: r.legend ? { text: r.legend } : void 0,
      describedBy: h || void 0
    },
    v()
  ) : v());
}
function Da({
  titleText: a = "There is a problem",
  titleHtml: t,
  descriptionText: s,
  descriptionHtml: n,
  errorList: l,
  className: r,
  children: i,
  ...c
}) {
  const o = E("nhsuk-error-summary", r), u = () => t ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: t } }) : a, g = () => n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s, f = (h) => {
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
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title" }, u()),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__body" }, i && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, i), !i && (s || n) && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, g()), /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list" }, l.map((h, m) => /* @__PURE__ */ e.createElement("li", { key: m }, f(h)))))
  );
}
function sa(a) {
  return { classes: [
    "nhsuk-radios",
    a.hasError ? "nhsuk-radios--error" : "",
    a.size === "small" ? "nhsuk-radios--small" : "",
    a.inline ? "nhsuk-radios--inline" : "",
    a.className || ""
  ].filter(Boolean).join(" "), describedBy: a.describedBy };
}
function ra(a, {
  variant: t,
  selectedValue: s,
  enableBehaviourAttr: n,
  handleChange: l,
  handleBlur: r,
  handleFocus: i,
  handleKeyDown: c,
  itemsRef: o,
  InputComponent: u
}) {
  const {
    onChange: g,
    onBlur: f,
    onFocus: h,
    ...m
  } = a, {
    name: I,
    hasError: p = !1,
    describedBy: k,
    className: v,
    size: N = "normal",
    inline: L = !1,
    options: w,
    ...M
  } = m, { classes: _, describedBy: D } = sa({ hasError: p, size: N, inline: L, className: v, describedBy: k });
  return /* @__PURE__ */ e.createElement(q, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: _,
      ...M,
      "data-nhs-behaviour": "radios"
    },
    w.map((b, d) => {
      const x = `${I}-${d}`, C = b.conditional ? `${x}-conditional` : void 0, T = s === b.value;
      return /* @__PURE__ */ e.createElement("div", { key: b.value, className: "nhsuk-radios__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-radios__input",
          id: x,
          name: I,
          type: "radio",
          value: b.value,
          disabled: b.disabled,
          defaultChecked: T,
          "data-nhs-radios-input": !0,
          "aria-describedby": D
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-radios__label", htmlFor: x }, b.text), b.hint && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-radios__hint" }, b.hint), b.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: E("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !T
          }),
          id: C,
          "data-nhs-radios-conditional": !0
        },
        typeof b.conditional == "object" && b.conditional !== null && "label" in b.conditional && "id" in b.conditional && "name" in b.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, b.conditional.label && /* @__PURE__ */ e.createElement(
          K,
          {
            htmlFor: b.conditional.id
          },
          b.conditional.label
        ), /* @__PURE__ */ e.createElement(
          u,
          {
            ...b.conditional
          }
        )) : b.conditional
      ));
    })
  ));
}
const xa = ({ value: a, defaultValue: t, ...s }) => {
  const n = a || t || "";
  return ra(
    { value: a, defaultValue: t, ...s },
    {
      variant: "server",
      selectedValue: n,
      enableBehaviourAttr: !0,
      InputComponent: ee
    }
  );
};
function la(a) {
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
function Sa(a) {
  const {
    items: t,
    name: s,
    idPrefix: n,
    legend: l,
    isPageHeading: r = !1,
    legendSize: i = "l",
    hint: c,
    errorMessage: o,
    className: u = "",
    small: g = !1,
    // Strip interactive handler in server variant
    onChange: f,
    fieldsetAttributes: h,
    attributes: m,
    ...I
  } = a, p = n || s, k = c ? `${p}-hint` : void 0, v = o ? `${p}-error` : void 0, N = [k, v].filter(Boolean).join(" ") || void 0, { classes: L, formGroupClasses: w } = la({ small: g, className: u, hasError: !!o });
  return /* @__PURE__ */ e.createElement("div", { className: w, ...m, ...I }, /* @__PURE__ */ e.createElement(
    q,
    {
      legend: l ? { text: l, isPageHeading: r, size: i } : void 0,
      describedBy: N,
      ...h
    },
    c && /* @__PURE__ */ e.createElement("div", { id: k, className: "nhsuk-hint" }, c),
    o && /* @__PURE__ */ e.createElement("div", { id: v, className: "nhsuk-error-message" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Error:"), " ", o),
    /* @__PURE__ */ e.createElement("div", { className: L, "data-nhs-behaviour": "checkboxes" }, t.map((M, _) => {
      const D = `${p}-${_ + 1}`, b = `${D}-conditional`, d = !!M.checked, x = !!M.disabled;
      return /* @__PURE__ */ e.createElement("div", { key: M.value, className: "nhsuk-checkboxes__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: D,
          name: s,
          type: "checkbox",
          value: M.value,
          ...d ? { defaultChecked: !0 } : {},
          disabled: x,
          "aria-describedby": M.hint ? `${D}-hint` : N,
          ...M.conditional && {
            "aria-controls": b,
            "aria-expanded": d ? "true" : "false"
          },
          ...M.attributes
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-checkboxes__label", htmlFor: D }, M.text), M.hint && /* @__PURE__ */ e.createElement("div", { id: `${D}-hint`, className: "nhsuk-checkboxes__hint" }, M.hint), M.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: E("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !d
          }),
          id: b,
          "data-nhs-checkboxes-conditional": !0
        },
        typeof M.conditional == "object" && M.conditional !== null && "label" in M.conditional && "id" in M.conditional && "name" in M.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, M.conditional.label && /* @__PURE__ */ e.createElement(K, { htmlFor: M.conditional.id }, M.conditional.label), /* @__PURE__ */ e.createElement(ee, { ...M.conditional })) : M.conditional
      ));
    }))
  ));
}
function $(a, t) {
  if (!a || a.hidden) return null;
  const { href: s, label: n, variant: l, disabled: r, type: i } = a, c = { variant: l, disabled: r };
  return s ? /* @__PURE__ */ e.createElement(X, { href: s, ...c }, n || t) : /* @__PURE__ */ e.createElement(X, { type: i === "button" ? "button" : "submit", ...c }, n || t);
}
const Ta = ({
  back: a,
  startAgain: t,
  next: s,
  flipOrderOnMobile: n = !0,
  className: l
}) => {
  const r = !!a && !a.hidden, i = !!t && !t.hidden, c = !!s && !s.hidden, o = [r, i, c].filter(Boolean).length, u = F.OneHalf, g = F.OneThird;
  return /* @__PURE__ */ e.createElement(
    pe,
    {
      className: E("nhs-form-nav", l, {
        "nhs-form-nav--flip-mobile": n
      })
    },
    r && /* @__PURE__ */ e.createElement(Y, { width: o === 2 ? u : g, className: "nhs-form-nav__back" }, $(a, "Back")),
    i && /* @__PURE__ */ e.createElement(
      Y,
      {
        width: o === 2 ? u : g,
        align: o === 2 ? V.Right : V.Center,
        className: "nhs-form-nav__start-again"
      },
      $(t, "Start again")
    ),
    c && /* @__PURE__ */ e.createElement(
      Y,
      {
        width: !r && !i ? F.Full : o === 2 ? u : g,
        align: V.Right,
        className: "nhs-form-nav__next"
      },
      $(s, "Next")
    )
  );
};
export {
  da as ActionLink,
  ua as BackLink,
  le as BrandKey,
  Oe as Breadcrumb,
  za as Breakpoint,
  X as ButtonServer,
  oe as ButtonSize,
  ie as ButtonVariant,
  Xe as Card,
  _a as CardGroup,
  va as CardGroupItem,
  La as CareCard,
  Sa as Checkboxes,
  Y as Column,
  V as ColumnAlign,
  he as Container,
  fa as ContentsList,
  Ca as DateInput,
  Be as Details,
  Re as DoDontList,
  ze as ErrorMessage,
  Da as ErrorSummary,
  q as Fieldset,
  Za as Float,
  pa as Footer,
  Ta as FormNavButtonBar,
  Ba as Grid,
  F as GridWidth,
  oa as Header,
  H as Heading,
  $e as Hero,
  je as Hint,
  ba as Images,
  ee as Input,
  ha as InsetText,
  K as Label,
  Qe as List,
  ce as LogoVariant,
  Ea as MetricCard,
  Ia as Pagination,
  He as Panel,
  xa as Radios,
  pe as Row,
  na as Select,
  aa as SelectOption,
  ga as SkipLink,
  Ha as SpacingUtilities,
  ya as SummaryCard,
  Ma as SummaryList,
  P as Table,
  ue as TableBodyRow,
  Ye as TableCaption,
  Ve as TableCell,
  me as TableHeaderCell,
  ma as Tag,
  wa as Textarea,
  Na as WarningCallout,
  ka as WidthContainer,
  _e as brandLogos,
  ve as getBrandLogo,
  Pa as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
