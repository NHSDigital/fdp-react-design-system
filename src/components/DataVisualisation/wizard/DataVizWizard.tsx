import * as React from "react";
import {
	Row,
	Column,
	Heading,
	Radios,
	Button,
	Panel,
	InsetText,
	Checkboxes,
	GridWidth,
	ColumnAlign,
} from "../../../components";
import WizardProgress from "./WizardProgress";
import ReviewAnswers from "./ReviewAnswers";
import {
	evaluateSingleChoice,
	evaluateYesNo,
	evaluateMultiChoice,
	getNode as getTypedNode,
	getWizard as getTypedWizard,
} from "../logic/wizardEngine";
import type { LogicFile } from "../logic/wizardTypes";

type WizardLogic = LogicFile | any;

export interface DataVizWizardProps {
	logic: WizardLogic;
	wizardId?: string; // default 'nhs_v1'
	storageKey?: string; // localStorage key for persistence
}

type Node = any;

function getWizardRoot(logic: WizardLogic, wizardId: string) {
	// Prefer typed helpers when available
	try {
		return getTypedWizard(logic as any, wizardId);
	} catch {
		return (logic as any).wizards[wizardId];
	}
}

function getNode(logic: WizardLogic, wizardId: string, nodeId: string): Node {
	try {
		return getTypedNode(getWizardRoot(logic, wizardId) as any, nodeId) as any;
	} catch {
		return (logic as any).wizards[wizardId].nodes[nodeId];
	}
}

function isClient() {
	return typeof window !== "undefined";
}

export const DataVizWizard: React.FC<DataVizWizardProps> = ({
	logic,
	wizardId = "nhs_v1",
	storageKey = "dv_wizard_state_v1",
}) => {
	const wiz = getWizardRoot(logic, wizardId);
	const rootId: string = wiz.root;
	type Answer = {
		nodeId: string;
		question?: string;
		value: string | string[];
		recommend?: string[];
	};
	const [path, setPath] = React.useState<string[]>([rootId]);
	const [answers, setAnswers] = React.useState<Answer[]>([]);
	const [result, setResult] = React.useState<string[] | null>(null);
	const [selectedValue, setSelectedValue] = React.useState<string>("");
	const [selectedValues, setSelectedValues] = React.useState<string[]>([]);

	React.useEffect(() => {
		if (!isClient()) return;
		try {
			const raw = window.localStorage.getItem(storageKey);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed.path) && Array.isArray(parsed.answers)) {
					setPath(parsed.path);
					setAnswers(parsed.answers);
					setResult(parsed.result ?? null);
				}
			}
		} catch {}
	}, [storageKey]);

	React.useEffect(() => {
		if (!isClient()) return;
		window.localStorage.setItem(
			storageKey,
			JSON.stringify({ path, answers, result })
		);
	}, [path, answers, result, storageKey]);

	const currentId = path[path.length - 1];
	const node = getNode(logic, wizardId, currentId);
	// no-op

	// Prefill/reset selection when node changes using any prior answer recorded
	React.useEffect(() => {
		const prev = answers.find((a) => a.nodeId === currentId);
		if (prev) {
			if (Array.isArray(prev.value)) {
				setSelectedValues(prev.value);
				setSelectedValue("");
			} else {
				setSelectedValue(prev.value);
				setSelectedValues([]);
			}
		} else {
			setSelectedValue("");
			setSelectedValues([]);
		}
	}, [currentId]);

	// Browser history: seed initial state and listen for back/forward
	React.useEffect(() => {
		if (!isClient()) return;
		const state = { path, answers, result };
		try {
			window.history.replaceState(state, "");
		} catch {}
		const onPop = (e: PopStateEvent) => {
			const st = (e.state || {}) as any;
			if (st && Array.isArray(st.path) && Array.isArray(st.answers)) {
				setPath(st.path);
				setAnswers(st.answers);
				setResult(st.result ?? null);
			}
		};
		window.addEventListener("popstate", onPop);
		return () => window.removeEventListener("popstate", onPop);
	}, []);

	// Contextual guidance for data shape page based on selected component
	const shapeContextHelp = React.useMemo(() => {
		if (currentId !== "components_shape") return null;
		const prevVal = answers.find((a) => a.nodeId === "components_root")
			?.value as any;
		const prevComponent: string | null = Array.isArray(prevVal)
			? prevVal[0] || null
			: prevVal || null;
		if (!prevComponent) return null;
		const labelBase = prevComponent
			.replace(/\s*\(.*\)$/, "")
			.trim()
			.toLowerCase();
		const comps = (logic as any)?.models?.abela?.components as
			| any[]
			| undefined;
		if (!Array.isArray(comps)) return null;
		let comp = comps.find(
			(c) =>
				(c.label || "")
					.toLowerCase()
					.replace(/\s*\(.*\)$/, "")
					.trim() === labelBase
		);
		if (!comp && labelBase.includes("resources")) {
			comp = comps.find((c) => c.id === "resources");
		}
		if (!comp) return null;
		const shapeNames: Record<string, string> = {
			time_series: "Time series",
			categories: "Categories",
			hierarchy: "Hierarchy",
			matrix: "Matrix",
			spatial: "Spatial",
			distribution: "Distribution",
		};
		const shapes: string[] = (comp.maps_to_data_shapes || [])
			.map((s: string) => shapeNames[s] || s)
			.filter(Boolean);
		if (shapes.length === 0 && !comp.notes) return null;
		return (
			<InsetText>
				<div>
					<strong>{prevComponent}</strong>: common data shapes
				</div>
				{shapes.length > 0 && (
					<ul style={{ marginTop: 8 }}>
						{shapes.map((s) => (
							<li key={s}>{s}</li>
						))}
					</ul>
				)}
				{comp.notes && <p style={{ marginTop: 8 }}>{comp.notes}</p>}
			</InsetText>
		);
	}, [answers, currentId, logic]);

	const pushHistoryState = (
		nextPath: string[],
		nextAnswers: Answer[],
		nextResult: string[] | null
	) => {
		if (!isClient()) return;
		const state = { path: nextPath, answers: nextAnswers, result: nextResult };
		try {
			window.history.pushState(state, "");
		} catch {}
	};
	const goBack = () => {
		// If we're viewing a result (end state without explicit end node), clear it first
		if (result) {
			setResult(null);
			setAnswers((a) => (a.length > 0 ? a.slice(0, -1) : a));
			return;
		}
		if (isClient()) {
			window.history.back();
		} else {
			setPath((p) => (p.length > 1 ? p.slice(0, -1) : p));
			setAnswers((a) => (a.length > 0 ? a.slice(0, -1) : a));
		}
	};
	const reset = () => {
		setPath([rootId]);
		setAnswers([]);
		setResult(null);
		setSelectedValue("");
		setSelectedValues([]);
		if (isClient()) {
			const state = { path: [rootId], answers: [], result: null };
			try {
				window.history.pushState(state, "");
			} catch {}
		}
	};

	// legacy helper removed in favour of explicit Next handling
	// This is the summary chart view.
	const renderEnd = (recommend: string[]) => (
		<>
			<Heading level={2}>Recommended charts</Heading>
			<Panel>
				<ul>
					{recommend.map((r) => (
						<li key={r}>
							<code>{r}</code>
						</li>
					))}
				</ul>
			</Panel>
			<Heading level={3}>Your answers</Heading>
			<ReviewAnswers
				items={answers}
				onChange={(i) => {
					// Jump to a previous step to change an answer
					setResult(null);
					setPath((p) => p.slice(0, i + 1));
					setAnswers((a) => a.slice(0, i));
				}}
			/>
			<Row>
				<Column width={GridWidth.OneHalf}>
					<Button onClick={goBack} variant="secondary">
						Back
					</Button>
					<Button onClick={reset} style={{ marginLeft: "1em" }}>
						Start again
					</Button>
				</Column>
			</Row>
		</>
	);

	let content: React.ReactNode = null;
	// If we have an explicit end node, show its recommendations
	if (node?.type === "end" && !result) {
		content = renderEnd((node as any).recommend || []);
	} else if (result) {
		content = renderEnd(result);
	} else if (!node) {
		content = <InsetText>Unknown node: {currentId}</InsetText>;
	} else if (node.type === "single_choice" || node.type === "choice") {
		const options = node.choices as {
			label: string;
			next?: string;
			recommend?: string[];
		}[];
		const multiple =
			node.type === "choice"
				? (node as any).mode === "multiple"
				: !!(node as any).multiple;
		content = (
			<Row>
				<Column width={GridWidth.OneHalf}>
					<Heading level={2}>
						{answers.length + 1}. {node.question}
					</Heading>
					{node.help && <InsetText>{node.help}</InsetText>}
					{shapeContextHelp}
					{multiple ? (
						<Checkboxes
							key={currentId}
							name={currentId}
							items={
								options.map((o) => ({ value: o.label, text: o.label })) as any
							}
							onChange={(vals: string[]) => setSelectedValues(vals)}
						/>
					) : (
						<Radios
							key={currentId}
							name={currentId}
							options={options.map((o) => ({
								label: o.label,
								value: o.label,
								text: o.label,
							}))}
							style={{ marginBottom: "1.5em" }}
							onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
								setSelectedValue(event.target.value)
							}
						/>
					)}
					<Row>
						<Column width={GridWidth.OneHalf}>
							{path.length > 1 && (
								<Button onClick={goBack} variant="secondary">
									Back
								</Button>
							)}
						</Column>
						<Column width={GridWidth.OneHalf}>
							<Button
								onClick={() => {
									if (multiple) {
										const res = evaluateMultiChoice(node, selectedValues);
										const nextAnswers = [
											...answers,
											{
												nodeId: currentId,
												question: node.question,
												value: selectedValues,
												recommend: res.recommend,
											},
										];
										if (res.nextId) {
											const nextPath = [...path, res.nextId];
											setAnswers(nextAnswers);
											setResult(null);
											setPath(nextPath);
											pushHistoryState(nextPath, nextAnswers, null);
										} else if (res.recommend && res.recommend.length) {
											setAnswers(nextAnswers);
											setResult(res.recommend);
											pushHistoryState(path, nextAnswers, res.recommend);
										}
									} else {
										const val = selectedValue;
										if (!val) return;
										const res = evaluateSingleChoice(node, val);
										const nextAnswers = [
											...answers,
											{
												nodeId: currentId,
												question: node.question,
												value: val,
												recommend: res.recommend,
											},
										];
										if (res.nextId) {
											const nextPath = [...path, res.nextId];
											setAnswers(nextAnswers);
											setResult(null);
											setPath(nextPath);
											pushHistoryState(nextPath, nextAnswers, null);
										} else if (res.recommend && res.recommend.length) {
											setAnswers(nextAnswers);
											setResult(res.recommend);
											pushHistoryState(path, nextAnswers, res.recommend);
										}
									}
								}}
								disabled={
									multiple ? selectedValues.length === 0 : !selectedValue
								}
							>
								Next
							</Button>
						</Column>
					</Row>
				</Column>
				<Column width={GridWidth.OneHalf}>
					<WizardProgress
						items={answers}
						onJumpTo={(i) => {
							setPath((p) => p.slice(0, i + 1));
							setAnswers((a) => a.slice(0, i));
						}}
					/>
				</Column>
			</Row>
		);
	} else if (node.type === "yes_no") {
		content = (
			<Row>
				<Column width={GridWidth.TwoThirds}>
					<Heading level={2}>{node.question}</Heading>
					<Radios
						key={currentId}
						name={currentId}
						options={[
							{ text: "Yes", value: "Yes" },
							{ text: "No", value: "No" },
						]}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
							setSelectedValue(event.target.value)
						}
					/>
					<Row>
						<Column width={GridWidth.OneHalf}>
							<Button onClick={goBack} variant="secondary">
								Back
							</Button>
						</Column>
						<Column width={GridWidth.OneHalf} align={ColumnAlign.Right}>
							<Button
								onClick={() => {
									const val = selectedValue;
									if (!val) return;
									const res = evaluateYesNo(
										node,
										val.toLowerCase() === "yes" ? "yes" : "no"
									);
									const nextAnswers = [
										...answers,
										{
											nodeId: currentId,
											question: node.question,
											value: val,
											recommend: res.recommend,
										},
									];
									if (res.nextId) {
										const nextPath = [...path, res.nextId];
										setAnswers(nextAnswers);
										setResult(null);
										setPath(nextPath);
										pushHistoryState(nextPath, nextAnswers, null);
									} else if (res.recommend && res.recommend.length) {
										setAnswers(nextAnswers);
										setResult(res.recommend);
										pushHistoryState(path, nextAnswers, res.recommend);
									}
								}}
								disabled={!selectedValue}
							>
								Next
							</Button>
						</Column>
					</Row>
				</Column>
				<Column width={GridWidth.OneThird}>
					<WizardProgress
						items={answers}
						currentQuestion={node.question}
						onJumpTo={(i) => {
							setPath((p) => p.slice(0, i + 1));
							setAnswers((a) => a.slice(0, i));
						}}
					/>
				</Column>
			</Row>
		);
	} else {
		content = <InsetText>Unsupported node type: {node.type}</InsetText>;
	}

	return (
		<>
			{/* <Heading level={1}>NHS Visualisation Selector</Heading> */}
			{content}
		</>
	);
};

export default DataVizWizard;
