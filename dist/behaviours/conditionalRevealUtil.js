function attachConditionalReveals(cfg) {
  const inputs = Array.from(cfg.container.querySelectorAll(cfg.inputSelector));
  if (!inputs.length) return { detach: () => {
  } };
  const update = () => {
    if (cfg.exclusive) {
      inputs.forEach((i) => {
        const cond = document.getElementById(i.id + "-conditional");
        if (cond) {
          cond.classList.add(cfg.hiddenClass);
          i.setAttribute("aria-expanded", "false");
        }
      });
    }
    inputs.forEach((i) => {
      const cond = document.getElementById(i.id + "-conditional");
      if (cond) {
        const show = i.checked;
        cond.classList.toggle(cfg.hiddenClass, !show);
        i.setAttribute("aria-expanded", show ? "true" : "false");
      }
    });
  };
  const handleChange = () => {
    update();
    cfg.container.dispatchEvent(new CustomEvent(cfg.eventName, { bubbles: true }));
  };
  inputs.forEach((i) => {
    i.addEventListener("change", handleChange);
    const cond = document.getElementById(i.id + "-conditional");
    if (cond && !i.hasAttribute("aria-controls")) i.setAttribute("aria-controls", i.id + "-conditional");
  });
  update();
  return { detach() {
    inputs.forEach((i) => i.removeEventListener("change", handleChange));
  } };
}
export {
  attachConditionalReveals
};
//# sourceMappingURL=conditionalRevealUtil.js.map
