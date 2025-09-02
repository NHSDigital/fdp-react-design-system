export interface InsetTextSchema {
  text?: string;
  html?: string; // takes precedence over text
  className?: string;
}

export const insetTextSchema: InsetTextSchema = {
  text: undefined,
  html: undefined,
  className: undefined
};
