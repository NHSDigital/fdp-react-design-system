import { CheckboxesProps } from './Checkboxes.types';
import './Checkboxes.scss';
/**
 * CheckboxesServer – Pure server-only renderer (no hooks).
 *
 * Notes:
 * - Does not attach event handlers; server components should not emit functions.
 * - Conditional content visibility is derived from initial `checked` flags.
 * - Adds `data-nhs-behaviour="checkboxes"` to enable progressive enhancement when JS is present.
 */
export declare function CheckboxesServer(props: CheckboxesProps): import("react/jsx-runtime").JSX.Element;
export default CheckboxesServer;
