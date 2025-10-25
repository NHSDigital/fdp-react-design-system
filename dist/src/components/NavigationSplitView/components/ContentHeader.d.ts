import * as React from "react";
export interface ContentHeaderProps {
    show: boolean;
    label?: string;
    contentHeaderLevel: 1 | 2 | 3 | 4 | 5 | 6;
    detailActive: boolean;
    headerContext: "mobile" | "tablet" | "desktop";
    backLabel: string;
    nextLabel: string;
    onBack?: () => void;
    onForward?: () => void;
    renderContentHeader?: (args: {
        item: any;
        detailActive: boolean;
        context: "mobile" | "tablet" | "desktop";
        backLink?: React.ReactNode;
        defaultHeading: React.ReactNode;
    }) => React.ReactNode;
    item?: any;
    contentSubheader?: React.ReactNode | ((item: any) => React.ReactNode);
    tertiaryInlineActive?: boolean;
}
export declare const ContentHeader: React.FC<ContentHeaderProps>;
