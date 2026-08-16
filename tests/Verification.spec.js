import { test } from '@playwright/test';

test('verify logged in user', async ({ page }) => {

    await page.goto(process.env.BASE_URL);

    console.log(await page.locator('body').textContent());

});