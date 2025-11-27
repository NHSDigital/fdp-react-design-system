/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react({
      // Explicit JSX runtime configuration for React 19 compatibility
      jsxRuntime: 'automatic',
      // Use production JSX runtime to avoid dev-specific internals
      jsxImportSource: 'react',
    })
  ],
  define: {
    // Define React internals for SSR compatibility
    '__DEV__': false,
    'process.env.NODE_ENV': '"production"',
  },
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
        assetFileNames: 'nhs-fdp-design-system-ssr.css', // Different CSS filename to avoid conflict
      },
    },
    sourcemap: true,
    copyPublicDir: false,
    emptyOutDir: false, // Don't clean the dist directory
    outDir: resolve(__dirname, '../dist'),
  },
});
