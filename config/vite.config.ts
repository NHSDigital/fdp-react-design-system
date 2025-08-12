/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    // dts({
    //   include: ['../src/**/*'],
    //   exclude: ['**/*.test.*', '**/*.stories.*', '**/test-setup.ts', '**/vitest-env.d.ts'],
    //   outDir: '../dist',
    //   tsconfigPath: resolve(__dirname, '../tsconfig.build.json'),
    //   rollupTypes: false,
    // }),
  ],
  css: {
    devSourcemap: true, // Enable CSS source maps in development
  },
  build: {
    lib: {
      entry: resolve(__dirname, '../src/index.ts'),
      name: 'NHSFDPDesignSystem',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        sourcemap: true, // Generate source maps for assets
      },
    },
    sourcemap: true,
    copyPublicDir: false,
    outDir: resolve(__dirname, '../dist'),
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['../src/test-setup.ts'],
    css: true,
    include: ['../src/**/*.test.{ts,tsx}'],
    typecheck: {
      tsconfig: './tsconfig.json',
      include: ['../src/**/*.test.{ts,tsx}']
    },
    exclude: ['**/*.stories.*', '../node_modules/**', '../dist/**'],
  },
});
