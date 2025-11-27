import * as React from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import ScaleContext, { type ScaleContextValue } from "./ScaleContext";
import { useChartContext } from "./ChartRoot";

export interface BandDatum {
	x: string;
	y: number;
}
export interface BandSeries {
	data: BandDatum[];
}

export interface BandScalesProviderProps {
	series: BandSeries[];
	innerWidth?: number;
	innerHeight?: number;
	paddingInner?: number; // band scale inner padding
	paddingOuter?: number; // band scale outer padding
	children: React.ReactNode;
	yTickCount?: number;
}

export const BandScalesProvider: React.FC<BandScalesProviderProps> = ({
	series,
	innerWidth: iw,
	innerHeight: ih,
	paddingInner = 0.1,
	paddingOuter = 0.05,
	children,
	yTickCount = 5,
}) => {
	const chart = useChartContext();
	const innerWidth = iw ?? chart?.innerWidth ?? 0;
	const innerHeight = ih ?? chart?.innerHeight ?? 0;
	const allData = React.useMemo(() => series.flatMap((s) => s.data), [series]);
	
	const xDomain = React.useMemo(() => {
		const set = new Set<string>();
		allData.forEach((d) => set.add(d.x));
		return Array.from(set);
	}, [allData]);
	
	const yMax = React.useMemo(
		() => Math.max(0, ...allData.map((d) => d.y)),
		[allData]
	);
	
	const xScale = React.useMemo(
		() =>
			scaleBand<string>()
				.domain(xDomain)
				.range([0, innerWidth])
				.paddingInner(paddingInner)
				.paddingOuter(paddingOuter),
		[xDomain, innerWidth, paddingInner, paddingOuter]
	);
	
	const yScale = React.useMemo(
		() => scaleLinear().domain([0, yMax]).nice().range([innerHeight, 0]),
		[yMax, innerHeight]
	);
	
	const value: ScaleContextValue = React.useMemo(
		() => ({
			xScale,
			yScale,
			getXTicks: () => xDomain as any,
			getYTicks: (c = yTickCount) => yScale.ticks(c),
		}),
		[xScale, yScale, xDomain, yTickCount]
	);
	return (
		<ScaleContext.Provider value={value}>{children}</ScaleContext.Provider>
	);
};

export default BandScalesProvider;
