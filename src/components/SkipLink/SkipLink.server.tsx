import React from 'react';
import classNames from 'classnames';
import './SkipLink.scss';
import { SkipLinkProps } from './SkipLink.types';

/**
 * Server-only SkipLink variant with no hooks.
 * Renders a plain anchor suitable for SSR environments (e.g., Next.js server components).
 * Client-side enhancements (focus management) are intentionally omitted here.
 */
export const SkipLinkServer: React.FC<SkipLinkProps> = ({
  text = 'Skip to main content',
  href = '#maincontent',
  classes,
  attributes = {},
}) => {
  const skipLinkClasses = classNames('nhsuk-skip-link', classes);

  return (
    <a
      className={skipLinkClasses}
      href={href}
      data-module="nhsuk-skip-link"
      data-enhanced="false"
      {...attributes}
    >
      {text}
    </a>
  );
};
