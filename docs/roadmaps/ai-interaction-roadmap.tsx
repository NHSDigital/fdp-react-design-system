/*
AI Use‑cases → React Design‑System Component Checklist (NHS)
-----------------------------------------------------------------
Purpose
- Provide a concrete, implementation‑ready checklist of React components and patterns needed to deliver AI value across 5 NHS use‑cases.
- Aligns to NHS Service Manual patterns and Atomic Design levels.
- Captures data/AI contracts, accessibility, instrumentation, and failure modes for each component.

How to use
- Import types and progressively fill in props & contracts in your design‑system monorepo (e.g., nhs‑react‑components).
- Use the `useCases` mapping to scope MVPs and Storybook tasks.
*/

// -------------------------------
// Atomic & domain enums
// -------------------------------

export type AtomicLevel =
	| "sub-atom"
	| "atom"
	| "molecule"
	| "organism"
	| "template";

export type Priority = "P1" | "P2" | "P3"; // P1 = required for MVP, P2 = next, P3 = nice-to-have

export type ComponentStatus = "planned" | "alpha" | "beta" | "live";

export type NHSServiceManualPattern =
	| "BackLink"
	| "Breadcrumbs"
	| "Button"
	| "Checkboxes"
	| "DateInput"
	| "Details"
	| "ErrorMessage"
	| "ErrorSummary"
	| "Fieldset"
	| "FileUpload"
	| "HintText"
	| "Input"
	| "InsetText"
	| "Label"
	| "Pagination"
	| "Radios"
	| "Select"
	| "SkipLink"
	| "SummaryList"
	| "Table"
	| "Tabs"
	| "Tag"
	| "WarningCallout";

export type UseCaseId =
	| "ambient_scribing"
	| "referral_triage"
	| "diagnostics_triage"
	| "scheduling_flow"
	| "coding_data_quality";

// -------------------------------
// Types
// -------------------------------

export interface DataContracts {
	fhir?: string[]; // FHIR resource types, e.g., ["Condition", "MedicationStatement"]
	codingSystems?: string[]; // e.g., ["SNOMED CT UK", "ICD-10", "OPCS-4"]
	pasFields?: string[]; // PAS/EPR specific fields written/read
	events?: string[]; // domain events this component should publish/subscribe to
}

export interface AIContract {
	inputs: string[]; // model inputs
	outputs: string[]; // model outputs
	confidence?: string; // name & range, e.g. "conformal_p: 0..1"
	calibration?: "conformal" | "platt" | "bayesian" | "none";
}

export interface InstrumentationSpec {
	events: string[]; // analytics events to emit
	metrics: string[]; // counters, timers, ratios captured in telemetry
}

export interface ComponentDef {
	id: string;
	name: string;
	atomicLevel: AtomicLevel;
	description: string;
	rationale: string;
	nhsPatternRefs: NHSServiceManualPattern[];
	propsTS: string; // TypeScript interface signature
	dataContracts?: DataContracts;
	aiContract?: AIContract;
	a11yChecklist: string[]; // bullets of specific checks
	instrumentation: InstrumentationSpec;
	failureModes: string[];
	status: ComponentStatus;
	priority: Priority;
}

export interface UseCaseComponentRef {
	componentId: string;
	priority: Priority;
	notes?: string;
}

export interface UseCaseDef {
	id: UseCaseId;
	name: string;
	description: string;
	kpis: string[];
	components: UseCaseComponentRef[];
}

export interface ComponentCatalogue {
	components: Record<string, ComponentDef>;
	useCases: UseCaseDef[];
	crossCutting: string[]; // component ids that appear across multiple use‑cases
}

// -------------------------------
// Components
// -------------------------------

export const COMPONENTS: Record<string, ComponentDef> = {
	// ---------- Cross‑cutting ----------
	uncertaintyBadge: {
		id: "uncertaintyBadge",
		name: "UncertaintyBadge",
		atomicLevel: "atom",
		description:
			"Displays calibrated model confidence or abstention as a compact tag.",
		rationale:
			"Expose uncertainty to avoid over‑trust; supports threshold tuning and safe abstention.",
		nhsPatternRefs: ["Tag", "HintText"],
		propsTS: `interface UncertaintyBadgeProps {\n  value?: number; // 0..1\n  label?: string; // e.g., 'High confidence'\n  method?: 'conformal' | 'platt' | 'bayesian' | 'none';\n  threshold?: number; // draw attention if < threshold\n  showIcon?: boolean;\n  ariaLabel?: string;\n}`,
		aiContract: {
			inputs: ["model_prediction"],
			outputs: ["confidence:0..1", "abstain?:boolean"],
			confidence: "0..1",
			calibration: "conformal",
		},
		a11yChecklist: [
			"Tag announces text via aria-label",
			"Colour never sole carrier of meaning (use text)",
			"Contrast ≥ 4.5:1",
		],
		instrumentation: {
			events: ["badge_viewed"],
			metrics: ["low_confidence_rate", "abstention_rate"],
		},
		failureModes: ["Confidence missing", "Out-of-range value"],
		status: "alpha",
		priority: "P1",
	},

	consentController: {
		id: "consentController",
		name: "ConsentController",
		atomicLevel: "molecule",
		description:
			"Controls for recording/processing consent: record, pause, redact with clear status.",
		rationale:
			"Ambient tools must make consent state visible and simple to change without derailing the consultation.",
		nhsPatternRefs: ["WarningCallout", "Button", "Tag"],
		propsTS: `interface ConsentControllerProps {\n  mode: 'recording' | 'paused' | 'stopped';\n  onPause(): void;\n  onResume(): void;\n  onStop(): void;\n  onRedact?(span: { start: number; end: number }): void;\n  patientVisible?: boolean;\n}`,
		a11yChecklist: [
			"Live region for state changes (polite)",
			"Buttons keyboard operable with visible focus",
		],
		instrumentation: {
			events: ["consent_pause", "consent_resume", "redact_invoked"],
			metrics: ["recording_time", "redactions_per_session"],
		},
		failureModes: ["Mic permission denied", "State desync with recorder"],
		status: "alpha",
		priority: "P1",
	},

	auditTrailPanel: {
		id: "auditTrailPanel",
		name: "AuditTrailPanel",
		atomicLevel: "organism",
		description:
			"Chronological log of AI outputs, human edits, approvals, and write‑backs.",
		rationale:
			"Governance and clinician trust require an inspectable trail of changes.",
		nhsPatternRefs: ["SummaryList", "Table", "Details"],
		propsTS: `interface AuditTrailEntry {\n  ts: string;\n  actor: 'ai' | 'user' | 'system';\n  action: string;\n  payload?: unknown;\n}\ninterface AuditTrailPanelProps { entries: AuditTrailEntry[] }`,
		a11yChecklist: ["Table has headers and caption", "Focusable row details"],
		instrumentation: {
			events: ["audit_open", "audit_export"],
			metrics: ["entries_per_session"],
		},
		failureModes: ["Large payload latency", "PHI in export without redaction"],
		status: "planned",
		priority: "P2",
	},

	reviewQueue: {
		id: "reviewQueue",
		name: "ReviewQueue",
		atomicLevel: "organism",
		description:
			"High‑throughput queue for human‑in‑the‑loop verification with hotkeys and preview‑next.",
		rationale:
			"Turns AI suggestions into net time‑savings; reduces eye/hand travel and context switching.",
		nhsPatternRefs: ["Table", "Pagination", "Tag", "Tabs"],
		propsTS: `interface ReviewItem<T> { id: string; data: T; ai?: { confidence?: number; reason?: string } }\ninterface ReviewQueueProps<T> {\n  items: ReviewItem<T>[];\n  onApprove(id: string): void;\n  onReject(id: string, reason?: string): void;\n  onOpen?(id: string): void;\n  keyboardShortcuts?: boolean;\n}`,
		a11yChecklist: ["All actions via keyboard", "Focus persists between items"],
		instrumentation: {
			events: ["approve", "reject", "open_item"],
			metrics: ["throughput_per_min", "override_rate"],
		},
		failureModes: [
			"Bulk actions applied unintentionally",
			"Queue desync after filter",
		],
		status: "beta",
		priority: "P1",
	},

	diffViewer: {
		id: "diffViewer",
		name: "DiffViewer",
		atomicLevel: "molecule",
		description:
			"Side‑by‑side or inline diff of AI‑draft vs EPR ground truth or previous note.",
		rationale: "Make changes legible and low‑effort to validate.",
		nhsPatternRefs: ["Details", "Tag"],
		propsTS: `interface DiffViewerProps {\n  leftLabel: string;\n  rightLabel: string;\n  left: string;\n  right: string;\n  highlights?: Array<{ span: [number, number]; label: string }>;\n}`,
		a11yChecklist: ["ARIA annotations for insert/delete", "Colour + glyphs"],
		instrumentation: {
			events: ["diff_toggle_mode"],
			metrics: ["time_in_diff"],
		},
		failureModes: ["Large text performance", "Encoding issues"],
		status: "beta",
		priority: "P1",
	},

	entityHighlighter: {
		id: "entityHighlighter",
		name: "EntityHighlighter",
		atomicLevel: "molecule",
		description:
			"Token‑level highlights with labels (problem, med, allergy), click to correct or map to code.",
		rationale:
			"Bridges free text and structured fields; reduces coding effort.",
		nhsPatternRefs: ["Tag", "Details", "HintText"],
		propsTS: `interface Entity {\n  id: string;\n  span: [number, number];\n  type: 'problem' | 'medication' | 'allergy' | 'symptom' | 'observation' | 'plan';\n  text: string;\n  code?: { system: string; code: string; display: string };\n  confidence?: number;\n}\ninterface EntityHighlighterProps {\n  text: string;\n  entities: Entity[];\n  onEdit?(e: Entity): void;\n  onDelete?(id: string): void;\n}`,
		a11yChecklist: [
			"Keyboard selection of spans",
			"Screen-reader order remains logical",
		],
		instrumentation: {
			events: ["entity_edit", "entity_delete"],
			metrics: ["edits_per_note"],
		},
		failureModes: ["Offsets drift after text edits", "Overlapping spans"],
		status: "beta",
		priority: "P1",
	},

	// ---------- 1) Ambient scribing ----------
	transcriptPane: {
		id: "transcriptPane",
		name: "TranscriptPane",
		atomicLevel: "organism",
		description:
			"Live ASR transcript with diarisation, punctuation, and quick‑fix chips.",
		rationale:
			"Lets clinicians see and correct critical recognition errors in‑flow.",
		nhsPatternRefs: ["Tag", "WarningCallout", "Details"],
		propsTS: `interface TranscriptSegment {\n  start: number; end: number;\n  speaker: 'clinician' | 'patient' | 'other';\n  text: string; confidence?: number;\n}\ninterface TranscriptPaneProps {\n  segments: TranscriptSegment[];\n  onQuickFix?(segmentId: string, replacement: string): void;\n  showTimestamps?: boolean;\n}`,
		aiContract: {
			inputs: ["audio_stream"],
			outputs: ["segments{start,end,speaker,text,confidence}"],
			confidence: "0..1",
			calibration: "none",
		},
		a11yChecklist: ["Live region (polite)", "Controls reachable while reading"],
		instrumentation: {
			events: ["quick_fix"],
			metrics: ["wpm_recognised", "quick_fixes_per_min"],
		},
		failureModes: ["Latency spikes", "Speaker misattribution"],
		status: "alpha",
		priority: "P1",
	},

	noteTemplateComposer: {
		id: "noteTemplateComposer",
		name: "NoteTemplateComposer",
		atomicLevel: "organism",
		description:
			"Structured template (HPI/Exam/Plan). Accepts extracted entities and drafts letters/discharge.",
		rationale:
			"Converts ambient capture into properly formatted, codable documentation.",
		nhsPatternRefs: [
			"Fieldset",
			"Input",
			"TextArea" as any,
			"Button",
			"Tag",
			"SummaryList",
		],
		propsTS: `interface NoteTemplateComposerProps {\n  templateId: string;\n  sections: Array<{ id: string; label: string; text: string }>;\n  extracted?: Entity[];\n  onAcceptExtract?(entityId: string): void;\n  onApprove(): void;\n}`,
		dataContracts: {
			fhir: ["Condition", "AllergyIntolerance", "MedicationStatement"],
			codingSystems: ["SNOMED CT UK"],
		},
		a11yChecklist: [
			"Headings map to landmark regions",
			"Error summary on submit",
		],
		instrumentation: {
			events: ["insert_entity", "approve_note"],
			metrics: ["minutes_to_approve"],
		},
		failureModes: ["Entity duplication", "Write‑back conflicts"],
		status: "alpha",
		priority: "P1",
	},

	approveSignoffBar: {
		id: "approveSignoffBar",
		name: "ApproveSignoffBar",
		atomicLevel: "molecule",
		description:
			"Sticky bottom bar for Approve / Save draft / Cancel with keyboard shortcuts.",
		rationale: "Clear end‑state for human‑in‑the‑loop sign‑off.",
		nhsPatternRefs: ["Button", "WarningCallout"],
		propsTS: `interface ApproveSignoffBarProps {\n  disabled?: boolean;\n  onApprove(): void;\n  onSaveDraft(): void;\n  onCancel(): void;\n}`,
		a11yChecklist: [
			"Space/Enter activation",
			"Focus visible",
			"Escape cancels",
		],
		instrumentation: {
			events: ["approve_click", "save_draft"],
			metrics: ["approval_latency_ms"],
		},
		failureModes: ["Double submit", "Unsaved changes lost"],
		status: "beta",
		priority: "P1",
	},

	// ---------- 2) Referral & correspondence triage ----------
	documentIngestViewer: {
		id: "documentIngestViewer",
		name: "DocumentIngestViewer",
		atomicLevel: "organism",
		description:
			"Unified viewer for PDFs/images with OCR text layer, anchors to extracted fields, and de‑dup controls.",
		rationale:
			"Reduces context switching; links evidence to structured checks.",
		nhsPatternRefs: ["Tabs", "Table", "Details", "FileUpload"],
		propsTS: `interface DocumentIngestViewerProps {\n  src: string;\n  ocrText?: string;\n  anchors?: Array<{ field: string; spans: [number, number][] }>;\n  onMarkDuplicate?(docId: string): void;\n}`,
		a11yChecklist: ["Keyboard page navigation", "OCR text available to SR"],
		instrumentation: {
			events: ["jump_to_anchor"],
			metrics: ["time_per_referral_ms"],
		},
		failureModes: ["Large file rendering", "OCR misalignment"],
		status: "alpha",
		priority: "P1",
	},

	routingExplainChips: {
		id: "routingExplainChips",
		name: "RoutingExplainChips",
		atomicLevel: "atom",
		description:
			"Compact chips that explain why a referral was routed/flagged.",
		rationale: "Builds trust and speeds QA.",
		nhsPatternRefs: ["Tag", "HintText"],
		propsTS: `interface RoutingExplainChipsProps {\n  reasons: Array<{ text: string; sourceSpan?: [number, number]; confidence?: number }>;\n}`,
		aiContract: {
			inputs: ["referral_doc"],
			outputs: ["top_features", "route_label"],
		},
		a11yChecklist: ["Chip text readable and focusable"],
		instrumentation: {
			events: ["reason_hover"],
			metrics: ["reasons_per_referral"],
		},
		failureModes: ["Leaky PHI in reasons", "Over‑long lists"],
		status: "beta",
		priority: "P1",
	},

	triageBulkActionsBar: {
		id: "triageBulkActionsBar",
		name: "TriageBulkActionsBar",
		atomicLevel: "molecule",
		description:
			"Approve / Redirect / Request info in bulk with safeguards and preview.",
		rationale: "High‑throughput decisioning without risk of mass error.",
		nhsPatternRefs: ["Button", "WarningCallout", "Details"],
		propsTS: `interface TriageBulkActionsBarProps {\n  selectedIds: string[];\n  onApprove(ids: string[]): void;\n  onRedirect(ids: string[], toQueue: string): void;\n  onRequestInfo(ids: string[], templateId: string): void;\n}`,
		a11yChecklist: ["Confirmations have clear focus traps", "Undo available"],
		instrumentation: {
			events: ["bulk_approve", "bulk_redirect"],
			metrics: ["batch_sizes"],
		},
		failureModes: ["Wrong selection set", "Template mismatch"],
		status: "alpha",
		priority: "P1",
	},

	missingInfoWizard: {
		id: "missingInfoWizard",
		name: "MissingInfoRequestWizard",
		atomicLevel: "organism",
		description:
			"Guided flow to request missing mandatory fields from referrer, with SLA tracking.",
		rationale: "Closes loops quickly and consistently.",
		nhsPatternRefs: ["Radios", "Input", "ErrorSummary", "BackLink"],
		propsTS: `interface MissingInfoRequestWizardProps {\n  checklist: Array<{ field: string; required: boolean }>;\n  templates: Array<{ id: string; label: string }>;\n  onSend(templateId: string, fields: string[]): void;\n}`,
		a11yChecklist: ["Error summary links back to fields", "Back link present"],
		instrumentation: {
			events: ["request_sent"],
			metrics: ["sla_days", "requests_per_referral"],
		},
		failureModes: ["Template not localised", "No SLA applied"],
		status: "planned",
		priority: "P2",
	},

	// ---------- 3) Diagnostics workflow acceleration ----------
	triageList: {
		id: "triageList",
		name: "TriageList",
		atomicLevel: "organism",
		description:
			"Worklist with AI‑priority column and stable ordering semantics.",
		rationale: "Surfaces urgent cases while preserving clinician control.",
		nhsPatternRefs: ["Table", "Tag", "Pagination", "Tabs"],
		propsTS: `interface TriageListItem {\n  id: string; patient: string; modality: string;\n  usualPriority: 'routine' | 'urgent' | 'stat';\n  aiPriority?: number; // 0..1\n  flags?: string[];\n}\ninterface TriageListProps { items: TriageListItem[]; onOpen(id: string): void }`,
		a11yChecklist: ["Sortable headers are buttons", "Row focus and SR labels"],
		instrumentation: {
			events: ["open_study"],
			metrics: ["ai_top_n_open_rate"],
		},
		failureModes: ["Jittery reordering", "Hidden cases"],
		status: "beta",
		priority: "P1",
	},

	imagingViewer: {
		id: "imagingViewer",
		name: "ImagingViewer",
		atomicLevel: "organism",
		description:
			"PACS‑like viewer with overlay heatmaps, slice navigator, and window/level controls.",
		rationale:
			"Lets radiologists validate AI findings without leaving their flow.",
		nhsPatternRefs: ["Tabs", "Details", "Tag"],
		propsTS: `interface OverlayMask {\n  type: 'heatmap' | 'contour' | 'points';\n  opacity: number;\n  data: Float32Array | number[];\n}\ninterface ImagingViewerProps {\n  studyId: string;\n  overlays?: OverlayMask[];\n  onJumpToFinding?(slice: number): void;\n}`,
		a11yChecklist: ["Keyboard for slice navigation", "High contrast overlays"],
		instrumentation: {
			events: ["overlay_toggle", "jump_to_finding"],
			metrics: ["overlay_time"],
		},
		failureModes: ["Overlay misregistration", "Performance on large studies"],
		status: "planned",
		priority: "P2",
	},

	acceptRejectBar: {
		id: "acceptRejectBar",
		name: "AcceptRejectBar",
		atomicLevel: "molecule",
		description:
			"Compact decision bar to accept/reject AI suggestion with reason codes.",
		rationale: "Captures learning signal with minimal friction.",
		nhsPatternRefs: ["Button", "Radios", "Details"],
		propsTS: `interface AcceptRejectBarProps {\n  onAccept(reasonCode?: string): void;\n  onReject(reasonCode?: string): void;\n  reasonCodes?: string[];\n}`,
		a11yChecklist: [
			"SR announces current selection",
			"Reason dialog focus trapped",
		],
		instrumentation: {
			events: ["accept", "reject"],
			metrics: ["accept_rate", "reject_reason_dist"],
		},
		failureModes: ["Reason not captured", "Double submission"],
		status: "beta",
		priority: "P1",
	},

	// ---------- 4) Scheduling, capacity & flow ----------
	scenarioWorkbench: {
		id: "scenarioWorkbench",
		name: "ScenarioWorkbench",
		atomicLevel: "organism",
		description:
			"What‑if planner with sliders for constraints, fan‑charts, and side‑by‑side scenario compare.",
		rationale: "Makes optimisation legible and negotiable with operations.",
		nhsPatternRefs: ["Tabs", "Table", "Tag", "Details"],
		propsTS: `interface Scenario { id: string; label: string; assumptions: Record<string, number|string>; }\ninterface ScenarioWorkbenchProps {\n  scenarios: Scenario[];\n  onRun(s: Scenario): void;\n  onCompare(a: string, b: string): void;\n}`,
		a11yChecklist: ["Sliders have numeric inputs", "Charts have data tables"],
		instrumentation: {
			events: ["scenario_run", "scenario_compare"],
			metrics: ["runs_per_session"],
		},
		failureModes: ["Model drift vs UI assumptions", "Fan chart misread"],
		status: "alpha",
		priority: "P1",
	},

	constraintsPanel: {
		id: "constraintsPanel",
		name: "ConstraintsPanel",
		atomicLevel: "molecule",
		description:
			"Editable list of hard/soft constraints with validation and rationale.",
		rationale:
			"Explains why the optimiser chose an answer; supports governance.",
		nhsPatternRefs: ["Table", "Input", "Tag", "Details", "ErrorSummary"],
		propsTS: `interface Constraint {\n  id: string; label: string;\n  type: 'hard' | 'soft';\n  value: number | string; unit?: string;\n}\ninterface ConstraintsPanelProps {\n  constraints: Constraint[];\n  onChange(c: Constraint): void;\n}`,
		a11yChecklist: ["Inputs labelled with units", "Errors summarised at top"],
		instrumentation: {
			events: ["constraint_edit"],
			metrics: ["edits_per_run"],
		},
		failureModes: ["Unit mismatch", "Invalid ranges"],
		status: "alpha",
		priority: "P1",
	},

	schedulerCanvas: {
		id: "schedulerCanvas",
		name: "SchedulerCanvas",
		atomicLevel: "organism",
		description:
			"Drag‑and‑drop session planner with inline feasibility feedback and locks/pins.",
		rationale: "Balances automation with human control for adoption.",
		nhsPatternRefs: ["Table", "Tag", "WarningCallout"],
		propsTS: `interface SessionBlock { id: string; start: string; end: string; resource: string; status?: 'locked'|'tentative'|'confirmed' }\ninterface SchedulerCanvasProps {\n  blocks: SessionBlock[];\n  onMove(id: string, toStart: string): void;\n  onLock(id: string): void;\n}`,
		a11yChecklist: [
			"Drag has keyboard alternative",
			"Feasibility feedback announced",
		],
		instrumentation: {
			events: ["block_move", "block_lock"],
			metrics: ["feasible_move_rate"],
		},
		failureModes: ["Conflicting locks", "PAS write‑back failure"],
		status: "planned",
		priority: "P2",
	},

	fairnessTradeoffPanel: {
		id: "fairnessTradeoffPanel",
		name: "FairnessTradeoffPanel",
		atomicLevel: "molecule",
		description:
			"Makes explicit the distributional trade‑offs (e.g., long‑waiters vs proximity).",
		rationale: "Ethical transparency for scheduling policies.",
		nhsPatternRefs: ["Details", "Tag", "Table"],
		propsTS: `interface Tradeoff { metric: string; before: number; after: number; }\ninterface FairnessTradeoffPanelProps { trades: Tradeoff[] }`,
		a11yChecklist: [
			"Table caption explains context",
			"Numbers read with units",
		],
		instrumentation: {
			events: ["tradeoff_view"],
			metrics: ["policy_switches"],
		},
		failureModes: ["Misleading aggregates", "Hidden cohorts"],
		status: "planned",
		priority: "P2",
	},

	// ---------- 5) Structured coding & data quality ----------
	inlineCodePicker: {
		id: "inlineCodePicker",
		name: "InlineCodePicker",
		atomicLevel: "molecule",
		description:
			"Typeahead + browse for SNOMED/ICD/OPCS with hover definitions and provenance.",
		rationale: "Speeds accurate coding with transparency.",
		nhsPatternRefs: ["Input", "HintText", "Tag"],
		propsTS: `interface CodeOption { system: string; code: string; display: string; }\ninterface InlineCodePickerProps {\n  value?: CodeOption;\n  options: CodeOption[];\n  onChange(o: CodeOption): void;\n}`,
		dataContracts: { codingSystems: ["SNOMED CT UK", "ICD-10", "OPCS-4"] },
		aiContract: {
			inputs: ["note_text"],
			outputs: ["code_candidates{code,display,score}"],
		},
		a11yChecklist: ["Combobox ARIA pattern", "Results limited and SR‑friendly"],
		instrumentation: {
			events: ["code_selected"],
			metrics: ["keystrokes_to_select"],
		},
		failureModes: ["Ambiguous abbreviations", "Stale cross‑maps"],
		status: "beta",
		priority: "P1",
	},

	codeSuggestionList: {
		id: "codeSuggestionList",
		name: "CodeSuggestionList",
		atomicLevel: "molecule",
		description:
			"Ranked suggestions with confidence, alternative codes, and abstention banner.",
		rationale: "Encourages safe review rather than blind accept.",
		nhsPatternRefs: ["Table", "Tag", "WarningCallout"],
		propsTS: `interface CodeSuggestion { option: CodeOption; score?: number; reason?: string }\ninterface CodeSuggestionListProps {\n  suggestions: CodeSuggestion[];\n  onAccept(o: CodeOption): void;\n  onReject(o: CodeOption, reason?: string): void;\n}`,
		a11yChecklist: ["Row actions keyboardable", "Confidence textualised"],
		instrumentation: {
			events: ["suggest_accept", "suggest_reject"],
			metrics: ["accept_rate", "reject_rate"],
		},
		failureModes: ["Over‑confident scores", "Hidden abstentions"],
		status: "alpha",
		priority: "P1",
	},

	conflictResolver: {
		id: "conflictResolver",
		name: "ConflictResolver",
		atomicLevel: "organism",
		description:
			"Diff and resolve conflicts between suggested codes and existing record entries.",
		rationale: "Prevents silent contradictions in the patient record.",
		nhsPatternRefs: ["ErrorSummary", "Details", "Table"],
		propsTS: `interface Conflict {\n  field: string;\n  existing: string;\n  suggested: string;\n}\ninterface ConflictResolverProps { conflicts: Conflict[]; onResolve(c: Conflict, choice: 'keep'|'replace'): void }`,
		a11yChecklist: [
			"Error summary links to conflicts",
			"Clear keep/replace labels",
		],
		instrumentation: {
			events: ["conflict_keep", "conflict_replace"],
			metrics: ["conflicts_per_note"],
		},
		failureModes: ["False conflicts from mapping", "Write‑back races"],
		status: "planned",
		priority: "P2",
	},

	dataQualityDashboard: {
		id: "dataQualityDashboard",
		name: "DataQualityDashboard",
		atomicLevel: "organism",
		description:
			"Monitors duplicates, missingness, and consistency across FHIR resources.",
		rationale: "Sustains data integrity improvements from AI assistance.",
		nhsPatternRefs: ["Table", "Tabs", "Tag", "WarningCallout"],
		propsTS: `interface DQMetric { name: string; value: number; threshold: number }\ninterface DataQualityDashboardProps { metrics: DQMetric[] }`,
		a11yChecklist: [
			"Charts have accessible fallbacks",
			"Thresholds described in text",
		],
		instrumentation: {
			events: ["dq_export"],
			metrics: ["dq_issues_open", "dq_issues_closed"],
		},
		failureModes: ["Noisy metrics", "Actionability unclear"],
		status: "planned",
		priority: "P2",
	},
};

// -------------------------------
// Use‑cases → components mapping
// -------------------------------

export const USE_CASES: UseCaseDef[] = [
	{
		id: "ambient_scribing",
		name: "Ambient scribing & letter/discharge generation",
		description:
			"Speech‑to‑text, IE, and templating that drafts documentation with human sign‑off.",
		kpis: [
			"minutes_saved_per_letter",
			"letter_turnaround_hours",
			"edit_rate",
			"approval_latency_ms",
		],
		components: [
			{ componentId: "consentController", priority: "P1" },
			{ componentId: "transcriptPane", priority: "P1" },
			{ componentId: "entityHighlighter", priority: "P1" },
			{ componentId: "noteTemplateComposer", priority: "P1" },
			{ componentId: "diffViewer", priority: "P1" },
			{ componentId: "approveSignoffBar", priority: "P1" },
			{ componentId: "auditTrailPanel", priority: "P2" },
			{ componentId: "uncertaintyBadge", priority: "P2" },
		],
	},
	{
		id: "referral_triage",
		name: "Referral & correspondence triage",
		description:
			"OCR, classification and routing of referrals with explainability and batch ergonomics.",
		kpis: ["time_per_referral_ms", "reroute_rate", "missing_info_cycle_time"],
		components: [
			{ componentId: "documentIngestViewer", priority: "P1" },
			{ componentId: "reviewQueue", priority: "P1" },
			{ componentId: "routingExplainChips", priority: "P1" },
			{ componentId: "triageBulkActionsBar", priority: "P1" },
			{ componentId: "missingInfoWizard", priority: "P2" },
			{ componentId: "uncertaintyBadge", priority: "P2" },
			{ componentId: "auditTrailPanel", priority: "P2" },
		],
	},
	{
		id: "diagnostics_triage",
		name: "Diagnostics workflow acceleration (imaging & pathology)",
		description:
			"AI‑prioritised worklists with viewer overlays and low‑friction decision capture.",
		kpis: ["time_to_first_read", "accept_rate", "false_positive_burden"],
		components: [
			{ componentId: "triageList", priority: "P1" },
			{ componentId: "acceptRejectBar", priority: "P1" },
			{ componentId: "imagingViewer", priority: "P2" },
			{ componentId: "uncertaintyBadge", priority: "P2" },
			{ componentId: "auditTrailPanel", priority: "P2" },
		],
	},
	{
		id: "scheduling_flow",
		name: "Scheduling, capacity & flow optimisation",
		description:
			"Forecasting + optimisation with transparent constraints and what‑if planning.",
		kpis: [
			"utilisation_pct",
			"validated_slots_recovered",
			"cancellations_avoided",
		],
		components: [
			{ componentId: "scenarioWorkbench", priority: "P1" },
			{ componentId: "constraintsPanel", priority: "P1" },
			{ componentId: "schedulerCanvas", priority: "P2" },
			{ componentId: "fairnessTradeoffPanel", priority: "P2" },
			{ componentId: "auditTrailPanel", priority: "P2" },
		],
	},
	{
		id: "coding_data_quality",
		name: "Structured coding & data quality",
		description:
			"Ontology‑aware IE with safe abstention and high‑throughput verification.",
		kpis: ["codes_accepted_per_min", "override_rate", "dq_issues_closed"],
		components: [
			{ componentId: "inlineCodePicker", priority: "P1" },
			{ componentId: "codeSuggestionList", priority: "P1" },
			{ componentId: "conflictResolver", priority: "P2" },
			{ componentId: "reviewQueue", priority: "P1" },
			{ componentId: "uncertaintyBadge", priority: "P2" },
			{ componentId: "dataQualityDashboard", priority: "P2" },
			{ componentId: "auditTrailPanel", priority: "P2" },
		],
	},
];

// -------------------------------
// Cross‑cutting set
// -------------------------------

export const CROSS_CUTTING_COMPONENT_IDS: string[] = [
	"uncertaintyBadge",
	"auditTrailPanel",
	"reviewQueue",
	"diffViewer",
];

// -------------------------------
// Export catalogue
// -------------------------------

export const CATALOGUE: ComponentCatalogue = {
	components: COMPONENTS,
	useCases: USE_CASES,
	crossCutting: CROSS_CUTTING_COMPONENT_IDS,
};

/*
Next steps
1) Storybook skeletons for all P1 components with NHS Service Manual look‑and‑feel.
2) Add a11y unit tests (axe) and keyboard navigation tests.
3) Define FHIR adapters and telemetry schema per component.
4) Create example pages per use‑case showing end‑to‑end flows.
*/
