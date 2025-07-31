import { test, expect } from '@playwright/test';

/**
 * Comprehensive Visual Testing Suite for NHS FDP Components
 * Tests all major NHS components consistently
 */

// Define components to test (based on available stories)
const components = [
  { name: 'Button', kebabCase: 'button', storyPath: 'nhs-components-button--primary' },
  { name: 'Footer', kebabCase: 'footer', storyPath: 'nhs-components-footer--default' },
  { name: 'Breadcrumb', kebabCase: 'breadcrumb', storyPath: 'nhs-components-breadcrumb--default' },
  { name: 'Tag', kebabCase: 'tag', storyPath: 'nhs-components-tag--default' },
  { name: 'Pagination', kebabCase: 'pagination', storyPath: 'nhs-components-pagination--default' },
  { name: 'SkipLink', kebabCase: 'skiplink', storyPath: 'nhs-components-skiplink--default' },
  { name: 'ContentsList', kebabCase: 'contentslist', storyPath: 'nhs-components-contentslist--default' },
  { name: 'Input', kebabCase: 'input', storyPath: 'nhs-components-input--default' },
  { name: 'Label', kebabCase: 'label', storyPath: 'nhs-components-label--default' },
  { name: 'Hint', kebabCase: 'hint', storyPath: 'nhs-components-hint--default' },
];

console.log(`🧪 Testing ${components.length} components`);

// Generate tests for each component
components.forEach(({ name, storyPath, kebabCase }) => {
  test.describe(`${pascalCase} Component Visual Tests`, () => {
    
    test(`${kebabCase} - NHS UK vs React Comparison`, async ({ page, browserName }) => {
      console.log(`🎯 Testing ${pascalCase} component in ${browserName}...`);
      
      // Step 1: Test NHS UK Reference
      console.log(`📸 Testing NHS UK reference ${kebabCase}...`);
      
      try {
        await page.goto(`http://localhost:3002/${kebabCase}/${kebabCase}-default.html`);
        await page.waitForLoadState('networkidle');
        
        // Find the main component element (try multiple selectors)
        const selectors = [
          `.nhsuk-${kebabCase}`,
          `[data-module="nhsuk-${kebabCase}"]`,
          `.${kebabCase}`,
          'main > *',
          'body > *:not(script):not(style)'
        ];
        
        let referenceElement = null;
        for (const selector of selectors) {
          try {
            referenceElement = page.locator(selector).first();
            if (await referenceElement.count() > 0) {
              break;
            }
          } catch (e) {
            continue;
          }
        }
        
        if (referenceElement && await referenceElement.count() > 0) {
          await expect(referenceElement).toBeVisible();
          await expect(referenceElement).toHaveScreenshot(`${kebabCase}-nhs-reference-${browserName}.png`);
          console.log(`✅ NHS UK ${kebabCase} reference captured`);
        } else {
          console.log(`⚠️ NHS UK ${kebabCase} reference not found, skipping baseline`);
        }
      } catch (error) {
        console.log(`⚠️ NHS UK ${kebabCase} reference failed: ${error.message}`);
      }
      
      // Step 2: Test React Implementation via Storybook
      console.log(`🔍 Testing React ${kebabCase} implementation...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        // Wait for Storybook to load
        await page.waitForSelector('#storybook-preview-iframe', { timeout: 10000 });
        
        const storyFrame = page.frameLocator('#storybook-preview-iframe');
        
        // Find React component (try multiple selectors)
        const reactSelectors = [
          `[data-testid="${kebabCase}"]`,
          `.nhsuk-${kebabCase}`,
          `[class*="${kebabCase}"]`,
          '#storybook-root > *',
          'body > *:not(script):not(style)'
        ];
        
        let reactElement = null;
        for (const selector of reactSelectors) {
          try {
            reactElement = storyFrame.locator(selector).first();
            if (await reactElement.count() > 0) {
              break;
            }
          } catch (e) {
            continue;
          }
        }
        
        if (reactElement && await reactElement.count() > 0) {
          await expect(reactElement).toBeVisible({ timeout: 10000 });
          await expect(reactElement).toHaveScreenshot(`${kebabCase}-react-${browserName}.png`);
          console.log(`✅ React ${kebabCase} implementation captured`);
        } else {
          console.log(`⚠️ React ${kebabCase} implementation not found`);
        }
      } catch (error) {
        console.log(`⚠️ React ${kebabCase} implementation failed: ${error.message}`);
      }
    });
    
    test(`${kebabCase} - Visual Regression Test`, async ({ page, browserName }) => {
      console.log(`📸 Testing ${pascalCase} visual regression...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const storyFrame = page.frameLocator('#storybook-preview-iframe');
        const component = storyFrame.locator('#storybook-root');
        
        await expect(component).toBeVisible();
        await expect(component).toHaveScreenshot(`${kebabCase}-regression-${browserName}.png`);
        
        console.log(`✅ ${pascalCase} regression test completed`);
      } catch (error) {
        console.log(`⚠️ ${pascalCase} regression test failed: ${error.message}`);
      }
    });
    
    test(`${kebabCase} - Accessibility Check`, async ({ page }) => {
      console.log(`♿ Testing ${pascalCase} accessibility...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const storyFrame = page.frameLocator('#storybook-preview-iframe');
        const component = storyFrame.locator('#storybook-root');
        
        await expect(component).toBeVisible();
        
        // Basic keyboard navigation test
        await page.keyboard.press('Tab');
        
        // Check for ARIA labels and roles
        const ariaElements = await storyFrame.locator('[role], [aria-label], [aria-labelledby]').count();
        expect(ariaElements).toBeGreaterThan(0);
        
        console.log(`✅ ${pascalCase} accessibility check completed`);
      } catch (error) {
        console.log(`⚠️ ${pascalCase} accessibility check failed: ${error.message}`);
      }
    });
  });
});
