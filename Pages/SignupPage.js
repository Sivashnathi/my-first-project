const{expect} = require('@playwright/test');

class SignupPage{
    constructor(page){
        this.page=page;
        this.name = page.locator('input[data-qa="signup-name"]');
        this.email = page.locator('input[data-qa="signup-email"]');
        this.signupbutton = page.locator('button[data-qa="signup-button"]');
        this.accountInformationHeader=page.getByText('Enter Account Information');
        this.Title = page.locator('#uniform-id_gender2');
        this.password=page.locator('#password');
        this.daydropdown=page.locator('#days');
        this.monthdropdown=page.locator('#months');
        this.yeardropdown=page.locator('#years')
        this.newsletterCheckbox = page.locator('#newsletter');
        this.offerscheckbox=page.locator('#optin')
        this.firstname = page.locator('#first_name');
        this.lastname=page.locator('#last_name');
        this.company = page.locator('#company');
        this.address1=page.locator('#address1');
        this.address2=page.locator('#address2');
        this.countrydropdown=page.locator('#country');
        this.state=page.locator('#state');
        this.city=page.locator('#city');
        this.zipcode=page.locator('#zipcode');
        this.mobilenum = page.locator('#mobile_number');
        this.createbutton = page.locator('button[data-qa="create-account"]');
        this.accountcreation = page.getByText('Account Created!');

    }
    async signup(name,email){
        await this.name.fill(name);
        await this.email.fill(email);
        await this.signupbutton.click();
    }
    async verifyAccountInformationPage(){
        await expect(this.accountInformationHeader).toBeVisible();
    }
    async fillaccountInformation(user){
        await this.Title.check();
        await this.password.fill('password@123');
        await this.daydropdown.selectOption('7');
        await this.monthdropdown.selectOption('7');
        await this.yeardropdown.selectOption('1999');
        await this.newsletterCheckbox.check();
        await this.firstname.fill(user.firstName);
        await this.lastname.fill(user.lastName);
        await this.company.fill(user.company);
        await this.address1.fill(user.address1);
        await this.address2.fill(user.address2);
        await this.countrydropdown.selectOption('India');
        await this.state.fill(user.state);
        await this.city.fill(user.city);
        await this.zipcode.fill(user.zipcode);
        await this.mobilenum.fill(user.mobile);
        
    }
    async accountcreate(){
        await this.createbutton.click();
    }
    async verifyaccountcreation(){
        await expect(this.accountcreation).toBeVisible();
    }


}
module.exports=SignupPage;