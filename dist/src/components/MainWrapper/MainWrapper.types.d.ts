import { ReactNode } from 'react';
export interface MainWrapperProps {
    /**
     * The HTML element type to render
     * @default 'main'
     */
    as?: 'main' | 'div' | 'section';
    /**
     * Size variant for the main wrapper
     * - 'default': Standard padding (16px mobile, 24px tablet)
     * - 'large': Large padding (24px mobile, 32px tablet)
     * - 'small': Small padding (12px mobile, 16px tablet)
     * @default 'default'
     */
    size?: 'default' | 'large' | 'small';
    /**
     * Custom class name to apply
     */
    className?: string;
    /**
     * Child content to render
     */
    children: ReactNode;
    /**
     * Additional props to pass to the underlying element
     */
    [key: string]: any;
}
