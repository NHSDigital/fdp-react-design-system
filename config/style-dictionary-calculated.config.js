import StyleDictionary from 'style-dictionary';

// Register our custom transforms for calculated tokens
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

// Register custom transform group that includes our color functions
StyleDictionary.registerTransformGroup({
  name: 'scss/calculated',
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

// Register custom format that includes sass:color import
StyleDictionary.registerFormat({
  name: 'scss/variables-with-color',
  format: ({ dictionary }) => {
    const vars = dictionary.allTokens
      .map(token => {
        const comment = token.comment ? ` // ${token.comment}` : '';
        return `$${token.name}: ${token.value};${comment}`;
      })
      .join('\n');
    
    return `@use 'sass:color';

// Do not edit directly, this file was auto-generated.

${vars}
`;
  }
});

// Register custom fileHeader function
StyleDictionary.registerFileHeader({
  name: 'scss-with-color-import',
  fileHeader: () => [
    '@use \'sass:color\';',
    '',
    'Do not edit directly, this file was auto-generated.'
  ]
});

export default {
  source: [
    'packages/nhs-fdp/tokens/colors.json',
    'packages/nhs-fdp/tokens/semantic-calculated.json'
  ],

  platforms: {
    scss: {
      transformGroup: 'scss/calculated',
      buildPath: 'packages/nhs-fdp/dist/scss/',
      files: [
        {
          destination: '_semantic-calculated.scss',
          format: 'scss/variables-with-color'
        }
      ]
    },
    
    typescript: {
      transformGroup: 'js',
      buildPath: 'packages/nhs-fdp/dist/typescript/',
      files: [
        {
          destination: 'semantic-calculated.ts',
          format: 'javascript/es6'
        }
      ]
    }
  }
};
