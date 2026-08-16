
import{test,expect} from '@playwright/test';
const{generateEmail}=require('../Utils/helpers');
const userData = require('../data/Userdata');
const SignupPage = require('../Pages/SignupPage');

test.beforeEach(async({page})=>{
    await page.goto('https://automationexercise.com');

});

test.afterEach(async({page})=>{
    console.log('signuptest completed');
})

test('verify the signupPage',async({page})=>{

    await page.goto('https://automationexercise.com/login');

    
    const signUp = new SignupPage(page);
    
    const email = generateEmail();

    //fill the name and details
    await signUp.signup('sivashanthi',email);
    console.log(email)

    //verify the text
    await signUp.verifyAccountInformationPage();
    
    //create account
    await signUp.fillaccountInformation(userData);

    //verify account
    await signUp.accountcreate();

    await signUp.verifyaccountcreation();
})