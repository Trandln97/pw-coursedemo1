// test2.spec.ts
import { test, expect } from '@playwright/test';

test('ex2.test', async ({ page }) => {
    // Step 1: Truy cập trang chính
    await page.goto('https://material.playwrightvn.com/');
    // Step 2: Click vào “Bài học 2: Product page”
    await page.getByText('Bài học 2: Product page').click();

    // Product 1: 2 sp
    await page.click('button.add-to-cart[data-product-id="1"]');
    await page.click('button.add-to-cart[data-product-id="1"]');

    // Product 2: 3 sp
    await page.click('button.add-to-cart[data-product-id="2"]');
    await page.click('button.add-to-cart[data-product-id="2"]');
    await page.click('button.add-to-cart[data-product-id="2"]');

    // Product 3: 1 sp
    await page.click('button.add-to-cart[data-product-id="3"]');

});