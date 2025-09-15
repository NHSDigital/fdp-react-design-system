import { defineConfig } from "vitest/config";

// Focused config for logic_v2 unit and parity tests under tests/spc_v2
export default defineConfig({
	test: {
		include: ["tests/spc_v2/**/*.test.ts"],
		environment: "node",
		reporters: [["default", { summary: false }]],
		coverage: {
			provider: "v8",
			reporter: ["text", "lcov"],
		},
	},
});
