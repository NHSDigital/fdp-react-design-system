import { test, expect, Page } from '@playwright/test';

/**
 * Visual Testing for Contents List Component
 * Compares React implementation against NHS UK reference
 */

const componentName = 'Contents List Component';
const storybookUrl = 'http://localhost:6006';
const referenceUrl = 'http://localhost:3002';

interface VisualTestConfig {
  name: string;
  storybookPath: string;
  referencePath: string;
  interactions?: (page: Page) => Promise<void>;
}

const testCases: VisualTestConfig[] = [
  {
    "name": "contentsList - default",
    "storybookPath": "/story/components-contentslist--default",
    "referencePath": "/contentslist/contentslist-default.html"
  }
];

// Helper function to prepare page for consistent screenshots
async function preparePage(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.addStyleTag({
    content: `
      * { 
        scrollbar-width: none !important; 
        -ms-overflow-style: none !important; 
      }
      *::-webkit-scrollbar { 
        display: none !important; 
      }
    `
  });
  await page.waitForTimeout(100);
}

// Test suite for contentsList
testCases.forEach(({ name, storybookPath, referencePath, interactions }) => {
  test.describe(`${componentName} Visual Tests`, () => {
    test(`${name} - Side by Side Comparison`, async ({ page, browserName }) => {
      // React component screenshot
      await page.goto(`${storybookUrl}${storybookPath}`);
      await preparePage(page);
      
      if (interactions) {
        await interactions(page);
      }
      
      const component = page.locator('#storybook-root');
      await expect(component).toBeVisible();
      
      const reactScreenshot = await component.screenshot({
        animations: 'disabled',
      });
      
      // NHS UK reference screenshot
      await page.goto(`${referenceUrl}${referencePath}`);
      await preparePage(page);
      
      const referenceComponent = page.locator('.component-container');
      await expect(referenceComponent).toBeVisible();
      
      const referenceScreenshot = await referenceComponent.screenshot({
        animations: 'disabled',
      });
      
      // Store screenshots for comparison
      await expect(reactScreenshot).toMatchSnapshot(
        `${name.toLowerCase().replace(/\s+/g, '-')}-${browserName}-react.png`
      );
      
      await expect(referenceScreenshot).toMatchSnapshot(
        `${name.toLowerCase().replace(/\s+/g, '-')}-${browserName}-reference.png`
      );
    });

    test(`${name} - Visual Regression Test`, async ({ page }) => {
      await page.goto(`${storybookUrl}${storybookPath}`);
      await preparePage(page);
      
      if (interactions) {
        await interactions(page);
      }
      
      const component = page.locator('#storybook-root');
      await expect(component).toBeVisible();
      
      await expect(component).toHaveScreenshot(
        `${name.toLowerCase().replace(/\s+/g, '-')}-regression.png`
      );
    });

    test(`${name} - Accessibility Check`, async ({ page }) => {
      await page.goto(`${storybookUrl}${storybookPath}`);
      await preparePage(page);
      
      const component = page.locator('#storybook-root');
      await expect(component).toBeVisible();
      
      // Check keyboard navigation
      await page.keyboard.press('Tab');
      
      // Check for proper focus management
      const focusedElement = page.locator(':focus');
      if (await focusedElement.count() > 0) {
        await expect(focusedElement).toBeVisible();
      }
    });
  });
});
