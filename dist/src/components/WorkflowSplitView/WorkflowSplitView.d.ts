import type { WorkflowSplitViewProps, WorkflowStep } from "./WorkflowSplitView.types";
import "./WorkflowSplitView.scss";
export declare function WorkflowSplitView<ID = string, T extends WorkflowStep<ID> = WorkflowStep<ID>>(props: WorkflowSplitViewProps<ID, T>): import("react/jsx-runtime").JSX.Element;
export default WorkflowSplitView;
