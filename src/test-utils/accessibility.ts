import { axe, toHaveNoViolations } from 'jest-axe';
import { expect } from 'vitest';

// Extend expect with jest-axe matcher
expect.extend(toHaveNoViolations as any);

export async function expectAccessible(node: HTMLElement | DocumentFragment, options?: any) {
  const results = await axe(node as any, options);
  expect(results).toHaveNoViolations();
}
