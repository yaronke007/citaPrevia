import "chromedriver";
import { assert, expect } from "chai";
import { Key, By, until } from "selenium-webdriver";
import { mySearchPage, myVideoPage, myShoppingPage } from "./constants";
let parent;

export async function openUrl(driver) {
  await driver.get(mySearchPage);
  parent = await driver.getWindowHandle();
  await driver.executeScript(`window.open("${myVideoPage}");`);

  // await driver.switchTo().window(parent);

  // let allHandles = await driver.getAllWindowHandles();
  // await driver.switchTo().window(allHandles[1]);

  // driver.getAllWindowHandles().then(function(allHandles) {
  //   allHandles.map(handle => console.log(handle));
  // driver.getTitle().then(function(text) {
  //   console.log("Parent window: " + text);
  // });
  // });
  await driver.findElement(By.name("q")).click;
}

export async function searchBar(keySearch, driver) {
  await driver.findElement(By.name("q")).sendKeys(keySearch, Key.RETURN);
  let title = await driver.getTitle();
  await assert.strictEqual(title, "amazon - Buscar con Google");
  console.log("searchBar log: ", title);
}

export async function myPage(driver) {
  await driver
    .wait(until.elementLocated(By.xpath("//a[@href='https://www.amazon.es/']")))
    .click();
}

export async function resultPage(driver) {
  let title = await driver.getTitle();
  console.log("resultPage log: ", title);
  assert.strictEqual(
    title,
    "Amazon.es: compra online de electrónica, libros, deporte, hogar, moda y mucho más."
  );
}

export async function logInPage(driver) {
  // const actions = driver.actions();
  // const yaron = await driver.findElement(By.id("nav-link-accountList"));
  // actions.move({ origin: yaron });

  await driver
    .wait(until.elementLocated(By.id("nav-link-accountList")))
    .click();
  let title = await driver.getTitle();
  assert.strictEqual(title, "Iniciar sesión en Amazon");
  console.log("logInPage log: ", title);
}

export async function logInSuccessful(email, password, driver) {
  await driver.findElement(By.name("email")).sendKeys(email);
  await driver.findElement(By.name("password")).sendKeys(password);
}

export async function profilePage(driver) {
  await driver.findElement(By.id("signInSubmit")).click();
  let accountName = await driver
    .findElement(By.id("glow-ingress-line1"))
    .getText();
  console.log(accountName);
  assert.strictEqual(accountName, "");
}
