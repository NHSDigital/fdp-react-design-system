import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    include: [
      'src/**/*.ssr.test.{ts,tsx}',
      'src/**/*.env-safe.test.{ts,tsx}',
      'tests/ssr-validation/**/*.test.{ts,tsx}'
    ],
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts', 'src/ssr-test-setup.ts'],
    globals: true,
  reporters: [ ['default', { summary: false }] ],
    // Additional configuration for SSR tests
    testTimeout: 30000,
    env: {
      NODE_ENV: 'test',
    },
    pool: 'forks', // Use separate processes for better isolation
    poolOptions: {
      forks: {
        singleFork: true, // Prevent concurrency issues
      },
    },
  },
});
