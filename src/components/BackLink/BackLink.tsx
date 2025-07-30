import React from 'react';
import classNames from 'classnames';
import './BackLink.scss';
import { BackLinkProps } from './BackLink.types';

export const BackLink: React.FC<BackLinkProps> = ({
  text = 'Back',
  html,
  href = '#',
  className,
  element = 'a',
  onClick,
  ...props
}) => {
  const containerClasses = classNames(
    'nhsuk-back-link',
    className
  );

  const linkClasses = classNames(
    'nhsuk-back-link__link'
  );

  const renderContent = () => {
    return (
      <>
        <svg 
          className="nhsuk-icon nhsuk-icon__chevron-left" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          aria-hidden="true" 
          height="24" 
          width="24"
        >
          <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
        </svg>
        { html ? (
          <span dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          text
        )}
      </>
    );
  };

  return (
    <div className={containerClasses}>
      {element === 'button' ? (
        <button
          className={linkClasses}
          onClick={onClick}
          type="button"
          {...props}
        >
          {renderContent()}
        </button>
      ) : (
        <a
          className={linkClasses}
          href={href}
          {...props}
        >
          {renderContent()}
        </a>
      )}
    </div>
  );
};
