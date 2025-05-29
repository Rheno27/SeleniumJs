const { Given, When, Then } = require("@cucumber/cucumber");
const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/Booking");
const jsonOutput = require("../../support/jsonOutput");

let driver;
let homePage;

// ----------------------------
// SCENARIO 1: Halaman Utama
// ----------------------------
Given("user membuka halaman utama {string}", async function (url) {
  jsonOutput.startScenario("SCENARIO 1: Halaman Utama");
  const startTime = Date.now();
  try {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    await homePage.open(url);
    const endTime = Date.now();
    jsonOutput.addTransition(
      "Given",
      true,
      "Membuka halaman utama berhasil",
      endTime - startTime
    );
  } catch (error) {
    const endTime = Date.now();
    jsonOutput.addTransition(
      "Given",
      false,
      `Gagal membuka halaman utama: ${error.message}`,
      endTime - startTime
    );
    jsonOutput.setReward(0);
    jsonOutput.saveToFile("test-results.json");
    throw error;
  }
});

When(
  "user klik pilihan destinasi favorit dengan xpath {string}",
  async function (xpath) {
    const startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Klik pilihan destinasi favorit berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal klik destinasi favorit: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user klik Cari Penerbangan dengan xpath {string}",
  async function (xpath) {
    const startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Klik Cari Penerbangan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal klik Cari Penerbangan: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

Then(
  "user redirect ke halaman pilih penerbangan {string}",
  async function (expectedUrl) {
    const startTime = Date.now();
    try {
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
      }, 10000);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Then",
        true,
        "Redirect ke halaman pilih penerbangan berhasil",
        endTime - startTime
      );
      jsonOutput.setReward(1);
      jsonOutput.saveToFile("test-results.json");
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Then",
        false,
        `Gagal redirect ke halaman penerbangan: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");

      throw error;
    }
  }
);

// ------------------------------------------
// SCENARIO 2: User belum login pilih tiket
// ------------------------------------------
Given(
  "user berada di halaman pilih penerbangan {string}",
  async function (url) {
    jsonOutput.startScenario("SCENARIO 2: User belum login pilih tiket");
    const startTime = Date.now();
    try {
      driver = await new Builder().forBrowser("chrome").build();
      homePage = new HomePage(driver);
      await homePage.open(url);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Given",
        true,
        "Berada di halaman pilih penerbangan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Given",
        false,
        `Gagal membuka halaman penerbangan: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user klik tombol pilih pada pilihan penerbangan dengan xpath {string}",
  async function (xpath) {
    const startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Klik tombol pilih penerbangan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal klik tombol pilih: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

Then("user diarahkan ke halaman login {string}", async function (expectedUrl) {
  const startTime = Date.now();
  try {
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);
    const endTime = Date.now();
    jsonOutput.addTransition(
      "Then",
      true,
      "Diarahkan ke halaman login berhasil",
      endTime - startTime
    );
    jsonOutput.setReward(1);
    jsonOutput.saveToFile("test-results.json");
    await driver.quit();
  } catch (error) {
    const endTime = Date.now();
    jsonOutput.addTransition(
      "Then",
      false,
      `Gagal redirect ke halaman login: ${error.message}`,
      endTime - startTime
    );
    jsonOutput.setReward(0);
    jsonOutput.saveToFile("test-results.json");
    await driver.quit();
    throw error;
  }
});

// -------------------------------------
// SCENARIO 3: User melakukan login
// -------------------------------------
Given("user membuka halaman login {string}", async function (url) {
  jsonOutput.startScenario("SCENARIO 3: User melakukan login");
  const startTime = Date.now();
  try {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    await homePage.open(url);
    const endTime = Date.now();
    jsonOutput.addTransition(
      "Given",
      true,
      "Membuka halaman login berhasil",
      endTime - startTime
    );
  } catch (error) {
    const endTime = Date.now();
    jsonOutput.addTransition(
      "Given",
      false,
      `Gagal membuka halaman login: ${error.message}`,
      endTime - startTime
    );
    jsonOutput.setReward(0);
    jsonOutput.saveToFile("test-results.json");
    throw error;
  }
});

When(
  "user mengisi email {string} dengan xpath {string}",
  async function (email, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, email);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Mengisi email berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal mengisi email: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user mengisi password {string} dengan xpath {string}",
  async function (password, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, password);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Mengisi password berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal mengisi password: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user klik masuk untuk login dengan xpath {string}",
  async function (xpath) {
    const startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Klik tombol masuk berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal klik tombol masuk: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

Then("user redirect ke halaman utama {string}", async function (expectedUrl) {
  const startTime = Date.now();
  try {
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);
    const endTime = Date.now();
    jsonOutput.addTransition(
      "Then",
      true,
      "Redirect ke halaman utama berhasil",
      endTime - startTime
    );
    jsonOutput.setReward(1);
    jsonOutput.saveToFile("test-results.json");
    await driver.quit();
  } catch (error) {
    const endTime = Date.now();
    jsonOutput.addTransition(
      "Then",
      false,
      `Gagal redirect ke halaman utama: ${error.message}`,
      endTime - startTime
    );
    jsonOutput.setReward(0);
    jsonOutput.saveToFile("test-results.json");
    await driver.quit();
    throw error;
  }
});

// -------------------------------------
// SCENARIO 4 sama dengan SCENARIO 1
// -------------------------------------

// SCENARIO 5: User sudah login memilih penerbangan
Given(
  "user berada di halaman pilih penerbangan {string}",
  async function (url) {
    jsonOutput.startScenario(
      "SCENARIO 5: User sudah login memilih penerbangan"
    );
    const startTime = Date.now();
    try {
      driver = await new Builder().forBrowser("chrome").build();
      homePage = new HomePage(driver);
      await homePage.open(url);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Given",
        true,
        "Berada di halaman pilih penerbangan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Given",
        false,
        `Gagal membuka halaman penerbangan: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user klik tombol pilih pada pilihan penerbangan dengan xpath {string}",
  async function (xpath) {
    const startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Klik tombol pilih penerbangan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal klik tombol pilih: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

Then(
  "user diarahkan ke halaman checkout {string}",
  async function (expectedUrl) {
    const startTime = Date.now();
    try {
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
      }, 10000);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Then",
        true,
        "Diarahkan ke halaman checkout berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Then",
        false,
        `Gagal redirect ke halaman checkout: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When("user klik nama sapaan dengan xpath {string}", async function (xpath) {
  const startTime = Date.now();
  try {
    await homePage.klikByXpath(xpath);
    const endTime = Date.now();
    jsonOutput.addTransition(
      "When",
      true,
      "Klik nama sapaan berhasil",
      endTime - startTime
    );
  } catch (error) {
    const endTime = Date.now();
    jsonOutput.addTransition(
      "When",
      false,
      `Gagal klik nama sapaan: ${error.message}`,
      endTime - startTime
    );
    jsonOutput.setReward(0);
    jsonOutput.saveToFile("test-results.json");
    throw error;
  }
});

When(
  "user memilih nama sapaan {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Memilih nama sapaan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal memilih nama sapaan: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user mengisi nama depan {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Mengisi nama depan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal mengisi nama depan: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user mengisi nama belakang {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Mengisi nama belakang berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal mengisi nama belakang: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user memilih tanggal {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Memilih tanggal berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal memilih tanggal: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user mengisi kewarganegaraan {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Mengisi kewarganegaraan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal mengisi kewarganegaraan: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user memilih kewarganegaraan dengan xpath {string}",
  async function (xpath) {
    const startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Memilih kewarganegaraan berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal memilih kewarganegaraan: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user memasukkan no paspor/no ktp {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Memasukkan no paspor/ktp berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal memasukkan no paspor/ktp: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user mengisi tanggal berlaku {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Mengisi tanggal berlaku berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal mengisi tanggal berlaku: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user mengisi asal negara {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Mengisi asal negara berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal mengisi asal negara: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When(
  "user memilih asal negara {string} dengan xpath {string}",
  async function (value, xpath) {
    const startTime = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        true,
        "Memilih asal negara berhasil",
        endTime - startTime
      );
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "When",
        false,
        `Gagal memilih asal negara: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      throw error;
    }
  }
);

When("user memilih kursi dengan xpath {string}", async function (xpath) {
  const startTime = Date.now();
  try {
    await homePage.klikByXpath(xpath);
    const endTime = Date.now();
    jsonOutput.addTransition(
      "When",
      true,
      "Memilih kursi berhasil",
      endTime - startTime
    );
  } catch (error) {
    const endTime = Date.now();
    jsonOutput.addTransition(
      "When",
      false,
      `Gagal memilih kursi: ${error.message}`,
      endTime - startTime
    );
    jsonOutput.setReward(0);
    jsonOutput.saveToFile("test-results.json");
    throw error;
  }
});

When("user klik lanjut bayar dengan xpath {string}", async function (xpath) {
  const startTime = Date.now();
  try {
    await homePage.klikByXpath(xpath);
    const endTime = Date.now();
    jsonOutput.addTransition(
      "When",
      true,
      "Klik lanjut bayar berhasil",
      endTime - startTime
    );
  } catch (error) {
    const endTime = Date.now();
    jsonOutput.addTransition(
      "When",
      false,
      `Gagal klik lanjut bayar: ${error.message}`,
      endTime - startTime
    );
    jsonOutput.setReward(0);
    jsonOutput.saveToFile("test-results.json");
    throw error;
  }
});

Then(
  "user diarahkan ke halaman pembayaran yang mengandung {string}",
  async function (expectedUrlPart) {
    const startTime = Date.now();
    try {
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl.includes(expectedUrlPart);
      }, 10000);
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Then",
        true,
        "Diarahkan ke halaman pembayaran berhasil",
        endTime - startTime
      );
      jsonOutput.setReward(1);
      jsonOutput.saveToFile("test-results.json");
      await driver.quit();
    } catch (error) {
      const endTime = Date.now();
      jsonOutput.addTransition(
        "Then",
        false,
        `Gagal redirect ke halaman pembayaran: ${error.message}`,
        endTime - startTime
      );
      jsonOutput.setReward(0);
      jsonOutput.saveToFile("test-results.json");
      await driver.quit();
      throw error;
    }
  }
);
