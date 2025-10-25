"use client";
import { useEffect as n } from "react";
function u({ scope: t, onInit: a, onError: o } = {}) {
  return n(() => {
    typeof window > "u" || (window.__nhsInitAllBehaviours || (window.__nhsInitAllBehaviours = () => {
    }), import("./index-DTpWYtV-.js").then(({ initAll: e }) => {
      window.__nhsInitAllBehaviours = e;
      try {
        e(t || document), a?.();
      } catch (i) {
        console.error("[BehavioursLoader] Failed to initialize behaviours:", i), o?.(i);
      }
    }).catch((e) => {
      console.error("[BehavioursLoader] Failed to load behaviours module:", e), o?.(e);
    }));
  }, [t, a, o]), null;
}
export {
  u as BehavioursLoader
};
//# sourceMappingURL=react.js.map
