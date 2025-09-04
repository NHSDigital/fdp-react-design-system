#!/usr/bin/env node
/**
 * Distribute child task dates sequentially inside each parent item window.
 * Strategy:
 * 1. Infer parent window from min(startDate) and max(endDate) of existing children.
 * 2. Convert to day-based range [start, endExclusive) where endExclusive = original max endDate + 1 month (if all children share same end date month == start date month, we keep endMonth+1 anyway to get at least 1 segment).
 * 3. Split the window into N sequential segments (N = number of children).
 * 4. Assign each child startDate = segmentStart (YYYY-MM-DD) and endDate = segmentEnd - 1 day.
 * 5. Ensure minimum duration of 5 days; if a segment is shorter, extend its end forward.
 * 6. For readability constrain to within original window.
 */
const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../src/components/ProductRoadmap/design-system.json');
const json = JSON.parse(fs.readFileSync(file, 'utf8'));

function addMonths(date, m){ const d = new Date(date); d.setUTCMonth(d.getUTCMonth()+m); return d; }
function format(d){ return d.toISOString().slice(0,10); }
function daysBetween(a,b){ return Math.round((b - a)/(1000*60*60*24)); }
function clampDate(d, min, max){ if(d < min) return new Date(min); if(d>max) return new Date(max); return d; }

for (const cat of json.categories) {
  for (const parent of cat.roadmapItems) {
    const children = parent.children || parent.childItems;
    if(!children || !children.length) continue;
    // parse existing boundaries
    const starts = children.map(c => new Date(c.startDate || parent.startDate || '2025-01-01'));
    const ends = children.map(c => new Date(c.endDate || c.startDate || parent.endDate || '2025-01-02'));
    let minStart = new Date(Math.min(...starts.map(d=>d.getTime())));
    let maxEnd = new Date(Math.max(...ends.map(d=>d.getTime())));
    // Ensure window at least 14 days
    if(daysBetween(minStart,maxEnd) < 14){ maxEnd = addMonths(minStart,1); }
    const endExclusive = maxEnd; // treat stored end as exclusive-ish for segmentation
    const count = children.length;
    const totalDays = Math.max(1, daysBetween(minStart, endExclusive));
    const seg = totalDays / count;
    for (let i=0;i<count;i++){
      const segStart = new Date(minStart.getTime() + i*seg*24*3600*1000);
      const segEndRaw = new Date(minStart.getTime() + (i+1)*seg*24*3600*1000);
      // enforce min 5 days length
      let segEnd = segEndRaw;
      if(daysBetween(segStart, segEnd) < 5){ segEnd = new Date(segStart.getTime() + 5*24*3600*1000); }
      if (i === count-1) segEnd = endExclusive; // last child to end
      segEnd = clampDate(segEnd, segStart, endExclusive);
      children[i].startDate = format(segStart);
      children[i].endDate = format(segEnd);
    }
    parent.childItems = children; // normalize
    delete parent.children; // prefer childItems key
  }
}

fs.writeFileSync(file, JSON.stringify(json, null, 2) + '\n');
console.log('Updated child task dates sequentially in', file);
