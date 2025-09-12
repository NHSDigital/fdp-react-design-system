// Behaviour layer for Radios component (progressive enhancement)
// Mirrors keyboard navigation and conditional reveal logic from React implementation.

import { attachConditionalReveals } from './conditionalRevealUtil.js';

interface RadiosBehaviourHandles { detach: () => void }

interface BehaviourContainer extends HTMLElement { __nhsRadiosBehaviour?: RadiosBehaviourHandles }

function enhanceRadiosContainer(container: BehaviourContainer): RadiosBehaviourHandles {
  const inputs: HTMLInputElement[] = Array.from(container.querySelectorAll('input.nhsuk-radios__input[type="radio"][name]'));
  const name = inputs[0]?.name;
  if (!name) return { detach: () => {} };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!['ArrowDown','ArrowUp','ArrowLeft','ArrowRight'].includes(e.key)) return;
    const enabled = inputs.filter(i => !i.disabled);
    const current = enabled.indexOf(e.target as HTMLInputElement);
    if (current === -1) return;
    e.preventDefault();
    let nextIndex = current;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') nextIndex = (current + 1) % enabled.length;
    else nextIndex = (current - 1 + enabled.length) % enabled.length;
    const next = enabled[nextIndex];
    if (next && next !== e.target) {
      next.focus();
      if (!next.checked) {
        next.click();
      }
    }
  };

  const conditionalHandles = attachConditionalReveals({
    inputSelector: 'input.nhsuk-radios__input[type="radio"][name="' + name + '"]',
    hiddenClass: 'nhsuk-radios__conditional--hidden',
    container,
    eventName: 'nhs:radios:change',
    exclusive: true,
  });

  inputs.forEach(i => {
    i.addEventListener('keydown', handleKeyDown);
    // conditional change handling covered by shared utility
  });
  // Initial conditional state handled by utility

  return {
    detach() {
      inputs.forEach(i => {
        i.removeEventListener('keydown', handleKeyDown);
        // no direct change listener to remove (handled by utility)
      });
      conditionalHandles.detach();
    }
  };
}

export function initRadios(scope: ParentNode = document) {
  const containers = Array.from(scope.querySelectorAll<BehaviourContainer>('.nhsuk-radios'));
  containers.forEach(c => {
    if (!c.__nhsRadiosBehaviour) {
      c.__nhsRadiosBehaviour = enhanceRadiosContainer(c);
    }
  });
}

export function detachRadios(scope: ParentNode = document) {
  const containers = Array.from(scope.querySelectorAll<BehaviourContainer>('.nhsuk-radios'));
  containers.forEach(c => { c.__nhsRadiosBehaviour?.detach(); delete c.__nhsRadiosBehaviour; });
}

// Auto init on DOM ready
if (typeof window !== 'undefined') {
  // @ts-ignore
  if (!window.__nhsInitRadios) {
    // @ts-ignore
  window.__nhsInitRadios = initRadios;
  // @ts-ignore
  window.__nhsDetachRadios = detachRadios;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => initRadios());
    } else {
      initRadios();
    }
  }
}
