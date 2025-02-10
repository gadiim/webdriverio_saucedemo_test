const loginPath = "https://www.saucedemo.com/";
const inputUsernameSelector = '[data-test="username"]';
const inputPasswordSelector = '[data-test="password"]';
const btnSubmitSelector = '[data-test="login-button"]';
const usernameErrorIconSelector =
  inputUsernameSelector +
  " + svg.svg-inline--fa.fa-times-circle.fa-w-16.error_icon";
const passwordErrorIconSelector =
  inputPasswordSelector +
  " + svg.svg-inline--fa.fa-times-circle.fa-w-16.error_icon";
const errorMessageSelector = 'h3[data-test="error"]';

class LoginPage {
  get loginPath() {
    return loginPath;
  }

  get inputUsername() {
    return $(inputUsernameSelector);
  }

  get inputPassword() {
    return $(inputPasswordSelector);
  }

  get btnSubmit() {
    return $(btnSubmitSelector);
  }

  get usernameErrorIcon() {
    return $(usernameErrorIconSelector);
  }

  get passwordErrorIcon() {
    return $(passwordErrorIconSelector);
  }

  get errorMessage() {
    return $(errorMessageSelector);
  }

  async open() {
    return browser.url(this.loginPath);
  }

  async isLoginPageLoaded() {
    await expect(browser).toHaveUrl(this.loginPath);
    await expect(this.inputUsername).toBeDisplayed();
    await expect(await this.inputUsername.getValue()).toBe("");
    await expect(this.inputPassword).toBeDisplayed();
    await expect(await this.inputPassword.getValue()).toBe("");
    await expect(this.btnSubmit).toBeDisplayed();
  }

  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    if ((await this.inputPassword.getAttribute("type")) !== "password") {
      throw new Error("Data is not represented as dots!");
    } else {
      console.log("Data is represented as dots!");
    }
    await this.btnSubmit.click();
  }

  async getErrorIconColor(icon) {
    const pathElement = await icon.$("path");
    const fillProperty = await pathElement.getCSSProperty("fill");
    return fillProperty.value;
  }

  async getErrorMessage() {
    return await this.errorMessage.getText();
  }
}

module.exports = new LoginPage();
