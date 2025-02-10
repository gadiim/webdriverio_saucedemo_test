const LoginPage = require("../pageobjects/loginpage");
const InventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Logout Functionality Test", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login(data.tc_001.username, data.tc_001.password);
    await InventoryPage.isLoaded();
  });
// TC-004
  it("should open the menu, display sidebar with 4 items, and show a clear login page after logout", async () => {
    await InventoryPage.clickBtnMenu();
    await InventoryPage.logout();
    await LoginPage.isLoginPageLoaded();
  });
});