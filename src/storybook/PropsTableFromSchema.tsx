/// <reference types="vite/client" />
import React from 'react';
import type { ComponentSchema, PropDefinition } from '../schemas/componentMeta';

type AnyModule = Record<string, unknown>;

// Eagerly import all *.schema.ts files so Storybook (Vite) can bundle them for docs usage
const schemaModules = import.meta.glob('../components/**/**.schema.ts', { eager: true }) as Record<string, AnyModule>;

function extractSchemas(): Array<ComponentSchema & { source: string }> {
  const results: Array<ComponentSchema & { source: string }> = [];
  for (const [path, mod] of Object.entries(schemaModules)) {
    const keys = Object.keys(mod);
    // Prefer named exports that end with Schema (e.g., ButtonSchema)
    const schemaKey = keys.find((k) => /Schema$/.test(k));
    const candidate = (schemaKey ? (mod as AnyModule)[schemaKey] : (mod as AnyModule).default) as unknown;
    if (candidate && typeof candidate === 'object' && Array.isArray((candidate as any).props) && (candidate as any).name) {
      results.push({ ...(candidate as ComponentSchema), source: path });
    }
  }
  return results;
}

const ALL_SCHEMAS = extractSchemas();

export interface PropsTableFromSchemaProps {
  name: string; // ComponentSchema.name
  title?: string;
}

function Cell({ children }: { children?: React.ReactNode }) {
  return <td style={{ padding: '6px 8px', borderTop: '1px solid #d8dde0', verticalAlign: 'top' }}>{children}</td>;
}

function HeaderCell({ children }: { children?: React.ReactNode }) {
  return <th style={{ textAlign: 'left', padding: '8px', borderBottom: '2px solid #aeb7bd' }}>{children}</th>;
}

function renderType(p: PropDefinition) {
  if (p.enum?.length) return p.enum.join(' | ');
  return p.type;
}

export function PropsTableFromSchema({ name, title }: PropsTableFromSchemaProps) {
  const schema = ALL_SCHEMAS.find((s) => s.name === name);

  if (!schema) {
    return (
      <div style={{ border: '1px dashed #d8dde0', padding: 12, borderRadius: 6, color: '#475569' }}>
        <strong>Props</strong>
        <div style={{ marginTop: 8 }}>No schema found for “{name}”.</div>
        <div style={{ fontSize: 12, marginTop: 4 }}>Add a {name}.schema.ts exporting a ComponentSchema to enable auto docs.</div>
      </div>
    );
  }

  return (
    <section>
      <h3 style={{ margin: '16px 0 8px' }}>{title ?? 'Props'}</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
        <thead>
          <tr>
            <HeaderCell>Name</HeaderCell>
            <HeaderCell>Type</HeaderCell>
            <HeaderCell>Required</HeaderCell>
            <HeaderCell>Default</HeaderCell>
            <HeaderCell>Description</HeaderCell>
          </tr>
        </thead>
        <tbody>
          {schema.props.map((p) => (
            <tr key={p.name}>
              <Cell><code>{p.name}</code></Cell>
              <Cell><code>{renderType(p)}</code></Cell>
              <Cell>{p.required ? 'Yes' : 'No'}</Cell>
              <Cell>{p.defaultValue ? <code>{p.defaultValue}</code> : '—'}</Cell>
              <Cell>{p.description ?? '—'}</Cell>
            </tr>
          ))}
        </tbody>
      </table>
      {schema.a11yNotes?.length ? (
        <div style={{ marginTop: 12 }}>
          <strong>Accessibility notes</strong>
          <ul>
            {schema.a11yNotes.map((n, i) => (
              <li key={i}>{n}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}

export default PropsTableFromSchema;
