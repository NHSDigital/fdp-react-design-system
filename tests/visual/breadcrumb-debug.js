import { chromium } from 'playwright';

async function debugBreadcrumbCSS() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1280, height: 720 });
    
    console.log('🔍 Navigating to Breadcrumb story...');
    await page.goto('http://localhost:6006/?path=/story/nhs-components-breadcrumb--default');
    
    // Wait for the page to load
    await page.waitForTimeout(3000);
    
    // Get the iframe
    const iframe = await page.waitForSelector('#storybook-preview-iframe', { timeout: 10000 });
    const frame = await iframe.contentFrame();
    
    if (frame) {
      // Wait for the story root
      await frame.waitForSelector('#storybook-root', { timeout: 10000 });
      
      // Find breadcrumb elements
      const breadcrumb = await frame.$('.nhsuk-breadcrumb');
      const breadcrumbList = await frame.$('.nhsuk-breadcrumb__list');
      const breadcrumbBack = await frame.$('.nhsuk-breadcrumb__back');
      
      if (breadcrumb && breadcrumbList && breadcrumbBack) {
        console.log('✅ Found all breadcrumb elements');
        
        // Get computed styles
        const listStyles = await frame.evaluate((element) => {
          const styles = window.getComputedStyle(element);
          return {
            display: styles.display,
            visibility: styles.visibility,
            width: element.offsetWidth,
            height: element.offsetHeight
          };
        }, breadcrumbList);
        
        const backStyles = await frame.evaluate((element) => {
          const styles = window.getComputedStyle(element);
          return {
            display: styles.display,
            visibility: styles.visibility,
            width: element.offsetWidth,
            height: element.offsetHeight
          };
        }, breadcrumbBack);
        
        const breadcrumbStyles = await frame.evaluate((element) => {
          const styles = window.getComputedStyle(element);
          return {
            width: element.offsetWidth,
            height: element.offsetHeight
          };
        }, breadcrumb);
        
        console.log('📏 Breadcrumb container:', breadcrumbStyles);
        console.log('📏 Breadcrumb list (.nhsuk-breadcrumb__list):', listStyles);
        console.log('📏 Breadcrumb back (.nhsuk-breadcrumb__back):', backStyles);
        
        // Check viewport size
        const viewportWidth = await frame.evaluate(() => window.innerWidth);
        console.log('📐 Viewport width:', viewportWidth);
        
        // Take a screenshot for visual inspection
        await frame.screenshot({ path: 'breadcrumb-debug.png', fullPage: true });
        console.log('📸 Screenshot saved as breadcrumb-debug.png');
        
      } else {
        console.log('❌ Could not find breadcrumb elements');
        console.log('breadcrumb:', !!breadcrumb);
        console.log('breadcrumbList:', !!breadcrumbList);
        console.log('breadcrumbBack:', !!breadcrumbBack);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

debugBreadcrumbCSS();
