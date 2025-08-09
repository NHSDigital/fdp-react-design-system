const StyleDictionary = require('style-dictionary');

// Enhanced responsive transform for complex breakpoint system
StyleDictionary.registerTransform({
  name: 'enhanced-responsive/css-variables',
  type: 'value',
  filter: (token) => {
    return token.path && (
      token.path.includes('responsive') ||
      token.path.includes('breakpoint') ||
      token.type === 'responsive'
    );
  },
  transform: (token) => {
    if (typeof token.value === 'object') {
      const { mobile, tablet, desktop } = token.value;
      return {
        mobile: mobile?.value || mobile,
        tablet: tablet?.value || tablet,
        desktop: desktop?.value || desktop
      };
    }
    return token.value;
  }
});

// Enhanced responsive CSS format with sophisticated breakpoint system
StyleDictionary.registerFormat({
  name: 'enhanced-responsive/css',
  format: ({ dictionary, options }) => {
    let css = `/* Enhanced Responsive Design Tokens - Auto-generated */\n\n`;
    
    // Define our enhanced breakpoint system
    const breakpoints = {
      mobile: {
        small: '320px',
        medium: '480px', 
        large: '640px'
      },
      tablet: {
        small: '768px',
        medium: '834px',
        large: '960px'
      },
      desktop: {
        small: '1024px',
        medium: '1200px',
        large: '1440px'
      }
    };
    
    // Helper function to get clean token name
    const getTokenName = (token) => {
      const cleanName = token.name.replace(/^nhs-/, '');
      return `--nhs-${cleanName}`;
    };
    
    // Helper function to resolve value
    const resolveValue = (value) => {
      if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
        return value;
      }
      return value;
    };
    
    // Filter responsive tokens
    const responsiveTokens = dictionary.allTokens.filter(token => 
      token.path && (
        token.path.includes('responsive') || 
        token.path.includes('breakpoint') ||
        token.type === 'responsive'
      )
    );
    
    // Base styles (mobile-first)
    css += `:root {\n`;
    responsiveTokens.forEach(token => {
      const name = getTokenName(token);
      
      if (token.value && typeof token.value === 'object') {
        const { mobile } = token.value;
        if (mobile) {
          css += `  ${name}: ${resolveValue(mobile)};\n`;
        }
      } else if (!token.path.includes('tablet') && !token.path.includes('desktop')) {
        css += `  ${name}: ${resolveValue(token.value)};\n`;
      }
    });
    css += `}\n\n`;
    
    // Enhanced responsive breakpoints
    const mediaQueries = [
      {
        query: `@media (min-width: ${breakpoints.mobile.medium})`,
        filter: 'mobile-medium'
      },
      {
        query: `@media (min-width: ${breakpoints.mobile.large})`,
        filter: 'mobile-large'
      },
      {
        query: `@media (min-width: ${breakpoints.tablet.small})`,
        filter: 'tablet',
        tokenProp: 'tablet'
      },
      {
        query: `@media (min-width: ${breakpoints.tablet.medium})`,
        filter: 'tablet-medium'
      },
      {
        query: `@media (min-width: ${breakpoints.tablet.large})`,
        filter: 'tablet-large'
      },
      {
        query: `@media (min-width: ${breakpoints.desktop.small})`,
        filter: 'desktop',
        tokenProp: 'desktop'
      },
      {
        query: `@media (min-width: ${breakpoints.desktop.medium})`,
        filter: 'desktop-medium'
      },
      {
        query: `@media (min-width: ${breakpoints.desktop.large})`,
        filter: 'desktop-large'
      }
    ];
    
    // Generate media queries
    mediaQueries.forEach(({ query, filter, tokenProp }) => {
      css += `${query} {\n`;
      css += `  :root {\n`;
      
      responsiveTokens.forEach(token => {
        const name = getTokenName(token);
        
        if (tokenProp && token.value && typeof token.value === 'object' && token.value[tokenProp]) {
          css += `    ${name}: ${resolveValue(token.value[tokenProp])};\n`;
        } else if (token.path && token.path.includes(filter)) {
          css += `    ${name}: ${resolveValue(token.value)};\n`;
        }
      });
      
      css += `  }\n}\n\n`;
    });
    
    return css;
  }
});

module.exports = {
  source: [
    'tokens/enhanced-breakpoints.json',
    'tokens/semantic-responsive.json'
  ],
  platforms: {
    'enhanced-responsive': {
      transformGroup: 'css',
      transforms: ['enhanced-responsive/css-variables'],
      buildPath: 'packages/nhs-fdp/dist/css/',
      files: [
        {
          destination: '_enhanced-responsive.css',
          format: 'enhanced-responsive/css',
          options: {
            showFileHeader: true
          }
        }
      ]
    }
  }
};
