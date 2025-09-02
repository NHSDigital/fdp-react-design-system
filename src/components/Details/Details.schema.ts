export interface DetailsSchema {
  summaryText?: string;
  summaryHtml?: string; // overrides summaryText
  text?: string;
  html?: string; // overrides text
  open?: boolean;
  className?: string;
  id?: string;
}

export const detailsSchema: DetailsSchema = {
  summaryText: undefined,
  summaryHtml: undefined,
  text: undefined,
  html: undefined,
  open: false,
  className: undefined,
  id: undefined
};
