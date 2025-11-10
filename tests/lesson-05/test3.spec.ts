// test3.spec.ts
import { test, expect } from '@playwright/test';

test('Ex3.test', async ({ page }) => {
  // Truy cập trang
  await page.goto('https://material.playwrightvn.com/');
  await page.getByText('Bài học 3: Todo page').click();

  // Tạo 100 task
  const inputNewTask  = page.locator('//input[@id="new-task"]');
  const addBtn = page.locator('//button[normalize-space()="Add Task"]');

  for (let i = 1; i <= 100; i++) {
    await inputNewTask.fill(`Todo ${i}`);
    await addBtn.click();
  }

  const todos = page.locator('li, .todo-item');
  await expect(todos).toHaveCount(100);

  // Confirm dialog
  page.on('dialog', async d => {
    await d.accept();
  });

  // Xoá task lẻ
  const deleteByText = async (label: string) => {
    const row = page.locator('li, .todo-item', { hasText: label });
    const delBtn = row.locator('button:has-text("Delete")').first(); 
    await delBtn.click();              
  };

  for (let i = 99; i >= 1; i -= 2) {
    await deleteByText(`Todo ${i}`);
  }

  // Kiểm tra còn lại 50 task chẵn
  await expect(todos).toHaveCount(50);
});

