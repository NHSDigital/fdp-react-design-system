export declare enum BrandKey {
    NHS = "nhs",
    FDP = "fdp"
}
export declare enum LogoVariant {
    Full = "full",
    Graphic = "graphic",
    Inverse = "inverse",
    TwoLine = "twoLine",
    TwoLineInverse = "twoLineInverse",
    Compact = "compact",
    CompactInverted = "compactInverted"
}
export interface BrandLogo {
    brand: BrandKey;
    variant: LogoVariant;
    src: string;
    ariaLabel?: string;
}
export declare const brandLogos: Record<BrandKey, Partial<Record<LogoVariant, BrandLogo>>>;
export declare function getBrandLogo(brand: BrandKey, variant?: LogoVariant): BrandLogo | undefined;
