import React, { useState } from 'react';

const token = (name: string, fallback: string) => `var(${name}, ${fallback})`;

export default function FocusRingDemo() {
  const [focused, setFocused] = useState(false);
  const base = {
    display: 'inline-block',
    padding: token('--nhs-fdp-spacing-3', '12px'),
    background: token('--nhs-fdp-surface-bg-secondary', '#f7f7f7'),
    border: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-default', 'rgba(0,0,0,0.12)')}`,
    borderRadius: token('--nhs-fdp-border-radius-small', '4px'),
    outline: focused
      ? `${token('--nhs-fdp-outline-width', '3px')} solid ${token('--nhs-fdp-semantic-color-focus-text', '#0b0c0c')}`
      : 'none',
    outlineOffset: token('--nhs-fdp-outline-offset', '2px'),
    cursor: 'pointer',
  } as React.CSSProperties;
  return (
    <div style={{ padding: token('--nhs-fdp-spacing-4', '16px') }}>
      <div
        tabIndex={0}
        role="button"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={base}
      >
        Tab or click to show focus ring (distinct from container border)
      </div>
    </div>
  );
}
