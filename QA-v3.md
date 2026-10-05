# BOXANH 3.0 — kiểm tra trước khi bàn giao

Kiểm tra trên Windows, Node.js 24.21.0 và trình duyệt trong ứng dụng, ngày 03/10/2026. Đây là kết quả trong môi trường kiểm tra, không phải cam kết tốc độ trên mọi điện thoại hoặc mạng.

## Những nguyên nhân đã xử lý

- Bản trước vẫn render WebGL liên tục khi người xem đã bấm dừng. Bản mới tải Three.js/Draco/mô hình sau khi bấm khám phá; render tối đa khoảng 30 lần/giây khi tự xoay, ngừng vòng lặp khi dừng, cuộn trang, ra khỏi vùng xem hoặc tab bị ẩn. Xoay thủ công và đổi kích thước chỉ yêu cầu vẽ khi cần. Hình cuối vẫn hiển thị khi ngừng render.
- Bỏ hiệu ứng đọc kích thước và ghi CSS tại mỗi sự kiện rê chuột, viền gradient có mask và tilt trên ảnh lớn. Viền tương tác sử dụng trạng thái hover/focus nhẹ.
- Bỏ blur ở thanh điều hướng cố định, chuyển động nổi liên tục và ẩn/hiện cả khối lớn khi cuộn. Website sử dụng cuộn tự nhiên của trình duyệt.
- Liên kết trong cùng trang giữ nguyên DOM, dữ liệu biểu mẫu và mô hình đã mở. Trước đây các liên kết này dựng lại trang rồi cuộn đến đích.
- Trang chủ và trang dịch vụ được render từ máy chủ với cùng cấu hình giá mà JavaScript sử dụng. Nội dung có ngay trong HTML; không chờ API cấu hình mới dựng trang. Các module được tải trước; font nằm trên server với giấy phép OFL.
- Tệp tĩnh có gzip, ETag, phản hồi HEAD và bộ nhớ đệm theo thời gian sửa tệp. API và ảnh khảo sát riêng vẫn dùng cơ chế kiểm soát truy cập hiện có. SQLite có busy timeout để hai server nội bộ/công khai không lỗi ngay khi gặp khóa ngắn.

## Kết quả

- `npm run check`: đạt cho server và toàn bộ module ứng dụng.
- `npm test`: 11/11 đạt. Bao gồm lưu đơn/ảnh riêng, tra cứu theo điện thoại, giảm phí thu mua, ký gửi chỉ đối soát sau khi bán, kiểm đếm hộp, quyền quản trị, HTML từ server, nén tệp và ETag.
- 360px: tám trang khách hàng được kiểm tra; không tràn chiều ngang hoặc khối nội dung. Trang gửi đồ được kiểm tra lại sau khi biểu mẫu hoàn tất tải.
- 390px: kiểm tra và chụp trang chủ, menu điện thoại và các khối nội dung mới.
- 768px: trang chủ, dịch vụ, đặt lịch và gửi đồ không tràn chiều ngang.
- 1440px: trang chủ và trang dịch vụ không tràn chiều ngang; kiểm tra 3D và các thao tác mới.
- Bảng so sánh có vùng vuốt riêng trên điện thoại. Thanh mục lục cũng cuộn ngang riêng; hai vùng này không làm rộng toàn trang.
- Ước tính Trọn gói, 12 hộp, 8 km: **574.000đ** theo giá dự kiến hiện tại. Bật so sánh khác biệt ẩn đúng ba dòng quyền lợi giống nhau.
- Checklist: chọn hai mục hiển thị 2/6, tải lại vẫn 2/6, đặt lại về 0/6. Chỉ lưu trong localStorage, không gửi lên server.
- Mô hình 3D tải và hiển thị qua link công khai; dừng, xoay trái và trở về góc ban đầu hoạt động. Nhấn Bảng giá giữ nguyên canvas. Sang trang dịch vụ giải phóng mô hình.
- Đo cuộn bằng bàn phím trong một lượt kiểm tra: 101 mẫu khung hình khi cuộn, trung vị 16,7ms, p95 16,8ms, không có mẫu trên 50ms; một long task 66ms, layout shift ghi nhận trong lượt đo là 0. Thời lượng mẫu ngắn, không dùng để suy ra mức cải thiện phần trăm hoặc bảo đảm 60fps trên mọi máy. Các lượt đo trước dùng cách lấy tiêu điểm khác, không dùng làm so sánh định lượng.
- Bản công khai: trang và ảnh tải được; `/api/admin/dashboard` bị chặn 403. Đã gặp một lần kết nối Quick Tunnel hết thời gian và tự nối lại. Đây là link xem thử, cần hosting riêng để vận hành ổn định 24/7.

## Ảnh kiểm tra

Ảnh trang chủ máy tính, trang chủ điện thoại, trang dịch vụ và mô hình nằm trong thư mục `outputs/` cùng mã nguồn. Font, ảnh chụp và tài sản 3D có nguồn trong `asset-manifest.json`.

Chưa kiểm tra trên thiết bị iPhone/Android thật hoặc mạng di động thật. Bảng giá vẫn dự kiến; mẫu hộp và danh mục hàng thực tế cần chủ dự án cập nhật.
