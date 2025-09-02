// Behaviour layer for range input variant (progressive enhancement)
// Keeps displayed current value (and data attribute) in sync as the user drags.

interface RangeBehaviourHandles { detach: () => void }
interface RangeInput extends HTMLInputElement { __nhsRangeBehaviour?: RangeBehaviourHandles }

function enhanceRangeInput(input: RangeInput): RangeBehaviourHandles {
  const wrapper = input.closest('.nhsuk-input-range-wrapper');
  const currentValueEl = wrapper?.querySelector<HTMLElement>('.nhsuk-input-range-current-value strong');

  const update = () => {
    const val = input.value;
    input.setAttribute('data-current-value', val);
    if (currentValueEl) currentValueEl.textContent = val;
  };

  const listener = () => { update(); input.dispatchEvent(new CustomEvent('nhs:range:update', { bubbles: true })); };
  input.addEventListener('input', listener);
  // Initialize
  update();

  return { detach() { input.removeEventListener('input', listener); } };
}

export function initRanges(scope: ParentNode = document) {
  const inputs = Array.from(scope.querySelectorAll<RangeInput>('input.nhsuk-input--range[data-current-value]'));
  inputs.forEach(inp => {
    if (!inp.__nhsRangeBehaviour) {
      inp.__nhsRangeBehaviour = enhanceRangeInput(inp);
    }
  });
}

export function detachRanges(scope: ParentNode = document) {
  const inputs = Array.from(scope.querySelectorAll<RangeInput>('input.nhsuk-input--range[data-current-value]'));
  inputs.forEach(inp => {
    inp.__nhsRangeBehaviour?.detach();
    delete inp.__nhsRangeBehaviour;
  });
}

if (typeof window !== 'undefined') {
  // @ts-ignore
  if (!window.__nhsInitRanges) {
    // @ts-ignore
  window.__nhsInitRanges = initRanges;
  // @ts-ignore
  window.__nhsDetachRanges = detachRanges;
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => initRanges());
    } else {
      initRanges();
    }
  }
}
