import { InputProps } from './Input.types';
/**
 * InputServer – Pure server-only renderer (no hooks).
 *
 * Notes:
 * - Does not attach event handlers; server components should not emit functions.
 * - For range inputs, computes an initial display value but does not manage state.
 */
export declare function InputServer(props: InputProps): import("react/jsx-runtime").JSX.Element;
