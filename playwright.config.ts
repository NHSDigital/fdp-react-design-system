import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/runtime',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4100',
    trace: 'on-first-retry'
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  // We won't start servers automatically; tests will launch processes.
});
