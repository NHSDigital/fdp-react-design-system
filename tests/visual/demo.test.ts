import { test, expect } from '@playwright/test';

/**
 * Demo Visual Test for Footer Component
 * Shows the visual testing approach with NHS UK reference comparison
 */

test.describe('Footer Visual Testing Demo', () => {
  test('Footer - React vs NHS UK Reference Comparison', async ({ page, browserName }) => {
    // Test the React Footer component via Storybook
    console.log('📸 Testing React Footer component...');
    
    await page.goto('http://localhost:6006');
    
    // Navigate to Footer story (you'll need to adjust this path based on your Storybook structure)
    await page.goto('http://localhost:6006/?path=/story/components-footer--default');
    
    // Wait for the component to load
    await page.waitForLoadState('networkidle');
    
    // Take screenshot of React component
    const storyComponent = page.locator('#storybook-root');
    await expect(storyComponent).toBeVisible();
    
    // Take screenshot
    await expect(storyComponent).toHaveScreenshot(`footer-react-${browserName}.png`, {
      animations: 'disabled',
      threshold: 0.2,
    });
    
    console.log('✅ React component screenshot captured');
  });

  test('Footer - NHS UK Reference Screenshot', async ({ page, browserName }) => {
    // Test the NHS UK reference implementation
    console.log('📸 Testing NHS UK reference implementation...');
    
    await page.goto('http://localhost:3002/footer/footer-default.html');
    
    // Wait for the page and styles to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(500); // Extra wait for CSS to settle
    
    // Take screenshot of reference component
    const referenceComponent = page.locator('.component-container');
    await expect(referenceComponent).toBeVisible();
    
    await expect(referenceComponent).toHaveScreenshot(`footer-reference-${browserName}.png`, {
      animations: 'disabled',
      threshold: 0.2,
    });
    
    console.log('✅ NHS UK reference screenshot captured');
  });

  test('Footer - Interactive States Test', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-footer--default');
    await page.waitForLoadState('networkidle');
    
    const component = page.locator('#storybook-root');
    const firstLink = component.locator('a').first();
    
    if (await firstLink.count() > 0) {
      // Normal state
      await expect(component).toHaveScreenshot('footer-normal-state.png');
      
      // Hover state
      await firstLink.hover();
      await page.waitForTimeout(100);
      await expect(component).toHaveScreenshot('footer-hover-state.png');
      
      // Focus state
      await firstLink.focus();
      await page.waitForTimeout(100);
      await expect(component).toHaveScreenshot('footer-focus-state.png');
      
      console.log('✅ Interactive states tested');
    }
  });

  test('Footer - Responsive Test', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:6006/?path=/story/components-footer--default');
    await page.waitForLoadState('networkidle');
    
    const component = page.locator('#storybook-root');
    await expect(component).toHaveScreenshot('footer-mobile.png');
    
    // Test tablet viewport
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    await expect(component).toHaveScreenshot('footer-tablet.png');
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.reload();
    await page.waitForLoadState('networkidle');
    await expect(component).toHaveScreenshot('footer-desktop.png');
    
    console.log('✅ Responsive tests completed');
  });

  test('Footer - Accessibility Check', async ({ page }) => {
    await page.goto('http://localhost:6006/?path=/story/components-footer--default');
    await page.waitForLoadState('networkidle');
    
    const component = page.locator('#storybook-root');
    
    // Check keyboard navigation
    await page.keyboard.press('Tab');
    
    // Verify focus is visible
    const focusedElement = page.locator(':focus');
    if (await focusedElement.count() > 0) {
      await expect(focusedElement).toBeVisible();
      console.log('✅ Keyboard navigation working');
    }
    
    // Check for proper footer semantics
    const footer = component.locator('footer');
    await expect(footer).toBeVisible();
    
    // Check for links
    const links = footer.locator('a');
    const linkCount = await links.count();
    console.log(`Found ${linkCount} links in footer`);
    
    if (linkCount > 0) {
      // Check first link is accessible
      const firstLink = links.first();
      await expect(firstLink).toBeVisible();
      
      // Verify link has accessible text
      const linkText = await firstLink.textContent();
      expect(linkText).toBeTruthy();
      console.log(`✅ First link text: "${linkText}"`);
    }
    
    console.log('✅ Accessibility checks completed');
  });
});
