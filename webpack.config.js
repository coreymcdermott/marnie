module.exports = {
  entry: './src/index.js',
  output: {
    path: './bin',
    filename: 'index.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  node: {
        fs: 'empty'
  },
  externals: [
      {
          './cptable': 'var cptable'
      }
  ]
}
