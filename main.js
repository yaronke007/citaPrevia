require("chromedriver");
const { assert } = require("chai");
const { Builder, Key, By, until } = require("selenium-webdriver");

function openUrl(searchPage) {
  driver.get(searchPage);
  driver.findElement(By.name("q")).click;
}

function searchBar(keySearch) {
  driver.findElement(By.name("q")).sendKeys(keySearch, Key.RETURN);
  let title = driver.getTitle();
  assert.strictEqual(title, "amazon - Buscar con Google", "Title is correct");
  console.log("searchBar log: ", title);
}

function myPage() {
  driver
    .wait(until.elementLocated(By.xpath("//a[@href='https://www.amazon.es/']")))
    .click();
}

function resultPage() {
  let title = driver.getTitle();
  console.log("resultPage log: ", title);
  assert.strictEqual(
    title,
    "Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más."
  );
}

module.exports = { openUrl, searchBar, myPage, resultPage };
