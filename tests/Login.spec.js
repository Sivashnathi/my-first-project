// import{test,expect} from '@playwright/test';

const LoginPage = require('../Pages/LoginPage');
const users = require('../data/User.json');

const {test,expect}=require('../Fixtures/baseFixture');
for(const user of users){

test(`verify Invalid login for ${user.email}`,async({page})=> {
    console.log(`executing test for:${user.email}`  )

    //Open Automation Exercise
   await page.goto('https://automationexercise.com/',{waitUntil:'domcontentloaded'});

   //create loginpage object
   const loginpage = new LoginPage(page);

   //navigate to login
   await loginpage.navigationToLogin();
   await expect(page).toHaveURL(/login/);
   

   //verifyloginpage displayed
   await loginpage.verifyLoginPageDisplayed();

   //Invalidlogin
    await loginpage.login(user.email,user.password);



   
    // Verify Error Message
   
    await expect(page.getByText( 'Your email or password is incorrect in the page!')).toBeVisible();



})
}

test.only('loginpage',async({page,loginpage})=>{
    
    await page.goto('https://automationexercise.com/');

    
    await loginpage.navigationToLogin();
    await loginpage.verifyLoginPageDisplayed();
})