import { describe, it, expect } from 'vitest';
import { initAll } from '../../src/behaviours';

describe('behaviours initAll()', () => {
  it('runs without throwing on empty document', () => {
    expect(() => initAll(document)).not.toThrow();
  });
});
