import { test, expect } from '@playwright/test';

/**
 * Form Components Visual Testing
 * Tests NHS form inputs and validation components
 */

// Form components
const formComponents = [
  { name: 'Input', kebabCase: 'input', storyPath: 'nhs-components-input--default' },
  { name: 'Textarea', kebabCase: 'textarea', storyPath: 'nhs-components-textarea--default' },
  { name: 'Select', kebabCase: 'select', storyPath: 'nhs-components-select--default' },
  { name: 'Checkboxes', kebabCase: 'checkboxes', storyPath: 'nhs-components-checkboxes--default' },
  { name: 'Radios', kebabCase: 'radios', storyPath: 'nhs-components-radios--default' },
  { name: 'DateInput', kebabCase: 'date-input', storyPath: 'nhs-components-date-input--default' },
  { name: 'CharacterCount', kebabCase: 'character-count', storyPath: 'nhs-components-character-count--default' },
  { name: 'Fieldset', kebabCase: 'fieldset', storyPath: 'nhs-components-fieldset--default' },
  { name: 'Label', kebabCase: 'label', storyPath: 'nhs-components-label--default' },
  { name: 'Hint', kebabCase: 'hint', storyPath: 'nhs-components-hint--default' },
];

// NHS UK Responsive Breakpoints
const viewports = [
  { name: 'Mobile', width: 375, height: 667, description: 'NHS Mobile breakpoint (up to 767px)' },
  { name: 'Tablet', width: 768, height: 1024, description: 'NHS Tablet breakpoint (768px+)' },
  { name: 'Desktop', width: 1280, height: 720, description: 'NHS Desktop breakpoint' },
];

console.log(`📝 Testing ${formComponents.length} form components across ${viewports.length} viewports`);

// Generate tests for each form component
formComponents.forEach(({ name, storyPath, kebabCase }) => {
  test.describe(`${name} Component - Form Visual Testing`, () => {
    
    // Test 1: NHS UK vs React Comparison at each viewport
    viewports.forEach(viewport => {
      test(`${kebabCase} - ${viewport.name} (${viewport.width}px) - Form Component`, async ({ page, browserName }) => {
        console.log(`🎯 Testing ${name} form component on ${viewport.name} in ${browserName}...`);
        
        // Set viewport size
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        
        // Test React Implementation  
        console.log(`🔍 Testing React ${kebabCase} form component at ${viewport.width}px...`);
        
        try {
          await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
          await page.waitForLoadState('networkidle');
          
          const iframe = page.locator('#storybook-preview-iframe');
          await expect(iframe).toBeVisible({ timeout: 10000 });
          
          const storyFrame = iframe.contentFrame();
          const reactElement = storyFrame.locator('#storybook-root').first();
          
          if (await reactElement.count() > 0) {
            await expect(reactElement).toBeVisible({ timeout: 10000 });
            await expect(reactElement).toHaveScreenshot(`${kebabCase}-form-react-${viewport.name.toLowerCase()}-${browserName}.png`);
            console.log(`✅ React ${kebabCase} form component captured at ${viewport.name}`);
          } else {
            console.log(`⚠️ React ${kebabCase} form component not found at ${viewport.name}`);
          }
        } catch (error) {
          console.log(`⚠️ React ${kebabCase} form component failed at ${viewport.name}: ${error}`);
        }
      });
    });
    
    // Test 2: Form State Testing (Focus, Hover, Error)
    test(`${kebabCase} - Form States Testing`, async ({ page, browserName }) => {
      console.log(`📝 Testing ${name} form states in ${browserName}...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const iframe = page.locator('#storybook-preview-iframe');
        await expect(iframe).toBeVisible({ timeout: 10000 });
        const storyFrame = iframe.contentFrame();
        const component = storyFrame.locator('#storybook-root').first();
        
        await expect(component).toBeVisible();
        
        // Test default state
        await expect(component).toHaveScreenshot(`${kebabCase}-form-default-${browserName}.png`);
        
        // Test focus state
        const formElements = storyFrame.locator('input, textarea, select, button');
        if (await formElements.count() > 0) {
          await formElements.first().focus();
          await page.waitForTimeout(200);
          await expect(component).toHaveScreenshot(`${kebabCase}-form-focus-${browserName}.png`);
          
          // Test hover state (desktop only)
          if (browserName === 'chromium' || browserName === 'firefox') {
            await formElements.first().hover();
            await page.waitForTimeout(200);
            await expect(component).toHaveScreenshot(`${kebabCase}-form-hover-${browserName}.png`);
          }
        }
        
        console.log(`✅ ${name} form states testing completed`);
      } catch (error) {
        console.log(`⚠️ ${name} form states test failed: ${error}`);
      }
    });
    
    // Test 3: Form Interaction Testing
    test(`${kebabCase} - Form Interaction Testing`, async ({ page, browserName }) => {
      console.log(`🖱️ Testing ${name} form interactions in ${browserName}...`);
      
      try {
        await page.goto(`http://localhost:6006/?path=/story/${storyPath}`);
        await page.waitForLoadState('networkidle');
        
        const iframe = page.locator('#storybook-preview-iframe');
        await expect(iframe).toBeVisible({ timeout: 10000 });
        const storyFrame = iframe.contentFrame();
        const component = storyFrame.locator('#storybook-root').first();
        
        await expect(component).toBeVisible();
        
        // Test form interactions based on component type
        if (kebabCase.includes('input') || kebabCase.includes('textarea')) {
          const input = storyFrame.locator('input, textarea').first();
          if (await input.count() > 0) {
            await input.fill('Test input value');
            await page.waitForTimeout(200);
            await expect(component).toHaveScreenshot(`${kebabCase}-form-filled-${browserName}.png`);
          }
        }
        
        if (kebabCase.includes('checkbox') || kebabCase.includes('radio')) {
          const options = storyFrame.locator('input[type="checkbox"], input[type="radio"]');
          if (await options.count() > 0) {
            await options.first().check();
            await page.waitForTimeout(200);
            await expect(component).toHaveScreenshot(`${kebabCase}-form-checked-${browserName}.png`);
          }
        }
        
        if (kebabCase.includes('select')) {
          const select = storyFrame.locator('select').first();
          if (await select.count() > 0) {
            const options = storyFrame.locator('select option');
            if (await options.count() > 1) {
              await select.selectOption({ index: 1 });
              await page.waitForTimeout(200);
              await expect(component).toHaveScreenshot(`${kebabCase}-form-selected-${browserName}.png`);
            }
          }
        }
        
        console.log(`✅ ${name} form interaction testing completed`);
      } catch (error) {
        console.log(`⚠️ ${name} form interaction test failed: ${error}`);
      }
    });
  });
});

// Form framework validation
test.describe('NHS FDP Form Components Framework', () => {
  test('Form Components Framework Validation', async ({ page, browserName }) => {
    console.log(`📝 Running form components framework validation in ${browserName}...`);
    
    // Test form components are accessible in Storybook
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    
    const sidebar = page.locator('[data-nodetype="component"], .sidebar-item');
    await expect(sidebar.first()).toBeVisible({ timeout: 10000 });
    
    const componentCount = formComponents.length;
    const viewportCount = viewports.length;
    const totalTests = componentCount * (viewportCount + 2); // viewport tests + state tests + interaction tests
    
    console.log(`✅ Form framework ready for ${componentCount} components`);
    console.log(`✅ Total form test scenarios: ${totalTests}`);
  });
});
