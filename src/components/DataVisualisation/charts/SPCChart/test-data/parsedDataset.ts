// Auto-parses the CSV test dataset into grouped metric series for SPCChart stories & tests.
// Lightweight parser (no external deps) – assumes simple comma separation with no quoted commas.
// Vite raw import (ensure ts config allows .d.ts augmentation). The file name contains a space.
// @ts-ignore - handled by custom declaration in local d.ts
import rawCsv from './Test Data.csv?raw';

export interface CsvRow { metric: string; date: Date; value: number }
export interface MetricSeries { metric: string; points: { x: Date; y: number }[] }

function parseDate(d: string): Date {
  // Expect dd/mm/yyyy
  const [day, month, year] = d.split('/').map(Number);
  return new Date(year, month - 1, day);
}

const lines = rawCsv.split(/\r?\n/).filter((l: string) => l.trim().length > 0);
// First line is header (Metric,Date,Value)
const dataLines = lines.slice(1).filter((l: string) => /,/.test(l));

const rowRegex = /^(.*?),(\d{2}\/\d{2}\/\d{4}),(\d+)/;
const rows: CsvRow[] = [];
for (const line of dataLines) {
  const m = line.match(rowRegex);
  if (!m) continue; // skip malformed / blank lines
  const metric = m[1].trim();
  const date = parseDate(m[2]);
  const value = Number(m[3]);
  if (!metric) continue;
  rows.push({ metric, date, value });
}

// Group by metric
const groupedMap = new Map<string, { x: Date; y: number }[]>();
rows.forEach(r => {
  if (!groupedMap.has(r.metric)) groupedMap.set(r.metric, []);
  groupedMap.get(r.metric)!.push({ x: r.date, y: r.value });
});

// Ensure each series is sorted by date ascending
groupedMap.forEach(arr => arr.sort((a,b)=> a.x.getTime() - b.x.getTime()));

export const metricSeries: MetricSeries[] = Array.from(groupedMap.entries()).map(([metric, points]) => ({ metric, points }));

// A lookup for quick access in tests
export const metricLookup: Record<string, { x: Date; y: number }[]> = metricSeries.reduce((acc, s) => { acc[s.metric] = s.points; return acc; }, {} as Record<string, { x: Date; y: number }[]>);

// Utility to sanitise a metric string to a safe Story export identifier
export function metricToExportName(metric: string): string {
  let name = metric.replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '');
  if (/^\d/.test(name)) name = '_' + name; // cannot start with digit
  return name || 'Metric';
}
