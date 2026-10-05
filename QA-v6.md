# BOXANH React v6 · Kết quả kiểm tra

Kiểm tra ngày 04/10/2026 trên bản local ở http://127.0.0.1:4173/.

## Build và nghiệp vụ

- npm run build: đạt, tạo client React/Tailwind và module SSR.
- npm run check: đạt, gồm server, JS nghiệp vụ, client bundle và module SSR.
- node --test tests/*.test.mjs: 13/13 đạt, dùng SQLite/ảnh thử nghiệm trong thư mục riêng.
- npm audit khi cài/làm sạch dependencies: 0 lỗ hổng được npm báo tại thời điểm kiểm tra.

Các kiểm thử tích hợp: nội dung SSR/cấu hình; nén/ETag/HEAD/font; route và ảnh; báo giá và kiểm tra dữ liệu; xác thực quản trị và ghi chéo nguồn; lưu đơn/ảnh riêng tư/chống trùng; tra cứu bằng số điện thoại; chuyển trạng thái/giữ hộp/thu hồi một phần; phân bổ thu mua; bán và thanh toán ký gửi; dọn phòng và bàn giao không giữ tồn hộp; CSKH có xác minh và kết quả; thuê hộp không hiển thị vận chuyển; logout thu hồi phiên.

## Kiểm tra trong trình duyệt

- Desktop 1366×900; mobile 390×844 và 320×740: không tràn ngang.
- Menu điện thoại mở được và chuyển đến biểu mẫu đặt lịch.
- Giá Trọn gói 10 hộp/5 km = 500.000đ; đổi 15 hộp cập nhật 550.000đ. Chỉ thuê 10 hộp = 200.000đ theo cấu hình hiện tại.
- Dọn phòng hiển thị Cần khảo sát và chuyển sang đúng biểu mẫu dọn phòng. Chưa gửi đơn thử vào dữ liệu đang vận hành.
- Hộp thoại điều kiện các gói mở được, đóng bằng Escape; dùng nhãn Đóng tiếng Việt. Mobile 320px hiển thị đủ nội dung, có giới hạn chiều cao và cuộn cho màn hình thấp hơn.
- Tab quy trình đổi được bằng chuột/phím mũi tên; tab ký gửi giải thích thời điểm đối soát sau bán.
- Hộp 3D tải khi chọn; canvas hiển thị, dừng xoay và nút xoay trái hoạt động. Quay sang trang khác rồi về trang chủ tạo lại giao diện bình thường.
- Nút vòng đời Vệ sinh cập nhật nội dung; hỏi đáp về seal mở và hiển thị hướng xử lý CSKH.
- Điều hướng từ biểu mẫu đến mục Hướng dẫn chuyển trọ trên trang chủ đi đúng hash và có nội dung mục đích.
- Không ghi nhận error/warn trong console qua các lượt kiểm tra trên.
- Ảnh trang chủ desktop, mobile và bố cục dịch vụ được lưu kèm ngoài ZIP.

## Giới hạn đã ghi nhận

Docker CLI có nhưng Linux engine chưa chạy, nên chưa xác nhận build/chạy container. Chưa triển khai hosting/VPS cố định. QR/seal riêng từng hộp và lịch sử quét vẫn là quy trình dự kiến, dùng dữ liệu minh họa; không biến màn hình này thành hệ thống vận hành thật trong lần sửa giao diện. Chưa có thanh toán/GPS/tin nhắn tự động. Ảnh ý tưởng AI và ảnh tham khảo được ghi nhãn, không có đánh giá khách hoặc đối tác giả.

## Giao mã nguồn

ZIP chứa src, dist, public, scripts, tests, licenses, cấu hình Vite/Tailwind/shadcn, Node server, Dockerfile, lockfile và hướng dẫn. Không chứa data, .runtime, node_modules, .env thật hay mật khẩu. Dữ liệu ở bản đang chạy được giữ nguyên.
