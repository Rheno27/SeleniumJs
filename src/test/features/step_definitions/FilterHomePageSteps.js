const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/HomePage"); 

let driver;
let homePage;

// ----------------------------
// SCENARIO 1: Halaman Utama
// ----------------------------
Given("user membuka halaman utama {string}", async function (url) {
  driver = await new Builder().forBrowser("chrome").build();
  homePage = new HomePage(driver);
  await homePage.open(url);
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
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);
  }
);

// ------------------------------------------
// SCENARIO 2: User belum login pilih tiket
// ------------------------------------------
Given("user berada di halaman pilih penerbangan {string}", async function (url) {
  driver = await new Builder().forBrowser("chrome").build();
  homePage = new HomePage(driver);
  await homePage.open(url);
});

When(
  "user klik tombol pilih pada pilihan penerbangan dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

Then(
  "user diarahkan ke halaman login {string}",
  async function (expectedUrl) {
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);
    await driver.quit();
  }
);
