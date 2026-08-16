import { test } from '@playwright/test';

test('print env values', async () => {

    console.log(process.env.BASE_URL);

    console.log(process.env.EMAIL);

});