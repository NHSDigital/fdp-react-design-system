import React from 'react';
import classNames from 'classnames';
import './ActionLink.scss';
import { ActionLinkProps } from './ActionLink.types';

export const ActionLink: React.FC<ActionLinkProps> = ({
  text,
  href,
  openInNewWindow = false,
  className,
  ...props
}) => {
  const linkClasses = classNames(
    'nhsuk-action-link__link',
    className
  );

  return (
    <div className="nhsuk-action-link">
      <a
        className={linkClasses}
        href={href}
        target={openInNewWindow ? '_blank' : undefined}
        rel={openInNewWindow ? 'noopener noreferrer' : undefined}
        {...props}
      >
        <svg 
          className="nhsuk-icon nhsuk-icon__arrow-right-circle" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          aria-hidden="true" 
          width="36" 
          height="36"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
        </svg>
        <span className="nhsuk-action-link__text">{text}</span>
      </a>
    </div>
  );
};
