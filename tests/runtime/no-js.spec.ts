import { test, expect } from '@playwright/test';
import { startExpress, stop } from './serverUtils';

test.describe('Nunjucks no-JS baseline', () => {
  test('conditional content hidden before JS enhancement', async ({ browser }) => {
  const server = await startExpress();
    const context = await browser.newContext({ javaScriptEnabled: false, baseURL: 'http://localhost:4200' });
    const page = await context.newPage();
    await page.goto('/');
    // Both conditional containers should be hidden class at baseline
  const hiddenCount = await page.locator('.nhsuk-radios__conditional--hidden').count();
  expect(hiddenCount).toBeGreaterThanOrEqual(1);
    await context.close();
  stop(server);
  });
});
