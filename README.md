# 🎓 QuizHub - Hệ thống Quản lý Kỳ thi Trung tâm Ngoại ngữ - Tin học

## 📖 Giới thiệu

QuizHub là một hệ thống quản lý kỳ thi toàn diện, được xây dựng nhằm số hóa toàn bộ quy trình tổ chức và quản lý kỳ thi cho các Trung tâm Ngoại ngữ - Tin học. Hệ thống giúp giảm thiểu sai sót, tiết kiệm thời gian và nâng cao hiệu quả quản lý so với phương pháp thủ công truyền thống.

## 🎯 Mục tiêu

- ✅ Tin học hóa toàn bộ quy trình tổ chức và quản lý kỳ thi
- ✅ Quản lý kỳ thi, môn thi, thí sinh, giám thị và kết quả thi chính xác, minh bạch
- ✅ Hỗ trợ đăng ký và tra cứu thông tin thi trực tuyến
- ✅ Phân quyền người dùng rõ ràng (Admin - Giám thị - Học viên)
- ✅ Thống kê, báo cáo và tìm kiếm dữ liệu nhanh chóng
- ✅ Mở rộng khả năng thi trực tuyến, chấm điểm tự động

## 👥 Đối tượng sử dụng

### 🔑 Admin (Quản trị viên)
- Quản lý toàn bộ hệ thống
- Thêm/sửa/xóa người dùng, môn thi, kỳ thi, phòng thi
- Nhập điểm, duyệt điểm, công bố kết quả
- Thống kê và xuất báo cáo Excel/PDF

### 👨‍🏫 Giám thị / Cán bộ chấm thi
- Xem danh sách phòng thi và thí sinh
- Ghi nhận tình trạng dự thi
- Nhập và lưu điểm thi

### 🎓 Học viên / Thí sinh
- Đăng ký tài khoản và đăng nhập
- Xem danh sách kỳ thi và đăng ký dự thi
- Tra cứu kết quả thi
- Gửi phản hồi

## ✨ Tính năng chính

### Phiên bản 1.0 (Core Features)
- 🔐 Đăng nhập/Đăng ký với phân quyền
- 📚 Quản lý môn thi và kỳ thi
- 🏫 Quản lý phòng thi và phân công giám thị
- 👨‍🎓 Quản lý thí sinh và đăng ký dự thi
- 📊 Nhập điểm và quản lý kết quả
- 🔍 Tra cứu và tìm kiếm thông tin
- 📈 Thống kê và báo cáo

### Tính năng mở rộng (Roadmap)
- 📝 Thi trắc nghiệm trực tuyến với ngẫu nhiên câu hỏi
- 🤖 Chấm điểm tự động
- 📧 Gửi email thông báo kết quả
- 💳 Thanh toán lệ phí thi online
- 🎖️ Tạo chứng chỉ điện tử
- 📊 Biểu đồ thống kê kết quả (Chart.js)
- 🤖 AI chấm bài tự luận/bài nói
- 📄 OCR quét bài thi tự động

## 🛠️ Công nghệ sử dụng

### Frontend
- **Framework**: Next.js 16.0.0 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/ui (planned)
- **Charts**: Chart.js
- **Fonts**: Geist Sans, Geist Mono

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **API**: RESTful API
- **Authentication**: JWT / Passport.js

### Database
- **Database**: MySQL / MongoDB
- **ORM**: Sequelize / Prisma

### Tools & Libraries
- **Email**: NodeMailer
- **Environment**: dotenv
- **Version Control**: Git/GitHub
- **Deployment**: Vercel (Frontend) / Render (Backend)
- **Containerization**: Docker (optional)

## 📊 Cơ sở dữ liệu

### Các bảng chính

```
users           - Quản lý người dùng (Admin, Giám thị, Học viên)
subjects        - Quản lý môn thi
exams           - Quản lý kỳ thi
rooms           - Quản lý phòng thi
exam_rooms      - Phân công phòng thi và giám thị
students        - Thông tin thí sinh
registrations   - Đăng ký dự thi
scores          - Điểm số và kết quả
```

### Mối quan hệ
- Một kỳ thi có nhiều phòng thi
- Một phòng thi có một giám thị
- Một thí sinh có thể đăng ký nhiều kỳ thi
- Mỗi đăng ký có một kết quả điểm

## 🏗️ Kiến trúc hệ thống

Hệ thống được xây dựng theo mô hình **3 lớp (3-tier architecture)**:

1. **Presentation Layer** (Giao diện)
   - Next.js với App Router
   - Responsive design với Tailwind CSS

2. **Application Layer** (Xử lý nghiệp vụ)
   - Node.js + Express.js
   - RESTful API
   - Business logic & validation

3. **Data Layer** (Lưu trữ dữ liệu)
   - MySQL/MongoDB
   - ORM (Sequelize/Prisma)

## 🚀 Cài đặt và Chạy dự án

### Yêu cầu hệ thống
- Node.js >= 18.x
- npm/yarn/pnpm
- MySQL >= 8.0 hoặc MongoDB >= 6.0

### Cài đặt

```bash
# Clone repository
git clone https://github.com/your-username/quizhub.git
cd quizhub

# Cài đặt dependencies
npm install
# hoặc
yarn install
# hoặc
pnpm install

# Cấu hình environment variables
cp .env.example .env.local
# Chỉnh sửa file .env.local với thông tin database và cấu hình của bạn

# Chạy database migrations (sẽ cập nhật sau)
npm run migrate

# Chạy development server
npm run dev
```

### Truy cập ứng dụng

Mở trình duyệt và truy cập: [http://localhost:3000](http://localhost:3000)

## 📁 Cấu trúc thư mục

```
quizhub/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (admin)/           # Admin dashboard
│   ├── (supervisor)/      # Supervisor dashboard
│   ├── (student)/         # Student portal
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components
│   ├── forms/            # Form components
│   └── layouts/          # Layout components
├── lib/                   # Utility functions
│   ├── db/               # Database connection
│   ├── auth/             # Authentication helpers
│   └── utils/            # Helper functions
├── types/                 # TypeScript types
├── public/               # Static files
├── demoappv1/            # Project documentation
└── README.md             # This file
```

## 🔒 Bảo mật

- ✅ Mã hóa mật khẩu với bcrypt
- ✅ Xác thực JWT (JSON Web Token)
- ✅ Phân quyền dựa trên vai trò (RBAC)
- ✅ Bảo vệ API endpoints
- ✅ Validation dữ liệu đầu vào
- ✅ HTTPS cho production
- ✅ Environment variables cho thông tin nhạy cảm

## 📝 Phạm vi áp dụng

- Các trung tâm Ngoại ngữ - Tin học quy mô vừa và nhỏ
- Các cơ sở đào tạo, trường học có nhu cầu quản lý kỳ thi nội bộ
- Có thể tùy chỉnh cho các loại hình thi cử khác

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:

1. Fork dự án
2. Tạo branch cho tính năng mới (`git checkout -b feature/AmazingFeature`)
3. Commit thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phát hành dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác giả

**QuizHub Development Team**

## 📞 Liên hệ

- 📧 Email: support@quizhub.com
- 🌐 Website: https://quizhub.com
- 📱 GitHub: https://github.com/your-username/quizhub

## 🙏 Lời cảm ơn

Cảm ơn tất cả những người đã đóng góp cho dự án này!

---

**Phiên bản**: 0.1.0
**Cập nhật lần cuối**: 2025-10-25
**Trạng thái**: 🚧 Đang phát triển
