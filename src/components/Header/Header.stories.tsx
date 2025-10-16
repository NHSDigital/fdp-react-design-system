// PRUNE: KEEP_ALL (Expanded Header stories for variant coverage & documentation)
import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { LogoVariant } from "../../assets/brand";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";
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

## SSR usage (Next.js App Router / RSC)
If you're rendering on the server using the SSR entry, import from the server barrel to avoid pulling client hooks:

\`\`\`ts
import { Header, Footer, LogoVariant } from '@fergusbisset/nhs-fdp-design-system/ssr';
\`\`\`

The SSR Header does not read React context. To render FDP logos server-side (so that \`logoVariant\` takes effect), pass the brand via an attribute:

\`\`\`tsx
<Header
	attributes={{ 'data-brand': 'fdp' }}
	logoVariant={LogoVariant.Compact}
	service={{ text: 'Service', href: '/' }}
	navigation={{ items: [{ href: '#', text: 'Home', current: true }] }}
/>
\`\`\`

Notes:
- \`logoVariant\` affects the auto-selected FDP logo only when no explicit \`logo.src\` is provided.
- If you provide \`logo.src\`, that always overrides the brand-based selection.
- Choose an inverse variant (e.g. \`LogoVariant.Inverse\`) for dark backgrounds and pair with \`variant="white"\`.

If you prefer to control the exact asset, you can override with a specific logo source:

\`\`\`tsx
import { BrandKey, getBrandLogo, LogoVariant } from '@fergusbisset/nhs-fdp-design-system/ssr';

const logo = getBrandLogo(BrandKey.FDP, LogoVariant.Compact);

<Header
	logo={{ src: logo.src, ariaLabel: 'FDP' }}
	service={{ text: 'Service', href: '/' }}
/>;
\`\`\`

Client usage can still use \`BrandThemeProvider\` to style via CSS and for client-only behaviors, but SSR image selection relies on either \`attributes={{ 'data-brand': 'fdp' }}\` or an explicit \`logo.src\`.
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
		logoVariant: {
			control: {
				type: 'select',
				labels: {
					[LogoVariant.Full]: 'Full',
					[LogoVariant.Compact]: 'Compact',
					[LogoVariant.TwoLine]: 'Two line',
					[LogoVariant.Graphic]: 'Graphic device',
					[LogoVariant.Inverse]: 'Inverse',
					[LogoVariant.CompactInverted]: 'Compact (inverted)',
				},
			},
			options: [
				LogoVariant.Full,
				LogoVariant.Compact,
				LogoVariant.TwoLine,
				LogoVariant.Graphic,
				LogoVariant.Inverse,
				LogoVariant.CompactInverted,
			],
			description: 'Brand logo variant (FDP only). Use with BrandThemeProvider brand="fdp".',
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
			<div>
				<Heading level={3}>FDP (local brand scope)</Heading>
				<BrandThemeProvider brand="fdp" scope="local">
					<Header {...(Default.args as any)} />
				</BrandThemeProvider>
			</div>
		</div>
	),
};

export const FDPBrandScoped: Story = {
	args: { ...baseArgs, logoVariant: LogoVariant.Full },
	render: (args) => (
		<BrandThemeProvider brand="fdp" scope="local">
			<Header {...(args as any)} />
		</BrandThemeProvider>
	),
	parameters: {
		docs: { description: { story: "Header rendered within a local FDP brand scope using BrandThemeProvider." } },
	},
};

export const FDPLogoDynamic: Story = {
	args: { ...baseArgs, logoVariant: LogoVariant.Full },
	render: (args) => {
		const needsDark = args.logoVariant === LogoVariant.Inverse || args.logoVariant === LogoVariant.CompactInverted;
		return (
			<div style={{ background: needsDark ? '#003087' : 'transparent', padding: needsDark ? 8 : 0 }}>
				<BrandThemeProvider brand="fdp" scope="local">
					<Header {...(args as any)} variant={needsDark ? 'white' : args.variant} />
				</BrandThemeProvider>
			</div>
		);
	},
	parameters: {
		docs: { description: { story: 'Interactively switch FDP logo variants with the Controls panel.' } },
	},
};

export const FDPOnNHSDarkBlue: Story = {
	args: { ...baseArgs, logoVariant: LogoVariant.Inverse },
	render: (args) => (
		<div style={{ background: '#003087', padding: 0 }}>
			<BrandThemeProvider brand="fdp" scope="local">
				<Header {...(args as any)} className="nhsuk-header--dark-blue" />
			</BrandThemeProvider>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'FDP brand-scoped Header on NHS blue background; uses the inverse logo by default.',
			},
		},
	},
};

export const FDPOnNHSPaleGrey: Story = {
	args: { ...baseArgs, logoVariant: LogoVariant.Full },
	render: (args) => (
		<div style={{ background: '#E8EDF1', padding: 0 }}>
			<BrandThemeProvider brand="fdp" scope="local">
				<Header {...(args as any)} className="nhsuk-header--pale-grey" />
			</BrandThemeProvider>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'FDP brand-scoped Header on NHS pale grey background; uses the inverse logo by default.',
			},
		},
	},
};

export const FDPOnNHSDarkGrey: Story = {
	args: { ...baseArgs, logoVariant: LogoVariant.Inverse },
	render: (args) => (
		<div style={{ background: '#425563', padding: 0 }}>
			<BrandThemeProvider brand="fdp" scope="local">
				<Header {...(args as any)} className="nhsuk-header--dark-grey" />
			</BrandThemeProvider>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'FDP brand-scoped Header on NHS dark grey background; uses the inverse logo by default.',
			},
		},
	},
};

export const FDPOnNHSDarkGreyGradient: Story = {
	args: { ...baseArgs, logoVariant: LogoVariant.Inverse },
	render: (args) => (
		<div style={{ padding: 0 }}>
			<BrandThemeProvider brand="fdp" scope="local">
				<Header {...(args as any)} className="nhsuk-header--dark-grey-gradient" />
			</BrandThemeProvider>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'FDP brand-scoped Header with a dark grey gradient background; uses the inverse logo by default.',
			},
		},
	},
};

export const FDPOnNHSMidGrey: Story = {
	args: { ...baseArgs, logoVariant: LogoVariant.Inverse },
	render: (args) => (
		<div style={{ background: '#6F777B', padding: 0 }}>
			<BrandThemeProvider brand="fdp" scope="local">
				<Header {...(args as any)} className="nhsuk-header--mid-grey" />
			</BrandThemeProvider>
		</div>
	),
	parameters: {
		docs: {
			description: {
				story: 'FDP brand-scoped Header on NHS mid grey background; uses the inverse logo by default.',
			},
		},
	},
};

export const FDPLogoVariants: Story = {
	args: { ...baseArgs },
	render: (args) => (
		<div style={{ display: 'grid', gap: 16 }}>
			<BrandThemeProvider brand="fdp" scope="local">
				<div>
					<strong>Full (default)</strong>
					<Header {...(args as any)} logoVariant={LogoVariant.Full} />
				</div>
			</BrandThemeProvider>
			<BrandThemeProvider brand="fdp" scope="local">
				<div>
					<strong>Compact (two-line)</strong>
					<Header {...(args as any)} logoVariant={LogoVariant.Compact} />
				</div>
			</BrandThemeProvider>
			<BrandThemeProvider brand="fdp" scope="local">
				<div style={{ background: '#003087', padding: 8 }}>
					<strong style={{ color: 'white' }}>Inverse (on dark)</strong>
					<Header {...(args as any)} variant="white" logoVariant={LogoVariant.Inverse} />
				</div>
			</BrandThemeProvider>
		</div>
	),
	parameters: {
		docs: { description: { story: "Showcases FDP brand logo variants: full, compact (two-line), and inverse for dark backgrounds." } },
	},
};
