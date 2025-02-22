import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Microfinance Bank in Kenya | SNEP Microfinance",
  description: "Looking for the best microfinance in Kenya? SNEP offers the highest savings returns, fastest loans, and most innovative banking solutions. Trusted by 100,000+ Kenyans.",
  keywords: "best microfinance in Kenya, top microfinance bank Kenya, highest paying savings Kenya, fastest loans Kenya, SNEP microfinance, business loans Kenya, personal loans Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
