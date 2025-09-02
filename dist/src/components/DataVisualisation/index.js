var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
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
      function classNames4() {
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
          return classNames4.apply(null, arg);
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
        classNames4.default = classNames4;
        module.exports = classNames4;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames4;
        });
      } else {
        window.classNames = classNames4;
      }
    })();
  }
});

// src/components/DataVisualisation/charts/ChartContainer.tsx
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

// src/components/DataVisualisation/charts/ChartContainer.tsx
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

// src/components/DataVisualisation/charts/LineChart/LineChart.tsx
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
  const hasData = Number.isFinite(min) && Number.isFinite(max);
  if (!hasData) {
    return linear2().domain([0, 0]).range(range2);
  }
  let lower;
  if (min <= 0) {
    lower = Math.min(0, min);
  } else {
    const span = max - min;
    const pad2 = (span > 0 ? span : min) * 0.1;
    lower = Math.max(0, min - pad2);
    if (lower === min) lower = Math.max(0, min * 0.9);
  }
  const upper = max != null ? max : 0;
  return linear2().domain([lower, upper]).nice().range(range2);
}
function createLinePath(data, x2, y2, options) {
  var _a2;
  const lineGen = line_default().x(x2).y(y2);
  if ((options == null ? void 0 : options.smooth) !== false) {
    lineGen.curve(monotoneX);
  }
  return (_a2 = lineGen(data)) != null ? _a2 : "";
}

// src/components/DataVisualisation/hooks/useChartDimensions.ts
import * as React2 from "react";
function useChartDimensions(initial = {}) {
  const ref = React2.useRef(null);
  const margin = React2.useMemo(() => {
    var _a2, _b2, _c, _d;
    return {
      top: (_a2 = initial.top) != null ? _a2 : 16,
      right: (_b2 = initial.right) != null ? _b2 : 16,
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
  yTickCount = 5,
  yDomain,
  xPadding,
  yPadding
}) => {
  var _a2, _b2;
  const chartDims = useChartContext();
  const innerWidth = (_a2 = innerWidthProp != null ? innerWidthProp : chartDims == null ? void 0 : chartDims.innerWidth) != null ? _a2 : 0;
  const innerHeight = (_b2 = innerHeightProp != null ? innerHeightProp : chartDims == null ? void 0 : chartDims.innerHeight) != null ? _b2 : 0;
  const allData = React4.useMemo(() => series.flatMap((s) => s.data), [series]);
  const parseX = React4.useCallback((d) => {
    if (parseXProp) return parseXProp(d);
    const raw = d.x;
    return raw instanceof Date ? raw : new Date(raw);
  }, [parseXProp]);
  const xPad = xPadding != null ? xPadding : 6;
  const yPad = yPadding != null ? yPadding : 6;
  const xScale = React4.useMemo(() => createXTimeScale(allData, parseX, [xPad, Math.max(0, innerWidth - xPad)]), [allData, parseX, innerWidth, xPad]);
  const yScale = React4.useMemo(() => {
    if (yDomain) {
      const scale = createYLinearScale([], (d) => d.y, [Math.max(0, innerHeight - yPad), yPad]);
      scale.domain(yDomain);
      return scale;
    }
    return createYLinearScale(allData, (d) => d.y, [Math.max(0, innerHeight - yPad), yPad]);
  }, [allData, innerHeight, yDomain]);
  const value = React4.useMemo(() => ({
    xScale,
    yScale,
    getXTicks: (count = xTickCount) => xScale.ticks(count),
    getYTicks: (count = yTickCount) => yScale.ticks(count)
  }), [xScale, yScale, xTickCount, yTickCount]);
  return /* @__PURE__ */ jsx3(ScaleContext.Provider, { value, children });
};
var ScaleContext_default = ScaleContext;

// src/components/DataVisualisation/charts/Axis/Axis.tsx
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
        var _a2;
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
        ] }, ((_a2 = t == null ? void 0 : t.toString) == null ? void 0 : _a2.call(t)) || i);
      })
    ] });
  }
  return /* @__PURE__ */ jsxs2("g", { className: ["fdp-axis", "fdp-axis--y", className].filter(Boolean).join(" "), fontFamily: "var(--nhs-fdp-font-family-base, var(--fdp-chart-font-family))", children: [
    ticks2.map((t, i) => {
      var _a2;
      const rawLabel = effectiveFormatTick(t);
      const displayLabel = maxTickLabelLength && rawLabel.length > maxTickLabelLength ? rawLabel.slice(0, Math.max(1, maxTickLabelLength - 1)) + "\u2026" : rawLabel;
      const lines = allowLabelWrap ? displayLabel.split(/\n/) : [displayLabel.replace(/\n/g, " ")];
      return /* @__PURE__ */ jsxs2("g", { transform: `translate(0,${resolvedScale(t)})`, children: [
        /* @__PURE__ */ jsx4("line", { x2: -6, stroke: "currentColor" }),
        /* @__PURE__ */ jsxs2("text", { x: -9, dy: "0.32em", textAnchor: "end", className: "fdp-axis__tick", fontFamily: "inherit", children: [
          lines.map((ln, li) => /* @__PURE__ */ jsx4("tspan", { x: -9, dy: li === 0 ? 0 : "1.1em", children: ln }, li)),
          displayLabel !== rawLabel && /* @__PURE__ */ jsx4("title", { children: rawLabel })
        ] })
      ] }, ((_a2 = t == null ? void 0 : t.toString) == null ? void 0 : _a2.call(t)) || i);
    }),
    label && /* @__PURE__ */ jsx4("text", { transform: "rotate(-90)", x: -dims.innerHeight / 2, y: -dims.margin.left + 12, textAnchor: "middle", className: "fdp-axis__label", fontFamily: "inherit", children: label })
  ] });
};
var Axis_default = Axis;

// src/components/DataVisualisation/charts/GridlLines/GridLines.tsx
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
      severity: {
        $comment: "Semantic severity / alert colours (light background ramp \u2192 critical).",
        low: { $value: "{color.secondary.pale-yellow}", $description: "Low severity \u2013 pale yellow background" },
        moderate: { $value: "{color.secondary.warm-yellow}", $description: "Moderate severity \u2013 warm yellow" },
        high: { $value: "{color.secondary.orange}", $description: "High severity \u2013 orange" },
        critical: { $value: "{color.primary.red}", $description: "Critical severity \u2013 red" }
      },
      "org-level": {
        $comment: "Organisational level semantic colours (stable NHS brand mappings).",
        trust: { $value: "{color.primary.blue}", $description: "Trust \u2013 NHS Blue" },
        ambulance: { $value: "{color.primary.green}", $description: "Ambulance \u2013 NHS Green" },
        icb: { $value: "{color.primary.dark-pink}", $description: "ICB \u2013 NHS Dark Pink" },
        region: { $value: "{color.primary.purple}", $description: "Region \u2013 NHS Purple" }
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
          $comment: "Region stroke colours derived from fill colours: dark fills lightened ~35%; light fills darkened ~25% for consistent contrast without defaulting to pure white/black.",
          "north-east": { $value: "#5996D1", $description: "Stroke for North East (blue lightened 35%)" },
          "north-west": { $value: "#3189AD", $description: "Stroke for North West (light blue darkened 25%)" },
          "east-of-england": { $value: "#7A59A3", $description: "Stroke for East of England (purple lightened 35%)" },
          midlands: { $value: "#CA71A4", $description: "Stroke for Midlands (pink lightened 35%)" },
          london: { $value: "#5A8F19", $description: "Stroke for London (light green darkened 25%)" },
          "south-west": { $value: "#BCA900", $description: "Stroke for South West (yellow darkened 25%)" },
          "south-east": { $value: "#B26800", $description: "Stroke for South East (orange darkened 25%)" }
        },
        severity: {
          $comment: "Contrast strokes for severity colours (light backgrounds use dark stroke; dark backgrounds use white).",
          low: { $value: "#212b32", $description: "Stroke for low severity (pale yellow fill)" },
          moderate: { $value: "#212b32", $description: "Stroke for moderate severity (warm yellow fill)" },
          high: { $value: "#212b32", $description: "Stroke for high severity (orange fill)" },
          critical: { $value: "#ffffff", $description: "Stroke for critical severity (red fill)" }
        },
        "org-level": {
          $comment: "Contrast strokes for organisational level colours (all dark brand fills so white stroke for consistency).",
          trust: { $value: "#ffffff", $description: "Stroke for trust (blue fill)" },
          ambulance: { $value: "#ffffff", $description: "Stroke for ambulance (green fill)" },
          icb: { $value: "#ffffff", $description: "Stroke for ICB (dark pink fill)" },
          region: { $value: "#ffffff", $description: "Stroke for region (purple fill)" }
        }
      },
      spc: {
        $comment: "SPC (Statistical Process Control) semantic variation colours aligned to SPCChart.scss and SPCIcons.",
        improvement: { $value: "#00B0F0", $description: "SPC special cause improvement (favourable)" },
        concern: { $value: "#E46C0A", $description: "SPC special cause concern (deteriorating)" },
        "no-judgement": { $value: "#490092", $description: "SPC special cause (no directional judgement)" },
        "common-cause": { $value: "#A6A6A6", $description: "SPC common cause (baseline variation)" },
        "assurance-pass": { $value: "#00823B", $description: "SPC assurance pass indicator (process capable)" },
        "assurance-fail": { $value: "#DA291C", $description: "SPC assurance fail indicator (process not capable)" },
        gradient: {
          $comment: "Opacity stops for SPC icon gradient wash (applied top-left -> bottom-right). Consumers build gradients using these opacities + base colour.",
          stop: {
            "start-opacity": { $value: "0.18", $description: "Start stop opacity (0%) for classic variant wash" },
            "mid-opacity": { $value: "0.06", $description: "Mid stop opacity (~65-75%)" },
            "end-opacity": { $value: "0", $description: "End stop opacity (100%)" },
            "triangle-start-opacity": { $value: "0.18", $description: "Start opacity for triangle variants (kept aligned)" },
            "triangle-mid-opacity": { $value: "0.06", $description: "Mid opacity for triangle variants" },
            "triangle-end-opacity": { $value: "0", $description: "End opacity for triangle variants" }
          }
        },
        stroke: {
          $comment: "Contrast stroke colours for SPC variation fills.",
          improvement: { $value: "#000000", $description: "Stroke for improvement points" },
          concern: { $value: "#000000", $description: "Stroke for concern points" },
          "no-judgement": { $value: "#000000", $description: "Stroke for no-judgement points" },
          "common-cause": { $value: "#ffffff", $description: "Stroke for common cause points" },
          "assurance-pass": { $value: "#000000", $description: "Stroke for assurance pass points" },
          "assurance-fail": { $value: "#000000", $description: "Stroke for assurance fail points" }
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
      "blue-active": {
        $value: "#002f5c",
        $description: "NHS Active Blue (50% shade) \u2013 alias of button/login active; promoted for general reuse"
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
      "light-purple": {
        $value: "#880FB8",
        $description: "NHS Light Purple (data viz promoted)"
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
      tangerine: {
        $value: "#ED4F00",
        $description: "NHS Tangerine (data viz promoted)"
      },
      "aqua-green": {
        $value: "#00a499",
        $description: "NHS Aqua Green"
      },
      "light-blue": {
        $value: "#41B6E6",
        $description: "NHS Light Blue (data viz promoted)"
      },
      pink: {
        $value: "#ae2573",
        $description: "NHS Pink"
      },
      "bright-pink": {
        $value: "#E317AA",
        $description: "NHS Bright Pink (data viz promoted)"
      },
      "light-green": {
        $value: "#78BE20",
        $description: "NHS Light Green (data viz promoted)"
      },
      brown: {
        $value: "#9A6324",
        $description: "NHS Brown (data viz promoted neutral)"
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
    },
    accessibility: {
      $type: "color",
      $comment: "Accessibility-oriented color tokens. Includes CVD-safe pairs and Okabe\u2013Ito colors. Use these for positive/negative semantics and colour-blind\u2013friendly defaults.",
      "okabe-ito": {
        green: {
          $value: "#009E73",
          $description: "Okabe\u2013Ito green (CVD-safe) \u2013 recommended positive"
        },
        vermillion: {
          $value: "#D55E00",
          $description: "Okabe\u2013Ito vermillion / red\u2013orange (CVD-safe) \u2013 recommended negative"
        }
      },
      "cvd-safe": {
        blue: {
          $value: "#1f77b4",
          $description: "CVD-safe blue (pairs with orange); widely used in Matplotlib/Tableau sets"
        },
        orange: {
          $value: "#ff7f0e",
          $description: "CVD-safe orange (pairs with blue)"
        }
      },
      positive: {
        $value: "{color.accessibility.okabe-ito.green}",
        $description: "Accessibility semantic alias \u2013 positive"
      },
      negative: {
        $value: "{color.accessibility.okabe-ito.vermillion}",
        $description: "Accessibility semantic alias \u2013 negative"
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
var severityStrokeMap = null;
var orgLevelStrokeMap = null;
function buildStrokeMaps() {
  var _a2, _b2, _c, _d, _e;
  const stroke = (_c = (_b2 = (_a2 = data_viz_default) == null ? void 0 : _a2.color) == null ? void 0 : _b2["data-viz"]) == null ? void 0 : _c.stroke;
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
      var _a3, _b3;
      const v = ((_a3 = reg[k]) == null ? void 0 : _a3.$value) || ((_b3 = reg[k]) == null ? void 0 : _b3.value);
      if (typeof v === "string") regionStrokeMap[k] = v;
    });
    const sev = stroke.severity || {};
    const org = stroke["org-level"] || {};
    orgLevelStrokeMap = {};
    Object.keys(org).forEach((k) => {
      var _a3, _b3;
      const v = ((_a3 = org[k]) == null ? void 0 : _a3.$value) || ((_b3 = org[k]) == null ? void 0 : _b3.value);
      if (typeof v === "string") orgLevelStrokeMap[k] = v;
    });
    severityStrokeMap = {};
    Object.keys(sev).forEach((k) => {
      var _a3, _b3;
      const v = ((_a3 = sev[k]) == null ? void 0 : _a3.$value) || ((_b3 = sev[k]) == null ? void 0 : _b3.value);
      if (typeof v === "string") severityStrokeMap[k] = v;
    });
  }
}
function ensureStrokeMaps() {
  if (!categoricalStrokeMap || !regionStrokeMap || !severityStrokeMap || !orgLevelStrokeMap) buildStrokeMaps();
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
var SEVERITY_IDS = ["low", "moderate", "high", "critical"];
var severityMap = null;
function buildSeverityMap() {
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
  SEVERITY_IDS.forEach((id) => {
    const hex2 = resolve(`color.data-viz.severity.${id}`);
    if (hex2) map2[id] = hex2;
  });
  return map2;
}
function getSeverityMap() {
  if (!severityMap) severityMap = buildSeverityMap();
  return severityMap;
}
function getSeverityColor(id) {
  return getSeverityMap()[id.toLowerCase()];
}
function pickSeverityColor(id, fallbackIndex) {
  return getSeverityColor(id) || getSeverityMap()[SEVERITY_IDS[fallbackIndex % SEVERITY_IDS.length]] || pickSeriesColor(fallbackIndex);
}
function getSeverityStroke(id) {
  ensureStrokeMaps();
  return severityStrokeMap ? severityStrokeMap[id] : void 0;
}
function pickSeverityStroke(id, fallbackIndex) {
  return getSeverityStroke(id) || pickSeriesStroke(fallbackIndex);
}
var ORG_LEVEL_IDS = ["trust", "ambulance", "icb", "region"];
var orgLevelMap = null;
function buildOrgLevelMap() {
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
  ORG_LEVEL_IDS.forEach((id) => {
    const hex2 = resolve(`color.data-viz.org-level.${id}`);
    if (hex2) map2[id] = hex2;
  });
  return map2;
}
function getOrgLevelMap() {
  if (!orgLevelMap) orgLevelMap = buildOrgLevelMap();
  return orgLevelMap;
}
function getOrgLevelColor(id) {
  return getOrgLevelMap()[id.toLowerCase()];
}
function pickOrgLevelColor(id, fallbackIndex) {
  return getOrgLevelColor(id) || getOrgLevelMap()[ORG_LEVEL_IDS[fallbackIndex % ORG_LEVEL_IDS.length]] || pickSeriesColor(fallbackIndex);
}
function getOrgLevelStroke(id) {
  ensureStrokeMaps();
  return orgLevelStrokeMap ? orgLevelStrokeMap[id] : void 0;
}
function pickOrgLevelStroke(id, fallbackIndex) {
  return getOrgLevelStroke(id) || pickSeriesStroke(fallbackIndex);
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
  const paletteValues = palette === "region" ? copy2.map((s, i) => pickRegionColor(s.id, i)) : palette === "severity" ? copy2.map((s, i) => pickSeverityColor(s.id, i)) : palette === "org-level" ? copy2.map((s, i) => pickOrgLevelColor(s.id, i)) : series.length > getOptimizedCategoricalPalette().length ? getExtendedCategoricalPalette() : categoricalStrategy === "optimized" ? getOptimizedCategoricalPalette() : getRawCategoricalPalette();
  let order = palette === "region" ? copy2.map((_, i) => i) : palette === "severity" ? copy2.map((_, i) => i) : palette === "org-level" ? copy2.map((_, i) => i) : [...Array(paletteValues.length).keys()];
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
var TooltipProvider = ({
  children,
  maxDistance = 40,
  wrapAround = false
}) => {
  const scaleCtx = useScaleContext();
  const visibility = useVisibility();
  const [focused, setFocused] = React7.useState(null);
  const seriesRef = React7.useRef(/* @__PURE__ */ new Map());
  const [aggregated, setAggregated] = React7.useState([]);
  const registerSeries = React7.useCallback(
    (seriesId, data) => {
      seriesRef.current.set(seriesId, data);
    },
    []
  );
  const unregisterSeries = React7.useCallback((seriesId) => {
    seriesRef.current.delete(seriesId);
  }, []);
  const focusNearest = React7.useCallback(
    (plotX, plotY) => {
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
            best = {
              seriesId: sid,
              index: i,
              x: d.x,
              y: d.y,
              clientX: px,
              clientY: py
            };
          }
        });
      });
      if (best && bestDist <= maxDistance) setFocused(best);
      else setFocused(null);
    },
    [scaleCtx, maxDistance]
  );
  const clear = React7.useCallback(() => setFocused(null), []);
  React7.useEffect(() => {
    if (!focused) {
      setAggregated([]);
      return;
    }
    if (!scaleCtx) return;
    const { xScale, yScale } = scaleCtx;
    const agg = [];
    seriesRef.current.forEach((data, sid) => {
      data.forEach((d, i) => {
        const match = (() => {
          if (focused.x instanceof Date && d.x instanceof Date)
            return d.x.getTime() === focused.x.getTime();
          return d.x === focused.x;
        })();
        if (match) {
          agg.push({
            seriesId: sid,
            index: i,
            x: d.x,
            y: d.y,
            clientX: xScale(d.x),
            clientY: yScale(d.y)
          });
        }
      });
    });
    agg.sort((a, b) => a.seriesId.localeCompare(b.seriesId));
    setAggregated(agg);
  }, [focused, scaleCtx]);
  const focusRelativePoint = React7.useCallback(
    (delta) => {
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
      setFocused({
        seriesId: focused.seriesId,
        index: nextIndex,
        x: d.x,
        y: d.y,
        clientX: xScale(d.x),
        clientY: yScale(d.y)
      });
    },
    [focused, scaleCtx, wrapAround]
  );
  const focusSeriesAtIndex = React7.useCallback(
    (seriesDelta) => {
      let ids = Array.from(seriesRef.current.keys());
      if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
      if (ids.length === 0) return;
      if (!focused) {
        const first = ids[0];
        const data = seriesRef.current.get(first);
        if (!data || !scaleCtx) return;
        const { xScale: xScale2, yScale: yScale2 } = scaleCtx;
        const d2 = data[0];
        setFocused({
          seriesId: first,
          index: 0,
          x: d2.x,
          y: d2.y,
          clientX: xScale2(d2.x),
          clientY: yScale2(d2.y)
        });
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
      setFocused({
        seriesId: nextSeriesId,
        index: idx,
        x: d.x,
        y: d.y,
        clientX: xScale(d.x),
        clientY: yScale(d.y)
      });
    },
    [focused, scaleCtx, wrapAround, visibility]
  );
  const focusFirstPoint = React7.useCallback(() => {
    let ids = Array.from(seriesRef.current.keys());
    if (visibility) ids = ids.filter((id) => !visibility.isHidden(id));
    if (ids.length === 0) return;
    const targetSeriesId = focused ? focused.seriesId : ids[0];
    const data = seriesRef.current.get(targetSeriesId);
    if (!data || data.length === 0 || !scaleCtx) return;
    const d = data[0];
    const { xScale, yScale } = scaleCtx;
    setFocused({
      seriesId: targetSeriesId,
      index: 0,
      x: d.x,
      y: d.y,
      clientX: xScale(d.x),
      clientY: yScale(d.y)
    });
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
    setFocused({
      seriesId: targetSeriesId,
      index: lastIndex,
      x: d.x,
      y: d.y,
      clientX: xScale(d.x),
      clientY: yScale(d.y)
    });
  }, [focused, scaleCtx, visibility]);
  const focusNextPoint = React7.useCallback(
    () => focusRelativePoint(1),
    [focusRelativePoint]
  );
  const focusPrevPoint = React7.useCallback(
    () => focusRelativePoint(-1),
    [focusRelativePoint]
  );
  const focusNextSeries = React7.useCallback(
    () => focusSeriesAtIndex(1),
    [focusSeriesAtIndex]
  );
  const focusPrevSeries = React7.useCallback(
    () => focusSeriesAtIndex(-1),
    [focusSeriesAtIndex]
  );
  const value = React7.useMemo(
    () => ({
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
    }),
    [
      focused,
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
    ]
  );
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
  smooth = true,
  gradientFillId
}) => {
  var _a2;
  const scaleCtx = useScaleContext();
  if (!scaleCtx) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = (_a2 = visibility == null ? void 0 : visibility.isHidden(series.id)) != null ? _a2 : false;
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
  const path2 = React8.useMemo(
    () => createLinePath(
      series.data,
      (d) => xScale(parseX(d)),
      (d) => yScale(d.y),
      { smooth }
    ),
    [series.data, xScale, yScale, parseX, smooth]
  );
  const areaPath = React8.useMemo(() => {
    if (!series.data.length) return "";
    const [domainMin] = yScale.domain();
    const gen = area_default().x((d) => xScale(parseX(d))).y0(() => yScale(domainMin)).y1((d) => yScale(d.y));
    if (smooth) gen.curve(monotoneX);
    return gen(series.data) || "";
  }, [series.data, xScale, yScale, parseX, smooth]);
  const color2 = series.color || (palette === "region" ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));
  const stroke = palette === "region" ? pickRegionStroke(series.id, seriesIndex) : pickSeriesStroke(seriesIndex);
  return /* @__PURE__ */ jsxs4(
    "g",
    {
      className: "fdp-line-series",
      "data-series": series.id,
      opacity: faded ? 0.25 : 1,
      "aria-hidden": faded ? true : void 0,
      children: [
        gradientFillId && /* @__PURE__ */ jsx8(
          "path",
          {
            d: areaPath,
            fill: `url(#${gradientFillId})`,
            stroke: "none",
            role: "presentation",
            className: "fdp-line-series__gradient"
          }
        ),
        /* @__PURE__ */ jsx8(
          "path",
          {
            d: path2,
            fill: "none",
            stroke: color2,
            strokeWidth,
            role: "presentation"
          }
        ),
        showPoints && series.data.map((d, di) => {
          var _a3;
          const cx = xScale(parseX(d));
          const cy = yScale(d.y);
          const tabIndex = focusablePoints ? 0 : -1;
          const isFocusedPoint = !faded && (focusablePoints && di === focusIndex || ((_a3 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a3.seriesId) === series.id && tooltip.focused.index === di);
          const handleEnter = () => {
            if (tooltip && !faded) {
              tooltip.setFocused({
                seriesId: series.id,
                index: di,
                x: parseX(d),
                y: d.y,
                clientX: cx,
                clientY: cy
              });
            }
          };
          const handleLeave = () => {
            var _a4;
            if (tooltip && ((_a4 = tooltip.focused) == null ? void 0 : _a4.seriesId) === series.id && tooltip.focused.index === di)
              tooltip.clear();
          };
          return /* @__PURE__ */ jsx8(
            "circle",
            {
              cx,
              cy,
              r: isFocusedPoint ? 5 : 3.5,
              stroke: isFocusedPoint ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : stroke,
              strokeWidth: isFocusedPoint ? 2 : 1,
              fill: isFocusedPoint ? "var(--nhs-fdp-color-grey-3, #aeb7bd)" : color2,
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
      ]
    }
  );
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
      const xLabel = focused.x instanceof Date ? focused.x.toDateString() : String(focused.x);
      msg = `${xLabel} \u2013 ${parts}`;
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
  const xLabel = x2 instanceof Date ? x2.toDateString() : String(x2);
  return `Series ${seriesId}, point ${index + 1}, ${xLabel}, value ${y2}`;
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
  const dateLabel = focused.x instanceof Date ? focused.x.toDateString() : String(focused.x);
  const label = multi ? dateLabel : `${dateLabel} \u2022 ${focused.y}`;
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

// src/components/DataVisualisation/charts/LineChart/LineChart.tsx
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
  gradientFills = true,
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
  const gradientIds = React10.useMemo(() => series.map((s) => `fdp-line-grad-${s.id}`), [series]);
  const svgContent = /* @__PURE__ */ jsx11("svg", { width: dims.width, height: dims.height, role: "img", children: /* @__PURE__ */ jsxs6("g", { transform: `translate(${dims.margin.left},${dims.margin.top})`, children: [
    gradientFills && /* @__PURE__ */ jsx11("defs", { children: series.map((s, i) => {
      const lineColor = s.color || (palette === "region" ? pickRegionColor(s.id, i) : pickSeriesColor(i));
      return /* @__PURE__ */ jsxs6("linearGradient", { id: gradientIds[i], x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ jsx11("stop", { offset: "0%", stopColor: lineColor, stopOpacity: 0.25 }),
        /* @__PURE__ */ jsx11("stop", { offset: "100%", stopColor: lineColor, stopOpacity: 0 })
      ] }, s.id);
    }) }),
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
        smooth,
        gradientFillId: gradientFills ? gradientIds[si] : void 0
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
  var _a2;
  const ctx = useChartContext();
  const content = /* @__PURE__ */ jsx11(InternalLineChart, { ...props, providedDims: ctx });
  if (ctx) {
    return useScaleContext() ? content : /* @__PURE__ */ jsx11(LineScalesProvider, { series: props.series, innerWidth: ctx.innerWidth, innerHeight: ctx.innerHeight, children: content });
  }
  const ariaLabel = props.ariaLabel;
  return /* @__PURE__ */ jsx11(ChartRoot, { height: (_a2 = props.height) != null ? _a2 : 240, ariaLabel, margin: { bottom: 48, left: 56, right: 16, top: 12 }, children: /* @__PURE__ */ jsx11(InternalLineChart, { ...props }) });
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
    var _a2;
    return defaultActiveTab || ((_a2 = items[0]) == null ? void 0 : _a2.id) || "";
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
    var _a2;
    const relatedTarget = event.relatedTarget;
    if (!((_a2 = tabListRef.current) == null ? void 0 : _a2.contains(relatedTarget))) {
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

// src/mapping/button.ts
function mapButtonProps(input) {
  const variant = input.variant || "primary";
  const size = input.size || "default";
  const fullWidth = !!input.fullWidth;
  const classes = [
    "nhs-aria-button",
    `nhs-aria-button--${variant}`,
    size !== "default" ? `nhs-aria-button--${size}` : "",
    fullWidth ? "nhs-aria-button--full-width" : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  const tag = input.href ? "a" : "button";
  return {
    tag,
    classes,
    data: { module: "nhs-button" },
    attrs: input.href ? { href: input.href, role: "button" } : { type: "button" },
    preventDoubleClick: !!input.preventDoubleClick
  };
}

// src/components/Button/Button.tsx
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
  const model = mapButtonProps({
    variant,
    size,
    fullWidth,
    className,
    preventDoubleClick,
    href: "href" in rest ? rest.href : void 0
  });
  const isDisabled = "disabled" in rest ? rest.disabled : rest["aria-disabled"] === "true";
  const dataAttributes = {
    ...isPressed && { "data-pressed": "true" },
    ...isHovered && { "data-hovered": "true" },
    ...isFocused && { "data-focused": "true" },
    ...isDisabled && { "data-disabled": "true" }
  };
  const handleMouseDown = useCallback7(
    () => !isDisabled && setIsPressed(true),
    [isDisabled]
  );
  const handleMouseUp = useCallback7(() => setIsPressed(false), []);
  const handleMouseEnter = useCallback7(
    () => !isDisabled && setIsHovered(true),
    [isDisabled]
  );
  const handleMouseLeave = useCallback7(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);
  const handleFocus = useCallback7(() => setIsFocused(true), []);
  const handleBlur = useCallback7(() => setIsFocused(false), []);
  const handleKeyDown = useCallback7(
    (event) => {
      if (event.key === " " && ("href" in rest || event.currentTarget.getAttribute("role") === "button")) {
        event.preventDefault();
        event.currentTarget.click();
      }
    },
    [rest]
  );
  const handleClick = useCallback7(
    (event) => {
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
    },
    [preventDoubleClick]
  );
  if ("href" in rest && rest.href) {
    const {
      id: id2,
      style: style2,
      title: title2,
      ["aria-label"]: ariaLabel2,
      ["aria-describedby"]: ariaDescribedBy2,
      ["aria-labelledby"]: ariaLabelledBy2,
      tabIndex: tabIndex2,
      ...anchorRest
    } = rest;
    const anchorProps = rest;
    return /* @__PURE__ */ jsx13(
      "a",
      {
        ref,
        href: anchorProps.href,
        target: anchorProps.target,
        rel: anchorProps.rel,
        className: model.classes,
        role: "button",
        draggable: "false",
        "data-module": "nhs-button",
        ...dataAttributes,
        ...preventDoubleClick && { "data-prevent-double-click": "true" },
        ...anchorRest,
        onKeyDown: (event) => {
          var _a2;
          (_a2 = anchorProps.onKeyDown) == null ? void 0 : _a2.call(anchorProps, event);
          handleKeyDown(event);
        },
        onClick: (event) => {
          var _a2;
          (_a2 = anchorProps.onClick) == null ? void 0 : _a2.call(anchorProps, event);
          handleClick(event);
        },
        onMouseDown: (event) => {
          var _a2;
          (_a2 = anchorProps.onMouseDown) == null ? void 0 : _a2.call(anchorProps, event);
          handleMouseDown();
        },
        onMouseUp: (event) => {
          var _a2;
          (_a2 = anchorProps.onMouseUp) == null ? void 0 : _a2.call(anchorProps, event);
          handleMouseUp();
        },
        onMouseEnter: (event) => {
          var _a2;
          (_a2 = anchorProps.onMouseEnter) == null ? void 0 : _a2.call(anchorProps, event);
          handleMouseEnter();
        },
        onMouseLeave: (event) => {
          var _a2;
          (_a2 = anchorProps.onMouseLeave) == null ? void 0 : _a2.call(anchorProps, event);
          handleMouseLeave();
        },
        onFocus: (event) => {
          var _a2;
          (_a2 = anchorProps.onFocus) == null ? void 0 : _a2.call(anchorProps, event);
          handleFocus();
        },
        onBlur: (event) => {
          var _a2;
          (_a2 = anchorProps.onBlur) == null ? void 0 : _a2.call(anchorProps, event);
          handleBlur();
        },
        "aria-disabled": anchorProps["aria-disabled"],
        ...anchorProps["aria-disabled"] === "true" && { tabIndex: -1 },
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
  const {
    id,
    style,
    title,
    ["aria-label"]: ariaLabel,
    ["aria-describedby"]: ariaDescribedBy,
    ["aria-labelledby"]: ariaLabelledBy,
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
    ...buttonRest
  } = rest;
  const buttonProps = rest;
  return /* @__PURE__ */ jsx13(
    "button",
    {
      ref,
      type: buttonProps.type || "button",
      disabled: buttonProps.disabled,
      className: model.classes,
      "data-module": "nhs-button",
      ...dataAttributes,
      ...preventDoubleClick && { "data-prevent-double-click": "true" },
      ...buttonProps.disabled && { "aria-disabled": "true" },
      ...buttonRest,
      onKeyDown: (event) => {
        var _a2;
        (_a2 = buttonProps.onKeyDown) == null ? void 0 : _a2.call(buttonProps, event);
        handleKeyDown(event);
      },
      onClick: (event) => {
        var _a2;
        (_a2 = buttonProps.onClick) == null ? void 0 : _a2.call(buttonProps, event);
        handleClick(event);
      },
      onMouseDown: (event) => {
        var _a2;
        (_a2 = buttonProps.onMouseDown) == null ? void 0 : _a2.call(buttonProps, event);
        handleMouseDown();
      },
      onMouseUp: (event) => {
        var _a2;
        (_a2 = buttonProps.onMouseUp) == null ? void 0 : _a2.call(buttonProps, event);
        handleMouseUp();
      },
      onMouseEnter: (event) => {
        var _a2;
        (_a2 = buttonProps.onMouseEnter) == null ? void 0 : _a2.call(buttonProps, event);
        handleMouseEnter();
      },
      onMouseLeave: (event) => {
        var _a2;
        (_a2 = buttonProps.onMouseLeave) == null ? void 0 : _a2.call(buttonProps, event);
        handleMouseLeave();
      },
      onFocus: (event) => {
        var _a2;
        (_a2 = buttonProps.onFocus) == null ? void 0 : _a2.call(buttonProps, event);
        handleFocus();
      },
      onBlur: (event) => {
        var _a2;
        (_a2 = buttonProps.onBlur) == null ? void 0 : _a2.call(buttonProps, event);
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
var import_classnames3 = __toESM(require_classnames(), 1);

// src/components/Panel/Panel.tsx
var import_classnames2 = __toESM(require_classnames(), 1);

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
  var _a2;
  const level = (_a2 = input.level) != null ? _a2 : deriveLevel(input.size);
  const classes = [
    "nhsuk-heading",
    input.size ? `nhsuk-heading--${input.size}` : "",
    input.className || ""
  ].filter(Boolean).join(" ");
  const style = input.marginBottom ? { marginBottom: input.marginBottom } : void 0;
  return { tag: `h${level}`, classes, style };
}

// src/components/Heading/Heading.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
var Heading = ({ level, className, text, html, children, size, marginBottom, ...rest }) => {
  const model = mapHeadingProps({ level, size, className, marginBottom });
  const content = children || (html ? /* @__PURE__ */ jsx14("span", { dangerouslySetInnerHTML: { __html: html } }) : text);
  return createElement(model.tag, { className: model.classes, style: model.style, ...rest }, content);
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
  const panelClasses = (0, import_classnames2.default)(
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
  const tableClassList = (0, import_classnames3.default)(
    "nhsuk-table",
    {
      "nhsuk-table-responsive": responsive
    },
    tableClasses
  );
  const containerClassList = (0, import_classnames3.default)(classes);
  const renderHeaderCell = (cell, index) => {
    const headerClasses = (0, import_classnames3.default)("nhsuk-table__header", {
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
    const cellClasses = (0, import_classnames3.default)(
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

// src/components/DataVisualisation/charts/ChartWithTableTabs/ChartWithTableTabs.tsx
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
        var _a2;
        return '"' + ((_a2 = c.text) != null ? _a2 : "") + '"';
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

// src/components/DataVisualisation/charts/Legend/Legend.tsx
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
      const effectivePalette = item.palette || palette;
      const fill = item.color || (effectivePalette === "region" ? pickRegionColor(item.id, i) : effectivePalette === "severity" ? pickSeverityColor(item.id, i) : effectivePalette === "org-level" ? pickOrgLevelColor(item.id, i) : pickSeriesColor(i));
      let stroke = item.stroke || (effectivePalette === "region" ? pickRegionStroke(item.id, i) : effectivePalette === "severity" ? pickSeverityStroke(item.id, i) : effectivePalette === "org-level" ? pickOrgLevelStroke(item.id, i) : pickSeriesStroke(i));
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
            style: {
              backgroundColor: fill,
              backgroundImage: item.patternDataUrl ? `url(${item.patternDataUrl})` : void 0,
              backgroundSize: item.patternDataUrl ? "auto" : void 0,
              borderColor: stroke
            },
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
      onVisibilityChange: (visible, hidden) => handleVisibilityChange(visible, hidden)
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
  smooth = true,
  stacked,
  gradientFill = true
}) => {
  var _a2;
  const scaleCtx = useScaleContext();
  if (!scaleCtx) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = (_a2 = visibility == null ? void 0 : visibility.isHidden(series.id)) != null ? _a2 : false;
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
  const linePath = React16.useMemo(() => {
    if (stacked && stacked.length === series.data.length) {
      return createLinePath(
        series.data,
        (d) => xScale(parseX(d)),
        (d) => {
          const idx = series.data.indexOf(d);
          return yScale(stacked[idx].y1);
        },
        { smooth }
      );
    }
    return createLinePath(
      series.data,
      (d) => xScale(parseX(d)),
      (d) => yScale(d.y),
      { smooth }
    );
  }, [series.data, stacked, xScale, yScale, parseX, smooth]);
  const areaPath = React16.useMemo(() => {
    if (stacked && stacked.length === series.data.length) {
      const gen2 = area_default().x((d) => xScale(parseX(d))).y0((_, i) => yScale(stacked[i].y0)).y1((_, i) => yScale(stacked[i].y1));
      if (smooth) gen2.curve(monotoneX);
      return gen2(series.data) || "";
    }
    const [domainMin, domainMax] = yScale.domain();
    let effectiveBaseline = baselineY;
    if (effectiveBaseline < domainMin) effectiveBaseline = domainMin;
    else if (effectiveBaseline > domainMax) effectiveBaseline = domainMax;
    const gen = area_default().x((d) => xScale(parseX(d))).y0(() => yScale(effectiveBaseline)).y1((d) => yScale(d.y));
    if (smooth) gen.curve(monotoneX);
    return gen(series.data) || "";
  }, [series.data, stacked, xScale, yScale, parseX, baselineY, smooth]);
  const gradientId = React16.useId();
  return /* @__PURE__ */ jsxs13(
    "g",
    {
      className: "fdp-area-series",
      "data-series": series.id,
      opacity: faded ? 0.25 : 1,
      "aria-hidden": faded ? true : void 0,
      children: [
        gradientFill && /* @__PURE__ */ jsx20("defs", { children: /* @__PURE__ */ jsxs13("linearGradient", { id: gradientId, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ jsx20("stop", { offset: "0%", stopColor: color2, stopOpacity: 0.25 }),
          /* @__PURE__ */ jsx20("stop", { offset: "100%", stopColor: color2, stopOpacity: 0 })
        ] }) }),
        /* @__PURE__ */ jsx20(
          "path",
          {
            className: "fdp-area-series__fill",
            d: areaPath,
            fill: gradientFill ? `url(#${gradientId})` : color2,
            ...gradientFill ? {} : { fillOpacity: 0.25 },
            stroke: "none"
          }
        ),
        !areaOnly && /* @__PURE__ */ jsx20("path", { d: linePath, fill: "none", stroke: color2, strokeWidth: 1 })
      ]
    }
  );
};
var AreaSeriesPrimitive_default = AreaSeriesPrimitive;

// src/components/DataVisualisation/series/BarSeriesPrimitive.tsx
import * as React17 from "react";
import { jsx as jsx21, jsxs as jsxs14 } from "react/jsx-runtime";
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
  allSeries,
  stacked,
  gapRatio = 0.15,
  minBarWidth,
  gradientFill = true,
  gradientStrokeMatch = true
}) => {
  var _a2;
  const effectiveGapRatio = Math.max(0, gapRatio);
  const scaleCtx = useScaleContext();
  const chartDims = useChartContext();
  if (!scaleCtx || !chartDims) return null;
  const { xScale, yScale } = scaleCtx;
  const visibility = useVisibility();
  const isHidden = (_a2 = visibility == null ? void 0 : visibility.isHidden(series.id)) != null ? _a2 : false;
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
  const { basePerBar } = React17.useMemo(() => {
    var _a3, _b2;
    if (isBandScale) {
      const bw = inferredPixelWidth;
      const autoPerBar = Math.max(1, (bw - groupGap * (seriesCount - 1)) / seriesCount);
      const explicit2 = (_a3 = series.barWidth) != null ? _a3 : barWidth;
      let finalPerBar = explicit2 ? Math.min(explicit2, bw) : autoPerBar;
      if (adaptive) {
        const targetGroup = bw * Math.min(1, Math.max(0.05, adaptiveGroupOccupancy));
        const adaptedPerBar = Math.max(1, (targetGroup - groupGap * (seriesCount - 1)) / seriesCount);
        finalPerBar = explicit2 ? Math.min(finalPerBar, adaptedPerBar) : adaptedPerBar;
      }
      return { basePerBar: finalPerBar };
    }
    const explicit = (_b2 = series.barWidth) != null ? _b2 : barWidth;
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
      return { basePerBar: finalPer };
    }
    if (explicit) {
      const finalPer = Math.min(explicit, maxAutoPer);
      return { basePerBar: finalPer };
    }
    return { basePerBar: maxAutoPer };
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
  const continuousSlots = React17.useMemo(() => {
    if (isBandScale) return [];
    if (!globalCenters.length) return [];
    if (globalCenters.length === 1) {
      return [{ center: globalCenters[0], left: 0, right: chartDims.innerWidth }];
    }
    const slots = [];
    for (let i = 0; i < globalCenters.length; i++) {
      const c = globalCenters[i];
      const left = i === 0 ? 0 : (globalCenters[i - 1] + c) / 2;
      const right = i === globalCenters.length - 1 ? chartDims.innerWidth : (c + globalCenters[i + 1]) / 2;
      slots.push({ center: c, left: Math.max(0, left), right: Math.min(chartDims.innerWidth, right) });
    }
    return slots;
  }, [isBandScale, globalCenters, chartDims.innerWidth]);
  const continuousUniforms = React17.useMemo(() => {
    if (isBandScale || !continuousSlots.length) return void 0;
    const occupancy = Math.min(1, Math.max(0.05, widthFactor));
    const slotSpans = continuousSlots.map((s) => Math.max(2, s.right - s.left));
    const candidates = slotSpans.map((span) => Math.max(2, Math.min(span - 1, span * occupancy)));
    let uniformGroupWidth = Math.min(...candidates);
    if (minBarWidth) {
      if (seriesCount <= 1) {
        const maxFeasible = Math.min(...slotSpans.map((span) => span - 1));
        if (maxFeasible >= minBarWidth && uniformGroupWidth < minBarWidth) {
          uniformGroupWidth = Math.min(maxFeasible, minBarWidth);
        }
      } else {
        const maxFeasibleGroup = Math.min(...slotSpans.map((span) => span - 1));
        const requiredGroupForMin = minBarWidth * seriesCount + (seriesCount - 1) * (minBarWidth * effectiveGapRatio);
        if (requiredGroupForMin <= maxFeasibleGroup && uniformGroupWidth < requiredGroupForMin) {
          uniformGroupWidth = requiredGroupForMin;
        }
      }
    }
    if (seriesCount <= 1) {
      if (minBarWidth && uniformGroupWidth < minBarWidth) {
        const canAllFit = slotSpans.every((span) => span >= minBarWidth);
        if (canAllFit) return { groupWidth: minBarWidth, barWidth: minBarWidth };
      }
      return { groupWidth: uniformGroupWidth, barWidth: uniformGroupWidth };
    }
    let b = uniformGroupWidth / (seriesCount + (seriesCount - 1) * effectiveGapRatio);
    if (b < 1) b = 1;
    if (minBarWidth && b < minBarWidth) {
      const requiredGroup = minBarWidth * seriesCount + (seriesCount - 1) * (minBarWidth * effectiveGapRatio);
      if (requiredGroup <= uniformGroupWidth) {
        b = minBarWidth;
      }
    }
    const groupWidth = b * seriesCount + (seriesCount - 1) * (b * effectiveGapRatio);
    return { groupWidth, barWidth: b };
  }, [isBandScale, continuousSlots, widthFactor, seriesCount, effectiveGapRatio, minBarWidth]);
  const baseSeriesColor = series.color || (palette === "region" ? pickRegionColor(series.id, seriesIndex) : pickSeriesColor(seriesIndex));
  const baseSeriesStroke = palette === "region" ? pickRegionStroke(series.id, seriesIndex) : pickSeriesStroke(seriesIndex);
  const baselineY = Number.isFinite(yScale(0)) ? yScale(0) : yScale.range()[0];
  const seriesGradientId = React17.useId();
  if (stacked && stacked.length === series.data.length) {
    return /* @__PURE__ */ jsxs14("g", { className: "fdp-bar-series fdp-bar-series--stacked", "data-series": series.id, opacity: faded ? 0.25 : 1, "aria-hidden": faded ? true : void 0, children: [
      gradientFill && /* @__PURE__ */ jsx21("defs", { children: /* @__PURE__ */ jsxs14("linearGradient", { id: seriesGradientId, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ jsx21("stop", { offset: "0%", stopColor: baseSeriesColor, stopOpacity: 0.3 }),
        /* @__PURE__ */ jsx21("stop", { offset: "60%", stopColor: baseSeriesColor, stopOpacity: 0.14 }),
        /* @__PURE__ */ jsx21("stop", { offset: "100%", stopColor: baseSeriesColor, stopOpacity: 0.06 })
      ] }) }),
      series.data.map((d, di) => {
        var _a3;
        const rawX = parseX(d);
        const xPos = isBandScale ? xScale(d.x) : xScale(rawX);
        let fullWidth;
        let barX;
        if (isBandScale) {
          fullWidth = inferredPixelWidth;
          barX = xPos;
        } else {
          const slot = continuousSlots.find((s) => Math.abs(s.center - xPos) < 0.5);
          if (!slot || !continuousUniforms) {
            fullWidth = basePerBar;
            barX = xPos - basePerBar / 2;
          } else {
            const { groupWidth } = continuousUniforms;
            fullWidth = groupWidth;
            let groupLeft = xPos - groupWidth / 2;
            if (groupLeft < slot.left) groupLeft = slot.left;
            if (groupLeft + groupWidth > slot.right) groupLeft = Math.max(slot.left, slot.right - groupWidth);
            barX = groupLeft;
          }
        }
        const seg = stacked[di];
        const y0 = yScale(seg.y0);
        const y1 = yScale(seg.y1);
        const y2 = Math.min(y0, y1);
        const height = Math.abs(y1 - y0) || 1;
        if (!isBandScale && minBarWidth && fullWidth < minBarWidth) {
          const slot = continuousSlots.find((s) => Math.abs(s.center - xPos) < 0.5);
          if (slot) {
            const maxFeasible = Math.max(2, slot.right - slot.left - 1);
            const target = Math.min(maxFeasible, minBarWidth);
            if (target > fullWidth) {
              fullWidth = target;
              barX = Math.max(slot.left, Math.min(slot.right - fullWidth, xPos - fullWidth / 2));
            }
          }
        }
        const isFocused = !faded && ((_a3 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a3.seriesId) === series.id && tooltip.focused.index === di;
        const onEnter = () => {
          if (!tooltip || faded) return;
          tooltip.setFocused({ seriesId: series.id, index: di, x: rawX, y: seg.y1 - seg.y0, clientX: barX + fullWidth / 2, clientY: y2 });
        };
        const onLeave = () => {
          var _a4;
          if (((_a4 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a4.seriesId) === series.id && tooltip.focused.index === di) tooltip.clear();
        };
        return /* @__PURE__ */ jsx21(
          "rect",
          {
            x: barX,
            y: y2,
            width: fullWidth,
            height,
            fill: gradientFill ? `url(#${seriesGradientId})` : baseSeriesColor,
            ...!gradientFill ? { fillOpacity: 0.25 } : {},
            stroke: isFocused ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : gradientFill && gradientStrokeMatch ? baseSeriesColor : void 0,
            strokeWidth: isFocused ? 2 : 1,
            className: "fdp-bar fdp-bar--stacked",
            tabIndex: faded || !focusable ? -1 : 0,
            role: "graphics-symbol",
            "aria-label": `${series.label || series.id} ${rawX instanceof Date ? rawX.toDateString() : rawX} value ${seg.y1 - seg.y0}`,
            onMouseEnter: onEnter,
            onFocus: onEnter,
            onMouseLeave: onLeave,
            onBlur: onLeave
          },
          di
        );
      })
    ] });
  }
  return /* @__PURE__ */ jsxs14("g", { className: "fdp-bar-series", "data-series": series.id, opacity: faded ? 0.25 : 1, "aria-hidden": faded ? true : void 0, children: [
    gradientFill && /* @__PURE__ */ jsxs14("defs", { children: [
      colorMode === "series" && /* @__PURE__ */ jsxs14("linearGradient", { id: seriesGradientId, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ jsx21("stop", { offset: "0%", stopColor: baseSeriesColor, stopOpacity: 0.3 }),
        /* @__PURE__ */ jsx21("stop", { offset: "60%", stopColor: baseSeriesColor, stopOpacity: 0.14 }),
        /* @__PURE__ */ jsx21("stop", { offset: "100%", stopColor: baseSeriesColor, stopOpacity: 0.06 })
      ] }),
      colorMode === "category" && series.data.map((d, di) => {
        const catColor = palette === "region" ? pickRegionColor(String(d.x), di) : pickSeriesColor(di);
        const gid = `${seriesGradientId}-${di}`;
        return /* @__PURE__ */ jsxs14("linearGradient", { id: gid, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
          /* @__PURE__ */ jsx21("stop", { offset: "0%", stopColor: catColor, stopOpacity: 0.3 }),
          /* @__PURE__ */ jsx21("stop", { offset: "60%", stopColor: catColor, stopOpacity: 0.14 }),
          /* @__PURE__ */ jsx21("stop", { offset: "100%", stopColor: catColor, stopOpacity: 0.06 })
        ] }, gid);
      })
    ] }),
    series.data.map((d, di) => {
      var _a3;
      const rawX = parseX(d);
      const xPos = isBandScale ? xScale(d.x) : xScale(rawX);
      let barX;
      let barWidth2;
      if (isBandScale) {
        const bw = inferredPixelWidth;
        if (seriesCount <= 1) {
          barWidth2 = bw;
          barX = xPos;
        } else {
          barWidth2 = Math.max(1, bw / (seriesCount + (seriesCount - 1) * effectiveGapRatio));
          const gap = barWidth2 * effectiveGapRatio;
          const groupWidth = barWidth2 * seriesCount + gap * (seriesCount - 1);
          const groupLeft = xPos + (bw - groupWidth) / 2;
          barX = groupLeft + seriesIndex * (barWidth2 + gap);
        }
      } else {
        const slot = continuousSlots.find((s) => s.center === xPos);
        if (!slot || !continuousUniforms) {
          barWidth2 = basePerBar;
          barX = xPos - basePerBar / 2;
          if (minBarWidth && barWidth2 < minBarWidth) {
            barWidth2 = minBarWidth;
            barX = xPos - barWidth2 / 2;
          }
        } else {
          const { barWidth: uBar } = continuousUniforms;
          barWidth2 = uBar;
          const gap = seriesCount > 1 ? uBar * effectiveGapRatio : 0;
          const computedGroupWidth = barWidth2 * seriesCount + gap * (seriesCount - 1);
          let groupLeft = xPos - computedGroupWidth / 2;
          if (groupLeft < slot.left) groupLeft = slot.left;
          if (groupLeft + computedGroupWidth > slot.right) groupLeft = Math.max(slot.left, slot.right - computedGroupWidth);
          barX = groupLeft + seriesIndex * (barWidth2 + gap);
        }
        if (minBarWidth && barWidth2 < minBarWidth) {
          const slot2 = continuousSlots.find((s) => Math.abs(s.center - xPos) < 0.5);
          if (slot2) {
            const maxFeasible = Math.max(2, slot2.right - slot2.left - 1);
            const target = Math.min(maxFeasible, minBarWidth);
            if (target > barWidth2) {
              if (seriesCount <= 1) {
                barWidth2 = target;
                barX = Math.max(slot2.left, Math.min(slot2.right - barWidth2, xPos - barWidth2 / 2));
              } else {
                const gap = target * effectiveGapRatio;
                const neededGroup = target * seriesCount + gap * (seriesCount - 1);
                if (neededGroup <= slot2.right - slot2.left - 1) {
                  barWidth2 = target;
                  const groupWidth = neededGroup;
                  let groupLeft = xPos - groupWidth / 2;
                  if (groupLeft < slot2.left) groupLeft = slot2.left;
                  if (groupLeft + groupWidth > slot2.right) groupLeft = Math.max(slot2.left, slot2.right - groupWidth);
                  barX = groupLeft + seriesIndex * (barWidth2 + gap);
                }
              }
            }
          }
        }
      }
      const barCenterX = barX + barWidth2 / 2;
      const valueY = yScale(d.y);
      const y2 = Math.min(baselineY, valueY);
      const height = Math.abs(baselineY - valueY);
      const isFocused = !faded && ((_a3 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a3.seriesId) === series.id && tooltip.focused.index === di;
      const onEnter = () => {
        if (!tooltip || faded) return;
        tooltip.setFocused({ seriesId: series.id, index: di, x: rawX, y: d.y, clientX: barCenterX, clientY: valueY });
      };
      const onLeave = () => {
        var _a4;
        if (((_a4 = tooltip == null ? void 0 : tooltip.focused) == null ? void 0 : _a4.seriesId) === series.id && tooltip.focused.index === di) tooltip.clear();
      };
      const catColor = colorMode === "category" ? palette === "region" ? pickRegionColor(String(d.x), di) : pickSeriesColor(di) : baseSeriesColor;
      const fillId = colorMode === "category" ? `${seriesGradientId}-${di}` : seriesGradientId;
      const baseStroke = gradientFill && gradientStrokeMatch ? catColor : colorMode === "category" ? palette === "region" ? pickRegionStroke(String(d.x), di) : pickSeriesStroke(di) : baseSeriesStroke;
      const barStrokeColor = isFocused ? "var(--nhs-fdp-color-primary-yellow, #ffeb3b)" : baseStroke || catColor;
      return /* @__PURE__ */ jsx21(
        "rect",
        {
          x: barX,
          y: y2,
          width: barWidth2,
          height: height || 1,
          fill: gradientFill ? `url(#${fillId})` : catColor,
          ...!gradientFill ? { fillOpacity: 0.25 } : {},
          stroke: barStrokeColor,
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
    })
  ] });
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
  var _a2, _b2;
  const chart = useChartContext();
  const innerWidth = (_a2 = iw != null ? iw : chart == null ? void 0 : chart.innerWidth) != null ? _a2 : 0;
  const innerHeight = (_b2 = ih != null ? ih : chart == null ? void 0 : chart.innerHeight) != null ? _b2 : 0;
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

// src/components/DataVisualisation/charts/ChartNoScript/ChartNoScript.tsx
import * as React19 from "react";
import { jsx as jsx23, jsxs as jsxs15 } from "react/jsx-runtime";
var ChartNoScript = ({
  title,
  description,
  source,
  table,
  className,
  id,
  message = "Interactive chart loading\u2026",
  forceFallback = false
}) => {
  const figureId = React19.useId();
  const resolvedId = id || figureId;
  const descId = description ? `${resolvedId}-desc` : void 0;
  const sourceId = source ? `${resolvedId}-src` : void 0;
  const isHydrated = typeof window !== "undefined" && !forceFallback;
  return /* @__PURE__ */ jsxs15(
    "figure",
    {
      id: resolvedId,
      className: clsx_default("fdp-chart fdp-chart--noscript", className),
      "aria-labelledby": `${resolvedId}-title`,
      "aria-describedby": clsx_default(descId, sourceId),
      "data-component": "ChartNoScript",
      children: [
        /* @__PURE__ */ jsx23("header", { className: "fdp-chart__header", children: /* @__PURE__ */ jsx23("h3", { id: `${resolvedId}-title`, className: "fdp-chart__title", children: title }) }),
        description && /* @__PURE__ */ jsx23("p", { id: descId, className: "fdp-chart__description", children: description }),
        !isHydrated && /* @__PURE__ */ jsx23("div", { className: "fdp-chart__loading", role: "status", "aria-live": "polite", children: message }),
        /* @__PURE__ */ jsxs15("div", { className: "fdp-chart__fallback", role: "group", "aria-label": title, children: [
          /* @__PURE__ */ jsx23("noscript", { children: /* @__PURE__ */ jsx23("div", { className: "fdp-chart__noscript-wrapper", children: /* @__PURE__ */ jsx23(Table_default, { ...table }) }) }),
          /* @__PURE__ */ jsx23("div", { className: "fdp-chart__table", "data-fallback-table": true, children: /* @__PURE__ */ jsx23(Table_default, { ...table }) })
        ] }),
        source && /* @__PURE__ */ jsx23("figcaption", { className: "fdp-chart__caption", children: source && /* @__PURE__ */ jsxs15("small", { id: sourceId, className: "fdp-chart__source", children: [
          "Source: ",
          source
        ] }) })
      ]
    }
  );
};
var ChartNoScript_default = ChartNoScript;

// src/components/DataVisualisation/charts/ChartEnhancer/ChartEnhancer.tsx
import * as React20 from "react";
import { jsx as jsx24 } from "react/jsx-runtime";
var ChartEnhancer = ({ selector = "figure.fdp-chart", onEnhanced, delay = 0, children }) => {
  const ref = React20.useRef(null);
  React20.useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const apply = () => {
      const figures = Array.from(root.querySelectorAll(selector));
      if (figures.length === 0) return;
      const newlyEnhanced = [];
      figures.forEach((fig) => {
        if (!fig.classList.contains("fdp-chart--enhanced")) {
          fig.classList.add("fdp-chart--enhanced");
          newlyEnhanced.push(fig);
        }
      });
      if (newlyEnhanced.length && onEnhanced) onEnhanced(newlyEnhanced);
    };
    if (delay > 0) {
      const t = window.setTimeout(apply, delay);
      return () => window.clearTimeout(t);
    }
    apply();
  }, [selector, onEnhanced, delay]);
  return /* @__PURE__ */ jsx24("div", { ref, children });
};
var ChartEnhancer_default = ChartEnhancer;

// src/components/DataVisualisation/components/MetricCard/MetricCard.tsx
import * as React21 from "react";
import { Fragment as Fragment2, jsx as jsx25, jsxs as jsxs16 } from "react/jsx-runtime";
var MetricCard = ({
  label,
  value,
  unit: unit2,
  delta,
  status = "neutral",
  variant = "default",
  subtitle,
  metadata,
  trendData,
  loading = false,
  error,
  valueFormatter,
  className,
  id,
  announceDelta = true
}) => {
  const internalId = React21.useId();
  const baseId = id || internalId;
  const labelId = `${baseId}-label`;
  const valueId = `${baseId}-value`;
  const deltaId = `${baseId}-delta`;
  const isNumber2 = typeof value === "number" && !Number.isNaN(value);
  const formattedValue = loading ? "\u2014" : error ? "" : isNumber2 ? valueFormatter ? valueFormatter(value) : value.toLocaleString() : value;
  let deltaDirection;
  let visualDelta = "";
  let deltaAria = "";
  if (delta && !loading && !error) {
    deltaDirection = delta.direction || (delta.value > 0 ? "up" : delta.value < 0 ? "down" : "neutral");
    const absVal = Math.abs(delta.value);
    const signedDisplay = deltaDirection === "up" ? `+${absVal}` : deltaDirection === "down" ? `-${absVal}` : "0";
    const suffix = delta.isPercent ? "%" : "";
    visualDelta = `${signedDisplay}${suffix}`;
    if (delta.ariaLabel) {
      deltaAria = delta.ariaLabel;
    } else {
      const better = delta.invert ? deltaDirection === "down" : deltaDirection === "up";
      const dirWord = deltaDirection === "neutral" ? "no change" : deltaDirection === "up" ? "up" : "down";
      deltaAria = `${dirWord} ${absVal}${suffix}${deltaDirection === "neutral" ? "" : better ? " (improvement)" : " (worse)"}`;
    }
  }
  return /* @__PURE__ */ jsx25(
    "div",
    {
      className: clsx_default(
        "fdp-metric-card",
        variant && `fdp-metric-card--${variant}`,
        status && `fdp-metric-card--status-${status}`,
        loading && "fdp-metric-card--loading",
        error && "fdp-metric-card--error",
        className
      ),
      role: "group",
      "aria-labelledby": labelId,
      "data-component": "MetricCard",
      children: /* @__PURE__ */ jsxs16("div", { className: "fdp-metric-card__inner", children: [
        /* @__PURE__ */ jsxs16("div", { className: "fdp-metric-card__header", children: [
          /* @__PURE__ */ jsx25("h3", { id: labelId, className: "fdp-metric-card__label", children: label }),
          metadata && /* @__PURE__ */ jsx25("div", { className: "fdp-metric-card__metadata", children: metadata })
        ] }),
        /* @__PURE__ */ jsxs16("div", { className: "fdp-metric-card__content", children: [
          /* @__PURE__ */ jsxs16("div", { className: "fdp-metric-card__value-section", children: [
            /* @__PURE__ */ jsx25("div", { id: valueId, className: "fdp-metric-card__value", children: loading ? /* @__PURE__ */ jsx25("div", { className: "fdp-metric-card__skeleton", "aria-hidden": "true", children: /* @__PURE__ */ jsx25("div", { className: "fdp-metric-card__skeleton-line fdp-metric-card__skeleton-line--value" }) }) : error ? /* @__PURE__ */ jsx25("div", { className: "fdp-metric-card__error", role: "alert", children: error }) : /* @__PURE__ */ jsxs16(Fragment2, { children: [
              /* @__PURE__ */ jsx25("span", { className: "fdp-metric-card__number", children: formattedValue }),
              unit2 && /* @__PURE__ */ jsx25("span", { className: "fdp-metric-card__unit", children: unit2 })
            ] }) }),
            subtitle && !loading && !error && /* @__PURE__ */ jsx25("div", { className: "fdp-metric-card__subtitle", children: subtitle })
          ] }),
          delta && !loading && !error && /* @__PURE__ */ jsx25("div", { className: "fdp-metric-card__delta-section", children: /* @__PURE__ */ jsxs16(
            "div",
            {
              id: deltaId,
              "aria-label": deltaAria,
              className: clsx_default(
                "fdp-metric-card__delta",
                deltaDirection && `fdp-metric-card__delta--${deltaDirection}`
              ),
              children: [
                /* @__PURE__ */ jsx25("span", { className: "fdp-metric-card__delta-value", children: visualDelta }),
                delta.period && /* @__PURE__ */ jsx25("span", { className: "fdp-metric-card__delta-period", children: delta.period })
              ]
            }
          ) }),
          trendData && trendData.length > 0 && !loading && !error && /* @__PURE__ */ jsx25("div", { className: "fdp-metric-card__trend", "aria-hidden": "true" })
        ] }),
        announceDelta && delta && !delta.ariaLabel && !loading && !error && /* @__PURE__ */ jsx25("div", { className: "fdp-visually-hidden", "aria-live": "polite", children: deltaAria })
      ] })
    }
  );
};
var MetricCard_default = MetricCard;

// src/components/DataVisualisation/charts/SPCChart/SPCChart.tsx
import * as React24 from "react";

// src/components/DataVisualisation/charts/SPCChart/SPCTooltipOverlay.tsx
import * as React22 from "react";
import { createPortal } from "react-dom";

// src/components/DataVisualisation/charts/SPCChart/logic/spc.ts
var isNumber = (v) => typeof v === "number" && Number.isFinite(v);
var sum = (arr) => arr.reduce((a, b) => a + b, 0);
var mean = (arr) => arr.length ? sum(arr) / arr.length : NaN;
function partitionRows(data) {
  const partitions = [];
  let current = [];
  for (const row of data) {
    if (row.baseline && current.length) {
      partitions.push(current);
      current = [];
    }
    current.push(row);
  }
  if (current.length) partitions.push(current);
  return partitions;
}
function movingRanges(values, ghosts) {
  const mr = new Array(values.length).fill(null);
  let prevIdx = null;
  for (let i = 0; i < values.length; i++) {
    const vi = values[i];
    if (!ghosts[i] && isNumber(vi)) {
      if (prevIdx !== null) {
        const pv = values[prevIdx];
        mr[i] = isNumber(pv) ? Math.abs(vi - pv) : null;
      }
      prevIdx = i;
    }
  }
  return mr;
}
function mrMeanWithOptionalExclusion(mr, excludeOutliers) {
  const pool = mr.filter((v) => isNumber(v));
  if (!pool.length) return { mrMean: NaN, mrUcl: NaN };
  let mrMeanVal = mean(pool);
  let mrUclVal = 3.267 * mrMeanVal;
  if (excludeOutliers) {
    const trimmed = pool.filter((v) => v <= mrUclVal);
    if (trimmed.length && trimmed.length !== pool.length) {
      mrMeanVal = mean(trimmed);
      mrUclVal = 3.267 * mrMeanVal;
    }
  }
  return { mrMean: mrMeanVal, mrUcl: mrUclVal };
}
function xmrLimits(centerMean, mrMeanVal) {
  if (!isNumber(centerMean) || !isNumber(mrMeanVal))
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  const k3 = 2.66;
  const k2 = 2 / 3 * k3;
  const k1 = 1 / 3 * k3;
  return {
    upperProcessLimit: centerMean + k3 * mrMeanVal,
    lowerProcessLimit: centerMean - k3 * mrMeanVal,
    upperTwoSigma: centerMean + k2 * mrMeanVal,
    lowerTwoSigma: centerMean - k2 * mrMeanVal,
    upperOneSigma: centerMean + k1 * mrMeanVal,
    lowerOneSigma: centerMean - k1 * mrMeanVal
  };
}
function countAbove(values, ref) {
  return values.reduce(
    (c, v) => c + (isNumber(v) && v > ref ? 1 : 0),
    0
  );
}
function countBelow(values, ref) {
  return values.reduce(
    (c, v) => c + (isNumber(v) && v < ref ? 1 : 0),
    0
  );
}
function isTrend(seq, n, direction) {
  const vals = seq.filter((v) => isNumber(v));
  if (vals.length < n) return false;
  const tail = vals.slice(-n);
  for (let i = 1; i < tail.length; i++) {
    if (direction === "up" && !(tail[i] > tail[i - 1])) return false;
    if (direction === "down" && !(tail[i] < tail[i - 1])) return false;
  }
  return true;
}
function isRunOnOneSide(seq, n, ref, side) {
  const vals = seq.filter((v) => isNumber(v));
  if (vals.length < n) return false;
  const tail = vals.slice(-n);
  if (side === "high") return tail.every((v) => v > ref);
  if (side === "low") return tail.every((v) => v < ref);
  return false;
}
var T_ALPHA = 0.2777;
var T_INV_ALPHA = 3.6;
var toTTransformed = (t) => isNumber(t) && t >= 0 ? Math.pow(t, T_ALPHA) : null;
var fromTTransformed = (y2) => isNumber(y2) && y2 >= 0 ? Math.pow(y2, T_INV_ALPHA) : null;
var SIGMA_PROBS = {
  one: { low: 0.1586552539, high: 0.8413447461 },
  two: { low: 0.0227501319, high: 0.9772498681 },
  three: { low: 1349898e-9, high: 0.998650102 }
};
function geomInvCdfReal(q, p) {
  if (!(q > 0 && q < 1) || !(p > 0 && p < 1)) return NaN;
  return Math.log(1 - q) / Math.log(1 - p);
}
function gChartProbabilityLimits(gMean) {
  if (!isNumber(gMean) || gMean < 0)
    return {
      cl: null,
      lcl: null,
      ucl: null,
      oneLow: null,
      oneHigh: null,
      twoLow: null,
      twoHigh: null
    };
  const p = 1 / (gMean + 1);
  const qToGbetween = (q) => geomInvCdfReal(q, p) - 1;
  const cl = qToGbetween(0.5);
  const lcl = Math.max(0, qToGbetween(SIGMA_PROBS.three.low));
  const ucl = qToGbetween(SIGMA_PROBS.three.high);
  const oneL = Math.max(0, qToGbetween(SIGMA_PROBS.one.low));
  const oneH = qToGbetween(SIGMA_PROBS.one.high);
  const twoL = Math.max(0, qToGbetween(SIGMA_PROBS.two.low));
  const twoH = qToGbetween(SIGMA_PROBS.two.high);
  return {
    cl,
    lcl,
    ucl,
    oneLow: oneL,
    oneHigh: oneH,
    twoLow: twoL,
    twoHigh: twoH
  };
}
function tChartLimits(tValues, ghosts, excludeOutliers) {
  const y2 = tValues.map((v) => isNumber(v) ? toTTransformed(v) : null);
  const mrY = movingRanges(y2, ghosts);
  const {
    mrMean: mrMeanY_raw
    /*, mrUcl: _mrUclY_raw*/
  } = mrMeanWithOptionalExclusion(mrY, !!excludeOutliers);
  const yNonGhost = y2.filter((v, i) => !ghosts[i] && isNumber(v));
  const yBar = yNonGhost.length ? mean(yNonGhost) : NaN;
  if (!isNumber(yBar) || !isNumber(mrMeanY_raw)) {
    return {
      center: null,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null,
      mr: mrY,
      mrMean: null,
      mrUcl: null
    };
  }
  const k3 = 2.66, k2 = 2 / 3 * k3, k1 = 1 / 3 * k3;
  const UL_y = yBar + k3 * mrMeanY_raw;
  const LL_y = yBar - k3 * mrMeanY_raw;
  const U2_y = yBar + k2 * mrMeanY_raw;
  const L2_y = yBar - k2 * mrMeanY_raw;
  const U1_y = yBar + k1 * mrMeanY_raw;
  const L1_y = yBar - k1 * mrMeanY_raw;
  const center = fromTTransformed(yBar);
  const upl = fromTTransformed(UL_y);
  const lpl = LL_y <= 0 ? null : fromTTransformed(LL_y);
  const oneH = fromTTransformed(U1_y);
  const oneL = L1_y <= 0 ? null : fromTTransformed(L1_y);
  const twoH = fromTTransformed(U2_y);
  const twoL = L2_y <= 0 ? null : fromTTransformed(L2_y);
  return {
    center: center != null ? center : null,
    upperProcessLimit: upl != null ? upl : null,
    lowerProcessLimit: lpl != null ? lpl : null,
    upperTwoSigma: twoH != null ? twoH : null,
    lowerTwoSigma: twoL != null ? twoL : null,
    upperOneSigma: oneH != null ? oneH : null,
    lowerOneSigma: oneL != null ? oneL : null,
    mr: mrY,
    mrMean: mrMeanY_raw,
    mrUcl: isNumber(mrMeanY_raw) ? 3.267 * mrMeanY_raw : null
  };
}
function buildSpc(args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const {
    chartType,
    metricImprovement,
    data,
    settings: userSettings = {}
  } = args;
  const settings = {
    excludeMovingRangeOutliers: false,
    specialCauseShiftPoints: 6,
    specialCauseTrendPoints: 6,
    enableFourOfFiveRule: false,
    suppressIsolatedFavourablePoint: true,
    minimumPoints: 13,
    minimumPointsWarning: false,
    minimumPointsPartition: 12,
    maximumPointsPartition: null,
    maximumPoints: null,
    pointConflictWarning: false,
    variationIconConflictWarning: true,
    nullValueWarning: true,
    targetSuppressedWarning: true,
    ghostOnRareEventWarning: true,
    partitionSizeWarnings: true,
    baselineSpecialCauseWarning: true,
    maximumPointsWarnings: true,
    assuranceCapabilityMode: true,
    precedenceStrategy: "legacy",
    emergingDirectionGrace: false,
    transitionBufferPoints: 2,
    collapseClusterRules: true,
    baselineSuggest: false,
    baselineSuggestMinDeltaSigma: 0.5,
    baselineSuggestStabilityPoints: 5,
    baselineSuggestMinGap: 12,
    baselineSuggestScoreThreshold: 50,
    ...userSettings
  };
  if (!Array.isArray(data)) throw new Error("data must be an array of rows");
  const canonical = data.map((d, i) => ({
    rowId: i + 1,
    x: d.x,
    value: isNumber(d.value) ? d.value : null,
    ghost: !!d.ghost,
    baseline: !!d.baseline,
    target: isNumber(d.target) ? d.target : null
  }));
  const partitions = partitionRows(canonical);
  const output = [];
  const warnings = [];
  const nonGhostGlobalCount = canonical.filter(
    (r2) => !r2.ghost && isNumber(r2.value)
  ).length;
  const globalEnough = nonGhostGlobalCount >= ((_a2 = settings.minimumPoints) != null ? _a2 : 13);
  let partitionId = 0;
  const partitionNonGhostCounts = {};
  for (const part of partitions) {
    partitionId++;
    const values = part.map((r2) => r2.value);
    const ghosts = part.map((r2) => r2.ghost);
    let mr = new Array(values.length).fill(null);
    let centerLine = NaN;
    let mrMean = NaN;
    let mrUcl = NaN;
    let lim = {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
    if (chartType === "XmR") {
      mr = movingRanges(values, ghosts);
      const nonGhostVals = values.filter(
        (v, i) => !ghosts[i] && isNumber(v)
      );
      centerLine = nonGhostVals.length ? mean(nonGhostVals) : NaN;
      const tmp = mrMeanWithOptionalExclusion(
        mr,
        !!settings.excludeMovingRangeOutliers
      );
      mrMean = tmp.mrMean;
      mrUcl = tmp.mrUcl;
      lim = xmrLimits(centerLine, mrMean);
    } else if (chartType === "T") {
      const tlim = tChartLimits(
        values,
        ghosts,
        !!settings.excludeMovingRangeOutliers
      );
      mr = tlim.mr;
      mrMean = (_b2 = tlim.mrMean) != null ? _b2 : NaN;
      mrUcl = (_c = tlim.mrUcl) != null ? _c : NaN;
      centerLine = (_d = tlim.center) != null ? _d : NaN;
      lim = {
        upperProcessLimit: tlim.upperProcessLimit,
        lowerProcessLimit: tlim.lowerProcessLimit,
        upperTwoSigma: tlim.upperTwoSigma,
        lowerTwoSigma: tlim.lowerTwoSigma,
        upperOneSigma: tlim.upperOneSigma,
        lowerOneSigma: tlim.lowerOneSigma
      };
    } else if (chartType === "G") {
      const nonGhostVals = values.filter(
        (v, i) => !ghosts[i] && isNumber(v)
      );
      const gMean = nonGhostVals.length ? mean(nonGhostVals) : NaN;
      const g = gChartProbabilityLimits(gMean);
      centerLine = (_e = g.cl) != null ? _e : NaN;
      lim = {
        upperProcessLimit: g.ucl,
        lowerProcessLimit: g.lcl,
        upperTwoSigma: g.twoHigh,
        lowerTwoSigma: g.twoLow,
        upperOneSigma: g.oneHigh,
        lowerOneSigma: g.oneLow
      };
      mr = new Array(values.length).fill(null);
      mrMean = NaN;
      mrUcl = NaN;
    } else {
      warnings.push({
        code: "unknown_chart_type",
        category: "config",
        severity: "error",
        message: `Unknown ChartType '${chartType}' \u2013 supported: XmR, T, G.`,
        context: { chartType }
      });
    }
    const withLines = part.map((r2, i) => {
      const pointRank = !r2.ghost && isNumber(r2.value) ? values.slice(0, i + 1).filter((v, j) => !ghosts[j] && isNumber(v)).length : 0;
      const limitsAllowed = globalEnough;
      const limits = limitsAllowed ? lim : {
        upperProcessLimit: null,
        lowerProcessLimit: null,
        upperTwoSigma: null,
        lowerTwoSigma: null,
        upperOneSigma: null,
        lowerOneSigma: null
      };
      const row = {
        rowId: r2.rowId,
        x: r2.x,
        value: isNumber(r2.value) ? r2.value : null,
        ghost: r2.ghost,
        partitionId,
        pointRank,
        mean: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        mr: isNumber(mr[i]) ? mr[i] : null,
        mrMean: limitsAllowed && isNumber(mrMean) ? mrMean : null,
        mrUcl: limitsAllowed && isNumber(mrUcl) ? mrUcl : null,
        upperProcessLimit: isNumber(limits.upperProcessLimit) ? limits.upperProcessLimit : null,
        lowerProcessLimit: isNumber(limits.lowerProcessLimit) ? limits.lowerProcessLimit : null,
        upperTwoSigma: isNumber(limits.upperTwoSigma) ? limits.upperTwoSigma : null,
        lowerTwoSigma: isNumber(limits.lowerTwoSigma) ? limits.lowerTwoSigma : null,
        upperOneSigma: isNumber(limits.upperOneSigma) ? limits.upperOneSigma : null,
        lowerOneSigma: isNumber(limits.lowerOneSigma) ? limits.lowerOneSigma : null,
        target: isNumber(r2.target) ? r2.target : null,
        specialCauseSinglePointAbove: false,
        specialCauseSinglePointBelow: false,
        specialCauseTwoOfThreeAbove: false,
        specialCauseTwoOfThreeBelow: false,
        specialCauseFourOfFiveAbove: false,
        specialCauseFourOfFiveBelow: false,
        specialCauseShiftHigh: false,
        specialCauseShiftLow: false,
        specialCauseTrendIncreasing: false,
        specialCauseTrendDecreasing: false,
        variationIcon: "none" /* None */,
        assuranceIcon: "none" /* None */,
        upperBaseline: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        lowerBaseline: limitsAllowed && isNumber(centerLine) ? centerLine : null,
        movingRangeHighPointValue: limitsAllowed && isNumber(mrUcl) ? mrUcl : null,
        ghostValue: r2.ghost && isNumber(r2.value) ? r2.value : null,
        ghostFlag: !!r2.ghost,
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        specialCauseNeitherValue: null
      };
      return row;
    });
    partitionNonGhostCounts[partitionId] = withLines.filter(
      (r2) => !r2.ghost && isNumber(r2.value)
    ).length;
    const shiftN = (_f = settings.specialCauseShiftPoints) != null ? _f : 6;
    const trendN = (_g = settings.specialCauseTrendPoints) != null ? _g : 6;
    const runningNonGhostValues = [];
    for (let i = 0; i < withLines.length; i++) {
      const row = withLines[i];
      const v = row.value;
      if (!row.ghost && isNumber(v)) runningNonGhostValues.push(v);
      const hasLimits = isNumber(row.mean) && isNumber(row.upperProcessLimit) && isNumber(row.lowerProcessLimit);
      if (!hasLimits || row.ghost || !isNumber(v)) {
        output.push(row);
        continue;
      }
      row.specialCauseSinglePointAbove = isNumber(row.upperProcessLimit) ? v > row.upperProcessLimit : false;
      row.specialCauseSinglePointBelow = isNumber(row.lowerProcessLimit) ? v < row.lowerProcessLimit : false;
      const allAboveMean = (vals, meanVal) => vals.every((val) => val > meanVal);
      const allBelowMean = (vals, meanVal) => vals.every((val) => val < meanVal);
      const last3 = runningNonGhostValues.slice(-3);
      if (last3.length === 3 && isNumber(row.mean)) {
        const u2 = (_h = row.upperTwoSigma) != null ? _h : Infinity;
        const l2 = (_i = row.lowerTwoSigma) != null ? _i : -Infinity;
        const highCount = countAbove(last3, u2);
        const lowCount = countBelow(last3, l2);
        if (highCount >= 2 && allAboveMean(last3, row.mean)) {
          row.specialCauseTwoOfThreeAbove = true;
        }
        if (lowCount >= 2 && allBelowMean(last3, row.mean)) {
          row.specialCauseTwoOfThreeBelow = true;
        }
      }
      if (settings.enableFourOfFiveRule && isNumber(row.mean)) {
        const last5 = runningNonGhostValues.slice(-5);
        if (last5.length === 5) {
          const u1 = (_j = row.upperOneSigma) != null ? _j : Infinity;
          const l1 = (_k = row.lowerOneSigma) != null ? _k : -Infinity;
          const highCount = countAbove(last5, u1);
          const lowCount = countBelow(last5, l1);
          if (highCount >= 4 && allAboveMean(last5, row.mean)) {
            row.specialCauseFourOfFiveAbove = true;
          }
          if (lowCount >= 4 && allBelowMean(last5, row.mean)) {
            row.specialCauseFourOfFiveBelow = true;
          }
        }
      }
      if (isNumber(row.mean)) {
        row.specialCauseShiftHigh = isRunOnOneSide(
          runningNonGhostValues,
          shiftN,
          row.mean,
          "high"
        );
        row.specialCauseShiftLow = isRunOnOneSide(
          runningNonGhostValues,
          shiftN,
          row.mean,
          "low"
        );
      }
      row.specialCauseTrendIncreasing = isTrend(
        runningNonGhostValues,
        trendN,
        "up"
      );
      row.specialCauseTrendDecreasing = isTrend(
        runningNonGhostValues,
        trendN,
        "down"
      );
      output.push(row);
    }
    if (settings.maximumPointsPartition && Number.isFinite(settings.maximumPointsPartition)) {
      const cap = settings.maximumPointsPartition;
      let seen = 0;
      for (const row of output.filter((r2) => r2.partitionId === partitionId)) {
        if (!row.ghost && isNumber(row.value)) seen++;
        if (seen > cap) {
          row.mean = row.upperProcessLimit = row.lowerProcessLimit = null;
          row.upperTwoSigma = row.lowerTwoSigma = row.upperOneSigma = row.lowerOneSigma = null;
        }
      }
    }
  }
  for (let idx = 0; idx < output.length; idx++) {
    const row = output[idx];
    if (row.ghost || !isNumber(row.value) || row.mean === null) {
      row.variationIcon = "none" /* None */;
      continue;
    }
    const anyHigh = row.specialCauseSinglePointAbove || row.specialCauseTwoOfThreeAbove || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveAbove || row.specialCauseShiftHigh || row.specialCauseTrendIncreasing;
    const anyLow = row.specialCauseSinglePointBelow || row.specialCauseTwoOfThreeBelow || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveBelow || row.specialCauseShiftLow || row.specialCauseTrendDecreasing;
    if (settings.collapseClusterRules) {
      if (row.specialCauseTwoOfThreeAbove && row.specialCauseFourOfFiveAbove)
        row.specialCauseTwoOfThreeAbove = false;
      if (row.specialCauseTwoOfThreeBelow && row.specialCauseFourOfFiveBelow)
        row.specialCauseTwoOfThreeBelow = false;
    }
    if (settings.precedenceStrategy === "directional_first") {
      const trendWindow = (_l = settings.specialCauseTrendPoints) != null ? _l : 6;
      const lookBack = trendWindow - 1;
      let emergingFavourable = false;
      if (lookBack >= 3 && isNumber(row.value)) {
        const recent = [];
        for (let back = idx; back >= 0 && recent.length < lookBack; back--) {
          const rv = output[back].value;
          if (output[back].ghost || !isNumber(rv)) continue;
          recent.unshift(rv);
        }
        if (recent.length === lookBack) {
          let directionalSteps = 0;
          for (let k = 1; k < recent.length; k++) {
            if (metricImprovement === "Down" /* Down */) {
              if (recent[k] <= recent[k - 1]) directionalSteps++;
            } else if (metricImprovement === "Up" /* Up */) {
              if (recent[k] >= recent[k - 1]) directionalSteps++;
            }
          }
          emergingFavourable = directionalSteps >= lookBack - 2;
        }
      }
      const favourable = metricImprovement === "Up" /* Up */ ? anyHigh : anyLow;
      const unfavourable = metricImprovement === "Up" /* Up */ ? anyLow : anyHigh;
      if (favourable && !unfavourable) {
        row.variationIcon = "improvement" /* Improvement */;
      } else if (!favourable && unfavourable) {
        const strongUnfavourable = row.specialCauseSinglePointAbove || row.specialCauseSinglePointBelow || row.specialCauseTwoOfThreeAbove || row.specialCauseTwoOfThreeBelow || settings.enableFourOfFiveRule && (row.specialCauseFourOfFiveAbove || row.specialCauseFourOfFiveBelow) || row.specialCauseShiftHigh || row.specialCauseShiftLow;
        if (settings.emergingDirectionGrace && emergingFavourable && !strongUnfavourable) {
          row.variationIcon = "neither" /* Neither */;
        } else {
          row.variationIcon = "concern" /* Concern */;
        }
      } else if (favourable && unfavourable) {
        if (settings.emergingDirectionGrace && (emergingFavourable || row.specialCauseTrendIncreasing || row.specialCauseTrendDecreasing)) {
          row.variationIcon = "improvement" /* Improvement */;
        } else {
          row.variationIcon = "neither" /* Neither */;
        }
      } else {
        row.variationIcon = "neither" /* Neither */;
      }
    } else {
      if (metricImprovement === "Up" /* Up */) {
        row.variationIcon = anyHigh ? "improvement" /* Improvement */ : anyLow ? "concern" /* Concern */ : "neither" /* Neither */;
      } else if (metricImprovement === "Down" /* Down */) {
        row.variationIcon = anyLow ? "improvement" /* Improvement */ : anyHigh ? "concern" /* Concern */ : "neither" /* Neither */;
      } else {
        row.variationIcon = "neither" /* Neither */;
      }
    }
    if (settings.suppressIsolatedFavourablePoint && row.variationIcon === "improvement" /* Improvement */) {
      const favourableSingleHigh = metricImprovement === "Up" /* Up */ && row.specialCauseSinglePointAbove;
      const favourableSingleLow = metricImprovement === "Down" /* Down */ && row.specialCauseSinglePointBelow;
      const corroborating = metricImprovement === "Up" /* Up */ && (row.specialCauseTwoOfThreeAbove || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveAbove || row.specialCauseShiftHigh || row.specialCauseTrendIncreasing) || metricImprovement === "Down" /* Down */ && (row.specialCauseTwoOfThreeBelow || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveBelow || row.specialCauseShiftLow || row.specialCauseTrendDecreasing);
      if ((favourableSingleHigh || favourableSingleLow) && !corroborating) {
        row.variationIcon = "none" /* None */;
        row.specialCauseImprovementValue = null;
      }
    }
    const anySignal = anyHigh || anyLow;
    row.specialCauseImprovementValue = anySignal && row.variationIcon === "improvement" /* Improvement */ ? row.value : null;
    row.specialCauseConcernValue = anySignal && row.variationIcon === "concern" /* Concern */ ? row.value : null;
    row.specialCauseNeitherValue = anySignal && row.variationIcon === "neither" /* Neither */ ? row.value : null;
    if (isNumber(row.value) && row.mean !== null) {
      row.assuranceIcon = "none" /* None */;
      const inputRow = canonical[row.rowId - 1];
      if (isNumber(inputRow.target)) {
        const t = inputRow.target;
        if (settings.assuranceCapabilityMode && isNumber(row.upperProcessLimit) && isNumber(row.lowerProcessLimit)) {
          if (metricImprovement === "Up" /* Up */) {
            if (row.lowerProcessLimit !== null && row.lowerProcessLimit > t)
              row.assuranceIcon = "pass" /* Pass */;
            else if (row.upperProcessLimit !== null && row.upperProcessLimit < t)
              row.assuranceIcon = "fail" /* Fail */;
            else row.assuranceIcon = "none" /* None */;
          } else if (metricImprovement === "Down" /* Down */) {
            if (row.upperProcessLimit !== null && row.upperProcessLimit < t)
              row.assuranceIcon = "pass" /* Pass */;
            else if (row.lowerProcessLimit !== null && row.lowerProcessLimit > t)
              row.assuranceIcon = "fail" /* Fail */;
            else row.assuranceIcon = "none" /* None */;
          } else {
            row.assuranceIcon = "none" /* None */;
          }
        } else {
          if (metricImprovement === "Down" /* Down */)
            row.assuranceIcon = row.value <= t ? "pass" /* Pass */ : "fail" /* Fail */;
          else if (metricImprovement === "Up" /* Up */)
            row.assuranceIcon = row.value >= t ? "pass" /* Pass */ : "fail" /* Fail */;
          else row.assuranceIcon = "none" /* None */;
        }
      }
    }
  }
  if (((_m = settings.minimumPointsWarning) != null ? _m : false) && !globalEnough) {
    const available = canonical.filter(
      (r2) => !r2.ghost && isNumber(r2.value)
    ).length;
    warnings.push({
      code: "insufficient_points_global",
      category: "data",
      severity: "warning",
      message: `Only ${available} non-ghost points available; minimum required is ${settings.minimumPoints}. Limits and icons suppressed.`,
      context: { available, minimumRequired: settings.minimumPoints }
    });
  }
  if (settings.variationIconConflictWarning) {
    for (const row of output) {
      if (row.variationIcon === "improvement" /* Improvement */) {
        const highAndLow = (row.specialCauseSinglePointAbove || row.specialCauseTwoOfThreeAbove || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveAbove || row.specialCauseShiftHigh || row.specialCauseTrendIncreasing) && (row.specialCauseSinglePointBelow || row.specialCauseTwoOfThreeBelow || settings.enableFourOfFiveRule && row.specialCauseFourOfFiveBelow || row.specialCauseShiftLow || row.specialCauseTrendDecreasing);
        if (highAndLow)
          warnings.push({
            code: "variation_conflict_row",
            category: "logic",
            severity: "warning",
            message: `Row ${row.rowId}: simultaneous high/low special-cause signals \u2013 variation icon may be ambiguous.`,
            context: { rowId: row.rowId }
          });
      }
    }
  }
  if (settings.maximumPoints && Number.isFinite(settings.maximumPoints)) {
    const cap = settings.maximumPoints;
    let seen = 0;
    for (const row of output) {
      if (!row.ghost && isNumber(row.value)) seen++;
      if (seen > cap) {
        row.mean = row.upperProcessLimit = row.lowerProcessLimit = null;
        row.upperTwoSigma = row.lowerTwoSigma = row.upperOneSigma = row.lowerOneSigma = null;
      }
    }
  }
  if (settings.nullValueWarning && (chartType === "XmR" || chartType === "G")) {
    const nullCount = canonical.filter(
      (r2) => !r2.ghost && (r2.value === null || r2.value === void 0 || !isNumber(r2.value))
    ).length;
    if (nullCount)
      warnings.push({
        code: "null_values_excluded",
        category: "data",
        severity: "info",
        message: `${nullCount} null/missing value(s) excluded from calculations.`,
        context: { nullCount }
      });
  }
  if (settings.targetSuppressedWarning && (chartType === "T" || chartType === "G")) {
    const hasTarget = canonical.some((r2) => isNumber(r2.target));
    if (hasTarget)
      warnings.push({
        code: "target_ignored_rare_event",
        category: "target",
        severity: "info",
        message: `Targets provided are ignored for ${chartType} charts in this port.`,
        context: { chartType }
      });
  }
  if (settings.ghostOnRareEventWarning && (chartType === "T" || chartType === "G")) {
    const ghostCount = canonical.filter((r2) => r2.ghost).length;
    if (ghostCount)
      warnings.push({
        code: "ghost_rows_rare_event",
        category: "ghost",
        severity: "info",
        message: `${ghostCount} ghost row(s) supplied for rare-event chart (${chartType}); verify intent.`,
        context: { chartType, ghostCount }
      });
  }
  if (settings.partitionSizeWarnings) {
    Object.entries(partitionNonGhostCounts).forEach(([pid, count]) => {
      if (count < settings.minimumPointsPartition)
        warnings.push({
          code: "insufficient_points_partition",
          category: "partition",
          severity: "warning",
          message: `Partition ${pid} has only ${count} non-ghost point(s); below recommended ${settings.minimumPointsPartition}.`,
          context: {
            partitionId: Number(pid),
            count,
            minimum: settings.minimumPointsPartition
          }
        });
    });
  }
  if (settings.baselineSpecialCauseWarning) {
    const issueRows = [];
    output.forEach((r2) => {
      const input = canonical[r2.rowId - 1];
      if (input.baseline) {
        const anySignal = r2.specialCauseSinglePointAbove || r2.specialCauseSinglePointBelow || r2.specialCauseTwoOfThreeAbove || r2.specialCauseTwoOfThreeBelow || r2.specialCauseFourOfFiveAbove || r2.specialCauseFourOfFiveBelow || r2.specialCauseShiftHigh || r2.specialCauseShiftLow || r2.specialCauseTrendIncreasing || r2.specialCauseTrendDecreasing;
        if (anySignal) issueRows.push(r2.rowId);
      }
    });
    if (issueRows.length)
      warnings.push({
        code: "baseline_with_special_cause",
        category: "baseline",
        severity: "warning",
        message: `Baseline set with special-cause present at row(s): ${issueRows.join(", ")}.`,
        context: { rows: issueRows }
      });
  }
  if (settings.maximumPointsWarnings) {
    if (settings.maximumPointsPartition && Number.isFinite(settings.maximumPointsPartition))
      warnings.push({
        code: "partition_cap_applied",
        category: "limits",
        severity: "info",
        message: `Limits suppressed after ${settings.maximumPointsPartition} non-ghost points per partition.`,
        context: { cap: settings.maximumPointsPartition }
      });
    if (settings.maximumPoints && Number.isFinite(settings.maximumPoints))
      warnings.push({
        code: "global_cap_applied",
        category: "limits",
        severity: "info",
        message: `Limits suppressed after global cap of ${settings.maximumPoints} non-ghost points.`,
        context: { cap: settings.maximumPoints }
      });
  }
  let suggestedBaselines;
  if (settings.baselineSuggest) {
    const rows = output;
    const W = settings.baselineSuggestStabilityPoints;
    const minGap = settings.baselineSuggestMinGap;
    const minDeltaSigma = settings.baselineSuggestMinDeltaSigma;
    const scoreThreshold = settings.baselineSuggestScoreThreshold;
    const suggestions = [];
    let lastBaselineIndex = 0;
    for (let i = 0; i < rows.length; i++) {
      let becameTrue2 = function(flag) {
        return !!r2[flag] && !(prev == null ? void 0 : prev[flag]);
      };
      var becameTrue = becameTrue2;
      const r2 = rows[i];
      if (i > 0 && rows[i - 1].partitionId !== r2.partitionId) {
        lastBaselineIndex = i;
      }
      const prev = rows[i - 1];
      const candidates = [];
      if (becameTrue2("specialCauseShiftHigh") || becameTrue2("specialCauseShiftLow")) {
        candidates.push({ reason: "shift", index: i });
      }
      if (becameTrue2("specialCauseTrendIncreasing") || becameTrue2("specialCauseTrendDecreasing")) {
        candidates.push({ reason: "trend", index: i });
      }
      if (becameTrue2("specialCauseSinglePointAbove") || becameTrue2("specialCauseSinglePointBelow")) {
        candidates.push({ reason: "point", index: i });
      }
      for (const c of candidates) {
        if (c.index - lastBaselineIndex < minGap) continue;
        const oldStart = Math.max(0, c.index - W);
        const oldEnd = c.index - 1;
        if (oldEnd - oldStart + 1 < W) continue;
        const newStart = c.index;
        const newEnd = c.index + W - 1;
        if (newEnd >= rows.length) continue;
        const oldVals = rows.slice(oldStart, oldEnd + 1).map((rw) => rw.value).filter(isNumber);
        const newVals = rows.slice(newStart, newEnd + 1).map((rw) => rw.value).filter(isNumber);
        if (oldVals.length < W || newVals.length < W) continue;
        const cand = rows[c.index];
        let sigma = null;
        if (isNumber(cand.upperProcessLimit) && isNumber(cand.mean)) {
          const span = cand.upperProcessLimit - cand.mean;
          if (span > 0) sigma = span / 3;
        }
        if (!sigma || sigma <= 0) continue;
        const oldMean = mean(oldVals);
        const newMean = mean(newVals);
        const deltaMean = newMean - oldMean;
        if (Math.abs(deltaMean) < minDeltaSigma * sigma) continue;
        const newRows = rows.slice(newStart, newEnd + 1);
        const concernCount = newRows.filter((rw) => rw.variationIcon === "concern" /* Concern */).length;
        if (concernCount > 1) continue;
        const variance = (arr) => {
          const m = mean(arr);
          return arr.length ? arr.reduce((a, b) => a + (b - m) * (b - m), 0) / arr.length : 0;
        };
        const oldVar = variance(oldVals);
        const newVar = variance(newVals);
        let scoreBase = c.reason === "shift" ? 90 : c.reason === "trend" ? 70 : 60;
        if (newVar < oldVar) scoreBase += 10;
        scoreBase -= concernCount * 15;
        if (scoreBase < scoreThreshold) continue;
        const existing = suggestions.find((s) => s.index === c.index);
        if (existing) {
          const priority = (reason) => reason === "shift" ? 3 : reason === "trend" ? 2 : 1;
          if (priority(c.reason) > priority(existing.reason) || scoreBase > existing.score) {
            existing.reason = c.reason;
            existing.score = scoreBase;
            existing.deltaMean = deltaMean;
            existing.oldMean = oldMean;
            existing.newMean = newMean;
            existing.window = [newStart, newEnd];
          }
        } else {
          suggestions.push({
            index: c.index,
            reason: c.reason,
            score: scoreBase,
            deltaMean,
            oldMean,
            newMean,
            window: [newStart, newEnd]
          });
        }
      }
      if (i > 0 && rows[i - 1].partitionId !== rows[i].partitionId) {
        lastBaselineIndex = i;
      }
    }
    suggestions.sort((a, b) => a.index - b.index);
    suggestedBaselines = suggestions;
  }
  return { rows: output, warnings, ...suggestedBaselines ? { suggestedBaselines } : {} };
}

// src/components/DataVisualisation/charts/SPCChart/logic/spcDescriptors.ts
var ruleGlossary = {
  singlePointAbove: {
    tooltip: "Single point above upper control limit",
    narration: "Single point beyond a control limit"
  },
  singlePointBelow: {
    tooltip: "Single point below lower control limit",
    narration: "Single point beyond a control limit"
  },
  twoOfThreeAbove: {
    tooltip: "Two of three points beyond +2\u03C3",
    narration: "Two of three points beyond two sigma (same side)"
  },
  twoOfThreeBelow: {
    tooltip: "Two of three points beyond -2\u03C3",
    narration: "Two of three points beyond two sigma (same side)"
  },
  fourOfFiveAbove: {
    tooltip: "Four of five points beyond +1\u03C3",
    narration: "Four of five points beyond one sigma (same side)"
  },
  fourOfFiveBelow: {
    tooltip: "Four of five points beyond -1\u03C3",
    narration: "Four of five points beyond one sigma (same side)"
  },
  shiftHigh: {
    tooltip: "Shift: run of points above centre line",
    narration: "Shift (run on one side of mean)"
  },
  shiftLow: {
    tooltip: "Shift: run of points below centre line",
    narration: "Shift (run on one side of mean)"
  },
  trendIncreasing: {
    tooltip: "Trend: consecutive increasing points",
    narration: "Trend (consecutive increases)"
  },
  trendDecreasing: {
    tooltip: "Trend: consecutive decreasing points",
    narration: "Trend (consecutive decreases)"
  }
};
function extractRuleIds(row) {
  if (!row) return [];
  const ids = [];
  if (row.specialCauseSinglePointAbove) ids.push("singlePointAbove");
  if (row.specialCauseSinglePointBelow) ids.push("singlePointBelow");
  if (row.specialCauseTwoOfThreeAbove) ids.push("twoOfThreeAbove");
  if (row.specialCauseTwoOfThreeBelow) ids.push("twoOfThreeBelow");
  if (row.specialCauseFourOfFiveAbove) ids.push("fourOfFiveAbove");
  if (row.specialCauseFourOfFiveBelow) ids.push("fourOfFiveBelow");
  if (row.specialCauseShiftHigh) ids.push("shiftHigh");
  if (row.specialCauseShiftLow) ids.push("shiftLow");
  if (row.specialCauseTrendIncreasing) ids.push("trendIncreasing");
  if (row.specialCauseTrendDecreasing) ids.push("trendDecreasing");
  return ids;
}
function variationLabel(icon) {
  switch (icon) {
    case "improvement" /* Improvement */:
      return "Improvement signal";
    case "concern" /* Concern */:
      return "Concern signal";
    case "neither" /* Neither */:
      return "Common cause variation";
    case "none" /* None */:
      return null;
    // suppressed / not enough data
    default:
      return null;
  }
}
function assuranceLabel(icon) {
  switch (icon) {
    case "pass" /* Pass */:
      return "Target met";
    case "fail" /* Fail */:
      return "Target not met";
    default:
      return null;
  }
}
function zoneLabel(mean2, sigma, value) {
  if (mean2 == null || !Number.isFinite(sigma) || sigma <= 0) return null;
  const z = Math.abs((value - mean2) / sigma);
  if (z < 1) return "Within 1\u03C3";
  if (z < 2) return "Between 1\u20132\u03C3";
  if (z < 3) return "Between 2\u20133\u03C3";
  return "Beyond 3\u03C3";
}
var VARIATION_COLOR_TOKENS = {
  improvement: { token: "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)", hex: "#00B0F0" },
  concern: { token: "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)", hex: "#E46C0A" },
  none: { token: "var(--nhs-fdp-color-data-viz-spc-no-judgement, #490092)", hex: "#490092" },
  neither: { token: "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)", hex: "#A6A6A6" }
};
function getVariationColorToken(icon) {
  var _a2, _b2;
  if (!icon) return VARIATION_COLOR_TOKENS.neither.token;
  return (_b2 = (_a2 = VARIATION_COLOR_TOKENS[icon]) == null ? void 0 : _a2.token) != null ? _b2 : VARIATION_COLOR_TOKENS.neither.token;
}

// src/mapping/tag.ts
function mapTagProps(input) {
  const { color: color2 = "default", noBorder, closable, disabled, className } = input;
  const classes = [
    "nhsuk-tag",
    color2 !== "default" ? `nhsuk-tag--${color2}` : "",
    noBorder ? "nhsuk-tag--no-border" : "",
    closable ? "nhsuk-tag--closable" : "",
    disabled ? "nhsuk-tag--disabled" : "",
    className || ""
  ].filter(Boolean).join(" ");
  return { classes, showClose: !!closable, disabled: !!disabled };
}

// src/components/Tag/Tag.tsx
import { jsx as jsx26, jsxs as jsxs17 } from "react/jsx-runtime";
var Tag = ({
  text,
  html,
  children,
  color: color2 = "default",
  noBorder = false,
  closable = false,
  onClose,
  disabled = false,
  className,
  ...props
}) => {
  const model = mapTagProps({ color: color2, noBorder, closable, disabled, className });
  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };
  return /* @__PURE__ */ jsxs17("strong", { className: model.classes, ...props, children: [
    children ? children : html ? /* @__PURE__ */ jsx26("span", { dangerouslySetInnerHTML: { __html: html } }) : text,
    closable && /* @__PURE__ */ jsx26(
      "button",
      {
        type: "button",
        className: "nhsuk-tag__close",
        onClick: handleClose,
        disabled,
        "aria-label": "Remove",
        title: "Remove",
        children: "\xD7"
      }
    )
  ] });
};

// src/components/DataVisualisation/charts/SPCChart/SPCTooltipOverlay.tsx
import { jsx as jsx27, jsxs as jsxs18 } from "react/jsx-runtime";
var SPCTooltipOverlay = ({
  engineRows,
  limits,
  pointDescriber,
  measureName,
  measureUnit,
  dateFormatter
}) => {
  var _a2, _b2, _c, _d, _e, _f;
  const tooltip = useTooltipContext();
  const chart = useChartContext();
  const [cachedFocus, setCachedFocus] = React22.useState(null);
  const [hoveringTooltip, setHoveringTooltip] = React22.useState(false);
  const hideTimeoutRef = React22.useRef(null);
  React22.useEffect(() => {
    if (!tooltip) return;
    if (tooltip.focused) {
      setCachedFocus(tooltip.focused);
      if (hideTimeoutRef.current) {
        cancelAnimationFrame(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    }
    if (!tooltip.focused && !hoveringTooltip) {
      const id = requestAnimationFrame(() => {
        setCachedFocus(null);
        hideTimeoutRef.current = null;
      });
      hideTimeoutRef.current = id;
    }
    return () => {
      if (hideTimeoutRef.current) {
        cancelAnimationFrame(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
    };
  }, [tooltip, tooltip == null ? void 0 : tooltip.focused, hoveringTooltip]);
  const focused = tooltip && (tooltip.focused || (hoveringTooltip ? cachedFocus : null) || cachedFocus);
  const [visible, setVisible] = React22.useState(false);
  React22.useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [focused == null ? void 0 : focused.index]);
  const innerWidth = (_a2 = chart == null ? void 0 : chart.innerWidth) != null ? _a2 : 0;
  const innerHeight = (_b2 = chart == null ? void 0 : chart.innerHeight) != null ? _b2 : 0;
  const clampX = focused ? Math.min(Math.max(focused.clientX, 0), innerWidth) : 0;
  const clampY = focused ? Math.min(Math.max(focused.clientY, 0), innerHeight) : 0;
  const containerEl = (_c = chart.ref) == null ? void 0 : _c.current;
  const host = containerEl;
  if (!focused) {
    return null;
  }
  const row = engineRows == null ? void 0 : engineRows[focused.index];
  const rules = extractRuleIds(row).map((r2) => ruleGlossary[r2].tooltip);
  const dateObj = focused.x instanceof Date ? focused.x : new Date(focused.x);
  const dateLabel = dateFormatter ? dateFormatter(dateObj) : dateObj.toDateString();
  const unit2 = measureUnit ? `${measureUnit}` : "";
  const valueLabel = measureName || unit2 ? `${focused.y}${unit2 ? "" + unit2 : " "}${measureName ? " " + measureName : ""}` : `${focused.y}`;
  const variationDesc = variationLabel(row == null ? void 0 : row.variationIcon);
  const assuranceDesc = assuranceLabel(row == null ? void 0 : row.assuranceIcon);
  const zone = zoneLabel(
    (_d = limits.mean) != null ? _d : null,
    limits.sigma,
    focused.y
  );
  const narrative = pointDescriber ? pointDescriber(focused.index, { x: focused.x, y: focused.y }) : void 0;
  const showBadges = variationDesc || assuranceDesc || zone;
  const hasRules = rules.length > 0;
  const focusYellow = "var(--nhs-fdp-color-primary-yellow, #ffeb3b)";
  const spcDotColor = getVariationColorToken(row == null ? void 0 : row.variationIcon);
  const charPx = 6.2;
  const baseLinesForMeasure = [
    narrative || "",
    `${dateLabel} \u2022 ${valueLabel}`
  ].filter(Boolean);
  const contentWidthEstimate = baseLinesForMeasure.reduce(
    (m, s) => Math.max(m, s.length * charPx + 32),
    0
  );
  const minWidth = 200;
  const maxWidth = 440;
  const boxWidth = Math.min(maxWidth, Math.max(minWidth, contentWidthEstimate));
  let left = clampX + 12;
  const marginTop = (_f = (_e = chart.margin) == null ? void 0 : _e.top) != null ? _f : 0;
  let top = marginTop + clampY + 16;
  if (left + boxWidth > innerWidth) {
    const flipGap = -60;
    left = clampX - flipGap - boxWidth;
  }
  if (left < 0) left = Math.max(0, innerWidth - boxWidth);
  const tooltipId = focused ? `spc-tooltip-${focused.index}` : "spc-tooltip";
  const portal = host ? createPortal(
    /* @__PURE__ */ jsx27(
      "div",
      {
        id: tooltipId,
        className: "fdp-spc-tooltip fdp-spc-tooltip-portal" + (visible ? " is-visible" : ""),
        style: {
          position: "absolute",
          left,
          top,
          width: boxWidth,
          maxWidth,
          zIndex: 10,
          pointerEvents: "auto",
          userSelect: "none"
        },
        role: "tooltip",
        "aria-live": "polite",
        "aria-hidden": visible ? "false" : "true",
        "data-floating": true,
        "data-placement": left + boxWidth + 12 > innerWidth ? "left" : "right",
        onPointerEnter: () => {
          setHoveringTooltip(true);
          if (hideTimeoutRef.current) {
            cancelAnimationFrame(hideTimeoutRef.current);
            hideTimeoutRef.current = null;
          }
        },
        onPointerLeave: () => {
          setHoveringTooltip(false);
          if (!(tooltip == null ? void 0 : tooltip.focused)) {
            const id = requestAnimationFrame(() => {
              setCachedFocus(null);
              hideTimeoutRef.current = null;
            });
            hideTimeoutRef.current = id;
          }
        },
        children: /* @__PURE__ */ jsxs18("div", { className: "fdp-spc-tooltip__body", children: [
          /* @__PURE__ */ jsxs18("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--date", children: [
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx27("strong", { children: "Date" }) }),
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__primary-line", children: dateLabel })
          ] }),
          /* @__PURE__ */ jsxs18("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--value", children: [
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx27("strong", { children: "Value" }) }),
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__primary-line", children: valueLabel })
          ] }),
          showBadges && /* @__PURE__ */ jsxs18("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--signals", children: [
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx27("strong", { children: "Signals" }) }),
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Signals", children: variationDesc && (variationDesc.toLowerCase().includes("concern") ? /* @__PURE__ */ jsx27(
              Tag,
              {
                text: variationDesc,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--concern"
              }
            ) : variationDesc.toLowerCase().includes("improvement") ? /* @__PURE__ */ jsx27(
              Tag,
              {
                text: variationDesc,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--improvement"
              }
            ) : /* @__PURE__ */ jsx27(
              Tag,
              {
                text: variationDesc,
                color: "default",
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--common"
              }
            )) })
          ] }),
          assuranceDesc && /* @__PURE__ */ jsxs18("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--assurance", children: [
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx27("strong", { children: "Assurance" }) }),
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: (() => {
              const lower = assuranceDesc.toLowerCase();
              const isFail = lower.includes("not met") || lower.includes("not achieved");
              const isPass = !isFail && /(^|\b)(met|achieved)(\b|$)/.test(lower);
              return /* @__PURE__ */ jsx27(
                Tag,
                {
                  text: assuranceDesc,
                  color: "default",
                  className: `fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--assurance ${isPass ? "fdp-spc-tag--improvement" : "fdp-spc-tag--concern"}`,
                  "aria-label": `Assurance: ${assuranceDesc}`
                }
              );
            })() })
          ] }),
          zone && /* @__PURE__ */ jsxs18("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--limits", children: [
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx27("strong", { children: "Control Limits & Sigma" }) }),
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__badges", "aria-label": "Limits", children: /* @__PURE__ */ jsx27(
              Tag,
              {
                text: (() => {
                  const z = zone.toLowerCase();
                  if (z.startsWith("within 1")) return "\u22641\u03C3";
                  if (z.startsWith("1\u20132")) return "1\u20132\u03C3";
                  if (z.startsWith("2\u20133")) return "2\u20133\u03C3";
                  if (z.startsWith(">3")) return ">3\u03C3";
                  return zone;
                })(),
                color: zone.includes(">3") ? "orange" : zone.includes("2\u20133") ? "yellow" : "grey",
                "aria-label": `Sigma zone: ${zone}`,
                className: "fdp-spc-tooltip__tag fdp-spc-tag fdp-spc-tag--zone"
              }
            ) })
          ] }),
          hasRules && /* @__PURE__ */ jsxs18("div", { className: "fdp-spc-tooltip__section fdp-spc-tooltip__section--rules", children: [
            /* @__PURE__ */ jsx27("div", { className: "fdp-spc-tooltip__section-label", children: /* @__PURE__ */ jsx27("strong", { children: "Special cause" }) }),
            /* @__PURE__ */ jsx27(
              "div",
              {
                className: "fdp-spc-tooltip__rule-tags",
                "aria-label": "Special cause rules",
                children: rules.map((r2) => {
                  const ruleColorClass = variationDesc ? variationDesc.toLowerCase().includes("concern") ? "fdp-spc-tag--concern" : variationDesc.toLowerCase().includes("improvement") ? "fdp-spc-tag--improvement" : "fdp-spc-tag--rule" : "fdp-spc-tag--rule";
                  return /* @__PURE__ */ jsx27(
                    Tag,
                    {
                      text: r2,
                      color: "default",
                      className: `fdp-spc-tooltip__tag fdp-spc-tag ${ruleColorClass}`
                    },
                    r2
                  );
                })
              }
            )
          ] })
        ] })
      }
    ),
    host
  ) : null;
  return /* @__PURE__ */ jsxs18(
    "g",
    {
      className: "fdp-tooltip-layer fdp-spc-tooltip",
      pointerEvents: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx27(
          "circle",
          {
            cx: clampX,
            cy: clampY,
            r: 7,
            fill: "none",
            stroke: focusYellow,
            strokeWidth: 3
          }
        ),
        /* @__PURE__ */ jsx27(
          "circle",
          {
            cx: clampX,
            cy: clampY,
            r: 5,
            fill: "#000",
            stroke: focusYellow,
            strokeWidth: 1.5
          }
        ),
        /* @__PURE__ */ jsx27(
          "circle",
          {
            cx: clampX,
            cy: clampY,
            r: 2.5,
            fill: spcDotColor,
            stroke: "#fff",
            strokeWidth: 0.5
          }
        ),
        portal
      ]
    }
  );
};
var SPCTooltipOverlay_default = SPCTooltipOverlay;

// src/components/DataVisualisation/charts/SPCIcons/SPCIcon.tsx
import { useId as useId6, useMemo as useMemo12 } from "react";

// src/components/DataVisualisation/charts/SPCIcons/tokenUtils.ts
var spcTokenRoot = null;
var _a, _b;
try {
  const tokens = __require("@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json");
  spcTokenRoot = ((_b = (_a = tokens == null ? void 0 : tokens.color) == null ? void 0 : _a["data-viz"]) == null ? void 0 : _b.spc) || null;
} catch {
}
var tokenColour = (key, fallback) => {
  if (!spcTokenRoot) return fallback;
  const parts = key.split(".");
  let current = spcTokenRoot;
  for (const p of parts) {
    if (current == null) break;
    current = current[p];
  }
  const val = current;
  if (val == null) return fallback;
  if (typeof val === "string" || typeof val === "number") return String(val);
  if (val.$value != null) return String(val.$value);
  if (val.value != null) return String(val.value);
  return fallback;
};
var getGradientOpacities = () => ({
  start: tokenColour("gradient.stop.start-opacity", "0.18"),
  mid: tokenColour("gradient.stop.mid-opacity", "0.06"),
  end: tokenColour("gradient.stop.end-opacity", "0"),
  triStart: tokenColour("gradient.stop.triangle-start-opacity", tokenColour("gradient.stop.start-opacity", "0.18")),
  triMid: tokenColour("gradient.stop.triangle-mid-opacity", tokenColour("gradient.stop.mid-opacity", "0.06")),
  triEnd: tokenColour("gradient.stop.triangle-end-opacity", tokenColour("gradient.stop.end-opacity", "0"))
});

// src/components/DataVisualisation/charts/SPCIcons/SPCConstants.ts
var DEFAULT_COLOURS = {
  ["pass" /* Pass */]: "#00B0F0",
  // blue
  ["fail" /* Fail */]: "#E46C0A",
  // orange
  ["uncertain" /* Uncertain */]: "#A6A6A6"
  // grey
};
var DEFAULT_LETTERS = {
  ["pass" /* Pass */]: "P",
  ["fail" /* Fail */]: "F",
  ["uncertain" /* Uncertain */]: "?"
};
var pickTextColour = (hex2) => {
  const c = hex2.replace("#", "");
  const r2 = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const srgb = [r2, g, b].map((v) => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  const L = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  return L < 0.55 ? "#ffffff" : "#212b32";
};
var VARIATION_COLOURS = {
  ["special_cause_deteriorating" /* SpecialCauseDeteriorating */]: {
    hex: VARIATION_COLOR_TOKENS.concern.hex,
    judgement: "deteriorating" /* Deteriorating */,
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  ["special_cause_improving" /* SpecialCauseImproving */]: {
    hex: VARIATION_COLOR_TOKENS.improvement.hex,
    judgement: "improving" /* Improving */,
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  ["common_cause" /* CommonCause */]: {
    hex: VARIATION_COLOR_TOKENS.neither.hex,
    judgement: "none" /* None */,
    label: "Common Cause",
    description: "Common cause variation only \u2013 no special cause detected."
  },
  ["special_cause_no_judgement" /* SpecialCauseNoJudgement */]: {
    hex: VARIATION_COLOR_TOKENS.none.hex,
    judgement: "no_judgement" /* No_Judgement */,
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(VARIATION_COLOURS).forEach((def) => {
  if (!def.text) def.text = pickTextColour(def.hex);
});
var getVariationColour = (state) => VARIATION_COLOURS[state];
var getVariationTrend = (state) => VARIATION_COLOURS[state].judgement || "none" /* None */;
var POINT_LAYOUTS = {
  special: {
    higher: [
      { cx: 77.5, cy: 158.5 },
      { cx: 114, cy: 175 },
      { cx: 150.5, cy: 158.5 },
      { cx: 188, cy: 125 },
      { cx: 225, cy: 137 }
    ],
    lower: [
      { cx: 77.5, cy: 139.5 },
      { cx: 114, cy: 124.5 },
      { cx: 150.5, cy: 139.5 },
      { cx: 188, cy: 175.5 },
      { cx: 224.5, cy: 162 }
    ]
  },
  common: [
    { cx: 76.5, cy: 149.5 },
    { cx: 113, cy: 179.5 },
    { cx: 149.5, cy: 117 },
    { cx: 187, cy: 171 },
    { cx: 223.5, cy: 158 }
  ]
};
function computePointPositions(state, direction) {
  let src;
  if (state === "common_cause" /* CommonCause */) src = POINT_LAYOUTS.common;
  else src = POINT_LAYOUTS.special[direction === "lower" /* Lower */ ? "lower" : "higher"];
  return src.map((p) => ({ ...p }));
}

// src/components/DataVisualisation/charts/SPCIcons/SPCIcon.tsx
import { Fragment as Fragment3, jsx as jsx28, jsxs as jsxs19 } from "react/jsx-runtime";
var pickTextColour2 = (hex2) => {
  const c = hex2.replace("#", "");
  const r2 = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const srgb = [r2, g, b].map(
    (v) => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  );
  const L = 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2];
  return L < 0.55 ? "#ffffff" : "#212b32";
};
var VARIATION_COLOURS2 = {
  ["special_cause_deteriorating" /* SpecialCauseDeteriorating */]: {
    hex: tokenColour("concern", "#E46C0A"),
    judgement: "deteriorating" /* Deteriorating */,
    label: "Special Cause (Deteriorating)",
    description: "Deteriorating variation detected (special cause) relative to baseline."
  },
  ["special_cause_improving" /* SpecialCauseImproving */]: {
    hex: tokenColour("improvement", "#00B0F0"),
    judgement: "improving" /* Improving */,
    label: "Special Cause (Improving)",
    description: "Improving variation detected (special cause) relative to baseline."
  },
  ["common_cause" /* CommonCause */]: {
    hex: tokenColour("common-cause", "#A6A6A6"),
    judgement: "none" /* None */,
    label: "Common Cause",
    description: "Common cause variation only \u2013 no special cause detected."
  },
  ["special_cause_no_judgement" /* SpecialCauseNoJudgement */]: {
    hex: tokenColour("no-judgement", "#490092"),
    judgement: "no_judgement" /* No_Judgement */,
    label: "Special Cause (No Judgement)",
    description: "Special cause detected without assigning improving/deteriorating judgement."
  }
};
Object.values(VARIATION_COLOURS2).forEach((def) => {
  if (!def.text) def.text = pickTextColour2(def.hex);
});
var resolveStateAndLayout = (input) => {
  var _a2, _b2, _c, _d, _e, _f;
  if (input.variationIcon !== void 0) {
    const eng = input;
    const mapping = {
      ["improvement" /* Improvement */]: "special_cause_improving" /* SpecialCauseImproving */,
      ["concern" /* Concern */]: "special_cause_deteriorating" /* SpecialCauseDeteriorating */,
      ["neither" /* Neither */]: "common_cause" /* CommonCause */,
      ["none" /* None */]: "special_cause_no_judgement" /* SpecialCauseNoJudgement */
    };
    const state2 = mapping[eng.variationIcon];
    const direction2 = (_a2 = eng.trend) != null ? _a2 : state2 === "special_cause_improving" /* SpecialCauseImproving */ ? "higher" /* Higher */ : state2 === "special_cause_deteriorating" /* SpecialCauseDeteriorating */ ? "lower" /* Lower */ : "higher" /* Higher */;
    return { state: state2, direction: direction2, polarity: (_b2 = eng.polarity) != null ? _b2 : "context_dependent" /* ContextDependent */ };
  }
  if (input.state !== void 0) {
    const v1 = input;
    let inferred;
    if (v1.state === "special_cause_improving" /* SpecialCauseImproving */) inferred = "higher" /* Higher */;
    else if (v1.state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) inferred = "lower" /* Lower */;
    const direction2 = (_d = (_c = v1.trend) != null ? _c : inferred) != null ? _d : "higher" /* Higher */;
    return { state: v1.state, direction: direction2, polarity: (_e = v1.polarity) != null ? _e : "context_dependent" /* ContextDependent */ };
  }
  const v2 = input;
  const map2 = {
    ["improving" /* Improving */]: "special_cause_improving" /* SpecialCauseImproving */,
    ["deteriorating" /* Deteriorating */]: "special_cause_deteriorating" /* SpecialCauseDeteriorating */,
    ["no_judgement" /* No_Judgement */]: "special_cause_no_judgement" /* SpecialCauseNoJudgement */,
    ["none" /* None */]: "common_cause" /* CommonCause */
  };
  const state = map2[v2.judgement];
  let direction;
  if (v2.judgement === "improving" /* Improving */) {
    direction = v2.polarity === "lower_is_better" /* LowerIsBetter */ ? "lower" /* Lower */ : "higher" /* Higher */;
  } else if (v2.judgement === "deteriorating" /* Deteriorating */) {
    direction = v2.polarity === "lower_is_better" /* LowerIsBetter */ ? "higher" /* Higher */ : "lower" /* Lower */;
  } else {
    direction = (_f = v2.trend) != null ? _f : "higher" /* Higher */;
  }
  return { state, direction, polarity: v2.polarity };
};
function deriveVariationAriaDescription(input, context) {
  const { state, direction, polarity } = resolveStateAndLayout(input);
  const judgement = getVariationTrend(state);
  const sideWord = direction === "higher" /* Higher */ ? "above" : "below";
  const trendWord = direction === "higher" /* Higher */ ? "upwards" : "downwards";
  const polarityClause = (() => {
    switch (polarity) {
      case "higher_is_better" /* HigherIsBetter */:
        return "For this measure, higher values are better.";
      case "lower_is_better" /* LowerIsBetter */:
        return "For this measure, lower values are better.";
      default:
        return "Direction of improvement is context dependent.";
    }
  })();
  const base = (() => {
    switch (judgement) {
      case "improving" /* Improving */:
        return `Special cause improvement: recent data show a sustained run ${sideWord} the mean (unlikely due to random variation).`;
      case "deteriorating" /* Deteriorating */:
        return `Special cause deterioration: recent data show a sustained run ${sideWord} the mean (unlikely due to random variation).`;
      case "no_judgement" /* No_Judgement */:
        return `Special cause detected (no value judgement): recent data show a change in level, trending ${trendWord}.`;
      case "none" /* None */:
      default:
        return `Common cause variation: points vary randomly around the mean; no special cause detected.`;
    }
  })();
  const parts = [
    base,
    polarityClause,
    (context == null ? void 0 : context.measureName) ? `Measure: ${context.measureName}.` : null,
    (context == null ? void 0 : context.datasetContext) ? `${context.datasetContext}.` : null,
    (context == null ? void 0 : context.organisation) ? `Organisation: ${context.organisation}.` : null,
    (context == null ? void 0 : context.timeframe) ? `Timeframe: ${context.timeframe}.` : null,
    (context == null ? void 0 : context.additionalNote) ? context.additionalNote : null
  ];
  return parts.filter(Boolean).join(" ");
}
var SpcVariationIcon = ({
  data,
  size = 44,
  ariaLabel,
  showLetter = true,
  dropShadow = true,
  gradientWash = false,
  variant = "classic",
  runLength = 0,
  ...rest
}) => {
  const shadowId = useId6();
  const washId = useId6();
  const { start: gradStart, mid: gradMid, end: gradEnd, triStart: triGradStart, triMid: triGradMid, triEnd: triGradEnd } = getGradientOpacities();
  const { state, direction } = resolveStateAndLayout(data);
  const colour = getVariationColour(state);
  const judgement = getVariationTrend(state);
  const showLetterForJudgement = judgement === "improving" /* Improving */ || judgement === "deteriorating" /* Deteriorating */;
  const letter = showLetter && showLetterForJudgement ? direction === "higher" /* Higher */ ? "H" : "L" : "";
  const isSpecial = state !== "common_cause" /* CommonCause */;
  const isNoJudgement = state === "special_cause_no_judgement" /* SpecialCauseNoJudgement */;
  const neutralGrey = tokenColour("common-cause", "#A6A6A6");
  const pointColour = isSpecial ? colour.hex : neutralGrey;
  const points = useMemo12(
    () => computePointPositions(state, direction),
    [state, direction]
  );
  const aria = ariaLabel || `${colour.label}${letter ? direction === "higher" /* Higher */ ? " \u2013 Higher" : " \u2013 Lower" : ""}`;
  const ariaDescription = deriveVariationAriaDescription(
    data
  );
  if (variant === "triangleWithRun") {
    const triSize = 100;
    const centerX = 150;
    const centerY = 140;
    const upTriangle = [
      [centerX, centerY - triSize / 2],
      [centerX - triSize / 2, centerY + triSize / 2],
      [centerX + triSize / 2, centerY + triSize / 2]
    ];
    const downTriangle = [
      [centerX, centerY + triSize / 2],
      [centerX - triSize / 2, centerY - triSize / 2],
      [centerX + triSize / 2, centerY - triSize / 2]
    ];
    let shape = null;
    let shapeLetter = "";
    if (state === "special_cause_improving" /* SpecialCauseImproving */) {
      shape = /* @__PURE__ */ jsx28(
        "polygon",
        {
          points: upTriangle.map((p) => p.join(",")).join(" "),
          fill: colour.hex,
          stroke: colour.hex,
          strokeWidth: 6,
          transform: "translate(0, -15)"
        }
      );
      shapeLetter = "H";
    } else if (state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) {
      shape = /* @__PURE__ */ jsx28(
        "polygon",
        {
          points: downTriangle.map((p) => p.join(",")).join(" "),
          fill: colour.hex,
          stroke: colour.hex,
          strokeWidth: 6,
          transform: "translate(0, 15)"
        }
      );
      shapeLetter = "L";
    } else if (state === "special_cause_no_judgement" /* SpecialCauseNoJudgement */) {
      shape = /* @__PURE__ */ jsx28(
        "polygon",
        {
          points: direction === "higher" /* Higher */ ? upTriangle.map((p) => p.join(",")).join(" ") : downTriangle.map((p) => p.join(",")).join(" "),
          fill: colour.hex,
          stroke: colour.hex,
          strokeWidth: 6,
          transform: direction === "higher" /* Higher */ ? "translate(0,-6)" : "translate(0,6)"
        }
      );
    }
    const runLen = Math.max(0, Math.min(5, Math.floor(runLength || 0)));
    const runY = state === "common_cause" /* CommonCause */ ? 160 : direction === "higher" /* Higher */ ? 210 : 70;
    const runRadius = 10;
    const runGap = 26;
    const runStartX = centerX - 2 * runGap;
    const runColor = state === "special_cause_improving" /* SpecialCauseImproving */ ? tokenColour("improvement", "#00B0F0") : state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */ ? tokenColour("concern", "#E46C0A") : neutralGrey;
    const runCircles = Array.from({ length: 5 }).map((_, i) => {
      const filled = (state === "special_cause_improving" /* SpecialCauseImproving */ || state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) && i >= 5 - runLen;
      const fill = filled ? runColor : neutralGrey;
      return /* @__PURE__ */ jsx28("circle", { cx: runStartX + i * runGap, cy: runY, r: runRadius, fill, stroke: fill, strokeWidth: 1 }, i);
    });
    return /* @__PURE__ */ jsxs19("svg", { width: size, height: size, viewBox: "0 0 300 300", role: "img", "aria-label": aria, "aria-description": ariaDescription, ...rest, children: [
      /* @__PURE__ */ jsxs19("defs", { children: [
        dropShadow && /* @__PURE__ */ jsxs19("filter", { id: shadowId, filterUnits: "objectBoundingBox", children: [
          /* @__PURE__ */ jsx28("feGaussianBlur", { stdDeviation: "3" }),
          /* @__PURE__ */ jsx28("feOffset", { dx: "0", dy: "15", result: "blur" }),
          /* @__PURE__ */ jsx28("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
          /* @__PURE__ */ jsx28("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
          /* @__PURE__ */ jsx28("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
        ] }),
        gradientWash && /* @__PURE__ */ jsxs19("linearGradient", { id: washId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
          /* @__PURE__ */ jsx28("stop", { offset: "0%", stopColor: colour.hex, stopOpacity: parseFloat(triGradStart) }),
          /* @__PURE__ */ jsx28("stop", { offset: "75%", stopColor: colour.hex, stopOpacity: parseFloat(triGradMid) }),
          /* @__PURE__ */ jsx28("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(triGradEnd) })
        ] })
      ] }),
      /* @__PURE__ */ jsx28("circle", { stroke: "none", fill: gradientWash ? `url(#${washId})` : "#ffffff", ...dropShadow ? { filter: `url(#${shadowId})` } : {}, cx: "150", cy: "150", r: "120" }),
      /* @__PURE__ */ jsx28("circle", { stroke: colour.hex, strokeWidth: 15, strokeMiterlimit: 10, fill: "none", cx: "150", cy: "150", r: "120" }),
      /* @__PURE__ */ jsxs19("g", { transform: direction === "higher" /* Higher */ ? "translate(0,-10)" : "translate(0,20)", children: [
        shape,
        shapeLetter && /* @__PURE__ */ jsx28("text", { fill: "#fff", fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif", fontWeight: "bold", fontSize: 64, x: "150", y: direction === "higher" /* Higher */ ? 150 : 145, textAnchor: "middle", dominantBaseline: "middle", children: shapeLetter }),
        runCircles
      ] })
    ] });
  }
  if (variant === "triangle") {
    const triSize = 150;
    const centerX = 150;
    const centerY = 150;
    const upTriangle = [
      [centerX, centerY - triSize / 2],
      [centerX - triSize / 2, centerY + triSize / 2],
      [centerX + triSize / 2, centerY + triSize / 2]
    ];
    const downTriangle = [
      [centerX, centerY + triSize / 2],
      [centerX - triSize / 2, centerY - triSize / 2],
      [centerX + triSize / 2, centerY - triSize / 2]
    ];
    const flatLine = [
      [centerX - triSize / 2, centerY + triSize / 2],
      [centerX + triSize / 2, centerY + triSize / 2]
    ];
    let shape = null;
    if (state === "special_cause_improving" /* SpecialCauseImproving */) {
      shape = /* @__PURE__ */ jsxs19(Fragment3, { children: [
        /* @__PURE__ */ jsx28(
          "polygon",
          {
            points: upTriangle.map((p) => p.join(",")).join(" "),
            fill: colour.hex,
            stroke: colour.hex,
            strokeWidth: 8,
            transform: "translate(0, -10)"
          }
        ),
        /* @__PURE__ */ jsx28(
          "text",
          {
            fill: "#fff",
            fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 100,
            x: "150",
            y: "175",
            textAnchor: "middle",
            dominantBaseline: "middle",
            children: "H"
          }
        )
      ] });
    } else if (state === "special_cause_deteriorating" /* SpecialCauseDeteriorating */) {
      shape = /* @__PURE__ */ jsxs19(Fragment3, { children: [
        /* @__PURE__ */ jsx28(
          "polygon",
          {
            points: downTriangle.map((p) => p.join(",")).join(" "),
            fill: colour.hex,
            stroke: colour.hex,
            strokeWidth: 8,
            transform: "translate(0, 10)"
          }
        ),
        /* @__PURE__ */ jsx28(
          "text",
          {
            fill: "#fff",
            fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 100,
            x: "150",
            y: "145",
            textAnchor: "middle",
            dominantBaseline: "middle",
            children: "L"
          }
        )
      ] });
    } else if (state === "special_cause_no_judgement" /* SpecialCauseNoJudgement */) {
      shape = /* @__PURE__ */ jsx28(
        "polygon",
        {
          points: direction === "higher" /* Higher */ ? upTriangle.map((p) => p.join(",")).join(" ") : downTriangle.map((p) => p.join(",")).join(" "),
          fill: colour.hex,
          stroke: colour.hex,
          strokeWidth: 8,
          transform: direction === "higher" /* Higher */ ? "translate(0, -15)" : "translate(0, 15)"
        }
      );
    } else if (state === "common_cause" /* CommonCause */) {
      shape = /* @__PURE__ */ jsx28(
        "line",
        {
          x1: flatLine[0][0],
          y1: flatLine[0][1],
          x2: flatLine[1][0],
          y2: flatLine[1][1],
          stroke: colour.hex,
          strokeWidth: 32,
          strokeLinecap: "square",
          transform: "translate(0, -75)"
        }
      );
    }
    return /* @__PURE__ */ jsxs19(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 300 300",
        role: "img",
        "aria-label": aria,
        "aria-description": ariaDescription,
        ...rest,
        children: [
          /* @__PURE__ */ jsxs19("defs", { children: [
            dropShadow && /* @__PURE__ */ jsxs19("filter", { id: shadowId, filterUnits: "objectBoundingBox", children: [
              /* @__PURE__ */ jsx28("feGaussianBlur", { stdDeviation: "3" }),
              /* @__PURE__ */ jsx28("feOffset", { dx: "0", dy: "15", result: "blur" }),
              /* @__PURE__ */ jsx28("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
              /* @__PURE__ */ jsx28("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
              /* @__PURE__ */ jsx28("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
            ] }),
            gradientWash && /* @__PURE__ */ jsxs19("linearGradient", { id: washId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
              /* @__PURE__ */ jsx28("stop", { offset: "0%", stopColor: colour.hex, stopOpacity: parseFloat(triGradStart) }),
              /* @__PURE__ */ jsx28("stop", { offset: "65%", stopColor: colour.hex, stopOpacity: parseFloat(triGradMid) }),
              /* @__PURE__ */ jsx28("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(triGradEnd) })
            ] })
          ] }),
          /* @__PURE__ */ jsx28(
            "circle",
            {
              stroke: "none",
              fill: gradientWash ? `url(#${washId})` : "#ffffff",
              ...dropShadow ? { filter: `url(#${shadowId})` } : {},
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          /* @__PURE__ */ jsx28(
            "circle",
            {
              stroke: colour.hex,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          ),
          shape
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs19(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": aria,
      "aria-description": ariaDescription,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs19("defs", { children: [
          dropShadow && /* @__PURE__ */ jsxs19("filter", { id: shadowId, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ jsx28("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ jsx28("feOffset", { dx: "0", dy: "15", result: "blur" }),
            /* @__PURE__ */ jsx28("feFlood", { floodColor: "rgb(150,150,150)", floodOpacity: "1" }),
            /* @__PURE__ */ jsx28("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ jsx28("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          gradientWash && /* @__PURE__ */ jsxs19("linearGradient", { id: washId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsx28("stop", { offset: "0%", stopColor: colour.hex, stopOpacity: parseFloat(gradStart) }),
            /* @__PURE__ */ jsx28("stop", { offset: "65%", stopColor: colour.hex, stopOpacity: parseFloat(gradMid) }),
            /* @__PURE__ */ jsx28("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(gradEnd) })
          ] })
        ] }),
        /* @__PURE__ */ jsx28(
          "circle",
          {
            stroke: "none",
            fill: gradientWash ? `url(#${washId})` : "#ffffff",
            ...dropShadow ? { filter: `url(#${shadowId})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ jsx28(
          "circle",
          {
            stroke: colour.hex,
            strokeWidth: 15,
            strokeMiterlimit: 10,
            fill: "none",
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        letter && /* @__PURE__ */ jsx28(
          "text",
          {
            fill: colour.hex,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            transform: "translate(86.67, 54) scale(0.5, 0.5)",
            textAnchor: "end",
            children: /* @__PURE__ */ jsx28("tspan", { x: "120", y: direction === "lower" /* Lower */ ? "325" : "156", children: letter })
          }
        ),
        isNoJudgement ? /* @__PURE__ */ jsx28(
          "path",
          {
            "aria-hidden": "true",
            fillRule: "evenodd",
            stroke: "none",
            fill: colour.hex,
            ...direction === "lower" /* Lower */ ? { transform: "rotate(90 150 150)" } : { transform: "translate(-5 0) rotate(0 150 150)" },
            d: "M 90.26,185.42 L 149.31,126.37 127.44,104.51 209.81,90.66 195.96,173.02 174.09,151.16 115.05,210.2 90.26,185.42 Z M 90.26,185.42"
          }
        ) : /* @__PURE__ */ jsxs19(Fragment3, { children: [
          points.length === 5 && /* @__PURE__ */ jsx28(
            "path",
            {
              "aria-hidden": "true",
              fill: "none",
              stroke: neutralGrey,
              strokeWidth: 12,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              opacity: 0.9,
              d: `M ${points.map((p) => `${p.cx} ${p.cy}`).join(" L ")}`
            }
          ),
          points.map((p, i) => {
            const specialIdx = i >= points.length - 2 && isSpecial;
            const fill = specialIdx ? pointColour : neutralGrey;
            const stroke = fill;
            return /* @__PURE__ */ jsx28(
              "circle",
              {
                stroke,
                strokeWidth: 2,
                strokeMiterlimit: 10,
                fill,
                cx: p.cx,
                cy: p.cy,
                r: 16
              },
              i
            );
          })
        ] })
      ]
    }
  );
};
SpcVariationIcon.displayName = "SpcVariationIcon";

// src/components/DataVisualisation/charts/SPCIcons/SPCAssuranceIcon.tsx
import { useId as useId7 } from "react";
import { Fragment as Fragment4, jsx as jsx29, jsxs as jsxs20 } from "react/jsx-runtime";
var SPCAssuranceIcon = ({
  status,
  size = 44,
  ariaLabel,
  dropShadow = true,
  colourOverride,
  gradientWash = false,
  letterOverride,
  showTrendLines = true,
  ...rest
}) => {
  const shadowId = useId7();
  const washId = useId7();
  const { start: gradStart, mid: gradMid, end: gradEnd } = getGradientOpacities();
  const colour = colourOverride || DEFAULT_COLOURS[status];
  const letter = (letterOverride || DEFAULT_LETTERS[status]).slice(0, 2);
  const aria = ariaLabel || `Assurance ${status}`;
  return /* @__PURE__ */ jsxs20(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 300 300",
      role: "img",
      "aria-label": aria,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs20("defs", { children: [
          dropShadow && /* @__PURE__ */ jsxs20("filter", { id: shadowId, filterUnits: "objectBoundingBox", children: [
            /* @__PURE__ */ jsx29("feGaussianBlur", { stdDeviation: "3" }),
            /* @__PURE__ */ jsx29("feOffset", { dx: "-1", dy: "15", result: "blur" }),
            /* @__PURE__ */ jsx29("feFlood", { floodColor: "rgb(166,166,166)", floodOpacity: "1" }),
            /* @__PURE__ */ jsx29("feComposite", { in2: "blur", operator: "in", result: "colorShadow" }),
            /* @__PURE__ */ jsx29("feComposite", { in: "SourceGraphic", in2: "colorShadow", operator: "over" })
          ] }),
          gradientWash && /* @__PURE__ */ jsxs20("linearGradient", { id: washId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ jsx29("stop", { offset: "0%", stopColor: colour, stopOpacity: parseFloat(gradStart) }),
            /* @__PURE__ */ jsx29("stop", { offset: "65%", stopColor: colour, stopOpacity: parseFloat(gradMid) }),
            /* @__PURE__ */ jsx29("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: parseFloat(gradEnd) })
          ] })
        ] }),
        /* @__PURE__ */ jsx29(
          "circle",
          {
            stroke: "none",
            fill: gradientWash ? `url(#${washId})` : "#ffffff",
            ...dropShadow ? { filter: `url(#${shadowId})` } : {},
            cx: "150",
            cy: "150",
            r: "120"
          }
        ),
        /* @__PURE__ */ jsx29(
          "text",
          {
            fill: colour,
            fontFamily: "Arial-BoldMT, Arial, 'Helvetica Neue', Helvetica, sans-serif",
            fontWeight: "bold",
            fontSize: 176,
            x: 0,
            y: 0,
            transform: "translate(121.01, 32) scale(0.5, 0.5)",
            textAnchor: "middle",
            children: /* @__PURE__ */ jsx29("tspan", { x: 60, y: 184, children: letter })
          }
        ),
        showTrendLines && /* @__PURE__ */ jsxs20(Fragment4, { children: [
          status === "fail" /* Fail */ ? /* @__PURE__ */ jsx29(
            "path",
            {
              id: "fail-line",
              stroke: colour,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 33,143 L 268,143"
            }
          ) : status === "uncertain" /* Uncertain */ ? /* @__PURE__ */ jsx29(
            "path",
            {
              id: "uncertain-line",
              stroke: "rgb(166, 166, 166)",
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "16.5,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 36,174 L 266,174"
            }
          ) : /* @__PURE__ */ jsx29(
            "path",
            {
              id: "pass-line",
              stroke: colour,
              strokeWidth: 9.5,
              strokeMiterlimit: 9.5,
              strokeDasharray: "35,10",
              strokeDashoffset: 0,
              fill: "none",
              d: "M 48,204 L 254,204"
            }
          ),
          /* @__PURE__ */ jsx29(
            "path",
            {
              id: "data-sparkline",
              stroke: "rgb(166, 166, 166)",
              strokeWidth: 12,
              strokeMiterlimit: 12,
              fill: "none",
              d: "M 59.9,187.91 C 72.79,171.72 87.33,158.06 104.4,157.83 121.91,158.58 140.94,187.85 153.4,189.91 164.1,192.12 163.78,171.38 169.17,170.53 172.87,169.55 174.88,187.45 184.94,189.24 197,191.86 230.54,184.47 239.01,185.9"
            }
          ),
          /* @__PURE__ */ jsx29(
            "circle",
            {
              stroke: colour,
              strokeWidth: 15,
              strokeMiterlimit: 10,
              fill: "none",
              cx: "150",
              cy: "150",
              r: "120"
            }
          )
        ] })
      ]
    }
  );
};
SPCAssuranceIcon.displayName = "SPCAssuranceIcon";

// src/components/DataVisualisation/charts/SPCChart/SPCChart.tsx
import { Fragment as Fragment5, jsx as jsx30, jsxs as jsxs21 } from "react/jsx-runtime";
var SPCChart = ({
  data,
  ariaLabel = "SPC chart",
  height = 260,
  showZones = true,
  showPoints = true,
  announceFocus = false,
  className,
  unit: unit2,
  highlightOutOfControl = true,
  chartType = "XmR",
  metricImprovement = "Neither" /* Neither */,
  enableRules = true,
  showIcons = false,
  showEmbeddedIcon = true,
  targets: targetsProp,
  baselines,
  ghosts,
  settings,
  narrationContext,
  gradientSequences = false,
  processLineWidth = 2
}) => {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  const engine = React24.useMemo(() => {
    const rowsInput = data.map((d, i) => {
      var _a3, _b3, _c2;
      return {
        x: d.x,
        value: d.y,
        target: (_a3 = targetsProp == null ? void 0 : targetsProp[i]) != null ? _a3 : void 0,
        baseline: (_b3 = baselines == null ? void 0 : baselines[i]) != null ? _b3 : void 0,
        ghost: (_c2 = ghosts == null ? void 0 : ghosts[i]) != null ? _c2 : void 0
      };
    });
    try {
      return buildSpc({
        chartType,
        metricImprovement,
        data: rowsInput,
        settings
      });
    } catch {
      return null;
    }
  }, [
    data,
    targetsProp,
    baselines,
    ghosts,
    chartType,
    metricImprovement,
    settings
  ]);
  const engineRepresentative = engine == null ? void 0 : engine.rows.slice().reverse().find((r2) => r2.mean != null);
  const mean2 = (_a2 = engineRepresentative == null ? void 0 : engineRepresentative.mean) != null ? _a2 : null;
  const ucl = (_b2 = engineRepresentative == null ? void 0 : engineRepresentative.upperProcessLimit) != null ? _b2 : null;
  const lcl = (_c = engineRepresentative == null ? void 0 : engineRepresentative.lowerProcessLimit) != null ? _c : null;
  const onePos = (_d = engineRepresentative == null ? void 0 : engineRepresentative.upperOneSigma) != null ? _d : null;
  const oneNeg = (_e = engineRepresentative == null ? void 0 : engineRepresentative.lowerOneSigma) != null ? _e : null;
  const twoPos = (_f = engineRepresentative == null ? void 0 : engineRepresentative.upperTwoSigma) != null ? _f : null;
  const twoNeg = (_g = engineRepresentative == null ? void 0 : engineRepresentative.lowerTwoSigma) != null ? _g : null;
  const sigma = mean2 != null && onePos != null ? Math.abs(onePos - mean2) : 0;
  const series = React24.useMemo(
    () => [{ id: "process", data, color: "#A6A6A6" }],
    [data]
  );
  const yDomain = React24.useMemo(() => {
    const values = data.map((d) => d.y);
    const base = [...values];
    [mean2, ucl, lcl, onePos, oneNeg, twoPos, twoNeg].forEach((v) => {
      if (v != null) base.push(v);
    });
    if (targetsProp) targetsProp.forEach((t) => {
      if (typeof t === "number" && !isNaN(t)) base.push(t);
    });
    if (!base.length) return void 0;
    return [Math.min(...base), Math.max(...base)];
  }, [data, mean2, ucl, lcl, onePos, oneNeg, twoPos, twoNeg, targetsProp]);
  const autoUnit = React24.useMemo(() => {
    if (unit2 || (narrationContext == null ? void 0 : narrationContext.measureUnit)) return void 0;
    if (!data.length) return void 0;
    return data.every((d) => d.y >= 0 && d.y <= 1) ? "%" : void 0;
  }, [unit2, narrationContext == null ? void 0 : narrationContext.measureUnit, data]);
  const effectiveUnit = (_h = unit2 != null ? unit2 : narrationContext == null ? void 0 : narrationContext.measureUnit) != null ? _h : autoUnit;
  const effectiveNarrationContext = React24.useMemo(() => {
    return effectiveUnit ? { ...narrationContext || {}, measureUnit: effectiveUnit } : narrationContext;
  }, [narrationContext, effectiveUnit]);
  const embeddedIcon = React24.useMemo(() => {
    var _a3, _b3;
    if (!showEmbeddedIcon || !((_a3 = engine == null ? void 0 : engine.rows) == null ? void 0 : _a3.length)) return null;
    const engineRows = engine.rows;
    const minPoints = (_b3 = settings == null ? void 0 : settings.minimumPoints) != null ? _b3 : 13;
    const nonGhostCount = engineRows.filter((r2) => !r2.ghost && r2.value != null).length;
    if (nonGhostCount < minPoints) return null;
    let lastIdx = -1;
    for (let i = engineRows.length - 1; i >= 0; i--) {
      const r2 = engineRows[i];
      if (r2 && r2.value != null && !r2.ghost) {
        lastIdx = i;
        break;
      }
    }
    if (lastIdx === -1) return null;
    const lastRow = engineRows[lastIdx];
    const variation = lastRow.variationIcon;
    const assuranceRaw = lastRow.assuranceIcon;
    const assuranceRenderStatus = assuranceRaw === "pass" /* Pass */ ? "pass" /* Pass */ : assuranceRaw === "fail" /* Fail */ ? "fail" /* Fail */ : "uncertain" /* Uncertain */;
    let trend = void 0;
    if (variation === "none" /* None */) {
      const singleHigh = lastRow.specialCauseSinglePointAbove;
      const singleLow = lastRow.specialCauseSinglePointBelow;
      if (metricImprovement === "Up" /* Up */) {
        if (singleHigh) trend = "higher" /* Higher */;
        else if (singleLow) trend = "lower" /* Lower */;
      } else if (metricImprovement === "Down" /* Down */) {
        if (singleLow) trend = "lower" /* Lower */;
        else if (singleHigh) trend = "higher" /* Higher */;
      } else {
        trend = "higher" /* Higher */;
      }
    }
    let judgement;
    switch (variation) {
      case "improvement" /* Improvement */:
        judgement = "improving" /* Improving */;
        break;
      case "concern" /* Concern */:
        judgement = "deteriorating" /* Deteriorating */;
        break;
      case "none" /* None */:
        judgement = "no_judgement" /* No_Judgement */;
        break;
      case "neither" /* Neither */:
      default:
        judgement = "none" /* None */;
    }
    let polarity;
    if (metricImprovement === "Up" /* Up */) {
      polarity = "higher_is_better" /* HigherIsBetter */;
    } else if (metricImprovement === "Down" /* Down */) {
      polarity = "lower_is_better" /* LowerIsBetter */;
    } else {
      polarity = "context_dependent" /* ContextDependent */;
    }
    const iconSize = 80;
    return /* @__PURE__ */ jsxs21("div", { style: { display: "flex", gap: 12, marginRight: 16 }, children: [
      /* @__PURE__ */ jsx30(
        "div",
        {
          className: "fdp-spc-chart__embedded-icon",
          "data-variation": String(variation),
          "data-variation-judgement": String(judgement),
          "data-trend-raw": trend ? String(trend) : "none",
          "data-trend": trend ? String(trend) : "none",
          "data-polarity": String(polarity != null ? polarity : "unknown"),
          style: { width: iconSize, height: iconSize },
          children: /* @__PURE__ */ jsx30(
            SpcVariationIcon,
            {
              dropShadow: false,
              data: { judgement, polarity, ...trend ? { trend } : {} },
              size: iconSize
            }
          )
        }
      ),
      (assuranceRaw === "pass" /* Pass */ || assuranceRaw === "fail" /* Fail */) && /* @__PURE__ */ jsx30(
        "div",
        {
          className: "fdp-spc-chart__embedded-assurance-icon",
          "data-assurance": String(assuranceRaw),
          style: { width: iconSize, height: iconSize },
          children: /* @__PURE__ */ jsx30(SPCAssuranceIcon, { status: assuranceRenderStatus, size: iconSize, dropShadow: false })
        }
      )
    ] }, `embedded-icon-${lastIdx}`);
  }, [showEmbeddedIcon, engine == null ? void 0 : engine.rows, metricImprovement, settings == null ? void 0 : settings.minimumPoints]);
  return /* @__PURE__ */ jsxs21("div", { className: className ? `fdp-spc-chart-wrapper ${className}` : "fdp-spc-chart-wrapper", children: [
    showEmbeddedIcon && /* @__PURE__ */ jsx30("div", { className: "fdp-spc-chart__top-row", style: { display: "flex", justifyContent: "flex-end", marginBottom: 4 }, children: embeddedIcon }),
    /* @__PURE__ */ jsx30(
      ChartRoot,
      {
        height,
        ariaLabel,
        margin: { bottom: 48, left: 56, right: 16, top: 12 },
        className: void 0,
        children: /* @__PURE__ */ jsx30(LineScalesProvider, { series, yDomain, children: /* @__PURE__ */ jsx30(
          InternalSPC,
          {
            series,
            showPoints,
            announceFocus,
            limits: { mean: mean2, ucl, lcl, sigma, onePos, oneNeg, twoPos, twoNeg },
            showZones,
            highlightOutOfControl,
            engineRows: (engine == null ? void 0 : engine.rows) || null,
            enableRules,
            showIcons,
            narrationContext: effectiveNarrationContext,
            metricImprovement,
            gradientSequences,
            processLineWidth,
            effectiveUnit
          }
        ) })
      }
    )
  ] });
};
var InternalSPC = ({
  series,
  showPoints,
  announceFocus,
  limits,
  showZones,
  highlightOutOfControl,
  engineRows,
  enableRules,
  showIcons,
  narrationContext,
  gradientSequences,
  processLineWidth,
  effectiveUnit
}) => {
  var _a2;
  const scaleCtx = useScaleContext();
  const chartCtx = useChartContext();
  if (!scaleCtx) return null;
  const { xScale, yScale } = scaleCtx;
  const tooltipCtx = useTooltipContext();
  const all = ((_a2 = series[0]) == null ? void 0 : _a2.data) || [];
  const outOfControl = React24.useMemo(() => {
    if (!limits.ucl && !limits.lcl) return /* @__PURE__ */ new Set();
    const set = /* @__PURE__ */ new Set();
    all.forEach((d, i) => {
      if (limits.ucl != null && d.y > limits.ucl || limits.lcl != null && d.y < limits.lcl)
        set.add(i);
    });
    return set;
  }, [all, limits.ucl, limits.lcl]);
  const engineSignals = React24.useMemo(() => {
    if (!engineRows) return null;
    const map2 = {};
    engineRows.forEach((r2, idx) => {
      if (r2.value == null || r2.ghost) return;
      const anySpecial = r2.specialCauseSinglePointAbove || r2.specialCauseSinglePointBelow || r2.specialCauseTwoOfThreeAbove || r2.specialCauseTwoOfThreeBelow || r2.specialCauseFourOfFiveAbove || r2.specialCauseFourOfFiveBelow || r2.specialCauseShiftHigh || r2.specialCauseShiftLow || r2.specialCauseTrendIncreasing || r2.specialCauseTrendDecreasing;
      map2[idx] = {
        variation: r2.variationIcon,
        assurance: r2.assuranceIcon,
        special: anySpecial,
        concern: r2.variationIcon === "concern" /* Concern */,
        improvement: r2.variationIcon === "improvement" /* Improvement */
      };
    });
    return map2;
  }, [engineRows]);
  const uniformTarget = React24.useMemo(() => {
    if (!engineRows || !engineRows.length) return null;
    const values = [];
    for (const r2 of engineRows) {
      if (typeof r2.target === "number" && !isNaN(r2.target)) values.push(r2.target);
    }
    if (!values.length) return null;
    const first = values[0];
    return values.every((v) => v === first) ? first : null;
  }, [engineRows]);
  const categories = React24.useMemo(() => {
    if (!engineSignals) return [];
    const raw = all.map((_d, i) => {
      const sig = engineSignals == null ? void 0 : engineSignals[i];
      if (sig == null ? void 0 : sig.concern) return "concern";
      if (sig == null ? void 0 : sig.improvement) return "improvement";
      return "common";
    });
    for (let i = 1; i < raw.length - 1; i++) {
      if ((raw[i] === "concern" || raw[i] === "improvement") && raw[i - 1] === "common" && raw[i + 1] === "common") {
        raw[i] = "common";
      }
    }
    for (let i = 1; i < raw.length - 1; i++) {
      const left = raw[i - 1];
      const mid = raw[i];
      const right = raw[i + 1];
      if (mid !== "common" && left !== "common" && right !== "common" && left === right && mid !== left) {
        raw[i] = "common";
      }
    }
    return raw;
  }, [engineSignals, all]);
  const sequences = React24.useMemo(() => {
    if (!gradientSequences || !categories.length) return [];
    const result = [];
    let runStart = 0;
    for (let i = 1; i <= categories.length; i++) {
      const changed = i === categories.length || categories[i] !== categories[runStart];
      if (changed) {
        const cat = categories[runStart];
        const runEnd = i - 1;
        const runLen = runEnd - runStart + 1;
        if (cat === "common") {
          result.push({ start: runStart, end: runEnd, category: "common" });
        } else {
          if (runLen > 1) result.push({ start: runStart, end: runEnd, category: cat });
        }
        runStart = i;
      }
    }
    return result;
  }, [gradientSequences, categories]);
  const xPositions = React24.useMemo(() => all.map((d) => xScale(d.x instanceof Date ? d.x : new Date(d.x))), [all, xScale]);
  const plotWidth = xScale.range()[1];
  const sequenceDefs = React24.useMemo(() => {
    if (!sequences.length) return null;
    return /* @__PURE__ */ jsx30("defs", { children: sequences.map((seq, idx) => {
      const id = `spc-seq-grad-${idx}`;
      let baseVar;
      let top = 0.28, mid = 0.12, end = 0.045;
      switch (seq.category) {
        case "concern":
          baseVar = "var(--nhs-fdp-color-data-viz-spc-concern, #E46C0A)";
          top = 0.28;
          mid = 0.12;
          end = 0.045;
          break;
        case "improvement":
          baseVar = "var(--nhs-fdp-color-data-viz-spc-improvement, #00B0F0)";
          top = 0.26;
          mid = 0.11;
          end = 0.045;
          break;
        default:
          baseVar = "var(--nhs-fdp-color-data-viz-spc-common-cause, #A6A6A6)";
      }
      return /* @__PURE__ */ jsxs21("linearGradient", { id, x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
        /* @__PURE__ */ jsx30("stop", { offset: "0%", stopColor: baseVar, stopOpacity: top }),
        /* @__PURE__ */ jsx30("stop", { offset: "70%", stopColor: baseVar, stopOpacity: mid }),
        /* @__PURE__ */ jsx30("stop", { offset: "100%", stopColor: baseVar, stopOpacity: end })
      ] }, id);
    }) });
  }, [sequences]);
  const sequenceAreas = React24.useMemo(() => {
    if (!sequences.length) return null;
    const [domainMin] = yScale.domain();
    const baseY = yScale(domainMin);
    const areas = sequences.map((seq, idx) => {
      const firstIdx = seq.start;
      const lastIdx = seq.end;
      const firstX = xPositions[firstIdx];
      const lastX = xPositions[lastIdx];
      const prevX = firstIdx > 0 ? xPositions[firstIdx - 1] : firstX;
      const nextX = lastIdx < xPositions.length - 1 ? xPositions[lastIdx + 1] : lastX;
      let left = firstIdx === 0 ? Math.max(0, firstX - (xPositions.length > 1 ? (xPositions[1] - firstX) / 2 : 10)) : (prevX + firstX) / 2;
      let right = lastIdx === xPositions.length - 1 ? Math.min(plotWidth, lastX + (xPositions.length > 1 ? (lastX - xPositions[xPositions.length - 2]) / 2 : 10)) : (lastX + nextX) / 2;
      let extendLeftY = null;
      let extendRightY = null;
      if (seq.category === "common") {
        if (firstIdx > 0) {
          left = xPositions[firstIdx - 1];
          extendLeftY = yScale(all[firstIdx - 1].y);
        }
        if (lastIdx < all.length - 1) {
          right = xPositions[lastIdx + 1];
          extendRightY = yScale(all[lastIdx + 1].y);
        }
      } else {
        left = firstX;
        if (firstIdx > 0) {
          const prevCat = categories[firstIdx - 1];
          if (prevCat !== "common" && prevCat !== seq.category) {
            left = xPositions[firstIdx - 1];
            extendLeftY = yScale(all[firstIdx - 1].y);
          }
        }
      }
      let d = `M ${left} ${baseY}`;
      const firstY = yScale(all[firstIdx].y);
      if (extendLeftY != null) {
        d += ` L ${left} ${extendLeftY}`;
        if (firstX !== left) d += ` L ${firstX} ${firstY}`;
      } else {
        d += ` L ${left} ${firstY}`;
        if (firstX !== left) d += ` L ${firstX} ${firstY}`;
      }
      for (let i = firstIdx; i <= lastIdx; i++) {
        const x2 = xPositions[i];
        const y2 = yScale(all[i].y);
        d += ` L ${x2} ${y2}`;
      }
      if (seq.category === "common" && extendRightY != null) {
        if (right !== lastX) {
          d += ` L ${right} ${extendRightY}`;
        }
        d += ` L ${right} ${baseY} Z`;
      } else {
        d += ` L ${lastX} ${baseY} L ${right} ${baseY} Z`;
      }
      return /* @__PURE__ */ jsx30(
        "path",
        {
          d,
          fill: `url(#spc-seq-grad-${idx})`,
          stroke: "none",
          className: "fdp-spc__sequence-bg",
          "aria-hidden": "true"
        },
        `seq-area-${idx}`
      );
    });
    return /* @__PURE__ */ jsx30("g", { className: "fdp-spc__sequence-bgs", children: areas });
  }, [sequences, xPositions, plotWidth, yScale, all]);
  const computedTimeframe = React24.useMemo(() => {
    if (!(narrationContext == null ? void 0 : narrationContext.timeframe) && all.length >= 2) {
      const xs = all.map((d) => d.x instanceof Date ? d.x : new Date(d.x));
      const min = new Date(Math.min(...xs.map((d) => d.getTime())));
      const max = new Date(Math.max(...xs.map((d) => d.getTime())));
      const diffDays = Math.round((max.getTime() - min.getTime()) / 864e5) || 0;
      if (diffDays < 14)
        return `The chart shows a timeframe of ${diffDays + 1} days`;
      const weeks = Math.round(diffDays / 7);
      if (weeks < 20) return `The chart shows a timeframe of ${weeks} weeks`;
      const months = (max.getFullYear() - min.getFullYear()) * 12 + (max.getMonth() - min.getMonth()) + 1;
      return `The chart shows a timeframe of ${months} months`;
    }
    if (narrationContext == null ? void 0 : narrationContext.timeframe) {
      return `The chart shows a timeframe of ${narrationContext.timeframe}`;
    }
    return void 0;
  }, [narrationContext == null ? void 0 : narrationContext.timeframe, all]);
  const ordinal2 = (n) => {
    const mod10 = n % 10, mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return `${n}st`;
    if (mod10 === 2 && mod100 !== 12) return `${n}nd`;
    if (mod10 === 3 && mod100 !== 13) return `${n}rd`;
    return `${n}th`;
  };
  const formatDateLong = (d) => `${ordinal2(d.getDate())} ${d.toLocaleString("en-GB", { month: "long" })}, ${d.getFullYear()}`;
  const formatLive = React24.useCallback(
    ({ index, x: x2, y: y2 }) => {
      const row = engineRows == null ? void 0 : engineRows[index];
      const dateObj = x2 instanceof Date ? x2 : new Date(x2);
      const dateLabel = formatDateLong(dateObj);
      const unit2 = (narrationContext == null ? void 0 : narrationContext.measureUnit) ? ` ${narrationContext.measureUnit}` : "";
      const measure = (narrationContext == null ? void 0 : narrationContext.measureName) ? ` ${narrationContext.measureName}` : "";
      if (!row) {
        return `General summary is: ${computedTimeframe ? computedTimeframe + ". " : ""}Point ${index + 1}, ${dateLabel}, ${y2}${unit2}${measure}`;
      }
      const varLabel = variationLabel(row.variationIcon) || "Variation";
      const ruleIds = extractRuleIds(row);
      const ruleNarr = ruleIds.length ? ` Rules: ${[...new Set(ruleIds.map((r2) => ruleGlossary[r2].narration))].join("; ")}.` : " No special cause rules.";
      const ctxParts = [];
      if (narrationContext == null ? void 0 : narrationContext.measureName) ctxParts.push(`Measure: ${narrationContext.measureName}.`);
      if (narrationContext == null ? void 0 : narrationContext.datasetContext) ctxParts.push(`${narrationContext.datasetContext}.`);
      if (narrationContext == null ? void 0 : narrationContext.organisation) ctxParts.push(`Organisation: ${narrationContext.organisation}.`);
      if (narrationContext == null ? void 0 : narrationContext.additionalNote) ctxParts.push(narrationContext.additionalNote);
      return [
        `General summary is:`,
        ...ctxParts,
        `Point ${index + 1} recorded on `,
        dateLabel + ",",
        `with a value of ${y2} ${unit2}${measure}`,
        varLabel + ".",
        ruleNarr
      ].join(" ").replace(/\s+/g, " ").trim();
    },
    [engineRows, narrationContext, computedTimeframe]
  );
  const describePoint = React24.useCallback(
    (index, d) => {
      const row = engineRows == null ? void 0 : engineRows[index];
      if (!row) return void 0;
      const base = formatLive({
        index,
        seriesId: "process",
        x: d.x instanceof Date ? d.x : new Date(d.x),
        y: d.y
      });
      return base.replace(/^General summary is:\s*/, "").replace(/^Point \d+\s*/, "");
    },
    [engineRows, formatLive]
  );
  return /* @__PURE__ */ jsx30(TooltipProvider, { children: /* @__PURE__ */ jsxs21(
    "div",
    {
      className: "fdp-spc-chart",
      role: "group",
      "aria-label": "Statistical process control chart",
      "aria-roledescription": "chart",
      children: [
        /* @__PURE__ */ jsx30(
          "svg",
          {
            width: scaleCtx.xScale.range()[1] + 56 + 16,
            height: scaleCtx.yScale.range()[0] + 12 + 48,
            role: "img",
            children: /* @__PURE__ */ jsxs21("g", { transform: `translate(56,12)`, children: [
              /* @__PURE__ */ jsx30(Axis_default, { type: "x" }),
              /* @__PURE__ */ jsx30(Axis_default, { type: "y" }),
              /* @__PURE__ */ jsx30(GridLines_default, { axis: "y" }),
              sequenceDefs,
              sequenceAreas,
              limits.mean != null && /* @__PURE__ */ jsx30(
                "line",
                {
                  className: "fdp-spc__cl",
                  x1: 0,
                  x2: xScale.range()[1],
                  y1: yScale(limits.mean),
                  y2: yScale(limits.mean),
                  "aria-hidden": "true"
                }
              ),
              uniformTarget != null && // Render later (after limits) for stacking; temporary placeholder (moved below)
              /* @__PURE__ */ jsx30(Fragment5, {}),
              limits.ucl != null && /* @__PURE__ */ jsx30(
                "line",
                {
                  className: "fdp-spc__limit fdp-spc__limit--ucl",
                  x1: 0,
                  x2: xScale.range()[1],
                  y1: yScale(limits.ucl),
                  y2: yScale(limits.ucl),
                  "aria-hidden": "true",
                  strokeWidth: 2
                }
              ),
              limits.lcl != null && /* @__PURE__ */ jsx30(
                "line",
                {
                  className: "fdp-spc__limit fdp-spc__limit--lcl",
                  x1: 0,
                  x2: xScale.range()[1],
                  y1: yScale(limits.lcl),
                  y2: yScale(limits.lcl),
                  "aria-hidden": "true",
                  strokeWidth: 2
                }
              ),
              uniformTarget != null && /* @__PURE__ */ jsxs21("g", { "aria-hidden": "true", className: "fdp-spc__target-group", children: [
                /* @__PURE__ */ jsx30(
                  "line",
                  {
                    className: "fdp-spc__target",
                    "data-testid": "spc-target-line",
                    x1: 0,
                    x2: xScale.range()[1],
                    y1: yScale(uniformTarget),
                    y2: yScale(uniformTarget),
                    strokeWidth: 2.5
                  }
                ),
                /* @__PURE__ */ jsxs21(
                  "text",
                  {
                    "data-testid": "spc-target-label",
                    x: xScale.range()[0] - 7,
                    y: yScale(uniformTarget) - 5,
                    textAnchor: "start",
                    className: "fdp-spc__target-label",
                    fontSize: 12,
                    children: [
                      "Target ",
                      uniformTarget,
                      " ",
                      effectiveUnit || (narrationContext == null ? void 0 : narrationContext.measureUnit) || ""
                    ]
                  }
                )
              ] }),
              showZones && limits.mean != null && /* @__PURE__ */ jsxs21(Fragment5, { children: [
                limits.onePos != null && /* @__PURE__ */ jsx30(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos1",
                    x1: 0,
                    x2: xScale.range()[1],
                    y1: yScale(limits.onePos),
                    y2: yScale(limits.onePos),
                    "aria-hidden": "true",
                    strokeWidth: 2
                  }
                ),
                limits.oneNeg != null && /* @__PURE__ */ jsx30(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg1",
                    x1: 0,
                    x2: xScale.range()[1],
                    y1: yScale(limits.oneNeg),
                    y2: yScale(limits.oneNeg),
                    "aria-hidden": "true",
                    strokeWidth: 2
                  }
                ),
                limits.twoPos != null && /* @__PURE__ */ jsx30(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--pos2",
                    x1: 0,
                    x2: xScale.range()[1],
                    y1: yScale(limits.twoPos),
                    y2: yScale(limits.twoPos),
                    "aria-hidden": "true",
                    strokeWidth: 2
                  }
                ),
                limits.twoNeg != null && /* @__PURE__ */ jsx30(
                  "line",
                  {
                    className: "fdp-spc__zone fdp-spc__zone--neg2",
                    x1: 0,
                    x2: xScale.range()[1],
                    y1: yScale(limits.twoNeg),
                    y2: yScale(limits.twoNeg),
                    "aria-hidden": "true",
                    strokeWidth: 2
                  }
                )
              ] }),
              /* @__PURE__ */ jsx30(
                LineSeriesPrimitive_default,
                {
                  series: series[0],
                  seriesIndex: 0,
                  palette: "categorical",
                  showPoints: false,
                  focusablePoints: false,
                  focusIndex: -1,
                  parseX: (d) => d.x instanceof Date ? d.x : new Date(d.x),
                  smooth: false,
                  strokeWidth: processLineWidth
                }
              ),
              showPoints && all.map((d, i) => {
                var _a3;
                const cx = xScale(d.x instanceof Date ? d.x : new Date(d.x));
                const cy = yScale(d.y);
                const ooc = outOfControl.has(i);
                const sig = engineSignals == null ? void 0 : engineSignals[i];
                const classes = [
                  "fdp-spc__point",
                  ooc && highlightOutOfControl ? "fdp-spc__point--ooc" : null,
                  enableRules && (sig == null ? void 0 : sig.special) && sig.concern ? "fdp-spc__point--sc-concern" : null,
                  enableRules && (sig == null ? void 0 : sig.special) && sig.improvement ? "fdp-spc__point--sc-improvement" : null,
                  (sig == null ? void 0 : sig.assurance) === "pass" /* Pass */ ? "fdp-spc__point--assurance-pass" : null,
                  (sig == null ? void 0 : sig.assurance) === "fail" /* Fail */ ? "fdp-spc__point--assurance-fail" : null
                ].filter(Boolean).join(" ");
                const ariaLabel = `Point ${i + 1} value ${d.y}` + ((sig == null ? void 0 : sig.special) ? " special cause" : "") + ((sig == null ? void 0 : sig.variation) === "improvement" /* Improvement */ ? " improving" : (sig == null ? void 0 : sig.variation) === "concern" /* Concern */ ? " concern" : "");
                const isFocused = ((_a3 = tooltipCtx == null ? void 0 : tooltipCtx.focused) == null ? void 0 : _a3.index) === i;
                return /* @__PURE__ */ jsx30(
                  "circle",
                  {
                    cx,
                    cy,
                    r: 5,
                    className: classes,
                    "data-variation": sig == null ? void 0 : sig.variation,
                    "data-assurance": sig == null ? void 0 : sig.assurance,
                    "aria-label": ariaLabel,
                    ...isFocused ? { "aria-describedby": `spc-tooltip-${i}` } : {}
                  },
                  i
                );
              }),
              showIcons && enableRules && engineSignals && all.map((d, i) => {
                const sig = engineSignals[i];
                if (!sig) return null;
                if (!(sig.concern || sig.improvement)) return null;
                const rawX = xScale(d.x instanceof Date ? d.x : new Date(d.x));
                const rawPointY = yScale(d.y);
                let iconY = rawPointY - 10;
                const topPadding = 12;
                const bottomLimit = yScale.range()[0] - 4;
                if (iconY < topPadding) {
                  iconY = Math.min(rawPointY + 16, bottomLimit);
                }
                const plotWidth2 = xScale.range()[1];
                const iconX = Math.min(Math.max(rawX, 0), plotWidth2 - 0);
                return /* @__PURE__ */ jsx30(
                  "text",
                  {
                    x: iconX,
                    y: iconY,
                    textAnchor: "middle",
                    className: `fdp-spc__icon ${sig.concern ? "fdp-spc__icon--concern" : "fdp-spc__icon--improvement"}`,
                    "aria-hidden": "true",
                    children: sig.concern ? "!" : "\u2605"
                  },
                  `icon-${i}`
                );
              }),
              chartCtx && /* @__PURE__ */ jsx30(
                InteractionLayer,
                {
                  width: xScale.range()[1],
                  height: yScale.range()[0]
                }
              ),
              /* @__PURE__ */ jsx30(
                SPCTooltipOverlay_default,
                {
                  engineRows,
                  limits: { mean: limits.mean, sigma: limits.sigma },
                  pointDescriber: describePoint,
                  measureName: narrationContext == null ? void 0 : narrationContext.measureName,
                  measureUnit: narrationContext == null ? void 0 : narrationContext.measureUnit,
                  dateFormatter: (d) => formatDateLong(d)
                }
              )
            ] })
          }
        ),
        announceFocus && /* @__PURE__ */ jsx30(
          VisuallyHiddenLiveRegion_default,
          {
            format: (d) => formatLive({ ...d, x: d.x instanceof Date ? d.x : new Date(d.x) })
          }
        )
      ]
    }
  ) });
};
var InteractionLayer = ({
  width,
  height
}) => {
  const t = useTooltipContext();
  if (!t) return null;
  return /* @__PURE__ */ jsx30(
    "rect",
    {
      className: "fdp-spc__interaction-layer",
      width,
      height,
      fill: "transparent",
      tabIndex: 0,
      "aria-label": "Interactive chart area. Use arrow keys to move between points.",
      onMouseMove: (e) => {
        const target = e.currentTarget;
        const bounds = target.getBoundingClientRect();
        const x2 = e.clientX - bounds.left;
        const y2 = e.clientY - bounds.top;
        t.focusNearest(x2, y2);
      },
      onMouseLeave: () => t.clear(),
      onKeyDown: (e) => {
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
        }
      },
      style: { cursor: "crosshair" }
    }
  );
};
var SPCChart_default = SPCChart;
export {
  AreaSeriesPrimitive_default as AreaSeriesPrimitive,
  Axis_default as Axis,
  BandScalesProvider,
  BarSeriesPrimitive_default as BarSeriesPrimitive,
  ChartContainer_default as ChartContainer,
  ChartEnhancer_default as ChartEnhancer,
  ChartNoScript_default as ChartNoScript,
  ChartRoot_default as ChartRoot,
  ChartWithTableTabs_default as ChartWithTableTabs,
  FilterableLineChart_default as FilterableLineChart,
  GridLines_default as GridLines,
  Legend_default as Legend,
  LineChart_default as LineChart,
  LineScalesProvider,
  LineSeriesPrimitive_default as LineSeriesPrimitive,
  MetricCard_default as MetricCard,
  SPCChart_default as SPCChart,
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
