import React from 'react';
import { HeaderProps } from './Header.types';
import { renderHeaderMarkupServer } from './Header.render.server';

// Server render helper (previously exposed as HeaderSSR/HeaderStatic).
// Retained as an internal export for direct SSR usage when you explicitly
// want the pure markup function without any client enhancement coupling.
export const HeaderServer: React.FC<HeaderProps> = (props) => {
  // For SSR safety, we do NOT import BrandThemeProvider or use hooks here.
  // If the caller provides a data-brand attribute on the root via `attributes`,
  // we honour it to select FDP vs NHS branding server-side.
  const attrBrand = props.attributes?.['data-brand'];
  const brand = attrBrand === 'fdp' || attrBrand === 'nhs' ? attrBrand : undefined;

  return renderHeaderMarkupServer(props, {
    variant: 'server',
    isClient: false,
    brand,
  });
};
