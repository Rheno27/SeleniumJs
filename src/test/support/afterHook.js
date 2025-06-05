// test/support/afterHook.js
const { After, AfterAll } = require("@cucumber/cucumber");
const jsonOutput = require("./jsonOutput");

// Dipanggil setelah setiap skenario selesai
After(function () {
  jsonOutput.endScenario(); // menyimpan skenario yang sedang berjalan
});

// Dipanggil sekali setelah semua skenario selesai
AfterAll(function () {
  jsonOutput.saveResults(); // menyimpan semua hasil ke file JSON
});

After(function () {
  if (this.testErrors && this.testErrors.length > 0) {
    console.log("⚠️ Ada error di step, tetapi semua step tetap dijalankan:");
    this.testErrors.forEach((err, idx) => console.log(`${idx + 1}. ${err}`));

    // Paksa skenario dianggap gagal agar muncul di report
    throw new Error("Skenario mengandung error di beberapa step.");
  }
});

// const { After, BeforeStep, AfterStep } = require("@cucumber/cucumber");
// const jsonOutput = require("./jsonOutput");

// BeforeStep(function (step) {
//   step.startTimestamp = Date.now();
// });

// AfterStep(function (step) {
//   step.endTimestamp = Date.now();
// });

// After(async function (scenario) {
//   // Simpan hasil skenario ke file
//   jsonOutput.saveToFile("test-results.json");
// });
