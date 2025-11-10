### GIT
1. **Remote** <br>
  **Remote** (hay *remote repository*) là danh sách các **repository** được lưu trữ trên **máy chủ từ xa (remote server)**,cho phép bạn **cộng tác với người khác** trong cùng một dự án.
- Mỗi **remote** được định danh bằng **một tên ngắn gọn** và **liên kết đến một URL**.

**Ví dụ:**
```
git remote add origin git@github.com:bba/k18-practice.git
```
Nghĩa là:
- Tên ngắn gọn: origin
- URL: git@github.com:bba/k18-practice.git

2. **Clone, pull, push**<br>

**Clone** là hành động **lấy toàn bộ mã nguồn (code)** từ một **repository đã có sẵn** về **máy tính cá nhân**.

**Câu lệnh clone:**
```bash
git clone <link-repo> 
git clone git@github.com:better-bytes-academy/k18-practice.git
```
Có thể đặt lại tên cho thư mục clone:
```bash
git clone <link repo> <tên mới>
git clone git@github.com:better-bytes-academy/k18-practice.git k18-practice-2
```
*Question*<br>
Tôi clone bằng HTTPS được không?
<br>
*Answer*<br>
Được. Nhưng mỗi lần push/ pull code lại phải nhập lại
mật khẩu => bất tiện

**Push** là hành động **đưa mã nguồn (code)** từ **repository trên máy local**  
của một **nhánh (branch) cụ thể** lên **repository trên remote**.

**Câu lệnh push:**
```bash
git push <remote_name> <branch_name>
git push origin main
```

**Pull** là hành động lấy code từ một nhánh cụ thể về nhánh local. 
**Câu lệnh pull:**
```bash
git pull <remote_name> <branch_name>
git pull origin main
```
3. **Stashing** <br>

**stash** là hành động lưu trữ các thay đổi hiện tại (ở vùng staging) vào một vùng nhớ tạm. 
**Câu lệnh stash:**
```bash
git stash save
```
**stash** giúp ta có thể chuyển đổi qua một nhánh khác dễ dàng hơn.
Để lấy công việc lại, dùng lệnh:
```bash
git stash pop
```
4. **Merge request, reviewer**<br>

**Merge request** = gộp code từ một nhánh sang nhánh còn lại
**Reviewer** = người review code

5. **Convention**<br>

Convention giúp:
- Gọn gàng, đồng bộ
- Dễ đoán được ý đồ của PR/commit

- Convention:
    - Đặt tên branch
    -  Viết commit message
  
`<type>: <short-description>`
type:
- feat: tính năng mới
- fix: sửa lỗi
- conf: thay đổi cấu hình (config)
- chore: các thay đổi “lặt vặt”: Xóa file không dùng, đổi tên file,...
**short-description:** Mục đích của commit