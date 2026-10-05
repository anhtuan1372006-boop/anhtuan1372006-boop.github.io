# Ghi chú thiết kế BOXANH v5

Hướng thiết kế: chuyển trọ là một khởi đầu mới; vật liệu hộp, không gian sống và việc dùng lại đồ là các điểm nhận diện. Trang thay đổi giữa bố cục lớn/nhỏ, sáng/tối, ảnh/chữ và phần tương tác.

Các tệp mới: public/studio-view.js (bố cục trang chủ), public/studio.css (hệ thống thị giác và responsive), public/studio.js (chuyển động và tương tác). app.js và experience.js nối với chức năng sẵn có. Không cần dịch vụ ngoài để tải font hoặc xem ảnh.

Ảnh riêng: public/assets/boxanh-concept.webp, khoảng 202 KB. Công cụ: trình tạo ảnh tích hợp OpenAI. Tóm tắt mô tả ảnh đã yêu cầu: hai hộp nhựa xanh đậm bền, có nắp, một hộp mở chứa vải, sách, đèn nhỏ và cây xanh; không gian studio ấm, ánh sáng tự nhiên, nền ngà, phong cách ảnh sản phẩm chân thực; không chữ, không logo. Đây là hình ý tưởng, không phải sản phẩm BOXANH đã sản xuất hoặc tồn kho thực tế. Mô hình 3D hiện có cũng được ghi nhãn minh họa.

Hiệu ứng có mục đích: khám phá hộp và trạng thái; mở từng bước chuẩn bị; đổi phương án đồ cũ; phản hồi giá sau khi nhập. Chuyển động khi cuộn ở khu có nút điều khiển chỉ đổi độ mờ, giúp nút giữ vị trí ổn định. Trên thiết bị không có con trỏ, không có chuyển động nút theo chuột. prefers-reduced-motion tắt hiệu ứng chuyển động.

Các giới hạn nội dung giữ rõ trong giao diện: giá tham khảo; khảo sát trước xác nhận lịch; chưa có bảng giá dọn/bàn giao; chưa có đánh giá khách/ảnh vận hành thật; chưa chốt hộp, tải trọng, bảo hiểm hay mức bồi thường. Nội dung định giá đối tác và đánh giá nội bộ không được đưa vào giao diện khách hàng.
