const { chromium } = require('playwright');

async function testBreadcrumb() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to the breadcrumb story
    console.log('🔍 Navigating to Breadcrumb story...');
    await page.goto('http://localhost:6006/?path=/story/nhs-components-breadcrumb--default');
    
    // Wait for the page to load
    await page.waitForTimeout(3000);
    
    // Wait for the iframe to be available
    console.log('🔍 Looking for Storybook iframe...');
    const iframe = await page.waitForSelector('#storybook-preview-iframe', { timeout: 10000 });
    
    if (iframe) {
      console.log('✅ Found iframe');
      
      // Get the iframe content
      const frame = await iframe.contentFrame();
      
      if (frame) {
        console.log('✅ Got iframe content');
        
        // Wait for the story root
        await frame.waitForSelector('#storybook-root', { timeout: 10000 });
        console.log('✅ Found storybook-root');
        
        // Look for breadcrumb component
        const breadcrumb = await frame.waitForSelector('.nhsuk-breadcrumb', { timeout: 5000 });
        
        if (breadcrumb) {
          console.log('✅ Found breadcrumb component');
          
          // Get the breadcrumb dimensions
          const box = await breadcrumb.boundingBox();
          console.log('📏 Breadcrumb dimensions:', box);
          
          // Look for breadcrumb list
          const breadcrumbList = await frame.$('.nhsuk-breadcrumb__list');
          if (breadcrumbList) {
            const listBox = await breadcrumbList.boundingBox();
            console.log('📏 Breadcrumb list dimensions:', listBox);
            
            // Check if list is visible
            const isVisible = await breadcrumbList.isVisible();
            console.log('👁️  Breadcrumb list visible:', isVisible);
          } else {
            console.log('❌ No breadcrumb list found');
          }
          
          // Look for back link
          const backLink = await frame.$('.nhsuk-breadcrumb__back');
          if (backLink) {
            const backBox = await backLink.boundingBox();
            console.log('📏 Back link dimensions:', backBox);
            
            const isVisible = await backLink.isVisible();
            console.log('👁️  Back link visible:', isVisible);
          } else {
            console.log('❌ No back link found');
          }
          
          // Take a screenshot
          console.log('📸 Taking screenshot...');
          await frame.screenshot({ path: 'breadcrumb-test.png', fullPage: true });
          console.log('✅ Screenshot saved as breadcrumb-test.png');
          
        } else {
          console.log('❌ No breadcrumb component found');
        }
      } else {
        console.log('❌ Could not get iframe content');
      }
    } else {
      console.log('❌ No iframe found');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

testBreadcrumb();
