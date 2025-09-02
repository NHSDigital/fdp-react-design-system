export interface PanelSchema {
  id?: string;
  className?: string;
  headingText?: string;
  headingHtml?: string; // takes precedence over headingText
  headingLevel?: 1|2|3|4|5|6;
  bodyText?: string;
  bodyHtml?: string; // takes precedence over bodyText
}

export const panelSchema: PanelSchema = {
  id: undefined,
  className: undefined,
  headingText: undefined,
  headingHtml: undefined,
  headingLevel: 2,
  bodyText: undefined,
  bodyHtml: undefined
};
