// Test file to verify token hooks are working correctly
import React from 'react';
import { 
  useTokens, 
  useColors, 
  useSpacing, 
  useTypography,
  useResponsiveSpacing,
  useComponentSpacing 
} from './packages/nhs-fdp/dist/react/hooks/useTokens';

const TokenTest: React.FC = () => {
  const allTokens = useTokens();
  const colors = useColors();
  const spacing = useSpacing();
  const typography = useTypography();
  const responsiveSpacing = useResponsiveSpacing();
  const componentSpacing = useComponentSpacing();

  return (
    <div>
      <h1>NHS Token Test</h1>
      
      {/* Test spacing tokens (0-9 scale) */}
      <div style={{ 
        padding: spacing.Spacing3,        // 16px
        backgroundColor: colors.ColorPrimaryBlue,
        color: colors.ColorPrimaryWhite,
        fontFamily: typography.FontFamilyBase,
        fontSize: typography.FontSize19Tablet,
        fontWeight: typography.FontWeightBold,
        marginBottom: spacing.Spacing4     // 24px
      }}>
        NHS Primary Button Style
      </div>

      {/* Test responsive spacing */}
      <div style={{
        paddingLeft: responsiveSpacing.SpacingResponsive3Mobile,  // 8px on mobile
        paddingRight: responsiveSpacing.SpacingResponsive3Tablet, // 16px on tablet+
        backgroundColor: colors.ColorSecondaryPaleYellow,
        marginBottom: spacing.Spacing2
      }}>
        Responsive spacing example
      </div>

      {/* Test component-specific spacing */}
      <button style={{
        paddingTop: componentSpacing.ButtonSpacingPaddingVerticalMobile,
        paddingBottom: componentSpacing.ButtonSpacingPaddingVerticalMobile,
        paddingLeft: componentSpacing.ButtonSpacingPaddingHorizontalMobile,
        paddingRight: componentSpacing.ButtonSpacingPaddingHorizontalMobile,
        backgroundColor: colors.ColorPrimaryGreen,
        color: colors.ColorPrimaryWhite,
        border: 'none',
        fontWeight: typography.FontWeightBold
      }}>
        NHS Mobile Button
      </button>

      <div style={{ marginTop: spacing.Spacing5, fontSize: '14px', color: colors.ColorGrey4 }}>
        <p><strong>Core Spacing Scale (0-9):</strong></p>
        <ul>
          <li>Spacing0: {spacing.Spacing0}</li>
          <li>Spacing1: {spacing.Spacing1}</li>
          <li>Spacing2: {spacing.Spacing2}</li>
          <li>Spacing3: {spacing.Spacing3}</li>
          <li>Spacing4: {spacing.Spacing4}</li>
        </ul>
        
        <p><strong>Typography:</strong></p>
        <ul>
          <li>FontFamilyBase: {typography.FontFamilyBase}</li>
          <li>FontWeightNormal: {typography.FontWeightNormal}</li>
          <li>FontWeightBold: {typography.FontWeightBold}</li>
          <li>FontSize19Mobile: {typography.FontSize19Mobile}</li>
          <li>FontSize19Tablet: {typography.FontSize19Tablet}</li>
        </ul>
      </div>
    </div>
  );
};

export default TokenTest;
