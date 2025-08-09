#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

/**
 * Smart test conversion that properly converts @testing-library/react tests
 * to use our React 19 compatible ServerRenderer
 */
function convertTestsCorrectly(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    console.log(`🔄 Converting: ${filePath}`);
    
    // Step 1: Fix imports
    content = content.replace(
      /import.*@testing-library\/react.*;?\n?/g,
      "import { render } from '../../test-utils/ServerRenderer';\n"
    );
    
    // Step 2: Remove screen import
    content = content.replace(/import.*screen.*from.*@testing-library\/react.*;?\n?/g, '');
    
    // Step 3: Convert screen.* calls to destructured calls  
    content = content.replace(/screen\.(getByText|getByRole|getByLabelText|getByPlaceholderText|getByTestId|getByDisplayValue|queryByText|queryByRole)/g, '$1');
    
    // Step 4: Find all test blocks and fix them
    content = content.replace(
      /(it\([^{]*\{[\s\S]*?)(\}\);)/g,
      function(testBlock) {
        // Check if the test already has a render destructuring
        if (testBlock.includes('const { ') && testBlock.includes(' } = render(')) {
          return testBlock; // Already properly structured
        }
        
        // Find render call
        const renderMatch = testBlock.match(/render\(<[^>]+[^)]*\)/g);
        if (!renderMatch) return testBlock;
        
        // Extract JSX from render call
        const jsxMatch = testBlock.match(/render\((<[^>]+[^)]*>)\)/);
        if (!jsxMatch) return testBlock;
        const jsx = jsxMatch[1];
        
        // Find which methods are used in the test
        const methodsUsed = new Set();
        const methods = ['getByText', 'getByRole', 'getByLabelText', 'getByPlaceholderText', 
                        'getByTestId', 'getByDisplayValue', 'queryByText', 'queryByRole', 'container'];
        
        methods.forEach(method => {
          if (testBlock.includes(method + '(') || testBlock.includes('.' + method + '(')) {
            methodsUsed.add(method);
          }
        });
        
        // Always include container for querySelector usage
        methodsUsed.add('container');
        
        // Replace the render call with proper destructuring
        const destructuring = `const { ${Array.from(methodsUsed).join(', ')} } = render(${jsx});`;
        
        // Replace the render line
        let newTestBlock = testBlock.replace(/render\(<[^>]+[^)]*\);?/, destructuring);
        
        // Fix any standalone method calls that need variables
        newTestBlock = newTestBlock.replace(/const\s+(\w+)\s*=\s*(getByText|getByRole|getByLabelText|getByPlaceholderText|getByTestId|getByDisplayValue|queryByText|queryByRole)\(/g, 
          'const $1 = $2(');
        
        return newTestBlock;
      }
    );
    
    // Step 5: Fix common pattern issues
    
    // Fix undefined hint variable usage
    content = content.replace(/expect\(hint\?\./g, 'expect(getByText(/**TODO: specify text**/)?.'); 
    
    // Fix container usage  
    content = content.replace(/const hint = container\.querySelector/g, 'const hint = container.querySelector');
    
    // Fix getAttribute chaining
    content = content.replace(/\.getAttribute\('([^']+)'\)\?\.(toBe\([^)]+\));/g, ".getAttribute('$1')).$2;");
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Converted: ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
  }
}

// Test with Hint file first
const filePath = 'src/components/Hint/Hint.test.tsx';
const fullPath = path.join(process.cwd(), filePath);

if (fs.existsSync(fullPath)) {
  convertTestsCorrectly(fullPath);
  console.log('\n✅ Conversion complete! Please check the result and fix any remaining TODO comments.');
} else {
  console.log(`⚠️ File not found: ${fullPath}`);
}
