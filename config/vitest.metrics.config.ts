import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// Metrics-focused test config: runs the same component test set
// but enables reporter summary to "tell all metrics" across the suite.
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    include: ['src/**/*.test.{ts,tsx}', 'tests/macroParity/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    globals: true,
    reporters: [['default', { summary: true }]],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'text-summary'],
      thresholds: {
        lines: 60,
        statements: 60,
        functions: 55,
        branches: 45,
      },
    },
  },
});
