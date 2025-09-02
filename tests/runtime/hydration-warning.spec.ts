import { test, expect } from '@playwright/test';
import { startNext } from './serverUtils';

// NOTE: simpler readiness check using retries on page.goto

test.describe('Next.js hydration', () => {
  test.beforeAll(async () => {
    test.setTimeout(60000);
    await startNext();
  });
  test('no hydration warnings on demo page', async ({ page }) => {
    const consoleMessages: string[] = [];
    page.on('console', msg => consoleMessages.push(msg.text()));

    // retry until available
    let loaded = false;
    for (let i=0; i<30 && !loaded; i++) {
      try {
        await page.goto('/');
        loaded = true;
      } catch {
        await page.waitForTimeout(500);
      }
    }
    expect(loaded).toBe(true);

    // Look for common React 19 hydration mismatch signatures
    const banned = [/did not match/i, /content does not match/i, /hydration/i];
    const offending = consoleMessages.filter(m => banned.some(r => r.test(m)));
    expect(offending).toEqual([]);

  await page.close();
  });
});
