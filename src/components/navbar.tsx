"use client";
import { IntlMessage } from "../lib/i18n";
import { LocaleSwitcher } from "@/components/locale-switcher";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

export default function Navbar({
  body_padding,
  locale,
}: {
  body_padding: string;
  locale: string;
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "top-0 sticky z-20 w-full py-3 bg-gray-100 flex flex-row flex-nowrap justify-between max-w-5xl mx-auto h-14 items-stretch animate-in fade-in slide-in-from-top-4 duration-1000 ease-in-out",
        body_padding
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
      <div className="hidden md:block">
        <div className="flex gap-2 flex-row flex-nowrap gap-x-1.5 items-center">
          <Link
            href="/model-architecture"
            className="flex items-center justify-center"
          >
            <span className="px-2">
              <IntlMessage id="modelArchitectureTitle" />
            </span>
          </Link>
          <span className="px-2">|</span>
          <Link
            href="/recommender"
            className="flex items-center justify-center"
          >
            <span className="px-2">
              <IntlMessage id="recommenderTitle" />
            </span>
          </Link>
          <span className="px-2">|</span>
          <LocaleSwitcher locale={locale} />
        </div>
      </div>

      <div className="block md:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="menu-icon"
          >
            <line x1="7" y1="12" x2="21" y2="12" className="line"></line>
            <line x1="3" y1="6" x2="21" y2="6" className="line"></line>
            <line x1="12" y1="18" x2="21" y2="18" className="line"></line>
            <line x1="18" y1="6" x2="6" y2="18" className="close"></line>
            <line x1="6" y1="6" x2="18" y2="18" className="close"></line>
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-100 border-y border-gray-200 border-b">
          <nav>
            <div className="flex flex-col items-center">
              <Link
                href="/model-architecture"
                onClick={closeMenu}
                className="py-2"
              >
                Model Architecture
              </Link>
              <Link href="/recommender" onClick={closeMenu} className="py-2">
                Recommender
              </Link>
              <div className="py-2">
                <LocaleSwitcher locale={locale} />
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
