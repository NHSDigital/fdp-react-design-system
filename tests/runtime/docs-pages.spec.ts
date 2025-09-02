import { test, expect } from '@playwright/test';
import { startNext, startExpress, stop } from './serverUtils';

// Smoke test the new docs pages for Radios across Next & Express

test.describe('Docs pages parity (Radios)', () => {
  let nextServer: any;
  let expressServer: any;

  test.beforeAll(async () => {
    test.setTimeout(90000);
    // Start both servers once to amortise build cost.
    nextServer = await startNext();
    expressServer = await startExpress();
  });

  test.afterAll(async () => {
    stop(nextServer);
    stop(expressServer);
  });

  test('Next.js docs page renders static HTML snippet placeholder', async ({ page }) => {
    await page.goto('http://localhost:4100/components/radios');
    const h1 = await page.textContent('h1');
    expect(h1).toContain('Radios Component');
    const codeBlocks = await page.locator('pre code').allTextContents();
    expect(codeBlocks.length).toBeGreaterThan(0);
  });

  test('Express docs page renders macro + static HTML snippet placeholder', async ({ page }) => {
    await page.goto('http://localhost:4200/components/radios');
    const h1 = await page.textContent('h1');
    expect(h1).toContain('Radios Component');
    const macroRendered = await page.locator('fieldset.nhsuk-fieldset').first().isVisible();
    expect(macroRendered).toBeTruthy();
  });
});
