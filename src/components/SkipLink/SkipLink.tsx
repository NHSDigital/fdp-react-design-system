import React, { useEffect } from 'react';
import classNames from 'classnames';
import './SkipLink.scss';
import { SkipLinkProps } from './SkipLink.types';

export const SkipLink: React.FC<SkipLinkProps> = ({
  text = 'Skip to main content',
  href = '#maincontent',
  classes,
  attributes = {},
}) => {
  useEffect(() => {
    const handleSkipLinkClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Set focus on the target element and add the focused class
          targetElement.setAttribute('tabindex', '-1');
          targetElement.classList.add('nhsuk-skip-link-focused-element');
          (targetElement as HTMLElement).focus();
          
          // Remove the tabindex after a short delay to restore natural tab order
          setTimeout(() => {
            targetElement.removeAttribute('tabindex');
          }, 100);
        }
      }
    };

    // Add click handler to all skip links
    const skipLinks = document.querySelectorAll('.nhsuk-skip-link');
    skipLinks.forEach(link => {
      link.addEventListener('click', handleSkipLinkClick);
    });

    // Cleanup
    return () => {
      skipLinks.forEach(link => {
        link.removeEventListener('click', handleSkipLinkClick);
      });
    };
  }, []);

  const skipLinkClasses = classNames('nhsuk-skip-link', classes);

  return (
    <a
      className={skipLinkClasses}
      href={href}
      data-module="nhsuk-skip-link"
      {...attributes}
    >
      {text}
    </a>
  );
};
