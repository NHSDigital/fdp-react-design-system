import * as React from 'react';

export function useFocusNav(length: number) {
  const [index, setIndex] = React.useState(0);
  const onKey = React.useCallback((e: KeyboardEvent) => {
    if (!['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
    if (length === 0) return;
    e.preventDefault();
    setIndex(i => {
      if (e.key === 'ArrowLeft') return Math.max(0, i - 1);
      if (e.key === 'ArrowRight') return Math.min(length - 1, i + 1);
      if (e.key === 'Home') return 0;
      if (e.key === 'End') return length - 1;
      return i;
    });
  }, [length]);
  React.useEffect(() => {
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onKey]);
  return { index, setIndex };
}
