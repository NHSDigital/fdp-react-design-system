import { SpcVariationIcon } from "./SPCIcon";
import { SPCAssuranceIcon } from "./SPCAssuranceIcon";
import { VariationIcon } from "../SPCChart/logic/spc";
import { Direction, VariationJudgement, MetricPolarity } from "./SPCConstants";
import { AssuranceResult } from "./SPCConstants";
import { Grid, Row, Column } from "../../../../../core";
import { Heading } from "../../../../Heading";

export default {
	title: "Data Visualisation/SPC/SPCIcons",
	component: SpcVariationIcon,
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

// Explicit storyName removed to satisfy no-redundant-story-name lint rule.

// ---- Comprehensive Matrices -------------------------------------------------

const cellStyle: React.CSSProperties = { textAlign: 'center', padding: 8 };
const labelStyle: React.CSSProperties = { marginTop: 4, fontSize: 12, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" };

interface MatrixConfig {
	variant: 'classic' | 'triangle' | 'triangleWithRun';
	runLength?: number;
	gradientWash?: boolean;
}

const judgements = [
	VariationJudgement.Improving,
	VariationJudgement.Deteriorating,
	VariationJudgement.No_Judgement,
	VariationJudgement.None,
] as const;

const polarities = [
	MetricPolarity.HigherIsBetter,
	MetricPolarity.LowerIsBetter,
] as const; // context dependent excluded for brevity

const judgementLabel = (j: VariationJudgement) => {
	switch (j) {
		case VariationJudgement.Improving: return 'Improving';
		case VariationJudgement.Deteriorating: return 'Deteriorating';
		case VariationJudgement.No_Judgement: return 'No Judgement';
		case VariationJudgement.None: return 'Common Cause';
		default: return String(j);
	}
};

const polarityLabel = (p: MetricPolarity) => p === MetricPolarity.HigherIsBetter ? 'Higher better' : 'Lower better';

function VariationMatrix({ variant, runLength, gradientWash }: MatrixConfig) {
	// Chunk judgements into rows of two for nicer layout using the design system Grid
	const rows: typeof judgements[] = [] as any;
	for (let i = 0; i < judgements.length; i += 2) {
		rows.push(judgements.slice(i, i + 2) as any);
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
					{group.map(j => {
						return (
							<Column key={j} width="one-half">
								<div style={{ border: '1px solid #e0e0e0', padding: 12, borderRadius: 8 }}>
									<div style={{ fontWeight: 'bold', marginBottom: 8 }}>{judgementLabel(j)}</div>
									<Grid>
										<Row style={{ rowGap: 16, columnGap: 16 }}>
											{polarities.map(p => {
												const basePayload: any = { judgement: j, polarity: p };
												const needsTrend = j === VariationJudgement.No_Judgement || j === VariationJudgement.None;
												const payloads = needsTrend ? [
													{ ...basePayload, trend: Direction.Higher },
													{ ...basePayload, trend: Direction.Lower }
												] : [basePayload];
												// Column width adapts: when trend variants (two payloads) we keep each polarity column half width; when single we allow full width
												const columnWidth = 'one-half';
												return (
													<Column key={p + '-' + j} width={columnWidth}>
														<Row style={{ gap: 12 }}>
															{payloads.map((pl, idx) => (
																<Column key={idx} width={needsTrend ? 'one-half' : 'full'}>
																	<div style={cellStyle}>
																		<SpcVariationIcon
																			data={pl}
																			size={72}
																			variant={variant}
																			runLength={variant === 'triangleWithRun' ? (runLength ?? 3) : undefined}
																			gradientWash={gradientWash}
																		/>
																		<div style={labelStyle}>
																			{polarityLabel(p)}{needsTrend ? ` / ${pl.trend === Direction.Higher ? 'Higher' : 'Lower'}` : ''}
																		</div>
																	</div>
																</Column>
															))}
														</Row>
													</Column>
												);
											})}
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
