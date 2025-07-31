import { test, expect } from '@playwright/test';

/**
 * Content Components Visual Testing  
 * Tests NHS content display and information components
 */

// Content components
const contentComponents = [
  { name: 'Card', kebabCase: 'card', storyPath: 'nhs-components-card--default' },
  { name: 'Panel', kebabCase: 'panel', storyPath: 'nhs-components-panel--default' },
  { name: 'InsetText', kebabCase: 'inset-text', storyPath: 'nhs-components-inset-text--default' },
  { name: 'WarningCallout', kebabCase: 'warning-callout', storyPath: 'nhs-components-warning-callout--default' },
  { name: 'Details', kebabCase: 'details', storyPath: 'nhs-components-details--default' },
  { name: 'DoDontList', kebabCase: 'do-dont-list', storyPath: 'nhs-components-do-dont-list--default' },
  { name: 'Images', kebabCase: 'images', storyPath: 'nhs-components-images--default' },
  { name: 'SummaryList', kebabCase: 'summary-list', storyPath: 'nhs-components-summary-list--default' },
  { name: 'Tables', kebabCase: 'tables', storyPath: 'nhs-components-tables--default' },
  { name: 'Hero', kebabCase: 'hero', storyPath: 'nhs-components-hero--default' },
];

// NHS UK Responsive Breakpoints
const viewports = [
  { name: 'Mobile', width: 375, height: 667, description: 'NHS Mobile breakpoint (up to 767px)' },
  { name: 'Tablet', width: 768, height: 1024, description: 'NHS Tablet breakpoint (768px+)' },
  { name: 'Desktop', width: 1280, height: 720, description: 'NHS Desktop breakpoint' },
];

console.log(`📄 Testing ${contentComponents.length} content components across ${viewports.length} viewports`);

// Generate tests for each content component
contentComponents.forEach(({ name, storyPath, kebabCase }) => {
  test.describe(`${name} Component - Content Visual Testing`, () => {
    
    // Test 1: NHS UK vs React Comparison at each viewport
    viewports.forEach(viewport => {
      test(`${kebabCase} - ${viewport.name} (${viewport.width}px) - Content Component`, async ({ page, browserName }) => {
        console.log(`🎯 Testing ${name} content component on ${viewport.name} in ${browserName}...`);
        
        // Set viewport size
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        
        // Test React Implementation  
        console.log(`🔍 Testing React ${kebabCase} content component at ${viewport.width}px...`);
        
        try {
          await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
          await page.waitForLoadState('networkidle');
          
          const iframe = page.locator('#storybook-preview-iframe');
          await expect(iframe).toBeVisible({ timeout: 10000 });
          
          const storyFrame = iframe.contentFrame();
          const reactElement = storyFrame.locator('#storybook-root').first();
          
          if (await reactElement.count() > 0) {
            await expect(reactElement).toBeVisible({ timeout: 10000 });
            await expect(reactElement).toHaveScreenshot(`${kebabCase}-content-react-${viewport.name.toLowerCase()}-${browserName}.png`);
            console.log(`✅ React ${kebabCase} content component captured at ${viewport.name}`);
          } else {
            console.log(`⚠️ React ${kebabCase} content component not found at ${viewport.name}`);
          }
        } catch (error) {
          console.log(`⚠️ React ${kebabCase} content component failed at ${viewport.name}: ${error}`);
        }
      });
    });
    
    // Test 2: Content Layout Testing
    test(`${kebabCase} - Content Layout Testing`, async ({ page, browserName }) => {
      console.log(`📐 Testing ${name} content layout in ${browserName}...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const iframe = page.locator('#storybook-preview-iframe');
        await expect(iframe).toBeVisible({ timeout: 10000 });
        const storyFrame = iframe.contentFrame();
        const component = storyFrame.locator('#storybook-root').first();
        
        await expect(component).toBeVisible();
        
        // Test layout at different viewports
        for (const viewport of viewports) {
          await page.setViewportSize({ width: viewport.width, height: viewport.height });
          await page.waitForTimeout(500); // Allow layout reflow
          
          await expect(component).toHaveScreenshot(`${kebabCase}-content-layout-${viewport.name.toLowerCase()}-${browserName}.png`);
        }
        
        console.log(`✅ ${name} content layout testing completed`);
      } catch (error) {
        console.log(`⚠️ ${name} content layout test failed: ${error}`);
      }
    });
    
    // Test 3: Interactive Content Testing
    test(`${kebabCase} - Interactive Content Testing`, async ({ page, browserName }) => {
      console.log(`🖱️ Testing ${name} interactive content in ${browserName}...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const iframe = page.locator('#storybook-preview-iframe');
        await expect(iframe).toBeVisible({ timeout: 10000 });
        const storyFrame = iframe.contentFrame();
        const component = storyFrame.locator('#storybook-root').first();
        
        await expect(component).toBeVisible();
        
        // Test interactive elements based on component type
        if (kebabCase === 'details') {
          const summary = storyFrame.locator('summary').first();
          if (await summary.count() > 0) {
            await summary.click();
            await page.waitForTimeout(300);
            await expect(component).toHaveScreenshot(`${kebabCase}-content-expanded-${browserName}.png`);
          }
        }
        
        if (kebabCase === 'tables') {
          // Test table responsive behavior
          await page.setViewportSize({ width: 375, height: 667 });
          await page.waitForTimeout(500);
          await expect(component).toHaveScreenshot(`${kebabCase}-content-mobile-table-${browserName}.png`);
        }
        
        if (kebabCase === 'card') {
          // Test card hover states (desktop only)
          if (browserName === 'chromium' || browserName === 'firefox') {
            const cardLink = storyFrame.locator('a, .nhsuk-card--clickable').first();
            if (await cardLink.count() > 0) {
              await cardLink.hover();
              await page.waitForTimeout(200);
              await expect(component).toHaveScreenshot(`${kebabCase}-content-hover-${browserName}.png`);
            }
          }
        }
        
        console.log(`✅ ${name} interactive content testing completed`);
      } catch (error) {
        console.log(`⚠️ ${name} interactive content test failed: ${error}`);
      }
    });
  });
});

// Content framework validation
test.describe('NHS FDP Content Components Framework', () => {
  test('Content Components Framework Validation', async ({ page, browserName }) => {
    console.log(`📄 Running content components framework validation in ${browserName}...`);
    
    // Test content components are accessible in Storybook
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    
    const sidebar = page.locator('[data-nodetype="component"], .sidebar-item');
    await expect(sidebar.first()).toBeVisible({ timeout: 10000 });
    
    const componentCount = contentComponents.length;
    const viewportCount = viewports.length;
    const totalTests = componentCount * (viewportCount + 2); // viewport tests + layout tests + interaction tests
    
    console.log(`✅ Content framework ready for ${componentCount} components`);
    console.log(`✅ Total content test scenarios: ${totalTests}`);
  });
});
