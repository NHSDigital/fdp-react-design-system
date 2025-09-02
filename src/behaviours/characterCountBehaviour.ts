// Behaviour layer for CharacterCount component (progressive enhancement)
// Mirrors logic from React version for static/Nunjucks HTML.

interface CharacterCountHandles { detach: () => void }
interface CharacterCountRoot extends HTMLElement { __nhsCharacterCount?: CharacterCountHandles }

function enhanceCharacterCount(root: CharacterCountRoot): CharacterCountHandles {
  const textarea = root.querySelector<HTMLTextAreaElement>('textarea');
  const message = root.querySelector<HTMLElement>('.nhsuk-character-count__message, .nhsuk-hint');
  if (!textarea || !message) return { detach: () => {} };

  const maxLength = Number(root.getAttribute('data-maxlength')) || undefined;
  const maxWords = Number(root.getAttribute('data-maxwords')) || undefined;
  const threshold = Number(root.getAttribute('data-threshold')) || 0;
  const limit = maxLength || maxWords || 0;

  const unit = maxWords ? 'word' : 'character';
  const unitPlural = maxWords ? 'words' : 'characters';

  function countValue(val: string): number {
    if (maxWords) {
      const t = val.trim();
      if (!t) return 0;
      return t.split(/\s+/).length;
    }
    return val.length;
  }

  function update() {
  const text = textarea!.value;
    const current = countValue(text);
    const remaining = limit - current;
    const thresholdCount = Math.floor(limit * (threshold / 100));
    const showCount = current >= thresholdCount || current > limit;
    const isOver = current > limit;
    let msg: string;
    if (!showCount) {
      msg = `You can enter up to ${limit} ${limit === 1 ? unit : unitPlural}`;
    } else if (isOver) {
      const over = Math.abs(remaining);
      msg = `You have ${over} ${over === 1 ? unit : unitPlural} too many`;
    } else {
      msg = `You have ${remaining} ${remaining === 1 ? unit : unitPlural} remaining`;
    }
  message!.textContent = msg;
  // Toggle error styling
  message!.classList.toggle('nhsuk-error-message', isOver);
  if (isOver) textarea!.setAttribute('aria-invalid', 'true'); else textarea!.removeAttribute('aria-invalid');
    // Dispatch event
    root.dispatchEvent(new CustomEvent('nhs:character-count:update', { bubbles: true, detail: { current, remaining, isOverLimit: isOver } }));
  }

  const handler = () => update();
  textarea!.addEventListener('input', handler);
  update();

  return { detach() { textarea!.removeEventListener('input', handler); } };
}

export function initCharacterCounts(scope: ParentNode = document) {
  const roots = Array.from(scope.querySelectorAll<CharacterCountRoot>('[data-module="nhsuk-character-count"]'));
  roots.forEach(r => { if (!r.__nhsCharacterCount) r.__nhsCharacterCount = enhanceCharacterCount(r); });
}

export function detachCharacterCounts(scope: ParentNode = document) {
  const roots = Array.from(scope.querySelectorAll<CharacterCountRoot>('[data-module="nhsuk-character-count"]'));
  roots.forEach(r => { r.__nhsCharacterCount?.detach(); delete r.__nhsCharacterCount; });
}

if (typeof window !== 'undefined') {
  // @ts-ignore
  if (!window.__nhsInitCharacterCounts) {
    // @ts-ignore
  window.__nhsInitCharacterCounts = initCharacterCounts;
  // @ts-ignore
  window.__nhsDetachCharacterCounts = detachCharacterCounts;
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => initCharacterCounts()); else initCharacterCounts();
  }
}
