import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// Ignore SCSS during JS lib build (CSS is handled by existing CSS pipelines if/when needed)
const ignoreScssPlugin = (): Plugin => ({
  name: 'spc-ignore-scss',
  load(id) {
    if (id.endsWith('.scss')) return { code: '' };
  }
});

export default defineConfig({
  plugins: [
    ignoreScssPlugin(),
    react({ jsxRuntime: 'classic' }),
    dts({
      entryRoot: resolve(__dirname, '../packages/nhs-fdp-spc/src'),
      outDir: resolve(__dirname, '../packages/nhs-fdp-spc/dist'),
      tsconfigPath: resolve(__dirname, '../tsconfig.build.json'),
      copyDtsFiles: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src')
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, '../packages/nhs-fdp-spc/src/index.ts'),
        engine: resolve(__dirname, '../packages/nhs-fdp-spc/src/engine/index.ts'),
        icons: resolve(__dirname, '../packages/nhs-fdp-spc/src/icons/index.ts')
      },
      formats: ['es'],
      fileName: (_format, entryName) => {
        if (entryName === 'index') return 'index.esm.js';
        return `${entryName}/index.js`;
      }
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react/jsx-dev-runtime'
      ]
    },
    sourcemap: true,
    copyPublicDir: false,
    outDir: resolve(__dirname, '../packages/nhs-fdp-spc/dist'),
    emptyOutDir: true
  }
});
