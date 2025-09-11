import { buildSpc, normaliseSpcSettings, SpcSettingsV2, PrecedenceStrategy, VariationIcon, ImprovementDirection, ChartType } from './spc';

const baseData = [
  { x: 1, value: 10 }, { x: 2, value: 11 }, { x: 3, value: 12 }, { x: 4, value: 13 },
  { x: 5, value: 14 }, { x: 6, value: 15 }, { x: 7, value: 16 }, { x: 8, value: 17 },
  { x: 9, value: 18 }, { x: 10, value: 19 }, { x: 11, value: 20 }, { x: 12, value: 21 },
  { x: 13, value: 22 }
];

describe('normaliseSpcSettings', () => {
  test('maps V2 flag names onto legacy engine fields', () => {
    const v2: SpcSettingsV2 = {
      emergingGraceEnabled: true,
      trendFavourableSideOnly: false,
      collapseWeakerClusterRules: false,
      precedenceStrategy: PrecedenceStrategy.DirectionalFirst,
    };
    const legacy = normaliseSpcSettings(v2) as any;
  expect(legacy.emergingGraceEnabled).toBe(true);
  expect(legacy.trendFavourableSideOnly).toBe(false);
  expect(legacy.collapseWeakerClusterRules).toBe(false);
  // Backwards compatible legacy aliases still populated
  expect(legacy.emergingDirectionGrace).toBe(true);
  expect(legacy.trendSideGatingEnabled).toBe(false);
  expect(legacy.collapseClusterRules).toBe(false);
  });

  test('legacy fields still pass through unchanged when V2 absent', () => {
    const legacy = normaliseSpcSettings({ emergingDirectionGrace: true, trendSideGatingEnabled: true, collapseClusterRules: true });
    expect((legacy as any).emergingDirectionGrace).toBe(true);
    expect((legacy as any).trendSideGatingEnabled).toBe(true);
    expect((legacy as any).collapseClusterRules).toBe(true);
  });

  test('buildSpc accepts V2 flags producing result (smoke)', () => {
    const res = buildSpc({
      chartType: ChartType.XmR,
      metricImprovement: ImprovementDirection.Up,
      data: baseData,
      settings: { emergingGraceEnabled: true, trendFavourableSideOnly: true }
    });
    expect(res.rows.length).toBe(baseData.length);
    // Variation icon may remain none if no special cause; just ensure property exists.
  const icon = res.rows[res.rows.length - 1].variationIcon;
  expect(Object.values(VariationIcon)).toContain(icon);
  });
});
