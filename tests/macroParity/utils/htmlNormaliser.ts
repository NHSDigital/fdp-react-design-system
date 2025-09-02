// Normalises HTML for parity comparison: trims, sorts attributes, removes redundant whitespace.
export function normaliseHtml(html: string): string {
  // Remove line breaks & collapse whitespace
  let out = html.replace(/\n+/g, ' ').replace(/\s+/g, ' ').replace(/>\s+</g, '><').trim();
  // Sort attributes within each tag (excluding script/style content)
  out = out.replace(/<([a-zA-Z0-9\-]+)([^>]*)>/g, (full, tag, attrs) => {
    if (!attrs.trim()) return `<${tag}>`;
    const parts = attrs.match(/\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(=\"[^\"]*\"|='[^']*'|=[^\s>]+)?/g);
    if (!parts) return full;
    const sorted = parts.map(p => p.trim()).sort((a,b)=>a.localeCompare(b));
    return `<${tag} ${sorted.join(' ')}>`;
  });
  // Replace empty comment placeholders (e.g. React preserves) with a single space
  out = out.replace(/<!--\s*-->/g, ' ');
  // Trim whitespace inside text nodes between tags
  out = out.replace(/>([^<>]+)</g, (m, text) => '>' + text.trim() + '<');
  // Remove trailing space inside class attribute values
  out = out.replace(/class=\"([^\"]*?)\s+\"/g, (m, cls) => `class="${cls.trim()}"`);
  // Collapse any multiple spaces again after comment replacement
  out = out.replace(/\s+/g, ' ');
  // Normalise boolean attributes disabled="" -> disabled
  out = out.replace(/ disabled=""/g, ' disabled');
  // Normalise open attribute open="" -> open
  out = out.replace(/ open=""/g, ' open');
  // Collapse redundant nested spans: <span><span>... </span></span>
  out = out.replace(/<span><span>([\s\S]*?)<\/span><\/span>/g, '<span>$1</span>');
  return out;
}

// Looser comparison helper (ignores data-* attr order & transient data attributes) if needed
export function loose(html: string): string {
  return normaliseHtml(html)
    .replace(/ data-[a-zA-Z0-9_-]+=\"[^\"]*\"/g,'')
    .replace(/ draggable=\"false\"/g,'');
}
