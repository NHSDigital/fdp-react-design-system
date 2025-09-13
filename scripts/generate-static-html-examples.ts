#!/usr/bin/env tsx
/**
 * Generates static HTML snippets for component documentation pages by:
 * 1. Dynamically importing the built React component (from dist)
 * 2. Rendering it to static markup with React 19's renderToStaticMarkup
 * 3. Normalising the HTML to canonical form (same as macro parity tests)
 * 4. Writing snippet files under docs/static-html/<Component>.html
 * 5. (Radios only for initial implementation; easily extendable)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Re-use normaliser (import via relative path). We copy the util into scripts for runtime import.
import { normaliseHtml } from '../tests/macroParity/utils/htmlNormaliser';

interface ComponentSpec {
  name: string;
  importPath: string; // relative to dist
  props: any;
  outFile: string;
  elementExport?: string; // named export if not default
}

const distRoot = path.join(__dirname, '..', 'dist', 'src', 'components');
const outputDir = path.join(__dirname, '..', 'docs', 'static-html');

const components: ComponentSpec[] = [
  {
    name: 'Fieldset',
    importPath: 'Fieldset',
    elementExport: 'Fieldset',
    props: {
      legend: { text: 'Contact details', size: 'l', isPageHeading: false },
      // Minimal native children to avoid importing nested DS components
      children: React.createElement(
        'div',
        null,
        React.createElement('div', { style: { marginBottom: '20px' } },
          React.createElement('label', { className: 'nhsuk-label', htmlFor: 'email' }, 'Email address'),
          React.createElement('input', { className: 'nhsuk-input', id: 'email', name: 'email', type: 'email' })
        ),
        React.createElement('div', null,
          React.createElement('label', { className: 'nhsuk-label', htmlFor: 'phone' }, 'Phone number'),
          React.createElement('input', { className: 'nhsuk-input', id: 'phone', name: 'phone', type: 'tel' })
        )
      )
    },
    outFile: 'Fieldset.html'
  },
  {
    name: 'Radios',
    importPath: 'Radios',
    elementExport: 'Radios',
    props: {
      name: 'contact-docs',
      options: [
        { value: 'email', text: 'Email', conditional: 'Email conditional content' },
        { value: 'phone', text: 'Phone', conditional: 'Phone conditional content' }
      ],
      value: 'email'
    },
    outFile: 'Radios.html'
  },
  {
    name: 'Textarea',
    importPath: 'Textarea',
    elementExport: 'Textarea',
    props: {
      id: 'textarea-default',
      name: 'textarea-default',
      placeholder: 'Enter your text here…',
      rows: 4,
    },
    outFile: 'Textarea.html'
  },
  {
    name: 'Select',
    importPath: 'Select',
    elementExport: 'Select',
    props: {
      id: 'select-default',
      name: 'select-default',
      options: [
        { value: '', text: 'Please select an option' },
        { value: 'england', text: 'England' },
        { value: 'scotland', text: 'Scotland' },
        { value: 'wales', text: 'Wales' }
      ]
    },
    outFile: 'Select.html'
  },
  {
    name: 'Checkboxes',
    importPath: 'Checkboxes',
    elementExport: 'Checkboxes',
    props: {
      name: 'example',
      legend: 'Which do you have?',
      items: [
        { value: 'asthma', text: 'Asthma' },
        { value: 'diabetes', text: 'Diabetes' },
        { value: 'hypertension', text: 'High blood pressure' }
      ]
    },
    outFile: 'Checkboxes.html'
  },
  {
    name: 'Input',
    importPath: 'Input',
    elementExport: 'Input',
    props: {
      id: 'age-range',
      name: 'age',
      type: 'range',
      min: '18',
      max: '100',
      defaultValue: '30',
      showValueLabels: true,
      showCurrentValue: true,
    },
    outFile: 'Input.html'
  },
  {
    name: 'Button',
    importPath: 'Button',
    elementExport: 'Button',
    props: { children: 'Continue' },
    outFile: 'Button.html'
  },
  {
    name: 'Label',
    importPath: 'Label',
    elementExport: 'Label',
    props: { htmlFor: 'full-name', children: 'Full name' },
    outFile: 'Label.html'
  },
  {
    name: 'Heading',
    importPath: 'Heading',
    elementExport: 'Heading',
    props: { size: 'xl', children: 'Page title (xl -> h1)' },
    outFile: 'Heading.html'
  },
  {
    name: 'ErrorMessage',
    importPath: 'ErrorMessage',
    elementExport: 'ErrorMessage',
    props: { id: 'name-error', children: 'There is a problem with this field' },
    outFile: 'ErrorMessage.html'
  },
  {
    name: 'Hint',
    importPath: 'Hint',
    elementExport: 'Hint',
    props: { children: 'We will only use this to contact you about your appointment' },
    outFile: 'Hint.html'
  },
  {
    name: 'ErrorSummary',
    importPath: 'ErrorSummary',
    elementExport: 'ErrorSummary',
    props: {
      titleText: 'There is a problem',
      descriptionText: 'Check the following fields:',
      errorList: [
        { text: 'Enter your name', href: '#name' },
        { text: 'Enter a valid email address', href: '#email' }
      ]
    },
    outFile: 'ErrorSummary.html'
  },
  {
    name: 'HeaderServerOverflow',
    importPath: 'Header',
    elementExport: 'HeaderServer',
    props: {
      maxVisibleItems: 4,
      service: { text: 'NHS Service', href: '/' },
      navigation: {
        items: [
          { href: '/', text: 'Home', current: true },
          { href: '/appointments', text: 'Appointments' },
          { href: '/results', text: 'Results' },
          { href: '/medicines', text: 'Medicines' },
          { href: '/messages', text: 'Messages' },
          { href: '/conditions', text: 'Conditions' },
          { href: '/settings', text: 'Settings' },
          { href: '/support', text: 'Support' }
        ]
      }
    },
    outFile: 'HeaderServerOverflow.html'
  }
];

async function ensureOutputDir() {
  await fs.promises.mkdir(outputDir, { recursive: true });
}

async function generate(spec: ComponentSpec) {
  const modulePath = path.join(distRoot, spec.importPath, 'index.js');
  if (!fs.existsSync(modulePath)) {
    console.error(`[skip] ${spec.name} build output not found at ${modulePath}`);
    return; // Skip silently; build must run first
  }
  const mod = await import(modulePath);
  const Comp = spec.elementExport ? mod[spec.elementExport] : mod.default;
  if (!Comp) {
    console.error(`[error] Export ${spec.elementExport ?? 'default'} missing for ${spec.name}`);
    return;
  }
  const safeProps = { ...spec.props };
  delete (safeProps as any).maxVisibleItems; // avoid leaking internal-only prop to DOM in static HTML snapshot
  const element = React.createElement(Comp, safeProps);
  const raw = renderToStaticMarkup(element);
  const normalised = normaliseHtml(raw);
  const filePath = path.join(outputDir, spec.outFile);
  await fs.promises.writeFile(filePath, normalised + '\n', 'utf8');
  console.log(`[ok] Wrote ${filePath}`);
}

async function run() {
  await ensureOutputDir();
  for (const spec of components) {
    await generate(spec);
  }
  console.log('Static HTML generation complete.');
}

run().catch(e => {
  console.error(e);
  process.exit(1);
});
