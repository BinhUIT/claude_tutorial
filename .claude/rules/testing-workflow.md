---
---

# Quy trình kiểm tra sau khi sửa

- Sau **mỗi thay đổi lớn** (thêm/sửa section, đổi layout, đổi màu/typography ở phạm vi rộng — không tính fix nhỏ như sửa lỗi chính tả), phải:
  1. Mở trang trong browser và chụp screenshot ở ít nhất 2 kích thước: desktop (~1280px) và mobile (~375px).
  2. So sánh trực quan với ảnh thiết kế gốc `www.cloaked.com.png` — đối chiếu bố cục, tỷ lệ, khoảng trắng, màu sắc, thứ bậc typography.
  3. Nêu rõ điểm khác biệt/lệch so với ảnh gốc (nếu có) và điều chỉnh trước khi báo hoàn thành.
- Kiểm tra mobile-friendly thực tế (không chỉ resize devtools): không có scroll ngang, chữ đọc được không cần zoom, nút/link đủ vùng chạm.
- Kiểm tra animation scroll hoạt động đúng (chạy 1 lần khi vào viewport, không giật/lag) trước khi coi section đó là hoàn thành.
