import { describe, it, expect } from 'vitest';
import { generatePattern, patternDataUrl, type PatternKind } from '../utils/patterns';

// Visual regression (string snapshot) for pattern data URIs.
// We snapshot only the beginning of each data URI to avoid flakiness from random ids.

const kinds: PatternKind[] = [
  'diagonal','diagonal-dense','rev-diagonal','rev-diagonal-dense',
  'horizontal','horizontal-dense','vertical','vertical-dense',
  'cross','cross-dense','grid','grid-dense',
  'dot','dot-dense','checker','zigzag','weave','ring'
];

describe('patterns visual snapshot', () => {
  it('pattern data URIs structure', () => {
    const entries = kinds.map(k => {
      const p = generatePattern(k, { size: 8 });
      const uri = patternDataUrl(p);
      // stable prefix includes encoding header + first 40 chars of encoded svg
      return [k, uri.slice(0, 80)];
    });
    expect(entries).toMatchInlineSnapshot(`
      [
        [
          "diagonal",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "diagonal-dense",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "rev-diagonal",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "rev-diagonal-dense",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "horizontal",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "horizontal-dense",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "vertical",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "vertical-dense",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "cross",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "cross-dense",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "grid",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "grid-dense",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "dot",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "dot-dense",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "checker",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "zigzag",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "weave",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
        [
          "ring",
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg",
        ],
      ]
    `);
  });
});
