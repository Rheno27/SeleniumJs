const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/UnauthenticatedPage");
const jsonOutput = require("../../support/jsonOutput");

let driver;
let homePage;
let startTime;

// ----------------------------
// SCENARIO 1: Halaman Utama
// ----------------------------
Given("user membuka halaman utama {string}", async function (url) {
  startTime = Date.now();
  driver = await new Builder().forBrowser("chrome").build();
  homePage = new HomePage(driver);
  await homePage.open(url);
  jsonOutput.startScenario("Halaman Utama");

  jsonOutput.addTransition(
    200,
    true,
    "Berhasil membuka halaman utama",
    Date.now() - startTime
  );
});

When(
  "user klik pilihan destinasi favorit dengan xpath {string}",
  async function (xpath) {
    startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      jsonOutput.addTransition(
        200,
        true,
        "Berhasil klik destinasi favorit",
        Date.now() - startTime
      );
    } catch (error) {
      jsonOutput.addTransition(
        500,
        false,
        `Gagal klik destinasi favorit: ${error.message}`,
        Date.now() - startTime
      );
    }
  }
);

When(
  "user klik Cari Penerbangan dengan xpath {string}",
  async function (xpath) {
    startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      jsonOutput.addTransition(
        200,
        true,
        "Berhasil klik tombol cari penerbangan",
        Date.now() - startTime
      );
    } catch (error) {
      jsonOutput.addTransition(
        500,
        false,
        `Gagal klik tombol cari: ${error.message}`,
        Date.now() - startTime
      );
    }
  }
);

Then(
  "user redirect ke halaman pilih penerbagnan {string}",
  async function (expectedUrl) {
    startTime = Date.now();
    try {
      const response = await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
      }, 10000);

      const responseTime = Date.now() - startTime;
      const statusCode = await driver.executeScript(
        "return window.performance.getEntries()[0].responseStatus"
      );
      const success = statusCode >= 200 && statusCode < 300;

      jsonOutput.addTransition(
        statusCode,
        success,
        success
          ? "Berhasil redirect ke halaman pilih penerbangan"
          : "Gagal redirect",
        responseTime
      );

      if (success) {
        jsonOutput.setReward(1);
      }
    } catch (error) {
      jsonOutput.addTransition(
        500,
        false,
        `Error: ${error.message}`,
        Date.now() - startTime
      );
    } finally {
      jsonOutput.saveToFile("test-results.json");
      await driver.quit();
    }
  }
);

// ------------------------------------------
// SCENARIO 2: User belum login pilih tiket
// ------------------------------------------
Given(
  "user berada di halaman pilih penerbangan {string}",
  async function (url) {
    startTime = Date.now();
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    await homePage.open(url);
    jsonOutput.startScenario("User Belum Login Pilih Tiket");

    jsonOutput.addTransition(
      200,
      true,
      "Berhasil membuka halaman pilih penerbangan",
      Date.now() - startTime
    );
  }
);

When(
  "user klik tombol pilih pada pilihan penerbangan dengan xpath {string}",
  async function (xpath) {
    startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      jsonOutput.addTransition(
        200,
        true,
        "Berhasil klik tombol pilih penerbangan",
        Date.now() - startTime
      );
    } catch (error) {
      jsonOutput.addTransition(
        500,
        false,
        `Gagal klik tombol pilih: ${error.message}`,
        Date.now() - startTime
      );
    }
  }
);

Then("user diarahkan ke halaman login {string}", async function (expectedUrl) {
  startTime = Date.now();
  try {
    const response = await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);

    const responseTime = Date.now() - startTime;
    const statusCode = await driver.executeScript(
      "return window.performance.getEntries()[0].responseStatus"
    );
    const success = statusCode >= 200 && statusCode < 300;

    jsonOutput.addTransition(
      statusCode,
      success,
      success
        ? "Berhasil diarahkan ke halaman login"
        : "Gagal diarahkan ke login",
      responseTime
    );

    if (success) {
      jsonOutput.setReward(1);
    }
  } catch (error) {
    jsonOutput.addTransition(
      500,
      false,
      `Error: ${error.message}`,
      Date.now() - startTime
    );
  } finally {
    jsonOutput.saveToFile("test-results.json");
    await driver.quit();
  }
});

// -------------------------------------
// SCENARIO 3: User melakukan login
// -------------------------------------
Given("user membuka halaman login {string}", async function (url) {
  startTime = Date.now();
  driver = await new Builder().forBrowser("chrome").build();
  homePage = new HomePage(driver);
  await homePage.open(url);
  jsonOutput.startScenario("User Melakukan Login");

  jsonOutput.addTransition(
    200,
    true,
    "Berhasil membuka halaman login",
    Date.now() - startTime
  );
});

When(
  "user mengisi email {string} dengan xpath {string}",
  async function (email, xpath) {
    startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, email);
      jsonOutput.addTransition(
        200,
        true,
        "Berhasil mengisi email",
        Date.now() - startTime
      );
    } catch (error) {
      jsonOutput.addTransition(
        500,
        false,
        `Gagal mengisi email: ${error.message}`,
        Date.now() - startTime
      );
    }
  }
);

When(
  "user mengisi password {string} dengan xpath {string}",
  async function (password, xpath) {
    startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, password);
      jsonOutput.addTransition(
        200,
        true,
        "Berhasil mengisi password",
        Date.now() - startTime
      );
    } catch (error) {
      jsonOutput.addTransition(
        500,
        false,
        `Gagal mengisi password: ${error.message}`,
        Date.now() - startTime
      );
    }
  }
);

When(
  "user klik masuk untuk login dengan xpath {string}",
  async function (xpath) {
    startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      jsonOutput.addTransition(
        200,
        true,
        "Berhasil klik tombol login",
        Date.now() - startTime
      );
    } catch (error) {
      jsonOutput.addTransition(
        500,
        false,
        `Gagal klik tombol login: ${error.message}`,
        Date.now() - startTime
      );
    }
  }
);

Then("user redirect ke halaman utama {string}", async function (expectedUrl) {
  startTime = Date.now();
  try {
    const response = await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);

    const responseTime = Date.now() - startTime;
    const statusCode = await driver.executeScript(
      "return window.performance.getEntries()[0].responseStatus"
    );
    const success = statusCode >= 200 && statusCode < 300;

    jsonOutput.addTransition(
      statusCode,
      success,
      success ? "Berhasil login dan redirect ke halaman utama" : "Gagal login",
      responseTime
    );

    if (success) {
      jsonOutput.setReward(1);
    }
  } catch (error) {
    jsonOutput.addTransition(
      500,
      false,
      `Error: ${error.message}`,
      Date.now() - startTime
    );
  } finally {
    jsonOutput.saveToFile("test-results.json");
    await driver.quit();
  }
});
