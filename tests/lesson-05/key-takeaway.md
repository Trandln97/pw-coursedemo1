## Lesson 5
### JavaScript
#### Function Advance
1. Function expression
  <br> Định nghĩa function bằng cách gán nó cho một biến
  <br>
 ```javascript
// Function Declaration (khai báo hàm)
function add(a, b) {
  return a + b;
}

// Function Expression (biểu thức hàm)
const add = function(a, b) {
  return a + b;
};

// So sánh cách gọi
console.log(add(2, 3)); // 5 - cả hai đều giống nhau
```
2. Lambda function (còn gọi là Arrow Function)
- Xuất hiện lần đầu trong **ES6 (ES2015)**.  
- Đây là cách viết ngắn gọn hơn cho **function**.  
- Sử dụng dấu **=>**.
<br>
```javascript
// Function truyền thống
function add(a, b) {
  return a + b;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function (Lambda)
const add = (a, b) => {
  return a + b;
};
```
- Nếu chỉ có 1 dòng code => có thể “rút gọn” cặp ngoặc nhọn
```javascript
// Cú pháp ngắn gọn nhất (implicit return)
const add = (a, b) => a + b;
```
***Lambda function:*** một số cách viết khác
```javascript
// Không có tham số
// Phải có dấu ngoặc tròn rỗng
const greet = () => console.log("Hello!");
const getRandom = () => Math.random();

// Một tham số
// Có thể bỏ dấu ngoặc tròn
const double = x => x * 2;
const square = x => x * x;
// Hoặc giữ dấu ngoặc (tùy style)
const triple = (x) => x * 3;
```
3. Anonymous function (hàm ẩn danh)
- function không có tên.
- được sử dụng khi function chỉ cần dùng một lần hoặc làm callback.


### DOM - Document Object Model
Khi vào một website, ta nhìn thấy website dưới dạng:
- Các khối **text**  
- Các **hình ảnh**  
- Các **liên kết (links)**  
- Các **ô input**
Máy tính sẽ “nhìn” website ở dưới dạng **“cây có cấu trúc”**
- Mở cây này bằng cách bấm **phím F12**  
  (hoặc **chuột phải** vào vùng trống → chọn **Inspect**)  
- Sau đó chọn tab **“Elements”**
Cấu trúc này gọi là **DOM (Document Object Model)**

```html
<option value="usa">United States</option>

- Thẻ mở: <option>
- Thuộc tính: value="usa"
- Nội dung (text): United States
- Thẻ đóng: </option>
```
#### DOM - Các thẻ HTML thường gặp
- **Thẻ tiêu chuẩn:**  
  Là những thẻ được các tổ chức uy tín như **Mozilla** hoặc **W3C** định nghĩa sẵn  
- **Thẻ tự định nghĩa:**  
  Là những thẻ **do lập trình viên hoặc website tự định nghĩa**

***Các thẻ tiêu chuẩn thường gặp***

**Thẻ Cấu Trúc Cơ Bản**
- `<html>`: Thẻ gốc của trang  
- `<head>`: Chứa metadata: tiêu đề website, hiển thị Google  
- `<body>`: Nội dung của cả website hiển thị  
- `<div>`: Khối/container chung  
- `<span>`: Inline container  
- `<header>`, `<footer>`, `<nav>`, `<section>`: Thẻ ngữ nghĩa  
**Thẻ Nội Dung:**
- `<h1>` đến `<h6>`: Tiêu đề  
- `<p>`: Đoạn văn  
- `<a>`: Liên kết  
- `<img>`: Hình ảnh  
- `<ul>`, `<ol>`, `<li>`: Danh sách  
**Thẻ Form (Quan trọng cho Testing):**
- `<form>`: Biểu mẫu  
- `<input>`: Ô nhập liệu (text, password, checkbox, radio, etc.)  
- `<button>`: Nút bấm  
- `<select>` và `<option>`: Dropdown  
- `<textarea>`: Vùng văn bản nhiều dòng  

https://material.playwrightvn.com/035-DOM-elements.html

### SELECTOR
Automation = tương tác với các phần tử trên trang web  
- Input  
- Fill  
- Click  
- ... <br>
  
Có 3 loại selector thường dùng:  
- **XPath**
  - Dùng được trong hầu hết các trường hợp (99.99%)
  - Đa dạng, có khả năng tìm các phần tử khó
  - Hơi dài
  - VD: //button[normalize-space() = ‘Add to cart’]
- **CSS selector**
  - Ngắn gọn, performance cao  
  - Dùng cho các trường hợp dễ tìm  
  - Không linh hoạt bằng XPath  
- **Playwright selector** 
  - Chỉ dùng riêng cho Playwright  
  - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM  
  - Hướng tới “giống người dùng đang nhìn thấy gì”  
  - VD: page.getByText("Add to cart");  
  - VD: .add-to-cart  

Khi nào thì dùng gì?  
**Playwright selector > CSS Selector > XPath**
- Vẫn cần học hiểu cả ba loại để có thể “cân” được mọi loại dự án.  
- Có những dự án “thích” dùng CSS, “thích” dùng XPath, ta buộc phải tuân theo.  

#### Xpath selector
- XPath = XML Path  
- Có 2 loại:  
  - Tuyệt đối: đi dọc theo cây DOM  
    - Bắt đầu bởi 1 /  
  - Tương đối: tìm dựa vào đặc tính  
    - Bắt đầu bởi 2 //  
    - //tenthe[@thuoctinh="giatri"]  
- Nên dùng XPath tương đối  

***Playwright basic syntax***
Automation = tương tác + verify  
Trong bài này, ta học cách tương tác với các phần tử  
- Viết một test  
- Tổ chức thành các step  
- Tương tác cơ bản  
  - Navigation  
  - Click  
  - Fill  
  
test: Đơn vị cơ bản để khai báo một test  
step: Đơn vị nhỏ hơn test, để khai báo từng step của test case  
*Lưu ý: step nên được map 1-1 với test case để dễ dàng maintain.*
```javascript
import { test } from '@playwright/test';

await test.step('Tên step', async () => {
  // Code here
});
-----

test('<tên test>', async ({ page }) => {
  await test.step('Tên step', async () => {
    // Code here
  });
});
```

1. Navigate 
```javascript
await page.goto('https://pw-practice.playwrightvn.com/');
```
2. Locate <br>

 Sử dụng `page.locator("<selector>")` để chọn phần tử trên trang  
```javascript
page.locator("//input[@id='email']");
```
3. Click 
- Single click  
```javascript
await page.locator("//button").click();
```
- Double click 
```javascript
await page.locator("//button").dblclick();
```
- Click chuột kèm phím khác
```javascript
page.locator("").click({
  modifiers: ['Shift'],
});
```

4. Input
- Fill 
Giống việc bạn **paste content** vào một ô input  
```javascript
page.locator("//input").fill('Playwright Viet Nam');
```
- pressSequentially
```javascript
page.locator("//input").pressSequentially('Playwright Viet Nam', {
  delay: 100,
});
```
5. Ratio/Checkbox
- Lấy giá trị hiện tại đang là check hay không:
```javascript
const isChecked = page.locator("//input").isChecked();
```
- Check/ uncheck
```javascript
page.locator("//input").check();
page.locator("//input").setChecked(false);
```
6. Select
```javascript
await page.locator('//select[@id="country"]')
  .selectOption({ label: 'USA' });
```
7. Upload file
```javascript
await page.locator("//input[@id='profile']")
  .setInputFiles("<file-path>");
```
8. Hover 
```javascript
await page.locator("<xpath here>").hover();
```
9. Text()  <br>

Hàm `text()` dùng để **tìm phần tử có nội dung văn bản tương ứng**.
Với DOM sau:
```html
<div class="playwright">This is a text</div>
```
Để chọn phần tử này, ta dùng cú pháp:
```
//div[text()=’This is a text’]
```

10.  Contains() <br>
Đôi khi phần tử HTML có **khoảng trắng thừa** hoặc **giá trị text không cố định**, ví dụ:
```html
<div> Tôi là Alex </div>      <!-- Text này có 1 ký tự space ở đầu và ở đuôi  -->
<div> Bây giờ là: 08:07 </div> <!-- Thời gian sẽ tuỳ vào thời điểm truy cập trang web -->
```
Để chọn các phần tử này, ta dùng hàm `contains(<giá trị>, <giá trị contains>)`. Ví dụ  
```
//div[contains(text(), ‘Tôi là Alex’)]  
//div[contains(text(), ‘Bây giờ là:’)]  
```

11.  Confirmation dialog <br>

 Dùng để xử lý các hộp thoại xác nhận (confirm / alert / prompt) xuất hiện trên trang web.
```javascript
page.on('dialog', async (dialog) => {
  console.log(dialog.message());
  await dialog.accept(); // Chọn OK
  // await dialog.dismiss(); // Chọn Cancel
});
```
- `page.on('dialog', callback)` → Lắng nghe sự kiện khi hộp thoại xuất hiện.
- `dialog.message()` → Lấy nội dung hiển thị trong dialog.
- `dialog.accept()` → Nhấn nút OK.
- `dialog.dismiss()` → Nhấn nút Cancel.