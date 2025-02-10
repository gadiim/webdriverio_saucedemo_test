class InventoryPage {
  
  get inventoryPath() {
    return "https://www.saucedemo.com/inventory.html";
  }

  get products() {
    return $("#inventory_container");
  }

  get cart() {
    return $(".shopping_cart_link");
  }

  get btnMenu() {
    return $('button[type="button"][id="react-burger-menu-btn"]');
  }

  get sidebarMenu() {
    return $('[class="bm-menu-wrap"]');
  }

  get menuItems() {
    return $$('[class="bm-item menu-item"]');
  }

  get logoutLink() {
    return $('[id="logout_sidebar_link"]');
  }

  // Inventory Product
  get inventoryProductDescription() {
    return $(".inventory_item_description");
  }

  get inventoryProductName() {
    return this.inventoryProductDescription.$(".inventory_item_name");
  }

  get inventoryProductPrice() {
    return this.inventoryProductDescription.$(".inventory_item_price");
  }

  get btnAddToCard() {
    return this.inventoryProductDescription.$(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
  }

  // Cart Product
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
  //

  get cartBadge() {
    return $(".shopping_cart_badge");
  }
  // Sorting
  get sortDropdown() {
    return $(".product_sort_container");
  }

  get priceLowToHighOption() {
    return $('option[value="lohi"]');
  }

  get priceHighToLowOption() {
    return $('option[value="hilo"]');
  }

  get nameAToZ() {
    return $('option[value="az"]');
  }

  get nameZToA() {
    return $('option[value="za"]');
  }
  // Social Media Icons
  get twitterIcon() {
    return $('a[href="https://twitter.com/saucelabs"]');
  }

  get facebookIcon() {
    return $('a[href="https://www.facebook.com/saucelabs"]');
  }

  get linkedinIcon() {
    return $('a[href="https://www.linkedin.com/company/sauce-labs/"]');
  }

  async isLoaded() {
    await expect(browser).toHaveUrl(this.inventoryPath);
    await expect(this.products).toBeDisplayed();
    await expect(this.cart).toBeDisplayed();
  }

  async isLoaded() {
    await expect(browser).toHaveUrl(this.inventoryPath);
    await expect(this.products).toBeDisplayed();
    await expect(this.cart).toBeDisplayed();
  }

  async isInventoryPageLoaded() {
    await this.isLoaded();
    const cartText = await this.cart.getText();
    await expect(cartText).toBe("");
  }

  async clickBtnMenu() {
    await this.btnMenu.click();
    await this.sidebarMenu.waitForDisplayed();
    await expect(this.menuItems).toBeElementsArrayOfSize(4);
  }

  async logout() {
    await this.logoutLink.click();
  }

  async clickCartBadge() {
    await this.cart.click();
    expect(this.cartTitle).toBeDisplayed();
  }

  async recordProductName() {
    const productName = await this.inventoryProductName.getText();
    console.log("Recorded Product Name:", productName);
    return productName;
  }

  async recordProductPrice() {
    // const productPrice = await this.inventoryProductPrice.getText();
    // console.log("Record Product Price:", productPrice);
    // return productPrice;
    const productPrice = await this.inventoryProductPrice.getText();
    const price = productPrice.match(/\d+(\.\d+)?/)[0];
    console.log("Record Product Price:", price);
    return price;
  }

  async comparisonProductName(item) {
    const productName = await this.cartProductName.getText();
    await expect(productName).toBe(item);
    console.log(`Cart product: ${productName}`);
  }

  async clickBtnAddProductToCard() {
    await this.btnAddToCard.click();
    await this.cartBadge.waitForDisplayed();
    const badgeText = await this.cartBadge.getText();
    await expect(badgeText).toBe("1");
  }

  async clickBtnRemoveProductFromCard() {
    await this.btnRemoveProduct.click();
  }

  async clickSocialMediaIcon(socialMediaIcon) {
    await socialMediaIcon.click();
  }
}

module.exports = new InventoryPage();
