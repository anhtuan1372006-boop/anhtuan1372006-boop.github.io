# BOXANH v8 — Cụm nhận diện, chữ và font

Ngày kiểm tra: 05/10/2026. Nâng cấp trên dự án v7 hiện có.

## Phần được giữ và nâng cấp

Cụm đầu trang có mặt trên toàn bộ giao diện: nhận diện BOXANH, số điện thoại 0332 357 455, gửi nhu cầu báo giá, chăm sóc khách hàng, khu vực thử nghiệm Vinh – Nghệ An và ba dịch vụ chuyển trọ / dọn phòng / bàn giao phòng. Dùng lại ba hình minh họa dịch vụ hiện có, bổ sung viền, màu nền, thẻ tương tác, mũi tên mở trang luôn hiện và trạng thái dịch vụ đang xem. Hiệu ứng hover dùng transform, không thêm vòng lặp xử lý khi cuộn. Có chế độ giảm chuyển động.

Thông tin chi tiết vẫn nằm ở các trang riêng. Thanh điều hướng gọn bám đầu màn hình khi cuộn; cụm nhận diện lớn cuộn theo trang. Giữ các chức năng, video, lời chào nhân vật, báo giá, biểu mẫu, đồ cũ, tra cứu, CSKH và quản trị hiện có.

## Nội dung và font

- Font Be Vietnam Pro được phục vụ nội bộ, với đủ bộ tiếng Việt / Latin / Latin mở rộng ở các độ đậm 400, 500, 600, 700, 800. Đổi font-display thành swap để font thương hiệu không bị bỏ qua khi kết nối chậm; preload thêm bộ 800 dùng cho nhận diện.
- Kiểm tra bảng ký tự của 15 tệp WOFF2 bằng fontTools: đủ 157 ký tự Latin/tiếng Việt xuất hiện trong nội dung đã đọc. Nội dung hiển thị dùng Unicode NFC, không có ký tự thay thế U+FFFD.
- Tăng cỡ chữ phụ, nút mở chi tiết, mô tả, danh sách, phụ đề giao diện và chú thích ở màn hình nhỏ. Giữ serif ở các câu nhấn như một lựa chọn thiết kế có chủ đích.
- Thống nhất cách viết số điện thoại; đổi các thuật ngữ hiển thị “seal”, “FIX”, “checklist” sang tem niêm phong, sửa chữa và danh sách chuẩn bị. Giữ nguyên tên trường, giá trị enum và mã của API.
- Sửa lời hướng dẫn tải ảnh ở trang sự cố; mở rộng phần giới thiệu tra cứu cho các loại yêu cầu hệ thống hỗ trợ.
- Sửa phần chính sách mô tả hộp 3D và hình hộp trên trang chủ đã cũ, để khớp nhân vật và hình minh họa hiện tại. Không thêm điều khoản pháp lý mới.

## Kiểm thử

Build client/SSR và kiểm tra cú pháp thành công. 15 bài kiểm tra tích hợp có sẵn đều đạt, sử dụng dữ liệu thử nghiệm độc lập; không tạo đơn thử trong dữ liệu khách đang dùng.

Trình duyệt kiểm tra 20 giao diện ở chiều rộng 320, 390 và 1265 px, tổng 60 lượt: 17 trang công khai, hai biến thể biểu mẫu dọn phòng/bàn giao và trang đăng nhập quản trị nội bộ. Mỗi giao diện có đủ 4 thẻ liên hệ, 3 thẻ dịch vụ và không có tràn ngang. Đã phát hiện và sửa nút menu vượt mép 4 px ở màn hình 320 px. Dòng chữ phụ của logo nhỏ trong thanh điều hướng được ẩn ở 320 px; khẩu hiệu vẫn hiển thị đầy đủ trong cụm nhận diện lớn.

Kiểm tra thủ công: ba thẻ dịch vụ mở đúng trang và đánh dấu trang đang xem; thẻ khu vực tới đoạn Vinh; nút báo giá tới biểu mẫu; thẻ chăm sóc khách hàng tới hỗ trợ; menu điện thoại mở/đóng và cập nhật tên nút; nút Quay lại hoạt động; câu hỏi dài và cửa sổ phạm vi gói hiển thị đủ ở 320 px.

Báo cáo kỹ thuật trong work/layout-audit-v8-final.json và work/font-audit-v8.json tại máy phát triển. Thư mục work và công cụ font cài riêng trong .runtime không đưa vào ZIP. Scripts/audit-typography-v8.py là công cụ QA tùy chọn, cần fontTools và Brotli cùng báo cáo trình duyệt để chạy lại.

## Link chia sẻ

HTTPS công khai trả 200 với cụm đầu trang mới, đủ 4 thẻ liên hệ và 3 dịch vụ. Trang quản trị công khai trả 403; máy chủ nội bộ giữ cổng vận hành. Link Quick Tunnel vẫn cần máy tính và các tiến trình tiếp tục chạy. Giá đang là tham khảo; chưa thay đổi phạm vi vận hành hoặc cam kết thương mại.
