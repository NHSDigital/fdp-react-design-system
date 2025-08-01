import React from 'react';
import { 
  useTokens, 
  useColors, 
  useSpacing, 
  useTypography, 
  useResponsiveSpacing, 
  useComponentSpacing 
} from './packages/nhs-fdp/dist/react/hooks/useTokens';

// Example component demonstrating the IMPROVED semantic token usage
const TokenExample: React.FC = () => {
  const allTokens = useTokens();
  const colors = useColors();
  const spacing = useSpacing();
  const typography = useTypography();
  const responsiveSpacing = useResponsiveSpacing();
  const componentSpacing = useComponentSpacing();

  return (
    <div style={{
      fontFamily: typography.Family.Base,        // 🎉 Much cleaner!
      color: colors.ColorPrimaryBlack,
      padding: spacing.Spacing3,                  // Still works
      margin: spacing.Spacing2
    }}>
      <h1 style={{
        color: colors.ColorPrimaryBlue,
        marginBottom: spacing.Spacing4,
        fontSize: typography.Mobile.Size26        // 🎉 Semantic device grouping!
      }}>
        NHS FDP Token System - Semantic Structure
      </h1>
      
      <div style={{
        backgroundColor: colors.ColorSecondaryPaleYellow,
        padding: spacing.Spacing5,
        marginBottom: spacing.Spacing3,
        borderRadius: '4px'
      }}>
        <h2 style={{ 
          color: colors.ColorGrey5,
          fontSize: typography.Tablet.Size19,     // 🎉 Clear device targeting
          marginBottom: spacing.Spacing2,
          fontWeight: typography.Weight.Bold      // 🎉 Semantic weight naming
        }}>
          New Semantic Typography Structure:
        </h2>
        
        <div style={{ margin: 0, paddingLeft: spacing.Spacing4 }}>
          <h3 style={{ fontSize: typography.Mobile.Size16, fontWeight: typography.Weight.Normal }}>
            Mobile Sizes:
          </h3>
          <p style={{ fontSize: typography.Mobile.Size14, color: colors.ColorGrey4 }}>
            Small text: {typography.Mobile.Size14} • Medium: {typography.Mobile.Size16} • Large: {typography.Mobile.Size22}
          </p>
          
          <h3 style={{ fontSize: typography.Tablet.Size16, fontWeight: typography.Weight.Normal }}>
            Tablet Sizes:
          </h3>
          <p style={{ fontSize: typography.Tablet.Size14, color: colors.ColorGrey4 }}>
            Small text: {typography.Tablet.Size14} • Medium: {typography.Tablet.Size16} • Large: {typography.Tablet.Size22}
          </p>
          
          <h3 style={{ fontSize: typography.Mobile.Size16, fontWeight: typography.Weight.Normal }}>
            Font Families:
          </h3>
          <p style={{ 
            fontSize: typography.Mobile.Size14, 
            color: colors.ColorGrey4,
            fontFamily: typography.Family.Base     // 🎉 Clear semantic naming
          }}>
            Base: {typography.Family.Base}<br/>
            Fallback: {typography.Family.Fallback}<br/>
            Print: {typography.Family.Print}
          </p>
        </div>
      </div>

      <button style={{
        backgroundColor: colors.ColorPrimaryBlue,
        color: colors.ColorPrimaryWhite,
        border: 'none',
        borderRadius: '4px',
        padding: `${componentSpacing.ButtonSpacingPaddingVerticalMobile} ${componentSpacing.ButtonSpacingPaddingHorizontalMobile}`,
        fontSize: typography.Mobile.Size16,      // 🎉 Clean mobile targeting
        fontFamily: typography.Family.Base,
        fontWeight: typography.Weight.Bold,      // 🎉 Semantic weight
        cursor: 'pointer'
      }}>
        Example NHS Button
      </button>

      <div style={{
        marginTop: spacing.Spacing4,
        fontSize: typography.Mobile.Size14,
        color: colors.ColorGrey4
      }}>
        <h4 style={{ fontWeight: typography.Weight.Bold }}>Benefits of the New Structure:</h4>
        <ul style={{ paddingLeft: spacing.Spacing3 }}>
          <li>✅ Device-first approach: <code>typography.Mobile.Size16</code></li>
          <li>✅ Semantic grouping: <code>typography.Family.Base</code></li>
          <li>✅ Intuitive structure: <code>typography.Weight.Bold</code></li>
          <li>✅ Backward compatibility: Still supports <code>FontSize16Mobile</code></li>
          <li>✅ Better TypeScript IntelliSense</li>
        </ul>
        
        <p style={{ 
          marginTop: spacing.Spacing3,
          fontSize: typography.Mobile.Size14,
          color: colors.ColorGrey3,
          fontStyle: 'italic' 
        }}>
          Much more intuitive than "FontSize16Mobile" – now it's clear we're targeting Mobile with Size16!
        </p>
      </div>
    </div>
  );
};

export default TokenExample;