import * as React from "react";
import { useTooltipContext } from "../../../core/TooltipContext";
import { AssuranceIcon } from "./logic/spc";
import { extractRuleIds, ruleGlossary, variationLabel } from "./logic/spcDescriptors";

export interface SPCSignalsInspectorProps {
  /** Engine rows from buildSpc; used to read variation/assurance and rule flags */
  engineRows: any[] | null;
  /** Optional measure name/unit for labels */
  measureName?: string;
  measureUnit?: string;
}

/**
 * Minimal, additive Signals Inspector.
 * - Listens to TooltipContext focus and renders details for the focused point.
 * - Shows value, variation classification, assurance, and triggered rules (with narration).
 * - Keyboard arrows via InteractionLayer already drive focus; this panel mirrors that state.
 */
const SPCSignalsInspector: React.FC<SPCSignalsInspectorProps> = ({ engineRows, measureName, measureUnit }) => {
  const t = useTooltipContext();
  const focused = t?.focused ?? null;
  const index = focused?.index ?? null;
  const row = typeof index === "number" && engineRows ? engineRows[index] : null;

  const rules = React.useMemo(() => (row ? extractRuleIds(row) : []), [row]);
  const uniqueRuleNarr = React.useMemo(
    () => Array.from(new Set(rules.map((r) => ruleGlossary[r]?.narration).filter(Boolean))),
    [rules]
  );

  return (
    <div className="fdp-spc-inspector" role="region" aria-label="Signals inspector" data-testid="spc-signals-inspector">
      <div className="fdp-spc-inspector__header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <strong>Signals inspector</strong>
        <div className="fdp-spc-inspector__nav" aria-hidden={!t}>
          {/* Optional quick nav when tooltip context present */}
          {t && (
            <div style={{ display: "flex", gap: 8 }}>
              <button
                type="button"
                className="fdp-button fdp-button--secondary"
                onClick={() => {
                  if (!t.focused) t.focusFirstPoint();
                  else t.focusPrevPoint();
                }}
                aria-label="Previous point"
              >
                ◀
              </button>
              <button
                type="button"
                className="fdp-button fdp-button--secondary"
                onClick={() => {
                  if (!t.focused) t.focusFirstPoint();
                  else t.focusNextPoint();
                }}
                aria-label="Next point"
              >
                ▶
              </button>
            </div>
          )}
        </div>
      </div>
      {!row || !focused ? (
        <p className="fdp-spc-inspector__empty">No point selected.</p>
      ) : (
        <div className="fdp-spc-inspector__body">
          <div className="fdp-spc-inspector__summary" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <span>
              <strong>Point:</strong> {focused.index + 1}
            </span>
            <span>
              <strong>Value:</strong> {focused.y}
              {measureUnit ? ` ${measureUnit}` : ""}
              {measureName ? ` ${measureName}` : ""}
            </span>
            <span>
              <strong>Variation:</strong> {variationLabel(row.variationIcon) || "Unknown"}
            </span>
            <span>
              <strong>Assurance:</strong> {row.assuranceIcon === AssuranceIcon.Pass ? "Pass" : row.assuranceIcon === AssuranceIcon.Fail ? "Fail" : "None"}
            </span>
          </div>
          <div className="fdp-spc-inspector__rules" style={{ marginTop: 8 }}>
            <strong>Rules:</strong>
            {rules.length === 0 ? (
              <span> None</span>
            ) : (
              <ul style={{ margin: "4px 0 0 16px" }}>
                {rules.map((r) => (
                  <li key={r} data-rule={r} title={ruleGlossary[r]?.tooltip}>
                    {ruleGlossary[r]?.tooltip || r}
                    {ruleGlossary[r]?.narration ? <span style={{ color: "#555" }}> — {ruleGlossary[r].narration}</span> : null}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {uniqueRuleNarr.length > 0 && (
            <div className="fdp-spc-inspector__narration" style={{ marginTop: 8 }}>
              <strong>Summary:</strong> {uniqueRuleNarr.join("; ")}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SPCSignalsInspector;
