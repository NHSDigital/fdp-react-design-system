import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { WorkflowSplitView } from "./WorkflowSplitView";
import type { WorkflowSplitViewProps } from "./WorkflowSplitView.types";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";

type Step = { id: string; label: string; description?: string };

const steps: Step[] = [
	{
		id: "intro",
		label: "Introduction",
		description: "Overview and prerequisites",
	},
	{
		id: "identity",
		label: "Your details",
		description: "Confirm personal details",
	},
	{
		id: "consent",
		label: "Consent",
		description: "Review and provide consent",
	},
	{
		id: "review",
		label: "Review",
		description: "Check and confirm submission",
	},
];

// Typed wrapper to pin generics for stories (ID=string, Step=Step)
const WorkflowSplitViewStory = (
	props: WorkflowSplitViewProps<string, Step>
) => <WorkflowSplitView {...props} />;

// Extend story args with a lightweight brand toggle for theming demos
type StoryArgs = WorkflowSplitViewProps<string, Step> & { brand?: "nhs" | "fdp" };

const meta: Meta<StoryArgs> = {
	title: "NHS/Components/WorkflowSplitView",
	component: WorkflowSplitViewStory,
	argTypes: {
		brand: {
			control: { type: "inline-radio" },
			options: ["nhs", "fdp"],
			description: "Select basic brand style overrides for demo",
		},
	},
	args: {
		brand: "nhs",
	},
	decorators: [
		(Story, context) => {
			const brand = (context.args as any).brand ?? "nhs";
			// Use the shared BrandThemeProvider to scope brand via data-brand
			return (
				<BrandThemeProvider brand={brand} scope="local">
					<Story />
				</BrandThemeProvider>
			);
		},
	],
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: `
Mobile-first transactional workflow navigator that adapts from sliding panes on mobile to split panes on larger screens.

Key behaviors:
- Mobile: breadcrumb + single-pane viewport that slides between steps (no card chrome)
- Tablet: two-pane grid (primary nav + content)
- Desktop: three-pane grid (primary nav + content + optional right-side secondary pane)

Use the layoutForStep prop to programmatically control pane count and visibility per step and breakpoint.
		`.trim(),
			},
		},
	},
};

export default meta;
type Story = StoryObj<StoryArgs>;

function DefaultContent(step?: Step) {
	return (
		<div>
			<h2 style={{ marginTop: 0 }}>{step?.label}</h2>
			<p style={{ margin: 0, color: "#444" }}>{step?.description}</p>
		</div>
	);
}

/**
 * Mobile-first: uses default layout behavior (1 pane on mobile, 2+ on larger screens).
 */
export const Default: Story = {
	name: "Default (responsive)",
	args: {
		steps,
		renderStepContent: (s?: Step) => DefaultContent(s),
	},
};

/**
 * Force the single-pane mobile layout regardless of viewport by setting panes=1.
 */
export const MobileCards: Story = {
	name: "Mobile panes (forced)",
	args: {
		steps,
		layoutForStep: () => ({
			panes: 1,
			showPrimaryNav: false,
			showSecondaryNav: false,
		}),
		renderStepContent: (s?: Step) => (
			<div style={{ padding: 12 }}>
				<strong>Step:</strong> {s?.label}
				<div style={{ fontSize: 12, color: "#666" }}>{s?.description}</div>
			</div>
		),
	},
};

/**
 * Tablet-style two-pane layout: primary navigation + content.
 * This story fixes the layout to two panes for demo purposes.
 */
export const TabletTwoPane: Story = {
	name: "Tablet: two panes",
	args: {
		steps,
		layoutForStep: () => ({
			panes: 2,
			showPrimaryNav: true,
			showSecondaryNav: false,
		}),
		renderStepContent: (s?: Step) => DefaultContent(s),
	},
};

/**
 * Desktop-style three-pane layout: primary navigation + content + secondary right pane.
 * For demonstration, we always show three panes and populate the right-side content.
 */
export const DesktopThreePane: Story = {
	name: "Desktop: three panes",
	args: {
		steps,
		layoutForStep: () => ({
			panes: 3,
			showPrimaryNav: true,
			showSecondaryNav: true,
		}),
		renderStepContent: (s?: Step) => DefaultContent(s),
		renderSecondaryContent: (s?: Step) => (
			<div style={{ padding: 16, borderLeft: "1px solid #e5e5e5" }}>
				<h3 style={{ marginTop: 0 }}>Context</h3>
				<p style={{ margin: 0 }}>Helpful guidance for: {s?.label}</p>
			</div>
		),
	},
};

/**
 * Controlled example: parent owns the current step and updates it programmatically.
 */
export const Controlled: Story = {
	render: () => {
		const [current, setCurrent] = React.useState("intro");
		const idx = steps.findIndex((s) => s.id === current);

		const go = (delta: number) => {
			const next = Math.max(0, Math.min(steps.length - 1, idx + delta));
			setCurrent(steps[next].id);
		};

		return (
			<div style={{ display: "grid", gap: 12 }}>
				<div>
					<button type="button" onClick={() => go(-1)} disabled={idx <= 0}>
						Previous
					</button>{" "}
					<button
						type="button"
						onClick={() => go(1)}
						disabled={idx >= steps.length - 1}
					>
						Next
					</button>
				</div>
				<WorkflowSplitViewStory
					steps={steps}
					currentStepId={current}
					onStepChange={(id) => setCurrent(String(id))}
					layoutForStep={({ breakpoint }) =>
						breakpoint === "desktop"
							? { panes: 3, showPrimaryNav: true, showSecondaryNav: true }
							: { panes: 2, showPrimaryNav: true, showSecondaryNav: false }
					}
					renderStepContent={(s?: Step) => DefaultContent(s)}
					renderSecondaryContent={(s?: Step) => (
						<div style={{ padding: 16 }}>
							<em>Right-side content for {s?.label}</em>
						</div>
					)}
				/>
			</div>
		);
	},
};

/**
 * Custom breadcrumbs: override the default with your own rendering.
 */
export const CustomBreadcrumbs: Story = {
	args: {
		steps,
		defaultStepId: "identity",
		renderBreadcrumbs: ({ steps, current, onNavigate }: any) => {
			const currentIndex = Math.max(
				0,
				steps.findIndex((s: Step) => s.id === current?.id)
			);
			return (
				<nav
					aria-label="Workflow"
					style={{
						borderBottom: "1px solid #eee",
						padding: "8px 12px",
						background: "#fafafa",
					}}
				>
					<ol
						style={{
							listStyle: "none",
							padding: 0,
							margin: 0,
							display: "flex",
							gap: 8,
						}}
					>
						{steps.map((s: Step, i: number) => (
							<li key={s.id}>
								{i === currentIndex ? (
									<span aria-current="step" style={{ fontWeight: 600 }}>
										{s.label}
									</span>
								) : (
									<button
										type="button"
										onClick={() => onNavigate(s.id)}
										style={{
											background: "none",
											border: 0,
											color: "#005eb8",
											cursor: "pointer",
										}}
									>
										{s.label}
									</button>
								)}
								{i < steps.length - 1 && <span aria-hidden> / </span>}
							</li>
						))}
					</ol>
				</nav>
			);
		},
		renderStepContent: (s?: Step) => DefaultContent(s),
		layoutForStep: ({ breakpoint }: any) =>
			breakpoint === "desktop"
				? { panes: 3, showPrimaryNav: true, showSecondaryNav: true }
				: { panes: 2, showPrimaryNav: true, showSecondaryNav: false },
		renderSecondaryContent: (_s?: Step) => (
			<div style={{ padding: 16 }}>
				<small>Breadcrumbs are custom in this example.</small>
			</div>
		),
	},
};

/**
 * Theming demo: Toggle basic brand styles by overriding the component's CSS variables.
 * Note: For full brand fidelity, we can promote more colors to CSS vars in the SCSS.
 */
export const BrandToggle: Story = {
	name: "Theming: NHS vs FDP",
	args: {
		steps,
		brand: "nhs",
		layoutForStep: () => ({ panes: 2, showPrimaryNav: true, showSecondaryNav: false }),
		renderStepContent: (s?: Step) => DefaultContent(s),
	},
};
