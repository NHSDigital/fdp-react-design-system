import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const enableStorybook = !!process.env.ENABLE_STORYBOOK_VITEST;

export default defineConfig({
	test: {
		environment: 'jsdom',
		setupFiles: ['src/test-setup.ts'],
		projects: [
			{
				test: {
					include: ['src/**/*.test.{ts,tsx}', 'tests/macroParity/**/*.test.{ts,tsx}'],
					environment: 'jsdom',
					setupFiles: ['src/test-setup.ts'],
					globals: true,
				},
			},
			// Storybook project is opt-in due to current instability with Vitest v3 + addon
			...(enableStorybook ? [
			{
					plugins: [
						storybookTest({ configDir: path.join(dirname, '.storybook') }),
					],
					test: {
						name: 'storybook',
						browser: {
							enabled: true,
							headless: true,
							provider: 'playwright',
							instances: [{ browser: 'chromium' }],
						},
						setupFiles: ['.storybook/vitest.setup.ts'],
						globals: true,
					},
				}
			] : []),
		],
	},
});
