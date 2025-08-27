var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      function classNames5() {
        var classes = "";
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (arg) {
            classes = appendClass(classes, parseValue(arg));
          }
        }
        return classes;
      }
      function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") {
          return arg;
        }
        if (typeof arg !== "object") {
          return "";
        }
        if (Array.isArray(arg)) {
          return classNames5.apply(null, arg);
        }
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
          return arg.toString();
        }
        var classes = "";
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes = appendClass(classes, key);
          }
        }
        return classes;
      }
      function appendClass(value, newClass) {
        if (!newClass) {
          return value;
        }
        if (value) {
          return value + " " + newClass;
        }
        return value + newClass;
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames5.default = classNames5;
        module.exports = classNames5;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames5;
        });
      } else {
        window.classNames = classNames5;
      }
    })();
  }
});

// src/components/DataVisualisation/primitives/ChartContainer.tsx
import * as React from "react";

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// src/components/DataVisualisation/primitives/ChartContainer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var ChartContainer = ({
  title,
  description,
  source,
  children,
  width = "100%",
  height = 320,
  className,
  id,
  tabularData,
  showTableToggle,
  onToggleTable,
  initiallyShowTable = false
}) => {
  const figureId = React.useId();
  const resolvedId = id || figureId;
  const descId = description ? `${resolvedId}-desc` : void 0;
  const sourceId = source ? `${resolvedId}-src` : void 0;
  const [showTable, setShowTable] = React.useState(initiallyShowTable);
  const handleToggle = React.useCallback(() => {
    setShowTable((s) => !s);
    onToggleTable == null ? void 0 : onToggleTable();
  }, [onToggleTable]);
  return /* @__PURE__ */ jsxs(
    "figure",
    {
      id: resolvedId,
      className: clsx_default("fdp-chart", className),
      style: { width },
      "aria-labelledby": `${resolvedId}-title`,
      "aria-describedby": clsx_default(descId, sourceId),
      children: [
        /* @__PURE__ */ jsxs("header", { className: "fdp-chart__header", children: [
          /* @__PURE__ */ jsx("h3", { id: `${resolvedId}-title`, className: "fdp-chart__title", children: title }),
          showTableToggle && /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "fdp-chart__toggle",
              "aria-expanded": showTable,
              onClick: handleToggle,
              children: showTable ? "Hide table" : "Show table"
            }
          )
        ] }),
        description && /* @__PURE__ */ jsx("p", { id: descId, className: "fdp-chart__description", children: description }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "fdp-chart__viz",
            style: { height },
            role: "group",
            "aria-label": title,
            children
          }
        ),
        (source || tabularData) && /* @__PURE__ */ jsxs("figcaption", { className: "fdp-chart__caption", children: [
          source && /* @__PURE__ */ jsxs("small", { id: sourceId, className: "fdp-chart__source", children: [
            "Source: ",
            source
          ] }),
          showTable && tabularData
        ] })
      ]
    }
  );
};
var ChartContainer_default = ChartContainer;

// src/components/DataVisualisation/charts/LineChart.tsx
import * as React10 from "react";

// node_modules/d3-array/src/ascending.js
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}

// node_modules/d3-array/src/descending.js
function descending(a, b) {
  return a == null || b == null ? NaN : b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
}

// node_modules/d3-array/src/bisector.js
function bisector(f) {
  let compare1, compare2, delta;
  if (f.length !== 2) {
    compare1 = ascending;
    compare2 = (d, x2) => ascending(f(d), x2);
    delta = (d, x2) => f(d) - x2;
  } else {
    compare1 = f === ascending || f === descending ? f : zero;
    compare2 = f;
    delta = f;
  }
  function left(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) < 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x2, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x2, x2) !== 0) return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x2) <= 0) lo = mid + 1;
        else hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x2, lo = 0, hi = a.length) {
    const i = left(a, x2, lo, hi - 1);
    return i > lo && delta(a[i - 1], x2) > -delta(a[i], x2) ? i - 1 : i;
  }
  return { left, center, right };
}
function zero() {
  return 0;
}

// node_modules/d3-array/src/number.js
function number(x2) {
  return x2 === null ? NaN : +x2;
}

// node_modules/d3-array/src/bisect.js
var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
var bisectCenter = bisector(number).center;
var bisect_default = bisectRight;

// node_modules/d3-array/src/extent.js
function extent(values, valueof) {
  let min;
  let max;
  if (valueof === void 0) {
    for (const value of values) {
      if (value != null) {
        if (min === void 0) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === void 0) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
}

// node_modules/internmap/src/index.js
var InternMap = class extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null) for (const [key2, value] of entries) this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
};
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}

// node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
function tickSpec(start, stop, count) {
  const step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log10(step)), error = step / Math.pow(10, power), factor = error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1;
  let i1, i2, inc;
  if (power < 0) {
    inc = Math.pow(10, -power) / factor;
    i1 = Math.round(start * inc);
    i2 = Math.round(stop * inc);
    if (i1 / inc < start) ++i1;
    if (i2 / inc > stop) --i2;
    inc = -inc;
  } else {
    inc = Math.pow(10, power) * factor;
    i1 = Math.round(start / inc);
    i2 = Math.round(stop / inc);
    if (i1 * inc < start) ++i1;
    if (i2 * inc > stop) --i2;
  }
  if (i2 < i1 && 0.5 <= count && count < 2) return tickSpec(start, stop, count * 2);
  return [i1, i2, inc];
}
function ticks(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  if (!(count > 0)) return [];
  if (start === stop) return [start];
  const reverse = stop < start, [i1, i2, inc] = reverse ? tickSpec(stop, start, count) : tickSpec(start, stop, count);
  if (!(i2 >= i1)) return [];
  const n = i2 - i1 + 1, ticks2 = new Array(n);
  if (reverse) {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i2 - i) * inc;
  } else {
    if (inc < 0) for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) / -inc;
    else for (let i = 0; i < n; ++i) ticks2[i] = (i1 + i) * inc;
  }
  return ticks2;
}
function tickIncrement(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  return tickSpec(start, stop, count)[2];
}
function tickStep(start, stop, count) {
  stop = +stop, start = +start, count = +count;
  const reverse = stop < start, inc = reverse ? tickIncrement(stop, start, count) : tickIncrement(start, stop, count);
  return (reverse ? -1 : 1) * (inc < 0 ? 1 / -inc : inc);
}

// node_modules/d3-array/src/range.js
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start + i * step;
  }
  return range2;
}

// node_modules/d3-scale/src/init.js
function initRange(domain, range2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range2).domain(domain);
      break;
  }
  return this;
}

// node_modules/d3-scale/src/ordinal.js
var implicit = Symbol("implicit");
function ordinal() {
  var index = new InternMap(), domain = [], range2 = [], unknown = implicit;
  function scale(d) {
    let i = index.get(d);
    if (i === void 0) {
      if (unknown !== implicit) return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range2[i % range2.length];
  }
  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value)) continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), scale) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range2).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}

// node_modules/d3-scale/src/band.js
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}

// node_modules/d3-color/src/define.js
function define_default(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}

// node_modules/d3-color/src/color.js
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*";
var reN = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var reP = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var reHex = /^#([0-9a-f]{3,8})$/;
var reRgbInteger = new RegExp(`^rgb\\(${reI},${reI},${reI}\\)$`);
var reRgbPercent = new RegExp(`^rgb\\(${reP},${reP},${reP}\\)$`);
var reRgbaInteger = new RegExp(`^rgba\\(${reI},${reI},${reI},${reN}\\)$`);
var reRgbaPercent = new RegExp(`^rgba\\(${reP},${reP},${reP},${reN}\\)$`);
var reHslPercent = new RegExp(`^hsl\\(${reN},${reP},${reP}\\)$`);
var reHslaPercent = new RegExp(`^hsla\\(${reN},${reP},${reP},${reN}\\)$`);
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define_default(Color, color, {
  copy(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHex8: color_formatHex8,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHex8() {
  return this.rgb().formatHex8();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r2, g, b, a) {
  if (a <= 0) r2 = g = b = NaN;
  return new Rgb(r2, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb(r2, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r2) : new Rgb(r2, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r2, g, b, opacity) {
  this.r = +r2;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define_default(Rgb, rgb, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Rgb(clampi(this.r), clampi(this.g), clampi(this.b), clampa(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatHex8: rgb_formatHex8,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}`;
}
function rgb_formatHex8() {
  return `#${hex(this.r)}${hex(this.g)}${hex(this.b)}${hex((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function rgb_formatRgb() {
  const a = clampa(this.opacity);
  return `${a === 1 ? "rgb(" : "rgba("}${clampi(this.r)}, ${clampi(this.g)}, ${clampi(this.b)}${a === 1 ? ")" : `, ${a})`}`;
}
function clampa(opacity) {
  return isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity));
}
function clampi(value) {
  return Math.max(0, Math.min(255, Math.round(value) || 0));
}
function hex(value) {
  value = clampi(value);
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl();
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r2 = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r2, g, b), max = Math.max(r2, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r2 === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r2) / s + 2;
    else h = (r2 - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define_default(Hsl, hsl, extend(Color, {
  brighter(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  clamp() {
    return new Hsl(clamph(this.h), clampt(this.s), clampt(this.l), clampa(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl() {
    const a = clampa(this.opacity);
    return `${a === 1 ? "hsl(" : "hsla("}${clamph(this.h)}, ${clampt(this.s) * 100}%, ${clampt(this.l) * 100}%${a === 1 ? ")" : `, ${a})`}`;
  }
}));
function clamph(value) {
  value = (value || 0) % 360;
  return value < 0 ? value + 360 : value;
}
function clampt(value) {
  return Math.max(0, Math.min(1, value || 0));
}
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}

// node_modules/d3-interpolate/src/basis.js
function basis(t12, v0, v1, v2, v3) {
  var t2 = t12 * t12, t3 = t2 * t12;
  return ((1 - 3 * t12 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t12 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n), v1 = values[i], v2 = values[i + 1], v0 = i > 0 ? values[i - 1] : 2 * v1 - v2, v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n), v0 = values[(i + n - 1) % n], v1 = values[i % n], v2 = values[(i + 1) % n], v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// node_modules/d3-interpolate/src/constant.js
var constant_default = (x2) => () => x2;

// node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y2) {
  return a = Math.pow(a, y2), b = Math.pow(b, y2) - a, y2 = 1 / y2, function(t) {
    return Math.pow(a + t * b, y2);
  };
}
function gamma(y2) {
  return (y2 = +y2) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y2) : constant_default(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default(isNaN(a) ? b : a);
}

// node_modules/d3-interpolate/src/rgb.js
var rgb_default = function rgbGamma(y2) {
  var color2 = gamma(y2);
  function rgb2(start, end) {
    var r2 = color2((start = rgb(start)).r, (end = rgb(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r2(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length, r2 = new Array(n), g = new Array(n), b = new Array(n), i, color2;
    for (i = 0; i < n; ++i) {
      color2 = rgb(colors[i]);
      r2[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r2 = spline(r2);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r2(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + "";
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}

// node_modules/d3-interpolate/src/array.js
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x2 = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i) x2[i] = value_default(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x2[i](t);
    return c;
  };
}

// node_modules/d3-interpolate/src/date.js
function date_default(a, b) {
  var d = /* @__PURE__ */ new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}

// node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}

// node_modules/d3-interpolate/src/object.js
function object_default(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value_default(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

// node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, "g");
function zero2(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string_default(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: number_default(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero2(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}

// node_modules/d3-interpolate/src/value.js
function value_default(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant_default(b) : (t === "number" ? number_default : t === "string" ? (c = color(b)) ? (b = c, rgb_default) : string_default : b instanceof color ? rgb_default : b instanceof Date ? date_default : isNumberArray(b) ? numberArray_default : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object_default : number_default)(a, b);
}

// node_modules/d3-interpolate/src/round.js
function round_default(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}

// node_modules/d3-scale/src/constant.js
function constants(x2) {
  return function() {
    return x2;
  };
}

// node_modules/d3-scale/src/number.js
function number2(x2) {
  return +x2;
}

// node_modules/d3-scale/src/continuous.js
var unit = [0, 1];
function identity(x2) {
  return x2;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x2) {
    return (x2 - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x2) {
    return Math.max(a, Math.min(b, x2));
  };
}
function bimap(domain, range2, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x2) {
    return r0(d0(x2));
  };
}
function polymap(domain, range2, interpolate) {
  var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r2 = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range2 = range2.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r2[i] = interpolate(range2[i], range2[i + 1]);
  }
  return function(x2) {
    var i2 = bisect_default(domain, x2, 1, j) - 1;
    return r2[i2](d[i2](x2));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range2 = unit, interpolate = value_default, transform, untransform, unknown, clamp = identity, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range2.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x2) {
    return x2 == null || isNaN(x2 = +x2) ? unknown : (output || (output = piecewise(domain.map(transform), range2, interpolate)))(transform(clamp(x2)));
  }
  scale.invert = function(y2) {
    return clamp(untransform((input || (input = piecewise(range2, domain.map(transform), number_default)))(y2)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number2), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return range2 = Array.from(_), interpolate = round_default, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity, identity);
}

// node_modules/d3-format/src/formatDecimal.js
function formatDecimal_default(x2) {
  return Math.abs(x2 = Math.round(x2)) >= 1e21 ? x2.toLocaleString("en").replace(/,/g, "") : x2.toString(10);
}
function formatDecimalParts(x2, p) {
  if ((i = (x2 = p ? x2.toExponential(p - 1) : x2.toExponential()).indexOf("e")) < 0) return null;
  var i, coefficient = x2.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x2.slice(i + 1)
  ];
}

// node_modules/d3-format/src/exponent.js
function exponent_default(x2) {
  return x2 = formatDecimalParts(Math.abs(x2)), x2 ? x2[1] : NaN;
}

// node_modules/d3-format/src/formatGroup.js
function formatGroup_default(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}

// node_modules/d3-format/src/formatNumerals.js
function formatNumerals_default(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}

// node_modules/d3-format/src/formatSpecifier.js
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};

// node_modules/d3-format/src/formatTrim.js
function formatTrim_default(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".":
        i0 = i1 = i;
        break;
      case "0":
        if (i0 === 0) i0 = i;
        i1 = i;
        break;
      default:
        if (!+s[i]) break out;
        if (i0 > 0) i0 = 0;
        break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}

// node_modules/d3-format/src/formatPrefixAuto.js
var prefixExponent;
function formatPrefixAuto_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1], i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x2, Math.max(0, p + i - 1))[0];
}

// node_modules/d3-format/src/formatRounded.js
function formatRounded_default(x2, p) {
  var d = formatDecimalParts(x2, p);
  if (!d) return x2 + "";
  var coefficient = d[0], exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1) : coefficient + new Array(exponent - coefficient.length + 2).join("0");
}

// node_modules/d3-format/src/formatTypes.js
var formatTypes_default = {
  "%": (x2, p) => (x2 * 100).toFixed(p),
  "b": (x2) => Math.round(x2).toString(2),
  "c": (x2) => x2 + "",
  "d": formatDecimal_default,
  "e": (x2, p) => x2.toExponential(p),
  "f": (x2, p) => x2.toFixed(p),
  "g": (x2, p) => x2.toPrecision(p),
  "o": (x2) => Math.round(x2).toString(8),
  "p": (x2, p) => formatRounded_default(x2 * 100, p),
  "r": formatRounded_default,
  "s": formatPrefixAuto_default,
  "X": (x2) => Math.round(x2).toString(16).toUpperCase(),
  "x": (x2) => Math.round(x2).toString(16)
};

// node_modules/d3-format/src/identity.js
function identity_default(x2) {
  return x2;
}

// node_modules/d3-format/src/locale.js
var map = Array.prototype.map;
var prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function locale_default(locale3) {
  var group = locale3.grouping === void 0 || locale3.thousands === void 0 ? identity_default : formatGroup_default(map.call(locale3.grouping, Number), locale3.thousands + ""), currencyPrefix = locale3.currency === void 0 ? "" : locale3.currency[0] + "", currencySuffix = locale3.currency === void 0 ? "" : locale3.currency[1] + "", decimal = locale3.decimal === void 0 ? "." : locale3.decimal + "", numerals = locale3.numerals === void 0 ? identity_default : formatNumerals_default(map.call(locale3.numerals, String)), percent = locale3.percent === void 0 ? "%" : locale3.percent + "", minus = locale3.minus === void 0 ? "\u2212" : locale3.minus + "", nan = locale3.nan === void 0 ? "NaN" : locale3.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign2 = specifier.sign, symbol = specifier.symbol, zero3 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n") comma = true, type = "g";
    else if (!formatTypes_default[type]) precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero3 || fill === "0" && align === "=") zero3 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes_default[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim) value = formatTrim_default(value);
        if (valueNegative && +value === 0 && sign2 !== "+") valueNegative = false;
        valuePrefix = (valueNegative ? sign2 === "(" ? sign2 : minus : sign2 === "-" || sign2 === "(" ? "" : sign2) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign2 === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero3) value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero3) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}

// node_modules/d3-format/src/defaultLocale.js
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = locale_default(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}

// node_modules/d3-format/src/precisionFixed.js
function precisionFixed_default(step) {
  return Math.max(0, -exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionPrefix.js
function precisionPrefix_default(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent_default(value) / 3))) * 3 - exponent_default(Math.abs(step)));
}

// node_modules/d3-format/src/precisionRound.js
function precisionRound_default(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent_default(max) - exponent_default(step)) + 1;
}

// node_modules/d3-scale/src/tickFormat.js
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix_default(step, value))) specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound_default(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed_default(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}

// node_modules/d3-scale/src/linear.js
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null) count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear2() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear2());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}

// node_modules/d3-scale/src/nice.js
function nice(domain, interval) {
  domain = domain.slice();
  var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], t;
  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }
  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
}

// node_modules/d3-time/src/interval.js
var t0 = /* @__PURE__ */ new Date();
var t1 = /* @__PURE__ */ new Date();
function timeInterval(floori, offseti, count, field) {
  function interval(date2) {
    return floori(date2 = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+date2)), date2;
  }
  interval.floor = (date2) => {
    return floori(date2 = /* @__PURE__ */ new Date(+date2)), date2;
  };
  interval.ceil = (date2) => {
    return floori(date2 = new Date(date2 - 1)), offseti(date2, 1), floori(date2), date2;
  };
  interval.round = (date2) => {
    const d0 = interval(date2), d1 = interval.ceil(date2);
    return date2 - d0 < d1 - date2 ? d0 : d1;
  };
  interval.offset = (date2, step) => {
    return offseti(date2 = /* @__PURE__ */ new Date(+date2), step == null ? 1 : Math.floor(step)), date2;
  };
  interval.range = (start, stop, step) => {
    const range2 = [];
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range2;
    let previous;
    do
      range2.push(previous = /* @__PURE__ */ new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range2;
  };
  interval.filter = (test) => {
    return timeInterval((date2) => {
      if (date2 >= date2) while (floori(date2), !test(date2)) date2.setTime(date2 - 1);
    }, (date2, step) => {
      if (date2 >= date2) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date2, -1), !test(date2)) {
          }
        }
        else while (--step >= 0) {
          while (offseti(date2, 1), !test(date2)) {
          }
        }
      }
    });
  };
  if (count) {
    interval.count = (start, end) => {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };
    interval.every = (step) => {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null : !(step > 1) ? interval : interval.filter(field ? (d) => field(d) % step === 0 : (d) => interval.count(0, d) % step === 0);
    };
  }
  return interval;
}

// node_modules/d3-time/src/millisecond.js
var millisecond = timeInterval(() => {
}, (date2, step) => {
  date2.setTime(+date2 + step);
}, (start, end) => {
  return end - start;
});
millisecond.every = (k) => {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return timeInterval((date2) => {
    date2.setTime(Math.floor(date2 / k) * k);
  }, (date2, step) => {
    date2.setTime(+date2 + step * k);
  }, (start, end) => {
    return (end - start) / k;
  });
};
var milliseconds = millisecond.range;

// node_modules/d3-time/src/duration.js
var durationSecond = 1e3;
var durationMinute = durationSecond * 60;
var durationHour = durationMinute * 60;
var durationDay = durationHour * 24;
var durationWeek = durationDay * 7;
var durationMonth = durationDay * 30;
var durationYear = durationDay * 365;

// node_modules/d3-time/src/second.js
var second = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds());
}, (date2, step) => {
  date2.setTime(+date2 + step * durationSecond);
}, (start, end) => {
  return (end - start) / durationSecond;
}, (date2) => {
  return date2.getUTCSeconds();
});
var seconds = second.range;

// node_modules/d3-time/src/minute.js
var timeMinute = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date2) => {
  return date2.getMinutes();
});
var timeMinutes = timeMinute.range;
var utcMinute = timeInterval((date2) => {
  date2.setUTCSeconds(0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationMinute);
}, (start, end) => {
  return (end - start) / durationMinute;
}, (date2) => {
  return date2.getUTCMinutes();
});
var utcMinutes = utcMinute.range;

// node_modules/d3-time/src/hour.js
var timeHour = timeInterval((date2) => {
  date2.setTime(date2 - date2.getMilliseconds() - date2.getSeconds() * durationSecond - date2.getMinutes() * durationMinute);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date2) => {
  return date2.getHours();
});
var timeHours = timeHour.range;
var utcHour = timeInterval((date2) => {
  date2.setUTCMinutes(0, 0, 0);
}, (date2, step) => {
  date2.setTime(+date2 + step * durationHour);
}, (start, end) => {
  return (end - start) / durationHour;
}, (date2) => {
  return date2.getUTCHours();
});
var utcHours = utcHour.range;

// node_modules/d3-time/src/day.js
var timeDay = timeInterval(
  (date2) => date2.setHours(0, 0, 0, 0),
  (date2, step) => date2.setDate(date2.getDate() + step),
  (start, end) => (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationDay,
  (date2) => date2.getDate() - 1
);
var timeDays = timeDay.range;
var utcDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date2) => {
  return date2.getUTCDate() - 1;
});
var utcDays = utcDay.range;
var unixDay = timeInterval((date2) => {
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCDate(date2.getUTCDate() + step);
}, (start, end) => {
  return (end - start) / durationDay;
}, (date2) => {
  return Math.floor(date2 / durationDay);
});
var unixDays = unixDay.range;

// node_modules/d3-time/src/week.js
function timeWeekday(i) {
  return timeInterval((date2) => {
    date2.setDate(date2.getDate() - (date2.getDay() + 7 - i) % 7);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setDate(date2.getDate() + step * 7);
  }, (start, end) => {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * durationMinute) / durationWeek;
  });
}
var timeSunday = timeWeekday(0);
var timeMonday = timeWeekday(1);
var timeTuesday = timeWeekday(2);
var timeWednesday = timeWeekday(3);
var timeThursday = timeWeekday(4);
var timeFriday = timeWeekday(5);
var timeSaturday = timeWeekday(6);
var timeSundays = timeSunday.range;
var timeMondays = timeMonday.range;
var timeTuesdays = timeTuesday.range;
var timeWednesdays = timeWednesday.range;
var timeThursdays = timeThursday.range;
var timeFridays = timeFriday.range;
var timeSaturdays = timeSaturday.range;
function utcWeekday(i) {
  return timeInterval((date2) => {
    date2.setUTCDate(date2.getUTCDate() - (date2.getUTCDay() + 7 - i) % 7);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCDate(date2.getUTCDate() + step * 7);
  }, (start, end) => {
    return (end - start) / durationWeek;
  });
}
var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);
var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;

// node_modules/d3-time/src/month.js
var timeMonth = timeInterval((date2) => {
  date2.setDate(1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setMonth(date2.getMonth() + step);
}, (start, end) => {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, (date2) => {
  return date2.getMonth();
});
var timeMonths = timeMonth.range;
var utcMonth = timeInterval((date2) => {
  date2.setUTCDate(1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCMonth(date2.getUTCMonth() + step);
}, (start, end) => {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, (date2) => {
  return date2.getUTCMonth();
});
var utcMonths = utcMonth.range;

// node_modules/d3-time/src/year.js
var timeYear = timeInterval((date2) => {
  date2.setMonth(0, 1);
  date2.setHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setFullYear(date2.getFullYear() + step);
}, (start, end) => {
  return end.getFullYear() - start.getFullYear();
}, (date2) => {
  return date2.getFullYear();
});
timeYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date2) => {
    date2.setFullYear(Math.floor(date2.getFullYear() / k) * k);
    date2.setMonth(0, 1);
    date2.setHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setFullYear(date2.getFullYear() + step * k);
  });
};
var timeYears = timeYear.range;
var utcYear = timeInterval((date2) => {
  date2.setUTCMonth(0, 1);
  date2.setUTCHours(0, 0, 0, 0);
}, (date2, step) => {
  date2.setUTCFullYear(date2.getUTCFullYear() + step);
}, (start, end) => {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, (date2) => {
  return date2.getUTCFullYear();
});
utcYear.every = (k) => {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : timeInterval((date2) => {
    date2.setUTCFullYear(Math.floor(date2.getUTCFullYear() / k) * k);
    date2.setUTCMonth(0, 1);
    date2.setUTCHours(0, 0, 0, 0);
  }, (date2, step) => {
    date2.setUTCFullYear(date2.getUTCFullYear() + step * k);
  });
};
var utcYears = utcYear.range;

// node_modules/d3-time/src/ticks.js
function ticker(year, month, week, day, hour, minute) {
  const tickIntervals = [
    [second, 1, durationSecond],
    [second, 5, 5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute, 1, durationMinute],
    [minute, 5, 5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [hour, 1, durationHour],
    [hour, 3, 3 * durationHour],
    [hour, 6, 6 * durationHour],
    [hour, 12, 12 * durationHour],
    [day, 1, durationDay],
    [day, 2, 2 * durationDay],
    [week, 1, durationWeek],
    [month, 1, durationMonth],
    [month, 3, 3 * durationMonth],
    [year, 1, durationYear]
  ];
  function ticks2(start, stop, count) {
    const reverse = stop < start;
    if (reverse) [start, stop] = [stop, start];
    const interval = count && typeof count.range === "function" ? count : tickInterval(start, stop, count);
    const ticks3 = interval ? interval.range(start, +stop + 1) : [];
    return reverse ? ticks3.reverse() : ticks3;
  }
  function tickInterval(start, stop, count) {
    const target = Math.abs(stop - start) / count;
    const i = bisector(([, , step2]) => step2).right(tickIntervals, target);
    if (i === tickIntervals.length) return year.every(tickStep(start / durationYear, stop / durationYear, count));
    if (i === 0) return millisecond.every(Math.max(tickStep(start, stop, count), 1));
    const [t, step] = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
    return t.every(step);
  }
  return [ticks2, tickInterval];
}
var [utcTicks, utcTickInterval] = ticker(utcYear, utcMonth, utcSunday, unixDay, utcHour, utcMinute);
var [timeTicks, timeTickInterval] = ticker(timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute);

// node_modules/d3-time-format/src/locale.js
function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date2.setFullYear(d.y);
    return date2;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}
function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date2 = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date2.setUTCFullYear(d.y);
    return date2;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}
function newDate(y2, m, d) {
  return { y: y2, m, d, H: 0, M: 0, S: 0, L: 0 };
}
function formatLocale(locale3) {
  var locale_dateTime = locale3.dateTime, locale_date = locale3.date, locale_time = locale3.time, locale_periods = locale3.periods, locale_weekdays = locale3.days, locale_shortWeekdays = locale3.shortDays, locale_months = locale3.months, locale_shortMonths = locale3.shortMonths;
  var periodRe = formatRe(locale_periods), periodLookup = formatLookup(locale_periods), weekdayRe = formatRe(locale_weekdays), weekdayLookup = formatLookup(locale_weekdays), shortWeekdayRe = formatRe(locale_shortWeekdays), shortWeekdayLookup = formatLookup(locale_shortWeekdays), monthRe = formatRe(locale_months), monthLookup = formatLookup(locale_months), shortMonthRe = formatRe(locale_shortMonths), shortMonthLookup = formatLookup(locale_shortMonths);
  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "g": formatYearISO,
    "G": formatFullYearISO,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };
  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "g": formatUTCYearISO,
    "G": formatUTCFullYearISO,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };
  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "g": parseYear,
    "G": parseFullYear,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);
  function newFormat(specifier, formats2) {
    return function(date2) {
      var string = [], i = -1, j = 0, n = specifier.length, c, pad2, format2;
      if (!(date2 instanceof Date)) date2 = /* @__PURE__ */ new Date(+date2);
      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad2 = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad2 = c === "e" ? " " : "0";
          if (format2 = formats2[c]) c = format2(date2, pad2);
          string.push(c);
          j = i + 1;
        }
      }
      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }
  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, void 0, 1), i = parseSpecifier(d, specifier, string += "", 0), week, day;
      if (i != string.length) return null;
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1e3 + ("L" in d ? d.L : 0));
      if (Z && !("Z" in d)) d.Z = 0;
      if ("p" in d) d.H = d.H % 12 + d.p * 12;
      if (d.m === void 0) d.m = "q" in d ? d.q : 0;
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? utcMonday.ceil(week) : utcMonday(week);
          week = utcDay.offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? timeMonday.ceil(week) : timeMonday(week);
          week = timeDay.offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }
      return localDate(d);
    };
  }
  function parseSpecifier(d, specifier, string, j) {
    var i = 0, n = specifier.length, m = string.length, c, parse;
    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || (j = parse(d, string, j)) < 0) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }
    return j;
  }
  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
  }
  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }
  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }
  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }
  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }
  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }
  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }
  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }
  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }
  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }
  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }
  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }
  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }
  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }
  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }
  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }
  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() {
        return specifier;
      };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() {
        return specifier;
      };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() {
        return specifier;
      };
      return p;
    }
  };
}
var pads = { "-": "", "_": " ", "0": "0" };
var numberRe = /^\s*\d+/;
var percentRe = /^%/;
var requoteRe = /[\\^$*+?|[\]().{}]/g;
function pad(value, fill, width) {
  var sign2 = value < 0 ? "-" : "", string = (sign2 ? -value : value) + "", length = string.length;
  return sign2 + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}
function requote(s) {
  return s.replace(requoteRe, "\\$&");
}
function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}
function formatLookup(names) {
  return new Map(names.map((name, i) => [name.toLowerCase(), i]));
}
function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}
function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}
function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}
function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}
function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), i + n[0].length) : -1;
}
function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}
function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}
function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}
function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}
function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}
function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}
function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}
function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}
function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}
function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1e3), i + n[0].length) : -1;
}
function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}
function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}
function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}
function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}
function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}
function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}
function formatDayOfYear(d, p) {
  return pad(1 + timeDay.count(timeYear(d), d), p, 3);
}
function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}
function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}
function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}
function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}
function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}
function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}
function formatWeekNumberSunday(d, p) {
  return pad(timeSunday.count(timeYear(d) - 1, d), p, 2);
}
function dISO(d) {
  var day = d.getDay();
  return day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
}
function formatWeekNumberISO(d, p) {
  d = dISO(d);
  return pad(timeThursday.count(timeYear(d), d) + (timeYear(d).getDay() === 4), p, 2);
}
function formatWeekdayNumberSunday(d) {
  return d.getDay();
}
function formatWeekNumberMonday(d, p) {
  return pad(timeMonday.count(timeYear(d) - 1, d), p, 2);
}
function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}
function formatYearISO(d, p) {
  d = dISO(d);
  return pad(d.getFullYear() % 100, p, 2);
}
function formatFullYear(d, p) {
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatFullYearISO(d, p) {
  var day = d.getDay();
  d = day >= 4 || day === 0 ? timeThursday(d) : timeThursday.ceil(d);
  return pad(d.getFullYear() % 1e4, p, 4);
}
function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+")) + pad(z / 60 | 0, "0", 2) + pad(z % 60, "0", 2);
}
function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}
function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}
function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}
function formatUTCDayOfYear(d, p) {
  return pad(1 + utcDay.count(utcYear(d), d), p, 3);
}
function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}
function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}
function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}
function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}
function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}
function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}
function formatUTCWeekNumberSunday(d, p) {
  return pad(utcSunday.count(utcYear(d) - 1, d), p, 2);
}
function UTCdISO(d) {
  var day = d.getUTCDay();
  return day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
}
function formatUTCWeekNumberISO(d, p) {
  d = UTCdISO(d);
  return pad(utcThursday.count(utcYear(d), d) + (utcYear(d).getUTCDay() === 4), p, 2);
}
function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}
function formatUTCWeekNumberMonday(d, p) {
  return pad(utcMonday.count(utcYear(d) - 1, d), p, 2);
}
function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCYearISO(d, p) {
  d = UTCdISO(d);
  return pad(d.getUTCFullYear() % 100, p, 2);
}
function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCFullYearISO(d, p) {
  var day = d.getUTCDay();
  d = day >= 4 || day === 0 ? utcThursday(d) : utcThursday.ceil(d);
  return pad(d.getUTCFullYear() % 1e4, p, 4);
}
function formatUTCZone() {
  return "+0000";
}
function formatLiteralPercent() {
  return "%";
}
function formatUnixTimestamp(d) {
  return +d;
}
function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1e3);
}

// node_modules/d3-time-format/src/defaultLocale.js
var locale2;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;
defaultLocale2({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function defaultLocale2(definition) {
  locale2 = formatLocale(definition);
  timeFormat = locale2.format;
  timeParse = locale2.parse;
  utcFormat = locale2.utcFormat;
  utcParse = locale2.utcParse;
  return locale2;
}

// node_modules/d3-scale/src/time.js
function date(t) {
  return new Date(t);
}
function number3(t) {
  return t instanceof Date ? +t : +/* @__PURE__ */ new Date(+t);
}
function calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2) {
  var scale = continuous(), invert = scale.invert, domain = scale.domain;
  var formatMillisecond = format2(".%L"), formatSecond = format2(":%S"), formatMinute = format2("%I:%M"), formatHour = format2("%I %p"), formatDay = format2("%a %d"), formatWeek = format2("%b %d"), formatMonth = format2("%B"), formatYear2 = format2("%Y");
  function tickFormat2(date2) {
    return (second2(date2) < date2 ? formatMillisecond : minute(date2) < date2 ? formatSecond : hour(date2) < date2 ? formatMinute : day(date2) < date2 ? formatHour : month(date2) < date2 ? week(date2) < date2 ? formatDay : formatWeek : year(date2) < date2 ? formatMonth : formatYear2)(date2);
  }
  scale.invert = function(y2) {
    return new Date(invert(y2));
  };
  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number3)) : domain().map(date);
  };
  scale.ticks = function(interval) {
    var d = domain();
    return ticks2(d[0], d[d.length - 1], interval == null ? 10 : interval);
  };
  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat2 : format2(specifier);
  };
  scale.nice = function(interval) {
    var d = domain();
    if (!interval || typeof interval.range !== "function") interval = tickInterval(d[0], d[d.length - 1], interval == null ? 10 : interval);
    return interval ? domain(nice(d, interval)) : scale;
  };
  scale.copy = function() {
    return copy(scale, calendar(ticks2, tickInterval, year, month, week, day, hour, minute, second2, format2));
  };
  return scale;
}
function time() {
  return initRange.apply(calendar(timeTicks, timeTickInterval, timeYear, timeMonth, timeSunday, timeDay, timeHour, timeMinute, second, timeFormat).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}

// node_modules/d3-shape/src/constant.js
function constant_default2(x2) {
  return function constant() {
    return x2;
  };
}

// node_modules/d3-path/src/path.js
var pi = Math.PI;
var tau = 2 * pi;
var epsilon = 1e-6;
var tauEpsilon = tau - epsilon;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k) / k + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x1, y1, x2, y2) {
    this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x2, y2, r2) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r2 = +r2;
    if (r2 < 0) throw new Error(`negative radius: ${r2}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r2) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r2 * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r2},${r2},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x2, y2, r2, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r2 = +r2, ccw = !!ccw;
    if (r2 < 0) throw new Error(`negative radius: ${r2}`);
    let dx = r2 * Math.cos(a0), dy = r2 * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._append`L${x0},${y0}`;
    }
    if (!r2) return;
    if (da < 0) da = da % tau + tau;
    if (da > tauEpsilon) {
      this._append`A${r2},${r2},0,1,${cw},${x2 - dx},${y2 - dy}A${r2},${r2},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon) {
      this._append`A${r2},${r2},0,${+(da >= pi)},${cw},${this._x1 = x2 + r2 * Math.cos(a1)},${this._y1 = y2 + r2 * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(line);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default2(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default2(y2);
  function line(data) {
    var i, n = (data = array_default(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default2(+_), line) : x2;
  };
  line.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default2(+_), line) : y2;
  };
  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), line) : defined;
  };
  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };
  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };
  return line;
}

// node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined = constant_default2(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default2(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default2(0) : constant_default2(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default2(+y1);
  function area(data) {
    var i, j, k, n = (data = array_default(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default2(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default2(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default2(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default2(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point2(that, t02, t12) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t02, x1 - dx, y1 - dx * t12, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point2(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t12 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point2(this, slope2(this, t12 = slope3(this, x2, y2)), t12);
        break;
      default:
        point2(this, this._t0, t12 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t12;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};
function monotoneX(context) {
  return new MonotoneX(context);
}

// src/components/DataVisualisation/utils/scales.ts
function createXTimeScale(data, accessor, range2) {
  const domain = extent(data, accessor);
  return time().domain(domain).range(range2);
}
function createYLinearScale(data, accessor, range2) {
  const [min, max] = extent(data, accessor);
  return linear2().domain([Math.min(0, min != null ? min : 0), max != null ? max : 0]).nice().range(range2);
}
function createLinePath(data, x2, y2, options) {
  var _a;
  const lineGen = line_default().x(x2).y(y2);
  if ((options == null ? void 0 : options.smooth) !== false) {
    lineGen.curve(monotoneX);
  }
  return (_a = lineGen(data)) != null ? _a : "";
}

// src/components/DataVisualisation/hooks/useChartDimensions.ts
import * as React2 from "react";
function useChartDimensions(initial = {}) {
  const ref = React2.useRef(null);
  const margin = React2.useMemo(() => {
    var _a, _b, _c, _d;
    return {
      top: (_a = initial.top) != null ? _a : 16,
      right: (_b = initial.right) != null ? _b : 16,
      bottom: (_c = initial.bottom) != null ? _c : 32,
      left: (_d = initial.left) != null ? _d : 48
    };
  }, [initial.bottom, initial.left, initial.right, initial.top]);
  const [dims, setDims] = React2.useState({ width: 0, height: 0 });
  React2.useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setDims({ width, height });
      }
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const innerWidth = Math.max(0, dims.width - margin.left - margin.right);
  const innerHeight = Math.max(0, dims.height - margin.top - margin.bottom);
  return { width: dims.width, height: dims.height, innerWidth, innerHeight, margin, ref };
}

// src/components/DataVisualisation/core/ChartRoot.tsx
import * as React3 from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var ChartContext = React3.createContext(null);
function useChartContext() {
  return React3.useContext(ChartContext);
}
var ChartRoot = ({
  height = 240,
  margin,
  width,
  className = "fdp-chart",
  // align with SCSS token application (.fdp-chart)
  children,
  role = "group",
  ariaLabel
}) => {
  const dims = useChartDimensions(margin);
  const style = { height, position: "relative" };
  if (width !== void 0) style.width = typeof width === "number" ? `${width}px` : width;
  return /* @__PURE__ */ jsx2("div", { ref: dims.ref, className, style, role, "aria-label": ariaLabel, children: /* @__PURE__ */ jsx2(ChartContext.Provider, { value: dims, children }) });
};
var ChartRoot_default = ChartRoot;

// src/components/DataVisualisation/core/ScaleContext.tsx
import * as React4 from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var ScaleContext = React4.createContext(null);
var useScaleContext = () => React4.useContext(ScaleContext);
var LineScalesProvider = ({
  series,
  innerWidth: innerWidthProp,
  innerHeight: innerHeightProp,
  parseX: parseXProp,
  children,
  xTickCount = 6,
  yTickCount = 5
}) => {
  var _a, _b;
  const chartDims = useChartContext();
  const innerWidth = (_a = innerWidthProp != null ? innerWidthProp : chartDims == null ? void 0 : chartDims.innerWidth) != null ? _a : 0;
  const innerHeight = (_b = innerHeightProp != null ? innerHeightProp : chartDims == null ? void 0 : chartDims.innerHeight) != null ? _b : 0;
  const allData = React4.useMemo(() => series.flatMap((s) => s.data), [series]);
  const parseX = React4.useCallback((d) => {
    if (parseXProp) return parseXProp(d);
    const raw = d.x;
    return raw instanceof Date ? raw : new Date(raw);
  }, [parseXProp]);
  const xScale = React4.useMemo(() => createXTimeScale(allData, parseX, [0, innerWidth]), [allData, parseX, innerWidth]);
  const yScale = React4.useMemo(() => createYLinearScale(allData, (d) => d.y, [innerHeight, 0]), [allData, innerHeight]);
  const value = React4.useMemo(() => ({
    xScale,
    yScale,
    getXTicks: (count = xTickCount) => xScale.ticks(count),
    getYTicks: (count = yTickCount) => yScale.ticks(count)
  }), [xScale, yScale, xTickCount, yTickCount]);
  return /* @__PURE__ */ jsx3(ScaleContext.Provider, { value, children });
};
var ScaleContext_default = ScaleContext;

// src/components/DataVisualisation/primitives/Axis.tsx
import * as React5 from "react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var Axis = ({
  type,
  scale,
  tickCount,
  tickValues,
  formatTick: rawFormatTick,
  label,
  offset,
  className,
  minLabelSpacing,
  maxTickLabelLength,
  autoMinLabelSpacing = type === "x" ? true : false,
  labelAngle = 0,
  allowLabelWrap = true,
  tickFormatPreset
}) => {
  const scaleCtx = useScaleContext();
  const dims = useChartContext();
  const resolvedScale = scale || (type === "x" ? scaleCtx == null ? void 0 : scaleCtx.xScale : scaleCtx == null ? void 0 : scaleCtx.yScale);
  const defaultCount = tickCount != null ? tickCount : type === "x" ? 6 : 5;
  const hasUserFormatter = typeof rawFormatTick === "function";
  const presetFormatter = React5.useMemo(() => {
    if (hasUserFormatter) return void 0;
    if (!tickFormatPreset) return void 0;
    const dtf = (opts) => new Intl.DateTimeFormat(void 0, opts);
    switch (tickFormatPreset) {
      case "dayShortMonth":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return `${d.getDate()}
${dtf({ month: "short" }).format(d)}`;
        };
      case "dayShortMonthYear":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return `${d.getDate()}
${dtf({ month: "short" }).format(d)} ${d.getFullYear()}`;
        };
      case "shortMonth":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return dtf({ month: "short" }).format(d);
        };
      case "shortMonthYear":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return `${dtf({ month: "short" }).format(d)} ${d.getFullYear()}`;
        };
      case "hourMinute":
        return (v) => {
          const d = v instanceof Date ? v : new Date(v);
          return dtf({ hour: "2-digit", minute: "2-digit" }).format(d);
        };
      default:
        return void 0;
    }
  }, [hasUserFormatter, tickFormatPreset]);
  let effectiveFormatTick = hasUserFormatter ? rawFormatTick : presetFormatter || ((v) => String(v));
  const ticks2 = React5.useMemo(() => {
    if (tickValues && Array.isArray(tickValues)) return tickValues;
    if (!resolvedScale) return [];
    if (typeof resolvedScale.ticks === "function") return resolvedScale.ticks(defaultCount);
    return resolvedScale.domain ? resolvedScale.domain() : [];
  }, [resolvedScale, defaultCount, tickValues]);
  if (type === "x" && !hasUserFormatter && !tickFormatPreset && ticks2.length && ticks2.every((t) => t instanceof Date)) {
    const first = ticks2[0];
    const last = ticks2[ticks2.length - 1];
    const spanMs = last.getTime() - first.getTime();
    const oneDay = 24 * 3600 * 1e3;
    const oneYear = 365 * oneDay;
    const sameYear = first.getFullYear() === last.getFullYear();
    const dtfMonth = new Intl.DateTimeFormat(void 0, { month: "short" });
    if (spanMs < 2 * oneDay) {
      const dtfTime = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" });
      effectiveFormatTick = (v) => dtfTime.format(v);
    } else if (spanMs < 32 * oneDay) {
      effectiveFormatTick = (v) => {
        const d = v;
        return `${d.getDate()} ${dtfMonth.format(d)}`;
      };
    } else if (spanMs < oneYear && sameYear) {
      effectiveFormatTick = (v) => dtfMonth.format(v);
    } else if (spanMs < 2 * oneYear) {
      const seenMonths = /* @__PURE__ */ new Set();
      effectiveFormatTick = (v) => {
        const d = v;
        const key = d.getMonth();
        if (!seenMonths.has(key)) {
          seenMonths.add(key);
        }
        return `${dtfMonth.format(d)} ${d.getFullYear()}`;
      };
    } else {
      effectiveFormatTick = (v) => String(v.getFullYear());
    }
  }
  if (!resolvedScale || !dims) return null;
  if (type === "x") {
    const y2 = offset != null ? offset : dims.innerHeight;
    const isBandScale = typeof resolvedScale.bandwidth === "function";
    const bandwidth = isBandScale ? resolvedScale.bandwidth() : 0;
    const tickPos = (t) => {
      const base = resolvedScale(t);
      return isBandScale ? base + bandwidth / 2 : base;
    };
    let resolvedMinSpacing = minLabelSpacing != null ? minLabelSpacing : 0;
    if (autoMinLabelSpacing && (minLabelSpacing === void 0 || minLabelSpacing === null)) {
      const labels = ticks2.map((t) => effectiveFormatTick(t).replace(/\n.*/g, ""));
      const avgLen = labels.length ? labels.reduce((a, b) => a + b.length, 0) / labels.length : 0;
      resolvedMinSpacing = Math.max(12, Math.round(avgLen * 6 + 4));
    }
    const filteredTicks = React5.useMemo(() => {
      if (tickValues && Array.isArray(tickValues)) return ticks2;
      if (resolvedMinSpacing <= 0) return ticks2;
      const accepted = [];
      let lastPos = -Infinity;
      for (const t of ticks2) {
        const pos = tickPos(t);
        if (pos - lastPos >= resolvedMinSpacing) {
          accepted.push(t);
          lastPos = pos;
        }
      }
      return accepted;
    }, [ticks2, resolvedScale, resolvedMinSpacing, tickValues, isBandScale, bandwidth]);
    return /* @__PURE__ */ jsxs2("g", { className: ["fdp-axis", "fdp-axis--x", className].filter(Boolean).join(" "), transform: `translate(0,${y2})`, fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
      /* @__PURE__ */ jsx4("line", { x1: 0, x2: dims.innerWidth, y1: 0, y2: 0, stroke: "currentColor" }),
      filteredTicks.map((t, i) => {
        var _a;
        const rawLabel = effectiveFormatTick(t);
        const displayLabel = maxTickLabelLength && rawLabel.length > maxTickLabelLength ? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + "\u2026" : rawLabel;
        const lines = allowLabelWrap ? displayLabel.split(/\n/) : [displayLabel.replace(/\n/g, " ")];
        const anchor = labelAngle < 0 ? "end" : labelAngle > 0 ? "start" : "middle";
        return /* @__PURE__ */ jsxs2("g", { transform: `translate(${tickPos(t)},0)`, children: [
          /* @__PURE__ */ jsx4("line", { y2: 6, stroke: "currentColor" }),
          /* @__PURE__ */ jsxs2("text", { y: 9, textAnchor: anchor, className: "fdp-axis__tick", dominantBaseline: "hanging", transform: labelAngle ? `rotate(${labelAngle})` : void 0, fontFamily: "inherit", children: [
            lines.map((ln, li) => /* @__PURE__ */ jsx4("tspan", { x: 0, dy: li === 0 ? 0 : "1.1em", children: ln }, li)),
            displayLabel !== rawLabel && /* @__PURE__ */ jsx4("title", { children: rawLabel })
          ] })
        ] }, ((_a = t == null ? void 0 : t.toString) == null ? void 0 : _a.call(t)) || i);
      })
    ] });
  }
  return /* @__PURE__ */ jsxs2("g", { className: ["fdp-axis", "fdp-axis--y", className].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    ticks2.map((t, i) => {
      var _a;
      const rawLabel = effectiveFormatTick(t);
      const displayLabel = maxTickLabelLength && rawLabel.length > maxTickLabelLength ? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + "\u2026" : rawLabel;
      const lines = allowLabelWrap ? displayLabel.split(/\n/) : [displayLabel.replace(/\n/g, " ")];
      return /* @__PURE__ */ jsxs2("g", { transform: `translate(0,${resolvedScale(t)})`, children: [
        /* @__PURE__ */ jsx4("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ jsxs2("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          lines.map((ln, li) => /* @__PURE__ */ jsx4("tspan", { x: -9, dy: li === 0 ? 0 : "1.1em", children: ln }, li)),
          displayLabel !== rawLabel && /* @__PURE__ */ jsx4("title", { children: rawLabel })
        ] })
      ] }, ((_a = t == null ? void 0 : t.toString) == null ? void 0 : _a.call(t)) || i);
    }),
    label && /* @__PURE__ */ jsx4("text", { transform: "rotate(-90)", x: -dims.innerHeight / 2, y: -dims.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: label })
  ] });
};
var Axis_default = Axis;

// src/components/DataVisualisation/primitives/GridLines.tsx
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
var GridLines = ({
  axis = "y",
  tickCount,
  stroke = "var(--fdp-chart-grid,#e5e5e5)",
  dasharray = "2 4",
  className
}) => {
  const scaleCtx = useScaleContext();
  const dims = useChartContext();
  if (!scaleCtx || !dims) return null;
  const ticks2 = axis === "y" ? scaleCtx.getYTicks(tickCount) : scaleCtx.getXTicks(tickCount);
  return /* @__PURE__ */ jsxs3("g", { className: ["fdp-grid", className].filter(Boolean).join(" "), children: [
    axis === "y" && ticks2.map((t, i) => /* @__PURE__ */ jsx5("line", { x1: 0, x2: dims.innerWidth, y1: scaleCtx.yScale(t), y2: scaleCtx.yScale(t), stroke, strokeDasharray: dasharray }, i)),
    axis === "x" && ticks2.map((t, i) => /* @__PURE__ */ jsx5("line", { y1: 0, y2: dims.innerHeight, x1: scaleCtx.xScale(t), x2: scaleCtx.xScale(t), stroke, strokeDasharray: dasharray }, i))
  ] });
};
var GridLines_default = GridLines;

// src/components/DataVisualisation/series/LineSeriesPrimitive.tsx
import * as React8 from "react";

// packages/nhs-fdp/tokens/data-viz.json
var data_viz_default = {
  color: {
    "data-viz": {
      $type: "color",
      categorical: {
        "1": { $value: "{color.primary.blue}", $description: "Series 1 \u2013 NHS Blue (brand core)" },
        "2": { $value: "#41B6E6", $description: "Series 2 \u2013 NHS Light Blue (new)" },
        "3": { $value: "{color.secondary.aqua-green}", $description: "Series 3 \u2013 NHS Aqua Green (existing)" },
        "4": { $value: "#78BE20", $description: "Series 4 \u2013 NHS Light Green (new)" },
        "5": { $value: "{color.primary.green}", $description: "Series 5 \u2013 NHS Green (existing)" },
        "6": { $value: "{color.secondary.warm-yellow}", $description: "Series 6 \u2013 NHS Warm Yellow (existing; distinct from focus yellow)" },
        "7": { $value: "#ED4F00", $description: "Series 7 \u2013 NHS Tangerine (new; warmer/deeper than existing orange)" },
        "8": { $value: "{color.secondary.pink}", $description: "Series 8 \u2013 NHS Pink (existing)" },
        "9": { $value: "#E317AA", $description: "Series 9 \u2013 NHS Bright Pink (new vivid accent)" },
        "10": { $value: "#880FB8", $description: "Series 10 \u2013 NHS Light Purple (new mid purple)" },
        "11": { $value: "{color.primary.purple}", $description: "Series 11 \u2013 NHS Purple (existing dark purple)" },
        "12": { $value: "#9A6324", $description: "Series 12 \u2013 NHS Brown (new; earth neutral)" }
      },
      neutral: {
        comparison: { $value: "{color.grey.1}", $description: "Neutral comparison series (optional)" }
      },
      region: {
        $comment: "Fixed colours for NHS geographical regions; prefer stable mapping for maps. London colour updated (#78BE21 \u2013 light green).",
        "north-east": { $value: "{color.primary.blue}", $description: "North East \u2013 NHS Blue" },
        "north-west": { $value: "#41B6E6", $description: "North West \u2013 NHS Light Blue" },
        "east-of-england": { $value: "{color.primary.purple}", $description: "East of England \u2013 NHS Purple" },
        midlands: { $value: "{color.secondary.pink}", $description: "Midlands \u2013 NHS Pink" },
        london: { $value: "#78BE21", $description: "London \u2013 NHS Light Green (new)" },
        "south-west": { $value: "#FAE100", $description: "South West \u2013 NHS Yellow variant (new)" },
        "south-east": { $value: "#ed8b00", $description: "South East \u2013 NHS Orange (existing base orange)" }
      },
      stroke: {
        $comment: "Automatic contrast stroke colours for overlays / borders. Light fills get dark stroke; dark fills get white stroke.",
        categorical: {
          "1": { $value: "#ffffff", $description: "Stroke for series 1 (blue)" },
          "2": { $value: "#212b32", $description: "Stroke for series 2 (light blue)" },
          "3": { $value: "#212b32", $description: "Stroke for series 3 (aqua green)" },
          "4": { $value: "#212b32", $description: "Stroke for series 4 (light green)" },
          "5": { $value: "#ffffff", $description: "Stroke for series 5 (green)" },
          "6": { $value: "#212b32", $description: "Stroke for series 6 (warm yellow)" },
          "7": { $value: "#ffffff", $description: "Stroke for series 7 (tangerine)" },
          "8": { $value: "#ffffff", $description: "Stroke for series 8 (pink)" },
          "9": { $value: "#ffffff", $description: "Stroke for series 9 (bright pink)" },
          "10": { $value: "#ffffff", $description: "Stroke for series 10 (light purple)" },
          "11": { $value: "#ffffff", $description: "Stroke for series 11 (purple)" },
          "12": { $value: "#ffffff", $description: "Stroke for series 12 (brown)" }
        },
        region: {
          "north-east": { $value: "#ffffff", $description: "Stroke for North East (blue)" },
          "north-west": { $value: "#212b32", $description: "Stroke for North West (light blue)" },
          "east-of-england": { $value: "#ffffff", $description: "Stroke for East of England (purple)" },
          midlands: { $value: "#ffffff", $description: "Stroke for Midlands (pink)" },
          london: { $value: "#212b32", $description: "Stroke for London (light green)" },
          "south-west": { $value: "#212b32", $description: "Stroke for South West (yellow)" },
          "south-east": { $value: "#ffffff", $description: "Stroke for South East (orange)" }
        }
      }
    }
  }
};

// packages/nhs-fdp/tokens/colors.json
var colors_default = {
  color: {
    primary: {
      $type: "color",
      blue: {
        $value: "#005eb8",
        $description: "NHS Blue - Primary brand color"
      },
      white: {
        $value: "#ffffff",
        $description: "NHS White"
      },
      black: {
        $value: "#212b32",
        $description: "NHS Black"
      },
      green: {
        $value: "#007f3b",
        $description: "NHS Green"
      },
      purple: {
        $value: "#330072",
        $description: "NHS Purple"
      },
      "dark-pink": {
        $value: "#7c2855",
        $description: "NHS Dark Pink"
      },
      red: {
        $value: "#d5281b",
        $description: "NHS Red"
      },
      yellow: {
        $value: "#ffeb3b",
        $description: "NHS Yellow"
      }
    },
    secondary: {
      $type: "color",
      "pale-yellow": {
        $value: "#fff9c4",
        $description: "NHS Pale Yellow"
      },
      "warm-yellow": {
        $value: "#ffb81c",
        $description: "NHS Warm Yellow"
      },
      "region-yellow": {
        $value: "#FAE100",
        $description: "NHS Region Yellow (maps)"
      },
      orange: {
        $value: "#ed8b00",
        $description: "NHS Orange"
      },
      "aqua-green": {
        $value: "#00a499",
        $description: "NHS Aqua Green"
      },
      cyan: {
        $value: "#00A9CE",
        $description: "NHS Cyan (London region)"
      },
      pink: {
        $value: "#ae2573",
        $description: "NHS Pink"
      }
    },
    grey: {
      $type: "color",
      "1": {
        $value: "#4c6272",
        $description: "NHS Grey 1 - Darkest grey"
      },
      "2": {
        $value: "#768692",
        $description: "NHS Grey 2 - Darker grey"
      },
      "3": {
        $value: "#aeb7bd",
        $description: "NHS Grey 3 - Medium grey"
      },
      "4": {
        $value: "#d8dde0",
        $description: "NHS Grey 4 - Light grey"
      },
      "5": {
        $value: "#f0f4f5",
        $description: "NHS Grey 5 - Lightest grey"
      }
    }
  }
};

// src/components/DataVisualisation/utils/colors.ts
var legacyCategorical = [
  "#005eb8",
  "#0072ce",
  "#41b6e6",
  "#00a499",
  "#7c2855",
  "#330072",
  "#d5281b",
  "#ffb81c",
  "#fae100",
  "#4c6272",
  "#768692",
  "#aeb7bd"
];
var categoricalPalette = null;
var optimizedCategoricalPalette = null;
var extendedPaletteCache = null;
var categoricalStrategy = "optimized";
function buildPalette() {
  const root = { color: { ...colors_default.color, ...data_viz_default.color } };
  const resolve = (path2, seen = /* @__PURE__ */ new Set()) => {
    if (seen.has(path2)) return void 0;
    seen.add(path2);
    const node = path2.split(".").reduce((acc, k) => acc ? acc[k] : void 0, root);
    if (!node) return void 0;
    const value = node.$value || node.value;
    if (typeof value === "string" && /^\{.+\}$/.test(value)) {
      return resolve(value.slice(1, -1), seen);
    }
    if (typeof value === "string") return value;
    return void 0;
  };
  const palette = [];
  try {
    for (let i = 1; i <= 12; i++) {
      const tokenPath = `color.data-viz.categorical.${i}`;
      const hex2 = resolve(tokenPath);
      if (!hex2) throw new Error(`Missing token ${tokenPath}`);
      palette.push(hex2);
    }
    return palette;
  } catch (e) {
    return legacyCategorical;
  }
}
function getPalette() {
  if (!categoricalPalette) categoricalPalette = buildPalette();
  return categoricalPalette;
}
function hexToRgb(hex2) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex2.trim());
  if (!m) return null;
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}
function srgbToLinear(x2) {
  x2 /= 255;
  return x2 <= 0.04045 ? x2 / 12.92 : Math.pow((x2 + 0.055) / 1.055, 2.4);
}
function rgbToXyz(r2, g, b) {
  const R = srgbToLinear(r2);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);
  const x2 = R * 0.4124 + G * 0.3576 + B * 0.1805;
  const y2 = R * 0.2126 + G * 0.7152 + B * 0.0722;
  const z = R * 0.0193 + G * 0.1192 + B * 0.9505;
  return { x: x2 * 100, y: y2 * 100, z: z * 100 };
}
function xyzToLab(x2, y2, z) {
  const refX = 95.047, refY = 100, refZ = 108.883;
  let X = x2 / refX, Y = y2 / refY, Z = z / refZ;
  const f = (t) => t > 8856e-6 ? Math.cbrt(t) : 7.787 * t + 16 / 116;
  X = f(X);
  Y = f(Y);
  Z = f(Z);
  return { L: 116 * Y - 16, a: 500 * (X - Y), b: 200 * (Y - Z) };
}
function hexToLab(hex2) {
  const rgb2 = hexToRgb(hex2);
  if (!rgb2) return null;
  const xyz = rgbToXyz(rgb2.r, rgb2.g, rgb2.b);
  return xyzToLab(xyz.x, xyz.y, xyz.z);
}
function deltaE76(c1, c2) {
  const dL = c1.L - c2.L;
  const da = c1.a - c2.a;
  const db = c1.b - c2.b;
  return Math.sqrt(dL * dL + da * da + db * db);
}
function buildOptimizedCategoricalPalette() {
  const base = getPalette();
  if (base.length <= 2) return base.slice();
  const labs = base.map((c) => hexToLab(c));
  let bestStartIdx = 0;
  let bestAvg = -1;
  for (let i = 0; i < base.length; i++) {
    const li = labs[i];
    if (!li) continue;
    let total = 0;
    let count = 0;
    for (let j = 0; j < base.length; j++) if (i !== j && labs[j]) {
      total += deltaE76(li, labs[j]);
      count++;
    }
    const avg = total / Math.max(1, count);
    if (avg > bestAvg) {
      bestAvg = avg;
      bestStartIdx = i;
    }
  }
  const remaining = new Set(base.map((_, i) => i));
  const order = [];
  order.push(bestStartIdx);
  remaining.delete(bestStartIdx);
  while (remaining.size) {
    let nextIdx = Array.from(remaining)[0];
    let bestMin = -1;
    for (const idx of remaining) {
      const l = labs[idx];
      if (!l) continue;
      let minD = Infinity;
      for (const o of order) {
        const lo = labs[o];
        if (lo) {
          const d = deltaE76(l, lo);
          if (d < minD) minD = d;
        }
      }
      if (minD > bestMin) {
        bestMin = minD;
        nextIdx = idx;
      }
    }
    order.push(nextIdx);
    remaining.delete(nextIdx);
  }
  return order.map((i) => base[i]);
}
function getOptimizedPalette() {
  if (!optimizedCategoricalPalette) optimizedCategoricalPalette = buildOptimizedCategoricalPalette();
  return optimizedCategoricalPalette;
}
function getRawPalette() {
  return getPalette();
}
function labToXyz(L, a, b) {
  const y2 = (L + 16) / 116;
  const x2 = a / 500 + y2;
  const z = y2 - b / 200;
  const f = (t) => {
    const t3 = t * t * t;
    return t3 > 8856e-6 ? t3 : (t - 16 / 116) / 7.787;
  };
  const X = f(x2) * 95.047;
  const Y = f(y2) * 100;
  const Z = f(z) * 108.883;
  return { X, Y, Z };
}
function xyzToRgb(x2, y2, z) {
  x2 /= 100;
  y2 /= 100;
  z /= 100;
  let R = x2 * 3.2406 + y2 * -1.5372 + z * -0.4986;
  let G = x2 * -0.9689 + y2 * 1.8758 + z * 0.0415;
  let B = x2 * 0.0557 + y2 * -0.204 + z * 1.057;
  const linToSrgb = (c) => c <= 31308e-7 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  R = Math.min(1, Math.max(0, linToSrgb(R)));
  G = Math.min(1, Math.max(0, linToSrgb(G)));
  B = Math.min(1, Math.max(0, linToSrgb(B)));
  return { r: Math.round(R * 255), g: Math.round(G * 255), b: Math.round(B * 255) };
}
function rgbToHex(r2, g, b) {
  return `#${[r2, g, b].map((v) => v.toString(16).padStart(2, "0")).join("")}`;
}
function adjustLightness(hex2, deltaL) {
  const lab = hexToLab(hex2);
  if (!lab) return hex2;
  const L = Math.min(100, Math.max(0, lab.L + deltaL));
  const { X, Y, Z } = labToXyz(L, lab.a, lab.b);
  const rgb2 = xyzToRgb(X, Y, Z);
  return rgbToHex(rgb2.r, rgb2.g, rgb2.b);
}
function buildExtendedPalette() {
  const base = categoricalStrategy === "raw" ? getRawPalette() : getOptimizedPalette();
  const deltas = [12, -12, 24, -24];
  const variants = deltas.map((d) => base.map((c) => adjustLightness(c, d)));
  const extended = [...base];
  variants.forEach((v) => extended.push(...v));
  return extended;
}
function getExtendedPalette() {
  if (!extendedPaletteCache || extendedPaletteCacheStrategyMismatch()) {
    extendedPaletteCache = buildExtendedPalette();
    lastExtendedStrategy = categoricalStrategy;
  }
  return extendedPaletteCache;
}
var lastExtendedStrategy = null;
function extendedPaletteCacheStrategyMismatch() {
  return lastExtendedStrategy !== categoricalStrategy;
}
function pickSeriesColor(i) {
  const ext = getExtendedPalette();
  return ext[i % ext.length];
}
function getOptimizedCategoricalPalette() {
  return [...getOptimizedPalette()];
}
function getRawCategoricalPalette() {
  return [...getRawPalette()];
}
function getExtendedCategoricalPalette() {
  return [...getExtendedPalette()];
}
var categoricalStrokeMap = null;
var regionStrokeMap = null;
function buildStrokeMaps() {
  var _a, _b, _c, _d, _e;
  const stroke = (_c = (_b = (_a = data_viz_default) == null ? void 0 : _a.color) == null ? void 0 : _b["data-viz"]) == null ? void 0 : _c.stroke;
  if (stroke) {
    const cat = stroke.categorical || {};
    categoricalStrokeMap = [];
    for (let i = 1; i <= 12; i++) {
      const v = ((_d = cat[String(i)]) == null ? void 0 : _d.$value) || ((_e = cat[String(i)]) == null ? void 0 : _e.value);
      categoricalStrokeMap.push(typeof v === "string" ? v : "#212b32");
    }
    const reg = stroke.region || {};
    regionStrokeMap = {};
    Object.keys(reg).forEach((k) => {
      var _a2, _b2;
      const v = ((_a2 = reg[k]) == null ? void 0 : _a2.$value) || ((_b2 = reg[k]) == null ? void 0 : _b2.value);
      if (typeof v === "string") regionStrokeMap[k] = v;
    });
  }
}
function ensureStrokeMaps() {
  if (!categoricalStrokeMap || !regionStrokeMap) buildStrokeMaps();
}
function pickSeriesStroke(i) {
  ensureStrokeMaps();
  if (!categoricalStrokeMap) return "#212b32";
  return categoricalStrokeMap[i % categoricalStrokeMap.length];
}
function getRegionStroke(id) {
  ensureStrokeMaps();
  return regionStrokeMap ? regionStrokeMap[id] : void 0;
}
function pickRegionStroke(id, fallbackIndex) {
  return getRegionStroke(id) || pickSeriesStroke(fallbackIndex);
}
var regionMap = null;
var REGION_IDS = [
  "north-east",
  "north-west",
  "east-of-england",
  "midlands",
  "london",
  "south-west",
  "south-east"
];
function normalizeRegionId(id) {
  return id.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function buildRegionMap() {
  const root = { color: { ...colors_default.color, ...data_viz_default.color } };
  const resolve = (path2, seen = /* @__PURE__ */ new Set()) => {
    if (seen.has(path2)) return void 0;
    seen.add(path2);
    const node = path2.split(".").reduce((acc, k) => acc ? acc[k] : void 0, root);
    if (!node) return void 0;
    const value = node.$value || node.value;
    if (typeof value === "string" && /^\{.+\}$/.test(value)) return resolve(value.slice(1, -1), seen);
    return typeof value === "string" ? value : void 0;
  };
  const map2 = {};
  const missing = [];
  REGION_IDS.forEach((id) => {
    const hex2 = resolve(`color.data-viz.region.${id}`);
    if (hex2) map2[id] = hex2;
    else missing.push(id);
  });
  if (true) {
    if (Object.keys(map2).length === 0) {
      console.warn("[DataViz] Region colour tokens unresolved  falling back to categorical colours.");
    } else if (missing.length) {
      console.warn(`[DataViz] Missing region colour tokens: ${missing.join(", ")}.`);
    }
  }
  return map2;
}
function getRegionMap() {
  if (!regionMap) regionMap = buildRegionMap();
  return regionMap;
}
function getRegionColor(id) {
  return getRegionMap()[normalizeRegionId(id)];
}
function pickRegionColor(id, fallbackIndex) {
  return getRegionColor(id) || pickSeriesColor(fallbackIndex);
}
function assignSeriesColors(series, { palette = "categorical", random = false } = {}) {
  const copy2 = series.map((s) => ({ ...s }));
  const paletteValues = palette === "region" ? copy2.map((s, i) => pickRegionColor(s.id, i)) : series.length > getOptimizedCategoricalPalette().length ? getExtendedCategoricalPalette() : categoricalStrategy === "optimized" ? getOptimizedCategoricalPalette() : getRawCategoricalPalette();
  let order = palette === "region" ? copy2.map((_, i) => i) : [...Array(paletteValues.length).keys()];
  if (random) {
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
  }
  let cursor = 0;
  copy2.forEach((s, si) => {
    if (!s.color) {
      if (palette === "region") {
        s.color = paletteValues[si];
      } else {
        const idx = order[cursor % order.length];
        s.color = paletteValues[idx];
        cursor++;
      }
    }
  });
  return copy2;
}

// src/components/DataVisualisation/core/VisibilityContext.tsx
import * as React6 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var VisibilityContext = React6.createContext(null);
var useVisibility = () => React6.useContext(VisibilityContext);
var VisibilityProvider = ({
  initialHiddenIds = [],
  children,
  hiddenIds: controlledHidden,
  onChange
}) => {
  const [uncontrolled, setUncontrolled] = React6.useState(() => new Set(initialHiddenIds));
  const isControlled = controlledHidden !== void 0;
  const hiddenSet = React6.useMemo(() => isControlled ? new Set(controlledHidden) : uncontrolled, [isControlled, controlledHidden, uncontrolled]);
  const update = React6.useCallback((next) => {
    if (!isControlled) setUncontrolled(new Set(next));
    onChange == null ? void 0 : onChange(Array.from(next));
  }, [isControlled, onChange]);
  const api = React6.useMemo(() => ({
    hiddenIds: hiddenSet,
    isHidden: (id) => hiddenSet.has(id),
    toggle: (id) => {
      const next = new Set(hiddenSet);
      next.has(id) ? next.delete(id) : next.add(id);
      update(next);
    },
    showOnly: (_id) => {
      update(/* @__PURE__ */ new Set());
    },
    showAll: () => update(/* @__PURE__ */ new Set()),
    setHidden: (ids) => update(new Set(Array.isArray(ids) ? ids : Array.from(ids)))
  }), [hiddenSet, update]);
  return /* @__PURE__ */ jsx6(VisibilityContext.Provider, { value: api, children });
};

// src/components/DataVisualisation/core/TooltipContext.tsx
import * as React7 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var TooltipContext = React7.createContext(null);
var useTooltipContext = () => React7.useContext(TooltipContext);
var TooltipProvider = ({ children, maxDistance = 40, wrapAround = false }) => {
  const scaleCtx = useScaleContext();
  const visibility = useVisibility();
  const [focused, setFocused] = React7.useState(null);
  const seriesRef = React7.useRef(/* @__PURE__ */ new Map());
  const [aggregated, setAggregated] = React7.useState([]);
  const registerSeries = React7.useCallback((seriesId, data) => {
    seriesRef.current.set(seriesId, data);
  }, []);
  const unregisterSeries = React7.useCallback((seriesId) => {
    seriesRef.current.delete(seriesId);
  }, []);
  const focusNearest = React7.useCallback((plotX, plotY) => {
    if (!scaleCtx) return;
    const { xScale, yScale } = scaleCtx;
    let best = null;
    let bestDist = Infinity;
    seriesRef.current.forEach((data, sid) => {
      data.forEach((d, i) => {
        const px = xScale(d.x);
        const py = yScale(d.y);
        const dx = px - plotX;
        const dy = py - plotY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < bestDist) {
          bestDist = dist;
          best = { seriesId: sid, index: i, x: d.x, y: d.y, clientX: px, clientY: py };
        }
      });
    });
    if (best && bestDist <= maxDistance) setFocused(best);
    else setFocused(null);
  }, [scaleCtx, maxDistance]);
  const clear = React7.useCallback(() => setFocused(null), []);
  React7.useEffect(() => {
    if (!focused) {
      setAggregated([]);
      return;
    }
    const targetTime = focused.x.getTime();
    if (!scaleCtx) return;
    const { xScale, yScale } = scaleCtx;
    const agg = [];
    seriesRef.current.forEach((data, sid) => {
      data.forEach((d, i) => {
        if (d.x.getTime() === targetTime) {
          agg.push({ seriesId: sid, index: i, x: d.x, y: d.y, clientX: xScale(d.x), clientY: yScale(d.y) });
        }
      });
    });
    agg.sort((a, b) => a.seriesId.localeCompare(b.seriesId));
    setAggregated(agg);
  }, [focused, scaleCtx]);
  const focusRelativePoint = React7.useCallback((delta) => {
    if (!focused) return;
    const data = seriesRef.current.get(focused.seriesId);
    if (!data) return;
    let nextIndex = focused.index + delta;
    if (nextIndex < 0 || nextIndex >= data.length) {
      if (!wrapAround) return;
      nextIndex = (nextIndex + data.length) % data.length;
    }
    const d = data[nextIndex];
    if (!scaleCtx) return;
    const { xScale, yScale } = scaleCtx;
    setFocused({ seriesId: focused.seriesId, index: nextIndex, x: d.x, y: d.y, clientX: xScale(d.x), clientY: yScale(d.y) });
  }, [focused, scaleCtx, wrapAround]);
  const focusSeriesAtIndex = React7.useCallback((seriesDelta) => {
    let ids = Array.from(seriesRef.current.keys());
    if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
    if (ids.length === 0) return;
    if (!focused) {
      const first = ids[0];
      const data = seriesRef.current.get(first);
      if (!data || !scaleCtx) return;
      const { xScale: xScale2, yScale: yScale2 } = scaleCtx;
      const d2 = data[0];
      setFocused({ seriesId: first, index: 0, x: d2.x, y: d2.y, clientX: xScale2(d2.x), clientY: yScale2(d2.y) });
      return;
    }
    const currentSeriesIdx = ids.indexOf(focused.seriesId);
    if (currentSeriesIdx === -1) return;
    let nextSeriesIdx = currentSeriesIdx + seriesDelta;
    if (nextSeriesIdx < 0 || nextSeriesIdx >= ids.length) {
      if (!wrapAround) return;
      nextSeriesIdx = (nextSeriesIdx + ids.length) % ids.length;
    }
    const nextSeriesId = ids[nextSeriesIdx];
    const nextData = seriesRef.current.get(nextSeriesId);
    if (!nextData || !scaleCtx) return;
    const idx = Math.min(focused.index, nextData.length - 1);
    const d = nextData[idx];
    const { xScale, yScale } = scaleCtx;
    setFocused({ seriesId: nextSeriesId, index: idx, x: d.x, y: d.y, clientX: xScale(d.x), clientY: yScale(d.y) });
  }, [focused, scaleCtx, wrapAround, visibility]);
  const focusFirstPoint = React7.useCallback(() => {
    let ids = Array.from(seriesRef.current.keys());
    if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
    if (ids.length === 0) return;
    const targetSeriesId = focused ? focused.seriesId : ids[0];
    const data = seriesRef.current.get(targetSeriesId);
    if (!data || data.length === 0 || !scaleCtx) return;
    const d = data[0];
    const { xScale, yScale } = scaleCtx;
    setFocused({ seriesId: targetSeriesId, index: 0, x: d.x, y: d.y, clientX: xScale(d.x), clientY: yScale(d.y) });
  }, [focused, scaleCtx, visibility]);
  const focusLastPoint = React7.useCallback(() => {
    let ids = Array.from(seriesRef.current.keys());
    if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
    if (ids.length === 0) return;
    const targetSeriesId = focused ? focused.seriesId : ids[0];
    const data = seriesRef.current.get(targetSeriesId);
    if (!data || data.length === 0 || !scaleCtx) return;
    const lastIndex = data.length - 1;
    const d = data[lastIndex];
    const { xScale, yScale } = scaleCtx;
    setFocused({ seriesId: targetSeriesId, index: lastIndex, x: d.x, y: d.y, clientX: xScale(d.x), clientY: yScale(d.y) });
  }, [focused, scaleCtx, visibility]);
  const focusNextPoint = React7.useCallback(() => focusRelativePoint(1), [focusRelativePoint]);
  const focusPrevPoint = React7.useCallback(() => focusRelativePoint(-1), [focusRelativePoint]);
  const focusNextSeries = React7.useCallback(() => focusSeriesAtIndex(1), [focusSeriesAtIndex]);
  const focusPrevSeries = React7.useCallback(() => focusSeriesAtIndex(-1), [focusSeriesAtIndex]);
  const value = React7.useMemo(() => ({
    focused,
    setFocused,
    aggregated,
    focusNearest,
    clear,
    registerSeries,
    unregisterSeries,
    focusNextPoint,
    focusPrevPoint,
    focusNextSeries,
    focusPrevSeries,
    focusFirstPoint,
    focusLastPoint
  }), [focused, aggregated, focusNearest, clear, registerSeries, unregisterSeries, focusNextPoint, focusPrevPoint, focusNextSeries, focusPrevSeries, focusFirstPoint, focusLastPoint]);
  return /* @__PURE__ */ jsx7(TooltipContext.Provider, { value, children });
};

// src/components/DataVisualisation/series/LineSeriesPrimitive.tsx
import { jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var LineSeriesPrimitive = ({
  series,
  seriesIndex,
  palette,
  showPoints,
  focusablePoints,
  focusIndex,
  parseX,
  visibilityMode = "remove",
  strokeWidth = 1,
  smooth = true
}) => {
  var _a;
  const scaleCtx = useScaleContext();
  if (!scaleCtx) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = (_a = visibility == null ? void 0 : visibility.isHidden(series.id)) != null ? _a : false;
  const faded = isHidden && visibilityMode === "fade";
  if (isHidden && visibilityMode === "remove") {
    return null;
  }
  const tooltip = useTooltipContext();
  React8.useEffect(() => {
    if (!tooltip) return;
    const normalized = series.data.map((d) => ({ x: parseX(d), y: d.y }));
    tooltip.registerSeries(series.id, normalized);
    return () => tooltip.unregisterSeries(series.id);
  }, [tooltip, series.id, series.data, parseX]);
  const path2 = React8.useMemo(() => createLinePath(series.data, (d) => xScale(parseX(d)), (d) => yScale(d.y), { smooth }), [series.data, xScale, yScale, parseX, smooth]);
  const color2 = series.color || (palette === "region" ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));
  const stroke = palette === "region" ? pickRegionStroke(series.id, seriesIndex) : pickSeriesStroke(seriesIndex);
  return /* @__PURE__ */ jsxs4("g", { className: "fdp-line-series", "data-series": series.id, opacity: faded ? 0.25 : 1, "aria-hidden": faded ? true : void 0, children: [
    /* @__PURE__ */ jsx8("path", { d: path2, fill: "none", stroke: color2, strokeWidth, role: "presentation" }),
    showPoints && series.data.map((d, di) => {
      var _a2;
      const cx = xScale(parseX(d));
      const cy = yScale(d.y);
      const tabIndex = focusablePoints ? 0 : -1;
      const isFocusedPoint = !faded && (focusablePoints && di === focusIndex || ((_a2 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a2.seriesId) === series.id && tooltip.focused.index === di);
      const handleEnter = () => {
        if (tooltip && !faded) {
          tooltip.setFocused({ seriesId: series.id, index: di, x: parseX(d), y: d.y, clientX: cx, clientY: cy });
        }
      };
      const handleLeave = () => {
        var _a3;
        if (tooltip && ((_a3 = tooltip.focused) == null ? void 0 : _a3.seriesId) === series.id && tooltip.focused.index === di) tooltip.clear();
      };
      return /* @__PURE__ */ jsx8(
        "circle",
        {
          cx,
          cy,
          r: isFocusedPoint ? 5 : 3.5,
          stroke: isFocusedPoint ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : stroke,
          strokeWidth: isFocusedPoint ? 2 : 1,
          fill: color2,
          className: "fdp-line-point",
          tabIndex: faded ? -1 : tabIndex,
          "aria-label": `${series.label || series.id} ${parseX(d).toDateString()} value ${d.y}`,
          "data-series": series.id,
          "data-index": di,
          onMouseEnter: handleEnter,
          onFocus: handleEnter,
          onMouseLeave: handleLeave,
          onBlur: handleLeave
        },
        di
      );
    })
  ] });
};
var LineSeriesPrimitive_default = LineSeriesPrimitive;

// src/components/DataVisualisation/primitives/VisuallyHiddenLiveRegion.tsx
import * as React9 from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var VisuallyHiddenLiveRegion = ({ polite = true, format: format2 }) => {
  const tooltip = useTooltipContext();
  const [message, setMessage] = React9.useState("");
  const lastRef = React9.useRef("");
  React9.useEffect(() => {
    if (!(tooltip == null ? void 0 : tooltip.focused)) return;
    const { focused, aggregated } = tooltip;
    let msg;
    if (aggregated && aggregated.length > 1) {
      const parts = aggregated.map((a) => `${a.seriesId} ${a.y}`).join("; ");
      msg = `${focused.x.toDateString()} \u2013 ${parts}`;
    } else {
      msg = format2 ? format2({ seriesId: focused.seriesId, x: focused.x, y: focused.y, index: focused.index }) : defaultFormatter(focused.seriesId, focused.x, focused.y, focused.index);
    }
    if (msg !== lastRef.current) {
      lastRef.current = msg;
      setMessage("");
      const timeout = setTimeout(() => setMessage(msg), 10);
      return () => clearTimeout(timeout);
    }
  }, [tooltip == null ? void 0 : tooltip.focused, format2]);
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "aria-live": polite ? "polite" : "assertive",
      "aria-atomic": "true",
      style: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", border: 0 },
      children: message
    }
  );
};
function defaultFormatter(seriesId, x2, y2, index) {
  return `Series ${seriesId}, point ${index + 1}, ${x2.toDateString()}, value ${y2}`;
}
var VisuallyHiddenLiveRegion_default = VisuallyHiddenLiveRegion;

// src/components/DataVisualisation/primitives/TooltipOverlay.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var TooltipOverlay = () => {
  const tooltip = useTooltipContext();
  const chart = useChartContext();
  if (!tooltip || !chart || !tooltip.focused) return null;
  const { focused, aggregated } = tooltip;
  const { innerWidth, innerHeight } = chart;
  const clampX = Math.min(Math.max(focused.clientX, 0), innerWidth);
  const clampY = Math.min(Math.max(focused.clientY, 0), innerHeight);
  const bgX = clampX + 8;
  const bgY = clampY - 8;
  const multi = aggregated.length > 1;
  const label = multi ? focused.x.toDateString() : `${focused.x.toDateString()} \u2022 ${focused.y}`;
  const idDigits = /\d+$/.exec(focused.seriesId || "");
  const seriesIdx = idDigits ? parseInt(idDigits[0], 10) - 1 : 0;
  const seriesColor = pickSeriesColor(seriesIdx >= 0 ? seriesIdx : 0) || "#005eb8";
  const focusYellow = "var(--nhs-fdp-color-primary-yellow,#ffeb3b)";
  return /* @__PURE__ */ jsxs5("g", { className: "fdp-tooltip-layer", pointerEvents: "none", children: [
    /* @__PURE__ */ jsx10("circle", { cx: clampX, cy: clampY, r: 7, fill: "none", stroke: focusYellow, strokeWidth: 3 }),
    /* @__PURE__ */ jsx10("circle", { cx: clampX, cy: clampY, r: 5, fill: "#000", stroke: focusYellow, strokeWidth: 1.5 }),
    /* @__PURE__ */ jsx10("circle", { cx: clampX, cy: clampY, r: 2.5, fill: seriesColor, stroke: "#fff", strokeWidth: 0.5 }),
    multi ? (() => {
      const lineHeight = 16;
      const rows = aggregated.map((a) => `${a.seriesId}: ${a.y}`);
      const content = [label, ...rows];
      const maxChars = content.reduce((m, s) => Math.max(m, s.length), 0);
      const width = Math.max(90, maxChars * 6.2 + 16);
      const height = lineHeight * content.length + 8;
      return /* @__PURE__ */ jsxs5("g", { children: [
        /* @__PURE__ */ jsx10("rect", { x: bgX, y: bgY - height, rx: 4, ry: 4, width, height, fill: "#212b32", opacity: 0.92 }),
        content.map((t, i) => /* @__PURE__ */ jsx10("text", { x: bgX + 8, y: bgY - height + 6 + lineHeight * (i + 0.7), fill: "#fff", fontSize: 12, children: t }, i))
      ] });
    })() : /* @__PURE__ */ jsxs5("g", { children: [
      /* @__PURE__ */ jsx10("rect", { x: bgX, y: bgY - 24, rx: 4, ry: 4, width: Math.max(60, label.length * 6.2), height: 24, fill: "#212b32", opacity: 0.92 }),
      /* @__PURE__ */ jsx10("text", { x: bgX + 8, y: bgY - 8, fill: "#fff", fontSize: 12, children: label })
    ] })
  ] });
};
var TooltipOverlay_default = TooltipOverlay;

// src/components/DataVisualisation/charts/LineChart.tsx
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var InternalLineChart = ({
  series,
  yLabel,
  ariaLabel = "Line chart",
  showPoints = true,
  focusablePoints = true,
  palette = "categorical",
  dateFormatter,
  valueFormatter,
  xTickValues,
  alignXTicksToData = false,
  announceFocus = true,
  showTooltipOverlay = true,
  padXDomain = true,
  wrapAroundNav = false,
  keyboardNav = false,
  visibilityMode = "remove",
  recomputeYDomainOnHidden = false,
  strokeWidth = 1,
  smooth = true,
  providedDims
}) => {
  const contextDims = useChartContext();
  const dims = providedDims || contextDims || useChartDimensions({ bottom: 48, left: 56, right: 16, top: 12 });
  const scaleCtx = useScaleContext();
  const visibility = useVisibility();
  const visibleSeries = React10.useMemo(() => {
    if (!visibility) return series;
    return series.filter((s) => !visibility.isHidden(s.id));
  }, [series, visibility]);
  const allData = React10.useMemo(() => {
    if (recomputeYDomainOnHidden && visibility) return visibleSeries.flatMap((s) => s.data);
    return series.flatMap((s) => s.data);
  }, [series, visibleSeries, recomputeYDomainOnHidden, visibility]);
  const parseX = React10.useCallback((d) => d.x instanceof Date ? d.x : new Date(d.x), []);
  const xScale = scaleCtx ? scaleCtx.xScale : React10.useMemo(() => {
    if (!padXDomain) return createXTimeScale(allData, parseX, [0, dims.innerWidth]);
    const times = allData.map((d) => parseX(d).getTime()).sort((a, b) => a - b);
    if (times.length === 0) return createXTimeScale(allData, parseX, [0, dims.innerWidth]);
    let step;
    if (times.length === 1) {
      step = 24 * 3600 * 1e3;
    } else {
      const diffs = [];
      for (let i = 1; i < times.length; i++) diffs.push(times[i] - times[i - 1]);
      diffs.sort((a, b) => a - b);
      step = diffs[Math.floor(diffs.length / 2)] || (times[times.length - 1] - times[0]) / (times.length - 1);
    }
    const pad2 = step / 2;
    const domain = [new Date(times[0] - pad2), new Date(times[times.length - 1] + pad2)];
    return time().domain(domain).range([0, dims.innerWidth]);
  }, [allData, parseX, dims.innerWidth, padXDomain]);
  const yScale = scaleCtx ? scaleCtx.yScale : React10.useMemo(() => createYLinearScale(allData, (d) => d.y, [dims.innerHeight, 0]), [allData, dims.innerHeight]);
  const formatDate = dateFormatter || ((d) => d.toLocaleDateString(void 0, { month: "short", day: "numeric" }));
  const computedDataTickValues = React10.useMemo(() => {
    if (xTickValues && xTickValues.length) return xTickValues.map((v) => v instanceof Date ? v : new Date(v));
    if (!alignXTicksToData) return [];
    const set = /* @__PURE__ */ new Set();
    for (const d of allData) set.add(parseX(d).getTime());
    return Array.from(set).sort((a, b) => a - b).map((ms) => new Date(ms));
  }, [xTickValues, alignXTicksToData, allData, parseX]);
  const formatValue = valueFormatter || ((v) => String(v));
  const svgContent = /* @__PURE__ */ jsx11("svg", { width: dims.width, height: dims.height, role: "img", children: /* @__PURE__ */ jsxs6("g", { transform: `translate(${dims.margin.left},${dims.margin.top})`, children: [
    /* @__PURE__ */ jsx11(Axis_default, { type: "x", formatTick: formatDate, tickValues: computedDataTickValues.length ? computedDataTickValues : void 0 }),
    /* @__PURE__ */ jsx11(Axis_default, { type: "y", formatTick: formatValue, label: yLabel }),
    /* @__PURE__ */ jsx11(GridLines_default, { axis: "y" }),
    series.map((s, si) => /* @__PURE__ */ jsx11(
      LineSeriesPrimitive_default,
      {
        series: s,
        seriesIndex: si,
        palette,
        showPoints,
        focusablePoints,
        focusIndex: -1,
        parseX,
        visibilityMode,
        strokeWidth,
        smooth
      },
      s.id
    )),
    showTooltipOverlay && /* @__PURE__ */ jsx11(TooltipOverlay_default, {})
  ] }) });
  const KeyboardNavWrapper = ({ children }) => {
    const t = useTooltipContext();
    const onKeyDown = React10.useCallback((e) => {
      if (!t) return;
      switch (e.key) {
        case "ArrowRight":
          t.focusNextPoint();
          e.preventDefault();
          break;
        case "ArrowLeft":
          t.focusPrevPoint();
          e.preventDefault();
          break;
        case "ArrowDown":
          t.focusNextSeries();
          e.preventDefault();
          break;
        case "ArrowUp":
          t.focusPrevSeries();
          e.preventDefault();
          break;
        case "Home":
          t.focusFirstPoint();
          e.preventDefault();
          break;
        case "End":
          t.focusLastPoint();
          e.preventDefault();
          break;
        case "Escape":
          t.clear();
          e.preventDefault();
          break;
        default:
          break;
      }
    }, [t]);
    return /* @__PURE__ */ jsx11("div", { className: "fdp-line-chart", role: "group", "aria-label": ariaLabel, tabIndex: 0, onKeyDown, children });
  };
  const body = /* @__PURE__ */ jsx11(TooltipProvider, { wrapAround: wrapAroundNav, children: keyboardNav ? /* @__PURE__ */ jsxs6(KeyboardNavWrapper, { children: [
    svgContent,
    announceFocus && /* @__PURE__ */ jsx11(VisuallyHiddenLiveRegion_default, {})
  ] }) : /* @__PURE__ */ jsxs6("div", { className: "fdp-line-chart", role: "group", "aria-label": ariaLabel, children: [
    svgContent,
    announceFocus && /* @__PURE__ */ jsx11(VisuallyHiddenLiveRegion_default, {})
  ] }) });
  if (scaleCtx) return body;
  const value = {
    xScale,
    yScale,
    getXTicks: (c = 6) => xScale.ticks(c),
    getYTicks: (c = 5) => yScale.ticks(c)
  };
  return /* @__PURE__ */ jsx11(ScaleContext_default.Provider, { value, children: body });
};
var LineChart = (props) => {
  var _a;
  const ctx = useChartContext();
  const content = /* @__PURE__ */ jsx11(InternalLineChart, { ...props, providedDims: ctx });
  if (ctx) {
    return useScaleContext() ? content : /* @__PURE__ */ jsx11(LineScalesProvider, { series: props.series, innerWidth: ctx.innerWidth, innerHeight: ctx.innerHeight, children: content });
  }
  const ariaLabel = props.ariaLabel;
  return /* @__PURE__ */ jsx11(ChartRoot, { height: (_a = props.height) != null ? _a : 240, ariaLabel, margin: { bottom: 48, left: 56, right: 16, top: 12 }, children: /* @__PURE__ */ jsx11(InternalLineChart, { ...props }) });
};
var LineChart_default = LineChart;

// src/components/Tabs/Tabs.tsx
var import_classnames = __toESM(require_classnames(), 1);
import { useState as useState6, useCallback as useCallback6, useRef as useRef4, forwardRef, useImperativeHandle } from "react";
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var Tabs = forwardRef(({
  items,
  defaultActiveTab,
  activeTab: controlledActiveTab,
  onTabChange,
  onTabFocus,
  onTabListBlur,
  onEscape,
  autoActivate = true,
  className,
  id,
  "data-testid": testId,
  ...props
}, ref) => {
  const isControlled = controlledActiveTab !== void 0;
  const [internalActiveTab, setInternalActiveTab] = useState6(() => {
    var _a;
    return defaultActiveTab || ((_a = items[0]) == null ? void 0 : _a.id) || "";
  });
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;
  const tabListRef = useRef4(null);
  const tabRefs = useRef4(/* @__PURE__ */ new Map());
  const handleTabClick = useCallback6((tabId) => {
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onTabChange == null ? void 0 : onTabChange(tabId);
  }, [isControlled, onTabChange]);
  const handleTabFocus = useCallback6((tabId) => {
    onTabFocus == null ? void 0 : onTabFocus(tabId);
    if (autoActivate) {
      handleTabClick(tabId);
    }
  }, [onTabFocus, autoActivate, handleTabClick]);
  const handleKeyDown = useCallback6((event, tabId) => {
    const tabIds = items.filter((item) => !item.disabled).map((item) => item.id);
    const currentIndex = tabIds.indexOf(tabId);
    let newIndex = null;
    switch (event.key) {
      case "ArrowLeft":
        newIndex = currentIndex > 0 ? currentIndex - 1 : tabIds.length - 1;
        break;
      case "ArrowRight":
        newIndex = currentIndex < tabIds.length - 1 ? currentIndex + 1 : 0;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabIds.length - 1;
        break;
      case "Escape":
        event.preventDefault();
        onEscape == null ? void 0 : onEscape();
        return;
      default:
        return;
    }
    if (newIndex !== null) {
      event.preventDefault();
      const newTabId = tabIds[newIndex];
      const newTabRef = tabRefs.current.get(newTabId);
      if (newTabRef) {
        newTabRef.focus();
        handleTabFocus(newTabId);
      }
    }
  }, [items, handleTabFocus, onEscape]);
  const setTabRef = useCallback6((tabId, element) => {
    if (element) {
      tabRefs.current.set(tabId, element);
    } else {
      tabRefs.current.delete(tabId);
    }
  }, []);
  const focusTab = useCallback6((tabId) => {
    const tabRef = tabRefs.current.get(tabId);
    if (tabRef) {
      tabRef.focus();
    }
  }, []);
  useImperativeHandle(ref, () => ({
    focusTab,
    getActiveTab: () => activeTab,
    getTabListElement: () => tabListRef.current
  }), [focusTab, activeTab]);
  const handleTabListBlur = useCallback6((event) => {
    var _a;
    const relatedTarget = event.relatedTarget;
    if (!((_a = tabListRef.current) == null ? void 0 : _a.contains(relatedTarget))) {
      onTabListBlur == null ? void 0 : onTabListBlur();
    }
  }, [onTabListBlur]);
  const tabsClasses = (0, import_classnames.default)("nhsuk-tabs", className);
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: tabsClasses,
      id,
      "data-testid": testId,
      ...props,
      children: [
        /* @__PURE__ */ jsx12("h2", { className: "nhsuk-tabs__title", children: "Contents" }),
        /* @__PURE__ */ jsx12(
          "div",
          {
            className: "nhsuk-tabs__list-container",
            ref: tabListRef,
            children: /* @__PURE__ */ jsx12(
              "ul",
              {
                className: "nhsuk-tabs__list",
                role: "tablist",
                onBlur: handleTabListBlur,
                children: items.map((item) => {
                  const isActive = item.id === activeTab;
                  const isDisabled = item.disabled;
                  const tabClasses = (0, import_classnames.default)("nhsuk-tabs__list-item", {
                    "nhsuk-tabs__list-item--selected": isActive,
                    "nhsuk-tabs__list-item--disabled": isDisabled
                  });
                  return /* @__PURE__ */ jsx12("li", { className: tabClasses, role: "presentation", children: /* @__PURE__ */ jsx12(
                    "button",
                    {
                      ref: (element) => setTabRef(item.id, element),
                      className: "nhsuk-tabs__tab",
                      role: "tab",
                      "aria-selected": isActive,
                      "aria-controls": `${item.id}-panel`,
                      id: `${item.id}-tab`,
                      tabIndex: isActive ? 0 : -1,
                      disabled: isDisabled,
                      onClick: () => !isDisabled && handleTabClick(item.id),
                      onKeyDown: (event) => !isDisabled && handleKeyDown(event, item.id),
                      onFocus: () => !isDisabled && handleTabFocus(item.id),
                      ...item.attributes,
                      children: item.label
                    }
                  ) }, item.id);
                })
              }
            )
          }
        ),
        items.map((item) => {
          const isActive = item.id === activeTab;
          return /* @__PURE__ */ jsx12(
            "div",
            {
              className: "nhsuk-tabs__panel",
              role: "tabpanel",
              "aria-labelledby": `${item.id}-tab`,
              id: `${item.id}-panel`,
              hidden: !isActive,
              children: item.content
            },
            item.id
          );
        })
      ]
    }
  );
});

// src/components/Button/Button.tsx
import * as React12 from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var { forwardRef: forwardRef2, useCallback: useCallback7, useState: useState7 } = React12;
function ButtonComponent(props, ref) {
  const {
    children,
    variant = "primary",
    size = "default",
    fullWidth = false,
    className = "",
    preventDoubleClick = false,
    ...rest
  } = props;
  const [isPressed, setIsPressed] = useState7(false);
  const [isHovered, setIsHovered] = useState7(false);
  const [isFocused, setIsFocused] = useState7(false);
  const classes = [
    "nhs-aria-button",
    `nhs-aria-button--${variant}`,
    size !== "default" ? `nhs-aria-button--${size}` : "",
    fullWidth ? "nhs-aria-button--full-width" : "",
    className
  ].filter(Boolean).join(" ");
  const isDisabled = "disabled" in rest ? rest.disabled : rest["aria-disabled"] === "true";
  const dataAttributes = {
    ...isPressed && { "data-pressed": "true" },
    ...isHovered && { "data-hovered": "true" },
    ...isFocused && { "data-focused": "true" },
    ...isDisabled && { "data-disabled": "true" }
  };
  const handleMouseDown = useCallback7(() => !isDisabled && setIsPressed(true), [isDisabled]);
  const handleMouseUp = useCallback7(() => setIsPressed(false), []);
  const handleMouseEnter = useCallback7(() => !isDisabled && setIsHovered(true), [isDisabled]);
  const handleMouseLeave = useCallback7(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const handleFocus = useCallback7(() => setIsFocused(true), []);
  const handleBlur = useCallback7(() => setIsFocused(false), []);
  const handleKeyDown = useCallback7((event) => {
    if (event.key === " " && ("href" in rest || event.currentTarget.getAttribute("role") === "button")) {
      event.preventDefault();
      event.currentTarget.click();
    }
  }, [rest]);
  const handleClick = useCallback7((event) => {
    if (preventDoubleClick) {
      const target = event.currentTarget;
      const isAlreadyProcessing = target.getAttribute("data-processing") === "true";
      if (isAlreadyProcessing) {
        event.preventDefault();
        return;
      }
      target.setAttribute("data-processing", "true");
      setTimeout(() => {
        target.removeAttribute("data-processing");
      }, 1e3);
    }
  }, [preventDoubleClick]);
  if ("href" in rest && rest.href) {
    const { id: id2, style: style2, title: title2, ["aria-label"]: ariaLabel2, ["aria-describedby"]: ariaDescribedBy2, ["aria-labelledby"]: ariaLabelledBy2, tabIndex: tabIndex2, ...anchorRest } = rest;
    const anchorProps = rest;
    return /* @__PURE__ */ jsx13(
      "a",
      {
        ref,
        href: anchorProps.href,
        target: anchorProps.target,
        rel: anchorProps.rel,
        className: classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...dataAttributes,
        ...preventDoubleClick && { "data-prevent-double-click": "true" },
        ...anchorRest,
        onKeyDown: (event) => {
          var _a;
          (_a = anchorProps.onKeyDown) == null ? void 0 : _a.call(anchorProps, event);
          handleKeyDown(event);
        },
        onClick: (event) => {
          var _a;
          (_a = anchorProps.onClick) == null ? void 0 : _a.call(anchorProps, event);
          handleClick(event);
        },
        onMouseDown: (event) => {
          var _a;
          (_a = anchorProps.onMouseDown) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseDown();
        },
        onMouseUp: (event) => {
          var _a;
          (_a = anchorProps.onMouseUp) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseUp();
        },
        onMouseEnter: (event) => {
          var _a;
          (_a = anchorProps.onMouseEnter) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseEnter();
        },
        onMouseLeave: (event) => {
          var _a;
          (_a = anchorProps.onMouseLeave) == null ? void 0 : _a.call(anchorProps, event);
          handleMouseLeave();
        },
        onFocus: (event) => {
          var _a;
          (_a = anchorProps.onFocus) == null ? void 0 : _a.call(anchorProps, event);
          handleFocus();
        },
        onBlur: (event) => {
          var _a;
          (_a = anchorProps.onBlur) == null ? void 0 : _a.call(anchorProps, event);
          handleBlur();
        },
        "aria-disabled": anchorProps["aria-disabled"],
        ...anchorProps["aria-disabled"] === "true" && { "tabIndex": -1 },
        id: id2,
        style: style2,
        title: title2,
        "aria-label": ariaLabel2,
        "aria-describedby": ariaDescribedBy2,
        "aria-labelledby": ariaLabelledBy2,
        tabIndex: tabIndex2,
        children
      }
    );
  }
  const { id, style, title, ["aria-label"]: ariaLabel, ["aria-describedby"]: ariaDescribedBy, ["aria-labelledby"]: ariaLabelledBy, tabIndex, name, value: valueProp, form, formAction, formEncType, formMethod, formNoValidate, formTarget, autoFocus, ...buttonRest } = rest;
  const buttonProps = rest;
  return /* @__PURE__ */ jsx13(
    "button",
    {
      ref,
      type: buttonProps.type || "button",
      disabled: buttonProps.disabled,
      className: classes,
      "data-module": "nhs-button",
      ...dataAttributes,
      ...preventDoubleClick && { "data-prevent-double-click": "true" },
      ...buttonProps.disabled && { "aria-disabled": "true" },
      ...buttonRest,
      onKeyDown: (event) => {
        var _a;
        (_a = buttonProps.onKeyDown) == null ? void 0 : _a.call(buttonProps, event);
        handleKeyDown(event);
      },
      onClick: (event) => {
        var _a;
        (_a = buttonProps.onClick) == null ? void 0 : _a.call(buttonProps, event);
        handleClick(event);
      },
      onMouseDown: (event) => {
        var _a;
        (_a = buttonProps.onMouseDown) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseDown();
      },
      onMouseUp: (event) => {
        var _a;
        (_a = buttonProps.onMouseUp) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseUp();
      },
      onMouseEnter: (event) => {
        var _a;
        (_a = buttonProps.onMouseEnter) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseEnter();
      },
      onMouseLeave: (event) => {
        var _a;
        (_a = buttonProps.onMouseLeave) == null ? void 0 : _a.call(buttonProps, event);
        handleMouseLeave();
      },
      onFocus: (event) => {
        var _a;
        (_a = buttonProps.onFocus) == null ? void 0 : _a.call(buttonProps, event);
        handleFocus();
      },
      onBlur: (event) => {
        var _a;
        (_a = buttonProps.onBlur) == null ? void 0 : _a.call(buttonProps, event);
        handleBlur();
      },
      id,
      style,
      title,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-labelledby": ariaLabelledBy,
      tabIndex,
      name,
      value: valueProp,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      autoFocus,
      children
    }
  );
}
var Button = forwardRef2(ButtonComponent);
Button.displayName = "Button";
var Button_default = Button;

// src/components/Tables/Table.tsx
var import_classnames4 = __toESM(require_classnames(), 1);

// src/components/Panel/Panel.tsx
var import_classnames3 = __toESM(require_classnames(), 1);

// src/components/Heading/Heading.tsx
var import_classnames2 = __toESM(require_classnames(), 1);
import { createElement } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var Heading = ({
  level,
  className,
  text,
  html,
  children,
  size,
  marginBottom,
  ...props
}) => {
  const getDefaultLevelFromSize = (size2) => {
    switch (size2) {
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
  };
  const headingLevel = level != null ? level : getDefaultLevelFromSize(size);
  const headingClasses = (0, import_classnames2.default)(
    "nhsuk-heading",
    {
      [`nhsuk-heading--${size}`]: size
    },
    className
  );
  const content = children || (html ? /* @__PURE__ */ jsx14("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  const tagName = `h${headingLevel}`;
  const style = marginBottom ? { ...props.style, marginBottom } : props.style;
  return createElement(
    tagName,
    { className: headingClasses, ...props, style },
    content
  );
};

// src/components/Panel/Panel.tsx
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var Panel = ({
  id,
  className,
  headingText,
  headingHtml,
  headingLevel = 2,
  bodyText,
  bodyHtml,
  children,
  ...props
}) => {
  const panelClasses = (0, import_classnames3.default)(
    "nhsuk-panel",
    className
  );
  const renderHeading = () => {
    if (!headingText && !headingHtml && !children) return null;
    if (headingHtml) {
      return /* @__PURE__ */ jsx15(
        Heading,
        {
          level: headingLevel,
          className: "nhsuk-panel__heading",
          html: headingHtml,
          marginBottom: "var(--panel-heading-margin, 24px)"
        }
      );
    }
    if (headingText) {
      return /* @__PURE__ */ jsx15(
        Heading,
        {
          level: headingLevel,
          className: "nhsuk-panel__heading",
          text: headingText,
          marginBottom: "var(--panel-heading-margin, 24px)"
        }
      );
    }
    return null;
  };
  const renderBody = () => {
    if (children) {
      return /* @__PURE__ */ jsx15("div", { className: "nhsuk-panel__body", children });
    }
    if (bodyHtml) {
      return /* @__PURE__ */ jsx15(
        "div",
        {
          className: "nhsuk-panel__body",
          dangerouslySetInnerHTML: { __html: bodyHtml }
        }
      );
    }
    if (bodyText) {
      return /* @__PURE__ */ jsx15("div", { className: "nhsuk-panel__body", children: /* @__PURE__ */ jsx15("p", { children: bodyText }) });
    }
    return null;
  };
  return /* @__PURE__ */ jsxs8("div", { className: panelClasses, id, ...props, children: [
    renderHeading(),
    renderBody()
  ] });
};

// src/components/Tables/Table.tsx
import { Fragment, jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
var Table = ({
  rows,
  head,
  caption,
  captionSize,
  firstCellIsHeader = false,
  responsive = false,
  heading,
  headingLevel = 3,
  panel = false,
  panelClasses,
  tableClasses,
  classes,
  attributes,
  "data-testid": testId
}) => {
  const captionClass = `nhsuk-table__caption ${captionSize ? `nhsuk-table__caption--${captionSize}` : ""}`.trim();
  const tableClassList = (0, import_classnames4.default)(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": responsive
    },
    tableClasses
  );
  const containerClassList = (0, import_classnames4.default)(classes);
  const renderHeaderCell = (cell, index) => {
    const headerClasses = (0, import_classnames4.default)("nhsuk-table__header", {
      [`nhsuk-table__header--${cell.format}`]: cell.format
    }, cell.classes);
    const headerAttributes = {
      scope: "col",
      ...cell.colspan && { colSpan: cell.colspan },
      ...cell.rowspan && { rowSpan: cell.rowspan },
      ...responsive && { role: "columnheader" },
      ...cell.attributes
    };
    return /* @__PURE__ */ jsx16("th", { className: headerClasses, ...headerAttributes, children: cell.html ? /* @__PURE__ */ jsx16("span", { dangerouslySetInnerHTML: { __html: cell.html } }) : cell.text }, index);
  };
  const renderCell = (cell, cellIndex, isFirstCell) => {
    const isHeaderCell = firstCellIsHeader && isFirstCell;
    const cellClasses = (0, import_classnames4.default)(
      isHeaderCell ? "nhsuk-table__header" : "nhsuk-table__cell",
      {
        [`nhsuk-table__${isHeaderCell ? "header" : "cell"}--${cell.format}`]: cell.format
      },
      cell.classes
    );
    const cellAttributes = {
      ...isHeaderCell && { scope: "row" },
      ...cell.colspan && { colSpan: cell.colspan },
      ...cell.rowspan && { rowSpan: cell.rowspan },
      ...responsive && {
        role: isHeaderCell ? "rowheader" : "cell",
        ...cell.header && { "data-label": cell.header }
      },
      ...cell.attributes
    };
    const cellContent = /* @__PURE__ */ jsxs9(Fragment, { children: [
      responsive && cell.header && /* @__PURE__ */ jsxs9("span", { className: "nhsuk-table-responsive__heading", "aria-hidden": "true", children: [
        cell.header,
        " "
      ] }),
      cell.html ? /* @__PURE__ */ jsx16("span", { dangerouslySetInnerHTML: { __html: cell.html } }) : cell.text
    ] });
    const Component = isHeaderCell ? "th" : "td";
    return /* @__PURE__ */ jsx16(Component, { className: cellClasses, ...cellAttributes, children: cellContent }, cellIndex);
  };
  const renderTable = () => /* @__PURE__ */ jsxs9(
    "table",
    {
      className: tableClassList,
      ...responsive && { role: "table" },
      ...attributes,
      ...testId && { "data-testid": testId },
      children: [
        caption && /* @__PURE__ */ jsx16("caption", { className: captionClass, children: caption }),
        head && head.length > 0 && /* @__PURE__ */ jsx16(
          "thead",
          {
            className: "nhsuk-table__head",
            ...responsive && { role: "rowgroup" },
            children: /* @__PURE__ */ jsx16("tr", { ...responsive && { role: "row" }, children: head.map((cell, index) => renderHeaderCell(cell, index)) })
          }
        ),
        /* @__PURE__ */ jsx16("tbody", { className: "nhsuk-table__body", children: rows && rows.map((row, rowIndex) => /* @__PURE__ */ jsx16(
          "tr",
          {
            className: "nhsuk-table__row",
            ...responsive && { role: "row" },
            children: row.map(
              (cell, cellIndex) => renderCell(cell, cellIndex, cellIndex === 0)
            )
          },
          rowIndex
        )) })
      ]
    }
  );
  if (panel) {
    return /* @__PURE__ */ jsxs9(Panel, { className: panelClasses, children: [
      heading && /* @__PURE__ */ jsx16(Heading, { level: headingLevel, className: "nhsuk-table__heading-tab", children: heading }),
      renderTable()
    ] });
  }
  if (containerClassList) {
    return /* @__PURE__ */ jsx16("div", { className: containerClassList, children: renderTable() });
  }
  return renderTable();
};
var Table_default = Table;

// src/components/DataVisualisation/ChartWithTableTabs.tsx
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
var ChartWithTableTabs = ({
  chart,
  table,
  autoTableFromSeries,
  columnAlign,
  enableDownload = false,
  downloadFilename,
  chartTabLabel = "Chart",
  tableTabLabel = "Data table",
  initialView = "chart",
  disableTabs = false,
  hideTable = false,
  additionalTabs,
  onViewChange,
  title,
  description,
  source,
  width,
  height,
  className,
  id,
  initiallyShowTable,
  ...restContainer
}) => {
  let resolvedTable = table;
  if (!resolvedTable && autoTableFromSeries && autoTableFromSeries.length > 0 && !hideTable) {
    const heads = [
      { text: "Date", classes: "nhsuk-table__header--align-left" },
      ...autoTableFromSeries.map((s) => ({
        text: s.label || s.id,
        classes: "nhsuk-table__header--align-left"
      }))
    ];
    const longest = autoTableFromSeries.reduce((a, b) => b.data.length > a.data.length ? b : a, autoTableFromSeries[0]);
    const rows = longest.data.map((d, rowIdx) => {
      const dateCell = { text: new Date(d.x).toLocaleDateString(), classes: "nhsuk-table__cell--align-left" };
      const seriesCells = autoTableFromSeries.map((s) => {
        const point3 = s.data[rowIdx];
        const yVal = point3 ? point3.y : void 0;
        return {
          text: yVal === void 0 || yVal === null ? "\u2013" : String(yVal),
          classes: "nhsuk-table__cell--align-left",
          header: s.label || s.id
        };
      });
      return [dateCell, ...seriesCells];
    });
    const filenameBase = downloadFilename || (title ? title.replace(/[^a-z0-9]+/gi, "-").toLowerCase() : "chart-data");
    const toCsv = () => {
      const headerLine = heads.map((h) => '"' + (h.text || "") + '"').join(",");
      const body = rows.map((r2) => r2.map((c) => {
        var _a;
        return '"' + ((_a = c.text) != null ? _a : "") + '"';
      }).join(",")).join("\n");
      return headerLine + "\n" + body + "\n";
    };
    const handleDownload = () => {
      try {
        const blob = new Blob([toCsv()], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.href = url;
        link.download = `${filenameBase}.csv`;
        link.style.display = "none";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } catch (e) {
        console.warn("CSV download failed", e);
      }
    };
    resolvedTable = /* @__PURE__ */ jsxs10("div", { className: "fdp-chart__auto-table", children: [
      enableDownload && /* @__PURE__ */ jsx17("div", { className: "fdp-chart__download-row", children: /* @__PURE__ */ jsx17(Button_default, { variant: "secondary", onClick: handleDownload, size: "small", children: "Download CSV" }) }),
      /* @__PURE__ */ jsx17(
        Table_default,
        {
          caption: `${title} data`,
          head: heads,
          rows,
          responsive: true
        }
      )
    ] });
  }
  const hasTable = !!resolvedTable && !hideTable;
  const shouldUseTabs = !disableTabs && hasTable;
  if (!shouldUseTabs) {
    return /* @__PURE__ */ jsx17(
      ChartContainer_default,
      {
        title,
        description,
        source,
        width,
        height,
        className,
        id,
        initiallyShowTable: false,
        ...restContainer,
        children: chart
      }
    );
  }
  const baseTabs = [
    {
      id: "chart",
      label: chartTabLabel,
      content: /* @__PURE__ */ jsx17(
        ChartContainer_default,
        {
          title,
          description,
          source,
          width,
          height,
          className,
          id,
          initiallyShowTable: false,
          ...restContainer,
          children: chart
        }
      )
    },
    {
      id: "table",
      label: tableTabLabel,
      content: /* @__PURE__ */ jsx17("div", { className: "fdp-chart-table-wrapper", "aria-label": `${title} data table`, children: resolvedTable })
    }
  ];
  const items = additionalTabs ? [...baseTabs, ...additionalTabs] : baseTabs;
  return /* @__PURE__ */ jsx17("div", { className: "fdp-chart-tabs", "data-chart-with-table": true, children: /* @__PURE__ */ jsx17(
    Tabs,
    {
      items,
      defaultActiveTab: initialView,
      onTabChange: (tabId) => {
        if (tabId === "chart" || tabId === "table") {
          onViewChange == null ? void 0 : onViewChange(tabId);
        } else {
          onViewChange == null ? void 0 : onViewChange(tabId);
        }
      }
    }
  ) });
};
var ChartWithTableTabs_default = ChartWithTableTabs;

// src/components/DataVisualisation/primitives/Legend.tsx
import * as React14 from "react";
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
var Legend = ({
  items: itemsProp,
  palette = "categorical",
  direction = "row",
  interactive = false,
  adjustStrokeForWhiteBackground = true,
  hiddenIds,
  defaultHiddenIds = [],
  onVisibilityChange,
  formatAnnouncement
}) => {
  const visibility = useVisibility();
  const contextInteractive = !!(visibility && !interactive && !onVisibilityChange && hiddenIds === void 0);
  const effectiveInteractive = interactive || contextInteractive;
  const items = itemsProp || [];
  const controlled = hiddenIds !== void 0;
  const [internalHidden, setInternalHidden] = React14.useState(new Set(defaultHiddenIds));
  const effectiveHidden = controlled ? new Set(hiddenIds) : internalHidden;
  const [announcement, setAnnouncement] = React14.useState("");
  const toggle = (id) => {
    if (contextInteractive && visibility) {
      const wasHidden2 = visibility.isHidden(id);
      visibility.toggle(id);
      const item2 = items.find((i) => i.id === id);
      const label2 = (item2 == null ? void 0 : item2.label) || id;
      const msg2 = formatAnnouncement ? formatAnnouncement(id, wasHidden2, label2) : `${label2} ${wasHidden2 ? "shown" : "hidden"}`;
      setAnnouncement(msg2);
      return;
    }
    if (!effectiveInteractive) return;
    const next = new Set(effectiveHidden);
    const wasHidden = next.has(id);
    if (wasHidden) next.delete(id);
    else next.add(id);
    if (!controlled) setInternalHidden(next);
    const visibleIds = items.filter((i) => !next.has(i.id)).map((i) => i.id);
    const hiddenNow = Array.from(next);
    onVisibilityChange == null ? void 0 : onVisibilityChange(visibleIds, hiddenNow);
    const item = items.find((i) => i.id === id);
    const label = (item == null ? void 0 : item.label) || id;
    const msg = formatAnnouncement ? formatAnnouncement(id, wasHidden, label) : `${label} ${wasHidden ? "shown" : "hidden"}`;
    setAnnouncement(msg);
  };
  return /* @__PURE__ */ jsxs11("div", { className: "fdp-legend-wrapper", children: [
    /* @__PURE__ */ jsx18("ul", { className: `fdp-legend fdp-legend--${direction}`, children: items.map((item, i) => {
      const fill = item.color || (palette === "region" ? pickRegionColor(item.id, i) : pickSeriesColor(i));
      let stroke = item.stroke || (palette === "region" ? pickRegionStroke(item.id, i) : pickSeriesStroke(i));
      if (adjustStrokeForWhiteBackground && stroke) {
        const norm = stroke.trim().toLowerCase();
        if (norm === "#fff" || norm === "#ffffff" || norm === "white" || /^rgb\(\s*255\s*,\s*255\s*,\s*255\s*\)$/.test(norm)) {
          stroke = "#212b32";
        }
      }
      const hidden = contextInteractive && visibility ? visibility.isHidden(item.id) : effectiveHidden.has(item.id);
      const btnProps = effectiveInteractive ? {
        "aria-pressed": !hidden,
        "aria-label": `${item.label} (${hidden ? "show" : "hide"})`,
        onClick: () => toggle(item.id)
      } : { "aria-label": item.label };
      return /* @__PURE__ */ jsxs11("li", { className: `fdp-legend__item${hidden ? " fdp-legend__item--hidden" : ""}`, children: [
        /* @__PURE__ */ jsx18(
          "button",
          {
            type: "button",
            className: "fdp-legend__swatch",
            style: { background: fill, borderColor: stroke },
            ...btnProps
          }
        ),
        /* @__PURE__ */ jsx18("span", { className: "fdp-legend__label", children: item.label })
      ] }, item.id);
    }) }),
    effectiveInteractive && /* @__PURE__ */ jsx18("div", { className: "fdp-visually-hidden", "aria-live": "polite", "aria-atomic": "true", children: announcement })
  ] });
};
var Legend_default = Legend;

// src/components/DataVisualisation/FilterableLineChart.tsx
import * as React15 from "react";
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var FilterableLineChart = ({
  series,
  legendPosition = "top",
  initialHiddenIds = [],
  hiddenIds,
  onHiddenChange,
  legendProps,
  assignColors = true,
  palette = "categorical",
  ...lineChartProps
}) => {
  const coloured = React15.useMemo(() => assignColors ? assignSeriesColors(series, { palette }) : series, [series, assignColors, palette]);
  const controlled = hiddenIds !== void 0;
  const [internalHidden, setInternalHidden] = React15.useState(new Set(initialHiddenIds));
  const hiddenSet = controlled ? new Set(hiddenIds) : internalHidden;
  const visibleSeries = React15.useMemo(() => coloured.filter((s) => !hiddenSet.has(s.id)), [coloured, hiddenSet]);
  const handleVisibilityChange = React15.useCallback((_visibleIds, nextHiddenIds) => {
    if (!controlled) setInternalHidden(new Set(nextHiddenIds));
    const visibleIds = coloured.filter((s) => !nextHiddenIds.includes(s.id)).map((s) => s.id);
    onHiddenChange == null ? void 0 : onHiddenChange(nextHiddenIds, visibleIds);
  }, [controlled, coloured, onHiddenChange]);
  const legendItems = React15.useMemo(() => coloured.map((s) => ({ id: s.id, label: s.label || s.id, color: s.color })), [coloured]);
  const chartEl = /* @__PURE__ */ jsx19(LineChart_default, { ...lineChartProps, series: visibleSeries, palette });
  const legendEl = /* @__PURE__ */ jsx19(
    Legend_default,
    {
      ...legendProps,
      palette,
      items: legendItems,
      interactive: true,
      hiddenIds: Array.from(hiddenSet),
      onVisibilityChange: handleVisibilityChange
    }
  );
  return /* @__PURE__ */ jsxs12("div", { className: "fdp-filterable-line-chart", children: [
    legendPosition === "top" && legendEl,
    chartEl,
    legendPosition === "bottom" && legendEl
  ] });
};
var FilterableLineChart_default = FilterableLineChart;

// src/components/DataVisualisation/series/AreaSeriesPrimitive.tsx
import * as React16 from "react";
import { jsx as jsx20, jsxs as jsxs13 } from "react/jsx-runtime";
var AreaSeriesPrimitive = ({
  series,
  seriesIndex,
  palette,
  parseX,
  areaOnly = false,
  visibilityMode = "remove",
  baselineY = 0,
  smooth = true
}) => {
  var _a;
  const scaleCtx = useScaleContext();
  if (!scaleCtx) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = (_a = visibility == null ? void 0 : visibility.isHidden(series.id)) != null ? _a : false;
  const faded = isHidden && visibilityMode === "fade";
  if (isHidden && visibilityMode === "remove") return null;
  const tooltip = useTooltipContext();
  React16.useEffect(() => {
    if (!tooltip) return;
    const normalized = series.data.map((d) => ({ x: parseX(d), y: d.y }));
    tooltip.registerSeries(series.id, normalized);
    return () => tooltip.unregisterSeries(series.id);
  }, [tooltip, series.id, series.data, parseX]);
  const color2 = series.color || (palette === "region" ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));
  const linePath = React16.useMemo(() => createLinePath(series.data, (d) => xScale(parseX(d)), (d) => yScale(d.y), { smooth }), [series.data, xScale, yScale, parseX, smooth]);
  const areaPath = React16.useMemo(() => {
    const gen = area_default().x((d) => xScale(parseX(d))).y0(() => yScale(baselineY)).y1((d) => yScale(d.y));
    if (smooth) gen.curve(monotoneX);
    return gen(series.data) || "";
  }, [series.data, xScale, yScale, parseX, baselineY, smooth]);
  return /* @__PURE__ */ jsxs13("g", { className: "fdp-area-series", "data-series": series.id, opacity: faded ? 0.25 : 1, "aria-hidden": faded ? true : void 0, children: [
    /* @__PURE__ */ jsx20("path", { d: areaPath, fill: color2, fillOpacity: 0.25, stroke: "none" }),
    !areaOnly && /* @__PURE__ */ jsx20("path", { d: linePath, fill: "none", stroke: color2, strokeWidth: 1 })
  ] });
};
var AreaSeriesPrimitive_default = AreaSeriesPrimitive;

// src/components/DataVisualisation/series/BarSeriesPrimitive.tsx
import * as React17 from "react";
import { jsx as jsx21 } from "react/jsx-runtime";
var BarSeriesPrimitive = ({
  series,
  seriesIndex,
  seriesCount,
  palette,
  parseX,
  focusable = true,
  widthFactor = 0.8,
  groupGap = 2,
  barWidth,
  adaptive = false,
  adaptiveGroupOccupancy = 0.9,
  visibilityMode = "remove",
  colorMode = "series",
  allSeries
}) => {
  var _a;
  const scaleCtx = useScaleContext();
  const chartDims = useChartContext();
  if (!scaleCtx || !chartDims) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = (_a = visibility == null ? void 0 : visibility.isHidden(series.id)) != null ? _a : false;
  const faded = isHidden && visibilityMode === "fade";
  if (isHidden && visibilityMode === "remove") return null;
  const tooltip = useTooltipContext();
  React17.useEffect(() => {
    if (!tooltip) return;
    const normalized = series.data.map((d) => ({ x: parseX(d), y: d.y }));
    tooltip.registerSeries(series.id, normalized);
    return () => tooltip.unregisterSeries(series.id);
  }, [tooltip, series.id, series.data, parseX]);
  const isBandScale = typeof xScale.bandwidth === "function";
  const bandwidth = isBandScale ? xScale.bandwidth() : void 0;
  const inferredPixelWidth = React17.useMemo(() => {
    if (bandwidth != null) return bandwidth;
    const sourceSeries = allSeries && allSeries.length ? allSeries : [series];
    const posSet = [];
    sourceSeries.forEach((s) => {
      s.data.forEach((d) => {
        const v = xScale(parseX(d));
        if (Number.isFinite(v)) posSet.push(v);
      });
    });
    const pxPositions = posSet.sort((a, b) => a - b);
    if (pxPositions.length <= 1) return 40;
    const diffs = [];
    for (let i = 1; i < pxPositions.length; i++) diffs.push(pxPositions[i] - pxPositions[i - 1]);
    diffs.sort((a, b) => a - b);
    const median = diffs[Math.floor(diffs.length / 2)] || 40;
    return median * widthFactor;
  }, [series.data, allSeries, xScale, parseX, widthFactor, bandwidth]);
  const { groupTotalWidth, basePerBar } = React17.useMemo(() => {
    var _a2, _b;
    if (isBandScale) {
      const bw = inferredPixelWidth;
      const autoPerBar = Math.max(1, (bw - groupGap * (seriesCount - 1)) / seriesCount);
      const explicit2 = (_a2 = series.barWidth) != null ? _a2 : barWidth;
      let finalPerBar = explicit2 ? Math.min(explicit2, bw) : autoPerBar;
      if (adaptive) {
        const targetGroup = bw * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
        const adaptedPerBar = Math.max(1, (targetGroup - groupGap * (seriesCount - 1)) / seriesCount);
        finalPerBar = explicit2 ? Math.min(finalPerBar, adaptedPerBar) : adaptedPerBar;
      }
      const total2 = finalPerBar * seriesCount + groupGap * (seriesCount - 1);
      return { groupTotalWidth: total2, basePerBar: finalPerBar };
    }
    const explicit = (_b = series.barWidth) != null ? _b : barWidth;
    const maxAutoPer = Math.max(1, (inferredPixelWidth - groupGap * (seriesCount - 1)) / seriesCount);
    if (adaptive) {
      const sourceSeries = allSeries && allSeries.length ? allSeries : [series];
      const positions = [];
      sourceSeries.forEach((s) => s.data.forEach((d) => {
        const v = xScale(parseX(d));
        if (Number.isFinite(v)) positions.push(v);
      }));
      positions.sort((a, b) => a - b);
      const diffs = [];
      for (let i = 1; i < positions.length; i++) diffs.push(positions[i] - positions[i - 1]);
      diffs.sort((a, b) => a - b);
      const step = diffs[Math.floor(diffs.length / 2)] || inferredPixelWidth;
      const targetGroup = step * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
      const adaptivePer = Math.max(1, (targetGroup - groupGap * (seriesCount - 1)) / seriesCount);
      const finalPer = explicit ? Math.min(explicit, adaptivePer) : adaptivePer;
      const total2 = finalPer * seriesCount + groupGap * (seriesCount - 1);
      return { groupTotalWidth: total2, basePerBar: finalPer };
    }
    if (explicit) {
      const finalPer = Math.min(explicit, maxAutoPer);
      const total2 = finalPer * seriesCount + groupGap * (seriesCount - 1);
      return { groupTotalWidth: total2, basePerBar: finalPer };
    }
    const total = maxAutoPer * seriesCount + groupGap * (seriesCount - 1);
    return { groupTotalWidth: total, basePerBar: maxAutoPer };
  }, [isBandScale, inferredPixelWidth, groupGap, seriesCount, barWidth, series.barWidth, adaptive, adaptiveGroupOccupancy, allSeries, xScale, parseX]);
  const globalCenters = React17.useMemo(() => {
    if (isBandScale) return [];
    const pts = [];
    const src = allSeries && allSeries.length ? allSeries : [series];
    src.forEach((s) => s.data.forEach((pt) => {
      const v = xScale(parseX(pt));
      if (Number.isFinite(v)) pts.push(v);
    }));
    pts.sort((a, b) => a - b);
    return Array.from(new Set(pts));
  }, [isBandScale, allSeries, series, xScale, parseX]);
  const uniformContinuousBarWidth = React17.useMemo(() => {
    if (isBandScale) return void 0;
    if (!globalCenters.length) return basePerBar;
    const steps = [];
    for (let i = 1; i < globalCenters.length; i++) steps.push(globalCenters[i] - globalCenters[i - 1]);
    steps.sort((a, b) => a - b);
    const medianStep = steps.length ? steps[Math.floor(steps.length / 2)] : basePerBar * seriesCount + groupGap * (seriesCount - 1);
    const pseudoFirstPrev = globalCenters[0] - medianStep;
    const pseudoLastNext = globalCenters[globalCenters.length - 1] + medianStep;
    const localSpans = [];
    for (let i = 0; i < globalCenters.length; i++) {
      const c = globalCenters[i];
      const prev = i > 0 ? globalCenters[i - 1] : pseudoFirstPrev;
      const next = i < globalCenters.length - 1 ? globalCenters[i + 1] : pseudoLastNext;
      const leftBound = (prev + c) / 2;
      const rightBound = (c + next) / 2;
      localSpans.push(Math.max(1, rightBound - leftBound));
    }
    const minLocalSpan = Math.min(...localSpans);
    const desiredGroupWidth = medianStep * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
    const finalGroupWidth = Math.min(desiredGroupWidth, minLocalSpan - 0.5, groupTotalWidth);
    const per = Math.max(1, (finalGroupWidth - groupGap * (seriesCount - 1)) / seriesCount);
    return Math.min(per, basePerBar);
  }, [isBandScale, globalCenters, basePerBar, groupTotalWidth, seriesCount, groupGap, adaptiveGroupOccupancy]);
  const baseSeriesColor = series.color || (palette === "region" ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));
  const baseSeriesStroke = palette === "region" ? pickRegionStroke(series.id, seriesIndex) : pickSeriesStroke(seriesIndex);
  const baselineY = Number.isFinite(yScale(0)) ? yScale(0) : yScale.range()[0];
  return /* @__PURE__ */ jsx21("g", { className: "fdp-bar-series", "data-series": series.id, opacity: faded ? 0.25 : 1, "aria-hidden": faded ? true : void 0, children: series.data.map((d, di) => {
    var _a2;
    const rawX = parseX(d);
    const xPos = isBandScale ? xScale(d.x) : xScale(rawX);
    let barX;
    let barWidth2;
    if (isBandScale) {
      const groupWidth = inferredPixelWidth;
      const available = groupWidth - (seriesCount - 1) * groupGap;
      barWidth2 = Math.max(1, available / seriesCount);
      barX = xPos + seriesIndex * (barWidth2 + groupGap);
    } else {
      const xCenter = xPos;
      const centerIndex = globalCenters.indexOf(xCenter);
      let prevCenter = centerIndex > 0 ? globalCenters[centerIndex - 1] : globalCenters[0] - (uniformContinuousBarWidth * seriesCount + groupGap * (seriesCount - 1)) / Math.max(0.05, adaptiveGroupOccupancy);
      let nextCenter = centerIndex < globalCenters.length - 1 ? globalCenters[centerIndex + 1] : globalCenters[globalCenters.length - 1] + (uniformContinuousBarWidth * seriesCount + groupGap * (seriesCount - 1)) / Math.max(0.05, adaptiveGroupOccupancy);
      const leftBound = (prevCenter + xCenter) / 2;
      const rightBound = (xCenter + nextCenter) / 2;
      const per = uniformContinuousBarWidth != null ? uniformContinuousBarWidth : basePerBar;
      const totalGroup = per * seriesCount + groupGap * (seriesCount - 1);
      let groupLeft = xCenter - totalGroup / 2;
      if (groupLeft < leftBound) groupLeft = leftBound;
      if (groupLeft + totalGroup > rightBound) groupLeft = Math.max(leftBound, rightBound - totalGroup);
      barX = groupLeft + seriesIndex * (per + groupGap);
      barWidth2 = per;
    }
    const barCenterX = barX + barWidth2 / 2;
    const valueY = yScale(d.y);
    const y2 = Math.min(baselineY, valueY);
    const height = Math.abs(baselineY - valueY);
    const isFocused = !faded && ((_a2 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a2.seriesId) === series.id && tooltip.focused.index === di;
    const onEnter = () => {
      if (!tooltip || faded) return;
      tooltip.setFocused({ seriesId: series.id, index: di, x: rawX, y: d.y, clientX: barCenterX, clientY: valueY });
    };
    const onLeave = () => {
      var _a3;
      if (((_a3 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a3.seriesId) === series.id && tooltip.focused.index === di) tooltip.clear();
    };
    return /* @__PURE__ */ jsx21(
      "rect",
      {
        x: barX,
        y: y2,
        width: barWidth2,
        height: height || 1,
        fill: colorMode === "category" ? palette === "region" ? pickRegionColor(String(d.x), di) : pickSeriesColor(di) : baseSeriesColor,
        stroke: isFocused ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : colorMode === "category" ? palette === "region" ? pickRegionStroke(String(d.x), di) : pickSeriesStroke(di) : baseSeriesStroke,
        strokeWidth: isFocused ? 2 : 1,
        className: "fdp-bar",
        tabIndex: faded || !focusable ? -1 : 0,
        role: "graphics-symbol",
        "aria-label": `${series.label || series.id} ${rawX instanceof Date ? rawX.toDateString() : rawX} value ${d.y}`,
        onMouseEnter: onEnter,
        onFocus: onEnter,
        onMouseLeave: onLeave,
        onBlur: onLeave
      },
      di
    );
  }) });
};
var BarSeriesPrimitive_default = BarSeriesPrimitive;

// src/components/DataVisualisation/core/BandScalesProvider.tsx
import * as React18 from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
var BandScalesProvider = ({
  series,
  innerWidth: iw,
  innerHeight: ih,
  paddingInner = 0.1,
  paddingOuter = 0.05,
  children,
  yTickCount = 5
}) => {
  var _a, _b;
  const chart = useChartContext();
  const innerWidth = (_a = iw != null ? iw : chart == null ? void 0 : chart.innerWidth) != null ? _a : 0;
  const innerHeight = (_b = ih != null ? ih : chart == null ? void 0 : chart.innerHeight) != null ? _b : 0;
  const allData = React18.useMemo(() => series.flatMap((s) => s.data), [series]);
  const xDomain = React18.useMemo(() => {
    const set = /* @__PURE__ */ new Set();
    allData.forEach((d) => set.add(d.x));
    return Array.from(set);
  }, [allData]);
  const yMax = React18.useMemo(() => Math.max(0, ...allData.map((d) => d.y)), [allData]);
  const xScale = React18.useMemo(() => band().domain(xDomain).range([0, innerWidth]).paddingInner(paddingInner).paddingOuter(paddingOuter), [xDomain, innerWidth, paddingInner, paddingOuter]);
  const yScale = React18.useMemo(() => linear2().domain([0, yMax]).nice().range([innerHeight, 0]), [yMax, innerHeight]);
  const value = React18.useMemo(() => ({
    xScale,
    yScale,
    getXTicks: () => xDomain,
    getYTicks: (c = yTickCount) => yScale.ticks(c)
  }), [xScale, yScale, xDomain, yTickCount]);
  return /* @__PURE__ */ jsx22(ScaleContext_default.Provider, { value, children });
};
export {
  AreaSeriesPrimitive_default as AreaSeriesPrimitive,
  Axis_default as Axis,
  BandScalesProvider,
  BarSeriesPrimitive_default as BarSeriesPrimitive,
  ChartContainer_default as ChartContainer,
  ChartRoot_default as ChartRoot,
  ChartWithTableTabs_default as ChartWithTableTabs,
  FilterableLineChart_default as FilterableLineChart,
  GridLines_default as GridLines,
  Legend_default as Legend,
  LineChart_default as LineChart,
  LineScalesProvider,
  LineSeriesPrimitive_default as LineSeriesPrimitive,
  TooltipOverlay_default as TooltipOverlay,
  TooltipProvider,
  VisibilityProvider,
  VisuallyHiddenLiveRegion_default as VisuallyHiddenLiveRegion,
  useScaleContext,
  useTooltipContext,
  useVisibility
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=index.js.map
