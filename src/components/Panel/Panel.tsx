import React from 'react';
import classNames from 'classnames';
import './Panel.scss';
import { PanelProps } from './Panel.types';
import { Heading } from '../Heading';

export const Panel: React.FC<PanelProps> = ({
  id,
  className,
  headingText,
  headingHtml,
  headingLevel = 2,
  bodyText,
  bodyHtml,
  children,
  ...props
}) => {
  const panelClasses = classNames(
    'nhsuk-panel',
    className
  );

  const renderHeading = () => {
    if (!headingText && !headingHtml && !children) return null;

    if (headingHtml) {
      return (
        <Heading
          level={headingLevel}
          className="nhsuk-panel__heading"
          html={headingHtml}
          marginBottom="var(--panel-heading-margin, 24px)"
        />
      );
    }

    if (headingText) {
      return (
        <Heading
          level={headingLevel}
          className="nhsuk-panel__heading"
          text={headingText}
          marginBottom="var(--panel-heading-margin, 24px)"
        />
      );
    }

    return null;
  };

  const renderBody = () => {
    if (children) {
      return <div className="nhsuk-panel__body">{children}</div>;
    }

    if (bodyHtml) {
      return (
        <div 
          className="nhsuk-panel__body"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      );
    }

    if (bodyText) {
      return (
        <div className="nhsuk-panel__body">
          <p>{bodyText}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className={panelClasses} id={id} {...props}>
      {renderHeading()}
      {renderBody()}
    </div>
  );
};
