import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Build the BehavioursLoader React component
// This is separate from the vanilla behaviours bundle
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, '../src/behaviours/react.ts'),
      formats: ['es'],
      fileName: () => 'react.js',
    },
    outDir: 'dist/src/behaviours',
    emptyOutDir: false, // Don't delete existing files (types are already there)
    sourcemap: true,
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        preserveModules: false,
      },
    },
  },
});
