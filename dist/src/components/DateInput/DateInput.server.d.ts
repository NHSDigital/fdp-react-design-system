import "./DateInput.scss";
import type { DateInputProps } from "./DateInput.types";
/**
 * DateInputServer – Pure server-only renderer (no hooks, no event handlers).
 *
 * Renders the same semantic markup as the interactive DateInput, but without
 * client-side state/validation. Suitable for SSR-only usage or progressive enhancement.
 */
export declare function DateInputServer({ id, className, items, namePrefix, values, fieldset, hint, errorMessage, onChange: _onChange, ...props }: DateInputProps): import("react/jsx-runtime").JSX.Element;
export default DateInputServer;
