# Tham khảo website Việt Nam cho BOXANH

Nghiên cứu ngày 03/10/2026. Đã xác minh URL chính thức qua web và đọc HTML/CSS đang được các trang phát hành. Browser tool hiện trả inventory rỗng, nên đây là phân tích cấu trúc/source; chưa xác minh hình thức render, chuyển động thực tế hay mobile bằng screenshot. Không có căn cứ kết luận các website được làm hoàn toàn bởi con người. Không sửa project BOXANH.

## 1. Ahamove — phù hợp nhất về dịch vụ

- Trang chủ: https://ahamove.com/
- Chuyển nhà: https://ahamove.com/service/aha-house-moving
- CSS: https://ahamove.com/_next/static/css/d9ae9c57f86ac3b9.css
- Bố cục source: hero/banner; phân biệt giao hàng và xe tải; các phần hình + nội dung hai cột; CTA lặp đúng ngữ cảnh. Trang chuyển nhà đi từ lợi ích đến gói, phạm vi nhân sự/xe/bốc xếp, bảng giá, bốn bước và FAQ.
- Typography: mặc định `var(--font-inter)`; H2 source dùng 32px/40px ở màn hình nhỏ và 42px/60px với desktop; body 16px/24px. Cam chính #FE5F00; chữ đậm #121619.
- Border: controls có outline trung tính #DDE1E6; nút chủ đạo có fill, chiều cao 48px; hero có rounded-3xl ở desktop. Nhiều phần tách bằng không gian và background thay vì border đậm.
- Chuyển động được định nghĩa: CTA hover đổi màu, transition 200ms, active dịch xuống 0.125rem và ring; slider có Swiper transform. Không suy ra autoplay hay hiệu ứng đã chạy chỉ từ bundle.
- Mobile source: grid một cột thành hai cột desktop, CTA bản mobile rộng toàn hàng, title giảm kích thước. Không bê toàn bộ bảng giá dài vào BOXANH; nên có tóm tắt gói trước, chi tiết mở sau.
- Lưu ý nội dung: phần ưu điểm nói không phí phát sinh nhưng FAQ vẫn nêu các phụ phí. BOXANH nên dùng một thông điệp nhất quán: báo giá sau khảo sát, khoản bổ sung được thống nhất trước.

## 2. MoMo — ngôn ngữ thao tác và phân cấp chữ

- Trang chủ: https://www.momo.vn/
- CSS: https://www.momo.vn/_next/static/css/032b33e5348751c5.css
- Bố cục source: thư viện tiện ích bằng icon/tab, từng feature có hình và nội dung, khối tin tức/ưu đãi, hướng dẫn theo bước, trợ giúp. Học cách tách tác vụ; không sao chép số lượng tab của một siêu ứng dụng.
- Typography: tiêu đề `MoMo Trusts Display` riêng, nội dung source dùng sans hệ thống. H1 24px/32px ở nhỏ → 30px/36px ở lg; màu nhấn #D42A87. Đây là font thương hiệu riêng, không đưa vào BOXANH.
- Border: outline nhẹ #E7E4E6; radius-xl 12px; feature dùng background hồng nhạt và radius từ sm. Wrapper tối đa 72rem, padding 20px hoặc 32px tùy breakpoint.
- Chuyển động source: transition màu/background/transform thường 150–200ms; các controls có hover, disabled và focus-visible. Source có quy tắc reduced-motion nhưng chưa đánh giá phủ toàn bộ trang.
- Mobile source: hamburger 40×40px, header 64px; heading/feature căn giữa ở nhỏ, chuyển trái từ sm; nội dung dùng grid12 với phân bố lại. BOXANH nên giữ target chạm tối thiểu 44px và font nhập liệu 16px.

## 3. FPT — nhịp biên tập và tính tổ chức

- Trang chủ: https://fpt.com/vi
- CSS: https://fpt.com/_next/static/chunks/413-bp3owl7lf.css và https://fpt.com/_next/static/chunks/3scjaxokobswe.css
- Bố cục source: câu chuyện/tin nổi bật, chiến lược, khối video, hệ sinh thái, tin tức, phát triển bền vững. Phân đoạn bằng tiêu đề, ảnh và nhịp khoảng cách; phù hợp học cách làm phần câu chuyện BOXANH súc tích.
- Typography: Inter, có font subset tiếng Việt; chữ tiêu đề tin text-xl → lg:text-2xl; các tiêu đề phần và phụ có kích thước riêng. Token chính #0055A4, accent #FC7321 và border #E5E7EB.
- Border/chuyển động: source có separator 1px, border nhẹ ở controls, hover chuyển border/text sang accent; panel có transition 300ms, controls có transition 200ms. Không nên bê slider tin hay sidebar nổi vào trang đặt lịch BOXANH.
- Mobile: source có breakpoint 640/768/1024px; H2 một số khối được ép 20px dưới md, nội dung phụ 14px → 20px ở lg. BOXANH nên ưu tiên readability: body 16px, không thu cả website thành chữ nhỏ.

## 4. Vietnam Airlines — khối đặt dịch vụ và trạng thái control

- Trang chính thức: https://www.vietnamairlines.com/vn/vi/
- CSS: https://www.vietnamairlines.com/etc.clientlibs/vna/clientlibs/clientlib-base.lc-75f18e2e15c7219acbf214752352703c-lc.min.css
- Bố cục source: full-screen banner hai phần 50/50; booking-navigation nằm gần đáy banner; bên dưới có nội dung thương hiệu/trải nghiệm. Học việc giữ thao tác đặt dịch vụ tại điểm nhìn quan trọng.
- Typography: Open Sans; banner title 48px/72px, một số đoạn tiêu đề 42px/52px; CTA/menu nhỏ hơn với 14px/22px. Màu #006885 và điểm nhấn vàng trong heading source.
- Border: CTA hero transparent, outline trắng 1px, radius12px, hover đổi trắng + chữ xanh; focus-visible có outline 2px. Form có trạng thái disabled/loading riêng.
- Chuyển động: CTA 200ms ease-in-out; submenu opacity/transform 300ms. Mobile có navigation và submenu riêng, overflow-y:auto, chiều cao theo viewport; không nên đưa menu nhiều tầng đó vào BOXANH.

## Hướng thiết kế riêng đề xuất cho BOXANH tại Vinh

Định hướng: một dịch vụ địa phương có quy trình rõ, mang cảm giác căn phòng mới và đồ dùng tiếp tục được yêu quý.

1. Nền giấy ấm #F6F4ED, chữ xanh rừng #183D33, xanh lá sáng vừa phải ở CTA; cam đất #D77946 dùng ít cho dữ liệu cần chú ý. Không dùng gradient tím/cam của các nền tảng.
2. Hero chữ 64–72px desktop, 40–44px mobile; Inter hoặc Be Vietnam Pro cho cả hệ chữ; body16–18px, line-height1.55–1.65. Phần headline có thể cắt dòng chủ ý nhưng tránh mỗi từ một dòng và paragraph quá dài.
3. Hero hai cột: lời hứa + CTA chính bên trái, ảnh vận hành/phòng trọ có hộp xanh bên phải. Dùng một đường nối/hình hộp nhỏ thể hiện cửa phòng cũ → hộp → phòng mới, có thể bằng SVG riêng; không tạo dashboard giả hay bản đồ tracking giả.
4. Ngay dưới hero là ba tác vụ: Chuyển trọ / Thuê hộp / Gửi đồ không mang. Tiếp đó là gói và chi phí rõ, hành trình bốn bước, ví dụ vòng đời đồ, vùng phục vụ thực tế, FAQ và liên hệ. Không dùng cùng một card grid cho mọi phần.
5. Border1px #D9E1D7 chỉ để nhóm form, dòng bảng giá và card lựa chọn; hover card đổi border/nhấc 2px, radius10–14px. Ảnh có thể để cạnh thẳng hoặc radius8px; tránh outline đen dày và shadow ở mọi khối.
6. Chuyển động phục vụ thao tác: hover150ms, section reveal opacity + translateY8px khoảng220ms chạy một lần; chuyển bước form180ms; nhãn số hộp thay đổi rõ. Tôn trọng prefers-reduced-motion; không autoplay banner hay làm ảnh lơ lửng liên tục.
7. Mobile một cột, gutters20px, khoảng cách section40–56px; CTA chính cao48px. Bảng giá chuyển thành các dòng label/value; form nhập địa chỉ/phone rộng toàn hàng. Summary giá chỉ sticky khi không che fields và keyboard. Đặt lịch/Gọi hỗ trợ có thể là hai nút footer gọn.
8. Bản sắc Vinh đến từ phạm vi phục vụ thật, ảnh phòng trọ và thao tác thực tế, vấn đề hẻm/cầu thang/đỗ xe, đội ngũ thật. Không vẽ bản đồ hay nêu trường/đối tác/coverage cụ thể khi chưa xác minh. Mọi ảnh sinh bằng AI cần nhận diện là minh họa.

Viettel Post cũng đã được kiểm tra URL chính thức https://www.viettelpost.vn/ và stylesheet phát hành. Trang là portal Angular, HTML ban đầu không có nội dung render; CSS có Roboto, form/bảng/nhãn mật độ cao. Không chọn làm tham khảo hero vì chưa có browser runtime để đánh giá trực tiếp; có thể tham khảo sau cho cổng vận hành, tra cứu và status.
