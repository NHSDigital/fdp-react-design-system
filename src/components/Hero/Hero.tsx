import React from 'react';
import { HeroProps } from './Hero.types';
import './Hero.scss';

/**
 * Hero component - displays a prominent banner section with optional background image
 * 
 * The Hero component creates a prominent banner section, typically used at the top of pages.
 * It supports both text-only and image background variants, with automatic responsive styling.
 * 
 * Features:
 * - Blue background with white text by default
 * - Optional background image with overlay
 * - Responsive design with mobile-first approach
 * - Configurable heading levels and content
 * - Accessibility-compliant markup
 * - Support for custom HTML content or React children
 * 
 * @param props - The Hero component props
 * @returns JSX.Element
 */
export const Hero: React.FC<HeroProps> = ({
  heading,
  headingLevel = 1,
  headingClasses = '',
  text,
  html,
  imageURL,
  containerClasses = '',
  classes = '',
  children,
  ...attributes
}) => {
  // Determine hero classes based on image and content presence
  const heroClasses = [
    'nhsuk-hero',
    imageURL && heading ? 'nhsuk-hero--image nhsuk-hero--image-description' : '',
    imageURL && !heading ? 'nhsuk-hero--image' : '',
    classes
  ].filter(Boolean).join(' ');

  // Determine container classes and border
  const containerClassNames = [
    'nhsuk-width-container',
    containerClasses,
    !imageURL ? 'nhsuk-hero--border' : ''
  ].filter(Boolean).join(' ');

  // Determine heading classes
  const headingClassNames = [
    'nhsuk-hero__heading',
    headingClasses,
    !children && !text && !html ? 'nhsuk-u-margin-bottom-0' : ''
  ].filter(Boolean).join(' ');

  // Check if there's any content to render
  const hasContent = children || heading || text || html;

  // Render the appropriate heading element
  const renderHeading = () => {
    if (!heading) return null;
    
    const props = { className: headingClassNames };
    
    switch (headingLevel) {
      case 1:
        return <h1 {...props}>{heading}</h1>;
      case 2:
        return <h2 {...props}>{heading}</h2>;
      case 3:
        return <h3 {...props}>{heading}</h3>;
      case 4:
        return <h4 {...props}>{heading}</h4>;
      case 5:
        return <h5 {...props}>{heading}</h5>;
      case 6:
        return <h6 {...props}>{heading}</h6>;
      default:
        return <h1 {...props}>{heading}</h1>;
    }
  };

  return (
    <section 
      className={heroClasses}
      style={imageURL ? { backgroundImage: `url('${imageURL}')` } : undefined}
      role="banner"
      {...attributes}
    >
      {imageURL && (
        <div className="nhsuk-hero__overlay">
          {hasContent && (
            <div className={containerClassNames}>
              <div className="nhsuk-grid-row">
                <div className="nhsuk-grid-column-two-thirds">
                  <div className="nhsuk-hero-content">
                    {renderHeading()}
                    {children ? (
                      children
                    ) : html ? (
                      <div dangerouslySetInnerHTML={{ __html: html }} />
                    ) : text ? (
                      <p className="nhsuk-body-l nhsuk-u-margin-bottom-0">{text}</p>
                    ) : null}
                    <span className="nhsuk-hero__arrow" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {!imageURL && hasContent && (
        <div className={containerClassNames}>
          <div className="nhsuk-grid-row">
            <div className="nhsuk-grid-column-two-thirds">
              <div className="nhsuk-hero__wrapper">
                {renderHeading()}
                {children ? (
                  children
                ) : html ? (
                  <div dangerouslySetInnerHTML={{ __html: html }} />
                ) : text ? (
                  <p className="nhsuk-body-l nhsuk-u-margin-bottom-0">{text}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

Hero.displayName = 'Hero';

export default Hero;