// Canonical component metadata interfaces.
// These schemas will let us generate Nunjucks macros and docs tables.

export interface PropDefinition {
  name: string;
  type: string;           // Human readable type summary
  required?: boolean;
  defaultValue?: string;
  description?: string;
  enum?: string[];        // If enumerable
}

export interface ComponentSchema {
  name: string;
  props: PropDefinition[];
  a11yNotes?: string[];
  since?: string;         // version tag
  category?: string;      // For grouping (e.g., form, navigation)
}

// Utility to index props by name (will be used by macro generator later)
export function propsToRecord(schema: ComponentSchema): Record<string, PropDefinition> {
  return schema.props.reduce<Record<string, PropDefinition>>((acc, p) => { acc[p.name] = p; return acc; }, {});
}
