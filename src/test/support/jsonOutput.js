const fs = require("fs");
const path = require("path");

class JsonOutput {
  constructor() {
    this.scenarios = [];
    this.currentScenario = null;
  }

  startScenario(label) {
    this.currentScenario = {
      label: label,
      transitions: [],
      reward: 0,
    };
    this.scenarios.push(this.currentScenario);
  }

  addTransition(status, success, message, responseTime) {
    if (this.currentScenario) {
      this.currentScenario.transitions.push({
        status,
        success,
        message,
        responseTime: `${responseTime}ms`,
      });
    }
  }

  setReward(reward) {
    if (this.currentScenario) {
      this.currentScenario.reward = reward;
    }
  }

  saveToFile(filename) {
    const outputPath = path.join(__dirname, "../../output", filename);
    const outputDir = path.dirname(outputPath);

    // Buat direktori jika belum ada
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(this.scenarios, null, 2));
  }
}

module.exports = new JsonOutput();
