import { buildSpcV26a as buildSpc, ImprovementDirection, ChartType } from "../src/components/DataVisualisation/charts/SPC/engine";

type SPCDatum = { x: Date; y: number };

const makeStable = (len = 18, base = 50): SPCDatum[] => {
	const start = Date.now() - (len - 1) * 86400000;
	return Array.from({ length: len }, (_, i) => ({
		x: new Date(start + i * 86400000),
		y: base + Math.sin(i / 3) * 0.5,
	}));
};

const buildImprovement = () => {
	const d = makeStable();
	for (let i = d.length - 6; i < d.length; i++) d[i].y += 8;
	return d;
};
const buildConcern = () => {
	const d = makeStable();
	d[d.length - 1].y -= 10;
	return d;
};
const buildSuppressedUp = () => {
	const d = makeStable();
	d[d.length - 1].y += 40;
	return d;
};
const buildSuppressedDown = () => {
	const d = makeStable();
	d[d.length - 1].y -= 40;
	return d;
};

function summarise(name: string, data: SPCDatum[], imp: ImprovementDirection) {
	const baseInput = data.map((p) => ({ x: +p.x, value: p.y }));
	const orthodox = buildSpc({ data: baseInput, metricImprovement: imp, chartType: ChartType.XmR });
	const oLast = orthodox.rows.at(-1)!;
	const parity = {
		orthodoxVariation: oLast.variationIcon,
		orthodoxImprovement: oLast.specialCauseImprovementValue,
		orthodoxConcern: oLast.specialCauseConcernValue,
	};
	console.log(`[${name}]`, parity);
}

summarise("common", makeStable(), ImprovementDirection.Neither);
summarise("improvement", buildImprovement(), ImprovementDirection.Up);
summarise("concern", buildConcern(), ImprovementDirection.Up);
summarise("suppressedUp", buildSuppressedUp(), ImprovementDirection.Up);
summarise("suppressedDown", buildSuppressedDown(), ImprovementDirection.Down);
