import { test, expect } from "@playwright/test";
import { startNext, startExpress, stop } from "./serverUtils";

// Smoke test the new docs pages for Radios across Next & Express

test.describe("Docs pages parity (Radios)", () => {
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

	test("Next.js radios docs page renders snippet placeholder", async ({
		page,
	}) => {
		await page.goto("http://localhost:4100/components/radios");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Radios Component");
		const codeBlocks = await page.locator("pre code").allTextContents();
		expect(codeBlocks.length).toBeGreaterThan(0);
	});

	test("Express radios docs page renders macro and static HTML snippet placeholder", async ({
		page,
	}) => {
		await page.goto("http://localhost:4200/components/radios");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Radios Component");
		const macroRendered = await page
			.locator("fieldset.nhsuk-fieldset")
			.first()
			.isVisible();
		expect(macroRendered).toBeTruthy();
	});

	test("Next.js button docs page renders and shows React examples", async ({
		page,
	}) => {
		await page.goto("http://localhost:4100/components/button");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Button Component");
		const buttons = await page
			.locator("a.nhs-aria-button, button.nhs-aria-button")
			.count();
		expect(buttons).toBeGreaterThan(0);
		// Assert that the Login variant is present to ensure parity with Express
		const loginVisible = await page
			.locator('.nhs-aria-button:has-text("Login")')
			.first()
			.isVisible();
		expect(loginVisible).toBeTruthy();
	});

	test("Express button docs page renders macro and snippet placeholder", async ({
		page,
	}) => {
		await page.goto("http://localhost:4200/components/button");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Button Component – Implementation Examples");
		const btns = await page.locator(".nhs-aria-button").count();
		expect(btns).toBeGreaterThan(0);
		// Assert that the Login variant is present (macro variant parity)
		const loginVisible = await page
			.locator('.nhs-aria-button:has-text("Login")')
			.first()
			.isVisible();
		expect(loginVisible).toBeTruthy();
	});
});

// New docs pages parity for Label across Next & Express
test.describe("Docs pages parity (Label)", () => {
	let nextServer: any;
	let expressServer: any;

	test.beforeAll(async () => {
		test.setTimeout(90000);
		nextServer = await startNext();
		expressServer = await startExpress();
	});

	test.afterAll(async () => {
		stop(nextServer);
		stop(expressServer);
	});

	test("Next.js label docs page renders React examples", async ({ page }) => {
		await page.goto("http://localhost:4100/components/label");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Label Component");
		const labels = await page.locator("label.nhsuk-label").count();
		expect(labels).toBeGreaterThan(0);
	});

	test("Express label docs page renders macro and static HTML snippet placeholder", async ({ page }) => {
		await page.goto("http://localhost:4200/components/label");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Label Component – Implementation Examples");
		const labelVisible = await page.locator("label.nhsuk-label").first().isVisible();
		expect(labelVisible).toBeTruthy();
	});
});

// Docs pages parity for Heading
test.describe("Docs pages parity (Heading)", () => {
	let nextServer: any;
	let expressServer: any;

	test.beforeAll(async () => {
		test.setTimeout(90000);
		nextServer = await startNext();
		expressServer = await startExpress();
	});

	test.afterAll(async () => {
		stop(nextServer);
		stop(expressServer);
	});

	test("Next.js heading docs page renders React examples", async ({ page }) => {
		await page.goto("http://localhost:4100/components/heading");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Heading Component");
		const headings = await page.locator("h1,h2,h3,h4,h5,h6").count();
		expect(headings).toBeGreaterThan(1);
	});

	test("Express heading docs page renders macro and static HTML snippet placeholder", async ({ page }) => {
		await page.goto("http://localhost:4200/components/heading");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Heading Component – Implementation Examples");
		const visible = await page.locator("h1,h2,h3,h4,h5,h6").first().isVisible();
		expect(visible).toBeTruthy();
	});
});

// Docs pages parity for ErrorMessage
test.describe("Docs pages parity (ErrorMessage)", () => {
	let nextServer: any;
	let expressServer: any;

	test.beforeAll(async () => {
		test.setTimeout(90000);
		nextServer = await startNext();
		expressServer = await startExpress();
	});

	test.afterAll(async () => {
		stop(nextServer);
		stop(expressServer);
	});

	test("Next.js error-message docs page renders React examples", async ({ page }) => {
		await page.goto("http://localhost:4100/components/error-message");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("ErrorMessage Component");
		const errors = await page.locator(".nhsuk-error-message").count();
		expect(errors).toBeGreaterThan(0);
	});

	test("Express error-message docs page renders macro and static HTML snippet placeholder", async ({ page }) => {
		await page.goto("http://localhost:4200/components/error-message");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("ErrorMessage Component – Implementation Examples");
		const visible = await page.locator(".nhsuk-error-message").first().isVisible();
		expect(visible).toBeTruthy();
	});
});

// Docs pages parity for Hint
test.describe("Docs pages parity (Hint)", () => {
	let nextServer: any;
	let expressServer: any;

	test.beforeAll(async () => {
		test.setTimeout(90000);
		nextServer = await startNext();
		expressServer = await startExpress();
	});

	test.afterAll(async () => {
		stop(nextServer);
		stop(expressServer);
	});

	test("Next.js hint docs page renders React examples", async ({ page }) => {
		await page.goto("http://localhost:4100/components/hint");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Hint Component");
		const hints = await page.locator(".nhsuk-hint").count();
		expect(hints).toBeGreaterThan(0);
	});

	test("Express hint docs page renders macro and static HTML snippet placeholder", async ({ page }) => {
		await page.goto("http://localhost:4200/components/hint");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("Hint Component – Implementation Examples");
		const visible = await page.locator(".nhsuk-hint").first().isVisible();
		expect(visible).toBeTruthy();
	});
});

// Docs pages parity for ErrorSummary
test.describe("Docs pages parity (ErrorSummary)", () => {
	let nextServer: any;
	let expressServer: any;

	test.beforeAll(async () => {
		test.setTimeout(90000);
		nextServer = await startNext();
		expressServer = await startExpress();
	});

	test.afterAll(async () => {
		stop(nextServer);
		stop(expressServer);
	});

	test("Next.js error-summary docs page renders React examples", async ({ page }) => {
		await page.goto("http://localhost:4100/components/error-summary");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("ErrorSummary Component");
		const summaries = await page.locator(".nhsuk-error-summary").count();
		expect(summaries).toBeGreaterThan(0);
	});

	test("Express error-summary docs page renders macro and static HTML snippet placeholder", async ({ page }) => {
		await page.goto("http://localhost:4200/components/error-summary");
		const h1 = await page.textContent("h1");
		expect(h1).toContain("ErrorSummary Component – Implementation Examples");
		const visible = await page.locator(".nhsuk-error-summary").first().isVisible();
		expect(visible).toBeTruthy();
	});
});
