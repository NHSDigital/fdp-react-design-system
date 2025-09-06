import { describe, it, expect } from 'vitest';

describe('SPCChart Gradient Sequence Logic', () => {
  // Mock test data to verify the sequence logic
  const testSequenceLogic = (categories: string[], gradientSequences = true) => {
    if (!gradientSequences || !categories.length) return [];
    const result: { start: number; end: number; category: string }[] = [];
    let runStart = 0;
    
    // Process each potential run
    for (let i = 1; i <= categories.length; i++) {
      const changed = i === categories.length || (i < categories.length && categories[i] !== categories[runStart]);
      if (changed) {
        const cat = categories[runStart];
        const runEnd = i - 1;
        const runLen = runEnd - runStart + 1;
        
        // Validate indices are within bounds
        if (runStart >= 0 && runEnd < categories.length && runStart <= runEnd) {
          if (cat === 'common') {
            // Include all common runs (even single) to avoid gaps.
            result.push({ start: runStart, end: runEnd, category: 'common' });
          } else {
            // For coloured runs require length > 1 to show wash
            if (runLen > 1) {
              result.push({ start: runStart, end: runEnd, category: cat });
            }
          }
        }
        
        // Only update runStart if we're not at the end
        if (i < categories.length) {
          runStart = i;
        }
      }
    }
    return result;
  };

  it('should handle empty categories array', () => {
    const result = testSequenceLogic([]);
    expect(result).toEqual([]);
  });

  it('should handle single category', () => {
    const result = testSequenceLogic(['common']);
    expect(result).toEqual([{ start: 0, end: 0, category: 'common' }]);
  });

  it('should handle mixed categories correctly', () => {
    const categories = ['common', 'concern', 'concern', 'common', 'improvement', 'improvement', 'common'];
    const result = testSequenceLogic(categories);
    
    expect(result).toEqual([
      { start: 0, end: 0, category: 'common' },
      { start: 1, end: 2, category: 'concern' }, // Length > 1, included
      { start: 3, end: 3, category: 'common' },
      { start: 4, end: 5, category: 'improvement' }, // Length > 1, included
      { start: 6, end: 6, category: 'common' }
    ]);
  });

  it('should exclude single coloured points', () => {
    const categories = ['common', 'concern', 'common', 'improvement', 'common'];
    const result = testSequenceLogic(categories);
    
    expect(result).toEqual([
      { start: 0, end: 0, category: 'common' },
      // concern at index 1 excluded (length = 1)
      { start: 2, end: 2, category: 'common' },
      // improvement at index 3 excluded (length = 1)
      { start: 4, end: 4, category: 'common' }
    ]);
  });

  it('should handle edge case with all same category', () => {
    const categories = ['concern', 'concern', 'concern'];
    const result = testSequenceLogic(categories);
    
    expect(result).toEqual([
      { start: 0, end: 2, category: 'concern' }
    ]);
  });
});
