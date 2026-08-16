import { test, expect } from '@playwright/test';

const HomePage = require('../pages/HomePage');

test.beforeEach(async ({ page }) => {

    await page.goto(
        'https://automationexercise.com/'
    );

});

test('verify homepage navigation', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.verifyHomepage();

});

test('navigate to products page', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigatetoproducts();

    await expect(page)
        .toHaveURL(
            'https://automationexercise.com/products'
        );

});

test('navigate to cart page', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigatetocart();

    await expect(page)
        .toHaveURL(
            'https://automationexercise.com/view_cart'
        );

});

test('navigate to signup login page', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigatetosignuplogin();

    await expect(page)
        .toHaveURL(
            'https://automationexercise.com/login'
        );

});

test('navigate to test cases page', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigatetotestcase();

    await expect(page)
        .toHaveURL(
            'https://automationexercise.com/test_cases'
        );

});

test('navigate to api testing page', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigatetoapitesting();

    await expect(page)
        .toHaveURL(/api_list/);

});

test('navigate to contact us page', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.navigatetocontactus();

    await expect(page)
        .toHaveURL(/contact_us/);

});

test.skip('verify video tutorials link', async ({ page }) => {

    const homePage = new HomePage(page);
    await homePage.navigatetoVideotutorials();

    await expect(
        homePage.videotutorialsLink).toHaveAttribute(
        'href',
        'https://www.youtube.com/c/AutomationExercise'
    );
    console.log(homePage.videoTutorialsLink);

});
