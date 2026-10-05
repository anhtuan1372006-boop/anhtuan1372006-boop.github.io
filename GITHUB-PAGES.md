# Xuất bản BOXANH bằng GitHub Pages

Kho mã nguồn: https://github.com/anhtuan1372006-boop/anhtuan1372006-boop.github.io

Giao diện: https://anhtuan1372006-boop.github.io/

## Kiến trúc

GitHub Actions build React, chạy kiểm tra, xuất 17 đường dẫn công khai rồi triển khai GitHub Pages. Trang có thể mở trực tiếp hoặc tải lại ở đường dẫn con. Trang quản trị không nằm trong bản xuất tĩnh.

GitHub Pages không chạy server.mjs hoặc SQLite. Biến Actions `BOXANH_API_BASE` chỉ định URL HTTPS của máy chủ API. `public/api-client.js` chuyển các lời gọi API công khai tới máy chủ đó; không gửi cookie và không chuyển API quản trị. Ảnh đồ cũ công khai cũng dùng URL API tương ứng.

Máy chủ API cần đặt `PUBLIC_CLIENT_ORIGIN=https://anhtuan1372006-boop.github.io`. Chỉ origin này được thêm CORS; POST từ origin khác vẫn bị chặn. Public preview chặn quản trị. Cổng quản trị hiện dùng máy chủ riêng trên máy tính, giữ cơ chế đăng nhập hiện có.

Đường hầm thử nghiệm phụ thuộc máy tính đang chạy, có thể đổi URL khi khởi động lại. Khi API không khả dụng, website báo lỗi bằng tiếng Việt và giữ biểu mẫu để thử lại. Đây chưa phải cấu hình backend phục vụ liên tục 24/7.

## Cập nhật

1. Sửa source trong VS Code; chạy `npm run build`, `npm run check` và `npm test` với Node 24 trở lên.
2. Kiểm tra dữ liệu riêng tư bằng `node scripts/check-source-safety.mjs` sau khi thêm file vào Git.
3. Commit và push nhánh main. Workflow `.github/workflows/pages.yml` triển khai tự động.
4. Nếu URL API đổi, sửa biến repository Actions `BOXANH_API_BASE`, rồi chạy lại workflow qua workflow_dispatch.

`scripts/github-pages-setup.ps1` hỗ trợ cấu hình repository, Pages và URL API bằng phiên đăng nhập Git Credential Manager hiện có. Không ghi token vào file. Không chia sẻ data/, .runtime/, .env thật hoặc thông tin đăng nhập.

Xuất bản tĩnh thử tại máy:

```powershell
$env:BOXANH_API_BASE='https://your-api.example.com'
npm run build
npm run export:pages
```

Kết quả ở `_site/`, không cần đưa thư mục này vào Git. Script xuất dùng cơ sở dữ liệu tạm riêng, không đọc đơn thực tế.

## Video hướng dẫn

File hiện hành: `public/assets/boxanh-huong-dan-v10.mp4`, phụ đề `.vtt` và metadata `boxanh-tutorial-v10.json`. File mới có tên riêng để tránh trình duyệt dùng video cũ từ bộ nhớ đệm.

Video được dựng từ ảnh chụp giao diện thật, giọng Microsoft An trên Windows và font giống website. Không gửi đơn thực tế khi ghi hình. Script tạo giọng: `scripts/tutorial-voice-v10.ps1`; script dựng: `scripts/build-tutorial-v10.py`. Dựng lại cần ảnh chụp từng chương, Pillow, fontTools/Brotli, FFmpeg và bộ font gốc; các dữ liệu làm việc nằm trong work/ và .runtime/, không được công khai. Video thành phẩm đã có trong kho, build website không cần các công cụ dựng video.

## Để vận hành lâu dài

Triển khai backend Node 24/SQLite bằng Dockerfile hiện có lên máy chủ có HTTPS, ổ lưu trữ bền vững, sao lưu và mật khẩu quản trị riêng; cập nhật BOXANH_API_BASE. Xem DEPLOYMENT.md. Bảng giá vẫn là tham khảo và yêu cầu khảo sát; chưa có SMS, GPS hoặc cổng thanh toán.
