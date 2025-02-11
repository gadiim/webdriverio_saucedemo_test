const inventoryPath = "https://www.saucedemo.com/inventory.html";
const productsSelector = "#inventory_container";
const cartSelector = ".shopping_cart_link";
const btnMenuSelector = "button[type='button'][id='react-burger-menu-btn']";
const sidebarMenuSelector = ".bm-menu-wrap";
const menuItemsSelector = ".bm-item.menu-item";
const logoutLinkSelector = '[id="logout_sidebar_link"]';
const inventoryProductDescriptionSelector = ".inventory_item_description";
const inventoryProductNameSelector = ".inventory_item_name";
const inventoryProductPriceSelector = ".inventory_item_price";
const btnAddToCardSelector = '[data-test="add-to-cart-sauce-labs-backpack"]';
const cartTitleSelector = '[data-test="title"]';
const cartContentsContainerSelector = "#cart_contents_container";
const cartProductNameSelector = ".inventory_item_name";
const btnRemoveProductSelector = '[data-test="remove-sauce-labs-backpack"]';
const btnCheckoutSelector = "#checkout";
const cartBadgeSelector = ".shopping_cart_badge";
const sortDropdownSelector = ".product_sort_container";
const priceLowToHighOptionSelector = 'option[value="lohi"]';
const priceHighToLowOptionSelector = 'option[value="hilo"]';
const nameAToZSelector = 'option[value="az"]';
const nameZToASelector = 'option[value="za"]';
const twitterIconSelector = 'a[href="https://twitter.com/saucelabs"]';
const facebookIconSelector = 'a[href="https://www.facebook.com/saucelabs"]';
const linkedinIconSelector = 'a[href="https://www.linkedin.com/company/sauce-labs/"]';

class InventoryPage {
  
  get inventoryPath() {
    return inventoryPath;
  }

  get products() {
    return $(productsSelector);
  }

  get cart() {
    return $(cartSelector);
  }

  get btnMenu() {
    return $(btnMenuSelector);
  }

  get sidebarMenu() {
    return $(sidebarMenuSelector);
  }

  get menuItems() {
    return $$(menuItemsSelector);
  }

  get logoutLink() {
    return $(logoutLinkSelector);
  }

  // Inventory Product
  get inventoryProductDescription() {
    return $(inventoryProductDescriptionSelector);
  }

  get inventoryProductName() {
    return this.inventoryProductDescription.$(inventoryProductNameSelector);
  }

  get inventoryProductPrice() {
    return this.inventoryProductDescription.$(inventoryProductPriceSelector);
  }

  get btnAddToCard() {
    return this.inventoryProductDescription.$(btnAddToCardSelector);
  }

  // Cart Product
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

  get cartBadge() {
    return $(cartBadgeSelector);
  }
  // Sorting
  get sortDropdown() {
    return $(sortDropdownSelector);
  }

  get priceLowToHighOption() {
    return $(priceLowToHighOptionSelector);
  }

  get priceHighToLowOption() {
    return $(priceHighToLowOptionSelector);
  }

  get nameAToZ() {
    return $(nameAToZSelector);
  }

  get nameZToA() {
    return $(nameZToASelector);
  }

  // Social Media Icons
  get twitterIcon() {
    return $(twitterIconSelector);
  }

  get facebookIcon() {
    return $(facebookIconSelector);
  }

  get linkedinIcon() {
    return $(linkedinIconSelector);
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

  async backToInventoryPage() {
    await browser.closeWindow();
    await browser.switchWindow(this.inventoryPath);
  }

  async isSocialMediaPageLoaded(socialMediaIcon, socialMediaName) {
    await this.clickSocialMediaIcon(socialMediaIcon);
    await browser.switchWindow(socialMediaName);
    expect(await browser.getUrl()).toContain(socialMediaName);
  }
}

module.exports = new InventoryPage();
