// Test data builders to reduce duplication in tests.
export interface BuildRadiosOptionsArgs { count?: number; withConditional?: boolean; disabledIndex?: number; }
export function buildRadiosOptions({ count = 3, withConditional, disabledIndex }: BuildRadiosOptionsArgs = {}): any[] {
  return Array.from({ length: count }).map((_, i) => ({
    value: `opt-${i}`,
    text: `Option ${i + 1}`,
    ...(withConditional && i === 0 ? { conditional: 'Conditional content' } : {}),
    ...(disabledIndex === i ? { disabled: true } : {})
  }));
}

export interface BuildNavItemsArgs { length?: number; currentIndex?: number; }
export function buildNavItems({ length = 5, currentIndex = 0 }: BuildNavItemsArgs = {}): any[] {
  return Array.from({ length }).map((_, i) => ({
    text: `Item ${i + 1}`,
    href: `/item-${i + 1}`,
    ...(i === currentIndex ? { current: true } : {})
  }));
}
