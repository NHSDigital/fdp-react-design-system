import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { BrandThemeProvider } from "../../themes/BrandThemeProvider";
import { Header } from "../Header";
import { WorkflowSplitView } from "../WorkflowSplitView";
import type { WorkflowSplitViewProps } from "../WorkflowSplitView/WorkflowSplitView.types";
import { LogoVariant } from "../../assets/brand";
import { Label } from "../Label";
import { Input } from "../Input";
import { DateInput } from "../DateInput";
import { Select } from "../Select";
import { Button } from "../Button";
import { ButtonVariant } from "../Button/Button.types";
import { ErrorSummary } from "../ErrorSummary";

// Step model for the booking workflow
type Step = { id: string; label: string; description?: string };

const steps: Step[] = [
	{ id: "location", label: "Location", description: "Select hospital/site" },
	{ id: "specialism", label: "Specialism", description: "Choose specialty" },
	{
		id: "clinic-details",
		label: "Clinic Details",
		description: "Name and meta",
	},
	{
		id: "timings",
		label: "Timings",
		description: "Session dates and duration",
	},
	{
		id: "room-details",
		label: "Room Details",
		description: "Facilities and capacity",
	},
	{ id: "review", label: "Review", description: "Check and confirm" },
];

// Typed wrapper to pin generics for stories (ID=string, Step=Step)
const WorkflowSplitViewStory = (
	props: WorkflowSplitViewProps<string, Step>
) => <WorkflowSplitView {...props} />;

type StoryArgs = WorkflowSplitViewProps<string, Step> & { enableTabletGrid?: boolean; showGuidance?: boolean };
const meta: Meta<StoryArgs> = {
	title: "FDP/CMRB/Room Bookings",
	component: WorkflowSplitViewStory,
	argTypes: {
		enableTabletGrid: {
			control: { type: "boolean" },
			name: "Enable tablet grid",
			description: "When on, tablet uses the desktop-style grid instead of the mobile sliding pattern.",
			table: { category: "Layout" },
		},
		showGuidance: {
			control: { type: "boolean" },
			name: "Show guidance (desktop)",
			description: "Toggle the right-hand guidance panel on desktop.",
			table: { category: "Layout" },
		},
	},
	args: {
		enableTabletGrid: false,
		showGuidance: false,
	},
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component:
					"A composed FDP-branded workflow for Clinical Room Bookings with Header + WorkflowSplitView. Steps: Location → Specialism → Clinic Details → Timings → Room Details → Review. Use the 'Enable tablet grid' control to switch tablet between mobile-style sliding or grid layout.",
			},
		},
	},
};

export default meta;

type Story = StoryObj<StoryArgs>;

type FormState = {
	site: string;
	location: string;
	speciality: string;
	careProfessional: string;
	clinicTitle: string;
	session: string;
	start: { day: string; month: string; year: string };
};

type FormErrors = Partial<{
	site: string;
	location: string;
	speciality: string;
	careProfessional: string;
	clinicTitle: string;
	session: string;
	start: string; // summary error for the date
}>;

function Content(
	step: Step | undefined,
	state: FormState,
	errors: FormErrors,
	onChange: (patch: Partial<FormState>) => void,
	dateOnChange: (vals: { day: string; month: string; year: string }) => void,
	onNext: () => void,
	onPrev?: () => void,
) {
	const sectionGap = { display: "grid", gap: 12, alignItems: "start", maxWidth: 520 } as const;
	const field = (
		id: string,
		labelText: string,
		value: string,
		onVal: (v: string) => void,
		options: { value: string; text: string }[],
		errorKey?: keyof FormErrors
	) => (
		<div className={`nhsuk-form-group${errors[errorKey || "site"] ? " nhsuk-form-group--error" : ""}`}>
			<Label htmlFor={id}>{labelText}</Label>
			{errors[errorKey || "site"] && (
				<span className="nhsuk-error-message"><span className="nhsuk-u-visually-hidden">Error: </span>{errors[errorKey || "site"]}</span>
			)}
			<Select id={id} name={id} options={options} value={value} onChange={(e) => onVal(e.target.value)} hasError={Boolean(errors[errorKey || "site"])}/>
		</div>
	);

	// Build error summary entries for the current step
	const summaryList: { text: string; href?: string }[] = (() => {
		const items: { text: string; href?: string }[] = [];
		if (!step) return items;
		if (step.id === "location") {
			if (errors.site) items.push({ text: errors.site, href: "#label-site" });
			if (errors.location) items.push({ text: errors.location, href: "#label-location" });
		} else if (step.id === "specialism") {
			if (errors.speciality) items.push({ text: errors.speciality, href: "#label-speciality" });
			if (errors.careProfessional) items.push({ text: errors.careProfessional, href: "#label-care-professional" });
		} else if (step.id === "clinic-details") {
			if (errors.clinicTitle) items.push({ text: errors.clinicTitle, href: "#clinic-title" });
			if (errors.session) items.push({ text: errors.session, href: "#session" });
		} else if (step.id === "timings") {
			if (errors.start) items.push({ text: errors.start, href: "#start-date" });
		}
		return items;
	})();

	const isFirst = step ? steps.findIndex(s => s.id === step.id) === 0 : true;

	return (
		<div>
			<h2 style={{ marginTop: 0 }}>{step?.label}</h2>
			{step?.description && (
				<p style={{ margin: 0, color: "#444" }}>{step.description}</p>
			)}

			{/* Error summary */}
			{summaryList.length > 0 && (
				<div style={{ marginTop: 12 }}>
					<ErrorSummary errorList={summaryList} descriptionText="Please correct the following" />
				</div>
			)}

			<div style={{ marginTop: 16, ...sectionGap }}>
				{step?.id === "location" && (
					<>
						{field(
							"label-site",
							"Site",
							state.site,
							(v) => onChange({ site: v }),
							[
								{ value: "", text: "Please select" },
								{ value: "st-marys", text: "St Mary's Hospital" },
								{ value: "royal-free", text: "Royal Free Hospital" },
							],
							"site"
						)}
						{field(
							"label-location",
							"Location",
							state.location,
							(v) => onChange({ location: v }),
							[
								{ value: "", text: "Please select" },
								{ value: "wing-a", text: "Wing A" },
								{ value: "wing-b", text: "Wing B" },
								{ value: "outpatients", text: "Outpatients" },
							],
							"location"
						)}
					</>
				)}

				{step?.id === "specialism" && (
					<>
						{field(
							"label-speciality",
							"Speciality",
							state.speciality,
							(v) => onChange({ speciality: v }),
							[
								{ value: "", text: "Please select" },
								{ value: "cardiology", text: "Cardiology" },
								{ value: "orthopaedics", text: "Orthopaedics" },
								{ value: "dermatology", text: "Dermatology" },
							],
							"speciality"
						)}
						{field(
							"label-care-professional",
							"Care Professional",
							state.careProfessional,
							(v) => onChange({ careProfessional: v }),
							[
								{ value: "", text: "Please select" },
								{ value: "dr-smith", text: "Dr Jane Smith" },
								{ value: "dr-jones", text: "Dr Alex Jones" },
								{ value: "nurse-lee", text: "Nurse Chris Lee" },
							],
							"careProfessional"
						)}
					</>
				)}
				{step?.id === "clinic-details" && (
					<>
						<div className={`nhsuk-form-group${errors.clinicTitle ? " nhsuk-form-group--error" : ""}`}>
							<Label htmlFor="clinic-title">Clinic Title</Label>
							{errors.clinicTitle && (
								<span className="nhsuk-error-message"><span className="nhsuk-u-visually-hidden">Error: </span>{errors.clinicTitle}</span>
							)}
							<Input id="clinic-title" name="clinicTitle" placeholder="e.g. Dermatology AM Clinic" value={state.clinicTitle} onChange={(e) => onChange({ clinicTitle: e.target.value })} hasError={Boolean(errors.clinicTitle)} />
						</div>
						<div className={`nhsuk-form-group${errors.session ? " nhsuk-form-group--error" : ""}`}>
							<Label htmlFor="session">Session</Label>
							{errors.session && (
								<span className="nhsuk-error-message"><span className="nhsuk-u-visually-hidden">Error: </span>{errors.session}</span>
							)}
							<Select
								id="session"
								name="session"
								options={[
									{ value: "", text: "Please select" },
									{ value: "am", text: "AM" },
									{ value: "pm", text: "PM" },
									{ value: "ad", text: "AD" }
								]}
								value={state.session}
								onChange={(e) => onChange({ session: e.target.value })}
								hasError={Boolean(errors.session)}
							/>
						</div>
					</>
				)}

				{step?.id === "timings" && (
					<>
						<DateInput
							id="start-date"
							className={`nhsuk-form-group${errors.start ? " nhsuk-form-group--error" : ""}`}
							fieldset={{ legend: "Start" }}
							values={{ day: state.start.day, month: state.start.month, year: state.start.year }}
							items={[
								{ name: "day", label: "Day", inputmode: "numeric", autocomplete: "bday-day" },
								{ name: "month", label: "Month", inputmode: "numeric", autocomplete: "bday-month" },
								{ name: "year", label: "Year", inputmode: "numeric", autocomplete: "bday-year" },
							]}
							onChange={dateOnChange}
							errorMessage={errors.start ? { text: errors.start } : undefined}
						/>
					</>
				)}
			</div>

			{/* Navigation buttons */}
			{(step?.id === "location" || step?.id === "specialism" || step?.id === "clinic-details" || step?.id === "timings") && (
				<div style={{ display: "flex", gap: 12, marginTop: 16 }}>
					{!isFirst && (
						<Button variant={ButtonVariant.Secondary} type="button" onClick={onPrev}>Previous</Button>
					)}
					{/* Disable Next when errors present for the current step */}
					<Button type="button" onClick={onNext} aria-disabled={summaryList.length > 0 ? "true" : undefined} {...(summaryList.length > 0 ? { tabIndex: -1 } : {})}>Next</Button>
				</div>
			)}
		</div>
	);
}

function Secondary(step?: Step) {
	return (
		<div style={{ padding: 16 }}>
			<h3 style={{ marginTop: 0 }}>Guidance</h3>
			<p style={{ margin: 0 }}>
				Contextual help and related links for <strong>{step?.label}</strong>.
			</p>
		</div>
	);
}

export const Default: Story = {
	name: "Room Bookings (Header + Workflow)",
	render: (args) => {
		// Controlled step
		const [currentStepId, setCurrentStepId] = React.useState<string>("location");

		// Form state
		const [form, setForm] = React.useState<FormState>({
			site: "",
			location: "",
			speciality: "",
			careProfessional: "",
			clinicTitle: "",
			session: "",
			start: { day: "", month: "", year: "" },
		});
		const [errors, setErrors] = React.useState<FormErrors>({});

		const patchForm = (patch: Partial<FormState>) => setForm(prev => ({ ...prev, ...patch }));
		const patchDate = (vals: { day: string; month: string; year: string }) => setForm(prev => ({ ...prev, start: vals }));

		const indexOf = (id: string) => steps.findIndex(s => s.id === id);
		const goTo = (id: string) => setCurrentStepId(id);
		const prevId = () => {
			const idx = indexOf(currentStepId);
			return idx > 0 ? steps[idx - 1].id : undefined;
		};
		const nextId = () => {
			const idx = indexOf(currentStepId);
			return idx < steps.length - 1 ? steps[idx + 1].id : undefined;
		};

		const validate = (id: string): boolean => {
			const newErrors: FormErrors = {};
			if (id === "location") {
				if (!form.site) newErrors.site = "Select a site";
				if (!form.location) newErrors.location = "Select a location";
			} else if (id === "specialism") {
				if (!form.speciality) newErrors.speciality = "Select a speciality";
				if (!form.careProfessional) newErrors.careProfessional = "Select a care professional";
			} else if (id === "clinic-details") {
				if (!form.clinicTitle.trim()) newErrors.clinicTitle = "Enter a clinic title";
				if (!form.session) newErrors.session = "Select a session";
			} else if (id === "timings") {
				const { day, month, year } = form.start;
				if (!day || !month || !year) newErrors.start = "Enter a start date";
			}
			setErrors(newErrors);
			return Object.keys(newErrors).length === 0;
		};

		const onNext = () => {
			if (!validate(currentStepId)) return;
			const nid = nextId();
			if (nid) goTo(nid);
		};
		const onPrev = () => {
			const pid = prevId();
			if (pid) goTo(pid);
		};

		return (
			<BrandThemeProvider brand="fdp" scope="local">
				<div>
					{/* Branded header */}
					<Header
						service={{ text: "Clinical Room Bookings", href: "/" }}
						className="nhsuk-header--dark-grey-gradient"
						logoVariant={LogoVariant.Inverse}
						navigation={{
							ariaLabel: "Primary",
							items: [
								{ href: "#home", text: "Home" },
								{ href: "#bookings", text: "Room Bookings", current: true },
								{ href: "#new-clinics", text: "New Clinics" },
								{ href: "#modify-clinics", text: "Modify Clinics" },
								{ href: "#cancel-clinics", text: "Cancel Clinics" },
							],
						}}
					/>

					{/* Workflow area */}
					<div>
						<WorkflowSplitView<string, Step>
							steps={steps}
							currentStepId={currentStepId}
							onStepChange={(id) => setCurrentStepId(id)}
							defaultStepId="location"
							enableTabletGrid={args.enableTabletGrid}
							isStepComplete={(s?: Step) => {
								if (!s) return false;
								if (s.id === "location") return !!(form.site && form.location);
								if (s.id === "specialism") return !!(form.speciality && form.careProfessional);
								if (s.id === "clinic-details") {
									const { clinicTitle, session } = form;
									return !!(clinicTitle.trim() && session);
								}
								if (s.id === "timings") {
									const { start } = form;
									return !!(start.day && start.month && start.year);
								}
								// Default: not required or no fields modelled
								return true;
							}}
							// Responsive layout: 1 pane (mobile) → 2 panes (tablet) → 3 panes (desktop)
							layoutForStep={({ breakpoint }) =>
								breakpoint === "desktop"
									? { panes: (args as any).showGuidance ? 3 : 2, showPrimaryNav: true, showSecondaryNav: !!(args as any).showGuidance }
									: { panes: 2, showPrimaryNav: true, showSecondaryNav: false }
							}
							renderStepContent={(s?: Step) => Content(
								s,
								form,
								errors,
								patchForm,
								patchDate,
								onNext,
								onPrev
							)}
							renderSecondaryContent={(s?: Step) => Secondary(s)}
						/>
					</div>
				</div>
			</BrandThemeProvider>
		);
	},
};
