# Trợ lý Bơ — cấu hình AI hội thoại

Bơ có trang riêng `/tro-ly-ai`, robot tím/cam ở đầu trang chủ, cẩm nang 24 chủ đề về các chức năng của BOXANH, lối mở tới từng chức năng và công cụ chuẩn bị đặt lịch. Cẩm nang, điều hướng và bản nháp đặt lịch dùng được khi chưa cấu hình AI. Trạng thái trên giao diện phân biệt rõ cẩm nang và AI tạo câu trả lời.

## Bật mô hình chạy trên máy BOXANH

Bơ hỗ trợ hai cách tạo hội thoại thật: OpenAI API hoặc mô hình ngôn ngữ chạy trên máy BOXANH bằng Ollama. Chế độ trên máy không yêu cầu khóa OpenAI và không gửi hội thoại tới OpenAI. Đây là sử dụng mô hình có sẵn với kiến thức website, không phải tự huấn luyện một mô hình ngang ChatGPT từ đầu.

1. Cài Ollama từ [nguồn chính thức cho Windows](https://docs.ollama.com/windows). Bản standalone dùng trong dự án đặt ở `.runtime/`; kiểm tra SHA-256 của bản phát hành trước khi chạy. Không đưa tệp thực thi hay trọng số lên Git.
2. Chạy dịch vụ Ollama chỉ trên `127.0.0.1:11434`, rồi tải [Qwen3 4B Instruct](https://ollama.com/library/qwen3:4b-instruct) bằng `ollama pull qwen3:4b-instruct`. Trọng số khoảng 2,5 GB; bản Windows và các thư viện cần thêm dung lượng. Cần đủ RAM, đĩa và thời gian tải.
3. Cấu hình riêng cho tiến trình Node hoặc `.env`:

```dotenv
BOXANH_AI_PROVIDER=local
BOXANH_LOCAL_URL=http://127.0.0.1:11434
BOXANH_LOCAL_MODEL=qwen3:4b-instruct
BOXANH_AI_ENABLED=1
BOXANH_AI_DAILY_LIMIT=100
```

4. Khởi động tiến trình Node với cấu hình mới. `/api/assistant/status` kiểm tra dịch vụ và tên mô hình đã tải, trả `dataDestination:boxanh`. Giao diện hiện rõ AI trên máy BOXANH và yêu cầu đồng ý đúng nơi xử lý. Không công khai trực tiếp cổng Ollama; khách chỉ dùng API BOXANH có giới hạn.

Bộ tích hợp tìm thông tin phù hợp trong cẩm nang, cung cấp mục lục toàn bộ chức năng, giữ tối đa tám tin gần nhất/8.500 ký tự cho mô hình trên máy và dùng năm công cụ có kiểm tra đầu vào. Số tiền vẫn do bộ tính giá BOXANH tạo. Không có công cụ tự gửi đơn hay đọc hồ sơ riêng. Mỗi máy xử lý một lượt AI cùng lúc, tối đa 240 giây/lượt; lỗi hoặc mất kết nối không được ghi là phản hồi hoàn tất. CPU có thể trả lời chậm; cần kiểm thử hội thoại thật trước khi vận hành.

Với yêu cầu tính giá có dịch vụ/số liệu rõ hoặc sửa số liệu trong hội thoại, hệ thống giữ dữ kiện gần nhất và gọi bộ tính giá trực tiếp. Ví dụ Trọn gói, 15 hộp, 8 km, đi tầng 2 không thang máy, đến tầng trệt → 654.000đ; đổi 12 hộp, 6 km và giữ các điều kiện khác → 588.000đ. Không dùng suy đoán của mô hình để thay phép tính. Câu hỏi nhiều phương án hoặc định giá đồ cũ vẫn cần tư vấn/làm rõ. Khi mô hình đưa ra số tiền không khớp nguồn đã cung cấp, câu trả lời giá không được phát ra như kết quả đã kiểm chứng.

Giao diện nhận phản hồi dạng NDJSON và vẫn tương thích SSE của bản trước. [Quick Tunnel không hỗ trợ SSE](https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/); vì vậy cần kiểm tra NDJSON trên đường link công khai. Server gửi heartbeat để giữ kết nối khi mô hình đang xử lý. Bản dùng CPU vẫn có thể chậm, đặc biệt khi mới nạp mô hình; đây không phải cam kết về tốc độ hoặc chất lượng ngang ChatGPT.

Máy và dịch vụ Ollama/Node phải còn chạy để AI hoạt động. GitHub Pages chỉ phục vụ giao diện; chế độ này không tạo máy chủ 24/7 trên GitHub. Khi cần phục vụ nhiều khách, triển khai lên máy chủ có tài nguyên phù hợp và giới hạn tập trung. Hệ thống không ghi hội thoại vào cơ sở dữ liệu hoặc log của ứng dụng; nội dung được xử lý trong RAM của máy chủ.

## Bật OpenAI API

1. Chủ dự án tạo khóa riêng tại [trang khóa API của OpenAI](https://platform.openai.com/api-keys). Cần tài khoản API có khả năng sử dụng mô hình đã chọn. Không gửi khóa trong chat, không đưa vào HTML/JavaScript phía khách và không commit lên GitHub.
2. Trên máy chủ chạy `server.mjs`, tạo hoặc sửa `.env` riêng ở thư mục dự án. `.env` đã nằm trong `.gitignore`. Chỉ thêm các biến cần thiết, giữ nguyên cấu hình đang dùng:

```dotenv
OPENAI_API_KEY=
OPENAI_MODEL=gpt-6.1-sol
BOXANH_AI_REASONING=low
BOXANH_AI_ENABLED=1
BOXANH_AI_DAILY_LIMIT=100
```

Điền khóa thật vào `OPENAI_API_KEY` bằng trình soạn thảo riêng trên máy chủ. Bản v12 mặc định dùng `gpt-6.1-sol` qua Responses API; chọn `reasoning.effort=low` để ưu tiên tốc độ hội thoại. Đây là lựa chọn theo [hướng dẫn GPT-6 của OpenAI](https://developers.openai.com/api/docs/guides/latest-model), chưa phải xác nhận tài khoản của bạn được cấp quyền mô hình. Có thể đổi mô hình tương thích trong cấu hình. Chi phí API phát sinh theo việc sử dụng; cấu hình giới hạn chi tiêu trong tài khoản nhà cung cấp.

3. Khởi động lại tiến trình Node để tải `.env`. Cập nhật giao diện không cần nhúng khóa. Nếu dùng Docker, truyền biến bằng `--env-file` hoặc cơ chế secrets của máy chủ; không COPY `.env` vào image.
4. Kiểm tra `GET /api/assistant/status` trả `ready:true`. Trạng thái này xác nhận có cấu hình khóa, chưa xác nhận khóa hợp lệ hay còn hạn mức. Mở `/tro-ly-ai`, đồng ý gửi nội dung đến AI và thử một câu hỏi. Nếu khóa/model/hạn mức không phù hợp, trang báo lỗi kết nối thay vì giả lập câu trả lời.

Để ngừng AI, đặt `BOXANH_AI_ENABLED=0` rồi khởi động lại. Cẩm nang và các biểu mẫu vẫn dùng được.

## GitHub Pages và máy chủ

GitHub Pages chỉ phục vụ giao diện. Khóa phải nằm ở backend Node, không phải repository variable công khai `BOXANH_API_BASE`. Backend cần HTTPS và `PUBLIC_CLIENT_ORIGIN=https://anhtuan1372006-boop.github.io`; biến Actions `BOXANH_API_BASE` trỏ tới backend đó.

Đường hầm thử nghiệm cần máy tính và các tiến trình còn chạy. Để phục vụ liên tục, triển khai backend bằng Dockerfile của dự án với ổ dữ liệu bền vững, HTTPS và mật khẩu quản trị riêng; xem [DEPLOYMENT.md](DEPLOYMENT.md). Nếu URL backend đổi, cập nhật `BOXANH_API_BASE` và chạy lại workflow xuất bản Pages.

## Phạm vi hoạt động

- AI nhận cẩm nang và cấu hình giá/liên hệ hiện hành cho mỗi lượt. Khi thêm chức năng mới, cập nhật `public/assistant-knowledge.js` để thông tin luôn đúng với website.
- `read_website_guide` và `show_website_feature` đọc thông tin, đưa ra lối mở được phép. Không có công cụ truy cập hồ sơ riêng, quản trị, thanh toán hay sửa kho.
- `suggest_next_steps` chọn tối đa ba gợi ý từ các nhu cầu đã xác định; giao diện hiển thị nút để khách hỏi tiếp. Không chấp nhận URL hoặc lệnh tùy ý.
- `get_service_quote` dùng bộ tính giá thật của backend. Dọn phòng và bàn giao luôn cần khảo sát. Giá trị trống sử dụng giả định được hiển thị; giá cuối cùng do BOXANH xác nhận.
- `prepare_booking` tạo bản nháp để khách xem và chuyển sang biểu mẫu. Không tạo mã đơn, gửi yêu cầu hoặc giữ lịch. Đồng ý xử lý dữ liệu đặt lịch được khách xác nhận lại trên biểu mẫu.
- Khách có thể dùng nút **Chuẩn bị đặt lịch** ở cả hai chế độ. Bản nháp và giá được xem trước, sau đó thông tin điền vào biểu mẫu hiện có.
- Ngay khi mở phòng chat, Bơ chào và hỏi khách đang cần gì, với 10 nhu cầu chính và toàn bộ 24 mục cẩm nang. Lời chào có sẵn, không phát sinh cuộc gọi mô hình tự động khi chỉ mở trang.
- Hội thoại AI gửi lại tối đa 16 tin và 18.000 ký tự, gồm câu trả lời cẩm nang và dữ liệu bản nháp được xem. Tin lỗi/đang viết dở không được phát lại. Mô hình được hướng dẫn nhớ lựa chọn đã có, dùng sửa đổi mới nhất, hỏi từng bước, trả lời nhiều ý và không sao chép cẩm nang một cách máy móc.
- Câu trả lời hỗ trợ đoạn, tiêu đề ngắn, danh sách và in đậm bằng React; không chạy HTML do người dùng hoặc mô hình đưa vào. Có gợi ý tiếp nối, dừng trả lời và thử lại câu hỏi lỗi mà không nhân đôi câu hỏi trước trong ngữ cảnh.
- Hội thoại giữ trong bộ nhớ của phiên trình duyệt, không ghi vào SQLite của BOXANH. Câu trả lời có thể được sao chép. Cuộc trò chuyện mới có hộp xác nhận. Tải lại trang sẽ bỏ hội thoại.
- Chế độ AI chỉ gửi hội thoại sau khi khách đồng ý. Yêu cầu nhà cung cấp dùng `store:false`; điều này không phải cam kết nhà cung cấp không xử lý/lưu dữ liệu theo chính sách của họ. Xem [hướng dẫn dữ liệu API của OpenAI](https://developers.openai.com/api/docs/guides/your-data).

## Kiểm chứng chất lượng

`npm test` kiểm tra ngữ cảnh cẩm nang, thay đổi chủ đề, lịch sử có bản nháp, công cụ gợi ý, nhiều vòng công cụ và giới hạn đầu vào. Các kiểm thử mô hình sử dụng nhà cung cấp giả lập tại máy, không chứng minh chất lượng câu trả lời GPT thực tế.

Sau khi có khóa và hạn mức, cần kiểm tra thực tế ít nhất các tình huống: sinh viên lần đầu; muốn tiết kiệm; đổi số hộp/quãng đường sau báo giá; hỏi “gói đó”; dọn phòng rồi hỏi giá; yêu cầu nhiều dịch vụ; khách vội; sự cố đồ đạc; ký gửi có giảm phí ngay không; hỏi chức năng chưa triển khai. Chỉ đánh giá đạt khi câu trả lời đúng điều kiện kinh doanh, không hỏi lại thông tin đã có, gọi bộ tính giá và không tự xác nhận lịch.

Bản này nâng cấp cách tích hợp, hướng dẫn mô hình và dữ liệu website. Chưa thực hiện fine-tuning hay huấn luyện trọng số, chưa có phép đo chứng minh “thông minh gấp 100 lần”. Không được quảng cáo chatbot như đã đạt chất lượng ChatGPT khi API chưa bật hoặc chưa kiểm chứng thực tế.
- Khóa luôn ở backend. Tin nhắn có giới hạn, vai trò system từ khách bị từ chối; công cụ kiểm tra đầu vào, chỉ dùng đường dẫn BOXANH; lỗi nhà cung cấp được rút gọn. Model vẫn có thể trả lời sai, nên quyết định về lịch/giá/đền bù cần nhân sự xác nhận.
- Bản thử nghiệm giới hạn ba lượt AI đang chạy đồng thời, 20 yêu cầu/10 phút theo địa chỉ kết nối và mặc định 100 lượt/ngày. Bộ đếm nằm trong bộ nhớ, đặt lại khi khởi động server. Đây không thay thế hạn mức chi tiêu của nhà cung cấp; khi chạy nhiều máy chủ cần giới hạn tập trung và chống lạm dụng phù hợp.

## Kiểm tra trước vận hành

Chạy `npm run build`, `npm run check`, `npm test`. Bộ kiểm tra dùng mô phỏng API, không gọi mô hình trả phí. Chỉ một lượt kiểm tra với khóa thật mới xác nhận kết nối AI thực tế.

Thử trên trình duyệt: tư vấn gói, tính giá, dọn phòng cần khảo sát, ký gửi không trừ phí trước, mở tra cứu, chuẩn bị lịch rồi sửa thông tin, dừng câu trả lời, mất kết nối, điện thoại và lựa chọn giảm chuyển động. Không gửi đơn thử vào dữ liệu khách thật.
