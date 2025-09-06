// Simple test to verify gradient sequence logic
import React from 'react';

// Mock test data to reproduce gradient sequence issues
const testCategories = [
  'common', 'concern', 'common', 'improvement', 'improvement', 'common', 'concern', 'concern', 'concern', 'common'
];

// Current logic (copied from the component)
function getCurrentSequenceLogic(categories, gradientSequences = true) {
  if (!gradientSequences || !categories.length) return [];
  const result = [];
  let runStart = 0;
  
  for (let i = 1; i <= categories.length; i++) {
    const changed = i === categories.length || categories[i] !== categories[runStart];
    if (changed) {
      const cat = categories[runStart];
      const runEnd = i - 1;
      const runLen = runEnd - runStart + 1;
      if (cat === 'common') {
        // Include all common runs (even single) to avoid gaps.
        result.push({ start: runStart, end: runEnd, category: 'common' });
      } else {
        // For coloured runs require length > 1 to show wash (skip isolated coloured point already absorbed earlier if flanked by common)
        if (runLen > 1) result.push({ start: runStart, end: runEnd, category: cat });
      }
      runStart = i;
    }
  }
  return result;
}

// Test the current logic
console.log('Test categories:', testCategories);
console.log('Current sequences:', getCurrentSequenceLogic(testCategories));

// Issue analysis:
// 1. The loop goes to i <= categories.length, which means runStart can be set to categories.length
// 2. This could cause issues when the final iteration sets runStart = i where i = categories.length
// 3. Single coloured points are being excluded, which might not be the intended behavior in all cases

export {};
