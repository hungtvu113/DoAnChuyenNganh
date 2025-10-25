import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "QuizHub - Hệ thống Quản lý Kỳ thi",
  description: "Hệ thống quản lý kỳ thi toàn diện cho các Trung tâm Ngoại ngữ - Tin học. Số hóa quy trình tổ chức thi, giảm thiểu sai sót, nâng cao hiệu quả.",
  keywords: ["quản lý kỳ thi", "hệ thống thi", "ngoại ngữ", "tin học", "quizhub"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
