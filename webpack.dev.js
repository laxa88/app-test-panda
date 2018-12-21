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

    entry: "./src/index.js",

    context: paths.src, // Base directory for resolving loaders

    output: {
      path: paths.dist,
      filename: "bundle.js"
    },

    plugins: [HtmlWebpackPluginConfig]
  };

  return config;
};
