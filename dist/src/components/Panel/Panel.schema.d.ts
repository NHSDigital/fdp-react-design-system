export interface PanelSchema {
    id?: string;
    className?: string;
    headingText?: string;
    headingHtml?: string;
    headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
    bodyText?: string;
    bodyHtml?: string;
}
export declare const panelSchema: PanelSchema;
