import type { Preview } from "@storybook/react";
import { NHSThemeProvider } from "../src/components/NHSThemeProvider";
import { BrandThemeProvider } from "../src/themes/BrandThemeProvider";
import "../src/styles/fonts.css";
import "../src/styles/font-debug.css";
import "../src/styles/utilities.scss";
import './mdx-docs-styles.scss';
// Load semantic tokens (NHS defaults at :root) and FDP overlay (scoped)
import "../packages/nhs-fdp/dist/css/semantics.css";
import "../packages/nhs-fdp/dist/css/brand-fdp.css";

// Import font loading utilities
import { injectFontCSS, preloadFrutigerFonts } from "../src/styles/font-loader";

// Ensure fonts are loaded when Storybook starts
if (typeof document !== "undefined") {
	// Inject font CSS immediately
	injectFontCSS();

	// Add loading indicator
	document.body.classList.add("font-loading-debug");

	// Start preloading fonts
	preloadFrutigerFonts().then((result) => {
		if (!result.isLoaded) {
			console.warn("NHS Frutiger fonts not loaded in Storybook:", result.error);
		} else {
			console.log("NHS Frutiger fonts successfully loaded in Storybook");
			// Add class to indicate fonts are loaded
			document.body.classList.add("fonts-loaded");
		}

		// Remove loading indicator
		document.body.classList.remove("font-loading-debug");
	});
}

export const globalTypes = {
	brand: {
		name: 'Brand',
		description: 'Select visual brand',
		defaultValue: 'nhs',
		toolbar: {
			icon: 'paintbrush',
			items: [
				{ value: 'nhs', title: 'NHS' },
				{ value: 'fdp', title: 'FDP' },
			],
			dynamicTitle: true,
		},
	},
};

const preview: Preview = {
	parameters: {
        controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

        // Configure backgrounds for testing reverse buttons
        backgrounds: {
			default: "light",
			values: [
				{
					name: "light",
					value: "#ffffff",
				},
				{
					name: "dark",
					value: "#d8dde0", // Light Grey for dark mode
				},
				{
					name: "nhs-blue",
					value: "#005eb8",
				},
				{
					name: "grey",
					value: "#425563", // NHS Warm Grey
				},
			],
		},

        a11y: {
            // 'todo' - show a11y violations in the test UI only
            // 'error' - fail CI on a11y violations
            // 'off' - skip a11y checks entirely
            test: "todo"
        }
	},
	decorators: [
		(Story, ctx) => (
			<BrandThemeProvider brand={(ctx?.globals as any)?.brand === 'fdp' ? 'fdp' : 'nhs'}>
				<NHSThemeProvider>
					<Story {...ctx} />
				</NHSThemeProvider>
			</BrandThemeProvider>
		),
	],
};

export default preview;
// TypeScript configuration test
