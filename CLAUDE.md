# Dự án: Landing Page (phong cách Cloaked.com)

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

## Design system

### Màu sắc

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

### Typography

- Font sans-serif hiện đại, dễ đọc (ví dụ hệ thống: `-apple-system, "Inter", "Helvetica Neue", Arial, sans-serif`, hoặc import Google Fonts "Inter"/"Sora" nếu cần đẹp hơn).
- Heading: **bold**, cỡ lớn, letter-spacing hơi âm (-0.02em), line-height chặt (1.05–1.15) để tạo cảm giác chắc chắn, chuyên nghiệp.
- Body text: cỡ vừa (16–18px), line-height thoáng (1.5–1.7), màu `--color-text-muted` cho đoạn mô tả phụ.
- Phân cấp rõ: H1 (~48–64px) > H2 (~32–40px) > body (~16–18px) > caption/label (~13–14px, uppercase, letter-spacing rộng).

### Layout & spacing

- Bố cục theo section full-width, nội dung căn giữa trong container max-width ~1200px, padding ngang responsive (16px mobile, 80px+ desktop).
- Nhịp trắng (whitespace) rộng giữa các section (80–140px vertical) — đây là yếu tố quan trọng nhất tạo cảm giác "tối giản, cao cấp". Không nhồi nhét nội dung.
- Grid 2 cột cho các phần "vấn đề/giải pháp" (text bên trái, ảnh/minh họa bên phải hoặc ngược lại, xen kẽ qua từng section).
- Bo góc lớn (16–24px) cho card, ảnh, khối nền màu; nút bấm bo tròn dạng pill (border-radius: 999px).

### Components

- **Nav**: nền tối, logo trái, menu giữa/phải tối giản, 1 nút CTA pill màu cam hoặc viền sáng.
- **Nút CTA chính**: nền cam `--color-accent`, chữ trắng/kem, bo pill, padding rộng (14px 28px), hover đổi sang `--color-accent-hover`, không dùng shadow nặng.
- **Nút phụ**: viền mỏng, nền trong suốt, chữ theo màu nền.
- **Card thống kê** (ví dụ "60+ million"): nền cam đặc, chữ số lớn bold màu trắng/kem, label nhỏ uppercase dưới số, bo góc lớn.
- **Ảnh minh họa**: bo góc lớn, có thể lồng trong khối nền màu (kem hoặc tối) tạo khung.
- **Footer**: nền tối, chia cột (liên kết, form đăng ký email dạng input + nút cam), chữ nhỏ, muted.

### Animation khi scroll

- **Mọi section** phải có animation nhẹ khi cuộn tới (reveal on scroll): fade-in + dịch chuyển nhẹ theo trục Y (translateY 16–24px → 0), duration ~500–700ms, easing `ease-out`, dùng `IntersectionObserver` trong `js/main.js` (thêm class `.is-visible` khi section vào viewport).
- Chỉ animate lần đầu xuất hiện (không lặp lại khi cuộn lên/xuống nhiều lần) để tránh gây rối mắt.
- Giữ animation **tinh tế, nhất quán** — không dùng parallax, particle, hiệu ứng 3D hay animation khác nhau cho từng section. Đây là ngoại lệ duy nhất cho phép animation, vẫn phải tuân thủ tinh thần tối giản/chuyên nghiệp ở trên.
- Tôn trọng `prefers-reduced-motion: reduce` — nếu người dùng bật, tắt animation (hiện nội dung ngay, không transition).

### Nguyên tắc chung

1. **Tối giản trước, trang trí sau** — mỗi section chỉ truyền một ý chính, không chồng nhiều hiệu ứng.
2. **Tương phản rõ ràng** — luân chuyển nền tối/kem/trắng giữa các section thay vì gradient hay hiệu ứng phức tạp.
3. **Một điểm nhấn màu duy nhất** (cam) — mọi màu khác trung tính (nâu, kem, trắng, xám ấm).
4. **Ảnh thật, đời thường, ấm áp** — ưu tiên ảnh người dùng thực tế trong bối cảnh gia đình/đời sống hơn là minh họa 3D/abstract.
5. **Mobile-friendly là yêu cầu bắt buộc, không phải tùy chọn** — responsive mobile-first, kiểm tra tối thiểu ở 375px, 768px, 1280px. Trên mobile: section 2 cột xếp chồng theo thứ tự hợp lý, chữ/nút đủ lớn để chạm (tối thiểu 44px chiều cao vùng chạm), không có scroll ngang.
6. **Không thêm hiệu ứng/animation phức tạp ngoài animation scroll đã quy định** (parallax, particle, hover 3D...) trừ khi được yêu cầu thêm — giữ đúng tinh thần chuyên nghiệp, không phô trương.

## Quy ước code

- HTML ngữ nghĩa (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), heading đúng thứ bậc (chỉ 1 `<h1>`/trang).
- CSS: dùng custom properties ở `:root`, đặt tên class theo BEM đơn giản hoặc theo section (`.hero`, `.hero__title`, `.stats`, `.stats__item`) — không dùng ID để style.
- Không cần comment giải thích code hiển nhiên; chỉ ghi chú khi có lý do không rõ ràng (ví dụ: hack CSS riêng cho Safari).
- Ảnh đặt trong `assets/images/`, tối ưu kích thước trước khi thêm vào repo, dùng thuộc tính `alt` mô tả đầy đủ.

## Quy trình kiểm tra sau khi sửa

- Sau **mỗi thay đổi lớn** (thêm/sửa section, đổi layout, đổi màu/typography ở phạm vi rộng — không tính fix nhỏ như sửa lỗi chính tả), phải:
  1. Mở trang trong browser và chụp screenshot ở ít nhất 2 kích thước: desktop (~1280px) và mobile (~375px).
  2. So sánh trực quan với ảnh thiết kế gốc `www.cloaked.com.png` — đối chiếu bố cục, tỷ lệ, khoảng trắng, màu sắc, thứ bậc typography.
  3. Nêu rõ điểm khác biệt/lệch so với ảnh gốc (nếu có) và điều chỉnh trước khi báo hoàn thành.
- Kiểm tra mobile-friendly thực tế (không chỉ resize devtools): không có scroll ngang, chữ đọc được không cần zoom, nút/link đủ vùng chạm.
- Kiểm tra animation scroll hoạt động đúng (chạy 1 lần khi vào viewport, không giật/lag) trước khi coi section đó là hoàn thành.
