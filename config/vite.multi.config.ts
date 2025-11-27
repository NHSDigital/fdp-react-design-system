import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

// Scan component SCSS to emit per-component CSS in a single build pass
// NOTE: Component‑level CSS multi-entry emission removed here because Rollup lib mode + multi-entry UMD is restrictive.
// We keep the dedicated component-css build for granular CSS. This config now focuses on JS multi-entry ESM outputs only.

const libEntries: Record<string, string> = {
  core: resolve(__dirname, '../src/core.ts'),
  ssr: resolve(__dirname, '../src/ssr.ts'),
  nextjs: resolve(__dirname, '../src/nextjs.ts')
};

// Plugin to ignore SCSS imports (we build CSS elsewhere to avoid duplication)
const ignoreScssPlugin = (): Plugin => ({
  name: 'nsv-ignore-scss',
  load(id) {
    if (id.endsWith('.scss')) return { code: '' };
  }
});

export default defineConfig({
  plugins: [ignoreScssPlugin(), react({ jsxRuntime: 'classic' })],
  build: {
    lib: {
      entry: { ...libEntries },
      name: 'NHSFDPDesignSystem',
      formats: ['es'],
      fileName: (_format, entryName) => {
        if (entryName === 'core') return 'src/core.js';
        if (entryName === 'ssr') return 'src/ssr.js';
        if (entryName === 'nextjs') return 'src/nextjs.js';
        return `${entryName}.js`;
      }
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        // Leave behaviours dynamic import unresolved during library build; it resolves in consumer apps
        '@nhsdigital/fdp-design-system/behaviours'
      ],
      output: { globals: { react: 'React', 'react-dom': 'ReactDOM' } }
    },
    sourcemap: true,
    copyPublicDir: false,
    outDir: resolve(__dirname, '../dist'),
    emptyOutDir: false
  }
});
