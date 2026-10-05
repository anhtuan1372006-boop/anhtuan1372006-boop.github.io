# Kiểm tra BOXANH phiên bản 2

- 9 bài kiểm thử nghiệp vụ qua Node test runner đều đạt: đặt lịch, chống gửi trùng, ảnh riêng tư, báo giá, xác minh số điện thoại khi tra cứu, tiến trình vận chuyển, giữ/thu hồi hộp, giảm phí thu mua, ký gửi và đăng ảnh hàng hóa.
- Syntax check: server.mjs, app.js, experience.js, crate.js đạt.
- Trang chủ được render trực tiếp ở 360, 390, 768 và 1440 px; không có tràn ngang ở các kích thước đã đo. Ở 360 px, kiểm tra thêm đặt lịch, dịch vụ, gửi đồ, danh mục, tra cứu, giới thiệu và chính sách. Khối upload trang gửi đồ từng tràn và đã được sửa bằng min-width:0/minmax(0,1fr); xác minh lại scrollWidth bằng clientWidth và không còn phần tử vượt khung.
- Ước tính nhanh: Trọn gói + 12 hộp + 8 km = 574.000đ. Bấm tiếp tục giữ đúng gói và số hộp trong biểu mẫu; chưa tạo yêu cầu dịch vụ.
- Hành trình chuyển trọ: chọn tab Giao hộp & phân loại đổi nội dung đúng, ARIA tab/panel đồng bộ; có phím mũi tên, Home/End.
- Hộp 3D tải lazy, render bằng WebGL, nút dừng/tiếp tục cập nhật aria-pressed, góc nhìn đặt lại. Model đã bỏ texture không dùng và đổi vật liệu xanh. Kiểm tra bản local và qua HTTPS công khai. Reduced-motion được triển khai ở CSS/JS, không thay đổi thiết lập toàn hệ thống của người dùng để giả lập.
- Link công khai HTTPS trả 200; /api/config xác định Vinh, Nghệ An và 0332357455. POST /api/quote hoạt động qua Origin công khai. /api/admin/dashboard trả 403; link quản trị được ẩn trên giao diện công khai.
- VS Code được xác minh qua accessibility: BOXANH (Workspace), thư mục outputs/boxanh và các file nguồn hiện trong Explorer. Workspace, F5 debug và Tasks đã có.

Chưa kiểm tra trên thiết bị vật lý iOS/Android; các kích thước trên được kiểm tra trong browser viewport. Giá, ảnh phòng và bộ sưu tập vẫn được ghi rõ là tham khảo. Link hiện tại là Quick Tunnel để dùng thử, chưa phải hosting cam kết uptime 24/7.
