/**
 * Deprecated monolithic test file kept only as a marker during migration.
 * Split tests now live in:
 *  - Input.ssr.test.tsx
 *  - Input.client.test.tsx
 *  - Input.hydration.test.tsx
 */
describe('Input (deprecated monolithic tests)', () => {
  it('placeholder – remove when audit no longer needs this file', () => {
    expect(true).toBe(true);
  });
});
