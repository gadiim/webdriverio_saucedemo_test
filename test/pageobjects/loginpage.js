const { $ } = require('@wdio/globals')

class LoginPage {

    get loginPath() {
        return 'https://www.saucedemo.com/';
    };

    get inputUsername () {
        return $('#user-name');
    };

    get inputPassword () {
        return $('#password');
    };

    get btnSubmit () {
        return $('#login-button');
    };

    get usernameErrorIcon() {
        return $$( 'svg.svg-inline--fa.fa-times-circle.fa-w-16.error_icon' )[0];
    };

    get passwordErrorIcon() {
        return $$( 'svg.svg-inline--fa.fa-times-circle.fa-w-16.error_icon' )[1];
    };

    get errorMessage() {
        return $('h3[data-test="error"]');
    };

    async open () {
        return browser.url(this.loginPath);
    };

    async isLoginPageLoaded() {
        await expect(browser).toHaveUrl(this.loginPath);
        await expect(this.inputUsername).toBeDisplayed();
        await expect(await this.inputUsername.getValue()).toBe('');
        await expect(this.inputPassword).toBeDisplayed();
        await expect(await this.inputPassword.getValue()).toBe('');
        await expect(this.btnSubmit).toBeDisplayed();
    };
    
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        if (await this.inputPassword.getAttribute('type') !== 'password') {
            throw new Error('Data is not represented as dots!');
        }
        else {
            console.log('Data is represented as dots!')
        }
        await this.btnSubmit.click();
    };

    async getErrorIconColor(icon) {
        const pathElement = await icon.$('path');
        const fillProperty = await pathElement.getCSSProperty('fill');
        return fillProperty.value;
    };

    async getErrorMessage() {   
        return await this.errorMessage.getText();

    };

};

module.exports = new LoginPage();
