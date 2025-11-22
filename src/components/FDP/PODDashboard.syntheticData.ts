/**
 * Synthetic data generator for POD Dashboard metrics
 * Based on POD.csv metrics with national, regional, and ICB dimensions
 */

import { ImprovementDirection } from "../DataVisualisation/charts/SPC";
import { MetricPolarity } from "../DataVisualisation/charts/SPC/icons";

export type OrgLevel = "National" | "Region" | "ICB";

export interface PODMetric {
	id: string;
	level: OrgLevel;
	orgCode: string;
	orgName: string;
	theme: string;
	metricName: string;
	polarity: MetricPolarity;
	improvementDirection: ImprovementDirection;
	unit: string; // %, days, count, ratio, etc.
	target?: number;
	dates: string[]; // ISO YYYY-MM
	values: Array<number | null>; // 18 months
}

// NHS England Regions
const REGIONS = [
	{ code: "Y56", name: "London" },
	{ code: "Y58", name: "Midlands" },
	{ code: "Y59", name: "North East and Yorkshire" },
	{ code: "Y60", name: "North West" },
	{ code: "Y61", name: "South East" },
	{ code: "Y62", name: "South West" },
	{ code: "Y63", name: "East of England" },
];

// Sample ICBs (2-3 per region for demonstration)
const ICBS = [
	{ code: "QMJ", name: "NHS North West London ICB", region: "Y56" },
	{ code: "QRV", name: "NHS North East London ICB", region: "Y56" },
	{ code: "QWE", name: "NHS Birmingham and Solihull ICB", region: "Y58" },
	{ code: "QHL", name: "NHS Coventry and Warwickshire ICB", region: "Y58" },
	{ code: "QOQ", name: "NHS Humber and North Yorkshire ICB", region: "Y59" },
	{ code: "QF7", name: "NHS South Yorkshire ICB", region: "Y59" },
	{ code: "QYG", name: "NHS Greater Manchester ICB", region: "Y60" },
	{ code: "QE1", name: "NHS Cheshire and Merseyside ICB", region: "Y60" },
	{ code: "QU9", name: "NHS Surrey Heartlands ICB", region: "Y61" },
	{ code: "QNX", name: "NHS Kent and Medway ICB", region: "Y61" },
	{ code: "QSL", name: "NHS Devon ICB", region: "Y62" },
	{ code: "QJ2", name: "NHS Bristol, North Somerset and South Gloucestershire ICB", region: "Y62" },
	{ code: "QJG", name: "NHS Bedfordshire, Luton and Milton Keynes ICB", region: "Y63" },
	{ code: "QH8", name: "NHS Hertfordshire and West Essex ICB", region: "Y63" },
];

// Generate months (18 months from Mar 2024 to Aug 2025)
const genMonths = (startYear: number, startMonth1Based: number, count: number): string[] => {
	const out: string[] = [];
	let y = startYear, m = startMonth1Based - 1;
	for (let i = 0; i < count; i++) {
		const mm = (m + 1).toString().padStart(2, "0");
		out.push(`${y}-${mm}`);
		m += 1;
		if (m > 11) { m = 0; y += 1; }
	}
	return out;
};

const MONTHS_18 = genMonths(2024, 3, 18);

// Seeded random number generator for reproducible synthetic data
let seed = 42;
const seededRandom = (): number => {
	seed = (seed * 9301 + 49297) % 233280;
	return seed / 233280;
};

// Helper to generate realistic time series with trend and variation
const generateTimeSeries = (
	baseValue: number,
	trend: "improving" | "deteriorating" | "stable",
	volatility: number = 0.05,
	months: number = 18
): Array<number> => {
	const values: number[] = [];
	let current = baseValue;
	
	for (let i = 0; i < months; i++) {
		// Add trend
		if (trend === "improving") {
			current += (baseValue * 0.003); // ~0.3% improvement per month
		} else if (trend === "deteriorating") {
			current -= (baseValue * 0.003); // ~0.3% deterioration per month
		}
		
		// Add random variation using seeded random
		const variation = (seededRandom() - 0.5) * 2 * volatility * baseValue;
		const value = current + variation;
		
		values.push(Math.max(0, Number(value.toFixed(2))));
	}
	
	return values;
};

// Generate regional variation (regions typically ±5-15% from national)
const generateRegionalValue = (nationalValue: number): number => {
	const variation = (seededRandom() - 0.5) * 0.2; // ±10%
	return nationalValue * (1 + variation);
};

// Generate ICB variation (ICBs typically ±10-25% from their region)
const generateICBValue = (regionalValue: number): number => {
	const variation = (seededRandom() - 0.5) * 0.4; // ±20%
	return regionalValue * (1 + variation);
};

/**
 * Generate synthetic data for all metrics with national, regional, and ICB breakdown
 */
export const generatePODMetrics = (): PODMetric[] => {
	// Reset seed for reproducible data
	seed = 42;
	
	const metrics: PODMetric[] = [];

	// 1. A&E 4 hour performance
	const ae4hrNational = generateTimeSeries(72.5, "improving", 0.03);
	
	// National
	metrics.push({
		id: "ae-4hr-national",
		level: "National",
		orgCode: "ENG",
		orgName: "England",
		theme: "Urgent and emergency care",
		metricName: "A&E 4 hour performance",
		polarity: MetricPolarity.HigherIsBetter,
		improvementDirection: ImprovementDirection.Up,
		unit: "%",
		target: 76,
		dates: MONTHS_18,
		values: ae4hrNational,
	});

	// Regions
	REGIONS.forEach(region => {
		const regionalBase = generateRegionalValue(ae4hrNational[0]);
		const regionalValues = generateTimeSeries(regionalBase, "improving", 0.04);
		
		metrics.push({
			id: `ae-4hr-${region.code}`,
			level: "Region",
			orgCode: region.code,
			orgName: region.name,
			theme: "Urgent and emergency care",
			metricName: "A&E 4 hour performance",
			polarity: MetricPolarity.HigherIsBetter,
			improvementDirection: ImprovementDirection.Up,
			unit: "%",
			target: 76,
			dates: MONTHS_18,
			values: regionalValues,
		});
	});

	// ICBs
	ICBS.forEach(icb => {
		const regionalMetric = metrics.find(m => m.orgCode === icb.region && m.metricName === "A&E 4 hour performance");
		const icbBase = generateICBValue(regionalMetric?.values[0] || 72);
		const icbValues = generateTimeSeries(icbBase, "improving", 0.05);
		
		metrics.push({
			id: `ae-4hr-${icb.code}`,
			level: "ICB",
			orgCode: icb.code,
			orgName: icb.name,
			theme: "Urgent and emergency care",
			metricName: "A&E 4 hour performance",
			polarity: MetricPolarity.HigherIsBetter,
			improvementDirection: ImprovementDirection.Up,
			unit: "%",
			target: 76,
			dates: MONTHS_18,
			values: icbValues,
		});
	});

	// 2. Cancer 62-day Combined Standard
	const cancer62National = generateTimeSeries(68.5, "improving", 0.025);
	
	metrics.push({
		id: "cancer-62day-national",
		level: "National",
		orgCode: "ENG",
		orgName: "England",
		theme: "Cancer",
		metricName: "62-day Combined Standard",
		polarity: MetricPolarity.HigherIsBetter,
		improvementDirection: ImprovementDirection.Up,
		unit: "%",
		target: 75,
		dates: MONTHS_18,
		values: cancer62National,
	});

	REGIONS.forEach(region => {
		const regionalBase = generateRegionalValue(cancer62National[0]);
		const regionalValues = generateTimeSeries(regionalBase, "improving", 0.03);
		
		metrics.push({
			id: `cancer-62day-${region.code}`,
			level: "Region",
			orgCode: region.code,
			orgName: region.name,
			theme: "Cancer",
			metricName: "62-day Combined Standard",
			polarity: MetricPolarity.HigherIsBetter,
			improvementDirection: ImprovementDirection.Up,
			unit: "%",
			target: 75,
			dates: MONTHS_18,
			values: regionalValues,
		});
	});

	ICBS.forEach(icb => {
		const regionalMetric = metrics.find(m => m.orgCode === icb.region && m.metricName === "62-day Combined Standard");
		const icbBase = generateICBValue(regionalMetric?.values[0] || 68);
		const icbValues = generateTimeSeries(icbBase, "stable", 0.04);
		
		metrics.push({
			id: `cancer-62day-${icb.code}`,
			level: "ICB",
			orgCode: icb.code,
			orgName: icb.name,
			theme: "Cancer",
			metricName: "62-day Combined Standard",
			polarity: MetricPolarity.HigherIsBetter,
			improvementDirection: ImprovementDirection.Up,
			unit: "%",
			target: 75,
			dates: MONTHS_18,
			values: icbValues,
		});
	});

	// 3. RTT 18 weeks performance
	const rtt18National = generateTimeSeries(62.3, "deteriorating", 0.02);
	
	metrics.push({
		id: "rtt-18weeks-national",
		level: "National",
		orgCode: "ENG",
		orgName: "England",
		theme: "Elective care",
		metricName: "RTT 18 weeks performance",
		polarity: MetricPolarity.HigherIsBetter,
		improvementDirection: ImprovementDirection.Up,
		unit: "%",
		target: 92,
		dates: MONTHS_18,
		values: rtt18National,
	});

	REGIONS.forEach(region => {
		const regionalBase = generateRegionalValue(rtt18National[0]);
		const regionalValues = generateTimeSeries(regionalBase, "deteriorating", 0.025);
		
		metrics.push({
			id: `rtt-18weeks-${region.code}`,
			level: "Region",
			orgCode: region.code,
			orgName: region.name,
			theme: "Elective care",
			metricName: "RTT 18 weeks performance",
			polarity: MetricPolarity.HigherIsBetter,
			improvementDirection: ImprovementDirection.Up,
			unit: "%",
			target: 92,
			dates: MONTHS_18,
			values: regionalValues,
		});
	});

	ICBS.forEach(icb => {
		const regionalMetric = metrics.find(m => m.orgCode === icb.region && m.metricName === "RTT 18 weeks performance");
		const icbBase = generateICBValue(regionalMetric?.values[0] || 62);
		const icbValues = generateTimeSeries(icbBase, "stable", 0.03);
		
		metrics.push({
			id: `rtt-18weeks-${icb.code}`,
			level: "ICB",
			orgCode: icb.code,
			orgName: icb.name,
			theme: "Elective care",
			metricName: "RTT 18 weeks performance",
			polarity: MetricPolarity.HigherIsBetter,
			improvementDirection: ImprovementDirection.Up,
			unit: "%",
			target: 92,
			dates: MONTHS_18,
			values: icbValues,
		});
	});

	// 4. Ambulance Cat 2 mean response (minutes)
	const cat2National = generateTimeSeries(38.5, "improving", 0.04);
	
	metrics.push({
		id: "cat2-response-national",
		level: "National",
		orgCode: "ENG",
		orgName: "England",
		theme: "Urgent and emergency care",
		metricName: "Cat 2 mean response",
		polarity: MetricPolarity.LowerIsBetter,
		improvementDirection: ImprovementDirection.Down,
		unit: "minutes",
		target: 18,
		dates: MONTHS_18,
		values: cat2National,
	});

	REGIONS.forEach(region => {
		const regionalBase = generateRegionalValue(cat2National[0]);
		const regionalValues = generateTimeSeries(regionalBase, "improving", 0.05);
		
		metrics.push({
			id: `cat2-response-${region.code}`,
			level: "Region",
			orgCode: region.code,
			orgName: region.name,
			theme: "Urgent and emergency care",
			metricName: "Cat 2 mean response",
			polarity: MetricPolarity.LowerIsBetter,
			improvementDirection: ImprovementDirection.Down,
			unit: "minutes",
			target: 18,
			dates: MONTHS_18,
			values: regionalValues,
		});
	});

	ICBS.forEach(icb => {
		const regionalMetric = metrics.find(m => m.orgCode === icb.region && m.metricName === "Cat 2 mean response");
		const icbBase = generateICBValue(regionalMetric?.values[0] || 38);
		const icbValues = generateTimeSeries(icbBase, "stable", 0.06);
		
		metrics.push({
			id: `cat2-response-${icb.code}`,
			level: "ICB",
			orgCode: icb.code,
			orgName: icb.name,
			theme: "Urgent and emergency care",
			metricName: "Cat 2 mean response",
			polarity: MetricPolarity.LowerIsBetter,
			improvementDirection: ImprovementDirection.Down,
			unit: "minutes",
			target: 18,
			dates: MONTHS_18,
			values: icbValues,
		});
	});

	// 5. % waiting over 12 hours (type 1 and 2)
	const ae12hrNational = generateTimeSeries(2.8, "improving", 0.1);
	
	metrics.push({
		id: "ae-12hr-national",
		level: "National",
		orgCode: "ENG",
		orgName: "England",
		theme: "Urgent and emergency care",
		metricName: "% waiting over 12 hours from arrival (type 1 and 2)",
		polarity: MetricPolarity.LowerIsBetter,
		improvementDirection: ImprovementDirection.Down,
		unit: "%",
		target: 0,
		dates: MONTHS_18,
		values: ae12hrNational,
	});

	REGIONS.forEach(region => {
		const regionalBase = generateRegionalValue(ae12hrNational[0]);
		const regionalValues = generateTimeSeries(regionalBase, "improving", 0.12);
		
		metrics.push({
			id: `ae-12hr-${region.code}`,
			level: "Region",
			orgCode: region.code,
			orgName: region.name,
			theme: "Urgent and emergency care",
			metricName: "% waiting over 12 hours from arrival (type 1 and 2)",
			polarity: MetricPolarity.LowerIsBetter,
			improvementDirection: ImprovementDirection.Down,
			unit: "%",
			target: 0,
			dates: MONTHS_18,
			values: regionalValues,
		});
	});

	ICBS.forEach(icb => {
		const regionalMetric = metrics.find(m => m.orgCode === icb.region && m.metricName === "% waiting over 12 hours from arrival (type 1 and 2)");
		const icbBase = generateICBValue(regionalMetric?.values[0] || 2.8);
		const icbValues = generateTimeSeries(icbBase, "stable", 0.15);
		
		metrics.push({
			id: `ae-12hr-${icb.code}`,
			level: "ICB",
			orgCode: icb.code,
			orgName: icb.name,
			theme: "Urgent and emergency care",
			metricName: "% waiting over 12 hours from arrival (type 1 and 2)",
			polarity: MetricPolarity.LowerIsBetter,
			improvementDirection: ImprovementDirection.Down,
			unit: "%",
			target: 0,
			dates: MONTHS_18,
			values: icbValues,
		});
	});

	// 6. Average discharge delay (days)
	const dischargeDelayNational = generateTimeSeries(3.2, "improving", 0.08);
	
	metrics.push({
		id: "discharge-delay-national",
		level: "National",
		orgCode: "ENG",
		orgName: "England",
		theme: "Secondary care",
		metricName: "Average discharge delay, including 0 day delays (days)",
		polarity: MetricPolarity.LowerIsBetter,
		improvementDirection: ImprovementDirection.Down,
		unit: "days",
		dates: MONTHS_18,
		values: dischargeDelayNational,
	});

	REGIONS.forEach(region => {
		const regionalBase = generateRegionalValue(dischargeDelayNational[0]);
		const regionalValues = generateTimeSeries(regionalBase, "stable", 0.1);
		
		metrics.push({
			id: `discharge-delay-${region.code}`,
			level: "Region",
			orgCode: region.code,
			orgName: region.name,
			theme: "Secondary care",
			metricName: "Average discharge delay, including 0 day delays (days)",
			polarity: MetricPolarity.LowerIsBetter,
			improvementDirection: ImprovementDirection.Down,
			unit: "days",
			dates: MONTHS_18,
			values: regionalValues,
		});
	});

	ICBS.forEach(icb => {
		const regionalMetric = metrics.find(m => m.orgCode === icb.region && m.metricName === "Average discharge delay, including 0 day delays (days)");
		const icbBase = generateICBValue(regionalMetric?.values[0] || 3.2);
		const icbValues = generateTimeSeries(icbBase, "stable", 0.12);
		
		metrics.push({
			id: `discharge-delay-${icb.code}`,
			level: "ICB",
			orgCode: icb.code,
			orgName: icb.name,
			theme: "Secondary care",
			metricName: "Average discharge delay, including 0 day delays (days)",
			polarity: MetricPolarity.LowerIsBetter,
			improvementDirection: ImprovementDirection.Down,
			unit: "days",
			dates: MONTHS_18,
			values: icbValues,
		});
	});

	// 7. % cancers diagnosed at stage 1 or 2
	const earlyDiagnosisNational = generateTimeSeries(54.8, "improving", 0.02);
	
	metrics.push({
		id: "cancer-early-diagnosis-national",
		level: "National",
		orgCode: "ENG",
		orgName: "England",
		theme: "Cancer",
		metricName: "% cancers diagnosed at stage 1 or 2",
		polarity: MetricPolarity.HigherIsBetter,
		improvementDirection: ImprovementDirection.Up,
		unit: "%",
		target: 75,
		dates: MONTHS_18,
		values: earlyDiagnosisNational,
	});

	REGIONS.forEach(region => {
		const regionalBase = generateRegionalValue(earlyDiagnosisNational[0]);
		const regionalValues = generateTimeSeries(regionalBase, "improving", 0.025);
		
		metrics.push({
			id: `cancer-early-diagnosis-${region.code}`,
			level: "Region",
			orgCode: region.code,
			orgName: region.name,
			theme: "Cancer",
			metricName: "% cancers diagnosed at stage 1 or 2",
			polarity: MetricPolarity.HigherIsBetter,
			improvementDirection: ImprovementDirection.Up,
			unit: "%",
			target: 75,
			dates: MONTHS_18,
			values: regionalValues,
		});
	});

	ICBS.forEach(icb => {
		const regionalMetric = metrics.find(m => m.orgCode === icb.region && m.metricName === "% cancers diagnosed at stage 1 or 2");
		const icbBase = generateICBValue(regionalMetric?.values[0] || 54);
		const icbValues = generateTimeSeries(icbBase, "stable", 0.03);
		
		metrics.push({
			id: `cancer-early-diagnosis-${icb.code}`,
			level: "ICB",
			orgCode: icb.code,
			orgName: icb.name,
			theme: "Cancer",
			metricName: "% cancers diagnosed at stage 1 or 2",
			polarity: MetricPolarity.HigherIsBetter,
			improvementDirection: ImprovementDirection.Up,
			unit: "%",
			target: 75,
			dates: MONTHS_18,
			values: icbValues,
		});
	});

	// 8. Diagnostic waiting over 6 weeks
	const diagnosticNational = generateTimeSeries(22.5, "deteriorating", 0.06);
	
	metrics.push({
		id: "diagnostic-6weeks-national",
		level: "National",
		orgCode: "ENG",
		orgName: "England",
		theme: "Primary prevention",
		metricName: "Percentage of people waiting over 6 weeks for a diagnostic procedure or test",
		polarity: MetricPolarity.LowerIsBetter,
		improvementDirection: ImprovementDirection.Down,
		unit: "%",
		target: 1,
		dates: MONTHS_18,
		values: diagnosticNational,
	});

	REGIONS.forEach(region => {
		const regionalBase = generateRegionalValue(diagnosticNational[0]);
		const regionalValues = generateTimeSeries(regionalBase, "deteriorating", 0.07);
		
		metrics.push({
			id: `diagnostic-6weeks-${region.code}`,
			level: "Region",
			orgCode: region.code,
			orgName: region.name,
			theme: "Primary prevention",
			metricName: "Percentage of people waiting over 6 weeks for a diagnostic procedure or test",
			polarity: MetricPolarity.LowerIsBetter,
			improvementDirection: ImprovementDirection.Down,
			unit: "%",
			target: 1,
			dates: MONTHS_18,
			values: regionalValues,
		});
	});

	ICBS.forEach(icb => {
		const regionalMetric = metrics.find(m => m.orgCode === icb.region && m.metricName === "Percentage of people waiting over 6 weeks for a diagnostic procedure or test");
		const icbBase = generateICBValue(regionalMetric?.values[0] || 22);
		const icbValues = generateTimeSeries(icbBase, "stable", 0.08);
		
		metrics.push({
			id: `diagnostic-6weeks-${icb.code}`,
			level: "ICB",
			orgCode: icb.code,
			orgName: icb.name,
			theme: "Primary prevention",
			metricName: "Percentage of people waiting over 6 weeks for a diagnostic procedure or test",
			polarity: MetricPolarity.LowerIsBetter,
			improvementDirection: ImprovementDirection.Down,
			unit: "%",
			target: 1,
			dates: MONTHS_18,
			values: icbValues,
		});
	});

	return metrics;
};
