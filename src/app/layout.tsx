import type { Metadata } from "next";
import { cookies } from "next/headers";
import { IntlProvider } from "../lib/i18n";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { IntlMessage } from "../lib/i18n";
import { LocaleSwitcher } from "@/components/locale-switcher";

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
            <span>
              <IntlMessage id="hackupc" />
            </span>
          </Link>

          <div className="flex gap-2 flex-row flex-nowrap gap-x-1.5 items-center">
            <Link
              href="/model-architecture"
              className="flex items-center justify-center"
            >
              <span>
                <IntlMessage id="modelArchitectureTitle" />
              </span>
            </Link>
            <LocaleSwitcher locale={props.locale} />
          </div>
        </header>
        <main
          className={cn(
            "min-h-screen flex items-stretch flex-col pb-28 max-w-5xl mx-auto",
            BODY_PADDING
          )}
        >
          {props.children}
        </main>
      </body>
    </html>
  );
}
