import React from 'react';

const token = (name: string, fallback: string) => `var(${name}, ${fallback})`;

export default function BorderFirstStackDemo() {
  const gap = token('--nhs-fdp-spacing-4', '16px');

  const headerStyle = {
    background: token('--nhs-fdp-surface-bg-primary', '#fff'),
    borderBottom: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-strong', 'rgba(0,0,0,0.24)')}`,
    padding: gap,
    position: 'relative' as const,
    zIndex: 100, // numeric fallback; semantic var should be applied via CSS class in components
  } as React.CSSProperties;

  const layer1 = {
    background: token('--nhs-fdp-surface-bg-secondary', '#f7f7f7'),
    border: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-subtle', 'rgba(0,0,0,0.08)')}`,
    borderRadius: token('--nhs-fdp-border-radius-small', '4px'),
    padding: gap,
  } as React.CSSProperties;

  const layer2 = {
    background: token('--nhs-fdp-surface-bg-elevated', '#fff'),
    border: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-default', 'rgba(0,0,0,0.12)')}`,
    borderRadius: token('--nhs-fdp-border-radius-small', '4px'),
    outline: `${token('--nhs-fdp-border-width-hairline', '1px')} solid ${token('--nhs-fdp-surface-border-subtle', 'rgba(0,0,0,0.08)')}`,
    outlineOffset: token('--nhs-fdp-spacing-1', '4px'),
    padding: gap,
  } as React.CSSProperties;

  const section = { marginTop: token('--nhs-fdp-spacing-6', '24px') } as React.CSSProperties;

  return (
    <div style={{ fontFamily: 'inherit' }}>
      <div style={headerStyle}>
        <strong>Header (distinct layer via strong bottom border)</strong>
      </div>
      <div style={{ padding: gap }}>
        <div style={layer1}>
          <strong>Layer 1: Contained panel/card (border subtle)</strong>
          <p style={{ marginTop: gap }}>Use this for grouping content inside the main surface.</p>
        </div>
        <div style={section} />
        <div style={layer2}>
          <strong>Layer 2: Floating-like without shadows</strong>
          <p style={{ marginTop: gap }}>Elevated background, default border, and a subtle separation ring (outline + offset).</p>
        </div>
      </div>
    </div>
  );
}
