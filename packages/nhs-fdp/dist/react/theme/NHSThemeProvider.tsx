// Do not edit directly, this file was auto-generated.

import React, { createContext, useContext, ReactNode } from 'react';

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

export interface NHSTheme {  animation: {
    AnimationDurationFast: string;
    AnimationDurationNormal: string;
    AnimationDurationSlow: string;
    AnimationEasingEaseIn: string;
    AnimationEasingEaseOut: string;
    AnimationEasingEaseInOut: string;
    AnimationEasingBounce: string;
  };
  transition: {
    TransitionButtonDefault: string;
    TransitionButtonShadow: string;
    TransitionInputFocus: string;
    TransitionCardHover: string;
  };
  border: {
    BorderWidthDefault: string;
    BorderWidthFormElement: string;
    BorderWidthFormElementError: string;
    BorderWidthCardBottom: string;
    BorderWidthPanel: string;
    BorderWidthTableHeader: string;
    BorderWidthTableCell: string;
    BorderRadiusNone: string;
    BorderRadiusSmall: string;
    BorderRadiusMedium: string;
    BorderRadiusLarge: string;
    BorderColorDefault: string;
    BorderColorForm: string;
    BorderColorCard: string;
    BorderColorCardHover: string;
    BorderColorError: string;
  };
  color: {
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
    ColorTextPrimary: string;
    ColorTextSecondary: string;
    ColorTextReverse: string;
    ColorTextPrint: string;
    ColorLinkDefault: string;
    ColorLinkHover: string;
    ColorLinkActive: string;
    ColorLinkVisited: string;
    ColorFocusBackground: string;
    ColorFocusText: string;
    ColorBorderDefault: string;
    ColorBorderSecondary: string;
    ColorError: string;
    ColorFormBorder: string;
    ColorFormBackground: string;
    ColorButtonPrimaryBackground: string;
    ColorButtonPrimaryText: string;
    ColorButtonPrimaryHover: string;
    ColorButtonPrimaryActive: string;
    ColorButtonPrimaryShadow: string;
    ColorButtonSecondaryBackground: string;
    ColorButtonSecondaryBackgroundSolid: string;
    ColorButtonSecondaryBorder: string;
    ColorButtonSecondaryText: string;
    ColorButtonSecondaryHover: string;
    ColorButtonSecondaryActive: string;
    ColorButtonSecondaryShadow: string;
    ColorButtonReverseBackground: string;
    ColorButtonReverseText: string;
    ColorButtonReverseHover: string;
    ColorButtonReverseActive: string;
    ColorButtonReverseShadow: string;
    ColorButtonWarningBackground: string;
    ColorButtonWarningHover: string;
    ColorButtonWarningActive: string;
    ColorButtonWarningShadow: string;
    ColorButtonLoginBackground: string;
    ColorButtonLoginHover: string;
    ColorButtonLoginActive: string;
    ColorButtonLoginShadow: string;
  };
  component: {
    ComponentButtonPaddingMobileVertical: string;
    ComponentButtonPaddingMobileHorizontal: string;
    ComponentButtonPaddingDesktopVertical: string;
    ComponentButtonPaddingDesktopHorizontal: string;
    ComponentButtonShadowSize: string;
    ComponentFormInputMinHeight: string;
    ComponentFormInputPadding: string;
    ComponentFormCheckboxSize: string;
    ComponentFormCheckboxLabelPadding: string;
    ComponentCardPaddingMobile: string;
    ComponentCardPaddingDesktop: string;
    ComponentCardHeadingMargin: string;
    ComponentPanelPaddingMobile: string;
    ComponentPanelPaddingDesktop: string;
    ComponentBreadcrumbChevronMarginLeft: string;
    ComponentBreadcrumbChevronMarginRight: string;
    ComponentBreadcrumbPaddingTopMobile: string;
    ComponentBreadcrumbPaddingTopDesktop: string;
    ComponentSummaryListCellPaddingVertical: string;
    ComponentSummaryListCellPaddingHorizontal: string;
    ComponentSummaryListRowMargin: string;
    ComponentSpread: string;
    ComponentBlur: string;
    ComponentLink: string;
    ComponentDetails: string;
    ComponentExpander: string;
    ComponentPagination: string;
  };
  button: {
    ButtonPrimaryBackgroundDefault: string;
    ButtonPrimaryBackgroundHover: string;
    ButtonPrimaryBackgroundActive: string;
    ButtonPrimaryBackgroundDisabled: string;
    ButtonPrimaryTextDefault: string;
    ButtonPrimaryTextDisabled: string;
    ButtonPrimaryBorderDefault: string;
    ButtonPrimaryBorderFocus: string;
    ButtonSecondaryBackgroundDefault: string;
    ButtonSecondaryBackgroundSolid: string;
    ButtonSecondaryBackgroundHover: string;
    ButtonSecondaryBackgroundActive: string;
    ButtonSecondaryTextDefault: string;
    ButtonSecondaryBorderDefault: string;
    ButtonSpacingPaddingVerticalMobile: string;
    ButtonSpacingPaddingHorizontalMobile: string;
    ButtonSpacingPaddingVerticalDesktop: string;
    ButtonSpacingPaddingHorizontalDesktop: string;
    ButtonBorderWidth: string;
    ButtonBorderRadius: string;
    ButtonShadowSize: string;
    ButtonTypographyWeight: string;
  };
  card: {
    CardBackgroundDefault: string;
    CardBorderDefault: string;
    CardBorderHover: string;
    CardBorderBottom: string;
    CardTextHeading: string;
    CardTextDescription: string;
    CardTextLink: string;
    CardSpacingPaddingMobile: string;
    CardSpacingPaddingDesktop: string;
    CardSpacingHeadingMargin: string;
    CardBorderWidthDefault: string;
    CardBorderWidthBottom: string;
    CardShadowDefault: string;
    CardShadowHover: string;
  };
  form: {
    FormInputBackgroundDefault: string;
    FormInputBackgroundFocus: string;
    FormInputBackgroundDisabled: string;
    FormInputBackgroundError: string;
    FormInputBorderDefault: string;
    FormInputBorderFocus: string;
    FormInputBorderError: string;
    FormInputBorderDisabled: string;
    FormInputTextDefault: string;
    FormInputTextPlaceholder: string;
    FormInputTextDisabled: string;
    FormLabelTextDefault: string;
    FormLabelTextRequired: string;
    FormLabelTypographyWeight: string;
    FormErrorTextDefault: string;
    FormErrorTypographyWeight: string;
    FormHintTextDefault: string;
    FormSpacingInputPadding: string;
    FormSpacingInputMinHeight: string;
    FormSpacingCheckboxSize: string;
    FormSpacingCheckboxLabelPadding: string;
    FormBorderWidthDefault: string;
    FormBorderWidthError: string;
    FormBorderRadius: string;
  };
  size: {
    SizeIconSmall: string;
    SizeIconMedium: string;
    SizeIconLarge: string;
    SizeIconExtraLarge: string;
    SizeIconNhsDefault: string;
    SizeFormControlSmall: string;
    SizeFormControlMedium: string;
    SizeFormControlLarge: string;
    SizeFormInputWidthXs: string;
    SizeFormInputWidthSm: string;
    SizeFormInputWidthMd: string;
    SizeFormInputWidthLg: string;
    SizeFormInputWidthXl: string;
    SizeFormInputWidth2xl: string;
    SizeFormInputWidth3xl: string;
    SizeButtonMinHeightMobile: string;
    SizeButtonMinHeightDesktop: string;
  };
  layout: {
    LayoutContainerMaxWidth: string;
    LayoutColumnFull: string;
    LayoutColumnHalf: string;
    LayoutColumnThird: string;
    LayoutColumnQuarter: string;
    LayoutColumnActions: string;
  };
  breakpoint: {
    BreakpointMobile: string;
    BreakpointTablet: string;
    BreakpointDesktop: string;
    BreakpointLargeDesktop: string;
  };
  grid: {
    GridPageWidth: string;
    GridGutter: string;
    GridGutterHalf: string;
  };
  state: {
    StateErrorBackground: string;
    StateErrorBorder: string;
    StateErrorText: string;
    StateSuccessBackground: string;
    StateSuccessBorder: string;
    StateSuccessText: string;
    StateWarningBackground: string;
    StateWarningBorder: string;
    StateWarningText: string;
    StateInfoBackground: string;
    StateInfoBorder: string;
    StateInfoText: string;
    StateDisabledBackground: string;
    StateDisabledBorder: string;
    StateDisabledText: string;
  };
  shadow: {
    ShadowButtonDefault: string;
    ShadowButtonSecondary: string;
    ShadowButtonWarning: string;
    ShadowButtonFocus: string;
    ShadowCardDefault: string;
    ShadowCardHover: string;
  };
  'focus-outline': {
    FocusOutlineWidth: string;
    FocusOutlineOffset: string;
    FocusOutlineStyle: string;
  };
  'focus-shadow': {
    FocusShadowInput: string;
    FocusShadowButton: string;
  };
  elevation: {
    ElevationNone: string;
    ElevationLow: string;
    ElevationMedium: string;
    ElevationHigh: string;
  };
  spacing: {
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
  'spacing-responsive': {
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
  font: {
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
  // NHS Typography System
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
}

export const nhsTheme: NHSTheme = {
  animation: {
    AnimationDurationFast: '150ms',
    AnimationDurationNormal: '300ms',
    AnimationDurationSlow: '500ms',
    AnimationEasingEaseIn: 'cubic-bezier(0.4, 0, 1, 1)',
    AnimationEasingEaseOut: 'cubic-bezier(0, 0, 0.2, 1)',
    AnimationEasingEaseInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    AnimationEasingBounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  transition: {
    TransitionButtonDefault: 'background-color 300ms cubic-bezier(0, 0, 0.2, 1)',
    TransitionButtonShadow: 'box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)',
    TransitionInputFocus: 'border-color 150ms cubic-bezier(0, 0, 0.2, 1), box-shadow 150ms cubic-bezier(0, 0, 0.2, 1)',
    TransitionCardHover: 'border-color 300ms cubic-bezier(0, 0, 0.2, 1)',
  },
  border: {
    BorderWidthDefault: '1px',
    BorderWidthFormElement: '2px',
    BorderWidthFormElementError: '4px',
    BorderWidthCardBottom: '4px',
    BorderWidthPanel: '4px',
    BorderWidthTableHeader: '2px',
    BorderWidthTableCell: '1px',
    BorderRadiusNone: '0px',
    BorderRadiusSmall: '4px',
    BorderRadiusMedium: '8px',
    BorderRadiusLarge: '12px',
    BorderColorDefault: '#d8dde0',
    BorderColorForm: '#4c6272',
    BorderColorCard: '#d8dde0',
    BorderColorCardHover: '#aeb7bd',
    BorderColorError: '#d5281b',
  },
  color: {
    ColorPrimaryBlue: '#005eb8',
    ColorPrimaryWhite: '#ffffff',
    ColorPrimaryBlack: '#212b32',
    ColorPrimaryGreen: '#007f3b',
    ColorPrimaryPurple: '#330072',
    ColorPrimaryDarkPink: '#7c2855',
    ColorPrimaryRed: '#d5281b',
    ColorPrimaryYellow: '#ffeb3b',
    ColorSecondaryPaleYellow: '#fff9c4',
    ColorSecondaryWarmYellow: '#ffb81c',
    ColorSecondaryOrange: '#ed8b00',
    ColorSecondaryAquaGreen: '#00a499',
    ColorSecondaryPink: '#ae2573',
    ColorGrey1: '#4c6272',
    ColorGrey2: '#768692',
    ColorGrey3: '#aeb7bd',
    ColorGrey4: '#d8dde0',
    ColorGrey5: '#f0f4f5',
    ColorTextPrimary: '#212b32',
    ColorTextSecondary: '#4c6272',
    ColorTextReverse: '#ffffff',
    ColorTextPrint: '#212b32',
    ColorLinkDefault: '#005eb8',
    ColorLinkHover: '#7c2855',
    ColorLinkActive: '#003087',
    ColorLinkVisited: '#330072',
    ColorFocusBackground: '#ffeb3b',
    ColorFocusText: '#212b32',
    ColorBorderDefault: '#d8dde0',
    ColorBorderSecondary: '#ffffff33',
    ColorError: '#d5281b',
    ColorFormBorder: '#4c6272',
    ColorFormBackground: '#ffffff',
    ColorButtonPrimaryBackground: '#007f3b',
    ColorButtonPrimaryText: '#ffffff',
    ColorButtonPrimaryHover: '#006530',
    ColorButtonPrimaryActive: '#004021',
    ColorButtonPrimaryShadow: '#004021',
    ColorButtonSecondaryBackground: '#00000000',
    ColorButtonSecondaryBackgroundSolid: '#ffffff',
    ColorButtonSecondaryBorder: '#005eb8',
    ColorButtonSecondaryText: '#005eb8',
    ColorButtonSecondaryHover: '#d9e5f2',
    ColorButtonSecondaryActive: '#c7daf0',
    ColorButtonSecondaryShadow: '#005eb8',
    ColorButtonReverseBackground: '#ffffff',
    ColorButtonReverseText: '#212b32',
    ColorButtonReverseHover: '#d9dde0',
    ColorButtonReverseActive: '#b3bcc2',
    ColorButtonReverseShadow: '#b3bcc2',
    ColorButtonWarningBackground: '#d5281b',
    ColorButtonWarningHover: '#aa2016',
    ColorButtonWarningActive: '#6a140e',
    ColorButtonWarningShadow: '#6a140e',
    ColorButtonLoginBackground: '#005eb8',
    ColorButtonLoginHover: '#004b93',
    ColorButtonLoginActive: '#002f5c',
    ColorButtonLoginShadow: '#002f5c',
  },
  component: {
    ComponentButtonPaddingMobileVertical: '8px',
    ComponentButtonPaddingMobileHorizontal: '16px',
    ComponentButtonPaddingDesktopVertical: '12px',
    ComponentButtonPaddingDesktopHorizontal: '16px',
    ComponentButtonShadowSize: '4px',
    ComponentFormInputMinHeight: '40px',
    ComponentFormInputPadding: '4px',
    ComponentFormCheckboxSize: '40px',
    ComponentFormCheckboxLabelPadding: '12px',
    ComponentCardPaddingMobile: '16px',
    ComponentCardPaddingDesktop: '32px',
    ComponentCardHeadingMargin: '16px',
    ComponentPanelPaddingMobile: '20px',
    ComponentPanelPaddingDesktop: '28px',
    ComponentBreadcrumbChevronMarginLeft: '9px',
    ComponentBreadcrumbChevronMarginRight: '2px',
    ComponentBreadcrumbPaddingTopMobile: '16px',
    ComponentBreadcrumbPaddingTopDesktop: '24px',
    ComponentSummaryListCellPaddingVertical: '8px',
    ComponentSummaryListCellPaddingHorizontal: '24px',
    ComponentSummaryListRowMargin: '16px',
    ComponentSpread: '4px',
    ComponentBlur: '4px',
    ComponentLink: '4px',
    ComponentDetails: '8px',
    ComponentExpander: '4px',
    ComponentPagination: '16px',
  },
  button: {
    ButtonPrimaryBackgroundDefault: '#007f3b',
    ButtonPrimaryBackgroundHover: '#006530',
    ButtonPrimaryBackgroundActive: '#004021',
    ButtonPrimaryBackgroundDisabled: '#d8dde0',
    ButtonPrimaryTextDefault: '#ffffff',
    ButtonPrimaryTextDisabled: '#768692',
    ButtonPrimaryBorderDefault: '#00000000',
    ButtonPrimaryBorderFocus: '#ffeb3b',
    ButtonSecondaryBackgroundDefault: '#00000000',
    ButtonSecondaryBackgroundSolid: '#ffffff',
    ButtonSecondaryBackgroundHover: '#d9e5f2',
    ButtonSecondaryBackgroundActive: '#c7daf0',
    ButtonSecondaryTextDefault: '#005eb8',
    ButtonSecondaryBorderDefault: '#005eb8',
    ButtonSpacingPaddingVerticalMobile: '8px',
    ButtonSpacingPaddingHorizontalMobile: '16px',
    ButtonSpacingPaddingVerticalDesktop: '12px',
    ButtonSpacingPaddingHorizontalDesktop: '16px',
    ButtonBorderWidth: '2px',
    ButtonBorderRadius: '4px',
    ButtonShadowSize: '4px',
    ButtonTypographyWeight: '600',
  },
  card: {
    CardBackgroundDefault: '#ffffff',
    CardBorderDefault: '#d8dde0',
    CardBorderHover: '#aeb7bd',
    CardBorderBottom: '#f0f4f5',
    CardTextHeading: '#212b32',
    CardTextDescription: '#212b32',
    CardTextLink: '#005eb8',
    CardSpacingPaddingMobile: '16px',
    CardSpacingPaddingDesktop: '32px',
    CardSpacingHeadingMargin: '16px',
    CardBorderWidthDefault: '1px',
    CardBorderWidthBottom: '4px',
    CardShadowDefault: 'none',
    CardShadowHover: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  form: {
    FormInputBackgroundDefault: '#ffffff',
    FormInputBackgroundFocus: '#ffffff',
    FormInputBackgroundDisabled: '#d8dde0',
    FormInputBackgroundError: '#ffffff',
    FormInputBorderDefault: '#4c6272',
    FormInputBorderFocus: '#ffeb3b',
    FormInputBorderError: '#d5281b',
    FormInputBorderDisabled: '#aeb7bd',
    FormInputTextDefault: '#212b32',
    FormInputTextPlaceholder: '#4c6272',
    FormInputTextDisabled: '#768692',
    FormLabelTextDefault: '#212b32',
    FormLabelTextRequired: '#ffffff',
    FormLabelTypographyWeight: '600',
    FormErrorTextDefault: '#d5281b',
    FormErrorTypographyWeight: '600',
    FormHintTextDefault: '#4c6272',
    FormSpacingInputPadding: '4px',
    FormSpacingInputMinHeight: '40px',
    FormSpacingCheckboxSize: '40px',
    FormSpacingCheckboxLabelPadding: '12px',
    FormBorderWidthDefault: '2px',
    FormBorderWidthError: '4px',
    FormBorderRadius: '0px',
  },
  size: {
    SizeIconSmall: '16px',
    SizeIconMedium: '18px',
    SizeIconLarge: '24px',
    SizeIconExtraLarge: '32px',
    SizeIconNhsDefault: '34px',
    SizeFormControlSmall: '32px',
    SizeFormControlMedium: '40px',
    SizeFormControlLarge: '48px',
    SizeFormInputWidthXs: '5.4ex',
    SizeFormInputWidthSm: '7.2ex',
    SizeFormInputWidthMd: '9ex',
    SizeFormInputWidthLg: '10.8ex',
    SizeFormInputWidthXl: '20ex',
    SizeFormInputWidth2xl: '38ex',
    SizeFormInputWidth3xl: '56ex',
    SizeButtonMinHeightMobile: '44px',
    SizeButtonMinHeightDesktop: '40px',
  },
  layout: {
    LayoutContainerMaxWidth: '1020px',
    LayoutColumnFull: '100%',
    LayoutColumnHalf: '50%',
    LayoutColumnThird: '33.333%',
    LayoutColumnQuarter: '25%',
    LayoutColumnActions: '20%',
  },
  breakpoint: {
    BreakpointMobile: '320px',
    BreakpointTablet: '641px',
    BreakpointDesktop: '1025px',
    BreakpointLargeDesktop: '1280px',
  },
  grid: {
    GridPageWidth: '960px',
    GridGutter: '32px',
    GridGutterHalf: '16px',
  },
  state: {
    StateErrorBackground: '#d5281b',
    StateErrorBorder: '#d5281b',
    StateErrorText: '#ffffff',
    StateSuccessBackground: '#007f3b',
    StateSuccessBorder: '#007f3b',
    StateSuccessText: '#ffffff',
    StateWarningBackground: '#ffeb3b',
    StateWarningBorder: '#ffeb3b',
    StateWarningText: '#212b32',
    StateInfoBackground: '#005eb8',
    StateInfoBorder: '#005eb8',
    StateInfoText: '#ffffff',
    StateDisabledBackground: '#d8dde0',
    StateDisabledBorder: '#aeb7bd',
    StateDisabledText: '#768692',
  },
  shadow: {
    ShadowButtonDefault: '0 4px 0 #004021',
    ShadowButtonSecondary: '0 4px 0 #005eb8',
    ShadowButtonWarning: '0 4px 0 #6a140e',
    ShadowButtonFocus: '0 4px 0 #ffeb3b',
    ShadowCardDefault: 'none',
    ShadowCardHover: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  'focus-outline': {
    FocusOutlineWidth: '4px',
    FocusOutlineOffset: '0px',
    FocusOutlineStyle: 'solid',
  },
  'focus-shadow': {
    FocusShadowInput: '0 0 0 3px #ffeb3b',
    FocusShadowButton: '0 0 0 3px #ffeb3b',
  },
  elevation: {
    ElevationNone: 'none',
    ElevationLow: '0 1px 3px rgba(0, 0, 0, 0.12)',
    ElevationMedium: '0 2px 6px rgba(0, 0, 0, 0.16)',
    ElevationHigh: '0 4px 12px rgba(0, 0, 0, 0.20)',
  },
  spacing: {
    Spacing0: '0',
    Spacing1: '4px',
    Spacing2: '8px',
    Spacing3: '16px',
    Spacing4: '24px',
    Spacing5: '32px',
    Spacing6: '40px',
    Spacing7: '48px',
    Spacing8: '56px',
    Spacing9: '64px',
  },
  'spacing-responsive': {
    SpacingResponsive0Mobile: '0',
    SpacingResponsive0Tablet: '0',
    SpacingResponsive1Mobile: '4px',
    SpacingResponsive1Tablet: '4px',
    SpacingResponsive2Mobile: '8px',
    SpacingResponsive2Tablet: '8px',
    SpacingResponsive3Mobile: '8px',
    SpacingResponsive3Tablet: '16px',
    SpacingResponsive4Mobile: '16px',
    SpacingResponsive4Tablet: '24px',
    SpacingResponsive5Mobile: '24px',
    SpacingResponsive5Tablet: '32px',
    SpacingResponsive6Mobile: '32px',
    SpacingResponsive6Tablet: '40px',
    SpacingResponsive7Mobile: '40px',
    SpacingResponsive7Tablet: '48px',
    SpacingResponsive8Mobile: '48px',
    SpacingResponsive8Tablet: '56px',
    SpacingResponsive9Mobile: '56px',
    SpacingResponsive9Tablet: '64px',
  },
  font: {
    FontFamilyBase: 'Frutiger W01',
    FontFamilyFallback: 'Arial, Helvetica, sans-serif',
    FontFamilyPrint: 'sans-serif',
    FontWeightNormal: '400',
    FontWeightBold: '600',
    FontWeightLight: '400',
    FontSize14Mobile: '12px',
    FontSize14Tablet: '14px',
    FontSize14Print: '12pt',
    FontSize16Mobile: '14px',
    FontSize16Tablet: '16px',
    FontSize16Print: '12pt',
    FontSize19Mobile: '16px',
    FontSize19Tablet: '19px',
    FontSize19Print: '13pt',
    FontSize22Mobile: '19px',
    FontSize22Tablet: '22px',
    FontSize22Print: '15pt',
    FontSize26Mobile: '22px',
    FontSize26Tablet: '26px',
    FontSize26Print: '17pt',
    FontSize36Mobile: '27px',
    FontSize36Tablet: '36px',
    FontSize36Print: '20pt',
    FontSize48Mobile: '33px',
    FontSize48Tablet: '48px',
    FontSize48Print: '24pt',
    FontSizeBase: '16px',
    FontLineHeightBase: '24px',
  },
  // NHS Typography System
  headings: {
    xl: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "33px", tablet: "48px", print: "24pt" },
      lineHeight: "1.09",
      marginTop: "0",
      marginBottom: { mobile: "40px", tablet: "48px" },
    },
    l: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "27px", tablet: "36px", print: "20pt" },
      lineHeight: "1.11",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" },
    },
    m: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.15",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" },
    },
    s: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "19px", tablet: "22px", print: "15pt" },
      lineHeight: "1.18",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" },
    },
    xs: {
      fontFamily: "Frutiger W01",
      fontWeight: "600",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.26",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" },
    },
  },
  paragraphs: {
    body: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.47",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" },
    },
    bodyLarge: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.38",
      marginTop: "0",
      marginBottom: { mobile: "24px", tablet: "32px" },
    },
    bodySmall: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "14px", tablet: "16px", print: "12pt" },
      lineHeight: "1.5",
      marginTop: "0",
      marginBottom: { mobile: "16px", tablet: "24px" },
    },
    ledeText: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "22px", tablet: "26px", print: "17pt" },
      lineHeight: "1.38",
      marginTop: "0",
      marginBottom: { mobile: "40px", tablet: "48px" },
    },
    ledeTextSmall: {
      fontFamily: "Frutiger W01",
      fontWeight: "400",
      fontSize: { mobile: "16px", tablet: "19px", print: "13pt" },
      lineHeight: "1.47",
      marginTop: "0",
      marginBottom: { mobile: "24px", tablet: "32px" },
    },
  },
};

const ThemeContext = createContext<NHSTheme>(nhsTheme);

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Partial<NHSTheme>;
}

export const NHSThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  theme = {} 
}) => {
  const mergedTheme = { ...nhsTheme, ...theme };
  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useNHSTheme = (): NHSTheme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useNHSTheme must be used within an NHSThemeProvider');
  }
  return context;
};

export default nhsTheme;