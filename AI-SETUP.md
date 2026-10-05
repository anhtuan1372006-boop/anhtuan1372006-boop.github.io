# Trợ lý Bơ — cấu hình AI hội thoại

Bơ có trang riêng `/tro-ly-ai`, robot tím/cam ở đầu trang chủ, cẩm nang 24 chủ đề về các chức năng của BOXANH, lối mở tới từng chức năng và công cụ chuẩn bị đặt lịch. Cẩm nang, điều hướng và bản nháp đặt lịch dùng được khi chưa cấu hình AI. Trạng thái trên giao diện phân biệt rõ cẩm nang và AI tạo câu trả lời.

## Bật AI thật

1. Chủ dự án tạo khóa riêng tại [trang khóa API của OpenAI](https://platform.openai.com/api-keys). Cần tài khoản API có khả năng sử dụng mô hình đã chọn. Không gửi khóa trong chat, không đưa vào HTML/JavaScript phía khách và không commit lên GitHub.
2. Trên máy chủ chạy `server.mjs`, tạo hoặc sửa `.env` riêng ở thư mục dự án. `.env` đã nằm trong `.gitignore`. Chỉ thêm các biến cần thiết, giữ nguyên cấu hình đang dùng:

```dotenv
OPENAI_API_KEY=
OPENAI_MODEL=gpt-5.4-mini
BOXANH_AI_ENABLED=1
BOXANH_AI_DAILY_LIMIT=100
```

Điền khóa thật vào `OPENAI_API_KEY` bằng trình soạn thảo riêng trên máy chủ. `gpt-5.4-mini` là mô hình mặc định có [hỗ trợ Responses và function calling](https://developers.openai.com/api/docs/models/gpt-5.4-mini). Có thể thay mô hình tương thích theo tài khoản. Chi phí API phát sinh theo việc sử dụng; cấu hình giới hạn chi tiêu trong tài khoản nhà cung cấp.

3. Khởi động lại tiến trình Node để tải `.env`. Cập nhật giao diện không cần nhúng khóa. Nếu dùng Docker, truyền biến bằng `--env-file` hoặc cơ chế secrets của máy chủ; không COPY `.env` vào image.
4. Kiểm tra `GET /api/assistant/status` trả `ready:true`. Trạng thái này xác nhận có cấu hình khóa, chưa xác nhận khóa hợp lệ hay còn hạn mức. Mở `/tro-ly-ai`, đồng ý gửi nội dung đến AI và thử một câu hỏi. Nếu khóa/model/hạn mức không phù hợp, trang báo lỗi kết nối thay vì giả lập câu trả lời.

Để ngừng AI, đặt `BOXANH_AI_ENABLED=0` rồi khởi động lại. Cẩm nang và các biểu mẫu vẫn dùng được.

## GitHub Pages và máy chủ

GitHub Pages chỉ phục vụ giao diện. Khóa phải nằm ở backend Node, không phải repository variable công khai `BOXANH_API_BASE`. Backend cần HTTPS và `PUBLIC_CLIENT_ORIGIN=https://anhtuan1372006-boop.github.io`; biến Actions `BOXANH_API_BASE` trỏ tới backend đó.

Đường hầm thử nghiệm cần máy tính và các tiến trình còn chạy. Để phục vụ liên tục, triển khai backend bằng Dockerfile của dự án với ổ dữ liệu bền vững, HTTPS và mật khẩu quản trị riêng; xem [DEPLOYMENT.md](DEPLOYMENT.md). Nếu URL backend đổi, cập nhật `BOXANH_API_BASE` và chạy lại workflow xuất bản Pages.

## Phạm vi hoạt động

- AI nhận cẩm nang và cấu hình giá/liên hệ hiện hành cho mỗi lượt. Khi thêm chức năng mới, cập nhật `public/assistant-knowledge.js` để thông tin luôn đúng với website.
- `read_website_guide` và `show_website_feature` đọc thông tin, đưa ra lối mở được phép. Không có công cụ truy cập hồ sơ riêng, quản trị, thanh toán hay sửa kho.
- `get_service_quote` dùng bộ tính giá thật của backend. Dọn phòng và bàn giao luôn cần khảo sát. Giá trị trống sử dụng giả định được hiển thị; giá cuối cùng do BOXANH xác nhận.
- `prepare_booking` tạo bản nháp để khách xem và chuyển sang biểu mẫu. Không tạo mã đơn, gửi yêu cầu hoặc giữ lịch. Đồng ý xử lý dữ liệu đặt lịch được khách xác nhận lại trên biểu mẫu.
- Khách có thể dùng nút **Chuẩn bị đặt lịch** ở cả hai chế độ. Bản nháp và giá được xem trước, sau đó thông tin điền vào biểu mẫu hiện có.
- Hội thoại giữ trong bộ nhớ của phiên trình duyệt, không ghi vào SQLite của BOXANH. Câu trả lời có thể được sao chép. Cuộc trò chuyện mới có hộp xác nhận. Tải lại trang sẽ bỏ hội thoại.
- Chế độ AI chỉ gửi hội thoại sau khi khách đồng ý. Yêu cầu nhà cung cấp dùng `store:false`; điều này không phải cam kết nhà cung cấp không xử lý/lưu dữ liệu theo chính sách của họ. Xem [hướng dẫn dữ liệu API của OpenAI](https://developers.openai.com/api/docs/guides/your-data).
- Khóa luôn ở backend. Tin nhắn có giới hạn, vai trò system từ khách bị từ chối; công cụ kiểm tra đầu vào, chỉ dùng đường dẫn BOXANH; lỗi nhà cung cấp được rút gọn. Model vẫn có thể trả lời sai, nên quyết định về lịch/giá/đền bù cần nhân sự xác nhận.
- Bản thử nghiệm giới hạn ba lượt AI đang chạy đồng thời, 20 yêu cầu/10 phút theo địa chỉ kết nối và mặc định 100 lượt/ngày. Bộ đếm nằm trong bộ nhớ, đặt lại khi khởi động server. Đây không thay thế hạn mức chi tiêu của nhà cung cấp; khi chạy nhiều máy chủ cần giới hạn tập trung và chống lạm dụng phù hợp.

## Kiểm tra trước vận hành

Chạy `npm run build`, `npm run check`, `npm test`. Bộ kiểm tra dùng mô phỏng API, không gọi mô hình trả phí. Chỉ một lượt kiểm tra với khóa thật mới xác nhận kết nối AI thực tế.

Thử trên trình duyệt: tư vấn gói, tính giá, dọn phòng cần khảo sát, ký gửi không trừ phí trước, mở tra cứu, chuẩn bị lịch rồi sửa thông tin, dừng câu trả lời, mất kết nối, điện thoại và lựa chọn giảm chuyển động. Không gửi đơn thử vào dữ liệu khách thật.
