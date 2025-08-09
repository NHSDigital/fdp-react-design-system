import React from 'react';
import { Container } from '../Grid/Grid';
import { ContainerProps } from '../Grid/Grid.types';

/**
 * WidthContainer Component
 * 
 * A standalone wrapper around the Grid Container component that provides
 * the NHS-standard page width container (nhsuk-width-container).
 * 
 * This component provides:
 * - Standard NHS page width constraints
 * - Responsive margins and centering
 * - Consistent spacing across breakpoints
 * 
 * @example
 * <WidthContainer>
 *   <p>Content with standard NHS page width</p>
 * </WidthContainer>
 * 
 * @example
 * <WidthContainer fluid>
 *   <p>Full-width content</p>
 * </WidthContainer>
 */
export const WidthContainer: React.FC<ContainerProps> = (props) => {
  return <Container {...props} />;
};

export default WidthContainer;
