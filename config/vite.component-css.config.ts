/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

// Find all component directories
const componentsDir = resolve(__dirname, '../src/components');
const componentDirs = fs.readdirSync(componentsDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

// Create entries for components that have SCSS files
const componentEntries: Record<string, string> = {};

componentDirs.forEach(componentName => {
  const componentDir = path.join(componentsDir, componentName);
  const scssFiles = fs.readdirSync(componentDir)
    .filter(file => file.endsWith('.scss') && !file.startsWith('_'));
  
  scssFiles.forEach(file => {
    const baseName = file.replace('.scss', '');
    componentEntries[`components/${componentName}/${baseName}`] = 
      resolve(componentDir, file);
  });
});

export default defineConfig({
  build: {
    lib: {
      entry: componentEntries,
      formats: ['es'], // Only ES modules for CSS
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Ensure CSS files maintain their component structure
          const name = assetInfo.name;
          if (name && name.endsWith('.css')) {
            return '[name].css';
          }
          return name || 'asset';
        },
      },
    },
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: false, // Don't empty the dist dir (it contains other builds)
    cssCodeSplit: true,
  },
});
