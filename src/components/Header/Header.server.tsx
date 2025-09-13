import React from 'react';
import { HeaderProps } from './Header.types';
import { renderHeaderMarkupServer } from './Header.render.server';

// Server render helper (previously exposed as HeaderSSR/HeaderStatic).
// Retained as an internal export for direct SSR usage when you explicitly
// want the pure markup function without any client enhancement coupling.
export const HeaderServer: React.FC<HeaderProps> = (props) => {
  return renderHeaderMarkupServer(props, {
    variant: 'server',
    isClient: false,
  });
};
