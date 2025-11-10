import { defineConfig } from 'vite';
import { resolve } from 'path';

// Build a single CSS bundle for SPC package by aggregating root SPC styles
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, '../packages/nhs-fdp-spc/src/styles/spc.scss'),
      formats: ['es'],
      fileName: () => 'spc'
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'spc.css';
          }
          return assetInfo.name || '[name]';
        }
      }
    },
    sourcemap: true,
    copyPublicDir: false,
    outDir: resolve(__dirname, '../packages/nhs-fdp-spc/dist'),
    emptyOutDir: false,
    cssCodeSplit: false,
    minify: false
  }
});
