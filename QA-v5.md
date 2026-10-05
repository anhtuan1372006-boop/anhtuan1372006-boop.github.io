# Kiểm tra BOXANH v5 — 04/10/2026

13/13 kiểm thử tích hợp đạt: HTML render từ server, tài nguyên/gzip/ETag, cấu hình, tính phí, xác thực quản trị, lưu đơn và ảnh riêng, chống gửi trùng, tra cứu đúng điện thoại, trạng thái dịch vụ và tồn hộp, giảm phí thu mua, ký gửi sau bán, dọn/bàn giao không trừ tồn hộp, CSKH và đăng xuất.

Kiểm tra giao diện bằng trình duyệt tại 1366×900, 390×844 và 320×740. Không tràn ngang ở các kích thước đã kiểm tra. Đã xem trang chủ, dịch vụ, biểu mẫu dọn phòng, CSKH và danh mục đồ cũ. Đã kiểm tra mở mô hình 3D, đổi trạng thái hộp, mở bước hành trình, chọn nhóm báo giá, thay số hộp, chuyển sang biểu mẫu đúng dịch vụ, đổi tab đồ không mang theo và menu điện thoại. Console không ghi nhận lỗi trong phiên kiểm tra.

Tinh chỉnh qua kiểm tra: khoảng trắng giữa các dòng khi bỏ ngắt dòng trên mobile; mô tả khảo sát theo dịch vụ; màu lỗi biểu mẫu xuất hiện sau tương tác; bỏ dịch chuyển vị trí ở các khu có điều khiển; thanh liên hệ không xuống hai dòng ở màn hình nhỏ.

Kiểm tra luồng tạo dữ liệu thực hiện trên server/dữ liệu tạm, không tạo hồ sơ khách thử trong dữ liệu đang dùng. Kiểm tra bố cục không phải chứng nhận hỗ trợ tất cả trình duyệt hoặc kiểm toán toàn diện về khả năng tiếp cận.
