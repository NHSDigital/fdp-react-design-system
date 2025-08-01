import { ReactNode, HTMLAttributes } from '../../../node_modules/react';
export interface InsetTextProps extends HTMLAttributes<HTMLDivElement> {
    /** Plain text content for the inset text */
    text?: string;
    /** HTML content for the inset text (takes precedence over text) */
    html?: string;
    /** React children content (takes precedence over text and html) */
    children?: ReactNode;
    /** Additional CSS classes to apply to the inset text */
    className?: string;
}
