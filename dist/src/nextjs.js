import { B as D, a as P, C as W, F as k, G as U, b as q, M as w, R as y, S as F, d as b, W as G, g as A, c as B } from "../WidthUtilities-DZ_5LObE.js";
import * as f from "react";
import { S as L } from "../SkipLink-CFQznirl.js";
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
  D as Breakpoint,
  P as Column,
  W as Container,
  k as Float,
  U as Grid,
  q as GridWidth,
  w as MainWrapper,
  y as Row,
  L as SkipLink,
  F as SpacingUtilities,
  b as WIDTH_FRACTIONS,
  G as WidthUtilities,
  A as getSpacingClass,
  B as getWidthClass,
  x as useNavigationSplitNextUrlSync
};
//# sourceMappingURL=nextjs.js.map
