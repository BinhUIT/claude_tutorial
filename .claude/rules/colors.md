---
paths:
  - "css/**/*.css"
  - "index.html"
---

# Màu sắc

Tông màu ấm, tương phản cao giữa nền tối (nâu chocolate) và nền sáng (kem/ivory), điểm nhấn cam/coral rực.

```css
:root {
  /* Nền */
  --color-bg-dark: #2b1c14;      /* header, footer, khối tối */
  --color-bg-cream: #f7f1e8;     /* nền chính các section sáng */
  --color-bg-white: #ffffff;

  /* Chữ */
  --color-text-dark: #2b1c14;    /* chữ trên nền sáng */
  --color-text-light: #f7f1e8;   /* chữ trên nền tối */
  --color-text-muted: #7a6a5c;

  /* Điểm nhấn */
  --color-accent: #ff5a36;       /* cam/coral — CTA, số liệu nổi bật */
  --color-accent-hover: #e64a28;
  --color-accent-soft: #ffe4d9;  /* nền nhạt cho badge/label */

  /* Khác */
  --color-border: #e8ddcf;
}
```

- Nền tối chỉ dùng cho header/nav và footer (đóng khung trang), phần thân xen giữa nền kem và nền trắng để tạo nhịp.
- Màu cam là điểm nhấn duy nhất — dùng cho nút CTA, số liệu thống kê, gạch chân/nhãn nhỏ. Không lạm dụng thêm màu khác.
