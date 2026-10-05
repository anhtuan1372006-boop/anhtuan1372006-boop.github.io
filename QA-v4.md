# BOXANH bản cập nhật ngày 04/10/2026

Giao diện đã bổ sung nội dung dự án mới và sửa theo đánh giá trong file Điểm tổng.docx. Bản xem thử trên máy: http://127.0.0.1:4173/.

## Những phần đã cập nhật

- Trang chủ giảm từ 15 xuống 8 khối. Trên viewport 390 × 844, chiều dài giảm từ khoảng 17.347 px xuống khoảng 7.991 px (54%). Các phần so sánh chi tiết, cẩm nang và mô hình hộp được chuyển sang trang dịch vụ. Mô hình 3D chỉ tải khi người xem chọn.
- Màu vàng ấm làm điểm nhấn. CTA chính thống nhất “Nhận báo giá”; các lựa chọn gói dùng liên kết phụ. Có thanh báo giá/gọi cố định trên mobile, chỉ giữ nút gọi ở các biểu mẫu đang nhập.
- Phạm vi gồm chuyển trọ, dọn phòng và bàn giao phòng. Dọn/bàn giao có biểu mẫu riêng, lưu yêu cầu, tra cứu và tiến độ thực hiện riêng; báo giá sau khảo sát, không gán một mức giá chưa được xác nhận.
- So sánh gói bằng thẻ dọc, có lọc điểm khác nhau. Gói Trọn gói được đánh dấu gợi ý theo phạm vi hỗ trợ, không tạo thống kê “bán nhiều nhất”.
- Bổ sung tiêu chí hộp bền, dùng lâu, dễ vệ sinh/thu hồi và khả năng tái chế cuối vòng đời. Có quy trình QR, seal, ảnh bàn giao, bảo trì, thất lạc và vệ sinh sau thu hồi.
- Trang /hop-minh-hoa hiển thị đúng mẫu BX-000128, đơn BX2027-0015, ngày 12/01/2027 và 10 hộp; toàn bộ được đánh dấu dữ liệu minh họa.
- Trang /ho-tro tiếp nhận sự cố: xác minh mã đơn và số điện thoại, ghi mã hộp/seal, mô tả và tối đa 4 ảnh. Có mã sự cố, chống gửi trùng, tra cứu tiến độ và cổng CSKH cập nhật kết quả. Ảnh chỉ truy cập khi đăng nhập vận hành.
- Cổng vận hành bổ sung “CSKH & sự cố” và “Đối tác & QR”. Tài liệu nội bộ bao gồm 3 nhóm đối tác, quy trình tìm 2–3 đối tác/nhóm, bảng giá bằng văn bản, thử 1–3 đơn, chấm điểm và đàm phán theo sản lượng. Dữ liệu lựa chọn đối tác và quy tắc định giá nội bộ không đưa vào trang khách hàng.
- Phụ phí thể hiện thêm phí chờ, thêm người, ngoài giờ và phát sinh cần khảo sát. FAQ và chính sách mô tả đối chiếu hồ sơ, seal, hình ảnh, lịch sử QR nếu đã triển khai và danh sách đồ ngoài hộp trước xác định trách nhiệm.
- Tiêu đề/mô tả có “chuyển trọ Vinh”, bổ sung Open Graph dạng văn bản. Giữ nguyên các ảnh có giấy phép và nhãn ảnh tham khảo; 4 ảnh chính chuyển sang WebP, dung lượng tổng giảm khoảng 54%.

## Kiểm tra đã thực hiện

13/13 kiểm tra tích hợp đạt. Đã kiểm tra giá từ máy chủ, lưu yêu cầu, chống gửi trùng, quyền truy cập ảnh, tra cứu đúng số điện thoại, luồng dọn/bàn giao không giữ hộp trong kho, CSKH phải kiểm tra và ghi kết quả trước hoàn tất.

Đã kiểm tra giao diện ở 320 px, 390 px và desktop 1366 px: không phát hiện tràn ngang. Form thiếu trường bắt buộc không gửi được. Lọc điểm khác nhau hoạt động. Mô hình 3D tải được, có canvas và nút điều khiển; không ghi nhận lỗi console trong lượt kiểm tra.

## Thông tin cần BOXANH xác nhận

Chưa có ảnh hoạt động, đánh giá khách hàng, số đơn hoàn tất hoặc logo đối tác thật. Website công bố đúng trạng thái thử nghiệm, không dựng bằng chứng xã hội.

Bảng giá dọn/bàn giao phòng, phạm vi FIX, điều kiện và giới hạn đền bù/bảo hiểm cần được BOXANH xác nhận. Không công bố mức đền bù hoặc gói bảo hiểm chưa có căn cứ.

QR hiện là giao diện mẫu và nội dung quy trình. Kho vận hành hiện quản lý theo số lượng; hệ thống cấp QR từng hộp, lịch sử quét, mã seal/ảnh bàn giao và bảng chấm điểm đối tác có lưu trữ riêng chưa được triển khai trong lần chỉnh giao diện này.

## Sử dụng mã nguồn

Thư mục BOXANH-cap-nhat chứa mã nguồn và tài sản web. Chạy với Node.js 24 trở lên bằng `node server.mjs`, sau đó mở http://127.0.0.1:4173/.

Nếu cần chuẩn bị lại tài sản mô hình từ thư viện Three.js, chạy `npm ci` rồi `npm run prepare-assets`. Tài sản trình duyệt đã được kèm sẵn trong bản này.

Dữ liệu khách hàng, mật khẩu quản trị, phiên truy cập và tệp vận hành không được đưa vào gói bàn giao. Trên máy hiện tại, mã nguồn gốc đã cập nhật tại thư mục dự án trước đó; dữ liệu hiện có vẫn được giữ ở đó. Bản mã nguồn đóng gói là bản sạch và tạo kho dữ liệu riêng khi chạy.

Đây là bản xem thử cục bộ trên máy; chưa cập nhật một dịch vụ hosting cố định hoặc tạo đường dẫn công khai mới.
