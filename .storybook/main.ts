import type { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
	stories: [
		"../src/components/**/*.mdx",
		"../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../docs/**/*.mdx",
	],
	addons: [
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		{
			name: "@storybook/addon-docs",
			options: {
				mdxPluginOptions: {
					mdxCompileOptions: {
						remarkPlugins: [remarkGfm],
					},
				},
			},
		},
		"@storybook/addon-a11y",
		"@storybook/addon-vitest",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	typescript: {
		check: false,
		reactDocgen: "react-docgen-typescript",
		reactDocgenTypescriptOptions: {
			shouldExtractLiteralValuesFromEnum: true,
			propFilter: (prop) =>
				prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
		},
	},
	viteFinal: async (config) => {
		// Enable JSX for TypeScript files
		config.esbuild = {
			...config.esbuild,
			jsx: "automatic",
			jsxDev: false,
		};

		// Enable CSS source maps for debugging
		config.css = {
			...config.css,
			devSourcemap: true,
		};

		// Ensure TypeScript files can handle JSX
		if (config.resolve) {
			config.resolve.extensions = [
				".tsx",
				".ts",
				".jsx",
				".js",
				".mjs",
				".json",
				...(config.resolve.extensions || []),
			];
		}

		// Configure server for font CORS if running locally
		config.server = config.server || {};
		config.server.cors = true;

		return config;
	},
};
export default config;
