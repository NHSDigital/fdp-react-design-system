import { test, expect } from '@playwright/test';

test.describe('NHS Button Visual Tests - Complete Example', () => {
  test('Button Component - NHS UK vs React Implementation', async ({ page, browserName }) => {
    console.log(`🎯 Testing Button component in ${browserName}...`);
    
    // Step 1: Test NHS UK Reference
    console.log('📸 Testing NHS UK reference button...');
    await page.goto('http://localhost:3002/button/button-default.html');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
    
    const referenceButton = page.locator('.nhsuk-button');
    await expect(referenceButton).toBeVisible();
    await expect(referenceButton).toHaveScreenshot(`button-nhs-reference-${browserName}.png`);
    console.log('✅ NHS UK button reference captured');

    // Step 2: Test React Implementation via Storybook
    console.log('🔍 Testing React button implementation...');
    await page.goto('http://localhost:6006/?path=/story/nhs-components-button--primary');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    const storyFrame = page.frameLocator('#storybook-preview-iframe');
    const reactButton = storyFrame.locator('button').first();
    
    await expect(reactButton).toBeVisible({ timeout: 10000 });
    await expect(reactButton).toHaveScreenshot(`button-react-${browserName}.png`);
    console.log('✅ React button implementation captured');

    // Step 3: Verify both buttons have content
    const nhsButtonText = await referenceButton.textContent();
    const reactButtonText = await reactButton.textContent();
    
    console.log(`NHS UK button text: "${nhsButtonText}"`);
    console.log(`React button text: "${reactButtonText}"`);
    
    // Both should have non-empty text content
    expect(nhsButtonText?.trim()).toBeTruthy();
    expect(reactButtonText?.trim()).toBeTruthy();
    
    console.log('✅ Button visual comparison complete!');
  });

  test('Button Variants - Secondary', async ({ page, browserName }) => {
    console.log(`🎯 Testing Secondary Button variant in ${browserName}...`);
    
    // NHS UK Secondary Button
    await page.goto('http://localhost:3002/button/button-secondary.html');
    await page.waitForLoadState('networkidle');
    
    const referenceSecondary = page.locator('.nhsuk-button--secondary');
    await expect(referenceSecondary).toBeVisible();
    await expect(referenceSecondary).toHaveScreenshot(`button-secondary-nhs-${browserName}.png`);

    // React Secondary Button
    await page.goto('http://localhost:6006/?path=/story/nhs-components-button--secondary');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    const storyFrame = page.frameLocator('#storybook-preview-iframe');
    const reactSecondary = storyFrame.locator('button').first();
    
    await expect(reactSecondary).toBeVisible({ timeout: 10000 });
    await expect(reactSecondary).toHaveScreenshot(`button-secondary-react-${browserName}.png`);
    
    console.log('✅ Secondary button variant testing complete!');
  });

  test('Tag Component - NHS UK vs React', async ({ page, browserName }) => {
    console.log(`🎯 Testing Tag component in ${browserName}...`);
    
    // NHS UK Tag
    await page.goto('http://localhost:3002/tag/tag-default.html');
    await page.waitForLoadState('networkidle');
    
    const referenceTag = page.locator('.nhsuk-tag');
    await expect(referenceTag).toBeVisible();
    await expect(referenceTag).toHaveScreenshot(`tag-nhs-reference-${browserName}.png`);

    // React Tag (check if Tag story exists)
    await page.goto('http://localhost:6006/?path=/story/nhs-components-tag--default');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    const storyFrame = page.frameLocator('#storybook-preview-iframe');
    
    try {
      const reactTag = storyFrame.locator('[class*="tag"], .nhsuk-tag, strong').first();
      await expect(reactTag).toBeVisible({ timeout: 5000 });
      await expect(reactTag).toHaveScreenshot(`tag-react-${browserName}.png`);
      console.log('✅ Tag component found and captured');
    } catch (error) {
      console.log('ℹ️ Tag story might not exist, trying alternative URL...');
      
      // Try alternative Tag story URL
      await page.goto('http://localhost:6006/?path=/story/components-tag--default');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);
      
      const altTag = storyFrame.locator('[class*="tag"], .nhsuk-tag, strong').first();
      await expect(altTag).toBeVisible({ timeout: 5000 });
      await expect(altTag).toHaveScreenshot(`tag-react-alt-${browserName}.png`);
      console.log('✅ Tag component found with alternative URL');
    }
  });
});
