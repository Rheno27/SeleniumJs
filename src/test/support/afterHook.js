// test/support/afterHook.js
const { After, AfterAll } = require("@cucumber/cucumber");
const jsonOutput = require("./jsonOutput");

After(function () {
  jsonOutput.endScenario(); 
});

AfterAll(function () {
  jsonOutput.saveResults(); 
});

After(function () {
  if (this.testErrors && this.testErrors.length > 0) {
    console.log("⚠️ Ada error di step, tetapi semua step tetap dijalankan:");
    this.testErrors.forEach((err, idx) => console.log(`${idx + 1}. ${err}`));

    throw new Error("Skenario mengandung error di beberapa step.");
  }
});
