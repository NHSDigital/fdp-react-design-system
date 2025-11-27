export type YesNoBranch = { next?: string; recommend?: string[] };

// A single selectable option within a node
export type Choice = { label: string; next?: string; recommend?: string[] };

export type ChoiceMode = 'single' | 'multiple';

// New unified choice node with explicit mode
export type ChoiceNode = {
    type: "choice";
    mode: ChoiceMode;
    question: string;
    help?: string;
    choices: Choice[];
};

// Back-compat: legacy single_choice, optionally carrying a multiple flag
export type SingleChoiceNode = {
    type: "single_choice";
    question: string;
    help?: string;
    multiple?: boolean;
    choices: Choice[];
};

export type YesNoNode = {
	type: "yes_no";
	question: string;
	yes?: YesNoBranch;
	no?: YesNoBranch;
};

export type EndNode = { type: "end"; recommend: string[] };

export type WizardNode =
    | ChoiceNode
    | SingleChoiceNode
    | YesNoNode
    | EndNode
    | Record<string, any>;

// Friendly alias for consumers when referring to a node from the data-viz-logic.json
export type DataVizNode = WizardNode;

export type Wizard = {
	title: string;
	root: string;
	nodes: Record<string, WizardNode>;
};

export type LogicFile = {
	v: string;
	wizards: Record<string, Wizard>;
};
