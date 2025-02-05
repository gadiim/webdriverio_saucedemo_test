const { expect } = require("@wdio/globals");
const LoginPage = require("../pageobjects/loginpage");
const InventoryPage = require("../pageobjects/inventorypage");
import data from "../data/data";

describe("Login Functionality Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
  });
  // TC-001
  xit("should allow the user to log in and display inventory and cart", async () => {
    await LoginPage.login(data.tc_001.username, data.tc_001.password);
    await browser.pause(500);
    await InventoryPage.isLoaded();
  });
  // TC-002
  xit("should display error message and highlight fields when password fails", async () => {
    await LoginPage.login(data.tc_002.username, data.tc_002.password);
    await browser.pause(500);

    await expect(LoginPage.usernameErrorIcon).toBeDisplayed();
    expect(await LoginPage.getErrorIconColor(LoginPage.usernameErrorIcon)).toBe(
      data.colors.red
    );

    await expect(LoginPage.passwordErrorIcon).toBeDisplayed();
    expect(await LoginPage.getErrorIconColor(LoginPage.passwordErrorIcon)).toBe(
      data.colors.red
    );

    expect(await LoginPage.getErrorMessage()).toBe(data.errorMessage);
  });
  // TC-003
  xit("should display error message and highlight fields when login fails", async () => {
    await LoginPage.login(data.tc_003.username, data.tc_003.password);
    await browser.pause(500);

    await expect(LoginPage.usernameErrorIcon).toBeDisplayed();
    expect(await LoginPage.getErrorIconColor(LoginPage.usernameErrorIcon)).toBe(
      data.colors.red
    );

    await expect(LoginPage.passwordErrorIcon).toBeDisplayed();
    expect(await LoginPage.getErrorIconColor(LoginPage.passwordErrorIcon)).toBe(
      data.colors.red
    );

    expect(await LoginPage.getErrorMessage()).toBe(data.errorMessage);
  });
});

describe("Logout Functionality Test", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login(data.tc_001.username, data.tc_001.password);
    await InventoryPage.isLoaded();
  });
  // TC-004
  xit("should open the menu, display sidebar with 4 items, and show a clear login page after logout", async () => {
    await InventoryPage.clickBtnMenu();
    await browser.pause(500);
    await InventoryPage.logout();
    await LoginPage.isLoginPageLoaded();
  });
});

describe("Cart Functionality Test", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login(data.tc_001.username, data.tc_001.password);
    await InventoryPage.isLoaded();
  });
  // TC-005
  xit("should save the cart after logout and restore it upon login", async () => {
    let productName = "";
    productName = await InventoryPage.recordProductName();
    console.log(`Added product: ${productName}`);
    await InventoryPage.clickBtnAddToCard();
    await InventoryPage.clickBtnMenu();
    await InventoryPage.logout();
    await LoginPage.isLoginPageLoaded();
    await LoginPage.open();
    await LoginPage.login(data.tc_001.username, data.tc_001.password);
    await InventoryPage.isLoaded();
    await InventoryPage.clickCartBadge();
    await InventoryPage.comparisonProductName(productName);
  });
});

describe("Sorting Functionality Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login(data.tc_001.username, data.tc_001.password);
    await InventoryPage.isLoaded();
  });
  // TC-006
  xit("should sort products due choosed sorting", async () => {
    await InventoryPage.sortDropdown.click();
    await InventoryPage.priceLowToHighOption.click();
    await browser.pause(2000);
    await InventoryPage.priceHighToLowOption.click();
    await browser.pause(2000);
    await InventoryPage.nameAToZ.click();
    await browser.pause(2000);
    await InventoryPage.nameZToA.click();
    await browser.pause(2000);
  });
});

describe("Footerlinks Functionality Tests", () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login(data.tc_001.username, data.tc_001.password);
    await InventoryPage.isLoaded();
  });
  // TC-007
  it("should open the company's social media pages in new tabs when the footer icons are clicked", async () => {
    await InventoryPage.clickSocialMediaIcon(InventoryPage.twitterIcon);
    await browser.switchWindow(data.socialMediaNames.twitter);
    expect(await browser.getUrl()).toContain(data.socialMediaNames.twitter);

    await browser.closeWindow();
    await browser.switchWindow(InventoryPage.inventoryPath);

    await InventoryPage.clickSocialMediaIcon(InventoryPage.facebookIcon);
    await browser.switchWindow(data.socialMediaNames.facebook);
    expect(await browser.getUrl()).toContain(data.socialMediaNames.facebook);

    await browser.closeWindow();
    await browser.switchWindow(InventoryPage.inventoryPath);

    await InventoryPage.clickSocialMediaIcon(InventoryPage.linkedinIcon);
    await browser.switchWindow(data.socialMediaNames.linkedin);
    expect(await browser.getUrl()).toContain(data.socialMediaNames.linkedin);
  });
});
