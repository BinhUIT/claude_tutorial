---
paths:
  - "index.html"
  - "css/**/*.css"
  - "js/**/*.js"
  - "assets/**"
---

# Quy ước code

- HTML ngữ nghĩa (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), heading đúng thứ bậc (chỉ 1 `<h1>`/trang).
- CSS: dùng custom properties ở `:root`, đặt tên class theo BEM đơn giản hoặc theo section (`.hero`, `.hero__title`, `.stats`, `.stats__item`) — không dùng ID để style.
- Không cần comment giải thích code hiển nhiên; chỉ ghi chú khi có lý do không rõ ràng (ví dụ: hack CSS riêng cho Safari).
- Ảnh đặt trong `assets/images/`, tối ưu kích thước trước khi thêm vào repo, dùng thuộc tính `alt` mô tả đầy đủ.
