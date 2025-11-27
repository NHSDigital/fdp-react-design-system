import React from 'react';
import './DoDontList.scss';
export interface DoDontListItem {
    /** Text content for the do/don't item */
    item: string;
}
export interface DoDontListProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Title to be displayed on the do and don't list component */
    title: string;
    /** Type of do and don't list component – 'tick' for Do lists or 'cross' for Don't lists */
    type: 'tick' | 'cross';
    /** Array of do and don't items */
    items: DoDontListItem[];
    /** If set to true when type is 'cross', removes the default 'do not' text prefix to each item */
    hidePrefix?: boolean;
    /** Optional heading level for the title heading. Defaults to 3 */
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Additional CSS classes */
    className?: string;
}
export declare const DoDontList: React.ForwardRefExoticComponent<DoDontListProps & React.RefAttributes<HTMLDivElement>>;
