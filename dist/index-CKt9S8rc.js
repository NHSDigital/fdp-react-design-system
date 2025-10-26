function te(e = {}) {
  let i = null;
  const { preventDoubleClick: t, onClick: n } = e;
  let o = null;
  const s = (d) => {
    if (t) {
      if (i?.getAttribute("data-processing") === "true") {
        d.preventDefault();
        return;
      }
      i?.setAttribute("data-processing", "true"), o = window.setTimeout(() => {
        i?.removeAttribute("data-processing"), o = null;
      }, 1e3);
    }
    n?.(d);
  }, r = (d) => {
    i && d.key === " " && i.tagName === "A" && (d.preventDefault(), i.click());
  };
  return {
    attach(d) {
      i = d, i.addEventListener("click", s), i.addEventListener("keydown", r);
    },
    detach() {
      i && (i.removeEventListener("click", s), i.removeEventListener("keydown", r), o && window.clearTimeout(o), i = null);
    }
  };
}
function L(e = document) {
  Array.from(e.querySelectorAll('[data-module="nhs-button"][data-prevent-double-click]')).forEach((t) => {
    const n = t;
    if (!n.__nhsButtonBehaviour) {
      const o = te({ preventDoubleClick: !0 });
      o.attach(n), n.__nhsButtonBehaviour = o;
    }
  });
}
function I(e = document) {
  Array.from(e.querySelectorAll('[data-module="nhs-button"][data-prevent-double-click]')).forEach((t) => {
    const n = t;
    n.__nhsButtonBehaviour && (n.__nhsButtonBehaviour.detach(), delete n.__nhsButtonBehaviour);
  });
}
typeof window < "u" && (window.__nhsInitButtons || (window.__nhsInitButtons = L, window.__nhsDetachButtons = I, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => L()) : L()));
function F(e) {
  const i = Array.from(e.container.querySelectorAll(e.inputSelector));
  if (!i.length) return { detach: () => {
  } };
  const t = () => {
    e.exclusive && i.forEach((o) => {
      const s = document.getElementById(o.id + "-conditional");
      s && (s.classList.add(e.hiddenClass), o.setAttribute("aria-expanded", "false"));
    }), i.forEach((o) => {
      const s = document.getElementById(o.id + "-conditional");
      if (s) {
        const r = o.checked;
        s.classList.toggle(e.hiddenClass, !r), o.setAttribute("aria-expanded", r ? "true" : "false");
      }
    });
  }, n = () => {
    t(), e.container.dispatchEvent(new CustomEvent(e.eventName, { bubbles: !0 }));
  };
  return i.forEach((o) => {
    o.addEventListener("change", n), document.getElementById(o.id + "-conditional") && !o.hasAttribute("aria-controls") && o.setAttribute("aria-controls", o.id + "-conditional");
  }), t(), { detach() {
    i.forEach((o) => o.removeEventListener("change", n));
  } };
}
function ie(e) {
  var i;
  const t = Array.from(e.querySelectorAll('input.nhsuk-radios__input[type="radio"][name]')), n = (i = t[0]) == null ? void 0 : i.name;
  if (!n) return { detach: () => {
  } };
  const o = (r) => {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(r.key)) return;
    const d = t.filter((f) => !f.disabled), u = d.indexOf(r.target);
    if (u === -1) return;
    r.preventDefault();
    let w = u;
    r.key === "ArrowDown" || r.key === "ArrowRight" ? w = (u + 1) % d.length : w = (u - 1 + d.length) % d.length;
    const h = d[w];
    h && h !== r.target && (h.focus(), h.checked || h.click());
  }, s = F({
    inputSelector: 'input.nhsuk-radios__input[type="radio"][name="' + n + '"]',
    hiddenClass: "nhsuk-radios__conditional--hidden",
    container: e,
    eventName: "nhs:radios:change",
    exclusive: !0
  });
  return t.forEach((r) => {
    r.addEventListener("keydown", o);
  }), {
    detach() {
      t.forEach((r) => {
        r.removeEventListener("keydown", o);
      }), s.detach();
    }
  };
}
function A(e = document) {
  Array.from(e.querySelectorAll(".nhsuk-radios")).forEach((t) => {
    t.__nhsRadiosBehaviour || (t.__nhsRadiosBehaviour = ie(t));
  });
}
function M(e = document) {
  Array.from(e.querySelectorAll(".nhsuk-radios")).forEach((t) => {
    var n;
    (n = t.__nhsRadiosBehaviour) == null || n.detach(), delete t.__nhsRadiosBehaviour;
  });
}
typeof window < "u" && (window.__nhsInitRadios || (window.__nhsInitRadios = A, window.__nhsDetachRadios = M, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => A()) : A()));
function oe(e) {
  const i = e.closest(".nhsuk-input-range-wrapper"), t = i?.querySelector(
    ".nhsuk-input-range-current-value strong"
  ), n = () => {
    const s = e.value;
    e.setAttribute("data-current-value", s), t && (t.textContent = s);
  }, o = () => {
    n(), e.dispatchEvent(new CustomEvent("nhs:range:update", { bubbles: !0 }));
  };
  return e.addEventListener("input", o), n(), {
    detach() {
      e.removeEventListener("input", o);
    }
  };
}
function E(e = document) {
  Array.from(
    e.querySelectorAll(
      "input.nhsuk-input--range[data-current-value]"
    )
  ).forEach((t) => {
    t.__nhsRangeBehaviour || (t.__nhsRangeBehaviour = oe(t));
  });
}
function q(e = document) {
  Array.from(
    e.querySelectorAll(
      "input.nhsuk-input--range[data-current-value]"
    )
  ).forEach((t) => {
    var n;
    (n = t.__nhsRangeBehaviour) == null || n.detach(), delete t.__nhsRangeBehaviour;
  });
}
typeof window < "u" && (window.__nhsInitRanges || (window.__nhsInitRanges = E, window.__nhsDetachRanges = q, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => E()) : E()));
function re(e) {
  const i = e.querySelector("textarea"), t = e.querySelector(".nhsuk-character-count__message, .nhsuk-hint");
  if (!i || !t) return { detach: () => {
  } };
  const n = Number(e.getAttribute("data-maxlength")) || void 0, o = Number(e.getAttribute("data-maxwords")) || void 0, s = Number(e.getAttribute("data-threshold")) || 0, r = n || o || 0, d = o ? "word" : "character", u = o ? "words" : "characters";
  function w(p) {
    if (o) {
      const m = p.trim();
      return m ? m.split(/\s+/).length : 0;
    }
    return p.length;
  }
  function h() {
    const p = i.value, m = w(p), g = r - m, B = Math.floor(r * (s / 100)), R = m >= B || m > r, _ = m > r;
    let k;
    if (!R)
      k = `You can enter up to ${r} ${r === 1 ? d : u}`;
    else if (_) {
      const y = Math.abs(g);
      k = `You have ${y} ${y === 1 ? d : u} too many`;
    } else
      k = `You have ${g} ${g === 1 ? d : u} remaining`;
    t.textContent = k, t.classList.toggle("nhsuk-error-message", _), _ ? i.setAttribute("aria-invalid", "true") : i.removeAttribute("aria-invalid"), e.dispatchEvent(new CustomEvent("nhs:character-count:update", { bubbles: !0, detail: { current: m, remaining: g, isOverLimit: _ } }));
  }
  const f = () => h();
  return i.addEventListener("input", f), h(), { detach() {
    i.removeEventListener("input", f);
  } };
}
function C(e = document) {
  Array.from(e.querySelectorAll('[data-module="nhsuk-character-count"]')).forEach((t) => {
    t.__nhsCharacterCount || (t.__nhsCharacterCount = re(t));
  });
}
function H(e = document) {
  Array.from(e.querySelectorAll('[data-module="nhsuk-character-count"]')).forEach((t) => {
    var n;
    (n = t.__nhsCharacterCount) == null || n.detach(), delete t.__nhsCharacterCount;
  });
}
typeof window < "u" && (window.__nhsInitCharacterCounts || (window.__nhsInitCharacterCounts = C, window.__nhsDetachCharacterCounts = H, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => C()) : C()));
function ae(e) {
  return F({
    inputSelector: 'input.nhsuk-checkboxes__input[type="checkbox"]',
    hiddenClass: "nhsuk-checkboxes__conditional--hidden",
    container: e,
    eventName: "nhs:checkboxes:change"
  });
}
function S(e = document) {
  Array.from(
    e.querySelectorAll(".nhsuk-checkboxes")
  ).forEach((t) => {
    t.__nhsCheckboxesBehaviour || (t.__nhsCheckboxesBehaviour = ae(t));
  });
}
function N(e = document) {
  Array.from(
    e.querySelectorAll(".nhsuk-checkboxes")
  ).forEach((t) => {
    var n;
    (n = t.__nhsCheckboxesBehaviour) == null || n.detach(), delete t.__nhsCheckboxesBehaviour;
  });
}
typeof window < "u" && (window.__nhsInitCheckboxes || (window.__nhsInitCheckboxes = S, window.__nhsDetachCheckboxes = N, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => S()) : S()));
const K = ".nhsuk-header", se = ".nhsuk-header__navigation-container", de = ".nhsuk-header__navigation-list", ue = "nhsuk-header__dropdown-menu", ce = "nhsuk-header__dropdown-list", Y = "nhsuk-header__navigation-item--more", U = ".nhsuk-header__navigation-item:not(." + Y + ")", le = 150;
function he(e, i = le) {
  let t;
  return (...n) => {
    t && window.clearTimeout(t), t = window.setTimeout(() => e(...n), i);
  };
}
function G(e = document) {
  return typeof window > "u" ? [] : Array.from(
    e.querySelectorAll(K)
  ).map(fe).filter(Boolean);
}
function J(e = document) {
  (e.querySelectorAll(K) || []).forEach((t) => {
    const n = t._nhsHeaderInstance;
    n?.destroy();
  });
}
function fe(e) {
  if (e._nhsHeaderInstance) return e._nhsHeaderInstance;
  e.setAttribute("data-enhancing", "header");
  const i = e.querySelector("nav[data-ssr-hydrating]");
  i && i.removeAttribute("data-ssr-hydrating");
  const t = e.querySelector(se), n = e.querySelector(de);
  if (!t || !n) return null;
  let o = Array.from(
    n.querySelectorAll(U)
  ).map((a) => a.outerHTML);
  if (!o.length) return null;
  let s = null, r = null, d = null, u = !1;
  function w() {
    if (s) return;
    s = document.createElement("li"), s.className = `nhsuk-header__navigation-item ${Y}`;
    const a = document.createElement("button");
    a.type = "button", a.className = "nhsuk-header__navigation-button", a.id = "toggle-more-menu", a.setAttribute("aria-expanded", "false"), a.setAttribute("aria-controls", "nhsuk-header-overflow-menu"), a.innerHTML = '<span>More</span><svg class="nhsuk-icon nhsuk-icon__chevron-down" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"/></svg>', a.addEventListener("click", m), s.appendChild(a);
  }
  function h() {
    r || (r = document.createElement("div"), r.className = ue, r.hidden = !0, r.id = "nhsuk-header-overflow-menu", d = document.createElement("ul"), d.className = ce, r.appendChild(d), e.appendChild(r));
  }
  function f() {
    if (!u) return;
    u = !1, r && (r.hidden = !0);
    const a = s?.querySelector("button");
    a?.setAttribute("aria-expanded", "false");
  }
  function p() {
    if (u) return;
    u = !0, r && (r.hidden = !1);
    const a = s?.querySelector("button");
    a?.setAttribute("aria-expanded", "true");
  }
  function m() {
    u ? f() : p();
  }
  function g(a) {
    const c = a.cloneNode(!0);
    c.className = c.className.replace(
      "nhsuk-header__navigation-item--current",
      "nhsuk-header__dropdown-item--current"
    ).replace("nhsuk-header__navigation-item", "nhsuk-header__dropdown-item");
    const v = c.querySelector("a");
    return v && (v.className = "nhsuk-header__dropdown-link"), c;
  }
  function B() {
    const a = document.createElement("ul");
    a.className = "nhsuk-header__navigation-list", a.style.cssText = "position:absolute;visibility:hidden;left:-9999px;top:0;display:flex;flex-wrap:nowrap;", a.innerHTML = o.join(""), document.body.appendChild(a);
    const c = Array.from(a.children).map(
      (v) => v.offsetWidth
    );
    return document.body.removeChild(a), c;
  }
  function R() {
    if (f(), !n) return;
    e.dataset.headerDistStart = String(Date.now());
    const a = B();
    if (e.dataset.headerLastCalc = e.dataset.headerDistStart, !a.length || !t) return;
    const c = t.offsetWidth;
    if (c <= 0) return;
    const v = window.innerWidth < 768, T = c - (v ? 16 : 32) * 2, Z = v ? 72 : 100;
    n.innerHTML = "", n.style.display = "flex", n.style.flexWrap = "nowrap", r && (r.hidden = !0, d.innerHTML = ""), n.innerHTML = o.join("");
    const z = n.scrollWidth;
    if (e.dataset.headerRealScroll = String(z), e.dataset.headerAvail = String(T), z <= T - 4) {
      r && (r.remove(), r = null, d = null), e.dataset.headerOverflow = "none";
      return;
    }
    w(), h();
    const ee = T - Z;
    let V = 0, b = 0;
    for (let l = 0; l < a.length && V + a[l] <= ee; l++)
      V += a[l], b = l + 1;
    if (b === a.length) {
      r && (r.remove(), r = null, d = null), s = null, n.innerHTML = o.join(""), e.dataset.headerOverflow = "none", e.classList.remove("nhsuk-header--nav-overflow-active");
      return;
    }
    b = Math.max(1, b), n.innerHTML = "";
    for (let l = 0; l < b; l++)
      n.insertAdjacentHTML("beforeend", o[l]);
    n.appendChild(s);
    for (let l = b; l < o.length; l++) {
      const j = document.createElement("div");
      j.innerHTML = o[l];
      const P = j.firstElementChild;
      P && d.appendChild(g(P));
    }
    const ne = n.scrollWidth;
    e.dataset.headerPostScroll = String(ne), e.dataset.headerOverflow = "active", e.classList.add("nhsuk-header--nav-overflow-active");
  }
  let _ = !1;
  const k = new MutationObserver((a) => {
    if (!_ && a.some((c) => c.type === "childList")) {
      const c = Array.from(
        n.querySelectorAll(U)
      );
      c.length && c.length !== o.length && (o = c.map((v) => v.outerHTML)), requestAnimationFrame(y);
    }
  });
  k.observe(n, { childList: !0 });
  function y() {
    _ = !0;
    try {
      R();
    } finally {
      setTimeout(() => {
        _ = !1;
      }, 0);
    }
  }
  const O = (a) => {
    a.key === "Escape" && f();
  }, W = (a) => {
    u && !e.contains(a.target) && f();
  }, x = he(y, 150);
  window.addEventListener("resize", x), window.addEventListener("orientationchange", x), document.addEventListener("keydown", O), document.addEventListener("mousedown", W), requestAnimationFrame(y);
  const $ = {
    root: e,
    destroy() {
      window.removeEventListener("resize", x), window.removeEventListener("orientationchange", x), document.removeEventListener("keydown", O), document.removeEventListener("mousedown", W), k.disconnect(), f();
    }
  };
  return e.classList.add("nhsuk-header--enhanced"), e._nhsHeaderInstance = $, $;
}
function Q(e = document) {
  if (typeof window > "u" || typeof document > "u") return;
  const i = (n) => {
    const o = n.currentTarget, s = o.getAttribute("href");
    if (!s || !s.startsWith("#")) return;
    const r = document.querySelector(s);
    if (!r) return;
    const d = r.hasAttribute("tabindex");
    d || r.setAttribute("tabindex", "-1"), r.focus(), r.classList.add("nhsuk-skip-link-focused-element");
    const u = window.setTimeout(() => {
      r.classList.remove("nhsuk-skip-link-focused-element"), !d && r.getAttribute("tabindex") === "-1" && r.removeAttribute("tabindex");
    }, 3e3);
    o.__nhsSkipLinkTimeout = u;
  };
  e.querySelectorAll(".nhsuk-skip-link").forEach((n) => {
    const o = n;
    o.__nhsSkipLinkHandler || (o.addEventListener("click", i), o.__nhsSkipLinkHandler = i), o.setAttribute("data-enhanced", "true");
  });
}
function X(e = document) {
  if (typeof window > "u" || typeof document > "u") return;
  e.querySelectorAll(".nhsuk-skip-link").forEach((t) => {
    const n = t, o = n.__nhsSkipLinkTimeout;
    o && window.clearTimeout && window.clearTimeout(o), n.__nhsSkipLinkHandler && (n.removeEventListener("click", n.__nhsSkipLinkHandler), delete n.__nhsSkipLinkHandler), n.removeAttribute("data-enhanced");
  });
}
function D(e = document) {
  L(e), A(e), E(e), C(e), S(e), G(e), Q(e);
}
function me(e = document) {
  I(e), M(e), q(e), H(e), N(e), J(e), X(e);
}
typeof window < "u" && (window.__nhsInitAllBehaviours || (window.__nhsInitAllBehaviours = D, window.__nhsTeardownAllBehaviours = me, window.__nhsHeaderBehaviours = {
  initHeaders: G,
  detachHeaders: J,
  initButtons: L,
  detachButtons: I,
  initRadios: A,
  detachRadios: M,
  initRanges: E,
  detachRanges: q,
  initCharacterCounts: C,
  detachCharacterCounts: H,
  initCheckboxes: S,
  detachCheckboxes: N,
  initSkipLinks: Q,
  detachSkipLinks: X
}, document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => D()) : D()));
export {
  te as createButtonBehaviour,
  I as detachButtons,
  H as detachCharacterCounts,
  N as detachCheckboxes,
  J as detachHeaders,
  M as detachRadios,
  q as detachRanges,
  X as detachSkipLinks,
  D as initAll,
  L as initButtons,
  C as initCharacterCounts,
  S as initCheckboxes,
  G as initHeaders,
  A as initRadios,
  E as initRanges,
  Q as initSkipLinks,
  me as teardownAll
};
//# sourceMappingURL=index-CKt9S8rc.js.map
