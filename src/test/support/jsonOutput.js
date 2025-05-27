const fs = require("fs");
const path = require("path");

class JsonOutput {
  constructor() {
    this.testResults = {
      label: "",
      transitions: [],
      reward: 0,
    };
  }

  setLabel(label) {
    this.testResults.label = label;
  }

  addTransition(status, success, message, responseTime) {
    this.testResults.transitions.push({
      status,
      success,
      message,
      responseTime: `${responseTime}ms`,
    });
  }

  setReward(reward) {
    this.testResults.reward = reward;
  }

  saveToFile(filename = "test-results.json") {
    const outputPath = path.join(__dirname, "../../output", filename);
    fs.writeFileSync(outputPath, JSON.stringify(this.testResults, null, 2));
  }
}

module.exports = new JsonOutput();
