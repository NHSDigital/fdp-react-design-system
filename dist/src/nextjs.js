import { a as D, C as P, G as U, M as W, R as k, S as q, c as w, W as y, g as b, b as A } from "../WidthUtilities-1pLGiAi2.js";
import * as f from "react";
import { S as F } from "../SkipLink-CFQznirl.js";
let t = null;
try {
  t = Function("return require")()("next/navigation");
} catch {
  t = null;
}
const h = t?.useSearchParams, m = t?.usePathname, g = t?.useRouter;
function x(l = {}) {
  const { paramSelected: s = "nsv", paramDrill: r = "nsvDrill", method: c = "replace" } = l;
  if (!h || !m || !g)
    return process.env.NODE_ENV !== "production" && console.warn("[useNavigationSplitNextUrlSync] next/navigation not available – returning inert helpers. Import this hook only within a Next.js App Router environment."), {
      selectedId: void 0,
      drilledIn: !1,
      setSelectedId: () => {
      },
      setDrilledIn: () => {
      }
    };
  const n = h(), o = m(), i = g(), u = n.get(s) || void 0, p = n.get(r) === "1", d = f.useCallback((e, v) => {
    const a = new URLSearchParams(n.toString());
    e ? a.set(s, String(e)) : a.delete(s), a.set(r, v ? "1" : "0");
    const S = a.toString(), I = S ? `${o}?${S}` : o;
    (c === "push" ? i.push : i.replace)(I, { scroll: !1 });
  }, [n, o, i, c, s, r]);
  return {
    selectedId: u,
    drilledIn: p,
    setSelectedId: (e) => d(e, p),
    setDrilledIn: (e) => d(u, e)
  };
}
export {
  D as Column,
  P as Container,
  U as Grid,
  W as MainWrapper,
  k as Row,
  F as SkipLink,
  q as SpacingUtilities,
  w as WIDTH_FRACTIONS,
  y as WidthUtilities,
  b as getSpacingClass,
  A as getWidthClass,
  x as useNavigationSplitNextUrlSync
};
//# sourceMappingURL=nextjs.js.map
