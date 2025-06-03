module.exports = {
  default: [
    "--require src/test/support/**/*.js",
    "--require src/test/features/step_definitions/**/*.js",
    "src/test/features/**/*.feature",
  ].join(" "),
};
