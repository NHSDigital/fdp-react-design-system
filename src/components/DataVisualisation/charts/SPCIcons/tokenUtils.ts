// Shared token lookup utilities for SPC icons.
let spcTokenRoot: Record<string, any> | null = null;
try {
  // Dynamic require to avoid breaking SSR if tokens file not present at runtime.
  // @ts-ignore - compiled artifact path resolved post-build
  const tokens = require('@fergusbisset/nhs-fdp-design-system/dist/js/tokens.json');
  spcTokenRoot = tokens?.color?.['data-viz']?.spc || null;
} catch {
  // Swallow – fall back to provided colour fallbacks.
}

export const tokenColour = (key: string, fallback: string): string => {
  if (!spcTokenRoot) return fallback;
  const parts = key.split('.');
  let current: any = spcTokenRoot;
  for (const p of parts) { if (current == null) break; current = current[p]; }
  const val = current;
  if (val == null) return fallback;
  if (typeof val === 'string' || typeof val === 'number') return String(val);
  if (val.$value != null) return String(val.$value);
  if (val.value != null) return String(val.value);
  return fallback;
};

export const getGradientOpacities = () => ({
  start: tokenColour('gradient.stop.start-opacity', '0.18'),
  mid: tokenColour('gradient.stop.mid-opacity', '0.06'),
  end: tokenColour('gradient.stop.end-opacity', '0'),
  triStart: tokenColour('gradient.stop.triangle-start-opacity', tokenColour('gradient.stop.start-opacity', '0.18')),
  triMid: tokenColour('gradient.stop.triangle-mid-opacity', tokenColour('gradient.stop.mid-opacity', '0.06')),
  triEnd: tokenColour('gradient.stop.triangle-end-opacity', tokenColour('gradient.stop.end-opacity', '0')),
});
