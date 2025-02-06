const data = require("../data/data");

class CheckoutPage {
  get checkoutYourInformationPath() {
    return "https://www.saucedemo.com/checkout-step-one.html";
  }

  get checkoutOverviewPath() {
    return "https://www.saucedemo.com/checkout-step-two.html";
  }

  get checkoutCompletePath() {
    return "https://www.saucedemo.com/checkout-complete.html";
  }

  get inputFirstName() {
    return $("#first-name");
  }

  get inputLastName() {
    return $('[data-test="lastName"]');
  }

  get inputPostalCode() {
    return $('[data-test="postalCode"]');
  }

  get btnContinue() {
    return $('[data-test="continue"]');
  }

  // Overview Product
  get overviewProductDescription() {
    return $(".cart_item_label");
  }

  get overviewProductName() {
    return this.overviewProductDescription.$(".inventory_item_name");
  }

  get overviewProductPrice() {
    return this.overviewProductDescription.$(".inventory_item_price");
  }

  get overviewTotalPrice() {
    return $(".summary_subtotal_label");
  }

  get btnFinish() {
    return $('[data-test="finish"]');
  }
  // Complete Page
  get completeHeader() {
    return $('[data-test="complete-header"]');
  }

  get btnBackHome() {
    return $('[data-test="back-to-products"]');
  }

  async isCheckoutYourInformationLoaded() {
    await expect(browser).toHaveUrl(this.checkoutYourInformationPath);
    // await expect(this.products).toBeDisplayed();
    // await expect(this.cart).toBeDisplayed();
  }

  async isCheckoutOverviewLoaded() {
    await expect(browser).toHaveUrl(this.checkoutOverviewPath);
  }

  async fillCheckoutForm(firstname, lastname, postalcode) {
    await this.inputFirstName.setValue(firstname);
    await this.inputLastName.setValue(lastname);
    await this.inputPostalCode.setValue(postalcode);
    await this.btnContinue.click();
  }

  async comparisonProductName(item) {
    const productName = await this.overviewProductName.getText();
    await expect(productName).toBe(item);
  }

  // async comparisonProductPrice(item) {
  //   const productPrice = await this.overviewProductPrice.getText();
  //   await expect(productPrice).toBe(item);
  // }

  async comparisonProductPrice(item) {
    const totalPrice = await this.overviewTotalPrice.getText();
    const price = totalPrice.match(/\d+(\.\d+)?/)[0];
    console.log("Total Price:", price);
    await expect(price).toBe(item);
  }

  async clickBtnFinish() {
    await this.btnFinish.click();
    await expect(browser).toHaveUrl(this.checkoutCompletePath);
    return await this.completeHeader.getText();
  }

  async clickBtnBackHome() {
    await this.btnBackHome.click();
  }
}
module.exports = new CheckoutPage();
