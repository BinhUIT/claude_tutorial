---
---

# Tổng quan dự án

Trang web giới thiệu sản phẩm/dịch vụ, dựng bằng **HTML/CSS/JS thuần** (không dùng framework, không cần build tool). Thiết kế lấy cảm hứng từ [www.cloaked.com](https://www.cloaked.com) — tối giản, hiện đại, chuyên nghiệp, tông màu ấm.

## Cấu trúc dự án

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    └── icons/
```

- Không dùng bundler/npm trừ khi người dùng yêu cầu. Mở trực tiếp `index.html` hoặc chạy live-server tĩnh.
- CSS thuần (custom properties cho design tokens), tránh framework CSS nặng (Bootstrap...). Có thể dùng Tailwind qua CDN nếu được yêu cầu, nhưng mặc định là CSS viết tay để giữ kiểm soát pixel-level theo ảnh mẫu.
- JS thuần (vanilla), không cần thư viện ngoài trừ khi thật sự cần (ví dụ carousel/video player đơn giản nên tự viết).
