module.exports = {
  entry: './src/index.jsx',
  output: {
    path: './bin',
    filename: 'index.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
      },
    }],
  },
  node: {
    fs: 'empty',
  },
  externals: [
    {
      './cptable': 'var cptable',
    },
  ],
};
