# BOXANH v9 — Sửa lỗi chữ tiếng Việt và kiểm tra phát hành

Ngày kiểm tra: 05/10/2026.

## Nguyên nhân và thay đổi

Chữ trên trang ước tính không bị sai nội dung Unicode. Font Georgia nghiêng được dùng trước đây thiếu một số ký tự tiếng Việt, khiến trình duyệt ghép chữ từ font khác ngay trong từ. Quy tắc giãn chữ âm ở tiêu đề làm khác biệt này rõ hơn. Đợt v8 chỉ kiểm tra bảng ký tự Be Vietnam Pro, nên đã bỏ sót font serif nghiêng.

Thay Georgia ở toàn bộ giao diện React bằng Noto Serif, đặt tên nội bộ BOXANH Serif. Có hai tệp WOFF2 riêng cho kiểu thường và kiểu nghiêng thực, độ đậm 400. Mỗi tệp chứa cùng lúc Latin và tiếng Việt, giữ bảng định hình chữ. Không ghép nhiều font để dựng một từ. Bỏ giãn chữ âm ở câu nhấn serif, tắt tạo chữ nghiêng/đậm giả, giữ cách ngắt dòng theo từ. Preload bản nghiêng và phục vụ font trực tiếp từ máy chủ của website.

Nguồn chính thức: https://github.com/google/fonts/tree/main/ofl/notoserif. Giấy phép OFL tại licenses/NotoSerif-OFL.txt. Bảng nguồn và SHA-256 tại public/assets/fonts/boxanh-serif-manifest.json. Công cụ tạo font: scripts/build-vietnamese-serif.py, cần nguồn TTF và fontTools/Brotli.

Không bỏ chức năng hoặc cụm nhận diện đầu trang. Dữ liệu khách hàng đang vận hành được giữ nguyên.

## Kiểm tra

- Build client/SSR và kiểm tra cú pháp thành công.
- 16 bài kiểm tra tích hợp đạt; dùng dữ liệu tạm riêng. Bài kiểm tra mới xác nhận kiểu thường/nghiêng được khai báo, tải đúng WOFF2 và CSS đã biên dịch không còn Georgia/Times New Roman.
- Đọc giao diện thực trong trình duyệt: 20 đường dẫn tại 320, 390, 768 và 1265 px, tổng 80 lượt. Không có tràn ngang hoặc tiêu đề tràn khung. Đây là kiểm tra viewport trong trình duyệt hiện có, không phải chứng nhận mọi trình duyệt và mọi thiết bị thực.
- Kiểm tra bảng ký tự của 5 độ đậm Be Vietnam Pro và cả hai kiểu BOXANH Serif với 158 ký tự Latin/tiếng Việt xuất hiện trong văn bản đã đọc. Không có ký tự thiếu. Có kiểm tra cờ italic thật, SHA-256 tài sản, Unicode NFC và ký tự thay thế. Công cụ: scripts/audit-typography-v9.py.
- Xem ảnh chụp tám khu vực tiêu đề tại trang chủ, chuyển trọ, dọn phòng, bàn giao, hộp tái sử dụng, sống xanh, hướng dẫn và ước tính trên máy tính và điện thoại. Dòng “Thống nhất sau khảo sát.” đã liền chữ và xuống dòng theo từ ở màn hình nhỏ.

Báo cáo tại work/qa-v9/report.json, work/qa-v9/font-audit.json và ảnh chụp trong cùng thư mục. Thư mục work và các công cụ chạy riêng trong .runtime không đưa vào ZIP mã nguồn.

## Chia sẻ

Dùng máy chủ công khai hiện có tại cổng 4175, chặn quản trị. scripts/rotate-share-link.ps1 tạo địa chỉ Quick Tunnel mới và chỉ ghi địa chỉ sau khi kiểm tra trang chủ hoạt động. Link cần máy tính và tiến trình máy chủ tiếp tục chạy. Giá vẫn là tham khảo, chưa phải bảng giá chính thức.
