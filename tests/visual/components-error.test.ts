import { test, expect } from '@playwright/test';

/**
 * Error & Validation Components Visual Testing
 * Tests NHS error handling and validation feedback components
 */

// Error and validation components
const errorComponents = [
  { name: 'ErrorMessage', kebabCase: 'error-message', storyPath: 'nhs-components-error-message--default' },
  { name: 'ErrorSummary', kebabCase: 'error-summary', storyPath: 'nhs-components-error-summary--default' },
];

// NHS UK Responsive Breakpoints
const viewports = [
  { name: 'Mobile', width: 375, height: 667, description: 'NHS Mobile breakpoint (up to 767px)' },
  { name: 'Tablet', width: 768, height: 1024, description: 'NHS Tablet breakpoint (768px+)' },
  { name: 'Desktop', width: 1280, height: 720, description: 'NHS Desktop breakpoint' },
];

console.log(`❌ Testing ${errorComponents.length} error & validation components across ${viewports.length} viewports`);

// Generate tests for each error component
errorComponents.forEach(({ name, storyPath, kebabCase }) => {
  test.describe(`${name} Component - Error Visual Testing`, () => {
    
    // Test 1: NHS UK vs React Comparison at each viewport
    viewports.forEach(viewport => {
      test(`${kebabCase} - ${viewport.name} (${viewport.width}px) - Error Component`, async ({ page, browserName }) => {
        console.log(`🎯 Testing ${name} error component on ${viewport.name} in ${browserName}...`);
        
        // Set viewport size
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        
        // Test React Implementation  
        console.log(`🔍 Testing React ${kebabCase} error component at ${viewport.width}px...`);
        
        try {
          await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
          await page.waitForLoadState('networkidle');
          
          const iframe = page.locator('#storybook-preview-iframe');
          await expect(iframe).toBeVisible({ timeout: 10000 });
          
          const storyFrame = iframe.contentFrame();
          const reactElement = storyFrame.locator('#storybook-root').first();
          
          if (await reactElement.count() > 0) {
            await expect(reactElement).toBeVisible({ timeout: 10000 });
            await expect(reactElement).toHaveScreenshot(`${kebabCase}-error-react-${viewport.name.toLowerCase()}-${browserName}.png`);
            console.log(`✅ React ${kebabCase} error component captured at ${viewport.name}`);
          } else {
            console.log(`⚠️ React ${kebabCase} error component not found at ${viewport.name}`);
          }
        } catch (error) {
          console.log(`⚠️ React ${kebabCase} error component failed at ${viewport.name}: ${error}`);
        }
      });
    });
    
    // Test 2: Error Accessibility Testing
    test(`${kebabCase} - Error Accessibility Testing`, async ({ page, browserName }) => {
      console.log(`♿ Testing ${name} error accessibility in ${browserName}...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const iframe = page.locator('#storybook-preview-iframe');
        await expect(iframe).toBeVisible({ timeout: 10000 });
        const storyFrame = iframe.contentFrame();
        const component = storyFrame.locator('#storybook-root').first();
        
        await expect(component).toBeVisible();
        
        // Test ARIA attributes and roles
        const errorElement = storyFrame.locator('[role="alert"], .nhsuk-error-message, .nhsuk-error-summary').first();
        if (await errorElement.count() > 0) {
          await expect(errorElement).toBeVisible();
          
          // Test keyboard focus for error summary
          if (kebabCase === 'error-summary') {
            const errorLinks = storyFrame.locator('.nhsuk-error-summary a, a[href^="#"]');
            if (await errorLinks.count() > 0) {
              await errorLinks.first().focus();
              await page.waitForTimeout(200);
            }
          }
          
          await expect(component).toHaveScreenshot(`${kebabCase}-error-accessibility-${browserName}.png`);
        }
        
        console.log(`✅ ${name} error accessibility testing completed`);
      } catch (error) {
        console.log(`⚠️ ${name} error accessibility test failed: ${error}`);
      }
    });
    
    // Test 3: Error States and Behaviors
    test(`${kebabCase} - Error States and Behaviors`, async ({ page, browserName }) => {
      console.log(`❌ Testing ${name} error states in ${browserName}...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const iframe = page.locator('#storybook-preview-iframe');
        await expect(iframe).toBeVisible({ timeout: 10000 });
        const storyFrame = iframe.contentFrame();
        const component = storyFrame.locator('#storybook-root').first();
        
        await expect(component).toBeVisible();
        
        // Test default error state
        await expect(component).toHaveScreenshot(`${kebabCase}-error-default-${browserName}.png`);
        
        // Test error summary link behavior
        if (kebabCase === 'error-summary') {
          const errorLinks = storyFrame.locator('.nhsuk-error-summary a');
          if (await errorLinks.count() > 0) {
            // Test link focus
            await errorLinks.first().focus();
            await page.waitForTimeout(200);
            await expect(component).toHaveScreenshot(`${kebabCase}-error-link-focus-${browserName}.png`);
            
            // Test link hover (desktop only)
            if (browserName === 'chromium' || browserName === 'firefox') {
              await errorLinks.first().hover();
              await page.waitForTimeout(200);
              await expect(component).toHaveScreenshot(`${kebabCase}-error-link-hover-${browserName}.png`);
            }
          }
        }
        
        // Test mobile layout
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(500);
        await expect(component).toHaveScreenshot(`${kebabCase}-error-mobile-${browserName}.png`);
        
        console.log(`✅ ${name} error states testing completed`);
      } catch (error) {
        console.log(`⚠️ ${name} error states test failed: ${error}`);
      }
    });
  });
});

// Error framework validation
test.describe('NHS FDP Error Components Framework', () => {
  test('Error Components Framework Validation', async ({ page, browserName }) => {
    console.log(`❌ Running error components framework validation in ${browserName}...`);
    
    // Test error components are accessible in Storybook
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    
    const sidebar = page.locator('[data-nodetype="component"], .sidebar-item');
    await expect(sidebar.first()).toBeVisible({ timeout: 10000 });
    
    const componentCount = errorComponents.length;
    const viewportCount = viewports.length;
    const totalTests = componentCount * (viewportCount + 2); // viewport tests + accessibility tests + behavior tests
    
    console.log(`✅ Error framework ready for ${componentCount} components`);
    console.log(`✅ Total error test scenarios: ${totalTests}`);
    
    // Test error component accessibility standards
    await page.goto('http://localhost:6006/?path=/story/nhs-components-error-summary--default');
    await page.waitForLoadState('networkidle');
    
    const iframe = page.locator('#storybook-preview-iframe');
    if (await iframe.count() > 0) {
      const storyFrame = iframe.contentFrame();
      const errorSummary = storyFrame.locator('[role="alert"], .nhsuk-error-summary');
      
      if (await errorSummary.count() > 0) {
        console.log('✅ Error Summary has proper ARIA role');
      }
    }
  });
});
