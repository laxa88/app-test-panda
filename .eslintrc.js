module.exports = {
  parser: "babel-eslint",
  extends: "airbnb",
  env: {
    browser: true, // allows browser variables, e.g. "document.xxx"
    jest: true // fixes no-def and other jest env errors in test files
  }
};
