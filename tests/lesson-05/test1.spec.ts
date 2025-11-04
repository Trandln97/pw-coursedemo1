import { test, expect } from '@playwright/test';

test('Bài học 1: Register Page', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByText('Bài học 1: Register Page').click();

    await page.fill('input[name="firstName"]', 'Nguyen');
    await page.fill('input[name="lastName"]', 'Van A');
    await page.fill('input[name="email"]', 'nguyenvana@example.com');
    await page.fill('input[name="password"]', '12345678');
    await page.fill('input[name="confirmPassword"]', '12345678');

    await page.getByRole('button', { name: 'Register' }).click();

    await expect(page.locator('text=Registration successful')).toBeVisible({ timeout: 30000 });
});

