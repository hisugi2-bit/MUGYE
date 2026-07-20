import type { Metadata } from "next";
import { Geist, Noto_Serif_KR, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSerifKR = Noto_Serif_KR({
  variable: "--font-serif-kr",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif-en",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "무계 無界 | MUGYE - 궁사 전용 1:1 맞춤 피팅 수제 깍지",
  description: "전통 핸드메이드 기법과 정교한 인체공학 설계를 더한 김종구 장인의 명품 수제 깍지. 시위를 당길 때 통증이 없고 흔들림 없는 안정을 선사합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${notoSerifKR.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-950 text-neutral-100">{children}</body>
    </html>
  );
}
