# React Navigation: luồng xác thực

Bài thực hành 2, Bài 3 (IE307, UIT): luồng điều hướng xác thực cơ bản gồm đăng nhập, đăng ký, màn hình chính và đăng xuất. Dự án dùng Expo SDK 57 và Expo Router.

## Chạy ứng dụng

```bash
npm install
npx expo start
```

Mở bằng Expo Go, giả lập Android hoặc iOS. Thư viện `react-native-keyboard-controller` có sẵn trong Expo Go nên không cần development build.

Kiểm tra mã nguồn:

```bash
npx tsc --noEmit
npx expo lint
```

## Tài khoản mẫu

| Email | Mật khẩu |
|---|---|
| `23521382@gm.uit.edu.vn` | `vominhtai` |

Tài khoản nằm tại [src/constants/mock-account.ts](src/constants/mock-account.ts). Đăng nhập sai sẽ hiện thông báo "Incorrect email or password.".

## Chức năng

- Màn hình xác thực: đăng nhập (email, mật khẩu, quên mật khẩu, đăng nhập Facebook/Google) và đăng ký. Đề không yêu cầu hiện thực đăng ký, quên mật khẩu và đăng nhập mạng xã hội, nên các nút này hiện hộp thoại "This feature is not supported yet.".
- Màn hình chính gồm 4 tab: Home, Categories, Favourites (có huy hiệu số lượng mục yêu thích) và Profile.
- Nút LOG OUT ở Profile đưa người dùng về màn hình đăng nhập.
- Màn hình tự cuộn để ô đang nhập không bị bàn phím che.

## Cấu trúc thư mục

```
src/
├── app/                  Expo Router: mỗi file là một màn hình
│   ├── _layout.tsx       Stack gốc, chọn nhóm màn hình theo trạng thái đăng nhập
│   ├── (auth)/           login, register
│   └── (tabs)/           index (Home), categories, favourites, profile
├── components/           Component dùng lại
├── constants/            Hằng số (tài khoản mẫu)
├── stores/               Zustand: auth-store, favourites-store
├── theme/                Màu sắc
└── utils/                Hàm tiện ích
```

## Quyết định thiết kế

- **Điều hướng:** Expo Router với `Stack.Protected`. Trạng thái `isSignedIn` quyết định nhóm `(auth)` hay `(tabs)` được truy cập, nên đăng nhập và đăng xuất không cần gọi điều hướng thủ công.
- **Quản lý trạng thái:** Zustand giữ trạng thái xác thực và danh sách yêu thích. Giá trị email và mật khẩu đang gõ nằm trong `useState` của màn Login, không đưa vào store, để mật khẩu không tồn tại trong bộ nhớ toàn ứng dụng.
- **Style:** `StyleSheet`, không dùng style inline. Màu sắc tập trung tại [src/theme/colors.ts](src/theme/colors.ts).
- **Bàn phím:** `KeyboardAwareScrollView` của `react-native-keyboard-controller`, vì `KeyboardAvoidingView` không đẩy được nội dung trong thử nghiệm trên thiết bị.
- **Giao diện sáng:** `userInterfaceStyle` đặt `light`, vì thiết kế chỉ có một giao diện sáng, và để hộp thoại hệ thống đồng bộ với giao diện ứng dụng.
- **Icon:** chọn từng icon khớp nhất với ảnh mẫu (Fontisto, SimpleLineIcons, Ionicons, FontAwesome), logo Facebook và Google dùng SVG.

## Giới hạn

- Trạng thái đăng nhập không được lưu, tắt ứng dụng là đăng xuất. Lưu trữ cục bộ thuộc Lab 03.
- Kiểm tra email và mật khẩu chạy ngay trên ứng dụng. Với ứng dụng thật, việc xác thực phải do máy chủ thực hiện.
