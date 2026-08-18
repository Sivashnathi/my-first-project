const{expect}=require('@playwright/test');

class CartPage{
    constructor(page){
        this.page = page;
        this.cartInfoTable = page.locator('#cart_info_table');
        this.CartProducts = page.locator('.cart_description a');
        this.productName=page.locator('.cart_description h4 a');
        this.productPrice = page.locator('.cart_price p');
        this.productQuantity=page.locator('.cart_quantity button');
        this.totalPrice = page.locator('.cart_total p');
    }
    async verifyCart(){
        await expect(this.CartProducts).toBeVisible();
    }
    async getProducts(){
        return await this.CartProducts.allTextContents();
    }
    async getProductName(){
        return await this.productName.first().textContent();
    }
    async getProductPrice(){
        return await this.productPrice.first().textContent();
    }
    async getProductquantity(){
        return this.productQuantity.first().textContent();
    }
    async getTotalPrice(){
        return this.totalPrice.first().textContent();
    }
}
module.exports=CartPage;