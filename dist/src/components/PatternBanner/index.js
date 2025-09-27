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
function generateShapes(seed, density, gradients, excludeBox) {
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
      hPct = s * 0.866 / BASE_H * 100;
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
  while (shapes.length < target && attempts < target * 120) {
    attempts++;
    const kind = kinds[Math.floor(rng() * kinds.length)];
    const x = rng() * 100;
    const y = rng() * 100;
    const minBox = candidateBox(kind, x, y, 32, 24, 28);
    if (!withinViewBox(minBox)) continue;
    const depth = clamp(rng(), 0.15, 0.95);
    const rotate = 0;
    const fill = gradients[Math.floor(rng() * gradients.length)];
    if (kind === "rect") {
      const width = 40 + rng() * 80;
      const height = 28 + rng() * 64;
      const box = candidateBox(kind, x, y, width, height);
      if (intersects(box, excludeBoxRect)) continue;
      let overlaps = false;
      for (let i = 0; i < boxes.length; i++) {
        if (intersects(box, boxes[i])) {
          overlaps = true;
          break;
        }
      }
      if (overlaps) continue;
      boxes.push(box);
      shapes.push({ kind, x, y, width, height, rotate, depth, fill, shadow: "soft" });
    } else if (kind === "circle") {
      const size = 24 + rng() * 80;
      const box = candidateBox(kind, x, y, void 0, void 0, size);
      if (intersects(box, excludeBoxRect)) continue;
      let overlaps = false;
      for (let i = 0; i < boxes.length; i++) {
        if (intersects(box, boxes[i])) {
          overlaps = true;
          break;
        }
      }
      if (overlaps) continue;
      boxes.push(box);
      shapes.push({ kind, x, y, size, rotate, depth, fill, shadow: "soft" });
    } else {
      const size = 28 + rng() * 72;
      const box = candidateBox(kind, x, y, void 0, void 0, size);
      if (intersects(box, excludeBoxRect)) continue;
      let overlaps = false;
      for (let i = 0; i < boxes.length; i++) {
        if (intersects(box, boxes[i])) {
          overlaps = true;
          break;
        }
      }
      if (overlaps) continue;
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
  gradients = [
    "pb-grad-aqua-green",
    "pb-grad-purple",
    "pb-grad-blue",
    "pb-grad-grey",
    "pb-grad-azure"
  ],
  shapes: shapesProp,
  feature,
  featureWidth = "min(640px, 80%)",
  excludeBoxPct = { w: 50, h: 36 },
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
    return generateShapes(seed, density, gradients, excludeBoxPct);
  }, [
    seed,
    density,
    gradients.join(","),
    excludeBoxPct.w,
    excludeBoxPct.h,
    shapesProp
  ]);
  const viewW = 100, viewH = 100;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: ["nhs-pattern-banner", className].filter(Boolean).join(" "),
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
                const cornersByShape = shapes.map((s) => {
                  var _a, _b, _c, _d, _e, _f, _g;
                  const cx = s.x;
                  const cy = s.y;
                  if (s.kind === "circle") {
                    const w2 = wPct((_a = s.size) != null ? _a : 40);
                    const h2 = hPct((_b = s.size) != null ? _b : 40);
                    return [
                      [cx, cy - h2 / 2],
                      [cx + w2 / 2, cy],
                      [cx, cy + h2 / 2],
                      [cx - w2 / 2, cy]
                    ];
                  }
                  if (s.kind === "rect") {
                    const w2 = wPct((_c = s.width) != null ? _c : 48);
                    const h2 = hPct((_d = s.height) != null ? _d : 36);
                    return [
                      [cx - w2 / 2, cy - h2 / 2],
                      [cx + w2 / 2, cy - h2 / 2],
                      [cx + w2 / 2, cy + h2 / 2],
                      [cx - w2 / 2, cy + h2 / 2]
                    ];
                  }
                  if (s.kind === "svg") {
                    const w2 = wPct((_e = s.width) != null ? _e : 48);
                    const h2 = hPct((_f = s.height) != null ? _f : 48);
                    return [
                      [cx - w2 / 2, cy - h2 / 2],
                      [cx + w2 / 2, cy - h2 / 2],
                      [cx + w2 / 2, cy + h2 / 2],
                      [cx - w2 / 2, cy + h2 / 2]
                    ];
                  }
                  const w = wPct((_g = s.size) != null ? _g : 40);
                  const h = w * 0.866 * (size.h / size.w);
                  return [
                    [cx - w / 2, cy],
                    [cx - w / 4, cy - h / 2],
                    [cx + w / 4, cy - h / 2],
                    [cx + w / 2, cy],
                    [cx + w / 4, cy + h / 2],
                    [cx - w / 4, cy + h / 2]
                  ];
                });
                const edges = /* @__PURE__ */ new Set();
                const pairs = [];
                for (let i = 0; i < shapes.length; i++) {
                  let bestJ = -1;
                  let bestD2 = Infinity;
                  for (let j = 0; j < shapes.length; j++) {
                    if (i === j) continue;
                    const dx = shapes[i].x - shapes[j].x;
                    const dy = shapes[i].y - shapes[j].y;
                    const d2 = dx * dx + dy * dy;
                    if (d2 < bestD2) {
                      bestD2 = d2;
                      bestJ = j;
                    }
                  }
                  if (bestJ >= 0) {
                    const a = Math.min(i, bestJ);
                    const b = Math.max(i, bestJ);
                    const key = `${a}-${b}`;
                    if (!edges.has(key)) {
                      edges.add(key);
                      pairs.push([a, b]);
                    }
                  }
                }
                const lines = [];
                for (const [i, j] of pairs) {
                  const ci = cornersByShape[i];
                  const cj = cornersByShape[j];
                  let best = null;
                  for (const p of ci) {
                    for (const q of cj) {
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
                          className: "nhs-pattern-banner-connector"
                        },
                        `edge-${i}-${j}`
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
                  const w2 = ((_b = s.width) != null ? _b : 48) / size.w * 100;
                  const h2 = ((_c = s.height) != null ? _c : 36) / size.h * 100;
                  const x = clamp(s.x - w2 / 2, 0, 100), y = clamp(s.y - h2 / 2, 0, 100);
                  return /* @__PURE__ */ jsx(
                    "rect",
                    {
                      x,
                      y,
                      width: w2,
                      height: h2,
                      className: className2
                    },
                    i
                  );
                }
                if (s.kind === "svg" && s.src) {
                  const w2 = ((_d = s.width) != null ? _d : 48) / size.w * 100;
                  const h2 = ((_e = s.height) != null ? _e : 48) / size.h * 100;
                  const x = clamp(s.x - w2 / 2, 0, 100), y = clamp(s.y - h2 / 2, 0, 100);
                  return /* @__PURE__ */ jsx(
                    "image",
                    {
                      href: s.src,
                      x,
                      y,
                      width: w2,
                      height: h2,
                      preserveAspectRatio: "xMidYMid meet",
                      className: className2
                    },
                    i
                  );
                }
                const w = ((_f = s.size) != null ? _f : 40) / size.w * 100;
                const h = w * 0.866 * (size.h / size.w);
                const tx = clamp(s.x, 0, 100), ty = clamp(s.y, 0, 100);
                const points = [
                  [tx - w / 2, ty],
                  [tx - w / 4, ty - h / 2],
                  [tx + w / 4, ty - h / 2],
                  [tx + w / 2, ty],
                  [tx + w / 4, ty + h / 2],
                  [tx - w / 4, ty + h / 2]
                ].map((p) => p.join(",")).join(" ");
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
