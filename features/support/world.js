import { Builder } from "selenium-webdriver";
import { setWorldConstructor } from "cucumber";

class CustomWorld {
  constructor() {
    this.driver = new Builder().forBrowser("chrome").build();
  }
}

setWorldConstructor(CustomWorld);
