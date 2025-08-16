import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    globals: true,
  // Replace deprecated 'basic' reporter usage with default reporter summary disabled
  reporters: [ ['default', { summary: false }] ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      thresholds: {
        lines: 60,
        statements: 60,
        functions: 55,
        branches: 45,
      }
    }
  },
});
