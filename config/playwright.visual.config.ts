import { defineConfig, devices } from '@playwright/test';

/**
 * Visual Testing Configuration for NHS FDP Design System
 * Compares React components against NHS UK reference implementations
 */
export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: process.env.CI ? 60 * 1000 : 30 * 1000, // Longer timeout per test in CI
  globalTimeout: process.env.CI ? 20 * 60 * 1000 : 10 * 60 * 1000, // 20 min in CI, 10 min locally
  reporter: [
    ['html', { outputFolder: 'tests/visual/reports/html' }],
    ['json', { outputFile: 'tests/visual/reports/results.json' }],
    ['github']
  ],
  use: {
    baseURL: 'http://localhost:6006', // Storybook URL
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  
  projects: [
    // Desktop Chrome - NHS Desktop breakpoint (1280px+)
    {
      name: 'Desktop Chrome',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
    },
    
    // Desktop Firefox - NHS Desktop breakpoint 
    {
      name: 'Desktop Firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 }
      },
    },

    // Tablet - NHS Tablet breakpoint (768px+)
    {
      name: 'Tablet',
      use: { 
        ...devices['iPad Pro'],
        viewport: { width: 768, height: 1024 }
      },
    },

    // Mobile - NHS Mobile breakpoint (up to 767px)
    {
      name: 'Mobile',
      use: { 
        ...devices['iPhone 12'],
        viewport: { width: 375, height: 667 }
      },
    },

    // Large Desktop - For comprehensive coverage
    {
      name: 'Large Desktop',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 }
      },
    },
  ],

  webServer: [
    // Start Storybook for React components
    {
      command: process.env.CI 
        ? 'npx http-server storybook-static -p 6006 --cors'
        : 'npm run storybook',
      url: 'http://localhost:6006',
      reuseExistingServer: !process.env.CI,
      timeout: process.env.CI ? 60 * 1000 : 180 * 1000, // Longer timeout for dev, shorter for CI
    },
    // Start static server for NHS UK reference components
    {
      command: 'npx http-server tests/visual/reference -p 3002 --cors',
      url: 'http://localhost:3002',
      reuseExistingServer: !process.env.CI,
      timeout: 60 * 1000,
    }
  ],

  expect: {
    // Visual comparison settings
    toHaveScreenshot: {
      threshold: 0.2,
      animations: 'disabled',
    },
    toMatchSnapshot: {
      threshold: 0.2,
      maxDiffPixels: 100,
    }
  },
});
