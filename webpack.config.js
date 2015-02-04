module.exports = {
  entry: './js/main.js',
  output: {
    filename: './js/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader!6to5-loader' }
    ]
  }
};
