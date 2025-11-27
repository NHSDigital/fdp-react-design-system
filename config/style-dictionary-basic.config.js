import StyleDictionary from 'style-dictionary';

export default {
  source: [
    'packages/nhs-fdp/tokens/semantic-core.json'
  ],

  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'packages/nhs-fdp/dist/scss/',
      files: [
        {
          destination: '_semantic-basic.scss',
          format: 'scss/variables'
        }
      ]
    },
    
    typescript: {
      transformGroup: 'js',
      buildPath: 'packages/nhs-fdp/dist/typescript/',
      files: [
        {
          destination: 'semantic-basic.ts',
          format: 'javascript/es6'
        }
      ]
    }
  }
};
