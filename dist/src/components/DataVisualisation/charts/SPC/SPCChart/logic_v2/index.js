// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/types.ts
var ChartType = /* @__PURE__ */ ((ChartType2) => {
  ChartType2["XmR"] = "XmR";
  ChartType2["T"] = "T";
  ChartType2["G"] = "G";
  return ChartType2;
})(ChartType || {});
var ImprovementDirection = /* @__PURE__ */ ((ImprovementDirection2) => {
  ImprovementDirection2["Up"] = "Up";
  ImprovementDirection2["Down"] = "Down";
  ImprovementDirection2["Neither"] = "Neither";
  return ImprovementDirection2;
})(ImprovementDirection || {});
var VariationIcon = /* @__PURE__ */ ((VariationIcon2) => {
  VariationIcon2["ImprovementHigh"] = "ImprovementHigh";
  VariationIcon2["ImprovementLow"] = "ImprovementLow";
  VariationIcon2["ConcernHigh"] = "ConcernHigh";
  VariationIcon2["ConcernLow"] = "ConcernLow";
  VariationIcon2["NeitherHigh"] = "NeitherHigh";
  VariationIcon2["NeitherLow"] = "NeitherLow";
  VariationIcon2["CommonCause"] = "CommonCause";
  return VariationIcon2;
})(VariationIcon || {});
var AssuranceIcon = /* @__PURE__ */ ((AssuranceIcon2) => {
  AssuranceIcon2["None"] = "None";
  AssuranceIcon2["Pass"] = "Pass";
  AssuranceIcon2["HitOrMiss"] = "HitOrMiss";
  AssuranceIcon2["Fail"] = "Fail";
  return AssuranceIcon2;
})(AssuranceIcon || {});
var SpcRuleId = /* @__PURE__ */ ((SpcRuleId2) => {
  SpcRuleId2["SinglePoint"] = "SinglePoint";
  SpcRuleId2["TwoSigma"] = "TwoSigma";
  SpcRuleId2["Shift"] = "Shift";
  SpcRuleId2["Trend"] = "Trend";
  return SpcRuleId2;
})(SpcRuleId || {});
var PrimeDirection = /* @__PURE__ */ ((PrimeDirection2) => {
  PrimeDirection2["Upwards"] = "Upwards";
  PrimeDirection2["Downwards"] = "Downwards";
  PrimeDirection2["Same"] = "Same";
  return PrimeDirection2;
})(PrimeDirection || {});
var Side = /* @__PURE__ */ ((Side2) => {
  Side2["Up"] = "Up";
  Side2["Down"] = "Down";
  return Side2;
})(Side || {});
var MetricConflictRule = /* @__PURE__ */ ((MetricConflictRule2) => {
  MetricConflictRule2["Improvement"] = "Improvement";
  MetricConflictRule2["Concern"] = "Concern";
  return MetricConflictRule2;
})(MetricConflictRule || {});

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/constants.ts
var RULE_RANK_BY_ID = {
  ["SinglePoint" /* SinglePoint */]: 1,
  ["TwoSigma" /* TwoSigma */]: 2,
  ["Shift" /* Shift */]: 3,
  ["Trend" /* Trend */]: 4
};
var D2 = 1.128;
var MR_UCL_FACTOR = 3.267;
var XMR_THREE_SIGMA_FACTOR = 2.66;

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/utils.ts
function isNumber(n) {
  return typeof n === "number" && !Number.isNaN(n);
}
function mean(nums) {
  return nums.reduce((a, b) => a + b, 0) / (nums.length || 1);
}
function movingRanges(values, ghosts) {
  const mr = new Array(values.length).fill(null);
  let lastIdx = null;
  for (let i = 0; i < values.length; i++) {
    const v = values[i];
    if (ghosts[i] || !isNumber(v)) continue;
    if (lastIdx !== null) {
      const prev = values[lastIdx];
      if (isNumber(prev)) mr[i] = Math.abs(v - prev);
    }
    lastIdx = i;
  }
  return mr;
}
function mrMeanWithOptionalExclusion(mr, excludeOutliers) {
  const vals = mr.filter(isNumber);
  if (!vals.length) return { mrMean: NaN, mrUcl: NaN };
  let arr = vals.slice();
  if (excludeOutliers) {
    const meanMr = mean(arr);
    const ucl = MR_UCL_FACTOR * meanMr;
    arr = arr.filter((v) => v <= ucl);
  }
  const mrMean = mean(arr);
  return { mrMean, mrUcl: MR_UCL_FACTOR * mrMean };
}
function xmrLimits(center, mrMean) {
  if (!isNumber(center) || !isNumber(mrMean)) {
    return {
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  }
  const threeSigma = XMR_THREE_SIGMA_FACTOR * mrMean;
  const twoSigma = 2 / 3 * threeSigma;
  const oneSigma = 1 / 3 * threeSigma;
  return {
    upperProcessLimit: center + threeSigma,
    lowerProcessLimit: center - threeSigma,
    upperTwoSigma: center + twoSigma,
    lowerTwoSigma: center - twoSigma,
    upperOneSigma: center + oneSigma,
    lowerOneSigma: center - oneSigma
  };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/limits.ts
function computePartitionLimits(chartType, values, ghosts, excludeMovingRangeOutliers) {
  if (chartType !== "XmR" /* XmR */) {
    return {
      mean: NaN,
      mr: new Array(values.length).fill(null),
      mrMean: NaN,
      mrUcl: NaN,
      upperProcessLimit: null,
      lowerProcessLimit: null,
      upperTwoSigma: null,
      lowerTwoSigma: null,
      upperOneSigma: null,
      lowerOneSigma: null
    };
  }
  const mr = movingRanges(values, ghosts);
  const mrVals = mr.filter(isNumber);
  const rawMrMean = mrVals.length ? mean(mrVals) : NaN;
  const rawMrUcl = isNumber(rawMrMean) ? 3.267 * rawMrMean : NaN;
  let center = NaN;
  {
    const eligibleVals = [];
    for (let i = 0; i < values.length; i++) {
      const v = values[i];
      if (ghosts[i] || !isNumber(v)) continue;
      if (!excludeMovingRangeOutliers) {
        eligibleVals.push(v);
        continue;
      }
      const mri = mr[i];
      if (mri === null || !isNumber(rawMrUcl) || isNumber(mri) && mri <= rawMrUcl) {
        eligibleVals.push(v);
      }
    }
    center = eligibleVals.length ? mean(eligibleVals) : NaN;
  }
  const tmp = mrMeanWithOptionalExclusion(mr, excludeMovingRangeOutliers);
  const lim = xmrLimits(center, tmp.mrMean);
  return {
    mean: center,
    mr,
    mrMean: tmp.mrMean,
    mrUcl: tmp.mrUcl,
    ...lim
  };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/detector.ts
function detectRulesInPartition(rows, cfg) {
  var _a, _b, _c, _d;
  const idxs = rows.map((_, i) => i).filter((i) => !rows[i].ghost && isNumber(rows[i].value));
  const get = (i) => rows[i];
  const shiftN = cfg.shiftPoints;
  const trendN = cfg.trendPoints;
  let runHigh = [];
  let runLow = [];
  for (const i of idxs) {
    const r = get(i);
    if (!isNumber(r.mean) || !isNumber(r.value)) {
      runHigh = [];
      runLow = [];
      continue;
    }
    if (r.value > r.mean) {
      runHigh.push(i);
      runLow = [];
    } else if (r.value < r.mean) {
      runLow.push(i);
      runHigh = [];
    } else {
      runHigh = [];
      runLow = [];
    }
    if (runHigh.length >= shiftN)
      for (const j of runHigh) get(j).shiftUp = true;
    if (runLow.length >= shiftN)
      for (const j of runLow) get(j).shiftDown = true;
  }
  for (let w = 0; w <= idxs.length - 3; w++) {
    const win = idxs.slice(w, w + 3);
    const trip = win.map(get);
    if (!trip.every((r) => isNumber(r.value) && isNumber(r.mean))) continue;
    const mean2 = trip[0].mean;
    const allHigh = trip.every((r) => r.value > mean2);
    const allLow = trip.every((r) => r.value < mean2);
    if (!allHigh && !allLow) continue;
    const u2 = (_a = trip[0].upperTwoSigma) != null ? _a : Infinity;
    const l2 = (_b = trip[0].lowerTwoSigma) != null ? _b : -Infinity;
    const u3 = (_c = trip[0].upperProcessLimit) != null ? _c : Infinity;
    const l3 = (_d = trip[0].lowerProcessLimit) != null ? _d : -Infinity;
    const highs = trip.filter((r) => cfg.twoSigmaIncludeAboveThree ? r.value > u2 : r.value > u2 && r.value <= u3);
    const lows = trip.filter((r) => cfg.twoSigmaIncludeAboveThree ? r.value < l2 : r.value < l2 && r.value >= l3);
    if (allHigh && highs.length >= 2)
      highs.forEach((r) => r.twoSigmaUp = true);
    if (allLow && lows.length >= 2)
      lows.forEach((r) => r.twoSigmaDown = true);
  }
  for (let w = 0; w <= idxs.length - trendN; w++) {
    const win = idxs.slice(w, w + trendN);
    const seq = win.map(get);
    if (!seq.every((r) => isNumber(r.value))) continue;
    let inc = true;
    let dec = true;
    for (let k = 1; k < seq.length; k++) {
      if (!(seq[k].value > seq[k - 1].value)) inc = false;
      if (!(seq[k].value < seq[k - 1].value)) dec = false;
      if (!inc && !dec) break;
    }
    if (inc) win.forEach((i) => get(i).trendUp = true);
    if (dec) win.forEach((i) => get(i).trendDown = true);
  }
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/conflict.ts
function getDirectionalSummary(row) {
  const up = [];
  const dn = [];
  if (row.singlePointUp)
    up.push({
      id: "SinglePoint" /* SinglePoint */,
      rank: RULE_RANK_BY_ID["SinglePoint" /* SinglePoint */]
    });
  if (row.singlePointDown)
    dn.push({
      id: "SinglePoint" /* SinglePoint */,
      rank: RULE_RANK_BY_ID["SinglePoint" /* SinglePoint */]
    });
  if (row.twoSigmaUp)
    up.push({
      id: "TwoSigma" /* TwoSigma */,
      rank: RULE_RANK_BY_ID["TwoSigma" /* TwoSigma */]
    });
  if (row.twoSigmaDown)
    dn.push({
      id: "TwoSigma" /* TwoSigma */,
      rank: RULE_RANK_BY_ID["TwoSigma" /* TwoSigma */]
    });
  if (row.shiftUp)
    up.push({ id: "Shift" /* Shift */, rank: RULE_RANK_BY_ID["Shift" /* Shift */] });
  if (row.shiftDown)
    dn.push({ id: "Shift" /* Shift */, rank: RULE_RANK_BY_ID["Shift" /* Shift */] });
  if (row.trendUp)
    up.push({ id: "Trend" /* Trend */, rank: RULE_RANK_BY_ID["Trend" /* Trend */] });
  if (row.trendDown)
    dn.push({ id: "Trend" /* Trend */, rank: RULE_RANK_BY_ID["Trend" /* Trend */] });
  const upMax = up.reduce((m, r) => Math.max(m, r.rank), 0);
  const dnMax = dn.reduce((m, r) => Math.max(m, r.rank), 0);
  const primeDirection = upMax > dnMax ? "Upwards" /* Upwards */ : dnMax > upMax ? "Downwards" /* Downwards */ : "Same" /* Same */;
  return { up, dn, upMax, dnMax, primeDirection };
}
function deriveOriginalCandidates(row, metric) {
  const aligned = metric === "Up" /* Up */ ? row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp : metric === "Down" /* Down */ ? row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown : false;
  const opposite = metric === "Up" /* Up */ ? row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown : metric === "Down" /* Down */ ? row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp : false;
  return { aligned, opposite };
}
function applySqlPruning(row, metric, metricConflictRule) {
  const { up, dn, upMax, dnMax, primeDirection } = getDirectionalSummary(row);
  row.primeDirection = primeDirection;
  const originalImprovement = row.specialCauseImprovementValue;
  const originalConcern = row.specialCauseConcernValue;
  if (row.specialCauseImprovementValue !== null && row.specialCauseConcernValue !== null) {
    if (primeDirection === "Upwards" /* Upwards */) {
      if (metric === "Up" /* Up */)
        row.specialCauseConcernValue = null;
      else if (metric === "Down" /* Down */)
        row.specialCauseImprovementValue = null;
    } else if (primeDirection === "Downwards" /* Downwards */) {
      if (metric === "Up" /* Up */)
        row.specialCauseImprovementValue = null;
      else if (metric === "Down" /* Down */)
        row.specialCauseConcernValue = null;
    } else {
      if (metricConflictRule === "Improvement" /* Improvement */)
        row.specialCauseConcernValue = null;
      else row.specialCauseImprovementValue = null;
    }
  }
  if (metric === "Up" /* Up */) {
    row.variationIcon = row.specialCauseImprovementValue !== null ? "ImprovementHigh" /* ImprovementHigh */ : row.specialCauseConcernValue !== null ? "ConcernLow" /* ConcernLow */ : "CommonCause" /* CommonCause */;
  } else if (metric === "Down" /* Down */) {
    row.variationIcon = row.specialCauseImprovementValue !== null ? "ImprovementLow" /* ImprovementLow */ : row.specialCauseConcernValue !== null ? "ConcernHigh" /* ConcernHigh */ : "CommonCause" /* CommonCause */;
  } else {
    row.variationIcon = "CommonCause" /* CommonCause */;
  }
  const winningSide = row.specialCauseImprovementValue !== null ? "Up" /* Up */ : row.specialCauseConcernValue !== null ? "Down" /* Down */ : void 0;
  const winningRank = winningSide === "Up" /* Up */ ? upMax : winningSide === "Down" /* Down */ ? dnMax : Math.max(upMax, dnMax);
  row.primeRank = winningRank || void 0;
  const winner = winningSide === "Up" /* Up */ ? up.find((r) => r.rank === winningRank) : winningSide === "Down" /* Down */ ? dn.find((r) => r.rank === winningRank) : void 0;
  row.primeRuleId = winner == null ? void 0 : winner.id;
  return { originalImprovement, originalConcern };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/assurance.ts
function computeAssuranceIconXmR(row, metricImprovement, target) {
  if (!isNumber(target) || row.mean === null || row.upperProcessLimit === null || row.lowerProcessLimit === null)
    return "None" /* None */;
  if (metricImprovement === "Up" /* Up */) {
    if (target <= row.lowerProcessLimit) return "Pass" /* Pass */;
    if (target >= row.upperProcessLimit) return "Fail" /* Fail */;
    return "HitOrMiss" /* HitOrMiss */;
  }
  if (metricImprovement === "Down" /* Down */) {
    if (target >= row.upperProcessLimit) return "Pass" /* Pass */;
    if (target <= row.lowerProcessLimit) return "Fail" /* Fail */;
    return "HitOrMiss" /* HitOrMiss */;
  }
  return "None" /* None */;
}
function computeAssuranceIcon(chartType, row, metricImprovement, target) {
  if (chartType !== "XmR" /* XmR */) return "None" /* None */;
  return computeAssuranceIconXmR(row, metricImprovement, target);
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine.ts
function buildSpcV26a(args) {
  const { chartType, metricImprovement, data, settings } = args;
  const s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: false,
    metricConflictRule: "Improvement" /* Improvement */,
    trendAcrossPartitions: false,
    twoSigmaIncludeAboveThree: false,
    ...settings
  };
  const canon = data.map((d, i) => ({
    rowId: i + 1,
    x: d.x,
    value: isNumber(d.value) ? d.value : null,
    ghost: !!d.ghost,
    baseline: !!d.baseline,
    target: isNumber(d.target) ? d.target : null
  }));
  const partitions = [];
  let cur = [];
  for (const r of canon) {
    if (r.baseline && cur.length) {
      partitions.push(cur);
      cur = [];
    }
    cur.push(r);
  }
  if (cur.length) partitions.push(cur);
  const out = [];
  let partitionId = 0;
  for (const part of partitions) {
    partitionId++;
    const values = part.map((p) => p.value);
    const ghosts = part.map((p) => p.ghost);
    const lim = computePartitionLimits(
      chartType,
      values,
      ghosts,
      !!s.excludeMovingRangeOutliers
    );
    const withLines = part.map((r, i) => {
      const pointRank = !r.ghost && isNumber(r.value) ? values.slice(0, i + 1).filter((v, j) => !ghosts[j] && isNumber(v)).length : 0;
      const eligibleHere = pointRank >= s.minimumPoints;
      return {
        rowId: r.rowId,
        x: r.x,
        value: isNumber(r.value) ? r.value : null,
        ghost: r.ghost,
        partitionId,
        pointRank,
        mean: eligibleHere && isNumber(lim.mean) ? lim.mean : null,
        upperProcessLimit: eligibleHere ? lim.upperProcessLimit : null,
        lowerProcessLimit: eligibleHere ? lim.lowerProcessLimit : null,
        upperTwoSigma: eligibleHere ? lim.upperTwoSigma : null,
        lowerTwoSigma: eligibleHere ? lim.lowerTwoSigma : null,
        upperOneSigma: eligibleHere ? lim.upperOneSigma : null,
        lowerOneSigma: eligibleHere ? lim.lowerOneSigma : null,
        // rules
        singlePointUp: false,
        singlePointDown: false,
        twoSigmaUp: false,
        twoSigmaDown: false,
        shiftUp: false,
        shiftDown: false,
        trendUp: false,
        trendDown: false,
        // candidates
        specialCauseImprovementValue: null,
        specialCauseConcernValue: null,
        variationIcon: "CommonCause" /* CommonCause */
      };
    });
    for (const row of withLines) {
      if (row.ghost || !isNumber(row.value) || row.mean === null)
        continue;
      if (isNumber(row.upperProcessLimit) && row.value > row.upperProcessLimit)
        row.singlePointUp = true;
      if (isNumber(row.lowerProcessLimit) && row.value < row.lowerProcessLimit)
        row.singlePointDown = true;
    }
    detectRulesInPartition(withLines, {
      shiftPoints: s.shiftPoints,
      trendPoints: s.trendPoints,
      twoSigmaIncludeAboveThree: !!s.twoSigmaIncludeAboveThree
    });
    for (const row of withLines) {
      if (row.ghost || !isNumber(row.value) || row.mean === null) {
        out.push(row);
        continue;
      }
      const { aligned, opposite } = deriveOriginalCandidates(
        row,
        metricImprovement
      );
      row.specialCauseImprovementValue = aligned ? row.value : null;
      row.specialCauseConcernValue = opposite ? row.value : null;
      if (metricImprovement === "Neither" /* Neither */) {
        const highSide = row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp;
        const lowSide = row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown;
        row.variationIcon = highSide ? "NeitherHigh" /* NeitherHigh */ : lowSide ? "NeitherLow" /* NeitherLow */ : "CommonCause" /* CommonCause */;
      } else {
        applySqlPruning(row, metricImprovement, s.metricConflictRule);
      }
      out.push(row);
    }
  }
  if (s.trendAcrossPartitions) {
    const all = out.map((r, i) => ({ idx: i, r })).filter(({ r }) => !r.ghost && isNumber(r.value));
    if (all.length >= s.trendPoints) {
      for (let w = 0; w <= all.length - s.trendPoints; w++) {
        const win = all.slice(w, w + s.trendPoints).map((p) => p.idx);
        const seq = win.map((i) => out[i]);
        if (!seq.every((row) => isNumber(row.value))) continue;
        let inc = true;
        let dec = true;
        for (let k = 1; k < seq.length; k++) {
          if (!(seq[k].value > seq[k - 1].value)) inc = false;
          if (!(seq[k].value < seq[k - 1].value)) dec = false;
          if (!inc && !dec) break;
        }
        if (inc) win.forEach((i) => out[i].trendUp = true);
        if (dec) win.forEach((i) => out[i].trendDown = true);
      }
    }
  }
  return { rows: out };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/presets.ts
var PARITY_V26 = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: false,
  metricConflictRule: "Improvement" /* Improvement */,
  trendAcrossPartitions: true,
  twoSigmaIncludeAboveThree: true
});
function withParityV26(overrides) {
  return { ...PARITY_V26, ...overrides != null ? overrides : {} };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/preprocess.ts
function toTimeBetweenEvents(events, opts) {
  var _a;
  const toMs = (_a = opts == null ? void 0 : opts.toMillis) != null ? _a : (x) => new Date(x).getTime();
  const res = [];
  if (events.length < 2) return res;
  for (let i = 1; i < events.length; i++) {
    const prev = toMs(events[i - 1].x);
    const cur = toMs(events[i].x);
    res.push({ x: events[i].x, value: Math.max(0, cur - prev) });
  }
  return res;
}
function toCountBetweenEvents(rows) {
  const res = [];
  let since = 0;
  for (const r of rows) {
    since += 1;
    const hit = typeof r.occurred === "number" ? r.occurred > 0 : !!r.occurred;
    if (hit) {
      res.push({ x: r.x, value: since });
      since = 0;
    }
  }
  return res;
}
export {
  AssuranceIcon,
  ChartType,
  D2,
  ImprovementDirection,
  MR_UCL_FACTOR,
  MetricConflictRule,
  PARITY_V26,
  PrimeDirection,
  RULE_RANK_BY_ID,
  Side,
  SpcRuleId,
  VariationIcon,
  XMR_THREE_SIGMA_FACTOR,
  applySqlPruning,
  buildSpcV26a,
  computeAssuranceIcon,
  computeAssuranceIconXmR,
  computePartitionLimits,
  deriveOriginalCandidates,
  detectRulesInPartition,
  getDirectionalSummary,
  isNumber,
  mean,
  movingRanges,
  mrMeanWithOptionalExclusion,
  toCountBetweenEvents,
  toTimeBetweenEvents,
  withParityV26,
  xmrLimits
};
//# sourceMappingURL=index.js.map
