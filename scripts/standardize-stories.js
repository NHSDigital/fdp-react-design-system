#!/usr/bin/env node

/**
 * Script to standardize Storybook story titles and generate visual tests
 */

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all story files
const storyFiles = glob.sync('src/components/**/*.stories.tsx');

console.log(`🔍 Found ${storyFiles.length} story files`);

// Standardize story titles to 'NHS/Components/ComponentName'
storyFiles.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Extract component name from file path
  const componentName = path.basename(path.dirname(filePath));
  const standardTitle = `NHS/Components/${componentName}`;
  
  // Replace title with standardized version
  const updatedContent = content.replace(
    /title:\s*['"`]([^'"`]+)['"`]/,
    `title: '${standardTitle}'`
  );
  
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`✅ Updated ${filePath} -> ${standardTitle}`);
  }
});

console.log(`\n🎉 Story titles standardized!`);

// Generate list of all components for visual test generation
const components = storyFiles.map(filePath => {
  const componentName = path.basename(path.dirname(filePath));
  return {
    name: componentName,
    storyPath: `nhs-components-${componentName.toLowerCase()}--default`,
    kebabCase: componentName.toLowerCase(),
    pascalCase: componentName
  };
});

// Write component manifest
fs.writeFileSync(
  'scripts/component-manifest.json',
  JSON.stringify(components, null, 2)
);

console.log(`📋 Generated component manifest with ${components.length} components`);
