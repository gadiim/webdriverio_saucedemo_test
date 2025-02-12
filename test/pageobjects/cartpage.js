const cartPath = "https://www.saucedemo.com/cart.html";
const cartTitleSelector = '[data-test="title"]';
const cartContentsContainerSelector = "#cart_contents_container";
const cartProductNameSelector = ".inventory_item_name";
const btnRemoveProductSelector = '[data-test="remove-sauce-labs-backpack"]';
const btnCheckoutSelector = "#checkout";

class CartPage {
  get cartPath() {
    return cartPath;
  }

  get cartTitle() {
    return $(cartTitleSelector);
  }

  get cartContentsContainer() {
    return $(cartContentsContainerSelector);
  }

  get cartProductName() {
    return this.cartContentsContainer.$(cartProductNameSelector);
  }

  get btnRemoveProduct() {
    return $(btnRemoveProductSelector);
  }

  get btnCheckout() {
    return $(btnCheckoutSelector);
  }

  async isCartPageLoaded() {
    expect(browser).toHaveUrl(this.cartPath);
    await expect(this.cartTitle).toBeDisplayed();
    await expect(this.cartProductName).not.toBeDisplayed();
  }

  async clickBtnCheckout() {
    await this.btnCheckout.click();
  }

  async isContainMessage(message) {
    const pageText = await $("body").getText();
    expect(pageText).toContain(message);
  }
}
module.exports = new CartPage();
