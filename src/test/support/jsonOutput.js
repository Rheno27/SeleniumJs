const fs = require("fs");
const path = require("path");

const results = [];
let currentScenario = null;

function calculateReward(statusCode, success) {
  if (success === true) return 0;
  else if (statusCode === "408") return 1;
  else return 2;
}

function startScenario(label) {
  console.log("Mulai Scenario:", label);
  currentScenario = {
    label,
    transitions: [],
  };
}

function addTransition({ statusCode, success, message, responseTime }) {
  if (!currentScenario) return;

  const reward = calculateReward(statusCode, success);
  currentScenario.transitions.push({
    statusCode,
    success,
    message,
    responseTime,
    reward,
  });
}

function endScenario() {
  if (currentScenario) {
    results.push(currentScenario);
    currentScenario = null;
  }
}

function hitungRewardPerStep() {
  const outputPath = path.join(__dirname, "../../output/test-results.json");
  const mrpResultPath = path.join(__dirname, "../../output/MRP-result.json");

  if (!fs.existsSync(outputPath)) {
    console.log("❌ File hasil tidak ditemukan.");
    return;
  }

  const fileContent = fs.readFileSync(outputPath, "utf-8");
  const data = JSON.parse(fileContent);

  const stepRewards = {};

  for (const scenario of data) {
    scenario.transitions.forEach((step, index) => {
      const stepKey = `step_${index + 1}`;
      if (!stepRewards[stepKey]) {
        stepRewards[stepKey] = 0;
      }
      stepRewards[stepKey] += step.reward || 0;
    });
  }

  console.log("\n📊 Total Reward per Step (semua run):");
  Object.entries(stepRewards).forEach(([step, total]) => {
    console.log(`  ${step}: ${total}`);
  });

  // save to MRP-result.json
  const mrpResult = {
    stepRewards,
    pageRewards: {},
  };
  fs.writeFileSync(mrpResultPath, JSON.stringify(mrpResult, null, 2), "utf-8");
}

function hitungRewardPerPage() {
  const outputPath = path.join(__dirname, "../../output/test-results.json");
  const mrpResultPath = path.join(__dirname, "../../output/MRP-result.json");

  if (!fs.existsSync(outputPath)) {
    console.log("❌ File hasil tidak ditemukan.");
    return;
  }

  const fileContent = fs.readFileSync(outputPath, "utf-8");
  const data = JSON.parse(fileContent);

  const pageReward = {
    page_1: 0, // step 1-4
    page_2: 0, // step 5-7
    page_3: 0, // step 8-9
    page_4: 0, // step 10
  };

  for (const scenario of data) {
    scenario.transitions.forEach((step, index) => {
      const stepNum = index + 1;

      if (stepNum >= 1 && stepNum <= 4) {
        pageReward.page_1 += step.reward || 0;
      } else if (stepNum >= 5 && stepNum <= 7) {
        pageReward.page_2 += step.reward || 0;
      } else if (stepNum >= 8 && stepNum <= 9) {
        pageReward.page_3 += step.reward || 0;
      } else if (stepNum >= 10) {
        pageReward.page_4 += step.reward || 0;
      }
    });
  }

  console.log("\n📊 Total Reward per Page:");
  Object.entries(pageReward).forEach(([page, total]) => {
    console.log(`  ${page}: ${total}`);
  });

  // Menambahkan perangkingan halaman
  console.log("\n🏆 Perangkingan Halaman berdasarkan Reward:");
  const sortedPages = Object.entries(pageReward)
    .sort(([, a], [, b]) => b - a)
    .map(([page, reward], index) => ({
      rank: index + 1,
      page,
      reward,
    }));

  sortedPages.forEach(({ rank, page, reward }) => {
    console.log(`  ${rank}. ${page}: ${reward} reward`);
  });

  let mrpResult = {};
  if (fs.existsSync(mrpResultPath)) {
    const mrpContent = fs.readFileSync(mrpResultPath, "utf-8");
    mrpResult = JSON.parse(mrpContent);
  }

  // Update pageRewards dan tambahkan ranking
  mrpResult.pageRewards = pageReward;
  mrpResult.pageRanking = sortedPages;

  fs.writeFileSync(mrpResultPath, JSON.stringify(mrpResult, null, 2), "utf-8");
}

function saveResults() {
  const outputPath = path.join(__dirname, "../../output/test-results.json");

  let existingData = [];
  if (fs.existsSync(outputPath)) {
    const fileContent = fs.readFileSync(outputPath, "utf-8");
    existingData = JSON.parse(fileContent);
  }

  const combinedData = [...existingData, ...results];

  console.log("Saving result:", combinedData);
  fs.writeFileSync(outputPath, JSON.stringify(combinedData, null, 2), "utf-8");
}

function setReward(reward) {
  if (!currentScenario) return;

  const lastTransition =
    currentScenario.transitions[currentScenario.transitions.length - 1];
  if (lastTransition) {
    lastTransition.reward = reward;
  }
}

module.exports = {
  startScenario,
  addTransition,
  endScenario,
  saveResults,
  hitungRewardPerStep,
  hitungRewardPerPage,
  setReward,
};
