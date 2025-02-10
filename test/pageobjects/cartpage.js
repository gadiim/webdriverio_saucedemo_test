class cartPage {
  get cartPath() {
    return "https://www.saucedemo.com/cart.html";
  }

  get cartTitle() {
    return $(`[data-test="title"]`);
  }

  get cartContentsContainer() {
    return $("#cart_contents_container");
  }

  get cartProductName() {
    return this.cartContentsContainer.$(".inventory_item_name");
  }

  get btnRemoveProduct() {
    return $(`[data-test="remove-sauce-labs-backpack"]`);
  }

  get btnCheckout() {
    return $("#checkout");
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
module.exports = new cartPage();
