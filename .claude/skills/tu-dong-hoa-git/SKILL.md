---
description: Tự động add, commit, và push toàn bộ thay đổi lên git khi người dùng yêu cầu commit và push.
---

Khi người dùng yêu cầu commit và push, hãy tự động:

1. Chạy `git add .`
2. Xem lại thay đổi (`git status` / `git diff --staged`), tự soạn nội dung commit message ngắn gọn, phù hợp với thay đổi thực tế, rồi chạy `git commit -m "<nội dung tự tạo>"`
3. Chạy `git push origin master`
