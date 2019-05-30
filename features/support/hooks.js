const { BeforeAll, AfterAll, setDefaultTimeout, After } = require("cucumber");
const { Builder, quit } = require("selenium-webdriver");
const { config } = require("../../config");
const { sleep } = require("../support/utils");

setDefaultTimeout(config.timeout);

BeforeAll(function() {
  driver = new Builder().forBrowser("chrome").build();
  sleep(config.sleepTimeToOpenWindow);
});

// After(function(scenario) {
//   if (scenario.result.status === Status.FAILED) {
//     let world = this;
//     return WebDriver.takeScreenshot().then(function(screenShot, error) {
//       if (!error) {
//         world.attach(screenShot, "image/png");
//       }
//     });
//   }
// });

AfterAll(function() {
  driver.quit();
});
