function ne(e = {}) {
  let t = null;
  const { preventDoubleClick: n, onClick: i } = e;
  let r = null;
  const a = (d) => {
    if (n) {
      if (t?.getAttribute("data-processing") === "true") {
        d.preventDefault();
        return;
      }
      t?.setAttribute("data-processing", "true"), r = window.setTimeout(() => {
        t?.removeAttribute("data-processing"), r = null;
      }, 1e3);
    }
    i?.(d);
  }, o = (d) => {
    t && d.key === " " && t.tagName === "A" && (d.preventDefault(), t.click());
  };
  return {
    attach(d) {
      t = d, t.addEventListener("click", a), t.addEventListener("keydown", o);
    },
    detach() {
      t && (t.removeEventListener("click", a), t.removeEventListener("keydown", o), r && window.clearTimeout(r), t = null);
    }
  };
}
function L(e = document) {
  Array.from(e.querySelectorAll('[data-module="nhs-button"][data-prevent-double-click]')).forEach((n) => {
    const i = n;
    if (!i.__nhsButtonBehaviour) {
      const r = ne({ preventDoubleClick: !0 });
      r.attach(i), i.__nhsButtonBehaviour = r;
    }
  });
}
function P(e = document) {
  Array.from(e.querySelectorAll('[data-module="nhs-button"][data-prevent-double-click]')).forEach((n) => {
    const i = n;
    i.__nhsButtonBehaviour && (i.__nhsButtonBehaviour.detach(), delete i.__nhsButtonBehaviour);
  });
}
typeof window < "u" && (window.__nhsInitButtons || (window.__nhsInitButtons = L, window.__nhsDetachButtons = P, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => L()) : L()));
function U(e) {
  const t = Array.from(e.container.querySelectorAll(e.inputSelector));
  if (!t.length) return { detach: () => {
  } };
  const n = () => {
    e.exclusive && t.forEach((r) => {
      const a = document.getElementById(r.id + "-conditional");
      a && (a.classList.add(e.hiddenClass), r.setAttribute("aria-expanded", "false"));
    }), t.forEach((r) => {
      const a = document.getElementById(r.id + "-conditional");
      if (a) {
        const o = r.checked;
        a.classList.toggle(e.hiddenClass, !o), r.setAttribute("aria-expanded", o ? "true" : "false");
      }
    });
  }, i = () => {
    n(), e.container.dispatchEvent(new CustomEvent(e.eventName, { bubbles: !0 }));
  };
  return t.forEach((r) => {
    r.addEventListener("change", i), document.getElementById(r.id + "-conditional") && !r.hasAttribute("aria-controls") && r.setAttribute("aria-controls", r.id + "-conditional");
  }), n(), { detach() {
    t.forEach((r) => r.removeEventListener("change", i));
  } };
}
function te(e) {
  const t = Array.from(e.querySelectorAll('input.nhsuk-radios__input[type="radio"][name]')), n = t[0]?.name;
  if (!n) return { detach: () => {
  } };
  const i = (a) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(a.key)) return;
    const o = t.filter((k) => !k.disabled), d = o.indexOf(a.target);
    if (d === -1) return;
    a.preventDefault();
    let u = d;
    a.key === "ArrowDown" || a.key === "ArrowRight" ? u = (d + 1) % o.length : u = (d - 1 + o.length) % o.length;
    const m = o[u];
    m && m !== a.target && (m.focus(), m.checked || m.click());
  }, r = U({
    inputSelector: 'input.nhsuk-radios__input[type="radio"][name="' + n + '"]',
    hiddenClass: "nhsuk-radios__conditional--hidden",
    container: e,
    eventName: "nhs:radios:change",
    exclusive: !0
  });
  return t.forEach((a) => {
    a.addEventListener("keydown", i);
  }), {
    detach() {
      t.forEach((a) => {
        a.removeEventListener("keydown", i);
      }), r.detach();
    }
  };
}
function C(e = document) {
  Array.from(e.querySelectorAll(".nhsuk-radios")).forEach((n) => {
    n.__nhsRadiosBehaviour || (n.__nhsRadiosBehaviour = te(n));
  });
}
function F(e = document) {
  Array.from(e.querySelectorAll(".nhsuk-radios")).forEach((n) => {
    n.__nhsRadiosBehaviour?.detach(), delete n.__nhsRadiosBehaviour;
  });
}
typeof window < "u" && (window.__nhsInitRadios || (window.__nhsInitRadios = C, window.__nhsDetachRadios = F, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => C()) : C()));
function re(e) {
  const n = e.closest(".nhsuk-input-range-wrapper")?.querySelector(
    ".nhsuk-input-range-current-value strong"
  ), i = () => {
    const a = e.value;
    e.setAttribute("data-current-value", a), n && (n.textContent = a);
  }, r = () => {
    i(), e.dispatchEvent(new CustomEvent("nhs:range:update", { bubbles: !0 }));
  };
  return e.addEventListener("input", r), i(), {
    detach() {
      e.removeEventListener("input", r);
    }
  };
}
function S(e = document) {
  Array.from(
    e.querySelectorAll(
      "input.nhsuk-input--range[data-current-value]"
    )
  ).forEach((n) => {
    n.__nhsRangeBehaviour || (n.__nhsRangeBehaviour = re(n));
  });
}
function K(e = document) {
  Array.from(
    e.querySelectorAll(
      "input.nhsuk-input--range[data-current-value]"
    )
  ).forEach((n) => {
    n.__nhsRangeBehaviour?.detach(), delete n.__nhsRangeBehaviour;
  });
}
typeof window < "u" && (window.__nhsInitRanges || (window.__nhsInitRanges = S, window.__nhsDetachRanges = K, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => S()) : S()));
function oe(e) {
  const t = e.querySelector("textarea"), n = e.querySelector(".nhsuk-character-count__message, .nhsuk-hint");
  if (!t || !n) return { detach: () => {
  } };
  const i = Number(e.getAttribute("data-maxlength")) || void 0, r = Number(e.getAttribute("data-maxwords")) || void 0, a = Number(e.getAttribute("data-threshold")) || 0, o = i || r || 0, d = r ? "word" : "character", u = r ? "words" : "characters";
  function m(p) {
    if (r) {
      const f = p.trim();
      return f ? f.split(/\s+/).length : 0;
    }
    return p.length;
  }
  function k() {
    const p = t.value, f = m(p), g = o - f, T = Math.floor(o * (a / 100)), R = f >= T || f > o, v = f > o;
    let w;
    if (!R)
      w = `You can enter up to ${o} ${o === 1 ? d : u}`;
    else if (v) {
      const y = Math.abs(g);
      w = `You have ${y} ${y === 1 ? d : u} too many`;
    } else
      w = `You have ${g} ${g === 1 ? d : u} remaining`;
    n.textContent = w, n.classList.toggle("nhsuk-error-message", v), v ? t.setAttribute("aria-invalid", "true") : t.removeAttribute("aria-invalid"), e.dispatchEvent(new CustomEvent("nhs:character-count:update", { bubbles: !0, detail: { current: f, remaining: g, isOverLimit: v } }));
  }
  const _ = () => k();
  return t.addEventListener("input", _), k(), { detach() {
    t.removeEventListener("input", _);
  } };
}
function x(e = document) {
  Array.from(e.querySelectorAll('[data-module="nhsuk-character-count"]')).forEach((n) => {
    n.__nhsCharacterCount || (n.__nhsCharacterCount = oe(n));
  });
}
function Y(e = document) {
  Array.from(e.querySelectorAll('[data-module="nhsuk-character-count"]')).forEach((n) => {
    n.__nhsCharacterCount?.detach(), delete n.__nhsCharacterCount;
  });
}
typeof window < "u" && (window.__nhsInitCharacterCounts || (window.__nhsInitCharacterCounts = x, window.__nhsDetachCharacterCounts = Y, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => x()) : x()));
function ie(e) {
  return U({
    inputSelector: 'input.nhsuk-checkboxes__input[type="checkbox"]',
    hiddenClass: "nhsuk-checkboxes__conditional--hidden",
    container: e,
    eventName: "nhs:checkboxes:change"
  });
}
function B(e = document) {
  Array.from(
    e.querySelectorAll(".nhsuk-checkboxes")
  ).forEach((n) => {
    n.__nhsCheckboxesBehaviour || (n.__nhsCheckboxesBehaviour = ie(n));
  });
}
function G(e = document) {
  Array.from(
    e.querySelectorAll(".nhsuk-checkboxes")
  ).forEach((n) => {
    n.__nhsCheckboxesBehaviour?.detach(), delete n.__nhsCheckboxesBehaviour;
  });
}
typeof window < "u" && (window.__nhsInitCheckboxes || (window.__nhsInitCheckboxes = B, window.__nhsDetachCheckboxes = G, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => B()) : B()));
const J = ".nhsuk-header", ae = ".nhsuk-header__navigation-container", se = ".nhsuk-header__navigation-list", z = "nhsuk-header__dropdown-menu", V = "nhsuk-header__dropdown-list", Q = "nhsuk-header__navigation-item--more", j = ".nhsuk-header__navigation-item:not(." + Q + ")", de = 150;
function ce(e, t = de) {
  let n;
  return (...i) => {
    n && window.clearTimeout(n), n = window.setTimeout(() => e(...i), t);
  };
}
function ue(e = document) {
  return typeof window > "u" ? [] : Array.from(
    e.querySelectorAll(J)
  ).map(he).filter(Boolean);
}
function le(e = document) {
  (e.querySelectorAll(J) || []).forEach((n) => {
    n._nhsHeaderInstance?.destroy();
  });
}
function he(e) {
  if (e._nhsHeaderInstance) return e._nhsHeaderInstance;
  e.setAttribute("data-enhancing", "header");
  const t = e.querySelector(ae), n = e.querySelector(se);
  if (!t || !n) return null;
  const i = e.querySelector(
    `.${z}[data-ssr-overflow="true"]`
  );
  if (i) {
    const s = i.querySelector(`.${V}`);
    if (s) {
      const c = Array.from(s.children);
      n.innerHTML = "", c.forEach((l) => {
        l.className = l.className.replace(
          "nhsuk-header__dropdown-item--current",
          "nhsuk-header__navigation-item--current"
        ).replace(
          "nhsuk-header__dropdown-item",
          "nhsuk-header__navigation-item"
        );
        const A = l.querySelector("a");
        A && (A.className = A.className.replace(
          "nhsuk-header__dropdown-link",
          "nhsuk-header__navigation-link"
        )), n.appendChild(l);
      }), i.remove();
    }
  }
  let r = Array.from(
    n.querySelectorAll(j)
  ).map((s) => s.outerHTML);
  if (!r.length) return null;
  let a = null, o = null, d = null, u = !1;
  function m() {
    if (a) return;
    a = document.createElement("li"), a.className = `nhsuk-header__navigation-item ${Q}`;
    const s = document.createElement("button");
    s.type = "button", s.className = "nhsuk-header__navigation-button", s.id = "toggle-more-menu", s.setAttribute("aria-expanded", "false"), s.setAttribute("aria-controls", "nhsuk-header-overflow-menu"), s.innerHTML = '<span>More</span><svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/></svg>', s.addEventListener("click", f), a.appendChild(s);
  }
  function k() {
    o || (o = document.createElement("div"), o.className = z, o.hidden = !0, o.id = "nhsuk-header-overflow-menu", d = document.createElement("ul"), d.className = V, o.appendChild(d), e.appendChild(o));
  }
  function _() {
    if (!u) return;
    u = !1, o && (o.hidden = !0), a?.querySelector("button")?.setAttribute("aria-expanded", "false");
  }
  function p() {
    if (u) return;
    u = !0, o && (o.hidden = !1), a?.querySelector("button")?.setAttribute("aria-expanded", "true");
  }
  function f() {
    u ? _() : p();
  }
  function g(s) {
    const c = s.cloneNode(!0);
    c.className = c.className.replace(
      "nhsuk-header__navigation-item--current",
      "nhsuk-header__dropdown-item--current"
    ).replace("nhsuk-header__navigation-item", "nhsuk-header__dropdown-item");
    const l = c.querySelector("a");
    return l && (l.className = "nhsuk-header__dropdown-link"), c;
  }
  function T() {
    const s = document.createElement("ul");
    s.className = "nhsuk-header__navigation-list", s.style.cssText = "position:absolute;visibility:hidden;left:-9999px;top:0;display:flex;flex-wrap:nowrap;", s.innerHTML = r.join(""), document.body.appendChild(s);
    const c = Array.from(s.children).map(
      (l) => l.offsetWidth
    );
    return document.body.removeChild(s), c;
  }
  function R() {
    if (_(), !n) return;
    e.dataset.headerDistStart = String(Date.now());
    const s = T();
    if (e.dataset.headerLastCalc = e.dataset.headerDistStart, !s.length || !t) return;
    const c = t.offsetWidth;
    if (c <= 0) return;
    const l = window.innerWidth < 768, D = c - (l ? 16 : 32) * 2, X = l ? 72 : 100;
    n.innerHTML = "", n.style.display = "flex", n.style.flexWrap = "nowrap", o && (o.hidden = !0, d.innerHTML = ""), n.innerHTML = r.join("");
    const H = n.scrollWidth;
    if (e.dataset.headerRealScroll = String(H), e.dataset.headerAvail = String(D), H <= D - 4) {
      o && (o.remove(), o = null, d = null), e.dataset.headerOverflow = "none";
      return;
    }
    m(), k();
    const Z = D - X;
    let O = 0, b = 0;
    for (let h = 0; h < s.length && O + s[h] <= Z; h++)
      O += s[h], b = h + 1;
    if (b === s.length) {
      o && (o.remove(), o = null, d = null), a = null, n.innerHTML = r.join(""), e.dataset.headerOverflow = "none", e.classList.remove("nhsuk-header--nav-overflow-active");
      return;
    }
    b = Math.max(1, b), n.innerHTML = "";
    for (let h = 0; h < b; h++)
      n.insertAdjacentHTML("beforeend", r[h]);
    n.appendChild(a);
    for (let h = b; h < r.length; h++) {
      const W = document.createElement("div");
      W.innerHTML = r[h];
      const $ = W.firstElementChild;
      $ && d.appendChild(g($));
    }
    const ee = n.scrollWidth;
    e.dataset.headerPostScroll = String(ee), e.dataset.headerOverflow = "active", e.classList.add("nhsuk-header--nav-overflow-active");
  }
  let v = !1;
  const w = new MutationObserver((s) => {
    if (!v && s.some((c) => c.type === "childList")) {
      const c = Array.from(
        n.querySelectorAll(j)
      );
      c.length && c.length !== r.length && (r = c.map((l) => l.outerHTML)), requestAnimationFrame(y);
    }
  });
  w.observe(n, { childList: !0 });
  function y() {
    v = !0;
    try {
      R();
    } finally {
      setTimeout(() => {
        v = !1;
      }, 0);
    }
  }
  const I = (s) => {
    s.key === "Escape" && _();
  }, q = (s) => {
    u && !e.contains(s.target) && _();
  }, E = ce(y, 150);
  window.addEventListener("resize", E), window.addEventListener("orientationchange", E), document.addEventListener("keydown", I), document.addEventListener("mousedown", q), requestAnimationFrame(y);
  const N = {
    root: e,
    destroy() {
      window.removeEventListener("resize", E), window.removeEventListener("orientationchange", E), document.removeEventListener("keydown", I), document.removeEventListener("mousedown", q), w.disconnect(), _();
    }
  };
  return e.classList.add("nhsuk-header--enhanced"), e._nhsHeaderInstance = N, N;
}
function fe(e = document) {
  if (typeof window > "u" || typeof document > "u") return;
  const t = (i) => {
    const r = i.currentTarget, a = r.getAttribute("href");
    if (!a || !a.startsWith("#")) return;
    const o = document.querySelector(a);
    if (!o) return;
    const d = o.hasAttribute("tabindex");
    d || o.setAttribute("tabindex", "-1"), o.focus(), o.classList.add("nhsuk-skip-link-focused-element");
    const u = window.setTimeout(() => {
      o.classList.remove("nhsuk-skip-link-focused-element"), !d && o.getAttribute("tabindex") === "-1" && o.removeAttribute("tabindex");
    }, 3e3);
    r.__nhsSkipLinkTimeout = u;
  };
  e.querySelectorAll(".nhsuk-skip-link").forEach((i) => {
    const r = i;
    r.__nhsSkipLinkHandler || (r.addEventListener("click", t), r.__nhsSkipLinkHandler = t), r.setAttribute("data-enhanced", "true");
  });
}
function me(e = document) {
  if (typeof window > "u" || typeof document > "u") return;
  e.querySelectorAll(".nhsuk-skip-link").forEach((n) => {
    const i = n, r = i.__nhsSkipLinkTimeout;
    r && window.clearTimeout && window.clearTimeout(r), i.__nhsSkipLinkHandler && (i.removeEventListener("click", i.__nhsSkipLinkHandler), delete i.__nhsSkipLinkHandler), i.removeAttribute("data-enhanced");
  });
}
function M(e = document) {
  L(e), C(e), S(e), x(e), B(e), ue(e), fe(e);
}
function _e(e = document) {
  P(e), F(e), K(e), Y(e), G(e), le(e), me(e);
}
typeof window < "u" && (window.__nhsInitAllBehaviours || (window.__nhsInitAllBehaviours = M, window.__nhsTeardownAllBehaviours = _e, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => M()) : M()));
export {
  ne as createButtonBehaviour,
  P as detachButtons,
  Y as detachCharacterCounts,
  G as detachCheckboxes,
  le as detachHeaders,
  F as detachRadios,
  K as detachRanges,
  me as detachSkipLinks,
  M as initAll,
  L as initButtons,
  x as initCharacterCounts,
  B as initCheckboxes,
  ue as initHeaders,
  C as initRadios,
  S as initRanges,
  fe as initSkipLinks,
  _e as teardownAll
};
//# sourceMappingURL=index-CKdN4v41.js.map
