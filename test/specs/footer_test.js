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
    await inventoryPage.isSocialMediaPageLoaded(
      inventoryPage.twitterIcon,
      data.socialMediaNames.twitter
    );
    await inventoryPage.backToInventoryPage();
    await inventoryPage.isSocialMediaPageLoaded(
      inventoryPage.facebookIcon,
      data.socialMediaNames.facebook
    );
    await inventoryPage.backToInventoryPage();
    await inventoryPage.isSocialMediaPageLoaded(
      inventoryPage.linkedinIcon,
      data.socialMediaNames.linkedin
    );
    await inventoryPage.backToInventoryPage();
  });
});
