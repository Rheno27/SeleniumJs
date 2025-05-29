const { By, until } = require("selenium-webdriver");

class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  async open(url) {
    await this.driver.get(url);
  }

  async klikByXpath(xpath) {
    await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
    const elemen = await this.driver.findElement(By.xpath(xpath));

    // Scroll ke elemen terlebih dahulu
    await this.driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      elemen
    );

    // Tunggu elemen benar-benar bisa diklik
    await this.driver.wait(until.elementIsVisible(elemen), 5000);
    await this.driver.wait(until.elementIsEnabled(elemen), 5000);

    // Gunakan JavaScript click (bypass masalah "intercepted")
    await this.driver.executeScript("arguments[0].click();", elemen);
  }

  async klikByCss(selector) {
    await this.driver.wait(until.elementLocated(By.css(selector)), 10000);
    const elemen = await this.driver.findElement(By.css(selector));
    await elemen.click();
  }

  async cekElemenTampil(xpath) {
    await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
  }

  async isiInputByXpath(xpath, value) {
    await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
    const input = await this.driver.findElement(By.xpath(xpath));
    await input.clear();
    await input.sendKeys(value);
  }
}

module.exports = HomePage;
