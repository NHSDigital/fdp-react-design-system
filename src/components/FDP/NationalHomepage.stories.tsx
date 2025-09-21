import type { Meta, StoryObj } from "@storybook/react";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";
import { Header } from "../Header";
import { NavigationSplitView } from "../NavigationSplitView";
import type { NavigationSplitItem } from "../NavigationSplitView/NavigationSplitView.types";
import { LogoVariant } from "../../assets/brand";

interface DemoItem extends NavigationSplitItem<string> {
	detail: string;
	category?: string;
}

const items: DemoItem[] = [
	{
		id: "news",
		label: "News and updates",
		description: "Latest national programme updates",
		detail:
			"Stay informed with the latest updates from the national programme. This section includes announcements, release notes, and guidance changes.",
	},
	{
		id: "products",
		label: "Products",
		description: "FDP products and services",
		detail:
			"Explore the suite of FDP products with documentation, onboarding guidance, and service status.",
	},
	{
		id: "centre-of-excellence",
		label: "Centre of Excellence",
		description: "Training and best practices",
		detail:
			"Access best practices, case studies, and expert advice to help you get the most out of the FDP.",
	},
	{
		id: "analyst-portal",
		label: "Analyst Portal",
		description: "Dashboards and insights",
		detail:
			"Explore the suite of FDP products with documentation, onboarding guidance, and service status.",
	},
	{
		id: "metadata-explorer-hub",
		label: "Metadata Explorer Hub",
		description: "Explore and understand existing datasets, metadata and ontologies.",
		detail:
			"Access comprehensive metadata documentation, including data models, API specifications, and usage guidelines.",
	},
	{
		id: "solution-exchange",
		label: "Solution Exchange",
		description: "Find and share FDP-compatible solutions and services.",
		detail:
			"Access comprehensive documentation and resources for FDP-compatible solutions, including implementation guides and best practices.",
	},
	{
		id: "developer-portal",
		label: "Developer Portal",
		description: "Resources and tools for developers.",
		detail:
			"Access comprehensive documentation, API references, and SDKs for building on the FDP.",
	},
];

const meta: Meta = {
	title: "FDP/National Homepage",
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"A composed example of an FDP-branded national homepage with a branded Header and a NavigationSplitView layout underneath. Uses local brand scoping to keep styles self-contained.",
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	name: "Homepage (Header + Split Navigation)",
	render: () => (
		<BrandThemeProvider brand="fdp" scope="local">
			<div>
				{/* Header: FDP brand, inverse logo on dark blue background */}
				<div style={{ background: "#003087" }}>
					<Header
						service={{ text: "National Homepage", href: "/" }}
						className="nhsuk-header--dark-grey-gradient"
						logoVariant={LogoVariant.CompactInverted}
					/>
				</div>

				{/* Main content area with split navigation view */}
				<>
					<NavigationSplitView<string, DemoItem>
						items={items}
						autoContentHeader={{ mobile: true, tablet: true, desktop: true }}
						contentSubheader={(item: DemoItem) => (
							<span style={{ color: "#4d4d4d" }}>{item.description}</span>
						)}
						renderContent={(item?: DemoItem) =>
							item ? (
								<div>
									<h3 style={{ marginTop: 0 }}>{item.label}</h3>
									<p>{item.detail}</p>
								</div>
							) : (
								<p>Select a section from the navigation.</p>
							)
						}
						renderSecondaryContent={(item?: DemoItem) =>
							item ? (
								<div>
									<h4 style={{ marginTop: 0 }}>Secondary Panel</h4>
									<p>Additional context and links for {item.label}.</p>
								</div>
							) : (
								<p>No selection.</p>
							)
						}
					/>
				</>
			</div>
		</BrandThemeProvider>
	),
};
