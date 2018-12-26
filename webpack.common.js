const path = require('path');

/* eslint-disable import/no-extraneous-dependencies */
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-enable */

const paths = {
  src: path.resolve(__dirname),
  dist: path.resolve(__dirname, 'docs'),
};

// Injects and links generated files into target template HTML
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html', // input
  filename: 'index.html', // output
  hash: true, // adds hash behind file path to prevent caching
  inject: true,
});

module.exports = {
  entry: './src/index.jsx',

  context: paths.src, // Base directory for resolving loaders

  output: {
    path: paths.dist,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      // Parses CSS as modules with unique localIdentName,
      // which prevents CSS pollution between components.
      {
        test: /\.css$/,
        use: [
          // Load CSS files
          { loader: 'style-loader' },

          // Parse and link CSS contents
          // https://github.com/webpack-contrib/css-loader
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },

          // Post-process CSS contents
          // https://github.com/postcss/postcss-loader
          // https://github.com/postcss/autoprefixer
          // Notes:
          // - 'postcss-loader' uses 'autoprefixer' as a plugin
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer],
            },
          },
        ],
      },

      // Parse JS and JSX files with babel
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/react', // parses react-related syntax, e.g. JSX code
                '@babel/env', // parses ES6 code
              ],
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  plugins: [HtmlWebpackPluginConfig],
};
