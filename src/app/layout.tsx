import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "LOL Wiki",
  description: "LOL is my Life",
  keywords: ["LOL", "Wiki", "Game"],
  icons: {
    icon: "/lol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-zinc-900 text-white">
        {/* Header */}
        <header className="bg-black fixed w-full z-10 top-0 left-0 bg-opacity-80">
          <nav className="grid grid-cols-6">
            <div className="text-sm font-extrabold text-left align-middle"></div>
            <Link href="/" passHref>
              <div className="text-white text-md hover:bg-zinc-800 text-center p-3">
                홈
              </div>
            </Link>
            <Link href="/champions" passHref>
              <div className="text-white text-md hover:bg-zinc-800 text-center p-3">
                챔피언
              </div>
            </Link>
            <Link href="/items" passHref>
              <div className="text-white text-md hover:bg-zinc-800 text-center p-3">
                아이템
              </div>
            </Link>
            <Link href="/rotation" passHref>
              <div className="text-white text-md hover:bg-zinc-800 text-center p-3">
                로테이션
              </div>
            </Link>
            <div></div>
          </nav>
        </header>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
