import * as tokens from '../index';
export interface ResponsiveProperty<T> {
    mobile: T;
    tablet: T;
    print?: T;
}
export interface NHSHeadingStyle {
    fontFamily: string;
    fontWeight: string;
    fontSize: ResponsiveProperty<string>;
    lineHeight: string;
    marginTop: string;
    marginBottom: ResponsiveProperty<string>;
}
export interface NHSParagraphStyle {
    fontFamily: string;
    fontWeight: string;
    fontSize: ResponsiveProperty<string>;
    lineHeight: string;
    marginTop: string;
    marginBottom: ResponsiveProperty<string>;
}
export interface NHSTypographySystem {
    headings: {
        xl: NHSHeadingStyle;
        l: NHSHeadingStyle;
        m: NHSHeadingStyle;
        s: NHSHeadingStyle;
        xs: NHSHeadingStyle;
    };
    paragraphs: {
        body: NHSParagraphStyle;
        bodyLarge: NHSParagraphStyle;
        bodySmall: NHSParagraphStyle;
        ledeText: NHSParagraphStyle;
        ledeTextSmall: NHSParagraphStyle;
    };
    fonts: {
        family: {
            base: string;
            fallback: string;
            print: string;
        };
        weight: {
            normal: string;
            bold: string;
            light: string;
        };
        sizes: {
            mobile: Record<string, string>;
            tablet: Record<string, string>;
            print: Record<string, string>;
        };
    };
}
export declare const useTokens: () => typeof tokens;
export declare const useColors: () => {
    BorderColorDefault: string;
    BorderColorForm: string;
    BorderColorCard: string;
    BorderColorCardHover: string;
    BorderColorError: string;
    ColorPrimaryBlue: string;
    ColorPrimaryWhite: string;
    ColorPrimaryBlack: string;
    ColorPrimaryGreen: string;
    ColorPrimaryPurple: string;
    ColorPrimaryDarkPink: string;
    ColorPrimaryRed: string;
    ColorPrimaryYellow: string;
    ColorSecondaryPaleYellow: string;
    ColorSecondaryWarmYellow: string;
    ColorSecondaryOrange: string;
    ColorSecondaryAquaGreen: string;
    ColorSecondaryPink: string;
    ColorGrey1: string;
    ColorGrey2: string;
    ColorGrey3: string;
    ColorGrey4: string;
    ColorGrey5: string;
};
export declare const useSpacing: () => {
    Spacing0: string;
    Spacing1: string;
    Spacing2: string;
    Spacing3: string;
    Spacing4: string;
    Spacing5: string;
    Spacing6: string;
    Spacing7: string;
    Spacing8: string;
    Spacing9: string;
};
export declare const useTypography: () => {
    Mobile: {
        Size14: string;
        Size16: string;
        Size19: string;
        Size22: string;
        Size26: string;
        Size36: string;
        Size48: string;
    };
    Tablet: {
        Size14: string;
        Size16: string;
        Size19: string;
        Size22: string;
        Size26: string;
        Size36: string;
        Size48: string;
    };
    Print: {
        Size14: string;
        Size16: string;
        Size19: string;
        Size22: string;
        Size26: string;
        Size36: string;
        Size48: string;
    };
    Family: {
        Base: string;
        Fallback: string;
        Print: string;
    };
    Weight: {
        Normal: string;
        Bold: string;
        Light: string;
    };
    Base: {
        Size: string;
        LineHeight: string;
    };
    FontFamilyBase: string;
    FontFamilyFallback: string;
    FontFamilyPrint: string;
    FontWeightNormal: string;
    FontWeightBold: string;
    FontWeightLight: string;
    FontSize14Mobile: string;
    FontSize14Tablet: string;
    FontSize14Print: string;
    FontSize16Mobile: string;
    FontSize16Tablet: string;
    FontSize16Print: string;
    FontSize19Mobile: string;
    FontSize19Tablet: string;
    FontSize19Print: string;
    FontSize22Mobile: string;
    FontSize22Tablet: string;
    FontSize22Print: string;
    FontSize26Mobile: string;
    FontSize26Tablet: string;
    FontSize26Print: string;
    FontSize36Mobile: string;
    FontSize36Tablet: string;
    FontSize36Print: string;
    FontSize48Mobile: string;
    FontSize48Tablet: string;
    FontSize48Print: string;
    FontSizeBase: string;
    FontLineHeightBase: string;
};
export declare const useResponsiveSpacing: () => {
    Mobile: {
        Size0: string;
        Size1: string;
        Size2: string;
        Size3: string;
        Size4: string;
        Size5: string;
        Size6: string;
        Size7: string;
        Size8: string;
        Size9: string;
    };
    Tablet: {
        Size0: string;
        Size1: string;
        Size2: string;
        Size3: string;
        Size4: string;
        Size5: string;
        Size6: string;
        Size7: string;
        Size8: string;
        Size9: string;
    };
    SpacingResponsive0Mobile: string;
    SpacingResponsive0Tablet: string;
    SpacingResponsive1Mobile: string;
    SpacingResponsive1Tablet: string;
    SpacingResponsive2Mobile: string;
    SpacingResponsive2Tablet: string;
    SpacingResponsive3Mobile: string;
    SpacingResponsive3Tablet: string;
    SpacingResponsive4Mobile: string;
    SpacingResponsive4Tablet: string;
    SpacingResponsive5Mobile: string;
    SpacingResponsive5Tablet: string;
    SpacingResponsive6Mobile: string;
    SpacingResponsive6Tablet: string;
    SpacingResponsive7Mobile: string;
    SpacingResponsive7Tablet: string;
    SpacingResponsive8Mobile: string;
    SpacingResponsive8Tablet: string;
    SpacingResponsive9Mobile: string;
    SpacingResponsive9Tablet: string;
};
export declare const useComponentSpacing: () => {
    ButtonSpacingPaddingVerticalMobile: string;
    ButtonSpacingPaddingHorizontalMobile: string;
    ButtonSpacingPaddingVerticalDesktop: string;
    ButtonSpacingPaddingHorizontalDesktop: string;
    CardSpacingPaddingMobile: string;
    CardSpacingPaddingDesktop: string;
    CardSpacingHeadingMargin: string;
    FormSpacingInputPadding: string;
    FormSpacingInputMinHeight: string;
    FormSpacingCheckboxSize: string;
    FormSpacingCheckboxLabelPadding: string;
};
export declare const useNHSHeadings: () => {
    xl: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
    l: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
    m: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
    s: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
    xs: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
};
export declare const useNHSParagraphs: () => {
    body: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
    bodyLarge: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
    bodySmall: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
    ledeText: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
    ledeTextSmall: {
        fontFamily: string;
        fontWeight: string;
        fontSize: {
            mobile: string;
            tablet: string;
            print: string;
        };
        lineHeight: string;
        marginTop: string;
        marginBottom: {
            mobile: string;
            tablet: string;
        };
    };
};
export declare const useNHSTypographySystem: () => NHSTypographySystem;
