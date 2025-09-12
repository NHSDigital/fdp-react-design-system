import { SPCVariationIcon } from "./SPCIcon";
import { SPCAssuranceIcon } from "./SPCAssuranceIcon";
import { Direction } from "./SPCConstants";
import { AssuranceResult } from "./SPCConstants";
import { VariationIcon, ImprovementDirection } from "../SPCChart/logic/spcConstants";
import { Grid, Row, Column } from "../../../../../core";
import { Heading } from "../../../../Heading";

export default {
	title: "Data Visualisation/SPC/SPCIcons",
	component: SPCVariationIcon,
};

// ---- Single-icon interactive stories --------------------------------------

// A single SPCVariationIcon with controls to explore every state
export const VariationIconInteractive = {
	name: 'Interactive Variation Icon',
	args: {
		variant: 'classic' as const,
		size: 96,
		gradientWash: false,
		dropShadow: false,
		runLength: 3,
		variationIcon: VariationIcon.Improvement,
		improvementDirection: ImprovementDirection.Up,
		specialCauseNeutral: false,
		trend: undefined as undefined | Direction,
	},
	argTypes: {
		variant: { control: { type: 'radio' }, options: ['classic', 'triangle', 'triangleWithRun'] },
		size: { control: { type: 'range', min: 44, max: 300, step: 4 } },
		gradientWash: { control: 'boolean' },
		dropShadow: { control: 'boolean' },
		runLength: { control: { type: 'number', min: 1, max: 10, step: 1 } },
		variationIcon: { control: { type: 'radio' }, options: [
			VariationIcon.Improvement,
			VariationIcon.Concern,
			VariationIcon.Neither,
		] },
		improvementDirection: { control: { type: 'radio' }, options: [
			ImprovementDirection.Up,
			ImprovementDirection.Down,
			ImprovementDirection.Neither,
		] },
		specialCauseNeutral: { control: 'boolean' },
		trend: { control: { type: 'radio' }, options: [undefined, Direction.Higher, Direction.Lower] },
	},
	render: ({ variant, size, dropShadow, gradientWash, runLength, variationIcon, improvementDirection, specialCauseNeutral, trend }: any) => (
		<div style={{ textAlign: 'center' }}>
			<SPCVariationIcon
				data={{ variationIcon, improvementDirection, specialCauseNeutral, trend }}
				variant={variant}
				size={size}
				gradientWash={gradientWash}
				dropShadow={dropShadow}
				runLength={variant === 'triangleWithRun' ? runLength : undefined}
			/>
			<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif", fontSize: 16 }}>
				Toggle variant, icon, improvement direction or trend to preview all icon states.
			</div>
		</div>
	),
};

// A single SPCAssuranceIcon with controls to explore pass/fail/uncertain
export const AssuranceIconInteractive = {
	name: 'Interactive Assurance Icon',
	args: {
		status: AssuranceResult.Uncertain,
		size: 96,
		gradientWash: false,
		dropShadow: false,
	},
	argTypes: {
		status: { control: { type: 'radio' }, options: [AssuranceResult.Pass, AssuranceResult.Fail, AssuranceResult.Uncertain] },
		size: { control: { type: 'range', min: 44, max: 300, step: 4 } },
		gradientWash: { control: 'boolean' },
		dropShadow: { control: 'boolean' },
	},
	render: ({ status, size, gradientWash, dropShadow }: any) => (
		<div style={{ textAlign: 'center' }}>
			<SPCAssuranceIcon status={status} size={size} gradientWash={gradientWash} dropShadow={dropShadow} />
			<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif", fontSize: 12 }}>
				Toggle status to view Pass / Fail / Uncertain.
			</div>
		</div>
	),
};

export const AllAssuranceIcons = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
		<div style={{ display: 'flex', gap: 32 }}>
			{([AssuranceResult.Pass, AssuranceResult.Fail, AssuranceResult.Uncertain] as AssuranceResult[]).map(status => (
				<div key={status} style={{ textAlign: 'center' }}>
					<SPCAssuranceIcon status={status} size={100} dropShadow={false} />
					<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>{status}</div>
				</div>
			))}
		</div>
		<div style={{ display: 'flex', gap: 32 }}>
			{([AssuranceResult.Pass, AssuranceResult.Fail, AssuranceResult.Uncertain] as AssuranceResult[]).map(status => (
				<div key={status} style={{ textAlign: 'center' }}>
					<SPCAssuranceIcon status={status} size={100} dropShadow={false} gradientWash />
					<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>{status} (wash)</div>
				</div>
			))}
		</div>
	</div>
);

// ---- Comprehensive Matrices -------------------------------------------------

const cellStyle: React.CSSProperties = { textAlign: 'center', padding: 8 };
const labelStyle: React.CSSProperties = { marginTop: 4, fontSize: 12, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" };

interface MatrixConfig {
	variant: 'classic' | 'triangle' | 'triangleWithRun';
	runLength?: number;
	gradientWash?: boolean;
}

type ConceptId = 'improve' | 'deteriorate' | 'no-judgement' | 'common-cause';
const concepts: { id: ConceptId; label: string }[] = [
	{ id: 'improve', label: 'Improving' },
	{ id: 'deteriorate', label: 'Deteriorating' },
	{ id: 'no-judgement', label: 'Special Cause (No Judgement)' },
	{ id: 'common-cause', label: 'Common Cause' },
];

function VariationMatrix({ variant, runLength, gradientWash }: MatrixConfig) {
	// Chunk concepts into rows of two for nicer layout using the design system Grid
	const rows: typeof concepts[] = [] as any;
	for (let i = 0; i < concepts.length; i += 2) {
		rows.push(concepts.slice(i, i + 2) as any);
	}

	return (
		<Grid style={{ marginTop: 64 }}>
			<Row>
				<Column width="full">
					<Heading level={2}>{`Variant: ${variant}${gradientWash ? ' (wash)' : ''}`}</Heading>
				</Column>
			</Row>
			{rows.map((group, rowIdx) => (
				<Row key={rowIdx} style={{ gap: 24, marginBottom: 32 }}>
					{group.map(({ id, label }) => {
						return (
							<Column key={id} width="one-half">
								<div style={{ border: '1px solid #e0e0e0', padding: 12, borderRadius: 8 }}>
									<div style={{ fontWeight: 'bold', marginBottom: 8 }}>{label}</div>
									<Grid>
										<Row style={{ rowGap: 16, columnGap: 16 }}>
											{(() => {
												// Build column payloads depending on the concept
												type Col = { key: string; label: string; payloads: any[] };
												const cols: Col[] = [];
												if (id === 'improve' || id === 'deteriorate') {
													const icon = id === 'improve' ? VariationIcon.Improvement : VariationIcon.Concern;
													cols.push({
														key: 'up',
														label: 'Up',
														payloads: [{ variationIcon: icon, improvementDirection: ImprovementDirection.Up }],
													});
													cols.push({
														key: 'down',
														label: 'Down',
														payloads: [{ variationIcon: icon, improvementDirection: ImprovementDirection.Down }],
													});
												} else if (id === 'no-judgement' || id === 'common-cause') {
													const specialCauseNeutral = id === 'no-judgement';
													const icon = VariationIcon.Neither;
													cols.push({
														key: 'higher',
														label: 'Higher',
														payloads: [{ variationIcon: icon, specialCauseNeutral, trend: Direction.Higher }],
													});
													cols.push({
														key: 'lower',
														label: 'Lower',
														payloads: [{ variationIcon: icon, specialCauseNeutral, trend: Direction.Lower }],
													});
												}
												return cols.map(col => (
													<Column key={`${id}-${col.key}`} width={'one-half'}>
														<Row style={{ gap: 12 }}>
															{col.payloads.map((pl, idx) => (
																<Column key={idx} width={'full'}>
																	<div style={cellStyle}>
																		<SPCVariationIcon
																			data={pl}
																			size={72}
																			variant={variant}
																			runLength={variant === 'triangleWithRun' ? (runLength ?? 3) : undefined}
																			gradientWash={gradientWash}
																			dropShadow={false}
																		/>
																		<div style={labelStyle}>{col.label}</div>
																	</div>
																</Column>
															))}
														</Row>
													</Column>
												));
											})()}
										</Row>
									</Grid>
								</div>
							</Column>
						);
					})}
				</Row>
			))}
		</Grid>
	);
}

export const VariationIconMatrixClassic = () => (
	<>
		<VariationMatrix variant="classic" />
		<VariationMatrix variant="classic" gradientWash />
	</>
);

export const VariationIconMatrixTriangle = () => (
	<>
		<VariationMatrix variant="triangle" />
		<VariationMatrix variant="triangle" gradientWash />
	</>
);

export const VariationIconMatrixTriangleWithRun = () => (
	<>
		<VariationMatrix variant="triangleWithRun" runLength={3} />
		<VariationMatrix variant="triangleWithRun" runLength={4} gradientWash />
	</>
);

// Aggregate export used by docs page (MDX) expecting a combined showcase of variation icons
export const AllVariationIcons = () => (
	<>
		<VariationIconMatrixClassic />
		<VariationIconMatrixTriangle />
		<VariationIconMatrixTriangleWithRun />
	</>
);
