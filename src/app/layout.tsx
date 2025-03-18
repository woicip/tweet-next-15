import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/common/components/Navigation/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hall of Tweets",
  description: "Showcase your best tweets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-[60%] mx-auto grid grid-cols-[250px_1fr_250px]">
          <section className="relative">
            <Navigation />
          </section>

          <main className="w-full border-r border-white/20">
            {children}
          </main>

          <section>
          </section>
        </div>
      </body>
    </html>
  );
}
