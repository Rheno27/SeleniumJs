const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/UnauthenticatedPage");

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
  "user redirect ke halaman pilih penerbangan {string}",
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
Given(
  "user berada di halaman pilih penerbangan {string}",
  async function (url) {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    await homePage.open(url);
  }
);

When(
  "user klik tombol pilih pada pilihan penerbangan dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

Then("user diarahkan ke halaman login {string}", async function (expectedUrl) {
  await driver.wait(async () => {
    const currentUrl = await driver.getCurrentUrl();
    return currentUrl === expectedUrl;
  }, 10000);
  await driver.quit();
});

// -------------------------------------
// SCENARIO 3: User melakukan login
// -------------------------------------
Given("user membuka halaman login {string}", async function (url) {
  driver = await new Builder().forBrowser("chrome").build();
  homePage = new HomePage(driver);
  await homePage.open(url);
});

When(
  "user mengisi email {string} dengan xpath {string}",
  async function (email, xpath) {
    await homePage.isiInputByXpath(xpath, email);
  }
);

When(
  "user mengisi password {string} dengan xpath {string}",
  async function (password, xpath) {
    await homePage.isiInputByXpath(xpath, password);
  }
);

When(
  "user klik masuk untuk login dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

Then("user redirect ke halaman utama {string}", async function (expectedUrl) {
  await driver.wait(async () => {
    const currentUrl = await driver.getCurrentUrl();
    return currentUrl === expectedUrl;
  }, 10000);
  await driver.quit();
});
