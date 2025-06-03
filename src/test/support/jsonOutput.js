const fs = require("fs");
const path = require("path");

const results = [];
let currentScenario = null;

function startScenario(label) {
  console.log("Mulai Scenario:", label); // Debug
  currentScenario = {
    label,
    transitions: [],
    reward: 0,
  };
}

function addTransition({ status, success, message, responseTime }) {
  if (!currentScenario) return;
  currentScenario.transitions.push({ status, success, message, responseTime });
  if (!success) {
    currentScenario.reward = 1;
  }
}

function endScenario() {
  if (currentScenario) {
    results.push(currentScenario);
    currentScenario = null;
  }
}

function saveResults() {
  const outputPath = path.join(__dirname, "../../output/test-results.json");
  console.log("Saving result:", results); // Debug
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), "utf-8");
}

module.exports = {
  startScenario,
  addTransition,
  endScenario,
  saveResults,
};
