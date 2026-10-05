# Chạy và triển khai BOXANH v6

## Link xem thử đã khôi phục ngày 04/10/2026

https://jerry-dsc-beef-members.trycloudflare.com/

Đã kiểm tra trang chủ HTTP 200 và mở được trong trình duyệt. Bản chia sẻ chạy ở cổng 4175 với PUBLIC_PREVIEW=1; /quan-tri và /api/admin/dashboard trả HTTP 403. Bản nội bộ ở http://127.0.0.1:4173/.

Link thử cần máy và các tiến trình server/cloudflared tiếp tục chạy; không phải hosting 24/7. Tạo lại bằng scripts/share-preview.ps1; script ghi URL mới vào .runtime/public-url.txt. Công cụ đọc tự động của ChatGPT vẫn báo không truy cập được trong lần kiểm tra này, dù trình duyệt mở được trang.

## Trên máy

Node 24 trở lên. Chạy npm ci, npm run build, npm start. Mở http://127.0.0.1:4173/. ZIP đã có bản client/SSR đã build. Không triển khai riêng public/ nếu cần giữ API, cấu hình giá và dữ liệu.

## Docker

Dockerfile gồm giai đoạn build React/Tailwind và giai đoạn runtime Node/SQLite. Runtime chạy user node, lưu dữ liệu ở /var/lib/boxanh.

```powershell
docker build -t boxanh:v6 .
docker volume create boxanh-data
docker run --name boxanh -p 127.0.0.1:4173:4173 --env-file .env -v boxanh-data:/var/lib/boxanh boxanh:v6
```

Sao chép .env.example thành .env và đặt ADMIN_PASSWORD bằng secret riêng tối thiểu 12 ký tự. Không ghi mật khẩu trong lệnh hoặc commit .env. Nếu .env có DATA_DIR, dùng /var/lib/boxanh trong container. Khi chạy public preview có thể đặt PUBLIC_PREVIEW=1 để chặn quản trị, còn quản trị chạy trên bản riêng có đăng nhập.

Docker CLI có trên máy nhưng Docker Desktop Linux engine không chạy tại thời điểm kiểm tra, nên chưa xác nhận build/chạy container. npm build, check và test được kiểm tra trực tiếp bằng Node.

## Hosting

Cần tài khoản hỗ trợ Node 24 hoặc Docker, HTTPS và ổ dữ liệu bền vững. Chưa triển khai lên VPSXCloud hoặc hosting cố định. Link localhost hoạt động khi máy chủ trên máy đang chạy. Quick Tunnel của bản cũ không được dùng làm link giao v6 và không có cam kết uptime.

DATA_DIR chứa dữ liệu riêng: không đưa vào ZIP/kho công khai. Dùng online backup SQLite hoặc dừng máy chủ có kiểm soát trước khi chép dữ liệu. Không xóa volume khi cập nhật ứng dụng.

Sửa src/ cần build lại và khởi động lại server để nội dung SSR đồng bộ client. Biến môi trường tham khảo .env.example. API hiện có bảo vệ quản trị, ảnh riêng tư, tra cứu và ghi chéo nguồn; robots.txt không thay thế xác thực.

## AI hội thoại

Backend đọc OPENAI_API_KEY, OPENAI_MODEL, BOXANH_AI_ENABLED và BOXANH_AI_DAILY_LIMIT từ môi trường hoặc .env riêng. Không đặt khóa trong GitHub Pages, biến xuất giao diện hoặc mã phía trình duyệt. Sau khi cấu hình, khởi động lại Node. Chi tiết: [AI-SETUP.md](AI-SETUP.md).
