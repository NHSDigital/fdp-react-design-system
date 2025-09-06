// Shared deterministic data helpers for Storybook charts
// Centralising to keep stories concise and aligned.

export const BASE_DAY = new Date(Date.UTC(2025, 0, 1));
export const day = (n: number) => new Date(Date.UTC(2025, 0, 1 + n));

// Linear progression with optional cyclic wobble pattern
export const linearSeries = (length: number, start: number, step: number, wobble: number[] = []): number[] =>
  Array.from({ length }).map((_, i) => start + step * i + (wobble.length ? wobble[i % wobble.length] : 0));

// Convenience for categorical bar values (single-element seq usage previously)
export const valueAt = (base: number) => base;

// Seeded pseudo-random generator (Mulberry32) for deterministic noise sequences
export function seedPRNG(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296; // 0..1
  };
}
