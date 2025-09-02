// Behaviour layer for Button component
// This file encapsulates stateful / interactive logic that can be reused across
// frameworks (React, Nunjucks-enhanced HTML with progressive enhancement, plain JS)
// without tying to a rendering library.

export interface ButtonBehaviourOptions {
  preventDoubleClick?: boolean;
  onClick?: (ev: MouseEvent) => void;
}

export interface ButtonBehaviourHandles {
  attach: (el: HTMLElement) => void;
  detach: () => void;
}

/**
 * Provides progressive enhancement behaviour for buttons / links that use
 * data-module="nhs-button". Mirrors logic in the React implementation so that
 * SSR + static HTML + Nunjucks macros remain consistent.
 */
export function createButtonBehaviour(options: ButtonBehaviourOptions = {}): ButtonBehaviourHandles {
  let el: HTMLElement | null = null;
  const { preventDoubleClick, onClick } = options;
  let processingTimeout: number | null = null;

  const handleClick = (e: MouseEvent) => {
    if (preventDoubleClick) {
      if (el?.getAttribute('data-processing') === 'true') {
        e.preventDefault();
        return;
      }
      el?.setAttribute('data-processing', 'true');
      processingTimeout = window.setTimeout(() => {
        el?.removeAttribute('data-processing');
        processingTimeout = null;
      }, 1000);
    }
    onClick?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!el) return;
    // Space triggers click when role=button on anchor
    if (e.key === ' ' && el.tagName === 'A') {
      e.preventDefault();
      el.click();
    }
  };

  return {
    attach(element: HTMLElement) {
      el = element;
      el.addEventListener('click', handleClick);
      el.addEventListener('keydown', handleKeyDown);
    },
    detach() {
      if (!el) return;
      el.removeEventListener('click', handleClick);
      el.removeEventListener('keydown', handleKeyDown);
      if (processingTimeout) window.clearTimeout(processingTimeout);
      el = null;
    }
  };
}

// Auto-init pattern (optional, guarded for multiple executions)
export function initButtons(scope: ParentNode = document) {
  const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-module="nhs-button"][data-prevent-double-click]'));
  nodes.forEach(node => {
    // Extend node with opaque symbol property for idempotence
    interface BehaviourNode extends HTMLElement { __nhsButtonBehaviour?: ButtonBehaviourHandles }
    const n = node as BehaviourNode;
    if (!n.__nhsButtonBehaviour) {
      const behaviour = createButtonBehaviour({ preventDoubleClick: true });
      behaviour.attach(n);
      n.__nhsButtonBehaviour = behaviour;
    }
  });
}

export function detachButtons(scope: ParentNode = document) {
  const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-module="nhs-button"][data-prevent-double-click]'));
  nodes.forEach(node => {
    interface BehaviourNode extends HTMLElement { __nhsButtonBehaviour?: ButtonBehaviourHandles }
    const n = node as BehaviourNode;
    if (n.__nhsButtonBehaviour) { n.__nhsButtonBehaviour.detach(); delete n.__nhsButtonBehaviour; }
  });
}

// Provide a global init hook when running in browser environment
if (typeof window !== 'undefined') {
  // @ts-ignore
  if (!window.__nhsInitButtons) {
    // @ts-ignore
  window.__nhsInitButtons = initButtons;
  // @ts-ignore
  window.__nhsDetachButtons = detachButtons;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => initButtons());
    } else {
      initButtons();
    }
  }
}
