import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Intro from "./components/Intro";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Swapnanil Gupta Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-background text-base font-sans antialiased`}
      >
        <div className="w-full max-w-2xl py-8 md:py-16 px-4 md:px-8 mx-auto">
          <main className="flex flex-col gap-16">
            <Intro />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
