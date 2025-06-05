module.exports = {
  default: [
    "--require src/test/support/beforeHook.js",
    "--require src/test/support/afterHook.js",
    "--require src/test/support/jsonOutput.js",
    "--require src/test/features/step_definitions/**/*.js",
    "src/test/features/**/*.feature",
  ].join(" "),
};
