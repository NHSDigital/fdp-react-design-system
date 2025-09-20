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
		id: "guidance",
		label: "Guidance",
		description: "Design system and service guidance",
		detail:
			"Find design, accessibility, and service standards to build consistent user experiences.",
	},
	{
		id: "analytics",
		label: "Analytics",
		description: "Dashboards and insights",
		detail:
			"Access national and regional dashboards, metrics, and performance insights.",
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
						service={{ text: "Federated Data Platform", href: "/" }}
						className="nhsuk-header--dark-blue-gradient"
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
