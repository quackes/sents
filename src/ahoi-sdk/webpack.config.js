let path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'ahoiSdkBundle.js',
    library: 'ahoiSdkBundle',
    libraryTarget: 'umd'
  }
  // This can be included, if webpack has to compile the ES6
  // sources with babel, before packaging it. As for now,
  // we use sources from the lib folder, which were already compiled to ES5.

  , module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.jsx?$/,
        // Options to configure babel with
        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0'],
        }
      }
    ]
  }
};