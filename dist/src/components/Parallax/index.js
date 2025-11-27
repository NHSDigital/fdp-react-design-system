// src/components/Parallax/ParallaxScene.tsx
import React from "react";
import { jsx, jsxs } from "react/jsx-runtime";
function mulberry32(a) {
  return function() {
    let t = a += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function useReducedMotion(pref = "auto") {
  const [reduced, setReduced] = React.useState(
    pref === "off" ? false : pref === "minimal" ? false : false
  );
  React.useEffect(() => {
    var _a;
    if (pref !== "auto") return;
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    onChange();
    (_a = mq.addEventListener) == null ? void 0 : _a.call(mq, "change", onChange);
    return () => {
      var _a2;
      return (_a2 = mq.removeEventListener) == null ? void 0 : _a2.call(mq, "change", onChange);
    };
  }, [pref]);
  return pref === "off" ? false : reduced;
}
function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function generateShapes(props, sceneW) {
  var _a, _b;
  const seed = (_a = props.seed) != null ? _a : 1;
  const rng = mulberry32(seed);
  const count = Math.max(6, Math.min(48, Math.round((_b = props.density) != null ? _b : 18)));
  const kinds = ["circle", "hexagon", "rect"];
  const shapes = [];
  const gradients = props.gradients && props.gradients.length > 0 ? props.gradients : [
    "nhs-fdp-gradient-blue",
    "nhs-fdp-gradient-aqua",
    "nhs-fdp-gradient-green"
  ];
  const calloutWidth = typeof props.callout.width === "number" ? props.callout.width : void 0;
  const calloutPx = calloutWidth != null ? calloutWidth : Math.min(520, sceneW * 0.7);
  const calloutLeft = (sceneW - calloutPx) / 2;
  const calloutRight = calloutLeft + calloutPx;
  const exclusion = {
    left: calloutLeft / sceneW * 100,
    right: calloutRight / sceneW * 100,
    top: 20,
    bottom: 80
  };
  const fits = (xPct, yPct) => !(xPct > exclusion.left - 6 && xPct < exclusion.right + 6 && yPct > exclusion.top - 10 && yPct < exclusion.bottom + 10);
  let attempts = 0;
  while (shapes.length < count && attempts < count * 50) {
    attempts++;
    const kind = pick(rng, kinds);
    const depth = clamp(rng() * 1, 0.15, 0.95);
    const sizeBase = 24 + rng() * 72;
    const x = rng() * 100;
    const y = rng() * 100;
    if (!fits(x, y)) continue;
    const fillToken = pick(rng, gradients);
    if (kind === "rect") {
      const ratio = 0.6 + rng() * 0.8;
      shapes.push({
        kind,
        width: sizeBase * ratio,
        height: sizeBase,
        x,
        y,
        depth,
        fillToken,
        shadow: "soft"
      });
    } else {
      shapes.push({
        kind,
        size: sizeBase,
        x,
        y,
        depth,
        fillToken,
        shadow: "soft"
      });
    }
  }
  return shapes;
}
var ParallaxScene = (props) => {
  var _a;
  const {
    seed = 1,
    mode = "scroll",
    axis = "xy",
    height = 520,
    strength = 120,
    pin = false,
    reducedMotion = "auto",
    callout,
    className,
    style
  } = props;
  const ref = React.useRef(null);
  const [sceneSize, setSceneSize] = React.useState({
    w: 1e3,
    h: 520
  });
  const isReduced = useReducedMotion(reducedMotion);
  const dir = (_a = props.direction) != null ? _a : "se";
  const diagVec = React.useMemo(() => {
    switch (dir) {
      case "ne":
        return { x: 1, y: -1 };
      case "nw":
        return { x: -1, y: -1 };
      case "sw":
        return { x: -1, y: 1 };
      case "se":
      default:
        return { x: 1, y: 1 };
    }
  }, [dir]);
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) {
        const cr = e.contentRect;
        setSceneSize({ w: cr.width, h: cr.height });
      }
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const shapes = React.useMemo(() => {
    if (props.shapes && props.shapes.length) return props.shapes;
    return generateShapes(props, sceneSize.w);
  }, [seed, sceneSize.w, sceneSize.h]);
  const [progress, setProgress] = React.useState(0);
  const [scrollBase, setScrollBase] = React.useState(null);
  React.useEffect(() => {
    if (mode !== "scroll" || isReduced) return;
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const handler = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const total = rect.height + viewport;
      const traveled = viewport - rect.top;
      const visible = clamp(traveled / total, 0, 1);
      setScrollBase((prev) => prev === null ? visible : prev);
      setProgress(visible);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [mode, isReduced]);
  React.useEffect(() => {
    if (mode !== "timed" || isReduced) return;
    let raf = 0;
    let start = performance.now();
    const duration = 8e3;
    const loop = (t) => {
      const d = (t - start) % duration;
      const p = d / duration;
      setProgress(p);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [mode, isReduced]);
  const depthToFactor = (d) => {
    const base = d != null ? d : 0.5;
    return 0.15 + base * 0.6;
  };
  const calloutStyle = {
    position: "absolute",
    left: "50%",
    top: "50%",
    bottom: void 0,
    right: void 0,
    transform: "translate(-50%, -50%)",
    width: typeof callout.width === "number" ? `${callout.width}px` : callout.width || "min(520px, 70%)"
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: ["nhs-parallax-scene", className].filter(Boolean).join(" "),
      style: {
        position: "relative",
        height: typeof height === "number" ? `${height}px` : height,
        overflow: "hidden",
        ...style
      },
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "nhs-parallax-canvas",
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            preserveAspectRatio: "none",
            "aria-hidden": true,
            children: [
              /* @__PURE__ */ jsxs("defs", { children: [
                /* @__PURE__ */ jsxs("linearGradient", { id: "fdpgradient-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#2E61A5" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#1B3E73" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "fdpgradient-aqua", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#1DC6D2" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#117E8A" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "fdpgradient-green", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#2BC06A" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#1A874A" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "fdpgradient-dark-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#003087" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "fdpgradient-light-blue", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#005eb8" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#60b2e2" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "fdpgradient-purple", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#ac98cb" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#d6cce3" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "fdpgradient-green-palette", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#007f3b" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#63a691" })
                ] }),
                /* @__PURE__ */ jsxs("linearGradient", { id: "fdpgradient-grey", x1: "0", x2: "1", y1: "0", y2: "1", children: [
                  /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4c6272" }),
                  /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#768692" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("g", { className: "nhs-parallax-connectors", children: shapes.map((s, i) => {
                var _a2, _b, _c, _d;
                const cx = s.x, cy = s.y;
                const w = ((_b = (_a2 = s.width) != null ? _a2 : s.size) != null ? _b : 40) / sceneSize.w * 100 * 1;
                const h = ((_d = (_c = s.height) != null ? _c : s.size) != null ? _d : 40) / sceneSize.h * 100 * 1;
                const corners = s.kind === "circle" ? [
                  [cx, cy - h / 2],
                  [cx + w / 2, cy],
                  [cx, cy + h / 2],
                  [cx - w / 2, cy]
                ] : s.kind === "rect" || s.kind === "svg" ? [
                  [cx - w / 2, cy - h / 2],
                  [cx + w / 2, cy - h / 2],
                  [cx + w / 2, cy + h / 2],
                  [cx - w / 2, cy + h / 2]
                ] : (
                  // hexagon approx points
                  [
                    [cx - w / 2, cy],
                    [cx - w / 4, cy - h / 2],
                    [cx + w / 4, cy - h / 2],
                    [cx + w / 2, cy],
                    [cx + w / 4, cy + h / 2],
                    [cx - w / 4, cy + h / 2]
                  ]
                );
                const f = depthToFactor(s.depth);
                const base = scrollBase != null ? scrollBase : 0.5;
                const p = pin ? progress : progress - base;
                const delta = p * strength * f;
                const dx = axis === "x" ? delta : axis === "xy" ? delta * diagVec.x : 0;
                const dy = axis === "y" ? delta : axis === "xy" ? delta * diagVec.y : 0;
                return corners.map((p2, j) => /* @__PURE__ */ jsx(
                  "line",
                  {
                    x1: clamp(p2[0] + dx, 0, 100),
                    y1: clamp(p2[1] + dy, 0, 100),
                    x2: clamp(50 + dx * 0.2, 0, 100),
                    y2: clamp(50 + dy * 0.2, 0, 100),
                    className: "nhs-parallax-connector"
                  },
                  `c-${i}-${j}`
                ));
              }) }),
              /* @__PURE__ */ jsx("g", { className: "nhs-parallax-shapes", children: shapes.map((s, i) => {
                var _a2, _b, _c, _d, _e, _f, _g;
                const f = depthToFactor(s.depth);
                const base = scrollBase != null ? scrollBase : 0.5;
                const p = pin ? progress : progress - base;
                const delta = p * strength * f;
                const dx = axis === "x" ? delta : axis === "xy" ? delta * diagVec.x : 0;
                const dy = axis === "y" ? delta : axis === "xy" ? delta * diagVec.y : 0;
                const tx = clamp(s.x + dx, 0, 100);
                const ty = clamp(s.y + dy, 0, 100);
                const rot = (_a2 = s.rotate) != null ? _a2 : 0;
                const className2 = [
                  "nhs-parallax-shape",
                  s.fillToken,
                  s.shadow && `nhs-parallax-shadow--${s.shadow}`
                ].filter(Boolean).join(" ");
                if (s.kind === "circle") {
                  const r = ((_b = s.size) != null ? _b : 40) / sceneSize.w * 100 * 0.5;
                  return /* @__PURE__ */ jsx("circle", { cx: tx, cy: ty, r, className: className2 }, i);
                }
                if (s.kind === "rect") {
                  const w2 = ((_c = s.width) != null ? _c : 48) / sceneSize.w * 100;
                  const h2 = ((_d = s.height) != null ? _d : 36) / sceneSize.h * 100;
                  return /* @__PURE__ */ jsx(
                    "rect",
                    {
                      x: tx - w2 / 2,
                      y: ty - h2 / 2,
                      width: w2,
                      height: h2,
                      transform: `rotate(${rot} ${tx} ${ty})`,
                      className: className2
                    },
                    i
                  );
                }
                if (s.kind === "svg" && s.src) {
                  const w2 = ((_e = s.width) != null ? _e : 48) / sceneSize.w * 100;
                  const h2 = ((_f = s.height) != null ? _f : 48) / sceneSize.h * 100;
                  return /* @__PURE__ */ jsx(
                    "image",
                    {
                      href: s.src,
                      x: tx - w2 / 2,
                      y: ty - h2 / 2,
                      width: w2,
                      height: h2,
                      preserveAspectRatio: "xMidYMid meet",
                      transform: `rotate(${rot} ${tx} ${ty})`,
                      className: className2
                    },
                    i
                  );
                }
                const w = ((_g = s.size) != null ? _g : 40) / sceneSize.w * 100;
                const h = w * 0.866;
                const points = [
                  [tx - w / 2, ty],
                  [tx - w / 4, ty - h / 2],
                  [tx + w / 4, ty - h / 2],
                  [tx + w / 2, ty],
                  [tx + w / 4, ty + h / 2],
                  [tx - w / 4, ty + h / 2]
                ].map((p2) => p2.join(",")).join(" ");
                return /* @__PURE__ */ jsx("polygon", { points, className: className2 }, i);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "nhs-parallax-callout",
            style: calloutStyle,
            "aria-hidden": false,
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: ["nhs-parallax-callout-inner", callout.backgroundToken].filter(Boolean).join(" "),
                children: [
                  " ",
                  callout.content,
                  " "
                ]
              }
            )
          }
        )
      ]
    }
  );
};
var ParallaxScene_default = ParallaxScene;
export {
  ParallaxScene as Parallax,
  ParallaxScene_default as ParallaxScene
};
//# sourceMappingURL=index.js.map
