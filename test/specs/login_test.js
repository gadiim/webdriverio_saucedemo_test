const loginPage = require("../pageobjects/loginpage");
const inventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Login Functionality Tests", () => {
  beforeEach(async () => {
    await loginPage.open();
  });
// TC-001
  it("should allow the user to log in and display inventory and cart", async () => {
    await loginPage.login(data.tc_001.username, data.tc_001.password);
    await inventoryPage.isLoaded();
  });
// TC-002
  it("should display error message and highlight fields when password fails", async () => {
    await loginPage.login(data.tc_002.username, data.tc_002.password);

    await expect(loginPage.usernameErrorIcon).toBeDisplayed();
    expect(await loginPage.getErrorIconColor(loginPage.usernameErrorIcon)).toBe(
      data.colors.red
    );

    await expect(loginPage.passwordErrorIcon).toBeDisplayed();
    expect(await loginPage.getErrorIconColor(loginPage.passwordErrorIcon)).toBe(
      data.colors.red
    );

    expect(await loginPage.getErrorMessage()).toBe(data.errorMessage.errorFill);
  });
// TC-003
  it("should display error message and highlight fields when login fails", async () => {
    await loginPage.login(data.tc_003.username, data.tc_003.password);

    await expect(loginPage.usernameErrorIcon).toBeDisplayed();
    expect(await loginPage.getErrorIconColor(loginPage.usernameErrorIcon)).toBe(
      data.colors.red
    );

    await expect(loginPage.passwordErrorIcon).toBeDisplayed();
    expect(await loginPage.getErrorIconColor(loginPage.passwordErrorIcon)).toBe(
      data.colors.red
    );

    expect(await loginPage.getErrorMessage()).toBe(data.errorMessage.errorFill);
  });
});