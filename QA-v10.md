# BOXANH v10 · Kiểm tra giao diện, video và GitHub Pages

Ngày kiểm tra: 05/10/2026. Báo cáo v7/v8/v9 là lịch sử; tài liệu này mô tả bản hiện hành.

## Thay đổi

- Cụm giới thiệu lớn chỉ ở trang chủ, ẩn ngay từ HTML server trên trang con, trước khi JavaScript chạy. Thanh logo/menu, nút quay lại và breadcrumb gọn được dùng chung.
- Chuyển trọ: nền xanh sâu và sơ đồ hành trình A–B. Dọn phòng: ảnh lớn, nền xanh sáng và tab chọn khu vực. Bàn giao: bố cục sổ kiểm tra và danh sách chuẩn bị tương tác. Hộp: bố cục tím với các giai đoạn vòng đời. Đồ thừa: ảnh ghép, ba phương án riêng, chuyển sang biểu mẫu có sẵn lựa chọn. Hướng dẫn: mục lục, video và checklist. Ước tính: công cụ tính giá cùng phần giải thích.
- Video v10 mới: 1920×1080, 20 fps, H.264/AAC, 132,3 giây, 13 chương, giọng tiếng Việt và phụ đề. Font Be Vietnam Pro/BOXANH Serif đồng bộ website. Video là hướng dẫn bằng ảnh chụp thật có thuyết minh; không phải bản ghi thao tác chuột liên tục.
- Xuất 17 đường dẫn công khai cho GitHub Pages; xử lý dấu / cuối đường dẫn và nối API riêng. CORS giới hạn origin, không cookie, không mở quản trị.

## Kết quả kiểm tra tại máy

- Build client/SSR và kiểm tra cú pháp đạt.
- 18 kiểm tra tích hợp đạt: đặt lịch, khảo sát, ảnh riêng tư, chống gửi trùng, tra cứu, đồ cũ, đối soát, CSKH và quản trị; bổ sung kiểm tra trang con và CORS GitHub Pages. Test dùng dữ liệu tạm.
- 20 đường dẫn × 4 độ rộng 320/390/768/1265 px: 80 lượt đọc bố cục. Không phát hiện tràn ngang, tiêu đề vượt khối hoặc cụm giới thiệu lớn hiển thị nhầm trên trang con.
- Đã xem ảnh desktop và điện thoại của các trang dịch vụ; kiểm tra font, nút, khối nội dung. Đây là viewport trình duyệt, không phải thử trên tất cả điện thoại vật lý.
- 156 ký tự Latin/tiếng Việt đang hiển thị được kiểm tra với 5 trọng lượng sans và 2 kiểu serif; không thiếu glyph, không có ký tự thay thế, serif nghiêng dùng font cục bộ và khoảng cách chữ bình thường.
- Tương tác thử: đổi tab dọn phòng bằng click và phím mũi tên; tick bàn giao cập nhật 2/5; đổi vòng đời hộp; chọn ký gửi chuyển sang biểu mẫu chọn đúng phương án. Không gửi đơn khách hàng từ đợt kiểm tra trình duyệt này.
- Video tải được bằng byte range; MIME video và phụ đề đúng. Đã kiểm tra ảnh dựng ở chương trang chủ, bàn giao và liên hệ, đầy đủ dấu tiếng Việt.
- Trước công khai, script quét file Git để phát hiện thư mục dữ liệu riêng và mẫu khóa phổ biến. Đây là kiểm tra phòng ngừa theo phạm vi script, không phải chứng nhận kiểm toán bảo mật.

## Kiểm tra bản GitHub công khai

Workflow Publish BOXANH chạy thành công tại commit 6e19cb4; build, kiểm tra cú pháp, test và xuất bản đạt. Link: https://anhtuan1372006-boop.github.io/.

17 đường dẫn công khai trả về HTTP 200; HTML trang con ẩn đúng cụm giới thiệu lớn. Video MP4, phụ đề VTT và font serif nghiêng tải được với MIME đúng. Video phát trực tiếp từ GitHub: readyState 4, thời lượng 132,42 giây theo trình duyệt, không có lỗi media. Thời lượng nội dung theo storyboard là 132,3 giây.

Đã thử chuyển từ thẻ dọn phòng tại trang chủ sang trang riêng và quay lại, tính giá Trọn gói 500.000đ và đổi sang thuê 10 hộp 200.000đ qua API. Không phát hiện lỗi console trên các màn hình thử này. Ảnh trang dọn phòng công khai không thiếu tài nguyên hoặc tràn ngang. Không gửi yêu cầu khách hàng khi kiểm tra bản công khai.

## Giới hạn vận hành hiện tại

Frontend GitHub Pages hoạt động độc lập; API hiện qua đường hầm tới máy chủ trên máy tính. Đặt lịch, tra cứu, đồ cũ và CSKH cần API hoạt động. Để phục vụ 24/7 cần hosting backend riêng. Giá tham khảo, QR hộp/tem niêm phong còn là minh họa; chưa có thanh toán, GPS hoặc SMS tự động. Chức năng hiện có được giữ lại, không biến quy trình minh họa thành cam kết thực tế.
