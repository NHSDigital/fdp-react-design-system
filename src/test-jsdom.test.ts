import { test, expect } from 'vitest';

test('jsdom environment test', () => {
  expect(typeof document).toBe('object');
  expect(typeof window).toBe('object');
  expect(document.createElement).toBeDefined();
});
