// src/components/ProductCard/ProductCard.tsx
import React2 from "react";

// src/components/Heading/Heading.tsx
import { createElement } from "react";

// src/mapping/heading.ts
function deriveLevel(size) {
  switch (size) {
    case "xxl":
    case "xl":
      return 1;
    case "l":
      return 2;
    case "m":
      return 3;
    case "s":
      return 4;
    case "xs":
      return 5;
    default:
      return 2;
  }
}
function mapHeadingProps(input) {
  var _a;
  const level = (_a = input.level) != null ? _a : deriveLevel(input.size);
  const classes = [
    "nhsuk-heading",
    input.size ? `nhsuk-heading--${input.size}` : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  const style = input.marginBottom ? { marginBottom: input.marginBottom } : void 0;
  return { tag: `h${level}`, classes, style };
}

// src/components/Heading/Heading.tsx
import { jsx } from "react/jsx-runtime";
var Heading = ({
  level,
  className,
  text,
  html,
  children,
  size,
  marginBottom,
  ...rest
}) => {
  const model = mapHeadingProps({ level, size, className, marginBottom });
  const content = children || (html ? /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  return createElement(
    model.tag,
    { className: model.classes, style: model.style, ...rest },
    content
  );
};

// src/components/ProductCard/ProductCard.types.ts
var ProductCardThemeEnum = /* @__PURE__ */ ((ProductCardThemeEnum2) => {
  ProductCardThemeEnum2["AquaGreen"] = "aqua-green";
  ProductCardThemeEnum2["Purple"] = "purple";
  ProductCardThemeEnum2["Blue"] = "blue";
  ProductCardThemeEnum2["Grey"] = "grey";
  ProductCardThemeEnum2["Azure"] = "azure";
  return ProductCardThemeEnum2;
})(ProductCardThemeEnum || {});

// src/components/ProductCard/ProductCard.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function mulberry32(a) {
  return function() {
    let t = a += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
var DEFAULT_GRADIENTS = [
  "aqua-green" /* AquaGreen */,
  "purple" /* Purple */,
  "blue" /* Blue */,
  "grey" /* Grey */,
  "azure" /* Azure */
];
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function generateVectorShapes(seed, theme, density = 4) {
  const rng = mulberry32(seed);
  const shapes = [];
  const kinds = ["rect", "hex", "circle"];
  const themeIndex = DEFAULT_GRADIENTS.indexOf(theme);
  const gradients = [
    theme,
    DEFAULT_GRADIENTS[(themeIndex + 2) % DEFAULT_GRADIENTS.length],
    DEFAULT_GRADIENTS[(themeIndex + 3) % DEFAULT_GRADIENTS.length]
  ];
  const boxes = [];
  const BASE_W = 1200;
  const BASE_H = 400;
  const PADDING_PCT = 1.2;
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
      hPct = s * (Math.sqrt(3) / 2) / BASE_H * 100;
    }
    return {
      left: x - wPct / 2 - PADDING_PCT,
      right: x + wPct / 2 + PADDING_PCT,
      top: y - hPct / 2 - PADDING_PCT,
      bottom: y + hPct / 2 + PADDING_PCT
    };
  };
  let attempts = 0;
  const target = clamp(Math.round(density), 4, 12);
  while (shapes.length < target && attempts < target * 120) {
    attempts++;
    const kind = kinds[Math.floor(rng() * kinds.length)];
    const x = clamp(20 + rng() * 60, 10, 90);
    const y = clamp(20 + rng() * 60, 10, 90);
    const gradient = gradients[Math.floor(rng() * gradients.length)];
    const shadow = shapes.length < 2 ? "soft" : "none";
    if (kind === "rect") {
      const width = 40 + rng() * 80;
      const height = 28 + rng() * 64;
      const box = candidateBox(kind, x, y, width, height);
      if (!withinViewBox(box)) continue;
      let overlaps = false;
      for (let i = 0; i < boxes.length; i++) {
        if (intersects(box, boxes[i])) {
          overlaps = true;
          break;
        }
      }
      if (overlaps) continue;
      boxes.push(box);
      shapes.push({ kind, x, y, width, height, gradient, rotate: 0, shadow });
    } else if (kind === "circle") {
      const size = 24 + rng() * 80;
      const box = candidateBox(kind, x, y, void 0, void 0, size);
      if (!withinViewBox(box)) continue;
      let overlaps = false;
      for (let i = 0; i < boxes.length; i++) {
        if (intersects(box, boxes[i])) {
          overlaps = true;
          break;
        }
      }
      if (overlaps) continue;
      boxes.push(box);
      shapes.push({ kind, x, y, size, gradient, rotate: 0, shadow });
    } else {
      const size = 28 + rng() * 72;
      const rotate = rng() * 360;
      const box = candidateBox(kind, x, y, void 0, void 0, size);
      if (!withinViewBox(box)) continue;
      let overlaps = false;
      for (let i = 0; i < boxes.length; i++) {
        if (intersects(box, boxes[i])) {
          overlaps = true;
          break;
        }
      }
      if (overlaps) continue;
      boxes.push(box);
      shapes.push({ kind, x, y, size, gradient, rotate, shadow });
    }
  }
  return shapes;
}
var VectorGraphic = ({ shapes, aspectRatio }) => {
  const baseHeight = 600;
  const viewW = baseHeight * aspectRatio;
  const viewH = baseHeight;
  const hexPoints = (cx, cy, size) => {
    const r = size / 2;
    const angles = [0, 60, 120, 180, 240, 300];
    return angles.map((a) => {
      const rad = a * Math.PI / 180;
      const x = cx + r * Math.cos(rad);
      const y = cy + r * Math.sin(rad);
      return `${x},${y}`;
    }).join(" ");
  };
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: "nhs-product-card__graphic",
      viewBox: `0 0 ${viewW} ${viewH}`,
      preserveAspectRatio: "xMidYMid slice",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pc-grad-aqua-green",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ jsx2("stop", { offset: "0", stopColor: "rgb(0, 163, 151)" }),
                /* @__PURE__ */ jsx2("stop", { offset: "1", stopColor: "rgb(11, 148, 71)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pc-grad-purple",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ jsx2("stop", { offset: "0", stopColor: "rgb(176, 161, 201)" }),
                /* @__PURE__ */ jsx2("stop", { offset: "1", stopColor: "rgb(198, 189, 216)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pc-grad-blue",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ jsx2("stop", { offset: "0", stopColor: "rgb(0, 94, 184)" }),
                /* @__PURE__ */ jsx2("stop", { offset: "1", stopColor: "rgb(65, 131, 196)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pc-grad-grey",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ jsx2("stop", { offset: "0", stopColor: "rgb(76, 98, 114)" }),
                /* @__PURE__ */ jsx2("stop", { offset: "1", stopColor: "rgb(174, 184, 192)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "pc-grad-azure",
              x1: "0",
              y1: "0",
              x2: "1",
              y2: "1",
              gradientUnits: "objectBoundingBox",
              children: [
                /* @__PURE__ */ jsx2("stop", { offset: "0", stopColor: "rgb(0, 122, 204)" }),
                /* @__PURE__ */ jsx2("stop", { offset: "1", stopColor: "rgb(103, 192, 229)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "pc-shadow-soft",
              x: "-50%",
              y: "-50%",
              width: "200%",
              height: "200%",
              children: [
                /* @__PURE__ */ jsx2("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "2" }),
                /* @__PURE__ */ jsx2("feOffset", { dx: "0", dy: "2", result: "offsetblur" }),
                /* @__PURE__ */ jsx2("feComponentTransfer", { children: /* @__PURE__ */ jsx2("feFuncA", { type: "linear", slope: "0.2" }) }),
                /* @__PURE__ */ jsxs("feMerge", { children: [
                  /* @__PURE__ */ jsx2("feMergeNode", {}),
                  /* @__PURE__ */ jsx2("feMergeNode", { in: "SourceGraphic" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "filter",
            {
              id: "pc-shadow-strong",
              x: "-50%",
              y: "-50%",
              width: "200%",
              height: "200%",
              children: [
                /* @__PURE__ */ jsx2("feGaussianBlur", { in: "SourceAlpha", stdDeviation: "4" }),
                /* @__PURE__ */ jsx2("feOffset", { dx: "0", dy: "4", result: "offsetblur" }),
                /* @__PURE__ */ jsx2("feComponentTransfer", { children: /* @__PURE__ */ jsx2("feFuncA", { type: "linear", slope: "0.3" }) }),
                /* @__PURE__ */ jsxs("feMerge", { children: [
                  /* @__PURE__ */ jsx2("feMergeNode", {}),
                  /* @__PURE__ */ jsx2("feMergeNode", { in: "SourceGraphic" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx2("g", { style: { mixBlendMode: "multiply" }, children: (() => {
          if (shapes.length < 2) return null;
          const candidates = shapes.map((s) => {
            var _a, _b, _c, _d;
            const cx = s.x / 100 * viewW;
            const cy = s.y / 100 * viewH;
            if (s.kind === "circle") {
              const r = ((_a = s.size) != null ? _a : 40) / 2;
              const angles = [0, 45, 90, 135, 180, 225, 270, 315];
              return angles.map((deg) => {
                const rad = deg * Math.PI / 180;
                return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
              });
            } else if (s.kind === "rect") {
              const w = (_b = s.width) != null ? _b : 60;
              const h = (_c = s.height) != null ? _c : 40;
              return [
                [cx - w / 2, cy - h / 2],
                [cx + w / 2, cy - h / 2],
                [cx + w / 2, cy + h / 2],
                [cx - w / 2, cy + h / 2]
              ];
            } else {
              const size = (_d = s.size) != null ? _d : 40;
              const r = size / 2;
              const angles = [0, 60, 120, 180, 240, 300];
              return angles.map((deg) => {
                const rad = deg * Math.PI / 180;
                return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
              });
            }
          });
          const k = 1;
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
          return pairs.map(([i, j]) => {
            const Ai = candidates[i];
            const Bj = candidates[j];
            let best = null;
            for (const p of Ai) {
              for (const q of Bj) {
                const dx = p[0] - q[0];
                const dy = p[1] - q[1];
                const d2 = dx * dx + dy * dy;
                if (!best || d2 < best.d2) {
                  best = { p, q, d2 };
                }
              }
            }
            if (!best) return null;
            return /* @__PURE__ */ jsx2(
              "line",
              {
                x1: best.p[0],
                y1: best.p[1],
                x2: best.q[0],
                y2: best.q[1],
                stroke: "rgb(158, 171, 181)",
                strokeWidth: "0.5",
                strokeMiterlimit: "0.5"
              },
              `connector-${i}-${j}`
            );
          });
        })() }),
        shapes.map((shape, idx) => {
          const fillClass = `pc-grad-${shape.gradient}`;
          const filter = shape.shadow === "soft" ? "url(#pc-shadow-soft)" : shape.shadow === "strong" ? "url(#pc-shadow-strong)" : void 0;
          const x = shape.x / 100 * viewW;
          const y = shape.y / 100 * viewH;
          if (shape.kind === "rect") {
            const w = shape.width || 60;
            const h = shape.height || 40;
            return /* @__PURE__ */ jsx2(
              "rect",
              {
                className: fillClass,
                x: x - w / 2,
                y: y - h / 2,
                width: w,
                height: h,
                transform: `rotate(${shape.rotate || 0} ${x} ${y})`,
                filter
              },
              idx
            );
          } else if (shape.kind === "circle") {
            const r = (shape.size || 40) / 2;
            return /* @__PURE__ */ jsx2(
              "circle",
              {
                className: fillClass,
                cx: x,
                cy: y,
                r,
                filter
              },
              idx
            );
          } else if (shape.kind === "hex") {
            const size = shape.size || 40;
            return /* @__PURE__ */ jsx2(
              "polygon",
              {
                className: fillClass,
                points: hexPoints(x, y, size),
                transform: `rotate(${shape.rotate || 0} ${x} ${y})`,
                filter
              },
              idx
            );
          }
          return null;
        })
      ]
    }
  );
};
var ProductCard = ({
  title,
  description,
  image,
  layout = "vertical",
  buttons = [],
  badge,
  theme = "blue",
  className,
  style,
  onClick,
  href,
  headingLevel = 3,
  footer,
  elevated = true,
  imageAspectRatio = 1.5
}) => {
  const shapes = React2.useMemo(() => {
    var _a, _b;
    if ((image == null ? void 0 : image.type) === "graphic") {
      if (image.shapes) return image.shapes;
      const seed = (_a = image.seed) != null ? _a : 0;
      const imgTheme = (_b = image.theme) != null ? _b : theme;
      return generateVectorShapes(seed, imgTheme);
    }
    return [];
  }, [image, theme]);
  const cardClasses = [
    "nhs-product-card",
    `nhs-product-card--${layout}`,
    `nhs-product-card--theme-${theme}`,
    elevated && "nhs-product-card--elevated",
    (onClick || href) && "nhs-product-card--clickable",
    className
  ].filter(Boolean).join(" ");
  const handleCardClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (href && !e.defaultPrevented) {
      window.location.href = href;
    }
  };
  const handleKeyDown = (e) => {
    if ((onClick || href) && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      if (onClick) {
        onClick(e);
      } else if (href) {
        window.location.href = href;
      }
    }
  };
  const renderImage = () => {
    if (!image) return null;
    const imageClasses = [
      "nhs-product-card__image",
      image.type === "graphic" && "nhs-product-card__image--graphic"
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsx2(
      "div",
      {
        className: imageClasses,
        style: { aspectRatio: imageAspectRatio.toString() },
        children: image.type === "photo" && image.src ? /* @__PURE__ */ jsx2("img", { src: image.src, alt: image.alt || "" }) : image.type === "graphic" ? /* @__PURE__ */ jsx2(VectorGraphic, { shapes, aspectRatio: imageAspectRatio }) : null
      }
    );
  };
  const renderButtons = () => {
    if (!buttons.length) return null;
    return /* @__PURE__ */ jsx2("div", { className: "nhs-product-card__actions", children: buttons.map((button, idx) => {
      const buttonClasses = [
        "nhs-product-card__button",
        `nhs-product-card__button--${button.variant || "primary"}`,
        button.disabled && "nhs-product-card__button--disabled"
      ].filter(Boolean).join(" ");
      if (button.href) {
        return /* @__PURE__ */ jsx2(
          "a",
          {
            href: button.href,
            className: buttonClasses,
            "aria-label": button.ariaLabel,
            onClick: (e) => {
              if (button.disabled) {
                e.preventDefault();
                return;
              }
              if (button.onClick) {
                e.stopPropagation();
                button.onClick(e);
              }
            },
            children: button.label
          },
          idx
        );
      }
      return /* @__PURE__ */ jsx2(
        "button",
        {
          type: "button",
          className: buttonClasses,
          disabled: button.disabled,
          "aria-label": button.ariaLabel,
          onClick: (e) => {
            if (button.onClick) {
              e.stopPropagation();
              button.onClick(e);
            }
          },
          children: button.label
        },
        idx
      );
    }) });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cardClasses,
      style,
      onClick: onClick || href ? handleCardClick : void 0,
      onKeyDown: onClick || href ? handleKeyDown : void 0,
      role: onClick || href ? "button" : void 0,
      tabIndex: onClick || href ? 0 : void 0,
      children: [
        badge && /* @__PURE__ */ jsx2("div", { className: "nhs-product-card__badge", children: badge }),
        renderImage(),
        /* @__PURE__ */ jsxs("div", { className: "nhs-product-card__content", children: [
          /* @__PURE__ */ jsx2(Heading, { level: headingLevel, className: "nhs-product-card__title", children: title }),
          /* @__PURE__ */ jsx2("p", { className: "nhs-product-card__description", children: description }),
          renderButtons(),
          footer && /* @__PURE__ */ jsx2("div", { className: "nhs-product-card__footer", children: footer })
        ] })
      ]
    }
  );
};
export {
  ProductCard,
  ProductCardThemeEnum
};
//# sourceMappingURL=index.js.map
