const{expect} = require('@playwright/test')
class HomePage{
    constructor(page){
        this.page= page;
        
        this.homeLink = page.getByRole('link',{name:'Home'});
        this.productsLink = page.getByRole('link',{name:'Products'});
        this.cartLink = page.getByRole('link',{name:'Cart'});
        this.signuploginLink = page.getByRole('link',{name:'Signup / Login'});
        this.testcasesLink = page.getByRole('link',{name:'Test Cases',exact:true});
        this.apitestingLink = page.getByRole('link',{name:'API Testing'});
        this.videotutorialsLink =page.locator('a[href="https://www.youtube.com/c/AutomationExercise"]');
        this.contactusLink = page.getByRole('link',{name:'Contact us'});
        this.featureItemsHeader = page.getByText('Features Items');

    }
    async verifyHomepage(){
        await expect(this.page).toHaveURL('https://automationexercise.com/');
        await expect(this.page).toHaveTitle(/Automation Exercise/);

    }
    async navigatetoproducts(){
        // await this.productsLink.waitFor();
        await this.productsLink.click({force:true});
    }
    async navigatetocart(){
        await this.cartLink.click();
    }
    async navigatetosignuplogin(){
        await this.signuploginLink.click();
    }
    async navigatetotestcase(){
        await this.testcasesLink.click();
    }
    async navigatetoapitesting(){
        await this.apitestingLink.click();
    }
    async navigatetoVideotutorials(){
        await this.videotutorialsLink.click();
    }
    async navigatetocontactus(){
        await this.contactusLink.click();
    }

    async verifyheading(){
        await expect(this.featureItemsHeader).toBeVisible();
    }
}
module.exports=HomePage;