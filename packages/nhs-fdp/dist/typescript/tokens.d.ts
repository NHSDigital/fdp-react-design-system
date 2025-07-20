// Do not edit directly, this file was auto-generated.

// Base interfaces for tokens
export interface DesignToken {
  value: string;
  type?: string;
  description?: string;
  attributes?: Record<string, any>;
}

export interface DesignTokens {
  [key: string]: DesignToken | DesignTokens;
}

// TypeScript interfaces for NHS composite tokens
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

// NHS Typography System
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
}

/**  */
export declare const AnimationDurationFast: '';

/**  */
export declare const AnimationDurationNormal: '';

/**  */
export declare const AnimationDurationSlow: '';

/**  */
export declare const AnimationEasingEaseIn: '';

/**  */
export declare const AnimationEasingEaseOut: '';

/**  */
export declare const AnimationEasingEaseInOut: '';

/**  */
export declare const AnimationEasingBounce: '';

/**  */
export declare const TransitionButtonDefault: '';

/**  */
export declare const TransitionButtonShadow: '';

/**  */
export declare const TransitionInputFocus: '';

/**  */
export declare const TransitionCardHover: '';

/**  */
export declare const BorderWidthDefault: '';

/**  */
export declare const BorderWidthFormElement: '';

/**  */
export declare const BorderWidthFormElementError: '';

/**  */
export declare const BorderWidthCardBottom: '';

/**  */
export declare const BorderWidthPanel: '';

/**  */
export declare const BorderWidthTableHeader: '';

/**  */
export declare const BorderWidthTableCell: '';

/**  */
export declare const BorderRadiusNone: '';

/**  */
export declare const BorderRadiusSmall: '';

/**  */
export declare const BorderRadiusMedium: '';

/**  */
export declare const BorderRadiusLarge: '';

/**  */
export declare const BorderColorDefault: '';

/**  */
export declare const BorderColorForm: '';

/**  */
export declare const BorderColorCard: '';

/**  */
export declare const BorderColorCardHover: '';

/**  */
export declare const BorderColorError: '';

/**  */
export declare const ColorPrimaryBlue: '';

/**  */
export declare const ColorPrimaryWhite: '';

/**  */
export declare const ColorPrimaryBlack: '';

/**  */
export declare const ColorPrimaryGreen: '';

/**  */
export declare const ColorPrimaryPurple: '';

/**  */
export declare const ColorPrimaryDarkPink: '';

/**  */
export declare const ColorPrimaryRed: '';

/**  */
export declare const ColorPrimaryYellow: '';

/**  */
export declare const ColorSecondaryPaleYellow: '';

/**  */
export declare const ColorSecondaryWarmYellow: '';

/**  */
export declare const ColorSecondaryOrange: '';

/**  */
export declare const ColorSecondaryAquaGreen: '';

/**  */
export declare const ColorSecondaryPink: '';

/**  */
export declare const ColorGrey1: '';

/**  */
export declare const ColorGrey2: '';

/**  */
export declare const ColorGrey3: '';

/**  */
export declare const ColorGrey4: '';

/**  */
export declare const ColorGrey5: '';

/**  */
export declare const ColorTextPrimary: '';

/**  */
export declare const ColorTextSecondary: '';

/**  */
export declare const ColorTextReverse: '';

/**  */
export declare const ColorTextPrint: '';

/**  */
export declare const ColorLinkDefault: '';

/**  */
export declare const ColorLinkHover: '';

/**  */
export declare const ColorLinkActive: '';

/**  */
export declare const ColorLinkVisited: '';

/**  */
export declare const ColorFocusBackground: '';

/**  */
export declare const ColorFocusText: '';

/**  */
export declare const ColorBorderDefault: '';

/**  */
export declare const ColorBorderSecondary: '';

/**  */
export declare const ColorError: '';

/**  */
export declare const ColorFormBorder: '';

/**  */
export declare const ColorFormBackground: '';

/**  */
export declare const ColorButtonPrimaryBackground: '';

/**  */
export declare const ColorButtonPrimaryText: '';

/**  */
export declare const ColorButtonPrimaryHover: '';

/**  */
export declare const ColorButtonPrimaryActive: '';

/**  */
export declare const ColorButtonPrimaryShadow: '';

/**  */
export declare const ColorButtonSecondaryBackground: '';

/**  */
export declare const ColorButtonSecondaryBackgroundSolid: '';

/**  */
export declare const ColorButtonSecondaryBorder: '';

/**  */
export declare const ColorButtonSecondaryText: '';

/**  */
export declare const ColorButtonSecondaryHover: '';

/**  */
export declare const ColorButtonSecondaryActive: '';

/**  */
export declare const ColorButtonSecondaryShadow: '';

/**  */
export declare const ColorButtonReverseBackground: '';

/**  */
export declare const ColorButtonReverseText: '';

/**  */
export declare const ColorButtonReverseHover: '';

/**  */
export declare const ColorButtonReverseActive: '';

/**  */
export declare const ColorButtonReverseShadow: '';

/**  */
export declare const ColorButtonWarningBackground: '';

/**  */
export declare const ColorButtonWarningHover: '';

/**  */
export declare const ColorButtonWarningActive: '';

/**  */
export declare const ColorButtonWarningShadow: '';

/**  */
export declare const ColorButtonLoginBackground: '';

/**  */
export declare const ColorButtonLoginHover: '';

/**  */
export declare const ColorButtonLoginActive: '';

/**  */
export declare const ColorButtonLoginShadow: '';

/**  */
export declare const ComponentButtonPaddingMobileVertical: '';

/**  */
export declare const ComponentButtonPaddingMobileHorizontal: '';

/**  */
export declare const ComponentButtonPaddingDesktopVertical: '';

/**  */
export declare const ComponentButtonPaddingDesktopHorizontal: '';

/**  */
export declare const ComponentButtonShadowSize: '';

/**  */
export declare const ComponentFormInputMinHeight: '';

/**  */
export declare const ComponentFormInputPadding: '';

/**  */
export declare const ComponentFormCheckboxSize: '';

/**  */
export declare const ComponentFormCheckboxLabelPadding: '';

/**  */
export declare const ComponentCardPaddingMobile: '';

/**  */
export declare const ComponentCardPaddingDesktop: '';

/**  */
export declare const ComponentCardHeadingMargin: '';

/**  */
export declare const ComponentPanelPaddingMobile: '';

/**  */
export declare const ComponentPanelPaddingDesktop: '';

/**  */
export declare const ComponentBreadcrumbChevronMarginLeft: '';

/**  */
export declare const ComponentBreadcrumbChevronMarginRight: '';

/**  */
export declare const ComponentBreadcrumbPaddingTopMobile: '';

/**  */
export declare const ComponentBreadcrumbPaddingTopDesktop: '';

/**  */
export declare const ComponentSummaryListCellPaddingVertical: '';

/**  */
export declare const ComponentSummaryListCellPaddingHorizontal: '';

/**  */
export declare const ComponentSummaryListRowMargin: '';

/**  */
export declare const ComponentSpread: '';

/**  */
export declare const ComponentBlur: '';

/**  */
export declare const ComponentLink: '';

/**  */
export declare const ComponentDetails: '';

/**  */
export declare const ComponentExpander: '';

/**  */
export declare const ComponentPagination: '';

/**  */
export declare const ButtonPrimaryBackgroundDefault: '';

/**  */
export declare const ButtonPrimaryBackgroundHover: '';

/**  */
export declare const ButtonPrimaryBackgroundActive: '';

/**  */
export declare const ButtonPrimaryBackgroundDisabled: '';

/**  */
export declare const ButtonPrimaryTextDefault: '';

/**  */
export declare const ButtonPrimaryTextDisabled: '';

/**  */
export declare const ButtonPrimaryBorderDefault: '';

/**  */
export declare const ButtonPrimaryBorderFocus: '';

/**  */
export declare const ButtonSecondaryBackgroundDefault: '';

/**  */
export declare const ButtonSecondaryBackgroundSolid: '';

/**  */
export declare const ButtonSecondaryBackgroundHover: '';

/**  */
export declare const ButtonSecondaryBackgroundActive: '';

/**  */
export declare const ButtonSecondaryTextDefault: '';

/**  */
export declare const ButtonSecondaryBorderDefault: '';

/**  */
export declare const ButtonSpacingPaddingVerticalMobile: '';

/**  */
export declare const ButtonSpacingPaddingHorizontalMobile: '';

/**  */
export declare const ButtonSpacingPaddingVerticalDesktop: '';

/**  */
export declare const ButtonSpacingPaddingHorizontalDesktop: '';

/**  */
export declare const ButtonBorderWidth: '';

/**  */
export declare const ButtonBorderRadius: '';

/**  */
export declare const ButtonShadowSize: '';

/**  */
export declare const ButtonTypographyWeight: '';

/**  */
export declare const CardBackgroundDefault: '';

/**  */
export declare const CardBorderDefault: '';

/**  */
export declare const CardBorderHover: '';

/**  */
export declare const CardBorderBottom: '';

/**  */
export declare const CardTextHeading: '';

/**  */
export declare const CardTextDescription: '';

/**  */
export declare const CardTextLink: '';

/**  */
export declare const CardSpacingPaddingMobile: '';

/**  */
export declare const CardSpacingPaddingDesktop: '';

/**  */
export declare const CardSpacingHeadingMargin: '';

/**  */
export declare const CardBorderWidthDefault: '';

/**  */
export declare const CardBorderWidthBottom: '';

/**  */
export declare const CardShadowDefault: '';

/**  */
export declare const CardShadowHover: '';

/**  */
export declare const FormInputBackgroundDefault: '';

/**  */
export declare const FormInputBackgroundFocus: '';

/**  */
export declare const FormInputBackgroundDisabled: '';

/**  */
export declare const FormInputBackgroundError: '';

/**  */
export declare const FormInputBorderDefault: '';

/**  */
export declare const FormInputBorderFocus: '';

/**  */
export declare const FormInputBorderError: '';

/**  */
export declare const FormInputBorderDisabled: '';

/**  */
export declare const FormInputTextDefault: '';

/**  */
export declare const FormInputTextPlaceholder: '';

/**  */
export declare const FormInputTextDisabled: '';

/**  */
export declare const FormLabelTextDefault: '';

/**  */
export declare const FormLabelTextRequired: '';

/**  */
export declare const FormLabelTypographyWeight: '';

/**  */
export declare const FormErrorTextDefault: '';

/**  */
export declare const FormErrorTypographyWeight: '';

/**  */
export declare const FormHintTextDefault: '';

/**  */
export declare const FormSpacingInputPadding: '';

/**  */
export declare const FormSpacingInputMinHeight: '';

/**  */
export declare const FormSpacingCheckboxSize: '';

/**  */
export declare const FormSpacingCheckboxLabelPadding: '';

/**  */
export declare const FormBorderWidthDefault: '';

/**  */
export declare const FormBorderWidthError: '';

/**  */
export declare const FormBorderRadius: '';

/**  */
export declare const SizeIconSmall: '';

/**  */
export declare const SizeIconMedium: '';

/**  */
export declare const SizeIconLarge: '';

/**  */
export declare const SizeIconExtraLarge: '';

/**  */
export declare const SizeIconNhsDefault: '';

/**  */
export declare const SizeFormControlSmall: '';

/**  */
export declare const SizeFormControlMedium: '';

/**  */
export declare const SizeFormControlLarge: '';

/**  */
export declare const SizeFormInputWidthXs: '';

/**  */
export declare const SizeFormInputWidthSm: '';

/**  */
export declare const SizeFormInputWidthMd: '';

/**  */
export declare const SizeFormInputWidthLg: '';

/**  */
export declare const SizeFormInputWidthXl: '';

/**  */
export declare const SizeFormInputWidth2xl: '';

/**  */
export declare const SizeFormInputWidth3xl: '';

/**  */
export declare const SizeButtonMinHeightMobile: '';

/**  */
export declare const SizeButtonMinHeightDesktop: '';

/**  */
export declare const LayoutContainerMaxWidth: '';

/**  */
export declare const LayoutColumnFull: '';

/**  */
export declare const LayoutColumnHalf: '';

/**  */
export declare const LayoutColumnThird: '';

/**  */
export declare const LayoutColumnQuarter: '';

/**  */
export declare const LayoutColumnActions: '';

/**  */
export declare const BreakpointMobile: '';

/**  */
export declare const BreakpointTablet: '';

/**  */
export declare const BreakpointDesktop: '';

/**  */
export declare const BreakpointLargeDesktop: '';

/**  */
export declare const GridPageWidth: '';

/**  */
export declare const GridGutter: '';

/**  */
export declare const GridGutterHalf: '';

/**  */
export declare const StateErrorBackground: '';

/**  */
export declare const StateErrorBorder: '';

/**  */
export declare const StateErrorText: '';

/**  */
export declare const StateSuccessBackground: '';

/**  */
export declare const StateSuccessBorder: '';

/**  */
export declare const StateSuccessText: '';

/**  */
export declare const StateWarningBackground: '';

/**  */
export declare const StateWarningBorder: '';

/**  */
export declare const StateWarningText: '';

/**  */
export declare const StateInfoBackground: '';

/**  */
export declare const StateInfoBorder: '';

/**  */
export declare const StateInfoText: '';

/**  */
export declare const StateDisabledBackground: '';

/**  */
export declare const StateDisabledBorder: '';

/**  */
export declare const StateDisabledText: '';

/**  */
export declare const ShadowButtonDefault: '';

/**  */
export declare const ShadowButtonSecondary: '';

/**  */
export declare const ShadowButtonWarning: '';

/**  */
export declare const ShadowButtonFocus: '';

/**  */
export declare const ShadowCardDefault: '';

/**  */
export declare const ShadowCardHover: '';

/**  */
export declare const FocusOutlineWidth: '';

/**  */
export declare const FocusOutlineOffset: '';

/**  */
export declare const FocusOutlineStyle: '';

/**  */
export declare const FocusShadowInput: '';

/**  */
export declare const FocusShadowButton: '';

/**  */
export declare const ElevationNone: '';

/**  */
export declare const ElevationLow: '';

/**  */
export declare const ElevationMedium: '';

/**  */
export declare const ElevationHigh: '';

/**  */
export declare const Spacing0: '';

/**  */
export declare const Spacing1: '';

/**  */
export declare const Spacing2: '';

/**  */
export declare const Spacing3: '';

/**  */
export declare const Spacing4: '';

/**  */
export declare const Spacing5: '';

/**  */
export declare const Spacing6: '';

/**  */
export declare const Spacing7: '';

/**  */
export declare const Spacing8: '';

/**  */
export declare const Spacing9: '';

/**  */
export declare const SpacingResponsive0Mobile: '';

/**  */
export declare const SpacingResponsive0Tablet: '';

/**  */
export declare const SpacingResponsive1Mobile: '';

/**  */
export declare const SpacingResponsive1Tablet: '';

/**  */
export declare const SpacingResponsive2Mobile: '';

/**  */
export declare const SpacingResponsive2Tablet: '';

/**  */
export declare const SpacingResponsive3Mobile: '';

/**  */
export declare const SpacingResponsive3Tablet: '';

/**  */
export declare const SpacingResponsive4Mobile: '';

/**  */
export declare const SpacingResponsive4Tablet: '';

/**  */
export declare const SpacingResponsive5Mobile: '';

/**  */
export declare const SpacingResponsive5Tablet: '';

/**  */
export declare const SpacingResponsive6Mobile: '';

/**  */
export declare const SpacingResponsive6Tablet: '';

/**  */
export declare const SpacingResponsive7Mobile: '';

/**  */
export declare const SpacingResponsive7Tablet: '';

/**  */
export declare const SpacingResponsive8Mobile: '';

/**  */
export declare const SpacingResponsive8Tablet: '';

/**  */
export declare const SpacingResponsive9Mobile: '';

/**  */
export declare const SpacingResponsive9Tablet: '';

/**  */
export declare const FontFamilyBase: '';

/**  */
export declare const FontFamilyFallback: '';

/**  */
export declare const FontFamilyPrint: '';

/**  */
export declare const FontWeightNormal: '';

/**  */
export declare const FontWeightBold: '';

/**  */
export declare const FontWeightLight: '';

/**  */
export declare const FontSize14Mobile: '';

/**  */
export declare const FontSize14Tablet: '';

/**  */
export declare const FontSize14Print: '';

/**  */
export declare const FontSize16Mobile: '';

/**  */
export declare const FontSize16Tablet: '';

/**  */
export declare const FontSize16Print: '';

/**  */
export declare const FontSize19Mobile: '';

/**  */
export declare const FontSize19Tablet: '';

/**  */
export declare const FontSize19Print: '';

/**  */
export declare const FontSize22Mobile: '';

/**  */
export declare const FontSize22Tablet: '';

/**  */
export declare const FontSize22Print: '';

/**  */
export declare const FontSize26Mobile: '';

/**  */
export declare const FontSize26Tablet: '';

/**  */
export declare const FontSize26Print: '';

/**  */
export declare const FontSize36Mobile: '';

/**  */
export declare const FontSize36Tablet: '';

/**  */
export declare const FontSize36Print: '';

/**  */
export declare const FontSize48Mobile: '';

/**  */
export declare const FontSize48Tablet: '';

/**  */
export declare const FontSize48Print: '';

/**  */
export declare const FontSizeBase: '';

/**  */
export declare const FontLineHeightBase: '';

/**  */
export declare const HeadingsNhsukHeadingXl: NHSHeadingStyle;

/**  */
export declare const HeadingsNhsukHeadingL: NHSHeadingStyle;

/**  */
export declare const HeadingsNhsukHeadingM: NHSHeadingStyle;

/**  */
export declare const HeadingsNhsukHeadingS: NHSHeadingStyle;

/**  */
export declare const HeadingsNhsukHeadingXs: NHSHeadingStyle;

/**  */
export declare const ParagraphsBody: NHSParagraphStyle;

/**  */
export declare const ParagraphsBodyLarge: NHSParagraphStyle;

/**  */
export declare const ParagraphsBodySmall: NHSParagraphStyle;

/**  */
export declare const ParagraphsLedeText: NHSParagraphStyle;

/**  */
export declare const ParagraphsLedeTextSmall: NHSParagraphStyle;
export declare const tokens: DesignTokens;
export default tokens;
