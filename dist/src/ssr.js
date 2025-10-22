import * as S from "react";
import e, { createElement as ce, forwardRef as ie } from "react";
import { c as w, C as Ne, b as $, R as ke, a as V, d as X } from "../SkipLink-BE-cc-Aq.js";
import { B as Ut, F as Qt, G as Rt, S as Wt, g as Ft } from "../SkipLink-BE-cc-Aq.js";
const be = ({
  ariaLabel: t = "Account",
  items: a = [],
  className: s,
  variant: n = "default"
}) => {
  if (!a || a.length === 0)
    return null;
  const l = (r) => {
    const c = r.icon ? /* @__PURE__ */ e.createElement(
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
    ) : null, i = r.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: r.html } }) : r.text, o = /* @__PURE__ */ e.createElement(e.Fragment, null, c, i);
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
      className: w(
        "nhsuk-account",
        {
          "nhsuk-account--white": n === "white"
        },
        s
      ),
      "aria-label": t
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-account__list" }, a.map(
      (r, c) => r && /* @__PURE__ */ e.createElement(
        "li",
        {
          key: c,
          className: w(
            "nhsuk-account__item nhsuk-header__account-item",
            r.className
          )
        },
        l(r)
      )
    ))
  );
}, ye = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", Ee = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", Me = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Ie = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", _e = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", ve = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Le = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var oe = /* @__PURE__ */ ((t) => (t.NHS = "nhs", t.FDP = "fdp", t))(oe || {}), de = /* @__PURE__ */ ((t) => (t.Full = "full", t.Graphic = "graphic", t.Inverse = "inverse", t.TwoLine = "twoLine", t.TwoLineInverse = "twoLineInverse", t.Compact = "compact", t.CompactInverted = "compactInverted", t))(de || {});
const we = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: ye,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: _e,
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
      src: Ee,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: Me,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: ve,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Le,
      ariaLabel: "FDP"
    }
  }
};
function xe(t, a = "full") {
  return we[t]?.[a];
}
function Ce(t, { variant: a, isClient: s, brand: n }) {
  const {
    className: l,
    logo: r = {},
    service: c = {},
    serviceName: i,
    organisation: o,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: m,
    navigation: d,
    containerClasses: f,
    variant: h = "default",
    attributes: u = {},
    maxVisibleItems: p,
    // deprecated (ignored)
    responsiveNavigation: k = !0,
    // Consume logoVariant for server-side logo selection while preventing DOM leakage via ...rest
    logoVariant: E = de.Full,
    ...M
  } = t;
  "maxVisibleItems" in M && delete M.maxVisibleItems;
  const b = {
    ...c,
    text: c?.text ?? i
  }, _ = b.href && !r.href || b.href && b.href === r.href, x = _ ? b.href : r.href, N = w(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": h === "organisation" || o,
      "nhsuk-header--white": h === "white"
    },
    l
  ), I = w(
    "nhsuk-header__container",
    f
  ), v = w(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": d?.white,
      "nhsuk-header__navigation--justified": d?.justified
    },
    d?.className
  ), y = n === "fdp" ? "fdp" : "nhs", g = () => /* @__PURE__ */ e.createElement(
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
  ), C = () => {
    if (r.src)
      return /* @__PURE__ */ e.createElement(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: r.src,
          width: "280",
          alt: r.ariaLabel || (y === "fdp" ? "FDP" : "NHS")
        }
      );
    if (y === "fdp") {
      const L = xe(oe.FDP, E);
      if (L?.src)
        return /* @__PURE__ */ e.createElement(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: L.src,
            "data-logo-variant": E,
            width: "280",
            alt: L.ariaLabel || "FDP"
          }
        );
    }
    return g();
  }, D = () => o ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, o.name, o.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", o.split)), o.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, o.descriptor)) : null, j = (L, B) => L ? B ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: B }, L) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, L) : null, T = (L) => L.active || L.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, L.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: L.html } }) : L.text) : L.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: L.html } }) : L.text, A = d?.items && !k, z = A ? [] : d?.items, Z = A ? d.items : [];
  return /* @__PURE__ */ e.createElement(
    "header",
    {
      className: N,
      role: "banner",
      "data-module": "nhsuk-header",
      ...u,
      ...M
    },
    /* @__PURE__ */ e.createElement("div", { className: I }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, x ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: x }, C(), D(), _ && j(b.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, C(), D(), _ && j(b.text)), b.text && !_ && j(b.text, b.href)), /* @__PURE__ */ e.createElement(
      be,
      {
        ...m,
        variant: h === "white" ? "white" : "default"
      }
    )),
    d && d.items && d.items.length > 0 && /* @__PURE__ */ e.createElement(
      "nav",
      {
        className: v,
        "aria-label": d.ariaLabel || "Menu"
      },
      /* @__PURE__ */ e.createElement(
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
        /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, (z || []).map((L, B) => /* @__PURE__ */ e.createElement(
          "li",
          {
            key: B,
            className: w(
              "nhsuk-header__navigation-item",
              {
                "nhsuk-header__navigation-item--current": L.active || L.current
              },
              L.className
            ),
            ...L.attributes || {}
          },
          /* @__PURE__ */ e.createElement(
            "a",
            {
              className: "nhsuk-header__navigation-link",
              href: L.href,
              ...L.active || L.current ? { "aria-current": L.current ? "page" : "true" } : {}
            },
            T(L)
          )
        )))
      )
    ),
    A && Z.length > 0 && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__dropdown-menu", "data-ssr-overflow": "true" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__dropdown-list" }, Z.map((L, B) => /* @__PURE__ */ e.createElement(
      "li",
      {
        key: `overflow-server-${B}`,
        className: w("nhsuk-header__dropdown-item", {
          "nhsuk-header__dropdown-item--current": L.active || L.current
        })
      },
      /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-header__dropdown-link",
          href: L.href,
          ...L.active || L.current ? { "aria-current": L.current ? "page" : "true" } : {}
        },
        T(L)
      )
    ))))
  );
}
const pt = (t) => {
  const a = t.attributes?.["data-brand"];
  return Ce(t, {
    variant: "server",
    isClient: !1,
    brand: a === "fdp" || a === "nhs" ? a : void 0
  });
}, ft = ({
  text: t,
  href: a,
  openInNewWindow: s = !1,
  className: n,
  ...l
}) => {
  const r = w(
    "nhsuk-action-link__link",
    n
  );
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-action-link" }, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: r,
      href: a,
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
    /* @__PURE__ */ e.createElement("span", { className: "nhsuk-action-link__text" }, t)
  ));
};
function De(t) {
  const a = t.variant || "primary", s = t.size || "default", n = !!t.fullWidth, l = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    s !== "default" ? `nhs-aria-button--${s}` : "",
    n ? "nhs-aria-button--full-width" : "",
    t.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: t.href ? "a" : "button",
    classes: l,
    data: { module: "nhs-button" },
    attrs: t.href ? { href: t.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!t.preventDoubleClick
  };
}
var ue = /* @__PURE__ */ ((t) => (t.Primary = "primary", t.Secondary = "secondary", t.Reverse = "reverse", t.Warning = "warning", t.Login = "login", t.Metric = "metric", t))(ue || {}), me = /* @__PURE__ */ ((t) => (t.Small = "small", t.Default = "default", t.Large = "large", t))(me || {});
const ee = S.forwardRef(function(a, s) {
  const {
    children: n,
    variant: l = ue.Primary,
    size: r = me.Default,
    fullWidth: c = !1,
    className: i = "",
    preventDoubleClick: o = !1,
    ...m
  } = a, d = De({
    variant: l,
    size: r,
    fullWidth: c,
    className: i,
    href: "href" in m ? m.href : void 0,
    preventDoubleClick: o
  });
  if ("href" in m && m.href) {
    const z = m, {
      id: Z,
      style: L,
      title: B,
      ["aria-label"]: R,
      ["aria-describedby"]: O,
      ["aria-labelledby"]: W,
      tabIndex: F,
      ...fe
    } = z;
    return /* @__PURE__ */ S.createElement(
      "a",
      {
        ref: s,
        href: z.href,
        target: z.target,
        rel: z.rel,
        className: d.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...o && { "data-prevent-double-click": "true" },
        id: Z,
        style: L,
        title: B,
        "aria-label": R,
        "aria-describedby": O,
        "aria-labelledby": W,
        tabIndex: F,
        ...fe
      },
      n
    );
  }
  const f = m, {
    id: h,
    style: u,
    title: p,
    ["aria-label"]: k,
    ["aria-describedby"]: E,
    ["aria-labelledby"]: M,
    tabIndex: b,
    name: _,
    value: x,
    form: N,
    formAction: I,
    formEncType: v,
    formMethod: y,
    formNoValidate: g,
    formTarget: C,
    autoFocus: D,
    type: j,
    disabled: T,
    ...A
  } = f;
  return /* @__PURE__ */ S.createElement(
    "button",
    {
      ref: s,
      type: j || "button",
      disabled: T,
      className: d.classes,
      "data-module": "nhs-button",
      ...o && { "data-prevent-double-click": "true" },
      id: h,
      style: u,
      title: p,
      "aria-label": k,
      "aria-describedby": E,
      "aria-labelledby": M,
      tabIndex: b,
      name: _,
      value: x,
      form: N,
      formAction: I,
      formEncType: v,
      formMethod: y,
      formNoValidate: g,
      formTarget: C,
      autoFocus: D,
      ...A
    },
    n
  );
});
ee.displayName = "ButtonServer";
const Nt = ({
  text: t = "Back",
  html: a,
  href: s = "#",
  className: n,
  element: l = "a",
  onClick: r,
  ...c
}) => {
  const i = w(
    "nhsuk-back-link",
    n
  ), o = w(
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
  ), a ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } }) : t);
  return /* @__PURE__ */ e.createElement("div", { className: i }, l === "button" ? /* @__PURE__ */ e.createElement(
    "button",
    {
      className: o,
      onClick: r,
      type: "button",
      ...c
    },
    m()
  ) : /* @__PURE__ */ e.createElement(
    "a",
    {
      className: o,
      href: s,
      ...c
    },
    m()
  ));
};
function Se(t) {
  const { color: a = "default", noBorder: s, closable: n, disabled: l, className: r } = t;
  return { classes: [
    "nhsuk-tag",
    a !== "default" ? `nhsuk-tag--${a}` : "",
    s ? "nhsuk-tag--no-border" : "",
    n ? "nhsuk-tag--closable" : "",
    l ? "nhsuk-tag--disabled" : "",
    r || ""
  ].filter(Boolean).join(" "), showClose: !!n, disabled: !!l };
}
const kt = ({
  text: t,
  html: a,
  children: s,
  color: n = "default",
  noBorder: l = !1,
  closable: r = !1,
  onClose: c,
  disabled: i = !1,
  className: o,
  ...m
}) => {
  const d = Se({ color: n, noBorder: l, closable: r, disabled: i, className: o }), f = (h) => {
    h.preventDefault(), h.stopPropagation(), !i && c && c();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: d.classes, ...m }, s || (a ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } }) : t), r && /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "nhsuk-tag__close",
      onClick: f,
      disabled: i,
      "aria-label": "Remove",
      title: "Remove"
    },
    "×"
  ));
};
function je(t) {
  const a = t.size || "m", s = [
    "nhsuk-label",
    a !== "m" ? `nhsuk-label--${a}` : "",
    t.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: t.isPageHeading ? "h1" : "label",
    classes: s,
    size: a,
    htmlFor: t.isPageHeading ? void 0 : t.htmlFor,
    isPageHeading: !!t.isPageHeading
  };
}
const te = ({
  htmlFor: t,
  className: a,
  isPageHeading: s = !1,
  size: n = "m",
  children: l,
  ...r
}) => {
  const c = je({ size: n, isPageHeading: s, className: a, htmlFor: t }), i = c.tag;
  return /* @__PURE__ */ e.createElement(i, { className: c.classes, htmlFor: c.htmlFor, ...r }, s ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: t }, l) : l);
};
function Te(t) {
  switch (t) {
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
function Ae(t) {
  const a = t.level ?? Te(t.size), s = [
    "nhsuk-heading",
    t.size ? `nhsuk-heading--${t.size}` : "",
    t.className || ""
  ].filter(Boolean).join(" "), n = t.marginBottom ? { marginBottom: t.marginBottom } : void 0;
  return { tag: `h${a}`, classes: s, style: n };
}
const H = ({
  level: t,
  className: a,
  text: s,
  html: n,
  children: l,
  size: r,
  marginBottom: c,
  ...i
}) => {
  const o = Ae({ level: t, size: r, className: a, marginBottom: c }), m = l || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s);
  return ce(
    o.tag,
    { className: o.classes, style: o.style, ...i },
    m
  );
};
function ze(t) {
  return { classes: [
    "nhsuk-hint",
    t.className || ""
  ].filter(Boolean).join(" "), id: t.id };
}
const Be = ({
  id: t,
  className: a,
  children: s,
  ...n
}) => {
  const l = ze({ id: t, className: a });
  return /* @__PURE__ */ e.createElement("div", { className: l.classes, id: l.id, ...n }, s);
};
function Ze(t) {
  return {
    classes: ["nhsuk-error-message", t.className || ""].filter(Boolean).join(" "),
    id: t.id,
    visuallyHiddenText: t.visuallyHiddenText ?? "Error:"
  };
}
const He = ({ id: t, className: a, visuallyHiddenText: s = "Error:", children: n, ...l }) => {
  const r = Ze({ id: t, className: a, visuallyHiddenText: s });
  return /* @__PURE__ */ e.createElement("span", { className: r.classes, id: r.id, ...l }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, r.visuallyHiddenText, " "), n);
};
function Pe(t) {
  const a = ["nhsuk-fieldset", t.className || ""].filter(Boolean).join(" "), s = t.legend ? [
    "nhsuk-fieldset__legend",
    t.legend.size ? `nhsuk-fieldset__legend--${t.legend.size}` : "",
    t.legend.className || ""
  ].filter(Boolean).join(" ") : void 0;
  return {
    fieldsetClasses: a,
    legendClasses: s,
    legendIsPageHeading: !!t.legend?.isPageHeading,
    describedBy: t.describedBy
  };
}
const ae = ({
  children: t,
  legend: a,
  className: s,
  describedBy: n,
  ...l
}) => {
  const r = Pe({
    className: s,
    describedBy: n,
    legend: a ? {
      size: a.size,
      className: a.className,
      isPageHeading: a.isPageHeading
    } : void 0
  }), c = () => {
    const i = a?.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a.html } }) : a?.text;
    return r.legendIsPageHeading ? /* @__PURE__ */ e.createElement("h1", { className: "nhsuk-fieldset__heading" }, i) : i;
  };
  return /* @__PURE__ */ e.createElement(
    "fieldset",
    {
      className: r.fieldsetClasses,
      "aria-describedby": r.describedBy,
      ...l
    },
    a && (a.text || a.html) && /* @__PURE__ */ e.createElement("legend", { className: r.legendClasses }, c()),
    t
  );
}, bt = ({
  text: t = "Skip to main content",
  href: a = "#maincontent",
  classes: s,
  attributes: n = {}
}) => {
  const l = w("nhsuk-skip-link", s);
  return /* @__PURE__ */ e.createElement(
    "a",
    {
      className: l,
      href: a,
      "data-module": "nhsuk-skip-link",
      "data-enhanced": "false",
      ...n
    },
    t
  );
}, Ge = ie(
  ({
    summaryText: t,
    summaryHtml: a,
    text: s,
    html: n,
    open: l = !1,
    className: r = "",
    id: c,
    children: i,
    ...o
  }, m) => {
    const d = [
      "nhsuk-details",
      r
    ].filter(Boolean).join(" "), f = a ? /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: a }
      }
    ) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-details__summary-text" }, t);
    let h;
    return i ? h = i : n ? h = /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s && (h = s), /* @__PURE__ */ e.createElement(
      "details",
      {
        ref: m,
        id: c,
        className: d,
        open: l,
        ...o
      },
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, f),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, h)
    );
  }
);
Ge.displayName = "Details";
const yt = ({
  text: t,
  html: a,
  children: s,
  className: n,
  ...l
}) => {
  const r = w("nhsuk-inset-text", n), c = () => s || (a ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a } }) : t ? /* @__PURE__ */ e.createElement("p", null, t) : null);
  return /* @__PURE__ */ e.createElement("div", { className: r, ...l }, c());
}, Oe = ({
  id: t,
  className: a,
  headingText: s,
  headingHtml: n,
  headingLevel: l = 2,
  bodyText: r,
  bodyHtml: c,
  children: i,
  ...o
}) => {
  const m = w(
    "nhsuk-panel",
    a
  ), d = () => !s && !n && !i ? null : n ? /* @__PURE__ */ e.createElement(
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
  ) : null, f = () => i ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, i) : c ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: c }
    }
  ) : r ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ e.createElement("p", null, r)) : null;
  return /* @__PURE__ */ e.createElement("div", { className: m, id: t, ...o }, d(), f());
}, J = ({
  children: t,
  href: a,
  active: s = !1,
  attributes: n = {}
}) => /* @__PURE__ */ e.createElement("li", { className: "nhsuk-breadcrumb__item" }, s ? /* @__PURE__ */ e.createElement(
  "span",
  {
    className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
    "aria-current": "page",
    ...n
  },
  t
) : /* @__PURE__ */ e.createElement(
  "a",
  {
    className: "nhsuk-breadcrumb__link",
    href: a,
    ...n
  },
  t
)), Ue = ({
  items: t = [],
  children: a,
  classes: s,
  labelText: n = "Breadcrumb",
  href: l,
  text: r,
  reverse: c = !1,
  attributes: i = {}
}) => {
  const o = () => a ? e.Children.toArray(a).filter(
    (E) => e.isValidElement(E) && (E.type === J || E.type?.displayName === "BreadcrumbItem")
  ).map((E) => ({
    text: typeof E.props.children == "string" ? E.props.children : String(E.props.children),
    href: E.props.href,
    active: E.props.active,
    attributes: E.props.attributes
  })) : [], m = () => a ? o() : l && r ? [{ href: l, text: r }] : t, d = () => {
    const k = m();
    if (k && k.length > 0) {
      const E = k.slice().reverse().find((M) => M.href && !M.active);
      if (E)
        return { href: E.href, text: E.text };
    }
    return { text: "Home" };
  }, f = m(), h = d(), u = w(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": c
    },
    s
  ), p = n;
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: u,
      "aria-label": p,
      role: "navigation",
      ...i
    },
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-breadcrumb__list", role: "list" }, a ? (
      // Render children directly if using compound component pattern
      e.Children.map(a, (k, E) => e.isValidElement(k) && (k.type === J || k.type?.displayName === "BreadcrumbItem") ? e.cloneElement(k, { key: E }) : null)
    ) : (
      // Render from items array
      f?.filter((k) => k.active || !!k.href).map((k, E) => /* @__PURE__ */ e.createElement("li", { key: E, className: "nhsuk-breadcrumb__item", role: "listitem" }, k.active ? /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
          "aria-current": "page",
          role: "text",
          ...k.attributes || {}
        },
        k.text
      ) : /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-breadcrumb__link",
          href: k.href,
          role: "link",
          ...k.attributes || {}
        },
        k.text
      )))
    )),
    h.href && /* @__PURE__ */ e.createElement("p", { className: "nhsuk-breadcrumb__back" }, /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-breadcrumb__backlink",
        href: h.href,
        role: "link",
        "aria-label": `Back to ${h.text}`,
        ...t.length > 0 ? t[t.length - 1]?.attributes || {} : {}
      },
      /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Back to  "),
      h.text
    ))
  );
}, Qe = Ue;
Qe.Item = J;
J.displayName = "BreadcrumbItem";
const Re = ({
  children: t,
  type: a = "bullet",
  size: s = "medium",
  border: n = !1,
  className: l,
  role: r,
  as: c,
  ...i
}) => {
  const o = c || (a === "number" ? "ol" : "ul"), m = w(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": a === "bullet",
      "nhsuk-list--number": a === "number",
      "nhsuk-list--none": a === "none",
      "nhsuk-list--border": n,
      [`nhsuk-list--${s}`]: s !== "medium"
    },
    l
  );
  return /* @__PURE__ */ e.createElement(o, { className: m, role: r, ...i }, t);
}, We = ({
  children: t,
  className: a,
  ...s
}) => {
  const n = w("nhsuk-list__item", a);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...s }, t);
}, Fe = Re;
Fe.Item = We;
const Et = ({
  className: t,
  links: a = [],
  linksColumn2: s,
  linksColumn3: n,
  metaLinks: l,
  copyright: r = "© NHS England",
  containerClasses: c,
  attributes: i = {},
  style: o,
  footerStyle: m,
  containerStyle: d
}) => {
  const f = (u, p = !1) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `${u.URL}-${u.label}`,
      className: w("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": p
      })
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-footer__list-item-link",
        href: u.URL,
        target: u.newWindow ? "_blank" : void 0,
        rel: u.newWindow ? "noopener noreferrer" : void 0
      },
      u.label
    )
  ), h = !!(s || n);
  return /* @__PURE__ */ e.createElement("footer", { role: "contentinfo", ...i, style: { ...i?.style, ...o } }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-footer-container" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: w("nhsuk-width-container", c),
      style: d
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Support links"),
    /* @__PURE__ */ e.createElement("div", { className: w("nhsuk-footer", t), style: m }, h ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, a.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, a.map((u) => f(u))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, s.map((u) => f(u))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((u) => f(u))), l && l.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, l.map((u) => f(u))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, a.map((u) => f(u, !0)), (s || []).map((u) => f(u, !0)), (n || []).map((u) => f(u, !0)), (l || []).map((u) => f(u, !0)))
    )),
    !h && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, r))
  ), h && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, r)))));
}, Mt = ({
  heading: t,
  headingLevel: a = 3,
  text: s,
  html: n,
  children: l,
  className: r,
  ...c
}) => {
  const i = /important/i.test(t), o = () => l || (n ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : s ? /* @__PURE__ */ e.createElement("p", null, s) : null), m = [
    "nhsuk-warning-callout",
    r
  ].filter(Boolean).join(" "), d = `h${a}`;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: m,
      ...c
    },
    ce(
      d,
      { className: "nhsuk-warning-callout__label" },
      i ? /* @__PURE__ */ e.createElement(e.Fragment, null, t, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), t)
    ),
    o()
  );
}, It = (t) => /* @__PURE__ */ e.createElement(Ne, { ...t }), _t = ({
  items: t,
  classes: a,
  ariaLabel: s = "Pages in this guide",
  attributes: n = {}
}) => {
  const l = w("nhsuk-contents-list", a), r = (c, i) => c.current ? /* @__PURE__ */ e.createElement(
    "li",
    {
      key: i,
      className: "nhsuk-contents-list__item",
      "aria-current": "page",
      ...c.attributes || {}
    },
    /* @__PURE__ */ e.createElement("span", { className: "nhsuk-contents-list__current" }, c.text)
  ) : /* @__PURE__ */ e.createElement(
    "li",
    {
      key: i,
      className: "nhsuk-contents-list__item"
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-contents-list__link",
        href: c.href,
        ...c.attributes || {}
      },
      c.text
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
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-contents-list__list" }, t.map((c, i) => r(c, i)))
  );
}, Je = ie(
  ({
    title: t,
    type: a,
    items: s,
    hidePrefix: n = !1,
    headingLevel: l = 3,
    className: r,
    ...c
  }, i) => {
    const o = ["nhsuk-do-dont-list"];
    r && o.push(r);
    const m = [
      "nhsuk-list",
      a === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], d = () => a === "cross" ? /* @__PURE__ */ e.createElement(
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
    ), f = (u) => a === "cross" && !n ? `do not ${u}` : u, h = () => /* @__PURE__ */ e.createElement(
      H,
      {
        level: l,
        className: "nhsuk-do-dont-list__label",
        text: t
      }
    );
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: i,
        className: o.join(" "),
        ...c
      },
      h(),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: m.join(" "), role: "list" }, s.map((u, p) => /* @__PURE__ */ e.createElement("li", { key: p }, d(), f(u.item)))))
    );
  }
);
Je.displayName = "DoDontList";
const vt = ({
  src: t,
  alt: a,
  caption: s,
  sizes: n,
  srcset: l,
  className: r,
  ...c
}) => {
  const i = [
    "nhsuk-image",
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "figure",
    {
      className: i,
      ...c
    },
    /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-image__img",
        src: t,
        alt: a,
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
}, Lt = ({
  previousUrl: t,
  previousPage: a,
  nextUrl: s,
  nextPage: n,
  classes: l,
  attributes: r = {}
}) => {
  const c = w("nhsuk-pagination", l);
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: c,
      role: "navigation",
      "aria-label": "Pagination",
      ...r
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-pagination__list" }, t && a && /* @__PURE__ */ e.createElement("li", { className: "nhsuk-pagination-item--previous" }, /* @__PURE__ */ e.createElement("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--prev", href: t }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-pagination__title" }, "Previous"), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":"), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-pagination__page" }, a), /* @__PURE__ */ e.createElement(
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
}, wt = ({
  items: t,
  noBorder: a = !1,
  className: s,
  ...n
}) => {
  const l = w(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": a
    },
    s
  ), r = (i) => i.children ? i.children : i.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text ? i.text : null, c = (i) => !i || !i.items.length ? null : /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__actions" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-summary-list__actions-list" }, i.items.map((o, m) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: m,
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
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-summary-list-container" }, /* @__PURE__ */ e.createElement("dl", { className: l, ...n }, t.map((i, o) => /* @__PURE__ */ e.createElement("div", { key: o, className: "nhsuk-summary-list__row" }, /* @__PURE__ */ e.createElement("dt", { className: "nhsuk-summary-list__key" }, r(i.key)), /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__value" }, r(i.value)), c(i.actions)))));
}, xt = ({
  title: t,
  value: a,
  subtitle: s,
  variant: n = "default",
  href: l,
  className: r = "",
  ariaLabel: c,
  ...i
}) => {
  const o = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${n}`,
    r
  ].filter(Boolean).join(" "), m = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(H, { level: 3, className: "nhs-fdp-summary-card__title" }, t), /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__value" }, a), s && /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__subtitle" }, s));
  return l ? /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `${o} nhs-fdp-summary-card--clickable`,
      href: l,
      "aria-label": c || `${t}: ${a}`,
      ...i
    },
    m
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: o,
      "aria-label": c,
      ...i
    },
    m
  );
};
function ge(t) {
  var a, s, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var l = t.length;
    for (a = 0; a < l; a++) t[a] && (s = ge(t[a])) && (n && (n += " "), n += s);
  } else for (s in t) t[s] && (n && (n += " "), n += s);
  return n;
}
function se() {
  for (var t, a, s = 0, n = "", l = arguments.length; s < l; s++) (t = arguments[s]) && (a = ge(t)) && (n && (n += " "), n += a);
  return n;
}
const Ct = ({
  label: t,
  value: a,
  unit: s,
  delta: n,
  status: l = "neutral",
  variant: r = "default",
  subtitle: c,
  metadata: i,
  trendData: o,
  loading: m = !1,
  error: d,
  valueFormatter: f,
  className: h,
  style: u,
  id: p,
  announceDelta: k = !0,
  visual: E
}) => {
  const M = S.useId(), b = p || M, _ = `${b}-label`, x = `${b}-value`, N = `${b}-delta`, I = typeof a == "number" && !Number.isNaN(a), v = m ? "—" : d ? "" : I ? f ? f(a) : a.toLocaleString() : a;
  let y, g = "", C = "";
  if (n && !m && !d) {
    y = n.direction || (n.value > 0 ? "up" : n.value < 0 ? "down" : "neutral");
    const D = Math.abs(n.value), j = y === "up" ? `+${D}` : y === "down" ? `-${D}` : "0", T = n.isPercent ? "%" : "";
    if (g = `${j}${T}`, n.ariaLabel)
      C = n.ariaLabel;
    else {
      const A = n.invert ? y === "down" : y === "up";
      C = `${y === "neutral" ? "no change" : y === "up" ? "up" : "down"} ${D}${T}${y === "neutral" ? "" : A ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: se(
        "fdp-metric-card",
        r && `fdp-metric-card--${r}`,
        l && `fdp-metric-card--status-${l}`,
        m && "fdp-metric-card--loading",
        d && "fdp-metric-card--error",
        h
      ),
      style: u,
      role: "group",
      "aria-labelledby": _,
      "data-component": "MetricCard"
    },
    /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__inner" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__header" }, /* @__PURE__ */ S.createElement("h3", { id: _, className: "fdp-metric-card__label" }, t), i && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__metadata" }, i)), /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__content" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__value-section" }, /* @__PURE__ */ S.createElement("div", { id: x, className: "fdp-metric-card__value" }, m ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" })) : d ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__error", role: "alert" }, d) : /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__number" }, v), s && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__unit" }, s))), c && !m && !d && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__subtitle" }, c)), n && !m && !d && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__delta-section" }, /* @__PURE__ */ S.createElement(
      "div",
      {
        id: N,
        "aria-label": C,
        className: se(
          "fdp-metric-card__delta",
          y && `fdp-metric-card__delta--${y}`
        )
      },
      /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-value" }, g),
      n.period && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-period" }, n.period)
    )), o && o.length > 0 && !m && !d && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })), E && !d && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__visual", "aria-hidden": "true" }, E), k && n && !n.ariaLabel && !m && !d && /* @__PURE__ */ S.createElement("div", { className: "fdp-visually-hidden", "aria-live": "polite" }, C))
  );
}, U = { current: null }, Ye = () => {
  if (U.current) return U.current;
  try {
    U.current = require("prismjs");
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
    U.current = null;
  }
  return U.current;
}, $e = (t) => {
  const a = [
    { regex: /\b(import|from|export|const|let|var|return|if|else|for|while|switch|case|break|new|throw|try|catch|finally|class|extends|implements|interface|type|as|async|await|function)\b/g, cls: "kw" },
    { regex: /(['"`])(?:\\.|(?!\1).)*\1/g, cls: "str" },
    { regex: /\/\*[^]*?\*\/|\/\/.*$/gm, cls: "com" },
    { regex: /\b([0-9]+(?:\.[0-9]+)?)\b/g, cls: "num" }
  ];
  let s = t;
  return a.forEach((n) => {
    s = s.replace(n.regex, (l) => `<span class="nhsuk-code-${n.cls}">${l}</span>`);
  }), s;
}, Y = (t, a, s) => {
  if (s || !a) return t;
  const n = Ye();
  if (n && n.languages) {
    const l = n.languages[a] ? a : n.languages.typescript && (a === "ts" || a === "tsx" || a === "typescript") ? "typescript" : n.languages.json && a === "json" ? "json" : void 0;
    if (l)
      try {
        return n.highlight(t, n.languages[l], l);
      } catch {
      }
  }
  return $e(t);
}, Ve = ({
  rows: t,
  head: a,
  caption: s,
  captionSize: n,
  firstCellIsHeader: l = !1,
  responsive: r = !1,
  heading: c,
  headingLevel: i = 3,
  panel: o = !1,
  panelClasses: m,
  tableClasses: d,
  classes: f,
  attributes: h,
  "data-testid": u,
  columns: p,
  data: k,
  visuallyHiddenCaption: E = !1
}) => {
  const M = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), b = w(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": r
    },
    d
  ), _ = w(f), x = (g, C) => {
    const D = w(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${g.format}`]: g.format
      },
      g.classes
    ), j = {
      scope: "col",
      ...g.colspan && { colSpan: g.colspan },
      ...g.rowspan && { rowSpan: g.rowspan },
      ...r && { role: "columnheader" },
      ...g.attributes
    };
    let T;
    if (g.node != null)
      T = /* @__PURE__ */ e.createElement(e.Fragment, null, g.node);
    else if (g.html)
      T = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: g.html } });
    else if (g.code != null) {
      const A = Array.isArray(g.code), z = A ? g.code.join(`
`) : g.code, Z = A || z.includes(`
`), L = {
        className: w("nhsuk-table__code", g.codeClassName, {
          "nhsuk-table__code--block": Z,
          "nhsuk-table__code--inline": !Z
        }),
        ...g.codeLanguage ? { "data-language": g.codeLanguage } : {}
      }, B = Y(z, g.codeLanguage);
      T = Z ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...L,
          dangerouslySetInnerHTML: { __html: B }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...L,
          dangerouslySetInnerHTML: { __html: B }
        }
      );
    } else
      T = g.text;
    return /* @__PURE__ */ e.createElement("th", { key: C, className: D, ...j }, T);
  }, N = (g, C, D) => {
    const j = l && D || g.rowHeader, T = w(
      j ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${j ? "header" : "cell"}--${g.format}`]: g.format
      },
      g.classes
    ), A = {
      ...j && { scope: "row" },
      ...g.colspan && { colSpan: g.colspan },
      ...g.rowspan && { rowSpan: g.rowspan },
      ...r && {
        role: j ? "rowheader" : "cell",
        ...g.header && { "data-label": g.header }
      },
      ...g.attributes
    };
    let z;
    if (g.node != null)
      z = /* @__PURE__ */ e.createElement(e.Fragment, null, g.node);
    else if (g.html)
      z = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: g.html } });
    else if (g.code != null) {
      const B = Array.isArray(g.code), R = B ? g.code.join(`
`) : g.code, O = B || R.includes(`
`), W = {
        className: w("nhsuk-table__code", g.codeClassName, {
          "nhsuk-table__code--block": O,
          "nhsuk-table__code--inline": !O
        }),
        ...g.codeLanguage ? { "data-language": g.codeLanguage } : {}
      }, F = Y(
        R,
        g.codeLanguage,
        g.disableHighlight
      );
      z = O ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...W,
          dangerouslySetInnerHTML: { __html: F }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...W,
          dangerouslySetInnerHTML: { __html: F }
        }
      );
    } else
      z = g.text;
    const Z = /* @__PURE__ */ e.createElement(e.Fragment, null, r && g.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, g.header, " "), z), L = j ? "th" : "td";
    return /* @__PURE__ */ e.createElement(L, { key: C, className: T, ...A }, Z);
  };
  let I = a, v = t;
  !I && p && p.length && (I = p.map((g) => ({
    text: g.title,
    format: g.format,
    classes: g.headerClasses,
    attributes: g.headerAttributes
  }))), !v && p && k && k.length && (v = k.map((g, C) => p.map((D) => {
    const j = D.accessor ? D.accessor(g, C) : g[D.key];
    let T = { format: D.format, classes: D.cellClasses, attributes: D.cellAttributes };
    if (D.rowHeader && (T.rowHeader = !0), D.render) {
      const A = D.render(j, g, C, D);
      return A == null || typeof A == "boolean" ? { ...T, text: "" } : typeof A == "string" || typeof A == "number" ? { ...T, text: String(A) } : { ...T, ...A };
    }
    return { ...T, text: j != null ? String(j) : "" };
  })));
  const y = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: b,
      ...r && { role: "table" },
      ...h,
      ...u && { "data-testid": u }
    },
    s && /* @__PURE__ */ e.createElement("caption", { className: w(M, E && "nhsuk-u-visually-hidden") }, s),
    I && I.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...r && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...r && { role: "row" } }, I.map(
        (g, C) => x(g, C)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, v && v.map((g, C) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: C,
        className: "nhsuk-table__row",
        ...r && { role: "row" }
      },
      g.map(
        (D, j) => N(D, j, j === 0)
      )
    )))
  );
  return o ? /* @__PURE__ */ e.createElement(Oe, { className: m }, c && /* @__PURE__ */ e.createElement(H, { level: i, className: "nhsuk-table__heading-tab" }, c), y()) : _ ? /* @__PURE__ */ e.createElement("div", { className: _ }, y()) : y();
}, Xe = ({
  children: t,
  size: a,
  className: s
}) => {
  const n = w(
    "nhsuk-table__caption",
    a && `nhsuk-table__caption--${a}`,
    s
  );
  return /* @__PURE__ */ e.createElement("caption", { className: n }, t);
}, he = ({
  responsive: t,
  className: a,
  children: s,
  ...n
}) => {
  const l = t ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: a, ...l, ...n }, s);
}, pe = ({
  text: t,
  html: a,
  node: s,
  code: n,
  codeLanguage: l,
  codeClassName: r,
  disableHighlight: c,
  format: i,
  classes: o,
  colspan: m,
  rowspan: d,
  attributes: f,
  responsive: h,
  as: u = "th"
}) => {
  const p = w(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${i}`]: i },
    o
  ), k = {
    scope: "col",
    ...m && { colSpan: m },
    ...d && { rowSpan: d },
    ...h && { role: "columnheader" },
    ...f
  };
  let E;
  if (s != null) E = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (a) E = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } });
  else if (n != null) {
    const b = Array.isArray(n), _ = b ? n.join(`
`) : n, x = b || _.includes(`
`), N = {
      className: w("nhsuk-table__code", r, {
        "nhsuk-table__code--block": x,
        "nhsuk-table__code--inline": !x
      }),
      ...l ? { "data-language": l } : {}
    }, I = Y(
      _,
      l,
      c
    );
    E = x ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...N,
        dangerouslySetInnerHTML: { __html: I }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...N, dangerouslySetInnerHTML: { __html: I } });
  } else E = t;
  const M = u;
  return /* @__PURE__ */ e.createElement(M, { className: p, ...k }, E);
}, Ke = ({
  text: t,
  html: a,
  node: s,
  code: n,
  codeLanguage: l,
  codeClassName: r,
  disableHighlight: c,
  format: i,
  classes: o,
  colspan: m,
  rowspan: d,
  attributes: f,
  responsive: h,
  rowHeader: u
}) => {
  const p = !!u, k = p ? "th" : "td", E = w(
    p ? "nhsuk-table__header" : "nhsuk-table__cell",
    i && `nhsuk-table__${p ? "header" : "cell"}--${i}`,
    o
  ), M = {
    ...m && { colSpan: m },
    ...d && { rowSpan: d },
    ...p && { scope: "row" },
    ...h && { role: p ? "rowheader" : "cell" },
    ...f
  };
  let b;
  if (s != null) b = /* @__PURE__ */ e.createElement(e.Fragment, null, s);
  else if (a) b = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } });
  else if (n != null) {
    const _ = Array.isArray(n), x = _ ? n.join(`
`) : n, N = _ || x.includes(`
`), I = {
      className: w("nhsuk-table__code", r, {
        "nhsuk-table__code--block": N,
        "nhsuk-table__code--inline": !N
      }),
      ...l ? { "data-language": l } : {}
    }, v = Y(x, l, c);
    b = N ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ...I, dangerouslySetInnerHTML: { __html: v } })) : /* @__PURE__ */ e.createElement("code", { ...I, dangerouslySetInnerHTML: { __html: v } });
  } else b = t;
  return /* @__PURE__ */ e.createElement(k, { className: E, ...M }, b);
}, G = Ve;
G.Caption = Xe;
G.BodyRow = he;
G.HeaderCell = pe;
G.Cell = Ke;
let re = !1, le = !1;
Object.defineProperty(G, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !re && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), re = !0), he;
  }
});
Object.defineProperty(G, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !le && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), le = !0), pe;
  }
});
const qe = ({
  heading: t,
  headingLevel: a = 1,
  headingClasses: s = "",
  text: n,
  html: l,
  imageURL: r,
  containerClasses: c = "",
  classes: i = "",
  children: o,
  ...m
}) => {
  const d = [
    "nhsuk-hero",
    r && t ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    r && !t ? "nhsuk-hero--image" : "",
    i
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    c,
    r ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), h = [
    "nhsuk-hero__heading",
    s,
    !o && !n && !l ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), u = o || t || n || l, p = () => {
    if (!t) return null;
    const k = { className: h };
    switch (a) {
      case 1:
        return /* @__PURE__ */ e.createElement("h1", { ...k }, t);
      case 2:
        return /* @__PURE__ */ e.createElement("h2", { ...k }, t);
      case 3:
        return /* @__PURE__ */ e.createElement("h3", { ...k }, t);
      case 4:
        return /* @__PURE__ */ e.createElement("h4", { ...k }, t);
      case 5:
        return /* @__PURE__ */ e.createElement("h5", { ...k }, t);
      case 6:
        return /* @__PURE__ */ e.createElement("h6", { ...k }, t);
      default:
        return /* @__PURE__ */ e.createElement("h1", { ...k }, t);
    }
  };
  return /* @__PURE__ */ e.createElement(
    "section",
    {
      className: d,
      style: r ? { backgroundImage: `url('${r}')` } : void 0,
      role: "banner",
      ...m
    },
    r && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, u && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, p(), o || (l ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: l } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !r && u && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, p(), o || (l ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: l } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
qe.displayName = "Hero";
const et = e.forwardRef(({
  variant: t = "default",
  heading: a,
  headingHtml: s,
  headingLevel: n = 2,
  headingClasses: l,
  description: r,
  descriptionHtml: c,
  href: i,
  imgURL: o,
  imgAlt: m,
  ...d
}, f) => {
  const h = [
    "nhsuk-card",
    t === "clickable" && "nhsuk-card--clickable",
    t === "secondary" && "nhsuk-card--secondary",
    t === "feature" && "nhsuk-card--feature",
    d.className
  ].filter(Boolean).join(" "), u = [
    "nhsuk-card__content",
    t === "feature" && "nhsuk-card__content--feature",
    t === "primary" && "nhsuk-card__content--primary",
    t === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), p = [
    "nhsuk-card__heading",
    t === "feature" && "nhsuk-card__heading--feature",
    l
  ].filter(Boolean).join(" "), k = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!a) return null;
    const b = () => i && t !== "feature" ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-card__link", href: i }, a) : a;
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: p
      },
      b()
    );
  }, E = () => d.children ? d.children : c ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: c } }) : r ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, r) : null, M = () => t !== "primary" ? null : /* @__PURE__ */ e.createElement(
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
      ...d,
      className: h,
      ref: f
    },
    o && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: o,
        alt: m || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: u }, k(), E(), M())
  );
});
et.displayName = "Card";
const Dt = ({
  className: t,
  children: a,
  "data-testid": s,
  id: n
}) => {
  const l = ["nhsuk-card-group", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "ul",
    {
      className: l,
      "data-testid": s,
      id: n
    },
    a
  );
}, St = ({
  className: t,
  children: a,
  "data-testid": s
}) => {
  const n = ["nhsuk-card-group__item", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "li",
    {
      className: n,
      "data-testid": s
    },
    a
  );
}, jt = ({
  type: t,
  heading: a,
  headingHtml: s,
  headingLevel: n = 3,
  headingClasses: l,
  description: r,
  descriptionHtml: c,
  className: i,
  children: o,
  "data-testid": m,
  id: d,
  "aria-label": f,
  "aria-labelledby": h,
  "aria-describedby": u
}) => {
  const p = [
    "nhsuk-care-card",
    `nhsuk-care-card--${t}`,
    i
  ].filter(Boolean).join(" "), k = [
    "nhsuk-care-card__heading",
    l
  ].filter(Boolean).join(" "), E = () => {
    if (s)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } });
    if (!a) return null;
    const b = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[t], _ = /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, b, " "), a);
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: k
      },
      _
    );
  }, M = () => o || (c ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: c } }) : r ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, r) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: p,
      "data-testid": m,
      id: d,
      "aria-label": f,
      "aria-labelledby": h,
      "aria-describedby": u
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, E(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, M())
  );
};
var P = /* @__PURE__ */ ((t) => (t.AquaGreen = "aqua-green", t.Purple = "purple", t.Blue = "blue", t.Grey = "grey", t.Azure = "azure", t))(P || {});
function tt(t) {
  return function() {
    let a = t += 1831565813;
    return a = Math.imul(a ^ a >>> 15, a | 1), a ^= a + Math.imul(a ^ a >>> 7, a | 61), ((a ^ a >>> 14) >>> 0) / 4294967296;
  };
}
const Q = [
  P.AquaGreen,
  P.Purple,
  P.Blue,
  P.Grey,
  P.Azure
];
function K(t, a, s) {
  return Math.max(a, Math.min(s, t));
}
function at(t, a, s = 4) {
  const n = tt(t), l = [], r = ["rect", "hex", "circle"], c = Q.indexOf(a), i = [
    a,
    Q[(c + 2) % Q.length],
    Q[(c + 3) % Q.length]
  ], o = [], m = 1200, d = 400, f = 1.2, h = (M, b) => !(M.right < b.left || M.left > b.right || M.bottom < b.top || M.top > b.bottom), u = (M) => M.left >= 0 && M.top >= 0 && M.right <= 100 && M.bottom <= 100, p = (M, b, _, x, N, I) => {
    let v = 0, y = 0;
    if (M === "rect") {
      const g = x ?? 48, C = N ?? 36;
      v = g / m * 100, y = C / d * 100;
    } else if (M === "circle") {
      const g = I ?? 40;
      v = g / m * 100, y = g / d * 100;
    } else {
      const g = I ?? 40;
      v = g / m * 100, y = g * (Math.sqrt(3) / 2) / d * 100;
    }
    return {
      left: b - v / 2 - f,
      right: b + v / 2 + f,
      top: _ - y / 2 - f,
      bottom: _ + y / 2 + f
    };
  };
  let k = 0;
  const E = K(Math.round(s), 4, 12);
  for (; l.length < E && k < E * 120; ) {
    k++;
    const M = r[Math.floor(n() * r.length)], b = K(20 + n() * 60, 10, 90), _ = K(20 + n() * 60, 10, 90), x = i[Math.floor(n() * i.length)], N = l.length < 2 ? "soft" : "none";
    if (M === "rect") {
      const I = 40 + n() * 80, v = 28 + n() * 64, y = p(M, b, _, I, v);
      if (!u(y)) continue;
      let g = !1;
      for (let C = 0; C < o.length; C++)
        if (h(y, o[C])) {
          g = !0;
          break;
        }
      if (g) continue;
      o.push(y), l.push({ kind: M, x: b, y: _, width: I, height: v, gradient: x, rotate: 0, shadow: N });
    } else if (M === "circle") {
      const I = 24 + n() * 80, v = p(M, b, _, void 0, void 0, I);
      if (!u(v)) continue;
      let y = !1;
      for (let g = 0; g < o.length; g++)
        if (h(v, o[g])) {
          y = !0;
          break;
        }
      if (y) continue;
      o.push(v), l.push({ kind: M, x: b, y: _, size: I, gradient: x, rotate: 0, shadow: N });
    } else {
      const I = 28 + n() * 72, v = n() * 360, y = p(M, b, _, void 0, void 0, I);
      if (!u(y)) continue;
      let g = !1;
      for (let C = 0; C < o.length; C++)
        if (h(y, o[C])) {
          g = !0;
          break;
        }
      if (g) continue;
      o.push(y), l.push({ kind: M, x: b, y: _, size: I, gradient: x, rotate: v, shadow: N });
    }
  }
  return l;
}
const nt = ({ shapes: t, aspectRatio: a }) => {
  const n = 600 * a, l = 600, r = (c, i, o) => {
    const m = o / 2;
    return [0, 60, 120, 180, 240, 300].map((f) => {
      const h = f * Math.PI / 180, u = c + m * Math.cos(h), p = i + m * Math.sin(h);
      return `${u},${p}`;
    }).join(" ");
  };
  return /* @__PURE__ */ e.createElement(
    "svg",
    {
      className: "nhs-product-card__graphic",
      viewBox: `0 0 ${n} ${l}`,
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": "true"
    },
    /* @__PURE__ */ e.createElement("defs", null, /* @__PURE__ */ e.createElement(
      "linearGradient",
      {
        id: "pc-grad-aqua-green",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "1",
        gradientUnits: "objectBoundingBox"
      },
      /* @__PURE__ */ e.createElement("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
      /* @__PURE__ */ e.createElement("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
    ), /* @__PURE__ */ e.createElement(
      "linearGradient",
      {
        id: "pc-grad-purple",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "1",
        gradientUnits: "objectBoundingBox"
      },
      /* @__PURE__ */ e.createElement("stop", { offset: "0", stopColor: "rgb(176, 161, 201)" }),
      /* @__PURE__ */ e.createElement("stop", { offset: "1", stopColor: "rgb(198, 189, 216)" })
    ), /* @__PURE__ */ e.createElement(
      "linearGradient",
      {
        id: "pc-grad-blue",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "1",
        gradientUnits: "objectBoundingBox"
      },
      /* @__PURE__ */ e.createElement("stop", { offset: "0", stopColor: "rgb(0, 94, 184)" }),
      /* @__PURE__ */ e.createElement("stop", { offset: "1", stopColor: "rgb(65, 131, 196)" })
    ), /* @__PURE__ */ e.createElement(
      "linearGradient",
      {
        id: "pc-grad-grey",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "1",
        gradientUnits: "objectBoundingBox"
      },
      /* @__PURE__ */ e.createElement("stop", { offset: "0", stopColor: "rgb(76, 98, 114)" }),
      /* @__PURE__ */ e.createElement("stop", { offset: "1", stopColor: "rgb(174, 184, 192)" })
    ), /* @__PURE__ */ e.createElement(
      "linearGradient",
      {
        id: "pc-grad-azure",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "1",
        gradientUnits: "objectBoundingBox"
      },
      /* @__PURE__ */ e.createElement("stop", { offset: "0", stopColor: "rgb(0, 122, 204)" }),
      /* @__PURE__ */ e.createElement("stop", { offset: "1", stopColor: "rgb(103, 192, 229)" })
    ), /* @__PURE__ */ e.createElement(
      "filter",
      {
        id: "pc-shadow-soft",
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%"
      },
      /* @__PURE__ */ e.createElement("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "2" }),
      /* @__PURE__ */ e.createElement("feOffset", { dx: "0", dy: "2", result: "offsetblur" }),
      /* @__PURE__ */ e.createElement("feComponentTransfer", null, /* @__PURE__ */ e.createElement("feFuncA", { type: "linear", slope: "0.2" })),
      /* @__PURE__ */ e.createElement("feMerge", null, /* @__PURE__ */ e.createElement("feMergeNode", null), /* @__PURE__ */ e.createElement("feMergeNode", { in: "SourceGraphic" }))
    ), /* @__PURE__ */ e.createElement(
      "filter",
      {
        id: "pc-shadow-strong",
        x: "-50%",
        y: "-50%",
        width: "200%",
        height: "200%"
      },
      /* @__PURE__ */ e.createElement("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "4" }),
      /* @__PURE__ */ e.createElement("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
      /* @__PURE__ */ e.createElement("feComponentTransfer", null, /* @__PURE__ */ e.createElement("feFuncA", { type: "linear", slope: "0.3" })),
      /* @__PURE__ */ e.createElement("feMerge", null, /* @__PURE__ */ e.createElement("feMergeNode", null), /* @__PURE__ */ e.createElement("feMergeNode", { in: "SourceGraphic" }))
    )),
    /* @__PURE__ */ e.createElement("g", { style: { mixBlendMode: "multiply" } }, (() => {
      if (t.length < 2) return null;
      const c = t.map((d) => {
        const f = d.x / 100 * n, h = d.y / 100 * l;
        if (d.kind === "circle") {
          const u = (d.size ?? 40) / 2;
          return [0, 45, 90, 135, 180, 225, 270, 315].map((k) => {
            const E = k * Math.PI / 180;
            return [f + u * Math.cos(E), h + u * Math.sin(E)];
          });
        } else if (d.kind === "rect") {
          const u = d.width ?? 60, p = d.height ?? 40;
          return [
            [f - u / 2, h - p / 2],
            [f + u / 2, h - p / 2],
            [f + u / 2, h + p / 2],
            [f - u / 2, h + p / 2]
          ];
        } else {
          const p = (d.size ?? 40) / 2;
          return [0, 60, 120, 180, 240, 300].map((E) => {
            const M = E * Math.PI / 180;
            return [f + p * Math.cos(M), h + p * Math.sin(M)];
          });
        }
      }), i = 1, o = /* @__PURE__ */ new Set(), m = [];
      for (let d = 0; d < t.length; d++) {
        const f = [];
        for (let u = 0; u < t.length; u++) {
          if (d === u) continue;
          const p = t[d].x - t[u].x, k = t[d].y - t[u].y;
          f.push({ j: u, d2: p * p + k * k });
        }
        f.sort((u, p) => u.d2 - p.d2);
        const h = Math.min(i, f.length);
        for (let u = 0; u < h; u++) {
          const p = f[u].j, k = Math.min(d, p), E = Math.max(d, p), M = `${k}-${E}`;
          o.has(M) || (o.add(M), m.push([k, E]));
        }
      }
      return m.map(([d, f]) => {
        const h = c[d], u = c[f];
        let p = null;
        for (const k of h)
          for (const E of u) {
            const M = k[0] - E[0], b = k[1] - E[1], _ = M * M + b * b;
            (!p || _ < p.d2) && (p = { p: k, q: E, d2: _ });
          }
        return p ? /* @__PURE__ */ e.createElement(
          "line",
          {
            key: `connector-${d}-${f}`,
            x1: p.p[0],
            y1: p.p[1],
            x2: p.q[0],
            y2: p.q[1],
            stroke: "rgb(158, 171, 181)",
            strokeWidth: "0.5",
            strokeMiterlimit: "0.5"
          }
        ) : null;
      });
    })()),
    t.map((c, i) => {
      const o = `pc-grad-${c.gradient}`, m = c.shadow === "soft" ? "url(#pc-shadow-soft)" : c.shadow === "strong" ? "url(#pc-shadow-strong)" : void 0, d = c.x / 100 * n, f = c.y / 100 * l;
      if (c.kind === "rect") {
        const h = c.width || 60, u = c.height || 40;
        return /* @__PURE__ */ e.createElement(
          "rect",
          {
            key: i,
            className: o,
            x: d - h / 2,
            y: f - u / 2,
            width: h,
            height: u,
            transform: `rotate(${c.rotate || 0} ${d} ${f})`,
            filter: m
          }
        );
      } else if (c.kind === "circle") {
        const h = (c.size || 40) / 2;
        return /* @__PURE__ */ e.createElement(
          "circle",
          {
            key: i,
            className: o,
            cx: d,
            cy: f,
            r: h,
            filter: m
          }
        );
      } else if (c.kind === "hex") {
        const h = c.size || 40;
        return /* @__PURE__ */ e.createElement(
          "polygon",
          {
            key: i,
            className: o,
            points: r(d, f, h),
            transform: `rotate(${c.rotate || 0} ${d} ${f})`,
            filter: m
          }
        );
      }
      return null;
    })
  );
}, Tt = ({
  title: t,
  description: a,
  image: s,
  layout: n = "vertical",
  buttons: l = [],
  badge: r,
  theme: c = "blue",
  className: i,
  style: o,
  onClick: m,
  href: d,
  headingLevel: f = 3,
  footer: h,
  elevated: u = !0,
  imageAspectRatio: p = 1.5
}) => {
  const k = e.useMemo(() => {
    if (s?.type === "graphic") {
      if (s.shapes) return s.shapes;
      const N = s.seed ?? 0, I = s.theme ?? c;
      return at(N, I);
    }
    return [];
  }, [s, c]), E = [
    "nhs-product-card",
    `nhs-product-card--${n}`,
    `nhs-product-card--theme-${c}`,
    u && "nhs-product-card--elevated",
    (m || d) && "nhs-product-card--clickable",
    i
  ].filter(Boolean).join(" "), M = (N) => {
    m ? m(N) : d && !N.defaultPrevented && (window.location.href = d);
  }, b = (N) => {
    (m || d) && (N.key === "Enter" || N.key === " ") && (N.preventDefault(), m ? m(N) : d && (window.location.href = d));
  }, _ = () => {
    if (!s) return null;
    const N = [
      "nhs-product-card__image",
      s.type === "graphic" && "nhs-product-card__image--graphic"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        className: N,
        style: { aspectRatio: p.toString() }
      },
      s.type === "photo" && s.src ? /* @__PURE__ */ e.createElement("img", { src: s.src, alt: s.alt || "" }) : s.type === "graphic" ? /* @__PURE__ */ e.createElement(nt, { shapes: k, aspectRatio: p }) : null
    );
  }, x = () => l.length ? /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__actions" }, l.map((N, I) => {
    const v = [
      "nhs-product-card__button",
      `nhs-product-card__button--${N.variant || "primary"}`,
      N.disabled && "nhs-product-card__button--disabled"
    ].filter(Boolean).join(" ");
    return N.href ? /* @__PURE__ */ e.createElement(
      "a",
      {
        key: I,
        href: N.href,
        className: v,
        "aria-label": N.ariaLabel,
        onClick: (y) => {
          if (N.disabled) {
            y.preventDefault();
            return;
          }
          N.onClick && (y.stopPropagation(), N.onClick(y));
        }
      },
      N.label
    ) : /* @__PURE__ */ e.createElement(
      "button",
      {
        key: I,
        type: "button",
        className: v,
        disabled: N.disabled,
        "aria-label": N.ariaLabel,
        onClick: (y) => {
          N.onClick && (y.stopPropagation(), N.onClick(y));
        }
      },
      N.label
    );
  })) : null;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: E,
      style: o,
      onClick: m || d ? M : void 0,
      onKeyDown: m || d ? b : void 0,
      role: m || d ? "button" : void 0,
      tabIndex: m || d ? 0 : void 0
    },
    r && /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__badge" }, r),
    _(),
    /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__content" }, /* @__PURE__ */ e.createElement(H, { level: f, className: "nhs-product-card__title" }, t), /* @__PURE__ */ e.createElement("p", { className: "nhs-product-card__description" }, a), x(), h && /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__footer" }, h))
  );
};
function st(t) {
  const s = (t.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    t.hasError ? "nhsuk-input--error" : "",
    s ? "nhsuk-input--range" : "",
    !s && t.width && t.width !== "full" ? `nhsuk-input--width-${t.width}` : "",
    t.className || ""
  ].filter(Boolean).join(" "), isRange: s };
}
function ne(t) {
  const {
    id: a,
    name: s,
    type: n = "text",
    value: l,
    defaultValue: r,
    placeholder: c,
    disabled: i = !1,
    readOnly: o = !1,
    required: m = !1,
    hasError: d = !1,
    describedBy: f,
    className: h,
    width: u = "full",
    inputMode: p,
    autoComplete: k,
    maxLength: E,
    minLength: M,
    pattern: b,
    step: _,
    min: x,
    max: N,
    showValueLabels: I = !1,
    showCurrentValue: v = !1,
    valueLabels: y,
    // Strip interactive handlers in server variant
    onChange: g,
    onBlur: C,
    onFocus: D,
    onKeyDown: j,
    ...T
  } = t, { classes: A, isRange: z } = st({
    type: n,
    hasError: d,
    width: u,
    className: h
  }), Z = {
    id: a,
    name: s,
    type: n,
    placeholder: c,
    disabled: i,
    readOnly: o,
    required: m,
    "aria-describedby": f,
    inputMode: p,
    autoComplete: k,
    maxLength: E,
    minLength: M,
    pattern: b,
    step: _,
    min: x,
    max: N,
    ...T
  };
  if (z) {
    const L = l ?? r ?? (typeof x < "u" ? String(x) : "0"), B = /* @__PURE__ */ e.createElement(
      "input",
      {
        className: A,
        ...l !== void 0 ? { value: l } : {},
        ...l === void 0 && r !== void 0 ? { defaultValue: r } : {},
        "data-current-value": L,
        ...Z
      }
    );
    return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-wrapper" }, I ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-labels" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min" }, y?.min || x || "0"), B, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max" }, y?.max || N || "100")) : B, v && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-current-value" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-current-label" }, y?.current || "Current value:", " ", /* @__PURE__ */ e.createElement("strong", null, L))));
  }
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: A,
      ...l !== void 0 ? { value: l } : {},
      ...l === void 0 && r !== void 0 ? { defaultValue: r } : {},
      ...Z
    }
  );
}
function rt(t) {
  const a = t.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    t.hasError ? "nhsuk-textarea--error" : "",
    a !== "vertical" ? `nhsuk-textarea--resize-${a}` : "",
    t.className || ""
  ].filter(Boolean).join(" "), describedBy: t.describedBy };
}
const At = ({
  id: t,
  name: a,
  value: s,
  defaultValue: n,
  placeholder: l,
  disabled: r = !1,
  readOnly: c = !1,
  required: i = !1,
  hasError: o = !1,
  describedBy: m,
  className: d,
  rows: f = 5,
  cols: h,
  maxLength: u,
  minLength: p,
  wrap: k = "soft",
  resize: E = "vertical",
  autoComplete: M,
  spellCheck: b,
  onChange: _,
  onBlur: x,
  onFocus: N,
  onKeyDown: I,
  ...v
}) => {
  const { classes: y, describedBy: g } = rt({ hasError: o, resize: E, className: d, describedBy: m });
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: y,
      id: t,
      name: a,
      value: s,
      defaultValue: n,
      placeholder: l,
      disabled: r,
      readOnly: c,
      required: i,
      "aria-describedby": g,
      rows: f,
      cols: h,
      maxLength: u,
      minLength: p,
      wrap: k,
      autoComplete: M,
      spellCheck: b,
      onChange: _,
      onBlur: x,
      onFocus: N,
      onKeyDown: I,
      ...v
    }
  );
};
function lt(t) {
  return { classes: [
    "nhsuk-select",
    t.hasError ? "nhsuk-select--error" : "",
    t.className || ""
  ].filter(Boolean).join(" ") };
}
const ct = ({
  value: t,
  disabled: a = !1,
  selected: s = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: n,
  children: l,
  ...r
}) => {
  const c = w(
    "nhsuk-select__option",
    n
  );
  return /* @__PURE__ */ e.createElement(
    "option",
    {
      className: c,
      value: t,
      disabled: a,
      ...r
    },
    l
  );
}, it = ({
  id: t,
  name: a,
  ariaLabel: s,
  value: n,
  defaultValue: l,
  disabled: r = !1,
  required: c = !1,
  hasError: i = !1,
  describedBy: o,
  className: m,
  multiple: d = !1,
  size: f,
  autoComplete: h,
  options: u,
  children: p,
  onChange: k,
  onBlur: E,
  onFocus: M,
  ...b
}) => {
  const { classes: _ } = lt({ hasError: i, className: m }), x = () => u ? u.map((I, v) => /* @__PURE__ */ e.createElement(
    "option",
    {
      key: `${I.value}-${v}`,
      value: I.value,
      disabled: I.disabled,
      "data-initial-selected": I.selected || void 0
    },
    I.text
  )) : null, N = l === void 0 && n === void 0 && u ? u.find((I) => I.selected)?.value : void 0;
  return /* @__PURE__ */ e.createElement(
    "select",
    {
      className: _,
      id: t,
      name: a,
      "aria-label": s,
      value: n,
      defaultValue: l !== void 0 ? l : N,
      disabled: r,
      required: c,
      "aria-describedby": o,
      multiple: d,
      size: f,
      autoComplete: h,
      onChange: k,
      onBlur: E,
      onFocus: M,
      ...b
    },
    p || x()
  );
}, ot = it;
ot.Option = ct;
function zt({
  id: t,
  className: a,
  items: s,
  namePrefix: n,
  values: l = {},
  fieldset: r,
  hint: c,
  errorMessage: i,
  // strip interactive props
  onChange: o,
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
  let h = r?.describedBy || "";
  const u = c ? `${t}-hint` : "", p = i ? `${t}-error` : "";
  u && (h = h ? `${h} ${u}` : u), p && (h = h ? `${h} ${p}` : p);
  const k = w("nhsuk-form-group", {
    "nhsuk-form-group--error": !!i
  }), E = w("nhsuk-date-input", a), M = () => /* @__PURE__ */ e.createElement(e.Fragment, null, c && /* @__PURE__ */ e.createElement(Be, { id: u, className: c.classes }, c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text), i && /* @__PURE__ */ e.createElement(He, { id: p, className: i.classes }, i.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: E,
      id: t,
      "data-testid": "date-input",
      ...m
    },
    f.map((b) => {
      const _ = b.id || `${t}-${b.name}`, x = n ? `${n}[${b.name}]` : b.name, N = b.label || b.name.charAt(0).toUpperCase() + b.name.slice(1), I = l[b.name];
      return /* @__PURE__ */ e.createElement("div", { key: b.name, className: "nhsuk-date-input__item" }, /* @__PURE__ */ e.createElement(te, { htmlFor: _, className: "nhsuk-date-input__label" }, N), /* @__PURE__ */ e.createElement(
        ne,
        {
          id: _,
          name: x,
          defaultValue: I,
          className: w("nhsuk-date-input__input", b.classes),
          inputMode: b.inputmode,
          autoComplete: b.autocomplete,
          pattern: b.pattern,
          "aria-describedby": h || void 0
        }
      ));
    })
  ));
  return /* @__PURE__ */ e.createElement("div", { className: k }, r ? /* @__PURE__ */ e.createElement(
    ae,
    {
      className: r.classes,
      legend: r.legend ? { text: r.legend } : void 0,
      describedBy: h || void 0
    },
    M()
  ) : M());
}
function Bt({
  titleText: t = "There is a problem",
  titleHtml: a,
  descriptionText: s,
  descriptionHtml: n,
  errorList: l,
  className: r,
  children: c,
  ...i
}) {
  const o = w("nhsuk-error-summary", r), m = () => a ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } }) : t, d = () => n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : s, f = (h) => {
    const u = h.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: h.html } }) : h.text;
    return h.href ? /* @__PURE__ */ e.createElement("a", { href: h.href, ...h.attributes }, u) : u;
  };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: o,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...i
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title" }, m()),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__body" }, c && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, c), !c && (s || n) && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, d()), /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list" }, l.map((h, u) => /* @__PURE__ */ e.createElement("li", { key: u }, f(h)))))
  );
}
function dt(t) {
  return { classes: [
    "nhsuk-radios",
    t.hasError ? "nhsuk-radios--error" : "",
    t.size === "small" ? "nhsuk-radios--small" : "",
    t.inline ? "nhsuk-radios--inline" : "",
    t.className || ""
  ].filter(Boolean).join(" "), describedBy: t.describedBy };
}
function ut(t, {
  variant: a,
  selectedValue: s,
  enableBehaviourAttr: n,
  handleChange: l,
  handleBlur: r,
  handleFocus: c,
  handleKeyDown: i,
  itemsRef: o,
  InputComponent: m
}) {
  const {
    onChange: d,
    onBlur: f,
    onFocus: h,
    ...u
  } = t, {
    name: p,
    hasError: k = !1,
    describedBy: E,
    className: M,
    size: b = "normal",
    inline: _ = !1,
    options: x,
    ...N
  } = u, { classes: I, describedBy: v } = dt({ hasError: k, size: b, inline: _, className: M, describedBy: E });
  return /* @__PURE__ */ e.createElement(ae, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: I,
      ...N,
      "data-nhs-behaviour": "radios"
    },
    x.map((y, g) => {
      const C = `${p}-${g}`, D = y.conditional ? `${C}-conditional` : void 0, j = s === y.value;
      return /* @__PURE__ */ e.createElement("div", { key: y.value, className: "nhsuk-radios__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-radios__input",
          id: C,
          name: p,
          type: "radio",
          value: y.value,
          disabled: y.disabled,
          defaultChecked: j,
          "data-nhs-radios-input": !0,
          "aria-describedby": v
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-radios__label", htmlFor: C }, y.text), y.hint && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-radios__hint" }, y.hint), y.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: w("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !j
          }),
          id: D,
          "data-nhs-radios-conditional": !0
        },
        typeof y.conditional == "object" && y.conditional !== null && "label" in y.conditional && "id" in y.conditional && "name" in y.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, y.conditional.label && /* @__PURE__ */ e.createElement(
          te,
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
const Zt = ({ value: t, defaultValue: a, ...s }) => {
  const n = t || a || "";
  return ut(
    { value: t, defaultValue: a, ...s },
    {
      variant: "server",
      selectedValue: n,
      enableBehaviourAttr: !0,
      InputComponent: ne
    }
  );
};
function mt(t) {
  const a = [
    "nhsuk-checkboxes",
    t.small ? "nhsuk-checkboxes--small" : "",
    t.className || ""
  ].filter(Boolean).join(" "), s = [
    "nhsuk-form-group",
    t.hasError ? "nhsuk-form-group--error" : ""
  ].filter(Boolean).join(" ");
  return { classes: a, formGroupClasses: s };
}
function Ht(t) {
  const {
    items: a,
    name: s,
    idPrefix: n,
    legend: l,
    isPageHeading: r = !1,
    legendSize: c = "l",
    hint: i,
    errorMessage: o,
    className: m = "",
    small: d = !1,
    // Strip interactive handler in server variant
    onChange: f,
    fieldsetAttributes: h,
    attributes: u,
    ...p
  } = t, k = n || s, E = i ? `${k}-hint` : void 0, M = o ? `${k}-error` : void 0, b = [E, M].filter(Boolean).join(" ") || void 0, { classes: _, formGroupClasses: x } = mt({ small: d, className: m, hasError: !!o });
  return /* @__PURE__ */ e.createElement("div", { className: x, ...u, ...p }, /* @__PURE__ */ e.createElement(
    ae,
    {
      legend: l ? { text: l, isPageHeading: r, size: c } : void 0,
      describedBy: b,
      ...h
    },
    i && /* @__PURE__ */ e.createElement("div", { id: E, className: "nhsuk-hint" }, i),
    o && /* @__PURE__ */ e.createElement("div", { id: M, className: "nhsuk-error-message" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Error:"), " ", o),
    /* @__PURE__ */ e.createElement("div", { className: _, "data-nhs-behaviour": "checkboxes" }, a.map((N, I) => {
      const v = `${k}-${I + 1}`, y = `${v}-conditional`, g = !!N.checked, C = !!N.disabled;
      return /* @__PURE__ */ e.createElement("div", { key: N.value, className: "nhsuk-checkboxes__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: v,
          name: s,
          type: "checkbox",
          value: N.value,
          ...g ? { defaultChecked: !0 } : {},
          disabled: C,
          "aria-describedby": N.hint ? `${v}-hint` : b,
          ...N.conditional && {
            "aria-controls": y,
            "aria-expanded": g ? "true" : "false"
          },
          ...N.attributes
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-checkboxes__label", htmlFor: v }, N.text), N.hint && /* @__PURE__ */ e.createElement("div", { id: `${v}-hint`, className: "nhsuk-checkboxes__hint" }, N.hint), N.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: w("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !g
          }),
          id: y,
          "data-nhs-checkboxes-conditional": !0
        },
        typeof N.conditional == "object" && N.conditional !== null && "label" in N.conditional && "id" in N.conditional && "name" in N.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, N.conditional.label && /* @__PURE__ */ e.createElement(te, { htmlFor: N.conditional.id }, N.conditional.label), /* @__PURE__ */ e.createElement(ne, { ...N.conditional })) : N.conditional
      ));
    }))
  ));
}
function q(t, a) {
  if (!t || t.hidden) return null;
  const { href: s, label: n, variant: l, disabled: r, type: c } = t, i = { variant: l, disabled: r };
  return s ? /* @__PURE__ */ e.createElement(ee, { href: s, ...i }, n || a) : /* @__PURE__ */ e.createElement(ee, { type: c === "button" ? "button" : "submit", ...i }, n || a);
}
const Pt = ({
  back: t,
  startAgain: a,
  next: s,
  flipOrderOnMobile: n = !0,
  className: l
}) => {
  const r = !!t && !t.hidden, c = !!a && !a.hidden, i = !!s && !s.hidden, o = [r, c, i].filter(Boolean).length, m = $.OneHalf, d = $.OneThird;
  return /* @__PURE__ */ e.createElement(
    ke,
    {
      className: w("nhs-form-nav", l, {
        "nhs-form-nav--flip-mobile": n
      })
    },
    r && /* @__PURE__ */ e.createElement(V, { width: o === 2 ? m : d, className: "nhs-form-nav__back" }, q(t, "Back")),
    c && /* @__PURE__ */ e.createElement(
      V,
      {
        width: o === 2 ? m : d,
        align: o === 2 ? X.Right : X.Center,
        className: "nhs-form-nav__start-again"
      },
      q(a, "Start again")
    ),
    i && /* @__PURE__ */ e.createElement(
      V,
      {
        width: !r && !c ? $.Full : o === 2 ? m : d,
        align: X.Right,
        className: "nhs-form-nav__next"
      },
      q(s, "Next")
    )
  );
};
export {
  ft as ActionLink,
  Nt as BackLink,
  oe as BrandKey,
  Qe as Breadcrumb,
  Ut as Breakpoint,
  ee as ButtonServer,
  me as ButtonSize,
  ue as ButtonVariant,
  et as Card,
  Dt as CardGroup,
  St as CardGroupItem,
  jt as CareCard,
  Ht as Checkboxes,
  V as Column,
  X as ColumnAlign,
  Ne as Container,
  _t as ContentsList,
  zt as DateInput,
  Ge as Details,
  Je as DoDontList,
  He as ErrorMessage,
  Bt as ErrorSummary,
  ae as Fieldset,
  Qt as Float,
  Et as Footer,
  Pt as FormNavButtonBar,
  Rt as Grid,
  $ as GridWidth,
  pt as Header,
  H as Heading,
  qe as Hero,
  Be as Hint,
  vt as Images,
  ne as Input,
  yt as InsetText,
  te as Label,
  Fe as List,
  de as LogoVariant,
  Ct as MetricCard,
  Lt as Pagination,
  Oe as Panel,
  Tt as ProductCard,
  P as ProductCardThemeEnum,
  Zt as Radios,
  ke as Row,
  ot as Select,
  ct as SelectOption,
  bt as SkipLink,
  Wt as SpacingUtilities,
  xt as SummaryCard,
  wt as SummaryList,
  G as Table,
  he as TableBodyRow,
  Xe as TableCaption,
  Ke as TableCell,
  pe as TableHeaderCell,
  kt as Tag,
  At as Textarea,
  Mt as WarningCallout,
  It as WidthContainer,
  we as brandLogos,
  xe as getBrandLogo,
  Ft as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
