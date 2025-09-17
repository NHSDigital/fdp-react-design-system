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
var ConflictStrategy = /* @__PURE__ */ ((ConflictStrategy2) => {
  ConflictStrategy2["SqlPrimeThenRule"] = "SqlPrimeThenRule";
  ConflictStrategy2["PreferImprovement"] = "PreferImprovement";
  ConflictStrategy2["RuleHierarchy"] = "RuleHierarchy";
  return ConflictStrategy2;
})(ConflictStrategy || {});
var TrendSegmentationStrategy = /* @__PURE__ */ ((TrendSegmentationStrategy2) => {
  TrendSegmentationStrategy2["FavourableSide"] = "FavourableSide";
  TrendSegmentationStrategy2["CrossingAfterFavourable"] = "CrossingAfterFavourable";
  TrendSegmentationStrategy2["ExtremeFavourable"] = "ExtremeFavourable";
  TrendSegmentationStrategy2["FirstFavourable"] = "FirstFavourable";
  TrendSegmentationStrategy2["LongestFavourable"] = "LongestFavourable";
  TrendSegmentationStrategy2["LastFavourable"] = "LastFavourable";
  TrendSegmentationStrategy2["UnfavourableSide"] = "UnfavourableSide";
  TrendSegmentationStrategy2["CrossingAfterUnfavourable"] = "CrossingAfterUnfavourable";
  TrendSegmentationStrategy2["ExtremeUnfavourable"] = "ExtremeUnfavourable";
  TrendSegmentationStrategy2["FirstUnfavourable"] = "FirstUnfavourable";
  TrendSegmentationStrategy2["LongestUnfavourable"] = "LongestUnfavourable";
  TrendSegmentationStrategy2["LastUnfavourable"] = "LastUnfavourable";
  return TrendSegmentationStrategy2;
})(TrendSegmentationStrategy || {});
var TrendSegmentationMode = /* @__PURE__ */ ((TrendSegmentationMode2) => {
  TrendSegmentationMode2["Off"] = "Off";
  TrendSegmentationMode2["AutoWhenConflict"] = "AutoWhenConflict";
  TrendSegmentationMode2["Always"] = "Always";
  return TrendSegmentationMode2;
})(TrendSegmentationMode || {});

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
function applySqlPruning(row, metric, metricConflictRule, preferImprovementWhenConflict = false, conflictStrategy, ruleHierarchy, preferTrendWhenConflict = false) {
  const { up, dn, upMax, dnMax, primeDirection } = getDirectionalSummary(row);
  row.primeDirection = primeDirection;
  const originalImprovement = row.specialCauseImprovementValue;
  const originalConcern = row.specialCauseConcernValue;
  if (row.specialCauseImprovementValue !== null && row.specialCauseConcernValue !== null) {
    resolveConflict({ row, metric, metricConflictRule, preferImprovementWhenConflict, preferTrendWhenConflict, primeDirection, conflictStrategy, ruleHierarchy });
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
function resolveConflict(args) {
  var _a;
  const {
    row,
    metric,
    metricConflictRule,
    preferImprovementWhenConflict,
    preferTrendWhenConflict,
    primeDirection = (_a = row.primeDirection) != null ? _a : "Same" /* Same */,
    conflictStrategy,
    ruleHierarchy
  } = args;
  if (preferTrendWhenConflict && row.specialCauseImprovementValue !== null && row.specialCauseConcernValue !== null) {
    const upTrend = !!row.trendUp;
    const downTrend = !!row.trendDown;
    if (metric === "Up" /* Up */) {
      if (upTrend && !downTrend) {
        row.specialCauseConcernValue = null;
        return;
      }
      if (!upTrend && downTrend) {
        row.specialCauseImprovementValue = null;
        return;
      }
    } else if (metric === "Down" /* Down */) {
      if (downTrend && !upTrend) {
        row.specialCauseConcernValue = null;
        return;
      }
      if (!downTrend && upTrend) {
        row.specialCauseImprovementValue = null;
        return;
      }
    }
  }
  const strategy = preferImprovementWhenConflict ? "PreferImprovement" /* PreferImprovement */ : conflictStrategy != null ? conflictStrategy : "SqlPrimeThenRule" /* SqlPrimeThenRule */;
  if (strategy === "PreferImprovement" /* PreferImprovement */) {
    if (metric === "Up" /* Up */) row.specialCauseConcernValue = null;
    else if (metric === "Down" /* Down */) row.specialCauseImprovementValue = null;
    return;
  }
  if (strategy === "RuleHierarchy" /* RuleHierarchy */) {
    const order = ruleHierarchy != null ? ruleHierarchy : ["Trend" /* Trend */, "Shift" /* Shift */, "TwoSigma" /* TwoSigma */, "SinglePoint" /* SinglePoint */];
    const { up, dn } = getDirectionalSummary(row);
    for (const rid of order) {
      const upHas = up.some((r) => r.id === rid);
      const dnHas = dn.some((r) => r.id === rid);
      if (upHas && !dnHas) {
        if (metric === "Up" /* Up */) row.specialCauseConcernValue = null;
        else row.specialCauseImprovementValue = null;
        return;
      }
      if (dnHas && !upHas) {
        if (metric === "Up" /* Up */) row.specialCauseImprovementValue = null;
        else row.specialCauseConcernValue = null;
        return;
      }
      if (upHas && dnHas) {
        if (metric === "Up" /* Up */) {
          if (metricConflictRule === "Improvement" /* Improvement */) row.specialCauseConcernValue = null;
          else row.specialCauseImprovementValue = null;
        } else if (metric === "Down" /* Down */) {
          if (metricConflictRule === "Improvement" /* Improvement */) row.specialCauseConcernValue = null;
          else row.specialCauseImprovementValue = null;
        }
        return;
      }
    }
  }
  if (primeDirection === "Upwards" /* Upwards */) {
    if (metric === "Up" /* Up */) row.specialCauseConcernValue = null;
    else if (metric === "Down" /* Down */) row.specialCauseImprovementValue = null;
  } else if (primeDirection === "Downwards" /* Downwards */) {
    if (metric === "Up" /* Up */) row.specialCauseImprovementValue = null;
    else if (metric === "Down" /* Down */) row.specialCauseConcernValue = null;
  } else {
    if (metricConflictRule === "Improvement" /* Improvement */) row.specialCauseConcernValue = null;
    else row.specialCauseImprovementValue = null;
  }
}
function computeSideFlags(row) {
  const upAny = !!(row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp);
  const downAny = !!(row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown);
  return { upAny, downAny };
}
function hasDirectionalConflict(row) {
  const { upAny, downAny } = computeSideFlags(row);
  return upAny && downAny;
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

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/trendSegments.ts
function signOf(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}
function sideFor(delta) {
  const s = signOf(delta);
  if (s > 0) return "Above";
  if (s < 0) return "Below";
  return void 0;
}
function computeTrendSegments(rows) {
  var _a;
  const runs = [];
  let i = 0;
  while (i < rows.length) {
    const r = rows[i];
    if (!r || r.value == null || r.ghost || !r.trendUp && !r.trendDown) {
      i++;
      continue;
    }
    const dir = r.trendUp ? "Up" : r.trendDown ? "Down" : void 0;
    let start = i;
    let j = i;
    for (; j < rows.length; j++) {
      const rr = rows[j];
      if (!rr || rr.value == null || rr.ghost) break;
      const sameDir = dir === "Up" ? rr.trendUp : rr.trendDown;
      if (!sameDir) break;
    }
    const end = j - 1;
    const segments = [];
    let segStart = void 0;
    let segSide = void 0;
    let minV = Infinity, maxV = -Infinity, maxAbsDelta = 0;
    for (let k = start; k <= end; k++) {
      const row = rows[k];
      if (row.value == null) continue;
      const delta = row.value - ((_a = row.mean) != null ? _a : 0);
      const side = sideFor(delta);
      if (!side) {
        if (segStart !== void 0) {
          segments.push({
            trendDirection: dir,
            start: segStart,
            end: k - 1,
            side: segSide,
            minValue: minV,
            maxValue: maxV,
            maxAbsDeltaFromMean: maxAbsDelta
          });
          segStart = void 0;
          segSide = void 0;
          minV = Infinity;
          maxV = -Infinity;
          maxAbsDelta = 0;
        }
        continue;
      }
      if (segStart === void 0) {
        segStart = k;
        segSide = side;
        minV = row.value;
        maxV = row.value;
        maxAbsDelta = Math.abs(delta);
      } else if (side !== segSide) {
        segments.push({
          trendDirection: dir,
          start: segStart,
          end: k - 1,
          side: segSide,
          minValue: minV,
          maxValue: maxV,
          maxAbsDeltaFromMean: maxAbsDelta
        });
        segStart = k;
        segSide = side;
        minV = row.value;
        maxV = row.value;
        maxAbsDelta = Math.abs(delta);
      } else {
        if (row.value < minV) minV = row.value;
        if (row.value > maxV) maxV = row.value;
        const mad = Math.abs(delta);
        if (mad > maxAbsDelta) maxAbsDelta = mad;
      }
    }
    if (segStart !== void 0) {
      segments.push({
        trendDirection: dir,
        start: segStart,
        end,
        side: segSide,
        minValue: minV,
        maxValue: maxV,
        maxAbsDeltaFromMean: maxAbsDelta
      });
    }
    runs.push({ trendDirection: dir, start, end, segments });
    i = end + 1;
  }
  return runs;
}
function favourableSide(impr) {
  if (impr === "Up" /* Up */) return "Above";
  if (impr === "Down" /* Down */) return "Below";
  return void 0;
}
function oppositeSide(side) {
  if (!side) return void 0;
  return side === "Above" ? "Below" : "Above";
}
function chooseSegmentsForHighlight(runs, opts) {
  var _a;
  const strategy = (_a = opts.strategy) != null ? _a : "CrossingAfterFavourable" /* CrossingAfterFavourable */;
  const fav = favourableSide(opts.metricImprovement);
  const unfav = oppositeSide(fav);
  const highlight = [];
  for (const run of runs) {
    if (!fav) {
      if (strategy === "ExtremeFavourable" /* ExtremeFavourable */ || strategy === "CrossingAfterFavourable" /* CrossingAfterFavourable */) {
        const all = run.segments;
        if (all.length === 0) continue;
        let best = all[0];
        for (const s of all)
          if (s.maxAbsDeltaFromMean > best.maxAbsDeltaFromMean) best = s;
        highlight.push(best);
      } else {
      }
      continue;
    }
    if (strategy === "FavourableSide" /* FavourableSide */) {
      highlight.push(...run.segments.filter((s) => s.side === fav));
      continue;
    }
    if (strategy === "UnfavourableSide" /* UnfavourableSide */) {
      highlight.push(...run.segments.filter((s) => s.side === unfav));
      continue;
    }
    if (strategy === "CrossingAfterFavourable" /* CrossingAfterFavourable */) {
      const segs = run.segments;
      let chosen = void 0;
      for (let idx = 0; idx < segs.length; idx++) {
        const s = segs[idx];
        if (s.side === fav) {
          if (idx > 0 && segs[idx - 1].side !== fav) {
            chosen = s;
            break;
          }
        }
      }
      if (!chosen) {
        const favSegs = segs.filter((s) => s.side === fav);
        if (favSegs.length > 0) {
          chosen = favSegs.reduce(
            (a, b) => b.end - b.start > a.end - a.start ? b : a,
            favSegs[0]
          );
        }
      }
      if (chosen) highlight.push(chosen);
      continue;
    }
    if (strategy === "CrossingAfterUnfavourable" /* CrossingAfterUnfavourable */) {
      const segs = run.segments;
      let chosen = void 0;
      for (let idx = 0; idx < segs.length; idx++) {
        const s = segs[idx];
        if (s.side === unfav) {
          if (idx > 0 && segs[idx - 1].side !== unfav) {
            chosen = s;
            break;
          }
        }
      }
      if (!chosen) {
        const unSegs = segs.filter((s) => s.side === unfav);
        if (unSegs.length > 0) {
          chosen = unSegs.reduce(
            (a, b) => b.end - b.start > a.end - a.start ? b : a,
            unSegs[0]
          );
        }
      }
      if (chosen) highlight.push(chosen);
      continue;
    }
    if (strategy === "ExtremeFavourable" /* ExtremeFavourable */) {
      const favSegs = run.segments.filter((s) => s.side === fav);
      if (favSegs.length === 0) continue;
      const chosen = favSegs.reduce(
        (a, b) => b.maxAbsDeltaFromMean > a.maxAbsDeltaFromMean ? b : a
      );
      highlight.push(chosen);
      continue;
    }
    if (strategy === "ExtremeUnfavourable" /* ExtremeUnfavourable */) {
      const unSegs = run.segments.filter((s) => s.side === unfav);
      if (unSegs.length === 0) continue;
      const chosen = unSegs.reduce((a, b) => b.maxAbsDeltaFromMean > a.maxAbsDeltaFromMean ? b : a);
      highlight.push(chosen);
      continue;
    }
    if (strategy === "FirstFavourable" /* FirstFavourable */) {
      const seg = run.segments.find((s) => s.side === fav);
      if (seg) highlight.push(seg);
      continue;
    }
    if (strategy === "FirstUnfavourable" /* FirstUnfavourable */) {
      const seg = run.segments.find((s) => s.side === unfav);
      if (seg) highlight.push(seg);
      continue;
    }
    if (strategy === "LongestFavourable" /* LongestFavourable */) {
      const favSegs = run.segments.filter((s) => s.side === fav);
      if (favSegs.length === 0) continue;
      const chosen = favSegs.reduce(
        (a, b) => b.end - b.start > a.end - a.start ? b : a
      );
      highlight.push(chosen);
      continue;
    }
    if (strategy === "LongestUnfavourable" /* LongestUnfavourable */) {
      const unSegs = run.segments.filter((s) => s.side === unfav);
      if (unSegs.length === 0) continue;
      const chosen = unSegs.reduce((a, b) => b.end - b.start > a.end - a.start ? b : a);
      highlight.push(chosen);
      continue;
    }
    if (strategy === "LastFavourable" /* LastFavourable */) {
      const favSegs = run.segments.filter((s) => s.side === fav);
      if (favSegs.length === 0) continue;
      highlight.push(favSegs[favSegs.length - 1]);
      continue;
    }
    if (strategy === "LastUnfavourable" /* LastUnfavourable */) {
      const unSegs = run.segments.filter((s) => s.side === unfav);
      if (unSegs.length === 0) continue;
      highlight.push(unSegs[unSegs.length - 1]);
      continue;
    }
  }
  return highlight;
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/visualCategories.ts
var SpcVisualCategory = /* @__PURE__ */ ((SpcVisualCategory2) => {
  SpcVisualCategory2["Common"] = "Common";
  SpcVisualCategory2["Improvement"] = "Improvement";
  SpcVisualCategory2["Concern"] = "Concern";
  SpcVisualCategory2["NoJudgement"] = "NoJudgement";
  return SpcVisualCategory2;
})(SpcVisualCategory || {});
function sideFlags(row) {
  const upAny = !!(row.singlePointUp || row.twoSigmaUp || row.shiftUp || row.trendUp);
  const downAny = !!(row.singlePointDown || row.twoSigmaDown || row.shiftDown || row.trendDown);
  return { upAny, downAny };
}
function computeSpcVisualCategories(rows, opts) {
  var _a, _b;
  const metricImprovement = opts.metricImprovement;
  const trendVisualMode = (_a = opts.trendVisualMode) != null ? _a : "Ungated";
  const enableNeutral = (_b = opts.enableNeutralNoJudgement) != null ? _b : true;
  return rows.map((row) => {
    if (!row || row.value == null || row.ghost) return "Common" /* Common */;
    const { upAny, downAny } = sideFlags(row);
    if (upAny && downAny) return "Improvement" /* Improvement */;
    switch (row.variationIcon) {
      case "ImprovementHigh" /* ImprovementHigh */:
      case "ImprovementLow" /* ImprovementLow */:
        return "Improvement" /* Improvement */;
      case "ConcernHigh" /* ConcernHigh */:
      case "ConcernLow" /* ConcernLow */:
        return "Concern" /* Concern */;
      case "NeitherHigh" /* NeitherHigh */:
      case "NeitherLow" /* NeitherLow */: {
        if (trendVisualMode === "Ungated" && metricImprovement !== "Neither" /* Neither */) {
          if (upAny && !downAny) {
            return metricImprovement === "Up" /* Up */ ? "Improvement" /* Improvement */ : "Concern" /* Concern */;
          }
          if (downAny && !upAny) {
            return metricImprovement === "Down" /* Down */ ? "Improvement" /* Improvement */ : "Concern" /* Concern */;
          }
        }
        return enableNeutral ? "NoJudgement" /* NoJudgement */ : "Common" /* Common */;
      }
      default:
        return "Common" /* Common */;
    }
  });
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/postprocess/boundaryWindows.ts
function computeBoundaryWindowCategories(rows, metricImprovement, options) {
  var _a, _b, _c, _d, _e, _f;
  const mode = (_a = options == null ? void 0 : options.mode) != null ? _a : "Disabled";
  if (!rows.length) return [];
  let out = computeSpcVisualCategories(rows, {
    metricImprovement,
    trendVisualMode: "Ungated",
    enableNeutralNoJudgement: true
  });
  if (mode !== "RecalcCrossing") return out;
  if (metricImprovement === "Neither" /* Neither */) return out;
  const preWin = Math.max(0, (_b = options == null ? void 0 : options.preWindow) != null ? _b : 2);
  const postWin = Math.max(0, (_c = options == null ? void 0 : options.postWindow) != null ? _c : 3);
  const prePolarity = (_d = options == null ? void 0 : options.prePolarity) != null ? _d : "Opposite";
  const setIfUpgrade = (idx, cat) => {
    if (idx < 0 || idx >= out.length) return;
    const cur = out[idx];
    if (cur === "Common" /* Common */ || cur === "NoJudgement" /* NoJudgement */) {
      out[idx] = cat;
    }
  };
  const partitionFallbackMean = (pid) => {
    if (pid == null) return null;
    const values = [];
    for (const r of rows) {
      if (r.partitionId !== pid) continue;
      if (typeof r.value === "number" && !r.ghost) values.push(r.value);
    }
    if (!values.length) return null;
    const sum = values.reduce((a, b) => a + b, 0);
    return sum / values.length;
  };
  const boundaries = Array.isArray(options == null ? void 0 : options.boundaryIndices) && options.boundaryIndices.length ? options.boundaryIndices.slice().filter((b) => Number.isFinite(b)) : (() => {
    const out2 = [];
    for (let i = 1; i < rows.length; i++) {
      const prev = rows[i - 1];
      const cur = rows[i];
      if (!prev || !cur) continue;
      if (cur.partitionId === prev.partitionId) continue;
      out2.push(i);
    }
    return out2;
  })();
  for (const boundary of boundaries) {
    const prev = rows[boundary - 1];
    const cur = rows[boundary];
    if (!prev || !cur) continue;
    let oldMean = null;
    for (let j = boundary - 1; j >= 0; j--) {
      const r = rows[j];
      if (r.partitionId !== prev.partitionId) break;
      if (typeof r.mean === "number") {
        oldMean = r.mean;
        break;
      }
    }
    let newMean = null;
    for (let k = boundary; k < rows.length; k++) {
      const r = rows[k];
      if (r.partitionId !== cur.partitionId) break;
      if (typeof r.mean === "number") {
        newMean = r.mean;
        break;
      }
    }
    if (oldMean == null)
      oldMean = partitionFallbackMean((_e = prev.partitionId) != null ? _e : null);
    if (newMean == null)
      newMean = partitionFallbackMean((_f = cur.partitionId) != null ? _f : null);
    if (oldMean == null || newMean == null) continue;
    const delta = newMean - oldMean;
    const favourable = metricImprovement === "Up" /* Up */ ? delta > 0 : delta < 0;
    const postCat = favourable ? "Improvement" /* Improvement */ : "Concern" /* Concern */;
    const preCat = prePolarity === "Same" ? postCat : favourable ? "Concern" /* Concern */ : "Improvement" /* Improvement */;
    for (let p = 1; p <= preWin; p++) setIfUpgrade(boundary - p, preCat);
    for (let p = 0; p < postWin; p++) setIfUpgrade(boundary + p, postCat);
  }
  return out;
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/engine.ts
function buildSpcV26a(args) {
  var _a, _b, _c, _d;
  const { chartType, metricImprovement, data, settings } = args;
  const s = {
    minimumPoints: 13,
    shiftPoints: 6,
    trendPoints: 6,
    excludeMovingRangeOutliers: false,
    metricConflictRule: "Improvement" /* Improvement */,
    trendAcrossPartitions: false,
    twoSigmaIncludeAboveThree: false,
    preferImprovementWhenConflict: false,
    conflictStrategy: "SqlPrimeThenRule" /* SqlPrimeThenRule */,
    ruleHierarchy: void 0,
    chartLevelEligibility: false,
    trendFavourableSegmentation: false,
    trendSegmentationMode: "Off" /* Off */,
    trendSegmentationStrategy: "CrossingAfterUnfavourable" /* CrossingAfterUnfavourable */,
    trendDominatesHighlightedWindow: false,
    ...settings
  };
  const resolvedMode = (_d = (_a = args.settings) == null ? void 0 : _a.trendSegmentationMode) != null ? _d : ((_b = args.settings) == null ? void 0 : _b.trendFavourableSegmentation) === true ? "Always" /* Always */ : ((_c = args.settings) == null ? void 0 : _c.trendFavourableSegmentation) === false ? "Off" /* Off */ : s.trendSegmentationMode;
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
  const segmentationEnabled = (s.trendFavourableSegmentation || resolvedMode !== "Off" /* Off */) && !s.preferImprovementWhenConflict;
  const totalEligiblePoints = canon.filter((r) => !r.ghost && isNumber(r.value)).length;
  const chartEligible = !!s.chartLevelEligibility && totalEligiblePoints >= s.minimumPoints;
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
      const eligibleHere = chartEligible ? true : pointRank >= s.minimumPoints;
      return {
        rowId: r.rowId,
        x: r.x,
        value: isNumber(r.value) ? r.value : null,
        ghost: r.ghost,
        partitionId,
        pointRank,
        mean: (eligibleHere || chartEligible) && isNumber(lim.mean) ? lim.mean : null,
        upperProcessLimit: eligibleHere || chartEligible ? lim.upperProcessLimit : null,
        lowerProcessLimit: eligibleHere || chartEligible ? lim.lowerProcessLimit : null,
        upperTwoSigma: eligibleHere || chartEligible ? lim.upperTwoSigma : null,
        lowerTwoSigma: eligibleHere || chartEligible ? lim.lowerTwoSigma : null,
        upperOneSigma: eligibleHere || chartEligible ? lim.upperOneSigma : null,
        lowerOneSigma: eligibleHere || chartEligible ? lim.lowerOneSigma : null,
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
    const maybeApplySegmentation = (rows) => {
      const hasConflict = rows.some(
        (r) => (r.singlePointUp || r.twoSigmaUp || r.shiftUp || r.trendUp) && (r.singlePointDown || r.twoSigmaDown || r.shiftDown || r.trendDown)
      );
      if (resolvedMode === "Off" /* Off */ || resolvedMode === "AutoWhenConflict" /* AutoWhenConflict */ && !hasConflict) {
        return;
      }
      const runs = computeTrendSegments(rows);
      const highlights = chooseSegmentsForHighlight(runs, {
        metricImprovement,
        strategy: s.trendSegmentationStrategy
      });
      const allowUp = /* @__PURE__ */ new Set();
      const allowDown = /* @__PURE__ */ new Set();
      for (const seg of highlights) {
        for (let k = seg.start; k <= seg.end; k++) {
          if (seg.trendDirection === "Up") allowUp.add(k);
          else allowDown.add(k);
        }
      }
      rows.forEach((row, idx) => {
        row.trendUp = allowUp.has(idx) ? row.trendUp : false;
        row.trendDown = allowDown.has(idx) ? row.trendDown : false;
        if (s.trendDominatesHighlightedWindow) {
          if (allowUp.has(idx)) {
            row.singlePointDown = false;
            row.twoSigmaDown = false;
            row.shiftDown = false;
          } else if (allowDown.has(idx)) {
            row.singlePointUp = false;
            row.twoSigmaUp = false;
            row.shiftUp = false;
          }
        }
      });
    };
    if (segmentationEnabled) {
      maybeApplySegmentation(withLines);
    }
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
        applySqlPruning(row, metricImprovement, s.metricConflictRule, s.preferImprovementWhenConflict === true, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === true);
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
  if (s.trendAcrossPartitions) {
    if (segmentationEnabled) {
      const hasConflict = out.some(
        (r) => (r.singlePointUp || r.twoSigmaUp || r.shiftUp || r.trendUp) && (r.singlePointDown || r.twoSigmaDown || r.shiftDown || r.trendDown)
      );
      if (resolvedMode === "Always" /* Always */ || resolvedMode === "AutoWhenConflict" /* AutoWhenConflict */ && hasConflict) {
        const runs = computeTrendSegments(out);
        const highlights = chooseSegmentsForHighlight(runs, { metricImprovement, strategy: s.trendSegmentationStrategy });
        const allowUp = /* @__PURE__ */ new Set();
        const allowDown = /* @__PURE__ */ new Set();
        for (const seg of highlights) {
          for (let k = seg.start; k <= seg.end; k++) {
            if (seg.trendDirection === "Up") allowUp.add(k);
            else allowDown.add(k);
          }
        }
        out.forEach((row, idx) => {
          row.trendUp = allowUp.has(idx) ? row.trendUp : false;
          row.trendDown = allowDown.has(idx) ? row.trendDown : false;
          if (s.trendDominatesHighlightedWindow) {
            if (allowUp.has(idx)) {
              row.singlePointDown = false;
              row.twoSigmaDown = false;
              row.shiftDown = false;
            } else if (allowDown.has(idx)) {
              row.singlePointUp = false;
              row.twoSigmaUp = false;
              row.shiftUp = false;
            }
          }
        });
      }
    }
    for (const row of out) {
      if (row.ghost || !isNumber(row.value) || row.mean === null) continue;
      if (metricImprovement === "Neither" /* Neither */) continue;
      const { aligned, opposite } = deriveOriginalCandidates(row, metricImprovement);
      row.specialCauseImprovementValue = aligned ? row.value : null;
      row.specialCauseConcernValue = opposite ? row.value : null;
      applySqlPruning(row, metricImprovement, s.metricConflictRule, s.preferImprovementWhenConflict === true, s.conflictStrategy, s.ruleHierarchy, s.preferTrendWhenConflict === true);
    }
  }
  return { rows: out };
}
function buildSpcV26aWithVisuals(args, visuals) {
  var _a, _b, _c;
  const res = buildSpcV26a(args);
  const base = computeSpcVisualCategories(res.rows, {
    metricImprovement: args.metricImprovement,
    trendVisualMode: (_a = visuals == null ? void 0 : visuals.trendVisualMode) != null ? _a : "Ungated",
    enableNeutralNoJudgement: (_b = visuals == null ? void 0 : visuals.enableNeutralNoJudgement) != null ? _b : true
  });
  const bw = visuals == null ? void 0 : visuals.boundaryWindows;
  if (!bw || bw.mode !== "RecalcCrossing") return { rows: res.rows, visuals: base };
  const dir = (_c = bw.directionOverride) != null ? _c : args.metricImprovement;
  const win = computeBoundaryWindowCategories(res.rows, dir, bw);
  const overlay = base.map((cat, i) => {
    const w = win[i];
    if (cat === "Common" /* Common */ || cat === "NoJudgement" /* NoJudgement */) {
      if (w === "Improvement" /* Improvement */) return "Improvement" /* Improvement */;
      if (w === "Concern" /* Concern */) return "Concern" /* Concern */;
    }
    return cat;
  });
  return { rows: res.rows, visuals: overlay };
}

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/presets.ts
var VisualsScenario = /* @__PURE__ */ ((VisualsScenario2) => {
  VisualsScenario2["None"] = "none";
  VisualsScenario2["RecalcCrossingShift"] = "recalc-crossing-shift";
  VisualsScenario2["RecalcCrossingTrend"] = "recalc-crossing-trend";
  VisualsScenario2["RecalcCrossingTwoSigma"] = "recalc-crossing-two-sigma";
  VisualsScenario2["RecalculationsRecalculated"] = "recalculations-recalculated";
  VisualsScenario2["BaselinesRecalculated"] = "baselines-recalculated";
  return VisualsScenario2;
})(VisualsScenario || {});
function buildVisualsForScenario(args, scenario, opts) {
  var _a, _b;
  const tvm = (_a = opts == null ? void 0 : opts.trendVisualMode) != null ? _a : "Ungated";
  const enn = (_b = opts == null ? void 0 : opts.enableNeutralNoJudgement) != null ? _b : true;
  const explicitBoundaries = Array.isArray(args.data) ? args.data.map((d, i) => (d == null ? void 0 : d.baseline) ? i : -1).filter((i) => i >= 0) : [];
  let boundaryWindows;
  switch (scenario) {
    case "recalc-crossing-shift" /* RecalcCrossingShift */: {
      boundaryWindows = {
        mode: "RecalcCrossing",
        preWindow: 2,
        postWindow: 4,
        prePolarity: "Same",
        directionOverride: "Down" /* Down */,
        boundaryIndices: explicitBoundaries
      };
      break;
    }
    case "recalc-crossing-trend" /* RecalcCrossingTrend */: {
      boundaryWindows = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 5,
        prePolarity: "Same",
        directionOverride: "Up" /* Up */,
        boundaryIndices: explicitBoundaries
      };
      break;
    }
    case "recalc-crossing-two-sigma" /* RecalcCrossingTwoSigma */: {
      boundaryWindows = {
        mode: "RecalcCrossing",
        preWindow: 1,
        postWindow: 1,
        prePolarity: "Same",
        directionOverride: "Down" /* Down */,
        boundaryIndices: explicitBoundaries
      };
      break;
    }
    case "baselines-recalculated" /* BaselinesRecalculated */:
      boundaryWindows = {
        mode: "RecalcCrossing",
        preWindow: 0,
        postWindow: 0,
        prePolarity: "Same",
        directionOverride: args.metricImprovement,
        boundaryIndices: explicitBoundaries
      };
      break;
    case "recalculations-recalculated" /* RecalculationsRecalculated */:
    case "none" /* None */:
    default:
      boundaryWindows = void 0;
  }
  const { rows, visuals } = buildSpcV26aWithVisuals(args, {
    trendVisualMode: tvm,
    enableNeutralNoJudgement: enn,
    boundaryWindows
  });
  let out = visuals.slice();
  let boundaryIndex = explicitBoundaries.length ? explicitBoundaries[0] : -1;
  if (boundaryIndex < 0) {
    for (let i = 1; i < rows.length; i++) {
      if (rows[i].partitionId !== rows[i - 1].partitionId) {
        boundaryIndex = i;
        break;
      }
    }
  }
  if (scenario === "recalculations-recalculated" /* RecalculationsRecalculated */ || scenario === "baselines-recalculated" /* BaselinesRecalculated */) {
    if (boundaryIndex > 0) {
      out[boundaryIndex - 1] = "Common" /* Common */;
    }
  }
  return { rows, visuals: out };
}
var PARITY_V26 = Object.freeze({
  minimumPoints: 13,
  shiftPoints: 6,
  trendPoints: 6,
  excludeMovingRangeOutliers: false,
  metricConflictRule: "Improvement" /* Improvement */,
  trendAcrossPartitions: true,
  twoSigmaIncludeAboveThree: true,
  chartLevelEligibility: true
});
function withParityV26(overrides) {
  return { ...PARITY_V26, ...overrides != null ? overrides : {} };
}
function withConflictPresetV26(overrides) {
  return withParityV26({
    trendSegmentationMode: "AutoWhenConflict" /* AutoWhenConflict */,
    trendSegmentationStrategy: "CrossingAfterUnfavourable" /* CrossingAfterUnfavourable */,
    // Keep strict SQL pruning semantics by default; allow caller to opt into stronger levers below
    preferTrendWhenConflict: false,
    trendDominatesHighlightedWindow: false,
    ...overrides != null ? overrides : {}
  });
}
function withConflictPresetAutoV26(metricImprovement, overrides) {
  switch (metricImprovement) {
    case "Up" /* Up */:
      return withConflictPresetV26({
        // Engine will gate segmentation off when this is true
        preferImprovementWhenConflict: true,
        trendSegmentationMode: "Off" /* Off */,
        ...overrides != null ? overrides : {}
      });
    case "Down" /* Down */:
      return withConflictPresetV26({
        // Keep segmentation to resolve cross-mean runs for low-is-good datasets
        preferImprovementWhenConflict: false,
        trendSegmentationMode: "AutoWhenConflict" /* AutoWhenConflict */,
        trendSegmentationStrategy: "CrossingAfterUnfavourable" /* CrossingAfterUnfavourable */,
        ...overrides != null ? overrides : {}
      });
    default:
      return withConflictPresetV26({ ...overrides != null ? overrides : {} });
  }
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

// src/components/DataVisualisation/charts/SPC/SPCChart/logic_v2/retroOverlay.ts
function iconFor(side, dir) {
  if (dir === "Neither" /* Neither */) {
    return side === "up" ? "NeitherHigh" /* NeitherHigh */ : "NeitherLow" /* NeitherLow */;
  }
  if (dir === "Up" /* Up */) {
    return side === "up" ? "ImprovementHigh" /* ImprovementHigh */ : "ConcernLow" /* ConcernLow */;
  }
  return side === "up" ? "ConcernHigh" /* ConcernHigh */ : "ImprovementLow" /* ImprovementLow */;
}
function computeRetroShiftOverlay(rows, metricImprovement, opts) {
  const { enableShift = true } = opts != null ? opts : {};
  const overlay = Array(rows.length).fill(null);
  if (!enableShift) return overlay;
  const byPart = /* @__PURE__ */ new Map();
  rows.forEach((r, i) => {
    if (!byPart.has(r.partitionId)) byPart.set(r.partitionId, []);
    byPart.get(r.partitionId).push(i);
  });
  for (const [, idxs] of byPart) {
    const firstEligibleIdx = idxs.find((i) => isNumber(rows[i].mean));
    if (firstEligibleIdx == null) continue;
    let runStart = null;
    let runSide = null;
    const commitRun = (startIdx, side) => {
      const refMean = rows[startIdx].mean;
      for (let j = startIdx - 1; j >= idxs[0]; j--) {
        const r = rows[j];
        if (r.ghost || !isNumber(r.value)) continue;
        if (j >= firstEligibleIdx) break;
        const sameSide = side === "up" ? r.value > refMean : r.value < refMean;
        if (!sameSide) break;
        overlay[j] = iconFor(side, metricImprovement);
      }
    };
    for (const i of idxs) {
      const r = rows[i];
      const eligible = isNumber(r.mean);
      if (!eligible) continue;
      const up = !!r.shiftUp;
      const down = !!r.shiftDown;
      const side = up ? "up" : down ? "down" : null;
      if (side) {
        if (runStart == null) {
          runStart = i;
          runSide = side;
        } else if (runSide === side) {
        } else {
          commitRun(runStart, runSide);
          runStart = i;
          runSide = side;
        }
      } else if (runStart != null) {
        commitRun(runStart, runSide);
        runStart = null;
        runSide = null;
      }
    }
    if (runStart != null && runSide != null) commitRun(runStart, runSide);
  }
  return overlay;
}
export {
  AssuranceIcon,
  ChartType,
  ConflictStrategy,
  D2,
  ImprovementDirection,
  MR_UCL_FACTOR,
  MetricConflictRule,
  PARITY_V26,
  PrimeDirection,
  RULE_RANK_BY_ID,
  Side,
  SpcRuleId,
  SpcVisualCategory,
  TrendSegmentationMode,
  TrendSegmentationStrategy,
  VariationIcon,
  VisualsScenario,
  XMR_THREE_SIGMA_FACTOR,
  applySqlPruning,
  buildSpcV26a,
  buildSpcV26aWithVisuals,
  buildVisualsForScenario,
  chooseSegmentsForHighlight,
  computeAssuranceIcon,
  computeAssuranceIconXmR,
  computeBoundaryWindowCategories,
  computePartitionLimits,
  computeRetroShiftOverlay,
  computeSideFlags,
  computeSpcVisualCategories,
  computeTrendSegments,
  deriveOriginalCandidates,
  detectRulesInPartition,
  getDirectionalSummary,
  hasDirectionalConflict,
  isNumber,
  mean,
  movingRanges,
  mrMeanWithOptionalExclusion,
  resolveConflict,
  toCountBetweenEvents,
  toTimeBetweenEvents,
  withConflictPresetAutoV26,
  withConflictPresetV26,
  withParityV26,
  xmrLimits
};
//# sourceMappingURL=index.js.map
