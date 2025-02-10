const LoginPage = require("../pageobjects/loginpage");
const InventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Login Functionality Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });
// TC-001
  it("should allow the user to log in and display inventory and cart", async () => {
    await LoginPage.login(data.tc_001.username, data.tc_001.password);
    await InventoryPage.isLoaded();
  });
// TC-002
  it("should display error message and highlight fields when password fails", async () => {
    await LoginPage.login(data.tc_002.username, data.tc_002.password);

    await expect(LoginPage.usernameErrorIcon).toBeDisplayed();
    expect(await LoginPage.getErrorIconColor(LoginPage.usernameErrorIcon)).toBe(
      data.colors.red
    );

    await expect(LoginPage.passwordErrorIcon).toBeDisplayed();
    expect(await LoginPage.getErrorIconColor(LoginPage.passwordErrorIcon)).toBe(
      data.colors.red
    );

    expect(await LoginPage.getErrorMessage()).toBe(data.errorMessage.errorFill);
  });
// TC-003
  it("should display error message and highlight fields when login fails", async () => {
    await LoginPage.login(data.tc_003.username, data.tc_003.password);

    await expect(LoginPage.usernameErrorIcon).toBeDisplayed();
    expect(await LoginPage.getErrorIconColor(LoginPage.usernameErrorIcon)).toBe(
      data.colors.red
    );

    await expect(LoginPage.passwordErrorIcon).toBeDisplayed();
    expect(await LoginPage.getErrorIconColor(LoginPage.passwordErrorIcon)).toBe(
      data.colors.red
    );

    expect(await LoginPage.getErrorMessage()).toBe(data.errorMessage.errorFill);
  });
});