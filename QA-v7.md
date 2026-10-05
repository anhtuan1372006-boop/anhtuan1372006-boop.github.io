# BOXANH v7 — Bản kiểm tra giao diện nhiều trang

Ngày kiểm tra: 04/10/2026.

## Nội dung

Trang chủ thu gọn thành giới thiệu, ba dịch vụ chính, bốn lối vào chức năng, video và lời mời gửi yêu cầu. Bảy trang React được render từ máy chủ và có URL riêng:

| URL | Nội dung và bố cục |
| --- | --- |
| /chuyen-tro | Hình dịch vụ, ước tính, hành trình chuyển và giao nhận |
| /don-phong | Không gian phòng, lựa chọn khu vực dọn, ba bước khảo sát |
| /ban-giao | Thẻ ghi nhận, các nhóm việc kiểm tra và phạm vi phát sinh |
| /hop-tai-su-dung | Hệ thống hộp, vòng đời tương tác, điều kiện thuê và thẻ QR minh họa |
| /song-xanh | Thu mua, ký gửi, phân loại và dẫn sang danh mục đồ được tiếp nhận |
| /huong-dan | Video, checklist lưu trên thiết bị, hướng dẫn và hỏi đáp |
| /uoc-tinh | Công cụ ước tính theo máy chủ, bảng giá và điều kiện từng gói |

Các trang nghiệp vụ /dat-lich, /gui-do, /do-cu, /tra-cuu, /ho-tro, /dich-vu, /ve-boxanh, /chinh-sach, /hop-minh-hoa và /quan-tri vẫn tồn tại. Chỉ phần trình bày hộp 3D được thay theo yêu cầu; thông tin hộp và quản lý tồn hộp vẫn giữ.

## Tương tác

- Thẻ dịch vụ là liên kết toàn khối, có nhãn Khám phá/Mở chi tiết và mũi tên; hover và focus có phản hồi.
- Quay lại dùng lịch sử điều hướng của website; mở trực tiếp trang con thì quay về trang chủ. Có đường dẫn Trang chủ trên thanh vị trí.
- Dữ liệu biểu mẫu đặt dịch vụ được giữ trong bộ nhớ khi chuyển trang và quay lại, không lưu bền sau khi tải lại trình duyệt.
- Khi chuyển từ gói chuyển trọ sang dọn phòng/bàn giao, tham số goi luôn chọn đúng dịch vụ và trở về bước đầu.
- Nhân vật minh họa mặc đồng phục xanh, cầm hộp bằng hai tay, tự chuyển động nhẹ. Có nút tạm dừng, tôn trọng prefers-reduced-motion và dừng khi ra khỏi màn hình.
- Lời chào tiếng Việt được phát bằng nút Nghe lời chào. Không tự phát âm thanh khi mở trang.
- Video MP4 1920×1080, khoảng 89,6 giây, có thuyết minh tiếng Việt, phụ đề VTT và chữ hướng dẫn trong hình. Nội dung dùng ảnh các màn hình thực tế, không gửi đơn thử vào dữ liệu đang vận hành.
- Media hỗ trợ byte ranges để phát và tua; tải khi người xem chọn phát.

## Kiểm tra

- Build client và SSR, kiểm tra cú pháp.
- 15 kiểm thử tích hợp sử dụng SQLite và ảnh thử tách biệt: báo giá, đơn, thu mua, ký gửi, CSKH, trạng thái, tồn hộp, xác thực và quyền truy cập; bổ sung SSR trang con và phát media theo range.
- Kiểm tra trình duyệt: liên kết trang con, biểu mẫu bốn bước, dữ liệu khi quay lại, tab dọn phòng, chu kỳ hộp, checklist, video, lời chào và menu điện thoại.
- Kiểm tra điện thoại tại 390 px và 320 px: không tràn ngang; hình và nội dung còn nằm trong khung.
- Link công khai phục vụ các trang khách hàng và video; /quan-tri cùng /api/admin vẫn trả 403 trên máy chủ public.

## Tài liệu thiết kế tham khảo

- [MoMo](https://www.momo.vn/): cách dẫn từ nhóm tiện ích sang các trang tính năng, nhãn hành động rõ ràng.
- [Dịch vụ chuyển nhà Ahamove](https://ahamove.com/ahamove-ra-mat-dich-vu-chuyen-nha-tai-viet-nam): trang chi tiết theo một dịch vụ, đường dẫn vị trí, phạm vi và bảng giá được tách rõ.

BOXANH sử dụng thiết kế và nội dung riêng. Không sao chép hình ảnh, biểu tượng hoặc nội dung thương hiệu của các trang tham khảo. Nhân vật là hình minh họa tạo bằng công cụ AI, không được giới thiệu như ảnh nhân viên thực tế.

## Triển khai

Mã đã cập nhật trong thư mục dự án và BOXANH.code-workspace. Máy chủ nội bộ chạy cổng 4173, public preview chạy 4175; giữ tunnel đang hoạt động để không đổi URL. Đây là link tạm: cần máy tính, máy chủ và tunnel tiếp tục chạy. Bản này chưa có tên miền và hosting cố định.
