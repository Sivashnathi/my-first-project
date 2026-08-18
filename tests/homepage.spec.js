
const {test,expect} = require('../Fixtures/baseFixture');

//Day1
//goto the website and check the title

// test('Verify the automation homepage',async({page})=>{
//     await page.goto('https://automationexercise.com/');

//     const homepage = new HomePage(page);

//     await homepage.verifyHomepage();


// });

test('homepage in application',async({page,homepage})=>{
    await page.goto('https://automationexercise.com/');
    await homepage.verifyHomepage();
})
