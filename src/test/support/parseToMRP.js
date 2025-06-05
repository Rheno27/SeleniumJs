const fs = require("fs");
const path = require("path");

// Path file test results
const inputPath = path.join(__dirname, "../../output/test-results.json");
const outputPath = path.join(__dirname, "../../output/mrp-data.json");

// Baca file hasil test
const data = JSON.parse(fs.readFileSync(inputPath, "utf-8"));

// Parse ke format MRP
const mrp = [];

data.forEach((scenario) => {
    const transitions = scenario.transitions;

    for (let i = 0; i < transitions.length - 1; i++) {
        if (transitions[i].success) {
        mrp.push({
            state: transitions[i].message,
            next: transitions[i + 1].message,
            reward: 1,
        });
        }
    }

    // Tambahkan transisi akhir dengan reward lebih tinggi
    const last = transitions.at(-1);
    if (last?.success) {
        mrp.push({
        state: last.message,
        next: null,
        reward: 2,
        });
    }
});

// Simpan ke file output
fs.writeFileSync(outputPath, JSON.stringify(mrp, null, 2), "utf-8");
console.log("✅ Berhasil membuat file MRP di:", outputPath);
