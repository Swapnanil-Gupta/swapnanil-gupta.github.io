import type { Metadata } from "next";
import "./globals.css";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Swapnanil Gupta Portfolio",
  description: "Swapnanil Gupta Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-base font-sans antialiased">
        <div className="w-full max-w-4xl py-8 md:py-16 px-4 md:px-8 mx-auto">
          <main className="flex flex-col gap-16">
            <Intro />
            <div className="h-0.5 bg-neutral-800"></div>
            {children}
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
