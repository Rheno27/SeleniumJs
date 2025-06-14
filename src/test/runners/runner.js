const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const {
  hitungRewardPerStep,
  hitungRewardPerPage,
} = require("../support/jsonOutput");
const { evaluasiISO25010 } = require("../support/evaluationISO");

const config = {
  maxRuns: 10,
  delayBetweenRuns: 3000, 
  cucumberCommand: "npx",
  cucumberArgs: ["cucumber-js"],
};

let currentRun = 0;

function clearTestResults() {
  const testResultsPath = path.join(
    __dirname,
    "../../output/test-results.json"
  );
  try {
    fs.writeFileSync(testResultsPath, "[]");
    console.log("✅ File test-results.json berhasil dikosongkan");
  } catch (error) {
    console.error(
      "❌ Gagal mengosongkan file test-results.json:",
      error.message
    );
    process.exit(1);
  }
}

function runCucumber() {
  currentRun++;
  console.log(
    `\n=== Menjalankan test ke-${currentRun} dari ${config.maxRuns} ===\n`
  );

  const cucumber = spawn(config.cucumberCommand, config.cucumberArgs, {
    shell: true,
    stdio: "inherit",
  });

  cucumber.on("error", (error) => {
    console.error(`❌ Error menjalankan Cucumber: ${error.message}`);
    process.exit(1);
  });

  cucumber.on("close", (code) => {
    const success = code === 0;

    if (success) {
      console.log(`✅ Run ke-${currentRun} berhasil`);
    } else {
      console.log(`❌ Run ke-${currentRun} gagal dengan kode: ${code}`);
    }

    if (currentRun < config.maxRuns) {
      console.log(
        `⏳ Menunggu ${
          config.delayBetweenRuns / 1000
        } detik sebelum run berikutnya...`
      );
      setTimeout(runCucumber, config.delayBetweenRuns);
    } else {
      console.log("\n🎉 Semua run selesai!");
      hitungRewardPerStep();
      hitungRewardPerPage();
      evaluasiISO25010();
      process.exit(0);
    }
  });
}

process.on("uncaughtException", (error) => {
  console.error("Terjadi kesalahan:", error);
  process.exit(1);
});

console.log("=== Memulai eksekusi otomatis Cucumber ===");
clearTestResults();
runCucumber();
