import * as React from "react";
import ChartRoot from "../../core/ChartRoot";
import { useChartContext } from "../../core/ChartRoot";
import { BandScalesProvider } from "../../core/BandScalesProvider";
import GridLines from "../../charts/GridLines/GridLines";
import Axis from "../../charts/Axis/Axis";
import BarSeriesPrimitive, {
  type BarSeries,
  type BarDatum,
} from "../../series/BarSeriesPrimitive";

export interface SimpleBarChartProps {
  data:
    | Record<string, number>
    | Array<{ label: string; value: number }>
    | Array<[string, number]>; // allow tuples too
  ariaLabel: string;
  width?: number;
  height?: number;
  margin?: { left: number; right: number; top: number; bottom: number };
  yLabel?: string;
  palette?: "categorical" | "region";
  colors?: string[];
  colorMode?: "series" | "category"; // default category => distinct colours per bar
  groupGap?: number;
  minBarWidth?: number;
  gradient?: boolean; // maps to gradientFill
  opacity?: number;
  flatFillOpacity?: number;
}

function toSeries(
  data:
    | Record<string, number>
    | Array<{ label: string; value: number }>
    | Array<[string, number]>
): BarSeries {
  let entries: BarDatum[];
  if (Array.isArray(data)) {
    if (data.length && Array.isArray(data[0])) {
      // tuple form
      entries = (data as Array<[string, number]>).map(([label, value]) => ({
        x: label,
        y: Number(value ?? 0),
      }));
    } else {
      entries = (data as Array<{ label: string; value: number }>).map((d) => ({
        x: d.label,
        y: Number(d.value ?? 0),
      }));
    }
  } else {
    entries = Object.entries(data).map(([k, v]) => ({ x: k, y: Number(v ?? 0) }));
  }
  return { id: "values", data: entries };
}

const DEFAULT_MARGIN = { left: 56, bottom: 48, right: 16, top: 12 } as const;

const SimpleBarChart: React.FC<SimpleBarChartProps> = ({
  data,
  ariaLabel,
  width = 720,
  height = 320,
  margin = DEFAULT_MARGIN,
  yLabel,
  palette = "categorical",
  colors,
  colorMode = "category",
  groupGap,
  minBarWidth,
  gradient = false,
  opacity = 1,
  flatFillOpacity = 1,
}) => {
  const series = React.useMemo(() => toSeries(data), [data]);
  // BarSeriesPrimitive currently types parseX as returning Date; for band scales we can pass through the raw label.
  const parseX = (d: BarDatum) => d.x as any;

  const Inner: React.FC = () => {
    const dims = useChartContext();
    if (!dims) return null;
    return (
      <svg width={dims.width} height={dims.height} role="img">
        <g transform={`translate(${dims.margin.left},${dims.margin.top})`}>
          <GridLines axis="y" />
          <BarSeriesPrimitive
            series={series}
            seriesIndex={0}
            seriesCount={1}
            palette={palette}
            parseX={parseX}
            groupGap={groupGap}
            minBarWidth={minBarWidth}
            colors={colors}
            colorMode={colorMode}
            gradientFill={!!gradient}
            opacity={opacity}
            flatFillOpacity={flatFillOpacity}
          />
          <Axis type="y" label={yLabel} />
          <Axis type="x" />
        </g>
      </svg>
    );
  };

  return (
    <ChartRoot width={width} height={height} margin={margin} ariaLabel={ariaLabel}>
      <BandScalesProvider series={[series] as any}>
        <Inner />
      </BandScalesProvider>
    </ChartRoot>
  );
};

export default SimpleBarChart;
