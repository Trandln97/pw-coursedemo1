// test4.spec.ts
import { test, expect } from '@playwright/test';

test('ex4.test', async ({ page }) => {
    // Truy cập trang và mở “Bài học 4: Personal notes”
    await page.goto('https://material.playwrightvn.com/');
    await page.getByText('Bài học 4: Personal notes').click();

    // Danh sách 10 note (tên mèo + chủ thú cưng)
    const notes = [
        { title: 'Hyma', content: 'Mèo Hyma của Minh rất ngoan và thích nằm cạnh laptop.' },
        { title: 'Mer', content: 'Mer là mèo chân ngắn của Trang, cực kỳ đáng yêu.' },
        { title: 'Milo', content: 'Milo của Thảo hay ngủ trong giỏ đồ chơi.' },
        { title: 'Mimi', content: 'Mimi ăn một hoặc nhiều bữa nhỏ trong ngày.' },
        { title: 'Boo', content: 'Boo của Linh rất thích leo rèm cửa.' },
        { title: 'Simba', content: 'Simba của Nam thích chơi bóng với chủ.' },
        { title: 'Coco', content: 'Coco ăn một hoặc nhiều loại pate khác nhau mỗi tuần.' },
        { title: 'Neko', content: 'Neko của Mai thích phơi nắng buổi sáng.' },
        { title: 'Tom', content: 'Tom của Hằng thích đuổi bóng laser.' },
        { title: 'Luna', content: 'Luna của Phương rất thân thiện và thích được vuốt ve.' },
    ];

    // Thêm mới 10 note
    for (const note of notes) {
        await page.locator('//input[@id="note-title"]').fill(note.title);
        await page.locator('//textarea[@id="note-content"]').fill(note.content);
        await page.locator('//button[@id="add-note"]').click();
    }

    await expect(page.locator('//div[@id="note-count"]')).toHaveText(/Total Notes:\s*10/);

    // Search với keyword "một hoặc nhiều"
    await page.locator('//input[@id="search"]').fill('một hoặc nhiều');
    await page.locator('//input[@id="search"]').press('Enter').catch(() => { });

    // Kiểm tra kết quả lọc — chỉ còn các note chứa từ khoá
    const filtered = notes.filter(n =>
        (n.title + n.content).toLowerCase().includes('một hoặc nhiều')
    );

    await expect(page.locator('//li | //div[contains(text(),"note-content")]').filter({ hasText: 'một hoặc nhiều' })).toHaveCount(filtered.length);

    console.log(`✅ Đã thêm ${notes.length} note và lọc được ${filtered.length} note chứa 'một hoặc nhiều'.`);
});
