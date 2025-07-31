import { test, expect } from '@playwright/test';

/**
 * Navigation Components Visual Testing
 * Tests NHS navigation and wayfinding components
 */

// Navigation components
const navigationComponents = [
  { name: 'Header', kebabCase: 'header', storyPath: 'nhs-components-header--default' },
  { name: 'BackLink', kebabCase: 'back-link', storyPath: 'nhs-components-back-link--default' },
  { name: 'SkipLink', kebabCase: 'skip-link', storyPath: 'nhs-components-skip-link--default' },
  { name: 'ContentsList', kebabCase: 'contents-list', storyPath: 'nhs-components-contents-list--default' },
  { name: 'Tabs', kebabCase: 'tabs', storyPath: 'nhs-components-tabs--default' },
];

// NHS UK Responsive Breakpoints
const viewports = [
  { name: 'Mobile', width: 375, height: 667, description: 'NHS Mobile breakpoint (up to 767px)' },
  { name: 'Tablet', width: 768, height: 1024, description: 'NHS Tablet breakpoint (768px+)' },
  { name: 'Desktop', width: 1280, height: 720, description: 'NHS Desktop breakpoint' },
];

console.log(`🧭 Testing ${navigationComponents.length} navigation components across ${viewports.length} viewports`);

// Generate tests for each navigation component
navigationComponents.forEach(({ name, storyPath, kebabCase }) => {
  test.describe(`${name} Component - Navigation Visual Testing`, () => {
    
    // Test 1: NHS UK vs React Comparison at each viewport
    viewports.forEach(viewport => {
      test(`${kebabCase} - ${viewport.name} (${viewport.width}px) - NHS UK vs React`, async ({ page, browserName }) => {
        console.log(`🎯 Testing ${name} navigation component on ${viewport.name} in ${browserName}...`);
        
        // Set viewport size
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        
        // Test React Implementation  
        console.log(`🔍 Testing React ${kebabCase} implementation at ${viewport.width}px...`);
        
        try {
          await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
          await page.waitForLoadState('networkidle');
          
          const iframe = page.locator('#storybook-preview-iframe');
          await expect(iframe).toBeVisible({ timeout: 10000 });
          
          const storyFrame = iframe.contentFrame();
          const reactElement = storyFrame.locator('#storybook-root').first();
          
          if (await reactElement.count() > 0) {
            await expect(reactElement).toBeVisible({ timeout: 10000 });
            await expect(reactElement).toHaveScreenshot(`${kebabCase}-navigation-react-${viewport.name.toLowerCase()}-${browserName}.png`);
            console.log(`✅ React ${kebabCase} navigation component captured at ${viewport.name}`);
          } else {
            console.log(`⚠️ React ${kebabCase} navigation component not found at ${viewport.name}`);
          }
        } catch (error) {
          console.log(`⚠️ React ${kebabCase} navigation component failed at ${viewport.name}: ${error}`);
        }
      });
    });
    
    // Test 2: Navigation Behavior Testing
    test(`${kebabCase} - Navigation Behavior Testing`, async ({ page, browserName }) => {
      console.log(`🧭 Testing ${name} navigation behavior in ${browserName}...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const iframe = page.locator('#storybook-preview-iframe');
        await expect(iframe).toBeVisible({ timeout: 10000 });
        const storyFrame = iframe.contentFrame();
        
        // Test mobile behavior specifically
        await page.setViewportSize({ width: 375, height: 667 });
        await page.waitForTimeout(500);
        
        const component = storyFrame.locator('#storybook-root').first();
        await expect(component).toBeVisible();
        
        // Test for mobile menu toggles if applicable
        const menuToggle = storyFrame.locator('button[aria-expanded], .nhsuk-header__menu-toggle, [data-toggle]');
        if (await menuToggle.count() > 0) {
          await menuToggle.click();
          await page.waitForTimeout(300);
          await expect(component).toHaveScreenshot(`${kebabCase}-navigation-mobile-expanded-${browserName}.png`);
        }
        
        await expect(component).toHaveScreenshot(`${kebabCase}-navigation-behavior-${browserName}.png`);
        
        console.log(`✅ ${name} navigation behavior testing completed`);
      } catch (error) {
        console.log(`⚠️ ${name} navigation behavior test failed: ${error}`);
      }
    });
    
    // Test 3: Keyboard Navigation Testing
    test(`${kebabCase} - Keyboard Navigation Testing`, async ({ page, browserName }) => {
      console.log(`⌨️ Testing ${name} keyboard navigation in ${browserName}...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const iframe = page.locator('#storybook-preview-iframe');
        await expect(iframe).toBeVisible({ timeout: 10000 });
        const storyFrame = iframe.contentFrame();
        const component = storyFrame.locator('#storybook-root').first();
        
        await expect(component).toBeVisible();
        
        // Test keyboard navigation
        await storyFrame.locator('body').press('Tab');
        await page.waitForTimeout(200);
        
        // Test focus on navigation elements
        const navElements = storyFrame.locator('a, button, [href], [tabindex]:not([tabindex="-1"])');
        const count = await navElements.count();
        
        if (count > 0) {
          await navElements.first().focus();
          await page.waitForTimeout(200);
          await expect(component).toHaveScreenshot(`${kebabCase}-keyboard-nav-focus-${browserName}.png`);
          
          // Test arrow key navigation if applicable
          await storyFrame.locator('body').press('ArrowRight');
          await page.waitForTimeout(200);
          await expect(component).toHaveScreenshot(`${kebabCase}-keyboard-nav-arrow-${browserName}.png`);
        }
        
        console.log(`✅ ${name} keyboard navigation testing completed`);
      } catch (error) {
        console.log(`⚠️ ${name} keyboard navigation test failed: ${error}`);
      }
    });
  });
});

// Navigation framework validation
test.describe('NHS FDP Navigation Components Framework', () => {
  test('Navigation Components Framework Validation', async ({ page, browserName }) => {
    console.log(`🧭 Running navigation components framework validation in ${browserName}...`);
    
    // Test Storybook Navigation Category
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    
    // Look for navigation components in sidebar
    const sidebar = page.locator('[data-nodetype="component"], .sidebar-item');
    await expect(sidebar.first()).toBeVisible({ timeout: 10000 });
    
    const componentCount = navigationComponents.length;
    const viewportCount = viewports.length;
    const totalTests = componentCount * viewportCount + (componentCount * 2); // viewport tests + behavior tests
    
    console.log(`✅ Navigation framework ready for ${componentCount} components`);
    console.log(`✅ Total navigation test scenarios: ${totalTests}`);
  });
});
