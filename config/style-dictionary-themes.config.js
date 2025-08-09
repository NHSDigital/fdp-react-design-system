import StyleDictionary from 'style-dictionary';

// Register calculated color transforms
StyleDictionary.registerTransform({
  name: 'color/darken',
  type: 'value',
  transitive: true,
  filter: (token) => {
    return typeof token.$value === 'string' && token.$value.includes('darken(');
  },
  transform: (token) => {
    const match = token.$value.match(/darken\(([^,]+),\s*(\d+)%\)/);
    if (match) {
      const colorRef = match[1];
      const percentage = parseInt(match[2]);
      // Use modern Sass color.adjust() instead of deprecated darken()
      return `color.adjust(${colorRef}, $lightness: -${percentage}%)`;
    }
    return token.$value;
  }
});

StyleDictionary.registerTransform({
  name: 'color/lighten',
  type: 'value',
  transitive: true,
  filter: (token) => {
    return typeof token.$value === 'string' && token.$value.includes('lighten(');
  },
  transform: (token) => {
    const match = token.$value.match(/lighten\(([^,]+),\s*(\d+)%\)/);
    if (match) {
      const colorRef = match[1];
      const percentage = parseInt(match[2]);
      // Use modern Sass color.adjust() instead of deprecated lighten()
      return `color.adjust(${colorRef}, $lightness: +${percentage}%)`;
    }
    return token.$value;
  }
});

StyleDictionary.registerTransform({
  name: 'color/fade',
  type: 'value',
  transitive: true,
  filter: (token) => {
    return typeof token.$value === 'string' && token.$value.includes('fade(');
  },
  transform: (token) => {
    const match = token.$value.match(/fade\(([^,]+),\s*(\d+)%\)/);
    if (match) {
      const colorRef = match[1];
      const percentage = parseInt(match[2]);
      return `fade(${colorRef}, ${percentage}%)`;
    }
    return token.$value;
  }
});

// Register custom transform group for themes
StyleDictionary.registerTransformGroup({
  name: 'scss/themes',
  transforms: [
    'attribute/cti',
    'name/kebab',
    'time/seconds',
    'html/icon',
    'size/rem',
    'color/hex',
    'color/darken',
    'color/lighten', 
    'color/fade'
  ]
});

// Register a custom format for theme-aware SCSS
StyleDictionary.registerFormat({
  name: 'scss/theme-variables',
  format: ({ dictionary, options }) => {
    const { theme } = options;
    
    return `@use 'sass:color';

// Do not edit directly, this file was auto-generated.
// ${theme.charAt(0).toUpperCase() + theme.slice(1)} theme variables

${dictionary.allTokens
  .map(token => {
    const value = token.value;
    const comment = token.comment ? ` // ${token.comment}` : '';
    return `$${token.name}: ${value};${comment}`;
  })
  .join('\n')}

// Theme-specific helper mixins
@mixin apply-${theme}-theme {
${dictionary.allTokens
  .filter(token => token.path.includes('theme') && token.path.includes(theme))
  .map(token => {
    const cssVar = `--${token.name.replace(/-/g, '-')}`;
    return `  ${cssVar}: #{$${token.name}};`;
  })
  .join('\n')}
}

// CSS Custom Properties for ${theme} theme
:root[data-theme="${theme}"], 
[data-theme="${theme}"] {
${dictionary.allTokens
  .filter(token => token.path.includes('theme') && token.path.includes(theme))
  .map(token => {
    const cssVar = `--${token.name.replace(/-/g, '-')}`;
    return `  ${cssVar}: #{$${token.name}};`;
  })
  .join('\n')}
}
`;
  }
});

export default {
  source: [
    'packages/nhs-fdp/tokens/colors.json',
    'packages/nhs-fdp/tokens/themes.json'
  ],

  platforms: {
    'scss-light': {
      transformGroup: 'scss/themes',
      buildPath: 'packages/nhs-fdp/dist/scss/themes/',
      files: [
        {
          destination: '_light-theme.scss',
          format: 'scss/theme-variables',
          filter: (token) => {
            return token.path.includes('light') || !token.path.includes('theme');
          },
          options: {
            theme: 'light'
          }
        }
      ]
    },
    
    'scss-dark': {
      transformGroup: 'scss/themes',
      buildPath: 'packages/nhs-fdp/dist/scss/themes/',
      files: [
        {
          destination: '_dark-theme.scss',
          format: 'scss/theme-variables',
          filter: (token) => {
            return token.path.includes('dark') || !token.path.includes('theme');
          },
          options: {
            theme: 'dark'
          }
        }
      ]
    },
    
    'typescript-themes': {
      transformGroup: 'js',
      buildPath: 'packages/nhs-fdp/dist/typescript/',
      files: [
        {
          destination: 'themes.ts',
          format: 'javascript/es6',
          filter: (token) => {
            return token.path.includes('theme');
          }
        }
      ]
    }
  }
};
