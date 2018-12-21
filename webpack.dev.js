const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = {
  src: path.resolve(__dirname),
  dist: path.resolve(__dirname, "dist")
};

// Injects and links generated files into target template HTML
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./src/index.html", // input
  filename: "index.html", // output
  hash: true, // adds hash behind file path to prevent caching
  inject: true
});

module.exports = () => {
  const config = {
    mode: "development",

    devtool: "source-map",

    entry: "./src/index.js",

    context: paths.src, // Base directory for resolving loaders

    output: {
      path: paths.dist,
      filename: "bundle.js"
    },

    module: {
      rules: [
        {
          test: /\.(jsx|js)?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/react", // parses react-related syntax, e.g. JSX code
                  "@babel/env" // parses ES6 code
                ]
              }
            }
          ]
        }
      ]
    },

    resolve: {
      extensions: [".js", ".jsx"]
    },

    plugins: [HtmlWebpackPluginConfig]
  };

  return config;
};
