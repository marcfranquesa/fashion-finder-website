import type { Metadata } from "next";
import { cookies } from "next/headers";
import { IntlProvider } from "../lib/i18n";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const BODY_PADDING = "px-4 sm:px-6";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inditex Similarity Search",
  description: "Search for similar photos in the Inditex catalog",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localeCookieName = "locale";
  const defaultLocale = "en";
  const localeCoookie = cookies().get(localeCookieName);
  const localeCookieValue = localeCoookie?.value || defaultLocale;
  const messages = await import(
    `./translations/${localeCookieValue}.json`
  ).then((m) => m.default);

  return (
    <IntlProvider messages={messages} locale={localeCookieValue}>
      <RootLayoutInner locale={localeCookieValue}>{children}</RootLayoutInner>
    </IntlProvider>
  );
}

function RootLayoutInner(props: any) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased bg-gray-100")}>
        <Navbar body_padding={BODY_PADDING} locale={props.locale} />
        <main
          className={cn(
            "min-h-screen flex items-stretch flex-col pb-28 max-w-5xl mx-auto",
            BODY_PADDING
          )}
        >
          {props.children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
