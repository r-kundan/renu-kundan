import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renu Kundan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex gap-20 flex-col`}> 
          <Navbar />
        <div className="flex justify-center items-center relative">
          {children}
        </div>
        <Footer /></body>
    </html>
  );
}
