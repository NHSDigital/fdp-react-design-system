import React from "react";
import { SpcVariationIcon } from "./SPCIcon";
import { SPCAssuranceIcon } from "./SPCAssuranceIcon";
import { VariationIcon } from "../SPCChart/logic/spc";
import { Direction } from "./SPCConstants";
import { AssuranceResult } from "./SPCConstants";
import { Grid, Row, Column } from "../../../../core";
import { Heading } from "../../../Heading";

export default {
	title: "Data Visualisation/SPC/SPCIcons",
	component: SpcVariationIcon,
};

export const AllVariationIcons = () => (
	<>
		<Grid>
			<Row style={{marginBottom: 32 }}>
				<Column width="full">
					<Heading level={2}>Original Icons</Heading>
				</Column>
			</Row>
			<Row style={{ marginBottom: 32 }}>
				{(["improvement", "concern", "neither"] as VariationIcon[]).map(
					(icon) => (
						<Column
							key={icon}
							width="one-third"
							style={{ textAlign: "center" }}
						>
							<SpcVariationIcon
								dropShadow={false}
								data={{ variationIcon: icon }}
								size={100}
							/>
							<div
								style={{
									marginTop: 8,
									fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
								}}
							>
								{icon}
							</div>
						</Column>
					)
				)}
				{/* No Judgement (none) - Higher */}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{
							variationIcon: VariationIcon.None,
							trend: Direction.Higher,
						}}
						size={100}
					/>
					<div
						style={{
							marginTop: 8,
							fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
						}}
					>
						none (higher)
					</div>
				</Column>
				{/* No Judgement (none) - Lower */}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Lower }}
						size={100}
					/>
					<div
						style={{
							marginTop: 8,
							fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
						}}
					>
						none (lower)
					</div>
				</Column>
			</Row>
		</Grid>

		{/* Gradient Wash Variants */}
		<Grid>
			<Row style={{ marginTop: 64, marginBottom: 32 }}>
				<Column width="full">
					<Heading level={2}>Original Icons – Gradient Wash</Heading>
				</Column>
			</Row>
			<Row style={{ marginBottom: 32 }}>
				{(["improvement", "concern", "neither"] as VariationIcon[]).map(
					(icon) => (
						<Column
							key={icon}
							width="one-third"
							style={{ textAlign: "center" }}
						>
							<SpcVariationIcon
								dropShadow={false}
								data={{ variationIcon: icon }}
								size={100}
								gradientWash
							/>
							<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>{icon} (gradient)</div>
						</Column>
					)
				)}
				{/* No Judgement (none) - Higher */}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Higher }}
						size={100}
						gradientWash
					/>
					<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>none (higher)</div>
				</Column>
				{/* No Judgement (none) - Lower */}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Lower }}
						size={100}
						gradientWash
					/>
					<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>none (lower)</div>
				</Column>
			</Row>
		</Grid>

		<Grid>
			<Row style={{ marginTop: 64, marginBottom: 32 }}>
				<Column width="full">
					<Heading level={2}>Triangle Variation Icons</Heading>
				</Column>
			</Row>
			<Row style={{ marginBottom: 32 }}>
				{(["improvement", "concern", "neither"] as VariationIcon[]).map(
					(icon) => (
						<Column
							key={icon}
							width="one-third"
							style={{ textAlign: "center" }}
						>
							<SpcVariationIcon
								dropShadow={false}
								data={{ variationIcon: icon }}
								size={100}
								variant="triangle"
							/>
							<div
								style={{
									marginTop: 8,
									fontFamily:
										"'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
								}}
							>
								{icon}
							</div>
						</Column>
					)
				)}
				{/* No Judgement (none) - Higher */}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{
							variationIcon: VariationIcon.None,
							trend: Direction.Higher,
						}}
						size={100}
						variant="triangle"
					/>
					<div
						style={{
							marginTop: 8,
							fontFamily:
								"'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
						}}
					>
						none (higher)
					</div>
				</Column>
				{/* No Judgement (none) - Lower */}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Lower }}
						size={100}
						variant="triangle"
					/>
					<div
						style={{
							marginTop: 8,
							fontFamily:
								"'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
						}}
					>
						none (lower)
					</div>
				</Column>
			</Row>
		</Grid>

		{/* Triangle Gradient Wash */}
		<Grid>
			<Row style={{ marginTop: 64, marginBottom: 32 }}>
				<Column width="full">
					<Heading level={2}>Triangle Variation Icons – Gradient Wash</Heading>
				</Column>
			</Row>
			<Row style={{ marginBottom: 32 }}>
				{(["improvement", "concern", "neither"] as VariationIcon[]).map(
					(icon) => (
						<Column key={icon} width="one-third" style={{ textAlign: "center" }}>
							<SpcVariationIcon
								dropShadow={false}
								data={{ variationIcon: icon }}
								size={100}
								variant="triangle"
								gradientWash
							/>
							<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>{icon} (gradient)</div>
						</Column>
					)
				)}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Higher }}
						size={100}
						variant="triangle"
						gradientWash
					/>
					<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>none (higher)</div>
				</Column>
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Lower }}
						size={100}
						variant="triangle"
						gradientWash
					/>
					<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>none (lower)</div>
				</Column>
			</Row>
		</Grid>

		<Grid>
			<Row style={{ marginTop: 64, marginBottom: 32 }}>
				<Column width="full">
					<Heading level={2}>Triangle Variation Icons with Run Length</Heading>
				</Column>
			</Row>
			<Row>
				{(["improvement", "concern", "neither"] as VariationIcon[]).map(
					(icon, idx) => (
						<Column
							key={icon}
							width="one-third"
							style={{ textAlign: "center" }}
						>
							<SpcVariationIcon
								dropShadow={false}
								data={{ variationIcon: icon }}
								size={100}
								variant="triangleWithRun"
								runLength={2}
							/>
							<div
								style={{
									marginTop: 8,
									fontFamily:
										"'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
								}}
							>
								{icon}
							</div>
						</Column>
					)
				)}
			</Row>
			<Row style={{ marginTop: 32, marginBottom: 32 }}>
				{/* No Judgement (none) - Higher */}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{
							variationIcon: VariationIcon.None,
							trend: Direction.Higher,
						}}
						size={100}
						variant="triangleWithRun"
						runLength={3}
					/>
					<div
						style={{
							marginTop: 8,
							fontFamily:
								"'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
						}}
					>
						none (higher)
					</div>
				</Column>
				{/* No Judgement (none) - Lower */}
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Lower }}
						size={100}
						variant="triangleWithRun"
						runLength={2}
					/>
					<div
						style={{
							marginTop: 8,
							fontFamily:
								"'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif",
						}}
					>
						none (lower)
					</div>
				</Column>
			</Row>
		</Grid>

		{/* Triangle With Run Gradient Wash */}
		<Grid>
			<Row style={{ marginTop: 64, marginBottom: 32 }}>
				<Column width="full">
					<Heading level={2}>Triangle Variation Icons with Run Length – Gradient Wash</Heading>
				</Column>
			</Row>
			<Row>
				{(["improvement", "concern", "neither"] as VariationIcon[]).map(
					(icon) => (
						<Column key={icon} width="one-third" style={{ textAlign: "center" }}>
							<SpcVariationIcon
								dropShadow={false}
								data={{ variationIcon: icon }}
								size={100}
								variant="triangleWithRun"
								runLength={2}
								gradientWash
							/>
							<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>{icon} (gradient)</div>
						</Column>
					)
				)}
			</Row>
			<Row style={{ marginTop: 32, marginBottom: 32 }}>
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Higher }}
						size={100}
						variant="triangleWithRun"
						runLength={3}
						gradientWash
					/>
					<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>none (higher)</div>
				</Column>
				<Column width="one-third" style={{ textAlign: "center" }}>
					<SpcVariationIcon
						dropShadow={false}
						data={{ variationIcon: VariationIcon.None, trend: Direction.Lower }}
						size={100}
						variant="triangleWithRun"
						runLength={2}
						gradientWash
					/>
					<div style={{ marginTop: 8, fontFamily: "'Frutiger W01', Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>none (lower)</div>
				</Column>
			</Row>
		</Grid>
	</>
);

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
