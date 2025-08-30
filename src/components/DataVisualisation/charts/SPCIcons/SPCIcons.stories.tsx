import React from "react";
import { SpcVariationIcon } from "./SPCIcon";
import { SPCAssuranceIcon } from "./SPCAssuranceIcon";
import { VariationIcon } from "../SPCChart/logic/spc";
import { Direction } from "./SPCConstants";
import { AssuranceResult } from "./SPCConstants";

export default {
  title: "Data Visualisation/SPC/SPCIcons",
  component: SpcVariationIcon,
};


export const AllVariationIcons = () => (
  <div style={{ display: "flex", gap: 32 }}>
    {(["improvement", "concern", "neither"] as VariationIcon[]).map((icon) => (
      <div key={icon} style={{ textAlign: "center" }}>
        <SpcVariationIcon data={{ variationIcon: icon }} size={56} />
        <div style={{ marginTop: 8, fontFamily: "Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>{icon}</div>
      </div>
    ))}
    {/* No Judgement (none) - Higher */}
    <div style={{ textAlign: "center" }}>
      <SpcVariationIcon data={{ variationIcon: VariationIcon.None, trend: Direction.Higher }} size={56} />
      <div style={{ marginTop: 8, fontFamily: "Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>none (higher)</div>
    </div>
    {/* No Judgement (none) - Lower */}
    <div style={{ textAlign: "center" }}>
      <SpcVariationIcon data={{ variationIcon: VariationIcon.None, trend: Direction.Lower }} size={56} />
      <div style={{ marginTop: 8, fontFamily: "Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>none (lower)</div>
    </div>
  </div>
);

export const AllAssuranceIcons = () => (
  <div style={{ display: "flex", gap: 32 }}>
    {([AssuranceResult.Pass, AssuranceResult.Fail, AssuranceResult.Uncertain] as AssuranceResult[]).map((status) => (
      <div key={status} style={{ textAlign: "center" }}>
        <SPCAssuranceIcon status={status} size={56} />
        <div style={{ marginTop: 8, fontFamily: "Frutiger, Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>{status}</div>
      </div>
    ))}
  </div>
);

AllVariationIcons.storyName = "All Variation Icons (engine enum)";
AllAssuranceIcons.storyName = "All Assurance Icons";
