import React from 'react';
import classNames from 'classnames';
import './BackLink.scss';

export interface ForwardLinkProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  text?: string;
  html?: string;
  href?: string;
  element?: 'a' | 'button';
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
}

export const ForwardLink: React.FC<ForwardLinkProps> = ({
  text = 'Next',
  html,
  href = '#',
  className,
  element = 'a',
  onClick,
  ...props
}) => {
  const containerClasses = classNames('nhsuk-back-link', className);
  const linkClasses = classNames('nhsuk-back-link__link');
  const renderContent = () => (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      { html ? <span dangerouslySetInnerHTML={{ __html: html }} /> : text }
      <svg
        className="nhsuk-icon nhsuk-icon__chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
        height="24"
        width="24"
      >
        <path d="M15.5 12c0 .3-.1.5-.3.7l-5 5c-.4.4-1 .4-1.4 0s-.4-1 0-1.4L13.1 12 8.8 7.7c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l5 5c.2.2.3.4.3.7z" />
      </svg>
    </span>
  );
  return (
    <div className={containerClasses}>
      {element === 'button' ? (
        <button className={linkClasses} type="button" onClick={onClick} {...props}>{renderContent()}</button>
      ) : (
        <a className={linkClasses} href={href} {...props}>{renderContent()}</a>
      )}
    </div>
  );
};

ForwardLink.displayName = 'ForwardLink';
