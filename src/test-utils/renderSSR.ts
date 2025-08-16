import { renderToString } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import * as domQueries from '@testing-library/dom';
// Lightweight PrettyDOMOptions type fallback to avoid deep import typing issues
type PrettyDOMOptions = { highlight?: boolean };

/**
 * Unified SSR render utility (Phase 1)
 * ----------------------------------
 * Goals:
 *  - Provide a single, consistent server-side render helper returning a query API
 *    aligned with @testing-library conventions (no custom re-implementations).
 *  - Avoid coupling tests to implementation details beyond accessible DOM output.
 *  - Offer a migration path away from the bespoke ServerRenderer & React19TestRenderer.
 *
 * Not (yet) included (reserved for later phases):
 *  - Hydration validation helper
 *  - Streaming (renderToReadableStream) support
 *  - Built‑in a11y / axe assertions
 *
 * Usage example:
 *   const { container, html, getByRole, getByText } = renderSSR(<MyComponent />);
 *   expect(getByRole('heading', { name: /title/i })).toBeInTheDocument();
 */
export function renderSSR(ui: React.ReactElement) {
  const raw = renderToString(ui);
  const cleaned = raw; // Preserve any leading <link> tags for hydration fidelity

  // Provide fixed URL to satisfy code paths that expect window.location.* storages
  const dom = new JSDOM(`<!doctype html><html><body>${cleaned}</body></html>`, {
    url: 'https://test.local/'
  });

  const container = dom.window.document.body as HTMLElement;

  // Bind standard testing-library DOM queries to the SSR container
  const boundQueries: Record<string, any> = {};
  for (const [name, fn] of Object.entries(domQueries)) {
    // Skip internal utilities not being functions (e.g., screen, waitFor, fireEvent, prettyDOM, etc.)
    if (typeof fn === 'function') {
      try {
        boundQueries[name] = (fn as any).bind(null, container);
      } catch {
        // Non-bindable (like waitFor) – ignore; they can be imported directly in tests if needed
      }
    }
  }

  // Provide a prettyDOM wrapper for convenience (mirrors testing-library API)
  const prettyDOM = (el: Element | Document = container, maxLength?: number, options?: PrettyDOMOptions) => {
    return (domQueries as any).prettyDOM(el, maxLength, options);
  };

  return {
    container,
    html: cleaned,
    prettyDOM,
    // Common query exports (explicit for type hinting while still returning full map)
    getByRole: boundQueries.getByRole,
    queryByRole: boundQueries.queryByRole,
    findByRole: boundQueries.findByRole,
    getAllByRole: boundQueries.getAllByRole,
    queryAllByRole: boundQueries.queryAllByRole,
    findAllByRole: boundQueries.findAllByRole,
    getByText: boundQueries.getByText,
    queryByText: boundQueries.queryByText,
    findByText: boundQueries.findByText,
    getAllByText: boundQueries.getAllByText,
  getByLabelText: boundQueries.getByLabelText,
  queryByLabelText: boundQueries.queryByLabelText,
  getByPlaceholderText: boundQueries.getByPlaceholderText,
  queryByPlaceholderText: boundQueries.queryByPlaceholderText,
  getByDisplayValue: boundQueries.getByDisplayValue,
  queryByDisplayValue: boundQueries.queryByDisplayValue,
  getByTestId: boundQueries.getByTestId,
  queryByTestId: boundQueries.queryByTestId,
  getAllByTestId: boundQueries.getAllByTestId,
  getByTitle: boundQueries.getByTitle,
  queryByTitle: boundQueries.queryByTitle,
  getByAltText: boundQueries.getByAltText,
  queryByAltText: boundQueries.queryByAltText,
    // Spread remaining bound queries for flexibility
    ...boundQueries,
  } as const;
}


/** Minimal SSR screen analogue (discouraged—prefer destructuring renderSSR) */
export const ssrScreen = new Proxy({}, {
  get(_target, prop: string) {
    throw new Error(`ssrScreen.${prop} is not supported. Use destructured queries from renderSSR()`);
  }
});

/**
 * Convenience helper to snapshot raw SSR HTML (optional use in tests)
 */
export function snapshotSSR(ui: React.ReactElement) {
  const { html } = renderSSR(ui);
  return html;
}
