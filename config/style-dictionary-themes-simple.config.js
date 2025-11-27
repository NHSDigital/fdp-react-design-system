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

// Register custom format that includes sass:color import
StyleDictionary.registerFormat({
  name: 'scss/variables-with-color',
  format: ({ dictionary, file, options }) => {
    const header = options.fileHeader ? options.fileHeader(file) : '';
    const vars = dictionary.allTokens
      .map(token => `$${token.name}: ${token.value}; ${token.comment ? `// ${token.comment}` : ''}`)
      .join('\n');
    
    return `@use 'sass:color';\n\n${header}\n${vars}\n`;
  }
});

export default {
  source: [
    'packages/nhs-fdp/tokens/colors.json',
    'packages/nhs-fdp/tokens/themes.json'
  ],

  platforms: {
    scss: {
      transformGroup: 'scss/themes',
      buildPath: 'packages/nhs-fdp/dist/scss/',
      files: [
        {
          destination: '_themes.scss',
          format: 'scss/variables-with-color'
        }
      ]
    },
    
    typescript: {
      transformGroup: 'js',
      buildPath: 'packages/nhs-fdp/dist/typescript/',
      files: [
        {
          destination: 'themes.ts',
          format: 'javascript/es6'
        }
      ]
    }
  }
};
