const LoginPage = require("../pageobjects/loginpage");
const InventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Sorting Functionality Tests", () => {
    beforeEach(async () => {
      await LoginPage.open();
      await LoginPage.login(data.tc_001.username, data.tc_001.password);
      await InventoryPage.isLoaded();
    });
// TC-006
    it("should sort products due choosed sorting", async () => {
      await InventoryPage.sortDropdown.click();
      await InventoryPage.priceLowToHighOption.click();
      await InventoryPage.priceHighToLowOption.click();
      await InventoryPage.nameAToZ.click();
      await InventoryPage.nameZToA.click();
    });
  });