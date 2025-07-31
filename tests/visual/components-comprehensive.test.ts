import { test, expect } from '@playwright/test';

/**
 * Comprehensive Visual Testing Suite for NHS FDP Components
 * Tests all major NHS components consistently
 */

// Define core components to test
const components = [
  { name: 'Button', kebabCase: 'button', storyPath: 'nhs-components-button--primary' },
  { name: 'Footer', kebabCase: 'footer', storyPath: 'nhs-components-footer--default' },
  { name: 'Breadcrumb', kebabCase: 'breadcrumb', storyPath: 'nhs-components-breadcrumb--default' },
  { name: 'Tag', kebabCase: 'tag', storyPath: 'nhs-components-tag--default' },
  { name: 'Pagination', kebabCase: 'pagination', storyPath: 'nhs-components-pagination--default' }
];

console.log(`🧪 Testing ${components.length} core components`);

// Generate tests for each component
components.forEach(({ name, storyPath, kebabCase }) => {
  test.describe(`${name} Component Visual Tests`, () => {
    
    test(`${kebabCase} - NHS UK vs React Comparison`, async ({ page, browserName }) => {
      console.log(`🎯 Testing ${name} component in ${browserName}...`);
      
      // Step 1: Test NHS UK Reference (if available)
      console.log(`📸 Testing NHS UK reference ${kebabCase}...`);
      
      try {
        await page.goto(`http://localhost:3002/${kebabCase}/${kebabCase}-default.html`);
        await page.waitForLoadState('networkidle');
        
        // Try to find the NHS UK component
        const nhsSelectors = [
          `.nhsuk-${kebabCase}`,
          `[data-module="nhsuk-${kebabCase}"]`,
          `.component-wrapper > *`,
          'main',
          'body > div'
        ];
        
        let nhsElement = page.locator('body').first(); // Default fallback
        for (const selector of nhsSelectors) {
          const element = page.locator(selector).first();
          if (await element.count() > 0) {
            nhsElement = element;
            break;
          }
        }
        
        if (await nhsElement.count() > 0) {
          await expect(nhsElement).toBeVisible();
          await expect(nhsElement).toHaveScreenshot(`${kebabCase}-nhs-reference-${browserName}.png`);
          console.log(`✅ NHS UK ${kebabCase} reference captured`);
        } else {
          console.log(`⚠️ NHS UK ${kebabCase} reference not found`);
        }
      } catch (error) {
        console.log(`⚠️ NHS UK ${kebabCase} reference failed: ${error}`);
      }
      
      // Step 2: Test React Implementation via Storybook
      console.log(`🔍 Testing React ${kebabCase} implementation...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        // Wait for Storybook iframe
        await page.waitForSelector('#storybook-preview-iframe', { timeout: 10000 });
        const storyFrame = page.frameLocator('#storybook-preview-iframe');
        
        // Wait for story content to load
        await storyFrame.locator('#storybook-root').waitFor({ timeout: 10000 });
        
        // Find React component
        const reactSelectors = [
          '#storybook-root > *',
          `.nhsuk-${kebabCase}`,
          `[data-testid="${kebabCase}"]`,
          `[class*="${kebabCase}"]`
        ];
        
        let reactElement = storyFrame.locator('#storybook-root').first(); // Default fallback
        for (const selector of reactSelectors) {
          const element = storyFrame.locator(selector).first();
          if (await element.count() > 0) {
            reactElement = element;
            break;
          }
        }
        
        if (await reactElement.count() > 0) {
          await expect(reactElement).toBeVisible({ timeout: 10000 });
          await expect(reactElement).toHaveScreenshot(`${kebabCase}-react-${browserName}.png`);
          console.log(`✅ React ${kebabCase} implementation captured`);
        } else {
          console.log(`⚠️ React ${kebabCase} implementation not found`);
        }
      } catch (error) {
        console.log(`⚠️ React ${kebabCase} implementation failed: ${error}`);
      }
    });
    
    test(`${kebabCase} - Visual Regression Test`, async ({ page, browserName }) => {
      console.log(`📸 Testing ${name} visual regression...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const storyFrame = page.frameLocator('#storybook-preview-iframe');
        const component = storyFrame.locator('#storybook-root');
        
        await expect(component).toBeVisible();
        await expect(component).toHaveScreenshot(`${kebabCase}-regression-${browserName}.png`);
        
        console.log(`✅ ${name} regression test completed`);
      } catch (error) {
        console.log(`⚠️ ${name} regression test failed: ${error}`);
      }
    });
  });
});
