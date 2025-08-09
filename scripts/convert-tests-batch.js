#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function convertTestFile(filePath) {
  console.log(`Converting: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Step 1: Replace imports
  content = content.replace(
    /import\s*{\s*([^}]*)\s*}\s*from\s*'@testing-library\/react';?/g,
    (match, imports) => {
      // Extract what we need from the imports
      const hasRender = imports.includes('render');
      const hasFireEvent = imports.includes('fireEvent');
      
      let newImports = [];
      if (hasRender) newImports.push('render');
      if (hasFireEvent) newImports.push('fireEvent');
      
      return `import { ${newImports.join(', ')} } from '../../test-utils/ServerRenderer';`;
    }
  );
  
  // Step 2: Convert render calls to destructure methods
  content = content.replace(/(\s+)render\(([^)]+)\);(\s*)((?:const\s+\w+\s*=\s*)?screen\.)/g, 
    (match, indent, renderArg, spacing, screenCall) => {
      return `${indent}const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(${renderArg});${spacing}const result = `;
    }
  );
  
  // Step 3: Replace all screen. calls
  content = content.replace(/screen\.getByText/g, 'getByText');
  content = content.replace(/screen\.getByRole/g, 'getByRole');
  content = content.replace(/screen\.getByLabelText/g, 'getByLabelText');
  content = content.replace(/screen\.getByPlaceholderText/g, 'getByPlaceholderText');
  content = content.replace(/screen\.getByTestId/g, 'getByTestId');
  content = content.replace(/screen\.getByDisplayValue/g, 'getByDisplayValue');
  content = content.replace(/screen\.queryByText/g, 'queryByText');
  content = content.replace(/screen\.queryByRole/g, 'queryByRole');
  
  // Step 4: Replace testing library matchers with DOM-compatible ones
  content = content.replace(/\.toBeInTheDocument\(\)/g, '.toBeTruthy()');
  content = content.replace(/\.not\.toBeInTheDocument\(\)/g, '.toBeFalsy()');
  content = content.replace(/\.toHaveClass\(([^)]+)\)/g, '.className?.toContain($1)');
  content = content.replace(/\.toHaveAttribute\(([^,]+),\s*([^)]+)\)/g, '.getAttribute($1)?.toBe($2)');
  content = content.replace(/\.not\.toHaveAttribute\(([^)]+)\)/g, '.getAttribute($1)?.toBeNull()');
  content = content.replace(/\.toHaveTextContent\(([^)]+)\)/g, '.textContent?.toBe($1)');
  
  // Step 5: Fix expect statements to handle null checks
  content = content.replace(/expect\(([^)]+)\)\.className\?\.toContain/g, 'expect($1?.className).toContain');
  content = content.replace(/expect\(([^)]+)\)\.getAttribute/g, 'expect($1?.getAttribute');
  content = content.replace(/expect\(([^)]+)\)\.textContent\?\.toBe/g, 'expect($1?.textContent).toBe');
  
  // Step 6: Replace document. queries with container queries
  content = content.replace(/document\.querySelector/g, 'container.querySelector');
  content = content.replace(/document\.querySelectorAll/g, 'container.querySelectorAll');
  content = content.replace(/document\.getElementById/g, 'container.querySelector(`#${id}`)');
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Converted: ${filePath}`);
}

// Convert specific test files
const testFiles = [
  'src/components/Hint/Hint.test.tsx',
  'src/components/Input/Input.test.tsx',
  'src/components/InsetText/InsetText.test.tsx',
  'src/components/Heading/Heading.test.tsx',
  'src/components/Textarea/Textarea.test.tsx'
];

testFiles.forEach(file => {
  if (fs.existsSync(file)) {
    convertTestFile(file);
  }
});

console.log('🎉 Conversion complete!');
