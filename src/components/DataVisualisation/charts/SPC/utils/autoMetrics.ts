import type { MetricCardProps } from "../../../components/MetricCard/MetricCard";

export type IntervalHint = "hourly" | "daily" | "weekly" | "monthly" | "quarterly" | "annually";

export interface DeltaConfig {
  strategy?: "previous" | "n-points" | "year-over-year";
  n?: number;
  absolute?: boolean; // when false => percentage change
  skipNulls?: boolean;
}

export interface AutoMetricsInput {
  values: Array<number | null | undefined>;
  dates?: Array<Date | string | number | undefined>;
  intervalHint?: IntervalHint;
  startDate?: Date | string | number;
  providedUnit?: string; // explicit unit from props (takes precedence)
  defaultUnit?: string; // fallback unit when not inferable
  /** Percent inference heuristic. Default '0-100' (values within 0..100). Use '0-1' for proportion series. */
  percentHeuristic?: "0-100" | "0-1";
  autoValue?: boolean;
  autoDelta?: boolean;
  autoMetadata?: boolean;
  deltaConfig?: DeltaConfig;
}

export interface AutoMetricsResult {
  value?: number;
  unit?: string;
  delta?: MetricCardProps["delta"];
  metadata?: string;
  latestDate?: Date;
  frequency?: IntervalHint;
}

function toDate(v: Date | string | number | undefined): Date | undefined {
  if (v == null) return undefined;
  const d = v instanceof Date ? v : new Date(v);
  return Number.isNaN(d.valueOf()) ? undefined : d;
}

function synthesizeDates(length: number, start: Date, hint?: IntervalHint): Date[] {
  const arr: Date[] = new Array(length);
  const d = new Date(start);
  for (let i = 0; i < length; i++) {
    arr[i] = new Date(d);
    switch (hint) {
      case "hourly": d.setHours(d.getHours() + 1); break;
      case "daily": d.setDate(d.getDate() + 1); break;
      case "weekly": d.setDate(d.getDate() + 7); break;
      case "monthly": d.setMonth(d.getMonth() + 1); break;
      case "quarterly": d.setMonth(d.getMonth() + 3); break;
      case "annually": d.setFullYear(d.getFullYear() + 1); break;
      default: break;
    }
  }
  return arr;
}

function inferFrequency(dates: (Date | undefined)[], fallback?: IntervalHint): IntervalHint | undefined {
  const valid = dates.filter(Boolean) as Date[];
  if (valid.length < 2) return fallback;
  const diffs: number[] = [];
  for (let i = 1; i < valid.length; i++) diffs.push(valid[i].getTime() - valid[i - 1].getTime());
  const sorted = diffs.sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const H = 60 * 60 * 1000;
  const D = 24 * H;
  if (median <= 2 * H) return "hourly";
  if (median <= 2 * D) return "daily";
  if (median <= 10 * D) return "weekly";
  if (median <= 45 * D) return "monthly";
  if (median <= 120 * D) return "quarterly";
  return "annually";
}

function formatLatest(dt: Date | undefined, freq?: IntervalHint): string | undefined {
  if (!dt) return undefined;
  try {
    switch (freq) {
      case "hourly":
        return new Intl.DateTimeFormat(undefined, { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short", year: "numeric" }).format(dt);
      case "daily":
        return new Intl.DateTimeFormat(undefined, { day: "2-digit", month: "short", year: "numeric" }).format(dt);
      case "weekly":
        return `Week of ${new Intl.DateTimeFormat(undefined, { day: "2-digit", month: "short", year: "numeric" }).format(dt)}`;
      case "monthly":
        return new Intl.DateTimeFormat(undefined, { month: "short", year: "numeric" }).format(dt);
      case "quarterly": {
        const q = Math.floor(dt.getMonth() / 3) + 1;
        return `Q${q} ${dt.getFullYear()}`;
      }
      case "annually":
        return `${dt.getFullYear()}`;
      default:
        return new Intl.DateTimeFormat(undefined, { day: "2-digit", month: "short", year: "numeric" }).format(dt);
    }
  } catch {
    return undefined;
  }
}

function inferUnit(
  values: (number | null)[],
  provided?: string,
  def?: string,
  percentHeuristic: "0-100" | "0-1" = "0-100"
): string | undefined {
  if (provided) return provided;
  if (def) return def;
  const vals = values.filter((v): v is number => v != null);
  if (!vals.length) return undefined;
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  if (percentHeuristic === "0-1") {
    if (min >= 0 && max <= 1 && max > 0) return "%";
  } else {
    if (min >= 0 && max <= 100 && max > 0) return "%";
  }
  return undefined;
}

function periodLabel(freq?: IntervalHint, hint?: IntervalHint, n = 1): string {
  const unit = freq || hint;
  switch (unit) {
    case "hourly": return n === 1 ? "last hour" : `last ${n} hours`;
    case "daily": return n === 1 ? "last day" : `last ${n} days`;
    case "weekly": return n === 1 ? "last week" : `last ${n} weeks`;
    case "monthly": return n === 1 ? "last month" : `last ${n} months`;
    case "quarterly": return n === 1 ? "last quarter" : `last ${n} quarters`;
    case "annually": return n === 1 ? "last year" : `last ${n} years`;
    default: return "previous";
  }
}

export function computeAutoMetrics(input: AutoMetricsInput): AutoMetricsResult {
  const {
    values: rawValues,
    dates: rawDates,
    intervalHint,
    startDate,
    providedUnit,
    defaultUnit,
    autoValue = true,
    autoDelta = true,
    autoMetadata = true,
    deltaConfig,
  } = input;

  const values = rawValues.map((v) => (typeof v === "number" ? v : v == null ? null : Number(v)));

  // Latest non-null index
  let lastIndex = -1;
  for (let i = values.length - 1; i >= 0; i--) {
    if (values[i] != null) {
      lastIndex = i;
      break;
    }
  }

  // Dates resolution: prefer provided dates; otherwise synthesise from hint+startDate
  let dates: (Date | undefined)[] = (rawDates || []).map(toDate);
  const anyDates = dates.some(Boolean);
  if (!anyDates) {
    const start = toDate(startDate);
    if (start && intervalHint) dates = synthesizeDates(values.length, start, intervalHint);
    else dates = new Array(values.length).fill(undefined);
  }

  const frequency = inferFrequency(dates, intervalHint);
  const unit = inferUnit(values, providedUnit, defaultUnit, input.percentHeuristic);

  const value = autoValue && lastIndex >= 0 && values[lastIndex] != null ? (values[lastIndex] as number) : undefined;

  // Baseline index for delta
  const cfg = { strategy: "previous" as const, n: 1, absolute: true, skipNulls: true, ...(deltaConfig || {}) };
  function findBaselineIndex(): number {
    if (lastIndex < 0) return -1;
    if (cfg.strategy === "previous" || cfg.strategy === "n-points") {
      let idx = lastIndex - (cfg.strategy === "previous" ? 1 : Math.max(1, cfg.n || 1));
      if (!cfg.skipNulls) return idx;
      for (let i = idx; i >= 0; i--) if (values[i] != null) return i;
      return -1;
    }
    // year-over-year: require dates
    const latestDate = dates[lastIndex];
    if (!latestDate) return -1;
    const target = new Date(latestDate);
    target.setFullYear(target.getFullYear() - 1);
    let bestIdx = -1;
    let bestDiff = Infinity;
    for (let i = 0; i < dates.length; i++) {
      const d = dates[i];
      if (!d || values[i] == null) continue;
      const diff = Math.abs(d.getTime() - target.getTime());
      if (diff < bestDiff) { bestDiff = diff; bestIdx = i; }
    }
    return bestIdx;
  }
  const baselineIndex = findBaselineIndex();
  const baselineValue = baselineIndex >= 0 ? values[baselineIndex] : null;

  let delta: MetricCardProps["delta"] | undefined;
  if (autoDelta && value != null && baselineValue != null) {
    const abs = value - (baselineValue as number);
    const useAbsolute = cfg.absolute !== false;
    const val = useAbsolute ? abs : ((baselineValue as number) === 0 ? 0 : (abs / Math.abs(baselineValue as number)) * 100);
    delta = {
      value: Number.isFinite(val) ? Number(val.toFixed(2)) : 0,
      isPercent: useAbsolute ? unit === "%" : true,
      period: `vs ${periodLabel(frequency, intervalHint, cfg.strategy === "n-points" ? Math.max(1, cfg.n || 1) : 1)}`,
    };
  }

  const latestDate = lastIndex >= 0 ? dates[lastIndex] : undefined;
  const metadata = autoMetadata ? (formatLatest(latestDate, frequency) ? `Latest: ${formatLatest(latestDate, frequency)}` : undefined) : undefined;

  return { value, unit, delta, metadata, latestDate, frequency };
}

export default computeAutoMetrics;
