const loginPage = require("../pageobjects/loginpage");
const inventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Sorting Functionality Tests", () => {
    beforeEach(async () => {
      await loginPage.open();
      await loginPage.login(data.tc_001.username, data.tc_001.password);
      await inventoryPage.isLoaded();
    });
// TC-006
    it("should sort products due choosed sorting", async () => {
      await inventoryPage.sortDropdown.click();
      await inventoryPage.priceLowToHighOption.click();
      await inventoryPage.priceHighToLowOption.click();
      await inventoryPage.nameAToZ.click();
      await inventoryPage.nameZToA.click();
    });
  });