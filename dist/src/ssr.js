import * as S from "react";
import e, { createElement as de, forwardRef as ue } from "react";
import { c as x, C as ye, b as X, R as Me, a as K, d as q } from "../SkipLink-BE-cc-Aq.js";
import { B as Jt, F as Yt, G as $t, S as Vt, g as Xt } from "../SkipLink-BE-cc-Aq.js";
const Ee = ({
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
      className: x(
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
          className: x(
            "nhsuk-account__item nhsuk-header__account-item",
            l.className
          )
        },
        s(l)
      )
    ))
  );
}, Ie = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ28iPgogICAgPHJlY3QgaWQ9ImZkcGxvZ28tcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHBsb2dvLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIAogICAgPHRleHQgIGZpbGw9InJnYigzNSwgMzEsIDMyKSIgZm9udC1mYW1pbHk9IkZydXRpZ2VyTFRQcm8tQm9sZCwgJ0ZydXRpZ2VyIExUIFBybycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjQwIiB4PSIwIiB5PSI2NC44OSI+PHRzcGFuIHg9IjAiIHk9IjEwMi44OSI+RmVkZXJhdGVkIERhdGEgUGxhdGZvcm08L3RzcGFuPjwvdGV4dD4KPC9zdmc+Cg==", _e = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcHR3b2xpbmUiPgogICAgPHJlY3QgaWQ9ImZkcHR3b2xpbmUtcmVjdGFuZ2xlIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigzMiwgOTUsIDE3MikiIHg9IjIuNyIgeT0iLTAuMDMiIHdpZHRoPSIxNDQuMSIgaGVpZ2h0PSI1OC4wNSIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllciIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGQ9Ik0gNjAuNjEsNS42IEwgNTAuNjYsNTIuMzEgMzUuMDYsNTIuMzEgMjUuMjQsMTkuOTkgMjUuMTEsMTkuOTkgMTguNTgsNTIuMzEgNi43NCw1Mi4zMSAxNi43Nyw1LjYgMzIuNDMsNS42IDQyLjA1LDM3Ljk5IDQyLjE4LDM3Ljk5IDQ4Ljc3LDUuNiA2MC42MSw1LjYgWiBNIDYwLjYxLDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgIDxwYXRoIGlkPSJmZHB0d29saW5lLWJlemllcjMiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDE0MS4zOCw2Ljg3IEwgMTM4LjM1LDE2LjE3IEMgMTM1LjkyLDE1LjA0IDEzMi42MywxNC4wNCAxMjcuOTksMTQuMDQgMTIzLjAyLDE0LjA0IDExOC45OCwxNC43NyAxMTguOTgsMTguNTIgMTE4Ljk4LDI1LjE0IDEzNy4yLDIyLjY3IDEzNy4yLDM2Ljg1IDEzNy4yLDQ5Ljc3IDEyNS4xNyw1My4xMiAxMTQuMjcsNTMuMTIgMTA5LjQzLDUzLjEyIDEwMy44NSw1MS45NyA5OS43NSw1MC43IEwgMTAyLjcxLDQxLjIgQyAxMDUuMTksNDIuOCAxMTAuMTcsNDMuODggMTE0LjI3LDQzLjg4IDExOC4xOCw0My44OCAxMjQuMjksNDMuMTQgMTI0LjI5LDM4LjMyIDEyNC4yOSwzMC44MyAxMDYuMDYsMzMuNjQgMTA2LjA2LDIwLjQ2IDEwNi4wNiw4LjQyIDExNi42OSw0LjggMTI2Ljk4LDQuOCAxMzIuNzcsNC44IDEzOC4yMSw1LjQxIDE0MS4zOCw2Ljg3IFogTSAxNDEuMzgsNi44NyIgLz4KICAgIDx0ZXh0ICBmaWxsPSJyZ2IoMzUsIDMxLCAzMikiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPjx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPkZlZGVyYXRlZCBEYXRhIAo8L3RzcGFuPjx0c3BhbiB4PSIwIiB5PSIxNTAuODkiPlBsYXRmb3JtPC90c3Bhbj48L3RleHQ+Cjwvc3ZnPgo=", ve = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOTAiIGhlaWdodD0iMTU1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBpZD0iZmRwdHdvbGluZWludmVyc2UiPgoJPHJlY3QgaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLXJlY3RhbmdsZSIgc3Ryb2tlPSJub25lIiBmaWxsPSJyZ2IoMzIsIDk1LCAxNzIpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+Cgk8cGF0aCBpZD0iZmRwdHdvbGluZWludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgoJPHBhdGggaWQ9ImZkcHR3b2xpbmVpbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KCTxwYXRoIGlkPSJmZHB0d29saW5laW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigyNTQsIDI1NCwgMjU0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+Cgk8dGV4dCBmaWxsPSJyZ2IoMjU0LCAyNTQsIDI1NCkiIGZvbnQtZmFtaWx5PSJGcnV0aWdlckxUUHJvLUJvbGQsICdGcnV0aWdlciBMVCBQcm8nLCBzYW5zLXNlcmlmIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSI0MCIgeD0iMCIgeT0iNjQuODkiPgoJCTx0c3BhbiB4PSIwIiB5PSIxMDIuODkiPgoJCQlGZWRlcmF0ZWQgRGF0YQoJCTwvdHNwYW4+CgkJPHRzcGFuIHg9IjAiIHk9IjE1MC44OSI+CgkJCVBsYXRmb3JtCgkJPC90c3Bhbj4KCTwvdGV4dD4KPC9zdmc+Cg==", Le = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iMTEzIiAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgaWQ9ImZkcGxvZ29pbnZlcnNlIj4KICAgIDxyZWN0IGlkPSJmZHBsb2dvaW52ZXJzZS1yZWN0YW5nbGUiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiB4PSIyLjciIHk9Ii0wLjAzIiB3aWR0aD0iMTQ0LjEiIGhlaWdodD0iNTguMDUiIC8+CiAgICA8ZyBpZD0iZmRwbG9nb2ludmVyc2UtZ3JvdXAiPgogICAgICAgIDxwYXRoIGlkPSJmZHBsb2dvaW52ZXJzZS1iZXppZXIzIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSAxNDEuMzgsNi44NyBMIDEzOC4zNSwxNi4xNyBDIDEzNS45MiwxNS4wNCAxMzIuNjMsMTQuMDQgMTI3Ljk5LDE0LjA0IDEyMy4wMiwxNC4wNCAxMTguOTgsMTQuNzcgMTE4Ljk4LDE4LjUyIDExOC45OCwyNS4xNCAxMzcuMiwyMi42NyAxMzcuMiwzNi44NSAxMzcuMiw0OS43NyAxMjUuMTcsNTMuMTIgMTE0LjI3LDUzLjEyIDEwOS40Myw1My4xMiAxMDMuODUsNTEuOTcgOTkuNzUsNTAuNyBMIDEwMi43MSw0MS4yIEMgMTA1LjE5LDQyLjggMTEwLjE3LDQzLjg4IDExNC4yNyw0My44OCAxMTguMTgsNDMuODggMTI0LjI5LDQzLjE0IDEyNC4yOSwzOC4zMiAxMjQuMjksMzAuODMgMTA2LjA2LDMzLjY0IDEwNi4wNiwyMC40NiAxMDYuMDYsOC40MiAxMTYuNjksNC44IDEyNi45OCw0LjggMTMyLjc3LDQuOCAxMzguMjEsNS40MSAxNDEuMzgsNi44NyBaIE0gMTQxLjM4LDYuODciIC8+CiAgICAgICAgPHBhdGggaWQ9ImZkcGxvZ29pbnZlcnNlLWJlemllcjIiIHN0cm9rZT0ibm9uZSIgZmlsbD0icmdiKDAsIDk0LCAxODQpIiBkPSJNIDEwNS4yNiw1LjYgTCA5NS41MSw1Mi4zMSA4Mi45NCw1Mi4zMSA4Ny4xMSwzMi4zIDcyLjI0LDMyLjMgNjguMDcsNTIuMzEgNTUuNDksNTIuMzEgNjUuMjUsNS42IDc3LjgyLDUuNiA3NC4xMywyMy40NyA4OC45OSwyMy40NyA5Mi42OSw1LjYgMTA1LjI2LDUuNiBaIE0gMTA1LjI2LDUuNiIgLz4KICAgICAgICA8cGF0aCBpZD0iZmRwbG9nb2ludmVyc2UtYmV6aWVyIiBzdHJva2U9Im5vbmUiIGZpbGw9InJnYigwLCA5NCwgMTg0KSIgZD0iTSA2MC42MSw1LjYgTCA1MC42Niw1Mi4zMSAzNS4wNiw1Mi4zMSAyNS4yNCwxOS45OSAyNS4xMSwxOS45OSAxOC41OCw1Mi4zMSA2Ljc0LDUyLjMxIDE2Ljc3LDUuNiAzMi40Myw1LjYgNDIuMDUsMzcuOTkgNDIuMTgsMzcuOTkgNDguNzcsNS42IDYwLjYxLDUuNiBaIE0gNjAuNjEsNS42IiAvPgogICAgPC9nPgogICAgCiAgICA8dGV4dCAgZmlsbD0icmdiKDI1NCwgMjU0LCAyNTQpIiBmb250LWZhbWlseT0iRnJ1dGlnZXJMVFByby1Cb2xkLCAnRnJ1dGlnZXIgTFQgUHJvJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZvbnQtc2l6ZT0iNDAiIHg9IjAiIHk9IjY0Ljg5Ij48dHNwYW4geD0iMCIgeT0iMTAyLjg5Ij5GZWRlcmF0ZWQgRGF0YSBQbGF0Zm9ybTwvdHNwYW4+PC90ZXh0Pgo8L3N2Zz4K", we = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='357'%20height='114'%20xml:space='preserve'%20id='fdpgraphic'%3e%3cdefs%3e%3clinearGradient%20id='fdpgraphic-gradient-rectangle2'%20x1='113.66'%20y1='27.99'%20x2='0.02'%20y2='27.99'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient2-clip'%20x1='243.8'%20y1='28.5'%20x2='113.64'%20y2='28.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdpgraphic-gradient4-bezier4'%20x1='357.05'%20y1='85.21'%20x2='243.44'%20y2='85.21'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='fdpgraphic-group3'%3e%3cg%20id='fdpgraphic-squareGroup'%3e%3crect%20id='fdpgraphic-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='113.6'%20height='113.6'%20/%3e%3crect%20id='fdpgraphic-rectangle2'%20stroke='none'%20fill='url(%23fdpgraphic-gradient-rectangle2)'%20x='0'%20y='0'%20width='113.65'%20height='56'%20/%3e%3c/g%3e%3cg%20id='fdpgraphic-hexagonGroup'%3e%3cpath%20id='fdpgraphic-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%20146.15,-0%20L%20211.25,0%20243.8,57.03%20211.25,114.06%20146.15,114.06%20113.6,57.03%20146.15,-0%20Z%20M%20146.15,-0'%20/%3e%3cg%20id='fdpgraphic-hexagon'%3e%3cpath%20id='fdpgraphic-clip'%20stroke='none'%20fill='url(%23fdpgraphic-gradient2-clip)'%20d='M%20146.18,-0%20L%20113.64,57%20243.8,57%20211.26,-0%20146.18,-0%20Z%20M%20146.18,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdpgraphic-circleGroup'%3e%3ccircle%20id='fdpgraphic-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='300.25'%20cy='56.8'%20r='56.8'%20/%3e%3cpath%20id='fdpgraphic-bezier4'%20stroke='none'%20fill='url(%23fdpgraphic-gradient4-bezier4)'%20d='M%20300.25,56.8%20L%20243.45,56.8%20C%20243.45,88.18%20268.88,113.61%20300.25,113.61%20L%20300.25,113.61%20C%20331.62,113.61%20357.05,88.18%20357.05,56.8%20L%20357.05,56.8%20300.25,56.8%20Z%20M%20300.25,56.8'%20/%3e%3c/g%3e%3cpath%20id='fdpgraphic-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='2.49'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2054.9,56.9%20L%20301.64,56.9'%20/%3e%3c/g%3e%3c/svg%3e", xe = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogo'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogo-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogo-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogo-bezier7'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier8'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier9'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogo-bezier10'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogo-bezier11'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogo-bezier12'%20stroke='none'%20fill='rgb(33,%2094,%20171)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogo-group3'%3e%3cg%20id='fdplockuplogo-squareGroup'%3e%3crect%20id='fdplockuplogo-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogo-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogo-hexagonGroup'%3e%3cpath%20id='fdplockuplogo-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogo-hexagon'%3e%3cpath%20id='fdplockuplogo-clip'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogo-circleGroup'%3e%3cg%20id='fdplockuplogo-group'%3e%3ccircle%20id='fdplockuplogo-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogo-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogo-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogo-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e", Ce = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='393'%20height='47'%20xml:space='preserve'%20id='fdplockuplogoinverted'%3e%3cdefs%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient-rectangle2'%20x1='45.65'%20y1='11.5'%20x2='0.01'%20y2='11.5'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0'%20stop-color='rgb(96,%20178,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.51'%20stop-color='rgb(34,%2094,%20172)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient2-clip'%20x1='98.8'%20y1='12'%20x2='45.64'%20y2='12'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(4,%20150,%2071)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.64'%20stop-color='rgb(51,%20159,%20112)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(98,%20167,%20153)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3clinearGradient%20id='fdplockuplogoinverted-gradient4-bezier4'%20x1='145.05'%20y1='34.96'%20x2='98.45'%20y2='34.96'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20offset='0.5'%20stop-color='rgb(214,%20203,%20226)'%20stop-opacity='1'%20/%3e%3cstop%20offset='0.86'%20stop-color='rgb(234,%20229,%20240)'%20stop-opacity='1'%20/%3e%3cstop%20offset='1'%20stop-color='rgb(255,%20255,%20255)'%20stop-opacity='1'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20id='fdplockuplogoinverted-bezier7'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20157.2,1.11%20L%20168.06,1.11%20184.85,34.06%20184.97,34.06%20184.97,1.11%20193.43,1.11%20193.43,45.17%20182.64,45.17%20165.78,12.22%20165.66,12.22%20165.66,45.17%20157.2,45.17%20157.2,1.11%20Z%20M%20157.2,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier8'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20200.37,1.11%20L%20209.21,1.11%20209.21,18.91%20226.88,18.91%20226.88,1.11%20235.72,1.11%20235.72,45.17%20226.88,45.17%20226.88,25.85%20209.21,25.85%20209.21,45.17%20200.37,45.17%20200.37,1.11%20Z%20M%20200.37,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier9'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20267.78,9.19%20C%20265,7.99%20261.91,7.29%20258.81,7.29%20255.78,7.29%20251.87,8.62%20251.87,13.42%20251.87,21.05%20271.19,17.84%20271.19,32.61%20271.19,42.27%20263.55,45.93%20254.65,45.93%20249.85,45.93%20247.7,45.3%20243.35,44.22%20L%20244.17,36.27%20C%20247.2,37.91%20250.67,38.98%20254.14,38.98%20257.49,38.98%20261.97,37.28%20261.97,33.3%20261.97,24.91%20242.65,28.38%20242.65,13.79%20242.65,3.95%20250.29,0.35%20258.06,0.35%20261.84,0.35%20265.38,0.85%20268.6,1.93%20L%20267.78,9.19%20Z%20M%20267.78,9.19'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier10'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20287.4,1.11%20L%20311.89,1.11%20311.89,8.05%20296.23,8.05%20296.23,18.91%20311.13,18.91%20311.13,25.85%20296.23,25.85%20296.23,45.17%20287.4,45.17%20287.4,1.11%20Z%20M%20287.4,1.11'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier11'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20327.66,38.23%20L%20332.59,38.23%20C%20339.97,38.23%20347.11,32.73%20347.11,23.14%20347.11,13.54%20339.97,8.05%20332.59,8.05%20L%20327.66,8.05%20327.66,38.23%20Z%20M%20318.82,1.1%20L%20330.88,1.1%20C%20344.39,1.1%20356.32,5.65%20356.32,23.14%20356.32,40.63%20344.39,45.17%20330.88,45.17%20L%20318.82,45.17%20318.82,1.1%20Z%20M%20318.82,1.1'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier12'%20stroke='none'%20fill='rgb(254,%20254,%20254)'%20d='M%20372.09,21.5%20L%20375.19,21.5%20C%20379.61,21.5%20383.58,20.04%20383.58,14.93%20383.58,9.82%20379.73,8.05%20375.19,8.05%20L%20372.09,8.05%20372.09,21.5%20Z%20M%20363.26,1.11%20L%20374.43,1.11%20C%20384.03,1.11%20392.8,3.88%20392.8,14.43%20392.8,24.72%20385.29,28.44%20375.82,28.44%20L%20372.09,28.44%20372.09,45.17%20363.26,45.17%20363.26,1.11%20Z%20M%20363.26,1.11'%20/%3e%3cg%20id='fdplockuplogoinverted-group3'%3e%3cg%20id='fdplockuplogoinverted-squareGroup'%3e%3crect%20id='fdplockuplogoinverted-rectangle'%20stroke='none'%20fill='rgb(34,%2094,%20172)'%20x='0.02'%20y='0.49'%20width='45.6'%20height='46.6'%20/%3e%3crect%20id='fdplockuplogoinverted-rectangle2'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient-rectangle2)'%20x='0'%20y='0'%20width='45.65'%20height='23'%20/%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-hexagonGroup'%3e%3cpath%20id='fdplockuplogoinverted-polygon'%20stroke='none'%20fill='rgb(73,%20160,%20152)'%20d='M%2058.9,-0%20L%2085.5,-0%2098.8,23.53%2085.5,47.06%2058.9,47.06%2045.6,23.53%2058.9,-0%20Z%20M%2058.9,-0'%20/%3e%3cg%20id='fdplockuplogoinverted-hexagon'%3e%3cpath%20id='fdplockuplogoinverted-clip'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient2-clip)'%20d='M%2058.93,-0%20L%2045.64,24%2098.8,24%2085.51,-0%2058.93,-0%20Z%20M%2058.93,-0'%20/%3e%3c/g%3e%3c/g%3e%3cg%20id='fdplockuplogoinverted-circleGroup'%3e%3cg%20id='fdplockuplogoinverted-group'%3e%3ccircle%20id='fdplockuplogoinverted-oval'%20stroke='none'%20fill='rgb(214,%20203,%20226)'%20cx='121.75'%20cy='23.3'%20r='23.3'%20/%3e%3cpath%20id='fdplockuplogoinverted-bezier4'%20stroke='none'%20fill='url(%23fdplockuplogoinverted-gradient4-bezier4)'%20d='M%20121.75,23.3%20L%2098.45,23.3%20C%2098.45,36.17%20108.88,46.61%20121.75,46.61%20L%20121.75,46.61%20C%20134.62,46.61%20145.05,36.17%20145.05,23.3%20L%20145.05,23.3%20121.75,23.3%20Z%20M%20121.75,23.3'%20/%3e%3c/g%3e%3c/g%3e%3cpath%20id='fdplockuplogoinverted-bezier5'%20stroke='rgb(217,%20216,%20216)'%20stroke-width='1'%20stroke-miterlimit='2.49'%20fill='none'%20d='M%2022.3,23.48%20L%20122.54,23.48'%20/%3e%3c/g%3e%3c/svg%3e";
var me = /* @__PURE__ */ ((t) => (t.NHS = "nhs", t.FDP = "fdp", t))(me || {}), ge = /* @__PURE__ */ ((t) => (t.Full = "full", t.Graphic = "graphic", t.Inverse = "inverse", t.TwoLine = "twoLine", t.TwoLineInverse = "twoLineInverse", t.Compact = "compact", t.CompactInverted = "compactInverted", t))(ge || {});
const De = {
  nhs: {},
  fdp: {
    full: {
      brand: "fdp",
      variant: "full",
      src: Ie,
      ariaLabel: "FDP"
    },
    graphic: {
      brand: "fdp",
      variant: "graphic",
      src: we,
      ariaLabel: "FDP"
    },
    inverse: {
      brand: "fdp",
      variant: "inverse",
      src: Le,
      ariaLabel: "FDP"
    },
    twoLine: {
      brand: "fdp",
      variant: "twoLine",
      src: _e,
      ariaLabel: "FDP"
    },
    twoLineInverse: {
      brand: "fdp",
      variant: "twoLineInverse",
      src: ve,
      ariaLabel: "FDP"
    },
    compact: {
      brand: "fdp",
      variant: "compact",
      src: xe,
      ariaLabel: "FDP"
    },
    compactInverted: {
      brand: "fdp",
      variant: "compactInverted",
      src: Ce,
      ariaLabel: "FDP"
    }
  }
};
function Se(t, a = "full") {
  return De[t]?.[a];
}
function je(t, { isClient: a, brand: r }) {
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
    variant: p = "default",
    attributes: g = {},
    maxVisibleItems: u,
    // deprecated (ignored)
    responsiveNavigation: N = !0,
    // Consume logoVariant for server-side logo selection while preventing DOM leakage via ...rest
    logoVariant: f = ge.Full,
    ...b
  } = t;
  "maxVisibleItems" in b && delete b.maxVisibleItems;
  const y = {
    ...l,
    text: l?.text ?? c
  }, k = y.href && !s.href || y.href && y.href === s.href, _ = k ? y.href : s.href, v = x(
    "nhsuk-header",
    {
      "nhsuk-header--organisation": p === "organisation" || i,
      "nhsuk-header--white": p === "white"
    },
    n
  ), E = x(
    "nhsuk-header__container",
    h
  ), I = x(
    "nhsuk-header__navigation",
    {
      "nhsuk-header__navigation--white": o?.white,
      "nhsuk-header__navigation--justified": o?.justified
    },
    o?.className
  ), w = r === "fdp" ? "fdp" : "nhs", M = () => /* @__PURE__ */ e.createElement(
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
          alt: s.ariaLabel || (w === "fdp" ? "FDP" : "NHS")
        }
      );
    if (w === "fdp") {
      const L = Se(me.FDP, f);
      if (L?.src)
        return /* @__PURE__ */ e.createElement(
          "img",
          {
            className: "nhsuk-header__organisation-logo",
            src: L.src,
            "data-logo-variant": f,
            width: "280",
            alt: L.ariaLabel || "FDP"
          }
        );
    }
    return M();
  }, C = () => i ? /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name" }, i.name, i.split && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-split" }, " ", i.split)), i.descriptor && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__organisation-name-descriptor" }, i.descriptor)) : null, D = (L, z) => L ? z ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-name", href: z }, L) : /* @__PURE__ */ e.createElement("span", { className: "nhsuk-header__service-name" }, L) : null, j = (L) => L.active || L.current ? /* @__PURE__ */ e.createElement("strong", { className: "nhsuk-header__navigation-item-current-fallback" }, L.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: L.html } }) : L.text) : L.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: L.html } }) : L.text;
  return /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement(
    "header",
    {
      className: v,
      role: "banner",
      "data-module": "nhsuk-header",
      ...g,
      ...b
    },
    /* @__PURE__ */ e.createElement("div", { className: E }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-header__service" }, _ ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-header__service-logo", href: _ }, m(), C(), k && D(y.text)) : /* @__PURE__ */ e.createElement(e.Fragment, null, m(), C(), k && D(y.text)), y.text && !k && D(y.text, y.href)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        ...d,
        variant: p === "white" ? "white" : "default"
      }
    )),
    o && o.items && o.items.length > 0 && /* @__PURE__ */ e.createElement(
      "nav",
      {
        className: I,
        "aria-label": o.ariaLabel || "Menu",
        "data-ssr-hydrating": "true"
      },
      /* @__PURE__ */ e.createElement(
        "div",
        {
          className: x(
            "nhsuk-header__navigation-container",
            "nhsuk-width-container",
            {
              "nhsuk-header__navigation-container--ssr": !a
            },
            h
          )
        },
        /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-header__navigation-list" }, o.items.map((L, z) => /* @__PURE__ */ e.createElement(
          "li",
          {
            key: z,
            className: x(
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
            j(L)
          )
        )))
      )
    ),
    !1
  ));
}
const yt = (t) => {
  const a = t.attributes?.["data-brand"];
  return je(t, {
    isClient: !1,
    brand: a === "fdp" || a === "nhs" ? a : void 0
  });
}, Mt = ({
  text: t,
  href: a,
  openInNewWindow: r = !1,
  className: n,
  ...s
}) => {
  const l = x(
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
function Te(t) {
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
var he = /* @__PURE__ */ ((t) => (t.Primary = "primary", t.Secondary = "secondary", t.Reverse = "reverse", t.Warning = "warning", t.Login = "login", t.Metric = "metric", t))(he || {}), pe = /* @__PURE__ */ ((t) => (t.Small = "small", t.Default = "default", t.Large = "large", t))(pe || {});
const ae = S.forwardRef(function(a, r) {
  const {
    children: n,
    variant: s = he.Primary,
    size: l = pe.Default,
    fullWidth: c = !1,
    className: i = "",
    preventDoubleClick: d = !1,
    ...o
  } = a, h = Te({
    variant: s,
    size: l,
    fullWidth: c,
    className: i,
    href: "href" in o ? o.href : void 0,
    preventDoubleClick: d
  });
  if ("href" in o && o.href) {
    const z = o, {
      id: A,
      style: Z,
      title: B,
      ["aria-label"]: W,
      ["aria-describedby"]: U,
      ["aria-labelledby"]: J,
      tabIndex: Y,
      ...be
    } = z;
    return /* @__PURE__ */ S.createElement(
      "a",
      {
        ref: r,
        href: z.href,
        target: z.target,
        rel: z.rel,
        className: h.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...d && { "data-prevent-double-click": "true" },
        id: A,
        style: Z,
        title: B,
        "aria-label": W,
        "aria-describedby": U,
        "aria-labelledby": J,
        tabIndex: Y,
        ...be
      },
      n
    );
  }
  const p = o, {
    id: g,
    style: u,
    title: N,
    ["aria-label"]: f,
    ["aria-describedby"]: b,
    ["aria-labelledby"]: y,
    tabIndex: k,
    name: _,
    value: v,
    form: E,
    formAction: I,
    formEncType: w,
    formMethod: M,
    formNoValidate: m,
    formTarget: C,
    autoFocus: D,
    type: j,
    disabled: T,
    ...L
  } = p;
  return /* @__PURE__ */ S.createElement(
    "button",
    {
      ref: r,
      type: j || "button",
      disabled: T,
      className: h.classes,
      "data-module": "nhs-button",
      ...d && { "data-prevent-double-click": "true" },
      id: g,
      style: u,
      title: N,
      "aria-label": f,
      "aria-describedby": b,
      "aria-labelledby": y,
      tabIndex: k,
      name: _,
      value: v,
      form: E,
      formAction: I,
      formEncType: w,
      formMethod: M,
      formNoValidate: m,
      formTarget: C,
      autoFocus: D,
      ...L
    },
    n
  );
});
ae.displayName = "ButtonServer";
const Et = ({
  text: t = "Back",
  html: a,
  href: r = "#",
  className: n,
  element: s = "a",
  onClick: l,
  ...c
}) => {
  const i = x(
    "nhsuk-back-link",
    n
  ), d = x(
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
function ze(t) {
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
const It = ({
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
  const h = ze({ color: n, noBorder: s, closable: l, disabled: i, className: d }), p = (g) => {
    g.preventDefault(), g.stopPropagation(), !i && c && c();
  };
  return /* @__PURE__ */ e.createElement("strong", { className: h.classes, ...o }, r || (a ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } }) : t), l && /* @__PURE__ */ e.createElement(
    "button",
    {
      type: "button",
      className: "nhsuk-tag__close",
      onClick: p,
      disabled: i,
      "aria-label": "Remove",
      title: "Remove"
    },
    "×"
  ));
};
function Ae(t) {
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
const re = ({
  htmlFor: t,
  className: a,
  isPageHeading: r = !1,
  size: n = "m",
  children: s,
  ...l
}) => {
  const c = Ae({ size: n, isPageHeading: r, className: a, htmlFor: t }), i = c.tag;
  return /* @__PURE__ */ e.createElement(i, { className: c.classes, htmlFor: c.htmlFor, ...l }, r ? /* @__PURE__ */ e.createElement("label", { className: "nhsuk-label-wrapper", htmlFor: t }, s) : s);
};
function Be(t) {
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
function Ze(t) {
  const a = t.level ?? Be(t.size), r = [
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
  const d = Ze({ level: t, size: l, className: a, marginBottom: c }), o = s || (n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : r);
  return de(
    d.tag,
    { className: d.classes, style: d.style, ...i },
    o
  );
};
function He(t) {
  return { classes: [
    "nhsuk-hint",
    t.className || ""
  ].filter(Boolean).join(" "), id: t.id };
}
const Pe = ({
  id: t,
  className: a,
  children: r,
  ...n
}) => {
  const s = He({ id: t, className: a });
  return /* @__PURE__ */ e.createElement("div", { className: s.classes, id: s.id, ...n }, r);
};
function Ge(t) {
  return {
    classes: ["nhsuk-error-message", t.className || ""].filter(Boolean).join(" "),
    id: t.id,
    visuallyHiddenText: t.visuallyHiddenText ?? "Error:"
  };
}
const Oe = ({ id: t, className: a, visuallyHiddenText: r = "Error:", children: n, ...s }) => {
  const l = Ge({ id: t, className: a, visuallyHiddenText: r });
  return /* @__PURE__ */ e.createElement("span", { className: l.classes, id: l.id, ...s }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, l.visuallyHiddenText, " "), n);
};
function Ue(t) {
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
const se = ({
  children: t,
  legend: a,
  className: r,
  describedBy: n,
  ...s
}) => {
  const l = Ue({
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
}, _t = ({
  text: t = "Skip to main content",
  href: a = "#maincontent",
  classes: r,
  attributes: n = {}
}) => {
  const s = x("nhsuk-skip-link", r);
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
}, Qe = ue(
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
    ].filter(Boolean).join(" "), p = a ? /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("summary", { className: "nhsuk-details__summary", tabIndex: 0 }, p),
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-details__text" }, g)
    );
  }
);
Qe.displayName = "Details";
const vt = ({
  text: t,
  html: a,
  children: r,
  className: n,
  ...s
}) => {
  const l = x("nhsuk-inset-text", n), c = () => r || (a ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: a } }) : t ? /* @__PURE__ */ e.createElement("p", null, t) : null);
  return /* @__PURE__ */ e.createElement("div", { className: l, ...s }, c());
}, Re = ({
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
  const o = x(
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
  ) : null, p = () => i ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, i) : c ? /* @__PURE__ */ e.createElement(
    "div",
    {
      className: "nhsuk-panel__body",
      dangerouslySetInnerHTML: { __html: c }
    }
  ) : l ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-panel__body" }, /* @__PURE__ */ e.createElement("p", null, l)) : null;
  return /* @__PURE__ */ e.createElement("div", { className: o, id: t, ...d }, h(), p());
}, $ = ({
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
)), Fe = ({
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
    (b) => e.isValidElement(b) && (b.type === $ || b.type?.displayName === "BreadcrumbItem")
  ).map((b) => ({
    text: typeof b.props.children == "string" ? b.props.children : String(b.props.children),
    href: b.props.href,
    active: b.props.active,
    attributes: b.props.attributes
  })) : [], o = () => a ? d() : s && l ? [{ href: s, text: l }] : t, h = () => {
    const f = o();
    if (f && f.length > 0) {
      const b = f.slice().reverse().find((y) => y.href && !y.active);
      if (b)
        return { href: b.href, text: b.text };
    }
    return { text: "Home" };
  }, p = o(), g = h(), u = x(
    "nhsuk-breadcrumb",
    {
      "nhsuk-breadcrumb--reverse": c
    },
    r
  ), N = n;
  return /* @__PURE__ */ e.createElement(
    "nav",
    {
      className: u,
      "aria-label": N,
      role: "navigation",
      ...i
    },
    /* @__PURE__ */ e.createElement("ol", { className: "nhsuk-breadcrumb__list", role: "list" }, a ? (
      // Render children directly if using compound component pattern
      e.Children.map(a, (f, b) => e.isValidElement(f) && (f.type === $ || f.type?.displayName === "BreadcrumbItem") ? e.cloneElement(f, { key: b }) : null)
    ) : (
      // Render from items array
      p?.filter((f) => f.active || !!f.href).map((f, b) => /* @__PURE__ */ e.createElement("li", { key: b, className: "nhsuk-breadcrumb__item", role: "listitem" }, f.active ? /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "nhsuk-breadcrumb__link nhsuk-breadcrumb__link--current",
          "aria-current": "page",
          role: "text",
          ...f.attributes || {}
        },
        f.text
      ) : /* @__PURE__ */ e.createElement(
        "a",
        {
          className: "nhsuk-breadcrumb__link",
          href: f.href,
          role: "link",
          ...f.attributes || {}
        },
        f.text
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
}, We = Fe;
We.Item = $;
$.displayName = "BreadcrumbItem";
const Je = ({
  children: t,
  type: a = "bullet",
  size: r = "medium",
  border: n = !1,
  className: s,
  role: l,
  as: c,
  ...i
}) => {
  const d = c || (a === "number" ? "ol" : "ul"), o = x(
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
}, Ye = ({
  children: t,
  className: a,
  ...r
}) => {
  const n = x("nhsuk-list__item", a);
  return /* @__PURE__ */ e.createElement("li", { className: n, ...r }, t);
}, $e = Je;
$e.Item = Ye;
const Lt = ({
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
  const p = (u, N = !1) => /* @__PURE__ */ e.createElement(
    "li",
    {
      key: `${u.URL}-${u.label}`,
      className: x("nhsuk-footer__list-item", {
        "nhsuk-footer-default__list-item": N
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
      className: x("nhsuk-width-container", c),
      style: h
    },
    /* @__PURE__ */ e.createElement("h2", { className: "nhsuk-u-visually-hidden" }, "Support links"),
    /* @__PURE__ */ e.createElement("div", { className: x("nhsuk-footer", t), style: o }, g ? (
      // Multi-column layout
      /* @__PURE__ */ e.createElement(e.Fragment, null, a.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, a.map((u) => p(u))), r && r.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, r.map((u) => p(u))), n && n.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, n.map((u) => p(u))), s && s.length > 0 && /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list nhsuk-footer__meta" }, s.map((u) => p(u))))
    ) : (
      // Single column layout (default)
      /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-footer__list" }, a.map((u) => p(u, !0)), (r || []).map((u) => p(u, !0)), (n || []).map((u) => p(u, !0)), (s || []).map((u) => p(u, !0)))
    )),
    !g && /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l))
  ), g && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-width-container" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "nhsuk-footer__copyright" }, l)))));
}, wt = ({
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
    de(
      h,
      { className: "nhsuk-warning-callout__label" },
      i ? /* @__PURE__ */ e.createElement(e.Fragment, null, t, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, ":")) : /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Important: "), t)
    ),
    d()
  );
}, xt = (t) => /* @__PURE__ */ e.createElement(ye, { ...t }), Ct = ({
  items: t,
  classes: a,
  ariaLabel: r = "Pages in this guide",
  attributes: n = {}
}) => {
  const s = x("nhsuk-contents-list", a), l = (c, i) => c.current ? /* @__PURE__ */ e.createElement(
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
}, Ve = ue(
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
    ), p = (u) => a === "cross" && !n ? `do not ${u}` : u, g = () => /* @__PURE__ */ e.createElement(
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
      /* @__PURE__ */ e.createElement("div", { className: "nhsuk-do-dont-list__content--feature" }, /* @__PURE__ */ e.createElement("ul", { className: o.join(" "), role: "list" }, r.map((u, N) => /* @__PURE__ */ e.createElement("li", { key: N }, h(), p(u.item)))))
    );
  }
);
Ve.displayName = "DoDontList";
const Dt = ({
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
}, St = ({
  previousUrl: t,
  previousPage: a,
  nextUrl: r,
  nextPage: n,
  classes: s,
  attributes: l = {}
}) => {
  const c = x("nhsuk-pagination", s);
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
}, jt = ({
  items: t,
  noBorder: a = !1,
  className: r,
  ...n
}) => {
  const s = x(
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
}, Tt = ({
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
function fe(t) {
  var a, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (a = 0; a < s; a++) t[a] && (r = fe(t[a])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function ce() {
  for (var t, a, r = 0, n = "", s = arguments.length; r < s; r++) (t = arguments[r]) && (a = fe(t)) && (n && (n += " "), n += a);
  return n;
}
const zt = ({
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
  valueFormatter: p,
  className: g,
  style: u,
  id: N,
  announceDelta: f = !0,
  visual: b
}) => {
  const y = S.useId(), k = N || y, _ = `${k}-label`, v = `${k}-value`, E = `${k}-delta`, I = typeof a == "number" && !Number.isNaN(a), w = o ? "—" : h ? "" : I ? p ? p(a) : a.toLocaleString() : a;
  let M, m = "", C = "";
  if (n && !o && !h) {
    M = n.direction || (n.value > 0 ? "up" : n.value < 0 ? "down" : "neutral");
    const D = Math.abs(n.value), j = M === "up" ? `+${D}` : M === "down" ? `-${D}` : "0", T = n.isPercent ? "%" : "";
    if (m = `${j}${T}`, n.ariaLabel)
      C = n.ariaLabel;
    else {
      const L = n.invert ? M === "down" : M === "up";
      C = `${M === "neutral" ? "no change" : M === "up" ? "up" : "down"} ${D}${T}${M === "neutral" ? "" : L ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ S.createElement(
    "div",
    {
      className: ce(
        "fdp-metric-card",
        l && `fdp-metric-card--${l}`,
        s && `fdp-metric-card--status-${s}`,
        o && "fdp-metric-card--loading",
        h && "fdp-metric-card--error",
        g
      ),
      style: u,
      role: "group",
      "aria-labelledby": _,
      "data-component": "MetricCard"
    },
    /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__inner" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__header" }, /* @__PURE__ */ S.createElement("h3", { id: _, className: "fdp-metric-card__label" }, t), i && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__metadata" }, i)), /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__content" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__value-section" }, /* @__PURE__ */ S.createElement("div", { id: v, className: "fdp-metric-card__value" }, o ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true" }, /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" })) : h ? /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__error", role: "alert" }, h) : /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__number" }, w), r && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__unit" }, r))), c && !o && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__subtitle" }, c)), n && !o && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__delta-section" }, /* @__PURE__ */ S.createElement(
      "div",
      {
        id: E,
        "aria-label": C,
        className: ce(
          "fdp-metric-card__delta",
          M && `fdp-metric-card__delta--${M}`
        )
      },
      /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-value" }, m),
      n.period && /* @__PURE__ */ S.createElement("span", { className: "fdp-metric-card__delta-period" }, n.period)
    )), d && d.length > 0 && !o && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })), b && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-metric-card__visual", "aria-hidden": "true" }, b), f && n && !n.ariaLabel && !o && !h && /* @__PURE__ */ S.createElement("div", { className: "fdp-visually-hidden", "aria-live": "polite" }, C))
  );
}, Q = { current: null }, Xe = () => {
  if (Q.current) return Q.current;
  try {
    Q.current = require("prismjs");
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
    Q.current = null;
  }
  return Q.current;
}, Ke = (t) => {
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
}, V = (t, a, r) => {
  if (r || !a) return t;
  const n = Xe();
  if (n && n.languages) {
    const s = n.languages[a] ? a : n.languages.typescript && (a === "ts" || a === "tsx" || a === "typescript") ? "typescript" : n.languages.json && a === "json" ? "json" : void 0;
    if (s)
      try {
        return n.highlight(t, n.languages[s], s);
      } catch {
      }
  }
  return Ke(t);
}, qe = ({
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
  classes: p,
  attributes: g,
  "data-testid": u,
  columns: N,
  data: f,
  visuallyHiddenCaption: b = !1
}) => {
  const y = `nhsuk-table__caption ${n ? `nhsuk-table__caption--${n}` : ""}`.trim(), k = x(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": l
    },
    h
  ), _ = x(p), v = (m, C) => {
    const D = x(
      "nhsuk-table__header",
      {
        [`nhsuk-table__header--${m.format}`]: m.format
      },
      m.classes
    ), j = {
      scope: "col",
      ...m.colspan && { colSpan: m.colspan },
      ...m.rowspan && { rowSpan: m.rowspan },
      ...l && { role: "columnheader" },
      ...m.attributes
    };
    let T;
    if (m.node != null)
      T = /* @__PURE__ */ e.createElement(e.Fragment, null, m.node);
    else if (m.html)
      T = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: m.html } });
    else if (m.code != null) {
      const L = Array.isArray(m.code), z = L ? m.code.join(`
`) : m.code, A = L || z.includes(`
`), Z = {
        className: x("nhsuk-table__code", m.codeClassName, {
          "nhsuk-table__code--block": A,
          "nhsuk-table__code--inline": !A
        }),
        ...m.codeLanguage ? { "data-language": m.codeLanguage } : {}
      }, B = V(z, m.codeLanguage);
      T = A ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
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
      T = m.text;
    return /* @__PURE__ */ e.createElement("th", { key: C, className: D, ...j }, T);
  }, E = (m, C, D) => {
    const j = s && D || m.rowHeader, T = x(
      j ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${j ? "header" : "cell"}--${m.format}`]: m.format
      },
      m.classes
    ), L = {
      ...j && { scope: "row" },
      ...m.colspan && { colSpan: m.colspan },
      ...m.rowspan && { rowSpan: m.rowspan },
      ...l && {
        role: j ? "rowheader" : "cell",
        ...m.header && { "data-label": m.header }
      },
      ...m.attributes
    };
    let z;
    if (m.node != null)
      z = /* @__PURE__ */ e.createElement(e.Fragment, null, m.node);
    else if (m.html)
      z = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: m.html } });
    else if (m.code != null) {
      const B = Array.isArray(m.code), W = B ? m.code.join(`
`) : m.code, U = B || W.includes(`
`), J = {
        className: x("nhsuk-table__code", m.codeClassName, {
          "nhsuk-table__code--block": U,
          "nhsuk-table__code--inline": !U
        }),
        ...m.codeLanguage ? { "data-language": m.codeLanguage } : {}
      }, Y = V(
        W,
        m.codeLanguage,
        m.disableHighlight
      );
      z = U ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
        "code",
        {
          ...J,
          dangerouslySetInnerHTML: { __html: Y }
        }
      )) : /* @__PURE__ */ e.createElement(
        "code",
        {
          ...J,
          dangerouslySetInnerHTML: { __html: Y }
        }
      );
    } else
      z = m.text;
    const A = /* @__PURE__ */ e.createElement(e.Fragment, null, l && m.header && /* @__PURE__ */ e.createElement("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true" }, m.header, " "), z), Z = j ? "th" : "td";
    return /* @__PURE__ */ e.createElement(Z, { key: C, className: T, ...L }, A);
  };
  let I = a, w = t;
  !I && N && N.length && (I = N.map((m) => ({
    text: m.title,
    format: m.format,
    classes: m.headerClasses,
    attributes: m.headerAttributes
  }))), !w && N && f && f.length && (w = f.map((m, C) => N.map((D) => {
    const j = D.accessor ? D.accessor(m, C) : m[D.key];
    let T = { format: D.format, classes: D.cellClasses, attributes: D.cellAttributes };
    if (D.rowHeader && (T.rowHeader = !0), D.render) {
      const L = D.render(j, m, C, D);
      return L == null || typeof L == "boolean" ? { ...T, text: "" } : typeof L == "string" || typeof L == "number" ? { ...T, text: String(L) } : { ...T, ...L };
    }
    return { ...T, text: j != null ? String(j) : "" };
  })));
  const M = () => /* @__PURE__ */ e.createElement(
    "table",
    {
      className: k,
      ...l && { role: "table" },
      ...g,
      ...u && { "data-testid": u }
    },
    r && /* @__PURE__ */ e.createElement("caption", { className: x(y, b && "nhsuk-u-visually-hidden") }, r),
    I && I.length > 0 && /* @__PURE__ */ e.createElement(
      "thead",
      {
        className: "nhsuk-table__head",
        ...l && { role: "rowgroup" }
      },
      /* @__PURE__ */ e.createElement("tr", { ...l && { role: "row" } }, I.map(
        (m, C) => v(m, C)
      ))
    ),
    /* @__PURE__ */ e.createElement("tbody", { className: "nhsuk-table__body" }, w && w.map((m, C) => /* @__PURE__ */ e.createElement(
      "tr",
      {
        key: C,
        className: "nhsuk-table__row",
        ...l && { role: "row" }
      },
      m.map(
        (D, j) => E(D, j, j === 0)
      )
    )))
  );
  return d ? /* @__PURE__ */ e.createElement(Re, { className: o }, c && /* @__PURE__ */ e.createElement(H, { level: i, className: "nhsuk-table__heading-tab" }, c), M()) : _ ? /* @__PURE__ */ e.createElement("div", { className: _ }, M()) : M();
}, et = ({
  children: t,
  size: a,
  className: r
}) => {
  const n = x(
    "nhsuk-table__caption",
    a && `nhsuk-table__caption--${a}`,
    r
  );
  return /* @__PURE__ */ e.createElement("caption", { className: n }, t);
}, Ne = ({
  responsive: t,
  className: a,
  children: r,
  ...n
}) => {
  const s = t ? { role: "row" } : {};
  return /* @__PURE__ */ e.createElement("tr", { className: a, ...s, ...n }, r);
}, ke = ({
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
  attributes: p,
  responsive: g,
  as: u = "th"
}) => {
  const N = x(
    "nhsuk-table__header",
    { [`nhsuk-table__header--${i}`]: i },
    d
  ), f = {
    scope: "col",
    ...o && { colSpan: o },
    ...h && { rowSpan: h },
    ...g && { role: "columnheader" },
    ...p
  };
  let b;
  if (r != null) b = /* @__PURE__ */ e.createElement(e.Fragment, null, r);
  else if (a) b = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } });
  else if (n != null) {
    const k = Array.isArray(n), _ = k ? n.join(`
`) : n, v = k || _.includes(`
`), E = {
      className: x("nhsuk-table__code", l, {
        "nhsuk-table__code--block": v,
        "nhsuk-table__code--inline": !v
      }),
      ...s ? { "data-language": s } : {}
    }, I = V(
      _,
      s,
      c
    );
    b = v ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement(
      "code",
      {
        ...E,
        dangerouslySetInnerHTML: { __html: I }
      }
    )) : /* @__PURE__ */ e.createElement("code", { ...E, dangerouslySetInnerHTML: { __html: I } });
  } else b = t;
  const y = u;
  return /* @__PURE__ */ e.createElement(y, { className: N, ...f }, b);
}, tt = ({
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
  attributes: p,
  responsive: g,
  rowHeader: u
}) => {
  const N = !!u, f = N ? "th" : "td", b = x(
    N ? "nhsuk-table__header" : "nhsuk-table__cell",
    i && `nhsuk-table__${N ? "header" : "cell"}--${i}`,
    d
  ), y = {
    ...o && { colSpan: o },
    ...h && { rowSpan: h },
    ...N && { scope: "row" },
    ...g && { role: N ? "rowheader" : "cell" },
    ...p
  };
  let k;
  if (r != null) k = /* @__PURE__ */ e.createElement(e.Fragment, null, r);
  else if (a) k = /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } });
  else if (n != null) {
    const _ = Array.isArray(n), v = _ ? n.join(`
`) : n, E = _ || v.includes(`
`), I = {
      className: x("nhsuk-table__code", l, {
        "nhsuk-table__code--block": E,
        "nhsuk-table__code--inline": !E
      }),
      ...s ? { "data-language": s } : {}
    }, w = V(v, s, c);
    k = E ? /* @__PURE__ */ e.createElement("pre", { className: "nhsuk-table__pre" }, /* @__PURE__ */ e.createElement("code", { ...I, dangerouslySetInnerHTML: { __html: w } })) : /* @__PURE__ */ e.createElement("code", { ...I, dangerouslySetInnerHTML: { __html: w } });
  } else k = t;
  return /* @__PURE__ */ e.createElement(f, { className: b, ...y }, k);
}, O = qe;
O.Caption = et;
O.BodyRow = Ne;
O.HeaderCell = ke;
O.Cell = tt;
let ie = !1, oe = !1;
Object.defineProperty(O, "Row", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !ie && (console.warn("Table.Row is deprecated. Use Table.BodyRow instead."), ie = !0), Ne;
  }
});
Object.defineProperty(O, "TH", {
  configurable: !0,
  enumerable: !1,
  get() {
    return process.env.NODE_ENV !== "production" && !oe && (console.warn("Table.TH is deprecated. Use Table.HeaderCell instead."), oe = !0), ke;
  }
});
const at = ({
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
  ].filter(Boolean).join(" "), p = [
    "nhsuk-width-container",
    c,
    l ? "" : "nhsuk-hero--border"
  ].filter(Boolean).join(" "), g = [
    "nhsuk-hero__heading",
    r,
    !d && !n && !s ? "nhsuk-u-margin-bottom-0" : ""
  ].filter(Boolean).join(" "), u = d || t || n || s, N = () => {
    if (!t) return null;
    const f = { className: g };
    switch (a) {
      case 1:
        return /* @__PURE__ */ e.createElement("h1", { ...f }, t);
      case 2:
        return /* @__PURE__ */ e.createElement("h2", { ...f }, t);
      case 3:
        return /* @__PURE__ */ e.createElement("h3", { ...f }, t);
      case 4:
        return /* @__PURE__ */ e.createElement("h4", { ...f }, t);
      case 5:
        return /* @__PURE__ */ e.createElement("h5", { ...f }, t);
      case 6:
        return /* @__PURE__ */ e.createElement("h6", { ...f }, t);
      default:
        return /* @__PURE__ */ e.createElement("h1", { ...f }, t);
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
    l && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__overlay" }, u && /* @__PURE__ */ e.createElement("div", { className: p }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero-content" }, N(), d || (s ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-hero__arrow", "aria-hidden": "true" })))))),
    !l && u && /* @__PURE__ */ e.createElement("div", { className: p }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-row" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-grid-column-two-thirds" }, /* @__PURE__ */ e.createElement("div", { className: "nhsuk-hero__wrapper" }, N(), d || (s ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: s } }) : n ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-body-l nhsuk-u-margin-bottom-0" }, n) : null)))))
  );
};
at.displayName = "Hero";
const nt = e.forwardRef(({
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
}, p) => {
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
  ].filter(Boolean).join(" "), N = [
    "nhsuk-card__heading",
    t === "feature" && "nhsuk-card__heading--feature",
    s
  ].filter(Boolean).join(" "), f = () => {
    if (r)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!a) return null;
    const k = () => i && t !== "feature" ? /* @__PURE__ */ e.createElement("a", { className: "nhsuk-card__link", href: i }, a) : a;
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: N
      },
      k()
    );
  }, b = () => h.children ? h.children : c ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: c } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-card__description" }, l) : null, y = () => t !== "primary" ? null : /* @__PURE__ */ e.createElement(
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
      ref: p
    },
    d && /* @__PURE__ */ e.createElement(
      "img",
      {
        className: "nhsuk-card__img",
        src: d,
        alt: o || ""
      }
    ),
    /* @__PURE__ */ e.createElement("div", { className: u }, f(), b(), y())
  );
});
nt.displayName = "Card";
const At = ({
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
}, Bt = ({
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
}, Zt = ({
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
  "aria-label": p,
  "aria-labelledby": g,
  "aria-describedby": u
}) => {
  const N = [
    "nhsuk-care-card",
    `nhsuk-care-card--${t}`,
    i
  ].filter(Boolean).join(" "), f = [
    "nhsuk-care-card__heading",
    s
  ].filter(Boolean).join(" "), b = () => {
    if (r)
      return /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: r } });
    if (!a) return null;
    const k = {
      "non-urgent": "Non-urgent advice:",
      urgent: "Urgent advice:",
      emergency: "Immediate action required:"
    }[t], _ = /* @__PURE__ */ e.createElement("span", { role: "text" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, k, " "), a);
    return /* @__PURE__ */ e.createElement(
      H,
      {
        level: n,
        className: f
      },
      _
    );
  }, y = () => d || (c ? /* @__PURE__ */ e.createElement("div", { dangerouslySetInnerHTML: { __html: c } }) : l ? /* @__PURE__ */ e.createElement("p", { className: "nhsuk-care-card__text" }, l) : null);
  return /* @__PURE__ */ e.createElement(
    "div",
    {
      className: N,
      "data-testid": o,
      id: h,
      "aria-label": p,
      "aria-labelledby": g,
      "aria-describedby": u
    },
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__heading-container" }, b(), /* @__PURE__ */ e.createElement("span", { className: "nhsuk-care-card__arrow", "aria-hidden": "true" })),
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-care-card__content" }, y())
  );
};
var rt = /* @__PURE__ */ ((t) => (t.Photo = "photo", t.Graphic = "graphic", t))(rt || {}), F = /* @__PURE__ */ ((t) => (t.Vertical = "vertical", t.Horizontal = "horizontal", t.Portrait = "portrait", t.Landscape = "landscape", t))(F || {}), P = /* @__PURE__ */ ((t) => (t.AquaGreen = "aqua-green", t.Purple = "purple", t.Blue = "blue", t.Grey = "grey", t.Azure = "azure", t))(P || {}), G = /* @__PURE__ */ ((t) => (t.Rect = "rect", t.Hex = "hex", t.Circle = "circle", t))(G || {}), ne = /* @__PURE__ */ ((t) => (t.None = "none", t.Soft = "soft", t.Strong = "strong", t))(ne || {}), st = /* @__PURE__ */ ((t) => (t.Primary = "primary", t.Secondary = "secondary", t.Tertiary = "tertiary", t))(st || {});
function lt(t) {
  return function() {
    let a = t += 1831565813;
    return a = Math.imul(a ^ a >>> 15, a | 1), a ^= a + Math.imul(a ^ a >>> 7, a | 61), ((a ^ a >>> 14) >>> 0) / 4294967296;
  };
}
const R = [
  P.AquaGreen,
  P.Purple,
  P.Blue,
  P.Grey,
  P.Azure
];
function ee(t, a, r) {
  return Math.max(a, Math.min(r, t));
}
function ct(t, a, r = 4) {
  const n = lt(t), s = [], l = [G.Rect, G.Hex, G.Circle], c = R.indexOf(a), i = [
    a,
    R[(c + 2) % R.length],
    R[(c + 3) % R.length]
  ], d = [], o = 1200, h = 400, p = 1.2, g = (y, k) => !(y.right < k.left || y.left > k.right || y.bottom < k.top || y.top > k.bottom), u = (y) => y.left >= 0 && y.top >= 0 && y.right <= 100 && y.bottom <= 100, N = (y, k, _, v, E, I) => {
    let w = 0, M = 0;
    if (y === G.Rect) {
      const m = v ?? 48, C = E ?? 36;
      w = m / o * 100, M = C / h * 100;
    } else if (y === G.Circle) {
      const m = I ?? 40;
      w = m / o * 100, M = m / h * 100;
    } else {
      const m = I ?? 40;
      w = m / o * 100, M = m * (Math.sqrt(3) / 2) / h * 100;
    }
    return {
      left: k - w / 2 - p,
      right: k + w / 2 + p,
      top: _ - M / 2 - p,
      bottom: _ + M / 2 + p
    };
  };
  let f = 0;
  const b = ee(Math.round(r), 4, 12);
  for (; s.length < b && f < b * 120; ) {
    f++;
    const y = l[Math.floor(n() * l.length)], k = ee(20 + n() * 60, 10, 90), _ = ee(20 + n() * 60, 10, 90), v = i[Math.floor(n() * i.length)], E = s.length < 2 ? ne.Soft : ne.None;
    if (y === "rect") {
      const I = 40 + n() * 80, w = 28 + n() * 64, M = N(y, k, _, I, w);
      if (!u(M)) continue;
      let m = !1;
      for (let C = 0; C < d.length; C++)
        if (g(M, d[C])) {
          m = !0;
          break;
        }
      if (m) continue;
      d.push(M), s.push({ kind: y, x: k, y: _, width: I, height: w, gradient: v, rotate: 0, shadow: E });
    } else if (y === "circle") {
      const I = 24 + n() * 80, w = N(y, k, _, void 0, void 0, I);
      if (!u(w)) continue;
      let M = !1;
      for (let m = 0; m < d.length; m++)
        if (g(w, d[m])) {
          M = !0;
          break;
        }
      if (M) continue;
      d.push(w), s.push({ kind: y, x: k, y: _, size: I, gradient: v, rotate: 0, shadow: E });
    } else {
      const I = 28 + n() * 72, w = n() * 360, M = N(y, k, _, void 0, void 0, I);
      if (!u(M)) continue;
      let m = !1;
      for (let C = 0; C < d.length; C++)
        if (g(M, d[C])) {
          m = !0;
          break;
        }
      if (m) continue;
      d.push(M), s.push({ kind: y, x: k, y: _, size: I, gradient: v, rotate: w, shadow: E });
    }
  }
  return s;
}
const it = ({ shapes: t, aspectRatio: a }) => {
  const n = 600 * a, s = 600, l = (c, i, d) => {
    const o = d / 2;
    return [0, 60, 120, 180, 240, 300].map((p) => {
      const g = p * Math.PI / 180, u = c + o * Math.cos(g), N = i + o * Math.sin(g);
      return `${u},${N}`;
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
        const h = o.x / 100 * n, p = o.y / 100 * s;
        if (o.kind === "circle") {
          const g = (o.size ?? 40) / 2;
          return [0, 45, 90, 135, 180, 225, 270, 315].map((N) => {
            const f = N * Math.PI / 180;
            return [h + g * Math.cos(f), p + g * Math.sin(f)];
          });
        } else if (o.kind === "rect") {
          const g = o.width ?? 60, u = o.height ?? 40;
          return [
            [h - g / 2, p - u / 2],
            [h + g / 2, p - u / 2],
            [h + g / 2, p + u / 2],
            [h - g / 2, p + u / 2]
          ];
        } else {
          const u = (o.size ?? 40) / 2;
          return [0, 60, 120, 180, 240, 300].map((f) => {
            const b = f * Math.PI / 180;
            return [h + u * Math.cos(b), p + u * Math.sin(b)];
          });
        }
      }), i = 1, d = /* @__PURE__ */ new Set();
      for (let o = 0; o < t.length; o++) {
        const h = [], p = t[o].x / 100 * n, g = t[o].y / 100 * s;
        for (let u = 0; u < t.length; u++) {
          if (o === u) continue;
          const N = t[u].x / 100 * n, f = t[u].y / 100 * s, b = Math.sqrt((N - p) ** 2 + (f - g) ** 2);
          h.push({ index: u, dist: b });
        }
        h.sort((u, N) => u.dist - N.dist);
        for (let u = 0; u < i && u < h.length; u++) {
          const N = h[u].index, f = o < N ? `${o}-${N}` : `${N}-${o}`;
          d.add(f);
        }
      }
      return Array.from(d).map((o) => {
        const [h, p] = o.split("-").map(Number), g = c[h], u = c[p];
        let N = 1 / 0, f = [0, 0], b = [0, 0];
        for (const y of g)
          for (const k of u) {
            const _ = Math.sqrt((k[0] - y[0]) ** 2 + (k[1] - y[1]) ** 2);
            _ < N && (N = _, f = y, b = k);
          }
        return /* @__PURE__ */ e.createElement(
          "line",
          {
            key: o,
            x1: f[0],
            y1: f[1],
            x2: b[0],
            y2: b[1],
            stroke: "rgba(255,255,255,0.25)",
            strokeWidth: "1.5"
          }
        );
      });
    })()),
    t.map((c, i) => {
      const d = c.x / 100 * n, o = c.y / 100 * s, h = `url(#pc-grad-${c.gradient})`, p = c.shadow === "soft" ? "url(#pc-shadow-soft)" : c.shadow === "strong" ? "url(#pc-shadow-strong)" : void 0;
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
            filter: p
          }
        );
      } else if (c.kind === "rect") {
        const g = c.width ?? 60, u = c.height ?? 40, N = c.rotate ? `rotate(${c.rotate} ${d} ${o})` : void 0;
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
            filter: p,
            transform: N
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
            filter: p,
            transform: g
          }
        );
      }
    })
  );
}, Ht = ({
  title: t,
  description: a,
  image: r,
  layout: n = F.Vertical,
  buttons: s = [],
  badge: l,
  theme: c = "blue",
  className: i,
  style: d,
  href: o,
  headingLevel: h = 3,
  footer: p,
  elevated: g = !0,
  imageAspectRatio: u = 1.5
}) => {
  const N = e.useMemo(() => {
    if (r?.type === "graphic") {
      if (r.shapes) return r.shapes;
      const v = r.seed ?? 0, E = r.theme ?? c;
      return ct(v, E);
    }
    return [];
  }, [r, c]), b = [
    "nhs-product-card",
    `nhs-product-card--${e.useMemo(() => n === F.Landscape ? "horizontal" : n === F.Portrait ? "vertical" : n === F.Horizontal ? "horizontal" : "vertical", [n])}`,
    `nhs-product-card--theme-${c}`,
    g && "nhs-product-card--elevated",
    o && "nhs-product-card--clickable",
    i
  ].filter(Boolean).join(" "), y = () => {
    if (!r) return null;
    const v = [
      "nhs-product-card__image",
      r.type === "graphic" && "nhs-product-card__image--graphic"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        className: v,
        style: { aspectRatio: u.toString() }
      },
      r.type === "photo" && r.src ? /* @__PURE__ */ e.createElement("img", { src: r.src, alt: r.alt || "" }) : r.type === "graphic" ? /* @__PURE__ */ e.createElement(it, { shapes: N, aspectRatio: u }) : null
    );
  }, k = () => s.length ? /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__actions" }, s.map((v, E) => {
    const I = [
      "nhs-product-card__button",
      `nhs-product-card__button--${v.variant || "primary"}`,
      v.disabled && "nhs-product-card__button--disabled"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ e.createElement(
      "a",
      {
        key: E,
        href: v.href,
        className: I,
        "aria-label": v.ariaLabel,
        "aria-disabled": v.disabled
      },
      v.label
    );
  })) : null, _ = /* @__PURE__ */ e.createElement(e.Fragment, null, l && /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__badge" }, l), y(), /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__content" }, /* @__PURE__ */ e.createElement(H, { level: h, className: "nhs-product-card__title" }, t), /* @__PURE__ */ e.createElement("p", { className: "nhs-product-card__description" }, a), k(), p && /* @__PURE__ */ e.createElement("div", { className: "nhs-product-card__footer" }, p)));
  return o ? /* @__PURE__ */ e.createElement(
    "a",
    {
      href: o,
      className: b,
      style: d
    },
    _
  ) : /* @__PURE__ */ e.createElement(
    "div",
    {
      className: b,
      style: d
    },
    _
  );
};
function ot(t) {
  const r = (t.type || "text") === "range";
  return { classes: [
    "nhsuk-input",
    t.hasError ? "nhsuk-input--error" : "",
    r ? "nhsuk-input--range" : "",
    !r && t.width && t.width !== "full" ? `nhsuk-input--width-${t.width}` : "",
    t.className || ""
  ].filter(Boolean).join(" "), isRange: r };
}
function le(t) {
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
    describedBy: p,
    className: g,
    width: u = "full",
    inputMode: N,
    autoComplete: f,
    maxLength: b,
    minLength: y,
    pattern: k,
    step: _,
    min: v,
    max: E,
    showValueLabels: I = !1,
    showCurrentValue: w = !1,
    valueLabels: M,
    // Strip interactive handlers in server variant
    onChange: m,
    onBlur: C,
    onFocus: D,
    onKeyDown: j,
    ...T
  } = t, { classes: L, isRange: z } = ot({
    type: n,
    hasError: h,
    width: u,
    className: g
  }), A = {
    id: a,
    name: r,
    type: n,
    placeholder: c,
    disabled: i,
    readOnly: d,
    required: o,
    "aria-describedby": p,
    inputMode: N,
    autoComplete: f,
    maxLength: b,
    minLength: y,
    pattern: k,
    step: _,
    min: v,
    max: E,
    ...T
  };
  if (z) {
    const Z = s ?? l ?? (typeof v < "u" ? String(v) : "0"), B = /* @__PURE__ */ e.createElement(
      "input",
      {
        className: L,
        ...s !== void 0 ? { value: s } : {},
        ...s === void 0 && l !== void 0 ? { defaultValue: l } : {},
        "data-current-value": Z,
        ...A
      }
    );
    return /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-wrapper" }, I ? /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-labels" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--min" }, M?.min || v || "0"), B, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-label nhsuk-input-range-label--max" }, M?.max || E || "100")) : B, w && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-input-range-current-value" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-input-range-current-label" }, M?.current || "Current value:", " ", /* @__PURE__ */ e.createElement("strong", null, Z))));
  }
  return /* @__PURE__ */ e.createElement(
    "input",
    {
      className: L,
      ...s !== void 0 ? { value: s } : {},
      ...s === void 0 && l !== void 0 ? { defaultValue: l } : {},
      ...A
    }
  );
}
function dt(t) {
  const a = t.resize ?? "vertical";
  return { classes: [
    "nhsuk-textarea",
    t.hasError ? "nhsuk-textarea--error" : "",
    a !== "vertical" ? `nhsuk-textarea--resize-${a}` : "",
    t.className || ""
  ].filter(Boolean).join(" "), describedBy: t.describedBy };
}
const Pt = ({
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
  rows: p = 5,
  cols: g,
  maxLength: u,
  minLength: N,
  wrap: f = "soft",
  resize: b = "vertical",
  autoComplete: y,
  spellCheck: k,
  onChange: _,
  onBlur: v,
  onFocus: E,
  onKeyDown: I,
  ...w
}) => {
  const { classes: M, describedBy: m } = dt({ hasError: d, resize: b, className: h, describedBy: o });
  return /* @__PURE__ */ e.createElement(
    "textarea",
    {
      className: M,
      id: t,
      name: a,
      value: r,
      defaultValue: n,
      placeholder: s,
      disabled: l,
      readOnly: c,
      required: i,
      "aria-describedby": m,
      rows: p,
      cols: g,
      maxLength: u,
      minLength: N,
      wrap: f,
      autoComplete: y,
      spellCheck: k,
      onChange: _,
      onBlur: v,
      onFocus: E,
      onKeyDown: I,
      ...w
    }
  );
};
function ut(t) {
  return { classes: [
    "nhsuk-select",
    t.hasError ? "nhsuk-select--error" : "",
    t.className || ""
  ].filter(Boolean).join(" ") };
}
const mt = ({
  value: t,
  disabled: a = !1,
  selected: r = !1,
  // deprecated in React 19 warnings: we map to parent defaultValue
  className: n,
  children: s,
  ...l
}) => {
  const c = x(
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
}, gt = ({
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
  size: p,
  autoComplete: g,
  options: u,
  children: N,
  onChange: f,
  onBlur: b,
  onFocus: y,
  ...k
}) => {
  const { classes: _ } = ut({ hasError: i, className: o }), v = () => u ? u.map((I, w) => /* @__PURE__ */ e.createElement(
    "option",
    {
      key: `${I.value}-${w}`,
      value: I.value,
      disabled: I.disabled,
      "data-initial-selected": I.selected || void 0
    },
    I.text
  )) : null, E = s === void 0 && n === void 0 && u ? u.find((I) => I.selected)?.value : void 0;
  return /* @__PURE__ */ e.createElement(
    "select",
    {
      className: _,
      id: t,
      name: a,
      "aria-label": r,
      value: n,
      defaultValue: s !== void 0 ? s : E,
      disabled: l,
      required: c,
      "aria-describedby": d,
      multiple: h,
      size: p,
      autoComplete: g,
      onChange: f,
      onBlur: b,
      onFocus: y,
      ...k
    },
    N || v()
  );
}, ht = gt;
ht.Option = mt;
function Gt({
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
  const p = r || [
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
  const u = c ? `${t}-hint` : "", N = i ? `${t}-error` : "";
  u && (g = g ? `${g} ${u}` : u), N && (g = g ? `${g} ${N}` : N);
  const f = x("nhsuk-form-group", {
    "nhsuk-form-group--error": !!i
  }), b = x("nhsuk-date-input", a), y = () => /* @__PURE__ */ e.createElement(e.Fragment, null, c && /* @__PURE__ */ e.createElement(Pe, { id: u, className: c.classes }, c.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: c.html } }) : c.text), i && /* @__PURE__ */ e.createElement(Oe, { id: N, className: i.classes }, i.html ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: i.html } }) : i.text), /* @__PURE__ */ e.createElement(
    "div",
    {
      className: b,
      id: t,
      "data-testid": "date-input",
      ...o
    },
    p.map((k) => {
      const _ = k.id || `${t}-${k.name}`, v = n ? `${n}[${k.name}]` : k.name, E = k.label || k.name.charAt(0).toUpperCase() + k.name.slice(1), I = s[k.name];
      return /* @__PURE__ */ e.createElement("div", { key: k.name, className: "nhsuk-date-input__item" }, /* @__PURE__ */ e.createElement(re, { htmlFor: _, className: "nhsuk-date-input__label" }, E), /* @__PURE__ */ e.createElement(
        le,
        {
          id: _,
          name: v,
          defaultValue: I,
          className: x("nhsuk-date-input__input", k.classes),
          inputMode: k.inputmode,
          autoComplete: k.autocomplete,
          pattern: k.pattern,
          "aria-describedby": g || void 0
        }
      ));
    })
  ));
  return /* @__PURE__ */ e.createElement("div", { className: f }, l ? /* @__PURE__ */ e.createElement(
    se,
    {
      className: l.classes,
      legend: l.legend ? { text: l.legend } : void 0,
      describedBy: g || void 0
    },
    y()
  ) : y());
}
function Ot({
  titleText: t = "There is a problem",
  titleHtml: a,
  descriptionText: r,
  descriptionHtml: n,
  errorList: s,
  className: l,
  children: c,
  ...i
}) {
  const d = x("nhsuk-error-summary", l), o = () => a ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: a } }) : t, h = () => n ? /* @__PURE__ */ e.createElement("span", { dangerouslySetInnerHTML: { __html: n } }) : r, p = (g) => {
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
    /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__body" }, c && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, c), !c && (r || n) && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-error-summary__description", "data-role": "description" }, h()), /* @__PURE__ */ e.createElement("ul", { className: "nhsuk-list nhsuk-error-summary__list", role: "list" }, s.map((g, u) => /* @__PURE__ */ e.createElement("li", { key: u }, p(g)))))
  );
}
function pt(t) {
  return { classes: [
    "nhsuk-radios",
    t.hasError ? "nhsuk-radios--error" : "",
    t.size === "small" ? "nhsuk-radios--small" : "",
    t.inline ? "nhsuk-radios--inline" : "",
    t.className || ""
  ].filter(Boolean).join(" "), describedBy: t.describedBy };
}
function ft(t, {
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
    onBlur: p,
    onFocus: g,
    ...u
  } = t, {
    name: N,
    hasError: f = !1,
    describedBy: b,
    className: y,
    size: k = "normal",
    inline: _ = !1,
    options: v,
    ...E
  } = u, { classes: I, describedBy: w } = pt({ hasError: f, size: k, inline: _, className: y, describedBy: b });
  return /* @__PURE__ */ e.createElement(se, null, /* @__PURE__ */ e.createElement(
    "div",
    {
      className: I,
      ...E,
      "data-nhs-behaviour": "radios"
    },
    v.map((M, m) => {
      const C = `${N}-${m}`, D = M.conditional ? `${C}-conditional` : void 0, j = r === M.value;
      return /* @__PURE__ */ e.createElement("div", { key: M.value, className: "nhsuk-radios__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-radios__input",
          id: C,
          name: N,
          type: "radio",
          value: M.value,
          disabled: M.disabled,
          defaultChecked: j,
          "data-nhs-radios-input": !0,
          "aria-describedby": w
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-radios__label", htmlFor: C }, M.text), M.hint && /* @__PURE__ */ e.createElement("div", { className: "nhsuk-radios__hint" }, M.hint), M.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: x("nhsuk-radios__conditional", {
            "nhsuk-radios__conditional--hidden": !j
          }),
          id: D,
          "data-nhs-radios-conditional": !0
        },
        typeof M.conditional == "object" && M.conditional !== null && "label" in M.conditional && "id" in M.conditional && "name" in M.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, M.conditional.label && /* @__PURE__ */ e.createElement(
          re,
          {
            htmlFor: M.conditional.id
          },
          M.conditional.label
        ), /* @__PURE__ */ e.createElement(
          o,
          {
            ...M.conditional
          }
        )) : M.conditional
      ));
    })
  ));
}
const Ut = ({ value: t, defaultValue: a, ...r }) => {
  const n = t || a || "";
  return ft(
    { value: t, defaultValue: a, ...r },
    {
      variant: "server",
      selectedValue: n,
      enableBehaviourAttr: !0,
      InputComponent: le
    }
  );
};
function Nt(t) {
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
function Qt(t) {
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
    onChange: p,
    fieldsetAttributes: g,
    attributes: u,
    ...N
  } = t, f = n || r, b = i ? `${f}-hint` : void 0, y = d ? `${f}-error` : void 0, k = [b, y].filter(Boolean).join(" ") || void 0, { classes: _, formGroupClasses: v } = Nt({ small: h, className: o, hasError: !!d });
  return /* @__PURE__ */ e.createElement("div", { className: v, ...u, ...N }, /* @__PURE__ */ e.createElement(
    se,
    {
      legend: s ? { text: s, isPageHeading: l, size: c } : void 0,
      describedBy: k,
      ...g
    },
    i && /* @__PURE__ */ e.createElement("div", { id: b, className: "nhsuk-hint" }, i),
    d && /* @__PURE__ */ e.createElement("div", { id: y, className: "nhsuk-error-message" }, /* @__PURE__ */ e.createElement("span", { className: "nhsuk-u-visually-hidden" }, "Error:"), " ", d),
    /* @__PURE__ */ e.createElement("div", { className: _, "data-nhs-behaviour": "checkboxes" }, a.map((E, I) => {
      const w = `${f}-${I + 1}`, M = `${w}-conditional`, m = !!E.checked, C = !!E.disabled;
      return /* @__PURE__ */ e.createElement("div", { key: E.value, className: "nhsuk-checkboxes__item" }, /* @__PURE__ */ e.createElement(
        "input",
        {
          className: "nhsuk-checkboxes__input",
          id: w,
          name: r,
          type: "checkbox",
          value: E.value,
          ...m ? { defaultChecked: !0 } : {},
          disabled: C,
          "aria-describedby": E.hint ? `${w}-hint` : k,
          ...E.conditional && {
            "aria-controls": M,
            "aria-expanded": m ? "true" : "false"
          },
          ...E.attributes
        }
      ), /* @__PURE__ */ e.createElement("label", { className: "nhsuk-checkboxes__label", htmlFor: w }, E.text), E.hint && /* @__PURE__ */ e.createElement("div", { id: `${w}-hint`, className: "nhsuk-checkboxes__hint" }, E.hint), E.conditional && /* @__PURE__ */ e.createElement(
        "div",
        {
          className: x("nhsuk-checkboxes__conditional", {
            "nhsuk-checkboxes__conditional--hidden": !m
          }),
          id: M,
          "data-nhs-checkboxes-conditional": !0
        },
        typeof E.conditional == "object" && E.conditional !== null && "label" in E.conditional && "id" in E.conditional && "name" in E.conditional ? /* @__PURE__ */ e.createElement("div", { style: { marginTop: "16px" } }, E.conditional.label && /* @__PURE__ */ e.createElement(re, { htmlFor: E.conditional.id }, E.conditional.label), /* @__PURE__ */ e.createElement(le, { ...E.conditional })) : E.conditional
      ));
    }))
  ));
}
function te(t, a) {
  if (!t || t.hidden) return null;
  const { href: r, label: n, variant: s, disabled: l, type: c } = t, i = { variant: s, disabled: l };
  return r ? /* @__PURE__ */ e.createElement(ae, { href: r, ...i }, n || a) : /* @__PURE__ */ e.createElement(ae, { type: c === "button" ? "button" : "submit", ...i }, n || a);
}
const Rt = ({
  back: t,
  startAgain: a,
  next: r,
  flipOrderOnMobile: n = !0,
  className: s
}) => {
  const l = !!t && !t.hidden, c = !!a && !a.hidden, i = !!r && !r.hidden, d = [l, c, i].filter(Boolean).length, o = X.OneHalf, h = X.OneThird;
  return /* @__PURE__ */ e.createElement(
    Me,
    {
      className: x("nhs-form-nav", s, {
        "nhs-form-nav--flip-mobile": n
      })
    },
    l && /* @__PURE__ */ e.createElement(K, { width: d === 2 ? o : h, className: "nhs-form-nav__back" }, te(t, "Back")),
    c && /* @__PURE__ */ e.createElement(
      K,
      {
        width: d === 2 ? o : h,
        align: d === 2 ? q.Right : q.Center,
        className: "nhs-form-nav__start-again"
      },
      te(a, "Start again")
    ),
    i && /* @__PURE__ */ e.createElement(
      K,
      {
        width: !l && !c ? X.Full : d === 2 ? o : h,
        align: q.Right,
        className: "nhs-form-nav__next"
      },
      te(r, "Next")
    )
  );
};
export {
  Mt as ActionLink,
  Et as BackLink,
  me as BrandKey,
  We as Breadcrumb,
  Jt as Breakpoint,
  ae as ButtonServer,
  pe as ButtonSize,
  he as ButtonVariant,
  nt as Card,
  At as CardGroup,
  Bt as CardGroupItem,
  Zt as CareCard,
  Qt as Checkboxes,
  K as Column,
  q as ColumnAlign,
  ye as Container,
  Ct as ContentsList,
  Gt as DateInput,
  Qe as Details,
  Ve as DoDontList,
  Oe as ErrorMessage,
  Ot as ErrorSummary,
  se as Fieldset,
  Yt as Float,
  Lt as Footer,
  Rt as FormNavButtonBar,
  $t as Grid,
  X as GridWidth,
  yt as Header,
  H as Heading,
  at as Hero,
  Pe as Hint,
  Dt as Images,
  le as Input,
  vt as InsetText,
  re as Label,
  $e as List,
  ge as LogoVariant,
  zt as MetricCard,
  St as Pagination,
  Re as Panel,
  Ht as ProductCard,
  st as ProductCardButtonVariantEnum,
  rt as ProductCardImageTypeEnum,
  F as ProductCardLayoutEnum,
  P as ProductCardThemeEnum,
  Ut as Radios,
  Me as Row,
  ht as Select,
  mt as SelectOption,
  _t as SkipLink,
  Vt as SpacingUtilities,
  Tt as SummaryCard,
  jt as SummaryList,
  O as Table,
  Ne as TableBodyRow,
  et as TableCaption,
  tt as TableCell,
  ke as TableHeaderCell,
  It as Tag,
  Pt as Textarea,
  G as VectorGraphicKindEnum,
  ne as VectorGraphicShadowEnum,
  wt as WarningCallout,
  xt as WidthContainer,
  De as brandLogos,
  Se as getBrandLogo,
  Xt as getSpacingClass
};
//# sourceMappingURL=ssr.js.map
