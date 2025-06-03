const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/Booking");
const jsonOutput = require("../../support/jsonOutput");

let driver;
let homePage;

// ----------------------------
// SCENARIO 1: Halaman Utama
// ----------------------------

Given("user membuka halaman utama {string}", async function (url) {
  const start = Date.now();
  try {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    await homePage.open(url);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Given",
      success: true,
      message: "Membuka halaman utama berhasil",
      responseTime,
    });
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Given",
      success: false,
      message: `Membuka halaman utama gagal: ${error.message}`,
      responseTime,
    });
    throw error;
  }
});

When(
  "user klik pilihan destinasi favorit dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Klik pilihan destinasi favorit berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Klik pilihan destinasi favorit gagal: ${error.message}`,
        responseTime,
      });
      throw error;
    }
  }
);

When(
  "user klik Cari Penerbangan dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Klik Cari Penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Klik Cari Penerbangan gagal: ${error.message}`,
        responseTime,
      });
      throw error;
    }
  }
);

Then(
  "user redirect ke halaman pilih penerbangan {string}",
  async function (expectedUrl) {
    const start = Date.now();
    try {
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
      }, 10000);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Then",
        success: true,
        message: "Redirect ke halaman pilih penerbangan berhasil",
        responseTime,
      });


      await driver.quit();
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Then",
        success: false,
        message: `Redirect gagal: ${error.message}`,
        responseTime,
      });


      await driver.quit();
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
    const start = Date.now();
    try {
      driver = await new Builder().forBrowser("chrome").build();
      homePage = new HomePage(driver);
      await homePage.open(url);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Given",
        success: true,
        message: "Berada di halaman pilih penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Given",
        success: false,
        message: `Gagal membuka halaman penerbangan: ${error.message}`,
        responseTime,
      });
      throw error;
    }
  }
);

When(
  "user klik tombol pilih pada pilihan penerbangan dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Klik tombol pilih penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal klik tombol pilih: ${error.message}`,
        responseTime,
      });
      throw error;
    }
  }
);

Then("user diarahkan ke halaman login {string}", async function (expectedUrl) {
  const start = Date.now();
  try {
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Then",
      success: true,
      message: "Diarahkan ke halaman login berhasil",
      responseTime,
    });
    jsonOutput.setReward(0);

    await driver.quit();
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Then",
      success: false,
      message: `Gagal redirect ke halaman login: ${error.message}`,
      responseTime,
    });

    await driver.quit();
    throw error;
  }
});

// -------------------------------------
// SCENARIO 3: User melakukan login
// -------------------------------------
Given("user membuka halaman login {string}", async function (url) {
  const start = Date.now();
  try {
    driver = await new Builder().forBrowser("chrome").build();
    homePage = new HomePage(driver);
    await homePage.open(url);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Given",
      success: true,
      message: "Membuka halaman login berhasil",
      responseTime,
    });
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Given",
      success: false,
      message: `Gagal membuka halaman login: ${error.message}`,
      responseTime,
    });
    throw error;
  }
});

When(
  "user mengisi email {string} dengan xpath {string}",
  async function (email, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, email);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi email berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi email: ${error.message}`,
        responseTime,
      });
      throw error;
    }
  }
);

When(
  "user mengisi password {string} dengan xpath {string}",
  async function (password, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, password);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi password berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi password: ${error.message}`,
        responseTime,
      });
      throw error;
    }
  }
);

When(
  "user klik masuk untuk login dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Klik tombol masuk berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal klik tombol masuk: ${error.message}`,
        responseTime,
      });
      throw error;
    }
  }
);

Then("user redirect ke halaman utama {string}", async function (expectedUrl) {
  const start = Date.now();
  try {
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Then",
      success: true,
      message: "Redirect ke halaman utama berhasil",
      responseTime,
    });

    await driver.quit();
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Then",
      success: false,
      message: `Gagal redirect ke halaman utama: ${error.message}`,
      responseTime,
    });
    jsonOutput.setReward(0);

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
    const start = Date.now();
    try {
      driver = await new Builder().forBrowser("chrome").build();
      homePage = new HomePage(driver);
      await homePage.open(url);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Given",
        success: true,
        message: "Berada di halaman pilih penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Given",
        success: false,
        message: `Gagal membuka halaman penerbangan: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user klik tombol pilih pada pilihan penerbangan dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Klik tombol pilih penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal klik tombol pilih: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

Then(
  "user diarahkan ke halaman checkout {string}",
  async function (expectedUrl) {
    const start = Date.now();
    try {
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
      }, 10000);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Then",
        success: true,
        message: "Diarahkan ke halaman checkout berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Then",
        success: false,
        message: `Gagal redirect ke halaman checkout: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When("user klik nama sapaan dengan xpath {string}", async function (xpath) {
  const start = Date.now();
  try {
    await homePage.klikByXpath(xpath);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "When",
      success: true,
      message: "Klik nama sapaan berhasil",
      responseTime,
    });
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "When",
      success: false,
      message: `Gagal klik nama sapaan: ${error.message}`,
      responseTime,
    });
    jsonOutput.setReward(0);
    throw error;
  }
});

When(
  "user memilih nama sapaan {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Memilih nama sapaan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal memilih nama sapaan: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user mengisi nama depan {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi nama depan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi nama depan: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user mengisi nama belakang {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi nama belakang berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi nama belakang: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user memilih tanggal {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Memilih tanggal berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal memilih tanggal: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user mengisi kewarganegaraan {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi kewarganegaraan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi kewarganegaraan: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user memilih kewarganegaraan dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Memilih kewarganegaraan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal memilih kewarganegaraan: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user memasukkan no paspor/no ktp {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Memasukkan no paspor/ktp berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal memasukkan no paspor/ktp: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user mengisi tanggal berlaku {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi tanggal berlaku berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi tanggal berlaku: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user mengisi asal negara {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi asal negara berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi asal negara: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When(
  "user memilih asal negara {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Memilih asal negara berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal memilih asal negara: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
      throw error;
    }
  }
);

When("user memilih kursi dengan xpath {string}", async function (xpath) {
  const start = Date.now();
  try {
    await homePage.klikByXpath(xpath);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "When",
      success: true,
      message: "Memilih kursi berhasil",
      responseTime,
    });
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "When",
      success: false,
      message: `Gagal memilih kursi: ${error.message}`,
      responseTime,
    });
    jsonOutput.setReward(0);
    throw error;
  }
});

When("user klik lanjut bayar dengan xpath {string}", async function (xpath) {
  const start = Date.now();
  try {
    await homePage.klikByXpath(xpath);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "When",
      success: true,
      message: "Klik lanjut bayar berhasil",
      responseTime,
    });
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "When",
      success: false,
      message: `Gagal klik lanjut bayar: ${error.message}`,
      responseTime,
    });
    jsonOutput.setReward(0);
    throw error;
  }
});

Then(
  "user diarahkan ke halaman pembayaran yang mengandung {string}",
  async function (expectedUrlPart) {
    const start = Date.now();
    try {
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl.includes(expectedUrlPart);
      }, 10000);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Then",
        success: true,
        message: "Diarahkan ke halaman pembayaran berhasil",
        responseTime,
      });

      await driver.quit();
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Then",
        success: false,
        message: `Gagal redirect ke halaman pembayaran: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);

      await driver.quit();
      throw error;
    }
  }
);
