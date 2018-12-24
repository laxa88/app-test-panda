const path = require("path");

const devConfig = require("../webpack.dev.js");

/*
  Reference: https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode--default

  Storybook runs its own webpack-dev-server with its own default webpack.config.js.
  In order for our app's components to load correctly (e.g. with CSS-loaders, etc),
  we may need to override some variables, which we can do here.
*/

module.exports = (baseConfig, env, defaultConfig) => {

  defaultConfig.module.rules = devConfig.module.rules;

  return defaultConfig;
};
