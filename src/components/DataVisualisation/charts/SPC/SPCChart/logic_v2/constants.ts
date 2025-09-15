import { SpcRuleId } from "./types";

export const RULE_RANK_BY_ID: Record<SpcRuleId, number> = {
	[SpcRuleId.SinglePoint]: 1,
	[SpcRuleId.TwoSigma]: 2,
	[SpcRuleId.Shift]: 3,
	[SpcRuleId.Trend]: 4,
};
