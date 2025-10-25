import * as S from "react";
import e, { createElement as ce, forwardRef as ie } from "react";
import { c as w, C as Ne, b as $, R as be, a as V, e as X } from "../SkipLink-ByzSQC80.js";
import { B as Ut, F as Qt, G as Rt, S as Ft, g as Wt } from "../SkipLink-ByzSQC80.js";
const ke = ({
  ariaLabel: t = "Account",
  items: a = [],
  className: r,
  variant: n = "default"
}) => {
  if (!a || a.length === 0)
    return null;
  const s = (l) => {
    const c = l.icon ? /* @__PURE__ */ e.createElement(
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
    ) : null, i = l.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: l.html } }) : l.text, d = /* @__PURE__ */ e.createElement(e.Fragment, null, c, i);
    return l.href ? /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-account__link nhsuk-header__account-link",
        href: l.href
      },
      d
    ) : l.action ? /* @__PURE__ */ e.createElement(
      "form",
      {
        className: "nhsuk-account__form",
        action: l.action,
        method: l.method || "post"
      },
      /* @__PURE__ */ e.createElement("button", { className: "nhsuk-account__button", type: "submit", role: "button" }, d)
    ) : /* @__PURE__ */ e.createElement("span", null, d);
  };
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: w(
        "nhsuk-account",
        {
          "nhsuk-account--white": n === "white"
        },
        r
      ),
      "aria-label": t
    },
    /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-account__list" }, a.map(
      (l, c) => l && /* @__PURE__ */ e.createElement(
        "li",
        {
          key: c,
          className: w(
            "nhsuk-account__item nhsuk-header__account-item",
            l.className
          )
        },
        s(l)
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
function Ce(t, { isClient: a, brand: r }) {
  const {
    className: n,
    logo: s = {},
    service: l = {},
    serviceName: c,
    organisation: i,
    // NOTE: search component intentionally omitted in server render to avoid importing client hooks
    // search,
    account: d,
    navigation: o,
    containerClasses: h,
    variant: f = "default",
    attributes: g = {},
    maxVisibleItems: u,
    // deprecated (ignored)
    responsiveNavigation: b = !0,
    // Consume logoVariant for server-side logo selection while preventing DOM leakage via ...rest
    logoVariant: p = de.Full,
    ...k
  } = t;
  "maxVisibleItems" in k && delete k.maxVisibleItems;
  const y = {
    ...l,
    text: l?.text ?? c
  }, N = y.href && !s.href || y.href && y.href === s.href, M = N ? y.href : s.href, x = w(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": f === "organisation" || i,
      "nhsuk-header--white": f === "white"
    },
    n
  ), I = w(
    "nhsuk-header__container",
    h
  ), _ = w(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": o?.white,
      "nhsuk-header__navigation--justified": o?.justified
    },
    o?.className
  ), L = r === "fdp" ? "fdp" : "nhs", E = () => /* @__PURE__ */ e.createElement(
    "svg",
    {
      className: "nhsuk-header__logo",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 200 80",
      height: "40",
      width: "100",
      focusable: "false",
      role: "img",
      "aria-label": s.ariaLabel || "NHS"
    },
    /* @__PURE__ */ e.createElement("title", null, s.ariaLabel || "NHS"),
    /* @__PURE__ */ e.createElement(
      "path",
      {
        fill: "#fff",
        d: "M200 0v80H0V0h200Zm-27.5 5.5c-14.5 0-29 5-29 22 0 10.2 7.7 13.5 14.7 16.3l.7.3c5.4 2 10.1 3.9 10.1 8.4 0 6.5-8.5 7.5-14 7.5s-12.5-1.5-16-3.5L135 70c5.5 2 13.5 3.5 20 3.5 15.5 0 32-4.5 32-22.5 0-19.5-25.5-16.5-25.5-25.5 0-5.5 5.5-6.5 12.5-6.5a35 35 0 0 1 14.5 3l4-13.5c-4.5-2-12-3-20-3Zm-131 2h-22l-14 65H22l9-45h.5l13.5 45h21.5l14-65H64l-9 45h-.5l-13-45Zm63 0h-18l-13 65h17l6-28H117l-5.5 28H129l13.5-65H125L119.5 32h-20l5-24.5Z"
      }
    )
  ), m = () => {
    if (s.src)
      return /* @__PURE__ */ e.createElement(
        "img",
        {
          className: "nhsuk-header__organisation-logo",
          src: s.src,
          width: "280",
          alt: s.ariaLabel || (L === "fdp" ? "FDP" : "NHS")
        }
      );
    if (L === "fdp") {
      const v = xe(oe.FDP, p);
      if (v?.src)
        return /* @__PURE__ */ e.createElement(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: v.src,
            "data-logo-variant": p,
            width: "280",
            alt: v.ariaLabel || "FDP"
          }
        );
    }
    return E();
  }, C = () => i ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, i.name, i.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", i.split)), i.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, i.descriptor)) : null, D = (v, A) => v ? A ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: A }, v) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, v) : null, T = (v) => v.active || v.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, v.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text) : v.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: v.html } }) : v.text;
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "header",
    {
      className: x,
      role: "banner",
      "data-module": "nhsuk-header",
      ...g,
      ...k
    },
    /* @__PURE__ */ e.createElement("div", { className: I }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, M ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: M }, m(), C(), N && D(y.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, m(), C(), N && D(y.text)), y.text && !N && D(y.text, y.href)), /* @__PURE__ */ e.createElement(
      ke,
      {
        ...d,
        variant: f === "white" ? "white" : "default"
      }
    )),
    o && o.items && o.items.length > 0 && /* @__PURE__ */ e.createElement(
      "nav",
      {
        className: _,
        "aria-label": o.ariaLabel || "Menu",
        "data-ssr-hydrating": "true"
      },
      /* @__PURE__ */ e.createElement(
        "div",
        {
          className: w(
            "nhsuk-header__navigation-container",
            "nhsuk-width-container",
            {
              "nhsuk-header__navigation-container--ssr": !a
            },
            h
          )
        },
        /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, o.items.map((v, A) => /* @__PURE__ */ e.createElement(
          "li",
          {
            key: A,
            className: w(
              "nhsuk-header__navigation-item",
              {
                "nhsuk-header__navigation-item--current": v.active || v.current
              },
              v.className
            ),
            ...v.attributes || {}
          },
          /* @__PURE__ */ e.createElement(
            "a",
            {
              className: "nhsuk-header__navigation-link",
              href: v.href,
              ...v.active || v.current ? { "aria-current": v.current ? "page" : "true" } : {}
            },
            T(v)
          )
        )))
      )
    ),
    !1
  ), /* @__PURE__ */ e.createElement(
    "script",
    {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: `
					(function() {
						function init() {
							try {
								var header = document.querySelector('header.nhsuk-header[data-module="nhsuk-header"]');
								if (!header) return;
								// Prefer global behaviours if already present
								if (window.__nhsHeaderBehaviours && window.__nhsHeaderBehaviours.initHeaders) {
									window.__nhsHeaderBehaviours.initHeaders(header);
									console?.log?.('[HeaderServer] Initialized via global behaviours');
									return;
								}
								// Fallback: attempt dynamic import (works if app bundles /behaviours)
								import('@fergusbisset/nhs-fdp-design-system/behaviours')
									.then(function(mod){
										if (mod && mod.initHeaders) {
											mod.initHeaders(header);
											console?.log?.('[HeaderServer] Initialized via dynamic import');
										}
									})
									.catch(function(err){
										console?.warn?.('[HeaderServer] Could not load behaviours module. Import "@fergusbisset/nhs-fdp-design-system/behaviours" in your app.', err);
									});
							} catch (e) {
								console?.warn?.('[HeaderServer] init error', e);
							}
						}
						if (document.readyState === 'loading') {
							document.addEventListener('DOMContentLoaded', init);
						} else {
							setTimeout(init, 0);
						}
					})();
					`.trim()
      }
    }
  ));
}
const pt = (t) => {
  const a = t.attributes?.["data-brand"];
  return Ce(t, {
    isClient: !1,
    brand: a === "fdp" || a === "nhs" ? a : void 0
  });
}, ft = ({
  text: t,
  href: a,
  openInNewWindow: r = !1,
  className: n,
  ...s
}) => {
  const l = w(
    "nhsuk-action-link__link",
    n
  );
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-action-link" }, /* @__PURE__ */ e.createElement(
    "a",
    {
      className: l,
      href: a,
      target: r ? "_blank" : void 0,
      rel: r ? "noopener noreferrer" : void 0,
      ...s
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
  const a = t.variant || "primary", r = t.size || "default", n = !!t.fullWidth, s = [
    "nhs-aria-button",
    `nhs-aria-button--${a}`,
    r !== "default" ? `nhs-aria-button--${r}` : "",
    n ? "nhs-aria-button--full-width" : "",
    t.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: t.href ? "a" : "button",
    classes: s,
    data: { module: "nhs-button" },
    attrs: t.href ? { href: t.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!t.preventDoubleClick
  };
}
var ue = /* @__PURE__ */ ((t) => (t.Primary = "primary", t.Secondary = "secondary", t.Reverse = "reverse", t.Warning = "warning", t.Login = "login", t.Metric = "metric", t))(ue || {}), me = /* @__PURE__ */ ((t) => (t.Small = "small", t.Default = "default", t.Large = "large", t))(me || {});
const ee = S.forwardRef(function(a, r) {
  const {
    children: n,
    variant: s = ue.Primary,
    size: l = me.Default,
    fullWidth: c = !1,
    className: i = "",
    preventDoubleClick: d = !1,
    ...o
  } = a, h = De({
    variant: s,
    size: l,
    fullWidth: c,
    className: i,
    href: "href" in o ? o.href : void 0,
    preventDoubleClick: d
  });
  if ("href" in o && o.href) {
    const A = o, {
      id: z,
      style: Z,
      title: B,
      ["aria-label"]: R,
      ["aria-describedby"]: O,
      ["aria-labelledby"]: F,
      tabIndex: W,
      ...fe
    } = A;
    return /* @__PURE__ */ S.createElement(
      "a",
      {
        ref: r,
        href: A.href,
        target: A.target,
        rel: A.rel,
        className: h.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...d && { "data-prevent-double-click": "true" },
        id: z,
        style: Z,
        title: B,
        "aria-label": R,
        "aria-describedby": O,
        "aria-labelledby": F,
        tabIndex: W,
        ...fe
      },
      n
    );
  }
  const f = o, {
    id: g,
    style: u,
    title: b,
    ["aria-label"]: p,
    ["aria-describedby"]: k,
    ["aria-labelledby"]: y,
    tabIndex: N,
    name: M,
    value: x,
    form: I,
    formAction: _,
    formEncType: L,
    formMethod: E,
    formNoValidate: m,
    formTarget: C,
    autoFocus: D,
    type: T,
    disabled: j,
    ...v
  } = f;
  return /* @__PURE__ */ S.createElement(
    "button",
    {
      ref: r,
      type: T || "button",
      disabled: j,
      className: h.classes,
      "data-module": "nhs-button",
      ...d && { "data-prevent-double-click": "true" },
      id: g,
      style: u,
      title: b,
      "aria-label": p,
      "aria-describedby": k,
      "aria-labelledby": y,
      tabIndex: N,
      name: M,
      value: x,
      form: I,
      formAction: _,
      formEncType: L,
      formMethod: E,
      formNoValidate: m,
      formTarget: C,
      autoFocus: D,
      ...v
    },
    n
  );
});
ee.displayName = "ButtonServer";
const Nt = ({
  text: t = "Back",
  html: a,
  href: r = "#",
  className: n,
  element: s = "a",
  onClick: l,
  ...c
}) => {
  const i = w(
    "nhsuk-back-link",
    n
  ), d = w(
    "nhsuk-back-link__link"
  ), o = () => /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
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
  return /* @__PURE__ */ e.createElement("div", { className: i }, s === "button" ? /* @__PURE__ */ e.createElement(
    "button",
    {
      className: d,
      onClick: l,
      type: "button",
      ...c
    },
    o()
  ) : /* @__PURE__ */ e.createElement(
    "a",
    {
      className: d,
      href: r,
      ...c
    },
    o()
  ));
};
function Se(t) {
  const { color: a = "default", noBorder: r, closable: n, disabled: s, className: l } = t;
  return { classes: [
    "nhsuk-tag",
    a !== "default" ? `nhsuk-tag--${a}` : "",
    r ? "nhsuk-tag--no-border" : "",
    n ? "nhsuk-tag--closable" : "",
    s ? "nhsuk-tag--disabled" : "",
    l || ""
  ].filter(Boolean).join(" "), showClose: !!n, disabled: !!s };
}
const bt = ({
  text: t,
  html: a,
  children: r,
  color: n = "default",
  noBorder: s = !1,
  closable: l = !1,
  onClose: c,
  disabled: i = !1,
  className: d,
  ...o
}) => {
  const h = Se({ color: n, noBorder: s, closable: l, disabled: i, className: d }), f = (g) => {
    g.preventDefault(), g.stopPropagation(), !i && c && c();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: h.classes, ...o }, r || (a ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } }) : t), l && /* @__PURE__ */ e.createElement(
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
function Te(t) {
  const a = t.size || "m", r = [
    "nhsuk-label",
    a !== "m" ? `nhsuk-label--${a}` : "",
    t.className || ""
  ].filter(Boolean).join(" ");
  return {
    tag: t.isPageHeading ? "h1" : "label",
    classes: r,
    size: a,
    htmlFor: t.isPageHeading ? void 0 : t.htmlFor,
    isPageHeading: !!t.isPageHeading
  };
}
const te = ({
  htmlFor: t,
  className: a,
  isPageHeading: r = !1,
  size: n = "m",
  children: s,
  ...l
}) => {
  const c = Te({ size: n, isPageHeading: r, className: a, htmlFor: t }), i = c.tag;
  return /* @__PURE__ */ e.createElement(i, { className: c.classes, htmlFor: c.htmlFor, ...l }, r ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: t }, s) : s);
};
function je(t) {
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
  const a = t.level ?? je(t.size), r = [
    "nhsuk-heading",
    t.size ? `nhsuk-heading--${t.size}` : "",
    t.className || ""
  ].filter(Boolean).join(" "), n = t.marginBottom ? { marginBottom: t.marginBottom } : void 0;
  return { tag: `h${a}`, classes: r, style: n };
}
const H = ({
  level: t,
  className: a,
  text: r,
  html: n,
  children: s,
  size: l,
  marginBottom: c,
  ...i
}) => {
  const d = Ae({ level: t, size: l, className: a, marginBottom: c }), o = s || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : r);
  return ce(
    d.tag,
    { className: d.classes, style: d.style, ...i },
    o
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
  children: r,
  ...n
}) => {
  const s = ze({ id: t, className: a });
  return /* @__PURE__ */ e.createElement("div", { className: s.classes, id: s.id, ...n }, r);
};
function Ze(t) {
  return {
    classes: ["nhsuk-error-message", t.className || ""].filter(Boolean).join(" "),
    id: t.id,
    visuallyHiddenText: t.visuallyHiddenText ?? "Error:"
  };
}
const He = ({ id: t, className: a, visuallyHiddenText: r = "Error:", children: n, ...s }) => {
  const l = Ze({ id: t, className: a, visuallyHiddenText: r });
  return /* @__PURE__ */ e.createElement("span", { className: l.classes, id: l.id, ...s }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, l.visuallyHiddenText, " "), n);
};
function Pe(t) {
  const a = ["nhsuk-fieldset", t.className || ""].filter(Boolean).join(" "), r = t.legend ? [
    "nhsuk-fieldset__legend",
    t.legend.size ? `nhsuk-fieldset__legend--${t.legend.size}` : "",
    t.legend.className || ""
  ].filter(Boolean).join(" ") : void 0;
  return {
    fieldsetClasses: a,
    legendClasses: r,
    legendIsPageHeading: !!t.legend?.isPageHeading,
    describedBy: t.describedBy
  };
}
const ae = ({
  children: t,
  legend: a,
  className: r,
  describedBy: n,
  ...s
}) => {
  const l = Pe({
    className: r,
    describedBy: n,
    legend: a ? {
      size: a.size,
      className: a.className,
      isPageHeading: a.isPageHeading
    } : void 0
  }), c = () => {
    const i = a?.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a.html } }) : a?.text;
    return l.legendIsPageHeading ? /* @__PURE__ */ e.createElement("h1", { className: "nhsuk-fieldset__heading" }, i) : i;
  };
  return /* @__PURE__ */ e.createElement(
    "fieldset",
    {
      className: l.fieldsetClasses,
      "aria-describedby": l.describedBy,
      ...s
    },
    a && (a.text || a.html) && /* @__PURE__ */ e.createElement("legend", { className: l.legendClasses }, c()),
    t
  );
}, kt = ({
  text: t = "Skip to main content",
  href: a = "#maincontent",
  classes: r,
  attributes: n = {}
}) => {
  const s = w("nhsuk-skip-link", r);
  return /* @__PURE__ */ e.createElement(
    "a",
    {
      className: s,
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
    text: r,
    html: n,
    open: s = !1,
    className: l = "",
    id: c,
    children: i,
    ...d
  }, o) => {
    const h = [
      "nhsuk-details",
      l
    ].filter(Boolean).join(" "), f = a ? /* @__PURE__ */ e.createElement(
      "span",
      {
        className: "nhsuk-details__summary-text",
        dangerouslySetInnerHTML: { __html: a }
      }
    ) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-details__summary-text" }, t);
    let g;
    return i ? g = i : n ? g = /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : r && (g = r), /* @__PURE__ */ e.createElement(
      "details",
      {
        ref: o,
        id: c,
        className: h,
        open: s,
        ...d
      },
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, f),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, g)
    );
  }
);
Ge.displayName = "Details";
const yt = ({
  text: t,
  html: a,
  children: r,
  className: n,
  ...s
}) => {
  const l = w("nhsuk-inset-text", n), c = () => r || (a ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a } }) : t ? /* @__PURE__ */ e.createElement("p", null, t) : null);
  return /* @__PURE__ */ e.createElement("div", { className: l, ...s }, c());
}, Oe = ({
  id: t,
  className: a,
  headingText: r,
  headingHtml: n,
  headingLevel: s = 2,
  bodyText: l,
  bodyHtml: c,
  children: i,
  ...d
}) => {
  const o = w(
    "nhsuk-panel",
    a
  ), h = () => !r && !n && !i ? null : n ? /* @__PURE__ */ e.createElement(
    H,
    {
      level: s,
      className: "nhsuk-panel__heading",
      html: n,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : r ? /* @__PURE__ */ e.createElement(
    H,
    {
      level: s,
      className: "nhsuk-panel__heading",
      text: r,
      marginBottom: "var(--panel-heading-margin, 24px)"
    }
  ) : null, f = () => i ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, i) : c ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: c }
    }
  ) : l ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ e.createElement("p", null, l)) : null;
  return /* @__PURE__ */ e.createElement("div", { className: o, id: t, ...d }, h(), f());
}, J = ({
  children: t,
  href: a,
  active: r = !1,
  attributes: n = {}
}) => /* @__PURE__ */ e.createElement("li", { className: "nhsuk-breadcrumb__item" }, r ? /* @__PURE__ */ e.createElement(
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
  classes: r,
  labelText: n = "Breadcrumb",
  href: s,
  text: l,
  reverse: c = !1,
  attributes: i = {}
}) => {
  const d = () => a ? e.Children.toArray(a).filter(
    (k) => e.isValidElement(k) && (k.type === J || k.type?.displayName === "BreadcrumbItem")
  ).map((k) => ({
    text: typeof k.props.children == "string" ? k.props.children : String(k.props.children),
    href: k.props.href,
    active: k.props.active,
    attributes: k.props.attributes
  })) : [], o = () => a ? d() : s && l ? [{ href: s, text: l }] : t, h = () => {
    const p = o();
    if (p && p.length > 0) {
      const k = p.slice().reverse().find((y) => y.href && !y.active);
      if (k)
        return { href: k.href, text: k.text };
    }
    return { text: "Home" };
  }, f = o(), g = h(), u = w(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": c
    },
    r
  ), b = n;
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: u,
      "aria-label": b,
      role: "navigation",
      ...i
    },
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-breadcrumb__list", role: "list" }, a ? (
      // Render children directly if using compound component pattern
      e.Children.map(a, (p, k) => e.isValidElement(p) && (p.type === J || p.type?.displayName === "BreadcrumbItem") ? e.cloneElement(p, { key: k }) : null)
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
    g.href && /* @__PURE__ */ e.createElement("p", { className: "nhsuk-breadcrumb__back" }, /* @__PURE__ */ e.createElement(
      "a",
      {
        className: "nhsuk-breadcrumb__backlink",
        href: g.href,
        role: "link",
        "aria-label": `Back to ${g.text}`,
        ...t.length > 0 ? t[t.length - 1]?.attributes || {} : {}
      },
      /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Back to  "),
      g.text
    ))
  );
}, Qe = Ue;
Qe.Item = J;
J.displayName = "BreadcrumbItem";
const Re = ({
  children: t,
  type: a = "bullet",
  size: r = "medium",
  border: n = !1,
  className: s,
  role: l,
  as: c,
  ...i
}) => {
  const d = c || (a === "number" ? "ol" : "ul"), o = w(
    "nhsuk-list",
    {
      "nhsuk-list--bullet": a === "bullet",
      "nhsuk-list--number": a === "number",
      "nhsuk-list--none": a === "none",
      "nhsuk-list--border": n,
      [`nhsuk-list--${r}`]: r !== "medium"
    },
    s
  );
  return /* @__PURE__ */ e.createElement(d, { className: o, role: l, ...i }, t);
}, Fe = ({
  children: t,
  className: a,
  ...r
}) => {
  const n = w("nhsuk-list__item", a);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...r }, t);
}, We = Re;
We.Item = Fe;
const Et = ({
  className: t,
  links: a = [],
  linksColumn2: r,
  linksColumn3: n,
  metaLinks: s,
  copyright: l = "© NHS England",
  containerClasses: c,
  attributes: i = {},
  style: d,
  footerStyle: o,
  containerStyle: h
}) => {
  const f = (u, b = !1) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `${u.URL}-${u.label}`,
      className: w("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": b
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
  ), g = !!(r || n);
  return /* @__PURE__ */ e.createElement("footer", { role: "contentinfo", ...i, style: { ...i?.style, ...d } }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-footer-container" }, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: w("nhsuk-width-container", c),
      style: h
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Support links"),
    /* @__PURE__ */ e.createElement("div", { className: w("nhsuk-footer", t), style: o }, g ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, a.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, a.map((u) => f(u))), r && r.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, r.map((u) => f(u))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((u) => f(u))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, s.map((u) => f(u))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, a.map((u) => f(u, !0)), (r || []).map((u) => f(u, !0)), (n || []).map((u) => f(u, !0)), (s || []).map((u) => f(u, !0)))
    )),
    !g && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l))
  ), g && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l)))));
}, Mt = ({
  heading: t,
  headingLevel: a = 3,
  text: r,
  html: n,
  children: s,
  className: l,
  ...c
}) => {
  const i = /important/i.test(t), d = () => s || (n ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: n } }) : r ? /* @__PURE__ */ e.createElement("p", null, r) : null), o = [
    "nhsuk-warning-callout",
    l
  ].filter(Boolean).join(" "), h = `h${a}`;
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: o,
      ...c
    },
    ce(
      h,
      { className: "nhsuk-warning-callout__label" },
      i ? /* @__PURE__ */ e.createElement(e.Fragment, null, t, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), t)
    ),
    d()
  );
}, It = (t) => /* @__PURE__ */ e.createElement(Ne, { ...t }), _t = ({
  items: t,
  classes: a,
  ariaLabel: r = "Pages in this guide",
  attributes: n = {}
}) => {
  const s = w("nhsuk-contents-list", a), l = (c, i) => c.current ? /* @__PURE__ */ e.createElement(
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
      className: s,
      role: "navigation",
      "aria-label": r,
      ...n
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Contents"),
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-contents-list__list" }, t.map((c, i) => l(c, i)))
  );
}, Je = ie(
  ({
    title: t,
    type: a,
    items: r,
    hidePrefix: n = !1,
    headingLevel: s = 3,
    className: l,
    ...c
  }, i) => {
    const d = ["nhsuk-do-dont-list"];
    l && d.push(l);
    const o = [
      "nhsuk-list",
      a === "tick" ? "nhsuk-list--tick" : "nhsuk-list--cross"
    ], h = () => a === "cross" ? /* @__PURE__ */ e.createElement(
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
    ), f = (u) => a === "cross" && !n ? `do not ${u}` : u, g = () => /* @__PURE__ */ e.createElement(
      H,
      {
        level: s,
        className: "nhsuk-do-dont-list__label",
        text: t
      }
    );
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        ref: i,
        className: d.join(" "),
        ...c
      },
      g(),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: o.join(" "), role: "list" }, r.map((u, b) => /* @__PURE__ */ e.createElement("li", { key: b }, h(), f(u.item)))))
    );
  }
);
Je.displayName = "DoDontList";
const vt = ({
  src: t,
  alt: a,
  caption: r,
  sizes: n,
  srcset: s,
  className: l,
  ...c
}) => {
  const i = [
    "nhsuk-image",
    l
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
        ...n && s ? { sizes: n, srcSet: s } : {}
      }
    ),
    r && /* @__PURE__ */ e.createElement(
      "figcaption",
      {
        className: "nhsuk-image__caption",
        dangerouslySetInnerHTML: { __html: r }
      }
    )
  );
}, Lt = ({
  previousUrl: t,
  previousPage: a,
  nextUrl: r,
  nextPage: n,
  classes: s,
  attributes: l = {}
}) => {
  const c = w("nhsuk-pagination", s);
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: c,
      role: "navigation",
      "aria-label": "Pagination",
      ...l
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
    ))), r && n && /* @__PURE__ */ e.createElement("li", { className: "nhsuk-pagination-item--next" }, /* @__PURE__ */ e.createElement("a", { className: "nhsuk-pagination__link nhsuk-pagination__link--next", href: r }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-pagination__title" }, "Next"), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":"), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-pagination__page" }, n), /* @__PURE__ */ e.createElement(
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
  className: r,
  ...n
}) => {
  const s = w(
    "nhsuk-summary-list",
    {
      "nhsuk-summary-list--no-border": a
    },
    r
  ), l = (i) => i.children ? i.children : i.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text ? i.text : null, c = (i) => !i || !i.items.length ? null : /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__actions" }, /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-summary-list__actions-list" }, i.items.map((d, o) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: o,
      className: "nhsuk-summary-list__actions-list-item"
    },
    /* @__PURE__ */ e.createElement(
      "a",
      {
        href: d.href,
        className: "nhsuk-link",
        ...d.attributes
      },
      l(d),
      d.visuallyHiddenText && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, d.visuallyHiddenText)
    )
  ))));
  return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-summary-list-container" }, /* @__PURE__ */ e.createElement("dl", { className: s, ...n }, t.map((i, d) => /* @__PURE__ */ e.createElement("div", { key: d, className: "nhsuk-summary-list__row" }, /* @__PURE__ */ e.createElement("dt", { className: "nhsuk-summary-list__key" }, l(i.key)), /* @__PURE__ */ e.createElement("dd", { className: "nhsuk-summary-list__value" }, l(i.value)), c(i.actions)))));
}, xt = ({
  title: t,
  value: a,
  subtitle: r,
  variant: n = "default",
  href: s,
  className: l = "",
  ariaLabel: c,
  ...i
}) => {
  const d = [
    "nhs-fdp-summary-card",
    `nhs-fdp-summary-card--${n}`,
    l
  ].filter(Boolean).join(" "), o = /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(H, { level: 3, className: "nhs-fdp-summary-card__title" }, t), /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__value" }, a), r && /* @__PURE__ */ e.createElement("p", { className: "nhs-fdp-summary-card__subtitle" }, r));
  return s ? /* @__PURE__ */ e.createElement(
    "a",
    {
      className: `${d} nhs-fdp-summary-card--clickable`,
      href: s,
      "aria-label": c || `${t}: ${a}`,
      ...i
    },
    o
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: d,
      "aria-label": c,
      ...i
    },
    o
  );
};
function ge(t) {
  var a, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (a = 0; a < s; a++) t[a] && (r = ge(t[a])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function re() {
  for (var t, a, r = 0, n = "", s = arguments.length; r < s; r++) (t = arguments[r]) && (a = ge(t)) && (n && (n += " "), n += a);
  return n;
}
const Ct = ({
  label: t,
  value: a,
  unit: r,
  delta: n,
  status: s = "neutral",
  variant: l = "default",
  subtitle: c,
  metadata: i,
  trendData: d,
  loading: o = !1,
  error: h,
  valueFormatter: f,
  className: g,
  style: u,
  id: b,
  announceDelta: p = !0,
  visual: k
}) => {
  const y = S.useId(), N = b || y, M = `${N}-label`, x = `${N}-value`, I = `${N}-delta`, _ = typeof a == "number" && !Number.isNaN(a), L = o ? "—" : h ? "" : _ ? f ? f(a) : a.toLocaleString() : a;
  let E, m = "", C = "";
  if (n && !o && !h) {
    E = n.direction || (n.value > 0 ? "up" : n.value < 0 ? "down" : "neutral");
    const D = Math.abs(n.value), T = E === "up" ? `+${D}` : E === "down" ? `-${D}` : "0", j = n.isPercent ? "%" : "";
    if (m = `${T}${j}`, n.ariaLabel)
      C = n.ariaLabel;
    else {
      const v = n.invert ? E === "down" : E === "up";
      C = `${E === "neutral" ? "no change" : E === "up" ? "up" : "down"} ${D}${j}${E === "neutral" ? "" : v ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: re(
        "fdp-metric-card",
        l && `fdp-metric-card--${l}`,
        s && `fdp-metric-card--status-${s}`,
        o && "fdp-metric-card--loading",
        h && "fdp-metric-card--error",
        g
      ),
      style: u,
      role: "group",
      "aria-labelledby": M,
      "data-component": "MetricCard"
    },
    /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__inner" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__header" }, /* @__PURE__ */ S.createElement("h3", { id: M, className: "fdp-metric-card__label" }, t), i && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__metadata" }, i)), /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__content" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__value-section" }, /* @__PURE__ */ S.createElement("div", { id: x, className: "fdp-metric-card__value" }, o ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" })) : h ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__error", role: "alert" }, h) : /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__number" }, L), r && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__unit" }, r))), c && !o && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__subtitle" }, c)), n && !o && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__delta-section" }, /* @__PURE__ */ S.createElement(
      "div",
      {
        id: I,
        "aria-label": C,
        className: re(
          "fdp-metric-card__delta",
          E && `fdp-metric-card__delta--${E}`
        )
      },
      /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-value" }, m),
      n.period && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-period" }, n.period)
    )), d && d.length > 0 && !o && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })), k && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__visual", "aria-hidden": "true" }, k), p && n && !n.ariaLabel && !o && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-visually-hidden", "aria-live": "polite" }, C))
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
  let r = t;
  return a.forEach((n) => {
    r = r.replace(n.regex, (s) => `<span class="nhsuk-code-${n.cls}">${s}</span>`);
  }), r;
}, Y = (t, a, r) => {
  if (r || !a) return t;
  const n = Ye();
  if (n && n.languages) {
    const s = n.languages[a] ? a : n.languages.typescript && (a === "ts" || a === "tsx" || a === "typescript") ? "typescript" : n.languages.json && a === "json" ? "json" : void 0;
    if (s)
      try {
        return n.highlight(t, n.languages[s], s);
      } catch {
      }
  }
  return $e(t);
}, Ve = ({
  rows: t,
  head: a,
  caption: r,
  captionSize: n,
  firstCellIsHeader: s = !1,
  responsive: l = !1,
  heading: c,
  headingLevel: i = 3,
  panel: d = !1,
  panelClasses: o,
  tableClasses: h,
  classes: f,
  attributes: g,
  "data-testid": u,
  columns: b,
  data: p,
  visuallyHiddenCaption: k = !1
}) => {
  const y = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), N = w(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": l
    },
    h
  ), M = w(f), x = (m, C) => {
    const D = w(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${m.format}`]: m.format
      },
      m.classes
    ), T = {
      scope: "col",
      ...m.colspan && { colSpan: m.colspan },
      ...m.rowspan && { rowSpan: m.rowspan },
      ...l && { role: "columnheader" },
      ...m.attributes
    };
    let j;
    if (m.node != null)
      j = /* @__PURE__ */ e.createElement(e.Fragment, null, m.node);
    else if (m.html)
      j = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: m.html } });
    else if (m.code != null) {
      const v = Array.isArray(m.code), A = v ? m.code.join(`
`) : m.code, z = v || A.includes(`
`), Z = {
        className: w("nhsuk-table__code", m.codeClassName, {
          "nhsuk-table__code--block": z,
          "nhsuk-table__code--inline": !z
        }),
        ...m.codeLanguage ? { "data-language": m.codeLanguage } : {}
      }, B = Y(A, m.codeLanguage);
      j = z ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...Z,
          dangerouslySetInnerHTML: { __html: B }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...Z,
          dangerouslySetInnerHTML: { __html: B }
        }
      );
    } else
      j = m.text;
    return /* @__PURE__ */ e.createElement("th", { key: C, className: D, ...T }, j);
  }, I = (m, C, D) => {
    const T = s && D || m.rowHeader, j = w(
      T ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${T ? "header" : "cell"}--${m.format}`]: m.format
      },
      m.classes
    ), v = {
      ...T && { scope: "row" },
      ...m.colspan && { colSpan: m.colspan },
      ...m.rowspan && { rowSpan: m.rowspan },
      ...l && {
        role: T ? "rowheader" : "cell",
        ...m.header && { "data-label": m.header }
      },
      ...m.attributes
    };
    let A;
    if (m.node != null)
      A = /* @__PURE__ */ e.createElement(e.Fragment, null, m.node);
    else if (m.html)
      A = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: m.html } });
    else if (m.code != null) {
      const B = Array.isArray(m.code), R = B ? m.code.join(`
`) : m.code, O = B || R.includes(`
`), F = {
        className: w("nhsuk-table__code", m.codeClassName, {
          "nhsuk-table__code--block": O,
          "nhsuk-table__code--inline": !O
        }),
        ...m.codeLanguage ? { "data-language": m.codeLanguage } : {}
      }, W = Y(
        R,
        m.codeLanguage,
        m.disableHighlight
      );
      A = O ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...F,
          dangerouslySetInnerHTML: { __html: W }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...F,
          dangerouslySetInnerHTML: { __html: W }
        }
      );
    } else
      A = m.text;
    const z = /* @__PURE__ */ e.createElement(e.Fragment, null, l && m.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, m.header, " "), A), Z = T ? "th" : "td";
    return /* @__PURE__ */ e.createElement(Z, { key: C, className: j, ...v }, z);
  };
  let _ = a, L = t;
  !_ && b && b.length && (_ = b.map((m) => ({
    text: m.title,
    format: m.format,
    classes: m.headerClasses,
    attributes: m.headerAttributes
  }))), !L && b && p && p.length && (L = p.map((m, C) => b.map((D) => {
    const T = D.accessor ? D.accessor(m, C) : m[D.key];
    let j = { format: D.format, classes: D.cellClasses, attributes: D.cellAttributes };
    if (D.rowHeader && (j.rowHeader = !0), D.render) {
      const v = D.render(T, m, C, D);
      return v == null || typeof v == "boolean" ? { ...j, text: "" } : typeof v == "string" || typeof v == "number" ? { ...j, text: String(v) } : { ...j, ...v };
    }
    return { ...j, text: T != null ? String(T) : "" };
  })));
  const E = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: N,
      ...l && { role: "table" },
      ...g,
      ...u && { "data-testid": u }
    },
    r && /* @__PURE__ */ e.createElement("caption", { className: w(y, k && "nhsuk-u-visually-hidden") }, r),
    _ && _.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...l && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...l && { role: "row" } }, _.map(
        (m, C) => x(m, C)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, L && L.map((m, C) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: C,
        className: "nhsuk-table__row",
        ...l && { role: "row" }
      },
      m.map(
        (D, T) => I(D, T, T === 0)
      )
    )))
  );
  return d ? /* @__PURE__ */ e.createElement(Oe, { className: o }, c && /* @__PURE__ */ e.createElement(H, { level: i, className: "nhsuk-table__heading-tab" }, c), E()) : M ? /* @__PURE__ */ e.createElement("div", { className: M }, E()) : E();
}, Xe = ({
  children: t,
  size: a,
  className: r
}) => {
  const n = w(
    "nhsuk-table__caption",
    a && `nhsuk-table__caption--${a}`,
    r
  );
  return /* @__PURE__ */ e.createElement("caption", { className: n }, t);
}, he = ({
  responsive: t,
  className: a,
  children: r,
  ...n
}) => {
  const s = t ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: a, ...s, ...n }, r);
}, pe = ({
  text: t,
  html: a,
  node: r,
  code: n,
  codeLanguage: s,
  codeClassName: l,
  disableHighlight: c,
  format: i,
  classes: d,
  colspan: o,
  rowspan: h,
  attributes: f,
  responsive: g,
  as: u = "th"
}) => {
  const b = w(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${i}`]: i },
    d
  ), p = {
    scope: "col",
    ...o && { colSpan: o },
    ...h && { rowSpan: h },
    ...g && { role: "columnheader" },
    ...f
  };
  let k;
  if (r != null) k = /* @__PURE__ */ e.createElement(e.Fragment, null, r);
  else if (a) k = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } });
  else if (n != null) {
    const N = Array.isArray(n), M = N ? n.join(`
`) : n, x = N || M.includes(`
`), I = {
      className: w("nhsuk-table__code", l, {
        "nhsuk-table__code--block": x,
        "nhsuk-table__code--inline": !x
      }),
      ...s ? { "data-language": s } : {}
    }, _ = Y(
      M,
      s,
      c
    );
    k = x ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...I,
        dangerouslySetInnerHTML: { __html: _ }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...I, dangerouslySetInnerHTML: { __html: _ } });
  } else k = t;
  const y = u;
  return /* @__PURE__ */ e.createElement(y, { className: b, ...p }, k);
}, Ke = ({
  text: t,
  html: a,
  node: r,
  code: n,
  codeLanguage: s,
  codeClassName: l,
  disableHighlight: c,
  format: i,
  classes: d,
  colspan: o,
  rowspan: h,
  attributes: f,
  responsive: g,
  rowHeader: u
}) => {
  const b = !!u, p = b ? "th" : "td", k = w(
    b ? "nhsuk-table__header" : "nhsuk-table__cell",
    i && `nhsuk-table__${b ? "header" : "cell"}--${i}`,
    d
  ), y = {
    ...o && { colSpan: o },
    ...h && { rowSpan: h },
    ...b && { scope: "row" },
    ...g && { role: b ? "rowheader" : "cell" },
    ...f
  };
  let N;
  if (r != null) N = /* @__PURE__ */ e.createElement(e.Fragment, null, r);
  else if (a) N = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } });
  else if (n != null) {
    const M = Array.isArray(n), x = M ? n.join(`
`) : n, I = M || x.includes(`
`), _ = {
      className: w("nhsuk-table__code", l, {
        "nhsuk-table__code--block": I,
        "nhsuk-table__code--inline": !I
      }),
      ...s ? { "data-language": s } : {}
    }, L = Y(x, s, c);
    N = I ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ..._, dangerouslySetInnerHTML: { __html: L } })) : /* @__PURE__ */ e.createElement("code", { ..._, dangerouslySetInnerHTML: { __html: L } });
  } else N = t;
  return /* @__PURE__ */ e.createElement(p, { className: k, ...y }, N);
}, G = Ve;
G.Caption = Xe;
G.BodyRow = he;
G.HeaderCell = pe;
G.Cell = Ke;
let se = !1, le = !1;
Object.defineProperty(G, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !se && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), se = !0), he;
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
  headingClasses: r = "",
  text: n,
  html: s,
  imageURL: l,
  containerClasses: c = "",
  classes: i = "",
  children: d,
  ...o
}) => {
  const h = [
    "nhsuk-hero",
    l && t ? "nhsuk-hero--image nhsuk-hero--image-description" : "",
    l && !t ? "nhsuk-hero--image" : "",
    i
  ].filter(Boolean).join(" "), f = [
    "nhsuk-width-container",
    c,
    l ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    r,
    !d && !n && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), u = d || t || n || s, b = () => {
    if (!t) return null;
    const p = { className: g };
    switch (a) {
      case 1:
        return /* @__PURE__ */ e.createElement("h1", { ...p }, t);
      case 2:
        return /* @__PURE__ */ e.createElement("h2", { ...p }, t);
      case 3:
        return /* @__PURE__ */ e.createElement("h3", { ...p }, t);
      case 4:
        return /* @__PURE__ */ e.createElement("h4", { ...p }, t);
      case 5:
        return /* @__PURE__ */ e.createElement("h5", { ...p }, t);
      case 6:
        return /* @__PURE__ */ e.createElement("h6", { ...p }, t);
      default:
        return /* @__PURE__ */ e.createElement("h1", { ...p }, t);
    }
  };
  return /* @__PURE__ */ e.createElement(
    "section",
    {
      className: h,
      style: l ? { backgroundImage: `url('${l}')` } : void 0,
      role: "banner",
      ...o
    },
    l && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, u && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, b(), d || (s ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !l && u && /* @__PURE__ */ e.createElement("div", { className: f }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, b(), d || (s ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
qe.displayName = "Hero";
const et = e.forwardRef(({
  variant: t = "default",
  heading: a,
  headingHtml: r,
  headingLevel: n = 2,
  headingClasses: s,
  description: l,
  descriptionHtml: c,
  href: i,
  imgURL: d,
  imgAlt: o,
  ...h
}, f) => {
  const g = [
    "nhsuk-card",
    t === "clickable" && "nhsuk-card--clickable",
    t === "secondary" && "nhsuk-card--secondary",
    t === "feature" && "nhsuk-card--feature",
    h.className
  ].filter(Boolean).join(" "), u = [
    "nhsuk-card__content",
    t === "feature" && "nhsuk-card__content--feature",
    t === "primary" && "nhsuk-card__content--primary",
    t === "secondary" && "nhsuk-card__content--secondary"
  ].filter(Boolean).join(" "), b = [
    "nhsuk-card__heading",
    t === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), p = () => {
    if (r)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!a) return null;
    const N = () => i && t !== "feature" ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-card__link", href: i }, a) : a;
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: b
      },
      N()
    );
  }, k = () => h.children ? h.children : c ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: c } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, l) : null, y = () => t !== "primary" ? null : /* @__PURE__ */ e.createElement(
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
      className: g,
      ref: f
    },
    d && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: d,
        alt: o || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: u }, p(), k(), y())
  );
});
et.displayName = "Card";
const Dt = ({
  className: t,
  children: a,
  "data-testid": r,
  id: n
}) => {
  const s = ["nhsuk-card-group", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "ul",
    {
      className: s,
      "data-testid": r,
      id: n
    },
    a
  );
}, St = ({
  className: t,
  children: a,
  "data-testid": r
}) => {
  const n = ["nhsuk-card-group__item", t].filter(Boolean).join(" ");
  return /* @__PURE__ */ e.createElement(
    "li",
    {
      className: n,
      "data-testid": r
    },
    a
  );
}, Tt = ({
  type: t,
  heading: a,
  headingHtml: r,
  headingLevel: n = 3,
  headingClasses: s,
  description: l,
  descriptionHtml: c,
  className: i,
  children: d,
  "data-testid": o,
  id: h,
  "aria-label": f,
  "aria-labelledby": g,
  "aria-describedby": u
}) => {
  const b = [
    "nhsuk-care-card",
    `nhsuk-care-card--${t}`,
    i
  ].filter(Boolean).join(" "), p = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), k = () => {
    if (r)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!a) return null;
    const N = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[t], M = /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, N, " "), a);
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: p
      },
      M
    );
  }, y = () => d || (c ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: c } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, l) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: b,
      "data-testid": o,
      id: h,
      "aria-label": f,
      "aria-labelledby": g,
      "aria-describedby": u
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, k(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, y())
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
function K(t, a, r) {
  return Math.max(a, Math.min(r, t));
}
function at(t, a, r = 4) {
  const n = tt(t), s = [], l = ["rect", "hex", "circle"], c = Q.indexOf(a), i = [
    a,
    Q[(c + 2) % Q.length],
    Q[(c + 3) % Q.length]
  ], d = [], o = 1200, h = 400, f = 1.2, g = (y, N) => !(y.right < N.left || y.left > N.right || y.bottom < N.top || y.top > N.bottom), u = (y) => y.left >= 0 && y.top >= 0 && y.right <= 100 && y.bottom <= 100, b = (y, N, M, x, I, _) => {
    let L = 0, E = 0;
    if (y === "rect") {
      const m = x ?? 48, C = I ?? 36;
      L = m / o * 100, E = C / h * 100;
    } else if (y === "circle") {
      const m = _ ?? 40;
      L = m / o * 100, E = m / h * 100;
    } else {
      const m = _ ?? 40;
      L = m / o * 100, E = m * (Math.sqrt(3) / 2) / h * 100;
    }
    return {
      left: N - L / 2 - f,
      right: N + L / 2 + f,
      top: M - E / 2 - f,
      bottom: M + E / 2 + f
    };
  };
  let p = 0;
  const k = K(Math.round(r), 4, 12);
  for (; s.length < k && p < k * 120; ) {
    p++;
    const y = l[Math.floor(n() * l.length)], N = K(20 + n() * 60, 10, 90), M = K(20 + n() * 60, 10, 90), x = i[Math.floor(n() * i.length)], I = s.length < 2 ? "soft" : "none";
    if (y === "rect") {
      const _ = 40 + n() * 80, L = 28 + n() * 64, E = b(y, N, M, _, L);
      if (!u(E)) continue;
      let m = !1;
      for (let C = 0; C < d.length; C++)
        if (g(E, d[C])) {
          m = !0;
          break;
        }
      if (m) continue;
      d.push(E), s.push({ kind: y, x: N, y: M, width: _, height: L, gradient: x, rotate: 0, shadow: I });
    } else if (y === "circle") {
      const _ = 24 + n() * 80, L = b(y, N, M, void 0, void 0, _);
      if (!u(L)) continue;
      let E = !1;
      for (let m = 0; m < d.length; m++)
        if (g(L, d[m])) {
          E = !0;
          break;
        }
      if (E) continue;
      d.push(L), s.push({ kind: y, x: N, y: M, size: _, gradient: x, rotate: 0, shadow: I });
    } else {
      const _ = 28 + n() * 72, L = n() * 360, E = b(y, N, M, void 0, void 0, _);
      if (!u(E)) continue;
      let m = !1;
      for (let C = 0; C < d.length; C++)
        if (g(E, d[C])) {
          m = !0;
          break;
        }
      if (m) continue;
      d.push(E), s.push({ kind: y, x: N, y: M, size: _, gradient: x, rotate: L, shadow: I });
    }
  }
  return s;
}
const nt = ({ shapes: t, aspectRatio: a }) => {
  const n = 600 * a, s = 600, l = (c, i, d) => {
    const o = d / 2;
    return [0, 60, 120, 180, 240, 300].map((f) => {
      const g = f * Math.PI / 180, u = c + o * Math.cos(g), b = i + o * Math.sin(g);
      return `${u},${b}`;
    }).join(" ");
  };
  return /* @__PURE__ */ e.createElement(
    "svg",
    {
      className: "nhs-product-card__graphic",
      viewBox: `0 0 ${n} ${s}`,
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
      const c = t.map((o) => {
        const h = o.x / 100 * n, f = o.y / 100 * s;
        if (o.kind === "circle") {
          const g = (o.size ?? 40) / 2;
          return [0, 45, 90, 135, 180, 225, 270, 315].map((b) => {
            const p = b * Math.PI / 180;
            return [h + g * Math.cos(p), f + g * Math.sin(p)];
          });
        } else if (o.kind === "rect") {
          const g = o.width ?? 60, u = o.height ?? 40;
          return [
            [h - g / 2, f - u / 2],
            [h + g / 2, f - u / 2],
            [h + g / 2, f + u / 2],
            [h - g / 2, f + u / 2]
          ];
        } else {
          const u = (o.size ?? 40) / 2;
          return [0, 60, 120, 180, 240, 300].map((p) => {
            const k = p * Math.PI / 180;
            return [h + u * Math.cos(k), f + u * Math.sin(k)];
          });
        }
      }), i = 1, d = /* @__PURE__ */ new Set();
      for (let o = 0; o < t.length; o++) {
        const h = [], f = t[o].x / 100 * n, g = t[o].y / 100 * s;
        for (let u = 0; u < t.length; u++) {
          if (o === u) continue;
          const b = t[u].x / 100 * n, p = t[u].y / 100 * s, k = Math.sqrt((b - f) ** 2 + (p - g) ** 2);
          h.push({ index: u, dist: k });
        }
        h.sort((u, b) => u.dist - b.dist);
        for (let u = 0; u < i && u < h.length; u++) {
          const b = h[u].index, p = o < b ? `${o}-${b}` : `${b}-${o}`;
          d.add(p);
        }
      }
      return Array.from(d).map((o) => {
        const [h, f] = o.split("-").map(Number), g = c[h], u = c[f];
        let b = 1 / 0, p = [0, 0], k = [0, 0];
        for (const y of g)
          for (const N of u) {
            const M = Math.sqrt((N[0] - y[0]) ** 2 + (N[1] - y[1]) ** 2);
            M < b && (b = M, p = y, k = N);
          }
        return /* @__PURE__ */ e.createElement(
          "line",
          {
            key: o,
            x1: p[0],
            y1: p[1],
            x2: k[0],
            y2: k[1],
            stroke: "rgba(255,255,255,0.25)",
            strokeWidth: "1.5"
          }
        );
      });
    })()),
    t.map((c, i) => {
      const d = c.x / 100 * n, o = c.y / 100 * s, h = `url(#pc-grad-${c.gradient})`, f = c.shadow === "soft" ? "url(#pc-shadow-soft)" : c.shadow === "strong" ? "url(#pc-shadow-strong)" : void 0;
      if (c.kind === "circle") {
        const g = (c.size ?? 40) / 2;
        return /* @__PURE__ */ e.createElement(
          "circle",
          {
            key: i,
            cx: d,
            cy: o,
            r: g,
            fill: h,
            filter: f
          }
        );
      } else if (c.kind === "rect") {
        const g = c.width ?? 60, u = c.height ?? 40, b = c.rotate ? `rotate(${c.rotate} ${d} ${o})` : void 0;
        return /* @__PURE__ */ e.createElement(
          "rect",
          {
            key: i,
            x: d - g / 2,
            y: o - u / 2,
            width: g,
            height: u,
            rx: "4",
            fill: h,
            filter: f,
            transform: b
          }
        );
      } else {
        const g = c.rotate ? `rotate(${c.rotate} ${d} ${o})` : void 0;
        return /* @__PURE__ */ e.createElement(
          "polygon",
          {
            key: i,
            points: l(d, o, c.size ?? 40),
            fill: h,
            filter: f,
            transform: g
          }
        );
      }
    })
  );
}, jt = ({
  title: t,
  description: a,
  image: r,
  layout: n = "vertical",
  buttons: s = [],
  badge: l,
  theme: c = "blue",
  className: i,
  style: d,
  href: o,
  headingLevel: h = 3,
  footer: f,
  elevated: g = !0,
  imageAspectRatio: u = 1.5
}) => {
  const b = e.useMemo(() => {
    if (r?.type === "graphic") {
      if (r.shapes) return r.shapes;
      const M = r.seed ?? 0, x = r.theme ?? c;
      return at(M, x);
    }
    return [];
  }, [r, c]), p = [
    "nhs-product-card",
    `nhs-product-card--${n}`,
    `nhs-product-card--theme-${c}`,
    g && "nhs-product-card--elevated",
    o && "nhs-product-card--clickable",
    i
  ].filter(Boolean).join(" "), k = () => {
    if (!r) return null;
    const M = [
      "nhs-product-card__image",
      r.type === "graphic" && "nhs-product-card__image--graphic"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        className: M,
        style: { aspectRatio: u.toString() }
      },
      r.type === "photo" && r.src ? /* @__PURE__ */ e.createElement("img", { src: r.src, alt: r.alt || "" }) : r.type === "graphic" ? /* @__PURE__ */ e.createElement(nt, { shapes: b, aspectRatio: u }) : null
    );
  }, y = () => s.length ? /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__actions" }, s.map((M, x) => {
    const I = [
      "nhs-product-card__button",
      `nhs-product-card__button--${M.variant || "primary"}`,
      M.disabled && "nhs-product-card__button--disabled"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e.createElement(
      "a",
      {
        key: x,
        href: M.href,
        className: I,
        "aria-label": M.ariaLabel,
        "aria-disabled": M.disabled
      },
      M.label
    );
  })) : null, N = /* @__PURE__ */ e.createElement(e.Fragment, null, l && /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__badge" }, l), k(), /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__content" }, /* @__PURE__ */ e.createElement(H, { level: h, className: "nhs-product-card__title" }, t), /* @__PURE__ */ e.createElement("p", { className: "nhs-product-card__description" }, a), y(), f && /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__footer" }, f)));
  return o ? /* @__PURE__ */ e.createElement(
    "a",
    {
      href: o,
      className: p,
      style: d
    },
    N
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: p,
      style: d
    },
    N
  );
};
function rt(t) {
  const r = (t.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    t.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && t.width && t.width !== "full" ? `nhsuk-input--width-${t.width}` : "",
    t.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
function ne(t) {
  const {
    id: a,
    name: r,
    type: n = "text",
    value: s,
    defaultValue: l,
    placeholder: c,
    disabled: i = !1,
    readOnly: d = !1,
    required: o = !1,
    hasError: h = !1,
    describedBy: f,
    className: g,
    width: u = "full",
    inputMode: b,
    autoComplete: p,
    maxLength: k,
    minLength: y,
    pattern: N,
    step: M,
    min: x,
    max: I,
    showValueLabels: _ = !1,
    showCurrentValue: L = !1,
    valueLabels: E,
    // Strip interactive handlers in server variant
    onChange: m,
    onBlur: C,
    onFocus: D,
    onKeyDown: T,
    ...j
  } = t, { classes: v, isRange: A } = rt({
    type: n,
    hasError: h,
    width: u,
    className: g
  }), z = {
    id: a,
    name: r,
    type: n,
    placeholder: c,
    disabled: i,
    readOnly: d,
    required: o,
    "aria-describedby": f,
    inputMode: b,
    autoComplete: p,
    maxLength: k,
    minLength: y,
    pattern: N,
    step: M,
    min: x,
    max: I,
    ...j
  };
  if (A) {
    const Z = s ?? l ?? (typeof x < "u" ? String(x) : "0"), B = /* @__PURE__ */ e.createElement(
      "input",
      {
        className: v,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && l !== void 0 ? { defaultValue: l } : {},
        "data-current-value": Z,
        ...z
      }
    );
    return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-wrapper" }, _ ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-labels" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min" }, E?.min || x || "0"), B, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max" }, E?.max || I || "100")) : B, L && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-current-value" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-current-label" }, E?.current || "Current value:", " ", /* @__PURE__ */ e.createElement("strong", null, Z))));
  }
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: v,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && l !== void 0 ? { defaultValue: l } : {},
      ...z
    }
  );
}
function st(t) {
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
  value: r,
  defaultValue: n,
  placeholder: s,
  disabled: l = !1,
  readOnly: c = !1,
  required: i = !1,
  hasError: d = !1,
  describedBy: o,
  className: h,
  rows: f = 5,
  cols: g,
  maxLength: u,
  minLength: b,
  wrap: p = "soft",
  resize: k = "vertical",
  autoComplete: y,
  spellCheck: N,
  onChange: M,
  onBlur: x,
  onFocus: I,
  onKeyDown: _,
  ...L
}) => {
  const { classes: E, describedBy: m } = st({ hasError: d, resize: k, className: h, describedBy: o });
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: E,
      id: t,
      name: a,
      value: r,
      defaultValue: n,
      placeholder: s,
      disabled: l,
      readOnly: c,
      required: i,
      "aria-describedby": m,
      rows: f,
      cols: g,
      maxLength: u,
      minLength: b,
      wrap: p,
      autoComplete: y,
      spellCheck: N,
      onChange: M,
      onBlur: x,
      onFocus: I,
      onKeyDown: _,
      ...L
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
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: n,
  children: s,
  ...l
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
      ...l
    },
    s
  );
}, it = ({
  id: t,
  name: a,
  ariaLabel: r,
  value: n,
  defaultValue: s,
  disabled: l = !1,
  required: c = !1,
  hasError: i = !1,
  describedBy: d,
  className: o,
  multiple: h = !1,
  size: f,
  autoComplete: g,
  options: u,
  children: b,
  onChange: p,
  onBlur: k,
  onFocus: y,
  ...N
}) => {
  const { classes: M } = lt({ hasError: i, className: o }), x = () => u ? u.map((_, L) => /* @__PURE__ */ e.createElement(
    "option",
    {
      key: `${_.value}-${L}`,
      value: _.value,
      disabled: _.disabled,
      "data-initial-selected": _.selected || void 0
    },
    _.text
  )) : null, I = s === void 0 && n === void 0 && u ? u.find((_) => _.selected)?.value : void 0;
  return /* @__PURE__ */ e.createElement(
    "select",
    {
      className: M,
      id: t,
      name: a,
      "aria-label": r,
      value: n,
      defaultValue: s !== void 0 ? s : I,
      disabled: l,
      required: c,
      "aria-describedby": d,
      multiple: h,
      size: f,
      autoComplete: g,
      onChange: p,
      onBlur: k,
      onFocus: y,
      ...N
    },
    b || x()
  );
}, ot = it;
ot.Option = ct;
function zt({
  id: t,
  className: a,
  items: r,
  namePrefix: n,
  values: s = {},
  fieldset: l,
  hint: c,
  errorMessage: i,
  // strip interactive props
  onChange: d,
  ...o
}) {
  const f = r || [
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
  let g = l?.describedBy || "";
  const u = c ? `${t}-hint` : "", b = i ? `${t}-error` : "";
  u && (g = g ? `${g} ${u}` : u), b && (g = g ? `${g} ${b}` : b);
  const p = w("nhsuk-form-group", {
    "nhsuk-form-group--error": !!i
  }), k = w("nhsuk-date-input", a), y = () => /* @__PURE__ */ e.createElement(e.Fragment, null, c && /* @__PURE__ */ e.createElement(Be, { id: u, className: c.classes }, c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text), i && /* @__PURE__ */ e.createElement(He, { id: b, className: i.classes }, i.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: k,
      id: t,
      "data-testid": "date-input",
      ...o
    },
    f.map((N) => {
      const M = N.id || `${t}-${N.name}`, x = n ? `${n}[${N.name}]` : N.name, I = N.label || N.name.charAt(0).toUpperCase() + N.name.slice(1), _ = s[N.name];
      return /* @__PURE__ */ e.createElement("div", { key: N.name, className: "nhsuk-date-input__item" }, /* @__PURE__ */ e.createElement(te, { htmlFor: M, className: "nhsuk-date-input__label" }, I), /* @__PURE__ */ e.createElement(
        ne,
        {
          id: M,
          name: x,
          defaultValue: _,
          className: w("nhsuk-date-input__input", N.classes),
          inputMode: N.inputmode,
          autoComplete: N.autocomplete,
          pattern: N.pattern,
          "aria-describedby": g || void 0
        }
      ));
    })
  ));
  return /* @__PURE__ */ e.createElement("div", { className: p }, l ? /* @__PURE__ */ e.createElement(
    ae,
    {
      className: l.classes,
      legend: l.legend ? { text: l.legend } : void 0,
      describedBy: g || void 0
    },
    y()
  ) : y());
}
function Bt({
  titleText: t = "There is a problem",
  titleHtml: a,
  descriptionText: r,
  descriptionHtml: n,
  errorList: s,
  className: l,
  children: c,
  ...i
}) {
  const d = w("nhsuk-error-summary", l), o = () => a ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } }) : t, h = () => n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : r, f = (g) => {
    const u = g.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: g.html } }) : g.text;
    return g.href ? /* @__PURE__ */ e.createElement("a", { href: g.href, ...g.attributes }, u) : u;
  };
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: d,
      "aria-labelledby": "error-summary-title",
      role: "alert",
      tabIndex: -1,
      "data-module": "nhsuk-error-summary",
      ...i
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-error-summary__title", id: "error-summary-title" }, o()),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__body" }, c && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, c), !c && (r || n) && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, h()), /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list" }, s.map((g, u) => /* @__PURE__ */ e.createElement("li", { key: u }, f(g)))))
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
  selectedValue: r,
  enableBehaviourAttr: n,
  handleChange: s,
  handleBlur: l,
  handleFocus: c,
  handleKeyDown: i,
  itemsRef: d,
  InputComponent: o
}) {
  const {
    onChange: h,
    onBlur: f,
    onFocus: g,
    ...u
  } = t, {
    name: b,
    hasError: p = !1,
    describedBy: k,
    className: y,
    size: N = "normal",
    inline: M = !1,
    options: x,
    ...I
  } = u, { classes: _, describedBy: L } = dt({ hasError: p, size: N, inline: M, className: y, describedBy: k });
  return /* @__PURE__ */ e.createElement(ae, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: _,
      ...I,
      "data-nhs-behaviour": "radios"
    },
    x.map((E, m) => {
      const C = `${b}-${m}`, D = E.conditional ? `${C}-conditional` : void 0, T = r === E.value;
      return /* @__PURE__ */ e.createElement("div", { key: E.value, className: "nhsuk-radios__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-radios__input",
          id: C,
          name: b,
          type: "radio",
          value: E.value,
          disabled: E.disabled,
          defaultChecked: T,
          "data-nhs-radios-input": !0,
          "aria-describedby": L
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-radios__label", htmlFor: C }, E.text), E.hint && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-radios__hint" }, E.hint), E.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: w("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !T
          }),
          id: D,
          "data-nhs-radios-conditional": !0
        },
        typeof E.conditional == "object" && E.conditional !== null && "label" in E.conditional && "id" in E.conditional && "name" in E.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, E.conditional.label && /* @__PURE__ */ e.createElement(
          te,
          {
            htmlFor: E.conditional.id
          },
          E.conditional.label
        ), /* @__PURE__ */ e.createElement(
          o,
          {
            ...E.conditional
          }
        )) : E.conditional
      ));
    })
  ));
}
const Zt = ({ value: t, defaultValue: a, ...r }) => {
  const n = t || a || "";
  return ut(
    { value: t, defaultValue: a, ...r },
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
  ].filter(Boolean).join(" "), r = [
    "nhsuk-form-group",
    t.hasError ? "nhsuk-form-group--error" : ""
  ].filter(Boolean).join(" ");
  return { classes: a, formGroupClasses: r };
}
function Ht(t) {
  const {
    items: a,
    name: r,
    idPrefix: n,
    legend: s,
    isPageHeading: l = !1,
    legendSize: c = "l",
    hint: i,
    errorMessage: d,
    className: o = "",
    small: h = !1,
    // Strip interactive handler in server variant
    onChange: f,
    fieldsetAttributes: g,
    attributes: u,
    ...b
  } = t, p = n || r, k = i ? `${p}-hint` : void 0, y = d ? `${p}-error` : void 0, N = [k, y].filter(Boolean).join(" ") || void 0, { classes: M, formGroupClasses: x } = mt({ small: h, className: o, hasError: !!d });
  return /* @__PURE__ */ e.createElement("div", { className: x, ...u, ...b }, /* @__PURE__ */ e.createElement(
    ae,
    {
      legend: s ? { text: s, isPageHeading: l, size: c } : void 0,
      describedBy: N,
      ...g
    },
    i && /* @__PURE__ */ e.createElement("div", { id: k, className: "nhsuk-hint" }, i),
    d && /* @__PURE__ */ e.createElement("div", { id: y, className: "nhsuk-error-message" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Error:"), " ", d),
    /* @__PURE__ */ e.createElement("div", { className: M, "data-nhs-behaviour": "checkboxes" }, a.map((I, _) => {
      const L = `${p}-${_ + 1}`, E = `${L}-conditional`, m = !!I.checked, C = !!I.disabled;
      return /* @__PURE__ */ e.createElement("div", { key: I.value, className: "nhsuk-checkboxes__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: L,
          name: r,
          type: "checkbox",
          value: I.value,
          ...m ? { defaultChecked: !0 } : {},
          disabled: C,
          "aria-describedby": I.hint ? `${L}-hint` : N,
          ...I.conditional && {
            "aria-controls": E,
            "aria-expanded": m ? "true" : "false"
          },
          ...I.attributes
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-checkboxes__label", htmlFor: L }, I.text), I.hint && /* @__PURE__ */ e.createElement("div", { id: `${L}-hint`, className: "nhsuk-checkboxes__hint" }, I.hint), I.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: w("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !m
          }),
          id: E,
          "data-nhs-checkboxes-conditional": !0
        },
        typeof I.conditional == "object" && I.conditional !== null && "label" in I.conditional && "id" in I.conditional && "name" in I.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, I.conditional.label && /* @__PURE__ */ e.createElement(te, { htmlFor: I.conditional.id }, I.conditional.label), /* @__PURE__ */ e.createElement(ne, { ...I.conditional })) : I.conditional
      ));
    }))
  ));
}
function q(t, a) {
  if (!t || t.hidden) return null;
  const { href: r, label: n, variant: s, disabled: l, type: c } = t, i = { variant: s, disabled: l };
  return r ? /* @__PURE__ */ e.createElement(ee, { href: r, ...i }, n || a) : /* @__PURE__ */ e.createElement(ee, { type: c === "button" ? "button" : "submit", ...i }, n || a);
}
const Pt = ({
  back: t,
  startAgain: a,
  next: r,
  flipOrderOnMobile: n = !0,
  className: s
}) => {
  const l = !!t && !t.hidden, c = !!a && !a.hidden, i = !!r && !r.hidden, d = [l, c, i].filter(Boolean).length, o = $.OneHalf, h = $.OneThird;
  return /* @__PURE__ */ e.createElement(
    be,
    {
      className: w("nhs-form-nav", s, {
        "nhs-form-nav--flip-mobile": n
      })
    },
    l && /* @__PURE__ */ e.createElement(V, { width: d === 2 ? o : h, className: "nhs-form-nav__back" }, q(t, "Back")),
    c && /* @__PURE__ */ e.createElement(
      V,
      {
        width: d === 2 ? o : h,
        align: d === 2 ? X.Right : X.Center,
        className: "nhs-form-nav__start-again"
      },
      q(a, "Start again")
    ),
    i && /* @__PURE__ */ e.createElement(
      V,
      {
        width: !l && !c ? $.Full : d === 2 ? o : h,
        align: X.Right,
        className: "nhs-form-nav__next"
      },
      q(r, "Next")
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
  Tt as CareCard,
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
  We as List,
  de as LogoVariant,
  Ct as MetricCard,
  Lt as Pagination,
  Oe as Panel,
  jt as ProductCard,
  P as ProductCardThemeEnum,
  Zt as Radios,
  be as Row,
  ot as Select,
  ct as SelectOption,
  kt as SkipLink,
  Ft as SpacingUtilities,
  xt as SummaryCard,
  wt as SummaryList,
  G as Table,
  he as TableBodyRow,
  Xe as TableCaption,
  Ke as TableCell,
  pe as TableHeaderCell,
  bt as Tag,
  At as Textarea,
  Mt as WarningCallout,
  It as WidthContainer,
  we as brandLogos,
  xe as getBrandLogo,
  Wt as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
