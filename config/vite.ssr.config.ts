/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, '../src/ssr.ts'),
      formats: ['es'],
      fileName: () => 'src/ssr.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'classnames'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          classnames: 'classNames',
        },
      },
    },
    sourcemap: true,
    copyPublicDir: false,
    emptyOutDir: false, // Don't clean the dist directory
    outDir: resolve(__dirname, '../dist'),
  },
});
