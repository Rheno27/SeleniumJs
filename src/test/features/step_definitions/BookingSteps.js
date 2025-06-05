const {
  Given,
  When,
  Then,
  Before,
  After,
  setDefaultTimeout,
} = require("@cucumber/cucumber");

const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/Booking");
const jsonOutput = require("../../support/jsonOutput");
const { generateRandomInput } = require("../../support/dataGenerator");

const {
  generateRandomPassenger,
  formatDateMMDDYY,
  formatDateMMDDYYYY,
} = require("../../support/dataGenerator");

setDefaultTimeout(30 * 1000);

let driver;
let homePage;

Before(async function () {
  driver = await new Builder().forBrowser("chrome").build();
  homePage = new HomePage(driver);
});

After(async function () {
  await driver.quit();
});

// ----------------------------
// User dihalaman Login
// ----------------------------
Given("user membuka halaman login {string}", async function (url) {
  const start = Date.now();
  try {
    await homePage.open(url);
    await driver.sleep(1000);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      statusCode: "200",
      success: true,
      message: "Membuka halaman login berhasil",
      responseTime,
    });
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      statusCode: "400",
      success: false,
      message: `Gagal membuka halaman login: ${error.message}`,
      responseTime,
    });
        this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
  }
});

When("user mengisi email dan password secara otomatis", async function () {
  const { type, data } = generateRandomInput(); 

  const start = Date.now();
  try {
    await homePage.isiInputByXpath("//input[@id='email']", data.email);
    await driver.sleep(1000);
    await homePage.isiInputByXpath("//input[@id='password']", data.password);
    await driver.sleep(1000);

    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      statusCode: "200",
      success: true,
      message: `Berhasil isi input login (${type})`,
      responseTime,
    });
  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      statusCode: "408",
      success: false,
      message: `Gagal isi input login (${type}): ${error.message}`,
      responseTime,
    });
    this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
  }
});


When(
  "user klik masuk untuk login dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      await driver.sleep(1000);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "200",
        success: true,
        message: "Klik tombol masuk berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "408",
        success: false,
        message: `Gagal klik tombol masuk: ${error.message}`,
        responseTime,
      });
          this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
    }
  }
);

Then("user diarahkan ke halaman utama {string}", async function (expectedUrl) {
  const start = Date.now();
  try {
    await driver.wait(async () => {
      const currentUrl = await driver.getCurrentUrl();
      return currentUrl === expectedUrl;
    }, 10000);
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      statusCode: "Then",
      success: true,
      message: "Redirect ke halaman utama berhasil",
      responseTime,
    });

  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      statusCode: "Then",
      success: false,
      message: `Gagal redirect ke halaman utama: ${error.message}`,
      responseTime,
    });
    jsonOutput.setReward(0);

        this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
  }
});

// ------------------------------------------
// User dihalaman Homepage
// ------------------------------------------

When(
  "user klik destinasi favorit dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "200",
        success: true,
        message: "Klik pilihan destinasi favorit berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "408",
        success: false,
        message: `Klik pilihan destinasi favorit gagal: ${error.message}`,
        responseTime,
      });
          this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
    }
  }
);

When(
  "user klik tombol Cari Penerbangan dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "200",
        success: true,
        message: "Klik Cari Penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "408",
        success: false,
        message: `Klik Cari Penerbangan gagal: ${error.message}`,
        responseTime,
      });
          this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
    }
  }
);

Then(
  "user diarahkan ke halaman pilih penerbangan yang mengandung url {string}",
  async function (expectedUrl) {
    const start = Date.now();
    try {
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl.includes(expectedUrl);
      }, 10000);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "Then",
        success: true,
        message: "Redirect ke halaman pilih penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "Then",
        success: false,
        message: `Redirect gagal: ${error.message}`,
        responseTime,
      });

          this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
    }
  }
);

// -------------------------------------
// SCENARIO 4 sama dengan SCENARIO 1
// -------------------------------------

When(
  "user klik tombol Pilih pada penerbangan dengan xpath {string}",
  async function (xpath) {
    const start = Date.now();
    try {
      await homePage.klikByXpath(xpath);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "200",
        success: true,
        message: "Klik tombol Pilih berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "408",
        success: false,
        message: `Klik tombol Pilih gagal: ${error.message}`,
        responseTime,
      });
          this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
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
        statusCode: "200",
        success: true,
        message: "Klik tombol pilih penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "408",
        success: false,
        message: `Gagal klik tombol pilih: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
          this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
    }
  }
);

Then(
  "user diarahkan ke halaman checkout yang mengandung url {string}",
  async function (expectedUrl) {
    const start = Date.now();
    try {
      await driver.wait(async () => {
        const currentUrl = await driver.getCurrentUrl();
        return currentUrl === expectedUrl;
      }, 10000);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "Then",
        success: true,
        message: "Diarahkan ke halaman checkout berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        statusCode: "Then",
        success: false,
        message: `Gagal redirect ke halaman checkout: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward(0);
          this.testErrors = this.testErrors || [];
    this.testErrors.push(error.message);
    }
  }
);

When("user mengisi data penumpang secara otomatis", async function () {
  const { type, data } = generateRandomPassenger();

  try {
    // Klik dropdown dan pilih title
    await homePage.klikByXpath("//select[@placeholder='Pilih `Title`']");
    await homePage.klikByXpath(`//option[@value='${data.title}']`);

    // Isi nama
    await homePage.isiInputByXpath(
      "//input[@placeholder='Masukkan Nama Depan']",
      data.firstName
    );
    await homePage.isiInputByXpath(
      "//input[@placeholder='Masukkan Nama Belakang']",
      data.lastName
    );

    // Tanggal lahir (07272005)
    await homePage.isiInputByXpath(
      "//div[5]//input[1]",
      formatDateMMDDYY(data.birthDate)
    );

    // Kewarganegaraan
    await homePage.klikByXpath("//input[@placeholder='Pilih Kewarganegaraan']");
    await homePage.klikByXpath("(//div[@class='stdropdown-item false'])[1]");

    // No KTP / Paspor
    await homePage.isiInputByXpath(
      "//input[@placeholder='Masukkan No. KTP/Paspor']",
      data.idNumber
    );

    // Tanggal berlaku paspor (MM/DD/YYYY)
    await homePage.isiInputByXpath(
      "//div[8]//input[1]",
      formatDateMMDDYYYY(data.passportExpiry)
    );

    // Asal negara
    await homePage.klikByXpath("//input[@id='country-origin']");
    await homePage.klikByXpath("(//div[@class='stdropdown-item false'])[2]");

    // Pilih kursi
    if (data.seatCode) {
      await homePage.klikByXpath(
        `//label[normalize-space()='${data.seatCode}']`
      );
    }

    jsonOutput.addTransition({
      statusCode: "200",
      success: true,
      message: `Berhasil mengisi data penumpang (${type})`,
    });
  } catch (error) {
    jsonOutput.addTransition({
      statusCode: "500",
      success: false,
      message: `Gagal mengisi data penumpang: ${error.message}`,
    });
    throw error;
  }
});


// When(
//   "user klik tombol Lanjutkan ke Pembayaran dengan xpath {string}",
//   async function (xpath) {
//     const start = Date.now();
//     try {
//       await homePage.klikByXpath(xpath);
//       const responseTime = `${Date.now() - start}ms`;
//       jsonOutput.addTransition({
//         statusCode: "200",
//         success: true,
//         message: "Klik lanjut bayar berhasil",
//         responseTime,
//       });
//     } catch (error) {
//       const responseTime = `${Date.now() - start}ms`;
//       jsonOutput.addTransition({
//         statusCode: "408",
//         success: false,
//         message: `Gagal klik lanjut bayar: ${error.message}`,
//         responseTime,
//       });
//       jsonOutput.setReward(0);
//       throw error;
//     }
//   }
// );

// Then(
//   "user diarahkan ke halaman pembayaran yang mengandung {string}",
//   async function (expectedUrlPart) {
//     const start = Date.now();
//     try {
//       await driver.wait(async () => {
//         const currentUrl = await driver.getCurrentUrl();
//         return currentUrl.includes(expectedUrlPart);
//       }, 10000);
//       const responseTime = `${Date.now() - start}ms`;
//       jsonOutput.addTransition({
//         statusCode: "Then",
//         success: true,
//         message: "Diarahkan ke halaman pembayaran berhasil",
//         responseTime,
//       });

//     } catch (error) {
//       const responseTime = `${Date.now() - start}ms`;
//       jsonOutput.addTransition({
//         statusCode: "Then",
//         success: false,
//         message: `Gagal redirect ke halaman pembayaran: ${error.message}`,
//         responseTime,
//       });
//       jsonOutput.setReward(0);

//       throw error;
//     }
//   }
// );
