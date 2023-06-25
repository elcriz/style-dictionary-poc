module.exports = {
  source: [
    'tokens/**/*.json',
    'tokens/**/*.js',
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      transforms: ['name/cti/kebab', 'color/rgb'],
      buildPath: 'dist/css/',
      files: [
        {
          destination: '_custom-properties.css',
          format: 'css/variables',
        },
      ],
    }
  }
}
