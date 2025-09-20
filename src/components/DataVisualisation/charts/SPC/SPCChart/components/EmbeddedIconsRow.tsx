import * as React from "react";

export function EmbeddedIconsRow({
  variationNode,
  assuranceNode,
  show,
}: {
  variationNode: React.ReactNode;
  assuranceNode: React.ReactNode;
  show: boolean;
}) {
  if (!show) return null;
  return (
    <div className="fdp-spc-chart__top-row" style={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}>
      {variationNode}
      {assuranceNode}
    </div>
  );
}

// Lightweight wrappers used by SPCChart to render the icon containers consistently
export function VariationIconContainer({ children, size }: { children: React.ReactNode; size: number }) {
  return (
    <div className="fdp-spc-chart__embedded-icon" style={{ width: size, height: size }}>
      {children}
    </div>
  );
}

export function AssuranceIconContainer({ children, size }: { children: React.ReactNode; size: number }) {
  return (
    <div className="fdp-spc-chart__embedded-assurance-icon" style={{ width: size, height: size }}>
      {children}
    </div>
  );
}
