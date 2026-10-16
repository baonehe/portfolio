# Đề xuất portfolio cuộn liên tục

Ngày: 16/10/2026.

Trạng thái: Đã triển khai ngày 16/10/2026. Xem [Kết quả kiểm tra](#kết-quả-kiểm-tra).

## Hướng đề xuất

Chuyển nội dung portfolio chính sang một trang cuộn liên tục từ trên xuống. Menu cố định ở đầu giúp người xem nhảy tới từng mục và biết mình đang đọc phần nào.

Giữ cảnh pixel-art ở phần mở đầu để duy trì cá tính. Khi bấm nhân vật hoặc nhãn trong cảnh, trang cuộn tới nội dung tương ứng thay vì chuyển sang một trang khác.

## Vì sao chọn hướng này

Người tuyển dụng và khách hàng thường cần xem nhanh chuyên môn, dự án, kinh nghiệm và cách liên hệ. Một trang liên tục giúp họ đọc liền mạch, lướt qua các phần và quay lại nội dung cần xem mà không phải liên tục về trang tổng quan.

Cách hiện tại tạo trải nghiệm khám phá riêng biệt, nhưng mỗi mục nằm trên một trang khiến việc so sánh dự án, kinh nghiệm và kỹ năng mất thêm thao tác. Hướng mới giữ phần khám phá bằng hình ảnh và bổ sung luồng đọc trực tiếp.

Đánh đổi: bỏ tương tác đặc trưng hiện tại (camera zoom vào bộ phận rồi nội dung trồi lên trên khung hình đó). Cá tính của site sẽ dựa vào cảnh ở phần mở đầu và phản hồi ngắn khi bấm, thay vì chuyển cảnh giữa các trang.

## Ảnh hưởng tới quy tắc hiện có

Đề xuất này thay một phần quy tắc trong `CLAUDE.md`. Khi triển khai, cập nhật `CLAUDE.md` và `docs/scene-assets.md` cho khớp.

| Quy tắc hiện tại | Sau khi đổi |
| --- | --- |
| Mỗi mục là một trang riêng (`/[section]/`, `/vi/[section]/`). | Mọi mục nằm trên trang chính; URL cũ là trang chuyển hướng. |
| Bấm bộ phận: nhân vật vung cuốc, camera zoom, mở trang mục. | Bấm bộ phận: vung cuốc ngắn rồi cuộn tới section. Bỏ zoom. |
| Back hoặc "Overview" zoom ra. | Không còn; Back theo lịch sử fragment (xem bên dưới). |
| Menu section gọn trên trang mục, chuyển mục không zoom. | Menu cố định trên trang chính, đánh dấu mục đang đọc. |
| Animation lặp dừng khi mở một mục. | Dừng khi phần mở đầu ra khỏi màn hình. |

Giữ nguyên: ánh xạ bộ phận → mục, nhãn chữ luôn hiển thị cạnh bộ phận, hệ thiết kế, quy tắc nội dung và toàn bộ art của cảnh.

## Cấu trúc trang

| Thứ tự | Phần | Nội dung chính |
| --- | --- | --- |
| 1 | Mở đầu | Tên, chức danh, một câu giới thiệu, cảnh pixel-art, CTA Xem dự án; Xem CV khi có CV thật. |
| 2 | Giới thiệu | Đoạn giới thiệu ngắn và vài thông tin nghề nghiệp quan trọng. |
| 3 | Dự án tiêu biểu | Hai hoặc ba dự án thật; nêu bài toán, vai trò, kết quả và công nghệ. |
| 4 | Kinh nghiệm | Công ty, vị trí, thời gian và đóng góp có thể chứng minh. |
| 5 | Kỹ năng | Nhóm chuyên môn gắn với dự án hoặc kinh nghiệm thực tế. |
| 6 | Học vấn | Thông tin ngắn gọn về học vấn, chứng chỉ hoặc khóa học liên quan. |
| 7 | Liên hệ | Email, GitHub, LinkedIn và CV nếu có. |

Đặt Dự án trước Kinh nghiệm để người xem sớm thấy bằng chứng về năng lực. Phần Giới thiệu nên ngắn để không đẩy dự án xuống quá xa. Thứ tự này thay `sectionOrder` hiện tại trong `src/i18n/content.ts` (About, Experience, Projects, …).

### Phần mở đầu

- Tên, chức danh và CTA Xem dự án nằm trong màn hình đầu ở 390×844 và 1440×900, không cần cuộn.
- Tiêu đề Dự án xuất hiện sau tối đa một lần cuộn màn hình ở 1440×900, và sau tối đa một lần rưỡi ở 390×844. Mobile được nới vì phần mở đầu xếp chồng tên, cảnh và danh sách mục nên đã cao hơn một màn hình.
- Cảnh không chiếm trọn màn hình nếu điều đó đẩy tên và CTA xuống dưới.

## Menu đầu trang

### Desktop

- Hiển thị tên hoặc logo dẫn về đầu trang.
- Đủ sáu mục, đúng thứ tự nội dung: Giới thiệu · Dự án · Kinh nghiệm · Kỹ năng · Học vấn · Liên hệ. Cùng tên và nút ngôn ngữ, sáu mục vừa một hàng từ 1024px, kể cả nhãn tiếng Việt; dưới 1024px dùng mục lục.
- Có nút đổi ngôn ngữ EN/VI.
- Menu luôn truy cập được khi cuộn, với nền đủ rõ để chữ không lẫn vào nội dung phía sau.
- Đánh dấu mục đang đọc bằng tín hiệu không chỉ dựa vào màu (ví dụ nền đảo màu như menu hiện tại) và bằng `aria-current`.

### Mobile

- Hiển thị tên hoặc logo và nút "Mục lục" ("Contents" ở bản tiếng Anh).
- Mục lục mở danh sách đủ sáu phần cùng lựa chọn ngôn ngữ.
- Lý do không giữ hàng chip cuộn ngang như hiện tại: ở 320–390px, sáu nhãn tiếng Việt cộng nút ngôn ngữ không vừa một hàng, nên phần lớn mục bị đẩy ra ngoài màn hình và người xem không thấy chúng tồn tại.
- Chọn một mục sẽ đóng danh sách và đưa người xem tới section tương ứng.
- Nút và liên kết có vùng chạm khoảng 44–48px.
- Nút mở mục lục thể hiện trạng thái mở/đóng (`aria-expanded`); hỗ trợ bàn phím, đóng bằng Escape và trả focus về nút.

## Hành vi cuộn và điều hướng

- Cuộn tự nhiên theo chiều cao thực tế của nội dung.
- Không ép mỗi section cao đúng một màn hình.
- Không bắt cuộn theo từng màn hoặc chặn thao tác cuộn của người dùng.
- Bấm menu, CTA "Xem dự án" hoặc cảnh sẽ tới đúng section trên cùng trang.
- Fragment dùng id tiếng Anh ở cả hai ngôn ngữ: `about`, `projects`, `experience`, `skills`, `education`, `contact`. Ví dụ `/#projects` và `/vi/#projects`.
- Chừa khoảng cách ở đầu section (`scroll-margin-top`) để tiêu đề không bị menu cố định che.
- Cuộn mượt ngắn khi người dùng cho phép chuyển động; chuyển ngay khi bật chế độ giảm chuyển động.
- Khi điều hướng bằng bàn phím, focus chuyển tới tiêu đề section đích để đọc tiếp được.
- Nút đổi ngôn ngữ mang theo fragment hiện tại: đang đọc `/#projects` thì VI dẫn tới `/vi/#projects`.

### Lịch sử trình duyệt

- Bấm menu, CTA hoặc cảnh thêm một mục lịch sử với fragment mới, nên Back quay về vị trí trước đó.
- Cuộn tay không thêm mục lịch sử; chỉ cập nhật mục đang đọc trên menu.
- Forward đi lại đúng section đã rời.

## Vai trò của cảnh pixel-art

- Cảnh là điểm nhấn chính ở phần mở đầu.
- Giữ các nhãn dễ hiểu: Giới thiệu, Dự án, Kinh nghiệm, Kỹ năng, Học vấn, Liên hệ.
- Bấm vào bộ phận nhân vật hoặc vật thể: nhân vật vung cuốc tối đa khoảng 200ms rồi trang cuộn tới section tương ứng. Không zoom. Ở chế độ giảm chuyển động thì bỏ vung cuốc và chuyển ngay.
- Menu chữ và CTA luôn cung cấp đường truy cập rõ ràng tới nội dung.
- Trên mobile, ưu tiên khả năng đọc và vùng chạm; không thu nhỏ cảnh tới mức các vùng tương tác khó sử dụng.

### Animation lặp

Vòng đào quặng và bầu trời nhấp nháy chỉ chạy khi phần mở đầu nằm trong màn hình. Chúng dừng khi:

- phần mở đầu cuộn ra khỏi màn hình;
- một bộ phận đang được hover hoặc focus;
- tab bị ẩn;
- người dùng bật `prefers-reduced-motion` (khi đó không bao giờ chạy).

### Trang trí ở các section phía dưới

- Bỏ backdrop cảnh lớn đang đặt sau từng trang mục.
- Giữ các sprite nhỏ đã có trong nội dung (ví dụ cốc cà phê ở Giới thiệu, minh họa dự án, biểu tượng). Chúng là điểm nhấn, không phải phần cần bỏ.

## Cách trình bày dự án

Trang chính trình bày phần đủ để đánh giá nhanh:

1. Tên và mô tả ngắn của dự án.
2. Bài toán và vai trò của bản thân.
3. Kết quả thực tế.
4. Công nghệ và quyết định kỹ thuật nổi bật.
5. Liên kết mã nguồn, demo hoặc bài viết chi tiết khi có.

Trên mobile, tên và phần tóm tắt đứng trước hình minh họa.

Giữ minh họa pixel hiện tại và trình bày rõ đó là minh họa, không phải ảnh chụp sản phẩm. Chỉ thay bằng ảnh sản phẩm hoặc sơ đồ hệ thống thật khi có và được phép công khai.

Kết quả và số liệu chỉ ghi khi có thật; chỗ chưa có vẫn để trong `[ngoặc vuông]` theo quy tắc nội dung.

## Lưu ý khi chuyển từ bố cục hiện tại

- Tái sử dụng nội dung và các component section hiện có khi phù hợp.
- Giữ hai phiên bản tiếng Anh và tiếng Việt.
- URL cũ (`/about/`, `/projects/`, … và `/vi/…`): build vẫn là trang tĩnh và chưa chọn host, nên không dựa vào redirect phía server. Mỗi URL cũ là một trang nhỏ có `<meta http-equiv="refresh">` tới `/#<id>` hoặc `/vi/#<id>`, kèm `rel="canonical"` và một liên kết bấm tay.
- Thay hành vi zoom rồi chuyển trang của cảnh bằng điều hướng tới section.
- Chỉ hiển thị CTA CV khi có file CV thật (hiện `links.resume` trong `src/data/portfolio.ts` vẫn là `'#'`), và chỉ hiển thị liên kết ngoài khi có đích đến thật.

## Ngoài phạm vi đợt này

- Trang chi tiết riêng cho từng dự án. Khi cần, trang chi tiết phải có đường quay lại đúng dự án trên trang chính (`/#projects` hoặc id của dự án), tránh buộc người xem bắt đầu lại từ đầu portfolio.

## Thứ tự triển khai đề xuất

- [x] Ghép các section thành trang chính liên tục ở cả EN và VI, theo thứ tự mới.
- [x] Tạo menu cố định và mục lục mobile.
- [x] Thêm fragment id, `scroll-margin-top`, trạng thái mục đang đọc và quy tắc lịch sử.
- [x] Chuyển tương tác cảnh pixel-art sang vung cuốc ngắn rồi cuộn tới nội dung; dừng animation lặp khi phần mở đầu ra khỏi màn hình.
- [x] Tinh chỉnh chiều cao phần mở đầu, CTA và vị trí dự án đầu tiên theo tiêu chí ở trên.
- [x] Tạo trang chuyển hướng cho URL cũ.
- [x] Cập nhật `CLAUDE.md` và `docs/scene-assets.md`.
- [x] Kiểm tra responsive, bàn phím và chế độ giảm chuyển động.

## Tiêu chí kiểm tra

- Ở 390×844 và 1440×900: tên, chức danh và CTA Xem dự án hiện trong màn hình đầu; tiêu đề Dự án xuất hiện sau tối đa một lần cuộn màn hình ở 1440×900 (đáy tiêu đề ≤ 1800px) và một lần rưỡi ở 390×844 (≤ 2110px).
- Tất cả nội dung chính đọc được bằng cách cuộn liên tục.
- Menu, cảnh và CTA dẫn tới cùng section tương ứng.
- Tiêu đề section không bị menu che khi bấm liên kết hoặc mở URL có fragment.
- Không cắt nội dung hoặc tràn ngang ở chiều rộng 320, 360, 390, 768 và 1440px, ở cả EN và VI.
- Màn hình thấp và chế độ phóng to chữ vẫn tiếp cận được toàn bộ nội dung.
- Điều hướng bàn phím có focus rõ ràng, thứ tự hợp lý, không bị kẹt trong mục lục; Escape đóng mục lục.
- Chế độ giảm chuyển động: không cuộn mượt, không vung cuốc, không animation lặp.
- Back/Forward theo đúng quy tắc lịch sử ở trên; đổi ngôn ngữ giữ nguyên section.
- Mọi URL cũ ở cả EN và VI dẫn tới đúng section mới.

## Kết quả kiểm tra

Đo ngày 16/10/2026 trên bản build, ở cả EN và VI:

- Không tràn ngang ở 320, 360, 390, 768, 1024 và 1440px.
- CTA Xem dự án nằm trong màn hình đầu ở mọi kích thước trên.
- Ở 1440×900, đáy tiêu đề Dự án nằm ở 1743px (EN) và 1772px (VI), trong giới hạn 1800px. Đạt.
- Ở 390×844, đáy tiêu đề Dự án nằm ở 1830px (EN) và 1820px (VI), trong giới hạn 2110px. Đạt, còn dư khoảng 280px cho nội dung thật dài hơn nội dung tạm. Kiểm tra lại khi thay nội dung Giới thiệu.
- Mục lục mobile: mở/đóng, Escape trả focus về nút, chọn mục thì đóng và tới đúng section.
- Menu, cảnh và CTA dẫn tới đúng section; tiêu đề không bị menu che; focus chuyển tới tiêu đề.
- Back/Forward theo đúng quy tắc lịch sử; nút ngôn ngữ mang theo section đang đọc.
- URL cũ (ví dụ `/vi/projects/`) chuyển tới `/vi/#projects`.
- Màn hình thấp (1024×600, 1440×700) và chữ phóng to gấp đôi không cắt nội dung phần mở đầu.

## Tài liệu liên quan

- [Đánh giá UI/UX hiện tại](ui-ux-review.md)
- [Tài liệu tài nguyên cảnh](scene-assets.md)
