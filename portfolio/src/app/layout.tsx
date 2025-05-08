import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Shaqqou | Software Engineer",
  description: "Portfolio of Ahmad Shaqqou, Software Engineer and UCF student",
  keywords: ["software engineer", "web developer", "portfolio", "UCF", "computer science"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {/* Decorative element */}
        <div className="decoration"></div>
        
        {children}
      </body>
    </html>
  );
}
