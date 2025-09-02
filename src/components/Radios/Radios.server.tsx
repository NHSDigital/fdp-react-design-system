import React from 'react';
import { RadiosProps } from './Radios.types';
import { renderRadiosMarkup } from './Radios.render';

// Server (static) variant – no hooks, includes data attributes for behaviours layer.
export const RadiosServer: React.FC<RadiosProps> = ({ value, defaultValue, ...rest }) => {
  const selectedValue = value || defaultValue || '';
  return renderRadiosMarkup(
    { value, defaultValue, ...rest },
    {
      variant: 'server',
      selectedValue,
      enableBehaviourAttr: true,
    }
  );
};

// Backwards transitional alias
export { RadiosServer as RadiosProgressive };
