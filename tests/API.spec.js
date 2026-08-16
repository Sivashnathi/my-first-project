import { test, expect } from '@playwright/test';

test('get product list', async ({ request }) => {

    const response = await request.get(
        'https://automationexercise.com/api/productsList'
    );

    console.log(response.status());

    expect(response.status()).toBe(200);

    const body = await response.text();

    console.log(body);

});

