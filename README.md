# BOXANH · v10

Website dịch vụ chuyển trọ, dọn phòng và bàn giao tại Vinh, Nghệ An. Trang chủ giới thiệu ngắn; bảy trang chi tiết có bố cục và tương tác riêng. Cụm giới thiệu lớn với bốn thẻ liên hệ và ba dịch vụ minh họa chỉ xuất hiện ở trang chủ. Các trang con dùng thanh điều hướng gọn, nút quay lại và đường dẫn vị trí.

Website: https://anhtuan1372006-boop.github.io/ · Mã nguồn: https://github.com/anhtuan1372006-boop/anhtuan1372006-boop.github.io

Video hướng dẫn v10 dài 132,3 giây, có 13 chương, thuyết minh tiếng Việt và phụ đề. Font trong video đồng bộ Be Vietnam Pro và BOXANH Serif với website. Xem QA-v10.md cho phạm vi kiểm tra và GITHUB-PAGES.md cho cách xuất bản.

**Phạm vi vận hành:** GitHub Pages phục vụ giao diện, hình, font và video. API nhận yêu cầu, tra cứu, đồ cũ và CSKH hiện nối tới máy chủ BOXANH qua đường dẫn HTTPS cấu hình riêng. Khi máy tính/máy chủ API hoặc đường hầm ngừng chạy, các chức năng này không hoạt động; giao diện hiển thị lỗi và giữ thông tin biểu mẫu. Để phục vụ 24/7 cần triển khai máy chủ Node/SQLite lên hosting có ổ dữ liệu bền vững. Không có dữ liệu khách hàng hoặc mật khẩu trong kho công khai.

## Chạy và sửa mã

Cần Node.js 24 trở lên, npm. Mở thư mục này hoặc BOXANH.code-workspace.

```powershell
npm ci
npm run build
npm start
```

Mở http://127.0.0.1:4173/. Sau khi sửa src/, chạy lại npm run build; sau khi thay đổi server hoặc bản SSR, khởi động lại máy chủ. Bộ giao đã có public/portal và dist để chạy bản build hiện tại. F5 vẫn dùng cấu hình Node trong .vscode; dừng bản đang chạy cùng cổng trước khi debug.

```powershell
npm run check
npm test
```

Test dùng máy chủ và thư mục dữ liệu tạm riêng, không ghi vào dữ liệu đang vận hành.

## Công cụ dùng thực tế

- React 19: trang chủ và bảy trang con có các thành phần tương tác, SSR bằng renderToString và hydrateRoot; router hiện có phục vụ các trang nghiệp vụ.
- Tailwind CSS 4 và Vite: build client và SSR. Thiết kế bảy trang con tại src/portal-scenes-v10.jsx và src/scenes-v10.css; src/portal-multipage.jsx điều phối trang. CSS thương hiệu và cụm nhận diện trang chủ được giữ trong các file hiện có.
- shadcn/ui: Button, Tabs, Accordion, Dialog được thêm bằng CLI chính thức và điều chỉnh theo BOXANH. Radix xử lý bàn phím, trạng thái và focus của các thành phần.
- Lucide: icon đồng nhất. Nhân vật tự chuyển động bằng CSS; mô hình hộp 3D đã được thay theo yêu cầu. Hình, font, video và âm thanh được phục vụ tại máy chủ.
- Node 24 / SQLite: API, dữ liệu, ảnh riêng tư và quản trị hiện có. Dockerfile nhiều giai đoạn đã chuẩn bị cả client, SSR và thư viện runtime.

Không cần ghép React, Vue, Svelte vào cùng giao diện. Chưa chuyển sang Next.js hoặc mua VPS. Chi tiết tham khảo và công cụ trong TOOLING-DESIGN-v6.md.

## Chức năng giữ lại

Ước tính giá theo cấu hình máy chủ; chọn gói và đặt lịch 4 bước; yêu cầu khảo sát dọn phòng/bàn giao; ảnh khảo sát riêng tư; chống gửi trùng; tra cứu bằng mã và số điện thoại; tiếp nhận sự cố qua CSKH; thu mua/ký gửi liên kết đơn; danh mục đồ cũ; đăng nhập quản trị; cập nhật đơn, tồn hộp, phân bổ thu mua, bán ký gửi và kết quả xử lý CSKH.

Giá chỉ là tham khảo. Dọn phòng/bàn giao cần khảo sát. Thu mua được đối soát sau thẩm định, đồng ý và tiếp nhận; ký gửi thanh toán sau bán. QR riêng từng hộp, tem niêm phong và lịch sử quét vẫn là quy trình dự kiến, màn hình hộp dùng dữ liệu minh họa. Chưa tích hợp thanh toán, GPS, SMS/email/Zalo tự động hoặc cổng đối tác.

## Dữ liệu và cấu hình

DATA_DIR chứa SQLite, ảnh riêng tư và thông tin truy cập quản trị. ADMIN_PASSWORD dùng cho triển khai mới; đặt qua biến môi trường hoặc secret. Không đưa data/, .runtime/, .env thật và node_modules vào kho công khai hoặc ZIP chia sẻ. Bộ ZIP không chứa dữ liệu khách hàng hay mật khẩu. Dữ liệu của bản đang chạy trên máy vẫn được giữ nguyên.

Giữ ổ dữ liệu bền vững khi triển khai. Xem DEPLOYMENT.md và .env.example. Ảnh ý tưởng AI, ảnh tham khảo và mô hình minh họa được ghi rõ trong giao diện; nguồn trong asset-manifest.json và giấy phép phần mềm trong licenses/.
