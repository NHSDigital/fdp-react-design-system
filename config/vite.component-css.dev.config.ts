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

// Create entries for components that have SCSS files (including subdirectories)
const componentEntries: Record<string, string> = {};

// Recursive function to find SCSS files
function findScssFiles(dir: string, componentName: string, subPath: string = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    if (item.isDirectory()) {
      // Recursively search subdirectories
      findScssFiles(
        path.join(dir, item.name), 
        componentName, 
        subPath ? `${subPath}/${item.name}` : item.name
      );
    } else if (item.name.endsWith('.scss') && !item.name.startsWith('_')) {
      const baseName = item.name.replace('.scss', '');
      const entryKey = subPath 
        ? `components/${componentName}/${subPath}/${baseName}`
        : `components/${componentName}/${baseName}`;
      componentEntries[entryKey] = resolve(dir, item.name);
    }
  });
}

componentDirs.forEach(componentName => {
  const componentDir = path.join(componentsDir, componentName);
  findScssFiles(componentDir, componentName);
});

export default defineConfig({
  mode: 'development', // Force development mode for source maps
  css: {
    devSourcemap: true, // Enable source maps in development
  },
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
    sourcemap: 'inline', // Force inline source maps for development
    minify: false, // Don't minify to preserve source map accuracy
    outDir: resolve(__dirname, '../dist-dev'),
    emptyOutDir: true, // Clean the development dist directory
    cssCodeSplit: true,
  },
});
