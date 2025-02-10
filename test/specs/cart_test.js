const LoginPage = require("../pageobjects/loginpage");
const InventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Cart Functionality Test", () => {
    beforeEach(async () => {
      await LoginPage.open();
      await LoginPage.login(data.tc_001.username, data.tc_001.password);
      await InventoryPage.isLoaded();
    });
    // TC-005
    let productName = "";
    it("should save the cart after logout and restore it upon login", async () => {  
      productName = await InventoryPage.recordProductName();
      console.log(`Added product Name: ${productName}`);
      await InventoryPage.clickBtnAddProductToCard();
      await InventoryPage.clickBtnMenu();
      await InventoryPage.logout();
      await LoginPage.isLoginPageLoaded();
      await LoginPage.open();
      await LoginPage.login(data.tc_001.username, data.tc_001.password);
      await InventoryPage.isLoaded();
      await InventoryPage.clickCartBadge();
      await InventoryPage.comparisonProductName(productName);
      await InventoryPage.clickBtnRemoveProductFromCard();
    });
  });