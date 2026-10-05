# Bơ đang hoạt động trên máy — bước chia sẻ công khai

Bản đã kiểm tra: <http://127.0.0.1:4177/tro-ly-ai>. AI dùng Qwen3 4B Instruct qua Ollama trên máy, không cần khóa OpenAI. Cần giữ máy và các tiến trình đang chạy. Trả lời tư vấn bằng CPU có thể mất khoảng một phút hoặc hơn; tính giá với số liệu rõ dùng bộ tính giá và trả nhanh hơn.

Ở phiên kích hoạt ngày 06/10/2026, bộ phê duyệt tự động từ chối thao tác khởi chạy đường hầm công khai mới, chỉ báo `blocked by policy`. Mô hình và máy chủ ở cổng 4177 đã chạy; việc nối bản này với GitHub Pages chưa hoàn tất. Không sửa cấu hình phê duyệt hay tắt biện pháp bảo vệ.

Nếu bạn muốn công khai bản đang chạy, bạn có thể tự thực hiện bước chia sẻ sau trên máy của mình:

1. Mở Terminal PowerShell trong VS Code hoặc Windows Terminal.
2. Chạy hai dòng này:

```powershell
Set-Location -LiteralPath 'C:\Users\tuan\Documents\Codex\2026-10-03\sau-c-th-c-b-n\outputs\boxanh'
& '.\.runtime\cloudflared.exe' tunnel --url http://127.0.0.1:4177 --no-autoupdate --protocol quic
```

Đây là chia sẻ công khai ứng dụng BOXANH qua Cloudflare; người có link có thể mở trang và gọi các API công khai. Bản này chặn cổng quản trị, giữ kiểm tra biểu mẫu và giới hạn lượt AI. Cổng Ollama 11434 vẫn chỉ dùng trong máy, không được chia sẻ trực tiếp.

3. Đợi Cloudflare hiện một URL dạng `https://...trycloudflare.com` và thông báo `Registered tunnel connection`. Giữ cửa sổ Terminal đó mở.
4. Gửi URL ấy trong cuộc trò chuyện. Không gửi mật khẩu, khóa API hoặc nội dung hồ sơ khách. Agent có thể kiểm tra API, cập nhật biến GitHub `BOXANH_API_BASE` và xuất bản lại giao diện để khách trò chuyện từ link GitHub.

Đường hầm là bản thử nghiệm, không có cam kết hoạt động 24/7. Link GitHub vẫn mở được giao diện khi máy tắt, nhưng AI và các API tiếp nhận sẽ không hoạt động. Xem [AI-SETUP.md](AI-SETUP.md) để khởi động lại mô hình/máy chủ và [DEPLOYMENT.md](DEPLOYMENT.md) cho triển khai máy chủ lâu dài.
