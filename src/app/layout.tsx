import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const BODY_PADDING = "px-4 sm:px-6";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inditex Similarity Search",
  description: "Search for similar photos in the Inditex catalog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased bg-gray-100")}>
        <header
          className={cn(
            "top-0 sticky z-20 w-full py-3 bg-gray-100 flex flex-row flex-nowrap justify-between max-w-5xl mx-auto h-14 items-stretch animate-in fade-in slide-in-from-top-4 duration-1000 ease-in-out",
            BODY_PADDING
          )}
        >
          <Link
            className="text-black text-lg font-medium flex flex-row flex-nowrap items-center justify-center gap-x-1.5 pr-1.5 leading-none rounded-lg"
            href="/"
          >
            <span>HACKUPC</span>
          </Link>

          <div className="flex flex-row flex-nowrap gap-x-1.5 items-center">
            <Link
              href="/model-architecture"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <span>Model Architecture</span>
            </Link>
          </div>
        </header>
        <main
          className={cn(
            "min-h-screen flex items-stretch flex-col pb-28 max-w-5xl mx-auto",
            BODY_PADDING
          )}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
