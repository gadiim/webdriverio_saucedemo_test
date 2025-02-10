const LoginPage = require("../pageobjects/loginpage");
const InventoryPage = require("../pageobjects/inventorypage");
const CartPage = require("../pageobjects/cartpage");
const CheckoutPage = require("../pageobjects/checkoutpage");
const data = require("../data/data");

describe("Checkout Functionality Tests", () => {
    beforeEach(async () => {
      await LoginPage.open();
      await LoginPage.login(data.tc_001.username, data.tc_001.password);
      await InventoryPage.isLoaded();
    });
// TC-008
    it("should redirect to checkout page when entering valid data to checkout form", async () => {
      let productName = "";
      let productPrice = "";
      productName = await InventoryPage.recordProductName();
      productPrice = await InventoryPage.recordProductPrice();
      await InventoryPage.clickBtnAddProductToCard();
      await InventoryPage.clickCartBadge();
      await InventoryPage.comparisonProductName(productName);
      await CartPage.clickBtnCheckout();
      await CheckoutPage.isCheckoutYourInformationLoaded();
      await CheckoutPage.fillCheckoutForm(
        data.tc_008.firstname,
        data.tc_008.lastname,
        data.tc_008.postalcode
      );
      await CheckoutPage.isCheckoutOverviewLoaded();
      await CheckoutPage.comparisonProductName(productName);
      await CheckoutPage.comparisonProductPrice(productPrice);
      expect(await CheckoutPage.clickBtnFinish()).toBe(data.thankyouMessage);
      await CheckoutPage.clickBtnBackHome();
      await InventoryPage.isInventoryPageLoaded();
  
    });
// TC-009
    xit("should display error message when click checkout button without products in cart", async () => {
      await InventoryPage.clickCartBadge();
      await CartPage.isCartPageLoaded();
      await CartPage.clickBtnCheckout();
      await CartPage.isContainMessage(data.errorMessage.emptyCart);
    });
  });
  