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

module.exports = {
  startScenario,
  addTransition,
  endScenario,
  saveResults,
};
