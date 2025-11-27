export enum BrandKey {
	NHS = "nhs",
	FDP = "fdp",
}

export enum LogoVariant {
	Full = "full",
	Graphic = "graphic",
	Inverse = "inverse",
	TwoLine = "twoLine",
	TwoLineInverse = "twoLineInverse",
	Compact = "compact",
	CompactInverted = "compactInverted",
}

export interface BrandLogo {
	brand: BrandKey;
	variant: LogoVariant;
	src: string; // Vite-resolved URL to the asset
	ariaLabel?: string;
}

// Placeholder mapping; populate with actual assets when provided.
// Import assets (Vite will resolve to URLs)
import FDP_FULL_LOGO from "./fdp/fdp-logo-full.svg";
import FDP_TWO_LINE from "./fdp/fdp-logo-two-line.svg";
import FDP_TWO_INVERSE from "./fdp/fdp-logo-two-line-inverse.svg";
import FDP_INVERSE from "./fdp/fdp-logo-inverse.svg";
import FDP_GRAPHIC from "./fdp/fdp-graphic-device.svg";
import FDP_COMPACT from "./fdp/fdp-logo-compact.svg";
import FDP_INVERTED_COMPACT from "./fdp/fdp-logo-compact-inverted.svg";

export const brandLogos: Record<
	BrandKey,
	Partial<Record<LogoVariant, BrandLogo>>
> = {
	[BrandKey.NHS]: {},
	[BrandKey.FDP]: {
		[LogoVariant.Full]: {
			brand: BrandKey.FDP,
			variant: LogoVariant.Full,
			src: FDP_FULL_LOGO as unknown as string,
			ariaLabel: "FDP",
		},
		[LogoVariant.Graphic]: {
			brand: BrandKey.FDP,
			variant: LogoVariant.Graphic,
			src: FDP_GRAPHIC as unknown as string,
			ariaLabel: "FDP",
		},
		[LogoVariant.Inverse]: {
			brand: BrandKey.FDP,
			variant: LogoVariant.Inverse,
			src: FDP_INVERSE as unknown as string,
			ariaLabel: "FDP",
		},
		[LogoVariant.TwoLine]: {
			brand: BrandKey.FDP,
			variant: LogoVariant.TwoLine,
			src: FDP_TWO_LINE as unknown as string,
			ariaLabel: "FDP",
		},
		[LogoVariant.TwoLineInverse]: {
			brand: BrandKey.FDP,
			variant: LogoVariant.TwoLineInverse,
			src: FDP_TWO_INVERSE as unknown as string,
			ariaLabel: "FDP",
		},
		[LogoVariant.Compact]: {
			brand: BrandKey.FDP,
			variant: LogoVariant.Compact,
			src: FDP_COMPACT as unknown as string,
			ariaLabel: "FDP",
		},
		[LogoVariant.CompactInverted]: {
			brand: BrandKey.FDP,
			variant: LogoVariant.CompactInverted,
			src: FDP_INVERTED_COMPACT as unknown as string,
			ariaLabel: "FDP",
		},
	},
};

export function getBrandLogo(
	brand: BrandKey,
	variant: LogoVariant = LogoVariant.Full
): BrandLogo | undefined {
	return brandLogos[brand]?.[variant];
}
