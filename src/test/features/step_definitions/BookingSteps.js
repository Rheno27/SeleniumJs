const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/Booking");

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

// -------------------------------------
// SCENARIO 4 sama dengan SCENARIO 1
// -------------------------------------

// SCENARIO 5: User sudah login memilih penerbangan
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

Then("user diarahkan ke halaman checkout {string}", async function (expectedUrl) {
  await driver.wait(async () => {
    const currentUrl = await driver.getCurrentUrl();
    return currentUrl === expectedUrl;
  }, 10000);
});

When(
  "user klik nama sapaan dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

When(
  "user memilih nama sapaan {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.klikByXpath(xpath);
  }
);

When(
  "user mengisi nama depan {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.isiInputByXpath(xpath, value);
  }
);

When(
  "user mengisi nama belakang {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.isiInputByXpath(xpath, value);
  }
);

When(
  "user memilih tanggal {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.isiInputByXpath(xpath, value);
  }
);

When(
  "user mengisi kewarganegaraan {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.isiInputByXpath(xpath, value);
  }
);

When(
  "user memilih kewarganegaraan dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

When(
  "user memasukkan no paspor/no ktp {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.isiInputByXpath(xpath, value);
  }
);

When(
  "user mengisi tanggal berlaku {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.isiInputByXpath(xpath, value);
  }
);

When(
  "user mengisi asal negara {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.isiInputByXpath(xpath, value);
  }
);

When(
  "user memilih asal negara {string} dengan xpath {string}",
  async function (value, xpath) {
    await homePage.klikByXpath(xpath);
  }
);

When(
  "user memilih kursi dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

When(
  "user klik lanjut bayar dengan xpath {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

Then(
  "user diarahkan ke halaman pembayaran yang mengandung {string}",
  async function (expectedUrlPart) {
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl.includes(expectedUrlPart);
    }, 10000);
    await driver.quit();
  }
);