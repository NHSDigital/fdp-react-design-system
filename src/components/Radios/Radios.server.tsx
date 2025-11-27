import React from 'react';
import { RadiosProps } from './Radios.types';
import { renderRadiosMarkup } from './Radios.render';
import { InputServer as InputComponent } from '../Input/Input.server';

// Server (static) variant – no hooks, includes data attributes for behaviours layer.
export const RadiosServer: React.FC<RadiosProps> = ({ value, defaultValue, ...rest }) => {
  const selectedValue = value || defaultValue || '';
  return renderRadiosMarkup(
    { value, defaultValue, ...rest },
    {
      variant: 'server',
      selectedValue,
      enableBehaviourAttr: true,
      InputComponent,
    }
  );
};

// Backwards transitional alias
export { RadiosServer as RadiosProgressive };
