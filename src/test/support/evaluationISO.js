const fs = require("fs");
const path = require("path");

function evaluasiISO25010() {
  const outputPath = path.join(__dirname, "../../output/test-results.json");

  if (!fs.existsSync(outputPath)) {
    console.log("❌ File hasil tidak ditemukan.");
    return;
  }

  const data = JSON.parse(fs.readFileSync(outputPath, "utf-8"));

  let totalSteps = 0;
  let totalSuccess = 0;
  let totalStatus200 = 0;
  let totalResponseTime = 0;
  let goalTercapaiCount = 0;

  data.forEach((scenario) => {
    scenario.transitions.forEach((t) => {
      totalSteps++;
      if (t.success === true) totalSuccess++;
      if (t.statusCode === "200") totalStatus200++;
      const responseTimeMs = parseInt(t.responseTime.replace("ms", ""));
      totalResponseTime += responseTimeMs;
    });

    const goalTercapai = scenario.transitions.some((t) =>
      t.message.toLowerCase().includes("redirect ke halaman utama berhasil")
    );
    if (goalTercapai) goalTercapaiCount++;
  });

  const totalScenarios = data.length;
  const expectedResponseTime = 2000; // dalam ms
  const averageResponseTime = totalSteps > 0 ? totalResponseTime / totalSteps : 0;
  const functionality = ((totalSuccess / totalSteps) * 100).toFixed(2);
  const reliability = ((totalStatus200 / totalSteps) * 100).toFixed(2);
  const efficiency = ((expectedResponseTime / averageResponseTime) * 100).toFixed(2);
  const usability = ((goalTercapaiCount / totalScenarios) * 100).toFixed(2);

  const hasil = {
    functionality: `${functionality}%`,
    reliability: `${reliability}%`,
    efficiency: `${efficiency}%`,
    // usability: `${usability}%`,
  };

  console.log("\n📈 Evaluasi ISO 25010 (gabungan semua run):");
  console.table(hasil);

  console.log("\n📌 Rumus Evaluasi:");
  console.log("Functionality = (Jumlah success === true / Total step) * 100");
  console.log("Reliability   = (Jumlah statusCode === '200' / Total step) * 100");
  console.log("Efficiency    = (Rata-rata Expected Response / Rata-rata Aktual Response) * 100");
  // console.log("Usability     = (Jumlah skenario mencapai halaman tujuan / Total skenario) * 100");

  console.log("\n📊 Jumlah Variabel Penilaian:");
  console.log(`Total Step              : ${totalSteps}`);
  console.log(`Total Success           : ${totalSuccess}`);
  console.log(`Total Status 200        : ${totalStatus200}`);
  console.log(`Total Response Time     : ${totalResponseTime} ms`);
  console.log(`Rata-rata Response Time : ${averageResponseTime.toFixed(2)} ms`);
  console.log(`Expected Response Time  : ${expectedResponseTime} ms`);
  console.log(`Total Skenario Goal OK  : ${goalTercapaiCount}`);
  console.log(`Total Skenario          : ${totalScenarios}`);
}

module.exports = {
  evaluasiISO25010,
};
