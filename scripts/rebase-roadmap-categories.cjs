#!/usr/bin/env node
/**
 * Rebase roadmap data so that every category AFTER the first starts on 1 Sep 2025.
 * Keeps internal rolling sequencing (workdays only) within each category, preserving
 * the original workday durations of each child task. Parent start/end dates updated
 * accordingly. First category left unchanged.
 */
const fs = require('fs');
const path = require('path');

const FILE = path.resolve(__dirname, '../src/components/ProductRoadmap/design-system.json');
if (!fs.existsSync(FILE)) {
  console.error('design-system.json not found at', FILE);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(FILE, 'utf8'));
const BASELINE = new Date('2025-09-01');

function isWorkday(d) { const day = d.getDay(); return day !== 0 && day !== 6; }
function nextWorkday(d) { const nd = new Date(d); while(!isWorkday(nd)) nd.setDate(nd.getDate()+1); return nd; }
function formatISO(d) { return d.toISOString().slice(0,10); }
function cloneDate(d){ return new Date(d.getTime()); }
function countWorkdaysInclusive(start, end) {
  const a = new Date(start); const b = new Date(end); if (b < a) return 1;
  let count = 0; const cur = new Date(a);
  while (cur <= b) { if (isWorkday(cur)) count++; cur.setDate(cur.getDate()+1); }
  return Math.max(1, count);
}
function addWorkdays(start, workdays) {
  let d = new Date(start); if (!isWorkday(d)) d = nextWorkday(d);
  let remaining = Math.max(1, workdays);
  let last = d;
  while (remaining > 0) { if (isWorkday(d)) { last = new Date(d); remaining--; if (remaining===0) break; } d.setDate(d.getDate()+1); }
  return last; // inclusive end
}

// Process categories except the first
data.categories.slice(1).forEach(cat => {
  // For each roadmap item (parent) rebase children sequentially
  cat.roadmapItems.forEach(parent => {
    if (!parent.childItems || !parent.childItems.length) return;
    // derive workday durations from existing dates
    const childMeta = parent.childItems.map(ch => {
      let start = ch.startDate ? new Date(ch.startDate) : null;
      let end = ch.endDate ? new Date(ch.endDate) : null;
      if (!start || !end || end < start) {
        // fallback to 1 workday
        return { id: ch.id, obj: ch, wd: 1 };
      }
      return { id: ch.id, obj: ch, wd: countWorkdaysInclusive(start, end) };
    });
    // Re-sequence starting from baseline (independent per category)
    let pointer = nextWorkday(BASELINE);
    childMeta.forEach(meta => {
      const start = nextWorkday(pointer);
      const end = addWorkdays(start, meta.wd);
      meta.obj.startDate = formatISO(start);
      meta.obj.endDate = formatISO(end);
      // advance pointer to next day after end
      const after = new Date(end); after.setDate(after.getDate()+1); pointer = nextWorkday(after);
    });
    // Update parent range
    parent.startDate = childMeta[0] ? childMeta[0].obj.startDate : parent.startDate;
    parent.endDate = childMeta[childMeta.length-1] ? childMeta[childMeta.length-1].obj.endDate : parent.endDate;
  });
});

fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
console.log('Rebased categories (except first) to start from 2025-09-01 maintaining internal workday durations.');