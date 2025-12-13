import { M as P, S as U, a as b, W as k, g as A } from "../SkipLink-BNpYjmdQ.js";
import * as h from "react";
import { useEffect as E } from "react";
import { B as W, a as q, C as F, F as H, G as O, b as _, R as G, S as V, g as $ } from "../SkipLink-BHzMGYwx.js";
let r = null;
try {
  r = Function("return require")()("next/navigation");
} catch {
  r = null;
}
const f = r?.useSearchParams, v = r?.usePathname, S = r?.useRouter;
function w(n = {}) {
  const { paramSelected: e = "nsv", paramDrill: i = "nsvDrill", method: c = "replace" } = n;
  if (h.useEffect(() => {
    process.env.NODE_ENV !== "production" && console.warn(
      "[useNavigationSplitNextUrlSync] DEPRECATED: This hook will be removed in a future version. Use useNavigationSplitUrlSync from the main entry, or create your own Next.js wrapper in your app. See the JSDoc comments for migration guidance."
    );
  }, []), !f || !v || !S)
    return process.env.NODE_ENV !== "production" && console.warn("[useNavigationSplitNextUrlSync] next/navigation not available – returning inert helpers. Import this hook only within a Next.js App Router environment."), {
      selectedId: void 0,
      drilledIn: !1,
      setSelectedId: () => {
      },
      setDrilledIn: () => {
      }
    };
  const o = f(), s = v(), l = S(), u = o.get(e) || void 0, p = o.get(i) === "1", d = h.useCallback((t, N) => {
    const a = new URLSearchParams(o.toString());
    t ? a.set(e, String(t)) : a.delete(e), a.set(i, N ? "1" : "0");
    const m = a.toString(), I = m ? `${s}?${m}` : s;
    (c === "push" ? l.push : l.replace)(I, { scroll: !1 });
  }, [o, s, l, c, e, i]);
  return {
    selectedId: u,
    drilledIn: p,
    setSelectedId: (t) => d(t, p),
    setDrilledIn: (t) => d(u, t)
  };
}
function g() {
  return E(() => {
    process.env.NODE_ENV !== "production" && console.warn(
      "[NHSBehavioursInit] DEPRECATED: This component will be removed in a future version. Create your own BehavioursInit component in your app instead. See the JSDoc comments for migration guidance."
    );
    let n = !1;
    return (async () => {
      try {
        const e = await import("@nhsdigital/fdp-design-system/behaviours");
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
function R() {
  return /* @__PURE__ */ React.createElement(g, null);
}
function x() {
  return /* @__PURE__ */ React.createElement(g, null);
}
export {
  W as Breakpoint,
  q as Column,
  F as Container,
  H as Float,
  O as Grid,
  _ as GridWidth,
  R as InitBehaviours,
  x as InitBehavioursInline,
  P as MainWrapper,
  g as NHSBehavioursInit,
  G as Row,
  U as SkipLink,
  V as SpacingUtilities,
  b as WIDTH_FRACTIONS,
  k as WidthUtilities,
  $ as getSpacingClass,
  A as getWidthClass,
  w as useNavigationSplitNextUrlSync
};
//# sourceMappingURL=nextjs.js.map
