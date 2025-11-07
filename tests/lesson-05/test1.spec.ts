import { test, expect } from '@playwright/test';

test('ex1.test', async ({ page }) => {
    // Step 1: Truy cập trang chính
    await page.goto('https://material.playwrightvn.com/');
    // Step 2: Click vào “Bài học 1: Register Page”
    await page.getByText('Bài học 1: Register Page').click();
    // Step 3: Nhập đầy đủ các thông tin
    //await page.locator('//input[@id="username"]').fill('MeoMeo');
    await page.locator('//input[@id="username"]').pressSequentially('MeoMeo', {
        delay: 100
    });
    await page.locator('//input[@id="email"]').fill('testuser@example.com');

    await page.locator('//input[@id="male"]').check();

    await page.locator("//input[@id='cooking']").check();

    await page.locator("//select[@id='interests']").selectOption({ value: 'music' });

    await page.locator("//select[@id='country']").selectOption({ value: 'canada' });

    await page.locator("//input[@id='dob']").fill('2022-08-11');

    await page.locator("//input[@id='profile']").setInputFiles('tests/lesson-05/Moki.png');

    await page.locator("//textarea[@id='bio']").pressSequentially('Love Cat', {
        delay: 300
    });

    await page.locator("//input[@id='rating']").fill('8');

    await page.locator("//input[@id='favcolor']").fill('#ff69b4');

    await page.locator("//div[@class='tooltip']").hover();
    await page.locator("//input[@id='newsletter']").check();

    await page.locator("//span[@class='slider round']").check();

    await page.locator("//span[@id='starRatingValue']").evaluate(el => el.textContent = '4');
    await page.locator("//div[@id='starRating']").evaluate(el => {
        el.setAttribute('data-rating', '4');
        el.style.setProperty('--rating-width', '80%');
    });

    await page.locator("//input[@id='customDate']").evaluate(el => el.removeAttribute('readonly'));
    await page.locator("//input[@id='customDate']").fill('2025-11-20');

    // Click button Register
    await page.locator("//button[text()='Register']").click();
});

