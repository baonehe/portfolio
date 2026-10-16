# Đánh giá UI/UX portfolio

Ngày đánh giá: 16/10/2026.
Status: Completed.

## Phạm vi

- Kiểm tra trực tiếp trang tổng quan và trang Dự án trên desktop 1440×900, mobile 390×844 và mobile nhỏ 320×568.
- Đối chiếu mã nguồn bố cục, điều hướng, chuyển động và nội dung.
- Đây là đánh giá chuyên môn dựa trên giao diện hiện tại, chưa phải kết quả nghiên cứu với người dùng.
- Các số đo bên dưới áp dụng cho bản nháp hiện tại, có banner và nội dung placeholder.
- Chưa thay đổi giao diện hoặc triển khai các đề xuất.

## Nhận định chung

Giao diện có cá tính rõ, nhưng luồng xem năng lực và dự án cần nhanh hơn. Nên giữ bản sắc pixel-art, đồng thời giúp người tuyển dụng hoặc khách hàng tìm thấy dự án, kinh nghiệm và cách liên hệ ngay khi cần.

### Điểm nên giữ

- Phong cách pixel-art nhất quán và dễ nhận diện.
- Bảng màu tối–cyan phù hợp với chủ đề.
- Chữ nội dung dễ đọc.
- Có phiên bản tiếng Anh và tiếng Việt.
- Có hỗ trợ `prefers-reduced-motion` trong điều hướng và chuyển động chính.

## Các vấn đề theo mức ưu tiên

### 1. Cao — Mobile 320px bị cắt nội dung

**Quan sát:** Ở viewport 320×568, bố cục rộng khoảng 374px. Nút VI và một phần menu nằm ngoài vùng nhìn thấy; hình nhân vật bị co rất nhỏ.

**Ảnh hưởng:** Một số điều khiển khó tiếp cận và trải nghiệm trên màn hình nhỏ bị giảm đáng kể.

**Đề xuất:**

- Cho header và nhóm liên kết xuống dòng khi thiếu chiều ngang.
- Sửa kích thước tối thiểu của grid/flex để nội dung không đẩy trang rộng hơn viewport.
- Cho trang cuộn tự nhiên trên màn hình thấp thay vì ép toàn bộ nội dung vào một màn hình.
- Ưu tiên menu chữ trên mobile; không phụ thuộc vào các vùng bấm nhỏ trên nhân vật.

**Vị trí liên quan:** `src/components/Overview.astro`, `src/components/LangSwitch.astro`, `src/styles/global.css`.

### 2. Cao — Dự án xuất hiện quá muộn

**Quan sát:** Trang con dành `58svh` phía trên cho cảnh trang trí. Ở desktop 1440×900, màn hình đầu chưa hiển thị dự án đầu tiên. Ở mobile 390×844, tiêu đề dự án đầu tiên nằm ở vị trí khoảng 1.267px tính từ đầu trang.

**Ảnh hưởng:** Người xem phải cuộn nhiều trước khi tiếp cận bằng chứng về năng lực.

**Đề xuất:**

- Thử giảm phần hình đầu trang xuống khoảng 20–30% chiều cao màn hình.
- Giảm khoảng cách giữa tiêu đề trang, lời giới thiệu và dự án đầu tiên.
- Trên mobile, đặt tên dự án, mô tả ngắn và kết quả trước hình minh họa.
- Mục tiêu: màn hình đầu trang Dự án có ít nhất tên và phần tóm tắt dự án đầu tiên.

**Vị trí liên quan:** `src/components/SectionPage.astro`, `src/components/Work.astro`.

### 3. Cao — Trang chủ thiếu điểm bắt đầu nổi bật

**Quan sát:** Sáu mục điều hướng có mức nhấn mạnh gần tương đương. Trang chủ có tên và chức danh nhưng thiếu lời giới thiệu ngắn cùng hành động chính rõ ràng.

**Ảnh hưởng:** Người mới vào chưa được dẫn tới nội dung có giá trị nhất cho việc đánh giá năng lực.

**Đề xuất:**

- Thêm một câu giới thiệu ngắn về chuyên môn và loại hệ thống thực sự đã xây dựng.
- Thêm CTA chính “Xem dự án”.
- Thêm CTA phụ “Xem CV” khi đã có CV thật.
- Giữ cảnh pixel-art làm phần khám phá có cá tính.

**Vị trí liên quan:** `src/components/Overview.astro`, `src/data/portfolio.ts`.

### 4. Vừa — Chuyển giữa các mục còn vòng vèo

**Quan sát:** Trang con có nút về Tổng quan ở phía trên và liên kết Tiếp theo ở cuối trang, nhưng chưa có menu chuyển trực tiếp giữa các mục.

**Ảnh hưởng:** Chuyển từ Dự án sang Kinh nghiệm hoặc Liên hệ cần thêm thao tác hoặc cuộn dài.

**Đề xuất:**

- Thêm menu gọn trên các trang con.
- Đánh dấu mục hiện tại.
- Luôn có đường truy cập nhanh tới Liên hệ.
- Giữ liên kết Tiếp theo để hỗ trợ người muốn đọc tuần tự.

**Vị trí liên quan:** `src/components/SectionPage.astro`.

### 5. Vừa — Chuyển cảnh làm chậm việc đọc

**Quan sát:** Điều hướng từ tổng quan gồm chuyển động nhân vật, zoom và hiệu ứng nội dung trượt lên ở trang đích. Menu chữ trên mobile cũng kích hoạt chuỗi chuyển cảnh.

**Ảnh hưởng:** Hiệu ứng tạo ấn tượng ban đầu nhưng gây thêm thời gian chờ khi người xem muốn truy cập thông tin nhanh hoặc chuyển nhiều mục.

**Đề xuất:**

- Giữ hiệu ứng đầy đủ khi bấm trực tiếp vào hình.
- Cho menu chữ chuyển trang nhanh.
- Rút ngắn chuyển cảnh và cân nhắc tùy chọn tắt chuyển động trên trang.
- Tiếp tục tôn trọng `prefers-reduced-motion`.

**Vị trí liên quan:** `src/scene/navigator.ts`, `src/scene/scenes/overview.ts`, `src/scene/characters/miner.ts`, `src/components/SectionPage.astro`.

### 6. Vừa — Hình minh họa dự án lấn át nội dung

**Quan sát:** Trên desktop, hình minh họa chiếm 7/12 cột, phần nội dung chiếm 4/12 cột. Trên mobile, hình xuất hiện trước tên dự án.

**Ảnh hưởng:** Nội dung kỹ thuật bị bó hẹp, trong khi hình trang trí chiếm phần lớn diện tích và chưa cung cấp bằng chứng về sản phẩm.

**Đề xuất:**

- Tăng diện tích dành cho nội dung dự án.
- Ưu tiên thứ tự: tên → bài toán → kết quả → công nghệ; giữ phần quyết định kỹ thuật để đọc sâu.
- Đưa tiêu đề và tóm tắt lên trước hình trên mobile.
- Dùng sơ đồ hệ thống hoặc ảnh sản phẩm thật khi có và khi được phép công khai.

**Vị trí liên quan:** `src/components/Work.astro`.

## Hoàn thiện thị giác và khả năng thao tác

- Giảm mật độ hoặc độ nổi của sao sáng để nhãn điều hướng dễ tập trung hơn.
- Tăng vùng chạm của menu và nút ngôn ngữ lên khoảng 44–48px; hiện menu mobile cao 40px, liên kết ngôn ngữ có chiều cao tối thiểu 36px.
- Các vùng bấm trên nhân vật co theo cảnh; ở mobile nhỏ, nên dựa vào menu chữ có nhãn rõ ràng.
- Kiểm tra lại cả tiếng Việt và tiếng Anh khi điều chỉnh responsive vì độ dài nhãn khác nhau.

## Nội dung cần hoàn tất trước khi công khai

Placeholder hiện được đánh dấu là bản nháp có chủ đích. Trước khi công khai:

- Thay tên, địa điểm, email và nội dung mẫu bằng thông tin thật.
- Thay các liên kết `#` bằng URL thật cho GitHub, LinkedIn, CV và dự án; ẩn mục chưa có đích đến phù hợp.
- Bổ sung dự án thật, mô tả vai trò, quyết định kỹ thuật và kết quả có thể chứng minh.
- Chỉ tắt `draft` sau khi hoàn tất nội dung.

**Vị trí liên quan:** `src/data/portfolio.ts`.

## Thứ tự triển khai đề xuất

- [x] Sửa lỗi cắt nội dung trên mobile nhỏ.
- [x] Đưa dự án đầu tiên lên sớm hơn.
- [x] Bổ sung CTA trang chủ và menu chuyển mục trên trang con.
- [x] Điều chỉnh tỷ lệ hình/nội dung trong trang Dự án.
- [x] Rút ngắn chuyển cảnh và cải thiện vùng chạm.
- [ ] Tinh chỉnh nền sao và hoàn tất nội dung thật.

## Kiểm tra sau khi triển khai

- Không cắt nút, nhãn hoặc nội dung ở các chiều rộng 320, 360, 390, 768 và 1440px.
- Kiểm tra màn hình thấp và khi phóng to chữ; trang vẫn cuộn được để tiếp cận toàn bộ nội dung.
- Kiểm tra thao tác bàn phím, focus hiển thị rõ và thứ tự điều hướng hợp lý.
- Kiểm tra đường đi Tổng quan → Dự án → Kinh nghiệm → Liên hệ ở cả hai ngôn ngữ.
- Kiểm tra chế độ giảm chuyển động và việc mở liên kết trong tab mới.
- Kiểm tra CV, liên kết ngoài và email bằng dữ liệu thật.
