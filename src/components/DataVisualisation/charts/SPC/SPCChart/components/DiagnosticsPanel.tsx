import * as React from "react";
import Table from "../../../../../Tables/Table";
import { Tag } from "../../../../../Tag/Tag";
import { SpcWarningSeverity, SpcWarningCode, SpcWarningCategory } from "../logic_v2/types";

export interface DiagnosticsItem {
  code: SpcWarningCode;
  severity: SpcWarningSeverity;
  category: SpcWarningCategory;
  message: string;
  context?: Record<string, unknown>;
}

export interface DiagnosticsFilter {
  severities?: SpcWarningSeverity[];
  categories?: SpcWarningCategory[];
  codes?: SpcWarningCode[];
}

export function DiagnosticsPanel({
  warnings,
  show,
  formatWarningCategory,
  formatWarningCode,
}: {
  warnings: DiagnosticsItem[];
  show: boolean;
  formatWarningCategory: (c: SpcWarningCategory | string) => string;
  formatWarningCode: (c: SpcWarningCode | string) => string;
}) {
  const [diagnosticsMessage, setDiagnosticsMessage] = React.useState("");
  const lastDiagnosticsRef = React.useRef("");

  React.useEffect(() => {
    if (!show) {
      if (lastDiagnosticsRef.current !== "") {
        lastDiagnosticsRef.current = "";
        setDiagnosticsMessage("");
      }
      return;
    }
    const total = warnings.length;
    if (!total) {
      const msg = "Diagnostics: no warnings.";
      if (msg !== lastDiagnosticsRef.current) {
        lastDiagnosticsRef.current = msg;
        setDiagnosticsMessage(msg);
      }
      return;
    }
    const counts = {
      error: warnings.filter((w) => w.severity === SpcWarningSeverity.Error).length,
      warning: warnings.filter((w) => w.severity === SpcWarningSeverity.Warning).length,
      info: warnings.filter((w) => w.severity === SpcWarningSeverity.Info).length,
    };
    const breakdownParts: string[] = [];
    if (counts.error) breakdownParts.push(`${counts.error} error${counts.error === 1 ? "" : "s"}`);
    if (counts.warning) breakdownParts.push(`${counts.warning} warning${counts.warning === 1 ? "" : "s"}`);
    if (counts.info) breakdownParts.push(`${counts.info} info`);
    const msg = `Diagnostics updated: ${total} warning${total === 1 ? "" : "s"} (${breakdownParts.join(", ")}).`;
    if (msg !== lastDiagnosticsRef.current) {
      lastDiagnosticsRef.current = msg;
      setDiagnosticsMessage(msg);
    }
  }, [show, warnings]);

  if (!show) return null;

  return (
    <>
      {diagnosticsMessage && (
        <div
          data-testid="spc-diagnostics-live"
          aria-live="polite"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: 0,
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          {diagnosticsMessage}
        </div>
      )}
      {warnings.length > 0 && (
        <div className="fdp-spc-chart__warnings" role="region" aria-label="SPC diagnostics">
          <p className="fdp-spc-chart__warnings-heading">Diagnostics</p>
          <Table
            firstCellIsHeader={false}
            panel={false}
            responsive={false}
            head={[{ text: "Severity" }, { text: "Category" }, { text: "Code" }, { text: "Details" }]}
            rows={warnings.map((w) => {
              let severityColor: any = "grey";
              if (w.severity === SpcWarningSeverity.Error) severityColor = "red";
              else if (w.severity === SpcWarningSeverity.Warning) severityColor = "orange";
              else if (w.severity === SpcWarningSeverity.Info) severityColor = "blue";
              return [
                {
                  node: <Tag color={severityColor} text={(w.severity ? String(w.severity) : "Info").replace(/^[a-z]/, (c) => c.toUpperCase())} />,
                  classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--severity",
                },
                {
                  node: w.category ? <Tag color="purple" text={formatWarningCategory(w.category)} /> : (
                    <span className="fdp-spc-chart__warning-empty">–</span>
                  ),
                  classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--category",
                },
                {
                  node: <Tag color="grey" text={formatWarningCode(w.code)} />,
                  classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--code",
                },
                {
                  node: (
                    <div className="fdp-spc-chart__warning-message">
                      <span>{w.message}</span>
                      {w.context && Object.keys(w.context).length > 0 && (
                        <details className="fdp-spc-chart__warning-context" style={{ marginTop: 4 }}>
                          <summary>context</summary>
                          <pre>{JSON.stringify(w.context, null, 2)}</pre>
                        </details>
                      )}
                    </div>
                  ),
                  classes: "fdp-spc-chart__warning-cell fdp-spc-chart__warning-cell--message",
                },
              ];
            })}
            classes="fdp-spc-chart__warnings-table-wrapper"
            tableClasses="fdp-spc-chart__warnings-table"
          />
        </div>
      )}
    </>
  );
}
