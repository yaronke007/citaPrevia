const { assert } = require("chai");
require("chromedriver");
const { Given, When, Then, And } = require("cucumber");
// const { openUrl } = require("../../main");
const { By, Key, until } = require("selenium-webdriver");
// const { click } = require("webdriverio");
const { openUrl, searchBar, myPage, resultPage } = require("../../main");
const { info } = require("../support/utils");

Given("the user opens the browser and looks for {string}", async function(
  searchPage
) {
  openUrl(searchPage);
});

When("the user searchs {string}", async function(keySearch) {
  searchBar(keySearch);
});

Given("the user clicks on the desired link", async function() {
  myPage();
});

Then("the desired page is open", async function() {
  resultPage();
});
