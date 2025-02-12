const loginPage = require("../pageobjects/loginpage");
const inventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Logout Functionality Test", () => {
  beforeEach(async () => {
    await loginPage.open();
    await loginPage.login(data.tc_001.username, data.tc_001.password);
    await inventoryPage.isLoaded();
  });
// TC-004
  it("should open the menu, display sidebar with 4 items, and show a clear login page after logout", async () => {
    await inventoryPage.clickBtnMenu();
    await inventoryPage.logout();
    await loginPage.isLoginPageLoaded();
  });
});