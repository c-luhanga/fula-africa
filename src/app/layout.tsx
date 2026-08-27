import type { Metadata } from "next";
import { Inter, Yeseva_One } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const yeseva = Yeseva_One({
  variable: "--font-yeseva",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fula Africa | Ending Human Trafficking in Southern Africa",
  description:
    "Fula Africa is a nonprofit dedicated to equipping and protecting the rights and dignity of victims of human trafficking, empowering communities and supporting survivors across Southern Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${yeseva.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <div className="bg-brand-ink px-4 py-2 text-center text-xs text-white/80">
          <span className="hidden sm:inline">Suspect trafficking? </span>
          <a href={site.hotline.href} className="font-semibold text-white underline underline-offset-2">
            <span className="hidden sm:inline">{site.hotline.label}</span>
            <span className="sm:hidden">Trafficking Hotline</span>
            {": "}
            {site.hotline.number}
          </a>
        </div>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
