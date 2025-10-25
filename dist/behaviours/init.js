import { initAll } from "./index.js";
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      initAll(document);
    });
  } else {
    initAll(document);
  }
}
//# sourceMappingURL=init.js.map
