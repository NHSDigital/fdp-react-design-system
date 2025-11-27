import { M as k, S as w, a as E, W as U, g as b } from "../SkipLink-D44GdWV3.js";
import * as N from "react";
import { useEffect as R } from "react";
import { B as A, a as F, C as G, F as H, G as $, b as L, R as M, S as O, g as T } from "../SkipLink-BE-cc-Aq.js";
let a = null;
try {
  a = Function("return require")()("next/navigation");
} catch {
  a = null;
}
const m = a?.useSearchParams, f = a?.usePathname, S = a?.useRouter;
function C(n = {}) {
  const { paramSelected: e = "nsv", paramDrill: i = "nsvDrill", method: c = "replace" } = n;
  if (!m || !f || !S)
    return process.env.NODE_ENV !== "production" && console.warn("[useNavigationSplitNextUrlSync] next/navigation not available – returning inert helpers. Import this hook only within a Next.js App Router environment."), {
      selectedId: void 0,
      drilledIn: !1,
      setSelectedId: () => {
      },
      setDrilledIn: () => {
      }
    };
  const r = m(), o = f(), l = S(), u = r.get(e) || void 0, d = r.get(i) === "1", p = N.useCallback((t, g) => {
    const s = new URLSearchParams(r.toString());
    t ? s.set(e, String(t)) : s.delete(e), s.set(i, g ? "1" : "0");
    const h = s.toString(), I = h ? `${o}?${h}` : o;
    (c === "push" ? l.push : l.replace)(I, { scroll: !1 });
  }, [r, o, l, c, e, i]);
  return {
    selectedId: u,
    drilledIn: d,
    setSelectedId: (t) => p(t, d),
    setDrilledIn: (t) => p(u, t)
  };
}
function v() {
  return R(() => {
    let n = !1;
    return (async () => {
      try {
        const e = await import("@fergusbisset/nhs-fdp-design-system/behaviours");
        if (n) return;
        if (e && typeof e.initAll == "function")
          try {
            e.initAll(document);
          } catch {
          }
      } catch (e) {
        console.error("NHSBehavioursInit: failed to load behaviours", e);
      }
    })(), () => {
      n = !0;
    };
  }, []), null;
}
function B() {
  return /* @__PURE__ */ React.createElement(v, null);
}
function D() {
  return /* @__PURE__ */ React.createElement(v, null);
}
export {
  A as Breakpoint,
  F as Column,
  G as Container,
  H as Float,
  $ as Grid,
  L as GridWidth,
  B as InitBehaviours,
  D as InitBehavioursInline,
  k as MainWrapper,
  v as NHSBehavioursInit,
  M as Row,
  w as SkipLink,
  O as SpacingUtilities,
  E as WIDTH_FRACTIONS,
  U as WidthUtilities,
  T as getSpacingClass,
  b as getWidthClass,
  C as useNavigationSplitNextUrlSync
};
//# sourceMappingURL=nextjs.js.map
