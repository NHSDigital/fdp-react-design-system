/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, '../src/core.ts'),
      name: 'NHSFDPDesignSystemCore',
      formats: ['es', 'umd'],
      fileName: (format) => `src/core.${format === 'es' ? 'js' : format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'nhs-fdp-design-system-core.css', // Core CSS filename
      },
    },
    sourcemap: true,
    copyPublicDir: false,
    emptyOutDir: false,
    outDir: resolve(__dirname, '../dist'),
  },
});
