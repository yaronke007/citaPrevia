const { BeforeAll, AfterAll, setDefaultTimeout, After } = require("cucumber");
const { Builder, quit } = require("selenium-webdriver");
const { config } = require("../../config");
const { sleep } = require("../support/utils");

setDefaultTimeout(config.timeout);

BeforeAll(function() {
  driver = new Builder().forBrowser("chrome").build();
  sleep(config.sleepTimeToOpenWindow);
});

AfterAll(function() {
  driver.quit();
});
