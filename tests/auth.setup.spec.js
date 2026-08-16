import { test } from '@playwright/test';

test('authenticate', async ({ page }) => {

    await page.goto(
        process.env.BASE_URL
    );

    await page.getByRole(
        'link',
        { name: 'Signup / Login' }
    ).click();

    await page.locator(
        '[data-qa="login-email"]'
    ).fill(
        process.env.EMAIL
    );

    await page.locator(
        '[data-qa="login-password"]'
    ).fill(
        process.env.PASSWORD
    );

    await page.locator(
        '[data-qa="login-button"]'
    ).click();

    await page.context()
        .storageState({
            path: 'playwright/.auth/user.json'
        });

});