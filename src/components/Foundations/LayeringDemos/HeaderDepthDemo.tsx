import React, { useState } from 'react';
import { Header } from '../../Header';
import { BrandThemeProvider } from '../../../themes/BrandThemeProvider';

const token = (name: string, fallback: string) => `var(${name}, ${fallback})`;

type DepthMode = 'subtle' | 'strong' | 'button';

export default function HeaderDepthDemo() {
  const [mode, setMode] = useState<DepthMode>('strong');

  const gap = token('--nhs-fdp-spacing-4', '16px');

  const toolbarStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: token('--nhs-fdp-spacing-2', '8px'),
    padding: `${token('--nhs-fdp-spacing-2', '8px')} ${gap}`,
    background: token('--nhs-fdp-surface-bg-secondary', '#f7f7f7'),
    borderBottom: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-subtle', 'rgba(0,0,0,0.08)')}`,
  };

  const buttonStyle: React.CSSProperties = {
    font: 'inherit',
    padding: token('--nhs-fdp-spacing-1', '4px'),
    border: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-default', 'rgba(0,0,0,0.12)')}`,
    background: token('--nhs-fdp-surface-bg-elevated', '#fff'),
    borderRadius: token('--nhs-fdp-border-radius-small', '4px'),
    cursor: 'pointer',
  };

  const contentCard: React.CSSProperties = {
    margin: `${gap} ${gap} 0`,
    background: token('--nhs-fdp-surface-bg-secondary', '#f7f7f7'),
    border: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-subtle', 'rgba(0,0,0,0.08)')}`,
    borderRadius: token('--nhs-fdp-border-radius-small', '4px'),
    padding: gap,
  };

  const headerClass = `fdp-demo-sticky ${mode === 'subtle' ? 'fdp-depth-subtle' : mode === 'strong' ? 'fdp-depth-strong' : 'fdp-depth-button'}`;

  return (
    <div className="sb-unstyled">
      {/* Local brand scope so the Header renders FDP logo/brand defaults without mutating the document brand */}
      <BrandThemeProvider brand="fdp" scope="local">
        {/* Simple demo toolbar to toggle border emphasis */}
        <div style={toolbarStyle}>
          <button
            type="button"
            onClick={() => setMode('subtle')}
            style={buttonStyle}
            aria-pressed={mode === 'subtle'}
          >
            Subtle
          </button>
          <button
            type="button"
            onClick={() => setMode('strong')}
            style={buttonStyle}
            aria-pressed={mode === 'strong'}
          >
            Strong
          </button>
          <button
            type="button"
            onClick={() => setMode('button')}
            style={buttonStyle}
            aria-pressed={mode === 'button'}
            title="Match NHS button-style bottom border shadow"
          >
            Button-style
          </button>
        </div>

        {/* Header with token-backed bottom border override on the root element */}
        <Header
          className={headerClass}
          service={{ text: 'Clinic Management and Room Booking' }}
          navigation={{
            ariaLabel: 'Primary navigation',
            items: [
              { href: '#', text: 'Home' },
              { href: '#', text: 'Services' },
              { href: '#', text: 'About' },
            ],
          }}
        />

        {/* Scoped CSS to keep demo self-contained and brand-aware */}
        <style>
          {`
          /* Sticky root to keep the border aligned with viewport width */
          [data-brand="fdp"] .fdp-demo-sticky {
            position: sticky;
            top: 0;
            z-index: var(--nhs-fdp-z-index-sticky, 100);
            background: var(--nhs-fdp-surface-bg-primary, #ffffff);
          }

          /* Border-first depth: strong vs subtle emphasis */
          [data-brand="fdp"] .fdp-depth-strong {
            border-bottom: var(--nhs-fdp-border-width-1, 1px) solid var(--nhs-fdp-surface-border-strong, rgba(0,0,0,0.24));
          }
          [data-brand="fdp"] .fdp-depth-subtle {
            border-bottom: var(--nhs-fdp-border-width-1, 1px) solid var(--nhs-fdp-surface-border-subtle, rgba(0,0,0,0.08));
          }

          /* NHS button-style: thicker bottom rule to simulate an outset/shadow edge */
          [data-brand="fdp"] .fdp-depth-button {
            /* Use a thicker bottom border akin to nhsuk-button visual weight */
            border-bottom: var(--nhs-fdp-border-width-4, 4px) solid var(--nhs-fdp-surface-border-strong, rgba(0,0,0,0.28));
          }
        `}
        </style>

        {/* Content to demonstrate separation from the header layer */}
        <div style={contentCard}>
          <strong>Main UI</strong>
          <p>
            The real Header component is rendered within an FDP brand context. A token-backed bottom border
            gives it clear separation from the main UI without any shadow. Compare three options: Subtle (1px),
            Strong (1px, higher contrast), and Button-style (thicker bottom rule akin to NHS button). This helps
            explore whether the design system should start from existing NHS button depth and then tune downward.
          </p>
        </div>
      </BrandThemeProvider>
    </div>
  );
}
