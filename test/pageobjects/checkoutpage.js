const checkoutYourInformationPath = "https://www.saucedemo.com/checkout-step-one.html";
const checkoutOverviewPath = "https://www.saucedemo.com/checkout-step-two.html";
const checkoutCompletePath = "https://www.saucedemo.com/checkout-complete.html";
const inputFirstNameSelector = '[data-test="firstName"]';
const inputLastNameSelector = '[data-test="lastName"]';
const inputPostalCodeSelector = '[data-test="postalCode"]';
const btnContinueSelector = '[data-test="continue"]';
const overviewProductDescriptionSelector = '.cart_item_label';
const overviewProductNameSelector = '.inventory_item_name';
const overviewProductPriceSelector = '.inventory_item_price';
const overviewTotalPriceSelector = '.summary_subtotal_label';
const btnFinishSelector = '[data-test="finish"]';
const completeHeaderSelector = '[data-test="complete-header"]';
const btnBackHomeSelector = '[data-test="back-to-products"]';

class CheckoutPage {
  get checkoutYourInformationPath() {
    return checkoutYourInformationPath;
  }

  get checkoutOverviewPath() {
    return checkoutOverviewPath;
  }

  get checkoutCompletePath() {
    return checkoutCompletePath;
  }

  get inputFirstName() {
    return $(inputFirstNameSelector);
  }

  get inputLastName() {
    return $(inputLastNameSelector);
  }

  get inputPostalCode() {
    return $(inputPostalCodeSelector);
  }

  get btnContinue() {
    return $(btnContinueSelector);
  }

  // Overview Product
  get overviewProductDescription() {
    return $(overviewProductDescriptionSelector);
  }

  get overviewProductName() {
    return this.overviewProductDescription.$(overviewProductNameSelector);
  }

  get overviewProductPrice() {
    return this.overviewProductDescription.$(overviewProductPriceSelector);
  }

  get overviewTotalPrice() {
    return $(overviewTotalPriceSelector);
  }

  get btnFinish() {
    return $(btnFinishSelector);
  }

  // Complete Page
  get completeHeader() {
    return $(completeHeaderSelector);
  }

  get btnBackHome() {
    return $(btnBackHomeSelector);
  }

  async isCheckoutYourInformationLoaded() {
    await expect(browser).toHaveUrl(this.checkoutYourInformationPath);
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