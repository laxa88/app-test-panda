/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
/* eslint-enable */

const common = require('./webpack.common.js');

// gzips all js files
const compressionPlugin = new CompressionPlugin({
  algorithm: 'gzip',
  test: /\.js$/,
});

module.exports = merge(
  {
    customizeArray(a, b, key) {
      if (key === 'plugins') {
        return [...a, ...b];
      }

      return undefined;
    },
  },
)(common, {
  mode: 'production',

  plugins: [compressionPlugin],
});
