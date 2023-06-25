module.exports = {
  source: [
    'tokens/**/*.json',
    'tokens/**/*.js',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'token',
      transforms: ['name/cti/kebab', 'color/rgb'],
      buildPath: 'dist/css/',
      files: [
        {
          destination: '_custom-properties.css',
          format: 'css/variables',
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      prefix: 'token',
      transforms: ['name/cti/kebab', 'color/rgb'],
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      prefix: 'token',
      transforms: ['name/cti/constant'],
      buildPath: 'dist/js/',
      files: [
        {
          format: 'javascript/es6',
          destination: 'style-variables.js',
        },
      ]
    }
  }
}
