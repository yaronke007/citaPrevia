import { Before, AfterAll, setDefaultTimeout, After } from "cucumber";
import { config } from "../../config";
import "chromedriver";
import { driver } from "./world";
import { sleep } from "../support/utils";

setDefaultTimeout(config.timeout);

Before(async function() {
  await this.driver
    .manage()
    .window()
    .maximize();
});

// After(function() {
//   this.driver.quit();
// });
