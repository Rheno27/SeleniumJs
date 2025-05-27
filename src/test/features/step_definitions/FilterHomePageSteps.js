const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/HomePage"); // sesuaikan dengan path kamu
const jsonOutput = require("../../support/jsonOutput");

let driver;
let homePage;

Given("user membuka halaman utama {string}", async function (url) {
  driver = await new Builder().forBrowser("chrome").build();
  homePage = new HomePage(driver);
  await homePage.open(url);
  jsonOutput.setLabel("Pilih Destinasi");
});

When(
  "user klik pilihan destinasi favorit dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

When(
  "user klik Cari Penerbangan dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

Then(
  "user redirect ke halaman pilih penerbagnan {string}",
  async function (expectedUrl) {
    try {
      const startTime = Date.now();

      // Tunggu dan dapatkan status code dari response
      const response = await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
      }, 10000);

      const responseTime = Date.now() - startTime;

      // Dapatkan status code dari response
      const statusCode = await driver.executeScript(
        "return window.performance.getEntries()[0].responseStatus"
      );

      // Tentukan success berdasarkan status code
      const success = statusCode >= 200 && statusCode < 300;

      // Menambahkan transisi ke output JSON dengan data dari hasil test
      jsonOutput.addTransition(
        statusCode,
        success,
        success ? "Test berhasil" : "Test gagal",
        responseTime
      );

      // Menyimpan hasil ke file
      jsonOutput.saveToFile();
    } catch (error) {
      console.error("Error:", error);
      // Jika terjadi error, catat sebagai test gagal
      jsonOutput.addTransition(
        500,
        false,
        error.message,
        Date.now() - startTime
      );
      jsonOutput.saveToFile();
    } finally {
      await driver.quit();
    }
  }
);
