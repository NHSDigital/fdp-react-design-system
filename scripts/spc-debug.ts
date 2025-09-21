#!/usr/bin/env tsx
import { buildSpcV26a as buildSpc, ChartType, ImprovementDirection, SpcRowV2 as SpcRow } from '../src/components/DataVisualisation/charts/SPC/engine';

const values = [10,10,10,10,10,15,16,17,18,19,19,19,19,19,19];
function rowsFrom(values:(number|null)[]){ return values.map((v,i)=>({ x:i+1, value:v })); }

const orthodox = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: rowsFrom(values) });
const sql = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: rowsFrom(values) });

function fmt(r: any){
  return {
    id: r.rowId,
    v: r.value,
    mean: r.mean,
    icon: r.variationIcon,
    shiftUp: r.specialCauseShiftUp,
    shiftDown: r.specialCauseShiftDown,
    trendUp: r.specialCauseTrendUp,
    trendDown: r.specialCauseTrendDown,
    singleUp: r.specialCauseSinglePointUp,
    singleDown: r.specialCauseSinglePointDown,
    twoOf3Up: r.specialCauseTwoOfThreeUp,
    twoOf3Down: r.specialCauseTwoOfThreeDown,
    fourOf5Up: r.specialCauseFourOfFiveUp,
    fourOf5Down: r.specialCauseFourOfFiveDown,
    improvVal: r.specialCauseImprovementValue,
    concernVal: r.specialCauseConcernValue
  };
}

console.log('Orthodox rows (subset)');
orthodox.rows.forEach(r=>{
  if (r.rowId >=4 && r.rowId <=7) console.log(fmt(r));
});
console.log('\nSQL rows (subset)');
sql.rows.forEach(r=>{
  if (r.rowId >=4 && r.rowId <=7) console.log(fmt(r));
});
