require("chromedriver");
const { assert } = require("chai");
const { Key, By, until } = require("selenium-webdriver");

async function openUrl(searchPage) {
  await driver.get(searchPage);
  await driver.findElement(By.name("q")).click;
}

async function searchBar(keySearch) {
  await driver.findElement(By.name("q")).sendKeys(keySearch, Key.RETURN);
  let title = await driver.getTitle();
  await assert.strictEqual(title, "amazon - Buscar con Google");
  console.log("searchBar log: ", title);
}

async function myPage() {
  await driver
    .wait(until.elementLocated(By.xpath("//a[@href='https://www.amazon.es/']")))
    .click();
}

async function resultPage() {
  let title = await driver.getTitle();
  console.log("resultPage log: ", title);
  assert.strictEqual(
    title,
    "Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más."
  );
}

async function logInPage() {
  await driver.wait(until.elementLocated(By.id("nav-tools"))).click();
  let title = await driver.getTitle();
  assert.strictEqual(title, "Iniciar sesión en Amazon");
  console.log("logInPage log: ", title);
}

async function logInSuccessful(email, password) {
  await driver.findElement(By.name("email")).sendKeys(email);
  await driver.findElement(By.name("password")).sendKeys(password);
}

async function profilePage() {
  await driver.findElement(By.id("signInSubmit")).click();
  let accountName = await driver
    .findElement(By.className("nav-line-1"))
    .getText();
  console.log(accountName);
  assert.strictEqual(accountName, "");
}

module.exports = {
  openUrl,
  searchBar,
  myPage,
  resultPage,
  logInPage,
  logInSuccessful,
  profilePage
};
