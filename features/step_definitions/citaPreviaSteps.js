import "chromedriver";
import { Given, When, Then } from "cucumber";
import {
  openUrl,
  searchBar,
  myPage,
  resultPage,
  logInPage,
  logInSuccessful,
  profilePage
} from "../../main";

Given(
  "the user opens the browser and looks for the search page",
  async function() {
    await openUrl(this.driver);
  }
);

When("the user searchs {string}", async function(keySearch) {
  await searchBar(keySearch, this.driver);
});

Given("the user clicks on the desired link", async function() {
  await myPage(this.driver);
});

Then("the desired page is open", async function() {
  await resultPage(this.driver);
});

Given("the user go to the login page", async function() {
  await logInPage(this.driver);
});

Given(
  "the user enter login name {string} and password {string}",
  async function(email, password) {
    await logInSuccessful(email, password, this.driver);
  }
);

Then("the user is logged in to his profile", async function() {
  await profilePage(this.driver);
});
