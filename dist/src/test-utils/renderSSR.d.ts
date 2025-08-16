type PrettyDOMOptions = {
    highlight?: boolean;
};
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
export declare function renderSSR(ui: React.ReactElement): {
    readonly container: HTMLElement;
    readonly html: string;
    readonly prettyDOM: (el?: Element | Document, maxLength?: number, options?: PrettyDOMOptions) => any;
    readonly getByRole: any;
    readonly queryByRole: any;
    readonly findByRole: any;
    readonly getAllByRole: any;
    readonly queryAllByRole: any;
    readonly findAllByRole: any;
    readonly getByText: any;
    readonly queryByText: any;
    readonly findByText: any;
    readonly getAllByText: any;
    readonly getByLabelText: any;
    readonly queryByLabelText: any;
    readonly getByPlaceholderText: any;
    readonly queryByPlaceholderText: any;
    readonly getByDisplayValue: any;
    readonly queryByDisplayValue: any;
    readonly getByTestId: any;
    readonly queryByTestId: any;
    readonly getAllByTestId: any;
    readonly getByTitle: any;
    readonly queryByTitle: any;
    readonly getByAltText: any;
    readonly queryByAltText: any;
};
/** Minimal SSR screen analogue (discouraged—prefer destructuring renderSSR) */
export declare const ssrScreen: {};
/**
 * Convenience helper to snapshot raw SSR HTML (optional use in tests)
 */
export declare function snapshotSSR(ui: React.ReactElement): string;
export {};
