import{test,expect} from '@playwright/test';
import CartPage from '../Pages/CartPage';
const homePage = require('../Pages/HomePage');
const productPage = require('../Pages/ProductPage');
const cartPage = require('../Pages/CartPage');


test.beforeEach(async({page})=>{
    await page.goto('https://automationexercise.com/view_cart');
});

test('verifyviewcart',async({page})=>{
    const homepage = new homePage(page);
    const productpage = new productPage(page);
    const cartpage = new cartPage(page);


    await homepage.navigatetoproducts();
    await productpage.addProdtctToCart();
    await productpage.viewCart();
    await cartpage.verifyCartProducts();
    await cartpage.getProducts();

})

test.only('getproduct details',async({page})=>{
    await page.goto('https://automationexercise.com/view_cart');
    

    const homepage = new homePage(page);
    const productpage = new productPage(page);
    const cartpage = new cartPage(page);

    await homepage.navigatetoproducts();
    await productpage.addProdtctToCart();
    await productpage.viewCart();
    await cartpage.verifyCartProducts();
    await cartpage.getProducts();
    const productname = await cartpage.getProductName();
    const productprice = await cartpage.getProductPrice();
    const productquantity = await cartpage.getProductquantity();
    const totalprice = await cartpage.getTotalPrice();

    console.log(productname);
    console.log(productprice);
    console.log(productquantity);
    console.log(totalprice);

    expect(productquantity).toBe('1');
    expect(productname).toBe('Blue Top');
    expect(productprice).toContain('Rs.');



})