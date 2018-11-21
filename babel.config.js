module.exports = {
  plugins: [
    'transform-flow-strip-types',
    // 'transform-vue-template'
  ],
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry'
      }
    ]
  ],
  sourceMaps: true
};