#!/usr/bin/env node
// Simple CSV -> grouped JSON converter for SPC test data
// Usage: node tools/spc-csv-to-json.mjs <input.csv> <output.json>

import fs from 'node:fs';
import path from 'node:path';

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(Boolean);
  if (lines.length === 0) return [];
  // Expect header: Metric,Date,Value,Colour
  const header = lines[0].split(',').map(s => s.trim());
  const idxMetric = header.indexOf('Metric');
  const idxDate = header.indexOf('Date');
  const idxValue = header.indexOf('Value');
  const idxColour = header.indexOf('Colour');
  if (idxMetric === -1 || idxDate === -1 || idxValue === -1 || idxColour === -1) {
    throw new Error('Unexpected CSV header. Expected: Metric,Date,Value,Colour');
  }
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    // Basic split (safe for this dataset: no quoted commas)
    const parts = line.split(',');
    if (parts.length < 4) continue; // skip malformed
    const metric = parts[idxMetric]?.trim();
    const date = parts[idxDate]?.trim();
    const valueRaw = parts[idxValue]?.trim();
    const colour = parts[idxColour]?.trim();
    const value = valueRaw === '' ? null : Number(valueRaw);
    rows.push({ metric, date, value, colour });
  }
  return rows;
}

// Map CSV colour names to SPC variation judgement and hex, mirroring VARIATION_COLOR_TOKENS
// improvement: blue #00B0F0, concern: orange #E46C0A, neither/common-cause: grey #A6A6A6, suppressed: purple #490092
const COLOUR_MAP = {
  blue: { judgement: 'improvement', hex: '#00B0F0' },
  orange: { judgement: 'concern', hex: '#E46C0A' },
  grey: { judgement: 'neither', hex: '#A6A6A6' },
  gray: { judgement: 'neither', hex: '#A6A6A6' }, // US spelling fallback
  purple: { judgement: 'suppressed', hex: '#490092' },
};

function toIsoDateUK(d) {
  // Expect DD/MM/YYYY -> YYYY-MM-DD
  const [dd, mm, yyyy] = d.split('/').map(Number);
  if (!dd || !mm || !yyyy) return d; // fallback to original if unexpected
  const pad = (n) => String(n).padStart(2, '0');
  return `${yyyy}-${pad(mm)}-${pad(dd)}`;
}

function groupByMetric(rows) {
  const map = new Map();
  for (const r of rows) {
    if (!r.metric) continue;
    if (!map.has(r.metric)) map.set(r.metric, []);
    const colourKey = String(r.colour || '').toLowerCase();
    const mapped = COLOUR_MAP[colourKey] || { judgement: null, hex: null };
    map.get(r.metric).push({
      date: toIsoDateUK(r.date),
      value: r.value,
      colour: mapped.hex,
      judgement: mapped.judgement,
    });
  }
  // Sort each series by date (parse DD/MM/YYYY) for consistency
  const parseISO = (d) => {
    // date-only ISO (YYYY-MM-DD) sorts lexicographically; also provide numeric fallback
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
    return d;
  };
  for (const arr of map.values()) {
    arr.sort((a, b) => (parseISO(a.date) < parseISO(b.date) ? -1 : parseISO(a.date) > parseISO(b.date) ? 1 : 0));
  }
  // Determine improvement direction from the metric title
  const detectImprovement = (name) => {
    if (!name) return "";
    const n = String(name).toLowerCase();
    // Explicit keywords: high/higher is good/better => up
    if (/\b(high|higher)\b.*\b(good|better)\b/.test(n)) return "up";
    // low/lower is good/better => down
    if (/\b(low|lower)\b.*\b(good|better)\b/.test(n)) return "down";
    // neither explicitly
    if (/\bneither\b/.test(n)) return "neither";
    return "";
  };
  // Emit as array of objects for clarity
  return Array.from(map.entries()).map(([metric, data]) => ({
    metric,
    improvement: detectImprovement(metric),
    data,
  }));
}

async function main() {
  const [, , inPathArg, outPathArg] = process.argv;
  if (!inPathArg) {
    console.error('Usage: node tools/spc-csv-to-json.mjs <input.csv> <output.json>');
    process.exit(1);
  }
  const inputPath = path.resolve(inPathArg);
  const outputPath = path.resolve(outPathArg || inputPath.replace(/\.csv$/i, '.grouped.json'));
  const csv = fs.readFileSync(inputPath, 'utf8');
  const rows = parseCSV(csv);
  const grouped = groupByMetric(rows);
  // Pretty-print with stable key order
  fs.writeFileSync(outputPath, JSON.stringify(grouped, null, 2) + '\n', 'utf8');
  console.log(`Wrote ${grouped.length} metric groups to ${outputPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
