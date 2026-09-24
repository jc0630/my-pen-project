import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "潔淨家園 | 環保清潔垃圾車",
  description: "潔淨家園以低碳車隊、合法流向與準時服務，提供社區清運、商辦清潔、事業廢棄物處理等專業環保清運服務。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} h-full antialiased`}>
      <body className="font-main h-full">{children}</body>
    </html>
  );
}
