# BOXANH — tài liệu gửi đánh giá

Website dịch vụ chuyển trọ bền vững tại Vinh, Nghệ An. Bảng giá hiện là dự kiến; giá cuối cùng được chốt sau khảo sát. Website có backend Node 24 và SQLite, không chỉ là bản hình ảnh.

## Tệp dùng để đánh giá

- `BOXANH-anh-toan-trang.jpg`: ảnh toàn trang chủ lấy trực tiếp từ website đang chạy ngày 04/10/2026, ở chiều rộng 699 px của cửa sổ trình duyệt.
- `BOXANH-v3-may-tinh.jpg`, `BOXANH-v3-dien-thoai.jpg`: ảnh giao diện ở kích thước máy tính và điện thoại đã kiểm tra trong phiên phát triển.
- `BOXANH-v3-dich-vu.jpg`, `BOXANH-v3-so-sanh.jpg`, `BOXANH-v3-3D.jpg`: ảnh các khu vực dịch vụ, so sánh gói và hộp 3D.
- `BOXANH-website.zip`: mã nguồn, tài nguyên công khai, hướng dẫn chạy và kiểm thử. Đã loại dữ liệu khách hàng, mật khẩu, `.env`, `.runtime` và `node_modules`.

Ảnh phản ánh giao diện ở thời điểm chụp. Chúng không chứng minh mọi tương tác hay hiệu năng trên điện thoại thật. Chi tiết phạm vi kiểm tra nằm trong `QA-v3.md`; mã kiểm thử nằm trong `tests/integration.test.mjs`. Lần chạy kiểm thử gần nhất trong phiên sửa truy cập: 11/11 bài đạt, dùng dữ liệu kiểm thử riêng.

## Những phần cần xem khi đánh giá

1. Bố cục, chữ, khoảng cách, ảnh, độ nhất quán và khả năng đọc trên màn hình nhỏ.
2. Luồng ước tính phí, đặt lịch, gửi đồ và tra cứu: xem cả trạng thái lỗi, dữ liệu thiếu và hướng dẫn khách hàng.
3. Hộp 3D chỉ tải khi khách chủ động mở; kiểm tra cuộn trang, xoay hộp và chế độ giảm chuyển động.
4. Chạy ứng dụng để kiểm tra việc lưu yêu cầu, xác thực quản trị và vận hành hộp/đồ cũ. Không dùng dữ liệu khách thật để thử nghiệm.
5. Phân biệt tính năng đã có với phần chưa tích hợp: thanh toán trực tuyến, SMS/email/Zalo tự động và GPS chưa có. Danh mục chưa có hàng thật; mẫu minh họa được ghi rõ trên giao diện.
6. Đánh giá mức sẵn sàng triển khai: hosting 24/7, tên miền, sao lưu, bảng giá chính thức và quy trình vận hành thực tế còn cần được chủ dịch vụ thiết lập.

## Giới hạn đường link xem thử

Link khôi phục ngày 04/10/2026: https://jerry-dsc-beef-members.trycloudflare.com/

Mã nguồn hiện đã lên phiên bản 6.1. Các ảnh v3 và kết quả kiểm thử nêu ở trên là tài liệu của bản trước; không dùng chúng để xác nhận toàn bộ giao diện/tính năng của bản 6.1.

Link hoạt động khi máy và tiến trình server/tunnel còn chạy. Cloudflare chèn quy tắc bot vào robots.txt trên tên miền thử. Trong lần kiểm tra này, trình duyệt đọc được trang nhưng công cụ đọc web tự động không đọc được. Không có căn cứ để chấm điểm thiết kế từ lỗi truy cập đó; có thể đánh giá bằng ảnh và mã nguồn hoặc chạy dự án tại máy.
