import { generateReferenceFiles, generateIndex, componentTemplates } from './generate-reference.js';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Visual Test Generator
 * Automatically generates visual test files for all components
 */

const generateVisualTest = (componentName: string, config: any) => {
  const testCases = Object.keys(config.variants).map(variant => ({
    name: `${componentName} - ${variant}`,
    storybookPath: `/story/components-${componentName.toLowerCase()}--${variant.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
    referencePath: `/${componentName.toLowerCase()}/${componentName.toLowerCase()}-${variant}.html`,
  }));

  return `import { test, expect, Page } from '@playwright/test';

/**
 * Visual Testing for ${config.title}
 * Compares React implementation against NHS UK reference
 */

const componentName = '${config.title}';
const storybookUrl = 'http://localhost:6006';
const referenceUrl = 'http://localhost:3001';

interface VisualTestConfig {
  name: string;
  storybookPath: string;
  referencePath: string;
  interactions?: (page: Page) => Promise<void>;
}

const testCases: VisualTestConfig[] = ${JSON.stringify(testCases, null, 2)};

// Helper function to prepare page for consistent screenshots
async function preparePage(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.addStyleTag({
    content: \`
      * { 
        scrollbar-width: none !important; 
        -ms-overflow-style: none !important; 
      }
      *::-webkit-scrollbar { 
        display: none !important; 
      }
    \`
  });
  await page.waitForTimeout(100);
}

// Test suite for ${componentName}
testCases.forEach(({ name, storybookPath, referencePath, interactions }) => {
  test.describe(\`\${componentName} Visual Tests\`, () => {
    test(\`\${name} - Side by Side Comparison\`, async ({ page, browserName }) => {
      // React component screenshot
      await page.goto(\`\${storybookUrl}\${storybookPath}\`);
      await preparePage(page);
      
      if (interactions) {
        await interactions(page);
      }
      
      const component = page.locator('#storybook-root');
      await expect(component).toBeVisible();
      
      const reactScreenshot = await component.screenshot({
        animations: 'disabled',
      });
      
      // NHS UK reference screenshot
      await page.goto(\`\${referenceUrl}\${referencePath}\`);
      await preparePage(page);
      
      const referenceComponent = page.locator('.component-container');
      await expect(referenceComponent).toBeVisible();
      
      const referenceScreenshot = await referenceComponent.screenshot({
        animations: 'disabled',
      });
      
      // Store screenshots for comparison
      await expect(reactScreenshot).toMatchSnapshot(
        \`\${name.toLowerCase().replace(/\\s+/g, '-')}-\${browserName}-react.png\`
      );
      
      await expect(referenceScreenshot).toMatchSnapshot(
        \`\${name.toLowerCase().replace(/\\s+/g, '-')}-\${browserName}-reference.png\`
      );
    });

    test(\`\${name} - Visual Regression Test\`, async ({ page }) => {
      await page.goto(\`\${storybookUrl}\${storybookPath}\`);
      await preparePage(page);
      
      if (interactions) {
        await interactions(page);
      }
      
      const component = page.locator('#storybook-root');
      await expect(component).toBeVisible();
      
      await expect(component).toHaveScreenshot(
        \`\${name.toLowerCase().replace(/\\s+/g, '-')}-regression.png\`
      );
    });

    test(\`\${name} - Accessibility Check\`, async ({ page }) => {
      await page.goto(\`\${storybookUrl}\${storybookPath}\`);
      await preparePage(page);
      
      const component = page.locator('#storybook-root');
      await expect(component).toBeVisible();
      
      // Check keyboard navigation
      await page.keyboard.press('Tab');
      
      // Check for proper focus management
      const focusedElement = page.locator(':focus');
      if (await focusedElement.count() > 0) {
        await expect(focusedElement).toBeVisible();
      }
    });
  });
});
`;
};

function generateAllVisualTests() {
  const testDir = path.join(__dirname, '../../tests/visual');
  
  // Create test directory if it doesn't exist
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir, { recursive: true });
  }

  Object.entries(componentTemplates).forEach(([componentName, config]) => {
    const testContent = generateVisualTest(componentName, config);
    const testFile = path.join(testDir, `${componentName}.visual.test.ts`);
    
    fs.writeFileSync(testFile, testContent, 'utf8');
    console.log(`Generated visual test: ${testFile}`);
  });

  console.log('✅ All visual test files generated successfully!');
}

// Generate all files
async function setup() {
  console.log('🚀 Setting up visual testing framework...');
  
  // Generate reference HTML files
  generateReferenceFiles();
  generateIndex();
  
  // Generate visual test files
  generateAllVisualTests();
  
  console.log('✅ Visual testing framework setup complete!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Run: npm run visual:test');
  console.log('2. Review generated screenshots in tests/visual/');
  console.log('3. Check visual comparison reports');
}

// Execute if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  setup();
}

export { generateVisualTest, generateAllVisualTests, setup };
