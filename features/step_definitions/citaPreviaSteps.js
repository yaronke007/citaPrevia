const { assert } = require("chai");
require("chromedriver");
const { Given, When, Then, And } = require("cucumber");
// const { openUrl } = require("../../main");
const { By, Key, until } = require("selenium-webdriver");
// const { click } = require("webdriverio");
const {
  openUrl,
  searchBar,
  myPage,
  resultPage,
  logInPage,
  logInSuccessful,
  profilePage
} = require("../../main");

Given("the user opens the browser and looks for {string}", async function(
  searchPage
) {
  await openUrl(searchPage);
});

When("the user searchs {string}", async function(keySearch) {
  await searchBar(keySearch);
});

Given("the user clicks on the desired link", async function() {
  await myPage();
});

Then("the desired page is open", async function() {
  await resultPage();
});

Given("the user go to the login page", async function() {
  await logInPage();
});

Given(
  "the user enter login name {string} and password {string}",
  async function(email, password) {
    await logInSuccessful(email, password);
  }
);

Then("the user is logged in to his profile", async function() {
  await profilePage();
});
