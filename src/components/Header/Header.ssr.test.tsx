import { describe, it, expect } from "vitest";
import { renderSSR } from "../../test-utils/renderSSR";
import { Header } from "./Header";
import { HeaderServer } from ".";

describe("Header (SSR)", () => {
	it("renders basic header with classes", () => {
		const { html } = renderSSR(
			<Header service={{ text: "NHS App", href: "/app" }} />
		);
		expect(html).toContain("nhsuk-header");
		expect(html).toContain("NHS App");
	});

	it("renders basic header (server variant) with classes", () => {
		const { html } = renderSSR(
			(<HeaderServer service={{ text: "NHS App", href: "/app" }} />) as any
		);
		expect(html).toContain("nhsuk-header");
		expect(html).toContain("NHS App");
	});

	it("applies white variant classes", () => {
		const { html } = renderSSR(
			<Header variant="white" service={{ text: "Service", href: "/svc" }} />
		);
		expect(html).toContain("nhsuk-header--white");
	});

	it("applies white variant classes (server variant)", () => {
		const { html } = renderSSR(
			(
				<HeaderServer
					variant="white"
					service={{ text: "Service", href: "/svc" }}
				/>
			) as any
		);
		expect(html).toContain("nhsuk-header--white");
	});

	it("combines logo + service link when hrefs match", () => {
		const { container } = renderSSR(
			<Header
				logo={{ href: "/same" }}
				service={{ text: "Portal", href: "/same" }}
			/>
		);
		const links = container.querySelectorAll('a[href="/same"]');
		expect(links.length).toBe(1); // combined
	});

	it("combines logo + service link when hrefs match (server variant)", () => {
		const { container } = renderSSR(
			(
				<HeaderServer
					logo={{ href: "/same" }}
					service={{ text: "Portal", href: "/same" }}
				/>
			) as any
		);
		const links = container.querySelectorAll('a[href="/same"]');
		expect(links.length).toBe(1);
	});

	it("server variant with overflow renders all items in dropdown only", () => {
		const navItems = [
			{ href: "/", text: "Home", current: true },
			{ href: "/a", text: "A" },
			{ href: "/b", text: "B" },
			{ href: "/c", text: "C" },
			{ href: "/d", text: "D" },
			{ href: "/e", text: "E" },
		];
		const { container, html } = renderSSR(
			(
				<HeaderServer
					maxVisibleItems={3}
					service={{ text: "Svc", href: "/" }}
					navigation={{ items: navItems }}
				/>
			) as any
		);
		// No primary inline nav items (list present but should be empty)
		const primaryItems = container.querySelectorAll(
			".nhsuk-header__navigation-list > li"
		);
		// Because we render an empty list when overflow triggers; ensure 0 or only current if logic changes later
		expect(primaryItems.length === 0 || primaryItems.length === 1).toBe(true);
		// Dropdown present with all items
		const dropdown = container.querySelector(
			'.nhsuk-header__dropdown-menu[data-ssr-overflow="true"]'
		);
		expect(dropdown).toBeTruthy();
		const dropdownItems = dropdown?.querySelectorAll("li");
		expect(dropdownItems?.length).toBe(navItems.length);
		// No interactive More toggle button
		expect(html).not.toContain("nhsuk-header__navigation-button");
	});
});
