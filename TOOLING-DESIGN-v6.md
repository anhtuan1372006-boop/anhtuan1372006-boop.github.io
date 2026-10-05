# BOXANH v6 · Thiết kế và công cụ

## Vận dụng trang tham khảo

Trang người dùng cung cấp: https://donnha24h.vn/dich-vu-chuyen-nha-tro-chuyen-nghiep-gia-re-tai-tp-hcm/

Vận dụng cách ưu tiên liên hệ, phân nhóm dịch vụ, điều hướng, thông tin giá và hướng dẫn chi tiết. BOXANH có bố cục, màu, typography, ảnh và nội dung riêng: xanh rừng, nền kem, cam ấm; hero hai cột; khối báo giá; bố cục dịch vụ lệch; thẻ lợi thế đan xen; gói giá; quy trình dạng tab; khối hộp nền tối; ảnh đồ để lại; hướng dẫn và FAQ.

Không sao chép logo, nội dung, ảnh, hotline, tuyên bố hoạt động 24/7 hoặc cam kết bồi thường từ bên tham khảo. Các điều kiện chưa chốt của BOXANH được diễn đạt đúng phạm vi.

## Từ các ảnh thư viện đến mã nguồn

| Công cụ trong ảnh | Áp dụng |
|---|---|
| React | Trang chủ React, SSR/hydration và state cho ước tính, vòng đời hộp |
| Tailwind CSS | Tailwind 4 qua Vite, utility dùng trong thành phần UI |
| shadcn/ui | Button, Tabs, Accordion, Dialog thêm qua CLI; mã trong src/components/ui |
| Docker | Dockerfile nhiều giai đoạn, build giao diện và SSR, runtime có dependencies và volume dữ liệu |
| Vue/Svelte/Next/Nuxt/SvelteKit/MUI/Chakra/Bootstrap | Các lựa chọn thay thế; chưa thêm vì bộ đã chọn đáp ứng và giữ tương thích backend |
| VPSXCloud | Chưa tạo tài khoản, mua hoặc triển khai dịch vụ hosting |

Thư viện chính: React 19.3.0, Tailwind 4.3.3, Vite 8.3.2, radix-ui 1.6.7, lucide-react 1.51.0; phiên bản chính xác được khóa trong package-lock.json.

Tài liệu chính thức đã đối chiếu:
- https://ui.shadcn.com/docs/installation/vite
- https://ui.shadcn.com/docs/components/radix/tabs
- https://tailwindcss.com/docs/installation/using-vite
- https://react.dev/reference/react-dom/client/hydrateRoot

## Hiệu ứng và cấu trúc

Reveal khi khối đi vào màn hình, ảnh phóng nhẹ khi hover, nút/mũi tên chuyển động nhẹ, đổi tab, mở/đóng hộp thoại và FAQ, trạng thái vòng đời hộp, mô hình 3D kéo/phím. Tôn trọng prefers-reduced-motion. Mô hình nặng tải khi người dùng chọn. Nội dung SSR có trước JavaScript; React dùng cùng identifierPrefix để khớp ID Radix.

Các trang nghiệp vụ tiếp tục dùng router và API hiện có. Lớp CSS Tailwind không thêm preflight toàn cục để tránh đổi biểu mẫu cũ. CSS thương hiệu định nghĩa màu phù hợp cho cả đầu trang, chân trang và các trang nghiệp vụ.

## Phạm vi cần hoàn thiện bằng dữ liệu thực tế

Hộp/tải trọng/chính sách đặt cọc; định mức phụ phí; chính sách trách nhiệm; đối tác đã qua thử nghiệm; ảnh hoạt động và đánh giá thật; QR/seal ghi nhận thực tế. Website không dựng đánh giá hay đối tác đã xác nhận khi chưa có dữ liệu.
