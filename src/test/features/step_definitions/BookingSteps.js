const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, until } = require("selenium-webdriver");
const HomePage = require("../../pages/Booking");
const jsonOutput = require("../../support/jsonOutput");

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

Then("user diarahkan ke halaman utama {string}", async function (expectedUrl) {
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

  } catch (error) {
    const responseTime = `${Date.now() - start}ms`;
    jsonOutput.addTransition({
      status: "Then",
      success: false,
      message: `Gagal redirect ke halaman utama: ${error.message}`,
      responseTime,
    });
    jsonOutput.setReward(0);

    throw error;
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
  "user klik tombol Cari Penerbangan dengan xpath {string}",
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
        status: "Then",
        success: true,
        message: "Redirect ke halaman pilih penerbangan berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "Then",
        success: false,
        message: `Redirect gagal: ${error.message}`,
        responseTime,
      });

      throw error;
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
        status: "When",
        success: true,
        message: "Klik tombol Pilih berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Klik tombol Pilih gagal: ${error.message}`,
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
      jsonOutput.setReward(0);
      throw error;
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
  "user mengisi tanggal lahir {string} dengan xpath {string}",
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi tanggal lahir berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi tanggal lahir: ${error.message}`,
        responseTime,
      });
      throw error;
    }
  }
);

When("user klik kewarganegaraan dengan xpath {string}", async function (xpath) {
  const start = Date.now();
  try {
    await homePage.klikByXpath(xpath);
    await driver.sleep(1500);
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
  "user memilih kewarganegaraan dari dropdown dengan index xpath {string}",
  async function (xpath) {
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
  }
);

When(
  /^user mengisi no KTP\/paspor "([^"]*)" dengan xpath "([^"]*)"$/,
  async function (value, xpath) {
    const start = Date.now();
    try {
      await homePage.isiInputByXpath(xpath, value);
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: true,
        message: "Mengisi no KTP/paspor berhasil",
        responseTime,
      });
    } catch (error) {
      const responseTime = `${Date.now() - start}ms`;
      jsonOutput.addTransition({
        status: "When",
        success: false,
        message: `Gagal mengisi no KTP/paspor: ${error.message}`,
        responseTime,
      });
      jsonOutput.setReward?.(0);
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

When("user klik asal negara dengan xpath {string}", async function (xpath) {
  const start = Date.now();
  try {
    await homePage.klikByXpath(xpath);
    await driver.sleep(1500);
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
  "user memilih asal negara dari dropdown dengan xpath {string}",
  async function (xpath) {
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

// When(
//   "user klik tombol Lanjutkan ke Pembayaran dengan xpath {string}",
//   async function (xpath) {
//     const start = Date.now();
//     try {
//       await homePage.klikByXpath(xpath);
//       const responseTime = `${Date.now() - start}ms`;
//       jsonOutput.addTransition({
//         status: "When",
//         success: true,
//         message: "Klik lanjut bayar berhasil",
//         responseTime,
//       });
//     } catch (error) {
//       const responseTime = `${Date.now() - start}ms`;
//       jsonOutput.addTransition({
//         status: "When",
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
//         status: "Then",
//         success: true,
//         message: "Diarahkan ke halaman pembayaran berhasil",
//         responseTime,
//       });

//     } catch (error) {
//       const responseTime = `${Date.now() - start}ms`;
//       jsonOutput.addTransition({
//         status: "Then",
//         success: false,
//         message: `Gagal redirect ke halaman pembayaran: ${error.message}`,
//         responseTime,
//       });
//       jsonOutput.setReward(0);

//       throw error;
//     }
//   }
// );
