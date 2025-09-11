#!/usr/bin/env tsx
import { buildSpc, ChartType, ImprovementDirection, SpcRow } from '../src/components/DataVisualisation/charts/SPC/SPCChart/logic/spc';
import { buildSpcSqlCompat } from '../src/components/DataVisualisation/charts/SPC/SPCChart/logic/spcSqlCompat';

const values = [10,10,10,10,10,15,16,17,18,19,19,19,19,19,19];
function rowsFrom(values:(number|null)[]){ return values.map((v,i)=>({ x:i+1, value:v })); }

const orthodox = buildSpc({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: rowsFrom(values) });
const sql = buildSpcSqlCompat({ chartType: ChartType.XmR, metricImprovement: ImprovementDirection.Up, data: rowsFrom(values) });

function fmt(r: SpcRow){
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
