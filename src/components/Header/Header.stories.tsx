// PRUNE: KEEP_ALL (Expanded Header stories for variant coverage & documentation)
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { Heading } from "../..";

const meta: Meta<typeof Header> = {
	title: "NHS/Components/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `
The Header component provides navigation and branding for NHS services. It includes support for logos, service names, search functionality, account navigation, and main navigation.

## Features
- NHS branding with official logo
- Flexible navigation with responsive menu
- Search functionality
- Account management integration  
- Organisation variant for NHS trusts
- White variant for different backgrounds
- Full accessibility support with ARIA navigation

## Usage Guidelines
- Always include the NHS logo for consistency
- Use clear, descriptive navigation labels
- Implement proper focus management for keyboard users
- Consider mobile-first responsive behavior
- Follow NHS Digital Service Manual guidelines

## Accessibility
- Uses semantic HTML5 header element
- Proper ARIA navigation landmarks
- Keyboard accessible menu toggle
- Screen reader friendly hidden labels
- Focus indicators for all interactive elements
        `,
			},
		},
	},
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "white", "organisation"],
			description: "Header color variant",
		},
		className: {
			control: "text",
			description: "Additional CSS classes",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Header>;

// Base navigation + service used across examples
const baseArgs = {
	service: { text: "NHS Service", href: "/" },
	navigation: {
		items: [
			{ href: "#", text: "Home", current: true },
			{ href: "#", text: "Services" },
			{ href: "#", text: "Guidance" },
			{ href: "#", text: "Resources" },
			{ href: "#", text: "About" },
		],
	},
};

export const Default: Story = {
	args: { ...baseArgs },
	parameters: {
		docs: { description: { story: "Default header with core NHS styling." } },
	},
};

export const WhiteVariant: Story = {
	args: { ...baseArgs, variant: "white" },
	parameters: {
		docs: {
			description: { story: "White variant for coloured / dark backgrounds." },
		},
	},
};

export const OrganisationVariant: Story = {
	args: { ...baseArgs, variant: "organisation", organisation: { name: "NHS Trust with a Long Name" } },
	parameters: {
		docs: {
			description: {
				story: "Organisation variant (Trust / Hospital branding contexts).",
			},
		},
	},
};

export const WithSearch: Story = {
	args: {
		...baseArgs,
		search: { action: "/search", placeholder: "Search the NHS site" },
	},
	parameters: {
		docs: {
			description: { story: "Header including search form integration." },
		},
	},
};

export const WithAccountMenu: Story = {
	args: {
		...baseArgs,
		account: {
			items: [
				{ href: "/profile", text: "Your profile", icon: true },
				{ action: "/logout", method: "post", text: "Sign out" },
			],
		},
	},
	parameters: {
		docs: {
			description: { story: "Header with authenticated account navigation." },
		},
	},
};

export const WithLongNavigationOverflow: Story = {
	args: {
		...baseArgs,
		navigation: {
			items: [
				{ href: "#", text: "Home", current: true },
				{ href: "#", text: "Appointments" },
				{ href: "#", text: "Test results" },
				{ href: "#", text: "Medicines" },
				{ href: "#", text: "Messages" },
				{ href: "#", text: "Conditions" },
				{ href: "#", text: "Settings" },
				{ href: "#", text: "Support" },
			],
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					"Demonstrates overflow handling when navigation items exceed width.",
			},
		},
	},
};

export const WithEverything: Story = {
	args: {
		...baseArgs,
		variant: "organisation",
		search: { action: "/search", placeholder: "Search services" },
		account: {
			items: [
				{ href: "/profile", text: "Jane Doe", icon: true },
				{ href: "/settings", text: "Settings" },
				{ action: "/logout", method: "post", text: "Sign out" },
			],
		},
	},
	parameters: {
		docs: {
			description: {
				story: "Organisation variant with search and account menu combined.",
			},
		},
	},
};

export const Gallery: Story = {
	parameters: { docs: { disable: true } },
	render: () => (
		<div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
			<div>
				<Heading level={3}>Default</Heading>
				<Header {...(Default.args as any)} />
			</div>
			<div style={{ background: "#005eb8", padding: "8px" }}>
				<Heading level={3} style={{ color: "white" }}>White</Heading>
				<Header {...(WhiteVariant.args as any)} />
			</div>
			<div>
				<Heading level={3}>Organisation</Heading>
				<Header {...(OrganisationVariant.args as any)} />
			</div>
			<div>
				<Heading level={3}>With Search</Heading>
				<Header {...(WithSearch.args as any)} />
			</div>
			<div>
				<Heading level={3}>With Account</Heading>
				<Header {...(WithAccountMenu.args as any)} />
			</div>
			<div>
				<Heading level={3}>Overflow</Heading>
				<Header {...(WithLongNavigationOverflow.args as any)} />
			</div>
			<div>
				<Heading level={3}>Everything</Heading>
				<Header {...(WithEverything.args as any)} />
			</div>
		</div>
	),
};
