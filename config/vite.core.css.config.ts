import { defineConfig } from 'vite';
import { resolve } from 'path';

// Build a lightweight core-only CSS bundle sourcing src/styles/core.scss
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, '../src/styles/core.scss'),
      formats: ['es'],
      fileName: () => 'nhs-fdp-design-system-core.css'
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'nhs-fdp-design-system-core.css';
          }
          return assetInfo.name || '[name]';
        }
      }
    },
    sourcemap: true,
    copyPublicDir: false,
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: false,
    cssCodeSplit: false,
    minify: false
  }
});
