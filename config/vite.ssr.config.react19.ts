/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      // Explicit JSX runtime configuration for React 19 compatibility
      jsxRuntime: 'automatic',
      jsxImportSource: 'react',
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, '../src/ssr.ts'),
      formats: ['es'],
      fileName: () => 'src/ssr.js',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'classnames', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          classnames: 'classNames',
          'react/jsx-runtime': 'React.jsxRuntime',
        },
      },
    },
    sourcemap: true,
    copyPublicDir: false,
    emptyOutDir: false,
    outDir: resolve(__dirname, '../dist'),
  },
});
