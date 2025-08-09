#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the specific syntax error: expect(...).attr('id')?.toBe('value'); -> expect(...).attr('id')).toBe('value');
    content = content.replace(/expect\(([^)]+)\?\.(getAttribute\([^)]+\))\?\.(toBe\([^)]+\));/g, 
      'expect($1?.$2).$3;');
    
    // Fix other similar patterns
    content = content.replace(/expect\(([^)]+)\)\.(getAttribute\([^)]+\))\?\.(toBe\([^)]+\));/g, 
      'expect($1.$2).$3;');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed syntax errors in: ${filePath}`);
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
}

// List of files to fix
const filesToFix = [
  'src/components/Hint/Hint.test.tsx',
  'src/components/Input/Input.test.tsx',
  'src/components/InsetText/InsetText.test.tsx',
  'src/components/Heading/Heading.test.tsx',
  'src/components/Textarea/Textarea.test.tsx'
];

console.log('🔧 Fixing syntax errors in converted test files...\n');

filesToFix.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixSyntaxErrors(fullPath);
  } else {
    console.log(`⚠️ File not found: ${fullPath}`);
  }
});

console.log('\n✅ Syntax error fixes complete!');
