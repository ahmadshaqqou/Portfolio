import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  authors: [{ name: "Ahmad Shaqqou" }],
  openGraph: {
    title: "Ahmad Shaqqou | Software Engineer",
    description: "Portfolio of Ahmad Shaqqou, Software Engineer and UCF student",
    url: "https://ahmadshaqqou.com",
    siteName: "Ahmad Shaqqou Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Decorative element */}
        <div className="decoration"></div>
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
