import { M as D, S as P, a as W, W as k, g as U } from "../SkipLink-DY6p8J37.js";
import * as f from "react";
import { B as w, a as y, C as F, F as b, G, b as A, R as B, S as E, g as L } from "../SkipLink-BE-cc-Aq.js";
let t = null;
try {
  t = Function("return require")()("next/navigation");
} catch {
  t = null;
}
const S = t?.useSearchParams, m = t?.usePathname, g = t?.useRouter;
function x(l = {}) {
  const { paramSelected: s = "nsv", paramDrill: r = "nsvDrill", method: c = "replace" } = l;
  if (!S || !m || !g)
    return process.env.NODE_ENV !== "production" && console.warn("[useNavigationSplitNextUrlSync] next/navigation not available – returning inert helpers. Import this hook only within a Next.js App Router environment."), {
      selectedId: void 0,
      drilledIn: !1,
      setSelectedId: () => {
      },
      setDrilledIn: () => {
      }
    };
  const a = S(), i = m(), o = g(), u = a.get(s) || void 0, p = a.get(r) === "1", d = f.useCallback((e, v) => {
    const n = new URLSearchParams(a.toString());
    e ? n.set(s, String(e)) : n.delete(s), n.set(r, v ? "1" : "0");
    const h = n.toString(), I = h ? `${i}?${h}` : i;
    (c === "push" ? o.push : o.replace)(I, { scroll: !1 });
  }, [a, i, o, c, s, r]);
  return {
    selectedId: u,
    drilledIn: p,
    setSelectedId: (e) => d(e, p),
    setDrilledIn: (e) => d(u, e)
  };
}
export {
  w as Breakpoint,
  y as Column,
  F as Container,
  b as Float,
  G as Grid,
  A as GridWidth,
  D as MainWrapper,
  B as Row,
  P as SkipLink,
  E as SpacingUtilities,
  W as WIDTH_FRACTIONS,
  k as WidthUtilities,
  L as getSpacingClass,
  U as getWidthClass,
  x as useNavigationSplitNextUrlSync
};
//# sourceMappingURL=nextjs.js.map
