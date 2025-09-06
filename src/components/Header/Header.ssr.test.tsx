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

	it("server variant with responsiveNavigation=false renders all items in dropdown and none primary", () => {
		const navItems = [
			{ href: "/", text: "Home", current: true },
			{ href: "/a", text: "A" },
			{ href: "/b", text: "B" },
			{ href: "/c", text: "C" },
			{ href: "/d", text: "D" },
			{ href: "/e", text: "E" },
		];
		const { container, html } = renderSSR((
			<HeaderServer
				service={{ text: "Svc", href: "/" }}
				responsiveNavigation={false}
				navigation={{ items: navItems }}
			/>
		) as any);
		// Primary list exists but should have zero items because we push everything to dropdown when responsiveNavigation=false
		const primaryList = container.querySelector(
			".nhsuk-header__navigation-list"
		);
		expect(primaryList).toBeTruthy();
		const primaryItems = primaryList?.querySelectorAll(
			":scope > li"
		);
		expect(primaryItems?.length).toBe(0);
		// Dropdown present with all items
		const dropdown = container.querySelector(
			'.nhsuk-header__dropdown-menu[data-ssr-overflow="true"]'
		);
		expect(dropdown).toBeTruthy();
		const dropdownItems = dropdown?.querySelectorAll("li");
		expect(dropdownItems?.length).toBe(navItems.length);
		// No interactive More toggle button (SSR server variant)
		expect(html).not.toContain("nhsuk-header__navigation-button");
	});

	it("server variant with responsiveNavigation=true renders items inline with no dropdown", () => {
		const navItems = [
			{ href: "/", text: "Home", current: true },
			{ href: "/a", text: "A" },
			{ href: "/b", text: "B" },
			{ href: "/c", text: "C" }
		];
		const { container, html } = renderSSR((
			<HeaderServer
				service={{ text: "Svc", href: "/" }}
				responsiveNavigation={true}
				navigation={{ items: navItems }}
			/>
		) as any);
		// Primary list should contain all items
		const primaryList = container.querySelector(
			".nhsuk-header__navigation-list"
		);
		expect(primaryList).toBeTruthy();
		const primaryItems = primaryList?.querySelectorAll(":scope > li");
		expect(primaryItems?.length).toBe(navItems.length);
		// Dropdown should NOT be rendered (no overflow when responsiveNavigation=true)
		const dropdown = container.querySelector(
			'.nhsuk-header__dropdown-menu[data-ssr-overflow="true"]'
		);
		expect(dropdown).toBeFalsy();
		// Still no interactive toggle button in pure SSR output
		expect(html).not.toContain("nhsuk-header__navigation-button");
	});
});
