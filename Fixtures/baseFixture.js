const base = require('@playwright/test');
const HomePage = require('../Pages/HomePage');
const LoginPage = require('../Pages/LoginPage');
const ProductPage = require('../Pages/ProductPage');
const CartPage = require('../Pages/CartPage');
exports.test = base.test.extend({
    homepage:async({page},use)=>{
        await use(new HomePage(page));
    },

    loginpage:async({page},use)=>{
        await use(new LoginPage(page));
    },
    productpage:async({page},use)=>{
        await use(new ProductPage(page));
    },
    cartpage:async({page},use)=>{
        await use(new CartPage(page));
    }



})

exports.expect = base.expect;