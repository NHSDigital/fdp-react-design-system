export interface PropDefinition {
    name: string;
    type: string;
    required?: boolean;
    defaultValue?: string;
    description?: string;
    enum?: string[];
}
export interface ComponentSchema {
    name: string;
    props: PropDefinition[];
    a11yNotes?: string[];
    since?: string;
    category?: string;
}
export declare function propsToRecord(schema: ComponentSchema): Record<string, PropDefinition>;
