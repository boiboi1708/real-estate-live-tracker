1. Core Module (Lõi hệ thống)
Quản lý cấu hình chung (Settings).

Kết nối Database & Third-party APIs (Google Maps/Mapbox).

Xử lý Real-time (WebSocket/Socket.io hoặc Firebase) để cập nhật trạng thái Open Home tức thì.

2. Auth Module (Xác thực & Phân quyền)
Quản lý Login/Register/Forgot Password.

Xử lý phân quyền: Visitor (Khách) vs Agency (Đại lý).

JWT (JSON Web Token) để quản lý phiên đăng nhập an toàn.

3. Agency Inventory Module (Quản lý giỏ hàng/Kho hàng)
CRUD Bất động sản: Thêm, sửa, xóa, ẩn hiện listing.

Real-time Dashboard: Agency thấy được trạng thái các căn đang Open Home, lượng khách đang xem (nếu có tính năng tracking).

Quick Actions: Nút bật/tắt "Live Open Home" ngay lập tức.

4. Map & OpenHome Module (Trọng tâm)
Hiển thị bản đồ tương tác.

Real-time Layer: Các điểm (pins) trên bản đồ sẽ đổi màu hoặc nhấp nháy khi trạng thái chuyển sang "Open Home Live".

Bộ lọc (Filter): Tìm theo khu vực, giá, loại nhà.

5. Visitor Module
Profile cá nhân (nếu đăng nhập).

Lưu danh sách quan tâm (Wishlist).

Đăng ký nhận thông báo khi có Open Home gần vị trí hiện tại.

II. Chi tiết Triển khai Trang Login (Entry Point)
Theo yêu cầu của bạn, đây là luồng hoạt động (User Flow) cho trang Login:

Giao diện mặc định: Khi truy cập website, người dùng thấy form đăng nhập.

Toggle/Tabs: Có 2 tabs hoặc nút chuyển đổi rõ ràng: "Khách Xem Nhà" (Visitor) và "Đại Lý" (Agency).

Trạng thái ban đầu: Tab Visitor luôn được chọn (Active) mặc định.

Cơ chế:

Visitor: Form yêu cầu Tên đăng nhập/SĐT/Email + Mật khẩu (hoặc nút "Tiếp tục không cần đăng nhập" nếu bạn muốn cho phép khách vãng lai).

Agency: Khi bấm chuyển sang Agency, form thay đổi (nếu cần trường đặc thù như Mã đại lý) hoặc giữ nguyên nhưng API xác thực sẽ trỏ vào bảng dữ liệu của Agency.

III. Lộ trình Thực hiện (Roadmap)
Giai đoạn 1: Khởi tạo & Auth Module (Tuần 1-2)
Thiết lập dự án (Setup Frontend & Backend).

Xây dựng Database Schema (User, Agency, Property, OpenHomeSession).

Code trang Login:

Tạo UI chuyển đổi Visitor/Agency.

Xử lý logic: Nếu là Visitor login -> Chuyển đến trang Map View. Nếu là Agency login -> Chuyển đến trang Dashboard quản lý.

Giai đoạn 2: Agency Inventory & Basic Map (Tuần 3-4)
Cho phép Agency đăng tải nhà vào "giỏ hàng" của họ.

Tích hợp bản đồ cơ bản: Hiển thị vị trí nhà từ database lên bản đồ.

Agency có thể set lịch Open Home (Ngày/Giờ).

Giai đoạn 3: Real-time Open Home (Tuần 5-6) - Quan trọng nhất
Tích hợp WebSocket/Socket.io.

Tính năng "Go Live": Agency bấm nút "Bắt đầu Open Home" trên điện thoại -> Server bắn tín hiệu -> Bản đồ của tất cả Visitor đang xem tự động hiện icon "Đang mở cửa" (không cần reload trang).

Tracking vị trí Agency (tùy chọn): Hiển thị vị trí Agency đang di chuyển đến điểm Open Home.

Giai đoạn 4: Hoàn thiện & UI/UX (Tuần 7)
Tối ưu giao diện Mobile (vì Agency và Visitor sẽ dùng điện thoại nhiều).

Testing chịu tải (Load test) để đảm bảo bản đồ mượt khi có nhiều Open Home cùng lúc.

IV. Đề xuất Công nghệ (Tech Stack)
Để đáp ứng tính năng Real-time và Map mượt mà:

Frontend: React.js hoặc Next.js (Tối ưu SEO và tốc độ), Tailwind CSS (UI).

Backend: Node.js (NestJS hoặc Express) - Rất mạnh về xử lý Real-time.

Database: PostgreSQL (Có PostGIS để xử lý bản đồ/vị trí địa lý rất tốt) hoặc MongoDB.

Real-time: Socket.io.

Map Service: Google Maps API (Phổ biến) hoặc Mapbox (Tùy biến giao diện đẹp hơn, chi phí tốt hơn).
