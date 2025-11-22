# POD Dashboard Synthetic Data Generator

## Overview

This module generates realistic synthetic data for POD (Performance Overview Dashboard) metrics based on the actual NHS England metrics defined in `POD.csv`. The data includes:

- **3 organizational levels**: National, Regional, and ICB (Integrated Care Board)
- **8 key NHS performance metrics** across different themes
- **18 months of time series data** (March 2024 - August 2025)
- **Realistic trends and variation** with appropriate volatility
- **Regional variation** reflecting real-world geographic differences
- **SPC-ready data** for Statistical Process Control analysis

## Metrics Included

### 1. A&E 4 Hour Performance
- **Theme**: Urgent and emergency care
- **Unit**: Percentage (%)
- **Target**: 76%
- **Polarity**: Higher is better
- **Trend**: Improving (~72.5% baseline)
- **Source**: Monthly A&E data collection

### 2. Cancer 62-day Combined Standard
- **Theme**: Cancer
- **Unit**: Percentage (%)
- **Target**: 75%
- **Polarity**: Higher is better
- **Trend**: Improving (~68.5% baseline)
- **Source**: Cancer Waiting Times Collection

### 3. RTT 18 Weeks Performance
- **Theme**: Elective care
- **Unit**: Percentage (%)
- **Target**: 92%
- **Polarity**: Higher is better
- **Trend**: Deteriorating (~62.3% baseline)
- **Source**: Referral to Treatment data

### 4. Ambulance Cat 2 Mean Response
- **Theme**: Urgent and emergency care
- **Unit**: Minutes
- **Target**: 18 minutes
- **Polarity**: Lower is better
- **Trend**: Improving (~38.5 minutes baseline)
- **Source**: Monthly Ambulance Quality collection

### 5. % Waiting Over 12 Hours (Type 1 and 2)
- **Theme**: Urgent and emergency care
- **Unit**: Percentage (%)
- **Target**: 0%
- **Polarity**: Lower is better
- **Trend**: Improving (~2.8% baseline)
- **Source**: Emergency Care Data Set (ECDS)

### 6. Average Discharge Delay
- **Theme**: Secondary care
- **Unit**: Days
- **Target**: None specified
- **Polarity**: Lower is better
- **Trend**: Improving (~3.2 days baseline)
- **Source**: Discharge ready date monthly publication

### 7. % Cancers Diagnosed at Stage 1 or 2
- **Theme**: Cancer
- **Unit**: Percentage (%)
- **Target**: 75%
- **Polarity**: Higher is better
- **Trend**: Improving (~54.8% baseline)
- **Source**: Rapid Cancer Registration Data (RCRD)

### 8. Diagnostic Waiting Over 6 Weeks
- **Theme**: Primary prevention
- **Unit**: Percentage (%)
- **Target**: 1%
- **Polarity**: Lower is better
- **Trend**: Deteriorating (~22.5% baseline)
- **Source**: DM01 (Diagnostics Waiting Times)

## Geographic Coverage

### National Level (1 organization)
- **England** (code: ENG)
- Provides the baseline for all metrics

### Regional Level (7 organizations)
NHS England regions with realistic variation from national baseline (±10%):
- London (Y56)
- Midlands (Y58)
- North East and Yorkshire (Y59)
- North West (Y60)
- South East (Y61)
- South West (Y62)
- East of England (Y63)

### ICB Level (14 organizations)
Sample Integrated Care Boards (2-3 per region) with wider variation from regional baseline (±20%):
- **London**: North West London, North East London
- **Midlands**: Birmingham and Solihull, Coventry and Warwickshire
- **North East and Yorkshire**: Humber and North Yorkshire, South Yorkshire
- **North West**: Greater Manchester, Cheshire and Merseyside
- **South East**: Surrey Heartlands, Kent and Medway
- **South West**: Devon, Bristol/North Somerset/South Gloucestershire
- **East of England**: Bedfordshire/Luton/Milton Keynes, Hertfordshire and West Essex

## Data Generation Approach

### Time Series Generation
Each metric's time series is generated using:
- **Base value**: Realistic starting point based on actual NHS performance
- **Trend**: improving/deteriorating/stable over 18 months
- **Volatility**: Random variation appropriate to each metric (3-15%)
- **Constraints**: Values kept within realistic ranges (≥0)

### Geographic Variation
- **Regional variation**: ±10% from national baseline (reflects geographic differences)
- **ICB variation**: ±20% from regional baseline (reflects local system performance)
- **Consistency**: Each ICB's data is derived from its parent region

### Trends
- **Improving**: ~0.3% monthly improvement
- **Deteriorating**: ~0.3% monthly decline  
- **Stable**: Minimal trend, primarily random variation

## Usage

### Basic Usage
```typescript
import { generatePODMetrics } from './PODDashboard.syntheticData';

// Generate all metrics (8 metrics × 22 organizations = 176 data rows)
const allMetrics = generatePODMetrics();

// Filter by organizational level
const nationalMetrics = allMetrics.filter(m => m.level === "National");
const regionalMetrics = allMetrics.filter(m => m.level === "Region");
const icbMetrics = allMetrics.filter(m => m.level === "ICB");

// Filter by metric
const ae4hrMetrics = allMetrics.filter(m => 
  m.metricName === "A&E 4 hour performance"
);

// Filter by organization
const londonMetrics = allMetrics.filter(m => 
  m.orgCode === "Y56" // London region
);
```

### With SPC Analysis
```typescript
import { computeSpcPrecomputed } from "../DataVisualisation/charts/SPC";
import { ChartType } from "../DataVisualisation/charts/SPC/engine";

const metrics = generatePODMetrics();

// Precompute SPC for each metric
const precomputed = new Map();
for (const metric of metrics) {
  const data = metric.dates.map((d, i) => ({ 
    x: d, 
    value: metric.values[i] 
  }));
  
  const summary = computeSpcPrecomputed(data, {
    chartType: ChartType.XmR,
    metricImprovement: metric.improvementDirection,
    minimumPoints: 13,
    enableNeutralNoJudgement: true,
    includeSignalFallbacks: true,
  });
  
  precomputed.set(metric.id, summary);
}
```

### Storybook Examples
See `PODDashboardSynthetic.stories.tsx` for complete implementation examples:
- **SyntheticDataDashboard**: Multi-level view with navigation between National/Regional/ICB
- **NationalViewOnly**: Simplified view showing just England metrics grouped by theme

## Data Structure

### PODMetric Interface
```typescript
interface PODMetric {
  id: string;                    // Unique identifier
  level: OrgLevel;               // "National" | "Region" | "ICB"
  orgCode: string;               // Organization code (e.g., "ENG", "Y56", "QMJ")
  orgName: string;               // Organization name
  theme: string;                 // Performance theme/category
  metricName: string;            // Metric name
  polarity: MetricPolarity;      // HigherIsBetter | LowerIsBetter
  improvementDirection: ImprovementDirection; // Up | Down (for SPC)
  unit: string;                  // "%", "minutes", "days", etc.
  target?: number;               // Performance target (if applicable)
  dates: string[];               // ISO date strings (YYYY-MM)
  values: Array<number | null>;  // Monthly values
}
```

## Data Characteristics

### Total Data Points
- 8 metrics
- 22 organizations (1 national + 7 regions + 14 ICBs)
- 18 months of data
- **Total**: 176 time series (3,168 individual data points)

### Realistic Features
- ✅ Geographic variation (national → regional → ICB hierarchy)
- ✅ Temporal trends (improving, deteriorating, stable)
- ✅ Random variation (volatility appropriate to each metric)
- ✅ Constraint satisfaction (values within realistic ranges)
- ✅ SPC-ready (enables shift detection, outliers, special cause variation)
- ✅ Reproducible (same seed produces same data)

### Limitations
- ❌ Not based on actual NHS data (synthetic only)
- ❌ Correlations between metrics not modeled
- ❌ Seasonal patterns not included
- ❌ COVID/pandemic impacts not modeled
- ❌ Provider-level data not included

## Future Enhancements

Potential additions to make data more realistic:

1. **Seasonal patterns**: Add monthly/quarterly cycles (e.g., winter pressures)
2. **Correlations**: Model relationships between metrics (e.g., A&E performance vs ambulance handover)
3. **Provider level**: Add acute trust/provider data beneath ICB level
4. **Interventions**: Model step-changes from policy changes or initiatives
5. **COVID impact**: Include pandemic-related disruptions
6. **Denominator data**: Include activity volumes alongside performance percentages
7. **Missing data**: Realistic patterns of data submission gaps
8. **Outlier events**: Occasional extreme values (e.g., cyber attacks, weather events)

## Related Files

- `PODDashboard.syntheticData.ts` - Data generation logic
- `PODDashboardSynthetic.stories.tsx` - Storybook examples
- `POD.csv` - Source metric definitions
- `PODDashboard.stories.tsx` - Original dashboard with manual test data
