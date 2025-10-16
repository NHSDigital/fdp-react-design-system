import React from 'react';
import { HeaderProps } from './Header.types';
import { renderHeaderMarkupServer } from './Header.render.server';
import { useBrand } from '../../themes/BrandThemeProvider';

// Server render helper (previously exposed as HeaderSSR/HeaderStatic).
// Retained as an internal export for direct SSR usage when you explicitly
// want the pure markup function without any client enhancement coupling.
export const HeaderServer: React.FC<HeaderProps> = (props) => {
  // Try to read brand context if a BrandThemeProvider is present
  let brand: 'nhs' | 'fdp' | undefined;
  try {
    brand = useBrand()?.brand;
  } catch {}

  return renderHeaderMarkupServer(props, {
    variant: 'server',
    isClient: false,
    brand,
  });
};
