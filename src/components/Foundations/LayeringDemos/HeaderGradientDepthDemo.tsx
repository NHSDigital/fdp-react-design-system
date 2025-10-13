import React, { useState } from 'react';
import { BrandThemeProvider } from '../../../themes/BrandThemeProvider';
import { Header } from '../../Header';
import { LogoVariant } from '../../../assets/brand';

const token = (name: string, fallback: string) => `var(${name}, ${fallback})`;

type GreyDepth = 'grey-subtle' | 'grey-strong' | 'grey-button';

export default function HeaderGradientDepthDemo() {
  const [mode, setMode] = useState<GreyDepth>('grey-strong');

  const gap = token('--nhs-fdp-spacing-4', '16px');

  const toolbarStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: token('--nhs-fdp-spacing-2', '8px'),
    padding: `${token('--nhs-fdp-spacing-2', '8px')} ${gap}`,
    // Make the toolbar appear more elevated and distinct from the card
    background: token('--nhs-fdp-surface-bg-elevated', '#ffffff'),
    borderBottom: `${token('--nhs-fdp-border-width-2', '2px')} solid ${token('--nhs-fdp-surface-border-default', 'rgba(0,0,0,0.12)')}`,
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
    // Slightly different grey than the toolbar for clear separation
    background: token('--nhs-fdp-surface-bg-secondary', '#f5f7f9'),
    border: `${token('--nhs-fdp-border-width-1', '1px')} solid ${token('--nhs-fdp-surface-border-subtle', 'rgba(0,0,0,0.08)')}`,
    // Subtle elevation to distinguish from the toolbar area
    boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
    borderRadius: token('--nhs-fdp-border-radius-small', '4px'),
    padding: gap,
  };

  const headerClass = `nhsuk-header--dark-grey-gradient fdp-gradient-sticky ${mode}`;

  return (
    <div className="sb-unstyled">
      <BrandThemeProvider brand="fdp" scope="local">
        <div style={toolbarStyle}>
          <button type="button" onClick={() => setMode('grey-subtle')} style={buttonStyle} aria-pressed={mode === 'grey-subtle'}>
            Grey subtle
          </button>
          <button type="button" onClick={() => setMode('grey-strong')} style={buttonStyle} aria-pressed={mode === 'grey-strong'}>
            Grey strong
          </button>
          <button type="button" onClick={() => setMode('grey-button')} style={buttonStyle} aria-pressed={mode === 'grey-button'} title="Thicker bottom edge to echo NHS button depth">
            Grey button-style
          </button>
        </div>

		<Header
			className={headerClass}
			service={{ text: 'Clinic Management and Room Booking' }}
			logoVariant={ LogoVariant.Inverse }
          	navigation={{
            	ariaLabel: 'Primary navigation',
            items: [
              { href: '#', text: 'Home', current: true },
              { href: '#', text: 'Services' },
              { href: '#', text: 'About' },
            ],
          }}
        />

        <style>{`
          /* Sticky helper only; dark grey gradient and text color are provided by the nhsuk-header--dark-grey-gradient variant */
          [data-brand="fdp"] .fdp-gradient-sticky {
            position: sticky;
            top: 0;
            z-index: var(--nhs-fdp-z-index-sticky, 100);
          }

          /* Grey border variants as depth shadows on dark header */
          [data-brand="fdp"] .fdp-gradient-sticky.grey-subtle {
            /* subtle darker line on dark bg (lighter again to create more separation) */
            border-bottom: var(--nhs-fdp-border-width-1, 1px) solid rgba(0,0,0,0.16);
          }
          [data-brand="fdp"] .fdp-gradient-sticky.grey-strong {
            /* stronger / more opaque to read over gradient to widen the gap vs subtle */
            border-bottom: var(--nhs-fdp-border-width-1, 1px) solid rgba(0,0,0,0.62);
          }
          [data-brand="fdp"] .fdp-gradient-sticky.grey-button {
            /* echo NHS button-style outset with a thicker, but lighter dark edge */
            border-bottom: var(--nhs-fdp-border-width-4, 4px) solid rgba(0,0,0,0.46);
          }

          /* Optional: lighten horizontal rule illusion with very subtle top inner shadow using outline */
          /* Subtle gets a very light micro-separation */
          [data-brand="fdp"] .fdp-gradient-sticky.grey-subtle::after {
            content: '';
            display: block;
            height: 0;
            outline: var(--nhs-fdp-border-width-hairline, 1px) solid rgba(255,255,255,0.06);
            outline-offset: -1px;
          }

          /* Strong: slightly brighter micro-separation to emphasize the step */
          [data-brand="fdp"] .fdp-gradient-sticky.grey-strong::after {
            content: '';
            display: block;
            height: 0;
            outline: var(--nhs-fdp-border-width-hairline, 1px) solid rgba(255,255,255,0.12);
            outline-offset: -1px;
          }

          /* Button-style: still present but slightly toned down vs strong to keep edge from feeling too heavy */
          [data-brand="fdp"] .fdp-gradient-sticky.grey-button::after {
            content: '';
            display: block;
            height: 0;
            outline: var(--nhs-fdp-border-width-hairline, 1px) solid rgba(255,255,255,0.10);
            outline-offset: -1px;
          }
        `}</style>

        <div style={contentCard}>
          <strong>Grey/gradient exploration</strong>
          <p>
            This header uses a dark grey gradient background. We vary the bottom edge darkness and thickness
            to act as a depth shadow against grey materials. Compare "Grey subtle" (1px at ~16% black),
            "Grey strong" (1px at ~62%), and "Grey button-style" (4px at ~46%). Consider whether azimuth
            (light from above) is communicated clearly and if opacity should be tuned per surface luminance.
          </p>
        </div>
      </BrandThemeProvider>
    </div>
  );
}
