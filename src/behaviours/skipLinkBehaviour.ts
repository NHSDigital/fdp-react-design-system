/**
 * Skip link progressive enhancement behaviour.
 * Attaches a click handler to focus target content and provide temporary focus styles.
 * Safe to import in the browser; no SSR side effects.
 */
export function initSkipLinks(scope: ParentNode = document) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  const handleSkipLinkClick = (event: Event) => {
    const target = event.currentTarget as HTMLAnchorElement;
    const targetId = target.getAttribute('href');
    if (!targetId || !targetId.startsWith('#')) return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    // Ensure focusability
    const hadTabIndex = targetElement.hasAttribute('tabindex');
    if (!hadTabIndex) targetElement.setAttribute('tabindex', '-1');

    (targetElement as HTMLElement).focus();
    targetElement.classList.add('nhsuk-skip-link-focused-element');

    const timeoutId = window.setTimeout(() => {
      targetElement.classList.remove('nhsuk-skip-link-focused-element');
      if (!hadTabIndex && targetElement.getAttribute('tabindex') === '-1') {
        targetElement.removeAttribute('tabindex');
      }
    }, 3000);

  // @ts-ignore - attach for cleanup on the element instance
    (target as any).__nhsSkipLinkTimeout = timeoutId;
  };

  const links = scope.querySelectorAll('.nhsuk-skip-link');
  links.forEach((link) => {
    const el = link as HTMLElement & { __nhsSkipLinkHandler?: (e: Event) => void };
    // Avoid double-binding if init called multiple times
    if (!el.__nhsSkipLinkHandler) {
      el.addEventListener('click', handleSkipLinkClick);
      el.__nhsSkipLinkHandler = handleSkipLinkClick;
    }
    el.setAttribute('data-enhanced', 'true');
  });
}

export function detachSkipLinks(scope: ParentNode = document) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  const links = scope.querySelectorAll('.nhsuk-skip-link');
  links.forEach((link) => {
    const el = link as HTMLElement & {
      __nhsSkipLinkTimeout?: number;
      __nhsSkipLinkHandler?: (e: Event) => void;
    };
    const timeoutId = el.__nhsSkipLinkTimeout;
    if (timeoutId && window.clearTimeout) window.clearTimeout(timeoutId);
    if (el.__nhsSkipLinkHandler) {
      el.removeEventListener('click', el.__nhsSkipLinkHandler);
      delete el.__nhsSkipLinkHandler;
    }
    el.removeAttribute('data-enhanced');
  });
}
