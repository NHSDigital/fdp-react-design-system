// Do not edit directly, this file was auto-generated.

import { useMemo } from 'react';
import * as tokens from '../index';

// TypeScript interfaces for composite tokens
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

export const useTokens = () => {
  return useMemo(() => tokens, []);
};

export const useColors = () => {
  return useMemo(() => ({
    // Border colors
    BorderColorDefault: tokens.BorderColorDefault,
    BorderColorForm: tokens.BorderColorForm,
    BorderColorCard: tokens.BorderColorCard,
    BorderColorCardHover: tokens.BorderColorCardHover,
    BorderColorError: tokens.BorderColorError,
    
    // Primary colors
    ColorPrimaryBlue: tokens.ColorPrimaryBlue,
    ColorPrimaryWhite: tokens.ColorPrimaryWhite,
    ColorPrimaryBlack: tokens.ColorPrimaryBlack,
    ColorPrimaryGreen: tokens.ColorPrimaryGreen,
    ColorPrimaryPurple: tokens.ColorPrimaryPurple,
    ColorPrimaryDarkPink: tokens.ColorPrimaryDarkPink,
    ColorPrimaryRed: tokens.ColorPrimaryRed,
    ColorPrimaryYellow: tokens.ColorPrimaryYellow,
    
    // Secondary colors
    ColorSecondaryPaleYellow: tokens.ColorSecondaryPaleYellow,
    ColorSecondaryWarmYellow: tokens.ColorSecondaryWarmYellow,
    ColorSecondaryOrange: tokens.ColorSecondaryOrange,
    ColorSecondaryAquaGreen: tokens.ColorSecondaryAquaGreen,
    ColorSecondaryPink: tokens.ColorSecondaryPink,
    
    // Grey scale
    ColorGrey1: tokens.ColorGrey1,
    ColorGrey2: tokens.ColorGrey2,
    ColorGrey3: tokens.ColorGrey3,
    ColorGrey4: tokens.ColorGrey4,
    ColorGrey5: tokens.ColorGrey5,
  }), []);
};

export const useSpacing = () => {
  return useMemo(() => ({
    Spacing0: tokens.Spacing0,
    Spacing1: tokens.Spacing1,
    Spacing2: tokens.Spacing2,
    Spacing3: tokens.Spacing3,
    Spacing4: tokens.Spacing4,
    Spacing5: tokens.Spacing5,
    Spacing6: tokens.Spacing6,
    Spacing7: tokens.Spacing7,
    Spacing8: tokens.Spacing8,
    Spacing9: tokens.Spacing9,
  }), []);
};

export const useTypography = () => {
  return useMemo(() => ({
    // Semantic device-grouped typography
    Mobile: {
      Size14: tokens.FontSize14Mobile,
      Size16: tokens.FontSize16Mobile,
      Size19: tokens.FontSize19Mobile,
      Size22: tokens.FontSize22Mobile,
      Size26: tokens.FontSize26Mobile,
      Size36: tokens.FontSize36Mobile,
      Size48: tokens.FontSize48Mobile,
    },
    Tablet: {
      Size14: tokens.FontSize14Tablet,
      Size16: tokens.FontSize16Tablet,
      Size19: tokens.FontSize19Tablet,
      Size22: tokens.FontSize22Tablet,
      Size26: tokens.FontSize26Tablet,
      Size36: tokens.FontSize36Tablet,
      Size48: tokens.FontSize48Tablet,
    },
    Print: {
      Size14: tokens.FontSize14Print,
      Size16: tokens.FontSize16Print,
      Size19: tokens.FontSize19Print,
      Size22: tokens.FontSize22Print,
      Size26: tokens.FontSize26Print,
      Size36: tokens.FontSize36Print,
      Size48: tokens.FontSize48Print,
    },
    Family: {
      Base: tokens.FontFamilyBase,
      Fallback: tokens.FontFamilyFallback,
      Print: tokens.FontFamilyPrint,
    },
    Weight: {
      Normal: tokens.FontWeightNormal,
      Bold: tokens.FontWeightBold,
      Light: tokens.FontWeightLight,
    },
    Base: {
      Size: tokens.FontSizeBase,
      LineHeight: tokens.FontLineHeightBase,
    },
    
    // Backward compatibility - individual exports
    FontFamilyBase: tokens.FontFamilyBase,
    FontFamilyFallback: tokens.FontFamilyFallback,
    FontFamilyPrint: tokens.FontFamilyPrint,
    FontWeightNormal: tokens.FontWeightNormal,
    FontWeightBold: tokens.FontWeightBold,
    FontWeightLight: tokens.FontWeightLight,
    FontSize14Mobile: tokens.FontSize14Mobile,
    FontSize14Tablet: tokens.FontSize14Tablet,
    FontSize14Print: tokens.FontSize14Print,
    FontSize16Mobile: tokens.FontSize16Mobile,
    FontSize16Tablet: tokens.FontSize16Tablet,
    FontSize16Print: tokens.FontSize16Print,
    FontSize19Mobile: tokens.FontSize19Mobile,
    FontSize19Tablet: tokens.FontSize19Tablet,
    FontSize19Print: tokens.FontSize19Print,
    FontSize22Mobile: tokens.FontSize22Mobile,
    FontSize22Tablet: tokens.FontSize22Tablet,
    FontSize22Print: tokens.FontSize22Print,
    FontSize26Mobile: tokens.FontSize26Mobile,
    FontSize26Tablet: tokens.FontSize26Tablet,
    FontSize26Print: tokens.FontSize26Print,
    FontSize36Mobile: tokens.FontSize36Mobile,
    FontSize36Tablet: tokens.FontSize36Tablet,
    FontSize36Print: tokens.FontSize36Print,
    FontSize48Mobile: tokens.FontSize48Mobile,
    FontSize48Tablet: tokens.FontSize48Tablet,
    FontSize48Print: tokens.FontSize48Print,
    FontSizeBase: tokens.FontSizeBase,
    FontLineHeightBase: tokens.FontLineHeightBase,
  }), []);
};

export const useResponsiveSpacing = () => {
  return useMemo(() => ({
    // Semantic device-grouped responsive spacing
    Mobile: {
      Size0: tokens.SpacingResponsive0Mobile,
      Size1: tokens.SpacingResponsive1Mobile,
      Size2: tokens.SpacingResponsive2Mobile,
      Size3: tokens.SpacingResponsive3Mobile,
      Size4: tokens.SpacingResponsive4Mobile,
      Size5: tokens.SpacingResponsive5Mobile,
      Size6: tokens.SpacingResponsive6Mobile,
      Size7: tokens.SpacingResponsive7Mobile,
      Size8: tokens.SpacingResponsive8Mobile,
      Size9: tokens.SpacingResponsive9Mobile,
    },
    Tablet: {
      Size0: tokens.SpacingResponsive0Tablet,
      Size1: tokens.SpacingResponsive1Tablet,
      Size2: tokens.SpacingResponsive2Tablet,
      Size3: tokens.SpacingResponsive3Tablet,
      Size4: tokens.SpacingResponsive4Tablet,
      Size5: tokens.SpacingResponsive5Tablet,
      Size6: tokens.SpacingResponsive6Tablet,
      Size7: tokens.SpacingResponsive7Tablet,
      Size8: tokens.SpacingResponsive8Tablet,
      Size9: tokens.SpacingResponsive9Tablet,
    },
    
    // Backward compatibility - individual exports
    SpacingResponsive0Mobile: tokens.SpacingResponsive0Mobile,
    SpacingResponsive0Tablet: tokens.SpacingResponsive0Tablet,
    SpacingResponsive1Mobile: tokens.SpacingResponsive1Mobile,
    SpacingResponsive1Tablet: tokens.SpacingResponsive1Tablet,
    SpacingResponsive2Mobile: tokens.SpacingResponsive2Mobile,
    SpacingResponsive2Tablet: tokens.SpacingResponsive2Tablet,
    SpacingResponsive3Mobile: tokens.SpacingResponsive3Mobile,
    SpacingResponsive3Tablet: tokens.SpacingResponsive3Tablet,
    SpacingResponsive4Mobile: tokens.SpacingResponsive4Mobile,
    SpacingResponsive4Tablet: tokens.SpacingResponsive4Tablet,
    SpacingResponsive5Mobile: tokens.SpacingResponsive5Mobile,
    SpacingResponsive5Tablet: tokens.SpacingResponsive5Tablet,
    SpacingResponsive6Mobile: tokens.SpacingResponsive6Mobile,
    SpacingResponsive6Tablet: tokens.SpacingResponsive6Tablet,
    SpacingResponsive7Mobile: tokens.SpacingResponsive7Mobile,
    SpacingResponsive7Tablet: tokens.SpacingResponsive7Tablet,
    SpacingResponsive8Mobile: tokens.SpacingResponsive8Mobile,
    SpacingResponsive8Tablet: tokens.SpacingResponsive8Tablet,
    SpacingResponsive9Mobile: tokens.SpacingResponsive9Mobile,
    SpacingResponsive9Tablet: tokens.SpacingResponsive9Tablet,
  }), []);
};

export const useComponentSpacing = () => {
  return useMemo(() => ({
    // Button spacing
    ButtonSpacingPaddingVerticalMobile: tokens.ButtonSpacingPaddingVerticalMobile,
    ButtonSpacingPaddingHorizontalMobile: tokens.ButtonSpacingPaddingHorizontalMobile,
    ButtonSpacingPaddingVerticalDesktop: tokens.ButtonSpacingPaddingVerticalDesktop,
    ButtonSpacingPaddingHorizontalDesktop: tokens.ButtonSpacingPaddingHorizontalDesktop,
    
    // Card spacing  
    CardSpacingPaddingMobile: tokens.CardSpacingPaddingMobile,
    CardSpacingPaddingDesktop: tokens.CardSpacingPaddingDesktop,
    CardSpacingHeadingMargin: tokens.CardSpacingHeadingMargin,
    
    // Form spacing
    FormSpacingInputPadding: tokens.FormSpacingInputPadding,
    FormSpacingInputMinHeight: tokens.FormSpacingInputMinHeight,
    FormSpacingCheckboxSize: tokens.FormSpacingCheckboxSize,
    FormSpacingCheckboxLabelPadding: tokens.FormSpacingCheckboxLabelPadding,
  }), []);
};

// NHS Typography System Hooks
export const useNHSHeadings = () => {
  return useMemo(() => ({
    xl: tokens.HeadingsNhsukHeadingXl,
    l: tokens.HeadingsNhsukHeadingL,
    m: tokens.HeadingsNhsukHeadingM,
    s: tokens.HeadingsNhsukHeadingS,
    xs: tokens.HeadingsNhsukHeadingXs,
  }), []);
};

export const useNHSParagraphs = () => {
  return useMemo(() => ({
    body: tokens.ParagraphsBody,
    bodyLarge: tokens.ParagraphsBodyLarge,
    bodySmall: tokens.ParagraphsBodySmall,
    ledeText: tokens.ParagraphsLedeText,
    ledeTextSmall: tokens.ParagraphsLedeTextSmall,
  }), []);
};

export const useNHSTypographySystem = (): NHSTypographySystem => {
  return useMemo(() => ({
    headings: {
      xl: tokens.HeadingsNhsukHeadingXl,
      l: tokens.HeadingsNhsukHeadingL,
      m: tokens.HeadingsNhsukHeadingM,
      s: tokens.HeadingsNhsukHeadingS,
      xs: tokens.HeadingsNhsukHeadingXs,
    },
    paragraphs: {
      body: tokens.ParagraphsBody,
      bodyLarge: tokens.ParagraphsBodyLarge,
      bodySmall: tokens.ParagraphsBodySmall,
      ledeText: tokens.ParagraphsLedeText,
      ledeTextSmall: tokens.ParagraphsLedeTextSmall,
    },
    fonts: {
      family: {
        base: tokens.FontFamilyBase,
        fallback: tokens.FontFamilyFallback,
        print: tokens.FontFamilyPrint,
      },
      weight: {
        normal: tokens.FontWeightNormal,
        bold: tokens.FontWeightBold,
        light: tokens.FontWeightLight,
      },
      sizes: {
        mobile: {
          size14: tokens.FontSize14Mobile,
          size16: tokens.FontSize16Mobile,
          size19: tokens.FontSize19Mobile,
          size22: tokens.FontSize22Mobile,
          size26: tokens.FontSize26Mobile,
          size36: tokens.FontSize36Mobile,
          size48: tokens.FontSize48Mobile,
        },
        tablet: {
          size14: tokens.FontSize14Tablet,
          size16: tokens.FontSize16Tablet,
          size19: tokens.FontSize19Tablet,
          size22: tokens.FontSize22Tablet,
          size26: tokens.FontSize26Tablet,
          size36: tokens.FontSize36Tablet,
          size48: tokens.FontSize48Tablet,
        },
        print: {
          size14: tokens.FontSize14Print,
          size16: tokens.FontSize16Print,
          size19: tokens.FontSize19Print,
          size22: tokens.FontSize22Print,
          size26: tokens.FontSize26Print,
          size36: tokens.FontSize36Print,
          size48: tokens.FontSize48Print,
        },
      },
    },
  }), []);
};