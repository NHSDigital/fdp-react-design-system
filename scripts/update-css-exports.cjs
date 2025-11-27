#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the current package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Find all CSS files in dist/components
const componentsDir = path.join(__dirname, '..', 'dist', 'components');

function findCssFiles(dir, basePath = '') {
  const files = [];
  
  if (!fs.existsSync(dir)) {
    console.log('Components directory not found. Please run npm run build:component-css first.');
    return files;
  }
  
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const relativePath = path.join(basePath, item);
    
    if (fs.statSync(fullPath).isDirectory()) {
      files.push(...findCssFiles(fullPath, relativePath));
    } else if (item.endsWith('.css')) {
      files.push(relativePath);
    }
  }
  
  return files;
}

// Get all CSS files
const cssFiles = findCssFiles(componentsDir);

// Generate exports for CSS files
const newExports = { ...packageJson.exports };
let addedCount = 0;

cssFiles.forEach(cssFile => {
  // Convert path to component name and export key
  // e.g., "Header/Header.css" -> "./components/Header/css"  
  // e.g., "SortableDataTable/AriaTabsDataGrid.css" -> "./components/SortableDataTable/AriaTabsDataGrid/css"
  
  const parts = cssFile.split(path.sep);
  const cssFileName = parts[parts.length - 1]; // e.g., "Header.css"
  const componentName = cssFileName.replace('.css', ''); // e.g., "Header"
  
  let exportKey;
  let exportPath = `./dist/components/${cssFile}`;
  
  if (parts.length === 2) {
    // Simple case: "Header/Header.css"
    const folder = parts[0];
    if (componentName === folder) {
      // Standard case: component name matches folder name
      exportKey = `./components/${folder}/css`;
    } else {
      // Special case: different filename (e.g., Header/Header2.css)
      exportKey = `./components/${folder}/${componentName}/css`;
    }
  } else {
    // Nested case: "SortableDataTable/AriaTabsDataGrid.css"
    const folders = parts.slice(0, -1);
    exportKey = `./components/${folders.join('/')}/${componentName}/css`;
  }
  
  // Add to exports if not already present
  if (!newExports[exportKey]) {
    newExports[exportKey] = exportPath;
    addedCount++;
  }
});

// Write updated package.json
packageJson.exports = newExports;

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + '\n');

console.log(`[update-css-exports] Found ${cssFiles.length} CSS files, added ${addedCount} new exports (${Object.keys(newExports).length} total)`);
