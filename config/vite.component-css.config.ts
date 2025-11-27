/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';
// Use central alias map so we can skip generating duplicate CSS bundles for alias components
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cssAliases: Record<string, string> = require('../scripts/css-aliases.cjs');
const aliasComponentNames = new Set(Object.keys(cssAliases));

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
      // Skip docs-only stylesheets to avoid emitting duplicate component CSS bundles
      // e.g. files named like Component.docs.scss should not be shipped as component CSS
      if (item.name.includes('.docs.')) {
        return;
      }
      // Skip SSR-only stylesheets; these are aggregated via the component index.scss
      // and should not be emitted as a separate CSS bundle (prevents Header2/Header.ssr duplicates)
      if (item.name.includes('.ssr.')) {
        return;
      }
      // Skip alias components – they intentionally re-use provider CSS via exports
      if (aliasComponentNames.has(componentName)) {
        return; // do not create an entry for this alias's SCSS
      }
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
    sourcemap: true, // Enable source maps for debugging
    minify: false, // Don't minify to preserve source map accuracy
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: false, // Don't empty the dist dir (it contains other builds)
    cssCodeSplit: true,
  },
});
