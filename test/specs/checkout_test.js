const loginPage = require("../pageobjects/loginpage");
const inventoryPage = require("../pageobjects/inventorypage");
const cartPage = require("../pageobjects/cartpage");
const checkoutPage = require("../pageobjects/checkoutpage");
const data = require("../data/data");

describe("Checkout Functionality Tests", () => {
    beforeEach(async () => {
      await loginPage.open();
      await loginPage.login(data.tc_001.username, data.tc_001.password);
      await inventoryPage.isLoaded();
    });
// TC-008
    it("should redirect to checkout page when entering valid data to checkout form", async () => {
      let productName = "";
      let productPrice = "";
      productName = await inventoryPage.recordProductName();
      productPrice = await inventoryPage.recordProductPrice();
      await inventoryPage.clickBtnAddProductToCard();
      await inventoryPage.clickCartBadge();
      await inventoryPage.comparisonProductName(productName);
      await cartPage.clickBtnCheckout();
      await checkoutPage.isCheckoutYourInformationLoaded();
      await checkoutPage.fillCheckoutForm(
        data.tc_008.firstname,
        data.tc_008.lastname,
        data.tc_008.postalcode
      );
      await checkoutPage.isCheckoutOverviewLoaded();
      await checkoutPage.comparisonProductName(productName);
      await checkoutPage.comparisonProductPrice(productPrice);
      expect(await checkoutPage.clickBtnFinish()).toBe(data.thankyouMessage);
      await checkoutPage.clickBtnBackHome();
      await inventoryPage.isinventoryPageLoaded();
  
    });
// TC-009
    xit("should display error message when click checkout button without products in cart", async () => {
      await inventoryPage.clickCartBadge();
      await cartPage.iscartPageLoaded();
      await cartPage.clickBtnCheckout();
      await cartPage.isContainMessage(data.errorMessage.emptyCart);
    });
  });
  