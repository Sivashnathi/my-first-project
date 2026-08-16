import{test,expect} from '@playwright/test';
import { time } from 'console';
const HomePage = require('../Pages/HomePage')
const productPage = require('../Pages/ProductPage');
const product = require('../data/Product.json');



for(const item of product){

test.beforeEach(async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/'
    );
});

test(`search product ${item.product}`,async({page})=>{
    const homepage = new HomePage(page);
    const productpage = new productPage(page);


    await homepage.navigatetoproducts();

    await productpage.verifyProductsPage();

    await productpage.searchProduct(item.product);

    await productpage.verifySearchresults();

    const results = await productpage.getResults({state:'visible',timeout:10000});

    console.log(results);
    await productpage.addProdtctToCart();
    
    
})

}