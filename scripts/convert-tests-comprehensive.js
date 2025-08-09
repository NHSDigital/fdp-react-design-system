#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function convertTestFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    console.log(`Converting: ${filePath}`);
    
    // Step 1: Fix import to use ServerRenderer
    content = content.replace(
      /import.*@testing-library\/react.*/g,
      "import { render } from '../../test-utils/ServerRenderer';"
    );
    
    // Step 2: Remove screen import completely 
    content = content.replace(/import.*screen.*from.*@testing-library\/react.*;?\n?/g, '');
    
    // Step 3: Convert destructured render calls to use ServerRenderer pattern
    // Replace render() calls that don't destructure
    content = content.replace(/const\s+(\w+)\s*=\s*render\(/g, 'const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole, container } = render(');
    
    // Fix existing destructuring to include container
    content = content.replace(
      /const\s*\{\s*([^}]+)\s*\}\s*=\s*render\(/g,
      (match, destructured) => {
        // Clean up existing destructuring and ensure we have all needed methods
        const methods = new Set(['getByText', 'getByRole', 'getByLabelText', 'getByPlaceholderText', 'getByTestId', 'getByDisplayValue', 'queryByText', 'queryByRole', 'container']);
        const existing = destructured.split(',').map(s => s.trim()).filter(s => s);
        existing.forEach(method => methods.add(method));
        return `const { ${Array.from(methods).join(', ')} } = render(`;
      }
    );
    
    // Step 4: Convert screen.* calls to direct calls
    content = content.replace(/screen\.(getByText|getByRole|getByLabelText|getByPlaceholderText|getByTestId|getByDisplayValue|queryByText|queryByRole)/g, '$1');
    
    // Step 5: Fix standalone getByText/etc calls that need to be extracted from render
    // Look for patterns where getByText etc are used without destructuring from render
    const methodPattern = /\b(getByText|getByRole|getByLabelText|getByPlaceholderText|getByTestId|getByDisplayValue|queryByText|queryByRole)\(/g;
    
    // Step 6: Handle container queries - convert container queries to use the container from destructuring
    // Fix .querySelector usage
    content = content.replace(/container\.querySelector\('([^']+)'\)/g, "container.querySelector('$1')");
    
    // Step 7: Fix variable declarations that used to come from destructuring but now don't exist
    // Find lines that reference 'hint' variable that wasn't properly destructured
    content = content.replace(/expect\(hint\?\./g, 'expect(getByText(/** hint text **/)?.'); // This will need manual fixing
    
    // Step 8: Fix specific syntax errors
    content = content.replace(/expect\(([^)]+)\?\.(getAttribute\([^)]+\))\?\.(toBe\([^)]+\));/g, 
      'expect($1?.$2).$3;');
    
    // Step 9: Fix malformed container queries
    content = content.replace(/container\.querySelector\(`\$\{id\}\`\)\('([^']+)'\)/g, "container.querySelector('#$1')");
    content = content.replace(/\.getAttribute\('id'\)\?\.(toBe\([^)]+\));/g, ".getAttribute('id')).$1;");
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Converted: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
  }
}

// List of files to convert
const filesToConvert = [
  'src/components/Hint/Hint.test.tsx',
  'src/components/Input/Input.test.tsx', 
  'src/components/InsetText/InsetText.test.tsx',
  'src/components/Heading/Heading.test.tsx',
  'src/components/Textarea/Textarea.test.tsx'
];

console.log('🔄 Converting test files to use ServerRenderer...\n');

filesToConvert.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    convertTestFile(fullPath);
  } else {
    console.log(`⚠️ File not found: ${fullPath}`);
  }
});

console.log('\n✅ All test files converted!');
