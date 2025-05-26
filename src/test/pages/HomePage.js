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
    await elemen.click();
  }

  async klikByCss(selector) {
    await this.driver.wait(until.elementLocated(By.css(selector)), 10000);
    const elemen = await this.driver.findElement(By.css(selector));
    await elemen.click();
  }

  async cekElemenTampil(xpath) {
    await this.driver.wait(until.elementLocated(By.xpath(xpath)), 10000);
  }
}

module.exports = HomePage;
