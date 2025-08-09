#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// List of test files to convert (excluding HeaderSSR which is already converted)
const testFiles = glob.sync('src/**/*.test.tsx', { 
  ignore: ['src/components/Header/HeaderSSR.test.tsx', 'src/components/Header/HeaderSSR.server.test.tsx'] 
});

console.log(`Found ${testFiles.length} test files to convert`);

function convertTestFile(filePath) {
  console.log(`Converting: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace imports
  content = content.replace(
    /import\s*{\s*render,?\s*screen,?\s*fireEvent,?\s*waitFor?\s*}\s*from\s*'@testing-library\/react';?/g,
    "import { render, fireEvent } from '../../test-utils/ServerRenderer';"
  );
  
  content = content.replace(
    /import\s*{\s*render,?\s*screen?\s*}\s*from\s*'@testing-library\/react';?/g,
    "import { render } from '../../test-utils/ServerRenderer';"
  );
  
  content = content.replace(
    /import\s*{\s*render\s*}\s*from\s*'@testing-library\/react';?/g,
    "import { render } from '../../test-utils/ServerRenderer';"
  );

  // Replace screen.getBy* calls with destructured render
  content = content.replace(/render\(([^)]+)\);?\s*\n\s*(?:const\s+\w+\s*=\s*)?screen\.getBy/g, 
    (match, renderArg) => {
      return `const { getByText, getByRole, getByLabelText, getByPlaceholderText, getByTestId, getByDisplayValue, queryByText, queryByRole } = render(${renderArg});\n    const result = getBy`;
    }
  );
  
  // Replace standalone screen calls
  content = content.replace(/screen\.getByText/g, 'getByText');
  content = content.replace(/screen\.getByRole/g, 'getByRole');
  content = content.replace(/screen\.getByLabelText/g, 'getByLabelText');
  content = content.replace(/screen\.getByPlaceholderText/g, 'getByPlaceholderText');
  content = content.replace(/screen\.getByTestId/g, 'getByTestId');
  content = content.replace(/screen\.getByDisplayValue/g, 'getByDisplayValue');
  content = content.replace(/screen\.queryByText/g, 'queryByText');
  content = content.replace(/screen\.queryByRole/g, 'queryByRole');
  
  // Replace expect matchers
  content = content.replace(/\.toBeInTheDocument\(\)/g, '.toBeTruthy()');
  content = content.replace(/\.not\.toBeInTheDocument\(\)/g, '.toBeFalsy()');
  content = content.replace(/\.toHaveClass\(/g, '.className.toContain(');
  content = content.replace(/\.toHaveAttribute\(/g, '.getAttribute(');
  content = content.replace(/\.not\.toHaveAttribute\(/g, '.getAttribute(');
  
  // Fix basic structure issues
  content = content.replace(/expect\(([^)]+)\)\.className\.toContain\(/g, 'expect($1?.className).toContain(');
  content = content.replace(/expect\(([^)]+)\)\.getAttribute\(/g, 'expect($1?.getAttribute(');
  
  fs.writeFileSync(filePath, content);
  console.log(`✅ Converted: ${filePath}`);
}

// Convert all test files
testFiles.forEach(convertTestFile);

console.log('🎉 Conversion complete! You may need to manually adjust some specific test cases.');
