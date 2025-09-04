#!/usr/bin/env node
/**
 * Rolling roadmap date assignment.
 * Requirements implemented:
 *  - Minimum child task length = 1 workday
 *  - Use workdays (skip Sat/Sun)
 *  - Auto-set parent startDate/endDate from first/last child
 *  - Generate rolling schedule across all parents sequentially (no overlap)
 *  - Extend dateHeadings if schedule spills beyond existing months
 */
const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../src/components/ProductRoadmap/design-system.json');
const json = JSON.parse(fs.readFileSync(file,'utf8'));

const dateHeadings = json.dateHeadings; // e.g. 'Sep 2025'
function monthStartFromHeading(h){ // 'Sep 2025' -> Date UTC first day
  return new Date(h + ' 01');
}
function headingKey(d){ return d.toLocaleString('en-GB',{ month:'short', year:'numeric'}); }
function addMonths(d, m){ const n = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth()+m, 1)); return n; }
function isWeekend(d){ const day = d.getUTCDay(); return day===0 || day===6; }
function nextWorkday(d){ const n = new Date(d); while(isWeekend(n)) n.setUTCDate(n.getUTCDate()+1); return n; }
function addWorkdays(start, workdays){
  let d = new Date(start);
  let added = 0;
  while(added < workdays){
    d.setUTCDate(d.getUTCDate()+1);
    if(!isWeekend(d)) added++;
  }
  return d; // returns date after advancing 'workdays' workdays (exclusive end)
}
function workdaysBetween(start, endExclusive){ // approximate by iterating (fine for roadmap scale)
  let d = new Date(start); let count=0;
  while(d < endExclusive){ if(!isWeekend(d)) count++; d.setUTCDate(d.getUTCDate()+1); }
  return count;
}

// Global rolling pointer
let current = nextWorkday(monthStartFromHeading(dateHeadings[0]));

for(const cat of json.categories){
  for(const parent of cat.roadmapItems){
    let children = parent.childItems || parent.children;
    if(!children || !children.length) continue;
    // Derive intended window size from legacy columns if present
    let windowWorkdays = null;
    if(parent.date != null){
      const startHeadingIdx = parent.date - 1;
      const length = (parent.length || 1) - 1 + (parent.partialLength || 1); // fractional months
      const spanMonths = Math.max(1, Math.ceil(length));
      const startMonth = monthStartFromHeading(dateHeadings[startHeadingIdx]);
      let endMonthIdx = startHeadingIdx + spanMonths;
      // ensure headings exist
      while(endMonthIdx >= dateHeadings.length){
        const last = monthStartFromHeading(dateHeadings[dateHeadings.length-1]);
        const next = addMonths(last,1); dateHeadings.push(headingKey(next));
      }
      const endMonthStart = monthStartFromHeading(dateHeadings[endMonthIdx]);
      windowWorkdays = workdaysBetween(startMonth, endMonthStart);
    }
    // Fallback window size: children.length * 5 days
    if(windowWorkdays == null || windowWorkdays === 0){ windowWorkdays = children.length * 5; }
    // Uniform distribution
    const perChild = Math.max(1, Math.floor(windowWorkdays / children.length));

    // Schedule sequentially from global current
    const scheduled = [];
    for(let i=0;i<children.length;i++){
      const child = children[i];
      const start = nextWorkday(current);
      // Last child: ensure we at least use remaining window if legacy window shorter, else allocate perChild
      let endExclusive = addWorkdays(start, i === children.length -1 ? perChild : perChild);
      // Assign
      child.startDate = start.toISOString().slice(0,10);
      const endInclusive = new Date(endExclusive); endInclusive.setUTCDate(endInclusive.getUTCDate()-1);
      child.endDate = endInclusive.toISOString().slice(0,10);
      scheduled.push(child);
      current = endExclusive; // advance
    }
    parent.childItems = scheduled;
    parent.startDate = scheduled[0].startDate;
    parent.endDate = scheduled[scheduled.length-1].endDate;
    delete parent.children;
  }
}

// Extend dateHeadings to cover final current pointer month if needed
const finalMonthKey = headingKey(new Date(Date.UTC(current.getUTCFullYear(), current.getUTCMonth(),1)));
if(!dateHeadings.includes(finalMonthKey)){
  // append months until we include finalMonthKey
  let last = monthStartFromHeading(dateHeadings[dateHeadings.length-1]);
  while(headingKey(last) !== finalMonthKey){
    last = addMonths(last,1);
    dateHeadings.push(headingKey(last));
  }
}

json.dateHeadings = dateHeadings;
fs.writeFileSync(file, JSON.stringify(json,null,2)+'\n');
console.log('Rolling schedule applied. Last pointer at', current.toISOString().slice(0,10));
