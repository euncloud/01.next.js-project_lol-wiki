import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Link from "next/link";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOL Wiki",
  description: "LOL is my Life",
  keywords: ["LOL", "Wiki", "Game"],
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
        <header className="bg-black p-4 fixed w-full z-10 top-0 left-0 bg-opacity-80">
          <nav className="flex justify-center">
            <Link href="/" passHref>
              <div className="text-white text-md hover:text-sky-400 hover:underline hover:underline-offset-8 w-[300px] text-center border-x-[1px]">
                홈
              </div>
            </Link>
            <Link href="/champions" passHref>
              <div className="text-white text-md hover:text-sky-400 hover:underline hover:underline-offset-8 w-[300px] text-center">
                챔피언
              </div>
            </Link>
            <Link href="/items" passHref>
              <div className="text-white text-md hover:text-sky-400 hover:underline hover:underline-offset-8 w-[300px] text-center border-x-[1px]">
                아이템
              </div>
            </Link>
            <Link href="/rotation" passHref>
              <div className="text-white text-md hover:text-sky-400 hover:underline hover:underline-offset-8 w-[300px] text-center">
                로테이션
              </div>
            </Link>
          </nav>
        </header>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
