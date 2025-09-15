import { SpcRuleId } from "./types";

export const RULE_RANK_BY_ID: Record<SpcRuleId, number> = {
	[SpcRuleId.SinglePoint]: 1,
	[SpcRuleId.TwoSigma]: 2,
	[SpcRuleId.Shift]: 3,
	[SpcRuleId.Trend]: 4,
};

// XmR constants to mirror standard SPC formulas (SQL v2.6a parity)
// d2 for n=2
export const D2 = 1.128 as const;
// Moving range UCL factor
export const MR_UCL_FACTOR = 3.267 as const;
// 3σ factor for XmR limits: mean ± 2.66 * MRbar
export const XMR_THREE_SIGMA_FACTOR = 2.66 as const;
