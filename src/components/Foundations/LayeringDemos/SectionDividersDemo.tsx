import React from 'react';

const token = (name: string, fallback: string) => `var(${name}, ${fallback})`;

export default function SectionDividersDemo() {
  const gap = token('--nhs-fdp-spacing-6', '24px');
  const sectionStyle = {
    paddingTop: gap,
    marginTop: gap,
    borderTop: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-subtle', 'rgba(0,0,0,0.08)')}`,
  } as React.CSSProperties;
  return (
    <div style={{ padding: token('--nhs-fdp-spacing-4', '16px') }}>
      <div>
        <strong>Section A</strong>
        <p>Base content area.</p>
      </div>
      <div style={sectionStyle}>
        <strong>Section B</strong>
        <p>Separated via a divider to indicate a new group.</p>
      </div>
    </div>
  );
}
