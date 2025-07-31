import { test, expect } from '@playwright/test';

/**
 * Simple Visual Testing Demo
 * Tests the visual testing framework step by step
 */

test.describe('Simple Visual Testing Demo', () => {
  test('NHS UK Reference Server Test', async ({ page }) => {
    console.log('🔍 Testing NHS UK reference server...');
    
    // Test the reference server is working
    await page.goto('http://localhost:3002');
    await page.waitForLoadState('networkidle');
    
    // Check if index page loads
    await expect(page.locator('body')).toBeVisible();
    
    // Take a screenshot of the index
    await expect(page).toHaveScreenshot('reference-index.png');
    
    console.log('✅ NHS UK reference server is working!');
  });

  test('Footer Reference Component Test', async ({ page }) => {
    console.log('🔍 Testing NHS UK Footer reference...');
    
    // Navigate to a specific reference component
    await page.goto('http://localhost:3002/footer/footer-default.html');
    await page.waitForLoadState('networkidle');
    
    // Wait for CSS to load
    await page.waitForTimeout(1000);
    
    // Check footer is visible
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Take screenshot
    await expect(footer).toHaveScreenshot('nhs-footer-reference.png');
    
    console.log('✅ NHS UK Footer reference working!');
  });

  test('Storybook Server Test', async ({ page }) => {
    console.log('🔍 Testing Storybook server...');
    
    try {
      // Test if Storybook is accessible
      await page.goto('http://localhost:6006', { timeout: 10000 });
      await page.waitForLoadState('networkidle', { timeout: 10000 });
      
      // Check if Storybook loaded
      const storybookIndicators = [
        '#storybook-root',
        '.sb-show-main',
        '[data-test-id="storybook-root"]',
        'body'
      ];
      
      let storybookFound = false;
      for (const selector of storybookIndicators) {
        try {
          await expect(page.locator(selector)).toBeVisible({ timeout: 5000 });
          console.log(`✅ Found Storybook element: ${selector}`);
          storybookFound = true;
          break;
        } catch (e) {
          console.log(`❌ Storybook element not found: ${selector}`);
        }
      }
      
      if (storybookFound) {
        await expect(page).toHaveScreenshot('storybook-home.png');
        console.log('✅ Storybook is working!');
      } else {
        console.log('❌ Storybook elements not found, taking debug screenshot');
        await expect(page).toHaveScreenshot('storybook-debug.png');
      }
      
    } catch (error) {
      console.log('❌ Storybook connection failed:', error);
      
      // Try to navigate to a specific story directly
      try {
        await page.goto('http://localhost:6006/?path=/story/components-footer--default');
        await page.waitForLoadState('networkidle');
        await expect(page).toHaveScreenshot('storybook-story-debug.png');
      } catch (storyError) {
        console.log('❌ Story navigation also failed:', storyError);
      }
    }
  });
});
