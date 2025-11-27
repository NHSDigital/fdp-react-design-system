/**
 * Assert that the container (or a provided element) textContent contains a substring.
 * Normalises whitespace and provides clear diff-friendly error output.
 */
export function assertContainsText(element: HTMLElement, expected: string) {
  const normalise = (s: string | null | undefined) => (s || '').replace(/\s+/g, ' ').trim();
  const actual = normalise(element.textContent);
  const target = normalise(expected);
  if (!actual.includes(target)) {
    throw new Error(`Expected text to include:\n  ${target}\nActual text was:\n  ${actual}`);
  }
}
