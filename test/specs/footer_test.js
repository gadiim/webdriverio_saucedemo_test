const loginPage = require("../pageobjects/loginpage");
const inventoryPage = require("../pageobjects/inventorypage");
const data = require("../data/data");

describe("Footerlinks Functionality Test", () => {
    beforeEach(async () => {
      await loginPage.open();
      await loginPage.login(data.tc_001.username, data.tc_001.password);
      await inventoryPage.isLoaded();
    });
// TC-007
    it("should open the company's social media pages in new tabs when the footer icons are clicked", async () => {
      await inventoryPage.clickSocialMediaIcon(inventoryPage.twitterIcon);
      await browser.switchWindow(data.socialMediaNames.twitter);
      expect(await browser.getUrl()).toContain(data.socialMediaNames.twitter);
  
      await browser.closeWindow();
      await browser.switchWindow(inventoryPage.inventoryPath);
  
      await inventoryPage.clickSocialMediaIcon(inventoryPage.facebookIcon);
      await browser.switchWindow(data.socialMediaNames.facebook);
      expect(await browser.getUrl()).toContain(data.socialMediaNames.facebook);
  
      await browser.closeWindow();
      await browser.switchWindow(inventoryPage.inventoryPath);
  
      await inventoryPage.clickSocialMediaIcon(inventoryPage.linkedinIcon);
      await browser.switchWindow(data.socialMediaNames.linkedin);
      expect(await browser.getUrl()).toContain(data.socialMediaNames.linkedin);
    });
  });