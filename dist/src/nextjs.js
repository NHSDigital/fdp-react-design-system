import { M as Ce, S as Oe, a as Me, W as Pe, g as Re } from "../SkipLink-DRWgvPYX.js";
import * as ae from "react";
import Y from "react";
import { d as oe } from "../SkipLink-ByzSQC80.js";
import { B as Ee, a as Ae, C as ke, F as xe, G as Ne, b as Te, R as De, S as Fe, g as He } from "../SkipLink-ByzSQC80.js";
import se from "react/jsx-runtime";
import ue from "react-dom";
let L = null;
try {
  L = Function("return require")()("next/navigation");
} catch {
  L = null;
}
const $ = L?.useSearchParams, z = L?.usePathname, W = L?.useRouter;
function be(d = {}) {
  const { paramSelected: e = "nsv", paramDrill: t = "nsvDrill", method: f = "replace" } = d;
  if (!$ || !z || !W)
    return process.env.NODE_ENV !== "production" && console.warn("[useNavigationSplitNextUrlSync] next/navigation not available – returning inert helpers. Import this hook only within a Next.js App Router environment."), {
      selectedId: void 0,
      drilledIn: !1,
      setSelectedId: () => {
      },
      setDrilledIn: () => {
      }
    };
  const u = $(), a = z(), r = W(), o = u.get(e) || void 0, p = u.get(t) === "1", m = ae.useCallback((l, M) => {
    const y = new URLSearchParams(u.toString());
    l ? y.set(e, String(l)) : y.delete(e), y.set(t, M ? "1" : "0");
    const E = y.toString(), b = E ? `${a}?${E}` : a;
    (f === "push" ? r.push : r.replace)(b, { scroll: !1 });
  }, [u, a, r, f, e, t]);
  return {
    selectedId: o,
    drilledIn: p,
    setSelectedId: (l) => m(l, p),
    setDrilledIn: (l) => m(o, l)
  };
}
var k = { exports: {} }, D = {}, U;
function Z() {
  if (U) return D;
  U = 1;
  function d(e) {
    return e && e.__esModule ? e : { default: e };
  }
  return D._ = d, D;
}
var F = {}, G;
function ce() {
  if (G) return F;
  G = 1;
  function d(t) {
    if (typeof WeakMap != "function") return null;
    var f = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
    return (d = function(a) {
      return a ? u : f;
    })(t);
  }
  function e(t, f) {
    if (!f && t && t.__esModule) return t;
    if (t === null || typeof t != "object" && typeof t != "function") return { default: t };
    var u = d(f);
    if (u && u.has(t)) return u.get(t);
    var a = { __proto__: null }, r = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var o in t)
      if (o !== "default" && Object.prototype.hasOwnProperty.call(t, o)) {
        var p = r ? Object.getOwnPropertyDescriptor(t, o) : null;
        p && (p.get || p.set) ? Object.defineProperty(a, o, p) : a[o] = t[o];
      }
    return a.default = t, u && u.set(t, a), a;
  }
  return F._ = e, F;
}
var H = {}, K;
function le() {
  return K || (K = 1, (function(d) {
    Object.defineProperty(d, "__esModule", {
      value: !0
    }), Object.defineProperty(d, "HeadManagerContext", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const f = (/* @__PURE__ */ (/* @__PURE__ */ Z())._(Y)).default.createContext({});
    process.env.NODE_ENV !== "production" && (f.displayName = "HeadManagerContext");
  })(H)), H;
}
var x = { exports: {} }, J;
function de() {
  return J || (J = 1, (function(d, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "setAttributesFromProps", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const t = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      noModule: "noModule"
    }, f = [
      "onLoad",
      "onReady",
      "dangerouslySetInnerHTML",
      "children",
      "onError",
      "strategy",
      "stylesheets"
    ];
    function u(r) {
      return [
        "async",
        "defer",
        "noModule"
      ].includes(r);
    }
    function a(r, o) {
      for (const [p, m] of Object.entries(o)) {
        if (!o.hasOwnProperty(p) || f.includes(p) || m === void 0)
          continue;
        const l = t[p] || p.toLowerCase();
        r.tagName === "SCRIPT" && u(l) ? r[l] = !!m : r.setAttribute(l, String(m)), (m === !1 || r.tagName === "SCRIPT" && u(l) && (!m || m === "false")) && (r.setAttribute(l, ""), r.removeAttribute(l));
      }
    }
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), d.exports = e.default);
  })(x, x.exports)), x.exports;
}
var N = { exports: {} }, V;
function fe() {
  return V || (V = 1, (function(d, e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(a, r) {
      for (var o in r) Object.defineProperty(a, o, {
        enumerable: !0,
        get: r[o]
      });
    }
    t(e, {
      cancelIdleCallback: function() {
        return u;
      },
      requestIdleCallback: function() {
        return f;
      }
    });
    const f = typeof self < "u" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(a) {
      let r = Date.now();
      return self.setTimeout(function() {
        a({
          didTimeout: !1,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - r));
          }
        });
      }, 1);
    }, u = typeof self < "u" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(a) {
      return clearTimeout(a);
    };
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), d.exports = e.default);
  })(N, N.exports)), N.exports;
}
var Q;
function pe() {
  return Q || (Q = 1, (function(d, e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    function t(i, n) {
      for (var c in n) Object.defineProperty(i, c, {
        enumerable: !0,
        get: n[c]
      });
    }
    t(e, {
      default: function() {
        return ie;
      },
      handleClientScriptLoad: function() {
        return T;
      },
      initScriptLoader: function() {
        return ne;
      }
    });
    const f = /* @__PURE__ */ Z(), u = /* @__PURE__ */ ce(), a = se, r = /* @__PURE__ */ f._(ue), o = /* @__PURE__ */ u._(Y), p = le(), m = de(), l = fe(), M = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Set(), E = (i) => {
      if (r.default.preinit) {
        i.forEach((n) => {
          r.default.preinit(n, {
            as: "style"
          });
        });
        return;
      }
      if (typeof window < "u") {
        let n = document.head;
        i.forEach((c) => {
          let g = document.createElement("link");
          g.type = "text/css", g.rel = "stylesheet", g.href = c, n.appendChild(g);
        });
      }
    }, b = (i) => {
      const { src: n, id: c, onLoad: g = () => {
      }, onReady: q = null, dangerouslySetInnerHTML: h, children: C = "", strategy: P = "afterInteractive", onError: s, stylesheets: R } = i, S = c || n;
      if (S && y.has(S))
        return;
      if (M.has(n)) {
        y.add(S), M.get(n).then(g, s);
        return;
      }
      const I = () => {
        q && q(), y.add(S);
      }, v = document.createElement("script"), _ = new Promise((O, A) => {
        v.addEventListener("load", function(w) {
          O(), g && g.call(this, w), I();
        }), v.addEventListener("error", function(w) {
          A(w);
        });
      }).catch(function(O) {
        s && s(O);
      });
      h ? (v.innerHTML = h.__html || "", I()) : C ? (v.textContent = typeof C == "string" ? C : Array.isArray(C) ? C.join("") : "", I()) : n && (v.src = n, M.set(n, _)), (0, m.setAttributesFromProps)(v, i), P === "worker" && v.setAttribute("type", "text/partytown"), v.setAttribute("data-nscript", P), R && E(R), document.body.appendChild(v);
    };
    function T(i) {
      const { strategy: n = "afterInteractive" } = i;
      n === "lazyOnload" ? window.addEventListener("load", () => {
        (0, l.requestIdleCallback)(() => b(i));
      }) : b(i);
    }
    function te(i) {
      document.readyState === "complete" ? (0, l.requestIdleCallback)(() => b(i)) : window.addEventListener("load", () => {
        (0, l.requestIdleCallback)(() => b(i));
      });
    }
    function re() {
      [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
      ].forEach((n) => {
        const c = n.id || n.getAttribute("src");
        y.add(c);
      });
    }
    function ne(i) {
      i.forEach(T), re();
    }
    function B(i) {
      const { id: n, src: c = "", onLoad: g = () => {
      }, onReady: q = null, strategy: h = "afterInteractive", onError: C, stylesheets: P, ...s } = i;
      let { updateScripts: R, scripts: S, getIsSsr: I, appDir: v, nonce: _ } = (0, o.useContext)(p.HeadManagerContext);
      _ = s.nonce || _;
      const O = (0, o.useRef)(!1);
      (0, o.useEffect)(() => {
        const w = n || c;
        O.current || (q && w && y.has(w) && q(), O.current = !0);
      }, [
        q,
        n,
        c
      ]);
      const A = (0, o.useRef)(!1);
      if ((0, o.useEffect)(() => {
        A.current || (h === "afterInteractive" ? b(i) : h === "lazyOnload" && te(i), A.current = !0);
      }, [
        i,
        h
      ]), (h === "beforeInteractive" || h === "worker") && (R ? (S[h] = (S[h] || []).concat([
        {
          id: n,
          src: c,
          onLoad: g,
          onReady: q,
          onError: C,
          ...s,
          nonce: _
        }
      ]), R(S)) : I && I() ? y.add(n || c) : I && !I() && b({
        ...i,
        nonce: _
      })), v) {
        if (P && P.forEach((w) => {
          r.default.preinit(w, {
            as: "style"
          });
        }), h === "beforeInteractive")
          return c ? (r.default.preload(c, s.integrity ? {
            as: "script",
            integrity: s.integrity,
            nonce: _,
            crossOrigin: s.crossOrigin
          } : {
            as: "script",
            nonce: _,
            crossOrigin: s.crossOrigin
          }), /* @__PURE__ */ (0, a.jsx)("script", {
            nonce: _,
            dangerouslySetInnerHTML: {
              __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                c,
                {
                  ...s,
                  id: n
                }
              ]) + ")"
            }
          })) : (s.dangerouslySetInnerHTML && (s.children = s.dangerouslySetInnerHTML.__html, delete s.dangerouslySetInnerHTML), /* @__PURE__ */ (0, a.jsx)("script", {
            nonce: _,
            dangerouslySetInnerHTML: {
              __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                0,
                {
                  ...s,
                  id: n
                }
              ]) + ")"
            }
          }));
        h === "afterInteractive" && c && r.default.preload(c, s.integrity ? {
          as: "script",
          integrity: s.integrity,
          nonce: _,
          crossOrigin: s.crossOrigin
        } : {
          as: "script",
          nonce: _,
          crossOrigin: s.crossOrigin
        });
      }
      return null;
    }
    Object.defineProperty(B, "__nextScript", {
      value: !0
    });
    const ie = B;
    (typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && typeof e.default.__esModule > "u" && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), d.exports = e.default);
  })(k, k.exports)), k.exports;
}
var j, X;
function he() {
  return X || (X = 1, j = pe()), j;
}
var _e = he();
const ee = /* @__PURE__ */ oe(_e);
function Se() {
  return /* @__PURE__ */ React.createElement(
    ee,
    {
      id: "nhs-fdp-behaviours",
      strategy: "afterInteractive",
      dangerouslySetInnerHTML: {
        __html: `
(function() {
	// Dynamic import to avoid bundling behaviours in server bundle
	if (typeof window !== 'undefined') {
		// Wait for hydration to complete
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initBehaviours);
		} else {
			// Use setTimeout to ensure hydration is complete
			setTimeout(initBehaviours, 0);
		}
	}
	
	function initBehaviours() {
		// Check if already initialized
		if (window.__nhsFdpBehavioursInitialized) return;
		window.__nhsFdpBehavioursInitialized = true;
		
		// Import and initialize
		import('/@fergusbisset/nhs-fdp-design-system/behaviours')
			.then(function(mod) {
				if (mod && mod.initAll) {
					mod.initAll(document);
				}
			})
			.catch(function(err) {
				console.warn('Failed to initialize NHS FDP behaviours:', err);
			});
	}
})();
				`.trim()
      }
    }
  );
}
function Ie() {
  return /* @__PURE__ */ React.createElement(
    ee,
    {
      id: "nhs-fdp-behaviours-inline",
      strategy: "afterInteractive"
    },
    `
(function() {
	if (typeof window === 'undefined' || window.__nhsFdpBehavioursInitialized) return;
	window.__nhsFdpBehavioursInitialized = true;
	
	function init() {
		// This will be bundled by your build tool
		// Import the behaviours module synchronously
		try {
			const behaviours = require('@fergusbisset/nhs-fdp-design-system/behaviours');
			if (behaviours && behaviours.initAll) {
				behaviours.initAll(document);
			}
		} catch (err) {
			console.warn('Failed to initialize NHS FDP behaviours:', err);
		}
	}
	
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		setTimeout(init, 0);
	}
})();
			`.trim()
  );
}
export {
  Ee as Breakpoint,
  Ae as Column,
  ke as Container,
  xe as Float,
  Ne as Grid,
  Te as GridWidth,
  Se as InitBehaviours,
  Ie as InitBehavioursInline,
  Ce as MainWrapper,
  De as Row,
  Oe as SkipLink,
  Fe as SpacingUtilities,
  Me as WIDTH_FRACTIONS,
  Pe as WidthUtilities,
  He as getSpacingClass,
  Re as getWidthClass,
  be as useNavigationSplitNextUrlSync
};
//# sourceMappingURL=nextjs.js.map
