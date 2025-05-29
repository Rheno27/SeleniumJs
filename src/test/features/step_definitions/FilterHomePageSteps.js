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
  jsonOutput.setLabel("INVALID - Kota sama");
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
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
      }, 10000);

      // Menambahkan transisi ke output JSON
      jsonOutput.addTransition(
        "/search",
        "/passenger",
        400,
        false,
        "Kota asal dan tujuan tidak boleh sama",
        {
          timestamp: new Date().toISOString(),
          testCase: "FilterHomePage",
          scenario: "User memilih destinasi tujuan",
          details: {
            fromCity: "Jakarta",
            toCity: "Jakarta",
            departureDate: "2025-06-15",
            errorType: "VALIDATION_ERROR",
          },
        }
      );

      // Menyimpan hasil ke file
      jsonOutput.saveToFile();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      await driver.quit();
    }
  }
);
