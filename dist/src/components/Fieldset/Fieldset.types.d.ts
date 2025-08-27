import { ReactNode } from 'react';
export type FieldsetLegendSize = 'xl' | 'l' | 'm' | 's';
export interface FieldsetLegendProps {
    /** Text content for the legend */
    text?: string;
    /** HTML content for the legend (takes precedence over text) */
    html?: string;
    /** Additional CSS classes for the legend */
    className?: string;
    /** Size modifier for the legend */
    size?: FieldsetLegendSize;
    /** Whether the legend acts as the page heading (renders as h1) */
    isPageHeading?: boolean;
}
export interface FieldsetProps {
    /** Child elements to render inside the fieldset */
    children: ReactNode;
    /** Legend configuration for the fieldset */
    legend?: FieldsetLegendProps;
    /** Additional CSS classes for the fieldset */
    className?: string;
    /** ID(s) of elements that describe this fieldset for accessibility */
    describedBy?: string;
    /** Additional HTML attributes */
    [key: string]: any;
}
