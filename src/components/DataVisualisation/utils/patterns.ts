// SVG texture pattern utilities for non-colour (texture) encoding.
// Inspired by https://github.com/riccardoscalco/textures and classic engraving / cartographic hatches.
// Patterns are intentionally lightweight: tiny viewports for efficient tiling.

export type PatternKind =
  | 'diagonal'
  | 'diagonal-dense'
  | 'rev-diagonal'
  | 'rev-diagonal-dense'
  | 'cross'
  | 'cross-dense'
  | 'grid'
  | 'grid-dense'
  | 'horizontal'
  | 'horizontal-dense'
  | 'vertical'
  | 'vertical-dense'
  | 'dot'
  | 'dot-dense'
  | 'checker'
  | 'zigzag'
  | 'weave'
  | 'ring';

export interface PatternDefinition { id: string; svg: string; }

// --- Primitive creators ----------------------------------------------------

function createDiagonal(id: string, stroke = '#212b32', background = 'transparent', size = 8, dense = false, reverse = false): PatternDefinition {
  const gap = dense ? size / 4 : size / 2;
  const lines: string[] = [];
  for (let offset = -size; offset <= size; offset += gap) {
    lines.push(!reverse ? `M${offset} ${size} L ${offset + size} 0` : `M${offset} 0 L ${offset + size} ${size}`);
  }
  const d = lines.join(' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="100%" height="100%" fill="${background}"/><path d="${d}" stroke="${stroke}" stroke-width="1" shape-rendering="crispEdges"/></svg>`;
  return { id, svg };
}

function createOrthogonal(id: string, stroke = '#212b32', background = 'transparent', size = 8, orientation: 'h' | 'v' | 'both' = 'both', dense = false): PatternDefinition {
  const gap = dense ? size / 3 : size / 2;
  const segs: string[] = [];
  if (orientation === 'h' || orientation === 'both') {
    for (let y = 0; y <= size; y += gap) segs.push(`M0 ${y} H ${size}`);
  }
  if (orientation === 'v' || orientation === 'both') {
    for (let x = 0; x <= size; x += gap) segs.push(`M${x} 0 V ${size}`);
  }
  const d = segs.join(' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="100%" height="100%" fill="${background}"/><path d="${d}" stroke="${stroke}" stroke-width="1" shape-rendering="crispEdges"/></svg>`;
  return { id, svg };
}

function createDot(id: string, color = '#212b32', background = 'transparent', size = 8, dense = false): PatternDefinition {
  const r = 1;
  const step = dense ? size / 2 : size;
  const circles: string[] = [];
  for (let y = step / 2; y < size; y += step) {
    for (let x = step / 2; x < size; x += step) circles.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="${color}"/>`);
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="100%" height="100%" fill="${background}"/>${circles.join('')}</svg>`;
  return { id, svg };
}

function createChecker(id: string, color = '#212b32', background = 'transparent', size = 8): PatternDefinition {
  const half = size / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="100%" height="100%" fill="${background}"/><rect x="0" y="0" width="${half}" height="${half}" fill="${color}"/><rect x="${half}" y="${half}" width="${half}" height="${half}" fill="${color}"/></svg>`;
  return { id, svg };
}

function createZigZag(id: string, stroke = '#212b32', background = 'transparent', size = 8): PatternDefinition {
  const path = `M0 ${size / 2} L ${size / 4} 0 L ${size / 2} ${size} L ${(3 * size) / 4} 0 L ${size} ${size / 2}`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="100%" height="100%" fill="${background}"/><path d="${path}" fill="none" stroke="${stroke}" stroke-width="1"/></svg>`;
  return { id, svg };
}

function createWeave(id: string, stroke = '#212b32', background = 'transparent', size = 8): PatternDefinition {
  const half = size / 2;
  const thick = Math.max(1, half / 2);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="100%" height="100%" fill="${background}"/><path d="M0 ${half} H ${size} M ${half} 0 V ${size}" stroke="${stroke}" stroke-width="${thick}" stroke-linecap="square"/></svg>`;
  return { id, svg };
}

function createRing(id: string, stroke = '#212b32', background = 'transparent', size = 8): PatternDefinition {
  const r = size / 4;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><rect width="100%" height="100%" fill="${background}"/><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="${stroke}" stroke-width="1"/></svg>`;
  return { id, svg };
}

// --- Public API -----------------------------------------------------------

export function generatePattern(
  kind: PatternKind,
  options: { id?: string; stroke?: string; color?: string; background?: string; size?: number } = {}
): PatternDefinition {
  const id = options.id || `pattern-${kind}-${Math.random().toString(36).slice(2, 8)}`;
  const size = options.size ?? 8;
  switch (kind) {
    case 'diagonal': return createDiagonal(id, options.stroke, options.background, size, false, false);
    case 'diagonal-dense': return createDiagonal(id, options.stroke, options.background, size, true, false);
    case 'rev-diagonal': return createDiagonal(id, options.stroke, options.background, size, false, true);
    case 'rev-diagonal-dense': return createDiagonal(id, options.stroke, options.background, size, true, true);
    case 'cross': return createOrthogonal(id, options.stroke, options.background, size, 'both', false);
    case 'cross-dense': return createOrthogonal(id, options.stroke, options.background, size, 'both', true);
    case 'horizontal': return createOrthogonal(id, options.stroke, options.background, size, 'h', false);
    case 'horizontal-dense': return createOrthogonal(id, options.stroke, options.background, size, 'h', true);
    case 'vertical': return createOrthogonal(id, options.stroke, options.background, size, 'v', false);
    case 'vertical-dense': return createOrthogonal(id, options.stroke, options.background, size, 'v', true);
    case 'grid': return createOrthogonal(id, options.stroke, options.background, size, 'both', false); // alias of cross
    case 'grid-dense': return createOrthogonal(id, options.stroke, options.background, size, 'both', true); // alias of cross-dense
    case 'dot': return createDot(id, options.color || options.stroke, options.background, size, false);
    case 'dot-dense': return createDot(id, options.color || options.stroke, options.background, size, true);
    case 'checker': return createChecker(id, options.color || options.stroke, options.background, size);
    case 'zigzag': return createZigZag(id, options.stroke, options.background, size);
    case 'weave': return createWeave(id, options.stroke, options.background, size);
    case 'ring': return createRing(id, options.stroke, options.background, size);
    default: {
      // Exhaustiveness guard – should never happen if PatternKind union matches switch
      const neverKind: never = kind;
      throw new Error(`Unsupported pattern kind: ${neverKind}`);
    }
  }
}

export function injectPatterns(patterns: PatternDefinition[], root: HTMLElement | null = typeof document !== 'undefined' ? document.body : null) {
  if (typeof document === 'undefined') return; // SSR guard
  if (!root) return;
  let defs = root.querySelector('svg#nhs-data-viz-pattern-defs') as SVGSVGElement | null;
  if (!defs) {
    defs = document.createElementNS('http://www.w3.org/2000/svg', 'svg') as SVGSVGElement;
    defs.setAttribute('id', 'nhs-data-viz-pattern-defs');
    defs.setAttribute('width', '0');
    defs.setAttribute('height', '0');
    (defs as SVGSVGElement).style.position = 'absolute';
    (defs as SVGSVGElement).style.left = '-9999px';
    root.appendChild(defs);
  }
  patterns.forEach(p => {
    if (defs!.querySelector(`#${p.id}`)) return;
    const frag = document.createElement('div');
    frag.innerHTML = p.svg.replace('<svg', `<svg id="${p.id}"`);
    const svgEl = frag.firstChild as SVGElement;
    defs!.appendChild(svgEl);
  });
}

// Convenience: return a CSS-ready data URI for use as a background-image.
export function patternDataUrl(p: PatternDefinition): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(p.svg)}`;
}
