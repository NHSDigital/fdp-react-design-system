// src/components/PatternBanner/PatternBanner.tsx
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
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function generateShapes(seed, density, gradients, excludeBox, centrality, hexAspectRatio, allowOverlaps, overlapColorPolicy, ignoreProtectedZones, uniformDistribution, excludeCirclePct, excludeEllipsePct) {
  const rng = mulberry32(seed);
  const shapes = [];
  const boxes = [];
  const kinds = ["rect", "hex", "circle"];
  const center = { x: 50, y: 50 };
  const ex = excludeBox;
  const BASE_W = 1200;
  const BASE_H = 400;
  const PADDING_PCT = 1.2;
  const excludeBoxRect = {
    left: center.x - ex.w / 2,
    right: center.x + ex.w / 2,
    top: center.y - ex.h / 2,
    bottom: center.y + ex.h / 2
  };
  const hasCircle = !ignoreProtectedZones && !!excludeCirclePct && excludeCirclePct.r > 0;
  const hasEllipse = !ignoreProtectedZones && !!excludeEllipsePct && (excludeEllipsePct.rx > 0 || excludeEllipsePct.ry > 0);
  const inCircle = (xPct, yPct) => {
    if (!hasCircle) return false;
    const dx = xPct - center.x;
    const dy = yPct - center.y;
    return dx * dx + dy * dy <= excludeCirclePct.r * excludeCirclePct.r;
  };
  const inEllipse = (xPct, yPct) => {
    if (!hasEllipse) return false;
    const rx = Math.max(1e-6, excludeEllipsePct.rx || 0);
    const ry = Math.max(1e-6, excludeEllipsePct.ry || 0);
    const dx = (xPct - center.x) / rx;
    const dy = (yPct - center.y) / ry;
    return dx * dx + dy * dy <= 1;
  };
  const intersects = (a, b) => !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
  const withinViewBox = (b) => b.left >= 0 && b.top >= 0 && b.right <= 100 && b.bottom <= 100;
  const candidateBox = (kind, x, y, widthPx, heightPx, sizePx) => {
    let wPct = 0;
    let hPct = 0;
    if (kind === "rect") {
      const w = widthPx != null ? widthPx : 48;
      const h = heightPx != null ? heightPx : 36;
      wPct = w / BASE_W * 100;
      hPct = h / BASE_H * 100;
    } else if (kind === "circle") {
      const d = sizePx != null ? sizePx : 40;
      wPct = d / BASE_W * 100;
      hPct = d / BASE_H * 100;
    } else {
      const s = sizePx != null ? sizePx : 40;
      wPct = s / BASE_W * 100;
      hPct = s * hexAspectRatio / BASE_H * 100;
    }
    return {
      left: x - wPct / 2 - PADDING_PCT,
      right: x + wPct / 2 + PADDING_PCT,
      top: y - hPct / 2 - PADDING_PCT,
      bottom: y + hPct / 2 + PADDING_PCT
    };
  };
  let attempts = 0;
  const target = clamp(Math.round(density), 4, 48);
  let gridCenters = null;
  if (uniformDistribution) {
    const cols = Math.ceil(Math.sqrt(target));
    const rows = Math.ceil(target / cols);
    gridCenters = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (gridCenters.length >= target) break;
        const x = (c + 0.5) / cols * 100;
        const y = (r + 0.5) / rows * 100;
        gridCenters.push({ x, y });
      }
    }
  }
  while (shapes.length < target && attempts < target * 120) {
    attempts++;
    const kind = kinds[Math.floor(rng() * kinds.length)];
    let x, y;
    if (uniformDistribution && gridCenters && gridCenters.length) {
      const idx = shapes.length % gridCenters.length;
      x = gridCenters[idx].x;
      y = gridCenters[idx].y;
    } else {
      const bias = clamp(centrality != null ? centrality : 0, 0, 1);
      const sampleUniform = () => rng() * 100;
      const sampleGaussian = () => {
        const u1 = Math.max(rng(), 1e-6);
        const u2 = Math.max(rng(), 1e-6);
        const r = Math.sqrt(-2 * Math.log(u1));
        const theta = 2 * Math.PI * u2;
        const z0 = r * Math.cos(theta);
        const sigma = 12.5;
        return 50 + z0 * sigma;
      };
      const mix = (a, b, t) => a * (1 - t) + b * t;
      x = clamp(mix(sampleUniform(), sampleGaussian(), bias), 0, 100);
      y = clamp(mix(sampleUniform(), sampleGaussian(), bias), 0, 100);
    }
    const minBox = candidateBox(kind, x, y, 32, 24, 28);
    if (!withinViewBox(minBox)) continue;
    const depth = clamp(rng(), 0.15, 0.95);
    const rotate = 0;
    if (kind === "rect") {
      const width = 40 + rng() * 80;
      const height = 28 + rng() * 64;
      const box = candidateBox(kind, x, y, width, height);
      if (!ignoreProtectedZones) {
        if (intersects(box, excludeBoxRect)) continue;
        if (inCircle(x, y) || inEllipse(x, y)) continue;
      }
      if (!allowOverlaps) {
        let overlaps = false;
        for (let i = 0; i < boxes.length; i++) {
          if (intersects(box, boxes[i])) {
            overlaps = true;
            break;
          }
        }
        if (overlaps) continue;
      }
      let fill;
      if (allowOverlaps) {
        const conflict = /* @__PURE__ */ new Set();
        for (let i = 0; i < boxes.length; i++) {
          if (intersects(box, boxes[i])) {
            const f = shapes[i].fill;
            if (f) conflict.add(f);
          }
        }
        const available = gradients.filter((g) => !conflict.has(g));
        if (available.length === 0) {
          if (overlapColorPolicy === "skip") continue;
          fill = gradients[Math.floor(rng() * gradients.length)];
        } else {
          fill = available[Math.floor(rng() * available.length)];
        }
      } else {
        fill = gradients[Math.floor(rng() * gradients.length)];
      }
      boxes.push(box);
      shapes.push({ kind, x, y, width, height, rotate, depth, fill, shadow: "soft" });
    } else if (kind === "circle") {
      const size = 24 + rng() * 80;
      const box = candidateBox(kind, x, y, void 0, void 0, size);
      if (!ignoreProtectedZones) {
        if (intersects(box, excludeBoxRect)) continue;
        if (inCircle(x, y) || inEllipse(x, y)) continue;
      }
      if (!allowOverlaps) {
        let overlaps = false;
        for (let i = 0; i < boxes.length; i++) {
          if (intersects(box, boxes[i])) {
            overlaps = true;
            break;
          }
        }
        if (overlaps) continue;
      }
      let fill;
      if (allowOverlaps) {
        const conflict = /* @__PURE__ */ new Set();
        for (let i = 0; i < boxes.length; i++) {
          if (intersects(box, boxes[i])) {
            const f = shapes[i].fill;
            if (f) conflict.add(f);
          }
        }
        const available = gradients.filter((g) => !conflict.has(g));
        if (available.length === 0) {
          if (overlapColorPolicy === "skip") continue;
          fill = gradients[Math.floor(rng() * gradients.length)];
        } else {
          fill = available[Math.floor(rng() * available.length)];
        }
      } else {
        fill = gradients[Math.floor(rng() * gradients.length)];
      }
      boxes.push(box);
      shapes.push({ kind, x, y, size, rotate, depth, fill, shadow: "soft" });
    } else {
      const size = 28 + rng() * 72;
      const box = candidateBox(kind, x, y, void 0, void 0, size);
      if (!ignoreProtectedZones) {
        if (intersects(box, excludeBoxRect)) continue;
        if (inCircle(x, y) || inEllipse(x, y)) continue;
      }
      if (!allowOverlaps) {
        let overlaps = false;
        for (let i = 0; i < boxes.length; i++) {
          if (intersects(box, boxes[i])) {
            overlaps = true;
            break;
          }
        }
        if (overlaps) continue;
      }
      let fill;
      if (allowOverlaps) {
        const conflict = /* @__PURE__ */ new Set();
        for (let i = 0; i < boxes.length; i++) {
          if (intersects(box, boxes[i])) {
            const f = shapes[i].fill;
            if (f) conflict.add(f);
          }
        }
        const available = gradients.filter((g) => !conflict.has(g));
        if (available.length === 0) {
          if (overlapColorPolicy === "skip") continue;
          fill = gradients[Math.floor(rng() * gradients.length)];
        } else {
          fill = available[Math.floor(rng() * available.length)];
        }
      } else {
        fill = gradients[Math.floor(rng() * gradients.length)];
      }
      boxes.push(box);
      shapes.push({ kind, x, y, size, rotate, depth, fill, shadow: "soft" });
    }
  }
  return shapes;
}
var PatternBanner = ({
  seed = 1,
  width = "100%",
  height = 400,
  density = 16,
  centrality = 0,
  gradients = [
    "pb-grad-aqua-green",
    "pb-grad-purple",
    "pb-grad-blue",
    "pb-grad-grey",
    "pb-grad-azure"
  ],
  shapes: shapesProp,
  neighbors = 1,
  connectorColor,
  connectorWidth,
  connectorDasharray,
  hexAspectRatio = Math.sqrt(3) / 2,
  allowOverlaps = false,
  overlapColorPolicy = "recolor",
  feature,
  featureWidth = "min(640px, 80%)",
  featureLayer = "over",
  excludeBoxPct = { w: 50, h: 36 },
  excludeCirclePct,
  excludeEllipsePct,
  uniformDistribution = false,
  className,
  style
}) => {
  const ref = React.useRef(null);
  const [size, setSize] = React.useState({ w: 1200, h: 400 });
  React.useLayoutEffect(() => {
    if (!ref.current) return;
    const obs = new ResizeObserver((entries) => {
      for (const e of entries) {
        const r = e.contentRect;
        setSize({ w: r.width, h: r.height });
      }
    });
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const shapes = React.useMemo(() => {
    if (shapesProp == null ? void 0 : shapesProp.length) return shapesProp;
    const ignoreProtectedZones = featureLayer === "over" || uniformDistribution;
    return generateShapes(
      seed,
      density,
      gradients,
      excludeBoxPct,
      centrality,
      hexAspectRatio,
      allowOverlaps,
      overlapColorPolicy,
      ignoreProtectedZones,
      uniformDistribution,
      excludeCirclePct,
      excludeEllipsePct
    );
  }, [
    seed,
    density,
    gradients.join(","),
    excludeBoxPct.w,
    excludeBoxPct.h,
    centrality,
    hexAspectRatio,
    allowOverlaps,
    overlapColorPolicy,
    featureLayer,
    uniformDistribution,
    excludeCirclePct == null ? void 0 : excludeCirclePct.r,
    excludeEllipsePct == null ? void 0 : excludeEllipsePct.rx,
    excludeEllipsePct == null ? void 0 : excludeEllipsePct.ry,
    shapesProp
  ]);
  const viewW = 100, viewH = 100;
  const DEFAULT_HEX_RATIO = Math.sqrt(3) / 2;
  const hexCornerPoints = (cxPct, cyPct, widthPx) => {
    const R = (widthPx != null ? widthPx : 40) / 2;
    const cxPx = cxPct / 100 * size.w;
    const cyPx = cyPct / 100 * size.h;
    const sy = hexAspectRatio / DEFAULT_HEX_RATIO;
    const angles = [Math.PI, 2 * Math.PI / 3, Math.PI / 3, 0, -Math.PI / 3, -(2 * Math.PI) / 3];
    return angles.map((a) => {
      const x = cxPx + R * Math.cos(a);
      const y = cyPx + R * Math.sin(a) * sy;
      return [clamp(x / size.w * 100, 0, 100), clamp(y / size.h * 100, 0, 100)];
    });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: [
        "nhs-pattern-banner",
        featureLayer === "under" ? "nhs-pattern-banner--feature-under" : "nhs-pattern-banner--feature-over",
        className
      ].filter(Boolean).join(" "),
      style: {
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style
      },
      "aria-hidden": true,
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "nhs-pattern-banner__svg",
            viewBox: `0 0 ${viewW} ${viewH}`,
            preserveAspectRatio: "none",
            "aria-hidden": true,
            children: [
              /* @__PURE__ */ jsxs("defs", { children: [
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-aqua-green",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-purple",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "0",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "rgb(214, 203, 226)" }),
                      /* @__PURE__ */ jsx("stop", { offset: "0.72", stopColor: "rgb(192, 177, 213)" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "rgb(171, 151, 199)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-blue",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "rgb(38, 58, 127)" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "rgb(34, 94, 171)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-grey",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "rgb(66, 85, 101)" }),
                      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "rgb(112, 132, 147)" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "linearGradient",
                  {
                    id: "pb-grad-azure",
                    x1: "0",
                    y1: "0",
                    x2: "1",
                    y2: "1",
                    gradientUnits: "objectBoundingBox",
                    children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "rgb(96, 178, 226)" }),
                      /* @__PURE__ */ jsx("stop", { offset: "0.51", stopColor: "rgb(34, 94, 172)" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("g", { children: (() => {
                const wPct = (px) => px / size.w * 100;
                const hPct = (px) => px / size.h * 100;
                const candidates = shapes.map((s) => {
                  var _a, _b, _c, _d, _e;
                  const cx = clamp(s.x, 0, 100);
                  const cy = clamp(s.y, 0, 100);
                  if (s.kind === "circle") return [[cx, cy]];
                  if (s.kind === "rect") {
                    const w = wPct((_a = s.width) != null ? _a : 48);
                    const h = hPct((_b = s.height) != null ? _b : 36);
                    return [
                      [cx - w / 2, cy - h / 2],
                      [cx + w / 2, cy - h / 2],
                      [cx + w / 2, cy + h / 2],
                      [cx - w / 2, cy + h / 2]
                    ];
                  }
                  if (s.kind === "svg") {
                    const w = wPct((_c = s.width) != null ? _c : 48);
                    const h = hPct((_d = s.height) != null ? _d : 48);
                    return [
                      [cx - w / 2, cy - h / 2],
                      [cx + w / 2, cy - h / 2],
                      [cx + w / 2, cy + h / 2],
                      [cx - w / 2, cy + h / 2]
                    ];
                  }
                  return hexCornerPoints(cx, cy, (_e = s.size) != null ? _e : 40);
                });
                const k = Math.max(1, Math.floor(neighbors != null ? neighbors : 1));
                const edges = /* @__PURE__ */ new Set();
                const pairs = [];
                for (let i = 0; i < shapes.length; i++) {
                  const dists = [];
                  for (let j = 0; j < shapes.length; j++) {
                    if (i === j) continue;
                    const dx = shapes[i].x - shapes[j].x;
                    const dy = shapes[i].y - shapes[j].y;
                    dists.push({ j, d2: dx * dx + dy * dy });
                  }
                  dists.sort((a, b) => a.d2 - b.d2);
                  const limit = Math.min(k, dists.length);
                  for (let n = 0; n < limit; n++) {
                    const j = dists[n].j;
                    const a = Math.min(i, j);
                    const b = Math.max(i, j);
                    const key = `${a}-${b}`;
                    if (!edges.has(key)) {
                      edges.add(key);
                      pairs.push([a, b]);
                    }
                  }
                }
                const lines = [];
                for (const [i, j] of pairs) {
                  const Ai = candidates[i];
                  const Bj = candidates[j];
                  let best = null;
                  for (const p of Ai) {
                    for (const q of Bj) {
                      const dx = p[0] - q[0];
                      const dy = p[1] - q[1];
                      const d2 = dx * dx + dy * dy;
                      if (!best || d2 < best.d2) best = { p, q, d2 };
                    }
                  }
                  if (best) {
                    lines.push(
                      /* @__PURE__ */ jsx(
                        "line",
                        {
                          x1: clamp(best.p[0], 0, 100),
                          y1: clamp(best.p[1], 0, 100),
                          x2: clamp(best.q[0], 0, 100),
                          y2: clamp(best.q[1], 0, 100),
                          className: "nhs-pattern-banner-connector",
                          style: {
                            stroke: connectorColor,
                            strokeWidth: connectorWidth,
                            strokeDasharray: connectorDasharray
                          }
                        },
                        `nn-line-${i}-${j}`
                      )
                    );
                  }
                }
                return lines;
              })() }),
              /* @__PURE__ */ jsx("g", { children: shapes.map((s, i) => {
                var _a, _b, _c, _d, _e, _f;
                const className2 = ["nhs-pattern-banner-shape", s.fill].filter(Boolean).join(" ");
                if (s.kind === "circle") {
                  const rx = ((_a = s.size) != null ? _a : 40) / size.w * 100 * 0.5;
                  const ar = size.w / size.h;
                  const ry = rx * ar;
                  return /* @__PURE__ */ jsx(
                    "ellipse",
                    {
                      cx: clamp(s.x, 0, 100),
                      cy: clamp(s.y, 0, 100),
                      rx,
                      ry,
                      className: className2
                    },
                    i
                  );
                }
                if (s.kind === "rect") {
                  const w = ((_b = s.width) != null ? _b : 48) / size.w * 100;
                  const h = ((_c = s.height) != null ? _c : 36) / size.h * 100;
                  const x = clamp(s.x - w / 2, 0, 100), y = clamp(s.y - h / 2, 0, 100);
                  return /* @__PURE__ */ jsx(
                    "rect",
                    {
                      x,
                      y,
                      width: w,
                      height: h,
                      className: className2
                    },
                    i
                  );
                }
                if (s.kind === "svg" && s.src) {
                  const w = ((_d = s.width) != null ? _d : 48) / size.w * 100;
                  const h = ((_e = s.height) != null ? _e : 48) / size.h * 100;
                  const x = clamp(s.x - w / 2, 0, 100), y = clamp(s.y - h / 2, 0, 100);
                  return /* @__PURE__ */ jsx(
                    "image",
                    {
                      href: s.src,
                      x,
                      y,
                      width: w,
                      height: h,
                      preserveAspectRatio: "xMidYMid meet",
                      className: className2
                    },
                    i
                  );
                }
                const tx = clamp(s.x, 0, 100), ty = clamp(s.y, 0, 100);
                const pts = hexCornerPoints(tx, ty, (_f = s.size) != null ? _f : 40);
                const points = pts.map((p) => p.join(",")).join(" ");
                return /* @__PURE__ */ jsx("polygon", { points, className: className2 }, i);
              }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "nhs-pattern-banner__feature",
            style: {
              width: typeof featureWidth === "number" ? `${featureWidth}px` : featureWidth
            },
            children: feature
          }
        )
      ]
    }
  );
};
var PatternBanner_default = PatternBanner;
export {
  PatternBanner_default as PatternBanner
};
//# sourceMappingURL=index.js.map
