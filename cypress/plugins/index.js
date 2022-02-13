/* eslint-disable @typescript-eslint/no-var-requires */
const cucumber = require("cypress-cucumber-preprocessor").default;
const browserify = require("@cypress/browserify-preprocessor");
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = (on) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: require.resolve("typescript"),
  };

  on("file:preprocessor", cucumber(options));
};