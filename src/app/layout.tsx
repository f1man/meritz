import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "보험 점검 상담 - 메리츠파트너스 구동호",
  description: "보험, 더 가입하기 전에 먼저 정리하세요. 메리츠파트너스 소속 보험설계사 구동호가 현재 가입하신 보험을 점검해드립니다.",
  openGraph: {
    title: "보험 점검 상담 - 메리츠파트너스 구동호",
    description: "현재 가입하신 보험을 기준으로 중복 보장, 부족한 보장, 불필요한 보험료를 함께 확인해드립니다.",
    type: "website",
    locale: "ko_KR"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
