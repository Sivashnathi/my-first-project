const{expect} = require('@playwright/test');
const { TIMEOUT } = require('node:dns');
class ProductPage{
    constructor(page){
        this.page=page;
        this.allProducts = page.getByText('All Products');
        this.searchTextBox = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.searchedProducts = page.getByText('Searched Products');
        this.productResults = page.locator('.productinfo p');
        this.addFirstProductToCart = page.getByText('Add to cart').first();
        this.viewcartLink = page.getByText('View Cart');
        this.Continueshoppingbutton = page.getByText('Continue Shopping');


    }

    async verifyProductsPage(){
        await expect(this.allProducts).toBeVisible();
    }
    async searchProduct(productName){
        await this.searchTextBox.fill(productName);
        await this.searchButton.click();
    }
    async verifySearchresults(){
        // await expect(this.searchedProducts).toBeVisible();
        await expect(this.productResults.first()).toBeVisible({timeout:10000});
    }
    async getResults(){
         return await this.productResults.allTextContents();

    }
    async addProdtctToCartPage(){
        await this.addFirstProductToCart.click();
    }
    async viewCart(){
        await this.viewcartLink.click();

    }
}
module.exports = ProductPage;