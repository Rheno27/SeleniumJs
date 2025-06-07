const { Before } = require("@cucumber/cucumber");
const jsonOutput = require("./jsonOutput");

Before(function (scenario) {
  jsonOutput.startScenario(`SCENARIO: ${scenario.pickle.name}`);
});

