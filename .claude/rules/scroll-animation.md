---
paths:
  - "css/**/*.css"
  - "js/**/*.js"
  - "index.html"
---

# Animation khi scroll

- **Mọi section** phải có animation nhẹ khi cuộn tới (reveal on scroll): fade-in + dịch chuyển nhẹ theo trục Y (translateY 16–24px → 0), duration ~500–700ms, easing `ease-out`, dùng `IntersectionObserver` trong `js/main.js` (thêm class `.is-visible` khi section vào viewport).
- Chỉ animate lần đầu xuất hiện (không lặp lại khi cuộn lên/xuống nhiều lần) để tránh gây rối mắt.
- Giữ animation **tinh tế, nhất quán** — không dùng parallax, particle, hiệu ứng 3D hay animation khác nhau cho từng section. Đây là ngoại lệ duy nhất cho phép animation, vẫn phải tuân thủ tinh thần tối giản/chuyên nghiệp của design system.
- Tôn trọng `prefers-reduced-motion: reduce` — nếu người dùng bật, tắt animation (hiện nội dung ngay, không transition).
