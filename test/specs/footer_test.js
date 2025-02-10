const LoginPage = require("../pageobjects/loginpage");
const InventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Footerlinks Functionality Test", () => {
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