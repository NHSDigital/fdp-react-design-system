import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './SkipLink.scss';
import { SkipLinkProps } from './SkipLink.types';

/**
 * SSR-compatible SkipLink component for bypassing navigation to main content
 * 
 * IMPORTANT: This component should only be used at the page level,
 * typically as the first focusable element on a page. It should NOT
 * be included in individual UI components.
 * 
 * Best practices:
 * - Place at the very top of your page layout
 * - Target the main content area (e.g., <main id="maincontent">)
 * - Only use one skip link per page in most cases
 * - Visually hidden by default, visible on focus
 * 
 * SSR Compatibility:
 * - Works on server-side rendering (basic link functionality)
 * - Enhanced with focus management on client-side
 * - Progressive enhancement approach
 */
export const SkipLink: React.FC<SkipLinkProps> = ({
  text = 'Skip to main content',
  href = '#maincontent',
  classes,
  attributes = {},
}) => {
  // Track if we're on the client side for progressive enhancement
  const [isClient, setIsClient] = useState(false);

  // SSR-safe client detection
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // SSR guard: only run on client side with comprehensive checks
    if (typeof window === 'undefined' || 
        typeof document === 'undefined' || 
        !document.querySelector ||
        !document.querySelectorAll) {
      return;
    }

    const handleSkipLinkClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      
      if (targetId && targetId.startsWith('#')) {
        const targetElement = (typeof document !== 'undefined' ? (typeof document !== 'undefined' ? (typeof document !== 'undefined' ? (typeof document !== 'undefined' ? document.querySelector(targetId) : null) : null) : null) : null);
        if (targetElement) {
          // Ensure the target element can receive focus
          if (!targetElement.hasAttribute('tabindex')) {
            targetElement.setAttribute('tabindex', '-1');
          }
          
          // Focus the target element
          (targetElement as HTMLElement).focus();
          
          // Add visual indicator for focused content
          targetElement.classList.add('nhsuk-skip-link-focused-element');
          
          // Clean up after a short delay - use window.setTimeout to ensure availability
          const timeoutId = window.setTimeout(() => {
            targetElement.classList.remove('nhsuk-skip-link-focused-element');
            // Only remove tabindex if we added it
            if (targetElement.getAttribute('tabindex') === '-1') {
              targetElement.removeAttribute('tabindex');
            }
          }, 3000);
          
          // Store timeout ID for cleanup
          (target as any).__nhsSkipLinkTimeout = timeoutId;
        }
      }
    };

    // Add click handler to all skip links with error handling
    try {
      const skipLinks = document.querySelectorAll('.nhsuk-skip-link');
      skipLinks.forEach(link => {
        link.addEventListener('click', handleSkipLinkClick);
      });

      // Cleanup
      return () => {
        try {
          skipLinks.forEach(link => {
            link.removeEventListener('click', handleSkipLinkClick);
            // Clear any pending timeouts
            const timeoutId = (link as any).__nhsSkipLinkTimeout;
            if (timeoutId && window.clearTimeout) {
              window.clearTimeout(timeoutId);
            }
          });
        } catch (error) {
          // Silently handle cleanup errors in SSR environments
          console.warn('SkipLink cleanup error:', error);
        }
      };
    } catch (error) {
      // Silently handle initialization errors in SSR environments
      console.warn('SkipLink initialization error:', error);
      return () => {}; // Return empty cleanup function
    }
  }, [isClient]); // Re-run when client detection changes

  const skipLinkClasses = classNames('nhsuk-skip-link', classes);

  return (
    <a
      className={skipLinkClasses}
      href={href}
      data-module="nhsuk-skip-link"
      data-enhanced={isClient ? 'true' : 'false'}
      {...attributes}
    >
      {text}
    </a>
  );
};
