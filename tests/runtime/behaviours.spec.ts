import { test, expect } from '@playwright/test';
import { startExpress } from './serverUtils';

test.describe('Behaviour enhancement', () => {
  test.beforeAll(async () => {
    await startExpress();
  });
  test('radios conditional reveal toggles after initAll', async ({ page }) => {
    // Capture console to aid debugging if behaviours script fails to load
    page.on('console', msg => {
      // eslint-disable-next-line no-console
      console.log('[page-console]', msg.type(), msg.text());
    });
    await page.goto('http://localhost:4200/');
    // Proactively load behaviours bundle (avoid relying on script tag race)
    await page.evaluate(async () => {
      try {
        const resp = await fetch('/dist/behaviours/index.js');
        // eslint-disable-next-line no-console
        console.log('[behaviours-test] fetch /dist/behaviours/index.js status', resp.status);
        if (resp.ok) {
          // @ts-ignore
          await import('/dist/behaviours/index.js');
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log('[behaviours-test] initial dynamic import failed', e);
      }
    });
    // Fallback: if still missing (race) attempt dynamic import + manual attach
    const hasGlobal = await page.evaluate(() => !!(window as any).__nhsInitAllBehaviours);
  if (!hasGlobal) {
      await page.evaluate(async () => {
        try {
          const resp = await fetch('/dist/behaviours/index.js');
          // eslint-disable-next-line no-console
          console.log('behaviours script fetch status', resp.status);
          if (resp.ok) {
            // @ts-ignore dynamic runtime import within browser context
            await import('/dist/behaviours/index.js');
          }
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log('behaviours dynamic import failed', e);
        }
      });
    }
  // Ensure global exists now
  const hasAfter = await page.evaluate(() => !!(window as any).__nhsInitAllBehaviours);
  expect(hasAfter).toBe(true);
    // Invoke behaviours init explicitly to avoid relying on passive auto init race
    await page.evaluate(() => {
      // @ts-ignore
      window.__nhsInitAllBehaviours && window.__nhsInitAllBehaviours();
    });
    // Select phone option
    await page.click('input[type=radio][value=phone]');
    // Email conditional should hide, phone conditional show
    const phoneVisible = await page.locator('.nhsuk-radios__conditional:not(.nhsuk-radios__conditional--hidden) >> text=Phone conditional').isVisible();
    expect(phoneVisible).toBeTruthy();
    const emailHidden = await page.locator('.nhsuk-radios__conditional--hidden >> text=Email conditional').count();
    expect(emailHidden).toBe(1);
  });
});
