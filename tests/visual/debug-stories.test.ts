import { test, expect } from '@playwright/test';

test.describe('Story URL Investigation', () => {
  test('Check what stories are available', async ({ page }) => {
    // Go to Storybook main page
    await page.goto('http://localhost:6006');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    // Take a screenshot to see what's available
    await page.screenshot({ path: 'debug-storybook-main.png', fullPage: true });
    
    console.log('📸 Main page screenshot taken');
    
    // Try to access footer story
    console.log('🔍 Testing footer story URL...');
    await page.goto('http://localhost:6006/?path=/story/components-footer--default');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    // Take screenshot of footer story
    await page.screenshot({ path: 'debug-footer-story.png', fullPage: true });
    
    // Check if there's an error or content
    const bodyText = await page.textContent('body');
    console.log('Footer story body contains:', bodyText?.substring(0, 200));
    
    // Try alternative footer URLs
    const footerUrls = [
      'http://localhost:6006/?path=/story/components-footer--default',
      'http://localhost:6006/?path=/story/Components-Footer--Default',
      'http://localhost:6006/?path=/story/nhs-components-footer--default',
      'http://localhost:6006/?path=/story/components%2Ffooter--default'
    ];
    
    for (const url of footerUrls) {
      console.log(`Testing URL: ${url}`);
      await page.goto(url);
      await page.waitForTimeout(1000);
      const title = await page.title();
      console.log(`  Title: ${title}`);
    }
    
    // Check iframe content
    console.log('🔍 Checking iframe content...');
    await page.goto('http://localhost:6006/?path=/story/components-footer--default');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);
    
    const iframe = page.frameLocator('#storybook-preview-iframe');
    const iframeBody = iframe.locator('body');
    
    try {
      await expect(iframeBody).toBeVisible({ timeout: 5000 });
      const iframeText = await iframeBody.textContent();
      console.log('Iframe content:', iframeText?.substring(0, 200));
      
      // Look for footer elements
      const footerElement = iframe.locator('footer, .footer, [data-testid*="footer"]');
      const footerCount = await footerElement.count();
      console.log(`Found ${footerCount} footer elements`);
      
      if (footerCount > 0) {
        const footerText = await footerElement.first().textContent();
        console.log('Footer text:', footerText?.substring(0, 100));
      }
      
    } catch (error) {
      console.log('Iframe not accessible:', error.message);
    }
  });
});
