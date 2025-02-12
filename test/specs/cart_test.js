const loginPage = require("../pageobjects/loginpage");
const inventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Cart Functionality Test", () => {
    beforeEach(async () => {
      await loginPage.open();
      await loginPage.login(data.tc_001.username, data.tc_001.password);
      await inventoryPage.isLoaded();
    });
    // TC-005
    let productName = "";
    it("should save the cart after logout and restore it upon login", async () => {  
      productName = await inventoryPage.recordProductName();
      console.log(`Added product Name: ${productName}`);
      await inventoryPage.clickBtnAddProductToCard();
      await inventoryPage.clickBtnMenu();
      await inventoryPage.logout();
      await loginPage.isLoginPageLoaded();
      await loginPage.open();
      await loginPage.login(data.tc_001.username, data.tc_001.password);
      await inventoryPage.isLoaded();
      await inventoryPage.clickCartBadge();
      await inventoryPage.comparisonProductName(productName);
      await inventoryPage.clickBtnRemoveProductFromCard();
    });
  });