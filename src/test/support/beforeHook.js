const { Before } = require("@cucumber/cucumber");
const jsonOutput = require("./jsonOutput");

Before(function (scenario) {
  jsonOutput.startScenario(`SCENARIO: ${scenario.pickle.name}`);
});
// // hooks/beforeHook.js
// const { Before } = require("@cucumber/cucumber");
// const jsonOutput = require("./jsonOutput");

// Before(function (scenario) {
//   // Reset output sebelum memulai skenario baru
//   jsonOutput.reset();

//   // Mulai skenario baru dengan nama asli (tanpa SCENARIO X:)
//   const originalName = scenario.pickle.name.replace(/^SCENARIO \d+:\s*/i, "");
//   jsonOutput.startScenario(originalName);
// });

