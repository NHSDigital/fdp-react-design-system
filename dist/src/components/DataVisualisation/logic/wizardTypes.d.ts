export type YesNoBranch = {
    next?: string;
    recommend?: string[];
};
export type ChoiceMode = 'single' | 'multiple';
export type ChoiceNode = {
    type: "choice";
    mode: ChoiceMode;
    question: string;
    help?: string;
    choices: {
        label: string;
        next?: string;
        recommend?: string[];
    }[];
};
export type SingleChoiceNode = {
    type: "single_choice";
    question: string;
    help?: string;
    multiple?: boolean;
    choices: {
        label: string;
        next?: string;
        recommend?: string[];
    }[];
};
export type YesNoNode = {
    type: "yes_no";
    question: string;
    yes?: YesNoBranch;
    no?: YesNoBranch;
};
export type EndNode = {
    type: "end";
    recommend: string[];
};
export type WizardNode = ChoiceNode | SingleChoiceNode | YesNoNode | EndNode | Record<string, any>;
export type Wizard = {
    title: string;
    root: string;
    nodes: Record<string, WizardNode>;
};
export type LogicFile = {
    v: string;
    wizards: Record<string, Wizard>;
};
