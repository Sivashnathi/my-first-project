const { expect } = require('@playwright/test');


class LoginPage{

    constructor(page){
        this.page=page;
        this.loginLink=page.getByRole('link',{name:'Signup / Login',});
        this.email = page.locator('input[data-qa="login-email"]');
        this.password = page.locator('input[data-qa="login-password"]');
        this.loginbutton=page.locator('button[data-qa="login-button"]');
        this.loginpageheader=page.getByText('Login to your account');

    }
    async navigationToLogin(){
        await this.loginLink.click();
    }
    async login(email,password){
        await  this.email.fill(email);
        await this.password.fill(password)
        await this.loginbutton.click()
    }
    async verifyLoginPageDisplayed(){
        await expect(this.loginpageheader).toBeVisible();
    }

}
module.exports = LoginPage;