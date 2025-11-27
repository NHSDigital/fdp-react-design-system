import './ErrorSummary.scss';
import type { ErrorSummaryProps } from './ErrorSummary.types';
/**
 * ErrorSummaryServer – Server-only renderer (no focus/side effects).
 *
 * Mirrors the client ErrorSummary markup but avoids useRef/useEffect so it is
 * safe to render during SSR. Progressive enhancement can attach focus on the client.
 */
export declare function ErrorSummaryServer({ titleText, titleHtml, descriptionText, descriptionHtml, errorList, className, children, ...props }: ErrorSummaryProps): import("react/jsx-runtime").JSX.Element;
export default ErrorSummaryServer;
