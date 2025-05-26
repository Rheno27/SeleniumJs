const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder } = require("selenium-webdriver");
const HomePage = require("../../pages/HomePage");

let driver;
let homePage;

// =======================
// Skenario: Bandara Asal
// =======================
Given("user membuka halaman utama {string}", async function (url) {
  driver = await new Builder().forBrowser("chrome").build();
  homePage = new HomePage(driver);
  await homePage.open(url);
});

When("user klik pilihan bandara asal {string}", async function (xpath) {
  await homePage.klikByXpath(xpath);
});

When(
  "user pilih Soekarno-Hatta International Airport dengan xpath {string}", async function (nama, xpath) {
    await homePage.klikByXpath(xpath);
  }
);

Then(
  "user melihat konfirmasi bandara asal muncul {string}",
  async function (xpath) {
    await homePage.cekElemenTampil(xpath);
    await driver.quit();
  }
);

// =======================
// Skenario: Bandara Tujuan
// =======================
When("user klik pilihan bandara tujuan {string}", async function (xpath) {
  await homePage.klikByXpath(xpath);
});

When(
  "user pilih Sydney Airport dengan xpath {string}", async function (nama, xpath) {
    await homePage.klikByXpath(xpath);
  }
);

Then(
  "user melihat konfirmasi bandara tujuan muncul {string}", async function (xpath) {
    await homePage.cekElemenTampil(xpath);
    await driver.quit();
  }
);

// ============================
// Skenario: Tanggal Keberangkatan
// ============================
When(
  "user klik pilihan tanggal keberangkatan {string}",
  async function (xpath) {
    await homePage.klikByXpath(xpath);
  }
);

When("user klik pindah bulan {string}", async function (xpath) {
  await homePage.klikByXpath(xpath);
});

When("user pilih tanggal 17 juni {string}", async function (xpath) {
  await homePage.klikByXpath(xpath);
});

When("user klik tombol x {string}", async function (selector) {
  await homePage.klikByCss(selector);
});

Then(
  "user melihat konfirmasi tanggal keberangkatan {string}",
  async function (xpath) {
    await homePage.cekElemenTampil(xpath);
    await driver.quit();
  }
);

// ============================
// Skenario: Jumlah Penumpang
// ============================
Then("user melihat jumlah penumpang 1 {string}", async function (xpath) {
  await homePage.cekElemenTampil(xpath);
  await driver.quit();
});

// ============================
// Skenario: Kelas Kursi
// ============================
When("user klik kelas kursi {string}", async function (xpath) {
  await homePage.klikByXpath(xpath);
});

When(
  "user pilih Premium Economy dengan xpath {string}",
  async function (nama, xpath) {
    await homePage.klikByXpath(xpath);
  }
);

When("user klik tombol x {string}", async function (selector) {
  await homePage.klikByCss(selector);
});

Then("user melihat konfirmasi kelas kursi {string}", async function (xpath) {
  await homePage.cekElemenTampil(xpath);
  await driver.quit();
});
